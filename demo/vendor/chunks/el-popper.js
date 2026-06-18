globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, G as r, H as i, I as a, M as o, Mt as s, Pt as c, T as l, U as u, _ as d, b as f, bt as p, pt as m, tt as h, ut as g, w as _, x as v, y, yt as b, z as x } from "./vue.runtime.js";
import { t as S } from "./shared/element-plus/utils/vue/install.js";
import { t as C } from "./shared/element-plus/hooks/use-aria.js";
import { t as w } from "./shared/lodash/fromPairs.js";
import { i as T, l as E, n as D } from "./shared/element-plus/utils/types.js";
import { t as O } from "./shared/lodash/isUndefined.js";
import { n as k, r as A } from "./shared/element-plus/utils/vue/props/runtime.js";
import { i as j } from "./shared/element-plus/utils/dom/aria.js";
import { _ as M, d as ee, n as N } from "./shared/vueuse.js";
import { r as P } from "./shared/element-plus/hooks/use-namespace.js";
import { n as te } from "./el-form/constants.js";
import { n as F, t as ne } from "./el-slot/only-child.js";
import { t as re } from "./el-focus-trap.js";
import { n as ie } from "./shared/element-plus/hooks/use-z-index.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/popper/src/arrow.mjs
var I = k({ arrowOffset: {
	type: Number,
	default: 5
} }), L = { arrowOffset: 5 }, R = I, z = "bottom", B = "right", V = "left", ae = "auto", H = [
	"top",
	z,
	B,
	V
], U = "start", oe = "clippingParents", se = "viewport", ce = "popper", le = "reference", ue = H.reduce(function(e, t) {
	return e.concat([t + "-" + U, t + "-end"]);
}, []), de = [].concat(H, [ae]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + U,
		t + "-end"
	]);
}, []), fe = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
function W(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
function G(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
function K(e) {
	return e instanceof G(e).Element || e instanceof Element;
}
function q(e) {
	return e instanceof G(e).HTMLElement || e instanceof HTMLElement;
}
function J(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof G(e).ShadowRoot || e instanceof ShadowRoot;
}
function pe(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!q(i) || !W(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function me(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(e) {
			var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!q(r) || !W(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var he = {
	name: "applyStyles",
	enabled: !0,
	phase: "write",
	fn: pe,
	effect: me,
	requires: ["computeStyles"]
};
function Y(e) {
	return e.split("-")[0];
}
var X = Math.max, ge = Math.min, Z = Math.round;
function _e() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
function ve() {
	return !/^((?!chrome|android).)*safari/i.test(_e());
}
function ye(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && q(e) && (i = e.offsetWidth > 0 && Z(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Z(r.height) / e.offsetHeight || 1);
	var o = (K(e) ? G(e) : window).visualViewport, s = !ve() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c,
		x: c,
		y: l
	};
}
function be(e) {
	var t = ye(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
function xe(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && J(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
function Q(e) {
	return G(e).getComputedStyle(e);
}
function Se(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(W(e)) >= 0;
}
function $(e) {
	return ((K(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ce(e) {
	return W(e) === "html" ? e : e.assignedSlot || e.parentNode || (J(e) ? e.host : null) || $(e);
}
function we(e) {
	return !q(e) || Q(e).position === "fixed" ? null : e.offsetParent;
}
function Te(e) {
	var t = /firefox/i.test(_e());
	if (/Trident/i.test(_e()) && q(e) && Q(e).position === "fixed") return null;
	var n = Ce(e);
	for (J(n) && (n = n.host); q(n) && ["html", "body"].indexOf(W(n)) < 0;) {
		var r = Q(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Ee(e) {
	for (var t = G(e), n = we(e); n && Se(n) && Q(n).position === "static";) n = we(n);
	return n && (W(n) === "html" || W(n) === "body" && Q(n).position === "static") ? t : n || Te(e) || t;
}
function De(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Oe(e, t, n) {
	return X(e, ge(t, n));
}
function ke(e, t, n) {
	var r = Oe(e, t, n);
	return r > n ? n : r;
}
function Ae() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
function je(e) {
	return Object.assign({}, Ae(), e);
}
function Me(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
var Ne = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, je(typeof e == "number" ? Me(e, H) : e);
};
function Pe(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Y(n.placement), c = De(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Ne(i.padding, n), d = be(a), f = c === "y" ? "top" : V, p = c === "y" ? z : B, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Ee(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Oe(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Fe(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || xe(t.elements.popper, r) && (t.elements.arrow = r));
}
var Ie = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Pe,
	effect: Fe,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
function Le(e) {
	return e.split("-")[1];
}
var Re = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function ze(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Z(n * i) / i || 0,
		y: Z(r * i) / i || 0
	};
}
function Be(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = V, b = "top", x = window;
	if (l) {
		var S = Ee(n), C = "clientHeight", w = "clientWidth";
		if (S === G(n) && (S = $(n), Q(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = z;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = B;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Re), O = u === !0 ? ze({
		x: p,
		y: h
	}, G(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Ve(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: Y(t.placement),
		variation: Le(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Be(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Be(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var He = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Ve,
	data: {}
}, Ue = { passive: !0 };
function We(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = G(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Ue);
	}), s && c.addEventListener("resize", n.update, Ue), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Ue);
		}), s && c.removeEventListener("resize", n.update, Ue);
	};
}
var Ge = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: We,
	data: {}
}, Ke = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function qe(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return Ke[e];
	});
}
var Je = {
	start: "end",
	end: "start"
};
function Ye(e) {
	return e.replace(/start|end/g, function(e) {
		return Je[e];
	});
}
function Xe(e) {
	var t = G(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
function Ze(e) {
	return ye($(e)).left + Xe(e).scrollLeft;
}
function Qe(e, t) {
	var n = G(e), r = $(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = ve();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + Ze(e),
		y: c
	};
}
function $e(e) {
	var t = $(e), n = Xe(e), r = e.ownerDocument?.body, i = X(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = X(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + Ze(e), s = -n.scrollTop;
	return Q(r || t).direction === "rtl" && (o += X(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
function et(e) {
	var t = Q(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function tt(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(W(e)) >= 0 ? e.ownerDocument.body : q(e) && et(e) ? e : tt(Ce(e));
}
function nt(e, t) {
	t === void 0 && (t = []);
	var n = tt(e), r = n === e.ownerDocument?.body, i = G(n), a = r ? [i].concat(i.visualViewport || [], et(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(nt(Ce(a)));
}
function rt(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
function it(e, t) {
	var n = ye(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function at(e, t, n) {
	return t === "viewport" ? rt(Qe(e, n)) : K(t) ? it(t, n) : rt($e($(e)));
}
function ot(e) {
	var t = nt(Ce(e)), n = ["absolute", "fixed"].indexOf(Q(e).position) >= 0 && q(e) ? Ee(e) : e;
	return K(n) ? t.filter(function(e) {
		return K(e) && xe(e, n) && W(e) !== "body";
	}) : [];
}
function st(e, t, n, r) {
	var i = t === "clippingParents" ? ot(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = at(e, n, r);
		return t.top = X(i.top, t.top), t.right = ge(i.right, t.right), t.bottom = ge(i.bottom, t.bottom), t.left = X(i.left, t.left), t;
	}, at(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ct(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Y(r) : null, a = r ? Le(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case z:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case B:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case V:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? De(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case U:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end":
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
		}
	}
	return c;
}
function lt(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? oe : s, l = n.rootBoundary, u = l === void 0 ? se : l, d = n.elementContext, f = d === void 0 ? ce : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = je(typeof g == "number" ? Me(g, H) : g), v = f === "popper" ? le : ce, y = e.rects.popper, b = e.elements[m ? v : f], x = st(K(b) ? b : b.contextElement || $(e.elements.popper), c, u, o), S = ye(e.elements.reference), C = ct({
		reference: S,
		element: y,
		placement: i
	}), w = rt(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
		top: x.top - T.top + _.top,
		bottom: T.bottom - x.bottom + _.bottom,
		left: x.left - T.left + _.left,
		right: T.right - x.right + _.right
	}, D = e.modifiersData.offset;
	if (f === "popper" && D) {
		var O = D[i];
		Object.keys(E).forEach(function(e) {
			var t = ["right", "bottom"].indexOf(e) >= 0 ? 1 : -1, n = ["top", "bottom"].indexOf(e) >= 0 ? "y" : "x";
			E[e] += O[n] * t;
		});
	}
	return E;
}
function ut(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? de : c, u = Le(r), d = u ? s ? ue : ue.filter(function(e) {
		return Le(e) === u;
	}) : H, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = lt(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Y(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
function dt(e) {
	if (Y(e) === "auto") return [];
	var t = qe(e);
	return [
		Ye(e),
		t,
		Ye(t)
	];
}
function ft(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Y(g) === g, v = c || (_ || !m ? [qe(g)] : dt(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Y(n) === "auto" ? ut(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Y(E), O = Le(E) === U, k = ["top", z].indexOf(D) >= 0, A = k ? "width" : "height", j = lt(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? B : V : O ? z : "top";
			b[A] > x[A] && (M = qe(M));
			var ee = qe(M), N = [];
			if (a && N.push(j[D] <= 0), s && N.push(j[M] <= 0, j[ee] <= 0), N.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, N);
		}
		if (C) for (var P = m ? 3 : 1, te = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, F = P; F > 0 && te(F) !== "break"; F--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var pt = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: ft,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
function mt(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function ht(e) {
	return [
		"top",
		B,
		z,
		V
	].some(function(t) {
		return e[t] >= 0;
	});
}
function gt(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = lt(t, { elementContext: "reference" }), s = lt(t, { altBoundary: !0 }), c = mt(o, r), l = mt(s, i, a), u = ht(c), d = ht(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var _t = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: gt
};
function vt(e, t, n) {
	var r = Y(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function yt(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = de.reduce(function(e, n) {
		return e[n] = vt(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var bt = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: yt
};
function xt(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = ct({
		reference: t.rects.reference,
		element: t.rects.popper,
		placement: t.placement
	});
}
var St = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: xt,
	data: {}
};
function Ct(e) {
	return e === "x" ? "y" : "x";
}
function wt(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = lt(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Y(t.placement), v = Le(t.placement), y = !v, b = De(_), x = Ct(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var k = b === "y" ? "top" : V, A = b === "y" ? z : B, j = b === "y" ? "height" : "width", M = S[b], ee = M + g[k], N = M - g[A], P = p ? -w[j] / 2 : 0, te = v === "start" ? C[j] : w[j], F = v === "start" ? -w[j] : -C[j], ne = t.elements.arrow, re = p && ne ? be(ne) : {
				width: 0,
				height: 0
			}, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ae(), I = ie[k], L = ie[A], R = Oe(0, C[j], re[j]), ae = y ? C[j] / 2 - P - R - I - E.mainAxis : te - R - I - E.mainAxis, H = y ? -C[j] / 2 + P + R + L + E.mainAxis : F + R + L + E.mainAxis, U = t.elements.arrow && Ee(t.elements.arrow), oe = U ? b === "y" ? U.clientTop || 0 : U.clientLeft || 0 : 0, se = D?.[b] ?? 0, ce = M + ae - se - oe, le = M + H - se, ue = Oe(p ? ge(ee, ce) : ee, M, p ? X(N, le) : N);
			S[b] = ue, O[b] = ue - M;
		}
		if (s) {
			var de = b === "x" ? "top" : V, fe = b === "x" ? z : B, W = S[x], G = x === "y" ? "height" : "width", K = W + g[de], q = W - g[fe], J = ["top", V].indexOf(_) !== -1, pe = D?.[x] ?? 0, me = J ? K : W - C[G] - w[G] - pe + E.altAxis, he = J ? W + C[G] + w[G] - pe - E.altAxis : q, Z = p && J ? ke(me, W, he) : Oe(p ? me : K, W, p ? he : q);
			S[x] = Z, O[x] = Z - W;
		}
		t.modifiersData[r] = O;
	}
}
var Tt = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: wt,
	requiresIfExists: ["offset"]
};
function Et(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
function Dt(e) {
	return e === G(e) || !q(e) ? Xe(e) : Et(e);
}
function Ot(e) {
	var t = e.getBoundingClientRect(), n = Z(t.width) / e.offsetWidth || 1, r = Z(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function kt(e, t, n) {
	n === void 0 && (n = !1);
	var r = q(t), i = q(t) && Ot(t), a = $(t), o = ye(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((W(t) !== "body" || et(a)) && (s = Dt(t)), q(t) ? (c = ye(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Ze(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
function At(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function jt(e) {
	var t = At(e);
	return fe.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
function Mt(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
function Nt(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
var Pt = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Ft() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function It(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Pt : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, Pt, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: K(e) ? nt(e) : e.contextElement ? nt(e.contextElement) : [],
					popper: nt(t)
				};
				var s = jt(Nt([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Ft(t, n)) {
						i.rects = {
							reference: kt(t, Ee(n), i.options.strategy === "fixed"),
							popper: be(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: Mt(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Ft(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
It(), It({ defaultModifiers: [
	Ge,
	St,
	He,
	he
] });
var Lt = It({ defaultModifiers: [
	Ge,
	St,
	He,
	he,
	bt,
	pt,
	Tt,
	Ie,
	_t
] }), Rt = k({
	boundariesPadding: {
		type: Number,
		default: 0
	},
	fallbackPlacements: {
		type: A(Array),
		default: void 0
	},
	gpuAcceleration: {
		type: Boolean,
		default: !0
	},
	offset: {
		type: Number,
		default: 12
	},
	placement: {
		type: String,
		values: de,
		default: "bottom"
	},
	popperOptions: {
		type: A(Object),
		default: () => ({})
	},
	strategy: {
		type: String,
		values: ["fixed", "absolute"],
		default: "absolute"
	}
}), zt = k({
	...Rt,
	...I,
	id: String,
	style: {
		type: A([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	},
	className: { type: A([
		String,
		Array,
		Object
	]) },
	effect: {
		type: A(String),
		default: "dark"
	},
	visible: Boolean,
	enterable: {
		type: Boolean,
		default: !0
	},
	pure: Boolean,
	focusOnShow: Boolean,
	trapping: Boolean,
	popperClass: { type: A([
		String,
		Array,
		Object
	]) },
	popperStyle: {
		type: A([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	},
	referenceEl: { type: A(Object) },
	triggerTargetEl: { type: A(Object) },
	stopPopperMouseEvent: {
		type: Boolean,
		default: !0
	},
	virtualTriggering: Boolean,
	zIndex: Number,
	...C(["ariaLabel"]),
	loop: Boolean
}), Bt = {
	boundariesPadding: 0,
	gpuAcceleration: !0,
	offset: 12,
	placement: "bottom",
	popperOptions: () => ({}),
	strategy: "absolute"
}, Vt = {
	...Bt,
	...L,
	effect: "dark",
	enterable: !0,
	stopPopperMouseEvent: !0,
	visible: !1,
	pure: !1,
	focusOnShow: !1,
	trapping: !1,
	virtualTriggering: !1,
	loop: !1,
	style: void 0,
	popperStyle: void 0
}, Ht = {
	mouseenter: (e) => e instanceof MouseEvent,
	mouseleave: (e) => e instanceof MouseEvent,
	focus: () => !0,
	blur: () => !0,
	close: () => !0
}, Ut = Rt, Wt = zt, Gt = Ht, Kt = k({
	virtualRef: { type: A(Object) },
	virtualTriggering: Boolean,
	onMouseenter: { type: A(Function) },
	onMouseleave: { type: A(Function) },
	onClick: { type: A(Function) },
	onKeydown: { type: A(Function) },
	onFocus: { type: A(Function) },
	onBlur: { type: A(Function) },
	onContextmenu: { type: A(Function) },
	id: String,
	open: Boolean
}), qt = Kt, Jt = {
	LIGHT: "light",
	DARK: "dark"
}, Yt = [
	"dialog",
	"grid",
	"group",
	"listbox",
	"menu",
	"navigation",
	"tooltip",
	"tree"
], Xt = k({ role: {
	type: String,
	values: Yt,
	default: "tooltip"
} }), Zt = Xt, Qt = Symbol("popper"), $t = Symbol("popperContent"), en = /* @__PURE__ */ l({
	name: "ElPopperArrow",
	inheritAttrs: !1,
	__name: "arrow",
	setup(e, { expose: t }) {
		let r = P("popper"), { arrowRef: o, arrowStyle: l } = n($t, void 0);
		return a(() => {
			o.value = void 0;
		}), t({ arrowRef: o }), (e, t) => (i(), v("span", {
			ref_key: "arrowRef",
			ref: o,
			class: s(b(r).e("arrow")),
			style: c(b(l)),
			"data-popper-arrow": ""
		}, null, 6));
	}
}), tn = /* @__PURE__ */ l({
	name: "ElPopper",
	inheritAttrs: !1,
	__name: "popper",
	props: Xt,
	setup(e, { expose: t }) {
		let n = e, i = {
			triggerRef: g(),
			popperInstanceRef: g(),
			contentRef: g(),
			referenceRef: g(),
			role: d(() => n.role)
		};
		return t(i), u(Qt, i), (e, t) => r(e.$slots, "default");
	}
}), nn = /* @__PURE__ */ l({
	name: "ElPopperTrigger",
	inheritAttrs: !1,
	__name: "trigger",
	props: Kt,
	setup(e, { expose: s }) {
		let c = e, { role: l, triggerRef: u } = n(Qt, void 0);
		F(u);
		let p = d(() => g.value ? c.id : void 0), m = d(() => {
			if (l && l.value === "tooltip") return c.open && c.id ? c.id : void 0;
		}), g = d(() => {
			if (l && l.value !== "tooltip") return l.value;
		}), _ = d(() => g.value ? `${c.open}` : void 0), v, S = [
			"onMouseenter",
			"onMouseleave",
			"onClick",
			"onKeydown",
			"onFocus",
			"onBlur",
			"onContextmenu"
		];
		return x(() => {
			t(() => c.virtualRef, (e) => {
				e && (u.value = N(e));
			}, { immediate: !0 }), t(u, (e, n) => {
				v?.(), v = void 0, D(n) && S.forEach((e) => {
					let t = c[e];
					t && n.removeEventListener(e.slice(2).toLowerCase(), t, ["onFocus", "onBlur"].includes(e));
				}), D(e) && (S.forEach((t) => {
					let n = c[t];
					n && e.addEventListener(t.slice(2).toLowerCase(), n, ["onFocus", "onBlur"].includes(t));
				}), j(e) && (v = t([
					p,
					m,
					g,
					_
				], (t) => {
					[
						"aria-controls",
						"aria-describedby",
						"aria-haspopup",
						"aria-expanded"
					].forEach((n, r) => {
						E(t[r]) ? e.removeAttribute(n) : e.setAttribute(n, t[r]);
					});
				}, { immediate: !0 }))), D(n) && j(n) && [
					"aria-controls",
					"aria-describedby",
					"aria-haspopup",
					"aria-expanded"
				].forEach((e) => n.removeAttribute(e));
			}, { immediate: !0 });
		}), a(() => {
			if (v?.(), v = void 0, u.value && D(u.value)) {
				let e = u.value;
				S.forEach((t) => {
					let n = c[t];
					n && e.removeEventListener(t.slice(2).toLowerCase(), n, ["onFocus", "onBlur"].includes(t));
				}), u.value = void 0;
			}
		}), s({ triggerRef: u }), (t, n) => e.virtualTriggering ? f("v-if", !0) : (i(), y(b(ne), o({ key: 0 }, t.$attrs, {
			"aria-controls": p.value,
			"aria-describedby": m.value,
			"aria-expanded": _.value,
			"aria-haspopup": g.value
		}), {
			default: h(() => [r(t.$slots, "default")]),
			_: 3
		}, 16, [
			"aria-controls",
			"aria-describedby",
			"aria-expanded",
			"aria-haspopup"
		]));
	}
}), rn = (e, n, r = {}) => {
	let i = {
		name: "updateState",
		enabled: !0,
		phase: "write",
		fn: ({ state: e }) => {
			let t = an(e);
			Object.assign(c.value, t);
		},
		requires: ["computeStyles"]
	}, o = d(() => {
		let { onFirstUpdate: e, placement: t, strategy: n, modifiers: a } = b(r);
		return {
			onFirstUpdate: e,
			placement: t || "bottom",
			strategy: n || "absolute",
			modifiers: [
				...a || [],
				i,
				{
					name: "applyStyles",
					enabled: !1
				}
			]
		};
	}), s = m(), c = g({
		styles: {
			popper: {
				position: b(o).strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	}), l = () => {
		s.value &&= (s.value.destroy(), void 0);
	};
	return t(o, (e) => {
		let t = b(s);
		t && t.setOptions(e);
	}, { deep: !0 }), t([e, n], ([e, t]) => {
		l(), !(!e || !t) && (s.value = Lt(e, t, b(o)));
	}), a(() => {
		l();
	}), {
		state: d(() => ({ ...b(s)?.state || {} })),
		styles: d(() => b(c).styles),
		attributes: d(() => b(c).attributes),
		update: () => b(s)?.update(),
		forceUpdate: () => b(s)?.forceUpdate(),
		instanceRef: d(() => b(s))
	};
};
function an(e) {
	let t = Object.keys(e.elements);
	return {
		styles: w(t.map((t) => [t, e.styles[t] || {}])),
		attributes: w(t.map((t) => [t, e.attributes[t]]))
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/popper/src/utils.mjs
var on = (e, t = []) => {
	let { placement: n, strategy: r, popperOptions: i } = e, a = {
		placement: n,
		strategy: r,
		...i,
		modifiers: [...cn(e), ...t]
	};
	return ln(a, i?.modifiers), a;
}, sn = (e) => {
	if (M) return N(e);
};
function cn(e) {
	let { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
	return [
		{
			name: "offset",
			options: { offset: [0, t ?? 12] }
		},
		{
			name: "preventOverflow",
			options: { padding: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			} }
		},
		{
			name: "flip",
			options: {
				padding: 5,
				fallbackPlacements: r
			}
		},
		{
			name: "computeStyles",
			options: { gpuAcceleration: n }
		}
	];
}
function ln(e, t) {
	t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/popper/src/composables/use-content.mjs
var un = 0, dn = (e) => {
	let { popperInstanceRef: r, contentRef: i, triggerRef: o, role: s } = n(Qt, void 0), c = g(), l = d(() => e.arrowOffset), u = d(() => ({
		name: "eventListeners",
		enabled: !!e.visible
	})), f = d(() => {
		let e = b(c), t = b(l) ?? un;
		return {
			name: "arrow",
			enabled: !O(e),
			options: {
				element: e,
				padding: t
			}
		};
	}), p = d(() => ({
		onFirstUpdate: () => {
			y();
		},
		...on(e, [b(f), b(u)])
	})), m = d(() => sn(e.referenceEl) || b(o)), { attributes: h, state: _, styles: v, update: y, forceUpdate: S, instanceRef: C } = rn(m, i, p);
	t(C, (e) => r.value = e, { flush: "sync" }), x(() => {
		t(() => b(m)?.getBoundingClientRect?.(), () => {
			y();
		});
	});
	let w;
	return t(() => e.visible, (e) => {
		w?.(), w = void 0, e && (w = ee(i, y).stop);
	}), a(() => {
		r.value = void 0, w?.(), w = void 0;
	}), {
		attributes: h,
		arrowRef: c,
		contentRef: i,
		instanceRef: C,
		state: _,
		styles: v,
		role: s,
		forceUpdate: S,
		update: y
	};
}, fn = (e, { attributes: t, styles: n, role: r }) => {
	let { nextZIndex: i } = ie(), a = P("popper"), o = d(() => b(t).popper), s = g(T(e.zIndex) ? e.zIndex : i()), c = d(() => [
		a.b(),
		a.is("pure", e.pure),
		a.is(e.effect),
		e.popperClass
	]), l = d(() => [
		{ zIndex: b(s) },
		b(n).popper,
		e.popperStyle || {}
	]);
	return {
		ariaModal: d(() => r.value === "dialog" ? "false" : void 0),
		arrowStyle: d(() => b(n).arrow || {}),
		contentAttrs: o,
		contentClass: c,
		contentStyle: l,
		contentZIndex: s,
		updateZIndex: () => {
			s.value = T(e.zIndex) ? e.zIndex : i();
		}
	};
}, pn = (e, t) => {
	let n = g(!1), r = g();
	return a(() => {
		r.value = void 0;
	}), {
		focusStartRef: r,
		trapped: n,
		onFocusAfterReleased: (e) => {
			e.detail?.focusReason !== "pointer" && (r.value = "first", t("blur"));
		},
		onFocusAfterTrapped: () => {
			t("focus");
		},
		onFocusInTrap: (t) => {
			e.visible && !n.value && (t.target && (r.value = t.target), n.value = !0);
		},
		onFocusoutPrevented: (t) => {
			e.trapping || (t.detail.focusReason === "pointer" && t.preventDefault(), n.value = !1);
		},
		onReleaseRequested: () => {
			n.value = !1, t("close");
		}
	};
}, mn = /* @__PURE__ */ l({
	name: "ElPopperContent",
	__name: "content",
	props: zt,
	emits: Ht,
	setup(e, { expose: s, emit: c }) {
		let l = c, d = e, { focusStartRef: f, trapped: m, onFocusAfterReleased: g, onFocusAfterTrapped: y, onFocusInTrap: S, onFocusoutPrevented: C, onReleaseRequested: w } = pn(d, l), { attributes: T, arrowRef: O, contentRef: k, styles: A, instanceRef: j, role: M, update: ee } = dn(d), { ariaModal: N, arrowStyle: P, contentAttrs: F, contentClass: ne, contentStyle: ie, updateZIndex: I } = fn(d, {
			styles: A,
			attributes: T,
			role: M
		}), L = n(te, void 0);
		u($t, {
			arrowStyle: P,
			arrowRef: O
		}), L && u(te, {
			...L,
			addInputId: p,
			removeInputId: p
		});
		let R, z = (e = !0) => {
			ee(), e && I();
		}, B = () => {
			z(!1), d.visible && d.focusOnShow ? m.value = !0 : d.visible === !1 && (m.value = !1);
		};
		return x(() => {
			t(() => d.triggerTargetEl, (e, n) => {
				R?.(), R = void 0;
				let r = b(e || k.value), i = b(n || k.value);
				D(r) && (R = t([
					M,
					() => d.ariaLabel,
					N,
					() => d.id
				], (e) => {
					[
						"role",
						"aria-label",
						"aria-modal",
						"id"
					].forEach((t, n) => {
						E(e[n]) ? r.removeAttribute(t) : r.setAttribute(t, e[n]);
					});
				}, { immediate: !0 })), i !== r && D(i) && [
					"role",
					"aria-label",
					"aria-modal",
					"id"
				].forEach((e) => {
					i.removeAttribute(e);
				});
			}, { immediate: !0 }), t(() => d.visible, B, { immediate: !0 });
		}), a(() => {
			R?.(), R = void 0, k.value = void 0;
		}), s({
			popperContentRef: k,
			popperInstanceRef: j,
			updatePopper: z,
			contentStyle: ie
		}), (t, n) => (i(), v("div", o({
			ref_key: "contentRef",
			ref: k
		}, b(F), {
			style: b(ie),
			class: b(ne),
			tabindex: "-1",
			onMouseenter: n[0] ||= (e) => t.$emit("mouseenter", e),
			onMouseleave: n[1] ||= (e) => t.$emit("mouseleave", e)
		}), [_(b(re), {
			loop: e.loop,
			trapped: b(m),
			"trap-on-focus-in": !0,
			"focus-trap-el": b(k),
			"focus-start-el": b(f),
			onFocusAfterTrapped: b(y),
			onFocusAfterReleased: b(g),
			onFocusin: b(S),
			onFocusoutPrevented: b(C),
			onReleaseRequested: b(w)
		}, {
			default: h(() => [r(t.$slots, "default")]),
			_: 3
		}, 8, [
			"loop",
			"trapped",
			"focus-trap-el",
			"focus-start-el",
			"onFocusAfterTrapped",
			"onFocusAfterReleased",
			"onFocusin",
			"onFocusoutPrevented",
			"onReleaseRequested"
		])], 16));
	}
}), hn = /* @__PURE__ */ e({
	Effect: () => Jt,
	ElPopper: () => gn,
	ElPopperArrow: () => en,
	ElPopperContent: () => mn,
	ElPopperTrigger: () => nn,
	POPPER_CONTENT_INJECTION_KEY: () => $t,
	POPPER_INJECTION_KEY: () => Qt,
	default: () => gn,
	popperArrowProps: () => I,
	popperArrowPropsDefaults: () => L,
	popperContentEmits: () => Ht,
	popperContentProps: () => zt,
	popperContentPropsDefaults: () => Vt,
	popperCoreConfigProps: () => Rt,
	popperCoreConfigPropsDefaults: () => Bt,
	popperProps: () => Xt,
	popperTriggerProps: () => Kt,
	roleTypes: () => Yt,
	usePopperArrowProps: () => R,
	usePopperContentEmits: () => Gt,
	usePopperContentProps: () => Wt,
	usePopperCoreConfigProps: () => Ut,
	usePopperProps: () => Zt,
	usePopperTriggerProps: () => qt
}), gn = S(tn);
//#endregion
export { en as a, Kt as c, de as d, I as f, nn as i, zt as l, hn as n, Xt as o, mn as r, Yt as s, gn as t, Vt as u };
