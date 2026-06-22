globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, C as n, Dt as r, Ft as i, G as a, H as o, I as s, J as c, M as l, Mt as u, Pt as d, T as f, Tt as p, U as m, W as h, Z as g, _, b as v, et as y, ht as b, jt as x, m as S, p as C, tt as w, ut as T, v as E, w as D, x as O, y as k, yt as A, z as j } from "./vue.runtime.js";
import { r as M } from "./shared/element-plus/utils/objects.js";
import { i as N, t as ee } from "./shared/element-plus/utils/vue/install.js";
import { t as te } from "./shared/lodash/omit.js";
import { i as P, s as ne, t as re } from "./shared/element-plus/utils/types.js";
import { r as ie, t as ae } from "./shared/element-plus/constants/event.js";
import { n as F, r as I } from "./shared/element-plus/utils/vue/props/runtime.js";
import { _ as oe, m as se } from "./shared/vueuse.js";
import { r as ce } from "./shared/element-plus/hooks/use-namespace.js";
import { a as L, t as le } from "./shared/element-plus/utils/vue/icon.js";
import { t as ue } from "./shared/element-plus/utils/vue/vnode.js";
import { t as de } from "./el-icon.js";
import { a as fe, n as pe } from "./shared/element-plus/constants/aria.js";
import { t as me } from "./el-focus-trap.js";
import { n as he } from "./shared/element-plus/hooks/use-z-index.js";
import { n as ge } from "./shared/element-plus/hooks/use-locale.js";
import { t as _e } from "./el-button.js";
import { t as ve } from "./shared/element-plus/hooks/use-lockscreen.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tour/src/content.mjs
var ye = ["absolute", "fixed"], be = [
	"top-start",
	"top-end",
	"top",
	"bottom-start",
	"bottom-end",
	"bottom",
	"left-start",
	"left-end",
	"left",
	"right-start",
	"right-end",
	"right"
], xe = F({
	placement: {
		type: I(String),
		values: be,
		default: "bottom"
	},
	reference: {
		type: I(Object),
		default: null
	},
	strategy: {
		type: I(String),
		values: ye,
		default: "absolute"
	},
	offset: {
		type: Number,
		default: 10
	},
	showArrow: Boolean,
	zIndex: {
		type: Number,
		default: 2001
	}
}), Se = { close: () => !0 }, Ce = F({
	modelValue: Boolean,
	current: { type: Number },
	showArrow: {
		type: Boolean,
		default: !0
	},
	showClose: {
		type: Boolean,
		default: !0
	},
	closeIcon: { type: L },
	placement: xe.placement,
	contentStyle: { type: I([Object]) },
	mask: {
		type: I([Boolean, Object]),
		default: !0
	},
	gap: {
		type: I(Object),
		default: () => ({
			offset: 6,
			radius: 2
		})
	},
	zIndex: { type: Number },
	scrollIntoViewOptions: {
		type: I([Boolean, Object]),
		default: () => ({ block: "center" })
	},
	type: { type: I(String) },
	appendTo: {
		type: I([String, Object]),
		default: "body"
	},
	closeOnPressEscape: {
		type: Boolean,
		default: !0
	},
	targetAreaClickable: {
		type: Boolean,
		default: !0
	}
}), we = {
	[ie]: (e) => re(e),
	"update:current": (e) => P(e),
	close: (e) => P(e),
	finish: () => !0,
	change: (e) => P(e)
}, R = Math.min, z = Math.max, Te = Math.round, Ee = Math.floor, B = (e) => ({
	x: e,
	y: e
}), De = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Oe(e, t, n) {
	return z(e, R(t, n));
}
function ke(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function V(e) {
	return e.split("-")[0];
}
function Ae(e) {
	return e.split("-")[1];
}
function je(e) {
	return e === "x" ? "y" : "x";
}
function Me(e) {
	return e === "y" ? "height" : "width";
}
function H(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Ne(e) {
	return je(H(e));
}
function Pe(e, t, n) {
	n === void 0 && (n = !1);
	let r = Ae(e), i = Ne(e), a = Me(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Ue(o)), [o, Ue(o)];
}
function Fe(e) {
	let t = Ue(e);
	return [
		Ie(e),
		t,
		Ie(t)
	];
}
function Ie(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Le = ["left", "right"], Re = ["right", "left"], ze = ["top", "bottom"], Be = ["bottom", "top"];
function Ve(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Re : Le : t ? Le : Re;
		case "left":
		case "right": return t ? ze : Be;
		default: return [];
	}
}
function He(e, t, n, r) {
	let i = Ae(e), a = Ve(V(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Ie)))), a;
}
function Ue(e) {
	let t = V(e);
	return De[t] + e.slice(t.length);
}
function We(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Ge(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : We(e);
}
function Ke(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function qe(e, t, n) {
	let { reference: r, floating: i } = e, a = H(t), o = Ne(t), s = Me(o), c = V(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Ae(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Je(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ke(t, e), p = Ge(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Ke(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Ke(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Ye = 50, Xe = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Je
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = qe(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Ye && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = qe(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Ze = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ke(e, t) || {};
		if (l == null) return {};
		let d = Ge(u), f = {
			x: n,
			y: r
		}, p = Ne(i), m = Me(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = R(d[_], T), D = R(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Oe(O, A, k), M = !c.arrow && Ae(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), Qe = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ke(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = V(r), _ = H(o), v = V(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Ue(o)] : Fe(o)), x = p !== "none";
			!d && x && b.push(...He(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Pe(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== H(t)) || T.every((e) => H(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = H(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, $e = /*#__PURE__*/ new Set(["left", "top"]);
async function et(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = V(n), s = Ae(n), c = H(n) === "y", l = $e.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ke(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var tt = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await et(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, nt = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = ke(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = H(V(i)), p = je(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Oe(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Oe(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function rt() {
	return typeof window < "u";
}
function U(e) {
	return it(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function W(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function G(e) {
	return ((it(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function it(e) {
	return rt() ? e instanceof Node || e instanceof W(e).Node : !1;
}
function K(e) {
	return rt() ? e instanceof Element || e instanceof W(e).Element : !1;
}
function q(e) {
	return rt() ? e instanceof HTMLElement || e instanceof W(e).HTMLElement : !1;
}
function at(e) {
	return !rt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof W(e).ShadowRoot;
}
function ot(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = X(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function st(e) {
	return /^(table|td|th)$/.test(U(e));
}
function ct(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var lt = /transform|translate|scale|rotate|perspective|filter/, ut = /paint|layout|strict|content/, J = (e) => !!e && e !== "none", dt;
function ft(e) {
	let t = K(e) ? X(e) : e;
	return J(t.transform) || J(t.translate) || J(t.scale) || J(t.rotate) || J(t.perspective) || !mt() && (J(t.backdropFilter) || J(t.filter)) || lt.test(t.willChange || "") || ut.test(t.contain || "");
}
function pt(e) {
	let t = Z(e);
	for (; q(t) && !Y(t);) {
		if (ft(t)) return t;
		if (ct(t)) return null;
		t = Z(t);
	}
	return null;
}
function mt() {
	return dt ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), dt;
}
function Y(e) {
	return /^(html|body|#document)$/.test(U(e));
}
function X(e) {
	return W(e).getComputedStyle(e);
}
function ht(e) {
	return K(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Z(e) {
	if (U(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || at(e) && e.host || G(e);
	return at(t) ? t.host : t;
}
function gt(e) {
	let t = Z(e);
	return Y(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : q(t) && ot(t) ? t : gt(t);
}
function _t(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = gt(e), i = r === e.ownerDocument?.body, a = W(r);
	if (i) {
		let e = vt(a);
		return t.concat(a, a.visualViewport || [], ot(r) ? r : [], e && n ? _t(e) : []);
	} else return t.concat(r, _t(r, [], n));
}
function vt(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function yt(e) {
	let t = X(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = q(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Te(n) !== a || Te(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function bt(e) {
	return K(e) ? e : e.contextElement;
}
function Q(e) {
	let t = bt(e);
	if (!q(t)) return B(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = yt(t), o = (a ? Te(n.width) : n.width) / r, s = (a ? Te(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var xt = /*#__PURE__*/ B(0);
function St(e) {
	let t = W(e);
	return !mt() || !t.visualViewport ? xt : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Ct(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== W(e) ? !1 : t;
}
function $(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = bt(e), o = B(1);
	t && (r ? K(r) && (o = Q(r)) : o = Q(e));
	let s = Ct(a, n, r) ? St(a) : B(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = W(a), t = r && K(r) ? W(r) : r, n = e, i = vt(n);
		for (; i && r && t !== n;) {
			let e = Q(i), t = i.getBoundingClientRect(), r = X(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = W(i), i = vt(n);
		}
	}
	return Ke({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function wt(e, t) {
	let n = ht(e).scrollLeft;
	return t ? t.left + n : $(G(e)).left + n;
}
function Tt(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - wt(e, n),
		y: n.top + t.scrollTop
	};
}
function Et(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = G(r), s = t ? ct(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = B(1), u = B(0), d = q(r);
	if ((d || !d && !a) && ((U(r) !== "body" || ot(o)) && (c = ht(r)), d)) {
		let e = $(r);
		l = Q(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Tt(o, c) : B(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Dt(e) {
	return Array.from(e.getClientRects());
}
function Ot(e) {
	let t = G(e), n = ht(e), r = e.ownerDocument.body, i = z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + wt(e), s = -n.scrollTop;
	return X(r).direction === "rtl" && (o += z(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var kt = 25;
function At(e, t) {
	let n = W(e), r = G(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = mt();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = wt(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= kt && (a -= o);
	} else l <= kt && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function jt(e, t) {
	let n = $(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = q(e) ? Q(e) : B(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Mt(e, t, n) {
	let r;
	if (t === "viewport") r = At(e, n);
	else if (t === "document") r = Ot(G(e));
	else if (K(t)) r = jt(t, n);
	else {
		let n = St(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Ke(r);
}
function Nt(e, t) {
	let n = Z(e);
	return n === t || !K(n) || Y(n) ? !1 : X(n).position === "fixed" || Nt(n, t);
}
function Pt(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = _t(e, [], !1).filter((e) => K(e) && U(e) !== "body"), i = null, a = X(e).position === "fixed", o = a ? Z(e) : e;
	for (; K(o) && !Y(o);) {
		let t = X(o), n = ft(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || ot(o) && !n && Nt(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Z(o);
	}
	return t.set(e, r), r;
}
function Ft(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ct(t) ? [] : Pt(t, this._c) : [].concat(n), r], o = Mt(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Mt(t, a[e], i);
		s = z(n.top, s), c = R(n.right, c), l = R(n.bottom, l), u = z(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function It(e) {
	let { width: t, height: n } = yt(e);
	return {
		width: t,
		height: n
	};
}
function Lt(e, t, n) {
	let r = q(t), i = G(t), a = n === "fixed", o = $(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = B(0);
	function l() {
		c.x = wt(i);
	}
	if (r || !r && !a) if ((U(t) !== "body" || ot(i)) && (s = ht(t)), r) {
		let e = $(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Tt(i, s) : B(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Rt(e) {
	return X(e).position === "static";
}
function zt(e, t) {
	if (!q(e) || X(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return G(e) === n && (n = n.ownerDocument.body), n;
}
function Bt(e, t) {
	let n = W(e);
	if (ct(e)) return n;
	if (!q(e)) {
		let t = Z(e);
		for (; t && !Y(t);) {
			if (K(t) && !Rt(t)) return t;
			t = Z(t);
		}
		return n;
	}
	let r = zt(e, t);
	for (; r && st(r) && Rt(r);) r = zt(r, t);
	return r && Y(r) && Rt(r) && !ft(r) ? n : r || pt(e) || n;
}
var Vt = async function(e) {
	let t = this.getOffsetParent || Bt, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Lt(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Ht(e) {
	return X(e).direction === "rtl";
}
var Ut = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Et,
	getDocumentElement: G,
	getClippingRect: Ft,
	getOffsetParent: Bt,
	getElementRects: Vt,
	getClientRects: Dt,
	getDimensions: It,
	getScale: Q,
	isElement: K,
	isRTL: Ht
};
function Wt(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Gt(e, t) {
	let n = null, r, i = G(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Ee(d), h = Ee(i.clientWidth - (u + f)), g = Ee(i.clientHeight - (d + p)), _ = Ee(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: z(0, R(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Wt(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Kt(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = bt(e), u = i || a ? [...l ? _t(l) : [], ...t ? _t(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Gt(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? $(e) : null;
	c && g();
	function g() {
		let t = $(e);
		h && !Wt(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var qt = Je, Jt = tt, Yt = nt, Xt = Qe, Zt = Ze, Qt = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Ut,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Xe(e, t, {
		...i,
		platform: a
	});
}, $t = (t, n, i, a, o) => {
	let c = T(null), l = () => {
		let e;
		return e = x(t.value) ? document.querySelector(t.value) : r(t.value) ? t.value() : t.value, e;
	}, u = () => {
		let e = l();
		if (!e || !n.value) {
			c.value = null;
			return;
		}
		tn(e) || e.scrollIntoView(o.value);
		let { left: t, top: r, width: i, height: a } = e.getBoundingClientRect();
		c.value = {
			left: t,
			top: r,
			width: i,
			height: a,
			radius: 0
		};
	};
	j(() => {
		e([n, t], () => {
			u();
		}, { immediate: !0 }), window.addEventListener("resize", u);
	}), s(() => {
		window.removeEventListener("resize", u);
	});
	let d = (e) => (p(i.value.offset) ? i.value.offset[e] : i.value.offset) ?? 6, f = _(() => {
		if (!c.value) return c.value;
		let e = d(0), t = d(1), n = i.value?.radius || 2;
		return {
			left: c.value.left - e,
			top: c.value.top - t,
			width: c.value.width + e * 2,
			height: c.value.height + t * 2,
			radius: n
		};
	});
	return {
		mergedPosInfo: f,
		triggerTarget: _(() => {
			let e = l();
			return !a.value || !e || !window.DOMRect ? e || void 0 : { getBoundingClientRect() {
				return window.DOMRect.fromRect({
					width: f.value?.width || 0,
					height: f.value?.height || 0,
					x: f.value?.left || 0,
					y: f.value?.top || 0
				});
			} };
		})
	};
}, en = Symbol("ElTour");
function tn(e) {
	let t = window.innerWidth || document.documentElement.clientWidth, n = window.innerHeight || document.documentElement.clientHeight, { top: r, right: i, bottom: a, left: o } = e.getBoundingClientRect();
	return r >= 0 && o >= 0 && i <= t && a <= n;
}
var nn = (e, t, n, r, i, a, o, c) => {
	let l = T(), u = T(), d = T({}), f = {
		x: l,
		y: u,
		placement: r,
		strategy: i,
		middlewareData: d
	}, p = _(() => {
		let e = [
			Jt(A(a)),
			Xt(),
			Yt(),
			rn()
		];
		return A(c) && A(n) && e.push(Zt({ element: A(n) })), e;
	}), m = async () => {
		if (!oe) return;
		let n = A(e), a = A(t);
		if (!n || !a) return;
		let o = await Qt(n, a, {
			placement: A(r),
			strategy: A(i),
			middleware: A(p)
		});
		M(f).forEach((e) => {
			f[e].value = o[e];
		});
	}, h = _(() => {
		if (!A(e)) return {
			position: "fixed",
			top: "50%",
			left: "50%",
			transform: "translate3d(-50%, -50%, 0)",
			maxWidth: "100vw",
			zIndex: A(o)
		};
		let { overflow: t } = A(d);
		return {
			position: A(i),
			zIndex: A(o),
			top: A(u) == null ? "" : `${A(u)}px`,
			left: A(l) == null ? "" : `${A(l)}px`,
			maxWidth: t?.maxWidth ? `${t?.maxWidth}px` : ""
		};
	}), g = _(() => {
		if (!A(c)) return {};
		let { arrow: e } = A(d);
		return {
			left: e?.x == null ? "" : `${e?.x}px`,
			top: e?.y == null ? "" : `${e?.y}px`
		};
	}), v;
	return j(() => {
		let n = A(e), r = A(t);
		n && r && (v = Kt(n, r, m)), y(() => {
			m();
		});
	}), s(() => {
		v && v();
	}), {
		update: m,
		contentStyle: h,
		arrowStyle: g
	};
}, rn = () => ({
	name: "overflow",
	async fn(e) {
		let t = await qt(e), n = 0;
		return t.left > 0 && (n = t.left), t.right > 0 && (n = t.right), { data: { maxWidth: e.rects.floating.width - n } };
	}
}), an = F({
	zIndex: {
		type: Number,
		default: 1001
	},
	visible: Boolean,
	fill: {
		type: String,
		default: "rgba(0,0,0,0.5)"
	},
	pos: { type: I(Object) },
	targetAreaClickable: {
		type: Boolean,
		default: !0
	}
}), on = { style: {
	width: "100%",
	height: "100%"
} }, sn = ["d"], cn = /* @__PURE__ */ f({
	name: "ElTourMask",
	inheritAttrs: !1,
	__name: "mask",
	props: an,
	setup(e) {
		let n = e, { ns: r } = t(en), i = _(() => n.pos?.radius ?? 2), a = _(() => {
			let e = i.value, t = `a${e},${e} 0 0 1`;
			return {
				topRight: `${t} ${e},${e}`,
				bottomRight: `${t} ${-e},${e}`,
				bottomLeft: `${t} ${-e},${-e}`,
				topLeft: `${t} ${e},${-e}`
			};
		}), { width: s, height: c } = se(), f = _(() => {
			let e = s.value, t = c.value, r = a.value, o = `M${e},0 L0,0 L0,${t} L${e},${t} L${e},0 Z`, l = i.value;
			return n.pos ? `${o} M${n.pos.left + l},${n.pos.top} h${n.pos.width - l * 2} ${r.topRight} v${n.pos.height - l * 2} ${r.bottomRight} h${-n.pos.width + l * 2} ${r.bottomLeft} v${-n.pos.height + l * 2} ${r.topLeft} z` : o;
		}), p = _(() => ({
			position: "fixed",
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			zIndex: n.zIndex,
			pointerEvents: n.pos && n.targetAreaClickable ? "none" : "auto"
		})), m = _(() => ({
			fill: n.fill,
			pointerEvents: "auto",
			cursor: "auto"
		}));
		return ve(b(n, "visible"), { ns: r }), (t, n) => e.visible ? (o(), O("div", l({
			key: 0,
			class: A(r).e("mask"),
			style: p.value
		}, t.$attrs), [(o(), O("svg", on, [E("path", {
			class: u(A(r).e("hollow")),
			style: d(m.value),
			d: f.value
		}, null, 14, sn)]))], 16)) : v("v-if", !0);
	}
}), ln = ["data-side"], un = /* @__PURE__ */ f({
	name: "ElTourContent",
	__name: "content",
	props: xe,
	emits: Se,
	setup(n, { emit: r }) {
		let i = n, s = r, c = T(i.placement), l = T(i.strategy), f = T(null), p = T(null);
		e(() => i.placement, () => {
			c.value = i.placement;
		});
		let { contentStyle: m, arrowStyle: h } = nn(b(i, "reference"), f, p, c, l, b(i, "offset"), b(i, "zIndex"), b(i, "showArrow")), g = _(() => c.value.split("-")[0]), { ns: y } = t(en), x = () => {
			s("close");
		}, S = (e) => {
			e.detail.focusReason === "pointer" && e.preventDefault();
		};
		return (e, t) => (o(), O("div", {
			ref_key: "contentRef",
			ref: f,
			style: d(A(m)),
			class: u(A(y).e("content")),
			"data-side": g.value,
			tabindex: "-1"
		}, [D(A(me), {
			loop: "",
			trapped: "",
			"focus-start-el": "container",
			"focus-trap-el": f.value || void 0,
			onReleaseRequested: x,
			onFocusoutPrevented: S
		}, {
			default: w(() => [a(e.$slots, "default")]),
			_: 3
		}, 8, ["focus-trap-el"]), n.showArrow ? (o(), O("span", {
			key: 0,
			ref_key: "arrowRef",
			ref: p,
			style: d(A(h)),
			class: u(A(y).e("arrow"))
		}, null, 6)) : v("v-if", !0)], 14, ln));
	}
}), dn = f({
	name: "ElTourSteps",
	props: { current: {
		type: Number,
		default: 0
	} },
	emits: ["update-total"],
	setup(e, { slots: t, emit: n }) {
		let r = 0;
		return () => {
			let i = t.default?.(), a = [], o = 0;
			function s(e) {
				p(e) && e.forEach((e) => {
					(e?.type || {})?.name === "ElTourStep" && (a.push(e), o += 1);
				});
			}
			return i.length && s(ue(i[0]?.children)), r !== o && (r = o, n("update-total", o)), a.length ? a[e.current] : null;
		};
	}
}), fn = /* @__PURE__ */ f({
	name: "ElTour",
	inheritAttrs: !1,
	__name: "tour",
	props: Ce,
	emits: we,
	setup(t, { emit: n }) {
		let r = t, i = n, s = ce("tour"), c = T(0), u = T(), f = _(() => !ne(r.current)), p = T(r.current ?? 0), h = _({
			get() {
				return ne(r.current) ? p.value : r.current;
			},
			set(e) {
				(f.value ? r.current : p.value) !== e && (f.value || (p.value = e), i("update:current", e));
			}
		}), y = _(() => u.value?.target), x = _(() => [s.b(), I.value === "primary" ? s.m("primary") : ""]), j = _(() => u.value?.placement || r.placement), M = _(() => u.value?.contentStyle ?? r.contentStyle), N = _(() => u.value?.mask ?? r.mask), ee = _(() => !!N.value && r.modelValue), te = _(() => re(N.value) ? void 0 : N.value), P = _(() => !!y.value && (u.value?.showArrow ?? r.showArrow)), F = _(() => u.value?.scrollIntoViewOptions ?? r.scrollIntoViewOptions), I = _(() => u.value?.type ?? r.type), { nextZIndex: oe } = he(), se = oe(), L = _(() => r.zIndex ?? se), { mergedPosInfo: le, triggerTarget: ue } = $t(y, b(r, "modelValue"), b(r, "gap"), N, F);
		e(() => r.current, (e) => !ne(e) && (p.value = e)), e(h, (e, t) => {
			!r.modelValue || e === t || i(ae, e);
		}, { flush: "post" }), e(() => r.modelValue, (e) => {
			!e && h.value !== 0 && (h.value = 0);
		});
		let de = () => {
			r.closeOnPressEscape && (i(ie, !1), i("close", h.value));
		}, fe = (e) => {
			c.value = e;
		}, pe = g();
		return m(en, {
			currentStep: u,
			current: h,
			total: c,
			showClose: b(r, "showClose"),
			closeIcon: b(r, "closeIcon"),
			mergedType: I,
			ns: s,
			slots: pe,
			updateModelValue(e) {
				i(ie, e);
			},
			onClose() {
				i("close", h.value);
			},
			onFinish() {
				i("finish");
			}
		}), (e, n) => (o(), O(C, null, [
			(o(), k(S, { to: t.appendTo }, [E("div", l({ class: x.value }, e.$attrs), [D(cn, {
				visible: ee.value,
				fill: te.value?.color,
				style: d(te.value?.style),
				pos: A(le),
				"z-index": L.value,
				"target-area-clickable": t.targetAreaClickable
			}, null, 8, [
				"visible",
				"fill",
				"style",
				"pos",
				"z-index",
				"target-area-clickable"
			]), t.modelValue ? (o(), k(un, {
				key: h.value,
				reference: A(ue),
				placement: j.value,
				"show-arrow": P.value,
				"z-index": L.value,
				style: d(M.value),
				onClose: de
			}, {
				default: w(() => [D(A(dn), {
					current: h.value,
					onUpdateTotal: fe
				}, {
					default: w(() => [a(e.$slots, "default")]),
					_: 3
				}, 8, ["current"])]),
				_: 3
			}, 8, [
				"reference",
				"placement",
				"show-arrow",
				"z-index",
				"style"
			])) : v("v-if", !0)], 16)], 8, ["to"])),
			v(" just for IDE "),
			v("v-if", !0)
		], 64));
	}
}), pn = F({
	target: { type: I([
		String,
		Object,
		Function
	]) },
	title: String,
	description: String,
	showClose: {
		type: Boolean,
		default: void 0
	},
	closeIcon: { type: L },
	showArrow: {
		type: Boolean,
		default: void 0
	},
	placement: xe.placement,
	mask: {
		type: I([Boolean, Object]),
		default: void 0
	},
	contentStyle: { type: I([Object]) },
	prevButtonProps: { type: I(Object) },
	nextButtonProps: { type: I(Object) },
	scrollIntoViewOptions: {
		type: I([Boolean, Object]),
		default: void 0
	},
	type: { type: I(String) }
}), mn = { close: () => !0 }, hn = ["aria-label"], gn = /* @__PURE__ */ f({
	name: "ElTourStep",
	__name: "step",
	props: pn,
	emits: mn,
	setup(r, { emit: d }) {
		let f = r, p = d, { Close: m } = le, { t: g } = ge(), { currentStep: y, current: b, total: x, showClose: S, closeIcon: T, mergedType: M, ns: N, slots: ee, updateModelValue: P, onClose: ne, onFinish: re } = t(en);
		e(f, (e) => {
			y.value = e;
		}, { immediate: !0 });
		let ie = _(() => f.showClose ?? S.value), ae = _(() => f.closeIcon ?? T.value ?? m), F = (e) => {
			if (e) return te(e, ["children", "onClick"]);
		}, I = () => {
			--b.value, f.prevButtonProps?.onClick && f.prevButtonProps?.onClick();
		}, oe = () => {
			b.value >= x.value - 1 ? se() : b.value += 1, f.nextButtonProps?.onClick && f.nextButtonProps.onClick();
		}, se = () => {
			ce(), re();
		}, ce = () => {
			P(!1), ne(), p("close");
		}, L = (e) => {
			if (!e.target?.isContentEditable) switch (pe(e)) {
				case fe.left:
					e.preventDefault(), b.value > 0 && I();
					break;
				case fe.right:
					e.preventDefault(), oe();
					break;
			}
		};
		return j(() => {
			window.addEventListener("keydown", L);
		}), s(() => {
			window.removeEventListener("keydown", L);
		}), (e, t) => (o(), O(C, null, [
			ie.value ? (o(), O("button", {
				key: 0,
				"aria-label": A(g)("el.tour.close"),
				class: u(A(N).e("closebtn")),
				type: "button",
				onClick: ce
			}, [D(A(de), { class: u(A(N).e("close")) }, {
				default: w(() => [(o(), k(c(ae.value)))]),
				_: 1
			}, 8, ["class"])], 10, hn)) : v("v-if", !0),
			E("header", { class: u([A(N).e("header"), { "show-close": A(S) }]) }, [a(e.$slots, "header", {}, () => [E("span", {
				role: "heading",
				class: u(A(N).e("title"))
			}, i(r.title), 3)])], 2),
			E("div", { class: u(A(N).e("body")) }, [a(e.$slots, "default", {}, () => [E("span", null, i(r.description), 1)])], 2),
			E("footer", { class: u(A(N).e("footer")) }, [E("div", { class: u(A(N).b("indicators")) }, [A(ee).indicators ? (o(), k(c(A(ee).indicators), {
				key: 0,
				current: A(b),
				total: A(x)
			}, null, 8, ["current", "total"])) : (o(!0), O(C, { key: 1 }, h(A(x), (e, t) => (o(), O("span", {
				key: e,
				class: u([A(N).b("indicator"), A(N).is("active", t === A(b))])
			}, null, 2))), 128))], 2), E("div", { class: u(A(N).b("buttons")) }, [A(b) > 0 ? (o(), k(A(_e), l({
				key: 0,
				size: "small",
				type: A(M)
			}, F(r.prevButtonProps), { onClick: I }), {
				default: w(() => [n(i(r.prevButtonProps?.children ?? A(g)("el.tour.previous")), 1)]),
				_: 1
			}, 16, ["type"])) : v("v-if", !0), A(b) <= A(x) - 1 ? (o(), k(A(_e), l({
				key: 1,
				size: "small",
				type: A(M) === "primary" ? "default" : "primary"
			}, F(r.nextButtonProps), { onClick: oe }), {
				default: w(() => [n(i(r.nextButtonProps?.children ?? (A(b) === A(x) - 1 ? A(g)("el.tour.finish") : A(g)("el.tour.next"))), 1)]),
				_: 1
			}, 16, ["type"])) : v("v-if", !0)], 2)], 2)
		], 64));
	}
}), _n = ee(fn, { TourStep: gn }), vn = N(gn);
//#endregion
export { _n as ElTour, _n as default, vn as ElTourStep, Se as tourContentEmits, xe as tourContentProps, we as tourEmits, be as tourPlacements, Ce as tourProps, mn as tourStepEmits, pn as tourStepProps, ye as tourStrategies };
