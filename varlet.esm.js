import { reactive as Ne, ref as M, onMounted as Fe, onUnmounted as rr, onActivated as Pi, onDeactivated as Mi, getCurrentInstance as Ha, provide as ul, computed as W, inject as dl, nextTick as Pe, createApp as Hs, onBeforeUnmount as Ei, h as vl, isVNode as gt, watch as ae, onBeforeMount as js, defineComponent as Q, createVNode as ee, Teleport as ja, Transition as Le, withDirectives as ke, vShow as Ga, mergeProps as Ve, openBlock as h, createBlock as me, resolveDynamicComponent as Pa, normalizeClass as c, normalizeStyle as K, resolveComponent as te, resolveDirective as Ge, withCtx as fe, createElementVNode as B, renderSlot as G, toDisplayString as _, createElementBlock as V, Fragment as Oe, renderList as De, createCommentVNode as J, onUpdated as Ii, createTextVNode as he, pushScopeId as Cr, popScopeId as kr, withModifiers as Nn, normalizeProps as fl, guardReactiveProps as Gs, vModelText as qs, toRefs as Ks, withKeys as xi, toRaw as _i, TransitionGroup as Xs, Comment as Zs } from "vue";
var cl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(cl);
const tn = Ne(cl), qe = (e) => typeof e == "string", jt = (e) => typeof e == "boolean", je = (e) => typeof e == "number", Ni = (e) => Object.prototype.toString.call(e) === "[object Object]", Js = (e) => typeof e == "object" && e !== null, Ce = (e) => Array.isArray(e), Qs = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Hn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : jt(e) ? Number(e) : e, yt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Di = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Bi = () => typeof window < "u", eo = (e) => [...new Set(e)], xs = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
var no = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ro = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), _s = (e) => {
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
      this.has(r) && yt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, ao = (e) => e, to = (e) => Math.pow(e, 3), ml = (e) => e < 0.5 ? to(e * 2) / 2 : 1 - to((1 - e) * 2) / 2, bt = (e, n) => e == null ? n : e, pl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, hr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function io(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function eu(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        io(i, a, t, o, l, "next", s);
      }
      function l(s) {
        io(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function nu(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function wt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ai(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function ru(e) {
  return Gt.apply(this, arguments);
}
function Gt() {
  return Gt = eu(function* (e) {
    yield Tn();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: i,
      innerHeight: o
    } = window, l = a <= i && t >= 0, s = n <= o && r >= 0;
    return l && s;
  }), Gt.apply(this, arguments);
}
function zt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ma(e) {
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
function au(e) {
  for (var n = [], r = e; r !== window; )
    r = Ma(r), n.push(r);
  return n;
}
var hl = (e) => qe(e) && e.endsWith("rem"), tu = (e) => qe(e) && e.endsWith("px") || je(e), iu = (e) => qe(e) && e.endsWith("%"), gl = (e) => qe(e) && e.endsWith("vw"), yl = (e) => qe(e) && e.endsWith("vh"), ou = (e) => qe(e) && e.startsWith("calc("), lu = (e) => qe(e) && e.startsWith("var("), Ie = (e) => {
  if (je(e))
    return e;
  if (tu(e))
    return +e.replace("px", "");
  if (gl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (yl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (hl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? z(e) : 0;
}, be = (e) => {
  if (e != null)
    return iu(e) || gl(e) || yl(e) || hl(e) || ou(e) || lu(e) ? e : Ie(e) + "px";
}, Ze = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = be(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function $n(e) {
  var n = pl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function su(e) {
  var n = pl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function St(e) {
  $n(() => {
    $n(e);
  });
}
function Tn() {
  return new Promise((e) => {
    $n(() => {
      $n(e);
    });
  });
}
function lt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = wt(e), s = Ai(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - o) / t;
      if (v < 1) {
        var f = l + (r - l) * i(v), m = s + (a - s) * i(v);
        e.scrollTo(m, f), $n(d);
      } else
        e.scrollTo(a, r), u();
    };
    $n(d);
  });
}
function bl(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + xs(a);
    return n[i] = t, n;
  }, {});
}
function uu() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var du = ["collect", "clear"];
function oo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function lo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        oo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        oo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function vu(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, st.apply(this, arguments);
}
function _e(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function fu(e) {
  var n = Hs(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Ea(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => vl(e, st({}, n, r));
    }
  }, {
    unmount: t
  } = fu(a);
  return {
    unmountInstance: t
  };
}
function cu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      gt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function Sn(e) {
  var n = Ne([]), r = Ha(), a = () => {
    var l = cu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    yt(n, l);
  };
  ul(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = W(() => n.length);
  return {
    length: o
  };
}
function Cn(e) {
  if (!wl(e))
    return {
      index: null
    };
  var n = dl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Ha();
  Fe(() => {
    Pe().then(() => r(i));
  }), rr(() => {
    Pe().then(() => a(i));
  });
  var o = W(() => t.indexOf(i));
  return {
    index: o
  };
}
function vn(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    yt(n, i);
  }, t = (i) => {
    ul(e, st({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function fn(e) {
  if (!wl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = dl(e), {
    collect: r,
    clear: a
  } = n, t = vu(n, du), i = (o) => {
    Fe(() => r(o)), Ei(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function wl(e) {
  var n = Ha();
  return e in n.provides;
}
function cn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = lo(function* (i, o, l) {
      if (!Ce(i) || !i.length)
        return !0;
      var s = yield Promise.all(i.map((u) => u(o, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(o, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = lo(function* (i, o, l, s, u) {
      i.includes(o) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(o, l, s, u, d) {
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
function mu(e) {
  Fe(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), rr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function zi() {
  var e = M(!1);
  return Pi(() => {
    e.value = !1;
  }), Mi(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
  var n = "var", r = n + "-" + e, a = (i) => i ? i[0] === "$" ? i.replace("$", n) : i.startsWith("--") ? "" + r + i : r + "__" + i : r, t = function() {
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return o.map((s) => {
      if (Ce(s)) {
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
function N(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (e)
    return e(...r);
}
function ut() {
  return ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ut.apply(this, arguments);
}
var {
  n: Sl
} = ne("ripple"), so = 250;
function pu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function hu(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: i
  } = e, o = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2)) / 2, l = o * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - o * 2) / 2, v = (i - o * 2) / 2, f = s - o, m = u - o;
  return {
    x: f,
    y: m,
    centerX: d,
    centerY: v,
    size: l
  };
}
function Cl(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: i,
        centerY: o,
        size: l
      } = hu(this, e), s = document.createElement("div");
      s.classList.add(Sl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), pu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function qt() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Sl());
    if (!!r.length) {
      var a = r[r.length - 1], t = so - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, so);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function kl() {
  var e = this._ripple;
  !uu() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function gu(e, n) {
  var r, a, t;
  e._ripple = ut({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : tn.touchmoveForbid,
    removeRipple: qt.bind(e)
  }), e.addEventListener("touchstart", Cl, {
    passive: !0
  }), e.addEventListener("touchmove", kl, {
    passive: !0
  }), e.addEventListener("dragstart", qt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function yu(e) {
  e.removeEventListener("touchstart", Cl), e.removeEventListener("touchmove", kl), e.removeEventListener("dragstart", qt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function bu(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : tn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = ut({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Ue = {
  mounted: gu,
  unmounted: yu,
  updated: bu,
  install(e) {
    e.directive("ripple", this);
  }
};
function wu(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var qa = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: wu
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
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  onClickOverlay: {
    type: Function
  },
  onRouteChange: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function $l() {
  var e = Object.keys(tn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Za(e) {
  tn.locks[e] = 1, $l();
}
function Ja(e) {
  delete tn.locks[e], $l();
}
function Ct(e, n) {
  var {
    uid: r
  } = Ha();
  n && ae(n, (a) => {
    a === !1 ? Ja(r) : a === !0 && e() === !0 && Za(r);
  }), ae(e, (a) => {
    n && n() === !1 || (a === !0 ? Za(r) : Ja(r));
  }), js(() => {
    n && n() === !1 || e() === !0 && Za(r);
  }), rr(() => {
    n && n() === !1 || e() === !0 && Ja(r);
  }), Pi(() => {
    n && n() === !1 || e() === !0 && Za(r);
  }), Mi(() => {
    n && n() === !1 || e() === !0 && Ja(r);
  });
}
function Ka(e, n) {
  var r = M(tn.zIndex);
  return ae(e, (a) => {
    a && (tn.zIndex += n, r.value = tn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Kt.apply(this, arguments);
}
function Su(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !gt(e);
}
var {
  n: Pn,
  classes: Lt
} = ne("popup");
const yn = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: qa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ka(() => e.show, 3), {
      disabled: i
    } = zi(), o = () => {
      var d, {
        closeOnClickOverlay: v,
        onClickOverlay: f
      } = e;
      f == null || f(), v && ((d = e["onUpdate:show"]) == null || d.call(e, !1));
    };
    Ct(() => e.show, () => e.lockScroll), ae(() => e.show, (d) => {
      var {
        onOpen: v,
        onClose: f
      } = e;
      d ? v == null || v() : f == null || f();
    }), mu(() => e.onRouteChange == null ? void 0 : e.onRouteChange());
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ee("div", {
        class: Lt(Pn("overlay"), d),
        style: Kt({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => ee("div", Ve({
      class: Lt(Pn("content"), Pn("--" + e.position), [e.defaultStyle, Pn("--content-background-color")], [e.defaultStyle, Pn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [r.default == null ? void 0 : r.default()]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: p,
        position: y
      } = e;
      return ee(Le, {
        name: Pn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(ee("div", {
          class: Lt(Pn("$--box"), Pn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && l(), ee(Le, {
          name: p || Pn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[Ga, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return ee(ja, {
          to: d,
          disabled: i.value
        }, Su(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
yn.install = function(e) {
  e.component(yn.name, yn);
};
var Tl = {
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
  onClick: {
    type: Function
  }
};
function uo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Cu(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        uo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        uo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: ku,
  classes: $u
} = ne("icon");
function Tu(e, n) {
  return h(), me(
    Pa(e.isURL(e.name) ? "img" : "i"),
    {
      class: c(e.classes(e.n(), e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: K({
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
const Te = Q({
  render: Tu,
  name: "VarIcon",
  props: Tl,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = Cu(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || z(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Pe(), setTimeout(() => {
          o != null && (n.value = i), r.value = !1;
        }, z(l));
      });
      return function(o, l) {
        return t.apply(this, arguments);
      };
    }();
    return ae(() => e.name, a, {
      immediate: !0
    }), {
      n: ku,
      classes: $u,
      nextName: n,
      shrinking: r,
      isURL: Qs,
      toNumber: z,
      toSizeUnit: be
    };
  }
});
Te.install = function(e) {
  e.component(Te.name, Te);
};
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Xt.apply(this, arguments);
}
var Ou = Xt({
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
  onSelect: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
}, _e(qa, [
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
  "onRouteChange"
]));
const Ol = {
  dialogTitle: "\u63D0\u793A",
  dialogConfirmButtonText: "\u786E\u8BA4",
  dialogCancelButtonText: "\u53D6\u6D88",
  actionSheetTitle: "\u8BF7\u9009\u62E9",
  listLoadingText: "\u52A0\u8F7D\u4E2D",
  listFinishedText: "\u6CA1\u6709\u66F4\u591A\u4E86",
  listErrorText: "\u52A0\u8F7D\u5931\u8D25",
  pickerTitle: "\u8BF7\u9009\u62E9",
  pickerConfirmButtonText: "\u786E\u8BA4",
  pickerCancelButtonText: "\u53D6\u6D88",
  datePickerMonthDict: {
    "01": {
      name: "\u4E00\u6708",
      abbr: "\u4E00\u6708"
    },
    "02": {
      name: "\u4E8C\u6708",
      abbr: "\u4E8C\u6708"
    },
    "03": {
      name: "\u4E09\u6708",
      abbr: "\u4E09\u6708"
    },
    "04": {
      name: "\u56DB\u6708",
      abbr: "\u56DB\u6708"
    },
    "05": {
      name: "\u4E94\u6708",
      abbr: "\u4E94\u6708"
    },
    "06": {
      name: "\u516D\u6708",
      abbr: "\u516D\u6708"
    },
    "07": {
      name: "\u4E03\u6708",
      abbr: "\u4E03\u6708"
    },
    "08": {
      name: "\u516B\u6708",
      abbr: "\u516B\u6708"
    },
    "09": {
      name: "\u4E5D\u6708",
      abbr: "\u4E5D\u6708"
    },
    10: {
      name: "\u5341\u6708",
      abbr: "\u5341\u6708"
    },
    11: {
      name: "\u5341\u4E00\u6708",
      abbr: "\u5341\u4E00\u6708"
    },
    12: {
      name: "\u5341\u4E8C\u6708",
      abbr: "\u5341\u4E8C\u6708"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "\u661F\u671F\u65E5",
      abbr: "\u65E5"
    },
    1: {
      name: "\u661F\u671F\u4E00",
      abbr: "\u4E00"
    },
    2: {
      name: "\u661F\u671F\u4E8C",
      abbr: "\u4E8C"
    },
    3: {
      name: "\u661F\u671F\u4E09",
      abbr: "\u4E09"
    },
    4: {
      name: "\u661F\u671F\u56DB",
      abbr: "\u56DB"
    },
    5: {
      name: "\u661F\u671F\u4E94",
      abbr: "\u4E94"
    },
    6: {
      name: "\u661F\u671F\u516D",
      abbr: "\u516D"
    }
  },
  datePickerSelected: "\u4E2A\u88AB\u9009\u62E9",
  paginationItem: "\u6761",
  paginationPage: "\u9875",
  paginationJump: "\u524D\u5F80"
}, Vu = {
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  actionSheetTitle: "Select One",
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
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
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Zt.apply(this, arguments);
}
function Vl() {
  var e = {}, n = M({}), r = (i, o) => {
    o.lang = i, e[i] = o;
  }, a = (i) => {
    if (!e[i])
      return console.warn("The " + i + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[i];
  }, t = (i, o) => {
    if (!e[i]) {
      console.warn("The " + i + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[i] = Zt({}, e[i], o), a(i);
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
  packs: Pu,
  pack: Ye,
  add: Pl,
  use: Ml,
  merge: Mu
} = Vl();
Pl("zh-CN", Ol);
Ml("zh-CN");
const Jt = {
  zhCN: Ol,
  enUS: Vu,
  packs: Pu,
  pack: Ye,
  add: Pl,
  use: Ml,
  merge: Mu,
  useLocale: Vl
};
var {
  n: Eu,
  classes: Iu
} = ne("action-sheet"), Nu = ["onClick"];
function Du(e, n) {
  var r = te("var-icon"), a = te("var-popup"), t = Ge("ripple");
  return h(), me(
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
      default: fe(() => [B(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [G(e.$slots, "title", {}, () => [B(
          "div",
          {
            class: c(e.n("title"))
          },
          _(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), G(e.$slots, "actions", {}, () => [(h(!0), V(
          Oe,
          null,
          De(e.actions, (i) => ke((h(), V(
            "div",
            {
              class: c(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: K({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (h(), me(
              r,
              {
                key: 0,
                class: c(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: i.icon,
                size: i.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : J("v-if", !0), B(
              "div",
              {
                class: c(e.n("action-name"))
              },
              _(i.name),
              3
            )],
            14,
            Nu
          )), [[t, {
            disabled: i.disabled
          }]])),
          128
        ))])],
        16
      )]),
      _: 3
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const or = Q({
  render: Du,
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: yn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Ou,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        N(o, t), i && N(e["onUpdate:show"], !1);
      }
    }, a = (t) => N(e["onUpdate:show"], t);
    return ae(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Eu,
      classes: Iu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ye,
      dt: bt,
      handleSelect: r
    };
  }
});
var Un;
function gr(e) {
  return Bi() ? new Promise((n) => {
    gr.close();
    var r = Ne(e);
    r.teleport = "body", Un = r;
    var {
      unmountInstance: a
    } = Ea(or, r, {
      onSelect: (t) => {
        r.onSelect == null || r.onSelect(t), n(t);
      },
      onClose: () => {
        r.onClose == null || r.onClose(), n("close");
      },
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Un === r && (Un = null);
      },
      onRouteChange: () => {
        a(), Un === r && (Un = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
gr.Component = or;
or.install = function(e) {
  e.component(or.name, or);
};
gr.close = () => {
  if (Un != null) {
    var e = Un;
    Un = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
gr.install = function(e) {
  e.component(or.name, or);
};
function Bu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Au = {
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
    validator: Bu
  },
  elevation: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  }
}, {
  n: zu,
  classes: Lu
} = ne("app-bar");
function Fu(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: K({
        background: e.color,
        color: e.textColor
      })
    },
    [B(
      "div",
      {
        class: c(e.n("left"))
      },
      [G(e.$slots, "left"), e.titlePosition === "left" ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.n("title")),
          style: K({
            paddingLeft: e.paddingLeft
          })
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.title),
          1
        )])],
        6
      )) : J("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      [G(e.$slots, "default", {}, () => [he(
        _(e.title),
        1
      )])],
      2
    )) : J("v-if", !0), B(
      "div",
      {
        class: c(e.n("right"))
      },
      [e.titlePosition === "right" ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.n("title")),
          style: K({
            paddingRight: e.paddingRight
          })
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.title),
          1
        )])],
        6
      )) : J("v-if", !0), G(e.$slots, "right")],
      2
    )],
    6
  );
}
const Nr = Q({
  render: Fu,
  name: "VarAppBar",
  props: Au,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Fe(i), Ii(i), {
      n: zu,
      classes: Lu,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
function Ru(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Uu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var jn = {
  type: {
    type: String,
    default: "circle",
    validator: Ru
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Uu
  },
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
  n: Yu,
  classes: Wu
} = ne("loading"), Hu = (e) => (Cr(""), e = e(), kr(), e), ju = /* @__PURE__ */ Hu(() => /* @__PURE__ */ B(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ B("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
)), Gu = [ju];
function qu(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [G(e.$slots, "default"), e.loading ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.isShow ? (h(), V(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [B(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Gu,
          6
        )],
        2
      )) : J("v-if", !0), (h(!0), V(
        Oe,
        null,
        De(e.loadingTypeDict, (r, a) => (h(), V(
          Oe,
          {
            key: a
          },
          [e.type === a ? (h(), V(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), V(
              Oe,
              null,
              De(r, (t) => (h(), V(
                "div",
                {
                  key: t + a,
                  style: K({
                    backgroundColor: e.color
                  }),
                  class: c(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
                },
                null,
                6
              ))),
              128
            ))],
            2
          )) : J("v-if", !0)],
          64
        ))),
        128
      )), e.$slots.description || e.description ? (h(), V(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: K({
            color: e.color
          })
        },
        [G(e.$slots, "description", {}, () => [he(
          _(e.description),
          1
        )])],
        6
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0)],
    2
  );
}
const kn = Q({
  render: qu,
  name: "VarLoading",
  props: jn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = W(() => N(r.default) ? e.loading : !0);
    return {
      n: Yu,
      classes: Wu,
      multiplySizeUnit: Ze,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
kn.install = function(e) {
  e.component(kn.name, kn);
};
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Qt.apply(this, arguments);
}
function Ku(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Xu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Zu = {
  type: {
    type: String,
    default: "default",
    validator: Ku
  },
  size: {
    type: String,
    default: "normal",
    validator: Xu
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
  loadingType: _e(jn, "type"),
  loadingSize: _e(jn, "size"),
  loadingColor: Qt({}, _e(jn, "color"), {
    default: "currentColor"
  }),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, {
  n: Ju,
  classes: Qu
} = ne("button"), xu = ["disabled"];
function _u(e, n) {
  var r = te("var-loading"), a = Ge("ripple");
  return ke((h(), V(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: K({
        color: e.textColor,
        background: e.color
      }),
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (h(), me(
      r,
      {
        key: 0,
        class: c(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : J("v-if", !0), B(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [G(e.$slots, "default")],
      2
    )],
    46,
    xu
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const nn = Q({
  render: _u,
  name: "VarButton",
  components: {
    VarLoading: kn
  },
  directives: {
    Ripple: Ue
  },
  props: Zu,
  setup(e) {
    var n = M(!1), r = (i) => {
      e.autoLoading && (n.value = !0, Promise.resolve(i).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, a = (i) => {
      var {
        loading: o,
        disabled: l,
        onClick: s
      } = e;
      !s || o || l || n.value || r(s(i));
    }, t = (i) => {
      var {
        loading: o,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || o || l || n.value || r(s(i));
    };
    return {
      n: Ju,
      classes: Qu,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
nn.install = function(e) {
  e.component(nn.name, nn);
};
var ed = {
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
  onClick: {
    type: Function
  }
}, {
  n: nd,
  classes: rd
} = ne("back-top");
function ad(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), me(
    ja,
    {
      to: "body",
      disabled: e.disabled
    },
    [B(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Nn(function() {
          return e.click && e.click(...arguments);
        }, ["stop"]))
      }),
      [G(e.$slots, "default", {}, () => [ee(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: fe(() => [ee(r, {
          name: "chevron-up"
        })]),
        _: 1
      })])],
      16
    )],
    8,
    ["disabled"]
  );
}
const Dr = Q({
  render: ad,
  name: "VarBackTop",
  components: {
    VarButton: nn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: ed,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, i = (u) => {
      N(e.onClick, u);
      var d = Ai(t);
      lt(t, {
        left: d,
        duration: e.duration,
        animation: ml
      });
    }, o = () => {
      n.value = wt(t) >= Ie(e.visibilityHeight);
    }, l = Di(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (qe(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (Js(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Fe(() => {
      t = e.target ? s() : Ma(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Ei(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: be,
      n: nd,
      classes: rd,
      click: i
    };
  }
});
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
function td(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function id(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var od = {
  type: {
    type: String,
    default: "default",
    validator: td
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  dot: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: {
    type: [String, Number]
  },
  color: {
    type: String
  },
  position: {
    type: String,
    default: "right-top",
    validator: id
  },
  icon: {
    type: String
  }
}, {
  n: Bn,
  classes: ld
} = ne("badge"), sd = {
  key: 1
};
function ud(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [ee(
      Le,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: fe(() => [ke(B(
          "span",
          Ve(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (h(), me(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (h(), V(
            "span",
            sd,
            _(e.values),
            1
          ))],
          16
        ), [[Ga, !e.hidden]])]),
        _: 1
      },
      8,
      ["name"]
    ), G(e.$slots, "default")],
    2
  );
}
const lr = Q({
  render: ud,
  name: "VarBadge",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: od,
  setup(e, n) {
    var {
      slots: r
    } = n, a = W(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Bn("position") + " " + Bn("--" + l), v = s ? Bn("dot") : null, f = i(), m = u ? Bn("icon") : null;
      return [Bn("--" + o), d, v, f, m];
    }), t = W(() => {
      var {
        dot: o,
        value: l,
        maxValue: s
      } = e;
      return o ? "" : l !== void 0 && s !== void 0 && z(l) > s ? s + "+" : l;
    }), i = () => {
      var {
        position: o,
        dot: l
      } = e;
      if (l && o.includes("right"))
        return Bn("dot--right");
      if (l && o.includes("left"))
        return Bn("dot--left");
    };
    return {
      n: Bn,
      classes: ld,
      values: t,
      contentClass: a
    };
  }
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
var dd = {
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
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  },
  onBeforeChange: {
    type: Function
  },
  onFabClick: {
    type: Function
  },
  fabProps: {
    type: Object
  }
}, El = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Il = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function vd() {
  var {
    childProviders: e,
    bindChildren: n
  } = vn(El), {
    length: r
  } = Sn(Il);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xt.apply(this, arguments);
}
var {
  n: fd,
  classes: cd
} = ne("bottom-navigation"), {
  n: kt
} = ne("bottom-navigation-item"), vo = kt("--right-half-space"), fo = kt("--left-half-space"), co = kt("--right-space"), md = {
  type: "primary"
};
function pd(e, n) {
  var r = te("var-button");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [G(e.$slots, "default"), e.$slots.fab ? (h(), me(
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
        default: fe(() => [G(e.$slots, "fab")]),
        _: 3
      },
      16,
      ["class", "onClick"]
    )) : J("v-if", !0)],
    6
  );
}
const Br = Q({
  render: pd,
  name: "VarBottomNavigation",
  components: {
    VarButton: nn
  },
  props: dd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = vd(), v = () => {
      s.value === 0 || f() || m() || p();
    }, f = () => u.find((k) => {
      var {
        name: A
      } = k;
      return t.value === A.value;
    }), m = () => u.find((k) => {
      var {
        index: A
      } = k;
      return t.value === A.value;
    }), p = () => {
      !je(t.value) || (t.value < 0 ? N(e["onUpdate:active"], 0) : t.value > s.value - 1 && N(e["onUpdate:active"], s.value - 1));
    }, y = (k) => {
      t.value !== k && (e.onBeforeChange ? w(k) : O(k));
    }, w = (k) => {
      Promise.resolve(N(e.onBeforeChange, k)).then((A) => A && O(k));
    }, O = (k) => {
      N(e["onUpdate:active"], k), N(e.onChange, k);
    }, T = () => {
      var k = P();
      k.forEach((A) => {
        A.classList.remove(vo, fo, co);
      });
    }, S = (k) => {
      var A = P(), I = A.length, C = k % 2 === 0;
      A.forEach(($, L) => {
        g(C, $, L, I);
      });
    }, g = (k, A, I, C) => {
      var $ = I === C - 1;
      if (!k && $) {
        A.classList.add(co);
        return;
      }
      var L = I === C / 2 - 1, Y = I === C / 2;
      L ? A.classList.add(vo) : Y && A.classList.add(fo);
    }, P = () => Array.from(a.value.querySelectorAll("." + kt())), b = () => {
      N(e.onFabClick);
    }, D = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: y
    };
    return d(D), ae(() => s.value, v), ae(() => e.fabProps, (k) => {
      l.value = xt({}, md, k);
    }, {
      immediate: !0,
      deep: !0
    }), Fe(() => {
      !r.fab || S(s.value);
    }), Ii(() => {
      T(), r.fab && S(s.value);
    }), {
      n: fd,
      classes: cd,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: b,
      fabProps: l
    };
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
var hd = {
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
  onClick: {
    type: Function
  }
};
function gd() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(El), {
    index: r
  } = Cn(Il);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: yd,
  classes: bd
} = ne("bottom-navigation-item"), wd = {
  type: "danger",
  dot: !0
};
function Sd(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Ge("ripple");
  return ke((h(), V(
    "button",
    {
      class: c(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), me(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: c(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : J("v-if", !0), G(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), me(
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
    )) : J("v-if", !0), B(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? J("v-if", !0) : (h(), V(
        Oe,
        {
          key: 0
        },
        [he(
          _(e.label),
          1
        )],
        2112
      )), G(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const Ar = Q({
  render: Sd,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: lr,
    VarIcon: Te
  },
  directives: {
    Ripple: Ue
  },
  props: hd,
  setup(e) {
    var n = W(() => e.name), r = W(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = gd(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var m, p = (m = n.value) != null ? m : t.value;
      N(e.onClick, p), N(i.onToggle, p);
    };
    return o(d), ae(() => r.value, (m) => {
      a.value = m === !0 ? wd : r.value;
    }, {
      immediate: !0
    }), {
      n: yd,
      classes: bd,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
function Cd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var kd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Cd,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  "onUpdate:floating": {
    type: Function
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
  onClick: {
    type: Function
  }
};
function mo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function po(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        mo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        mo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: $d,
  classes: Td
} = ne("card"), Od = 500, Vd = ["src", "alt"];
function Pd(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Ge("ripple");
  return ke((h(), V(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [B(
      "div",
      {
        ref: "cardFloater",
        class: c(e.n("floater")),
        style: K({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [G(e.$slots, "image", {}, () => [e.src ? (h(), V(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: K({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        Vd
      )) : J("v-if", !0)]), B(
        "div",
        {
          class: c(e.n("container"))
        },
        [G(e.$slots, "title", {}, () => [e.title ? (h(), V(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          _(e.title),
          3
        )) : J("v-if", !0)]), G(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), V(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          _(e.subtitle),
          3
        )) : J("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (h(), V(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          _(e.description),
          3
        )) : J("v-if", !0)]), e.$slots.extra ? (h(), V(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [G(e.$slots, "extra")],
          2
        )) : J("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), V(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: K({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [G(e.$slots, "floating-content")],
          6
        )) : J("v-if", !0)],
        2
      ), e.showFloatingButtons ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: K({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [G(e.$slots, "close-button", {}, () => [ee(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Nn(e.close, ["stop"])
          },
          {
            default: fe(() => [ee(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: c(e.n("close-button-icon"))
              },
              null,
              8,
              ["class"]
            )]),
            _: 1
          },
          8,
          ["class", "onClick"]
        )])],
        6
      )) : J("v-if", !0)],
      6
    ), B(
      "div",
      {
        class: c(e.n("holder")),
        style: K({
          width: e.holderWidth,
          height: e.holderHeight
        })
      },
      null,
      6
    )],
    6
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
const zr = Q({
  render: Pd,
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarButton: nn
  },
  props: kd,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), i = M("100%"), o = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = W(() => e.layout === "row"), p = M(!1), y = M(!1), {
      zIndex: w
    } = Ka(() => e.floating, 1);
    Ct(() => e.floating, () => !m.value);
    var O = "auto", T = "auto", S = null, g = M(null), P = /* @__PURE__ */ function() {
      var k = po(function* () {
        clearTimeout(g.value), clearTimeout(S), g.value = null, g.value = setTimeout(/* @__PURE__ */ po(function* () {
          var {
            width: A,
            height: I,
            left: C,
            top: $
          } = n.value.getBoundingClientRect();
          a.value = be(A), t.value = be(I), i.value = a.value, o.value = t.value, l.value = be($), s.value = be(C), u.value = "fixed", O = l.value, T = s.value, p.value = !0, yield Tn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? Od : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), b = () => {
      clearTimeout(S), clearTimeout(g.value), g.value = null, i.value = a.value, o.value = t.value, l.value = O, s.value = T, v.value = "0px", f.value = "0", p.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", O = "auto", T = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      N(e["onUpdate:floating"], !1);
    };
    return ae(() => e.floating, (k) => {
      m.value || Pe(() => {
        k ? P() : b();
      });
    }, {
      immediate: !0
    }), {
      n: $d,
      classes: Td,
      toSizeUnit: be,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: g,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: w,
      isRow: m,
      close: D,
      showFloatingButtons: p,
      floated: y
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
var Md = {
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
  }
}, {
  n: Ed,
  classes: Id
} = ne("cell");
function Nd(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [G(e.$slots, "icon", {}, () => [ee(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : J("v-if", !0), B(
      "div",
      {
        class: c(e.n("content"))
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [G(e.$slots, "description", {}, () => [he(
          _(e.description),
          1
        )])],
        2
      )) : J("v-if", !0)],
      2
    ), e.$slots.extra ? (h(), V(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [G(e.$slots, "extra")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const sr = Q({
  render: Nd,
  name: "VarCell",
  components: {
    VarIcon: Te
  },
  props: Md,
  setup() {
    return {
      n: Ed,
      classes: Id
    };
  }
});
sr.install = function(e) {
  e.component(sr.name, sr);
};
var Dd = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Bd
} = ne("form-details"), Ad = {
  key: 0
}, zd = {
  key: 0
};
function Ld(e, n) {
  return h(), me(
    Le,
    {
      name: e.n()
    },
    {
      default: fe(() => [e.errorMessage || e.extraMessage ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.n())
        },
        [B(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [ee(
            Le,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.errorMessage ? (h(), V(
                "div",
                Ad,
                _(e.errorMessage),
                1
              )) : J("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        ), B(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [ee(
            Le,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.extraMessage ? (h(), V(
                "div",
                zd,
                _(e.extraMessage),
                1
              )) : J("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        )],
        2
      )) : J("v-if", !0)]),
      _: 1
    },
    8,
    ["name"]
  );
}
const He = Q({
  render: Ld,
  name: "VarFormDetails",
  props: Dd,
  setup: () => ({
    n: Bd
  })
});
He.install = function(e) {
  e.component(He.name, He);
};
var Fd = {
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
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, Nl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Dl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Rd() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Nl), {
    length: r
  } = Sn(Dl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Ud() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn(Nl), {
    index: r
  } = Cn(Dl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Bl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function mn() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn(Bl);
  return {
    bindForm: e,
    form: n
  };
}
function Yd() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Bl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Wd,
  classes: Hd
} = ne("checkbox");
function jd(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: c(e.n())
      },
      [ke((h(), V(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? G(e.$slots, "checked-icon", {
          key: 0
        }, () => [ee(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : G(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ee(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), B(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [G(e.$slots, "default")],
        2
      )],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const ur = Q({
  render: jd,
  name: "VarCheckbox",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: Fd,
  setup(e) {
    var n = M(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = M(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = Ud(), {
      form: l,
      bindForm: s
    } = mn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = cn(), m = (b) => {
      Pe(() => {
        var {
          validateTrigger: D,
          rules: k,
          modelValue: A
        } = e;
        d(D, b, k, A);
      });
    }, p = (b) => {
      n.value = b;
      var {
        checkedValue: D,
        onChange: k
      } = e;
      N(e["onUpdate:modelValue"], n.value), N(k, n.value), m("onChange"), b === D ? i == null || i.onChecked(D) : i == null || i.onUnchecked(D);
    }, y = (b) => {
      var {
        disabled: D,
        readonly: k,
        checkedValue: A,
        uncheckedValue: I,
        onClick: C
      } = e;
      if (!(l != null && l.disabled.value || D) && (N(C, b), !(l != null && l.readonly.value || k))) {
        t.value = !0;
        var $ = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && $ || p(r.value ? I : A);
      }
    }, w = (b) => {
      var {
        checkedValue: D,
        uncheckedValue: k
      } = e;
      n.value = b.includes(D) ? D : k;
    }, O = () => {
      t.value = !1;
    }, T = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, S = (b) => {
      var {
        checkedValue: D,
        uncheckedValue: k
      } = e, A = ![D, k].includes(b);
      A && (b = r.value ? k : D), p(b);
    }, g = () => v(e.rules, e.modelValue);
    ae(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var P = {
      checkedValue: a,
      checked: r,
      sync: w,
      validate: g,
      resetValidation: f,
      reset: T,
      resetWithAnimation: O
    };
    return N(o, P), N(s, P), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Wd,
      classes: Hd,
      handleClick: y,
      toggle: S,
      reset: T,
      validate: g,
      resetValidation: f
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
function Gd(e) {
  return ["horizontal", "vertical"].includes(e);
}
var qd = {
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
    validator: Gd
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Kd,
  classes: Xd
} = ne("checkbox-group");
function Zd(e, n) {
  var r = te("var-form-details");
  return h(), V(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [G(e.$slots, "default")],
      2
    ), ee(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Lr = Q({
  render: Zd,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: He
  },
  props: qd,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = Rd(), {
      bindForm: o
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = W(() => l.value), f = (D) => {
      Pe(() => {
        var {
          validateTrigger: k,
          rules: A,
          modelValue: I
        } = e;
        s(k, D, A, I);
      });
    }, m = (D) => {
      N(e["onUpdate:modelValue"], D), N(e.onChange, D), f("onChange");
    }, p = (D) => {
      var {
        modelValue: k
      } = e;
      k.includes(D) || m([...k, D]);
    }, y = (D) => {
      var {
        modelValue: k
      } = e;
      !k.includes(D) || m(k.filter((A) => A !== D));
    }, w = () => t.forEach((D) => {
      var {
        sync: k
      } = D;
      return k(e.modelValue);
    }), O = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, T = () => {
      var D = t.map((A) => {
        var {
          checkedValue: I
        } = A;
        return I.value;
      }), k = eo(D);
      return O(), N(e["onUpdate:modelValue"], k), k;
    }, S = () => {
      var D = t.filter((A) => {
        var {
          checked: I
        } = A;
        return !I.value;
      }).map((A) => {
        var {
          checkedValue: I
        } = A;
        return I.value;
      }), k = eo(D);
      return O(), N(e["onUpdate:modelValue"], k), k;
    }, g = () => {
      N(e["onUpdate:modelValue"], []), d();
    }, P = () => u(e.rules, e.modelValue);
    ae(() => e.modelValue, w, {
      deep: !0
    }), ae(() => a.value, w);
    var b = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: P,
      resetValidation: d,
      reset: g,
      errorMessage: v
    };
    return i(b), N(o, b), {
      errorMessage: l,
      n: Kd,
      classes: Xd,
      checkAll: T,
      inverseAll: S,
      reset: g,
      validate: P,
      resetValidation: d
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
function Jd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Qd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xd = {
  type: {
    type: String,
    default: "default",
    validator: Jd
  },
  size: {
    type: String,
    default: "normal",
    validator: Qd
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: _e(Tl, "name"),
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
  onClose: {
    type: Function
  }
}, {
  n: An,
  classes: _d
} = ne("chip");
function ev(e, n) {
  var r = te("var-icon");
  return h(), me(
    Le,
    {
      name: e.n("$-fade")
    },
    {
      default: fe(() => [B(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [G(e.$slots, "left"), B(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [G(e.$slots, "default")],
          2
        ), G(e.$slots, "right"), e.closable ? (h(), V(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.onClose && e.onClose(...arguments);
            })
          },
          [ee(
            r,
            {
              name: "" + (e.iconName ? e.iconName : "close-circle")
            },
            null,
            8,
            ["name"]
          )],
          2
        )) : J("v-if", !0)],
        16
      )]),
      _: 3
    },
    8,
    ["name"]
  );
}
const dr = Q({
  render: ev,
  name: "VarChip",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: xd,
  setup(e) {
    var n = W(() => {
      var {
        plain: a,
        textColor: t,
        color: i
      } = e;
      return a ? {
        color: t || i,
        borderColor: i
      } : {
        color: t,
        background: i
      };
    }), r = W(() => {
      var {
        size: a,
        block: t,
        type: i,
        plain: o,
        round: l
      } = e, s = An(t ? "$--flex" : "$--inline-flex"), u = o ? An("plain") + " " + An("plain-" + i) : An("--" + i), d = l ? An("--round") : null;
      return [An("--" + a), s, u, d];
    });
    return {
      n: An,
      classes: _d,
      chipStyles: n,
      contentClass: r
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
function nv(e) {
  return ["row", "column"].includes(e);
}
var rv = {
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
    validator: nv
  },
  onClick: {
    type: Function
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
  }
}, Al = Symbol("ROW_BIND_COL_KEY"), zl = Symbol("ROW_COUNT_COL_KEY");
function av() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Al), {
    length: r
  } = Sn(zl);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function tv() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Al), {
    index: r
  } = Cn(zl);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Qa,
  classes: iv
} = ne("col");
function ov(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: K({
        flexDirection: e.direction,
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const Fr = Q({
  render: ov,
  name: "VarCol",
  props: rv,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = W(() => z(e.span)), a = W(() => z(e.offset)), {
      row: t,
      bindRow: i
    } = tv(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Ni(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(Qa("--span-" + s + "-" + f)), v && d.push(Qa("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(Qa("--span-" + s + "-" + u));
      return d;
    };
    return ae([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), N(i, o), {
      n: Qa,
      classes: iv,
      padding: n,
      toNumber: z,
      toSizeUnit: be,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var Ll = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Fl = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function lv() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Ll), {
    length: r
  } = Sn(Fl);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var sv = {
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
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: uv
} = ne("collapse");
function dv(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Rr = Q({
  render: dv,
  name: "VarCollapse",
  props: sv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = lv(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (m, p) => o() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((y) => y !== m) : null, s = (m, p) => {
      var y = l(m, p);
      N(e["onUpdate:modelValue"], y), N(e.onChange, y);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: y
          } = p;
          return e.modelValue === y.value;
        });
      var m = r.filter((p) => {
        var {
          name: y
        } = p;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return m.length ? m : void 0;
    }, d = () => e.accordion ? r.find((m) => {
      var {
        index: p,
        name: y
      } = m;
      return y.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((m) => {
      var {
        index: p,
        name: y
      } = m;
      return y.value === void 0 ? e.modelValue.includes(p.value) : !1;
    }), v = () => {
      if (!!o()) {
        var m = u() || d();
        if (e.accordion && !m || !e.accordion && !m.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var y = e.accordion ? m === p : m.includes(p);
          p.init(e.accordion, y);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), ae(() => n.value, () => Pe().then(v)), ae(() => e.modelValue, () => Pe().then(v)), {
      n: uv
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
function vv() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Ll), {
    index: r
  } = Cn(Fl);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var fv = {
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
  n: cv,
  classes: mv
} = ne("collapse-item");
function pv(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [B(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [B(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [G(e.$slots, "title", {}, () => [he(
          _(e.title),
          1
        )])],
        2
      ), B(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [G(e.$slots, "icon", {}, () => [ee(
          r,
          {
            name: e.icon,
            transition: 250,
            class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
      )],
      2
    ), ke(B(
      "div",
      {
        class: c(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [B(
        "div",
        {
          class: c(e.n("content-wrap"))
        },
        [G(e.$slots, "default")],
        2
      )],
      34
    ), [[Ga, e.show]])],
    2
  );
}
const Ur = Q({
  render: pv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Te
  },
  props: fv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = vv(), t = !0, i = M(null), o = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = W(() => e.name), f = (S, g) => {
      s.value === void 0 || S && Ce(s.value) || g === l.value || (l.value = g, m(!0));
    }, m = (S) => {
      e.disabled || S || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Pe(() => {
        var {
          offsetHeight: S
        } = i.value;
        i.value.style.height = 0 + "px", $n(() => {
          i.value.style.height = S + "px", t && St(() => {
            t && O();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, w = () => {
      if (!!i.value) {
        var {
          offsetHeight: S
        } = i.value;
        i.value.style.height = S + "px", $n(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, O = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, T = {
      index: n,
      name: v,
      init: f
    };
    return a(T), ae(l, (S) => {
      S ? p() : w();
    }), {
      n: cv,
      start: y,
      classes: mv,
      show: o,
      isShow: l,
      offset: u,
      toggle: m,
      contentEl: i,
      transitionend: O
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var hv = {
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
  onEnd: {
    type: Function
  },
  onChange: {
    type: Function
  }
}, {
  n: gv
} = ne("countdown"), _t = 1e3, ei = 60 * _t, ni = 60 * ei, ho = 24 * ni;
function yv(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default", fl(Gs(e.timeData)), () => [he(
      _(e.showTime),
      1
    )])],
    2
  );
}
const Yr = Q({
  render: yv,
  name: "VarCountdown",
  props: hv,
  setup(e) {
    var n = M(0), r = M(!1), a = M(""), t = M(0), i = M(0), o = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (m, p) => {
      var y = Object.values(p), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach((S, g) => {
        m.includes(S) ? m = m.replace(S, hr("" + y[g], 2, "0")) : y[g + 1] += y[g] * O[g];
      }), m.includes("S")) {
        var T = hr("" + y[y.length - 1], 3, "0");
        m.includes("SSS") ? m = m.replace("SSS", T) : m.includes("SS") ? m = m.replace("SS", T.slice(0, 2)) : m = m.replace("S", T.slice(0, 1));
      }
      return m;
    }, s = (m) => {
      var p = Math.floor(m / ho), y = Math.floor(m % ho / ni), w = Math.floor(m % ni / ei), O = Math.floor(m % ei / _t), T = Math.floor(m % _t), S = {
        days: p,
        hours: y,
        minutes: w,
        seconds: O,
        milliseconds: T
      };
      o.value = S, N(e.onChange, o.value), a.value = l(e.format, S);
    }, u = () => {
      var {
        time: m,
        onEnd: p,
        autoStart: y
      } = e, w = Date.now();
      n.value || (n.value = w + z(m));
      var O = n.value - w;
      if (O < 0 && (O = 0), i.value = O, s(O), O === 0) {
        N(p);
        return;
      }
      (y || r.value) && (t.value = $n(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, su(t.value), u();
    };
    return ae(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: gv,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Or = 9e15, ar = 1e9, ri = "0123456789abcdef", dt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", vt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ai = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Or,
  maxE: Or,
  crypto: !1
}, Rl, Mn, ve = !0, $t = "[DecimalError] ", _n = $t + "Invalid argument: ", Ul = $t + "Precision limit exceeded", Yl = $t + "crypto unavailable", Wl = "[object Decimal]", Ke = Math.floor, ze = Math.pow, bv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, wv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Sv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Hl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, bn = 1e7, ue = 7, Cv = 9007199254740991, kv = dt.length - 1, ti = vt.length - 1, q = { toStringTag: Wl };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), se(e);
};
q.ceil = function() {
  return se(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(_n + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
  var n, r, a, t, i = this, o = i.d, l = (e = new i.constructor(e)).d, s = i.s, u = e.s;
  if (!o || !l)
    return !s || !u ? NaN : s !== u ? s : o === l ? 0 : !o ^ s < 0 ? 1 : -1;
  if (!o[0] || !l[0])
    return o[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (i.e !== e.e)
    return i.e > e.e ^ s < 0 ? 1 : -1;
  for (a = o.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (o[n] !== l[n])
      return o[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = $v(a, Xl(a, r)), a.precision = e, a.rounding = n, se(Mn == 2 || Mn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ve = !1, i = d.s * ze(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = We(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = ze(r, 1 / 3), e = Ke((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = $e(u.plus(d).times(l), u.plus(s), o + 2, 1), We(l.d).slice(0, o) === (r = We(a.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !t && r == "4999") {
        if (!t && (se(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        o += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (se(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return ve = !0, se(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ke(this.e / ue)) * ue, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return $e(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return se($e(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return se(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, n, r, a, t, i = this, o = i.constructor, l = new o(1);
  if (!i.isFinite())
    return new o(i.s ? 1 / 0 : NaN);
  if (i.isZero())
    return l;
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Ot(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = Ca(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return se(i, o.precision = r, o.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = Ca(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Ot(5, e)), t = Ca(i, 2, t, t, !0);
    for (var o, l = new i(5), s = new i(16), u = new i(20); e--; )
      o = t.times(t), t = t.times(l.plus(o.times(s.times(o).plus(u))));
  }
  return i.precision = n, i.rounding = r, se(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, $e(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? gn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? gn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = gn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ve = !1, r = r.times(r).minus(1).sqrt().plus(r), ve = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ve = !1, r = r.times(r).plus(1).sqrt().plus(r), ve = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new i(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = i.precision, n = i.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? se(new i(t), e, n, !0) : (i.precision = r = a - t.e, t = $e(t.plus(1), new i(1).minus(t), r + e, 1), i.precision = e + 4, i.rounding = 1, t = t.ln(), i.precision = e, i.rounding = n, t.times(0.5))) : new i(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = gn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= ti)
      return o = gn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ti)
      return o = gn(d, v + 4, f).times(0.5), o.s = u.s, o;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / ue + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ve = !1, n = Math.ceil(l / ue), a = 1, s = u.times(u), o = new d(u), t = u; e !== -1; )
    if (t = t.times(s), i = o.minus(t.div(a += 2)), t = t.times(s), o = i.plus(t.div(a += 2)), o.d[n] !== void 0)
      for (e = n; o.d[e] === i.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), ve = !0, se(o, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Ke(this.e / ue) > this.d.length - 2;
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
  var n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, m = 5;
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
      i = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      i = t !== 1;
    }
  if (ve = !1, l = v + m, o = Gn(u, l), a = n ? ft(d, l + 10) : Gn(e, l), s = $e(o, a, l, 1), La(s.d, t = v, f))
    do
      if (l += 10, o = Gn(u, l), a = n ? ft(d, l + 10) : Gn(e, l), s = $e(o, a, l, 1), !i) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = se(s, v + 1, 0));
        break;
      }
    while (La(s.d, t += 10, f));
  return ve = !0, se(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
    return ve ? se(e, l, s) : e;
  }
  if (r = Ke(e.e / ue), d = Ke(m.e / ue), u = u.slice(), i = d - r, i) {
    for (v = i < 0, v ? (n = u, i = -i, o = f.length) : (n = f, r = d, o = u.length), a = Math.max(Math.ceil(l / ue), o) + 2, i > a && (i = a, n.length = 1), n.reverse(), a = i; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, o = f.length, v = a < o, v && (o = a), a = 0; a < o; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    i = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), o = u.length, a = f.length - o; a > 0; --a)
    u[o++] = 0;
  for (a = f.length; a > i; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = bn - 1;
      --u[t], u[a] += bn;
    }
    u[a] -= f[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Tt(u, r), ve ? se(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? se(new a(r), a.precision, a.rounding) : (ve = !1, a.modulo == 9 ? (n = $e(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = $e(r, e, 0, a.modulo, 1), n = n.times(e), ve = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return ii(this);
};
q.naturalLogarithm = q.ln = function() {
  return Gn(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, se(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ve ? se(e, l, s) : e;
  if (i = Ke(v.e / ue), a = Ke(e.e / ue), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / ue), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / bn | 0, u[t] %= bn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = Tt(u, a), ve ? se(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(_n + e);
  return r.d ? (n = jl(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return se(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = Ov(a, Xl(a, r)), a.precision = e, a.rounding = n, se(Mn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (ve = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = We(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ke((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (i = a, a = i.plus($e(o, i, r + 2, 1)).times(0.5), We(i.d).slice(0, r) === (n = We(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (se(i, s + 1, 0), i.times(i).eq(o))) {
          a = i;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (se(a, s + 1, 1), e = !a.times(a).eq(o));
        break;
      }
  return ve = !0, se(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = $e(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, se(Mn == 2 || Mn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Ke(d.e / ue) + Ke(e.e / ue), s = f.length, u = m.length, s < u && (i = f, f = m, m = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + m[a] * f[t - a - 1] + n, i[t--] = l % bn | 0, n = l / bn | 0;
    i[t] = (i[t] + n) % bn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = Tt(i, r), ve ? se(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return Li(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (rn(e, 0, ar), n === void 0 ? n = a.rounding : rn(n, 0, 8), se(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = On(a, !0) : (rn(e, 0, ar), n === void 0 ? n = t.rounding : rn(n, 0, 8), a = se(new t(a), e + 1, n), r = On(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = On(t) : (rn(e, 0, ar), n === void 0 ? n = i.rounding : rn(n, 0, 8), a = se(new i(t), e + t.e + 1, n), r = On(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, m = this, p = m.d, y = m.constructor;
  if (!p)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), i = n.e = jl(p) - m.e - 1, o = i % ue, n.d[0] = ze(10, o < 0 ? ue + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new y(e), !l.isInt() || l.lt(u))
      throw Error(_n + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (ve = !1, l = new y(We(p)), d = y.precision, y.precision = i = p.length * ue * 2; v = $e(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = $e(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = $e(u, a, i, 1).minus(m).abs().cmp($e(s, r, i, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], y.precision = d, ve = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Li(this, 16, e, n);
};
q.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : rn(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (ve = !1, r = $e(r, e, 0, n, 1).times(e), ve = !0, se(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return Li(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(ze(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return se(l, a, i);
  if (n = Ke(e.e / ue), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Cv)
    return t = Gl(s, l, r, a), e.s < 0 ? new s(1).div(t) : se(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = ze(+l, u), n = r == 0 || !isFinite(r) ? Ke(u * (Math.log("0." + We(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (ve = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = ii(e.times(Gn(l, a + r)), a), t.d && (t = se(t, a + 5, 1), La(t.d, a, i) && (n = a + 10, t = se(ii(e.times(Gn(l, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = se(t, a + 1, 0)))), t.s = o, ve = !0, s.rounding = i, se(t, a, i));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = On(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (rn(e, 1, ar), n === void 0 ? n = t.rounding : rn(n, 0, 8), a = se(new t(a), e, n), r = On(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (rn(e, 1, ar), n === void 0 ? n = a.rounding : rn(n, 0, 8)), se(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = On(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return se(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = On(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function We(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = ue - a.length, r && (i += Ln(r)), i += a;
    o = e[n], a = o + "", r = ue - a.length, r && (i += Ln(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function rn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(_n + e);
}
function La(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += ue, t = 0) : (t = Math.ceil((n + 1) / ue), n %= ue), i = ze(10, ue - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == ze(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == ze(10, n - 3) - 1, o;
}
function at(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += ri.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function $v(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Ot(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ca(e, 1, n.times(t), new e(1));
  for (var i = r; i--; ) {
    var o = n.times(n);
    n = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var $e = function() {
  function e(a, t, i) {
    var o, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      o = a[s] * t + l, a[s] = o % i | 0, l = o / i | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, i, o) {
    var l, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (l = s = 0; l < i; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, i, o) {
    for (var l = 0; i--; )
      a[i] -= l, l = a[i] < t[i] ? 1 : 0, a[i] = l * o + a[i] - t[i];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, i, o, l, s) {
    var u, d, v, f, m, p, y, w, O, T, S, g, P, b, D, k, A, I, C, $, L = a.constructor, Y = a.s == t.s ? 1 : -1, j = a.d, F = t.d;
    if (!j || !j[0] || !F || !F[0])
      return new L(
        !a.s || !t.s || (j ? F && j[0] == F[0] : !F) ? NaN : j && j[0] == 0 || !F ? Y * 0 : Y / 0
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = bn, m = ue, d = Ke(a.e / m) - Ke(t.e / m)), C = F.length, A = j.length, O = new L(Y), T = O.d = [], v = 0; F[v] == (j[v] || 0); v++)
      ;
    if (F[v] > (j[v] || 0) && d--, i == null ? (b = i = L.precision, o = L.rounding) : l ? b = i + (a.e - t.e) + 1 : b = i, b < 0)
      T.push(1), p = !0;
    else {
      if (b = b / m + 2 | 0, v = 0, C == 1) {
        for (f = 0, F = F[0], b++; (v < A || f) && b--; v++)
          D = f * s + (j[v] || 0), T[v] = D / F | 0, f = D % F | 0;
        p = f || v < A;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), j = e(j, f, s), C = F.length, A = j.length), k = C, S = j.slice(0, C), g = S.length; g < C; )
          S[g++] = 0;
        $ = F.slice(), $.unshift(0), I = F[0], F[1] >= s / 2 && ++I;
        do
          f = 0, u = n(F, S, C, g), u < 0 ? (P = S[0], C != g && (P = P * s + (S[1] || 0)), f = P / I | 0, f > 1 ? (f >= s && (f = s - 1), y = e(F, f, s), w = y.length, g = S.length, u = n(y, S, w, g), u == 1 && (f--, r(y, C < w ? $ : F, w, s))) : (f == 0 && (u = f = 1), y = F.slice()), w = y.length, w < g && y.unshift(0), r(S, y, g, s), u == -1 && (g = S.length, u = n(F, S, C, g), u < 1 && (f++, r(S, C < g ? $ : F, g, s))), g = S.length) : u === 0 && (f++, S = [0]), T[v++] = f, u && S[0] ? S[g++] = j[k] || 0 : (S = [j[k]], g = 1);
        while ((k++ < A || S[0] !== void 0) && b--);
        p = S[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (m == 1)
      O.e = d, Rl = p;
    else {
      for (v = 1, f = T[0]; f >= 10; f /= 10)
        v++;
      O.e = v + d * m - 1, se(O, l ? i + O.e + 1 : i, o, p);
    }
    return O;
  };
}();
function se(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (i = n - t, i < 0)
        i += ue, o = n, d = v[f = 0], s = d / ze(10, t - o - 1) % 10 | 0;
      else if (f = Math.ceil((i + 1) / ue), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, i %= ue, o = i - ue + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        i %= ue, o = i - ue + t, s = o < 0 ? 0 : d / ze(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (o < 0 ? d : d % ze(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / ze(10, t - o) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = ze(10, (ue - n % ue) % ue), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (i == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = ze(10, ue - i), v[f] = o > 0 ? (d / ze(10, t - o) % ze(10, o) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (i = 1, o = v[0]; o >= 10; o /= 10)
              i++;
            for (o = v[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, v[0] == bn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != bn)
              break;
            v[f--] = 0, l = 1;
          }
      for (i = v.length; v[--i] === 0; )
        v.pop();
    }
  return ve && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function On(e, n, r) {
  if (!e.isFinite())
    return Kl(e);
  var a, t = e.e, i = We(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Ln(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Ln(-t - 1) + i, r && (a = r - o) > 0 && (i += Ln(a))) : t >= o ? (i += Ln(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Ln(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Ln(a))), i;
}
function Tt(e, n) {
  var r = e[0];
  for (n *= ue; r >= 10; r /= 10)
    n++;
  return n;
}
function ft(e, n, r) {
  if (n > kv)
    throw ve = !0, r && (e.precision = r), Error(Ul);
  return se(new e(dt), n, 1, !0);
}
function gn(e, n, r) {
  if (n > ti)
    throw Error(Ul);
  return se(new e(vt), n, r, !0);
}
function jl(e) {
  var n = e.length - 1, r = n * ue + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Ln(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Gl(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / ue + 4);
  for (ve = !1; ; ) {
    if (r % 2 && (i = i.times(n), yo(i.d, o) && (t = !0)), r = Ke(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), yo(n.d, o);
  }
  return ve = !0, i;
}
function go(e) {
  return e.d[e.d.length - 1] & 1;
}
function ql(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ii(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ve = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = se(i.times(e), s, 1), r = r.times(++d), l = o.plus($e(i, r, s, 1)), We(l.d).slice(0, s) === We(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = se(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && La(o.d, s - a, m, u))
          f.precision = s += 10, r = i = l = new f(1), d = 0, u++;
        else
          return se(o, f.precision = p, m, ve = !0);
      else
        return f.precision = p, o;
    }
    o = l;
  }
}
function Gn(e, n) {
  var r, a, t, i, o, l, s, u, d, v, f, m = 1, p = 10, y = e, w = y.d, O = y.constructor, T = O.rounding, S = O.precision;
  if (y.s < 0 || !w || !w[0] || !y.e && w[0] == 1 && w.length == 1)
    return new O(w && !w[0] ? -1 / 0 : y.s != 1 ? NaN : w ? 0 : y);
  if (n == null ? (ve = !1, d = S) : d = n, O.precision = d += p, r = We(w), a = r.charAt(0), Math.abs(i = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = We(y.d), a = r.charAt(0), m++;
    i = y.e, a > 1 ? (y = new O("0." + r), i++) : y = new O(a + "." + r.slice(1));
  } else
    return u = ft(O, d + 2, S).times(i + ""), y = Gn(new O(a + "." + r.slice(1)), d - p).plus(u), O.precision = S, n == null ? se(y, S, T, ve = !0) : y;
  for (v = y, s = o = y = $e(y.minus(1), y.plus(1), d, 1), f = se(y.times(y), d, 1), t = 3; ; ) {
    if (o = se(o.times(f), d, 1), u = s.plus($e(o, new O(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(ft(O, d + 2, S).times(i + ""))), s = $e(s, new O(m), d, 1), n == null)
        if (La(s.d, d - p, T, l))
          O.precision = d += p, u = o = y = $e(v.minus(1), v.plus(1), d, 1), f = se(y.times(y), d, 1), t = l = 1;
        else
          return se(s, O.precision = S, T, ve = !0);
      else
        return O.precision = S, s;
    s = u, t += 2;
  }
}
function Kl(e) {
  return String(e.s * e.s / 0);
}
function oi(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ue, r < 0 && (a += ue), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ue; a < t; )
        e.d.push(+n.slice(a, a += ue));
      n = n.slice(a), a = ue - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), ve && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Tv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Hl.test(n))
      return oi(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (wv.test(n))
    r = 16, n = n.toLowerCase();
  else if (bv.test(n))
    r = 2;
  else if (Sv.test(n))
    r = 8;
  else
    throw Error(_n + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = Gl(a, new a(r), i, i * 2)), u = at(n, r, bn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = Tt(u, d), e.d = u, ve = !1, o && (e = $e(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? ze(2, s) : qn.pow(2, s))), ve = !0, e);
}
function Ov(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ca(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Ot(5, r)), n = Ca(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function Ca(e, n, r, a, t) {
  var i, o, l, s, u = e.precision, d = Math.ceil(u / ue);
  for (ve = !1, s = r.times(r), l = new e(a); ; ) {
    if (o = $e(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(o) : a.minus(o), a = $e(o.times(s), new e(n++ * n++), u, 1), o = l.plus(a), o.d[d] !== void 0) {
      for (i = d; o.d[i] === l.d[i] && i--; )
        ;
      if (i == -1)
        break;
    }
    i = l, l = a, a = o, o = i;
  }
  return ve = !0, o.d.length = d + 1, o;
}
function Ot(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Xl(e, n) {
  var r, a = n.s < 0, t = gn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return Mn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Mn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return Mn = go(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Mn = go(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Li(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (rn(r, 1, ar), a === void 0 ? a = m.rounding : rn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Kl(e);
  else {
    for (d = On(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - o, f.d = at(On(f), 10, t), f.e = f.d.length), v = at(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new m(e), e.d = v, e.e = i, e = $e(e, f, r, a, 0, t), v = e.d, i = e.e, u = Rl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += ri.charAt(v[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = at(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += ri.charAt(v[o]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i; )
          d = "0" + d;
        d = "0." + d;
      } else if (++i > s)
        for (i -= s; i--; )
          d += "0";
      else
        i < s && (d = d.slice(0, i) + "." + d.slice(i));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function yo(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Vv(e) {
  return new this(e).abs();
}
function Pv(e) {
  return new this(e).acos();
}
function Mv(e) {
  return new this(e).acosh();
}
function Ev(e, n) {
  return new this(e).plus(n);
}
function Iv(e) {
  return new this(e).asin();
}
function Nv(e) {
  return new this(e).asinh();
}
function Dv(e) {
  return new this(e).atan();
}
function Bv(e) {
  return new this(e).atanh();
}
function Av(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = gn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? gn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = gn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan($e(e, n, i, 1)), n = gn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan($e(e, n, i, 1)), r;
}
function zv(e) {
  return new this(e).cbrt();
}
function Lv(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function Fv(e, n, r) {
  return new this(e).clamp(n, r);
}
function Rv(e) {
  if (!e || typeof e != "object")
    throw Error($t + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    ar,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Or,
    0,
    "toExpPos",
    0,
    Or,
    "maxE",
    0,
    Or,
    "minE",
    -Or,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = ai[r]), (a = e[r]) !== void 0)
      if (Ke(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(_n + r + ": " + a);
  if (r = "crypto", t && (this[r] = ai[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Yl);
      else
        this[r] = !1;
    else
      throw Error(_n + r + ": " + a);
  return this;
}
function Uv(e) {
  return new this(e).cos();
}
function Yv(e) {
  return new this(e).cosh();
}
function Zl(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, bo(i)) {
      u.s = i.s, ve ? !i.d || i.e > t.maxE ? (u.e = NaN, u.d = null) : i.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i.e, u.d = i.d.slice()) : (u.e = i.e, u.d = i.d ? i.d.slice() : i.d);
      return;
    }
    if (s = typeof i, s === "number") {
      if (i === 0) {
        u.s = 1 / i < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (i < 0 ? (i = -i, u.s = -1) : u.s = 1, i === ~~i && i < 1e7) {
        for (o = 0, l = i; l >= 10; l /= 10)
          o++;
        ve ? o > t.maxE ? (u.e = NaN, u.d = null) : o < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [i]) : (u.e = o, u.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return oi(u, i.toString());
    } else if (s !== "string")
      throw Error(_n + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), Hl.test(i) ? oi(u, i) : Tv(u, i);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Rv, t.clone = Zl, t.isDecimal = bo, t.abs = Vv, t.acos = Pv, t.acosh = Mv, t.add = Ev, t.asin = Iv, t.asinh = Nv, t.atan = Dv, t.atanh = Bv, t.atan2 = Av, t.cbrt = zv, t.ceil = Lv, t.clamp = Fv, t.cos = Uv, t.cosh = Yv, t.div = Wv, t.exp = Hv, t.floor = jv, t.hypot = Gv, t.ln = qv, t.log = Kv, t.log10 = Zv, t.log2 = Xv, t.max = Jv, t.min = Qv, t.mod = xv, t.mul = _v, t.pow = ef, t.random = nf, t.round = rf, t.sign = af, t.sin = tf, t.sinh = of, t.sqrt = lf, t.sub = sf, t.sum = uf, t.tan = df, t.tanh = vf, t.trunc = ff, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Wv(e, n) {
  return new this(e).div(n);
}
function Hv(e) {
  return new this(e).exp();
}
function jv(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function Gv() {
  var e, n, r = new this(0);
  for (ve = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return ve = !0, new this(1 / 0);
      r = n;
    }
  return ve = !0, r.sqrt();
}
function bo(e) {
  return e instanceof qn || e && e.toStringTag === Wl || !1;
}
function qv(e) {
  return new this(e).ln();
}
function Kv(e, n) {
  return new this(e).log(n);
}
function Xv(e) {
  return new this(e).log(2);
}
function Zv(e) {
  return new this(e).log(10);
}
function Jv() {
  return ql(this, arguments, "lt");
}
function Qv() {
  return ql(this, arguments, "gt");
}
function xv(e, n) {
  return new this(e).mod(n);
}
function _v(e, n) {
  return new this(e).mul(n);
}
function ef(e, n) {
  return new this(e).pow(n);
}
function nf(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : rn(e, 1, ar), a = Math.ceil(e / ue), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); i < a; )
        t = n[i], t >= 429e7 ? n[i] = crypto.getRandomValues(new Uint32Array(1))[0] : l[i++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); i < a; )
        t = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((n[i + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, i) : (l.push(t % 1e7), i += 4);
      i = a / 4;
    } else
      throw Error(Yl);
  else
    for (; i < a; )
      l[i++] = Math.random() * 1e7 | 0;
  for (a = l[--i], e %= ue, a && e && (t = ze(10, ue - e), l[i] = (a / t | 0) * t); l[i] === 0; i--)
    l.pop();
  if (i < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= ue)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < ue && (r -= ue - a);
  }
  return o.e = r, o.d = l, o;
}
function rf(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function af(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function tf(e) {
  return new this(e).sin();
}
function of(e) {
  return new this(e).sinh();
}
function lf(e) {
  return new this(e).sqrt();
}
function sf(e, n) {
  return new this(e).sub(n);
}
function uf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ve = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ve = !0, se(r, this.precision, this.rounding);
}
function df(e) {
  return new this(e).tan();
}
function vf(e) {
  return new this(e).tanh();
}
function ff(e) {
  return se(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var qn = q.constructor = Zl(ai);
dt = new qn(dt);
vt = new qn(vt);
var cf = {
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
  onBeforeChange: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onIncrement: {
    type: Function
  },
  onDecrement: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: mf,
  classes: pf
} = ne("counter"), wo = 100, So = 600, hf = ["inputmode", "readonly", "disabled"];
function gf(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      Ve({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [ke(ee(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: K({
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
      }]]), ke(B(
        "input",
        {
          class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: K({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (i) => e.inputValue = i),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        hf
      ), [[qs, e.inputValue]]), ke(ee(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: K({
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
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Wr = Q({
  render: gf,
  name: "VarCounter",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: cf,
  setup(e) {
    var n = M(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = mn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = cn(), {
      readonly: f,
      disabled: m
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), y = (F) => {
      Pe(() => {
        var {
          validateTrigger: Z,
          rules: H,
          modelValue: X
        } = e;
        u(Z, F, H, X);
      });
    }, w = () => {
      var {
        min: F
      } = e;
      N(e["onUpdate:modelValue"], F != null ? z(F) : 0), v();
    }, O = {
      reset: w,
      validate: p,
      resetValidation: v
    }, T = W(() => {
      var {
        max: F,
        modelValue: Z
      } = e;
      return F != null && z(Z) >= z(F);
    }), S = W(() => {
      var {
        min: F,
        modelValue: Z
      } = e;
      return F != null && z(Z) <= z(F);
    }), g = (F) => {
      var {
        decimalLength: Z,
        max: H,
        min: X
      } = e, E = z(F);
      return H != null && E > z(H) && (E = z(H)), X != null && E < z(X) && (E = z(X)), F = String(E), Z != null && (F = E.toFixed(z(Z))), F;
    }, P = (F) => {
      var {
        lazyChange: Z,
        onBeforeChange: H
      } = e, {
        value: X
      } = F.target, E = g(X);
      Z ? N(H, z(E), j) : Y(E), y("onInputChange");
    }, b = () => {
      var {
        disabled: F,
        readonly: Z,
        disableDecrement: H,
        decrementButton: X,
        lazyChange: E,
        step: R,
        modelValue: U,
        onDecrement: x,
        onBeforeChange: ie
      } = e;
      if (!(m != null && m.value || f != null && f.value || F || Z || H || !X) && !S.value) {
        var le = new qn(z(U)).minus(new qn(z(R))).toString(), de = g(le), we = z(de);
        N(x, we), E ? N(ie, we, j) : (Y(de), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: F,
        readonly: Z,
        disableIncrement: H,
        incrementButton: X,
        lazyChange: E,
        step: R,
        modelValue: U,
        onIncrement: x,
        onBeforeChange: ie
      } = e;
      if (!(m != null && m.value || f != null && f.value || F || Z || H || !X) && !T.value) {
        var le = new qn(z(U)).plus(new qn(z(R))).toString(), de = g(le), we = z(de);
        N(x, we), E ? N(ie, we, j) : (Y(de), y("onIncrement"));
      }
    }, k = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (i = window.setTimeout(() => {
        L();
      }, So));
    }, A = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (t = window.setTimeout(() => {
        $();
      }, So));
    }, I = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, C = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, $ = () => {
      r = window.setTimeout(() => {
        D(), $();
      }, wo);
    }, L = () => {
      a = window.setTimeout(() => {
        b(), L();
      }, wo);
    }, Y = (F) => {
      n.value = F;
      var Z = z(F);
      N(e["onUpdate:modelValue"], Z);
    }, j = (F) => {
      Y(g(String(F))), y("onLazyChange");
    };
    return N(o, O), ae(() => e.modelValue, (F) => {
      Y(g(String(F))), N(e.onChange, z(F));
    }), Y(g(String(e.modelValue))), {
      n: mf,
      classes: pf,
      inputValue: n,
      errorMessage: s,
      formDisabled: m,
      formReadonly: f,
      isMax: T,
      isMin: S,
      validate: p,
      reset: w,
      resetValidation: v,
      handleChange: P,
      decrement: b,
      increment: D,
      pressDecrement: k,
      pressIncrement: A,
      releaseDecrement: I,
      releaseIncrement: C,
      toSizeUnit: be,
      toNumber: z
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var Jl = 60, Ql = Jl * 60, xl = Ql * 24, yf = xl * 7, ka = 1e3, Ft = Jl * ka, Co = Ql * ka, bf = xl * ka, wf = yf * ka, Fi = "millisecond", Vr = "second", Pr = "minute", Mr = "hour", Fn = "day", tt = "week", hn = "month", _l = "quarter", Rn = "year", Er = "date", Sf = "YYYY-MM-DDTHH:mm:ssZ", ko = "Invalid Date", Cf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, kf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const $f = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var li = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Tf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + li(t, 2, "0") + ":" + li(i, 2, "0");
}, Of = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, hn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), hn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, Vf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Pf = function(n) {
  var r = {
    M: hn,
    y: Rn,
    w: tt,
    d: Fn,
    D: Er,
    h: Mr,
    m: Pr,
    s: Vr,
    ms: Fi,
    Q: _l
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Mf = function(n) {
  return n === void 0;
};
const Ef = {
  s: li,
  z: Tf,
  m: Of,
  a: Vf,
  p: Pf,
  u: Mf
};
var Ba = "en", vr = {};
vr[Ba] = $f;
var Ri = function(n) {
  return n instanceof Vt;
}, ct = function e(n, r, a) {
  var t;
  if (!n)
    return Ba;
  if (typeof n == "string") {
    var i = n.toLowerCase();
    vr[i] && (t = i), r && (vr[i] = r, t = i);
    var o = n.split("-");
    if (!t && o.length > 1)
      return e(o[0]);
  } else {
    var l = n.name;
    vr[l] = n, t = l;
  }
  return !a && t && (Ba = t), t || !a && Ba;
}, re = function(n, r) {
  if (Ri(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Vt(a);
}, If = function(n, r) {
  return re(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, Se = Ef;
Se.l = ct;
Se.i = Ri;
Se.w = If;
var Nf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Se.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Cf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, Vt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = ct(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Nf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Se;
  }, n.isValid = function() {
    return this.$d.toString() !== ko;
  }, n.isSame = function(a, t) {
    var i = re(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return re(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < re(a);
  }, n.$g = function(a, t, i) {
    return Se.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = Se.u(t) ? !0 : t, l = Se.p(a), s = function(O, T) {
      var S = Se.w(i.$u ? Date.UTC(i.$y, T, O) : new Date(i.$y, T, O), i);
      return o ? S : S.endOf(Fn);
    }, u = function(O, T) {
      var S = [0, 0, 0, 0], g = [23, 59, 59, 999];
      return Se.w(i.toDate()[O].apply(
        i.toDate("s"),
        (o ? S : g).slice(T)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Rn:
        return o ? s(1, 0) : s(31, 11);
      case hn:
        return o ? s(1, v) : s(0, v + 1);
      case tt: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(o ? f - y : f + (6 - y), v);
      }
      case Fn:
      case Er:
        return u(m + "Hours", 0);
      case Mr:
        return u(m + "Minutes", 1);
      case Pr:
        return u(m + "Seconds", 2);
      case Vr:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = Se.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Fn] = l + "Date", i[Er] = l + "Date", i[hn] = l + "Month", i[Rn] = l + "FullYear", i[Mr] = l + "Hours", i[Pr] = l + "Minutes", i[Vr] = l + "Seconds", i[Fi] = l + "Milliseconds", i)[o], u = o === Fn ? this.$D + (t - this.$W) : t;
    if (o === hn || o === Rn) {
      var d = this.clone().set(Er, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Er, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Se.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = Se.p(t), s = function(f) {
      var m = re(i);
      return Se.w(m.date(m.date() + Math.round(f * a)), i);
    };
    if (l === hn)
      return this.set(hn, this.$M + a);
    if (l === Rn)
      return this.set(Rn, this.$y + a);
    if (l === Fn)
      return s(1);
    if (l === tt)
      return s(7);
    var u = (o = {}, o[Pr] = Ft, o[Mr] = Co, o[Vr] = ka, o)[l] || 1, d = this.$d.getTime() + a * u;
    return Se.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || ko;
    var o = a || Sf, l = Se.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, m = i.meridiem, p = function(S, g, P, b) {
      return S && (S[g] || S(t, o)) || P[g].slice(0, b);
    }, y = function(S) {
      return Se.s(s % 12 || 12, S, "0");
    }, w = m || function(T, S, g) {
      var P = T < 12 ? "AM" : "PM";
      return g ? P.toLowerCase() : P;
    }, O = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Se.s(d + 1, 2, "0"),
      MMM: p(i.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: Se.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(i.weekdaysMin, this.$W, v, 2),
      ddd: p(i.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Se.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: w(s, u, !0),
      A: w(s, u, !1),
      m: String(u),
      mm: Se.s(u, 2, "0"),
      s: String(this.$s),
      ss: Se.s(this.$s, 2, "0"),
      SSS: Se.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(kf, function(T, S) {
      return S || O[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = Se.p(t), s = re(a), u = (s.utcOffset() - this.utcOffset()) * Ft, d = this - s, v = Se.m(this, s);
    return v = (o = {}, o[Rn] = v / 12, o[hn] = v, o[_l] = v / 3, o[tt] = (d - u) / wf, o[Fn] = (d - u) / bf, o[Mr] = d / Co, o[Pr] = d / Ft, o[Vr] = d / ka, o)[l] || d, i ? v : Se.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(hn).$D;
  }, n.$locale = function() {
    return vr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = ct(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return Se.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), es = Vt.prototype;
re.prototype = es;
[["$ms", Fi], ["$s", Vr], ["$m", Pr], ["$H", Mr], ["$W", Fn], ["$M", hn], ["$y", Rn], ["$D", Er]].forEach(function(e) {
  es[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
re.extend = function(e, n) {
  return e.$i || (e(n, Vt, re), e.$i = !0), re;
};
re.locale = ct;
re.isDayjs = Ri;
re.unix = function(e) {
  return re(e * 1e3);
};
re.en = vr[Ba];
re.Ls = vr;
re.p = {};
const ns = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, rs = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Df(e) {
  return ["date", "month"].includes(e);
}
var it = [{
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
}], Da = [{
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
}], Bf = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Df
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
  onPreview: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Af
} = ne("picker-header");
function zf(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [ee(
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
        default: fe(() => [ee(r, {
          name: "chevron-left"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    ), B(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [ee(
        Le,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), V(
            "div",
            {
              key: e.showDate
            },
            _(e.showDate),
            1
          ))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    ), ee(
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
        default: fe(() => [ee(r, {
          name: "chevron-right"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    )],
    2
  );
}
const as = Q({
  render: zf,
  name: "PanelHeader",
  components: {
    VarButton: nn,
    VarIcon: Te
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
    } = n, a = M(!1), t = M(0), i = W(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (l = Ye.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return Ye.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return ae(() => e.date, () => {
      t.value = 0;
    }), {
      n: Af,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, si.apply(this, arguments);
}
re.extend(ns);
re.extend(rs);
var {
  n: xa,
  classes: Lf
} = ne("month-picker"), {
  n: _a
} = ne("date-picker");
function Ff(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.n("content"))
      },
      [ee(
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
      ), ee(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), V("ul", {
            key: e.panelKey
          }, [(h(!0), V(
            Oe,
            null,
            De(e.MONTH_LIST, (t) => (h(), V("li", {
              key: t.index
            }, [ee(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, si({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: fe(() => [he(
                  _(e.getMonthAbbr(t.index)),
                  1
                )]),
                _: 2
              },
              1040,
              ["onClick"]
            )]))),
            128
          ))]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const Rf = Q({
  render: Ff,
  name: "MonthPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: as
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
    } = n, [a, t] = e.current.split("-"), i = M(!1), o = M(0), l = M(null), s = Ne({
      left: !1,
      right: !1
    }), u = W(() => e.choose.chooseYear === e.preview.previewYear), d = W(() => e.preview.previewYear === a), v = (T) => {
      var S, g;
      return (S = (g = Ye.value.datePickerMonthDict) == null ? void 0 : g[T].abbr) != null ? S : "";
    }, f = (T) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: g,
          max: P
        }
      } = e, b = !0, D = !0, k = S + "-" + T;
      return P && (b = re(k).isSameOrBefore(re(P), "month")), g && (D = re(k).isSameOrAfter(re(g), "month")), b && D;
    }, m = (T) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: g,
          chooseRangeMonth: P
        },
        componentProps: {
          type: b,
          range: D
        }
      } = e;
      if (D) {
        if (!P.length)
          return !1;
        var k = re(T).isSameOrBefore(re(P[1]), "month"), A = re(T).isSameOrAfter(re(P[0]), "month");
        return k && A;
      }
      return b === "month" ? S.includes(T) : g.some((I) => I.includes(T));
    }, p = (T) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: g
        },
        componentProps: {
          allowedDates: P,
          color: b,
          multiple: D,
          range: k
        }
      } = e, A = g + "-" + T, I = () => k || D ? m(A) : (S == null ? void 0 : S.index) === T && u.value, C = () => f(T) ? P ? !P(A) : !1 : !0, $ = C(), L = () => $ ? !0 : k || D ? !m(A) : !u.value || (S == null ? void 0 : S.index) !== T, Y = () => d.value && t === T && e.componentProps.showCurrent ? (k || D || u.value) && $ ? !0 : k || D ? !m(A) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, j = () => $ ? "" : Y() ? b != null ? b : "" : I() ? "" : _a() + "-color-cover", F = j().startsWith(_a());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : b,
        textColor: F ? "" : j(),
        [_a() + "-color-cover"]: F,
        class: Lf(xa("button"), [$, xa("button--disabled")])
      };
    }, y = (T, S) => {
      var g = S.currentTarget;
      g.classList.contains(xa("button--disabled")) || r("choose-month", T);
    }, w = (T) => {
      i.value = T === "prev", o.value += T === "prev" ? -1 : 1, r("check-preview", "year", T);
    }, O = (T) => {
      l.value.checkDate(T);
    };
    return ae(() => e.preview.previewYear, (T) => {
      var {
        componentProps: {
          min: S,
          max: g
        }
      } = e;
      g && (s.right = !re("" + (z(T) + 1)).isSameOrBefore(re(g), "year")), S && (s.left = !re("" + (z(T) - 1)).isSameOrAfter(re(S), "year"));
    }, {
      immediate: !0
    }), {
      n: xa,
      nDate: _a,
      pack: Ye,
      MONTH_LIST: it,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: O,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: w
    };
  }
});
var {
  n: $o,
  classes: Uf
} = ne("year-picker"), Yf = ["onClick"];
function Wf(e, n) {
  return h(), V(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), V(
      Oe,
      null,
      De(e.yearList, (r) => (h(), V(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: K({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        _(r),
        15,
        Yf
      ))),
      128
    ))],
    2
  );
}
const Hf = Q({
  render: Wf,
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
    } = n, a = W(() => {
      var i = [], {
        preview: o,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!o)
        return i;
      var u = [z(o) + 100, z(o) - 100];
      if (l) {
        var d = re(l).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = re(s).format("YYYY-MM-D"), m = z(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var p = u[0]; p >= u[1]; p--)
        i.push(p);
      return i;
    }), t = (i) => {
      r("choose-year", i);
    };
    return Fe(() => {
      var i = document.querySelector("." + $o("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: $o,
      classes: Uf,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ui.apply(this, arguments);
}
re.extend(ns);
re.extend(rs);
var {
  n: Tr,
  classes: jf
} = ne("day-picker"), {
  n: et
} = ne("date-picker");
function Gf(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.n("content"))
      },
      [ee(
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
      ), ee(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), V("div", {
            key: e.panelKey
          }, [B(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), V(
              Oe,
              null,
              De(e.sortWeekList, (t) => (h(), V(
                "li",
                {
                  key: t.index
                },
                _(e.getDayAbbr(t.index)),
                1
              ))),
              128
            ))],
            2
          ), B(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(h(!0), V(
              Oe,
              null,
              De(e.days, (t, i) => (h(), V("li", {
                key: i
              }, [ee(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, ui({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: fe(() => [he(
                    _(e.filterDay(t)),
                    1
                  )]),
                  _: 2
                },
                1040,
                ["onClick"]
              )]))),
              128
            ))],
            2
          )]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const qf = Q({
  render: Gf,
  name: "DayPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: as
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
    } = n, [a, t, i] = e.current.split("-"), o = M([]), l = M(!1), s = M(0), u = M(null), d = Ne({
      left: !1,
      right: !1
    }), v = W(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = W(() => {
      var k;
      return e.choose.chooseYear === e.preview.previewYear && ((k = e.choose.chooseMonth) == null ? void 0 : k.index) === e.preview.previewMonth.index;
    }), m = W(() => {
      var k = Da.findIndex((A) => A.index === e.componentProps.firstDayOfWeek);
      return k === -1 || k === 0 ? Da : Da.slice(k).concat(Da.slice(0, k));
    }), p = (k) => {
      var A, I;
      return (A = (I = Ye.value.datePickerWeekDict) == null ? void 0 : I[k].abbr) != null ? A : "";
    }, y = (k) => k > 0 ? k : "", w = () => {
      var {
        preview: {
          previewMonth: k,
          previewYear: A
        }
      } = e, I = re(A + "-" + k.index).daysInMonth(), C = re(A + "-" + k.index + "-01").day(), $ = m.value.findIndex((L) => L.index === "" + C);
      o.value = [...Array($).fill(-1), ...Array.from(Array(I + 1).keys())].filter((L) => L);
    }, O = () => {
      var {
        preview: {
          previewYear: k,
          previewMonth: A
        },
        componentProps: {
          max: I,
          min: C
        }
      } = e;
      if (I) {
        var $ = k + "-" + (z(A.index) + 1);
        d.right = !re($).isSameOrBefore(re(I), "month");
      }
      if (C) {
        var L = k + "-" + (z(A.index) - 1);
        d.left = !re(L).isSameOrAfter(re(C), "month");
      }
    }, T = (k) => {
      var {
        preview: {
          previewYear: A,
          previewMonth: I
        },
        componentProps: {
          min: C,
          max: $
        }
      } = e, L = !0, Y = !0, j = A + "-" + I.index + "-" + k;
      return $ && (L = re(j).isSameOrBefore(re($), "day")), C && (Y = re(j).isSameOrAfter(re(C), "day")), L && Y;
    }, S = (k) => {
      var {
        choose: {
          chooseDays: A,
          chooseRangeDay: I
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!I.length)
          return !1;
        var $ = re(k).isSameOrBefore(re(I[1]), "day"), L = re(k).isSameOrAfter(re(I[0]), "day");
        return $ && L;
      }
      return A.includes(k);
    }, g = (k) => {
      if (k < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Tr("button")
        };
      var {
        choose: {
          chooseDay: A
        },
        preview: {
          previewYear: I,
          previewMonth: C
        },
        componentProps: {
          allowedDates: $,
          color: L,
          multiple: Y,
          range: j
        }
      } = e, F = I + "-" + C.index + "-" + k, Z = () => j || Y ? S(F) : z(A) === k && f.value, H = () => T(k) ? $ ? !$(F) : !1 : !0, X = H(), E = () => X ? !0 : j || Y ? !S(F) : !f.value || z(A) !== k, R = () => v.value && z(i) === k && e.componentProps.showCurrent ? (j || Y || f.value) && X ? !0 : j || Y ? !S(F) : f.value ? A !== i : !0 : !1, U = () => X ? "" : R() ? L != null ? L : "" : Z() ? "" : et() + "-color-cover", x = U().startsWith(et());
      return {
        text: E(),
        outline: R(),
        textColor: x ? "" : U(),
        [et() + "-color-cover"]: x,
        class: jf(Tr("button"), Tr("button--usable"), [X, Tr("button--disabled")])
      };
    }, P = (k) => {
      l.value = k === "prev", s.value += k === "prev" ? -1 : 1, r("check-preview", "month", k);
    }, b = (k, A) => {
      var I = A.currentTarget;
      I.classList.contains(Tr("button--disabled")) || r("choose-day", k);
    }, D = (k) => {
      u.value.checkDate(k);
    };
    return Fe(() => {
      w(), O();
    }), ae(() => e.preview, () => {
      w(), O();
    }), {
      n: Tr,
      nDate: et,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: p,
      checkDate: P,
      chooseDay: b,
      buttonProps: g
    };
  }
});
var {
  n: Kf,
  classes: Xf
} = ne("date-picker");
function Zf(e, n) {
  var r = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [B(
      "div",
      {
        class: c(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [G(e.$slots, "year", {
          year: e.chooseYear
        }, () => [he(
          _(e.chooseYear),
          1
        )])],
        2
      ), B(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [ee(
          Le,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: fe(() => {
              var i, o, l;
              return [e.type === "month" ? (h(), V("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? G(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [he(
                _(e.getMonthTitle),
                1
              )]) : e.multiple ? G(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [he(
                _(e.getMonthTitle),
                1
              )]) : G(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [he(
                _(e.getMonthTitle),
                1
              )])])) : (h(), V("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? G(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [he(
                _(e.getDateTitle),
                1
              )]) : e.multiple ? G(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [he(
                _(e.getDateTitle),
                1
              )]) : G(e.$slots, "date", fl(Ve({
                key: 2
              }, e.slotProps)), () => [he(
                _(e.getDateTitle),
                1
              )])]))];
            }),
            _: 3
          },
          8,
          ["name"]
        )],
        2
      )],
      6
    ), B(
      "div",
      {
        class: c(e.n("body")),
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
      [ee(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: fe(() => [e.getPanelType === "year" ? (h(), me(
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
          )) : e.getPanelType === "month" ? (h(), me(
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
          )) : e.getPanelType === "date" ? (h(), me(
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
          )) : J("v-if", !0)]),
          _: 1
        },
        8,
        ["name"]
      )],
      34
    )],
    2
  );
}
const Hr = Q({
  render: Zf,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Rf,
    YearPickerPanel: Hf,
    DayPickerPanel: qf
  },
  props: Bf,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = re().format("YYYY-MM-D"), [o, l] = i.split("-"), s = it.find((oe) => oe.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), p = M(), y = M(s), w = M(o), O = M(!1), T = M([]), S = M([]), g = M([]), P = M([]), b = M(null), D = M(null), k = Ne({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), A = W(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: T.value,
      chooseDays: S.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: P.value
    })), I = W(() => ({
      previewMonth: y.value,
      previewYear: w.value
    })), C = W(() => {
      var {
        multiple: oe,
        range: pe
      } = e;
      if (pe)
        return g.value.length ? g.value[0] + " ~ " + g.value[1] : "";
      var ce = "";
      if (f.value) {
        var ge, ye;
        ce = (ge = (ye = Ye.value.datePickerMonthDict) == null ? void 0 : ye[f.value.index].name) != null ? ge : "";
      }
      return oe ? "" + T.value.length + Ye.value.datePickerSelected : ce;
    }), $ = W(() => {
      var oe, pe, ce, ge, {
        multiple: ye,
        range: Be
      } = e;
      if (Be) {
        var Xe = P.value.map((At) => re(At).format("YYYY-MM-DD"));
        return Xe.length ? Xe[0] + " ~ " + Xe[1] : "";
      }
      if (ye)
        return "" + S.value.length + Ye.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var ln = re(m.value + "-" + f.value.index + "-" + p.value).day(), $r = Da.find((At) => At.index === "" + ln), Qi = (oe = (pe = Ye.value.datePickerWeekDict) == null ? void 0 : pe[$r.index].name) != null ? oe : "", Ys = (ce = (ge = Ye.value.datePickerMonthDict) == null ? void 0 : ge[f.value.index].name) != null ? ce : "", Ws = hr(p.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + Ws + " " + Qi.slice(0, 3) : Qi.slice(0, 3) + ", " + Ys.slice(0, 3) + " " + p.value;
    }), L = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = W(() => !e.touchable || ["", "year"].includes(L.value)), j = W(() => {
      var oe, pe, ce, ge, ye = re(m.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + p.value).day(), Be = p.value ? hr(p.value, 2, "0") : "";
      return {
        week: "" + ye,
        year: (pe = m.value) != null ? pe : "",
        month: (ce = (ge = f.value) == null ? void 0 : ge.index) != null ? ce : "",
        date: Be
      };
    }), F = W(() => A.value.chooseRangeDay.map((oe) => re(oe).format("YYYY-MM-DD"))), Z = W(() => m.value === w.value), H = W(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === y.value.index;
    }), X = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, E = (oe) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: ce
        } = oe.touches[0];
        n = pe, r = ce;
      }
    }, R = (oe, pe) => oe >= pe && oe > 20 ? "x" : "y", U = (oe) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: ce
        } = oe.touches[0], ge = pe - n, ye = ce - r;
        t = R(Math.abs(ge), Math.abs(ye)), a = ge > 0 ? "prev" : "next";
      }
    }, x = () => {
      if (!(Y.value || t !== "x")) {
        var oe = L.value === "month" ? b : D;
        St(() => {
          oe.value.forwardRef(a), Ji();
        });
      }
    }, ie = (oe, pe) => {
      var ce = pe === "month" ? g : P;
      if (ce.value = v.value ? [oe, oe] : [ce.value[0], oe], v.value = !v.value, v.value) {
        var ge = re(ce.value[0]).isAfter(ce.value[1]), ye = ge ? [ce.value[1], ce.value[0]] : [...ce.value];
        N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
      }
    }, le = (oe, pe) => {
      var ce = pe === "month" ? T : S, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-DD", ye = ce.value.map((Xe) => re(Xe).format(ge)), Be = ye.findIndex((Xe) => Xe === oe);
      Be === -1 ? ye.push(oe) : ye.splice(Be, 1), N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
    }, de = (oe, pe) => !m.value || !f.value ? !1 : Z.value ? oe === "month" ? pe.index < f.value.index : H.value ? pe < z(p.value) : f.value.index > y.value.index : m.value > w.value, we = (oe) => {
      var {
        readonly: pe,
        range: ce,
        multiple: ge,
        onChange: ye,
        "onUpdate:modelValue": Be
      } = e;
      if (!(oe < 0 || pe)) {
        O.value = de("day", oe);
        var Xe = w.value + "-" + y.value.index + "-" + oe, ln = re(Xe).format("YYYY-MM-DD");
        ce ? ie(ln, "day") : ge ? le(ln, "day") : (N(Be, ln), N(ye, ln));
      }
    }, Re = (oe) => {
      var {
        type: pe,
        readonly: ce,
        range: ge,
        multiple: ye,
        onChange: Be,
        onPreview: Xe,
        "onUpdate:modelValue": ln
      } = e;
      if (O.value = de("month", oe), pe === "month" && !ce) {
        var $r = w.value + "-" + oe.index;
        ge ? ie($r, "month") : ye ? le($r, "month") : (N(ln, $r), N(Be, $r));
      } else
        y.value = oe, N(Xe, z(w.value), z(y.value.index));
      d.value = !1;
    }, Qe = (oe) => {
      w.value = "" + oe, u.value = !1, d.value = !0, N(e.onPreview, z(w.value), z(y.value.index));
    }, Me = (oe, pe) => {
      var ce = pe === "prev" ? -1 : 1;
      if (oe === "year")
        w.value = "" + (z(w.value) + ce);
      else {
        var ge = z(y.value.index) + ce;
        ge < 1 && (w.value = "" + (z(w.value) - 1), ge = 12), ge > 12 && (w.value = "" + (z(w.value) + 1), ge = 1), y.value = it.find((ye) => z(ye.index) === ge);
      }
      N(e.onPreview, z(w.value), z(y.value.index));
    }, on = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Bt = (oe) => Ce(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Fs = (oe, pe) => {
      var ce = pe === "month" ? g : P, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = oe.map((ln) => re(ln).format(ge)).slice(0, 2), Be = ce.value.some((ln) => Bt(ln));
      if (!Be) {
        ce.value = ye;
        var Xe = re(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Xe && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Rs = (oe, pe) => {
      var ce = pe === "month" ? T : S, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = Array.from(new Set(oe.map((Be) => re(Be).format(ge))));
      ce.value = ye.filter((Be) => Be !== "Invalid Date");
    }, Us = (oe) => {
      var pe = re(oe).format("YYYY-MM-D");
      if (!Bt(pe)) {
        var [ce, ge, ye] = pe.split("-"), Be = it.find((Xe) => Xe.index === ge);
        f.value = Be, m.value = ce, p.value = ye, y.value = Be, w.value = ce;
      }
    }, Ji = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ae(() => e.modelValue, (oe) => {
      if (!(!on() || Bt(oe) || !oe))
        if (e.range) {
          if (!Ce(oe))
            return;
          v.value = oe.length !== 1, Fs(oe, e.type);
        } else if (e.multiple) {
          if (!Ce(oe))
            return;
          Rs(oe, e.type);
        } else
          Us(oe);
    }, {
      immediate: !0
    }), ae(L, Ji), {
      n: Kf,
      classes: Xf,
      monthPanelEl: b,
      dayPanelEl: D,
      reverse: O,
      currentDate: i,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: w,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: $,
      getPanelType: L,
      getChoose: A,
      getPreview: I,
      componentProps: k,
      slotProps: j,
      formatRange: F,
      clickEl: X,
      handleTouchstart: E,
      handleTouchmove: U,
      handleTouchend: x,
      getChooseDay: we,
      getChooseMonth: Re,
      getChooseYear: Qe,
      checkPreview: Me
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, di.apply(this, arguments);
}
function Jf(e) {
  return ["left", "center", "right"].includes(e);
}
var Qf = di({
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
    validator: Jf
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
  onBeforeClose: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  }
}, _e(qa, [
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
  "onRouteChange"
]));
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vi.apply(this, arguments);
}
var {
  n: xf,
  classes: _f
} = ne("dialog");
function ec(e, n) {
  var r = te("var-button"), a = te("var-popup");
  return h(), me(
    a,
    {
      class: c(e.n("popup")),
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
      default: fe(() => [B(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: vi({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [B(
          "div",
          {
            class: c(e.n("title"))
          },
          [G(e.$slots, "title", {}, () => [he(
            _(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), B(
          "div",
          {
            class: c(e.n("message")),
            style: K({
              textAlign: e.messageAlign
            })
          },
          [G(e.$slots, "default", {}, () => [he(
            _(e.message),
            1
          )])],
          6
        ), B(
          "div",
          {
            class: c(e.n("actions"))
          },
          [e.cancelButton ? (h(), me(
            r,
            {
              key: 0,
              class: c(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: fe(() => [he(
                _(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : J("v-if", !0), e.confirmButton ? (h(), me(
            r,
            {
              key: 1,
              class: c(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: fe(() => [he(
                _(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : J("v-if", !0)],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
const fr = Q({
  render: ec,
  name: "VarDialog",
  components: {
    VarPopup: yn,
    VarButton: nn
  },
  inheritAttrs: !1,
  props: Qf,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => N(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (N(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        N(e["onUpdate:show"], !1);
      }
    }, i = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (N(s), l != null) {
        l("confirm", a);
        return;
      }
      N(e["onUpdate:show"], !1);
    }, o = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (N(s), l != null) {
        l("cancel", a);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), ae(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: xf,
      classes: _f,
      pack: Ye,
      dt: bt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: be
    };
  }
});
var Yn;
function yr(e) {
  return Bi() ? new Promise((n) => {
    yr.close();
    var r = qe(e) || je(e) ? {
      message: String(e)
    } : e, a = Ne(r);
    a.teleport = "body", Yn = a;
    var {
      unmountInstance: t
    } = Ea(fr, a, {
      onConfirm: () => {
        a.onConfirm == null || a.onConfirm(), n("confirm");
      },
      onCancel: () => {
        a.onCancel == null || a.onCancel(), n("cancel");
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n("close");
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), Yn === a && (Yn = null);
      },
      onRouteChange: () => {
        t(), Yn === a && (Yn = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
fr.install = function(e) {
  e.component(fr.name, fr);
};
yr.install = function(e) {
  e.component(fr.name, fr);
};
yr.close = () => {
  if (Yn != null) {
    var e = Yn;
    Yn = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
yr.Component = fr;
var nc = {
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
function Ir() {
  return Ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ir.apply(this, arguments);
}
var {
  n: rc,
  classes: ac
} = ne("divider");
function tc(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [G(e.$slots, "default", {}, () => [e.description ? (h(), V(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      _(e.description),
      3
    )) : J("v-if", !0)])],
    6
  );
}
const jr = Q({
  render: tc,
  name: "VarDivider",
  props: nc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = W(() => jt(e.inset) ? e.inset : !0), i = W(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (jt(l) || l === 0)
        return Ir({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Ir({}, d, {
        height: "calc(80% - " + be(f) + ")"
      }) : Ir({}, d, {
        width: "calc(100% - " + be(f) + ")",
        left: v > 0 ? be(f) : be(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Fe(() => {
      o();
    }), Ii(() => {
      o();
    }), Ir({
      n: rc,
      classes: ac
    }, Ks(a), {
      style: i,
      isInset: t
    });
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var ic = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  }
};
function To(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function oc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        To(i, a, t, o, l, "next", s);
      }
      function l(s) {
        To(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: lc
} = ne("form");
function sc(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Kn = Q({
  render: sc,
  name: "VarForm",
  props: ic,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Yd(), i = /* @__PURE__ */ function() {
      var u = oc(function* () {
        var d = yield Promise.all(a.map((v) => {
          var {
            validate: f
          } = v;
          return f();
        }));
        return d.every((v) => v === !0);
      });
      return function() {
        return u.apply(this, arguments);
      };
    }(), o = () => a.forEach((u) => {
      var {
        reset: d
      } = u;
      return d();
    }), l = () => a.forEach((u) => {
      var {
        resetValidation: d
      } = u;
      return d();
    }), s = {
      disabled: n,
      readonly: r
    };
    return t(s), {
      n: lc,
      validate: i,
      reset: o,
      resetValidation: l
    };
  }
});
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
Kn.useValidation = cn;
Kn.useForm = mn;
function Oo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Pt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Oo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Oo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fi.apply(this, arguments);
}
var uc = "background-image", dc = "lazy-loading", vc = "lazy-error", Vo = "lazy-attempt", fc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], ci = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", $a = [], mt = [], ts = _s(100), Ae = {
  loading: ci,
  error: ci,
  attempt: 3,
  throttleWait: 300,
  events: fc
}, Ui = Di(Xa, Ae.throttleWait);
function Mt(e, n) {
  e._lazy.arg === uc ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function cc(e) {
  e._lazy.loading && Mt(e, e._lazy.loading), Xa();
}
function mc(e) {
  e._lazy.error && Mt(e, e._lazy.error), e._lazy.state = "error", Wi(e), Xa();
}
function is(e, n) {
  Mt(e, n), e._lazy.state = "success", Wi(e), Xa();
}
function pc(e) {
  var n;
  mt.includes(e) || (mt.push(e), (n = Ae.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ui, {
      passive: !0
    });
  }));
}
function hc() {
  mt.forEach((e) => {
    var n;
    (n = Ae.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ui);
    });
  }), mt.length = 0;
}
function gc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(dc)) != null ? r : Ae.loading,
    error: (a = e.getAttribute(vc)) != null ? a : Ae.error,
    attempt: e.getAttribute(Vo) ? Number(e.getAttribute(Vo)) : Ae.attempt
  };
  e._lazy = fi({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Mt(e, ci), N(Ae.filter, e._lazy);
}
function yc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ts.add(n), is(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? mc(e) : os(e);
  });
}
function os(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ts.has(n)) {
      is(e, n), e._lazy.attemptLock = !1;
      return;
    }
    cc(e), yc(e, n);
  }
}
function Yi(e) {
  return mi.apply(this, arguments);
}
function mi() {
  return mi = Pt(function* (e) {
    (yield ru(e)) && os(e);
  }), mi.apply(this, arguments);
}
function Xa() {
  $a.forEach((e) => Yi(e));
}
function bc(e) {
  return pi.apply(this, arguments);
}
function pi() {
  return pi = Pt(function* (e) {
    !$a.includes(e) && $a.push(e), au(e).forEach(pc), yield Yi(e);
  }), pi.apply(this, arguments);
}
function Wi(e) {
  yt($a, e), $a.length === 0 && hc();
}
function wc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ls(e, n) {
  return hi.apply(this, arguments);
}
function hi() {
  return hi = Pt(function* (e, n) {
    gc(e, n), yield bc(e);
  }), hi.apply(this, arguments);
}
function Sc(e, n) {
  return gi.apply(this, arguments);
}
function gi() {
  return gi = Pt(function* (e, n) {
    if (!wc(e, n)) {
      $a.includes(e) && (yield Yi(e));
      return;
    }
    yield ls(e, n);
  }), gi.apply(this, arguments);
}
function Cc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: i,
    filter: o
  } = e;
  Ae.events = n != null ? n : Ae.events, Ae.loading = r != null ? r : Ae.loading, Ae.error = a != null ? a : Ae.error, Ae.attempt = t != null ? t : Ae.attempt, Ae.throttleWait = i != null ? i : Ae.throttleWait, Ae.filter = o;
}
var pt = {
  mounted: ls,
  unmounted: Wi,
  updated: Sc,
  install(e, n) {
    Cc(n), Ui = Di(Xa, Ae.throttleWait), e.directive("lazy", this);
  }
};
function kc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var $c = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: kc,
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
  onClick: {
    type: Function
  },
  onLoad: {
    type: Function
  },
  onError: {
    type: Function
  }
}, {
  n: Tc,
  classes: Oc
} = ne("image"), Vc = ["alt", "title", "lazy-error", "lazy-loading"], Pc = ["alt", "title", "src"];
function Mc(e, n) {
  var r = Ge("lazy"), a = Ge("ripple");
  return ke((h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((h(), V(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: K({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      Vc
    )), [[r, e.src]]) : (h(), V(
      "img",
      {
        key: 1,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: K({
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
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      Pc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Gr = Q({
  render: Mc,
  name: "VarImage",
  directives: {
    Lazy: pt,
    Ripple: Ue
  },
  props: $c,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: i,
        onLoad: o,
        onError: l
      } = e;
      i ? (t._lazy.state === "success" && N(o, a), t._lazy.state === "error" && N(l, a)) : N(o, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: i
      } = e;
      !t && N(i, a);
    };
    return {
      n: Tc,
      classes: Oc,
      toSizeUnit: be,
      handleLoad: n,
      handleError: r
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var ss = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), us = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Ec() {
  var {
    childProviders: e,
    bindChildren: n
  } = vn(ss), {
    length: r
  } = Sn(us);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var ds = {
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
  onChange: {
    type: Function
  }
};
function Po(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ic(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Po(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Po(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var Nc = 250, Dc = 20, {
  n: Bc,
  classes: Ac
} = ne("swipe"), zc = ["onClick"];
function Lc(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: K({
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
      [G(e.$slots, "default")],
      38
    ), G(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), V(
        Oe,
        null,
        De(e.length, (r, a) => (h(), V(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: K({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          zc
        ))),
        128
      ))],
      2
    )) : J("v-if", !0)])],
    2
  );
}
const Xn = Q({
  render: Lc,
  name: "VarSwipe",
  props: ds,
  setup(e) {
    var n = M(null), r = M(0), a = W(() => e.vertical), t = M(0), i = M(0), o = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Ec(), v = !1, f = -1, m, p, y, w, O, T = (E) => s.find((R) => {
      var {
        index: U
      } = R;
      return U.value === E;
    }), S = () => {
      !e.loop || (i.value >= 0 && T(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && T(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (T(d.value - 1).setTranslate(0), T(0).setTranslate(0)));
    }, g = (E) => {
      var R = je(E) ? E : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: U
      } = e;
      return R <= -1 ? U ? -1 : 0 : R >= d.value ? U ? d.value : d.value - 1 : R;
    }, P = (E) => {
      var {
        loop: R
      } = e;
      return E === -1 ? R ? d.value - 1 : 0 : E === d.value ? R ? 0 : d.value - 1 : E;
    }, b = (E) => {
      var {
        loop: R
      } = e;
      return E < 0 ? R ? d.value - 1 : 0 : E > d.value - 1 ? R ? 0 : d.value - 1 : E;
    }, D = (E) => {
      var R = i.value >= r.value, U = i.value <= -t.value, x = 0, ie = -(t.value - r.value);
      o.value = !0, (R || U) && (o.value = !0, i.value = U ? x : ie, T(0).setTranslate(0), T(d.value - 1).setTranslate(0)), St(() => {
        o.value = !1, N(E);
      });
    }, k = () => {
      l.value = b(z(e.initialIndex));
    }, A = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (I(), f = window.setTimeout(() => {
        F(), A();
      }, z(E)));
    }, I = () => {
      f && clearTimeout(f);
    }, C = (E, R) => {
      if (E > R && E > 10)
        return "horizontal";
      if (R > E && R > 10)
        return "vertical";
    }, $ = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: R,
          clientY: U
        } = E.touches[0];
        m = R, p = U, y = performance.now(), v = !0, I(), D(() => {
          o.value = !0;
        });
      }
    }, L = (E) => {
      var {
        touchable: R,
        vertical: U
      } = e;
      if (!(!v || !R)) {
        var {
          clientX: x,
          clientY: ie
        } = E.touches[0], le = Math.abs(x - m), de = Math.abs(ie - p), we = C(le, de), Re = U ? "vertical" : "horizontal";
        if (we === Re) {
          E.preventDefault();
          var Qe = w !== void 0 ? x - w : 0, Me = O !== void 0 ? ie - O : 0;
          w = x, O = ie, i.value += U ? Me : Qe, S();
        }
      }
    }, Y = () => {
      if (!!v) {
        var {
          vertical: E,
          onChange: R
        } = e, U = E ? O < p : w < m, x = Math.abs(E ? p - O : m - w), ie = performance.now() - y <= Nc && x >= Dc, le = ie ? g(U ? l.value + 1 : l.value - 1) : g();
        v = !1, o.value = !1, w = void 0, O = void 0, i.value = le * -r.value;
        var de = l.value;
        l.value = P(le), A(), de !== l.value && N(R, l.value);
      }
    }, j = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((E) => {
        E.setTranslate(0);
      }), A(), setTimeout(() => {
        o.value = !1;
      });
    }, F = () => {
      if (!(d.value <= 1)) {
        var {
          loop: E,
          onChange: R
        } = e, U = l.value;
        l.value = b(U + 1), N(R, l.value), D(() => {
          if (U === d.value - 1 && E) {
            T(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          U !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, Z = () => {
      if (!(d.value <= 1)) {
        var {
          loop: E,
          onChange: R
        } = e, U = l.value;
        l.value = b(U - 1), N(R, l.value), D(() => {
          if (U === 0 && E) {
            T(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          U !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, H = (E) => {
      if (!(d.value <= 1 || E === l.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var R = E > l.value ? F : Z;
        Array.from({
          length: Math.abs(E - l.value)
        }).forEach(R);
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), ae(() => d.value, /* @__PURE__ */ Ic(function* () {
      yield Tn(), k(), j();
    })), Fe(() => {
      window.addEventListener("resize", j);
    }), rr(() => {
      window.removeEventListener("resize", j), I();
    }), {
      n: Bc,
      classes: Ac,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: $,
      handleTouchmove: L,
      handleTouchend: Y,
      next: F,
      prev: Z,
      to: H,
      resize: j,
      toNumber: z
    };
  }
});
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
function Fc() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn(ss), {
    index: r
  } = Cn(us);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Rc
} = ne("swipe-item");
function Uc(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n()),
      style: K({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const Zn = Q({
  render: Uc,
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Fc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: Rc,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yi.apply(this, arguments);
}
var Yc = yi({
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
  "onUpdate:show": {
    type: Function
  }
}, _e(ds, ["loop", "indicator", "onChange"]), _e(qa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: Mo,
  classes: Wc
} = ne("image-preview"), Eo = 12, Io = 200, Hc = 350, No = 200, jc = ["src", "alt"];
function Gc(e, n) {
  var r = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), i = te("var-popup");
  return h(), me(
    i,
    {
      class: c(e.n("popup")),
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
      default: fe(() => [ee(
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
          default: fe(() => [(h(!0), V(
            Oe,
            null,
            De(e.images, (o) => (h(), me(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: fe(() => [B(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: K({
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
                  [B(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    jc
                  )],
                  38
                )]),
                _: 2
              },
              1032,
              ["class"]
            ))),
            128
          ))]),
          indicator: fe((o) => {
            var {
              index: l,
              length: s
            } = o;
            return [G(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), V(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              _(l + 1) + " / " + _(s),
              3
            )) : J("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), G(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), me(
        t,
        {
          key: 0,
          class: c(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : J("v-if", !0)]), B(
        "div",
        {
          class: c(e.n("extra"))
        },
        [G(e.$slots, "extra")],
        2
      )]),
      _: 3
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const cr = Q({
  render: Gc,
  name: "VarImagePreview",
  components: {
    VarSwipe: Xn,
    VarSwipeItem: Zn,
    VarPopup: yn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Yc,
  setup(e) {
    var n = M(!1), r = W(() => {
      var {
        images: I,
        current: C
      } = e, $ = I.findIndex((L) => L === C);
      return $ >= 0 ? $ : 0;
    }), a = M(1), t = M(0), i = M(0), o = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (I, C) => {
      var {
        clientX: $,
        clientY: L
      } = I, {
        clientX: Y,
        clientY: j
      } = C;
      return Math.abs(Math.sqrt(Math.pow(Y - $, 2) + Math.pow(j - L, 2)));
    }, m = (I, C) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: C
    }), p = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, No);
    }, y = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, w = (I) => d ? f(d, I) <= Eo && I.timestamp - d.timestamp <= Io && d.target === I.target : !1, O = (I) => !I || !u || !d ? !1 : f(u, d) <= Eo && Date.now() - d.timestamp < Hc && (I === u.target || I.parentNode === u.target), T = (I) => {
      v = window.setTimeout(() => {
        O(I.target) && A(), u = null;
      }, Io);
    }, S = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = I, $ = m(C[0], I.currentTarget);
      if (u = $, w($)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = $;
    }, g = (I) => {
      var {
        offsetWidth: C,
        offsetHeight: $
      } = I, {
        naturalWidth: L,
        naturalHeight: Y
      } = I.querySelector("." + Mo("image"));
      return {
        width: C,
        height: $,
        imageRadio: Y / L,
        rootRadio: $ / C,
        zoom: z(e.zoom)
      };
    }, P = (I) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: L,
        width: Y,
        height: j
      } = g(I);
      if (!$)
        return 0;
      var F = $ > L ? j / $ : Y;
      return Math.max(0, (C * F - Y) / 2) / C;
    }, b = (I) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: L,
        width: Y,
        height: j
      } = g(I);
      if (!$)
        return 0;
      var F = $ > L ? j : Y * $;
      return Math.max(0, (C * F - j) / 2) / C;
    }, D = (I, C, $) => I + C >= $ ? $ : I + C <= -$ ? -$ : I + C, k = (I) => {
      if (!!d) {
        var C = I.currentTarget, {
          touches: $
        } = I, L = m($[0], C);
        if (a.value > 1) {
          var Y = L.clientX - d.clientX, j = L.clientY - d.clientY, F = P(C), Z = b(C);
          t.value = D(t.value, Y, F), i.value = D(i.value, j, Z);
        }
        d = L;
      }
    }, A = () => {
      if (a.value > 1) {
        y(), setTimeout(() => N(e["onUpdate:show"], !1), No);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: Mo,
      classes: Wc,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: S,
      handleTouchmove: k,
      handleTouchend: T,
      close: A
    };
  }
});
var Wn;
function er(e) {
  if (!!Bi()) {
    er.close();
    var n = qe(e) ? {
      images: [e]
    } : Ce(e) ? {
      images: e
    } : e, r = Ne(n);
    r.teleport = "body", Wn = r;
    var {
      unmountInstance: a
    } = Ea(cr, r, {
      onClose: () => r.onClose == null ? void 0 : r.onClose(),
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Wn === r && (Wn = null);
      },
      onRouteChange: () => {
        a(), Wn === r && (Wn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
er.close = () => {
  if (Wn != null) {
    var e = Wn;
    Wn = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
cr.install = function(e) {
  e.component(cr.name, cr);
};
er.install = function(e) {
  e.component(cr.name, cr);
};
er.Component = cr;
var vs = {
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
  onScroll: {
    type: Function
  }
};
function Do(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function qc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Do(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Do(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Kc,
  classes: Xc
} = ne("sticky");
function Zc(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: K({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [B(
      "div",
      {
        class: c(e.n("wrapper")),
        ref: "wrapperEl",
        style: K({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [G(e.$slots, "default")],
      6
    )],
    6
  );
}
const Jn = Q({
  render: Zc,
  name: "VarSticky",
  props: vs,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), i = M("0px"), o = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = W(() => !e.disabled && e.cssMode), v = W(() => !e.disabled && a.value), f = W(() => Ie(e.offsetTop)), m, p = () => {
      var {
        onScroll: O,
        cssMode: T,
        disabled: S
      } = e;
      if (!S) {
        var g = 0;
        if (m !== window) {
          var {
            top: P
          } = m.getBoundingClientRect();
          g = P;
        }
        var b = r.value, D = n.value, {
          top: k,
          left: A
        } = D.getBoundingClientRect(), I = k - g;
        I <= f.value ? (T || (o.value = D.offsetWidth + "px", l.value = D.offsetHeight + "px", t.value = g + f.value + "px", i.value = A + "px", s.value = b.offsetWidth + "px", u.value = b.offsetHeight + "px", a.value = !0), N(O, f.value, !0)) : (a.value = !1, N(O, I, !1));
      }
    }, y = /* @__PURE__ */ function() {
      var O = qc(function* () {
        yield Tn(), m = Ma(n.value), m !== window && m.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return O.apply(this, arguments);
      };
    }(), w = () => {
      m !== window && m.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return ae(() => e.disabled, p), Pi(y), Mi(w), Fe(y), rr(w), {
      n: Kc,
      classes: Xc,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: i,
      fixedWidth: o,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: z
    };
  }
});
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
var fs = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), cs = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Jc() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(fs), {
    length: r
  } = Sn(cs);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Qc() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(fs), {
    index: r
  } = Cn(cs);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var xc = {
  index: {
    type: [Number, String]
  }
}, {
  n: _c,
  classes: em
} = ne("index-anchor");
function nm(e, n) {
  return h(), me(
    Pa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: fe(() => [B(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [G(e.$slots, "default", {}, () => [he(
          _(e.name),
          1
        )])],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
const qr = Q({
  render: nm,
  name: "VarIndexAnchor",
  components: {
    VarSticky: Jn
  },
  inheritAttrs: !1,
  props: xc,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Qc(), t = M(0), i = M(!1), o = W(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (w) => {
      i.value = w;
    }, y = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(y), {
      n: _c,
      classes: em,
      name: o,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: i,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Le
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
var rm = {
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
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  }
};
function Bo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Rt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Bo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Bo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: am,
  classes: tm
} = ne("index-bar"), im = ["onClick"];
function om(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [G(e.$slots, "default"), B(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), V(
        Oe,
        null,
        De(e.anchorNameList, (r) => (h(), V(
          "li",
          {
            key: r,
            class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: K({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          _(r),
          15,
          im
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Kr = Q({
  render: om,
  name: "VarIndexBar",
  props: rm,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Jc(), t = M(""), i = M(null), o = M(null), l = M([]), s = M(), u = W(() => e.sticky), d = W(() => e.cssMode), v = W(() => Ie(e.stickyOffsetTop)), f = W(() => e.zIndex), m = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(m);
    var p = (T) => {
      var S = Ni(T) ? T.name.value : T;
      S === s.value || S === void 0 || (s.value = S, N(e.onChange, S));
    }, y = () => {
      var T = wt(i.value), S = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: g
      } = o.value;
      r.forEach((P, b) => {
        var D = P.ownTop.value, k = T - D + v.value - g, A = b === r.length - 1 ? S : r[b + 1].ownTop.value - P.ownTop.value;
        k >= 0 && k < A && !t.value && (b && !e.cssMode && r[b - 1].setDisabled(!0), P.setDisabled(!1), p(P));
      });
    }, w = /* @__PURE__ */ function() {
      var T = Rt(function* (S, g) {
        var {
          offsetTop: P
        } = o.value;
        if (g && N(e.onClick, S), S !== s.value) {
          var b = r.find((A) => {
            var {
              name: I
            } = A;
            return S === I.value;
          });
          if (!!b) {
            var D = b.ownTop.value - v.value + P, k = Ai(i.value);
            t.value = S, p(S), yield lt(i.value, {
              left: k,
              top: D,
              animation: ml,
              duration: z(e.duration)
            }), St(() => {
              t.value = "";
            });
          }
        }
      });
      return function(g, P) {
        return T.apply(this, arguments);
      };
    }(), O = (T) => {
      $n(() => w(T));
    };
    return ae(() => n.value, /* @__PURE__ */ Rt(function* () {
      yield Tn(), r.forEach((T) => {
        var {
          name: S,
          setOwnTop: g
        } = T;
        S.value && l.value.push(S.value), g();
      });
    })), Fe(/* @__PURE__ */ Rt(function* () {
      yield Tn(), i.value = Ma(o.value), i.value.addEventListener("scroll", y);
    })), Ei(() => {
      N(i.value.removeEventListener, "scroll", y);
    }), {
      n: am,
      classes: tm,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: O,
      anchorClick: w
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
function lm(e) {
  return ["text", "password", "number"].includes(e);
}
var sm = {
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
    validator: lm
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
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onInput: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Ut,
  classes: um
} = ne("input"), dm = ["id", "disabled", "type", "value", "maxlength", "rows"], vm = ["id", "disabled", "type", "value", "maxlength"], fm = ["for"];
function cm(e, n) {
  var r = te("var-icon"), a = te("var-form-details");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "prepend-icon")],
        2
      ), B(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (h(), V(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
        )) : J("v-if", !0), e.textarea ? (h(), V(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: K({
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
          dm
        )) : (h(), V(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: K({
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
          vm
        )), B(
          "label",
          {
            class: c(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: K({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          _(e.placeholder),
          15,
          fm
        )],
        2
      ), B(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), me(
          r,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : J("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : J("v-if", !0), ee(
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
  );
}
const mr = Q({
  render: cm,
  name: "VarInput",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: sm,
  setup(e) {
    var n = M("var-input-" + Ha().uid), r = M(null), a = M(!1), t = W(() => {
      var {
        maxlength: C,
        modelValue: $
      } = e;
      return C ? Hn($) ? "0 / " + C : String($).length + "/" + C : "";
    }), {
      bindForm: i,
      form: o
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = (C) => {
      Pe(() => {
        var {
          validateTrigger: $,
          rules: L,
          modelValue: Y
        } = e;
        s($, C, L, Y);
      });
    }, f = () => {
      var {
        hint: C,
        modelValue: $
      } = e;
      if (!C && !Hn($))
        return Ut("--placeholder-hidden");
      if (C && (!Hn($) || a.value))
        return Ut("--placeholder-hint");
    }, m = (C) => {
      a.value = !0, N(e.onFocus, C), v("onFocus");
    }, p = (C) => {
      a.value = !1, N(e.onBlur, C), v("onBlur");
    }, y = (C) => {
      var $ = C.target, {
        value: L
      } = $;
      L = g(S(L)), $.value = L, N(e["onUpdate:modelValue"], L), N(e.onInput, L, C), v("onInput");
    }, w = (C) => {
      var $ = C.target, {
        value: L
      } = $;
      L = g(S(L)), $.value = L, N(e.onChange, L, C), v("onChange");
    }, O = () => {
      var {
        disabled: C,
        readonly: $,
        clearable: L,
        onClear: Y
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || C || $ || !L || (N(e["onUpdate:modelValue"], ""), N(Y, ""), v("onClear"));
    }, T = (C) => {
      var {
        disabled: $,
        onClick: L
      } = e;
      o != null && o.disabled.value || $ || (N(L, C), v("onClick"));
    }, S = (C) => e.modelModifiers.trim ? C.trim() : C, g = (C) => e.maxlength ? C.slice(0, z(e.maxlength)) : C, P = (C) => {
      var {
        disabled: $,
        readonly: L
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || $ || L || C.stopPropagation();
    }, b = () => {
      N(e["onUpdate:modelValue"], ""), d();
    }, D = () => u(e.rules, e.modelValue), k = () => {
      var C;
      (C = r.value) == null || C.focus();
    }, A = () => {
      r.value.blur();
    }, I = {
      reset: b,
      validate: D,
      resetValidation: d
    };
    return N(i, I), Fe(() => {
      e.autofocus && k();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Ut,
      classes: um,
      isEmpty: Hn,
      computePlaceholderState: f,
      handleFocus: m,
      handleBlur: p,
      handleInput: y,
      handleChange: w,
      handleClear: O,
      handleClick: T,
      handleTouchstart: P,
      validate: D,
      resetValidation: d,
      reset: b,
      focus: k,
      blur: A
    };
  }
});
mr.install = function(e) {
  e.component(mr.name, mr);
};
function mm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function pm(e) {
  return ["always", "hover", "none"].includes(e);
}
var hm = {
  type: {
    type: String,
    default: "default",
    validator: mm
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
    validator: pm
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
  onClick: {
    type: Function
  }
}, {
  n: gm,
  classes: ym
} = ne("link");
function bm(e, n) {
  return h(), me(
    Pa(e.tag),
    Ve(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: fe(() => [G(e.$slots, "default")]),
      _: 3
    },
    16,
    ["class", "style", "onClick"]
  );
}
const Xr = Q({
  render: bm,
  name: "VarLink",
  props: hm,
  setup(e) {
    var n = W(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = W(() => {
      var {
        disabled: t,
        href: i,
        target: o,
        to: l,
        replace: s
      } = e;
      return t ? {} : i ? {
        href: i,
        target: o
      } : l ? {
        to: l,
        target: o,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: i,
        onClick: o
      } = e;
      i || N(o, t);
    };
    return {
      n: gm,
      classes: ym,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: be
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var wm = {
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
  onLoad: {
    type: Function
  },
  "onUpdate:loading": {
    type: Function
  },
  "onUpdate:error": {
    type: Function
  }
};
function Ao(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Sm(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ao(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ao(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Cm,
  classes: km
} = ne("list");
function $m(e, n) {
  var r = te("var-loading"), a = Ge("ripple");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [G(e.$slots, "default"), e.loading ? G(e.$slots, "loading", {
      key: 0
    }, () => [B(
      "div",
      {
        class: c(e.n("loading"))
      },
      [B(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        _(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), ee(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : J("v-if", !0), e.finished ? G(e.$slots, "finished", {
      key: 1
    }, () => [B(
      "div",
      {
        class: c(e.n("finished"))
      },
      _(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : J("v-if", !0), e.error ? G(e.$slots, "error", {
      key: 2
    }, () => [ke((h(), V(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [he(
        _(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : J("v-if", !0), B(
      "div",
      {
        class: c(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
    )],
    2
  );
}
const Zr = Q({
  render: $m,
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: kn
  },
  props: wm,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      N(e["onUpdate:error"], !1), N(e["onUpdate:loading"], !0), N(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ie(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = Sm(function* () {
        yield Pe();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && i() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return Fe(() => {
      a = Ma(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), rr(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: Ye,
      listEl: n,
      detectorEl: r,
      dt: bt,
      isNumber: je,
      load: t,
      check: o,
      n: Cm,
      classes: km
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var Tm = {
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
  classes: Om,
  n: zo
} = ne("loading-bar");
const Vm = Q({
  name: "VarLoadingBar",
  props: Tm,
  setup(e) {
    return () => ee("div", {
      class: Om(zo(), [e.error, zo("--error")]),
      style: {
        zIndex: tn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: be(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: be(e.top)
      }
    }, null);
  }
});
var ms, Lo, an = Ne({
  value: 0,
  opacity: 0,
  error: !1
}), Pm = (e) => {
  Object.assign(an, e);
}, ps = () => {
  ms = window.setTimeout(() => {
    if (!(an.value >= 95)) {
      var e = Math.random();
      an.value < 70 && (e = Math.round(5 * Math.random())), an.value += e, ps();
    }
  }, 200);
}, Mm = () => {
  Lo || (Lo = !0, Ea(Vm, an)), (!an.error || an.value === 100) && (an.value = 0), setTimeout(() => {
    an.opacity = 1;
  }, 200), ps();
}, Em = () => {
  an.value = 100, setTimeout(() => {
    an.opacity = 0, setTimeout(() => {
      an.error = !1;
    }, 250);
  }, 300), window.clearTimeout(ms);
}, Im = () => {
  an.error = !0, Fa.start(), setTimeout(Fa.finish, 300);
}, Fa = {
  start: Mm,
  finish: Em,
  error: Im,
  mergeConfig: Pm
}, Nm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ot(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Nm[n];
  });
}
var En = "top", nr = "bottom", br = "right", Qn = "left", Et = "auto", It = [En, nr, br, Qn], Nt = "start", Ra = "end", Dm = "clippingParents", hs = "viewport", Ia = "popper", Bm = "reference", Fo = /* @__PURE__ */ It.reduce(function(e, n) {
  return e.concat([n + "-" + Nt, n + "-" + Ra]);
}, []), gs = /* @__PURE__ */ [].concat(It, [Et]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Nt, n + "-" + Ra]);
}, []), Am = "beforeRead", zm = "read", Lm = "afterRead", Fm = "beforeMain", Rm = "main", Um = "afterMain", Ym = "beforeWrite", Wm = "write", Hm = "afterWrite", bi = [Am, zm, Lm, Fm, Rm, Um, Ym, Wm, Hm];
function In(e) {
  return e.split("-")[0];
}
var jm = {
  start: "end",
  end: "start"
};
function Ro(e) {
  return e.replace(/start|end/g, function(n) {
    return jm[n];
  });
}
function pn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function wr(e) {
  var n = pn(e).Element;
  return e instanceof n || e instanceof Element;
}
function un(e) {
  var n = pn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Hi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = pn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function tr(e) {
  return ((wr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Aa = Math.max, Uo = Math.min, Ta = Math.round;
function wi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ys() {
  return !/^((?!chrome|android).)*safari/i.test(wi());
}
function Oa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && un(e) && (t = e.offsetWidth > 0 && Ta(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ta(a.height) / e.offsetHeight || 1);
  var o = wr(e) ? pn(e) : window, l = o.visualViewport, s = !ys() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
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
function ji(e) {
  var n = pn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Gi(e) {
  return Oa(tr(e)).left + ji(e).scrollLeft;
}
function Gm(e, n) {
  var r = pn(e), a = tr(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = ys();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + Gi(e),
    y: s
  };
}
function wn(e) {
  return pn(e).getComputedStyle(e);
}
function qm(e) {
  var n, r = tr(e), a = ji(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Aa(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Aa(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Gi(e), s = -a.scrollTop;
  return wn(t || r).direction === "rtl" && (l += Aa(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Vn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Dt(e) {
  return Vn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Hi(e) ? e.host : null) || tr(e);
}
function qi(e) {
  var n = wn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function bs(e) {
  return ["html", "body", "#document"].indexOf(Vn(e)) >= 0 ? e.ownerDocument.body : un(e) && qi(e) ? e : bs(Dt(e));
}
function za(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = bs(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = pn(a), o = t ? [i].concat(i.visualViewport || [], qi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(za(Dt(o)));
}
function Km(e) {
  return ["table", "td", "th"].indexOf(Vn(e)) >= 0;
}
function Yo(e) {
  return !un(e) || wn(e).position === "fixed" ? null : e.offsetParent;
}
function Xm(e) {
  var n = /firefox/i.test(wi()), r = /Trident/i.test(wi());
  if (r && un(e)) {
    var a = wn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Dt(e);
  for (Hi(t) && (t = t.host); un(t) && ["html", "body"].indexOf(Vn(t)) < 0; ) {
    var i = wn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ki(e) {
  for (var n = pn(e), r = Yo(e); r && Km(r) && wn(r).position === "static"; )
    r = Yo(r);
  return r && (Vn(r) === "html" || Vn(r) === "body" && wn(r).position === "static") ? n : r || Xm(e) || n;
}
function Zm(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Hi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Si(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Jm(e, n) {
  var r = Oa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Wo(e, n, r) {
  return n === hs ? Si(Gm(e, r)) : wr(n) ? Jm(n, r) : Si(qm(tr(e)));
}
function Qm(e) {
  var n = za(Dt(e)), r = ["absolute", "fixed"].indexOf(wn(e).position) >= 0, a = r && un(e) ? Ki(e) : e;
  return wr(a) ? n.filter(function(t) {
    return wr(t) && Zm(t, a) && Vn(t) !== "body";
  }) : [];
}
function xm(e, n, r, a) {
  var t = n === "clippingParents" ? Qm(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Wo(e, u, a);
    return s.top = Aa(d.top, s.top), s.right = Uo(d.right, s.right), s.bottom = Uo(d.bottom, s.bottom), s.left = Aa(d.left, s.left), s;
  }, Wo(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ua(e) {
  return e.split("-")[1];
}
function _m(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ws(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? In(a) : null, i = a ? Ua(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case En:
      s = {
        x: o,
        y: n.y - r.height
      };
      break;
    case nr:
      s = {
        x: o,
        y: n.y + n.height
      };
      break;
    case br:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Qn:
      s = {
        x: n.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? _m(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Nt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ra:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function ep() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function np(e) {
  return Object.assign({}, ep(), e);
}
function rp(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Ss(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? Dm : l, u = r.rootBoundary, d = u === void 0 ? hs : u, v = r.elementContext, f = v === void 0 ? Ia : v, m = r.altBoundary, p = m === void 0 ? !1 : m, y = r.padding, w = y === void 0 ? 0 : y, O = np(typeof w != "number" ? w : rp(w, It)), T = f === Ia ? Bm : Ia, S = e.rects.popper, g = e.elements[p ? T : f], P = xm(wr(g) ? g : g.contextElement || tr(e.elements.popper), s, d, o), b = Oa(e.elements.reference), D = ws({
    reference: b,
    element: S,
    strategy: "absolute",
    placement: t
  }), k = Si(Object.assign({}, S, D)), A = f === Ia ? k : b, I = {
    top: P.top - A.top + O.top,
    bottom: A.bottom - P.bottom + O.bottom,
    left: P.left - A.left + O.left,
    right: A.right - P.right + O.right
  }, C = e.modifiersData.offset;
  if (f === Ia && C) {
    var $ = C[t];
    Object.keys(I).forEach(function(L) {
      var Y = [br, nr].indexOf(L) >= 0 ? 1 : -1, j = [En, nr].indexOf(L) >= 0 ? "y" : "x";
      I[L] += $[j] * Y;
    });
  }
  return I;
}
function ap(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? gs : s, d = Ua(a), v = d ? l ? Fo : Fo.filter(function(p) {
    return Ua(p) === d;
  }) : It, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, y) {
    return p[y] = Ss(e, {
      placement: y,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[In(y)], p;
  }, {});
  return Object.keys(m).sort(function(p, y) {
    return m[p] - m[y];
  });
}
function tp(e) {
  if (In(e) === Et)
    return [];
  var n = ot(e);
  return [Ro(e), n, Ro(n)];
}
function ip(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, w = n.options.placement, O = In(w), T = O === w, S = s || (T || !p ? [ot(w)] : tp(w)), g = [w].concat(S).reduce(function(ie, le) {
      return ie.concat(In(le) === Et ? ap(n, {
        placement: le,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : le);
    }, []), P = n.rects.reference, b = n.rects.popper, D = /* @__PURE__ */ new Map(), k = !0, A = g[0], I = 0; I < g.length; I++) {
      var C = g[I], $ = In(C), L = Ua(C) === Nt, Y = [En, nr].indexOf($) >= 0, j = Y ? "width" : "height", F = Ss(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Z = Y ? L ? br : Qn : L ? nr : En;
      P[j] > b[j] && (Z = ot(Z));
      var H = ot(Z), X = [];
      if (i && X.push(F[$] <= 0), l && X.push(F[Z] <= 0, F[H] <= 0), X.every(function(ie) {
        return ie;
      })) {
        A = C, k = !1;
        break;
      }
      D.set(C, X);
    }
    if (k)
      for (var E = p ? 3 : 1, R = function(le) {
        var de = g.find(function(we) {
          var Re = D.get(we);
          if (Re)
            return Re.slice(0, le).every(function(Qe) {
              return Qe;
            });
        });
        if (de)
          return A = de, "break";
      }, U = E; U > 0; U--) {
        var x = R(U);
        if (x === "break")
          break;
      }
    n.placement !== A && (n.modifiersData[a]._skip = !0, n.placement = A, n.reset = !0);
  }
}
const op = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ip,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function lp(e, n, r) {
  var a = In(e), t = [Qn, En].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, o = i[0], l = i[1];
  return o = o || 0, l = (l || 0) * t, [Qn, br].indexOf(a) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function sp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = gs.reduce(function(d, v) {
    return d[v] = lp(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const up = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: sp
};
function dp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vp(e) {
  return e === pn(e) || !un(e) ? ji(e) : dp(e);
}
function fp(e) {
  var n = e.getBoundingClientRect(), r = Ta(n.width) / e.offsetWidth || 1, a = Ta(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function cp(e, n, r) {
  r === void 0 && (r = !1);
  var a = un(n), t = un(n) && fp(n), i = tr(n), o = Oa(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Vn(n) !== "body" || qi(i)) && (l = vp(n)), un(n) ? (s = Oa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Gi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function mp(e) {
  var n = Oa(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function pp(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(i) {
    n.set(i.name, i);
  });
  function t(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), a.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || t(i);
  }), a;
}
function hp(e) {
  var n = pp(e);
  return bi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function gp(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function zn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var ir = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', yp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ho = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function bp(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Ho).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(zn(ir, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(zn(ir, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          bi.indexOf(n.phase) < 0 && console.error(zn(ir, n.name, '"phase"', "either " + bi.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(zn(ir, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(zn(ir, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(zn(ir, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(zn(ir, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Ho.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(zn(yp, String(n.name), a, a));
      });
    });
  });
}
function wp(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Sp(e) {
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
var jo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Cp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Go = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qo() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function kp(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? Go : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Go, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(O) {
        var T = typeof O == "function" ? O(d.options) : O;
        y(), d.options = Object.assign({}, i, d.options, T), d.scrollParents = {
          reference: wr(l) ? za(l) : l.contextElement ? za(l.contextElement) : [],
          popper: za(s)
        };
        var S = hp(Sp([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var g = wp([].concat(S, d.options.modifiers), function(C) {
            var $ = C.name;
            return $;
          });
          if (bp(g), In(d.options.placement) === Et) {
            var P = d.orderedModifiers.find(function(C) {
              var $ = C.name;
              return $ === "flip";
            });
            P || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = wn(s), D = b.marginTop, k = b.marginRight, A = b.marginBottom, I = b.marginLeft;
          [D, k, A, I].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), m.update();
      },
      forceUpdate: function() {
        if (!f) {
          var O = d.elements, T = O.reference, S = O.popper;
          if (!qo(T, S)) {
            process.env.NODE_ENV !== "production" && console.error(jo);
            return;
          }
          d.rects = {
            reference: cp(T, Ki(S), d.options.strategy === "fixed"),
            popper: mp(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var g = 0, P = 0; P < d.orderedModifiers.length; P++) {
            if (process.env.NODE_ENV !== "production" && (g += 1, g > 100)) {
              console.error(Cp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, P = -1;
              continue;
            }
            var b = d.orderedModifiers[P], D = b.fn, k = b.options, A = k === void 0 ? {} : k, I = b.name;
            typeof D == "function" && (d = D({
              state: d,
              options: A,
              name: I,
              instance: m
            }) || d);
          }
        }
      },
      update: gp(function() {
        return new Promise(function(w) {
          m.forceUpdate(), w(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!qo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(jo), m;
    m.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function p() {
      d.orderedModifiers.forEach(function(w) {
        var O = w.name, T = w.options, S = T === void 0 ? {} : T, g = w.effect;
        if (typeof g == "function") {
          var P = g({
            state: d,
            name: O,
            instance: m,
            options: S
          }), b = function() {
          };
          v.push(P || b);
        }
      });
    }
    function y() {
      v.forEach(function(w) {
        return w();
      }), v = [];
    }
    return m;
  };
}
var nt = {
  passive: !0
};
function $p(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = pn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, nt);
  }), l && s.addEventListener("resize", r.update, nt), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, nt);
    }), l && s.removeEventListener("resize", r.update, nt);
  };
}
const Tp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $p,
  data: {}
};
function Op(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ws({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Vp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Op,
  data: {}
};
var Pp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mp(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ta(n * t) / t || 0,
    y: Ta(r * t) / t || 0
  };
}
function Ko(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, m = f === void 0 ? 0 : f, p = o.y, y = p === void 0 ? 0 : p, w = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = w.x, y = w.y;
  var O = o.hasOwnProperty("x"), T = o.hasOwnProperty("y"), S = Qn, g = En, P = window;
  if (u) {
    var b = Ki(r), D = "clientHeight", k = "clientWidth";
    if (b === pn(r) && (b = tr(r), wn(b).position !== "static" && l === "absolute" && (D = "scrollHeight", k = "scrollWidth")), b = b, t === En || (t === Qn || t === br) && i === Ra) {
      g = nr;
      var A = v && b === P && P.visualViewport ? P.visualViewport.height : b[D];
      y -= A - a.height, y *= s ? 1 : -1;
    }
    if (t === Qn || (t === En || t === nr) && i === Ra) {
      S = br;
      var I = v && b === P && P.visualViewport ? P.visualViewport.width : b[k];
      m -= I - a.width, m *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: l
  }, u && Pp), $ = d === !0 ? Mp({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = $.x, y = $.y, s) {
    var L;
    return Object.assign({}, C, (L = {}, L[g] = T ? "0" : "", L[S] = O ? "0" : "", L.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", L));
  }
  return Object.assign({}, C, (n = {}, n[g] = T ? y + "px" : "", n[S] = O ? m + "px" : "", n.transform = "", n));
}
function Ep(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = wn(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: In(n.placement),
    variation: Ua(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Ko(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Ko(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Ip = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ep,
  data: {}
};
function Np(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !un(i) || !Vn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function Dp(e) {
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
      var t = n.elements[a], i = n.attributes[a] || {}, o = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = o.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !un(t) || !Vn(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Bp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Np,
  effect: Dp,
  requires: ["computeStyles"]
};
var Ap = [Tp, Vp, Ip, Bp], zp = /* @__PURE__ */ kp({
  defaultModifiers: Ap
});
function Lp(e) {
  return ["click", "hover"].includes(e);
}
function Fp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Rp = {
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
    validator: Lp
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Fp
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
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ht.apply(this, arguments);
}
function Xo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Xo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Xo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Up,
  classes: Yp
} = ne("menu");
function Wp(e, n) {
  return h(), V(
    "div",
    {
      ref: "host",
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleMouseenter && e.handleMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleMouseleave && e.handleMouseleave(...arguments);
      })
    },
    [G(e.$slots, "default"), (h(), me(
      ja,
      {
        to: e.teleport
      },
      [ee(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [ke(B(
            "div",
            {
              ref: "menu",
              style: K({
                zIndex: e.zIndex
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Nn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handleMenuMouseenter && e.handleMenuMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handleMenuMouseleave && e.handleMenuMouseleave(...arguments);
              })
            },
            [G(e.$slots, "menu")],
            38
          ), [[Ga, e.show]])]),
          _: 3
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
  );
}
const xn = Q({
  render: Wp,
  name: "VarMenu",
  props: Rp,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), {
      zIndex: t
    } = Ka(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: b,
        height: D
      } = getComputedStyle(n.value);
      u = {
        width: Ie(b),
        height: Ie(D)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, g());
    }, f = /* @__PURE__ */ function() {
      var b = Zo(function* () {
        e.trigger === "hover" && (s = !1, yield Tn(), !l && P());
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), m = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var b = Zo(function* () {
        e.trigger === "hover" && (l = !1, yield Tn(), !s && P());
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), y = () => {
      g(), o = !0;
    }, w = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, N(e["onUpdate:show"], !1);
    }, O = () => {
      d();
      var b = {
        x: Ie(e.offsetX),
        y: Ie(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: b.x,
            distance: b.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: b.x,
            distance: b.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: b.x,
            distance: b.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: b.x,
            distance: -b.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: b.x,
            distance: -b.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: b.x,
            distance: -b.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: b.y,
            distance: b.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: b.y,
            distance: -b.x - u.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement: e.placement,
            skidding: b.y,
            distance: -b.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement: e.placement,
            skidding: b.x,
            distance: -b.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement: e.placement,
            skidding: b.x,
            distance: b.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement: e.placement,
            skidding: b.y,
            distance: b.x
          };
      }
    }, T = () => {
      var {
        placement: b,
        skidding: D,
        distance: k
      } = O();
      return {
        placement: b,
        modifiers: [ht({}, op, {
          enabled: a.value
        }), ht({}, up, {
          options: {
            offset: [D, k]
          }
        })]
      };
    }, S = () => {
      i.setOptions(T());
    }, g = () => {
      var {
        disabled: b
      } = e;
      b || (a.value = !0, N(e["onUpdate:show"], !0));
    }, P = () => {
      a.value = !1, N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (b) => {
      a.value = b != null ? b : !1;
    }, {
      immediate: !0
    }), ae(() => e.offsetX, S), ae(() => e.offsetY, S), ae(() => e.placement, S), ae(() => a.value, (b) => {
      b ? (S(), N(e.onOpen)) : N(e.onClose);
    }), ae(() => e.trigger, (b) => {
      b === "click" ? document.addEventListener("click", w) : document.removeEventListener("click", w);
    }), ae(() => e.disabled, P), Fe(() => {
      i = zp(n.value, r.value, T()), e.trigger === "click" && document.addEventListener("click", w);
    }), rr(() => {
      document.removeEventListener("click", w), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: Up,
      classes: Yp,
      handleClick: y,
      handleMenuClose: w,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: m,
      handleMenuMouseleave: p,
      resize: S,
      open: g,
      close: P
    };
  }
});
xn.install = function(e) {
  e.component(xn.name, xn);
};
var Cs = Symbol("SELECT_BIND_OPTION_KEY"), ks = Symbol("SELECT_COUNT_OPTION_KEY");
function Hp() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Cs), {
    length: r
  } = Sn(ks);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function jp() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn(Cs), {
    index: r
  } = Cn(ks);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Gp = {
  label: {},
  value: {}
}, {
  n: qp,
  classes: Kp
} = ne("option");
function Xp(e, n) {
  var r = te("var-checkbox"), a = Ge("ripple");
  return ke((h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: K({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
    ), e.multiple ? (h(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Nn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : J("v-if", !0), B(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [G(e.$slots, "default", {}, () => [he(
        _(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const Jr = Q({
  render: Xp,
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: ur
  },
  props: Gp,
  setup(e) {
    var n = M(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = jp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), m = (y) => {
      n.value = y;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return ae([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), o(p), {
      n: qp,
      classes: Kp,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var Zp = {
  show: {
    type: Boolean,
    default: !1
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  onClick: {
    type: Function
  },
  teleport: {
    type: String
  },
  "onUpdate:show": {
    type: Function
  }
};
function Jp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !gt(e);
}
var {
  n: Jo
} = ne("overlay");
const Qr = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Zp,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ka(() => e.show, 1), {
      disabled: i
    } = zi(), o = () => {
      N(e.onClick), N(e["onUpdate:show"], !1);
    };
    Ct(() => e.show, () => e.lockScroll);
    var l = () => ee("div", Ve({
      class: Jo(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: o
    }), [N(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return ee(Le, {
        name: Jo("--fade")
      }, {
        default: () => [u && l()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return ee(ja, {
          to: u,
          disabled: i.value
        }, Jp(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var Qp = {
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
  onChange: {
    type: Function
  },
  "onUpdate:current": {
    type: Function
  },
  "onUpdate:size": {
    type: Function
  }
}, {
  n: xp,
  classes: _p
} = ne("pagination"), eh = ["item-mode", "onClick"];
function nh(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), i = te("var-menu"), o = Ge("ripple");
  return h(), V(
    "ul",
    {
      class: c(e.n())
    },
    [ke((h(), V(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [G(e.$slots, "prev", {}, () => [ee(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), V(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [ee(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = xi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), B("span", null, [he(
        " / " + _(e.pageCount) + " ",
        1
      ), B(
        "div",
        {
          class: c(e.n("simple-line"))
        },
        null,
        2
      )])],
      2
    )) : (h(!0), V(
      Oe,
      {
        key: 1
      },
      De(e.pageList, (l, s) => ke((h(), V(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [he(
          _(l),
          1
        )],
        10,
        eh
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), ke((h(), V(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [G(e.$slots, "next", {}, () => [ee(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), V(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [ee(
        i,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: fe(() => [(h(!0), V(
            Oe,
            null,
            De(e.sizeOption, (l, s) => ke((h(), me(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: fe(() => [he(
                  _(l) + _(e.pack.paginationItem) + " / " + _(e.pack.paginationPage),
                  1
                )]),
                _: 2
              },
              1032,
              ["class", "onClick"]
            )), [[o]])),
            128
          ))]),
          default: fe(() => [B(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [B(
              "span",
              null,
              _(e.size) + _(e.pack.paginationItem) + " / " + _(e.pack.paginationPage),
              1
            ), ee(
              r,
              {
                class: c(e.n("size--open-icon")),
                "var-pagination-cover": "",
                name: "menu-down"
              },
              null,
              8,
              ["class"]
            )],
            2
          )]),
          _: 1
        },
        8,
        ["show"]
      )],
      2
    )) : J("v-if", !0), e.showQuickJumper && !e.simple ? (h(), V(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [he(
        _(e.pack.paginationJump) + " ",
        1
      ), ee(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = xi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : J("v-if", !0), e.totalText ? (h(), V(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      _(e.totalText),
      3
    )) : J("v-if", !0)],
    2
  );
}
const xr = Q({
  render: nh,
  name: "VarPagination",
  components: {
    VarMenu: xn,
    VarIcon: Te,
    VarCell: sr,
    VarInput: mr
  },
  directives: {
    Ripple: Ue
  },
  props: Qp,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), i = M(!1), o = M(z(e.current) || 1), l = M(z(e.size) || 10), s = M([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(z(e.total) / z(l.value))), v = W(() => {
      var g = l.value * (o.value - 1) + 1, P = Math.min(l.value * o.value, z(e.total));
      return [g, P];
    }), f = W(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), m = (g, P) => je(g) ? !1 : P === 1 ? t.value : i.value, p = (g, P) => je(g) ? "basic" : P === 1 ? "head" : "tail", y = (g, P) => {
      g === o.value || e.disabled || (je(g) ? o.value = g : g === "prev" ? o.value > 1 && (o.value -= 1) : g === "next" ? o.value < d.value && (o.value += 1) : g === "..." && (P === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, w = () => {
      e.disabled || (n.value = !0);
    }, O = (g) => {
      l.value = g, n.value = !1;
    }, T = (g) => {
      var P = /^[1-9][0-9]*$/;
      return P.test(g);
    }, S = (g, P, b) => {
      if (b.target.blur(), T(P)) {
        var D = z(P);
        D > d.value && (D = d.value, a.value = "" + D), D !== o.value && (o.value = D);
      }
      g === "quick" && (r.value = ""), g === "simple" && !T(P) && (a.value = "" + o.value);
    };
    return ae([() => e.current, () => e.size], (g) => {
      var [P, b] = g;
      o.value = z(P) || 1, l.value = z(b || 10);
    }), ae([o, l], (g, P) => {
      var b, D, [k, A] = g, [I, C] = P;
      if (k > d.value) {
        o.value = d.value;
        return;
      }
      var $ = [], {
        maxPagerCount: L,
        total: Y,
        onChange: j
      } = e, F = Math.ceil(z(Y) / z(C)), Z = d.value - (L - u.value) - 1;
      if (a.value = "" + k, d.value - 2 > L) {
        if (I === void 0 || d.value !== F)
          for (var H = 2; H < L + 2; H++)
            $.push(H);
        if (k <= L && k < Z) {
          $ = [];
          for (var X = 1; X < L + 1; X++)
            $.push(X + 1);
          t.value = !0, i.value = !1;
        }
        if (k > L && k < Z) {
          $ = [];
          for (var E = 1; E < L + 1; E++)
            $.push(k + E - u.value);
          t.value = k === 2 && L === 1, i.value = !1;
        }
        if (k >= Z) {
          $ = [];
          for (var R = 1; R < L + 1; R++)
            $.push(d.value - (L - R) - 1);
          t.value = !1, i.value = !0;
        }
        $ = [1, "...", ...$, "...", d.value];
      } else
        for (var U = 1; U <= d.value; U++)
          $.push(U);
      s.value = $, I !== void 0 && d.value > 0 && (j == null || j(k, A)), (b = e["onUpdate:current"]) == null || b.call(e, k), (D = e["onUpdate:size"]) == null || D.call(e, A);
    }, {
      immediate: !0
    }), {
      n: xp,
      classes: _p,
      pack: Ye,
      current: o,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: p,
      isHideEllipsis: m,
      clickItem: y,
      showMenu: w,
      clickSize: O,
      setPage: S,
      toNumber: z
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
function Ci() {
  return Ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ci.apply(this, arguments);
}
var rh = Ci({
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
  dynamic: {
    type: Boolean,
    default: !1
  },
  onChange: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  }
}, _e(qa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: ah,
  classes: th
} = ne("picker"), Qo = 300, ih = 15, xo = 0, oh = ["onTouchstart", "onTouchmove", "onTouchend"], lh = ["onTransitionend"];
function sh(e, n) {
  var r = te("var-button");
  return h(), me(
    Pa(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: fe(() => [B(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [B(
          "div",
          {
            class: c(e.n("toolbar"))
          },
          [G(e.$slots, "cancel", {}, () => [ee(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: fe(() => [he(
                _(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), G(e.$slots, "title", {}, () => [B(
            "div",
            {
              class: c(e.n("title"))
            },
            _(e.dt(e.title, e.pack.pickerTitle)),
            3
          )]), G(e.$slots, "confirm", {}, () => [ee(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: fe(() => [he(
                _(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
        ), B(
          "div",
          {
            class: c(e.n("columns")),
            style: K({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), V(
            Oe,
            null,
            De(e.scrollColumns, (a) => (h(), V(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Nn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [B(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: K({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), V(
                  Oe,
                  null,
                  De(a.column.texts, (t) => (h(), V(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: K({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [B(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      _(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                lh
              )],
              42,
              oh
            ))),
            128
          )), B(
            "div",
            {
              class: c(e.n("picked")),
              style: K({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
          ), B(
            "div",
            {
              class: c(e.n("mask")),
              style: K({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
          )],
          6
        )],
        16
      )]),
      _: 3
    },
    16
  );
}
const pr = Q({
  render: sh,
  name: "VarPicker",
  components: {
    VarButton: nn,
    VarPopup: yn
  },
  inheritAttrs: !1,
  props: rh,
  setup(e) {
    var n = M([]), r = W(() => Ie(e.optionHeight)), a = W(() => Ie(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = (C, $) => {
      $.scrollEl = C;
    }, s = (C) => {
      N(e["onUpdate:show"], C);
    }, u = (C) => {
      var $ = r.value + t.value, L = t.value - C.column.texts.length * r.value;
      C.translate >= $ && (C.translate = $), C.translate <= L && (C.translate = L);
    }, d = (C, $) => {
      var {
        length: L
      } = C.column.texts;
      return $ = $ >= L ? L - 1 : $, $ = $ <= 0 ? 0 : $, $;
    }, v = (C) => {
      var $ = Math.round((t.value - C.translate) / r.value);
      return d(C, $);
    }, f = () => {
      var C = n.value.map((L) => L.column.texts[L.index]), $ = n.value.map((L) => L.index);
      return {
        texts: C,
        indexes: $
      };
    }, m = function(C, $, L, Y) {
      Y === void 0 && (Y = !1);
      var j = t.value - d(C, $) * r.value;
      j === C.translate && (C.scrolling = !1, !Y && D(C)), C.translate = j, C.duration = L;
    }, p = (C, $, L) => {
      C.translate += Math.abs($ / L) / 3e-3 * ($ < 0 ? -1 : 1);
    }, y = (C, $) => {
      $.touching = !0, $.scrolling = !1, $.duration = 0, $.translate = zt($.scrollEl);
    }, w = (C, $) => {
      if (!!$.touching) {
        var {
          clientY: L
        } = C.touches[0], Y = $.prevY !== void 0 ? L - $.prevY : 0;
        $.prevY = L, $.translate += Y, u($);
        var j = performance.now();
        j - $.momentumTime > Qo && ($.momentumTime = j, $.momentumPrevY = $.translate);
      }
    }, O = (C, $) => {
      $.touching = !1, $.scrolling = !0, $.prevY = void 0;
      var L = $.translate - $.momentumPrevY, Y = performance.now() - $.momentumTime, j = Math.abs(L) >= ih && Y <= Qo;
      j && p($, L, Y), $.index = v($), m($, $.index, j ? 1e3 : 200);
    }, T = (C) => {
      C.scrolling = !1, D(C);
    }, S = (C) => C.map(($, L) => {
      var Y, j = Ce($) ? {
        texts: $
      } : $, F = {
        id: xo++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Y = j.initialIndex) != null ? Y : 0,
        columnIndex: L,
        duration: 0,
        momentumTime: 0,
        column: j,
        scrollEl: null,
        scrolling: !1
      };
      return m(F, F.index, 0, !0), F;
    }), g = (C) => {
      var $ = [];
      return P($, C, 0, !0), $;
    }, P = function(C, $, L, Y) {
      if (Y === void 0 && (Y = !1), Ce($) && $.length) {
        var j, F = Y && (j = e.cascadeInitialIndexes[C.length]) != null ? j : 0, Z = {
          id: xo++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: F,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: $.map((H) => H[e.textKey])
          },
          columns: $,
          scrollEl: null,
          scrolling: !1
        };
        C.push(Z), m(Z, Z.index, 0, !0), P(C, Z.columns[Z.index].children, L + 1, Y);
      }
    }, b = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), P(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, D = (C) => {
      var {
        cascade: $,
        onChange: L
      } = e;
      $ && b(C);
      var Y = n.value.some((H) => H.scrolling);
      if (!Y) {
        var {
          texts: j,
          indexes: F
        } = f(), Z = F.every((H, X) => H === o[X]);
        Z || (o = [...F], N(L, j, F));
      }
    }, k = () => {
      if (e.cascade) {
        var C = n.value.find(($) => $.scrolling);
        C && (C.translate = zt(C.scrollEl), C.index = v(C), m(C, C.index, 0, !0), C.scrolling = !1, b(C));
      } else
        n.value.forEach(($) => {
          $.translate = zt($.scrollEl), $.index = v($), m($, $.index, 0);
        });
    }, A = () => {
      k();
      var {
        texts: C,
        indexes: $
      } = f();
      o = [...$], N(e.onConfirm, C, $);
    }, I = () => {
      k();
      var {
        texts: C,
        indexes: $
      } = f();
      o = [...$], N(e.onCancel, C, $);
    };
    return ae(() => e.columns, (C) => {
      n.value = e.cascade ? g(_i(C)) : S(_i(C));
      var {
        indexes: $
      } = f();
      o = [...$];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: ah,
      classes: th,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Le,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: w,
      handleTouchend: O,
      handleTransitionend: T,
      confirm: A,
      cancel: I,
      dt: bt
    };
  }
});
var xe;
function Sr(e) {
  return new Promise((n) => {
    Sr.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", xe = a;
    var {
      unmountInstance: t
    } = Ea(pr, a, {
      onConfirm: (i, o) => {
        a.onConfirm == null || a.onConfirm(i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, xe === a && (xe = null);
      },
      onCancel: (i, o) => {
        a.onCancel == null || a.onCancel(i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, xe === a && (xe = null);
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n({
          state: "close"
        }), xe === a && (xe = null);
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), xe === a && (xe = null);
      },
      onRouteChange: () => {
        t(), xe === a && (xe = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  });
}
pr.install = function(e) {
  e.component(pr.name, pr);
};
Sr.Component = pr;
Sr.install = function(e) {
  e.component(pr.name, pr);
};
Sr.close = () => {
  if (xe != null) {
    var e = xe;
    xe = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
function uh(e) {
  return ["linear", "circle"].includes(e);
}
var dh = {
  mode: {
    type: String,
    default: "linear",
    validator: uh
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
  n: vh,
  classes: fh
} = ne("progress"), ch = ["viewBox"], mh = ["cx", "cy", "r", "stroke-width"], ph = ["cx", "cy", "r", "stroke-width"];
function hh(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [B(
        "div",
        {
          class: c(e.n("linear-block")),
          style: K({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), V(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: K({
              background: e.trackColor
            })
          },
          null,
          6
        )) : J("v-if", !0), B(
          "div",
          {
            class: c(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: K({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
        )],
        6
      ), e.label ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.linearProps.roundValue),
          1
        )])],
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.mode === "circle" ? (h(), V(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), V(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: K({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), V(
          "circle",
          {
            key: 0,
            class: c(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          mh
        )) : J("v-if", !0), B(
          "circle",
          {
            class: c(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          ph
        )],
        14,
        ch
      )), e.label ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.circleProps.roundValue),
          1
        )])],
        2
      )) : J("v-if", !0)],
      6
    )) : J("v-if", !0)],
    2
  );
}
const _r = Q({
  render: hh,
  name: "VarProgress",
  props: dh,
  setup(e) {
    var n = W(() => {
      var a = z(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = W(() => {
      var {
        size: a,
        lineWidth: t,
        value: i
      } = e, o = "0 0 " + Ie(a) + " " + Ie(a), l = z(i) > 100 ? 100 : Math.round(z(i)), s = (Ie(a) - Ie(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: vh,
      classes: fh,
      toSizeUnit: be,
      multiplySizeUnit: Ze,
      linearProps: n,
      circleProps: r
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var gh = {
  modelValue: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: {
    type: String
  },
  successBgColor: {
    type: String
  },
  color: {
    type: String
  },
  successColor: {
    type: String
  },
  onRefresh: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function _o(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yh(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        _o(i, a, t, o, l, "next", s);
      }
      function l(s) {
        _o(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: bh,
  classes: wh
} = ne("pull-refresh"), el = 150;
function Sh(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      ref: "freshNode",
      class: c(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchmove: n[1] || (n[1] = function() {
        return e.touchMove && e.touchMove(...arguments);
      }),
      onTouchend: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[3] || (n[3] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [B(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: K(e.controlStyle)
      },
      [ee(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
    ), G(e.$slots, "default")],
    34
  );
}
const ea = Q({
  render: Sh,
  name: "VarPullRefresh",
  components: {
    VarIcon: Te
  },
  props: gh,
  setup(e) {
    var n, r, a = M(0), t = M(null), i = M(null), o = M(0), l = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = M(!0), f = W(() => u.value !== "loading" && u.value !== "success" && !e.disabled), m = W(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: y.value ? e.successBgColor : e.bgColor,
      color: y.value ? e.successColor : e.color
    })), p = W(() => Math.abs(2 * a.value)), y = W(() => u.value === "success"), w = () => new Promise((b) => {
      window.setTimeout(() => {
        v.value = !0, b();
      }, el);
    }), O = (b) => {
      !f.value || (u.value = "pulling", o.value = b.touches[0].clientY);
    }, T = (b) => {
      var D = wt(n);
      if (!(D > 0 || !f.value)) {
        D === 0 && l.value > a.value && b.cancelable && b.preventDefault();
        var k = (b.touches[0].clientY - o.value) / 2 + a.value;
        l.value = k >= p.value ? p.value : k, l.value >= p.value * 0.2 ? (v.value = !1, s.value = "refresh", r = w()) : s.value = "arrow-down";
      }
    }, S = /* @__PURE__ */ function() {
      var b = yh(function* () {
        if (!!f.value)
          if (d.value = !0, l.value >= p.value * 0.2) {
            var D;
            yield r, u.value = "loading", l.value = p.value * 0.3, (D = e["onUpdate:modelValue"]) == null || D.call(e, !0), e.onRefresh == null || e.onRefresh();
          } else
            u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
              d.value = !1;
            }, z(e.animationDuration));
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), g = () => {
      var {
        width: b
      } = i.value.getBoundingClientRect();
      l.value = -(b + b * 0.25), a.value = -(b + b * 0.25);
    }, P = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return ae(() => e.modelValue, (b) => {
      b === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, P();
      }, z(e.successDuration)));
    }), Fe(() => {
      n = Ma(t.value), g();
    }), {
      n: bh,
      classes: wh,
      iconHasChanged: v,
      ICON_TRANSITION: el,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: O,
      touchMove: T,
      touchEnd: S,
      iconName: s,
      controlStyle: m,
      isSuccess: y
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var Ch = {
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
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, $s = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Ts = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function kh() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn($s), {
    length: r
  } = Sn(Ts);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function $h() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn($s), {
    index: r
  } = Cn(Ts);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Th,
  classes: Oh
} = ne("radio");
function Vh(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [B(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((h(), V(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? G(e.$slots, "checked-icon", {
          key: 0
        }, () => [ee(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : G(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ee(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), B(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [G(e.$slots, "default")],
        2
      )],
      16
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const na = Q({
  render: Vh,
  name: "VarRadio",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  inheritAttrs: !1,
  props: Ch,
  setup(e) {
    var n = M(!1), r = W(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = $h(), {
      form: o,
      bindForm: l
    } = mn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = cn(), f = (g) => {
      Pe(() => {
        var {
          validateTrigger: P,
          rules: b,
          modelValue: D
        } = e;
        u(P, g, b, D);
      });
    }, m = (g) => {
      var {
        checkedValue: P,
        onChange: b
      } = e;
      t && n.value === P || (n.value = g, N(e["onUpdate:modelValue"], n.value), N(b, n.value), t == null || t.onToggle(P), f("onChange"));
    }, p = (g) => {
      var {
        disabled: P,
        readonly: b,
        uncheckedValue: D,
        checkedValue: k,
        onClick: A
      } = e;
      o != null && o.disabled.value || P || (N(A, g), !(o != null && o.readonly.value || b) && (a.value = !0, m(r.value ? D : k)));
    }, y = (g) => {
      var {
        checkedValue: P,
        uncheckedValue: b
      } = e;
      n.value = g === P ? P : b;
    }, w = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, O = () => d(e.rules, e.modelValue), T = (g) => {
      var {
        uncheckedValue: P,
        checkedValue: b
      } = e, D = ![P, b].includes(g);
      D && (g = r.value ? P : b), m(g);
    };
    ae(() => e.modelValue, (g) => {
      n.value = g;
    }, {
      immediate: !0
    });
    var S = {
      sync: y,
      validate: O,
      resetValidation: v,
      reset: w
    };
    return N(i, S), N(l, S), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Th,
      classes: Oh,
      handleClick: p,
      toggle: T,
      reset: w,
      validate: O,
      resetValidation: v
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
function Ph(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Mh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Ph
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Eh,
  classes: Ih
} = ne("radio-group");
function Nh(e, n) {
  var r = te("var-form-details");
  return h(), V(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [G(e.$slots, "default")],
      2
    ), ee(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const ra = Q({
  render: Nh,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: He
  },
  props: Mh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = kh(), {
      bindForm: t
    } = mn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = cn(), u = W(() => i.value), d = (w) => {
      Pe(() => {
        var {
          validateTrigger: O,
          rules: T,
          modelValue: S
        } = e;
        o(O, w, T, S);
      });
    }, v = () => r.forEach((w) => {
      var {
        sync: O
      } = w;
      return O(e.modelValue);
    }), f = (w) => {
      N(e["onUpdate:modelValue"], w), N(e.onChange, w), d("onChange");
    }, m = () => l(e.rules, e.modelValue), p = () => {
      N(e["onUpdate:modelValue"], void 0), s();
    };
    ae(() => e.modelValue, v), ae(() => n.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return N(t, y), a(y), {
      errorMessage: i,
      n: Eh,
      classes: Ih,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var Dh = {
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
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Na
} = ne("rate"), Bh = ["onClick"];
function Ah(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), V(
        Oe,
        null,
        De(e.toNumber(e.count), (i) => ke((h(), V(
          "div",
          {
            key: i,
            style: K(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (o) => e.handleClick(i, o)
          },
          [ee(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: K({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          Bh
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
      ))],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const aa = Q({
  render: Ah,
  name: "VarRate",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: Dh,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = cn(), l = (w) => {
      var {
        count: O,
        gap: T
      } = e;
      return {
        color: u(w).color,
        marginRight: w !== z(O) ? be(T) : 0
      };
    }, s = (w) => {
      var {
        name: O,
        color: T
      } = u(w);
      return {
        [Na("content")]: !0,
        [Na("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Na("--error")]: a.value,
        [Na("--primary")]: O !== e.emptyIcon && !T
      };
    }, u = (w) => {
      var {
        modelValue: O,
        disabled: T,
        disabledColor: S,
        color: g,
        half: P,
        emptyColor: b,
        icon: D,
        halfIcon: k,
        emptyIcon: A
      } = e, I = g;
      return (T || n != null && n.disabled.value) && (I = S), w <= z(O) ? {
        color: I,
        name: D
      } : P && w <= z(O) + 0.5 ? {
        color: I,
        name: k
      } : {
        color: T || n != null && n.disabled.value ? S : b,
        name: A
      };
    }, d = (w, O) => {
      if (e.half) {
        var {
          offsetWidth: T
        } = O.target;
        O.offsetX <= Math.floor(T / 2) && (w -= 0.5);
      }
      N(e["onUpdate:modelValue"], w);
    }, v = () => i(e.rules, z(e.modelValue)), f = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), m = (w, O) => {
      var {
        readonly: T,
        disabled: S,
        onChange: g
      } = e;
      T || S || n != null && n.disabled.value || n != null && n.readonly.value || (d(w, O), N(g, w), f());
    }, p = () => {
      N(e["onUpdate:modelValue"], 0), o();
    }, y = {
      reset: p,
      validate: v,
      resetValidation: o
    };
    return N(r, y), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: m,
      reset: p,
      validate: v,
      resetValidation: o,
      toSizeUnit: be,
      toNumber: z,
      n: Na
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
function zh(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Lh = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: zh
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
}, Fh = (e) => (Cr(""), e = e(), kr(), e), Rh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Uh = /* @__PURE__ */ Fh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), Yh = [Uh];
function Wh(e, n) {
  return h(), V("svg", Rh, Yh);
}
const Hh = Q({
  render: Wh
});
var jh = (e) => (Cr(""), e = e(), kr(), e), Gh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, qh = /* @__PURE__ */ jh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), Kh = [qh];
function Xh(e, n) {
  return h(), V("svg", Gh, Kh);
}
const Zh = Q({
  render: Xh
});
var Jh = (e) => (Cr(""), e = e(), kr(), e), Qh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, xh = /* @__PURE__ */ Jh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), _h = [xh];
function eg(e, n) {
  return h(), V("svg", Qh, _h);
}
const ng = Q({
  render: eg
});
var {
  n: rg,
  classes: ag
} = ne("result");
function tg(e, n) {
  return h(), V(
    Oe,
    null,
    [B(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
    ), B(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: K({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
    ), B(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: K({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
    ), B(
      "span",
      {
        ref: "circle",
        class: c(e.n("success-circle")),
        style: K({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
    ), B(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
    ), B(
      "span",
      {
        class: c(e.n("success-cover-right")),
        style: K({
          animationDuration: e.animation ? "4250ms" : "0ms"
        })
      },
      null,
      6
    )],
    64
  );
}
const ig = Q({
  render: tg,
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
      n: rg,
      classes: ag,
      toNumber: z
    };
  }
});
var og = (e) => (Cr(""), e = e(), kr(), e), lg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, sg = /* @__PURE__ */ og(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), ug = [sg];
function dg(e, n) {
  return h(), V("svg", lg, ug);
}
const vg = Q({
  render: dg
});
var fg = (e) => (Cr(""), e = e(), kr(), e), cg = {
  viewBox: "-4 -4 32 32"
}, mg = /* @__PURE__ */ fg(() => /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), pg = [mg];
function hg(e, n) {
  return h(), V("svg", cg, pg);
}
const gg = Q({
  render: hg
});
var {
  n: yg,
  classes: bg
} = ne("result");
function wg(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [G(e.$slots, "image", {}, () => [e.type ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: K({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), me(
          Pa(e.type),
          {
            "border-size": e.borderSize,
            animation: e.animation
          },
          null,
          8,
          ["border-size", "animation"]
        ))],
        6
      )],
      2
    )) : J("v-if", !0)]), G(e.$slots, "title", {}, () => [e.title ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      _(e.title),
      3
    )) : J("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      _(e.description),
      3
    )) : J("v-if", !0)]), e.$slots.footer ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [G(e.$slots, "footer")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const ta = Q({
  render: wg,
  name: "VarResult",
  components: {
    Info: Hh,
    Success: ig,
    Warning: ng,
    Error: Zh,
    Question: vg,
    Empty: gg
  },
  props: Lh,
  setup(e) {
    var n = W(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? be(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = W(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? be(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: yg,
      classes: bg,
      toNumber: z,
      toPxNum: Ie,
      toSizeUnit: be,
      circleSize: n,
      borderSize: r
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
function Sg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function Cg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var kg = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Sg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: Cg
  },
  onClick: {
    type: Function
  }
}, {
  n: $g,
  classes: Tg
} = ne("row");
function Og(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: K({
        justifyContent: e.justify,
        alignItems: e.align,
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const ia = Q({
  render: Og,
  name: "VarRow",
  props: kg,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = av(), t = W(() => {
      var l = Ie(e.gutter);
      return l / 2;
    }), i = () => {
      n.forEach((l) => {
        l.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, o = {
      computePadding: i
    };
    return ae(() => a.value, i), ae(() => e.gutter, i), r(o), {
      n: $g,
      classes: Tg,
      average: t
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
function Vg(e) {
  return ["left", "right", "center"].includes(e);
}
var Pg = {
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
    validator: Vg
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Yt,
  classes: Mg
} = ne("select"), Eg = {
  key: 0
}, Ig = {
  key: 1
};
function Ng(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-menu"), i = te("var-form-details");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "prepend-icon")],
        2
      ), B(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [ee(
          t,
          {
            "var-select-cover": "",
            class: c(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (o) => e.isFocus = o),
            onClose: e.handleBlur
          },
          {
            menu: fe(() => [B(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [G(e.$slots, "default")],
              2
            )]),
            default: fe(() => [B(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (h(), V("div", Eg, [e.chip ? (h(), V(
                "div",
                {
                  key: 0,
                  class: c(e.n("chips"))
                },
                [(h(!0), V(
                  Oe,
                  null,
                  De(e.labels, (o) => (h(), me(
                    r,
                    {
                      class: c(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: o,
                      onClick: n[0] || (n[0] = Nn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(o)
                    },
                    {
                      default: fe(() => [he(
                        _(o),
                        1
                      )]),
                      _: 2
                    },
                    1032,
                    ["class", "type", "onClose"]
                  ))),
                  128
                ))],
                2
              )) : (h(), V(
                "div",
                {
                  key: 1,
                  class: c(e.n("values"))
                },
                _(e.labels.join(e.separator)),
                3
              ))])) : (h(), V(
                "span",
                Ig,
                _(e.label),
                1
              )), G(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [ee(
                a,
                {
                  class: c(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )])],
              6
            ), B(
              "label",
              {
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: K({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              _(e.placeholder),
              7
            )]),
            _: 3
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
      ), B(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), me(
          a,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : J("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : J("v-if", !0), ee(
      i,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const oa = Q({
  render: Ng,
  name: "VarSelect",
  components: {
    VarIcon: Te,
    VarMenu: xn,
    VarChip: dr,
    VarFormDetails: He
  },
  props: Pg,
  setup(e) {
    var n = M(null), r = M(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = M(""), o = M([]), l = M("0px"), s = M(0), {
      bindForm: u,
      form: d
    } = mn(), {
      length: v,
      options: f,
      bindOptions: m
    } = Hp(), {
      errorMessage: p,
      validateWithTrigger: y,
      validate: w,
      resetValidation: O
    } = cn(), T = M(null), S = () => {
      var {
        multiple: R,
        modelValue: U
      } = e;
      if (R) {
        var x = U;
        o.value = x.map(b);
      }
      !R && !Hn(U) && (i.value = b(U)), !R && Hn(U) && (i.value = "");
    }, g = (R) => {
      Pe(() => {
        var {
          validateTrigger: U,
          rules: x,
          modelValue: ie
        } = e;
        y(U, R, x, ie);
      });
    }, P = (R) => {
      var {
        value: U,
        label: x
      } = R;
      return U.value != null ? U.value : x.value;
    }, b = (R) => {
      var U, x, ie = f.find((le) => {
        var {
          value: de
        } = le;
        return de.value === R;
      });
      return ie || (ie = f.find((le) => {
        var {
          label: de
        } = le;
        return de.value === R;
      })), (U = (x = ie) == null ? void 0 : x.label.value) != null ? U : "";
    }, D = () => {
      var {
        hint: R,
        modelValue: U
      } = e;
      if (!R && !Hn(U))
        return Yt("--placeholder-hidden");
      if (R && (!Hn(U) || r.value))
        return Yt("--placeholder-hint");
    }, k = () => n.value && window.getComputedStyle(n.value).width || "0px", A = () => {
      var {
        disabled: R,
        readonly: U,
        onFocus: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || R || U || (l.value = k(), s.value = Ie(e.offsetY), r.value = !0, N(x), g("onFocus"));
    }, I = () => {
      var {
        disabled: R,
        readonly: U,
        onBlur: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || R || U || (N(x), g("onBlur"));
    }, C = (R) => {
      var {
        disabled: U,
        readonly: x,
        multiple: ie,
        onChange: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || x)) {
        var de = ie ? f.filter((we) => {
          var {
            selected: Re
          } = we;
          return Re.value;
        }).map(P) : P(R);
        N(e["onUpdate:modelValue"], de), N(le, de), g("onChange"), !ie && (r.value = !1);
      }
    }, $ = () => {
      var {
        disabled: R,
        readonly: U,
        multiple: x,
        clearable: ie,
        onClear: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || R || U || !ie)) {
        var de = x ? [] : void 0;
        N(e["onUpdate:modelValue"], de), N(le, de), g("onClear");
      }
    }, L = (R) => {
      var {
        disabled: U,
        onClick: x
      } = e;
      d != null && d.disabled.value || U || (N(x, R), g("onClick"));
    }, Y = (R) => {
      var {
        disabled: U,
        readonly: x,
        modelValue: ie,
        onClose: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || x)) {
        var de = ie, we = f.find((Qe) => {
          var {
            label: Me
          } = Qe;
          return Me.value === R;
        }), Re = de.filter((Qe) => {
          var Me;
          return Qe !== ((Me = we.value.value) != null ? Me : we.label.value);
        });
        N(e["onUpdate:modelValue"], Re), N(le, Re), g("onClose");
      }
    }, j = () => {
      var {
        multiple: R,
        modelValue: U
      } = e;
      if (R) {
        var x = U;
        f.forEach((ie) => ie.sync(x.includes(P(ie))));
      } else
        f.forEach((ie) => ie.sync(U === P(ie)));
      S();
    }, F = () => {
      l.value = k(), s.value = Ie(e.offsetY), r.value = !0;
    }, Z = () => {
      r.value = !1;
    }, H = () => w(e.rules, e.modelValue), X = () => {
      N(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    ae(() => e.multiple, () => {
      var {
        multiple: R,
        modelValue: U
      } = e;
      if (R && !Ce(U))
        throw Error("The modelValue must be an array when multiple is true");
    }), ae(() => e.modelValue, j, {
      deep: !0
    }), ae(() => v.value, j);
    var E = {
      wrapWidth: W(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: C,
      reset: X,
      validate: H,
      resetValidation: O
    };
    return m(E), N(u, E), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: T,
      n: Yt,
      classes: Mg,
      computePlaceholderState: D,
      handleFocus: A,
      handleBlur: I,
      handleClear: $,
      handleClick: L,
      handleClose: Y,
      reset: X,
      validate: H,
      resetValidation: O,
      focus: F,
      blur: Z
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
var Dg = {
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
  n: Bg,
  classes: Ag
} = ne("skeleton");
function zg(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? J("v-if", !0) : (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [G(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (h(), V(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: K({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [B(
          "div",
          {
            class: c(e.n("--animation"))
          },
          null,
          2
        )],
        6
      )) : J("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), V(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), V(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: K({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [B(
            "div",
            {
              class: c(e.n("--animation"))
            },
            null,
            2
          )],
          6
        )) : J("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), V(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), V(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: K({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [B(
              "div",
              {
                class: c(e.n("--animation"))
              },
              null,
              2
            )],
            6
          )) : J("v-if", !0), (h(!0), V(
            Oe,
            null,
            De(e.toNumber(e.rows), (r, a) => (h(), V(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: K({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [B(
                "div",
                {
                  class: c(e.n("--animation"))
                },
                null,
                2
              )],
              6
            ))),
            128
          ))],
          2
        )) : J("v-if", !0)],
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.loading && e.fullscreen ? (h(), V(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: K({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [B(
        "div",
        {
          class: c(e.n("--animation"))
        },
        null,
        2
      )],
      6
    )) : J("v-if", !0)],
    2
  );
}
const la = Q({
  render: zg,
  name: "VarSkeleton",
  props: Dg,
  setup() {
    return {
      n: Bg,
      classes: Ag,
      toSizeUnit: be,
      toNumber: z
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
function Lg(e) {
  return ["always", "normal", "never"].includes(e);
}
var Fg = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: Lg
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
  readonly: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  onStart: {
    type: Function
  },
  onEnd: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: nl,
  classes: Rg
} = ne("slider"), Ee;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ee || (Ee = {}));
var Ug = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function Yg(e, n) {
  var r = te("var-form-details");
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [B(
        "div",
        {
          class: c(e.n("track"))
        },
        [B(
          "div",
          {
            class: c(e.n("track-background")),
            style: K({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
        ), B(
          "div",
          {
            class: c(e.n("track-fill")),
            style: K(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (h(!0), V(
        Oe,
        null,
        De(e.thumbList, (a) => (h(), V(
          "div",
          {
            class: c(e.n("thumb")),
            key: a.enumValue,
            style: K({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Nn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Nn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [G(e.$slots, "button", {
            currentValue: a.text
          }, () => [B(
            "div",
            {
              class: c(e.n("thumb-block")),
              style: K({
                background: e.thumbColor
              })
            },
            null,
            6
          ), B(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: K({
                background: e.thumbColor
              })
            },
            null,
            6
          ), B(
            "div",
            {
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: K({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [B(
              "span",
              null,
              _(a.text),
              1
            )],
            6
          )])],
          46,
          Ug
        ))),
        128
      ))],
      2
    ), ee(
      r,
      {
        "error-message": e.errorMessage,
        class: c(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
  );
}
const sa = Q({
  render: Yg,
  name: "VarSlider",
  components: {
    VarFormDetails: He
  },
  props: Fg,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = cn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = M(null), v = M(0), f = M(!1), m = Ne({
      [Ee.First]: s(),
      [Ee.Second]: s()
    }), p = W(() => z(e.max) - z(e.min)), y = W(() => v.value / p.value * z(e.step)), w = W(() => {
      var {
        modelValue: H,
        range: X
      } = e, E = [];
      return X && Ce(H) ? E = [{
        value: P(H[0]),
        enumValue: Ee.First,
        text: b(H[0])
      }, {
        value: P(H[1]),
        enumValue: Ee.Second,
        text: b(H[1])
      }] : je(H) && (E = [{
        value: P(H),
        enumValue: Ee.First,
        text: b(H)
      }]), E;
    }), O = W(() => {
      var {
        activeColor: H,
        range: X,
        modelValue: E
      } = e, R = X && Ce(E) ? P(Math.min(E[0], E[1])) : 0, U = X && Ce(E) ? P(Math.max(E[0], E[1])) - R : P(E);
      return {
        width: U + "%",
        left: R + "%",
        background: H
      };
    }), T = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), S = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), g = (H) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : m[H].active, P = (H) => {
      var {
        min: X,
        max: E
      } = e;
      return H < z(X) ? 0 : H > z(E) ? 100 : (H - z(X)) / p.value * 100;
    }, b = (H) => {
      if (!je(H))
        return 0;
      var X = H;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var E = parseInt("" + X, 10) === X;
      return E ? X : z(X.toPrecision(5));
    }, D = (H, X) => {
      var E = [], {
        step: R,
        range: U,
        modelValue: x,
        onChange: ie,
        min: le
      } = e, de = z(R), we = Math.round(H / y.value), Re = we * de + z(le), Qe = m[X].percentValue * de + z(le);
      if (m[X].percentValue = we, U && Ce(x) && (E = X === Ee.First ? [Re, x[1]] : [x[0], Re]), Qe !== Re) {
        var Me = U ? E.map((on) => b(on)) : b(Re);
        N(ie, Me), N(e["onUpdate:modelValue"], Me), u();
      }
    }, k = (H) => {
      if (!e.range)
        return Ee.First;
      var X = m[Ee.First].percentValue * y.value, E = m[Ee.Second].percentValue * y.value, R = Math.abs(H - X), U = Math.abs(H - E);
      return R <= U ? Ee.First : Ee.Second;
    }, A = (H, X) => {
      v.value || (v.value = d.value.offsetWidth), !(T.value || S.value) && (N(e.onStart), f.value = !0, m[X].startPosition = H.touches[0].clientX);
    }, I = (H, X) => {
      if (!(T.value || S.value || !f.value)) {
        var E = H.touches[0].clientX - m[X].startPosition + m[X].currentLeft;
        m[X].active = !0, E <= 0 ? E = 0 : E >= v.value && (E = v.value), D(E, X);
      }
    }, C = (H) => {
      var {
        range: X,
        modelValue: E,
        onEnd: R,
        step: U,
        min: x
      } = e;
      if (!(T.value || S.value)) {
        var ie = [];
        m[H].currentLeft = m[H].percentValue * y.value, m[H].active = !1;
        var le = m[H].percentValue * z(U) + z(x);
        X && Ce(E) && (ie = H === Ee.First ? [le, E[1]] : [E[0], le]), N(R, X ? ie : le), f.value = !1;
      }
    }, $ = (H) => {
      if (!(T.value || S.value) && !H.target.closest("." + nl("thumb"))) {
        var X = H.clientX - nu(H.currentTarget), E = k(X);
        D(X, E), C(E);
      }
    }, L = () => {
      var H = z(e.step);
      return isNaN(H) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : H < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Y = () => {
      var {
        range: H,
        modelValue: X
      } = e;
      return H && !Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !H && Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : H && Ce(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, j = function(H, X) {
      H === void 0 && (H = e.modelValue), X === void 0 && (X = z(e.step));
      var E = (R) => {
        var {
          min: U,
          max: x
        } = e;
        return R < z(U) ? 0 : R > z(x) ? p.value / X : (R - z(U)) / X;
      };
      e.range && Ce(H) ? (m[Ee.First].percentValue = E(H[0]), m[Ee.First].currentLeft = m[Ee.First].percentValue * y.value, m[Ee.Second].percentValue = E(H[1]), m[Ee.Second].currentLeft = m[Ee.Second].percentValue * y.value) : je(H) && (m[Ee.First].currentLeft = E(H) * y.value);
    }, F = () => {
      var H = e.range ? [0, 0] : 0;
      N(e["onUpdate:modelValue"], H), o();
    }, Z = {
      reset: F,
      validate: l,
      resetValidation: o
    };
    return N(n, Z), ae([() => e.modelValue, () => e.step], (H) => {
      var [X, E] = H;
      !L() || !Y() || f.value || j(X, z(E));
    }), ae(v, () => j()), Fe(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: nl,
      classes: Rg,
      Thumbs: Ee,
      sliderEl: d,
      getFillStyle: O,
      isDisabled: T,
      errorMessage: a,
      thumbsProps: m,
      thumbList: w,
      multiplySizeUnit: Ze,
      toNumber: z,
      showLabel: g,
      start: A,
      move: I,
      end: C,
      click: $
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ki.apply(this, arguments);
}
function Wg(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Hg(e) {
  return Xi.includes(e);
}
var Os = {
  type: {
    type: String,
    validator: Hg
  },
  position: {
    type: String,
    default: "top",
    validator: Wg
  },
  content: {
    type: String
  },
  contentClass: {
    type: String
  },
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: _e(jn, "type"),
  loadingSize: _e(jn, "size"),
  loadingRadius: _e(jn, "radius"),
  loadingColor: ki({}, _e(jn, "color"), {
    default: "currentColor"
  }),
  lockScroll: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: String,
    default: "body"
  },
  forbidClick: {
    type: Boolean,
    default: !1
  },
  onOpen: {
    type: Function,
    default: () => {
    }
  },
  onOpened: {
    type: Function,
    default: () => {
    }
  },
  onClose: {
    type: Function,
    default: () => {
    }
  },
  onClosed: {
    type: Function,
    default: () => {
    }
  },
  "onUpdate:show": {
    type: Function
  },
  _update: {
    type: String
  }
}, {
  n: jg,
  classes: Gg
} = ne("snackbar"), qg = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Kg(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return ke((h(), V(
    "div",
    {
      class: c(e.n()),
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [B(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.content),
          1
        )])],
        2
      ), B(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (h(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : J("v-if", !0), e.type === "loading" ? (h(), me(
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
        )) : J("v-if", !0), G(e.$slots, "action")],
        2
      )],
      6
    )],
    6
  )), [[Ga, e.show]]);
}
const Vs = Q({
  render: Kg,
  name: "VarSnackbarCore",
  components: {
    VarLoading: kn,
    VarIcon: Te
  },
  props: Os,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = Ka(() => e.show, 1);
    Ct(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? qg[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        var o;
        e.type !== "loading" && ((o = e["onUpdate:show"]) == null || o.call(e, !1));
      }, e.duration);
    };
    return ae(() => e.show, (o) => {
      o ? (e.onOpen == null || e.onOpen(), i()) : o === !1 && (clearTimeout(n.value), e.onClose == null || e.onClose());
    }), ae(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Fe(() => {
      e.show && (e.onOpen == null || e.onOpen(), i());
    }), {
      SNACKBAR_TYPE: Xi,
      n: jg,
      classes: Gg,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: Xg
} = ne("snackbar");
function Zg(e, n) {
  var r = te("var-snackbar-core");
  return h(), me(
    ja,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [ee(
      Le,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: fe(() => [ee(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: fe(() => [G(e.$slots, "action")]),
            default: fe(() => [G(e.$slots, "default", {}, () => [he(
              _(e.content),
              1
            )])]),
            _: 3
          },
          16,
          ["class"]
        )]),
        _: 3
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
const ua = Q({
  render: Zg,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Vs
  },
  props: Os,
  setup() {
    var {
      disabled: e
    } = zi();
    return {
      n: Xg,
      disabled: e
    };
  }
});
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ya.apply(this, arguments);
}
function Jg(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !gt(e);
}
var Xi = ["loading", "success", "warning", "info", "error"], rl = 0, $i = !1, Ti, Va = !1, dn = Ne([]), Qg = {
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
}, xg = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, _g = {
  setup() {
    return () => {
      var e = dn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Va && (t.position = "top");
        var l = Va ? "relative" : "absolute", s = Ya({
          position: l
        }, ty(t.position));
        return ee(Vs, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = tn.zIndex;
      return ee(Xs, Ve(xg, {
        style: {
          zIndex: n
        },
        onAfterEnter: ey,
        onAfterLeave: ny
      }), Jg(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Dn = function(e) {
  var n = qe(e) || je(e) ? {
    content: String(e)
  } : e, r = Ne(Ya({}, Qg, n));
  r.show = !0, $i || ($i = !0, Ti = Ea(_g).unmountInstance);
  var {
    length: a
  } = dn, t = {
    id: rl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Va)
    ry(t);
  else {
    var i = "update-" + rl;
    ay(r, i);
  }
  return {
    clear() {
      !Va && dn.length ? dn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Xi.forEach((e) => {
  Dn[e] = (n) => (Ni(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Dn(n));
});
Dn.install = function(e) {
  e.component(ua.name, ua);
};
Dn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Va && (dn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Va = e);
};
Dn.clear = function() {
  dn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Dn.Component = ua;
function ey(e) {
  var n = e.getAttribute("data-id"), r = dn.find((a) => a.id === z(n));
  r && (r.reactiveSnackOptions.onOpened == null || r.reactiveSnackOptions.onOpened());
}
function ny(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = dn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, r.reactiveSnackOptions.onClosed == null || r.reactiveSnackOptions.onClosed());
  var a = dn.every((t) => t.animationEnd);
  a && (Ti == null || Ti(), dn = Ne([]), $i = !1);
}
function ry(e) {
  dn.push(e);
}
function ay(e, n) {
  var [r] = dn;
  r.reactiveSnackOptions = Ya({}, r.reactiveSnackOptions, e), r._update = n;
}
function ty(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ua.install = function(e) {
  e.component(ua.name, ua);
};
var Ps = (e) => ["mini", "small", "normal", "large"].includes(e), iy = (e) => Ps(e) || Ce(e) || je(e) || qe(e), oy = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), ly = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: iy
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
    default: "start",
    validator: oy
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, {
  n: Wt,
  classes: sy
} = ne("space"), uy = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20]
};
const da = Q({
  name: "VarSpace",
  props: ly,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? uy[i] : Ce(i) ? i.map(Ie) : [Ie(i), Ie(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (i = N(r.default)) != null ? i : [], m = Ps(v), [p, y] = a(v, m), w = (S) => {
        var g = [];
        return S.forEach((P) => {
          if (P.type !== Zs) {
            if (P.type === Oe && Ce(P.children)) {
              P.children.forEach((b) => {
                g.push(b);
              });
              return;
            }
            g.push(P);
          }
        }), g;
      };
      f = w(f);
      var O = f.length - 1, T = f.map((S, g) => {
        var P = "0";
        return d === "row" && (l === "start" || l === "center" || l === "end" ? g !== O ? P = p / 2 + "px " + y + "px " + p / 2 + "px 0" : P = p / 2 + "px 0" : l === "space-around" ? P = p / 2 + "px " + y / 2 + "px" : l === "space-between" && (g === 0 ? P = p / 2 + "px " + y / 2 + "px " + p / 2 + "px 0" : g === O ? P = p / 2 + "px 0 " + p / 2 + "px " + y / 2 + "px" : P = p / 2 + "px " + y / 2 + "px")), d === "column" && g !== O && (P = "0 0 " + p + "px 0"), ee("div", {
          style: {
            margin: P
          }
        }, [S]);
      });
      return ee("div", {
        class: sy(Wt(), Wt("$--box"), [o, Wt("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "-" + p / 2 + "px 0" : void 0
        }
      }, [T]);
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
var dy = {
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
}, Ms = Symbol("STEPS_BIND_STEP_KEY"), Es = Symbol("STEPS_COUNT_STEP_KEY");
function vy() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Ms), {
    length: r
  } = Sn(Es);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function fy() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Ms), {
    index: r
  } = Cn(Es);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: cy,
  classes: my
} = ne("step"), py = {
  key: 3
};
function hy(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [B(
        "div",
        {
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [B(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: K({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (h(), me(
            r,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (h(), me(
            r,
            {
              key: 1,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (h(), me(
            r,
            {
              key: 2,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (h(), V(
            "span",
            py,
            _(e.index + 1),
            1
          ))],
          6
        ), B(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [G(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? J("v-if", !0) : (h(), V(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: K({
            margin: e.lineMargin
          })
        },
        null,
        6
      ))],
      2
    )],
    2
  );
}
const va = Q({
  render: hy,
  name: "VarStep",
  components: {
    VarIcon: Te
  },
  props: dy,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = fy(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = W(() => o.value === a.value), m = W(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, y = () => v(a.value), w = (O) => {
      d.value === "horizontal" && (e.value = O);
    };
    return i(p), ae(l, (O) => {
      if (r.value = O - 1 === a.value, e.value) {
        var T = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + T + "px";
      }
    }), {
      n: cy,
      classes: my,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: y,
      getRef: w
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
function gy(e) {
  return ["horizontal", "vertical"].includes(e);
}
var yy = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: gy
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: {
    type: Function
  }
}, {
  n: by
} = ne("steps");
function wy(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const fa = Q({
  render: wy,
  name: "VarSteps",
  props: yy,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = vy(), l = (u) => {
      N(e.onClickStep, u);
    }, s = {
      active: n,
      length: i,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(s), {
      n: by
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
var {
  n: Sy
} = ne("style-provider");
const ca = Q({
  name: "VarStyleProvider",
  props: {
    styleVars: {
      type: Object,
      default: () => ({})
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => vl(e.tag, {
      class: Sy(),
      style: bl(e.styleVars)
    }, N(r.default));
  }
});
var Ht = [];
function Wa(e) {
  Ht.forEach((r) => document.documentElement.style.removeProperty(r)), Ht.length = 0;
  var n = bl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Ht.push(a);
  });
}
Wa.Component = ca;
ca.install = function(e) {
  e.component(ca.name, ca);
};
Wa.install = function(e) {
  e.component(ca.name, ca);
};
var Cy = {
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
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: ky,
  classes: $y
} = ne("switch");
function Ty(e, n) {
  var r = te("var-loading"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: K(e.styleComputed.switch)
      },
      [B(
        "div",
        {
          style: K(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), ke((h(), V(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [B(
          "div",
          {
            style: K(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), me(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : J("v-if", !0)],
          6
        )],
        6
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const ma = Q({
  render: Ty,
  name: "VarSwitch",
  components: {
    VarLoading: kn,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: Cy,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = cn(), l = () => i(e.rules, e.modelValue), s = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = W(() => {
      var {
        size: p,
        modelValue: y,
        color: w,
        closeColor: O,
        loadingColor: T,
        activeValue: S
      } = e;
      return {
        handle: {
          width: Ze(p),
          height: Ze(p),
          backgroundColor: y === S ? w : O,
          color: T
        },
        ripple: {
          left: y === S ? Ze(p, 0.5) : "-" + Ze(p, 0.5),
          color: y === S ? w : O || "#999",
          width: Ze(p, 2),
          height: Ze(p, 2)
        },
        track: {
          height: Ze(p, 0.72),
          width: Ze(p, 1.9),
          borderRadius: Ze(p, 2 / 3),
          filter: y === S || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: y === S ? w : O
        },
        switch: {
          height: Ze(p, 1.2),
          width: Ze(p, 2)
        }
      };
    }), d = W(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Ze(p, 0.4);
    }), v = (p) => {
      var {
        onClick: y,
        onChange: w,
        disabled: O,
        loading: T,
        readonly: S,
        modelValue: g,
        activeValue: P,
        inactiveValue: b,
        "onUpdate:modelValue": D
      } = e;
      if (N(y, p), !(O || T || S || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var k = g === P ? b : P;
        N(w, k), N(D, k), s();
      }
    }, f = () => {
      N(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, m = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return N(n, m), {
      n: ky,
      classes: $y,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Oy = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: {
    type: Function
  }
}, Is = Symbol("TABS_BIND_TAB_KEY"), Ns = Symbol("TABS_COUNT_TAB_KEY");
function Vy() {
  var {
    childProviders: e,
    bindChildren: n
  } = vn(Is), {
    length: r
  } = Sn(Ns);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Py() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Is), {
    index: r
  } = Cn(Ns);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: rt,
  classes: My
} = ne("tab");
function Ey(e, n) {
  var r = Ge("ripple");
  return ke((h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [G(e.$slots, "default")],
    6
  )), [[r, {
    disabled: e.disabled
  }]]);
}
const pa = Q({
  render: Ey,
  name: "VarTab",
  directives: {
    Ripple: Ue
  },
  props: Oy,
  setup(e) {
    var n = M(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = Py(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = o, y = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(y);
    var w = () => {
      var {
        disabled: S,
        name: g
      } = e;
      return S ? f.value : u.value === g || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, O = () => {
      var {
        disabled: S,
        name: g
      } = e;
      return S ? rt("$-tab--disabled") : u.value === g || u.value === (i == null ? void 0 : i.value) ? rt("$-tab--active") : rt("$-tab--inactive");
    }, T = (S) => {
      var {
        disabled: g,
        name: P,
        onClick: b
      } = e;
      g || (b == null || b(P != null ? P : i.value, S), s(y));
    };
    return ae(() => e.name, p), ae(() => e.disabled, p), {
      n: rt,
      classes: My,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: O,
      handleClick: T
    };
  }
});
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Ds = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Bs = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function Iy() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Ds), {
    length: r
  } = Sn(Bs);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Ny() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Ds), {
    index: r
  } = Cn(Bs);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Dy = {
  name: {
    type: [String, Number]
  }
}, {
  n: By,
  classes: Ay
} = ne("tab-item");
function zy(e, n) {
  var r = te("var-swipe-item");
  return h(), me(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: fe(() => [e.initSlot ? G(e.$slots, "default", {
        key: 0
      }) : J("v-if", !0)]),
      _: 3
    },
    8,
    ["class"]
  );
}
const ha = Q({
  render: zy,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Zn
  },
  props: Dy,
  setup(e) {
    var n = M(!1), r = M(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = Ny(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: By,
      classes: Ay,
      current: n,
      initSlot: r
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
var {
  n: Ly,
  classes: Fy
} = ne("table");
function Ry(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: c(e.n("main"))
      },
      [B(
        "table",
        {
          class: c(e.n("table")),
          style: K({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [G(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [G(e.$slots, "footer")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const ga = Q({
  render: Ry,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: be,
      n: Ly,
      classes: Fy
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
function al(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Uy = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: al
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: al
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
  safeArea: {
    type: Boolean,
    default: !1
  },
  offsetTop: _e(vs, "offsetTop"),
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  }
};
function tl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        tl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        tl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Wy,
  classes: Hy
} = ne("tabs");
function jy(e, n) {
  return h(), me(
    Pa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: fe(() => [B(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [B(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [G(e.$slots, "default"), B(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: K({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
            6
          )],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top"]
  );
}
const ya = Q({
  render: jy,
  name: "VarTabs",
  components: {
    VarSticky: Jn
  },
  inheritAttrs: !1,
  props: Uy,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), i = M(!1), o = M(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), v = W(() => e.itemDirection), {
      tabList: f,
      bindTabList: m,
      length: p
    } = Vy(), y = (k) => {
      var A, I = (A = k.name.value) != null ? A : k.index.value, {
        active: C,
        onChange: $,
        onClick: L
      } = e;
      N(e["onUpdate:active"], I), N(L, I), I !== C && N($, I);
    }, w = () => f.find((k) => {
      var {
        name: A
      } = k;
      return e.active === A.value;
    }), O = (k) => f.find((A) => {
      var {
        index: I
      } = A;
      return (k != null ? k : e.active) === I.value;
    }), T = () => {
      if (p.value !== 0) {
        var {
          active: k
        } = e;
        if (je(k)) {
          var A = k > p.value - 1 ? p.value - 1 : 0;
          return N(e["onUpdate:active"], A), O(A);
        }
      }
    }, S = () => {
      i.value = f.length >= 5;
    }, g = (k) => {
      var {
        element: A
      } = k, I = A.value;
      e.layoutDirection === "horizontal" ? (n.value = (I == null ? void 0 : I.offsetWidth) + "px", a.value = (I == null ? void 0 : I.offsetLeft) + "px") : (r.value = (I == null ? void 0 : I.offsetHeight) + "px", t.value = (I == null ? void 0 : I.offsetTop) + "px");
    }, P = (k) => {
      var {
        element: A
      } = k;
      if (!!i.value) {
        var I = o.value, C = A.value;
        if (e.layoutDirection === "horizontal") {
          var $ = C.offsetLeft + C.offsetWidth / 2 - I.offsetWidth / 2;
          lt(I, {
            left: $,
            animation: ao
          });
        } else {
          var L = C.offsetTop + C.offsetHeight / 2 - I.offsetHeight / 2;
          lt(I, {
            top: L,
            animation: ao
          });
        }
      }
    }, b = () => {
      var k = w() || O() || T();
      !k || k.disabled.value || (S(), g(k), P(k));
    }, D = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: b,
      onTabClick: y
    };
    return m(D), ae(() => p.value, /* @__PURE__ */ Yy(function* () {
      yield Tn(), b();
    })), ae(() => e.active, b), Fe(() => window.addEventListener("resize", b)), rr(() => window.removeEventListener("resize", b)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Le,
      toSizeUnit: be,
      n: Wy,
      classes: Hy,
      resize: b
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Gy = {
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
  "onUpdate:active": {
    type: Function
  }
};
function il(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function qy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        il(i, a, t, o, l, "next", s);
      }
      function l(s) {
        il(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Ky
} = ne("tabs-items");
function Xy(e, n) {
  var r = te("var-swipe");
  return h(), me(
    r,
    {
      class: c(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: fe(() => [G(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const ba = Q({
  render: Xy,
  name: "VarTabsItems",
  components: {
    VarSwipe: Xn
  },
  props: Gy,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Iy(), i = (f) => r.find((m) => {
      var {
        name: p
      } = m;
      return f === p.value;
    }), o = (f) => r.find((m) => {
      var {
        index: p
      } = m;
      return f === p.value;
    }), l = (f) => i(f) || o(f), s = (f) => {
      var m, p = l(f);
      !p || (r.forEach((y) => {
        var {
          setCurrent: w
        } = y;
        return w(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((w) => {
        var {
          index: O
        } = w;
        return O.value === f;
      }), y = (m = p.name.value) != null ? m : p.index.value;
      N(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), ae(() => e.active, s), ae(() => t.value, /* @__PURE__ */ qy(function* () {
      yield Tn(), s(e.active);
    })), {
      swipe: n,
      n: Ky,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
const Zy = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Jy = {
  "--badge-default-color": "#555"
}, Qy = {
  "--button-default-color": "#303030"
}, xy = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, _y = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, e0 = {
  "--checkbox-unchecked-color": "#fff"
}, n0 = {
  "--chip-default-color": "#555"
}, r0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, a0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, t0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, i0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, o0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, l0 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, s0 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, u0 = {
  "--popup-content-background-color": "#1e1e1e"
}, d0 = {
  "--pull-refresh-background": "#303030"
}, v0 = {
  "--radio-unchecked-color": "#fff"
}, f0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, c0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, m0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, p0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, h0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, g0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, y0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, b0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, w0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, S0 = {
  "--tabs-background": "#1e1e1e"
}, C0 = {
  "--app-bar-color": "#272727"
}, k0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, $0 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, T0 = {
  "--menu-background-color": "#272727"
};
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
const O0 = Oi({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, Qy, _y, xy, b0, a0, m0, S0, g0, u0, t0, Zy, n0, Jy, w0, r0, d0, h0, p0, l0, y0, o0, c0, v0, e0, i0, s0, C0, k0, $0, T0, f0);
var Vi = {
  dark: O0
}, sn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Je = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ol = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function V0(e) {
  return ["ampm", "24hr"].includes(e);
}
var P0 = {
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
    validator: V0
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
  "onUpdate:modelValue": {
    type: Function
  },
  onChange: {
    type: Function
  }
}, As = (e, n) => e === "24hr" || n === "am", Zi = (e, n, r) => {
  var a = sn.findIndex((i) => z(i) === z(r)), t = As(e, n) ? r : Je[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, en = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: z(n),
    minute: z(r),
    second: z(a)
  };
}, zs = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Zi(t, i, o), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: y
    } = en(l);
    f = p === v && a > y;
  }
  if (!l && s) {
    var {
      hour: w,
      minute: O
    } = en(s);
    f = w === v && a < O;
  }
  if (l && s) {
    var {
      hour: T,
      minute: S
    } = en(l), {
      hour: g,
      minute: P
    } = en(s);
    f = g === v && a < P || T === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Ls = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Zi(t, i, o), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: w,
      second: O
    } = en(s);
    m = y === f && w < l || w === l && a > O;
  }
  if (!s && u) {
    var {
      hour: T,
      minute: S,
      second: g
    } = en(u);
    m = T === f && S > l || S === l && a > g;
  }
  if (s && u) {
    var {
      hour: P,
      minute: b,
      second: D
    } = en(s), {
      hour: k,
      minute: A,
      second: I
    } = en(u);
    m = P === f && b < l || k === f && A > l || P === f && b === l && a > D || k === f && A === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: M0,
  classes: E0
} = ne("time-picker");
function I0(e, n) {
  return h(), V(
    "div",
    {
      class: c(e.n("clock"))
    },
    [B(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: K(e.handStyle)
      },
      null,
      6
    ), (h(!0), V(
      Oe,
      null,
      De(e.timeScales, (r, a) => (h(), V(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: K(e.getStyle(a, r, !1))
        },
        _(r),
        7
      ))),
      128
    )), e.format === "24hr" && e.type === "hour" ? (h(), V(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), V(
        Oe,
        null,
        De(e.hours24, (r, a) => (h(), V(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: K(e.getStyle(a, r, !0))
          },
          _(r),
          7
        ))),
        128
      ))],
      2
    )) : J("v-if", !0)],
    2
  );
}
const N0 = Q({
  render: I0,
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
    } = n, a = M(null), t = M([]), i = M([]), o = W(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = W(() => {
      if (e.rad !== void 0) {
        var w = e.rad / 30;
        return w >= 0 ? w : w + 12;
      }
    }), s = W(() => e.type === "hour" ? sn : ol), u = (w, O) => {
      var T;
      w = (T = w) != null ? T : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? zs : Ls, g = {
        time: z(w),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return O && e.type === "minute" && Reflect.deleteProperty(g, "minute"), S(g);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var w = e.isInner ? Je[l.value] : s.value[l.value];
      return s.value === ol ? u() ? "#bdbdbd" : e.color : f(w) ? "#bdbdbd" : e.color;
    }, v = (w, O) => O ? l.value === w && e.isInner : l.value === w && (!e.isInner || e.type !== "hour"), f = (w) => {
      if (e.type === "hour") {
        if (As(e.format, e.ampm))
          return t.value.includes(w);
        var O = sn.findIndex((T) => T === w);
        return i.value.includes(O);
      }
      return u(w, !0);
    }, m = (w, O, T) => {
      var S = 2 * Math.PI / 12 * w - Math.PI / 2, g = 50 * (1 + Math.cos(S)), P = 50 * (1 + Math.sin(S)), b = () => v(w, T) ? f(O) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: D,
        color: k
      } = b();
      return {
        left: g + "%",
        top: P + "%",
        backgroundColor: D,
        color: k
      };
    }, p = () => {
      var {
        width: w,
        height: O
      } = a.value.getBoundingClientRect();
      return {
        width: w,
        height: O
      };
    }, y = () => {
      if (l.value !== void 0) {
        var w = e.ampm === "am" ? sn : Je;
        return hr(w[l.value], 2, "0");
      }
    };
    return ae([l, () => e.isInner], (w, O) => {
      var [T, S] = w, [g, P] = O, b = T === g && S === P;
      if (!(b || e.type !== "hour" || l.value === void 0)) {
        var D = S ? Je[l.value] : y(), k = e.useSeconds ? ":" + e.time.second : "", A = D + ":" + e.time.minute + k;
        e.preventNextUpdate || r("update", A), r("change-prevent-update");
      }
    }), ae(() => e.rad, (w, O) => {
      if (!(e.type === "hour" || w === void 0 || O === void 0)) {
        var T = w / 6 >= 0 ? w / 6 : w / 6 + 60, S = O / 6 >= 0 ? O / 6 : O / 6 + 60;
        if (T !== S) {
          var g, {
            hourStr: P
          } = Zi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var b = re().minute(T).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            g = P + ":" + b + D;
          }
          if (e.type === "second") {
            var k = re().second(T).format("ss"), A = e.useSeconds ? ":" + k : "";
            g = P + ":" + e.time.minute + A;
          }
          r("update", g);
        }
      }
    }), ae([() => e.max, () => e.min, () => e.allowedTime], (w) => {
      var [O, T, S] = w;
      if (t.value = [], O && !T) {
        var {
          hour: g
        } = en(O), P = sn.filter((Z) => z(Z) > g), b = Je.filter((Z) => z(Z) > g);
        t.value = [...P, ...b];
      }
      if (!O && T) {
        var {
          hour: D
        } = en(T), k = sn.filter((Z) => z(Z) < D), A = Je.filter((Z) => z(Z) < D);
        t.value = [...k, ...A];
      }
      if (O && T) {
        var {
          hour: I
        } = en(O), {
          hour: C
        } = en(T), $ = sn.filter((Z) => z(Z) < C || z(Z) > I), L = Je.filter((Z) => z(Z) < C || z(Z) > I);
        t.value = [...$, ...L];
      }
      if (S != null && S.hours) {
        var {
          hours: Y
        } = S, j = sn.filter((Z) => !Y(z(Z))), F = Je.filter((Z) => !Y(z(Z)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...j, ...F])];
      }
      i.value = t.value.map((Z) => Je.findIndex((H) => Z === H)).filter((Z) => Z >= 0);
    }, {
      immediate: !0
    }), {
      n: M0,
      classes: E0,
      hours24: Je,
      timeScales: s,
      inner: a,
      handStyle: o,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: m,
      activeItemIndex: l
    };
  }
});
var {
  n: D0,
  classes: B0
} = ne("time-picker"), A0 = (e) => (Cr(""), e = e(), kr(), e), z0 = /* @__PURE__ */ A0(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
)), L0 = {
  key: 0
};
function F0(e, n) {
  var r = te("clock");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [B(
      "div",
      {
        class: c(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [B(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [B(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          _(e.time.hour),
          3
        ), z0, B(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          _(e.time.minute),
          3
        ), e.useSeconds ? (h(), V("span", L0, ":")) : J("v-if", !0), e.useSeconds ? (h(), V(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          _(e.time.second),
          3
        )) : J("v-if", !0)],
        2
      ), e.format === "ampm" ? (h(), V(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [B(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
        ), B(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
        )],
        2
      )) : J("v-if", !0)],
      6
    ), B(
      "div",
      {
        class: c(e.n("body"))
      },
      [B(
        "div",
        {
          class: c(e.n("clock-container")),
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
        [ee(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: fe(() => [(h(), me(
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
          },
          8,
          ["name"]
        )],
        34
      )],
      2
    )],
    2
  );
}
const wa = Q({
  render: F0,
  name: "VarTimePicker",
  components: {
    Clock: N0
  },
  props: P0,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), i = M(!1), o = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), p = M(!1), y = M(!1), w = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), O = Ne({
      x: 0,
      y: 0
    }), T = Ne({
      x: [],
      y: []
    }), S = W(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), g = (E) => {
      N(e["onUpdate:modelValue"], E), N(e.onChange, E);
    }, P = (E) => E * 57.29577951308232, b = (E) => {
      l.value = !1, y.value = !1, f.value = E;
    }, D = (E) => {
      var {
        disableHour: R
      } = a.value, U = sn.findIndex((le) => z(le) === z(w.value.hour)), x = E === "am" ? sn : Je, ie = [...x.slice(U), ...x.slice(0, U)];
      return ie.find((le, de) => (i.value = de !== 0, !R.includes(le)));
    }, k = (E) => {
      if (!e.readonly) {
        m.value = E;
        var R = D(E);
        if (!!R) {
          var U = e.useSeconds ? ":" + w.value.second : "", x = hr(R, 2, "0") + ":" + w.value.minute + U;
          g(x);
        }
      }
    }, A = (E, R) => {
      var U = E >= T.x[0] && E <= T.x[1], x = R >= T.y[0] && R <= T.y[1];
      return U && x;
    }, I = (E) => {
      var R = e.format === "24hr" ? "HH" : "hh", {
        hour: U,
        minute: x,
        second: ie
      } = en(E);
      return {
        hour: re().hour(U).format(R),
        minute: re().minute(x).format("mm"),
        second: re().second(ie).format("ss")
      };
    }, C = (E) => {
      var R = E / 30;
      return R >= 0 ? R : R + 12;
    }, $ = () => {
      var {
        width: E,
        height: R
      } = a.value.getSize(), U = O.x - E / 2 - 8, x = O.x + E / 2 + 8, ie = O.y - R / 2 - 8, le = O.y + R / 2 + 8;
      return {
        rangeXMin: U,
        rangeXMax: x,
        rangeYMin: ie,
        rangeYMax: le
      };
    }, L = (E, R, U) => {
      var {
        disableHour: x
      } = a.value;
      o.value = A(E, R);
      var ie = Math.round(U / 30) * 30 + 90, le = C(ie), de = t.value ? sn[le] : Je[le];
      if (x.includes(de) || (t.value = e.format === "24hr" ? A(E, R) : !1), t.value === o.value) {
        var we = t.value || m.value === "pm" ? Je[le] : sn[le];
        p.value = x.includes(we), !p.value && (u.value = ie, l.value = !0);
      }
    }, Y = (E) => {
      var {
        disableHour: R
      } = a.value, U = Math.round(E / 6) * 6 + 90, x = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: x,
        format: e.format,
        ampm: m.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: R,
        allowedTime: e.allowedTime
      };
      y.value = zs(ie), !y.value && (d.value = U, s.value = !0);
    }, j = (E) => {
      var {
        disableHour: R
      } = a.value, U = Math.round(E / 6) * 6 + 90, x = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: x,
        format: e.format,
        ampm: m.value,
        hour: w.value.hour,
        minute: z(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: R,
        allowedTime: e.allowedTime
      };
      Ls(ie) || (v.value = U);
    }, F = () => {
      var {
        left: E,
        top: R,
        width: U,
        height: x
      } = n.value.getBoundingClientRect();
      if (O.x = E + U / 2, O.y = R + x / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ie,
          rangeXMax: le,
          rangeYMin: de,
          rangeYMax: we
        } = $();
        T.x = [ie, le], T.y = [de, we];
      }
    }, Z = (E) => {
      if (E.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: R,
          clientY: U
        } = E.touches[0], x = R - O.x, ie = U - O.y, le = Math.round(P(Math.atan2(ie, x)));
        f.value === "hour" ? L(R, U, le) : f.value === "minute" ? Y(le) : j(le);
      }
    }, H = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, X = () => {
      i.value = !1;
    };
    return ae(() => e.modelValue, (E) => {
      if (E) {
        var {
          hour: R,
          minute: U,
          second: x
        } = en(E), ie = re().hour(R).format("hh"), le = re().hour(R).format("HH"), de = re().minute(U).format("mm"), we = re().second(x).format("ss");
        u.value = (ie === "12" ? 0 : z(ie)) * 30, d.value = z(de) * 6, v.value = z(we) * 6, w.value = I(E), e.format !== "24hr" && (m.value = hr("" + R, 2, "0") === le && Je.includes(le) ? "pm" : "am"), t.value = e.format === "24hr" && Je.includes(le);
      }
    }, {
      immediate: !0
    }), {
      n: D0,
      classes: B0,
      getRad: S,
      time: w,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: i,
      moveHand: Z,
      checkPanel: b,
      checkAmpm: k,
      end: H,
      update: g,
      changePreventUpdate: X
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
var R0 = {
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
  onBeforeRead: {
    type: Function
  },
  onAfterRead: {
    type: Function
  },
  onBeforeRemove: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  onOversize: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function ll(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function sl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ll(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ll(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: U0,
  classes: Y0
} = ne("uploader"), W0 = 0, H0 = ["onClick"], j0 = ["onClick"], G0 = ["src", "alt"], q0 = ["multiple", "accept", "capture", "disabled"], K0 = ["src"];
function X0(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = te("var-popup"), i = Ge("ripple");
  return h(), V(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), V(
        Oe,
        null,
        De(e.files, (o) => ke((h(), V(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [o.state === "loading", e.n("--loading")])),
            key: o.id,
            onClick: (l) => e.preview(o)
          },
          [B(
            "div",
            {
              class: c(e.n("file-name"))
            },
            _(o.name || o.url),
            3
          ), e.removable ? (h(), V(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Nn((l) => e.handleRemove(o), ["stop"])
            },
            [ee(
              r,
              {
                class: c(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            j0
          )) : J("v-if", !0), o.cover ? (h(), V(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: K({
                objectFit: o.fit
              }),
              src: o.cover,
              alt: o.name
            },
            null,
            14,
            G0
          )) : J("v-if", !0), B(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          H0
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((h(), V(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [B(
          "input",
          {
            ref: "input",
            class: c(e.n("action-input")),
            type: "file",
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
          q0
        ), G(e.$slots, "default", {}, () => [ee(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : J("v-if", !0)],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), ee(
      t,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (o) => e.showPreview = o),
        onClosed: n[3] || (n[3] = (o) => e.currentPreview = null)
      },
      {
        default: fe(() => {
          var o, l;
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (h(), V(
            "video",
            {
              key: 0,
              class: c(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (l = e.currentPreview) == null ? void 0 : l.url
            },
            null,
            10,
            K0
          )) : J("v-if", !0)];
        }),
        _: 1
      },
      8,
      ["class", "show"]
    )],
    2
  );
}
const Sa = Q({
  render: X0,
  name: "VarUploader",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarPopup: yn,
    VarFormDetails: He
  },
  props: R0,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = W(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: j
        }
      } = e;
      return je(Y) ? j + " / " + Y : "";
    }), {
      form: i,
      bindForm: o
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = W(() => {
      var {
        modelValue: Y,
        hideList: j
      } = e;
      return j ? [] : Y;
    }), f = () => {
      n.value.click();
    }, m = (Y) => {
      var {
        disabled: j,
        readonly: F,
        previewed: Z
      } = e;
      if (!(i != null && i.disabled.value || i != null && i.readonly.value || j || F || !Z)) {
        var {
          url: H
        } = Y;
        if (qe(H) && no(H)) {
          er(H);
          return;
        }
        qe(H) && ro(H) && (a.value = Y, r.value = !0);
      }
    }, p = (Y) => ({
      id: W0++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), y = (Y) => {
      var j = Y.target, {
        files: F
      } = j;
      return Array.from(F);
    }, w = (Y) => new Promise((j) => {
      var F = new FileReader();
      F.onload = () => {
        var Z = F.result;
        Y.file.type.startsWith("image") && (Y.cover = Z), Y.url = Z, j(Y);
      }, F.readAsDataURL(Y.file);
    }), O = (Y) => Y.map(w), T = (Y) => {
      var {
        onBeforeRead: j
      } = e;
      return Y.map((F) => new Promise((Z) => {
        var H = j ? j(Ne(F)) : !0;
        Promise.resolve(H).then((X) => Z({
          valid: X,
          varFile: F
        }));
      }));
    }, S = /* @__PURE__ */ function() {
      var Y = sl(function* (j) {
        var {
          maxsize: F,
          maxlength: Z,
          modelValue: H,
          onOversize: X,
          onAfterRead: E,
          readonly: R,
          disabled: U
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || U || R)) {
          var x = (Me) => Me.filter((on) => on.file.size > z(F) ? (N(X, Ne(on)), !1) : !0), ie = (Me) => {
            var on = Math.min(Me.length, z(Z) - H.length);
            return Me.slice(0, on);
          }, le = y(j), de = le.map(p);
          de = F != null ? x(de) : de, de = Z != null ? ie(de) : de;
          var we = yield Promise.all(O(de)), Re = yield Promise.all(T(we)), Qe = Re.filter((Me) => {
            var {
              valid: on
            } = Me;
            return on;
          }).map((Me) => {
            var {
              varFile: on
            } = Me;
            return on;
          });
          N(e["onUpdate:modelValue"], [...H, ...Qe]), j.target.value = "", Qe.forEach((Me) => N(E, Ne(Me)));
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), g = /* @__PURE__ */ function() {
      var Y = sl(function* (j) {
        var {
          disabled: F,
          readonly: Z,
          modelValue: H,
          onBeforeRemove: X,
          onRemove: E
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || F || Z) && !(X && !(yield X(j)))) {
          var R = H.filter((U) => U !== j);
          N(E, j), A("onRemove"), N(e["onUpdate:modelValue"], R);
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((Y) => Y.state === "success"), b = () => e.modelValue.filter((Y) => Y.state === "error"), D = () => e.modelValue.filter((Y) => Y.state === "loading"), k = {
      getSuccess: P,
      getError: b,
      getLoading: D
    }, A = (Y) => {
      Pe(() => {
        var {
          validateTrigger: j,
          rules: F,
          modelValue: Z
        } = e;
        s(j, Y, F, Z, k);
      });
    }, I = !1, C = () => u(e.rules, e.modelValue, k), $ = () => {
      I = !0, N(e["onUpdate:modelValue"], []), d();
    }, L = {
      validate: C,
      resetValidation: d,
      reset: $
    };
    return N(o, L), ae(() => e.modelValue, () => {
      !I && A("onChange"), I = !1;
    }, {
      deep: !0
    }), {
      n: U0,
      classes: Y0,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: ro,
      isHTMLSupportImage: no,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: m,
      triggerAction: f,
      handleChange: S,
      handleRemove: g,
      getSuccess: P,
      getError: b,
      getLoading: D,
      validate: C,
      resetValidation: d,
      reset: $
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
function Z0(e) {
  gr.install && e.use(gr), Nr.install && e.use(Nr), Dr.install && e.use(Dr), lr.install && e.use(lr), Br.install && e.use(Br), Ar.install && e.use(Ar), nn.install && e.use(nn), zr.install && e.use(zr), sr.install && e.use(sr), ur.install && e.use(ur), Lr.install && e.use(Lr), dr.install && e.use(dr), Fr.install && e.use(Fr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), tn.install && e.use(tn), Yr.install && e.use(Yr), Wr.install && e.use(Wr), Hr.install && e.use(Hr), yr.install && e.use(yr), jr.install && e.use(jr), Kn.install && e.use(Kn), He.install && e.use(He), Te.install && e.use(Te), Gr.install && e.use(Gr), er.install && e.use(er), qr.install && e.use(qr), Kr.install && e.use(Kr), mr.install && e.use(mr), pt.install && e.use(pt), Xr.install && e.use(Xr), Zr.install && e.use(Zr), kn.install && e.use(kn), Fa.install && e.use(Fa), Jt.install && e.use(Jt), xn.install && e.use(xn), Jr.install && e.use(Jr), Qr.install && e.use(Qr), xr.install && e.use(xr), Sr.install && e.use(Sr), yn.install && e.use(yn), _r.install && e.use(_r), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), Ue.install && e.use(Ue), ia.install && e.use(ia), oa.install && e.use(oa), la.install && e.use(la), sa.install && e.use(sa), Dn.install && e.use(Dn), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), Jn.install && e.use(Jn), Wa.install && e.use(Wa), Xn.install && e.use(Xn), Zn.install && e.use(Zn), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), Vi.install && e.use(Vi), wa.install && e.use(wa), Sa.install && e.use(Sa);
}
const Q0 = {
  install: Z0,
  ActionSheet: gr,
  AppBar: Nr,
  BackTop: Dr,
  Badge: lr,
  BottomNavigation: Br,
  BottomNavigationItem: Ar,
  Button: nn,
  Card: zr,
  Cell: sr,
  Checkbox: ur,
  CheckboxGroup: Lr,
  Chip: dr,
  Col: Fr,
  Collapse: Rr,
  CollapseItem: Ur,
  Context: tn,
  Countdown: Yr,
  Counter: Wr,
  DatePicker: Hr,
  Dialog: yr,
  Divider: jr,
  Form: Kn,
  FormDetails: He,
  Icon: Te,
  Image: Gr,
  ImagePreview: er,
  IndexAnchor: qr,
  IndexBar: Kr,
  Input: mr,
  Lazy: pt,
  Link: Xr,
  List: Zr,
  Loading: kn,
  LoadingBar: Fa,
  Locale: Jt,
  Menu: xn,
  Option: Jr,
  Overlay: Qr,
  Pagination: xr,
  Picker: Sr,
  Popup: yn,
  Progress: _r,
  PullRefresh: ea,
  Radio: na,
  RadioGroup: ra,
  Rate: aa,
  Result: ta,
  Ripple: Ue,
  Row: ia,
  Select: oa,
  Skeleton: la,
  Slider: sa,
  Snackbar: Dn,
  Space: da,
  Step: va,
  Steps: fa,
  Sticky: Jn,
  StyleProvider: Wa,
  Swipe: Xn,
  SwipeItem: Zn,
  Switch: ma,
  Tab: pa,
  TabItem: ha,
  Table: ga,
  Tabs: ya,
  TabsItems: ba,
  Themes: Vi,
  TimePicker: wa,
  Uploader: Sa
};
export {
  gr as ActionSheet,
  Nr as AppBar,
  Dr as BackTop,
  lr as Badge,
  Br as BottomNavigation,
  Ar as BottomNavigationItem,
  nn as Button,
  zr as Card,
  sr as Cell,
  ur as Checkbox,
  Lr as CheckboxGroup,
  dr as Chip,
  Fr as Col,
  Rr as Collapse,
  Ur as CollapseItem,
  tn as Context,
  Yr as Countdown,
  Wr as Counter,
  Hr as DatePicker,
  yr as Dialog,
  jr as Divider,
  Kn as Form,
  He as FormDetails,
  Te as Icon,
  Gr as Image,
  er as ImagePreview,
  qr as IndexAnchor,
  Kr as IndexBar,
  mr as Input,
  pt as Lazy,
  Xr as Link,
  Zr as List,
  kn as Loading,
  Fa as LoadingBar,
  Jt as Locale,
  xn as Menu,
  Jr as Option,
  Qr as Overlay,
  xr as Pagination,
  Sr as Picker,
  yn as Popup,
  _r as Progress,
  ea as PullRefresh,
  na as Radio,
  ra as RadioGroup,
  aa as Rate,
  ta as Result,
  Ue as Ripple,
  ia as Row,
  oa as Select,
  la as Skeleton,
  sa as Slider,
  Dn as Snackbar,
  da as Space,
  va as Step,
  fa as Steps,
  Jn as Sticky,
  Wa as StyleProvider,
  Xn as Swipe,
  Zn as SwipeItem,
  ma as Switch,
  pa as Tab,
  ha as TabItem,
  ga as Table,
  ya as Tabs,
  ba as TabsItems,
  Vi as Themes,
  wa as TimePicker,
  Sa as Uploader,
  Q0 as default,
  Z0 as install
};
