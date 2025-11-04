typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const xo = 1, Lo = 2, Td = 4, Em = 8, Im = 16, Cm = 1, Tm = 2, Sd = 4, Sm = 8, km = 16, Am = 1, Rm = 2, kd = "[", Oo = "[!", Il = "]", Br = {}, je = Symbol(), Pm = "http://www.w3.org/1999/xhtml", Nm = "http://www.w3.org/2000/svg", xm = "@attach", Ad = !1;
var Cl = Array.isArray, Lm = Array.prototype.indexOf, Tl = Array.from, Js = Object.keys, Yi = Object.defineProperty, an = Object.getOwnPropertyDescriptor, Rd = Object.getOwnPropertyDescriptors, Om = Object.prototype, Dm = Array.prototype, Sl = Object.getPrototypeOf, qc = Object.isExtensible;
function wi(t) {
  return typeof t == "function";
}
const Dn = () => {
};
function Mm(t) {
  return t();
}
function Xs(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Pd() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function $m(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Je = 2, kl = 4, Do = 8, _n = 16, gn = 32, Qn = 64, Mo = 128, Ye = 1024, ht = 2048, vn = 4096, gt = 8192, ln = 16384, Al = 32768, hr = 65536, Gc = 1 << 17, Fm = 1 << 18, Er = 1 << 19, Nd = 1 << 20, It = 256, Zs = 512, eo = 32768, $a = 1 << 21, Rl = 1 << 22, cr = 1 << 23, Vt = Symbol("$state"), Pl = Symbol("legacy props"), Um = Symbol(""), Dr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Hm = 1, Nl = 3, ti = 8;
function xd(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Wm() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Vm(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function jm() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zm(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bm() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qm() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gm(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Km() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ym() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qm() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Jm() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function $o(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Xm() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Zm() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let F = !1;
function _t(t) {
  F = t;
}
let Q;
function Be(t) {
  if (t === null)
    throw $o(), Br;
  return Q = t;
}
function fr() {
  return Be(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(Q)
  );
}
function m(t) {
  if (F) {
    if (/* @__PURE__ */ Yt(Q) !== null)
      throw $o(), Br;
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
function to(t = !0) {
  for (var e = 0, n = Q; ; ) {
    if (n.nodeType === ti) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Il) {
        if (e === 0) return n;
        e -= 1;
      } else (r === kd || r === Oo) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n)
    );
    t && n.remove(), n = i;
  }
}
function Ld(t) {
  if (!t || t.nodeType !== ti)
    throw $o(), Br;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Od(t) {
  return t === this.v;
}
function Dd(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Md(t) {
  return !Dd(t, this.v);
}
let ni = !1, e_ = !1;
function t_() {
  ni = !0;
}
let Se = null;
function qr(t) {
  Se = t;
}
function yn(t, e = !1, n) {
  Se = {
    p: Se,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: ni && !e ? { s: null, u: null, $: [] } : null
  };
}
function bn(t) {
  var e = (
    /** @type {ComponentContext} */
    Se
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      th(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Se = e.p, t ?? /** @type {T} */
  {};
}
function fs() {
  return !ni || Se !== null && Se.l === null;
}
let ar = [];
function $d() {
  var t = ar;
  ar = [], Xs(t);
}
function Jn(t) {
  if (ar.length === 0 && !Mi) {
    var e = ar;
    queueMicrotask(() => {
      e === ar && $d();
    });
  }
  ar.push(t);
}
function n_() {
  for (; ar.length > 0; )
    $d();
}
function Fd(t) {
  var e = j;
  if (e === null)
    return Y.f |= cr, t;
  if ((e.f & Al) === 0) {
    if ((e.f & Mo) === 0)
      throw t;
    e.b.error(t);
  } else
    Gr(t, e);
}
function Gr(t, e) {
  for (; e !== null; ) {
    if ((e.f & Mo) !== 0)
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
const Us = /* @__PURE__ */ new Set();
let ue = null, Di = null, Rt = null, Wt = [], Fo = null, Fa = !1, Mi = !1;
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
  #r = 0;
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
    Wt = [], Di = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#n(r, n);
    this.is_fork || this.#c(), this.#i > 0 || this.is_fork ? (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects)) : (Di = this, ue = null, Kc(n.render_effects), Kc(n.effects), Di = null, this.#l?.resolve()), Rt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #n(e, n) {
    e.f ^= Ye;
    for (var r = e.first; r !== null; ) {
      var i = r.f, s = (i & (gn | Qn)) !== 0, o = s && (i & Ye) !== 0, a = o || (i & gt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Mo) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        s ? r.f ^= Ye : (i & kl) !== 0 ? n.effects.push(r) : gs(r) && ((r.f & _n) !== 0 && n.block_effects.push(r), Ji(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; )
        c === n.effect && (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(e) {
    for (const n of e)
      ((n.f & ht) !== 0 ? this.#o : this.#s).push(n), Qe(n, Ye);
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
    ue = this;
  }
  deactivate() {
    ue = null, Rt = null;
  }
  flush() {
    if (this.activate(), Wt.length > 0) {
      if (Ud(), ue !== null && ue !== this)
        return;
    } else this.#r === 0 && this.process([]);
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
    this.#r === 0 && this.#u();
  }
  #u() {
    if (Us.size > 1) {
      this.previous.clear();
      var e = Rt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Us) {
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
            Hd(c, o, a, l);
          if (Wt.length > 0) {
            ue = i, i.apply();
            for (const c of Wt)
              i.#n(c, r);
            Wt = [], i.deactivate();
          }
        }
      }
      ue = null, Rt = e;
    }
    this.committed = !0, Us.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#r += 1, e && (this.#i += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#r -= 1, e && (this.#i -= 1), this.revive();
  }
  revive() {
    for (const e of this.#o)
      Qe(e, ht), pr(e);
    for (const e of this.#s)
      Qe(e, vn), pr(e);
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
    return (this.#l ??= Pd()).promise;
  }
  static ensure() {
    if (ue === null) {
      const e = ue = new xt();
      Us.add(ue), Mi || xt.enqueue(() => {
        ue === e && e.flush();
      });
    }
    return ue;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Jn(e);
  }
  apply() {
  }
}
function mt(t) {
  var e = Mi;
  Mi = !0;
  try {
    for (var n; ; ) {
      if (n_(), Wt.length === 0 && (ue?.flush(), Wt.length === 0))
        return Fo = null, /** @type {T} */
        n;
      Ud();
    }
  } finally {
    Mi = e;
  }
}
function Ud() {
  var t = Ur;
  Fa = !0;
  try {
    var e = 0;
    for (Xc(!0); Wt.length > 0; ) {
      var n = xt.ensure();
      if (e++ > 1e3) {
        var r, i;
        r_();
      }
      n.process(Wt), Mn.clear();
    }
  } finally {
    Fa = !1, Xc(t), Fo = null;
  }
}
function r_() {
  try {
    Bm();
  } catch (t) {
    Gr(t, Fo);
  }
}
let tn = null;
function Kc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (ln | gt)) === 0 && gs(r) && (tn = /* @__PURE__ */ new Set(), Ji(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? ih(r) : r.fn = null), tn?.size > 0)) {
        Mn.clear();
        for (const i of tn) {
          if ((i.f & (ln | gt)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            tn.has(o) && (tn.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (ln | gt)) === 0 && Ji(l);
          }
        }
        tn.clear();
      }
    }
    tn = null;
  }
}
function Hd(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & Je) !== 0 ? Hd(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (Rl | _n)) !== 0 && (s & ht) === 0 && // we may have scheduled this one already
      Wd(i, e, r) && (Qe(i, ht), pr(
        /** @type {Effect} */
        i
      ));
    }
}
function Wd(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (e.includes(i))
        return !0;
      if ((i.f & Je) !== 0 && Wd(
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
function pr(t) {
  for (var e = Fo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Fa && e === j && (n & _n) !== 0)
      return;
    if ((n & (Qn | gn)) !== 0) {
      if ((n & Ye) === 0) return;
      e.f ^= Ye;
    }
  }
  Wt.push(e);
}
function i_(t) {
  let e = 0, n = jn(0), r;
  return () => {
    m_() && (y(n), Ho(() => (e === 0 && (r = qt(() => t(() => $i(n)))), e += 1, () => {
      Jn(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, $i(n));
      });
    })));
  };
}
var s_ = hr | Er | Mo;
function o_(t, e, n) {
  new a_(t, e, n);
}
class a_ {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #r = F ? Q : null;
  /** @type {BoundaryProps} */
  #i;
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
  #y = i_(() => (this.#h = jn(this.#f), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#e = e, this.#i = n, this.#l = r, this.parent = /** @type {Effect} */
    j.b, this.#t = !!this.#i.pending, this.#o = ri(() => {
      if (j.b = this, F) {
        const s = this.#r;
        fr(), /** @type {Comment} */
        s.nodeType === ti && /** @type {Comment} */
        s.data === Oo ? this.#w() : this.#b();
      } else {
        var i = this.#g();
        try {
          this.#s = lt(() => r(i));
        } catch (s) {
          this.error(s);
        }
        this.#d > 0 ? this.#_() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, s_), F && (this.#e = Q);
  }
  #b() {
    try {
      this.#s = lt(() => this.#l(this.#e));
    } catch (e) {
      this.error(e);
    }
    this.#t = !1;
  }
  #w() {
    const e = this.#i.pending;
    e && (this.#n = lt(() => e(this.#e)), xt.enqueue(() => {
      var n = this.#g();
      this.#s = this.#m(() => (xt.ensure(), lt(() => this.#l(n)))), this.#d > 0 ? this.#_() : (Fr(
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
    return !!this.#i.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #m(e) {
    var n = j, r = Y, i = Se;
    Tt(this.#o), ut(this.#o), qr(this.#o.ctx);
    try {
      return e();
    } catch (s) {
      return Fd(s), null;
    } finally {
      Tt(n), ut(r), qr(i);
    }
  }
  #_() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#s !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), ah(this.#s, this.#c)), this.#n === null && (this.#n = lt(() => e(this.#e)));
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
    this.#d += e, this.#d === 0 && (this.#t = !1, this.#n && Fr(this.#n, () => {
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
    this.#v(e), this.#f += e, this.#h && Kr(this.#h, this.#f);
  }
  get_effect_pending() {
    return this.#y(), y(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#i.onerror;
    let r = this.#i.failed;
    if (this.#p || !n && !r)
      throw e;
    this.#s && (Fe(this.#s), this.#s = null), this.#n && (Fe(this.#n), this.#n = null), this.#a && (Fe(this.#a), this.#a = null), F && (Be(
      /** @type {TemplateNode} */
      this.#r
    ), At(), Be(to()));
    var i = !1, s = !1;
    const o = () => {
      if (i) {
        Zm();
        return;
      }
      i = !0, s && Jm(), xt.ensure(), this.#f = 0, this.#a !== null && Fr(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#s = this.#m(() => (this.#p = !1, lt(() => this.#l(this.#e)))), this.#d > 0 ? this.#_() : this.#t = !1;
    };
    var a = Y;
    try {
      ut(null), s = !0, n?.(e, o), s = !1;
    } catch (l) {
      Gr(l, this.#o && this.#o.parent);
    } finally {
      ut(a);
    }
    r && Jn(() => {
      this.#a = this.#m(() => {
        xt.ensure(), this.#p = !0;
        try {
          return lt(() => {
            r(
              this.#e,
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Gr(
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
function Vd(t, e, n, r) {
  const i = fs() ? ps : xl;
  if (n.length === 0 && t.length === 0) {
    r(e.map(i));
    return;
  }
  var s = ue, o = (
    /** @type {Effect} */
    j
  ), a = l_();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ c_(c))).then((c) => {
      a();
      try {
        r([...e.map(i), ...c]);
      } catch (d) {
        (o.f & ln) === 0 && Gr(d, o);
      }
      s?.deactivate(), no();
    }).catch((c) => {
      Gr(c, o);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      s?.deactivate(), no();
    }
  }) : l();
}
function l_() {
  var t = j, e = Y, n = Se, r = ue;
  return function(s = !0) {
    Tt(t), ut(e), qr(n), s && r?.activate();
  };
}
function no() {
  Tt(null), ut(null), qr(null);
}
// @__NO_SIDE_EFFECTS__
function ps(t) {
  var e = Je | ht, n = Y !== null && (Y.f & Je) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return j === null || n !== null && (n.f & It) !== 0 ? e |= It : j.f |= Er, {
    ctx: Se,
    deps: null,
    effects: null,
    equals: Od,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      je
    ),
    wv: 0,
    parent: n ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function c_(t, e) {
  let n = (
    /** @type {Effect | null} */
    j
  );
  n === null && Wm();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = jn(
    /** @type {V} */
    je
  ), o = !Y, a = /* @__PURE__ */ new Map();
  return y_(() => {
    var l = Pd();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === ue && c.committed && c.deactivate(), no();
      });
    } catch (u) {
      l.reject(u), no();
    }
    var c = (
      /** @type {Batch} */
      ue
    );
    if (o) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(Dr), a.delete(c), a.set(c, l);
    }
    const h = (u, f = void 0) => {
      if (c.activate(), f)
        f !== Dr && (s.f |= cr, Kr(s, f));
      else {
        (s.f & cr) !== 0 && (s.f ^= cr), Kr(s, u);
        for (const [p, g] of a) {
          if (a.delete(p), p === c) break;
          g.reject(Dr);
        }
      }
      o && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (u) => h(null, u || "unknown"));
  }), ms(() => {
    for (const l of a.values())
      l.reject(Dr);
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
function Ua(t) {
  const e = /* @__PURE__ */ ps(t);
  return lh(e), e;
}
// @__NO_SIDE_EFFECTS__
function xl(t) {
  const e = /* @__PURE__ */ ps(t);
  return e.equals = Md, e;
}
function jd(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Fe(
        /** @type {Effect} */
        e[n]
      );
  }
}
function u_(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Je) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ll(t) {
  var e, n = j;
  Tt(u_(t));
  try {
    t.f &= ~eo, jd(t), e = hh(t);
  } finally {
    Tt(n);
  }
  return e;
}
function zd(t) {
  var e = Ll(t);
  if (t.equals(e) || (t.v = e, t.wv = uh()), !Ir)
    if (Rt !== null)
      Rt.set(t, t.v);
    else {
      var n = (xn || (t.f & It) !== 0) && t.deps !== null ? vn : Ye;
      Qe(t, n);
    }
}
let Ha = /* @__PURE__ */ new Set();
const Mn = /* @__PURE__ */ new Map();
let Bd = !1;
function jn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Od,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function re(t, e) {
  const n = jn(t);
  return lh(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ol(t, e = !1, n = !0) {
  const r = jn(t);
  return e || (r.equals = Md), ni && n && Se !== null && Se.l !== null && (Se.l.s ??= []).push(r), r;
}
function N(t, e, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pt || (Y.f & Gc) !== 0) && fs() && (Y.f & (Je | _n | Rl | Gc)) !== 0 && !cn?.includes(t) && Qm();
  let r = n ? nn(e) : e;
  return Kr(t, r);
}
function Kr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Ir ? Mn.set(t, e) : Mn.set(t, n), t.v = e;
    var r = xt.ensure();
    r.capture(t, n), (t.f & Je) !== 0 && ((t.f & ht) !== 0 && Ll(
      /** @type {Derived} */
      t
    ), Qe(t, (t.f & It) === 0 ? Ye : vn)), t.wv = uh(), qd(t, ht), fs() && j !== null && (j.f & Ye) !== 0 && (j.f & (gn | Qn)) === 0 && (bt === null ? E_([t]) : bt.push(t)), !r.is_fork && Ha.size > 0 && !Bd && d_();
  }
  return e;
}
function d_() {
  Bd = !1;
  const t = Array.from(Ha);
  for (const e of t)
    (e.f & Ye) !== 0 && Qe(e, vn), gs(e) && Ji(e);
  Ha.clear();
}
function Yc(t, e = 1) {
  var n = y(t), r = e === 1 ? n++ : n--;
  return N(t, n), r;
}
function $i(t) {
  N(t, t.v + 1);
}
function qd(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = fs(), i = n.length, s = 0; s < i; s++) {
      var o = n[s], a = o.f;
      if (!(!r && o === j)) {
        var l = (a & ht) === 0;
        l && Qe(o, e), (a & Je) !== 0 ? (a & eo) === 0 && (o.f |= eo, qd(
          /** @type {Derived} */
          o,
          vn
        )) : l && ((a & _n) !== 0 && tn !== null && tn.add(
          /** @type {Effect} */
          o
        ), pr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function nn(t) {
  if (typeof t != "object" || t === null || Vt in t)
    return t;
  const e = Sl(t);
  if (e !== Om && e !== Dm)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Cl(t), i = /* @__PURE__ */ re(0), s = ur, o = (a) => {
    if (ur === s)
      return a();
    var l = Y, c = ur;
    ut(null), eu(s);
    var d = a();
    return ut(l), eu(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ re(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Km();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ re(c.value);
          return n.set(l, h), h;
        }) : N(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = o(() => /* @__PURE__ */ re(je));
            n.set(l, d), $i(i);
          }
        } else
          N(c, je), $i(i);
        return !0;
      },
      get(a, l, c) {
        if (l === Vt)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || an(a, l)?.writable) && (d = o(() => {
          var f = nn(h ? a[l] : je), p = /* @__PURE__ */ re(f);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var u = y(d);
          return u === je ? void 0 : u;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = y(d));
        } else if (c === void 0) {
          var h = n.get(l), u = h?.v;
          if (h !== void 0 && u !== je)
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
        var c = n.get(l), d = c !== void 0 && c.v !== je || Reflect.has(a, l);
        if (c !== void 0 || j !== null && (!d || an(a, l)?.writable)) {
          c === void 0 && (c = o(() => {
            var u = d ? nn(a[l]) : je, f = /* @__PURE__ */ re(u);
            return f;
          }), n.set(l, c));
          var h = y(c);
          if (h === je)
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
            p !== void 0 ? N(p, je) : f in a && (p = o(() => /* @__PURE__ */ re(je)), n.set(f + "", p));
          }
        if (h === void 0)
          (!u || an(a, l)?.writable) && (h = o(() => /* @__PURE__ */ re(void 0)), N(h, nn(c)), n.set(l, h));
        else {
          u = h.v !== je;
          var g = o(() => nn(c));
          N(h, g);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, c), !u) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= C.v && N(C, T + 1);
          }
          $i(i);
        }
        return !0;
      },
      ownKeys(a) {
        y(i);
        var l = Reflect.ownKeys(a).filter((h) => {
          var u = n.get(h);
          return u === void 0 || u.v !== je;
        });
        for (var [c, d] of n)
          d.v !== je && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ym();
      }
    }
  );
}
function Qc(t) {
  try {
    if (t !== null && typeof t == "object" && Vt in t)
      return t[Vt];
  } catch {
  }
  return t;
}
function h_(t, e) {
  return Object.is(Qc(t), Qc(e));
}
var Wa, Gd, Kd, Yd;
function Va() {
  if (Wa === void 0) {
    Wa = window, Gd = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Kd = an(e, "firstChild").get, Yd = an(e, "nextSibling").get, qc(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), qc(n) && (n.__t = void 0);
  }
}
function Ct(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Bt(t) {
  return Kd.call(t);
}
// @__NO_SIDE_EFFECTS__
function Yt(t) {
  return Yd.call(t);
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
  else if (e && n.nodeType !== Nl) {
    var r = Ct();
    return n?.before(r), Be(r), r;
  }
  return Be(n), n;
}
function he(t, e = !1) {
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
  if (e && Q?.nodeType !== Nl) {
    var r = Ct();
    return Q?.before(r), Be(r), r;
  }
  return Q;
}
function b(t, e = 1, n = !1) {
  let r = F ? Q : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(r);
  if (!F)
    return r;
  if (n && r?.nodeType !== Nl) {
    var s = Ct();
    return r === null ? i?.after(s) : r.before(s), Be(s), s;
  }
  return Be(r), /** @type {TemplateNode} */
  r;
}
function Qd(t) {
  t.textContent = "";
}
function Jd() {
  return !1;
}
function f_(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Jn(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Jc = !1;
function Xd() {
  Jc || (Jc = !0, document.addEventListener(
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
function Uo(t) {
  var e = Y, n = j;
  ut(null), Tt(null);
  try {
    return t();
  } finally {
    ut(e), Tt(n);
  }
}
function Zd(t, e, n, r = n) {
  t.addEventListener(e, () => Uo(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Xd();
}
function eh(t) {
  j === null && Y === null && zm(), Y !== null && (Y.f & It) !== 0 && j === null && jm(), Ir && Vm();
}
function p_(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ft(t, e, n, r = !0) {
  var i = j;
  i !== null && (i.f & gt) !== 0 && (t |= gt);
  var s = {
    ctx: Se,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | ht,
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
      Ji(s), s.f |= Al;
    } catch (l) {
      throw Fe(s), l;
    }
  else e !== null && pr(s);
  if (r) {
    var o = s;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & Er) === 0 && (o = o.first, (t & _n) !== 0 && (t & hr) !== 0 && o !== null && (o.f |= hr)), o !== null && (o.parent = i, i !== null && p_(o, i), Y !== null && (Y.f & Je) !== 0 && (t & Qn) === 0)) {
      var a = (
        /** @type {Derived} */
        Y
      );
      (a.effects ??= []).push(o);
    }
  }
  return s;
}
function m_() {
  return Y !== null && !Pt;
}
function ms(t) {
  const e = Ft(Do, null, !1);
  return Qe(e, Ye), e.teardown = t, e;
}
function ja(t) {
  eh();
  var e = (
    /** @type {Effect} */
    j.f
  ), n = !Y && (e & gn) !== 0 && (e & Al) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Se
    );
    (r.e ??= []).push(t);
  } else
    return th(t);
}
function th(t) {
  return Ft(kl | Nd, t, !1);
}
function __(t) {
  return eh(), Ft(Do | Nd, t, !0);
}
function g_(t) {
  xt.ensure();
  const e = Ft(Qn | Er, t, !0);
  return () => {
    Fe(e);
  };
}
function v_(t) {
  xt.ensure();
  const e = Ft(Qn | Er, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Fr(e, () => {
      Fe(e), r(void 0);
    }) : (Fe(e), r(void 0));
  });
}
function _s(t) {
  return Ft(kl, t, !1);
}
function y_(t) {
  return Ft(Rl | Er, t, !0);
}
function Ho(t, e = 0) {
  return Ft(Do | e, t, !0);
}
function ie(t, e = [], n = [], r = []) {
  Vd(r, e, n, (i) => {
    Ft(Do, () => t(...i.map(y)), !0);
  });
}
function ri(t, e = 0) {
  var n = Ft(_n | e, t, !0);
  return n;
}
function lt(t, e = !0) {
  return Ft(gn | Er, t, !0, e);
}
function nh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Ir, r = Y;
    Zc(!0), ut(null);
    try {
      e.call(null);
    } finally {
      Zc(n), ut(r);
    }
  }
}
function rh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Uo(() => {
      i.abort(Dr);
    });
    var r = n.next;
    (n.f & Qn) !== 0 ? n.parent = null : Fe(n, e), n = r;
  }
}
function b_(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & gn) === 0 && Fe(e), e = n;
  }
}
function Fe(t, e = !0) {
  var n = !1;
  (e || (t.f & Fm) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (w_(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), rh(t, e && !n), ro(t, 0), Qe(t, ln);
  var r = t.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  nh(t);
  var i = t.parent;
  i !== null && i.first !== null && ih(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function w_(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(t)
    );
    t.remove(), t = n;
  }
}
function ih(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Fr(t, e, n = !0) {
  var r = [];
  Dl(t, r, !0), sh(r, () => {
    n && Fe(t), e && e();
  });
}
function sh(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Dl(t, e, n) {
  if ((t.f & gt) === 0) {
    if (t.f ^= gt, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & hr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & gn) !== 0 && (t.f & _n) !== 0;
      Dl(r, e, s ? n : !1), r = i;
    }
  }
}
function Ml(t) {
  oh(t, !0);
}
function oh(t, e) {
  if ((t.f & gt) !== 0) {
    t.f ^= gt, (t.f & Ye) === 0 && (Qe(t, ht), pr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & hr) !== 0 || (n.f & gn) !== 0;
      oh(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function ah(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n)
    );
    e.append(n), n = i;
  }
}
let Ur = !1;
function Xc(t) {
  Ur = t;
}
let Ir = !1;
function Zc(t) {
  Ir = t;
}
let Y = null, Pt = !1;
function ut(t) {
  Y = t;
}
let j = null;
function Tt(t) {
  j = t;
}
let cn = null;
function lh(t) {
  Y !== null && (cn === null ? cn = [t] : cn.push(t));
}
let Ze = null, pt = 0, bt = null;
function E_(t) {
  bt = t;
}
let ch = 1, Qi = 0, ur = Qi;
function eu(t) {
  ur = t;
}
let xn = !1;
function uh() {
  return ++ch;
}
function gs(t) {
  var e = t.f;
  if ((e & ht) !== 0)
    return !0;
  if ((e & vn) !== 0) {
    var n = t.deps, r = (e & It) !== 0;
    if (e & Je && (t.f &= ~eo), n !== null) {
      var i, s, o = (e & Zs) !== 0, a = r && j !== null && !xn, l = n.length;
      if ((o || a) && (j === null || (j.f & ln) === 0)) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          s = n[i], (o || !s?.reactions?.includes(c)) && (s.reactions ??= []).push(c);
        o && (c.f ^= Zs), a && d !== null && (d.f & It) === 0 && (c.f ^= It);
      }
      for (i = 0; i < l; i++)
        if (s = n[i], gs(
          /** @type {Derived} */
          s
        ) && zd(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || j !== null && !xn) && Qe(t, Ye);
  }
  return !1;
}
function dh(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !cn?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Je) !== 0 ? dh(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? Qe(s, ht) : (s.f & Ye) !== 0 && Qe(s, vn), pr(
        /** @type {Effect} */
        s
      ));
    }
}
function hh(t) {
  var e = Ze, n = pt, r = bt, i = Y, s = xn, o = cn, a = Se, l = Pt, c = ur, d = t.f;
  Ze = /** @type {null | Value[]} */
  null, pt = 0, bt = null, xn = (d & It) !== 0 && (Pt || !Ur || Y === null), Y = (d & (gn | Qn)) === 0 ? t : null, cn = null, qr(t.ctx), Pt = !1, ur = ++Qi, t.ac !== null && (Uo(() => {
    t.ac.abort(Dr);
  }), t.ac = null);
  try {
    t.f |= $a;
    var h = (
      /** @type {Function} */
      t.fn
    ), u = h(), f = t.deps;
    if (Ze !== null) {
      var p;
      if (ro(t, pt), f !== null && pt > 0)
        for (f.length = pt + Ze.length, p = 0; p < Ze.length; p++)
          f[pt + p] = Ze[p];
      else
        t.deps = f = Ze;
      if (!xn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Je) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = pt; p < f.length; p++)
          (f[p].reactions ??= []).push(t);
    } else f !== null && pt < f.length && (ro(t, pt), f.length = pt);
    if (fs() && bt !== null && !Pt && f !== null && (t.f & (Je | vn | ht)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      bt.length; p++)
        dh(
          bt[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Qi++, bt !== null && (r === null ? r = bt : r.push(.../** @type {Source[]} */
    bt))), (t.f & cr) !== 0 && (t.f ^= cr), u;
  } catch (g) {
    return Fd(g);
  } finally {
    t.f ^= $a, Ze = e, pt = n, bt = r, Y = i, xn = s, cn = o, qr(a), Pt = l, ur = c;
  }
}
function I_(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Lm.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & Je) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ze === null || !Ze.includes(e)) && (Qe(e, vn), (e.f & (It | Zs)) === 0 && (e.f ^= Zs), jd(
    /** @type {Derived} **/
    e
  ), ro(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ro(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      I_(t, n[r]);
}
function Ji(t) {
  var e = t.f;
  if ((e & ln) === 0) {
    Qe(t, Ye);
    var n = j, r = Ur;
    j = t, Ur = !0;
    try {
      (e & _n) !== 0 ? b_(t) : rh(t), nh(t);
      var i = hh(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ch;
      var s;
      Ad && e_ && (t.f & ht) !== 0 && t.deps;
    } finally {
      Ur = r, j = n;
    }
  }
}
async function C_() {
  await Promise.resolve(), mt();
}
function y(t) {
  var e = t.f, n = (e & Je) !== 0;
  if (Y !== null && !Pt) {
    var r = j !== null && (j.f & ln) !== 0;
    if (!r && !cn?.includes(t)) {
      var i = Y.deps;
      if ((Y.f & $a) !== 0)
        t.rv < Qi && (t.rv = Qi, Ze === null && i !== null && i[pt] === t ? pt++ : Ze === null ? Ze = [t] : (!xn || !Ze.includes(t)) && Ze.push(t));
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
    a !== null && (a.f & It) === 0 && (o.f ^= It);
  }
  if (Ir) {
    if (Mn.has(t))
      return Mn.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return ((o.f & Ye) === 0 && o.reactions !== null || fh(o)) && (l = Ll(o)), Mn.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Rt?.has(o))
      return Rt.get(o);
    gs(o) && zd(o);
  }
  if (Rt?.has(t))
    return Rt.get(t);
  if ((t.f & cr) !== 0)
    throw t.v;
  return t.v;
}
function fh(t) {
  if (t.v === je) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Mn.has(e) || (e.f & Je) !== 0 && fh(
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
const T_ = -7169;
function Qe(t, e) {
  t.f = t.f & T_ | e;
}
function Or(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Vt in t)
      za(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Vt in n && za(n);
      }
  }
}
function za(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        za(t[r], e);
      } catch {
      }
    const n = Sl(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Rd(n);
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
const ph = /* @__PURE__ */ new Set(), Ba = /* @__PURE__ */ new Set();
function mh(t, e, n, r = {}) {
  function i(s) {
    if (r.capture || Ri.call(e, s), !s.cancelBubble)
      return Uo(() => n?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Jn(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function io(t, e, n, r, i) {
  var s = { capture: r, passive: i }, o = mh(t, e, n, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ms(() => {
    e.removeEventListener(t, o, s);
  });
}
function ii(t) {
  for (var e = 0; e < t.length; e++)
    ph.add(t[e]);
  for (var n of Ba)
    n(t);
}
let tu = null;
function Ri(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  tu = t;
  var o = 0, a = tu === t && t.__root;
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
    Yi(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = Y, h = j;
    ut(null), Tt(null);
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
      t.__root = e, delete t.currentTarget, ut(d), Tt(h);
    }
  }
}
function _h(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function un(t, e) {
  var n = (
    /** @type {Effect} */
    j
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function W(t, e) {
  var n = (e & Am) !== 0, r = (e & Rm) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (F)
      return un(Q, null), Q;
    i === void 0 && (i = _h(s ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Bt(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Gd ? document.importNode(i, !0) : i.cloneNode(!0)
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
function S_(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (F)
      return un(Q, null), Q;
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        _h(i)
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
function k_(t, e) {
  return /* @__PURE__ */ S_(t, e, "svg");
}
function ke() {
  if (F)
    return un(Q, null), Q;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ct();
  return t.append(e, n), un(e, n), t;
}
function L(t, e) {
  if (F) {
    j.nodes_end = Q, fr();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function A_(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const R_ = [
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
function P_(t) {
  return R_.includes(t);
}
const N_ = {
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
function x_(t) {
  return t = t.toLowerCase(), N_[t] ?? t;
}
const L_ = ["touchstart", "touchmove"];
function O_(t) {
  return L_.includes(t);
}
const D_ = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function M_(t) {
  return D_.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function O(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function gh(t, e) {
  return vh(t, e);
}
function $_(t, e) {
  Va(), e.intro = e.intro ?? !1;
  const n = e.target, r = F, i = Q;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(n)
    ); s && (s.nodeType !== ti || /** @type {Comment} */
    s.data !== kd); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(s);
    if (!s)
      throw Br;
    _t(!0), Be(
      /** @type {Comment} */
      s
    );
    const o = vh(t, { ...e, anchor: s });
    return _t(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Br && console.warn("Failed to hydrate: ", o), e.recover === !1 && qm(), Va(), Qd(n), _t(!1), gh(t, e);
  } finally {
    _t(r), Be(i);
  }
}
const Nr = /* @__PURE__ */ new Map();
function vh(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: o = !0 }) {
  Va();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var u = 0; u < h.length; u++) {
      var f = h[u];
      if (!a.has(f)) {
        a.add(f);
        var p = O_(f);
        e.addEventListener(f, Ri, { passive: p });
        var g = Nr.get(f);
        g === void 0 ? (document.addEventListener(f, Ri, { passive: p }), Nr.set(f, 1)) : Nr.set(f, g + 1);
      }
    }
  };
  l(Tl(ph)), Ba.add(l);
  var c = void 0, d = v_(() => {
    var h = n ?? e.appendChild(Ct());
    return o_(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (u) => {
        if (s) {
          yn({});
          var f = (
            /** @type {ComponentContext} */
            Se
          );
          f.c = s;
        }
        if (i && (r.$$events = i), F && un(
          /** @type {TemplateNode} */
          u,
          null
        ), c = t(u, r) || {}, F && (j.nodes_end = Q, Q === null || Q.nodeType !== ti || /** @type {Comment} */
        Q.data !== Il))
          throw $o(), Br;
        s && bn();
      }
    ), () => {
      for (var u of a) {
        e.removeEventListener(u, Ri);
        var f = (
          /** @type {number} */
          Nr.get(u)
        );
        --f === 0 ? (document.removeEventListener(u, Ri), Nr.delete(u)) : Nr.set(u, f);
      }
      Ba.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return qa.set(c, d), c;
}
let qa = /* @__PURE__ */ new WeakMap();
function F_(t, e) {
  const n = qa.get(t);
  return n ? (qa.delete(t), n(e)) : Promise.resolve();
}
class yh {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Effect>} */
  #e = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Branch>} */
  #r = /* @__PURE__ */ new Map();
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
      ue
    );
    if (this.#t.has(e)) {
      var n = (
        /** @type {Key} */
        this.#t.get(e)
      ), r = this.#e.get(n);
      if (r)
        Ml(r);
      else {
        var i = this.#r.get(n);
        i && (this.#e.set(n, i.effect), this.#r.delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
      }
      for (const [s, o] of this.#t) {
        if (this.#t.delete(s), s === e)
          break;
        const a = this.#r.get(o);
        a && (Fe(a.effect), this.#r.delete(o));
      }
      for (const [s, o] of this.#e) {
        if (s === n) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var c = document.createDocumentFragment();
            ah(o, c), c.append(Ct()), this.#r.set(s, { effect: o, fragment: c });
          } else
            Fe(o);
          this.#e.delete(s);
        };
        this.#i || !r ? Fr(o, a, !1) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (e) => {
    this.#t.delete(e);
    const n = Array.from(this.#t.values());
    for (const [r, i] of this.#r)
      n.includes(r) || (Fe(i.effect), this.#r.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      ue
    ), i = Jd();
    if (n && !this.#e.has(e) && !this.#r.has(e))
      if (i) {
        var s = document.createDocumentFragment(), o = Ct();
        s.append(o), this.#r.set(e, {
          effect: lt(() => n(o)),
          fragment: s
        });
      } else
        this.#e.set(
          e,
          lt(() => n(this.anchor))
        );
    if (this.#t.set(r, e), i) {
      for (const [a, l] of this.#e)
        a === e ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#r)
        a === e ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#l), r.ondiscard(this.#o);
    } else
      F && (this.anchor = Q), this.#l();
  }
}
function vs(t) {
  Se === null && xd(), ni && Se.l !== null ? H_(Se).m.push(t) : ja(() => {
    const e = qt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function U_(t) {
  Se === null && xd(), vs(() => () => qt(t));
}
function H_(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function we(t, e, n = !1) {
  F && fr();
  var r = new yh(t), i = n ? hr : 0;
  function s(o, a) {
    if (F) {
      const c = Ld(t) === Oo;
      if (o === c) {
        var l = to();
        Be(l), r.anchor = l, _t(!1), r.ensure(o, a), _t(!0);
        return;
      }
    }
    r.ensure(o, a);
  }
  ri(() => {
    var o = !1;
    e((a, l = !0) => {
      o = !0, s(l, a);
    }), o || s(!1, null);
  }, i);
}
function Wo(t, e) {
  return e;
}
function W_(t, e, n) {
  for (var r = t.items, i = [], s = e.length, o = 0; o < s; o++)
    Dl(e[o].e, i, !0);
  var a = s > 0 && i.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Qd(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Ht(t, e[0].prev, e[s - 1].next);
  }
  sh(i, () => {
    for (var c = 0; c < s; c++) {
      var d = e[c];
      a || (r.delete(d.k), Ht(t, d.prev, d.next)), Fe(d.e, !a);
    }
  });
}
function si(t, e, n, r, i, s = null) {
  var o = t, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & Td) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = F ? Be(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Bt(c)
    ) : c.appendChild(Ct());
  }
  F && fr();
  var d = null, h = !1, u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ xl(() => {
    var C = n();
    return Cl(C) ? C : C == null ? [] : Tl(C);
  }), p, g;
  function w() {
    V_(
      g,
      p,
      a,
      u,
      o,
      i,
      e,
      r,
      n
    ), s !== null && (p.length === 0 ? d ? Ml(d) : d = lt(() => s(o)) : d !== null && Fr(d, () => {
      d = null;
    }));
  }
  ri(() => {
    g ??= /** @type {Effect} */
    j, p = /** @type {V[]} */
    y(f);
    var C = p.length;
    if (h && C === 0)
      return;
    h = C === 0;
    let T = !1;
    if (F) {
      var k = Ld(o) === Oo;
      k !== (C === 0) && (o = to(), Be(o), _t(!1), T = !0);
    }
    if (F) {
      for (var A = null, D, I = 0; I < C; I++) {
        if (Q.nodeType === ti && /** @type {Comment} */
        Q.data === Il) {
          o = /** @type {Comment} */
          Q, T = !0, _t(!1);
          break;
        }
        var E = p[I], v = r(E, I);
        D = Ga(
          Q,
          a,
          A,
          null,
          E,
          v,
          I,
          i,
          e,
          n
        ), a.items.set(v, D), A = D;
      }
      C > 0 && Be(to());
    }
    if (F)
      C === 0 && s && (d = lt(() => s(o)));
    else if (Jd()) {
      var R = /* @__PURE__ */ new Set(), P = (
        /** @type {Batch} */
        ue
      );
      for (I = 0; I < C; I += 1) {
        E = p[I], v = r(E, I);
        var V = a.items.get(v) ?? u.get(v);
        V ? (e & (xo | Lo)) !== 0 && bh(V, E, I, e) : (D = Ga(
          null,
          a,
          null,
          null,
          E,
          v,
          I,
          i,
          e,
          n,
          !0
        ), u.set(v, D)), R.add(v);
      }
      for (const [M, H] of a.items)
        R.has(M) || P.skipped_effects.add(H.e);
      P.oncommit(w);
    } else
      w();
    T && _t(!0), y(f);
  }), F && (o = Q);
}
function V_(t, e, n, r, i, s, o, a, l) {
  var c = (o & Em) !== 0, d = (o & (xo | Lo)) !== 0, h = e.length, u = n.items, f = n.first, p = f, g, w = null, C, T = [], k = [], A, D, I, E;
  if (c)
    for (E = 0; E < h; E += 1)
      A = e[E], D = a(A, E), I = u.get(D), I !== void 0 && (I.a?.measure(), (C ??= /* @__PURE__ */ new Set()).add(I));
  for (E = 0; E < h; E += 1) {
    if (A = e[E], D = a(A, E), I = u.get(D), I === void 0) {
      var v = r.get(D);
      if (v !== void 0) {
        r.delete(D), u.set(D, v);
        var R = w ? w.next : p;
        Ht(n, w, v), Ht(n, v, R), pa(v, R, i), w = v;
      } else {
        var P = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : i;
        w = Ga(
          P,
          n,
          w,
          w === null ? n.first : w.next,
          A,
          D,
          E,
          s,
          o,
          l
        );
      }
      u.set(D, w), T = [], k = [], p = w.next;
      continue;
    }
    if (d && bh(I, A, E, o), (I.e.f & gt) !== 0 && (Ml(I.e), c && (I.a?.unfix(), (C ??= /* @__PURE__ */ new Set()).delete(I))), I !== p) {
      if (g !== void 0 && g.has(I)) {
        if (T.length < k.length) {
          var V = k[0], M;
          w = V.prev;
          var H = T[0], J = T[T.length - 1];
          for (M = 0; M < T.length; M += 1)
            pa(T[M], V, i);
          for (M = 0; M < k.length; M += 1)
            g.delete(k[M]);
          Ht(n, H.prev, J.next), Ht(n, w, H), Ht(n, J, V), p = V, w = J, E -= 1, T = [], k = [];
        } else
          g.delete(I), pa(I, p, i), Ht(n, I.prev, I.next), Ht(n, I, w === null ? n.first : w.next), Ht(n, w, I), w = I;
        continue;
      }
      for (T = [], k = []; p !== null && p.k !== D; )
        (p.e.f & gt) === 0 && (g ??= /* @__PURE__ */ new Set()).add(p), k.push(p), p = p.next;
      if (p === null)
        continue;
      I = p;
    }
    T.push(I), w = I, p = I.next;
  }
  if (p !== null || g !== void 0) {
    for (var U = g === void 0 ? [] : Tl(g); p !== null; )
      (p.e.f & gt) === 0 && U.push(p), p = p.next;
    var K = U.length;
    if (K > 0) {
      var ae = (o & Td) !== 0 && h === 0 ? i : null;
      if (c) {
        for (E = 0; E < K; E += 1)
          U[E].a?.measure();
        for (E = 0; E < K; E += 1)
          U[E].a?.fix();
      }
      W_(n, U, ae);
    }
  }
  c && Jn(() => {
    if (C !== void 0)
      for (I of C)
        I.a?.apply();
  }), t.first = n.first && n.first.e, t.last = w && w.e;
  for (var X of r.values())
    Fe(X.e);
  r.clear();
}
function bh(t, e, n, r) {
  (r & xo) !== 0 && Kr(t.v, e), (r & Lo) !== 0 ? Kr(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Ga(t, e, n, r, i, s, o, a, l, c, d) {
  var h = (l & xo) !== 0, u = (l & Im) === 0, f = h ? u ? /* @__PURE__ */ Ol(i, !1, !1) : jn(i) : i, p = (l & Lo) === 0 ? o : jn(o), g = {
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
      w.append(t = Ct());
    }
    return g.e = lt(() => a(
      /** @type {Node} */
      t,
      f,
      p,
      c
    ), F), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function pa(t, e, n) {
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
      /* @__PURE__ */ Yt(s)
    );
    i.before(s), s = o;
  }
}
function Ht(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function xe(t, e, n, r, i) {
  F && fr();
  var s = e.$$slots?.[n], o = !1;
  s === !0 && (s = e.children, o = !0), s === void 0 || s(t, o ? () => r : r);
}
function j_(t, e, n, r, i, s) {
  let o = F;
  F && fr();
  var a = null;
  F && Q.nodeType === Hm && (a = /** @type {Element} */
  Q, fr());
  var l = (
    /** @type {TemplateNode} */
    F ? Q : t
  ), c = new yh(l, !1);
  ri(() => {
    const d = e() || null;
    var h = Nm;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (u) => {
      if (d) {
        if (a = F ? (
          /** @type {Element} */
          a
        ) : document.createElementNS(h, d), un(a, a), r) {
          F && M_(d) && a.append(document.createComment(""));
          var f = (
            /** @type {TemplateNode} */
            F ? /* @__PURE__ */ Bt(a) : a.appendChild(Ct())
          );
          F && (f === null ? _t(!1) : Be(f)), r(a, f);
        }
        j.nodes_end = a, u.before(a);
      }
      F && Be(u);
    }), () => {
    };
  }, hr), ms(() => {
  }), o && (_t(!0), Be(l));
}
function Xn(t, e) {
  _s(() => {
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
function z_(t, e) {
  var n = void 0, r;
  ri(() => {
    n !== (n = e()) && (r && (Fe(r), r = null), n && (r = lt(() => {
      _s(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function wh(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = wh(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function B_() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = wh(t)) && (r && (r += " "), r += e);
  return r;
}
function q_(t) {
  return typeof t == "object" ? B_(t) : t ?? "";
}
const nu = [...` 	
\r\f \v\uFEFF`];
function G_(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || nu.includes(r[o - 1])) && (a === r.length || nu.includes(r[a])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(a + 1) : o = a;
        }
  }
  return r === "" ? null : r;
}
function ru(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function ma(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function K_(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, o = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ma)), i && l.push(...Object.keys(i).map(ma));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var u = t[h];
        if (a ? u === "/" && t[h - 1] === "*" && (a = !1) : s ? s === u && (s = !1) : u === "/" && t[h + 1] === "*" ? a = !0 : u === '"' || u === "'" ? s = u : u === "(" ? o++ : u === ")" && o--, !a && s === !1 && o === 0) {
          if (u === ":" && d === -1)
            d = h;
          else if (u === ";" || h === g - 1) {
            if (d !== -1) {
              var f = ma(t.substring(c, d).trim());
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
    return r && (n += ru(r)), i && (n += ru(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Xi(t, e, n, r, i, s) {
  var o = t.__className;
  if (F || o !== n || o === void 0) {
    var a = G_(n, r, s);
    (!F || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var c = !!s[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return s;
}
function _a(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function Y_(t, e, n, r) {
  var i = t.__style;
  if (F || i !== e) {
    var s = K_(e, r);
    (!F || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (_a(t, n?.[0], r[0]), _a(t, n?.[1], r[1], "important")) : _a(t, n, r));
  return r;
}
function Zi(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Cl(e))
      return Xm();
    for (var r of t.options)
      r.selected = e.includes(Fi(r));
    return;
  }
  for (r of t.options) {
    var i = Fi(r);
    if (h_(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function $l(t) {
  var e = new MutationObserver(() => {
    Zi(t, t.__value);
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
  }), ms(() => {
    e.disconnect();
  });
}
function Q_(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet(), i = !0;
  Zd(t, "change", (s) => {
    var o = s ? "[selected]" : ":checked", a;
    if (t.multiple)
      a = [].map.call(t.querySelectorAll(o), Fi);
    else {
      var l = t.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      a = l && Fi(l);
    }
    n(a), ue !== null && r.add(ue);
  }), _s(() => {
    var s = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        Di ?? ue
      );
      if (r.has(o))
        return;
    }
    if (Zi(t, s, i), i && s === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (s = Fi(a), n(s));
    }
    t.__value = s, i = !1;
  }), $l(t);
}
function Fi(t) {
  return "__value" in t ? t.__value : t.value;
}
const Ei = Symbol("class"), Ii = Symbol("style"), Eh = Symbol("is custom element"), Ih = Symbol("is html");
function Ka(t) {
  if (F) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Re(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var i = t.checked;
          Re(t, "checked", null), t.checked = i;
        }
      }
    };
    t.__on_r = n, Jn(n), Xd();
  }
}
function J_(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Re(t, e, n, r) {
  var i = Ch(t);
  F && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = n) && (e === "loading" && (t[Um] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Th(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function X_(t, e, n, r, i = !1, s = !1) {
  if (F && i && t.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      t
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Ka(o);
  }
  var l = Ch(t), c = l[Eh], d = !l[Ih];
  let h = F && c;
  h && _t(!1);
  var u = e || {}, f = t.tagName === "OPTION";
  for (var p in e)
    p in n || (n[p] = null);
  n.class ? n.class = q_(n.class) : n[Ei] && (n.class = null), n[Ii] && (n.style ??= null);
  var g = Th(t);
  for (const I in n) {
    let E = n[I];
    if (f && I === "value" && E == null) {
      t.value = t.__value = "", u[I] = E;
      continue;
    }
    if (I === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Xi(t, w, E, r, e?.[Ei], n[Ei]), u[I] = E, u[Ei] = n[Ei];
      continue;
    }
    if (I === "style") {
      Y_(t, E, e?.[Ii], n[Ii]), u[I] = E, u[Ii] = n[Ii];
      continue;
    }
    var C = u[I];
    if (!(E === C && !(E === void 0 && t.hasAttribute(I)))) {
      u[I] = E;
      var T = I[0] + I[1];
      if (T !== "$$")
        if (T === "on") {
          const v = {}, R = "$$" + I;
          let P = I.slice(2);
          var k = P_(P);
          if (A_(P) && (P = P.slice(0, -7), v.capture = !0), !k && C) {
            if (E != null) continue;
            t.removeEventListener(P, u[R], v), u[R] = null;
          }
          if (E != null)
            if (k)
              t[`__${P}`] = E, ii([P]);
            else {
              let V = function(M) {
                u[I].call(this, M);
              };
              u[R] = mh(P, t, V, v);
            }
          else k && (t[`__${P}`] = void 0);
        } else if (I === "style")
          Re(t, I, E);
        else if (I === "autofocus")
          f_(
            /** @type {HTMLElement} */
            t,
            !!E
          );
        else if (!c && (I === "__value" || I === "value" && E != null))
          t.value = t.__value = E;
        else if (I === "selected" && f)
          J_(
            /** @type {HTMLOptionElement} */
            t,
            E
          );
        else {
          var A = I;
          d || (A = x_(A));
          var D = A === "defaultValue" || A === "defaultChecked";
          if (E == null && !c && !D)
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
          else D || g.includes(A) && (c || typeof E != "string") ? (t[A] = E, A in l && (l[A] = je)) : typeof E != "function" && Re(t, A, E);
        }
    }
  }
  return h && _t(!0), u;
}
function iu(t, e, n = [], r = [], i = [], s, o = !1, a = !1) {
  Vd(i, n, r, (l) => {
    var c = void 0, d = {}, h = t.nodeName === "SELECT", u = !1;
    if (ri(() => {
      var p = e(...l.map(y)), g = X_(
        t,
        c,
        p,
        s,
        o,
        a
      );
      u && h && "value" in p && Zi(
        /** @type {HTMLSelectElement} */
        t,
        p.value
      );
      for (let C of Object.getOwnPropertySymbols(d))
        p[C] || Fe(d[C]);
      for (let C of Object.getOwnPropertySymbols(p)) {
        var w = p[C];
        C.description === xm && (!c || w !== c[C]) && (d[C] && Fe(d[C]), d[C] = lt(() => z_(t, () => w))), g[C] = w;
      }
      c = g;
    }), h) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      _s(() => {
        Zi(
          f,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), $l(f);
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
      [Ih]: t.namespaceURI === Pm
    }
  );
}
var su = /* @__PURE__ */ new Map();
function Th(t) {
  var e = t.getAttribute("is") || t.nodeName, n = su.get(e);
  if (n) return n;
  su.set(e, n = []);
  for (var r, i = t, s = Element.prototype; s !== i; ) {
    r = Rd(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Sl(i);
  }
  return n;
}
function ou(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Zd(t, "input", async (i) => {
    var s = i ? t.defaultValue : t.value;
    if (s = ga(t) ? va(s) : s, n(s), ue !== null && r.add(ue), await C_(), s !== (s = e())) {
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
  qt(e) == null && t.value) && (n(ga(t) ? va(t.value) : t.value), ue !== null && r.add(ue)), Ho(() => {
    var i = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Di ?? ue
      );
      if (r.has(s))
        return;
    }
    ga(t) && i === va(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function ga(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function va(t) {
  return t === "" ? null : +t;
}
function au(t, e) {
  return t === e || t?.[Vt] === e;
}
function Z_(t = {}, e, n, r) {
  return _s(() => {
    var i, s;
    return Ho(() => {
      i = s, s = [], qt(() => {
        t !== n(...s) && (e(t, ...s), i && au(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Jn(() => {
        s && au(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function Sh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    Se
  ), n = e.l.u;
  if (!n) return;
  let r = () => Or(e.s);
  if (t) {
    let i = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ ps(() => {
      let a = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== s[c] && (s[c] = l[c], a = !0);
      return a && i++, i;
    });
    r = () => y(o);
  }
  n.b.length && __(() => {
    lu(e, r), Xs(n.b);
  }), ja(() => {
    const i = qt(() => n.m.map(Mm));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), n.a.length && ja(() => {
    lu(e, r), Xs(n.a);
  });
}
function lu(t, e) {
  if (t.l.s)
    for (const n of t.l.s) y(n);
  e();
}
function Fl(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), Dn;
  const r = qt(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const xr = [];
function eg(t, e) {
  return {
    subscribe: oi(t, e).subscribe
  };
}
function oi(t, e = Dn) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (Dd(t, a) && (t = a, n)) {
      const l = !xr.length;
      for (const c of r)
        c[1](), xr.push(c, t);
      if (l) {
        for (let c = 0; c < xr.length; c += 2)
          xr[c][0](xr[c + 1]);
        xr.length = 0;
      }
    }
  }
  function s(a) {
    i(a(
      /** @type {T} */
      t
    ));
  }
  function o(a, l = Dn) {
    const c = [a, l];
    return r.add(c), r.size === 1 && (n = e(i, s) || Dn), a(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function tg(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return eg(n, (o, a) => {
    let l = !1;
    const c = [];
    let d = 0, h = Dn;
    const u = () => {
      if (d)
        return;
      h();
      const p = e(r ? c[0] : c, o, a);
      s ? o(p) : h = typeof p == "function" ? p : Dn;
    }, f = i.map(
      (p, g) => Fl(
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
      Xs(f), h(), l = !1;
    };
  });
}
function ng(t) {
  let e;
  return Fl(t, (n) => e = n)(), e;
}
let Hs = !1, Ya = Symbol();
function dr(t, e, n) {
  const r = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ Ol(void 0),
    unsubscribe: Dn
  };
  if (r.store !== t && !(Ya in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = Dn;
    else {
      var i = !0;
      r.unsubscribe = Fl(t, (s) => {
        i ? r.source.v = s : N(r.source, s);
      }), i = !1;
    }
  return t && Ya in n ? ng(t) : y(r.source);
}
function Ul() {
  const t = {};
  function e() {
    ms(() => {
      for (var n in t)
        t[n].unsubscribe();
      Yi(t, Ya, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function rg(t) {
  var e = Hs;
  try {
    return Hs = !1, [t(), Hs];
  } finally {
    Hs = e;
  }
}
const ig = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return y(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = j;
      try {
        Tt(t.parent_effect), t.special[e] = wt(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          Sd
        );
      } finally {
        Tt(r);
      }
    }
    return t.special[e](n), Yc(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), Yc(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Ne(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: jn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        j
      )
    },
    ig
  );
}
const sg = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (wi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      wi(i) && (i = i());
      const s = an(i, e);
      if (s && s.set)
        return s.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (wi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = an(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Vt || e === Pl) return !1;
    for (let n of t.props)
      if (wi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (wi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ve(...t) {
  return new Proxy({ props: t }, sg);
}
function wt(t, e, n, r) {
  var i = !ni || (n & Tm) !== 0, s = (n & Sm) !== 0, o = (n & km) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = o ? qt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (s) {
    var h = Vt in t || Pl in t;
    d = an(t, e)?.set ?? (h && e in t ? (k) => t[e] = k : void 0);
  }
  var u, f = !1;
  s ? [u, f] = rg(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e], u === void 0 && r !== void 0 && (u = c(), d && (i && Gm(), d(u)));
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
  }, i && (n & Sd) === 0)
    return p;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, A) {
        return arguments.length > 0 ? ((!i || !A || g || f) && d(A ? p() : k), k) : p();
      })
    );
  }
  var w = !1, C = ((n & Cm) !== 0 ? ps : xl)(() => (w = !1, p()));
  s && y(C);
  var T = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function(k, A) {
      if (arguments.length > 0) {
        const D = A ? y(C) : i && s ? nn(k) : k;
        return N(C, D), w = !0, a !== void 0 && (a = D), k;
      }
      return Ir && w || (T.f & ln) !== 0 ? C.v : y(C);
    })
  );
}
function og(t) {
  return new ag(t);
}
class ag {
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
      var a = /* @__PURE__ */ Ol(o, !1, !1);
      return n.set(s, a), a;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, o) {
          return y(n.get(o) ?? r(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === Pl ? !0 : (y(n.get(o) ?? r(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, a) {
          return N(n.get(o) ?? r(o, a), a), Reflect.set(s, o, a);
        }
      }
    );
    this.#e = (e.hydrate ? $_ : gh)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && mt(), this.#t = i.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || Yi(this, s, {
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
      F_(this.#e);
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
          r !== "default" && (s.name = r), L(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = lg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = Bs(i, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = og({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = g_(() => {
        Ho(() => {
          this.$$r = !0;
          for (const r of Js(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const i = Bs(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Bs(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return Js(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Bs(t, e, n, r) {
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
function lg(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function me(t, e, n, r, i, s) {
  let o = class extends kh {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Js(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Js(e).forEach((a) => {
    Yi(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Bs(a, l, e), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = an(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Yi(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  o, o;
}
const cg = () => {
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
const S = function(t, e) {
  if (!t)
    throw ai(e);
}, ai = function(t) {
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
  for (let r = 0; r < t.length; r++) {
    let i = t.charCodeAt(r);
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
  }
  return e;
}, ug = function(t) {
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
}, Hl = {
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
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : ug(this.decodeStringToByteArray(t, e));
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
        throw new dg();
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
class dg extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Ph = function(t) {
  const e = Rh(t);
  return Hl.encodeByteArray(e, !0);
}, so = function(t) {
  return Ph(t).replace(/\./g, "");
}, oo = function(t) {
  try {
    return Hl.decodeString(t, !0);
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
function hg(t) {
  return Nh(void 0, t);
}
function Nh(t, e) {
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
    !e.hasOwnProperty(n) || !fg(n) || (t[n] = Nh(t[n], e[n]));
  return t;
}
function fg(t) {
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
function pg() {
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
const mg = () => pg().__FIREBASE_DEFAULTS__, _g = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, gg = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && oo(t[1]);
  return e && JSON.parse(e);
}, Wl = () => {
  try {
    return cg() || mg() || _g() || gg();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, xh = (t) => Wl()?.emulatorHosts?.[t], Lh = (t) => {
  const e = xh(t);
  if (!e)
    return;
  const n = e.lastIndexOf(":");
  if (n <= 0 || n + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const r = parseInt(e.substring(n + 1), 10);
  return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
}, Oh = () => Wl()?.config, Dh = (t) => Wl()?.[`_${t}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys {
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
function Cr(t) {
  try {
    return (t.startsWith("http://") || t.startsWith("https://") ? new URL(t).hostname : t).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function Vl(t) {
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
function Mh(t, e) {
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
    so(JSON.stringify(n)),
    so(JSON.stringify(o)),
    ""
  ].join(".");
}
const Ui = {};
function vg() {
  const t = {
    prod: [],
    emulator: []
  };
  for (const e of Object.keys(Ui))
    Ui[e] ? t.emulator.push(e) : t.prod.push(e);
  return t;
}
function yg(t) {
  let e = document.getElementById(t), n = !1;
  return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), { created: n, element: e };
}
let cu = !1;
function jl(t, e) {
  if (typeof window > "u" || typeof document > "u" || !Cr(window.location.host) || Ui[t] === e || Ui[t] || // If already set to use emulator, can't go back to prod.
  cu)
    return;
  Ui[t] = e;
  function n(u) {
    return `__firebase__banner__${u}`;
  }
  const r = "__firebase__banner", s = vg().prod.length > 0;
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
      cu = !0, o();
    }, u;
  }
  function d(u, f) {
    u.setAttribute("id", f), u.innerText = "Learn more", u.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", u.setAttribute("target", "__blank"), u.style.paddingLeft = "5px", u.style.textDecoration = "underline";
  }
  function h() {
    const u = yg(r), f = n("text"), p = document.getElementById(f) || document.createElement("span"), g = n("learnmore"), w = document.getElementById(g) || document.createElement("a"), C = n("preprendIcon"), T = document.getElementById(C) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (u.created) {
      const k = u.element;
      a(k), d(w, g);
      const A = c();
      l(T, C), k.append(T, p, w, A), document.body.appendChild(k);
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
function nt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function zl() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt());
}
function bg() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function wg() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function $h() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Eg() {
  const t = nt();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function Ig() {
  return Ah.NODE_ADMIN === !0;
}
function Cg() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Tg() {
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
const Sg = "FirebaseError";
class wn extends Error {
  constructor(e, n, r) {
    super(n), this.code = e, this.customData = r, this.name = Sg, Object.setPrototypeOf(this, wn.prototype), Error.captureStackTrace && Error.captureStackTrace(this, bs.prototype.create);
  }
}
class bs {
  constructor(e, n, r) {
    this.service = e, this.serviceName = n, this.errors = r;
  }
  create(e, ...n) {
    const r = n[0] || {}, i = `${this.service}/${e}`, s = this.errors[e], o = s ? kg(s, r) : "Error", a = `${this.serviceName}: ${o} (${i}).`;
    return new wn(i, a, r);
  }
}
function kg(t, e) {
  return t.replace(Ag, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const Ag = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function es(t) {
  return JSON.parse(t);
}
function $e(t) {
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
  let e = {}, n = {}, r = {}, i = "";
  try {
    const s = t.split(".");
    e = es(oo(s[0]) || ""), n = es(oo(s[1]) || ""), i = s[2], r = n.d || {}, delete n.d;
  } catch {
  }
  return {
    header: e,
    claims: n,
    data: r,
    signature: i
  };
}, Rg = function(t) {
  const e = Fh(t), n = e.claims;
  return !!n && typeof n == "object" && n.hasOwnProperty("iat");
}, Pg = function(t) {
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
function Qt(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Yr(t, e) {
  if (Object.prototype.hasOwnProperty.call(t, e))
    return t[e];
}
function Qa(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function ao(t, e, n) {
  const r = {};
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (r[i] = e.call(n, t[i], i, t));
  return r;
}
function mr(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i))
      return !1;
    const s = t[i], o = e[i];
    if (uu(s) && uu(o)) {
      if (!mr(s, o))
        return !1;
    } else if (s !== o)
      return !1;
  }
  for (const i of r)
    if (!n.includes(i))
      return !1;
  return !0;
}
function uu(t) {
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
function Tr(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r) ? r.forEach((i) => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function Pi(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach((r) => {
    if (r) {
      const [i, s] = r.split("=");
      e[decodeURIComponent(i)] = decodeURIComponent(s);
    }
  }), e;
}
function Ni(t) {
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
class Ng {
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
function xg(t, e) {
  const n = new Lg(t, e);
  return n.subscribe.bind(n);
}
class Lg {
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
    Og(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: n,
      complete: r
    }, i.next === void 0 && (i.next = ya), i.error === void 0 && (i.error = ya), i.complete === void 0 && (i.complete = ya);
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
function Og(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const n of e)
    if (n in t && typeof t[n] == "function")
      return !0;
  return !1;
}
function ya() {
}
function Vo(t, e) {
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
const Dg = function(t) {
  const e = [];
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let i = t.charCodeAt(r);
    if (i >= 55296 && i <= 56319) {
      const s = i - 55296;
      r++, S(r < t.length, "Surrogate pair missing trail surrogate.");
      const o = t.charCodeAt(r) - 56320;
      i = 65536 + (s << 10) + o;
    }
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : i < 65536 ? (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
  }
  return e;
}, jo = function(t) {
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
function Le(t) {
  return t && t._delegate ? t._delegate : t;
}
class zn {
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
const ir = "[DEFAULT]";
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
class Mg {
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
      const r = new ys();
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
      if (Fg(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: ir });
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
  clearInstance(e = ir) {
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
  isInitialized(e = ir) {
    return this.instances.has(e);
  }
  getOptions(e = ir) {
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
      instanceIdentifier: $g(e),
      options: n
    }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = ir) {
    return this.component ? this.component.multipleInstances ? e : ir : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function $g(t) {
  return t === ir ? void 0 : t;
}
function Fg(t) {
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
class Ug {
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
    const n = new Mg(e, this);
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
var de;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(de || (de = {}));
const Hg = {
  debug: de.DEBUG,
  verbose: de.VERBOSE,
  info: de.INFO,
  warn: de.WARN,
  error: de.ERROR,
  silent: de.SILENT
}, Wg = de.INFO, Vg = {
  [de.DEBUG]: "log",
  [de.VERBOSE]: "log",
  [de.INFO]: "info",
  [de.WARN]: "warn",
  [de.ERROR]: "error"
}, jg = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const r = (/* @__PURE__ */ new Date()).toISOString(), i = Vg[e];
  if (i)
    console[i](`[${r}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class Bl {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Wg, this._logHandler = jg, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in de))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Hg[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, de.DEBUG, ...e), this._logHandler(this, de.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, de.VERBOSE, ...e), this._logHandler(this, de.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, de.INFO, ...e), this._logHandler(this, de.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, de.WARN, ...e), this._logHandler(this, de.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, de.ERROR, ...e), this._logHandler(this, de.ERROR, ...e);
  }
}
const zg = (t, e) => e.some((n) => t instanceof n);
let du, hu;
function Bg() {
  return du || (du = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function qg() {
  return hu || (hu = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Uh = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap(), Hh = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap();
function Gg(t) {
  const e = new Promise((n, r) => {
    const i = () => {
      t.removeEventListener("success", s), t.removeEventListener("error", o);
    }, s = () => {
      n($n(t.result)), i();
    }, o = () => {
      r(t.error), i();
    };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return e.then((n) => {
    n instanceof IDBCursor && Uh.set(n, t);
  }).catch(() => {
  }), ql.set(e, t), e;
}
function Kg(t) {
  if (Ja.has(t))
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
  Ja.set(t, e);
}
let Xa = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Ja.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || Hh.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return $n(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Yg(t) {
  Xa = t(Xa);
}
function Qg(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const r = t.call(wa(this), e, ...n);
    return Hh.set(r, e.sort ? e.sort() : [e]), $n(r);
  } : qg().includes(t) ? function(...e) {
    return t.apply(wa(this), e), $n(Uh.get(this));
  } : function(...e) {
    return $n(t.apply(wa(this), e));
  };
}
function Jg(t) {
  return typeof t == "function" ? Qg(t) : (t instanceof IDBTransaction && Kg(t), zg(t, Bg()) ? new Proxy(t, Xa) : t);
}
function $n(t) {
  if (t instanceof IDBRequest)
    return Gg(t);
  if (ba.has(t))
    return ba.get(t);
  const e = Jg(t);
  return e !== t && (ba.set(t, e), ql.set(e, t)), e;
}
const wa = (t) => ql.get(t);
function Xg(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e), a = $n(o);
  return r && o.addEventListener("upgradeneeded", (l) => {
    r($n(o.result), l.oldVersion, l.newVersion, $n(o.transaction), l);
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
const Zg = ["get", "getKey", "getAll", "getAllKeys", "count"], ev = ["put", "add", "delete", "clear"], Ea = /* @__PURE__ */ new Map();
function fu(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Ea.get(e))
    return Ea.get(e);
  const n = e.replace(/FromIndex$/, ""), r = e !== n, i = ev.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Zg.includes(n))
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
  return Ea.set(e, s), s;
}
Yg((t) => ({
  ...t,
  get: (e, n, r) => fu(e, n) || t.get(e, n, r),
  has: (e, n) => !!fu(e, n) || t.has(e, n)
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
class tv {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (nv(n)) {
        const r = n.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function nv(t) {
  return t.getComponent()?.type === "VERSION";
}
const Za = "@firebase/app", pu = "0.14.5";
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
const hn = new Bl("@firebase/app"), rv = "@firebase/app-compat", iv = "@firebase/analytics-compat", sv = "@firebase/analytics", ov = "@firebase/app-check-compat", av = "@firebase/app-check", lv = "@firebase/auth", cv = "@firebase/auth-compat", uv = "@firebase/database", dv = "@firebase/data-connect", hv = "@firebase/database-compat", fv = "@firebase/functions", pv = "@firebase/functions-compat", mv = "@firebase/installations", _v = "@firebase/installations-compat", gv = "@firebase/messaging", vv = "@firebase/messaging-compat", yv = "@firebase/performance", bv = "@firebase/performance-compat", wv = "@firebase/remote-config", Ev = "@firebase/remote-config-compat", Iv = "@firebase/storage", Cv = "@firebase/storage-compat", Tv = "@firebase/firestore", Sv = "@firebase/ai", kv = "@firebase/firestore-compat", Av = "firebase", Rv = "12.5.0";
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
const el = "[DEFAULT]", Pv = {
  [Za]: "fire-core",
  [rv]: "fire-core-compat",
  [sv]: "fire-analytics",
  [iv]: "fire-analytics-compat",
  [av]: "fire-app-check",
  [ov]: "fire-app-check-compat",
  [lv]: "fire-auth",
  [cv]: "fire-auth-compat",
  [uv]: "fire-rtdb",
  [dv]: "fire-data-connect",
  [hv]: "fire-rtdb-compat",
  [fv]: "fire-fn",
  [pv]: "fire-fn-compat",
  [mv]: "fire-iid",
  [_v]: "fire-iid-compat",
  [gv]: "fire-fcm",
  [vv]: "fire-fcm-compat",
  [yv]: "fire-perf",
  [bv]: "fire-perf-compat",
  [wv]: "fire-rc",
  [Ev]: "fire-rc-compat",
  [Iv]: "fire-gcs",
  [Cv]: "fire-gcs-compat",
  [Tv]: "fire-fst",
  [kv]: "fire-fst-compat",
  [Sv]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [Av]: "fire-js-all"
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
const lo = /* @__PURE__ */ new Map(), Nv = /* @__PURE__ */ new Map(), tl = /* @__PURE__ */ new Map();
function mu(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function _r(t) {
  const e = t.name;
  if (tl.has(e))
    return hn.debug(`There were multiple attempts to register component ${e}.`), !1;
  tl.set(e, t);
  for (const n of lo.values())
    mu(n, t);
  for (const n of Nv.values())
    mu(n, t);
  return !0;
}
function zo(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
function ct(t) {
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
const xv = {
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
}, Fn = new bs("app", "Firebase", xv);
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
class Lv {
  constructor(e, n, r) {
    this._isDeleted = !1, this._options = { ...e }, this._config = { ...n }, this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new zn(
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
      throw Fn.create("app-deleted", { appName: this._name });
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
const Sr = Rv;
function Wh(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = {
    name: el,
    automaticDataCollectionEnabled: !0,
    ...e
  }, i = r.name;
  if (typeof i != "string" || !i)
    throw Fn.create("bad-app-name", {
      appName: String(i)
    });
  if (n || (n = Oh()), !n)
    throw Fn.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = lo.get(i);
  if (s) {
    if (mr(n, s.options) && mr(r, s.config))
      return s;
    throw Fn.create("duplicate-app", { appName: i });
  }
  const o = new Ug(i);
  for (const l of tl.values())
    o.addComponent(l);
  const a = new Lv(n, r, o);
  return lo.set(i, a), a;
}
function Gl(t = el) {
  const e = lo.get(t);
  if (!e && t === el && Oh())
    return Wh();
  if (!e)
    throw Fn.create("no-app", { appName: t });
  return e;
}
function jt(t, e, n) {
  let r = Pv[t] ?? t;
  n && (r += `-${n}`);
  const i = r.match(/\s|\//), s = e.match(/\s|\//);
  if (i || s) {
    const o = [
      `Unable to register library "${r}" with version "${e}":`
    ];
    i && o.push(`library name "${r}" contains illegal characters (whitespace or "/")`), i && s && o.push("and"), s && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), hn.warn(o.join(" "));
    return;
  }
  _r(new zn(
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
const Ov = "firebase-heartbeat-database", Dv = 1, ts = "firebase-heartbeat-store";
let Ia = null;
function Vh() {
  return Ia || (Ia = Xg(Ov, Dv, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          try {
            t.createObjectStore(ts);
          } catch (n) {
            console.warn(n);
          }
      }
    }
  }).catch((t) => {
    throw Fn.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), Ia;
}
async function Mv(t) {
  try {
    const n = (await Vh()).transaction(ts), r = await n.objectStore(ts).get(jh(t));
    return await n.done, r;
  } catch (e) {
    if (e instanceof wn)
      hn.warn(e.message);
    else {
      const n = Fn.create("idb-get", {
        originalErrorMessage: e?.message
      });
      hn.warn(n.message);
    }
  }
}
async function _u(t, e) {
  try {
    const r = (await Vh()).transaction(ts, "readwrite");
    await r.objectStore(ts).put(e, jh(t)), await r.done;
  } catch (n) {
    if (n instanceof wn)
      hn.warn(n.message);
    else {
      const r = Fn.create("idb-set", {
        originalErrorMessage: n?.message
      });
      hn.warn(r.message);
    }
  }
}
function jh(t) {
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
const $v = 1024, Fv = 30;
class Uv {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new Wv(n), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
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
      const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), r = gu();
      if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((i) => i.date === r))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: r, agent: n }), this._heartbeatsCache.heartbeats.length > Fv) {
        const i = Vv(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(i, 1);
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
      const e = gu(), { heartbeatsToSend: n, unsentEntries: r } = Hv(this._heartbeatsCache.heartbeats), i = so(JSON.stringify({ version: 2, heartbeats: n }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
    } catch (e) {
      return hn.warn(e), "";
    }
  }
}
function gu() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Hv(t, e = $v) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if (s.dates.push(i.date), vu(n) > e) {
        s.dates.pop();
        break;
      }
    } else if (n.push({
      agent: i.agent,
      dates: [i.date]
    }), vu(n) > e) {
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
class Wv {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Cg() ? Tg().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await Mv(this.app);
      return n?.heartbeats ? n : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return _u(this.app, {
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
      return _u(this.app, {
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
function vu(t) {
  return so(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
function Vv(t) {
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
function jv(t) {
  _r(new zn(
    "platform-logger",
    (e) => new tv(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), _r(new zn(
    "heartbeat",
    (e) => new Uv(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), jt(Za, pu, t), jt(Za, pu, "esm2020"), jt("fire-js", "");
}
jv("");
var zv = "firebase", Bv = "12.5.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
jt(zv, Bv, "app");
function zh() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const qv = zh, Bh = new bs("auth", "Firebase", zh());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const co = new Bl("@firebase/auth");
function Gv(t, ...e) {
  co.logLevel <= de.WARN && co.warn(`Auth (${Sr}): ${t}`, ...e);
}
function qs(t, ...e) {
  co.logLevel <= de.ERROR && co.error(`Auth (${Sr}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
  throw Kl(t, ...e);
}
function vt(t, ...e) {
  return Kl(t, ...e);
}
function qh(t, e, n) {
  const r = {
    ...qv(),
    [e]: n
  };
  return new bs("auth", "Firebase", r).create(e, {
    appName: t.name
  });
}
function zt(t) {
  return qh(t, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function Kl(t, ...e) {
  if (typeof t != "string") {
    const n = e[0], r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return Bh.create(t, ...e);
}
function x(t, e, ...n) {
  if (!t)
    throw Kl(e, ...n);
}
function rn(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw qs(e), new Error(e);
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
function nl() {
  return typeof self < "u" && self.location?.href || "";
}
function Gh() {
  return yu() === "http:" || yu() === "https:";
}
function yu() {
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
function Kv() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Gh() || wg() || "connection" in navigator) ? navigator.onLine : !0;
}
function Yv() {
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
class ws {
  constructor(e, n) {
    this.shortDelay = e, this.longDelay = n, fn(n > e, "Short delay should be less than long delay!"), this.isMobile = zl() || $h();
  }
  get() {
    return Kv() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
function Yl(t, e) {
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
class Kh {
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
const Qv = {
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
const Jv = [
  "/v1/accounts:signInWithCustomToken",
  "/v1/accounts:signInWithEmailLink",
  "/v1/accounts:signInWithIdp",
  "/v1/accounts:signInWithPassword",
  "/v1/accounts:signInWithPhoneNumber",
  "/v1/token"
  /* Endpoint.TOKEN */
], Xv = new ws(3e4, 6e4);
function ft(t, e) {
  return t.tenantId && !e.tenantId ? {
    ...e,
    tenantId: t.tenantId
  } : e;
}
async function yt(t, e, n, r, i = {}) {
  return Yh(t, i, async () => {
    let s = {}, o = {};
    r && (e === "GET" ? o = r : s = {
      body: JSON.stringify(r)
    });
    const a = Tr({
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
    return bg() || (c.referrerPolicy = "no-referrer"), t.emulatorConfig && Cr(t.emulatorConfig.host) && (c.credentials = "include"), Kh.fetch()(await Qh(t, t.config.apiHost, n, a), c);
  });
}
async function Yh(t, e, n) {
  t._canInitEmulator = !1;
  const r = { ...Qv, ...e };
  try {
    const i = new ey(t), s = await Promise.race([
      n(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw xi(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o))
      return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message, [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw xi(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS")
        throw xi(t, "email-already-in-use", o);
      if (l === "USER_DISABLED")
        throw xi(t, "user-disabled", o);
      const d = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw qh(t, d, c);
      $t(t, d);
    }
  } catch (i) {
    if (i instanceof wn)
      throw i;
    $t(t, "network-request-failed", { message: String(i) });
  }
}
async function Zn(t, e, n, r, i = {}) {
  const s = await yt(t, e, n, r, i);
  return "mfaPendingCredential" in s && $t(t, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
async function Qh(t, e, n, r) {
  const i = `${e}${n}?${r}`, s = t, o = s.config.emulator ? Yl(t.config, i) : `${t.config.apiScheme}://${i}`;
  return Jv.includes(n) && (await s._persistenceManagerAvailable, s._getPersistenceType() === "COOKIE") ? s._getPersistence()._getFinalTarget(o).toString() : o;
}
function Zv(t) {
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
class ey {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((n, r) => {
      this.timer = setTimeout(() => r(vt(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Xv.get());
    });
  }
}
function xi(t, e, n) {
  const r = {
    appName: t.name
  };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = vt(t, e, r);
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
function bu(t) {
  return t !== void 0 && t.getResponse !== void 0;
}
function wu(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class Jh {
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
        return Zv(n.enforcementState);
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
async function ty(t) {
  return (await yt(
    t,
    "GET",
    "/v1/recaptchaParams"
    /* Endpoint.GET_RECAPTCHA_PARAM */
  )).recaptchaSiteKey || "";
}
async function Xh(t, e) {
  return yt(t, "GET", "/v2/recaptchaConfig", ft(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ny(t, e) {
  return yt(t, "POST", "/v1/accounts:delete", e);
}
async function uo(t, e) {
  return yt(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hi(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function ry(t, e = !1) {
  const n = Le(t), r = await n.getIdToken(e), i = Ql(r);
  x(
    i && i.exp && i.auth_time && i.iat,
    n.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof i.firebase == "object" ? i.firebase : void 0, o = s?.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Hi(Ca(i.auth_time)),
    issuedAtTime: Hi(Ca(i.iat)),
    expirationTime: Hi(Ca(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: s?.sign_in_second_factor || null
  };
}
function Ca(t) {
  return Number(t) * 1e3;
}
function Ql(t) {
  const [e, n, r] = t.split(".");
  if (e === void 0 || n === void 0 || r === void 0)
    return qs("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = oo(n);
    return i ? JSON.parse(i) : (qs("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return qs("Caught error parsing JWT payload as JSON", i?.toString()), null;
  }
}
function Eu(t) {
  const e = Ql(t);
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
async function Qr(t, e, n = !1) {
  if (n)
    return e;
  try {
    return await e;
  } catch (r) {
    throw r instanceof wn && iy(r) && t.auth.currentUser === t && await t.auth.signOut(), r;
  }
}
function iy({ code: t }) {
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
class sy {
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
class rl {
  constructor(e, n) {
    this.createdAt = e, this.lastLoginAt = n, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Hi(this.lastLoginAt), this.creationTime = Hi(this.createdAt);
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
async function ho(t) {
  const e = t.auth, n = await t.getIdToken(), r = await Qr(t, uo(e, { idToken: n }));
  x(
    r?.users.length,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const i = r.users[0];
  t._notifyReloadListener(i);
  const s = i.providerUserInfo?.length ? Zh(i.providerUserInfo) : [], o = ay(t.providerData, s), a = t.isAnonymous, l = !(t.email && i.passwordHash) && !o?.length, c = a ? l : !1, d = {
    uid: i.localId,
    displayName: i.displayName || null,
    photoURL: i.photoUrl || null,
    email: i.email || null,
    emailVerified: i.emailVerified || !1,
    phoneNumber: i.phoneNumber || null,
    tenantId: i.tenantId || null,
    providerData: o,
    metadata: new rl(i.createdAt, i.lastLoginAt),
    isAnonymous: c
  };
  Object.assign(t, d);
}
async function oy(t) {
  const e = Le(t);
  await ho(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function ay(t, e) {
  return [...t.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function Zh(t) {
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
async function ly(t, e) {
  const n = await Yh(t, {}, async () => {
    const r = Tr({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: s } = t.config, o = await Qh(t, i, "/v1/token", `key=${s}`), a = await t._getAdditionalHeaders();
    a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: r
    };
    return t.emulatorConfig && Cr(t.emulatorConfig.host) && (l.credentials = "include"), Kh.fetch()(o, l);
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token
  };
}
async function cy(t, e) {
  return yt(t, "POST", "/v2/accounts:revokeToken", ft(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
    const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Eu(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    x(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = Eu(e);
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
    const { accessToken: r, refreshToken: i, expiresIn: s } = await ly(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3;
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n, o = new Hr();
    return r && (x(typeof r == "string", "internal-error", {
      appName: e
    }), o.refreshToken = r), i && (x(typeof i == "string", "internal-error", {
      appName: e
    }), o.accessToken = i), s && (x(typeof s == "number", "internal-error", {
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
    return Object.assign(new Hr(), this.toJSON());
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
function kn(t, e) {
  x(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class Lt {
  constructor({ uid: e, auth: n, stsTokenManager: r, ...i }) {
    this.providerId = "firebase", this.proactiveRefresh = new sy(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = n, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new rl(i.createdAt || void 0, i.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const n = await Qr(this, this.stsTokenManager.getToken(this.auth, e));
    return x(
      n,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== n && (this.accessToken = n, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n;
  }
  getIdTokenResult(e) {
    return ry(this, e);
  }
  reload() {
    return oy(this);
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
    const n = new Lt({
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
    let r = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), n && await ho(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (ct(this.auth.app))
      return Promise.reject(zt(this.auth));
    const e = await this.getIdToken();
    return await Qr(this, ny(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    x(
      h && g,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const w = Hr.fromJSON(this.name, g);
    x(
      typeof h == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), kn(r, e.name), kn(i, e.name), x(
      typeof u == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), x(
      typeof f == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), kn(s, e.name), kn(o, e.name), kn(a, e.name), kn(l, e.name), kn(c, e.name), kn(d, e.name);
    const C = new Lt({
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
    return p && Array.isArray(p) && (C.providerData = p.map((T) => ({ ...T }))), l && (C._redirectEventId = l), C;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new Hr();
    i.updateFromServerResponse(n);
    const s = new Lt({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r
    });
    return await ho(s), s;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, n, r) {
    const i = n.users[0];
    x(
      i.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = i.providerUserInfo !== void 0 ? Zh(i.providerUserInfo) : [], o = !(i.email && i.passwordHash) && !s?.length, a = new Hr();
    a.updateFromIdToken(r);
    const l = new Lt({
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
      metadata: new rl(i.createdAt, i.lastLoginAt),
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
const Iu = /* @__PURE__ */ new Map();
function sn(t) {
  fn(t instanceof Function, "Expected a class definition");
  let e = Iu.get(t);
  return e ? (fn(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), Iu.set(t, e), e);
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
class ef {
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
ef.type = "NONE";
const Cu = ef;
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
function Gs(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Wr {
  constructor(e, n, r) {
    this.persistence = e, this.auth = n, this.userKey = r;
    const { config: i, name: s } = this.auth;
    this.fullUserKey = Gs(this.userKey, i.apiKey, s), this.fullPersistenceKey = Gs("persistence", i.apiKey, s), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e)
      return null;
    if (typeof e == "string") {
      const n = await uo(this.auth, { idToken: e }).catch(() => {
      });
      return n ? Lt._fromGetAccountInfoResponse(this.auth, n, e) : null;
    }
    return Lt._fromJSON(this.auth, e);
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
      return new Wr(sn(Cu), e, r);
    const i = (await Promise.all(n.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let s = i[0] || sn(Cu);
    const o = Gs(r, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const d = await c._get(o);
        if (d) {
          let h;
          if (typeof d == "string") {
            const u = await uo(e, {
              idToken: d
            }).catch(() => {
            });
            if (!u)
              break;
            h = await Lt._fromGetAccountInfoResponse(e, u, d);
          } else
            h = Lt._fromJSON(e, d);
          c !== s && (a = h), s = c;
          break;
        }
      } catch {
      }
    const l = i.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length ? new Wr(s, e, r) : (s = l[0], a && await s._set(o, a.toJSON()), await Promise.all(n.map(async (c) => {
      if (c !== s)
        try {
          await c._remove(o);
        } catch {
        }
    })), new Wr(s, e, r));
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
function Tu(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (sf(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (tf(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (af(e))
    return "Blackberry";
  if (lf(e))
    return "Webos";
  if (nf(e))
    return "Safari";
  if ((e.includes("chrome/") || rf(e)) && !e.includes("edge/"))
    return "Chrome";
  if (of(e))
    return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, r = t.match(n);
    if (r?.length === 2)
      return r[1];
  }
  return "Other";
}
function tf(t = nt()) {
  return /firefox\//i.test(t);
}
function nf(t = nt()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function rf(t = nt()) {
  return /crios\//i.test(t);
}
function sf(t = nt()) {
  return /iemobile/i.test(t);
}
function of(t = nt()) {
  return /android/i.test(t);
}
function af(t = nt()) {
  return /blackberry/i.test(t);
}
function lf(t = nt()) {
  return /webos/i.test(t);
}
function Jl(t = nt()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function uy(t = nt()) {
  return Jl(t) && !!window.navigator?.standalone;
}
function dy() {
  return Eg() && document.documentMode === 10;
}
function cf(t = nt()) {
  return Jl(t) || of(t) || lf(t) || af(t) || /windows phone/i.test(t) || sf(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uf(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = Tu(nt());
      break;
    case "Worker":
      n = `${Tu(nt())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Sr}/${r}`;
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
class hy {
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
async function fy(t, e = {}) {
  return yt(t, "GET", "/v2/passwordPolicy", ft(t, e));
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
const py = 6;
class my {
  constructor(e) {
    const n = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = n.minPasswordLength ?? py, n.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = n.maxPasswordLength), n.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = n.containsLowercaseCharacter), n.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = n.containsUppercaseCharacter), n.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = n.containsNumericCharacter), n.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = n.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
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
class _y {
  constructor(e, n, r, i) {
    this.app = e, this.heartbeatServiceProvider = n, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Su(this), this.idTokenSubscription = new Su(this), this.beforeStateQueue = new hy(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Bh, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion, this._persistenceManagerAvailable = new Promise((s) => this._resolvePersistenceManagerAvailable = s);
  }
  _initializeWithPersistence(e, n) {
    return n && (this._popupRedirectResolver = sn(n)), this._initializationPromise = this.queue(async () => {
      if (!this._deleted && (this.persistenceManager = await Wr.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
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
      const n = await uo(this, { idToken: e }), r = await Lt._fromGetAccountInfoResponse(this, n, e);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", n), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    if (ct(this.app)) {
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
    return x(
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
      await ho(e);
    } catch (n) {
      if (n?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Yv();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (ct(this.app))
      return Promise.reject(zt(this));
    const n = e ? Le(e) : null;
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
    return ct(this.app) ? Promise.reject(zt(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return ct(this.app) ? Promise.reject(zt(this)) : this.queue(async () => {
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
    const e = await fy(this), n = new my(e);
    this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n;
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new bs("auth", "Firebase", e());
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
      this.tenantId != null && (r.tenantId = this.tenantId), await cy(this, r);
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
      const n = e && sn(e) || this._popupRedirectResolver;
      x(
        n,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Wr.create(
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
  registerStateListener(e, n, r, i) {
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
    return x(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = uf(this.config.clientPlatform, this._getFrameworks()));
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
    if (ct(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
    return e?.error && Gv(`Error while retrieving App Check token: ${e.error}`), e?.token;
  }
}
function Jt(t) {
  return Le(t);
}
class Su {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = xg((n) => this.observer = n);
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
let Es = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function gy(t) {
  Es = t;
}
function Xl(t) {
  return Es.loadJS(t);
}
function vy() {
  return Es.recaptchaV2Script;
}
function yy() {
  return Es.recaptchaEnterpriseScript;
}
function by() {
  return Es.gapiScript;
}
function df(t) {
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
const wy = 500, Ey = 6e4, Ws = 1e12;
class Iy {
  constructor(e) {
    this.auth = e, this.counter = Ws, this._widgets = /* @__PURE__ */ new Map();
  }
  render(e, n) {
    const r = this.counter;
    return this._widgets.set(r, new Sy(e, this.auth.name, n || {})), this.counter++, r;
  }
  reset(e) {
    const n = e || Ws;
    this._widgets.get(n)?.delete(), this._widgets.delete(n);
  }
  getResponse(e) {
    const n = e || Ws;
    return this._widgets.get(n)?.getResponse() || "";
  }
  async execute(e) {
    const n = e || Ws;
    return this._widgets.get(n)?.execute(), "";
  }
}
class Cy {
  constructor() {
    this.enterprise = new Ty();
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
class Ty {
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
class Sy {
  constructor(e, n, r) {
    this.params = r, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
      this.execute();
    };
    const i = typeof e == "string" ? document.getElementById(e) : e;
    x(i, "argument-error", { appName: n }), this.container = i, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler);
  }
  getResponse() {
    return this.checkIfDeleted(), this.responseToken;
  }
  delete() {
    this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => {
      this.responseToken = ky(50);
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
      }, Ey);
    }, wy));
  }
  checkIfDeleted() {
    if (this.deleted)
      throw new Error("reCAPTCHA mock was already deleted!");
  }
}
function ky(t) {
  const e = [], n = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < t; r++)
    e.push(n.charAt(Math.floor(Math.random() * n.length)));
  return e.join("");
}
const Ay = "recaptcha-enterprise", Wi = "NO_RECAPTCHA";
class hf {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = Ay, this.auth = Jt(e);
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
        Xh(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            a(new Error("recaptcha Enterprise site key undefined"));
          else {
            const c = new Jh(l);
            return s.tenantId == null ? s._agentRecaptchaConfig = c : s._tenantRecaptchaConfigs[s.tenantId] = c, o(c.siteKey);
          }
        }).catch((l) => {
          a(l);
        });
      });
    }
    function i(s, o, a) {
      const l = window.grecaptcha;
      wu(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(s, { action: e }).then((c) => {
          o(c);
        }).catch(() => {
          o(Wi);
        });
      }) : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting ? new Cy().execute("siteKey", { action: "verify" }) : new Promise((s, o) => {
      r(this.auth).then((a) => {
        if (!n && wu(window.grecaptcha))
          i(a, s, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = yy();
          l.length !== 0 && (l += a), Xl(l).then(() => {
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
async function Ci(t, e, n, r = !1, i = !1) {
  const s = new hf(t);
  let o;
  if (i)
    o = Wi;
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
async function Vr(t, e, n, r, i) {
  if (i === "EMAIL_PASSWORD_PROVIDER")
    if (t._getRecaptchaConfig()?.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
    )) {
      const s = await Ci(
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
          const o = await Ci(
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
      const s = await Ci(t, e, n);
      return r(t, s).catch(async (o) => {
        if (t._getRecaptchaConfig()?.getProviderEnforcementState(
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ) === "AUDIT" && (o.code === "auth/missing-recaptcha-token" || o.code === "auth/invalid-app-credential")) {
          console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);
          const a = await Ci(
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
      const s = await Ci(
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
async function Ry(t) {
  const e = Jt(t), n = await Xh(e, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), r = new Jh(n);
  e.tenantId == null ? e._agentRecaptchaConfig = r : e._tenantRecaptchaConfigs[e.tenantId] = r, r.isAnyProviderEnabled() && new hf(e).verify();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
  const n = zo(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(), s = n.getOptions();
    if (mr(s, e ?? {}))
      return i;
    $t(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: e });
}
function Ny(t, e) {
  const n = e?.persistence || [], r = (Array.isArray(n) ? n : [n]).map(sn);
  e?.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(r, e?.popupRedirectResolver);
}
function xy(t, e, n) {
  const r = Jt(t);
  x(
    /^https?:\/\//.test(e),
    r,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !1, s = ff(e), { host: o, port: a } = Ly(e), l = a === null ? "" : `:${a}`, c = { url: `${s}//${o}${l}/` }, d = Object.freeze({
    host: o,
    port: a,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  });
  if (!r._canInitEmulator) {
    x(
      r.config.emulator && r.emulatorConfig,
      r,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    ), x(
      mr(c, r.config.emulator) && mr(d, r.emulatorConfig),
      r,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    );
    return;
  }
  r.config.emulator = c, r.emulatorConfig = d, r.settings.appVerificationDisabledForTesting = !0, Cr(o) ? (Vl(`${s}//${o}${l}`), jl("Auth", !0)) : Oy();
}
function ff(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function Ly(t) {
  const e = ff(t), n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n)
    return { host: "", port: null };
  const r = n[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: ku(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: ku(o) };
  }
}
function ku(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function Oy() {
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
class Bo {
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
async function Dy(t, e) {
  return yt(t, "POST", "/v1/accounts:signUp", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function My(t, e) {
  return Zn(t, "POST", "/v1/accounts:signInWithPassword", ft(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $y(t, e) {
  return Zn(t, "POST", "/v1/accounts:signInWithEmailLink", ft(t, e));
}
async function Fy(t, e) {
  return Zn(t, "POST", "/v1/accounts:signInWithEmailLink", ft(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns extends Bo {
  /** @internal */
  constructor(e, n, r, i = null) {
    super("password", r), this._email = e, this._password = n, this._tenantId = i;
  }
  /** @internal */
  static _fromEmailAndPassword(e, n) {
    return new ns(
      e,
      n,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, n, r = null) {
    return new ns(e, n, "emailLink", r);
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
        return Vr(
          e,
          n,
          "signInWithPassword",
          My,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return $y(e, {
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
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return Vr(
          e,
          r,
          "signUpPassword",
          Dy,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return Fy(e, {
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
async function jr(t, e) {
  return Zn(t, "POST", "/v1/accounts:signInWithIdp", ft(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Uy = "http://localhost";
class gr extends Bo {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const n = new gr(e.providerId, e.signInMethod);
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
    const n = typeof e == "string" ? JSON.parse(e) : e, { providerId: r, signInMethod: i, ...s } = n;
    if (!r || !i)
      return null;
    const o = new gr(r, i);
    return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return jr(e, n);
  }
  /** @internal */
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return r.idToken = n, jr(e, r);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return n.autoCreate = !1, jr(e, n);
  }
  buildRequest() {
    const e = {
      requestUri: Uy,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = Tr(n);
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
async function Au(t, e) {
  return yt(t, "POST", "/v1/accounts:sendVerificationCode", ft(t, e));
}
async function Hy(t, e) {
  return Zn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ft(t, e));
}
async function Wy(t, e) {
  const n = await Zn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ft(t, e));
  if (n.temporaryProof)
    throw xi(t, "account-exists-with-different-credential", n);
  return n;
}
const Vy = {
  USER_NOT_FOUND: "user-not-found"
  /* AuthErrorCode.USER_DELETED */
};
async function jy(t, e) {
  const n = {
    ...e,
    operation: "REAUTH"
  };
  return Zn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ft(t, n), Vy);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi extends Bo {
  constructor(e) {
    super(
      "phone",
      "phone"
      /* SignInMethod.PHONE */
    ), this.params = e;
  }
  /** @internal */
  static _fromVerification(e, n) {
    return new Vi({ verificationId: e, verificationCode: n });
  }
  /** @internal */
  static _fromTokenResponse(e, n) {
    return new Vi({ phoneNumber: e, temporaryProof: n });
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Hy(e, this._makeVerificationRequest());
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return Wy(e, {
      idToken: n,
      ...this._makeVerificationRequest()
    });
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return jy(e, this._makeVerificationRequest());
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
    return !r && !n && !i && !s ? null : new Vi({
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
function zy(t) {
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
function By(t) {
  const e = Pi(Ni(t)).link, n = e ? Pi(Ni(e)).deep_link_id : null, r = Pi(Ni(t)).deep_link_id;
  return (r ? Pi(Ni(r)).link : null) || r || n || e || t;
}
class Zl {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    const n = Pi(Ni(e)), r = n.apiKey ?? null, i = n.oobCode ?? null, s = zy(n.mode ?? null);
    x(
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
    const n = By(e);
    try {
      return new Zl(n);
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
class li {
  constructor() {
    this.providerId = li.PROVIDER_ID;
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
    return ns._fromEmailAndPassword(e, n);
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
    const r = Zl.parseLink(n);
    return x(
      r,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), ns._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
li.PROVIDER_ID = "password";
li.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
li.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Is extends pf {
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
class An extends Is {
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
    return gr._fromParams({
      providerId: An.PROVIDER_ID,
      signInMethod: An.FACEBOOK_SIGN_IN_METHOD,
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
An.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
An.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn extends Is {
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
    return gr._fromParams({
      providerId: Rn.PROVIDER_ID,
      signInMethod: Rn.GOOGLE_SIGN_IN_METHOD,
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
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r)
      return null;
    try {
      return Rn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Rn.GOOGLE_SIGN_IN_METHOD = "google.com";
Rn.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn extends Is {
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
    return gr._fromParams({
      providerId: Pn.PROVIDER_ID,
      signInMethod: Pn.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Pn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Pn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Pn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Pn.GITHUB_SIGN_IN_METHOD = "github.com";
Pn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn extends Is {
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
    return gr._fromParams({
      providerId: Nn.PROVIDER_ID,
      signInMethod: Nn.TWITTER_SIGN_IN_METHOD,
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
    return Nn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Nn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r)
      return null;
    try {
      return Nn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Nn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Nn.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qy(t, e) {
  return Zn(t, "POST", "/v1/accounts:signUp", ft(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await Lt._fromIdTokenResponse(e, r, i), o = Ru(r);
    return new vr({
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
    const i = Ru(r);
    return new vr({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n
    });
  }
}
function Ru(t) {
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
class fo extends wn {
  constructor(e, n, r, i) {
    super(n.code, n.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, fo.prototype), this.customData = {
      appName: e.name,
      tenantId: e.tenantId ?? void 0,
      _serverResponse: n.customData._serverResponse,
      operationType: r
    };
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new fo(e, n, r, i);
  }
}
function mf(t, e, n, r) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? fo._fromErrorAndOperation(t, s, e, r) : s;
  });
}
async function Gy(t, e, n = !1) {
  const r = await Qr(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return vr._forOperation(t, "link", r);
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
async function Ky(t, e, n = !1) {
  const { auth: r } = t;
  if (ct(r.app))
    return Promise.reject(zt(r));
  const i = "reauthenticate";
  try {
    const s = await Qr(t, mf(r, i, e, t), n);
    x(
      s.idToken,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = Ql(s.idToken);
    x(
      o,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: a } = o;
    return x(
      t.uid === a,
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), vr._forOperation(t, i, s);
  } catch (s) {
    throw s?.code === "auth/user-not-found" && $t(
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
async function _f(t, e, n = !1) {
  if (ct(t.app))
    return Promise.reject(zt(t));
  const r = "signIn", i = await mf(t, r, e), s = await vr._fromIdTokenResponse(t, r, i);
  return n || await t._updateCurrentUser(s.user), s;
}
async function gf(t, e) {
  return _f(Jt(t), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function vf(t) {
  const e = Jt(t);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function yf(t, e, n) {
  if (ct(t.app))
    return Promise.reject(zt(t));
  const r = Jt(t), o = await Vr(
    r,
    {
      returnSecureToken: !0,
      email: e,
      password: n,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    },
    "signUpPassword",
    qy,
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
  ).catch((l) => {
    throw l.code === "auth/password-does-not-meet-requirements" && vf(t), l;
  }), a = await vr._fromIdTokenResponse(r, "signIn", o);
  return await r._updateCurrentUser(a.user), a;
}
function bf(t, e, n) {
  return ct(t.app) ? Promise.reject(zt(t)) : gf(Le(t), li.credential(e, n)).catch(async (r) => {
    throw r.code === "auth/password-does-not-meet-requirements" && vf(t), r;
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
async function Yy(t, e) {
  return yt(t, "POST", "/v1/accounts:update", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ec(t, { displayName: e, photoURL: n }) {
  if (e === void 0 && n === void 0)
    return;
  const r = Le(t), s = {
    idToken: await r.getIdToken(),
    displayName: e,
    photoUrl: n,
    returnSecureToken: !0
  }, o = await Qr(r, Yy(r.auth, s));
  r.displayName = o.displayName || null, r.photoURL = o.photoUrl || null;
  const a = r.providerData.find(
    ({ providerId: l }) => l === "password"
    /* ProviderId.PASSWORD */
  );
  a && (a.displayName = r.displayName, a.photoURL = r.photoURL), await r._updateTokensIfNecessary(o);
}
function Qy(t, e, n, r) {
  return Le(t).onIdTokenChanged(e, n, r);
}
function Jy(t, e, n) {
  return Le(t).beforeAuthStateChanged(e, n);
}
function wf(t, e, n, r) {
  return Le(t).onAuthStateChanged(e, n, r);
}
function Xy(t) {
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
function Pu(t, e) {
  return yt(t, "POST", "/v2/accounts/mfaEnrollment:start", ft(t, e));
}
const po = "__sak";
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
class Ef {
  constructor(e, n) {
    this.storageRetriever = e, this.type = n;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(po, "1"), this.storage.removeItem(po), Promise.resolve(!0)) : Promise.resolve(!1);
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
const Zy = 1e3, eb = 10;
class If extends Ef {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = cf(), this._shouldAllowMigration = !0;
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
    dy() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, eb) : i();
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
    }, Zy);
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
If.type = "LOCAL";
const tb = If;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cf extends Ef {
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
Cf.type = "SESSION";
const Tf = Cf;
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
function nb(t) {
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
class qo {
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
    const r = new qo(e);
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
    const a = Array.from(o).map(async (c) => c(n.origin, s)), l = await nb(a);
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
qo.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tc(t = "", e = 10) {
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
class rb {
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
      const c = tc("", 20);
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
function Pe() {
  return window;
}
function ib(t) {
  Pe().location.href = t;
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
function nc() {
  return typeof Pe().WorkerGlobalScope < "u" && typeof Pe().importScripts == "function";
}
async function sb() {
  if (!navigator?.serviceWorker)
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function ob() {
  return navigator?.serviceWorker?.controller || null;
}
function ab() {
  return nc() ? self : null;
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
const Sf = "firebaseLocalStorageDb", lb = 1, mo = "firebaseLocalStorage", kf = "fbase_key";
class Cs {
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
function Go(t, e) {
  return t.transaction([mo], e ? "readwrite" : "readonly").objectStore(mo);
}
function cb() {
  const t = indexedDB.deleteDatabase(Sf);
  return new Cs(t).toPromise();
}
function il() {
  const t = indexedDB.open(Sf, lb);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const r = t.result;
      try {
        r.createObjectStore(mo, { keyPath: kf });
      } catch (i) {
        n(i);
      }
    }), t.addEventListener("success", async () => {
      const r = t.result;
      r.objectStoreNames.contains(mo) ? e(r) : (r.close(), await cb(), e(await il()));
    });
  });
}
async function Nu(t, e, n) {
  const r = Go(t, !0).put({
    [kf]: e,
    value: n
  });
  return new Cs(r).toPromise();
}
async function ub(t, e) {
  const n = Go(t, !1).get(e), r = await new Cs(n).toPromise();
  return r === void 0 ? null : r.value;
}
function xu(t, e) {
  const n = Go(t, !0).delete(e);
  return new Cs(n).toPromise();
}
const db = 800, hb = 3;
class Af {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await il(), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (; ; )
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > hb)
          throw r;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return nc() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = qo._getInstance(ab()), this.receiver._subscribe("keyChanged", async (e, n) => ({
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
    if (this.activeServiceWorker = await sb(), !this.activeServiceWorker)
      return;
    this.sender = new rb(this.activeServiceWorker);
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
    if (!(!this.sender || !this.activeServiceWorker || ob() !== this.activeServiceWorker))
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
      const e = await il();
      return await Nu(e, po, "1"), await xu(e, po), !0;
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
    return this._withPendingWrite(async () => (await this._withRetries((r) => Nu(r, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const n = await this._withRetries((r) => ub(r, e));
    return this.localCache[e] = n, n;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => xu(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = Go(i, !1).getAll();
      return new Cs(s).toPromise();
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
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), db);
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
Af.type = "LOCAL";
const fb = Af;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lu(t, e) {
  return yt(t, "POST", "/v2/accounts/mfaSignIn:start", ft(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ta = df("rcb"), pb = new ws(3e4, 6e4);
class mb {
  constructor() {
    this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!Pe().grecaptcha?.render;
  }
  load(e, n = "") {
    return x(
      _b(n),
      e,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.shouldResolveImmediately(n) && bu(Pe().grecaptcha) ? Promise.resolve(Pe().grecaptcha) : new Promise((r, i) => {
      const s = Pe().setTimeout(() => {
        i(vt(
          e,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, pb.get());
      Pe()[Ta] = () => {
        Pe().clearTimeout(s), delete Pe()[Ta];
        const a = Pe().grecaptcha;
        if (!a || !bu(a)) {
          i(vt(
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
      const o = `${vy()}?${Tr({
        onload: Ta,
        render: "explicit",
        hl: n
      })}`;
      Xl(o).catch(() => {
        clearTimeout(s), i(vt(
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
    return !!Pe().grecaptcha?.render && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
}
function _b(t) {
  return t.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(t);
}
class gb {
  async load(e) {
    return new Iy(e);
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
const ji = "recaptcha", vb = {
  theme: "light",
  type: "image"
};
class yb {
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
    ...vb
  }) {
    this.parameters = r, this.type = ji, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = /* @__PURE__ */ new Set(), this.renderPromise = null, this.recaptcha = null, this.auth = Jt(e), this.isInvisible = this.parameters.size === "invisible", x(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
    const i = typeof n == "string" ? document.getElementById(n) : n;
    x(
      i,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.container = i, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new gb() : new mb(), this.validateStartingState();
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
      if (this.tokenChangeListeners.forEach((r) => r(n)), typeof e == "function")
        e(n);
      else if (typeof e == "string") {
        const r = Pe()[e];
        typeof r == "function" && r(n);
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
      Gh() && !nc(),
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), await bb(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const e = await ty(this.auth);
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
function bb() {
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
class wb {
  constructor(e, n) {
    this.verificationId = e, this.onConfirmation = n;
  }
  confirm(e) {
    const n = Vi._fromVerification(this.verificationId, e);
    return this.onConfirmation(n);
  }
}
async function Eb(t, e, n) {
  if (ct(t.app))
    return Promise.reject(zt(t));
  const r = Jt(t), i = await Ib(r, e, Le(n));
  return new wb(i, (s) => gf(r, s));
}
async function Ib(t, e, n) {
  if (!t._getRecaptchaConfig())
    try {
      await Ry(t);
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
        x(
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
        return (await Vr(
          t,
          s,
          "mfaSmsEnrollment",
          async (c, d) => {
            if (d.phoneEnrollmentInfo.captchaResponse === Wi) {
              x(
                n?.type === ji,
                c,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const h = await Sa(c, d, n);
              return Pu(c, h);
            }
            return Pu(c, d);
          },
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ).catch((c) => Promise.reject(c))).phoneSessionInfo.sessionInfo;
      } else {
        x(
          i.type === "signin",
          t,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const s = r.multiFactorHint?.uid || r.multiFactorUid;
        x(
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
        return (await Vr(
          t,
          o,
          "mfaSmsSignIn",
          async (d, h) => {
            if (h.phoneSignInInfo.captchaResponse === Wi) {
              x(
                n?.type === ji,
                d,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const u = await Sa(d, h, n);
              return Lu(d, u);
            }
            return Lu(d, h);
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
      return (await Vr(
        t,
        i,
        "sendVerificationCode",
        async (l, c) => {
          if (c.captchaResponse === Wi) {
            x(
              n?.type === ji,
              l,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            const d = await Sa(l, c, n);
            return Au(l, d);
          }
          return Au(l, c);
        },
        "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */
      ).catch((l) => Promise.reject(l))).sessionInfo;
    }
  } finally {
    n?._reset();
  }
}
async function Sa(t, e, n) {
  x(
    n.type === ji,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const r = await n.verify();
  x(
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
function Cb(t, e) {
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
class rc extends Bo {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return jr(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return jr(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return jr(e, this._buildIdpRequest());
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
function Tb(t) {
  return _f(t.auth, new rc(t), t.bypassAuthState);
}
function Sb(t) {
  const { auth: e, user: n } = t;
  return x(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Ky(n, new rc(t), t.bypassAuthState);
}
async function kb(t) {
  const { auth: e, user: n } = t;
  return x(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Gy(n, new rc(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rf {
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
        return Tb;
      case "linkViaPopup":
      case "linkViaRedirect":
        return kb;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Sb;
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
const Ab = new ws(2e3, 1e4);
class Mr extends Rf {
  constructor(e, n, r, i, s) {
    super(e, n, i, s), this.provider = r, this.authWindow = null, this.pollId = null, Mr.currentPopupAction && Mr.currentPopupAction.cancel(), Mr.currentPopupAction = this;
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
    const e = tc();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((n) => {
      this.reject(n);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
      n || this.reject(vt(
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
    this.reject(vt(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Mr.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(vt(
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
      this.pollId = window.setTimeout(e, Ab.get());
    };
    e();
  }
}
Mr.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rb = "pendingRedirect", Ks = /* @__PURE__ */ new Map();
class Pb extends Rf {
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
    let e = Ks.get(this.auth._key());
    if (!e) {
      try {
        const r = await Nb(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Ks.set(this.auth._key(), e);
    }
    return this.bypassAuthState || Ks.set(this.auth._key(), () => Promise.resolve(null)), e();
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
async function Nb(t, e) {
  const n = Ob(e), r = Lb(t);
  if (!await r._isAvailable())
    return !1;
  const i = await r._get(n) === "true";
  return await r._remove(n), i;
}
function xb(t, e) {
  Ks.set(t._key(), e);
}
function Lb(t) {
  return sn(t._redirectPersistence);
}
function Ob(t) {
  return Gs(Rb, t.config.apiKey, t.name);
}
async function Db(t, e, n = !1) {
  if (ct(t.app))
    return Promise.reject(zt(t));
  const r = Jt(t), i = Cb(r, e), o = await new Pb(r, i, n).execute();
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
const Mb = 600 * 1e3;
class $b {
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
    }), this.hasHandledPotentialRedirect || !Fb(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n;
  }
  sendToConsumer(e, n) {
    if (e.error && !Pf(e)) {
      const r = e.error.code?.split("auth/")[1] || "internal-error";
      n.onError(vt(this.auth, r));
    } else
      n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Mb && this.cachedEventUids.clear(), this.cachedEventUids.has(Ou(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Ou(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Ou(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Pf({ type: t, error: e }) {
  return t === "unknown" && e?.code === "auth/no-auth-event";
}
function Fb(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Pf(t);
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
async function Ub(t, e = {}) {
  return yt(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hb = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Wb = /^https?/;
async function Vb(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await Ub(t);
  for (const n of e)
    try {
      if (jb(n))
        return;
    } catch {
    }
  $t(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function jb(t) {
  const e = nl(), { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === r;
  }
  if (!Wb.test(n))
    return !1;
  if (Hb.test(t))
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
const zb = new ws(3e4, 6e4);
function Du() {
  const t = Pe().___jsl;
  if (t?.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let n = 0; n < t.CP.length; n++)
          t.CP[n] = null;
  }
}
function Bb(t) {
  return new Promise((e, n) => {
    function r() {
      Du(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          Du(), n(vt(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: zb.get()
      });
    }
    if (Pe().gapi?.iframes?.Iframe)
      e(gapi.iframes.getContext());
    else if (Pe().gapi?.load)
      r();
    else {
      const i = df("iframefcb");
      return Pe()[i] = () => {
        gapi.load ? r() : n(vt(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Xl(`${by()}?onload=${i}`).catch((s) => n(s));
    }
  }).catch((e) => {
    throw Ys = null, e;
  });
}
let Ys = null;
function qb(t) {
  return Ys = Ys || Bb(t), Ys;
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
const Gb = new ws(5e3, 15e3), Kb = "__/auth/iframe", Yb = "emulator/auth/iframe", Qb = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Jb = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Xb(t) {
  const e = t.config;
  x(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const n = e.emulator ? Yl(e, Yb) : `https://${t.config.authDomain}/${Kb}`, r = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Sr
  }, i = Jb.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${Tr(r).slice(1)}`;
}
async function Zb(t) {
  const e = await qb(t), n = Pe().gapi;
  return x(
    n,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Xb(t),
    messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Qb,
    dontclear: !0
  }, (r) => new Promise(async (i, s) => {
    await r.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = vt(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), a = Pe().setTimeout(() => {
      s(o);
    }, Gb.get());
    function l() {
      Pe().clearTimeout(a), i(r);
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
const ew = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, tw = 500, nw = 600, rw = "_blank", iw = "http://localhost";
class Mu {
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
function sw(t, e, n, r = tw, i = nw) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(), o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = {
    ...ew,
    width: r.toString(),
    height: i.toString(),
    top: s,
    left: o
  }, c = nt().toLowerCase();
  n && (a = rf(c) ? rw : n), tf(c) && (e = e || iw, l.scrollbars = "yes");
  const d = Object.entries(l).reduce((u, [f, p]) => `${u}${f}=${p},`, "");
  if (uy(c) && a !== "_self")
    return ow(e || "", a), new Mu(null);
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
  return new Mu(h);
}
function ow(t, e) {
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
const aw = "__/auth/handler", lw = "emulator/auth/handler", cw = encodeURIComponent("fac");
async function $u(t, e, n, r, i, s) {
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
    redirectUrl: r,
    v: Sr,
    eventId: i
  };
  if (e instanceof pf) {
    e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", Qa(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, h] of Object.entries({}))
      o[d] = h;
  }
  if (e instanceof Is) {
    const d = e.getScopes().filter((h) => h !== "");
    d.length > 0 && (o.scopes = d.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const d of Object.keys(a))
    a[d] === void 0 && delete a[d];
  const l = await t._getAppCheckToken(), c = l ? `#${cw}=${encodeURIComponent(l)}` : "";
  return `${uw(t)}?${Tr(a).slice(1)}${c}`;
}
function uw({ config: t }) {
  return t.emulator ? Yl(t, lw) : `https://${t.authDomain}/${aw}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ka = "webStorageSupport";
class dw {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Tf, this._completeRedirectFn = Db, this._overrideRedirectResult = xb;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, n, r, i) {
    fn(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()");
    const s = await $u(e, n, r, nl(), i);
    return sw(e, s, tc());
  }
  async _openRedirect(e, n, r, i) {
    await this._originValidation(e);
    const s = await $u(e, n, r, nl(), i);
    return ib(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i ? Promise.resolve(i) : (fn(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return this.eventManagers[n] = { promise: r }, r.catch(() => {
      delete this.eventManagers[n];
    }), r;
  }
  async initAndGetManager(e) {
    const n = await Zb(e), r = new $b(e);
    return n.register("authEvent", (i) => (x(
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
    this.iframes[e._key()].send(ka, { type: ka }, (i) => {
      const s = i?.[0]?.[ka];
      s !== void 0 && n(!!s), $t(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const n = e._key();
    return this.originValidationPromises[n] || (this.originValidationPromises[n] = Vb(e)), this.originValidationPromises[n];
  }
  get _shouldInitProactively() {
    return cf() || nf() || Jl();
  }
}
const hw = dw;
var Fu = "@firebase/auth", Uu = "1.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fw {
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
function pw(t) {
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
function mw(t) {
  _r(new zn(
    "auth",
    (e, { options: n }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: o, authDomain: a } = r.options;
      x(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
      const l = {
        apiKey: o,
        authDomain: a,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: uf(t)
      }, c = new _y(r, i, s, l);
      return Ny(c, n), c;
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
  })), _r(new zn(
    "auth-internal",
    (e) => {
      const n = Jt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((r) => new fw(r))(n);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), jt(Fu, Uu, pw(t)), jt(Fu, Uu, "esm2020");
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
const _w = 300, gw = Dh("authIdTokenMaxAge") || _w;
let Hu = null;
const vw = (t) => async (e) => {
  const n = e && await e.getIdTokenResult(), r = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > gw)
    return;
  const i = n?.token;
  Hu !== i && (Hu = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function yw(t = Gl()) {
  const e = zo(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const n = Py(t, {
    popupRedirectResolver: hw,
    persistence: [
      fb,
      tb,
      Tf
    ]
  }), r = Dh("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = vw(s.toString());
      Jy(n, o, () => o(n.currentUser)), Qy(n, (a) => o(a));
    }
  }
  const i = xh("auth");
  return i && xy(n, `http://${i}`), n;
}
function bw() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
gy({
  loadJS(t) {
    return new Promise((e, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", t), r.onload = e, r.onerror = (i) => {
        const s = vt(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        s.customData = i, n(s);
      }, r.type = "text/javascript", r.charset = "UTF-8", bw().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
mw(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const Wu = "@firebase/database", Vu = "1.1.0";
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
let Nf = "";
function ww(t) {
  Nf = t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
    n == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), $e(n));
  }
  /**
   * @returns The value that was stored under this key, or null
   */
  get(e) {
    const n = this.domStorage_.getItem(this.prefixedName_(e));
    return n == null ? null : es(n);
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
class Iw {
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
const xf = function(t) {
  try {
    if (typeof window < "u" && typeof window[t] < "u") {
      const e = window[t];
      return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new Ew(e);
    }
  } catch {
  }
  return new Iw();
}, lr = xf("localStorage"), Cw = xf("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zr = new Bl("@firebase/database"), Tw = /* @__PURE__ */ (function() {
  let t = 1;
  return function() {
    return t++;
  };
})(), Lf = function(t) {
  const e = Dg(t), n = new Ng();
  n.update(e);
  const r = n.digest();
  return Hl.encodeByteArray(r);
}, Ts = function(...t) {
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) || r && typeof r == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof r.length == "number" ? e += Ts.apply(null, r) : typeof r == "object" ? e += $e(r) : e += r, e += " ";
  }
  return e;
};
let zi = null, ju = !0;
const Sw = function(t, e) {
  S(!0, "Can't turn on custom loggers persistently."), zr.logLevel = de.VERBOSE, zi = zr.log.bind(zr);
}, ze = function(...t) {
  if (ju === !0 && (ju = !1, zi === null && Cw.get("logging_enabled") === !0 && Sw()), zi) {
    const e = Ts.apply(null, t);
    zi(e);
  }
}, Ss = function(t) {
  return function(...e) {
    ze(t, ...e);
  };
}, sl = function(...t) {
  const e = "FIREBASE INTERNAL ERROR: " + Ts(...t);
  zr.error(e);
}, pn = function(...t) {
  const e = `FIREBASE FATAL ERROR: ${Ts(...t)}`;
  throw zr.error(e), new Error(e);
}, tt = function(...t) {
  const e = "FIREBASE WARNING: " + Ts(...t);
  zr.warn(e);
}, kw = function() {
  typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
}, ic = function(t) {
  return typeof t == "number" && (t !== t || // NaN
  t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY);
}, Aw = function(t) {
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
}, yr = "[MIN_NAME]", Bn = "[MAX_NAME]", kr = function(t, e) {
  if (t === e)
    return 0;
  if (t === yr || e === Bn)
    return -1;
  if (e === yr || t === Bn)
    return 1;
  {
    const n = zu(t), r = zu(e);
    return n !== null ? r !== null ? n - r === 0 ? t.length - e.length : n - r : -1 : r !== null ? 1 : t < e ? -1 : 1;
  }
}, Rw = function(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}, Ti = function(t, e) {
  if (e && t in e)
    return e[t];
  throw new Error("Missing required key (" + t + ") in object: " + $e(e));
}, sc = function(t) {
  if (typeof t != "object" || t === null)
    return $e(t);
  const e = [];
  for (const r in t)
    e.push(r);
  e.sort();
  let n = "{";
  for (let r = 0; r < e.length; r++)
    r !== 0 && (n += ","), n += $e(e[r]), n += ":", n += sc(t[e[r]]);
  return n += "}", n;
}, Of = function(t, e) {
  const n = t.length;
  if (n <= e)
    return [t];
  const r = [];
  for (let i = 0; i < n; i += e)
    i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
  return r;
};
function qe(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e(n, t[n]);
}
const Df = function(t) {
  S(!ic(t), "Invalid JSON number");
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
}, Pw = function() {
  return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href));
}, Nw = function() {
  return typeof Windows == "object" && typeof Windows.UI == "object";
};
function xw(t, e) {
  let n = "Unknown Error";
  t === "too_big" ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : t === "permission_denied" ? n = "Client doesn't have permission to access the desired data." : t === "unavailable" && (n = "The service is unavailable");
  const r = new Error(t + " at " + e._path.toString() + ": " + n);
  return r.code = t.toUpperCase(), r;
}
const Lw = new RegExp("^-?(0*)\\d{1,10}$"), Ow = -2147483648, Dw = 2147483647, zu = function(t) {
  if (Lw.test(t)) {
    const e = Number(t);
    if (e >= Ow && e <= Dw)
      return e;
  }
  return null;
}, ci = function(t) {
  try {
    t();
  } catch (e) {
    setTimeout(() => {
      const n = e.stack || "";
      throw tt("Exception was thrown by user callback.", n), e;
    }, Math.floor(0));
  }
}, Mw = function() {
  return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
}, Bi = function(t, e) {
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
class $w {
  constructor(e, n) {
    this.appCheckProvider = n, this.appName = e.name, ct(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken), this.appCheck = n?.getImmediate({ optional: !0 }), this.appCheck || n?.get().then((r) => this.appCheck = r);
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
    tt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`);
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
class Fw {
  constructor(e, n, r) {
    this.appName_ = e, this.firebaseOptions_ = n, this.authProvider_ = r, this.auth_ = null, this.auth_ = r.getImmediate({ optional: !0 }), this.auth_ || r.onInit((i) => this.auth_ = i);
  }
  getToken(e) {
    return this.auth_ ? this.auth_.getToken(e).catch((n) => n && n.code === "auth/token-not-initialized" ? (ze("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(n)) : new Promise((n, r) => {
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
    "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', tt(e);
  }
}
class Qs {
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
Qs.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oc = "5", Mf = "v", $f = "s", Ff = "r", Uf = "f", Hf = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/, Wf = "ls", Vf = "p", ol = "ac", jf = "websocket", zf = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bf {
  /**
   * @param host - Hostname portion of the url for the repo
   * @param secure - Whether or not this repo is accessed over ssl
   * @param namespace - The namespace represented by the repo
   * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
   * @param nodeAdmin - Whether this instance uses Admin SDK credentials
   * @param persistenceKey - Override the default session persistence storage key
   */
  constructor(e, n, r, i, s = !1, o = "", a = !1, l = !1, c = null) {
    this.secure = n, this.namespace = r, this.webSocketOnly = i, this.nodeAdmin = s, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this.isUsingEmulator = l, this.emulatorOptions = c, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = lr.get("host:" + e) || this._host;
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
    e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && lr.set("host:" + this._host, this.internalHost));
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
function Uw(t) {
  return t.host !== t.internalHost || t.isCustomHost() || t.includeNamespaceInQueryParams;
}
function qf(t, e, n) {
  S(typeof e == "string", "typeof type must == string"), S(typeof n == "object", "typeof params must == object");
  let r;
  if (e === jf)
    r = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
  else if (e === zf)
    r = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
  else
    throw new Error("Unknown connection type: " + e);
  Uw(t) && (n.ns = t.namespace);
  const i = [];
  return qe(n, (s, o) => {
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
class Hw {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, n = 1) {
    Qt(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += n;
  }
  get() {
    return hg(this.counters_);
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
const Aa = {}, Ra = {};
function ac(t) {
  const e = t.toString();
  return Aa[e] || (Aa[e] = new Hw()), Aa[e];
}
function Ww(t, e) {
  const n = t.toString();
  return Ra[n] || (Ra[n] = e()), Ra[n];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
        r[i] && ci(() => {
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
const Bu = "start", jw = "close", zw = "pLPCommand", Bw = "pRTLPCB", Gf = "id", Kf = "pw", Yf = "ser", qw = "cb", Gw = "seg", Kw = "ts", Yw = "d", Qw = "dframe", Qf = 1870, Jf = 30, Jw = Qf - Jf, Xw = 25e3, Zw = 3e4;
class $r {
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
    this.connId = e, this.repoInfo = n, this.applicationId = r, this.appCheckToken = i, this.authToken = s, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = Ss(e), this.stats_ = ac(n), this.urlFn = (l) => (this.appCheckToken && (l[ol] = this.appCheckToken), qf(n, zf, l));
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.curSegmentNum = 0, this.onDisconnect_ = n, this.myPacketOrderer = new Vw(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(() => {
      this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null;
    }, Math.floor(Zw)), Aw(() => {
      if (this.isClosed_)
        return;
      this.scriptTagHolder = new lc((...s) => {
        const [o, a, l, c, d] = s;
        if (this.incrementIncomingBytes_(s), !!this.scriptTagHolder)
          if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, o === Bu)
            this.id = a, this.password = l;
          else if (o === jw)
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
      r[Bu] = "t", r[Yf] = Math.floor(Math.random() * 1e8), this.scriptTagHolder.uniqueCallbackIdentifier && (r[qw] = this.scriptTagHolder.uniqueCallbackIdentifier), r[Mf] = oc, this.transportSessionId && (r[$f] = this.transportSessionId), this.lastSessionId && (r[Wf] = this.lastSessionId), this.applicationId && (r[Vf] = this.applicationId), this.appCheckToken && (r[ol] = this.appCheckToken), typeof location < "u" && location.hostname && Hf.test(location.hostname) && (r[Ff] = Uf);
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
    $r.forceAllow_ = !0;
  }
  /**
   * Forces longpolling to not be considered as a potential transport
   */
  static forceDisallow() {
    $r.forceDisallow_ = !0;
  }
  // Static method, use string literal so it can be accessed in a generic way
  static isAvailable() {
    return $r.forceAllow_ ? !0 : !$r.forceDisallow_ && typeof document < "u" && document.createElement != null && !Pw() && !Nw();
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
    const n = $e(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const r = Ph(n), i = Of(r, Jw);
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
    r[Qw] = "t", r[Gf] = e, r[Kf] = n, this.myDisconnFrame.src = this.urlFn(r), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
  }
  /**
   * Used to track the bytes received by this client
   */
  incrementIncomingBytes_(e) {
    const n = $e(e).length;
    this.bytesReceived += n, this.stats_.incrementCounter("bytes_received", n);
  }
}
class lc {
  /**
   * @param commandCB - The callback to be called when control commands are received from the server.
   * @param onMessageCB - The callback to be triggered when responses arrive from the server.
   * @param onDisconnect - The callback to be triggered when this tag holder is closed
   * @param urlFn - A function that provides the URL of the endpoint to send data to.
   */
  constructor(e, n, r, i) {
    this.onDisconnect = r, this.urlFn = i, this.outstandingRequests = /* @__PURE__ */ new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(Math.random() * 1e8), this.sendNewPolls = !0;
    {
      this.uniqueCallbackIdentifier = Tw(), window[zw + this.uniqueCallbackIdentifier] = e, window[Bw + this.uniqueCallbackIdentifier] = n, this.myIFrame = lc.createIFrame_();
      let s = "";
      this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (s = '<script>document.domain="' + document.domain + '";<\/script>');
      const o = "<html><body>" + s + "</body></html>";
      try {
        this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close();
      } catch (a) {
        ze("frame writing exception"), a.stack && ze(a.stack), ze(a);
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
        e.contentWindow.document || ze("No IE domain setting required");
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
      e[Gf] = this.myID, e[Kf] = this.myPW, e[Yf] = this.currentSerial;
      let n = this.urlFn(e), r = "", i = 0;
      for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + Jf + r.length <= Qf; ) {
        const o = this.pendingSegs.shift();
        r = r + "&" + Gw + i + "=" + o.seg + "&" + Kw + i + "=" + o.ts + "&" + Yw + i + "=" + o.d, i++;
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
    }, i = setTimeout(r, Math.floor(Xw)), s = () => {
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
          ze("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close();
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
const e1 = 16384, t1 = 45e3;
let _o = null;
typeof MozWebSocket < "u" ? _o = MozWebSocket : typeof WebSocket < "u" && (_o = WebSocket);
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
  constructor(e, n, r, i, s, o, a) {
    this.connId = e, this.applicationId = r, this.appCheckToken = i, this.authToken = s, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = Ss(this.connId), this.stats_ = ac(n), this.connURL = Nt.connectionURL_(n, o, a, i, r), this.nodeAdmin = n.nodeAdmin;
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
    return o[Mf] = oc, typeof location < "u" && location.hostname && Hf.test(location.hostname) && (o[Ff] = Uf), n && (o[$f] = n), r && (o[Wf] = r), i && (o[ol] = i), s && (o[Vf] = s), qf(e, jf, o);
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.onDisconnect = n, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, lr.set("previous_websocket_failure", !0);
    try {
      let r;
      Ig(), this.mySock = new _o(this.connURL, [], r);
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
    Nt.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < "u" && navigator.userAgent) {
      const n = /Android ([0-9]{0,}\.[0-9]{0,})/, r = navigator.userAgent.match(n);
      r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0);
    }
    return !e && _o !== null && !Nt.forceDisallow_;
  }
  /**
   * Returns true if we previously failed to connect with this transport.
   */
  static previouslyFailed() {
    return lr.isInMemoryStorage || lr.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    lr.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if (this.frames.push(e), this.frames.length === this.totalFrames) {
      const n = this.frames.join("");
      this.frames = null;
      const r = es(n);
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
    if (S(this.frames === null, "We already have a frame buffer"), e.length <= 6) {
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
    const n = $e(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const r = Of(n, e1);
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
    }, Math.floor(t1));
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
class rs {
  static get ALL_TRANSPORTS() {
    return [$r, Nt];
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
    let r = n && !Nt.previouslyFailed();
    if (e.webSocketOnly && (n || tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), r = !0), r)
      this.transports_ = [Nt];
    else {
      const i = this.transports_ = [];
      for (const s of rs.ALL_TRANSPORTS)
        s && s.isAvailable() && i.push(s);
      rs.globalTransportInitialized_ = !0;
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
rs.globalTransportInitialized_ = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n1 = 6e4, r1 = 5e3, i1 = 10 * 1024, s1 = 100 * 1024, Pa = "t", qu = "d", o1 = "s", Gu = "r", a1 = "e", Ku = "o", Yu = "a", Qu = "n", Ju = "p", l1 = "h";
class c1 {
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
    this.id = e, this.repoInfo_ = n, this.applicationId_ = r, this.appCheckToken_ = i, this.authToken_ = s, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = l, this.onKill_ = c, this.lastSessionId = d, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = Ss("c:" + this.id + ":"), this.transportManager_ = new rs(n), this.log_("Connection created"), this.start_();
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
    i > 0 && (this.healthyTimeout_ = Bi(() => {
      this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > s1 ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > i1 ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()));
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
    if (Pa in e) {
      const n = e[Pa];
      n === Yu ? this.upgradeIfSecondaryHealthy_() : n === Gu ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : n === Ku && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const n = Ti("t", e), r = Ti("d", e);
    if (n === "c")
      this.onSecondaryControl_(r);
    else if (n === "d")
      this.pendingDataMessages.push(r);
    else
      throw new Error("Unknown protocol layer: " + n);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({ t: "c", d: { t: Ju, d: {} } }));
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({ t: "c", d: { t: Yu, d: {} } }), this.log_("Ending transmission on primary"), this.conn_.send({ t: "c", d: { t: Qu, d: {} } }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(e) {
    const n = Ti("t", e), r = Ti("d", e);
    n === "c" ? this.onControl_(r) : n === "d" && this.onDataMessage_(r);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const n = Ti(Pa, e);
    if (qu in e) {
      const r = e[qu];
      if (n === l1) {
        const i = {
          ...r
        };
        this.repoInfo_.isUsingEmulator && (i.h = this.repoInfo_.host), this.onHandshake_(i);
      } else if (n === Qu) {
        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
        for (let i = 0; i < this.pendingDataMessages.length; ++i)
          this.onDataMessage_(this.pendingDataMessages[i]);
        this.pendingDataMessages = [], this.tryCleanupConnection();
      } else n === o1 ? this.onConnectionShutdown_(r) : n === Gu ? this.onReset_(r) : n === a1 ? sl("Server Error: " + r) : n === Ku ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : sl("Unknown control packet command: " + n);
    }
  }
  /**
   * @param handshake - The handshake data returned from the server
   */
  onHandshake_(e) {
    const n = e.ts, r = e.v, i = e.h;
    this.sessionId = e.s, this.repoInfo_.host = i, this.state_ === 0 && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, n), oc !== r && tt("Protocol version mismatch detected"), this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.secondaryConn_), r = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(n, r), Bi(() => {
      this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close());
    }, Math.floor(n1));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, this.state_ === 1 ? this.close() : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, n) {
    this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(n, this.sessionId), this.onReady_ = null), this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : Bi(() => {
      this.sendPingOnPrimaryIfNecessary_();
    }, Math.floor(r1));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."), this.sendData_({ t: "c", d: { t: Ju, d: {} } }));
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
    this.conn_ = null, !e && this.state_ === 0 ? (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (lr.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."), this.close();
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
class Xf {
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
class Zf {
  constructor(e) {
    this.allowedEvents_ = e, this.listeners_ = {}, S(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
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
    S(this.allowedEvents_.find((n) => n === e), "Unknown event: " + e);
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
class go extends Zf {
  static getInstance() {
    return new go();
  }
  constructor() {
    super(["online"]), this.online_ = !0, typeof window < "u" && typeof window.addEventListener < "u" && !zl() && (window.addEventListener("online", () => {
      this.online_ || (this.online_ = !0, this.trigger("online", !0));
    }, !1), window.addEventListener("offline", () => {
      this.online_ && (this.online_ = !1, this.trigger("online", !1));
    }, !1));
  }
  getInitialEvent(e) {
    return S(e === "online", "Unknown event type: " + e), [this.online_];
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
const Xu = 32, Zu = 768;
class oe {
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
function ne() {
  return new oe("");
}
function B(t) {
  return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_];
}
function qn(t) {
  return t.pieces_.length - t.pieceNum_;
}
function ge(t) {
  let e = t.pieceNum_;
  return e < t.pieces_.length && e++, new oe(t.pieces_, e);
}
function cc(t) {
  return t.pieceNum_ < t.pieces_.length ? t.pieces_[t.pieces_.length - 1] : null;
}
function u1(t) {
  let e = "";
  for (let n = t.pieceNum_; n < t.pieces_.length; n++)
    t.pieces_[n] !== "" && (e += "/" + encodeURIComponent(String(t.pieces_[n])));
  return e || "/";
}
function is(t, e = 0) {
  return t.pieces_.slice(t.pieceNum_ + e);
}
function ep(t) {
  if (t.pieceNum_ >= t.pieces_.length)
    return null;
  const e = [];
  for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++)
    e.push(t.pieces_[n]);
  return new oe(e, 0);
}
function Te(t, e) {
  const n = [];
  for (let r = t.pieceNum_; r < t.pieces_.length; r++)
    n.push(t.pieces_[r]);
  if (e instanceof oe)
    for (let r = e.pieceNum_; r < e.pieces_.length; r++)
      n.push(e.pieces_[r]);
  else {
    const r = e.split("/");
    for (let i = 0; i < r.length; i++)
      r[i].length > 0 && n.push(r[i]);
  }
  return new oe(n, 0);
}
function q(t) {
  return t.pieceNum_ >= t.pieces_.length;
}
function et(t, e) {
  const n = B(t), r = B(e);
  if (n === null)
    return e;
  if (n === r)
    return et(ge(t), ge(e));
  throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")");
}
function d1(t, e) {
  const n = is(t, 0), r = is(e, 0);
  for (let i = 0; i < n.length && i < r.length; i++) {
    const s = kr(n[i], r[i]);
    if (s !== 0)
      return s;
  }
  return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
}
function uc(t, e) {
  if (qn(t) !== qn(e))
    return !1;
  for (let n = t.pieceNum_, r = e.pieceNum_; n <= t.pieces_.length; n++, r++)
    if (t.pieces_[n] !== e.pieces_[r])
      return !1;
  return !0;
}
function Et(t, e) {
  let n = t.pieceNum_, r = e.pieceNum_;
  if (qn(t) > qn(e))
    return !1;
  for (; n < t.pieces_.length; ) {
    if (t.pieces_[n] !== e.pieces_[r])
      return !1;
    ++n, ++r;
  }
  return !0;
}
class h1 {
  /**
   * @param path - Initial Path.
   * @param errorPrefix_ - Prefix for any error messages.
   */
  constructor(e, n) {
    this.errorPrefix_ = n, this.parts_ = is(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
    for (let r = 0; r < this.parts_.length; r++)
      this.byteLength_ += jo(this.parts_[r]);
    tp(this);
  }
}
function f1(t, e) {
  t.parts_.length > 0 && (t.byteLength_ += 1), t.parts_.push(e), t.byteLength_ += jo(e), tp(t);
}
function p1(t) {
  const e = t.parts_.pop();
  t.byteLength_ -= jo(e), t.parts_.length > 0 && (t.byteLength_ -= 1);
}
function tp(t) {
  if (t.byteLength_ > Zu)
    throw new Error(t.errorPrefix_ + "has a key path longer than " + Zu + " bytes (" + t.byteLength_ + ").");
  if (t.parts_.length > Xu)
    throw new Error(t.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Xu + ") or object contains a cycle " + sr(t));
}
function sr(t) {
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
class dc extends Zf {
  static getInstance() {
    return new dc();
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
    return S(e === "visible", "Unknown event type: " + e), [this.visible_];
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
const Si = 1e3, m1 = 300 * 1e3, ed = 30 * 1e3, _1 = 1.3, g1 = 3e4, v1 = "server_kill", td = 3;
class dn extends Xf {
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param applicationId_ - The Firebase App ID for this project
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, r, i, s, o, a, l) {
    if (super(), this.repoInfo_ = e, this.applicationId_ = n, this.onDataUpdate_ = r, this.onConnectStatus_ = i, this.onServerInfoUpdate_ = s, this.authTokenProvider_ = o, this.appCheckTokenProvider_ = a, this.authOverride_ = l, this.id = dn.nextPersistentConnectionId_++, this.log_ = Ss("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = /* @__PURE__ */ new Map(), this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = Si, this.maxReconnectDelay_ = m1, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, l)
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    dc.getInstance().on("visible", this.onVisible_, this), e.host.indexOf("fblocal") === -1 && go.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, n, r) {
    const i = ++this.requestNumber_, s = { r: i, a: e, b: n };
    this.log_($e(s)), S(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(s), r && (this.requestCBHash_[i] = r);
  }
  get(e) {
    this.initConnection_();
    const n = new ys(), i = {
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
    this.log_("Listen called for " + o + " " + s), this.listens.has(o) || this.listens.set(o, /* @__PURE__ */ new Map()), S(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), S(!this.listens.get(o).has(s), "listen() called twice for same path/queryId.");
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
      dn.warnOnListenWarnings_(l, n), (this.listens.get(r) && this.listens.get(r).get(i)) === e && (this.log_("listen response", a), c !== "ok" && this.removeListen_(r, i), e.onComplete && e.onComplete(c, l));
    });
  }
  static warnOnListenWarnings_(e, n) {
    if (e && typeof e == "object" && Qt(e, "w")) {
      const r = Yr(e, "w");
      if (Array.isArray(r) && ~r.indexOf("no_index")) {
        const i = '".indexOn": "' + n._queryParams.getIndex().toString() + '"', s = n._path.toString();
        tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`);
      }
    }
  }
  refreshAuthToken(e) {
    this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, () => {
    }), this.reduceReconnectDelayIfAdminCredential_(e);
  }
  reduceReconnectDelayIfAdminCredential_(e) {
    (e && e.length === 40 || Pg(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = ed);
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
      const e = this.authToken_, n = Rg(e) ? "auth" : "gauth", r = { cred: e };
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
    this.log_("Unlisten called for " + r + " " + i), S(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(r, i) && this.connected_ && this.sendUnlisten_(r, i, e._queryObject, n);
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
      this.log_("from server: " + $e(e));
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
    ) : e === "c" ? this.onListenRevoked_(n.p, n.q) : e === "ac" ? this.onAuthRevoked_(n.s, n.d) : e === "apc" ? this.onAppCheckRevoked_(n.s, n.d) : e === "sd" ? this.onSecurityDebugPacket_(n) : sl("Unrecognized action received from server: " + $e(e) + `
Are you using the latest client?`);
  }
  onReady_(e, n) {
    this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (/* @__PURE__ */ new Date()).getTime(), this.handleTimestamp_(e), this.lastSessionId = n, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0);
  }
  scheduleConnect_(e) {
    S(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(() => {
      this.establishConnectionTimer_ = null, this.establishConnection_();
    }, Math.floor(e));
  }
  initConnection_() {
    !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
  }
  onVisible_(e) {
    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = Si, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
  }
  onOnline_(e) {
    e ? (this.log_("Browser went online."), this.reconnectDelay_ = Si, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
      this.visible_ ? this.lastConnectionEstablishedTime_ && ((/* @__PURE__ */ new Date()).getTime() - this.lastConnectionEstablishedTime_ > g1 && (this.reconnectDelay_ = Si), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime());
      const e = Math.max(0, (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionAttemptTime_);
      let n = Math.max(0, this.reconnectDelay_ - e);
      n = Math.random() * n, this.log_("Trying to reconnect in " + n + "ms"), this.scheduleConnect_(n), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * _1);
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime(), this.lastConnectionEstablishedTime_ = null;
      const e = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), r = this.onRealtimeDisconnect_.bind(this), i = this.id + ":" + dn.nextConnectionId_++, s = this.lastSessionId;
      let o = !1, a = null;
      const l = function() {
        a ? a.close() : (o = !0, r());
      }, c = function(h) {
        S(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(h);
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
        o ? ze("getToken() completed but was canceled") : (ze("getToken() completed. Creating connection."), this.authToken_ = h && h.accessToken, this.appCheckToken_ = u && u.token, a = new c1(
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
            tt(f + " (" + this.repoInfo_.toString() + ")"), this.interrupt(v1);
          },
          s
        ));
      } catch (h) {
        this.log_("Failed to get token: " + h), o || (this.repoInfo_.nodeAdmin && tt(h), l());
      }
    }
  }
  interrupt(e) {
    ze("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    ze("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Qa(this.interruptReasons_) && (this.reconnectDelay_ = Si, this.realtime_ || this.scheduleConnect_(0));
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
    n ? r = n.map((s) => sc(s)).join("$") : r = "default";
    const i = this.removeListen_(e, r);
    i && i.onComplete && i.onComplete("permission_denied");
  }
  removeListen_(e, n) {
    const r = new oe(e).toString();
    let i;
    if (this.listens.has(r)) {
      const s = this.listens.get(r);
      i = s.get(n), s.delete(n), s.size === 0 && this.listens.delete(r);
    } else
      i = void 0;
    return i;
  }
  onAuthRevoked_(e, n) {
    ze("Auth token revoked: " + e + "/" + n), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= td && (this.reconnectDelay_ = ed, this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, n) {
    ze("App check token revoked: " + e + "/" + n), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= td && this.appCheckTokenProvider_.notifyForInvalidToken());
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
    e["sdk." + n + "." + Nf.replace(/\./g, "-")] = 1, zl() ? e["framework.cordova"] = 1 : $h() && (e["framework.reactnative"] = 1), this.reportStats(e);
  }
  shouldReconnect_() {
    const e = go.getInstance().currentlyOnline();
    return Qa(this.interruptReasons_) && e;
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
class G {
  constructor(e, n) {
    this.name = e, this.node = n;
  }
  static Wrap(e, n) {
    return new G(e, n);
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
class Ko {
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
    const r = new G(yr, e), i = new G(yr, n);
    return this.compare(r, i) !== 0;
  }
  /**
   * @returns a node wrapper that will sort equal to or less than
   * any other node wrapper, using this index
   */
  minPost() {
    return G.MIN;
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
let Vs;
class np extends Ko {
  static get __EMPTY_NODE() {
    return Vs;
  }
  static set __EMPTY_NODE(e) {
    Vs = e;
  }
  compare(e, n) {
    return kr(e.name, n.name);
  }
  isDefinedOn(e) {
    throw ai("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, n) {
    return !1;
  }
  minPost() {
    return G.MIN;
  }
  maxPost() {
    return new G(Bn, Vs);
  }
  makePost(e, n) {
    return S(typeof e == "string", "KeyIndex indexValue must always be a string."), new G(e, Vs);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".key";
  }
}
const Un = new np();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js {
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
class We {
  /**
   * @param key - Key associated with this node.
   * @param value - Value associated with this node.
   * @param color - Whether this node is red.
   * @param left - Left child.
   * @param right - Right child.
   */
  constructor(e, n, r, i, s) {
    this.key = e, this.value = n, this.color = r ?? We.RED, this.left = i ?? dt.EMPTY_NODE, this.right = s ?? dt.EMPTY_NODE;
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
    return new We(e ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
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
      return dt.EMPTY_NODE;
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
          return dt.EMPTY_NODE;
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
    const e = this.copy(null, null, We.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  /**
   * @returns New tree, after rotateRight.
   */
  rotateRight_() {
    const e = this.copy(null, null, We.RED, this.left.right, null);
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
We.RED = !0;
We.BLACK = !1;
class y1 {
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
    return new We(e, n, null);
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
class dt {
  /**
   * @param comparator_ - Key comparator.
   * @param root_ - Optional root node for the map.
   */
  constructor(e, n = dt.EMPTY_NODE) {
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
    return new dt(this.comparator_, this.root_.insert(e, n, this.comparator_).copy(null, null, We.BLACK, null, null));
  }
  /**
   * Returns a copy of the map, with the specified key removed.
   *
   * @param key - The key to remove.
   * @returns New map, with item removed.
   */
  remove(e) {
    return new dt(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, We.BLACK, null, null));
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
    return new js(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, n) {
    return new js(this.root_, e, this.comparator_, !1, n);
  }
  getReverseIteratorFrom(e, n) {
    return new js(this.root_, e, this.comparator_, !0, n);
  }
  getReverseIterator(e) {
    return new js(this.root_, null, this.comparator_, !0, e);
  }
}
dt.EMPTY_NODE = new y1();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function b1(t, e) {
  return kr(t.name, e.name);
}
function hc(t, e) {
  return kr(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let al;
function w1(t) {
  al = t;
}
const rp = function(t) {
  return typeof t == "number" ? "number:" + Df(t) : "string:" + t;
}, ip = function(t) {
  if (t.isLeafNode()) {
    const e = t.val();
    S(typeof e == "string" || typeof e == "number" || typeof e == "object" && Qt(e, ".sv"), "Priority must be a string or number.");
  } else
    S(t === al || t.isEmpty(), "priority of unexpected type.");
  S(t === al || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
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
let nd;
class He {
  static set __childrenNodeConstructor(e) {
    nd = e;
  }
  static get __childrenNodeConstructor() {
    return nd;
  }
  /**
   * @param value_ - The value to store in this leaf node. The object type is
   * possible in the event of a deferred value
   * @param priorityNode_ - The priority of this node.
   */
  constructor(e, n = He.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = e, this.priorityNode_ = n, this.lazyHash_ = null, S(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."), ip(this.priorityNode_);
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
    return new He(this.value_, e);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    return e === ".priority" ? this.priorityNode_ : He.__childrenNodeConstructor.EMPTY_NODE;
  }
  /** @inheritDoc */
  getChild(e) {
    return q(e) ? this : B(e) === ".priority" ? this.priorityNode_ : He.__childrenNodeConstructor.EMPTY_NODE;
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
    return e === ".priority" ? this.updatePriority(n) : n.isEmpty() && e !== ".priority" ? this : He.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_);
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const r = B(e);
    return r === null ? n : n.isEmpty() && r !== ".priority" ? this : (S(r !== ".priority" || qn(e) === 1, ".priority must be the last token in a path"), this.updateImmediateChild(r, He.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e), n)));
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
      this.priorityNode_.isEmpty() || (e += "priority:" + rp(this.priorityNode_.val()) + ":");
      const n = typeof this.value_;
      e += n + ":", n === "number" ? e += Df(this.value_) : e += this.value_, this.lazyHash_ = Lf(e);
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
    return e === He.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof He.__childrenNodeConstructor ? -1 : (S(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  /**
   * Comparison specifically for two leaf nodes
   */
  compareToLeafNode_(e) {
    const n = typeof e.value_, r = typeof this.value_, i = He.VALUE_TYPE_ORDER.indexOf(n), s = He.VALUE_TYPE_ORDER.indexOf(r);
    return S(i >= 0, "Unknown leaf type: " + n), S(s >= 0, "Unknown leaf type: " + r), i === s ? r === "object" ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : s - i;
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
He.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let sp, op;
function E1(t) {
  sp = t;
}
function I1(t) {
  op = t;
}
class C1 extends Ko {
  compare(e, n) {
    const r = e.node.getPriority(), i = n.node.getPriority(), s = r.compareTo(i);
    return s === 0 ? kr(e.name, n.name) : s;
  }
  isDefinedOn(e) {
    return !e.getPriority().isEmpty();
  }
  indexedValueChanged(e, n) {
    return !e.getPriority().equals(n.getPriority());
  }
  minPost() {
    return G.MIN;
  }
  maxPost() {
    return new G(Bn, new He("[PRIORITY-POST]", op));
  }
  makePost(e, n) {
    const r = sp(e);
    return new G(n, new He("[PRIORITY-POST]", r));
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".priority";
  }
}
const Ee = new C1();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T1 = Math.log(2);
class S1 {
  constructor(e) {
    const n = (s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parseInt(Math.log(s) / T1, 10)
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
const vo = function(t, e, n, r) {
  t.sort(e);
  const i = function(l, c) {
    const d = c - l;
    let h, u;
    if (d === 0)
      return null;
    if (d === 1)
      return h = t[l], u = n ? n(h) : h, new We(u, h.node, We.BLACK, null, null);
    {
      const f = parseInt(d / 2, 10) + l, p = i(l, f), g = i(f + 1, c);
      return h = t[f], u = n ? n(h) : h, new We(u, h.node, We.BLACK, p, g);
    }
  }, s = function(l) {
    let c = null, d = null, h = t.length;
    const u = function(p, g) {
      const w = h - p, C = h;
      h -= p;
      const T = i(w + 1, C), k = t[w], A = n ? n(k) : k;
      f(new We(A, k.node, g, null, T));
    }, f = function(p) {
      c ? (c.left = p, c = p) : (d = p, c = p);
    };
    for (let p = 0; p < l.count; ++p) {
      const g = l.nextBitIsOne(), w = Math.pow(2, l.count - (p + 1));
      g ? u(w, We.BLACK) : (u(w, We.BLACK), u(w, We.RED));
    }
    return d;
  }, o = new S1(t.length), a = s(o);
  return new dt(r || e, a);
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
let Na;
const Lr = {};
class on {
  /**
   * The default IndexMap for nodes without a priority
   */
  static get Default() {
    return S(Lr && Ee, "ChildrenNode.ts has not been loaded"), Na = Na || new on({ ".priority": Lr }, { ".priority": Ee }), Na;
  }
  constructor(e, n) {
    this.indexes_ = e, this.indexSet_ = n;
  }
  get(e) {
    const n = Yr(this.indexes_, e);
    if (!n)
      throw new Error("No index defined for " + e);
    return n instanceof dt ? n : null;
  }
  hasIndex(e) {
    return Qt(this.indexSet_, e.toString());
  }
  addIndex(e, n) {
    S(e !== Un, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const r = [];
    let i = !1;
    const s = n.getIterator(G.Wrap);
    let o = s.getNext();
    for (; o; )
      i = i || e.isDefinedOn(o.node), r.push(o), o = s.getNext();
    let a;
    i ? a = vo(r, e.getCompare()) : a = Lr;
    const l = e.toString(), c = { ...this.indexSet_ };
    c[l] = e;
    const d = { ...this.indexes_ };
    return d[l] = a, new on(d, c);
  }
  /**
   * Ensure that this node is properly tracked in any indexes that we're maintaining
   */
  addToIndexes(e, n) {
    const r = ao(this.indexes_, (i, s) => {
      const o = Yr(this.indexSet_, s);
      if (S(o, "Missing index implementation for " + s), i === Lr)
        if (o.isDefinedOn(e.node)) {
          const a = [], l = n.getIterator(G.Wrap);
          let c = l.getNext();
          for (; c; )
            c.name !== e.name && a.push(c), c = l.getNext();
          return a.push(e), vo(a, o.getCompare());
        } else
          return Lr;
      else {
        const a = n.get(e.name);
        let l = i;
        return a && (l = l.remove(new G(e.name, a))), l.insert(e, e.node);
      }
    });
    return new on(r, this.indexSet_);
  }
  /**
   * Create a new IndexMap instance with the given value removed
   */
  removeFromIndexes(e, n) {
    const r = ao(this.indexes_, (i) => {
      if (i === Lr)
        return i;
      {
        const s = n.get(e.name);
        return s ? i.remove(new G(e.name, s)) : i;
      }
    });
    return new on(r, this.indexSet_);
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
let ki;
class $ {
  static get EMPTY_NODE() {
    return ki || (ki = new $(new dt(hc), null, on.Default));
  }
  /**
   * @param children_ - List of children of this node..
   * @param priorityNode_ - The priority of this node (as a snapshot node).
   */
  constructor(e, n, r) {
    this.children_ = e, this.priorityNode_ = n, this.indexMap_ = r, this.lazyHash_ = null, this.priorityNode_ && ip(this.priorityNode_), this.children_.isEmpty() && S(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
  }
  /** @inheritDoc */
  isLeafNode() {
    return !1;
  }
  /** @inheritDoc */
  getPriority() {
    return this.priorityNode_ || ki;
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
      return n === null ? ki : n;
    }
  }
  /** @inheritDoc */
  getChild(e) {
    const n = B(e);
    return n === null ? this : this.getImmediateChild(n).getChild(ge(e));
  }
  /** @inheritDoc */
  hasChild(e) {
    return this.children_.get(e) !== null;
  }
  /** @inheritDoc */
  updateImmediateChild(e, n) {
    if (S(n, "We should always be passing snapshot nodes"), e === ".priority")
      return this.updatePriority(n);
    {
      const r = new G(e, n);
      let i, s;
      n.isEmpty() ? (i = this.children_.remove(e), s = this.indexMap_.removeFromIndexes(r, this.children_)) : (i = this.children_.insert(e, n), s = this.indexMap_.addToIndexes(r, this.children_));
      const o = i.isEmpty() ? ki : this.priorityNode_;
      return new $(i, o, s);
    }
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const r = B(e);
    if (r === null)
      return n;
    {
      S(B(e) !== ".priority" || qn(e) === 1, ".priority must be the last token in a path");
      const i = this.getImmediateChild(r).updateChild(ge(e), n);
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
    if (this.forEachChild(Ee, (o, a) => {
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
      this.getPriority().isEmpty() || (e += "priority:" + rp(this.getPriority().val()) + ":"), this.forEachChild(Ee, (n, r) => {
        const i = r.hash();
        i !== "" && (e += ":" + n + ":" + i);
      }), this.lazyHash_ = e === "" ? "" : Lf(e);
    }
    return this.lazyHash_;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, n, r) {
    const i = this.resolveIndex_(r);
    if (i) {
      const s = i.getPredecessorKey(new G(e, n));
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
    return n ? new G(n, this.children_.get(n)) : null;
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
    return n ? new G(n, this.children_.get(n)) : null;
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
      const i = this.children_.getIteratorFrom(e.name, G.Wrap);
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
      const i = this.children_.getReverseIteratorFrom(e.name, G.Wrap);
      let s = i.peek();
      for (; s != null && n.compare(s, e) > 0; )
        i.getNext(), s = i.peek();
      return i;
    }
  }
  compareTo(e) {
    return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === ks ? -1 : 0;
  }
  withIndex(e) {
    if (e === Un || this.indexMap_.hasIndex(e))
      return this;
    {
      const n = this.indexMap_.addIndex(e, this.children_);
      return new $(this.children_, this.priorityNode_, n);
    }
  }
  isIndexed(e) {
    return e === Un || this.indexMap_.hasIndex(e);
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
          const r = this.getIterator(Ee), i = n.getIterator(Ee);
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
    return e === Un ? null : this.indexMap_.get(e.toString());
  }
}
$.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class k1 extends $ {
  constructor() {
    super(new dt(hc), $.EMPTY_NODE, on.Default);
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
const ks = new k1();
Object.defineProperties(G, {
  MIN: {
    value: new G(yr, $.EMPTY_NODE)
  },
  MAX: {
    value: new G(Bn, ks)
  }
});
np.__EMPTY_NODE = $.EMPTY_NODE;
He.__childrenNodeConstructor = $;
w1(ks);
I1(ks);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A1 = !0;
function Me(t, e = null) {
  if (t === null)
    return $.EMPTY_NODE;
  if (typeof t == "object" && ".priority" in t && (e = t[".priority"]), S(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv" in e, "Invalid priority type found: " + typeof e), typeof t == "object" && ".value" in t && t[".value"] !== null && (t = t[".value"]), typeof t != "object" || ".sv" in t) {
    const n = t;
    return new He(n, Me(e));
  }
  if (!(t instanceof Array) && A1) {
    const n = [];
    let r = !1;
    if (qe(t, (o, a) => {
      if (o.substring(0, 1) !== ".") {
        const l = Me(a);
        l.isEmpty() || (r = r || !l.getPriority().isEmpty(), n.push(new G(o, l)));
      }
    }), n.length === 0)
      return $.EMPTY_NODE;
    const s = vo(n, b1, (o) => o.name, hc);
    if (r) {
      const o = vo(n, Ee.getCompare());
      return new $(s, Me(e), new on({ ".priority": o }, { ".priority": Ee }));
    } else
      return new $(s, Me(e), on.Default);
  } else {
    let n = $.EMPTY_NODE;
    return qe(t, (r, i) => {
      if (Qt(t, r) && r.substring(0, 1) !== ".") {
        const s = Me(i);
        (s.isLeafNode() || !s.isEmpty()) && (n = n.updateImmediateChild(r, s));
      }
    }), n.updatePriority(Me(e));
  }
}
E1(Me);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc extends Ko {
  constructor(e) {
    super(), this.indexPath_ = e, S(!q(e) && B(e) !== ".priority", "Can't create PathIndex with empty path or .priority key");
  }
  extractChild(e) {
    return e.getChild(this.indexPath_);
  }
  isDefinedOn(e) {
    return !e.getChild(this.indexPath_).isEmpty();
  }
  compare(e, n) {
    const r = this.extractChild(e.node), i = this.extractChild(n.node), s = r.compareTo(i);
    return s === 0 ? kr(e.name, n.name) : s;
  }
  makePost(e, n) {
    const r = Me(e), i = $.EMPTY_NODE.updateChild(this.indexPath_, r);
    return new G(n, i);
  }
  maxPost() {
    const e = $.EMPTY_NODE.updateChild(this.indexPath_, ks);
    return new G(Bn, e);
  }
  toString() {
    return is(this.indexPath_, 0).join("/");
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
class R1 extends Ko {
  compare(e, n) {
    const r = e.node.compareTo(n.node);
    return r === 0 ? kr(e.name, n.name) : r;
  }
  isDefinedOn(e) {
    return !0;
  }
  indexedValueChanged(e, n) {
    return !e.equals(n);
  }
  minPost() {
    return G.MIN;
  }
  maxPost() {
    return G.MAX;
  }
  makePost(e, n) {
    const r = Me(e);
    return new G(n, r);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".value";
  }
}
const ap = new R1();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lp(t) {
  return { type: "value", snapshotNode: t };
}
function Jr(t, e) {
  return { type: "child_added", snapshotNode: e, childName: t };
}
function ss(t, e) {
  return { type: "child_removed", snapshotNode: e, childName: t };
}
function os(t, e, n) {
  return {
    type: "child_changed",
    snapshotNode: e,
    childName: t,
    oldSnap: n
  };
}
function P1(t, e) {
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
class pc {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, n, r, i, s, o) {
    S(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const a = e.getImmediateChild(n);
    return a.getChild(i).equals(r.getChild(i)) && a.isEmpty() === r.isEmpty() || (o != null && (r.isEmpty() ? e.hasChild(n) ? o.trackChildChange(ss(n, a)) : S(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(Jr(n, r)) : o.trackChildChange(os(n, r, a))), e.isLeafNode() && r.isEmpty()) ? e : e.updateImmediateChild(n, r).withIndex(this.index_);
  }
  updateFullNode(e, n, r) {
    return r != null && (e.isLeafNode() || e.forEachChild(Ee, (i, s) => {
      n.hasChild(i) || r.trackChildChange(ss(i, s));
    }), n.isLeafNode() || n.forEachChild(Ee, (i, s) => {
      if (e.hasChild(i)) {
        const o = e.getImmediateChild(i);
        o.equals(s) || r.trackChildChange(os(i, s, o));
      } else
        r.trackChildChange(Jr(i, s));
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
class as {
  constructor(e) {
    this.indexedFilter_ = new pc(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = as.getStartPost_(e), this.endPost_ = as.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
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
    return this.matches(new G(n, r)) || (r = $.EMPTY_NODE), this.indexedFilter_.updateChild(e, n, r, i, s, o);
  }
  updateFullNode(e, n, r) {
    n.isLeafNode() && (n = $.EMPTY_NODE);
    let i = n.withIndex(this.index_);
    i = i.updatePriority($.EMPTY_NODE);
    const s = this;
    return n.forEachChild(Ee, (o, a) => {
      s.matches(new G(o, a)) || (i = i.updateImmediateChild(o, $.EMPTY_NODE));
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
class N1 {
  constructor(e) {
    this.withinDirectionalStart = (n) => this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n), this.withinDirectionalEnd = (n) => this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n), this.withinStartPost = (n) => {
      const r = this.index_.compare(this.rangedFilter_.getStartPost(), n);
      return this.startIsInclusive_ ? r <= 0 : r < 0;
    }, this.withinEndPost = (n) => {
      const r = this.index_.compare(n, this.rangedFilter_.getEndPost());
      return this.endIsInclusive_ ? r <= 0 : r < 0;
    }, this.rangedFilter_ = new as(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  updateChild(e, n, r, i, s, o) {
    return this.rangedFilter_.matches(new G(n, r)) || (r = $.EMPTY_NODE), e.getImmediateChild(n).equals(r) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, r, i, s, o) : this.fullLimitUpdateChild_(e, n, r, s, o);
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
    S(a.numChildren() === this.limit_, "");
    const l = new G(n, r), c = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_), d = this.rangedFilter_.matches(l);
    if (a.hasChild(n)) {
      const h = a.getImmediateChild(n);
      let u = i.getChildAfterChild(this.index_, c, this.reverse_);
      for (; u != null && (u.name === n || a.hasChild(u.name)); )
        u = i.getChildAfterChild(this.index_, u, this.reverse_);
      const f = u == null ? 1 : o(u, l);
      if (d && !r.isEmpty() && f >= 0)
        return s?.trackChildChange(os(n, r, h)), a.updateImmediateChild(n, r);
      {
        s?.trackChildChange(ss(n, h));
        const g = a.updateImmediateChild(n, $.EMPTY_NODE);
        return u != null && this.rangedFilter_.matches(u) ? (s?.trackChildChange(Jr(u.name, u.node)), g.updateImmediateChild(u.name, u.node)) : g;
      }
    } else return r.isEmpty() ? e : d && o(c, l) >= 0 ? (s != null && (s.trackChildChange(ss(c.name, c.node)), s.trackChildChange(Jr(n, r))), a.updateImmediateChild(n, r).updateImmediateChild(c.name, $.EMPTY_NODE)) : e;
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
class mc {
  constructor() {
    this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = Ee;
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
    return S(this.startSet_, "Only valid if start has been set"), this.indexStartValue_;
  }
  /**
   * Only valid to call if hasStart() returns true.
   * Returns the starting key name for the range defined by these query parameters
   */
  getIndexStartName() {
    return S(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : yr;
  }
  hasEnd() {
    return this.endSet_;
  }
  /**
   * Only valid to call if hasEnd() returns true.
   */
  getIndexEndValue() {
    return S(this.endSet_, "Only valid if end has been set"), this.indexEndValue_;
  }
  /**
   * Only valid to call if hasEnd() returns true.
   * Returns the end key name for the range defined by these query parameters
   */
  getIndexEndName() {
    return S(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : Bn;
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
    return S(this.limitSet_, "Only valid if limit has been set"), this.limit_;
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === Ee;
  }
  copy() {
    const e = new mc();
    return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
  }
}
function x1(t) {
  return t.loadsAllData() ? new pc(t.getIndex()) : t.hasLimit() ? new N1(t) : new as(t);
}
function L1(t, e) {
  const n = t.copy();
  return n.limitSet_ = !0, n.limit_ = e, n.viewFrom_ = "r", n;
}
function O1(t, e, n) {
  const r = t.copy();
  return r.startSet_ = !0, e === void 0 && (e = null), r.indexStartValue_ = e, n != null ? (r.startNameSet_ = !0, r.indexStartName_ = n) : (r.startNameSet_ = !1, r.indexStartName_ = ""), r;
}
function D1(t, e, n) {
  const r = t.copy();
  return r.endSet_ = !0, e === void 0 && (e = null), r.indexEndValue_ = e, n !== void 0 ? (r.endNameSet_ = !0, r.indexEndName_ = n) : (r.endNameSet_ = !1, r.indexEndName_ = ""), r;
}
function cp(t, e) {
  const n = t.copy();
  return n.index_ = e, n;
}
function rd(t) {
  const e = {};
  if (t.isDefault())
    return e;
  let n;
  if (t.index_ === Ee ? n = "$priority" : t.index_ === ap ? n = "$value" : t.index_ === Un ? n = "$key" : (S(t.index_ instanceof fc, "Unrecognized index type!"), n = t.index_.toString()), e.orderBy = $e(n), t.startSet_) {
    const r = t.startAfterSet_ ? "startAfter" : "startAt";
    e[r] = $e(t.indexStartValue_), t.startNameSet_ && (e[r] += "," + $e(t.indexStartName_));
  }
  if (t.endSet_) {
    const r = t.endBeforeSet_ ? "endBefore" : "endAt";
    e[r] = $e(t.indexEndValue_), t.endNameSet_ && (e[r] += "," + $e(t.indexEndName_));
  }
  return t.limitSet_ && (t.isViewFromLeft() ? e.limitToFirst = t.limit_ : e.limitToLast = t.limit_), e;
}
function id(t) {
  const e = {};
  if (t.startSet_ && (e.sp = t.indexStartValue_, t.startNameSet_ && (e.sn = t.indexStartName_), e.sin = !t.startAfterSet_), t.endSet_ && (e.ep = t.indexEndValue_, t.endNameSet_ && (e.en = t.indexEndName_), e.ein = !t.endBeforeSet_), t.limitSet_) {
    e.l = t.limit_;
    let n = t.viewFrom_;
    n === "" && (t.isViewFromLeft() ? n = "l" : n = "r"), e.vf = n;
  }
  return t.index_ !== Ee && (e.i = t.index_.toString()), e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo extends Xf {
  reportStats(e) {
    throw new Error("Method not implemented.");
  }
  static getListenId_(e, n) {
    return n !== void 0 ? "tag$" + n : (S(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString());
  }
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, r, i) {
    super(), this.repoInfo_ = e, this.onDataUpdate_ = n, this.authTokenProvider_ = r, this.appCheckTokenProvider_ = i, this.log_ = Ss("p:rest:"), this.listens_ = {};
  }
  /** @inheritDoc */
  listen(e, n, r, i) {
    const s = e._path.toString();
    this.log_("Listen called for " + s + " " + e._queryIdentifier);
    const o = yo.getListenId_(e, r), a = {};
    this.listens_[o] = a;
    const l = rd(e._queryParams);
    this.restRequest_(s + ".json", l, (c, d) => {
      let h = d;
      if (c === 404 && (h = null, c = null), c === null && this.onDataUpdate_(
        s,
        h,
        /*isMerge=*/
        !1,
        r
      ), Yr(this.listens_, o) === a) {
        let u;
        c ? c === 401 ? u = "permission_denied" : u = "rest_error:" + c : u = "ok", i(u, null);
      }
    });
  }
  /** @inheritDoc */
  unlisten(e, n) {
    const r = yo.getListenId_(e, n);
    delete this.listens_[r];
  }
  get(e) {
    const n = rd(e._queryParams), r = e._path.toString(), i = new ys();
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
      const o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + Tr(n);
      this.log_("Sending REST request for " + o);
      const a = new XMLHttpRequest();
      a.onreadystatechange = () => {
        if (r && a.readyState === 4) {
          this.log_("REST Response for " + o + " received. status:", a.status, "response:", a.responseText);
          let l = null;
          if (a.status >= 200 && a.status < 300) {
            try {
              l = es(a.responseText);
            } catch {
              tt("Failed to parse JSON response for " + o + ": " + a.responseText);
            }
            r(null, l);
          } else
            a.status !== 401 && a.status !== 404 && tt("Got unsuccessful REST response for " + o + " Status: " + a.status), r(a.status);
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
class M1 {
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
function bo() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function up(t, e, n) {
  if (q(e))
    t.value = n, t.children.clear();
  else if (t.value !== null)
    t.value = t.value.updateChild(e, n);
  else {
    const r = B(e);
    t.children.has(r) || t.children.set(r, bo());
    const i = t.children.get(r);
    e = ge(e), up(i, e, n);
  }
}
function ll(t, e, n) {
  t.value !== null ? n(e, t.value) : $1(t, (r, i) => {
    const s = new oe(e.toString() + "/" + r);
    ll(i, s, n);
  });
}
function $1(t, e) {
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
class F1 {
  constructor(e) {
    this.collection_ = e, this.last_ = null;
  }
  get() {
    const e = this.collection_.get(), n = { ...e };
    return this.last_ && qe(this.last_, (r, i) => {
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
const sd = 10 * 1e3, U1 = 30 * 1e3, H1 = 300 * 1e3;
class W1 {
  constructor(e, n) {
    this.server_ = n, this.statsToReport_ = {}, this.statsListener_ = new F1(e);
    const r = sd + (U1 - sd) * Math.random();
    Bi(this.reportStats_.bind(this), Math.floor(r));
  }
  reportStats_() {
    const e = this.statsListener_.get(), n = {};
    let r = !1;
    qe(e, (i, s) => {
      s > 0 && Qt(this.statsToReport_, i) && (n[i] = s, r = !0);
    }), r && this.server_.reportStats(n), Bi(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * H1));
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
function _c() {
  return {
    fromUser: !0,
    fromServer: !1,
    queryId: null,
    tagged: !1
  };
}
function gc() {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: null,
    tagged: !1
  };
}
function vc(t) {
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
class wo {
  /**
   * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
   */
  constructor(e, n, r) {
    this.path = e, this.affectedTree = n, this.revert = r, this.type = Ot.ACK_USER_WRITE, this.source = _c();
  }
  operationForChild(e) {
    if (q(this.path)) {
      if (this.affectedTree.value != null)
        return S(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
      {
        const n = this.affectedTree.subtree(new oe(e));
        return new wo(ne(), n, this.revert);
      }
    } else return S(B(this.path) === e, "operationForChild called for unrelated child."), new wo(ge(this.path), this.affectedTree, this.revert);
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
class ls {
  constructor(e, n) {
    this.source = e, this.path = n, this.type = Ot.LISTEN_COMPLETE;
  }
  operationForChild(e) {
    return q(this.path) ? new ls(this.source, ne()) : new ls(this.source, ge(this.path));
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
class br {
  constructor(e, n, r) {
    this.source = e, this.path = n, this.snap = r, this.type = Ot.OVERWRITE;
  }
  operationForChild(e) {
    return q(this.path) ? new br(this.source, ne(), this.snap.getImmediateChild(e)) : new br(this.source, ge(this.path), this.snap);
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
  constructor(e, n, r) {
    this.source = e, this.path = n, this.children = r, this.type = Ot.MERGE;
  }
  operationForChild(e) {
    if (q(this.path)) {
      const n = this.children.subtree(new oe(e));
      return n.isEmpty() ? null : n.value ? new br(this.source, ne(), n.value) : new Xr(this.source, ne(), n);
    } else
      return S(B(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new Xr(this.source, ge(this.path), this.children);
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
class Gn {
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
    if (q(e))
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
class V1 {
  constructor(e) {
    this.query_ = e, this.index_ = this.query_._queryParams.getIndex();
  }
}
function j1(t, e, n, r) {
  const i = [], s = [];
  return e.forEach((o) => {
    o.type === "child_changed" && t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) && s.push(P1(o.childName, o.snapshotNode));
  }), Ai(t, i, "child_removed", e, r, n), Ai(t, i, "child_added", e, r, n), Ai(t, i, "child_moved", s, r, n), Ai(t, i, "child_changed", e, r, n), Ai(t, i, "value", e, r, n), i;
}
function Ai(t, e, n, r, i, s) {
  const o = r.filter((a) => a.type === n);
  o.sort((a, l) => B1(t, a, l)), o.forEach((a) => {
    const l = z1(t, a, s);
    i.forEach((c) => {
      c.respondsTo(a.type) && e.push(c.createEvent(l, t.query_));
    });
  });
}
function z1(t, e, n) {
  return e.type === "value" || e.type === "child_removed" || (e.prevName = n.getPredecessorChildName(e.childName, e.snapshotNode, t.index_)), e;
}
function B1(t, e, n) {
  if (e.childName == null || n.childName == null)
    throw ai("Should only compare child_ events.");
  const r = new G(e.childName, e.snapshotNode), i = new G(n.childName, n.snapshotNode);
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
function Yo(t, e) {
  return { eventCache: t, serverCache: e };
}
function qi(t, e, n, r) {
  return Yo(new Gn(e, n, r), t.serverCache);
}
function dp(t, e, n, r) {
  return Yo(t.eventCache, new Gn(e, n, r));
}
function Eo(t) {
  return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null;
}
function wr(t) {
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
let xa;
const q1 = () => (xa || (xa = new dt(Rw)), xa);
class _e {
  static fromObject(e) {
    let n = new _e(null);
    return qe(e, (r, i) => {
      n = n.set(new oe(r), i);
    }), n;
  }
  constructor(e, n = q1()) {
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
    if (q(e))
      return null;
    {
      const r = B(e), i = this.children.get(r);
      if (i !== null) {
        const s = i.findRootMostMatchingPathAndValue(ge(e), n);
        return s != null ? { path: Te(new oe(r), s.path), value: s.value } : null;
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
    if (q(e))
      return this;
    {
      const n = B(e), r = this.children.get(n);
      return r !== null ? r.subtree(ge(e)) : new _e(null);
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
    if (q(e))
      return new _e(n, this.children);
    {
      const r = B(e), s = (this.children.get(r) || new _e(null)).set(ge(e), n), o = this.children.insert(r, s);
      return new _e(this.value, o);
    }
  }
  /**
   * Removes the value at the specified path.
   *
   * @param relativePath - Path to value to remove.
   * @returns Resulting tree.
   */
  remove(e) {
    if (q(e))
      return this.children.isEmpty() ? new _e(null) : new _e(null, this.children);
    {
      const n = B(e), r = this.children.get(n);
      if (r) {
        const i = r.remove(ge(e));
        let s;
        return i.isEmpty() ? s = this.children.remove(n) : s = this.children.insert(n, i), this.value === null && s.isEmpty() ? new _e(null) : new _e(this.value, s);
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
    if (q(e))
      return this.value;
    {
      const n = B(e), r = this.children.get(n);
      return r ? r.get(ge(e)) : null;
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
    if (q(e))
      return n;
    {
      const r = B(e), s = (this.children.get(r) || new _e(null)).setTree(ge(e), n);
      let o;
      return s.isEmpty() ? o = this.children.remove(r) : o = this.children.insert(r, s), new _e(this.value, o);
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
    const r = {};
    return this.children.inorderTraversal((i, s) => {
      r[i] = s.fold_(Te(e, i), n);
    }), n(e, this.value, r);
  }
  /**
   * Find the first matching value on the given path. Return the result of applying f to it.
   */
  findOnPath(e, n) {
    return this.findOnPath_(e, ne(), n);
  }
  findOnPath_(e, n, r) {
    const i = this.value ? r(n, this.value) : !1;
    if (i)
      return i;
    if (q(e))
      return null;
    {
      const s = B(e), o = this.children.get(s);
      return o ? o.findOnPath_(ge(e), Te(n, s), r) : null;
    }
  }
  foreachOnPath(e, n) {
    return this.foreachOnPath_(e, ne(), n);
  }
  foreachOnPath_(e, n, r) {
    if (q(e))
      return this;
    {
      this.value && r(n, this.value);
      const i = B(e), s = this.children.get(i);
      return s ? s.foreachOnPath_(ge(e), Te(n, i), r) : new _e(null);
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
    this.children.inorderTraversal((r, i) => {
      i.foreach_(Te(e, r), n);
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
class Mt {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new Mt(new _e(null));
  }
}
function Gi(t, e, n) {
  if (q(e))
    return new Mt(new _e(n));
  {
    const r = t.writeTree_.findRootMostValueAndPath(e);
    if (r != null) {
      const i = r.path;
      let s = r.value;
      const o = et(i, e);
      return s = s.updateChild(o, n), new Mt(t.writeTree_.set(i, s));
    } else {
      const i = new _e(n), s = t.writeTree_.setTree(e, i);
      return new Mt(s);
    }
  }
}
function cl(t, e, n) {
  let r = t;
  return qe(n, (i, s) => {
    r = Gi(r, Te(e, i), s);
  }), r;
}
function od(t, e) {
  if (q(e))
    return Mt.empty();
  {
    const n = t.writeTree_.setTree(e, new _e(null));
    return new Mt(n);
  }
}
function ul(t, e) {
  return Ar(t, e) != null;
}
function Ar(t, e) {
  const n = t.writeTree_.findRootMostValueAndPath(e);
  return n != null ? t.writeTree_.get(n.path).getChild(et(n.path, e)) : null;
}
function ad(t) {
  const e = [], n = t.writeTree_.value;
  return n != null ? n.isLeafNode() || n.forEachChild(Ee, (r, i) => {
    e.push(new G(r, i));
  }) : t.writeTree_.children.inorderTraversal((r, i) => {
    i.value != null && e.push(new G(r, i.value));
  }), e;
}
function Hn(t, e) {
  if (q(e))
    return t;
  {
    const n = Ar(t, e);
    return n != null ? new Mt(new _e(n)) : new Mt(t.writeTree_.subtree(e));
  }
}
function dl(t) {
  return t.writeTree_.isEmpty();
}
function Zr(t, e) {
  return hp(ne(), t.writeTree_, e);
}
function hp(t, e, n) {
  if (e.value != null)
    return n.updateChild(t, e.value);
  {
    let r = null;
    return e.children.inorderTraversal((i, s) => {
      i === ".priority" ? (S(s.value !== null, "Priority writes must always be leaf nodes"), r = s.value) : n = hp(Te(t, i), s, n);
    }), !n.getChild(t).isEmpty() && r !== null && (n = n.updateChild(Te(t, ".priority"), r)), n;
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
function Qo(t, e) {
  return _p(e, t);
}
function G1(t, e, n, r, i) {
  S(r > t.lastWriteId, "Stacking an older write on top of newer ones"), i === void 0 && (i = !0), t.allWrites.push({
    path: e,
    snap: n,
    writeId: r,
    visible: i
  }), i && (t.visibleWrites = Gi(t.visibleWrites, e, n)), t.lastWriteId = r;
}
function K1(t, e, n, r) {
  S(r > t.lastWriteId, "Stacking an older merge on top of newer ones"), t.allWrites.push({
    path: e,
    children: n,
    writeId: r,
    visible: !0
  }), t.visibleWrites = cl(t.visibleWrites, e, n), t.lastWriteId = r;
}
function Y1(t, e) {
  for (let n = 0; n < t.allWrites.length; n++) {
    const r = t.allWrites[n];
    if (r.writeId === e)
      return r;
  }
  return null;
}
function Q1(t, e) {
  const n = t.allWrites.findIndex((a) => a.writeId === e);
  S(n >= 0, "removeWrite called with nonexistent writeId.");
  const r = t.allWrites[n];
  t.allWrites.splice(n, 1);
  let i = r.visible, s = !1, o = t.allWrites.length - 1;
  for (; i && o >= 0; ) {
    const a = t.allWrites[o];
    a.visible && (o >= n && J1(a, r.path) ? i = !1 : Et(r.path, a.path) && (s = !0)), o--;
  }
  if (i) {
    if (s)
      return X1(t), !0;
    if (r.snap)
      t.visibleWrites = od(t.visibleWrites, r.path);
    else {
      const a = r.children;
      qe(a, (l) => {
        t.visibleWrites = od(t.visibleWrites, Te(r.path, l));
      });
    }
    return !0;
  } else return !1;
}
function J1(t, e) {
  if (t.snap)
    return Et(t.path, e);
  for (const n in t.children)
    if (t.children.hasOwnProperty(n) && Et(Te(t.path, n), e))
      return !0;
  return !1;
}
function X1(t) {
  t.visibleWrites = fp(t.allWrites, Z1, ne()), t.allWrites.length > 0 ? t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId : t.lastWriteId = -1;
}
function Z1(t) {
  return t.visible;
}
function fp(t, e, n) {
  let r = Mt.empty();
  for (let i = 0; i < t.length; ++i) {
    const s = t[i];
    if (e(s)) {
      const o = s.path;
      let a;
      if (s.snap)
        Et(n, o) ? (a = et(n, o), r = Gi(r, a, s.snap)) : Et(o, n) && (a = et(o, n), r = Gi(r, ne(), s.snap.getChild(a)));
      else if (s.children) {
        if (Et(n, o))
          a = et(n, o), r = cl(r, a, s.children);
        else if (Et(o, n))
          if (a = et(o, n), q(a))
            r = cl(r, ne(), s.children);
          else {
            const l = Yr(s.children, B(a));
            if (l) {
              const c = l.getChild(ge(a));
              r = Gi(r, ne(), c);
            }
          }
      } else
        throw ai("WriteRecord should have .snap or .children");
    }
  }
  return r;
}
function pp(t, e, n, r, i) {
  if (!r && !i) {
    const s = Ar(t.visibleWrites, e);
    if (s != null)
      return s;
    {
      const o = Hn(t.visibleWrites, e);
      if (dl(o))
        return n;
      if (n == null && !ul(o, ne()))
        return null;
      {
        const a = n || $.EMPTY_NODE;
        return Zr(o, a);
      }
    }
  } else {
    const s = Hn(t.visibleWrites, e);
    if (!i && dl(s))
      return n;
    if (!i && n == null && !ul(s, ne()))
      return null;
    {
      const o = function(c) {
        return (c.visible || i) && (!r || !~r.indexOf(c.writeId)) && (Et(c.path, e) || Et(e, c.path));
      }, a = fp(t.allWrites, o, e), l = n || $.EMPTY_NODE;
      return Zr(a, l);
    }
  }
}
function e0(t, e, n) {
  let r = $.EMPTY_NODE;
  const i = Ar(t.visibleWrites, e);
  if (i)
    return i.isLeafNode() || i.forEachChild(Ee, (s, o) => {
      r = r.updateImmediateChild(s, o);
    }), r;
  if (n) {
    const s = Hn(t.visibleWrites, e);
    return n.forEachChild(Ee, (o, a) => {
      const l = Zr(Hn(s, new oe(o)), a);
      r = r.updateImmediateChild(o, l);
    }), ad(s).forEach((o) => {
      r = r.updateImmediateChild(o.name, o.node);
    }), r;
  } else {
    const s = Hn(t.visibleWrites, e);
    return ad(s).forEach((o) => {
      r = r.updateImmediateChild(o.name, o.node);
    }), r;
  }
}
function t0(t, e, n, r, i) {
  S(r || i, "Either existingEventSnap or existingServerSnap must exist");
  const s = Te(e, n);
  if (ul(t.visibleWrites, s))
    return null;
  {
    const o = Hn(t.visibleWrites, s);
    return dl(o) ? i.getChild(n) : Zr(o, i.getChild(n));
  }
}
function n0(t, e, n, r) {
  const i = Te(e, n), s = Ar(t.visibleWrites, i);
  if (s != null)
    return s;
  if (r.isCompleteForChild(n)) {
    const o = Hn(t.visibleWrites, i);
    return Zr(o, r.getNode().getImmediateChild(n));
  } else
    return null;
}
function r0(t, e) {
  return Ar(t.visibleWrites, e);
}
function i0(t, e, n, r, i, s, o) {
  let a;
  const l = Hn(t.visibleWrites, e), c = Ar(l, ne());
  if (c != null)
    a = c;
  else if (n != null)
    a = Zr(l, n);
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
function s0() {
  return {
    visibleWrites: Mt.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function Io(t, e, n, r) {
  return pp(t.writeTree, t.treePath, e, n, r);
}
function yc(t, e) {
  return e0(t.writeTree, t.treePath, e);
}
function ld(t, e, n, r) {
  return t0(t.writeTree, t.treePath, e, n, r);
}
function Co(t, e) {
  return r0(t.writeTree, Te(t.treePath, e));
}
function o0(t, e, n, r, i, s) {
  return i0(t.writeTree, t.treePath, e, n, r, i, s);
}
function bc(t, e, n) {
  return n0(t.writeTree, t.treePath, e, n);
}
function mp(t, e) {
  return _p(Te(t.treePath, e), t.writeTree);
}
function _p(t, e) {
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
class a0 {
  constructor() {
    this.changeMap = /* @__PURE__ */ new Map();
  }
  trackChildChange(e) {
    const n = e.type, r = e.childName;
    S(n === "child_added" || n === "child_changed" || n === "child_removed", "Only child changes supported for tracking"), S(r !== ".priority", "Only non-priority child changes can be tracked.");
    const i = this.changeMap.get(r);
    if (i) {
      const s = i.type;
      if (n === "child_added" && s === "child_removed")
        this.changeMap.set(r, os(r, e.snapshotNode, i.snapshotNode));
      else if (n === "child_removed" && s === "child_added")
        this.changeMap.delete(r);
      else if (n === "child_removed" && s === "child_changed")
        this.changeMap.set(r, ss(r, i.oldSnap));
      else if (n === "child_changed" && s === "child_added")
        this.changeMap.set(r, Jr(r, e.snapshotNode));
      else if (n === "child_changed" && s === "child_changed")
        this.changeMap.set(r, os(r, e.snapshotNode, i.oldSnap));
      else
        throw ai("Illegal combination of changes: " + e + " occurred after " + i);
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
class l0 {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, n, r) {
    return null;
  }
}
const gp = new l0();
class wc {
  constructor(e, n, r = null) {
    this.writes_ = e, this.viewCache_ = n, this.optCompleteServerCache_ = r;
  }
  getCompleteChild(e) {
    const n = this.viewCache_.eventCache;
    if (n.isCompleteForChild(e))
      return n.getNode().getImmediateChild(e);
    {
      const r = this.optCompleteServerCache_ != null ? new Gn(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
      return bc(this.writes_, e, r);
    }
  }
  getChildAfterChild(e, n, r) {
    const i = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : wr(this.viewCache_), s = o0(this.writes_, i, n, 1, r, e);
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
function c0(t) {
  return { filter: t };
}
function u0(t, e) {
  S(e.eventCache.getNode().isIndexed(t.filter.getIndex()), "Event snap not indexed"), S(e.serverCache.getNode().isIndexed(t.filter.getIndex()), "Server snap not indexed");
}
function d0(t, e, n, r, i) {
  const s = new a0();
  let o, a;
  if (n.type === Ot.OVERWRITE) {
    const c = n;
    c.source.fromUser ? o = hl(t, e, c.path, c.snap, r, i, s) : (S(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered() && !q(c.path), o = To(t, e, c.path, c.snap, r, i, a, s));
  } else if (n.type === Ot.MERGE) {
    const c = n;
    c.source.fromUser ? o = f0(t, e, c.path, c.children, r, i, s) : (S(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered(), o = fl(t, e, c.path, c.children, r, i, a, s));
  } else if (n.type === Ot.ACK_USER_WRITE) {
    const c = n;
    c.revert ? o = _0(t, e, c.path, r, i, s) : o = p0(t, e, c.path, c.affectedTree, r, i, s);
  } else if (n.type === Ot.LISTEN_COMPLETE)
    o = m0(t, e, n.path, r, s);
  else
    throw ai("Unknown operation type: " + n.type);
  const l = s.getChanges();
  return h0(e, o, l), { viewCache: o, changes: l };
}
function h0(t, e, n) {
  const r = e.eventCache;
  if (r.isFullyInitialized()) {
    const i = r.getNode().isLeafNode() || r.getNode().isEmpty(), s = Eo(t);
    (n.length > 0 || !t.eventCache.isFullyInitialized() || i && !r.getNode().equals(s) || !r.getNode().getPriority().equals(s.getPriority())) && n.push(lp(Eo(e)));
  }
}
function vp(t, e, n, r, i, s) {
  const o = e.eventCache;
  if (Co(r, n) != null)
    return e;
  {
    let a, l;
    if (q(n))
      if (S(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), e.serverCache.isFiltered()) {
        const c = wr(e), d = c instanceof $ ? c : $.EMPTY_NODE, h = yc(r, d);
        a = t.filter.updateFullNode(e.eventCache.getNode(), h, s);
      } else {
        const c = Io(r, wr(e));
        a = t.filter.updateFullNode(e.eventCache.getNode(), c, s);
      }
    else {
      const c = B(n);
      if (c === ".priority") {
        S(qn(n) === 1, "Can't have a priority with additional path components");
        const d = o.getNode();
        l = e.serverCache.getNode();
        const h = ld(r, n, d, l);
        h != null ? a = t.filter.updatePriority(d, h) : a = o.getNode();
      } else {
        const d = ge(n);
        let h;
        if (o.isCompleteForChild(c)) {
          l = e.serverCache.getNode();
          const u = ld(r, n, o.getNode(), l);
          u != null ? h = o.getNode().getImmediateChild(c).updateChild(d, u) : h = o.getNode().getImmediateChild(c);
        } else
          h = bc(r, c, e.serverCache);
        h != null ? a = t.filter.updateChild(o.getNode(), c, h, d, i, s) : a = o.getNode();
      }
    }
    return qi(e, a, o.isFullyInitialized() || q(n), t.filter.filtersNodes());
  }
}
function To(t, e, n, r, i, s, o, a) {
  const l = e.serverCache;
  let c;
  const d = o ? t.filter : t.filter.getIndexedFilter();
  if (q(n))
    c = d.updateFullNode(l.getNode(), r, null);
  else if (d.filtersNodes() && !l.isFiltered()) {
    const f = l.getNode().updateChild(n, r);
    c = d.updateFullNode(l.getNode(), f, null);
  } else {
    const f = B(n);
    if (!l.isCompleteForPath(n) && qn(n) > 1)
      return e;
    const p = ge(n), w = l.getNode().getImmediateChild(f).updateChild(p, r);
    f === ".priority" ? c = d.updatePriority(l.getNode(), w) : c = d.updateChild(l.getNode(), f, w, p, gp, null);
  }
  const h = dp(e, c, l.isFullyInitialized() || q(n), d.filtersNodes()), u = new wc(i, h, s);
  return vp(t, h, n, i, u, a);
}
function hl(t, e, n, r, i, s, o) {
  const a = e.eventCache;
  let l, c;
  const d = new wc(i, e, s);
  if (q(n))
    c = t.filter.updateFullNode(e.eventCache.getNode(), r, o), l = qi(e, c, !0, t.filter.filtersNodes());
  else {
    const h = B(n);
    if (h === ".priority")
      c = t.filter.updatePriority(e.eventCache.getNode(), r), l = qi(e, c, a.isFullyInitialized(), a.isFiltered());
    else {
      const u = ge(n), f = a.getNode().getImmediateChild(h);
      let p;
      if (q(u))
        p = r;
      else {
        const g = d.getCompleteChild(h);
        g != null ? cc(u) === ".priority" && g.getChild(ep(u)).isEmpty() ? p = g : p = g.updateChild(u, r) : p = $.EMPTY_NODE;
      }
      if (f.equals(p))
        l = e;
      else {
        const g = t.filter.updateChild(a.getNode(), h, p, u, d, o);
        l = qi(e, g, a.isFullyInitialized(), t.filter.filtersNodes());
      }
    }
  }
  return l;
}
function cd(t, e) {
  return t.eventCache.isCompleteForChild(e);
}
function f0(t, e, n, r, i, s, o) {
  let a = e;
  return r.foreach((l, c) => {
    const d = Te(n, l);
    cd(e, B(d)) && (a = hl(t, a, d, c, i, s, o));
  }), r.foreach((l, c) => {
    const d = Te(n, l);
    cd(e, B(d)) || (a = hl(t, a, d, c, i, s, o));
  }), a;
}
function ud(t, e, n) {
  return n.foreach((r, i) => {
    e = e.updateChild(r, i);
  }), e;
}
function fl(t, e, n, r, i, s, o, a) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let l = e, c;
  q(n) ? c = r : c = new _e(null).setTree(n, r);
  const d = e.serverCache.getNode();
  return c.children.inorderTraversal((h, u) => {
    if (d.hasChild(h)) {
      const f = e.serverCache.getNode().getImmediateChild(h), p = ud(t, f, u);
      l = To(t, l, new oe(h), p, i, s, o, a);
    }
  }), c.children.inorderTraversal((h, u) => {
    const f = !e.serverCache.isCompleteForChild(h) && u.value === null;
    if (!d.hasChild(h) && !f) {
      const p = e.serverCache.getNode().getImmediateChild(h), g = ud(t, p, u);
      l = To(t, l, new oe(h), g, i, s, o, a);
    }
  }), l;
}
function p0(t, e, n, r, i, s, o) {
  if (Co(i, n) != null)
    return e;
  const a = e.serverCache.isFiltered(), l = e.serverCache;
  if (r.value != null) {
    if (q(n) && l.isFullyInitialized() || l.isCompleteForPath(n))
      return To(t, e, n, l.getNode().getChild(n), i, s, a, o);
    if (q(n)) {
      let c = new _e(null);
      return l.getNode().forEachChild(Un, (d, h) => {
        c = c.set(new oe(d), h);
      }), fl(t, e, n, c, i, s, a, o);
    } else
      return e;
  } else {
    let c = new _e(null);
    return r.foreach((d, h) => {
      const u = Te(n, d);
      l.isCompleteForPath(u) && (c = c.set(d, l.getNode().getChild(u)));
    }), fl(t, e, n, c, i, s, a, o);
  }
}
function m0(t, e, n, r, i) {
  const s = e.serverCache, o = dp(e, s.getNode(), s.isFullyInitialized() || q(n), s.isFiltered());
  return vp(t, o, n, r, gp, i);
}
function _0(t, e, n, r, i, s) {
  let o;
  if (Co(r, n) != null)
    return e;
  {
    const a = new wc(r, e, i), l = e.eventCache.getNode();
    let c;
    if (q(n) || B(n) === ".priority") {
      let d;
      if (e.serverCache.isFullyInitialized())
        d = Io(r, wr(e));
      else {
        const h = e.serverCache.getNode();
        S(h instanceof $, "serverChildren would be complete if leaf node"), d = yc(r, h);
      }
      d = d, c = t.filter.updateFullNode(l, d, s);
    } else {
      const d = B(n);
      let h = bc(r, d, e.serverCache);
      h == null && e.serverCache.isCompleteForChild(d) && (h = l.getImmediateChild(d)), h != null ? c = t.filter.updateChild(l, d, h, ge(n), a, s) : e.eventCache.getNode().hasChild(d) ? c = t.filter.updateChild(l, d, $.EMPTY_NODE, ge(n), a, s) : c = l, c.isEmpty() && e.serverCache.isFullyInitialized() && (o = Io(r, wr(e)), o.isLeafNode() && (c = t.filter.updateFullNode(c, o, s)));
    }
    return o = e.serverCache.isFullyInitialized() || Co(r, ne()) != null, qi(e, c, o, t.filter.filtersNodes());
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
class g0 {
  constructor(e, n) {
    this.query_ = e, this.eventRegistrations_ = [];
    const r = this.query_._queryParams, i = new pc(r.getIndex()), s = x1(r);
    this.processor_ = c0(s);
    const o = n.serverCache, a = n.eventCache, l = i.updateFullNode($.EMPTY_NODE, o.getNode(), null), c = s.updateFullNode($.EMPTY_NODE, a.getNode(), null), d = new Gn(l, o.isFullyInitialized(), i.filtersNodes()), h = new Gn(c, a.isFullyInitialized(), s.filtersNodes());
    this.viewCache_ = Yo(h, d), this.eventGenerator_ = new V1(this.query_);
  }
  get query() {
    return this.query_;
  }
}
function v0(t) {
  return t.viewCache_.serverCache.getNode();
}
function y0(t) {
  return Eo(t.viewCache_);
}
function b0(t, e) {
  const n = wr(t.viewCache_);
  return n && (t.query._queryParams.loadsAllData() || !q(e) && !n.getImmediateChild(B(e)).isEmpty()) ? n.getChild(e) : null;
}
function dd(t) {
  return t.eventRegistrations_.length === 0;
}
function w0(t, e) {
  t.eventRegistrations_.push(e);
}
function hd(t, e, n) {
  const r = [];
  if (n) {
    S(e == null, "A cancel should cancel all event registrations.");
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
function fd(t, e, n, r) {
  e.type === Ot.MERGE && e.source.queryId !== null && (S(wr(t.viewCache_), "We should always have a full cache before handling merges"), S(Eo(t.viewCache_), "Missing event cache, even though we have a server cache"));
  const i = t.viewCache_, s = d0(t.processor_, i, e, n, r);
  return u0(t.processor_, s.viewCache), S(s.viewCache.serverCache.isFullyInitialized() || !i.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), t.viewCache_ = s.viewCache, yp(t, s.changes, s.viewCache.eventCache.getNode(), null);
}
function E0(t, e) {
  const n = t.viewCache_.eventCache, r = [];
  return n.getNode().isLeafNode() || n.getNode().forEachChild(Ee, (s, o) => {
    r.push(Jr(s, o));
  }), n.isFullyInitialized() && r.push(lp(n.getNode())), yp(t, r, n.getNode(), e);
}
function yp(t, e, n, r) {
  const i = r ? [r] : t.eventRegistrations_;
  return j1(t.eventGenerator_, e, n, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let So;
class bp {
  constructor() {
    this.views = /* @__PURE__ */ new Map();
  }
}
function I0(t) {
  S(!So, "__referenceConstructor has already been defined"), So = t;
}
function C0() {
  return S(So, "Reference.ts has not been loaded"), So;
}
function T0(t) {
  return t.views.size === 0;
}
function Ec(t, e, n, r) {
  const i = e.source.queryId;
  if (i !== null) {
    const s = t.views.get(i);
    return S(s != null, "SyncTree gave us an op for an invalid query."), fd(s, e, n, r);
  } else {
    let s = [];
    for (const o of t.views.values())
      s = s.concat(fd(o, e, n, r));
    return s;
  }
}
function wp(t, e, n, r, i) {
  const s = e._queryIdentifier, o = t.views.get(s);
  if (!o) {
    let a = Io(n, i ? r : null), l = !1;
    a ? l = !0 : r instanceof $ ? (a = yc(n, r), l = !1) : (a = $.EMPTY_NODE, l = !1);
    const c = Yo(new Gn(a, l, !1), new Gn(r, i, !1));
    return new g0(e, c);
  }
  return o;
}
function S0(t, e, n, r, i, s) {
  const o = wp(t, e, r, i, s);
  return t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o), w0(o, n), E0(o, n);
}
function k0(t, e, n, r) {
  const i = e._queryIdentifier, s = [];
  let o = [];
  const a = Kn(t);
  if (i === "default")
    for (const [l, c] of t.views.entries())
      o = o.concat(hd(c, n, r)), dd(c) && (t.views.delete(l), c.query._queryParams.loadsAllData() || s.push(c.query));
  else {
    const l = t.views.get(i);
    l && (o = o.concat(hd(l, n, r)), dd(l) && (t.views.delete(i), l.query._queryParams.loadsAllData() || s.push(l.query)));
  }
  return a && !Kn(t) && s.push(new (C0())(e._repo, e._path)), { removed: s, events: o };
}
function Ep(t) {
  const e = [];
  for (const n of t.views.values())
    n.query._queryParams.loadsAllData() || e.push(n);
  return e;
}
function Wn(t, e) {
  let n = null;
  for (const r of t.views.values())
    n = n || b0(r, e);
  return n;
}
function Ip(t, e) {
  if (e._queryParams.loadsAllData())
    return Jo(t);
  {
    const r = e._queryIdentifier;
    return t.views.get(r);
  }
}
function Cp(t, e) {
  return Ip(t, e) != null;
}
function Kn(t) {
  return Jo(t) != null;
}
function Jo(t) {
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
let ko;
function A0(t) {
  S(!ko, "__referenceConstructor has already been defined"), ko = t;
}
function R0() {
  return S(ko, "Reference.ts has not been loaded"), ko;
}
let P0 = 1;
class pd {
  /**
   * @param listenProvider_ - Used by SyncTree to start / stop listening
   *   to server data.
   */
  constructor(e) {
    this.listenProvider_ = e, this.syncPointTree_ = new _e(null), this.pendingWriteTree_ = s0(), this.tagToQueryMap = /* @__PURE__ */ new Map(), this.queryToTagMap = /* @__PURE__ */ new Map();
  }
}
function Tp(t, e, n, r, i) {
  return G1(t.pendingWriteTree_, e, n, r, i), i ? ui(t, new br(_c(), e, n)) : [];
}
function N0(t, e, n, r) {
  K1(t.pendingWriteTree_, e, n, r);
  const i = _e.fromObject(n);
  return ui(t, new Xr(_c(), e, i));
}
function Ln(t, e, n = !1) {
  const r = Y1(t.pendingWriteTree_, e);
  if (Q1(t.pendingWriteTree_, e)) {
    let s = new _e(null);
    return r.snap != null ? s = s.set(ne(), !0) : qe(r.children, (o) => {
      s = s.set(new oe(o), !0);
    }), ui(t, new wo(r.path, s, n));
  } else
    return [];
}
function As(t, e, n) {
  return ui(t, new br(gc(), e, n));
}
function x0(t, e, n) {
  const r = _e.fromObject(n);
  return ui(t, new Xr(gc(), e, r));
}
function L0(t, e) {
  return ui(t, new ls(gc(), e));
}
function O0(t, e, n) {
  const r = Cc(t, n);
  if (r) {
    const i = Tc(r), s = i.path, o = i.queryId, a = et(s, e), l = new ls(vc(o), a);
    return Sc(t, s, l);
  } else
    return [];
}
function Ao(t, e, n, r, i = !1) {
  const s = e._path, o = t.syncPointTree_.get(s);
  let a = [];
  if (o && (e._queryIdentifier === "default" || Cp(o, e))) {
    const l = k0(o, e, n, r);
    T0(o) && (t.syncPointTree_ = t.syncPointTree_.remove(s));
    const c = l.removed;
    if (a = l.events, !i) {
      const d = c.findIndex((u) => u._queryParams.loadsAllData()) !== -1, h = t.syncPointTree_.findOnPath(s, (u, f) => Kn(f));
      if (d && !h) {
        const u = t.syncPointTree_.subtree(s);
        if (!u.isEmpty()) {
          const f = $0(u);
          for (let p = 0; p < f.length; ++p) {
            const g = f[p], w = g.query, C = Rp(t, g);
            t.listenProvider_.startListening(Ki(w), cs(t, w), C.hashFn, C.onComplete);
          }
        }
      }
      !h && c.length > 0 && !r && (d ? t.listenProvider_.stopListening(Ki(e), null) : c.forEach((u) => {
        const f = t.queryToTagMap.get(Xo(u));
        t.listenProvider_.stopListening(Ki(u), f);
      }));
    }
    F0(t, c);
  }
  return a;
}
function Sp(t, e, n, r) {
  const i = Cc(t, r);
  if (i != null) {
    const s = Tc(i), o = s.path, a = s.queryId, l = et(o, e), c = new br(vc(a), l, n);
    return Sc(t, o, c);
  } else
    return [];
}
function D0(t, e, n, r) {
  const i = Cc(t, r);
  if (i) {
    const s = Tc(i), o = s.path, a = s.queryId, l = et(o, e), c = _e.fromObject(n), d = new Xr(vc(a), l, c);
    return Sc(t, o, d);
  } else
    return [];
}
function pl(t, e, n, r = !1) {
  const i = e._path;
  let s = null, o = !1;
  t.syncPointTree_.foreachOnPath(i, (u, f) => {
    const p = et(u, i);
    s = s || Wn(f, p), o = o || Kn(f);
  });
  let a = t.syncPointTree_.get(i);
  a ? (o = o || Kn(a), s = s || Wn(a, ne())) : (a = new bp(), t.syncPointTree_ = t.syncPointTree_.set(i, a));
  let l;
  s != null ? l = !0 : (l = !1, s = $.EMPTY_NODE, t.syncPointTree_.subtree(i).foreachChild((f, p) => {
    const g = Wn(p, ne());
    g && (s = s.updateImmediateChild(f, g));
  }));
  const c = Cp(a, e);
  if (!c && !e._queryParams.loadsAllData()) {
    const u = Xo(e);
    S(!t.queryToTagMap.has(u), "View does not exist, but we have a tag");
    const f = U0();
    t.queryToTagMap.set(u, f), t.tagToQueryMap.set(f, u);
  }
  const d = Qo(t.pendingWriteTree_, i);
  let h = S0(a, e, n, d, s, l);
  if (!c && !o && !r) {
    const u = Ip(a, e);
    h = h.concat(H0(t, e, u));
  }
  return h;
}
function Ic(t, e, n) {
  const i = t.pendingWriteTree_, s = t.syncPointTree_.findOnPath(e, (o, a) => {
    const l = et(o, e), c = Wn(a, l);
    if (c)
      return c;
  });
  return pp(i, e, s, n, !0);
}
function M0(t, e) {
  const n = e._path;
  let r = null;
  t.syncPointTree_.foreachOnPath(n, (c, d) => {
    const h = et(c, n);
    r = r || Wn(d, h);
  });
  let i = t.syncPointTree_.get(n);
  i ? r = r || Wn(i, ne()) : (i = new bp(), t.syncPointTree_ = t.syncPointTree_.set(n, i));
  const s = r != null, o = s ? new Gn(r, !0, !1) : null, a = Qo(t.pendingWriteTree_, e._path), l = wp(i, e, a, s ? o.getNode() : $.EMPTY_NODE, s);
  return y0(l);
}
function ui(t, e) {
  return kp(
    e,
    t.syncPointTree_,
    /*serverCache=*/
    null,
    Qo(t.pendingWriteTree_, ne())
  );
}
function kp(t, e, n, r) {
  if (q(t.path))
    return Ap(t, e, n, r);
  {
    const i = e.get(ne());
    n == null && i != null && (n = Wn(i, ne()));
    let s = [];
    const o = B(t.path), a = t.operationForChild(o), l = e.children.get(o);
    if (l && a) {
      const c = n ? n.getImmediateChild(o) : null, d = mp(r, o);
      s = s.concat(kp(a, l, c, d));
    }
    return i && (s = s.concat(Ec(i, t, r, n))), s;
  }
}
function Ap(t, e, n, r) {
  const i = e.get(ne());
  n == null && i != null && (n = Wn(i, ne()));
  let s = [];
  return e.children.inorderTraversal((o, a) => {
    const l = n ? n.getImmediateChild(o) : null, c = mp(r, o), d = t.operationForChild(o);
    d && (s = s.concat(Ap(d, a, l, c)));
  }), i && (s = s.concat(Ec(i, t, r, n))), s;
}
function Rp(t, e) {
  const n = e.query, r = cs(t, n);
  return {
    hashFn: () => (v0(e) || $.EMPTY_NODE).hash(),
    onComplete: (i) => {
      if (i === "ok")
        return r ? O0(t, n._path, r) : L0(t, n._path);
      {
        const s = xw(i, n);
        return Ao(
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
function cs(t, e) {
  const n = Xo(e);
  return t.queryToTagMap.get(n);
}
function Xo(t) {
  return t._path.toString() + "$" + t._queryIdentifier;
}
function Cc(t, e) {
  return t.tagToQueryMap.get(e);
}
function Tc(t) {
  const e = t.indexOf("$");
  return S(e !== -1 && e < t.length - 1, "Bad queryKey."), {
    queryId: t.substr(e + 1),
    path: new oe(t.substr(0, e))
  };
}
function Sc(t, e, n) {
  const r = t.syncPointTree_.get(e);
  S(r, "Missing sync point for query tag that we're tracking");
  const i = Qo(t.pendingWriteTree_, e);
  return Ec(r, n, i, null);
}
function $0(t) {
  return t.fold((e, n, r) => {
    if (n && Kn(n))
      return [Jo(n)];
    {
      let i = [];
      return n && (i = Ep(n)), qe(r, (s, o) => {
        i = i.concat(o);
      }), i;
    }
  });
}
function Ki(t) {
  return t._queryParams.loadsAllData() && !t._queryParams.isDefault() ? new (R0())(t._repo, t._path) : t;
}
function F0(t, e) {
  for (let n = 0; n < e.length; ++n) {
    const r = e[n];
    if (!r._queryParams.loadsAllData()) {
      const i = Xo(r), s = t.queryToTagMap.get(i);
      t.queryToTagMap.delete(i), t.tagToQueryMap.delete(s);
    }
  }
}
function U0() {
  return P0++;
}
function H0(t, e, n) {
  const r = e._path, i = cs(t, e), s = Rp(t, n), o = t.listenProvider_.startListening(Ki(e), i, s.hashFn, s.onComplete), a = t.syncPointTree_.subtree(r);
  if (i)
    S(!Kn(a.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const l = a.fold((c, d, h) => {
      if (!q(c) && d && Kn(d))
        return [Jo(d).query];
      {
        let u = [];
        return d && (u = u.concat(Ep(d).map((f) => f.query))), qe(h, (f, p) => {
          u = u.concat(p);
        }), u;
      }
    });
    for (let c = 0; c < l.length; ++c) {
      const d = l[c];
      t.listenProvider_.stopListening(Ki(d), cs(t, d));
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
class kc {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const n = this.node_.getImmediateChild(e);
    return new kc(n);
  }
  node() {
    return this.node_;
  }
}
class Ac {
  constructor(e, n) {
    this.syncTree_ = e, this.path_ = n;
  }
  getImmediateChild(e) {
    const n = Te(this.path_, e);
    return new Ac(this.syncTree_, n);
  }
  node() {
    return Ic(this.syncTree_, this.path_);
  }
}
const W0 = function(t) {
  return t = t || {}, t.timestamp = t.timestamp || (/* @__PURE__ */ new Date()).getTime(), t;
}, md = function(t, e, n) {
  if (!t || typeof t != "object")
    return t;
  if (S(".sv" in t, "Unexpected leaf node or priority contents"), typeof t[".sv"] == "string")
    return V0(t[".sv"], e, n);
  if (typeof t[".sv"] == "object")
    return j0(t[".sv"], e);
  S(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
}, V0 = function(t, e, n) {
  switch (t) {
    case "timestamp":
      return n.timestamp;
    default:
      S(!1, "Unexpected server value: " + t);
  }
}, j0 = function(t, e, n) {
  t.hasOwnProperty("increment") || S(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
  const r = t.increment;
  typeof r != "number" && S(!1, "Unexpected increment value: " + r);
  const i = e.node();
  if (S(i !== null && typeof i < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"), !i.isLeafNode())
    return r;
  const o = i.getValue();
  return typeof o != "number" ? r : o + r;
}, Pp = function(t, e, n, r) {
  return Rc(e, new Ac(n, t), r);
}, Np = function(t, e, n) {
  return Rc(t, new kc(e), n);
};
function Rc(t, e, n) {
  const r = t.getPriority().val(), i = md(r, e.getImmediateChild(".priority"), n);
  let s;
  if (t.isLeafNode()) {
    const o = t, a = md(o.getValue(), e, n);
    return a !== o.getValue() || i !== o.getPriority().val() ? new He(a, Me(i)) : t;
  } else {
    const o = t;
    return s = o, i !== o.getPriority().val() && (s = s.updatePriority(new He(i))), o.forEachChild(Ee, (a, l) => {
      const c = Rc(l, e.getImmediateChild(a), n);
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
class Pc {
  /**
   * @param name - Optional name of the node.
   * @param parent - Optional parent node.
   * @param node - Optional node to wrap.
   */
  constructor(e = "", n = null, r = { children: {}, childCount: 0 }) {
    this.name = e, this.parent = n, this.node = r;
  }
}
function Nc(t, e) {
  let n = e instanceof oe ? e : new oe(e), r = t, i = B(n);
  for (; i !== null; ) {
    const s = Yr(r.node.children, i) || {
      children: {},
      childCount: 0
    };
    r = new Pc(i, r, s), n = ge(n), i = B(n);
  }
  return r;
}
function di(t) {
  return t.node.value;
}
function xp(t, e) {
  t.node.value = e, ml(t);
}
function Lp(t) {
  return t.node.childCount > 0;
}
function z0(t) {
  return di(t) === void 0 && !Lp(t);
}
function Zo(t, e) {
  qe(t.node.children, (n, r) => {
    e(new Pc(n, t, r));
  });
}
function Op(t, e, n, r) {
  n && e(t), Zo(t, (i) => {
    Op(i, e, !0);
  });
}
function B0(t, e, n) {
  let r = t.parent;
  for (; r !== null; ) {
    if (e(r))
      return !0;
    r = r.parent;
  }
  return !1;
}
function Rs(t) {
  return new oe(t.parent === null ? t.name : Rs(t.parent) + "/" + t.name);
}
function ml(t) {
  t.parent !== null && q0(t.parent, t.name, t);
}
function q0(t, e, n) {
  const r = z0(n), i = Qt(t.node.children, e);
  r && i ? (delete t.node.children[e], t.node.childCount--, ml(t)) : !r && !i && (t.node.children[e] = n.node, t.node.childCount++, ml(t));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G0 = /[\[\].#$\/\u0000-\u001F\u007F]/, K0 = /[\[\].#$\u0000-\u001F\u007F]/, La = 10 * 1024 * 1024, xc = function(t) {
  return typeof t == "string" && t.length !== 0 && !G0.test(t);
}, Dp = function(t) {
  return typeof t == "string" && t.length !== 0 && !K0.test(t);
}, Y0 = function(t) {
  return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), Dp(t);
}, _l = function(t) {
  return t === null || typeof t == "string" || typeof t == "number" && !ic(t) || t && typeof t == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Qt(t, ".sv");
}, Ps = function(t, e, n, r) {
  r && e === void 0 || ea(Vo(t, "value"), e, n);
}, ea = function(t, e, n) {
  const r = n instanceof oe ? new h1(n, t) : n;
  if (e === void 0)
    throw new Error(t + "contains undefined " + sr(r));
  if (typeof e == "function")
    throw new Error(t + "contains a function " + sr(r) + " with contents = " + e.toString());
  if (ic(e))
    throw new Error(t + "contains " + e.toString() + " " + sr(r));
  if (typeof e == "string" && e.length > La / 3 && jo(e) > La)
    throw new Error(t + "contains a string greater than " + La + " utf8 bytes " + sr(r) + " ('" + e.substring(0, 50) + "...')");
  if (e && typeof e == "object") {
    let i = !1, s = !1;
    if (qe(e, (o, a) => {
      if (o === ".value")
        i = !0;
      else if (o !== ".priority" && o !== ".sv" && (s = !0, !xc(o)))
        throw new Error(t + " contains an invalid key (" + o + ") " + sr(r) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      f1(r, o), ea(t, a, r), p1(r);
    }), i && s)
      throw new Error(t + ' contains ".value" child ' + sr(r) + " in addition to actual children.");
  }
}, Q0 = function(t, e) {
  let n, r;
  for (n = 0; n < e.length; n++) {
    r = e[n];
    const s = is(r);
    for (let o = 0; o < s.length; o++)
      if (!(s[o] === ".priority" && o === s.length - 1)) {
        if (!xc(s[o]))
          throw new Error(t + "contains an invalid key (" + s[o] + ") in path " + r.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      }
  }
  e.sort(d1);
  let i = null;
  for (n = 0; n < e.length; n++) {
    if (r = e[n], i !== null && Et(i, r))
      throw new Error(t + "contains a path " + i.toString() + " that is ancestor of another path " + r.toString());
    i = r;
  }
}, J0 = function(t, e, n, r) {
  const i = Vo(t, "values");
  if (!(e && typeof e == "object") || Array.isArray(e))
    throw new Error(i + " must be an object containing the children to replace.");
  const s = [];
  qe(e, (o, a) => {
    const l = new oe(o);
    if (ea(i, a, Te(n, l)), cc(l) === ".priority" && !_l(a))
      throw new Error(i + "contains an invalid value for '" + l.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
    s.push(l);
  }), Q0(i, s);
}, Lc = function(t, e, n, r) {
  if (!Dp(n))
    throw new Error(Vo(t, e) + 'was an invalid path = "' + n + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
}, X0 = function(t, e, n, r) {
  n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Lc(t, e, n);
}, Oc = function(t, e) {
  if (B(e) === ".info")
    throw new Error(t + " failed = Can't modify data under /.info/");
}, Z0 = function(t, e) {
  const n = e.path.toString();
  if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !xc(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || n.length !== 0 && !Y0(n))
    throw new Error(Vo(t, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
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
class eE {
  constructor() {
    this.eventLists_ = [], this.recursionDepth_ = 0;
  }
}
function ta(t, e) {
  let n = null;
  for (let r = 0; r < e.length; r++) {
    const i = e[r], s = i.getPath();
    n !== null && !uc(s, n.path) && (t.eventLists_.push(n), n = null), n === null && (n = { events: [], path: s }), n.events.push(i);
  }
  n && t.eventLists_.push(n);
}
function Mp(t, e, n) {
  ta(t, n), $p(t, (r) => uc(r, e));
}
function St(t, e, n) {
  ta(t, n), $p(t, (r) => Et(r, e) || Et(e, r));
}
function $p(t, e) {
  t.recursionDepth_++;
  let n = !0;
  for (let r = 0; r < t.eventLists_.length; r++) {
    const i = t.eventLists_[r];
    if (i) {
      const s = i.path;
      e(s) ? (tE(t.eventLists_[r]), t.eventLists_[r] = null) : n = !1;
    }
  }
  n && (t.eventLists_ = []), t.recursionDepth_--;
}
function tE(t) {
  for (let e = 0; e < t.events.length; e++) {
    const n = t.events[e];
    if (n !== null) {
      t.events[e] = null;
      const r = n.getEventRunner();
      zi && ze("event: " + n.toString()), ci(r);
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
const nE = "repo_interrupt", rE = 25;
class iE {
  constructor(e, n, r, i) {
    this.repoInfo_ = e, this.forceRestClient_ = n, this.authTokenProvider_ = r, this.appCheckProvider_ = i, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new eE(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = bo(), this.transactionQueueTree_ = new Pc(), this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString();
  }
  /**
   * @returns The URL corresponding to the root of this Firebase.
   */
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
}
function sE(t, e, n) {
  if (t.stats_ = ac(t.repoInfo_), t.forceRestClient_ || Mw())
    t.server_ = new yo(t.repoInfo_, (r, i, s, o) => {
      _d(t, r, i, s, o);
    }, t.authTokenProvider_, t.appCheckProvider_), setTimeout(() => gd(
      t,
      /* connectStatus= */
      !0
    ), 0);
  else {
    if (typeof n < "u" && n !== null) {
      if (typeof n != "object")
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      try {
        $e(n);
      } catch (r) {
        throw new Error("Invalid authOverride provided: " + r);
      }
    }
    t.persistentConnection_ = new dn(t.repoInfo_, e, (r, i, s, o) => {
      _d(t, r, i, s, o);
    }, (r) => {
      gd(t, r);
    }, (r) => {
      oE(t, r);
    }, t.authTokenProvider_, t.appCheckProvider_, n), t.server_ = t.persistentConnection_;
  }
  t.authTokenProvider_.addTokenChangeListener((r) => {
    t.server_.refreshAuthToken(r);
  }), t.appCheckProvider_.addTokenChangeListener((r) => {
    t.server_.refreshAppCheckToken(r.token);
  }), t.statsReporter_ = Ww(t.repoInfo_, () => new W1(t.stats_, t.server_)), t.infoData_ = new M1(), t.infoSyncTree_ = new pd({
    startListening: (r, i, s, o) => {
      let a = [];
      const l = t.infoData_.getNode(r._path);
      return l.isEmpty() || (a = As(t.infoSyncTree_, r._path, l), setTimeout(() => {
        o("ok");
      }, 0)), a;
    },
    stopListening: () => {
    }
  }), Dc(t, "connected", !1), t.serverSyncTree_ = new pd({
    startListening: (r, i, s, o) => (t.server_.listen(r, s, i, (a, l) => {
      const c = o(a, l);
      St(t.eventQueue_, r._path, c);
    }), []),
    stopListening: (r, i) => {
      t.server_.unlisten(r, i);
    }
  });
}
function Fp(t) {
  const n = t.infoData_.getNode(new oe(".info/serverTimeOffset")).val() || 0;
  return (/* @__PURE__ */ new Date()).getTime() + n;
}
function na(t) {
  return W0({
    timestamp: Fp(t)
  });
}
function _d(t, e, n, r, i) {
  t.dataUpdateCount++;
  const s = new oe(e);
  n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
  let o = [];
  if (i)
    if (r) {
      const l = ao(n, (c) => Me(c));
      o = D0(t.serverSyncTree_, s, l, i);
    } else {
      const l = Me(n);
      o = Sp(t.serverSyncTree_, s, l, i);
    }
  else if (r) {
    const l = ao(n, (c) => Me(c));
    o = x0(t.serverSyncTree_, s, l);
  } else {
    const l = Me(n);
    o = As(t.serverSyncTree_, s, l);
  }
  let a = s;
  o.length > 0 && (a = ei(t, s)), St(t.eventQueue_, a, o);
}
function gd(t, e) {
  Dc(t, "connected", e), e === !1 && uE(t);
}
function oE(t, e) {
  qe(e, (n, r) => {
    Dc(t, n, r);
  });
}
function Dc(t, e, n) {
  const r = new oe("/.info/" + e), i = Me(n);
  t.infoData_.updateSnapshot(r, i);
  const s = As(t.infoSyncTree_, r, i);
  St(t.eventQueue_, r, s);
}
function Mc(t) {
  return t.nextWriteId_++;
}
function aE(t, e, n) {
  const r = M0(t.serverSyncTree_, e);
  return r != null ? Promise.resolve(r) : t.server_.get(e).then((i) => {
    const s = Me(i).withIndex(e._queryParams.getIndex());
    pl(t.serverSyncTree_, e, n, !0);
    let o;
    if (e._queryParams.loadsAllData())
      o = As(t.serverSyncTree_, e._path, s);
    else {
      const a = cs(t.serverSyncTree_, e);
      o = Sp(t.serverSyncTree_, e._path, s, a);
    }
    return St(t.eventQueue_, e._path, o), Ao(t.serverSyncTree_, e, n, null, !0), s;
  }, (i) => (Ns(t, "get for query " + $e(e) + " failed: " + i), Promise.reject(new Error(i))));
}
function lE(t, e, n, r, i) {
  Ns(t, "set", {
    path: e.toString(),
    value: n,
    priority: r
  });
  const s = na(t), o = Me(n, r), a = Ic(t.serverSyncTree_, e), l = Np(o, a, s), c = Mc(t), d = Tp(t.serverSyncTree_, e, l, c, !0);
  ta(t.eventQueue_, d), t.server_.put(e.toString(), o.val(
    /*export=*/
    !0
  ), (u, f) => {
    const p = u === "ok";
    p || tt("set at " + e + " failed: " + u);
    const g = Ln(t.serverSyncTree_, c, !p);
    St(t.eventQueue_, e, g), vl(t, i, u, f);
  });
  const h = Fc(t, e);
  ei(t, h), St(t.eventQueue_, h, []);
}
function cE(t, e, n, r) {
  Ns(t, "update", { path: e.toString(), value: n });
  let i = !0;
  const s = na(t), o = {};
  if (qe(n, (a, l) => {
    i = !1, o[a] = Pp(Te(e, a), Me(l), t.serverSyncTree_, s);
  }), i)
    ze("update() called with empty data.  Don't do anything."), vl(t, r, "ok", void 0);
  else {
    const a = Mc(t), l = N0(t.serverSyncTree_, e, o, a);
    ta(t.eventQueue_, l), t.server_.merge(e.toString(), n, (c, d) => {
      const h = c === "ok";
      h || tt("update at " + e + " failed: " + c);
      const u = Ln(t.serverSyncTree_, a, !h), f = u.length > 0 ? ei(t, e) : e;
      St(t.eventQueue_, f, u), vl(t, r, c, d);
    }), qe(n, (c) => {
      const d = Fc(t, Te(e, c));
      ei(t, d);
    }), St(t.eventQueue_, e, []);
  }
}
function uE(t) {
  Ns(t, "onDisconnectEvents");
  const e = na(t), n = bo();
  ll(t.onDisconnect_, ne(), (i, s) => {
    const o = Pp(i, s, t.serverSyncTree_, e);
    up(n, i, o);
  });
  let r = [];
  ll(n, ne(), (i, s) => {
    r = r.concat(As(t.serverSyncTree_, i, s));
    const o = Fc(t, i);
    ei(t, o);
  }), t.onDisconnect_ = bo(), St(t.eventQueue_, ne(), r);
}
function dE(t, e, n) {
  let r;
  B(e._path) === ".info" ? r = pl(t.infoSyncTree_, e, n) : r = pl(t.serverSyncTree_, e, n), Mp(t.eventQueue_, e._path, r);
}
function gl(t, e, n) {
  let r;
  B(e._path) === ".info" ? r = Ao(t.infoSyncTree_, e, n) : r = Ao(t.serverSyncTree_, e, n), Mp(t.eventQueue_, e._path, r);
}
function hE(t) {
  t.persistentConnection_ && t.persistentConnection_.interrupt(nE);
}
function Ns(t, ...e) {
  let n = "";
  t.persistentConnection_ && (n = t.persistentConnection_.id + ":"), ze(n, ...e);
}
function vl(t, e, n, r) {
  e && ci(() => {
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
function Up(t, e, n) {
  return Ic(t.serverSyncTree_, e, n) || $.EMPTY_NODE;
}
function $c(t, e = t.transactionQueueTree_) {
  if (e || ra(t, e), di(e)) {
    const n = Wp(t, e);
    S(n.length > 0, "Sending zero length transaction queue"), n.every(
      (i) => i.status === 0
      /* TransactionStatus.RUN */
    ) && fE(t, Rs(e), n);
  } else Lp(e) && Zo(e, (n) => {
    $c(t, n);
  });
}
function fE(t, e, n) {
  const r = n.map((c) => c.currentWriteId), i = Up(t, e, r);
  let s = i;
  const o = i.hash();
  for (let c = 0; c < n.length; c++) {
    const d = n[c];
    S(d.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."), d.status = 1, d.retryCount++;
    const h = et(e, d.path);
    s = s.updateChild(h, d.currentOutputSnapshotRaw);
  }
  const a = s.val(!0), l = e;
  t.server_.put(l.toString(), a, (c) => {
    Ns(t, "transaction put response", {
      path: l.toString(),
      status: c
    });
    let d = [];
    if (c === "ok") {
      const h = [];
      for (let u = 0; u < n.length; u++)
        n[u].status = 2, d = d.concat(Ln(t.serverSyncTree_, n[u].currentWriteId)), n[u].onComplete && h.push(() => n[u].onComplete(null, !0, n[u].currentOutputSnapshotResolved)), n[u].unwatcher();
      ra(t, Nc(t.transactionQueueTree_, e)), $c(t, t.transactionQueueTree_), St(t.eventQueue_, e, d);
      for (let u = 0; u < h.length; u++)
        ci(h[u]);
    } else {
      if (c === "datastale")
        for (let h = 0; h < n.length; h++)
          n[h].status === 3 ? n[h].status = 4 : n[h].status = 0;
      else {
        tt("transaction at " + l.toString() + " failed: " + c);
        for (let h = 0; h < n.length; h++)
          n[h].status = 4, n[h].abortReason = c;
      }
      ei(t, e);
    }
  }, o);
}
function ei(t, e) {
  const n = Hp(t, e), r = Rs(n), i = Wp(t, n);
  return pE(t, i, r), r;
}
function pE(t, e, n) {
  if (e.length === 0)
    return;
  const r = [];
  let i = [];
  const o = e.filter((a) => a.status === 0).map((a) => a.currentWriteId);
  for (let a = 0; a < e.length; a++) {
    const l = e[a], c = et(n, l.path);
    let d = !1, h;
    if (S(c !== null, "rerunTransactionsUnderNode_: relativePath should not be null."), l.status === 4)
      d = !0, h = l.abortReason, i = i.concat(Ln(t.serverSyncTree_, l.currentWriteId, !0));
    else if (l.status === 0)
      if (l.retryCount >= rE)
        d = !0, h = "maxretry", i = i.concat(Ln(t.serverSyncTree_, l.currentWriteId, !0));
      else {
        const u = Up(t, l.path, o);
        l.currentInputSnapshot = u;
        const f = e[a].update(u.val());
        if (f !== void 0) {
          ea("transaction failed: Data returned ", f, l.path);
          let p = Me(f);
          typeof f == "object" && f != null && Qt(f, ".priority") || (p = p.updatePriority(u.getPriority()));
          const w = l.currentWriteId, C = na(t), T = Np(p, u, C);
          l.currentOutputSnapshotRaw = p, l.currentOutputSnapshotResolved = T, l.currentWriteId = Mc(t), o.splice(o.indexOf(w), 1), i = i.concat(Tp(t.serverSyncTree_, l.path, T, l.currentWriteId, l.applyLocally)), i = i.concat(Ln(t.serverSyncTree_, w, !0));
        } else
          d = !0, h = "nodata", i = i.concat(Ln(t.serverSyncTree_, l.currentWriteId, !0));
      }
    St(t.eventQueue_, n, i), i = [], d && (e[a].status = 2, (function(u) {
      setTimeout(u, Math.floor(0));
    })(e[a].unwatcher), e[a].onComplete && (h === "nodata" ? r.push(() => e[a].onComplete(null, !1, e[a].currentInputSnapshot)) : r.push(() => e[a].onComplete(new Error(h), !1, null))));
  }
  ra(t, t.transactionQueueTree_);
  for (let a = 0; a < r.length; a++)
    ci(r[a]);
  $c(t, t.transactionQueueTree_);
}
function Hp(t, e) {
  let n, r = t.transactionQueueTree_;
  for (n = B(e); n !== null && di(r) === void 0; )
    r = Nc(r, n), e = ge(e), n = B(e);
  return r;
}
function Wp(t, e) {
  const n = [];
  return Vp(t, e, n), n.sort((r, i) => r.order - i.order), n;
}
function Vp(t, e, n) {
  const r = di(e);
  if (r)
    for (let i = 0; i < r.length; i++)
      n.push(r[i]);
  Zo(e, (i) => {
    Vp(t, i, n);
  });
}
function ra(t, e) {
  const n = di(e);
  if (n) {
    let r = 0;
    for (let i = 0; i < n.length; i++)
      n[i].status !== 2 && (n[r] = n[i], r++);
    n.length = r, xp(e, n.length > 0 ? n : void 0);
  }
  Zo(e, (r) => {
    ra(t, r);
  });
}
function Fc(t, e) {
  const n = Rs(Hp(t, e)), r = Nc(t.transactionQueueTree_, e);
  return B0(r, (i) => {
    Oa(t, i);
  }), Oa(t, r), Op(r, (i) => {
    Oa(t, i);
  }), n;
}
function Oa(t, e) {
  const n = di(e);
  if (n) {
    const r = [];
    let i = [], s = -1;
    for (let o = 0; o < n.length; o++)
      n[o].status === 3 || (n[o].status === 1 ? (S(s === o - 1, "All SENT items should be at beginning of queue."), s = o, n[o].status = 3, n[o].abortReason = "set") : (S(n[o].status === 0, "Unexpected transaction status in abort"), n[o].unwatcher(), i = i.concat(Ln(t.serverSyncTree_, n[o].currentWriteId, !0)), n[o].onComplete && r.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
    s === -1 ? xp(e, void 0) : n.length = s + 1, St(t.eventQueue_, Rs(e), i);
    for (let o = 0; o < r.length; o++)
      ci(r[o]);
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
function mE(t) {
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
function _E(t) {
  const e = {};
  t.charAt(0) === "?" && (t = t.substring(1));
  for (const n of t.split("&")) {
    if (n.length === 0)
      continue;
    const r = n.split("=");
    r.length === 2 ? e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]) : tt(`Invalid query segment '${n}' in query '${t}'`);
  }
  return e;
}
const vd = function(t, e) {
  const n = gE(t), r = n.namespace;
  n.domain === "firebase.com" && pn(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), (!r || r === "undefined") && n.domain !== "localhost" && pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || kw();
  const i = n.scheme === "ws" || n.scheme === "wss";
  return {
    repoInfo: new Bf(
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
    path: new oe(n.pathString)
  };
}, gE = function(t) {
  let e = "", n = "", r = "", i = "", s = "", o = !0, a = "https", l = 443;
  if (typeof t == "string") {
    let c = t.indexOf("//");
    c >= 0 && (a = t.substring(0, c - 1), t = t.substring(c + 2));
    let d = t.indexOf("/");
    d === -1 && (d = t.length);
    let h = t.indexOf("?");
    h === -1 && (h = t.length), e = t.substring(0, Math.min(d, h)), d < h && (i = mE(t.substring(d, h)));
    const u = _E(t.substring(Math.min(t.length, h)));
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
const yd = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", vE = /* @__PURE__ */ (function() {
  let t = 0;
  const e = [];
  return function(n) {
    const r = n === t;
    t = n;
    let i;
    const s = new Array(8);
    for (i = 7; i >= 0; i--)
      s[i] = yd.charAt(n % 64), n = Math.floor(n / 64);
    S(n === 0, "Cannot push at time == 0");
    let o = s.join("");
    if (r) {
      for (i = 11; i >= 0 && e[i] === 63; i--)
        e[i] = 0;
      e[i]++;
    } else
      for (i = 0; i < 12; i++)
        e[i] = Math.floor(Math.random() * 64);
    for (i = 0; i < 12; i++)
      o += yd.charAt(e[i]);
    return S(o.length === 20, "nextPushId: Length should be 20."), o;
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
class yE {
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
    return this.getPath().toString() + ":" + this.eventType + ":" + $e(this.snapshot.exportVal());
  }
}
class bE {
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
class jp {
  constructor(e, n) {
    this.snapshotCallback = e, this.cancelCallback = n;
  }
  onValue(e, n) {
    this.snapshotCallback.call(null, e, n);
  }
  onCancel(e) {
    return S(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e);
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
class er {
  /**
   * @hideconstructor
   */
  constructor(e, n, r, i) {
    this._repo = e, this._path = n, this._queryParams = r, this._orderByCalled = i;
  }
  get key() {
    return q(this._path) ? null : cc(this._path);
  }
  get ref() {
    return new En(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = id(this._queryParams), n = sc(e);
    return n === "{}" ? "default" : n;
  }
  /**
   * An object representation of the query parameters used by this Query.
   */
  get _queryObject() {
    return id(this._queryParams);
  }
  isEqual(e) {
    if (e = Le(e), !(e instanceof er))
      return !1;
    const n = this._repo === e._repo, r = uc(this._path, e._path), i = this._queryIdentifier === e._queryIdentifier;
    return n && r && i;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + u1(this._path);
  }
}
function zp(t, e) {
  if (t._orderByCalled === !0)
    throw new Error(e + ": You can't combine multiple orderBy calls.");
}
function ia(t) {
  let e = null, n = null;
  if (t.hasStart() && (e = t.getIndexStartValue()), t.hasEnd() && (n = t.getIndexEndValue()), t.getIndex() === Un) {
    const r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().", i = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
    if (t.hasStart()) {
      if (t.getIndexStartName() !== yr)
        throw new Error(r);
      if (typeof e != "string")
        throw new Error(i);
    }
    if (t.hasEnd()) {
      if (t.getIndexEndName() !== Bn)
        throw new Error(r);
      if (typeof n != "string")
        throw new Error(i);
    }
  } else if (t.getIndex() === Ee) {
    if (e != null && !_l(e) || n != null && !_l(n))
      throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).");
  } else if (S(t.getIndex() instanceof fc || t.getIndex() === ap, "unknown index type."), e != null && typeof e == "object" || n != null && typeof n == "object")
    throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.");
}
function Bp(t) {
  if (t.hasStart() && t.hasEnd() && t.hasLimit() && !t.hasAnchoredLimit())
    throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.");
}
class En extends er {
  /** @hideconstructor */
  constructor(e, n) {
    super(e, n, new mc(), !1);
  }
  get parent() {
    const e = ep(this._path);
    return e === null ? null : new En(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; )
      e = e.parent;
    return e;
  }
}
class us {
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
    const n = new oe(e), r = ds(this.ref, e);
    return new us(this._node.getChild(n), r, Ee);
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
    return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (r, i) => e(new us(i, ds(this.ref, r), Ee)));
  }
  /**
   * Returns true if the specified child path has (non-null) data.
   *
   * @param path - A relative path to the location of a potential child.
   * @returns `true` if data exists at the specified child path; else
   *  `false`.
   */
  hasChild(e) {
    const n = new oe(e);
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
function fe(t, e) {
  return t = Le(t), t._checkNotDeleted("ref"), e !== void 0 ? ds(t._root, e) : t._root;
}
function ds(t, e) {
  return t = Le(t), B(t._path) === null ? X0("child", "path", e) : Lc("child", "path", e), new En(t._repo, Te(t._path, e));
}
function sa(t, e) {
  t = Le(t), Oc("push", t._path), Ps("push", e, t._path, !0);
  const n = Fp(t._repo), r = vE(n), i = ds(t, r), s = ds(t, r);
  let o;
  return e != null ? o = xs(s, e).then(() => s) : o = Promise.resolve(s), i.then = o.then.bind(o), i.catch = o.then.bind(o, void 0), i;
}
function qp(t) {
  return Oc("remove", t._path), xs(t, null);
}
function xs(t, e) {
  t = Le(t), Oc("set", t._path), Ps("set", e, t._path, !1);
  const n = new ys();
  return lE(
    t._repo,
    t._path,
    e,
    /*priority=*/
    null,
    n.wrapCallback(() => {
    })
  ), n.promise;
}
function mn(t, e) {
  J0("update", e, t._path);
  const n = new ys();
  return cE(t._repo, t._path, e, n.wrapCallback(() => {
  })), n.promise;
}
function oa(t) {
  t = Le(t);
  const e = new jp(() => {
  }), n = new aa(e);
  return aE(t._repo, t, n).then((r) => new us(r, new En(t._repo, t._path), t._queryParams.getIndex()));
}
class aa {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, n) {
    const r = n._queryParams.getIndex();
    return new yE("value", this, new us(e.snapshotNode, new En(n._repo, n._path), r));
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new bE(this, e, n) : null;
  }
  matches(e) {
    return e instanceof aa ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
function wE(t, e, n, r, i) {
  let s;
  if (typeof r == "object" && (s = void 0, i = r), typeof r == "function" && (s = r), i && i.onlyOnce) {
    const l = n, c = (d, h) => {
      gl(t._repo, t, a), l(d, h);
    };
    c.userCallback = n.userCallback, c.context = n.context, n = c;
  }
  const o = new jp(n, s || void 0), a = new aa(o);
  return dE(t._repo, t, a), () => gl(t._repo, t, a);
}
function Yn(t, e, n, r) {
  return wE(t, "value", e, n, r);
}
function hi(t, e, n) {
  gl(t._repo, t, null);
}
class fi {
}
class Gp extends fi {
  constructor(e, n) {
    super(), this._value = e, this._key = n, this.type = "endAt";
  }
  _apply(e) {
    Ps("endAt", this._value, e._path, !0);
    const n = D1(e._queryParams, this._value, this._key);
    if (Bp(n), ia(n), e._queryParams.hasEnd())
      throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");
    return new er(e._repo, e._path, n, e._orderByCalled);
  }
}
function Kp(t, e) {
  return new Gp(t, e);
}
class Yp extends fi {
  constructor(e, n) {
    super(), this._value = e, this._key = n, this.type = "startAt";
  }
  _apply(e) {
    Ps("startAt", this._value, e._path, !0);
    const n = O1(e._queryParams, this._value, this._key);
    if (Bp(n), ia(n), e._queryParams.hasStart())
      throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");
    return new er(e._repo, e._path, n, e._orderByCalled);
  }
}
function Qp(t = null, e) {
  return new Yp(t, e);
}
class EE extends fi {
  constructor(e) {
    super(), this._limit = e, this.type = "limitToLast";
  }
  _apply(e) {
    if (e._queryParams.hasLimit())
      throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
    return new er(e._repo, e._path, L1(e._queryParams, this._limit), e._orderByCalled);
  }
}
function IE(t) {
  if (typeof t != "number" || Math.floor(t) !== t || t <= 0)
    throw new Error("limitToLast: First argument must be a positive integer.");
  return new EE(t);
}
class CE extends fi {
  constructor(e) {
    super(), this._path = e, this.type = "orderByChild";
  }
  _apply(e) {
    zp(e, "orderByChild");
    const n = new oe(this._path);
    if (q(n))
      throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");
    const r = new fc(n), i = cp(e._queryParams, r);
    return ia(i), new er(
      e._repo,
      e._path,
      i,
      /*orderByCalled=*/
      !0
    );
  }
}
function Jp(t) {
  if (t === "$key")
    throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
  if (t === "$priority")
    throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
  if (t === "$value")
    throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
  return Lc("orderByChild", "path", t), new CE(t);
}
class TE extends fi {
  constructor() {
    super(...arguments), this.type = "orderByKey";
  }
  _apply(e) {
    zp(e, "orderByKey");
    const n = cp(e._queryParams, Un);
    return ia(n), new er(
      e._repo,
      e._path,
      n,
      /*orderByCalled=*/
      !0
    );
  }
}
function SE() {
  return new TE();
}
class kE extends fi {
  constructor(e, n) {
    super(), this._value = e, this._key = n, this.type = "equalTo";
  }
  _apply(e) {
    if (Ps("equalTo", this._value, e._path, !1), e._queryParams.hasStart())
      throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");
    if (e._queryParams.hasEnd())
      throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");
    return new Gp(this._value, this._key)._apply(new Yp(this._value, this._key)._apply(e));
  }
}
function AE(t, e) {
  return new kE(t, e);
}
function Uc(t, ...e) {
  let n = Le(t);
  for (const r of e)
    n = r._apply(n);
  return n;
}
I0(En);
A0(En);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const RE = "FIREBASE_DATABASE_EMULATOR_HOST", yl = {};
let PE = !1;
function NE(t, e, n, r) {
  const i = e.lastIndexOf(":"), s = e.substring(0, i), o = Cr(s);
  t.repoInfo_ = new Bf(
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
function xE(t, e, n, r, i) {
  let s = r || t.options.databaseURL;
  s === void 0 && (t.options.projectId || pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), ze("Using default host for project ", t.options.projectId), s = `${t.options.projectId}-default-rtdb.firebaseio.com`);
  let o = vd(s, i), a = o.repoInfo, l;
  typeof process < "u" && process.env && (l = process.env[RE]), l ? (s = `http://${l}?ns=${a.namespace}`, o = vd(s, i), a = o.repoInfo) : o.repoInfo.secure;
  const c = new Fw(t.name, t.options, e);
  Z0("Invalid Firebase Database URL", o), q(o.path) || pn("Database URL must point to the root of a Firebase Database (not including a child path).");
  const d = OE(a, t, c, new $w(t, n));
  return new DE(d, t);
}
function LE(t, e) {
  const n = yl[e];
  (!n || n[t.key] !== t) && pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`), hE(t), delete n[t.key];
}
function OE(t, e, n, r) {
  let i = yl[e.name];
  i || (i = {}, yl[e.name] = i);
  let s = i[t.toURLString()];
  return s && pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), s = new iE(t, PE, n, r), i[t.toURLString()] = s, s;
}
class DE {
  /** @hideconstructor */
  constructor(e, n) {
    this._repoInternal = e, this.app = n, this.type = "database", this._instanceStarted = !1;
  }
  get _repo() {
    return this._instanceStarted || (sE(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal;
  }
  get _root() {
    return this._rootInternal || (this._rootInternal = new En(this._repo, ne())), this._rootInternal;
  }
  _delete() {
    return this._rootInternal !== null && (LE(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve();
  }
  _checkNotDeleted(e) {
    this._rootInternal === null && pn("Cannot call " + e + " on a deleted database.");
  }
}
function ME(t = Gl(), e) {
  const n = zo(t, "database").getImmediate({
    identifier: e
  });
  if (!n._instanceStarted) {
    const r = Lh("database");
    r && $E(n, ...r);
  }
  return n;
}
function $E(t, e, n, r = {}) {
  t = Le(t), t._checkNotDeleted("useEmulator");
  const i = `${e}:${n}`, s = t._repoInternal;
  if (t._instanceStarted) {
    if (i === t._repoInternal.repoInfo_.host && mr(r, s.repoInfo_.emulatorOptions))
      return;
    pn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.");
  }
  let o;
  if (s.repoInfo_.nodeAdmin)
    r.mockUserToken && pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new Qs(Qs.OWNER);
  else if (r.mockUserToken) {
    const a = typeof r.mockUserToken == "string" ? r.mockUserToken : Mh(r.mockUserToken, t.app.options.projectId);
    o = new Qs(a);
  }
  Cr(e) && (Vl(e), jl("Database", !0)), NE(s, i, r, o);
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
function FE(t) {
  ww(Sr), _r(new zn(
    "database",
    (e, { instanceIdentifier: n }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("auth-internal"), s = e.getProvider("app-check-internal");
      return xE(r, i, s, n);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), jt(Wu, Vu, t), jt(Wu, Vu, "esm2020");
}
function la(t) {
  return {
    ".sv": {
      increment: t
    }
  };
}
dn.prototype.simpleListen = function(t, e) {
  this.sendRequest("q", { p: t }, e);
};
dn.prototype.echo = function(t, e) {
  this.sendRequest("echo", { d: t }, e);
};
FE();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xp = "firebasestorage.googleapis.com", UE = "storageBucket", HE = 120 * 1e3, WE = 600 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends wn {
  /**
   * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   * @param status_ - Corresponding HTTP Status Code
   */
  constructor(e, n, r = 0) {
    super(Da(e), `Firebase Storage: ${n} (${Da(e)})`), this.status_ = r, this.customData = { serverResponse: null }, this._baseMessage = this.message, Object.setPrototypeOf(this, Xt.prototype);
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
    return Da(e) === this.code;
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
function Da(t) {
  return "storage/" + t;
}
function VE() {
  const t = "An unknown error occurred, please check the error payload for server response.";
  return new Xt(Gt.UNKNOWN, t);
}
function jE() {
  return new Xt(Gt.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function zE() {
  return new Xt(Gt.CANCELED, "User canceled the upload/download.");
}
function BE(t) {
  return new Xt(Gt.INVALID_URL, "Invalid URL '" + t + "'.");
}
function qE(t) {
  return new Xt(Gt.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + t + "'.");
}
function bd(t) {
  return new Xt(Gt.INVALID_ARGUMENT, t);
}
function Zp() {
  return new Xt(Gt.APP_DELETED, "The Firebase app was deleted.");
}
function GE(t) {
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
    let r;
    try {
      r = Dt.makeFromUrl(e, n);
    } catch {
      return new Dt(e, "");
    }
    if (r.path === "")
      return r;
    throw qE(e);
  }
  static makeFromUrl(e, n) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";
    function s(A) {
      A.path.charAt(A.path.length - 1) === "/" && (A.path_ = A.path_.slice(0, -1));
    }
    const o = "(/(.*))?$", a = new RegExp("^gs://" + i + o, "i"), l = { bucket: 1, path: 3 };
    function c(A) {
      A.path_ = decodeURIComponent(A.path);
    }
    const d = "v[A-Za-z0-9_]+", h = n.replace(/[.]/g, "\\."), u = "(/([^?#]*).*)?$", f = new RegExp(`^https?://${h}/${d}/b/${i}/o${u}`, "i"), p = { bucket: 1, path: 3 }, g = n === Xp ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n, w = "([^?#]*)", C = new RegExp(`^https?://${g}/${i}/${w}`, "i"), k = [
      { regex: a, indices: l, postModify: s },
      {
        regex: f,
        indices: p,
        postModify: c
      },
      {
        regex: C,
        indices: { bucket: 1, path: 2 },
        postModify: c
      }
    ];
    for (let A = 0; A < k.length; A++) {
      const D = k[A], I = D.regex.exec(e);
      if (I) {
        const E = I[D.indices.bucket];
        let v = I[D.indices.path];
        v || (v = ""), r = new Dt(E, v), D.postModify(r);
        break;
      }
    }
    if (r == null)
      throw BE(e);
    return r;
  }
}
class KE {
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
function YE(t, e, n) {
  let r = 1, i = null, s = null, o = !1, a = 0;
  function l() {
    return a === 2;
  }
  let c = !1;
  function d(...w) {
    c || (c = !0, e.apply(null, w));
  }
  function h(w) {
    i = setTimeout(() => {
      i = null, t(f, l());
    }, w);
  }
  function u() {
    s && clearTimeout(s);
  }
  function f(w, ...C) {
    if (c) {
      u();
      return;
    }
    if (w) {
      u(), d.call(null, w, ...C);
      return;
    }
    if (l() || o) {
      u(), d.call(null, w, ...C);
      return;
    }
    r < 64 && (r *= 2);
    let k;
    a === 1 ? (a = 2, k = 0) : k = (r + Math.random()) * 1e3, h(k);
  }
  let p = !1;
  function g(w) {
    p || (p = !0, u(), !c && (i !== null ? (w || (a = 2), clearTimeout(i), h(0)) : w || (a = 1)));
  }
  return h(0), s = setTimeout(() => {
    o = !0, g(!0);
  }, n), g;
}
function QE(t) {
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
function JE(t) {
  return t !== void 0;
}
function wd(t, e, n, r) {
  if (r < e)
    throw bd(`Invalid value for '${t}'. Expected ${e} or greater.`);
  if (r > n)
    throw bd(`Invalid value for '${t}'. Expected ${n} or less.`);
}
function XE(t) {
  const e = encodeURIComponent;
  let n = "?";
  for (const r in t)
    if (t.hasOwnProperty(r)) {
      const i = e(r) + "=" + e(t[r]);
      n = n + i + "&";
    }
  return n = n.slice(0, -1), n;
}
var Ro;
(function(t) {
  t[t.NO_ERROR = 0] = "NO_ERROR", t[t.NETWORK_ERROR = 1] = "NETWORK_ERROR", t[t.ABORT = 2] = "ABORT";
})(Ro || (Ro = {}));
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
function ZE(t, e) {
  const n = t >= 500 && t < 600, i = [
    // Request Timeout: web server didn't receive full request in time.
    408,
    // Too Many Requests: you're getting rate-limited, basically.
    429
  ].indexOf(t) !== -1, s = e.indexOf(t) !== -1;
  return n || i || s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eI {
  constructor(e, n, r, i, s, o, a, l, c, d, h, u = !0, f = !1) {
    this.url_ = e, this.method_ = n, this.headers_ = r, this.body_ = i, this.successCodes_ = s, this.additionalRetryCodes_ = o, this.callback_ = a, this.errorCallback_ = l, this.timeout_ = c, this.progressCallback_ = d, this.connectionFactory_ = h, this.retry = u, this.isUsingEmulator = f, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((p, g) => {
      this.resolve_ = p, this.reject_ = g, this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */
  start_() {
    const e = (r, i) => {
      if (i) {
        r(!1, new zs(!1, null, !0));
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
        const a = s.getErrorCode() === Ro.NO_ERROR, l = s.getStatus();
        if (!a || ZE(l, this.additionalRetryCodes_) && this.retry) {
          const d = s.getErrorCode() === Ro.ABORT;
          r(!1, new zs(!1, null, d));
          return;
        }
        const c = this.successCodes_.indexOf(l) !== -1;
        r(!0, new zs(c, s));
      });
    }, n = (r, i) => {
      const s = this.resolve_, o = this.reject_, a = i.connection;
      if (i.wasSuccessCode)
        try {
          const l = this.callback_(a, a.getResponse());
          JE(l) ? s(l) : s();
        } catch (l) {
          o(l);
        }
      else if (a !== null) {
        const l = VE();
        l.serverResponse = a.getErrorText(), this.errorCallback_ ? o(this.errorCallback_(a, l)) : o(l);
      } else if (i.canceled) {
        const l = this.appDelete_ ? Zp() : zE();
        o(l);
      } else {
        const l = jE();
        o(l);
      }
    };
    this.canceled_ ? n(!1, new zs(!1, null, !0)) : this.backoffId_ = YE(e, n, this.timeout_);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e) {
    this.canceled_ = !0, this.appDelete_ = e || !1, this.backoffId_ !== null && QE(this.backoffId_), this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class zs {
  constructor(e, n, r) {
    this.wasSuccessCode = e, this.connection = n, this.canceled = !!r;
  }
}
function tI(t, e) {
  e !== null && e.length > 0 && (t.Authorization = "Firebase " + e);
}
function nI(t, e) {
  t["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager");
}
function rI(t, e) {
  e && (t["X-Firebase-GMPID"] = e);
}
function iI(t, e) {
  e !== null && (t["X-Firebase-AppCheck"] = e);
}
function sI(t, e, n, r, i, s, o = !0, a = !1) {
  const l = XE(t.urlParams), c = t.url + l, d = Object.assign({}, t.headers);
  return rI(d, e), tI(d, n), nI(d, s), iI(d, r), new eI(c, t.method, d, t.body, t.successCodes, t.additionalRetryCodes, t.handler, t.errorHandler, t.timeout, t.progressCallback, i, o, a);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oI(t) {
  if (t.length === 0)
    return null;
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.slice(0, e);
}
function aI(t) {
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
class Po {
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
    return new Po(e, n);
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
    return aI(this._location.path);
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
    const e = oI(this._location.path);
    if (e === null)
      return null;
    const n = new Dt(this._location.bucket, e);
    return new Po(this._service, n);
  }
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */
  _throwIfRoot(e) {
    if (this._location.path === "")
      throw GE(e);
  }
}
function Ed(t, e) {
  const n = e?.[UE];
  return n == null ? null : Dt.makeFromBucketSpec(n, t);
}
function lI(t, e, n, r = {}) {
  t.host = `${e}:${n}`;
  const i = Cr(e);
  i && (Vl(`https://${t.host}/b`), jl("Storage", !0)), t._isUsingEmulator = !0, t._protocol = i ? "https" : "http";
  const { mockUserToken: s } = r;
  s && (t._overrideAuthToken = typeof s == "string" ? s : Mh(s, t.app.options.projectId));
}
class cI {
  constructor(e, n, r, i, s, o = !1) {
    this.app = e, this._authProvider = n, this._appCheckProvider = r, this._url = i, this._firebaseVersion = s, this._isUsingEmulator = o, this._bucket = null, this._host = Xp, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = HE, this._maxUploadRetryTime = WE, this._requests = /* @__PURE__ */ new Set(), i != null ? this._bucket = Dt.makeFromBucketSpec(i, this._host) : this._bucket = Ed(this._host, this.app.options);
  }
  /**
   * The host string for this service, in the form of `host` or
   * `host:port`.
   */
  get host() {
    return this._host;
  }
  set host(e) {
    this._host = e, this._url != null ? this._bucket = Dt.makeFromBucketSpec(this._url, e) : this._bucket = Ed(e, this.app.options);
  }
  /**
   * The maximum time to retry uploads in milliseconds.
   */
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(e) {
    wd(
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
    wd(
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
    if (ct(this.app) && this.app.settings.appCheckToken)
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
    return new Po(this, e);
  }
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */
  _makeRequest(e, n, r, i, s = !0) {
    if (this._deleted)
      return new KE(Zp());
    {
      const o = sI(e, this._appId, r, i, n, this._firebaseVersion, s, this._isUsingEmulator);
      return this._requests.add(o), o.getPromise().then(() => this._requests.delete(o), () => this._requests.delete(o)), o;
    }
  }
  async makeRequestWithTokens(e, n) {
    const [r, i] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken()
    ]);
    return this._makeRequest(e, n, r, i).getPromise();
  }
}
const Id = "@firebase/storage", Cd = "0.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const em = "storage";
function uI(t = Gl(), e) {
  t = Le(t);
  const r = zo(t, em).getImmediate({
    identifier: e
  }), i = Lh("storage");
  return i && dI(r, ...i), r;
}
function dI(t, e, n, r = {}) {
  lI(t, e, n, r);
}
function hI(t, { instanceIdentifier: e }) {
  const n = t.getProvider("app").getImmediate(), r = t.getProvider("auth-internal"), i = t.getProvider("app-check-internal");
  return new cI(n, r, i, e, Sr);
}
function fI() {
  _r(new zn(
    em,
    hI,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), jt(Id, Cd, ""), jt(Id, Cd, "esm2020");
}
fI();
const tm = {
  apiKey: "AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",
  authDomain: "withcenter-test-5.firebaseapp.com",
  databaseURL: "https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "withcenter-test-5",
  storageBucket: "withcenter-test-5.appspot.com",
  messagingSenderId: "1064417466216",
  appId: "1:1064417466216:web:039565a60d9b0b74db28dd"
};
console.log("Firebase Config:", tm);
const Hc = Wh(tm), Kt = yw(Hc), pe = ME(Hc), HC = uI(Hc);
var pI = /* @__PURE__ */ W('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'), mI = /* @__PURE__ */ W('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'), _I = /* @__PURE__ */ W('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'), gI = /* @__PURE__ */ W('<h3 class="post-title svelte-1t1odzy"> </h3>'), vI = /* @__PURE__ */ W('<p class="post-text svelte-1t1odzy"> </p>'), yI = /* @__PURE__ */ W('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'), bI = /* @__PURE__ */ W('<div class="posts svelte-1t1odzy"></div>'), wI = /* @__PURE__ */ W('<div class="post-list-container svelte-1t1odzy"><!></div>');
const EI = {
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
function II(t, e) {
  yn(e, !0), Xn(t, EI);
  let n = wt(e, "path", 7, "posts"), r = wt(e, "limit", 7, "10"), i = /* @__PURE__ */ re(nn([])), s = /* @__PURE__ */ re(!0), o = /* @__PURE__ */ re(""), a = null;
  vs(() => {
    l();
  }), U_(() => {
    c();
  });
  function l() {
    try {
      a = fe(pe, n()), Yn(
        a,
        (T) => {
          const k = T.val();
          k ? N(i, Object.entries(k).map(([A, D]) => ({ id: A, ...D })).sort((A, D) => (D.timestamp || 0) - (A.timestamp || 0)).slice(0, parseInt(r())), !0) : N(i, [], !0), N(s, !1), N(o, "");
        },
        (T) => {
          console.error("데이터 읽기 오류:", T), N(o, "데이터를 불러오는 중 오류가 발생했습니다."), N(s, !1);
        }
      );
    } catch (T) {
      console.error("구독 설정 오류:", T), N(o, "데이터베이스 연결에 실패했습니다."), N(s, !1);
    }
  }
  function c() {
    a && hi(a);
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
    const k = typeof T == "string" ? Number(T) : T, A = new Date(k), I = (/* @__PURE__ */ new Date()).getTime() - A.getTime(), E = Math.floor(I / 6e4), v = Math.floor(I / 36e5), R = Math.floor(I / 864e5);
    return E < 1 ? "방금 전" : E < 60 ? `${E}분 전` : v < 24 ? `${v}시간 전` : R < 7 ? `${R}일 전` : A.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  }
  var f = {
    get path() {
      return n();
    },
    set path(T = "posts") {
      n(T), mt();
    },
    get limit() {
      return r();
    },
    set limit(T = "10") {
      r(T), mt();
    }
  }, p = wI(), g = _(p);
  {
    var w = (T) => {
      var k = pI();
      L(T, k);
    }, C = (T) => {
      var k = ke(), A = he(k);
      {
        var D = (E) => {
          var v = mI(), R = _(v), P = _(R, !0);
          m(R), m(v), ie(() => O(P, y(o))), L(E, v);
        }, I = (E) => {
          var v = ke(), R = he(v);
          {
            var P = (M) => {
              var H = _I();
              L(M, H);
            }, V = (M) => {
              var H = bI();
              si(H, 21, () => y(i), (J) => J.id, (J, U) => {
                var K = yI();
                K.__click = () => d(y(U)), K.__keydown = (ye) => h(ye, y(U));
                var ae = _(K), X = _(ae), Z = _(X), ee = _(Z, !0);
                m(Z);
                var te = b(Z, 2), Ae = _(te, !0);
                m(te), m(X), m(ae);
                var be = b(ae, 2), Ie = _(be);
                {
                  var z = (ye) => {
                    var Ge = gI(), Ke = _(Ge, !0);
                    m(Ge), ie(() => O(Ke, y(U).title)), L(ye, Ge);
                  };
                  we(Ie, (ye) => {
                    y(U).title && ye(z);
                  });
                }
                var le = b(Ie, 2);
                {
                  var ve = (ye) => {
                    var Ge = vI(), Ke = _(Ge, !0);
                    m(Ge), ie(() => O(Ke, y(U).content)), L(ye, Ge);
                  };
                  we(le, (ye) => {
                    y(U).content && ye(ve);
                  });
                }
                m(be);
                var Xe = b(be, 2), Oe = _(Xe), se = _(Oe);
                m(Oe);
                var De = b(Oe, 2), rt = _(De);
                m(De), m(Xe), m(K), ie(
                  (ye) => {
                    Re(K, "aria-label", `게시물: ${(y(U).title || y(U).content || "제목 없음") ?? ""}`), O(ee, y(U).author || "익명"), O(Ae, ye), O(se, `👍 ${(y(U).likes || 0) ?? ""}`), O(rt, `💬 ${(y(U).comments?.length || 0) ?? ""}`);
                  },
                  [() => u(y(U).timestamp)]
                ), L(J, K);
              }), m(H), L(M, H);
            };
            we(
              R,
              (M) => {
                y(i).length === 0 ? M(P) : M(V, !1);
              },
              !0
            );
          }
          L(E, v);
        };
        we(
          A,
          (E) => {
            y(o) ? E(D) : E(I, !1);
          },
          !0
        );
      }
      L(T, k);
    };
    we(g, (T) => {
      y(s) ? T(w) : T(C, !1);
    });
  }
  return m(p), L(t, p), bn(f);
}
ii(["click", "keydown"]);
customElements.define("post-list", me(II, { path: {}, limit: {} }, [], [], !0));
t_();
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
const CI = {
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
var TI = /* @__PURE__ */ k_("<svg><!><!></svg>");
function Ue(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Ne(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  yn(e, !1);
  let i = wt(e, "name", 12, void 0), s = wt(e, "color", 12, "currentColor"), o = wt(e, "size", 12, 24), a = wt(e, "strokeWidth", 12, 2), l = wt(e, "absoluteStrokeWidth", 12, !1), c = wt(e, "iconNode", 28, () => []);
  const d = (...g) => g.filter((w, C, T) => !!w && T.indexOf(w) === C).join(" ");
  var h = {
    get name() {
      return i();
    },
    set name(g) {
      i(g), mt();
    },
    get color() {
      return s();
    },
    set color(g) {
      s(g), mt();
    },
    get size() {
      return o();
    },
    set size(g) {
      o(g), mt();
    },
    get strokeWidth() {
      return a();
    },
    set strokeWidth(g) {
      a(g), mt();
    },
    get absoluteStrokeWidth() {
      return l();
    },
    set absoluteStrokeWidth(g) {
      l(g), mt();
    },
    get iconNode() {
      return c();
    },
    set iconNode(g) {
      c(g), mt();
    }
  };
  Sh();
  var u = TI();
  iu(
    u,
    (g, w) => ({
      ...CI,
      ...r,
      width: o(),
      height: o(),
      stroke: s(),
      "stroke-width": g,
      class: w
    }),
    [
      () => (Or(l()), Or(a()), Or(o()), qt(() => l() ? Number(a()) * 24 / Number(o()) : a())),
      () => (Or(i()), Or(n), qt(() => d("lucide-icon", "lucide", i() ? `lucide-${i()}` : "", n.class)))
    ]
  );
  var f = _(u);
  si(f, 1, c, Wo, (g, w) => {
    var C = /* @__PURE__ */ Ua(() => $m(y(w), 2));
    let T = () => y(C)[0], k = () => y(C)[1];
    var A = ke(), D = he(A);
    j_(D, T, !0, (I, E) => {
      iu(I, () => ({ ...k() }));
    }), L(g, A);
  });
  var p = b(f);
  return xe(p, e, "default", {}), m(u), L(t, u), bn(h);
}
me(
  Ue,
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
function nm(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "book-open" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(nm, {}, ["default"], [], !0);
function bl(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(bl, {}, ["default"], [], !0);
function rm(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(rm, {}, ["default"], [], !0);
function wl(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "external-link" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(wl, {}, ["default"], [], !0);
function Wc(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "file-text" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(Wc, {}, ["default"], [], !0);
function im(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "house" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(im, {}, ["default"], [], !0);
function Li(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "layout-grid" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(Li, {}, ["default"], [], !0);
function sm(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "log-in" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(sm, {}, ["default"], [], !0);
function om(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "log-out" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(om, {}, ["default"], [], !0);
function Oi(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "menu" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(Oi, {}, ["default"], [], !0);
function On(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "message-circle" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(On, {}, ["default"], [], !0);
function am(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "phone" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(am, {}, ["default"], [], !0);
function lm(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "send" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(lm, {}, ["default"], [], !0);
function cm(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "server" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(cm, {}, ["default"], [], !0);
function um(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ];
  Ue(t, Ve({ name: "settings" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(um, {}, ["default"], [], !0);
function dm(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "trending-up" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(dm, {}, ["default"], [], !0);
function Vn(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "user" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(Vn, {}, ["default"], [], !0);
function hs(t, e) {
  const n = Ne(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  Ue(t, Ve({ name: "users" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = ke(), a = he(o);
      xe(a, e, "default", {}), L(i, o);
    },
    $$slots: { default: !0 }
  }));
}
me(hs, {}, ["default"], [], !0);
var SI = /* @__PURE__ */ W("<option> </option>"), kI = /* @__PURE__ */ W('<div class="error-message svelte-1e01td3"> </div>'), AI = /* @__PURE__ */ W('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...', 1), RI = /* @__PURE__ */ W("<!> 인증 코드 전송", 1), PI = /* @__PURE__ */ W('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'), NI = /* @__PURE__ */ W('<div class="error-message svelte-1e01td3"> </div>'), xI = /* @__PURE__ */ W('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...', 1), LI = /* @__PURE__ */ W("<!> 로그인", 1), OI = /* @__PURE__ */ W('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'), DI = /* @__PURE__ */ W('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');
const MI = {
  hash: "svelte-1e01td3",
  code: `\r
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
  }`
};
function $I(t, e) {
  yn(e, !0), Xn(t, MI);
  const n = [
    { code: "+63", name: "필리핀 (Philippines)", flag: "🇵🇭" },
    { code: "+82", name: "한국 (Korea)", flag: "🇰🇷" },
    { code: "+86", name: "중국 (China)", flag: "🇨🇳" },
    { code: "+81", name: "일본 (Japan)", flag: "🇯🇵" },
    { code: "+1", name: "미국 (USA)", flag: "🇺🇸" }
  ];
  let r = /* @__PURE__ */ re(
    "+82"
    // 기본값: 한국
  ), i = /* @__PURE__ */ re(
    ""
    // 전화번호 (국가 코드 제외)
  ), s = /* @__PURE__ */ re(
    ""
    // SMS 인증 코드
  ), o = /* @__PURE__ */ re(
    "phone"
    // 'phone' | 'code'
  ), a = /* @__PURE__ */ re(!1), l = /* @__PURE__ */ re(""), c = /* @__PURE__ */ re(null), d = /* @__PURE__ */ re(null), h = /* @__PURE__ */ re(
    void 0
    // reCAPTCHA 위젯 ID 저장
  ), u = /* @__PURE__ */ re(
    null
    // reCAPTCHA 컨테이너 DOM 요소 참조
  );
  function f() {
    return new Promise((v, R) => {
      try {
        if (!y(u)) {
          const P = new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");
          console.error(P), N(l, "reCAPTCHA 초기화에 실패했습니다."), R(P);
          return;
        }
        if (y(c)) {
          if (y(h) !== void 0 && typeof window.grecaptcha < "u")
            try {
              window.grecaptcha.reset(y(h)), console.log("reCAPTCHA reset completed"), v(y(h));
              return;
            } catch (P) {
              console.warn("Failed to reset reCAPTCHA:", P);
            }
          try {
            y(c).clear(), N(c, null), N(h, void 0);
          } catch (P) {
            console.warn("Failed to clear reCAPTCHA:", P);
          }
        }
        N(
          c,
          new yb(Kt, y(u).id, {
            size: "invisible",
            // invisible 모드 활성화 - 사용자 상호작용 없이 자동 검증
            callback: () => {
              console.log("reCAPTCHA verified (invisible mode)");
            },
            "expired-callback": () => {
              console.warn("reCAPTCHA expired. Resetting..."), typeof window.grecaptcha < "u" && y(h) !== void 0 ? window.grecaptcha.reset(y(h)) : f();
            }
          }),
          !0
        ), y(c).render().then((P) => {
          N(h, P, !0), console.log("reCAPTCHA rendered with widgetId:", P), v(P);
        }).catch((P) => {
          console.error("Failed to render reCAPTCHA:", P), N(l, "reCAPTCHA 초기화에 실패했습니다."), R(P);
        });
      } catch (P) {
        console.error("reCAPTCHA 초기화 실패:", P), N(l, "reCAPTCHA 초기화에 실패했습니다."), R(P);
      }
    });
  }
  vs(() => {
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
    if (N(l, ""), !p(y(i))) {
      N(l, "올바른 전화번호를 입력해주세요 (6-15자리 숫자)");
      return;
    }
    N(a, !0);
    try {
      const v = `${y(r)}${y(i)}`;
      console.log("Sending verification code to:", v), N(d, await Eb(Kt, v, y(c)), !0), console.log("Verification code sent successfully (invisible reCAPTCHA verified)"), N(o, "code");
    } catch (v) {
      console.error("SMS 전송 실패:", v), v.code === "auth/invalid-phone-number" ? N(l, "잘못된 전화번호 형식입니다.") : v.code === "auth/too-many-requests" ? N(l, "너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.") : N(l, `SMS 전송 실패: ${v.message}`);
    } finally {
      N(a, !1);
    }
  }
  async function w() {
    if (N(l, ""), y(s).length !== 6) {
      N(l, "6자리 인증 코드를 입력해주세요.");
      return;
    }
    N(a, !0);
    try {
      const v = await y(d).confirm(y(s));
      console.log("Login successful:", v.user);
      const R = new CustomEvent("login-success", {
        detail: { user: v.user, phoneNumber: v.user.phoneNumber }
      });
      dispatchEvent(R), N(i, ""), N(s, ""), N(o, "phone");
    } catch (v) {
      console.error("인증 코드 확인 실패:", v), v.code === "auth/invalid-verification-code" ? N(l, "잘못된 인증 코드입니다.") : v.code === "auth/code-expired" ? N(l, "인증 코드가 만료되었습니다. 다시 시도해주세요.") : N(l, `인증 실패: ${v.message}`);
      const R = new CustomEvent("login-error", { detail: { error: v.message } });
      dispatchEvent(R);
    } finally {
      N(a, !1);
    }
  }
  function C() {
    N(o, "phone"), N(s, ""), N(l, "");
  }
  var T = DI(), k = _(T), A = _(k);
  {
    var D = (v) => {
      var R = PI(), P = _(R), V = _(P);
      am(V, { class: "icon-large" }), At(4), m(P);
      var M = b(P, 2), H = b(_(M), 2);
      si(H, 21, () => n, Wo, (z, le) => {
        var ve = SI(), Xe = _(ve);
        m(ve);
        var Oe = {};
        ie(() => {
          O(Xe, `${y(le).flag ?? ""}
                ${y(le).name ?? ""} (${y(le).code ?? ""})`), Oe !== (Oe = y(le).code) && (ve.value = (ve.__value = y(le).code) ?? "");
        }), L(z, ve);
      }), m(H), m(M);
      var J = b(M, 2), U = b(_(J), 2), K = _(U), ae = _(K, !0);
      m(K);
      var X = b(K, 2);
      Ka(X), m(U), At(2), m(J);
      var Z = b(J, 2);
      {
        var ee = (z) => {
          var le = kI(), ve = _(le, !0);
          m(le), ie(() => O(ve, y(l))), L(z, le);
        };
        we(Z, (z) => {
          y(l) && z(ee);
        });
      }
      var te = b(Z, 2);
      te.__click = g;
      var Ae = _(te);
      {
        var be = (z) => {
          var le = AI();
          At(), L(z, le);
        }, Ie = (z) => {
          var le = RI(), ve = he(le);
          lm(ve, { class: "btn-icon" }), At(), L(z, le);
        };
        we(Ae, (z) => {
          y(a) ? z(be) : z(Ie, !1);
        });
      }
      m(te), m(R), ie(() => {
        H.disabled = y(a), O(ae, y(r)), X.disabled = y(a), te.disabled = y(a) || !y(i);
      }), Q_(H, () => y(r), (z) => N(r, z)), io("keypress", X, (z) => {
        z.key === "Enter" && (z.preventDefault(), g());
      }), ou(X, () => y(i), (z) => N(i, z)), L(v, R);
    }, I = (v) => {
      var R = ke(), P = he(R);
      {
        var V = (M) => {
          var H = OI(), J = _(H), U = _(J);
          bl(U, { class: "icon-large" });
          var K = b(U, 4), ae = _(K);
          At(2), m(K), m(J);
          var X = b(J, 2), Z = b(_(X), 2);
          Ka(Z), At(2), m(X);
          var ee = b(X, 2);
          {
            var te = (se) => {
              var De = NI(), rt = _(De, !0);
              m(De), ie(() => O(rt, y(l))), L(se, De);
            };
            we(ee, (se) => {
              y(l) && se(te);
            });
          }
          var Ae = b(ee, 2), be = _(Ae);
          be.__click = C;
          var Ie = b(be, 2);
          Ie.__click = w;
          var z = _(Ie);
          {
            var le = (se) => {
              var De = xI();
              At(), L(se, De);
            }, ve = (se) => {
              var De = LI(), rt = he(De);
              bl(rt, { class: "btn-icon" }), At(), L(se, De);
            };
            we(z, (se) => {
              y(a) ? se(le) : se(ve, !1);
            });
          }
          m(Ie), m(Ae);
          var Xe = b(Ae, 2), Oe = b(_(Xe));
          Oe.__click = C, m(Xe), m(H), ie(() => {
            O(ae, `${y(r) ?? ""}${y(i) ?? ""}로 전송된`), Z.disabled = y(a), be.disabled = y(a), Ie.disabled = y(a) || y(s).length !== 6;
          }), io("keypress", Z, (se) => {
            se.key === "Enter" && (se.preventDefault(), w());
          }), ou(Z, () => y(s), (se) => N(s, se)), L(M, H);
        };
        we(
          P,
          (M) => {
            y(o) === "code" && M(V);
          },
          !0
        );
      }
      L(v, R);
    };
    we(A, (v) => {
      y(o) === "phone" ? v(D) : v(I, !1);
    });
  }
  var E = b(A, 2);
  Z_(E, (v) => N(u, v), () => y(u)), m(k), m(T), L(t, T), bn();
}
ii(["click"]);
customElements.define("phone-login", me($I, {}, [], [], !0));
const Vc = oi(null), FI = oi(!0);
wf(Kt, (t) => {
  Vc.set(t), FI.set(!1);
});
async function WC(t, e) {
  try {
    return await bf(Kt, t, e), { success: !0 };
  } catch (n) {
    console.error("로그인 오류:", n);
    const r = n.code;
    return { success: !1, error: hm(r) };
  }
}
async function VC(t, e, n = "") {
  try {
    const r = await yf(Kt, t, e);
    return n && await ec(r.user, {
      displayName: n
    }), { success: !0 };
  } catch (r) {
    console.error("회원가입 오류:", r);
    const i = r.code;
    return { success: !1, error: hm(i) };
  }
}
async function UI() {
  try {
    return await Xy(Kt), { success: !0 };
  } catch (t) {
    return console.error("로그아웃 오류:", t), { success: !1, error: t.message };
  }
}
function hm(t) {
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
class or {
  // === Singleton 인스턴스 ===
  static #t = null;
  #e = /* @__PURE__ */ re(
    // === Public 반응형 속성 ===
    // Svelte 5의 $state로 선언되어 자동으로 반응형
    /** 로딩 상태 (초기값: true) */
    !0
  );
  get loading() {
    return y(this.#e);
  }
  set loading(e) {
    N(this.#e, e, !0);
  }
  #r = /* @__PURE__ */ re(!1);
  get isAuthenticated() {
    return y(this.#r);
  }
  set isAuthenticated(e) {
    N(this.#r, e, !0);
  }
  uid = null;
  email = null;
  phoneNumber = null;
  #i = /* @__PURE__ */ re(null);
  get data() {
    return y(this.#i);
  }
  set data(e) {
    N(this.#i, e, !0);
  }
  #l = /* @__PURE__ */ re(null);
  get error() {
    return y(this.#l);
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
   * @returns FirebaseLoginUser 인스턴스
   *
   * @example
   * const loginUser = FirebaseLoginUser.getInstance();
   * console.log(loginUser.isAuthenticated);
   */
  static getInstance() {
    return or.#t || (or.#t = new or()), or.#t;
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
      this.#s = wf(
        Kt,
        (e) => {
          if (this.#o = e, e) {
            this.isAuthenticated = !0, this.uid = e.uid, this.email = e.email, this.phoneNumber = e.phoneNumber, this.error = null, this.#n && (this.#n(), this.#n = null);
            const n = fe(pe, `users/${e.uid}`);
            this.#n = Yn(
              n,
              async (r) => {
                this.data = r.val(), !this.data && e && console.log("FirebaseLoginUser: 사용자 데이터가 없습니다.");
              },
              (r) => {
                this.error = r;
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
   * @param profileData - 업데이트할 프로필 데이터
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
      e.displayName !== void 0 && (n.displayName = e.displayName), e.photoUrl !== void 0 && (n.photoURL = e.photoUrl), Object.keys(n).length > 0 && await ec(this.#o, n);
      const r = { ...e }, i = fe(pe, `users/${this.uid}`);
      await mn(i, r);
    } catch (n) {
      throw this.error = n, n;
    }
  }
  /**
   * 특정 필드만 업데이트
   *
   * @param field - 필드 이름
   * @param value - 필드 값
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
   * @param displayName - 표시 이름
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
   * @param photoUrl - 프로필 사진 URL
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
    this.#s && (this.#s(), this.#s = null), this.#n && (this.#n(), this.#n = null), or.#t = null;
  }
}
const Ut = or.getInstance(), HI = "GitHub", WI = {
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
  전체댓글: "Total Comments",
  전체좋아요: "Total Likes",
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
  GitHub: HI,
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
  이미좋아요: "You already liked this post.",
  댓글작성: "Write Comment",
  댓글내용입력: "Enter comment content",
  댓글이작성되었습니다: "Comment has been created.",
  댓글작성실패: "Failed to create comment: {error}",
  댓글내용입력필요: "Please enter comment content.",
  "error.unknown": "An unknown error occurred.",
  "error.network": "Please check your network connection.",
  "error.offline": "No internet connection.",
  "error.auth.invalidEmail": "Invalid email format.",
  "error.auth.userDisabled": "This account has been disabled.",
  "error.auth.userNotFound": "User not found.",
  "error.auth.wrongPassword": "Incorrect password.",
  "error.auth.emailAlreadyInUse": "This email is already in use.",
  "error.auth.weakPassword": "Password is too weak. (Minimum 6 characters)",
  "error.auth.operationNotAllowed": "This operation is not allowed.",
  "error.auth.tooManyRequests": "Too many requests. Please try again later.",
  "error.auth.invalidVerificationCode": "Invalid verification code.",
  "error.auth.invalidPhoneNumber": "Invalid phone number.",
  "error.auth.missingVerificationCode": "Please enter verification code.",
  "error.auth.sessionExpired": "Session expired. Please log in again.",
  "error.auth.requiresRecentLogin": "Please log in again for security.",
  "error.auth.credentialAlreadyInUse": "This credential is already in use by another account.",
  "error.db.permissionDenied": "You don't have permission to perform this action.",
  "error.db.authenticationRequired": "Please log in first.",
  "error.db.networkError": "Database connection error.",
  "error.storage.unauthorized": "No permission to access file.",
  "error.storage.bucketNotFound": "Storage bucket not found.",
  "error.storage.invalidArgument": "Invalid argument.",
  "error.storage.objectNotFound": "File not found.",
  "error.storage.retryLimitExceeded": "File upload error. Please try again.",
  "error.storage.quotaExceeded": "Storage quota exceeded.",
  "error.storage.canceled": "File upload canceled."
}, VI = {
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
  전체댓글: "전체 댓글",
  전체좋아요: "전체 좋아요",
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
  이미좋아요: "이미 좋아요를 눌렀습니다.",
  댓글작성: "댓글 작성",
  댓글내용입력: "댓글 내용을 입력하세요",
  댓글이작성되었습니다: "댓글이 작성되었습니다.",
  댓글작성실패: "댓글 작성 실패: {error}",
  댓글내용입력필요: "댓글 내용을 입력해주세요.",
  "error.unknown": "알 수 없는 오류가 발생했습니다.",
  "error.network": "네트워크 연결을 확인해주세요.",
  "error.offline": "인터넷 연결이 없습니다.",
  "error.auth.invalidEmail": "올바른 이메일 형식이 아닙니다.",
  "error.auth.userDisabled": "비활성화된 계정입니다.",
  "error.auth.userNotFound": "사용자를 찾을 수 없습니다.",
  "error.auth.wrongPassword": "비밀번호가 올바르지 않습니다.",
  "error.auth.emailAlreadyInUse": "이미 사용 중인 이메일입니다.",
  "error.auth.weakPassword": "비밀번호가 너무 약합니다. (최소 6자 이상)",
  "error.auth.operationNotAllowed": "이 작업은 허용되지 않습니다.",
  "error.auth.tooManyRequests": "너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.",
  "error.auth.invalidVerificationCode": "잘못된 인증 코드입니다.",
  "error.auth.invalidPhoneNumber": "올바른 전화번호가 아닙니다.",
  "error.auth.missingVerificationCode": "인증 코드를 입력해주세요.",
  "error.auth.sessionExpired": "세션이 만료되었습니다. 다시 로그인해주세요.",
  "error.auth.requiresRecentLogin": "보안을 위해 다시 로그인해주세요.",
  "error.auth.credentialAlreadyInUse": "이미 다른 계정에서 사용 중인 인증 정보입니다.",
  "error.db.permissionDenied": "이 작업을 수행할 권한이 없습니다.",
  "error.db.authenticationRequired": "먼저 로그인해주세요.",
  "error.db.networkError": "데이터베이스 연결 중 오류가 발생했습니다.",
  "error.storage.unauthorized": "파일 접근 권한이 없습니다.",
  "error.storage.bucketNotFound": "저장소를 찾을 수 없습니다.",
  "error.storage.invalidArgument": "올바르지 않은 인자입니다.",
  "error.storage.objectNotFound": "파일을 찾을 수 없습니다.",
  "error.storage.retryLimitExceeded": "파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.",
  "error.storage.quotaExceeded": "저장 공간이 부족합니다.",
  "error.storage.canceled": "파일 업로드가 취소되었습니다."
}, jI = "GitHub", zI = {
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
  전체댓글: "総コメント数",
  전체좋아요: "総いいね数",
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
  GitHub: jI,
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
  이미좋아요: "すでにいいねしています。",
  댓글작성: "コメントを書く",
  댓글내용입력: "コメント内容を入力してください",
  댓글이작성되었습니다: "コメントが作成されました。",
  댓글작성실패: "コメント作成に失敗しました: {error}",
  댓글내용입력필요: "コメント内容を入力してください。",
  "error.unknown": "不明なエラーが発生しました。",
  "error.network": "ネットワーク接続を確認してください。",
  "error.offline": "インターネット接続がありません。",
  "error.auth.invalidEmail": "正しいメール形式ではありません。",
  "error.auth.userDisabled": "無効なアカウントです。",
  "error.auth.userNotFound": "ユーザーが見つかりません。",
  "error.auth.wrongPassword": "パスワードが正しくありません。",
  "error.auth.emailAlreadyInUse": "すでに使用されているメールアドレスです。",
  "error.auth.weakPassword": "パスワードが弱すぎます。（最低6文字以上）",
  "error.auth.operationNotAllowed": "この操作は許可されていません。",
  "error.auth.tooManyRequests": "リクエストが多すぎます。しばらくしてから再試行してください。",
  "error.auth.invalidVerificationCode": "無効な認証コードです。",
  "error.auth.invalidPhoneNumber": "正しい電話番号ではありません。",
  "error.auth.missingVerificationCode": "認証コードを入力してください。",
  "error.auth.sessionExpired": "セッションが期限切れです。再度ログインしてください。",
  "error.auth.requiresRecentLogin": "セキュリティのため、再度ログインしてください。",
  "error.auth.credentialAlreadyInUse": "すでに他のアカウントで使用されている認証情報です。",
  "error.db.permissionDenied": "この操作を実行する権限がありません。",
  "error.db.authenticationRequired": "まずログインしてください。",
  "error.db.networkError": "データベース接続中にエラーが発生しました。",
  "error.storage.unauthorized": "ファイルへのアクセス権限がありません。",
  "error.storage.bucketNotFound": "ストレージが見つかりません。",
  "error.storage.invalidArgument": "無効な引数です。",
  "error.storage.objectNotFound": "ファイルが見つかりません。",
  "error.storage.retryLimitExceeded": "ファイルアップロード中にエラーが発生しました。再試行してください。",
  "error.storage.quotaExceeded": "ストレージ容量が不足しています。",
  "error.storage.canceled": "ファイルアップロードがキャンセルされました。"
}, BI = "GitHub", qI = {
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
  전체댓글: "总评论",
  전체좋아요: "总点赞",
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
  GitHub: BI,
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
  이미좋아요: "您已经点赞过了。",
  댓글작성: "写评论",
  댓글내용입력: "请输入评论内容",
  댓글이작성되었습니다: "评论已创建。",
  댓글작성실패: "评论创建失败: {error}",
  댓글내용입력필요: "请输入评论内容。",
  "error.unknown": "发生未知错误。",
  "error.network": "请检查网络连接。",
  "error.offline": "没有互联网连接。",
  "error.auth.invalidEmail": "邮箱格式不正确。",
  "error.auth.userDisabled": "账户已被禁用。",
  "error.auth.userNotFound": "找不到用户。",
  "error.auth.wrongPassword": "密码不正确。",
  "error.auth.emailAlreadyInUse": "该邮箱已被使用。",
  "error.auth.weakPassword": "密码太弱。（至少6个字符）",
  "error.auth.operationNotAllowed": "此操作不被允许。",
  "error.auth.tooManyRequests": "请求过多。请稍后再试。",
  "error.auth.invalidVerificationCode": "验证码无效。",
  "error.auth.invalidPhoneNumber": "电话号码格式不正确。",
  "error.auth.missingVerificationCode": "请输入验证码。",
  "error.auth.sessionExpired": "会话已过期。请重新登录。",
  "error.auth.requiresRecentLogin": "为了安全，请重新登录。",
  "error.auth.credentialAlreadyInUse": "此凭证已被其他账户使用。",
  "error.db.permissionDenied": "您没有执行此操作的权限。",
  "error.db.authenticationRequired": "请先登录。",
  "error.db.networkError": "数据库连接时出错。",
  "error.storage.unauthorized": "没有文件访问权限。",
  "error.storage.bucketNotFound": "找不到存储桶。",
  "error.storage.invalidArgument": "参数无效。",
  "error.storage.objectNotFound": "找不到文件。",
  "error.storage.retryLimitExceeded": "文件上传出错。请重试。",
  "error.storage.quotaExceeded": "存储空间不足。",
  "error.storage.canceled": "文件上传已取消。"
}, Ma = { en: WI, ko: VI, ja: zI, zh: qI };
function El(t) {
  const e = (t ?? "").toLowerCase();
  return e.startsWith("ko") ? "ko" : e.startsWith("ja") ? "ja" : e.startsWith("zh") ? "zh" : "en";
}
function fm() {
  if (typeof navigator > "u")
    return "en";
  const t = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const e of t) {
    const n = El(e);
    if (n !== "en") return n;
  }
  return "en";
}
function GI(t) {
  let e = El(t) || fm();
  function n(s) {
    e = El(s);
  }
  function r() {
    return e;
  }
  function i(s, o = {}) {
    return ((Ma[e] ?? Ma.en)[s] ?? Ma.en[s] ?? s).replace(/\{(\w+)\}/g, (c, d) => o[d] ?? "");
  }
  return { t: i, setLocale: n, getLocale: r };
}
const jc = "sns-web-locale", pm = [
  { code: "ko", label: "🇰🇷 한국어" },
  { code: "en", label: "🇺🇸 English" },
  { code: "ja", label: "🇯🇵 日本語" },
  { code: "zh", label: "🇨🇳 中文" }
];
function KI() {
  if (typeof localStorage > "u") return null;
  const t = localStorage.getItem(jc);
  if (!t) return null;
  const e = pm.find((n) => n.code === t);
  return e ? e.code : null;
}
const mm = KI() ?? fm(), No = GI(mm);
typeof localStorage < "u" && localStorage.setItem(jc, No.getLocale());
const zc = oi(mm);
function YI(t) {
  No.setLocale(t);
  const e = No.getLocale();
  zc.set(e), typeof localStorage < "u" && localStorage.setItem(jc, e);
}
const Bc = tg(
  zc,
  (t) => (e, n = {}) => No.t(e, n)
), QI = oi("");
var JI = /* @__PURE__ */ W('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'), XI = /* @__PURE__ */ W('<img alt="프로필" class="avatar-image svelte-38psow"/>'), ZI = /* @__PURE__ */ W('<div class="avatar-fallback svelte-38psow"> </div>'), eC = /* @__PURE__ */ W('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'), tC = /* @__PURE__ */ W('<img class="avatar-image svelte-38psow"/>'), nC = /* @__PURE__ */ W('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'), rC = /* @__PURE__ */ W('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), iC = /* @__PURE__ */ W('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), sC = /* @__PURE__ */ W('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');
const oC = {
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
function aC(t, e) {
  yn(e, !0), Xn(t, oC);
  const n = () => dr(QI, "$pageTitle", s), r = () => dr(Vc, "$user", s), i = () => dr(Bc, "$t", s), [s, o] = Ul();
  let a = /* @__PURE__ */ re(!1);
  async function l() {
    if ((await UI()).success) {
      const I = new CustomEvent("logout-success", { bubbles: !0, composed: !0 });
      dispatchEvent(I);
    }
    N(a, !1);
  }
  function c() {
    return Ut.data?.displayName ? Ut.data.displayName.charAt(0).toUpperCase() : Ut.email ? Ut.email.charAt(0).toUpperCase() : "U";
  }
  function d() {
    N(a, !y(a));
  }
  function h(D) {
    const I = document.querySelector(".dropdown-menu"), E = document.querySelector(".dropdown-trigger"), v = D.target;
    I && !I.contains(v) && !E?.contains(v) && N(a, !1);
  }
  vs(() => (document.addEventListener("click", h), () => {
    document.removeEventListener("click", h);
  }));
  var u = sC(), f = _(u), p = _(f), g = b(_(p), 2);
  {
    var w = (D) => {
      var I = JI(), E = _(I), v = _(E, !0);
      m(E), m(I), ie(() => O(v, n())), L(D, I);
    };
    we(g, (D) => {
      n() && D(w);
    });
  }
  m(p);
  var C = b(p, 2), T = _(C);
  {
    var k = (D) => {
      var I = rC(), E = he(I), v = _(E), R = _(v);
      Li(R, { size: 16 });
      var P = b(R, 2), V = _(P, !0);
      m(P), m(v);
      var M = b(v, 2), H = _(M);
      On(H, { size: 16 });
      var J = b(H, 2), U = _(J, !0);
      m(J), m(M);
      var K = b(M, 2), ae = _(K);
      hs(ae, { size: 16 });
      var X = b(ae, 2), Z = _(X, !0);
      m(X), m(K);
      var ee = b(K, 2), te = _(ee);
      te.__click = d;
      var Ae = _(te), be = _(Ae);
      {
        var Ie = (Ce) => {
          var ce = XI();
          ie(() => Re(ce, "src", Ut.data.photoUrl)), L(Ce, ce);
        }, z = (Ce) => {
          var ce = ZI(), it = _(ce, !0);
          m(ce), ie((kt) => O(it, kt), [c]), L(Ce, ce);
        };
        we(be, (Ce) => {
          Ut.data?.photoUrl ? Ce(Ie) : Ce(z, !1);
        });
      }
      m(Ae);
      var le = b(Ae, 2), ve = _(le, !0);
      m(le), m(te);
      var Xe = b(te, 2);
      {
        var Oe = (Ce) => {
          var ce = eC(), it = _(ce), kt = _(it, !0);
          m(it);
          var Tn = b(it, 4), Sn = _(Tn);
          Vn(Sn, { size: 16 });
          var Rr = b(Sn, 2), Pr = _(Rr, !0);
          m(Rr), m(Tn);
          var rr = b(Tn, 4);
          rr.__click = l;
          var vi = _(rr);
          om(vi, { size: 16 });
          var yi = b(vi, 2), Ds = _(yi, !0);
          m(yi), m(rr), m(ce), ie(
            (ua, st, ot) => {
              O(kt, ua), O(Pr, st), O(Ds, ot);
            },
            [() => i()("내계정"), () => i()("프로필수정"), () => i()("로그아웃")]
          ), L(Ce, ce);
        };
        we(Xe, (Ce) => {
          y(a) && Ce(Oe);
        });
      }
      m(ee);
      var se = b(ee, 2), De = _(se);
      Oi(De, { size: 24 }), m(se), m(E);
      var rt = b(E, 2), ye = _(rt), Ge = _(ye);
      Li(Ge, { size: 20 }), m(ye);
      var Ke = b(ye, 2), tr = _(Ke);
      hs(tr, { size: 20 }), m(Ke);
      var Cn = b(Ke, 2), Ls = _(Cn);
      On(Ls, { size: 20 }), m(Cn);
      var nr = b(Cn, 2), pi = _(nr), ca = _(pi);
      {
        var mi = (Ce) => {
          var ce = tC();
          ie(
            (it) => {
              Re(ce, "src", Ut.data.photoUrl), Re(ce, "alt", it);
            },
            [() => i()("프로필")]
          ), L(Ce, ce);
        }, _i = (Ce) => {
          var ce = nC(), it = _(ce, !0);
          m(ce), ie((kt) => O(it, kt), [c]), L(Ce, ce);
        };
        we(ca, (Ce) => {
          Ut.data?.photoUrl ? Ce(mi) : Ce(_i, !1);
        });
      }
      m(pi), m(nr);
      var gi = b(nr, 2), Os = _(gi);
      Oi(Os, { size: 24 }), m(gi), m(rt), ie(
        (Ce, ce, it, kt, Tn, Sn, Rr, Pr, rr) => {
          O(V, Ce), O(U, ce), O(Z, it), O(ve, Ut.data?.displayName || Ut.email), Re(se, "title", kt), Re(ye, "title", Tn), Re(Ke, "title", Sn), Re(Cn, "title", Rr), Re(nr, "title", Pr), Re(gi, "title", rr);
        },
        [
          () => i()("게시판"),
          () => i()("채팅"),
          () => i()("사용자찾기"),
          () => i()("메뉴"),
          () => i()("게시판"),
          () => i()("사용자찾기"),
          () => i()("채팅"),
          () => i()("프로필"),
          () => i()("메뉴")
        ]
      ), L(D, I);
    }, A = (D) => {
      var I = iC(), E = he(I), v = _(E), R = _(v);
      Li(R, { size: 16 });
      var P = b(R, 2), V = _(P, !0);
      m(P), m(v);
      var M = b(v, 2), H = _(M);
      On(H, { size: 16 });
      var J = b(H, 2), U = _(J, !0);
      m(J), m(M);
      var K = b(M, 2), ae = _(K, !0);
      m(K);
      var X = b(K, 2), Z = _(X);
      Oi(Z, { size: 20 }), m(X), m(E);
      var ee = b(E, 2), te = _(ee), Ae = _(te);
      Li(Ae, { size: 20 }), m(te);
      var be = b(te, 2), Ie = _(be);
      On(Ie, { size: 20 }), m(be);
      var z = b(be, 2), le = _(z);
      Vn(le, { size: 20 }), m(z);
      var ve = b(z, 2), Xe = _(ve);
      Oi(Xe, { size: 24 }), m(ve), m(ee), ie(
        (Oe, se, De, rt, ye, Ge, Ke, tr) => {
          O(V, Oe), O(U, se), O(ae, De), Re(X, "title", rt), Re(te, "title", ye), Re(be, "title", Ge), Re(z, "title", Ke), Re(ve, "title", tr);
        },
        [
          () => i()("게시판"),
          () => i()("채팅"),
          () => i()("로그인"),
          () => i()("메뉴"),
          () => i()("게시판"),
          () => i()("채팅"),
          () => i()("로그인"),
          () => i()("메뉴")
        ]
      ), L(D, I);
    };
    we(T, (D) => {
      r() ? D(k) : D(A, !1);
    });
  }
  m(C), m(f), m(u), L(t, u), bn(), o();
}
ii(["click"]);
customElements.define("sns-topbar", me(aC, {}, [], [], !0));
var lC = /* @__PURE__ */ W('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'), cC = /* @__PURE__ */ W('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>', 1), uC = /* @__PURE__ */ W("<option> </option>"), dC = /* @__PURE__ */ W('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');
const hC = {
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
function fC(t, e) {
  yn(e, !1), Xn(t, hC);
  const n = () => dr(Bc, "$t", s), r = () => dr(Vc, "$user", s), i = () => dr(zc, "$locale", s), [s, o] = Ul(), a = pm;
  Sh();
  var l = dC(), c = _(l), d = _(c), h = _(d, !0);
  m(d);
  var u = b(d, 2), f = _(u), p = _(f);
  im(p, { size: 20 });
  var g = b(p, 2), w = _(g, !0);
  m(g), m(f);
  var C = b(f, 2), T = _(C);
  On(T, { size: 20 });
  var k = b(T, 2), A = _(k, !0);
  m(k), m(C);
  var D = b(C, 2), I = _(D);
  hs(I, { size: 20 });
  var E = b(I, 2), v = _(E, !0);
  m(E), m(D);
  var R = b(D, 2), P = _(R);
  Vn(P, { size: 20 });
  var V = b(P, 2), M = _(V, !0);
  m(V), m(R);
  var H = b(R, 2), J = _(H);
  Wc(J, { size: 20 });
  var U = b(J, 2), K = _(U, !0);
  m(U), m(H), m(u);
  var ae = b(u, 4), X = _(ae), Z = _(X, !0);
  m(X);
  var ee = b(X, 2), te = _(ee);
  {
    var Ae = (st) => {
      var ot = lC(), at = _(ot);
      Vn(at, { size: 16 });
      var Zt = b(at, 2), en = _(Zt, !0);
      m(Zt), m(ot), ie((bi) => O(en, bi), [() => n()("회원정보수정")]), L(st, ot);
    }, be = (st) => {
      var ot = cC(), at = he(ot), Zt = _(at);
      sm(Zt, { size: 16 });
      var en = b(Zt, 2), bi = _(en, !0);
      m(en), m(at);
      var Ms = b(at, 2), $s = _(Ms);
      Vn($s, { size: 16 });
      var Fs = b($s, 2), da = _(Fs, !0);
      m(Fs), m(Ms), ie(
        (ha, fa) => {
          O(bi, ha), O(da, fa);
        },
        [() => n()("로그인"), () => n()("회원가입")]
      ), L(st, ot);
    };
    we(te, (st) => {
      r() ? st(Ae) : st(be, !1);
    });
  }
  m(ee), m(ae);
  var Ie = b(ae, 4), z = _(Ie), le = _(z);
  hs(le, { size: 16 });
  var ve = b(le, 2), Xe = _(ve, !0);
  m(ve), m(z);
  var Oe = b(z, 2), se = b(_(Oe), 2), De = _(se, !0);
  m(se);
  var rt = b(se, 2);
  wl(rt, { size: 12, class: "external-icon" }), m(Oe);
  var ye = b(Oe, 2), Ge = _(ye);
  On(Ge, { size: 16 });
  var Ke = b(Ge, 2), tr = _(Ke, !0);
  m(Ke);
  var Cn = b(Ke, 2);
  wl(Cn, { size: 12, class: "external-icon" }), m(ye);
  var Ls = b(ye, 2), nr = _(Ls);
  nm(nr, { size: 16 });
  var pi = b(nr, 2), ca = _(pi, !0);
  m(pi), m(Ls), m(Ie);
  var mi = b(Ie, 2), _i = _(mi), gi = _(_i, !0);
  m(_i);
  var Os = b(_i, 2), Ce = _(Os), ce = b(Ce, 2);
  si(ce, 5, () => a, Wo, (st, ot) => {
    var at = uC(), Zt = _(at, !0);
    m(at);
    var en = {};
    ie(() => {
      O(Zt, y(ot).label), en !== (en = y(ot).code) && (at.value = (at.__value = y(ot).code) ?? "");
    }), L(st, at);
  }), m(ce);
  var it;
  $l(ce), m(Os), m(mi);
  var kt = b(mi, 2), Tn = _(kt), Sn = _(Tn), Rr = _(Sn, !0);
  m(Sn);
  var Pr = b(Sn, 2), rr = _(Pr, !0);
  m(Pr), m(Tn), m(kt);
  var vi = b(kt, 2), yi = _(vi), Ds = _(yi, !0), ua = b(Ds, 2);
  m(yi), m(vi), m(c), m(l), ie(
    (st, ot, at, Zt, en, bi, Ms, $s, Fs, da, ha, fa, gm, vm, ym, bm, wm) => {
      O(h, st), O(w, ot), O(A, at), O(v, Zt), O(M, en), O(K, bi), O(Z, Ms), O(Xe, $s), O(De, Fs), O(tr, da), O(ca, ha), O(gi, fa), Re(Ce, "aria-label", gm), it !== (it = i()) && (ce.value = (ce.__value = i()) ?? "", Zi(ce, i())), O(Rr, vm), O(rr, ym), O(Ds, bm), O(ua, ` ${wm ?? ""}`);
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
  ), io("change", ce, (st) => YI(st.currentTarget.value)), L(t, l), bn(), o();
}
customElements.define("sns-left-sidebar", me(fC, {}, [], [], !0));
var pC = /* @__PURE__ */ W('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');
const mC = {
  hash: "svelte-3epon2",
  code: `\r
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
  }`
};
function _C(t, e) {
  yn(e, !0), Xn(t, mC);
  const n = () => dr(Bc, "$t", r), [r, i] = Ul();
  let s = /* @__PURE__ */ re(nn({
    totalUsers: 8,
    totalScore: 1,
    totalPosts: 0,
    totalMessages: 0
  }));
  var o = pC(), a = _(o), l = _(a), c = _(l, !0);
  m(l);
  var d = b(l, 2), h = _(d), u = _(h), f = _(u);
  Vn(f, { size: 20 }), m(u);
  var p = b(u, 2), g = _(p), w = _(g, !0);
  m(g);
  var C = b(g, 2), T = _(C, !0);
  m(C), m(p), m(h);
  var k = b(h, 2), A = _(k), D = _(A);
  dm(D, { size: 20 }), m(A);
  var I = b(A, 2), E = _(I), v = _(E, !0);
  m(E);
  var R = b(E, 2), P = _(R, !0);
  m(R), m(I), m(k);
  var V = b(k, 2), M = _(V), H = _(M);
  Wc(H, { size: 20 }), m(M);
  var J = b(M, 2), U = _(J), K = _(U, !0);
  m(U);
  var ae = b(U, 2), X = _(ae, !0);
  m(ae);
  var Z = b(ae, 2), ee = _(Z, !0);
  m(Z), m(J), m(V);
  var te = b(V, 2), Ae = _(te), be = _(Ae);
  On(be, { size: 20 }), m(Ae);
  var Ie = b(Ae, 2), z = _(Ie), le = _(z, !0);
  m(z);
  var ve = b(z, 2), Xe = _(ve, !0);
  m(ve), m(Ie), m(te), m(d);
  var Oe = b(d, 2), se = _(Oe, !0);
  m(Oe), m(a), m(o), ie(
    (De, rt, ye, Ge, Ke, tr, Cn) => {
      O(c, De), O(w, rt), O(T, y(s).totalUsers), O(v, ye), O(P, y(s).totalScore), O(K, Ge), O(X, y(s).totalPosts), O(ee, Ke), O(le, tr), O(Xe, y(s).totalMessages), O(se, Cn);
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
  ), L(t, o), bn(), i();
}
customElements.define("sns-right-sidebar", me(_C, {}, [], [], !0));
var gC = /* @__PURE__ */ W('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>', 2);
const vC = {
  hash: "svelte-um1xbq",
  code: `\r
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
  }`
};
function yC(t, e) {
  Xn(t, vC);
  var n = gC(), r = _(n), i = b(r, 2), s = _(i);
  Xi(s, 1, "left-sidebar svelte-um1xbq");
  var o = b(s, 2), a = _(o);
  xe(a, e, "default", {}), m(o);
  var l = b(o, 2);
  Xi(l, 1, "right-sidebar svelte-um1xbq"), m(i), m(n), L(t, n);
}
customElements.define("sns-layout", me(yC, {}, ["default"], [], !0));
var bC = /* @__PURE__ */ W('<div class="icon-container svelte-m3h71q"> </div>'), wC = /* @__PURE__ */ W('<p class="hint-box svelte-m3h71q"> </p>'), EC = /* @__PURE__ */ W('<p class="gpl-box svelte-m3h71q"> </p>'), IC = /* @__PURE__ */ W('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'), CC = /* @__PURE__ */ W('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'), TC = /* @__PURE__ */ W('<div class="accordion svelte-m3h71q"></div>');
const SC = {
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
function kC(t, e) {
  yn(e, !0), Xn(t, SC);
  let n = wt(e, "items", 7, "[]"), r = wt(e, "type", 7, "single"), i = wt(e, "collapsible", 7, !0), s = /* @__PURE__ */ Ua(() => {
    try {
      const u = typeof n() == "string" ? JSON.parse(n()) : n();
      return Array.isArray(u) ? u : [];
    } catch (u) {
      return console.error("Failed to parse accordion items:", u), [];
    }
  }), o = /* @__PURE__ */ Ua(() => {
    const u = i();
    return typeof u == "boolean" ? u : typeof u == "string" ? u !== "false" : !0;
  }), a = /* @__PURE__ */ re(nn(/* @__PURE__ */ new Set()));
  function l(u) {
    const f = new Set(y(a));
    r() === "single" ? f.has(u) ? y(o) && f.delete(u) : (f.clear(), f.add(u)) : f.has(u) ? f.delete(u) : f.add(u), N(a, f, !0);
  }
  function c(u) {
    return y(a).has(u);
  }
  var d = {
    get items() {
      return n();
    },
    set items(u = "[]") {
      n(u), mt();
    },
    get type() {
      return r();
    },
    set type(u = "single") {
      r(u), mt();
    },
    get collapsible() {
      return i();
    },
    set collapsible(u = !0) {
      i(u), mt();
    }
  }, h = TC();
  return si(h, 21, () => y(s), Wo, (u, f, p) => {
    var g = CC(), w = _(g);
    w.__click = () => l(p);
    var C = _(w), T = _(C);
    {
      var k = (V) => {
        var M = bC(), H = _(M, !0);
        m(M), ie(() => O(H, y(f).icon)), L(V, M);
      };
      we(T, (V) => {
        y(f).icon && V(k);
      });
    }
    var A = b(T, 2), D = _(A, !0);
    m(A), m(C);
    var I = b(C, 2);
    let E;
    var v = _(I);
    rm(v, { size: 20 }), m(I), m(w);
    var R = b(w, 2);
    {
      var P = (V) => {
        var M = IC(), H = _(M), J = _(H, !0);
        m(H);
        var U = b(H, 2);
        {
          var K = (Z) => {
            var ee = wC(), te = _(ee, !0);
            m(ee), ie(() => O(te, y(f).hint)), L(Z, ee);
          };
          we(U, (Z) => {
            y(f).hint && Z(K);
          });
        }
        var ae = b(U, 2);
        {
          var X = (Z) => {
            var ee = EC(), te = _(ee, !0);
            m(ee), ie(() => O(te, y(f).gpl)), L(Z, ee);
          };
          we(ae, (Z) => {
            y(f).gpl && Z(X);
          });
        }
        m(M), ie(() => O(J, y(f).content)), L(V, M);
      };
      we(R, (V) => {
        c(p) && V(P);
      });
    }
    m(g), ie(
      (V, M) => {
        Re(w, "aria-expanded", V), O(D, y(f).title), E = Xi(I, 1, "chevron svelte-m3h71q", null, E, M);
      },
      [() => c(p), () => ({ "rotate-180": c(p) })]
    ), L(u, g);
  }), m(h), L(t, h), bn(d);
}
ii(["click"]);
customElements.define("sns-accordion", me(kC, { items: {}, type: {}, collapsible: {} }, [], [], !0));
var AC = /* @__PURE__ */ W('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'), RC = /* @__PURE__ */ W('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'), PC = /* @__PURE__ */ W('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'), NC = /* @__PURE__ */ W('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>', 1);
const xC = {
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
function LC(t, e) {
  yn(e, !0), Xn(t, xC);
  const n = [
    { label: "A", name: "apple", email: "apple@test.com" },
    { label: "B", name: "banana", email: "banana@test.com" },
    { label: "C", name: "cherry", email: "cherry@test.com" },
    { label: "D", name: "durian", email: "durian@test.com" },
    { label: "E", name: "elderberry", email: "elderberry@test.com" },
    { label: "F", name: "fig", email: "fig@test.com" },
    { label: "G", name: "grape", email: "grape@test.com" },
    { label: "H", name: "honeydew", email: "honeydew@test.com" }
  ], r = "12345a,*";
  let i = /* @__PURE__ */ re(
    !1
    // 메뉴 열림 상태
  ), s = /* @__PURE__ */ re(
    !1
    // 서버 정보 모달 열림 상태
  ), o = /* @__PURE__ */ re(
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
  vs(() => {
    console.log("TestFab 컴포넌트가 마운트되었습니다.");
  });
  async function d(E) {
    if (!y(o)) {
      N(o, !0), console.log(`${E.name} (${E.label}) 계정으로 로그인을 시도합니다...`);
      try {
        let v;
        try {
          v = await bf(Kt, E.email, r), console.log(`${E.name} 계정으로 로그인 성공!`);
        } catch (R) {
          if (R.code === "auth/user-not-found" || R.code === "auth/invalid-credential")
            console.log(`${E.name} 계정이 없습니다. 회원가입을 진행합니다...`), v = await yf(Kt, E.email, r), await ec(v.user, { displayName: E.name }), console.log(`${E.name} 계정 회원가입 및 로그인 성공!`);
          else
            throw R;
        }
        alert(`${E.name} (${E.label}) 계정으로 로그인되었습니다.`), N(i, !1), window.location.href = "/";
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
    N(i, !y(i));
  }
  function u() {
    N(s, !y(s)), N(
      i,
      !1
      // 메뉴 닫기
    );
  }
  function f(E) {
    const v = E.target;
    !v.closest(".test-fab-menu") && !v.closest(".test-fab-button") && N(i, !1);
  }
  var p = NC();
  io("click", Wa, f);
  var g = he(p), w = _(g);
  let C;
  w.__click = h;
  var T = _(w);
  um(T, { size: 24 }), m(w);
  var k = b(w, 2);
  {
    var A = (E) => {
      var v = RC(), R = b(_(v), 4), P = _(R), V = _(P);
      Vn(V, { size: 16 }), At(2), m(P);
      var M = b(P, 2);
      si(M, 21, () => n, (X) => X.label, (X, Z) => {
        var ee = AC();
        ee.__click = () => d(y(Z));
        var te = _(ee), Ae = _(te, !0);
        m(te);
        var be = b(te, 2), Ie = _(be, !0);
        m(be), m(ee), ie(() => {
          ee.disabled = y(o), O(Ae, y(Z).label), O(Ie, y(Z).name);
        }), L(X, ee);
      }), m(M), m(R);
      var H = b(R, 4);
      H.__click = u;
      var J = _(H);
      cm(J, { size: 16 }), At(2), m(H);
      var U = b(H, 4), K = b(_(U), 2), ae = _(K, !0);
      m(K), m(U), m(v), ie(() => O(ae, l)), L(E, v);
    };
    we(k, (E) => {
      y(i) && E(A);
    });
  }
  m(g);
  var D = b(g, 2);
  {
    var I = (E) => {
      var v = PC();
      v.__click = u;
      var R = _(v);
      R.__click = (X) => X.stopPropagation();
      var P = b(_(R), 2), V = _(P), M = b(_(V), 2), H = _(M, !0);
      m(M), m(V);
      var J = b(V, 8), U = b(_(J), 2), K = _(U, !0);
      m(U), m(J), m(P);
      var ae = b(P, 2);
      ae.__click = u, m(R), m(v), ie(() => {
        O(H, "production"), O(K, c);
      }), L(E, v);
    };
    we(D, (E) => {
      y(s) && E(I);
    });
  }
  ie(() => {
    C = Xi(w, 1, "test-fab-button svelte-1uta475", null, C, { loading: y(o) }), w.disabled = y(o);
  }), L(t, p), bn();
}
ii(["click"]);
customElements.define("test-fab", me(LC, {}, [], [], !1));
function OC(t, e) {
  const { subscribe: n, set: r } = oi({
    data: e ?? null,
    loading: !0,
    error: null
  }), i = fe(pe, t);
  return Yn(
    i,
    (s) => {
      const o = s.val();
      r({
        data: o !== null ? o : e ?? null,
        loading: !1,
        error: null
      }), console.log(`✅ 실시간 데이터 로드 성공: ${t}`, o !== null ? o : e ?? null);
    },
    (s) => {
      console.error(`❌ 실시간 데이터 로드 실패: ${t}`, s), r({
        data: e ?? null,
        loading: !1,
        error: s
      });
    }
  ), {
    subscribe: n,
    set: r,
    update: (s) => {
      throw new Error("직접 업데이트는 지원하지 않습니다. Firebase를 통해 데이터를 변경하세요.");
    },
    // 컴포넌트 언마운트 시 구독 해제 (메모리 누수 방지)
    unsubscribe: () => hi(i)
  };
}
const jC = OC;
async function zC(t, e) {
  try {
    const n = fe(pe, t);
    return await xs(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 쓰기 오류:", n), { success: !1, error: n.message };
  }
}
async function BC(t, e) {
  try {
    const n = fe(pe, t);
    return await mn(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 업데이트 오류:", n), { success: !1, error: n.message };
  }
}
async function qC(t) {
  try {
    const e = fe(pe, t);
    return await qp(e), { success: !0 };
  } catch (e) {
    return console.error("데이터 삭제 오류:", e), { success: !1, error: e.message };
  }
}
async function GC(t, e) {
  try {
    const n = fe(pe, t), r = sa(n);
    return await xs(r, e), { success: !0, key: r.key };
  } catch (n) {
    return console.error("데이터 추가 오류:", n), { success: !1, error: n.message };
  }
}
async function KC(t) {
  try {
    const e = fe(pe, t), n = await oa(e);
    return n.exists() ? { success: !0, data: n.val() } : { success: !0, data: null };
  } catch (e) {
    return console.error("데이터 읽기 오류:", e), { success: !1, error: e.message };
  }
}
function YC(t) {
  const e = fe(pe, `status/${t}`), n = fe(pe, ".info/connected");
  return Yn(n, (r) => {
    r.val() === !0 && (xs(e, {
      online: !0,
      lastSeen: Date.now()
    }), Yn(fe(pe, ".info/connected"), (i) => {
      i.val() || mn(e, {
        online: !1,
        lastSeen: Date.now()
      });
    }));
  }), () => {
    mn(e, {
      online: !1,
      lastSeen: Date.now()
    }), hi(n);
  };
}
function DC(t) {
  if (!t)
    return "error.unknown";
  const e = {
    "auth/invalid-email": "error.auth.invalidEmail",
    "auth/user-disabled": "error.auth.userDisabled",
    "auth/user-not-found": "error.auth.userNotFound",
    "auth/wrong-password": "error.auth.wrongPassword",
    "auth/email-already-in-use": "error.auth.emailAlreadyInUse",
    "auth/weak-password": "error.auth.weakPassword",
    "auth/operation-not-allowed": "error.auth.operationNotAllowed",
    "auth/too-many-requests": "error.auth.tooManyRequests",
    "auth/invalid-verification-code": "error.auth.invalidVerificationCode",
    "auth/invalid-phone-number": "error.auth.invalidPhoneNumber",
    "auth/missing-verification-code": "error.auth.missingVerificationCode",
    "auth/session-expired": "error.auth.sessionExpired",
    "auth/requires-recent-login": "error.auth.requiresRecentLogin",
    "auth/credential-already-in-use": "error.auth.credentialAlreadyInUse"
  }, n = {
    PERMISSION_DENIED: "error.db.permissionDenied",
    "permission-denied": "error.db.permissionDenied",
    "network-error": "error.db.networkError",
    offline: "error.offline",
    "authentication-required": "error.db.authenticationRequired",
    disconnected: "error.offline",
    unavailable: "error.db.networkError"
  }, r = {
    "storage/unauthorized": "error.storage.unauthorized",
    "storage/bucket-not-found": "error.storage.bucketNotFound",
    "storage/invalid-argument": "error.storage.invalidArgument",
    "storage/object-not-found": "error.storage.objectNotFound",
    "storage/retry-limit-exceeded": "error.storage.retryLimitExceeded",
    "storage/quota-exceeded": "error.storage.quotaExceeded",
    "storage/canceled": "error.storage.canceled"
  };
  return e[t] ? e[t] : n[t] ? n[t] : r[t] ? r[t] : t.includes("network") || t.includes("offline") ? "error.network" : t.toLowerCase().includes("permission") ? "error.db.permissionDenied" : "error.unknown";
}
function In(t, e = "unknown") {
  if (!t)
    return console.error(`[${e}] 에러 객체가 없습니다.`), {
      key: "error.unknown",
      code: null,
      message: "No error object provided",
      context: e
    };
  const n = t;
  let r = n.code ?? null;
  if (!r && n.message) {
    const s = n.message.match(/\(([^)]+)\)/);
    s && s[1] && (r = s[1]);
  }
  return console.error(`[${e}] Firebase 에러:`, {
    code: r,
    message: n.message,
    stack: n.stack,
    originalError: t
  }), {
    key: DC(r),
    code: r,
    message: n.message || "Unknown error",
    context: e
  };
}
function QC(t, e, n, r) {
  const i = In(t, e), s = r(i.key);
  return n(s, "error"), i;
}
async function JC(t, e, n, r, i) {
  try {
    const s = Date.now(), o = `${t}-${s}`, a = {
      uid: e,
      title: r,
      content: i,
      author: n,
      category: t,
      order: o,
      // 카테고리별 정렬을 위한 필드
      createdAt: s,
      updatedAt: s,
      likeCount: 0,
      commentCount: 0
    }, l = fe(pe, "posts");
    return {
      success: !0,
      postId: (await sa(l, a)).key || void 0
    };
  } catch (s) {
    const o = In(s, "createPost");
    return {
      success: !1,
      error: o.key,
      // i18n 키 반환
      errorMessage: o.message
      // 원본 메시지 (디버깅용)
    };
  }
}
function XC(t, e = 10, n) {
  try {
    const r = fe(pe, "posts"), i = Uc(
      r,
      Jp("order"),
      Qp(`${t}-`),
      Kp(`${t}-`),
      IE(e)
    );
    return Yn(i, (s) => {
      if (s.exists()) {
        const o = [];
        s.forEach((a) => {
          o.push({
            postId: a.key,
            ...a.val()
          });
        }), o.reverse(), n(o);
      } else
        n([]);
    }), () => {
      hi(r);
    };
  } catch (r) {
    return console.error("게시글 조회 실패:", r), n([]), () => {
    };
  }
}
async function ZC(t, e) {
  try {
    const n = {
      ...e,
      updatedAt: Date.now()
    }, r = fe(pe, `posts/${t}`);
    return await mn(r, n), {
      success: !0
    };
  } catch (n) {
    const r = In(n, "updatePost");
    return {
      success: !1,
      error: r.key,
      // i18n 키 반환
      errorMessage: r.message
      // 원본 메시지 (디버깅용)
    };
  }
}
async function eT(t) {
  try {
    const e = fe(pe, `posts/${t}`);
    return await qp(e), {
      success: !0
    };
  } catch (e) {
    const n = In(e, "deletePost");
    return {
      success: !1,
      error: n.key,
      // i18n 키 반환
      errorMessage: n.message
      // 원본 메시지 (디버깅용)
    };
  }
}
const tT = [
  "community",
  "qna",
  "news",
  "market"
];
function _m() {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let e = "";
  for (let n = 0; n < 3; n++)
    e += t.charAt(Math.floor(Math.random() * t.length));
  return e;
}
async function nT(t) {
  const { postId: e, userId: n, content: r } = t;
  try {
    const i = Date.now(), s = _m(), o = {
      postId: e,
      uid: n,
      content: r,
      depth: 1,
      // 최상위 댓글
      order: s,
      // 'abc'
      parentId: null,
      // 부모 없음
      createdAt: i,
      updatedAt: i
    }, a = fe(pe, "comments"), c = sa(a).key;
    if (!c)
      throw new Error("Failed to generate comment ID");
    const d = {};
    return d[`comments/${c}`] = o, d[`posts/${e}/commentCount`] = la(1), await mn(fe(pe), d), {
      success: !0,
      commentId: c
    };
  } catch (i) {
    const s = In(i, "createTopLevelComment");
    return {
      success: !1,
      error: s.key,
      // i18n 키 반환
      errorMessage: s.message
      // 원본 메시지 (디버깅용)
    };
  }
}
async function rT(t) {
  const { parentCommentId: e, userId: n, content: r } = t;
  try {
    const i = fe(pe, `comments/${e}`), s = await oa(i);
    if (!s.exists())
      return {
        success: !1,
        error: "error.comment.parentNotFound",
        errorMessage: "Parent comment not found"
      };
    const o = s.val(), a = o.depth || 1, l = o.order || "", c = o.postId, d = a + 1;
    if (d > 12)
      return {
        success: !1,
        error: "error.comment.maxDepthExceeded",
        errorMessage: "Maximum comment depth exceeded (12)"
      };
    const h = Date.now(), u = _m(), f = `${l}-${u}`, p = {
      postId: c,
      uid: n,
      content: r,
      depth: d,
      order: f,
      // 부모 order + '-' + 랜덤 3자리
      parentId: e,
      createdAt: h,
      updatedAt: h
    }, g = fe(pe, "comments"), C = sa(g).key;
    if (!C)
      throw new Error("Failed to generate comment ID");
    const T = {};
    return T[`comments/${C}`] = p, T[`posts/${c}/commentCount`] = la(1), await mn(fe(pe), T), {
      success: !0,
      commentId: C
    };
  } catch (i) {
    const s = In(i, "createChildComment");
    return {
      success: !1,
      error: s.key,
      // i18n 키 반환
      errorMessage: s.message
      // 원본 메시지 (디버깅용)
    };
  }
}
function iT(t, e) {
  try {
    const n = fe(pe, "comments"), r = Uc(
      n,
      Jp("postId"),
      AE(t)
    );
    return Yn(r, (i) => {
      if (i.exists()) {
        const s = [];
        i.forEach((o) => {
          s.push({
            commentId: o.key,
            ...o.val()
          });
        }), s.sort((o, a) => {
          const l = o.order || "", c = a.order || "";
          return l.localeCompare(c);
        }), e(s);
      } else
        e([]);
    }), () => {
      hi(n);
    };
  } catch (n) {
    return console.error("댓글 조회 실패:", n), e([]), () => {
    };
  }
}
async function MC(t, e) {
  try {
    const n = {};
    return n[`post-likes/${t}-${e}`] = 1, n[`posts/${t}/likeCount`] = la(1), await mn(fe(pe), n), {
      success: !0
    };
  } catch (n) {
    const r = In(n, "addLike");
    return {
      success: !1,
      error: r.key,
      // i18n 키 반환
      errorMessage: r.message
      // 원본 메시지 (디버깅용)
    };
  }
}
async function $C(t, e) {
  try {
    const n = {};
    return n[`post-likes/${t}-${e}`] = null, n[`posts/${t}/likeCount`] = la(-1), await mn(fe(pe), n), {
      success: !0
    };
  } catch (n) {
    const r = In(n, "removeLike");
    return {
      success: !1,
      error: r.key,
      // i18n 키 반환
      errorMessage: r.message
      // 원본 메시지 (디버깅용)
    };
  }
}
async function FC(t, e) {
  try {
    const n = fe(pe, `post-likes/${t}-${e}`);
    return (await oa(n)).exists();
  } catch (n) {
    return console.error("좋아요 상태 확인 실패:", n), !1;
  }
}
function sT(t, e, n) {
  try {
    const r = fe(pe, `post-likes/${t}-${e}`);
    return Yn(r, (i) => {
      n(i.exists());
    }), () => {
      hi(r);
    };
  } catch (r) {
    return console.error("좋아요 상태 구독 실패:", r), n(!1), () => {
    };
  }
}
async function oT(t) {
  try {
    const e = fe(pe, "post-likes"), n = Uc(
      e,
      SE(),
      Qp(`${t}-`),
      Kp(`${t}-`)
    ), r = await oa(n), i = [];
    return r.exists() && r.forEach((s) => {
      const o = s.key;
      if (o) {
        const a = o.substring(t.length + 1);
        i.push({
          uid: a,
          value: s.val()
        });
      }
    }), i;
  } catch (e) {
    return console.error("좋아요 목록 조회 실패:", e), [];
  }
}
async function aT(t, e) {
  try {
    const n = await FC(t, e);
    let r;
    return n ? r = await $C(t, e) : r = await MC(t, e), r.success ? {
      success: !0,
      isLiked: !n
      // 새로운 상태
    } : {
      success: !1,
      isLiked: n,
      // 기존 상태 유지
      error: r.error,
      errorMessage: r.errorMessage
    };
  } catch (n) {
    const r = In(n, "toggleLike");
    return {
      success: !1,
      isLiked: !1,
      error: r.key,
      errorMessage: r.message
    };
  }
}
const lT = ["M", "F"];
console.log("SNS Web Components 로드됨 ✅");
export {
  tT as POST_CATEGORIES,
  lT as USER_GENDERS,
  MC as addLike,
  Kt as auth,
  FC as checkLikeStatus,
  rT as createChildComment,
  JC as createPost,
  OC as createRealtimeStore,
  nT as createTopLevelComment,
  pe as database,
  qC as deleteData,
  eT as deletePost,
  oT as getPostLikes,
  In as handleFirebaseError,
  iT as listenToComments,
  sT as listenToLikeStatus,
  XC as listenToPosts,
  FI as loading,
  QC as logAndShowError,
  DC as mapFirebaseErrorCode,
  GC as pushData,
  KC as readData,
  $C as removeLike,
  jC as rtdb,
  YC as setupPresence,
  WC as signIn,
  UI as signOut,
  VC as signUp,
  HC as storage,
  aT as toggleLike,
  BC as updateData,
  ZC as updatePost,
  Vc as user,
  zC as writeData
};
