"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
	"use strict";
	"object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	} : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
	"use strict";
	var c = [],
	    d = a.document,
	    e = Object.getPrototypeOf,
	    f = c.slice,
	    g = c.concat,
	    h = c.push,
	    i = c.indexOf,
	    j = {},
	    k = j.toString,
	    l = j.hasOwnProperty,
	    m = l.toString,
	    n = m.call(Object),
	    o = {};function p(a, b) {
		b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
	}var q = "3.1.1",
	    r = function r(a, b) {
		return new r.fn.init(a, b);
	},
	    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    t = /^-ms-/,
	    u = /-([a-z])/g,
	    v = function v(a, b) {
		return b.toUpperCase();
	};r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
			return f.call(this);
		}, get: function get(a) {
			return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
		}, pushStack: function pushStack(a) {
			var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
		}, each: function each(a) {
			return r.each(this, a);
		}, map: function map(a) {
			return this.pushStack(r.map(this, function (b, c) {
				return a.call(b, c, b);
			}));
		}, slice: function slice() {
			return this.pushStack(f.apply(this, arguments));
		}, first: function first() {
			return this.eq(0);
		}, last: function last() {
			return this.eq(-1);
		}, eq: function eq(a) {
			var b = this.length,
			    c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
		}, end: function end() {
			return this.prevObject || this.constructor();
		}, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
		var a,
		    b,
		    c,
		    d,
		    e,
		    f,
		    g = arguments[0] || {},
		    h = 1,
		    i = arguments.length,
		    j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
			if (null != (a = arguments[h])) for (b in a) {
				c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
			}
		}return g;
	}, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
			throw new Error(a);
		}, noop: function noop() {}, isFunction: function isFunction(a) {
			return "function" === r.type(a);
		}, isArray: Array.isArray, isWindow: function isWindow(a) {
			return null != a && a === a.window;
		}, isNumeric: function isNumeric(a) {
			var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
		}, isPlainObject: function isPlainObject(a) {
			var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
		}, isEmptyObject: function isEmptyObject(a) {
			var b;for (b in a) {
				return !1;
			}return !0;
		}, type: function type(a) {
			return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
		}, globalEval: function globalEval(a) {
			p(a);
		}, camelCase: function camelCase(a) {
			return a.replace(t, "ms-").replace(u, v);
		}, nodeName: function nodeName(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
		}, each: function each(a, b) {
			var c,
			    d = 0;if (w(a)) {
				for (c = a.length; d < c; d++) {
					if (b.call(a[d], d, a[d]) === !1) break;
				}
			} else for (d in a) {
				if (b.call(a[d], d, a[d]) === !1) break;
			}return a;
		}, trim: function trim(a) {
			return null == a ? "" : (a + "").replace(s, "");
		}, makeArray: function makeArray(a, b) {
			var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
		}, inArray: function inArray(a, b, c) {
			return null == b ? -1 : i.call(b, a, c);
		}, merge: function merge(a, b) {
			for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
				a[e++] = b[d];
			}return a.length = e, a;
		}, grep: function grep(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
				d = !b(a[f], f), d !== h && e.push(a[f]);
			}return e;
		}, map: function map(a, b, c) {
			var d,
			    e,
			    f = 0,
			    h = [];if (w(a)) for (d = a.length; f < d; f++) {
				e = b(a[f], f, c), null != e && h.push(e);
			} else for (f in a) {
				e = b(a[f], f, c), null != e && h.push(e);
			}return g.apply([], h);
		}, guid: 1, proxy: function proxy(a, b) {
			var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
				return a.apply(b || this, d.concat(f.call(arguments)));
			}, e.guid = a.guid = a.guid || r.guid++, e;
		}, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
		j["[object " + b + "]"] = b.toLowerCase();
	});function w(a) {
		var b = !!a && "length" in a && a.length,
		    c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
	}var x = function (a) {
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
		    y = ha(),
		    z = ha(),
		    A = ha(),
		    B = function B(a, b) {
			return a === b && (l = !0), 0;
		},
		    C = {}.hasOwnProperty,
		    D = [],
		    E = D.pop,
		    F = D.push,
		    G = D.push,
		    H = D.slice,
		    I = function I(a, b) {
			for (var c = 0, d = a.length; c < d; c++) {
				if (a[c] === b) return c;
			}return -1;
		},
		    J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    K = "[\\x20\\t\\r\\n\\f]",
		    L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
		    M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
		    N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
		    O = new RegExp(K + "+", "g"),
		    P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
		    Q = new RegExp("^" + K + "*," + K + "*"),
		    R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
		    S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
		    T = new RegExp(N),
		    U = new RegExp("^" + L + "$"),
		    V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
		    W = /^(?:input|select|textarea|button)$/i,
		    X = /^h\d$/i,
		    Y = /^[^{]+\{\s*\[native \w/,
		    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    $ = /[+~]/,
		    _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
		    aa = function aa(a, b, c) {
			var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
		},
		    ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    ca = function ca(a, b) {
			return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
		},
		    da = function da() {
			m();
		},
		    ea = ta(function (a) {
			return a.disabled === !0 && ("form" in a || "label" in a);
		}, { dir: "parentNode", next: "legend" });try {
			G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
		} catch (fa) {
			G = { apply: D.length ? function (a, b) {
					F.apply(a, H.call(b));
				} : function (a, b) {
					var c = a.length,
					    d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
				} };
		}function ga(a, b, d, e) {
			var f,
			    h,
			    j,
			    k,
			    l,
			    o,
			    r,
			    s = b && b.ownerDocument,
			    w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
				if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
					if (9 === w) {
						if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
					} else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
				} else {
					if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
				}if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
					if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
						(k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
							o[h] = "#" + k + " " + sa(o[h]);
						}r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
					}if (r) try {
						return G.apply(d, s.querySelectorAll(r)), d;
					} catch (x) {} finally {
						k === u && b.removeAttribute("id");
					}
				}
			}return i(a.replace(P, "$1"), b, d, e);
		}function ha() {
			var a = [];function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
			}return b;
		}function ia(a) {
			return a[u] = !0, a;
		}function ja(a) {
			var b = n.createElement("fieldset");try {
				return !!a(b);
			} catch (c) {
				return !1;
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null;
			}
		}function ka(a, b) {
			var c = a.split("|"),
			    e = c.length;while (e--) {
				d.attrHandle[c[e]] = b;
			}
		}function la(a, b) {
			var c = b && a,
			    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
				if (c === b) return -1;
			}return a ? 1 : -1;
		}function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
			};
		}function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
			};
		}function oa(a) {
			return function (b) {
				return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
			};
		}function pa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e,
					    f = a([], c.length, b),
					    g = f.length;while (g--) {
						c[e = f[g]] && (c[e] = !(d[e] = c[e]));
					}
				});
			});
		}function qa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a;
		}c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
		}, m = ga.setDocument = function (a) {
			var b,
			    e,
			    g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className");
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
			}), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
			}), c.getById ? (d.filter.ID = function (a) {
				var b = a.replace(_, aa);return function (a) {
					return a.getAttribute("id") === b;
				};
			}, d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);return c ? [c] : [];
				}
			}) : (d.filter.ID = function (a) {
				var b = a.replace(_, aa);return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
				};
			}, d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c,
					    d,
					    e,
					    f = b.getElementById(a);if (f) {
						if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
							if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
						}
					}return [];
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
			} : function (a, b) {
				var c,
				    d = [],
				    e = 0,
				    f = b.getElementsByTagName(a);if ("*" === a) {
					while (c = f[e++]) {
						1 === c.nodeType && d.push(c);
					}return d;
				}return f;
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
			}, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
			}), ja(function (a) {
				a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
			})), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
				    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
			} : function (a, b) {
				if (b) while (b = b.parentNode) {
					if (b === a) return !0;
				}return !1;
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
			} : function (a, b) {
				if (a === b) return l = !0, 0;var c,
				    d = 0,
				    e = a.parentNode,
				    f = b.parentNode,
				    g = [a],
				    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
					g.unshift(c);
				}c = b;while (c = c.parentNode) {
					h.unshift(c);
				}while (g[d] === h[d]) {
					d++;
				}return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
			}, n) : n;
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b);
		}, ga.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
				var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
			} catch (e) {}return ga(b, n, null, [a]).length > 0;
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b);
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
			    f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
		}, ga.escape = function (a) {
			return (a + "").replace(ba, ca);
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a);
		}, ga.uniqueSort = function (a) {
			var b,
			    d = [],
			    e = 0,
			    f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) {
					b === a[f] && (e = d.push(f));
				}while (e--) {
					a.splice(d[e], 1);
				}
			}return k = null, a;
		}, e = ga.getText = function (a) {
			var b,
			    c = "",
			    d = 0,
			    f = a.nodeType;if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
						c += e(a);
					}
				} else if (3 === f || 4 === f) return a.nodeValue;
			} else while (b = a[d++]) {
				c += e(b);
			}return c;
		}, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
					return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
				}, CHILD: function CHILD(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
				}, PSEUDO: function PSEUDO(a) {
					var b,
					    c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
				} }, filter: { TAG: function TAG(a) {
					var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
						return !0;
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b;
					};
				}, CLASS: function CLASS(a) {
					var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
					});
				}, ATTR: function ATTR(a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
					};
				}, CHILD: function CHILD(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					    g = "last" !== a.slice(-4),
					    h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode;
					} : function (b, c, i) {
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
						    t = !1;if (q) {
							if (f) {
								while (p) {
									m = b;while (m = m[p]) {
										if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
									}o = p = "only" === a && !o && "nextSibling";
								}return !0;
							}if (o = [g ? q.firstChild : q.lastChild], g && s) {
								m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
									if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];break;
									}
								}
							} else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
								if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
							}return t -= e, t === d || t % d === 0 && t / d >= 0;
						}
					};
				}, PSEUDO: function PSEUDO(a, b) {
					var c,
					    e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d,
						    f = e(a, b),
						    g = f.length;while (g--) {
							d = I(a, f[g]), a[d] = !(c[d] = f[g]);
						}
					}) : function (a) {
						return e(a, 0, c);
					}) : e;
				} }, pseudos: { not: ia(function (a) {
					var b = [],
					    c = [],
					    d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
						var f,
						    g = d(a, null, e, []),
						    h = a.length;while (h--) {
							(f = g[h]) && (a[h] = !(b[h] = f));
						}
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
					};
				}), has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0;
					};
				}), contains: ia(function (a) {
					return a = a.replace(_, aa), function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
					};
				}), lang: ia(function (a) {
					return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
						var c;do {
							if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
						} while ((b = b.parentNode) && 1 === b.nodeType);return !1;
					};
				}), target: function target(b) {
					var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
				}, root: function root(a) {
					return a === o;
				}, focus: function focus(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
				}, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
				}, selected: function selected(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
				}, empty: function empty(a) {
					for (a = a.firstChild; a; a = a.nextSibling) {
						if (a.nodeType < 6) return !1;
					}return !0;
				}, parent: function parent(a) {
					return !d.pseudos.empty(a);
				}, header: function header(a) {
					return X.test(a.nodeName);
				}, input: function input(a) {
					return W.test(a.nodeName);
				}, button: function button(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
				}, text: function text(a) {
					var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
				}, first: pa(function () {
					return [0];
				}), last: pa(function (a, b) {
					return [b - 1];
				}), eq: pa(function (a, b, c) {
					return [c < 0 ? c + b : c];
				}), even: pa(function (a, b) {
					for (var c = 0; c < b; c += 2) {
						a.push(c);
					}return a;
				}), odd: pa(function (a, b) {
					for (var c = 1; c < b; c += 2) {
						a.push(c);
					}return a;
				}), lt: pa(function (a, b, c) {
					for (var d = c < 0 ? c + b : c; --d >= 0;) {
						a.push(d);
					}return a;
				}), gt: pa(function (a, b, c) {
					for (var d = c < 0 ? c + b : c; ++d < b;) {
						a.push(d);
					}return a;
				}) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
			d.pseudos[b] = ma(b);
		}for (b in { submit: !0, reset: !0 }) {
			d.pseudos[b] = na(b);
		}function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
			var c,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
				c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
					!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
				}if (!c) break;
			}return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
		};function sa(a) {
			for (var b = 0, c = a.length, d = ""; b < c; b++) {
				d += a[b].value;
			}return d;
		}function ta(a, b, c) {
			var d = b.dir,
			    e = b.next,
			    f = e || d,
			    g = c && "parentNode" === f,
			    h = x++;return b.first ? function (b, c, e) {
				while (b = b[d]) {
					if (1 === b.nodeType || g) return a(b, c, e);
				}return !1;
			} : function (b, c, i) {
				var j,
				    k,
				    l,
				    m = [w, h];if (i) {
					while (b = b[d]) {
						if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
					}
				} else while (b = b[d]) {
					if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
						if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
					}
				}return !1;
			};
		}function ua(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;while (e--) {
					if (!a[e](b, c, d)) return !1;
				}return !0;
			} : a[0];
		}function va(a, b, c) {
			for (var d = 0, e = b.length; d < e; d++) {
				ga(a, b[d], c);
			}return c;
		}function wa(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
				(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
			}return g;
		}function xa(a, b, c, d, e, f) {
			return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
				var j,
				    k,
				    l,
				    m = [],
				    n = [],
				    o = g.length,
				    p = f || va(b || "*", h.nodeType ? [h] : h, []),
				    q = !a || !f && b ? p : wa(p, m, a, h, i),
				    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
					j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
						(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
					}
				}if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;while (k--) {
								(l = r[k]) && j.push(q[k] = l);
							}e(null, r = [], j, i);
						}k = r.length;while (k--) {
							(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
						}
					}
				} else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
			});
		}function ya(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
				return a === b;
			}, h, !0), l = ta(function (a) {
				return I(b, a) > -1;
			}, h, !0), m = [function (a, c, d) {
				var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
			}]; i < f; i++) {
				if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; e < f; e++) {
							if (d.relative[a[e].type]) break;
						}return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
					}m.push(c);
				}
			}return ua(m);
		}function za(a, b) {
			var c = b.length > 0,
			    e = a.length > 0,
			    f = function f(_f, g, h, i, k) {
				var l,
				    o,
				    q,
				    r = 0,
				    s = "0",
				    t = _f && [],
				    u = [],
				    v = j,
				    x = _f || e && d.find.TAG("*", k),
				    y = w += null == v ? 1 : Math.random() || .1,
				    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
					if (e && l) {
						o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
							if (q(l, g || n, h)) {
								i.push(l);break;
							}
						}k && (w = y);
					}c && ((l = !q && l) && r--, _f && t.push(l));
				}if (r += s, c && s !== r) {
					o = 0;while (q = b[o++]) {
						q(t, u, g, h);
					}if (_f) {
						if (r > 0) while (s--) {
							t[s] || u[s] || (u[s] = E.call(i));
						}u = wa(u);
					}G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
				}return k && (w = y, j = v), t;
			};return c ? ia(f) : f;
		}return h = ga.compile = function (a, b) {
			var c,
			    d = [],
			    e = [],
			    f = A[a + " "];if (!f) {
				b || (b = g(a)), c = b.length;while (c--) {
					f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
				}f = A(a, za(e, d)), f.selector = a;
			}return f;
		}, i = ga.select = function (a, b, c, e) {
			var f,
			    i,
			    j,
			    k,
			    l,
			    m = "function" == typeof a && a,
			    n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
				if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
					if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
				}f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
					if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
						if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
					}
				}
			}return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
		}) || ka("type|href|height|width", function (a, b, c) {
			if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
		}) || ka("value", function (a, b, c) {
			if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
		}), ja(function (a) {
			return null == a.getAttribute("disabled");
		}) || ka(J, function (a, b, c) {
			var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
		}), ga;
	}(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
		var d = [],
		    e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
			if (1 === a.nodeType) {
				if (e && r(a).is(c)) break;d.push(a);
			}
		}return d;
	},
	    z = function z(a, b) {
		for (var c = []; a; a = a.nextSibling) {
			1 === a.nodeType && a !== b && c.push(a);
		}return c;
	},
	    A = r.expr.match.needsContext,
	    B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
	    C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
		return r.isFunction(b) ? r.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c;
		}) : b.nodeType ? r.grep(a, function (a) {
			return a === b !== c;
		}) : "string" != typeof b ? r.grep(a, function (a) {
			return i.call(b, a) > -1 !== c;
		}) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
			return i.call(b, a) > -1 !== c && 1 === a.nodeType;
		}));
	}r.filter = function (a, b, c) {
		var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
			return 1 === a.nodeType;
		}));
	}, r.fn.extend({ find: function find(a) {
			var b,
			    c,
			    d = this.length,
			    e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
				for (b = 0; b < d; b++) {
					if (r.contains(e[b], this)) return !0;
				}
			}));for (c = this.pushStack([]), b = 0; b < d; b++) {
				r.find(a, e[b], c);
			}return d > 1 ? r.uniqueSort(c) : c;
		}, filter: function filter(a) {
			return this.pushStack(D(this, a || [], !1));
		}, not: function not(a) {
			return this.pushStack(D(this, a || [], !0));
		}, is: function is(a) {
			return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
		} });var E,
	    F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    G = r.fn.init = function (a, b, c) {
		var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
			if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
				if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
					r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
				}return this;
			}return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
		}return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
	};G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
	    I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
			var b = r(a, this),
			    c = b.length;return this.filter(function () {
				for (var a = 0; a < c; a++) {
					if (r.contains(this, b[a])) return !0;
				}
			});
		}, closest: function closest(a, b) {
			var c,
			    d = 0,
			    e = this.length,
			    f = [],
			    g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
				for (c = this[d]; c && c !== b; c = c.parentNode) {
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
						f.push(c);break;
					}
				}
			}return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
		}, index: function index(a) {
			return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function add(a, b) {
			return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
		}, addBack: function addBack(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
		} });function J(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	}r.each({ parent: function parent(a) {
			var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
		}, parents: function parents(a) {
			return y(a, "parentNode");
		}, parentsUntil: function parentsUntil(a, b, c) {
			return y(a, "parentNode", c);
		}, next: function next(a) {
			return J(a, "nextSibling");
		}, prev: function prev(a) {
			return J(a, "previousSibling");
		}, nextAll: function nextAll(a) {
			return y(a, "nextSibling");
		}, prevAll: function prevAll(a) {
			return y(a, "previousSibling");
		}, nextUntil: function nextUntil(a, b, c) {
			return y(a, "nextSibling", c);
		}, prevUntil: function prevUntil(a, b, c) {
			return y(a, "previousSibling", c);
		}, siblings: function siblings(a) {
			return z((a.parentNode || {}).firstChild, a);
		}, children: function children(a) {
			return z(a.firstChild);
		}, contents: function contents(a) {
			return a.contentDocument || r.merge([], a.childNodes);
		} }, function (a, b) {
		r.fn[a] = function (c, d) {
			var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
		};
	});var K = /[^\x20\t\r\n\f]+/g;function L(a) {
		var b = {};return r.each(a.match(K) || [], function (a, c) {
			b[c] = !0;
		}), b;
	}r.Callbacks = function (a) {
		a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
		    c,
		    d,
		    e,
		    f = [],
		    g = [],
		    h = -1,
		    i = function i() {
			for (e = a.once, d = b = !0; g.length; h = -1) {
				c = g.shift();while (++h < f.length) {
					f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
				}
			}a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
		},
		    j = { add: function add() {
				return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
					r.each(b, function (b, c) {
						r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
					});
				}(arguments), c && !b && i()), this;
			}, remove: function remove() {
				return r.each(arguments, function (a, b) {
					var c;while ((c = r.inArray(b, f, c)) > -1) {
						f.splice(c, 1), c <= h && h--;
					}
				}), this;
			}, has: function has(a) {
				return a ? r.inArray(a, f) > -1 : f.length > 0;
			}, empty: function empty() {
				return f && (f = []), this;
			}, disable: function disable() {
				return e = g = [], f = c = "", this;
			}, disabled: function disabled() {
				return !f;
			}, lock: function lock() {
				return e = g = [], c || b || (f = c = ""), this;
			}, locked: function locked() {
				return !!e;
			}, fireWith: function fireWith(a, c) {
				return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
			}, fire: function fire() {
				return j.fireWith(this, arguments), this;
			}, fired: function fired() {
				return !!d;
			} };return j;
	};function M(a) {
		return a;
	}function N(a) {
		throw a;
	}function O(a, b, c) {
		var d;try {
			a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
		} catch (a) {
			c.call(void 0, a);
		}
	}r.extend({ Deferred: function Deferred(b) {
			var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
			    d = "pending",
			    e = { state: function state() {
					return d;
				}, always: function always() {
					return f.done(arguments).fail(arguments), this;
				}, "catch": function _catch(a) {
					return e.then(null, a);
				}, pipe: function pipe() {
					var a = arguments;return r.Deferred(function (b) {
						r.each(c, function (c, d) {
							var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
								var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
							});
						}), a = null;
					}).promise();
				}, then: function then(b, d, e) {
					var f = 0;function g(b, c, d, e) {
						return function () {
							var h = this,
							    i = arguments,
							    j = function j() {
								var a, j;if (!(b < f)) {
									if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
								}
							},
							    k = e ? j : function () {
								try {
									j();
								} catch (a) {
									r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
								}
							};b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
						};
					}return r.Deferred(function (a) {
						c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
					}).promise();
				}, promise: function promise(a) {
					return null != a ? r.extend(a, e) : e;
				} },
			    f = {};return r.each(c, function (a, b) {
				var g = b[2],
				    h = b[5];e[b[1]] = g.add, h && g.add(function () {
					d = h;
				}, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
					return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
				}, f[b[0] + "With"] = g.fireWith;
			}), e.promise(f), b && b.call(f, f), f;
		}, when: function when(a) {
			var b = arguments.length,
			    c = b,
			    d = Array(c),
			    e = f.call(arguments),
			    g = r.Deferred(),
			    h = function h(a) {
				return function (c) {
					d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
				};
			};if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
				O(e[c], h(c), g.reject);
			}return g.promise();
		} });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
		a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
	}, r.readyException = function (b) {
		a.setTimeout(function () {
			throw b;
		});
	};var Q = r.Deferred();r.fn.ready = function (a) {
		return Q.then(a)["catch"](function (a) {
			r.readyException(a);
		}), this;
	}, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
			a ? r.readyWait++ : r.ready(!0);
		}, ready: function ready(a) {
			(a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
		} }), r.ready.then = Q.then;function R() {
		d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
	}"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
		var h = 0,
		    i = a.length,
		    j = null == c;if ("object" === r.type(c)) {
			e = !0;for (h in c) {
				S(a, b, h, c[h], !0, f, g);
			}
		} else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
			return j.call(r(a), c);
		})), b)) for (; h < i; h++) {
			b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		}return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	},
	    T = function T(a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	};function U() {
		this.expando = r.expando + U.uid++;
	}U.uid = 1, U.prototype = { cache: function cache(a) {
			var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
		}, set: function set(a, b, c) {
			var d,
			    e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
				e[r.camelCase(d)] = b[d];
			}return e;
		}, get: function get(a, b) {
			return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
		}, access: function access(a, b, c) {
			return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
		}, remove: function remove(a, b) {
			var c,
			    d = a[this.expando];if (void 0 !== d) {
				if (void 0 !== b) {
					r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
						delete d[b[c]];
					}
				}(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
			}
		}, hasData: function hasData(a) {
			var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
		} };var V = new U(),
	    W = new U(),
	    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    Y = /[A-Z]/g;function Z(a) {
		return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a);
	}function $(a, b, c) {
		var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
			try {
				c = Z(c);
			} catch (e) {}W.set(a, b, c);
		} else c = void 0;return c;
	}r.extend({ hasData: function hasData(a) {
			return W.hasData(a) || V.hasData(a);
		}, data: function data(a, b, c) {
			return W.access(a, b, c);
		}, removeData: function removeData(a, b) {
			W.remove(a, b);
		}, _data: function _data(a, b, c) {
			return V.access(a, b, c);
		}, _removeData: function _removeData(a, b) {
			V.remove(a, b);
		} }), r.fn.extend({ data: function data(a, b) {
			var c,
			    d,
			    e,
			    f = this[0],
			    g = f && f.attributes;if (void 0 === a) {
				if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
					c = g.length;while (c--) {
						g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
					}V.set(f, "hasDataAttrs", !0);
				}return e;
			}return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
				W.set(this, a);
			}) : S(this, function (b) {
				var c;if (f && void 0 === b) {
					if (c = W.get(f, a), void 0 !== c) return c;if (c = $(f, a), void 0 !== c) return c;
				} else this.each(function () {
					W.set(this, a, b);
				});
			}, null, b, arguments.length > 1, null, !0);
		}, removeData: function removeData(a) {
			return this.each(function () {
				W.remove(this, a);
			});
		} }), r.extend({ queue: function queue(a, b, c) {
			var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
		}, dequeue: function dequeue(a, b) {
			b = b || "fx";var c = r.queue(a, b),
			    d = c.length,
			    e = c.shift(),
			    f = r._queueHooks(a, b),
			    g = function g() {
				r.dequeue(a, b);
			};"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
		}, _queueHooks: function _queueHooks(a, b) {
			var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
					V.remove(a, [b + "queue", c]);
				}) });
		} }), r.fn.extend({ queue: function queue(a, b) {
			var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
			});
		}, dequeue: function dequeue(a) {
			return this.each(function () {
				r.dequeue(this, a);
			});
		}, clearQueue: function clearQueue(a) {
			return this.queue(a || "fx", []);
		}, promise: function promise(a, b) {
			var c,
			    d = 1,
			    e = r.Deferred(),
			    f = this,
			    g = this.length,
			    h = function h() {
				--d || e.resolveWith(f, [f]);
			};"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
				c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			}return h(), e.promise(b);
		} });var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
	    ba = ["Top", "Right", "Bottom", "Left"],
	    ca = function ca(a, b) {
		return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
	},
	    da = function da(a, b, c, d) {
		var e,
		    f,
		    g = {};for (f in b) {
			g[f] = a.style[f], a.style[f] = b[f];
		}e = c.apply(a, d || []);for (f in b) {
			a.style[f] = g[f];
		}return e;
	};function ea(a, b, c, d) {
		var e,
		    f = 1,
		    g = 20,
		    h = d ? function () {
			return d.cur();
		} : function () {
			return r.css(a, b, "");
		},
		    i = h(),
		    j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
		    k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;do {
				f = f || ".5", k /= f, r.style(a, b, k + j);
			} while (f !== (f = h() / i) && 1 !== f && --g);
		}return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	}var fa = {};function ga(a) {
		var b,
		    c = a.ownerDocument,
		    d = a.nodeName,
		    e = fa[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e);
	}function ha(a, b) {
		for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
			d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
		}for (f = 0; f < g; f++) {
			null != e[f] && (a[f].style.display = e[f]);
		}return a;
	}r.fn.extend({ show: function show() {
			return ha(this, !0);
		}, hide: function hide() {
			return ha(this);
		}, toggle: function toggle(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				ca(this) ? r(this).show() : r(this).hide();
			});
		} });var ia = /^(?:checkbox|radio)$/i,
	    ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
	    ka = /^$|\/(?:java|ecma)script/i,
	    la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;function ma(a, b) {
		var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
	}function na(a, b) {
		for (var c = 0, d = a.length; c < d; c++) {
			V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
		}
	}var oa = /<|&#?\w+;/;function pa(a, b, c, d, e) {
		for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
			if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (oa.test(f)) {
				g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
					g = g.lastChild;
				}r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
			} else m.push(b.createTextNode(f));
		}l.textContent = "", n = 0;while (f = m[n++]) {
			if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
				k = 0;while (f = g[k++]) {
					ka.test(f.type || "") && c.push(f);
				}
			}
		}return l;
	}!function () {
		var a = d.createDocumentFragment(),
		    b = a.appendChild(d.createElement("div")),
		    c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	}();var qa = d.documentElement,
	    ra = /^key/,
	    sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    ta = /^([^.]*)(?:\.(.+)|)/;function ua() {
		return !0;
	}function va() {
		return !1;
	}function wa() {
		try {
			return d.activeElement;
		} catch (a) {}
	}function xa(a, b, c, d, e, f) {
		var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
			"string" != typeof c && (d = d || c, c = void 0);for (h in b) {
				xa(a, h, c, d, b[h], f);
			}return a;
		}if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
			return r().off(a), g.apply(this, arguments);
		}, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
			r.event.add(this, b, e, d, c);
		});
	}r.event = { global: {}, add: function add(a, b, c, d, e) {
			var f,
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
			    q = V.get(a);if (q) {
				c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
					return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
				}), b = (b || "").match(K) || [""], j = b.length;while (j--) {
					h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
				}
			}
		}, remove: function remove(a, b, c, d, e) {
			var f,
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
			    q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
				b = (b || "").match(K) || [""], j = b.length;while (j--) {
					if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
							k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						}g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
					} else for (n in i) {
						r.event.remove(a, n + b[j], c, d, !0);
					}
				}r.isEmptyObject(i) && V.remove(a, "handle events");
			}
		}, dispatch: function dispatch(a) {
			var b = r.event.fix(a),
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = new Array(arguments.length),
			    j = (V.get(this, "events") || {})[b.type] || [],
			    k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
				i[c] = arguments[c];
			}if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
				h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
					b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
						b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
					}
				}return k.postDispatch && k.postDispatch.call(this, b), b.result;
			}
		}, handlers: function handlers(a, b) {
			var c,
			    d,
			    e,
			    f,
			    g,
			    h = [],
			    i = b.delegateCount,
			    j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
				if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
					for (f = [], g = {}, c = 0; c < i; c++) {
						d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
					}f.length && h.push({ elem: j, handlers: f });
				}
			}return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
		}, addProp: function addProp(a, b) {
			Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
					if (this.originalEvent) return b(this.originalEvent);
				} : function () {
					if (this.originalEvent) return this.originalEvent[a];
				}, set: function set(b) {
					Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
				} });
		}, fix: function fix(a) {
			return a[r.expando] ? a : new r.Event(a);
		}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
					if (this !== wa() && this.focus) return this.focus(), !1;
				}, delegateType: "focusin" }, blur: { trigger: function trigger() {
					if (this === wa() && this.blur) return this.blur(), !1;
				}, delegateType: "focusout" }, click: { trigger: function trigger() {
					if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
				}, _default: function _default(a) {
					return r.nodeName(a.target, "a");
				} }, beforeunload: { postDispatch: function postDispatch(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
				} } } }, r.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c);
	}, r.Event = function (a, b) {
		return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
	}, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function preventDefault() {
			var a = this.originalEvent;this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault();
		}, stopPropagation: function stopPropagation() {
			var a = this.originalEvent;this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation();
		}, stopImmediatePropagation: function stopImmediatePropagation() {
			var a = this.originalEvent;this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
		} }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
			var b = a.button;return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
		} }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
		r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
				var c,
				    d = this,
				    e = a.relatedTarget,
				    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
			} };
	}), r.fn.extend({ on: function on(a, b, c, d) {
			return xa(this, a, b, c, d);
		}, one: function one(a, b, c, d) {
			return xa(this, a, b, c, d, 1);
		}, off: function off(a, b, c) {
			var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
				for (e in a) {
					this.off(e, b, a[e]);
				}return this;
			}return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
				r.event.remove(this, a, c, b);
			});
		} });var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	    za = /<script|<style|<link/i,
	    Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    Ba = /^true\/(.*)/,
	    Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a, b) {
		return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
	}function Ea(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	}function Fa(a) {
		var b = Ba.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	}function Ga(a, b) {
		var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
			if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};for (e in j) {
					for (c = 0, d = j[e].length; c < d; c++) {
						r.event.add(b, e, j[e][c]);
					}
				}
			}W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
		}
	}function Ha(a, b) {
		var c = b.nodeName.toLowerCase();"input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	}function Ia(a, b, c, d) {
		b = g.apply([], b);var e,
		    f,
		    h,
		    i,
		    j,
		    k,
		    l = 0,
		    m = a.length,
		    n = m - 1,
		    q = b[0],
		    s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
			var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d);
		});if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
			for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) {
				j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
			}if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) {
				j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
			}
		}return a;
	}function Ja(a, b, c) {
		for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
			c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
		}return a;
	}r.extend({ htmlPrefilter: function htmlPrefilter(a) {
			return a.replace(ya, "<$1></$2>");
		}, clone: function clone(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.cloneNode(!0),
			    i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) {
				Ha(f[d], g[d]);
			}if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) {
				Ga(f[d], g[d]);
			} else Ga(a, h);return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h;
		}, cleanData: function cleanData(a) {
			for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
				if (T(c)) {
					if (b = c[V.expando]) {
						if (b.events) for (d in b.events) {
							e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
						}c[V.expando] = void 0;
					}c[W.expando] && (c[W.expando] = void 0);
				}
			}
		} }), r.fn.extend({ detach: function detach(a) {
			return Ja(this, a, !0);
		}, remove: function remove(a) {
			return Ja(this, a);
		}, text: function text(a) {
			return S(this, function (a) {
				return void 0 === a ? r.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
				});
			}, null, a, arguments.length);
		}, append: function append() {
			return Ia(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Da(this, a);b.appendChild(a);
				}
			});
		}, prepend: function prepend() {
			return Ia(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Da(this, a);b.insertBefore(a, b.firstChild);
				}
			});
		}, before: function before() {
			return Ia(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this);
			});
		}, after: function after() {
			return Ia(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
			});
		}, empty: function empty() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
			}return this;
		}, clone: function clone(a, b) {
			return a = null != a && a, b = null == b ? a : b, this.map(function () {
				return r.clone(this, a, b);
			});
		}, html: function html(a) {
			return S(this, function (a) {
				var b = this[0] || {},
				    c = 0,
				    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = r.htmlPrefilter(a);try {
						for (; c < d; c++) {
							b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
						}b = 0;
					} catch (e) {}
				}b && this.empty().append(a);
			}, null, a, arguments.length);
		}, replaceWith: function replaceWith() {
			var a = [];return Ia(this, arguments, function (b) {
				var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this));
			}, a);
		} }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
		r.fn[a] = function (a) {
			for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
				c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
			}return this.pushStack(d);
		};
	});var Ka = /^margin/,
	    La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
	    Ma = function Ma(b) {
		var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
	};!function () {
		function b() {
			if (i) {
				i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null;
			}
		}var c,
		    e,
		    f,
		    g,
		    h = d.createElement("div"),
		    i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
				return b(), c;
			}, boxSizingReliable: function boxSizingReliable() {
				return b(), e;
			}, pixelMarginRight: function pixelMarginRight() {
				return b(), f;
			}, reliableMarginLeft: function reliableMarginLeft() {
				return b(), g;
			} }));
	}();function Na(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.style;return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	}function Oa(a, b) {
		return { get: function get() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments);
			} };
	}var Pa = /^(none|table(?!-c[ea]).+)/,
	    Qa = { position: "absolute", visibility: "hidden", display: "block" },
	    Ra = { letterSpacing: "0", fontWeight: "400" },
	    Sa = ["Webkit", "Moz", "ms"],
	    Ta = d.createElement("div").style;function Ua(a) {
		if (a in Ta) return a;var b = a[0].toUpperCase() + a.slice(1),
		    c = Sa.length;while (c--) {
			if (a = Sa[c] + b, a in Ta) return a;
		}
	}function Va(a, b, c) {
		var d = aa.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
	}function Wa(a, b, c, d, e) {
		var f,
		    g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
			"margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
		}return g;
	}function Xa(a, b, c) {
		var d,
		    e = !0,
		    f = Ma(a),
		    g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
			if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
		}return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px";
	}r.extend({ cssHooks: { opacity: { get: function get(a, b) {
					if (b) {
						var c = Na(a, "opacity");return "" === c ? "1" : c;
					}
				} } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e,
				    f,
				    g,
				    h = r.camelCase(b),
				    i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
			}
		}, css: function css(a, b, c, d) {
			var e,
			    f,
			    g,
			    h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
		} }), r.each(["height", "width"], function (a, b) {
		r.cssHooks[b] = { get: function get(a, c, d) {
				if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
					return Xa(a, b, d);
				});
			}, set: function set(a, c, d) {
				var e,
				    f = d && Ma(a),
				    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g);
			} };
	}), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
		if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () {
			return a.getBoundingClientRect().left;
		})) + "px";
	}), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
		r.cssHooks[a + b] = { expand: function expand(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
					e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
				}return e;
			} }, Ka.test(a) || (r.cssHooks[a + b].set = Va);
	}), r.fn.extend({ css: function css(a, b) {
			return S(this, function (a, b, c) {
				var d,
				    e,
				    f = {},
				    g = 0;if (r.isArray(b)) {
					for (d = Ma(a), e = b.length; g < e; g++) {
						f[b[g]] = r.css(a, b[g], !1, d);
					}return f;
				}return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
			}, a, b, arguments.length > 1);
		} });function Ya(a, b, c, d, e) {
		return new Ya.prototype.init(a, b, c, d, e);
	}r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function init(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
		}, cur: function cur() {
			var a = Ya.propHooks[this.prop];return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
		}, run: function run(a) {
			var b,
			    c = Ya.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this;
		} }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function get(a) {
				var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
			}, set: function set(a) {
				r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
			} } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function set(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
		} }, r.easing = { linear: function linear(a) {
			return a;
		}, swing: function swing(a) {
			return .5 - Math.cos(a * Math.PI) / 2;
		}, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};var Za,
	    $a,
	    _a = /^(?:toggle|show|hide)$/,
	    ab = /queueHooks$/;function bb() {
		$a && (a.requestAnimationFrame(bb), r.fx.tick());
	}function cb() {
		return a.setTimeout(function () {
			Za = void 0;
		}), Za = r.now();
	}function db(a, b) {
		var c,
		    d = 0,
		    e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
			c = ba[d], e["margin" + c] = e["padding" + c] = a;
		}return b && (e.opacity = e.width = a), e;
	}function eb(a, b, c) {
		for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
			if (d = e[f].call(c, b, a)) return d;
		}
	}function fb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l = "width" in b || "height" in b,
		    m = this,
		    n = {},
		    o = a.style,
		    p = a.nodeType && ca(a),
		    q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
			g.unqueued || h();
		}), g.unqueued++, m.always(function () {
			m.always(function () {
				g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
			});
		}));for (d in b) {
			if (e = b[d], _a.test(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
				}n[d] = q && q[d] || r.style(a, d);
			}
		}if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
			l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
				o.display = j;
			}), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
				o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
			})), i = !1;for (d in n) {
				i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
					p || ha([a]), V.remove(a, "fxshow");for (d in n) {
						r.style(a, d, n[d]);
					}
				})), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
			}
		}
	}function gb(a, b) {
		var c, d, e, f, g;for (c in a) {
			if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];for (c in f) {
					c in a || (a[c] = f[c], b[c] = e);
				}
			} else b[d] = e;
		}
	}function hb(a, b, c) {
		var d,
		    e,
		    f = 0,
		    g = hb.prefilters.length,
		    h = r.Deferred().always(function () {
			delete i.elem;
		}),
		    i = function i() {
			if (e) return !1;for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
				j.tweens[g].run(f);
			}return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
		},
		    j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
				var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
			}, stop: function stop(b) {
				var c = 0,
				    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
					j.tweens[c].run(1);
				}return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
			} }),
		    k = j.props;for (gb(k, j.opts.specialEasing); f < g; f++) {
			if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
		}return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	}r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) {
				var c = this.createTween(a, b);return ea(c.elem, a, aa.exec(b), c), c;
			}] }, tweener: function tweener(a, b) {
			r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) {
				c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b);
			}
		}, prefilters: [fb], prefilter: function prefilter(a, b) {
			b ? hb.prefilters.unshift(a) : hb.prefilters.push(a);
		} }), r.speed = function (a, b, c) {
		var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
			r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
		}, e;
	}, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
			return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
		}, animate: function animate(a, b, c, d) {
			var e = r.isEmptyObject(a),
			    f = r.speed(b, c, d),
			    g = function g() {
				var b = hb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
			};return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
		}, stop: function stop(a, b, c) {
			var d = function d(a) {
				var b = a.stop;delete a.stop, b(c);
			};return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
				    e = null != a && a + "queueHooks",
				    f = r.timers,
				    g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
					g[e] && g[e].stop && ab.test(e) && d(g[e]);
				}for (e = f.length; e--;) {
					f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				}!b && c || r.dequeue(this, a);
			});
		}, finish: function finish(a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b,
				    c = V.get(this),
				    d = c[a + "queue"],
				    e = c[a + "queueHooks"],
				    f = r.timers,
				    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
					f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				}for (b = 0; b < g; b++) {
					d[b] && d[b].finish && d[b].finish.call(this);
				}delete c.finish;
			});
		} }), r.each(["toggle", "show", "hide"], function (a, b) {
		var c = r.fn[b];r.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e);
		};
	}), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
		r.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d);
		};
	}), r.timers = [], r.fx.tick = function () {
		var a,
		    b = 0,
		    c = r.timers;for (Za = r.now(); b < c.length; b++) {
			a = c[b], a() || c[b] !== a || c.splice(b--, 1);
		}c.length || r.fx.stop(), Za = void 0;
	}, r.fx.timer = function (a) {
		r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
	}, r.fx.interval = 13, r.fx.start = function () {
		$a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval));
	}, r.fx.stop = function () {
		a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null;
	}, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
		return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
			var e = a.setTimeout(c, b);d.stop = function () {
				a.clearTimeout(e);
			};
		});
	}, function () {
		var a = d.createElement("input"),
		    b = d.createElement("select"),
		    c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
	}();var ib,
	    jb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
			return S(this, r.attr, a, b, arguments.length > 1);
		}, removeAttr: function removeAttr(a) {
			return this.each(function () {
				r.removeAttr(this, a);
			});
		} }), r.extend({ attr: function attr(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
		}, attrHooks: { type: { set: function set(a, b) {
					if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
						var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
					}
				} } }, removeAttr: function removeAttr(a, b) {
			var c,
			    d = 0,
			    e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
				a.removeAttribute(c);
			}
		} }), ib = { set: function set(a, b, c) {
			return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
		} }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = jb[b] || r.find.attr;jb[b] = function (a, b, d) {
			var e,
			    f,
			    g = b.toLowerCase();return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e;
		};
	});var kb = /^(?:input|select|textarea|button)$/i,
	    lb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
			return S(this, r.prop, a, b, arguments.length > 1);
		}, removeProp: function removeProp(a) {
			return this.each(function () {
				delete this[r.propFix[a] || a];
			});
		} }), r.extend({ prop: function prop(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
		}, propHooks: { tabIndex: { get: function get(a) {
					var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1;
				} } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
			var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
		}, set: function set(a) {
			var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
		} }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		r.propFix[this.toLowerCase()] = this;
	});function mb(a) {
		var b = a.match(K) || [];return b.join(" ");
	}function nb(a) {
		return a.getAttribute && a.getAttribute("class") || "";
	}r.fn.extend({ addClass: function addClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = 0;if (r.isFunction(a)) return this.each(function (b) {
				r(this).addClass(a.call(this, b, nb(this)));
			});if ("string" == typeof a && a) {
				b = a.match(K) || [];while (c = this[i++]) {
					if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
						g = 0;while (f = b[g++]) {
							d.indexOf(" " + f + " ") < 0 && (d += f + " ");
						}h = mb(d), e !== h && c.setAttribute("class", h);
					}
				}
			}return this;
		}, removeClass: function removeClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = 0;if (r.isFunction(a)) return this.each(function (b) {
				r(this).removeClass(a.call(this, b, nb(this)));
			});if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
				b = a.match(K) || [];while (c = this[i++]) {
					if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
						g = 0;while (f = b[g++]) {
							while (d.indexOf(" " + f + " ") > -1) {
								d = d.replace(" " + f + " ", " ");
							}
						}h = mb(d), e !== h && c.setAttribute("class", h);
					}
				}
			}return this;
		}, toggleClass: function toggleClass(a, b) {
			var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
				r(this).toggleClass(a.call(this, c, nb(this), b), b);
			}) : this.each(function () {
				var b, d, e, f;if ("string" === c) {
					d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
						e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
					}
				} else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
			});
		}, hasClass: function hasClass(a) {
			var b,
			    c,
			    d = 0;b = " " + a + " ";while (c = this[d++]) {
				if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
			}return !1;
		} });var ob = /\r/g;r.fn.extend({ val: function val(a) {
			var b,
			    c,
			    d,
			    e = this[0];{
				if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
					var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
						return null == a ? "" : a + "";
					})), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
				});if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
			}
		} }), r.extend({ valHooks: { option: { get: function get(a) {
					var b = r.find.attr(a, "value");return null != b ? b : mb(r.text(a));
				} }, select: { get: function get(a) {
					var b,
					    c,
					    d,
					    e = a.options,
					    f = a.selectedIndex,
					    g = "select-one" === a.type,
					    h = g ? null : [],
					    i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
						if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
							if (b = r(c).val(), g) return b;h.push(b);
						}
					}return h;
				}, set: function set(a, b) {
					var c,
					    d,
					    e = a.options,
					    f = r.makeArray(b),
					    g = e.length;while (g--) {
						d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
					}return c || (a.selectedIndex = -1), f;
				} } } }), r.each(["radio", "checkbox"], function () {
		r.valHooks[this] = { set: function set(a, b) {
				if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
			} }, o.checkOn || (r.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value;
		});
	});var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
			var g,
			    h,
			    i,
			    j,
			    k,
			    m,
			    n,
			    o = [e || d],
			    p = l.call(b, "type") ? b.type : b,
			    q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
				if (!f && !n.noBubble && !r.isWindow(e)) {
					for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
						o.push(h), i = h;
					}i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
				}g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
					b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
				}return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
			}
		}, simulate: function simulate(a, b, c) {
			var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
		} }), r.fn.extend({ trigger: function trigger(a, b) {
			return this.each(function () {
				r.event.trigger(a, b, this);
			});
		}, triggerHandler: function triggerHandler(a, b) {
			var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
		} }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
		r.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
		};
	}), r.fn.extend({ hover: function hover(a, b) {
			return this.mouseenter(a).mouseleave(b || a);
		} }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
		var c = function c(a) {
			r.event.simulate(b, a.target, r.event.fix(a));
		};r.event.special[b] = { setup: function setup() {
				var d = this.ownerDocument || this,
				    e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
			}, teardown: function teardown() {
				var d = this.ownerDocument || this,
				    e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
			} };
	});var qb = a.location,
	    rb = r.now(),
	    sb = /\?/;r.parseXML = function (b) {
		var c;if (!b || "string" != typeof b) return null;try {
			c = new a.DOMParser().parseFromString(b, "text/xml");
		} catch (d) {
			c = void 0;
		}return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
	};var tb = /\[\]$/,
	    ub = /\r?\n/g,
	    vb = /^(?:submit|button|image|reset|file)$/i,
	    wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
		var e;if (r.isArray(b)) r.each(b, function (b, e) {
			c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
		});else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
			xb(a + "[" + e + "]", b[e], c, d);
		}
	}r.param = function (a, b) {
		var c,
		    d = [],
		    e = function e(a, b) {
			var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
		};if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
			e(this.name, this.value);
		});else for (c in a) {
			xb(c, a[c], b, e);
		}return d.join("&");
	}, r.fn.extend({ serialize: function serialize() {
			return r.param(this.serializeArray());
		}, serializeArray: function serializeArray() {
			return this.map(function () {
				var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
			}).filter(function () {
				var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a));
			}).map(function (a, b) {
				var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
					return { name: b.name, value: a.replace(ub, "\r\n") };
				}) : { name: b.name, value: c.replace(ub, "\r\n") };
			}).get();
		} });var yb = /%20/g,
	    zb = /#.*$/,
	    Ab = /([?&])_=[^&]*/,
	    Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    Db = /^(?:GET|HEAD)$/,
	    Eb = /^\/\//,
	    Fb = {},
	    Gb = {},
	    Hb = "*/".concat("*"),
	    Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");var d,
			    e = 0,
			    f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
				"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
			}
		};
	}function Kb(a, b, c, d) {
		var e = {},
		    f = a === Gb;function g(h) {
			var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
			}), i;
		}return g(b.dataTypes[0]) || !e["*"] && g("*");
	}function Lb(a, b) {
		var c,
		    d,
		    e = r.ajaxSettings.flatOptions || {};for (c in b) {
			void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		}return d && r.extend(!0, a, d), a;
	}function Mb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.contents,
		    i = a.dataTypes;while ("*" === i[0]) {
			i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		}if (d) for (e in h) {
			if (h[e] && h[e].test(d)) {
				i.unshift(e);break;
			}
		}if (i[0] in c) f = i[0];else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;break;
				}g || (g = e);
			}f = f || g;
		}if (f) return f !== i[0] && i.unshift(f), c[f];
	}function Nb(a, b, c, d) {
		var e,
		    f,
		    g,
		    h,
		    i,
		    j = {},
		    k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
			j[g.toLowerCase()] = a.converters[g];
		}f = k.shift();while (f) {
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
				if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
					}
				}if (g !== !0) if (g && a["throws"]) b = g(b);else try {
					b = g(b);
				} catch (l) {
					return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
				}
			}
		}return { state: "success", data: b };
	}r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
			return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
		}, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
			"object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    n,
			    o = r.ajaxSetup({}, c),
			    p = o.context || o,
			    q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
			    s = r.Deferred(),
			    t = r.Callbacks("once memory"),
			    u = o.statusCode || {},
			    v = {},
			    w = {},
			    x = "canceled",
			    y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
					var b;if (k) {
						if (!h) {
							h = {};while (b = Bb.exec(g)) {
								h[b[1].toLowerCase()] = b[2];
							}
						}b = h[a.toLowerCase()];
					}return null == b ? null : b;
				}, getAllResponseHeaders: function getAllResponseHeaders() {
					return k ? g : null;
				}, setRequestHeader: function setRequestHeader(a, b) {
					return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
				}, overrideMimeType: function overrideMimeType(a) {
					return null == k && (o.mimeType = a), this;
				}, statusCode: function statusCode(a) {
					var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
						u[b] = [u[b], a[b]];
					}return this;
				}, abort: function abort(a) {
					var b = a || x;return e && e.abort(b), A(0, b), this;
				} };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
				j = d.createElement("a");try {
					j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
				} catch (z) {
					o.crossDomain = !0;
				}
			}if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
				y.setRequestHeader(m, o.headers[m]);
			}if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
				if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
					y.abort("timeout");
				}, o.timeout));try {
					k = !1, e.send(v, A);
				} catch (z) {
					if (k) throw z;A(-1, z);
				}
			} else A(-1, "No Transport");function A(b, c, d, h) {
				var j,
				    m,
				    n,
				    v,
				    w,
				    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
			}return y;
		}, getJSON: function getJSON(a, b, c) {
			return r.get(a, b, c, "json");
		}, getScript: function getScript(a, b) {
			return r.get(a, void 0, b, "script");
		} }), r.each(["get", "post"], function (a, b) {
		r[b] = function (a, c, d, e) {
			return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
		};
	}), r._evalUrl = function (a) {
		return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
	}, r.fn.extend({ wrapAll: function wrapAll(a) {
			var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;while (a.firstElementChild) {
					a = a.firstElementChild;
				}return a;
			}).append(this)), this;
		}, wrapInner: function wrapInner(a) {
			return r.isFunction(a) ? this.each(function (b) {
				r(this).wrapInner(a.call(this, b));
			}) : this.each(function () {
				var b = r(this),
				    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
			});
		}, wrap: function wrap(a) {
			var b = r.isFunction(a);return this.each(function (c) {
				r(this).wrapAll(b ? a.call(this, c) : a);
			});
		}, unwrap: function unwrap(a) {
			return this.parent(a).not("body").each(function () {
				r(this).replaceWith(this.childNodes);
			}), this;
		} }), r.expr.pseudos.hidden = function (a) {
		return !r.expr.pseudos.visible(a);
	}, r.expr.pseudos.visible = function (a) {
		return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
	}, r.ajaxSettings.xhr = function () {
		try {
			return new a.XMLHttpRequest();
		} catch (b) {}
	};var Ob = { 0: 200, 1223: 204 },
	    Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
		var _c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
				var g,
				    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
					h[g] = b.xhrFields[g];
				}b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
					h.setRequestHeader(g, e[g]);
				}_c = function c(a) {
					return function () {
						_c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
					};
				}, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
					4 === h.readyState && a.setTimeout(function () {
						_c && d();
					});
				}, _c = _c("abort");try {
					h.send(b.hasContent && b.data || null);
				} catch (i) {
					if (_c) throw i;
				}
			}, abort: function abort() {
				_c && _c();
			} };
	}), r.ajaxPrefilter(function (a) {
		a.crossDomain && (a.contents.script = !1);
	}), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
				return r.globalEval(a), a;
			} } }), r.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	}), r.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, _c2;return { send: function send(e, f) {
					b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
						b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
					}), d.head.appendChild(b[0]);
				}, abort: function abort() {
					_c2 && _c2();
				} };
		}
	});var Qb = [],
	    Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
			var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
		} }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e,
		    f,
		    g,
		    h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || r.error(e + " was not called"), g[0];
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments;
		}, d.always(function () {
			void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
		}), "script";
	}), o.createHTMLDocument = function () {
		var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
	}(), r.parseHTML = function (a, b, c) {
		if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
	}, r.fn.load = function (a, b, c) {
		var d,
		    e,
		    f,
		    g = this,
		    h = a.indexOf(" ");return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
			f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
		}).always(c && function (a, b) {
			g.each(function () {
				c.apply(this, f || [a.responseText, b, a]);
			});
		}), this;
	}, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		r.fn[b] = function (a) {
			return this.on(b, a);
		};
	}), r.expr.pseudos.animated = function (a) {
		return r.grep(r.timers, function (b) {
			return a === b.elem;
		}).length;
	};function Sb(a) {
		return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	}r.offset = { setOffset: function setOffset(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = r.css(a, "position"),
			    l = r(a),
			    m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
		} }, r.fn.extend({ offset: function offset(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				r.offset.setOffset(this, a, b);
			});var b,
			    c,
			    d,
			    e,
			    f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
		}, position: function position() {
			if (this[0]) {
				var a,
				    b,
				    c = this[0],
				    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
			}
		}, offsetParent: function offsetParent() {
			return this.map(function () {
				var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
					a = a.offsetParent;
				}return a || qa;
			});
		} }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
		var c = "pageYOffset" === b;r.fn[a] = function (d) {
			return S(this, function (a, d, e) {
				var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
			}, a, d, arguments.length);
		};
	}), r.each(["top", "left"], function (a, b) {
		r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
			if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c;
		});
	}), r.each({ Height: "height", Width: "width" }, function (a, b) {
		r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
			r.fn[d] = function (e, f) {
				var g = arguments.length && (c || "boolean" != typeof e),
				    h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
					var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
				}, b, g ? e : void 0, g);
			};
		});
	}), r.fn.extend({ bind: function bind(a, b, c) {
			return this.on(a, null, b, c);
		}, unbind: function unbind(a, b) {
			return this.off(a, null, b);
		}, delegate: function delegate(a, b, c, d) {
			return this.on(b, a, c, d);
		}, undelegate: function undelegate(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
		} }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
		return r;
	});var Tb = a.jQuery,
	    Ub = a.$;return r.noConflict = function (b) {
		return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
	}, b || (a.jQuery = a.$ = r), r;
});
0;
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
	"use strict";
	function b() {
		var a = document.createElement("bootstrap"),
		    b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
			if (void 0 !== a.style[c]) return { end: b[c] };
		}return !1;
	}a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
		    d = this;a(this).one("bsTransitionEnd", function () {
			c = !0;
		});var e = function e() {
			c || a(d).trigger(a.support.transition.end);
		};return setTimeout(e, b), this;
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
				if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
			} });
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var c = a(this),
			    e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
		});
	}var c = '[data-dismiss="alert"]',
	    d = function d(b) {
		a(b).on("click", c, this.close);
	};d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove();
		}var e = a(this),
		    f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
	};var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this;
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.button"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
		});
	}var c = function c(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
	};c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
		var c = "disabled",
		    d = this.$element,
		    e = d.is("input") ? "val" : "html",
		    f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
		}, this), 0);
	}, c.prototype.toggle = function () {
		var a = !0,
		    b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
			var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
	};var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this;
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.carousel"),
			    f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
			    g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
		});
	}var c = function c(b, _c3) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c3, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
	};c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {case 37:
					this.prev();break;case 39:
					this.next();break;default:
					return;}a.preventDefault();
		}
	}, c.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
	}, c.prototype.getItemIndex = function (a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
	}, c.prototype.getItemForDirection = function (a, b) {
		var c = this.getItemIndex(b),
		    d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
		    f = (c + e) % this.$items.length;return this.$items.eq(f);
	}, c.prototype.to = function (a) {
		var b = this,
		    c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
			b.to(a);
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
	}, c.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
	}, c.prototype.next = function () {
		if (!this.sliding) return this.slide("next");
	}, c.prototype.prev = function () {
		if (!this.sliding) return this.slide("prev");
	}, c.prototype.slide = function (b, d) {
		var e = this.$element.find(".item.active"),
		    f = d || this.getItemForDirection(b, e),
		    g = this.interval,
		    h = "next" == b ? "left" : "right",
		    i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
		    k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
			}var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger(m);
				}, 0);
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
		}
	};var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = d, this;
	};var e = function e(c) {
		var d,
		    e = a(this),
		    f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
			    h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
		}
	};a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var c = a(this);b.call(c, c.data());
		});
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		var c,
		    d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
	}function c(b) {
		return this.each(function () {
			var c = a(this),
			    e = c.data("bs.collapse"),
			    f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
		});
	}var d = function d(b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
	};d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");return a ? "width" : "height";
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b,
			    e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
					};if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
				};return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]();
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
		}, this)).end();
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
	};var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this;
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
		    g = f.data("bs.collapse"),
		    h = g ? "toggle" : e.data();c.call(f, h);
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
	}function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
			    e = b(d),
			    f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
		}));
	}function d(b) {
		return this.each(function () {
			var c = a(this),
			    d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
		});
	}var e = ".dropdown-backdrop",
	    f = '[data-toggle="dropdown"]',
	    g = function g(b) {
		a(b).on("click.bs.dropdown", this.toggle);
	};g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
		var e = a(this);if (!e.is(".disabled, :disabled")) {
			var f = b(e),
			    g = f.hasClass("open");if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
			}return !1;
		}
	}, g.prototype.keydown = function (c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
				    g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
				    i = e.find(".dropdown-menu" + h);if (i.length) {
					var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
				}
			}
		}
	};var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this;
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation();
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
	"use strict";
	function b(b, d) {
		return this.each(function () {
			var e = a(this),
			    f = e.data("bs.modal"),
			    g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
		});
	}var c = function c(b, _c4) {
		this.options = _c4, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal");
		}, this));
	};c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a);
	}, c.prototype.show = function (b) {
		var d = this,
		    e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
			});
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f);
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
		}));
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
		}, this));
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide();
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
	}, c.prototype.hideModal = function () {
		var a = this;this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
		});
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
	}, c.prototype.backdrop = function (b) {
		var d = this,
		    e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
				return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
			}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");var g = function g() {
				d.removeBackdrop(), b && b();
			};a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
		} else b && b();
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog();
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({ paddingLeft: "", paddingRight: "" });
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;if (!a) {
			var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
		}this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad);
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
	};var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this;
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
		    e = d.attr("href"),
		    f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
		    g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus");
			});
		}), b.call(f, g, this);
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.tooltip"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
		});
	}var c = function c(a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
	};c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
				    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
			}
		}this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS;
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
		    c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d);
		}), b;
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show();
		}, c.options.delay.show)) : c.show());
	}, c.prototype.isInStateTrue = function () {
		for (var a in this.inState) {
			if (this.inState[a]) return !0;
		}return !1;
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide();
		}, c.options.delay.hide)) : c.hide();
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
			    f = this.tip(),
			    g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
			    i = /\s?auto?\s?/i,
			    j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
			    l = f[0].offsetWidth,
			    m = f[0].offsetHeight;if (j) {
				var n = h,
				    o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
			}var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
				var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
			};a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
		    e = d[0].offsetWidth,
		    f = d[0].offsetHeight,
		    g = parseInt(d.css("margin-top"), 10),
		    h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
				d.css({ top: Math.round(a.top), left: Math.round(a.left) });
			} }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
		    j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
		    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
		    n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
	}, c.prototype.setContent = function () {
		var a = this.tip(),
		    b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
		}var e = this,
		    f = a(this.$tip),
		    g = a.Event("hide.bs." + this.type);if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
	}, c.prototype.fixTitle = function () {
		var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
	}, c.prototype.hasContent = function () {
		return this.getTitle();
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;var c = b[0],
		    d = "BODY" == c.tagName,
		    e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
		    g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
		    h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
		    i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
		    g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
			    i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
		} else {
			var j = b.left - f,
			    k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
		}return e;
	}, c.prototype.getTitle = function () {
		var a,
		    b = this.$element,
		    c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
	}, c.prototype.getUID = function (a) {
		do {
			a += ~~(1e6 * Math.random());
		} while (document.getElementById(a));return a;
	}, c.prototype.tip = function () {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	}, c.prototype.enable = function () {
		this.enabled = !0;
	}, c.prototype.disable = function () {
		this.enabled = !1;
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	}, c.prototype.toggle = function (b) {
		var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
	}, c.prototype.destroy = function () {
		var a = this;clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
		});
	};var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this;
	};
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.popover"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
		});
	}var c = function c(a, b) {
		this.init("popover", a, b);
	};if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS;
	}, c.prototype.setContent = function () {
		var a = this.tip(),
		    b = this.getTitle(),
		    c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent();
	}, c.prototype.getContent = function () {
		var a = this.$element,
		    b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow");
	};var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this;
	};
}(jQuery), +function (a) {
	"use strict";
	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
	}function c(c) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.scrollspy"),
			    f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
		});
	}b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	}, b.prototype.refresh = function () {
		var b = this,
		    c = "offset",
		    d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
			    e = b.data("target") || b.attr("href"),
			    f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
		}).sort(function (a, b) {
			return a[0] - b[0];
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1]);
		});
	}, b.prototype.process = function () {
		var a,
		    b = this.$scrollElement.scrollTop() + this.options.offset,
		    c = this.getScrollHeight(),
		    d = this.options.offset + c - this.$scrollElement.height(),
		    e = this.offsets,
		    f = this.targets,
		    g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
			g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
		}
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
		    d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
	};var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this;
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);c.call(b, b.data());
		});
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
		});
	}var c = function c(b) {
		this.element = a(b);
	};c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
		    c = b.closest("ul:not(.dropdown-menu)"),
		    d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
			    f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
			    g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
				});
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
		}var g = d.find("> .active"),
		    h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
	};var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this;
	};var e = function e(c) {
		c.preventDefault(), b.call(a(this), "show");
	};a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.affix"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
		});
	}var c = function c(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
	};c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
		var e = this.$target.scrollTop(),
		    f = this.$element.offset(),
		    g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
		    i = h ? e : f.top,
		    j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
		    b = this.$element.offset();return this.pinnedOffset = b.top - a;
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1);
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
			    d = this.options.offset,
			    e = d.top,
			    f = d.bottom,
			    g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
				    j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
			}"bottom" == h && this.$element.offset({ top: g - b - f });
		}
	};var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
		return a.fn.affix = d, this;
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var c = a(this),
			    d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
		});
	});
}(jQuery);
0;
/*
 AngularJS v1.6.2
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (z) {
	'use strict';
	function M(a, b) {
		b = b || Error;return function () {
			var d = arguments[0],
			    c;c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.2/" + (a ? a + "/" : "") + d;for (d = 1; d < arguments.length; d++) {
				c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";var f = encodeURIComponent,
				    e;e = arguments[d];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;c += f(e);
			}return new b(c);
		};
	}function sa(a) {
		if (null == a || Va(a)) return !1;if (C(a) || E(a) || D && a instanceof D) return !0;var b = "length" in Object(a) && a.length;return Y(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item);
	}function q(a, b, d) {
		var c, f;if (a) if (y(a)) for (c in a) {
			"prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);
		} else if (C(a) || sa(a)) {
			var e = "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a));c = 0;for (f = a.length; c < f; c++) {
				(e || c in a) && b.call(d, a[c], c, a);
			}
		} else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (Dc(a)) for (c in a) {
			b.call(d, a[c], c, a);
		} else if ("function" === typeof a.hasOwnProperty) for (c in a) {
			a.hasOwnProperty(c) && b.call(d, a[c], c, a);
		} else for (c in a) {
			ua.call(a, c) && b.call(d, a[c], c, a);
		}return a;
	}function Ec(a, b, d) {
		for (var c = Object.keys(a).sort(), f = 0; f < c.length; f++) {
			b.call(d, a[c[f]], c[f]);
		}return c;
	}function Fc(a) {
		return function (b, d) {
			a(d, b);
		};
	}function je() {
		return ++qb;
	}function Sb(a, b, d) {
		for (var c = a.$$hashKey, f = 0, e = b.length; f < e; ++f) {
			var g = b[f];if (F(g) || y(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
				var m = h[k],
				    n = g[m];d && F(n) ? ga(n) ? a[m] = new Date(n.valueOf()) : Wa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Tb(n) ? a[m] = n.clone() : (F(a[m]) || (a[m] = C(n) ? [] : {}), Sb(a[m], [n], !0)) : a[m] = n;
			}
		}c ? a.$$hashKey = c : delete a.$$hashKey;return a;
	}function R(a) {
		return Sb(a, va.call(arguments, 1), !1);
	}function ke(a) {
		return Sb(a, va.call(arguments, 1), !0);
	}function Z(a) {
		return parseInt(a, 10);
	}function Ub(a, b) {
		return R(Object.create(a), b);
	}function w() {}function Xa(a) {
		return a;
	}function ma(a) {
		return function () {
			return a;
		};
	}function Vb(a) {
		return y(a.toString) && a.toString !== na;
	}function x(a) {
		return "undefined" === typeof a;
	}function v(a) {
		return "undefined" !== typeof a;
	}function F(a) {
		return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a));
	}function Dc(a) {
		return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && !Gc(a);
	}function E(a) {
		return "string" === typeof a;
	}function Y(a) {
		return "number" === typeof a;
	}function ga(a) {
		return "[object Date]" === na.call(a);
	}function y(a) {
		return "function" === typeof a;
	}function Wa(a) {
		return "[object RegExp]" === na.call(a);
	}function Va(a) {
		return a && a.window === a;
	}function Ya(a) {
		return a && a.$evalAsync && a.$watch;
	}function Ia(a) {
		return "boolean" === typeof a;
	}function le(a) {
		return a && Y(a.length) && me.test(na.call(a));
	}function Tb(a) {
		return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
	}function ne(a) {
		var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) {
			b[a[d]] = !0;
		}return b;
	}function wa(a) {
		return P(a.nodeName || a[0] && a[0].nodeName);
	}function Za(a, b) {
		var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
	}function xa(a, b) {
		function d(a, b) {
			var d = b.$$hashKey,
			    e;if (C(a)) {
				e = 0;for (var f = a.length; e < f; e++) {
					b.push(c(a[e]));
				}
			} else if (Dc(a)) for (e in a) {
				b[e] = c(a[e]);
			} else if (a && "function" === typeof a.hasOwnProperty) for (e in a) {
				a.hasOwnProperty(e) && (b[e] = c(a[e]));
			} else for (e in a) {
				ua.call(a, e) && (b[e] = c(a[e]));
			}d ? b.$$hashKey = d : delete b.$$hashKey;return b;
		}function c(a) {
			if (!F(a)) return a;var b = e.indexOf(a);if (-1 !== b) return g[b];if (Va(a) || Ya(a)) throw Fa("cpws");var b = !1,
			    c = f(a);void 0 === c && (c = C(a) ? [] : Object.create(Gc(a)), b = !0);e.push(a);g.push(c);return b ? d(a, c) : c;
		}function f(a) {
			switch (na.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
					return new a.constructor(c(a.buffer), a.byteOffset, a.length);case "[object ArrayBuffer]":
					if (!a.slice) {
						var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
					}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
					return new a.constructor(a.valueOf());case "[object RegExp]":
					return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
					return new a.constructor([a], { type: a.type });}if (y(a.cloneNode)) return a.cloneNode(!0);
		}
		var e = [],
		    g = [];if (b) {
			if (le(b) || "[object ArrayBuffer]" === na.call(b)) throw Fa("cpta");if (a === b) throw Fa("cpi");C(b) ? b.length = 0 : q(b, function (a, d) {
				"$$hashKey" !== d && delete b[d];
			});e.push(a);g.push(b);return d(a, b);
		}return c(a);
	}function qa(a, b) {
		if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a === "undefined" ? "undefined" : _typeof(a),
		    c;if (d === (typeof b === "undefined" ? "undefined" : _typeof(b)) && "object" === d) if (C(a)) {
			if (!C(b)) return !1;if ((d = a.length) === b.length) {
				for (c = 0; c < d; c++) {
					if (!qa(a[c], b[c])) return !1;
				}return !0;
			}
		} else {
			if (ga(a)) return ga(b) ? qa(a.getTime(), b.getTime()) : !1;if (Wa(a)) return Wa(b) ? a.toString() === b.toString() : !1;if (Ya(a) || Ya(b) || Va(a) || Va(b) || C(b) || ga(b) || Wa(b)) return !1;d = W();for (c in a) {
				if ("$" !== c.charAt(0) && !y(a[c])) {
					if (!qa(a[c], b[c])) return !1;d[c] = !0;
				}
			}for (c in b) {
				if (!(c in d) && "$" !== c.charAt(0) && v(b[c]) && !y(b[c])) return !1;
			}return !0;
		}return !1;
	}function $a(a, b, d) {
		return a.concat(va.call(b, d));
	}function ab(a, b) {
		var d = 2 < arguments.length ? va.call(arguments, 2) : [];return !y(b) || b instanceof RegExp ? b : d.length ? function () {
			return arguments.length ? b.apply(a, $a(d, arguments, 0)) : b.apply(a, d);
		} : function () {
			return arguments.length ? b.apply(a, arguments) : b.call(a);
		};
	}function Hc(a, b) {
		var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Va(b) ? d = "$WINDOW" : b && z.document === b ? d = "$DOCUMENT" : Ya(b) && (d = "$SCOPE");return d;
	}function bb(a, b) {
		if (!x(a)) return Y(b) || (b = b ? 2 : null), JSON.stringify(a, Hc, b);
	}function Ic(a) {
		return E(a) ? JSON.parse(a) : a;
	}function Jc(a, b) {
		a = a.replace(oe, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return da(d) ? b : d;
	}function Wb(a, b, d) {
		d = d ? -1 : 1;var c = a.getTimezoneOffset();b = Jc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
	}function ya(a) {
		a = D(a).clone();try {
			a.empty();
		} catch (b) {}var d = D("<div>").append(a).html();try {
			return a[0].nodeType === Ja ? P(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
				return "<" + P(b);
			});
		} catch (c) {
			return P(d);
		}
	}function Kc(a) {
		try {
			return decodeURIComponent(a);
		} catch (b) {}
	}function Lc(a) {
		var b = {};q((a || "").split("&"), function (a) {
			var c, f, e;a && (f = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (f = a.substring(0, c), e = a.substring(c + 1)), f = Kc(f), v(f) && (e = v(e) ? Kc(e) : !0, ua.call(b, f) ? C(b[f]) ? b[f].push(e) : b[f] = [b[f], e] : b[f] = e));
		});return b;
	}function Xb(a) {
		var b = [];q(a, function (a, c) {
			C(a) ? q(a, function (a) {
				b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)));
			}) : b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)));
		});return b.length ? b.join("&") : "";
	}function cb(a) {
		return ka(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
	}function ka(a, b) {
		return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
	}function pe(a, b) {
		var d,
		    c,
		    f = Ka.length;for (c = 0; c < f; ++c) {
			if (d = Ka[c] + b, E(d = a.getAttribute(d))) return d;
		}return null;
	}function qe(a, b) {
		var d,
		    c,
		    f = {};q(Ka, function (b) {
			b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
		});q(Ka, function (b) {
			b += "app";var f;!d && (f = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = f, c = f.getAttribute(b));
		});d && (re ? (f.strictDi = null !== pe(d, "strict-di"), b(d, c ? [c] : [], f)) : z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
	}function Mc(a, b, d) {
		F(d) || (d = {});d = R({ strictDi: !1 }, d);var c = function c() {
			a = D(a);if (a.injector()) {
				var c = a[0] === z.document ? "document" : ya(a);throw Fa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
			}b = b || [];b.unshift(["$provide", function (b) {
				b.value("$rootElement", a);
			}]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
				a.debugInfoEnabled(!0);
			}]);
			b.unshift("ng");c = db(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
				a.$apply(function () {
					b.data("$injector", d);c(b)(a);
				});
			}]);return c;
		},
		    f = /^NG_ENABLE_DEBUG_INFO!/,
		    e = /^NG_DEFER_BOOTSTRAP!/;z && f.test(z.name) && (d.debugInfoEnabled = !0, z.name = z.name.replace(f, ""));if (z && !e.test(z.name)) return c();z.name = z.name.replace(e, "");$.resumeBootstrap = function (a) {
			q(a, function (a) {
				b.push(a);
			});return c();
		};y($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap();
	}function se() {
		z.name = "NG_ENABLE_DEBUG_INFO!" + z.name;z.location.reload();
	}function te(a) {
		a = $.element(a).injector();if (!a) throw Fa("test");return a.get("$$testability");
	}function Nc(a, b) {
		b = b || "_";return a.replace(ue, function (a, c) {
			return (c ? b : "") + a.toLowerCase();
		});
	}function ve() {
		var a;if (!Oc) {
			var b = rb();(ta = x(b) ? z.jQuery : b ? z[b] : void 0) && ta.fn.on ? (D = ta, R(ta.fn, { scope: Oa.scope, isolateScope: Oa.isolateScope, controller: Oa.controller, injector: Oa.injector, inheritedData: Oa.inheritedData }), a = ta.cleanData, ta.cleanData = function (b) {
				for (var c, f = 0, e; null != (e = b[f]); f++) {
					(c = ta._data(e, "events")) && c.$destroy && ta(e).triggerHandler("$destroy");
				}a(b);
			}) : D = X;$.element = D;Oc = !0;
		}
	}function eb(a, b, d) {
		if (!a) throw Fa("areq", b || "?", d || "required");return a;
	}function sb(a, b, d) {
		d && C(a) && (a = a[a.length - 1]);eb(y(a), b, "not a function, got " + (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? a.constructor.name || "Object" : typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
	}function La(a, b) {
		if ("hasOwnProperty" === a) throw Fa("badname", b);
	}function Pc(a, b, d) {
		if (!b) return a;b = b.split(".");for (var c, f = a, e = b.length, g = 0; g < e; g++) {
			c = b[g], a && (a = (f = a)[c]);
		}return !d && y(a) ? ab(f, a) : a;
	}function tb(a) {
		for (var b = a[0], d = a[a.length - 1], c, f = 1; b !== d && (b = b.nextSibling); f++) {
			if (c || a[f] !== b) c || (c = D(va.call(a, 0, f))), c.push(b);
		}return c || a;
	}function W() {
		return Object.create(null);
	}function Yb(a) {
		if (null == a) return "";switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
				break;case "number":
				a = "" + a;break;default:
				a = !Vb(a) || C(a) || ga(a) ? bb(a) : a.toString();}return a;
	}function we(a) {
		function b(a, b, c) {
			return a[b] || (a[b] = c());
		}var d = M("$injector"),
		    c = M("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || M;return b(a, "module", function () {
			var a = {};return function (e, g, h) {
				if ("hasOwnProperty" === e) throw c("badname", "module");g && a.hasOwnProperty(e) && (a[e] = null);return b(a, e, function () {
					function a(b, d, e, f) {
						f || (f = c);return function () {
							f[e || "push"]([b, d, arguments]);return J;
						};
					}function b(a, d, f) {
						f || (f = c);return function (b, c) {
							c && y(c) && (c.$$moduleName = e);f.push([a, d, arguments]);return J;
						};
					}if (!g) throw d("nomod", e);var c = [],
					    f = [],
					    p = [],
					    r = a("$injector", "invoke", "push", f),
					    J = { _invokeQueue: c, _configBlocks: f, _runBlocks: p,
						requires: g, name: e, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator", f), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: r, run: function run(a) {
							p.push(a);return this;
						} };h && r(h);return J;
				});
			};
		});
	}
	function ra(a, b) {
		if (C(a)) {
			b = b || [];for (var d = 0, c = a.length; d < c; d++) {
				b[d] = a[d];
			}
		} else if (F(a)) for (d in b = b || {}, a) {
			if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
		}return b || a;
	}function xe(a) {
		var b = [];return JSON.stringify(a, function (a, c) {
			c = Hc(a, c);if (F(c)) {
				if (0 <= b.indexOf(c)) return "...";b.push(c);
			}return c;
		});
	}function ye(a) {
		R(a, { bootstrap: Mc, copy: xa, extend: R, merge: ke, equals: qa, element: D, forEach: q, injector: db, noop: w, bind: ab, toJson: bb, fromJson: Ic, identity: Xa, isUndefined: x, isDefined: v, isString: E, isFunction: y,
			isObject: F, isNumber: Y, isElement: Tb, isArray: C, version: ze, isDate: ga, lowercase: P, uppercase: ub, callbacks: { $$counter: 0 }, getTestability: te, reloadWithDebugInfo: se, $$minErr: M, $$csp: Ga, $$encodeUriSegment: cb, $$encodeUriQuery: ka, $$stringify: Yb });Zb = we(z);Zb("ng", ["ngLocale"], ["$provide", function (a) {
			a.provider({ $$sanitizeUri: Ae });a.provider("$compile", Qc).directive({ a: Be, input: Rc, textarea: Rc, form: Ce, script: De, select: Ee, option: Fe, ngBind: Ge, ngBindHtml: He, ngBindTemplate: Ie, ngClass: Je, ngClassEven: Ke, ngClassOdd: Le,
				ngCloak: Me, ngController: Ne, ngForm: Oe, ngHide: Pe, ngIf: Qe, ngInclude: Re, ngInit: Se, ngNonBindable: Te, ngPluralize: Ue, ngRepeat: Ve, ngShow: We, ngStyle: Xe, ngSwitch: Ye, ngSwitchWhen: Ze, ngSwitchDefault: $e, ngOptions: af, ngTransclude: bf, ngModel: cf, ngList: df, ngChange: ef, pattern: Sc, ngPattern: Sc, required: Tc, ngRequired: Tc, minlength: Uc, ngMinlength: Uc, maxlength: Vc, ngMaxlength: Vc, ngValue: ff, ngModelOptions: gf }).directive({ ngInclude: hf }).directive(vb).directive(Wc);a.provider({ $anchorScroll: jf, $animate: kf, $animateCss: lf, $$animateJs: mf,
				$$animateQueue: nf, $$AnimateRunner: of, $$animateAsyncRun: pf, $browser: qf, $cacheFactory: rf, $controller: sf, $document: tf, $$isDocumentHidden: uf, $exceptionHandler: vf, $filter: Xc, $$forceReflow: wf, $interpolate: xf, $interval: yf, $http: zf, $httpParamSerializer: Af, $httpParamSerializerJQLike: Bf, $httpBackend: Cf, $xhrFactory: Df, $jsonpCallbacks: Ef, $location: Ff, $log: Gf, $parse: Hf, $rootScope: If, $q: Jf, $$q: Kf, $sce: Lf, $sceDelegate: Mf, $sniffer: Nf, $templateCache: Of, $templateRequest: Pf, $$testability: Qf, $timeout: Rf, $window: Sf, $$rAF: Tf,
				$$jqLite: Uf, $$Map: Vf, $$cookieReader: Wf });
		}]);
	}function fb(a, b) {
		return b.toUpperCase();
	}function wb(a) {
		return a.replace(Xf, fb);
	}function Yc(a) {
		a = a.nodeType;return 1 === a || !a || 9 === a;
	}function Zc(a, b) {
		var d,
		    c,
		    f = b.createDocumentFragment(),
		    e = [];if ($b.test(a)) {
			d = f.appendChild(b.createElement("div"));c = (Yf.exec(a) || ["", ""])[1].toLowerCase();c = ha[c] || ha._default;d.innerHTML = c[1] + a.replace(Zf, "<$1></$2>") + c[2];for (c = c[0]; c--;) {
				d = d.lastChild;
			}e = $a(e, d.childNodes);d = f.firstChild;d.textContent = "";
		} else e.push(b.createTextNode(a));
		f.textContent = "";f.innerHTML = "";q(e, function (a) {
			f.appendChild(a);
		});return f;
	}function X(a) {
		if (a instanceof X) return a;var b;E(a) && (a = S(a), b = !0);if (!(this instanceof X)) {
			if (b && "<" !== a.charAt(0)) throw ac("nosel");return new X(a);
		}if (b) {
			b = z.document;var d;a = (d = $f.exec(a)) ? [b.createElement(d[1])] : (d = Zc(a, b)) ? d.childNodes : [];bc(this, a);
		} else y(a) ? $c(a) : bc(this, a);
	}function cc(a) {
		return a.cloneNode(!0);
	}function xb(a, b) {
		b || gb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, f = d.length; c < f; c++) {
			gb(d[c]);
		}
	}
	function ad(a, b, d, c) {
		if (v(c)) throw ac("offargs");var f = (c = yb(a)) && c.events,
		    e = c && c.handle;if (e) if (b) {
			var g = function g(b) {
				var c = f[b];v(d) && Za(c || [], d);v(d) && c && 0 < c.length || (a.removeEventListener(b, e), delete f[b]);
			};q(b.split(" "), function (a) {
				g(a);zb[a] && g(zb[a]);
			});
		} else for (b in f) {
			"$destroy" !== b && a.removeEventListener(b, e), delete f[b];
		}
	}function gb(a, b) {
		var d = a.ng339,
		    c = d && hb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), ad(a)), delete hb[d], a.ng339 = void 0));
	}function yb(a, b) {
		var d = a.ng339,
		    d = d && hb[d];b && !d && (a.ng339 = d = ++ag, d = hb[d] = { events: {}, data: {}, handle: void 0 });return d;
	}function dc(a, b, d) {
		if (Yc(a)) {
			var c,
			    f = v(d),
			    e = !f && b && !F(b),
			    g = !b;a = (a = yb(a, !e)) && a.data;if (f) a[wb(b)] = d;else {
				if (g) return a;if (e) return a && a[wb(b)];for (c in b) {
					a[wb(c)] = b[c];
				}
			}
		}
	}function Ab(a, b) {
		return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
	}function Bb(a, b) {
		b && a.setAttribute && q(b.split(" "), function (b) {
			a.setAttribute("class", S((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + S(b) + " ", " ")));
		});
	}function Cb(a, b) {
		if (b && a.setAttribute) {
			var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");q(b.split(" "), function (a) {
				a = S(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
			});a.setAttribute("class", S(d));
		}
	}function bc(a, b) {
		if (b) if (b.nodeType) a[a.length++] = b;else {
			var d = b.length;if ("number" === typeof d && b.window !== b) {
				if (d) for (var c = 0; c < d; c++) {
					a[a.length++] = b[c];
				}
			} else a[a.length++] = b;
		}
	}function bd(a, b) {
		return Db(a, "$" + (b || "ngController") + "Controller");
	}function Db(a, b, d) {
		9 === a.nodeType && (a = a.documentElement);for (b = C(b) ? b : [b]; a;) {
			for (var c = 0, f = b.length; c < f; c++) {
				if (v(d = D.data(a, b[c]))) return d;
			}a = a.parentNode || 11 === a.nodeType && a.host;
		}
	}function cd(a) {
		for (xb(a, !0); a.firstChild;) {
			a.removeChild(a.firstChild);
		}
	}function Eb(a, b) {
		b || xb(a);var d = a.parentNode;d && d.removeChild(a);
	}function bg(a, b) {
		b = b || z;if ("complete" === b.document.readyState) b.setTimeout(a);else D(b).on("load", a);
	}function $c(a) {
		function b() {
			z.document.removeEventListener("DOMContentLoaded", b);z.removeEventListener("load", b);a();
		}"complete" === z.document.readyState ? z.setTimeout(a) : (z.document.addEventListener("DOMContentLoaded", b), z.addEventListener("load", b));
	}function dd(a, b) {
		var d = Fb[b.toLowerCase()];return d && ed[wa(a)] && d;
	}function cg(a, b) {
		var d = function d(c, _d) {
			c.isDefaultPrevented = function () {
				return c.defaultPrevented;
			};var e = b[_d || c.type],
			    g = e ? e.length : 0;if (g) {
				if (x(c.immediatePropagationStopped)) {
					var h = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
						c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
					};
				}c.isImmediatePropagationStopped = function () {
					return !0 === c.immediatePropagationStopped;
				};var k = e.specialHandlerWrapper || dg;1 < g && (e = ra(e));for (var l = 0; l < g; l++) {
					c.isImmediatePropagationStopped() || k(a, c, e[l]);
				}
			}
		};d.elem = a;return d;
	}function dg(a, b, d) {
		d.call(a, b);
	}function eg(a, b, d) {
		var c = b.relatedTarget;c && (c === a || fg.call(a, c)) || d.call(a, b);
	}function Uf() {
		this.$get = function () {
			return R(X, { hasClass: function hasClass(a, b) {
					a.attr && (a = a[0]);return Ab(a, b);
				}, addClass: function addClass(a, b) {
					a.attr && (a = a[0]);return Cb(a, b);
				}, removeClass: function removeClass(a, b) {
					a.attr && (a = a[0]);return Bb(a, b);
				} });
		};
	}function Pa(a, b) {
		var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a === "undefined" ? "undefined" : _typeof(a);return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || je)() : d + ":" + a;
	}function fd() {
		this._keys = [];this._values = [];this._lastKey = NaN;this._lastIndex = -1;
	}function gd(a) {
		a = Function.prototype.toString.call(a).replace(gg, "");return a.match(hg) || a.match(ig);
	}function jg(a) {
		return (a = gd(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
	}function db(a, b) {
		function d(a) {
			return function (b, c) {
				if (F(b)) q(b, Fc(a));else return a(b, c);
			};
		}function c(a, b) {
			La(a, "service");if (y(b) || C(b)) b = p.instantiate(b);if (!b.$get) throw za("pget", a);return n[a + "Provider"] = b;
		}function f(a, b) {
			return function () {
				var c = O.invoke(b, this);if (x(c)) throw za("undef", a);return c;
			};
		}function e(a, b, d) {
			return c(a, { $get: !1 !== d ? f(a, b) : b });
		}function g(a) {
			eb(x(a) || C(a), "modulesToLoad", "not an array");var b = [],
			    c;q(a, function (a) {
				function d(a) {
					var b, c;b = 0;for (c = a.length; b < c; b++) {
						var e = a[b],
						    f = p.get(e[0]);f[e[1]].apply(f, e[2]);
					}
				}if (!m.get(a)) {
					m.set(a, !0);try {
						E(a) ? (c = Zb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : y(a) ? b.push(p.invoke(a)) : C(a) ? b.push(p.invoke(a)) : sb(a, "module");
					} catch (e) {
						throw C(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), za("modulerr", a, e.stack || e.message || e);
					}
				}
			});return b;
		}function h(a, c) {
			function d(b, e) {
				if (a.hasOwnProperty(b)) {
					if (a[b] === k) throw za("cdep", b + " <- " + l.join(" <- "));return a[b];
				}try {
					return l.unshift(b), a[b] = k, a[b] = c(b, e), a[b];
				} catch (f) {
					throw a[b] === k && delete a[b], f;
				} finally {
					l.shift();
				}
			}function e(a, c, f) {
				var g = [];a = db.$$annotate(a, b, f);for (var h = 0, k = a.length; h < k; h++) {
					var l = a[h];if ("string" !== typeof l) throw za("itkn", l);g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
				}return g;
			}return { invoke: function invoke(a, b, c, d) {
					"string" === typeof c && (d = c, c = null);c = e(a, c, d);C(a) && (a = a[a.length - 1]);d = a;if (Ha || "function" !== typeof d) d = !1;else {
						var f = d.$$ngIsClass;
						Ia(f) || (f = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d = f;
					}return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
				}, instantiate: function instantiate(a, b, c) {
					var d = C(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
				}, get: d, annotate: db.$$annotate, has: function has(b) {
					return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
				} };
		}b = !0 === b;var k = {},
		    l = [],
		    m = new Gb(),
		    n = { $provide: { provider: d(c), factory: d(e), service: d(function (a, b) {
					return e(a, ["$injector", function (a) {
						return a.instantiate(b);
					}]);
				}), value: d(function (a, b) {
					return e(a, ma(b), !1);
				}), constant: d(function (a, b) {
					La(a, "constant");n[a] = b;r[a] = b;
				}), decorator: function decorator(a, b) {
					var c = p.get(a + "Provider"),
					    d = c.$get;c.$get = function () {
						var a = O.invoke(d, c);return O.invoke(b, null, { $delegate: a });
					};
				} } },
		    p = n.$injector = h(n, function (a, b) {
			$.isString(b) && l.push(b);throw za("unpr", l.join(" <- "));
		}),
		    r = {},
		    J = h(r, function (a, b) {
			var c = p.get(a + "Provider", b);return O.invoke(c.$get, c, void 0, a);
		}),
		    O = J;n.$injectorProvider = { $get: ma(J) };var u = g(a),
		    O = J.get("$injector");O.strictDi = b;q(u, function (a) {
			a && O.invoke(a);
		});return O;
	}function jf() {
		var a = !0;this.disableAutoScrolling = function () {
			a = !1;
		};this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
			function f(a) {
				var b = null;Array.prototype.some.call(a, function (a) {
					if ("a" === wa(a)) return b = a, !0;
				});return b;
			}function e(a) {
				if (a) {
					a.scrollIntoView();var c;c = g.yOffset;y(c) ? c = c() : Tb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
				} else b.scrollTo(0, 0);
			}function g(a) {
				a = E(a) ? a : Y(a) ? a.toString() : d.hash();var b;a ? (b = h.getElementById(a)) ? e(b) : (b = f(h.getElementsByName(a))) ? e(b) : "top" === a && e(null) : e(null);
			}var h = b.document;a && c.$watch(function () {
				return d.hash();
			}, function (a, b) {
				a === b && "" === a || bg(function () {
					c.$evalAsync(g);
				});
			});return g;
		}];
	}function ib(a, b) {
		if (!a && !b) return "";if (!a) return b;if (!b) return a;C(a) && (a = a.join(" "));C(b) && (b = b.join(" "));return a + " " + b;
	}function kg(a) {
		E(a) && (a = a.split(" "));var b = W();q(a, function (a) {
			a.length && (b[a] = !0);
		});return b;
	}function ea(a) {
		return F(a) ? a : {};
	}function lg(a, b, d, c) {
		function f(a) {
			try {
				a.apply(null, va.call(arguments, 1));
			} finally {
				if (J--, 0 === J) for (; O.length;) {
					try {
						O.pop()();
					} catch (b) {
						d.error(b);
					}
				}
			}
		}function e() {
			ia = null;h();
		}function g() {
			u = A();u = x(u) ? null : u;qa(u, B) && (u = B);H = B = u;
		}function h() {
			var a = H;g();if (V !== k.url() || a !== u) V = k.url(), H = u, q(K, function (a) {
				a(k.url(), u);
			});
		}var k = this,
		    l = a.location,
		    m = a.history,
		    n = a.setTimeout,
		    p = a.clearTimeout,
		    r = {};k.isMock = !1;var J = 0,
		    O = [];k.$$completeOutstandingRequest = f;k.$$incOutstandingRequestCount = function () {
			J++;
		};k.notifyWhenNoOutstandingRequests = function (a) {
			0 === J ? a() : O.push(a);
		};var u,
		    H,
		    V = l.href,
		    t = b.find("base"),
		    ia = null,
		    A = c.history ? function () {
			try {
				return m.state;
			} catch (a) {}
		} : w;g();k.url = function (b, d, e) {
			x(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
				var f = H === e;if (V === b && (!c.history || f)) return k;var h = V && Aa(V) === Aa(b);V = b;H = e;!c.history || h && f ? (h || (ia = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (ia = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g());ia && (ia = b);return k;
			}return ia || l.href.replace(/%27/g, "'");
		};k.state = function () {
			return u;
		};var K = [],
		    I = !1,
		    B = null;k.onUrlChange = function (b) {
			if (!I) {
				if (c.history) D(a).on("popstate", e);D(a).on("hashchange", e);I = !0;
			}K.push(b);return b;
		};k.$$applicationDestroyed = function () {
			D(a).off("hashchange popstate", e);
		};k.$$checkUrlChange = h;k.baseHref = function () {
			var a = t.attr("href");return a ? a.replace(/^(https?:)?\/\/[^/]*/, "") : "";
		};k.defer = function (a, b) {
			var c;J++;c = n(function () {
				delete r[c];f(a);
			}, b || 0);r[c] = !0;return c;
		};k.defer.cancel = function (a) {
			return r[a] ? (delete r[a], p(a), f(w), !0) : !1;
		};
	}function qf() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
			return new lg(a, c, b, d);
		}];
	}function rf() {
		this.$get = function () {
			function a(a, c) {
				function f(a) {
					a !== n && (p ? p === a && (p = a.n) : p = a, e(a.n, a.p), e(a, n), n = a, n.n = null);
				}function e(a, b) {
					a !== b && (a && (a.p = b), b && (b.n = a));
				}if (a in b) throw M("$cacheFactory")("iid", a);var g = 0,
				    h = R({}, c, { id: a }),
				    k = W(),
				    l = c && c.capacity || Number.MAX_VALUE,
				    m = W(),
				    n = null,
				    p = null;return b[a] = { put: function put(a, b) {
						if (!x(b)) {
							if (l < Number.MAX_VALUE) {
								var c = m[a] || (m[a] = { key: a });f(c);
							}a in k || g++;k[a] = b;g > l && this.remove(p.key);return b;
						}
					}, get: function get(a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];if (!b) return;f(b);
						}return k[a];
					}, remove: function remove(a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];if (!b) return;b === n && (n = b.p);b === p && (p = b.n);e(b.n, b.p);delete m[a];
						}a in k && (delete k[a], g--);
					}, removeAll: function removeAll() {
						k = W();g = 0;m = W();n = p = null;
					}, destroy: function destroy() {
						m = h = k = null;delete b[a];
					}, info: function info() {
						return R({}, h, { size: g });
					} };
			}var b = {};a.info = function () {
				var a = {};q(b, function (b, f) {
					a[f] = b.info();
				});return a;
			};a.get = function (a) {
				return b[a];
			};return a;
		};
	}function Of() {
		this.$get = ["$cacheFactory", function (a) {
			return a("templates");
		}];
	}function Qc(a, b) {
		function d(a, b, c) {
			var d = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
			    e = W();q(a, function (a, f) {
				if (a in n) e[f] = n[a];else {
					var g = a.match(d);if (!g) throw fa("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
					e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };g[4] && (n[a] = e[f]);
				}
			});return e;
		}function c(a) {
			var b = a.charAt(0);if (!b || b !== P(b)) throw fa("baddir", a);if (a !== a.trim()) throw fa("baddir", a);
		}function f(a) {
			var b = a.require || a.controller && a.name;!C(b) && F(b) && q(b, function (a, c) {
				var d = a.match(l);a.substring(d[0].length) || (b[c] = d[0] + c);
			});return b;
		}var e = {},
		    g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
		    h = /(([\w-]+)(?::([^;]+))?;?)/,
		    k = ne("ngSrc,ngSrcset,src,srcset"),
		    l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
		    m = /^(on[a-z]+|formaction)$/,
		    n = W();this.directive = function V(b, d) {
			eb(b, "name");La(b, "directive");E(b) ? (c(b), eb(d, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
				var d = [];q(e[b], function (e, g) {
					try {
						var h = a.invoke(e);y(h) ? h = { compile: ma(h) } : !h.compile && h.link && (h.compile = ma(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || b;h.require = f(h);var k = h,
						    l = h.restrict;if (l && (!E(l) || !/[EACM]/.test(l))) throw fa("badrestrict", l, b);k.restrict = l || "EA";h.$$moduleName = e.$$moduleName;d.push(h);
					} catch (m) {
						c(m);
					}
				});return d;
			}])), e[b].push(d)) : q(b, Fc(V));return this;
		};this.component = function (a, b) {
			function c(a) {
				function e(b) {
					return y(b) || C(b) ? function (c, d) {
						return a.invoke(b, this, { $element: c, $attrs: d });
					} : b;
				}var f = b.template || b.templateUrl ? b.template : "",
				    g = { controller: d, controllerAs: mg(b.controller) || b.controllerAs || "$ctrl", template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };
				q(b, function (a, b) {
					"$" === b.charAt(0) && (g[b] = a);
				});return g;
			}var d = b.controller || function () {};q(b, function (a, b) {
				"$" === b.charAt(0) && (c[b] = a, y(d) && (d[b] = a));
			});c.$inject = ["$injector"];return this.directive(a, c);
		};this.aHrefSanitizationWhitelist = function (a) {
			return v(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
		};this.imgSrcSanitizationWhitelist = function (a) {
			return v(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
		};var p = !0;this.debugInfoEnabled = function (a) {
			return v(a) ? (p = a, this) : p;
		};var r = !1;this.preAssignBindingsEnabled = function (a) {
			return v(a) ? (r = a, this) : r;
		};var J = 10;this.onChangesTtl = function (a) {
			return arguments.length ? (J = a, this) : J;
		};var O = !0;this.commentDirectivesEnabled = function (a) {
			return arguments.length ? (O = a, this) : O;
		};var u = !0;this.cssClassDirectivesEnabled = function (a) {
			return arguments.length ? (u = a, this) : u;
		};this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, f, n, I, B, L, N, G) {
			function T() {
				try {
					if (! --za) throw ea = void 0, fa("infchng", J);B.$apply(function () {
						for (var a = [], b = 0, c = ea.length; b < c; ++b) {
							try {
								ea[b]();
							} catch (d) {
								a.push(d);
							}
						}ea = void 0;if (a.length) throw a;
					});
				} finally {
					za++;
				}
			}function s(a, b) {
				if (b) {
					var c = Object.keys(b),
					    d,
					    e,
					    f;d = 0;for (e = c.length; d < e; d++) {
						f = c[d], this[f] = b[f];
					}
				} else this.$attr = {};this.$$element = a;
			}function Q(a, b, c) {
				xa.innerHTML = "<span " + b + ">";b = xa.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);d.value = c;a.attributes.setNamedItem(d);
			}function Ma(a, b) {
				try {
					a.addClass(b);
				} catch (c) {}
			}function ba(a, b, c, d, e) {
				a instanceof D || (a = D(a));var f = Na(a, b, a, c, d, e);ba.$$addScopeClass(a);var g = null;return function (b, c, d) {
					if (!a) throw fa("multilink");eb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var h = d.parentBoundTranscludeFn,
					    k = d.transcludeControllers;d = d.futureParentElement;h && h.$$boundTransclude && (h = h.$$boundTransclude);g || (g = (d = d && d[0]) ? "foreignobject" !== wa(d) && na.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== g ? D(ha(g, D("<div>").append(a).html())) : c ? Oa.clone.call(a) : a;if (k) for (var l in k) {
						d.data("$" + l + "Controller", k[l].instance);
					}ba.$$addScopeInfo(d, b);c && c(d, b);f && f(b, d, d, h);c || (a = f = null);return d;
				};
			}function Na(a, b, c, d, e, f) {
				function g(a, c, d, e) {
					var f, k, l, m, n, p, r;if (K) for (r = Array(c.length), m = 0; m < h.length; m += 3) {
						f = h[m], r[f] = c[f];
					} else r = c;m = 0;for (n = h.length; m < n;) {
						k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), ba.$$addScopeInfo(D(k), l)) : l = a, p = c.transcludeOnThisElement ? ja(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ja(a, b) : null, c(f, l, k, d, p)) : f && f(a, k.childNodes, void 0, e);
					}
				}for (var h = [], k = C(a) || a instanceof D, l, m, n, p, K, r = 0; r < a.length; r++) {
					l = new s();11 === Ha && M(a, r, k);m = fc(a[r], [], l, 0 === r ? d : void 0, e);(f = m.length ? X(m, a[r], l, b, c, null, [], [], f) : null) && f.scope && ba.$$addScopeClass(l.$$element);l = f && f.terminal || !(n = a[r].childNodes) || !n.length ? null : Na(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || l) h.push(r, f, l), p = !0, K = K || f;f = null;
				}return p ? g : null;
			}function M(a, b, c) {
				var d = a[b],
				    e = d.parentNode,
				    f;if (d.nodeType === Ja) for (;;) {
					f = e ? d.nextSibling : a[b + 1];if (!f || f.nodeType !== Ja) break;d.nodeValue += f.nodeValue;f.parentNode && f.parentNode.removeChild(f);c && f === a[b + 1] && a.splice(b + 1, 1);
				}
			}function ja(a, b, c) {
				function d(e, f, g, h, k) {
					e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, f, { parentBoundTranscludeFn: c, transcludeControllers: g, futureParentElement: h });
				}var e = d.$$slots = W(),
				    f;for (f in b.$$slots) {
					e[f] = b.$$slots[f] ? ja(a, b.$$slots[f], c) : null;
				}return d;
			}function fc(a, b, c, d, e) {
				var f = c.$attr,
				    g;switch (a.nodeType) {case 1:
						g = wa(a);Y(b, Ba(g), "E", d, e);for (var k, l, m, n, p = a.attributes, K = 0, r = p && p.length; K < r; K++) {
							var A = !1,
							    B = !1;k = p[K];l = k.name;m = k.value;k = Ba(l);(n = Ka.test(k)) && (l = l.replace(hd, "").substr(8).replace(/_(.)/g, function (a, b) {
								return b.toUpperCase();
							}));(k = k.match(La)) && Z(k[1]) && (A = l, B = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));k = Ba(l.toLowerCase());f[k] = l;if (n || !c.hasOwnProperty(k)) c[k] = m, dd(a, k) && (c[k] = !0);ra(a, b, m, k, n);Y(b, k, "A", d, e, A, B);
						}"input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off");if (!Ga) break;f = a.className;F(f) && (f = f.animVal);if (E(f) && "" !== f) for (; a = h.exec(f);) {
							k = Ba(a[2]), Y(b, k, "C", d, e) && (c[k] = S(a[3])), f = f.substr(a.index + a[0].length);
						}break;case Ja:
						ma(b, a.nodeValue);break;case 8:
						if (!Fa) break;jb(a, b, c, d, e);}b.sort(ka);return b;
			}function jb(a, b, c, d, e) {
				try {
					var f = g.exec(a.nodeValue);if (f) {
						var h = Ba(f[1]);Y(b, h, "M", d, e) && (c[h] = S(f[2]));
					}
				} catch (k) {}
			}function id(a, b, c) {
				var d = [],
				    e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
					do {
						if (!a) throw fa("uterdir", b, c);1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
					} while (0 < e);
				} else d.push(a);return D(d);
			}function jd(a, b, c) {
				return function (d, e, f, g, h) {
					e = id(e[0], b, c);return a(d, e, f, g, h);
				};
			}function gc(a, b, c, d, e, f) {
				var g;return a ? ba(b, c, d, e, f) : function () {
					g || (g = ba(b, c, d, e, f), b = c = f = null);return g.apply(this, arguments);
				};
			}function X(a, b, d, e, f, g, h, k, l) {
				function m(a, b, c, d) {
					if (a) {
						c && (a = jd(a, c, d));a.require = t.require;a.directiveName = L;if (B === t || t.$$isolateScope) a = sa(a, { isolateScope: !0 });h.push(a);
					}if (b) {
						c && (b = jd(b, c, d));b.require = t.require;b.directiveName = L;if (B === t || t.$$isolateScope) b = sa(b, { isolateScope: !0 });k.push(b);
					}
				}function n(a, e, f, g, l) {
					function m(a, b, c, d) {
						var e;Ya(a) || (d = c, c = b, b = a, a = void 0);V && (e = N);c || (c = V ? L.parent() : L);if (d) {
							var f = l.$$slots[d];if (f) return f(a, b, e, c, Q);if (x(f)) throw fa("noslot", d, ya(L));
						} else return l(a, b, e, c, Q);
					}var p, t, u, G, J, N, T, L;b === f ? (g = d, L = d.$$element) : (L = D(f), g = new s(L, d));J = e;B ? G = e.$new(!0) : K && (J = e.$parent);l && (T = m, T.$$boundTransclude = l, T.isSlotFilled = function (a) {
						return !!l.$$slots[a];
					});A && (N = ca(L, g, T, A, G, e, B));B && (ba.$$addScopeInfo(L, G, !0, !(I && (I === B || I === B.$$originalDirective))), ba.$$addScopeClass(L, !0), G.$$isolateBindings = B.$$isolateBindings, t = oa(e, g, G, G.$$isolateBindings, B), t.removeWatches && G.$on("$destroy", t.removeWatches));for (p in N) {
						t = A[p];u = N[p];var Hb = t.$$bindings.bindToController;if (r) {
							u.bindingInfo = Hb ? oa(J, g, u.instance, Hb, t) : {};var O = u();O !== u.instance && (u.instance = O, L.data("$" + t.name + "Controller", O), u.bindingInfo.removeWatches && u.bindingInfo.removeWatches(), u.bindingInfo = oa(J, g, u.instance, Hb, t));
						} else u.instance = u(), L.data("$" + t.name + "Controller", u.instance), u.bindingInfo = oa(J, g, u.instance, Hb, t);
					}q(A, function (a, b) {
						var c = a.require;a.bindToController && !C(c) && F(c) && R(N[b].instance, U(b, c, L, N));
					});q(N, function (a) {
						var b = a.instance;if (y(b.$onChanges)) try {
							b.$onChanges(a.bindingInfo.initialChanges);
						} catch (d) {
							c(d);
						}if (y(b.$onInit)) try {
							b.$onInit();
						} catch (e) {
							c(e);
						}y(b.$doCheck) && (J.$watch(function () {
							b.$doCheck();
						}), b.$doCheck());y(b.$onDestroy) && J.$on("$destroy", function () {
							b.$onDestroy();
						});
					});
					p = 0;for (t = h.length; p < t; p++) {
						u = h[p], ta(u, u.isolateScope ? G : e, L, g, u.require && U(u.directiveName, u.require, L, N), T);
					}var Q = e;B && (B.template || null === B.templateUrl) && (Q = G);a && a(Q, f.childNodes, void 0, l);for (p = k.length - 1; 0 <= p; p--) {
						u = k[p], ta(u, u.isolateScope ? G : e, L, g, u.require && U(u.directiveName, u.require, L, N), T);
					}q(N, function (a) {
						a = a.instance;y(a.$postLink) && a.$postLink();
					});
				}l = l || {};for (var p = -Number.MAX_VALUE, K = l.newScopeDirective, A = l.controllerDirectives, B = l.newIsolateScopeDirective, I = l.templateDirective, u = l.nonTlbTranscludeDirective, J = !1, N = !1, V = l.hasElementTranscludeDirective, G = d.$$element = D(b), t, L, T, O = e, Q, v = !1, Ma = !1, w, z = 0, E = a.length; z < E; z++) {
					t = a[z];var Na = t.$$start,
					    M = t.$$end;Na && (G = id(b, Na, M));T = void 0;if (p > t.priority) break;if (w = t.scope) t.templateUrl || (F(w) ? ($("new/isolated scope", B || K, t, G), B = t) : $("new/isolated scope", B, t, G)), K = K || t;L = t.name;if (!v && (t.replace && (t.templateUrl || t.template) || t.transclude && !t.$$tlb)) {
						for (w = z + 1; v = a[w++];) {
							if (v.transclude && !v.$$tlb || v.replace && (v.templateUrl || v.template)) {
								Ma = !0;break;
							}
						}v = !0;
					}!t.templateUrl && t.controller && (A = A || W(), $("'" + L + "' controller", A[L], t, G), A[L] = t);if (w = t.transclude) if (J = !0, t.$$tlb || ($("transclusion", u, t, G), u = t), "element" === w) V = !0, p = t.priority, T = G, G = d.$$element = D(ba.$$createComment(L, d[L])), b = G[0], la(f, va.call(T, 0), b), T[0].$$parentNode = T[0].parentNode, O = gc(Ma, T, e, p, g && g.name, { nonTlbTranscludeDirective: u });else {
						var ja = W();if (F(w)) {
							T = [];var P = W(),
							    jb = W();q(w, function (a, b) {
								var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;P[a] = b;ja[b] = null;jb[b] = c;
							});q(G.contents(), function (a) {
								var b = P[Ba(wa(a))];
								b ? (jb[b] = !0, ja[b] = ja[b] || [], ja[b].push(a)) : T.push(a);
							});q(jb, function (a, b) {
								if (!a) throw fa("reqslot", b);
							});for (var ec in ja) {
								ja[ec] && (ja[ec] = gc(Ma, ja[ec], e));
							}
						} else T = D(cc(b)).contents();G.empty();O = gc(Ma, T, e, void 0, void 0, { needsNewScope: t.$$isolateScope || t.$$newScope });O.$$slots = ja;
					}if (t.template) if (N = !0, $("template", I, t, G), I = t, w = y(t.template) ? t.template(G, d) : t.template, w = Ea(w), t.replace) {
						g = t;T = $b.test(w) ? kd(ha(t.templateNamespace, S(w))) : [];b = T[0];if (1 !== T.length || 1 !== b.nodeType) throw fa("tplrt", L, "");
						la(f, G, b);E = { $attr: {} };w = fc(b, [], E);var Y = a.splice(z + 1, a.length - (z + 1));(B || K) && aa(w, B, K);a = a.concat(w).concat(Y);da(d, E);E = a.length;
					} else G.html(w);if (t.templateUrl) N = !0, $("template", I, t, G), I = t, t.replace && (g = t), n = ga(a.splice(z, a.length - z), G, d, f, J && O, h, k, { controllerDirectives: A, newScopeDirective: K !== t && K, newIsolateScopeDirective: B, templateDirective: I, nonTlbTranscludeDirective: u }), E = a.length;else if (t.compile) try {
						Q = t.compile(G, d, O);var Z = t.$$originalDirective || t;y(Q) ? m(null, ab(Z, Q), Na, M) : Q && m(ab(Z, Q.pre), ab(Z, Q.post), Na, M);
					} catch (ea) {
						c(ea, ya(G));
					}t.terminal && (n.terminal = !0, p = Math.max(p, t.priority));
				}n.scope = K && !0 === K.scope;n.transcludeOnThisElement = J;n.templateOnThisElement = N;n.transclude = O;l.hasElementTranscludeDirective = V;return n;
			}function U(a, b, c, d) {
				var e;if (E(b)) {
					var f = b.match(l);b = b.substring(f[0].length);var g = f[1] || f[3],
					    f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
						var h = "$" + b + "Controller";e = g ? c.inheritedData(h) : c.data(h);
					}if (!e && !f) throw fa("ctreq", b, a);
				} else if (C(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
					e[g] = U(a, b[g], c, d);
				} else F(b) && (e = {}, q(b, function (b, f) {
					e[f] = U(a, b, c, d);
				}));return e || null;
			}function ca(a, b, c, d, e, f, g) {
				var h = W(),
				    k;for (k in d) {
					var l = d[k],
					    m = { $scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
					    n = l.controller;"@" === n && (n = b[l.name]);m = I(n, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
				}return h;
			}function aa(a, b, c) {
				for (var d = 0, e = a.length; d < e; d++) {
					a[d] = Ub(a[d], { $$isolateScope: b, $$newScope: c });
				}
			}function Y(b, c, f, g, h, k, l) {
				if (c === h) return null;var m = null;if (e.hasOwnProperty(c)) {
					h = a.get(c + "Directive");for (var n = 0, p = h.length; n < p; n++) {
						if (c = h[n], (x(g) || g > c.priority) && -1 !== c.restrict.indexOf(f)) {
							k && (c = Ub(c, { $$start: k, $$end: l }));if (!c.$$bindings) {
								var K = m = c,
								    r = c.name,
								    A = { isolateScope: null, bindToController: null };F(K.scope) && (!0 === K.bindToController ? (A.bindToController = d(K.scope, r, !0), A.isolateScope = {}) : A.isolateScope = d(K.scope, r, !1));F(K.bindToController) && (A.bindToController = d(K.bindToController, r, !0));if (A.bindToController && !K.controller) throw fa("noctrl", r);m = m.$$bindings = A;F(m.isolateScope) && (c.$$isolateBindings = m.isolateScope);
							}b.push(c);m = c;
						}
					}
				}return m;
			}function Z(b) {
				if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) {
					if (b = c[d], b.multiElement) return !0;
				}return !1;
			}function da(a, b) {
				var c = b.$attr,
				    d = a.$attr;q(a, function (d, e) {
					"$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]));
				});q(b, function (b, e) {
					a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
				});
			}
			function ga(a, b, d, e, g, h, k, l) {
				var m = [],
				    n,
				    p,
				    K = b[0],
				    r = a.shift(),
				    u = Ub(r, { templateUrl: null, transclude: null, replace: null, $$originalDirective: r }),
				    t = y(r.templateUrl) ? r.templateUrl(b, d) : r.templateUrl,
				    B = r.templateNamespace;b.empty();f(t).then(function (c) {
					var f, A;c = Ea(c);if (r.replace) {
						c = $b.test(c) ? kd(ha(B, S(c))) : [];f = c[0];if (1 !== c.length || 1 !== f.nodeType) throw fa("tplrt", r.name, t);c = { $attr: {} };la(e, b, f);var I = fc(f, [], c);F(r.scope) && aa(I, !0);a = I.concat(a);da(d, c);
					} else f = K, b.html(c);a.unshift(u);n = X(a, f, d, g, b, r, h, k, l);q(e, function (a, c) {
						a === f && (e[c] = b[0]);
					});for (p = Na(b[0].childNodes, g); m.length;) {
						c = m.shift();A = m.shift();var G = m.shift(),
						    J = m.shift(),
						    I = b[0];if (!c.$$destroyed) {
							if (A !== K) {
								var N = A.className;l.hasElementTranscludeDirective && r.replace || (I = cc(f));la(G, D(A), I);Ma(D(I), N);
							}A = n.transcludeOnThisElement ? ja(c, n.transclude, J) : J;n(p, c, I, e, A);
						}
					}m = null;
				}).catch(function (a) {
					a instanceof Error && c(a);
				});return function (a, b, c, d, e) {
					a = e;b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = ja(b, n.transclude, e)), n(p, b, c, d, a)));
				};
			}function ka(a, b) {
				var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
			}function $(a, b, c, d) {
				function e(a) {
					return a ? " (module: " + a + ")" : "";
				}if (b) throw fa("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
			}function ma(a, c) {
				var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
						a = a.parent();var b = !!a.length;b && ba.$$addBindingClass(a);return function (a, c) {
							var e = c.parent();b || ba.$$addBindingClass(e);ba.$$addBindingInfo(e, d.expressions);
							a.$watch(d, function (a) {
								c[0].nodeValue = a;
							});
						};
					} });
			}function ha(a, b) {
				a = P(a || "html");switch (a) {case "svg":case "math":
						var c = z.document.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
						return b;}
			}function pa(a, b) {
				if ("srcdoc" === b) return L.HTML;var c = wa(a);if ("src" === b || "ngSrc" === b) {
					if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c)) return L.RESOURCE_URL;
				} else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b) return L.RESOURCE_URL;
			}function ra(a, c, d, e, f) {
				var g = pa(a, e),
				    h = k[e] || f,
				    l = b(d, !f, g, h);if (l) {
					if ("multiple" === e && "select" === wa(a)) throw fa("selmulti", ya(a));if (m.test(e)) throw fa("nodomevents");c.push({ priority: 100, compile: function compile() {
							return { pre: function pre(a, c, f) {
									c = f.$$observers || (f.$$observers = W());var k = f[e];k !== d && (l = k && b(k, !0, g, h), d = k);l && (f[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (f.$$observers && f.$$observers[e].$$scope || a).$watch(l, function (a, b) {
										"class" === e && a !== b ? f.$updateClass(a, b) : f.$set(e, a);
									}));
								} };
						} });
				}
			}function la(a, b, c) {
				var d = b[0],
				    e = b.length,
				    f = d.parentNode,
				    g,
				    h;if (a) for (g = 0, h = a.length; g < h; g++) {
					if (a[g] === d) {
						a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) {
							h < k ? a[g] = a[h] : delete a[g];
						}a.length -= e - 1;a.context === d && (a.context = c);break;
					}
				}f && f.replaceChild(c, d);a = z.document.createDocumentFragment();for (g = 0; g < e; g++) {
					a.appendChild(b[g]);
				}D.hasData(d) && (D.data(c, D.data(d)), D(d).off("$destroy"));D.cleanData(a.querySelectorAll("*"));for (g = 1; g < e; g++) {
					delete b[g];
				}b[0] = c;b.length = 1;
			}function sa(a, b) {
				return R(function () {
					return a.apply(null, arguments);
				}, a, b);
			}function ta(a, b, d, e, f, g) {
				try {
					a(b, d, e, f, g);
				} catch (h) {
					c(h, ya(d));
				}
			}function oa(a, c, d, e, f) {
				function g(b, c, e) {
					!y(d.$onChanges) || c === e || c !== c && e !== e || (ea || (a.$$postDigest(T), ea = []), m || (m = {}, ea.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Ib(e, c));
				}function h() {
					d.$onChanges(m);m = void 0;
				}var k = [],
				    l = {},
				    m;q(e, function (e, h) {
					var m = e.attrName,
					    p = e.optional,
					    r,
					    A,
					    u,
					    B;switch (e.mode) {case "@":
							p || ua.call(c, m) || (d[h] = c[m] = void 0);p = c.$observe(m, function (a) {
								if (E(a) || Ia(a)) g(h, a, d[h]), d[h] = a;
							});c.$$observers[m].$$scope = a;r = c[m];E(r) ? d[h] = b(r)(a) : Ia(r) && (d[h] = r);l[h] = new Ib(hc, d[h]);k.push(p);break;case "=":
							if (!ua.call(c, m)) {
								if (p) break;c[m] = void 0;
							}if (p && !c[m]) break;A = n(c[m]);B = A.literal ? qa : function (a, b) {
								return a === b || a !== a && b !== b;
							};u = A.assign || function () {
								r = d[h] = A(a);throw fa("nonassign", c[m], m, f.name);
							};r = d[h] = A(a);p = function p(b) {
								B(b, d[h]) || (B(b, r) ? u(a, b = d[h]) : d[h] = b);return r = b;
							};p.$stateful = !0;p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, A.literal);k.push(p);break;case "<":
							if (!ua.call(c, m)) {
								if (p) break;
								c[m] = void 0;
							}if (p && !c[m]) break;A = n(c[m]);var I = A.literal,
							    G = d[h] = A(a);l[h] = new Ib(hc, d[h]);p = a.$watch(A, function (a, b) {
								if (b === a) {
									if (b === G || I && qa(b, G)) return;b = G;
								}g(h, a, b);d[h] = a;
							}, I);k.push(p);break;case "&":
							A = c.hasOwnProperty(m) ? n(c[m]) : w;if (A === w && p) break;d[h] = function (b) {
								return A(a, b);
							};}
				});return { initialChanges: l, removeWatches: k.length && function () {
						for (var a = 0, b = k.length; a < b; ++a) {
							k[a]();
						}
					} };
			}var Da = /^\w/,
			    xa = z.document.createElement("div"),
			    Fa = O,
			    Ga = u,
			    za = J,
			    ea;s.prototype = { $normalize: Ba, $addClass: function $addClass(a) {
					a && 0 < a.length && N.addClass(this.$$element, a);
				}, $removeClass: function $removeClass(a) {
					a && 0 < a.length && N.removeClass(this.$$element, a);
				}, $updateClass: function $updateClass(a, b) {
					var c = ld(a, b);c && c.length && N.addClass(this.$$element, c);(c = ld(b, a)) && c.length && N.removeClass(this.$$element, c);
				}, $set: function $set(a, b, d, e) {
					var f = dd(this.$$element[0], a),
					    g = md[a],
					    h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Nc(a, "-"));f = wa(this.$$element);if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = G(b, "src" === a);else if ("img" === f && "srcset" === a && v(b)) {
						for (var f = "", g = S(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) {
							var m = 2 * l,
							    f = f + G(S(g[m]), !0),
							    f = f + (" " + S(g[m + 1]));
						}g = S(g[2 * l]).split(/\s/);f += G(S(g[0]), !0);2 === g.length && (f += " " + S(g[1]));this[a] = b = f;
					}!1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : Da.test(e) ? this.$$element.attr(e, b) : Q(this.$$element[0], e, b));(a = this.$$observers) && q(a[h], function (a) {
						try {
							a(b);
						} catch (d) {
							c(d);
						}
					});
				},
				$observe: function $observe(a, b) {
					var c = this,
					    d = c.$$observers || (c.$$observers = W()),
					    e = d[a] || (d[a] = []);e.push(b);B.$evalAsync(function () {
						e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a]);
					});return function () {
						Za(e, b);
					};
				} };var Aa = b.startSymbol(),
			    Ca = b.endSymbol(),
			    Ea = "{{" === Aa && "}}" === Ca ? Xa : function (a) {
				return a.replace(/\{\{/g, Aa).replace(/}}/g, Ca);
			},
			    Ka = /^ngAttr[A-Z]/,
			    La = /^(.+)Start$/;ba.$$addBindingInfo = p ? function (a, b) {
				var c = a.data("$binding") || [];C(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
			} : w;ba.$$addBindingClass = p ? function (a) {
				Ma(a, "ng-binding");
			} : w;ba.$$addScopeInfo = p ? function (a, b, c, d) {
				a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
			} : w;ba.$$addScopeClass = p ? function (a, b) {
				Ma(a, b ? "ng-isolate-scope" : "ng-scope");
			} : w;ba.$$createComment = function (a, b) {
				var c = "";p && (c = " " + (a || "") + ": ", b && (c += b + " "));return z.document.createComment(c);
			};return ba;
		}];
	}function Ib(a, b) {
		this.previousValue = a;this.currentValue = b;
	}function Ba(a) {
		return a.replace(hd, "").replace(ng, fb);
	}function ld(a, b) {
		var d = "",
		    c = a.split(/\s+/),
		    f = b.split(/\s+/),
		    e = 0;a: for (; e < c.length; e++) {
			for (var g = c[e], h = 0; h < f.length; h++) {
				if (g === f[h]) continue a;
			}d += (0 < d.length ? " " : "") + g;
		}return d;
	}function kd(a) {
		a = D(a);var b = a.length;if (1 >= b) return a;for (; b--;) {
			var d = a[b];(8 === d.nodeType || d.nodeType === Ja && "" === d.nodeValue.trim()) && og.call(a, b, 1);
		}return a;
	}function mg(a, b) {
		if (b && E(b)) return b;if (E(a)) {
			var d = nd.exec(a);if (d) return d[3];
		}
	}function sf() {
		var a = {},
		    b = !1;this.has = function (b) {
			return a.hasOwnProperty(b);
		};this.register = function (b, c) {
			La(b, "controller");F(b) ? R(a, b) : a[b] = c;
		};this.allowGlobals = function () {
			b = !0;
		};this.$get = ["$injector", "$window", function (d, c) {
			function f(a, b, c, d) {
				if (!a || !F(a.$scope)) throw M("$controller")("noscp", d, b);a.$scope[b] = c;
			}return function (e, g, h, k) {
				var l, m, n;h = !0 === h;k && E(k) && (n = k);if (E(e)) {
					k = e.match(nd);if (!k) throw od("ctrlfmt", e);m = k[1];n = n || k[3];e = a.hasOwnProperty(m) ? a[m] : Pc(g.$scope, m, !0) || (b ? Pc(c, m, !0) : void 0);if (!e) throw od("ctrlreg", m);sb(e, m, !0);
				}if (h) return h = (C(e) ? e[e.length - 1] : e).prototype, l = Object.create(h || null), n && f(g, n, l, m || e.name), R(function () {
					var a = d.invoke(e, l, g, m);a !== l && (F(a) || y(a)) && (l = a, n && f(g, n, l, m || e.name));return l;
				}, { instance: l, identifier: n });l = d.instantiate(e, g, m);n && f(g, n, l, m || e.name);return l;
			};
		}];
	}function tf() {
		this.$get = ["$window", function (a) {
			return D(a.document);
		}];
	}function uf() {
		this.$get = ["$document", "$rootScope", function (a, b) {
			function d() {
				f = c.hidden;
			}var c = a[0],
			    f = c && c.hidden;a.on("visibilitychange", d);b.$on("$destroy", function () {
				a.off("visibilitychange", d);
			});return function () {
				return f;
			};
		}];
	}function vf() {
		this.$get = ["$log", function (a) {
			return function (b, d) {
				a.error.apply(a, arguments);
			};
		}];
	}function ic(a) {
		return F(a) ? ga(a) ? a.toISOString() : bb(a) : a;
	}function Af() {
		this.$get = function () {
			return function (a) {
				if (!a) return "";var b = [];Ec(a, function (a, c) {
					null === a || x(a) || (C(a) ? q(a, function (a) {
						b.push(ka(c) + "=" + ka(ic(a)));
					}) : b.push(ka(c) + "=" + ka(ic(a))));
				});return b.join("&");
			};
		};
	}function Bf() {
		this.$get = function () {
			return function (a) {
				function b(a, f, e) {
					null === a || x(a) || (C(a) ? q(a, function (a, c) {
						b(a, f + "[" + (F(a) ? c : "") + "]");
					}) : F(a) && !ga(a) ? Ec(a, function (a, c) {
						b(a, f + (e ? "" : "[") + c + (e ? "" : "]"));
					}) : d.push(ka(f) + "=" + ka(ic(a))));
				}if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
			};
		};
	}function jc(a, b) {
		if (E(a)) {
			var d = a.replace(pg, "").trim();if (d) {
				var c = b("Content-Type");(c = c && 0 === c.indexOf(pd)) || (c = (c = d.match(qg)) && rg[c[0]].test(d));c && (a = Ic(d));
			}
		}return a;
	}function qd(a) {
		var b = W(),
		    d;E(a) ? q(a.split("\n"), function (a) {
			d = a.indexOf(":");var f = P(S(a.substr(0, d)));a = S(a.substr(d + 1));f && (b[f] = b[f] ? b[f] + ", " + a : a);
		}) : F(a) && q(a, function (a, d) {
			var e = P(d),
			    g = S(a);e && (b[e] = b[e] ? b[e] + ", " + g : g);
		});return b;
	}function rd(a) {
		var b;return function (d) {
			b || (b = qd(a));return d ? (d = b[P(d)], void 0 === d && (d = null), d) : b;
		};
	}function sd(a, b, d, c) {
		if (y(c)) return c(a, b, d);q(c, function (c) {
			a = c(a, b, d);
		});return a;
	}function zf() {
		var a = this.defaults = { transformResponse: [jc], transformRequest: [function (a) {
				return F(a) && "[object File]" !== na.call(a) && "[object Blob]" !== na.call(a) && "[object FormData]" !== na.call(a) ? bb(a) : a;
			}], headers: { common: { Accept: "application/json, text/plain, */*" }, post: ra(kc), put: ra(kc),
				patch: ra(kc) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer", jsonpCallbackParam: "callback" },
		    b = !1;this.useApplyAsync = function (a) {
			return v(a) ? (b = !!a, this) : b;
		};var d = this.interceptors = [];this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (c, f, e, g, h, k, l, m) {
			function n(b) {
				function d(a, b) {
					for (var c = 0, e = b.length; c < e;) {
						var f = b[c++],
						    g = b[c++];a = a.then(f, g);
					}b.length = 0;return a;
				}function e(a, b) {
					var c,
					    d = {};q(a, function (a, e) {
						y(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
					});return d;
				}function f(a) {
					var b = R({}, a);b.data = sd(a.data, a.headers, a.status, g.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
				}if (!F(b)) throw M("$http")("badreq", b);if (!E(m.valueOf(b.url))) throw M("$http")("badreq", b.url);var g = R({ method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer, jsonpCallbackParam: a.jsonpCallbackParam }, b);g.headers = function (b) {
					var c = a.headers,
					    d = R({}, b.headers),
					    f,
					    g,
					    h,
					    c = R({}, c.common, c[P(b.method)]);a: for (f in c) {
						g = P(f);for (h in d) {
							if (P(h) === g) continue a;
						}d[f] = c[f];
					}return e(d, ra(b));
				}(b);g.method = ub(g.method);g.paramSerializer = E(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;c.$$incOutstandingRequestCount();var h = [],
				    n = [];b = k.resolve(g);q(u, function (a) {
					(a.request || a.requestError) && h.unshift(a.request, a.requestError);(a.response || a.responseError) && n.push(a.response, a.responseError);
				});b = d(b, h);b = b.then(function (b) {
					var c = b.headers,
					    d = sd(b.data, rd(c), void 0, b.transformRequest);x(d) && q(c, function (a, b) {
						"content-type" === P(b) && delete c[b];
					});x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);return p(b, d).then(f, f);
				});b = d(b, n);return b = b.finally(function () {
					c.$$completeOutstandingRequest(w);
				});
			}function p(c, d) {
				function g(a) {
					if (a) {
						var c = {};q(a, function (a, d) {
							c[d] = function (c) {
								function d() {
									a(c);
								}b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
							};
						});return c;
					}
				}function l(a, c, d, e) {
					function f() {
						p(c, a, d, e);
					}N && (200 <= a && 300 > a ? N.put(Q, [a, c, qd(d), e]) : N.remove(Q));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
				}function p(a, b, d, e) {
					b = -1 <= b ? b : 0;(200 <= b && 300 > b ? B.resolve : B.reject)({ data: a, status: b, headers: rd(d), config: c, statusText: e });
				}function K(a) {
					p(a.data, a.status, ra(a.headers()), a.statusText);
				}function u() {
					var a = n.pendingRequests.indexOf(c);-1 !== a && n.pendingRequests.splice(a, 1);
				}var B = k.defer(),
				    L = B.promise,
				    N,
				    G,
				    T = c.headers,
				    s = "jsonp" === P(c.method),
				    Q = c.url;s ? Q = m.getTrustedResourceUrl(Q) : E(Q) || (Q = m.valueOf(Q));Q = r(Q, c.paramSerializer(c.params));s && (Q = J(Q, c.jsonpCallbackParam));n.pendingRequests.push(c);L.then(u, u);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = F(c.cache) ? c.cache : F(a.cache) ? a.cache : O);N && (G = N.get(Q), v(G) ? G && y(G.then) ? G.then(K, K) : C(G) ? p(G[1], G[0], ra(G[2]), G[3]) : p(G, 200, {}, "OK") : N.put(Q, L));x(G) && ((G = td(c.url) ? e()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (T[c.xsrfHeaderName || a.xsrfHeaderName] = G), f(c.method, Q, d, l, T, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));return L;
			}function r(a, b) {
				0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);return a;
			}function J(a, b) {
				if (/[&?][^=]+=JSON_CALLBACK/.test(a)) throw ud("badjsonp", a);if (new RegExp("[&?]" + b + "=").test(a)) throw ud("badjsonp", b, a);return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK";
			}var O = g("$http");a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var u = [];q(d, function (a) {
				u.unshift(E(a) ? l.get(a) : l.invoke(a));
			});n.pendingRequests = [];(function (a) {
				q(arguments, function (a) {
					n[a] = function (b, c) {
						return n(R({}, c || {}, { method: a, url: b }));
					};
				});
			})("get", "delete", "head", "jsonp");(function (a) {
				q(arguments, function (a) {
					n[a] = function (b, c, d) {
						return n(R({}, d || {}, { method: a, url: b, data: c }));
					};
				});
			})("post", "put", "patch");n.defaults = a;return n;
		}];
	}function Df() {
		this.$get = function () {
			return function () {
				return new z.XMLHttpRequest();
			};
		};
	}function Cf() {
		this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
			return sg(a, c, a.defer, b, d[0]);
		}];
	}function sg(a, b, d, c, f) {
		function e(a, b, d) {
			a = a.replace("JSON_CALLBACK", b);var e = f.createElement("script"),
			    _m = null;e.type = "text/javascript";e.src = a;e.async = !0;_m = function m(a) {
				e.removeEventListener("load", _m);e.removeEventListener("error", _m);f.body.removeChild(e);e = null;var g = -1,
				    r = "unknown";a && ("load" !== a.type || c.wasCalled(b) || (a = { type: "error" }), r = a.type, g = "error" === a.type ? 404 : 200);d && d(g, r);
			};e.addEventListener("load", _m);e.addEventListener("error", _m);f.body.appendChild(e);return _m;
		}return function (f, h, k, l, m, n, p, r, J, O) {
			function u() {
				V && V();t && t.abort();
			}h = h || a.url();if ("jsonp" === P(f)) var H = c.createCallback(h),
			    V = e(h, H, function (a, b) {
				var e = 200 === a && c.getResponse(H);v(A) && d.cancel(A);V = t = null;l(a, e, "", b);c.removeCallback(H);
			});else {
				var t = b(f, h);t.open(f, h, !0);q(m, function (a, b) {
					v(a) && t.setRequestHeader(b, a);
				});t.onload = function () {
					var a = t.statusText || "",
					    b = "response" in t ? t.response : t.responseText,
					    c = 1223 === t.status ? 204 : t.status;0 === c && (c = b ? 200 : "file" === oa(h).protocol ? 404 : 0);var e = t.getAllResponseHeaders();v(A) && d.cancel(A);V = t = null;l(c, b, e, a);
				};f = function f() {
					v(A) && d.cancel(A);V = t = null;l(-1, null, null, "");
				};t.onerror = f;t.onabort = f;t.ontimeout = f;q(J, function (a, b) {
					t.addEventListener(b, a);
				});q(O, function (a, b) {
					t.upload.addEventListener(b, a);
				});p && (t.withCredentials = !0);if (r) try {
					t.responseType = r;
				} catch (s) {
					if ("json" !== r) throw s;
				}t.send(x(k) ? null : k);
			}if (0 < n) var A = d(u, n);else n && y(n.then) && n.then(u);
		};
	}function xf() {
		var a = "{{",
		    b = "}}";this.startSymbol = function (b) {
			return b ? (a = b, this) : a;
		};this.endSymbol = function (a) {
			return a ? (b = a, this) : b;
		};this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, f) {
			function e(a) {
				return "\\\\\\" + a;
			}function g(c) {
				return c.replace(n, a).replace(p, b);
			}function h(a, b, c, d) {
				var e = a.$watch(function (a) {
					e();return d(a);
				}, b, c);return e;
			}function k(e, k, n, p) {
				function H(a) {
					try {
						var b = a;a = n ? f.getTrusted(n, b) : f.valueOf(b);return p && !v(a) ? a : Yb(a);
					} catch (d) {
						c(Ca.interr(e, d));
					}
				}if (!e.length || -1 === e.indexOf(a)) {
					var q;k || (k = g(e), q = ma(k), q.exp = e, q.expressions = [], q.$$watchDelegate = h);return q;
				}p = !!p;var t,
				    s,
				    A = 0,
				    K = [],
				    I = [];q = e.length;for (var B = [], L = []; A < q;) {
					if (-1 !== (t = e.indexOf(a, A)) && -1 !== (s = e.indexOf(b, t + l))) A !== t && B.push(g(e.substring(A, t))), A = e.substring(t + l, s), K.push(A), I.push(d(A, H)), A = s + m, L.push(B.length), B.push("");else {
						A !== q && B.push(g(e.substring(A)));break;
					}
				}n && 1 < B.length && Ca.throwNoconcat(e);if (!k || K.length) {
					var N = function N(a) {
						for (var b = 0, c = K.length; b < c; b++) {
							if (p && x(a[b])) return;B[L[b]] = a[b];
						}return B.join("");
					};return R(function (a) {
						var b = 0,
						    d = K.length,
						    f = Array(d);try {
							for (; b < d; b++) {
								f[b] = I[b](a);
							}return N(f);
						} catch (g) {
							c(Ca.interr(e, g));
						}
					}, { exp: e, expressions: K, $$watchDelegate: function $$watchDelegate(a, b) {
							var c;return a.$watchGroup(I, function (d, e) {
								var f = N(d);y(b) && b.call(this, f, d !== e ? c : f, a);c = f;
							});
						} });
				}
			}var l = a.length,
			    m = b.length,
			    n = new RegExp(a.replace(/./g, e), "g"),
			    p = new RegExp(b.replace(/./g, e), "g");k.startSymbol = function () {
				return a;
			};k.endSymbol = function () {
				return b;
			};return k;
		}];
	}function yf() {
		this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, f) {
			function e(e, k, l, m) {
				function n() {
					p ? e.apply(null, r) : e(u);
				}var p = 4 < arguments.length,
				    r = p ? va.call(arguments, 4) : [],
				    J = b.setInterval,
				    q = b.clearInterval,
				    u = 0,
				    H = v(m) && !m,
				    V = (H ? c : d).defer(),
				    t = V.promise;l = v(l) ? l : 0;t.$$intervalId = J(function () {
					H ? f.defer(n) : a.$evalAsync(n);V.notify(u++);0 < l && u >= l && (V.resolve(u), q(t.$$intervalId), delete g[t.$$intervalId]);H || a.$apply();
				}, k);g[t.$$intervalId] = V;return t;
			}var g = {};e.cancel = function (a) {
				return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.catch(w), g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
			};return e;
		}];
	}function lc(a) {
		a = a.split("/");for (var b = a.length; b--;) {
			a[b] = cb(a[b]);
		}return a.join("/");
	}function vd(a, b) {
		var d = oa(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = Z(d.port) || tg[d.protocol] || null;
	}function wd(a, b) {
		if (ug.test(a)) throw kb("badpath", a);var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = oa(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = Lc(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
	}function mc(a, b) {
		return a.slice(0, b.length) === b;
	}function la(a, b) {
		if (mc(b, a)) return b.substr(a.length);
	}function Aa(a) {
		var b = a.indexOf("#");return -1 === b ? a : a.substr(0, b);
	}function lb(a) {
		return a.replace(/(#.+)|#$/, "$1");
	}function nc(a, b, d) {
		this.$$html5 = !0;d = d || "";vd(a, this);this.$$parse = function (a) {
			var d = la(b, a);if (!E(d)) throw kb("ipthprfx", a, b);wd(d, this);this.$$path || (this.$$path = "/");this.$$compose();
		};this.$$compose = function () {
			var a = Xb(this.$$search),
			    d = this.$$hash ? "#" + cb(this.$$hash) : "";this.$$url = lc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);this.$$urlUpdatedByLocation = !0;
		};this.$$parseLinkUrl = function (c, f) {
			if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;var e, g;v(e = la(a, c)) ? (g = e, g = d && v(e = la(d, e)) ? b + (la("/", e) || e) : a + g) : v(e = la(b, c)) ? g = b + e : b === c + "/" && (g = b);g && this.$$parse(g);return !!g;
		};
	}function oc(a, b, d) {
		vd(a, this);this.$$parse = function (c) {
			var f = la(a, c) || la(b, c),
			    e;x(f) || "#" !== f.charAt(0) ? this.$$html5 ? e = f : (e = "", x(f) && (a = c, this.replace())) : (e = la(d, f), x(e) && (e = f));wd(e, this);c = this.$$path;var f = a,
			    g = /^\/[A-Z]:(\/.*)/;mc(e, f) && (e = e.replace(f, ""));g.exec(e) || (c = (e = g.exec(c)) ? e[1] : c);this.$$path = c;this.$$compose();
		};this.$$compose = function () {
			var b = Xb(this.$$search),
			    f = this.$$hash ? "#" + cb(this.$$hash) : "";this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");this.$$urlUpdatedByLocation = !0;
		};this.$$parseLinkUrl = function (b, d) {
			return Aa(a) === Aa(b) ? (this.$$parse(b), !0) : !1;
		};
	}function xd(a, b, d) {
		this.$$html5 = !0;oc.apply(this, arguments);this.$$parseLinkUrl = function (c, f) {
			if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;var e, g;a === Aa(c) ? e = c : (g = la(b, c)) ? e = a + d + g : b === c + "/" && (e = b);e && this.$$parse(e);return !!e;
		};this.$$compose = function () {
			var b = Xb(this.$$search),
			    f = this.$$hash ? "#" + cb(this.$$hash) : "";this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f;this.$$absUrl = a + d + this.$$url;this.$$urlUpdatedByLocation = !0;
		};
	}function Jb(a) {
		return function () {
			return this[a];
		};
	}function yd(a, b) {
		return function (d) {
			if (x(d)) return this[a];this[a] = b(d);this.$$compose();return this;
		};
	}function Ff() {
		var a = "!",
		    b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
		this.hashPrefix = function (b) {
			return v(b) ? (a = b, this) : a;
		};this.html5Mode = function (a) {
			if (Ia(a)) return b.enabled = a, this;if (F(a)) {
				Ia(a.enabled) && (b.enabled = a.enabled);Ia(a.requireBase) && (b.requireBase = a.requireBase);if (Ia(a.rewriteLinks) || E(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;return this;
			}return b;
		};this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, f, e, g) {
			function h(a, b, d) {
				var e = l.url(),
				    f = l.$$state;try {
					c.url(a, b, d), l.$$state = c.state();
				} catch (g) {
					throw l.url(e), l.$$state = f, g;
				}
			}function k(a, b) {
				d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
			}var l, m;m = c.baseHref();var n = c.url(),
			    p;if (b.enabled) {
				if (!m && b.requireBase) throw kb("nobase");p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = f.history ? nc : xd;
			} else p = Aa(n), m = oc;var r = p.substr(0, Aa(p).lastIndexOf("/") + 1);l = new m(p, r, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var J = /^\s*(javascript|mailto):/i;e.on("click", function (a) {
				var f = b.rewriteLinks;if (f && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
					for (var h = D(a.target); "a" !== wa(h[0]);) {
						if (h[0] === e[0] || !(h = h.parent())[0]) return;
					}if (!E(f) || !x(h.attr(f))) {
						var f = h.prop("href"),
						    k = h.attr("href") || h.attr("xlink:href");F(f) && "[object SVGAnimatedString]" === f.toString() && (f = oa(f.animVal).href);J.test(f) || !f || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(f, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
					}
				}
			});lb(l.absUrl()) !== lb(n) && c.url(l.absUrl(), !0);var q = !0;
			c.onUrlChange(function (a, b) {
				mc(a, r) ? (d.$evalAsync(function () {
					var c = l.absUrl(),
					    e = l.$$state,
					    f;a = lb(a);l.$$parse(a);l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (q = !1, k(c, e)));
				}), d.$$phase || d.$digest()) : g.location.href = a;
			});d.$watch(function () {
				if (q || l.$$urlUpdatedByLocation) {
					l.$$urlUpdatedByLocation = !1;var a = lb(c.url()),
					    b = lb(l.absUrl()),
					    e = c.state(),
					    g = l.$$replace,
					    m = a !== b || l.$$html5 && f.history && e !== l.$$state;if (q || m) q = !1, d.$evalAsync(function () {
						var b = l.absUrl(),
						    c = d.$broadcast("$locationChangeStart", b, a, l.$$state, e).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = e) : (m && h(b, g, e === l.$$state ? null : l.$$state), k(a, e)));
					});
				}l.$$replace = !1;
			});return l;
		}];
	}function Gf() {
		var a = !0,
		    b = this;this.debugEnabled = function (b) {
			return v(b) ? (a = b, this) : a;
		};this.$get = ["$window", function (d) {
			function c(a) {
				a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
			}function f(a) {
				var b = d.console || {},
				    f = b[a] || b.log || w;a = !1;try {
					a = !!f.apply;
				} catch (k) {}return a ? function () {
					var a = [];q(arguments, function (b) {
						a.push(c(b));
					});return f.apply(b, a);
				} : function (a, b) {
					f(a, null == b ? "" : b);
				};
			}return { log: f("log"), info: f("info"), warn: f("warn"), error: f("error"), debug: function () {
					var c = f("debug");return function () {
						a && c.apply(b, arguments);
					};
				}() };
		}];
	}function vg(a) {
		return a + "";
	}function wg(a, b) {
		return "undefined" !== typeof a ? a : b;
	}function zd(a, b) {
		return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
	}function U(a, b) {
		var d, c, f;switch (a.type) {case s.Program:
				d = !0;q(a.body, function (a) {
					U(a.expression, b);d = d && a.expression.constant;
				});a.constant = d;break;case s.Literal:
				a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
				U(a.argument, b);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
				U(a.left, b);U(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
				U(a.left, b);U(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
				U(a.test, b);U(a.alternate, b);U(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
				a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
				U(a.object, b);a.computed && U(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
				d = f = a.filter ? !b(a.callee.name).$stateful : !1;c = [];q(a.arguments, function (a) {
					U(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
				});a.constant = d;a.toWatch = f ? c : [a];break;case s.AssignmentExpression:
				U(a.left, b);U(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case s.ArrayExpression:
				d = !0;c = [];q(a.elements, function (a) {
					U(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
				});a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
				d = !0;c = [];q(a.properties, function (a) {
					U(a.value, b);d = d && a.value.constant && !a.computed;a.value.constant || c.push.apply(c, a.value.toWatch);a.computed && (U(a.key, b), a.key.constant || c.push.apply(c, a.key.toWatch));
				});a.constant = d;a.toWatch = c;break;case s.ThisExpression:
				a.constant = !1;a.toWatch = [];break;case s.LocalsExpression:
				a.constant = !1, a.toWatch = [];}
	}function Ad(a) {
		if (1 === a.length) {
			a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : void 0;
		}
	}function Bd(a) {
		return a.type === s.Identifier || a.type === s.MemberExpression;
	}function Cd(a) {
		if (1 === a.body.length && Bd(a.body[0].expression)) return { type: s.AssignmentExpression, left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
	}function Dd(a) {
		return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
	}function Ed(a, b) {
		this.astBuilder = a;this.$filter = b;
	}function Fd(a, b) {
		this.astBuilder = a;this.$filter = b;
	}function pc(a) {
		return y(a.valueOf) ? a.valueOf() : xg.call(a);
	}function Hf() {
		var a = W(),
		    b = { "true": !0, "false": !1, "null": null, undefined: void 0 },
		    d,
		    c;this.addLiteral = function (a, c) {
			b[a] = c;
		};this.setIdentifierFns = function (a, b) {
			d = a;c = b;return this;
		};this.$get = ["$filter", function (f) {
			function e(a, b, c) {
				return null == a || null == b ? a === b : "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) || c || (a = pc(a), "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a))) ? a === b || a !== a && b !== b : !1;
			}function g(a, b, c, d, f) {
				var g = d.inputs,
				    h;if (1 === g.length) {
					var k = e,
					    g = g[0];return a.$watch(function (a) {
						var b = g(a);e(b, k, d.literal) || (h = d(a, void 0, void 0, [b]), k = b && pc(b));return h;
					}, b, c, f);
				}for (var l = [], m = [], n = 0, I = g.length; n < I; n++) {
					l[n] = e, m[n] = null;
				}return a.$watch(function (a) {
					for (var b = !1, c = 0, f = g.length; c < f; c++) {
						var k = g[c](a);if (b || (b = !e(k, l[c], d.literal))) m[c] = k, l[c] = k && pc(k);
					}b && (h = d(a, void 0, void 0, m));return h;
				}, b, c, f);
			}function h(a, b, c, d, e) {
				function f(a) {
					return d(a);
				}function h(a, c, d) {
					l = a;y(b) && b(a, c, d);v(a) && d.$$postDigest(function () {
						v(l) && k();
					});
				}var k, l;return k = d.inputs ? g(a, h, c, d, e) : a.$watch(f, h, c);
			}function k(a, b, c, d) {
				function e(a) {
					var b = !0;q(a, function (a) {
						v(a) || (b = !1);
					});return b;
				}var f, g;return f = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					g = a;y(b) && b(a, c, d);e(a) && d.$$postDigest(function () {
						e(g) && f();
					});
				}, c);
			}function l(a, b, c, d) {
				var e = a.$watch(function (a) {
					e();return d(a);
				}, b, c);return e;
			}function m(a, b) {
				if (!b) return a;var c = a.$$watchDelegate,
				    d = !1,
				    c = c !== k && c !== h ? function (c, e, f, g) {
					f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
				} : function (c, d, e, f) {
					e = a(c, d, e, f);c = b(e, c, d);return v(e) ? c : e;
				},
				    d = !a.inputs;a.$$watchDelegate && a.$$watchDelegate !== g ? (c.$$watchDelegate = a.$$watchDelegate, c.inputs = a.inputs) : b.$stateful || (c.$$watchDelegate = g, c.inputs = a.inputs ? a.inputs : [a]);return c;
			}var n = { csp: Ga().noUnsafeEval, literals: xa(b), isIdentifierStart: y(d) && d, isIdentifierContinue: y(c) && c };return function (b, c) {
				var d, e, u;switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "string":
						return u = b = b.trim(), d = a[u], d || (":" === b.charAt(0) && ":" === b.charAt(1) && (e = !0, b = b.substring(2)), d = new qc(n), d = new rc(d, f, n).parse(b), d.constant ? d.$$watchDelegate = l : e ? d.$$watchDelegate = d.literal ? k : h : d.inputs && (d.$$watchDelegate = g), a[u] = d), m(d, c);case "function":
						return m(b, c);default:
						return m(w, c);}
			};
		}];
	}function Jf() {
		var a = !0;this.$get = ["$rootScope", "$exceptionHandler", function (b, d) {
			return Gd(function (a) {
				b.$evalAsync(a);
			}, d, a);
		}];this.errorOnUnhandledRejections = function (b) {
			return v(b) ? (a = b, this) : a;
		};
	}function Kf() {
		var a = !0;this.$get = ["$browser", "$exceptionHandler", function (b, d) {
			return Gd(function (a) {
				b.defer(a);
			}, d, a);
		}];this.errorOnUnhandledRejections = function (b) {
			return v(b) ? (a = b, this) : a;
		};
	}function Gd(a, b, d) {
		function c() {
			return new f();
		}function f() {
			var a = this.promise = new e();this.resolve = function (b) {
				k(a, b);
			};this.reject = function (b) {
				m(a, b);
			};this.notify = function (b) {
				p(a, b);
			};
		}function e() {
			this.$$state = { status: 0 };
		}function g() {
			for (; !v && t.length;) {
				var a = t.shift();if (!a.pur) {
					a.pur = !0;var c = a.value,
					    c = "Possibly unhandled rejection: " + ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : x(c) ? "undefined" : "string" !== typeof c ? xe(c) : c);a.value instanceof Error ? b(a.value, c) : b(c);
				}
			}
		}function h(b) {
			!d || b.pending || 2 !== b.status || b.pur || (0 === v && 0 === t.length && a(g), t.push(b));!b.processScheduled && b.pending && (b.processScheduled = !0, ++v, a(function () {
				var c, e, f;f = b.pending;b.processScheduled = !1;b.pending = void 0;try {
					for (var h = 0, l = f.length; h < l; ++h) {
						b.pur = !0;e = f[h][0];c = f[h][b.status];try {
							y(c) ? k(e, c(b.value)) : 1 === b.status ? k(e, b.value) : m(e, b.value);
						} catch (n) {
							m(e, n);
						}
					}
				} finally {
					--v, d && 0 === v && a(g);
				}
			}));
		}function k(a, b) {
			a.$$state.status || (b === a ? n(a, H("qcycle", b)) : l(a, b));
		}function l(a, b) {
			function c(b) {
				g || (g = !0, l(a, b));
			}function d(b) {
				g || (g = !0, n(a, b));
			}function e(b) {
				p(a, b);
			}var f,
			    g = !1;try {
				if (F(b) || y(b)) f = b.then;y(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, h(a.$$state));
			} catch (k) {
				d(k);
			}
		}function m(a, b) {
			a.$$state.status || n(a, b);
		}function n(a, b) {
			a.$$state.value = b;a.$$state.status = 2;h(a.$$state);
		}function p(c, d) {
			var e = c.$$state.pending;0 >= c.$$state.status && e && e.length && a(function () {
				for (var a, c, f = 0, g = e.length; f < g; f++) {
					c = e[f][0];a = e[f][3];try {
						p(c, y(a) ? a(d) : d);
					} catch (h) {
						b(h);
					}
				}
			});
		}function r(a) {
			var b = new e();m(b, a);return b;
		}function J(a, b, c) {
			var d = null;try {
				y(c) && (d = c());
			} catch (e) {
				return r(e);
			}return d && y(d.then) ? d.then(function () {
				return b(a);
			}, r) : b(a);
		}function s(a, b, c, d) {
			var f = new e();k(f, a);return f.then(b, c, d);
		}function u(a) {
			if (!y(a)) throw H("norslvr", a);var b = new e();a(function (a) {
				k(b, a);
			}, function (a) {
				m(b, a);
			});return b;
		}var H = M("$q", TypeError),
		    v = 0,
		    t = [];R(e.prototype, { then: function then(a, b, c) {
				if (x(a) && x(b) && x(c)) return this;var d = new e();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && h(this.$$state);return d;
			}, "catch": function _catch(a) {
				return this.then(null, a);
			}, "finally": function _finally(a, b) {
				return this.then(function (b) {
					return J(b, w, a);
				}, function (b) {
					return J(b, r, a);
				}, b);
			} });var w = s;u.prototype = e.prototype;u.defer = c;u.reject = r;u.when = s;u.resolve = w;u.all = function (a) {
			var b = new e(),
			    c = 0,
			    d = C(a) ? [] : {};q(a, function (a, e) {
				c++;s(a).then(function (a) {
					d[e] = a;--c || k(b, d);
				}, function (a) {
					m(b, a);
				});
			});0 === c && k(b, d);return b;
		};u.race = function (a) {
			var b = c();q(a, function (a) {
				s(a).then(b.resolve, b.reject);
			});return b.promise;
		};return u;
	}function Tf() {
		this.$get = ["$window", "$timeout", function (a, b) {
			var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
			    c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
			    f = !!d,
			    e = f ? function (a) {
				var b = d(a);return function () {
					c(b);
				};
			} : function (a) {
				var c = b(a, 16.66, !1);return function () {
					b.cancel(c);
				};
			};e.supported = f;return e;
		}];
	}function If() {
		function a(a) {
			function b() {
				this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++qb;this.$$ChildScope = null;
			}b.prototype = a;return b;
		}var b = 10,
		    d = M("$rootScope"),
		    c = null,
		    f = null;this.digestTtl = function (a) {
			arguments.length && (b = a);return b;
		};this.$get = ["$exceptionHandler", "$parse", "$browser", function (e, g, h) {
			function k(a) {
				a.currentScope.$$destroyed = !0;
			}function l(a) {
				9 === Ha && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
			}function m() {
				this.$id = ++qb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
			}function n(a) {
				if (H.$$phase) throw d("inprog", H.$$phase);H.$$phase = a;
			}function p(a, b) {
				do {
					a.$$watchersCount += b;
				} while (a = a.$parent);
			}function r(a, b, c) {
				do {
					a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
				} while (a = a.$parent);
			}function J() {}function s() {
				for (; ia.length;) {
					try {
						ia.shift()();
					} catch (a) {
						e(a);
					}
				}f = null;
			}function u() {
				null === f && (f = h.defer(function () {
					H.$apply(s);
				}));
			}
			m.prototype = { constructor: m, $new: function $new(b, c) {
					var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c !== this) && d.$on("$destroy", k);return d;
				}, $watch: function $watch(a, b, d, e) {
					var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
					    k = h.$$watchers,
					    l = { fn: b, last: J, get: f, exp: e || a, eq: !!d };
					c = null;y(b) || (l.fn = w);k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);k.unshift(l);k.$$digestWatchIndex++;p(this, 1);return function () {
						var a = Za(k, l);0 <= a && (p(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);c = null;
					};
				}, $watchGroup: function $watchGroup(a, b) {
					function c() {
						h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
					}var d = Array(a.length),
					    e = Array(a.length),
					    f = [],
					    g = this,
					    h = !1,
					    k = !0;if (!a.length) {
						var l = !0;g.$evalAsync(function () {
							l && b(e, e, g);
						});return function () {
							l = !1;
						};
					}if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
						e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
					});q(a, function (a, b) {
						var k = g.$watch(a, function (a, f) {
							e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
						});f.push(k);
					});return function () {
						for (; f.length;) {
							f.shift()();
						}
					};
				}, $watchCollection: function $watchCollection(a, b) {
					function c(a) {
						e = a;var b, d, g, h;if (!x(e)) {
							if (F(e)) {
								if (sa(e)) for (f !== n && (f = n, t = f.length = 0, l++), a = e.length, t !== a && (l++, f.length = t = a), b = 0; b < a; b++) {
									h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
								} else {
									f !== p && (f = p = {}, t = 0, l++);a = 0;for (b in e) {
										ua.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (t++, f[b] = g, l++));
									}if (t > a) for (b in l++, f) {
										ua.call(e, b) || (t--, delete f[b]);
									}
								}
							} else f !== e && (f = e, l++);return l;
						}
					}c.$stateful = !0;var d = this,
					    e,
					    f,
					    h,
					    k = 1 < b.length,
					    l = 0,
					    m = g(a, c),
					    n = [],
					    p = {},
					    r = !0,
					    t = 0;return this.$watch(m, function () {
						r ? (r = !1, b(e, e, d)) : b(e, h, d);if (k) if (F(e)) {
							if (sa(e)) {
								h = Array(e.length);for (var a = 0; a < e.length; a++) {
									h[a] = e[a];
								}
							} else for (a in h = {}, e) {
								ua.call(e, a) && (h[a] = e[a]);
							}
						} else h = e;
					});
				}, $digest: function $digest() {
					var a,
					    g,
					    k,
					    l,
					    m,
					    p,
					    r,
					    u = b,
					    q,
					    w = [],
					    x,
					    ia;n("$digest");h.$$checkUrlChange();this === H && null !== f && (h.defer.cancel(f), s());c = null;do {
						r = !1;q = this;for (p = 0; p < v.length; p++) {
							try {
								ia = v[p], ia.scope.$eval(ia.expression, ia.locals);
							} catch (z) {
								e(z);
							}c = null;
						}v.length = 0;a: do {
							if (p = q.$$watchers) for (p.$$digestWatchIndex = p.length; p.$$digestWatchIndex--;) {
								try {
									if (a = p[p.$$digestWatchIndex]) if (m = a.get, (g = m(q)) !== (k = a.last) && !(a.eq ? qa(g, k) : da(g) && da(k))) r = !0, c = a, a.last = a.eq ? xa(g, null) : g, l = a.fn, l(g, k === J ? g : k, q), 5 > u && (x = 4 - u, w[x] || (w[x] = []), w[x].push({ msg: y(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k }));else if (a === c) {
										r = !1;break a;
									}
								} catch (D) {
									e(D);
								}
							}if (!(p = q.$$watchersCount && q.$$childHead || q !== this && q.$$nextSibling)) for (; q !== this && !(p = q.$$nextSibling);) {
								q = q.$parent;
							}
						} while (q = p);if ((r || v.length) && !u--) throw H.$$phase = null, d("infdig", b, w);
					} while (r || v.length);for (H.$$phase = null; A < t.length;) {
						try {
							t[A++]();
						} catch (E) {
							e(E);
						}
					}t.length = A = 0;h.$$checkUrlChange();
				}, $destroy: function $destroy() {
					if (!this.$$destroyed) {
						var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === H && h.$$applicationDestroyed();p(this, -this.$$watchersCount);
						for (var b in this.$$listenerCount) {
							r(this, this.$$listenerCount[b], b);
						}a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = w;this.$on = this.$watch = this.$watchGroup = function () {
							return w;
						};this.$$listeners = {};this.$$nextSibling = null;l(this);
					}
				}, $eval: function $eval(a, b) {
					return g(a)(this, b);
				}, $evalAsync: function $evalAsync(a, b) {
					H.$$phase || v.length || h.defer(function () {
						v.length && H.$digest();
					});v.push({ scope: this, expression: g(a), locals: b });
				}, $$postDigest: function $$postDigest(a) {
					t.push(a);
				}, $apply: function $apply(a) {
					try {
						n("$apply");try {
							return this.$eval(a);
						} finally {
							H.$$phase = null;
						}
					} catch (b) {
						e(b);
					} finally {
						try {
							H.$digest();
						} catch (c) {
							throw e(c), c;
						}
					}
				}, $applyAsync: function $applyAsync(a) {
					function b() {
						c.$eval(a);
					}var c = this;a && ia.push(b);a = g(a);u();
				}, $on: function $on(a, b) {
					var c = this.$$listeners[a];
					c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do {
						d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
					} while (d = d.$parent);var e = this;return function () {
						var d = c.indexOf(b);-1 !== d && (c[d] = null, r(e, 1, a));
					};
				}, $emit: function $emit(a, b) {
					var c = [],
					    d,
					    f = this,
					    g = !1,
					    h = { name: a, targetScope: f, stopPropagation: function stopPropagation() {
							g = !0;
						}, preventDefault: function preventDefault() {
							h.defaultPrevented = !0;
						}, defaultPrevented: !1 },
					    k = $a([h], arguments, 1),
					    l,
					    m;do {
						d = f.$$listeners[a] || c;h.currentScope = f;l = 0;for (m = d.length; l < m; l++) {
							if (d[l]) try {
								d[l].apply(null, k);
							} catch (n) {
								e(n);
							} else d.splice(l, 1), l--, m--;
						}if (g) return h.currentScope = null, h;f = f.$parent;
					} while (f);h.currentScope = null;return h;
				}, $broadcast: function $broadcast(a, b) {
					var c = this,
					    d = this,
					    f = { name: a, targetScope: this, preventDefault: function preventDefault() {
							f.defaultPrevented = !0;
						}, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return f;for (var g = $a([f], arguments, 1), h, k; c = d;) {
						f.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) {
							if (d[h]) try {
								d[h].apply(null, g);
							} catch (l) {
								e(l);
							} else d.splice(h, 1), h--, k--;
						}if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
							c = c.$parent;
						}
					}f.currentScope = null;return f;
				} };var H = new m(),
			    v = H.$$asyncQueue = [],
			    t = H.$$postDigestQueue = [],
			    ia = H.$$applyAsyncQueue = [],
			    A = 0;return H;
		}];
	}function Ae() {
		var a = /^\s*(https?|ftp|mailto|tel|file):/,
		    b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
			return v(b) ? (a = b, this) : a;
		};this.imgSrcSanitizationWhitelist = function (a) {
			return v(a) ? (b = a, this) : b;
		};this.$get = function () {
			return function (d, c) {
				var f = c ? b : a,
				    e;e = oa(d).href;return "" === e || e.match(f) ? d : "unsafe:" + e;
			};
		};
	}function yg(a) {
		if ("self" === a) return a;if (E(a)) {
			if (-1 < a.indexOf("***")) throw Da("iwcard", a);a = Hd(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");return new RegExp("^" + a + "$");
		}if (Wa(a)) return new RegExp("^" + a.source + "$");throw Da("imatcher");
	}function Id(a) {
		var b = [];v(a) && q(a, function (a) {
			b.push(yg(a));
		});return b;
	}function Mf() {
		this.SCE_CONTEXTS = pa;var a = ["self"],
		    b = [];this.resourceUrlWhitelist = function (b) {
			arguments.length && (a = Id(b));return a;
		};this.resourceUrlBlacklist = function (a) {
			arguments.length && (b = Id(a));return b;
		};this.$get = ["$injector", function (d) {
			function c(a, b) {
				return "self" === a ? td(b) : !!a.exec(b.href);
			}function f(a) {
				var b = function b(a) {
					this.$$unwrapTrustedValue = function () {
						return a;
					};
				};a && (b.prototype = new a());b.prototype.valueOf = function () {
					return this.$$unwrapTrustedValue();
				};b.prototype.toString = function () {
					return this.$$unwrapTrustedValue().toString();
				};return b;
			}var e = function e(a) {
				throw Da("unsafe");
			};d.has("$sanitize") && (e = d.get("$sanitize"));var g = f(),
			    h = {};h[pa.HTML] = f(g);h[pa.CSS] = f(g);h[pa.URL] = f(g);h[pa.JS] = f(g);h[pa.RESOURCE_URL] = f(h[pa.URL]);return { trustAs: function trustAs(a, b) {
					var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw Da("icontext", a, b);if (null === b || x(b) || "" === b) return b;if ("string" !== typeof b) throw Da("itype", a);return new c(b);
				}, getTrusted: function getTrusted(d, f) {
					if (null === f || x(f) || "" === f) return f;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && f instanceof g) return f.$$unwrapTrustedValue();if (d === pa.RESOURCE_URL) {
						var g = oa(f.toString()),
						    n,
						    p,
						    r = !1;n = 0;for (p = a.length; n < p; n++) {
							if (c(a[n], g)) {
								r = !0;break;
							}
						}if (r) for (n = 0, p = b.length; n < p; n++) {
							if (c(b[n], g)) {
								r = !1;break;
							}
						}if (r) return f;throw Da("insecurl", f.toString());
					}if (d === pa.HTML) return e(f);throw Da("unsafe");
				}, valueOf: function valueOf(a) {
					return a instanceof g ? a.$$unwrapTrustedValue() : a;
				} };
		}];
	}function Lf() {
		var a = !0;this.enabled = function (b) {
			arguments.length && (a = !!b);return a;
		};this.$get = ["$parse", "$sceDelegate", function (b, d) {
			if (a && 8 > Ha) throw Da("iequirks");var c = ra(pa);c.isEnabled = function () {
				return a;
			};c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
				return b;
			}, c.valueOf = Xa);c.parseAs = function (a, d) {
				var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
					return c.getTrusted(a, b);
				});
			};var f = c.parseAs,
			    e = c.getTrusted,
			    g = c.trustAs;q(pa, function (a, b) {
				var d = P(b);c[("parse_as_" + d).replace(sc, fb)] = function (b) {
					return f(a, b);
				};c[("get_trusted_" + d).replace(sc, fb)] = function (b) {
					return e(a, b);
				};c[("trust_as_" + d).replace(sc, fb)] = function (b) {
					return g(a, b);
				};
			});return c;
		}];
	}
	function Nf() {
		this.$get = ["$window", "$document", function (a, b) {
			var d = {},
			    c = !((!a.nw || !a.nw.process) && a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
			    f = Z((/android (\d+)/.exec(P((a.navigator || {}).userAgent)) || [])[1]),
			    e = /Boxee/i.test((a.navigator || {}).userAgent),
			    g = b[0] || {},
			    h = g.body && g.body.style,
			    k = !1,
			    l = !1;h && (k = !!("transition" in h || "webkitTransition" in h), l = !!("animation" in h || "webkitAnimation" in h));return { history: !(!c || 4 > f || e), hasEvent: function hasEvent(a) {
					if ("input" === a && Ha) return !1;if (x(d[a])) {
						var b = g.createElement("div");d[a] = "on" + a in b;
					}return d[a];
				}, csp: Ga(), transitions: k, animations: l, android: f };
		}];
	}function Pf() {
		var a;this.httpOptions = function (b) {
			return b ? (a = b, this) : a;
		};this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (b, d, c, f, e) {
			function g(h, k) {
				g.totalPendingRequests++;if (!E(h) || x(d.get(h))) h = e.getTrustedResourceUrl(h);var l = c.defaults && c.defaults.transformResponse;C(l) ? l = l.filter(function (a) {
					return a !== jc;
				}) : l === jc && (l = null);return c.get(h, R({ cache: d, transformResponse: l }, a)).finally(function () {
					g.totalPendingRequests--;
				}).then(function (a) {
					d.put(h, a.data);return a.data;
				}, function (a) {
					k || (a = zg("tpload", h, a.status, a.statusText), b(a));return f.reject(a);
				});
			}g.totalPendingRequests = 0;return g;
		}];
	}function Qf() {
		this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
			return { findBindings: function findBindings(a, b, d) {
					a = a.getElementsByClassName("ng-binding");var g = [];q(a, function (a) {
						var c = $.element(a).data("$binding");c && q(c, function (c) {
							d ? new RegExp("(^|\\s)" + Hd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a);
						});
					});return g;
				}, findModels: function findModels(a, b, d) {
					for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
						var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');if (k.length) return k;
					}
				}, getLocation: function getLocation() {
					return d.url();
				}, setLocation: function setLocation(b) {
					b !== d.url() && (d.url(b), a.$digest());
				}, whenStable: function whenStable(a) {
					b.notifyWhenNoOutstandingRequests(a);
				} };
		}];
	}function Rf() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, f) {
			function e(e, k, l) {
				y(e) || (l = k, k = e, e = w);var m = va.call(arguments, 3),
				    n = v(l) && !l,
				    p = (n ? c : d).defer(),
				    r = p.promise,
				    q;q = b.defer(function () {
					try {
						p.resolve(e.apply(null, m));
					} catch (b) {
						p.reject(b), f(b);
					} finally {
						delete g[r.$$timeoutId];
					}n || a.$apply();
				}, k);r.$$timeoutId = q;g[q] = p;return r;
			}var g = {};e.cancel = function (a) {
				return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.catch(w), g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
			};return e;
		}];
	}function oa(a) {
		Ha && (ca.setAttribute("href", a), a = ca.href);ca.setAttribute("href", a);return { href: ca.href, protocol: ca.protocol ? ca.protocol.replace(/:$/, "") : "", host: ca.host, search: ca.search ? ca.search.replace(/^\?/, "") : "", hash: ca.hash ? ca.hash.replace(/^#/, "") : "", hostname: ca.hostname, port: ca.port, pathname: "/" === ca.pathname.charAt(0) ? ca.pathname : "/" + ca.pathname };
	}function td(a) {
		a = E(a) ? oa(a) : a;return a.protocol === Jd.protocol && a.host === Jd.host;
	}function Sf() {
		this.$get = ma(z);
	}function Kd(a) {
		function b(a) {
			try {
				return decodeURIComponent(a);
			} catch (b) {
				return a;
			}
		}
		var d = a[0] || {},
		    c = {},
		    f = "";return function () {
			var a, g, h, k, l;try {
				a = d.cookie || "";
			} catch (m) {
				a = "";
			}if (a !== f) for (f = a, a = f.split("; "), c = {}, h = 0; h < a.length; h++) {
				g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), x(c[l]) && (c[l] = b(g.substring(k + 1))));
			}return c;
		};
	}function Wf() {
		this.$get = Kd;
	}function Xc(a) {
		function b(d, c) {
			if (F(d)) {
				var f = {};q(d, function (a, c) {
					f[c] = b(c, a);
				});return f;
			}return a.factory(d + "Filter", c);
		}this.register = b;this.$get = ["$injector", function (a) {
			return function (b) {
				return a.get(b + "Filter");
			};
		}];b("currency", Ld);b("date", Md);b("filter", Ag);b("json", Bg);b("limitTo", Cg);b("lowercase", Dg);b("number", Nd);b("orderBy", Od);b("uppercase", Eg);
	}function Ag() {
		return function (a, b, d, c) {
			if (!sa(a)) {
				if (null == a) return a;throw M("filter")("notarray", a);
			}c = c || "$";var f;switch (tc(b)) {case "function":
					break;case "boolean":case "null":case "number":case "string":
					f = !0;case "object":
					b = Fg(b, d, c, f);break;default:
					return a;}return Array.prototype.filter.call(a, b);
		};
	}function Fg(a, b, d, c) {
		var f = F(a) && d in a;!0 === b ? b = qa : y(b) || (b = function b(a, _b2) {
			if (x(a)) return !1;if (null === a || null === _b2) return a === _b2;if (F(_b2) || F(a) && !Vb(a)) return !1;a = P("" + a);_b2 = P("" + _b2);return -1 !== a.indexOf(_b2);
		});return function (e) {
			return f && !F(e) ? Ea(e, a[d], b, d, !1) : Ea(e, a, b, d, c);
		};
	}function Ea(a, b, d, c, f, e) {
		var g = tc(a),
		    h = tc(b);if ("string" === h && "!" === b.charAt(0)) return !Ea(a, b.substring(1), d, c, f);if (C(a)) return a.some(function (a) {
			return Ea(a, b, d, c, f);
		});switch (g) {case "object":
				var k;if (f) {
					for (k in a) {
						if ("$" !== k.charAt(0) && Ea(a[k], b, d, c, !0)) return !0;
					}return e ? !1 : Ea(a, b, d, c, !1);
				}if ("object" === h) {
					for (k in b) {
						if (e = b[k], !y(e) && !x(e) && (g = k === c, !Ea(g ? a : a[k], e, d, c, g, g))) return !1;
					}return !0;
				}return d(a, b);case "function":
				return !1;default:
				return d(a, b);}
	}function tc(a) {
		return null === a ? "null" : typeof a === "undefined" ? "undefined" : _typeof(a);
	}function Ld(a) {
		var b = a.NUMBER_FORMATS;return function (a, c, f) {
			x(c) && (c = b.CURRENCY_SYM);x(f) && (f = b.PATTERNS[1].maxFrac);return null == a ? a : Pd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, f).replace(/\u00A4/g, c);
		};
	}function Nd(a) {
		var b = a.NUMBER_FORMATS;return function (a, c) {
			return null == a ? a : Pd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
		};
	}function Gg(a) {
		var b = 0,
		    d,
		    c,
		    f,
		    e,
		    g;-1 < (c = a.indexOf(Qd)) && (a = a.replace(Qd, ""));0 < (f = a.search(/e/i)) ? (0 > c && (c = f), c += +a.slice(f + 1), a = a.substring(0, f)) : 0 > c && (c = a.length);for (f = 0; a.charAt(f) === uc; f++) {}if (f === (g = a.length)) d = [0], c = 1;else {
			for (g--; a.charAt(g) === uc;) {
				g--;
			}c -= f;d = [];for (e = 0; f <= g; f++, e++) {
				d[e] = +a.charAt(f);
			}
		}c > Rd && (d = d.splice(0, Rd - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
	}function Hg(a, b, d, c) {
		var f = a.d,
		    e = f.length - a.i;b = x(b) ? Math.min(Math.max(d, e), c) : +b;d = b + a.i;c = f[d];if (0 < d) {
			f.splice(Math.max(a.i, d));for (var g = d; g < f.length; g++) {
				f[g] = 0;
			}
		} else for (e = Math.max(0, e), a.i = 1, f.length = Math.max(1, d = b + 1), f[0] = 0, g = 1; g < d; g++) {
			f[g] = 0;
		}if (5 <= c) if (0 > d - 1) {
			for (c = 0; c > d; c--) {
				f.unshift(0), a.i++;
			}f.unshift(1);a.i++;
		} else f[d - 1]++;for (; e < Math.max(0, b); e++) {
			f.push(0);
		}if (b = f.reduceRight(function (a, b, c, d) {
			b += a;d[c] = b % 10;return Math.floor(b / 10);
		}, 0)) f.unshift(b), a.i++;
	}function Pd(a, b, d, c, f) {
		if (!E(a) && !Y(a) || isNaN(a)) return "";var e = !isFinite(a),
		    g = !1,
		    h = Math.abs(a) + "",
		    k = "";if (e) k = "\u221E";else {
			g = Gg(h);Hg(g, f, b.minFrac, b.maxFrac);
			k = g.d;h = g.i;f = g.e;e = [];for (g = k.reduce(function (a, b) {
				return a && !b;
			}, !0); 0 > h;) {
				k.unshift(0), h++;
			}0 < h ? e = k.splice(h, k.length) : (e = k, k = [0]);h = [];for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) {
				h.unshift(k.splice(-b.gSize, k.length).join(""));
			}k.length && h.unshift(k.join(""));k = h.join(d);e.length && (k += c + e.join(""));f && (k += "e+" + f);
		}return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
	}function Kb(a, b, d, c) {
		var f = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, f = "-");for (a = "" + a; a.length < b;) {
			a = uc + a;
		}d && (a = a.substr(a.length - b));return f + a;
	}function aa(a, b, d, c, f) {
		d = d || 0;return function (e) {
			e = e["get" + a]();if (0 < d || e > -d) e += d;0 === e && -12 === d && (e = 12);return Kb(e, b, c, f);
		};
	}function mb(a, b, d) {
		return function (c, f) {
			var e = c["get" + a](),
			    g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return f[g][e];
		};
	}function Sd(a) {
		var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
	}function Td(a) {
		return function (b) {
			var d = Sd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Kb(b, a);
		};
	}function vc(a, b) {
		return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
	}function Md(a) {
		function b(a) {
			var b;if (b = a.match(d)) {
				a = new Date(0);var e = 0,
				    g = 0,
				    h = b[8] ? a.setUTCFullYear : a.setFullYear,
				    k = b[8] ? a.setUTCHours : a.setHours;b[9] && (e = Z(b[9] + b[10]), g = Z(b[9] + b[11]));h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));e = Z(b[4] || 0) - e;g = Z(b[5] || 0) - g;h = Z(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, e, g, h, b);
			}return a;
		}var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function (c, d, e) {
			var g = "",
			    h = [],
			    k,
			    l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;E(c) && (c = Ig.test(c) ? Z(c) : b(c));Y(c) && (c = new Date(c));if (!ga(c) || !isFinite(c.getTime())) return c;for (; d;) {
				(l = Jg.exec(d)) ? (h = $a(h, l, 1), d = h.pop()) : (h.push(d), d = null);
			}var m = c.getTimezoneOffset();e && (m = Jc(e, m), c = Wb(c, e, !0));q(h, function (b) {
				k = Kg[b];g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
			});return g;
		};
	}function Bg() {
		return function (a, b) {
			x(b) && (b = 2);return bb(a, b);
		};
	}function Cg() {
		return function (a, b, d) {
			b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);if (da(b)) return a;Y(a) && (a = a.toString());if (!sa(a)) return a;d = !d || isNaN(d) ? 0 : Z(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? wc(a, d, d + b) : 0 === d ? wc(a, b, a.length) : wc(a, Math.max(0, d + b), d);
		};
	}function wc(a, b, d) {
		return E(a) ? a.slice(b, d) : va.call(a, b, d);
	}function Od(a) {
		function b(b) {
			return b.map(function (b) {
				var c = 1,
				    d = Xa;if (y(b)) d = b;else if (E(b)) {
					if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (d = a(b), d.constant)) var f = d(),
					    d = function d(a) {
						return a[f];
					};
				}return { get: d, descending: c };
			});
		}function d(a) {
			switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "number":case "boolean":case "string":
					return !0;default:
					return !1;}
		}function c(a, b) {
			var c = 0,
			    d = a.type,
			    k = b.type;if (d === k) {
				var k = a.value,
				    l = b.value;"string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (F(k) && (k = a.index), F(l) && (l = b.index));k !== l && (c = k < l ? -1 : 1);
			} else c = d < k ? -1 : 1;return c;
		}return function (a, e, g, h) {
			if (null == a) return a;if (!sa(a)) throw M("orderBy")("notarray", a);C(e) || (e = [e]);0 === e.length && (e = ["+"]);var k = b(e),
			    l = g ? -1 : 1,
			    m = y(h) ? h : c;a = Array.prototype.map.call(a, function (a, b) {
				return { value: a, tieBreaker: { value: b, type: "number", index: b }, predicateValues: k.map(function (c) {
						var e = c.get(a);c = typeof e === "undefined" ? "undefined" : _typeof(e);if (null === e) c = "string", e = "null";else if ("object" === c) a: {
							if (y(e.valueOf) && (e = e.valueOf(), d(e))) break a;Vb(e) && (e = e.toString(), d(e));
						}return { value: e, type: c, index: b };
					}) };
			});a.sort(function (a, b) {
				for (var c = 0, d = k.length; c < d; c++) {
					var e = m(a.predicateValues[c], b.predicateValues[c]);if (e) return e * k[c].descending * l;
				}return m(a.tieBreaker, b.tieBreaker) * l;
			});return a = a.map(function (a) {
				return a.value;
			});
		};
	}function Qa(a) {
		y(a) && (a = { link: a });a.restrict = a.restrict || "AC";return ma(a);
	}function Lb(a, b, d, c, f) {
		this.$$controls = [];this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = f(b.name || b.ngForm || "")(d);this.$dirty = !1;this.$valid = this.$pristine = !0;this.$submitted = this.$invalid = !1;this.$$parentForm = Mb;this.$$element = a;this.$$animate = c;Ud(this);
	}function Ud(a) {
		a.$$classCache = {};a.$$classCache[Vd] = !(a.$$classCache[nb] = a.$$element.hasClass(nb));
	}function Wd(a) {
		function b(a, b, c) {
			c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1);
		}function d(a, c, d) {
			c = c ? "-" + Nc(c, "-") : "";b(a, nb + c, !0 === d);b(a, Vd + c, !1 === d);
		}var c = a.set,
		    f = a.unset;a.clazz.prototype.$setValidity = function (a, g, h) {
			x(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, h)) : (this.$pending && f(this.$pending, a, h), Xd(this.$pending) && (this.$pending = void 0));
			Ia(g) ? g ? (f(this.$error, a, h), c(this.$$success, a, h)) : (c(this.$error, a, h), f(this.$$success, a, h)) : (f(this.$error, a, h), f(this.$$success, a, h));this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = Xd(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;d(this, a, g);this.$$parentForm.$setValidity(a, g, this);
		};
	}function Xd(a) {
		if (a) for (var b in a) {
			if (a.hasOwnProperty(b)) return !1;
		}return !0;
	}function xc(a) {
		a.$formatters.push(function (b) {
			return a.$isEmpty(b) ? b : b.toString();
		});
	}function Ra(a, b, d, c, f, e) {
		var g = P(b[0].type);if (!f.android) {
			var h = !1;b.on("compositionstart", function () {
				h = !0;
			});b.on("compositionend", function () {
				h = !1;l();
			});
		}var k,
		    l = function l(a) {
			k && (e.defer.cancel(k), k = null);if (!h) {
				var f = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (f = S(f));(c.$viewValue !== f || "" === f && c.$$hasNativeValidators) && c.$setViewValue(f, a);
			}
		};if (f.hasEvent("input")) b.on("input", l);else {
			var m = function m(a, b, c) {
				k || (k = e.defer(function () {
					k = null;b && b.value === c || l(a);
				}));
			};b.on("keydown", function (a) {
				var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
			});if (f.hasEvent("paste")) b.on("paste cut", m);
		}b.on("change", l);if (Yd[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
			if (!k) {
				var b = this.validity,
				    c = b.badInput,
				    d = b.typeMismatch;k = e.defer(function () {
					k = null;b.badInput === c && b.typeMismatch === d || l(a);
				});
			}
		});c.$render = function () {
			var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
		};
	}function Nb(a, b) {
		return function (d, c) {
			var f, e;if (ga(d)) return d;if (E(d)) {
				'"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (Lg.test(d)) return new Date(d);a.lastIndex = 0;if (f = a.exec(d)) return f.shift(), e = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(f, function (a, c) {
					c < b.length && (e[b[c]] = +a);
				}), new Date(e.yyyy, e.MM - 1, e.dd, e.HH, e.mm, e.ss || 0, 1E3 * e.sss || 0);
			}return NaN;
		};
	}function ob(a, b, d, c) {
		return function (f, e, g, h, k, l, m) {
			function n(a) {
				return a && !(a.getTime && a.getTime() !== a.getTime());
			}function p(a) {
				return v(a) && !ga(a) ? d(a) || void 0 : a;
			}yc(f, e, g, h);Ra(f, e, g, h, k, l);var r = h && h.$options.getOption("timezone"),
			    q;h.$$parserName = a;h.$parsers.push(function (a) {
				if (h.$isEmpty(a)) return null;if (b.test(a)) return a = d(a, q), r && (a = Wb(a, r)), a;
			});h.$formatters.push(function (a) {
				if (a && !ga(a)) throw pb("datefmt", a);if (n(a)) return (q = a) && r && (q = Wb(q, r, !0)), m("date")(a, c, r);q = null;return "";
			});if (v(g.min) || g.ngMin) {
				var s;h.$validators.min = function (a) {
					return !n(a) || x(s) || d(a) >= s;
				};g.$observe("min", function (a) {
					s = p(a);h.$validate();
				});
			}if (v(g.max) || g.ngMax) {
				var u;h.$validators.max = function (a) {
					return !n(a) || x(u) || d(a) <= u;
				};g.$observe("max", function (a) {
					u = p(a);h.$validate();
				});
			}
		};
	}function yc(a, b, d, c) {
		(c.$$hasNativeValidators = F(b[0].validity)) && c.$parsers.push(function (a) {
			var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? void 0 : a;
		});
	}function Zd(a) {
		a.$$parserName = "number";a.$parsers.push(function (b) {
			if (a.$isEmpty(b)) return null;if (Mg.test(b)) return parseFloat(b);
		});a.$formatters.push(function (b) {
			if (!a.$isEmpty(b)) {
				if (!Y(b)) throw pb("numfmt", b);b = b.toString();
			}return b;
		});
	}function Sa(a) {
		v(a) && !Y(a) && (a = parseFloat(a));return da(a) ? void 0 : a;
	}function zc(a) {
		var b = a.toString(),
		    d = b.indexOf(".");return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1;
	}function $d(a, b, d) {
		a = Number(a);var c = (a | 0) !== a,
		    f = (b | 0) !== b,
		    e = (d | 0) !== d;if (c || f || e) {
			var g = c ? zc(a) : 0,
			    h = f ? zc(b) : 0,
			    k = e ? zc(d) : 0,
			    g = Math.max(g, h, k),
			    g = Math.pow(10, g);a *= g;b *= g;d *= g;c && (a = Math.round(a));f && (b = Math.round(b));e && (d = Math.round(d));
		}return 0 === (a - b) % d;
	}function ae(a, b, d, c, f) {
		if (v(c)) {
			a = a(c);if (!a.constant) throw pb("constexpr", d, c);return a(b);
		}return f;
	}function Ac(a, b) {
		function d(a, b) {
			if (!a || !a.length) return [];if (!b || !b.length) return a;var c = [],
			    d = 0;a: for (; d < a.length; d++) {
				for (var e = a[d], f = 0; f < b.length; f++) {
					if (e === b[f]) continue a;
				}c.push(e);
			}return c;
		}function c(a) {
			var b = a;C(a) ? b = a.map(c).join(" ") : F(a) && (b = Object.keys(a).filter(function (b) {
				return a[b];
			}).join(" "));return b;
		}function f(a) {
			var b = a;if (C(a)) b = a.map(f);else if (F(a)) {
				var c = !1,
				    b = Object.keys(a).filter(function (b) {
					b = a[b];!c && x(b) && (c = !0);return b;
				});c && b.push(void 0);
			}return b;
		}a = "ngClass" + a;var e;return ["$parse", function (g) {
			return { restrict: "AC", link: function link(h, k, l) {
					function m(a, b) {
						var c = [];q(a, function (a) {
							if (0 < b || H[a]) H[a] = (H[a] || 0) + b, H[a] === +(0 < b) && c.push(a);
						});return c.join(" ");
					}function n(a) {
						if (a === b) {
							var c = t,
							    c = m(c && c.split(" "), 1);
							l.$addClass(c);
						} else c = t, c = m(c && c.split(" "), -1), l.$removeClass(c);w = a;
					}function p(a) {
						a = c(a);a !== t && r(a);
					}function r(a) {
						if (w === b) {
							var c = t && t.split(" "),
							    e = a && a.split(" "),
							    f = d(c, e),
							    c = d(e, c),
							    f = m(f, -1),
							    c = m(c, 1);l.$addClass(c);l.$removeClass(f);
						}t = a;
					}var s = l[a].trim(),
					    v = ":" === s.charAt(0) && ":" === s.charAt(1),
					    s = g(s, v ? f : c),
					    u = v ? p : r,
					    H = k.data("$classCounts"),
					    w = !0,
					    t;H || (H = W(), k.data("$classCounts", H));"ngClass" !== a && (e || (e = g("$index", function (a) {
						return a & 1;
					})), h.$watch(e, n));h.$watch(s, u, v);
				} };
		}];
	}function Ob(a, b, d, c, f, e, g, h, k) {
		this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = void 0;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = k(d.name || "", !1)(a);this.$$parentForm = Mb;this.$options = Pb;this.$$parsedNgModel = f(d.ngModel);this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
		this.$$ngModelGet = this.$$parsedNgModel;this.$$ngModelSet = this.$$parsedNgModelAssign;this.$$pendingDebounce = null;this.$$parserValid = void 0;this.$$currentValidationRunId = 0;this.$$scope = a;this.$$attr = d;this.$$element = c;this.$$animate = e;this.$$timeout = g;this.$$parse = f;this.$$q = h;this.$$exceptionHandler = b;Ud(this);Ng(this);
	}function Ng(a) {
		a.$$scope.$watch(function () {
			var b = a.$$ngModelGet(a.$$scope);if (b !== a.$modelValue && (a.$modelValue === a.$modelValue || b === b)) {
				a.$modelValue = a.$$rawModelValue = b;a.$$parserValid = void 0;for (var d = a.$formatters, c = d.length, f = b; c--;) {
					f = d[c](f);
				}a.$viewValue !== f && (a.$$updateEmptyClasses(f), a.$viewValue = a.$$lastCommittedViewValue = f, a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, w));
			}return b;
		});
	}function Bc(a) {
		this.$$options = a;
	}function be(a, b) {
		q(b, function (b, c) {
			v(a[c]) || (a[c] = b);
		});
	}var Og = /^\/(.+)\/([a-z]*)$/,
	    ua = Object.prototype.hasOwnProperty,
	    P = function P(a) {
		return E(a) ? a.toLowerCase() : a;
	},
	    ub = function ub(a) {
		return E(a) ? a.toUpperCase() : a;
	},
	    Ha,
	    D,
	    ta,
	    va = [].slice,
	    og = [].splice,
	    Pg = [].push,
	    na = Object.prototype.toString,
	    Gc = Object.getPrototypeOf,
	    Fa = M("ng"),
	    $ = z.angular || (z.angular = {}),
	    Zb,
	    qb = 0;Ha = z.document.documentMode;var da = Number.isNaN || function (a) {
		return a !== a;
	};w.$inject = [];Xa.$inject = [];var C = Array.isArray,
	    me = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
	    S = function S(a) {
		return E(a) ? a.trim() : a;
	},
	    Hd = function Hd(a) {
		return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
	},
	    Ga = function Ga() {
		if (!v(Ga.rules)) {
			var a = z.document.querySelector("[ng-csp]") || z.document.querySelector("[data-ng-csp]");if (a) {
				var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");Ga.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
			} else {
				a = Ga;try {
					new Function(""), b = !1;
				} catch (d) {
					b = !0;
				}a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
			}
		}return Ga.rules;
	},
	    rb = function rb() {
		if (v(rb.name_)) return rb.name_;var a,
		    b,
		    d = Ka.length,
		    c,
		    f;for (b = 0; b < d; ++b) {
			if (c = Ka[b], a = z.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
				f = a.getAttribute(c + "jq");break;
			}
		}return rb.name_ = f;
	},
	    oe = /:/g,
	    Ka = ["ng-", "data-ng-", "ng:", "x-ng-"],
	    re = function (a) {
		var b = a.currentScript,
		    b = b && b.getAttribute("src");if (!b) return !0;var d = a.createElement("a");d.href = b;if (a.location.origin === d.origin) return !0;switch (d.protocol) {case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":
				return !0;default:
				return !1;}
	}(z.document),
	    ue = /[A-Z]/g,
	    Oc = !1,
	    Ja = 3,
	    ze = { full: "1.6.2", major: 1, minor: 6, dot: 2, codeName: "llamacorn-lovehug" };X.expando = "ng339";var hb = X.cache = {},
	    ag = 1;
	X._data = function (a) {
		return this.cache[a[this.expando]] || {};
	};var Xf = /-([a-z])/g,
	    Qg = /^-ms-/,
	    zb = { mouseleave: "mouseout", mouseenter: "mouseover" },
	    ac = M("jqLite"),
	    $f = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
	    $b = /<|&#?\w+;/,
	    Yf = /<([\w:-]+)/,
	    Zf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	    ha = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ha.optgroup = ha.option;ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;ha.th = ha.td;var fg = z.Node.prototype.contains || function (a) {
		return !!(this.compareDocumentPosition(a) & 16);
	},
	    Oa = X.prototype = { ready: $c, toString: function toString() {
			var a = [];q(this, function (b) {
				a.push("" + b);
			});return "[" + a.join(", ") + "]";
		}, eq: function eq(a) {
			return 0 <= a ? D(this[a]) : D(this[this.length + a]);
		}, length: 0, push: Pg, sort: [].sort, splice: [].splice },
	    Fb = {};q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
		Fb[P(a)] = a;
	});var ed = {};q("input select option textarea button form details".split(" "), function (a) {
		ed[a] = !0;
	});var md = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern", ngStep: "step" };q({ data: dc, removeData: gb, hasData: function hasData(a) {
			for (var b in hb[a.ng339]) {
				return !0;
			}return !1;
		}, cleanData: function cleanData(a) {
			for (var b = 0, d = a.length; b < d; b++) {
				gb(a[b]);
			}
		} }, function (a, b) {
		X[b] = a;
	});q({ data: dc, inheritedData: Db, scope: function scope(a) {
			return D.data(a, "$scope") || Db(a.parentNode || a, ["$isolateScope", "$scope"]);
		}, isolateScope: function isolateScope(a) {
			return D.data(a, "$isolateScope") || D.data(a, "$isolateScopeNoTemplate");
		}, controller: bd, injector: function injector(a) {
			return Db(a, "$injector");
		}, removeAttr: function removeAttr(a, b) {
			a.removeAttribute(b);
		}, hasClass: Ab, css: function css(a, b, d) {
			b = wb(b.replace(Qg, "ms-"));if (v(d)) a.style[b] = d;else return a.style[b];
		}, attr: function attr(a, b, d) {
			var c = a.nodeType;if (c !== Ja && 2 !== c && 8 !== c && a.getAttribute) {
				var c = P(b),
				    f = Fb[c];if (v(d)) null === d || !1 === d && f ? a.removeAttribute(b) : a.setAttribute(b, f ? c : d);else return a = a.getAttribute(b), f && null !== a && (a = c), null === a ? void 0 : a;
			}
		}, prop: function prop(a, b, d) {
			if (v(d)) a[b] = d;else return a[b];
		}, text: function () {
			function a(a, d) {
				if (x(d)) {
					var c = a.nodeType;return 1 === c || c === Ja ? a.textContent : "";
				}a.textContent = d;
			}a.$dv = "";return a;
		}(), val: function val(a, b) {
			if (x(b)) {
				if (a.multiple && "select" === wa(a)) {
					var d = [];q(a.options, function (a) {
						a.selected && d.push(a.value || a.text);
					});return d;
				}return a.value;
			}a.value = b;
		}, html: function html(a, b) {
			if (x(b)) return a.innerHTML;xb(a, !0);a.innerHTML = b;
		},
		empty: cd }, function (a, b) {
		X.prototype[b] = function (b, c) {
			var f,
			    e,
			    g = this.length;if (a !== cd && x(2 === a.length && a !== Ab && a !== bd ? b : c)) {
				if (F(b)) {
					for (f = 0; f < g; f++) {
						if (a === dc) a(this[f], b);else for (e in b) {
							a(this[f], e, b[e]);
						}
					}return this;
				}f = a.$dv;g = x(f) ? Math.min(g, 1) : g;for (e = 0; e < g; e++) {
					var h = a(this[e], b, c);f = f ? f + h : h;
				}return f;
			}for (f = 0; f < g; f++) {
				a(this[f], b, c);
			}return this;
		};
	});q({ removeData: gb, on: function on(a, b, d, c) {
			if (v(c)) throw ac("onargs");if (Yc(a)) {
				c = yb(a, !0);var f = c.events,
				    e = c.handle;e || (e = c.handle = cg(a, f));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
					var h = f[b];h || (h = f[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, e));h.push(d);
				}; g--;) {
					b = c[g], zb[b] ? (h(zb[b], eg), h(b, void 0, !0)) : h(b);
				}
			}
		}, off: ad, one: function one(a, b, d) {
			a = D(a);a.on(b, function f() {
				a.off(b, d);a.off(b, f);
			});a.on(b, d);
		}, replaceWith: function replaceWith(a, b) {
			var d,
			    c = a.parentNode;xb(a);q(new X(b), function (b) {
				d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
			});
		}, children: function children(a) {
			var b = [];q(a.childNodes, function (a) {
				1 === a.nodeType && b.push(a);
			});return b;
		}, contents: function contents(a) {
			return a.contentDocument || a.childNodes || [];
		}, append: function append(a, b) {
			var d = a.nodeType;if (1 === d || 11 === d) {
				b = new X(b);for (var d = 0, c = b.length; d < c; d++) {
					a.appendChild(b[d]);
				}
			}
		}, prepend: function prepend(a, b) {
			if (1 === a.nodeType) {
				var d = a.firstChild;q(new X(b), function (b) {
					a.insertBefore(b, d);
				});
			}
		}, wrap: function wrap(a, b) {
			var d = D(b).eq(0).clone()[0],
			    c = a.parentNode;c && c.replaceChild(d, a);d.appendChild(a);
		}, remove: Eb, detach: function detach(a) {
			Eb(a, !0);
		}, after: function after(a, b) {
			var d = a,
			    c = a.parentNode;
			if (c) {
				b = new X(b);for (var f = 0, e = b.length; f < e; f++) {
					var g = b[f];c.insertBefore(g, d.nextSibling);d = g;
				}
			}
		}, addClass: Cb, removeClass: Bb, toggleClass: function toggleClass(a, b, d) {
			b && q(b.split(" "), function (b) {
				var f = d;x(f) && (f = !Ab(a, b));(f ? Cb : Bb)(a, b);
			});
		}, parent: function parent(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
		}, next: function next(a) {
			return a.nextElementSibling;
		}, find: function find(a, b) {
			return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
		}, clone: cc, triggerHandler: function triggerHandler(a, b, d) {
			var c,
			    f,
			    e = b.type || b,
			    g = yb(a);if (g = (g = g && g.events) && g[e]) c = { preventDefault: function preventDefault() {
					this.defaultPrevented = !0;
				}, isDefaultPrevented: function isDefaultPrevented() {
					return !0 === this.defaultPrevented;
				}, stopImmediatePropagation: function stopImmediatePropagation() {
					this.immediatePropagationStopped = !0;
				}, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
					return !0 === this.immediatePropagationStopped;
				}, stopPropagation: w, type: e, target: a }, b.type && (c = R(c, b)), b = ra(g), f = d ? [c].concat(d) : [c], q(b, function (b) {
				c.isImmediatePropagationStopped() || b.apply(a, f);
			});
		} }, function (a, b) {
		X.prototype[b] = function (b, c, f) {
			for (var e, g = 0, h = this.length; g < h; g++) {
				x(e) ? (e = a(this[g], b, c, f), v(e) && (e = D(e))) : bc(e, a(this[g], b, c, f));
			}return v(e) ? e : this;
		};
	});X.prototype.bind = X.prototype.on;X.prototype.unbind = X.prototype.off;var Rg = Object.create(null);fd.prototype = { _idx: function _idx(a) {
			if (a === this._lastKey) return this._lastIndex;this._lastKey = a;return this._lastIndex = this._keys.indexOf(a);
		}, _transformKey: function _transformKey(a) {
			return da(a) ? Rg : a;
		}, get: function get(a) {
			a = this._transformKey(a);a = this._idx(a);if (-1 !== a) return this._values[a];
		}, set: function set(a, b) {
			a = this._transformKey(a);var d = this._idx(a);-1 === d && (d = this._lastIndex = this._keys.length);this._keys[d] = a;this._values[d] = b;
		}, delete: function _delete(a) {
			a = this._transformKey(a);a = this._idx(a);if (-1 === a) return !1;this._keys.splice(a, 1);this._values.splice(a, 1);this._lastKey = NaN;this._lastIndex = -1;return !0;
		} };var Gb = fd,
	    Vf = [function () {
		this.$get = [function () {
			return Gb;
		}];
	}],
	    hg = /^([^(]+?)=>/,
	    ig = /^[^(]*\(\s*([^)]*)\)/m,
	    Sg = /,/,
	    Tg = /^\s*(_?)(\S+?)\1\s*$/,
	    gg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
	    za = M("$injector");db.$$annotate = function (a, b, d) {
		var c;if ("function" === typeof a) {
			if (!(c = a.$inject)) {
				c = [];if (a.length) {
					if (b) throw E(d) && d || (d = a.name || jg(a)), za("strictdi", d);b = gd(a);q(b[1].split(Sg), function (a) {
						a.replace(Tg, function (a, b, d) {
							c.push(d);
						});
					});
				}a.$inject = c;
			}
		} else C(a) ? (b = a.length - 1, sb(a[b], "fn"), c = a.slice(0, b)) : sb(a, "fn", !0);return c;
	};var ce = M("$animate"),
	    mf = function mf() {
		this.$get = w;
	},
	    nf = function nf() {
		var a = new Gb(),
		    b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
			function f(a, b, c) {
				var d = !1;b && (b = E(b) ? b.split(" ") : C(b) ? b : [], q(b, function (b) {
					b && (d = !0, a[b] = c);
				}));
				return d;
			}function e() {
				q(b, function (b) {
					var c = a.get(b);if (c) {
						var d = kg(b.attr("class")),
						    e = "",
						    f = "";q(c, function (a, b) {
							a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
						});q(b, function (a) {
							e && Cb(a, e);f && Bb(a, f);
						});a.delete(b);
					}
				});b.length = 0;
			}return { enabled: w, on: w, off: w, pin: w, push: function push(g, h, k, l) {
					l && l();k = k || {};k.from && g.css(k.from);k.to && g.css(k.to);if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = f(k, h, !0), l = f(k, l, !1), h || l) a.set(g, k), b.push(g), 1 === b.length && c.$$postDigest(e);
					g = new d();g.complete();return g;
				} };
		}];
	},
	    kf = ["$provide", function (a) {
		var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
			if (d && "." !== d.charAt(0)) throw ce("notcsel", d);var f = d + "-animation";b.$$registeredAnimations[d.substr(1)] = f;a.factory(f, c);
		};this.classNameFilter = function (a) {
			if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw ce("nongcls", "ng-animate");return this.$$classNameFilter;
		};
		this.$get = ["$$animateQueue", function (a) {
			function b(a, c, d) {
				if (d) {
					var h;a: {
						for (h = 0; h < d.length; h++) {
							var k = d[h];if (1 === k.nodeType) {
								h = k;break a;
							}
						}h = void 0;
					}!h || h.parentNode || h.previousElementSibling || (d = null);
				}d ? d.after(a) : c.prepend(a);
			}return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
					a.end && a.end();
				}, enter: function enter(f, e, g, h) {
					e = e && D(e);g = g && D(g);e = e || g.parent();b(f, e, g);return a.push(f, "enter", ea(h));
				}, move: function move(f, e, g, h) {
					e = e && D(e);g = g && D(g);e = e || g.parent();b(f, e, g);return a.push(f, "move", ea(h));
				}, leave: function leave(b, c) {
					return a.push(b, "leave", ea(c), function () {
						b.remove();
					});
				}, addClass: function addClass(b, c, g) {
					g = ea(g);g.addClass = ib(g.addclass, c);return a.push(b, "addClass", g);
				}, removeClass: function removeClass(b, c, g) {
					g = ea(g);g.removeClass = ib(g.removeClass, c);return a.push(b, "removeClass", g);
				}, setClass: function setClass(b, c, g, h) {
					h = ea(h);h.addClass = ib(h.addClass, c);h.removeClass = ib(h.removeClass, g);return a.push(b, "setClass", h);
				}, animate: function animate(b, c, g, h, k) {
					k = ea(k);k.from = k.from ? R(k.from, c) : c;k.to = k.to ? R(k.to, g) : g;k.tempClasses = ib(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
				} };
		}];
	}],
	    pf = function pf() {
		this.$get = ["$$rAF", function (a) {
			function b(b) {
				d.push(b);1 < d.length || a(function () {
					for (var a = 0; a < d.length; a++) {
						d[a]();
					}d = [];
				});
			}var d = [];return function () {
				var a = !1;b(function () {
					a = !0;
				});return function (d) {
					a ? d() : b(d);
				};
			};
		}];
	},
	    of = function of() {
		this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (a, b, d, c, f) {
			function e(a) {
				this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
					c() ? f(a, 0, !1) : b(a);
				};this._state = 0;
			}e.chain = function (a, b) {
				function c() {
					if (d === a.length) b(!0);else a[d](function (a) {
						!1 === a ? b(!1) : (d++, c());
					});
				}var d = 0;c();
			};e.all = function (a, b) {
				function c(f) {
					e = e && f;++d === a.length && b(e);
				}var d = 0,
				    e = !0;q(a, function (a) {
					a.done(c);
				});
			};e.prototype = { setHost: function setHost(a) {
					this.host = a || {};
				}, done: function done(a) {
					2 === this._state ? a() : this._doneCallbacks.push(a);
				}, progress: w, getPromise: function getPromise() {
					if (!this.promise) {
						var b = this;this.promise = a(function (a, c) {
							b.done(function (b) {
								!1 === b ? c() : a();
							});
						});
					}return this.promise;
				},
				then: function then(a, b) {
					return this.getPromise().then(a, b);
				}, "catch": function _catch(a) {
					return this.getPromise()["catch"](a);
				}, "finally": function _finally(a) {
					return this.getPromise()["finally"](a);
				}, pause: function pause() {
					this.host.pause && this.host.pause();
				}, resume: function resume() {
					this.host.resume && this.host.resume();
				}, end: function end() {
					this.host.end && this.host.end();this._resolve(!0);
				}, cancel: function cancel() {
					this.host.cancel && this.host.cancel();this._resolve(!1);
				}, complete: function complete(a) {
					var b = this;0 === b._state && (b._state = 1, b._tick(function () {
						b._resolve(a);
					}));
				},
				_resolve: function _resolve(a) {
					2 !== this._state && (q(this._doneCallbacks, function (b) {
						b(a);
					}), this._doneCallbacks.length = 0, this._state = 2);
				} };return e;
		}];
	},
	    lf = function lf() {
		this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
			return function (b, f) {
				function e() {
					a(function () {
						g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);h || k.complete();h = !0;
					});return k;
				}var g = f || {};g.$$prepared || (g = xa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var h,
				    k = new d();return { start: e, end: e };
			};
		}];
	},
	    fa = M("$compile"),
	    hc = new function () {}();Qc.$inject = ["$provide", "$$sanitizeUriProvider"];Ib.prototype.isFirstChange = function () {
		return this.previousValue === hc;
	};var hd = /^((?:x|data)[:\-_])/i,
	    ng = /[:\-_]+(.)/g,
	    od = M("$controller"),
	    nd = /^(\S+)(\s+as\s+([\w$]+))?$/,
	    wf = function wf() {
		this.$get = ["$document", function (a) {
			return function (b) {
				b ? !b.nodeType && b instanceof D && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
			};
		}];
	},
	    pd = "application/json",
	    kc = { "Content-Type": pd + ";charset=utf-8" },
	    qg = /^\[|^\{(?!\{)/,
	    rg = { "[": /]$/, "{": /}$/ },
	    pg = /^\)]\}',?\n/,
	    ud = M("$http"),
	    Ca = $.$interpolateMinErr = M("$interpolate");Ca.throwNoconcat = function (a) {
		throw Ca("noconcat", a);
	};Ca.interr = function (a, b) {
		return Ca("interr", a, b.toString());
	};var Ef = function Ef() {
		this.$get = ["$window", function (a) {
			function b(a) {
				var b = function b(a) {
					b.data = a;b.called = !0;
				};b.id = a;return b;
			}var d = a.angular.callbacks,
			    c = {};return { createCallback: function createCallback(a) {
					a = "_" + (d.$$counter++).toString(36);var e = "angular.callbacks." + a,
					    g = b(a);c[e] = d[a] = g;return e;
				}, wasCalled: function wasCalled(a) {
					return c[a].called;
				}, getResponse: function getResponse(a) {
					return c[a].data;
				}, removeCallback: function removeCallback(a) {
					delete d[c[a].id];delete c[a];
				} };
		}];
	},
	    Ug = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
	    tg = { http: 80, https: 443, ftp: 21 },
	    kb = M("$location"),
	    ug = /^\s*[\\/]{2,}/,
	    Vg = { $$absUrl: "", $$html5: !1, $$replace: !1, absUrl: Jb("$$absUrl"), url: function url(a) {
			if (x(a)) return this.$$url;var b = Ug.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
		}, protocol: Jb("$$protocol"), host: Jb("$$host"), port: Jb("$$port"), path: yd("$$path", function (a) {
			a = null !== a ? a.toString() : "";return "/" === a.charAt(0) ? a : "/" + a;
		}), search: function search(a, b) {
			switch (arguments.length) {case 0:
					return this.$$search;case 1:
					if (E(a) || Y(a)) a = a.toString(), this.$$search = Lc(a);else if (F(a)) a = xa(a, {}), q(a, function (b, c) {
						null == b && delete a[c];
					}), this.$$search = a;else throw kb("isrcharg");break;default:
					x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
		},
		hash: yd("$$hash", function (a) {
			return null !== a ? a.toString() : "";
		}), replace: function replace() {
			this.$$replace = !0;return this;
		} };q([xd, oc, nc], function (a) {
		a.prototype = Object.create(Vg);a.prototype.state = function (b) {
			if (!arguments.length) return this.$$state;if (a !== nc || !this.$$html5) throw kb("nostate");this.$$state = x(b) ? null : b;this.$$urlUpdatedByLocation = !0;return this;
		};
	});var Ta = M("$parse"),
	    xg = {}.constructor.prototype.valueOf,
	    Qb = W();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
		Qb[a] = !0;
	});
	var Wg = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
	    qc = function qc(a) {
		this.options = a;
	};qc.prototype = { constructor: qc, lex: function lex(a) {
			this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) {
				if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
					var b = a + this.peek(),
					    d = b + this.peek(2),
					    c = Qb[b],
					    f = Qb[d];Qb[a] || c || f ? (a = f ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
				}
			}return this.tokens;
		}, is: function is(a, b) {
			return -1 !== b.indexOf(a);
		}, peek: function peek(a) {
			a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
		}, isNumber: function isNumber(a) {
			return "0" <= a && "9" >= a && "string" === typeof a;
		},
		isWhitespace: function isWhitespace(a) {
			return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
		}, isIdentifierStart: function isIdentifierStart(a) {
			return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
		}, isValidIdentifierStart: function isValidIdentifierStart(a) {
			return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
		}, isIdentifierContinue: function isIdentifierContinue(a) {
			return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
		},
		isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
			return this.isValidIdentifierStart(a, b) || this.isNumber(a);
		}, codePointAt: function codePointAt(a) {
			return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
		}, peekMultichar: function peekMultichar() {
			var a = this.text.charAt(this.index),
			    b = this.peek();if (!b) return a;var d = a.charCodeAt(0),
			    c = b.charCodeAt(0);return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
		}, isExpOperator: function isExpOperator(a) {
			return "-" === a || "+" === a || this.isNumber(a);
		}, throwError: function throwError(a, b, d) {
			d = d || this.index;b = v(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw Ta("lexerr", a, b, this.text);
		}, readNumber: function readNumber() {
			for (var a = "", b = this.index; this.index < this.text.length;) {
				var d = P(this.text.charAt(this.index));if ("." === d || this.isNumber(d)) a += d;else {
					var c = this.peek();if ("e" === d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
				}this.index++;
			}this.tokens.push({ index: b,
				text: a, constant: !0, value: Number(a) });
		}, readIdent: function readIdent() {
			var a = this.index;for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
				var b = this.peekMultichar();if (!this.isIdentifierContinue(b)) break;this.index += b.length;
			}this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
		}, readString: function readString(a) {
			var b = this.index;this.index++;for (var d = "", c = a, f = !1; this.index < this.text.length;) {
				var e = this.text.charAt(this.index),
				    c = c + e;if (f) "u" === e ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Wg[e] || e, f = !1;else if ("\\" === e) f = !0;else {
					if (e === a) {
						this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
					}d += e;
				}this.index++;
			}this.throwError("Unterminated quote", b);
		} };var s = function s(a, b) {
		this.lexer = a;this.options = b;
	};s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.LocalsExpression = "LocalsExpression";s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
			this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
		}, program: function program() {
			for (var a = [];;) {
				if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return { type: s.Program, body: a };
			}
		}, expressionStatement: function expressionStatement() {
			return { type: s.ExpressionStatement, expression: this.filterChain() };
		}, filterChain: function filterChain() {
			for (var a = this.expression(); this.expect("|");) {
				a = this.filter(a);
			}return a;
		},
		expression: function expression() {
			return this.assignment();
		}, assignment: function assignment() {
			var a = this.ternary();if (this.expect("=")) {
				if (!Bd(a)) throw Ta("lval");a = { type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "=" };
			}return a;
		}, ternary: function ternary() {
			var a = this.logicalOR(),
			    b,
			    d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: b, consequent: d }) : a;
		}, logicalOR: function logicalOR() {
			for (var a = this.logicalAND(); this.expect("||");) {
				a = { type: s.LogicalExpression,
					operator: "||", left: a, right: this.logicalAND() };
			}return a;
		}, logicalAND: function logicalAND() {
			for (var a = this.equality(); this.expect("&&");) {
				a = { type: s.LogicalExpression, operator: "&&", left: a, right: this.equality() };
			}return a;
		}, equality: function equality() {
			for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
				a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.relational() };
			}return a;
		}, relational: function relational() {
			for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
				a = { type: s.BinaryExpression, operator: b.text,
					left: a, right: this.additive() };
			}return a;
		}, additive: function additive() {
			for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
				a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.multiplicative() };
			}return a;
		}, multiplicative: function multiplicative() {
			for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
				a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.unary() };
			}return a;
		}, unary: function unary() {
			var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
		},
		primary: function primary() {
			var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = xa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: s.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) {
				"(" === b.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");
			}return a;
		}, filter: function filter(a) {
			a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) {
				a.push(this.expression());
			}return b;
		}, parseArguments: function parseArguments() {
			var a = [];if (")" !== this.peekToken().text) {
				do {
					a.push(this.filterChain());
				} while (this.expect(","));
			}return a;
		}, identifier: function identifier() {
			var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: s.Identifier, name: a.text };
		}, constant: function constant() {
			return { type: s.Literal, value: this.consume().value };
		}, arrayDeclaration: function arrayDeclaration() {
			var a = [];if ("]" !== this.peekToken().text) {
				do {
					if (this.peek("]")) break;a.push(this.expression());
				} while (this.expect(","));
			}this.consume("]");
			return { type: s.ArrayExpression, elements: a };
		}, object: function object() {
			var a = [],
			    b;if ("}" !== this.peekToken().text) {
				do {
					if (this.peek("}")) break;b = { type: s.Property, kind: "init" };this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());a.push(b);
				} while (this.expect(","));
			}this.consume("}");return { type: s.ObjectExpression, properties: a };
		}, throwError: function throwError(a, b) {
			throw Ta("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
		}, consume: function consume(a) {
			if (0 === this.tokens.length) throw Ta("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
		}, peekToken: function peekToken() {
			if (0 === this.tokens.length) throw Ta("ueoe", this.text);return this.tokens[0];
		}, peek: function peek(a, b, d, c) {
			return this.peekAhead(0, a, b, d, c);
		}, peekAhead: function peekAhead(a, b, d, c, f) {
			if (this.tokens.length > a) {
				a = this.tokens[a];var e = a.text;if (e === b || e === d || e === c || e === f || !(b || d || c || f)) return a;
			}return !1;
		}, expect: function expect(a, b, d, c) {
			return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
		}, selfReferential: { "this": { type: s.ThisExpression }, $locals: { type: s.LocalsExpression } } };Ed.prototype = { compile: function compile(a) {
			var b = this;a = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {},
				fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };U(a, b.$filter);var d = "",
			    c;this.stage = "assign";if (c = Cd(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l");c = Ad(a.body);b.stage = "inputs";q(c, function (a, c) {
				var d = "fn" + c;b.state[d] = { vars: [], body: [], own: {} };b.state.computing = d;var h = b.nextId();b.recurse(a, h);b.return_(h);b.state.inputs.push(d);a.watchId = c;
			});this.state.computing = "fn";this.stage = "main";
			this.recurse(a);d = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;";d = new Function("$filter", "getStringValue", "ifDefined", "plus", d)(this.$filter, vg, wg, zd);this.state = this.stage = void 0;d.literal = Dd(a);d.constant = a.constant;return d;
		}, USE: "use", STRICT: "strict", watchFns: function watchFns() {
			var a = [],
			    b = this.state.inputs,
			    d = this;q(b, function (b) {
				a.push("var " + b + "=" + d.generateFunction(b, "s"));
			});b.length && a.push("fn.inputs=[" + b.join(",") + "];");return a.join("");
		}, generateFunction: function generateFunction(a, b) {
			return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
		}, filterPrefix: function filterPrefix() {
			var a = [],
			    b = this;q(this.state.filters, function (d, c) {
				a.push(d + "=$filter(" + b.escape(c) + ")");
			});return a.length ? "var " + a.join(",") + ";" : "";
		}, varsPrefix: function varsPrefix(a) {
			return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
		}, body: function body(a) {
			return this.state[a].body.join("");
		}, recurse: function recurse(a, b, d, c, f, e) {
			var g,
			    h,
			    k = this,
			    l,
			    m,
			    n;c = c || w;if (!e && v(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, f, !0));else switch (a.type) {case s.Program:
					q(a.body, function (b, c) {
						k.recurse(b.expression, void 0, void 0, function (a) {
							h = a;
						});c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
					});break;case s.Literal:
					m = this.escape(a.value);this.assign(b, m);c(b || m);break;case s.UnaryExpression:
					this.recurse(a.argument, void 0, void 0, function (a) {
						h = a;
					});m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);c(m);break;case s.BinaryExpression:
					this.recurse(a.left, void 0, void 0, function (a) {
						g = a;
					});this.recurse(a.right, void 0, void 0, function (a) {
						h = a;
					});m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
					b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));c(b);break;case s.ConditionalExpression:
					b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
					b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
						k.if_("inputs" === k.stage || "s", function () {
							f && 1 !== f && k.if_(k.isNull(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
						});
					}, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));c(b);break;case s.MemberExpression:
					g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, void 0, function () {
						k.if_(k.notNull(g), function () {
							a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), f && 1 !== f && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.computedMember(g, h), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (f && 1 !== f && k.if_(k.isNull(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}")), m = k.nonComputedMember(g, a.property.name), k.assign(b, m), d && (d.computed = !1, d.name = a.property.name));
						}, function () {
							k.assign(b, "undefined");
						});c(b);
					}, !!f);break;case s.CallExpression:
					b = b || this.nextId();a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
						var b = k.nextId();k.recurse(a, b);l.push(b);
					}), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
						k.if_(k.notNull(h), function () {
							q(a.arguments, function (b) {
								k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
									l.push(a);
								});
							});m = g.name ? k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : h + "(" + l.join(",") + ")";k.assign(b, m);
						}, function () {
							k.assign(b, "undefined");
						});c(b);
					}));break;case s.AssignmentExpression:
					h = this.nextId();g = {};this.recurse(a.left, void 0, g, function () {
						k.if_(k.notNull(g.context), function () {
							k.recurse(a.right, h);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
						});
					}, 1);break;
				case s.ArrayExpression:
					l = [];q(a.elements, function (b) {
						k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
							l.push(a);
						});
					});m = "[" + l.join(",") + "]";this.assign(b, m);c(b || m);break;case s.ObjectExpression:
					l = [];n = !1;q(a.properties, function (a) {
						a.computed && (n = !0);
					});n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
						a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;h = k.nextId();k.recurse(a.value, h);k.assign(k.member(b, g, a.computed), h);
					})) : (q(a.properties, function (b) {
						k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
							l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
						});
					}), m = "{" + l.join(",") + "}", this.assign(b, m));c(b || m);break;case s.ThisExpression:
					this.assign(b, "s");c(b || "s");break;case s.LocalsExpression:
					this.assign(b, "l");c(b || "l");break;case s.NGValueParameter:
					this.assign(b, "v"), c(b || "v");}
		}, getHasOwnProperty: function getHasOwnProperty(a, b) {
			var d = a + "." + b,
			    c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
		}, assign: function assign(a, b) {
			if (a) return this.current().body.push(a, "=", b, ";"), a;
		}, filter: function filter(a) {
			this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
		}, ifDefined: function ifDefined(a, b) {
			return "ifDefined(" + a + "," + this.escape(b) + ")";
		}, plus: function plus(a, b) {
			return "plus(" + a + "," + b + ")";
		}, return_: function return_(a) {
			this.current().body.push("return ", a, ";");
		}, if_: function if_(a, b, d) {
			if (!0 === a) b();else {
				var c = this.current().body;c.push("if(", a, "){");b();c.push("}");d && (c.push("else{"), d(), c.push("}"));
			}
		}, not: function not(a) {
			return "!(" + a + ")";
		}, isNull: function isNull(a) {
			return a + "==null";
		}, notNull: function notNull(a) {
			return a + "!=null";
		}, nonComputedMember: function nonComputedMember(a, b) {
			var d = /[^$_a-zA-Z0-9]/g;return (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
			);
		}, computedMember: function computedMember(a, b) {
			return a + "[" + b + "]";
		}, member: function member(a, b, d) {
			return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
		}, getStringValue: function getStringValue(a) {
			this.assign(a, "getStringValue(" + a + ")");
		}, lazyRecurse: function lazyRecurse(a, b, d, c, f, e) {
			var g = this;return function () {
				g.recurse(a, b, d, c, f, e);
			};
		}, lazyAssign: function lazyAssign(a, b) {
			var d = this;return function () {
				d.assign(a, b);
			};
		}, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
			return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
		}, escape: function escape(a) {
			if (E(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (Y(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";
			if ("undefined" === typeof a) return "undefined";throw Ta("esc");
		}, nextId: function nextId(a, b) {
			var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
		}, current: function current() {
			return this.state[this.state.computing];
		} };Fd.prototype = { compile: function compile(a) {
			var b = this;a = this.astBuilder.ast(a);U(a, b.$filter);var d, c;if (d = Cd(a)) c = this.recurse(d);d = Ad(a.body);var f;d && (f = [], q(d, function (a, c) {
				var d = b.recurse(a);a.input = d;f.push(d);a.watchId = c;
			}));var e = [];q(a.body, function (a) {
				e.push(b.recurse(a.expression));
			});
			d = 0 === a.body.length ? w : 1 === a.body.length ? e[0] : function (a, b) {
				var c;q(e, function (d) {
					c = d(a, b);
				});return c;
			};c && (d.assign = function (a, b, d) {
				return c(a, d, b);
			});f && (d.inputs = f);d.literal = Dd(a);d.constant = a.constant;return d;
		}, recurse: function recurse(a, b, d) {
			var c,
			    f,
			    e = this,
			    g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
					return this.value(a.value, b);case s.UnaryExpression:
					return f = this.recurse(a.argument), this["unary" + a.operator](f, b);case s.BinaryExpression:
					return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);case s.LogicalExpression:
					return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);case s.ConditionalExpression:
					return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case s.Identifier:
					return e.identifier(a.name, b, d);case s.MemberExpression:
					return c = this.recurse(a.object, !1, !!d), a.computed || (f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(c, f, b, d) : this.nonComputedMember(c, f, b, d);case s.CallExpression:
					return g = [], q(a.arguments, function (a) {
						g.push(e.recurse(a));
					}), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, e) {
						for (var n = [], p = 0; p < g.length; ++p) {
							n.push(g[p](a, c, d, e));
						}a = f.apply(void 0, n, e);return b ? { context: void 0, name: void 0, value: a } : a;
					} : function (a, c, d, e) {
						var n = f(a, c, d, e),
						    p;if (null != n.value) {
							p = [];for (var r = 0; r < g.length; ++r) {
								p.push(g[r](a, c, d, e));
							}p = n.value.apply(n.context, p);
						}return b ? { value: p } : p;
					};case s.AssignmentExpression:
					return c = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function (a, d, e, g) {
						var n = c(a, d, e, g);a = f(a, d, e, g);n.context[n.name] = a;return b ? { value: a } : a;
					};case s.ArrayExpression:
					return g = [], q(a.elements, function (a) {
						g.push(e.recurse(a));
					}), function (a, c, d, e) {
						for (var f = [], p = 0; p < g.length; ++p) {
							f.push(g[p](a, c, d, e));
						}return b ? { value: f } : f;
					};case s.ObjectExpression:
					return g = [], q(a.properties, function (a) {
						a.computed ? g.push({ key: e.recurse(a.key), computed: !0, value: e.recurse(a.value) }) : g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, computed: !1, value: e.recurse(a.value) });
					}), function (a, c, d, e) {
						for (var f = {}, p = 0; p < g.length; ++p) {
							g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
						}return b ? { value: f } : f;
					};case s.ThisExpression:
					return function (a) {
						return b ? { value: a } : a;
					};case s.LocalsExpression:
					return function (a, c) {
						return b ? { value: c } : c;
					};case s.NGValueParameter:
					return function (a, c, d) {
						return b ? { value: d } : d;
					};}
		}, "unary+": function unary(a, b) {
			return function (d, c, f, e) {
				d = a(d, c, f, e);d = v(d) ? +d : 0;return b ? { value: d } : d;
			};
		}, "unary-": function unary(a, b) {
			return function (d, c, f, e) {
				d = a(d, c, f, e);d = v(d) ? -d : -0;return b ? { value: d } : d;
			};
		}, "unary!": function unary(a, b) {
			return function (d, c, f, e) {
				d = !a(d, c, f, e);return b ? { value: d } : d;
			};
		}, "binary+": function binary(a, b, d) {
			return function (c, f, e, g) {
				var h = a(c, f, e, g);c = b(c, f, e, g);h = zd(h, c);return d ? { value: h } : h;
			};
		}, "binary-": function binary(a, b, d) {
			return function (c, f, e, g) {
				var h = a(c, f, e, g);c = b(c, f, e, g);h = (v(h) ? h : 0) - (v(c) ? c : 0);return d ? { value: h } : h;
			};
		}, "binary*": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) * b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary/": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) / b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary%": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) % b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary===": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) === b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary!==": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) !== b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary==": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) == b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary!=": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) != b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary<": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) < b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary>": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) > b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary<=": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) <= b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary>=": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) >= b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary&&": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) && b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "binary||": function binary(a, b, d) {
			return function (c, f, e, g) {
				c = a(c, f, e, g) || b(c, f, e, g);return d ? { value: c } : c;
			};
		}, "ternary?:": function ternary(a, b, d, c) {
			return function (f, e, g, h) {
				f = a(f, e, g, h) ? b(f, e, g, h) : d(f, e, g, h);return c ? { value: f } : f;
			};
		}, value: function value(a, b) {
			return function () {
				return b ? { context: void 0, name: void 0, value: a } : a;
			};
		}, identifier: function identifier(a, b, d) {
			return function (c, f, e, g) {
				c = f && a in f ? f : c;d && 1 !== d && c && null == c[a] && (c[a] = {});f = c ? c[a] : void 0;return b ? { context: c, name: a, value: f } : f;
			};
		}, computedMember: function computedMember(a, b, d, c) {
			return function (f, e, g, h) {
				var k = a(f, e, g, h),
				    l,
				    m;null != k && (l = b(f, e, g, h), l += "", c && 1 !== c && k && !k[l] && (k[l] = {}), m = k[l]);return d ? { context: k, name: l, value: m } : m;
			};
		}, nonComputedMember: function nonComputedMember(a, b, d, c) {
			return function (f, e, g, h) {
				f = a(f, e, g, h);c && 1 !== c && f && null == f[b] && (f[b] = {});e = null != f ? f[b] : void 0;return d ? { context: f, name: b, value: e } : e;
			};
		}, inputs: function inputs(a, b) {
			return function (d, c, f, e) {
				return e ? e[b] : a(d, c, f);
			};
		} };var rc = function rc(a, b, d) {
		this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(a, d);this.astCompiler = d.csp ? new Fd(this.ast, b) : new Ed(this.ast, b);
	};rc.prototype = { constructor: rc, parse: function parse(a) {
			return this.astCompiler.compile(a);
		} };var Da = M("$sce"),
	    pa = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
	    sc = /_([a-z])/g,
	    zg = M("$compile"),
	    ca = z.document.createElement("a"),
	    Jd = oa(z.location.href);Kd.$inject = ["$document"];Xc.$inject = ["$provide"];var Rd = 22,
	    Qd = ".",
	    uc = "0";Ld.$inject = ["$locale"];Nd.$inject = ["$locale"];var Kg = { yyyy: aa("FullYear", 4, 0, !1, !0), yy: aa("FullYear", 2, 0, !0, !0), y: aa("FullYear", 1, 0, !1, !0), MMMM: mb("Month"), MMM: mb("Month", !0), MM: aa("Month", 2, 1), M: aa("Month", 1, 1), LLLL: mb("Month", !1, !0), dd: aa("Date", 2), d: aa("Date", 1), HH: aa("Hours", 2), H: aa("Hours", 1), hh: aa("Hours", 2, -12), h: aa("Hours", 1, -12), mm: aa("Minutes", 2), m: aa("Minutes", 1), ss: aa("Seconds", 2), s: aa("Seconds", 1), sss: aa("Milliseconds", 3), EEEE: mb("Day"), EEE: mb("Day", !0), a: function a(_a2, b) {
			return 12 > _a2.getHours() ? b.AMPMS[0] : b.AMPMS[1];
		}, Z: function Z(a, b, d) {
			a = -1 * d;return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
		}, ww: Td(2), w: Td(1), G: vc, GG: vc, GGG: vc, GGGG: function GGGG(a, b) {
			return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
		} },
	    Jg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
	    Ig = /^-?\d+$/;Md.$inject = ["$locale"];var Dg = ma(P),
	    Eg = ma(ub);Od.$inject = ["$parse"];var Be = ma({ restrict: "E", compile: function compile(a, b) {
			if (!b.href && !b.xlinkHref) return function (a, b) {
				if ("a" === b[0].nodeName.toLowerCase()) {
					var f = "[object SVGAnimatedString]" === na.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
						b.attr(f) || a.preventDefault();
					});
				}
			};
		} }),
	    vb = {};q(Fb, function (a, b) {
		function d(a, d, f) {
			a.$watch(f[c], function (a) {
				f.$set(b, !!a);
			});
		}if ("multiple" !== a) {
			var c = Ba("ng-" + b),
			    f = d;"checked" === a && (f = function f(a, b, _f2) {
				_f2.ngModel !== _f2[c] && d(a, b, _f2);
			});vb[c] = function () {
				return { restrict: "A", priority: 100, link: f };
			};
		}
	});q(md, function (a, b) {
		vb[b] = function () {
			return { priority: 100, link: function link(a, c, f) {
					if ("ngPattern" === b && "/" === f.ngPattern.charAt(0) && (c = f.ngPattern.match(Og))) {
						f.$set("ngPattern", new RegExp(c[1], c[2]));return;
					}a.$watch(f[b], function (a) {
						f.$set(b, a);
					});
				} };
		};
	});q(["src", "srcset", "href"], function (a) {
		var b = Ba("ng-" + a);vb[b] = function () {
			return { priority: 99, link: function link(d, c, f) {
					var e = a,
					    g = a;"href" === a && "[object SVGAnimatedString]" === na.call(c.prop("href")) && (g = "xlinkHref", f.$attr[g] = "xlink:href", e = null);f.$observe(b, function (b) {
						b ? (f.$set(g, b), Ha && e && c.prop(e, f[g])) : "href" === a && f.$set(g, null);
					});
				} };
		};
	});
	var Mb = { $addControl: w, $$renameControl: function $$renameControl(a, b) {
			a.$name = b;
		}, $removeControl: w, $setValidity: w, $setDirty: w, $setPristine: w, $setSubmitted: w };Lb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];Lb.prototype = { $rollbackViewValue: function $rollbackViewValue() {
			q(this.$$controls, function (a) {
				a.$rollbackViewValue();
			});
		}, $commitViewValue: function $commitViewValue() {
			q(this.$$controls, function (a) {
				a.$commitViewValue();
			});
		}, $addControl: function $addControl(a) {
			La(a.$name, "input");this.$$controls.push(a);a.$name && (this[a.$name] = a);a.$$parentForm = this;
		},
		$$renameControl: function $$renameControl(a, b) {
			var d = a.$name;this[d] === a && delete this[d];this[b] = a;a.$name = b;
		}, $removeControl: function $removeControl(a) {
			a.$name && this[a.$name] === a && delete this[a.$name];q(this.$pending, function (b, d) {
				this.$setValidity(d, null, a);
			}, this);q(this.$error, function (b, d) {
				this.$setValidity(d, null, a);
			}, this);q(this.$$success, function (b, d) {
				this.$setValidity(d, null, a);
			}, this);Za(this.$$controls, a);a.$$parentForm = Mb;
		}, $setDirty: function $setDirty() {
			this.$$animate.removeClass(this.$$element, Ua);this.$$animate.addClass(this.$$element, Rb);this.$dirty = !0;this.$pristine = !1;this.$$parentForm.$setDirty();
		}, $setPristine: function $setPristine() {
			this.$$animate.setClass(this.$$element, Ua, Rb + " ng-submitted");this.$dirty = !1;this.$pristine = !0;this.$submitted = !1;q(this.$$controls, function (a) {
				a.$setPristine();
			});
		}, $setUntouched: function $setUntouched() {
			q(this.$$controls, function (a) {
				a.$setUntouched();
			});
		}, $setSubmitted: function $setSubmitted() {
			this.$$animate.addClass(this.$$element, "ng-submitted");this.$submitted = !0;this.$$parentForm.$setSubmitted();
		} };Wd({ clazz: Lb, set: function set(a, b, d) {
			var c = a[b];c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d];
		}, unset: function unset(a, b, d) {
			var c = a[b];c && (Za(c, d), 0 === c.length && delete a[b]);
		} });var de = function de(a) {
		return ["$timeout", "$parse", function (b, d) {
			function c(a) {
				return "" === a ? d('this[""]').assign : d(a).assign || w;
			}return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Lb, compile: function compile(d, e) {
					d.addClass(Ua).addClass(nb);var g = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
							var n = f[0];if (!("action" in e)) {
								var p = function p(b) {
									a.$apply(function () {
										n.$commitViewValue();
										n.$setSubmitted();
									});b.preventDefault();
								};d[0].addEventListener("submit", p);d.on("$destroy", function () {
									b(function () {
										d[0].removeEventListener("submit", p);
									}, 0, !1);
								});
							}(f[1] || n.$$parentForm).$addControl(n);var r = g ? c(n.$name) : w;g && (r(a, n), e.$observe(g, function (b) {
								n.$name !== b && (r(a, void 0), n.$$parentForm.$$renameControl(n, b), r = c(n.$name), r(a, n));
							}));d.on("$destroy", function () {
								n.$$parentForm.$removeControl(n);r(a, void 0);R(n, Mb);
							});
						} };
				} };
		}];
	},
	    Ce = de(),
	    Oe = de(!0),
	    Lg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
	    Xg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
	    Yg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
	    Mg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
	    ee = /^(\d{4,})-(\d{2})-(\d{2})$/,
	    fe = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    Cc = /^(\d{4,})-W(\d\d)$/,
	    ge = /^(\d{4,})-(\d\d)$/,
	    he = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    Yd = W();q(["date", "datetime-local", "month", "time", "week"], function (a) {
		Yd[a] = !0;
	});var ie = { text: function text(a, b, d, c, f, e) {
			Ra(a, b, d, c, f, e);xc(c);
		}, date: ob("date", ee, Nb(ee, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": ob("datetimelocal", fe, Nb(fe, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: ob("time", he, Nb(he, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: ob("week", Cc, function (a, b) {
			if (ga(a)) return a;if (E(a)) {
				Cc.lastIndex = 0;var d = Cc.exec(a);
				if (d) {
					var c = +d[1],
					    f = +d[2],
					    e = d = 0,
					    g = 0,
					    h = 0,
					    k = Sd(c),
					    f = 7 * (f - 1);b && (d = b.getHours(), e = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + f, d, e, g, h);
				}
			}return NaN;
		}, "yyyy-Www"), month: ob("month", ge, Nb(ge, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, f, e) {
			yc(a, b, d, c);Zd(c);Ra(a, b, d, c, f, e);var g, h;if (v(d.min) || d.ngMin) c.$validators.min = function (a) {
				return c.$isEmpty(a) || x(g) || a >= g;
			}, d.$observe("min", function (a) {
				g = Sa(a);c.$validate();
			});if (v(d.max) || d.ngMax) c.$validators.max = function (a) {
				return c.$isEmpty(a) || x(h) || a <= h;
			}, d.$observe("max", function (a) {
				h = Sa(a);c.$validate();
			});if (v(d.step) || d.ngStep) {
				var k;c.$validators.step = function (a, b) {
					return c.$isEmpty(b) || x(k) || $d(b, g || 0, k);
				};d.$observe("step", function (a) {
					k = Sa(a);c.$validate();
				});
			}
		}, url: function url(a, b, d, c, f, e) {
			Ra(a, b, d, c, f, e);xc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
				var d = a || b;return c.$isEmpty(d) || Xg.test(d);
			};
		}, email: function email(a, b, d, c, f, e) {
			Ra(a, b, d, c, f, e);xc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
				var d = a || b;return c.$isEmpty(d) || Yg.test(d);
			};
		}, radio: function radio(a, b, d, c) {
			var f = !d.ngTrim || "false" !== S(d.ngTrim);x(d.name) && b.attr("name", ++qb);b.on("click", function (a) {
				var g;b[0].checked && (g = d.value, f && (g = S(g)), c.$setViewValue(g, a && a.type));
			});c.$render = function () {
				var a = d.value;f && (a = S(a));b[0].checked = a === c.$viewValue;
			};d.$observe("value", c.$render);
		}, range: function range(a, b, d, c, f, e) {
			function g(a, c) {
				b.attr(a, d[a]);d.$observe(a, c);
			}function h(a) {
				n = Sa(a);da(c.$modelValue) || (m ? (a = b.val(), n > a && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate());
			}function k(a) {
				p = Sa(a);da(c.$modelValue) || (m ? (a = b.val(), p < a && (b.val(p), a = p < n ? n : p), c.$setViewValue(a)) : c.$validate());
			}function l(a) {
				r = Sa(a);da(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate());
			}yc(a, b, d, c);Zd(c);Ra(a, b, d, c, f, e);var m = c.$$hasNativeValidators && "range" === b[0].type,
			    n = m ? 0 : void 0,
			    p = m ? 100 : void 0,
			    r = m ? 1 : void 0,
			    q = b[0].validity;a = v(d.min);f = v(d.max);e = v(d.step);var s = c.$render;c.$render = m && v(q.rangeUnderflow) && v(q.rangeOverflow) ? function () {
				s();c.$setViewValue(b.val());
			} : s;a && (c.$validators.min = m ? function () {
				return !0;
			} : function (a, b) {
				return c.$isEmpty(b) || x(n) || b >= n;
			}, g("min", h));f && (c.$validators.max = m ? function () {
				return !0;
			} : function (a, b) {
				return c.$isEmpty(b) || x(p) || b <= p;
			}, g("max", k));e && (c.$validators.step = m ? function () {
				return !q.stepMismatch;
			} : function (a, b) {
				return c.$isEmpty(b) || x(r) || $d(b, n || 0, r);
			}, g("step", l));
		}, checkbox: function checkbox(a, b, d, c, f, e, g, h) {
			var k = ae(h, a, "ngTrueValue", d.ngTrueValue, !0),
			    l = ae(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
				c.$setViewValue(b[0].checked, a && a.type);
			});c.$render = function () {
				b[0].checked = c.$viewValue;
			};c.$isEmpty = function (a) {
				return !1 === a;
			};c.$formatters.push(function (a) {
				return qa(a, k);
			});c.$parsers.push(function (a) {
				return a ? k : l;
			});
		}, hidden: w, button: w, submit: w, reset: w, file: w },
	    Rc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
		return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(f, e, g, h) {
					h[0] && (ie[P(g.type)] || ie.text)(f, e, g, h[0], b, a, d, c);
				} } };
	}],
	    Zg = /^(true|false|\d+)$/,
	    ff = function ff() {
		function a(a, d, c) {
			var f = v(c) ? c : 9 === Ha ? "" : null;a.prop("value", f);d.$set("value", c);
		}return { restrict: "A", priority: 100, compile: function compile(b, d) {
				return Zg.test(d.ngValue) ? function (b, d, e) {
					b = b.$eval(e.ngValue);a(d, e, b);
				} : function (b, d, e) {
					b.$watch(e.ngValue, function (b) {
						a(d, e, b);
					});
				};
			} };
	},
	    Ge = ["$compile", function (a) {
		return { restrict: "AC", compile: function compile(b) {
				a.$$addBindingClass(b);return function (b, c, f) {
					a.$$addBindingInfo(c, f.ngBind);c = c[0];b.$watch(f.ngBind, function (a) {
						c.textContent = Yb(a);
					});
				};
			} };
	}],
	    Ie = ["$interpolate", "$compile", function (a, b) {
		return { compile: function compile(d) {
				b.$$addBindingClass(d);return function (c, d, e) {
					c = a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];e.$observe("ngBindTemplate", function (a) {
						d.textContent = x(a) ? "" : a;
					});
				};
			} };
	}],
	    He = ["$sce", "$parse", "$compile", function (a, b, d) {
		return { restrict: "A", compile: function compile(c, f) {
				var e = b(f.ngBindHtml),
				    g = b(f.ngBindHtml, function (b) {
					return a.valueOf(b);
				});d.$$addBindingClass(c);return function (b, c, f) {
					d.$$addBindingInfo(c, f.ngBindHtml);b.$watch(g, function () {
						var d = e(b);c.html(a.getTrustedHtml(d) || "");
					});
				};
			} };
	}],
	    ef = ma({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
			c.$viewChangeListeners.push(function () {
				a.$eval(d.ngChange);
			});
		} }),
	    Je = Ac("", !0),
	    Le = Ac("Odd", 0),
	    Ke = Ac("Even", 1),
	    Me = Qa({ compile: function compile(a, b) {
			b.$set("ngCloak", void 0);a.removeClass("ng-cloak");
		} }),
	    Ne = [function () {
		return { restrict: "A", scope: !0, controller: "@", priority: 500 };
	}],
	    Wc = {},
	    $g = { blur: !0, focus: !0 };q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
		var b = Ba("ng-" + a);Wc[b] = ["$parse", "$rootScope", function (d, c) {
			return { restrict: "A", compile: function compile(f, e) {
					var g = d(e[b]);return function (b, d) {
						d.on(a, function (d) {
							var e = function e() {
								g(b, { $event: d });
							};$g[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
						});
					};
				} };
		}];
	});var Qe = ["$animate", "$compile", function (a, b) {
		return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, f, e, g) {
				var h, k, l;d.$watch(f.ngIf, function (d) {
					d ? k || g(function (d, e) {
						k = e;d[d.length++] = b.$$createComment("end ngIf", f.ngIf);h = { clone: d };a.enter(d, c.parent(), c);
					}) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).done(function (a) {
						!1 !== a && (l = null);
					}), h = null));
				});
			} };
	}],
	    Re = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
		return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: $.noop, compile: function compile(c, f) {
				var e = f.ngInclude || f.src,
				    g = f.onload || "",
				    h = f.autoscroll;return function (c, f, m, n, p) {
					var q = 0,
					    s,
					    w,
					    u,
					    H = function H() {
						w && (w.remove(), w = null);s && (s.$destroy(), s = null);
						u && (d.leave(u).done(function (a) {
							!1 !== a && (w = null);
						}), w = u, u = null);
					};c.$watch(e, function (e) {
						var m = function m(a) {
							!1 === a || !v(h) || h && !c.$eval(h) || b();
						},
						    w = ++q;e ? (a(e, !0).then(function (a) {
							if (!c.$$destroyed && w === q) {
								var b = c.$new();n.template = a;a = p(b, function (a) {
									H();d.enter(a, null, f).done(m);
								});s = b;u = a;s.$emit("$includeContentLoaded", e);c.$eval(g);
							}
						}, function () {
							c.$$destroyed || w !== q || (H(), c.$emit("$includeContentError", e));
						}), c.$emit("$includeContentRequested", e)) : (H(), n.template = null);
					});
				};
			} };
	}],
	    hf = ["$compile", function (a) {
		return { restrict: "ECA",
			priority: -400, require: "ngInclude", link: function link(b, d, c, f) {
				na.call(d[0]).match(/SVG/) ? (d.empty(), a(Zc(f.template, z.document).childNodes)(b, function (a) {
					d.append(a);
				}, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(b));
			} };
	}],
	    Se = Qa({ priority: 450, compile: function compile() {
			return { pre: function pre(a, b, d) {
					a.$eval(d.ngInit);
				} };
		} }),
	    df = function df() {
		return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
				var f = d.ngList || ", ",
				    e = "false" !== d.ngTrim,
				    g = e ? S(f) : f;c.$parsers.push(function (a) {
					if (!x(a)) {
						var b = [];a && q(a.split(g), function (a) {
							a && b.push(e ? S(a) : a);
						});return b;
					}
				});c.$formatters.push(function (a) {
					if (C(a)) return a.join(f);
				});c.$isEmpty = function (a) {
					return !a || !a.length;
				};
			} };
	},
	    nb = "ng-valid",
	    Vd = "ng-invalid",
	    Ua = "ng-pristine",
	    Rb = "ng-dirty",
	    pb = M("ngModel");Ob.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype = { $$initGetterSetters: function $$initGetterSetters() {
			if (this.$options.getOption("getterSetter")) {
				var a = this.$$parse(this.$$attr.ngModel + "()"),
				    b = this.$$parse(this.$$attr.ngModel + "($$$p)");this.$$ngModelGet = function (b) {
					var c = this.$$parsedNgModel(b);y(c) && (c = a(b));return c;
				};this.$$ngModelSet = function (a, c) {
					y(this.$$parsedNgModel(a)) ? b(a, { $$$p: c }) : this.$$parsedNgModelAssign(a, c);
				};
			} else if (!this.$$parsedNgModel.assign) throw pb("nonassign", this.$$attr.ngModel, ya(this.$$element));
		}, $render: w, $isEmpty: function $isEmpty(a) {
			return x(a) || "" === a || null === a || a !== a;
		}, $$updateEmptyClasses: function $$updateEmptyClasses(a) {
			this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"));
		}, $setPristine: function $setPristine() {
			this.$dirty = !1;this.$pristine = !0;this.$$animate.removeClass(this.$$element, Rb);this.$$animate.addClass(this.$$element, Ua);
		}, $setDirty: function $setDirty() {
			this.$dirty = !0;this.$pristine = !1;this.$$animate.removeClass(this.$$element, Ua);this.$$animate.addClass(this.$$element, Rb);this.$$parentForm.$setDirty();
		}, $setUntouched: function $setUntouched() {
			this.$touched = !1;this.$untouched = !0;this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
		}, $setTouched: function $setTouched() {
			this.$touched = !0;this.$untouched = !1;this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
		}, $rollbackViewValue: function $rollbackViewValue() {
			this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue = this.$$lastCommittedViewValue;this.$render();
		}, $validate: function $validate() {
			if (!da(this.$modelValue)) {
				var a = this.$$lastCommittedViewValue,
				    b = this.$$rawModelValue,
				    d = this.$valid,
				    c = this.$modelValue,
				    f = this.$options.getOption("allowInvalid"),
				    e = this;this.$$runValidators(b, a, function (a) {
					f || d === a || (e.$modelValue = a ? b : void 0, e.$modelValue !== c && e.$$writeModelToScope());
				});
			}
		}, $$runValidators: function $$runValidators(a, b, d) {
			function c() {
				var c = !0;q(k.$validators, function (d, f) {
					var g = Boolean(d(a, b));c = c && g;e(f, g);
				});return c ? !0 : (q(k.$asyncValidators, function (a, b) {
					e(b, null);
				}), !1);
			}function f() {
				var c = [],
				    d = !0;q(k.$asyncValidators, function (f, g) {
					var h = f(a, b);if (!h || !y(h.then)) throw pb("nopromise", h);e(g, void 0);c.push(h.then(function () {
						e(g, !0);
					}, function () {
						d = !1;e(g, !1);
					}));
				});
				c.length ? k.$$q.all(c).then(function () {
					g(d);
				}, w) : g(!0);
			}function e(a, b) {
				h === k.$$currentValidationRunId && k.$setValidity(a, b);
			}function g(a) {
				h === k.$$currentValidationRunId && d(a);
			}this.$$currentValidationRunId++;var h = this.$$currentValidationRunId,
			    k = this;(function () {
				var a = k.$$parserName || "parse";if (x(k.$$parserValid)) e(a, null);else return k.$$parserValid || (q(k.$validators, function (a, b) {
					e(b, null);
				}), q(k.$asyncValidators, function (a, b) {
					e(b, null);
				})), e(a, k.$$parserValid), k.$$parserValid;return !0;
			})() ? c() ? f() : g(!1) : g(!1);
		}, $commitViewValue: function $commitViewValue() {
			var a = this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate();
		}, $$parseAndValidate: function $$parseAndValidate() {
			var a = this.$$lastCommittedViewValue,
			    b = this;if (this.$$parserValid = x(a) ? void 0 : !0) for (var d = 0; d < this.$parsers.length; d++) {
				if (a = this.$parsers[d](a), x(a)) {
					this.$$parserValid = !1;break;
				}
			}da(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));var c = this.$modelValue,
			    f = this.$options.getOption("allowInvalid");this.$$rawModelValue = a;f && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
				f || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope());
			});
		}, $$writeModelToScope: function $$writeModelToScope() {
			this.$$ngModelSet(this.$$scope, this.$modelValue);q(this.$viewChangeListeners, function (a) {
				try {
					a();
				} catch (b) {
					this.$$exceptionHandler(b);
				}
			}, this);
		}, $setViewValue: function $setViewValue(a, b) {
			this.$viewValue = a;this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b);
		}, $$debounceViewValueCommit: function $$debounceViewValueCommit(a) {
			var b = this.$options.getOption("debounce");Y(b[a]) ? b = b[a] : Y(b["default"]) && (b = b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d = this;0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
				d.$commitViewValue();
			}, b) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
				d.$commitViewValue();
			});
		},
		$overrideModelOptions: function $overrideModelOptions(a) {
			this.$options = this.$options.createChild(a);
		} };Wd({ clazz: Ob, set: function set(a, b) {
			a[b] = !0;
		}, unset: function unset(a, b) {
			delete a[b];
		} });var cf = ["$rootScope", function (a) {
		return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Ob, priority: 1, compile: function compile(b) {
				b.addClass(Ua).addClass("ng-untouched").addClass(nb);return { pre: function pre(a, b, f, e) {
						var g = e[0];b = e[1] || g.$$parentForm;if (e = e[2]) g.$options = e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name", function (a) {
							g.$name !== a && g.$$parentForm.$$renameControl(g, a);
						});a.$on("$destroy", function () {
							g.$$parentForm.$removeControl(g);
						});
					}, post: function post(b, c, f, e) {
						function g() {
							h.$setTouched();
						}var h = e[0];if (h.$options.getOption("updateOn")) c.on(h.$options.getOption("updateOn"), function (a) {
							h.$$debounceViewValueCommit(a && a.type);
						});c.on("blur", function () {
							h.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g));
						});
					} };
			} };
	}],
	    Pb,
	    ah = /(\s+|^)default(\s+|$)/;Bc.prototype = { getOption: function getOption(a) {
			return this.$$options[a];
		}, createChild: function createChild(a) {
			var b = !1;a = R({}, a);q(a, function (d, c) {
				"$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = S(d.replace(ah, function () {
					a.updateOnDefault = !0;return " ";
				})));
			}, this);b && (delete a["*"], be(a, this.$$options));be(a, Pb.$$options);return new Bc(a);
		} };Pb = new Bc({ updateOn: "", updateOnDefault: !0, debounce: 0, getterSetter: !1, allowInvalid: !1, timezone: null });var gf = function gf() {
		function a(a, d) {
			this.$$attrs = a;this.$$scope = d;
		}a.$inject = ["$attrs", "$scope"];a.prototype = { $onInit: function $onInit() {
				var a = this.parentCtrl ? this.parentCtrl.$options : Pb,
				    d = this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options = a.createChild(d);
			} };return { restrict: "A", priority: 10, require: { parentCtrl: "?^^ngModelOptions" }, bindToController: !0, controller: a };
	},
	    Te = Qa({ terminal: !0, priority: 1E3 }),
	    bh = M("ngOptions"),
	    ch = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
	    af = ["$compile", "$document", "$parse", function (a, b, d) {
		function c(a, b, c) {
			function e(a, b, c, d, f) {
				this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
			}function f(a) {
				var b;if (!q && sa(a)) b = a;else {
					b = [];for (var c in a) {
						a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
					}
				}return b;
			}var n = a.match(ch);if (!n) throw bh("iexp", a, ya(b));var p = n[5] || n[7],
			    q = n[6];a = / as /.test(n[0]) && n[1];var s = n[9];b = d(n[2] ? n[1] : p);var v = a && d(a) || b,
			    u = s && d(s),
			    w = s ? function (a, b) {
				return u(c, b);
			} : function (a) {
				return Pa(a);
			},
			    x = function x(a, b) {
				return w(a, B(a, b));
			},
			    t = d(n[2] || n[1]),
			    z = d(n[3] || ""),
			    A = d(n[4] || ""),
			    K = d(n[8]),
			    I = {},
			    B = q ? function (a, b) {
				I[q] = b;I[p] = a;return I;
			} : function (a) {
				I[p] = a;return I;
			};return { trackBy: s, getTrackByValue: x, getWatchables: d(K, function (a) {
					var b = [];a = a || [];for (var d = f(a), e = d.length, g = 0; g < e; g++) {
						var h = a === d ? g : d[g],
						    l = a[h],
						    h = B(l, h),
						    l = w(l, h);b.push(l);if (n[2] || n[1]) l = t(c, h), b.push(l);n[4] && (h = A(c, h), b.push(h));
					}return b;
				}), getOptions: function getOptions() {
					for (var a = [], b = {}, d = K(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
						var p = d === g ? n : g[n],
						    q = B(d[p], p),
						    r = v(c, q),
						    p = w(r, q),
						    u = t(c, q),
						    I = z(c, q),
						    q = A(c, q),
						    r = new e(p, r, u, I, q);a.push(r);b[p] = r;
					}return { items: a, selectValueMap: b, getOptionFromViewValue: function getOptionFromViewValue(a) {
							return b[x(a)];
						}, getViewValueFromOption: function getViewValueFromOption(a) {
							return s ? xa(a.viewValue) : a.viewValue;
						} };
				} };
		}var f = z.document.createElement("option"),
		    e = z.document.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
					d[0].registerOption = w;
				}, post: function post(d, h, k, l) {
					function m(a) {
						var b = (a = t.getOptionFromViewValue(a)) && a.element;b && !b.selected && (b.selected = !0);return a;
					}function n(a, b) {
						a.element = b;b.disabled = a.disabled;a.label !== b.label && (b.label = a.label, b.textContent = a.label);b.value = a.selectValue;
					}function p() {
						var a = t && r.readValue();if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
							var c = t.items[b];v(c.group) ? Eb(c.element.parentNode) : Eb(c.element);
						}t = y.getOptions();var d = {};z && h.prepend(r.emptyOption);t.items.forEach(function (a) {
							var b;if (v(a.group)) {
								b = d[a.group];b || (b = e.cloneNode(!1), A.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);var c = f.cloneNode(!1);
							} else b = A, c = f.cloneNode(!1);b.appendChild(c);n(a, c);
						});h[0].appendChild(A);s.$render();s.$isEmpty(a) || (b = r.readValue(), (y.trackBy || w ? qa(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
					}var r = l[0],
					    s = l[1],
					    w = k.multiple;l = 0;for (var u = h.children(), x = u.length; l < x; l++) {
						if ("" === u[l].value) {
							r.hasEmptyOption = !0;r.emptyOption = u.eq(l);break;
						}
					}var z = !!r.emptyOption;D(f.cloneNode(!1)).val("?");var t,
					    y = c(k.ngOptions, h, d),
					    A = b[0].createDocumentFragment();r.generateUnknownOptionValue = function (a) {
						return "?";
					};w ? (r.writeValue = function (a) {
						var b = a && a.map(m) || [];t.items.forEach(function (a) {
							a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1);
						});
					}, r.readValue = function () {
						var a = h.val() || [],
						    b = [];q(a, function (a) {
							(a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
						});return b;
					}, y.trackBy && d.$watchCollection(function () {
						if (C(s.$viewValue)) return s.$viewValue.map(function (a) {
							return y.getTrackByValue(a);
						});
					}, function () {
						s.$render();
					})) : (r.writeValue = function (a) {
						var b = t.selectValueMap[h.val()],
						    c = t.getOptionFromViewValue(a);b && b.element.removeAttribute("selected");c ? (h[0].value !== c.selectValue && (r.removeUnknownOption(), r.unselectEmptyOption(), h[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : z ? r.selectEmptyOption() : r.unknownOption.parent().length ? r.updateUnknownOption(a) : r.renderUnknownOption(a);
					}, r.readValue = function () {
						var a = t.selectValueMap[h.val()];return a && !a.disabled ? (r.unselectEmptyOption(), r.removeUnknownOption(), t.getViewValueFromOption(a)) : null;
					}, y.trackBy && d.$watch(function () {
						return y.getTrackByValue(s.$viewValue);
					}, function () {
						s.$render();
					}));z && (r.emptyOption.remove(), a(r.emptyOption)(d), 8 === r.emptyOption[0].nodeType ? (r.hasEmptyOption = !1, r.registerOption = function (a, b) {
						"" === b.val() && (r.hasEmptyOption = !0, r.emptyOption = b, r.emptyOption.removeClass("ng-scope"), s.$render(), b.on("$destroy", function () {
							r.hasEmptyOption = !1;r.emptyOption = void 0;
						}));
					}) : r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(y.getWatchables, p);
				} } };
	}],
	    Ue = ["$locale", "$interpolate", "$log", function (a, b, d) {
		var c = /{}/g,
		    f = /^when(Minus)?(.+)$/;return { link: function link(e, g, h) {
				function k(a) {
					g.text(a || "");
				}var l = h.count,
				    m = h.$attr.when && g.attr(h.$attr.when),
				    n = h.offset || 0,
				    p = e.$eval(m) || {},
				    r = {},
				    s = b.startSymbol(),
				    v = b.endSymbol(),
				    u = s + l + "-" + n + v,
				    H = $.noop,
				    y;q(h, function (a, b) {
					var c = f.exec(b);c && (c = (c[1] ? "-" : "") + P(c[2]), p[c] = g.attr(h.$attr[b]));
				});q(p, function (a, d) {
					r[d] = b(a.replace(c, u));
				});e.$watch(l, function (b) {
					var c = parseFloat(b),
					    f = da(c);f || c in p || (c = a.pluralCat(c - n));c === y || f && da(y) || (H(), f = r[c], x(f) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), H = w, k()) : H = e.$watch(f, k), y = c);
				});
			} };
	}],
	    Ve = ["$parse", "$animate", "$compile", function (a, b, d) {
		var c = M("ngRepeat"),
		    f = function f(a, b, c, d, _f3, m, n) {
			a[c] = d;_f3 && (a[_f3] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
		};return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(e, g) {
				var h = g.ngRepeat,
				    k = d.$$createComment("end ngRepeat", h),
				    l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!l) throw c("iexp", h);var m = l[1],
				    n = l[2],
				    p = l[3],
				    r = l[4],
				    l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var s = l[3] || l[1],
				    v = l[2];if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);var u,
				    w,
				    x,
				    t,
				    y = { $id: Pa };r ? u = a(r) : (x = function x(a, b) {
					return Pa(b);
				}, t = function t(a) {
					return a;
				});return function (a, d, e, g, l) {
					u && (w = function w(b, c, d) {
						v && (y[v] = b);y[s] = c;y.$index = d;return u(a, y);
					});var m = W();a.$watchCollection(n, function (e) {
						var g,
						    n,
						    r = d[0],
						    u,
						    y = W(),
						    z,
						    D,
						    E,
						    B,
						    F,
						    C,
						    I;p && (a[p] = e);if (sa(e)) F = e, n = w || x;else for (I in n = w || t, F = [], e) {
							ua.call(e, I) && "$" !== I.charAt(0) && F.push(I);
						}z = F.length;I = Array(z);for (g = 0; g < z; g++) {
							if (D = e === F ? g : F[g], E = e[D], B = n(D, E, g), m[B]) C = m[B], delete m[B], y[B] = C, I[g] = C;else {
								if (y[B]) throw q(I, function (a) {
									a && a.scope && (m[a.id] = a);
								}), c("dupes", h, B, E);I[g] = { id: B,
									scope: void 0, clone: void 0 };y[B] = !0;
							}
						}for (u in m) {
							C = m[u];B = tb(C.clone);b.leave(B);if (B[0].parentNode) for (g = 0, n = B.length; g < n; g++) {
								B[g].$$NG_REMOVED = !0;
							}C.scope.$destroy();
						}for (g = 0; g < z; g++) {
							if (D = e === F ? g : F[g], E = e[D], C = I[g], C.scope) {
								u = r;do {
									u = u.nextSibling;
								} while (u && u.$$NG_REMOVED);C.clone[0] !== u && b.move(tb(C.clone), null, r);r = C.clone[C.clone.length - 1];f(C.scope, g, s, E, v, D, z);
							} else l(function (a, c) {
								C.scope = c;var d = k.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;C.clone = a;y[C.id] = C;f(C.scope, g, s, E, v, D, z);
							});
						}m = y;
					});
				};
			} };
	}],
	    We = ["$animate", function (a) {
		return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
				b.$watch(c.ngShow, function (b) {
					a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
				});
			} };
	}],
	    Pe = ["$animate", function (a) {
		return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
				b.$watch(c.ngHide, function (b) {
					a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
				});
			} };
	}],
	    Xe = Qa(function (a, b, d) {
		a.$watch(d.ngStyle, function (a, d) {
			d && a !== d && q(d, function (a, c) {
				b.css(c, "");
			});a && b.css(a);
		}, !0);
	}),
	    Ye = ["$animate", "$compile", function (a, b) {
		return { require: "ngSwitch", controller: ["$scope", function () {
				this.cases = {};
			}], link: function link(d, c, f, e) {
				var g = [],
				    h = [],
				    k = [],
				    l = [],
				    m = function m(a, b) {
					return function (c) {
						!1 !== c && a.splice(b, 1);
					};
				};d.$watch(f.ngSwitch || f.on, function (c) {
					for (var d, f; k.length;) {
						a.cancel(k.pop());
					}d = 0;for (f = l.length; d < f; ++d) {
						var s = tb(h[d].clone);l[d].$destroy();(k[d] = a.leave(s)).done(m(k, d));
					}h.length = 0;l.length = 0;(g = e.cases["!" + c] || e.cases["?"]) && q(g, function (c) {
						c.transclude(function (d, e) {
							l.push(e);
							var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");h.push({ clone: d });a.enter(d, f.parent(), f);
						});
					});
				});
			} };
	}],
	    Ze = Qa({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, f) {
			a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
				return c[b - 1] !== a;
			});q(a, function (a) {
				c.cases["!" + a] = c.cases["!" + a] || [];c.cases["!" + a].push({ transclude: f, element: b });
			});
		} }),
	    $e = Qa({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, f) {
			c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: f, element: b });
		} }),
	    dh = M("ngTransclude"),
	    bf = ["$compile", function (a) {
		return { restrict: "EAC", terminal: !0, compile: function compile(b) {
				var d = a(b.contents());b.empty();return function (a, b, e, g, h) {
					function k() {
						d(a, function (a) {
							b.append(a);
						});
					}if (!h) throw dh("orphan", ya(b));e.ngTransclude === e.$attr.ngTransclude && (e.ngTransclude = "");e = e.ngTransclude || e.ngTranscludeSlot;h(function (a, c) {
						var d;if (d = a.length) a: {
							d = 0;for (var e = a.length; d < e; d++) {
								var g = a[d];if (g.nodeType !== Ja || g.nodeValue.trim()) {
									d = !0;break a;
								}
							}d = void 0;
						}d ? b.append(a) : (k(), c.$destroy());
					}, null, e);e && !h.isSlotFilled(e) && k();
				};
			} };
	}],
	    De = ["$templateCache", function (a) {
		return { restrict: "E", terminal: !0, compile: function compile(b, d) {
				"text/ng-template" === d.type && a.put(d.id, b[0].text);
			} };
	}],
	    eh = { $setViewValue: w, $render: w },
	    fh = ["$element", "$scope", function (a, b) {
		function d() {
			h || (h = !0, b.$$postDigest(function () {
				h = !1;e.ngModelCtrl.$render();
			}));
		}function c(a) {
			k || (k = !0, b.$$postDigest(function () {
				b.$$destroyed || (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render());
			}));
		}function f(a) {
			a.prop("selected", !0);a.attr("selected", !0);
		}var e = this,
		    g = new Gb();e.selectValueMap = {};e.ngModelCtrl = eh;e.multiple = !1;e.unknownOption = D(z.document.createElement("option"));e.hasEmptyOption = !1;e.emptyOption = void 0;e.renderUnknownOption = function (b) {
			b = e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b);
		};e.updateUnknownOption = function (b) {
			b = e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);
			a.val(b);
		};e.generateUnknownOptionValue = function (a) {
			return "? " + Pa(a) + " ?";
		};e.removeUnknownOption = function () {
			e.unknownOption.parent() && e.unknownOption.remove();
		};e.selectEmptyOption = function () {
			e.emptyOption && (a.val(""), f(e.emptyOption));
		};e.unselectEmptyOption = function () {
			e.hasEmptyOption && e.emptyOption.removeAttr("selected");
		};b.$on("$destroy", function () {
			e.renderUnknownOption = w;
		});e.readValue = function () {
			var b = a.val(),
			    b = b in e.selectValueMap ? e.selectValueMap[b] : b;return e.hasOption(b) ? b : null;
		};e.writeValue = function (b) {
			var c = a[0].options[a[0].selectedIndex];c && c.removeAttribute("selected");e.hasOption(b) ? (e.removeUnknownOption(), c = Pa(b), a.val(c in e.selectValueMap ? c : b), f(D(a[0].options[a[0].selectedIndex]))) : null == b && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(b) : e.renderUnknownOption(b);
		};e.addOption = function (a, b) {
			if (8 !== b[0].nodeType) {
				La(a, '"option value"');"" === a && (e.hasEmptyOption = !0, e.emptyOption = b);var c = g.get(a) || 0;g.set(a, c + 1);d();
			}
		};e.removeOption = function (a) {
			var b = g.get(a);b && (1 === b ? (g.delete(a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : g.set(a, b - 1));
		};e.hasOption = function (a) {
			return !!g.get(a);
		};var h = !1,
		    k = !1;e.registerOption = function (a, b, f, g, h) {
			if (f.$attr.ngValue) {
				var k,
				    q = NaN;f.$observe("value", function (a) {
					var d,
					    f = b.prop("selected");v(q) && (e.removeOption(k), delete e.selectValueMap[q], d = !0);q = Pa(a);k = a;e.selectValueMap[q] = a;e.addOption(a, b);b.attr("value", q);d && f && c();
				});
			} else g ? f.$observe("value", function (a) {
				e.readValue();
				var d,
				    f = b.prop("selected");v(k) && (e.removeOption(k), d = !0);k = a;e.addOption(a, b);d && f && c();
			}) : h ? a.$watch(h, function (a, d) {
				f.$set("value", a);var g = b.prop("selected");d !== a && e.removeOption(d);e.addOption(a, b);d && g && c();
			}) : e.addOption(f.value, b);f.$observe("disabled", function (a) {
				if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render());
			});b.on("$destroy", function () {
				var a = e.readValue(),
				    b = f.value;e.removeOption(b);d();(e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0);
			});
		};
	}],
	    Ee = function Ee() {
		return { restrict: "E", require: ["select", "?ngModel"], controller: fh, priority: 1, link: { pre: function pre(a, b, d, c) {
					var f = c[0],
					    e = c[1];if (e) {
						if (f.ngModelCtrl = e, b.on("change", function () {
							f.removeUnknownOption();a.$apply(function () {
								e.$setViewValue(f.readValue());
							});
						}), d.multiple) {
							f.multiple = !0;f.readValue = function () {
								var a = [];q(b.find("option"), function (b) {
									b.selected && !b.disabled && (b = b.value, a.push(b in f.selectValueMap ? f.selectValueMap[b] : b));
								});return a;
							};f.writeValue = function (a) {
								q(b.find("option"), function (b) {
									b.selected = !!a && (-1 !== Array.prototype.indexOf.call(a, b.value) || -1 !== Array.prototype.indexOf.call(a, f.selectValueMap[b.value]));
								});
							};var g,
							    h = NaN;a.$watch(function () {
								h !== e.$viewValue || qa(g, e.$viewValue) || (g = ra(e.$viewValue), e.$render());h = e.$viewValue;
							});e.$isEmpty = function (a) {
								return !a || 0 === a.length;
							};
						}
					} else f.registerOption = w;
				}, post: function post(a, b, d, c) {
					var f = c[1];if (f) {
						var e = c[0];f.$render = function () {
							e.writeValue(f.$viewValue);
						};
					}
				} } };
	},
	    Fe = ["$interpolate", function (a) {
		return { restrict: "E", priority: 100,
			compile: function compile(b, d) {
				var c, f;v(d.ngValue) || (v(d.value) ? c = a(d.value, !0) : (f = a(b.text(), !0)) || d.$set("value", b.text()));return function (a, b, d) {
					var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, f);
				};
			} };
	}],
	    Tc = function Tc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				c && (d.required = !0, c.$validators.required = function (a, b) {
					return !d.required || !c.$isEmpty(b);
				}, d.$observe("required", function () {
					c.$validate();
				}));
			} };
	},
	    Sc = function Sc() {
		return { restrict: "A",
			require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var f,
					    e = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
						E(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw M("ngPattern")("noregexp", e, a, ya(b));f = a || void 0;c.$validate();
					});c.$validators.pattern = function (a, b) {
						return c.$isEmpty(b) || x(f) || f.test(b);
					};
				}
			} };
	},
	    Vc = function Vc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var f = -1;d.$observe("maxlength", function (a) {
						a = Z(a);f = da(a) ? -1 : a;c.$validate();
					});c.$validators.maxlength = function (a, b) {
						return 0 > f || c.$isEmpty(b) || b.length <= f;
					};
				}
			} };
	},
	    Uc = function Uc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var f = 0;d.$observe("minlength", function (a) {
						f = Z(a) || 0;c.$validate();
					});c.$validators.minlength = function (a, b) {
						return c.$isEmpty(b) || b.length >= f;
					};
				}
			} };
	};z.angular.bootstrap ? z.console && console.log("WARNING: Tried to load angular more than once.") : (ve(), ye($), $.module("ngLocale", [], ["$provide", function (a) {
		function b(a) {
			a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
		}a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
				WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
				var f = a | 0,
				    e = c;void 0 === e && (e = Math.min(b(a), 3));Math.pow(10, e);return 1 == f && 0 == e ? "one" : "other";
			} });
	}]), D(function () {
		qe(z.document, Mc);
	}));
})(window);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
;
"use strict";var ImageZoom = angular.module("ImageZoom", []);ImageZoom.directive("imageZoom", ["$document", function ($document) {
	return { restrict: "EA", replace: !0, templateUrl: "/pages/partials/image-zoom.html", scope: { imageSrc: "@" }, link: function link($scope, element) {
			var el,
			    nWidth,
			    nHeight,
			    lensCSS,
			    lens = element.find("div"),
			    image = element.find("img"),
			    isLensHidden = !1,
			    isImageLoading = !1,
			    watchImageSrc = $scope.$parent.$watch("imageSrc", function (newVale) {
				newVale && ($scope.imageSrc = newVale);
			});if (!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)) {
				var hideLens = function hideLens() {
					lens.css({ opacity: 0, filter: "alpha(opacity=0)", display: "none" }), isLensHidden = !0;
				},
				    showGlass = function showGlass() {
					lens.css({ display: "block", opacity: 1, filter: "alpha(opacity=100)" });
				},
				    changeLensBgImg = function changeLensBgImg(img) {
					lens.css({ background: "#fff url(" + img + ") no-repeat", "background-size": nHeight + " " + nWidth });
				},
				    mousemove = function mousemove(evt) {
					lensCSS = $scope.magnify(evt), lensCSS && lens.css(lensCSS);
				},
				    mouseleave = function mouseleave() {
					hideLens(), $document.off("mousemove", mousemove), $document.off("mouseleave", mouseleave);
				};element.on("mouseenter", function () {
					isLensHidden && showGlass();var extInfo = { width: element[0].offsetWidth, height: element[0].offsetHeight, imageWidth: image[0].offsetWidth, imageHeight: image[0].offsetHeight, lensWidth: lens[0].offsetWidth, lensHeight: lens[0].offsetHeight };el = angular.extend($scope.getOffset(element[0]), extInfo), $document.on("mousemove", mousemove), $document.on("mouseleave", mouseleave);
				}), element.on("destroy", watchImageSrc), image.bind("load", function () {
					nWidth = image.naturalWidth, nHeight = image.naturalHeight, changeLensBgImg($scope.imageSrc);
				});var getLensBgStyle = function getLensBgStyle(evt) {
					var mx,
					    my,
					    rx,
					    ry,
					    px,
					    py,
					    bgp,
					    mx = evt.pageX ? evt.pageX - el.left : evt.x;return my = evt.pageY ? evt.pageY - el.top : evt.y, mx < el.width && my < el.height && mx > 0 && my > 0 ? (showGlass(), rx = -1 * Math.round(mx / el.width * nWidth - el.lensWidth / 2), ry = -1 * Math.round(my / el.height * nHeight - el.lensHeight / 2), bgp = rx + "px " + ry + "px", px = mx - el.lensWidth / 2, py = my - el.lensHeight / 2, { left: px + "px", top: py + "px", backgroundPosition: bgp }) : void hideLens();
				};$scope.magnify = function (evt) {
					var img;return nWidth || nHeight ? getLensBgStyle(evt) : void (isImageLoading || (img = new Image(), img.onload = function () {
						nWidth = img.width, nHeight = img.height, isImageLoading = !1;
					}, img.src = $scope.imageSrc, isImageLoading = !0));
				}, $scope.getOffset = function (el) {
					var offsetLeft = 0,
					    offsetTop = 0;return el && (isNaN(el.offsetLeft) || (offsetLeft += el.offsetLeft, offsetTop += el.offsetTop), el = el.offsetParent), { left: offsetLeft, top: offsetTop };
				}, $scope.getLensStyle = function () {
					return { background: "#fff url(" + $scope.imageSrc + ") no-repeat", width: $scope.lensWidth ? $scope.lensWidth + "px" : "", height: $scope.lensHeight ? $scope.lensHeight + "px" : "" };
				};
			}
		} };
}]);;
/*
 AngularJS v1.6.2
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (J, d) {
	'use strict';
	function A(d) {
		k && d.get("$route");
	}function B(t, u, g) {
		return { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function link(a, f, b, c, m) {
				function v() {
					l && (g.cancel(l), l = null);n && (n.$destroy(), n = null);p && (l = g.leave(p), l.done(function (a) {
						!1 !== a && (l = null);
					}), p = null);
				}function E() {
					var b = t.current && t.current.locals;if (d.isDefined(b && b.$template)) {
						var b = a.$new(),
						    c = t.current;p = m(b, function (b) {
							g.enter(b, null, p || f).done(function (b) {
								!1 === b || !d.isDefined(w) || w && !a.$eval(w) || u();
							});
							v();
						});n = c.scope = b;n.$emit("$viewContentLoaded");n.$eval(k);
					} else v();
				}var n,
				    p,
				    l,
				    w = b.autoscroll,
				    k = b.onload || "";a.$on("$routeChangeSuccess", E);E();
			} };
	}function C(d, k, g) {
		return { restrict: "ECA", priority: -400, link: function link(a, f) {
				var b = g.current,
				    c = b.locals;f.html(c.$template);var m = d(f.contents());if (b.controller) {
					c.$scope = a;var v = k(b.controller, c);b.controllerAs && (a[b.controllerAs] = v);f.data("$ngControllerController", v);f.children().data("$ngControllerController", v);
				}a[b.resolveAs || "$resolve"] = c;m(a);
			} };
	}var x,
	    y,
	    F,
	    G,
	    z = d.module("ngRoute", []).provider("$route", function () {
		function t(a, f) {
			return d.extend(Object.create(a), f);
		}function u(a, d) {
			var b = d.caseInsensitiveMatch,
			    c = { originalPath: a, regexp: a },
			    g = c.keys = [];a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function (a, b, d, c) {
				a = "?" === c || "*?" === c ? "?" : null;c = "*" === c || "*?" === c ? "*" : null;g.push({ name: d, optional: !!a });b = b || "";return "" + (a ? "" : b) + "(?:" + (a ? b : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "");
			}).replace(/([/$*])/g, "\\$1");c.regexp = new RegExp("^" + a + "$", b ? "i" : "");return c;
		}x = d.isArray;y = d.isObject;F = d.isDefined;G = d.noop;var g = {};this.when = function (a, f) {
			var b;b = void 0;if (x(f)) {
				b = b || [];for (var c = 0, m = f.length; c < m; c++) {
					b[c] = f[c];
				}
			} else if (y(f)) for (c in b = b || {}, f) {
				if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) b[c] = f[c];
			}b = b || f;d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);g[a] = d.extend(b, a && u(a, b));a && (c = "/" === a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/", g[c] = d.extend({ redirectTo: a }, u(c, b)));return this;
		};this.caseInsensitiveMatch = !1;this.otherwise = function (a) {
			"string" === typeof a && (a = { redirectTo: a });this.when(null, a);return this;
		};k = !0;this.eagerInstantiationEnabled = function (a) {
			return F(a) ? (k = a, this) : k;
		};this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", "$browser", function (a, f, b, c, m, k, u, n) {
			function p(e) {
				var h = q.current;(y = (s = C()) && h && s.$$route === h.$$route && d.equals(s.pathParams, h.pathParams) && !s.reloadOnSearch && !D) || !h && !s || a.$broadcast("$routeChangeStart", s, h).defaultPrevented && e && e.preventDefault();
			}function l() {
				var e = q.current,
				    h = s;if (y) e.params = h.params, d.copy(e.params, b), a.$broadcast("$routeUpdate", e);else if (h || e) {
					D = !1;q.current = h;var H = c.resolve(h);n.$$incOutstandingRequestCount();H.then(w).then(z).then(function (c) {
						return c && H.then(A).then(function (c) {
							h === q.current && (h && (h.locals = c, d.copy(h.params, b)), a.$broadcast("$routeChangeSuccess", h, e));
						});
					}).catch(function (b) {
						h === q.current && a.$broadcast("$routeChangeError", h, e, b);
					}).finally(function () {
						n.$$completeOutstandingRequest(G);
					});
				}
			}
			function w(e) {
				var a = { route: e, hasRedirection: !1 };if (e) if (e.redirectTo) {
					if (d.isString(e.redirectTo)) a.path = x(e.redirectTo, e.params), a.search = e.params, a.hasRedirection = !0;else {
						var b = f.path(),
						    g = f.search();e = e.redirectTo(e.pathParams, b, g);d.isDefined(e) && (a.url = e, a.hasRedirection = !0);
					}
				} else if (e.resolveRedirectTo) return c.resolve(m.invoke(e.resolveRedirectTo)).then(function (e) {
					d.isDefined(e) && (a.url = e, a.hasRedirection = !0);return a;
				});return a;
			}function z(a) {
				var b = !0;if (a.route !== q.current) b = !1;else if (a.hasRedirection) {
					var d = f.url(),
					    c = a.url;c ? f.url(c).replace() : c = f.path(a.path).search(a.search).replace().url();c !== d && (b = !1);
				}return b;
			}function A(a) {
				if (a) {
					var b = d.extend({}, a.resolve);d.forEach(b, function (a, e) {
						b[e] = d.isString(a) ? m.get(a) : m.invoke(a, null, null, e);
					});a = B(a);d.isDefined(a) && (b.$template = a);return c.all(b);
				}
			}function B(a) {
				var b, c;d.isDefined(b = a.template) ? d.isFunction(b) && (b = b(a.params)) : d.isDefined(c = a.templateUrl) && (d.isFunction(c) && (c = c(a.params)), d.isDefined(c) && (a.loadedTemplateUrl = u.valueOf(c), b = k(c)));return b;
			}
			function C() {
				var a, b;d.forEach(g, function (c, g) {
					var r;if (r = !b) {
						var k = f.path();r = c.keys;var m = {};if (c.regexp) {
							if (k = c.regexp.exec(k)) {
								for (var l = 1, n = k.length; l < n; ++l) {
									var p = r[l - 1],
									    q = k[l];p && q && (m[p.name] = q);
								}r = m;
							} else r = null;
						} else r = null;r = a = r;
					}r && (b = t(c, { params: d.extend({}, f.search(), a), pathParams: a }), b.$$route = c);
				});return b || g[null] && t(g[null], { params: {}, pathParams: {} });
			}function x(a, b) {
				var c = [];d.forEach((a || "").split(":"), function (a, d) {
					if (0 === d) c.push(a);else {
						var e = a.match(/(\w+)(?:[?*])?(.*)/),
						    f = e[1];
						c.push(b[f]);c.push(e[2] || "");delete b[f];
					}
				});return c.join("");
			}var D = !1,
			    s,
			    y,
			    q = { routes: g, reload: function reload() {
					D = !0;var b = { defaultPrevented: !1, preventDefault: function preventDefault() {
							this.defaultPrevented = !0;D = !1;
						} };a.$evalAsync(function () {
						p(b);b.defaultPrevented || l();
					});
				}, updateParams: function updateParams(a) {
					if (this.current && this.current.$$route) a = d.extend({}, this.current.params, a), f.path(x(this.current.$$route.originalPath, a)), f.search(a);else throw I("norout");
				} };a.$on("$locationChangeStart", p);a.$on("$locationChangeSuccess", l);
			return q;
		}];
	}).run(A),
	    I = d.$$minErr("ngRoute"),
	    k;A.$inject = ["$injector"];z.provider("$routeParams", function () {
		this.$get = function () {
			return {};
		};
	});z.directive("ngView", B);z.directive("ngView", C);B.$inject = ["$route", "$anchorScroll", "$animate"];C.$inject = ["$compile", "$controller", "$route"];
})(window, window.angular);
;
/*
 AngularJS v1.6.2
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (s, g) {
	'use strict';
	function H(g) {
		var l = [];t(l, A).chars(g);return l.join("");
	}var B = g.$$minErr("$sanitize"),
	    C,
	    l,
	    D,
	    E,
	    q,
	    A,
	    F,
	    t;g.module("ngSanitize", []).provider("$sanitize", function () {
		function k(a, e) {
			var b = {},
			    c = a.split(","),
			    h;for (h = 0; h < c.length; h++) {
				b[e ? q(c[h]) : c[h]] = !0;
			}return b;
		}function I(a) {
			for (var e = {}, b = 0, c = a.length; b < c; b++) {
				var h = a[b];e[h.name] = h.value;
			}return e;
		}function G(a) {
			return a.replace(/&/g, "&amp;").replace(J, function (a) {
				var b = a.charCodeAt(0);a = a.charCodeAt(1);return "&#" + (1024 * (b - 55296) + (a - 56320) + 65536) + ";";
			}).replace(K, function (a) {
				return "&#" + a.charCodeAt(0) + ";";
			}).replace(/</g, "&lt;").replace(/>/g, "&gt;");
		}function x(a) {
			for (; a;) {
				if (a.nodeType === s.Node.ELEMENT_NODE) for (var e = a.attributes, b = 0, c = e.length; b < c; b++) {
					var h = e[b],
					    d = h.name.toLowerCase();if ("xmlns:ns1" === d || 0 === d.lastIndexOf("ns1:", 0)) a.removeAttributeNode(h), b--, c--;
				}(e = a.firstChild) && x(e);a = a.nextSibling;
			}
		}var u = !1;this.$get = ["$$sanitizeUri", function (a) {
			u && l(v, w);return function (e) {
				var b = [];F(e, t(b, function (b, h) {
					return !/^unsafe:/.test(a(b, h));
				}));return b.join("");
			};
		}];this.enableSvg = function (a) {
			return E(a) ? (u = a, this) : u;
		};C = g.bind;l = g.extend;D = g.forEach;E = g.isDefined;q = g.lowercase;A = g.noop;F = function F(a, e) {
			null === a || void 0 === a ? a = "" : "string" !== typeof a && (a = "" + a);f.innerHTML = a;var b = 5;do {
				if (0 === b) throw B("uinput");b--;s.document.documentMode && x(f);a = f.innerHTML;f.innerHTML = a;
			} while (a !== f.innerHTML);for (b = f.firstChild; b;) {
				switch (b.nodeType) {case 1:
						e.start(b.nodeName.toLowerCase(), I(b.attributes));break;case 3:
						e.chars(b.textContent);}var c;if (!(c = b.firstChild) && (1 === b.nodeType && e.end(b.nodeName.toLowerCase()), c = b.nextSibling, !c)) for (; null == c;) {
					b = b.parentNode;if (b === f) break;c = b.nextSibling;1 === b.nodeType && e.end(b.nodeName.toLowerCase());
				}b = c;
			}for (; b = f.firstChild;) {
				f.removeChild(b);
			}
		};t = function t(a, e) {
			var b = !1,
			    c = C(a, a.push);return { start: function start(a, d) {
					a = q(a);!b && z[a] && (b = a);b || !0 !== v[a] || (c("<"), c(a), D(d, function (b, d) {
						var f = q(d),
						    g = "img" === a && "src" === f || "background" === f;!0 !== m[f] || !0 === n[f] && !e(b, g) || (c(" "), c(d), c('="'), c(G(b)), c('"'));
					}), c(">"));
				},
				end: function end(a) {
					a = q(a);b || !0 !== v[a] || !0 === y[a] || (c("</"), c(a), c(">"));a == b && (b = !1);
				}, chars: function chars(a) {
					b || c(G(a));
				} };
		};var J = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
		    K = /([^#-~ |!])/g,
		    y = k("area,br,col,hr,img,wbr"),
		    d = k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
		    r = k("rp,rt"),
		    p = l({}, r, d),
		    d = l({}, d, k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
		    r = l({}, r, k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
		    w = k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
		    z = k("script,style"),
		    v = l({}, y, d, r, p),
		    n = k("background,cite,href,longdesc,src,xlink:href"),
		    p = k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
		    r = k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
		    m = l({}, n, r, p),
		    f;(function (a) {
			if (a.document && a.document.implementation) a = a.document.implementation.createHTMLDocument("inert");else throw B("noinert");var e = (a.documentElement || a.getDocumentElement()).getElementsByTagName("body");1 === e.length ? f = e[0] : (e = a.createElement("html"), f = a.createElement("body"), e.appendChild(f), a.appendChild(e));
		})(s);
	});g.module("ngSanitize").filter("linky", ["$sanitize", function (k) {
		var l = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
		    q = /^mailto:/i,
		    x = g.$$minErr("linky"),
		    u = g.isDefined,
		    s = g.isFunction,
		    t = g.isObject,
		    y = g.isString;return function (d, g, p) {
			function w(a) {
				a && m.push(H(a));
			}function z(a, b) {
				var c,
				    d = v(a);m.push("<a ");for (c in d) {
					m.push(c + '="' + d[c] + '" ');
				}!u(g) || "target" in d || m.push('target="', g, '" ');m.push('href="', a.replace(/"/g, "&quot;"), '">');w(b);m.push("</a>");
			}if (null == d || "" === d) return d;if (!y(d)) throw x("notstring", d);for (var v = s(p) ? p : t(p) ? function () {
				return p;
			} : function () {
				return {};
			}, n = d, m = [], f, a; d = n.match(l);) {
				f = d[0], d[2] || d[4] || (f = (d[3] ? "http://" : "mailto:") + f), a = d.index, w(n.substr(0, a)), z(f, d[0].replace(q, "")), n = n.substring(a + d[0].length);
			}w(n);return k(m.join(""));
		};
	}]);
})(window, window.angular);
;
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.10.0 - 2014-01-14
 * License: MIT
 */
angular.module("ui.bootstrap", ["ui.bootstrap.pagination"]), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", "$interpolate", function (a, b, c, d) {
	var e = this,
	    f = b.numPages ? c(b.numPages).assign : angular.noop;this.init = function (d) {
		b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
			e.itemsPerPage = parseInt(b, 10), a.totalPages = e.calculateTotalPages();
		}) : this.itemsPerPage = d;
	}, this.noPrevious = function () {
		return 1 === this.page;
	}, this.noNext = function () {
		return this.page === a.totalPages;
	}, this.isActive = function (a) {
		return this.page === a;
	}, this.calculateTotalPages = function () {
		var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);return Math.max(b || 0, 1);
	}, this.getAttributeValue = function (b, c, e) {
		return angular.isDefined(b) ? e ? d(b)(a.$parent) : a.$parent.$eval(b) : c;
	}, this.render = function () {
		this.page = parseInt(a.page, 10) || 1, this.page > 0 && this.page <= a.totalPages && (a.pages = this.getPages(this.page, a.totalPages));
	}, a.selectPage = function (b) {
		!e.isActive(b) && b > 0 && b <= a.totalPages && (a.page = b, a.onSelectPage({ page: b }));
	}, a.$watch("page", function () {
		e.render();
	}), a.$watch("totalItems", function () {
		a.totalPages = e.calculateTotalPages();
	}), a.$watch("totalPages", function (b) {
		f(a.$parent, b), e.page > b ? a.selectPage(b) : e.render();
	});
}]).constant("paginationConfig", { itemsPerPage: 10, boundaryLinks: !1, directionLinks: !0, firstText: "First", previousText: "Previous", nextText: "Next", lastText: "Last", rotate: !0 }).directive("pagination", ["$parse", "paginationConfig", function (a, b) {
	return { restrict: "EA", scope: { page: "=", totalItems: "=", onSelectPage: " &" }, controller: "PaginationController", templateUrl: "template/pagination/pagination.html", replace: !0, link: function link(c, d, e, f) {
			function g(a, b, c, d) {
				return { number: a, text: b, active: c, disabled: d };
			}var h,
			    i = f.getAttributeValue(e.boundaryLinks, b.boundaryLinks),
			    j = f.getAttributeValue(e.directionLinks, b.directionLinks),
			    k = f.getAttributeValue(e.firstText, b.firstText, !0),
			    l = f.getAttributeValue(e.previousText, b.previousText, !0),
			    m = f.getAttributeValue(e.nextText, b.nextText, !0),
			    n = f.getAttributeValue(e.lastText, b.lastText, !0),
			    o = f.getAttributeValue(e.rotate, b.rotate);f.init(b.itemsPerPage), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
				h = parseInt(a, 10), f.render();
			}), f.getPages = function (a, b) {
				var c = [],
				    d = 1,
				    e = b,
				    p = angular.isDefined(h) && b > h;p && (o ? (d = Math.max(a - Math.floor(h / 2), 1), e = d + h - 1, e > b && (e = b, d = e - h + 1)) : (d = (Math.ceil(a / h) - 1) * h + 1, e = Math.min(d + h - 1, b)));for (var q = d; e >= q; q++) {
					var r = g(q, q, f.isActive(q), !1);c.push(r);
				}if (p && !o) {
					if (d > 1) {
						var s = g(d - 1, "...", !1, !1);c.unshift(s);
					}if (b > e) {
						var t = g(e + 1, "...", !1, !1);c.push(t);
					}
				}if (j) {
					var u = g(a - 1, l, !1, f.noPrevious());c.unshift(u);var v = g(a + 1, m, !1, f.noNext());c.push(v);
				}if (i) {
					var w = g(1, k, !1, f.noPrevious());c.unshift(w);var x = g(b, n, !1, f.noNext());c.push(x);
				}return c;
			};
		} };
}]).constant("pagerConfig", { itemsPerPage: 10, previousText: "« Previous", nextText: "Next »", align: !0 }).directive("pager", ["pagerConfig", function (a) {
	return { restrict: "EA", scope: { page: "=", totalItems: "=", onSelectPage: " &" }, controller: "PaginationController", templateUrl: "template/pagination/pager.html", replace: !0, link: function link(b, c, d, e) {
			function f(a, b, c, d, e) {
				return { number: a, text: b, disabled: c, previous: i && d, next: i && e };
			}var g = e.getAttributeValue(d.previousText, a.previousText, !0),
			    h = e.getAttributeValue(d.nextText, a.nextText, !0),
			    i = e.getAttributeValue(d.align, a.align);e.init(a.itemsPerPage), e.getPages = function (a) {
				return [f(a - 1, g, e.noPrevious(), !0, !1), f(a + 1, h, e.noNext(), !1, !0)];
			};
		} };
}]);
;
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.10.0 - 2014-01-14
 * License: MIT
 */
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.pagination"]), angular.module("ui.bootstrap.tpls", ["template/pagination/pager.html", "template/pagination/pagination.html"]), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", "$interpolate", function (a, b, c, d) {
	var e = this,
	    f = b.numPages ? c(b.numPages).assign : angular.noop;this.init = function (d) {
		b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
			e.itemsPerPage = parseInt(b, 10), a.totalPages = e.calculateTotalPages();
		}) : this.itemsPerPage = d;
	}, this.noPrevious = function () {
		return 1 === this.page;
	}, this.noNext = function () {
		return this.page === a.totalPages;
	}, this.isActive = function (a) {
		return this.page === a;
	}, this.calculateTotalPages = function () {
		var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);return Math.max(b || 0, 1);
	}, this.getAttributeValue = function (b, c, e) {
		return angular.isDefined(b) ? e ? d(b)(a.$parent) : a.$parent.$eval(b) : c;
	}, this.render = function () {
		this.page = parseInt(a.page, 10) || 1, this.page > 0 && this.page <= a.totalPages && (a.pages = this.getPages(this.page, a.totalPages));
	}, a.selectPage = function (b) {
		!e.isActive(b) && b > 0 && b <= a.totalPages && (a.page = b, a.onSelectPage({ page: b }));
	}, a.$watch("page", function () {
		e.render();
	}), a.$watch("totalItems", function () {
		a.totalPages = e.calculateTotalPages();
	}), a.$watch("totalPages", function (b) {
		f(a.$parent, b), e.page > b ? a.selectPage(b) : e.render();
	});
}]).constant("paginationConfig", { itemsPerPage: 10, boundaryLinks: !1, directionLinks: !0, firstText: "First", previousText: "Previous", nextText: "Next", lastText: "Last", rotate: !0 }).directive("pagination", ["$parse", "paginationConfig", function (a, b) {
	return { restrict: "EA", scope: { page: "=", totalItems: "=", onSelectPage: " &" }, controller: "PaginationController", templateUrl: "template/pagination/pagination.html", replace: !0, link: function link(c, d, e, f) {
			function g(a, b, c, d) {
				return { number: a, text: b, active: c, disabled: d };
			}var h,
			    i = f.getAttributeValue(e.boundaryLinks, b.boundaryLinks),
			    j = f.getAttributeValue(e.directionLinks, b.directionLinks),
			    k = f.getAttributeValue(e.firstText, b.firstText, !0),
			    l = f.getAttributeValue(e.previousText, b.previousText, !0),
			    m = f.getAttributeValue(e.nextText, b.nextText, !0),
			    n = f.getAttributeValue(e.lastText, b.lastText, !0),
			    o = f.getAttributeValue(e.rotate, b.rotate);f.init(b.itemsPerPage), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
				h = parseInt(a, 10), f.render();
			}), f.getPages = function (a, b) {
				var c = [],
				    d = 1,
				    e = b,
				    p = angular.isDefined(h) && b > h;p && (o ? (d = Math.max(a - Math.floor(h / 2), 1), e = d + h - 1, e > b && (e = b, d = e - h + 1)) : (d = (Math.ceil(a / h) - 1) * h + 1, e = Math.min(d + h - 1, b)));for (var q = d; e >= q; q++) {
					var r = g(q, q, f.isActive(q), !1);c.push(r);
				}if (p && !o) {
					if (d > 1) {
						var s = g(d - 1, "...", !1, !1);c.unshift(s);
					}if (b > e) {
						var t = g(e + 1, "...", !1, !1);c.push(t);
					}
				}if (j) {
					var u = g(a - 1, l, !1, f.noPrevious());c.unshift(u);var v = g(a + 1, m, !1, f.noNext());c.push(v);
				}if (i) {
					var w = g(1, k, !1, f.noPrevious());c.unshift(w);var x = g(b, n, !1, f.noNext());c.push(x);
				}return c;
			};
		} };
}]).constant("pagerConfig", { itemsPerPage: 10, previousText: "« Previous", nextText: "Next »", align: !0 }).directive("pager", ["pagerConfig", function (a) {
	return { restrict: "EA", scope: { page: "=", totalItems: "=", onSelectPage: " &" }, controller: "PaginationController", templateUrl: "template/pagination/pager.html", replace: !0, link: function link(b, c, d, e) {
			function f(a, b, c, d, e) {
				return { number: a, text: b, disabled: c, previous: i && d, next: i && e };
			}var g = e.getAttributeValue(d.previousText, a.previousText, !0),
			    h = e.getAttributeValue(d.nextText, a.nextText, !0),
			    i = e.getAttributeValue(d.align, a.align);e.init(a.itemsPerPage), e.getPages = function (a) {
				return [f(a - 1, g, e.noPrevious(), !0, !1), f(a + 1, h, e.noNext(), !1, !0)];
			};
		} };
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (a) {
	a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>');
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (a) {
	a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>');
}]);;
(function (e) {
	e.fn.camera = function (t, n) {
		function i() {
			if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
				return true;
			}
		}function P() {
			var t = e(b).width();e("li", b).removeClass("camera_visThumb");e("li", b).each(function () {
				var n = e(this).position(),
				    r = e("ul", b).outerWidth(),
				    i = e("ul", b).offset().left,
				    s = e("> div", b).offset().left,
				    o = s - i;if (o > 0) {
					e(".camera_prevThumbs", K).removeClass("hideNav");
				} else {
					e(".camera_prevThumbs", K).addClass("hideNav");
				}if (r - o > t) {
					e(".camera_nextThumbs", K).removeClass("hideNav");
				} else {
					e(".camera_nextThumbs", K).addClass("hideNav");
				}var u = n.left,
				    a = n.left + e(this).width();if (a - o <= t && u - o >= 0) {
					e(this).addClass("camera_visThumb");
				}
			});
		}function j() {
			function r() {
				w = s.width();if (t.height.indexOf("%") != -1) {
					var n = Math.round(w / (100 / parseFloat(t.height)));if (t.minHeight != "" && n < parseFloat(t.minHeight)) {
						E = parseFloat(t.minHeight);
					} else {
						E = n;
					}s.css({ height: E });
				} else if (t.height == "auto") {
					E = s.height();
				} else {
					E = parseFloat(t.height);s.css({ height: E });
				}e(".camerarelative", c).css({ width: w, height: E });e(".imgLoaded", c).each(function () {
					var n = e(this),
					    r = n.attr("width"),
					    i = n.attr("height"),
					    s = n.index(),
					    o,
					    u,
					    a = n.attr("data-alignment"),
					    f = n.attr("data-portrait");if (typeof a === "undefined" || a === false || a === "") {
						a = t.alignment;
					}if (typeof f === "undefined" || f === false || f === "") {
						f = t.portrait;
					}if (f == false || f == "false") {
						if (r / i < w / E) {
							var l = w / r;var c = Math.abs(E - i * l) * .5;switch (a) {case "topLeft":
									o = 0;break;case "topCenter":
									o = 0;break;case "topRight":
									o = 0;break;case "centerLeft":
									o = "-" + c + "px";break;case "center":
									o = "-" + c + "px";break;case "centerRight":
									o = "-" + c + "px";break;case "bottomLeft":
									o = "-" + c * 2 + "px";break;case "bottomCenter":
									o = "-" + c * 2 + "px";break;case "bottomRight":
									o = "-" + c * 2 + "px";break;}n.css({ height: i * l, "margin-left": 0, "margin-right": 0, "margin-top": o, position: "absolute", visibility: "visible", width: w });
						} else {
							var l = E / i;var c = Math.abs(w - r * l) * .5;switch (a) {case "topLeft":
									u = 0;break;case "topCenter":
									u = "-" + c + "px";break;case "topRight":
									u = "-" + c * 2 + "px";break;case "centerLeft":
									u = 0;break;case "center":
									u = "-" + c + "px";break;case "centerRight":
									u = "-" + c * 2 + "px";break;case "bottomLeft":
									u = 0;break;case "bottomCenter":
									u = "-" + c + "px";break;case "bottomRight":
									u = "-" + c * 2 + "px";break;}n.css({ height: E, "margin-left": u, "margin-right": u, "margin-top": 0, position: "absolute", visibility: "visible", width: r * l });
						}
					} else {
						if (r / i < w / E) {
							var l = E / i;var c = Math.abs(w - r * l) * .5;switch (a) {case "topLeft":
									u = 0;break;case "topCenter":
									u = c + "px";break;case "topRight":
									u = c * 2 + "px";break;case "centerLeft":
									u = 0;break;case "center":
									u = c + "px";break;case "centerRight":
									u = c * 2 + "px";break;case "bottomLeft":
									u = 0;break;case "bottomCenter":
									u = c + "px";break;case "bottomRight":
									u = c * 2 + "px";break;}n.css({ height: E, "margin-left": u, "margin-right": u, "margin-top": 0, position: "absolute", visibility: "visible", width: r * l });
						} else {
							var l = w / r;var c = Math.abs(E - i * l) * .5;switch (a) {case "topLeft":
									o = 0;break;case "topCenter":
									o = 0;break;case "topRight":
									o = 0;break;case "centerLeft":
									o = c + "px";break;case "center":
									o = c + "px";break;case "centerRight":
									o = c + "px";break;case "bottomLeft":
									o = c * 2 + "px";break;case "bottomCenter":
									o = c * 2 + "px";break;case "bottomRight":
									o = c * 2 + "px";break;}n.css({ height: i * l, "margin-left": 0, "margin-right": 0, "margin-top": o, position: "absolute", visibility: "visible", width: w });
						}
					}
				});
			}var n;if (H == true) {
				clearTimeout(n);n = setTimeout(r, 200);
			} else {
				r();
			}H = true;
		}function G(e) {
			for (var t, n, r = e.length; r; t = parseInt(Math.random() * r), n = e[--r], e[r] = e[t], e[t] = n) {}return e;
		}function Y(e) {
			return Math.ceil(e) == Math.floor(e);
		}function at() {
			if (e(b).length && !e(y).length) {
				var t = e(b).outerWidth(),
				    n = e("ul > li", b).outerWidth(),
				    r = e("li.cameracurrent", b).length ? e("li.cameracurrent", b).position() : "",
				    i = e("ul > li", b).length * e("ul > li", b).outerWidth(),
				    o = e("ul", b).offset().left,
				    u = e("> div", b).offset().left,
				    a;if (o < 0) {
					a = "-" + (u - o);
				} else {
					a = u - o;
				}if (ut == true) {
					e("ul", b).width(e("ul > li", b).length * e("ul > li", b).outerWidth());if (e(b).length && !e(y).lenght) {
						s.css({ marginBottom: e(b).outerHeight() });
					}P();e("ul", b).width(e("ul > li", b).length * e("ul > li", b).outerWidth());if (e(b).length && !e(y).lenght) {
						s.css({ marginBottom: e(b).outerHeight() });
					}
				}ut = false;var f = e("li.cameracurrent", b).length ? r.left : "",
				    l = e("li.cameracurrent", b).length ? r.left + e("li.cameracurrent", b).outerWidth() : "";if (f < e("li.cameracurrent", b).outerWidth()) {
					f = 0;
				}if (l - a > t) {
					if (f + t < i) {
						e("ul", b).animate({ "margin-left": "-" + f + "px" }, 500, P);
					} else {
						e("ul", b).animate({ "margin-left": "-" + (e("ul", b).outerWidth() - t) + "px" }, 500, P);
					}
				} else if (f - a < 0) {
					e("ul", b).animate({ "margin-left": "-" + f + "px" }, 500, P);
				} else {
					e("ul", b).css({ "margin-left": "auto", "margin-right": "auto" });setTimeout(P, 100);
				}
			}
		}function ft() {
			nt = 0;var n = e(".camera_bar_cont", K).width(),
			    r = e(".camera_bar_cont", K).height();if (a != "pie") {
				switch (J) {case "leftToRight":
						e("#" + f).css({ right: n });break;case "rightToLeft":
						e("#" + f).css({ left: n });break;case "topToBottom":
						e("#" + f).css({ bottom: r });break;case "bottomToTop":
						e("#" + f).css({ top: r });break;}
			} else {
				it.clearRect(0, 0, t.pieDiameter, t.pieDiameter);
			}
		}function lt(n) {
			l.addClass("camerasliding");W = false;var r = parseFloat(e("div.cameraSlide.cameracurrent", c).index());if (n > 0) {
				var u = n - 1;
			} else if (r == L - 1) {
				var u = 0;
			} else {
				var u = r + 1;
			}var h = e(".cameraSlide:eq(" + u + ")", c);var p = e(".cameraSlide:eq(" + (u + 1) + ")", c).addClass("cameranext");if (r != u + 1) {
				p.hide();
			}e(".cameraContent", o).fadeOut(600);e(".camera_caption", o).show();e(".camerarelative", h).append(e("> div ", l).eq(u).find("> div.camera_effected"));e(".camera_target_content .cameraContent:eq(" + u + ")", s).append(e("> div ", l).eq(u).find("> div"));if (!e(".imgLoaded", h).length) {
				var d = S[u];var v = new Image();v.src = d + "?" + new Date().getTime();h.css("visibility", "hidden");h.prepend(e(v).attr("class", "imgLoaded").css("visibility", "hidden"));var m, g;if (!e(v).get(0).complete || m == "0" || g == "0" || typeof m === "undefined" || m === false || typeof g === "undefined" || g === false) {
					e(".camera_loader", s).delay(500).fadeIn(400);v.onload = function () {
						m = v.naturalWidth;g = v.naturalHeight;e(v).attr("data-alignment", C[u]).attr("data-portrait", N[u]);e(v).attr("width", m);e(v).attr("height", g);c.find(".cameraSlide_" + u).hide().css("visibility", "visible");j();lt(u + 1);
					};
				}
			} else {
				if (S.length > u + 1 && !e(".imgLoaded", p).length) {
					var x = S[u + 1];var T = new Image();T.src = x + "?" + new Date().getTime();p.prepend(e(T).attr("class", "imgLoaded").css("visibility", "hidden"));T.onload = function () {
						m = T.naturalWidth;g = T.naturalHeight;e(T).attr("data-alignment", C[u + 1]).attr("data-portrait", N[u + 1]);e(T).attr("width", m);e(T).attr("height", g);j();
					};
				}t.onLoaded.call(this);if (e(".camera_loader", s).is(":visible")) {
					e(".camera_loader", s).fadeOut(400);
				} else {
					e(".camera_loader", s).css({ visibility: "hidden" });e(".camera_loader", s).fadeOut(400, function () {
						e(".camera_loader", s).css({ visibility: "visible" });
					});
				}var k = t.rows,
				    A = t.cols,
				    O = 1,
				    _ = 0,
				    D,
				    P,
				    H,
				    B,
				    q,
				    R = new Array("simpleFade", "curtainTopLeft", "curtainTopRight", "curtainBottomLeft", "curtainBottomRight", "curtainSliceLeft", "curtainSliceRight", "blindCurtainTopLeft", "blindCurtainTopRight", "blindCurtainBottomLeft", "blindCurtainBottomRight", "blindCurtainSliceBottom", "blindCurtainSliceTop", "stampede", "mosaic", "mosaicReverse", "mosaicRandom", "mosaicSpiral", "mosaicSpiralReverse", "topLeftBottomRight", "bottomRightTopLeft", "bottomLeftTopRight", "topRightBottomLeft", "scrollLeft", "scrollRight", "scrollTop", "scrollBottom", "scrollHorz");marginLeft = 0, marginTop = 0, opacityOnGrid = 0;if (t.opacityOnGrid == true) {
					opacityOnGrid = 0;
				} else {
					opacityOnGrid = 1;
				}var U = e(" > div", l).eq(u).attr("data-fx");if (i() && t.mobileFx != "" && t.mobileFx != "default") {
					B = t.mobileFx;
				} else {
					if (typeof U !== "undefined" && U !== false && U !== "default") {
						B = U;
					} else {
						B = t.fx;
					}
				}if (B == "random") {
					B = G(R);B = B[0];
				} else {
					B = B;if (B.indexOf(",") > 0) {
						B = B.replace(/ /g, "");B = B.split(",");B = G(B);B = B[0];
					}
				}dataEasing = e(" > div", l).eq(u).attr("data-easing");mobileEasing = e(" > div", l).eq(u).attr("data-mobileEasing");if (i() && t.mobileEasing != "" && t.mobileEasing != "default") {
					if (typeof mobileEasing !== "undefined" && mobileEasing !== false && mobileEasing !== "default") {
						q = mobileEasing;
					} else {
						q = t.mobileEasing;
					}
				} else {
					if (typeof dataEasing !== "undefined" && dataEasing !== false && dataEasing !== "default") {
						q = dataEasing;
					} else {
						q = t.easing;
					}
				}D = e(" > div", l).eq(u).attr("data-slideOn");if (typeof D !== "undefined" && D !== false) {
					z = D;
				} else {
					if (t.slideOn == "random") {
						var z = new Array("next", "prev");z = G(z);z = z[0];
					} else {
						z = t.slideOn;
					}
				}var V = e(" > div", l).eq(u).attr("data-time");if (typeof V !== "undefined" && V !== false && V !== "") {
					P = parseFloat(V);
				} else {
					P = t.time;
				}var Y = e(" > div", l).eq(u).attr("data-transPeriod");if (typeof Y !== "undefined" && Y !== false && Y !== "") {
					H = parseFloat(Y);
				} else {
					H = t.transPeriod;
				}if (!e(l).hasClass("camerastarted")) {
					B = "simpleFade";z = "next";q = "";H = 400;e(l).addClass("camerastarted");
				}switch (B) {case "simpleFade":
						A = 1;k = 1;break;case "curtainTopLeft":
						if (t.slicedCols == 0) {
							A = t.cols;
						} else {
							A = t.slicedCols;
						}k = 1;break;case "curtainTopRight":
						if (t.slicedCols == 0) {
							A = t.cols;
						} else {
							A = t.slicedCols;
						}k = 1;break;case "curtainBottomLeft":
						if (t.slicedCols == 0) {
							A = t.cols;
						} else {
							A = t.slicedCols;
						}k = 1;break;case "curtainBottomRight":
						if (t.slicedCols == 0) {
							A = t.cols;
						} else {
							A = t.slicedCols;
						}k = 1;break;case "curtainSliceLeft":
						if (t.slicedCols == 0) {
							A = t.cols;
						} else {
							A = t.slicedCols;
						}k = 1;break;case "curtainSliceRight":
						if (t.slicedCols == 0) {
							A = t.cols;
						} else {
							A = t.slicedCols;
						}k = 1;break;case "blindCurtainTopLeft":
						if (t.slicedRows == 0) {
							k = t.rows;
						} else {
							k = t.slicedRows;
						}A = 1;break;case "blindCurtainTopRight":
						if (t.slicedRows == 0) {
							k = t.rows;
						} else {
							k = t.slicedRows;
						}A = 1;break;case "blindCurtainBottomLeft":
						if (t.slicedRows == 0) {
							k = t.rows;
						} else {
							k = t.slicedRows;
						}A = 1;break;case "blindCurtainBottomRight":
						if (t.slicedRows == 0) {
							k = t.rows;
						} else {
							k = t.slicedRows;
						}A = 1;break;case "blindCurtainSliceTop":
						if (t.slicedRows == 0) {
							k = t.rows;
						} else {
							k = t.slicedRows;
						}A = 1;break;case "blindCurtainSliceBottom":
						if (t.slicedRows == 0) {
							k = t.rows;
						} else {
							k = t.slicedRows;
						}A = 1;break;case "stampede":
						_ = "-" + H;break;case "mosaic":
						_ = t.gridDifference;break;case "mosaicReverse":
						_ = t.gridDifference;break;case "mosaicRandom":
						break;case "mosaicSpiral":
						_ = t.gridDifference;O = 1.7;break;case "mosaicSpiralReverse":
						_ = t.gridDifference;O = 1.7;break;case "topLeftBottomRight":
						_ = t.gridDifference;O = 6;break;case "bottomRightTopLeft":
						_ = t.gridDifference;O = 6;break;case "bottomLeftTopRight":
						_ = t.gridDifference;O = 6;break;case "topRightBottomLeft":
						_ = t.gridDifference;O = 6;break;case "scrollLeft":
						A = 1;k = 1;break;case "scrollRight":
						A = 1;k = 1;break;case "scrollTop":
						A = 1;k = 1;break;case "scrollBottom":
						A = 1;k = 1;break;case "scrollHorz":
						A = 1;k = 1;break;}var Z = 0;var et = k * A;var tt = w - Math.floor(w / A) * A;var st = E - Math.floor(E / k) * k;var ot;var ut;var ct = 0;var ht = 0;var pt = new Array();var dt = new Array();var vt = new Array();while (Z < et) {
					pt.push(Z);dt.push(Z);M.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var mt = e(".cameraappended:eq(" + Z + ")", c);if (B == "scrollLeft" || B == "scrollRight" || B == "scrollTop" || B == "scrollBottom" || B == "scrollHorz") {
						X.eq(u).clone().show().appendTo(mt);
					} else {
						if (z == "next") {
							X.eq(u).clone().show().appendTo(mt);
						} else {
							X.eq(r).clone().show().appendTo(mt);
						}
					}if (Z % A < tt) {
						ot = 1;
					} else {
						ot = 0;
					}if (Z % A == 0) {
						ct = 0;
					}if (Math.floor(Z / A) < st) {
						ut = 1;
					} else {
						ut = 0;
					}mt.css({ height: Math.floor(E / k + ut + 1), left: ct, top: ht, width: Math.floor(w / A + ot + 1) });e("> .cameraSlide", mt).css({ height: E, "margin-left": "-" + ct + "px", "margin-top": "-" + ht + "px", width: w });ct = ct + mt.width() - 1;if (Z % A == A - 1) {
						ht = ht + mt.height() - 1;
					}Z++;
				}switch (B) {case "curtainTopLeft":
						break;case "curtainBottomLeft":
						break;case "curtainSliceLeft":
						break;case "curtainTopRight":
						pt = pt.reverse();break;case "curtainBottomRight":
						pt = pt.reverse();break;case "curtainSliceRight":
						pt = pt.reverse();break;case "blindCurtainTopLeft":
						break;case "blindCurtainBottomLeft":
						pt = pt.reverse();break;case "blindCurtainSliceTop":
						break;case "blindCurtainTopRight":
						break;case "blindCurtainBottomRight":
						pt = pt.reverse();break;case "blindCurtainSliceBottom":
						pt = pt.reverse();break;case "stampede":
						pt = G(pt);break;case "mosaic":
						break;case "mosaicReverse":
						pt = pt.reverse();break;case "mosaicRandom":
						pt = G(pt);break;case "mosaicSpiral":
						var gt = k / 2,
						    yt,
						    bt,
						    wt,
						    Et = 0;for (wt = 0; wt < gt; wt++) {
							bt = wt;for (yt = wt; yt < A - wt - 1; yt++) {
								vt[Et++] = bt * A + yt;
							}yt = A - wt - 1;for (bt = wt; bt < k - wt - 1; bt++) {
								vt[Et++] = bt * A + yt;
							}bt = k - wt - 1;for (yt = A - wt - 1; yt > wt; yt--) {
								vt[Et++] = bt * A + yt;
							}yt = wt;for (bt = k - wt - 1; bt > wt; bt--) {
								vt[Et++] = bt * A + yt;
							}
						}pt = vt;break;case "mosaicSpiralReverse":
						var gt = k / 2,
						    yt,
						    bt,
						    wt,
						    Et = et - 1;for (wt = 0; wt < gt; wt++) {
							bt = wt;for (yt = wt; yt < A - wt - 1; yt++) {
								vt[Et--] = bt * A + yt;
							}yt = A - wt - 1;for (bt = wt; bt < k - wt - 1; bt++) {
								vt[Et--] = bt * A + yt;
							}bt = k - wt - 1;for (yt = A - wt - 1; yt > wt; yt--) {
								vt[Et--] = bt * A + yt;
							}yt = wt;for (bt = k - wt - 1; bt > wt; bt--) {
								vt[Et--] = bt * A + yt;
							}
						}pt = vt;break;case "topLeftBottomRight":
						for (var bt = 0; bt < k; bt++) {
							for (var yt = 0; yt < A; yt++) {
								vt.push(yt + bt);
							}
						}dt = vt;break;case "bottomRightTopLeft":
						for (var bt = 0; bt < k; bt++) {
							for (var yt = 0; yt < A; yt++) {
								vt.push(yt + bt);
							}
						}dt = vt.reverse();break;case "bottomLeftTopRight":
						for (var bt = k; bt > 0; bt--) {
							for (var yt = 0; yt < A; yt++) {
								vt.push(yt + bt);
							}
						}dt = vt;break;case "topRightBottomLeft":
						for (var bt = 0; bt < k; bt++) {
							for (var yt = A; yt > 0; yt--) {
								vt.push(yt + bt);
							}
						}dt = vt;break;}e.each(pt, function (n, i) {
					function d() {
						e(this).addClass("cameraeased");if (e(".cameraeased", c).length >= 0) {
							e(b).css({ visibility: "visible" });
						}if (e(".cameraeased", c).length == et) {
							at();e(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", o).each(function () {
								e(this).css("visibility", "hidden");
							});X.eq(u).show().css("z-index", "999").removeClass("cameranext").addClass("cameracurrent");X.eq(r).css("z-index", "1").removeClass("cameracurrent");e(".cameraContent", o).eq(u).addClass("cameracurrent");if (r >= 0) {
								e(".cameraContent", o).eq(r).removeClass("cameracurrent");
							}t.onEndTransition.call(this);if (e("> div", l).eq(u).attr("data-video") != "hide" && e(".cameraContent.cameracurrent .imgFake", o).length) {
								e(".cameraContent.cameracurrent .imgFake", o).click();
							}var n = X.eq(u).find(".fadeIn").length;var i = e(".cameraContent", o).eq(u).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;if (n != 0) {
								e(".cameraSlide.cameracurrent .fadeIn", o).each(function () {
									if (e(this).attr("data-easing") != "") {
										var t = e(this).attr("data-easing");
									} else {
										var t = q;
									}var r = e(this);if (typeof r.attr("data-outerWidth") === "undefined" || r.attr("data-outerWidth") === false || r.attr("data-outerWidth") === "") {
										var i = r.outerWidth();r.attr("data-outerWidth", i);
									} else {
										var i = r.attr("data-outerWidth");
									}if (typeof r.attr("data-outerHeight") === "undefined" || r.attr("data-outerHeight") === false || r.attr("data-outerHeight") === "") {
										var s = r.outerHeight();r.attr("data-outerHeight", s);
									} else {
										var s = r.attr("data-outerHeight");
									}var o = r.position();var u = o.left;var a = o.top;var f = r.attr("class");var l = r.index();var c = r.parents(".camerarelative").outerHeight();var h = r.parents(".camerarelative").outerWidth();if (f.indexOf("fadeIn") != -1) {
										r.animate({ opacity: 0 }, 0).css("visibility", "visible").delay(P / n * .1 * (l - 1)).animate({ opacity: 1 }, P / n * .15, t);
									} else {
										r.css("visibility", "visible");
									}
								});
							}e(".cameraContent.cameracurrent", o).show();if (i != 0) {
								e(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom", o).each(function () {
									if (e(this).attr("data-easing") != "") {
										var t = e(this).attr("data-easing");
									} else {
										var t = q;
									}var n = e(this);var r = n.position();var s = r.left;var o = r.top;var u = n.attr("class");var a = n.index();var f = n.outerHeight();if (u.indexOf("moveFromLeft") != -1) {
										n.css({ left: "-" + w + "px", right: "auto" });n.css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ left: r.left }, P / i * .15, t);
									} else if (u.indexOf("moveFromRight") != -1) {
										n.css({ left: w + "px", right: "auto" });n.css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ left: r.left }, P / i * .15, t);
									} else if (u.indexOf("moveFromTop") != -1) {
										n.css({ top: "-" + E + "px", bottom: "auto" });n.css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ top: r.top }, P / i * .15, t, function () {
											n.css({ top: "auto", bottom: 0 });
										});
									} else if (u.indexOf("moveFromBottom") != -1) {
										n.css({ top: E + "px", bottom: "auto" });n.css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ top: r.top }, P / i * .15, t);
									} else if (u.indexOf("fadeFromLeft") != -1) {
										n.animate({ opacity: 0 }, 0).css({ left: "-" + w + "px", right: "auto" });n.css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ left: r.left, opacity: 1 }, P / i * .15, t);
									} else if (u.indexOf("fadeFromRight") != -1) {
										n.animate({ opacity: 0 }, 0).css({ left: w + "px", right: "auto" });n.css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ left: r.left, opacity: 1 }, P / i * .15, t);
									} else if (u.indexOf("fadeFromTop") != -1) {
										n.animate({ opacity: 0 }, 0).css({ top: "-" + E + "px", bottom: "auto" });n.css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ top: r.top, opacity: 1 }, P / i * .15, t, function () {
											n.css({ top: "auto", bottom: 0 });
										});
									} else if (u.indexOf("fadeFromBottom") != -1) {
										n.animate({ opacity: 0 }, 0).css({ bottom: "-" + f + "px" });n.css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ bottom: "0", opacity: 1 }, P / i * .15, t);
									} else if (u.indexOf("fadeIn") != -1) {
										n.animate({ opacity: 0 }, 0).css("visibility", "visible").delay(P / i * .1 * (a - 1)).animate({ opacity: 1 }, P / i * .15, t);
									} else {
										n.css("visibility", "visible");
									}
								});
							}e(".cameraappended", c).remove();l.removeClass("camerasliding");X.eq(r).hide();var s = e(".camera_bar_cont", K).width(),
							    h = e(".camera_bar_cont", K).height(),
							    d;if (a != "pie") {
								d = .05;
							} else {
								d = .005;
							}e("#" + f).animate({ opacity: t.loaderOpacity }, 200);F = setInterval(function () {
								if (l.hasClass("stopped")) {
									clearInterval(F);
								}if (a != "pie") {
									if (nt <= 1.002 && !l.hasClass("stopped") && !l.hasClass("paused") && !l.hasClass("hovered")) {
										nt = nt + d;
									} else if (nt <= 1 && (l.hasClass("stopped") || l.hasClass("paused") || l.hasClass("stopped") || l.hasClass("hovered"))) {
										nt = nt;
									} else {
										if (!l.hasClass("stopped") && !l.hasClass("paused") && !l.hasClass("hovered")) {
											clearInterval(F);Q();e("#" + f).animate({ opacity: 0 }, 200, function () {
												clearTimeout(I);I = setTimeout(ft, p);lt();t.onStartLoading.call(this);
											});
										}
									}switch (J) {case "leftToRight":
											e("#" + f).animate({ right: s - s * nt }, P * d, "linear");break;case "rightToLeft":
											e("#" + f).animate({ left: s - s * nt }, P * d, "linear");break;case "topToBottom":
											e("#" + f).animate({ bottom: h - h * nt }, P * d, "linear");break;case "bottomToTop":
											e("#" + f).animate({ bottom: h - h * nt }, P * d, "linear");break;}
								} else {
									rt = nt;it.clearRect(0, 0, t.pieDiameter, t.pieDiameter);it.globalCompositeOperation = "destination-over";it.beginPath();it.arc(t.pieDiameter / 2, t.pieDiameter / 2, t.pieDiameter / 2 - t.loaderStroke, 0, Math.PI * 2, false);it.lineWidth = t.loaderStroke;it.strokeStyle = t.loaderBgColor;it.stroke();it.closePath();it.globalCompositeOperation = "source-over";it.beginPath();it.arc(t.pieDiameter / 2, t.pieDiameter / 2, t.pieDiameter / 2 - t.loaderStroke, 0, Math.PI * 2 * rt, false);it.lineWidth = t.loaderStroke - t.loaderPadding * 2;it.strokeStyle = t.loaderColor;it.stroke();it.closePath();if (nt <= 1.002 && !l.hasClass("stopped") && !l.hasClass("paused") && !l.hasClass("hovered")) {
										nt = nt + d;
									} else if (nt <= 1 && (l.hasClass("stopped") || l.hasClass("paused") || l.hasClass("hovered"))) {
										nt = nt;
									} else {
										if (!l.hasClass("stopped") && !l.hasClass("paused") && !l.hasClass("hovered")) {
											clearInterval(F);Q();e("#" + f + ", .camera_canvas_wrap", K).animate({ opacity: 0 }, 200, function () {
												clearTimeout(I);I = setTimeout(ft, p);lt();t.onStartLoading.call(this);
											});
										}
									}
								}
							}, P * d);
						}
					}if (i % A < tt) {
						ot = 1;
					} else {
						ot = 0;
					}if (i % A == 0) {
						ct = 0;
					}if (Math.floor(i / A) < st) {
						ut = 1;
					} else {
						ut = 0;
					}switch (B) {case "simpleFade":
							height = E;width = w;opacityOnGrid = 0;break;case "curtainTopLeft":
							height = 0, width = Math.floor(w / A + ot + 1), marginTop = "-" + Math.floor(E / k + ut + 1) + "px";break;case "curtainTopRight":
							height = 0, width = Math.floor(w / A + ot + 1), marginTop = "-" + Math.floor(E / k + ut + 1) + "px";break;case "curtainBottomLeft":
							height = 0, width = Math.floor(w / A + ot + 1), marginTop = Math.floor(E / k + ut + 1) + "px";break;case "curtainBottomRight":
							height = 0, width = Math.floor(w / A + ot + 1), marginTop = Math.floor(E / k + ut + 1) + "px";break;case "curtainSliceLeft":
							height = 0, width = Math.floor(w / A + ot + 1);if (i % 2 == 0) {
								marginTop = Math.floor(E / k + ut + 1) + "px";
							} else {
								marginTop = "-" + Math.floor(E / k + ut + 1) + "px";
							}break;case "curtainSliceRight":
							height = 0, width = Math.floor(w / A + ot + 1);if (i % 2 == 0) {
								marginTop = Math.floor(E / k + ut + 1) + "px";
							} else {
								marginTop = "-" + Math.floor(E / k + ut + 1) + "px";
							}break;case "blindCurtainTopLeft":
							height = Math.floor(E / k + ut + 1), width = 0, marginLeft = "-" + Math.floor(w / A + ot + 1) + "px";break;case "blindCurtainTopRight":
							height = Math.floor(E / k + ut + 1), width = 0, marginLeft = Math.floor(w / A + ot + 1) + "px";break;case "blindCurtainBottomLeft":
							height = Math.floor(E / k + ut + 1), width = 0, marginLeft = "-" + Math.floor(w / A + ot + 1) + "px";break;case "blindCurtainBottomRight":
							height = Math.floor(E / k + ut + 1), width = 0, marginLeft = Math.floor(w / A + ot + 1) + "px";break;case "blindCurtainSliceBottom":
							height = Math.floor(E / k + ut + 1), width = 0;if (i % 2 == 0) {
								marginLeft = "-" + Math.floor(w / A + ot + 1) + "px";
							} else {
								marginLeft = Math.floor(w / A + ot + 1) + "px";
							}break;case "blindCurtainSliceTop":
							height = Math.floor(E / k + ut + 1), width = 0;if (i % 2 == 0) {
								marginLeft = "-" + Math.floor(w / A + ot + 1) + "px";
							} else {
								marginLeft = Math.floor(w / A + ot + 1) + "px";
							}break;case "stampede":
							height = 0;width = 0;marginLeft = w * .2 * (n % A - (A - Math.floor(A / 2))) + "px";marginTop = E * .2 * (Math.floor(n / A) + 1 - (k - Math.floor(k / 2))) + "px";break;case "mosaic":
							height = 0;width = 0;break;case "mosaicReverse":
							height = 0;width = 0;marginLeft = Math.floor(w / A + ot + 1) + "px";marginTop = Math.floor(E / k + ut + 1) + "px";break;case "mosaicRandom":
							height = 0;width = 0;marginLeft = Math.floor(w / A + ot + 1) * .5 + "px";marginTop = Math.floor(E / k + ut + 1) * .5 + "px";break;case "mosaicSpiral":
							height = 0;width = 0;marginLeft = Math.floor(w / A + ot + 1) * .5 + "px";marginTop = Math.floor(E / k + ut + 1) * .5 + "px";break;case "mosaicSpiralReverse":
							height = 0;width = 0;marginLeft = Math.floor(w / A + ot + 1) * .5 + "px";marginTop = Math.floor(E / k + ut + 1) * .5 + "px";break;case "topLeftBottomRight":
							height = 0;width = 0;break;case "bottomRightTopLeft":
							height = 0;width = 0;marginLeft = Math.floor(w / A + ot + 1) + "px";marginTop = Math.floor(E / k + ut + 1) + "px";break;case "bottomLeftTopRight":
							height = 0;width = 0;marginLeft = 0;marginTop = Math.floor(E / k + ut + 1) + "px";break;case "topRightBottomLeft":
							height = 0;width = 0;marginLeft = Math.floor(w / A + ot + 1) + "px";marginTop = 0;break;case "scrollRight":
							height = E;width = w;marginLeft = -w;break;case "scrollLeft":
							height = E;width = w;marginLeft = w;break;case "scrollTop":
							height = E;width = w;marginTop = E;break;case "scrollBottom":
							height = E;width = w;marginTop = -E;break;case "scrollHorz":
							height = E;width = w;if (r == 0 && u == L - 1) {
								marginLeft = -w;
							} else if (r < u || r == L - 1 && u == 0) {
								marginLeft = w;
							} else {
								marginLeft = -w;
							}break;}var h = e(".cameraappended:eq(" + i + ")", c);if (typeof F !== "undefined") {
						clearInterval(F);clearTimeout(I);I = setTimeout(ft, H + _);
					}if (e(y).length) {
						e(".camera_pag li", s).removeClass("cameracurrent");e(".camera_pag li", s).eq(u).addClass("cameracurrent");
					}if (e(b).length) {
						e("li", b).removeClass("cameracurrent");e("li", b).eq(u).addClass("cameracurrent");e("li", b).not(".cameracurrent").find("img").animate({ opacity: .5 }, 0);e("li.cameracurrent img", b).animate({ opacity: 1 }, 0);e("li", b).hover(function () {
							e("img", this).stop(true, false).animate({ opacity: 1 }, 150);
						}, function () {
							if (!e(this).hasClass("cameracurrent")) {
								e("img", this).stop(true, false).animate({ opacity: .5 }, 150);
							}
						});
					}var p = parseFloat(H) + parseFloat(_);if (B == "scrollLeft" || B == "scrollRight" || B == "scrollTop" || B == "scrollBottom" || B == "scrollHorz") {
						t.onStartTransition.call(this);p = 0;h.delay((H + _) / et * dt[n] * O * .5).css({ display: "block", height: height, "margin-left": marginLeft, "margin-top": marginTop, width: width }).animate({ height: Math.floor(E / k + ut + 1), "margin-top": 0, "margin-left": 0, width: Math.floor(w / A + ot + 1) }, H - _, q, d);X.eq(r).delay((H + _) / et * dt[n] * O * .5).animate({ "margin-left": marginLeft * -1, "margin-top": marginTop * -1 }, H - _, q, function () {
							e(this).css({ "margin-top": 0, "margin-left": 0 });
						});
					} else {
						t.onStartTransition.call(this);p = parseFloat(H) + parseFloat(_);if (z == "next") {
							h.delay((H + _) / et * dt[n] * O * .5).css({ display: "block", height: height, "margin-left": marginLeft, "margin-top": marginTop, width: width, opacity: opacityOnGrid }).animate({ height: Math.floor(E / k + ut + 1), "margin-top": 0, "margin-left": 0, opacity: 1, width: Math.floor(w / A + ot + 1) }, H - _, q, d);
						} else {
							X.eq(u).show().css("z-index", "999").addClass("cameracurrent");X.eq(r).css("z-index", "1").removeClass("cameracurrent");e(".cameraContent", o).eq(u).addClass("cameracurrent");e(".cameraContent", o).eq(r).removeClass("cameracurrent");h.delay((H + _) / et * dt[n] * O * .5).css({ display: "block", height: Math.floor(E / k + ut + 1), "margin-top": 0, "margin-left": 0, opacity: 1, width: Math.floor(w / A + ot + 1) }).animate({ height: height, "margin-left": marginLeft, "margin-top": marginTop, width: width, opacity: opacityOnGrid }, H - _, q, d);
						}
					}
				});
			}
		}var r = { alignment: "center", autoAdvance: true, mobileAutoAdvance: true, barDirection: "leftToRight", barPosition: "bottom", cols: 6, easing: "easeInOutExpo", mobileEasing: "", fx: "random", mobileFx: "", gridDifference: 250, height: "50%", imagePath: "img/", hover: true, loader: "pie", loaderColor: "#eeeeee", loaderBgColor: "#222222", loaderOpacity: .8, loaderPadding: 2, loaderStroke: 7, minHeight: "200px", navigation: true, navigationHover: true, mobileNavHover: true, opacityOnGrid: false, overlayer: true, pagination: true, playPause: true, pauseOnClick: true, pieDiameter: 38, piePosition: "rightTop", portrait: false, rows: 4, slicedCols: 12, slicedRows: 8, slideOn: "random", thumbnails: false, time: 7e3, transPeriod: 1500, onEndTransition: function onEndTransition() {}, onLoaded: function onLoaded() {}, onStartLoading: function onStartLoading() {}, onStartTransition: function onStartTransition() {} };e.support.borderRadius = false;e.each(["borderRadius", "BorderRadius", "MozBorderRadius", "WebkitBorderRadius", "OBorderRadius", "KhtmlBorderRadius"], function () {
			if (document.body.style[this] !== undefined) e.support.borderRadius = true;
		});var t = e.extend({}, r, t);var s = e(this).addClass("camera_wrap");s.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var o = e(".camera_fakehover", s);var u = (".camera_fakehover", s);o.append('<div class="camera_target"></div>');if (t.overlayer == true) {
			o.append('<div class="camera_overlayer"></div>');
		}o.append('<div class="camera_target_content"></div>');var a;if (t.loader == "pie" && !e.support.borderRadius) {
			a = "bar";
		} else {
			a = t.loader;
		}if (a == "pie") {
			o.append('<div class="camera_pie"></div>');
		} else if (a == "bar") {
			o.append('<div class="camera_bar"></div>');
		} else {
			o.append('<div class="camera_bar" style="display:none"></div>');
		}if (t.playPause == true) {
			o.append('<div class="camera_commands"></div>');
		}if (t.navigation == true) {
			o.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>');
		}if (t.thumbnails == true) {
			s.append('<div class="camera_thumbs_cont" />');
		}if (t.thumbnails == true && t.pagination != true) {
			e(".camera_thumbs_cont", s).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />');
		}if (t.pagination == true) {
			s.append('<div class="camera_pag"></div>');
		}s.append('<div class="camera_loader"></div>');e(".camera_caption", s).each(function () {
			e(this).wrapInner("<div />");
		});var f = "pie_" + s.index(),
		    l = e(".camera_src", s),
		    c = e(".camera_target", s),
		    h = e(".camera_target_content", s),
		    p = e(".camera_pie", s),
		    d = e(".camera_bar", s),
		    v = e(".camera_prev", s),
		    m = e(".camera_next", s),
		    g = e(".camera_commands", s),
		    y = e(".camera_pag", s),
		    b = e(".camera_thumbs_cont", s);var w, E;var S = new Array();e("> div", l).each(function () {
			S.push(e(this).attr("data-src"));
		});var x = new Array();e("> div", l).each(function () {
			if (e(this).attr("data-link")) {
				x.push(e(this).attr("data-link"));
			} else {
				x.push("");
			}
		});var T = new Array();e("> div", l).each(function () {
			if (e(this).attr("data-target")) {
				T.push(e(this).attr("data-target"));
			} else {
				T.push("");
			}
		});var N = new Array();e("> div", l).each(function () {
			if (e(this).attr("data-portrait")) {
				N.push(e(this).attr("data-portrait"));
			} else {
				N.push("");
			}
		});var C = new Array();e("> div", l).each(function () {
			if (e(this).attr("data-alignment")) {
				C.push(e(this).attr("data-alignment"));
			} else {
				C.push("");
			}
		});var k = new Array();e("> div", l).each(function () {
			if (e(this).attr("data-thumb")) {
				k.push(e(this).attr("data-thumb"));
			} else {
				k.push("");
			}
		});var L = S.length;e(h).append('<div class="cameraContents" />');var A;for (A = 0; A < L; A++) {
			e(".cameraContents", h).append('<div class="cameraContent" />');if (x[A] != "") {
				var O = e("> div ", l).eq(A).attr("data-box");if (typeof O !== "undefined" && O !== false && O != "") {
					O = 'data-box="' + e("> div ", l).eq(A).attr("data-box") + '"';
				} else {
					O = "";
				}e(".camera_target_content .cameraContent:eq(" + A + ")", s).append('<a class="camera_link" href="' + x[A] + '" ' + O + ' target="' + T[A] + '"></a>');
			}
		}e(".camera_caption", s).each(function () {
			var t = e(this).parent().index(),
			    n = s.find(".cameraContent").eq(t);e(this).appendTo(n);
		});c.append('<div class="cameraCont" />');var M = e(".cameraCont", s);var _;for (_ = 0; _ < L; _++) {
			M.append('<div class="cameraSlide cameraSlide_' + _ + '" />');var D = e("> div:eq(" + _ + ")", l);c.find(".cameraSlide_" + _).clone(D);
		}e(window).bind("load resize pageshow", function () {
			at();P();
		});M.append('<div class="cameraSlide cameraSlide_' + _ + '" />');var H;s.show();var w = c.width();var E = c.height();var B;e(window).bind("resize pageshow", function () {
			if (H == true) {
				j();
			}e("ul", b).animate({ "margin-top": 0 }, 0, at);if (!l.hasClass("paused")) {
				l.addClass("paused");if (e(".camera_stop", K).length) {
					e(".camera_stop", K).hide();e(".camera_play", K).show();if (a != "none") {
						e("#" + f).hide();
					}
				} else {
					if (a != "none") {
						e("#" + f).hide();
					}
				}clearTimeout(B);B = setTimeout(function () {
					l.removeClass("paused");if (e(".camera_play", K).length) {
						e(".camera_play", K).hide();e(".camera_stop", K).show();if (a != "none") {
							e("#" + f).fadeIn();
						}
					} else {
						if (a != "none") {
							e("#" + f).fadeIn();
						}
					}
				}, 1500);
			}
		});var F, I;var q, R, U, g, y;var z, W;if (i() && t.mobileAutoAdvance != "") {
			R = t.mobileAutoAdvance;
		} else {
			R = t.autoAdvance;
		}if (R == false) {
			l.addClass("paused");
		}if (i() && t.mobileNavHover != "") {
			U = t.mobileNavHover;
		} else {
			U = t.navigationHover;
		}if (l.length != 0) {
			var _Q = function _Q() {
				e("iframe", o).each(function () {
					e(".camera_caption", o).show();var n = e(this);var r = n.attr("data-src");n.attr("src", r);var i = t.imagePath + "blank.gif";var u = new Image();u.src = i;if (t.height.indexOf("%") != -1) {
						var a = Math.round(w / (100 / parseFloat(t.height)));if (t.minHeight != "" && a < parseFloat(t.minHeight)) {
							E = parseFloat(t.minHeight);
						} else {
							E = a;
						}
					} else if (t.height == "auto") {
						E = s.height();
					} else {
						E = parseFloat(t.height);
					}n.after(e(u).attr({ "class": "imgFake", width: w, height: E }));var f = n.clone();n.remove();e(u).bind("click", function () {
						if (e(this).css("position") == "absolute") {
							e(this).remove();if (r.indexOf("vimeo") != -1 || r.indexOf("youtube") != -1) {
								if (r.indexOf("?") != -1) {
									autoplay = "&autoplay=1";
								} else {
									autoplay = "?autoplay=1";
								}
							} else if (r.indexOf("dailymotion") != -1) {
								if (r.indexOf("?") != -1) {
									autoplay = "&autoPlay=1";
								} else {
									autoplay = "?autoPlay=1";
								}
							}f.attr("src", r + autoplay);W = true;
						} else {
							e(this).css({ position: "absolute", top: 0, left: 0, zIndex: 10 }).after(f);f.css({ position: "absolute", top: 0, left: 0, zIndex: 9 });
						}
					});
				});
			};

			var X = e(".cameraSlide", c);X.wrapInner('<div class="camerarelative" />');var V;var J = t.barDirection;var K = s;e("iframe", o).each(function () {
				var t = e(this);var n = t.attr("src");t.attr("data-src", n);var r = t.parent().index(".camera_src > div");e(".camera_target_content .cameraContent:eq(" + r + ")", s).append(t);
			});_Q();if (t.hover == true) {
				if (!i()) {
					o.hover(function () {
						l.addClass("hovered");
					}, function () {
						l.removeClass("hovered");
					});
				}
			}if (U == true) {
				e(v, s).animate({ opacity: 0 }, 0);e(m, s).animate({ opacity: 0 }, 0);e(g, s).animate({ opacity: 0 }, 0);if (i()) {
					e(document).on("vmouseover", u, function () {
						e(v, s).animate({ opacity: 1 }, 200);e(m, s).animate({ opacity: 1 }, 200);e(g, s).animate({ opacity: 1 }, 200);
					});e(document).on("vmouseout", u, function () {
						e(v, s).delay(500).animate({ opacity: 0 }, 200);e(m, s).delay(500).animate({ opacity: 0 }, 200);e(g, s).delay(500).animate({ opacity: 0 }, 200);
					});
				} else {
					o.hover(function () {
						e(v, s).animate({ opacity: 1 }, 200);e(m, s).animate({ opacity: 1 }, 200);e(g, s).animate({ opacity: 1 }, 200);
					}, function () {
						e(v, s).animate({ opacity: 0 }, 200);e(m, s).animate({ opacity: 0 }, 200);e(g, s).animate({ opacity: 0 }, 200);
					});
				}
			}K.on("click", ".camera_stop", function () {
				R = false;l.addClass("paused");if (e(".camera_stop", K).length) {
					e(".camera_stop", K).hide();e(".camera_play", K).show();if (a != "none") {
						e("#" + f).hide();
					}
				} else {
					if (a != "none") {
						e("#" + f).hide();
					}
				}
			});K.on("click", ".camera_play", function () {
				R = true;l.removeClass("paused");if (e(".camera_play", K).length) {
					e(".camera_play", K).hide();e(".camera_stop", K).show();if (a != "none") {
						e("#" + f).show();
					}
				} else {
					if (a != "none") {
						e("#" + f).show();
					}
				}
			});if (t.pauseOnClick == true) {
				e(".camera_target_content", o).mouseup(function () {
					R = false;l.addClass("paused");e(".camera_stop", K).hide();e(".camera_play", K).show();e("#" + f).hide();
				});
			}e(".cameraContent, .imgFake", o).hover(function () {
				z = true;
			}, function () {
				z = false;
			});e(".cameraContent, .imgFake", o).bind("click", function () {
				if (W == true && z == true) {
					R = false;e(".camera_caption", o).hide();l.addClass("paused");e(".camera_stop", K).hide();e(".camera_play", K).show();e("#" + f).hide();
				}
			});
		}if (a != "pie") {
			d.append('<span class="camera_bar_cont" />');e(".camera_bar_cont", d).animate({ opacity: t.loaderOpacity }, 0).css({ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, "background-color": t.loaderBgColor }).append('<span id="' + f + '" />');e("#" + f).animate({ opacity: 0 }, 0);var Z = e("#" + f);Z.css({ position: "absolute", "background-color": t.loaderColor });switch (t.barPosition) {case "left":
					d.css({ right: "auto", width: t.loaderStroke });break;case "right":
					d.css({ left: "auto", width: t.loaderStroke });break;case "top":
					d.css({ bottom: "auto", height: t.loaderStroke });break;case "bottom":
					d.css({ top: "auto", height: t.loaderStroke });break;}switch (J) {case "leftToRight":
					Z.css({ left: 0, right: 0, top: t.loaderPadding, bottom: t.loaderPadding });break;case "rightToLeft":
					Z.css({ left: 0, right: 0, top: t.loaderPadding, bottom: t.loaderPadding });break;case "topToBottom":
					Z.css({ left: t.loaderPadding, right: t.loaderPadding, top: 0, bottom: 0 });break;case "bottomToTop":
					Z.css({ left: t.loaderPadding, right: t.loaderPadding, top: 0, bottom: 0 });break;}
		} else {
			p.append('<canvas id="' + f + '"></canvas>');var et;var Z = document.getElementById(f);Z.setAttribute("width", t.pieDiameter);Z.setAttribute("height", t.pieDiameter);var tt;switch (t.piePosition) {case "leftTop":
					tt = "left:0; top:0;";break;case "rightTop":
					tt = "right:0; top:0;";break;case "leftBottom":
					tt = "left:0; bottom:0;";break;case "rightBottom":
					tt = "right:0; bottom:0;";break;}Z.setAttribute("style", "position:absolute; z-index:1002; " + tt);var nt;var rt;if (Z && Z.getContext) {
				var it = Z.getContext("2d");it.rotate(Math.PI * (3 / 2));it.translate(-t.pieDiameter, 0);
			}
		}if (a == "none" || R == false) {
			e("#" + f).hide();e(".camera_canvas_wrap", K).hide();
		}if (e(y).length) {
			e(y).append('<ul class="camera_pag_ul" />');var st;for (st = 0; st < L; st++) {
				e(".camera_pag_ul", s).append('<li class="pag_nav_' + st + '" style="position:relative; z-index:1002"><span><span>' + st + "</span></span></li>");
			}e(".camera_pag_ul li", s).hover(function () {
				e(this).addClass("camera_hover");if (e(".camera_thumb", this).length) {
					var t = e(".camera_thumb", this).outerWidth(),
					    n = e(".camera_thumb", this).outerHeight(),
					    r = e(this).outerWidth();e(".camera_thumb", this).show().css({ top: "-" + n + "px", left: "-" + (t - r) / 2 + "px" }).animate({ opacity: 1, "margin-top": "-3px" }, 200);e(".thumb_arrow", this).show().animate({ opacity: 1, "margin-top": "-3px" }, 200);
				}
			}, function () {
				e(this).removeClass("camera_hover");e(".camera_thumb", this).animate({ "margin-top": "-20px", opacity: 0 }, 200, function () {
					e(this).css({ marginTop: "5px" }).hide();
				});e(".thumb_arrow", this).animate({ "margin-top": "-20px", opacity: 0 }, 200, function () {
					e(this).css({ marginTop: "5px" }).hide();
				});
			});
		}if (e(b).length) {
			var ot;if (!e(y).length) {
				e(b).append("<div />");e(b).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');e("> div", b).append("<ul />");e.each(k, function (t, n) {
					if (e("> div", l).eq(t).attr("data-thumb") != "") {
						var r = e("> div", l).eq(t).attr("data-thumb"),
						    i = new Image();i.src = r;e("ul", b).append('<li class="pix_thumb pix_thumb_' + t + '" />');e("li.pix_thumb_" + t, b).append(e(i).attr("class", "camera_thumb"));
					}
				});
			} else {
				e.each(k, function (t, n) {
					if (e("> div", l).eq(t).attr("data-thumb") != "") {
						var r = e("> div", l).eq(t).attr("data-thumb"),
						    i = new Image();i.src = r;e("li.pag_nav_" + t, y).append(e(i).attr("class", "camera_thumb").css({ position: "absolute" }).animate({ opacity: 0 }, 0));e("li.pag_nav_" + t + " > img", y).after('<div class="thumb_arrow" />');e("li.pag_nav_" + t + " > .thumb_arrow", y).animate({ opacity: 0 }, 0);
					}
				});
			}
		} else if (!e(b).length && e(y).length) {}var ut = true;if (e(g).length) {
			e(g).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');if (R == true) {
				e(".camera_play", K).hide();e(".camera_stop", K).show();
			} else {
				e(".camera_stop", K).hide();e(".camera_play", K).show();
			}
		}ft();e(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", o).each(function () {
			e(this).css("visibility", "hidden");
		});t.onStartLoading.call(this);lt();if (e(v).length) {
			e(v).click(function () {
				if (!l.hasClass("camerasliding")) {
					var n = parseFloat(e(".cameraSlide.cameracurrent", c).index());clearInterval(F);Q();e("#" + f + ", .camera_canvas_wrap", s).animate({ opacity: 0 }, 0);ft();if (n != 0) {
						lt(n);
					} else {
						lt(L);
					}t.onStartLoading.call(this);
				}
			});
		}if (e(m).length) {
			e(m).click(function () {
				if (!l.hasClass("camerasliding")) {
					var n = parseFloat(e(".cameraSlide.cameracurrent", c).index());clearInterval(F);Q();e("#" + f + ", .camera_canvas_wrap", K).animate({ opacity: 0 }, 0);ft();if (n == L - 1) {
						lt(1);
					} else {
						lt(n + 2);
					}t.onStartLoading.call(this);
				}
			});
		}if (i()) {
			o.bind("swipeleft", function (n) {
				if (!l.hasClass("camerasliding")) {
					var r = parseFloat(e(".cameraSlide.cameracurrent", c).index());clearInterval(F);Q();e("#" + f + ", .camera_canvas_wrap", K).animate({ opacity: 0 }, 0);ft();if (r == L - 1) {
						lt(1);
					} else {
						lt(r + 2);
					}t.onStartLoading.call(this);
				}
			});o.bind("swiperight", function (n) {
				if (!l.hasClass("camerasliding")) {
					var r = parseFloat(e(".cameraSlide.cameracurrent", c).index());clearInterval(F);Q();e("#" + f + ", .camera_canvas_wrap", K).animate({ opacity: 0 }, 0);ft();if (r != 0) {
						lt(r);
					} else {
						lt(L);
					}t.onStartLoading.call(this);
				}
			});
		}if (e(y).length) {
			e(".camera_pag li", s).click(function () {
				if (!l.hasClass("camerasliding")) {
					var n = parseFloat(e(this).index());var r = parseFloat(e(".cameraSlide.cameracurrent", c).index());if (n != r) {
						clearInterval(F);Q();e("#" + f + ", .camera_canvas_wrap", K).animate({ opacity: 0 }, 0);ft();lt(n + 1);t.onStartLoading.call(this);
					}
				}
			});
		}if (e(b).length) {
			e(".pix_thumb img", b).click(function () {
				if (!l.hasClass("camerasliding")) {
					var n = parseFloat(e(this).parents("li").index());var r = parseFloat(e(".cameracurrent", c).index());if (n != r) {
						clearInterval(F);Q();e("#" + f + ", .camera_canvas_wrap", K).animate({ opacity: 0 }, 0);e(".pix_thumb", b).removeClass("cameracurrent");e(this).parents("li").addClass("cameracurrent");ft();lt(n + 1);at();t.onStartLoading.call(this);
					}
				}
			});e(".camera_thumbs_cont .camera_prevThumbs", K).hover(function () {
				e(this).stop(true, false).animate({ opacity: 1 }, 250);
			}, function () {
				e(this).stop(true, false).animate({ opacity: .7 }, 250);
			});e(".camera_prevThumbs", K).click(function () {
				var t = 0,
				    n = e(b).outerWidth(),
				    r = e("ul", b).offset().left,
				    i = e("> div", b).offset().left,
				    s = i - r;e(".camera_visThumb", b).each(function () {
					var n = e(this).outerWidth();t = t + n;
				});if (s - t > 0) {
					e("ul", b).animate({ "margin-left": "-" + (s - t) + "px" }, 500, P);
				} else {
					e("ul", b).animate({ "margin-left": 0 }, 500, P);
				}
			});e(".camera_thumbs_cont .camera_nextThumbs", K).hover(function () {
				e(this).stop(true, false).animate({ opacity: 1 }, 250);
			}, function () {
				e(this).stop(true, false).animate({ opacity: .7 }, 250);
			});e(".camera_nextThumbs", K).click(function () {
				var t = 0,
				    n = e(b).outerWidth(),
				    r = e("ul", b).outerWidth(),
				    i = e("ul", b).offset().left,
				    s = e("> div", b).offset().left,
				    o = s - i;e(".camera_visThumb", b).each(function () {
					var n = e(this).outerWidth();t = t + n;
				});if (o + t + t < r) {
					e("ul", b).animate({ "margin-left": "-" + (o + t) + "px" }, 500, P);
				} else {
					e("ul", b).animate({ "margin-left": "-" + (r - n) + "px" }, 500, P);
				}
			});
		}
	};
})(jQuery);(function (e) {
	e.fn.cameraStop = function () {
		var t = e(this),
		    n = e(".camera_src", t),
		    r = "pie_" + t.index();n.addClass("stopped");if (e(".camera_showcommands").length) {
			var i = e(".camera_thumbs_wrap", t);
		} else {
			var i = t;
		}
	};
})(jQuery);(function (e) {
	e.fn.cameraPause = function () {
		var t = e(this);var n = e(".camera_src", t);n.addClass("paused");
	};
})(jQuery);(function (e) {
	e.fn.cameraResume = function () {
		var t = e(this);var n = e(".camera_src", t);if (typeof autoAdv === "undefined" || autoAdv !== true) {
			n.removeClass("paused");
		}
	};
})(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function swing(e, t, n, r, i) {
		return jQuery.easing[jQuery.easing.def](e, t, n, r, i);
	}, easeInQuad: function easeInQuad(e, t, n, r, i) {
		return r * (t /= i) * t + n;
	}, easeOutQuad: function easeOutQuad(e, t, n, r, i) {
		return -r * (t /= i) * (t - 2) + n;
	}, easeInOutQuad: function easeInOutQuad(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return r / 2 * t * t + n;return -r / 2 * (--t * (t - 2) - 1) + n;
	}, easeInCubic: function easeInCubic(e, t, n, r, i) {
		return r * (t /= i) * t * t + n;
	}, easeOutCubic: function easeOutCubic(e, t, n, r, i) {
		return r * ((t = t / i - 1) * t * t + 1) + n;
	}, easeInOutCubic: function easeInOutCubic(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;return r / 2 * ((t -= 2) * t * t + 2) + n;
	}, easeInQuart: function easeInQuart(e, t, n, r, i) {
		return r * (t /= i) * t * t * t + n;
	}, easeOutQuart: function easeOutQuart(e, t, n, r, i) {
		return -r * ((t = t / i - 1) * t * t * t - 1) + n;
	}, easeInOutQuart: function easeInOutQuart(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;return -r / 2 * ((t -= 2) * t * t * t - 2) + n;
	}, easeInQuint: function easeInQuint(e, t, n, r, i) {
		return r * (t /= i) * t * t * t * t + n;
	}, easeOutQuint: function easeOutQuint(e, t, n, r, i) {
		return r * ((t = t / i - 1) * t * t * t * t + 1) + n;
	}, easeInOutQuint: function easeInOutQuint(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;return r / 2 * ((t -= 2) * t * t * t * t + 2) + n;
	}, easeInSine: function easeInSine(e, t, n, r, i) {
		return -r * Math.cos(t / i * (Math.PI / 2)) + r + n;
	}, easeOutSine: function easeOutSine(e, t, n, r, i) {
		return r * Math.sin(t / i * (Math.PI / 2)) + n;
	}, easeInOutSine: function easeInOutSine(e, t, n, r, i) {
		return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n;
	}, easeInExpo: function easeInExpo(e, t, n, r, i) {
		return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n;
	}, easeOutExpo: function easeOutExpo(e, t, n, r, i) {
		return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n;
	}, easeInOutExpo: function easeInOutExpo(e, t, n, r, i) {
		if (t == 0) return n;if (t == i) return n + r;if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n;
	}, easeInCirc: function easeInCirc(e, t, n, r, i) {
		return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n;
	}, easeOutCirc: function easeOutCirc(e, t, n, r, i) {
		return r * Math.sqrt(1 - (t = t / i - 1) * t) + n;
	}, easeInOutCirc: function easeInOutCirc(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n;
	}, easeInElastic: function easeInElastic(e, t, n, r, i) {
		var s = 1.70158;var o = 0;var u = r;if (t == 0) return n;if ((t /= i) == 1) return n + r;if (!o) o = i * .3;if (u < Math.abs(r)) {
			u = r;var s = o / 4;
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n;
	}, easeOutElastic: function easeOutElastic(e, t, n, r, i) {
		var s = 1.70158;var o = 0;var u = r;if (t == 0) return n;if ((t /= i) == 1) return n + r;if (!o) o = i * .3;if (u < Math.abs(r)) {
			u = r;var s = o / 4;
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n;
	}, easeInOutElastic: function easeInOutElastic(e, t, n, r, i) {
		var s = 1.70158;var o = 0;var u = r;if (t == 0) return n;if ((t /= i / 2) == 2) return n + r;if (!o) o = i * .3 * 1.5;if (u < Math.abs(r)) {
			u = r;var s = o / 4;
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n;
	}, easeInBack: function easeInBack(e, t, n, r, i, s) {
		if (s == undefined) s = 1.70158;return r * (t /= i) * t * ((s + 1) * t - s) + n;
	}, easeOutBack: function easeOutBack(e, t, n, r, i, s) {
		if (s == undefined) s = 1.70158;return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n;
	}, easeInOutBack: function easeInOutBack(e, t, n, r, i, s) {
		if (s == undefined) s = 1.70158;if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n;
	}, easeInBounce: function easeInBounce(e, t, n, r, i) {
		return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n;
	}, easeOutBounce: function easeOutBounce(e, t, n, r, i) {
		if ((t /= i) < 1 / 2.75) {
			return r * 7.5625 * t * t + n;
		} else if (t < 2 / 2.75) {
			return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n;
		} else if (t < 2.5 / 2.75) {
			return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n;
		} else {
			return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n;
		}
	}, easeInOutBounce: function easeInOutBounce(e, t, n, r, i) {
		if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n;
	} });
/*! moltin (js) minified - v1.0.4 - 2017-01-03 */
var Moltin,
    __indexOf = [].indexOf || function (a) {
	for (var b = 0, c = this.length; b < c; b++) {
		if (b in this && this[b] === a) return b;
	}return -1;
},
    __hasProp = {}.hasOwnProperty,
    __extends = function __extends(a, b) {
	function c() {
		this.constructor = a;
	}for (var d in b) {
		__hasProp.call(b, d) && (a[d] = b[d]);
	}return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
};Moltin = function () {
	"use strict";
	function a(a) {
		this.options = this.Merge(this.options, a), this.Storage = new p(), this.Address = new c(this), this.Brand = new d(this), this.Cart = new e(this), this.Category = new f(this), this.Checkout = new g(this), this.Collection = new h(this), this.Currency = new i(this), this.Entry = new j(this), this.Gateway = new k(this), this.Language = new l(this), this.Order = new m(this), this.Product = new n(this), this.Shipping = new o(this), this.Tax = new q(this), this.Storage.get("mcurrency") && (this.options.currency = this.Storage.get("mcurrency")), this.Storage.get("mlanguage") && (this.options.language = this.Storage.get("mlanguage"));
	}var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;return a.prototype.options = { publicId: "", secretKey: "", auth: {}, url: "api.molt.in", version: "v1", debug: !1, currency: !1, language: !1, methods: ["GET", "POST", "PUT", "DELETE"], notice: function notice(a, b) {
			return console.log(a + ": " + b);
		} }, a.prototype.Merge = function (a, b) {
		var c, d, e;d = {};for (c in a) {
			e = a[c], d[c] = e;
		}for (c in b) {
			e = b[c], d[c] = e;
		}return d;
	}, a.prototype.InArray = function (a, b) {
		return !(!b || __indexOf.call(b, a) < 0);
	}, a.prototype.Serialize = function (a, b) {
		var c, d, e;null == b && (b = null), d = [];for (c in a) {
			e = a[c], c = null !== b ? b + "[" + c + "]" : c, d.push("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.Serialize(e, c) : encodeURIComponent(c) + "=" + encodeURIComponent(e));
		}return d.join("&");
	}, a.prototype.Error = function (a) {
		var b, c, d, e;if (c = "", "undefind" != typeof a.errors) {
			e = a.errors;for (b in e) {
				d = e[b], c += d + "<br />";
			}
		} else c = a.error;return this.options.notice("Error", c);
	}, a.prototype.Authenticate = function (a, b) {
		var c, d;return this.options.publicId.length <= 0 && "function" == typeof b && b("error", "Public ID must be set", 401), null !== this.Storage.get("mtoken") && parseInt(this.Storage.get("mexpires")) > Date.now() ? (this.options.auth = { expires: 1e3 * parseInt(this.Storage.get("mexpires")), token: this.Storage.get("mtoken") }, "function" == typeof a && a(this.options.auth), d = document.createEvent("CustomEvent"), d.initCustomEvent("MoltinReady", !1, !1, this), window.dispatchEvent(d), this) : (c = { grant_type: "implicit", client_id: this.options.publicId }, this.Ajax({ method: "POST", path: "/oauth/access_token", data: c, async: "function" == typeof a, headers: { "Content-Type": "application/x-www-form-urlencoded" }, success: function (b) {
				return function (c, e, f) {
					b.Storage.set("mexpires", c.expires), b.Storage.set("mtoken", c.token_type + " " + c.access_token), b.options.auth = { expires: 1e3 * parseInt(b.Storage.get("mexpires")), token: b.Storage.get("mtoken") }, "function" == typeof a && a(c), d = document.createEvent("CustomEvent"), d.initCustomEvent("MoltinReady", !1, !1, b), window.dispatchEvent(d);
				};
			}(this), error: function (a) {
				return function (a, c, d) {
					if ("function" == typeof b) return b("error", "Authorization failed", 401);
				};
			}(this) }), this);
	}, a.prototype.Request = function (a, b, c, d, e) {
		var f, g;if (null == b && (b = "GET"), null == c && (c = null), f = {}, g = { "Content-Type": "application/x-www-form-urlencoded", Authorization: this.options.auth.token }, null === this.options.auth.token && "function" == typeof e && e("error", "You much authenticate first", 401), Date.now() >= this.options.auth.expires && this.Authenticate(null, e), this.InArray(b, this.options.methods) || "function" == typeof e && e("error", "Invalid request method (" + b + ")", 400), this.options.currency && (g["X-Currency"] = this.options.currency), this.options.language && (g["X-Language"] = this.options.language), this.Ajax({ method: b, path: a, data: c, async: "function" == typeof d, headers: g, success: function (a) {
				return function (a, b, c) {
					return "function" == typeof d ? d(a.result, "undefined" != typeof a.pagination ? a.pagination : null) : f = a;
				};
			}(this), error: function (a) {
				return function (b, c, d) {
					return b.status === !1 && ("function" == typeof e ? e("error", "undefined" != typeof b.errors ? b.errors : b.error, c) : a.Error("undefined" != typeof b.errors ? b.errors : b.error)), f = b;
				};
			}(this) }), "undefined" == typeof d) return f.result;
	}, a.prototype.Ajax = function (a) {
		var b, c, d, e, f, g, h;b = { method: "GET", async: !1, data: null, timeout: 6e4, headers: {}, host: this.options.url, port: 443, path: "/", success: function success(a, b, c) {}, error: function error(a, b, c) {} }, b = this.Merge(b, a), b.method = b.method.toUpperCase();try {
			e = new XMLHttpRequest();
		} catch (a) {
			c = a;try {
				e = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (a) {
				return c = a, !1;
			}
		}b.url = (443 === b.port ? "https://" : "http://") + b.host + ("/" !== b.path.substr(0, 1) ? "/" + this.options.version + "/" + b.path : b.path), "GET" === b.method ? (b.url += "?" + this.Serialize(b.data), b.data = null) : b.data = this.Serialize(b.data), e.open(b.method, b.url, b.async), f = setTimeout(function (a) {
			return function () {
				return e.abort(), b.error(e, 408, "Your request timed out");
			};
		}(this), b.timeout), h = b.headers;for (d in h) {
			g = h[d], e.setRequestHeader(d, g);
		}return e.onreadystatechange = function () {
			var a;return 4 !== e.readyState ? null : (clearTimeout(f), a = JSON.parse(e.responseText), "2" !== e.status.toString().charAt(0) ? b.error(a, e.status, e) : b.success(a, e.status, e));
		}, e.send(b.data);
	}, p = function () {
		function a() {}return a.prototype.set = function (a, b, c) {
			var d, e;return e = "", c && (d = new Date(), d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3), e = "; expires=" + d.toGMTString()), document.cookie = a + "=" + b + e + "; path=/";
		}, a.prototype.get = function (a) {
			var b, c, d, e;for (a += "=", e = document.cookie.split(";"), c = 0, d = e.length; c < d; c++) {
				for (b = e[c]; " " === b.charAt(0);) {
					b = b.substring(1, b.length);
				}if (0 === b.indexOf(a)) return b.substring(a.length, b.length);
			}return null;
		}, a.prototype.remove = function (a) {
			return this.set(a, "", -1);
		}, a;
	}(), b = function () {
		function a(a) {
			this.m = a;
		}return a.prototype.Get = function (a, b, c) {
			return this.m.Request(this.endpoint + "/" + a, "GET", null, b, c);
		}, a.prototype.Find = function (a, b, c) {
			return this.m.Request(this.endpoint, "GET", a, b, c);
		}, a.prototype.List = function (a, b, c) {
			return this.m.Request(this.endpoint, "GET", a, b, c);
		}, a.prototype.Fields = function (a, b, c) {
			var d;return null == a && (a = 0), d = this.endpoint + "/" + (0 !== a ? a + "/fields" : "fields"), this.m.Request(d, "GET", null, b, c);
		}, a;
	}(), c = function () {
		function a(a) {
			this.m = a;
		}return a.prototype.Get = function (a, b, c, d) {
			return this.m.Request("customers/" + a + "/addresses/" + b, "GET", null, c, d);
		}, a.prototype.Find = function (a, b, c, d) {
			return this.m.Request("customers/" + a + "/addresses", "GET", b, c, d);
		}, a.prototype.List = function (a, b, c, d) {
			return this.m.Request("customers/" + a + "/addresses", "GET", b, c, d);
		}, a.prototype.Create = function (a, b, c, d) {
			return this.m.Request("customers/" + a + "/addresses", "POST", b, c, d);
		}, a.prototype.Fields = function (a, b, c, d) {
			var e;return null == a && (a = 0), null == b && (b = 0), e = a > 0 && b <= 0 ? "customers/" + a + "/addresses/fields" : a > 0 && b > 0 ? "customers/" + a + "/addresses/" + b + "/fields" : "addresses/fields", this.m.Request(e, "GET", null, c, d);
		}, a;
	}(), d = function (a) {
		function b() {
			return b.__super__.constructor.apply(this, arguments);
		}return __extends(b, a), b.prototype.endpoint = "brands", b;
	}(b), e = function () {
		function a(a) {
			this.m = a, this.cartId = this.Identifier();
		}return a.prototype.Identifier = function (a, b) {
			return null == a && (a = !1), null == b && (b = !1), a || b || null === this.m.Storage.get("mcart") ? (b || (b = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g, function (a) {
				return (16 * Math.random() | 0).toString(16);
			})), this.m.Storage.set("mcart", b), this.cartId = b, b) : this.m.Storage.get("mcart");
		}, a.prototype.Contents = function (a, b) {
			return this.m.Request("carts/" + this.cartId, "GET", null, a, b);
		}, a.prototype.Insert = function (a, b, c, d, e) {
			return null == b && (b = 1), null == c && (c = null), this.m.Request("carts/" + this.cartId, "POST", { id: a, quantity: b, modifier: c }, d, e);
		}, a.prototype.Update = function (a, b, c, d) {
			return this.m.Request("carts/" + this.cartId + "/item/" + a, "PUT", b, c, d);
		}, a.prototype.Delete = function (a, b) {
			return this.m.Request("carts/" + this.cartId, "DELETE", null, a, b);
		}, a.prototype.Remove = function (a, b, c) {
			return this.m.Request("carts/" + this.cartId + "/item/" + a, "DELETE", null, b, c);
		}, a.prototype.Item = function (a, b, c) {
			return this.m.Request("carts/" + this.cartId + "/item/" + a, "GET", null, b, c);
		}, a.prototype.InCart = function (a, b, c) {
			return this.m.Request("carts/" + this.cartId + "/has/" + a, "GET", null, b, c);
		}, a.prototype.Checkout = function (a, b) {
			return this.m.Request("carts/" + this.cartId + "/checkout", "GET", null, a, b);
		}, a.prototype.Complete = function (a, b, c) {
			return this.m.Request("carts/" + this.cartId + "/checkout", "POST", a, b, c);
		}, a.prototype.Discount = function (a, b, c) {
			return null === a || a === !1 ? this.m.Request("carts/" + this.cartId + "/discount", "DELETE", null, b, c) : this.m.Request("carts/" + this.cartId + "/discount", "POST", { code: a }, b, c);
		}, a;
	}(), f = function (a) {
		function b() {
			return b.__super__.constructor.apply(this, arguments);
		}return __extends(b, a), b.prototype.endpoint = "categories", b.prototype.Tree = function (a, b, c) {
			return this.m.Request(this.endpoint + "/tree", "GET", a, b, c);
		}, b;
	}(b), g = function () {
		function a(a) {
			this.m = a;
		}return a.prototype.Payment = function (a, b, c, d, e) {
			return this.m.Request("checkout/payment/" + a + "/" + b, "POST", c, d, e);
		}, a;
	}(), h = function (a) {
		function b() {
			return b.__super__.constructor.apply(this, arguments);
		}return __extends(b, a), b.prototype.endpoint = "collections", b;
	}(b), i = function (a) {
		function b() {
			return b.__super__.constructor.apply(this, arguments);
		}return __extends(b, a), b.prototype.endpoint = "currencies", b.prototype.Set = function (a, b, c) {
			if (this.m.Storage.set("mcurrency", a), this.m.options.currency = a, "function" == typeof b) return b(a);
		}, b;
	}(b), j = function () {
		function a(a) {
			this.m = a;
		}return a.prototype.Get = function (a, b, c, d) {
			return this.m.Request("flows/" + a + "/entries/" + b, "GET", null, c, d);
		}, a.prototype.Find = function (a, b, c, d) {
			return this.m.Request("flows/" + a + "/entries/search", "GET", b, c, d);
		}, a.prototype.List = function (a, b, c, d) {
			return this.m.Request("flows/" + a + "/entries", "GET", b, c, d);
		}, a;
	}(), k = function () {
		function a(a) {
			this.m = a;
		}return a.prototype.Get = function (a, b, c) {
			return this.m.Request("gateways/" + a, "GET", null, b, c);
		}, a.prototype.List = function (a, b, c) {
			return this.m.Request("gateways", "GET", a, b, c);
		}, a;
	}(), l = function () {
		function a(a) {
			this.m = a;
		}return a.prototype.Set = function (a, b, c) {
			if (this.m.Storage.set("mlanguage", a), this.m.options.language = a, "function" == typeof b) return b(a);
		}, a;
	}(), m = function (a) {
		function b(a) {
			this.m = a;
		}return __extends(b, a), b.prototype.endpoint = "orders", b;
	}(b), n = function (a) {
		function b() {
			return b.__super__.constructor.apply(this, arguments);
		}return __extends(b, a), b.prototype.endpoint = "products", b.prototype.Search = function (a, b, c) {
			return this.m.Request(this.endpoint + "/search", "GET", a, b, c);
		}, b.prototype.Modifiers = function (a, b, c) {
			return this.m.Request(this.endpoint + "/" + a + "/modifiers", "GET", null, b, c);
		}, b.prototype.Variations = function (a, b, c) {
			return this.m.Request(this.endpoint + "/" + a + "/variations", "GET", null, b, c);
		}, b;
	}(b), o = function (a) {
		function b() {
			return b.__super__.constructor.apply(this, arguments);
		}return __extends(b, a), b.prototype.endpoint = "shipping", b;
	}(b), q = function (a) {
		function b() {
			return b.__super__.constructor.apply(this, arguments);
		}return __extends(b, a), b.prototype.endpoint = "taxes", b;
	}(b), a;
}();
//# sourceMappingURL=moltin.min.map
0;
angular.module('templates-main', ['/pages/brand.html', '/pages/cart.html', '/pages/category.html', '/pages/checkout.html', '/pages/collection.html', '/pages/collections.html', '/pages/complete.html', '/pages/error.html', '/pages/home.html', '/pages/page.html', '/pages/payment.html', '/pages/product.html', '/pages/search.html', '/pages/partials/image-zoom.html']);

angular.module("/pages/brand.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/brand.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>{{ brand.title }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>{{ brand.title }}</h2></div></div></div><div class=\"row box collection\"><div class=col-md-7><p>{{ brand.description }}</p></div><div class=col-md-5><img alt=\"{{ brand.title }}\" ng-src=\"{{ brand.image.url.http }}\"></div></div><div class=row><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> &pound;{{ product.sale_price }}.00</p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div><div class=row><div class=col-md-12><pagination total-items=pagination.total items-per-page=pagination.limit page=pageCurrent class=\"pagination pull-right\" previous-text=&lsaquo; next-text=&rsaquo;></pagination></div></div>");
}]);

angular.module("/pages/cart.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/cart.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>Shopping Cart</li></ul></div></div></div><div class=row><div class=col-md-12><h2>Shopping Cart</h2></div></div><div class=row><div class=col-md-12><div class=cart-info><table class=table><thead><tr><th class=image>Image</th><th>Product</th><th>Model</th><th>Price</th><th>Quantity</th><th class=total>Total</th></tr></thead><tbody><tr ng-repeat=\"(key,product) in cart.contents\"><td class=image><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 100, 100) }}\"></td><td class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></td><td>{{ product.sku }}</td><td>{{ product.pricing.formatted.with_tax }}</td><td class=quantity><input type=text size=1 value=\"{{ product.quantity }}\" id=\"c_{{ key }}\" name=\"qty[{{ key }}]\"> <input type=image title=Update alt=Update src=/img/update.png ng-id=\"{{ key }}\" ng-qty=\"#c_{{ key }}\" cart-qty> <input type=image title=Remove alt=Remove src=/img/remove.png ng-id=\"{{ key }}\" ng-qty=0 cart-qty></td><td class=total>{{ product.totals.pre_discount.formatted.with_tax }}</td></tr></tbody></table></div></div></div><div class=row><div class=col-sm-8><div class=\"newsletter clearfix\"><div><input type=text name=discount class=discount placeholder=\"Discount code...\"> <button value=apply class=\"btn btn-primary\">Apply</button> <button value=remove class=\"btn btn-primary\">Remove</button></div></div></div><div class=col-sm-4><div class=cart-totals><table class=table><tr><th>Cart Subtotal</th><td>{{ cart.totals.pre_discount.formatted.without_tax }}</td></tr><tr><th>Shipping</th><td>Free Shipping</td></tr><tr><th><span>Order Total</span></th><td>{{ cart.totals.pre_discount.formatted.with_tax }}</td></tr></table><p><a class=\"btn btn-primary\" href=/checkout>Proceed to Checkout</a></p></div></div></div>");
}]);

angular.module("/pages/category.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/category.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li ng-if=category.parent.data.parent><a href=\"/category/{{ category.parent.data.parent.data.slug }}\">{{ category.parent.data.parent.data.title }}</a> <span class=divider></span></li><li ng-if=category.parent><a href=\"/category/{{ category.parent.data.slug }}\">{{ category.parent.data.title }}</a> <span class=divider></span></li><li class=active>{{ category.title }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>{{ category.title }}</h2></div></div></div><div class=row><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> &pound;{{ product.sale_price }}.00</p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div><div class=row><div class=col-md-12><pagination total-items=pagination.total items-per-page=pagination.limit page=pageCurrent class=\"pagination pull-right\" previous-text=&lsaquo; next-text=&rsaquo;></pagination></div></div>");
}]);

angular.module("/pages/checkout.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/checkout.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li><a href=/cart>Shopping Cart</a> <span class=divider></span></li><li class=active>Checkout</li></ul></div></div></div><div class=row><div class=col-md-12><h2>Checkout</h2></div></div><form class=form-horizontal role=form ng-submit=createOrder(data)><div class=\"row box\"><div class=col-md-6><h3>Billing Address</h3><div class=billing-address><div class=form-group ng-repeat=\"field in fields\" ng-if=\"field.slug != 'customer'\"><label class=\"col-md-4 control-label\" for=\"bill_{{ field.slug }}\">{{ field.name }}<span class=required ng-if=field.required>*</span></label><div class=col-md-8 ng-switch on=field.type><select name=\"bill_{{ field.slug }}\" class=form-control ng-options=\"k as v for (k, v) in field.available\" ng-model=data.bill[field.slug] ng-switch-when=country></select><input type=text id=\"bill_{{ field.slug }}\" ng-model=data.bill[field.slug] class=form-control placeholder=\"{{ field.name }}\" ng-switch-default></div></div></div></div><div class=col-md-6><div class=\"shiptobilling clearfix\"><h3>Shipping Address</h3><label class=checkbox><input type=checkbox value=1 ng-model=data.ship_bill onclick=\"jQuery('.shipping-address').toggle()\">Ship to billing address?</label></div><div class=shipping-address style=\"display: block\"><div class=form-group ng-repeat=\"field in fields\" ng-if=\"field.slug != 'customer'\"><label class=\"col-md-4 control-label\" for=\"ship_{{ field.slug }}\">{{ field.name }} <span class=required ng-if=field.required>*</span></label><div class=col-md-8 ng-switch on=field.type><select name=\"ship_{{ field.slug }}\" class=form-control ng-options=\"k as v for (k, v) in field.available\" ng-model=data.ship[field.slug] ng-switch-when=country></select><input type=text id=\"ship_{{ field.slug }}\" ng-model=data.ship[field.slug] class=form-control placeholder=\"{{ field.name }}\" ng-switch-default></div></div></div></div></div><div class=row><div class=col-md-12><div class=your_order><h3>Your Order</h3><table class=\"table table-bordered table-responsive\"><thead><tr><th>Product</th><th>Qty</th><th>Totals</th></tr></thead><tfoot><tr class=subtotal><td></td><td><b>Cart Subtotal</b></td><td>{{ cart.totals.formatted.without_tax }}</td></tr><tr class=subtotal><td></td><td><b>Order Total</b></td><td>{{ cart.totals.formatted.with_tax }}</td></tr></tfoot><tbody><tr ng-repeat=\"(key,product) in cart.contents\"><td><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></td><td>{{ product.quantity }}</td><td>{{ product.totals.formatted.with_tax }}</td></tr></tbody></table><div class=row style=\"margin-bottom: 20px\" ng-if=options.shipping.methods.length><h3>Shipping</h3><div class=\"row box\"><div class=carrier ng-repeat=\"carrier in options.shipping.methods\"><label class=radio><input type=radio name=carrier value=\"{{ carrier.slug }}\" ng-model=data.shipping checked> {{ carrier.name }}</label><div class=\"carrier-{{ carrier.slug }}\">{{ carrier.description }}</div></div></div></div></div></div></div><div class=row><div class=col-md-12><h3>Payment</h3></div><div class=col-md-4 ng-repeat=\"gateway in options.gateways\"><div class=\"box padding\"><label class=radio><input type=radio name=gateway value=\"{{ gateway.slug }}\" ng-model=data.gateway checked> {{ gateway.name }}</label><div class=\"gateway gateway-{{ gateway.slug }}\">{{ gateway.description }}</div></div></div></div><button class=\"btn btn-primary pull-right\" type=submit style=\"margin: 20px 0\">Proceed to Payment</button></form>");
}]);

angular.module("/pages/collection.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/collection.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li><a href=/collections>Collections</a> <span class=divider></span></li><li class=active>{{ collection.title }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>{{ collection.title }}</h2></div></div></div><div class=\"row box collection\"><div class=col-md-5><img alt=\"{{ collection.title }}\" ng-src=\"{{ collection.image.url.http }}\"></div><div class=col-md-7><p>{{ collection.description }}</p></div></div><div class=row><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ product.image.url.http }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> &pound;{{ product.sale_price }}.00</p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div><div class=row><div class=col-md-12><pagination total-items=pagination.total items-per-page=pagination.limit page=pageCurrent class=\"pagination pull-right\" previous-text=&lsaquo; next-text=&rsaquo;></pagination></div></div>");
}]);

angular.module("/pages/collections.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/collections.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>Collections</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>Collections</h2></div></div></div><div class=\"row box collection\" ng-repeat=\"collection in collections\"><div class=col-md-5 ng-if=$even><img alt=\"{{ collection.title }}\" ng-src=\"{{ collection.image.url.http }}\"></div><div class=col-md-7><a href=\"/collection/{{ collection.slug }}\" class=cat_header><h2>{{ collection.title }}</h2></a><p>{{ collection.description }}</p></div><div class=col-md-5 ng-if=$odd><img alt=\"{{ collection.title }}\" ng-src=\"{{ collection.image.url.http }}\"></div></div>");
}]);

angular.module("/pages/complete.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/complete.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li><a href=/ >Shopping Cart</a> <span class=divider></span></li><li><a href=/ >Checkout</a> <span class=divider></span></li><li><a href=/ >Payment</a> <span class=divider></span></li><li class=active>{{ title }}</li></ul></div></div></div><div class=row><div class=col-md-12><h2>{{ title }}</h2></div></div><div class=row style=\"margin-bottom: 20px\"><div class=col-md-6><div class=loginbox><p>Billing Address</p><ul><li>{{ payment.order.bill_to.data.first_name }} {{ payment.order.bill_to.data.last_name }}</li><li ng-if=payment.order.bill_to.data.company>{{ payment.order.bill_to.data.company }}</li><li>{{ payment.order.bill_to.data.address_1 }}</li><li>{{ payment.order.bill_to.data.address_2 }}</li><li>{{ payment.order.bill_to.data.county }}</li><li>{{ payment.order.bill_to.data.postcode }}</li><li>{{ payment.order.bill_to.data.country.value }}</li></ul></div></div><div class=col-md-6><div class=loginbox><p>Shipping Address</p><ul><li>{{ payment.order.ship_to.data.first_name }} {{ payment.order.ship_to.data.last_name }}</li><li ng-if=payment.order.ship_to.data.company>{{ payment.order.ship_to.data.company }}</li><li>{{ payment.order.ship_to.data.address_1 }}</li><li>{{ payment.order.ship_to.data.address_2 }}</li><li>{{ payment.order.ship_to.data.county }}</li><li>{{ payment.order.ship_to.data.postcode }}</li><li>{{ payment.order.ship_to.data.country.value }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=your_order><table class=\"table table-bordered table-responsive\"><thead><tr><th>Product</th><th>Qty</th><th>Totals</th></tr></thead><tfoot><tr class=subtotal><td></td><td><b>Cart Subtotal</b></td><td>{{ cart.totals.formatted.without_tax }}</td></tr><tr class=subtotal><td></td><td><b>Order Total</b></td><td>{{ cart.totals.formatted.with_tax }}</td></tr></tfoot><tbody><tr ng-repeat=\"(key,product) in cart.contents\"><td><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></td><td>{{ product.quantity }}</td><td>{{ product.totals.formatted.with_tax }}</td></tr></tbody></table></div></div></div>");
}]);

angular.module("/pages/error.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/error.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>{{ message.title }}</li></ul></div></div></div><div class=\"row bp\"><div class=col-md-12><h2>{{ message.title }}</h2></div></div><div class=\"row box padding\"><div class=col-md-6><h1 class=e404><strong>[{{ message.type }}]</strong></h1></div><div class=col-md-6><h1 class=page>{{ message.title }}</h1><h6 class=e404>{{ message.msg }}</h6><p><a class=\"btn btn-primary\" href=/ >Take me to the homepage!</a></p></div></div>");
}]);

angular.module("/pages/home.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/home.html", "<div class=row><div class=\"col-md-12 slideshow\"><div><img src=img/slideshow/sub.jpg alt=\"Banner 1\"></div></div></div><div class=row><div class=\"col-md-3 left-menu\"><div><h3><a href=/collections>Collections</a></h3><ul><li ng-repeat=\"collection in collections\"><a href=\"/collection/{{ collection.slug }}\">{{ collection.title }}</a></li></ul></div><div class=options><select ng-options=\"cur.code as cur.title for cur in currencies\" ng-model=currency ng-change=Page.currencySet(currency)></select></div></div><div class=col-md-9><div class=row><div class=col-md-4 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> <strong>&pound;{{ product.sale_price }}.00</strong></p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p><strong>{{ product.pricing.formatted.with_tax }}</strong></p></div></div></div></div><div class=row><div class=col-md-12><div class=\"newsletter clearfix\"><h3>Newsletter</h3><div><input type=text name=email class=email> <input type=submit value=Subscribe class=\"btn btn-primary\"></div></div></div></div></div></div>");
}]);

angular.module("/pages/page.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/page.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>{{ content.title }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>{{ content.title }}</h2></div></div></div><div class=\"row page-content\"><div class=\"col-md-3 left-menu\"><div><h3>Pages</h3><ul><li ng-repeat=\"page in pages\" ng-if=\"page.sidebar.data.key == '1'\"><a href=\"/{{ page.slug }}\">{{ page.title }}</a></li></ul></div></div><div class=col-md-9><div class=\"row registerbox\"><div class=col-md-9><p class=text_about ng-bind-html=content.intro></p></div></div><div class=row><div class=col-md-9 ng-bind-html=content.contents></div></div></div></div>");
}]);

angular.module("/pages/payment.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/payment.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li><a href=/cart>Shopping Cart</a> <span class=divider></span></li><li><a href=/checkout>Checkout</a> <span class=divider></span></li><li class=active>Payment</li></ul></div></div></div><div class=row><div class=col-md-12><h2>Payment</h2></div></div><div class=row><div class=col-md-3><div class=loginbox><p>Billing Address</p><ul><li>{{ order.bill_to.data.first_name }} {{ order.bill_to.data.last_name }}</li><li ng-if=order.bill_to.data.company>{{ order.bill_to.data.company }}</li><li>{{ order.bill_to.data.address_1 }}</li><li>{{ order.bill_to.data.address_2 }}</li><li>{{ order.bill_to.data.county }}</li><li>{{ order.bill_to.data.postcode }}</li><li>{{ order.bill_to.data.country.value }}</li></ul></div></div><div class=col-md-3><div class=loginbox><p>Shipping Address</p><ul><li>{{ order.ship_to.data.first_name }} {{ order.ship_to.data.last_name }}</li><li ng-if=order.ship_to.data.company>{{ order.ship_to.data.company }}</li><li>{{ order.ship_to.data.address_1 }}</li><li>{{ order.ship_to.data.address_2 }}</li><li>{{ order.ship_to.data.county }}</li><li>{{ order.ship_to.data.postcode }}</li><li>{{ order.ship_to.data.country.value }}</li></ul></div></div><div class=col-md-6><form class=\"loginbox form-horizontal\"><p>Payment</p><div class=form-group><label class=\"control-label col-md-4\" for=card>Card Number <span class=required>*</span></label><div class=col-md-8><input class=form-control id=card ng-model=data.number type=text card-format></div></div><div class=form-group><label class=\"control-label col-md-4\" for=expiry_month>Expiry Date <span class=required>*</span></label><div class=col-md-4><input class=form-control id=expiry_month ng-model=data.expiry_month type=text placeholder=DD></div><div class=col-md-4><input class=form-control id=expiry_year ng-model=data.expiry_year type=text placeholder=YYYY></div></div><div class=form-group><label class=\"control-label col-md-4\" for=start_month>Start Date</label><div class=col-md-4><input class=form-control id=start_month ng-model=data.start_month type=text placeholder=DD></div><div class=col-md-4><input class=form-control id=start_year ng-model=data.start_year type=text placeholder=YYYY></div></div><div class=form-group><label class=\"control-label col-md-4\" for=cv2>CV2 <span class=required>*</span></label><div class=col-md-4><input class=form-control id=cv2 ng-model=data.cvv type=text></div></div><div class=form-group><div class=col-md-12><button class=\"btn btn-primary\" type=button ng-click=payment(data)>Pay</button></div></div></form></div></div>");
}]);

angular.module("/pages/product.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/product.html", "<ul class=\"breadcrumb prod\"><li><a href=/ >Home</a> <span class=divider></span></li><li ng-if=product.category.parent.data.parent><a href=\"/category/{{ product.category.parent.data.parent.data.slug }}\">{{ product.category.parent.data.parent.data.title }}</a> <span class=divider></span></li><li ng-if=product.category.parent><a href=\"/category/{{ product.category.parent.data.slug }}\">{{ product.category.parent.data.title }}</a> <span class=divider></span></li><li><a href=\"/category/{{ product.category.slug }}\">{{ product.category.title }}</a> <span class=divider></span></li><li class=active>{{ product.title }}</li></ul><div class=\"row product-info\"><div class=col-md-6><div class=image image-src=\"{{ product.image.url.http }}\" image-zoom></div><div class=image-additional><a ng-repeat=\"image in product.images\" class=cloud-zoom-gallery ng-click=switchImage(image.url.http)><img alt=Image ng-src=\"{{ Page.image.resize(image, 74, 74) }}\"></a></div></div><div class=col-md-6><h1>{{ product.title }}</h1><div class=line></div><ul><li ng-if=product.brand><span>Brand:</span> <a href=\"/brand/{{ product.brand.slug }}\">{{ product.brand.title }}</a></li><li><span>Product Code:</span> {{ product.sku }}</li><li><span>Availability: </span>{{ product.stock_status.value }}</li><li ng-if=product.collection><span>Collection: </span><a href=\"/collection/{{ product.collection.data.slug }}\">{{ product.collection.data.title }}</a></li><li ng-if=product.brand><span>Brand: </span><a href=\"/brand/{{ product.brand.data.slug }}\">{{ product.brand.data.title }}</a></li></ul><div class=price ng-if=\"product.on_sale.data.key == 1\">Price <span class=strike>{{ product.pricing.formatted.with_tax }}</span> <strong>&pound;{{ product.sale_price }}.00</strong></div><div class=price ng-if=\"product.on_sale.data.key != 1\">Price <strong>{{ product.pricing.formatted.with_tax }}</strong></div><div id=modifiers><select ng-repeat=\"modifier in modifiers\" ng-if=\"modifier.type.data.key == 'variant'\" ng-model=mods[modifier.id] name=\"modifier[{{ modifier.id }}]\" title=\"{{ modifier.title }}\" ng-mod=\"{{ modifier.id }}\"><option value=0>{{ modifier.title }}</option><option value=\"{{ variation.id }}\" ng-repeat=\"variation in modifier.variations\">{{ variation.title }}</option></select></div><div class=line></div><form class=\"form-inline product-add\"><button ng-id=\"{{ product.id }}\" ng-qty=#qty ng-mod=#modifiers class=\"btn btn-primary\" cart-insert>Add to Cart</button><label>Qty:</label><input type=text placeholder=1 id=qty class=col-md-1></form><div class=tabs><ul class=\"nav nav-tabs\" id=myTab><li class=active><a href=#description>Description</a></li></ul><div class=tab-content><div class=\"tab-pane active\" id=home>{{ product.description }}</div></div></div></div></div><div class=related ng-if=products><h3 class=related>Related products</h3><div class=row><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div></div>");
}]);

angular.module("/pages/search.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/search.html", "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>Search</li></ul></div></div></div><div class=row><div class=col-md-12><h2>Search</h2></div></div><div class=\"row box search\"><div class=col-md-12><form class=form-horizontal ng-submit=Page.search(term)><div class=col-md-10><input type=text placeholder=Search ng-model=term class=form-control></div><div class=col-md-2><button class=\"btn btn-primary pull-right\" type=submit>Search</button></div></form></div></div><div class=row ng-if=products><div class=col-md-12><h2 class=search-criteria>Products matching \"{{ search }}\"</h2></div></div><div class=row ng-if=products><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> &pound;{{ product.sale_price }}.00</p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div><div class=row ng-if=!products.length><div class=col-md-12><div class=\"alert alert-info\">No products found matching your search criteria</div></div></div>");
}]);

angular.module("/pages/partials/image-zoom.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("/pages/partials/image-zoom.html", "<div class=image-zoom><div class=image-zoom-lens data-ng-style=getLensStyle()></div><img class=image ng-src=\"{{ imageSrc }}\"></div>");
}]);
;
////////////////////////////////////////
//// ANGULAR COMMERCE APP ////
////////////////////////////////////////

// Start the app
var app = angular.module('store', ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'templates-main', 'ImageZoom']);

// Config
app.value('siteName', 'AngularCommerce');
app.value('publicKey', 'umRG34nxZVGIuCSPfYf8biBSvtABgTR8GMUtflyE');

// Set routes & page definitions
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$routeProvider.when('/', {
		templateUrl: '/pages/home.html',
		controller: 'homeController'
	}).when('/category/:slug', {
		templateUrl: '/pages/category.html',
		controller: 'categoryController'
	}).when('/collections', {
		templateUrl: '/pages/collections.html',
		controller: 'collectionsController'
	}).when('/collection/:slug', {
		templateUrl: '/pages/collection.html',
		controller: 'collectionController'
	}).when('/brand/:slug', {
		templateUrl: '/pages/brand.html',
		controller: 'brandController'
	}).when('/product/:slug', {
		templateUrl: '/pages/product.html',
		controller: 'productController'
	}).when('/search/:term?', {
		templateUrl: '/pages/search.html',
		controller: 'searchController'
	}).when('/cart', {
		templateUrl: '/pages/cart.html',
		controller: 'cartController'
	}).when('/checkout/payment', {
		templateUrl: '/pages/payment.html',
		controller: 'paymentController'
	}).when('/checkout/:status', {
		templateUrl: '/pages/complete.html',
		controller: 'completeController'
	}).when('/checkout', {
		templateUrl: '/pages/checkout.html',
		controller: 'checkoutController'
	}).when('/error', {
		templateUrl: '/pages/error.html',
		controller: 'errorController'
	}).when('/:page*', {
		templateUrl: '/pages/page.html',
		controller: 'pageController'
	});

	return null;
}]);
;
//////////////////////////
//// FACTORY ////
//////////////////////////

// Moltin class injection and authentication
app.factory('Moltin', ['$rootScope', '$location', 'publicKey', function ($rootScope, $location, publicKey) {

	// Start SDK
	var moltin = new Moltin({
		publicId: publicKey,
		notice: function notice(type, msg, code) {
			if (code === '404') {
				$rootScope.error = code;
				$location.path('/error');
			} else {
				$rootScope.notices = [];
				type = type === 'error' ? 'danger' : type;
				if (typeof msg === 'string') {
					$rootScope.notices.push({ type: type, msg: msg });
				} else {
					for (var e in msg) {
						var p = msg[e];
						var data = '';
						if (typeof p === 'string') {
							data = p;
						} else {
							for (var k in p) {
								var v = p[k];data += v + '<br />';
							}
						}
						console.log(data);
						$rootScope.notices.push({ type: type, msg: data });
					}
				}
			}

			return $rootScope.$apply();
		}
	});

	// Authenticate
	return moltin.Authenticate();
}]);

// Page actions
app.factory('Page', ['$rootScope', '$location', 'Moltin', 'siteName', function ($rootScope, $location, Moltin, siteName) {

	// Variables
	$rootScope.siteName = siteName;
	$rootScope.title = 'Home';
	$rootScope.notices = [];
	$rootScope.term = '';
	$rootScope.loader = { todo: 0, done: 0 };
	$rootScope.cache = { product: {}, category: {} };

	// Clear notices on page change
	$rootScope.$on('$routeChangeStart', function (next, current) {
		return $rootScope.notices = [];
	});

	// First item
	var first = function first(obj) {
		return obj[Object.keys(obj)[0]];
	};

	return {
		titleSet: function titleSet(newTitle) {
			return $rootScope.title = newTitle;
		},
		currencySet: function currencySet(currency) {
			return Moltin.Currency.Set(currency, function (data) {
				return window.location.reload();
			});
		},
		search: function search(term) {
			return $location.path("/search/" + term);
		},


		image: {
			resize: function resize(image, h, w, type) {

				if (type == null) {
					type = 'fit';
				}
				return "http://" + image.segments.domain + "/w" + w + "/h" + h + "/" + (type !== '' ? type + '/' : '') + image.segments.suffix;
			}
		},

		notice: {
			set: function set(type, msg) {
				return $rootScope.notices.push({ type: type, msg: msg });
			},
			dismiss: function dismiss(key) {
				return $rootScope.notices.splice(key, 1);
			}
		},

		loader: {
			set: function set(num) {
				$rootScope.loader = { todo: num, done: 0 };

				return setTimeout(function () {
					return $rootScope.loader = { todo: 0, done: 0 };
				}, 3000);
			},
			update: function update() {
				return $rootScope.loader.done++;
			}
		},

		format: {
			category: function category(_category) {
				_category.image = Object.keys(_category.images).length > 0 ? first(_category.images) : { url: { http: '/img/no-img.jpg', https: '/img/no-img.jpg' } };

				$rootScope.cache.category[_category.slug] = _category;

				return _category;
			},
			collection: function collection(_collection) {
				_collection.image = Object.keys(_collection.images).length > 0 ? first(_collection.images) : { url: { http: '/img/no-img.jpg', https: '/img/no-img.jpg' } };
				return _collection;
			},
			product: function product(_product) {
				_product.category = first(_product.category.data);
				_product.image = Object.keys(_product.images).length > 0 ? first(_product.images) : { url: { http: '/img/no-img.jpg', https: '/img/no-img.jpg' } };

				$rootScope.cache.product[_product.slug] = _product;

				return _product;
			}
		}

	};
}]);
;
//////////////////////////////
//// DIRECTIVE ////
//////////////////////////////

// Homepage slider
app.directive('slideshow', function () {
	return function (scope, el, attrs) {
		return $(el).camera({
			imagePath: '/img/slideshow/' });
	};
});

// Card formatting
app.directive('cardFormat', function () {
	return function (scope, el, attrs) {
		return el.bind('keyup focus blur', function () {
			return $(this).val(function (i, v) {
				v = v.replace(/[^\d]/g, '').match(/.{1,4}/g);
				return (v ? v.join(' ') : '').substr(0, 19);
			});
		});
	};
});

// Cart insertion
app.directive('cartInsert', ['$rootScope', 'Moltin', 'Page', function ($rootScope, Moltin, Page) {
	return function (scope, el, attrs) {
		return el.bind('click', function () {

			// Variables
			var id = attrs.ngId; // Product ID
			var qty = 1; // Quantity to insert
			var mod = {}; // Modifiers
			var ex = false; // Exit?

			// Quantity
			if (typeof attrs.ngQty !== 'undefined') {

				if (isNaN(attrs.ngQty)) {
					qty = $(attrs.ngQty).val() > 0 ? $(attrs.ngQty).val() : 1;
				} else {
					qty = attrs.ngQty;
				}
			}

			// Modifiers
			if (typeof attrs.ngMod !== 'undefined') {

				// Clear notices
				$rootScope.notices = [];

				// Loop modifier selects
				$(attrs.ngMod + ' select').each(function () {

					// Check values
					if ($(this).val() <= 0) {
						Page.notice.set('warning', "Please select a " + $(this).attr('title') + " option before adding to cart");
						ex = true;
						return null;
					}

					// Add to data
					return mod[$(this).attr('ng-mod')] = $(this).val();
				});
			}

			// Check for errors
			if (ex) {
				return null;
			}

			// Add to cart
			return Moltin.Cart.Insert(id, qty, mod, function (response) {
				return (

					// Get updated contents
					Moltin.Cart.Contents(function (cart) {

						// Format products
						for (var k in cart.contents) {
							var v = cart.contents[k];
							cart.contents[k] = Page.format.product(v);
						}

						// Animate
						$("html, body").animate({ scrollTop: 0 }, 150);
						$('.navbar-right > .cart').addClass('added');
						setTimeout(function () {
							return $('.navbar-right > .cart').removeClass('added');
						}, 1000);

						// Apply data
						$rootScope.cart = cart;
						return $rootScope.$apply();
					})
				);
			});
		});
	};
}]);

// Cart update and removal
app.directive('cartQty', ['$rootScope', 'Moltin', 'Page', function ($rootScope, Moltin, Page) {
	return function (scope, el, attrs) {
		return el.bind('click', function () {

			// Variables
			var id = attrs.ngId; // Product ID
			var qty = 1; // Quantity to update

			// Quantity
			if (typeof attrs.ngQty !== 'undefined') {

				if (isNaN(attrs.ngQty)) {
					qty = $(attrs.ngQty).val() > 0 ? $(attrs.ngQty).val() : 1;
				} else {
					qty = attrs.ngQty;
				}
			}

			// Add to cart
			return Moltin.Cart.Update(id, { quantity: qty }, function (response) {
				return (

					// Get updated contents
					Moltin.Cart.Contents(function (cart) {

						// Format products
						for (var k in cart.contents) {
							var v = cart.contents[k];
							cart.contents[k] = Page.format.product(v);
						}

						// Apply data
						$rootScope.cart = cart;
						return $rootScope.$apply();
					})
				);
			});
		});
	};
}]);
;
//////////////////////
//// BRAND ////
//////////////////////

app.controller('brandController', ['$scope', '$routeParams', 'Moltin', 'Page', function ($scope, $routeParams, Moltin, Page) {

	// Variables
	$scope.pageCurrent = 0;
	$scope.pagination = { total: 0, limit: 12, offset: 0 };
	Page.loader.set(2);

	// Page change
	$scope.$watch('pageCurrent', function (n, o) {

		if ($scope.brand) {
			Page.loader.set(1);
			return $scope.pageChange(n);
		}
	});

	// Pagination change
	$scope.pageChange = function (page) {

		// Change offset
		$scope.pagination.offset = page > 1 ? (page - 1) * $scope.pagination.limit : 0;

		// Get products
		return Moltin.Product.List({ brand: $scope.brand.id, status: 1, limit: $scope.pagination.limit, offset: $scope.pagination.offset }, function (products, pagination) {

			// Check products
			if (products.length <= 0) {
				Page.notice.set('info', "No products found in \"" + $scope.brand.title + "\"");

				// Format products
			} else {
				for (var k in products) {
					var v = products[k];
					products[k] = Page.format.product(v);
				}
			}

			// Assign data
			$scope.products = products;
			$scope.pagination = pagination;
			Page.loader.update();
			return $scope.$apply();
		});
	};

	// Get the category
	Moltin.Brand.Find({ slug: $routeParams.slug, status: 1 }, function (brand) {

		// Page options
		Page.titleSet(brand.title);

		// Assign data
		$scope.brand = brand;
		Page.loader.update();
		$scope.$apply();
		return $scope.pageChange(1);
	});

	return null;
}]);
;
////////////////////
//// CART ////
////////////////////

app.controller('cartController', ['$scope', 'Moltin', 'Page', function ($scope, Moltin, Page) {

	// Page setup
	Page.titleSet('Shopping Cart');

	return null;
}]);
;
////////////////////////////
//// CATEGORY ////
////////////////////////////

app.controller('categoryController', ['$scope', '$routeParams', 'Moltin', 'Page', function ($scope, $routeParams, Moltin, Page) {

	// Variables
	$scope.pageCurrent = 0;
	$scope.pagination = { total: 0, limit: 12, offset: 0 };
	Page.loader.set(2);

	// Page change
	$scope.$watch('pageCurrent', function (n, o) {

		if ($scope.category) {
			Page.loader.set(1);
			return $scope.pageChange(n);
		}
	});

	// Pagination change
	$scope.pageChange = function (page) {

		// Change offset
		$scope.pagination.offset = page > 1 ? (page - 1) * $scope.pagination.limit : 0;

		// Get products
		return Moltin.Product.List({ category: $scope.category.id, status: 1, limit: $scope.pagination.limit, offset: $scope.pagination.offset }, function (products, pagination) {

			// Check products
			if (products.length <= 0) {
				Page.notice.set('info', "No products found in \"" + $scope.category.title + "\"");

				// Format products
			} else {
				for (var k in products) {
					var v = products[k];
					products[k] = Page.format.product(v);
				}
			}

			// Assign data
			$scope.products = products;
			$scope.pagination = pagination;
			Page.loader.update();
			return $scope.$apply();
		});
	};

	// Get the category
	Moltin.Category.Find({ slug: $routeParams.slug, status: 1 }, function (category) {

		// Page options
		Page.titleSet(category.title);

		// Assign data
		$scope.category = category;
		Page.loader.update();
		$scope.$apply();
		return $scope.pageChange(1);
	});

	return null;
}]);
;
////////////////////////////
//// CHECKOUT ////
////////////////////////////

app.controller('checkoutController', ['$scope', '$routeParams', '$rootScope', '$location', 'Moltin', 'Page', function ($scope, $routeParams, $rootScope, $location, Moltin, Page) {

	// Page setup
	Page.titleSet('Checkout');
	$scope.customer = 919;
	$scope.data = { bill: {}, ship: {}, ship_bill: 0, notes: '', shipping: '', gateway: '' };
	Page.loader.set(2);

	// Create order
	$scope.createOrder = function (data) {

		// Format
		$scope.data.bill.customer = $scope.customer;
		$scope.data.ship.customer = $scope.customer;

		console.log($scope.data);

		// Create order
		return Moltin.Cart.Complete({
			customer: $scope.customer,
			gateway: $scope.data.gateway,
			shipping: $scope.data.shipping,
			bill_to: $scope.data.bill,
			ship_to: $scope.data.ship_bill ? 'bill_to' : $scope.data.ship
		}, function (response) {

			$rootScope.order = response;

			$rootScope.$apply(function () {
				return $location.path('/checkout/payment');
			});

			return null;
		});
	};

	// Get checkout options
	Moltin.Cart.Checkout(function (options) {

		// Assign data
		$scope.options = options;
		Page.loader.update();
		return $scope.$apply();
	});

	// Get address fields
	Moltin.Address.Fields($scope.customer, 0, function (fields) {

		// Assign data
		$scope.fields = fields;
		Page.loader.update();
		return $scope.$apply();
	});

	return null;
}]);
;
////////////////////////////////
//// COLLECTION ////
////////////////////////////////

app.controller('collectionController', ['$scope', '$routeParams', 'Moltin', 'Page', function ($scope, $routeParams, Moltin, Page) {

	// Variables
	$scope.pageCurrent = 0;
	$scope.pagination = { total: 0, limit: 12, offset: 0 };
	Page.loader.set(2);

	// Page change
	$scope.$watch('pageCurrent', function (n, o) {

		if ($scope.collection) {
			Page.loader.set(1);
			return $scope.pageChange(n);
		}
	});

	// Pagination change
	$scope.pageChange = function (page) {

		// Change offset
		$scope.pagination.offset = page > 1 ? (page - 1) * $scope.pagination.limit : 0;

		// Get products
		return Moltin.Product.List({ collection: $scope.collection.id, status: 1, limit: $scope.pagination.limit, offset: $scope.pagination.offset }, function (products, pagination) {

			// Check products
			if (products.length <= 0) {
				Page.notice.set('info', "No products found in \"" + $scope.collection.title + "\"");

				// Format products
			} else {
				for (var k in products) {
					var v = products[k];
					products[k] = Page.format.product(v);
				}
			}

			// Assign data
			$scope.products = products;
			$scope.pagination = pagination;
			Page.loader.update();
			return $scope.$apply();
		});
	};

	// Get the category
	Moltin.Collection.Find({ slug: $routeParams.slug, status: 1 }, function (collection) {

		// Page options
		Page.titleSet(collection.title);

		// Assign data
		$scope.collection = Page.format.collection(collection);
		Page.loader.update();
		$scope.$apply();
		return $scope.pageChange(1);
	});

	return null;
}]);
;
//////////////////////////////////
//// COLLECTIONS ////
//////////////////////////////////

app.controller('collectionsController', ['$scope', 'Moltin', 'Page', function ($scope, Moltin, Page) {

	// Page options
	Page.titleSet('Collections');
	Page.loader.set(1);

	// Get the product
	Moltin.Collection.List({ status: 1, limit: 9 }, function (collections, pagination) {

		// Format collections
		for (var k in collections) {
			var v = collections[k];
			collections[k] = Page.format.collection(v);
		}

		// Assign data
		$scope.collections = collections;
		Page.loader.update();
		return $scope.$apply();
	});

	return null;
}]);
;
////////////////////////////////////////
//// ORDER COMPLETE ////
////////////////////////////////////////

app.controller('completeController', ['$scope', '$routeParams', '$location', 'Moltin', 'Page', function ($scope, $routeParams, $location, Moltin, Page) {

	// Check order
	if (typeof $scope.payment === 'undefined') {
		$location.path('/payment');
	}

	// Redirect
	// if $scope.payment.redirect != false
	// 	window.location $scope.payment.redirect

	// Page setup
	Page.titleSet($scope.payment.message);
	Page.notice.set('success', $scope.payment.message);

	return null;
}]);
;
//////////////////////
//// ERROR ////
//////////////////////

app.controller('errorController', ['$scope', '$routeParams', '$location', 'Page', function ($scope, $routeParams, $location, Page) {

	// Not found
	if ($scope.error === '404') {

		$scope.message = {
			type: '404',
			title: 'Page not found',
			msg: 'We\'re sorry, the page you are looking for might have been removed, had its name changed or is temporarily unavailable.'
		};
	} else {
		$location.path('/');
	}

	return null;
}]);
;
////////////////////////////
//// HOMEPAGE ////
////////////////////////////

app.controller('homeController', ['$scope', '$route', 'Moltin', 'Page', function ($scope, $route, Moltin, Page) {

	// Page options
	Page.titleSet('Home');
	Page.loader.set(3);

	// Get featured products
	Moltin.Product.Search({ featured: 1, status: 1, limit: 9 }, function (products) {

		// Format products
		for (var k in products) {
			var v = products[k];
			products[k] = Page.format.product(v);
		}

		// Assign data
		$scope.products = products;
		Page.loader.update();
		return $scope.$apply();
	});

	// Get collections
	Moltin.Collection.List({ status: 1, limit: 10 }, function (collections) {

		// Assign data
		$scope.collections = collections;
		Page.loader.update();
		return $scope.$apply();
	});

	// Get available currencies
	Moltin.Currency.List({ enabled: '1' }, function (currencies) {

		// Assign data
		$scope.currencies = currencies;
		Page.loader.update();
		return $scope.$apply();
	});

	return null;
}]);
;
////////////////////
//// PAGE ////
////////////////////

app.controller('pageController', ['$scope', '$routeParams', '$location', 'Page', function ($scope, $routeParams, $location, Page) {

	// Page change
	$scope.$watchCollection('pages', function () {

		// Get page contents
		if (typeof $scope.pages[$routeParams.page] !== 'undefined') {

			// Page setup
			var page = $scope.pages[$routeParams.page];
			Page.titleSet(page.title);

			// Assign data
			$scope.content = page;

			if (!$scope.$$phase) {
				return $scope.$apply();
			}
		} else if (Object.keys($scope.pages).length > 0) {
			return $location.path('/error');
		}
	});

	return null;
}]);
;
//////////////////////////
//// PAYMENT ////
//////////////////////////

app.controller('paymentController', ['$scope', '$routeParams', '$rootScope', '$location', 'Moltin', 'Page', function ($scope, $routeParams, $rootScope, $location, Moltin, Page) {

	// Check order
	if (typeof $scope.order === 'undefined' || $scope.order.id < 0) {
		$location.path('/checkout');
	}

	console.log($scope.order);

	// Page setup
	Page.titleSet('Payment');
	$scope.data = { number: '4242 4242 4242 4242', expiry_month: '05', expiry_year: '2015', start_month: '04', start_year: '2014', cvv: '123' };

	// Take payment
	$scope.payment = function (data) {
		return Moltin.Checkout.Payment('purchase', $scope.order.id, { data: $scope.data }, function (response) {

			delete $rootScope.order;

			$rootScope.payment = response;
			return $rootScope.$apply(function () {
				return $location.path('/checkout/complete');
			});
		});
	};

	return null;
}]);
;
//////////////////////////
//// PRODUCT ////
//////////////////////////

app.controller('productController', ['$rootScope', '$scope', '$routeParams', 'Moltin', 'Page', function ($rootScope, $scope, $routeParams, Moltin, Page) {

	// Variables
	$scope.mods = {};

	// Image zoom
	$scope.switchImage = function (src) {
		return $scope.imageSrc = src;
	};

	// Display product
	$scope.display = function (product) {

		var k = void 0,
		    v = void 0;
		console.log(product);

		// Page options
		Page.titleSet(product.title);

		// Assign data
		if (typeof product.image === 'undefined') {
			$scope.product = Page.format.product(product);
			Page.loader.update();
		} else {
			$scope.product = product;
		}

		if (!$scope.$$phase) {
			$scope.$apply();
		}

		// Assign modifiers
		if (Object.keys(product.modifiers).length > 0) {
			$scope.modifiers = product.modifiers;
			for (k in product.modifiers) {
				v = product.modifiers[k];
				$scope.mods[k] = 0;
			}
		}

		// Watch modifiers
		$scope.$watch('mods', function (n, o) {

			// Check not empty
			if (Object.keys(n).length < 1 || JSON.stringify(n) === JSON.stringify(o)) {
				return false;
			}

			// Variables
			var set = true;
			var params = { status: 1, modifier: {} };

			// Check all are set
			for (k in n) {
				v = n[k];
				if (v === '0' || v === 0) {
					set = false;
				} else {
					params.modifier[k] = v;
				}
			}

			// Check set
			if (!set) {
				delete params.modifier;
				params.slug = $routeParams.slug;
			}

			// Check cache
			if (typeof params.modifier === 'undefined' && $scope.cache.product[$routeParams.slug] !== 'undefined') {
				$scope.product = $scope.cache.product[$routeParams.slug];
				if (!$scope.$$phase) {
					return $scope.$apply();
				}
			} else {
				return Moltin.Product.Find(params, function (product) {
					$scope.product = Page.format.product(product);
					return $scope.$apply();
				});
			}
		}, true);

		// "Related" products
		return Moltin.Product.Search({ category: $scope.product.category.id, status: 1, limit: 5 }, function (items) {

			var products = [];

			// Format products
			for (k in items) {
				v = items[k];
				if (v.id !== $scope.product.id && products.length < 4) {
					products.push(Page.format.product(v));
				}
			}

			// Assign data
			$scope.products = products;
			if (!$scope.$$phase) {
				return $scope.$apply();
			}
		});
	};

	// Get the product
	if (Object.keys($scope.cache.product).length > 0 && typeof $scope.cache.product[$routeParams.slug] !== 'undefined') {
		$scope.display($scope.cache.product[$routeParams.slug]);
	} else {
		Page.loader.set(1);
		Moltin.Product.Find({ slug: $routeParams.slug, status: 1 }, $scope.display);
	}

	return null;
}]);
;
////////////////////////
//// SEARCH ////
////////////////////////

app.controller('searchController', ['$scope', '$routeParams', 'Moltin', 'Page', function ($scope, $routeParams, Moltin, Page) {

	// Check for search term
	if (typeof $routeParams.term !== 'undefined') {

		// Page setup
		Page.titleSet("Search \"" + $routeParams.term + "\"");
		$scope.term = $routeParams.term;
		$scope.search = $routeParams.term;

		// Search products
		Moltin.Product.Search({ title: $scope.search, status: 1, limit: 9 }, function (products) {

			// Format products
			for (var k in products) {
				var v = products[k];
				products[k] = Page.format.product(v);
			}

			// Assign data
			$scope.products = products;
			return $scope.$apply();
		});
	} else {

		// Page setup
		Page.titleSet('Search');
	}

	return null;
}]);
;
//////////////////////////
//// MOLTIN RUN ////
//////////////////////////

app.run(['$rootScope', 'Moltin', 'Page', function ($rootScope, Moltin, Page) {

	// Variables
	$rootScope.currency = Moltin.options.currency !== false ? Moltin.options.currency : 'GBP';
	$rootScope.pages = {};
	$rootScope.Page = Page;

	// Set base loader
	Page.loader.set(3);

	// Make categories global
	Moltin.Category.Tree({ status: 1 }, function (categories) {

		// Assign data
		$rootScope.categories = categories;
		Page.loader.update();
		return $rootScope.$apply();
	});

	// Make cart global
	Moltin.Cart.Contents(function (cart) {

		// Format products
		for (var k in cart.contents) {
			var v = cart.contents[k];
			cart.contents[k] = Page.format.product(v);
		}

		// Assign data
		$rootScope.cart = cart;
		Page.loader.update();
		return $rootScope.$apply();
	});

	// Make pages global
	Moltin.Entry.List('page', null, function (pages) {

		// Format data
		for (var k in pages) {
			var v = pages[k];
			$rootScope.pages[v.slug] = v;
		}

		// Assign data
		Page.loader.update();
		return $rootScope.$apply();
	});

	return null;
}]);
//# sourceMappingURL=store.js.map
