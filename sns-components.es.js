typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Co = 1, To = 2, fh = 4, Xp = 8, Zp = 16, e_ = 1, t_ = 2, ph = 4, n_ = 8, i_ = 16, r_ = 1, s_ = 2, _h = "[", So = "[!", dl = "]", Hi = {}, Ue = Symbol(), o_ = "http://www.w3.org/1999/xhtml", a_ = "http://www.w3.org/2000/svg", l_ = "@attach", mh = !1;
var fl = Array.isArray, c_ = Array.prototype.indexOf, pl = Array.from, Vs = Object.keys, Wr = Object.defineProperty, on = Object.getOwnPropertyDescriptor, gh = Object.getOwnPropertyDescriptors, u_ = Object.prototype, h_ = Array.prototype, _l = Object.getPrototypeOf, Oc = Object.isExtensible;
function fr(t) {
  return typeof t == "function";
}
const Pn = () => {
};
function d_(t) {
  return t();
}
function js(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function vh() {
  var t, e, n = new Promise((i, r) => {
    t = i, e = r;
  });
  return { promise: n, resolve: t, reject: e };
}
function f_(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const i of t)
    if (n.push(i), n.length === e) break;
  return n;
}
const Ke = 2, ml = 4, ko = 8, pn = 16, _n = 32, Vn = 64, Ao = 128, qe = 1024, ut = 2048, mn = 4096, _t = 8192, an = 16384, gl = 32768, si = 65536, Lc = 1 << 17, p_ = 1 << 18, _i = 1 << 19, yh = 1 << 20, wt = 256, zs = 512, Bs = 32768, ka = 1 << 21, vl = 1 << 22, ti = 1 << 23, Wt = Symbol("$state"), yl = Symbol("legacy props"), __ = Symbol(""), Ri = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), m_ = 1, bl = 3, Ji = 8;
function bh(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function g_() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function v_(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function y_() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function b_(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function w_() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function E_() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function I_(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function C_() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function T_() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function S_() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function k_() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ro(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function A_() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function R_() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let F = !1;
function pt(t) {
  F = t;
}
let Y;
function We(t) {
  if (t === null)
    throw Ro(), Hi;
  return Y = t;
}
function oi() {
  return We(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(Y)
  );
}
function _(t) {
  if (F) {
    if (/* @__PURE__ */ Gt(Y) !== null)
      throw Ro(), Hi;
    Y = t;
  }
}
function Zt(t = 1) {
  if (F) {
    for (var e = t, n = Y; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n);
    Y = n;
  }
}
function qs(t = !0) {
  for (var e = 0, n = Y; ; ) {
    if (n.nodeType === Ji) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === dl) {
        if (e === 0) return n;
        e -= 1;
      } else (i === _h || i === So) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n)
    );
    t && n.remove(), n = r;
  }
}
function wh(t) {
  if (!t || t.nodeType !== Ji)
    throw Ro(), Hi;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Eh(t) {
  return t === this.v;
}
function Ih(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ch(t) {
  return !Ih(t, this.v);
}
let Xi = !1, P_ = !1;
function N_() {
  Xi = !0;
}
let we = null;
function Wi(t) {
  we = t;
}
function jn(t, e = !1, n) {
  we = {
    p: we,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Xi && !e ? { s: null, u: null, $: [] } : null
  };
}
function zn(t) {
  var e = (
    /** @type {ComponentContext} */
    we
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var i of n)
      jh(i);
  }
  return t !== void 0 && (e.x = t), e.i = !0, we = e.p, t ?? /** @type {T} */
  {};
}
function ss() {
  return !Xi || we !== null && we.l === null;
}
let Zn = [];
function Th() {
  var t = Zn;
  Zn = [], js(t);
}
function Bn(t) {
  if (Zn.length === 0 && !Ar) {
    var e = Zn;
    queueMicrotask(() => {
      e === Zn && Th();
    });
  }
  Zn.push(t);
}
function x_() {
  for (; Zn.length > 0; )
    Th();
}
function Sh(t) {
  var e = U;
  if (e === null)
    return K.f |= ti, t;
  if ((e.f & gl) === 0) {
    if ((e.f & Ao) === 0)
      throw t;
    e.b.error(t);
  } else
    Vi(t, e);
}
function Vi(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ao) !== 0)
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
const Ps = /* @__PURE__ */ new Set();
let se = null, kr = null, At = null, Ht = [], Po = null, Aa = !1, Ar = !1;
class Nt {
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
    Ht = [], kr = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const i of e)
      this.#n(i, n);
    this.is_fork || this.#c(), this.#r > 0 || this.is_fork ? (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects)) : (kr = this, se = null, Dc(n.render_effects), Dc(n.effects), kr = null, this.#l?.resolve()), At = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #n(e, n) {
    e.f ^= qe;
    for (var i = e.first; i !== null; ) {
      var r = i.f, s = (r & (_n | Vn)) !== 0, o = s && (r & qe) !== 0, a = o || (r & _t) !== 0 || this.skipped_effects.has(i);
      if ((i.f & Ao) !== 0 && i.b?.is_pending() && (n = {
        parent: n,
        effect: i,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && i.fn !== null) {
        s ? i.f ^= qe : (r & ml) !== 0 ? n.effects.push(i) : cs(i) && ((i.f & pn) !== 0 && n.block_effects.push(i), jr(i));
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
      ((n.f & ut) !== 0 ? this.#o : this.#s).push(n), Ge(n, qe);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), this.current.set(e, e.v), At?.set(e, e.v);
  }
  activate() {
    se = this;
  }
  deactivate() {
    se = null, At = null;
  }
  flush() {
    if (this.activate(), Ht.length > 0) {
      if (kh(), se !== null && se !== this)
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
    if (Ps.size > 1) {
      this.previous.clear();
      var e = At, n = !0, i = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const r of Ps) {
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
            Ah(c, o, a, l);
          if (Ht.length > 0) {
            se = r, r.apply();
            for (const c of Ht)
              r.#n(c, i);
            Ht = [], r.deactivate();
          }
        }
      }
      se = null, At = e;
    }
    this.committed = !0, Ps.delete(this);
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
      Ge(e, ut), ai(e);
    for (const e of this.#s)
      Ge(e, mn), ai(e);
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
    return (this.#l ??= vh()).promise;
  }
  static ensure() {
    if (se === null) {
      const e = se = new Nt();
      Ps.add(se), Ar || Nt.enqueue(() => {
        se === e && e.flush();
      });
    }
    return se;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Bn(e);
  }
  apply() {
  }
}
function ft(t) {
  var e = Ar;
  Ar = !0;
  try {
    for (var n; ; ) {
      if (x_(), Ht.length === 0 && (se?.flush(), Ht.length === 0))
        return Po = null, /** @type {T} */
        n;
      kh();
    }
  } finally {
    Ar = e;
  }
}
function kh() {
  var t = Oi;
  Aa = !0;
  try {
    var e = 0;
    for (Hc(!0); Ht.length > 0; ) {
      var n = Nt.ensure();
      if (e++ > 1e3) {
        var i, r;
        O_();
      }
      n.process(Ht), Nn.clear();
    }
  } finally {
    Aa = !1, Hc(t), Po = null;
  }
}
function O_() {
  try {
    w_();
  } catch (t) {
    Vi(t, Po);
  }
}
let en = null;
function Dc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var i = t[n++];
      if ((i.f & (an | _t)) === 0 && cs(i) && (en = /* @__PURE__ */ new Set(), jr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null && i.ac === null ? qh(i) : i.fn = null), en?.size > 0)) {
        Nn.clear();
        for (const r of en) {
          if ((r.f & (an | _t)) !== 0) continue;
          const s = [r];
          let o = r.parent;
          for (; o !== null; )
            en.has(o) && (en.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (an | _t)) === 0 && jr(l);
          }
        }
        en.clear();
      }
    }
    en = null;
  }
}
function Ah(t, e, n, i) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const r of t.reactions) {
      const s = r.f;
      (s & Ke) !== 0 ? Ah(
        /** @type {Derived} */
        r,
        e,
        n,
        i
      ) : (s & (vl | pn)) !== 0 && (s & ut) === 0 && // we may have scheduled this one already
      Rh(r, e, i) && (Ge(r, ut), ai(
        /** @type {Effect} */
        r
      ));
    }
}
function Rh(t, e, n) {
  const i = n.get(t);
  if (i !== void 0) return i;
  if (t.deps !== null)
    for (const r of t.deps) {
      if (e.includes(r))
        return !0;
      if ((r.f & Ke) !== 0 && Rh(
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
function ai(t) {
  for (var e = Po = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Aa && e === U && (n & pn) !== 0)
      return;
    if ((n & (Vn | _n)) !== 0) {
      if ((n & qe) === 0) return;
      e.f ^= qe;
    }
  }
  Ht.push(e);
}
function L_(t) {
  let e = 0, n = Mn(0), i;
  return () => {
    B_() && (v(n), xo(() => (e === 0 && (i = Bt(() => t(() => Rr(n)))), e += 1, () => {
      Bn(() => {
        e -= 1, e === 0 && (i?.(), i = void 0, Rr(n));
      });
    })));
  };
}
var D_ = si | _i | Ao;
function M_(t, e, n) {
  new $_(t, e, n);
}
class $_ {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #i = F ? Y : null;
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
  #y = L_(() => (this.#d = Mn(this.#f), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, i) {
    this.#e = e, this.#r = n, this.#l = i, this.parent = /** @type {Effect} */
    U.b, this.#t = !!this.#r.pending, this.#o = Zi(() => {
      if (U.b = this, F) {
        const s = this.#i;
        oi(), /** @type {Comment} */
        s.nodeType === Ji && /** @type {Comment} */
        s.data === So ? this.#w() : this.#b();
      } else {
        var r = this.#g();
        try {
          this.#s = ot(() => i(r));
        } catch (s) {
          this.error(s);
        }
        this.#h > 0 ? this.#m() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, D_), F && (this.#e = Y);
  }
  #b() {
    try {
      this.#s = ot(() => this.#l(this.#e));
    } catch (e) {
      this.error(e);
    }
    this.#t = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#n = ot(() => e(this.#e)), Nt.enqueue(() => {
      var n = this.#g();
      this.#s = this.#_(() => (Nt.ensure(), ot(() => this.#l(n)))), this.#h > 0 ? this.#m() : (xi(
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
  #_(e) {
    var n = U, i = K, r = we;
    Tt(this.#o), lt(this.#o), Wi(this.#o.ctx);
    try {
      return e();
    } catch (s) {
      return Sh(s), null;
    } finally {
      Tt(n), lt(i), Wi(r);
    }
  }
  #m() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#s !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), Yh(this.#s, this.#c)), this.#n === null && (this.#n = ot(() => e(this.#e)));
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
    this.#h += e, this.#h === 0 && (this.#t = !1, this.#n && xi(this.#n, () => {
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
    this.#v(e), this.#f += e, this.#d && ji(this.#d, this.#f);
  }
  get_effect_pending() {
    return this.#y(), v(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#r.onerror;
    let i = this.#r.failed;
    if (this.#p || !n && !i)
      throw e;
    this.#s && (Oe(this.#s), this.#s = null), this.#n && (Oe(this.#n), this.#n = null), this.#a && (Oe(this.#a), this.#a = null), F && (We(
      /** @type {TemplateNode} */
      this.#i
    ), Zt(), We(qs()));
    var r = !1, s = !1;
    const o = () => {
      if (r) {
        R_();
        return;
      }
      r = !0, s && k_(), Nt.ensure(), this.#f = 0, this.#a !== null && xi(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#s = this.#_(() => (this.#p = !1, ot(() => this.#l(this.#e)))), this.#h > 0 ? this.#m() : this.#t = !1;
    };
    var a = K;
    try {
      lt(null), s = !0, n?.(e, o), s = !1;
    } catch (l) {
      Vi(l, this.#o && this.#o.parent);
    } finally {
      lt(a);
    }
    i && Bn(() => {
      this.#a = this.#_(() => {
        Nt.ensure(), this.#p = !0;
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
function Ph(t, e, n, i) {
  const r = ss() ? os : wl;
  if (n.length === 0 && t.length === 0) {
    i(e.map(r));
    return;
  }
  var s = se, o = (
    /** @type {Effect} */
    U
  ), a = F_();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ U_(c))).then((c) => {
      a();
      try {
        i([...e.map(r), ...c]);
      } catch (h) {
        (o.f & an) === 0 && Vi(h, o);
      }
      s?.deactivate(), Gs();
    }).catch((c) => {
      Vi(c, o);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      s?.deactivate(), Gs();
    }
  }) : l();
}
function F_() {
  var t = U, e = K, n = we, i = se;
  return function(s = !0) {
    Tt(t), lt(e), Wi(n), s && i?.activate();
  };
}
function Gs() {
  Tt(null), lt(null), Wi(null);
}
// @__NO_SIDE_EFFECTS__
function os(t) {
  var e = Ke | ut, n = K !== null && (K.f & Ke) !== 0 ? (
    /** @type {Derived} */
    K
  ) : null;
  return U === null || n !== null && (n.f & wt) !== 0 ? e |= wt : U.f |= _i, {
    ctx: we,
    deps: null,
    effects: null,
    equals: Eh,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ue
    ),
    wv: 0,
    parent: n ?? U,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function U_(t, e) {
  let n = (
    /** @type {Effect | null} */
    U
  );
  n === null && g_();
  var i = (
    /** @type {Boundary} */
    n.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Mn(
    /** @type {V} */
    Ue
  ), o = !K, a = /* @__PURE__ */ new Map();
  return Y_(() => {
    var l = vh();
    r = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === se && c.committed && c.deactivate(), Gs();
      });
    } catch (u) {
      l.reject(u), Gs();
    }
    var c = (
      /** @type {Batch} */
      se
    );
    if (o) {
      var h = !i.is_pending();
      i.update_pending_count(1), c.increment(h), a.get(c)?.reject(Ri), a.delete(c), a.set(c, l);
    }
    const d = (u, f = void 0) => {
      if (c.activate(), f)
        f !== Ri && (s.f |= ti, ji(s, f));
      else {
        (s.f & ti) !== 0 && (s.f ^= ti), ji(s, u);
        for (const [p, g] of a) {
          if (a.delete(p), p === c) break;
          g.reject(Ri);
        }
      }
      o && (i.update_pending_count(-1), c.decrement(h));
    };
    l.promise.then(d, (u) => d(null, u || "unknown"));
  }), as(() => {
    for (const l of a.values())
      l.reject(Ri);
  }), new Promise((l) => {
    function c(h) {
      function d() {
        h === r ? l(s) : c(r);
      }
      h.then(d, d);
    }
    c(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Ra(t) {
  const e = /* @__PURE__ */ os(t);
  return Qh(e), e;
}
// @__NO_SIDE_EFFECTS__
function wl(t) {
  const e = /* @__PURE__ */ os(t);
  return e.equals = Ch, e;
}
function Nh(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Oe(
        /** @type {Effect} */
        e[n]
      );
  }
}
function H_(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Ke) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function El(t) {
  var e, n = U;
  Tt(H_(t));
  try {
    t.f &= ~Bs, Nh(t), e = ed(t);
  } finally {
    Tt(n);
  }
  return e;
}
function xh(t) {
  var e = El(t);
  if (t.equals(e) || (t.v = e, t.wv = Xh()), !mi)
    if (At !== null)
      At.set(t, t.v);
    else {
      var n = (kn || (t.f & wt) !== 0) && t.deps !== null ? mn : qe;
      Ge(t, n);
    }
}
let Pa = /* @__PURE__ */ new Set();
const Nn = /* @__PURE__ */ new Map();
let Oh = !1;
function Mn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Eh,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ae(t, e) {
  const n = Mn(t);
  return Qh(n), n;
}
// @__NO_SIDE_EFFECTS__
function Il(t, e = !1, n = !0) {
  const i = Mn(t);
  return e || (i.equals = Ch), Xi && n && we !== null && we.l !== null && (we.l.s ??= []).push(i), i;
}
function x(t, e, n = !1) {
  K !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Rt || (K.f & Lc) !== 0) && ss() && (K.f & (Ke | pn | vl | Lc)) !== 0 && !ln?.includes(t) && S_();
  let i = n ? tn(e) : e;
  return ji(t, i);
}
function ji(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    mi ? Nn.set(t, e) : Nn.set(t, n), t.v = e;
    var i = Nt.ensure();
    i.capture(t, n), (t.f & Ke) !== 0 && ((t.f & ut) !== 0 && El(
      /** @type {Derived} */
      t
    ), Ge(t, (t.f & wt) === 0 ? qe : mn)), t.wv = Xh(), Lh(t, ut), ss() && U !== null && (U.f & qe) !== 0 && (U.f & (_n | Vn)) === 0 && (vt === null ? X_([t]) : vt.push(t)), !i.is_fork && Pa.size > 0 && !Oh && W_();
  }
  return e;
}
function W_() {
  Oh = !1;
  const t = Array.from(Pa);
  for (const e of t)
    (e.f & qe) !== 0 && Ge(e, mn), cs(e) && jr(e);
  Pa.clear();
}
function Mc(t, e = 1) {
  var n = v(t), i = e === 1 ? n++ : n--;
  return x(t, n), i;
}
function Rr(t) {
  x(t, t.v + 1);
}
function Lh(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var i = ss(), r = n.length, s = 0; s < r; s++) {
      var o = n[s], a = o.f;
      if (!(!i && o === U)) {
        var l = (a & ut) === 0;
        l && Ge(o, e), (a & Ke) !== 0 ? (a & Bs) === 0 && (o.f |= Bs, Lh(
          /** @type {Derived} */
          o,
          mn
        )) : l && ((a & pn) !== 0 && en !== null && en.add(
          /** @type {Effect} */
          o
        ), ai(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function tn(t) {
  if (typeof t != "object" || t === null || Wt in t)
    return t;
  const e = _l(t);
  if (e !== u_ && e !== h_)
    return t;
  var n = /* @__PURE__ */ new Map(), i = fl(t), r = /* @__PURE__ */ ae(0), s = ni, o = (a) => {
    if (ni === s)
      return a();
    var l = K, c = ni;
    lt(null), Vc(s);
    var h = a();
    return lt(l), Vc(c), h;
  };
  return i && n.set("length", /* @__PURE__ */ ae(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && C_();
        var h = n.get(l);
        return h === void 0 ? h = o(() => {
          var d = /* @__PURE__ */ ae(c.value);
          return n.set(l, d), d;
        }) : x(h, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const h = o(() => /* @__PURE__ */ ae(Ue));
            n.set(l, h), Rr(r);
          }
        } else
          x(c, Ue), Rr(r);
        return !0;
      },
      get(a, l, c) {
        if (l === Wt)
          return t;
        var h = n.get(l), d = l in a;
        if (h === void 0 && (!d || on(a, l)?.writable) && (h = o(() => {
          var f = tn(d ? a[l] : Ue), p = /* @__PURE__ */ ae(f);
          return p;
        }), n.set(l, h)), h !== void 0) {
          var u = v(h);
          return u === Ue ? void 0 : u;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var h = n.get(l);
          h && (c.value = v(h));
        } else if (c === void 0) {
          var d = n.get(l), u = d?.v;
          if (d !== void 0 && u !== Ue)
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
        if (l === Wt)
          return !0;
        var c = n.get(l), h = c !== void 0 && c.v !== Ue || Reflect.has(a, l);
        if (c !== void 0 || U !== null && (!h || on(a, l)?.writable)) {
          c === void 0 && (c = o(() => {
            var u = h ? tn(a[l]) : Ue, f = /* @__PURE__ */ ae(u);
            return f;
          }), n.set(l, c));
          var d = v(c);
          if (d === Ue)
            return !1;
        }
        return h;
      },
      set(a, l, c, h) {
        var d = n.get(l), u = l in a;
        if (i && l === "length")
          for (var f = c; f < /** @type {Source<number>} */
          d.v; f += 1) {
            var p = n.get(f + "");
            p !== void 0 ? x(p, Ue) : f in a && (p = o(() => /* @__PURE__ */ ae(Ue)), n.set(f + "", p));
          }
        if (d === void 0)
          (!u || on(a, l)?.writable) && (d = o(() => /* @__PURE__ */ ae(void 0)), x(d, tn(c)), n.set(l, d));
        else {
          u = d.v !== Ue;
          var g = o(() => tn(c));
          x(d, g);
        }
        var b = Reflect.getOwnPropertyDescriptor(a, l);
        if (b?.set && b.set.call(h, c), !u) {
          if (i && typeof l == "string") {
            var T = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= T.v && x(T, S + 1);
          }
          Rr(r);
        }
        return !0;
      },
      ownKeys(a) {
        v(r);
        var l = Reflect.ownKeys(a).filter((d) => {
          var u = n.get(d);
          return u === void 0 || u.v !== Ue;
        });
        for (var [c, h] of n)
          h.v !== Ue && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        T_();
      }
    }
  );
}
function $c(t) {
  try {
    if (t !== null && typeof t == "object" && Wt in t)
      return t[Wt];
  } catch {
  }
  return t;
}
function V_(t, e) {
  return Object.is($c(t), $c(e));
}
var Fc, Dh, Mh, $h;
function Na() {
  if (Fc === void 0) {
    Fc = window, Dh = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Mh = on(e, "firstChild").get, $h = on(e, "nextSibling").get, Oc(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Oc(n) && (n.__t = void 0);
  }
}
function Ct(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function zt(t) {
  return Mh.call(t);
}
// @__NO_SIDE_EFFECTS__
function Gt(t) {
  return $h.call(t);
}
function m(t, e) {
  if (!F)
    return /* @__PURE__ */ zt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ zt(Y)
  );
  if (n === null)
    n = Y.appendChild(Ct());
  else if (e && n.nodeType !== bl) {
    var i = Ct();
    return n?.before(i), We(i), i;
  }
  return We(n), n;
}
function pe(t, e = !1) {
  if (!F) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ zt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gt(n) : n;
  }
  if (e && Y?.nodeType !== bl) {
    var i = Ct();
    return Y?.before(i), We(i), i;
  }
  return Y;
}
function y(t, e = 1, n = !1) {
  let i = F ? Y : t;
  for (var r; e--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(i);
  if (!F)
    return i;
  if (n && i?.nodeType !== bl) {
    var s = Ct();
    return i === null ? r?.after(s) : i.before(s), We(s), s;
  }
  return We(i), /** @type {TemplateNode} */
  i;
}
function Fh(t) {
  t.textContent = "";
}
function Uh() {
  return !1;
}
function j_(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Bn(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Uc = !1;
function Hh() {
  Uc || (Uc = !0, document.addEventListener(
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
function No(t) {
  var e = K, n = U;
  lt(null), Tt(null);
  try {
    return t();
  } finally {
    lt(e), Tt(n);
  }
}
function Wh(t, e, n, i = n) {
  t.addEventListener(e, () => No(n));
  const r = t.__on_r;
  r ? t.__on_r = () => {
    r(), i(!0);
  } : t.__on_r = () => i(!0), Hh();
}
function Vh(t) {
  U === null && K === null && b_(), K !== null && (K.f & wt) !== 0 && U === null && y_(), mi && v_();
}
function z_(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function $t(t, e, n, i = !0) {
  var r = U;
  r !== null && (r.f & _t) !== 0 && (t |= _t);
  var s = {
    ctx: we,
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
      jr(s), s.f |= gl;
    } catch (l) {
      throw Oe(s), l;
    }
  else e !== null && ai(s);
  if (i) {
    var o = s;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & _i) === 0 && (o = o.first, (t & pn) !== 0 && (t & si) !== 0 && o !== null && (o.f |= si)), o !== null && (o.parent = r, r !== null && z_(o, r), K !== null && (K.f & Ke) !== 0 && (t & Vn) === 0)) {
      var a = (
        /** @type {Derived} */
        K
      );
      (a.effects ??= []).push(o);
    }
  }
  return s;
}
function B_() {
  return K !== null && !Rt;
}
function as(t) {
  const e = $t(ko, null, !1);
  return Ge(e, qe), e.teardown = t, e;
}
function xa(t) {
  Vh();
  var e = (
    /** @type {Effect} */
    U.f
  ), n = !K && (e & _n) !== 0 && (e & gl) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      we
    );
    (i.e ??= []).push(t);
  } else
    return jh(t);
}
function jh(t) {
  return $t(ml | yh, t, !1);
}
function q_(t) {
  return Vh(), $t(ko | yh, t, !0);
}
function G_(t) {
  Nt.ensure();
  const e = $t(Vn | _i, t, !0);
  return () => {
    Oe(e);
  };
}
function K_(t) {
  Nt.ensure();
  const e = $t(Vn | _i, t, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? xi(e, () => {
      Oe(e), i(void 0);
    }) : (Oe(e), i(void 0));
  });
}
function ls(t) {
  return $t(ml, t, !1);
}
function Y_(t) {
  return $t(vl | _i, t, !0);
}
function xo(t, e = 0) {
  return $t(ko | e, t, !0);
}
function ce(t, e = [], n = [], i = []) {
  Ph(i, e, n, (r) => {
    $t(ko, () => t(...r.map(v)), !0);
  });
}
function Zi(t, e = 0) {
  var n = $t(pn | e, t, !0);
  return n;
}
function ot(t, e = !0) {
  return $t(_n | _i, t, !0, e);
}
function zh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = mi, i = K;
    Wc(!0), lt(null);
    try {
      e.call(null);
    } finally {
      Wc(n), lt(i);
    }
  }
}
function Bh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && No(() => {
      r.abort(Ri);
    });
    var i = n.next;
    (n.f & Vn) !== 0 ? n.parent = null : Oe(n, e), n = i;
  }
}
function Q_(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & _n) === 0 && Oe(e), e = n;
  }
}
function Oe(t, e = !0) {
  var n = !1;
  (e || (t.f & p_) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (J_(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Bh(t, e && !n), Ks(t, 0), Ge(t, an);
  var i = t.transitions;
  if (i !== null)
    for (const s of i)
      s.stop();
  zh(t);
  var r = t.parent;
  r !== null && r.first !== null && qh(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function J_(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(t)
    );
    t.remove(), t = n;
  }
}
function qh(t) {
  var e = t.parent, n = t.prev, i = t.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), e !== null && (e.first === t && (e.first = i), e.last === t && (e.last = n));
}
function xi(t, e, n = !0) {
  var i = [];
  Cl(t, i, !0), Gh(i, () => {
    n && Oe(t), e && e();
  });
}
function Gh(t, e) {
  var n = t.length;
  if (n > 0) {
    var i = () => --n || e();
    for (var r of t)
      r.out(i);
  } else
    e();
}
function Cl(t, e, n) {
  if ((t.f & _t) === 0) {
    if (t.f ^= _t, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var r = i.next, s = (i.f & si) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & _n) !== 0 && (t.f & pn) !== 0;
      Cl(i, e, s ? n : !1), i = r;
    }
  }
}
function Tl(t) {
  Kh(t, !0);
}
function Kh(t, e) {
  if ((t.f & _t) !== 0) {
    t.f ^= _t, (t.f & qe) === 0 && (Ge(t, ut), ai(t));
    for (var n = t.first; n !== null; ) {
      var i = n.next, r = (n.f & si) !== 0 || (n.f & _n) !== 0;
      Kh(n, r ? e : !1), n = i;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function Yh(t, e) {
  for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
    var r = n === i ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n)
    );
    e.append(n), n = r;
  }
}
let Oi = !1;
function Hc(t) {
  Oi = t;
}
let mi = !1;
function Wc(t) {
  mi = t;
}
let K = null, Rt = !1;
function lt(t) {
  K = t;
}
let U = null;
function Tt(t) {
  U = t;
}
let ln = null;
function Qh(t) {
  K !== null && (ln === null ? ln = [t] : ln.push(t));
}
let Je = null, dt = 0, vt = null;
function X_(t) {
  vt = t;
}
let Jh = 1, Vr = 0, ni = Vr;
function Vc(t) {
  ni = t;
}
let kn = !1;
function Xh() {
  return ++Jh;
}
function cs(t) {
  var e = t.f;
  if ((e & ut) !== 0)
    return !0;
  if ((e & mn) !== 0) {
    var n = t.deps, i = (e & wt) !== 0;
    if (e & Ke && (t.f &= ~Bs), n !== null) {
      var r, s, o = (e & zs) !== 0, a = i && U !== null && !kn, l = n.length;
      if ((o || a) && (U === null || (U.f & an) === 0)) {
        var c = (
          /** @type {Derived} */
          t
        ), h = c.parent;
        for (r = 0; r < l; r++)
          s = n[r], (o || !s?.reactions?.includes(c)) && (s.reactions ??= []).push(c);
        o && (c.f ^= zs), a && h !== null && (h.f & wt) === 0 && (c.f ^= wt);
      }
      for (r = 0; r < l; r++)
        if (s = n[r], cs(
          /** @type {Derived} */
          s
        ) && xh(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!i || U !== null && !kn) && Ge(t, qe);
  }
  return !1;
}
function Zh(t, e, n = !0) {
  var i = t.reactions;
  if (i !== null && !ln?.includes(t))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      (s.f & Ke) !== 0 ? Zh(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? Ge(s, ut) : (s.f & qe) !== 0 && Ge(s, mn), ai(
        /** @type {Effect} */
        s
      ));
    }
}
function ed(t) {
  var e = Je, n = dt, i = vt, r = K, s = kn, o = ln, a = we, l = Rt, c = ni, h = t.f;
  Je = /** @type {null | Value[]} */
  null, dt = 0, vt = null, kn = (h & wt) !== 0 && (Rt || !Oi || K === null), K = (h & (_n | Vn)) === 0 ? t : null, ln = null, Wi(t.ctx), Rt = !1, ni = ++Vr, t.ac !== null && (No(() => {
    t.ac.abort(Ri);
  }), t.ac = null);
  try {
    t.f |= ka;
    var d = (
      /** @type {Function} */
      t.fn
    ), u = d(), f = t.deps;
    if (Je !== null) {
      var p;
      if (Ks(t, dt), f !== null && dt > 0)
        for (f.length = dt + Je.length, p = 0; p < Je.length; p++)
          f[dt + p] = Je[p];
      else
        t.deps = f = Je;
      if (!kn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (h & Ke) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = dt; p < f.length; p++)
          (f[p].reactions ??= []).push(t);
    } else f !== null && dt < f.length && (Ks(t, dt), f.length = dt);
    if (ss() && vt !== null && !Rt && f !== null && (t.f & (Ke | mn | ut)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      vt.length; p++)
        Zh(
          vt[p],
          /** @type {Effect} */
          t
        );
    return r !== null && r !== t && (Vr++, vt !== null && (i === null ? i = vt : i.push(.../** @type {Source[]} */
    vt))), (t.f & ti) !== 0 && (t.f ^= ti), u;
  } catch (g) {
    return Sh(g);
  } finally {
    t.f ^= ka, Je = e, dt = n, vt = i, K = r, kn = s, ln = o, Wi(a), Rt = l, ni = c;
  }
}
function Z_(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var i = c_.call(n, t);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = e.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && (e.f & Ke) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Je === null || !Je.includes(e)) && (Ge(e, mn), (e.f & (wt | zs)) === 0 && (e.f ^= zs), Nh(
    /** @type {Derived} **/
    e
  ), Ks(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ks(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var i = e; i < n.length; i++)
      Z_(t, n[i]);
}
function jr(t) {
  var e = t.f;
  if ((e & an) === 0) {
    Ge(t, qe);
    var n = U, i = Oi;
    U = t, Oi = !0;
    try {
      (e & pn) !== 0 ? Q_(t) : Bh(t), zh(t);
      var r = ed(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Jh;
      var s;
      mh && P_ && (t.f & ut) !== 0 && t.deps;
    } finally {
      Oi = i, U = n;
    }
  }
}
async function em() {
  await Promise.resolve(), ft();
}
function v(t) {
  var e = t.f, n = (e & Ke) !== 0;
  if (K !== null && !Rt) {
    var i = U !== null && (U.f & an) !== 0;
    if (!i && !ln?.includes(t)) {
      var r = K.deps;
      if ((K.f & ka) !== 0)
        t.rv < Vr && (t.rv = Vr, Je === null && r !== null && r[dt] === t ? dt++ : Je === null ? Je = [t] : (!kn || !Je.includes(t)) && Je.push(t));
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
    a !== null && (a.f & wt) === 0 && (o.f ^= wt);
  }
  if (mi) {
    if (Nn.has(t))
      return Nn.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return ((o.f & qe) === 0 && o.reactions !== null || td(o)) && (l = El(o)), Nn.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, At?.has(o))
      return At.get(o);
    cs(o) && xh(o);
  }
  if (At?.has(t))
    return At.get(t);
  if ((t.f & ti) !== 0)
    throw t.v;
  return t.v;
}
function td(t) {
  if (t.v === Ue) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Nn.has(e) || (e.f & Ke) !== 0 && td(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Bt(t) {
  var e = Rt;
  try {
    return Rt = !0, t();
  } finally {
    Rt = e;
  }
}
const tm = -7169;
function Ge(t, e) {
  t.f = t.f & tm | e;
}
function Ai(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Wt in t)
      Oa(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Wt in n && Oa(n);
      }
  }
}
function Oa(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let i in t)
      try {
        Oa(t[i], e);
      } catch {
      }
    const n = _l(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const i = gh(n);
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
const nd = /* @__PURE__ */ new Set(), La = /* @__PURE__ */ new Set();
function id(t, e, n, i = {}) {
  function r(s) {
    if (i.capture || wr.call(e, s), !s.cancelBubble)
      return No(() => n?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Bn(() => {
    e.addEventListener(t, r, i);
  }) : e.addEventListener(t, r, i), r;
}
function Da(t, e, n, i, r) {
  var s = { capture: i, passive: r }, o = id(t, e, n, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && as(() => {
    e.removeEventListener(t, o, s);
  });
}
function us(t) {
  for (var e = 0; e < t.length; e++)
    nd.add(t[e]);
  for (var n of La)
    n(t);
}
let jc = null;
function wr(t) {
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
    Wr(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var h = K, d = U;
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
        } catch (b) {
          u ? f.push(b) : u = b;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (u) {
        for (let b of f)
          queueMicrotask(() => {
            throw b;
          });
        throw u;
      }
    } finally {
      t.__root = e, delete t.currentTarget, lt(h), Tt(d);
    }
  }
}
function rd(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function cn(t, e) {
  var n = (
    /** @type {Effect} */
    U
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  var n = (e & r_) !== 0, i = (e & s_) !== 0, r, s = !t.startsWith("<!>");
  return () => {
    if (F)
      return cn(Y, null), Y;
    r === void 0 && (r = rd(s ? t : "<!>" + t), n || (r = /** @type {Node} */
    /* @__PURE__ */ zt(r)));
    var o = (
      /** @type {TemplateNode} */
      i || Dh ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      cn(a, l);
    } else
      cn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function nm(t, e, n = "svg") {
  var i = !t.startsWith("<!>"), r = `<${n}>${i ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (F)
      return cn(Y, null), Y;
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        rd(r)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ zt(o)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ zt(a);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return cn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function im(t, e) {
  return /* @__PURE__ */ nm(t, e, "svg");
}
function ke() {
  if (F)
    return cn(Y, null), Y;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ct();
  return t.append(e, n), cn(e, n), t;
}
function L(t, e) {
  if (F) {
    U.nodes_end = Y, oi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function rm(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const sm = [
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
function om(t) {
  return sm.includes(t);
}
const am = {
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
function lm(t) {
  return t = t.toLowerCase(), am[t] ?? t;
}
const cm = ["touchstart", "touchmove"];
function um(t) {
  return cm.includes(t);
}
const hm = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function dm(t) {
  return hm.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function O(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function sd(t, e) {
  return od(t, e);
}
function fm(t, e) {
  Na(), e.intro = e.intro ?? !1;
  const n = e.target, i = F, r = Y;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ zt(n)
    ); s && (s.nodeType !== Ji || /** @type {Comment} */
    s.data !== _h); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(s);
    if (!s)
      throw Hi;
    pt(!0), We(
      /** @type {Comment} */
      s
    );
    const o = od(t, { ...e, anchor: s });
    return pt(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Hi && console.warn("Failed to hydrate: ", o), e.recover === !1 && E_(), Na(), Fh(n), pt(!1), sd(t, e);
  } finally {
    pt(i), We(r);
  }
}
const Ti = /* @__PURE__ */ new Map();
function od(t, { target: e, anchor: n, props: i = {}, events: r, context: s, intro: o = !0 }) {
  Na();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var u = 0; u < d.length; u++) {
      var f = d[u];
      if (!a.has(f)) {
        a.add(f);
        var p = um(f);
        e.addEventListener(f, wr, { passive: p });
        var g = Ti.get(f);
        g === void 0 ? (document.addEventListener(f, wr, { passive: p }), Ti.set(f, 1)) : Ti.set(f, g + 1);
      }
    }
  };
  l(pl(nd)), La.add(l);
  var c = void 0, h = K_(() => {
    var d = n ?? e.appendChild(Ct());
    return M_(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (u) => {
        if (s) {
          jn({});
          var f = (
            /** @type {ComponentContext} */
            we
          );
          f.c = s;
        }
        if (r && (i.$$events = r), F && cn(
          /** @type {TemplateNode} */
          u,
          null
        ), c = t(u, i) || {}, F && (U.nodes_end = Y, Y === null || Y.nodeType !== Ji || /** @type {Comment} */
        Y.data !== dl))
          throw Ro(), Hi;
        s && zn();
      }
    ), () => {
      for (var u of a) {
        e.removeEventListener(u, wr);
        var f = (
          /** @type {number} */
          Ti.get(u)
        );
        --f === 0 ? (document.removeEventListener(u, wr), Ti.delete(u)) : Ti.set(u, f);
      }
      La.delete(l), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return Ma.set(c, h), c;
}
let Ma = /* @__PURE__ */ new WeakMap();
function pm(t, e) {
  const n = Ma.get(t);
  return n ? (Ma.delete(t), n(e)) : Promise.resolve();
}
class ad {
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
      se
    );
    if (this.#t.has(e)) {
      var n = (
        /** @type {Key} */
        this.#t.get(e)
      ), i = this.#e.get(n);
      if (i)
        Tl(i);
      else {
        var r = this.#i.get(n);
        r && (this.#e.set(n, r.effect), this.#i.delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
      }
      for (const [s, o] of this.#t) {
        if (this.#t.delete(s), s === e)
          break;
        const a = this.#i.get(o);
        a && (Oe(a.effect), this.#i.delete(o));
      }
      for (const [s, o] of this.#e) {
        if (s === n) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var c = document.createDocumentFragment();
            Yh(o, c), c.append(Ct()), this.#i.set(s, { effect: o, fragment: c });
          } else
            Oe(o);
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
      n.includes(i) || (Oe(r.effect), this.#i.delete(i));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var i = (
      /** @type {Batch} */
      se
    ), r = Uh();
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
      F && (this.anchor = Y), this.#l();
  }
}
function Oo(t) {
  we === null && bh(), Xi && we.l !== null ? mm(we).m.push(t) : xa(() => {
    const e = Bt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function _m(t) {
  we === null && bh(), Oo(() => () => Bt(t));
}
function mm(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function Ie(t, e, n = !1) {
  F && oi();
  var i = new ad(t), r = n ? si : 0;
  function s(o, a) {
    if (F) {
      const c = wh(t) === So;
      if (o === c) {
        var l = qs();
        We(l), i.anchor = l, pt(!1), i.ensure(o, a), pt(!0);
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
function Lo(t, e) {
  return e;
}
function gm(t, e, n) {
  for (var i = t.items, r = [], s = e.length, o = 0; o < s; o++)
    Cl(e[o].e, r, !0);
  var a = s > 0 && r.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Fh(l), l.append(
      /** @type {Element} */
      n
    ), i.clear(), Ut(t, e[0].prev, e[s - 1].next);
  }
  Gh(r, () => {
    for (var c = 0; c < s; c++) {
      var h = e[c];
      a || (i.delete(h.k), Ut(t, h.prev, h.next)), Oe(h.e, !a);
    }
  });
}
function hs(t, e, n, i, r, s = null) {
  var o = t, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & fh) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = F ? We(
      /** @type {Comment | Text} */
      /* @__PURE__ */ zt(c)
    ) : c.appendChild(Ct());
  }
  F && oi();
  var h = null, d = !1, u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ wl(() => {
    var T = n();
    return fl(T) ? T : T == null ? [] : pl(T);
  }), p, g;
  function b() {
    vm(
      g,
      p,
      a,
      u,
      o,
      r,
      e,
      i,
      n
    ), s !== null && (p.length === 0 ? h ? Tl(h) : h = ot(() => s(o)) : h !== null && xi(h, () => {
      h = null;
    }));
  }
  Zi(() => {
    g ??= /** @type {Effect} */
    U, p = /** @type {V[]} */
    v(f);
    var T = p.length;
    if (d && T === 0)
      return;
    d = T === 0;
    let S = !1;
    if (F) {
      var k = wh(o) === So;
      k !== (T === 0) && (o = qs(), We(o), pt(!1), S = !0);
    }
    if (F) {
      for (var A = null, P, w = 0; w < T; w++) {
        if (Y.nodeType === Ji && /** @type {Comment} */
        Y.data === dl) {
          o = /** @type {Comment} */
          Y, S = !0, pt(!1);
          break;
        }
        var I = p[w], E = i(I, w);
        P = $a(
          Y,
          a,
          A,
          null,
          I,
          E,
          w,
          r,
          e,
          n
        ), a.items.set(E, P), A = P;
      }
      T > 0 && We(qs());
    }
    if (F)
      T === 0 && s && (h = ot(() => s(o)));
    else if (Uh()) {
      var D = /* @__PURE__ */ new Set(), N = (
        /** @type {Batch} */
        se
      );
      for (w = 0; w < T; w += 1) {
        I = p[w], E = i(I, w);
        var q = a.items.get(E) ?? u.get(E);
        q ? (e & (Co | To)) !== 0 && ld(q, I, w, e) : (P = $a(
          null,
          a,
          null,
          null,
          I,
          E,
          w,
          r,
          e,
          n,
          !0
        ), u.set(E, P)), D.add(E);
      }
      for (const [M, G] of a.items)
        D.has(M) || N.skipped_effects.add(G.e);
      N.oncommit(b);
    } else
      b();
    S && pt(!0), v(f);
  }), F && (o = Y);
}
function vm(t, e, n, i, r, s, o, a, l) {
  var c = (o & Xp) !== 0, h = (o & (Co | To)) !== 0, d = e.length, u = n.items, f = n.first, p = f, g, b = null, T, S = [], k = [], A, P, w, I;
  if (c)
    for (I = 0; I < d; I += 1)
      A = e[I], P = a(A, I), w = u.get(P), w !== void 0 && (w.a?.measure(), (T ??= /* @__PURE__ */ new Set()).add(w));
  for (I = 0; I < d; I += 1) {
    if (A = e[I], P = a(A, I), w = u.get(P), w === void 0) {
      var E = i.get(P);
      if (E !== void 0) {
        i.delete(P), u.set(P, E);
        var D = b ? b.next : p;
        Ut(n, b, E), Ut(n, E, D), ra(E, D, r), b = E;
      } else {
        var N = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : r;
        b = $a(
          N,
          n,
          b,
          b === null ? n.first : b.next,
          A,
          P,
          I,
          s,
          o,
          l
        );
      }
      u.set(P, b), S = [], k = [], p = b.next;
      continue;
    }
    if (h && ld(w, A, I, o), (w.e.f & _t) !== 0 && (Tl(w.e), c && (w.a?.unfix(), (T ??= /* @__PURE__ */ new Set()).delete(w))), w !== p) {
      if (g !== void 0 && g.has(w)) {
        if (S.length < k.length) {
          var q = k[0], M;
          b = q.prev;
          var G = S[0], X = S[S.length - 1];
          for (M = 0; M < S.length; M += 1)
            ra(S[M], q, r);
          for (M = 0; M < k.length; M += 1)
            g.delete(k[M]);
          Ut(n, G.prev, X.next), Ut(n, b, G), Ut(n, X, q), p = q, b = X, I -= 1, S = [], k = [];
        } else
          g.delete(w), ra(w, p, r), Ut(n, w.prev, w.next), Ut(n, w, b === null ? n.first : b.next), Ut(n, b, w), b = w;
        continue;
      }
      for (S = [], k = []; p !== null && p.k !== P; )
        (p.e.f & _t) === 0 && (g ??= /* @__PURE__ */ new Set()).add(p), k.push(p), p = p.next;
      if (p === null)
        continue;
      w = p;
    }
    S.push(w), b = w, p = w.next;
  }
  if (p !== null || g !== void 0) {
    for (var W = g === void 0 ? [] : pl(g); p !== null; )
      (p.e.f & _t) === 0 && W.push(p), p = p.next;
    var J = W.length;
    if (J > 0) {
      var _e = (o & fh) !== 0 && d === 0 ? r : null;
      if (c) {
        for (I = 0; I < J; I += 1)
          W[I].a?.measure();
        for (I = 0; I < J; I += 1)
          W[I].a?.fix();
      }
      gm(n, W, _e);
    }
  }
  c && Bn(() => {
    if (T !== void 0)
      for (w of T)
        w.a?.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var ee of i.values())
    Oe(ee.e);
  i.clear();
}
function ld(t, e, n, i) {
  (i & Co) !== 0 && ji(t.v, e), (i & To) !== 0 ? ji(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function $a(t, e, n, i, r, s, o, a, l, c, h) {
  var d = (l & Co) !== 0, u = (l & Zp) === 0, f = d ? u ? /* @__PURE__ */ Il(r, !1, !1) : Mn(r) : r, p = (l & To) === 0 ? o : Mn(o), g = {
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
      var b = document.createDocumentFragment();
      b.append(t = Ct());
    }
    return g.e = ot(() => a(
      /** @type {Node} */
      t,
      f,
      p,
      c
    ), F), g.e.prev = n && n.e, g.e.next = i && i.e, n === null ? h || (e.first = g) : (n.next = g, n.e.next = g.e), i !== null && (i.prev = g, i.e.prev = g.e), g;
  } finally {
  }
}
function ra(t, e, n) {
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
      /* @__PURE__ */ Gt(s)
    );
    r.before(s), s = o;
  }
}
function Ut(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function Fe(t, e, n, i, r) {
  F && oi();
  var s = e.$$slots?.[n], o = !1;
  s === !0 && (s = e.children, o = !0), s === void 0 || s(t, o ? () => i : i);
}
function ym(t, e, n, i, r, s) {
  let o = F;
  F && oi();
  var a = null;
  F && Y.nodeType === m_ && (a = /** @type {Element} */
  Y, oi());
  var l = (
    /** @type {TemplateNode} */
    F ? Y : t
  ), c = new ad(l, !1);
  Zi(() => {
    const h = e() || null;
    var d = a_;
    if (h === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(h, (u) => {
      if (h) {
        if (a = F ? (
          /** @type {Element} */
          a
        ) : document.createElementNS(d, h), cn(a, a), i) {
          F && dm(h) && a.append(document.createComment(""));
          var f = (
            /** @type {TemplateNode} */
            F ? /* @__PURE__ */ zt(a) : a.appendChild(Ct())
          );
          F && (f === null ? pt(!1) : We(f)), i(a, f);
        }
        U.nodes_end = a, u.before(a);
      }
      F && We(u);
    }), () => {
    };
  }, si), as(() => {
  }), o && (pt(!0), We(l));
}
function gi(t, e) {
  ls(() => {
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
function bm(t, e) {
  var n = void 0, i;
  Zi(() => {
    n !== (n = e()) && (i && (Oe(i), i = null), n && (i = ot(() => {
      ls(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function cd(t) {
  var e, n, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var r = t.length;
    for (e = 0; e < r; e++) t[e] && (n = cd(t[e])) && (i && (i += " "), i += n);
  } else for (n in t) t[n] && (i && (i += " "), i += n);
  return i;
}
function wm() {
  for (var t, e, n = 0, i = "", r = arguments.length; n < r; n++) (t = arguments[n]) && (e = cd(t)) && (i && (i += " "), i += e);
  return i;
}
function Em(t) {
  return typeof t == "object" ? wm(t) : t ?? "";
}
const zc = [...` 	
\r\f \v\uFEFF`];
function Im(t, e, n) {
  var i = t == null ? "" : "" + t;
  if (e && (i = i ? i + " " + e : e), n) {
    for (var r in n)
      if (n[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var s = r.length, o = 0; (o = i.indexOf(r, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || zc.includes(i[o - 1])) && (a === i.length || zc.includes(i[a])) ? i = (o === 0 ? "" : i.substring(0, o)) + i.substring(a + 1) : o = a;
        }
  }
  return i === "" ? null : i;
}
function Bc(t, e = !1) {
  var n = e ? " !important;" : ";", i = "";
  for (var r in t) {
    var s = t[r];
    s != null && s !== "" && (i += " " + r + ": " + s + n);
  }
  return i;
}
function sa(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Cm(t, e) {
  if (e) {
    var n = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, o = 0, a = !1, l = [];
      i && l.push(...Object.keys(i).map(sa)), r && l.push(...Object.keys(r).map(sa));
      var c = 0, h = -1;
      const g = t.length;
      for (var d = 0; d < g; d++) {
        var u = t[d];
        if (a ? u === "/" && t[d - 1] === "*" && (a = !1) : s ? s === u && (s = !1) : u === "/" && t[d + 1] === "*" ? a = !0 : u === '"' || u === "'" ? s = u : u === "(" ? o++ : u === ")" && o--, !a && s === !1 && o === 0) {
          if (u === ":" && h === -1)
            h = d;
          else if (u === ";" || d === g - 1) {
            if (h !== -1) {
              var f = sa(t.substring(c, h).trim());
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
    return i && (n += Bc(i)), r && (n += Bc(r, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Ys(t, e, n, i, r, s) {
  var o = t.__className;
  if (F || o !== n || o === void 0) {
    var a = Im(n, i, s);
    (!F || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (s && r !== s)
    for (var l in s) {
      var c = !!s[l];
      (r == null || c !== !!r[l]) && t.classList.toggle(l, c);
    }
  return s;
}
function oa(t, e = {}, n, i) {
  for (var r in n) {
    var s = n[r];
    e[r] !== s && (n[r] == null ? t.style.removeProperty(r) : t.style.setProperty(r, s, i));
  }
}
function Tm(t, e, n, i) {
  var r = t.__style;
  if (F || r !== e) {
    var s = Cm(e, i);
    (!F || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else i && (Array.isArray(i) ? (oa(t, n?.[0], i[0]), oa(t, n?.[1], i[1], "important")) : oa(t, n, i));
  return i;
}
function zr(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!fl(e))
      return A_();
    for (var i of t.options)
      i.selected = e.includes(Pr(i));
    return;
  }
  for (i of t.options) {
    var r = Pr(i);
    if (V_(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Sl(t) {
  var e = new MutationObserver(() => {
    zr(t, t.__value);
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
  }), as(() => {
    e.disconnect();
  });
}
function Sm(t, e, n = e) {
  var i = /* @__PURE__ */ new WeakSet(), r = !0;
  Wh(t, "change", (s) => {
    var o = s ? "[selected]" : ":checked", a;
    if (t.multiple)
      a = [].map.call(t.querySelectorAll(o), Pr);
    else {
      var l = t.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      a = l && Pr(l);
    }
    n(a), se !== null && i.add(se);
  }), ls(() => {
    var s = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        kr ?? se
      );
      if (i.has(o))
        return;
    }
    if (zr(t, s, r), r && s === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (s = Pr(a), n(s));
    }
    t.__value = s, r = !1;
  }), Sl(t);
}
function Pr(t) {
  return "__value" in t ? t.__value : t.value;
}
const pr = Symbol("class"), _r = Symbol("style"), ud = Symbol("is custom element"), hd = Symbol("is html");
function Fa(t) {
  if (F) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var i = t.value;
          Ee(t, "value", null), t.value = i;
        }
        if (t.hasAttribute("checked")) {
          var r = t.checked;
          Ee(t, "checked", null), t.checked = r;
        }
      }
    };
    t.__on_r = n, Bn(n), Hh();
  }
}
function km(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ee(t, e, n, i) {
  var r = dd(t);
  F && (r[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || r[e] !== (r[e] = n) && (e === "loading" && (t[__] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && fd(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Am(t, e, n, i, r = !1, s = !1) {
  if (F && r && t.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      t
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Fa(o);
  }
  var l = dd(t), c = l[ud], h = !l[hd];
  let d = F && c;
  d && pt(!1);
  var u = e || {}, f = t.tagName === "OPTION";
  for (var p in e)
    p in n || (n[p] = null);
  n.class ? n.class = Em(n.class) : n[pr] && (n.class = null), n[_r] && (n.style ??= null);
  var g = fd(t);
  for (const w in n) {
    let I = n[w];
    if (f && w === "value" && I == null) {
      t.value = t.__value = "", u[w] = I;
      continue;
    }
    if (w === "class") {
      var b = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ys(t, b, I, i, e?.[pr], n[pr]), u[w] = I, u[pr] = n[pr];
      continue;
    }
    if (w === "style") {
      Tm(t, I, e?.[_r], n[_r]), u[w] = I, u[_r] = n[_r];
      continue;
    }
    var T = u[w];
    if (!(I === T && !(I === void 0 && t.hasAttribute(w)))) {
      u[w] = I;
      var S = w[0] + w[1];
      if (S !== "$$")
        if (S === "on") {
          const E = {}, D = "$$" + w;
          let N = w.slice(2);
          var k = om(N);
          if (rm(N) && (N = N.slice(0, -7), E.capture = !0), !k && T) {
            if (I != null) continue;
            t.removeEventListener(N, u[D], E), u[D] = null;
          }
          if (I != null)
            if (k)
              t[`__${N}`] = I, us([N]);
            else {
              let q = function(M) {
                u[w].call(this, M);
              };
              u[D] = id(N, t, q, E);
            }
          else k && (t[`__${N}`] = void 0);
        } else if (w === "style")
          Ee(t, w, I);
        else if (w === "autofocus")
          j_(
            /** @type {HTMLElement} */
            t,
            !!I
          );
        else if (!c && (w === "__value" || w === "value" && I != null))
          t.value = t.__value = I;
        else if (w === "selected" && f)
          km(
            /** @type {HTMLOptionElement} */
            t,
            I
          );
        else {
          var A = w;
          h || (A = lm(A));
          var P = A === "defaultValue" || A === "defaultChecked";
          if (I == null && !c && !P)
            if (l[w] = null, A === "value" || A === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const D = e === void 0;
              if (A === "value") {
                let N = E.defaultValue;
                E.removeAttribute(A), E.defaultValue = N, E.value = E.__value = D ? N : null;
              } else {
                let N = E.defaultChecked;
                E.removeAttribute(A), E.defaultChecked = N, E.checked = D ? N : !1;
              }
            } else
              t.removeAttribute(w);
          else P || g.includes(A) && (c || typeof I != "string") ? (t[A] = I, A in l && (l[A] = Ue)) : typeof I != "function" && Ee(t, A, I);
        }
    }
  }
  return d && pt(!0), u;
}
function qc(t, e, n = [], i = [], r = [], s, o = !1, a = !1) {
  Ph(r, n, i, (l) => {
    var c = void 0, h = {}, d = t.nodeName === "SELECT", u = !1;
    if (Zi(() => {
      var p = e(...l.map(v)), g = Am(
        t,
        c,
        p,
        s,
        o,
        a
      );
      u && d && "value" in p && zr(
        /** @type {HTMLSelectElement} */
        t,
        p.value
      );
      for (let T of Object.getOwnPropertySymbols(h))
        p[T] || Oe(h[T]);
      for (let T of Object.getOwnPropertySymbols(p)) {
        var b = p[T];
        T.description === l_ && (!c || b !== c[T]) && (h[T] && Oe(h[T]), h[T] = ot(() => bm(t, () => b))), g[T] = b;
      }
      c = g;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      ls(() => {
        zr(
          f,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Sl(f);
      });
    }
    u = !0;
  });
}
function dd(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [ud]: t.nodeName.includes("-"),
      [hd]: t.namespaceURI === o_
    }
  );
}
var Gc = /* @__PURE__ */ new Map();
function fd(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Gc.get(e);
  if (n) return n;
  Gc.set(e, n = []);
  for (var i, r = t, s = Element.prototype; s !== r; ) {
    i = gh(r);
    for (var o in i)
      i[o].set && n.push(o);
    r = _l(r);
  }
  return n;
}
function Kc(t, e, n = e) {
  var i = /* @__PURE__ */ new WeakSet();
  Wh(t, "input", async (r) => {
    var s = r ? t.defaultValue : t.value;
    if (s = aa(t) ? la(s) : s, n(s), se !== null && i.add(se), await em(), s !== (s = e())) {
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
  Bt(e) == null && t.value) && (n(aa(t) ? la(t.value) : t.value), se !== null && i.add(se)), xo(() => {
    var r = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        kr ?? se
      );
      if (i.has(s))
        return;
    }
    aa(t) && r === la(t.value) || t.type === "date" && !r && !t.value || r !== t.value && (t.value = r ?? "");
  });
}
function aa(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function la(t) {
  return t === "" ? null : +t;
}
function Yc(t, e) {
  return t === e || t?.[Wt] === e;
}
function Rm(t = {}, e, n, i) {
  return ls(() => {
    var r, s;
    return xo(() => {
      r = s, s = [], Bt(() => {
        t !== n(...s) && (e(t, ...s), r && Yc(n(...r), t) && e(null, ...r));
      });
    }), () => {
      Bn(() => {
        s && Yc(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function pd(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    we
  ), n = e.l.u;
  if (!n) return;
  let i = () => Ai(e.s);
  if (t) {
    let r = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ os(() => {
      let a = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== s[c] && (s[c] = l[c], a = !0);
      return a && r++, r;
    });
    i = () => v(o);
  }
  n.b.length && q_(() => {
    Qc(e, i), js(n.b);
  }), xa(() => {
    const r = Bt(() => n.m.map(d_));
    return () => {
      for (const s of r)
        typeof s == "function" && s();
    };
  }), n.a.length && xa(() => {
    Qc(e, i), js(n.a);
  });
}
function Qc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) v(n);
  e();
}
function kl(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), Pn;
  const i = Bt(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Si = [];
function Pm(t, e) {
  return {
    subscribe: er(t, e).subscribe
  };
}
function er(t, e = Pn) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (Ih(t, a) && (t = a, n)) {
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
  function o(a, l = Pn) {
    const c = [a, l];
    return i.add(c), i.size === 1 && (n = e(r, s) || Pn), a(
      /** @type {T} */
      t
    ), () => {
      i.delete(c), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: o };
}
function Nm(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return Pm(n, (o, a) => {
    let l = !1;
    const c = [];
    let h = 0, d = Pn;
    const u = () => {
      if (h)
        return;
      d();
      const p = e(i ? c[0] : c, o, a);
      s ? o(p) : d = typeof p == "function" ? p : Pn;
    }, f = r.map(
      (p, g) => kl(
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
      js(f), d(), l = !1;
    };
  });
}
function xm(t) {
  let e;
  return kl(t, (n) => e = n)(), e;
}
let Ns = !1, Ua = Symbol();
function ii(t, e, n) {
  const i = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ Il(void 0),
    unsubscribe: Pn
  };
  if (i.store !== t && !(Ua in n))
    if (i.unsubscribe(), i.store = t ?? null, t == null)
      i.source.v = void 0, i.unsubscribe = Pn;
    else {
      var r = !0;
      i.unsubscribe = kl(t, (s) => {
        r ? i.source.v = s : x(i.source, s);
      }), r = !1;
    }
  return t && Ua in n ? xm(t) : v(i.source);
}
function Al() {
  const t = {};
  function e() {
    as(() => {
      for (var n in t)
        t[n].unsubscribe();
      Wr(t, Ua, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Om(t) {
  var e = Ns;
  try {
    return Ns = !1, [t(), Ns];
  } finally {
    Ns = e;
  }
}
const Lm = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return v(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var i = U;
      try {
        Tt(t.parent_effect), t.special[e] = yt(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          ph
        );
      } finally {
        Tt(i);
      }
    }
    return t.special[e](n), Mc(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), Mc(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function $e(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: Mn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        U
      )
    },
    Lm
  );
}
const Dm = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let i = t.props[n];
      if (fr(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(t, e, n) {
    let i = t.props.length;
    for (; i--; ) {
      let r = t.props[i];
      fr(r) && (r = r());
      const s = on(r, e);
      if (s && s.set)
        return s.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let i = t.props[n];
      if (fr(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = on(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(t, e) {
    if (e === Wt || e === yl) return !1;
    for (let n of t.props)
      if (fr(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (fr(n) && (n = n()), !!n) {
        for (const i in n)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(n))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function Ye(...t) {
  return new Proxy({ props: t }, Dm);
}
function yt(t, e, n, i) {
  var r = !Xi || (n & t_) !== 0, s = (n & n_) !== 0, o = (n & i_) !== 0, a = (
    /** @type {V} */
    i
  ), l = !0, c = () => (l && (l = !1, a = o ? Bt(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), a), h;
  if (s) {
    var d = Wt in t || yl in t;
    h = on(t, e)?.set ?? (d && e in t ? (k) => t[e] = k : void 0);
  }
  var u, f = !1;
  s ? [u, f] = Om(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e], u === void 0 && i !== void 0 && (u = c(), h && (r && I_(), h(u)));
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
  }, r && (n & ph) === 0)
    return p;
  if (h) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, A) {
        return arguments.length > 0 ? ((!r || !A || g || f) && h(A ? p() : k), k) : p();
      })
    );
  }
  var b = !1, T = ((n & e_) !== 0 ? os : wl)(() => (b = !1, p()));
  s && v(T);
  var S = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    (function(k, A) {
      if (arguments.length > 0) {
        const P = A ? v(T) : r && s ? tn(k) : k;
        return x(T, P), b = !0, a !== void 0 && (a = P), k;
      }
      return mi && b || (S.f & an) !== 0 ? T.v : v(T);
    })
  );
}
function Mm(t) {
  return new $m(t);
}
class $m {
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
      var a = /* @__PURE__ */ Il(o, !1, !1);
      return n.set(s, a), a;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, o) {
          return v(n.get(o) ?? i(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === yl ? !0 : (v(n.get(o) ?? i(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, a) {
          return x(n.get(o) ?? i(o, a), a), Reflect.set(s, o, a);
        }
      }
    );
    this.#e = (e.hydrate ? fm : sd)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && ft(), this.#t = r.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || Wr(this, s, {
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
      pm(this.#e);
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
let _d;
typeof HTMLElement == "function" && (_d = class extends HTMLElement {
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
          i !== "default" && (s.name = i), L(r, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = Fm(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), e.default = !0) : e[i] = t(i));
      for (const i of this.attributes) {
        const r = this.$$g_p(i.name);
        r in this.$$d || (this.$$d[r] = Ms(r, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Mm({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = G_(() => {
        xo(() => {
          this.$$r = !0;
          for (const i of Vs(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const r = Ms(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ms(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return Vs(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Ms(t, e, n, i) {
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
function Fm(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ge(t, e, n, i, r, s) {
  let o = class extends _d {
    constructor() {
      super(t, n, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Vs(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Vs(e).forEach((a) => {
    Wr(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Ms(a, l, e), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var h = on(c, a)?.get;
          h ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), i.forEach((a) => {
    Wr(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  o, o;
}
const Um = () => {
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
const md = {
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
    throw tr(e);
}, tr = function(t) {
  return new Error("Firebase Database (" + md.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t);
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
const gd = function(t) {
  const e = [];
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    let r = t.charCodeAt(i);
    r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && i + 1 < t.length && (t.charCodeAt(i + 1) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (t.charCodeAt(++i) & 1023), e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
  }
  return e;
}, Hm = function(t) {
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
}, Rl = {
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
      const s = t[r], o = r + 1 < t.length, a = o ? t[r + 1] : 0, l = r + 2 < t.length, c = l ? t[r + 2] : 0, h = s >> 2, d = (s & 3) << 4 | a >> 4;
      let u = (a & 15) << 2 | c >> 6, f = c & 63;
      l || (f = 64, o || (u = 64)), i.push(n[h], n[d], n[u], n[f]);
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
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(gd(t), e);
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
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Hm(this.decodeStringToByteArray(t, e));
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
      const d = r < t.length ? n[t.charAt(r)] : 64;
      if (++r, s == null || a == null || c == null || d == null)
        throw new Wm();
      const u = s << 2 | a >> 4;
      if (i.push(u), c !== 64) {
        const f = a << 4 & 240 | c >> 2;
        if (i.push(f), d !== 64) {
          const p = c << 6 & 192 | d;
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
class Wm extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const vd = function(t) {
  const e = gd(t);
  return Rl.encodeByteArray(e, !0);
}, Qs = function(t) {
  return vd(t).replace(/\./g, "");
}, Js = function(t) {
  try {
    return Rl.decodeString(t, !0);
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
function Vm(t) {
  return yd(void 0, t);
}
function yd(t, e) {
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
    !e.hasOwnProperty(n) || !jm(n) || (t[n] = yd(t[n], e[n]));
  return t;
}
function jm(t) {
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
function zm() {
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
const Bm = () => zm().__FIREBASE_DEFAULTS__, qm = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, Gm = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && Js(t[1]);
  return e && JSON.parse(e);
}, Pl = () => {
  try {
    return Um() || Bm() || qm() || Gm();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, bd = (t) => Pl()?.emulatorHosts?.[t], wd = (t) => {
  const e = bd(t);
  if (!e)
    return;
  const n = e.lastIndexOf(":");
  if (n <= 0 || n + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const i = parseInt(e.substring(n + 1), 10);
  return e[0] === "[" ? [e.substring(1, n - 1), i] : [e.substring(0, n), i];
}, Ed = () => Pl()?.config, Id = (t) => Pl()?.[`_${t}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds {
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
async function Nl(t) {
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
function Cd(t, e) {
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
    Qs(JSON.stringify(n)),
    Qs(JSON.stringify(o)),
    ""
  ].join(".");
}
const Nr = {};
function Km() {
  const t = {
    prod: [],
    emulator: []
  };
  for (const e of Object.keys(Nr))
    Nr[e] ? t.emulator.push(e) : t.prod.push(e);
  return t;
}
function Ym(t) {
  let e = document.getElementById(t), n = !1;
  return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), { created: n, element: e };
}
let Jc = !1;
function xl(t, e) {
  if (typeof window > "u" || typeof document > "u" || !vi(window.location.host) || Nr[t] === e || Nr[t] || // If already set to use emulator, can't go back to prod.
  Jc)
    return;
  Nr[t] = e;
  function n(u) {
    return `__firebase__banner__${u}`;
  }
  const i = "__firebase__banner", s = Km().prod.length > 0;
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
      Jc = !0, o();
    }, u;
  }
  function h(u, f) {
    u.setAttribute("id", f), u.innerText = "Learn more", u.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", u.setAttribute("target", "__blank"), u.style.paddingLeft = "5px", u.style.textDecoration = "underline";
  }
  function d() {
    const u = Ym(i), f = n("text"), p = document.getElementById(f) || document.createElement("span"), g = n("learnmore"), b = document.getElementById(g) || document.createElement("a"), T = n("preprendIcon"), S = document.getElementById(T) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (u.created) {
      const k = u.element;
      a(k), h(b, g);
      const A = c();
      l(S, T), k.append(S, p, b, A), document.body.appendChild(k);
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
function et() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Ol() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et());
}
function Qm() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function Jm() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function Td() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Xm() {
  const t = et();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function Zm() {
  return md.NODE_ADMIN === !0;
}
function eg() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function tg() {
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
const ng = "FirebaseError";
class gn extends Error {
  constructor(e, n, i) {
    super(n), this.code = e, this.customData = i, this.name = ng, Object.setPrototypeOf(this, gn.prototype), Error.captureStackTrace && Error.captureStackTrace(this, fs.prototype.create);
  }
}
class fs {
  constructor(e, n, i) {
    this.service = e, this.serviceName = n, this.errors = i;
  }
  create(e, ...n) {
    const i = n[0] || {}, r = `${this.service}/${e}`, s = this.errors[e], o = s ? ig(s, i) : "Error", a = `${this.serviceName}: ${o} (${r}).`;
    return new gn(r, a, i);
  }
}
function ig(t, e) {
  return t.replace(rg, (n, i) => {
    const r = e[i];
    return r != null ? String(r) : `<${i}?>`;
  });
}
const rg = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Br(t) {
  return JSON.parse(t);
}
function xe(t) {
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
const Sd = function(t) {
  let e = {}, n = {}, i = {}, r = "";
  try {
    const s = t.split(".");
    e = Br(Js(s[0]) || ""), n = Br(Js(s[1]) || ""), r = s[2], i = n.d || {}, delete n.d;
  } catch {
  }
  return {
    header: e,
    claims: n,
    data: i,
    signature: r
  };
}, sg = function(t) {
  const e = Sd(t), n = e.claims;
  return !!n && typeof n == "object" && n.hasOwnProperty("iat");
}, og = function(t) {
  const e = Sd(t).claims;
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
function Kt(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function zi(t, e) {
  if (Object.prototype.hasOwnProperty.call(t, e))
    return t[e];
}
function Ha(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function Xs(t, e, n) {
  const i = {};
  for (const r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (i[r] = e.call(n, t[r], r, t));
  return i;
}
function li(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), i = Object.keys(e);
  for (const r of n) {
    if (!i.includes(r))
      return !1;
    const s = t[r], o = e[r];
    if (Xc(s) && Xc(o)) {
      if (!li(s, o))
        return !1;
    } else if (s !== o)
      return !1;
  }
  for (const r of i)
    if (!n.includes(r))
      return !1;
  return !0;
}
function Xc(t) {
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
function yi(t) {
  const e = [];
  for (const [n, i] of Object.entries(t))
    Array.isArray(i) ? i.forEach((r) => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
  return e.length ? "&" + e.join("&") : "";
}
function Er(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach((i) => {
    if (i) {
      const [r, s] = i.split("=");
      e[decodeURIComponent(r)] = decodeURIComponent(s);
    }
  }), e;
}
function Ir(t) {
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
class ag {
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
      for (let d = 0; d < 16; d++)
        i[d] = e.charCodeAt(n) << 24 | e.charCodeAt(n + 1) << 16 | e.charCodeAt(n + 2) << 8 | e.charCodeAt(n + 3), n += 4;
    else
      for (let d = 0; d < 16; d++)
        i[d] = e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3], n += 4;
    for (let d = 16; d < 80; d++) {
      const u = i[d - 3] ^ i[d - 8] ^ i[d - 14] ^ i[d - 16];
      i[d] = (u << 1 | u >>> 31) & 4294967295;
    }
    let r = this.chain_[0], s = this.chain_[1], o = this.chain_[2], a = this.chain_[3], l = this.chain_[4], c, h;
    for (let d = 0; d < 80; d++) {
      d < 40 ? d < 20 ? (c = a ^ s & (o ^ a), h = 1518500249) : (c = s ^ o ^ a, h = 1859775393) : d < 60 ? (c = s & o | a & (s | o), h = 2400959708) : (c = s ^ o ^ a, h = 3395469782);
      const u = (r << 5 | r >>> 27) + c + l + h + i[d] & 4294967295;
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
function lg(t, e) {
  const n = new cg(t, e);
  return n.subscribe.bind(n);
}
class cg {
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
    ug(e, [
      "next",
      "error",
      "complete"
    ]) ? r = e : r = {
      next: e,
      error: n,
      complete: i
    }, r.next === void 0 && (r.next = ca), r.error === void 0 && (r.error = ca), r.complete === void 0 && (r.complete = ca);
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
function ug(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const n of e)
    if (n in t && typeof t[n] == "function")
      return !0;
  return !1;
}
function ca() {
}
function Do(t, e) {
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
const hg = function(t) {
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
}, Mo = function(t) {
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
function Le(t) {
  return t && t._delegate ? t._delegate : t;
}
class $n {
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
const Qn = "[DEFAULT]";
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
class dg {
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
      const i = new ds();
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
      if (pg(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Qn });
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
  clearInstance(e = Qn) {
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
  isInitialized(e = Qn) {
    return this.instances.has(e);
  }
  getOptions(e = Qn) {
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
      instanceIdentifier: fg(e),
      options: n
    }), this.instances.set(e, i), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(i, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, i);
      } catch {
      }
    return i || null;
  }
  normalizeInstanceIdentifier(e = Qn) {
    return this.component ? this.component.multipleInstances ? e : Qn : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function fg(t) {
  return t === Qn ? void 0 : t;
}
function pg(t) {
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
class _g {
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
    const n = new dg(e, this);
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
var oe;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(oe || (oe = {}));
const mg = {
  debug: oe.DEBUG,
  verbose: oe.VERBOSE,
  info: oe.INFO,
  warn: oe.WARN,
  error: oe.ERROR,
  silent: oe.SILENT
}, gg = oe.INFO, vg = {
  [oe.DEBUG]: "log",
  [oe.VERBOSE]: "log",
  [oe.INFO]: "info",
  [oe.WARN]: "warn",
  [oe.ERROR]: "error"
}, yg = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const i = (/* @__PURE__ */ new Date()).toISOString(), r = vg[e];
  if (r)
    console[r](`[${i}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class Ll {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = gg, this._logHandler = yg, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in oe))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? mg[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, oe.DEBUG, ...e), this._logHandler(this, oe.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, oe.VERBOSE, ...e), this._logHandler(this, oe.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, oe.INFO, ...e), this._logHandler(this, oe.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, oe.WARN, ...e), this._logHandler(this, oe.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, oe.ERROR, ...e), this._logHandler(this, oe.ERROR, ...e);
  }
}
const bg = (t, e) => e.some((n) => t instanceof n);
let Zc, eu;
function wg() {
  return Zc || (Zc = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Eg() {
  return eu || (eu = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const kd = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap(), Ad = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap();
function Ig(t) {
  const e = new Promise((n, i) => {
    const r = () => {
      t.removeEventListener("success", s), t.removeEventListener("error", o);
    }, s = () => {
      n(xn(t.result)), r();
    }, o = () => {
      i(t.error), r();
    };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return e.then((n) => {
    n instanceof IDBCursor && kd.set(n, t);
  }).catch(() => {
  }), Dl.set(e, t), e;
}
function Cg(t) {
  if (Wa.has(t))
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
  Wa.set(t, e);
}
let Va = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Wa.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || Ad.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return xn(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Tg(t) {
  Va = t(Va);
}
function Sg(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const i = t.call(ha(this), e, ...n);
    return Ad.set(i, e.sort ? e.sort() : [e]), xn(i);
  } : Eg().includes(t) ? function(...e) {
    return t.apply(ha(this), e), xn(kd.get(this));
  } : function(...e) {
    return xn(t.apply(ha(this), e));
  };
}
function kg(t) {
  return typeof t == "function" ? Sg(t) : (t instanceof IDBTransaction && Cg(t), bg(t, wg()) ? new Proxy(t, Va) : t);
}
function xn(t) {
  if (t instanceof IDBRequest)
    return Ig(t);
  if (ua.has(t))
    return ua.get(t);
  const e = kg(t);
  return e !== t && (ua.set(t, e), Dl.set(e, t)), e;
}
const ha = (t) => Dl.get(t);
function Ag(t, e, { blocked: n, upgrade: i, blocking: r, terminated: s } = {}) {
  const o = indexedDB.open(t, e), a = xn(o);
  return i && o.addEventListener("upgradeneeded", (l) => {
    i(xn(o.result), l.oldVersion, l.newVersion, xn(o.transaction), l);
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
const Rg = ["get", "getKey", "getAll", "getAllKeys", "count"], Pg = ["put", "add", "delete", "clear"], da = /* @__PURE__ */ new Map();
function tu(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (da.get(e))
    return da.get(e);
  const n = e.replace(/FromIndex$/, ""), i = e !== n, r = Pg.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (i ? IDBIndex : IDBObjectStore).prototype) || !(r || Rg.includes(n))
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
  return da.set(e, s), s;
}
Tg((t) => ({
  ...t,
  get: (e, n, i) => tu(e, n) || t.get(e, n, i),
  has: (e, n) => !!tu(e, n) || t.has(e, n)
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
class Ng {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (xg(n)) {
        const i = n.getImmediate();
        return `${i.library}/${i.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function xg(t) {
  return t.getComponent()?.type === "VERSION";
}
const ja = "@firebase/app", nu = "0.14.5";
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
const hn = new Ll("@firebase/app"), Og = "@firebase/app-compat", Lg = "@firebase/analytics-compat", Dg = "@firebase/analytics", Mg = "@firebase/app-check-compat", $g = "@firebase/app-check", Fg = "@firebase/auth", Ug = "@firebase/auth-compat", Hg = "@firebase/database", Wg = "@firebase/data-connect", Vg = "@firebase/database-compat", jg = "@firebase/functions", zg = "@firebase/functions-compat", Bg = "@firebase/installations", qg = "@firebase/installations-compat", Gg = "@firebase/messaging", Kg = "@firebase/messaging-compat", Yg = "@firebase/performance", Qg = "@firebase/performance-compat", Jg = "@firebase/remote-config", Xg = "@firebase/remote-config-compat", Zg = "@firebase/storage", ev = "@firebase/storage-compat", tv = "@firebase/firestore", nv = "@firebase/ai", iv = "@firebase/firestore-compat", rv = "firebase", sv = "12.5.0";
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
const za = "[DEFAULT]", ov = {
  [ja]: "fire-core",
  [Og]: "fire-core-compat",
  [Dg]: "fire-analytics",
  [Lg]: "fire-analytics-compat",
  [$g]: "fire-app-check",
  [Mg]: "fire-app-check-compat",
  [Fg]: "fire-auth",
  [Ug]: "fire-auth-compat",
  [Hg]: "fire-rtdb",
  [Wg]: "fire-data-connect",
  [Vg]: "fire-rtdb-compat",
  [jg]: "fire-fn",
  [zg]: "fire-fn-compat",
  [Bg]: "fire-iid",
  [qg]: "fire-iid-compat",
  [Gg]: "fire-fcm",
  [Kg]: "fire-fcm-compat",
  [Yg]: "fire-perf",
  [Qg]: "fire-perf-compat",
  [Jg]: "fire-rc",
  [Xg]: "fire-rc-compat",
  [Zg]: "fire-gcs",
  [ev]: "fire-gcs-compat",
  [tv]: "fire-fst",
  [iv]: "fire-fst-compat",
  [nv]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [rv]: "fire-js-all"
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
const Zs = /* @__PURE__ */ new Map(), av = /* @__PURE__ */ new Map(), Ba = /* @__PURE__ */ new Map();
function iu(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function ci(t) {
  const e = t.name;
  if (Ba.has(e))
    return hn.debug(`There were multiple attempts to register component ${e}.`), !1;
  Ba.set(e, t);
  for (const n of Zs.values())
    iu(n, t);
  for (const n of av.values())
    iu(n, t);
  return !0;
}
function $o(t, e) {
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
const lv = {
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
}, On = new fs("app", "Firebase", lv);
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
class cv {
  constructor(e, n, i) {
    this._isDeleted = !1, this._options = { ...e }, this._config = { ...n }, this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = i, this.container.addComponent(new $n(
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
      throw On.create("app-deleted", { appName: this._name });
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
const bi = sv;
function Rd(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const i = {
    name: za,
    automaticDataCollectionEnabled: !0,
    ...e
  }, r = i.name;
  if (typeof r != "string" || !r)
    throw On.create("bad-app-name", {
      appName: String(r)
    });
  if (n || (n = Ed()), !n)
    throw On.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = Zs.get(r);
  if (s) {
    if (li(n, s.options) && li(i, s.config))
      return s;
    throw On.create("duplicate-app", { appName: r });
  }
  const o = new _g(r);
  for (const l of Ba.values())
    o.addComponent(l);
  const a = new cv(n, i, o);
  return Zs.set(r, a), a;
}
function Ml(t = za) {
  const e = Zs.get(t);
  if (!e && t === za && Ed())
    return Rd();
  if (!e)
    throw On.create("no-app", { appName: t });
  return e;
}
function Vt(t, e, n) {
  let i = ov[t] ?? t;
  n && (i += `-${n}`);
  const r = i.match(/\s|\//), s = e.match(/\s|\//);
  if (r || s) {
    const o = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    r && o.push(`library name "${i}" contains illegal characters (whitespace or "/")`), r && s && o.push("and"), s && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), hn.warn(o.join(" "));
    return;
  }
  ci(new $n(
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
const uv = "firebase-heartbeat-database", hv = 1, qr = "firebase-heartbeat-store";
let fa = null;
function Pd() {
  return fa || (fa = Ag(uv, hv, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          try {
            t.createObjectStore(qr);
          } catch (n) {
            console.warn(n);
          }
      }
    }
  }).catch((t) => {
    throw On.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), fa;
}
async function dv(t) {
  try {
    const n = (await Pd()).transaction(qr), i = await n.objectStore(qr).get(Nd(t));
    return await n.done, i;
  } catch (e) {
    if (e instanceof gn)
      hn.warn(e.message);
    else {
      const n = On.create("idb-get", {
        originalErrorMessage: e?.message
      });
      hn.warn(n.message);
    }
  }
}
async function ru(t, e) {
  try {
    const i = (await Pd()).transaction(qr, "readwrite");
    await i.objectStore(qr).put(e, Nd(t)), await i.done;
  } catch (n) {
    if (n instanceof gn)
      hn.warn(n.message);
    else {
      const i = On.create("idb-set", {
        originalErrorMessage: n?.message
      });
      hn.warn(i.message);
    }
  }
}
function Nd(t) {
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
const fv = 1024, pv = 30;
class _v {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new gv(n), this._heartbeatsCachePromise = this._storage.read().then((i) => (this._heartbeatsCache = i, i));
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
      const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), i = su();
      if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === i || this._heartbeatsCache.heartbeats.some((r) => r.date === i))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: i, agent: n }), this._heartbeatsCache.heartbeats.length > pv) {
        const r = vv(this._heartbeatsCache.heartbeats);
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
      const e = su(), { heartbeatsToSend: n, unsentEntries: i } = mv(this._heartbeatsCache.heartbeats), r = Qs(JSON.stringify({ version: 2, heartbeats: n }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r;
    } catch (e) {
      return hn.warn(e), "";
    }
  }
}
function su() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function mv(t, e = fv) {
  const n = [];
  let i = t.slice();
  for (const r of t) {
    const s = n.find((o) => o.agent === r.agent);
    if (s) {
      if (s.dates.push(r.date), ou(n) > e) {
        s.dates.pop();
        break;
      }
    } else if (n.push({
      agent: r.agent,
      dates: [r.date]
    }), ou(n) > e) {
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
class gv {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return eg() ? tg().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await dv(this.app);
      return n?.heartbeats ? n : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ru(this.app, {
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
      return ru(this.app, {
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
function ou(t) {
  return Qs(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
function vv(t) {
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
function yv(t) {
  ci(new $n(
    "platform-logger",
    (e) => new Ng(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), ci(new $n(
    "heartbeat",
    (e) => new _v(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Vt(ja, nu, t), Vt(ja, nu, "esm2020"), Vt("fire-js", "");
}
yv("");
var bv = "firebase", wv = "12.5.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Vt(bv, wv, "app");
function xd() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Ev = xd, Od = new fs("auth", "Firebase", xd());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const eo = new Ll("@firebase/auth");
function Iv(t, ...e) {
  eo.logLevel <= oe.WARN && eo.warn(`Auth (${bi}): ${t}`, ...e);
}
function $s(t, ...e) {
  eo.logLevel <= oe.ERROR && eo.error(`Auth (${bi}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mt(t, ...e) {
  throw $l(t, ...e);
}
function mt(t, ...e) {
  return $l(t, ...e);
}
function Ld(t, e, n) {
  const i = {
    ...Ev(),
    [e]: n
  };
  return new fs("auth", "Firebase", i).create(e, {
    appName: t.name
  });
}
function jt(t) {
  return Ld(t, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function $l(t, ...e) {
  if (typeof t != "string") {
    const n = e[0], i = [...e.slice(1)];
    return i[0] && (i[0].appName = t.name), t._errorFactory.create(n, ...i);
  }
  return Od.create(t, ...e);
}
function R(t, e, ...n) {
  if (!t)
    throw $l(e, ...n);
}
function nn(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw $s(e), new Error(e);
}
function dn(t, e) {
  t || nn(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qa() {
  return typeof self < "u" && self.location?.href || "";
}
function Dd() {
  return au() === "http:" || au() === "https:";
}
function au() {
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
function Cv() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Dd() || Jm() || "connection" in navigator) ? navigator.onLine : !0;
}
function Tv() {
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
class ps {
  constructor(e, n) {
    this.shortDelay = e, this.longDelay = n, dn(n > e, "Short delay should be less than long delay!"), this.isMobile = Ol() || Td();
  }
  get() {
    return Cv() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
function Fl(t, e) {
  dn(t.emulator, "Emulator should always be set here");
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
class Md {
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
    nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
    nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
    nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const Sv = {
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
const kv = [
  "/v1/accounts:signInWithCustomToken",
  "/v1/accounts:signInWithEmailLink",
  "/v1/accounts:signInWithIdp",
  "/v1/accounts:signInWithPassword",
  "/v1/accounts:signInWithPhoneNumber",
  "/v1/token"
  /* Endpoint.TOKEN */
], Av = new ps(3e4, 6e4);
function ht(t, e) {
  return t.tenantId && !e.tenantId ? {
    ...e,
    tenantId: t.tenantId
  } : e;
}
async function gt(t, e, n, i, r = {}) {
  return $d(t, r, async () => {
    let s = {}, o = {};
    i && (e === "GET" ? o = i : s = {
      body: JSON.stringify(i)
    });
    const a = yi({
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
    return Qm() || (c.referrerPolicy = "no-referrer"), t.emulatorConfig && vi(t.emulatorConfig.host) && (c.credentials = "include"), Md.fetch()(await Fd(t, t.config.apiHost, n, a), c);
  });
}
async function $d(t, e, n) {
  t._canInitEmulator = !1;
  const i = { ...Sv, ...e };
  try {
    const r = new Pv(t), s = await Promise.race([
      n(),
      r.promise
    ]);
    r.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Cr(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o))
      return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message, [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Cr(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS")
        throw Cr(t, "email-already-in-use", o);
      if (l === "USER_DISABLED")
        throw Cr(t, "user-disabled", o);
      const h = i[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw Ld(t, h, c);
      Mt(t, h);
    }
  } catch (r) {
    if (r instanceof gn)
      throw r;
    Mt(t, "network-request-failed", { message: String(r) });
  }
}
async function qn(t, e, n, i, r = {}) {
  const s = await gt(t, e, n, i, r);
  return "mfaPendingCredential" in s && Mt(t, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
async function Fd(t, e, n, i) {
  const r = `${e}${n}?${i}`, s = t, o = s.config.emulator ? Fl(t.config, r) : `${t.config.apiScheme}://${r}`;
  return kv.includes(n) && (await s._persistenceManagerAvailable, s._getPersistenceType() === "COOKIE") ? s._getPersistence()._getFinalTarget(o).toString() : o;
}
function Rv(t) {
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
class Pv {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((n, i) => {
      this.timer = setTimeout(() => i(mt(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Av.get());
    });
  }
}
function Cr(t, e, n) {
  const i = {
    appName: t.name
  };
  n.email && (i.email = n.email), n.phoneNumber && (i.phoneNumber = n.phoneNumber);
  const r = mt(t, e, i);
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
function lu(t) {
  return t !== void 0 && t.getResponse !== void 0;
}
function cu(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class Ud {
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
        return Rv(n.enforcementState);
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
async function Nv(t) {
  return (await gt(
    t,
    "GET",
    "/v1/recaptchaParams"
    /* Endpoint.GET_RECAPTCHA_PARAM */
  )).recaptchaSiteKey || "";
}
async function Hd(t, e) {
  return gt(t, "GET", "/v2/recaptchaConfig", ht(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xv(t, e) {
  return gt(t, "POST", "/v1/accounts:delete", e);
}
async function to(t, e) {
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
function xr(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function Ov(t, e = !1) {
  const n = Le(t), i = await n.getIdToken(e), r = Ul(i);
  R(
    r && r.exp && r.auth_time && r.iat,
    n.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof r.firebase == "object" ? r.firebase : void 0, o = s?.sign_in_provider;
  return {
    claims: r,
    token: i,
    authTime: xr(pa(r.auth_time)),
    issuedAtTime: xr(pa(r.iat)),
    expirationTime: xr(pa(r.exp)),
    signInProvider: o || null,
    signInSecondFactor: s?.sign_in_second_factor || null
  };
}
function pa(t) {
  return Number(t) * 1e3;
}
function Ul(t) {
  const [e, n, i] = t.split(".");
  if (e === void 0 || n === void 0 || i === void 0)
    return $s("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const r = Js(n);
    return r ? JSON.parse(r) : ($s("Failed to decode base64 JWT payload"), null);
  } catch (r) {
    return $s("Caught error parsing JWT payload as JSON", r?.toString()), null;
  }
}
function uu(t) {
  const e = Ul(t);
  return R(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), R(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), R(
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
    throw i instanceof gn && Lv(i) && t.auth.currentUser === t && await t.auth.signOut(), i;
  }
}
function Lv({ code: t }) {
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
class Dv {
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
class Ga {
  constructor(e, n) {
    this.createdAt = e, this.lastLoginAt = n, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = xr(this.lastLoginAt), this.creationTime = xr(this.createdAt);
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
async function no(t) {
  const e = t.auth, n = await t.getIdToken(), i = await Bi(t, to(e, { idToken: n }));
  R(
    i?.users.length,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const r = i.users[0];
  t._notifyReloadListener(r);
  const s = r.providerUserInfo?.length ? Wd(r.providerUserInfo) : [], o = $v(t.providerData, s), a = t.isAnonymous, l = !(t.email && r.passwordHash) && !o?.length, c = a ? l : !1, h = {
    uid: r.localId,
    displayName: r.displayName || null,
    photoURL: r.photoUrl || null,
    email: r.email || null,
    emailVerified: r.emailVerified || !1,
    phoneNumber: r.phoneNumber || null,
    tenantId: r.tenantId || null,
    providerData: o,
    metadata: new Ga(r.createdAt, r.lastLoginAt),
    isAnonymous: c
  };
  Object.assign(t, h);
}
async function Mv(t) {
  const e = Le(t);
  await no(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function $v(t, e) {
  return [...t.filter((i) => !e.some((r) => r.providerId === i.providerId)), ...e];
}
function Wd(t) {
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
async function Fv(t, e) {
  const n = await $d(t, {}, async () => {
    const i = yi({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: r, apiKey: s } = t.config, o = await Fd(t, r, "/v1/token", `key=${s}`), a = await t._getAdditionalHeaders();
    a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: i
    };
    return t.emulatorConfig && vi(t.emulatorConfig.host) && (l.credentials = "include"), Md.fetch()(o, l);
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token
  };
}
async function Uv(t, e) {
  return gt(t, "POST", "/v2/accounts:revokeToken", ht(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
    R(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), R(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), R(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : uu(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    R(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = uu(e);
    this.updateTokensAndExpiration(e, null, n);
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired ? this.accessToken : (R(
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
    const { accessToken: i, refreshToken: r, expiresIn: s } = await Fv(e, n);
    this.updateTokensAndExpiration(i, r, Number(s));
  }
  updateTokensAndExpiration(e, n, i) {
    this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + i * 1e3;
  }
  static fromJSON(e, n) {
    const { refreshToken: i, accessToken: r, expirationTime: s } = n, o = new Li();
    return i && (R(typeof i == "string", "internal-error", {
      appName: e
    }), o.refreshToken = i), r && (R(typeof r == "string", "internal-error", {
      appName: e
    }), o.accessToken = r), s && (R(typeof s == "number", "internal-error", {
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
    return nn("not implemented");
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
function En(t, e) {
  R(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class xt {
  constructor({ uid: e, auth: n, stsTokenManager: i, ...r }) {
    this.providerId = "firebase", this.proactiveRefresh = new Dv(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = r.displayName || null, this.email = r.email || null, this.emailVerified = r.emailVerified || !1, this.phoneNumber = r.phoneNumber || null, this.photoURL = r.photoURL || null, this.isAnonymous = r.isAnonymous || !1, this.tenantId = r.tenantId || null, this.providerData = r.providerData ? [...r.providerData] : [], this.metadata = new Ga(r.createdAt || void 0, r.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const n = await Bi(this, this.stsTokenManager.getToken(this.auth, e));
    return R(
      n,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== n && (this.accessToken = n, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n;
  }
  getIdTokenResult(e) {
    return Ov(this, e);
  }
  reload() {
    return Mv(this);
  }
  _assign(e) {
    this !== e && (R(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((n) => ({ ...n })), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new xt({
      ...this,
      auth: e,
      stsTokenManager: this.stsTokenManager._clone()
    });
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    R(
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
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), i = !0), n && await no(this), await this.auth._persistUserIfCurrent(this), i && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (at(this.auth.app))
      return Promise.reject(jt(this.auth));
    const e = await this.getIdToken();
    return await Bi(this, xv(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    const i = n.displayName ?? void 0, r = n.email ?? void 0, s = n.phoneNumber ?? void 0, o = n.photoURL ?? void 0, a = n.tenantId ?? void 0, l = n._redirectEventId ?? void 0, c = n.createdAt ?? void 0, h = n.lastLoginAt ?? void 0, { uid: d, emailVerified: u, isAnonymous: f, providerData: p, stsTokenManager: g } = n;
    R(
      d && g,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const b = Li.fromJSON(this.name, g);
    R(
      typeof d == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), En(i, e.name), En(r, e.name), R(
      typeof u == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), R(
      typeof f == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), En(s, e.name), En(o, e.name), En(a, e.name), En(l, e.name), En(c, e.name), En(h, e.name);
    const T = new xt({
      uid: d,
      auth: e,
      email: r,
      emailVerified: u,
      displayName: i,
      isAnonymous: f,
      photoURL: o,
      phoneNumber: s,
      tenantId: a,
      stsTokenManager: b,
      createdAt: c,
      lastLoginAt: h
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
    const s = new xt({
      uid: n.localId,
      auth: e,
      stsTokenManager: r,
      isAnonymous: i
    });
    return await no(s), s;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, n, i) {
    const r = n.users[0];
    R(
      r.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = r.providerUserInfo !== void 0 ? Wd(r.providerUserInfo) : [], o = !(r.email && r.passwordHash) && !s?.length, a = new Li();
    a.updateFromIdToken(i);
    const l = new xt({
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
      metadata: new Ga(r.createdAt, r.lastLoginAt),
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
function rn(t) {
  dn(t instanceof Function, "Expected a class definition");
  let e = hu.get(t);
  return e ? (dn(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), hu.set(t, e), e);
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
class Vd {
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
Vd.type = "NONE";
const du = Vd;
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
function Fs(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Di {
  constructor(e, n, i) {
    this.persistence = e, this.auth = n, this.userKey = i;
    const { config: r, name: s } = this.auth;
    this.fullUserKey = Fs(this.userKey, r.apiKey, s), this.fullPersistenceKey = Fs("persistence", r.apiKey, s), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e)
      return null;
    if (typeof e == "string") {
      const n = await to(this.auth, { idToken: e }).catch(() => {
      });
      return n ? xt._fromGetAccountInfoResponse(this.auth, n, e) : null;
    }
    return xt._fromJSON(this.auth, e);
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
      return new Di(rn(du), e, i);
    const r = (await Promise.all(n.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let s = r[0] || rn(du);
    const o = Fs(i, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const h = await c._get(o);
        if (h) {
          let d;
          if (typeof h == "string") {
            const u = await to(e, {
              idToken: h
            }).catch(() => {
            });
            if (!u)
              break;
            d = await xt._fromGetAccountInfoResponse(e, u, h);
          } else
            d = xt._fromJSON(e, h);
          c !== s && (a = d), s = c;
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
function fu(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (qd(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (jd(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Kd(e))
    return "Blackberry";
  if (Yd(e))
    return "Webos";
  if (zd(e))
    return "Safari";
  if ((e.includes("chrome/") || Bd(e)) && !e.includes("edge/"))
    return "Chrome";
  if (Gd(e))
    return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, i = t.match(n);
    if (i?.length === 2)
      return i[1];
  }
  return "Other";
}
function jd(t = et()) {
  return /firefox\//i.test(t);
}
function zd(t = et()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function Bd(t = et()) {
  return /crios\//i.test(t);
}
function qd(t = et()) {
  return /iemobile/i.test(t);
}
function Gd(t = et()) {
  return /android/i.test(t);
}
function Kd(t = et()) {
  return /blackberry/i.test(t);
}
function Yd(t = et()) {
  return /webos/i.test(t);
}
function Hl(t = et()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function Hv(t = et()) {
  return Hl(t) && !!window.navigator?.standalone;
}
function Wv() {
  return Xm() && document.documentMode === 10;
}
function Qd(t = et()) {
  return Hl(t) || Gd(t) || Yd(t) || Kd(t) || /windows phone/i.test(t) || qd(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jd(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = fu(et());
      break;
    case "Worker":
      n = `${fu(et())}-${t}`;
      break;
    default:
      n = t;
  }
  const i = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${bi}/${i}`;
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
class Vv {
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
async function jv(t, e = {}) {
  return gt(t, "GET", "/v2/passwordPolicy", ht(t, e));
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
const zv = 6;
class Bv {
  constructor(e) {
    const n = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = n.minPasswordLength ?? zv, n.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = n.maxPasswordLength), n.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = n.containsLowercaseCharacter), n.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = n.containsUppercaseCharacter), n.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = n.containsNumericCharacter), n.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = n.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
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
class qv {
  constructor(e, n, i, r) {
    this.app = e, this.heartbeatServiceProvider = n, this.appCheckServiceProvider = i, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new pu(this), this.idTokenSubscription = new pu(this), this.beforeStateQueue = new Vv(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Od, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion, this._persistenceManagerAvailable = new Promise((s) => this._resolvePersistenceManagerAvailable = s);
  }
  _initializeWithPersistence(e, n) {
    return n && (this._popupRedirectResolver = rn(n)), this._initializationPromise = this.queue(async () => {
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
      const n = await to(this, { idToken: e }), i = await xt._fromGetAccountInfoResponse(this, n, e);
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
    return R(
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
      await no(e);
    } catch (n) {
      if (n?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Tv();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (at(this.app))
      return Promise.reject(jt(this));
    const n = e ? Le(e) : null;
    return n && R(
      n.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(n && n._clone(this));
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return e && R(
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
      await this.assertedPersistence.setPersistence(rn(e));
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
    const e = await jv(this), n = new Bv(e);
    this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n;
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new fs("auth", "Firebase", e());
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
      this.tenantId != null && (i.tenantId = this.tenantId), await Uv(this, i);
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
      const n = e && rn(e) || this._popupRedirectResolver;
      R(
        n,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Di.create(
        this,
        [rn(n._redirectPersistence)],
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
    if (R(
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
    return R(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Jd(this.config.clientPlatform, this._getFrameworks()));
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
    return e?.error && Iv(`Error while retrieving App Check token: ${e.error}`), e?.token;
  }
}
function Yt(t) {
  return Le(t);
}
class pu {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = lg((n) => this.observer = n);
  }
  get next() {
    return R(
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
let _s = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function Gv(t) {
  _s = t;
}
function Wl(t) {
  return _s.loadJS(t);
}
function Kv() {
  return _s.recaptchaV2Script;
}
function Yv() {
  return _s.recaptchaEnterpriseScript;
}
function Qv() {
  return _s.gapiScript;
}
function Xd(t) {
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
const Jv = 500, Xv = 6e4, xs = 1e12;
class Zv {
  constructor(e) {
    this.auth = e, this.counter = xs, this._widgets = /* @__PURE__ */ new Map();
  }
  render(e, n) {
    const i = this.counter;
    return this._widgets.set(i, new ny(e, this.auth.name, n || {})), this.counter++, i;
  }
  reset(e) {
    const n = e || xs;
    this._widgets.get(n)?.delete(), this._widgets.delete(n);
  }
  getResponse(e) {
    const n = e || xs;
    return this._widgets.get(n)?.getResponse() || "";
  }
  async execute(e) {
    const n = e || xs;
    return this._widgets.get(n)?.execute(), "";
  }
}
class ey {
  constructor() {
    this.enterprise = new ty();
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
class ty {
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
class ny {
  constructor(e, n, i) {
    this.params = i, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
      this.execute();
    };
    const r = typeof e == "string" ? document.getElementById(e) : e;
    R(r, "argument-error", { appName: n }), this.container = r, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler);
  }
  getResponse() {
    return this.checkIfDeleted(), this.responseToken;
  }
  delete() {
    this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => {
      this.responseToken = iy(50);
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
      }, Xv);
    }, Jv));
  }
  checkIfDeleted() {
    if (this.deleted)
      throw new Error("reCAPTCHA mock was already deleted!");
  }
}
function iy(t) {
  const e = [], n = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < t; i++)
    e.push(n.charAt(Math.floor(Math.random() * n.length)));
  return e.join("");
}
const ry = "recaptcha-enterprise", Or = "NO_RECAPTCHA";
class Zd {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = ry, this.auth = Yt(e);
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
        Hd(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            a(new Error("recaptcha Enterprise site key undefined"));
          else {
            const c = new Ud(l);
            return s.tenantId == null ? s._agentRecaptchaConfig = c : s._tenantRecaptchaConfigs[s.tenantId] = c, o(c.siteKey);
          }
        }).catch((l) => {
          a(l);
        });
      });
    }
    function r(s, o, a) {
      const l = window.grecaptcha;
      cu(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(s, { action: e }).then((c) => {
          o(c);
        }).catch(() => {
          o(Or);
        });
      }) : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting ? new ey().execute("siteKey", { action: "verify" }) : new Promise((s, o) => {
      i(this.auth).then((a) => {
        if (!n && cu(window.grecaptcha))
          r(a, s, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = Yv();
          l.length !== 0 && (l += a), Wl(l).then(() => {
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
async function mr(t, e, n, i = !1, r = !1) {
  const s = new Zd(t);
  let o;
  if (r)
    o = Or;
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
      const s = await mr(
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
          const o = await mr(
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
      const s = await mr(t, e, n);
      return i(t, s).catch(async (o) => {
        if (t._getRecaptchaConfig()?.getProviderEnforcementState(
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ) === "AUDIT" && (o.code === "auth/missing-recaptcha-token" || o.code === "auth/invalid-app-credential")) {
          console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);
          const a = await mr(
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
      const s = await mr(
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
async function sy(t) {
  const e = Yt(t), n = await Hd(e, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), i = new Ud(n);
  e.tenantId == null ? e._agentRecaptchaConfig = i : e._tenantRecaptchaConfigs[e.tenantId] = i, i.isAnyProviderEnabled() && new Zd(e).verify();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oy(t, e) {
  const n = $o(t, "auth");
  if (n.isInitialized()) {
    const r = n.getImmediate(), s = n.getOptions();
    if (li(s, e ?? {}))
      return r;
    Mt(
      r,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: e });
}
function ay(t, e) {
  const n = e?.persistence || [], i = (Array.isArray(n) ? n : [n]).map(rn);
  e?.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(i, e?.popupRedirectResolver);
}
function ly(t, e, n) {
  const i = Yt(t);
  R(
    /^https?:\/\//.test(e),
    i,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const r = !1, s = ef(e), { host: o, port: a } = cy(e), l = a === null ? "" : `:${a}`, c = { url: `${s}//${o}${l}/` }, h = Object.freeze({
    host: o,
    port: a,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: r })
  });
  if (!i._canInitEmulator) {
    R(
      i.config.emulator && i.emulatorConfig,
      i,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    ), R(
      li(c, i.config.emulator) && li(h, i.emulatorConfig),
      i,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    );
    return;
  }
  i.config.emulator = c, i.emulatorConfig = h, i.settings.appVerificationDisabledForTesting = !0, vi(o) ? (Nl(`${s}//${o}${l}`), xl("Auth", !0)) : uy();
}
function ef(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function cy(t) {
  const e = ef(t), n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
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
function uy() {
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
class Fo {
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
    return nn("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return nn("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return nn("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return nn("not implemented");
  }
}
async function hy(t, e) {
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
async function dy(t, e) {
  return qn(t, "POST", "/v1/accounts:signInWithPassword", ht(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fy(t, e) {
  return qn(t, "POST", "/v1/accounts:signInWithEmailLink", ht(t, e));
}
async function py(t, e) {
  return qn(t, "POST", "/v1/accounts:signInWithEmailLink", ht(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr extends Fo {
  /** @internal */
  constructor(e, n, i, r = null) {
    super("password", i), this._email = e, this._password = n, this._tenantId = r;
  }
  /** @internal */
  static _fromEmailAndPassword(e, n) {
    return new Gr(
      e,
      n,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, n, i = null) {
    return new Gr(e, n, "emailLink", i);
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
          dy,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return fy(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        Mt(
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
          hy,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return py(e, {
          idToken: n,
          email: this._email,
          oobCode: this._password
        });
      default:
        Mt(
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
  return qn(t, "POST", "/v1/accounts:signInWithIdp", ht(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _y = "http://localhost";
class ui extends Fo {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const n = new ui(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (n.idToken = e.idToken), e.accessToken && (n.accessToken = e.accessToken), e.nonce && !e.pendingToken && (n.nonce = e.nonce), e.pendingToken && (n.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (n.accessToken = e.oauthToken, n.secret = e.oauthTokenSecret) : Mt(
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
    const o = new ui(i, r);
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
      requestUri: _y,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = yi(n);
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
async function mu(t, e) {
  return gt(t, "POST", "/v1/accounts:sendVerificationCode", ht(t, e));
}
async function my(t, e) {
  return qn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ht(t, e));
}
async function gy(t, e) {
  const n = await qn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ht(t, e));
  if (n.temporaryProof)
    throw Cr(t, "account-exists-with-different-credential", n);
  return n;
}
const vy = {
  USER_NOT_FOUND: "user-not-found"
  /* AuthErrorCode.USER_DELETED */
};
async function yy(t, e) {
  const n = {
    ...e,
    operation: "REAUTH"
  };
  return qn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ht(t, n), vy);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr extends Fo {
  constructor(e) {
    super(
      "phone",
      "phone"
      /* SignInMethod.PHONE */
    ), this.params = e;
  }
  /** @internal */
  static _fromVerification(e, n) {
    return new Lr({ verificationId: e, verificationCode: n });
  }
  /** @internal */
  static _fromTokenResponse(e, n) {
    return new Lr({ phoneNumber: e, temporaryProof: n });
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return my(e, this._makeVerificationRequest());
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return gy(e, {
      idToken: n,
      ...this._makeVerificationRequest()
    });
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return yy(e, this._makeVerificationRequest());
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
    return !i && !n && !r && !s ? null : new Lr({
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
function by(t) {
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
function wy(t) {
  const e = Er(Ir(t)).link, n = e ? Er(Ir(e)).deep_link_id : null, i = Er(Ir(t)).deep_link_id;
  return (i ? Er(Ir(i)).link : null) || i || n || e || t;
}
class Vl {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    const n = Er(Ir(e)), i = n.apiKey ?? null, r = n.oobCode ?? null, s = by(n.mode ?? null);
    R(
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
    const n = wy(e);
    try {
      return new Vl(n);
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
class nr {
  constructor() {
    this.providerId = nr.PROVIDER_ID;
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
    return Gr._fromEmailAndPassword(e, n);
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
    const i = Vl.parseLink(n);
    return R(
      i,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Gr._fromEmailAndCode(e, i.code, i.tenantId);
  }
}
nr.PROVIDER_ID = "password";
nr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
nr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tf {
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
class ms extends tf {
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
class In extends ms {
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
    return ui._fromParams({
      providerId: In.PROVIDER_ID,
      signInMethod: In.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return In.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return In.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return In.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
In.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
In.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn extends ms {
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
    return ui._fromParams({
      providerId: Cn.PROVIDER_ID,
      signInMethod: Cn.GOOGLE_SIGN_IN_METHOD,
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
    return Cn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Cn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: n, oauthAccessToken: i } = e;
    if (!n && !i)
      return null;
    try {
      return Cn.credential(n, i);
    } catch {
      return null;
    }
  }
}
Cn.GOOGLE_SIGN_IN_METHOD = "google.com";
Cn.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn extends ms {
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
    return ui._fromParams({
      providerId: Tn.PROVIDER_ID,
      signInMethod: Tn.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Tn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Tn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Tn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Tn.GITHUB_SIGN_IN_METHOD = "github.com";
Tn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn extends ms {
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
    return ui._fromParams({
      providerId: Sn.PROVIDER_ID,
      signInMethod: Sn.TWITTER_SIGN_IN_METHOD,
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
    if (!e)
      return null;
    const { oauthAccessToken: n, oauthTokenSecret: i } = e;
    if (!n || !i)
      return null;
    try {
      return Sn.credential(n, i);
    } catch {
      return null;
    }
  }
}
Sn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Sn.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ey(t, e) {
  return qn(t, "POST", "/v1/accounts:signUp", ht(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
    const s = await xt._fromIdTokenResponse(e, i, r), o = gu(i);
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
    const r = gu(i);
    return new hi({
      user: e,
      providerId: r,
      _tokenResponse: i,
      operationType: n
    });
  }
}
function gu(t) {
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
class io extends gn {
  constructor(e, n, i, r) {
    super(n.code, n.message), this.operationType = i, this.user = r, Object.setPrototypeOf(this, io.prototype), this.customData = {
      appName: e.name,
      tenantId: e.tenantId ?? void 0,
      _serverResponse: n.customData._serverResponse,
      operationType: i
    };
  }
  static _fromErrorAndOperation(e, n, i, r) {
    return new io(e, n, i, r);
  }
}
function nf(t, e, n, i) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? io._fromErrorAndOperation(t, s, e, i) : s;
  });
}
async function Iy(t, e, n = !1) {
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
async function Cy(t, e, n = !1) {
  const { auth: i } = t;
  if (at(i.app))
    return Promise.reject(jt(i));
  const r = "reauthenticate";
  try {
    const s = await Bi(t, nf(i, r, e, t), n);
    R(
      s.idToken,
      i,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = Ul(s.idToken);
    R(
      o,
      i,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: a } = o;
    return R(
      t.uid === a,
      i,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), hi._forOperation(t, r, s);
  } catch (s) {
    throw s?.code === "auth/user-not-found" && Mt(
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
async function rf(t, e, n = !1) {
  if (at(t.app))
    return Promise.reject(jt(t));
  const i = "signIn", r = await nf(t, i, e), s = await hi._fromIdTokenResponse(t, i, r);
  return n || await t._updateCurrentUser(s.user), s;
}
async function sf(t, e) {
  return rf(Yt(t), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function of(t) {
  const e = Yt(t);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function Ty(t, e, n) {
  if (at(t.app))
    return Promise.reject(jt(t));
  const i = Yt(t), o = await Mi(
    i,
    {
      returnSecureToken: !0,
      email: e,
      password: n,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    },
    "signUpPassword",
    Ey,
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
  ).catch((l) => {
    throw l.code === "auth/password-does-not-meet-requirements" && of(t), l;
  }), a = await hi._fromIdTokenResponse(i, "signIn", o);
  return await i._updateCurrentUser(a.user), a;
}
function Sy(t, e, n) {
  return at(t.app) ? Promise.reject(jt(t)) : sf(Le(t), nr.credential(e, n)).catch(async (i) => {
    throw i.code === "auth/password-does-not-meet-requirements" && of(t), i;
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
async function ky(t, e) {
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
async function af(t, { displayName: e, photoURL: n }) {
  if (e === void 0 && n === void 0)
    return;
  const i = Le(t), s = {
    idToken: await i.getIdToken(),
    displayName: e,
    photoUrl: n,
    returnSecureToken: !0
  }, o = await Bi(i, ky(i.auth, s));
  i.displayName = o.displayName || null, i.photoURL = o.photoUrl || null;
  const a = i.providerData.find(
    ({ providerId: l }) => l === "password"
    /* ProviderId.PASSWORD */
  );
  a && (a.displayName = i.displayName, a.photoURL = i.photoURL), await i._updateTokensIfNecessary(o);
}
function Ay(t, e, n, i) {
  return Le(t).onIdTokenChanged(e, n, i);
}
function Ry(t, e, n) {
  return Le(t).beforeAuthStateChanged(e, n);
}
function lf(t, e, n, i) {
  return Le(t).onAuthStateChanged(e, n, i);
}
function Py(t) {
  return Le(t).signOut();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vu(t, e) {
  return gt(t, "POST", "/v2/accounts/mfaEnrollment:start", ht(t, e));
}
const ro = "__sak";
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
class cf {
  constructor(e, n) {
    this.storageRetriever = e, this.type = n;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(ro, "1"), this.storage.removeItem(ro), Promise.resolve(!0)) : Promise.resolve(!1);
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
const Ny = 1e3, xy = 10;
class uf extends cf {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = Qd(), this._shouldAllowMigration = !0;
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
    Wv() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, xy) : r();
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
    }, Ny);
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
uf.type = "LOCAL";
const Oy = uf;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hf extends cf {
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
hf.type = "SESSION";
const df = hf;
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
function Ly(t) {
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
class Uo {
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
    const i = new Uo(e);
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
    const a = Array.from(o).map(async (c) => c(n.origin, s)), l = await Ly(a);
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
Uo.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jl(t = "", e = 10) {
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
class Dy {
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
      const c = jl("", 20);
      r.port1.start();
      const h = setTimeout(() => {
        l(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, i);
      o = {
        messageChannel: r,
        onMessage(d) {
          const u = d;
          if (u.data.eventId === c)
            switch (u.data.status) {
              case "ack":
                clearTimeout(h), s = setTimeout(
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
                clearTimeout(h), clearTimeout(s), l(new Error(
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
function My(t) {
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
function zl() {
  return typeof Se().WorkerGlobalScope < "u" && typeof Se().importScripts == "function";
}
async function $y() {
  if (!navigator?.serviceWorker)
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Fy() {
  return navigator?.serviceWorker?.controller || null;
}
function Uy() {
  return zl() ? self : null;
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
const ff = "firebaseLocalStorageDb", Hy = 1, so = "firebaseLocalStorage", pf = "fbase_key";
class gs {
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
function Ho(t, e) {
  return t.transaction([so], e ? "readwrite" : "readonly").objectStore(so);
}
function Wy() {
  const t = indexedDB.deleteDatabase(ff);
  return new gs(t).toPromise();
}
function Ka() {
  const t = indexedDB.open(ff, Hy);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const i = t.result;
      try {
        i.createObjectStore(so, { keyPath: pf });
      } catch (r) {
        n(r);
      }
    }), t.addEventListener("success", async () => {
      const i = t.result;
      i.objectStoreNames.contains(so) ? e(i) : (i.close(), await Wy(), e(await Ka()));
    });
  });
}
async function yu(t, e, n) {
  const i = Ho(t, !0).put({
    [pf]: e,
    value: n
  });
  return new gs(i).toPromise();
}
async function Vy(t, e) {
  const n = Ho(t, !1).get(e), i = await new gs(n).toPromise();
  return i === void 0 ? null : i.value;
}
function bu(t, e) {
  const n = Ho(t, !0).delete(e);
  return new gs(n).toPromise();
}
const jy = 800, zy = 3;
class _f {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await Ka(), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (; ; )
      try {
        const i = await this._openDb();
        return await e(i);
      } catch (i) {
        if (n++ > zy)
          throw i;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return zl() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Uo._getInstance(Uy()), this.receiver._subscribe("keyChanged", async (e, n) => ({
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
    if (this.activeServiceWorker = await $y(), !this.activeServiceWorker)
      return;
    this.sender = new Dy(this.activeServiceWorker);
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
    if (!(!this.sender || !this.activeServiceWorker || Fy() !== this.activeServiceWorker))
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
      const e = await Ka();
      return await yu(e, ro, "1"), await bu(e, ro), !0;
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
    const n = await this._withRetries((i) => Vy(i, e));
    return this.localCache[e] = n, n;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => bu(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((r) => {
      const s = Ho(r, !1).getAll();
      return new gs(s).toPromise();
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
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), jy);
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
_f.type = "LOCAL";
const By = _f;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wu(t, e) {
  return gt(t, "POST", "/v2/accounts/mfaSignIn:start", ht(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _a = Xd("rcb"), qy = new ps(3e4, 6e4);
class Gy {
  constructor() {
    this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!Se().grecaptcha?.render;
  }
  load(e, n = "") {
    return R(
      Ky(n),
      e,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.shouldResolveImmediately(n) && lu(Se().grecaptcha) ? Promise.resolve(Se().grecaptcha) : new Promise((i, r) => {
      const s = Se().setTimeout(() => {
        r(mt(
          e,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, qy.get());
      Se()[_a] = () => {
        Se().clearTimeout(s), delete Se()[_a];
        const a = Se().grecaptcha;
        if (!a || !lu(a)) {
          r(mt(
            e,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          ));
          return;
        }
        const l = a.render;
        a.render = (c, h) => {
          const d = l(c, h);
          return this.counter++, d;
        }, this.hostLanguage = n, i(a);
      };
      const o = `${Kv()}?${yi({
        onload: _a,
        render: "explicit",
        hl: n
      })}`;
      Wl(o).catch(() => {
        clearTimeout(s), r(mt(
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
function Ky(t) {
  return t.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(t);
}
class Yy {
  async load(e) {
    return new Zv(e);
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
const Dr = "recaptcha", Qy = {
  theme: "light",
  type: "image"
};
class Jy {
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
    ...Qy
  }) {
    this.parameters = i, this.type = Dr, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = /* @__PURE__ */ new Set(), this.renderPromise = null, this.recaptcha = null, this.auth = Yt(e), this.isInvisible = this.parameters.size === "invisible", R(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
    const r = typeof n == "string" ? document.getElementById(n) : n;
    R(
      r,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.container = r, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Yy() : new Gy(), this.validateStartingState();
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
    R(
      !this.parameters.sitekey,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), R(
      this.isInvisible || !this.container.hasChildNodes(),
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), R(
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
    R(
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
    R(
      Dd() && !zl(),
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), await Xy(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const e = await Nv(this.auth);
    R(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.parameters.sitekey = e;
  }
  getAssertedRecaptcha() {
    return R(
      this.recaptcha,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.recaptcha;
  }
}
function Xy() {
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
class Zy {
  constructor(e, n) {
    this.verificationId = e, this.onConfirmation = n;
  }
  confirm(e) {
    const n = Lr._fromVerification(this.verificationId, e);
    return this.onConfirmation(n);
  }
}
async function eb(t, e, n) {
  if (at(t.app))
    return Promise.reject(jt(t));
  const i = Yt(t), r = await tb(i, e, Le(n));
  return new Zy(r, (s) => sf(i, s));
}
async function tb(t, e, n) {
  if (!t._getRecaptchaConfig())
    try {
      await sy(t);
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
        R(
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
          async (c, h) => {
            if (h.phoneEnrollmentInfo.captchaResponse === Or) {
              R(
                n?.type === Dr,
                c,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const d = await ma(c, h, n);
              return vu(c, d);
            }
            return vu(c, h);
          },
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ).catch((c) => Promise.reject(c))).phoneSessionInfo.sessionInfo;
      } else {
        R(
          r.type === "signin",
          t,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const s = i.multiFactorHint?.uid || i.multiFactorUid;
        R(
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
          async (h, d) => {
            if (d.phoneSignInInfo.captchaResponse === Or) {
              R(
                n?.type === Dr,
                h,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const u = await ma(h, d, n);
              return wu(h, u);
            }
            return wu(h, d);
          },
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ).catch((h) => Promise.reject(h))).phoneResponseInfo.sessionInfo;
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
          if (c.captchaResponse === Or) {
            R(
              n?.type === Dr,
              l,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            const h = await ma(l, c, n);
            return mu(l, h);
          }
          return mu(l, c);
        },
        "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */
      ).catch((l) => Promise.reject(l))).sessionInfo;
    }
  } finally {
    n?._reset();
  }
}
async function ma(t, e, n) {
  R(
    n.type === Dr,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const i = await n.verify();
  R(
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
function nb(t, e) {
  return e ? rn(e) : (R(
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
class Bl extends Fo {
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
function ib(t) {
  return rf(t.auth, new Bl(t), t.bypassAuthState);
}
function rb(t) {
  const { auth: e, user: n } = t;
  return R(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Cy(n, new Bl(t), t.bypassAuthState);
}
async function sb(t) {
  const { auth: e, user: n } = t;
  return R(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Iy(n, new Bl(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
        return ib;
      case "linkViaPopup":
      case "linkViaRedirect":
        return sb;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return rb;
      default:
        Mt(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    dn(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    dn(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const ob = new ps(2e3, 1e4);
class Pi extends mf {
  constructor(e, n, i, r, s) {
    super(e, n, r, s), this.provider = i, this.authWindow = null, this.pollId = null, Pi.currentPopupAction && Pi.currentPopupAction.cancel(), Pi.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return R(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    dn(this.filter.length === 1, "Popup operations only handle one event");
    const e = jl();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((n) => {
      this.reject(n);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
      n || this.reject(mt(
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
    this.reject(mt(
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
            this.pollId = null, this.reject(mt(
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
      this.pollId = window.setTimeout(e, ob.get());
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
const ab = "pendingRedirect", Us = /* @__PURE__ */ new Map();
class lb extends mf {
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
    let e = Us.get(this.auth._key());
    if (!e) {
      try {
        const i = await cb(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(i);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Us.set(this.auth._key(), e);
    }
    return this.bypassAuthState || Us.set(this.auth._key(), () => Promise.resolve(null)), e();
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
async function cb(t, e) {
  const n = db(e), i = hb(t);
  if (!await i._isAvailable())
    return !1;
  const r = await i._get(n) === "true";
  return await i._remove(n), r;
}
function ub(t, e) {
  Us.set(t._key(), e);
}
function hb(t) {
  return rn(t._redirectPersistence);
}
function db(t) {
  return Fs(ab, t.config.apiKey, t.name);
}
async function fb(t, e, n = !1) {
  if (at(t.app))
    return Promise.reject(jt(t));
  const i = Yt(t), r = nb(i, e), o = await new lb(i, r, n).execute();
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
const pb = 600 * 1e3;
class _b {
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
    }), this.hasHandledPotentialRedirect || !mb(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n;
  }
  sendToConsumer(e, n) {
    if (e.error && !gf(e)) {
      const i = e.error.code?.split("auth/")[1] || "internal-error";
      n.onError(mt(this.auth, i));
    } else
      n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const i = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
    return n.filter.includes(e.type) && i;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= pb && this.cachedEventUids.clear(), this.cachedEventUids.has(Eu(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Eu(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Eu(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function gf({ type: t, error: e }) {
  return t === "unknown" && e?.code === "auth/no-auth-event";
}
function mb(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return gf(t);
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
async function gb(t, e = {}) {
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
const vb = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, yb = /^https?/;
async function bb(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await gb(t);
  for (const n of e)
    try {
      if (wb(n))
        return;
    } catch {
    }
  Mt(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function wb(t) {
  const e = qa(), { protocol: n, hostname: i } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && i === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === i;
  }
  if (!yb.test(n))
    return !1;
  if (vb.test(t))
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
const Eb = new ps(3e4, 6e4);
function Iu() {
  const t = Se().___jsl;
  if (t?.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let n = 0; n < t.CP.length; n++)
          t.CP[n] = null;
  }
}
function Ib(t) {
  return new Promise((e, n) => {
    function i() {
      Iu(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          Iu(), n(mt(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Eb.get()
      });
    }
    if (Se().gapi?.iframes?.Iframe)
      e(gapi.iframes.getContext());
    else if (Se().gapi?.load)
      i();
    else {
      const r = Xd("iframefcb");
      return Se()[r] = () => {
        gapi.load ? i() : n(mt(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Wl(`${Qv()}?onload=${r}`).catch((s) => n(s));
    }
  }).catch((e) => {
    throw Hs = null, e;
  });
}
let Hs = null;
function Cb(t) {
  return Hs = Hs || Ib(t), Hs;
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
const Tb = new ps(5e3, 15e3), Sb = "__/auth/iframe", kb = "emulator/auth/iframe", Ab = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Rb = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Pb(t) {
  const e = t.config;
  R(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const n = e.emulator ? Fl(e, kb) : `https://${t.config.authDomain}/${Sb}`, i = {
    apiKey: e.apiKey,
    appName: t.name,
    v: bi
  }, r = Rb.get(t.config.apiHost);
  r && (i.eid = r);
  const s = t._getFrameworks();
  return s.length && (i.fw = s.join(",")), `${n}?${yi(i).slice(1)}`;
}
async function Nb(t) {
  const e = await Cb(t), n = Se().gapi;
  return R(
    n,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Pb(t),
    messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Ab,
    dontclear: !0
  }, (i) => new Promise(async (r, s) => {
    await i.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = mt(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), a = Se().setTimeout(() => {
      s(o);
    }, Tb.get());
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
const xb = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, Ob = 500, Lb = 600, Db = "_blank", Mb = "http://localhost";
class Cu {
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
function $b(t, e, n, i = Ob, r = Lb) {
  const s = Math.max((window.screen.availHeight - r) / 2, 0).toString(), o = Math.max((window.screen.availWidth - i) / 2, 0).toString();
  let a = "";
  const l = {
    ...xb,
    width: i.toString(),
    height: r.toString(),
    top: s,
    left: o
  }, c = et().toLowerCase();
  n && (a = Bd(c) ? Db : n), jd(c) && (e = e || Mb, l.scrollbars = "yes");
  const h = Object.entries(l).reduce((u, [f, p]) => `${u}${f}=${p},`, "");
  if (Hv(c) && a !== "_self")
    return Fb(e || "", a), new Cu(null);
  const d = window.open(e || "", a, h);
  R(
    d,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    d.focus();
  } catch {
  }
  return new Cu(d);
}
function Fb(t, e) {
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
const Ub = "__/auth/handler", Hb = "emulator/auth/handler", Wb = encodeURIComponent("fac");
async function Tu(t, e, n, i, r, s) {
  R(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), R(
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
    v: bi,
    eventId: r
  };
  if (e instanceof tf) {
    e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", Ha(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [h, d] of Object.entries({}))
      o[h] = d;
  }
  if (e instanceof ms) {
    const h = e.getScopes().filter((d) => d !== "");
    h.length > 0 && (o.scopes = h.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const h of Object.keys(a))
    a[h] === void 0 && delete a[h];
  const l = await t._getAppCheckToken(), c = l ? `#${Wb}=${encodeURIComponent(l)}` : "";
  return `${Vb(t)}?${yi(a).slice(1)}${c}`;
}
function Vb({ config: t }) {
  return t.emulator ? Fl(t, Hb) : `https://${t.authDomain}/${Ub}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ga = "webStorageSupport";
class jb {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = df, this._completeRedirectFn = fb, this._overrideRedirectResult = ub;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, n, i, r) {
    dn(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()");
    const s = await Tu(e, n, i, qa(), r);
    return $b(e, s, jl());
  }
  async _openRedirect(e, n, i, r) {
    await this._originValidation(e);
    const s = await Tu(e, n, i, qa(), r);
    return My(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: r, promise: s } = this.eventManagers[n];
      return r ? Promise.resolve(r) : (dn(s, "If manager is not set, promise should be"), s);
    }
    const i = this.initAndGetManager(e);
    return this.eventManagers[n] = { promise: i }, i.catch(() => {
      delete this.eventManagers[n];
    }), i;
  }
  async initAndGetManager(e) {
    const n = await Nb(e), i = new _b(e);
    return n.register("authEvent", (r) => (R(
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
    this.iframes[e._key()].send(ga, { type: ga }, (r) => {
      const s = r?.[0]?.[ga];
      s !== void 0 && n(!!s), Mt(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const n = e._key();
    return this.originValidationPromises[n] || (this.originValidationPromises[n] = bb(e)), this.originValidationPromises[n];
  }
  get _shouldInitProactively() {
    return Qd() || zd() || Hl();
  }
}
const zb = jb;
var Su = "@firebase/auth", ku = "1.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bb {
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
    R(
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
function qb(t) {
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
function Gb(t) {
  ci(new $n(
    "auth",
    (e, { options: n }) => {
      const i = e.getProvider("app").getImmediate(), r = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: o, authDomain: a } = i.options;
      R(o && !o.includes(":"), "invalid-api-key", { appName: i.name });
      const l = {
        apiKey: o,
        authDomain: a,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: Jd(t)
      }, c = new qv(i, r, s, l);
      return ay(c, n), c;
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
  })), ci(new $n(
    "auth-internal",
    (e) => {
      const n = Yt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((i) => new Bb(i))(n);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), Vt(Su, ku, qb(t)), Vt(Su, ku, "esm2020");
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
const Kb = 300, Yb = Id("authIdTokenMaxAge") || Kb;
let Au = null;
const Qb = (t) => async (e) => {
  const n = e && await e.getIdTokenResult(), i = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (i && i > Yb)
    return;
  const r = n?.token;
  Au !== r && (Au = r, await fetch(t, {
    method: r ? "POST" : "DELETE",
    headers: r ? {
      Authorization: `Bearer ${r}`
    } : {}
  }));
};
function Jb(t = Ml()) {
  const e = $o(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const n = oy(t, {
    popupRedirectResolver: zb,
    persistence: [
      By,
      Oy,
      df
    ]
  }), i = Id("authTokenSyncURL");
  if (i && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(i, location.origin);
    if (location.origin === s.origin) {
      const o = Qb(s.toString());
      Ry(n, o, () => o(n.currentUser)), Ay(n, (a) => o(a));
    }
  }
  const r = bd("auth");
  return r && ly(n, `http://${r}`), n;
}
function Xb() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
Gv({
  loadJS(t) {
    return new Promise((e, n) => {
      const i = document.createElement("script");
      i.setAttribute("src", t), i.onload = e, i.onerror = (r) => {
        const s = mt(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        s.customData = r, n(s);
      }, i.type = "text/javascript", i.charset = "UTF-8", Xb().appendChild(i);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
Gb(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const Ru = "@firebase/database", Pu = "1.1.0";
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
let vf = "";
function Zb(t) {
  vf = t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ew {
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
    n == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), xe(n));
  }
  /**
   * @returns The value that was stored under this key, or null
   */
  get(e) {
    const n = this.domStorage_.getItem(this.prefixedName_(e));
    return n == null ? null : Br(n);
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
class tw {
  constructor() {
    this.cache_ = {}, this.isInMemoryStorage = !0;
  }
  set(e, n) {
    n == null ? delete this.cache_[e] : this.cache_[e] = n;
  }
  get(e) {
    return Kt(this.cache_, e) ? this.cache_[e] : null;
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
const yf = function(t) {
  try {
    if (typeof window < "u" && typeof window[t] < "u") {
      const e = window[t];
      return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new ew(e);
    }
  } catch {
  }
  return new tw();
}, ei = yf("localStorage"), nw = yf("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fi = new Ll("@firebase/database"), iw = /* @__PURE__ */ (function() {
  let t = 1;
  return function() {
    return t++;
  };
})(), bf = function(t) {
  const e = hg(t), n = new ag();
  n.update(e);
  const i = n.digest();
  return Rl.encodeByteArray(i);
}, vs = function(...t) {
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    Array.isArray(i) || i && typeof i == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof i.length == "number" ? e += vs.apply(null, i) : typeof i == "object" ? e += xe(i) : e += i, e += " ";
  }
  return e;
};
let Mr = null, Nu = !0;
const rw = function(t, e) {
  C(!0, "Can't turn on custom loggers persistently."), Fi.logLevel = oe.VERBOSE, Mr = Fi.log.bind(Fi);
}, He = function(...t) {
  if (Nu === !0 && (Nu = !1, Mr === null && nw.get("logging_enabled") === !0 && rw()), Mr) {
    const e = vs.apply(null, t);
    Mr(e);
  }
}, ys = function(t) {
  return function(...e) {
    He(t, ...e);
  };
}, Ya = function(...t) {
  const e = "FIREBASE INTERNAL ERROR: " + vs(...t);
  Fi.error(e);
}, fn = function(...t) {
  const e = `FIREBASE FATAL ERROR: ${vs(...t)}`;
  throw Fi.error(e), new Error(e);
}, Ze = function(...t) {
  const e = "FIREBASE WARNING: " + vs(...t);
  Fi.warn(e);
}, sw = function() {
  typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
}, ql = function(t) {
  return typeof t == "number" && (t !== t || // NaN
  t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY);
}, ow = function(t) {
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
}, qi = "[MIN_NAME]", di = "[MAX_NAME]", wi = function(t, e) {
  if (t === e)
    return 0;
  if (t === qi || e === di)
    return -1;
  if (e === qi || t === di)
    return 1;
  {
    const n = xu(t), i = xu(e);
    return n !== null ? i !== null ? n - i === 0 ? t.length - e.length : n - i : -1 : i !== null ? 1 : t < e ? -1 : 1;
  }
}, aw = function(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}, gr = function(t, e) {
  if (e && t in e)
    return e[t];
  throw new Error("Missing required key (" + t + ") in object: " + xe(e));
}, Gl = function(t) {
  if (typeof t != "object" || t === null)
    return xe(t);
  const e = [];
  for (const i in t)
    e.push(i);
  e.sort();
  let n = "{";
  for (let i = 0; i < e.length; i++)
    i !== 0 && (n += ","), n += xe(e[i]), n += ":", n += Gl(t[e[i]]);
  return n += "}", n;
}, wf = function(t, e) {
  const n = t.length;
  if (n <= e)
    return [t];
  const i = [];
  for (let r = 0; r < n; r += e)
    r + e > n ? i.push(t.substring(r, n)) : i.push(t.substring(r, r + e));
  return i;
};
function Ve(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e(n, t[n]);
}
const Ef = function(t) {
  C(!ql(t), "Invalid JSON number");
  const e = 11, n = 52, i = (1 << e - 1) - 1;
  let r, s, o, a, l;
  t === 0 ? (s = 0, o = 0, r = 1 / t === -1 / 0 ? 1 : 0) : (r = t < 0, t = Math.abs(t), t >= Math.pow(2, 1 - i) ? (a = Math.min(Math.floor(Math.log(t) / Math.LN2), i), s = a + i, o = Math.round(t * Math.pow(2, n - a) - Math.pow(2, n))) : (s = 0, o = Math.round(t / Math.pow(2, 1 - i - n))));
  const c = [];
  for (l = n; l; l -= 1)
    c.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
  for (l = e; l; l -= 1)
    c.push(s % 2 ? 1 : 0), s = Math.floor(s / 2);
  c.push(r ? 1 : 0), c.reverse();
  const h = c.join("");
  let d = "";
  for (l = 0; l < 64; l += 8) {
    let u = parseInt(h.substr(l, 8), 2).toString(16);
    u.length === 1 && (u = "0" + u), d = d + u;
  }
  return d.toLowerCase();
}, lw = function() {
  return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href));
}, cw = function() {
  return typeof Windows == "object" && typeof Windows.UI == "object";
};
function uw(t, e) {
  let n = "Unknown Error";
  t === "too_big" ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : t === "permission_denied" ? n = "Client doesn't have permission to access the desired data." : t === "unavailable" && (n = "The service is unavailable");
  const i = new Error(t + " at " + e._path.toString() + ": " + n);
  return i.code = t.toUpperCase(), i;
}
const hw = new RegExp("^-?(0*)\\d{1,10}$"), dw = -2147483648, fw = 2147483647, xu = function(t) {
  if (hw.test(t)) {
    const e = Number(t);
    if (e >= dw && e <= fw)
      return e;
  }
  return null;
}, ir = function(t) {
  try {
    t();
  } catch (e) {
    setTimeout(() => {
      const n = e.stack || "";
      throw Ze("Exception was thrown by user callback.", n), e;
    }, Math.floor(0));
  }
}, pw = function() {
  return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
}, $r = function(t, e) {
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
class _w {
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
class mw {
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
class Ws {
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
Ws.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kl = "5", If = "v", Cf = "s", Tf = "r", Sf = "f", kf = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/, Af = "ls", Rf = "p", Qa = "ac", Pf = "websocket", Nf = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xf {
  /**
   * @param host - Hostname portion of the url for the repo
   * @param secure - Whether or not this repo is accessed over ssl
   * @param namespace - The namespace represented by the repo
   * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
   * @param nodeAdmin - Whether this instance uses Admin SDK credentials
   * @param persistenceKey - Override the default session persistence storage key
   */
  constructor(e, n, i, r, s = !1, o = "", a = !1, l = !1, c = null) {
    this.secure = n, this.namespace = i, this.webSocketOnly = r, this.nodeAdmin = s, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this.isUsingEmulator = l, this.emulatorOptions = c, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = ei.get("host:" + e) || this._host;
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
    e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && ei.set("host:" + this._host, this.internalHost));
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
function gw(t) {
  return t.host !== t.internalHost || t.isCustomHost() || t.includeNamespaceInQueryParams;
}
function Of(t, e, n) {
  C(typeof e == "string", "typeof type must == string"), C(typeof n == "object", "typeof params must == object");
  let i;
  if (e === Pf)
    i = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
  else if (e === Nf)
    i = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
  else
    throw new Error("Unknown connection type: " + e);
  gw(t) && (n.ns = t.namespace);
  const r = [];
  return Ve(n, (s, o) => {
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
class vw {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, n = 1) {
    Kt(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += n;
  }
  get() {
    return Vm(this.counters_);
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
const va = {}, ya = {};
function Yl(t) {
  const e = t.toString();
  return va[e] || (va[e] = new vw()), va[e];
}
function yw(t, e) {
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
class bw {
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
        i[r] && ir(() => {
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
const Ou = "start", ww = "close", Ew = "pLPCommand", Iw = "pRTLPCB", Lf = "id", Df = "pw", Mf = "ser", Cw = "cb", Tw = "seg", Sw = "ts", kw = "d", Aw = "dframe", $f = 1870, Ff = 30, Rw = $f - Ff, Pw = 25e3, Nw = 3e4;
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
    this.connId = e, this.repoInfo = n, this.applicationId = i, this.appCheckToken = r, this.authToken = s, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = ys(e), this.stats_ = Yl(n), this.urlFn = (l) => (this.appCheckToken && (l[Qa] = this.appCheckToken), Of(n, Nf, l));
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.curSegmentNum = 0, this.onDisconnect_ = n, this.myPacketOrderer = new bw(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(() => {
      this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null;
    }, Math.floor(Nw)), ow(() => {
      if (this.isClosed_)
        return;
      this.scriptTagHolder = new Ql((...s) => {
        const [o, a, l, c, h] = s;
        if (this.incrementIncomingBytes_(s), !!this.scriptTagHolder)
          if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, o === Ou)
            this.id = a, this.password = l;
          else if (o === ww)
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
      i[Ou] = "t", i[Mf] = Math.floor(Math.random() * 1e8), this.scriptTagHolder.uniqueCallbackIdentifier && (i[Cw] = this.scriptTagHolder.uniqueCallbackIdentifier), i[If] = Kl, this.transportSessionId && (i[Cf] = this.transportSessionId), this.lastSessionId && (i[Af] = this.lastSessionId), this.applicationId && (i[Rf] = this.applicationId), this.appCheckToken && (i[Qa] = this.appCheckToken), typeof location < "u" && location.hostname && kf.test(location.hostname) && (i[Tf] = Sf);
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
    return Ni.forceAllow_ ? !0 : !Ni.forceDisallow_ && typeof document < "u" && document.createElement != null && !lw() && !cw();
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
    const n = xe(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const i = vd(n), r = wf(i, Rw);
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
    i[Aw] = "t", i[Lf] = e, i[Df] = n, this.myDisconnFrame.src = this.urlFn(i), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
  }
  /**
   * Used to track the bytes received by this client
   */
  incrementIncomingBytes_(e) {
    const n = xe(e).length;
    this.bytesReceived += n, this.stats_.incrementCounter("bytes_received", n);
  }
}
class Ql {
  /**
   * @param commandCB - The callback to be called when control commands are received from the server.
   * @param onMessageCB - The callback to be triggered when responses arrive from the server.
   * @param onDisconnect - The callback to be triggered when this tag holder is closed
   * @param urlFn - A function that provides the URL of the endpoint to send data to.
   */
  constructor(e, n, i, r) {
    this.onDisconnect = i, this.urlFn = r, this.outstandingRequests = /* @__PURE__ */ new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(Math.random() * 1e8), this.sendNewPolls = !0;
    {
      this.uniqueCallbackIdentifier = iw(), window[Ew + this.uniqueCallbackIdentifier] = e, window[Iw + this.uniqueCallbackIdentifier] = n, this.myIFrame = Ql.createIFrame_();
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
      e[Lf] = this.myID, e[Df] = this.myPW, e[Mf] = this.currentSerial;
      let n = this.urlFn(e), i = "", r = 0;
      for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + Ff + i.length <= $f; ) {
        const o = this.pendingSegs.shift();
        i = i + "&" + Tw + r + "=" + o.seg + "&" + Sw + r + "=" + o.ts + "&" + kw + r + "=" + o.d, r++;
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
    }, r = setTimeout(i, Math.floor(Pw)), s = () => {
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
const xw = 16384, Ow = 45e3;
let oo = null;
typeof MozWebSocket < "u" ? oo = MozWebSocket : typeof WebSocket < "u" && (oo = WebSocket);
class Pt {
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
    this.connId = e, this.applicationId = i, this.appCheckToken = r, this.authToken = s, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = ys(this.connId), this.stats_ = Yl(n), this.connURL = Pt.connectionURL_(n, o, a, r, i), this.nodeAdmin = n.nodeAdmin;
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
    return o[If] = Kl, typeof location < "u" && location.hostname && kf.test(location.hostname) && (o[Tf] = Sf), n && (o[Cf] = n), i && (o[Af] = i), r && (o[Qa] = r), s && (o[Rf] = s), Of(e, Pf, o);
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.onDisconnect = n, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, ei.set("previous_websocket_failure", !0);
    try {
      let i;
      Zm(), this.mySock = new oo(this.connURL, [], i);
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
    Pt.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < "u" && navigator.userAgent) {
      const n = /Android ([0-9]{0,}\.[0-9]{0,})/, i = navigator.userAgent.match(n);
      i && i.length > 1 && parseFloat(i[1]) < 4.4 && (e = !0);
    }
    return !e && oo !== null && !Pt.forceDisallow_;
  }
  /**
   * Returns true if we previously failed to connect with this transport.
   */
  static previouslyFailed() {
    return ei.isInMemoryStorage || ei.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    ei.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if (this.frames.push(e), this.frames.length === this.totalFrames) {
      const n = this.frames.join("");
      this.frames = null;
      const i = Br(n);
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
    const n = xe(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const i = wf(n, xw);
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
    }, Math.floor(Ow));
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
Pt.responsesRequiredToBeHealthy = 2;
Pt.healthyTimeout = 3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr {
  static get ALL_TRANSPORTS() {
    return [Ni, Pt];
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
    const n = Pt && Pt.isAvailable();
    let i = n && !Pt.previouslyFailed();
    if (e.webSocketOnly && (n || Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), i = !0), i)
      this.transports_ = [Pt];
    else {
      const r = this.transports_ = [];
      for (const s of Kr.ALL_TRANSPORTS)
        s && s.isAvailable() && r.push(s);
      Kr.globalTransportInitialized_ = !0;
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
Kr.globalTransportInitialized_ = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lw = 6e4, Dw = 5e3, Mw = 10 * 1024, $w = 100 * 1024, ba = "t", Lu = "d", Fw = "s", Du = "r", Uw = "e", Mu = "o", $u = "a", Fu = "n", Uu = "p", Hw = "h";
class Ww {
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
  constructor(e, n, i, r, s, o, a, l, c, h) {
    this.id = e, this.repoInfo_ = n, this.applicationId_ = i, this.appCheckToken_ = r, this.authToken_ = s, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = l, this.onKill_ = c, this.lastSessionId = h, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = ys("c:" + this.id + ":"), this.transportManager_ = new Kr(n), this.log_("Connection created"), this.start_();
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
    r > 0 && (this.healthyTimeout_ = $r(() => {
      this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > $w ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > Mw ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()));
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
    if (ba in e) {
      const n = e[ba];
      n === $u ? this.upgradeIfSecondaryHealthy_() : n === Du ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : n === Mu && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const n = gr("t", e), i = gr("d", e);
    if (n === "c")
      this.onSecondaryControl_(i);
    else if (n === "d")
      this.pendingDataMessages.push(i);
    else
      throw new Error("Unknown protocol layer: " + n);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({ t: "c", d: { t: Uu, d: {} } }));
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({ t: "c", d: { t: $u, d: {} } }), this.log_("Ending transmission on primary"), this.conn_.send({ t: "c", d: { t: Fu, d: {} } }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(e) {
    const n = gr("t", e), i = gr("d", e);
    n === "c" ? this.onControl_(i) : n === "d" && this.onDataMessage_(i);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const n = gr(ba, e);
    if (Lu in e) {
      const i = e[Lu];
      if (n === Hw) {
        const r = {
          ...i
        };
        this.repoInfo_.isUsingEmulator && (r.h = this.repoInfo_.host), this.onHandshake_(r);
      } else if (n === Fu) {
        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
        for (let r = 0; r < this.pendingDataMessages.length; ++r)
          this.onDataMessage_(this.pendingDataMessages[r]);
        this.pendingDataMessages = [], this.tryCleanupConnection();
      } else n === Fw ? this.onConnectionShutdown_(i) : n === Du ? this.onReset_(i) : n === Uw ? Ya("Server Error: " + i) : n === Mu ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : Ya("Unknown control packet command: " + n);
    }
  }
  /**
   * @param handshake - The handshake data returned from the server
   */
  onHandshake_(e) {
    const n = e.ts, i = e.v, r = e.h;
    this.sessionId = e.s, this.repoInfo_.host = r, this.state_ === 0 && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, n), Kl !== i && Ze("Protocol version mismatch detected"), this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.secondaryConn_), i = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(n, i), $r(() => {
      this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close());
    }, Math.floor(Lw));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, this.state_ === 1 ? this.close() : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, n) {
    this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(n, this.sessionId), this.onReady_ = null), this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : $r(() => {
      this.sendPingOnPrimaryIfNecessary_();
    }, Math.floor(Dw));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."), this.sendData_({ t: "c", d: { t: Uu, d: {} } }));
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
    this.conn_ = null, !e && this.state_ === 0 ? (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (ei.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."), this.close();
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
class Uf {
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
class Hf {
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
class ao extends Hf {
  static getInstance() {
    return new ao();
  }
  constructor() {
    super(["online"]), this.online_ = !0, typeof window < "u" && typeof window.addEventListener < "u" && !Ol() && (window.addEventListener("online", () => {
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
const Hu = 32, Wu = 768;
class le {
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
function Q() {
  return new le("");
}
function j(t) {
  return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_];
}
function Fn(t) {
  return t.pieces_.length - t.pieceNum_;
}
function de(t) {
  let e = t.pieceNum_;
  return e < t.pieces_.length && e++, new le(t.pieces_, e);
}
function Jl(t) {
  return t.pieceNum_ < t.pieces_.length ? t.pieces_[t.pieces_.length - 1] : null;
}
function Vw(t) {
  let e = "";
  for (let n = t.pieceNum_; n < t.pieces_.length; n++)
    t.pieces_[n] !== "" && (e += "/" + encodeURIComponent(String(t.pieces_[n])));
  return e || "/";
}
function Yr(t, e = 0) {
  return t.pieces_.slice(t.pieceNum_ + e);
}
function Wf(t) {
  if (t.pieceNum_ >= t.pieces_.length)
    return null;
  const e = [];
  for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++)
    e.push(t.pieces_[n]);
  return new le(e, 0);
}
function ye(t, e) {
  const n = [];
  for (let i = t.pieceNum_; i < t.pieces_.length; i++)
    n.push(t.pieces_[i]);
  if (e instanceof le)
    for (let i = e.pieceNum_; i < e.pieces_.length; i++)
      n.push(e.pieces_[i]);
  else {
    const i = e.split("/");
    for (let r = 0; r < i.length; r++)
      i[r].length > 0 && n.push(i[r]);
  }
  return new le(n, 0);
}
function B(t) {
  return t.pieceNum_ >= t.pieces_.length;
}
function Xe(t, e) {
  const n = j(t), i = j(e);
  if (n === null)
    return e;
  if (n === i)
    return Xe(de(t), de(e));
  throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")");
}
function jw(t, e) {
  const n = Yr(t, 0), i = Yr(e, 0);
  for (let r = 0; r < n.length && r < i.length; r++) {
    const s = wi(n[r], i[r]);
    if (s !== 0)
      return s;
  }
  return n.length === i.length ? 0 : n.length < i.length ? -1 : 1;
}
function Xl(t, e) {
  if (Fn(t) !== Fn(e))
    return !1;
  for (let n = t.pieceNum_, i = e.pieceNum_; n <= t.pieces_.length; n++, i++)
    if (t.pieces_[n] !== e.pieces_[i])
      return !1;
  return !0;
}
function bt(t, e) {
  let n = t.pieceNum_, i = e.pieceNum_;
  if (Fn(t) > Fn(e))
    return !1;
  for (; n < t.pieces_.length; ) {
    if (t.pieces_[n] !== e.pieces_[i])
      return !1;
    ++n, ++i;
  }
  return !0;
}
class zw {
  /**
   * @param path - Initial Path.
   * @param errorPrefix_ - Prefix for any error messages.
   */
  constructor(e, n) {
    this.errorPrefix_ = n, this.parts_ = Yr(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
    for (let i = 0; i < this.parts_.length; i++)
      this.byteLength_ += Mo(this.parts_[i]);
    Vf(this);
  }
}
function Bw(t, e) {
  t.parts_.length > 0 && (t.byteLength_ += 1), t.parts_.push(e), t.byteLength_ += Mo(e), Vf(t);
}
function qw(t) {
  const e = t.parts_.pop();
  t.byteLength_ -= Mo(e), t.parts_.length > 0 && (t.byteLength_ -= 1);
}
function Vf(t) {
  if (t.byteLength_ > Wu)
    throw new Error(t.errorPrefix_ + "has a key path longer than " + Wu + " bytes (" + t.byteLength_ + ").");
  if (t.parts_.length > Hu)
    throw new Error(t.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Hu + ") or object contains a cycle " + Jn(t));
}
function Jn(t) {
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
class Zl extends Hf {
  static getInstance() {
    return new Zl();
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
const vr = 1e3, Gw = 300 * 1e3, Vu = 30 * 1e3, Kw = 1.3, Yw = 3e4, Qw = "server_kill", ju = 3;
class un extends Uf {
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param applicationId_ - The Firebase App ID for this project
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, i, r, s, o, a, l) {
    if (super(), this.repoInfo_ = e, this.applicationId_ = n, this.onDataUpdate_ = i, this.onConnectStatus_ = r, this.onServerInfoUpdate_ = s, this.authTokenProvider_ = o, this.appCheckTokenProvider_ = a, this.authOverride_ = l, this.id = un.nextPersistentConnectionId_++, this.log_ = ys("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = /* @__PURE__ */ new Map(), this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = vr, this.maxReconnectDelay_ = Gw, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, l)
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    Zl.getInstance().on("visible", this.onVisible_, this), e.host.indexOf("fblocal") === -1 && ao.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, n, i) {
    const r = ++this.requestNumber_, s = { r, a: e, b: n };
    this.log_(xe(s)), C(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(s), i && (this.requestCBHash_[r] = i);
  }
  get(e) {
    this.initConnection_();
    const n = new ds(), r = {
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
      un.warnOnListenWarnings_(l, n), (this.listens.get(i) && this.listens.get(i).get(r)) === e && (this.log_("listen response", a), c !== "ok" && this.removeListen_(i, r), e.onComplete && e.onComplete(c, l));
    });
  }
  static warnOnListenWarnings_(e, n) {
    if (e && typeof e == "object" && Kt(e, "w")) {
      const i = zi(e, "w");
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
    (e && e.length === 40 || og(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = Vu);
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
      const e = this.authToken_, n = sg(e) ? "auth" : "gauth", i = { cred: e };
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
      this.log_("from server: " + xe(e));
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
    ) : e === "c" ? this.onListenRevoked_(n.p, n.q) : e === "ac" ? this.onAuthRevoked_(n.s, n.d) : e === "apc" ? this.onAppCheckRevoked_(n.s, n.d) : e === "sd" ? this.onSecurityDebugPacket_(n) : Ya("Unrecognized action received from server: " + xe(e) + `
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
    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = vr, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
  }
  onOnline_(e) {
    e ? (this.log_("Browser went online."), this.reconnectDelay_ = vr, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
      this.visible_ ? this.lastConnectionEstablishedTime_ && ((/* @__PURE__ */ new Date()).getTime() - this.lastConnectionEstablishedTime_ > Yw && (this.reconnectDelay_ = vr), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime());
      const e = Math.max(0, (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionAttemptTime_);
      let n = Math.max(0, this.reconnectDelay_ - e);
      n = Math.random() * n, this.log_("Trying to reconnect in " + n + "ms"), this.scheduleConnect_(n), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * Kw);
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime(), this.lastConnectionEstablishedTime_ = null;
      const e = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), i = this.onRealtimeDisconnect_.bind(this), r = this.id + ":" + un.nextConnectionId_++, s = this.lastSessionId;
      let o = !1, a = null;
      const l = function() {
        a ? a.close() : (o = !0, i());
      }, c = function(d) {
        C(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(d);
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
        o ? He("getToken() completed but was canceled") : (He("getToken() completed. Creating connection."), this.authToken_ = d && d.accessToken, this.appCheckToken_ = u && u.token, a = new Ww(
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
            Ze(f + " (" + this.repoInfo_.toString() + ")"), this.interrupt(Qw);
          },
          s
        ));
      } catch (d) {
        this.log_("Failed to get token: " + d), o || (this.repoInfo_.nodeAdmin && Ze(d), l());
      }
    }
  }
  interrupt(e) {
    He("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    He("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Ha(this.interruptReasons_) && (this.reconnectDelay_ = vr, this.realtime_ || this.scheduleConnect_(0));
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
    n ? i = n.map((s) => Gl(s)).join("$") : i = "default";
    const r = this.removeListen_(e, i);
    r && r.onComplete && r.onComplete("permission_denied");
  }
  removeListen_(e, n) {
    const i = new le(e).toString();
    let r;
    if (this.listens.has(i)) {
      const s = this.listens.get(i);
      r = s.get(n), s.delete(n), s.size === 0 && this.listens.delete(i);
    } else
      r = void 0;
    return r;
  }
  onAuthRevoked_(e, n) {
    He("Auth token revoked: " + e + "/" + n), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= ju && (this.reconnectDelay_ = Vu, this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, n) {
    He("App check token revoked: " + e + "/" + n), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= ju && this.appCheckTokenProvider_.notifyForInvalidToken());
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
    e["sdk." + n + "." + vf.replace(/\./g, "-")] = 1, Ol() ? e["framework.cordova"] = 1 : Td() && (e["framework.reactnative"] = 1), this.reportStats(e);
  }
  shouldReconnect_() {
    const e = ao.getInstance().currentlyOnline();
    return Ha(this.interruptReasons_) && e;
  }
}
un.nextPersistentConnectionId_ = 0;
un.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z {
  constructor(e, n) {
    this.name = e, this.node = n;
  }
  static Wrap(e, n) {
    return new z(e, n);
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
class Wo {
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
    const i = new z(qi, e), r = new z(qi, n);
    return this.compare(i, r) !== 0;
  }
  /**
   * @returns a node wrapper that will sort equal to or less than
   * any other node wrapper, using this index
   */
  minPost() {
    return z.MIN;
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
let Os;
class jf extends Wo {
  static get __EMPTY_NODE() {
    return Os;
  }
  static set __EMPTY_NODE(e) {
    Os = e;
  }
  compare(e, n) {
    return wi(e.name, n.name);
  }
  isDefinedOn(e) {
    throw tr("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, n) {
    return !1;
  }
  minPost() {
    return z.MIN;
  }
  maxPost() {
    return new z(di, Os);
  }
  makePost(e, n) {
    return C(typeof e == "string", "KeyIndex indexValue must always be a string."), new z(e, Os);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".key";
  }
}
const Ui = new jf();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls {
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
class Me {
  /**
   * @param key - Key associated with this node.
   * @param value - Value associated with this node.
   * @param color - Whether this node is red.
   * @param left - Left child.
   * @param right - Right child.
   */
  constructor(e, n, i, r, s) {
    this.key = e, this.value = n, this.color = i ?? Me.RED, this.left = r ?? ct.EMPTY_NODE, this.right = s ?? ct.EMPTY_NODE;
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
    return new Me(e ?? this.key, n ?? this.value, i ?? this.color, r ?? this.left, s ?? this.right);
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
    const e = this.copy(null, null, Me.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  /**
   * @returns New tree, after rotateRight.
   */
  rotateRight_() {
    const e = this.copy(null, null, Me.RED, this.left.right, null);
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
Me.RED = !0;
Me.BLACK = !1;
class Jw {
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
    return new Me(e, n, null);
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
    return new ct(this.comparator_, this.root_.insert(e, n, this.comparator_).copy(null, null, Me.BLACK, null, null));
  }
  /**
   * Returns a copy of the map, with the specified key removed.
   *
   * @param key - The key to remove.
   * @returns New map, with item removed.
   */
  remove(e) {
    return new ct(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, Me.BLACK, null, null));
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
    return new Ls(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, n) {
    return new Ls(this.root_, e, this.comparator_, !1, n);
  }
  getReverseIteratorFrom(e, n) {
    return new Ls(this.root_, e, this.comparator_, !0, n);
  }
  getReverseIterator(e) {
    return new Ls(this.root_, null, this.comparator_, !0, e);
  }
}
ct.EMPTY_NODE = new Jw();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xw(t, e) {
  return wi(t.name, e.name);
}
function ec(t, e) {
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
let Ja;
function Zw(t) {
  Ja = t;
}
const zf = function(t) {
  return typeof t == "number" ? "number:" + Ef(t) : "string:" + t;
}, Bf = function(t) {
  if (t.isLeafNode()) {
    const e = t.val();
    C(typeof e == "string" || typeof e == "number" || typeof e == "object" && Kt(e, ".sv"), "Priority must be a string or number.");
  } else
    C(t === Ja || t.isEmpty(), "priority of unexpected type.");
  C(t === Ja || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
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
let zu;
class De {
  static set __childrenNodeConstructor(e) {
    zu = e;
  }
  static get __childrenNodeConstructor() {
    return zu;
  }
  /**
   * @param value_ - The value to store in this leaf node. The object type is
   * possible in the event of a deferred value
   * @param priorityNode_ - The priority of this node.
   */
  constructor(e, n = De.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = e, this.priorityNode_ = n, this.lazyHash_ = null, C(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."), Bf(this.priorityNode_);
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
    return new De(this.value_, e);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    return e === ".priority" ? this.priorityNode_ : De.__childrenNodeConstructor.EMPTY_NODE;
  }
  /** @inheritDoc */
  getChild(e) {
    return B(e) ? this : j(e) === ".priority" ? this.priorityNode_ : De.__childrenNodeConstructor.EMPTY_NODE;
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
    return e === ".priority" ? this.updatePriority(n) : n.isEmpty() && e !== ".priority" ? this : De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_);
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const i = j(e);
    return i === null ? n : n.isEmpty() && i !== ".priority" ? this : (C(i !== ".priority" || Fn(e) === 1, ".priority must be the last token in a path"), this.updateImmediateChild(i, De.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e), n)));
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
      this.priorityNode_.isEmpty() || (e += "priority:" + zf(this.priorityNode_.val()) + ":");
      const n = typeof this.value_;
      e += n + ":", n === "number" ? e += Ef(this.value_) : e += this.value_, this.lazyHash_ = bf(e);
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
    return e === De.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof De.__childrenNodeConstructor ? -1 : (C(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  /**
   * Comparison specifically for two leaf nodes
   */
  compareToLeafNode_(e) {
    const n = typeof e.value_, i = typeof this.value_, r = De.VALUE_TYPE_ORDER.indexOf(n), s = De.VALUE_TYPE_ORDER.indexOf(i);
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
De.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qf, Gf;
function e0(t) {
  qf = t;
}
function t0(t) {
  Gf = t;
}
class n0 extends Wo {
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
    return z.MIN;
  }
  maxPost() {
    return new z(di, new De("[PRIORITY-POST]", Gf));
  }
  makePost(e, n) {
    const i = qf(e);
    return new z(n, new De("[PRIORITY-POST]", i));
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".priority";
  }
}
const be = new n0();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i0 = Math.log(2);
class r0 {
  constructor(e) {
    const n = (s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parseInt(Math.log(s) / i0, 10)
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
const lo = function(t, e, n, i) {
  t.sort(e);
  const r = function(l, c) {
    const h = c - l;
    let d, u;
    if (h === 0)
      return null;
    if (h === 1)
      return d = t[l], u = n ? n(d) : d, new Me(u, d.node, Me.BLACK, null, null);
    {
      const f = parseInt(h / 2, 10) + l, p = r(l, f), g = r(f + 1, c);
      return d = t[f], u = n ? n(d) : d, new Me(u, d.node, Me.BLACK, p, g);
    }
  }, s = function(l) {
    let c = null, h = null, d = t.length;
    const u = function(p, g) {
      const b = d - p, T = d;
      d -= p;
      const S = r(b + 1, T), k = t[b], A = n ? n(k) : k;
      f(new Me(A, k.node, g, null, S));
    }, f = function(p) {
      c ? (c.left = p, c = p) : (h = p, c = p);
    };
    for (let p = 0; p < l.count; ++p) {
      const g = l.nextBitIsOne(), b = Math.pow(2, l.count - (p + 1));
      g ? u(b, Me.BLACK) : (u(b, Me.BLACK), u(b, Me.RED));
    }
    return h;
  }, o = new r0(t.length), a = s(o);
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
let wa;
const ki = {};
class sn {
  /**
   * The default IndexMap for nodes without a priority
   */
  static get Default() {
    return C(ki && be, "ChildrenNode.ts has not been loaded"), wa = wa || new sn({ ".priority": ki }, { ".priority": be }), wa;
  }
  constructor(e, n) {
    this.indexes_ = e, this.indexSet_ = n;
  }
  get(e) {
    const n = zi(this.indexes_, e);
    if (!n)
      throw new Error("No index defined for " + e);
    return n instanceof ct ? n : null;
  }
  hasIndex(e) {
    return Kt(this.indexSet_, e.toString());
  }
  addIndex(e, n) {
    C(e !== Ui, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const i = [];
    let r = !1;
    const s = n.getIterator(z.Wrap);
    let o = s.getNext();
    for (; o; )
      r = r || e.isDefinedOn(o.node), i.push(o), o = s.getNext();
    let a;
    r ? a = lo(i, e.getCompare()) : a = ki;
    const l = e.toString(), c = { ...this.indexSet_ };
    c[l] = e;
    const h = { ...this.indexes_ };
    return h[l] = a, new sn(h, c);
  }
  /**
   * Ensure that this node is properly tracked in any indexes that we're maintaining
   */
  addToIndexes(e, n) {
    const i = Xs(this.indexes_, (r, s) => {
      const o = zi(this.indexSet_, s);
      if (C(o, "Missing index implementation for " + s), r === ki)
        if (o.isDefinedOn(e.node)) {
          const a = [], l = n.getIterator(z.Wrap);
          let c = l.getNext();
          for (; c; )
            c.name !== e.name && a.push(c), c = l.getNext();
          return a.push(e), lo(a, o.getCompare());
        } else
          return ki;
      else {
        const a = n.get(e.name);
        let l = r;
        return a && (l = l.remove(new z(e.name, a))), l.insert(e, e.node);
      }
    });
    return new sn(i, this.indexSet_);
  }
  /**
   * Create a new IndexMap instance with the given value removed
   */
  removeFromIndexes(e, n) {
    const i = Xs(this.indexes_, (r) => {
      if (r === ki)
        return r;
      {
        const s = n.get(e.name);
        return s ? r.remove(new z(e.name, s)) : r;
      }
    });
    return new sn(i, this.indexSet_);
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
let yr;
class $ {
  static get EMPTY_NODE() {
    return yr || (yr = new $(new ct(ec), null, sn.Default));
  }
  /**
   * @param children_ - List of children of this node..
   * @param priorityNode_ - The priority of this node (as a snapshot node).
   */
  constructor(e, n, i) {
    this.children_ = e, this.priorityNode_ = n, this.indexMap_ = i, this.lazyHash_ = null, this.priorityNode_ && Bf(this.priorityNode_), this.children_.isEmpty() && C(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
  }
  /** @inheritDoc */
  isLeafNode() {
    return !1;
  }
  /** @inheritDoc */
  getPriority() {
    return this.priorityNode_ || yr;
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
      return n === null ? yr : n;
    }
  }
  /** @inheritDoc */
  getChild(e) {
    const n = j(e);
    return n === null ? this : this.getImmediateChild(n).getChild(de(e));
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
      const i = new z(e, n);
      let r, s;
      n.isEmpty() ? (r = this.children_.remove(e), s = this.indexMap_.removeFromIndexes(i, this.children_)) : (r = this.children_.insert(e, n), s = this.indexMap_.addToIndexes(i, this.children_));
      const o = r.isEmpty() ? yr : this.priorityNode_;
      return new $(r, o, s);
    }
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const i = j(e);
    if (i === null)
      return n;
    {
      C(j(e) !== ".priority" || Fn(e) === 1, ".priority must be the last token in a path");
      const r = this.getImmediateChild(i).updateChild(de(e), n);
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
    if (this.forEachChild(be, (o, a) => {
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
      this.getPriority().isEmpty() || (e += "priority:" + zf(this.getPriority().val()) + ":"), this.forEachChild(be, (n, i) => {
        const r = i.hash();
        r !== "" && (e += ":" + n + ":" + r);
      }), this.lazyHash_ = e === "" ? "" : bf(e);
    }
    return this.lazyHash_;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, n, i) {
    const r = this.resolveIndex_(i);
    if (r) {
      const s = r.getPredecessorKey(new z(e, n));
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
    return n ? new z(n, this.children_.get(n)) : null;
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
    return n ? new z(n, this.children_.get(n)) : null;
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
      const r = this.children_.getIteratorFrom(e.name, z.Wrap);
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
      const r = this.children_.getReverseIteratorFrom(e.name, z.Wrap);
      let s = r.peek();
      for (; s != null && n.compare(s, e) > 0; )
        r.getNext(), s = r.peek();
      return r;
    }
  }
  compareTo(e) {
    return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === bs ? -1 : 0;
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
          const i = this.getIterator(be), r = n.getIterator(be);
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
class s0 extends $ {
  constructor() {
    super(new ct(ec), $.EMPTY_NODE, sn.Default);
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
const bs = new s0();
Object.defineProperties(z, {
  MIN: {
    value: new z(qi, $.EMPTY_NODE)
  },
  MAX: {
    value: new z(di, bs)
  }
});
jf.__EMPTY_NODE = $.EMPTY_NODE;
De.__childrenNodeConstructor = $;
Zw(bs);
t0(bs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o0 = !0;
function Ne(t, e = null) {
  if (t === null)
    return $.EMPTY_NODE;
  if (typeof t == "object" && ".priority" in t && (e = t[".priority"]), C(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv" in e, "Invalid priority type found: " + typeof e), typeof t == "object" && ".value" in t && t[".value"] !== null && (t = t[".value"]), typeof t != "object" || ".sv" in t) {
    const n = t;
    return new De(n, Ne(e));
  }
  if (!(t instanceof Array) && o0) {
    const n = [];
    let i = !1;
    if (Ve(t, (o, a) => {
      if (o.substring(0, 1) !== ".") {
        const l = Ne(a);
        l.isEmpty() || (i = i || !l.getPriority().isEmpty(), n.push(new z(o, l)));
      }
    }), n.length === 0)
      return $.EMPTY_NODE;
    const s = lo(n, Xw, (o) => o.name, ec);
    if (i) {
      const o = lo(n, be.getCompare());
      return new $(s, Ne(e), new sn({ ".priority": o }, { ".priority": be }));
    } else
      return new $(s, Ne(e), sn.Default);
  } else {
    let n = $.EMPTY_NODE;
    return Ve(t, (i, r) => {
      if (Kt(t, i) && i.substring(0, 1) !== ".") {
        const s = Ne(r);
        (s.isLeafNode() || !s.isEmpty()) && (n = n.updateImmediateChild(i, s));
      }
    }), n.updatePriority(Ne(e));
  }
}
e0(Ne);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a0 extends Wo {
  constructor(e) {
    super(), this.indexPath_ = e, C(!B(e) && j(e) !== ".priority", "Can't create PathIndex with empty path or .priority key");
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
    const i = Ne(e), r = $.EMPTY_NODE.updateChild(this.indexPath_, i);
    return new z(n, r);
  }
  maxPost() {
    const e = $.EMPTY_NODE.updateChild(this.indexPath_, bs);
    return new z(di, e);
  }
  toString() {
    return Yr(this.indexPath_, 0).join("/");
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
class l0 extends Wo {
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
    return z.MIN;
  }
  maxPost() {
    return z.MAX;
  }
  makePost(e, n) {
    const i = Ne(e);
    return new z(n, i);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".value";
  }
}
const c0 = new l0();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kf(t) {
  return { type: "value", snapshotNode: t };
}
function Gi(t, e) {
  return { type: "child_added", snapshotNode: e, childName: t };
}
function Qr(t, e) {
  return { type: "child_removed", snapshotNode: e, childName: t };
}
function Jr(t, e, n) {
  return {
    type: "child_changed",
    snapshotNode: e,
    childName: t,
    oldSnap: n
  };
}
function u0(t, e) {
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
class tc {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, n, i, r, s, o) {
    C(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const a = e.getImmediateChild(n);
    return a.getChild(r).equals(i.getChild(r)) && a.isEmpty() === i.isEmpty() || (o != null && (i.isEmpty() ? e.hasChild(n) ? o.trackChildChange(Qr(n, a)) : C(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(Gi(n, i)) : o.trackChildChange(Jr(n, i, a))), e.isLeafNode() && i.isEmpty()) ? e : e.updateImmediateChild(n, i).withIndex(this.index_);
  }
  updateFullNode(e, n, i) {
    return i != null && (e.isLeafNode() || e.forEachChild(be, (r, s) => {
      n.hasChild(r) || i.trackChildChange(Qr(r, s));
    }), n.isLeafNode() || n.forEachChild(be, (r, s) => {
      if (e.hasChild(r)) {
        const o = e.getImmediateChild(r);
        o.equals(s) || i.trackChildChange(Jr(r, s, o));
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
class Xr {
  constructor(e) {
    this.indexedFilter_ = new tc(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = Xr.getStartPost_(e), this.endPost_ = Xr.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
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
    return this.matches(new z(n, i)) || (i = $.EMPTY_NODE), this.indexedFilter_.updateChild(e, n, i, r, s, o);
  }
  updateFullNode(e, n, i) {
    n.isLeafNode() && (n = $.EMPTY_NODE);
    let r = n.withIndex(this.index_);
    r = r.updatePriority($.EMPTY_NODE);
    const s = this;
    return n.forEachChild(be, (o, a) => {
      s.matches(new z(o, a)) || (r = r.updateImmediateChild(o, $.EMPTY_NODE));
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
class h0 {
  constructor(e) {
    this.withinDirectionalStart = (n) => this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n), this.withinDirectionalEnd = (n) => this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n), this.withinStartPost = (n) => {
      const i = this.index_.compare(this.rangedFilter_.getStartPost(), n);
      return this.startIsInclusive_ ? i <= 0 : i < 0;
    }, this.withinEndPost = (n) => {
      const i = this.index_.compare(n, this.rangedFilter_.getEndPost());
      return this.endIsInclusive_ ? i <= 0 : i < 0;
    }, this.rangedFilter_ = new Xr(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  updateChild(e, n, i, r, s, o) {
    return this.rangedFilter_.matches(new z(n, i)) || (i = $.EMPTY_NODE), e.getImmediateChild(n).equals(i) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, i, r, s, o) : this.fullLimitUpdateChild_(e, n, i, s, o);
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
      const d = this.index_.getCompare();
      o = (u, f) => d(f, u);
    } else
      o = this.index_.getCompare();
    const a = e;
    C(a.numChildren() === this.limit_, "");
    const l = new z(n, i), c = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_), h = this.rangedFilter_.matches(l);
    if (a.hasChild(n)) {
      const d = a.getImmediateChild(n);
      let u = r.getChildAfterChild(this.index_, c, this.reverse_);
      for (; u != null && (u.name === n || a.hasChild(u.name)); )
        u = r.getChildAfterChild(this.index_, u, this.reverse_);
      const f = u == null ? 1 : o(u, l);
      if (h && !i.isEmpty() && f >= 0)
        return s?.trackChildChange(Jr(n, i, d)), a.updateImmediateChild(n, i);
      {
        s?.trackChildChange(Qr(n, d));
        const g = a.updateImmediateChild(n, $.EMPTY_NODE);
        return u != null && this.rangedFilter_.matches(u) ? (s?.trackChildChange(Gi(u.name, u.node)), g.updateImmediateChild(u.name, u.node)) : g;
      }
    } else return i.isEmpty() ? e : h && o(c, l) >= 0 ? (s != null && (s.trackChildChange(Qr(c.name, c.node)), s.trackChildChange(Gi(n, i))), a.updateImmediateChild(n, i).updateImmediateChild(c.name, $.EMPTY_NODE)) : e;
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
class nc {
  constructor() {
    this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = be;
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
    return C(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : di;
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
    return this.loadsAllData() && this.index_ === be;
  }
  copy() {
    const e = new nc();
    return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
  }
}
function d0(t) {
  return t.loadsAllData() ? new tc(t.getIndex()) : t.hasLimit() ? new h0(t) : new Xr(t);
}
function Bu(t) {
  const e = {};
  if (t.isDefault())
    return e;
  let n;
  if (t.index_ === be ? n = "$priority" : t.index_ === c0 ? n = "$value" : t.index_ === Ui ? n = "$key" : (C(t.index_ instanceof a0, "Unrecognized index type!"), n = t.index_.toString()), e.orderBy = xe(n), t.startSet_) {
    const i = t.startAfterSet_ ? "startAfter" : "startAt";
    e[i] = xe(t.indexStartValue_), t.startNameSet_ && (e[i] += "," + xe(t.indexStartName_));
  }
  if (t.endSet_) {
    const i = t.endBeforeSet_ ? "endBefore" : "endAt";
    e[i] = xe(t.indexEndValue_), t.endNameSet_ && (e[i] += "," + xe(t.indexEndName_));
  }
  return t.limitSet_ && (t.isViewFromLeft() ? e.limitToFirst = t.limit_ : e.limitToLast = t.limit_), e;
}
function qu(t) {
  const e = {};
  if (t.startSet_ && (e.sp = t.indexStartValue_, t.startNameSet_ && (e.sn = t.indexStartName_), e.sin = !t.startAfterSet_), t.endSet_ && (e.ep = t.indexEndValue_, t.endNameSet_ && (e.en = t.indexEndName_), e.ein = !t.endBeforeSet_), t.limitSet_) {
    e.l = t.limit_;
    let n = t.viewFrom_;
    n === "" && (t.isViewFromLeft() ? n = "l" : n = "r"), e.vf = n;
  }
  return t.index_ !== be && (e.i = t.index_.toString()), e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co extends Uf {
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
    super(), this.repoInfo_ = e, this.onDataUpdate_ = n, this.authTokenProvider_ = i, this.appCheckTokenProvider_ = r, this.log_ = ys("p:rest:"), this.listens_ = {};
  }
  /** @inheritDoc */
  listen(e, n, i, r) {
    const s = e._path.toString();
    this.log_("Listen called for " + s + " " + e._queryIdentifier);
    const o = co.getListenId_(e, i), a = {};
    this.listens_[o] = a;
    const l = Bu(e._queryParams);
    this.restRequest_(s + ".json", l, (c, h) => {
      let d = h;
      if (c === 404 && (d = null, c = null), c === null && this.onDataUpdate_(
        s,
        d,
        /*isMerge=*/
        !1,
        i
      ), zi(this.listens_, o) === a) {
        let u;
        c ? c === 401 ? u = "permission_denied" : u = "rest_error:" + c : u = "ok", r(u, null);
      }
    });
  }
  /** @inheritDoc */
  unlisten(e, n) {
    const i = co.getListenId_(e, n);
    delete this.listens_[i];
  }
  get(e) {
    const n = Bu(e._queryParams), i = e._path.toString(), r = new ds();
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
      const o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + yi(n);
      this.log_("Sending REST request for " + o);
      const a = new XMLHttpRequest();
      a.onreadystatechange = () => {
        if (i && a.readyState === 4) {
          this.log_("REST Response for " + o + " received. status:", a.status, "response:", a.responseText);
          let l = null;
          if (a.status >= 200 && a.status < 300) {
            try {
              l = Br(a.responseText);
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
class f0 {
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
function uo() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function Yf(t, e, n) {
  if (B(e))
    t.value = n, t.children.clear();
  else if (t.value !== null)
    t.value = t.value.updateChild(e, n);
  else {
    const i = j(e);
    t.children.has(i) || t.children.set(i, uo());
    const r = t.children.get(i);
    e = de(e), Yf(r, e, n);
  }
}
function Xa(t, e, n) {
  t.value !== null ? n(e, t.value) : p0(t, (i, r) => {
    const s = new le(e.toString() + "/" + i);
    Xa(r, s, n);
  });
}
function p0(t, e) {
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
class _0 {
  constructor(e) {
    this.collection_ = e, this.last_ = null;
  }
  get() {
    const e = this.collection_.get(), n = { ...e };
    return this.last_ && Ve(this.last_, (i, r) => {
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
const Gu = 10 * 1e3, m0 = 30 * 1e3, g0 = 300 * 1e3;
class v0 {
  constructor(e, n) {
    this.server_ = n, this.statsToReport_ = {}, this.statsListener_ = new _0(e);
    const i = Gu + (m0 - Gu) * Math.random();
    $r(this.reportStats_.bind(this), Math.floor(i));
  }
  reportStats_() {
    const e = this.statsListener_.get(), n = {};
    let i = !1;
    Ve(e, (r, s) => {
      s > 0 && Kt(this.statsToReport_, r) && (n[r] = s, i = !0);
    }), i && this.server_.reportStats(n), $r(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * g0));
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
var Ot;
(function(t) {
  t[t.OVERWRITE = 0] = "OVERWRITE", t[t.MERGE = 1] = "MERGE", t[t.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", t[t.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
})(Ot || (Ot = {}));
function ic() {
  return {
    fromUser: !0,
    fromServer: !1,
    queryId: null,
    tagged: !1
  };
}
function rc() {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: null,
    tagged: !1
  };
}
function sc(t) {
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
class ho {
  /**
   * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
   */
  constructor(e, n, i) {
    this.path = e, this.affectedTree = n, this.revert = i, this.type = Ot.ACK_USER_WRITE, this.source = ic();
  }
  operationForChild(e) {
    if (B(this.path)) {
      if (this.affectedTree.value != null)
        return C(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
      {
        const n = this.affectedTree.subtree(new le(e));
        return new ho(Q(), n, this.revert);
      }
    } else return C(j(this.path) === e, "operationForChild called for unrelated child."), new ho(de(this.path), this.affectedTree, this.revert);
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
class Zr {
  constructor(e, n) {
    this.source = e, this.path = n, this.type = Ot.LISTEN_COMPLETE;
  }
  operationForChild(e) {
    return B(this.path) ? new Zr(this.source, Q()) : new Zr(this.source, de(this.path));
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
class fi {
  constructor(e, n, i) {
    this.source = e, this.path = n, this.snap = i, this.type = Ot.OVERWRITE;
  }
  operationForChild(e) {
    return B(this.path) ? new fi(this.source, Q(), this.snap.getImmediateChild(e)) : new fi(this.source, de(this.path), this.snap);
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
    this.source = e, this.path = n, this.children = i, this.type = Ot.MERGE;
  }
  operationForChild(e) {
    if (B(this.path)) {
      const n = this.children.subtree(new le(e));
      return n.isEmpty() ? null : n.value ? new fi(this.source, Q(), n.value) : new Ki(this.source, Q(), n);
    } else
      return C(j(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new Ki(this.source, de(this.path), this.children);
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
class Un {
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
class y0 {
  constructor(e) {
    this.query_ = e, this.index_ = this.query_._queryParams.getIndex();
  }
}
function b0(t, e, n, i) {
  const r = [], s = [];
  return e.forEach((o) => {
    o.type === "child_changed" && t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) && s.push(u0(o.childName, o.snapshotNode));
  }), br(t, r, "child_removed", e, i, n), br(t, r, "child_added", e, i, n), br(t, r, "child_moved", s, i, n), br(t, r, "child_changed", e, i, n), br(t, r, "value", e, i, n), r;
}
function br(t, e, n, i, r, s) {
  const o = i.filter((a) => a.type === n);
  o.sort((a, l) => E0(t, a, l)), o.forEach((a) => {
    const l = w0(t, a, s);
    r.forEach((c) => {
      c.respondsTo(a.type) && e.push(c.createEvent(l, t.query_));
    });
  });
}
function w0(t, e, n) {
  return e.type === "value" || e.type === "child_removed" || (e.prevName = n.getPredecessorChildName(e.childName, e.snapshotNode, t.index_)), e;
}
function E0(t, e, n) {
  if (e.childName == null || n.childName == null)
    throw tr("Should only compare child_ events.");
  const i = new z(e.childName, e.snapshotNode), r = new z(n.childName, n.snapshotNode);
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
function Vo(t, e) {
  return { eventCache: t, serverCache: e };
}
function Fr(t, e, n, i) {
  return Vo(new Un(e, n, i), t.serverCache);
}
function Qf(t, e, n, i) {
  return Vo(t.eventCache, new Un(e, n, i));
}
function fo(t) {
  return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null;
}
function pi(t) {
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
let Ea;
const I0 = () => (Ea || (Ea = new ct(aw)), Ea);
class he {
  static fromObject(e) {
    let n = new he(null);
    return Ve(e, (i, r) => {
      n = n.set(new le(i), r);
    }), n;
  }
  constructor(e, n = I0()) {
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
      return { path: Q(), value: this.value };
    if (B(e))
      return null;
    {
      const i = j(e), r = this.children.get(i);
      if (r !== null) {
        const s = r.findRootMostMatchingPathAndValue(de(e), n);
        return s != null ? { path: ye(new le(i), s.path), value: s.value } : null;
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
      const n = j(e), i = this.children.get(n);
      return i !== null ? i.subtree(de(e)) : new he(null);
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
      return new he(n, this.children);
    {
      const i = j(e), s = (this.children.get(i) || new he(null)).set(de(e), n), o = this.children.insert(i, s);
      return new he(this.value, o);
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
      return this.children.isEmpty() ? new he(null) : new he(null, this.children);
    {
      const n = j(e), i = this.children.get(n);
      if (i) {
        const r = i.remove(de(e));
        let s;
        return r.isEmpty() ? s = this.children.remove(n) : s = this.children.insert(n, r), this.value === null && s.isEmpty() ? new he(null) : new he(this.value, s);
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
      const n = j(e), i = this.children.get(n);
      return i ? i.get(de(e)) : null;
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
      const i = j(e), s = (this.children.get(i) || new he(null)).setTree(de(e), n);
      let o;
      return s.isEmpty() ? o = this.children.remove(i) : o = this.children.insert(i, s), new he(this.value, o);
    }
  }
  /**
   * Performs a depth first fold on this tree. Transforms a tree into a single
   * value, given a function that operates on the path to a node, an optional
   * current value, and a map of child names to folded subtrees
   */
  fold(e) {
    return this.fold_(Q(), e);
  }
  /**
   * Recursive helper for public-facing fold() method
   */
  fold_(e, n) {
    const i = {};
    return this.children.inorderTraversal((r, s) => {
      i[r] = s.fold_(ye(e, r), n);
    }), n(e, this.value, i);
  }
  /**
   * Find the first matching value on the given path. Return the result of applying f to it.
   */
  findOnPath(e, n) {
    return this.findOnPath_(e, Q(), n);
  }
  findOnPath_(e, n, i) {
    const r = this.value ? i(n, this.value) : !1;
    if (r)
      return r;
    if (B(e))
      return null;
    {
      const s = j(e), o = this.children.get(s);
      return o ? o.findOnPath_(de(e), ye(n, s), i) : null;
    }
  }
  foreachOnPath(e, n) {
    return this.foreachOnPath_(e, Q(), n);
  }
  foreachOnPath_(e, n, i) {
    if (B(e))
      return this;
    {
      this.value && i(n, this.value);
      const r = j(e), s = this.children.get(r);
      return s ? s.foreachOnPath_(de(e), ye(n, r), i) : new he(null);
    }
  }
  /**
   * Calls the given function for each node in the tree that has a value.
   *
   * @param f - A function to be called with the path from the root of the tree to
   * a node, and the value at that node. Called in depth-first order.
   */
  foreach(e) {
    this.foreach_(Q(), e);
  }
  foreach_(e, n) {
    this.children.inorderTraversal((i, r) => {
      r.foreach_(ye(e, i), n);
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
class Dt {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new Dt(new he(null));
  }
}
function Ur(t, e, n) {
  if (B(e))
    return new Dt(new he(n));
  {
    const i = t.writeTree_.findRootMostValueAndPath(e);
    if (i != null) {
      const r = i.path;
      let s = i.value;
      const o = Xe(r, e);
      return s = s.updateChild(o, n), new Dt(t.writeTree_.set(r, s));
    } else {
      const r = new he(n), s = t.writeTree_.setTree(e, r);
      return new Dt(s);
    }
  }
}
function Za(t, e, n) {
  let i = t;
  return Ve(n, (r, s) => {
    i = Ur(i, ye(e, r), s);
  }), i;
}
function Ku(t, e) {
  if (B(e))
    return Dt.empty();
  {
    const n = t.writeTree_.setTree(e, new he(null));
    return new Dt(n);
  }
}
function el(t, e) {
  return Ei(t, e) != null;
}
function Ei(t, e) {
  const n = t.writeTree_.findRootMostValueAndPath(e);
  return n != null ? t.writeTree_.get(n.path).getChild(Xe(n.path, e)) : null;
}
function Yu(t) {
  const e = [], n = t.writeTree_.value;
  return n != null ? n.isLeafNode() || n.forEachChild(be, (i, r) => {
    e.push(new z(i, r));
  }) : t.writeTree_.children.inorderTraversal((i, r) => {
    r.value != null && e.push(new z(i, r.value));
  }), e;
}
function Ln(t, e) {
  if (B(e))
    return t;
  {
    const n = Ei(t, e);
    return n != null ? new Dt(new he(n)) : new Dt(t.writeTree_.subtree(e));
  }
}
function tl(t) {
  return t.writeTree_.isEmpty();
}
function Yi(t, e) {
  return Jf(Q(), t.writeTree_, e);
}
function Jf(t, e, n) {
  if (e.value != null)
    return n.updateChild(t, e.value);
  {
    let i = null;
    return e.children.inorderTraversal((r, s) => {
      r === ".priority" ? (C(s.value !== null, "Priority writes must always be leaf nodes"), i = s.value) : n = Jf(ye(t, r), s, n);
    }), !n.getChild(t).isEmpty() && i !== null && (n = n.updateChild(ye(t, ".priority"), i)), n;
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
  return tp(e, t);
}
function C0(t, e, n, i, r) {
  C(i > t.lastWriteId, "Stacking an older write on top of newer ones"), r === void 0 && (r = !0), t.allWrites.push({
    path: e,
    snap: n,
    writeId: i,
    visible: r
  }), r && (t.visibleWrites = Ur(t.visibleWrites, e, n)), t.lastWriteId = i;
}
function T0(t, e, n, i) {
  C(i > t.lastWriteId, "Stacking an older merge on top of newer ones"), t.allWrites.push({
    path: e,
    children: n,
    writeId: i,
    visible: !0
  }), t.visibleWrites = Za(t.visibleWrites, e, n), t.lastWriteId = i;
}
function S0(t, e) {
  for (let n = 0; n < t.allWrites.length; n++) {
    const i = t.allWrites[n];
    if (i.writeId === e)
      return i;
  }
  return null;
}
function k0(t, e) {
  const n = t.allWrites.findIndex((a) => a.writeId === e);
  C(n >= 0, "removeWrite called with nonexistent writeId.");
  const i = t.allWrites[n];
  t.allWrites.splice(n, 1);
  let r = i.visible, s = !1, o = t.allWrites.length - 1;
  for (; r && o >= 0; ) {
    const a = t.allWrites[o];
    a.visible && (o >= n && A0(a, i.path) ? r = !1 : bt(i.path, a.path) && (s = !0)), o--;
  }
  if (r) {
    if (s)
      return R0(t), !0;
    if (i.snap)
      t.visibleWrites = Ku(t.visibleWrites, i.path);
    else {
      const a = i.children;
      Ve(a, (l) => {
        t.visibleWrites = Ku(t.visibleWrites, ye(i.path, l));
      });
    }
    return !0;
  } else return !1;
}
function A0(t, e) {
  if (t.snap)
    return bt(t.path, e);
  for (const n in t.children)
    if (t.children.hasOwnProperty(n) && bt(ye(t.path, n), e))
      return !0;
  return !1;
}
function R0(t) {
  t.visibleWrites = Xf(t.allWrites, P0, Q()), t.allWrites.length > 0 ? t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId : t.lastWriteId = -1;
}
function P0(t) {
  return t.visible;
}
function Xf(t, e, n) {
  let i = Dt.empty();
  for (let r = 0; r < t.length; ++r) {
    const s = t[r];
    if (e(s)) {
      const o = s.path;
      let a;
      if (s.snap)
        bt(n, o) ? (a = Xe(n, o), i = Ur(i, a, s.snap)) : bt(o, n) && (a = Xe(o, n), i = Ur(i, Q(), s.snap.getChild(a)));
      else if (s.children) {
        if (bt(n, o))
          a = Xe(n, o), i = Za(i, a, s.children);
        else if (bt(o, n))
          if (a = Xe(o, n), B(a))
            i = Za(i, Q(), s.children);
          else {
            const l = zi(s.children, j(a));
            if (l) {
              const c = l.getChild(de(a));
              i = Ur(i, Q(), c);
            }
          }
      } else
        throw tr("WriteRecord should have .snap or .children");
    }
  }
  return i;
}
function Zf(t, e, n, i, r) {
  if (!i && !r) {
    const s = Ei(t.visibleWrites, e);
    if (s != null)
      return s;
    {
      const o = Ln(t.visibleWrites, e);
      if (tl(o))
        return n;
      if (n == null && !el(o, Q()))
        return null;
      {
        const a = n || $.EMPTY_NODE;
        return Yi(o, a);
      }
    }
  } else {
    const s = Ln(t.visibleWrites, e);
    if (!r && tl(s))
      return n;
    if (!r && n == null && !el(s, Q()))
      return null;
    {
      const o = function(c) {
        return (c.visible || r) && (!i || !~i.indexOf(c.writeId)) && (bt(c.path, e) || bt(e, c.path));
      }, a = Xf(t.allWrites, o, e), l = n || $.EMPTY_NODE;
      return Yi(a, l);
    }
  }
}
function N0(t, e, n) {
  let i = $.EMPTY_NODE;
  const r = Ei(t.visibleWrites, e);
  if (r)
    return r.isLeafNode() || r.forEachChild(be, (s, o) => {
      i = i.updateImmediateChild(s, o);
    }), i;
  if (n) {
    const s = Ln(t.visibleWrites, e);
    return n.forEachChild(be, (o, a) => {
      const l = Yi(Ln(s, new le(o)), a);
      i = i.updateImmediateChild(o, l);
    }), Yu(s).forEach((o) => {
      i = i.updateImmediateChild(o.name, o.node);
    }), i;
  } else {
    const s = Ln(t.visibleWrites, e);
    return Yu(s).forEach((o) => {
      i = i.updateImmediateChild(o.name, o.node);
    }), i;
  }
}
function x0(t, e, n, i, r) {
  C(i || r, "Either existingEventSnap or existingServerSnap must exist");
  const s = ye(e, n);
  if (el(t.visibleWrites, s))
    return null;
  {
    const o = Ln(t.visibleWrites, s);
    return tl(o) ? r.getChild(n) : Yi(o, r.getChild(n));
  }
}
function O0(t, e, n, i) {
  const r = ye(e, n), s = Ei(t.visibleWrites, r);
  if (s != null)
    return s;
  if (i.isCompleteForChild(n)) {
    const o = Ln(t.visibleWrites, r);
    return Yi(o, i.getNode().getImmediateChild(n));
  } else
    return null;
}
function L0(t, e) {
  return Ei(t.visibleWrites, e);
}
function D0(t, e, n, i, r, s, o) {
  let a;
  const l = Ln(t.visibleWrites, e), c = Ei(l, Q());
  if (c != null)
    a = c;
  else if (n != null)
    a = Yi(l, n);
  else
    return [];
  if (a = a.withIndex(o), !a.isEmpty() && !a.isLeafNode()) {
    const h = [], d = o.getCompare(), u = s ? a.getReverseIteratorFrom(i, o) : a.getIteratorFrom(i, o);
    let f = u.getNext();
    for (; f && h.length < r; )
      d(f, i) !== 0 && h.push(f), f = u.getNext();
    return h;
  } else
    return [];
}
function M0() {
  return {
    visibleWrites: Dt.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function po(t, e, n, i) {
  return Zf(t.writeTree, t.treePath, e, n, i);
}
function oc(t, e) {
  return N0(t.writeTree, t.treePath, e);
}
function Qu(t, e, n, i) {
  return x0(t.writeTree, t.treePath, e, n, i);
}
function _o(t, e) {
  return L0(t.writeTree, ye(t.treePath, e));
}
function $0(t, e, n, i, r, s) {
  return D0(t.writeTree, t.treePath, e, n, i, r, s);
}
function ac(t, e, n) {
  return O0(t.writeTree, t.treePath, e, n);
}
function ep(t, e) {
  return tp(ye(t.treePath, e), t.writeTree);
}
function tp(t, e) {
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
class F0 {
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
        this.changeMap.set(i, Jr(i, e.snapshotNode, r.snapshotNode));
      else if (n === "child_removed" && s === "child_added")
        this.changeMap.delete(i);
      else if (n === "child_removed" && s === "child_changed")
        this.changeMap.set(i, Qr(i, r.oldSnap));
      else if (n === "child_changed" && s === "child_added")
        this.changeMap.set(i, Gi(i, e.snapshotNode));
      else if (n === "child_changed" && s === "child_changed")
        this.changeMap.set(i, Jr(i, e.snapshotNode, r.oldSnap));
      else
        throw tr("Illegal combination of changes: " + e + " occurred after " + r);
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
class U0 {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, n, i) {
    return null;
  }
}
const np = new U0();
class lc {
  constructor(e, n, i = null) {
    this.writes_ = e, this.viewCache_ = n, this.optCompleteServerCache_ = i;
  }
  getCompleteChild(e) {
    const n = this.viewCache_.eventCache;
    if (n.isCompleteForChild(e))
      return n.getNode().getImmediateChild(e);
    {
      const i = this.optCompleteServerCache_ != null ? new Un(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
      return ac(this.writes_, e, i);
    }
  }
  getChildAfterChild(e, n, i) {
    const r = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : pi(this.viewCache_), s = $0(this.writes_, r, n, 1, i, e);
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
function H0(t) {
  return { filter: t };
}
function W0(t, e) {
  C(e.eventCache.getNode().isIndexed(t.filter.getIndex()), "Event snap not indexed"), C(e.serverCache.getNode().isIndexed(t.filter.getIndex()), "Server snap not indexed");
}
function V0(t, e, n, i, r) {
  const s = new F0();
  let o, a;
  if (n.type === Ot.OVERWRITE) {
    const c = n;
    c.source.fromUser ? o = nl(t, e, c.path, c.snap, i, r, s) : (C(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered() && !B(c.path), o = mo(t, e, c.path, c.snap, i, r, a, s));
  } else if (n.type === Ot.MERGE) {
    const c = n;
    c.source.fromUser ? o = z0(t, e, c.path, c.children, i, r, s) : (C(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered(), o = il(t, e, c.path, c.children, i, r, a, s));
  } else if (n.type === Ot.ACK_USER_WRITE) {
    const c = n;
    c.revert ? o = G0(t, e, c.path, i, r, s) : o = B0(t, e, c.path, c.affectedTree, i, r, s);
  } else if (n.type === Ot.LISTEN_COMPLETE)
    o = q0(t, e, n.path, i, s);
  else
    throw tr("Unknown operation type: " + n.type);
  const l = s.getChanges();
  return j0(e, o, l), { viewCache: o, changes: l };
}
function j0(t, e, n) {
  const i = e.eventCache;
  if (i.isFullyInitialized()) {
    const r = i.getNode().isLeafNode() || i.getNode().isEmpty(), s = fo(t);
    (n.length > 0 || !t.eventCache.isFullyInitialized() || r && !i.getNode().equals(s) || !i.getNode().getPriority().equals(s.getPriority())) && n.push(Kf(fo(e)));
  }
}
function ip(t, e, n, i, r, s) {
  const o = e.eventCache;
  if (_o(i, n) != null)
    return e;
  {
    let a, l;
    if (B(n))
      if (C(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), e.serverCache.isFiltered()) {
        const c = pi(e), h = c instanceof $ ? c : $.EMPTY_NODE, d = oc(i, h);
        a = t.filter.updateFullNode(e.eventCache.getNode(), d, s);
      } else {
        const c = po(i, pi(e));
        a = t.filter.updateFullNode(e.eventCache.getNode(), c, s);
      }
    else {
      const c = j(n);
      if (c === ".priority") {
        C(Fn(n) === 1, "Can't have a priority with additional path components");
        const h = o.getNode();
        l = e.serverCache.getNode();
        const d = Qu(i, n, h, l);
        d != null ? a = t.filter.updatePriority(h, d) : a = o.getNode();
      } else {
        const h = de(n);
        let d;
        if (o.isCompleteForChild(c)) {
          l = e.serverCache.getNode();
          const u = Qu(i, n, o.getNode(), l);
          u != null ? d = o.getNode().getImmediateChild(c).updateChild(h, u) : d = o.getNode().getImmediateChild(c);
        } else
          d = ac(i, c, e.serverCache);
        d != null ? a = t.filter.updateChild(o.getNode(), c, d, h, r, s) : a = o.getNode();
      }
    }
    return Fr(e, a, o.isFullyInitialized() || B(n), t.filter.filtersNodes());
  }
}
function mo(t, e, n, i, r, s, o, a) {
  const l = e.serverCache;
  let c;
  const h = o ? t.filter : t.filter.getIndexedFilter();
  if (B(n))
    c = h.updateFullNode(l.getNode(), i, null);
  else if (h.filtersNodes() && !l.isFiltered()) {
    const f = l.getNode().updateChild(n, i);
    c = h.updateFullNode(l.getNode(), f, null);
  } else {
    const f = j(n);
    if (!l.isCompleteForPath(n) && Fn(n) > 1)
      return e;
    const p = de(n), b = l.getNode().getImmediateChild(f).updateChild(p, i);
    f === ".priority" ? c = h.updatePriority(l.getNode(), b) : c = h.updateChild(l.getNode(), f, b, p, np, null);
  }
  const d = Qf(e, c, l.isFullyInitialized() || B(n), h.filtersNodes()), u = new lc(r, d, s);
  return ip(t, d, n, r, u, a);
}
function nl(t, e, n, i, r, s, o) {
  const a = e.eventCache;
  let l, c;
  const h = new lc(r, e, s);
  if (B(n))
    c = t.filter.updateFullNode(e.eventCache.getNode(), i, o), l = Fr(e, c, !0, t.filter.filtersNodes());
  else {
    const d = j(n);
    if (d === ".priority")
      c = t.filter.updatePriority(e.eventCache.getNode(), i), l = Fr(e, c, a.isFullyInitialized(), a.isFiltered());
    else {
      const u = de(n), f = a.getNode().getImmediateChild(d);
      let p;
      if (B(u))
        p = i;
      else {
        const g = h.getCompleteChild(d);
        g != null ? Jl(u) === ".priority" && g.getChild(Wf(u)).isEmpty() ? p = g : p = g.updateChild(u, i) : p = $.EMPTY_NODE;
      }
      if (f.equals(p))
        l = e;
      else {
        const g = t.filter.updateChild(a.getNode(), d, p, u, h, o);
        l = Fr(e, g, a.isFullyInitialized(), t.filter.filtersNodes());
      }
    }
  }
  return l;
}
function Ju(t, e) {
  return t.eventCache.isCompleteForChild(e);
}
function z0(t, e, n, i, r, s, o) {
  let a = e;
  return i.foreach((l, c) => {
    const h = ye(n, l);
    Ju(e, j(h)) && (a = nl(t, a, h, c, r, s, o));
  }), i.foreach((l, c) => {
    const h = ye(n, l);
    Ju(e, j(h)) || (a = nl(t, a, h, c, r, s, o));
  }), a;
}
function Xu(t, e, n) {
  return n.foreach((i, r) => {
    e = e.updateChild(i, r);
  }), e;
}
function il(t, e, n, i, r, s, o, a) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let l = e, c;
  B(n) ? c = i : c = new he(null).setTree(n, i);
  const h = e.serverCache.getNode();
  return c.children.inorderTraversal((d, u) => {
    if (h.hasChild(d)) {
      const f = e.serverCache.getNode().getImmediateChild(d), p = Xu(t, f, u);
      l = mo(t, l, new le(d), p, r, s, o, a);
    }
  }), c.children.inorderTraversal((d, u) => {
    const f = !e.serverCache.isCompleteForChild(d) && u.value === null;
    if (!h.hasChild(d) && !f) {
      const p = e.serverCache.getNode().getImmediateChild(d), g = Xu(t, p, u);
      l = mo(t, l, new le(d), g, r, s, o, a);
    }
  }), l;
}
function B0(t, e, n, i, r, s, o) {
  if (_o(r, n) != null)
    return e;
  const a = e.serverCache.isFiltered(), l = e.serverCache;
  if (i.value != null) {
    if (B(n) && l.isFullyInitialized() || l.isCompleteForPath(n))
      return mo(t, e, n, l.getNode().getChild(n), r, s, a, o);
    if (B(n)) {
      let c = new he(null);
      return l.getNode().forEachChild(Ui, (h, d) => {
        c = c.set(new le(h), d);
      }), il(t, e, n, c, r, s, a, o);
    } else
      return e;
  } else {
    let c = new he(null);
    return i.foreach((h, d) => {
      const u = ye(n, h);
      l.isCompleteForPath(u) && (c = c.set(h, l.getNode().getChild(u)));
    }), il(t, e, n, c, r, s, a, o);
  }
}
function q0(t, e, n, i, r) {
  const s = e.serverCache, o = Qf(e, s.getNode(), s.isFullyInitialized() || B(n), s.isFiltered());
  return ip(t, o, n, i, np, r);
}
function G0(t, e, n, i, r, s) {
  let o;
  if (_o(i, n) != null)
    return e;
  {
    const a = new lc(i, e, r), l = e.eventCache.getNode();
    let c;
    if (B(n) || j(n) === ".priority") {
      let h;
      if (e.serverCache.isFullyInitialized())
        h = po(i, pi(e));
      else {
        const d = e.serverCache.getNode();
        C(d instanceof $, "serverChildren would be complete if leaf node"), h = oc(i, d);
      }
      h = h, c = t.filter.updateFullNode(l, h, s);
    } else {
      const h = j(n);
      let d = ac(i, h, e.serverCache);
      d == null && e.serverCache.isCompleteForChild(h) && (d = l.getImmediateChild(h)), d != null ? c = t.filter.updateChild(l, h, d, de(n), a, s) : e.eventCache.getNode().hasChild(h) ? c = t.filter.updateChild(l, h, $.EMPTY_NODE, de(n), a, s) : c = l, c.isEmpty() && e.serverCache.isFullyInitialized() && (o = po(i, pi(e)), o.isLeafNode() && (c = t.filter.updateFullNode(c, o, s)));
    }
    return o = e.serverCache.isFullyInitialized() || _o(i, Q()) != null, Fr(e, c, o, t.filter.filtersNodes());
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
class K0 {
  constructor(e, n) {
    this.query_ = e, this.eventRegistrations_ = [];
    const i = this.query_._queryParams, r = new tc(i.getIndex()), s = d0(i);
    this.processor_ = H0(s);
    const o = n.serverCache, a = n.eventCache, l = r.updateFullNode($.EMPTY_NODE, o.getNode(), null), c = s.updateFullNode($.EMPTY_NODE, a.getNode(), null), h = new Un(l, o.isFullyInitialized(), r.filtersNodes()), d = new Un(c, a.isFullyInitialized(), s.filtersNodes());
    this.viewCache_ = Vo(d, h), this.eventGenerator_ = new y0(this.query_);
  }
  get query() {
    return this.query_;
  }
}
function Y0(t) {
  return t.viewCache_.serverCache.getNode();
}
function Q0(t) {
  return fo(t.viewCache_);
}
function J0(t, e) {
  const n = pi(t.viewCache_);
  return n && (t.query._queryParams.loadsAllData() || !B(e) && !n.getImmediateChild(j(e)).isEmpty()) ? n.getChild(e) : null;
}
function Zu(t) {
  return t.eventRegistrations_.length === 0;
}
function X0(t, e) {
  t.eventRegistrations_.push(e);
}
function eh(t, e, n) {
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
function th(t, e, n, i) {
  e.type === Ot.MERGE && e.source.queryId !== null && (C(pi(t.viewCache_), "We should always have a full cache before handling merges"), C(fo(t.viewCache_), "Missing event cache, even though we have a server cache"));
  const r = t.viewCache_, s = V0(t.processor_, r, e, n, i);
  return W0(t.processor_, s.viewCache), C(s.viewCache.serverCache.isFullyInitialized() || !r.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), t.viewCache_ = s.viewCache, rp(t, s.changes, s.viewCache.eventCache.getNode(), null);
}
function Z0(t, e) {
  const n = t.viewCache_.eventCache, i = [];
  return n.getNode().isLeafNode() || n.getNode().forEachChild(be, (s, o) => {
    i.push(Gi(s, o));
  }), n.isFullyInitialized() && i.push(Kf(n.getNode())), rp(t, i, n.getNode(), e);
}
function rp(t, e, n, i) {
  const r = i ? [i] : t.eventRegistrations_;
  return b0(t.eventGenerator_, e, n, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let go;
class sp {
  constructor() {
    this.views = /* @__PURE__ */ new Map();
  }
}
function e1(t) {
  C(!go, "__referenceConstructor has already been defined"), go = t;
}
function t1() {
  return C(go, "Reference.ts has not been loaded"), go;
}
function n1(t) {
  return t.views.size === 0;
}
function cc(t, e, n, i) {
  const r = e.source.queryId;
  if (r !== null) {
    const s = t.views.get(r);
    return C(s != null, "SyncTree gave us an op for an invalid query."), th(s, e, n, i);
  } else {
    let s = [];
    for (const o of t.views.values())
      s = s.concat(th(o, e, n, i));
    return s;
  }
}
function op(t, e, n, i, r) {
  const s = e._queryIdentifier, o = t.views.get(s);
  if (!o) {
    let a = po(n, r ? i : null), l = !1;
    a ? l = !0 : i instanceof $ ? (a = oc(n, i), l = !1) : (a = $.EMPTY_NODE, l = !1);
    const c = Vo(new Un(a, l, !1), new Un(i, r, !1));
    return new K0(e, c);
  }
  return o;
}
function i1(t, e, n, i, r, s) {
  const o = op(t, e, i, r, s);
  return t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o), X0(o, n), Z0(o, n);
}
function r1(t, e, n, i) {
  const r = e._queryIdentifier, s = [];
  let o = [];
  const a = Hn(t);
  if (r === "default")
    for (const [l, c] of t.views.entries())
      o = o.concat(eh(c, n, i)), Zu(c) && (t.views.delete(l), c.query._queryParams.loadsAllData() || s.push(c.query));
  else {
    const l = t.views.get(r);
    l && (o = o.concat(eh(l, n, i)), Zu(l) && (t.views.delete(r), l.query._queryParams.loadsAllData() || s.push(l.query)));
  }
  return a && !Hn(t) && s.push(new (t1())(e._repo, e._path)), { removed: s, events: o };
}
function ap(t) {
  const e = [];
  for (const n of t.views.values())
    n.query._queryParams.loadsAllData() || e.push(n);
  return e;
}
function Dn(t, e) {
  let n = null;
  for (const i of t.views.values())
    n = n || J0(i, e);
  return n;
}
function lp(t, e) {
  if (e._queryParams.loadsAllData())
    return zo(t);
  {
    const i = e._queryIdentifier;
    return t.views.get(i);
  }
}
function cp(t, e) {
  return lp(t, e) != null;
}
function Hn(t) {
  return zo(t) != null;
}
function zo(t) {
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
let vo;
function s1(t) {
  C(!vo, "__referenceConstructor has already been defined"), vo = t;
}
function o1() {
  return C(vo, "Reference.ts has not been loaded"), vo;
}
let a1 = 1;
class nh {
  /**
   * @param listenProvider_ - Used by SyncTree to start / stop listening
   *   to server data.
   */
  constructor(e) {
    this.listenProvider_ = e, this.syncPointTree_ = new he(null), this.pendingWriteTree_ = M0(), this.tagToQueryMap = /* @__PURE__ */ new Map(), this.queryToTagMap = /* @__PURE__ */ new Map();
  }
}
function up(t, e, n, i, r) {
  return C0(t.pendingWriteTree_, e, n, i, r), r ? rr(t, new fi(ic(), e, n)) : [];
}
function l1(t, e, n, i) {
  T0(t.pendingWriteTree_, e, n, i);
  const r = he.fromObject(n);
  return rr(t, new Ki(ic(), e, r));
}
function An(t, e, n = !1) {
  const i = S0(t.pendingWriteTree_, e);
  if (k0(t.pendingWriteTree_, e)) {
    let s = new he(null);
    return i.snap != null ? s = s.set(Q(), !0) : Ve(i.children, (o) => {
      s = s.set(new le(o), !0);
    }), rr(t, new ho(i.path, s, n));
  } else
    return [];
}
function ws(t, e, n) {
  return rr(t, new fi(rc(), e, n));
}
function c1(t, e, n) {
  const i = he.fromObject(n);
  return rr(t, new Ki(rc(), e, i));
}
function u1(t, e) {
  return rr(t, new Zr(rc(), e));
}
function h1(t, e, n) {
  const i = hc(t, n);
  if (i) {
    const r = dc(i), s = r.path, o = r.queryId, a = Xe(s, e), l = new Zr(sc(o), a);
    return fc(t, s, l);
  } else
    return [];
}
function yo(t, e, n, i, r = !1) {
  const s = e._path, o = t.syncPointTree_.get(s);
  let a = [];
  if (o && (e._queryIdentifier === "default" || cp(o, e))) {
    const l = r1(o, e, n, i);
    n1(o) && (t.syncPointTree_ = t.syncPointTree_.remove(s));
    const c = l.removed;
    if (a = l.events, !r) {
      const h = c.findIndex((u) => u._queryParams.loadsAllData()) !== -1, d = t.syncPointTree_.findOnPath(s, (u, f) => Hn(f));
      if (h && !d) {
        const u = t.syncPointTree_.subtree(s);
        if (!u.isEmpty()) {
          const f = p1(u);
          for (let p = 0; p < f.length; ++p) {
            const g = f[p], b = g.query, T = pp(t, g);
            t.listenProvider_.startListening(Hr(b), es(t, b), T.hashFn, T.onComplete);
          }
        }
      }
      !d && c.length > 0 && !i && (h ? t.listenProvider_.stopListening(Hr(e), null) : c.forEach((u) => {
        const f = t.queryToTagMap.get(Bo(u));
        t.listenProvider_.stopListening(Hr(u), f);
      }));
    }
    _1(t, c);
  }
  return a;
}
function hp(t, e, n, i) {
  const r = hc(t, i);
  if (r != null) {
    const s = dc(r), o = s.path, a = s.queryId, l = Xe(o, e), c = new fi(sc(a), l, n);
    return fc(t, o, c);
  } else
    return [];
}
function d1(t, e, n, i) {
  const r = hc(t, i);
  if (r) {
    const s = dc(r), o = s.path, a = s.queryId, l = Xe(o, e), c = he.fromObject(n), h = new Ki(sc(a), l, c);
    return fc(t, o, h);
  } else
    return [];
}
function rl(t, e, n, i = !1) {
  const r = e._path;
  let s = null, o = !1;
  t.syncPointTree_.foreachOnPath(r, (u, f) => {
    const p = Xe(u, r);
    s = s || Dn(f, p), o = o || Hn(f);
  });
  let a = t.syncPointTree_.get(r);
  a ? (o = o || Hn(a), s = s || Dn(a, Q())) : (a = new sp(), t.syncPointTree_ = t.syncPointTree_.set(r, a));
  let l;
  s != null ? l = !0 : (l = !1, s = $.EMPTY_NODE, t.syncPointTree_.subtree(r).foreachChild((f, p) => {
    const g = Dn(p, Q());
    g && (s = s.updateImmediateChild(f, g));
  }));
  const c = cp(a, e);
  if (!c && !e._queryParams.loadsAllData()) {
    const u = Bo(e);
    C(!t.queryToTagMap.has(u), "View does not exist, but we have a tag");
    const f = m1();
    t.queryToTagMap.set(u, f), t.tagToQueryMap.set(f, u);
  }
  const h = jo(t.pendingWriteTree_, r);
  let d = i1(a, e, n, h, s, l);
  if (!c && !o && !i) {
    const u = lp(a, e);
    d = d.concat(g1(t, e, u));
  }
  return d;
}
function uc(t, e, n) {
  const r = t.pendingWriteTree_, s = t.syncPointTree_.findOnPath(e, (o, a) => {
    const l = Xe(o, e), c = Dn(a, l);
    if (c)
      return c;
  });
  return Zf(r, e, s, n, !0);
}
function f1(t, e) {
  const n = e._path;
  let i = null;
  t.syncPointTree_.foreachOnPath(n, (c, h) => {
    const d = Xe(c, n);
    i = i || Dn(h, d);
  });
  let r = t.syncPointTree_.get(n);
  r ? i = i || Dn(r, Q()) : (r = new sp(), t.syncPointTree_ = t.syncPointTree_.set(n, r));
  const s = i != null, o = s ? new Un(i, !0, !1) : null, a = jo(t.pendingWriteTree_, e._path), l = op(r, e, a, s ? o.getNode() : $.EMPTY_NODE, s);
  return Q0(l);
}
function rr(t, e) {
  return dp(
    e,
    t.syncPointTree_,
    /*serverCache=*/
    null,
    jo(t.pendingWriteTree_, Q())
  );
}
function dp(t, e, n, i) {
  if (B(t.path))
    return fp(t, e, n, i);
  {
    const r = e.get(Q());
    n == null && r != null && (n = Dn(r, Q()));
    let s = [];
    const o = j(t.path), a = t.operationForChild(o), l = e.children.get(o);
    if (l && a) {
      const c = n ? n.getImmediateChild(o) : null, h = ep(i, o);
      s = s.concat(dp(a, l, c, h));
    }
    return r && (s = s.concat(cc(r, t, i, n))), s;
  }
}
function fp(t, e, n, i) {
  const r = e.get(Q());
  n == null && r != null && (n = Dn(r, Q()));
  let s = [];
  return e.children.inorderTraversal((o, a) => {
    const l = n ? n.getImmediateChild(o) : null, c = ep(i, o), h = t.operationForChild(o);
    h && (s = s.concat(fp(h, a, l, c)));
  }), r && (s = s.concat(cc(r, t, i, n))), s;
}
function pp(t, e) {
  const n = e.query, i = es(t, n);
  return {
    hashFn: () => (Y0(e) || $.EMPTY_NODE).hash(),
    onComplete: (r) => {
      if (r === "ok")
        return i ? h1(t, n._path, i) : u1(t, n._path);
      {
        const s = uw(r, n);
        return yo(
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
function es(t, e) {
  const n = Bo(e);
  return t.queryToTagMap.get(n);
}
function Bo(t) {
  return t._path.toString() + "$" + t._queryIdentifier;
}
function hc(t, e) {
  return t.tagToQueryMap.get(e);
}
function dc(t) {
  const e = t.indexOf("$");
  return C(e !== -1 && e < t.length - 1, "Bad queryKey."), {
    queryId: t.substr(e + 1),
    path: new le(t.substr(0, e))
  };
}
function fc(t, e, n) {
  const i = t.syncPointTree_.get(e);
  C(i, "Missing sync point for query tag that we're tracking");
  const r = jo(t.pendingWriteTree_, e);
  return cc(i, n, r, null);
}
function p1(t) {
  return t.fold((e, n, i) => {
    if (n && Hn(n))
      return [zo(n)];
    {
      let r = [];
      return n && (r = ap(n)), Ve(i, (s, o) => {
        r = r.concat(o);
      }), r;
    }
  });
}
function Hr(t) {
  return t._queryParams.loadsAllData() && !t._queryParams.isDefault() ? new (o1())(t._repo, t._path) : t;
}
function _1(t, e) {
  for (let n = 0; n < e.length; ++n) {
    const i = e[n];
    if (!i._queryParams.loadsAllData()) {
      const r = Bo(i), s = t.queryToTagMap.get(r);
      t.queryToTagMap.delete(r), t.tagToQueryMap.delete(s);
    }
  }
}
function m1() {
  return a1++;
}
function g1(t, e, n) {
  const i = e._path, r = es(t, e), s = pp(t, n), o = t.listenProvider_.startListening(Hr(e), r, s.hashFn, s.onComplete), a = t.syncPointTree_.subtree(i);
  if (r)
    C(!Hn(a.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const l = a.fold((c, h, d) => {
      if (!B(c) && h && Hn(h))
        return [zo(h).query];
      {
        let u = [];
        return h && (u = u.concat(ap(h).map((f) => f.query))), Ve(d, (f, p) => {
          u = u.concat(p);
        }), u;
      }
    });
    for (let c = 0; c < l.length; ++c) {
      const h = l[c];
      t.listenProvider_.stopListening(Hr(h), es(t, h));
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
class pc {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const n = this.node_.getImmediateChild(e);
    return new pc(n);
  }
  node() {
    return this.node_;
  }
}
class _c {
  constructor(e, n) {
    this.syncTree_ = e, this.path_ = n;
  }
  getImmediateChild(e) {
    const n = ye(this.path_, e);
    return new _c(this.syncTree_, n);
  }
  node() {
    return uc(this.syncTree_, this.path_);
  }
}
const v1 = function(t) {
  return t = t || {}, t.timestamp = t.timestamp || (/* @__PURE__ */ new Date()).getTime(), t;
}, ih = function(t, e, n) {
  if (!t || typeof t != "object")
    return t;
  if (C(".sv" in t, "Unexpected leaf node or priority contents"), typeof t[".sv"] == "string")
    return y1(t[".sv"], e, n);
  if (typeof t[".sv"] == "object")
    return b1(t[".sv"], e);
  C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
}, y1 = function(t, e, n) {
  switch (t) {
    case "timestamp":
      return n.timestamp;
    default:
      C(!1, "Unexpected server value: " + t);
  }
}, b1 = function(t, e, n) {
  t.hasOwnProperty("increment") || C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
  const i = t.increment;
  typeof i != "number" && C(!1, "Unexpected increment value: " + i);
  const r = e.node();
  if (C(r !== null && typeof r < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"), !r.isLeafNode())
    return i;
  const o = r.getValue();
  return typeof o != "number" ? i : o + i;
}, _p = function(t, e, n, i) {
  return mc(e, new _c(n, t), i);
}, mp = function(t, e, n) {
  return mc(t, new pc(e), n);
};
function mc(t, e, n) {
  const i = t.getPriority().val(), r = ih(i, e.getImmediateChild(".priority"), n);
  let s;
  if (t.isLeafNode()) {
    const o = t, a = ih(o.getValue(), e, n);
    return a !== o.getValue() || r !== o.getPriority().val() ? new De(a, Ne(r)) : t;
  } else {
    const o = t;
    return s = o, r !== o.getPriority().val() && (s = s.updatePriority(new De(r))), o.forEachChild(be, (a, l) => {
      const c = mc(l, e.getImmediateChild(a), n);
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
class gc {
  /**
   * @param name - Optional name of the node.
   * @param parent - Optional parent node.
   * @param node - Optional node to wrap.
   */
  constructor(e = "", n = null, i = { children: {}, childCount: 0 }) {
    this.name = e, this.parent = n, this.node = i;
  }
}
function vc(t, e) {
  let n = e instanceof le ? e : new le(e), i = t, r = j(n);
  for (; r !== null; ) {
    const s = zi(i.node.children, r) || {
      children: {},
      childCount: 0
    };
    i = new gc(r, i, s), n = de(n), r = j(n);
  }
  return i;
}
function sr(t) {
  return t.node.value;
}
function gp(t, e) {
  t.node.value = e, sl(t);
}
function vp(t) {
  return t.node.childCount > 0;
}
function w1(t) {
  return sr(t) === void 0 && !vp(t);
}
function qo(t, e) {
  Ve(t.node.children, (n, i) => {
    e(new gc(n, t, i));
  });
}
function yp(t, e, n, i) {
  n && e(t), qo(t, (r) => {
    yp(r, e, !0);
  });
}
function E1(t, e, n) {
  let i = t.parent;
  for (; i !== null; ) {
    if (e(i))
      return !0;
    i = i.parent;
  }
  return !1;
}
function Es(t) {
  return new le(t.parent === null ? t.name : Es(t.parent) + "/" + t.name);
}
function sl(t) {
  t.parent !== null && I1(t.parent, t.name, t);
}
function I1(t, e, n) {
  const i = w1(n), r = Kt(t.node.children, e);
  i && r ? (delete t.node.children[e], t.node.childCount--, sl(t)) : !i && !r && (t.node.children[e] = n.node, t.node.childCount++, sl(t));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C1 = /[\[\].#$\/\u0000-\u001F\u007F]/, T1 = /[\[\].#$\u0000-\u001F\u007F]/, Ia = 10 * 1024 * 1024, yc = function(t) {
  return typeof t == "string" && t.length !== 0 && !C1.test(t);
}, bp = function(t) {
  return typeof t == "string" && t.length !== 0 && !T1.test(t);
}, S1 = function(t) {
  return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), bp(t);
}, k1 = function(t) {
  return t === null || typeof t == "string" || typeof t == "number" && !ql(t) || t && typeof t == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Kt(t, ".sv");
}, wp = function(t, e, n, i) {
  i && e === void 0 || Go(Do(t, "value"), e, n);
}, Go = function(t, e, n) {
  const i = n instanceof le ? new zw(n, t) : n;
  if (e === void 0)
    throw new Error(t + "contains undefined " + Jn(i));
  if (typeof e == "function")
    throw new Error(t + "contains a function " + Jn(i) + " with contents = " + e.toString());
  if (ql(e))
    throw new Error(t + "contains " + e.toString() + " " + Jn(i));
  if (typeof e == "string" && e.length > Ia / 3 && Mo(e) > Ia)
    throw new Error(t + "contains a string greater than " + Ia + " utf8 bytes " + Jn(i) + " ('" + e.substring(0, 50) + "...')");
  if (e && typeof e == "object") {
    let r = !1, s = !1;
    if (Ve(e, (o, a) => {
      if (o === ".value")
        r = !0;
      else if (o !== ".priority" && o !== ".sv" && (s = !0, !yc(o)))
        throw new Error(t + " contains an invalid key (" + o + ") " + Jn(i) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      Bw(i, o), Go(t, a, i), qw(i);
    }), r && s)
      throw new Error(t + ' contains ".value" child ' + Jn(i) + " in addition to actual children.");
  }
}, A1 = function(t, e) {
  let n, i;
  for (n = 0; n < e.length; n++) {
    i = e[n];
    const s = Yr(i);
    for (let o = 0; o < s.length; o++)
      if (!(s[o] === ".priority" && o === s.length - 1)) {
        if (!yc(s[o]))
          throw new Error(t + "contains an invalid key (" + s[o] + ") in path " + i.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      }
  }
  e.sort(jw);
  let r = null;
  for (n = 0; n < e.length; n++) {
    if (i = e[n], r !== null && bt(r, i))
      throw new Error(t + "contains a path " + r.toString() + " that is ancestor of another path " + i.toString());
    r = i;
  }
}, R1 = function(t, e, n, i) {
  const r = Do(t, "values");
  if (!(e && typeof e == "object") || Array.isArray(e))
    throw new Error(r + " must be an object containing the children to replace.");
  const s = [];
  Ve(e, (o, a) => {
    const l = new le(o);
    if (Go(r, a, ye(n, l)), Jl(l) === ".priority" && !k1(a))
      throw new Error(r + "contains an invalid value for '" + l.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
    s.push(l);
  }), A1(r, s);
}, Ep = function(t, e, n, i) {
  if (!bp(n))
    throw new Error(Do(t, e) + 'was an invalid path = "' + n + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
}, P1 = function(t, e, n, i) {
  n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Ep(t, e, n);
}, bc = function(t, e) {
  if (j(e) === ".info")
    throw new Error(t + " failed = Can't modify data under /.info/");
}, N1 = function(t, e) {
  const n = e.path.toString();
  if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !yc(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || n.length !== 0 && !S1(n))
    throw new Error(Do(t, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
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
class x1 {
  constructor() {
    this.eventLists_ = [], this.recursionDepth_ = 0;
  }
}
function Ko(t, e) {
  let n = null;
  for (let i = 0; i < e.length; i++) {
    const r = e[i], s = r.getPath();
    n !== null && !Xl(s, n.path) && (t.eventLists_.push(n), n = null), n === null && (n = { events: [], path: s }), n.events.push(r);
  }
  n && t.eventLists_.push(n);
}
function Ip(t, e, n) {
  Ko(t, n), Cp(t, (i) => Xl(i, e));
}
function St(t, e, n) {
  Ko(t, n), Cp(t, (i) => bt(i, e) || bt(e, i));
}
function Cp(t, e) {
  t.recursionDepth_++;
  let n = !0;
  for (let i = 0; i < t.eventLists_.length; i++) {
    const r = t.eventLists_[i];
    if (r) {
      const s = r.path;
      e(s) ? (O1(t.eventLists_[i]), t.eventLists_[i] = null) : n = !1;
    }
  }
  n && (t.eventLists_ = []), t.recursionDepth_--;
}
function O1(t) {
  for (let e = 0; e < t.events.length; e++) {
    const n = t.events[e];
    if (n !== null) {
      t.events[e] = null;
      const i = n.getEventRunner();
      Mr && He("event: " + n.toString()), ir(i);
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
const L1 = "repo_interrupt", D1 = 25;
class M1 {
  constructor(e, n, i, r) {
    this.repoInfo_ = e, this.forceRestClient_ = n, this.authTokenProvider_ = i, this.appCheckProvider_ = r, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new x1(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = uo(), this.transactionQueueTree_ = new gc(), this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString();
  }
  /**
   * @returns The URL corresponding to the root of this Firebase.
   */
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
}
function $1(t, e, n) {
  if (t.stats_ = Yl(t.repoInfo_), t.forceRestClient_ || pw())
    t.server_ = new co(t.repoInfo_, (i, r, s, o) => {
      rh(t, i, r, s, o);
    }, t.authTokenProvider_, t.appCheckProvider_), setTimeout(() => sh(
      t,
      /* connectStatus= */
      !0
    ), 0);
  else {
    if (typeof n < "u" && n !== null) {
      if (typeof n != "object")
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      try {
        xe(n);
      } catch (i) {
        throw new Error("Invalid authOverride provided: " + i);
      }
    }
    t.persistentConnection_ = new un(t.repoInfo_, e, (i, r, s, o) => {
      rh(t, i, r, s, o);
    }, (i) => {
      sh(t, i);
    }, (i) => {
      F1(t, i);
    }, t.authTokenProvider_, t.appCheckProvider_, n), t.server_ = t.persistentConnection_;
  }
  t.authTokenProvider_.addTokenChangeListener((i) => {
    t.server_.refreshAuthToken(i);
  }), t.appCheckProvider_.addTokenChangeListener((i) => {
    t.server_.refreshAppCheckToken(i.token);
  }), t.statsReporter_ = yw(t.repoInfo_, () => new v0(t.stats_, t.server_)), t.infoData_ = new f0(), t.infoSyncTree_ = new nh({
    startListening: (i, r, s, o) => {
      let a = [];
      const l = t.infoData_.getNode(i._path);
      return l.isEmpty() || (a = ws(t.infoSyncTree_, i._path, l), setTimeout(() => {
        o("ok");
      }, 0)), a;
    },
    stopListening: () => {
    }
  }), wc(t, "connected", !1), t.serverSyncTree_ = new nh({
    startListening: (i, r, s, o) => (t.server_.listen(i, s, r, (a, l) => {
      const c = o(a, l);
      St(t.eventQueue_, i._path, c);
    }), []),
    stopListening: (i, r) => {
      t.server_.unlisten(i, r);
    }
  });
}
function Tp(t) {
  const n = t.infoData_.getNode(new le(".info/serverTimeOffset")).val() || 0;
  return (/* @__PURE__ */ new Date()).getTime() + n;
}
function Yo(t) {
  return v1({
    timestamp: Tp(t)
  });
}
function rh(t, e, n, i, r) {
  t.dataUpdateCount++;
  const s = new le(e);
  n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
  let o = [];
  if (r)
    if (i) {
      const l = Xs(n, (c) => Ne(c));
      o = d1(t.serverSyncTree_, s, l, r);
    } else {
      const l = Ne(n);
      o = hp(t.serverSyncTree_, s, l, r);
    }
  else if (i) {
    const l = Xs(n, (c) => Ne(c));
    o = c1(t.serverSyncTree_, s, l);
  } else {
    const l = Ne(n);
    o = ws(t.serverSyncTree_, s, l);
  }
  let a = s;
  o.length > 0 && (a = Qi(t, s)), St(t.eventQueue_, a, o);
}
function sh(t, e) {
  wc(t, "connected", e), e === !1 && V1(t);
}
function F1(t, e) {
  Ve(e, (n, i) => {
    wc(t, n, i);
  });
}
function wc(t, e, n) {
  const i = new le("/.info/" + e), r = Ne(n);
  t.infoData_.updateSnapshot(i, r);
  const s = ws(t.infoSyncTree_, i, r);
  St(t.eventQueue_, i, s);
}
function Ec(t) {
  return t.nextWriteId_++;
}
function U1(t, e, n) {
  const i = f1(t.serverSyncTree_, e);
  return i != null ? Promise.resolve(i) : t.server_.get(e).then((r) => {
    const s = Ne(r).withIndex(e._queryParams.getIndex());
    rl(t.serverSyncTree_, e, n, !0);
    let o;
    if (e._queryParams.loadsAllData())
      o = ws(t.serverSyncTree_, e._path, s);
    else {
      const a = es(t.serverSyncTree_, e);
      o = hp(t.serverSyncTree_, e._path, s, a);
    }
    return St(t.eventQueue_, e._path, o), yo(t.serverSyncTree_, e, n, null, !0), s;
  }, (r) => (Is(t, "get for query " + xe(e) + " failed: " + r), Promise.reject(new Error(r))));
}
function H1(t, e, n, i, r) {
  Is(t, "set", {
    path: e.toString(),
    value: n,
    priority: i
  });
  const s = Yo(t), o = Ne(n, i), a = uc(t.serverSyncTree_, e), l = mp(o, a, s), c = Ec(t), h = up(t.serverSyncTree_, e, l, c, !0);
  Ko(t.eventQueue_, h), t.server_.put(e.toString(), o.val(
    /*export=*/
    !0
  ), (u, f) => {
    const p = u === "ok";
    p || Ze("set at " + e + " failed: " + u);
    const g = An(t.serverSyncTree_, c, !p);
    St(t.eventQueue_, e, g), al(t, r, u, f);
  });
  const d = Cc(t, e);
  Qi(t, d), St(t.eventQueue_, d, []);
}
function W1(t, e, n, i) {
  Is(t, "update", { path: e.toString(), value: n });
  let r = !0;
  const s = Yo(t), o = {};
  if (Ve(n, (a, l) => {
    r = !1, o[a] = _p(ye(e, a), Ne(l), t.serverSyncTree_, s);
  }), r)
    He("update() called with empty data.  Don't do anything."), al(t, i, "ok", void 0);
  else {
    const a = Ec(t), l = l1(t.serverSyncTree_, e, o, a);
    Ko(t.eventQueue_, l), t.server_.merge(e.toString(), n, (c, h) => {
      const d = c === "ok";
      d || Ze("update at " + e + " failed: " + c);
      const u = An(t.serverSyncTree_, a, !d), f = u.length > 0 ? Qi(t, e) : e;
      St(t.eventQueue_, f, u), al(t, i, c, h);
    }), Ve(n, (c) => {
      const h = Cc(t, ye(e, c));
      Qi(t, h);
    }), St(t.eventQueue_, e, []);
  }
}
function V1(t) {
  Is(t, "onDisconnectEvents");
  const e = Yo(t), n = uo();
  Xa(t.onDisconnect_, Q(), (r, s) => {
    const o = _p(r, s, t.serverSyncTree_, e);
    Yf(n, r, o);
  });
  let i = [];
  Xa(n, Q(), (r, s) => {
    i = i.concat(ws(t.serverSyncTree_, r, s));
    const o = Cc(t, r);
    Qi(t, o);
  }), t.onDisconnect_ = uo(), St(t.eventQueue_, Q(), i);
}
function j1(t, e, n) {
  let i;
  j(e._path) === ".info" ? i = rl(t.infoSyncTree_, e, n) : i = rl(t.serverSyncTree_, e, n), Ip(t.eventQueue_, e._path, i);
}
function ol(t, e, n) {
  let i;
  j(e._path) === ".info" ? i = yo(t.infoSyncTree_, e, n) : i = yo(t.serverSyncTree_, e, n), Ip(t.eventQueue_, e._path, i);
}
function z1(t) {
  t.persistentConnection_ && t.persistentConnection_.interrupt(L1);
}
function Is(t, ...e) {
  let n = "";
  t.persistentConnection_ && (n = t.persistentConnection_.id + ":"), He(n, ...e);
}
function al(t, e, n, i) {
  e && ir(() => {
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
function Sp(t, e, n) {
  return uc(t.serverSyncTree_, e, n) || $.EMPTY_NODE;
}
function Ic(t, e = t.transactionQueueTree_) {
  if (e || Qo(t, e), sr(e)) {
    const n = Ap(t, e);
    C(n.length > 0, "Sending zero length transaction queue"), n.every(
      (r) => r.status === 0
      /* TransactionStatus.RUN */
    ) && B1(t, Es(e), n);
  } else vp(e) && qo(e, (n) => {
    Ic(t, n);
  });
}
function B1(t, e, n) {
  const i = n.map((c) => c.currentWriteId), r = Sp(t, e, i);
  let s = r;
  const o = r.hash();
  for (let c = 0; c < n.length; c++) {
    const h = n[c];
    C(h.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."), h.status = 1, h.retryCount++;
    const d = Xe(e, h.path);
    s = s.updateChild(d, h.currentOutputSnapshotRaw);
  }
  const a = s.val(!0), l = e;
  t.server_.put(l.toString(), a, (c) => {
    Is(t, "transaction put response", {
      path: l.toString(),
      status: c
    });
    let h = [];
    if (c === "ok") {
      const d = [];
      for (let u = 0; u < n.length; u++)
        n[u].status = 2, h = h.concat(An(t.serverSyncTree_, n[u].currentWriteId)), n[u].onComplete && d.push(() => n[u].onComplete(null, !0, n[u].currentOutputSnapshotResolved)), n[u].unwatcher();
      Qo(t, vc(t.transactionQueueTree_, e)), Ic(t, t.transactionQueueTree_), St(t.eventQueue_, e, h);
      for (let u = 0; u < d.length; u++)
        ir(d[u]);
    } else {
      if (c === "datastale")
        for (let d = 0; d < n.length; d++)
          n[d].status === 3 ? n[d].status = 4 : n[d].status = 0;
      else {
        Ze("transaction at " + l.toString() + " failed: " + c);
        for (let d = 0; d < n.length; d++)
          n[d].status = 4, n[d].abortReason = c;
      }
      Qi(t, e);
    }
  }, o);
}
function Qi(t, e) {
  const n = kp(t, e), i = Es(n), r = Ap(t, n);
  return q1(t, r, i), i;
}
function q1(t, e, n) {
  if (e.length === 0)
    return;
  const i = [];
  let r = [];
  const o = e.filter((a) => a.status === 0).map((a) => a.currentWriteId);
  for (let a = 0; a < e.length; a++) {
    const l = e[a], c = Xe(n, l.path);
    let h = !1, d;
    if (C(c !== null, "rerunTransactionsUnderNode_: relativePath should not be null."), l.status === 4)
      h = !0, d = l.abortReason, r = r.concat(An(t.serverSyncTree_, l.currentWriteId, !0));
    else if (l.status === 0)
      if (l.retryCount >= D1)
        h = !0, d = "maxretry", r = r.concat(An(t.serverSyncTree_, l.currentWriteId, !0));
      else {
        const u = Sp(t, l.path, o);
        l.currentInputSnapshot = u;
        const f = e[a].update(u.val());
        if (f !== void 0) {
          Go("transaction failed: Data returned ", f, l.path);
          let p = Ne(f);
          typeof f == "object" && f != null && Kt(f, ".priority") || (p = p.updatePriority(u.getPriority()));
          const b = l.currentWriteId, T = Yo(t), S = mp(p, u, T);
          l.currentOutputSnapshotRaw = p, l.currentOutputSnapshotResolved = S, l.currentWriteId = Ec(t), o.splice(o.indexOf(b), 1), r = r.concat(up(t.serverSyncTree_, l.path, S, l.currentWriteId, l.applyLocally)), r = r.concat(An(t.serverSyncTree_, b, !0));
        } else
          h = !0, d = "nodata", r = r.concat(An(t.serverSyncTree_, l.currentWriteId, !0));
      }
    St(t.eventQueue_, n, r), r = [], h && (e[a].status = 2, (function(u) {
      setTimeout(u, Math.floor(0));
    })(e[a].unwatcher), e[a].onComplete && (d === "nodata" ? i.push(() => e[a].onComplete(null, !1, e[a].currentInputSnapshot)) : i.push(() => e[a].onComplete(new Error(d), !1, null))));
  }
  Qo(t, t.transactionQueueTree_);
  for (let a = 0; a < i.length; a++)
    ir(i[a]);
  Ic(t, t.transactionQueueTree_);
}
function kp(t, e) {
  let n, i = t.transactionQueueTree_;
  for (n = j(e); n !== null && sr(i) === void 0; )
    i = vc(i, n), e = de(e), n = j(e);
  return i;
}
function Ap(t, e) {
  const n = [];
  return Rp(t, e, n), n.sort((i, r) => i.order - r.order), n;
}
function Rp(t, e, n) {
  const i = sr(e);
  if (i)
    for (let r = 0; r < i.length; r++)
      n.push(i[r]);
  qo(e, (r) => {
    Rp(t, r, n);
  });
}
function Qo(t, e) {
  const n = sr(e);
  if (n) {
    let i = 0;
    for (let r = 0; r < n.length; r++)
      n[r].status !== 2 && (n[i] = n[r], i++);
    n.length = i, gp(e, n.length > 0 ? n : void 0);
  }
  qo(e, (i) => {
    Qo(t, i);
  });
}
function Cc(t, e) {
  const n = Es(kp(t, e)), i = vc(t.transactionQueueTree_, e);
  return E1(i, (r) => {
    Ca(t, r);
  }), Ca(t, i), yp(i, (r) => {
    Ca(t, r);
  }), n;
}
function Ca(t, e) {
  const n = sr(e);
  if (n) {
    const i = [];
    let r = [], s = -1;
    for (let o = 0; o < n.length; o++)
      n[o].status === 3 || (n[o].status === 1 ? (C(s === o - 1, "All SENT items should be at beginning of queue."), s = o, n[o].status = 3, n[o].abortReason = "set") : (C(n[o].status === 0, "Unexpected transaction status in abort"), n[o].unwatcher(), r = r.concat(An(t.serverSyncTree_, n[o].currentWriteId, !0)), n[o].onComplete && i.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
    s === -1 ? gp(e, void 0) : n.length = s + 1, St(t.eventQueue_, Es(e), r);
    for (let o = 0; o < i.length; o++)
      ir(i[o]);
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
function G1(t) {
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
function K1(t) {
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
const oh = function(t, e) {
  const n = Y1(t), i = n.namespace;
  n.domain === "firebase.com" && fn(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), (!i || i === "undefined") && n.domain !== "localhost" && fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || sw();
  const r = n.scheme === "ws" || n.scheme === "wss";
  return {
    repoInfo: new xf(
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
    path: new le(n.pathString)
  };
}, Y1 = function(t) {
  let e = "", n = "", i = "", r = "", s = "", o = !0, a = "https", l = 443;
  if (typeof t == "string") {
    let c = t.indexOf("//");
    c >= 0 && (a = t.substring(0, c - 1), t = t.substring(c + 2));
    let h = t.indexOf("/");
    h === -1 && (h = t.length);
    let d = t.indexOf("?");
    d === -1 && (d = t.length), e = t.substring(0, Math.min(h, d)), h < d && (r = G1(t.substring(h, d)));
    const u = K1(t.substring(Math.min(t.length, d)));
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
const ah = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", Q1 = /* @__PURE__ */ (function() {
  let t = 0;
  const e = [];
  return function(n) {
    const i = n === t;
    t = n;
    let r;
    const s = new Array(8);
    for (r = 7; r >= 0; r--)
      s[r] = ah.charAt(n % 64), n = Math.floor(n / 64);
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
      o += ah.charAt(e[r]);
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
class J1 {
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
    return this.getPath().toString() + ":" + this.eventType + ":" + xe(this.snapshot.exportVal());
  }
}
class X1 {
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
class Pp {
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
class Tc {
  /**
   * @hideconstructor
   */
  constructor(e, n, i, r) {
    this._repo = e, this._path = n, this._queryParams = i, this._orderByCalled = r;
  }
  get key() {
    return B(this._path) ? null : Jl(this._path);
  }
  get ref() {
    return new vn(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = qu(this._queryParams), n = Gl(e);
    return n === "{}" ? "default" : n;
  }
  /**
   * An object representation of the query parameters used by this Query.
   */
  get _queryObject() {
    return qu(this._queryParams);
  }
  isEqual(e) {
    if (e = Le(e), !(e instanceof Tc))
      return !1;
    const n = this._repo === e._repo, i = Xl(this._path, e._path), r = this._queryIdentifier === e._queryIdentifier;
    return n && i && r;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + Vw(this._path);
  }
}
class vn extends Tc {
  /** @hideconstructor */
  constructor(e, n) {
    super(e, n, new nc(), !1);
  }
  get parent() {
    const e = Wf(this._path);
    return e === null ? null : new vn(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; )
      e = e.parent;
    return e;
  }
}
class ts {
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
    const n = new le(e), i = ns(this.ref, e);
    return new ts(this._node.getChild(n), i, be);
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
    return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (i, r) => e(new ts(r, ns(this.ref, i), be)));
  }
  /**
   * Returns true if the specified child path has (non-null) data.
   *
   * @param path - A relative path to the location of a potential child.
   * @returns `true` if data exists at the specified child path; else
   *  `false`.
   */
  hasChild(e) {
    const n = new le(e);
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
  return t = Le(t), t._checkNotDeleted("ref"), e !== void 0 ? ns(t._root, e) : t._root;
}
function ns(t, e) {
  return t = Le(t), j(t._path) === null ? P1("child", "path", e) : Ep("child", "path", e), new vn(t._repo, ye(t._path, e));
}
function Z1(t, e) {
  t = Le(t), bc("push", t._path), wp("push", e, t._path, !0);
  const n = Tp(t._repo), i = Q1(n), r = ns(t, i), s = ns(t, i);
  let o;
  return o = Promise.resolve(s), r.then = o.then.bind(o), r.catch = o.then.bind(o, void 0), r;
}
function eE(t) {
  return bc("remove", t._path), Jo(t, null);
}
function Jo(t, e) {
  t = Le(t), bc("set", t._path), wp("set", e, t._path, !1);
  const n = new ds();
  return H1(
    t._repo,
    t._path,
    e,
    /*priority=*/
    null,
    n.wrapCallback(() => {
    })
  ), n.promise;
}
function bo(t, e) {
  R1("update", e, t._path);
  const n = new ds();
  return W1(t._repo, t._path, e, n.wrapCallback(() => {
  })), n.promise;
}
function tE(t) {
  t = Le(t);
  const e = new Pp(() => {
  }), n = new Xo(e);
  return U1(t._repo, t, n).then((i) => new ts(i, new vn(t._repo, t._path), t._queryParams.getIndex()));
}
class Xo {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, n) {
    const i = n._queryParams.getIndex();
    return new J1("value", this, new ts(e.snapshotNode, new vn(n._repo, n._path), i));
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new X1(this, e, n) : null;
  }
  matches(e) {
    return e instanceof Xo ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
function nE(t, e, n, i, r) {
  let s;
  if (typeof i == "object" && (s = void 0, r = i), typeof i == "function" && (s = i), r && r.onlyOnce) {
    const l = n, c = (h, d) => {
      ol(t._repo, t, a), l(h, d);
    };
    c.userCallback = n.userCallback, c.context = n.context, n = c;
  }
  const o = new Pp(n, s || void 0), a = new Xo(o);
  return j1(t._repo, t, a), () => ol(t._repo, t, a);
}
function is(t, e, n, i) {
  return nE(t, "value", e, n, i);
}
function Sc(t, e, n) {
  ol(t._repo, t, null);
}
e1(vn);
s1(vn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const iE = "FIREBASE_DATABASE_EMULATOR_HOST", ll = {};
let rE = !1;
function sE(t, e, n, i) {
  const r = e.lastIndexOf(":"), s = e.substring(0, r), o = vi(s);
  t.repoInfo_ = new xf(
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
function oE(t, e, n, i, r) {
  let s = i || t.options.databaseURL;
  s === void 0 && (t.options.projectId || fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), He("Using default host for project ", t.options.projectId), s = `${t.options.projectId}-default-rtdb.firebaseio.com`);
  let o = oh(s, r), a = o.repoInfo, l;
  typeof process < "u" && process.env && (l = process.env[iE]), l ? (s = `http://${l}?ns=${a.namespace}`, o = oh(s, r), a = o.repoInfo) : o.repoInfo.secure;
  const c = new mw(t.name, t.options, e);
  N1("Invalid Firebase Database URL", o), B(o.path) || fn("Database URL must point to the root of a Firebase Database (not including a child path).");
  const h = lE(a, t, c, new _w(t, n));
  return new cE(h, t);
}
function aE(t, e) {
  const n = ll[e];
  (!n || n[t.key] !== t) && fn(`Database ${e}(${t.repoInfo_}) has already been deleted.`), z1(t), delete n[t.key];
}
function lE(t, e, n, i) {
  let r = ll[e.name];
  r || (r = {}, ll[e.name] = r);
  let s = r[t.toURLString()];
  return s && fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), s = new M1(t, rE, n, i), r[t.toURLString()] = s, s;
}
class cE {
  /** @hideconstructor */
  constructor(e, n) {
    this._repoInternal = e, this.app = n, this.type = "database", this._instanceStarted = !1;
  }
  get _repo() {
    return this._instanceStarted || ($1(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal;
  }
  get _root() {
    return this._rootInternal || (this._rootInternal = new vn(this._repo, Q())), this._rootInternal;
  }
  _delete() {
    return this._rootInternal !== null && (aE(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve();
  }
  _checkNotDeleted(e) {
    this._rootInternal === null && fn("Cannot call " + e + " on a deleted database.");
  }
}
function uE(t = Ml(), e) {
  const n = $o(t, "database").getImmediate({
    identifier: e
  });
  if (!n._instanceStarted) {
    const i = wd("database");
    i && hE(n, ...i);
  }
  return n;
}
function hE(t, e, n, i = {}) {
  t = Le(t), t._checkNotDeleted("useEmulator");
  const r = `${e}:${n}`, s = t._repoInternal;
  if (t._instanceStarted) {
    if (r === t._repoInternal.repoInfo_.host && li(i, s.repoInfo_.emulatorOptions))
      return;
    fn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.");
  }
  let o;
  if (s.repoInfo_.nodeAdmin)
    i.mockUserToken && fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new Ws(Ws.OWNER);
  else if (i.mockUserToken) {
    const a = typeof i.mockUserToken == "string" ? i.mockUserToken : Cd(i.mockUserToken, t.app.options.projectId);
    o = new Ws(a);
  }
  vi(e) && (Nl(e), xl("Database", !0)), sE(s, r, i, o);
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
function dE(t) {
  Zb(bi), ci(new $n(
    "database",
    (e, { instanceIdentifier: n }) => {
      const i = e.getProvider("app").getImmediate(), r = e.getProvider("auth-internal"), s = e.getProvider("app-check-internal");
      return oE(i, r, s, n);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), Vt(Ru, Pu, t), Vt(Ru, Pu, "esm2020");
}
un.prototype.simpleListen = function(t, e) {
  this.sendRequest("q", { p: t }, e);
};
un.prototype.echo = function(t, e) {
  this.sendRequest("echo", { d: t }, e);
};
dE();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Np = "firebasestorage.googleapis.com", fE = "storageBucket", pE = 120 * 1e3, _E = 600 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends gn {
  /**
   * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   * @param status_ - Corresponding HTTP Status Code
   */
  constructor(e, n, i = 0) {
    super(Ta(e), `Firebase Storage: ${n} (${Ta(e)})`), this.status_ = i, this.customData = { serverResponse: null }, this._baseMessage = this.message, Object.setPrototypeOf(this, Qt.prototype);
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
    return Ta(e) === this.code;
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
var qt;
(function(t) {
  t.UNKNOWN = "unknown", t.OBJECT_NOT_FOUND = "object-not-found", t.BUCKET_NOT_FOUND = "bucket-not-found", t.PROJECT_NOT_FOUND = "project-not-found", t.QUOTA_EXCEEDED = "quota-exceeded", t.UNAUTHENTICATED = "unauthenticated", t.UNAUTHORIZED = "unauthorized", t.UNAUTHORIZED_APP = "unauthorized-app", t.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded", t.INVALID_CHECKSUM = "invalid-checksum", t.CANCELED = "canceled", t.INVALID_EVENT_NAME = "invalid-event-name", t.INVALID_URL = "invalid-url", t.INVALID_DEFAULT_BUCKET = "invalid-default-bucket", t.NO_DEFAULT_BUCKET = "no-default-bucket", t.CANNOT_SLICE_BLOB = "cannot-slice-blob", t.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size", t.NO_DOWNLOAD_URL = "no-download-url", t.INVALID_ARGUMENT = "invalid-argument", t.INVALID_ARGUMENT_COUNT = "invalid-argument-count", t.APP_DELETED = "app-deleted", t.INVALID_ROOT_OPERATION = "invalid-root-operation", t.INVALID_FORMAT = "invalid-format", t.INTERNAL_ERROR = "internal-error", t.UNSUPPORTED_ENVIRONMENT = "unsupported-environment";
})(qt || (qt = {}));
function Ta(t) {
  return "storage/" + t;
}
function mE() {
  const t = "An unknown error occurred, please check the error payload for server response.";
  return new Qt(qt.UNKNOWN, t);
}
function gE() {
  return new Qt(qt.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function vE() {
  return new Qt(qt.CANCELED, "User canceled the upload/download.");
}
function yE(t) {
  return new Qt(qt.INVALID_URL, "Invalid URL '" + t + "'.");
}
function bE(t) {
  return new Qt(qt.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + t + "'.");
}
function lh(t) {
  return new Qt(qt.INVALID_ARGUMENT, t);
}
function xp() {
  return new Qt(qt.APP_DELETED, "The Firebase app was deleted.");
}
function wE(t) {
  return new Qt(qt.INVALID_ROOT_OPERATION, "The operation '" + t + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt {
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
      i = Lt.makeFromUrl(e, n);
    } catch {
      return new Lt(e, "");
    }
    if (i.path === "")
      return i;
    throw bE(e);
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
    const h = "v[A-Za-z0-9_]+", d = n.replace(/[.]/g, "\\."), u = "(/([^?#]*).*)?$", f = new RegExp(`^https?://${d}/${h}/b/${r}/o${u}`, "i"), p = { bucket: 1, path: 3 }, g = n === Np ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n, b = "([^?#]*)", T = new RegExp(`^https?://${g}/${r}/${b}`, "i"), k = [
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
      const P = k[A], w = P.regex.exec(e);
      if (w) {
        const I = w[P.indices.bucket];
        let E = w[P.indices.path];
        E || (E = ""), i = new Lt(I, E), P.postModify(i);
        break;
      }
    }
    if (i == null)
      throw yE(e);
    return i;
  }
}
class EE {
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
function IE(t, e, n) {
  let i = 1, r = null, s = null, o = !1, a = 0;
  function l() {
    return a === 2;
  }
  let c = !1;
  function h(...b) {
    c || (c = !0, e.apply(null, b));
  }
  function d(b) {
    r = setTimeout(() => {
      r = null, t(f, l());
    }, b);
  }
  function u() {
    s && clearTimeout(s);
  }
  function f(b, ...T) {
    if (c) {
      u();
      return;
    }
    if (b) {
      u(), h.call(null, b, ...T);
      return;
    }
    if (l() || o) {
      u(), h.call(null, b, ...T);
      return;
    }
    i < 64 && (i *= 2);
    let k;
    a === 1 ? (a = 2, k = 0) : k = (i + Math.random()) * 1e3, d(k);
  }
  let p = !1;
  function g(b) {
    p || (p = !0, u(), !c && (r !== null ? (b || (a = 2), clearTimeout(r), d(0)) : b || (a = 1)));
  }
  return d(0), s = setTimeout(() => {
    o = !0, g(!0);
  }, n), g;
}
function CE(t) {
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
function TE(t) {
  return t !== void 0;
}
function ch(t, e, n, i) {
  if (i < e)
    throw lh(`Invalid value for '${t}'. Expected ${e} or greater.`);
  if (i > n)
    throw lh(`Invalid value for '${t}'. Expected ${n} or less.`);
}
function SE(t) {
  const e = encodeURIComponent;
  let n = "?";
  for (const i in t)
    if (t.hasOwnProperty(i)) {
      const r = e(i) + "=" + e(t[i]);
      n = n + r + "&";
    }
  return n = n.slice(0, -1), n;
}
var wo;
(function(t) {
  t[t.NO_ERROR = 0] = "NO_ERROR", t[t.NETWORK_ERROR = 1] = "NETWORK_ERROR", t[t.ABORT = 2] = "ABORT";
})(wo || (wo = {}));
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
function kE(t, e) {
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
class AE {
  constructor(e, n, i, r, s, o, a, l, c, h, d, u = !0, f = !1) {
    this.url_ = e, this.method_ = n, this.headers_ = i, this.body_ = r, this.successCodes_ = s, this.additionalRetryCodes_ = o, this.callback_ = a, this.errorCallback_ = l, this.timeout_ = c, this.progressCallback_ = h, this.connectionFactory_ = d, this.retry = u, this.isUsingEmulator = f, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((p, g) => {
      this.resolve_ = p, this.reject_ = g, this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */
  start_() {
    const e = (i, r) => {
      if (r) {
        i(!1, new Ds(!1, null, !0));
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
        const a = s.getErrorCode() === wo.NO_ERROR, l = s.getStatus();
        if (!a || kE(l, this.additionalRetryCodes_) && this.retry) {
          const h = s.getErrorCode() === wo.ABORT;
          i(!1, new Ds(!1, null, h));
          return;
        }
        const c = this.successCodes_.indexOf(l) !== -1;
        i(!0, new Ds(c, s));
      });
    }, n = (i, r) => {
      const s = this.resolve_, o = this.reject_, a = r.connection;
      if (r.wasSuccessCode)
        try {
          const l = this.callback_(a, a.getResponse());
          TE(l) ? s(l) : s();
        } catch (l) {
          o(l);
        }
      else if (a !== null) {
        const l = mE();
        l.serverResponse = a.getErrorText(), this.errorCallback_ ? o(this.errorCallback_(a, l)) : o(l);
      } else if (r.canceled) {
        const l = this.appDelete_ ? xp() : vE();
        o(l);
      } else {
        const l = gE();
        o(l);
      }
    };
    this.canceled_ ? n(!1, new Ds(!1, null, !0)) : this.backoffId_ = IE(e, n, this.timeout_);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e) {
    this.canceled_ = !0, this.appDelete_ = e || !1, this.backoffId_ !== null && CE(this.backoffId_), this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class Ds {
  constructor(e, n, i) {
    this.wasSuccessCode = e, this.connection = n, this.canceled = !!i;
  }
}
function RE(t, e) {
  e !== null && e.length > 0 && (t.Authorization = "Firebase " + e);
}
function PE(t, e) {
  t["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager");
}
function NE(t, e) {
  e && (t["X-Firebase-GMPID"] = e);
}
function xE(t, e) {
  e !== null && (t["X-Firebase-AppCheck"] = e);
}
function OE(t, e, n, i, r, s, o = !0, a = !1) {
  const l = SE(t.urlParams), c = t.url + l, h = Object.assign({}, t.headers);
  return NE(h, e), RE(h, n), PE(h, s), xE(h, i), new AE(c, t.method, h, t.body, t.successCodes, t.additionalRetryCodes, t.handler, t.errorHandler, t.timeout, t.progressCallback, r, o, a);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function LE(t) {
  if (t.length === 0)
    return null;
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.slice(0, e);
}
function DE(t) {
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
class Eo {
  constructor(e, n) {
    this._service = e, n instanceof Lt ? this._location = n : this._location = Lt.makeFromUrl(n, e.host);
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
    return new Eo(e, n);
  }
  /**
   * A reference to the root of this object's bucket.
   */
  get root() {
    const e = new Lt(this._location.bucket, "");
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
    return DE(this._location.path);
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
    const e = LE(this._location.path);
    if (e === null)
      return null;
    const n = new Lt(this._location.bucket, e);
    return new Eo(this._service, n);
  }
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */
  _throwIfRoot(e) {
    if (this._location.path === "")
      throw wE(e);
  }
}
function uh(t, e) {
  const n = e?.[fE];
  return n == null ? null : Lt.makeFromBucketSpec(n, t);
}
function ME(t, e, n, i = {}) {
  t.host = `${e}:${n}`;
  const r = vi(e);
  r && (Nl(`https://${t.host}/b`), xl("Storage", !0)), t._isUsingEmulator = !0, t._protocol = r ? "https" : "http";
  const { mockUserToken: s } = i;
  s && (t._overrideAuthToken = typeof s == "string" ? s : Cd(s, t.app.options.projectId));
}
class $E {
  constructor(e, n, i, r, s, o = !1) {
    this.app = e, this._authProvider = n, this._appCheckProvider = i, this._url = r, this._firebaseVersion = s, this._isUsingEmulator = o, this._bucket = null, this._host = Np, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = pE, this._maxUploadRetryTime = _E, this._requests = /* @__PURE__ */ new Set(), r != null ? this._bucket = Lt.makeFromBucketSpec(r, this._host) : this._bucket = uh(this._host, this.app.options);
  }
  /**
   * The host string for this service, in the form of `host` or
   * `host:port`.
   */
  get host() {
    return this._host;
  }
  set host(e) {
    this._host = e, this._url != null ? this._bucket = Lt.makeFromBucketSpec(this._url, e) : this._bucket = uh(e, this.app.options);
  }
  /**
   * The maximum time to retry uploads in milliseconds.
   */
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(e) {
    ch(
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
    ch(
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
    return new Eo(this, e);
  }
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */
  _makeRequest(e, n, i, r, s = !0) {
    if (this._deleted)
      return new EE(xp());
    {
      const o = OE(e, this._appId, i, r, n, this._firebaseVersion, s, this._isUsingEmulator);
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
const hh = "@firebase/storage", dh = "0.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Op = "storage";
function FE(t = Ml(), e) {
  t = Le(t);
  const i = $o(t, Op).getImmediate({
    identifier: e
  }), r = wd("storage");
  return r && UE(i, ...r), i;
}
function UE(t, e, n, i = {}) {
  ME(t, e, n, i);
}
function HE(t, { instanceIdentifier: e }) {
  const n = t.getProvider("app").getImmediate(), i = t.getProvider("auth-internal"), r = t.getProvider("app-check-internal");
  return new $E(n, i, r, e, bi);
}
function WE() {
  ci(new $n(
    Op,
    HE,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), Vt(hh, dh, ""), Vt(hh, dh, "esm2020");
}
WE();
const Lp = {
  apiKey: "AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",
  authDomain: "withcenter-test-5.firebaseapp.com",
  databaseURL: "https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "withcenter-test-5",
  storageBucket: "withcenter-test-5.appspot.com",
  messagingSenderId: "1064417466216",
  appId: "1:1064417466216:web:039565a60d9b0b74db28dd"
};
console.log("Firebase Config:", Lp);
const kc = Rd(Lp), Wn = Jb(kc), It = uE(kc);
FE(kc);
var VE = /* @__PURE__ */ H('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'), jE = /* @__PURE__ */ H('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'), zE = /* @__PURE__ */ H('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'), BE = /* @__PURE__ */ H('<h3 class="post-title svelte-1t1odzy"> </h3>'), qE = /* @__PURE__ */ H('<p class="post-text svelte-1t1odzy"> </p>'), GE = /* @__PURE__ */ H('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'), KE = /* @__PURE__ */ H('<div class="posts svelte-1t1odzy"></div>'), YE = /* @__PURE__ */ H('<div class="post-list-container svelte-1t1odzy"><!></div>');
const QE = {
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
function JE(t, e) {
  jn(e, !0), gi(t, QE);
  let n = yt(e, "path", 7, "posts"), i = yt(e, "limit", 7, "10"), r = /* @__PURE__ */ ae(tn([])), s = /* @__PURE__ */ ae(!0), o = /* @__PURE__ */ ae(""), a = null;
  Oo(() => {
    l();
  }), _m(() => {
    c();
  });
  function l() {
    try {
      a = Et(It, n()), is(
        a,
        (S) => {
          const k = S.val();
          k ? x(r, Object.entries(k).map(([A, P]) => ({ id: A, ...P })).sort((A, P) => (P.timestamp || 0) - (A.timestamp || 0)).slice(0, parseInt(i())), !0) : x(r, [], !0), x(s, !1), x(o, "");
        },
        (S) => {
          console.error("데이터 읽기 오류:", S), x(o, "데이터를 불러오는 중 오류가 발생했습니다."), x(s, !1);
        }
      );
    } catch (S) {
      console.error("구독 설정 오류:", S), x(o, "데이터베이스 연결에 실패했습니다."), x(s, !1);
    }
  }
  function c() {
    a && Sc(a);
  }
  function h(S) {
    const k = new CustomEvent("post-click", { detail: { post: S }, bubbles: !0, composed: !0 });
    dispatchEvent(k);
  }
  function d(S, k) {
    (S.key === "Enter" || S.key === " ") && (S.preventDefault(), h(k));
  }
  function u(S) {
    if (!S) return "";
    const k = typeof S == "string" ? Number(S) : S, A = new Date(k), w = (/* @__PURE__ */ new Date()).getTime() - A.getTime(), I = Math.floor(w / 6e4), E = Math.floor(w / 36e5), D = Math.floor(w / 864e5);
    return I < 1 ? "방금 전" : I < 60 ? `${I}분 전` : E < 24 ? `${E}시간 전` : D < 7 ? `${D}일 전` : A.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
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
  }, p = YE(), g = m(p);
  {
    var b = (S) => {
      var k = VE();
      L(S, k);
    }, T = (S) => {
      var k = ke(), A = pe(k);
      {
        var P = (I) => {
          var E = jE(), D = m(E), N = m(D, !0);
          _(D), _(E), ce(() => O(N, v(o))), L(I, E);
        }, w = (I) => {
          var E = ke(), D = pe(E);
          {
            var N = (M) => {
              var G = zE();
              L(M, G);
            }, q = (M) => {
              var G = KE();
              hs(G, 21, () => v(r), (X) => X.id, (X, W) => {
                var J = GE();
                J.__click = () => h(v(W)), J.__keydown = (me) => d(me, v(W));
                var _e = m(J), ee = m(_e), te = m(ee), ue = m(te, !0);
                _(te);
                var ne = y(te, 2), Ae = m(ne, !0);
                _(ne), _(ee), _(_e);
                var Ce = y(_e, 2), Te = m(Ce);
                {
                  var V = (me) => {
                    var ze = BE(), Be = m(ze, !0);
                    _(ze), ce(() => O(Be, v(W).title)), L(me, ze);
                  };
                  Ie(Te, (me) => {
                    v(W).title && me(V);
                  });
                }
                var ie = y(Te, 2);
                {
                  var fe = (me) => {
                    var ze = qE(), Be = m(ze, !0);
                    _(ze), ce(() => O(Be, v(W).content)), L(me, ze);
                  };
                  Ie(ie, (me) => {
                    v(W).content && me(fe);
                  });
                }
                _(Ce);
                var Qe = y(Ce, 2), Re = m(Qe), Z = m(Re);
                _(Re);
                var Pe = y(Re, 2), tt = m(Pe);
                _(Pe), _(Qe), _(J), ce(
                  (me) => {
                    Ee(J, "aria-label", `게시물: ${(v(W).title || v(W).content || "제목 없음") ?? ""}`), O(ue, v(W).author || "익명"), O(Ae, me), O(Z, `👍 ${(v(W).likes || 0) ?? ""}`), O(tt, `💬 ${(v(W).comments?.length || 0) ?? ""}`);
                  },
                  [() => u(v(W).timestamp)]
                ), L(X, J);
              }), _(G), L(M, G);
            };
            Ie(
              D,
              (M) => {
                v(r).length === 0 ? M(N) : M(q, !1);
              },
              !0
            );
          }
          L(I, E);
        };
        Ie(
          A,
          (I) => {
            v(o) ? I(P) : I(w, !1);
          },
          !0
        );
      }
      L(S, k);
    };
    Ie(g, (S) => {
      v(s) ? S(b) : S(T, !1);
    });
  }
  return _(p), L(t, p), zn(f);
}
us(["click", "keydown"]);
customElements.define("post-list", ge(JE, { path: {}, limit: {} }, [], [], !0));
N_();
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
const XE = {
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
var ZE = /* @__PURE__ */ im("<svg><!><!></svg>");
function je(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), i = $e(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  jn(e, !1);
  let r = yt(e, "name", 12, void 0), s = yt(e, "color", 12, "currentColor"), o = yt(e, "size", 12, 24), a = yt(e, "strokeWidth", 12, 2), l = yt(e, "absoluteStrokeWidth", 12, !1), c = yt(e, "iconNode", 28, () => []);
  const h = (...g) => g.filter((b, T, S) => !!b && S.indexOf(b) === T).join(" ");
  var d = {
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
  pd();
  var u = ZE();
  qc(
    u,
    (g, b) => ({
      ...XE,
      ...i,
      width: o(),
      height: o(),
      stroke: s(),
      "stroke-width": g,
      class: b
    }),
    [
      () => (Ai(l()), Ai(a()), Ai(o()), Bt(() => l() ? Number(a()) * 24 / Number(o()) : a())),
      () => (Ai(r()), Ai(n), Bt(() => h("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", n.class)))
    ]
  );
  var f = m(u);
  hs(f, 1, c, Lo, (g, b) => {
    var T = /* @__PURE__ */ Ra(() => f_(v(b), 2));
    let S = () => v(T)[0], k = () => v(T)[1];
    var A = ke(), P = pe(A);
    ym(P, S, !0, (w, I) => {
      qc(w, () => ({ ...k() }));
    }), L(g, A);
  });
  var p = y(f);
  return Fe(p, e, "default", {}), _(u), L(t, u), zn(d);
}
ge(
  je,
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
function Dp(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "book-open" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Dp, {}, ["default"], [], !0);
function cl(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "check" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(cl, {}, ["default"], [], !0);
function Mp(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Mp, {}, ["default"], [], !0);
function ul(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "external-link" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(ul, {}, ["default"], [], !0);
function Ac(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "file-text" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Ac, {}, ["default"], [], !0);
function $p(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "house" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge($p, {}, ["default"], [], !0);
function Tr(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "layout-grid" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Tr, {}, ["default"], [], !0);
function Fp(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "log-in" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Fp, {}, ["default"], [], !0);
function Up(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "log-out" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Up, {}, ["default"], [], !0);
function Sr(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "menu" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Sr, {}, ["default"], [], !0);
function Rn(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "message-circle" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Rn, {}, ["default"], [], !0);
function Hp(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "phone" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Hp, {}, ["default"], [], !0);
function Wp(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "send" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Wp, {}, ["default"], [], !0);
function Vp(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "trending-up" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(Vp, {}, ["default"], [], !0);
function ri(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "user" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(ri, {}, ["default"], [], !0);
function rs(t, e) {
  const n = $e(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  je(t, Ye({ name: "users" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = ke(), a = pe(o);
      Fe(a, e, "default", {}), L(r, o);
    },
    $$slots: { default: !0 }
  }));
}
ge(rs, {}, ["default"], [], !0);
var eI = /* @__PURE__ */ H("<option> </option>"), tI = /* @__PURE__ */ H('<div class="error-message svelte-1e01td3"> </div>'), nI = /* @__PURE__ */ H('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...', 1), iI = /* @__PURE__ */ H("<!> 인증 코드 전송", 1), rI = /* @__PURE__ */ H('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'), sI = /* @__PURE__ */ H('<div class="error-message svelte-1e01td3"> </div>'), oI = /* @__PURE__ */ H('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...', 1), aI = /* @__PURE__ */ H("<!> 로그인", 1), lI = /* @__PURE__ */ H('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'), cI = /* @__PURE__ */ H('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');
const uI = {
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
function hI(t, e) {
  jn(e, !0), gi(t, uI);
  const n = [
    { code: "+63", name: "필리핀 (Philippines)", flag: "🇵🇭" },
    { code: "+82", name: "한국 (Korea)", flag: "🇰🇷" },
    { code: "+86", name: "중국 (China)", flag: "🇨🇳" },
    { code: "+81", name: "일본 (Japan)", flag: "🇯🇵" },
    { code: "+1", name: "미국 (USA)", flag: "🇺🇸" }
  ];
  let i = /* @__PURE__ */ ae(
    "+82"
    // 기본값: 한국
  ), r = /* @__PURE__ */ ae(
    ""
    // 전화번호 (국가 코드 제외)
  ), s = /* @__PURE__ */ ae(
    ""
    // SMS 인증 코드
  ), o = /* @__PURE__ */ ae(
    "phone"
    // 'phone' | 'code'
  ), a = /* @__PURE__ */ ae(!1), l = /* @__PURE__ */ ae(""), c = /* @__PURE__ */ ae(null), h = /* @__PURE__ */ ae(null), d = /* @__PURE__ */ ae(
    void 0
    // reCAPTCHA 위젯 ID 저장
  ), u = /* @__PURE__ */ ae(
    null
    // reCAPTCHA 컨테이너 DOM 요소 참조
  );
  function f() {
    return new Promise((E, D) => {
      try {
        if (!v(u)) {
          const N = new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");
          console.error(N), x(l, "reCAPTCHA 초기화에 실패했습니다."), D(N);
          return;
        }
        if (v(c)) {
          if (v(d) !== void 0 && typeof window.grecaptcha < "u")
            try {
              window.grecaptcha.reset(v(d)), console.log("reCAPTCHA reset completed"), E(v(d));
              return;
            } catch (N) {
              console.warn("Failed to reset reCAPTCHA:", N);
            }
          try {
            v(c).clear(), x(c, null), x(d, void 0);
          } catch (N) {
            console.warn("Failed to clear reCAPTCHA:", N);
          }
        }
        x(
          c,
          new Jy(Wn, v(u).id, {
            size: "invisible",
            // invisible 모드 활성화 - 사용자 상호작용 없이 자동 검증
            callback: (N) => {
              console.log("reCAPTCHA verified (invisible mode)");
            },
            "expired-callback": () => {
              console.warn("reCAPTCHA expired. Resetting..."), typeof window.grecaptcha < "u" && v(d) !== void 0 ? window.grecaptcha.reset(v(d)) : f();
            }
          }),
          !0
        ), v(c).render().then((N) => {
          x(d, N, !0), console.log("reCAPTCHA rendered with widgetId:", N), E(N);
        }).catch((N) => {
          console.error("Failed to render reCAPTCHA:", N), x(l, "reCAPTCHA 초기화에 실패했습니다."), D(N);
        });
      } catch (N) {
        console.error("reCAPTCHA 초기화 실패:", N), x(l, "reCAPTCHA 초기화에 실패했습니다."), D(N);
      }
    });
  }
  Oo(() => {
    const E = document.createElement("div");
    return E.id = "recaptcha-container-" + Math.random().toString(36).substr(2, 9), E.className = "recaptcha-container-light-dom", E.style.cssText = `
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `, document.body.appendChild(E), x(u, E, !0), f(), () => {
      E && E.parentNode && E.parentNode.removeChild(E);
    };
  });
  function p(E) {
    return /^[0-9]{6,15}$/.test(E);
  }
  async function g() {
    if (x(l, ""), !p(v(r))) {
      x(l, "올바른 전화번호를 입력해주세요 (6-15자리 숫자)");
      return;
    }
    x(a, !0);
    try {
      const E = `${v(i)}${v(r)}`;
      console.log("Sending verification code to:", E), x(h, await eb(Wn, E, v(c)), !0), console.log("Verification code sent successfully (invisible reCAPTCHA verified)"), x(o, "code");
    } catch (E) {
      console.error("SMS 전송 실패:", E), E.code === "auth/invalid-phone-number" ? x(l, "잘못된 전화번호 형식입니다.") : E.code === "auth/too-many-requests" ? x(l, "너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.") : x(l, `SMS 전송 실패: ${E.message}`);
    } finally {
      x(a, !1);
    }
  }
  async function b() {
    if (x(l, ""), v(s).length !== 6) {
      x(l, "6자리 인증 코드를 입력해주세요.");
      return;
    }
    x(a, !0);
    try {
      const E = await v(h).confirm(v(s));
      console.log("Login successful:", E.user);
      const D = new CustomEvent("login-success", {
        detail: { user: E.user, phoneNumber: E.user.phoneNumber }
      });
      dispatchEvent(D), x(r, ""), x(s, ""), x(o, "phone");
    } catch (E) {
      console.error("인증 코드 확인 실패:", E), E.code === "auth/invalid-verification-code" ? x(l, "잘못된 인증 코드입니다.") : E.code === "auth/code-expired" ? x(l, "인증 코드가 만료되었습니다. 다시 시도해주세요.") : x(l, `인증 실패: ${E.message}`);
      const D = new CustomEvent("login-error", { detail: { error: E.message } });
      dispatchEvent(D);
    } finally {
      x(a, !1);
    }
  }
  function T() {
    x(o, "phone"), x(s, ""), x(l, "");
  }
  var S = cI(), k = m(S), A = m(k);
  {
    var P = (E) => {
      var D = rI(), N = m(D), q = m(N);
      Hp(q, { class: "icon-large" }), Zt(4), _(N);
      var M = y(N, 2), G = y(m(M), 2);
      hs(G, 21, () => n, Lo, (V, ie) => {
        var fe = eI(), Qe = m(fe);
        _(fe);
        var Re = {};
        ce(() => {
          O(Qe, `${v(ie).flag ?? ""} ${v(ie).name ?? ""} (${v(ie).code ?? ""})`), Re !== (Re = v(ie).code) && (fe.value = (fe.__value = v(ie).code) ?? "");
        }), L(V, fe);
      }), _(G), _(M);
      var X = y(M, 2), W = y(m(X), 2), J = m(W), _e = m(J, !0);
      _(J);
      var ee = y(J, 2);
      Fa(ee), _(W), Zt(2), _(X);
      var te = y(X, 2);
      {
        var ue = (V) => {
          var ie = tI(), fe = m(ie, !0);
          _(ie), ce(() => O(fe, v(l))), L(V, ie);
        };
        Ie(te, (V) => {
          v(l) && V(ue);
        });
      }
      var ne = y(te, 2);
      ne.__click = g;
      var Ae = m(ne);
      {
        var Ce = (V) => {
          var ie = nI();
          Zt(), L(V, ie);
        }, Te = (V) => {
          var ie = iI(), fe = pe(ie);
          Wp(fe, { class: "btn-icon" }), Zt(), L(V, ie);
        };
        Ie(Ae, (V) => {
          v(a) ? V(Ce) : V(Te, !1);
        });
      }
      _(ne), _(D), ce(() => {
        G.disabled = v(a), O(_e, v(i)), ee.disabled = v(a), ne.disabled = v(a) || !v(r);
      }), Sm(G, () => v(i), (V) => x(i, V)), Da("keypress", ee, (V) => {
        V.key === "Enter" && (V.preventDefault(), g());
      }), Kc(ee, () => v(r), (V) => x(r, V)), L(E, D);
    }, w = (E) => {
      var D = ke(), N = pe(D);
      {
        var q = (M) => {
          var G = lI(), X = m(G), W = m(X);
          cl(W, { class: "icon-large" });
          var J = y(W, 4), _e = m(J);
          Zt(2), _(J), _(X);
          var ee = y(X, 2), te = y(m(ee), 2);
          Fa(te), Zt(2), _(ee);
          var ue = y(ee, 2);
          {
            var ne = (Z) => {
              var Pe = sI(), tt = m(Pe, !0);
              _(Pe), ce(() => O(tt, v(l))), L(Z, Pe);
            };
            Ie(ue, (Z) => {
              v(l) && Z(ne);
            });
          }
          var Ae = y(ue, 2), Ce = m(Ae);
          Ce.__click = T;
          var Te = y(Ce, 2);
          Te.__click = b;
          var V = m(Te);
          {
            var ie = (Z) => {
              var Pe = oI();
              Zt(), L(Z, Pe);
            }, fe = (Z) => {
              var Pe = aI(), tt = pe(Pe);
              cl(tt, { class: "btn-icon" }), Zt(), L(Z, Pe);
            };
            Ie(V, (Z) => {
              v(a) ? Z(ie) : Z(fe, !1);
            });
          }
          _(Te), _(Ae);
          var Qe = y(Ae, 2), Re = y(m(Qe));
          Re.__click = T, _(Qe), _(G), ce(() => {
            O(_e, `${v(i) ?? ""}${v(r) ?? ""}로 전송된`), te.disabled = v(a), Ce.disabled = v(a), Te.disabled = v(a) || v(s).length !== 6;
          }), Da("keypress", te, (Z) => {
            Z.key === "Enter" && (Z.preventDefault(), b());
          }), Kc(te, () => v(s), (Z) => x(s, Z)), L(M, G);
        };
        Ie(
          N,
          (M) => {
            v(o) === "code" && M(q);
          },
          !0
        );
      }
      L(E, D);
    };
    Ie(A, (E) => {
      v(o) === "phone" ? E(P) : E(w, !1);
    });
  }
  var I = y(A, 2);
  Rm(I, (E) => x(u, E), () => v(u)), _(k), _(S), L(t, S), zn();
}
us(["click"]);
customElements.define("phone-login", ge(hI, {}, [], [], !0));
const Rc = er(null), dI = er(!0);
lf(Wn, (t) => {
  Rc.set(t), dI.set(!1);
});
async function iC(t, e) {
  try {
    return await Sy(Wn, t, e), { success: !0 };
  } catch (n) {
    return console.error("로그인 오류:", n), { success: !1, error: jp(n.code) };
  }
}
async function rC(t, e, n = "") {
  try {
    const i = await Ty(Wn, t, e);
    return n && await af(i.user, {
      displayName: n
    }), { success: !0 };
  } catch (i) {
    return console.error("회원가입 오류:", i), { success: !1, error: jp(i.code) };
  }
}
async function fI() {
  try {
    return await Py(Wn), { success: !0 };
  } catch (t) {
    return console.error("로그아웃 오류:", t), { success: !1, error: t.message };
  }
}
function jp(t) {
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
class Xn {
  // === Singleton 인스턴스 ===
  static #t = null;
  #e = /* @__PURE__ */ ae(
    // === Public 반응형 속성 ===
    // Svelte 5의 $state로 선언되어 자동으로 반응형
    /** @type {boolean} 로딩 상태 (초기값: true) */
    !0
  );
  get loading() {
    return v(this.#e);
  }
  set loading(e) {
    x(this.#e, e, !0);
  }
  #i = /* @__PURE__ */ ae(!1);
  get isAuthenticated() {
    return v(this.#i);
  }
  set isAuthenticated(e) {
    x(this.#i, e, !0);
  }
  uid = null;
  email = null;
  phoneNumber = null;
  #r = /* @__PURE__ */ ae(null);
  get data() {
    return v(this.#r);
  }
  set data(e) {
    x(this.#r, e, !0);
  }
  #l = /* @__PURE__ */ ae(null);
  get error() {
    return v(this.#l);
  }
  set error(e) {
    x(this.#l, e, !0);
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
    return Xn.#t || (Xn.#t = new Xn()), Xn.#t;
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
      if (!Wn)
        throw new Error("Auth instance not available");
      this.#s = lf(
        Wn,
        (e) => {
          if (this.#o = e, e) {
            this.isAuthenticated = !0, this.uid = e.uid, this.email = e.email, this.phoneNumber = e.phoneNumber, this.error = null, this.#n && (this.#n(), this.#n = null);
            const n = Et(It, `users/${e.uid}`);
            this.#n = is(
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
      e.displayName !== void 0 && (n.displayName = e.displayName), (e.photoUrl !== void 0 || e.photoUrl !== void 0) && (n.photoUrl = e.photoUrl), Object.keys(n).length > 0 && await af(this.#o, n);
      const i = { ...e };
      i.photoUrl !== void 0 && (i.photoUrl === void 0 && (i.photoUrl = i.photoUrl), delete i.photoUrl);
      const r = Et(It, `users/${this.uid}`);
      await bo(r, i);
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
    this.#s && (this.#s(), this.#s = null), this.#n && (this.#n(), this.#n = null), Xn.#t = null;
  }
}
const Ft = Xn.getInstance(), pI = "GitHub", _I = {
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
  GitHub: pI,
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
  로그인정보확인불가: "Could not verify login information."
}, mI = {
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
  로그인정보확인불가: "로그인 정보를 확인할 수 없습니다."
}, gI = "GitHub", vI = {
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
  GitHub: gI,
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
  로그인정보확인불가: "ログイン情報を確認できませんでした。"
}, yI = "GitHub", bI = {
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
  GitHub: yI,
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
  로그인정보확인불가: "无法验证登录信息。"
}, Sa = { en: _I, ko: mI, ja: vI, zh: bI };
function hl(t) {
  const e = (t ?? "").toLowerCase();
  return e.startsWith("ko") ? "ko" : e.startsWith("ja") ? "ja" : e.startsWith("zh") ? "zh" : "en";
}
function zp() {
  if (typeof navigator > "u")
    return "en";
  const t = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const e of t) {
    const n = hl(e);
    if (n !== "en") return n;
  }
  return "en";
}
function wI(t) {
  let e = hl(t) || zp();
  function n(s) {
    e = hl(s);
  }
  function i() {
    return e;
  }
  function r(s, o = {}) {
    return ((Sa[e] ?? Sa.en)[s] ?? Sa.en[s] ?? s).replace(/\{(\w+)\}/g, (c, h) => o[h] ?? "");
  }
  return { t: r, setLocale: n, getLocale: i };
}
const Pc = "sns-web-locale", Bp = [
  { code: "ko", label: "🇰🇷 한국어" },
  { code: "en", label: "🇺🇸 English" },
  { code: "ja", label: "🇯🇵 日本語" },
  { code: "zh", label: "🇨🇳 中文" }
];
function EI() {
  if (typeof localStorage > "u") return null;
  const t = localStorage.getItem(Pc);
  if (!t) return null;
  const e = Bp.find((n) => n.code === t);
  return e ? e.code : null;
}
const qp = EI() ?? zp(), Io = wI(qp);
typeof localStorage < "u" && localStorage.setItem(Pc, Io.getLocale());
const Nc = er(qp);
function II(t) {
  Io.setLocale(t);
  const e = Io.getLocale();
  Nc.set(e), typeof localStorage < "u" && localStorage.setItem(Pc, e);
}
const xc = Nm(
  Nc,
  (t) => (e, n = {}) => Io.t(e, n)
), CI = er("");
var TI = /* @__PURE__ */ H('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'), SI = /* @__PURE__ */ H('<img alt="프로필" class="avatar-image svelte-38psow"/>'), kI = /* @__PURE__ */ H('<div class="avatar-fallback svelte-38psow"> </div>'), AI = /* @__PURE__ */ H('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'), RI = /* @__PURE__ */ H('<img class="avatar-image svelte-38psow"/>'), PI = /* @__PURE__ */ H('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'), NI = /* @__PURE__ */ H('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), xI = /* @__PURE__ */ H('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), OI = /* @__PURE__ */ H('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');
const LI = {
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
function DI(t, e) {
  jn(e, !0), gi(t, LI);
  const n = () => ii(CI, "$pageTitle", s), i = () => ii(Rc, "$user", s), r = () => ii(xc, "$t", s), [s, o] = Al();
  let a = /* @__PURE__ */ ae(!1);
  async function l() {
    if ((await fI()).success) {
      const w = new CustomEvent("logout-success", { bubbles: !0, composed: !0 });
      dispatchEvent(w);
    }
    x(a, !1);
  }
  function c() {
    return Ft.data?.displayName ? Ft.data.displayName.charAt(0).toUpperCase() : Ft.email ? Ft.email.charAt(0).toUpperCase() : "U";
  }
  function h() {
    x(a, !v(a));
  }
  function d(P) {
    const w = document.querySelector(".dropdown-menu"), I = document.querySelector(".dropdown-trigger");
    w && !w.contains(P.target) && !I?.contains(P.target) && x(a, !1);
  }
  Oo(() => (document.addEventListener("click", d), () => {
    document.removeEventListener("click", d);
  }));
  var u = OI(), f = m(u), p = m(f), g = y(m(p), 2);
  {
    var b = (P) => {
      var w = TI(), I = m(w), E = m(I, !0);
      _(I), _(w), ce(() => O(E, n())), L(P, w);
    };
    Ie(g, (P) => {
      n() && P(b);
    });
  }
  _(p);
  var T = y(p, 2), S = m(T);
  {
    var k = (P) => {
      var w = NI(), I = pe(w), E = m(I), D = m(E);
      Tr(D, { size: 16 });
      var N = y(D, 2), q = m(N, !0);
      _(N), _(E);
      var M = y(E, 2), G = m(M);
      Rn(G, { size: 16 });
      var X = y(G, 2), W = m(X, !0);
      _(X), _(M);
      var J = y(M, 2), _e = m(J);
      rs(_e, { size: 16 });
      var ee = y(_e, 2), te = m(ee, !0);
      _(ee), _(J);
      var ue = y(J, 2), ne = m(ue);
      ne.__click = h;
      var Ae = m(ne), Ce = m(Ae);
      {
        var Te = (ve) => {
          var re = SI();
          ce(() => Ee(re, "src", Ft.data.photoUrl)), L(ve, re);
        }, V = (ve) => {
          var re = kI(), nt = m(re, !0);
          _(re), ce((kt) => O(nt, kt), [c]), L(ve, re);
        };
        Ie(Ce, (ve) => {
          Ft.data?.photoUrl ? ve(Te) : ve(V, !1);
        });
      }
      _(Ae);
      var ie = y(Ae, 2), fe = m(ie, !0);
      _(ie), _(ne);
      var Qe = y(ne, 2);
      {
        var Re = (ve) => {
          var re = AI(), nt = m(re), kt = m(nt, !0);
          _(nt);
          var bn = y(nt, 4), wn = m(bn);
          ri(wn, { size: 16 });
          var Ii = y(wn, 2), Ci = m(Ii, !0);
          _(Ii), _(bn);
          var Yn = y(bn, 4);
          Yn.__click = l;
          var ur = m(Yn);
          Up(ur, { size: 16 });
          var hr = y(ur, 2), Ss = m(hr, !0);
          _(hr), _(Yn), _(re), ce(
            (ea, it, rt) => {
              O(kt, ea), O(Ci, it), O(Ss, rt);
            },
            [() => r()("내계정"), () => r()("프로필수정"), () => r()("로그아웃")]
          ), L(ve, re);
        };
        Ie(Qe, (ve) => {
          v(a) && ve(Re);
        });
      }
      _(ue);
      var Z = y(ue, 2), Pe = m(Z);
      Sr(Pe, { size: 24 }), _(Z), _(I);
      var tt = y(I, 2), me = m(tt), ze = m(me);
      Tr(ze, { size: 20 }), _(me);
      var Be = y(me, 2), Gn = m(Be);
      rs(Gn, { size: 20 }), _(Be);
      var yn = y(Be, 2), Cs = m(yn);
      Rn(Cs, { size: 20 }), _(yn);
      var Kn = y(yn, 2), or = m(Kn), Zo = m(or);
      {
        var ar = (ve) => {
          var re = RI();
          ce(
            (nt) => {
              Ee(re, "src", Ft.data.photoUrl), Ee(re, "alt", nt);
            },
            [() => r()("프로필")]
          ), L(ve, re);
        }, lr = (ve) => {
          var re = PI(), nt = m(re, !0);
          _(re), ce((kt) => O(nt, kt), [c]), L(ve, re);
        };
        Ie(Zo, (ve) => {
          Ft.data?.photoUrl ? ve(ar) : ve(lr, !1);
        });
      }
      _(or), _(Kn);
      var cr = y(Kn, 2), Ts = m(cr);
      Sr(Ts, { size: 24 }), _(cr), _(tt), ce(
        (ve, re, nt, kt, bn, wn, Ii, Ci, Yn) => {
          O(q, ve), O(W, re), O(te, nt), O(fe, Ft.data?.displayName || Ft.email), Ee(Z, "title", kt), Ee(me, "title", bn), Ee(Be, "title", wn), Ee(yn, "title", Ii), Ee(Kn, "title", Ci), Ee(cr, "title", Yn);
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
      ), L(P, w);
    }, A = (P) => {
      var w = xI(), I = pe(w), E = m(I), D = m(E);
      Tr(D, { size: 16 });
      var N = y(D, 2), q = m(N, !0);
      _(N), _(E);
      var M = y(E, 2), G = m(M);
      Rn(G, { size: 16 });
      var X = y(G, 2), W = m(X, !0);
      _(X), _(M);
      var J = y(M, 2), _e = m(J, !0);
      _(J);
      var ee = y(J, 2), te = m(ee);
      Sr(te, { size: 20 }), _(ee), _(I);
      var ue = y(I, 2), ne = m(ue), Ae = m(ne);
      Tr(Ae, { size: 20 }), _(ne);
      var Ce = y(ne, 2), Te = m(Ce);
      Rn(Te, { size: 20 }), _(Ce);
      var V = y(Ce, 2), ie = m(V);
      ri(ie, { size: 20 }), _(V);
      var fe = y(V, 2), Qe = m(fe);
      Sr(Qe, { size: 24 }), _(fe), _(ue), ce(
        (Re, Z, Pe, tt, me, ze, Be, Gn) => {
          O(q, Re), O(W, Z), O(_e, Pe), Ee(ee, "title", tt), Ee(ne, "title", me), Ee(Ce, "title", ze), Ee(V, "title", Be), Ee(fe, "title", Gn);
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
      ), L(P, w);
    };
    Ie(S, (P) => {
      i() ? P(k) : P(A, !1);
    });
  }
  _(T), _(f), _(u), L(t, u), zn(), o();
}
us(["click"]);
customElements.define("sns-topbar", ge(DI, {}, [], [], !0));
var MI = /* @__PURE__ */ H('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'), $I = /* @__PURE__ */ H('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>', 1), FI = /* @__PURE__ */ H("<option> </option>"), UI = /* @__PURE__ */ H('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');
const HI = {
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
function WI(t, e) {
  jn(e, !1), gi(t, HI);
  const n = () => ii(xc, "$t", s), i = () => ii(Rc, "$user", s), r = () => ii(Nc, "$locale", s), [s, o] = Al(), a = Bp;
  pd();
  var l = UI(), c = m(l), h = m(c), d = m(h, !0);
  _(h);
  var u = y(h, 2), f = m(u), p = m(f);
  $p(p, { size: 20 });
  var g = y(p, 2), b = m(g, !0);
  _(g), _(f);
  var T = y(f, 2), S = m(T);
  Rn(S, { size: 20 });
  var k = y(S, 2), A = m(k, !0);
  _(k), _(T);
  var P = y(T, 2), w = m(P);
  rs(w, { size: 20 });
  var I = y(w, 2), E = m(I, !0);
  _(I), _(P);
  var D = y(P, 2), N = m(D);
  ri(N, { size: 20 });
  var q = y(N, 2), M = m(q, !0);
  _(q), _(D);
  var G = y(D, 2), X = m(G);
  Ac(X, { size: 20 });
  var W = y(X, 2), J = m(W, !0);
  _(W), _(G), _(u);
  var _e = y(u, 4), ee = m(_e), te = m(ee, !0);
  _(ee);
  var ue = y(ee, 2), ne = m(ue);
  {
    var Ae = (it) => {
      var rt = MI(), st = m(rt);
      ri(st, { size: 16 });
      var Jt = y(st, 2), Xt = m(Jt, !0);
      _(Jt), _(rt), ce((dr) => O(Xt, dr), [() => n()("회원정보수정")]), L(it, rt);
    }, Ce = (it) => {
      var rt = $I(), st = pe(rt), Jt = m(st);
      Fp(Jt, { size: 16 });
      var Xt = y(Jt, 2), dr = m(Xt, !0);
      _(Xt), _(st);
      var ks = y(st, 2), As = m(ks);
      ri(As, { size: 16 });
      var Rs = y(As, 2), ta = m(Rs, !0);
      _(Rs), _(ks), ce(
        (na, ia) => {
          O(dr, na), O(ta, ia);
        },
        [() => n()("로그인"), () => n()("회원가입")]
      ), L(it, rt);
    };
    Ie(ne, (it) => {
      i() ? it(Ae) : it(Ce, !1);
    });
  }
  _(ue), _(_e);
  var Te = y(_e, 4), V = m(Te), ie = m(V);
  rs(ie, { size: 16 });
  var fe = y(ie, 2), Qe = m(fe, !0);
  _(fe), _(V);
  var Re = y(V, 2), Z = y(m(Re), 2), Pe = m(Z, !0);
  _(Z);
  var tt = y(Z, 2);
  ul(tt, { size: 12, class: "external-icon" }), _(Re);
  var me = y(Re, 2), ze = m(me);
  Rn(ze, { size: 16 });
  var Be = y(ze, 2), Gn = m(Be, !0);
  _(Be);
  var yn = y(Be, 2);
  ul(yn, { size: 12, class: "external-icon" }), _(me);
  var Cs = y(me, 2), Kn = m(Cs);
  Dp(Kn, { size: 16 });
  var or = y(Kn, 2), Zo = m(or, !0);
  _(or), _(Cs), _(Te);
  var ar = y(Te, 2), lr = m(ar), cr = m(lr, !0);
  _(lr);
  var Ts = y(lr, 2), ve = m(Ts), re = y(ve, 2);
  hs(re, 5, () => a, Lo, (it, rt) => {
    var st = FI(), Jt = m(st, !0);
    _(st);
    var Xt = {};
    ce(() => {
      O(Jt, v(rt).label), Xt !== (Xt = v(rt).code) && (st.value = (st.__value = v(rt).code) ?? "");
    }), L(it, st);
  }), _(re);
  var nt;
  Sl(re), _(Ts), _(ar);
  var kt = y(ar, 2), bn = m(kt), wn = m(bn), Ii = m(wn, !0);
  _(wn);
  var Ci = y(wn, 2), Yn = m(Ci, !0);
  _(Ci), _(bn), _(kt);
  var ur = y(kt, 2), hr = m(ur), Ss = m(hr, !0), ea = y(Ss, 2);
  _(hr), _(ur), _(c), _(l), ce(
    (it, rt, st, Jt, Xt, dr, ks, As, Rs, ta, na, ia, Gp, Kp, Yp, Qp, Jp) => {
      O(d, it), O(b, rt), O(A, st), O(E, Jt), O(M, Xt), O(J, dr), O(te, ks), O(Qe, As), O(Pe, Rs), O(Gn, ta), O(Zo, na), O(cr, ia), Ee(ve, "aria-label", Gp), nt !== (nt = r()) && (re.value = (re.__value = r()) ?? "", zr(re, r())), O(Ii, Kp), O(Yn, Yp), O(Ss, Qp), O(ea, ` ${Jp ?? ""}`);
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
  ), Da("change", re, (it) => II(it.currentTarget.value)), L(t, l), zn(), o();
}
customElements.define("sns-left-sidebar", ge(WI, {}, [], [], !0));
var VI = /* @__PURE__ */ H('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');
const jI = {
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
function zI(t, e) {
  jn(e, !0), gi(t, jI);
  const n = () => ii(xc, "$t", i), [i, r] = Al();
  let s = /* @__PURE__ */ ae(tn({
    totalUsers: 8,
    totalScore: 1,
    totalPosts: 0,
    totalMessages: 0
  }));
  var o = VI(), a = m(o), l = m(a), c = m(l, !0);
  _(l);
  var h = y(l, 2), d = m(h), u = m(d), f = m(u);
  ri(f, { size: 20 }), _(u);
  var p = y(u, 2), g = m(p), b = m(g, !0);
  _(g);
  var T = y(g, 2), S = m(T, !0);
  _(T), _(p), _(d);
  var k = y(d, 2), A = m(k), P = m(A);
  Vp(P, { size: 20 }), _(A);
  var w = y(A, 2), I = m(w), E = m(I, !0);
  _(I);
  var D = y(I, 2), N = m(D, !0);
  _(D), _(w), _(k);
  var q = y(k, 2), M = m(q), G = m(M);
  Ac(G, { size: 20 }), _(M);
  var X = y(M, 2), W = m(X), J = m(W, !0);
  _(W);
  var _e = y(W, 2), ee = m(_e, !0);
  _(_e);
  var te = y(_e, 2), ue = m(te, !0);
  _(te), _(X), _(q);
  var ne = y(q, 2), Ae = m(ne), Ce = m(Ae);
  Rn(Ce, { size: 20 }), _(Ae);
  var Te = y(Ae, 2), V = m(Te), ie = m(V, !0);
  _(V);
  var fe = y(V, 2), Qe = m(fe, !0);
  _(fe), _(Te), _(ne), _(h);
  var Re = y(h, 2), Z = m(Re, !0);
  _(Re), _(a), _(o), ce(
    (Pe, tt, me, ze, Be, Gn, yn) => {
      O(c, Pe), O(b, tt), O(S, v(s).totalUsers), O(E, me), O(N, v(s).totalScore), O(J, ze), O(ee, v(s).totalPosts), O(ue, Be), O(ie, Gn), O(Qe, v(s).totalMessages), O(Z, yn);
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
  ), L(t, o), zn(), r();
}
customElements.define("sns-right-sidebar", ge(zI, {}, [], [], !0));
var BI = /* @__PURE__ */ H('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>', 2);
const qI = {
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
function GI(t, e) {
  gi(t, qI);
  var n = BI(), i = m(n), r = y(i, 2), s = m(r);
  Ys(s, 1, "left-sidebar svelte-um1xbq");
  var o = y(s, 2), a = m(o);
  Fe(a, e, "default", {}), _(o);
  var l = y(o, 2);
  Ys(l, 1, "right-sidebar svelte-um1xbq"), _(r), _(n), L(t, n);
}
customElements.define("sns-layout", ge(GI, {}, ["default"], [], !0));
var KI = /* @__PURE__ */ H('<div class="icon-container svelte-m3h71q"> </div>'), YI = /* @__PURE__ */ H('<p class="hint-box svelte-m3h71q"> </p>'), QI = /* @__PURE__ */ H('<p class="gpl-box svelte-m3h71q"> </p>'), JI = /* @__PURE__ */ H('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'), XI = /* @__PURE__ */ H('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'), ZI = /* @__PURE__ */ H('<div class="accordion svelte-m3h71q"></div>');
const eC = {
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
function tC(t, e) {
  jn(e, !0), gi(t, eC);
  let n = yt(e, "items", 7, "[]"), i = yt(e, "type", 7, "single"), r = yt(e, "collapsible", 7, !0), s = /* @__PURE__ */ Ra(() => {
    try {
      const u = typeof n() == "string" ? JSON.parse(n()) : n();
      return Array.isArray(u) ? u : [];
    } catch (u) {
      return console.error("Failed to parse accordion items:", u), [];
    }
  }), o = /* @__PURE__ */ Ra(() => () => {
    const u = r();
    return typeof u == "boolean" ? u : typeof u == "string" ? u !== "false" : !0;
  }), a = /* @__PURE__ */ ae(tn(/* @__PURE__ */ new Set()));
  function l(u) {
    const f = new Set(v(a));
    i() === "single" ? f.has(u) ? v(o) && f.delete(u) : (f.clear(), f.add(u)) : f.has(u) ? f.delete(u) : f.add(u), x(a, f, !0);
  }
  function c(u) {
    return v(a).has(u);
  }
  var h = {
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
  }, d = ZI();
  return hs(d, 21, () => v(s), Lo, (u, f, p) => {
    var g = XI(), b = m(g);
    b.__click = () => l(p);
    var T = m(b), S = m(T);
    {
      var k = (q) => {
        var M = KI(), G = m(M, !0);
        _(M), ce(() => O(G, v(f).icon)), L(q, M);
      };
      Ie(S, (q) => {
        v(f).icon && q(k);
      });
    }
    var A = y(S, 2), P = m(A, !0);
    _(A), _(T);
    var w = y(T, 2);
    let I;
    var E = m(w);
    Mp(E, { size: 20 }), _(w), _(b);
    var D = y(b, 2);
    {
      var N = (q) => {
        var M = JI(), G = m(M), X = m(G, !0);
        _(G);
        var W = y(G, 2);
        {
          var J = (te) => {
            var ue = YI(), ne = m(ue, !0);
            _(ue), ce(() => O(ne, v(f).hint)), L(te, ue);
          };
          Ie(W, (te) => {
            v(f).hint && te(J);
          });
        }
        var _e = y(W, 2);
        {
          var ee = (te) => {
            var ue = QI(), ne = m(ue, !0);
            _(ue), ce(() => O(ne, v(f).gpl)), L(te, ue);
          };
          Ie(_e, (te) => {
            v(f).gpl && te(ee);
          });
        }
        _(M), ce(() => O(X, v(f).content)), L(q, M);
      };
      Ie(D, (q) => {
        c(p) && q(N);
      });
    }
    _(g), ce(
      (q, M) => {
        Ee(b, "aria-expanded", q), O(P, v(f).title), I = Ys(w, 1, "chevron svelte-m3h71q", null, I, M);
      },
      [() => c(p), () => ({ "rotate-180": c(p) })]
    ), L(u, g);
  }), _(d), L(t, d), zn(h);
}
us(["click"]);
customElements.define("sns-accordion", ge(tC, { items: {}, type: {}, collapsible: {} }, [], [], !0));
function sC(t) {
  const { subscribe: e, set: n } = er(null), i = Et(It, t);
  return is(i, (r) => {
    const s = r.val();
    n(s);
  }), {
    subscribe: e,
    // 컴포넌트 언마운트 시 구독 해제
    unsubscribe: () => Sc(i)
  };
}
async function oC(t, e) {
  try {
    const n = Et(It, t);
    return await Jo(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 쓰기 오류:", n), { success: !1, error: n.message };
  }
}
async function aC(t, e) {
  try {
    const n = Et(It, t);
    return await bo(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 업데이트 오류:", n), { success: !1, error: n.message };
  }
}
async function lC(t) {
  try {
    const e = Et(It, t);
    return await eE(e), { success: !0 };
  } catch (e) {
    return console.error("데이터 삭제 오류:", e), { success: !1, error: e.message };
  }
}
async function cC(t, e) {
  try {
    const n = Et(It, t), i = Z1(n);
    return await Jo(i, e), { success: !0, key: i.key };
  } catch (n) {
    return console.error("데이터 추가 오류:", n), { success: !1, error: n.message };
  }
}
async function uC(t) {
  try {
    const e = Et(It, t), n = await tE(e);
    return n.exists() ? { success: !0, data: n.val() } : { success: !0, data: null };
  } catch (e) {
    return console.error("데이터 읽기 오류:", e), { success: !1, error: e.message };
  }
}
function hC(t) {
  const e = Et(It, `status/${t}`), n = Et(It, ".info/connected");
  return is(n, (i) => {
    i.val() === !0 && (Jo(e, {
      online: !0,
      lastSeen: Date.now()
    }), is(Et(It, ".info/connected"), (r) => {
      r.val() || bo(e, {
        online: !1,
        lastSeen: Date.now()
      });
    }));
  }), () => {
    bo(e, {
      online: !1,
      lastSeen: Date.now()
    }), Sc(n);
  };
}
console.log("SNS Web Components 로드됨 ✅");
export {
  Wn as auth,
  sC as createRealtimeStore,
  It as database,
  lC as deleteData,
  dI as loading,
  cC as pushData,
  uC as readData,
  hC as setupPresence,
  iC as signIn,
  fI as signOut,
  rC as signUp,
  aC as updateData,
  Rc as user,
  oC as writeData
};
