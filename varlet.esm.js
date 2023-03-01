import { reactive as Ee, onMounted as ze, onUnmounted as pr, ref as V, onActivated as Qo, onDeactivated as _o, createApp as vv, getCurrentInstance as Ya, provide as Fl, computed as Y, inject as Hl, nextTick as Me, h as jl, onBeforeUnmount as It, isVNode as Nt, watch as le, onBeforeMount as fv, defineComponent as x, createVNode as re, Teleport as Fa, Transition as De, withDirectives as Se, vShow as Ha, mergeProps as Ve, openBlock as p, createBlock as me, resolveDynamicComponent as ja, normalizeClass as m, normalizeStyle as W, resolveComponent as ie, resolveDirective as Fe, withCtx as ve, createElementVNode as A, renderSlot as H, toDisplayString as ne, createElementBlock as T, Fragment as Pe, renderList as Ie, createCommentVNode as _, onUpdated as Dt, createTextVNode as be, pushScopeId as ka, popScopeId as $a, withModifiers as Vn, normalizeProps as xo, guardReactiveProps as Wl, vModelText as cv, toRefs as mv, withKeys as Vi, toRaw as Ei, TransitionGroup as pv, Comment as hv } from "vue";
var Gl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, AC = Ee(Gl);
const dn = Ee(Gl), qe = (e) => typeof e == "string", io = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", ei = (e) => Object.prototype.toString.call(e) === "[object Object]", gv = (e) => typeof e == "object" && e !== null, ni = (e) => typeof e == "function", we = (e) => Array.isArray(e), yv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, R = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : io(e) ? Number(e) : e, At = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, ri = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, ai = () => typeof window < "u", Mi = (e) => [...new Set(e)], ql = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), bv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), wv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Bi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ii = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Cv = (e) => {
  var n = [];
  return {
    cache: n,
    has(r) {
      return this.cache.includes(r);
    },
    add(r) {
      this.has(r) || (this.cache.length === e && n.shift(), this.cache.push(r));
    },
    remove(r) {
      this.has(r) && At(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, lo = (e) => e, Ni = (e) => Math.pow(e, 3), Kl = (e) => e < 0.5 ? Ni(e * 2) / 2 : 1 - Ni((1 - e) * 2) / 2, zt = (e, n) => e ?? n, Xl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ga = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Di(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Sv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Di(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Di(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function kv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Ai(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Lt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function ti(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function $v(e) {
  return so.apply(this, arguments);
}
function so() {
  return so = Sv(function* (e) {
    yield En();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: o,
      innerHeight: l
    } = window, i = a <= o && t >= 0, s = n <= l && r >= 0;
    return i && s;
  }), so.apply(this, arguments);
}
function _t(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ta(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = window.getComputedStyle(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function Tv(e) {
  for (var n = [], r = e; r !== window; )
    r = Ta(r), n.push(r);
  return n;
}
function Zl(e, n) {
  if (qe(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (gv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Jl = (e) => qe(e) && e.endsWith("rem"), Ov = (e) => qe(e) && e.endsWith("px") || xe(e), Pv = (e) => qe(e) && e.endsWith("%"), Ql = (e) => qe(e) && e.endsWith("vw"), _l = (e) => qe(e) && e.endsWith("vh"), Vv = (e) => qe(e) && e.startsWith("calc("), Ev = (e) => qe(e) && e.startsWith("var("), Ne = (e) => {
  if (xe(e))
    return e;
  if (Ov(e))
    return +e.replace("px", "");
  if (Ql(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (_l(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Jl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? R(e) : 0;
}, he = (e) => {
  if (e != null)
    return Pv(e) || Ql(e) || _l(e) || Jl(e) || Vv(e) || Ev(e) ? e : Ne(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function On(e) {
  var n = Xl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Mv(e) {
  var n = Xl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Rt(e) {
  On(() => {
    On(e);
  });
}
function En() {
  return new Promise((e) => {
    On(() => {
      On(e);
    });
  });
}
function Bv() {
  return new Promise((e) => {
    On(e);
  });
}
function Qa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = Lt(e), s = ti(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), c = s + (a - s) * o(v);
        e.scrollTo(c, f), On(d);
      } else
        e.scrollTo(a, r), u();
    };
    On(d);
  });
}
function xl(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + bv(a);
    return n[o] = t, n;
  }, {});
}
function Iv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function wt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
var Nv = ["collect", "clear"];
function zi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Li(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        zi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        zi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Dv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
function Xe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Av(e) {
  var n = vv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Wa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => jl(e, Ct({}, n, r));
    }
  }, {
    unmount: t
  } = Av(a);
  return {
    unmountInstance: t
  };
}
function zv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Nt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function vn(e) {
  var n = Ee([]), r = Ya(), a = () => {
    var i = zv(r.subTree);
    n.sort((s, u) => i.indexOf(s.vnode) - i.indexOf(u.vnode));
  }, t = (i) => {
    n.push(i), a();
  }, o = (i) => {
    At(n, i);
  };
  Fl(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var l = Y(() => n.length);
  return {
    length: l
  };
}
function fn(e) {
  if (!es(e))
    return {
      index: null
    };
  var n = Hl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Ya();
  ze(() => {
    Me().then(() => r(o));
  }), pr(() => {
    Me().then(() => a(o));
  });
  var l = Y(() => t.indexOf(o));
  return {
    index: l
  };
}
function on(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    At(n, o);
  }, t = (o) => {
    Fl(e, Ct({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function ln(e) {
  if (!es(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Hl(e), {
    collect: r,
    clear: a
  } = n, t = Dv(n, Nv), o = (l) => {
    ze(() => r(l)), It(() => a(l));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function es(e) {
  var n = Ya();
  return e in n.provides;
}
function bn() {
  var e = V(""), n = /* @__PURE__ */ function() {
    var t = Li(function* (o, l, i) {
      if (!we(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(l, i)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(l, i, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = Li(function* (o, l, i, s, u) {
      o.includes(l) && (yield n(i, s, u)) && (e.value = "");
    });
    return function(l, i, s, u, d) {
      return t.apply(this, arguments);
    };
  }();
  return {
    errorMessage: e,
    validate: n,
    resetValidation: r,
    validateWithTrigger: a
  };
}
function Lv(e) {
  ze(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), pr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function oi() {
  var e = V(!1);
  return Qo(() => {
    e.value = !1;
  }), _o(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (we(s)) {
        var [u, d, v = null] = s;
        return u ? d : v;
      }
      return s;
    });
  };
  return {
    n: a,
    classes: t
  };
}
function $(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (we(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function F(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function St() {
  return St = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, St.apply(this, arguments);
}
var {
  n: ns
} = ee("ripple"), Ri = 250;
function Rv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Uv(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - l * 2) / 2, v = (o - l * 2) / 2, f = s - l, c = u - l;
  return {
    x: f,
    y: c,
    centerX: d,
    centerY: v,
    size: i
  };
}
function rs(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = Uv(this, e), s = document.createElement("div");
      s.classList.add(ns()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Rv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function uo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + ns());
    if (r.length) {
      var a = r[r.length - 1], t = Ri - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Ri);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function as() {
  var e = this._ripple;
  Iv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Yv(e, n) {
  var r, a, t;
  e._ripple = St({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : dn.touchmoveForbid,
    removeRipple: uo.bind(e)
  }), e.addEventListener("touchstart", rs, {
    passive: !0
  }), e.addEventListener("touchmove", as, {
    passive: !0
  }), e.addEventListener("dragstart", uo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Fv(e) {
  e.removeEventListener("touchstart", rs), e.removeEventListener("touchmove", as), e.removeEventListener("dragstart", uo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Hv(e, n) {
  var r, a, t, o, l, i, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : dn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((l = e._ripple) == null ? void 0 : l.touchmoveForbid) || u.color !== ((i = e._ripple) == null ? void 0 : i.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = St({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var ts = {
  mounted: Yv,
  unmounted: Fv,
  updated: Hv,
  install(e) {
    e.directive("ripple", this);
  }
}, zC = ts;
const Ae = ts;
function jv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var tt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: jv
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  onClickOverlay: F(),
  "onUpdate:show": F(),
  // internal for Dialog
  onRouteChange: F()
};
function os() {
  var e = Object.keys(dn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function lt(e) {
  dn.locks[e] = 1, os();
}
function st(e) {
  delete dn.locks[e], os();
}
function Ut(e, n) {
  var {
    uid: r
  } = Ya();
  n && le(n, (a) => {
    a === !1 ? st(r) : a === !0 && e() === !0 && lt(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? lt(r) : st(r));
  }), fv(() => {
    n && n() === !1 || e() === !0 && lt(r);
  }), pr(() => {
    n && n() === !1 || e() === !0 && st(r);
  }), Qo(() => {
    n && n() === !1 || e() === !0 && lt(r);
  }), _o(() => {
    n && n() === !1 || e() === !0 && st(r);
  });
}
function ot(e, n) {
  var r = V(dn.zIndex);
  return le(e, (a) => {
    a && (dn.zIndex += n, r.value = dn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function vo() {
  return vo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vo.apply(this, arguments);
}
function Wv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Nt(e);
}
var {
  n: In,
  classes: xt
} = ee("popup");
const hn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: tt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ot(() => e.show, 3), {
      disabled: o
    } = oi(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      $(v), d && $(e["onUpdate:show"], !1);
    };
    Ut(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      $(d ? e.onOpen : e.onClose);
    }), Lv(() => $(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: xt(In("overlay"), d),
        style: vo({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => re("div", Ve({
      class: xt(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [$(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: h,
        position: w
      } = e;
      return re(De, {
        name: In("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [Se(re("div", {
          class: xt(In("$--box"), In()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && i(), re(De, {
          name: h || In("$-pop-" + w)
        }, {
          default: () => [f && s()]
        })]), [[Ha, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(Fa, {
          to: d,
          disabled: o.value
        }, Wv(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
hn.install = function(e) {
  e.component(hn.name, hn);
};
var LC = hn, is = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  onClick: F()
};
function Ui(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Gv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ui(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ui(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: qv,
  classes: Kv
} = ee("icon");
function Xv(e, n) {
  return p(), me(
    ja(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: W({
        color: e.color,
        transition: "transform " + e.toNumber(e.transition) + "ms",
        width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        fontSize: e.toSizeUnit(e.size)
      }),
      src: e.isURL(e.name) ? e.nextName : null,
      onClick: e.onClick
    },
    null,
    8,
    ["class", "style", "src", "onClick"]
  );
}
var ls = x({
  name: "VarIcon",
  props: is,
  setup(e) {
    var n = V(""), r = V(!1), a = /* @__PURE__ */ function() {
      var t = Gv(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || R(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, R(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: qv,
      classes: Kv,
      nextName: n,
      shrinking: r,
      isURL: yv,
      toNumber: R,
      toSizeUnit: he
    };
  }
});
ls.render = Xv;
const $e = ls;
$e.install = function(e) {
  e.component($e.name, $e);
};
var RC = $e;
function fo() {
  return fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fo.apply(this, arguments);
}
var Zv = fo({
  show: {
    type: Boolean,
    default: !1
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: F(),
  "onUpdate:show": F()
}, Xe(tt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
const ii = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往"
}, ss = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function co() {
  return co = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, co.apply(this, arguments);
}
function li() {
  var e = {}, n = V({}), r = (o, l) => {
    l.lang = o, e[o] = l;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[o];
  }, t = (o, l) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = co({}, e[o], l), a(o);
  };
  return {
    packs: e,
    pack: n,
    add: r,
    use: a,
    merge: t
  };
}
var {
  packs: us,
  pack: je,
  add: si,
  use: ui,
  merge: ds
} = li();
si("zh-CN", ii);
ui("zh-CN");
var UC = {
  zhCN: ii,
  enUS: ss,
  packs: us,
  pack: je,
  add: si,
  use: ui,
  merge: ds,
  useLocale: li
};
const mo = {
  zhCN: ii,
  enUS: ss,
  packs: us,
  pack: je,
  add: si,
  use: ui,
  merge: ds,
  useLocale: li
};
var {
  n: Jv,
  classes: Qv
} = ee("action-sheet"), _v = ["onClick"];
function xv(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = Fe("ripple");
  return p(), me(
    a,
    Ve({
      class: e.n("popup-radius"),
      position: "bottom",
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.popupShow
    }, {
      "onUpdate:show": e.handlePopupUpdateShow
    }, {
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    }),
    {
      default: ve(() => [A(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [H(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), H(e.$slots, "actions", {}, () => [(p(!0), T(
          Pe,
          null,
          Ie(e.actions, (o) => Se((p(), T(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: W({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), me(
              r,
              {
                key: 0,
                class: m(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: o.icon,
                size: o.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : _("v-if", !0), A(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ne(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            _v
          )), [[t, {
            disabled: o.disabled
          }]])),
          128
          /* KEYED_FRAGMENT */
        ))])],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var vs = x({
  name: "VarActionSheet",
  directives: {
    Ripple: Ae
  },
  components: {
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Zv,
  setup(e) {
    var n = V(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        $(l, t), o && $(e["onUpdate:show"], !1);
      }
    }, a = (t) => $(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Jv,
      classes: Qv,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: je,
      dt: zt,
      handleSelect: r
    };
  }
});
vs.render = xv;
const rr = vs;
function po() {
  return po = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, po.apply(this, arguments);
}
var Jn, di = {};
function ef(e) {
  return e === void 0 && (e = {}), po({}, di, e);
}
function ya(e) {
  return ai() ? new Promise((n) => {
    ya.close();
    var r = Ee(ef(e));
    r.teleport = "body", Jn = r;
    var {
      unmountInstance: a
    } = Wa(rr, r, {
      onSelect: (t) => {
        $(r.onSelect, t), n(t);
      },
      onClose: () => {
        $(r.onClose), n("close");
      },
      onClosed: () => {
        $(r.onClosed), a(), Jn === r && (Jn = null);
      },
      onRouteChange: () => {
        a(), Jn === r && (Jn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function nf(e) {
  di = e;
}
function rf() {
  di = {};
}
function af() {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
ya.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
ya.install = function(e) {
  e.component(rr.name, rr);
};
Object.assign(ya, {
  setDefaultOptions: nf,
  resetDefaultOptions: rf,
  close: af
});
var YC = rr;
function tf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var of = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: "left",
    validator: tf
  },
  elevation: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  image: {
    type: String
  },
  imageLinearGradient: {
    type: String
  }
}, {
  n: lf,
  classes: sf
} = ee("app-bar");
function uf(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: W(e.rootStyles)
    },
    [A(
      "div",
      {
        class: m(e.n("toolbar"))
      },
      [A(
        "div",
        {
          class: m(e.n("left"))
        },
        [H(e.$slots, "left"), e.titlePosition === "left" ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
            style: W({
              paddingLeft: e.paddingLeft
            })
          },
          [H(e.$slots, "default", {}, () => [be(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("title"))
        },
        [H(e.$slots, "default", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0), A(
        "div",
        {
          class: m(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
            style: W({
              paddingRight: e.paddingRight
            })
          },
          [H(e.$slots, "default", {}, () => [be(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), H(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), H(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var fs = x({
  name: "VarAppBar",
  props: of,
  setup(e, n) {
    var {
      slots: r
    } = n, a = V(), t = V(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = Y(() => {
      var {
        image: i,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (i != null) {
        var v = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": v + "url(" + i + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return ze(o), Dt(o), {
      n: lf,
      classes: sf,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
fs.render = uf;
const br = fs;
br.install = function(e) {
  e.component(br.name, br);
};
var FC = br;
function Yi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Yi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Yi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function ho() {
  return ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ho.apply(this, arguments);
}
var df = "background-image", vf = "lazy-loading", ff = "lazy-error", Fi = "lazy-attempt", cf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], go = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Da = [], kt = [], cs = Cv(100), Ue = {
  loading: go,
  error: go,
  attempt: 3,
  throttleWait: 300,
  events: cf
}, vi = ri(it, Ue.throttleWait);
function Ft(e, n) {
  e._lazy.arg === df ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function mf(e) {
  e._lazy.loading && Ft(e, e._lazy.loading), it();
}
function pf(e) {
  e._lazy.error && Ft(e, e._lazy.error), e._lazy.state = "error", ci(e), it();
}
function ms(e, n) {
  Ft(e, n), e._lazy.state = "success", ci(e), it();
}
function hf(e) {
  var n;
  kt.includes(e) || (kt.push(e), (n = Ue.events) == null || n.forEach((r) => {
    e.addEventListener(r, vi, {
      passive: !0
    });
  }));
}
function gf() {
  kt.forEach((e) => {
    var n;
    (n = Ue.events) == null || n.forEach((r) => {
      e.removeEventListener(r, vi);
    });
  }), kt.length = 0;
}
function yf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(vf)) != null ? r : Ue.loading,
    error: (a = e.getAttribute(ff)) != null ? a : Ue.error,
    attempt: e.getAttribute(Fi) ? Number(e.getAttribute(Fi)) : Ue.attempt
  };
  e._lazy = ho({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Ft(e, go), $(Ue.filter, e._lazy);
}
function bf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, cs.add(n), ms(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? pf(e) : ps(e);
  });
}
function ps(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (cs.has(n)) {
      ms(e, n), e._lazy.attemptLock = !1;
      return;
    }
    mf(e), bf(e, n);
  }
}
function fi(e) {
  return yo.apply(this, arguments);
}
function yo() {
  return yo = Yt(function* (e) {
    (yield $v(e)) && ps(e);
  }), yo.apply(this, arguments);
}
function it() {
  Da.forEach((e) => fi(e));
}
function wf(e) {
  return bo.apply(this, arguments);
}
function bo() {
  return bo = Yt(function* (e) {
    !Da.includes(e) && Da.push(e), Tv(e).forEach(hf), yield fi(e);
  }), bo.apply(this, arguments);
}
function ci(e) {
  At(Da, e), Da.length === 0 && gf();
}
function Cf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function hs(e, n) {
  return wo.apply(this, arguments);
}
function wo() {
  return wo = Yt(function* (e, n) {
    yf(e, n), yield wf(e);
  }), wo.apply(this, arguments);
}
function Sf(e, n) {
  return Co.apply(this, arguments);
}
function Co() {
  return Co = Yt(function* (e, n) {
    if (!Cf(e, n)) {
      Da.includes(e) && (yield fi(e));
      return;
    }
    yield hs(e, n);
  }), Co.apply(this, arguments);
}
function kf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ue.events = n ?? Ue.events, Ue.loading = r ?? Ue.loading, Ue.error = a ?? Ue.error, Ue.attempt = t ?? Ue.attempt, Ue.throttleWait = o ?? Ue.throttleWait, Ue.filter = l;
}
var gs = {
  mounted: hs,
  unmounted: ci,
  updated: Sf,
  install(e, n) {
    kf(n), vi = ri(it, Ue.throttleWait), e.directive("lazy", this);
  }
}, HC = gs;
const _a = gs;
function $f(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ys = (e) => ["mini", "small", "normal", "large"].includes(e);
function bs(e) {
  return ys(e) || xe(e) || qe(e);
}
var Tf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: bs,
    default: "normal"
  },
  color: {
    type: String
  },
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: $f,
    default: "cover"
  },
  bordered: {
    type: Boolean,
    default: !1
  },
  borderColor: {
    type: String
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: Of,
  classes: Pf
} = ee("avatar"), Vf = ["src", "lazy-loading", "lazy-error"], Ef = ["src"];
function Mf(e, n) {
  var r = Fe("lazy");
  return p(), T(
    "div",
    {
      ref: "avatarElement",
      class: m(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: W({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), T(
      Pe,
      {
        key: 0
      },
      [e.lazy ? Se((p(), T(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          src: e.src,
          style: W({
            objectFit: e.fit
          }),
          "lazy-loading": e.loading,
          "lazy-error": e.error,
          onLoad: n[0] || (n[0] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          })
        },
        null,
        46,
        Vf
      )), [[r, e.src]]) : (p(), T(
        "img",
        {
          key: 1,
          class: m(e.n("image")),
          src: e.src,
          style: W({
            objectFit: e.fit
          }),
          onLoad: n[1] || (n[1] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          }),
          onError: n[2] || (n[2] = function() {
            return e.handleError && e.handleError(...arguments);
          })
        },
        null,
        46,
        Ef
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (p(), T(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: m(e.n("text")),
        style: W({
          transform: "scale(" + e.scale + ")"
        })
      },
      [H(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var ws = x({
  name: "VarAvatar",
  directives: {
    Lazy: _a
  },
  props: Tf,
  setup(e) {
    var n = V(null), r = V(null), a = V(1), t = () => {
      if (!n.value || !r.value) {
        a.value = 1;
        return;
      }
      var s = n.value.offsetWidth, u = r.value.offsetWidth;
      s > u ? a.value = 1 : a.value = s / u;
    }, o = (s) => {
      var u = s.currentTarget, {
        lazy: d,
        onLoad: v,
        onError: f
      } = e;
      d ? (u._lazy.state === "success" && $(v, s), u._lazy.state === "error" && $(f, s)) : $(v, s);
    }, l = (s) => {
      $(e.onError, s);
    }, i = (s) => {
      $(e.onClick, s);
    };
    return ze(t), Dt(t), {
      internalSizeValidator: ys,
      sizeValidator: bs,
      toSizeUnit: he,
      n: Of,
      classes: Pf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
ws.render = Mf;
const wr = ws;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var jC = wr, Bf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: If,
  classes: Nf
} = ee("avatar-group");
function Df(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: W(e.rootStyles)
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Cs = x({
  name: "VarAvatarGroup",
  props: Bf,
  setup(e) {
    var n = Y(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: If,
      classes: Nf,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
Cs.render = Df;
const Cr = Cs;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var WC = Cr;
function Af(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function zf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: Af
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: zf
  },
  // loading颜色
  color: {
    type: String
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, {
  n: Lf,
  classes: Rf
} = ee("loading"), Uf = (e) => (ka(""), e = e(), $a(), e), Yf = /* @__PURE__ */ Uf(() => /* @__PURE__ */ A(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ A("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), Ff = [Yf];
function Hf(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [H(e.$slots, "default"), e.loading ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.isShow ? (p(), T(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [A(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: W({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Ff,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (p(!0), T(
        Pe,
        null,
        Ie(e.loadingTypeDict, (r, a) => (p(), T(
          Pe,
          {
            key: a
          },
          [e.type === a ? (p(), T(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), T(
              Pe,
              null,
              Ie(r, (t) => (p(), T(
                "div",
                {
                  key: t + a,
                  style: W({
                    backgroundColor: e.color
                  }),
                  class: m(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
                },
                null,
                6
                /* CLASS, STYLE */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          )) : _("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), T(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: W({
            color: e.color
          })
        },
        [H(e.$slots, "description", {}, () => [be(
          ne(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ss = x({
  name: "VarLoading",
  props: xn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = Y(() => $(r.default) ? e.loading : !0);
    return {
      n: Lf,
      classes: Rf,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Ss.render = Hf;
const $n = Ss;
$n.install = function(e) {
  e.component($n.name, $n);
};
var GC = $n;
function So() {
  return So = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, So.apply(this, arguments);
}
function jf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Wf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Gf(e) {
  return ["button", "reset", "submit"].includes(e);
}
var qf = {
  type: {
    type: String,
    validator: jf
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Gf
  },
  size: {
    type: String,
    validator: Wf
  },
  loading: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  outline: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String]
  },
  loadingType: Xe(xn, "type"),
  loadingSize: Xe(xn, "size"),
  loadingColor: So({}, Xe(xn, "color"), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, ks = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"), $s = Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");
function Kf() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(ks), {
    length: r
  } = vn($s);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function Xf() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(ks), {
    index: r
  } = fn($s);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Zf,
  classes: Jf
} = ee("button"), Qf = ["type", "disabled"];
function _f(e, n) {
  var r = ie("var-loading"), a = Fe("ripple");
  return Se((p(), T(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.n("$-elevation--" + e.states.elevation)], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: W({
        color: e.states.textColor,
        background: e.states.color
      }),
      type: e.nativeType,
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (p(), me(
      r,
      {
        key: 0,
        class: m(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : _("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [H(e.$slots, "default")],
      2
      /* CLASS */
    )],
    46,
    Qf
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var Ts = x({
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: Ae
  },
  props: qf,
  setup(e) {
    var n = V(!1), {
      buttonGroup: r
    } = Xf(), a = Y(() => {
      if (!r)
        return {
          elevation: 2,
          type: e.type != null ? e.type : "default",
          size: e.size != null ? e.size : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline
        };
      var {
        type: i,
        size: s,
        color: u,
        textColor: d,
        mode: v
      } = r;
      return {
        elevation: 0,
        type: e.type != null ? e.type : i.value,
        size: e.size != null ? e.size : s.value,
        color: e.color != null ? e.color : u.value,
        textColor: e.textColor != null ? e.textColor : d.value,
        text: v.value !== "normal",
        outline: v.value === "outline"
      };
    }), t = (i) => {
      e.autoLoading && (n.value = !0, i = we(i) ? i : [i], Promise.all(i).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, o = (i) => {
      var {
        loading: s,
        disabled: u,
        onClick: d
      } = e;
      !d || s || u || n.value || t($(d, i));
    }, l = (i) => {
      var {
        loading: s,
        disabled: u,
        onTouchstart: d
      } = e;
      !d || s || u || n.value || t($(d, i));
    };
    return {
      n: Zf,
      classes: Jf,
      pending: n,
      states: a,
      handleClick: o,
      handleTouchstart: l
    };
  }
});
Ts.render = _f;
const en = Ts;
en.install = function(e) {
  e.component(en.name, en);
};
var qC = en, xf = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: F()
}, {
  n: ec,
  classes: nc
} = ee("back-top");
function rc(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return p(), me(
    Fa,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Vn(function() {
          return e.click && e.click(...arguments);
        }, ["stop"]))
      }),
      [H(e.$slots, "default", {}, () => [re(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ve(() => [re(r, {
          name: "chevron-up"
        })]),
        _: 1
        /* STABLE */
      })])],
      16
      /* FULL_PROPS */
    )],
    8,
    ["disabled"]
  );
}
var Os = x({
  name: "VarBackTop",
  components: {
    VarButton: en,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: xf,
  setup(e) {
    var n = V(!1), r = V(null), a = V(!0), t, o = (s) => {
      $(e.onClick, s);
      var u = ti(t);
      Qa(t, {
        left: u,
        duration: e.duration,
        animation: Kl
      });
    }, l = () => {
      n.value = Lt(t) >= Ne(e.visibilityHeight);
    }, i = ri(l, 200);
    return ze(() => {
      t = e.target ? Zl(e.target, "BackTop") : Ta(r.value), t.addEventListener("scroll", i), a.value = !1;
    }), It(() => {
      t.removeEventListener("scroll", i);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: ec,
      classes: nc,
      click: o
    };
  }
});
Os.render = rc;
const Sr = Os;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var KC = Sr;
function ac(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function tc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var oc = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: ac
  },
  // 是否隐藏徽标
  hidden: {
    type: Boolean,
    default: !1
  },
  // 是否是小圆点
  dot: {
    type: Boolean,
    default: !1
  },
  // 显示的值
  value: {
    type: [String, Number],
    default: 0
  },
  // 显示最大值
  maxValue: {
    type: [String, Number]
  },
  // 自定义徽标颜色
  color: {
    type: String
  },
  // 定位位置
  position: {
    type: String,
    default: "right-top",
    validator: tc
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: Wn,
  classes: ic
} = ee("badge"), lc = {
  key: 1
};
function sc(e, n) {
  var r = ie("var-icon");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [re(
      De,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [Se(A(
          "span",
          Ve(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (p(), me(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (p(), T(
            "span",
            lc,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Ha, !e.hidden]])]),
        _: 1
        /* STABLE */
      },
      8,
      ["name"]
    ), H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ps = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: oc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Y(() => {
      var {
        type: l,
        position: i,
        dot: s,
        icon: u
      } = e, d = r.default && Wn("position") + " " + Wn("--" + i), v = s ? Wn("dot") : null, f = o(), c = u ? Wn("icon") : null;
      return [Wn("--" + l), d, v, f, c];
    }), t = Y(() => {
      var {
        dot: l,
        value: i,
        maxValue: s
      } = e;
      return l ? "" : i !== void 0 && s !== void 0 && R(i) > s ? s + "+" : i;
    }), o = () => {
      var {
        position: l,
        dot: i
      } = e;
      if (i) {
        if (l.includes("right"))
          return Wn("dot--right");
        if (l.includes("left"))
          return Wn("dot--left");
      }
    };
    return {
      n: Wn,
      classes: ic,
      values: t,
      contentClass: a
    };
  }
});
Ps.render = sc;
const ar = Ps;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var XC = ar, uc = {
  active: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: !1
  },
  border: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onChange: F(),
  "onUpdate:active": F(),
  onBeforeChange: F(),
  onFabClick: F(),
  fabProps: {
    type: Object
  }
}, Vs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Es = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function dc() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Vs), {
    length: r
  } = vn(Es);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function ko() {
  return ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ko.apply(this, arguments);
}
var {
  n: vc,
  classes: fc
} = ee("bottom-navigation"), {
  n: Ht
} = ee("bottom-navigation-item"), Hi = Ht("--right-half-space"), ji = Ht("--left-half-space"), Wi = Ht("--right-space"), cc = {
  type: "primary"
};
function mc(e, n) {
  var r = ie("var-button");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: W("z-index:" + e.zIndex)
    },
    [H(e.$slots, "default"), e.$slots.fab ? (p(), me(
      r,
      Ve({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ve(() => [H(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Ms = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: en
  },
  props: uc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = V(null), t = Y(() => e.active), o = Y(() => e.activeColor), l = Y(() => e.inactiveColor), i = V({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = dc(), v = () => {
      s.value === 0 || f() || c() || h();
    }, f = () => u.find((M) => {
      var {
        name: B
      } = M;
      return t.value === B.value;
    }), c = () => u.find((M) => {
      var {
        index: B
      } = M;
      return t.value === B.value;
    }), h = () => {
      xe(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > s.value - 1 && $(e["onUpdate:active"], s.value - 1));
    }, w = (M) => {
      t.value !== M && (e.onBeforeChange ? g(M) : O(M));
    }, g = (M) => {
      var B = $(e.onBeforeChange, M);
      B = we(B) ? B : [B], Promise.all(B).then((I) => {
        I.some((C) => !C) || O(M);
      });
    }, O = (M) => {
      $(e["onUpdate:active"], M), $(e.onChange, M);
    }, P = () => {
      var M = E();
      M.forEach((B) => {
        B.classList.remove(Hi, ji, Wi);
      });
    }, y = (M) => {
      var B = E(), I = B.length, C = M % 2 === 0;
      B.forEach((S, N) => {
        b(C, S, N, I);
      });
    }, b = (M, B, I, C) => {
      var S = I === C - 1;
      if (!M && S) {
        B.classList.add(Wi);
        return;
      }
      var N = I === C / 2 - 1, K = I === C / 2;
      N ? B.classList.add(Hi) : K && B.classList.add(ji);
    }, E = () => Array.from(a.value.querySelectorAll("." + Ht())), k = () => {
      $(e.onFabClick);
    }, z = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: w
    };
    return d(z), le(() => s.value, v), le(() => e.fabProps, (M) => {
      i.value = ko({}, cc, M);
    }, {
      immediate: !0,
      deep: !0
    }), ze(() => {
      r.fab && y(s.value);
    }), Dt(() => {
      P(), r.fab && y(s.value);
    }), {
      n: vc,
      classes: fc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: i
    };
  }
});
Ms.render = mc;
const kr = Ms;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var ZC = kr, pc = {
  name: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: F()
};
function hc() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Vs), {
    index: r
  } = fn(Es);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: gc,
  classes: yc
} = ee("bottom-navigation-item"), bc = {
  type: "danger",
  dot: !0
};
function wc(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = Fe("ripple");
  return Se((p(), T(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: W({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), me(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: m(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : _("v-if", !0), H(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), me(
      a,
      Ve({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : _("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (p(), T(
        Pe,
        {
          key: 0
        },
        [be(
          ne(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), H(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var Bs = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: pc,
  setup(e) {
    var n = Y(() => e.name), r = Y(() => e.badge), a = V({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = hc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var c, h = (c = n.value) != null ? c : t.value;
      $(e.onClick, h), $(o.onToggle, h);
    };
    return l(d), le(() => r.value, (c) => {
      a.value = c === !0 ? bc : r.value;
    }, {
      immediate: !0
    }), {
      n: gc,
      classes: yc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Bs.render = wc;
const $r = Bs;
$r.install = function(e) {
  e.component($r.name, $r);
};
var JC = $r, Cc = {
  separator: {
    type: String
  },
  onClick: F()
}, Is = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), Ns = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function Sc() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Is), {
    length: r
  } = vn(Ns);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function kc() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Is), {
    index: r
  } = fn(Ns);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: $c,
  classes: Tc
} = ee("breadcrumb");
function Oc(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [H(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? _("v-if", !0) : H(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [A(
        "div",
        {
          class: m(e.n("separator"))
        },
        ne((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var Ds = x({
  name: "VarBreadcrumb",
  props: Cc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = kc(), t = Y(() => n.value === r.length.value - 1), o = Y(() => r.separator.value), l = (i) => {
      t.value || $(e.onClick, i);
    };
    return a(null), {
      n: $c,
      classes: Tc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Ds.render = Oc;
const Tr = Ds;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var QC = Tr, Pc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Vc
} = ee("breadcrumbs");
function Ec(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var As = x({
  name: "VarBreadcrumbs",
  props: Pc,
  setup(e) {
    var n = Y(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Sc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Vc
    };
  }
});
As.render = Ec;
const Or = As;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var _C = Or;
function Mc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Bc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Ic(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Nc = {
  type: {
    type: String,
    default: "default",
    validator: Mc
  },
  size: {
    type: String,
    default: "normal",
    validator: Bc
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  mode: {
    type: String,
    default: "normal",
    validator: Ic
  },
  elevation: {
    type: [Number, String],
    default: 2
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Dc,
  classes: Ac
} = ee("button-group");
function zc(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var zs = x({
  name: "VarButtonGroup",
  props: Nc,
  setup(e) {
    var {
      bindButtons: n
    } = Kf(), r = {
      elevation: Y(() => e.elevation),
      type: Y(() => e.type),
      size: Y(() => e.size),
      color: Y(() => e.color),
      textColor: Y(() => e.textColor),
      mode: Y(() => e.mode)
    };
    return n(r), {
      n: Dc,
      classes: Ac
    };
  }
});
zs.render = zc;
const Pr = zs;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var xC = Pr;
function Lc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Rc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Lc,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  outline: {
    type: Boolean,
    default: !1
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: F(),
  "onUpdate:floating": F()
};
function Gi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function qi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Gi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Gi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Uc,
  classes: Yc
} = ee("card"), Fc = 500, Hc = ["src", "alt"];
function jc(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: W({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "cardFloater",
        class: m(e.n("floater")),
        style: W({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [H(e.$slots, "image", {}, () => [e.src ? (p(), T(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          style: W({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        Hc
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("container"))
        },
        [H(e.$slots, "title", {}, () => [e.title ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), H(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [H(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), T(
          "div",
          {
            key: 1,
            class: m(e.n("floating-content")),
            style: W({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [H(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: W({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [H(e.$slots, "close-button", {}, () => [re(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Vn(e.close, ["stop"])
          },
          {
            default: ve(() => [re(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: m(e.n("close-button-icon"))
              },
              null,
              8,
              ["class"]
            )]),
            _: 1
            /* STABLE */
          },
          8,
          ["class", "onClick"]
        )])],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: m(e.n("holder")),
        style: W({
          width: e.holderWidth,
          height: e.holderHeight
        })
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
var Ls = x({
  name: "VarCard",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarButton: en
  },
  props: Rc,
  setup(e) {
    var n = V(null), r = V(null), a = V("auto"), t = V("auto"), o = V("100%"), l = V("100%"), i = V("auto"), s = V("auto"), u = V(void 0), d = V("hidden"), v = V("0px"), f = V("0"), c = Y(() => e.layout === "row"), h = V(!1), w = V(!1), {
      zIndex: g
    } = ot(() => e.floating, 1);
    Ut(() => e.floating, () => !c.value);
    var O = "auto", P = "auto", y = null, b = V(null), E = /* @__PURE__ */ function() {
      var B = qi(function* () {
        clearTimeout(b.value), clearTimeout(y), b.value = null, b.value = setTimeout(/* @__PURE__ */ qi(function* () {
          var {
            width: I,
            height: C,
            left: S,
            top: N
          } = n.value.getBoundingClientRect();
          a.value = he(I), t.value = he(C), o.value = a.value, l.value = t.value, i.value = he(N), s.value = he(S), u.value = "fixed", O = i.value, P = s.value, h.value = !0, yield En(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", w.value = !0;
        }), e.ripple ? Fc : 0);
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(y), clearTimeout(b.value), b.value = null, o.value = a.value, l.value = t.value, i.value = O, s.value = P, v.value = "0px", f.value = "0", h.value = !1, y = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", O = "auto", P = "auto", d.value = "hidden", u.value = void 0, w.value = !1;
      }, e.floatingDuration);
    }, z = () => {
      $(e["onUpdate:floating"], !1);
    }, M = (B) => {
      $(e.onClick, B);
    };
    return le(() => e.floating, (B) => {
      c.value || Me(() => {
        B ? E() : k();
      });
    }, {
      immediate: !0
    }), {
      n: Uc,
      classes: Yc,
      toSizeUnit: he,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: b,
      floaterWidth: o,
      floaterHeight: l,
      floaterTop: i,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: g,
      isRow: c,
      close: z,
      showFloatingButtons: h,
      floated: w,
      handleClick: M
    };
  }
});
Ls.render = jc;
const Vr = Ls;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var eS = Vr, Wc = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  description: {
    type: String
  },
  border: {
    type: Boolean,
    default: !1
  },
  borderOffset: {
    type: [Number, String]
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descriptionClass: {
    type: String
  },
  extraClass: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, {
  n: Gc,
  classes: qc
} = ee("cell");
function Kc(e, n) {
  var r = ie("var-icon"), a = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: W(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [H(e.$slots, "icon", {}, () => [e.icon ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), e.iconClass))
      },
      [re(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0)]), A(
      "div",
      {
        class: m(e.n("content"))
      },
      [H(e.$slots, "default", {}, () => [e.title ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), e.descriptionClass))
        },
        ne(e.description),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("extra"), e.extraClass))
      },
      [H(e.$slots, "extra")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Rs = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: Wc,
  setup(e) {
    var n = Y(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      $(e.onClick, a);
    };
    return {
      n: Gc,
      classes: qc,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
Rs.render = Kc;
const tr = Rs;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var nS = tr, Xc = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Zc
} = ee("form-details"), Jc = {
  key: 0
}, Qc = {
  key: 0
};
function _c(e, n) {
  return p(), me(
    De,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [A(
          "div",
          {
            class: m(e.n("error-message"))
          },
          [re(
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), T(
                "div",
                Jc,
                ne(e.errorMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: m(e.n("extra-message"))
          },
          [re(
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (p(), T(
                "div",
                Qc,
                ne(e.extraMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var Us = x({
  name: "VarFormDetails",
  props: Xc,
  setup: () => ({
    n: Zc
  })
});
Us.render = _c;
const We = Us;
We.install = function(e) {
  e.component(We.name, We);
};
var rS = We, xc = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, Ys = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Fs = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function em() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Ys), {
    length: r
  } = vn(Fs);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function nm() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Ys), {
    index: r
  } = fn(Fs);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, $o.apply(this, arguments);
}
var Hs = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Hs), r = Ya(), a = e ? (t) => {
    e($o({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function rm() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Hs);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: am,
  classes: tm
} = ee("checkbox");
function om(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [Se((p(), T(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: W({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? H(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : H(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [H(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var js = x({
  name: "VarCheckbox",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: xc,
  setup(e) {
    var n = V(!1), r = Y(() => n.value === e.checkedValue), a = Y(() => e.checkedValue), t = V(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = nm(), {
      form: i,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), c = (k) => {
      Me(() => {
        var {
          validateTrigger: z,
          rules: M,
          modelValue: B
        } = e;
        d(z, k, M, B);
      });
    }, h = (k) => {
      n.value = k;
      var {
        checkedValue: z,
        onChange: M
      } = e;
      $(e["onUpdate:modelValue"], n.value), $(M, n.value), c("onChange"), k === z ? o == null || o.onChecked(z) : o == null || o.onUnchecked(z);
    }, w = (k) => {
      var {
        disabled: z,
        readonly: M,
        checkedValue: B,
        uncheckedValue: I,
        onClick: C
      } = e;
      if (!(i != null && i.disabled.value || z) && ($(C, k), !(i != null && i.readonly.value || M))) {
        t.value = !0;
        var S = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && S || h(r.value ? I : B);
      }
    }, g = (k) => {
      var {
        checkedValue: z,
        uncheckedValue: M
      } = e;
      n.value = k.includes(z) ? z : M;
    }, O = () => {
      t.value = !1;
    }, P = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, y = (k) => {
      var {
        checkedValue: z,
        uncheckedValue: M
      } = e, B = ![z, M].includes(k);
      B && (k = r.value ? M : z), h(k);
    }, b = () => v(e.rules, e.modelValue);
    le(() => e.modelValue, (k) => {
      n.value = k;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: b,
      resetValidation: f,
      reset: P,
      resetWithAnimation: O
    };
    return $(l, E), $(s, E), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: am,
      classes: tm,
      handleClick: w,
      toggle: y,
      reset: P,
      validate: b,
      resetValidation: f
    };
  }
});
js.render = om;
const or = js;
or.install = function(e) {
  e.component(or.name, or);
};
var aS = or;
function im(e) {
  return ["horizontal", "vertical"].includes(e);
}
var lm = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: im
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: sm,
  classes: um
} = ee("checkbox-group");
function dm(e, n) {
  var r = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [H(e.$slots, "default")],
      2
      /* CLASS */
    ), re(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Ws = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: lm,
  setup(e) {
    var n = Y(() => e.max), r = Y(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = em(), {
      bindForm: l
    } = wn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = Y(() => i.value), f = (z) => {
      Me(() => {
        var {
          validateTrigger: M,
          rules: B,
          modelValue: I
        } = e;
        s(M, z, B, I);
      });
    }, c = (z) => {
      $(e["onUpdate:modelValue"], z), $(e.onChange, z), f("onChange");
    }, h = (z) => {
      var {
        modelValue: M
      } = e;
      M.includes(z) || c([...M, z]);
    }, w = (z) => {
      var {
        modelValue: M
      } = e;
      M.includes(z) && c(M.filter((B) => B !== z));
    }, g = () => t.forEach((z) => {
      var {
        sync: M
      } = z;
      return M(e.modelValue);
    }), O = () => {
      t.forEach((z) => z.resetWithAnimation());
    }, P = () => {
      var z = t.map((B) => {
        var {
          checkedValue: I
        } = B;
        return I.value;
      }), M = Mi(z);
      return O(), $(e["onUpdate:modelValue"], M), M;
    }, y = () => {
      var z = t.filter((B) => {
        var {
          checked: I
        } = B;
        return !I.value;
      }).map((B) => {
        var {
          checkedValue: I
        } = B;
        return I.value;
      }), M = Mi(z);
      return O(), $(e["onUpdate:modelValue"], M), M;
    }, b = () => {
      $(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, g, {
      deep: !0
    }), le(() => a.value, g);
    var k = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: w,
      validate: E,
      resetValidation: d,
      reset: b,
      errorMessage: v
    };
    return o(k), $(l, k), {
      errorMessage: i,
      n: sm,
      classes: um,
      checkAll: P,
      inverseAll: y,
      reset: b,
      validate: E,
      resetValidation: d
    };
  }
});
Ws.render = dm;
const Er = Ws;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var tS = Er;
function vm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function fm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var cm = {
  type: {
    type: String,
    default: "default",
    validator: vm
  },
  size: {
    type: String,
    default: "normal",
    validator: fm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Xe(is, "name"),
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !0
  },
  block: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !1
  },
  onClose: F()
}, {
  n: Gn,
  classes: mm
} = ee("chip");
function pm(e, n) {
  var r = ie("var-icon");
  return p(), me(
    De,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [H(e.$slots, "left"), A(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [H(e.$slots, "default")],
          2
          /* CLASS */
        ), H(e.$slots, "right"), e.closable ? (p(), T(
          "span",
          {
            key: 0,
            class: m(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [re(
            r,
            {
              name: "" + (e.iconName ? e.iconName : "close-circle")
            },
            null,
            8,
            ["name"]
          )],
          2
          /* CLASS */
        )) : _("v-if", !0)],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["name"]
  );
}
var Gs = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: cm,
  setup(e) {
    var n = Y(() => {
      var {
        plain: t,
        textColor: o,
        color: l
      } = e;
      return t ? {
        color: o || l,
        borderColor: l
      } : {
        color: o,
        background: l
      };
    }), r = Y(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = Gn(o ? "$--flex" : "$--inline-flex"), d = i ? Gn("plain") + " " + Gn("plain-" + l) : Gn("--" + l), v = s ? Gn("--round") : null;
      return [Gn("--" + t), u, d, v];
    }), a = (t) => {
      $(e.onClose, t);
    };
    return {
      n: Gn,
      classes: mm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Gs.render = pm;
const ir = Gs;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var oS = ir;
function hm(e) {
  return ["row", "column"].includes(e);
}
function gm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function ym(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var bm = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row",
    validator: hm
  },
  justify: {
    type: String,
    validator: gm
  },
  align: {
    type: String,
    validator: ym
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  },
  onClick: F()
}, qs = Symbol("ROW_BIND_COL_KEY"), Ks = Symbol("ROW_COUNT_COL_KEY");
function wm() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(qs), {
    length: r
  } = vn(Ks);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Cm() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(qs), {
    index: r
  } = fn(Ks);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: ut,
  classes: Sm
} = ee("col");
function km(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: W({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Xs = x({
  name: "VarCol",
  props: bm,
  setup(e) {
    var n = V({
      left: 0,
      right: 0
    }), r = Y(() => R(e.span)), a = Y(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = Cm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (ei(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(ut("--span-" + u + "-" + c)), f && v.push(ut("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(ut("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      $(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), $(o, l), {
      n: ut,
      classes: Sm,
      padding: n,
      toNumber: R,
      toSizeUnit: he,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: wt
    };
  }
});
Xs.render = km;
const Mr = Xs;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var iS = Mr, Zs = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Js = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function $m() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Zs), {
    length: r
  } = vn(Js);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Tm = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: Boolean,
    default: !0
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Om
} = ee("collapse");
function Pm(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Qs = x({
  name: "VarCollapse",
  props: Tm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = $m(), t = Y(() => e.modelValue), o = Y(() => e.offset), l = () => !e.accordion && !we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, i = (c, h) => l() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((w) => w !== c) : null, s = (c, h) => {
      var w = i(c, h);
      $(e["onUpdate:modelValue"], w), $(e.onChange, w);
    }, u = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: w
          } = h;
          return e.modelValue === w.value;
        });
      var c = r.filter((h) => {
        var {
          name: w
        } = h;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: h,
        name: w
      } = c;
      return w.value === void 0 && e.modelValue === h.value;
    }) : r.filter((c) => {
      var {
        index: h,
        name: w
      } = c;
      return w.value === void 0 && e.modelValue.includes(h.value);
    }), v = () => {
      if (l()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((h) => {
          var w = e.accordion ? c === h : c.includes(h);
          h.init(e.accordion, w);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), le(() => n.value, () => Me().then(v)), le(() => e.modelValue, () => Me().then(v)), {
      n: Om
    };
  }
});
Qs.render = Pm;
const Br = Qs;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var lS = Br;
function Vm() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Zs), {
    index: r
  } = fn(Js);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Em = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, {
  n: Mm,
  classes: Bm
} = ee("collapse-item");
function Im(e, n) {
  var r = ie("var-icon");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [A(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [A(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [H(e.$slots, "title", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [H(e.$slots, "icon", {}, () => [re(
          r,
          {
            name: e.icon,
            transition: 250,
            class: m(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Se(A(
      "div",
      {
        class: m(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("content-wrap"))
        },
        [H(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Ha, e.show]])],
    2
    /* CLASS */
  );
}
var _s = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Em,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Vm(), t = !0, o = V(null), l = V(!1), i = V(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = Y(() => e.name), f = (y, b) => {
      s.value === void 0 || y && we(s.value) || b === i.value || (i.value = b, c(!0));
    }, c = (y) => {
      e.disabled || y || d(e.name || n.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, Me(() => {
        var {
          offsetHeight: y
        } = o.value;
        o.value.style.height = 0 + "px", On(() => {
          o.value.style.height = y + "px", t && Rt(() => {
            t && O();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, g = () => {
      if (o.value) {
        var {
          offsetHeight: y
        } = o.value;
        o.value.style.height = y + "px", On(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, O = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, P = {
      index: n,
      name: v,
      init: f
    };
    return a(P), le(i, (y) => {
      y ? h() : g();
    }), {
      n: Mm,
      start: w,
      classes: Bm,
      show: l,
      isShow: i,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: O
    };
  }
});
_s.render = Im;
const Ir = _s;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var sS = Ir, Nm = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: F(),
  onChange: F()
}, {
  n: Dm
} = ee("countdown"), To = 1e3, Oo = 60 * To, Po = 60 * Oo, Ki = 24 * Po;
function Am(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default", xo(Wl(e.timeData)), () => [be(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var xs = x({
  name: "VarCountdown",
  props: Nm,
  setup(e) {
    var n = V(0), r = V(!1), a = V(""), t = V(0), o = V(0), l = V({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), i = (c, h) => {
      var w = Object.values(h), g = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (g.forEach((y, b) => {
        c.includes(y) ? c = c.replace(y, ga("" + w[b], 2, "0")) : w[b + 1] += w[b] * O[b];
      }), c.includes("S")) {
        var P = ga("" + w[w.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", P) : c.includes("SS") ? c = c.replace("SS", P.slice(0, 2)) : c = c.replace("S", P.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / Ki), w = Math.floor(c % Ki / Po), g = Math.floor(c % Po / Oo), O = Math.floor(c % Oo / To), P = Math.floor(c % To), y = {
        days: h,
        hours: w,
        minutes: g,
        seconds: O,
        milliseconds: P
      };
      l.value = y, $(e.onChange, l.value), a.value = i(e.format, y);
    }, u = () => {
      var {
        time: c,
        onEnd: h,
        autoStart: w
      } = e, g = performance.now();
      n.value || (n.value = g + R(c));
      var O = n.value - g;
      if (O < 0 && (O = 0), o.value = O, s(O), O === 0) {
        $(h);
        return;
      }
      (w || r.value) && (t.value = On(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (o.value || R(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, Mv(t.value), u();
    };
    return le(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: l,
      n: Dm,
      start: d,
      pause: v,
      reset: f
    };
  }
});
xs.render = Am;
const Nr = xs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var uS = Nr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Va = 9e15, hr = 1e9, Vo = "0123456789abcdef", $t = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Tt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Eo = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Va,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Va,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, eu, Dn, fe = !0, jt = "[DecimalError] ", cr = jt + "Invalid argument: ", nu = jt + "Precision limit exceeded", ru = jt + "crypto unavailable", au = "[object Decimal]", Ze = Math.floor, Ye = Math.pow, zm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Lm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Rm = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, tu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, Um = 9007199254740991, Ym = $t.length - 1, Mo = Tt.length - 1, q = { toStringTag: au };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
q.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(cr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
  var n, r, a, t, o = this, l = o.d, i = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!l || !i)
    return !s || !u ? NaN : s !== u ? s : l === i ? 0 : !l ^ s < 0 ? 1 : -1;
  if (!l[0] || !i[0])
    return l[0] ? s : i[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = l.length, t = i.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (l[n] !== i[n])
      return l[n] > i[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Fm(a, uu(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ge(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Oe(u.plus(d).times(i), u.plus(s), l + 2, 1), Ge(i.d).slice(0, l) === (r = Ge(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return fe = !0, ue(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return Oe(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Oe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Gt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Aa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ue(o, l.precision = r, l.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Aa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Gt(5, e)), t = Aa(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Oe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? kn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? kn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = kn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Oe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = kn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Mo)
      return l = kn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Mo)
      return l = kn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(i / de), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), fe = !0, ue(l, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
};
q.isNaN = function() {
  return !this.s;
};
q.isNegative = q.isNeg = function() {
  return this.s < 0;
};
q.isPositive = q.isPos = function() {
  return this.s > 0;
};
q.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
q.lessThan = q.lt = function(e) {
  return this.cmp(e) < 0;
};
q.lessThanOrEqualTo = q.lte = function(e) {
  return this.cmp(e) < 1;
};
q.logarithm = q.log = function(e) {
  var n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, c = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n)
    if (r.length > 1)
      o = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      o = t !== 1;
    }
  if (fe = !1, i = v + c, l = er(u, i), a = n ? Ot(d, i + 10) : er(e, i), s = Oe(l, a, i, 1), xa(s.d, t = v, f))
    do
      if (i += 10, l = er(u, i), a = n ? Ot(d, i + 10) : er(e, i), s = Oe(l, a, i, 1), !o) {
        +Ge(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (xa(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, c = this, h = c.constructor;
  if (e = new h(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new h(NaN) : c.d ? e.s = -e.s : e = new h(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, f = e.d, i = h.precision, s = h.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new h(c);
    else
      return new h(s === 3 ? -0 : 0);
    return fe ? ue(e, i, s) : e;
  }
  if (r = Ze(e.e / de), d = Ze(c.e / de), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / de), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, l = f.length, v = a < l, v && (l = a), a = 0; a < l; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), l = u.length, a = f.length - l; a > 0; --a)
    u[l++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = Tn - 1;
      --u[t], u[a] += Tn;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Wt(u, r), fe ? ue(e, i, s) : e) : new h(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Oe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Oe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return Bo(this);
};
q.naturalLogarithm = q.ln = function() {
  return er(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, i, s) : e;
  if (o = Ze(v.e / de), a = Ze(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / de), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Tn | 0, u[t] %= Tn;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = Wt(u, a), fe ? ue(e, i, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(cr + e);
  return r.d ? (n = ou(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = jm(a, uu(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (fe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = Ge(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Oe(l, o, r + 2, 1)).times(0.5), Ge(o.d).slice(0, r) === (n = Ge(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return fe = !0, ue(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Oe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Ze(d.e / de) + Ze(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + c[a] * f[t - a - 1] + n, o[t--] = i % Tn | 0, n = i / Tn | 0;
    o[t] = (o[t] + n) % Tn | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = Wt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return mi(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (tn(e, 0, hr), n === void 0 ? n = a.rounding : tn(n, 0, 8), ue(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, !0) : (tn(e, 0, hr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e + 1, n), r = Mn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Mn(t) : (tn(e, 0, hr), n === void 0 ? n = o.rounding : tn(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Mn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, c = this, h = c.d, w = c.constructor;
  if (!h)
    return new w(c);
  if (u = r = new w(1), a = s = new w(0), n = new w(a), o = n.e = ou(h) - c.e - 1, l = o % de, n.d[0] = Ye(10, l < 0 ? de + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new w(e), !i.isInt() || i.lt(u))
      throw Error(cr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (fe = !1, i = new w(Ge(h)), d = w.precision, w.precision = o = h.length * de * 2; v = Oe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Oe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Oe(u, a, o, 1).minus(c).abs().cmp(Oe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], w.precision = d, fe = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return mi(this, 16, e, n);
};
q.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : tn(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (fe = !1, r = Oe(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return mi(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ye(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(i, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Um)
    return t = iu(s, i, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ye(+i, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + Ge(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (fe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = Bo(e.times(er(i, a + r)), a), t.d && (t = ue(t, a + 5, 1), xa(t.d, a, o) && (n = a + 10, t = ue(Bo(e.times(er(i, n + r)), n), n + 5, 1), +Ge(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = l, fe = !0, s.rounding = o, ue(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (tn(e, 1, hr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e, n), r = Mn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (tn(e, 1, hr), n === void 0 ? n = a.rounding : tn(n, 0, 8)), ue(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = Mn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = Mn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ge(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Kn(r)), o += a;
    l = e[n], a = l + "", r = de - a.length, r && (o += Kn(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function tn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(cr + e);
}
function xa(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ye(10, de - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, l;
}
function pt(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Vo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Fm(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Gt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Aa(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Oe = function() {
  function e(a, t, o) {
    var l, i = 0, s = a.length;
    for (a = a.slice(); s--; )
      l = a[s] * t + i, a[s] = l % o | 0, i = l / o | 0;
    return i && a.unshift(i), a;
  }
  function n(a, t, o, l) {
    var i, s;
    if (o != l)
      s = o > l ? 1 : -1;
    else
      for (i = s = 0; i < o; i++)
        if (a[i] != t[i]) {
          s = a[i] > t[i] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, o, l) {
    for (var i = 0; o--; )
      a[o] -= i, i = a[o] < t[o] ? 1 : 0, a[o] = i * l + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, l, i, s) {
    var u, d, v, f, c, h, w, g, O, P, y, b, E, k, z, M, B, I, C, S, N = a.constructor, K = a.s == t.s ? 1 : -1, L = a.d, U = t.d;
    if (!L || !L[0] || !U || !U[0])
      return new N(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (L ? U && L[0] == U[0] : !U) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          L && L[0] == 0 || !U ? K * 0 : K / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), C = U.length, B = L.length, O = new N(K), P = O.d = [], v = 0; U[v] == (L[v] || 0); v++)
      ;
    if (U[v] > (L[v] || 0) && d--, o == null ? (k = o = N.precision, l = N.rounding) : i ? k = o + (a.e - t.e) + 1 : k = o, k < 0)
      P.push(1), h = !0;
    else {
      if (k = k / c + 2 | 0, v = 0, C == 1) {
        for (f = 0, U = U[0], k++; (v < B || f) && k--; v++)
          z = f * s + (L[v] || 0), P[v] = z / U | 0, f = z % U | 0;
        h = f || v < B;
      } else {
        for (f = s / (U[0] + 1) | 0, f > 1 && (U = e(U, f, s), L = e(L, f, s), C = U.length, B = L.length), M = C, y = L.slice(0, C), b = y.length; b < C; )
          y[b++] = 0;
        S = U.slice(), S.unshift(0), I = U[0], U[1] >= s / 2 && ++I;
        do
          f = 0, u = n(U, y, C, b), u < 0 ? (E = y[0], C != b && (E = E * s + (y[1] || 0)), f = E / I | 0, f > 1 ? (f >= s && (f = s - 1), w = e(U, f, s), g = w.length, b = y.length, u = n(w, y, g, b), u == 1 && (f--, r(w, C < g ? S : U, g, s))) : (f == 0 && (u = f = 1), w = U.slice()), g = w.length, g < b && w.unshift(0), r(y, w, b, s), u == -1 && (b = y.length, u = n(U, y, C, b), u < 1 && (f++, r(y, C < b ? S : U, b, s))), b = y.length) : u === 0 && (f++, y = [0]), P[v++] = f, u && y[0] ? y[b++] = L[M] || 0 : (y = [L[M]], b = 1);
        while ((M++ < B || y[0] !== void 0) && k--);
        h = y[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (c == 1)
      O.e = d, eu = h;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
        v++;
      O.e = v + d * c - 1, ue(O, i ? o + O.e + 1 : o, l, h);
    }
    return O;
  };
}();
function ue(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, c = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += de, l = n, d = v[f = 0], s = d / Ye(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / de), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= de, l = o - de + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= de, l = o - de + t, s = l < 0 ? 0 : d / Ye(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ye(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / Ye(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ye(10, de - o), v[f] = l > 0 ? (d / Ye(10, t - l) % Ye(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Tn && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Tn)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return fe && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function Mn(e, n, r) {
  if (!e.isFinite())
    return su(e);
  var a, t = e.e, o = Ge(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Kn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Kn(-t - 1) + o, r && (a = r - l) > 0 && (o += Kn(a))) : t >= l ? (o += Kn(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + Kn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += Kn(a))), o;
}
function Wt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function Ot(e, n, r) {
  if (n > Ym)
    throw fe = !0, r && (e.precision = r), Error(nu);
  return ue(new e($t), n, 1, !0);
}
function kn(e, n, r) {
  if (n > Mo)
    throw Error(nu);
  return ue(new e(Tt), n, r, !0);
}
function ou(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Kn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function iu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), Zi(o.d, l) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Zi(n.d, l);
  }
  return fe = !0, o;
}
function Xi(e) {
  return e.d[e.d.length - 1] & 1;
}
function lu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Bo(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = h) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), i = l.plus(Oe(o, r, s, 1)), Ge(i.d).slice(0, s) === Ge(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ue(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && xa(l.d, s - a, c, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ue(l, f.precision = h, c, fe = !0);
      else
        return f.precision = h, l;
    }
    l = i;
  }
}
function er(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, c = 1, h = 10, w = e, g = w.d, O = w.constructor, P = O.rounding, y = O.precision;
  if (w.s < 0 || !g || !g[0] || !w.e && g[0] == 1 && g.length == 1)
    return new O(g && !g[0] ? -1 / 0 : w.s != 1 ? NaN : g ? 0 : w);
  if (n == null ? (fe = !1, d = y) : d = n, O.precision = d += h, r = Ge(g), a = r.charAt(0), Math.abs(o = w.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      w = w.times(e), r = Ge(w.d), a = r.charAt(0), c++;
    o = w.e, a > 1 ? (w = new O("0." + r), o++) : w = new O(a + "." + r.slice(1));
  } else
    return u = Ot(O, d + 2, y).times(o + ""), w = er(new O(a + "." + r.slice(1)), d - h).plus(u), O.precision = y, n == null ? ue(w, y, P, fe = !0) : w;
  for (v = w, s = l = w = Oe(w.minus(1), w.plus(1), d, 1), f = ue(w.times(w), d, 1), t = 3; ; ) {
    if (l = ue(l.times(f), d, 1), u = s.plus(Oe(l, new O(t), d, 1)), Ge(u.d).slice(0, d) === Ge(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Ot(O, d + 2, y).times(o + ""))), s = Oe(s, new O(c), d, 1), n == null)
        if (xa(s.d, d - h, P, i))
          O.precision = d += h, u = l = w = Oe(v.minus(1), v.plus(1), d, 1), f = ue(w.times(w), d, 1), t = i = 1;
        else
          return ue(s, O.precision = y, P, fe = !0);
      else
        return O.precision = y, s;
    s = u, t += 2;
  }
}
function su(e) {
  return String(e.s * e.s / 0);
}
function Io(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % de, r < 0 && (a += de), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= de; a < t; )
        e.d.push(+n.slice(a, a += de));
      n = n.slice(a), a = de - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), fe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Hm(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), tu.test(n))
      return Io(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Lm.test(n))
    r = 16, n = n.toLowerCase();
  else if (zm.test(n))
    r = 2;
  else if (Rm.test(n))
    r = 8;
  else
    throw Error(cr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = iu(a, new a(r), o, o * 2)), u = pt(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Wt(u, d), e.d = u, fe = !1, l && (e = Oe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : nr.pow(2, s))), fe = !0, e);
}
function jm(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Aa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Gt(5, r)), n = Aa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Aa(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Oe(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Oe(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return fe = !0, l.d.length = d + 1, l;
}
function Gt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function uu(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = Xi(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = Xi(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function mi(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (tn(r, 1, hr), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = su(e);
  else {
    for (d = Mn(e), l = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - l, f.d = pt(Mn(f), 10, t), f.e = f.d.length), v = pt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Oe(e, f, r, a, 0, t), v = e.d, o = e.e, u = eu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Vo.charAt(v[l]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = pt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Vo.charAt(v[l]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          d = "0" + d;
        d = "0." + d;
      } else if (++o > s)
        for (o -= s; o--; )
          d += "0";
      else
        o < s && (d = d.slice(0, o) + "." + d.slice(o));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function Zi(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Wm(e) {
  return new this(e).abs();
}
function Gm(e) {
  return new this(e).acos();
}
function qm(e) {
  return new this(e).acosh();
}
function Km(e, n) {
  return new this(e).plus(n);
}
function Xm(e) {
  return new this(e).asin();
}
function Zm(e) {
  return new this(e).asinh();
}
function Jm(e) {
  return new this(e).atan();
}
function Qm(e) {
  return new this(e).atanh();
}
function _m(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Oe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Oe(e, n, o, 1)), r;
}
function xm(e) {
  return new this(e).cbrt();
}
function ep(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function np(e, n, r) {
  return new this(e).clamp(n, r);
}
function rp(e) {
  if (!e || typeof e != "object")
    throw Error(jt + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    hr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Va,
    0,
    "toExpPos",
    0,
    Va,
    "maxE",
    0,
    Va,
    "minE",
    -Va,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Eo[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(cr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Eo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(ru);
      else
        this[r] = !1;
    else
      throw Error(cr + r + ": " + a);
  return this;
}
function ap(e) {
  return new this(e).cos();
}
function tp(e) {
  return new this(e).cosh();
}
function du(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Ji(o)) {
      u.s = o.s, fe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (l = 0, i = o; i >= 10; i /= 10)
          l++;
        fe ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Io(u, o.toString());
    } else if (s !== "string")
      throw Error(cr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), tu.test(o) ? Io(u, o) : Hm(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = rp, t.clone = du, t.isDecimal = Ji, t.abs = Wm, t.acos = Gm, t.acosh = qm, t.add = Km, t.asin = Xm, t.asinh = Zm, t.atan = Jm, t.atanh = Qm, t.atan2 = _m, t.cbrt = xm, t.ceil = ep, t.clamp = np, t.cos = ap, t.cosh = tp, t.div = op, t.exp = ip, t.floor = lp, t.hypot = sp, t.ln = up, t.log = dp, t.log10 = fp, t.log2 = vp, t.max = cp, t.min = mp, t.mod = pp, t.mul = hp, t.pow = gp, t.random = yp, t.round = bp, t.sign = wp, t.sin = Cp, t.sinh = Sp, t.sqrt = kp, t.sub = $p, t.sum = Tp, t.tan = Op, t.tanh = Pp, t.trunc = Vp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function op(e, n) {
  return new this(e).div(n);
}
function ip(e) {
  return new this(e).exp();
}
function lp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function sp() {
  var e, n, r = new this(0);
  for (fe = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return fe = !0, new this(1 / 0);
      r = n;
    }
  return fe = !0, r.sqrt();
}
function Ji(e) {
  return e instanceof nr || e && e.toStringTag === au || !1;
}
function up(e) {
  return new this(e).ln();
}
function dp(e, n) {
  return new this(e).log(n);
}
function vp(e) {
  return new this(e).log(2);
}
function fp(e) {
  return new this(e).log(10);
}
function cp() {
  return lu(this, arguments, "lt");
}
function mp() {
  return lu(this, arguments, "gt");
}
function pp(e, n) {
  return new this(e).mod(n);
}
function hp(e, n) {
  return new this(e).mul(n);
}
function gp(e, n) {
  return new this(e).pow(n);
}
function yp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : tn(e, 1, hr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(ru);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= de, a && e && (t = Ye(10, de - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= de)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
  }
  return l.e = r, l.d = i, l;
}
function bp(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function wp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Cp(e) {
  return new this(e).sin();
}
function Sp(e) {
  return new this(e).sinh();
}
function kp(e) {
  return new this(e).sqrt();
}
function $p(e, n) {
  return new this(e).sub(n);
}
function Tp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Op(e) {
  return new this(e).tan();
}
function Pp(e) {
  return new this(e).tanh();
}
function Vp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var nr = q.constructor = du(Eo);
$t = new nr($t);
Tt = new nr(Tt);
var Ep = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disableIncrement: {
    type: Boolean,
    default: !1
  },
  disableDecrement: {
    type: Boolean,
    default: !1
  },
  disableInput: {
    type: Boolean,
    default: !1
  },
  lazyChange: {
    type: Boolean,
    default: !1
  },
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: {
    type: Array
  },
  onBeforeChange: F(),
  onChange: F(),
  onIncrement: F(),
  onDecrement: F(),
  "onUpdate:modelValue": F()
}, {
  n: Mp,
  classes: Bp
} = ee("counter"), Qi = 100, _i = 600, Ip = ["inputmode", "readonly", "disabled"];
function Np(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Ve({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: W({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.formDisabled || e.readonly || e.formReadonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), Se(A(
        "input",
        {
          class: m(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: W({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.inputValue = o),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        Ip
      ), [[cv, e.inputValue]]), Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: W({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.formDisabled || e.formReadonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
      /* FULL_PROPS */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var vu = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Ae
  },
  inheritAttrs: !1,
  props: Ep,
  setup(e) {
    var n = V(""), r, a, t, o, {
      bindForm: l,
      form: i
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), {
      readonly: f,
      disabled: c
    } = i ?? {}, h = () => d(e.rules, e.modelValue), w = (U) => {
      Me(() => {
        var {
          validateTrigger: Q,
          rules: G,
          modelValue: X
        } = e;
        u(Q, U, G, X);
      });
    }, g = () => {
      var {
        min: U
      } = e;
      $(e["onUpdate:modelValue"], U != null ? R(U) : 0), v();
    }, O = {
      reset: g,
      validate: h,
      resetValidation: v
    }, P = Y(() => {
      var {
        max: U,
        modelValue: Q
      } = e;
      return U != null && R(Q) >= R(U);
    }), y = Y(() => {
      var {
        min: U,
        modelValue: Q
      } = e;
      return U != null && R(Q) <= R(U);
    }), b = (U) => {
      var {
        decimalLength: Q,
        max: G,
        min: X
      } = e, D = R(U);
      return G != null && D > R(G) && (D = R(G)), X != null && D < R(X) && (D = R(X)), U = String(D), Q != null && (U = D.toFixed(R(Q))), U;
    }, E = (U) => {
      var {
        lazyChange: Q,
        onBeforeChange: G
      } = e, {
        value: X
      } = U.target, D = b(X);
      Q ? $(G, R(D), L) : K(D), w("onInputChange");
    }, k = () => {
      var {
        disabled: U,
        readonly: Q,
        disableDecrement: G,
        decrementButton: X,
        lazyChange: D,
        step: Z,
        modelValue: j,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || U || Q || G || !X) && !y.value) {
        var oe = new nr(R(j)).minus(new nr(R(Z))).toString(), ge = b(oe), pe = R(ge);
        $(J, pe), D ? $(ae, pe, L) : (K(ge), w("onDecrement"));
      }
    }, z = () => {
      var {
        disabled: U,
        readonly: Q,
        disableIncrement: G,
        incrementButton: X,
        lazyChange: D,
        step: Z,
        modelValue: j,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || U || Q || G || !X) && !P.value) {
        var oe = new nr(R(j)).plus(new nr(R(Z))).toString(), ge = b(oe), pe = R(ge);
        $(J, pe), D ? $(ae, pe, L) : (K(ge), w("onIncrement"));
      }
    }, M = () => {
      var {
        press: U,
        lazyChange: Q
      } = e;
      !U || Q || (o = window.setTimeout(() => {
        N();
      }, _i));
    }, B = () => {
      var {
        press: U,
        lazyChange: Q
      } = e;
      !U || Q || (t = window.setTimeout(() => {
        S();
      }, _i));
    }, I = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, C = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, S = () => {
      r = window.setTimeout(() => {
        z(), S();
      }, Qi);
    }, N = () => {
      a = window.setTimeout(() => {
        k(), N();
      }, Qi);
    }, K = (U) => {
      n.value = U;
      var Q = R(U);
      $(e["onUpdate:modelValue"], Q);
    }, L = (U) => {
      K(b(String(U))), w("onLazyChange");
    };
    return $(l, O), le(() => e.modelValue, (U) => {
      K(b(String(U))), $(e.onChange, R(U));
    }), K(b(String(e.modelValue))), {
      n: Mp,
      classes: Bp,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: P,
      isMin: y,
      validate: h,
      reset: g,
      resetValidation: v,
      handleChange: E,
      decrement: k,
      increment: z,
      pressDecrement: M,
      pressIncrement: B,
      releaseDecrement: I,
      releaseIncrement: C,
      toSizeUnit: he,
      toNumber: R
    };
  }
});
vu.render = Np;
const Dr = vu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var dS = Dr, fu = 60, cu = fu * 60, mu = cu * 24, Dp = mu * 7, za = 1e3, eo = fu * za, xi = cu * za, Ap = mu * za, zp = Dp * za, pi = "millisecond", Ea = "second", Ma = "minute", Ba = "hour", Xn = "day", ht = "week", Sn = "month", pu = "quarter", Zn = "year", Ia = "date", Lp = "YYYY-MM-DDTHH:mm:ssZ", el = "Invalid Date", Rp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Up = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Yp = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var No = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Fp = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + No(t, 2, "0") + ":" + No(o, 2, "0");
}, Hp = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, jp = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Wp = function(n) {
  var r = {
    M: Sn,
    y: Zn,
    w: ht,
    d: Xn,
    D: Ia,
    h: Ba,
    m: Ma,
    s: Ea,
    ms: pi,
    Q: pu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Gp = function(n) {
  return n === void 0;
};
const qp = {
  s: No,
  z: Fp,
  m: Hp,
  a: jp,
  p: Wp,
  u: Gp
};
var Xa = "en", Ar = {};
Ar[Xa] = Yp;
var hi = function(n) {
  return n instanceof qt;
}, Pt = function e(n, r, a) {
  var t;
  if (!n)
    return Xa;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Ar[o] && (t = o), r && (Ar[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Ar[i] = n, t = i;
  }
  return !a && t && (Xa = t), t || !a && Xa;
}, te = function(n, r) {
  if (hi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new qt(a);
}, Kp = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = qp;
Te.l = Pt;
Te.i = hi;
Te.w = Kp;
var Xp = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Rp);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, qt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Pt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Xp(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== el;
  }, n.isSame = function(a, t) {
    var o = te(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return te(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < te(a);
  }, n.$g = function(a, t, o) {
    return Te.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Te.u(t) ? !0 : t, i = Te.p(a), s = function(O, P) {
      var y = Te.w(o.$u ? Date.UTC(o.$y, P, O) : new Date(o.$y, P, O), o);
      return l ? y : y.endOf(Xn);
    }, u = function(O, P) {
      var y = [0, 0, 0, 0], b = [23, 59, 59, 999];
      return Te.w(o.toDate()[O].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? y : b).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case Zn:
        return l ? s(1, 0) : s(31, 11);
      case Sn:
        return l ? s(1, v) : s(0, v + 1);
      case ht: {
        var h = this.$locale().weekStart || 0, w = (d < h ? d + 7 : d) - h;
        return s(l ? f - w : f + (6 - w), v);
      }
      case Xn:
      case Ia:
        return u(c + "Hours", 0);
      case Ba:
        return u(c + "Minutes", 1);
      case Ma:
        return u(c + "Seconds", 2);
      case Ea:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Te.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Xn] = i + "Date", o[Ia] = i + "Date", o[Sn] = i + "Month", o[Zn] = i + "FullYear", o[Ba] = i + "Hours", o[Ma] = i + "Minutes", o[Ea] = i + "Seconds", o[pi] = i + "Milliseconds", o)[l], u = l === Xn ? this.$D + (t - this.$W) : t;
    if (l === Sn || l === Zn) {
      var d = this.clone().set(Ia, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ia, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Te.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Te.p(t), s = function(f) {
      var c = te(o);
      return Te.w(c.date(c.date() + Math.round(f * a)), o);
    };
    if (i === Sn)
      return this.set(Sn, this.$M + a);
    if (i === Zn)
      return this.set(Zn, this.$y + a);
    if (i === Xn)
      return s(1);
    if (i === ht)
      return s(7);
    var u = (l = {}, l[Ma] = eo, l[Ba] = xi, l[Ea] = za, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || el;
    var l = a || Lp, i = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, h = function(y, b, E, k) {
      return y && (y[b] || y(t, l)) || E[b].slice(0, k);
    }, w = function(y) {
      return Te.s(s % 12 || 12, y, "0");
    }, g = c || function(P, y, b) {
      var E = P < 12 ? "AM" : "PM";
      return b ? E.toLowerCase() : E;
    }, O = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Te.s(d + 1, 2, "0"),
      MMM: h(o.monthsShort, d, f, 3),
      MMMM: h(f, d),
      D: this.$D,
      DD: Te.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(o.weekdaysMin, this.$W, v, 2),
      ddd: h(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Te.s(s, 2, "0"),
      h: w(1),
      hh: w(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(Up, function(P, y) {
      return y || O[P] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * eo, d = this - s, v = Te.m(this, s);
    return v = (l = {}, l[Zn] = v / 12, l[Sn] = v, l[pu] = v / 3, l[ht] = (d - u) / zp, l[Xn] = (d - u) / Ap, l[Ba] = d / xi, l[Ma] = d / eo, l[Ea] = d / za, l)[i] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return Ar[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Pt(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Te.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), hu = qt.prototype;
te.prototype = hu;
[["$ms", pi], ["$s", Ea], ["$m", Ma], ["$H", Ba], ["$W", Xn], ["$M", Sn], ["$y", Zn], ["$D", Ia]].forEach(function(e) {
  hu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, qt, te), e.$i = !0), te;
};
te.locale = Pt;
te.isDayjs = hi;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Ar[Xa];
te.Ls = Ar;
te.p = {};
const gu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, yu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Zp(e) {
  return ["date", "month"].includes(e);
}
var gt = [{
  index: "01"
}, {
  index: "02"
}, {
  index: "03"
}, {
  index: "04"
}, {
  index: "05"
}, {
  index: "06"
}, {
  index: "07"
}, {
  index: "08"
}, {
  index: "09"
}, {
  index: "10"
}, {
  index: "11"
}, {
  index: "12"
}], Ka = [{
  index: "0"
}, {
  index: "1"
}, {
  index: "2"
}, {
  index: "3"
}, {
  index: "4"
}, {
  index: "5"
}, {
  index: "6"
}], Jp = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Zp
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  range: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Qp
} = ee("picker-header");
function _p(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [re(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ve(() => [re(r, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), A(
      "div",
      {
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [re(
        De,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), T(
            "div",
            {
              key: e.showDate
            },
            ne(e.showDate),
            1
            /* TEXT */
          ))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    ), re(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ve(() => [re(r, {
          name: "chevron-right"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    )],
    2
    /* CLASS */
  );
}
var bu = x({
  name: "PanelHeader",
  components: {
    VarButton: en,
    VarIcon: $e
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = V(!1), t = V(0), o = Y(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return R(v) + t.value;
      var f = (i = je.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return je.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: Qp,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
bu.render = _p;
const wu = bu;
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Do.apply(this, arguments);
}
te.extend(gu);
te.extend(yu);
var {
  n: dt,
  classes: xp
} = ee("month-picker"), {
  n: vt
} = ee("date-picker");
function eh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [re(
        r,
        {
          ref: "headerEl",
          type: "month",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickYear,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), re(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), T("ul", {
            key: e.panelKey
          }, [(p(!0), T(
            Pe,
            null,
            Ie(e.MONTH_LIST, (t) => (p(), T("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Do({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [be(
                  ne(e.getMonthAbbr(t.index)),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1040,
              ["onClick"]
            )]))),
            128
            /* KEYED_FRAGMENT */
          ))]))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Cu = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: wu
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t] = e.current.split("-"), o = V(!1), l = V(0), i = V(null), s = Ee({
      left: !1,
      right: !1
    }), u = Y(() => e.choose.chooseYear === e.preview.previewYear), d = Y(() => e.preview.previewYear === a), v = (P) => {
      var y, b;
      return (y = (b = je.value.datePickerMonthDict) == null ? void 0 : b[P].abbr) != null ? y : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: y
        },
        componentProps: {
          min: b,
          max: E
        }
      } = e, k = !0, z = !0, M = y + "-" + P;
      return E && (k = te(M).isSameOrBefore(te(E), "month")), b && (z = te(M).isSameOrAfter(te(b), "month")), k && z;
    }, c = (P) => {
      var {
        choose: {
          chooseMonths: y,
          chooseDays: b,
          chooseRangeMonth: E
        },
        componentProps: {
          type: k,
          range: z
        }
      } = e;
      if (z) {
        if (!E.length)
          return !1;
        var M = te(P).isSameOrBefore(te(E[1]), "month"), B = te(P).isSameOrAfter(te(E[0]), "month");
        return M && B;
      }
      return k === "month" ? y.includes(P) : b.some((I) => I.includes(P));
    }, h = (P) => {
      var {
        choose: {
          chooseMonth: y
        },
        preview: {
          previewYear: b
        },
        componentProps: {
          allowedDates: E,
          color: k,
          multiple: z,
          range: M
        }
      } = e, B = b + "-" + P, I = () => M || z ? c(B) : (y == null ? void 0 : y.index) === P && u.value, C = () => f(P) ? E ? !E(B) : !1 : !0, S = C(), N = () => S ? !0 : M || z ? !c(B) : !u.value || (y == null ? void 0 : y.index) !== P, K = () => d.value && t === P && e.componentProps.showCurrent ? (M || z || u.value) && S ? !0 : M || z ? !c(B) : u.value ? (y == null ? void 0 : y.index) !== t : !0 : !1, L = () => S ? "" : K() ? k ?? "" : I() ? "" : vt() + "-color-cover", U = L().startsWith(vt());
      return {
        outline: K(),
        text: N(),
        color: N() ? "" : k,
        textColor: U ? "" : L(),
        [vt() + "-color-cover"]: U,
        class: xp(dt("button"), [S, dt("button--disabled")])
      };
    }, w = (P, y) => {
      var b = y.currentTarget;
      b.classList.contains(dt("button--disabled")) || r("choose-month", P);
    }, g = (P) => {
      o.value = P === "prev", l.value += P === "prev" ? -1 : 1, r("check-preview", "year", P);
    }, O = (P) => {
      i.value.checkDate(P);
    };
    return le(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: y,
          max: b
        }
      } = e;
      b && (s.right = !te("" + (R(P) + 1)).isSameOrBefore(te(b), "year")), y && (s.left = !te("" + (R(P) - 1)).isSameOrAfter(te(y), "year"));
    }, {
      immediate: !0
    }), {
      n: dt,
      nDate: vt,
      pack: je,
      MONTH_LIST: gt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: O,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: w,
      checkDate: g
    };
  }
});
Cu.render = eh;
const nh = Cu;
var {
  n: nl,
  classes: rh
} = ee("year-picker"), ah = ["onClick"];
function th(e, n) {
  return p(), T(
    "ul",
    {
      class: m(e.n())
    },
    [(p(!0), T(
      Pe,
      null,
      Ie(e.yearList, (r) => (p(), T(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: W({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        ah
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Su = x({
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = Y(() => {
      var o = [], {
        preview: l,
        componentProps: {
          max: i,
          min: s
        }
      } = e;
      if (!l)
        return o;
      var u = [R(l) + 100, R(l) - 100];
      if (i) {
        var d = te(i).format("YYYY-MM-D"), v = R(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = te(s).format("YYYY-MM-D"), c = R(f.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var h = u[0]; h >= u[1]; h--)
        o.push(h);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return ze(() => {
      var o = document.querySelector("." + nl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: nl,
      classes: rh,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
Su.render = th;
const oh = Su;
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
te.extend(gu);
te.extend(yu);
var {
  n: Pa,
  classes: ih
} = ee("day-picker"), {
  n: ft
} = ee("date-picker");
function lh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [re(
        r,
        {
          ref: "headerEl",
          type: "day",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickMonth,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), re(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), T("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(p(!0), T(
              Pe,
              null,
              Ie(e.sortWeekList, (t) => (p(), T(
                "li",
                {
                  key: t.index
                },
                ne(e.getDayAbbr(t.index)),
                1
                /* TEXT */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          ), A(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(p(!0), T(
              Pe,
              null,
              Ie(e.days, (t, o) => (p(), T("li", {
                key: o
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Ao({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [be(
                    ne(e.filterDay(t)),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                },
                1040,
                ["onClick"]
              )]))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          )]))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var ku = x({
  name: "DayPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: wu
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t, o] = e.current.split("-"), l = V([]), i = V(!1), s = V(0), u = V(null), d = Ee({
      left: !1,
      right: !1
    }), v = Y(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = Y(() => {
      var M;
      return e.choose.chooseYear === e.preview.previewYear && ((M = e.choose.chooseMonth) == null ? void 0 : M.index) === e.preview.previewMonth.index;
    }), c = Y(() => {
      var M = Ka.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return M === -1 || M === 0 ? Ka : Ka.slice(M).concat(Ka.slice(0, M));
    }), h = (M) => {
      var B, I;
      return (B = (I = je.value.datePickerWeekDict) == null ? void 0 : I[M].abbr) != null ? B : "";
    }, w = (M) => M > 0 ? M : "", g = () => {
      var {
        preview: {
          previewMonth: M,
          previewYear: B
        }
      } = e, I = te(B + "-" + M.index).daysInMonth(), C = te(B + "-" + M.index + "-01").day(), S = c.value.findIndex((N) => N.index === "" + C);
      l.value = [...Array(S).fill(-1), ...Array.from(Array(I + 1).keys())].filter((N) => N);
    }, O = () => {
      var {
        preview: {
          previewYear: M,
          previewMonth: B
        },
        componentProps: {
          max: I,
          min: C
        }
      } = e;
      if (I) {
        var S = M + "-" + (R(B.index) + 1);
        d.right = !te(S).isSameOrBefore(te(I), "month");
      }
      if (C) {
        var N = M + "-" + (R(B.index) - 1);
        d.left = !te(N).isSameOrAfter(te(C), "month");
      }
    }, P = (M) => {
      var {
        preview: {
          previewYear: B,
          previewMonth: I
        },
        componentProps: {
          min: C,
          max: S
        }
      } = e, N = !0, K = !0, L = B + "-" + I.index + "-" + M;
      return S && (N = te(L).isSameOrBefore(te(S), "day")), C && (K = te(L).isSameOrAfter(te(C), "day")), N && K;
    }, y = (M) => {
      var {
        choose: {
          chooseDays: B,
          chooseRangeDay: I
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!I.length)
          return !1;
        var S = te(M).isSameOrBefore(te(I[1]), "day"), N = te(M).isSameOrAfter(te(I[0]), "day");
        return S && N;
      }
      return B.includes(M);
    }, b = (M) => {
      if (M < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Pa("button")
        };
      var {
        choose: {
          chooseDay: B
        },
        preview: {
          previewYear: I,
          previewMonth: C
        },
        componentProps: {
          allowedDates: S,
          color: N,
          multiple: K,
          range: L
        }
      } = e, U = I + "-" + C.index + "-" + M, Q = () => L || K ? y(U) : R(B) === M && f.value, G = () => P(M) ? S ? !S(U) : !1 : !0, X = G(), D = () => X ? !0 : L || K ? !y(U) : !f.value || R(B) !== M, Z = () => v.value && R(o) === M && e.componentProps.showCurrent ? (L || K || f.value) && X ? !0 : L || K ? !y(U) : f.value ? B !== o : !0 : !1, j = () => X ? "" : Z() ? N ?? "" : Q() ? "" : ft() + "-color-cover", J = j().startsWith(ft());
      return {
        text: D(),
        outline: Z(),
        textColor: J ? "" : j(),
        [ft() + "-color-cover"]: J,
        class: ih(Pa("button"), Pa("button--usable"), [X, Pa("button--disabled")])
      };
    }, E = (M) => {
      i.value = M === "prev", s.value += M === "prev" ? -1 : 1, r("check-preview", "month", M);
    }, k = (M, B) => {
      var I = B.currentTarget;
      I.classList.contains(Pa("button--disabled")) || r("choose-day", M);
    }, z = (M) => {
      u.value.checkDate(M);
    };
    return ze(() => {
      g(), O();
    }), le(() => e.preview, () => {
      g(), O();
    }), {
      n: Pa,
      nDate: ft,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: z,
      filterDay: w,
      getDayAbbr: h,
      checkDate: E,
      chooseDay: k,
      buttonProps: b
    };
  }
});
ku.render = lh;
const sh = ku;
var {
  n: uh,
  classes: dh
} = ee("date-picker");
function vh(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: W({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [H(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          ne(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [re(
          De,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), T("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? H(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? H(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : H(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), T("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? H(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? H(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : H(e.$slots, "date", xo(Ve({
                key: 2
              }, e.slotProps)), () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )])]))];
            }),
            _: 3
            /* FORWARDED */
          },
          8,
          ["name"]
        )],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: m(e.n("body")),
        onTouchstart: n[2] || (n[2] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[3] || (n[3] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[4] || (n[4] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [re(
        De,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), me(
            r,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (p(), me(
            a,
            {
              key: 1,
              ref: "monthPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "click-year": () => e.clickEl("year"),
              "component-props": e.componentProps,
              onChooseMonth: e.getChooseMonth,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"]
          )) : e.getPanelType === "date" ? (p(), me(
            t,
            {
              key: 2,
              ref: "dayPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "component-props": e.componentProps,
              "click-month": () => e.clickEl("month"),
              onChooseDay: e.getChooseDay,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"]
          )) : _("v-if", !0)]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    )],
    2
    /* CLASS */
  );
}
var $u = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: nh,
    YearPickerPanel: oh,
    DayPickerPanel: sh
  },
  props: Jp,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [l, i] = o.split("-"), s = gt.find((se) => se.index === i), u = V(!1), d = V(!1), v = V(!0), f = V(), c = V(), h = V(), w = V(s), g = V(l), O = V(!1), P = V([]), y = V([]), b = V([]), E = V([]), k = V(null), z = V(null), M = Ee({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), B = Y(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: h.value,
      chooseMonths: P.value,
      chooseDays: y.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: E.value
    })), I = Y(() => ({
      previewMonth: w.value,
      previewYear: g.value
    })), C = Y(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return b.value.length ? b.value[0] + " ~ " + b.value[1] : "";
      var ce = "";
      if (f.value) {
        var Ce, ke;
        ce = (Ce = (ke = je.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + P.value.length + je.value.datePickerSelected : ce;
    }), S = Y(() => {
      var se, ye, ce, Ce, {
        multiple: ke,
        range: Re
      } = e;
      if (Re) {
        var Je = E.value.map((Qt) => te(Qt).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (ke)
        return "" + y.value.length + je.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var mn = te(c.value + "-" + f.value.index + "-" + h.value).day(), Oa = Ka.find((Qt) => Qt.index === "" + mn), Pi = (se = (ye = je.value.datePickerWeekDict) == null ? void 0 : ye[Oa.index].name) != null ? se : "", uv = (ce = (Ce = je.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", dv = ga(h.value, 2, "0");
      return je.value.lang === "zh-CN" ? f.value.index + "-" + dv + " " + Pi.slice(0, 3) : Pi.slice(0, 3) + ", " + uv.slice(0, 3) + " " + h.value;
    }), N = Y(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), K = Y(() => !e.touchable || ["", "year"].includes(N.value)), L = Y(() => {
      var se, ye, ce, Ce, ke = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), Re = h.value ? ga(h.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = c.value) != null ? ye : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: Re
      };
    }), U = Y(() => B.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), Q = Y(() => c.value === g.value), G = Y(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === w.value.index;
    }), X = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, D = (se) => {
      if (!K.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0];
        n = ye, r = ce;
      }
    }, Z = (se, ye) => se >= ye && se > 20 ? "x" : "y", j = (se) => {
      if (!K.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0], Ce = ye - n, ke = ce - r;
        t = Z(Math.abs(Ce), Math.abs(ke)), a = Ce > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(K.value || t !== "x")) {
        var se = N.value === "month" ? k : z;
        Rt(() => {
          se.value.forwardRef(a), Oi();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? b : E;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), ke = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
      }
    }, oe = (se, ye) => {
      var ce = ye === "month" ? P : y, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = ce.value.map((Je) => te(Je).format(Ce)), Re = ke.findIndex((Je) => Je === se);
      Re === -1 ? ke.push(se) : ke.splice(Re, 1), $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
    }, ge = (se, ye) => !c.value || !f.value ? !1 : Q.value ? se === "month" ? ye.index < f.value.index : G.value ? ye < R(h.value) : f.value.index > w.value.index : c.value > g.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Ce,
        onChange: ke,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || ye)) {
        O.value = ge("day", se);
        var Je = g.value + "-" + w.value.index + "-" + se, mn = te(Je).format("YYYY-MM-DD");
        ce ? ae(mn, "day") : Ce ? oe(mn, "day") : ($(Re, mn), $(ke, mn));
      }
    }, He = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Ce,
        multiple: ke,
        onChange: Re,
        onPreview: Je,
        "onUpdate:modelValue": mn
      } = e;
      if (O.value = ge("month", se), ye === "month" && !ce) {
        var Oa = g.value + "-" + se.index;
        Ce ? ae(Oa, "month") : ke ? oe(Oa, "month") : ($(mn, Oa), $(Re, Oa));
      } else
        w.value = se, $(Je, R(g.value), R(w.value.index));
      d.value = !1;
    }, nn = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, $(e.onPreview, R(g.value), R(w.value.index));
    }, sn = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (R(g.value) + ce);
      else {
        var Ce = R(w.value.index) + ce;
        Ce < 1 && (g.value = "" + (R(g.value) - 1), Ce = 12), Ce > 12 && (g.value = "" + (R(g.value) + 1), Ce = 1), w.value = gt.find((ke) => R(ke.index) === Ce);
      }
      $(e.onPreview, R(g.value), R(w.value.index));
    }, Le = () => (e.multiple || e.range) && !we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, cn = (se) => we(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, iv = (se, ye) => {
      var ce = ye === "month" ? b : E, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((mn) => te(mn).format(Ce)).slice(0, 2), Re = ce.value.some((mn) => cn(mn));
      if (!Re) {
        ce.value = ke;
        var Je = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Je && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, lv = (se, ye) => {
      var ce = ye === "month" ? P : y, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Re) => te(Re).format(Ce))));
      ce.value = ke.filter((Re) => Re !== "Invalid Date");
    }, sv = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!cn(ye)) {
        var [ce, Ce, ke] = ye.split("-"), Re = gt.find((Je) => Je.index === Ce);
        f.value = Re, c.value = ce, h.value = ke, w.value = Re, g.value = ce;
      }
    }, Oi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Le() || cn(se) || !se))
        if (e.range) {
          if (!we(se))
            return;
          v.value = se.length !== 1, iv(se, e.type);
        } else if (e.multiple) {
          if (!we(se))
            return;
          lv(se, e.type);
        } else
          sv(se);
    }, {
      immediate: !0
    }), le(N, Oi), {
      n: uh,
      classes: dh,
      monthPanelEl: k,
      dayPanelEl: z,
      reverse: O,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: h,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: S,
      getPanelType: N,
      getChoose: B,
      getPreview: I,
      componentProps: M,
      slotProps: L,
      formatRange: U,
      clickEl: X,
      handleTouchstart: D,
      handleTouchmove: j,
      handleTouchend: J,
      getChooseDay: pe,
      getChooseMonth: He,
      getChooseYear: nn,
      checkPreview: sn
    };
  }
});
$u.render = vh;
const zr = $u;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var vS = zr;
function zo() {
  return zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, zo.apply(this, arguments);
}
function fh(e) {
  return ["left", "center", "right"].includes(e);
}
var ch = zo({
  show: {
    type: Boolean,
    default: !1
  },
  width: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: fh
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  },
  onBeforeClose: F(),
  onConfirm: F(),
  onCancel: F(),
  "onUpdate:show": F()
}, Xe(tt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lo.apply(this, arguments);
}
var {
  n: mh,
  classes: ph
} = ee("dialog");
function hh(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
  return p(), me(
    a,
    {
      class: m(e.n("popup")),
      "var-dialog-cover": "",
      show: e.popupShow,
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.popupCloseOnClickOverlay,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange,
      onClickOverlay: e.handleClickOverlay
    },
    {
      default: ve(() => [A(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Lo({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("title"))
          },
          [H(e.$slots, "title", {}, () => [be(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: m(e.n("message")),
            style: W({
              textAlign: e.messageAlign
            })
          },
          [H(e.$slots, "default", {}, () => [be(
            ne(e.message),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (p(), me(
            r,
            {
              key: 0,
              class: m(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : _("v-if", !0), e.confirmButton ? (p(), me(
            r,
            {
              key: 1,
              class: m(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : _("v-if", !0)],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
var Tu = x({
  name: "VarDialog",
  components: {
    VarPopup: hn,
    VarButton: en
  },
  inheritAttrs: !1,
  props: ch,
  setup(e) {
    var n = V(!1), r = V(!1), a = () => $(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if ($(s), !!i) {
        if (u != null) {
          u("close", a);
          return;
        }
        $(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if ($(s), i != null) {
        i("confirm", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if ($(s), i != null) {
        i("cancel", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: mh,
      classes: ph,
      pack: je,
      dt: zt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: he
    };
  }
});
Tu.render = hh;
const lr = Tu;
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Vt.apply(this, arguments);
}
var Qn, Et = {};
function gh(e) {
  return e === void 0 && (e = {}), qe(e) ? Vt({}, Et, {
    message: e
  }) : Vt({}, Et, e);
}
function ba(e) {
  return ai() ? new Promise((n) => {
    ba.close();
    var r = gh(e), a = Ee(r);
    a.teleport = "body", Qn = a;
    var {
      unmountInstance: t
    } = Wa(lr, a, {
      onConfirm: () => {
        $(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        $(a.onCancel), n("cancel");
      },
      onClose: () => {
        $(a.onClose), n("close");
      },
      onClosed: () => {
        $(a.onClosed), t(), Qn === a && (Qn = null);
      },
      onRouteChange: () => {
        t(), Qn === a && (Qn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function yh(e) {
  Et = e;
}
function bh() {
  Et = {};
}
function wh() {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ba, {
  setDefaultOptions: yh,
  resetDefaultOptions: bh,
  close: wh
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
ba.install = function(e) {
  e.component(lr.name, lr);
};
ba.Component = lr;
var fS = lr, Ch = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  hairline: {
    type: Boolean,
    default: !1
  }
};
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Na.apply(this, arguments);
}
var {
  n: Sh,
  classes: kh
} = ee("divider");
function $h(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: W(e.style)
    },
    [H(e.$slots, "default", {}, () => [e.description ? (p(), T(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Ou = x({
  name: "VarDivider",
  props: Ch,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ee({
      withText: !1
    }), t = Y(() => io(e.inset) ? e.inset : !0), o = Y(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (io(i) || i === 0)
        return Na({}, d);
      var v = R(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Na({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : Na({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ze(() => {
      l();
    }), Dt(() => {
      l();
    }), Na({
      n: Sh,
      classes: kh
    }, mv(a), {
      style: o,
      isInset: t
    });
  }
});
Ou.render = $h;
const Lr = Ou;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var cS = Lr, Th = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Th[n];
  });
}
var An = "top", mr = "bottom", wa = "right", sr = "left", Kt = "auto", Xt = [An, mr, wa, sr], Zt = "start", et = "end", Oh = "clippingParents", Pu = "viewport", Ga = "popper", Ph = "reference", rl = /* @__PURE__ */ Xt.reduce(function(e, n) {
  return e.concat([n + "-" + Zt, n + "-" + et]);
}, []), Vu = /* @__PURE__ */ [].concat(Xt, [Kt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Zt, n + "-" + et]);
}, []), Vh = "beforeRead", Eh = "read", Mh = "afterRead", Bh = "beforeMain", Ih = "main", Nh = "afterMain", Dh = "beforeWrite", Ah = "write", zh = "afterWrite", Ro = [Vh, Eh, Mh, Bh, Ih, Nh, Dh, Ah, zh];
function zn(e) {
  return e.split("-")[0];
}
var Lh = {
  start: "end",
  end: "start"
};
function al(e) {
  return e.replace(/start|end/g, function(n) {
    return Lh[n];
  });
}
function Cn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ca(e) {
  var n = Cn(e).Element;
  return e instanceof n || e instanceof Element;
}
function gn(e) {
  var n = Cn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function gi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function gr(e) {
  return ((Ca(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Za = Math.max, tl = Math.min, La = Math.round;
function Uo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Eu() {
  return !/^((?!chrome|android).)*safari/i.test(Uo());
}
function Ra(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && gn(e) && (t = e.offsetWidth > 0 && La(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && La(a.height) / e.offsetHeight || 1);
  var l = Ca(e) ? Cn(e) : window, i = l.visualViewport, s = !Eu() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
  return {
    width: v,
    height: f,
    top: d,
    right: u + v,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function yi(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function bi(e) {
  return Ra(gr(e)).left + yi(e).scrollLeft;
}
function Rh(e, n) {
  var r = Cn(e), a = gr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = Eu();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + bi(e),
    y: s
  };
}
function Pn(e) {
  return Cn(e).getComputedStyle(e);
}
function Uh(e) {
  var n, r = gr(e), a = yi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = Za(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = Za(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + bi(e), s = -a.scrollTop;
  return Pn(t || r).direction === "rtl" && (i += Za(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  return Bn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (gi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gr(e)
  );
}
function wi(e) {
  var n = Pn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Mu(e) {
  return ["html", "body", "#document"].indexOf(Bn(e)) >= 0 ? e.ownerDocument.body : gn(e) && wi(e) ? e : Mu(Jt(e));
}
function Ja(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Mu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), l = t ? [o].concat(o.visualViewport || [], wi(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Ja(Jt(l)))
  );
}
function Yh(e) {
  return ["table", "td", "th"].indexOf(Bn(e)) >= 0;
}
function ol(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Pn(e).position === "fixed" ? null : e.offsetParent;
}
function Fh(e) {
  var n = /firefox/i.test(Uo()), r = /Trident/i.test(Uo());
  if (r && gn(e)) {
    var a = Pn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Jt(e);
  for (gi(t) && (t = t.host); gn(t) && ["html", "body"].indexOf(Bn(t)) < 0; ) {
    var o = Pn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ci(e) {
  for (var n = Cn(e), r = ol(e); r && Yh(r) && Pn(r).position === "static"; )
    r = ol(r);
  return r && (Bn(r) === "html" || Bn(r) === "body" && Pn(r).position === "static") ? n : r || Fh(e) || n;
}
function Hh(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && gi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Yo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function jh(e, n) {
  var r = Ra(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function il(e, n, r) {
  return n === Pu ? Yo(Rh(e, r)) : Ca(n) ? jh(n, r) : Yo(Uh(gr(e)));
}
function Wh(e) {
  var n = Ja(Jt(e)), r = ["absolute", "fixed"].indexOf(Pn(e).position) >= 0, a = r && gn(e) ? Ci(e) : e;
  return Ca(a) ? n.filter(function(t) {
    return Ca(t) && Hh(t, a) && Bn(t) !== "body";
  }) : [];
}
function Gh(e, n, r, a) {
  var t = n === "clippingParents" ? Wh(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = il(e, u, a);
    return s.top = Za(d.top, s.top), s.right = tl(d.right, s.right), s.bottom = tl(d.bottom, s.bottom), s.left = Za(d.left, s.left), s;
  }, il(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function nt(e) {
  return e.split("-")[1];
}
function qh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? zn(a) : null, o = a ? nt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case An:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case mr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case wa:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case sr:
      s = {
        x: n.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? qh(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Zt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case et:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Kh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Xh(e) {
  return Object.assign({}, Kh(), e);
}
function Zh(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Iu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Oh : i, u = r.rootBoundary, d = u === void 0 ? Pu : u, v = r.elementContext, f = v === void 0 ? Ga : v, c = r.altBoundary, h = c === void 0 ? !1 : c, w = r.padding, g = w === void 0 ? 0 : w, O = Xh(typeof g != "number" ? g : Zh(g, Xt)), P = f === Ga ? Ph : Ga, y = e.rects.popper, b = e.elements[h ? P : f], E = Gh(Ca(b) ? b : b.contextElement || gr(e.elements.popper), s, d, l), k = Ra(e.elements.reference), z = Bu({
    reference: k,
    element: y,
    strategy: "absolute",
    placement: t
  }), M = Yo(Object.assign({}, y, z)), B = f === Ga ? M : k, I = {
    top: E.top - B.top + O.top,
    bottom: B.bottom - E.bottom + O.bottom,
    left: E.left - B.left + O.left,
    right: B.right - E.right + O.right
  }, C = e.modifiersData.offset;
  if (f === Ga && C) {
    var S = C[t];
    Object.keys(I).forEach(function(N) {
      var K = [wa, mr].indexOf(N) >= 0 ? 1 : -1, L = [An, mr].indexOf(N) >= 0 ? "y" : "x";
      I[N] += S[L] * K;
    });
  }
  return I;
}
function Jh(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Vu : s, d = nt(a), v = d ? i ? rl : rl.filter(function(h) {
    return nt(h) === d;
  }) : Xt, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, w) {
    return h[w] = Iu(e, {
      placement: w,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[zn(w)], h;
  }, {});
  return Object.keys(c).sort(function(h, w) {
    return c[h] - c[w];
  });
}
function Qh(e) {
  if (zn(e) === Kt)
    return [];
  var n = yt(e);
  return [al(e), n, al(n)];
}
function _h(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, w = r.allowedAutoPlacements, g = n.options.placement, O = zn(g), P = O === g, y = s || (P || !h ? [yt(g)] : Qh(g)), b = [g].concat(y).reduce(function(ae, oe) {
      return ae.concat(zn(oe) === Kt ? Jh(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: w
      }) : oe);
    }, []), E = n.rects.reference, k = n.rects.popper, z = /* @__PURE__ */ new Map(), M = !0, B = b[0], I = 0; I < b.length; I++) {
      var C = b[I], S = zn(C), N = nt(C) === Zt, K = [An, mr].indexOf(S) >= 0, L = K ? "width" : "height", U = Iu(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Q = K ? N ? wa : sr : N ? mr : An;
      E[L] > k[L] && (Q = yt(Q));
      var G = yt(Q), X = [];
      if (o && X.push(U[S] <= 0), i && X.push(U[Q] <= 0, U[G] <= 0), X.every(function(ae) {
        return ae;
      })) {
        B = C, M = !1;
        break;
      }
      z.set(C, X);
    }
    if (M)
      for (var D = h ? 3 : 1, Z = function(oe) {
        var ge = b.find(function(pe) {
          var He = z.get(pe);
          if (He)
            return He.slice(0, oe).every(function(nn) {
              return nn;
            });
        });
        if (ge)
          return B = ge, "break";
      }, j = D; j > 0; j--) {
        var J = Z(j);
        if (J === "break")
          break;
      }
    n.placement !== B && (n.modifiersData[a]._skip = !0, n.placement = B, n.reset = !0);
  }
}
const xh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _h,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function eg(e, n, r) {
  var a = zn(e), t = [sr, An].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [sr, wa].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function ng(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = Vu.reduce(function(d, v) {
    return d[v] = eg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const rg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ng
};
function ag(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tg(e) {
  return e === Cn(e) || !gn(e) ? yi(e) : ag(e);
}
function og(e) {
  var n = e.getBoundingClientRect(), r = La(n.width) / e.offsetWidth || 1, a = La(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function ig(e, n, r) {
  r === void 0 && (r = !1);
  var a = gn(n), t = gn(n) && og(n), o = gr(n), l = Ra(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Bn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  wi(o)) && (i = tg(n)), gn(n) ? (s = Ra(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = bi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function lg(e) {
  var n = Ra(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function sg(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    n.set(o.name, o);
  });
  function t(o) {
    r.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = n.get(i);
        s && t(s);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || t(o);
  }), a;
}
function ug(e) {
  var n = sg(e);
  return Ro.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function dg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function qn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var yr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', vg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', ll = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function fg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), ll).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(qn(yr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(qn(yr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Ro.indexOf(n.phase) < 0 && console.error(qn(yr, n.name, '"phase"', "either " + Ro.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(qn(yr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(qn(yr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(qn(yr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(qn(yr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + ll.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(qn(vg, String(n.name), a, a));
      });
    });
  });
}
function cg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function mg(e) {
  var n = e.reduce(function(r, a) {
    var t = r[a.name];
    return r[a.name] = t ? Object.assign({}, t, a, {
      options: Object.assign({}, t.options, a.options),
      data: Object.assign({}, t.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var sl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", pg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ul = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function dl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function hg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? ul : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ul, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function(O) {
        var P = typeof O == "function" ? O(d.options) : O;
        w(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: Ca(i) ? Ja(i) : i.contextElement ? Ja(i.contextElement) : [],
          popper: Ja(s)
        };
        var y = ug(mg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = y.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var b = cg([].concat(y, d.options.modifiers), function(C) {
            var S = C.name;
            return S;
          });
          if (fg(b), zn(d.options.placement) === Kt) {
            var E = d.orderedModifiers.find(function(C) {
              var S = C.name;
              return S === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = Pn(s), z = k.marginTop, M = k.marginRight, B = k.marginBottom, I = k.marginLeft;
          [z, M, B, I].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var O = d.elements, P = O.reference, y = O.popper;
          if (!dl(P, y)) {
            process.env.NODE_ENV !== "production" && console.error(sl);
            return;
          }
          d.rects = {
            reference: ig(P, Ci(y), d.options.strategy === "fixed"),
            popper: lg(y)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var b = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (b += 1, b > 100)) {
              console.error(pg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var k = d.orderedModifiers[E], z = k.fn, M = k.options, B = M === void 0 ? {} : M, I = k.name;
            typeof z == "function" && (d = z({
              state: d,
              options: B,
              name: I,
              instance: c
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: dg(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        w(), f = !0;
      }
    };
    if (!dl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(sl), c;
    c.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      d.orderedModifiers.forEach(function(g) {
        var O = g.name, P = g.options, y = P === void 0 ? {} : P, b = g.effect;
        if (typeof b == "function") {
          var E = b({
            state: d,
            name: O,
            instance: c,
            options: y
          }), k = function() {
          };
          v.push(E || k);
        }
      });
    }
    function w() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return c;
  };
}
var ct = {
  passive: !0
};
function gg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, ct);
  }), i && s.addEventListener("resize", r.update, ct), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, ct);
    }), i && s.removeEventListener("resize", r.update, ct);
  };
}
const yg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: gg,
  data: {}
};
function bg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Bu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const wg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bg,
  data: {}
};
var Cg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Sg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: La(n * t) / t || 0,
    y: La(r * t) / t || 0
  };
}
function vl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, c = f === void 0 ? 0 : f, h = l.y, w = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  c = g.x, w = g.y;
  var O = l.hasOwnProperty("x"), P = l.hasOwnProperty("y"), y = sr, b = An, E = window;
  if (u) {
    var k = Ci(r), z = "clientHeight", M = "clientWidth";
    if (k === Cn(r) && (k = gr(r), Pn(k).position !== "static" && i === "absolute" && (z = "scrollHeight", M = "scrollWidth")), k = k, t === An || (t === sr || t === wa) && o === et) {
      b = mr;
      var B = v && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[z]
      );
      w -= B - a.height, w *= s ? 1 : -1;
    }
    if (t === sr || (t === An || t === mr) && o === et) {
      y = wa;
      var I = v && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[M]
      );
      c -= I - a.width, c *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && Cg), S = d === !0 ? Sg({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  if (c = S.x, w = S.y, s) {
    var N;
    return Object.assign({}, C, (N = {}, N[b] = P ? "0" : "", N[y] = O ? "0" : "", N.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + w + "px)" : "translate3d(" + c + "px, " + w + "px, 0)", N));
  }
  return Object.assign({}, C, (n = {}, n[b] = P ? w + "px" : "", n[y] = O ? c + "px" : "", n.transform = "", n));
}
function kg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = Pn(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: zn(n.placement),
    variation: nt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, vl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, vl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const $g = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: kg,
  data: {}
};
function Tg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !gn(o) || !Bn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Og(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var t = n.elements[a], o = n.attributes[a] || {}, l = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !gn(t) || !Bn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Pg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Tg,
  effect: Og,
  requires: ["computeStyles"]
};
var Vg = [yg, wg, $g, Pg], Eg = /* @__PURE__ */ hg({
  defaultModifiers: Vg
});
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mt.apply(this, arguments);
}
function fl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        fl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        fl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Nu(e) {
  var n = V(null), r = V(null), a = V(!1), t = V({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = ot(() => a.value, 1), l = null, i = !1, s = !1, u = !1, d = () => {
    var {
      width: k,
      height: z
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Ne(k),
      height: Ne(z)
    };
  }, v = () => {
    e.trigger === "hover" && (u = !0, b());
  }, f = /* @__PURE__ */ function() {
    var k = cl(function* () {
      e.trigger === "hover" && (u = !1, yield En(), !s && E());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (s = !0);
  }, h = /* @__PURE__ */ function() {
    var k = cl(function* () {
      e.trigger === "hover" && (s = !1, yield En(), !u && E());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), w = () => {
    b(), i = !0;
  }, g = () => {
    if (i) {
      i = !1;
      return;
    }
    a.value = !1, $(e["onUpdate:show"], !1);
  }, O = () => {
    d();
    var k = {
      x: Ne(e.offsetX),
      y: Ne(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: k.y,
          distance: k.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: k.y,
          distance: -k.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: -k.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: -k.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: k.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: k.x
        };
    }
  }, P = () => {
    var {
      placement: k,
      skidding: z,
      distance: M
    } = O(), B = [Mt({}, xh, {
      enabled: a.value
    }), Mt({}, rg, {
      options: {
        offset: [z, M]
      }
    })];
    return {
      placement: k,
      modifiers: B
    };
  }, y = () => {
    l.setOptions(P());
  }, b = () => {
    var {
      disabled: k
    } = e;
    k || (a.value = !0, $(e["onUpdate:show"], !0));
  }, E = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  };
  return le(() => e.show, (k) => {
    a.value = k ?? !1;
  }, {
    immediate: !0
  }), le(() => e.offsetX, y), le(() => e.offsetY, y), le(() => e.placement, y), le(() => a.value, (k) => {
    k ? (y(), $(e.onOpen)) : $(e.onClose);
  }), le(() => e.trigger, (k) => {
    k === "click" ? document.addEventListener("click", g) : document.removeEventListener("click", g);
  }), le(() => e.disabled, E), ze(() => {
    l = Eg(n.value, r.value, P()), e.trigger === "click" && document.addEventListener("click", g);
  }), pr(() => {
    document.removeEventListener("click", g), l.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: t,
    handleHostClick: w,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: g,
    handlePopoverMouseenter: c,
    handlePopoverMouseleave: h,
    resize: y,
    open: b,
    close: E
  };
}
function Mg(e) {
  return ["click", "hover"].includes(e);
}
function Bg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Ig(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Ng = {
  type: {
    type: String,
    default: "default",
    validator: Ig
  },
  color: {
    type: String
  },
  content: {
    type: String
  },
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "hover",
    validator: Mg
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Bg
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  sameWidth: {
    type: Boolean,
    default: !1
  },
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: Dg,
  classes: Ag
} = ee("tooltip");
function zg(e, n) {
  return p(), T(
    "div",
    {
      ref: "host",
      class: m(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [H(e.$slots, "default"), (p(), me(
      Fa,
      {
        to: e.teleport
      },
      [re(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(A(
            "div",
            {
              ref: "popover",
              class: m(e.n("tooltip")),
              style: W({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = Vn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [A(
              "div",
              {
                style: W({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: m(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [H(e.$slots, "content", {}, () => [be(
                ne(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Ha, e.show]])]),
          _: 3
          /* FORWARDED */
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Du = x({
  name: "VarTooltip",
  props: Ng,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: c,
      // expose
      resize: h
    } = Nu(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Dg,
      classes: Ag,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: h,
      open: f,
      close: c
    };
  }
});
Du.render = zg;
const ur = Du;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var mS = ur;
function Lg(e) {
  return ["click"].includes(e);
}
var Rg = {
  expandTrigger: {
    type: String,
    validator: Lg
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function Fo() {
  return Fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
var {
  n: Ug,
  classes: Yg
} = ee("ellipsis"), Fg = {
  key: 0
};
function Hg(e, n) {
  var r = ie("var-tooltip");
  return p(), me(
    r,
    xo(Wl(e.tooltip)),
    {
      content: ve(() => [H(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), T(
          "span",
          Fg,
          ne(e.tooltip.content),
          1
          /* TEXT */
        )) : H(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [A(
        "span",
        {
          class: m(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: W(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [H(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
var Au = x({
  name: "VarEllipsis",
  components: {
    VarTooltip: ur
  },
  props: Rg,
  setup(e) {
    var n = V(!1), r = Y(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = Y(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Fo({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: Ug,
      classes: Yg,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Au.render = Hg;
const Rr = Au;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var pS = Rr;
function jg(e) {
  return ["start", "end"].includes(e);
}
var Wg = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  scrollToError: {
    type: String,
    validator: jg
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function ml(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Gg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ml(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ml(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: qg
} = ee("form");
function Kg(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var zu = x({
  name: "VarForm",
  props: Wg,
  setup(e) {
    var n = Y(() => e.disabled), r = Y(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = rm(), o = (d, v) => {
      setTimeout(() => {
        var f = Ta(v), c = f === window ? 0 : Ai(f), h = Ai(v) - c - Ne(e.scrollToErrorOffsetY);
        Qa(f, {
          top: h,
          animation: lo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Gg(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: O
          } = g;
          return O();
        }));
        if (e.scrollToError) {
          var [, f] = wv(v, (g) => g === !1, e.scrollToError), c = f > -1;
          if (c) {
            var h, w = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(f, w);
          }
          return !c;
        }
        return v.every((g) => g === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), i = () => a.forEach((d) => {
      var {
        reset: v
      } = d;
      return v();
    }), s = () => a.forEach((d) => {
      var {
        resetValidation: v
      } = d;
      return v();
    }), u = {
      disabled: n,
      readonly: r
    };
    return t(u), {
      n: qg,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
zu.render = Kg;
const Ln = zu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
Ln.useValidation = bn;
Ln.useForm = wn;
var hS = Ln;
function Lu(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function Xg(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[ql(t)] = o, r;
  }, {}) : {};
}
function Zg(e) {
  var {
    value: n
  } = e._hover, r = Xg(e);
  Object.keys(n).forEach((a) => {
    var t = ql(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Si(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function Jg(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e.style[n] = "";
  });
}
function Ru(e) {
  Jg(e), Si(e, e._hover.rawStyle), e._hover.rawStyle = {};
}
function Uu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, ni(e)) {
    e(this._hover.hovering);
    return;
  }
  Si(this, e);
}
function Yu() {
  if (this._hover.hovering = !1, ni(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Ru(this);
}
function Fu(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Lu(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, Zg(e), e.addEventListener("mouseenter", Uu), e.addEventListener("mouseleave", Yu));
}
function Hu(e, n) {
  Lu(n.arg) || (Ru(e), e.removeEventListener("mouseenter", Uu), e.removeEventListener("mouseleave", Yu));
}
function Qg(e, n) {
  Hu(e, n);
}
function _g(e, n) {
  return !ni(n.value) && e._hover.hovering;
}
function xg(e, n) {
  Fu(e, n), _g(e, n) && Si(e, n.value);
}
var ju = {
  mounted: Fu,
  unmounted: Hu,
  beforeUpdate: Qg,
  updated: xg,
  install(e) {
    e.directive("hover", this);
  }
}, gS = ju;
const Ho = ju;
function ey(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ny = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: ey,
    default: "fill"
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !0
  },
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: ry,
  classes: ay
} = ee("image"), ty = ["alt", "title", "lazy-error", "lazy-loading"], oy = ["alt", "title", "src"];
function iy(e, n) {
  var r = Fe("lazy"), a = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: W({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Se((p(), T(
      "img",
      {
        key: 0,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: W({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      ty
    )), [[r, e.src]]) : (p(), T(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: W({
          objectFit: e.fit
        }),
        src: e.src,
        onLoad: n[3] || (n[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[4] || (n[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[5] || (n[5] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      oy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Wu = x({
  name: "VarImage",
  directives: {
    Lazy: _a,
    Ripple: Ae
  },
  props: ny,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && $(i, t), o._lazy.state === "error" && $(s, t)) : $(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && $(l, t);
    }, a = (t) => {
      $(e.onClick, t);
    };
    return {
      n: ry,
      classes: ay,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
Wu.render = iy;
const Ur = Wu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var yS = Ur, Gu = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), qu = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function ly() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Gu), {
    length: r
  } = vn(qu);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Ku = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: F()
};
function pl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function sy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        pl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        pl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var uy = 250, dy = 20, {
  n: vy,
  classes: fy
} = ee("swipe"), cy = ["onClick"];
function my(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: W({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)",
          transitionDuration: e.lockDuration ? "0ms" : e.toNumber(e.duration) + "ms"
        }),
        onTouchstart: n[0] || (n[0] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[1] || (n[1] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[2] || (n[2] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [H(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), H(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.length, (r, a) => (p(), T(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: W({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          cy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)])],
    2
    /* CLASS */
  );
}
var Xu = x({
  name: "VarSwipe",
  props: Ku,
  setup(e) {
    var n = V(null), r = V(0), a = Y(() => e.vertical), t = V(0), o = V(0), l = V(!1), i = V(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = ly(), v = !1, f = -1, c, h, w, g, O, P = (D) => s.find((Z) => {
      var {
        index: j
      } = Z;
      return j.value === D;
    }), y = () => {
      e.loop && (o.value >= 0 && P(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && P(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (P(d.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }, b = (D) => {
      var Z = xe(D) ? D : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: j
      } = e;
      return Z <= -1 ? j ? -1 : 0 : Z >= d.value ? j ? d.value : d.value - 1 : Z;
    }, E = (D) => {
      var {
        loop: Z
      } = e;
      return D === -1 ? Z ? d.value - 1 : 0 : D === d.value ? Z ? 0 : d.value - 1 : D;
    }, k = (D) => {
      var {
        loop: Z
      } = e;
      return D < 0 ? Z ? d.value - 1 : 0 : D > d.value - 1 ? Z ? 0 : d.value - 1 : D;
    }, z = (D) => {
      var Z = o.value >= r.value, j = o.value <= -t.value, J = 0, ae = -(t.value - r.value);
      l.value = !0, (Z || j) && (l.value = !0, o.value = j ? J : ae, P(0).setTranslate(0), P(d.value - 1).setTranslate(0)), Rt(() => {
        l.value = !1, $(D);
      });
    }, M = () => {
      i.value = k(R(e.initialIndex));
    }, B = () => {
      var {
        autoplay: D
      } = e;
      !D || d.value <= 1 || (I(), f = window.setTimeout(() => {
        U(), B();
      }, R(D)));
    }, I = () => {
      f && clearTimeout(f);
    }, C = (D, Z) => {
      if (D > Z && D > 10)
        return "horizontal";
      if (Z > D && Z > 10)
        return "vertical";
    }, S = (D) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: j
        } = D.touches[0];
        c = Z, h = j, w = performance.now(), v = !0, I(), z(() => {
          l.value = !0;
        });
      }
    }, N = (D) => {
      var {
        touchable: Z,
        vertical: j
      } = e;
      if (!(!v || !Z)) {
        var {
          clientX: J,
          clientY: ae
        } = D.touches[0], oe = Math.abs(J - c), ge = Math.abs(ae - h), pe = C(oe, ge), He = j ? "vertical" : "horizontal";
        if (pe === He) {
          D.preventDefault();
          var nn = g !== void 0 ? J - g : 0, sn = O !== void 0 ? ae - O : 0;
          g = J, O = ae, o.value += j ? sn : nn, y();
        }
      }
    }, K = () => {
      if (v) {
        var {
          vertical: D,
          onChange: Z
        } = e, j = D ? O < h : g < c, J = Math.abs(D ? h - O : c - g), ae = performance.now() - w <= uy && J >= dy, oe = ae ? b(j ? i.value + 1 : i.value - 1) : b();
        v = !1, l.value = !1, g = void 0, O = void 0, o.value = oe * -r.value;
        var ge = i.value;
        i.value = E(oe), B(), ge !== i.value && $(Z, i.value);
      }
    }, L = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((D) => {
        D.setTranslate(0);
      }), B(), setTimeout(() => {
        l.value = !1;
      }));
    }, U = (D) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: j
        } = e, J = i.value;
        i.value = k(J + 1), (D == null ? void 0 : D.event) !== !1 && $(j, i.value), z(() => {
          if (J === d.value - 1 && Z) {
            P(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          J !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, Q = (D) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: j
        } = e, J = i.value;
        i.value = k(J - 1), (D == null ? void 0 : D.event) !== !1 && $(j, i.value), z(() => {
          if (J === 0 && Z) {
            P(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          J !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, G = (D, Z) => {
      if (!(d.value <= 1 || D === i.value)) {
        D = D < 0 ? 0 : D, D = D >= d.value ? d.value : D;
        var j = D > i.value ? U : Q, J = Math.abs(D - i.value);
        Array.from({
          length: J
        }).forEach((ae, oe) => {
          j({
            event: oe === J - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), le(() => d.value, /* @__PURE__ */ sy(function* () {
      yield En(), M(), L();
    })), ze(() => {
      window.addEventListener("resize", L);
    }), pr(() => {
      window.removeEventListener("resize", L), I();
    }), {
      n: vy,
      classes: fy,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: S,
      handleTouchmove: N,
      handleTouchend: K,
      next: U,
      prev: Q,
      to: G,
      resize: L,
      toNumber: R
    };
  }
});
Xu.render = my;
const Rn = Xu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var bS = Rn;
function py() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Gu), {
    index: r
  } = fn(qu);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: hy
} = ee("swipe-item");
function gy(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n()),
      style: W({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Zu = x({
  name: "VarSwipeItem",
  setup() {
    var e = V(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = py(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: hy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Zu.render = gy;
const Un = Zu;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var wS = Un;
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, jo.apply(this, arguments);
}
var yy = jo({
  show: {
    type: Boolean,
    default: !1
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  "onUpdate:show": F()
}, Xe(Ku, ["loop", "indicator", "onChange"]), Xe(tt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: hl,
  classes: by
} = ee("image-preview"), gl = 12, yl = 200, wy = 350, bl = 200, Cy = ["src", "alt"];
function Sy(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), o = ie("var-popup");
  return p(), me(
    o,
    {
      class: m(e.n("popup")),
      "var-image-preview-cover": "",
      transition: e.n("$-fade"),
      show: e.popupShow,
      overlay: !1,
      "close-on-click-overlay": !1,
      "lock-scroll": e.lockScroll,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    },
    {
      default: ve(() => [re(
        a,
        Ve({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(p(!0), T(
            Pe,
            null,
            Ie(e.images, (l) => (p(), me(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [A(
                  "div",
                  {
                    class: m(e.n("zoom-container")),
                    style: W({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
                    }),
                    onTouchstart: n[0] || (n[0] = function() {
                      return e.handleTouchstart && e.handleTouchstart(...arguments);
                    }),
                    onTouchmove: n[1] || (n[1] = function() {
                      return e.handleTouchmove && e.handleTouchmove(...arguments);
                    }),
                    onTouchend: n[2] || (n[2] = function() {
                      return e.handleTouchend && e.handleTouchend(...arguments);
                    })
                  },
                  [A(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Cy
                  )],
                  38
                  /* CLASS, STYLE, HYDRATE_EVENTS */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class"]
            ))),
            128
            /* KEYED_FRAGMENT */
          ))]),
          indicator: ve((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [H(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (p(), T(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              ne(i + 1) + " / " + ne(s),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), H(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), me(
        t,
        {
          key: 0,
          class: m(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("extra"))
        },
        [H(e.$slots, "extra")],
        2
        /* CLASS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var Ju = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: Rn,
    VarSwipeItem: Un,
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: yy,
  setup(e) {
    var n = V(!1), r = Y(() => {
      var {
        images: I,
        current: C
      } = e, S = I.findIndex((N) => N === C);
      return S >= 0 ? S : 0;
    }), a = V(1), t = V(0), o = V(0), l = V(void 0), i = V(void 0), s = V(!0), u = null, d = null, v = null, f = (I, C) => {
      var {
        clientX: S,
        clientY: N
      } = I, {
        clientX: K,
        clientY: L
      } = C;
      return Math.abs(Math.sqrt(Math.pow(K - S, 2) + Math.pow(L - N, 2)));
    }, c = (I, C) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: C
    }), h = () => {
      a.value = R(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, bl);
    }, w = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (I) => d ? f(d, I) <= gl && I.timestamp - d.timestamp <= yl && d.target === I.target : !1, O = (I) => !I || !u || !d ? !1 : f(u, d) <= gl && Date.now() - d.timestamp < wy && (I === u.target || I.parentNode === u.target), P = (I) => {
      v = window.setTimeout(() => {
        O(I.target) && B(), u = null;
      }, yl);
    }, y = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = I, S = c(C[0], I.currentTarget);
      if (u = S, g(S)) {
        a.value > 1 ? w() : h();
        return;
      }
      d = S;
    }, b = (I) => {
      var {
        offsetWidth: C,
        offsetHeight: S
      } = I, {
        naturalWidth: N,
        naturalHeight: K
      } = I.querySelector("." + hl("image"));
      return {
        width: C,
        height: S,
        imageRadio: K / N,
        rootRadio: S / C,
        zoom: R(e.zoom)
      };
    }, E = (I) => {
      var {
        zoom: C,
        imageRadio: S,
        rootRadio: N,
        width: K,
        height: L
      } = b(I);
      if (!S)
        return 0;
      var U = S > N ? L / S : K;
      return Math.max(0, (C * U - K) / 2) / C;
    }, k = (I) => {
      var {
        zoom: C,
        imageRadio: S,
        rootRadio: N,
        width: K,
        height: L
      } = b(I);
      if (!S)
        return 0;
      var U = S > N ? L : K * S;
      return Math.max(0, (C * U - L) / 2) / C;
    }, z = (I, C, S) => I + C >= S ? S : I + C <= -S ? -S : I + C, M = (I) => {
      if (d) {
        var C = I.currentTarget, {
          touches: S
        } = I, N = c(S[0], C);
        if (a.value > 1) {
          var K = N.clientX - d.clientX, L = N.clientY - d.clientY, U = E(C), Q = k(C);
          t.value = z(t.value, K, U), o.value = z(o.value, L, Q);
        }
        d = N;
      }
    }, B = () => {
      if (a.value > 1) {
        w(), setTimeout(() => $(e["onUpdate:show"], !1), bl);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: hl,
      classes: by,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: y,
      handleTouchmove: M,
      handleTouchend: P,
      close: B
    };
  }
});
Ju.render = Sy;
const dr = Ju;
var _n;
function Hn(e) {
  if (ai()) {
    Hn.close();
    var n = qe(e) ? {
      images: [e]
    } : we(e) ? {
      images: e
    } : e, r = Ee(n);
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = Wa(dr, r, {
      onClose: () => $(r.onClose),
      onClosed: () => {
        $(r.onClosed), a(), _n === r && (_n = null);
      },
      onRouteChange: () => {
        a(), _n === r && (_n = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Hn.close = () => {
  if (_n != null) {
    var e = _n;
    _n = null, Me().then(() => {
      e.show = !1;
    });
  }
};
dr.install = function(e) {
  e.component(dr.name, dr);
};
Hn.install = function(e) {
  e.component(dr.name, dr);
};
Hn.Component = dr;
var CS = dr, bt = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onScroll: F()
};
function wl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        wl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        wl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ky,
  classes: $y
} = ee("sticky");
function Ty(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: W({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [A(
      "div",
      {
        class: m(e.n("wrapper")),
        ref: "wrapperEl",
        style: W({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [H(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var Qu = x({
  name: "VarSticky",
  props: bt,
  setup(e) {
    var n = V(null), r = V(null), a = V(!1), t = V("0px"), o = V("0px"), l = V("auto"), i = V("auto"), s = V("auto"), u = V("auto"), d = Y(() => !e.disabled && e.cssMode), v = Y(() => !e.disabled && !e.cssMode && a.value), f = Y(() => Ne(e.offsetTop)), c, h = () => {
      var {
        cssMode: y,
        disabled: b
      } = e;
      if (!b) {
        var E = 0;
        if (c !== window) {
          var {
            top: k
          } = c.getBoundingClientRect();
          E = k;
        }
        var z = r.value, M = n.value, {
          top: B,
          left: I
        } = M.getBoundingClientRect(), C = B - E;
        return C <= f.value ? (y || (l.value = M.offsetWidth + "px", i.value = M.offsetHeight + "px", t.value = E + f.value + "px", o.value = I + "px", s.value = z.offsetWidth + "px", u.value = z.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: C,
          isFixed: !1
        });
      }
    }, w = () => {
      var y = h();
      y && $(e.onScroll, y.offsetTop, y.isFixed);
    }, g = /* @__PURE__ */ function() {
      var y = Cl(function* () {
        a.value = !1, yield Bv(), h();
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), O = /* @__PURE__ */ function() {
      var y = Cl(function* () {
        yield En(), c = Ta(n.value), c !== window && c.addEventListener("scroll", w), window.addEventListener("scroll", w), w();
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), P = () => {
      c !== window && c.removeEventListener("scroll", w), window.removeEventListener("scroll", w);
    };
    return le(() => e.disabled, g), Qo(O), _o(P), ze(O), pr(P), {
      n: ky,
      classes: $y,
      resize: g,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: l,
      fixedHeight: i,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: R
    };
  }
});
Qu.render = Ty;
const Yn = Qu;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var SS = Yn, _u = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), xu = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Oy() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(_u), {
    length: r
  } = vn(xu);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Py() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(_u), {
    index: r
  } = fn(xu);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Vy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Ey,
  classes: My
} = ee("index-anchor");
function By(e, n) {
  return p(), me(
    ja(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [H(e.$slots, "default", {}, () => [be(
          ne(e.name),
          1
          /* TEXT */
        )])],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
var ed = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Vy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Py(), t = V(0), o = V(!1), l = Y(() => e.index), i = V(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, h = (g) => {
      o.value = g;
    }, w = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: c,
      setDisabled: h
    };
    return a(w), {
      n: Ey,
      classes: My,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: De
    };
  }
});
ed.render = By;
const Yr = ed;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var kS = Yr, Iy = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: F(),
  onChange: F()
};
function Sl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function no(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Sl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Sl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ny,
  classes: Dy
} = ee("index-bar"), Ay = ["onClick"];
function zy(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [H(e.$slots, "default"), A(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: W({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.anchorNameList, (r) => (p(), T(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: W({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          ne(r),
          15,
          Ay
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      6
      /* CLASS, STYLE */
    )],
    2
    /* CLASS */
  );
}
var nd = x({
  name: "VarIndexBar",
  props: Iy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Oy(), t = V(""), o = V(null), l = V(null), i = V([]), s = V(), u = Y(() => e.sticky), d = Y(() => e.cssMode), v = Y(() => Ne(e.stickyOffsetTop)), f = Y(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = (y, b) => {
      var E = ei(y) ? y.name.value : y;
      E === s.value || E === void 0 || (s.value = E, (b == null ? void 0 : b.event) !== !1 && $(e.onChange, E));
    }, w = () => {
      if (!("getBoundingClientRect" in o.value))
        return 0;
      var {
        top: y
      } = o.value.getBoundingClientRect(), {
        scrollTop: b
      } = o.value, {
        top: E
      } = l.value.getBoundingClientRect();
      return b - y + E;
    }, g = () => {
      var y = Lt(o.value), b = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, E = w();
      r.forEach((k, z) => {
        var M = k.ownTop.value, B = y - M + v.value - E, I = z === r.length - 1 ? b : r[z + 1].ownTop.value - k.ownTop.value;
        B >= 0 && B < I && t.value === "" && (z && !e.cssMode && r[z - 1].setDisabled(!0), k.setDisabled(!1), h(k));
      });
    }, O = /* @__PURE__ */ function() {
      var y = no(function* (b) {
        var {
          anchorName: E,
          manualCall: k = !1,
          options: z
        } = b;
        if (k && $(e.onClick, E), E !== s.value) {
          var M = r.find((S) => {
            var {
              name: N
            } = S;
            return E === N.value;
          });
          if (M) {
            var B = w(), I = M.ownTop.value - v.value + B, C = ti(o.value);
            t.value = E, h(E, z), yield Qa(o.value, {
              left: C,
              top: I,
              animation: Kl,
              duration: R(e.duration)
            }), Rt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(E) {
        return y.apply(this, arguments);
      };
    }(), P = (y, b) => {
      On(() => O({
        anchorName: y,
        options: b
      }));
    };
    return le(() => n.value, /* @__PURE__ */ no(function* () {
      yield En(), r.forEach((y) => {
        var {
          name: b,
          setOwnTop: E
        } = y;
        b.value && i.value.push(b.value), E();
      });
    })), ze(/* @__PURE__ */ no(function* () {
      yield En(), o.value = Ta(l.value), o.value.addEventListener("scroll", g);
    })), It(() => {
      $(o.value.removeEventListener, "scroll", g);
    }), {
      n: Ny,
      classes: Dy,
      barEl: l,
      active: s,
      zIndex: f,
      anchorNameList: i,
      toNumber: R,
      scrollTo: P,
      anchorClick: O
    };
  }
});
nd.render = zy;
const Fr = nd;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var $S = Fr;
function Ly(e) {
  return ["text", "password", "number"].includes(e);
}
var Ry = {
  modelValue: {
    type: String
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text",
    validator: Ly
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  maxlength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  resize: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: {
    type: Array
  },
  onFocus: F(),
  onBlur: F(),
  onClick: F(),
  onClear: F(),
  onInput: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: ro,
  classes: Uy
} = ee("input"), Yy = ["id", "disabled", "type", "value", "maxlength", "rows"], Fy = ["id", "disabled", "type", "value", "maxlength"], Hy = ["for"];
function jy(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: W({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (p(), T(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : _("v-if", !0), e.textarea ? (p(), T(
          "textarea",
          {
            key: 1,
            class: m(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: W({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none"
            }),
            onFocus: n[0] || (n[0] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[1] || (n[1] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[2] || (n[2] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[3] || (n[3] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[4] || (n[4] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          `
        `,
          46,
          Yy
        )) : (p(), T(
          "input",
          {
            key: 2,
            class: m(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: W({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
            }),
            onFocus: n[5] || (n[5] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[6] || (n[6] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[7] || (n[7] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[8] || (n[8] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[9] || (n[9] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          null,
          46,
          Fy
        )), A(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: W({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ne(e.placeholder),
          15,
          Hy
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (p(), me(
          r,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : _("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: W({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: W({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    2
    /* CLASS */
  );
}
var rd = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: Ry,
  setup(e) {
    var n = V("var-input-" + Ya().uid), r = V(null), a = V(!1), t = Y(() => e.type === "number" ? "text" : e.type), o = Y(() => {
      var {
        maxlength: N,
        modelValue: K
      } = e;
      return N ? Nn(K) ? "0 / " + N : String(K).length + "/" + N : "";
    }), {
      bindForm: l,
      form: i
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (N) => {
      Me(() => {
        var {
          validateTrigger: K,
          rules: L,
          modelValue: U
        } = e;
        u(K, N, L, U);
      });
    }, c = () => {
      var {
        hint: N,
        modelValue: K
      } = e;
      if (!N && !Nn(K))
        return ro("--placeholder-hidden");
      if (N && (!Nn(K) || a.value))
        return ro("--placeholder-hint");
    }, h = (N) => {
      a.value = !0, $(e.onFocus, N), f("onFocus");
    }, w = (N) => {
      a.value = !1, $(e.onBlur, N), f("onBlur");
    }, g = (N) => {
      var K = N.target, {
        value: L
      } = K;
      e.type === "number" && (L = b(L)), L = k(E(L)), K.value = L, $(e["onUpdate:modelValue"], L), $(e.onInput, L, N), f("onInput");
    }, O = (N) => {
      var K = N.target, {
        value: L
      } = K;
      L = k(E(L)), K.value = L, $(e.onChange, L, N), f("onChange");
    }, P = () => {
      var {
        disabled: N,
        readonly: K,
        clearable: L,
        onClear: U
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || N || K || !L || ($(e["onUpdate:modelValue"], ""), $(U, ""), f("onClear"));
    }, y = (N) => {
      var {
        disabled: K,
        onClick: L
      } = e;
      i != null && i.disabled.value || K || ($(L, N), f("onClick"));
    }, b = (N) => {
      var K = N.indexOf("-"), L = N.indexOf(".");
      return K > -1 && (N = K === 0 ? "-" + N.replace(/-/g, "") : N.replace(/-/g, "")), L > -1 && (N = N.slice(0, L + 1) + N.slice(L).replace(/\./g, "")), N.replace(/[^-0-9.]/g, "");
    }, E = (N) => e.modelModifiers.trim ? N.trim() : N, k = (N) => e.maxlength ? N.slice(0, R(e.maxlength)) : N, z = (N) => {
      var {
        disabled: K,
        readonly: L
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || K || L || N.stopPropagation();
    }, M = () => {
      $(e["onUpdate:modelValue"], ""), v();
    }, B = () => d(e.rules, e.modelValue), I = () => {
      var N;
      (N = r.value) == null || N.focus();
    }, C = () => {
      r.value.blur();
    }, S = {
      reset: M,
      validate: B,
      resetValidation: v
    };
    return $(l, S), ze(() => {
      e.autofocus && I();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: s,
      type: t,
      maxlengthText: o,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: ro,
      classes: Uy,
      isEmpty: Nn,
      computePlaceholderState: c,
      handleFocus: h,
      handleBlur: w,
      handleInput: g,
      handleChange: O,
      handleClear: P,
      handleClick: y,
      handleTouchstart: z,
      validate: B,
      resetValidation: v,
      reset: M,
      focus: I,
      blur: C
    };
  }
});
rd.render = jy;
const vr = rd;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var TS = vr;
function Wy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Gy(e) {
  return ["always", "hover", "none"].includes(e);
}
var qy = {
  type: {
    type: String,
    default: "default",
    validator: Wy
  },
  href: {
    type: String
  },
  target: {
    type: String
  },
  to: {
    type: [String, Object]
  },
  replace: {
    type: Boolean,
    default: !1
  },
  underline: {
    type: String,
    default: "always",
    validator: Gy
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  textSize: {
    type: [String, Number]
  },
  textColor: {
    type: String
  },
  onClick: F()
}, {
  n: Ky,
  classes: Xy
} = ee("link");
function Zy(e, n) {
  return p(), me(
    ja(e.tag),
    Ve(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [H(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var ad = x({
  name: "VarLink",
  props: qy,
  setup(e) {
    var n = Y(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = Y(() => {
      var {
        disabled: t,
        href: o,
        target: l,
        to: i,
        replace: s
      } = e;
      return t ? {} : o ? {
        href: o,
        target: l
      } : i ? {
        to: i,
        target: l,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: o,
        onClick: l
      } = e;
      o || $(l, t);
    };
    return {
      n: Ky,
      classes: Xy,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
ad.render = Zy;
const Hr = ad;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var OS = Hr, Jy = {
  loading: {
    type: Boolean,
    default: !1
  },
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: F(),
  "onUpdate:loading": F(),
  "onUpdate:error": F()
};
function kl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Qy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        kl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        kl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: _y,
  classes: xy
} = ee("list");
function eb(e, n) {
  var r = ie("var-loading"), a = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [H(e.$slots, "default"), e.loading ? H(e.$slots, "loading", {
      key: 0
    }, () => [A(
      "div",
      {
        class: m(e.n("loading"))
      },
      [A(
        "div",
        {
          class: m(e.n("loading-text"))
        },
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), re(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : _("v-if", !0), e.finished ? H(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? H(e.$slots, "error", {
      key: 2
    }, () => [Se((p(), T(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [be(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : _("v-if", !0), A(
      "div",
      {
        class: m(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var td = x({
  name: "VarList",
  directives: {
    Ripple: Ae
  },
  components: {
    VarLoading: $n
  },
  props: Jy,
  setup(e) {
    var n = V(null), r = V(null), a, t = () => {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ne(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = Qy(function* () {
        yield Me();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && o() && t();
      });
      return function() {
        return i.apply(this, arguments);
      };
    }();
    return ze(() => {
      a = Ta(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), pr(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: je,
      listEl: n,
      detectorEl: r,
      dt: zt,
      isNumber: xe,
      load: t,
      check: l,
      n: _y,
      classes: xy
    };
  }
});
td.render = eb;
const jr = td;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var PS = jr, nb = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  errorColor: {
    type: String
  },
  height: {
    type: [Number, String]
  },
  top: {
    type: [Number, String]
  }
}, {
  classes: rb,
  n: $l
} = ee("loading-bar");
const ab = x({
  name: "VarLoadingBar",
  props: nb,
  setup(e) {
    return () => re("div", {
      class: rb($l(), [e.error, $l("--error")]),
      style: {
        zIndex: dn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: he(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: he(e.top)
      }
    }, null);
  }
});
var od, Tl, id = {}, tb = {
  value: 0,
  opacity: 0,
  error: !1
}, Ke = Ee(tb), ob = (e) => {
  Object.assign(Ke, e);
}, ib = (e) => {
  Object.assign(Ke, e), id = e;
}, lb = () => {
  Object.keys(id).forEach((e) => {
    Ke[e] !== void 0 && (Ke[e] = void 0);
  });
}, ld = () => {
  od = window.setTimeout(() => {
    if (!(Ke.value >= 95)) {
      var e = Math.random();
      Ke.value < 70 && (e = Math.round(5 * Math.random())), Ke.value += e, ld();
    }
  }, 200);
}, sb = () => {
  Tl || (Tl = !0, Wa(ab, Ke)), (!Ke.error || Ke.value === 100) && (Ke.value = 0), setTimeout(() => {
    Ke.opacity = 1;
  }, 200), ld();
}, ub = () => {
  Ke.value = 100, setTimeout(() => {
    Ke.opacity = 0, setTimeout(() => {
      Ke.error = !1;
    }, 250);
  }, 300), window.clearTimeout(od);
}, db = () => {
  Ke.error = !0, Bt.start(), setTimeout(Bt.finish, 300);
}, Bt = {
  start: sb,
  finish: ub,
  error: db,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: ob,
  setDefaultOptions: ib,
  resetDefaultOptions: lb
}, VS = Bt;
const Wo = Bt;
function vb(e) {
  return ["click", "hover"].includes(e);
}
function fb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var cb = {
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "click",
    validator: vb
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: fb
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  sameWidth: {
    type: Boolean,
    default: !1
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: mb,
  classes: pb
} = ee("menu");
function hb(e, n) {
  return p(), T(
    "div",
    {
      ref: "host",
      class: m(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [H(e.$slots, "default"), (p(), me(
      Fa,
      {
        to: e.teleport
      },
      [re(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(A(
            "div",
            {
              ref: "popover",
              style: W({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Vn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [H(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Ha, e.show]])]),
          _: 3
          /* FORWARDED */
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var sd = x({
  name: "VarMenu",
  props: cb,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: c,
      // expose
      resize: h
    } = Nu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: he,
      n: mb,
      classes: pb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: h,
      open: f,
      close: c
    };
  }
});
sd.render = hb;
const Fn = sd;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var ES = Fn, ud = Symbol("SELECT_BIND_OPTION_KEY"), dd = Symbol("SELECT_COUNT_OPTION_KEY");
function gb() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(ud), {
    length: r
  } = vn(dd);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function yb() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(ud), {
    index: r
  } = fn(dd);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var bb = {
  label: {},
  value: {}
}, {
  n: wb,
  classes: Cb
} = ee("option");
function Sb(e, n) {
  var r = ie("var-checkbox"), a = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: W({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: W({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (p(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Vn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : _("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [H(e.$slots, "default", {}, () => [be(
        ne(e.label),
        1
        /* TEXT */
      )])],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[a]]);
}
var vd = x({
  name: "VarOption",
  directives: {
    Ripple: Ae
  },
  components: {
    VarCheckbox: or
  },
  props: bb,
  setup(e) {
    var n = V(!1), r = Y(() => n.value), a = Y(() => e.label), t = Y(() => e.value), {
      select: o,
      bindSelect: l
    } = yb(), {
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(h);
    }, f = () => d(h), c = (w) => {
      n.value = w;
    }, h = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return le([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), l(h), {
      n: wb,
      classes: Cb,
      optionSelected: n,
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
vd.render = Sb;
const Wr = vd;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var MS = Wr, kb = {
  show: {
    type: Boolean,
    default: !1
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onClick: F(),
  "onUpdate:show": F()
};
function $b(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Nt(e);
}
var {
  n: Ol
} = ee("overlay");
const Gr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: kb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ot(() => e.show, 1), {
      disabled: o
    } = oi(), l = () => {
      $(e.onClick), $(e["onUpdate:show"], !1);
    };
    Ut(() => e.show, () => e.lockScroll);
    var i = () => re("div", Ve({
      class: Ol(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [$(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(De, {
        name: Ol("--fade")
      }, {
        default: () => [u && i()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return re(Fa, {
          to: u,
          disabled: o.value
        }, $b(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var BS = Gr, Tb = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: {
    type: Boolean,
    default: !1
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: F(),
  "onUpdate:current": F(),
  "onUpdate:size": F()
}, {
  n: Ob,
  classes: Pb
} = ee("pagination"), Vb = ["item-mode", "onClick"];
function Eb(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), l = Fe("ripple");
  return p(), T(
    "ul",
    {
      class: m(e.n())
    },
    [Se((p(), T(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [H(e.$slots, "prev", {}, () => [re(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), T(
      "li",
      {
        key: 0,
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleValue, i)),
          onKeydown: n[3] || (n[3] = Vi((i) => e.setPage("simple", e.simpleValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), A("span", null, [be(
        " / " + ne(e.pageCount) + " ",
        1
        /* TEXT */
      ), A(
        "div",
        {
          class: m(e.n("simple-line"))
        },
        null,
        2
        /* CLASS */
      )])],
      2
      /* CLASS */
    )) : (p(!0), T(
      Pe,
      {
        key: 1
      },
      Ie(e.pageList, (i, s) => Se((p(), T(
        "li",
        {
          key: e.toNumber(i) + s,
          "item-mode": e.getMode(i, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [be(
          ne(i),
          1
          /* TEXT */
        )],
        10,
        Vb
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Se((p(), T(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [H(e.$slots, "next", {}, () => [re(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), T(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(p(!0), T(
            Pe,
            null,
            Ie(e.sizeOption, (i, s) => Se((p(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [be(
                  ne(i) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class", "onClick"]
            )), [[l]])),
            128
            /* KEYED_FRAGMENT */
          ))]),
          default: ve(() => [A(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [A(
              "span",
              null,
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
              /* TEXT */
            ), re(
              r,
              {
                class: m(e.n("size--open-icon")),
                "var-pagination-cover": "",
                name: "menu-down"
              },
              null,
              8,
              ["class"]
            )],
            2
            /* CLASS */
          )]),
          _: 1
          /* STABLE */
        },
        8,
        ["show"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (p(), T(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        ne(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), re(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.inputValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.inputValue, i)),
          onKeydown: n[9] || (n[9] = Vi((i) => e.setPage("quick", e.inputValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (p(), T(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      ne(e.totalText),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var fd = x({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: tr,
    VarInput: vr
  },
  directives: {
    Ripple: Ae
  },
  props: Tb,
  setup(e) {
    var n = V(!1), r = V(""), a = V("1"), t = V(!1), o = V(!1), l = V(R(e.current) || 1), i = V(R(e.size) || 10), s = V([]), u = Y(() => Math.ceil(e.maxPagerCount / 2)), d = Y(() => Math.ceil(R(e.total) / R(i.value))), v = Y(() => {
      var b = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, R(e.total));
      return [b, E];
    }), f = Y(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), c = (b, E) => xe(b) ? !1 : E === 1 ? t.value : o.value, h = (b, E) => xe(b) ? "basic" : E === 1 ? "head" : "tail", w = (b, E) => {
      b === l.value || e.disabled || (xe(b) ? l.value = b : b === "prev" ? l.value > 1 && (l.value -= 1) : b === "next" ? l.value < d.value && (l.value += 1) : b === "..." && (E === 1 ? l.value = Math.max(l.value - e.maxPagerCount, 1) : l.value = Math.min(l.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, O = (b) => {
      i.value = b, n.value = !1;
    }, P = (b) => {
      var E = /^[1-9][0-9]*$/;
      return E.test(b);
    }, y = (b, E, k) => {
      if (k.target.blur(), P(E)) {
        var z = R(E);
        z > d.value && (z = d.value, a.value = "" + z), z !== l.value && (l.value = z);
      }
      b === "quick" && (r.value = ""), b === "simple" && !P(E) && (a.value = "" + l.value);
    };
    return le([() => e.current, () => e.size], (b) => {
      var [E, k] = b;
      l.value = R(E) || 1, i.value = R(k || 10);
    }), le([l, i, d], (b, E) => {
      var [k, z, M] = b, [B, I] = E, C = [], {
        maxPagerCount: S,
        total: N,
        onChange: K
      } = e, L = Math.ceil(R(N) / R(I)), U = M - (S - u.value) - 1;
      if (a.value = "" + k, M - 2 > S) {
        if (B === void 0 || M !== L)
          for (var Q = 2; Q < S + 2; Q++)
            C.push(Q);
        if (k <= S && k < U) {
          C = [];
          for (var G = 1; G < S + 1; G++)
            C.push(G + 1);
          t.value = !0, o.value = !1;
        }
        if (k > S && k < U) {
          C = [];
          for (var X = 1; X < S + 1; X++)
            C.push(k + X - u.value);
          t.value = k === 2 && S === 1, o.value = !1;
        }
        if (k >= U) {
          C = [];
          for (var D = 1; D < S + 1; D++)
            C.push(M - (S - D) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", M];
      } else
        for (var Z = 1; Z <= M; Z++)
          C.push(Z);
      s.value = C, B !== void 0 && M > 0 && $(K, k, z), $(e["onUpdate:current"], k), $(e["onUpdate:size"], z);
    }, {
      immediate: !0
    }), {
      n: Ob,
      classes: Pb,
      pack: je,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: h,
      isHideEllipsis: c,
      clickItem: w,
      showMenu: g,
      clickSize: O,
      setPage: y,
      toNumber: R
    };
  }
});
fd.render = Eb;
const qr = fd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var IS = qr, Mb = {
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  radius: {
    type: [Number, String]
  },
  width: {
    type: [Number, String]
  },
  height: {
    type: [Number, String]
  },
  round: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, {
  n: Bb,
  classes: Ib
} = ee("paper");
function Nb(e, n) {
  var r = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.elevation != null, e.n("$-elevation--" + e.elevation)], [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: W({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var cd = x({
  name: "VarPaper",
  directives: {
    Ripple: Ae
  },
  props: Mb,
  setup(e) {
    var n = (r) => {
      $(e.onClick, r);
    };
    return {
      n: Bb,
      classes: Ib,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
cd.render = Nb;
const Kr = cd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var NS = Kr;
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Go.apply(this, arguments);
}
var Db = Go({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: {
    type: Boolean,
    default: !1
  },
  cascadeInitialIndexes: {
    type: Array,
    default: () => []
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  // dynamic internal
  dynamic: {
    type: Boolean,
    default: !1
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  },
  onChange: F(),
  onConfirm: F(),
  onCancel: F()
}, Xe(tt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Ab,
  classes: zb
} = ee("picker"), Pl = 300, Lb = 15, Vl = 0, Rb = ["onTouchstart", "onTouchmove", "onTouchend"], Ub = ["onTransitionend"];
function Yb(e, n) {
  var r = ie("var-button");
  return p(), me(
    ja(e.dynamic ? e.n("$-popup") : e.Transition),
    Ve(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: ve(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("toolbar"))
          },
          [H(e.$slots, "cancel", {}, () => [re(
            r,
            {
              class: m(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), H(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: m(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), H(e.$slots, "confirm", {}, () => [re(
            r,
            {
              class: m(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
          /* CLASS */
        )) : _("v-if", !0), A(
          "div",
          {
            class: m(e.n("columns")),
            style: W({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), T(
            Pe,
            null,
            Ie(e.scrollColumns, (a) => (p(), T(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Vn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
                "div",
                {
                  class: m(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: W({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(p(!0), T(
                  Pe,
                  null,
                  Ie(a.column.texts, (t) => (p(), T(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: W({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [A(
                      "div",
                      {
                        class: m(e.n("text"))
                      },
                      ne(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    6
                    /* CLASS, STYLE */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                Ub
              )],
              42,
              Rb
            ))),
            128
            /* KEYED_FRAGMENT */
          )), A(
            "div",
            {
              class: m(e.n("picked")),
              style: W({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: m(e.n("mask")),
              style: W({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          6
          /* CLASS, STYLE */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
var md = x({
  name: "VarPicker",
  components: {
    VarButton: en,
    VarPopup: hn
  },
  inheritAttrs: !1,
  props: Db,
  setup(e) {
    var n = V([]), r = Y(() => Ne(e.optionHeight)), a = Y(() => Ne(e.optionCount)), t = Y(() => a.value * r.value / 2 - r.value / 2), o = Y(() => a.value * r.value), l = [], i = (C, S) => {
      S.scrollEl = C;
    }, s = (C) => {
      $(e["onUpdate:show"], C);
    }, u = (C) => {
      var S = r.value + t.value, N = t.value - C.column.texts.length * r.value;
      C.translate >= S && (C.translate = S), C.translate <= N && (C.translate = N);
    }, d = (C, S) => {
      var {
        length: N
      } = C.column.texts;
      return S = S >= N ? N - 1 : S, S = S <= 0 ? 0 : S, S;
    }, v = (C) => {
      var S = Math.round((t.value - C.translate) / r.value);
      return d(C, S);
    }, f = () => {
      var C = n.value.map((N) => N.column.texts[N.index]), S = n.value.map((N) => N.index);
      return {
        texts: C,
        indexes: S
      };
    }, c = function(C, S, N, K) {
      K === void 0 && (K = !1);
      var L = t.value - d(C, S) * r.value;
      L === C.translate && (C.scrolling = !1, !K && z(C)), C.translate = L, C.duration = N;
    }, h = (C, S, N) => {
      C.translate += Math.abs(S / N) / 3e-3 * (S < 0 ? -1 : 1);
    }, w = (C, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = _t(S.scrollEl);
    }, g = (C, S) => {
      if (S.touching) {
        var {
          clientY: N
        } = C.touches[0], K = S.prevY !== void 0 ? N - S.prevY : 0;
        S.prevY = N, S.translate += K, u(S);
        var L = performance.now();
        L - S.momentumTime > Pl && (S.momentumTime = L, S.momentumPrevY = S.translate);
      }
    }, O = (C, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var N = S.translate - S.momentumPrevY, K = performance.now() - S.momentumTime, L = Math.abs(N) >= Lb && K <= Pl;
      L && h(S, N, K), S.index = v(S), c(S, S.index, L ? 1e3 : 200);
    }, P = (C) => {
      C.scrolling = !1, z(C);
    }, y = (C) => C.map((S, N) => {
      var K, L = we(S) ? {
        texts: S
      } : S, U = {
        id: Vl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (K = L.initialIndex) != null ? K : 0,
        columnIndex: N,
        duration: 0,
        momentumTime: 0,
        column: L,
        scrollEl: null,
        scrolling: !1
      };
      return c(U, U.index, 0, !0), U;
    }), b = (C) => {
      var S = [];
      return E(S, C, 0, !0), S;
    }, E = function(C, S, N, K) {
      if (K === void 0 && (K = !1), we(S) && S.length) {
        var L, U = K && (L = e.cascadeInitialIndexes[C.length]) != null ? L : 0, Q = {
          id: Vl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: U,
          columnIndex: N,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: S.map((G) => G[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        C.push(Q), c(Q, Q.index, 0, !0), E(C, Q.columns[Q.index].children, N + 1, K);
      }
    }, k = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), E(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, z = (C) => {
      var {
        cascade: S,
        onChange: N
      } = e;
      S && k(C);
      var K = n.value.some((G) => G.scrolling);
      if (!K) {
        var {
          texts: L,
          indexes: U
        } = f(), Q = U.every((G, X) => G === l[X]);
        Q || (l = [...U], $(N, L, U));
      }
    }, M = () => {
      if (e.cascade) {
        var C = n.value.find((S) => S.scrolling);
        C && (C.translate = _t(C.scrollEl), C.index = v(C), c(C, C.index, 0, !0), C.scrolling = !1, k(C));
      } else
        n.value.forEach((S) => {
          S.translate = _t(S.scrollEl), S.index = v(S), c(S, S.index, 0);
        });
    }, B = () => {
      M();
      var {
        texts: C,
        indexes: S
      } = f();
      l = [...S], $(e.onConfirm, C, S);
    }, I = () => {
      M();
      var {
        texts: C,
        indexes: S
      } = f();
      l = [...S], $(e.onCancel, C, S);
    };
    return le(() => e.columns, (C) => {
      n.value = e.cascade ? b(Ei(C)) : y(Ei(C));
      var {
        indexes: S
      } = f();
      l = [...S];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Ab,
      classes: zb,
      pack: je,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: w,
      handleTouchmove: g,
      handleTouchend: O,
      handleTransitionend: P,
      confirm: B,
      cancel: I,
      dt: zt
    };
  }
});
md.render = Yb;
const fr = md;
var rn;
function Sa(e) {
  return new Promise((n) => {
    Sa.close();
    var r = we(e) ? {
      columns: e
    } : e, a = Ee(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = Wa(fr, a, {
      onConfirm: (o, l) => {
        $(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, l) => {
        $(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onClose: () => {
        $(a.onClose), n({
          state: "close"
        }), rn === a && (rn = null);
      },
      onClosed: () => {
        $(a.onClosed), t(), rn === a && (rn = null);
      },
      onRouteChange: () => {
        t(), rn === a && (rn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
fr.install = function(e) {
  e.component(fr.name, fr);
};
Sa.Component = fr;
Sa.install = function(e) {
  e.component(fr.name, fr);
};
Sa.close = () => {
  if (rn != null) {
    var e = rn;
    rn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
var DS = fr;
function Fb(e) {
  return ["linear", "circle"].includes(e);
}
var Hb = {
  mode: {
    type: String,
    default: "linear",
    validator: Fb
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: {
    type: String
  },
  trackColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [Number, String],
    default: 0
  },
  label: {
    type: Boolean,
    default: !1
  },
  labelClass: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  }
}, {
  n: jb,
  classes: Wb
} = ee("progress"), Gb = ["viewBox"], qb = ["cx", "cy", "r", "stroke-width"], Kb = ["cx", "cy", "r", "stroke-width"];
function Xb(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [A(
        "div",
        {
          class: m(e.n("linear-block")),
          style: W({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: W({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), A(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: W({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      ), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [H(e.$slots, "default", {}, () => [be(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (p(), T(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: W({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), T(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: W({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), T(
          "circle",
          {
            key: 0,
            class: m(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: W({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          qb
        )) : _("v-if", !0), A(
          "circle",
          {
            class: m(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: W({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          Kb
        )],
        14,
        Gb
      )), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [H(e.$slots, "default", {}, () => [be(
          ne(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var pd = x({
  name: "VarProgress",
  props: Hb,
  setup(e) {
    var n = Y(() => {
      var a = R(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = Y(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + Ne(a) + " " + Ne(a), i = R(o) > 100 ? 100 : Math.round(R(o)), s = (Ne(a) - Ne(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: jb,
      classes: Wb,
      toSizeUnit: he,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
pd.render = Xb;
const Xr = pd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var AS = Xr, Zb = {
  modelValue: {
    type: Boolean
  },
  // 是否禁用下拉刷新
  disabled: {
    type: Boolean,
    default: !1
  },
  // 动画时长
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  // 成功提示展示时长
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  // control 的背景颜色
  bgColor: {
    type: String
  },
  // 成功状态下 control 的背景颜色
  successBgColor: {
    type: String
  },
  // control 的颜色
  color: {
    type: String
  },
  // 成功状态下 control 的颜色
  successColor: {
    type: String
  },
  target: {
    type: [String, Object]
  },
  onRefresh: F(),
  "onUpdate:modelValue": F()
};
function El(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        El(o, a, t, l, i, "next", s);
      }
      function i(s) {
        El(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ml,
  classes: Qb
} = ee("pull-refresh"), Bl = 150;
function _b(e, n) {
  var r = ie("var-icon");
  return p(), T(
    "div",
    {
      ref: "freshNode",
      class: m(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchend: n[1] || (n[1] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "controlNode",
        class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: W(e.controlStyle)
      },
      [re(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: m(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
      /* CLASS, STYLE */
    ), H(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var hd = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: Zb,
  setup(e) {
    var n, r, a = V(0), t = V(null), o = V(null), l = V(0), i = V(-999), s = V("arrow-down"), u = V("default"), d = V(!1), v = 0, f = 0, c = V(!0), h = Y(() => u.value !== "loading" && u.value !== "success" && !e.disabled), w = Y(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: O.value ? e.successBgColor : e.bgColor,
      color: O.value ? e.successColor : e.color
    })), g = Y(() => Math.abs(2 * a.value)), O = Y(() => u.value === "success"), P = () => new Promise((B) => {
      window.setTimeout(() => {
        c.value = !0, B();
      }, Bl);
    }), y = (B) => {
      var I = "classList" in n ? n : document.body;
      I.classList[B](Ml() + "--lock");
    }, b = (B) => {
      v = B.touches[0].clientY, f = 0;
    }, E = (B) => {
      if (h.value) {
        var I = Lt(n);
        if (!(I > 0)) {
          var C = I === 0, S = B.touches[0];
          f = S.clientY - v, C && f >= 0 && B.preventDefault(), u.value !== "pulling" && (u.value = "pulling", l.value = B.touches[0].clientY), C && i.value > a.value && y("add");
          var N = (B.touches[0].clientY - l.value) / 2 + a.value;
          i.value = N >= g.value ? g.value : N, i.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = P()) : s.value = "arrow-down";
        }
      }
    }, k = /* @__PURE__ */ function() {
      var B = Jb(function* () {
        h.value && (d.value = !0, i.value >= g.value * 0.2 ? (yield r, u.value = "loading", i.value = g.value * 0.3, $(e["onUpdate:modelValue"], !0), $(e.onRefresh), y("remove")) : (u.value = "loosing", s.value = "arrow-down", i.value = a.value, setTimeout(() => {
          d.value = !1, y("remove");
        }, R(e.animationDuration))));
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), z = () => {
      var {
        width: B
      } = o.value.getBoundingClientRect();
      i.value = -(B + B * 0.25), a.value = -(B + B * 0.25);
    }, M = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, R(e.animationDuration));
    };
    return le(() => e.modelValue, (B) => {
      B === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = a.value, M();
      }, R(e.successDuration)));
    }), ze(() => {
      var B;
      n = e.target ? Zl(e.target, "PullRefresh") : Ta(t.value), z(), (B = t.value) == null || B.addEventListener("touchmove", E, {
        passive: !1
      });
    }), It(() => {
      var B;
      (B = t.value) == null || B.removeEventListener("touchmove", E);
    }), {
      n: Ml,
      classes: Qb,
      iconHasChanged: c,
      ICON_TRANSITION: Bl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: b,
      touchMove: E,
      touchEnd: k,
      iconName: s,
      controlStyle: w,
      isSuccess: O
    };
  }
});
hd.render = _b;
const Zr = hd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var zS = Zr, xb = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, gd = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), yd = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function e0() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(gd), {
    length: r
  } = vn(yd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function n0() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(gd), {
    index: r
  } = fn(yd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: r0,
  classes: a0
} = ee("radio");
function t0(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Se((p(), T(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: W({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? H(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : H(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [H(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var bd = x({
  name: "VarRadio",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  inheritAttrs: !1,
  props: xb,
  setup(e) {
    var n = V(!1), r = Y(() => n.value === e.checkedValue), a = V(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = n0(), {
      form: l,
      bindForm: i
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (b) => {
      Me(() => {
        var {
          validateTrigger: E,
          rules: k,
          modelValue: z
        } = e;
        u(E, b, k, z);
      });
    }, c = (b) => {
      var {
        checkedValue: E,
        onChange: k
      } = e;
      t && n.value === E || (n.value = b, $(e["onUpdate:modelValue"], n.value), $(k, n.value), t == null || t.onToggle(E), f("onChange"));
    }, h = (b) => {
      var {
        disabled: E,
        readonly: k,
        uncheckedValue: z,
        checkedValue: M,
        onClick: B
      } = e;
      l != null && l.disabled.value || E || ($(B, b), !(l != null && l.readonly.value || k) && (a.value = !0, c(r.value ? z : M)));
    }, w = (b) => {
      var {
        checkedValue: E,
        uncheckedValue: k
      } = e;
      n.value = b === E ? E : k;
    }, g = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, O = () => d(e.rules, e.modelValue), P = (b) => {
      var {
        uncheckedValue: E,
        checkedValue: k
      } = e, z = ![E, k].includes(b);
      z && (b = r.value ? E : k), c(b);
    };
    le(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var y = {
      sync: w,
      validate: O,
      resetValidation: v,
      reset: g
    };
    return $(o, y), $(i, y), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: r0,
      classes: a0,
      handleClick: h,
      toggle: P,
      reset: g,
      validate: O,
      resetValidation: v
    };
  }
});
bd.render = t0;
const Jr = bd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var LS = Jr;
function o0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var i0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: o0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: l0,
  classes: s0
} = ee("radio-group");
function u0(e, n) {
  var r = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [H(e.$slots, "default")],
      2
      /* CLASS */
    ), re(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var wd = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: i0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = e0(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = bn(), u = Y(() => o.value), d = (g) => {
      Me(() => {
        var {
          validateTrigger: O,
          rules: P,
          modelValue: y
        } = e;
        l(O, g, P, y);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: O
      } = g;
      return O(e.modelValue);
    }), f = (g) => {
      $(e["onUpdate:modelValue"], g), $(e.onChange, g), d("onChange");
    }, c = () => i(e.rules, e.modelValue), h = () => {
      $(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var w = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return $(t, w), a(w), {
      errorMessage: o,
      n: l0,
      classes: s0,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
wd.render = u0;
const Qr = wd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var RS = Qr, d0 = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: {
    type: [String, Number]
  },
  gap: {
    type: [String, Number]
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: !1
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: qa
} = ee("rate"), v0 = ["onClick"];
function f0(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.toNumber(e.count), (o) => Se((p(), T(
          "div",
          {
            key: o,
            style: W(e.getStyle(o)),
            class: m(e.getClass(o)),
            onClick: (l) => e.handleClick(o, l)
          },
          [re(
            r,
            {
              class: m(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(o).name,
              style: W({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          v0
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Cd = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Ae
  },
  props: d0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = bn(), i = (g) => {
      var {
        count: O,
        gap: P
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== R(O) ? he(P) : 0
      };
    }, s = (g) => {
      var {
        name: O,
        color: P
      } = u(g);
      return {
        [qa("content")]: !0,
        [qa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [qa("--error")]: a.value,
        [qa("--primary")]: O !== e.emptyIcon && !P
      };
    }, u = (g) => {
      var {
        modelValue: O,
        disabled: P,
        disabledColor: y,
        color: b,
        half: E,
        emptyColor: k,
        icon: z,
        halfIcon: M,
        emptyIcon: B
      } = e, I = b;
      return (P || n != null && n.disabled.value) && (I = y), g <= R(O) ? {
        color: I,
        name: z
      } : E && g <= R(O) + 0.5 ? {
        color: I,
        name: M
      } : {
        color: P || n != null && n.disabled.value ? y : k,
        name: B
      };
    }, d = (g, O) => {
      if (e.half) {
        var {
          offsetWidth: P
        } = O.target;
        O.offsetX <= Math.floor(P / 2) && (g -= 0.5);
      }
      $(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, R(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (g, O) => {
      var {
        readonly: P,
        disabled: y,
        onChange: b
      } = e;
      P || y || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, O), $(b, g), f());
    }, h = () => {
      $(e["onUpdate:modelValue"], 0), l();
    }, w = {
      reset: h,
      validate: v,
      resetValidation: l
    };
    return $(r, w), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: i,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: h,
      validate: v,
      resetValidation: l,
      toSizeUnit: he,
      toNumber: R,
      n: qa
    };
  }
});
Cd.render = f0;
const _r = Cd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var US = _r;
function c0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var m0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: c0
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  animation: {
    type: Boolean,
    default: !0
  }
}, p0 = (e) => (ka(""), e = e(), $a(), e), h0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, g0 = /* @__PURE__ */ p0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), y0 = [g0];
function b0(e, n) {
  return p(), T("svg", h0, y0);
}
var Sd = x({});
Sd.render = b0;
const w0 = Sd;
var C0 = (e) => (ka(""), e = e(), $a(), e), S0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, k0 = /* @__PURE__ */ C0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), $0 = [k0];
function T0(e, n) {
  return p(), T("svg", S0, $0);
}
var kd = x({});
kd.render = T0;
const O0 = kd;
var P0 = (e) => (ka(""), e = e(), $a(), e), V0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, E0 = /* @__PURE__ */ P0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), M0 = [E0];
function B0(e, n) {
  return p(), T("svg", V0, M0);
}
var $d = x({});
$d.render = B0;
const I0 = $d;
var {
  n: N0,
  classes: D0
} = ee("result");
function A0(e, n) {
  return p(), T(
    Pe,
    null,
    [A(
      "span",
      {
        class: m(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), A(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: W({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: W({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        ref: "circle",
        class: m(e.n("success-circle")),
        style: W({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        class: m(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), A(
      "span",
      {
        class: m(e.n("success-cover-right")),
        style: W({
          animationDuration: e.animation ? "4250ms" : "0ms"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    64
    /* STABLE_FRAGMENT */
  );
}
var Td = x({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: N0,
      classes: D0,
      toNumber: R
    };
  }
});
Td.render = A0;
const z0 = Td;
var L0 = (e) => (ka(""), e = e(), $a(), e), R0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, U0 = /* @__PURE__ */ L0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), Y0 = [U0];
function F0(e, n) {
  return p(), T("svg", R0, Y0);
}
var Od = x({});
Od.render = F0;
const H0 = Od;
var j0 = (e) => (ka(""), e = e(), $a(), e), W0 = {
  viewBox: "-4 -4 32 32"
}, G0 = /* @__PURE__ */ j0(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), q0 = [G0];
function K0(e, n) {
  return p(), T("svg", W0, q0);
}
var Pd = x({});
Pd.render = K0;
const X0 = Pd;
var {
  n: Z0,
  classes: J0
} = ee("result");
function Q0(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [H(e.$slots, "image", {}, () => [e.type ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: W({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), me(
          ja(e.type),
          {
            "border-size": e.borderSize,
            animation: e.animation
          },
          null,
          8,
          ["border-size", "animation"]
        ))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : _("v-if", !0)]), H(e.$slots, "title", {}, () => [e.title ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [H(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Vd = x({
  name: "VarResult",
  components: {
    Info: w0,
    Success: z0,
    Warning: I0,
    Error: O0,
    Question: H0,
    Empty: X0
  },
  props: m0,
  setup(e) {
    var n = Y(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = Y(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: Z0,
      classes: J0,
      toNumber: R,
      toPxNum: Ne,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
Vd.render = Q0;
const xr = Vd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var YS = xr;
function _0(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function x0(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var e1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: _0
  },
  align: {
    type: String,
    default: "flex-start",
    validator: x0
  },
  onClick: F()
}, {
  n: n1,
  classes: r1
} = ee("row");
function a1(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      style: W({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ed = x({
  name: "VarRow",
  props: e1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = wm(), t = Y(() => {
      var s = Ne(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      $(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(i), {
      n: n1,
      classes: r1,
      average: t,
      handleClick: l,
      padStartFlex: wt
    };
  }
});
Ed.render = a1;
const ea = Ed;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var FS = ea;
function t1(e) {
  return ["left", "right", "center"].includes(e);
}
var o1 = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: !1
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left",
    validator: t1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: F(),
  onBlur: F(),
  onClick: F(),
  onClear: F(),
  onClose: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: ao,
  classes: i1
} = ee("select"), l1 = {
  key: 1
};
function s1(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), o = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: W({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [re(
          t,
          {
            "var-select-cover": "",
            class: m(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (l) => e.isFocus = l),
            onClose: e.handleBlur
          },
          {
            menu: ve(() => [A(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [H(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [A(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: W({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? _("v-if", !0) : H(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), T(
                  Pe,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), T(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(p(!0), T(
                      Pe,
                      null,
                      Ie(e.labels, (l) => (p(), me(
                        r,
                        {
                          class: m(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: l,
                          onClick: n[0] || (n[0] = Vn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(l)
                        },
                        {
                          default: ve(() => [be(
                            ne(l),
                            1
                            /* TEXT */
                          )]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1032,
                        ["class", "type", "onClose"]
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))],
                    2
                    /* CLASS */
                  )) : (p(), T(
                    "div",
                    {
                      key: 1,
                      class: m(e.n("values"))
                    },
                    ne(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (p(), T(
                  "span",
                  l1,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), H(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [re(
                a,
                {
                  class: m(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )])],
              6
              /* CLASS, STYLE */
            ), A(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: W({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              ne(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )]),
            _: 3
            /* FORWARDED */
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "append-icon", {}, () => [e.clearable ? (p(), me(
          a,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : _("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: W({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: W({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0), re(
      o,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Md = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: ir,
    VarFormDetails: We
  },
  props: o1,
  setup(e) {
    var n = V(null), r = V(!1), a = Y(() => e.multiple), t = Y(() => e.focusColor), o = V(""), l = V([]), i = Y(() => Nn(e.modelValue)), s = V("0px"), u = V(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: h
    } = gb(), {
      errorMessage: w,
      validateWithTrigger: g,
      validate: O,
      // expose
      resetValidation: P
    } = bn(), y = V(null), b = () => {
      var {
        multiple: j,
        modelValue: J
      } = e;
      if (j) {
        var ae = J;
        l.value = ae.map(z);
      }
      !j && !Nn(J) && (o.value = z(J)), !j && Nn(J) && (o.value = "");
    }, E = (j) => {
      Me(() => {
        var {
          validateTrigger: J,
          rules: ae,
          modelValue: oe
        } = e;
        g(J, j, ae, oe);
      });
    }, k = (j) => {
      var {
        value: J,
        label: ae
      } = j;
      return J.value != null ? J.value : ae.value;
    }, z = (j) => {
      var J, ae, oe = c.find((ge) => {
        var {
          value: pe
        } = ge;
        return pe.value === j;
      });
      return oe || (oe = c.find((ge) => {
        var {
          label: pe
        } = ge;
        return pe.value === j;
      })), (J = (ae = oe) == null ? void 0 : ae.label.value) != null ? J : "";
    }, M = () => {
      var {
        hint: j,
        modelValue: J
      } = e;
      if (!j && !Nn(J))
        return ao("--placeholder-hidden");
      if (j && (!Nn(J) || r.value))
        return ao("--placeholder-hint");
    }, B = () => n.value && window.getComputedStyle(n.value).width || "0px", I = () => {
      var {
        disabled: j,
        readonly: J,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || j || J || (s.value = B(), u.value = Ne(e.offsetY), r.value = !0, $(ae), E("onFocus"));
    }, C = () => {
      var {
        disabled: j,
        readonly: J,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || j || J || ($(ae), E("onBlur"));
    }, S = (j) => {
      var {
        disabled: J,
        readonly: ae,
        multiple: oe,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = oe ? c.filter((He) => {
          var {
            selected: nn
          } = He;
          return nn.value;
        }).map(k) : k(j);
        $(e["onUpdate:modelValue"], pe), $(ge, pe), E("onChange"), !oe && (r.value = !1);
      }
    }, N = () => {
      var {
        disabled: j,
        readonly: J,
        multiple: ae,
        clearable: oe,
        onClear: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || j || J || !oe)) {
        var pe = ae ? [] : void 0;
        $(e["onUpdate:modelValue"], pe), $(ge, pe), E("onClear");
      }
    }, K = (j) => {
      var {
        disabled: J,
        onClick: ae
      } = e;
      v != null && v.disabled.value || J || ($(ae, j), E("onClick"));
    }, L = (j) => {
      var {
        disabled: J,
        readonly: ae,
        modelValue: oe,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = oe, He = c.find((sn) => {
          var {
            label: Le
          } = sn;
          return Le.value === j;
        }), nn = pe.filter((sn) => {
          var Le;
          return sn !== ((Le = He.value.value) != null ? Le : He.label.value);
        });
        $(e["onUpdate:modelValue"], nn), $(ge, nn), E("onClose");
      }
    }, U = () => {
      var {
        multiple: j,
        modelValue: J
      } = e;
      if (j) {
        var ae = J;
        c.forEach((oe) => oe.sync(ae.includes(k(oe))));
      } else
        c.forEach((oe) => oe.sync(J === k(oe)));
      b();
    }, Q = () => {
      s.value = B(), u.value = Ne(e.offsetY), r.value = !0;
    }, G = () => {
      r.value = !1;
    }, X = () => O(e.rules, e.modelValue), D = () => {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    le(() => e.multiple, () => {
      var {
        multiple: j,
        modelValue: J
      } = e;
      if (j && !we(J))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, U, {
      deep: !0
    }), le(() => f.value, U);
    var Z = {
      wrapWidth: Y(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: S,
      reset: D,
      validate: X,
      resetValidation: P
    };
    return h(Z), $(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: w,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: y,
      n: ao,
      classes: i1,
      computePlaceholderState: M,
      handleFocus: I,
      handleBlur: C,
      handleClear: N,
      handleClick: K,
      handleClose: L,
      reset: D,
      validate: X,
      resetValidation: P,
      focus: Q,
      blur: G
    };
  }
});
Md.render = s1;
const na = Md;
na.install = function(e) {
  e.component(na.name, na);
};
var HS = na, u1 = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: {
    type: Boolean,
    default: !1
  },
  card: {
    type: Boolean,
    default: !1
  },
  avatar: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: d1,
  classes: v1
} = ee("skeleton");
function f1(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [H(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), T(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: W({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [A(
          "div",
          {
            class: m(e.n("--animation"))
          },
          null,
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), T(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: W({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [A(
            "div",
            {
              class: m(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), T(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (p(), T(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: W({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [A(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
              /* CLASS */
            )],
            6
            /* CLASS, STYLE */
          )) : _("v-if", !0), (p(!0), T(
            Pe,
            null,
            Ie(e.toNumber(e.rows), (r, a) => (p(), T(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: W({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )],
              6
              /* CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.loading && e.fullscreen ? (p(), T(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: W({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [A(
        "div",
        {
          class: m(e.n("--animation"))
        },
        null,
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Bd = x({
  name: "VarSkeleton",
  props: u1,
  setup() {
    return {
      n: d1,
      classes: v1,
      toSizeUnit: he,
      toNumber: R
    };
  }
});
Bd.render = f1;
const ra = Bd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var jS = ra;
function c1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Be;
(function(e) {
  e.First = "1", e.Second = "2";
})(Be || (Be = {}));
var m1 = {
  // 当前进度百分比
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  // 步长
  step: {
    type: [Number, String],
    default: 1
  },
  // 是否开启双滑块模式
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: c1
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  // 是否只读
  readonly: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: F(),
  onStart: F(),
  onEnd: F(),
  "onUpdate:modelValue": F()
}, {
  n: Il,
  classes: p1
} = ee("slider"), h1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function g1(e, n) {
  var r = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("track"))
        },
        [A(
          "div",
          {
            class: m(e.n("track-background")),
            style: W({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: m(e.n("track-fill")),
            style: W(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), T(
        Pe,
        null,
        Ie(e.thumbList, (a) => (p(), T(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: W({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Vn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Vn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [H(e.$slots, "button", {
            currentValue: a.text
          }, () => [A(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: W({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: W({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: W({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [A(
              "span",
              null,
              ne(a.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          h1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), re(
      r,
      {
        "error-message": e.errorMessage,
        class: m(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
    /* CLASS */
  );
}
var Id = x({
  name: "VarSlider",
  components: {
    VarFormDetails: We
  },
  props: m1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = bn(), i = () => o(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = V(null), v = V(0), f = V(!1), c = Ee({
      [Be.First]: s(),
      [Be.Second]: s()
    }), h = Y(() => R(e.max) - R(e.min)), w = Y(() => v.value / h.value * R(e.step)), g = Y(() => {
      var {
        modelValue: G,
        range: X
      } = e, D = [];
      return X && we(G) ? D = [{
        value: E(G[0]),
        enumValue: Be.First,
        text: k(G[0])
      }, {
        value: E(G[1]),
        enumValue: Be.Second,
        text: k(G[1])
      }] : xe(G) && (D = [{
        value: E(G),
        enumValue: Be.First,
        text: k(G)
      }]), D;
    }), O = Y(() => {
      var {
        activeColor: G,
        range: X,
        modelValue: D
      } = e, Z = X && we(D) ? E(Math.min(D[0], D[1])) : 0, j = X && we(D) ? E(Math.max(D[0], D[1])) - Z : E(D);
      return {
        width: j + "%",
        left: Z + "%",
        background: G
      };
    }), P = Y(() => e.disabled || (r == null ? void 0 : r.disabled.value)), y = Y(() => e.readonly || (r == null ? void 0 : r.readonly.value)), b = (G) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[G].active, E = (G) => {
      var {
        min: X,
        max: D
      } = e;
      return G < R(X) ? 0 : G > R(D) ? 100 : (G - R(X)) / h.value * 100;
    }, k = (G) => {
      if (!xe(G))
        return 0;
      var X = G;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var D = parseInt("" + X, 10) === X;
      return D ? X : R(X.toPrecision(5));
    }, z = (G, X) => {
      var D = [], {
        step: Z,
        range: j,
        modelValue: J,
        onChange: ae,
        min: oe
      } = e, ge = R(Z), pe = Math.round(G / w.value), He = pe * ge + R(oe), nn = c[X].percentValue * ge + R(oe);
      if (c[X].percentValue = pe, j && we(J) && (D = X === Be.First ? [He, J[1]] : [J[0], He]), nn !== He) {
        var sn = j ? D.map((Le) => k(Le)) : k(He);
        $(ae, sn), $(e["onUpdate:modelValue"], sn), u();
      }
    }, M = (G) => {
      if (!e.range)
        return Be.First;
      var X = c[Be.First].percentValue * w.value, D = c[Be.Second].percentValue * w.value, Z = Math.abs(G - X), j = Math.abs(G - D);
      return Z <= j ? Be.First : Be.Second;
    }, B = (G, X) => {
      v.value || (v.value = d.value.offsetWidth), !(P.value || y.value) && ($(e.onStart), f.value = !0, c[X].startPosition = G.touches[0].clientX);
    }, I = (G, X) => {
      if (!(P.value || y.value || !f.value)) {
        var D = G.touches[0].clientX - c[X].startPosition + c[X].currentLeft;
        c[X].active = !0, D <= 0 ? D = 0 : D >= v.value && (D = v.value), z(D, X);
      }
    }, C = (G) => {
      var {
        range: X,
        modelValue: D,
        onEnd: Z,
        step: j,
        min: J
      } = e;
      if (!(P.value || y.value)) {
        var ae = [];
        c[G].currentLeft = c[G].percentValue * w.value, c[G].active = !1;
        var oe = c[G].percentValue * R(j) + R(J);
        X && we(D) && (ae = G === Be.First ? [oe, D[1]] : [D[0], oe]), $(Z, X ? ae : oe), f.value = !1;
      }
    }, S = (G) => {
      if (!(P.value || y.value) && !G.target.closest("." + Il("thumb"))) {
        var X = G.clientX - kv(G.currentTarget), D = M(X);
        z(X, D), C(D);
      }
    }, N = () => {
      var G = R(e.step);
      return isNaN(G) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : G < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, K = () => {
      var {
        range: G,
        modelValue: X
      } = e;
      return G && !we(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !G && we(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : G && we(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, L = function(G, X) {
      G === void 0 && (G = e.modelValue), X === void 0 && (X = R(e.step));
      var D = (Z) => {
        var {
          min: j,
          max: J
        } = e;
        return Z < R(j) ? 0 : Z > R(J) ? h.value / X : (Z - R(j)) / X;
      };
      e.range && we(G) ? (c[Be.First].percentValue = D(G[0]), c[Be.First].currentLeft = c[Be.First].percentValue * w.value, c[Be.Second].percentValue = D(G[1]), c[Be.Second].currentLeft = c[Be.Second].percentValue * w.value) : xe(G) && (c[Be.First].currentLeft = D(G) * w.value);
    }, U = () => {
      var G = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], G), l();
    }, Q = {
      reset: U,
      validate: i,
      resetValidation: l
    };
    return $(n, Q), le([() => e.modelValue, () => e.step], (G) => {
      var [X, D] = G;
      !N() || !K() || f.value || L(X, R(D));
    }), le(v, () => L()), ze(() => {
      !N() || !K() || (v.value = d.value.offsetWidth);
    }), {
      n: Il,
      classes: p1,
      Thumbs: Be,
      sliderEl: d,
      getFillStyle: O,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: Qe,
      toNumber: R,
      showLabel: b,
      start: B,
      move: I,
      end: C,
      click: S
    };
  }
});
Id.render = g1;
const aa = Id;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var WS = aa;
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qo.apply(this, arguments);
}
function y1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function b1(e) {
  return ki.includes(e);
}
var Nd = {
  type: {
    type: String,
    validator: b1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: y1
  },
  // content内容
  content: {
    type: String
  },
  // 为snackbar content添加自定义类名
  contentClass: {
    type: String
  },
  // snackbar 持续时间
  duration: {
    type: Number,
    default: 3e3
  },
  // 是否将消息条内容堆叠在操作（按钮）之上
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: Xe(xn, "type"),
  loadingSize: Xe(xn, "size"),
  loadingRadius: Xe(xn, "radius"),
  loadingColor: qo({}, Xe(xn, "color"), {
    default: "currentColor"
  }),
  // 是否禁止滚动穿透
  lockScroll: {
    type: Boolean,
    default: !1
  },
  // 控制组件可见还是隐藏
  show: {
    type: Boolean,
    default: !1
  },
  // teleport
  teleport: {
    type: String,
    default: "body"
  },
  // 是否禁止点击背景
  forbidClick: {
    type: Boolean,
    default: !1
  },
  // 打开时的回调函数
  onOpen: F(),
  // 打开动画结束时的回调
  onOpened: F(),
  // 关闭时的回调函数
  onClose: F(),
  // 关闭动画结束时的回调
  onClosed: F(),
  "onUpdate:show": F(),
  _update: {
    type: String
  }
}, {
  n: w1,
  classes: C1
} = ee("snackbar"), S1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function k1(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return Se((p(), T(
    "div",
    {
      class: m(e.n()),
      style: W({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: W({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [H(e.$slots, "default", {}, () => [be(
          ne(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (p(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (p(), me(
          a,
          {
            key: 1,
            type: e.loadingType,
            size: e.loadingSize,
            color: e.loadingColor,
            radius: e.loadingRadius
          },
          null,
          8,
          ["type", "size", "color", "radius"]
        )) : _("v-if", !0), H(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Ha, e.show]]);
}
var Dd = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: Nd,
  setup(e) {
    var n = V(null), {
      zIndex: r
    } = ot(() => e.show, 1);
    Ut(() => e.show, () => e.lockScroll);
    var a = Y(() => e.type === "loading" || e.forbidClick), t = Y(() => e.type ? S1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (l) => {
      l ? ($(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), $(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), ze(() => {
      e.show && ($(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: ki,
      n: w1,
      classes: C1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Dd.render = k1;
const Ad = Dd;
var {
  n: $1
} = ee("snackbar");
function T1(e, n) {
  var r = ie("var-snackbar-core");
  return p(), me(
    Fa,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [re(
      De,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [re(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ve(() => [H(e.$slots, "action")]),
            default: ve(() => [H(e.$slots, "default", {}, () => [be(
              ne(e.content),
              1
              /* TEXT */
            )])]),
            _: 3
            /* FORWARDED */
          },
          16,
          ["class"]
        )]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
var zd = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Ad
  },
  props: Nd,
  setup() {
    var {
      disabled: e
    } = oi();
    return {
      n: $1,
      disabled: e
    };
  }
});
zd.render = T1;
const ta = zd;
function rt() {
  return rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, rt.apply(this, arguments);
}
function O1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Nt(e);
}
var ki = ["loading", "success", "warning", "info", "error"], Nl = 0, Ko = !1, Ld, Ua = !1, Rd = {
  type: void 0,
  content: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
}, yn = Ee([]), $i = Rd, P1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, V1 = {
  setup() {
    return () => {
      var e = yn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ua && (a.position = "top");
        var l = Ua ? "relative" : "absolute", i = rt({
          position: l
        }, D1(a.position));
        return re(Ad, Ve(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return re(pv, Ve(P1, {
        style: {
          zIndex: dn.zIndex
        },
        onAfterEnter: E1,
        onAfterLeave: M1
      }), O1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, jn = function(e) {
  var n = I1(e), r = Ee(rt({}, $i, n));
  r.show = !0, Ko || (Ko = !0, Ld = Wa(V1).unmountInstance);
  var {
    length: a
  } = yn, t = {
    id: Nl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ua)
    B1(t);
  else {
    var o = "update-" + Nl;
    N1(r, o);
  }
  return {
    clear() {
      !Ua && yn.length ? yn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
ki.forEach((e) => {
  jn[e] = (n) => (ei(n) ? n.type = e : n = {
    content: n,
    type: e
  }, jn(n));
});
jn.install = function(e) {
  e.component(ta.name, ta);
};
jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ua && (yn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ua = e);
};
jn.clear = function() {
  yn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
jn.setDefaultOptions = function(e) {
  $i = e;
};
jn.resetDefaultOptions = function() {
  $i = Rd;
};
jn.Component = ta;
function E1(e) {
  var n = e.getAttribute("data-id"), r = yn.find((a) => a.id === R(n));
  r && $(r.reactiveSnackOptions.onOpened);
}
function M1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = yn.find((t) => t.id === R(n));
  r && (r.animationEnd = !0, $(r.reactiveSnackOptions.onClosed));
  var a = yn.every((t) => t.animationEnd);
  a && ($(Ld), yn = Ee([]), Ko = !1);
}
function B1(e) {
  yn.push(e);
}
function I1(e) {
  return e === void 0 && (e = {}), qe(e) ? {
    content: e
  } : e;
}
function N1(e, n) {
  var [r] = yn;
  r.reactiveSnackOptions = rt({}, r.reactiveSnackOptions, e), r._update = n;
}
function D1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ta.install = function(e) {
  e.component(ta.name, ta);
};
var GS = ta;
const Xo = jn;
var Ud = (e) => ["mini", "small", "normal", "large"].includes(e), A1 = (e) => Ud(e) || we(e) || xe(e) || qe(e), z1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), L1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), R1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: A1
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: z1
  },
  align: {
    type: String,
    validator: L1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function un(e) {
  return "calc(" + e + " / 2)";
}
function U1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = un(e) + " " + n + " " + un(e) + " 0" : i = un(e) + " 0" : t === "space-around" ? i = un(e) + " " + un(n) : t === "space-between" && (o === 0 ? i = un(e) + " " + un(n) + " " + un(e) + " 0" : o === l ? i = un(e) + " 0 " + un(e) + " " + un(n) : i = un(e) + " " + un(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: to,
  classes: Y1
} = ee("space");
const oa = x({
  name: "VarSpace",
  props: R1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : we(t) ? t.map(he) : [he(t), he(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = $(r.default)) != null ? t : [], f = Ud(d), [c, h] = a(d, f), w = (P) => {
        var y = [];
        return P.forEach((b) => {
          if (b.type !== hv) {
            if (b.type === Pe && we(b.children)) {
              b.children.forEach((E) => {
                y.push(E);
              });
              return;
            }
            y.push(b);
          }
        }), y;
      };
      v = w(v);
      var g = v.length - 1, O = v.map((P, y) => {
        var b = U1(c, h, {
          direction: u,
          justify: l,
          index: y,
          lastIndex: g
        });
        return re("div", {
          style: {
            margin: b
          }
        }, [P]);
      });
      return re("div", {
        class: Y1(to(), to("$--box"), [o, to("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: wt(l),
          alignItems: wt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + c + " / 2) 0" : void 0
        }
      }, [O]);
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
var qS = oa, F1 = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
}, Yd = Symbol("STEPS_BIND_STEP_KEY"), Fd = Symbol("STEPS_COUNT_STEP_KEY");
function H1() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Yd), {
    length: r
  } = vn(Fd);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function j1() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Yd), {
    index: r
  } = fn(Fd);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: W1,
  classes: G1
} = ee("step"), q1 = {
  key: 3
};
function K1(e, n) {
  var r = ie("var-icon");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [A(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: W({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (p(), me(
            r,
            {
              key: 0,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (p(), me(
            r,
            {
              key: 1,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (p(), me(
            r,
            {
              key: 2,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (p(), T(
            "span",
            q1,
            ne(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [H(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? _("v-if", !0) : (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
          style: W({
            margin: e.lineMargin
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ))],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Hd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: F1,
  setup() {
    var e = V(null), n = V(""), r = V(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = j1(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = Y(() => l.value === a.value), c = Y(() => a.value !== -1 && l.value > a.value), h = {
      index: a
    }, w = () => v(a.value), g = (O) => {
      d.value === "horizontal" && (e.value = O);
    };
    return o(h), le(i, (O) => {
      if (r.value = O - 1 === a.value, e.value) {
        var P = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + P + "px";
      }
    }), {
      n: W1,
      classes: G1,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: w,
      getRef: g
    };
  }
});
Hd.render = K1;
const ia = Hd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var KS = ia;
function X1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Z1 = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: X1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: F()
}, {
  n: J1
} = ee("steps");
function Q1(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n()),
      style: W({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var jd = x({
  name: "VarSteps",
  props: Z1,
  setup(e) {
    var n = Y(() => e.active), r = Y(() => e.activeColor), a = Y(() => e.inactiveColor), t = Y(() => e.direction), {
      length: o,
      bindStep: l
    } = H1(), i = (u) => {
      $(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: J1
    };
  }
});
jd.render = Q1;
const la = jd;
la.install = function(e) {
  e.component(la.name, la);
};
var XS = la, _1 = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: x1
} = ee("style-provider"), ew = x({
  name: "VarStyleProvider",
  props: _1,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => jl(e.tag, {
      class: x1(),
      style: xl(e.styleVars)
    }, $(r.default));
  }
});
const sa = ew;
var oo = [];
function at(e) {
  oo.forEach((r) => document.documentElement.style.removeProperty(r)), oo.length = 0;
  var n = xl(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), oo.push(a);
  });
}
at.Component = sa;
sa.install = function(e) {
  e.component(sa.name, sa);
};
at.install = function(e) {
  e.component(sa.name, sa);
};
var ZS = sa, nw = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: rw,
  classes: aw
} = ee("switch");
function tw(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: W(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: W(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Se((p(), T(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: W(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: W(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), me(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : _("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Wd = x({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: We
  },
  directives: {
    Ripple: Ae
  },
  props: nw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = bn(), i = () => o(e.rules, e.modelValue), s = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = Y(() => {
      var {
        size: h,
        modelValue: w,
        color: g,
        closeColor: O,
        loadingColor: P,
        activeValue: y
      } = e;
      return {
        handle: {
          width: Qe(h),
          height: Qe(h),
          backgroundColor: w === y ? g : O,
          color: P
        },
        ripple: {
          left: w === y ? Qe(h, 0.5) : "-" + Qe(h, 0.5),
          color: w === y ? g : O || "#999",
          width: Qe(h, 2),
          height: Qe(h, 2)
        },
        track: {
          height: Qe(h, 0.72),
          width: Qe(h, 1.9),
          borderRadius: Qe(h, 2 / 3),
          filter: w === y || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: w === y ? g : O
        },
        switch: {
          height: Qe(h, 1.2),
          width: Qe(h, 2)
        }
      };
    }), d = Y(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return Qe(h, 0.4);
    }), v = (h) => {
      var {
        onClick: w,
        onChange: g,
        disabled: O,
        loading: P,
        readonly: y,
        modelValue: b,
        activeValue: E,
        inactiveValue: k,
        "onUpdate:modelValue": z
      } = e;
      if ($(w, h), !(O || P || y || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var M = b === E ? k : E;
        $(g, M), $(z, M), s();
      }
    }, f = () => {
      $(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, c = {
      reset: f,
      validate: i,
      resetValidation: l
    };
    return $(n, c), {
      n: rw,
      classes: aw,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
Wd.render = tw;
const ua = Wd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var JS = ua, ow = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, Gd = Symbol("TABS_BIND_TAB_KEY"), qd = Symbol("TABS_COUNT_TAB_KEY");
function iw() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Gd), {
    length: r
  } = vn(qd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function lw() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Gd), {
    index: r
  } = fn(qd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: mt,
  classes: sw
} = ee("tab");
function uw(e, n) {
  var r = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: W({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var Kd = x({
  name: "VarTab",
  directives: {
    Ripple: Ae
  },
  props: ow,
  setup(e) {
    var n = V(null), r = Y(() => e.name), a = Y(() => e.disabled), t = Y(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = lw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: h
    } = l, w = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(w);
    var g = () => {
      var {
        disabled: y,
        name: b
      } = e;
      return y ? f.value : u.value === b || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, O = () => {
      var {
        disabled: y,
        name: b
      } = e;
      return y ? mt("$-tab--disabled") : u.value === b || u.value === (o == null ? void 0 : o.value) ? mt("$-tab--active") : mt("$-tab--inactive");
    }, P = (y) => {
      var {
        disabled: b,
        name: E,
        onClick: k
      } = e;
      b || ($(k, E ?? o.value, y), s(w));
    };
    return le(() => e.name, h), le(() => e.disabled, h), {
      n: mt,
      classes: sw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: g,
      computeColorClass: O,
      handleClick: P
    };
  }
});
Kd.render = uw;
const da = Kd;
da.install = function(e) {
  e.component(da.name, da);
};
var QS = da, Xd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Zd = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function dw() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Xd), {
    length: r
  } = vn(Zd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function vw() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Xd), {
    index: r
  } = fn(Zd);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var fw = {
  name: {
    type: [String, Number]
  }
}, {
  n: cw,
  classes: mw
} = ee("tab-item");
function pw(e, n) {
  var r = ie("var-swipe-item");
  return p(), me(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? H(e.$slots, "default", {
        key: 0
      }) : _("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var Jd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Un
  },
  props: fw,
  setup(e) {
    var n = V(!1), r = V(!1), a = Y(() => e.name), {
      index: t,
      bindTabsItems: o
    } = vw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: cw,
      classes: mw,
      current: n,
      initSlot: r
    };
  }
});
Jd.render = pw;
const va = Jd;
va.install = function(e) {
  e.component(va.name, va);
};
var _S = va, hw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: gw,
  classes: yw
} = ee("table");
function bw(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: m(e.n("main"))
      },
      [A(
        "table",
        {
          class: m(e.n("table")),
          style: W({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [H(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [H(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Qd = x({
  name: "VarTable",
  props: hw,
  setup() {
    return {
      toSizeUnit: he,
      n: gw,
      classes: yw
    };
  }
});
Qd.render = bw;
const fa = Qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var xS = fa;
function Dl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ww = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Dl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Dl
  },
  fixedBottom: {
    type: Boolean,
    default: !1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Xe(bt, "cssMode"),
  stickyZIndex: Xe(bt, "zIndex"),
  offsetTop: Xe(bt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: F(),
  onChange: F(),
  "onUpdate:active": F()
};
function Al(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Al(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Al(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Cw,
  classes: Sw
} = ee("tabs");
function kw(e, n) {
  return p(), me(
    ja(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [A(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [H(e.$slots, "default"), A(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: W({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["css-mode", "offset-top", "z-index"]
  );
}
var _d = x({
  name: "VarTabs",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: ww,
  setup(e) {
    var n = V("0px"), r = V("0px"), a = V("0px"), t = V("0px"), o = V(!1), l = V(null), i = Y(() => e.active), s = Y(() => e.activeColor), u = Y(() => e.inactiveColor), d = Y(() => e.disabledColor), v = Y(() => e.itemDirection), f = V(null), {
      tabList: c,
      bindTabList: h,
      length: w
    } = iw(), g = (I) => {
      var C, S = (C = I.name.value) != null ? C : I.index.value, {
        active: N,
        onChange: K,
        onClick: L
      } = e;
      $(e["onUpdate:active"], S), $(L, S), S !== N && $(K, S);
    }, O = () => c.find((I) => {
      var {
        name: C
      } = I;
      return e.active === C.value;
    }), P = (I) => c.find((C) => {
      var {
        index: S
      } = C;
      return (I ?? e.active) === S.value;
    }), y = () => {
      if (w.value !== 0) {
        var {
          active: I
        } = e;
        if (xe(I)) {
          var C = I > w.value - 1 ? w.value - 1 : 0;
          return $(e["onUpdate:active"], C), P(C);
        }
      }
    }, b = () => {
      o.value = c.length >= 5;
    }, E = (I) => {
      var {
        element: C
      } = I, S = C.value;
      S && (e.layoutDirection === "horizontal" ? (n.value = S.offsetWidth + "px", a.value = S.offsetLeft + "px") : (r.value = S.offsetHeight + "px", t.value = S.offsetTop + "px"));
    }, k = (I) => {
      var {
        element: C
      } = I;
      if (o.value) {
        var S = l.value, N = C.value;
        if (e.layoutDirection === "horizontal") {
          var K = N.offsetLeft + N.offsetWidth / 2 - S.offsetWidth / 2;
          Qa(S, {
            left: K,
            animation: lo
          });
        } else {
          var L = N.offsetTop + N.offsetHeight / 2 - S.offsetHeight / 2;
          Qa(S, {
            top: L,
            animation: lo
          });
        }
      }
    }, z = () => {
      var I = O() || P() || y();
      !I || I.disabled.value || (b(), E(I), k(I));
    }, M = /* @__PURE__ */ function() {
      var I = zl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), B = {
      active: i,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: z,
      onTabClick: g
    };
    return h(B), le(() => w.value, /* @__PURE__ */ zl(function* () {
      yield En(), z();
    })), le(() => e.active, z), ze(() => window.addEventListener("resize", z)), pr(() => window.removeEventListener("resize", z)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: l,
      Transition: De,
      toSizeUnit: he,
      n: Cw,
      classes: Sw,
      resize: z,
      resizeSticky: M
    };
  }
});
_d.render = kw;
const ca = _d;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var ek = ca, $w = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !1
  },
  "onUpdate:active": F()
};
function Ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Tw(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ll(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ow
} = ee("tabs-items");
function Pw(e, n) {
  var r = ie("var-swipe");
  return p(), me(
    r,
    {
      class: m(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: ve(() => [H(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var xd = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: Rn
  },
  props: $w,
  setup(e) {
    var n = V(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = dw(), o = (f) => r.find((c) => {
      var {
        name: h
      } = c;
      return f === h.value;
    }), l = (f) => r.find((c) => {
      var {
        index: h
      } = c;
      return f === h.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var c, h = i(f);
      h && (r.forEach((w) => {
        var {
          setCurrent: g
        } = w;
        return g(!1);
      }), h.setCurrent(!0), (c = n.value) == null || c.to(h.index.value));
    }, u = (f) => {
      var c, h = r.find((g) => {
        var {
          index: O
        } = g;
        return O.value === f;
      }), w = (c = h.name.value) != null ? c : h.index.value;
      $(e["onUpdate:active"], w);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ Tw(function* () {
      yield En(), s(e.active);
    })), {
      swipe: n,
      n: Ow,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
xd.render = Pw;
const ma = xd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var nk = ma;
const Vw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Ew = {
  "--badge-default-color": "#555"
}, Mw = {
  "--button-default-color": "#303030"
}, Bw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Iw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Nw = {
  "--checkbox-unchecked-color": "#fff"
}, Dw = {
  "--chip-default-color": "#555"
}, Aw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, zw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Lw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, Rw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Uw = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, Yw = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Fw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, Hw = {
  "--popup-content-background-color": "#1e1e1e"
}, jw = {
  "--pull-refresh-background": "#303030"
}, Ww = {
  "--radio-unchecked-color": "#fff"
}, Gw = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, qw = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, Kw = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, Xw = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, Zw = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, Jw = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, Qw = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, _w = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, xw = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, eC = {
  "--tabs-background": "#1e1e1e"
}, nC = {
  "--app-bar-color": "#272727"
}, rC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, aC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, tC = {
  "--menu-background-color": "#272727"
}, oC = {
  "--breadcrumb-inactive-color": "#aaa"
}, iC = {
  "--paper-background": "#303030"
}, lC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Zo.apply(this, arguments);
}
const sC = Zo({
  // common
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, Mw, Iw, Bw, _w, zw, Kw, eC, Jw, Hw, Lw, Vw, Dw, Ew, xw, Aw, jw, Zw, Xw, Yw, Qw, Uw, qw, Ww, Nw, Rw, Fw, nC, rC, aC, tC, Gw, oC, iC, lC);
var uC = {
  dark: sC
}, rk = null;
const Jo = uC;
var pn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Rl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function dC(e) {
  return ["ampm", "24hr"].includes(e);
}
var vC = {
  modelValue: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: "ampm",
    validator: dC
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  "onUpdate:modelValue": F(),
  onChange: F()
}, ev = (e, n) => e === "24hr" || n === "am", Ti = (e, n, r) => {
  var a = pn.findIndex((o) => R(o) === R(r)), t = ev(e, n) ? r : _e[a];
  return {
    hourStr: t,
    hourNum: R(t)
  };
}, an = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: R(n),
    minute: R(r),
    second: R(a)
  };
}, nv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: l,
    max: i,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Ti(t, o, l), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: h,
      minute: w
    } = an(i);
    f = h === v && a > w;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: O
    } = an(s);
    f = g === v && a < O;
  }
  if (i && s) {
    var {
      hour: P,
      minute: y
    } = an(i), {
      hour: b,
      minute: E
    } = an(s);
    f = b === v && a < E || P === v && a > y;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, rv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: l,
    minute: i,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Ti(t, o, l), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: w,
      minute: g,
      second: O
    } = an(s);
    c = w === f && g < i || g === i && a > O;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: y,
      second: b
    } = an(u);
    c = P === f && y > i || y === i && a > b;
  }
  if (s && u) {
    var {
      hour: E,
      minute: k,
      second: z
    } = an(s), {
      hour: M,
      minute: B,
      second: I
    } = an(u);
    c = E === f && k < i || M === f && B > i || E === f && k === i && a > z || M === f && B === i && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: fC,
  classes: cC
} = ee("time-picker");
function mC(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n("clock"))
    },
    [A(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: W(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), T(
      Pe,
      null,
      Ie(e.timeScales, (r, a) => (p(), T(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: W(e.getStyle(a, r, !1))
        },
        ne(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.hours24, (r, a) => (p(), T(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: W(e.getStyle(a, r, !0))
          },
          ne(r),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var av = x({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = V(null), t = V([]), o = V([]), l = Y(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = Y(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = Y(() => e.type === "hour" ? pn : Rl), u = (g, O) => {
      var P;
      g = (P = g) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var y = e.type === "minute" ? nv : rv, b = {
        time: R(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: R(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return O && e.type === "minute" && Reflect.deleteProperty(b, "minute"), y(b);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? _e[i.value] : s.value[i.value];
      return s.value === Rl ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, O) => O ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (ev(e.format, e.ampm))
          return t.value.includes(g);
        var O = pn.findIndex((P) => P === g);
        return o.value.includes(O);
      }
      return u(g, !0);
    }, c = (g, O, P) => {
      var y = 2 * Math.PI / 12 * g - Math.PI / 2, b = 50 * (1 + Math.cos(y)), E = 50 * (1 + Math.sin(y)), k = () => v(g, P) ? f(O) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: z,
        color: M
      } = k();
      return {
        left: b + "%",
        top: E + "%",
        backgroundColor: z,
        color: M
      };
    }, h = () => {
      var {
        width: g,
        height: O
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: O
      };
    }, w = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? pn : _e;
        return ga(g[i.value], 2, "0");
      }
    };
    return le([i, () => e.isInner], (g, O) => {
      var [P, y] = g, [b, E] = O, k = P === b && y === E;
      if (!(k || e.type !== "hour" || i.value === void 0)) {
        var z = y ? _e[i.value] : w(), M = e.useSeconds ? ":" + e.time.second : "", B = z + ":" + e.time.minute + M;
        e.preventNextUpdate || r("update", B), r("change-prevent-update");
      }
    }), le(() => e.rad, (g, O) => {
      if (!(e.type === "hour" || g === void 0 || O === void 0)) {
        var P = g / 6 >= 0 ? g / 6 : g / 6 + 60, y = O / 6 >= 0 ? O / 6 : O / 6 + 60;
        if (P !== y) {
          var b, {
            hourStr: E
          } = Ti(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = te().minute(P).format("mm"), z = e.useSeconds ? ":" + e.time.second : "";
            b = E + ":" + k + z;
          }
          if (e.type === "second") {
            var M = te().second(P).format("ss"), B = e.useSeconds ? ":" + M : "";
            b = E + ":" + e.time.minute + B;
          }
          r("update", b);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [O, P, y] = g;
      if (t.value = [], O && !P) {
        var {
          hour: b
        } = an(O), E = pn.filter((Q) => R(Q) > b), k = _e.filter((Q) => R(Q) > b);
        t.value = [...E, ...k];
      }
      if (!O && P) {
        var {
          hour: z
        } = an(P), M = pn.filter((Q) => R(Q) < z), B = _e.filter((Q) => R(Q) < z);
        t.value = [...M, ...B];
      }
      if (O && P) {
        var {
          hour: I
        } = an(O), {
          hour: C
        } = an(P), S = pn.filter((Q) => R(Q) < C || R(Q) > I), N = _e.filter((Q) => R(Q) < C || R(Q) > I);
        t.value = [...S, ...N];
      }
      if (y != null && y.hours) {
        var {
          hours: K
        } = y, L = pn.filter((Q) => !K(R(Q))), U = _e.filter((Q) => !K(R(Q)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...L, ...U])];
      }
      o.value = t.value.map((Q) => _e.findIndex((G) => Q === G)).filter((Q) => Q >= 0);
    }, {
      immediate: !0
    }), {
      n: fC,
      classes: cC,
      hours24: _e,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: h,
      getStyle: c,
      activeItemIndex: i
    };
  }
});
av.render = mC;
const pC = av;
var {
  n: hC,
  classes: gC
} = ee("time-picker"), yC = (e) => (ka(""), e = e(), $a(), e), bC = /* @__PURE__ */ yC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), wC = {
  key: 0
};
function CC(e, n) {
  var r = ie("clock");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: W({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ne(e.time.hour),
          3
          /* TEXT, CLASS */
        ), bC, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), T("span", wC, ":")) : _("v-if", !0), e.useSeconds ? (p(), T(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: m(e.n("body"))
      },
      [A(
        "div",
        {
          class: m(e.n("clock-container")),
          onTouchstart: n[5] || (n[5] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchmove: n[6] || (n[6] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchend: n[7] || (n[7] = function() {
            return e.end && e.end(...arguments);
          }),
          ref: "container"
        },
        [re(
          De,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), me(
              r,
              {
                key: e.type,
                ref: "inner",
                type: e.type,
                ampm: e.ampm,
                color: e.color,
                "is-inner": e.isInner,
                format: e.format,
                "allowed-time": e.allowedTime,
                rad: e.getRad,
                time: e.time,
                "prevent-next-update": e.isPreventNextUpdate,
                "use-seconds": e.useSeconds,
                max: e.max,
                min: e.min,
                onUpdate: e.update,
                onChangePreventUpdate: e.changePreventUpdate
              },
              null,
              8,
              ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]
            ))]),
            _: 1
            /* STABLE */
          },
          8,
          ["name"]
        )],
        34
        /* CLASS, HYDRATE_EVENTS */
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var tv = x({
  name: "VarTimePicker",
  components: {
    Clock: pC
  },
  props: vC,
  setup(e) {
    var n = V(null), r = V(null), a = V(null), t = V(!1), o = V(!1), l = V(!1), i = V(!1), s = V(!1), u = V(void 0), d = V(0), v = V(0), f = V("hour"), c = V("am"), h = V(!1), w = V(!1), g = V({
      hour: "00",
      minute: "00",
      second: "00"
    }), O = Ee({
      x: 0,
      y: 0
    }), P = Ee({
      x: [],
      y: []
    }), y = Y(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), b = (D) => {
      $(e["onUpdate:modelValue"], D), $(e.onChange, D);
    }, E = (D) => D * 57.29577951308232, k = (D) => {
      i.value = !1, w.value = !1, f.value = D;
    }, z = (D) => {
      var {
        disableHour: Z
      } = a.value, j = pn.findIndex((oe) => R(oe) === R(g.value.hour)), J = D === "am" ? pn : _e, ae = [...J.slice(j), ...J.slice(0, j)];
      return ae.find((oe, ge) => (o.value = ge !== 0, !Z.includes(oe)));
    }, M = (D) => {
      if (!e.readonly) {
        c.value = D;
        var Z = z(D);
        if (Z) {
          var j = e.useSeconds ? ":" + g.value.second : "", J = ga(Z, 2, "0") + ":" + g.value.minute + j;
          b(J);
        }
      }
    }, B = (D, Z) => {
      var j = D >= P.x[0] && D <= P.x[1], J = Z >= P.y[0] && Z <= P.y[1];
      return j && J;
    }, I = (D) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: j,
        minute: J,
        second: ae
      } = an(D);
      return {
        hour: te().hour(j).format(Z),
        minute: te().minute(J).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, C = (D) => {
      var Z = D / 30;
      return Z >= 0 ? Z : Z + 12;
    }, S = () => {
      var {
        width: D,
        height: Z
      } = a.value.getSize(), j = O.x - D / 2 - 8, J = O.x + D / 2 + 8, ae = O.y - Z / 2 - 8, oe = O.y + Z / 2 + 8;
      return {
        rangeXMin: j,
        rangeXMax: J,
        rangeYMin: ae,
        rangeYMax: oe
      };
    }, N = (D, Z, j) => {
      var {
        disableHour: J
      } = a.value;
      l.value = B(D, Z);
      var ae = Math.round(j / 30) * 30 + 90, oe = C(ae), ge = t.value ? pn[oe] : _e[oe];
      if (J.includes(ge) || (t.value = e.format === "24hr" ? B(D, Z) : !1), t.value === l.value) {
        var pe = t.value || c.value === "pm" ? _e[oe] : pn[oe];
        h.value = J.includes(pe), !h.value && (u.value = ae, i.value = !0);
      }
    }, K = (D) => {
      var {
        disableHour: Z
      } = a.value, j = Math.round(D / 6) * 6 + 90, J = j / 6 >= 0 ? j / 6 : j / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      w.value = nv(ae), !w.value && (d.value = j, s.value = !0);
    }, L = (D) => {
      var {
        disableHour: Z
      } = a.value, j = Math.round(D / 6) * 6 + 90, J = j / 6 >= 0 ? j / 6 : j / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        minute: R(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      rv(ae) || (v.value = j);
    }, U = () => {
      var {
        left: D,
        top: Z,
        width: j,
        height: J
      } = n.value.getBoundingClientRect();
      if (O.x = D + j / 2, O.y = Z + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: oe,
          rangeYMin: ge,
          rangeYMax: pe
        } = S();
        P.x = [ae, oe], P.y = [ge, pe];
      }
    }, Q = (D) => {
      if (D.preventDefault(), !e.readonly) {
        U();
        var {
          clientX: Z,
          clientY: j
        } = D.touches[0], J = Z - O.x, ae = j - O.y, oe = Math.round(E(Math.atan2(ae, J)));
        f.value === "hour" ? N(Z, j, oe) : f.value === "minute" ? K(oe) : L(oe);
      }
    }, G = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, X = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (D) => {
      if (D) {
        var {
          hour: Z,
          minute: j,
          second: J
        } = an(D), ae = te().hour(Z).format("hh"), oe = te().hour(Z).format("HH"), ge = te().minute(j).format("mm"), pe = te().second(J).format("ss");
        u.value = (ae === "12" ? 0 : R(ae)) * 30, d.value = R(ge) * 6, v.value = R(pe) * 6, g.value = I(D), e.format !== "24hr" && (c.value = ga("" + Z, 2, "0") === oe && _e.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: hC,
      classes: gC,
      getRad: y,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: Q,
      checkPanel: k,
      checkAmpm: M,
      end: G,
      update: b,
      changePreventUpdate: X
    };
  }
});
tv.render = CC;
const pa = tv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var ak = pa, SC = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  onBeforeRead: F(),
  onAfterRead: F(),
  onBeforeRemove: F(),
  onRemove: F(),
  onOversize: F(),
  "onUpdate:modelValue": F()
};
function Ul(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ul(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ul(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: kC,
  classes: $C
} = ee("uploader"), TC = 0, OC = ["onClick"], PC = ["onClick"], VC = ["src", "alt"], EC = ["multiple", "accept", "capture", "disabled"], MC = ["src"];
function BC(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), o = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.files, (l) => Se((p(), T(
          "div",
          {
            class: m(e.classes(e.n("file"), e.n("$-elevation--2"), [l.state === "loading", e.n("--loading")])),
            key: l.id,
            onClick: (i) => e.preview(l)
          },
          [A(
            "div",
            {
              class: m(e.n("file-name"))
            },
            ne(l.name || l.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), T(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Vn((i) => e.handleRemove(l), ["stop"])
            },
            [re(
              r,
              {
                class: m(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            PC
          )) : _("v-if", !0), l.cover ? (p(), T(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: W({
                objectFit: l.fit
              }),
              src: l.cover,
              alt: l.name
            },
            null,
            14,
            VC
          )) : _("v-if", !0), A(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [l.state === "success", e.n("--success")], [l.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          OC
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Se((p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [A(
          "input",
          {
            ref: "input",
            type: "file",
            class: m(e.n("action-input")),
            multiple: e.multiple,
            accept: e.accept,
            capture: e.capture,
            disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
            onChange: n[0] || (n[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          EC
        ), H(e.$slots, "default", {}, () => [re(
          r,
          {
            class: m(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
        /* CLASS */
      )), [[o, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : _("v-if", !0)],
      2
      /* CLASS */
    ), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), re(
      t,
      {
        class: m(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (l) => e.showPreview = l),
        onClosed: n[3] || (n[3] = (l) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var l, i;
          return [e.currentPreview && e.isHTMLSupportVideo((l = e.currentPreview) == null ? void 0 : l.url) ? (p(), T(
            "video",
            {
              key: 0,
              class: m(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (i = e.currentPreview) == null ? void 0 : i.url
            },
            null,
            10,
            MC
          )) : _("v-if", !0)];
        }),
        _: 1
        /* STABLE */
      },
      8,
      ["class", "show"]
    )],
    2
    /* CLASS */
  );
}
var ov = x({
  name: "VarUploader",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarPopup: hn,
    VarFormDetails: We
  },
  props: SC,
  setup(e) {
    var n = V(null), r = V(!1), a = V(null), t = Y(() => {
      var {
        maxlength: L,
        modelValue: {
          length: U
        }
      } = e;
      return xe(L) ? U + " / " + L : "";
    }), {
      form: o,
      bindForm: l
    } = wn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = Y(() => {
      var {
        modelValue: L,
        hideList: U
      } = e;
      return U ? [] : L;
    }), f = (L) => {
      var {
        disabled: U,
        readonly: Q,
        previewed: G
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || U || Q || !G)) {
        var {
          url: X
        } = L;
        if (qe(X) && Bi(X)) {
          Hn(X);
          return;
        }
        qe(X) && Ii(X) && (a.value = L, r.value = !0);
      }
    }, c = (L) => ({
      id: TC++,
      url: "",
      cover: "",
      name: L.name,
      file: L
    }), h = (L) => {
      var U = L.target, {
        files: Q
      } = U;
      return Array.from(Q);
    }, w = (L) => new Promise((U) => {
      var Q = new FileReader();
      Q.onload = () => {
        var G = Q.result;
        L.file.type.startsWith("image") && (L.cover = G), L.url = G, U(L);
      }, Q.readAsDataURL(L.file);
    }), g = (L) => L.map(w), O = (L) => {
      var {
        onBeforeRead: U
      } = e;
      return L.map((Q) => new Promise((G) => {
        U || G({
          valid: !0,
          varFile: Q
        });
        var X = $(U, Ee(Q));
        X = we(X) ? X : [X], Promise.all(X).then((D) => {
          G({
            valid: !D.some((Z) => !Z),
            varFile: Q
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var L = Yl(function* (U) {
        var {
          maxsize: Q,
          maxlength: G,
          modelValue: X,
          onOversize: D,
          onAfterRead: Z,
          readonly: j,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || j)) {
          var ae = (Le) => Le.filter((cn) => cn.file.size > R(Q) ? ($(D, Ee(cn)), !1) : !0), oe = (Le) => {
            var cn = Math.min(Le.length, R(G) - X.length);
            return Le.slice(0, cn);
          }, ge = h(U), pe = ge.map(c);
          pe = Q != null ? ae(pe) : pe, pe = G != null ? oe(pe) : pe;
          var He = yield Promise.all(g(pe)), nn = yield Promise.all(O(He)), sn = nn.filter((Le) => {
            var {
              valid: cn
            } = Le;
            return cn;
          }).map((Le) => {
            var {
              varFile: cn
            } = Le;
            return cn;
          });
          $(e["onUpdate:modelValue"], [...X, ...sn]), U.target.value = "", sn.forEach((Le) => $(Z, Ee(Le)));
        }
      });
      return function(Q) {
        return L.apply(this, arguments);
      };
    }(), y = /* @__PURE__ */ function() {
      var L = Yl(function* (U) {
        var {
          disabled: Q,
          readonly: G,
          modelValue: X,
          onBeforeRemove: D,
          onRemove: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || Q || G)) {
          if (D) {
            var j = $(D, Ee(U));
            if (j = we(j) ? j : [j], (yield Promise.all(j)).some((ae) => !ae))
              return;
          }
          var J = X.filter((ae) => ae !== U);
          $(Z, Ee(U)), I("onRemove"), $(e["onUpdate:modelValue"], J);
        }
      });
      return function(Q) {
        return L.apply(this, arguments);
      };
    }(), b = () => e.modelValue.filter((L) => L.state === "success"), E = () => e.modelValue.filter((L) => L.state === "error"), k = () => e.modelValue.filter((L) => L.state === "loading"), z = () => {
      n.value.click();
    }, M = () => {
      a.value = null, r.value = !1, Hn.close();
    }, B = {
      getSuccess: b,
      getError: E,
      getLoading: k
    }, I = (L) => {
      Me(() => {
        var {
          validateTrigger: U,
          rules: Q,
          modelValue: G
        } = e;
        s(U, L, Q, G, B);
      });
    }, C = !1, S = () => u(e.rules, e.modelValue, B), N = () => {
      C = !0, $(e["onUpdate:modelValue"], []), d();
    }, K = {
      validate: S,
      resetValidation: d,
      reset: N
    };
    return $(l, K), le(() => e.modelValue, () => {
      !C && I("onChange"), C = !1;
    }, {
      deep: !0
    }), {
      n: kC,
      classes: $C,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      isHTMLSupportVideo: Ii,
      isHTMLSupportImage: Bi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: P,
      handleRemove: y,
      getSuccess: b,
      getError: E,
      getLoading: k,
      validate: S,
      resetValidation: d,
      reset: N,
      chooseFile: z,
      closePreview: M
    };
  }
});
ov.render = BC;
const ha = ov;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var tk = ha;
const IC = "2.8.5";
function NC(e) {
  ya.install && e.use(ya), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), ar.install && e.use(ar), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Or.install && e.use(Or), en.install && e.use(en), Pr.install && e.use(Pr), Vr.install && e.use(Vr), tr.install && e.use(tr), or.install && e.use(or), Er.install && e.use(Er), ir.install && e.use(ir), Mr.install && e.use(Mr), Br.install && e.use(Br), Ir.install && e.use(Ir), dn.install && e.use(dn), Nr.install && e.use(Nr), Dr.install && e.use(Dr), zr.install && e.use(zr), ba.install && e.use(ba), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ln.install && e.use(Ln), We.install && e.use(We), Ho.install && e.use(Ho), $e.install && e.use($e), Ur.install && e.use(Ur), Hn.install && e.use(Hn), Yr.install && e.use(Yr), Fr.install && e.use(Fr), vr.install && e.use(vr), _a.install && e.use(_a), Hr.install && e.use(Hr), jr.install && e.use(jr), $n.install && e.use($n), Wo.install && e.use(Wo), mo.install && e.use(mo), Fn.install && e.use(Fn), Wr.install && e.use(Wr), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), Sa.install && e.use(Sa), hn.install && e.use(hn), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), Ae.install && e.use(Ae), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), Xo.install && e.use(Xo), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), Yn.install && e.use(Yn), at.install && e.use(at), Rn.install && e.use(Rn), Un.install && e.use(Un), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), Jo.install && e.use(Jo), pa.install && e.use(pa), ur.install && e.use(ur), ha.install && e.use(ha);
}
const ok = {
  version: IC,
  install: NC,
  ActionSheet: ya,
  AppBar: br,
  Avatar: wr,
  AvatarGroup: Cr,
  BackTop: Sr,
  Badge: ar,
  BottomNavigation: kr,
  BottomNavigationItem: $r,
  Breadcrumb: Tr,
  Breadcrumbs: Or,
  Button: en,
  ButtonGroup: Pr,
  Card: Vr,
  Cell: tr,
  Checkbox: or,
  CheckboxGroup: Er,
  Chip: ir,
  Col: Mr,
  Collapse: Br,
  CollapseItem: Ir,
  Context: dn,
  Countdown: Nr,
  Counter: Dr,
  DatePicker: zr,
  Dialog: ba,
  Divider: Lr,
  Ellipsis: Rr,
  Form: Ln,
  FormDetails: We,
  Hover: Ho,
  Icon: $e,
  Image: Ur,
  ImagePreview: Hn,
  IndexAnchor: Yr,
  IndexBar: Fr,
  Input: vr,
  Lazy: _a,
  Link: Hr,
  List: jr,
  Loading: $n,
  LoadingBar: Wo,
  Locale: mo,
  Menu: Fn,
  Option: Wr,
  Overlay: Gr,
  Pagination: qr,
  Paper: Kr,
  Picker: Sa,
  Popup: hn,
  Progress: Xr,
  PullRefresh: Zr,
  Radio: Jr,
  RadioGroup: Qr,
  Rate: _r,
  Result: xr,
  Ripple: Ae,
  Row: ea,
  Select: na,
  Skeleton: ra,
  Slider: aa,
  Snackbar: Xo,
  Space: oa,
  Step: ia,
  Steps: la,
  Sticky: Yn,
  StyleProvider: at,
  Swipe: Rn,
  SwipeItem: Un,
  Switch: ua,
  Tab: da,
  TabItem: va,
  Table: fa,
  Tabs: ca,
  TabsItems: ma,
  Themes: Jo,
  TimePicker: pa,
  Tooltip: ur,
  Uploader: ha
};
export {
  ya as ActionSheet,
  br as AppBar,
  wr as Avatar,
  Cr as AvatarGroup,
  Sr as BackTop,
  ar as Badge,
  kr as BottomNavigation,
  $r as BottomNavigationItem,
  Tr as Breadcrumb,
  Or as Breadcrumbs,
  en as Button,
  Pr as ButtonGroup,
  Vr as Card,
  tr as Cell,
  or as Checkbox,
  Er as CheckboxGroup,
  ir as Chip,
  Mr as Col,
  Br as Collapse,
  Ir as CollapseItem,
  dn as Context,
  Nr as Countdown,
  Dr as Counter,
  zr as DatePicker,
  ba as Dialog,
  Lr as Divider,
  Rr as Ellipsis,
  Ln as Form,
  We as FormDetails,
  Ho as Hover,
  $e as Icon,
  Ur as Image,
  Hn as ImagePreview,
  Yr as IndexAnchor,
  Fr as IndexBar,
  vr as Input,
  _a as Lazy,
  Hr as Link,
  jr as List,
  $n as Loading,
  Wo as LoadingBar,
  mo as Locale,
  Fn as Menu,
  Wr as Option,
  Gr as Overlay,
  go as PIXEL,
  qr as Pagination,
  Kr as Paper,
  Sa as Picker,
  hn as Popup,
  Xr as Progress,
  Zr as PullRefresh,
  Jr as Radio,
  Qr as RadioGroup,
  _r as Rate,
  xr as Result,
  Ae as Ripple,
  ea as Row,
  ki as SNACKBAR_TYPE,
  na as Select,
  ra as Skeleton,
  aa as Slider,
  Xo as Snackbar,
  oa as Space,
  ia as Step,
  la as Steps,
  Yn as Sticky,
  at as StyleProvider,
  Rn as Swipe,
  Un as SwipeItem,
  ua as Switch,
  da as Tab,
  va as TabItem,
  fa as Table,
  ca as Tabs,
  ma as TabsItems,
  Jo as Themes,
  pa as TimePicker,
  ur as Tooltip,
  ha as Uploader,
  YC as _ActionSheetComponent,
  FC as _AppBarComponent,
  jC as _AvatarComponent,
  WC as _AvatarGroupComponent,
  KC as _BackTopComponent,
  XC as _BadgeComponent,
  ZC as _BottomNavigationComponent,
  JC as _BottomNavigationItemComponent,
  QC as _BreadcrumbComponent,
  _C as _BreadcrumbsComponent,
  qC as _ButtonComponent,
  xC as _ButtonGroupComponent,
  eS as _CardComponent,
  nS as _CellComponent,
  aS as _CheckboxComponent,
  tS as _CheckboxGroupComponent,
  oS as _ChipComponent,
  iS as _ColComponent,
  lS as _CollapseComponent,
  sS as _CollapseItemComponent,
  AC as _ContextComponent,
  uS as _CountdownComponent,
  dS as _CounterComponent,
  vS as _DatePickerComponent,
  fS as _DialogComponent,
  cS as _DividerComponent,
  pS as _EllipsisComponent,
  hS as _FormComponent,
  rS as _FormDetailsComponent,
  gS as _HoverComponent,
  RC as _IconComponent,
  yS as _ImageComponent,
  CS as _ImagePreviewComponent,
  kS as _IndexAnchorComponent,
  $S as _IndexBarComponent,
  TS as _InputComponent,
  HC as _LazyComponent,
  OS as _LinkComponent,
  PS as _ListComponent,
  VS as _LoadingBarComponent,
  GC as _LoadingComponent,
  UC as _LocaleComponent,
  ES as _MenuComponent,
  MS as _OptionComponent,
  BS as _OverlayComponent,
  IS as _PaginationComponent,
  NS as _PaperComponent,
  DS as _PickerComponent,
  LC as _PopupComponent,
  AS as _ProgressComponent,
  zS as _PullRefreshComponent,
  LS as _RadioComponent,
  RS as _RadioGroupComponent,
  US as _RateComponent,
  YS as _ResultComponent,
  zC as _RippleComponent,
  FS as _RowComponent,
  HS as _SelectComponent,
  jS as _SkeletonComponent,
  WS as _SliderComponent,
  GS as _SnackbarComponent,
  qS as _SpaceComponent,
  KS as _StepComponent,
  XS as _StepsComponent,
  SS as _StickyComponent,
  ZS as _StyleProviderComponent,
  bS as _SwipeComponent,
  wS as _SwipeItemComponent,
  JS as _SwitchComponent,
  QS as _TabComponent,
  _S as _TabItemComponent,
  xS as _TableComponent,
  ek as _TabsComponent,
  nk as _TabsItemsComponent,
  rk as _ThemesComponent,
  ak as _TimePickerComponent,
  mS as _TooltipComponent,
  tk as _UploaderComponent,
  Zv as actionSheetProps,
  si as add,
  of as appBarProps,
  Bf as avatarGroupProps,
  Tf as avatarProps,
  xf as backTopProps,
  oc as badgeProps,
  pc as bottomNavigationItemProps,
  uc as bottomNavigationProps,
  Cc as breadcrumbProps,
  Pc as breadcrumbsProps,
  qf as buttonProps,
  Rc as cardProps,
  Wc as cellProps,
  lm as checkboxGroupProps,
  xc as checkboxProps,
  cm as chipProps,
  bm as colProps,
  Em as collapseItemProps,
  Tm as collapseProps,
  Nm as countdownProps,
  Ep as counterProps,
  Jp as datePickerProps,
  ok as default,
  Ue as defaultLazyOptions,
  ch as dialogProps,
  Ch as dividerProps,
  ss as enUS,
  Xc as formDetailsProps,
  Wg as formProps,
  is as iconProps,
  cs as imageCache,
  yy as imagePreviewProps,
  ny as imageProps,
  Vy as indexAnchorProps,
  Iy as indexBarProps,
  Ry as inputProps,
  NC as install,
  qy as linkProps,
  Jy as listProps,
  nb as loadingBarProps,
  xn as loadingProps,
  cb as menuProps,
  ds as merge,
  bb as optionProps,
  kb as overlayProps,
  je as pack,
  us as packs,
  Tb as paginationProps,
  Mb as paperProps,
  Db as pickerProps,
  tt as popupProps,
  Hb as progressProps,
  Zb as pullRefreshProps,
  i0 as radioGroupProps,
  xb as radioProps,
  d0 as rateProps,
  m0 as resultProps,
  e1 as rowProps,
  o1 as selectProps,
  u1 as skeletonProps,
  m1 as sliderProps,
  Nd as snackbarProps,
  R1 as spaceProps,
  F1 as stepProps,
  Z1 as stepsProps,
  bt as stickyProps,
  _1 as styleProviderProps,
  Ku as swipeProps,
  nw as switchProps,
  fw as tabItemProps,
  ow as tabProps,
  hw as tableProps,
  $w as tabsItemsProps,
  ww as tabsProps,
  vC as timePickerProps,
  Ng as tooltipProps,
  SC as uploaderProps,
  ui as use,
  li as useLocale,
  IC as version,
  ii as zhCN
};
