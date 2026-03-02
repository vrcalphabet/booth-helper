"use strict";
(() => {
  // src/shared/utils/watchElement.ts
  function watchElement(target, options) {
    let prevResult = options.when();
    prevResult && options.do(), new MutationObserver(() => {
      let currentResult = options.when();
      currentResult && !prevResult && options.do(), prevResult = currentResult;
    }).observe(target, { childList: !0 });
  }

  // node_modules/preact/dist/preact.module.js
  var n, l, u, t, i, r, o, e, f, c, s, a, h, p = {}, v = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d = Array.isArray;
  function w(n2, l2) {
    for (var u3 in l2) n2[u3] = l2[u3];
    return n2;
  }
  function g(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l2, u3, t2) {
    var i2, r2, o2, e2 = {};
    for (o2 in u3) o2 == "key" ? i2 = u3[o2] : o2 == "ref" ? r2 = u3[o2] : e2[o2] = u3[o2];
    if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), typeof l2 == "function" && l2.defaultProps != null) for (o2 in l2.defaultProps) e2[o2] === void 0 && (e2[o2] = l2.defaultProps[o2]);
    return m(l2, e2, i2, r2, null);
  }
  function m(n2, t2, i2, r2, o2) {
    var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o2 == null ? ++u : o2, __i: -1, __u: 0 };
    return o2 == null && l.vnode != null && l.vnode(e2), e2;
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function S(n2, l2) {
    if (l2 == null) return n2.__ ? S(n2.__, n2.__i + 1) : null;
    for (var u3; l2 < n2.__k.length; l2++) if ((u3 = n2.__k[l2]) != null && u3.__e != null) return u3.__e;
    return typeof n2.type == "function" ? S(n2) : null;
  }
  function C(n2) {
    if (n2.__P && n2.__d) {
      var u3 = n2.__v, t2 = u3.__e, i2 = [], r2 = [], o2 = w({}, u3);
      o2.__v = u3.__v + 1, l.vnode && l.vnode(o2), z(n2.__P, o2, u3, n2.__n, n2.__P.namespaceURI, 32 & u3.__u ? [t2] : null, i2, t2 == null ? S(u3) : t2, !!(32 & u3.__u), r2), o2.__v = u3.__v, o2.__.__k[o2.__i] = o2, V(i2, o2, r2), u3.__e = u3.__ = null, o2.__e != t2 && M(o2);
    }
  }
  function M(n2) {
    if ((n2 = n2.__) != null && n2.__c != null) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
      if (l2 != null && l2.__e != null) return n2.__e = n2.__c.base = l2.__e;
    }), M(n2);
  }
  function $(n2) {
    (!n2.__d && (n2.__d = !0) && i.push(n2) && !I.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(I);
  }
  function I() {
    for (var n2, l2 = 1; i.length; ) i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, C(n2);
    I.__r = 0;
  }
  function P(n2, l2, u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, y2, d2, w2, g2, _2, m2 = t2 && t2.__k || v, b = l2.length;
    for (f3 = A(u3, l2, m2, f3, b), a2 = 0; a2 < b; a2++) (y2 = u3.__k[a2]) != null && (h2 = y2.__i != -1 && m2[y2.__i] || p, y2.__i = a2, g2 = z(n2, y2, h2, i2, r2, o2, e2, f3, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && D(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), w2 == null && d2 != null && (w2 = d2), (_2 = !!(4 & y2.__u)) || h2.__k === y2.__k ? f3 = H(y2, f3, n2, _2) : typeof y2.type == "function" && g2 !== void 0 ? f3 = g2 : d2 && (f3 = d2.nextSibling), y2.__u &= -7);
    return u3.__e = w2, f3;
  }
  function A(n2, l2, u3, t2, i2) {
    var r2, o2, e2, f3, c2, s2 = u3.length, a2 = s2, h2 = 0;
    for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) (o2 = l2[r2]) != null && typeof o2 != "boolean" && typeof o2 != "function" ? (typeof o2 == "string" || typeof o2 == "number" || typeof o2 == "bigint" || o2.constructor == String ? o2 = n2.__k[r2] = m(null, o2, null, null, null) : d(o2) ? o2 = n2.__k[r2] = m(k, { children: o2 }, null, null, null) : o2.constructor === void 0 && o2.__b > 0 ? o2 = n2.__k[r2] = m(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f3 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, (c2 = o2.__i = T(o2, u3, f3, a2)) != -1 && (a2--, (e2 = u3[c2]) && (e2.__u |= 2)), e2 == null || e2.__v == null ? (c2 == -1 && (i2 > s2 ? h2-- : i2 < s2 && h2++), typeof o2.type != "function" && (o2.__u |= 4)) : c2 != f3 && (c2 == f3 - 1 ? h2-- : c2 == f3 + 1 ? h2++ : (c2 > f3 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
    if (a2) for (r2 = 0; r2 < s2; r2++) (e2 = u3[r2]) != null && (2 & e2.__u) == 0 && (e2.__e == t2 && (t2 = S(e2)), E(e2, e2));
    return t2;
  }
  function H(n2, l2, u3, t2) {
    var i2, r2;
    if (typeof n2.type == "function") {
      for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = H(i2[r2], l2, u3, t2));
      return l2;
    }
    n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = S(n2)), u3.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
    do
      l2 = l2 && l2.nextSibling;
    while (l2 != null && l2.nodeType == 8);
    return l2;
  }
  function T(n2, l2, u3, t2) {
    var i2, r2, o2, e2 = n2.key, f3 = n2.type, c2 = l2[u3], s2 = c2 != null && (2 & c2.__u) == 0;
    if (c2 === null && e2 == null || s2 && e2 == c2.key && f3 == c2.type) return u3;
    if (t2 > (s2 ? 1 : 0)) {
      for (i2 = u3 - 1, r2 = u3 + 1; i2 >= 0 || r2 < l2.length; ) if ((c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) != null && (2 & c2.__u) == 0 && e2 == c2.key && f3 == c2.type) return o2;
    }
    return -1;
  }
  function j(n2, l2, u3) {
    l2[0] == "-" ? n2.setProperty(l2, u3 == null ? "" : u3) : n2[l2] = u3 == null ? "" : typeof u3 != "number" || y.test(l2) ? u3 : u3 + "px";
  }
  function F(n2, l2, u3, t2, i2) {
    var r2, o2;
    n: if (l2 == "style") if (typeof u3 == "string") n2.style.cssText = u3;
    else {
      if (typeof t2 == "string" && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || j(n2.style, l2, "");
      if (u3) for (l2 in u3) t2 && u3[l2] == t2[l2] || j(n2.style, l2, u3[l2]);
    }
    else if (l2[0] == "o" && l2[1] == "n") r2 = l2 != (l2 = l2.replace(f, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || l2 == "onFocusOut" || l2 == "onFocusIn" ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? t2 ? u3.u = t2.u : (u3.u = c, n2.addEventListener(l2, r2 ? a : s, r2)) : n2.removeEventListener(l2, r2 ? a : s, r2);
    else {
      if (i2 == "http://www.w3.org/2000/svg") l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 != "width" && l2 != "height" && l2 != "href" && l2 != "list" && l2 != "form" && l2 != "tabIndex" && l2 != "download" && l2 != "rowSpan" && l2 != "colSpan" && l2 != "role" && l2 != "popover" && l2 in n2) try {
        n2[l2] = u3 == null ? "" : u3;
        break n;
      } catch (n3) {
      }
      typeof u3 == "function" || (u3 == null || u3 === !1 && l2[4] != "-" ? n2.removeAttribute(l2) : n2.setAttribute(l2, l2 == "popover" && u3 == 1 ? "" : u3));
    }
  }
  function O(n2) {
    return function(u3) {
      if (this.l) {
        var t2 = this.l[u3.type + n2];
        if (u3.t == null) u3.t = c++;
        else if (u3.t < t2.u) return;
        return t2(l.event ? l.event(u3) : u3);
      }
    };
  }
  function z(n2, u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, p2, y2, _2, m2, b, S2, C2, M2, $2, I2, A2, H2, L, T2 = u3.type;
    if (u3.constructor !== void 0) return null;
    128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f3 = u3.__e = t2.__e]), (a2 = l.__b) && a2(u3);
    n: if (typeof T2 == "function") try {
      if (S2 = u3.props, C2 = "prototype" in T2 && T2.prototype.render, M2 = (a2 = T2.contextType) && i2[a2.__c], $2 = a2 ? M2 ? M2.props.value : a2.__ : i2, t2.__c ? b = (h2 = u3.__c = t2.__c).__ = h2.__E : (C2 ? u3.__c = h2 = new T2(S2, $2) : (u3.__c = h2 = new x(S2, $2), h2.constructor = T2, h2.render = G), M2 && M2.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = !0, h2.__h = [], h2._sb = []), C2 && h2.__s == null && (h2.__s = h2.state), C2 && T2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = w({}, h2.__s)), w(h2.__s, T2.getDerivedStateFromProps(S2, h2.__s))), y2 = h2.props, _2 = h2.state, h2.__v = u3, p2) C2 && T2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), C2 && h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
      else {
        if (C2 && T2.getDerivedStateFromProps == null && S2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(S2, $2), u3.__v == t2.__v || !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(S2, h2.__s, $2) === !1) {
          u3.__v != t2.__v && (h2.props = S2, h2.state = h2.__s, h2.__d = !1), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), v.push.apply(h2.__h, h2._sb), h2._sb = [], h2.__h.length && e2.push(h2);
          break n;
        }
        h2.componentWillUpdate != null && h2.componentWillUpdate(S2, h2.__s, $2), C2 && h2.componentDidUpdate != null && h2.__h.push(function() {
          h2.componentDidUpdate(y2, _2, m2);
        });
      }
      if (h2.context = $2, h2.props = S2, h2.__P = n2, h2.__e = !1, I2 = l.__r, A2 = 0, C2) h2.state = h2.__s, h2.__d = !1, I2 && I2(u3), a2 = h2.render(h2.props, h2.state, h2.context), v.push.apply(h2.__h, h2._sb), h2._sb = [];
      else do
        h2.__d = !1, I2 && I2(u3), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
      while (h2.__d && ++A2 < 25);
      h2.state = h2.__s, h2.getChildContext != null && (i2 = w(w({}, i2), h2.getChildContext())), C2 && !p2 && h2.getSnapshotBeforeUpdate != null && (m2 = h2.getSnapshotBeforeUpdate(y2, _2)), H2 = a2 != null && a2.type === k && a2.key == null ? q(a2.props.children) : a2, f3 = P(n2, d(H2) ? H2 : [H2], u3, t2, i2, r2, o2, e2, f3, c2, s2), h2.base = u3.__e, u3.__u &= -161, h2.__h.length && e2.push(h2), b && (h2.__E = h2.__ = null);
    } catch (n3) {
      if (u3.__v = null, c2 || o2 != null) if (n3.then) {
        for (u3.__u |= c2 ? 160 : 128; f3 && f3.nodeType == 8 && f3.nextSibling; ) f3 = f3.nextSibling;
        o2[o2.indexOf(f3)] = null, u3.__e = f3;
      } else {
        for (L = o2.length; L--; ) g(o2[L]);
        N(u3);
      }
      else u3.__e = t2.__e, u3.__k = t2.__k, n3.then || N(u3);
      l.__e(n3, u3, t2);
    }
    else o2 == null && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f3 = u3.__e = B(t2.__e, u3, t2, i2, r2, o2, e2, c2, s2);
    return (a2 = l.diffed) && a2(u3), 128 & u3.__u ? void 0 : f3;
  }
  function N(n2) {
    n2 && (n2.__c && (n2.__c.__e = !0), n2.__k && n2.__k.some(N));
  }
  function V(n2, u3, t2) {
    for (var i2 = 0; i2 < t2.length; i2++) D(t2[i2], t2[++i2], t2[++i2]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function q(n2) {
    return typeof n2 != "object" || n2 == null || n2.__b > 0 ? n2 : d(n2) ? n2.map(q) : w({}, n2);
  }
  function B(u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, v2, y2, w2, _2, m2, b = i2.props || p, k2 = t2.props, x2 = t2.type;
    if (x2 == "svg" ? o2 = "http://www.w3.org/2000/svg" : x2 == "math" ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), e2 != null) {
      for (a2 = 0; a2 < e2.length; a2++) if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : w2.nodeType == 3)) {
        u3 = w2, e2[a2] = null;
        break;
      }
    }
    if (u3 == null) {
      if (x2 == null) return document.createTextNode(k2);
      u3 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = !1), e2 = null;
    }
    if (x2 == null) b === k2 || c2 && u3.data == k2 || (u3.data = k2);
    else {
      if (e2 = e2 && n.call(u3.childNodes), !c2 && e2 != null) for (b = {}, a2 = 0; a2 < u3.attributes.length; a2++) b[(w2 = u3.attributes[a2]).name] = w2.value;
      for (a2 in b) w2 = b[a2], a2 == "dangerouslySetInnerHTML" ? v2 = w2 : a2 == "children" || a2 in k2 || a2 == "value" && "defaultValue" in k2 || a2 == "checked" && "defaultChecked" in k2 || F(u3, a2, null, w2, o2);
      for (a2 in k2) w2 = k2[a2], a2 == "children" ? y2 = w2 : a2 == "dangerouslySetInnerHTML" ? h2 = w2 : a2 == "value" ? _2 = w2 : a2 == "checked" ? m2 = w2 : c2 && typeof w2 != "function" || b[a2] === w2 || F(u3, a2, w2, b[a2], o2);
      if (h2) c2 || v2 && (h2.__html == v2.__html || h2.__html == u3.innerHTML) || (u3.innerHTML = h2.__html), t2.__k = [];
      else if (v2 && (u3.innerHTML = ""), P(t2.type == "template" ? u3.content : u3, d(y2) ? y2 : [y2], t2, i2, r2, x2 == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o2, e2, f3, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), e2 != null) for (a2 = e2.length; a2--; ) g(e2[a2]);
      c2 || (a2 = "value", x2 == "progress" && _2 == null ? u3.removeAttribute("value") : _2 != null && (_2 !== u3[a2] || x2 == "progress" && !_2 || x2 == "option" && _2 != b[a2]) && F(u3, a2, _2, b[a2], o2), a2 = "checked", m2 != null && m2 != u3[a2] && F(u3, a2, m2, b[a2], o2));
    }
    return u3;
  }
  function D(n2, u3, t2) {
    try {
      if (typeof n2 == "function") {
        var i2 = typeof n2.__u == "function";
        i2 && n2.__u(), i2 && u3 == null || (n2.__u = n2(u3));
      } else n2.current = u3;
    } catch (n3) {
      l.__e(n3, t2);
    }
  }
  function E(n2, u3, t2) {
    var i2, r2;
    if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || D(i2, null, u3)), (i2 = n2.__c) != null) {
      if (i2.componentWillUnmount) try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
      i2.base = i2.__P = null;
    }
    if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && E(i2[r2], u3, t2 || typeof n2.type != "function");
    t2 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function G(n2, l2, u3) {
    return this.constructor(n2, u3);
  }
  function J(u3, t2, i2) {
    var r2, o2, e2, f3;
    t2 == document && (t2 = document.documentElement), l.__ && l.__(u3, t2), o2 = (r2 = typeof i2 == "function") ? null : i2 && i2.__k || t2.__k, e2 = [], f3 = [], z(t2, u3 = (!r2 && i2 || t2).__k = _(k, null, [u3]), o2 || p, p, t2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : t2.firstChild, r2, f3), V(e2, u3, f3);
  }
  n = v.slice, l = { __e: function(n2, l2, u3, t2) {
    for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
      if ((r2 = i2.constructor) && r2.getDerivedStateFromError != null && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), i2.componentDidCatch != null && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
    } catch (l3) {
      n2 = l3;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, x.prototype.setState = function(n2, l2) {
    var u3;
    u3 = this.__s != null && this.__s != this.state ? this.__s : this.__s = w({}, this.state), typeof n2 == "function" && (n2 = n2(w({}, u3), this.props)), n2 && w(u3, n2), n2 != null && this.__v && (l2 && this._sb.push(l2), $(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = !0, n2 && this.__h.push(n2), $(this));
  }, x.prototype.render = k, i = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, I.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(!1), a = O(!0), h = 0;

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  function u2(e2, t2, n2, o2, i2, u3) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2) for (c2 in p2 = {}, t2) c2 == "ref" ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
    if (typeof e2 == "function" && (a2 = e2.defaultProps)) for (c2 in a2) p2[c2] === void 0 && (p2[c2] = a2[c2]);
    return l.vnode && l.vnode(l2), l2;
  }

  // src/hide-nsfw/scripts/App.tsx
  function App() {
    return /* @__PURE__ */ u2("div", { children: "Hello, PReact!" });
  }

  // src/hide-nsfw/scripts/main.tsx
  var pulldown = document.querySelector("#js-user-pulldown > div > div");
  watchElement(pulldown, {
    when: () => pulldown.children.length > 1,
    do: () => {
      let target = document.querySelector("#js-user-pulldown a"), div = document.createElement("div");
      target.before(div), J(/* @__PURE__ */ u2(App, {}), div);
    }
  });
})();
