/*
  [JS Index - plugins]
  
  ---
  
  Template Name: Mrex - Coming Soon Template
  Author:  ex-nihilo
  Version: 1.0
*/

/*
  1. jQuery v2.2.4
  2. Slick v1.6.0
  3. Fullscreeneo v1.0.0
  4. fullPage v2.9.4
  5. Countdown v1.6.3
  6. jquery.appear v1.0.0
  7. easy-pie-chart v2.1.7
  8. jQuery Easing v1.3
  9. jquery.mb.YTPlayer v3.1.4
  10. cursor.style v1.0.1
  11. Bootstrap v3.3.7
  12. List Ticker
  13. jquery.tweet.js
*/

// 1. jQuery v2.2.4
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "2.2.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isPlainObject: function (a) {
        var b;
        if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
        if (
          a.constructor &&
          !k.call(a, "constructor") &&
          !k.call(a.constructor.prototype || {}, "isPrototypeOf")
        )
          return !1;
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = d.createElement("script")),
                (b.text = a),
                d.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : h.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((d = e.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, d.concat(e.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", O);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || "") || fa.error("unsupported lang: " + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ja("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && f.parentNode && ((this.length = 1), (this[0] = f)),
          (this.context = d),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? h.call(n(a), this[0])
          : h.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function J() {
    d.removeEventListener("DOMContentLoaded", J),
      a.removeEventListener("load", J),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      I ||
        ((I = n.Deferred()),
        "complete" === d.readyState ||
        ("loading" !== d.readyState && !d.documentElement.doScroll)
          ? a.setTimeout(n.ready)
          : (d.addEventListener("DOMContentLoaded", J),
            a.addEventListener("load", J))),
      I.promise(b)
    );
  }),
    n.ready.promise();
  var K = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) K(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    L = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function M() {
    this.expando = n.expando + M.uid++;
  }
  (M.uid = 1),
    (M.prototype = {
      register: function (a, b) {
        var c = b || {};
        return (
          a.nodeType
            ? (a[this.expando] = c)
            : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0,
              }),
          a[this.expando]
        );
      },
      cache: function (a) {
        if (!L(a)) return {};
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            L(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[b] = c;
        else for (d in b) e[d] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = a[this.expando];
        if (void 0 !== f) {
          if (void 0 === b) this.register(a);
          else {
            n.isArray(b)
              ? (d = b.concat(b.map(n.camelCase)))
              : ((e = n.camelCase(b)),
                b in f
                  ? (d = [b, e])
                  : ((d = e), (d = d in f ? [d] : d.match(G) || []))),
              (c = d.length);
            while (c--) delete f[d[c]];
          }
          (void 0 === b || n.isEmptyObject(f)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !n.isEmptyObject(b);
      },
    });
  var N = new M(),
    O = new M(),
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;
  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Q, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : P.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        O.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    },
    data: function (a, b, c) {
      return O.access(a, b, c);
    },
    removeData: function (a, b) {
      O.remove(a, b);
    },
    _data: function (a, b, c) {
      return N.access(a, b, c);
    },
    _removeData: function (a, b) {
      N.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = O.get(f)), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), R(f, d, e[d])));
            N.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              O.set(this, a);
            })
          : K(
              this,
              function (b) {
                var c, d;
                if (f && void 0 === b) {
                  if (
                    ((c =
                      O.get(f, a) ||
                      O.get(f, a.replace(Q, "-$&").toLowerCase())),
                    void 0 !== c)
                  )
                    return c;
                  if (((d = n.camelCase(a)), (c = O.get(f, d)), void 0 !== c))
                    return c;
                  if (((c = R(f, d, void 0)), void 0 !== c)) return c;
                } else
                  (d = n.camelCase(a)),
                    this.each(function () {
                      var c = O.get(this, d);
                      O.set(this, d, b),
                        a.indexOf("-") > -1 &&
                          void 0 !== c &&
                          O.set(this, a, b);
                    });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          O.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = N.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = N.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          N.get(a, c) ||
          N.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              N.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = N.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function W(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && T.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var X = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    Z = /^$|\/(?:java|ecma)script/i,
    $ = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  ($.optgroup = $.option),
    ($.tbody = $.tfoot = $.colgroup = $.caption = $.thead),
    ($.th = $.td);
  function _(a, b) {
    var c =
      "undefined" != typeof a.getElementsByTagName
        ? a.getElementsByTagName(b || "*")
        : "undefined" != typeof a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }
  var ba = /<|&#?\w+;/;
  function ca(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        o = 0,
        p = a.length;
      p > o;
      o++
    )
      if (((f = a[o]), f || 0 === f))
        if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
        else if (ba.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (Y.exec(f) || ["", ""])[1].toLowerCase()),
            (i = $[h] || $._default),
            (g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          n.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (o = 0);
    while ((f = m[o++]))
      if (d && n.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = n.contains(f.ownerDocument, f)),
        (g = _(l.appendChild(f), "script")),
        j && aa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) Z.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var da = /^key/,
    ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    fa = /^([^.]*)(?:\.(.+)|)/;
  function ga() {
    return !0;
  }
  function ha() {
    return !1;
  }
  function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ja(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ja(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = ha;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return "undefined" != typeof n && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(G) || [""]),
          (j = b.length);
        while (j--)
          (h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.hasData(a) && N.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (N.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i !== this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || d),
            (e = c.documentElement),
            (f = c.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) -
              ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (f && f.scrollTop) || 0) -
              ((e && e.clientTop) || (f && f.clientTop) || 0))),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        h.filter ? h.filter(a, g) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? ga
                  : ha))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: ha,
      isPropagationStopped: ha,
      isImmediatePropagationStopped: ha,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = ga),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = ga),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = ga),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    n.fn.extend({
      on: function (a, b, c, d) {
        return ja(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ja(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = ha),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
    });
  var ka =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    la = /<script|<style|<link/i,
    ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
    na = /^true\/(.*)/,
    oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function pa(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function qa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function ra(a) {
    var b = na.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function sa(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        N.hasData(a) &&
        ((f = N.access(a)), (g = N.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      O.hasData(a) && ((h = O.access(a)), (i = n.extend({}, h)), O.set(b, i));
    }
  }
  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && X.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
      });
    if (
      o &&
      ((e = ca(b, a[0].ownerDocument, !1, a, d)),
      (g = e.firstChild),
      1 === e.childNodes.length && (e = g),
      g || d)
    ) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++)
        (j = e),
          m !== p &&
            ((j = n.clone(j, !0, !0)), i && n.merge(h, _(j, "script"))),
          c.call(a[m], j, m);
      if (i)
        for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++)
          (j = h[m]),
            Z.test(j.type || "") &&
              !N.access(j, "globalEval") &&
              n.contains(k, j) &&
              (j.src
                ? n._evalUrl && n._evalUrl(j.src)
                : n.globalEval(j.textContent.replace(oa, "")));
    }
    return a;
  }
  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(_(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ka, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          l.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++)
          ta(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++)
            sa(f[d], g[d]);
        else sa(a, h);
      return (
        (g = _(h, "script")), g.length > 0 && aa(g, !i && _(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (L(c)) {
          if ((b = c[N.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            c[N.expando] = void 0;
          }
          c[O.expando] && (c[O.expando] = void 0);
        }
    },
  }),
    n.fn.extend({
      domManip: ua,
      detach: function (a) {
        return va(this, a, !0);
      },
      remove: function (a) {
        return va(this, a);
      },
      text: function (a) {
        return K(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(_(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return K(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !la.test(a) &&
              !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(_(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return ua(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(_(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
            (c = h === f ? this : this.clone(!0)),
              n(e[h])[b](c),
              g.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var wa,
    xa = { HTML: "block", BODY: "block" };
  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function za(a) {
    var b = d,
      c = xa[a];
    return (
      c ||
        ((c = ya(a, b)),
        ("none" !== c && c) ||
          ((wa = (
            wa || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = wa[0].contentDocument),
          b.write(),
          b.close(),
          (c = ya(a, b)),
          wa.detach()),
        (xa[a] = c)),
      c
    );
  }
  var Aa = /^margin/,
    Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ca = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    },
    Da = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Ea = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g = d.createElement("div"),
      h = d.createElement("div");
    if (h.style) {
      (h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === h.style.backgroundClip),
        (g.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        g.appendChild(h);
      function i() {
        (h.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (h.innerHTML = ""),
          Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        (b = "1%" !== d.top),
          (f = "2px" === d.marginLeft),
          (c = "4px" === d.width),
          (h.style.marginRight = "50%"),
          (e = "4px" === d.marginRight),
          Ea.removeChild(g);
      }
      n.extend(l, {
        pixelPosition: function () {
          return i(), b;
        },
        boxSizingReliable: function () {
          return null == c && i(), c;
        },
        pixelMarginRight: function () {
          return null == c && i(), e;
        },
        reliableMarginLeft: function () {
          return null == c && i(), f;
        },
        reliableMarginRight: function () {
          var b,
            c = h.appendChild(d.createElement("div"));
          return (
            (c.style.cssText = h.style.cssText =
              "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (c.style.marginRight = c.style.width = "0"),
            (h.style.width = "1px"),
            Ea.appendChild(g),
            (b = !parseFloat(a.getComputedStyle(c).marginRight)),
            Ea.removeChild(g),
            h.removeChild(c),
            b
          );
        },
      });
    }
  })();
  function Fa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Ca(a)),
      (g = c ? c.getPropertyValue(b) || c[b] : void 0),
      ("" !== g && void 0 !== g) ||
        n.contains(a.ownerDocument, a) ||
        (g = n.style(a, b)),
      c &&
        !l.pixelMarginRight() &&
        Ba.test(g) &&
        Aa.test(b) &&
        ((d = h.width),
        (e = h.minWidth),
        (f = h.maxWidth),
        (h.minWidth = h.maxWidth = h.width = g),
        (g = c.width),
        (h.width = d),
        (h.minWidth = e),
        (h.maxWidth = f)),
      void 0 !== g ? g + "" : g
    );
  }
  function Ga(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Ha = /^(none|table(?!-c[ea]).+)/,
    Ia = { position: "absolute", visibility: "hidden", display: "block" },
    Ja = { letterSpacing: "0", fontWeight: "400" },
    Ka = ["Webkit", "O", "Moz", "ms"],
    La = d.createElement("div").style;
  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ka.length;
    while (c--) if (((a = Ka[c] + b), a in La)) return a;
  }
  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Oa(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + U[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + U[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g;
  }
  function Pa(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ca(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Fa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Ba.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = N.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                V(d) &&
                (f[g] = N.access(d, "olddisplay", za(d.nodeName))))
            : ((e = V(d)),
              ("none" === c && e) ||
                N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Fa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = T.exec(c)) &&
                e[1] &&
                ((c = W(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Fa(a, b, d)),
        "normal" === e && b in Ja && (e = Ja[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Da(a, Ia, function () {
                  return Pa(a, b, d);
                })
              : Pa(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e,
            f = d && Ca(a),
            g =
              d &&
              Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = T.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = n.css(a, b))),
            Na(a, c, g)
          );
        },
      };
    }),
    (n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Fa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              Da(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        : void 0;
    })),
    (n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
      return b
        ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Aa.test(a) || (n.cssHooks[a + b].set = Na);
    }),
    n.fn.extend({
      css: function (a, b) {
        return K(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ca(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Qa(this, !0);
      },
      hide: function () {
        return Qa(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              V(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ra),
    (Ra.prototype = {
      constructor: Ra,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Ra.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ra.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ra.prototype.init.prototype = Ra.prototype),
    (Ra.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = Ra.prototype.init),
    (n.fx.step = {});
  var Sa,
    Ta,
    Ua = /^(?:toggle|show|hide)$/,
    Va = /queueHooks$/;
  function Wa() {
    return (
      a.setTimeout(function () {
        Sa = void 0;
      }),
      (Sa = n.now())
    );
  }
  function Xa(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = U[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ya(a, b, c) {
    for (
      var d,
        e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Za(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && V(a),
      q = N.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Ua.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = N.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          N.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ya(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function $a(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function _a(a, b, c) {
    var d,
      e,
      f = 0,
      g = _a.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Sa || Wa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Sa || Wa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for ($a(k, j.opts.specialEasing); g > f; f++)
      if ((d = _a.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, Ya, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(_a, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return W(c.elem, a, T.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (_a.tweeners[c] = _a.tweeners[c] || []),
          _a.tweeners[c].unshift(b);
    },
    prefilters: [Za],
    prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(V)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = _a(this, n.extend({}, a), f);
            (e || N.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = N.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = N.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Xa(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (Sa = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Sa = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(Ta), (Ta = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (l.checkOn = "" !== a.value),
        (l.optSelected = c.selected),
        (b.disabled = !0),
        (l.optDisabled = !c.disabled),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (l.radioValue = "t" === a.value);
    })();
  var ab,
    bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e =
                  n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
    }),
    (ab = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = bb[b] || n.find.attr;
      bb[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = bb[b]),
            (bb[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            (bb[b] = f)),
          e
        );
      };
    });
  var cb = /^(?:input|select|textarea|button)$/i,
    db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : cb.test(a.nodeName) || (db.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var eb = /[\t\r\n\f]/g;
  function fb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, fb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, fb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, fb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = fb(this)), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  });
  var gb = /\r/g,
    hb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var ib = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !ib.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (l = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          f || !o.trigger || o.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (
            j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            p.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            p.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = p[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : o.bindType || q),
            (m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle")),
            m && m.apply(h, c),
            (m = l && h[l]),
            m &&
              m.apply &&
              L(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          f ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !L(e) ||
            (l &&
              n.isFunction(e[q]) &&
              !n.isWindow(e) &&
              ((i = e[l]),
              i && (e[l] = null),
              (n.event.triggered = q),
              e[q](),
              (n.event.triggered = void 0),
              i && (e[l] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b);
    },
  }),
    n.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (l.focusin = "onfocusin" in a),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b);
            e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b) - 1;
            e
              ? N.access(d, b, e)
              : (d.removeEventListener(a, c, !0), N.remove(d, b));
          },
        };
      });
  var jb = a.location,
    kb = n.now(),
    lb = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (b) {
      var c;
      if (!b || "string" != typeof b) return null;
      try {
        c = new a.DOMParser().parseFromString(b, "text/xml");
      } catch (d) {
        c = void 0;
      }
      return (
        (c && !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var mb = /#.*$/,
    nb = /([?&])_=[^&]*/,
    ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    qb = /^(?:GET|HEAD)$/,
    rb = /^\/\//,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = d.createElement("a");
  vb.href = jb.href;
  function wb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function xb(a, b, c, d) {
    var e = {},
      f = a === tb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function yb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function zb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Ab(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: jb.href,
      type: "GET",
      isLocal: pb.test(jb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    },
    ajaxPrefilter: wb(sb),
    ajaxTransport: wb(tb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = n.ajaxSetup({}, c),
        o = m.context || m,
        p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
        q = n.Deferred(),
        r = n.Callbacks("once memory"),
        s = m.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = {};
                while ((b = ob.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return v || ((a = u[c] = u[c] || a), (t[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return v || (m.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > v) for (b in a) s[b] = [s[b], a[b]];
              else x.always(a[x.status]);
            return this;
          },
          abort: function (a) {
            var b = a || w;
            return e && e.abort(b), z(0, b), this;
          },
        };
      if (
        ((q.promise(x).complete = r.add),
        (x.success = x.done),
        (x.error = x.fail),
        (m.url = ((b || m.url || jb.href) + "")
          .replace(mb, "")
          .replace(rb, jb.protocol + "//")),
        (m.type = c.method || c.type || m.method || m.type),
        (m.dataTypes = n
          .trim(m.dataType || "*")
          .toLowerCase()
          .match(G) || [""]),
        null == m.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = m.url),
            (j.href = j.href),
            (m.crossDomain =
              vb.protocol + "//" + vb.host != j.protocol + "//" + j.host);
        } catch (y) {
          m.crossDomain = !0;
        }
      }
      if (
        (m.data &&
          m.processData &&
          "string" != typeof m.data &&
          (m.data = n.param(m.data, m.traditional)),
        xb(sb, m, c, x),
        2 === v)
      )
        return x;
      (k = n.event && m.global),
        k && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !qb.test(m.type)),
        (f = m.url),
        m.hasContent ||
          (m.data &&
            ((f = m.url += (lb.test(f) ? "&" : "?") + m.data), delete m.data),
          m.cache === !1 &&
            (m.url = nb.test(f)
              ? f.replace(nb, "$1_=" + kb++)
              : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
        m.ifModified &&
          (n.lastModified[f] &&
            x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
        ((m.data && m.hasContent && m.contentType !== !1) || c.contentType) &&
          x.setRequestHeader("Content-Type", m.contentType),
        x.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
            : m.accepts["*"]
        );
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
        return x.abort();
      w = "abort";
      for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);
      if ((e = xb(tb, m, c, x))) {
        if (((x.readyState = 1), k && p.trigger("ajaxSend", [x, m]), 2 === v))
          return x;
        m.async &&
          m.timeout > 0 &&
          (i = a.setTimeout(function () {
            x.abort("timeout");
          }, m.timeout));
        try {
          (v = 1), e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y);
        }
      } else z(-1, "No Transport");
      function z(b, c, d, h) {
        var j,
          l,
          t,
          u,
          w,
          y = c;
        2 !== v &&
          ((v = 2),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (x.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && 300 > b) || 304 === b),
          d && (u = zb(m, x, d)),
          (u = Ab(m, u, x, j)),
          j
            ? (m.ifModified &&
                ((w = x.getResponseHeader("Last-Modified")),
                w && (n.lastModified[f] = w),
                (w = x.getResponseHeader("etag")),
                w && (n.etag[f] = w)),
              204 === b || "HEAD" === m.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = u.state), (l = u.data), (t = u.error), (j = !t)))
            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
          (x.status = b),
          (x.statusText = (c || y) + ""),
          j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
          x.statusCode(s),
          (s = void 0),
          k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
          r.fireWith(o, [x, y]),
          k &&
            (p.trigger("ajaxComplete", [x, m]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return x;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return !n.expr.filters.visible(a);
    }),
    (n.expr.filters.visible = function (a) {
      return (
        a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
      );
    });
  var Bb = /%20/g,
    Cb = /\[\]$/,
    Db = /\r?\n/g,
    Eb = /^(?:submit|button|image|reset|file)$/i,
    Fb = /^(?:input|select|textarea|keygen)/i;
  function Gb(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || Cb.test(a)
          ? d(a, e)
          : Gb(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Gb(c, a[c], b, e);
    return d.join("&").replace(Bb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              Fb.test(this.nodeName) &&
              !Eb.test(a) &&
              (this.checked || !X.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(Db, "\r\n") };
                })
              : { name: b.name, value: c.replace(Db, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Hb = { 0: 200, 1223: 204 },
    Ib = n.ajaxSettings.xhr();
  (l.cors = !!Ib && "withCredentials" in Ib),
    (l.ajax = Ib = !!Ib),
    n.ajaxTransport(function (b) {
      var c, d;
      return l.cors || (Ib && !b.crossDomain)
        ? {
            send: function (e, f) {
              var g,
                h = b.xhr();
              if (
                (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (g in b.xhrFields) h[g] = b.xhrFields[g];
              b.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              for (g in e) h.setRequestHeader(g, e[g]);
              (c = function (a) {
                return function () {
                  c &&
                    ((c =
                      d =
                      h.onload =
                      h.onerror =
                      h.onabort =
                      h.onreadystatechange =
                        null),
                    "abort" === a
                      ? h.abort()
                      : "error" === a
                      ? "number" != typeof h.status
                        ? f(0, "error")
                        : f(h.status, h.statusText)
                      : f(
                          Hb[h.status] || h.status,
                          h.statusText,
                          "text" !== (h.responseType || "text") ||
                            "string" != typeof h.responseText
                            ? { binary: h.response }
                            : { text: h.responseText },
                          h.getAllResponseHeaders()
                        ));
                };
              }),
                (h.onload = c()),
                (d = h.onerror = c("error")),
                void 0 !== h.onabort
                  ? (h.onabort = d)
                  : (h.onreadystatechange = function () {
                      4 === h.readyState &&
                        a.setTimeout(function () {
                          c && d();
                        });
                    }),
                (c = c("abort"));
              try {
                h.send((b.hasContent && b.data) || null);
              } catch (i) {
                if (c) throw i;
              }
            },
            abort: function () {
              c && c();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = n("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Jb = [],
    Kb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Jb.pop() || n.expando + "_" + kb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Kb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Kb.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Kb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Jb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ca([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var Lb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? ((e = d.getBoundingClientRect()),
                (c = Mb(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === n.css(a, "position")) a = a.offsetParent;
          return a || Ea;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function (d) {
          return K(
            this,
            function (a, d, e) {
              var f = Mb(a);
              return void 0 === e
                ? f
                  ? f[b]
                  : a[d]
                : void (f
                    ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Fa(a, b)), Ba.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return K(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      size: function () {
        return this.length;
      },
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Nb = a.jQuery,
    Ob = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});

// 2. Slick v1.6.0
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "undefined" != typeof exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  "use strict";
  var b = window.Slick || {};
  (b = (function () {
    function c(c, d) {
      var f,
        e = this;
      (e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (b, c) {
          return a(
            '<button type="button" data-role="none" role="button" tabindex="0" />'
          ).text(c + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (e.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        a.extend(e, e.initials),
        (e.activeBreakpoint = null),
        (e.animType = null),
        (e.animProp = null),
        (e.breakpoints = []),
        (e.breakpointSettings = []),
        (e.cssTransitions = !1),
        (e.focussed = !1),
        (e.interrupted = !1),
        (e.hidden = "hidden"),
        (e.paused = !0),
        (e.positionProp = null),
        (e.respondTo = null),
        (e.rowCount = 1),
        (e.shouldClick = !0),
        (e.$slider = a(c)),
        (e.$slidesCache = null),
        (e.transformType = null),
        (e.transitionType = null),
        (e.visibilityChange = "visibilitychange"),
        (e.windowWidth = 0),
        (e.windowTimer = null),
        (f = a(c).data("slick") || {}),
        (e.options = a.extend({}, e.defaults, d, f)),
        (e.currentSlide = e.options.initialSlide),
        (e.originalSettings = e.options),
        "undefined" != typeof document.mozHidden
          ? ((e.hidden = "mozHidden"),
            (e.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((e.hidden = "webkitHidden"),
            (e.visibilityChange = "webkitvisibilitychange")),
        (e.autoPlay = a.proxy(e.autoPlay, e)),
        (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
        (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
        (e.changeSlide = a.proxy(e.changeSlide, e)),
        (e.clickHandler = a.proxy(e.clickHandler, e)),
        (e.selectHandler = a.proxy(e.selectHandler, e)),
        (e.setPosition = a.proxy(e.setPosition, e)),
        (e.swipeHandler = a.proxy(e.swipeHandler, e)),
        (e.dragHandler = a.proxy(e.dragHandler, e)),
        (e.keyHandler = a.proxy(e.keyHandler, e)),
        (e.instanceUid = b++),
        (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        e.registerBreakpoints(),
        e.init(!0);
    }
    var b = 0;
    return c;
  })()),
    (b.prototype.activateADA = function () {
      var a = this;
      a.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (b.prototype.addSlide = b.prototype.slickAdd =
      function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) (d = c), (c = null);
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(),
          "number" == typeof c
            ? 0 === c && 0 === e.$slides.length
              ? a(b).appendTo(e.$slideTrack)
              : d
              ? a(b).insertBefore(e.$slides.eq(c))
              : a(b).insertAfter(e.$slides.eq(c))
            : d === !0
            ? a(b).prependTo(e.$slideTrack)
            : a(b).appendTo(e.$slideTrack),
          (e.$slides = e.$slideTrack.children(this.options.slide)),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slideTrack.append(e.$slides),
          e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b);
          }),
          (e.$slidesCache = e.$slides),
          e.reinit();
      }),
    (b.prototype.animateHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        a.options.adaptiveHeight === !0 &&
        a.options.vertical === !1
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.animate({ height: b }, a.options.speed);
      }
    }),
    (b.prototype.animateSlide = function (b, c) {
      var d = {},
        e = this;
      e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1
          ? e.options.vertical === !1
            ? e.$slideTrack.animate(
                { left: b },
                e.options.speed,
                e.options.easing,
                c
              )
            : e.$slideTrack.animate(
                { top: b },
                e.options.speed,
                e.options.easing,
                c
              )
          : e.cssTransitions === !1
          ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
            a({ animStart: e.currentLeft }).animate(
              { animStart: b },
              {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function (a) {
                  (a = Math.ceil(a)),
                    e.options.vertical === !1
                      ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                        e.$slideTrack.css(d))
                      : ((d[e.animType] = "translate(0px," + a + "px)"),
                        e.$slideTrack.css(d));
                },
                complete: function () {
                  c && c.call();
                },
              }
            ))
          : (e.applyTransition(),
            (b = Math.ceil(b)),
            e.options.vertical === !1
              ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
              : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
            e.$slideTrack.css(d),
            c &&
              setTimeout(function () {
                e.disableTransition(), c.call();
              }, e.options.speed));
    }),
    (b.prototype.getNavTarget = function () {
      var b = this,
        c = b.options.asNavFor;
      return c && null !== c && (c = a(c).not(b.$slider)), c;
    }),
    (b.prototype.asNavFor = function (b) {
      var c = this,
        d = c.getNavTarget();
      null !== d &&
        "object" == typeof d &&
        d.each(function () {
          var c = a(this).slick("getSlick");
          c.unslicked || c.slideHandler(b, !0);
        });
    }),
    (b.prototype.applyTransition = function (a) {
      var b = this,
        c = {};
      b.options.fade === !1
        ? (c[b.transitionType] =
            b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
        : (c[b.transitionType] =
            "opacity " + b.options.speed + "ms " + b.options.cssEase),
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.autoPlay = function () {
      var a = this;
      a.autoPlayClear(),
        a.slideCount > a.options.slidesToShow &&
          (a.autoPlayTimer = setInterval(
            a.autoPlayIterator,
            a.options.autoplaySpeed
          ));
    }),
    (b.prototype.autoPlayClear = function () {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }),
    (b.prototype.autoPlayIterator = function () {
      var a = this,
        b = a.currentSlide + a.options.slidesToScroll;
      a.paused ||
        a.interrupted ||
        a.focussed ||
        (a.options.infinite === !1 &&
          (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
            ? (a.direction = 0)
            : 0 === a.direction &&
              ((b = a.currentSlide - a.options.slidesToScroll),
              a.currentSlide - 1 === 0 && (a.direction = 1))),
        a.slideHandler(b));
    }),
    (b.prototype.buildArrows = function () {
      var b = this;
      b.options.arrows === !0 &&
        ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
        (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
        b.slideCount > b.options.slidesToShow
          ? (b.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.htmlExpr.test(b.options.prevArrow) &&
              b.$prevArrow.prependTo(b.options.appendArrows),
            b.htmlExpr.test(b.options.nextArrow) &&
              b.$nextArrow.appendTo(b.options.appendArrows),
            b.options.infinite !== !0 &&
              b.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : b.$prevArrow
              .add(b.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (b.prototype.buildDots = function () {
      var c,
        d,
        b = this;
      if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
        for (
          b.$slider.addClass("slick-dotted"),
            d = a("<ul />").addClass(b.options.dotsClass),
            c = 0;
          c <= b.getDotCount();
          c += 1
        )
          d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
        (b.$dots = d.appendTo(b.options.appendDots)),
          b.$dots
            .find("li")
            .first()
            .addClass("slick-active")
            .attr("aria-hidden", "false");
      }
    }),
    (b.prototype.buildOut = function () {
      var b = this;
      (b.$slides = b.$slider
        .children(b.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.$slides.each(function (b, c) {
          a(c)
            .attr("data-slick-index", b)
            .data("originalStyling", a(c).attr("style") || "");
        }),
        b.$slider.addClass("slick-slider"),
        (b.$slideTrack =
          0 === b.slideCount
            ? a('<div class="slick-track"/>').appendTo(b.$slider)
            : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (b.$list = b.$slideTrack
          .wrap('<div aria-live="polite" class="slick-list"/>')
          .parent()),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) &&
          (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0
        ),
        b.options.draggable === !0 && b.$list.addClass("draggable");
    }),
    (b.prototype.buildRows = function () {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;
      if (
        ((e = document.createDocumentFragment()),
        (g = a.$slider.children()),
        a.options.rows > 1)
      ) {
        for (
          h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0;
          f > b;
          b++
        ) {
          var i = document.createElement("div");
          for (c = 0; c < a.options.rows; c++) {
            var j = document.createElement("div");
            for (d = 0; d < a.options.slidesPerRow; d++) {
              var k = b * h + (c * a.options.slidesPerRow + d);
              g.get(k) && j.appendChild(g.get(k));
            }
            i.appendChild(j);
          }
          e.appendChild(i);
        }
        a.$slider.empty().append(e),
          a.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (b.prototype.checkResponsive = function (b, c) {
      var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();
      if (
        ("window" === d.respondTo
          ? (g = j)
          : "slider" === d.respondTo
          ? (g = i)
          : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive &&
          d.options.responsive.length &&
          null !== d.options.responsive)
      ) {
        f = null;
        for (e in d.breakpoints)
          d.breakpoints.hasOwnProperty(e) &&
            (d.originalSettings.mobileFirst === !1
              ? g < d.breakpoints[e] && (f = d.breakpoints[e])
              : g > d.breakpoints[e] && (f = d.breakpoints[e]));
        null !== f
          ? null !== d.activeBreakpoint
            ? (f !== d.activeBreakpoint || c) &&
              ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f]
                  )),
                  b === !0 && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
            : ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f]
                  )),
                  b === !0 && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
          : null !== d.activeBreakpoint &&
            ((d.activeBreakpoint = null),
            (d.options = d.originalSettings),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            (h = f)),
          b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
      }
    }),
    (b.prototype.changeSlide = function (b, c) {
      var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);
      switch (
        (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        (h = d.slideCount % d.options.slidesToScroll !== 0),
        (f = h
          ? 0
          : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
        b.data.message)
      ) {
        case "previous":
          (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide - g, !1, c);
          break;
        case "next":
          (g = 0 === f ? d.options.slidesToScroll : f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide + g, !1, c);
          break;
        case "index":
          var i =
            0 === b.data.index
              ? 0
              : b.data.index || e.index() * d.options.slidesToScroll;
          d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (b.prototype.checkNavigable = function (a) {
      var c,
        d,
        b = this;
      if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
        a = c[c.length - 1];
      else
        for (var e in c) {
          if (a < c[e]) {
            a = d;
            break;
          }
          d = c[e];
        }
      return a;
    }),
    (b.prototype.cleanUpEvents = function () {
      var b = this;
      b.options.dots &&
        null !== b.$dots &&
        a("li", b.$dots)
          .off("click.slick", b.changeSlide)
          .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
          .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
        b.$slider.off("focus.slick blur.slick"),
        b.options.arrows === !0 &&
          b.slideCount > b.options.slidesToShow &&
          (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
          b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.cleanUpSlideEvents(),
        b.options.accessibility === !0 &&
          b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off(
          "orientationchange.slick.slick-" + b.instanceUid,
          b.orientationChange
        ),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off(
          "dragstart",
          b.preventDefault
        ),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.cleanUpSlideEvents = function () {
      var b = this;
      b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }),
    (b.prototype.cleanUpRows = function () {
      var b,
        a = this;
      a.options.rows > 1 &&
        ((b = a.$slides.children().children()),
        b.removeAttr("style"),
        a.$slider.empty().append(b));
    }),
    (b.prototype.clickHandler = function (a) {
      var b = this;
      b.shouldClick === !1 &&
        (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }),
    (b.prototype.destroy = function (b) {
      var c = this;
      c.autoPlayClear(),
        (c.touchObject = {}),
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow &&
          c.$prevArrow.length &&
          (c.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow &&
          c.$nextArrow.length &&
          (c.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides &&
          (c.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              a(this).attr("style", a(this).data("originalStyling"));
            }),
          c.$slideTrack.children(this.options.slide).detach(),
          c.$slideTrack.detach(),
          c.$list.detach(),
          c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.$slider.removeClass("slick-dotted"),
        (c.unslicked = !0),
        b || c.$slider.trigger("destroy", [c]);
    }),
    (b.prototype.disableTransition = function (a) {
      var b = this,
        c = {};
      (c[b.transitionType] = ""),
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.fadeSlide = function (a, b) {
      var c = this;
      c.cssTransitions === !1
        ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
          c.$slides
            .eq(a)
            .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
        : (c.applyTransition(a),
          c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
          b &&
            setTimeout(function () {
              c.disableTransition(a), b.call();
            }, c.options.speed));
    }),
    (b.prototype.fadeSlideOut = function (a) {
      var b = this;
      b.cssTransitions === !1
        ? b.$slides
            .eq(a)
            .animate(
              { opacity: 0, zIndex: b.options.zIndex - 2 },
              b.options.speed,
              b.options.easing
            )
        : (b.applyTransition(a),
          b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
    }),
    (b.prototype.filterSlides = b.prototype.slickFilter =
      function (a) {
        var b = this;
        null !== a &&
          ((b.$slidesCache = b.$slides),
          b.unload(),
          b.$slideTrack.children(this.options.slide).detach(),
          b.$slidesCache.filter(a).appendTo(b.$slideTrack),
          b.reinit());
      }),
    (b.prototype.focusHandler = function () {
      var b = this;
      b.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
          c.stopImmediatePropagation();
          var d = a(this);
          setTimeout(function () {
            b.options.pauseOnFocus &&
              ((b.focussed = d.is(":focus")), b.autoPlay());
          }, 0);
        });
    }),
    (b.prototype.getCurrent = b.prototype.slickCurrentSlide =
      function () {
        var a = this;
        return a.currentSlide;
      }),
    (b.prototype.getDotCount = function () {
      var a = this,
        b = 0,
        c = 0,
        d = 0;
      if (a.options.infinite === !0)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else if (a.options.centerMode === !0) d = a.slideCount;
      else if (a.options.asNavFor)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else
        d =
          1 +
          Math.ceil(
            (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
          );
      return d - 1;
    }),
    (b.prototype.getLeft = function (a) {
      var c,
        d,
        f,
        b = this,
        e = 0;
      return (
        (b.slideOffset = 0),
        (d = b.$slides.first().outerHeight(!0)),
        b.options.infinite === !0
          ? (b.slideCount > b.options.slidesToShow &&
              ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
              (e = d * b.options.slidesToShow * -1)),
            b.slideCount % b.options.slidesToScroll !== 0 &&
              a + b.options.slidesToScroll > b.slideCount &&
              b.slideCount > b.options.slidesToShow &&
              (a > b.slideCount
                ? ((b.slideOffset =
                    (b.options.slidesToShow - (a - b.slideCount)) *
                    b.slideWidth *
                    -1),
                  (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                : ((b.slideOffset =
                    (b.slideCount % b.options.slidesToScroll) *
                    b.slideWidth *
                    -1),
                  (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
          : a + b.options.slidesToShow > b.slideCount &&
            ((b.slideOffset =
              (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
            (e = (a + b.options.slidesToShow - b.slideCount) * d)),
        b.slideCount <= b.options.slidesToShow &&
          ((b.slideOffset = 0), (e = 0)),
        b.options.centerMode === !0 && b.options.infinite === !0
          ? (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
              b.slideWidth)
          : b.options.centerMode === !0 &&
            ((b.slideOffset = 0),
            (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
        (c =
          b.options.vertical === !1
            ? a * b.slideWidth * -1 + b.slideOffset
            : a * d * -1 + e),
        b.options.variableWidth === !0 &&
          ((f =
            b.slideCount <= b.options.slidesToShow || b.options.infinite === !1
              ? b.$slideTrack.children(".slick-slide").eq(a)
              : b.$slideTrack
                  .children(".slick-slide")
                  .eq(a + b.options.slidesToShow)),
          (c =
            b.options.rtl === !0
              ? f[0]
                ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                : 0
              : f[0]
              ? -1 * f[0].offsetLeft
              : 0),
          b.options.centerMode === !0 &&
            ((f =
              b.slideCount <= b.options.slidesToShow ||
              b.options.infinite === !1
                ? b.$slideTrack.children(".slick-slide").eq(a)
                : b.$slideTrack
                    .children(".slick-slide")
                    .eq(a + b.options.slidesToShow + 1)),
            (c =
              b.options.rtl === !0
                ? f[0]
                  ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                  : 0
                : f[0]
                ? -1 * f[0].offsetLeft
                : 0),
            (c += (b.$list.width() - f.outerWidth()) / 2))),
        c
      );
    }),
    (b.prototype.getOption = b.prototype.slickGetOption =
      function (a) {
        var b = this;
        return b.options[a];
      }),
    (b.prototype.getNavigableIndexes = function () {
      var e,
        a = this,
        b = 0,
        c = 0,
        d = [];
      for (
        a.options.infinite === !1
          ? (e = a.slideCount)
          : ((b = -1 * a.options.slidesToScroll),
            (c = -1 * a.options.slidesToScroll),
            (e = 2 * a.slideCount));
        e > b;

      )
        d.push(b),
          (b = c + a.options.slidesToScroll),
          (c +=
            a.options.slidesToScroll <= a.options.slidesToShow
              ? a.options.slidesToScroll
              : a.options.slidesToShow);
      return d;
    }),
    (b.prototype.getSlick = function () {
      return this;
    }),
    (b.prototype.getSlideCount = function () {
      var c,
        d,
        e,
        b = this;
      return (
        (e =
          b.options.centerMode === !0
            ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
            : 0),
        b.options.swipeToSlide === !0
          ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
              return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft
                ? ((d = f), !1)
                : void 0;
            }),
            (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
          : b.options.slidesToScroll
      );
    }),
    (b.prototype.goTo = b.prototype.slickGoTo =
      function (a, b) {
        var c = this;
        c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
      }),
    (b.prototype.init = function (b) {
      var c = this;
      a(c.$slider).hasClass("slick-initialized") ||
        (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots(),
        c.checkResponsive(!0),
        c.focusHandler()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA(),
        c.options.autoplay && ((c.paused = !1), c.autoPlay());
    }),
    (b.prototype.initADA = function () {
      var b = this;
      b.$slides
        .add(b.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
          a(this).attr({
            role: "option",
            "aria-describedby": "slick-slide" + b.instanceUid + c,
          });
        }),
        null !== b.$dots &&
          b.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (c) {
              a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c,
              });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar"),
        b.activateADA();
    }),
    (b.prototype.initArrowEvents = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, a.changeSlide),
        a.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, a.changeSlide));
    }),
    (b.prototype.initDotEvents = function () {
      var b = this;
      b.options.dots === !0 &&
        b.slideCount > b.options.slidesToShow &&
        a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
        b.options.dots === !0 &&
          b.options.pauseOnDotsHover === !0 &&
          a("li", b.$dots)
            .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
            .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }),
    (b.prototype.initSlideEvents = function () {
      var b = this;
      b.options.pauseOnHover &&
        (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }),
    (b.prototype.initializeEvents = function () {
      var b = this;
      b.initArrowEvents(),
        b.initDotEvents(),
        b.initSlideEvents(),
        b.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          b.swipeHandler
        ),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.options.accessibility === !0 &&
          b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on(
          "orientationchange.slick.slick-" + b.instanceUid,
          a.proxy(b.orientationChange, b)
        ),
        a(window).on(
          "resize.slick.slick-" + b.instanceUid,
          a.proxy(b.resize, b)
        ),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.initUI = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.show(), a.$nextArrow.show()),
        a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.show();
    }),
    (b.prototype.keyHandler = function (a) {
      var b = this;
      a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === a.keyCode && b.options.accessibility === !0
          ? b.changeSlide({
              data: { message: b.options.rtl === !0 ? "next" : "previous" },
            })
          : 39 === a.keyCode &&
            b.options.accessibility === !0 &&
            b.changeSlide({
              data: { message: b.options.rtl === !0 ? "previous" : "next" },
            }));
    }),
    (b.prototype.lazyLoad = function () {
      function g(c) {
        a("img[data-lazy]", c).each(function () {
          var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");
          (e.onload = function () {
            c.animate({ opacity: 0 }, 100, function () {
              c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                c.removeAttr("data-lazy").removeClass("slick-loading");
              }),
                b.$slider.trigger("lazyLoaded", [b, c, d]);
            });
          }),
            (e.onerror = function () {
              c
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                b.$slider.trigger("lazyLoadError", [b, c, d]);
            }),
            (e.src = d);
        });
      }
      var c,
        d,
        e,
        f,
        b = this;
      b.options.centerMode === !0
        ? b.options.infinite === !0
          ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
            (f = e + b.options.slidesToShow + 2))
          : ((e = Math.max(
              0,
              b.currentSlide - (b.options.slidesToShow / 2 + 1)
            )),
            (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
        : ((e = b.options.infinite
            ? b.options.slidesToShow + b.currentSlide
            : b.currentSlide),
          (f = Math.ceil(e + b.options.slidesToShow)),
          b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
        (c = b.$slider.find(".slick-slide").slice(e, f)),
        g(c),
        b.slideCount <= b.options.slidesToShow
          ? ((d = b.$slider.find(".slick-slide")), g(d))
          : b.currentSlide >= b.slideCount - b.options.slidesToShow
          ? ((d = b.$slider
              .find(".slick-cloned")
              .slice(0, b.options.slidesToShow)),
            g(d))
          : 0 === b.currentSlide &&
            ((d = b.$slider
              .find(".slick-cloned")
              .slice(-1 * b.options.slidesToShow)),
            g(d));
    }),
    (b.prototype.loadSlider = function () {
      var a = this;
      a.setPosition(),
        a.$slideTrack.css({ opacity: 1 }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }),
    (b.prototype.next = b.prototype.slickNext =
      function () {
        var a = this;
        a.changeSlide({ data: { message: "next" } });
      }),
    (b.prototype.orientationChange = function () {
      var a = this;
      a.checkResponsive(), a.setPosition();
    }),
    (b.prototype.pause = b.prototype.slickPause =
      function () {
        var a = this;
        a.autoPlayClear(), (a.paused = !0);
      }),
    (b.prototype.play = b.prototype.slickPlay =
      function () {
        var a = this;
        a.autoPlay(),
          (a.options.autoplay = !0),
          (a.paused = !1),
          (a.focussed = !1),
          (a.interrupted = !1);
      }),
    (b.prototype.postSlide = function (a) {
      var b = this;
      b.unslicked ||
        (b.$slider.trigger("afterChange", [b, a]),
        (b.animating = !1),
        b.setPosition(),
        (b.swipeLeft = null),
        b.options.autoplay && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA());
    }),
    (b.prototype.prev = b.prototype.slickPrev =
      function () {
        var a = this;
        a.changeSlide({ data: { message: "previous" } });
      }),
    (b.prototype.preventDefault = function (a) {
      a.preventDefault();
    }),
    (b.prototype.progressiveLazyLoad = function (b) {
      b = b || 1;
      var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);
      d.length
        ? ((e = d.first()),
          (f = e.attr("data-lazy")),
          (g = document.createElement("img")),
          (g.onload = function () {
            e
              .attr("src", f)
              .removeAttr("data-lazy")
              .removeClass("slick-loading"),
              c.options.adaptiveHeight === !0 && c.setPosition(),
              c.$slider.trigger("lazyLoaded", [c, e, f]),
              c.progressiveLazyLoad();
          }),
          (g.onerror = function () {
            3 > b
              ? setTimeout(function () {
                  c.progressiveLazyLoad(b + 1);
                }, 500)
              : (e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                c.$slider.trigger("lazyLoadError", [c, e, f]),
                c.progressiveLazyLoad());
          }),
          (g.src = f))
        : c.$slider.trigger("allImagesLoaded", [c]);
    }),
    (b.prototype.refresh = function (b) {
      var d,
        e,
        c = this;
      (e = c.slideCount - c.options.slidesToShow),
        !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
        c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
        (d = c.currentSlide),
        c.destroy(!0),
        a.extend(c, c.initials, { currentSlide: d }),
        c.init(),
        b || c.changeSlide({ data: { message: "index", index: d } }, !1);
    }),
    (b.prototype.registerBreakpoints = function () {
      var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;
      if ("array" === a.type(f) && f.length) {
        b.respondTo = b.options.respondTo || "window";
        for (c in f)
          if (
            ((e = b.breakpoints.length - 1),
            (d = f[c].breakpoint),
            f.hasOwnProperty(c))
          ) {
            for (; e >= 0; )
              b.breakpoints[e] &&
                b.breakpoints[e] === d &&
                b.breakpoints.splice(e, 1),
                e--;
            b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
          }
        b.breakpoints.sort(function (a, c) {
          return b.options.mobileFirst ? a - c : c - a;
        });
      }
    }),
    (b.prototype.reinit = function () {
      var b = this;
      (b.$slides = b.$slideTrack
        .children(b.options.slide)
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.currentSlide >= b.slideCount &&
          0 !== b.currentSlide &&
          (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.cleanUpSlideEvents(),
        b.initSlideEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0
        ),
        b.setPosition(),
        b.focusHandler(),
        (b.paused = !b.options.autoplay),
        b.autoPlay(),
        b.$slider.trigger("reInit", [b]);
    }),
    (b.prototype.resize = function () {
      var b = this;
      a(window).width() !== b.windowWidth &&
        (clearTimeout(b.windowDelay),
        (b.windowDelay = window.setTimeout(function () {
          (b.windowWidth = a(window).width()),
            b.checkResponsive(),
            b.unslicked || b.setPosition();
        }, 50)));
    }),
    (b.prototype.removeSlide = b.prototype.slickRemove =
      function (a, b, c) {
        var d = this;
        return (
          "boolean" == typeof a
            ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1))
            : (a = b === !0 ? --a : a),
          d.slideCount < 1 || 0 > a || a > d.slideCount - 1
            ? !1
            : (d.unload(),
              c === !0
                ? d.$slideTrack.children().remove()
                : d.$slideTrack.children(this.options.slide).eq(a).remove(),
              (d.$slides = d.$slideTrack.children(this.options.slide)),
              d.$slideTrack.children(this.options.slide).detach(),
              d.$slideTrack.append(d.$slides),
              (d.$slidesCache = d.$slides),
              void d.reinit())
        );
      }),
    (b.prototype.setCSS = function (a) {
      var d,
        e,
        b = this,
        c = {};
      b.options.rtl === !0 && (a = -a),
        (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (c[b.positionProp] = a),
        b.transformsEnabled === !1
          ? b.$slideTrack.css(c)
          : ((c = {}),
            b.cssTransitions === !1
              ? ((c[b.animType] = "translate(" + d + ", " + e + ")"),
                b.$slideTrack.css(c))
              : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"),
                b.$slideTrack.css(c)));
    }),
    (b.prototype.setDimensions = function () {
      var a = this;
      a.options.vertical === !1
        ? a.options.centerMode === !0 &&
          a.$list.css({ padding: "0px " + a.options.centerPadding })
        : (a.$list.height(
            a.$slides.first().outerHeight(!0) * a.options.slidesToShow
          ),
          a.options.centerMode === !0 &&
            a.$list.css({ padding: a.options.centerPadding + " 0px" })),
        (a.listWidth = a.$list.width()),
        (a.listHeight = a.$list.height()),
        a.options.vertical === !1 && a.options.variableWidth === !1
          ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
            a.$slideTrack.width(
              Math.ceil(
                a.slideWidth * a.$slideTrack.children(".slick-slide").length
              )
            ))
          : a.options.variableWidth === !0
          ? a.$slideTrack.width(5e3 * a.slideCount)
          : ((a.slideWidth = Math.ceil(a.listWidth)),
            a.$slideTrack.height(
              Math.ceil(
                a.$slides.first().outerHeight(!0) *
                  a.$slideTrack.children(".slick-slide").length
              )
            ));
      var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
      a.options.variableWidth === !1 &&
        a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }),
    (b.prototype.setFade = function () {
      var c,
        b = this;
      b.$slides.each(function (d, e) {
        (c = b.slideWidth * d * -1),
          b.options.rtl === !0
            ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              })
            : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              });
      }),
        b.$slides
          .eq(b.currentSlide)
          .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
    }),
    (b.prototype.setHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        a.options.adaptiveHeight === !0 &&
        a.options.vertical === !1
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.css("height", b);
      }
    }),
    (b.prototype.setOption = b.prototype.slickSetOption =
      function () {
        var c,
          d,
          e,
          f,
          h,
          b = this,
          g = !1;
        if (
          ("object" === a.type(arguments[0])
            ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
            : "string" === a.type(arguments[0]) &&
              ((e = arguments[0]),
              (f = arguments[1]),
              (g = arguments[2]),
              "responsive" === arguments[0] && "array" === a.type(arguments[1])
                ? (h = "responsive")
                : "undefined" != typeof arguments[1] && (h = "single")),
          "single" === h)
        )
          b.options[e] = f;
        else if ("multiple" === h)
          a.each(e, function (a, c) {
            b.options[a] = c;
          });
        else if ("responsive" === h)
          for (d in f)
            if ("array" !== a.type(b.options.responsive))
              b.options.responsive = [f[d]];
            else {
              for (c = b.options.responsive.length - 1; c >= 0; )
                b.options.responsive[c].breakpoint === f[d].breakpoint &&
                  b.options.responsive.splice(c, 1),
                  c--;
              b.options.responsive.push(f[d]);
            }
        g && (b.unload(), b.reinit());
      }),
    (b.prototype.setPosition = function () {
      var a = this;
      a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1
          ? a.setCSS(a.getLeft(a.currentSlide))
          : a.setFade(),
        a.$slider.trigger("setPosition", [a]);
    }),
    (b.prototype.setProps = function () {
      var a = this,
        b = document.body.style;
      (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
        "top" === a.positionProp
          ? a.$slider.addClass("slick-vertical")
          : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition ||
          void 0 !== b.MozTransition ||
          void 0 !== b.msTransition) &&
          a.options.useCSS === !0 &&
          (a.cssTransitions = !0),
        a.options.fade &&
          ("number" == typeof a.options.zIndex
            ? a.options.zIndex < 3 && (a.options.zIndex = 3)
            : (a.options.zIndex = a.defaults.zIndex)),
        void 0 !== b.OTransform &&
          ((a.animType = "OTransform"),
          (a.transformType = "-o-transform"),
          (a.transitionType = "OTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.MozTransform &&
          ((a.animType = "MozTransform"),
          (a.transformType = "-moz-transform"),
          (a.transitionType = "MozTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.MozPerspective &&
            (a.animType = !1)),
        void 0 !== b.webkitTransform &&
          ((a.animType = "webkitTransform"),
          (a.transformType = "-webkit-transform"),
          (a.transitionType = "webkitTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.msTransform &&
          ((a.animType = "msTransform"),
          (a.transformType = "-ms-transform"),
          (a.transitionType = "msTransition"),
          void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform &&
          a.animType !== !1 &&
          ((a.animType = "transform"),
          (a.transformType = "transform"),
          (a.transitionType = "transition")),
        (a.transformsEnabled =
          a.options.useTransform && null !== a.animType && a.animType !== !1);
    }),
    (b.prototype.setSlideClasses = function (a) {
      var c,
        d,
        e,
        f,
        b = this;
      (d = b.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
        b.$slides.eq(a).addClass("slick-current"),
        b.options.centerMode === !0
          ? ((c = Math.floor(b.options.slidesToShow / 2)),
            b.options.infinite === !0 &&
              (a >= c && a <= b.slideCount - 1 - c
                ? b.$slides
                    .slice(a - c, a + c + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((e = b.options.slidesToShow + a),
                  d
                    .slice(e - c + 1, e + c + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === a
                ? d
                    .eq(d.length - 1 - b.options.slidesToShow)
                    .addClass("slick-center")
                : a === b.slideCount - 1 &&
                  d.eq(b.options.slidesToShow).addClass("slick-center")),
            b.$slides.eq(a).addClass("slick-center"))
          : a >= 0 && a <= b.slideCount - b.options.slidesToShow
          ? b.$slides
              .slice(a, a + b.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : d.length <= b.options.slidesToShow
          ? d.addClass("slick-active").attr("aria-hidden", "false")
          : ((f = b.slideCount % b.options.slidesToShow),
            (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a),
            b.options.slidesToShow == b.options.slidesToScroll &&
            b.slideCount - a < b.options.slidesToShow
              ? d
                  .slice(e - (b.options.slidesToShow - f), e + f)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : d
                  .slice(e, e + b.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }),
    (b.prototype.setupInfinite = function () {
      var c,
        d,
        e,
        b = this;
      if (
        (b.options.fade === !0 && (b.options.centerMode = !1),
        b.options.infinite === !0 &&
          b.options.fade === !1 &&
          ((d = null), b.slideCount > b.options.slidesToShow))
      ) {
        for (
          e =
            b.options.centerMode === !0
              ? b.options.slidesToShow + 1
              : b.options.slidesToShow,
            c = b.slideCount;
          c > b.slideCount - e;
          c -= 1
        )
          (d = c - 1),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d - b.slideCount)
              .prependTo(b.$slideTrack)
              .addClass("slick-cloned");
        for (c = 0; e > c; c += 1)
          (d = c),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d + b.slideCount)
              .appendTo(b.$slideTrack)
              .addClass("slick-cloned");
        b.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            a(this).attr("id", "");
          });
      }
    }),
    (b.prototype.interrupt = function (a) {
      var b = this;
      a || b.autoPlay(), (b.interrupted = a);
    }),
    (b.prototype.selectHandler = function (b) {
      var c = this,
        d = a(b.target).is(".slick-slide")
          ? a(b.target)
          : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
      return (
        e || (e = 0),
        c.slideCount <= c.options.slidesToShow
          ? (c.setSlideClasses(e), void c.asNavFor(e))
          : void c.slideHandler(e)
      );
    }),
    (b.prototype.slideHandler = function (a, b, c) {
      var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;
      return (
        (b = b || !1),
        (i.animating === !0 && i.options.waitForAnimate === !0) ||
        (i.options.fade === !0 && i.currentSlide === a) ||
        i.slideCount <= i.options.slidesToShow
          ? void 0
          : (b === !1 && i.asNavFor(a),
            (d = a),
            (h = i.getLeft(d)),
            (g = i.getLeft(i.currentSlide)),
            (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
            i.options.infinite === !1 &&
            i.options.centerMode === !1 &&
            (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
              ? void (
                  i.options.fade === !1 &&
                  ((d = i.currentSlide),
                  c !== !0
                    ? i.animateSlide(g, function () {
                        i.postSlide(d);
                      })
                    : i.postSlide(d))
                )
              : i.options.infinite === !1 &&
                i.options.centerMode === !0 &&
                (0 > a || a > i.slideCount - i.options.slidesToScroll)
              ? void (
                  i.options.fade === !1 &&
                  ((d = i.currentSlide),
                  c !== !0
                    ? i.animateSlide(g, function () {
                        i.postSlide(d);
                      })
                    : i.postSlide(d))
                )
              : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                (e =
                  0 > d
                    ? i.slideCount % i.options.slidesToScroll !== 0
                      ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                      : i.slideCount + d
                    : d >= i.slideCount
                    ? i.slideCount % i.options.slidesToScroll !== 0
                      ? 0
                      : d - i.slideCount
                    : d),
                (i.animating = !0),
                i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                (f = i.currentSlide),
                (i.currentSlide = e),
                i.setSlideClasses(i.currentSlide),
                i.options.asNavFor &&
                  ((j = i.getNavTarget()),
                  (j = j.slick("getSlick")),
                  j.slideCount <= j.options.slidesToShow &&
                    j.setSlideClasses(i.currentSlide)),
                i.updateDots(),
                i.updateArrows(),
                i.options.fade === !0
                  ? (c !== !0
                      ? (i.fadeSlideOut(f),
                        i.fadeSlide(e, function () {
                          i.postSlide(e);
                        }))
                      : i.postSlide(e),
                    void i.animateHeight())
                  : void (c !== !0
                      ? i.animateSlide(h, function () {
                          i.postSlide(e);
                        })
                      : i.postSlide(e))))
      );
    }),
    (b.prototype.startLoad = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.hide(), a.$nextArrow.hide()),
        a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.hide(),
        a.$slider.addClass("slick-loading");
    }),
    (b.prototype.swipeDirection = function () {
      var a,
        b,
        c,
        d,
        e = this;
      return (
        (a = e.touchObject.startX - e.touchObject.curX),
        (b = e.touchObject.startY - e.touchObject.curY),
        (c = Math.atan2(b, a)),
        (d = Math.round((180 * c) / Math.PI)),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0
          ? e.options.rtl === !1
            ? "left"
            : "right"
          : 360 >= d && d >= 315
          ? e.options.rtl === !1
            ? "left"
            : "right"
          : d >= 135 && 225 >= d
          ? e.options.rtl === !1
            ? "right"
            : "left"
          : e.options.verticalSwiping === !0
          ? d >= 35 && 135 >= d
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (b.prototype.swipeEnd = function (a) {
      var c,
        d,
        b = this;
      if (
        ((b.dragging = !1),
        (b.interrupted = !1),
        (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0),
        void 0 === b.touchObject.curX)
      )
        return !1;
      if (
        (b.touchObject.edgeHit === !0 &&
          b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe)
      ) {
        switch ((d = b.swipeDirection())) {
          case "left":
          case "down":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide + b.getSlideCount())
              : b.currentSlide + b.getSlideCount()),
              (b.currentDirection = 0);
            break;
          case "right":
          case "up":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide - b.getSlideCount())
              : b.currentSlide - b.getSlideCount()),
              (b.currentDirection = 1);
        }
        "vertical" != d &&
          (b.slideHandler(c),
          (b.touchObject = {}),
          b.$slider.trigger("swipe", [b, d]));
      } else
        b.touchObject.startX !== b.touchObject.curX &&
          (b.slideHandler(b.currentSlide), (b.touchObject = {}));
    }),
    (b.prototype.swipeHandler = function (a) {
      var b = this;
      if (
        !(
          b.options.swipe === !1 ||
          ("ontouchend" in document && b.options.swipe === !1) ||
          (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))
        )
      )
        switch (
          ((b.touchObject.fingerCount =
            a.originalEvent && void 0 !== a.originalEvent.touches
              ? a.originalEvent.touches.length
              : 1),
          (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
          b.options.verticalSwiping === !0 &&
            (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
          a.data.action)
        ) {
          case "start":
            b.swipeStart(a);
            break;
          case "move":
            b.swipeMove(a);
            break;
          case "end":
            b.swipeEnd(a);
        }
    }),
    (b.prototype.swipeMove = function (a) {
      var d,
        e,
        f,
        g,
        h,
        b = this;
      return (
        (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
        !b.dragging || (h && 1 !== h.length)
          ? !1
          : ((d = b.getLeft(b.currentSlide)),
            (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
            (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
            (b.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))
            )),
            b.options.verticalSwiping === !0 &&
              (b.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(b.touchObject.curY - b.touchObject.startY, 2)
                )
              )),
            (e = b.swipeDirection()),
            "vertical" !== e
              ? (void 0 !== a.originalEvent &&
                  b.touchObject.swipeLength > 4 &&
                  a.preventDefault(),
                (g =
                  (b.options.rtl === !1 ? 1 : -1) *
                  (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                b.options.verticalSwiping === !0 &&
                  (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                (f = b.touchObject.swipeLength),
                (b.touchObject.edgeHit = !1),
                b.options.infinite === !1 &&
                  ((0 === b.currentSlide && "right" === e) ||
                    (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                  ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                  (b.touchObject.edgeHit = !0)),
                b.options.vertical === !1
                  ? (b.swipeLeft = d + f * g)
                  : (b.swipeLeft =
                      d + f * (b.$list.height() / b.listWidth) * g),
                b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                b.options.fade === !0 || b.options.touchMove === !1
                  ? !1
                  : b.animating === !0
                  ? ((b.swipeLeft = null), !1)
                  : void b.setCSS(b.swipeLeft))
              : void 0)
      );
    }),
    (b.prototype.swipeStart = function (a) {
      var c,
        b = this;
      return (
        (b.interrupted = !0),
        1 !== b.touchObject.fingerCount ||
        b.slideCount <= b.options.slidesToShow
          ? ((b.touchObject = {}), !1)
          : (void 0 !== a.originalEvent &&
              void 0 !== a.originalEvent.touches &&
              (c = a.originalEvent.touches[0]),
            (b.touchObject.startX = b.touchObject.curX =
              void 0 !== c ? c.pageX : a.clientX),
            (b.touchObject.startY = b.touchObject.curY =
              void 0 !== c ? c.pageY : a.clientY),
            void (b.dragging = !0))
      );
    }),
    (b.prototype.unfilterSlides = b.prototype.slickUnfilter =
      function () {
        var a = this;
        null !== a.$slidesCache &&
          (a.unload(),
          a.$slideTrack.children(this.options.slide).detach(),
          a.$slidesCache.appendTo(a.$slideTrack),
          a.reinit());
      }),
    (b.prototype.unload = function () {
      var b = this;
      a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow &&
          b.htmlExpr.test(b.options.prevArrow) &&
          b.$prevArrow.remove(),
        b.$nextArrow &&
          b.htmlExpr.test(b.options.nextArrow) &&
          b.$nextArrow.remove(),
        b.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (b.prototype.unslick = function (a) {
      var b = this;
      b.$slider.trigger("unslick", [b, a]), b.destroy();
    }),
    (b.prototype.updateArrows = function () {
      var b,
        a = this;
      (b = Math.floor(a.options.slidesToShow / 2)),
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          !a.options.infinite &&
          (a.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          a.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === a.currentSlide
            ? (a.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
              a.options.centerMode === !1
            ? (a.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - 1 &&
              a.options.centerMode === !0 &&
              (a.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (b.prototype.updateDots = function () {
      var a = this;
      null !== a.$dots &&
        (a.$dots
          .find("li")
          .removeClass("slick-active")
          .attr("aria-hidden", "true"),
        a.$dots
          .find("li")
          .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
          .addClass("slick-active")
          .attr("aria-hidden", "false"));
    }),
    (b.prototype.visibility = function () {
      var a = this;
      a.options.autoplay &&
        (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
    }),
    (a.fn.slick = function () {
      var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;
      for (f = 0; e > f; f++)
        if (
          ("object" == typeof c || "undefined" == typeof c
            ? (a[f].slick = new b(a[f], c))
            : (g = a[f].slick[c].apply(a[f].slick, d)),
          "undefined" != typeof g)
        )
          return g;
      return a;
    });
});

// 3. Fullscreeneo v1.0.0
// MIT License
// Copyright (c) 2017 LA Watts
function sizeEverything() {
  (dimensions = coverDimensions(16, 9, window.innerWidth, window.innerHeight)),
    $el.css({
      position: "absolute",
      width: dimensions.width,
      "padding-top": dimensions.height,
      top: 0.5 * (window.innerHeight - dimensions.height),
      left: 0.5 * (window.innerWidth - dimensions.width),
      "max-width": "none",
    }),
    $wrap.css({
      position: "relative",
      overflow: "hidden",
      width: window.innerWidth,
      height: window.innerHeight,
    });
}
var $iframe = $("iframe[data-fullscreeneo]"),
  max = function (i, e) {
    return i > e ? i : e;
  },
  coverDimensions = function (i, e, n, o) {
    var t = max(n / i, o / e);
    return { width: Math.ceil(i * t), height: Math.ceil(e * t) };
  };
$iframe
  .css({ position: "absolute", top: 0, left: 0, height: "100%", width: "100%" })
  .wrap(
    '<div class="fullscreeneo-wrap"><div class="fullscreeneo-video-container"></div></div>'
  );
var $wrap = $(".fullscreeneo-wrap"),
  $el = $(".fullscreeneo-video-container");
sizeEverything(),
  window.addEventListener("resize", function () {
    console.log("Resize!"), sizeEverything();
  });

// 4. fullPage v2.9.4
/*!
 * fullPage 2.9.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!(function (e, n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], function (t) {
        return n(t, e, e.document, e.Math);
      })
    : "object" == typeof exports && exports
    ? (module.exports = n(require("jquery"), e, e.document, e.Math))
    : n(jQuery, e, e.document, e.Math);
})("undefined" != typeof window ? window : this, function (e, n, t, o, i) {
  "use strict";
  var a = "fullpage-wrapper",
    r = "." + a,
    l = "fp-scrollable",
    s = "." + l,
    c = "fp-responsive",
    d = "fp-notransition",
    f = "fp-destroyed",
    u = "fp-enabled",
    h = "fp-viewing",
    p = "active",
    v = "." + p,
    g = "fp-completely",
    m = "." + g,
    w = ".section",
    S = "fp-section",
    y = "." + S,
    b = y + v,
    x = y + ":first",
    C = y + ":last",
    T = "fp-tableCell",
    k = "." + T,
    I = "fp-auto-height",
    L = "fp-normal-scroll",
    E = "fp-nav",
    M = "#" + E,
    O = "fp-tooltip",
    A = "." + O,
    R = "fp-show-active",
    H = ".slide",
    B = "fp-slide",
    z = "." + B,
    D = z + v,
    P = "fp-slides",
    q = "." + P,
    F = "fp-slidesContainer",
    V = "." + F,
    W = "fp-table",
    U = "fp-slidesNav",
    Y = "." + U,
    j = Y + " a",
    N = "fp-controlArrow",
    X = "." + N,
    K = "fp-prev",
    Q = "." + K,
    G = N + " " + K,
    J = X + Q,
    Z = "fp-next",
    $ = "." + Z,
    _ = N + " " + Z,
    ee = X + $,
    ne = e(n),
    te = e(t),
    oe = {
      scrollbars: !0,
      mouseWheel: !0,
      hideScrollbars: !1,
      fadeScrollbars: !1,
      disableMouse: !0,
      interactiveScrollbars: !0,
    };
  (e.fn.fullpage = function (l) {
    function s(n, t) {
      n || nt(0), rt("autoScrolling", n, t);
      var o = e(b);
      l.autoScrolling && !l.scrollBar
        ? (ct.css({ overflow: "hidden", height: "100%" }),
          N(Bt.recordHistory, "internal"),
          St.css({ "-ms-touch-action": "none", "touch-action": "none" }),
          o.length && nt(o.position().top))
        : (ct.css({ overflow: "visible", height: "initial" }),
          N(!1, "internal"),
          St.css({ "-ms-touch-action": "", "touch-action": "" }),
          o.length && ct.scrollTop(o.position().top));
    }
    function N(e, n) {
      rt("recordHistory", e, n);
    }
    function Q(e, n) {
      rt("scrollingSpeed", e, n);
    }
    function Z(e, n) {
      rt("fitToSection", e, n);
    }
    function $(e) {
      l.lockAnchors = e;
    }
    function ae(e) {
      e ? (Kn(), Qn()) : (Xn(), Gn());
    }
    function re(n, t) {
      "undefined" != typeof t
        ? ((t = t.replace(/ /g, "").split(",")),
          e.each(t, function (e, t) {
            ot(n, t, "m");
          }))
        : n
        ? (ae(!0), Jn())
        : (ae(!1), Zn());
    }
    function le(n, t) {
      "undefined" != typeof t
        ? ((t = t.replace(/ /g, "").split(",")),
          e.each(t, function (e, t) {
            ot(n, t, "k");
          }))
        : (l.keyboardScrolling = n);
    }
    function se() {
      var n = e(b).prev(y);
      n.length || (!l.loopTop && !l.continuousVertical) || (n = e(y).last()),
        n.length && Ke(n, null, !0);
    }
    function ce() {
      var n = e(b).next(y);
      n.length ||
        (!l.loopBottom && !l.continuousVertical) ||
        (n = e(y).first()),
        n.length && Ke(n, null, !1);
    }
    function de(e, n) {
      Q(0, "internal"), fe(e, n), Q(Bt.scrollingSpeed, "internal");
    }
    function fe(e, n) {
      var t = Dn(e);
      "undefined" != typeof n ? qn(e, n) : t.length > 0 && Ke(t);
    }
    function ue(e) {
      je("right", e);
    }
    function he(e) {
      je("left", e);
    }
    function pe(n) {
      if (!St.hasClass(f)) {
        (bt = !0),
          (yt = ne.height()),
          e(y).each(function () {
            var n = e(this).find(q),
              t = e(this).find(z);
            l.verticalCentered &&
              e(this)
                .find(k)
                .css("height", Bn(e(this)) + "px"),
              e(this).css("height", yt + "px"),
              l.scrollOverflow &&
                (t.length
                  ? t.each(function () {
                      Rn(e(this));
                    })
                  : Rn(e(this))),
              t.length > 1 && Sn(n, n.find(D));
          });
        var t = e(b),
          o = t.index(y);
        o && de(o + 1),
          (bt = !1),
          e.isFunction(l.afterResize) && n && l.afterResize.call(St),
          e.isFunction(l.afterReBuild) && !n && l.afterReBuild.call(St);
      }
    }
    function ve(n) {
      var t = dt.hasClass(c);
      n
        ? t ||
          (s(!1, "internal"),
          Z(!1, "internal"),
          e(M).hide(),
          dt.addClass(c),
          e.isFunction(l.afterResponsive) && l.afterResponsive.call(St, n))
        : t &&
          (s(Bt.autoScrolling, "internal"),
          Z(Bt.autoScrolling, "internal"),
          e(M).show(),
          dt.removeClass(c),
          e.isFunction(l.afterResponsive) && l.afterResponsive.call(St, n));
    }
    function ge() {
      l.css3 && (l.css3 = Nn()),
        (l.scrollBar = l.scrollBar || l.hybrid),
        we(),
        Se(),
        re(!0),
        s(l.autoScrolling, "internal"),
        Tn(),
        jn(),
        "complete" === t.readyState && rn(),
        ne.on("load", rn);
    }
    function me() {
      ne.on("scroll", Re).on("hashchange", ln).blur(pn).resize(Cn),
        te
          .keydown(sn)
          .keyup(dn)
          .on("click touchstart", M + " a", vn)
          .on("click touchstart", j, gn)
          .on("click", A, cn),
        e(y).on("click touchstart", X, hn),
        l.normalScrollElements &&
          (te.on("mouseenter", l.normalScrollElements, function () {
            ae(!1);
          }),
          te.on("mouseleave", l.normalScrollElements, function () {
            ae(!0);
          }));
    }
    function we() {
      var n = St.find(l.sectionSelector);
      l.anchors.length ||
        (l.anchors = n
          .filter("[data-anchor]")
          .map(function () {
            return e(this).data("anchor").toString();
          })
          .get()),
        l.navigationTooltips.length ||
          (l.navigationTooltips = n
            .filter("[data-tooltip]")
            .map(function () {
              return e(this).data("tooltip").toString();
            })
            .get());
    }
    function Se() {
      St.css({ height: "100%", position: "relative" }),
        St.addClass(a),
        e("html").addClass(u),
        (yt = ne.height()),
        St.removeClass(f),
        Ce(),
        e(y).each(function (n) {
          var t = e(this),
            o = t.find(z),
            i = o.length;
          be(t, n), xe(t, n), i > 0 ? ye(t, o, i) : l.verticalCentered && Hn(t);
        }),
        l.fixedElements && l.css3 && e(l.fixedElements).appendTo(dt),
        l.navigation && ke(),
        Le(),
        l.scrollOverflow
          ? ("complete" === t.readyState && Ie(), ne.on("load", Ie))
          : Oe();
    }
    function ye(n, t, o) {
      var i = 100 * o,
        a = 100 / o;
      t.wrapAll('<div class="' + F + '" />'),
        t.parent().wrap('<div class="' + P + '" />'),
        n.find(V).css("width", i + "%"),
        o > 1 && (l.controlArrows && Te(n), l.slidesNavigation && Vn(n, o)),
        t.each(function (n) {
          e(this).css("width", a + "%"), l.verticalCentered && Hn(e(this));
        });
      var r = n.find(D);
      r.length &&
      (0 !== e(b).index(y) || (0 === e(b).index(y) && 0 !== r.index()))
        ? et(r, "internal")
        : t.eq(0).addClass(p);
    }
    function be(n, t) {
      t || 0 !== e(b).length || n.addClass(p),
        (vt = e(b)),
        n.css("height", yt + "px"),
        l.paddingTop && n.css("padding-top", l.paddingTop),
        l.paddingBottom && n.css("padding-bottom", l.paddingBottom),
        "undefined" != typeof l.sectionsColor[t] &&
          n.css("background-color", l.sectionsColor[t]),
        "undefined" != typeof l.anchors[t] &&
          n.attr("data-anchor", l.anchors[t]);
    }
    function xe(n, t) {
      "undefined" != typeof l.anchors[t] &&
        n.hasClass(p) &&
        Mn(l.anchors[t], t),
        l.menu &&
          l.css3 &&
          e(l.menu).closest(r).length &&
          e(l.menu).appendTo(dt);
    }
    function Ce() {
      St.find(l.sectionSelector).addClass(S),
        St.find(l.slideSelector).addClass(B);
    }
    function Te(e) {
      e
        .find(q)
        .after('<div class="' + G + '"></div><div class="' + _ + '"></div>'),
        "#fff" != l.controlArrowColor &&
          (e
            .find(ee)
            .css(
              "border-color",
              "transparent transparent transparent " + l.controlArrowColor
            ),
          e
            .find(J)
            .css(
              "border-color",
              "transparent " + l.controlArrowColor + " transparent transparent"
            )),
        l.loopHorizontal || e.find(J).hide();
    }
    function ke() {
      dt.append('<div id="' + E + '"><ul></ul></div>');
      var n = e(M);
      n.addClass(function () {
        return l.showActiveTooltip
          ? R + " " + l.navigationPosition
          : l.navigationPosition;
      });
      for (var t = 0; t < e(y).length; t++) {
        var o = "";
        l.anchors.length && (o = l.anchors[t]);
        var i = '<li><a href="#' + o + '"><span></span></a>',
          a = l.navigationTooltips[t];
        "undefined" != typeof a &&
          "" !== a &&
          (i +=
            '<div class="' +
            O +
            " " +
            l.navigationPosition +
            '">' +
            a +
            "</div>"),
          (i += "</li>"),
          n.find("ul").append(i);
      }
      e(M).css("margin-top", "-" + e(M).height() / 2 + "px"),
        e(M).find("li").eq(e(b).index(y)).find("a").addClass(p);
    }
    function Ie() {
      e(y).each(function () {
        var n = e(this).find(z);
        n.length
          ? n.each(function () {
              Rn(e(this));
            })
          : Rn(e(this));
      }),
        Oe();
    }
    function Le() {
      St.find('iframe[src*="youtube.com/embed/"]').each(function () {
        Ee(e(this), "enablejsapi=1");
      });
    }
    function Ee(e, n) {
      var t = e.attr("src");
      e.attr("src", t + Me(t) + n);
    }
    function Me(e) {
      return /\?/.test(e) ? "&" : "?";
    }
    function Oe() {
      var n = e(b);
      n.addClass(g),
        l.scrollOverflowHandler.afterRender &&
          l.scrollOverflowHandler.afterRender(n),
        en(n),
        nn(n),
        l.scrollOverflowHandler.afterLoad(),
        Ae() &&
          e.isFunction(l.afterLoad) &&
          l.afterLoad.call(n, n.data("anchor"), n.index(y) + 1),
        e.isFunction(l.afterRender) && l.afterRender.call(St);
    }
    function Ae() {
      var e = n.location.hash.replace("#", "").split("/"),
        t = Dn(decodeURIComponent(e[0]));
      return !t.length || (t.length && t.index() === vt.index());
    }
    function Re() {
      var n;
      if (!l.autoScrolling || l.scrollBar) {
        var o = ne.scrollTop(),
          i = ze(o),
          a = 0,
          r = o + ne.height() / 2,
          s = dt.height() - ne.height() === o,
          c = t.querySelectorAll(y);
        if (s) a = c.length - 1;
        else if (o)
          for (var d = 0; d < c.length; ++d) {
            var f = c[d];
            f.offsetTop <= r && (a = d);
          }
        else a = 0;
        if (
          (Be(i) &&
            (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)),
          (n = e(c).eq(a)),
          !n.hasClass(p))
        ) {
          zt = !0;
          var u,
            h,
            v = e(b),
            m = v.index(y) + 1,
            w = On(n),
            S = n.data("anchor"),
            x = n.index(y) + 1,
            C = n.find(D);
          C.length && ((h = C.data("anchor")), (u = C.index())),
            Ct &&
              (n.addClass(p).siblings().removeClass(p),
              e.isFunction(l.onLeave) && l.onLeave.call(v, m, x, w),
              e.isFunction(l.afterLoad) && l.afterLoad.call(n, S, x),
              on(v),
              en(n),
              nn(n),
              Mn(S, x - 1),
              l.anchors.length && (ut = S),
              Wn(u, h, S, x)),
            clearTimeout(Mt),
            (Mt = setTimeout(function () {
              zt = !1;
            }, 100));
        }
        l.fitToSection &&
          (clearTimeout(Ot),
          (Ot = setTimeout(function () {
            l.fitToSection && He();
          }, l.fitToSectionDelay)));
      }
    }
    function He() {
      Ct && ((bt = !0), Ke(e(b)), (bt = !1));
    }
    function Be(n) {
      var t = e(b).position().top,
        o = t + ne.height();
      return "up" == n
        ? o >= ne.scrollTop() + ne.height()
        : t <= ne.scrollTop();
    }
    function ze(e) {
      var n = e > Dt ? "down" : "up";
      return (Dt = e), (Ut = e), n;
    }
    function De(e, n) {
      if (kt.m[e]) {
        var t = "down" === e ? "bottom" : "top",
          o = "down" === e ? ce : se;
        if (n.length > 0) {
          if (!l.scrollOverflowHandler.isScrolled(t, n)) return !0;
          o();
        } else o();
      }
    }
    function Pe(e) {
      var n = e.originalEvent;
      !Fe(e.target) && l.autoScrolling && Ve(n) && e.preventDefault();
    }
    function qe(n) {
      var t = n.originalEvent,
        i = e(t.target).closest(y);
      if (!Fe(n.target) && Ve(t)) {
        l.autoScrolling && n.preventDefault();
        var a = l.scrollOverflowHandler.scrollable(i),
          r = _n(t);
        (Ft = r.y),
          (Vt = r.x),
          i.find(q).length && o.abs(qt - Vt) > o.abs(Pt - Ft)
            ? !gt &&
              o.abs(qt - Vt) > (ne.outerWidth() / 100) * l.touchSensitivity &&
              (qt > Vt ? kt.m.right && ue(i) : kt.m.left && he(i))
            : l.autoScrolling &&
              Ct &&
              o.abs(Pt - Ft) > (ne.height() / 100) * l.touchSensitivity &&
              (Pt > Ft ? De("down", a) : Ft > Pt && De("up", a));
      }
    }
    function Fe(n, t) {
      t = t || 0;
      var o = e(n).parent();
      return t < l.normalScrollElementTouchThreshold &&
        o.is(l.normalScrollElements)
        ? !0
        : t == l.normalScrollElementTouchThreshold
        ? !1
        : Fe(o, ++t);
    }
    function Ve(e) {
      return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
    }
    function We(e) {
      var n = e.originalEvent;
      if ((l.fitToSection && ct.stop(), Ve(n))) {
        var t = _n(n);
        (Pt = t.y), (qt = t.x);
      }
    }
    function Ue(e, n) {
      for (
        var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0;
        a < i.length;
        a++
      )
        t += i[a];
      return o.ceil(t / n);
    }
    function Ye(t) {
      var i = new Date().getTime(),
        a = e(m).hasClass(L);
      if (l.autoScrolling && !pt && !a) {
        t = t || n.event;
        var r = t.wheelDelta || -t.deltaY || -t.detail,
          s = o.max(-1, o.min(1, r)),
          c =
            "undefined" != typeof t.wheelDeltaX ||
            "undefined" != typeof t.deltaX,
          d =
            o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) ||
            o.abs(t.deltaX) < o.abs(t.deltaY) ||
            !c;
        Tt.length > 149 && Tt.shift(),
          Tt.push(o.abs(r)),
          l.scrollBar &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
        var f = e(b),
          u = l.scrollOverflowHandler.scrollable(f),
          h = i - Wt;
        if (((Wt = i), h > 200 && (Tt = []), Ct)) {
          var p = Ue(Tt, 10),
            v = Ue(Tt, 70),
            g = p >= v;
          g && d && (0 > s ? De("down", u) : De("up", u));
        }
        return !1;
      }
      l.fitToSection && ct.stop();
    }
    function je(n, t) {
      var o = "undefined" == typeof t ? e(b) : t,
        i = o.find(q),
        a = i.find(z).length;
      if (!(!i.length || gt || 2 > a)) {
        var r = i.find(D),
          s = null;
        if (((s = "left" === n ? r.prev(z) : r.next(z)), !s.length)) {
          if (!l.loopHorizontal) return;
          s = "left" === n ? r.siblings(":last") : r.siblings(":first");
        }
        (gt = !0), Sn(i, s, n);
      }
    }
    function Ne() {
      e(D).each(function () {
        et(e(this), "internal");
      });
    }
    function Xe(e) {
      var n = e.position(),
        t = n.top,
        o = n.top > Ut,
        i = t - yt + e.outerHeight(),
        a = l.bigSectionsDestination;
      return (
        e.outerHeight() > yt
          ? ((!o && !a) || "bottom" === a) && (t = i)
          : (o || (bt && e.is(":last-child"))) && (t = i),
        (Ut = t),
        t
      );
    }
    function Ke(n, t, o) {
      if ("undefined" != typeof n) {
        var i,
          a,
          r = Xe(n),
          s = {
            element: n,
            callback: t,
            isMovementUp: o,
            dtop: r,
            yMovement: On(n),
            anchorLink: n.data("anchor"),
            sectionIndex: n.index(y),
            activeSlide: n.find(D),
            activeSection: e(b),
            leavingSection: e(b).index(y) + 1,
            localIsResizing: bt,
          };
        (s.activeSection.is(n) && !bt) ||
          (l.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(I)) ||
          (s.activeSlide.length &&
            ((i = s.activeSlide.data("anchor")), (a = s.activeSlide.index())),
          l.autoScrolling &&
            l.continuousVertical &&
            "undefined" != typeof s.isMovementUp &&
            ((!s.isMovementUp && "up" == s.yMovement) ||
              (s.isMovementUp && "down" == s.yMovement)) &&
            (s = Je(s)),
          (!e.isFunction(l.onLeave) ||
            s.localIsResizing ||
            l.onLeave.call(
              s.activeSection,
              s.leavingSection,
              s.sectionIndex + 1,
              s.yMovement
            ) !== !1) &&
            (s.localIsResizing || on(s.activeSection),
            l.scrollOverflowHandler.beforeLeave(),
            n.addClass(p).siblings().removeClass(p),
            en(n),
            l.scrollOverflowHandler.onLeave(),
            (Ct = !1),
            Wn(a, i, s.anchorLink, s.sectionIndex),
            Qe(s),
            (ut = s.anchorLink),
            Mn(s.anchorLink, s.sectionIndex)));
      }
    }
    function Qe(n) {
      if (l.css3 && l.autoScrolling && !l.scrollBar) {
        var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
        zn(t, !0),
          l.scrollingSpeed
            ? (clearTimeout(Lt),
              (Lt = setTimeout(function () {
                $e(n);
              }, l.scrollingSpeed)))
            : $e(n);
      } else {
        var i = Ge(n);
        e(i.element)
          .animate(i.options, l.scrollingSpeed, l.easing)
          .promise()
          .done(function () {
            l.scrollBar
              ? setTimeout(function () {
                  $e(n);
                }, 30)
              : $e(n);
          });
      }
    }
    function Ge(e) {
      var n = {};
      return (
        l.autoScrolling && !l.scrollBar
          ? ((n.options = { top: -e.dtop }), (n.element = r))
          : ((n.options = { scrollTop: e.dtop }), (n.element = "html, body")),
        n
      );
    }
    function Je(n) {
      return (
        n.isMovementUp
          ? e(b).before(n.activeSection.nextAll(y))
          : e(b).after(n.activeSection.prevAll(y).get().reverse()),
        nt(e(b).position().top),
        Ne(),
        (n.wrapAroundElements = n.activeSection),
        (n.dtop = n.element.position().top),
        (n.yMovement = On(n.element)),
        n
      );
    }
    function Ze(n) {
      n.wrapAroundElements &&
        n.wrapAroundElements.length &&
        (n.isMovementUp
          ? e(x).before(n.wrapAroundElements)
          : e(C).after(n.wrapAroundElements),
        nt(e(b).position().top),
        Ne());
    }
    function $e(n) {
      Ze(n),
        e.isFunction(l.afterLoad) &&
          !n.localIsResizing &&
          l.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
        l.scrollOverflowHandler.afterLoad(),
        n.localIsResizing || nn(n.element),
        n.element.addClass(g).siblings().removeClass(g),
        (Ct = !0),
        e.isFunction(n.callback) && n.callback.call(this);
    }
    function _e(e, n) {
      e.attr(n, e.data(n)).removeAttr("data-" + n);
    }
    function en(n) {
      if (l.lazyLoading) {
        var t,
          o = an(n);
        o.find(
          "img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]"
        ).each(function () {
          (t = e(this)),
            e.each(["src", "srcset"], function (e, n) {
              var o = t.attr("data-" + n);
              "undefined" != typeof o && o && _e(t, n);
            }),
            t.is("source") && t.closest("video").get(0).load();
        });
      }
    }
    function nn(n) {
      var t = an(n);
      t.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-autoplay") &&
          "function" == typeof n.play &&
          n.play();
      }),
        t.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          n.hasAttribute("data-autoplay") && tn(n),
            (n.onload = function () {
              n.hasAttribute("data-autoplay") && tn(n);
            });
        });
    }
    function tn(e) {
      e.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
    function on(n) {
      var t = an(n);
      t.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-keepplaying") ||
          "function" != typeof n.pause ||
          n.pause();
      }),
        t.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          /youtube\.com\/embed\//.test(e(this).attr("src")) &&
            !n.hasAttribute("data-keepplaying") &&
            e(this)
              .get(0)
              .contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
        });
    }
    function an(n) {
      var t = n.find(D);
      return t.length && (n = e(t)), n;
    }
    function rn() {
      var e = n.location.hash.replace("#", "").split("/"),
        t = decodeURIComponent(e[0]),
        o = decodeURIComponent(e[1]);
      t && (l.animateAnchor ? qn(t, o) : de(t, o));
    }
    function ln() {
      if (!zt && !l.lockAnchors) {
        var e = n.location.hash.replace("#", "").split("/"),
          t = decodeURIComponent(e[0]),
          o = decodeURIComponent(e[1]),
          i = "undefined" == typeof ut,
          a = "undefined" == typeof ut && "undefined" == typeof o && !gt;
        t.length &&
          ((t && t !== ut && !i) || a || (!gt && ht != o)) &&
          qn(t, o);
      }
    }
    function sn(n) {
      clearTimeout(At);
      var t = e(":focus");
      if (
        !t.is("textarea") &&
        !t.is("input") &&
        !t.is("select") &&
        "true" !== t.attr("contentEditable") &&
        "" !== t.attr("contentEditable") &&
        l.keyboardScrolling &&
        l.autoScrolling
      ) {
        var o = n.which,
          i = [40, 38, 32, 33, 34];
        e.inArray(o, i) > -1 && n.preventDefault(),
          (pt = n.ctrlKey),
          (At = setTimeout(function () {
            mn(n);
          }, 150));
      }
    }
    function cn() {
      e(this).prev().trigger("click");
    }
    function dn(e) {
      xt && (pt = e.ctrlKey);
    }
    function fn(e) {
      2 == e.which && ((Yt = e.pageY), St.on("mousemove", wn));
    }
    function un(e) {
      2 == e.which && St.off("mousemove");
    }
    function hn() {
      var n = e(this).closest(y);
      e(this).hasClass(K) ? kt.m.left && he(n) : kt.m.right && ue(n);
    }
    function pn() {
      (xt = !1), (pt = !1);
    }
    function vn(n) {
      n.preventDefault();
      var t = e(this).parent().index();
      Ke(e(y).eq(t));
    }
    function gn(n) {
      n.preventDefault();
      var t = e(this).closest(y).find(q),
        o = t.find(z).eq(e(this).closest("li").index());
      Sn(t, o);
    }
    function mn(n) {
      var t = n.shiftKey;
      if (Ct || !([37, 39].indexOf(n.which) < 0))
        switch (n.which) {
          case 38:
          case 33:
            kt.k.up && se();
            break;
          case 32:
            if (t && kt.k.up) {
              se();
              break;
            }
          case 40:
          case 34:
            kt.k.down && ce();
            break;
          case 36:
            kt.k.up && fe(1);
            break;
          case 35:
            kt.k.down && fe(e(y).length);
            break;
          case 37:
            kt.k.left && he();
            break;
          case 39:
            kt.k.right && ue();
            break;
          default:
            return;
        }
    }
    function wn(e) {
      Ct &&
        (e.pageY < Yt && kt.m.up ? se() : e.pageY > Yt && kt.m.down && ce()),
        (Yt = e.pageY);
    }
    function Sn(n, t, o) {
      var i = n.closest(y),
        a = {
          slides: n,
          destiny: t,
          direction: o,
          destinyPos: t.position(),
          slideIndex: t.index(),
          section: i,
          sectionIndex: i.index(y),
          anchorLink: i.data("anchor"),
          slidesNav: i.find(Y),
          slideAnchor: Yn(t),
          prevSlide: i.find(D),
          prevSlideIndex: i.find(D).index(),
          localIsResizing: bt,
        };
      return (
        (a.xMovement = An(a.prevSlideIndex, a.slideIndex)),
        a.localIsResizing || (Ct = !1),
        l.onSlideLeave &&
        !a.localIsResizing &&
        "none" !== a.xMovement &&
        e.isFunction(l.onSlideLeave) &&
        l.onSlideLeave.call(
          a.prevSlide,
          a.anchorLink,
          a.sectionIndex + 1,
          a.prevSlideIndex,
          a.xMovement,
          a.slideIndex
        ) === !1
          ? void (gt = !1)
          : (t.addClass(p).siblings().removeClass(p),
            a.localIsResizing || (on(a.prevSlide), en(t)),
            !l.loopHorizontal &&
              l.controlArrows &&
              (i.find(J).toggle(0 !== a.slideIndex),
              i.find(ee).toggle(!t.is(":last-child"))),
            i.hasClass(p) &&
              !a.localIsResizing &&
              Wn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex),
            void bn(n, a, !0))
      );
    }
    function yn(n) {
      xn(n.slidesNav, n.slideIndex),
        n.localIsResizing ||
          (e.isFunction(l.afterSlideLoad) &&
            l.afterSlideLoad.call(
              n.destiny,
              n.anchorLink,
              n.sectionIndex + 1,
              n.slideAnchor,
              n.slideIndex
            ),
          (Ct = !0),
          nn(n.destiny)),
        (gt = !1);
    }
    function bn(e, n, t) {
      var i = n.destinyPos;
      if (l.css3) {
        var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
        kn(e.find(V)).css(tt(a)),
          (Et = setTimeout(
            function () {
              t && yn(n);
            },
            l.scrollingSpeed,
            l.easing
          ));
      } else
        e.animate(
          { scrollLeft: o.round(i.left) },
          l.scrollingSpeed,
          l.easing,
          function () {
            t && yn(n);
          }
        );
    }
    function xn(e, n) {
      e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p);
    }
    function Cn() {
      if ((Tn(), mt)) {
        var n = e(t.activeElement);
        if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
          var i = ne.height();
          o.abs(i - jt) > (20 * o.max(jt, i)) / 100 && (pe(!0), (jt = i));
        }
      } else
        clearTimeout(It),
          (It = setTimeout(function () {
            pe(!0);
          }, 350));
    }
    function Tn() {
      var e = l.responsive || l.responsiveWidth,
        n = l.responsiveHeight,
        t = e && ne.outerWidth() < e,
        o = n && ne.height() < n;
      e && n ? ve(t || o) : e ? ve(t) : n && ve(o);
    }
    function kn(e) {
      var n = "all " + l.scrollingSpeed + "ms " + l.easingcss3;
      return (
        e.removeClass(d), e.css({ "-webkit-transition": n, transition: n })
      );
    }
    function In(e) {
      return e.addClass(d);
    }
    function Ln(n, t) {
      l.navigation &&
        (e(M).find(v).removeClass(p),
        n
          ? e(M)
              .find('a[href="#' + n + '"]')
              .addClass(p)
          : e(M).find("li").eq(t).find("a").addClass(p));
    }
    function En(n) {
      l.menu &&
        (e(l.menu).find(v).removeClass(p),
        e(l.menu)
          .find('[data-menuanchor="' + n + '"]')
          .addClass(p));
    }
    function Mn(e, n) {
      En(e), Ln(e, n);
    }
    function On(n) {
      var t = e(b).index(y),
        o = n.index(y);
      return t == o ? "none" : t > o ? "up" : "down";
    }
    function An(e, n) {
      return e == n ? "none" : e > n ? "left" : "right";
    }
    function Rn(e) {
      if (!e.hasClass("fp-noscroll")) {
        e.css("overflow", "hidden");
        var n,
          t = l.scrollOverflowHandler,
          o = t.wrapContent(),
          i = e.closest(y),
          a = t.scrollable(e);
        a.length
          ? (n = t.scrollHeight(e))
          : ((n = e.get(0).scrollHeight),
            l.verticalCentered && (n = e.find(k).get(0).scrollHeight));
        var r =
          yt -
          parseInt(i.css("padding-bottom")) -
          parseInt(i.css("padding-top"));
        n > r
          ? a.length
            ? t.update(e, r)
            : (l.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o),
              t.create(e, r))
          : t.remove(e),
          e.css("overflow", "");
      }
    }
    function Hn(e) {
      e.hasClass(W) ||
        e
          .addClass(W)
          .wrapInner(
            '<div class="' + T + '" style="height:' + Bn(e) + 'px;" />'
          );
    }
    function Bn(e) {
      var n = yt;
      if (l.paddingTop || l.paddingBottom) {
        var t = e;
        t.hasClass(S) || (t = e.closest(y));
        var o =
          parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
        n = yt - o;
      }
      return n;
    }
    function zn(e, n) {
      n ? kn(St) : In(St),
        St.css(tt(e)),
        setTimeout(function () {
          St.removeClass(d);
        }, 10);
    }
    function Dn(n) {
      if (!n) return [];
      var t = St.find(y + '[data-anchor="' + n + '"]');
      return t.length || (t = e(y).eq(n - 1)), t;
    }
    function Pn(e, n) {
      var t = n.find(q),
        o = t.find(z + '[data-anchor="' + e + '"]');
      return o.length || (o = t.find(z).eq(e)), o;
    }
    function qn(e, n) {
      var t = Dn(e);
      t.length &&
        ("undefined" == typeof n && (n = 0),
        e === ut || t.hasClass(p)
          ? Fn(t, n)
          : Ke(t, function () {
              Fn(t, n);
            }));
    }
    function Fn(e, n) {
      if ("undefined" != typeof n) {
        var t = e.find(q),
          o = Pn(n, e);
        o.length && Sn(t, o);
      }
    }
    function Vn(e, n) {
      e.append('<div class="' + U + '"><ul></ul></div>');
      var t = e.find(Y);
      t.addClass(l.slidesNavPosition);
      for (var o = 0; n > o; o++)
        t.find("ul").append('<li><a href="#"><span></span></a></li>');
      t.css("margin-left", "-" + t.width() / 2 + "px"),
        t.find("li").first().find("a").addClass(p);
    }
    function Wn(e, n, t, o) {
      var i = "";
      l.anchors.length &&
        !l.lockAnchors &&
        (e
          ? ("undefined" != typeof t && (i = t),
            "undefined" == typeof n && (n = e),
            (ht = n),
            Un(i + "/" + n))
          : "undefined" != typeof e
          ? ((ht = n), Un(t))
          : Un(t)),
        jn();
    }
    function Un(e) {
      if (l.recordHistory) location.hash = e;
      else if (mt || wt) n.history.replaceState(i, i, "#" + e);
      else {
        var t = n.location.href.split("#")[0];
        n.location.replace(t + "#" + e);
      }
    }
    function Yn(e) {
      var n = e.data("anchor"),
        t = e.index();
      return "undefined" == typeof n && (n = t), n;
    }
    function jn() {
      var n = e(b),
        t = n.find(D),
        o = Yn(n),
        i = Yn(t),
        a = String(o);
      t.length && (a = a + "-" + i), (a = a.replace("/", "-").replace("#", ""));
      var r = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
      (dt[0].className = dt[0].className.replace(r, "")),
        dt.addClass(h + "-" + a);
    }
    function Nn() {
      var e,
        o = t.createElement("p"),
        a = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform",
        };
      t.body.insertBefore(o, null);
      for (var r in a)
        o.style[r] !== i &&
          ((o.style[r] = "translate3d(1px,1px,1px)"),
          (e = n.getComputedStyle(o).getPropertyValue(a[r])));
      return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e;
    }
    function Xn() {
      t.addEventListener
        ? (t.removeEventListener("mousewheel", Ye, !1),
          t.removeEventListener("wheel", Ye, !1),
          t.removeEventListener("MozMousePixelScroll", Ye, !1))
        : t.detachEvent("onmousewheel", Ye);
    }
    function Kn() {
      var e,
        o = "";
      n.addEventListener
        ? (e = "addEventListener")
        : ((e = "attachEvent"), (o = "on"));
      var a =
        "onwheel" in t.createElement("div")
          ? "wheel"
          : t.onmousewheel !== i
          ? "mousewheel"
          : "DOMMouseScroll";
      "DOMMouseScroll" == a
        ? t[e](o + "MozMousePixelScroll", Ye, !1)
        : t[e](o + a, Ye, !1);
    }
    function Qn() {
      St.on("mousedown", fn).on("mouseup", un);
    }
    function Gn() {
      St.off("mousedown", fn).off("mouseup", un);
    }
    function Jn() {
      (mt || wt) &&
        (l.autoScrolling && dt.off(Ht.touchmove).on(Ht.touchmove, Pe),
        e(r)
          .off(Ht.touchstart)
          .on(Ht.touchstart, We)
          .off(Ht.touchmove)
          .on(Ht.touchmove, qe));
    }
    function Zn() {
      (mt || wt) && e(r).off(Ht.touchstart).off(Ht.touchmove);
    }
    function $n() {
      var e;
      return (e = n.PointerEvent
        ? { down: "pointerdown", move: "pointermove" }
        : { down: "MSPointerDown", move: "MSPointerMove" });
    }
    function _n(e) {
      var n = [];
      return (
        (n.y =
          "undefined" != typeof e.pageY && (e.pageY || e.pageX)
            ? e.pageY
            : e.touches[0].pageY),
        (n.x =
          "undefined" != typeof e.pageX && (e.pageY || e.pageX)
            ? e.pageX
            : e.touches[0].pageX),
        wt &&
          Ve(e) &&
          l.scrollBar &&
          ((n.y = e.touches[0].pageY), (n.x = e.touches[0].pageX)),
        n
      );
    }
    function et(e, n) {
      Q(0, "internal"),
        "undefined" != typeof n && (bt = !0),
        Sn(e.closest(q), e),
        "undefined" != typeof n && (bt = !1),
        Q(Bt.scrollingSpeed, "internal");
    }
    function nt(e) {
      var n = o.round(e);
      if (l.css3 && l.autoScrolling && !l.scrollBar) {
        var t = "translate3d(0px, -" + n + "px, 0px)";
        zn(t, !1);
      } else
        l.autoScrolling && !l.scrollBar ? St.css("top", -n) : ct.scrollTop(n);
    }
    function tt(e) {
      return {
        "-webkit-transform": e,
        "-moz-transform": e,
        "-ms-transform": e,
        transform: e,
      };
    }
    function ot(e, n, t) {
      switch (n) {
        case "up":
          kt[t].up = e;
          break;
        case "down":
          kt[t].down = e;
          break;
        case "left":
          kt[t].left = e;
          break;
        case "right":
          kt[t].right = e;
          break;
        case "all":
          "m" == t ? re(e) : le(e);
      }
    }
    function it(n) {
      s(!1, "internal"),
        re(!1),
        le(!1),
        St.addClass(f),
        clearTimeout(Et),
        clearTimeout(Lt),
        clearTimeout(It),
        clearTimeout(Mt),
        clearTimeout(Ot),
        ne.off("scroll", Re).off("hashchange", ln).off("resize", Cn),
        te
          .off("click touchstart", M + " a")
          .off("mouseenter", M + " li")
          .off("mouseleave", M + " li")
          .off("click touchstart", j)
          .off("mouseover", l.normalScrollElements)
          .off("mouseout", l.normalScrollElements),
        e(y).off("click touchstart", X),
        clearTimeout(Et),
        clearTimeout(Lt),
        n && at();
    }
    function at() {
      nt(0),
        St.find(
          "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
        ).each(function () {
          _e(e(this), "src");
        }),
        St.find("img[data-srcset]").each(function () {
          _e(e(this), "srcset");
        }),
        e(M + ", " + Y + ", " + X).remove(),
        e(y).css({ height: "", "background-color": "", padding: "" }),
        e(z).css({ width: "" }),
        St.css({
          height: "",
          position: "",
          "-ms-touch-action": "",
          "touch-action": "",
        }),
        ct.css({ overflow: "", height: "" }),
        e("html").removeClass(u),
        dt.removeClass(c),
        e.each(dt.get(0).className.split(/\s+/), function (e, n) {
          0 === n.indexOf(h) && dt.removeClass(n);
        }),
        e(y + ", " + z).each(function () {
          l.scrollOverflowHandler.remove(e(this)),
            e(this).removeClass(W + " " + p);
        }),
        In(St),
        St.find(k + ", " + V + ", " + q).each(function () {
          e(this).replaceWith(this.childNodes);
        }),
        St.css({ "-webkit-transition": "none", transition: "none" }),
        ct.scrollTop(0);
      var n = [S, B, F];
      e.each(n, function (n, t) {
        e("." + t).removeClass(t);
      });
    }
    function rt(e, n, t) {
      (l[e] = n), "internal" !== t && (Bt[e] = n);
    }
    function lt() {
      var n = [
        "fadingEffect",
        "continuousHorizontal",
        "scrollHorizontally",
        "interlockedSlides",
        "resetSliders",
        "responsiveSlides",
        "offsetSections",
        "dragAndMove",
        "scrollOverflowReset",
        "parallax",
      ];
      return e("html").hasClass(u)
        ? void st(
            "error",
            "Fullpage.js can only be initialized once and you are doing it multiple times!"
          )
        : (l.continuousVertical &&
            (l.loopTop || l.loopBottom) &&
            ((l.continuousVertical = !1),
            st(
              "warn",
              "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          l.scrollBar &&
            l.scrollOverflow &&
            st(
              "warn",
              "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
            ),
          !l.continuousVertical ||
            (!l.scrollBar && l.autoScrolling) ||
            ((l.continuousVertical = !1),
            st(
              "warn",
              "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          e.each(n, function (e, n) {
            l[n] &&
              st(
                "warn",
                "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " +
                  n
              );
          }),
          void e.each(l.anchors, function (n, t) {
            var o = te.find("[name]").filter(function () {
                return (
                  e(this).attr("name") &&
                  e(this).attr("name").toLowerCase() == t.toLowerCase()
                );
              }),
              i = te.find("[id]").filter(function () {
                return (
                  e(this).attr("id") &&
                  e(this).attr("id").toLowerCase() == t.toLowerCase()
                );
              });
            (i.length || o.length) &&
              (st(
                "error",
                "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
              ),
              i.length &&
                st(
                  "error",
                  '"' +
                    t +
                    '" is is being used by another element `id` property'
                ),
              o.length &&
                st(
                  "error",
                  '"' +
                    t +
                    '" is is being used by another element `name` property'
                ));
          }));
    }
    function st(e, n) {
      console && console[e] && console[e]("fullPage: " + n);
    }
    if (e("html").hasClass(u)) return void lt();
    var ct = e("html, body"),
      dt = e("body"),
      ft = e.fn.fullpage;
    l = e.extend(
      {
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowHandler: ie,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: {
          type: "reveal",
          percentage: 62,
          property: "translate",
        },
        sectionSelector: w,
        slideSelector: H,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: !0,
      },
      l
    );
    var ut,
      ht,
      pt,
      vt,
      gt = !1,
      mt = navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
      ),
      wt =
        "ontouchstart" in n ||
        navigator.msMaxTouchPoints > 0 ||
        navigator.maxTouchPoints,
      St = e(this),
      yt = ne.height(),
      bt = !1,
      xt = !0,
      Ct = !0,
      Tt = [],
      kt = {};
    (kt.m = { up: !0, down: !0, left: !0, right: !0 }),
      (kt.k = e.extend(!0, {}, kt.m));
    var It,
      Lt,
      Et,
      Mt,
      Ot,
      At,
      Rt = $n(),
      Ht = {
        touchmove: "ontouchmove" in n ? "touchmove" : Rt.move,
        touchstart: "ontouchstart" in n ? "touchstart" : Rt.down,
      },
      Bt = e.extend(!0, {}, l);
    lt(),
      (oe.click = wt),
      (oe = e.extend(oe, l.scrollOverflowOptions)),
      e.extend(e.easing, {
        easeInOutCubic: function (e, n, t, o, i) {
          return (n /= i / 2) < 1
            ? (o / 2) * n * n * n + t
            : (o / 2) * ((n -= 2) * n * n + 2) + t;
        },
      }),
      e(this).length &&
        ((ft.setAutoScrolling = s),
        (ft.setRecordHistory = N),
        (ft.setScrollingSpeed = Q),
        (ft.setFitToSection = Z),
        (ft.setLockAnchors = $),
        (ft.setMouseWheelScrolling = ae),
        (ft.setAllowScrolling = re),
        (ft.setKeyboardScrolling = le),
        (ft.moveSectionUp = se),
        (ft.moveSectionDown = ce),
        (ft.silentMoveTo = de),
        (ft.moveTo = fe),
        (ft.moveSlideRight = ue),
        (ft.moveSlideLeft = he),
        (ft.fitToSection = He),
        (ft.reBuild = pe),
        (ft.setResponsive = ve),
        (ft.destroy = it),
        ge(),
        me());
    var zt = !1,
      Dt = 0,
      Pt = 0,
      qt = 0,
      Ft = 0,
      Vt = 0,
      Wt = new Date().getTime(),
      Ut = 0,
      Yt = 0,
      jt = yt;
  }),
    "undefined" != typeof IScroll &&
      ((IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
      (IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this),
          this.wrapper.removeEventListener("mousewheel", this),
          this.wrapper.removeEventListener("DOMMouseScroll", this);
      }));
  var ie = {
    refreshId: null,
    iScrollInstances: [],
    toggleWheel: function (n) {
      var t = e(b).find(s);
      t.each(function () {
        var t = e(this).data("iscrollInstance");
        "undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff());
      });
    },
    onLeave: function () {
      ie.toggleWheel(!1);
    },
    beforeLeave: function () {
      ie.onLeave();
    },
    afterLoad: function () {
      ie.toggleWheel(!0);
    },
    create: function (n, t) {
      var o = n.find(s);
      o.height(t),
        o.each(function () {
          var n = e(this),
            t = n.data("iscrollInstance");
          t &&
            e.each(ie.iScrollInstances, function () {
              e(this).destroy();
            }),
            (t = new IScroll(n.get(0), oe)),
            ie.iScrollInstances.push(t),
            t.wheelOff(),
            n.data("iscrollInstance", t);
        });
    },
    isScrolled: function (e, n) {
      var t = n.data("iscrollInstance");
      return t
        ? "top" === e
          ? t.y >= 0 && !n.scrollTop()
          : "bottom" === e
          ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight
          : void 0
        : !0;
    },
    scrollable: function (e) {
      return e.find(q).length ? e.find(D).find(s) : e.find(s);
    },
    scrollHeight: function (e) {
      return e.find(s).children().first().get(0).scrollHeight;
    },
    remove: function (e) {
      var n = e.find(s);
      if (n.length) {
        var t = n.data("iscrollInstance");
        t.destroy(), n.data("iscrollInstance", null);
      }
      e.find(s).children().first().children().first().unwrap().unwrap();
    },
    update: function (n, t) {
      clearTimeout(ie.refreshId),
        (ie.refreshId = setTimeout(function () {
          e.each(ie.iScrollInstances, function () {
            e(this).get(0).refresh();
          });
        }, 150)),
        n
          .find(s)
          .css("height", t + "px")
          .parent()
          .css("height", t + "px");
    },
    wrapContent: function () {
      return '<div class="' + l + '"><div class="fp-scroller"></div></div>';
    },
  };
});

// 5. Countdown v1.6.3
/* Countdown v1.6.3 */
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.6.3.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. */
(function ($) {
  function Countdown() {
    this.regional = [];
    this.regional[""] = {
      labels: [
        "Years",
        "Months",
        "Weeks",
        "Days",
        "Hours",
        "Minutes",
        "Seconds",
      ],
      labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
      compactLabels: ["y", "m", "w", "d"],
      whichLabels: null,
      digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      timeSeparator: ":",
      isRTL: false,
    };
    this._defaults = {
      until: null,
      since: null,
      timezone: null,
      serverSync: null,
      format: "dHMS",
      layout: "",
      compact: false,
      significant: 0,
      description: "",
      expiryUrl: "",
      expiryText: "",
      alwaysExpire: false,
      onExpiry: null,
      onTick: null,
      tickInterval: 1,
    };
    $.extend(this._defaults, this.regional[""]);
    this._serverSyncs = [];
    var c =
      typeof Date.now == "function"
        ? Date.now
        : function () {
            return new Date().getTime();
          };
    var d = window.performance && typeof window.performance.now == "function";
    function timerCallBack(a) {
      var b =
        a < 1e12
          ? d
            ? performance.now() + performance.timing.navigationStart
            : c()
          : a || c();
      if (b - f >= 1000) {
        x._updateTargets();
        f = b;
      }
      e(timerCallBack);
    }
    var e =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      null;
    var f = 0;
    if (!e || $.noRequestAnimationFrame) {
      $.noRequestAnimationFrame = null;
      setInterval(function () {
        x._updateTargets();
      }, 980);
    } else {
      f =
        window.animationStartTime ||
        window.webkitAnimationStartTime ||
        window.mozAnimationStartTime ||
        window.oAnimationStartTime ||
        window.msAnimationStartTime ||
        c();
      e(timerCallBack);
    }
  }
  var Y = 0;
  var O = 1;
  var W = 2;
  var D = 3;
  var H = 4;
  var M = 5;
  var S = 6;
  $.extend(Countdown.prototype, {
    markerClassName: "hasCountdown",
    propertyName: "countdown",
    _rtlClass: "countdown_rtl",
    _sectionClass: "countdown_section",
    _amountClass: "countdown_amount",
    _rowClass: "countdown_row",
    _holdingClass: "countdown_holding",
    _showClass: "countdown_show",
    _descrClass: "countdown_descr",
    _timerTargets: [],
    setDefaults: function (a) {
      this._resetExtraLabels(this._defaults, a);
      $.extend(this._defaults, a || {});
    },
    UTCDate: function (a, b, c, e, f, g, h, i) {
      if (typeof b == "object" && b.constructor == Date) {
        i = b.getMilliseconds();
        h = b.getSeconds();
        g = b.getMinutes();
        f = b.getHours();
        e = b.getDate();
        c = b.getMonth();
        b = b.getFullYear();
      }
      var d = new Date();
      d.setUTCFullYear(b);
      d.setUTCDate(1);
      d.setUTCMonth(c || 0);
      d.setUTCDate(e || 1);
      d.setUTCHours(f || 0);
      d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
      d.setUTCSeconds(h || 0);
      d.setUTCMilliseconds(i || 0);
      return d;
    },
    periodsToSeconds: function (a) {
      return (
        a[0] * 31557600 +
        a[1] * 2629800 +
        a[2] * 604800 +
        a[3] * 86400 +
        a[4] * 3600 +
        a[5] * 60 +
        a[6]
      );
    },
    _attachPlugin: function (a, b) {
      a = $(a);
      if (a.hasClass(this.markerClassName)) {
        return;
      }
      var c = {
        options: $.extend({}, this._defaults),
        _periods: [0, 0, 0, 0, 0, 0, 0],
      };
      a.addClass(this.markerClassName).data(this.propertyName, c);
      this._optionPlugin(a, b);
    },
    _addTarget: function (a) {
      if (!this._hasTarget(a)) {
        this._timerTargets.push(a);
      }
    },
    _hasTarget: function (a) {
      return $.inArray(a, this._timerTargets) > -1;
    },
    _removeTarget: function (b) {
      this._timerTargets = $.map(this._timerTargets, function (a) {
        return a == b ? null : a;
      });
    },
    _updateTargets: function () {
      for (var i = this._timerTargets.length - 1; i >= 0; i--) {
        this._updateCountdown(this._timerTargets[i]);
      }
    },
    _optionPlugin: function (a, b, c) {
      a = $(a);
      var d = a.data(this.propertyName);
      if (!b || (typeof b == "string" && c == null)) {
        var e = b;
        b = (d || {}).options;
        return b && e ? b[e] : b;
      }
      if (!a.hasClass(this.markerClassName)) {
        return;
      }
      b = b || {};
      if (typeof b == "string") {
        var e = b;
        b = {};
        b[e] = c;
      }
      if (b.layout) {
        b.layout = b.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      }
      this._resetExtraLabels(d.options, b);
      var f = d.options.timezone != b.timezone;
      $.extend(d.options, b);
      this._adjustSettings(a, d, b.until != null || b.since != null || f);
      var g = new Date();
      if ((d._since && d._since < g) || (d._until && d._until > g)) {
        this._addTarget(a[0]);
      }
      this._updateCountdown(a, d);
    },
    _updateCountdown: function (a, b) {
      var c = $(a);
      b = b || c.data(this.propertyName);
      if (!b) {
        return;
      }
      c.html(this._generateHTML(b)).toggleClass(
        this._rtlClass,
        b.options.isRTL
      );
      if ($.isFunction(b.options.onTick)) {
        var d =
          b._hold != "lap"
            ? b._periods
            : this._calculatePeriods(
                b,
                b._show,
                b.options.significant,
                new Date()
              );
        if (
          b.options.tickInterval == 1 ||
          this.periodsToSeconds(d) % b.options.tickInterval == 0
        ) {
          b.options.onTick.apply(a, [d]);
        }
      }
      var e =
        b._hold != "pause" &&
        (b._since
          ? b._now.getTime() < b._since.getTime()
          : b._now.getTime() >= b._until.getTime());
      if (e && !b._expiring) {
        b._expiring = true;
        if (this._hasTarget(a) || b.options.alwaysExpire) {
          this._removeTarget(a);
          if ($.isFunction(b.options.onExpiry)) {
            b.options.onExpiry.apply(a, []);
          }
          if (b.options.expiryText) {
            var f = b.options.layout;
            b.options.layout = b.options.expiryText;
            this._updateCountdown(a, b);
            b.options.layout = f;
          }
          if (b.options.expiryUrl) {
            window.location = b.options.expiryUrl;
          }
        }
        b._expiring = false;
      } else if (b._hold == "pause") {
        this._removeTarget(a);
      }
      c.data(this.propertyName, b);
    },
    _resetExtraLabels: function (a, b) {
      var c = false;
      for (var n in b) {
        if (n != "whichLabels" && n.match(/[Ll]abels/)) {
          c = true;
          break;
        }
      }
      if (c) {
        for (var n in a) {
          if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
            a[n] = null;
          }
        }
      }
    },
    _adjustSettings: function (a, b, c) {
      var d;
      var e = 0;
      var f = null;
      for (var i = 0; i < this._serverSyncs.length; i++) {
        if (this._serverSyncs[i][0] == b.options.serverSync) {
          f = this._serverSyncs[i][1];
          break;
        }
      }
      if (f != null) {
        e = b.options.serverSync ? f : 0;
        d = new Date();
      } else {
        var g = $.isFunction(b.options.serverSync)
          ? b.options.serverSync.apply(a, [])
          : null;
        d = new Date();
        e = g ? d.getTime() - g.getTime() : 0;
        this._serverSyncs.push([b.options.serverSync, e]);
      }
      var h = b.options.timezone;
      h = h == null ? -d.getTimezoneOffset() : h;
      if (c || (!c && b._until == null && b._since == null)) {
        b._since = b.options.since;
        if (b._since != null) {
          b._since = this.UTCDate(h, this._determineTime(b._since, null));
          if (b._since && e) {
            b._since.setMilliseconds(b._since.getMilliseconds() + e);
          }
        }
        b._until = this.UTCDate(h, this._determineTime(b.options.until, d));
        if (e) {
          b._until.setMilliseconds(b._until.getMilliseconds() + e);
        }
      }
      b._show = this._determineShow(b);
    },
    _destroyPlugin: function (a) {
      a = $(a);
      if (!a.hasClass(this.markerClassName)) {
        return;
      }
      this._removeTarget(a[0]);
      a.removeClass(this.markerClassName).empty().removeData(this.propertyName);
    },
    _pausePlugin: function (a) {
      this._hold(a, "pause");
    },
    _lapPlugin: function (a) {
      this._hold(a, "lap");
    },
    _resumePlugin: function (a) {
      this._hold(a, null);
    },
    _hold: function (a, b) {
      var c = $.data(a, this.propertyName);
      if (c) {
        if (c._hold == "pause" && !b) {
          c._periods = c._savePeriods;
          var d = c._since ? "-" : "+";
          c[c._since ? "_since" : "_until"] = this._determineTime(
            d +
              c._periods[0] +
              "y" +
              d +
              c._periods[1] +
              "o" +
              d +
              c._periods[2] +
              "w" +
              d +
              c._periods[3] +
              "d" +
              d +
              c._periods[4] +
              "h" +
              d +
              c._periods[5] +
              "m" +
              d +
              c._periods[6] +
              "s"
          );
          this._addTarget(a);
        }
        c._hold = b;
        c._savePeriods = b == "pause" ? c._periods : null;
        $.data(a, this.propertyName, c);
        this._updateCountdown(a, c);
      }
    },
    _getTimesPlugin: function (a) {
      var b = $.data(a, this.propertyName);
      return !b
        ? null
        : b._hold == "pause"
        ? b._savePeriods
        : !b._hold
        ? b._periods
        : this._calculatePeriods(b, b._show, b.options.significant, new Date());
    },
    _determineTime: function (k, l) {
      var m = function (a) {
        var b = new Date();
        b.setTime(b.getTime() + a * 1000);
        return b;
      };
      var n = function (a) {
        a = a.toLowerCase();
        var b = new Date();
        var c = b.getFullYear();
        var d = b.getMonth();
        var e = b.getDate();
        var f = b.getHours();
        var g = b.getMinutes();
        var h = b.getSeconds();
        var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
        var j = i.exec(a);
        while (j) {
          switch (j[2] || "s") {
            case "s":
              h += parseInt(j[1], 10);
              break;
            case "m":
              g += parseInt(j[1], 10);
              break;
            case "h":
              f += parseInt(j[1], 10);
              break;
            case "d":
              e += parseInt(j[1], 10);
              break;
            case "w":
              e += parseInt(j[1], 10) * 7;
              break;
            case "o":
              d += parseInt(j[1], 10);
              e = Math.min(e, x._getDaysInMonth(c, d));
              break;
            case "y":
              c += parseInt(j[1], 10);
              e = Math.min(e, x._getDaysInMonth(c, d));
              break;
          }
          j = i.exec(a);
        }
        return new Date(c, d, e, f, g, h, 0);
      };
      var o =
        k == null
          ? l
          : typeof k == "string"
          ? n(k)
          : typeof k == "number"
          ? m(k)
          : k;
      if (o) o.setMilliseconds(0);
      return o;
    },
    _getDaysInMonth: function (a, b) {
      return 32 - new Date(a, b, 32).getDate();
    },
    _normalLabels: function (a) {
      return a;
    },
    _generateHTML: function (c) {
      var d = this;
      c._periods = c._hold
        ? c._periods
        : this._calculatePeriods(c, c._show, c.options.significant, new Date());
      var e = false;
      var f = 0;
      var g = c.options.significant;
      var h = $.extend({}, c._show);
      for (var i = Y; i <= S; i++) {
        e |= c._show[i] == "?" && c._periods[i] > 0;
        h[i] = c._show[i] == "?" && !e ? null : c._show[i];
        f += h[i] ? 1 : 0;
        g -= c._periods[i] > 0 ? 1 : 0;
      }
      var j = [false, false, false, false, false, false, false];
      for (var i = S; i >= Y; i--) {
        if (c._show[i]) {
          if (c._periods[i]) {
            j[i] = true;
          } else {
            j[i] = g > 0;
            g--;
          }
        }
      }
      var k = c.options.compact ? c.options.compactLabels : c.options.labels;
      var l = c.options.whichLabels || this._normalLabels;
      var m = function (a) {
        var b = c.options["compactLabels" + l(c._periods[a])];
        return h[a]
          ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + " "
          : "";
      };
      var n = function (a) {
        var b = c.options["labels" + l(c._periods[a])];
        return (!c.options.significant && h[a]) ||
          (c.options.significant && j[a])
          ? '<span class="' +
              x._sectionClass +
              '">' +
              '<span class="' +
              x._amountClass +
              '">' +
              d._translateDigits(c, c._periods[a]) +
              "</span><br/>" +
              (b ? b[a] : k[a]) +
              "</span>"
          : "";
      };
      return c.options.layout
        ? this._buildLayout(
            c,
            h,
            c.options.layout,
            c.options.compact,
            c.options.significant,
            j
          )
        : (c.options.compact
            ? '<span class="' +
              this._rowClass +
              " " +
              this._amountClass +
              (c._hold ? " " + this._holdingClass : "") +
              '">' +
              m(Y) +
              m(O) +
              m(W) +
              m(D) +
              (h[H] ? this._minDigits(c, c._periods[H], 2) : "") +
              (h[M]
                ? (h[H] ? c.options.timeSeparator : "") +
                  this._minDigits(c, c._periods[M], 2)
                : "") +
              (h[S]
                ? (h[H] || h[M] ? c.options.timeSeparator : "") +
                  this._minDigits(c, c._periods[S], 2)
                : "")
            : '<span class="' +
              this._rowClass +
              " " +
              this._showClass +
              (c.options.significant || f) +
              (c._hold ? " " + this._holdingClass : "") +
              '">' +
              n(Y) +
              n(O) +
              n(W) +
              n(D) +
              n(H) +
              n(M) +
              n(S)) +
            "</span>" +
            (c.options.description
              ? '<span class="' +
                this._rowClass +
                " " +
                this._descrClass +
                '">' +
                c.options.description +
                "</span>"
              : "");
    },
    _buildLayout: function (c, d, e, f, g, h) {
      var j = c.options[f ? "compactLabels" : "labels"];
      var k = c.options.whichLabels || this._normalLabels;
      var l = function (a) {
        return (c.options[
          (f ? "compactLabels" : "labels") + k(c._periods[a])
        ] || j)[a];
      };
      var m = function (a, b) {
        return c.options.digits[Math.floor(a / b) % 10];
      };
      var o = {
        desc: c.options.description,
        sep: c.options.timeSeparator,
        yl: l(Y),
        yn: this._minDigits(c, c._periods[Y], 1),
        ynn: this._minDigits(c, c._periods[Y], 2),
        ynnn: this._minDigits(c, c._periods[Y], 3),
        y1: m(c._periods[Y], 1),
        y10: m(c._periods[Y], 10),
        y100: m(c._periods[Y], 100),
        y1000: m(c._periods[Y], 1000),
        ol: l(O),
        on: this._minDigits(c, c._periods[O], 1),
        onn: this._minDigits(c, c._periods[O], 2),
        onnn: this._minDigits(c, c._periods[O], 3),
        o1: m(c._periods[O], 1),
        o10: m(c._periods[O], 10),
        o100: m(c._periods[O], 100),
        o1000: m(c._periods[O], 1000),
        wl: l(W),
        wn: this._minDigits(c, c._periods[W], 1),
        wnn: this._minDigits(c, c._periods[W], 2),
        wnnn: this._minDigits(c, c._periods[W], 3),
        w1: m(c._periods[W], 1),
        w10: m(c._periods[W], 10),
        w100: m(c._periods[W], 100),
        w1000: m(c._periods[W], 1000),
        dl: l(D),
        dn: this._minDigits(c, c._periods[D], 1),
        dnn: this._minDigits(c, c._periods[D], 2),
        dnnn: this._minDigits(c, c._periods[D], 3),
        d1: m(c._periods[D], 1),
        d10: m(c._periods[D], 10),
        d100: m(c._periods[D], 100),
        d1000: m(c._periods[D], 1000),
        hl: l(H),
        hn: this._minDigits(c, c._periods[H], 1),
        hnn: this._minDigits(c, c._periods[H], 2),
        hnnn: this._minDigits(c, c._periods[H], 3),
        h1: m(c._periods[H], 1),
        h10: m(c._periods[H], 10),
        h100: m(c._periods[H], 100),
        h1000: m(c._periods[H], 1000),
        ml: l(M),
        mn: this._minDigits(c, c._periods[M], 1),
        mnn: this._minDigits(c, c._periods[M], 2),
        mnnn: this._minDigits(c, c._periods[M], 3),
        m1: m(c._periods[M], 1),
        m10: m(c._periods[M], 10),
        m100: m(c._periods[M], 100),
        m1000: m(c._periods[M], 1000),
        sl: l(S),
        sn: this._minDigits(c, c._periods[S], 1),
        snn: this._minDigits(c, c._periods[S], 2),
        snnn: this._minDigits(c, c._periods[S], 3),
        s1: m(c._periods[S], 1),
        s10: m(c._periods[S], 10),
        s100: m(c._periods[S], 100),
        s1000: m(c._periods[S], 1000),
      };
      var p = e;
      for (var i = Y; i <= S; i++) {
        var q = "yowdhms".charAt(i);
        var r = new RegExp("\\{" + q + "<\\}([\\s\\S]*)\\{" + q + ">\\}", "g");
        p = p.replace(r, (!g && d[i]) || (g && h[i]) ? "$1" : "");
      }
      $.each(o, function (n, v) {
        var a = new RegExp("\\{" + n + "\\}", "g");
        p = p.replace(a, v);
      });
      return p;
    },
    _minDigits: function (a, b, c) {
      b = "" + b;
      if (b.length >= c) {
        return this._translateDigits(a, b);
      }
      b = "0000000000" + b;
      return this._translateDigits(a, b.substr(b.length - c));
    },
    _translateDigits: function (b, c) {
      return ("" + c).replace(/[0-9]/g, function (a) {
        return b.options.digits[a];
      });
    },
    _determineShow: function (a) {
      var b = a.options.format;
      var c = [];
      c[Y] = b.match("y") ? "?" : b.match("Y") ? "!" : null;
      c[O] = b.match("o") ? "?" : b.match("O") ? "!" : null;
      c[W] = b.match("w") ? "?" : b.match("W") ? "!" : null;
      c[D] = b.match("d") ? "?" : b.match("D") ? "!" : null;
      c[H] = b.match("h") ? "?" : b.match("H") ? "!" : null;
      c[M] = b.match("m") ? "?" : b.match("M") ? "!" : null;
      c[S] = b.match("s") ? "?" : b.match("S") ? "!" : null;
      return c;
    },
    _calculatePeriods: function (c, d, e, f) {
      c._now = f;
      c._now.setMilliseconds(0);
      var g = new Date(c._now.getTime());
      if (c._since) {
        if (f.getTime() < c._since.getTime()) {
          c._now = f = g;
        } else {
          f = c._since;
        }
      } else {
        g.setTime(c._until.getTime());
        if (f.getTime() > c._until.getTime()) {
          c._now = f = g;
        }
      }
      var h = [0, 0, 0, 0, 0, 0, 0];
      if (d[Y] || d[O]) {
        var i = x._getDaysInMonth(f.getFullYear(), f.getMonth());
        var j = x._getDaysInMonth(g.getFullYear(), g.getMonth());
        var k =
          g.getDate() == f.getDate() ||
          (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j));
        var l = function (a) {
          return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds();
        };
        var m = Math.max(
          0,
          (g.getFullYear() - f.getFullYear()) * 12 +
            g.getMonth() -
            f.getMonth() +
            ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0)
        );
        h[Y] = d[Y] ? Math.floor(m / 12) : 0;
        h[O] = d[O] ? m - h[Y] * 12 : 0;
        f = new Date(f.getTime());
        var n = f.getDate() == i;
        var o = x._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
        if (f.getDate() > o) {
          f.setDate(o);
        }
        f.setFullYear(f.getFullYear() + h[Y]);
        f.setMonth(f.getMonth() + h[O]);
        if (n) {
          f.setDate(o);
        }
      }
      var p = Math.floor((g.getTime() - f.getTime()) / 1000);
      var q = function (a, b) {
        h[a] = d[a] ? Math.floor(p / b) : 0;
        p -= h[a] * b;
      };
      q(W, 604800);
      q(D, 86400);
      q(H, 3600);
      q(M, 60);
      q(S, 1);
      if (p > 0 && !c._since) {
        var r = [1, 12, 4.3482, 7, 24, 60, 60];
        var s = S;
        var t = 1;
        for (var u = S; u >= Y; u--) {
          if (d[u]) {
            if (h[s] >= t) {
              h[s] = 0;
              p = 1;
            }
            if (p > 0) {
              h[u]++;
              p = 0;
              s = u;
              t = 1;
            }
          }
          t *= r[u];
        }
      }
      if (e) {
        for (var u = Y; u <= S; u++) {
          if (e && h[u]) {
            e--;
          } else if (!e) {
            h[u] = 0;
          }
        }
      }
      return h;
    },
  });
  var w = ["getTimes"];
  function isNotChained(a, b) {
    if (
      a == "option" &&
      (b.length == 0 || (b.length == 1 && typeof b[0] == "string"))
    ) {
      return true;
    }
    return $.inArray(a, w) > -1;
  }
  $.fn.countdown = function (a) {
    var b = Array.prototype.slice.call(arguments, 1);
    if (isNotChained(a, b)) {
      return x["_" + a + "Plugin"].apply(x, [this[0]].concat(b));
    }
    return this.each(function () {
      if (typeof a == "string") {
        if (!x["_" + a + "Plugin"]) {
          throw "Unknown command: " + a;
        }
        x["_" + a + "Plugin"].apply(x, [this].concat(b));
      } else {
        x._attachPlugin(this, a || {});
      }
    });
  };
  var x = ($.countdown = new Countdown());
})(jQuery);

// 6. jquery.appear v1.0.0
!(function (a) {
  (a.fn.appear = function (b, c) {
    var d = a.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, c);
    return this.each(function () {
      var c = a(this);
      if (((c.appeared = !1), !b)) return void c.trigger("appear", d.data);
      var e = a(window),
        f = function () {
          if (!c.is(":visible")) return void (c.appeared = !1);
          var a = e.scrollLeft(),
            b = e.scrollTop(),
            f = c.offset(),
            g = f.left,
            h = f.top,
            i = d.accX,
            j = d.accY,
            k = c.height(),
            l = e.height(),
            m = c.width(),
            n = e.width();
          h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i
            ? c.appeared || c.trigger("appear", d.data)
            : (c.appeared = !1);
        },
        g = function () {
          if (((c.appeared = !0), d.one)) {
            e.unbind("scroll", f);
            var g = a.inArray(f, a.fn.appear.checks);
            g >= 0 && a.fn.appear.checks.splice(g, 1);
          }
          b.apply(this, arguments);
        };
      d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g),
        e.scroll(f),
        a.fn.appear.checks.push(f),
        f();
    });
  }),
    a.extend(a.fn.appear, {
      checks: [],
      timeout: null,
      checkAll: function () {
        var b = a.fn.appear.checks.length;
        if (b > 0) for (; b--; ) a.fn.appear.checks[b]();
      },
      run: function () {
        a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout),
          (a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20));
      },
    }),
    a.each(
      [
        "append",
        "prepend",
        "after",
        "before",
        "attr",
        "removeAttr",
        "addClass",
        "removeClass",
        "toggleClass",
        "remove",
        "css",
        "show",
        "hide",
      ],
      function (b, c) {
        var d = a.fn[c];
        d &&
          (a.fn[c] = function () {
            var b = d.apply(this, arguments);
            return a.fn.appear.run(), b;
          });
      }
    );
})(jQuery);

// 7. easy-pie-chart v2.1.7
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
/* The MIT License (MIT) Copyright (c) 2013 Robert Fleischmann */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : b(jQuery);
})(this, function (a) {
  var b = function (a, b) {
      var c,
        d = document.createElement("canvas");
      a.appendChild(d),
        "object" == typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 &&
        ((f = window.devicePixelRatio),
        (d.style.width = d.style.height = [b.size, "px"].join("")),
        (d.width = d.height = b.size * f),
        e.scale(f, f)),
        e.translate(b.size / 2, b.size / 2),
        e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2),
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          });
      var h = function (a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(),
            e.arc(0, 0, g, 0, 2 * Math.PI * c, d),
            (e.strokeStyle = a),
            (e.lineWidth = b),
            e.stroke();
        },
        i = function () {
          var a, c;
          (e.lineWidth = 1), (e.fillStyle = b.scaleColor), e.save();
          for (var d = 24; d > 0; --d)
            d % 6 === 0
              ? ((c = b.scaleLength), (a = 0))
              : ((c = 0.6 * b.scaleLength), (a = b.scaleLength - c)),
              e.fillRect(-b.size / 2 + a, 0, c, 1),
              e.rotate(Math.PI / 12);
          e.restore();
        },
        j = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (a) {
              window.setTimeout(a, 1e3 / 60);
            }
          );
        })(),
        k = function () {
          b.scaleColor && i(),
            b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1);
        };
      (this.getCanvas = function () {
        return d;
      }),
        (this.getCtx = function () {
          return e;
        }),
        (this.clear = function () {
          e.clearRect(b.size / -2, b.size / -2, b.size, b.size);
        }),
        (this.draw = function (a) {
          b.scaleColor || b.trackColor
            ? e.getImageData && e.putImageData
              ? c
                ? e.putImageData(c, 0, 0)
                : (k(), (c = e.getImageData(0, 0, b.size * f, b.size * f)))
              : (this.clear(), k())
            : this.clear(),
            (e.lineCap = b.lineCap);
          var d;
          (d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor),
            h(d, b.lineWidth, a / 100);
        }.bind(this)),
        (this.animate = function (a, c) {
          var d = Date.now();
          b.onStart(a, c);
          var e = function () {
            var f = Math.min(Date.now() - d, b.animate.duration),
              g = b.easing(this, f, a, c - a, b.animate.duration);
            this.draw(g),
              b.onStep(a, c, g),
              f >= b.animate.duration ? b.onStop(a, c) : j(e);
          }.bind(this);
          j(e);
        }.bind(this));
    },
    c = function (a, c) {
      var d = {
        barColor: "#ffcc00",
        trackColor: "transparent",
        scaleColor: "transparent",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: { duration: 4000, enabled: !0 },
        easing: function (a, b, c, d, e) {
          return (
            (b /= e / 2),
            1 > b ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c
          );
        },
        onStart: function (a, b) {},
        onStep: function (a, b, c) {},
        onStop: function (a, b) {},
      };
      if ("undefined" != typeof b) d.renderer = b;
      else {
        if ("undefined" == typeof SVGRenderer)
          throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer;
      }
      var e = {},
        f = 0,
        g = function () {
          (this.el = a), (this.options = e);
          for (var b in d)
            d.hasOwnProperty(b) &&
              ((e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b]),
              "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          "string" == typeof e.easing &&
          "undefined" != typeof jQuery &&
          jQuery.isFunction(jQuery.easing[e.easing])
            ? (e.easing = jQuery.easing[e.easing])
            : (e.easing = d.easing),
            "number" == typeof e.animate &&
              (e.animate = { duration: e.animate, enabled: !0 }),
            "boolean" != typeof e.animate ||
              e.animate ||
              (e.animate = { duration: 4000, enabled: e.animate }),
            (this.renderer = new e.renderer(a, e)),
            this.renderer.draw(f),
            a.dataset && a.dataset.percent
              ? this.update(parseFloat(a.dataset.percent))
              : a.getAttribute &&
                a.getAttribute("data-percent") &&
                this.update(parseFloat(a.getAttribute("data-percent")));
        }.bind(this);
      (this.update = function (a) {
        return (
          (a = parseFloat(a)),
          e.animate.enabled
            ? this.renderer.animate(f, a)
            : this.renderer.draw(a),
          (f = a),
          this
        );
      }.bind(this)),
        (this.disableAnimation = function () {
          return (e.animate.enabled = !1), this;
        }),
        (this.enableAnimation = function () {
          return (e.animate.enabled = !0), this;
        }),
        g();
    };
  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") ||
        ((d = a.extend({}, b, a(this).data())),
        a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});

// 8. jQuery Easing v1.3
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright � 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright � 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  },
  easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f + a;
    }
    return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin((f / g) * (Math.PI / 2)) + a;
  },
  easeInOutSine: function (e, f, a, h, g) {
    return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
  },
  easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
  },
  easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }
    if (f == g) {
      return a + h;
    }
    if ((f /= g / 2) < 1) {
      return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
    }
    return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
    }
    return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j)
      ) + e
    );
  },
  easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
      l +
      e
    );
  },
  easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k / 2) == 2) {
      return e + l;
    }
    if (!j) {
      j = k * (0.3 * 1.5);
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
        e
      );
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
        0.5 +
      l +
      e
    );
  },
  easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    if ((f /= h / 2) < 1) {
      return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }
    return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }
    return (
      jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    );
  },
});

// 9. jquery.mb.YTPlayer v3.1.4
/*jquery.mb.YTPlayer 23-11-2017
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady ||
    ((ytp.YTAPIReady = !0), jQuery(document).trigger("YTAPIReady"));
}
function uncamel(a) {
  return a.replace(/([A-Z])/g, function (a) {
    return "-" + a.toLowerCase();
  });
}
function setUnit(a, b) {
  return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a;
}
function setFilter(a, b, c) {
  var d = uncamel(b),
    e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
  (a[e + "filter"] = a[e + "filter"] || ""),
    (c = setUnit(
      c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c,
      jQuery.CSS.filters[b].unit
    )),
    (a[e + "filter"] += d + "(" + c + ") "),
    delete a[b];
}
function isTouchSupported() {
  var a = nAgt.msMaxTouchPoints,
    b = "ontouchstart" in document.createElement("div");
  return a || b ? !0 : !1;
}
function isTouchSupported() {
  var a = nAgt.msMaxTouchPoints,
    b = "ontouchstart" in document.createElement("div");
  return a || b ? !0 : !1;
}
var ytp = ytp || {},
  getYTPVideoID = function (a) {
    var b, c;
    return (
      a.indexOf("youtu.be") > 0
        ? ((b = a.substr(a.lastIndexOf("/") + 1, a.length)),
          (c =
            b.indexOf("?list=") > 0
              ? b.substr(b.lastIndexOf("="), b.length)
              : null),
          (b = c ? b.substr(0, b.lastIndexOf("?")) : b))
        : a.indexOf("http") > -1
        ? ((b = a.match(/[\\?&]v=([^&#]*)/)[1]),
          (c =
            a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null))
        : ((b = a.length > 15 ? null : a), (c = b ? null : a)),
      { videoID: b, playlistID: c }
    );
  };
!(function (jQuery, ytp) {
  (jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "3.1.4",
    build: "6517",
    author: "Matteo Bicocchi (pupunzi)",
    apiKey: "",
    defaults: {
      containment: "body",
      ratio: "auto",
      videoURL: null,
      playlistURL: null,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      vol: 50,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: "default",
      mute: !1,
      loop: !0,
      fadeOnStartTime: 500,
      showControls: !0,
      showAnnotations: !1,
      showYTLogo: !0,
      stopMovieOnBlur: !0,
      realfullscreen: !0,
      mobileFallbackImage: null,
      gaTrack: !0,
      optimizeDisplay: !0,
      remember_last_time: !1,
      playOnlyIfVisible: !1,
      anchor: "center,center",
      onReady: function (a) {},
      onError: function (a, b) {},
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y",
    },
    controlBar: null,
    locationProtocol: "https:",
    filters: {
      grayscale: { value: 0, unit: "%" },
      hue_rotate: { value: 0, unit: "deg" },
      invert: { value: 0, unit: "%" },
      opacity: { value: 0, unit: "%" },
      saturate: { value: 0, unit: "%" },
      sepia: { value: 0, unit: "%" },
      brightness: { value: 0, unit: "%" },
      contrast: { value: 0, unit: "%" },
      blur: { value: 0, unit: "px" },
    },
    buildPlayer: function (options) {
      return this.each(function () {
        var YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        (YTPlayer.loop = 0),
          (YTPlayer.opt = {}),
          (YTPlayer.state = 0),
          (YTPlayer.filters = jQuery.mbYTPlayer.filters),
          (YTPlayer.filtersEnabled = !0),
          (YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime()),
          $YTPlayer.addClass("mb_YTPlayer");
        var property =
          $YTPlayer.data("property") &&
          "string" == typeof $YTPlayer.data("property")
            ? eval("(" + $YTPlayer.data("property") + ")")
            : $YTPlayer.data("property");
        "undefined" != typeof property &&
          "undefined" != typeof property.vol &&
          0 === property.vol &&
          ((property.vol = 1), (property.mute = !0)),
          jQuery.extend(
            YTPlayer.opt,
            jQuery.mbYTPlayer.defaults,
            options,
            property
          ),
          "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999),
          (YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1);
        var isIframe = function () {
          var a = !1;
          try {
            self.location.href != top.location.href && (a = !0);
          } catch (b) {
            a = !0;
          }
          return a;
        };
        (YTPlayer.opt.realfullscreen = isIframe()
          ? !1
          : YTPlayer.opt.realfullscreen),
          $YTPlayer.attr("id") ||
            $YTPlayer.attr("id", "ytp_" + new Date().getTime());
        var playerID = "iframe_" + YTPlayer.id;
        (YTPlayer.isAlone = !1),
          (YTPlayer.hasFocus = !0),
          (YTPlayer.videoID = this.opt.videoURL
            ? getYTPVideoID(this.opt.videoURL).videoID
            : $YTPlayer.attr("href")
            ? getYTPVideoID($YTPlayer.attr("href")).videoID
            : !1),
          (YTPlayer.playlistID = this.opt.videoURL
            ? getYTPVideoID(this.opt.videoURL).playlistID
            : $YTPlayer.attr("href")
            ? getYTPVideoID($YTPlayer.attr("href")).playlistID
            : !1),
          (YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations
            ? "1"
            : "3");
        var start_from_last = 0;
        jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) &&
          (start_from_last = parseFloat(
            jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID)
          )),
          YTPlayer.opt.remember_last_time &&
            start_from_last &&
            ((YTPlayer.start_from_last = start_from_last),
            jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID));
        var playerVars = {
          modestbranding: 1,
          autoplay: 0,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          version: 3,
          playerapiid: playerID,
          origin: "*",
          allowfullscreen: !0,
          wmode: "transparent",
          iv_load_policy: YTPlayer.opt.showAnnotations,
          playsinline: jQuery.browser.mobile ? 1 : 0,
        };
        if (
          (document.createElement("video").canPlayType &&
            jQuery.extend(playerVars, { html5: 1 }),
          jQuery.mbBrowser.msie &&
            jQuery.mbBrowser.version < 9 &&
            (this.opt.opacity = 1),
          (YTPlayer.isPlayer = "self" == YTPlayer.opt.containment),
          (YTPlayer.opt.containment = jQuery(
            "self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment
          )),
          (YTPlayer.isBackground = YTPlayer.opt.containment.is("body")),
          YTPlayer.isPlayer &&
            ((YTPlayer.inlineWrapper =
              jQuery("<div/>").addClass("inline-YTPlayer")),
            YTPlayer.inlineWrapper.css({
              position: "relative",
              maxWidth: YTPlayer.opt.containment.css("width"),
            }),
            YTPlayer.opt.containment.width("100%"),
            YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper),
            YTPlayer.opt.containment.css({
              position: "relative",
              paddingBottom: "56.25%",
              overflow: "hidden",
              height: 0,
            })),
          !YTPlayer.isBackground || !ytp.backgroundIsInited)
        ) {
          YTPlayer.isPlayer || $YTPlayer.hide(),
            (YTPlayer.overlay = jQuery("<div/>")
              .css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              })
              .addClass("YTPOverlay")),
            YTPlayer.isPlayer &&
              YTPlayer.overlay.on("click", function () {
                $YTPlayer.YTPTogglePlay();
              }),
            (YTPlayer.wrapper = jQuery("<div/>")
              .addClass("mbYTP_wrapper")
              .attr("id", "wrapper_" + YTPlayer.id)),
            YTPlayer.wrapper.css({
              position: "absolute",
              zIndex: 0,
              minWidth: "100%",
              minHeight: "100%",
              left: 0,
              top: 0,
              overflow: "hidden",
              opacity: 0,
            });
          var playerBox = jQuery("<div/>")
            .attr("id", playerID)
            .addClass("playerBox");
          if (
            (playerBox.css({
              position: "absolute",
              zIndex: 0,
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              overflow: "hidden",
            }),
            YTPlayer.wrapper.append(playerBox),
            playerBox.css({ opacity: 1 }),
            playerBox.after(YTPlayer.overlay),
            YTPlayer.opt.containment
              .children()
              .not("script, style")
              .each(function () {
                "static" == jQuery(this).css("position") &&
                  jQuery(this).css("position", "relative");
              }),
            YTPlayer.isBackground
              ? (jQuery("body").css({ boxSizing: "border-box" }),
                YTPlayer.wrapper.css({
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }),
                $YTPlayer.hide())
              : "static" == YTPlayer.opt.containment.css("position") &&
                YTPlayer.opt.containment.css({ position: "relative" }),
            YTPlayer.opt.containment.prepend(YTPlayer.wrapper),
            YTPlayer.isBackground ||
              YTPlayer.overlay
                .on("mouseenter", function () {
                  YTPlayer.controlBar &&
                    YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.addClass("visible");
                })
                .on("mouseleave", function () {
                  YTPlayer.controlBar &&
                    YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.removeClass("visible");
                }),
            ytp.YTAPIReady)
          )
            setTimeout(function () {
              jQuery(document).trigger("YTAPIReady");
            }, 100);
          else {
            jQuery("#YTAPI").remove();
            var tag = jQuery("<script></script>").attr({
              src:
                jQuery.mbYTPlayer.locationProtocol +
                "//www.youtube.com/iframe_api?v=" +
                jQuery.mbYTPlayer.version,
              id: "YTAPI",
            });
            jQuery("head").prepend(tag);
          }
          if (jQuery.mbBrowser.mobile && YTPlayer.opt.mobileFallbackImage)
            return (
              YTPlayer.opt.mobileFallbackImage &&
                YTPlayer.wrapper.css({
                  backgroundImage:
                    "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  opacity: 1,
                }),
              jQuery.mbBrowser.mobile &&
                YTPlayer.opt.autoPlay &&
                jQuery("body").one("touchstart", function () {
                  YTPlayer.player.playVideo();
                }),
              YTPlayer.isPlayer || $YTPlayer.remove(),
              void jQuery(document).trigger("YTPUnavailable")
            );
          jQuery(document).on("YTAPIReady", function () {
            (YTPlayer.isBackground && ytp.backgroundIsInited) ||
              YTPlayer.isInit ||
              (YTPlayer.isBackground && (ytp.backgroundIsInited = !0),
              (YTPlayer.opt.autoPlay =
                "undefined" == typeof YTPlayer.opt.autoPlay
                  ? YTPlayer.isBackground
                    ? !0
                    : !1
                  : YTPlayer.opt.autoPlay),
              (YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100),
              jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),
              jQuery(YTPlayer).on("YTPChanged", function () {
                YTPlayer.isInit ||
                  ((YTPlayer.isInit = !0),
                  new YT.Player(playerID, {
                    videoId: YTPlayer.videoID.toString(),
                    playerVars: playerVars,
                    events: {
                      onReady: function (a) {
                        (YTPlayer.player = a.target),
                          YTPlayer.isReady ||
                            ((YTPlayer.isReady =
                              YTPlayer.isPlayer && !YTPlayer.opt.autoPlay
                                ? !1
                                : !0),
                            (YTPlayer.playerEl = YTPlayer.player.getIframe()),
                            jQuery(YTPlayer.playerEl).unselectable(),
                            $YTPlayer.optimizeDisplay(),
                            jQuery(window)
                              .off("resize.YTP_" + YTPlayer.id)
                              .on("resize.YTP_" + YTPlayer.id, function () {
                                $YTPlayer.optimizeDisplay();
                              }),
                            YTPlayer.opt.remember_last_time &&
                              jQuery(window).on(
                                "unload.YTP_" + YTPlayer.id,
                                function () {
                                  var a = YTPlayer.player.getCurrentTime();
                                  jQuery.mbCookie.set(
                                    "YTPlayer_start_from" + YTPlayer.videoID,
                                    a,
                                    0
                                  );
                                }
                              ),
                            jQuery.mbYTPlayer.checkForState(YTPlayer));
                      },
                      onStateChange: function (event) {
                        if ("function" == typeof event.target.getPlayerState) {
                          var state = event.target.getPlayerState();
                          if (YTPlayer.preventTrigger)
                            return void (YTPlayer.preventTrigger = !1);
                          YTPlayer.state = state;
                          var eventType;
                          switch (state) {
                            case -1:
                              eventType = "YTPUnstarted";
                              break;
                            case 0:
                              eventType = "YTPRealEnd";
                              break;
                            case 1:
                              (eventType = "YTPPlay"),
                                YTPlayer.controlBar.length &&
                                  YTPlayer.controlBar
                                    .find(".mb_YTPPlaypause")
                                    .html(jQuery.mbYTPlayer.controls.pause),
                                "undefined" != typeof _gaq &&
                                  eval(YTPlayer.opt.gaTrack) &&
                                  _gaq.push([
                                    "_trackEvent",
                                    "YTPlayer",
                                    "Play",
                                    YTPlayer.hasData
                                      ? YTPlayer.videoData.title
                                      : YTPlayer.videoID.toString(),
                                  ]),
                                "undefined" != typeof ga &&
                                  eval(YTPlayer.opt.gaTrack) &&
                                  ga(
                                    "send",
                                    "event",
                                    "YTPlayer",
                                    "play",
                                    YTPlayer.hasData
                                      ? YTPlayer.videoData.title
                                      : YTPlayer.videoID.toString()
                                  );
                              break;
                            case 2:
                              (eventType = "YTPPause"),
                                YTPlayer.controlBar.length &&
                                  YTPlayer.controlBar
                                    .find(".mb_YTPPlaypause")
                                    .html(jQuery.mbYTPlayer.controls.play);
                              break;
                            case 3:
                              YTPlayer.player.setPlaybackQuality(
                                YTPlayer.opt.quality
                              ),
                                (eventType = "YTPBuffering"),
                                YTPlayer.controlBar.length &&
                                  YTPlayer.controlBar
                                    .find(".mb_YTPPlaypause")
                                    .html(jQuery.mbYTPlayer.controls.play);
                              break;
                            case 5:
                              eventType = "YTPCued";
                          }
                          var YTPEvent = jQuery.Event(eventType);
                          (YTPEvent.time = YTPlayer.currentTime),
                            YTPlayer.preventTrigger ||
                              jQuery(YTPlayer).trigger(YTPEvent);
                        }
                      },
                      onPlaybackQualityChange: function (a) {
                        var b = a.target.getPlaybackQuality(),
                          c = jQuery.Event("YTPQualityChange");
                        (c.quality = b), jQuery(YTPlayer).trigger(c);
                      },
                      onError: function (a) {
                        150 == a.data &&
                          (console.log(
                            "Embedding this video is restricted by Youtube."
                          ),
                          YTPlayer.isPlayList && jQuery(YTPlayer).playNext()),
                          2 == a.data &&
                            YTPlayer.isPlayList &&
                            jQuery(YTPlayer).playNext(),
                          "function" == typeof YTPlayer.opt.onError &&
                            YTPlayer.opt.onError($YTPlayer, a);
                      },
                    },
                  }));
              }));
          }),
            $YTPlayer.off("YTPTime.mask"),
            jQuery.mbYTPlayer.applyMask(YTPlayer);
        }
      });
    },
    isOnScreen: function (a) {
      var b = a.wrapper,
        c = $(window).scrollTop(),
        d = c + $(window).height(),
        e = b.offset().top,
        f = e + b.height() / 2;
      return d >= f && e >= c;
    },
    getDataFromAPI: function (a) {
      if (
        ((a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID)),
        jQuery(a)
          .off("YTPData.YTPlayer")
          .on("YTPData.YTPlayer", function () {
            if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
              var b =
                a.videoData.thumb_max ||
                a.videoData.thumb_high ||
                a.videoData.thumb_medium;
              a.opt.containment.css({
                background: "rgba(0,0,0,0.5) url(" + b + ") center center",
                backgroundSize: "cover",
              }),
                (a.opt.backgroundUrl = b);
            }
          }),
        a.videoData)
      )
        setTimeout(function () {
          (a.opt.ratio = "auto" == a.opt.ratio ? 16 / 9 : a.opt.ratio),
            (a.dataReceived = !0);
          var b = jQuery.Event("YTPChanged");
          (b.time = a.currentTime),
            (b.videoId = a.videoID),
            jQuery(a).trigger(b);
          var c = jQuery.Event("YTPData");
          c.prop = {};
          for (var d in a.videoData) c.prop[d] = a.videoData[d];
          jQuery(a).trigger(c);
        }, a.opt.fadeOnStartTime),
          (a.hasData = !0);
      else if (jQuery.mbYTPlayer.apiKey)
        jQuery.getJSON(
          jQuery.mbYTPlayer.locationProtocol +
            "//www.googleapis.com/youtube/v3/videos?id=" +
            a.videoID +
            "&key=" +
            jQuery.mbYTPlayer.apiKey +
            "&part=snippet",
          function (b) {
            function c(b) {
              (a.videoData = {}),
                (a.videoData.id = a.videoID),
                (a.videoData.channelTitle = b.channelTitle),
                (a.videoData.title = b.title),
                (a.videoData.description =
                  b.description.length < 400
                    ? b.description
                    : b.description.substring(0, 400) + " ..."),
                (a.videoData.aspectratio =
                  "auto" == a.opt.ratio ? 16 / 9 : a.opt.ratio),
                (a.opt.ratio = a.videoData.aspectratio),
                (a.videoData.thumb_max = b.thumbnails.maxres
                  ? b.thumbnails.maxres.url
                  : null),
                (a.videoData.thumb_high = b.thumbnails.high
                  ? b.thumbnails.high.url
                  : null),
                (a.videoData.thumb_medium = b.thumbnails.medium
                  ? b.thumbnails.medium.url
                  : null),
                jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData);
            }
            a.dataReceived = !0;
            var d = jQuery.Event("YTPChanged");
            (d.time = a.currentTime),
              (d.videoId = a.videoID),
              jQuery(a).trigger(d),
              c(b.items[0].snippet),
              (a.hasData = !0);
            var e = jQuery.Event("YTPData");
            e.prop = {};
            for (var f in a.videoData) e.prop[f] = a.videoData[f];
            jQuery(a).trigger(e);
          }
        );
      else {
        if (
          (setTimeout(function () {
            var b = jQuery.Event("YTPChanged");
            (b.time = a.currentTime),
              (b.videoId = a.videoID),
              jQuery(a).trigger(b);
          }, 50),
          a.isPlayer && !a.opt.autoPlay)
        ) {
          var b =
            jQuery.mbYTPlayer.locationProtocol +
            "//i.ytimg.com/vi/" +
            a.videoID +
            "/maxresdefault.jpg";
          b &&
            a.opt.containment.css({
              background: "rgba(0,0,0,0.5) url(" + b + ") center center",
              backgroundSize: "cover",
            }),
            (a.opt.backgroundUrl = b);
        }
        (a.videoData = null),
          (a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio);
      }
      a.isPlayer &&
        !a.opt.autoPlay &&
        ((a.loading = jQuery("<div/>")
          .addClass("loading")
          .html("Loading")
          .hide()),
        jQuery(a).append(a.loading),
        a.loading.fadeIn());
    },
    removeStoredData: function () {
      jQuery.mbStorage.remove();
    },
    getVideoData: function () {
      var a = this.get(0);
      return a.videoData;
    },
    getVideoID: function () {
      var a = this.get(0);
      return a.videoID || !1;
    },
    setVideoQuality: function (a) {
      var b = this.get(0);
      b.player.setPlaybackQuality(a);
    },
    playlist: function (a, b, c) {
      var d = this,
        e = d.get(0);
      return (
        (e.isPlayList = !0),
        b && (a = jQuery.shuffle(a)),
        e.videoID ||
          ((e.videos = a),
          (e.videoCounter = 0),
          (e.videoLength = a.length),
          jQuery(e).data("property", a[0]),
          jQuery(e).mb_YTPlayer()),
        "function" == typeof c &&
          jQuery(e).one("YTPChanged", function () {
            c(e);
          }),
        jQuery(e).on("YTPEnd", function () {
          jQuery(e).playNext();
        }),
        this
      );
    },
    playNext: function () {
      var a = this.get(0);
      return (
        a.checkForStartAt &&
          (clearInterval(a.checkForStartAt), clearInterval(a.getState)),
        a.videoCounter++,
        a.videoCounter >= a.videoLength && (a.videoCounter = 0),
        jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]),
        this
      );
    },
    playPrev: function () {
      var a = this.get(0);
      return (
        a.checkForStartAt &&
          (clearInterval(a.checkForStartAt), clearInterval(a.getState)),
        a.videoCounter--,
        a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1),
        jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]),
        this
      );
    },
    playIndex: function (a) {
      var b = this.get(0);
      return (
        (a -= 1),
        b.checkForStartAt &&
          (clearInterval(b.checkForStartAt), clearInterval(b.getState)),
        (b.videoCounter = a),
        b.videoCounter >= b.videoLength - 1 &&
          (b.videoCounter = b.videoLength - 1),
        jQuery(b).YTPChangeMovie(b.videos[b.videoCounter]),
        this
      );
    },
    changeMovie: function (a) {
      var b = this,
        c = b.get(0);
      (c.opt.startAt = 0),
        (c.opt.stopAt = 0),
        (c.opt.mask = !1),
        (c.opt.mute = !0),
        (c.hasData = !1),
        (c.hasChanged = !0),
        (c.player.loopTime = void 0),
        a && jQuery.extend(c.opt, a),
        (c.videoID = getYTPVideoID(c.opt.videoURL).videoID),
        "true" == c.opt.loop && (c.opt.loop = 9999),
        jQuery(c.playerEl).CSSAnimate(
          { opacity: 0 },
          c.opt.fadeOnStartTime,
          function () {
            var a = jQuery.Event("YTPChangeMovie");
            (a.time = c.currentTime),
              (a.videoId = c.videoID),
              jQuery(c).trigger(a),
              jQuery(c)
                .YTPGetPlayer()
                .cueVideoByUrl(
                  encodeURI(
                    jQuery.mbYTPlayer.locationProtocol +
                      "//www.youtube.com/v/" +
                      c.videoID
                  ),
                  1,
                  c.opt.quality
                ),
              jQuery(c).optimizeDisplay(),
              jQuery.mbYTPlayer.checkForState(c),
              jQuery.mbYTPlayer.getDataFromAPI(c);
          }
        ),
        jQuery.mbYTPlayer.applyMask(c);
    },
    getPlayer: function () {
      return jQuery(this).get(0).player;
    },
    playerDestroy: function () {
      var a = this.get(0);
      return (
        (ytp.YTAPIReady = !0),
        (ytp.backgroundIsInited = !1),
        (a.isInit = !1),
        (a.videoID = null),
        (a.isReady = !1),
        a.wrapper.remove(),
        jQuery("#controlBar_" + a.id).remove(),
        clearInterval(a.checkForStartAt),
        clearInterval(a.getState),
        this
      );
    },
    fullscreen: function (real) {
      function hideMouse() {
        YTPlayer.overlay.css({ cursor: "none" });
      }
      function RunPrefixMethod(a, b) {
        for (
          var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0;
          f < e.length && !a[c];

        ) {
          if (
            ((c = b),
            "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)),
            (c = e[f] + c),
            (d = typeof a[c]),
            "undefined" != d)
          )
            return (e = [e[f]]), "function" == d ? a[c]() : a[c];
          f++;
        }
      }
      function launchFullscreen(a) {
        RunPrefixMethod(a, "RequestFullScreen");
      }
      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") ||
          RunPrefixMethod(document, "IsFullScreen")) &&
          RunPrefixMethod(document, "CancelFullScreen");
      }
      var YTPlayer = this.get(0);
      "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen),
        (real = eval(real));
      var controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isPlayer
          ? YTPlayer.opt.containment
          : YTPlayer.wrapper;
      if (real) {
        var fullscreenchange = jQuery.mbBrowser.mozilla
          ? "mozfullscreenchange"
          : jQuery.mbBrowser.webkit
          ? "webkitfullscreenchange"
          : "fullscreenchange";
        jQuery(document)
          .off(fullscreenchange)
          .on(fullscreenchange, function () {
            var a =
              RunPrefixMethod(document, "IsFullScreen") ||
              RunPrefixMethod(document, "FullScreen");
            a
              ? (jQuery(YTPlayer).YTPSetVideoQuality("default"),
                jQuery(YTPlayer).trigger("YTPFullScreenStart"))
              : ((YTPlayer.isAlone = !1),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                videoWrapper.removeClass("YTPFullscreen"),
                videoWrapper.CSSAnimate(
                  { opacity: YTPlayer.opt.opacity },
                  YTPlayer.opt.fadeOnStartTime
                ),
                videoWrapper.css({ zIndex: 0 }),
                YTPlayer.isBackground
                  ? jQuery("body").after(controls)
                  : YTPlayer.wrapper.before(controls),
                jQuery(window).resize(),
                jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
          });
      }
      return (
        YTPlayer.isAlone
          ? (jQuery(document).off("mousemove.YTPlayer"),
            clearTimeout(YTPlayer.hideCursor),
            YTPlayer.overlay.css({ cursor: "auto" }),
            real
              ? cancelFullscreen()
              : (videoWrapper.CSSAnimate(
                  { opacity: YTPlayer.opt.opacity },
                  YTPlayer.opt.fadeOnStartTime
                ),
                videoWrapper.css({ zIndex: 0 })),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
            (YTPlayer.isAlone = !1))
          : (jQuery(document).on("mousemove.YTPlayer", function (a) {
              YTPlayer.overlay.css({ cursor: "auto" }),
                clearTimeout(YTPlayer.hideCursor),
                jQuery(a.target).parents().is(".mb_YTPBar") ||
                  (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
            }),
            hideMouse(),
            real
              ? (videoWrapper.css({ opacity: 0 }),
                videoWrapper.addClass("YTPFullscreen"),
                launchFullscreen(videoWrapper.get(0)),
                setTimeout(function () {
                  videoWrapper.CSSAnimate(
                    { opacity: 1 },
                    2 * YTPlayer.opt.fadeOnStartTime
                  ),
                    videoWrapper.append(controls),
                    jQuery(YTPlayer).optimizeDisplay(),
                    YTPlayer.player.seekTo(
                      YTPlayer.player.getCurrentTime() + 0.1,
                      !0
                    );
                }, YTPlayer.opt.fadeOnStartTime))
              : videoWrapper
                  .css({ zIndex: 1e4 })
                  .CSSAnimate({ opacity: 1 }, 2 * YTPlayer.opt.fadeOnStartTime),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
            (YTPlayer.isAlone = !0)),
        this
      );
    },
    toggleLoops: function () {
      var a = this.get(0),
        b = a.opt;
      return (
        1 == b.loop
          ? (b.loop = 0)
          : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(),
            (b.loop = 1)),
        this
      );
    },
    play: function () {
      var a = this.get(0);
      if (!a.isReady) return this;
      a.player.playVideo(),
        a.wrapper.CSSAnimate(
          { opacity: a.isAlone ? 1 : a.opt.opacity },
          a.opt.fadeOnStartTime
        ),
        jQuery(a.playerEl).is(":visible") ||
          jQuery(a.playerEl).CSSAnimate(
            { opacity: 1 },
            2 * a.opt.fadeOnStartTime
          );
      var b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPPlaypause");
      return (
        c.html(jQuery.mbYTPlayer.controls.pause),
        (a.state = 1),
        (a.orig_background = jQuery(a).css("background-image")),
        this
      );
    },
    togglePlay: function (a) {
      var b = this.get(0);
      return (
        1 == b.state ? this.YTPPause() : this.YTPPlay(),
        "function" == typeof a && a(b.state),
        this
      );
    },
    stop: function () {
      var a = this.get(0),
        b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPPlaypause");
      return (
        c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo(), this
      );
    },
    pause: function () {
      var a = this.get(0);
      return a.player.pauseVideo(), (a.state = 2), this;
    },
    seekTo: function (a) {
      var b = this.get(0);
      return b.player.seekTo(a, !0), this;
    },
    setVolume: function (a) {
      var b = this.get(0);
      if (b.player.length)
        return (
          a || b.opt.vol || 0 != b.player.getVolume()
            ? (!a && b.player.getVolume() > 0) || (a && b.opt.vol == a)
              ? b.isMute
                ? jQuery(b).YTPUnmute()
                : jQuery(b).YTPMute()
              : ((b.opt.vol = a),
                b.player.setVolume(b.opt.vol),
                b.volumeBar &&
                  b.volumeBar.length &&
                  b.volumeBar.updateSliderVal(a))
            : jQuery(b).YTPUnmute(),
          this
        );
    },
    toggleVolume: function () {
      var a = this.get(0);
      if (a)
        return a.player.isMuted()
          ? (jQuery(a).YTPUnmute(), !0)
          : (jQuery(a).YTPMute(), !1);
    },
    mute: function () {
      var a = this.get(0);
      if (!a.isMute) {
        a.player.mute(),
          (a.isMute = !0),
          a.player.setVolume(0),
          a.volumeBar &&
            a.volumeBar.length &&
            a.volumeBar.width() > 10 &&
            a.volumeBar.updateSliderVal(0);
        var b = jQuery("#controlBar_" + a.id),
          c = b.find(".mb_YTPMuteUnmute");
        c.html(jQuery.mbYTPlayer.controls.unmute),
          jQuery(a).addClass("isMuted"),
          a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
        var d = jQuery.Event("YTPMuted");
        return (
          (d.time = a.currentTime),
          a.preventTrigger || jQuery(a).trigger(d),
          this
        );
      }
    },
    unmute: function () {
      var a = this.get(0);
      if (a.isMute) {
        a.player.unMute(),
          (a.isMute = !1),
          a.player.setVolume(a.opt.vol),
          a.volumeBar &&
            a.volumeBar.length &&
            a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
        var b = jQuery("#controlBar_" + a.id),
          c = b.find(".mb_YTPMuteUnmute");
        c.html(jQuery.mbYTPlayer.controls.mute),
          jQuery(a).removeClass("isMuted"),
          a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
        var d = jQuery.Event("YTPUnmuted");
        return (
          (d.time = a.currentTime),
          a.preventTrigger || jQuery(a).trigger(d),
          this
        );
      }
    },
    applyFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        (c.filters[a].value = b),
          c.filtersEnabled && jQuery(c).YTPEnableFilters();
      });
    },
    applyFilters: function (a) {
      return this.each(function () {
        var b = this;
        if (!b.isReady)
          return void jQuery(b).on("YTPReady", function () {
            jQuery(b).YTPApplyFilters(a);
          });
        for (var c in a) jQuery(b).YTPApplyFilter(c, a[c]);
        jQuery(b).trigger("YTPFiltersApplied");
      });
    },
    toggleFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        c.filters[a].value
          ? (c.filters[a].value = 0)
          : (c.filters[a].value = b),
          c.filtersEnabled && jQuery(this).YTPEnableFilters();
      });
    },
    toggleFilters: function (a) {
      return this.each(function () {
        var b = this;
        b.filtersEnabled
          ? (jQuery(b).trigger("YTPDisableFilters"),
            jQuery(b).YTPDisableFilters())
          : (jQuery(b).YTPEnableFilters(),
            jQuery(b).trigger("YTPEnableFilters")),
          "function" == typeof a && a(b.filtersEnabled);
      });
    },
    disableFilters: function () {
      return this.each(function () {
        var a = this,
          b = jQuery(a.playerEl);
        b.css("-webkit-filter", ""),
          b.css("filter", ""),
          (a.filtersEnabled = !1);
      });
    },
    enableFilters: function () {
      return this.each(function () {
        var a = this,
          b = jQuery(a.playerEl),
          c = "";
        for (var d in a.filters)
          a.filters[d].value &&
            (c +=
              d.replace("_", "-") +
              "(" +
              a.filters[d].value +
              a.filters[d].unit +
              ") ");
        b.css("-webkit-filter", c), b.css("filter", c), (a.filtersEnabled = !0);
      });
    },
    removeFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        if (("function" == typeof a && ((b = a), (a = null)), a))
          jQuery(this).YTPApplyFilter(a, 0), "function" == typeof b && b(a);
        else
          for (var d in c.filters)
            jQuery(this).YTPApplyFilter(d, 0), "function" == typeof b && b(d);
      });
    },
    getFilters: function () {
      var a = this.get(0);
      return a.filters;
    },
    addMask: function (a) {
      var b = this.get(0);
      a || (a = b.actualMask);
      var c = jQuery("<img/>")
        .attr("src", a)
        .on("load", function () {
          b.overlay.CSSAnimate(
            { opacity: 0 },
            b.opt.fadeOnStartTime,
            function () {
              (b.hasMask = !0),
                c.remove(),
                b.overlay.css({
                  backgroundImage: "url(" + a + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }),
                b.overlay.CSSAnimate({ opacity: 1 }, b.opt.fadeOnStartTime);
            }
          );
        });
      return this;
    },
    removeMask: function () {
      var a = this.get(0);
      return (
        a.overlay.CSSAnimate(
          { opacity: 0 },
          a.opt.fadeOnStartTime,
          function () {
            (a.hasMask = !1),
              a.overlay.css({
                backgroundImage: "",
                backgroundRepeat: "",
                backgroundPosition: "",
                backgroundSize: "",
              }),
              a.overlay.CSSAnimate({ opacity: 1 }, a.opt.fadeOnStartTime);
          }
        ),
        this
      );
    },
    applyMask: function (a) {
      var b = jQuery(a);
      if ((b.off("YTPTime.mask"), a.opt.mask))
        if ("string" == typeof a.opt.mask)
          b.YTPAddMask(a.opt.mask), (a.actualMask = a.opt.mask);
        else if ("object" == typeof a.opt.mask) {
          for (var c in a.opt.mask)
            if (a.opt.mask[c]) {
              jQuery("<img/>").attr("src", a.opt.mask[c]);
            }
          a.opt.mask[0] && b.YTPAddMask(a.opt.mask[0]),
            b.on("YTPTime.mask", function (c) {
              for (var d in a.opt.mask)
                c.time == d &&
                  (a.opt.mask[d]
                    ? (b.YTPAddMask(a.opt.mask[d]),
                      (a.actualMask = a.opt.mask[d]))
                    : b.YTPRemoveMask());
            });
        }
      return this;
    },
    toggleMask: function () {
      var a = this.get(0),
        b = $(a);
      return a.hasMask ? b.YTPRemoveMask() : b.YTPAddMask(), this;
    },
    manageProgress: function () {
      var a = this.get(0),
        b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPProgress"),
        d = b.find(".mb_YTPLoaded"),
        e = b.find(".mb_YTPseekbar"),
        f = c.outerWidth(),
        g = Math.floor(a.player.getCurrentTime()),
        h = Math.floor(a.player.getDuration()),
        i = (g * f) / h,
        j = 0,
        k = 100 * a.player.getVideoLoadedFraction();
      return (
        d.css({ left: j, width: k + "%" }),
        e.css({ left: 0, width: i }),
        { totalTime: h, currentTime: g }
      );
    },
    buildControls: function (YTPlayer) {
      var data = YTPlayer.opt;
      if (
        ((data.showYTLogo = data.showYTLogo || data.printUrl),
        !jQuery("#controlBar_" + YTPlayer.id).length)
      ) {
        YTPlayer.controlBar = jQuery("<span/>")
          .attr("id", "controlBar_" + YTPlayer.id)
          .addClass("mb_YTPBar")
          .css({
            whiteSpace: "noWrap",
            position: YTPlayer.isBackground ? "fixed" : "absolute",
            zIndex: YTPlayer.isBackground ? 1e4 : 1e3,
          })
          .hide();
        var buttonBar = jQuery("<div/>").addClass("buttonBar"),
          playpause = jQuery(
            "<span>" + jQuery.mbYTPlayer.controls.play + "</span>"
          )
            .addClass("mb_YTPPlaypause ytpicon")
            .click(function () {
              1 == YTPlayer.player.getPlayerState()
                ? jQuery(YTPlayer).YTPPause()
                : jQuery(YTPlayer).YTPPlay();
            }),
          MuteUnmute = jQuery(
            "<span>" + jQuery.mbYTPlayer.controls.mute + "</span>"
          )
            .addClass("mb_YTPMuteUnmute ytpicon")
            .click(function () {
              0 == YTPlayer.player.getVolume()
                ? jQuery(YTPlayer).YTPUnmute()
                : jQuery(YTPlayer).YTPMute();
            }),
          volumeBar = jQuery("<div/>")
            .addClass("mb_YTPVolumeBar")
            .css({ display: "inline-block" });
        YTPlayer.volumeBar = volumeBar;
        var idx = jQuery("<span/>").addClass("mb_YTPTime"),
          vURL = data.videoURL ? data.videoURL : "";
        vURL.indexOf("http") < 0 &&
          (vURL =
            jQuery.mbYTPlayer.locationProtocol +
            "//www.youtube.com/watch?v=" +
            data.videoURL);
        var movieUrl = jQuery("<span/>")
            .html(jQuery.mbYTPlayer.controls.ytLogo)
            .addClass("mb_YTPUrl ytpicon")
            .attr("title", "view on YouTube")
            .on("click", function () {
              window.open(vURL, "viewOnYT");
            }),
          onlyVideo = jQuery("<span/>")
            .html(jQuery.mbYTPlayer.controls.onlyYT)
            .addClass("mb_OnlyYT ytpicon")
            .on("click", function () {
              jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);
            }),
          progressBar = jQuery("<div/>")
            .addClass("mb_YTPProgress")
            .css("position", "absolute")
            .click(function (a) {
              timeBar.css({ width: a.clientX - timeBar.offset().left }),
                (YTPlayer.timeW = a.clientX - timeBar.offset().left),
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
              var b = Math.floor(YTPlayer.player.getDuration());
              (YTPlayer["goto"] =
                (timeBar.outerWidth() * b) / progressBar.outerWidth()),
                YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0),
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
            }),
          loadedBar = jQuery("<div/>")
            .addClass("mb_YTPLoaded")
            .css("position", "absolute"),
          timeBar = jQuery("<div/>")
            .addClass("mb_YTPseekbar")
            .css("position", "absolute");
        progressBar.append(loadedBar).append(timeBar),
          buttonBar
            .append(playpause)
            .append(MuteUnmute)
            .append(volumeBar)
            .append(idx),
          data.showYTLogo && buttonBar.append(movieUrl),
          (YTPlayer.isBackground ||
            (eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground)) &&
            buttonBar.append(onlyVideo),
          YTPlayer.controlBar.append(buttonBar).append(progressBar),
          YTPlayer.isBackground
            ? jQuery("body").after(YTPlayer.controlBar)
            : (YTPlayer.controlBar.addClass("inlinePlayer"),
              YTPlayer.wrapper.before(YTPlayer.controlBar)),
          volumeBar.simpleSlider({
            initialval: YTPlayer.opt.vol,
            scale: 100,
            orientation: "h",
            callback: function (a) {
              0 == a.value
                ? jQuery(YTPlayer).YTPMute()
                : jQuery(YTPlayer).YTPUnmute(),
                YTPlayer.player.setVolume(a.value),
                YTPlayer.isMute || (YTPlayer.opt.vol = a.value);
            },
          });
      }
    },
    checkForState: function (YTPlayer) {
      var interval = YTPlayer.opt.showControls ? 100 : 400;
      return (
        clearInterval(YTPlayer.getState),
        jQuery.contains(document, YTPlayer)
          ? (jQuery.mbYTPlayer.checkForStart(YTPlayer),
            void (YTPlayer.getState = setInterval(function () {
              var prog = jQuery(YTPlayer).YTPManageProgress(),
                $YTPlayer = jQuery(YTPlayer),
                data = YTPlayer.opt,
                startAt = YTPlayer.start_from_last
                  ? YTPlayer.start_from_last
                  : YTPlayer.opt.startAt
                  ? YTPlayer.opt.startAt
                  : 1;
              YTPlayer.start_from_last = null;
              var stopAt =
                YTPlayer.opt.stopAt > YTPlayer.opt.startAt
                  ? YTPlayer.opt.stopAt
                  : 0;
              if (
                ((stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0),
                YTPlayer.currentTime != prog.currentTime)
              ) {
                var YTPEvent = jQuery.Event("YTPTime");
                (YTPEvent.time = YTPlayer.currentTime),
                  jQuery(YTPlayer).trigger(YTPEvent);
              }
              if (
                ((YTPlayer.currentTime = prog.currentTime),
                (YTPlayer.totalTime = YTPlayer.player.getDuration()),
                0 == YTPlayer.player.getVolume()
                  ? $YTPlayer.addClass("isMuted")
                  : $YTPlayer.removeClass("isMuted"),
                YTPlayer.opt.showControls &&
                  (prog.totalTime
                    ? YTPlayer.controlBar
                        .find(".mb_YTPTime")
                        .html(
                          jQuery.mbYTPlayer.formatTime(prog.currentTime) +
                            " / " +
                            jQuery.mbYTPlayer.formatTime(prog.totalTime)
                        )
                    : YTPlayer.controlBar
                        .find(".mb_YTPTime")
                        .html("-- : -- / -- : --")),
                eval(YTPlayer.opt.stopMovieOnBlur) &&
                  (document.hasFocus()
                    ? document.hasFocus() &&
                      !YTPlayer.hasFocus &&
                      -1 != YTPlayer.state &&
                      0 != YTPlayer.state &&
                      ((YTPlayer.hasFocus = !0), $YTPlayer.YTPPlay())
                    : 1 == YTPlayer.state &&
                      ((YTPlayer.hasFocus = !1), $YTPlayer.YTPPause())),
                YTPlayer.opt.playOnlyIfVisible)
              ) {
                var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer);
                isOnScreen ? $YTPlayer.YTPPlay() : $YTPlayer.YTPPause();
              }
              if (
                (YTPlayer.controlBar.length &&
                YTPlayer.controlBar.outerWidth() <= 400 &&
                !YTPlayer.isCompact
                  ? (YTPlayer.controlBar.addClass("compact"),
                    (YTPlayer.isCompact = !0),
                    !YTPlayer.isMute &&
                      YTPlayer.volumeBar &&
                      YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol))
                  : YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.outerWidth() > 400 &&
                    YTPlayer.isCompact &&
                    (YTPlayer.controlBar.removeClass("compact"),
                    (YTPlayer.isCompact = !1),
                    !YTPlayer.isMute &&
                      YTPlayer.volumeBar &&
                      YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
                1 == YTPlayer.player.getPlayerState() &&
                  (parseFloat(YTPlayer.player.getDuration() - 0.5) <
                    YTPlayer.player.getCurrentTime() ||
                    (stopAt > 0 &&
                      parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)))
              ) {
                if (YTPlayer.isEnded) return;
                if (
                  ((YTPlayer.isEnded = !0),
                  setTimeout(function () {
                    YTPlayer.isEnded = !1;
                  }, 1e3),
                  YTPlayer.isPlayList)
                ) {
                  if (
                    !data.loop ||
                    (data.loop > 0 &&
                      YTPlayer.player.loopTime === data.loop - 1)
                  ) {
                    (YTPlayer.player.loopTime = void 0),
                      clearInterval(YTPlayer.getState);
                    var YTPEnd = jQuery.Event("YTPEnd");
                    return (
                      (YTPEnd.time = YTPlayer.currentTime),
                      void jQuery(YTPlayer).trigger(YTPEnd)
                    );
                  }
                } else if (
                  !data.loop ||
                  (data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)
                )
                  return (
                    (YTPlayer.player.loopTime = void 0),
                    (YTPlayer.preventTrigger = !0),
                    (YTPlayer.state = 2),
                    jQuery(YTPlayer).YTPPause(),
                    void YTPlayer.wrapper.CSSAnimate(
                      { opacity: 0 },
                      YTPlayer.opt.fadeOnStartTime,
                      function () {
                        YTPlayer.controlBar.length &&
                          YTPlayer.controlBar
                            .find(".mb_YTPPlaypause")
                            .html(jQuery.mbYTPlayer.controls.play);
                        var a = jQuery.Event("YTPEnd");
                        (a.time = YTPlayer.currentTime),
                          jQuery(YTPlayer).trigger(a),
                          YTPlayer.player.seekTo(startAt, !0),
                          YTPlayer.isBackground
                            ? YTPlayer.orig_background &&
                              jQuery(YTPlayer).css(
                                "background-image",
                                YTPlayer.orig_background
                              )
                            : YTPlayer.opt.backgroundUrl &&
                              YTPlayer.isPlayer &&
                              ((YTPlayer.opt.backgroundUrl =
                                YTPlayer.opt.backgroundUrl ||
                                YTPlayer.orig_background),
                              YTPlayer.opt.containment.css({
                                background:
                                  "url(" +
                                  YTPlayer.opt.backgroundUrl +
                                  ") center center",
                                backgroundSize: "cover",
                              }));
                      }
                    )
                  );
                (YTPlayer.player.loopTime = YTPlayer.player.loopTime
                  ? ++YTPlayer.player.loopTime
                  : 1),
                  (startAt = startAt || 1),
                  (YTPlayer.preventTrigger = !0),
                  (YTPlayer.state = 2),
                  jQuery(YTPlayer).YTPPause(),
                  YTPlayer.player.seekTo(startAt, !0),
                  $YTPlayer.YTPPlay();
              }
            }, interval)))
          : (jQuery(YTPlayer).YTPPlayerDestroy(),
            clearInterval(YTPlayer.getState),
            void clearInterval(YTPlayer.checkForStartAt))
      );
    },
    checkForStart: function (a) {
      var b = jQuery(a);
      if (!jQuery.contains(document, a))
        return void jQuery(a).YTPPlayerDestroy();
      if (
        ((a.preventTrigger = !0),
        (a.state = 2),
        jQuery(a).YTPPlay(),
        jQuery(a).YTPPause(),
        jQuery(a).muteYTPVolume(),
        jQuery("#controlBar_" + a.id).remove(),
        (a.controlBar = !1),
        a.opt.showControls && jQuery.mbYTPlayer.buildControls(a),
        a.overlay)
      )
        if (a.opt.addRaster) {
          var c = "dot" == a.opt.addRaster ? "raster-dot" : "raster";
          a.overlay.addClass(a.isRetina ? c + " retina" : c);
        } else
          a.overlay.removeClass(function (a, b) {
            var c = b.split(" "),
              d = [];
            return (
              jQuery.each(c, function (a, b) {
                /raster.*/.test(b) && d.push(b);
              }),
              d.push("retina"),
              d.join(" ")
            );
          });
      var d = a.start_from_last
        ? a.start_from_last
        : a.opt.startAt
        ? a.opt.startAt
        : 1;
      (a.start_from_last = null),
        a.player.playVideo(),
        a.player.seekTo(d, !0),
        clearInterval(a.checkForStartAt),
        jQuery(a).YTPMute(),
        (a.checkForStartAt = setInterval(function () {
          var c =
            a.player.getVideoLoadedFraction() >= d / a.player.getDuration();
          if (
            a.player.getDuration() > 0 &&
            a.player.getCurrentTime() >= d &&
            c
          ) {
            clearInterval(a.checkForStartAt),
              "function" == typeof a.opt.onReady && a.opt.onReady(a),
              (a.isReady = !0);
            var e = jQuery.Event("YTPReady");
            if (
              ((e.time = a.currentTime),
              jQuery(a).trigger(e),
              (a.preventTrigger = !0),
              (a.state = 2),
              jQuery(a).YTPPause(),
              a.opt.mute || jQuery(a).YTPUnmute(),
              (a.preventTrigger = !1),
              a.opt.autoPlay)
            ) {
              b.YTPPlay();
              var f = jQuery.Event("YTPStart");
              (f.time = a.currentTime),
                jQuery(a).trigger(f),
                jQuery(a.playerEl).css({ opacity: 1 }),
                a.wrapper.CSSAnimate(
                  { opacity: a.isAlone ? 1 : a.opt.opacity },
                  2 * a.opt.fadeOnStartTime
                ),
                "mac" == jQuery.mbBrowser.os.name &&
                  jQuery.mbBrowser.safari &&
                  jQuery.mbBrowser.versionCompare(
                    jQuery.mbBrowser.fullVersion,
                    "10.1"
                  ) < 0 &&
                  (a.safariPlay = setInterval(function () {
                    1 != a.state ? b.YTPPlay() : clearInterval(a.safariPlay);
                  }, 10)),
                b.one("YTPReady", function () {
                  b.YTPPlay();
                });
            } else
              setTimeout(function () {
                a.player.pauseVideo(),
                  a.player.seekTo(d, !0),
                  a.isPlayer ||
                    (jQuery(a.playerEl).CSSAnimate(
                      { opacity: 1 },
                      a.opt.fadeOnStartTime
                    ),
                    a.wrapper.CSSAnimate(
                      { opacity: a.isAlone ? 1 : a.opt.opacity },
                      a.opt.fadeOnStartTime
                    ));
              }, 250),
                a.controlBar.length &&
                  a.controlBar
                    .find(".mb_YTPPlaypause")
                    .html(jQuery.mbYTPlayer.controls.play);
            a.isPlayer &&
              !a.opt.autoPlay &&
              a.loading &&
              a.loading.length &&
              (a.loading.html("Ready"),
              setTimeout(function () {
                a.loading.fadeOut();
              }, 100)),
              a.controlBar &&
                a.controlBar.length &&
                a.controlBar.slideDown(1e3);
          } else "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.fullVersion && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (a.player.playVideo(), d >= 0 && a.player.seekTo(d, !0));
        }, 100));
    },
    getTime: function () {
      var a = this.get(0);
      return jQuery.mbYTPlayer.formatTime(a.currentTime);
    },
    getTotalTime: function () {
      var a = this.get(0);
      return jQuery.mbYTPlayer.formatTime(a.totalTime);
    },
    formatTime: function (a) {
      var b = Math.floor(a / 60),
        c = Math.floor(a - 60 * b);
      return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c);
    },
    setAnchor: function (a) {
      var b = this;
      b.optimizeDisplay(a);
    },
    getAnchor: function () {
      var a = this.get(0);
      return a.opt.anchor;
    },
  }),
    (jQuery.fn.optimizeDisplay = function (anchor) {
      var YTPlayer = this.get(0),
        vid = {};
      (YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor),
        (YTPlayer.opt.anchor =
          "undefined " != typeof YTPlayer.opt.anchor
            ? YTPlayer.opt.anchor
            : "center,center");
      var YTPAlign = YTPlayer.opt.anchor.split(",");
      if (YTPlayer.opt.optimizeDisplay) {
        var abundance = YTPlayer.isPlayer ? 0 : 180,
          win = {},
          el = YTPlayer.wrapper;
        (win.width = el.outerWidth()),
          (win.height = el.outerHeight() + abundance),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)),
          (vid.width = win.width),
          (vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio)),
          (vid.marginTop = Math.ceil(-((vid.height - win.height) / 2))),
          (vid.marginLeft = 0);
        var lowest = vid.height < win.height;
        lowest &&
          ((vid.height = win.height),
          (vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio)),
          (vid.marginTop = 0),
          (vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2))));
        for (var a in YTPAlign)
          if (YTPAlign.hasOwnProperty(a)) {
            var al = YTPAlign[a].replace(/ /g, "");
            switch (al) {
              case "top":
                vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                break;
              case "bottom":
                vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                break;
              case "left":
                vid.marginLeft = 0;
                break;
              case "right":
                vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                break;
              default:
                vid.width > win.width &&
                  (vid.marginLeft = -((vid.width - win.width) / 2));
            }
          }
      } else
        (vid.width = "100%"),
          (vid.height = "100%"),
          (vid.marginTop = 0),
          (vid.marginLeft = 0);
      jQuery(YTPlayer.playerEl).css({
        width: vid.width,
        height: vid.height,
        marginTop: vid.marginTop,
        marginLeft: vid.marginLeft,
        maxWidth: "initial",
      });
    }),
    (jQuery.shuffle = function (a) {
      for (var b = a.slice(), c = b.length, d = c; d--; ) {
        var e = parseInt(Math.random() * c),
          f = b[d];
        (b[d] = b[e]), (b[e] = f);
      }
      return b;
    }),
    (jQuery.fn.unselectable = function () {
      return this.each(function () {
        jQuery(this)
          .css({
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          })
          .attr("unselectable", "on");
      });
    }),
    (jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer),
    (jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID),
    (jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie),
    (jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy),
    (jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play),
    (jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay),
    (jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop),
    (jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause),
    (jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo),
    (jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist),
    (jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext),
    (jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev),
    (jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex),
    (jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute),
    (jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute),
    (jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume),
    (jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume),
    (jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData),
    (jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen),
    (jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops),
    (jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality),
    (jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress),
    (jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter),
    (jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters),
    (jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter),
    (jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters),
    (jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter),
    (jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters),
    (jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters),
    (jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters),
    (jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime),
    (jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime),
    (jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask),
    (jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask),
    (jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask),
    (jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor),
    (jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor),
    (jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.playNext = jQuery.mbYTPlayer.playNext),
    (jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev),
    (jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie),
    (jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID),
    (jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer),
    (jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy),
    (jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen),
    (jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls),
    (jQuery.fn.playYTP = jQuery.mbYTPlayer.play),
    (jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops),
    (jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop),
    (jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause),
    (jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo),
    (jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute),
    (jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute),
    (jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume),
    (jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality),
    (jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress),
    (jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData);
})(jQuery, ytp),
  (jQuery.support.CSStransition = (function () {
    var a = document.body || document.documentElement,
      b = a.style;
    return (
      void 0 !== b.transition ||
      void 0 !== b.WebkitTransition ||
      void 0 !== b.MozTransition ||
      void 0 !== b.MsTransition ||
      void 0 !== b.OTransition
    );
  })()),
  (jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
      blur: { min: 0, max: 100, unit: "px" },
      brightness: { min: 0, max: 400, unit: "%" },
      contrast: { min: 0, max: 400, unit: "%" },
      grayscale: { min: 0, max: 100, unit: "%" },
      hueRotate: { min: 0, max: 360, unit: "deg" },
      invert: { min: 0, max: 100, unit: "%" },
      saturate: { min: 0, max: 400, unit: "%" },
      sepia: { min: 0, max: 100, unit: "%" },
    },
    normalizeCss: function (a) {
      var b = jQuery.extend(!0, {}, a);
      jQuery.browser.webkit || jQuery.browser.opera
        ? (jQuery.CSS.sfx = "-webkit-")
        : jQuery.browser.mozilla
        ? (jQuery.CSS.sfx = "-moz-")
        : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
      for (var c in b) {
        "transform" === c &&
          ((b[jQuery.CSS.sfx + "transform"] = b[c]), delete b[c]),
          "transform-origin" === c &&
            ((b[jQuery.CSS.sfx + "transform-origin"] = a[c]), delete b[c]),
          "filter" !== c ||
            jQuery.browser.mozilla ||
            ((b[jQuery.CSS.sfx + "filter"] = a[c]), delete b[c]),
          "blur" === c && setFilter(b, "blur", a[c]),
          "brightness" === c && setFilter(b, "brightness", a[c]),
          "contrast" === c && setFilter(b, "contrast", a[c]),
          "grayscale" === c && setFilter(b, "grayscale", a[c]),
          "hueRotate" === c && setFilter(b, "hueRotate", a[c]),
          "invert" === c && setFilter(b, "invert", a[c]),
          "saturate" === c && setFilter(b, "saturate", a[c]),
          "sepia" === c && setFilter(b, "sepia", a[c]);
        var d = "";
        "x" === c &&
          ((d = jQuery.CSS.sfx + "transform"),
          (b[d] = b[d] || ""),
          (b[d] += " translateX(" + setUnit(a[c], "px") + ")"),
          delete b[c]),
          "y" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " translateY(" + setUnit(a[c], "px") + ")"),
            delete b[c]),
          "z" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " translateZ(" + setUnit(a[c], "px") + ")"),
            delete b[c]),
          "rotate" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " rotate(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "rotateX" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " rotateX(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "rotateY" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " rotateY(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "rotateZ" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "scale" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " scale(" + setUnit(a[c], "") + ")"),
            delete b[c]),
          "scaleX" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " scaleX(" + setUnit(a[c], "") + ")"),
            delete b[c]),
          "scaleY" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " scaleY(" + setUnit(a[c], "") + ")"),
            delete b[c]),
          "scaleZ" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " scaleZ(" + setUnit(a[c], "") + ")"),
            delete b[c]),
          "skew" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " skew(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "skewX" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " skewX(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "skewY" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " skewY(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "perspective" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " perspective(" + setUnit(a[c], "px") + ")"),
            delete b[c]);
      }
      return b;
    },
    getProp: function (a) {
      var b = [];
      for (var c in a) b.indexOf(c) < 0 && b.push(uncamel(c));
      return b.join(",");
    },
    animate: function (a, b, c, d, e) {
      return this.each(function () {
        function f() {
          (g.called = !0),
            (g.CSSAIsRunning = !1),
            h.off(jQuery.CSS.transitionEnd + "." + g.id),
            clearTimeout(g.timeout),
            h.css(jQuery.CSS.sfx + "transition", ""),
            "function" == typeof e && e.apply(g),
            "function" == typeof g.CSSqueue &&
              (g.CSSqueue(), (g.CSSqueue = null));
        }
        var g = this,
          h = jQuery(this);
        g.id = g.id || "CSSA_" + new Date().getTime();
        var i = i || { type: "noEvent" };
        if (
          g.CSSAIsRunning &&
          g.eventType == i.type &&
          !jQuery.browser.msie &&
          jQuery.browser.version <= 9
        )
          return void (g.CSSqueue = function () {
            h.CSSAnimate(a, b, c, d, e);
          });
        if (
          ((g.CSSqueue = null), (g.eventType = i.type), 0 !== h.length && a)
        ) {
          if (
            ((a = jQuery.normalizeCss(a)),
            (g.CSSAIsRunning = !0),
            "function" == typeof b &&
              ((e = b), (b = jQuery.fx.speeds._default)),
            "function" == typeof c && ((d = c), (c = 0)),
            "string" == typeof c && ((e = c), (c = 0)),
            "function" == typeof d &&
              ((e = d), (d = "cubic-bezier(0.65,0.03,0.36,0.72)")),
            "string" == typeof b)
          )
            for (var j in jQuery.fx.speeds) {
              if (b == j) {
                b = jQuery.fx.speeds[j];
                break;
              }
              b = jQuery.fx.speeds._default;
            }
          if (
            (b || (b = jQuery.fx.speeds._default),
            "string" == typeof e && ((d = e), (e = null)),
            !jQuery.support.CSStransition)
          ) {
            for (var k in a) {
              if (
                ("transform" === k && delete a[k],
                "filter" === k && delete a[k],
                "transform-origin" === k && delete a[k],
                "auto" === a[k] && delete a[k],
                "x" === k)
              ) {
                var l = a[k],
                  m = "left";
                (a[m] = l), delete a[k];
              }
              if ("y" === k) {
                var l = a[k],
                  m = "top";
                (a[m] = l), delete a[k];
              }
              ("-ms-transform" === k || "-ms-filter" === k) && delete a[k];
            }
            return void h.delay(c).animate(a, b, e);
          }
          var n = {
            default: "ease",
            in: "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
          };
          n[d] && (d = n[d]), h.off(jQuery.CSS.transitionEnd + "." + g.id);
          var o = jQuery.CSS.getProp(a),
            p = {};
          jQuery.extend(p, a),
            (p[jQuery.CSS.sfx + "transition-property"] = o),
            (p[jQuery.CSS.sfx + "transition-duration"] = b + "ms"),
            (p[jQuery.CSS.sfx + "transition-delay"] = c + "ms"),
            (p[jQuery.CSS.sfx + "transition-timing-function"] = d),
            setTimeout(function () {
              h.one(jQuery.CSS.transitionEnd + "." + g.id, f), h.css(p);
            }, 1),
            (g.timeout = setTimeout(function () {
              return g.called || !e
                ? ((g.called = !1), void (g.CSSAIsRunning = !1))
                : (h.css(jQuery.CSS.sfx + "transition", ""),
                  e.apply(g),
                  (g.CSSAIsRunning = !1),
                  void (
                    "function" == typeof g.CSSqueue &&
                    (g.CSSqueue(), (g.CSSqueue = null))
                  ));
            }, b + c + 10));
        }
      });
    },
  }),
  (jQuery.fn.CSSAnimate = jQuery.CSS.animate),
  (jQuery.normalizeCss = jQuery.CSS.normalizeCss),
  (jQuery.fn.css3 = function (a) {
    return this.each(function () {
      var b = jQuery(this),
        c = jQuery.normalizeCss(a);
      b.css(c);
    });
  });
var nAgt = navigator.userAgent;
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function () {
  var a = { version: "Unknown version", name: "Unknown OS" };
  return (
    -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"),
    -1 != navigator.appVersion.indexOf("Mac") &&
      0 > navigator.appVersion.indexOf("Mobile") &&
      (a.name = "Mac"),
    -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"),
    /Mac OS X/.test(nAgt) &&
      !/Mobile/.test(nAgt) &&
      ((a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]),
      (a.version = a.version.replace(/_/g, ".").substring(0, 5))),
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"),
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"),
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"),
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"),
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"),
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"),
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"),
    (a.name = a.name.toLowerCase()),
    (a.major_version = "Unknown"),
    (a.minor_version = "Unknown"),
    "Unknown.Unknown" != a.version &&
      ((a.major_version = parseFloat(a.version.split(".")[0])),
      (a.minor_version = parseFloat(a.version.split(".")[1]))),
    a
  );
};
(jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = "Microsoft Edge"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = "Chrome"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = "androidStock"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = "Firefox"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function (a, b) {
    if ("stringstring" != typeof a + typeof b) return !1;
    for (
      var c = a.split("."),
        d = b.split("."),
        e = 0,
        f = Math.max(c.length, d.length);
      f > e;
      e++
    ) {
      if (
        (c[e] && !d[e] && 0 < parseInt(c[e])) ||
        parseInt(c[e]) > parseInt(d[e])
      )
        return 1;
      if (
        (d[e] && !c[e] && 0 < parseInt(d[e])) ||
        parseInt(c[e]) < parseInt(d[e])
      )
        return -1;
    }
    return 0;
  });
var nAgt = navigator.userAgent;
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function () {
  var a = { version: "Unknown version", name: "Unknown OS" };
  return (
    -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"),
    -1 != navigator.appVersion.indexOf("Mac") &&
      0 > navigator.appVersion.indexOf("Mobile") &&
      (a.name = "Mac"),
    -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"),
    /Mac OS X/.test(nAgt) &&
      !/Mobile/.test(nAgt) &&
      ((a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]),
      (a.version = a.version.replace(/_/g, ".").substring(0, 5))),
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"),
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"),
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"),
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"),
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"),
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"),
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"),
    (a.name = a.name.toLowerCase()),
    (a.major_version = "Unknown"),
    (a.minor_version = "Unknown"),
    "Unknown.Unknown" != a.version &&
      ((a.major_version = parseFloat(a.version.split(".")[0])),
      (a.minor_version = parseFloat(a.version.split(".")[1]))),
    a
  );
};
(jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = "Microsoft Edge"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = "Chrome"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = "androidStock"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = "Firefox"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function (a, b) {
    if ("stringstring" != typeof a + typeof b) return !1;
    for (
      var c = a.split("."),
        d = b.split("."),
        e = 0,
        f = Math.max(c.length, d.length);
      f > e;
      e++
    ) {
      if (
        (c[e] && !d[e] && 0 < parseInt(c[e])) ||
        parseInt(c[e]) > parseInt(d[e])
      )
        return 1;
      if (
        (d[e] && !c[e] && 0 < parseInt(d[e])) ||
        parseInt(c[e]) < parseInt(d[e])
      )
        return -1;
    }
    return 0;
  }),
  (function (a) {
    (a.simpleSlider = {
      defaults: {
        initialval: 0,
        scale: 100,
        orientation: "h",
        readonly: !1,
        callback: !1,
      },
      events: {
        start: a.browser.mobile ? "touchstart" : "mousedown",
        end: a.browser.mobile ? "touchend" : "mouseup",
        move: a.browser.mobile ? "touchmove" : "mousemove",
      },
      init: function (b) {
        return this.each(function () {
          var c = this,
            d = a(c);
          d.addClass("simpleSlider"),
            (c.opt = {}),
            a.extend(c.opt, a.simpleSlider.defaults, b),
            a.extend(c.opt, d.data());
          var e = "h" == c.opt.orientation ? "horizontal" : "vertical";
          (e = a("<div/>").addClass("level").addClass(e)),
            d.prepend(e),
            (c.level = e),
            d.css({ cursor: "default" }),
            "auto" == c.opt.scale && (c.opt.scale = a(c).outerWidth()),
            d.updateSliderVal(),
            c.opt.readonly ||
              (d.on(a.simpleSlider.events.start, function (b) {
                a.browser.mobile && (b = b.changedTouches[0]),
                  (c.canSlide = !0),
                  d.updateSliderVal(b),
                  "h" == c.opt.orientation
                    ? d.css({ cursor: "col-resize" })
                    : d.css({ cursor: "row-resize" }),
                  a.browser.mobile || (b.preventDefault(), b.stopPropagation());
              }),
              a(document)
                .on(a.simpleSlider.events.move, function (b) {
                  a.browser.mobile && (b = b.changedTouches[0]),
                    c.canSlide &&
                      (a(document).css({ cursor: "default" }),
                      d.updateSliderVal(b),
                      a.browser.mobile ||
                        (b.preventDefault(), b.stopPropagation()));
                })
                .on(a.simpleSlider.events.end, function () {
                  a(document).css({ cursor: "auto" }),
                    (c.canSlide = !1),
                    d.css({ cursor: "auto" });
                }));
        });
      },
      updateSliderVal: function (b) {
        var c = this.get(0);
        if (c.opt) {
          c.opt.initialval =
            "number" == typeof c.opt.initialval
              ? c.opt.initialval
              : c.opt.initialval(c);
          var d = a(c).outerWidth(),
            e = a(c).outerHeight();
          (c.x =
            "object" == typeof b
              ? b.clientX + document.body.scrollLeft - this.offset().left
              : "number" == typeof b
              ? (b * d) / c.opt.scale
              : (c.opt.initialval * d) / c.opt.scale),
            (c.y =
              "object" == typeof b
                ? b.clientY + document.body.scrollTop - this.offset().top
                : "number" == typeof b
                ? ((c.opt.scale - c.opt.initialval - b) * e) / c.opt.scale
                : (c.opt.initialval * e) / c.opt.scale),
            (c.y = this.outerHeight() - c.y),
            (c.scaleX = (c.x * c.opt.scale) / d),
            (c.scaleY = (c.y * c.opt.scale) / e),
            (c.outOfRangeX =
              c.scaleX > c.opt.scale
                ? c.scaleX - c.opt.scale
                : 0 > c.scaleX
                ? c.scaleX
                : 0),
            (c.outOfRangeY =
              c.scaleY > c.opt.scale
                ? c.scaleY - c.opt.scale
                : 0 > c.scaleY
                ? c.scaleY
                : 0),
            (c.outOfRange =
              "h" == c.opt.orientation ? c.outOfRangeX : c.outOfRangeY),
            (c.value =
              "undefined" != typeof b
                ? "h" == c.opt.orientation
                  ? c.x >= this.outerWidth()
                    ? c.opt.scale
                    : 0 >= c.x
                    ? 0
                    : c.scaleX
                  : c.y >= this.outerHeight()
                  ? c.opt.scale
                  : 0 >= c.y
                  ? 0
                  : c.scaleY
                : "h" == c.opt.orientation
                ? c.scaleX
                : c.scaleY),
            "h" == c.opt.orientation
              ? c.level.width(Math.floor((100 * c.x) / d) + "%")
              : c.level.height(Math.floor((100 * c.y) / e)),
            "function" == typeof c.opt.callback && c.opt.callback(c);
        }
      },
    }),
      (a.fn.simpleSlider = a.simpleSlider.init),
      (a.fn.updateSliderVal = a.simpleSlider.updateSliderVal);
  })(jQuery),
  (function (a) {
    (a.mbCookie = {
      set: function (a, b, c, d) {
        "object" == typeof b && (b = JSON.stringify(b)),
          (d = d ? "; domain=" + d : "");
        var e = new Date(),
          f = "";
        c > 0 &&
          (e.setTime(e.getTime() + 864e5 * c),
          (f = "; expires=" + e.toGMTString())),
          (document.cookie = a + "=" + b + f + "; path=/" + d);
      },
      get: function (a) {
        a += "=";
        for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
          for (var d = b[c]; " " == d.charAt(0); ) d = d.substring(1, d.length);
          if (0 == d.indexOf(a))
            try {
              return JSON.parse(d.substring(a.length, d.length));
            } catch (e) {
              return d.substring(a.length, d.length);
            }
        }
        return null;
      },
      remove: function (b) {
        a.mbCookie.set(b, "", -1);
      },
    }),
      (a.mbStorage = {
        set: function (a, b) {
          "object" == typeof b && (b = JSON.stringify(b)),
            localStorage.setItem(a, b);
        },
        get: function (a) {
          if (!localStorage[a]) return null;
          try {
            return JSON.parse(localStorage[a]);
          } catch (b) {
            return localStorage[a];
          }
        },
        remove: function (a) {
          a ? localStorage.removeItem(a) : localStorage.clear();
        },
      });
  })(jQuery);

// 10. cursor.style v1.0.1
const cursor = document.querySelector(".cursor"),
  links = document.querySelectorAll("a, .the-button-submit"),
  bounce = "bounce";
var x, y;
const moveMouse = (e) => {
    (x = e.clientX),
      (y = e.clientY),
      (cursor.style.top = `${y - 30}px`),
      (cursor.style.left = `${x - 30}px`);
  },
  enableAnimation = () => {
    cursor.classList.contains(bounce)
      ? cursor.classList.remove(bounce)
      : cursor.classList.add(bounce);
  };
document.addEventListener("mousemove", moveMouse),
  Array.prototype.forEach.call(links, (e) =>
    e.addEventListener("mouseenter", enableAnimation)
  ),
  Array.prototype.forEach.call(links, (e) =>
    e.addEventListener("mouseleave", enableAnimation)
  );

// 11. Bootstrap v3.3.7
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                if (a(b.target).is(this))
                  return b.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0),
                    d.addClass(c).attr(c, c).prop(c, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    d.removeClass(c).removeAttr(c).prop(c, !1));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"),
              a(c.target).is('input[type="radio"], input[type="checkbox"]') ||
                (c.preventDefault(),
                d.is("input,button")
                  ? d.trigger("focus")
                  : d
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(a > this.$items.length - 1 || a < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.7"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              document === a.target ||
                this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        if (
          (c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          !c.isInStateTrue())
        )
          return (
            clearTimeout(c.timeout),
            (c.hoverState = "out"),
            c.options.delay && c.options.delay.hide
              ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
              : c.hide()
          );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        if ((this.$element.trigger(g), !g.isDefaultPrevented()))
          return (
            f.removeClass("in"),
            a.support.transition && f.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : d(),
            (this.hoverState = null),
            this
          );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, h, i, g);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.7"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed)
          return null != c
            ? !(e + this.unpin <= f.top) && "bottom"
            : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && e <= c
          ? "top"
          : null != d && i + j >= a - d && "bottom";
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);

// 12. List Ticker
/* 
// List Ticker by Alex Fish 
// www.alexefish.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
*/
!(function (e) {
  e.fn.list_ticker = function (n) {
    var t = { speed: 4e3, effect: "slide" },
      n = e.extend(t, n);
    return this.each(function () {
      var t = e(this),
        i = t.children();
      i.not(":first").hide(),
        setInterval(function () {
          (i = t.children()), i.not(":first").hide();
          var e = i.eq(0),
            f = i.eq(1);
          "slide" == n.effect
            ? (e.slideUp(),
              f.slideDown(function () {
                e.remove().appendTo(t);
              }))
            : "fade" == n.effect &&
              e.fadeOut(function () {
                f.fadeIn(), e.remove().appendTo(t);
              });
        }, n.speed);
    });
  };
})(jQuery);

// 13. jquery.tweet.js
// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2011 Todd Matthews & Steve Purcell
!(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
  e.fn.tweet = function (t) {
    function r(e, t) {
      if ("string" == typeof e) {
        var r = e;
        for (var a in t) {
          var n = t[a];
          r = r.replace(new RegExp("{" + a + "}", "g"), null === n ? "" : n);
        }
        return r;
      }
      return e(t);
    }
    function a(t, r) {
      return function () {
        var a = [];
        return (
          this.each(function () {
            a.push(this.replace(t, r));
          }),
          e(a)
        );
      };
    }
    function n(e) {
      return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;");
    }
    function i(e, t) {
      return e.replace(p, function (e) {
        for (
          var r = /^[a-z]+:/i.test(e) ? e : "http://" + e, a = e, i = 0;
          i < t.length;
          ++i
        ) {
          var s = t[i];
          if (s.url == r && s.expanded_url) {
            (r = s.expanded_url), (a = s.display_url);
            break;
          }
        }
        return '<a href="' + n(r) + '">' + n(a) + "</a>";
      });
    }
    function s(e) {
      return Date.parse(
        e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3")
      );
    }
    function u(e) {
      var t = arguments.length > 1 ? arguments[1] : new Date(),
        r = parseInt((t.getTime() - e) / 1e3, 10),
        a = "";
      return (a =
        1 > r
          ? "just now"
          : 60 > r
          ? r + " seconds ago"
          : 120 > r
          ? "about a minute ago"
          : 2700 > r
          ? "about " + parseInt(r / 60, 10).toString() + " minutes ago"
          : 7200 > r
          ? "about an hour ago"
          : 86400 > r
          ? "about " + parseInt(r / 3600, 10).toString() + " hours ago"
          : 172800 > r
          ? "about a day ago"
          : "about " + parseInt(r / 86400, 10).toString() + " days ago");
    }
    function o(e) {
      return e.match(/^(@([A-Za-z0-9-_]+)) .*/i)
        ? w.auto_join_text_reply
        : e.match(p)
        ? w.auto_join_text_url
        : e.match(/^((\w+ed)|just) .*/im)
        ? w.auto_join_text_ed
        : e.match(/^(\w*ing) .*/i)
        ? w.auto_join_text_ing
        : w.auto_join_text_default;
    }
    function _() {
      var t = (w.modpath, null === w.fetch ? w.count : w.fetch),
        r = { include_entities: 1 };
      if (w.list)
        return {
          host: w.twitter_api_url,
          url: "/1.1/lists/statuses.json",
          parameters: e.extend({}, r, {
            list_id: w.list_id,
            slug: w.list,
            owner_screen_name: w.username,
            page: w.page,
            count: t,
            include_rts: w.retweets ? 1 : 0,
          }),
        };
      if (w.favorites)
        return {
          host: w.twitter_api_url,
          url: "/1.1/favorites/list.json",
          parameters: e.extend({}, r, {
            list_id: w.list_id,
            screen_name: w.username,
            page: w.page,
            count: t,
          }),
        };
      if (null === w.query && 1 === w.username.length)
        return {
          host: w.twitter_api_url,
          url: "/1.1/statuses/user_timeline.json",
          parameters: e.extend({}, r, {
            screen_name: w.username,
            page: w.page,
            count: t,
            include_rts: w.retweets ? 1 : 0,
          }),
        };
      var a = w.query || "from:" + w.username.join(" OR from:");
      return {
        host: w.twitter_search_url,
        url: "/search.json",
        parameters: e.extend({}, r, { page: w.page, q: a, rpp: t }),
      };
    }
    function l(e, t) {
      return t
        ? "user" in e
          ? e.user.profile_image_url_https
          : l(e, !1).replace(
              /^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,
              "https://s3.amazonaws.com/twitter_production/"
            )
        : e.profile_image_url || e.user.profile_image_url;
    }
    function c(t) {
      var a = {};
      return (
        (a.item = t),
        (a.source = t.source),
        (a.name = t.from_user_name || t.user.name),
        (a.screen_name = t.from_user || t.user.screen_name),
        (a.avatar_size = w.avatar_size),
        (a.avatar_url = l(t, "https:" === document.location.protocol)),
        (a.retweet = "undefined" != typeof t.retweeted_status),
        (a.tweet_time = s(t.created_at)),
        (a.join_text = "auto" == w.join_text ? o(t.text) : w.join_text),
        (a.tweet_id = t.id_str),
        (a.twitter_base = "http://" + w.twitter_url + "/"),
        (a.user_url = a.twitter_base + a.screen_name),
        (a.tweet_url = a.user_url + "/status/" + a.tweet_id),
        (a.reply_url =
          a.twitter_base + "intent/tweet?in_reply_to=" + a.tweet_id),
        (a.retweet_url =
          a.twitter_base + "intent/retweet?tweet_id=" + a.tweet_id),
        (a.favorite_url =
          a.twitter_base + "intent/favorite?tweet_id=" + a.tweet_id),
        (a.retweeted_screen_name =
          a.retweet && t.retweeted_status.user.screen_name),
        (a.tweet_relative_time = u(a.tweet_time)),
        (a.entities = t.entities
          ? (t.entities.urls || []).concat(t.entities.media || [])
          : []),
        (a.tweet_raw_text = a.retweet
          ? "RT @" + a.retweeted_screen_name + " " + t.retweeted_status.text
          : t.text),
        (a.tweet_text = e([i(a.tweet_raw_text, a.entities)])
          .linkUser()
          .linkHash()[0]),
        (a.tweet_text_fancy = e([a.tweet_text]).makeHeart()[0]),
        (a.user = r(
          '<a class="tweet_user" href="{user_url}">{screen_name}</a>',
          a
        )),
        (a.join = w.join_text
          ? r(' <span class="tweet_join">{join_text}</span> ', a)
          : " "),
        (a.avatar = a.avatar_size
          ? r(
              '<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',
              a
            )
          : ""),
        (a.time = r(
          '<span class="tweet_time"><a href="{tweet_url}" title="">{tweet_relative_time}</a></span>',
          a
        )),
        (a.text = r('<span class="tweet_text">{tweet_text_fancy}</span>', a)),
        (a.reply_action = r(
          '<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',
          a
        )),
        (a.retweet_action = r(
          '<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',
          a
        )),
        (a.favorite_action = r(
          '<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',
          a
        )),
        a
      );
    }
    var w = e.extend(
        {
          modpath: "/twitter/",
          username: null,
          list_id: null,
          list: null,
          favorites: !1,
          query: null,
          avatar_size: null,
          count: 3,
          fetch: null,
          page: 1,
          retweets: !0,
          intro_text: null,
          outro_text: null,
          join_text: null,
          auto_join_text_default: "i said,",
          auto_join_text_ed: "i",
          auto_join_text_ing: "i am",
          auto_join_text_reply: "i replied to",
          auto_join_text_url: "i was looking at",
          loading_text: null,
          refresh_interval: null,
          twitter_url: "twitter.com",
          twitter_api_url: "api.twitter.com",
          twitter_search_url: "search.twitter.com",
          template: "{avatar}{time}{join}{text}",
          comparator: function (e, t) {
            return t.tweet_time - e.tweet_time;
          },
          filter: function () {
            return !0;
          },
        },
        t
      ),
      p =
        /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?������]))/gi;
    return (
      e.extend({ tweet: { t: r } }),
      e.fn.extend({
        linkUser: a(
          /(^|[\W])@(\w+)/gi,
          '$1<span class="at">@</span><a href="http://' +
            w.twitter_url +
            '/$2">$2</a>'
        ),
        linkHash: a(
          /(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
          ' <a href="http://' +
            w.twitter_search_url +
            "/search?q=&tag=$1&lang=all" +
            (w.username && 1 == w.username.length && !w.list
              ? "&from=" + w.username.join("%2BOR%2B")
              : "") +
            '" class="tweet_hashtag">#$1</a>'
        ),
        makeHeart: a(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>"),
      }),
      this.each(function (t, a) {
        var n = e('<ul class="tweet_list">'),
          i = '<p class="tweet_intro">' + w.intro_text + "</p>",
          s = '<p class="tweet_outro">' + w.outro_text + "</p>",
          u = e('<p class="loading">' + w.loading_text + "</p>");
        w.username &&
          "string" == typeof w.username &&
          (w.username = [w.username]),
          e(a)
            .unbind("tweet:load")
            .bind("tweet:load", function () {
              w.loading_text && e(a).empty().append(u),
                e.ajax({
                  dataType: "json",
                  type: "post",
                  async: !1,
                  url: w.modpath || "/twitter/",
                  data: { request: _() },
                  success: function (t) {
                    t.message && console.log(t.message);
                    var u = t.response;
                    e(a).empty().append(n),
                      w.intro_text && n.before(i),
                      n.empty(),
                      (resp =
                        void 0 !== u.statuses
                          ? u.statuses
                          : void 0 !== u.results
                          ? u.results
                          : u);
                    var o = e.map(resp, c);
                    (o = e
                      .grep(o, w.filter)
                      .sort(w.comparator)
                      .slice(0, w.count)),
                      n
                        .append(
                          e
                            .map(o, function (e) {
                              return "<li>" + r(w.template, e) + "</li>";
                            })
                            .join("")
                        )
                        .children("li:first")
                        .addClass("tweet_first")
                        .end()
                        .children("li:odd")
                        .addClass("tweet_even")
                        .end()
                        .children("li:even")
                        .addClass("tweet_odd"),
                      w.outro_text && n.after(s),
                      e(a)
                        .trigger("loaded")
                        .trigger(o ? "empty" : "full"),
                      w.refresh_interval &&
                        window.setTimeout(function () {
                          e(a).trigger("tweet:load");
                        }, 1e3 * w.refresh_interval);
                  },
                });
            })
            .trigger("tweet:load");
      })
    );
  };
});
