globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { B as n, Bt as r, J as i, Jt as a, Nt as o, Ut as s, Wt as c, ct as l, fn as u, kn as d, kt as f, sn as p, un as m, vn as h, wn as g, yt as _ } from "../shared/core.js";
import { Bt as v, Ht as y, Jn as b, Qn as x, Rt as S, Sr as C, Vt as w, Wn as T, br as E, dr as D, en as O, gr as k, lr as A, nr as j, pr as M, rn as N, sr as P, tt as F, ur as I, wr as L, zt as R } from "../shared/antd-core.js";
import { l as ee } from "./auto-complete.js";
import { d as te, f as ne, u as z } from "./breadcrumb.js";
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/TabContext.js
var B = /* @__PURE__ */ t(d()), re = /*#__PURE__*/ (0, B.createContext)(null), V = (e) => {
	let { activeTabOffset: t, horizontal: n, rtl: i, indicator: a = {} } = e, { size: o, align: s = "center" } = a, [c, l] = (0, B.useState)(), u = (0, B.useRef)(), d = B.useCallback((e) => typeof o == "function" ? o(e) : typeof o == "number" ? o : e, [o]);
	function f() {
		r.cancel(u.current);
	}
	return (0, B.useEffect)(() => {
		let e = {};
		if (t) if (n) {
			e.width = d(t.width);
			let n = i ? "right" : "left";
			s === "start" && (e[n] = t[n]), s === "center" && (e[n] = t[n] + t.width / 2, e.transform = i ? "translateX(50%)" : "translateX(-50%)"), s === "end" && (e[n] = t[n] + t.width, e.transform = "translateX(-100%)");
		} else e.height = d(t.height), s === "start" && (e.top = t.top), s === "center" && (e.top = t.top + t.height / 2, e.transform = "translateY(-50%)"), s === "end" && (e.top = t.top + t.height, e.transform = "translateY(-100%)");
		return f(), u.current = r(() => {
			c && e && Object.keys(e).every((t) => {
				let n = e[t], r = c[t];
				return typeof n == "number" && typeof r == "number" ? Math.round(n) === Math.round(r) : n === r;
			}) || l(e);
		}), f;
	}, [
		JSON.stringify(t),
		n,
		i,
		s,
		d
	]), { style: c };
}, H = {
	width: 0,
	height: 0,
	left: 0,
	top: 0
};
function ie(e, t, n) {
	return (0, B.useMemo)(() => {
		let n = /* @__PURE__ */ new Map(), r = t.get(e[0]?.key) || H, i = r.left + r.width;
		for (let r = 0; r < e.length; r += 1) {
			let { key: a } = e[r], o = t.get(a);
			o ||= t.get(e[r - 1]?.key) || H;
			let s = n.get(a) || { ...o };
			s.right = i - s.left - s.width, n.set(a, s);
		}
		return n;
	}, [
		e.map((e) => e.key).join("_"),
		t,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/hooks/useSyncState.js
function U(e, t) {
	let n = B.useRef(e), [, r] = B.useState({});
	function i(e) {
		let i = typeof e == "function" ? e(n.current) : e;
		i !== n.current && t(i, n.current), n.current = i, r({});
	}
	return [n.current, i];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/hooks/useTouchMove.js
var ae = .1, W = .01, G = 20, K = .995 ** G;
function oe(e, t) {
	let [n, r] = (0, B.useState)(), [i, a] = (0, B.useState)(0), [o, s] = (0, B.useState)(0), [c, l] = (0, B.useState)(), u = (0, B.useRef)();
	function d(e) {
		let { screenX: t, screenY: n } = e.touches[0];
		r({
			x: t,
			y: n
		}), window.clearInterval(u.current);
	}
	function f(e) {
		if (!n) return;
		let { screenX: o, screenY: c } = e.touches[0];
		r({
			x: o,
			y: c
		});
		let u = o - n.x, d = c - n.y;
		t(u, d);
		let f = Date.now();
		a(f), s(f - i), l({
			x: u,
			y: d
		});
	}
	function p() {
		if (n && (r(null), l(null), c)) {
			let e = c.x / o, n = c.y / o;
			if (Math.max(Math.abs(e), Math.abs(n)) < ae) return;
			let r = e, i = n;
			u.current = window.setInterval(() => {
				if (Math.abs(r) < W && Math.abs(i) < W) {
					window.clearInterval(u.current);
					return;
				}
				r *= K, i *= K, t(r * G, i * G);
			}, G);
		}
	}
	let m = (0, B.useRef)();
	function h(e) {
		let { deltaX: n, deltaY: r } = e, i = 0, a = Math.abs(n), o = Math.abs(r);
		a === o ? i = m.current === "x" ? n : r : a > o ? (i = n, m.current = "x") : (i = r, m.current = "y"), t(-i, -i) && e.preventDefault();
	}
	let g = (0, B.useRef)(null);
	g.current = {
		onTouchStart: d,
		onTouchMove: f,
		onTouchEnd: p,
		onWheel: h
	}, B.useEffect(() => {
		function t(e) {
			g.current.onTouchStart(e);
		}
		function n(e) {
			g.current.onTouchMove(e);
		}
		function r(e) {
			g.current.onTouchEnd(e);
		}
		function i(e) {
			g.current.onWheel(e);
		}
		return document.addEventListener("touchmove", n, { passive: !1 }), document.addEventListener("touchend", r, { passive: !0 }), e.current.addEventListener("touchstart", t, { passive: !0 }), e.current.addEventListener("wheel", i, { passive: !1 }), () => {
			document.removeEventListener("touchmove", n), document.removeEventListener("touchend", r);
		};
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/hooks/useUpdate.js
function se(e) {
	let [t, n] = (0, B.useState)(0), r = (0, B.useRef)(0), i = (0, B.useRef)();
	return i.current = e, m(() => {
		i.current?.();
	}, [t]), () => {
		r.current === t && (r.current += 1, n(r.current));
	};
}
function ce(e) {
	let t = (0, B.useRef)([]), [, n] = (0, B.useState)({}), r = (0, B.useRef)(typeof e == "function" ? e() : e), i = se(() => {
		let e = r.current;
		t.current.forEach((t) => {
			e = t(e);
		}), t.current = [], r.current = e, n({});
	});
	function a(e) {
		t.current.push(e), i();
	}
	return [r.current, a];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/hooks/useVisibleRange.js
var q = {
	width: 0,
	height: 0,
	left: 0,
	top: 0,
	right: 0
};
function le(e, t, n, r, i, a, { tabs: o, tabPosition: s, rtl: c }) {
	let l, u, d;
	return ["top", "bottom"].includes(s) ? (l = "width", u = c ? "right" : "left", d = Math.abs(n)) : (l = "height", u = "top", d = -n), (0, B.useMemo)(() => {
		if (!o.length) return [0, 0];
		let n = o.length, r = n;
		for (let i = 0; i < n; i += 1) {
			let n = e.get(o[i].key) || q;
			if (Math.floor(n[u] + n[l]) > Math.floor(d + t)) {
				r = i - 1;
				break;
			}
		}
		let i = 0;
		for (let t = n - 1; t >= 0; --t) if ((e.get(o[t].key) || q)[u] < d) {
			i = t + 1;
			break;
		}
		return i > r ? [0, -1] : [i, r];
	}, [
		e,
		t,
		r,
		i,
		a,
		d,
		s,
		o.map((e) => e.key).join("_"),
		c
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/util.js
function ue(e) {
	let t;
	return e instanceof Map ? (t = {}, e.forEach((e, n) => {
		t[n] = e;
	})) : t = e, JSON.stringify(t);
}
var J = "TABS_DQ";
function de(e) {
	return String(e).replace(/"/g, J);
}
function fe(e, t, n, r) {
	return !(!n || r || e === !1 || e === void 0 && (t === !1 || t === null));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/TabNavList/AddButton.js
var pe = /*#__PURE__*/ B.forwardRef((e, t) => {
	let { prefixCls: n, editable: r, locale: i, style: a } = e;
	return !r || r.showAdd === !1 ? null : /*#__PURE__*/ B.createElement("button", {
		ref: t,
		type: "button",
		className: `${n}-nav-add`,
		style: a,
		"aria-label": i?.addAriaLabel || "Add tab",
		onClick: (e) => {
			r.onEdit("add", { event: e });
		}
	}, r.addIcon || "+");
}), me = /*#__PURE__*/ B.forwardRef((e, t) => {
	let { position: n, prefixCls: r, extra: i } = e;
	if (!i) return null;
	let a, o = {};
	return typeof i == "object" && !/*#__PURE__*/ B.isValidElement(i) ? o = i : o.right = i, n === "right" && (a = o.right), n === "left" && (a = o.left), a ? /*#__PURE__*/ B.createElement("div", {
		className: `${r}-extra-content`,
		ref: t
	}, a) : null;
});
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/TabNavList/OperationNode.js
function Y() {
	return Y = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Y.apply(this, arguments);
}
var he = /*#__PURE__*/ B.forwardRef((e, t) => {
	let { prefixCls: n, id: r, tabs: i, locale: s, mobile: c, more: l = {}, style: u, className: d, editable: f, tabBarGutter: p, rtl: m, removeAriaLabel: h, onTabClick: g, getPopupContainer: _, popupClassName: v, popupStyle: y, classNames: b, styles: x } = e, [S, C] = (0, B.useState)(!1), [w, T] = (0, B.useState)(null), { icon: E = "More" } = l, D = `${r}-more-popup`, O = `${n}-dropdown`, k = w === null ? null : `${D}-${w}`, A = s?.dropdownAriaLabel;
	function j(e, t) {
		e.preventDefault(), e.stopPropagation(), f.onEdit("remove", {
			key: t,
			event: e
		});
	}
	let M = /*#__PURE__*/ B.createElement(z, {
		onClick: ({ key: e, domEvent: t }) => {
			g(e, t), C(!1);
		},
		prefixCls: `${O}-menu`,
		id: D,
		tabIndex: -1,
		role: "listbox",
		"aria-activedescendant": k,
		selectedKeys: [w],
		"aria-label": A === void 0 ? "expanded dropdown" : A
	}, i.map((e) => {
		let { closable: t, disabled: n, closeIcon: i, key: a, label: s } = e, c = fe(t, i, f, n);
		return /*#__PURE__*/ B.createElement(te, {
			key: a,
			id: `${D}-${a}`,
			role: "option",
			"aria-controls": r && `${r}-panel-${a}`,
			disabled: n
		}, /*#__PURE__*/ B.createElement("span", null, s), c && /*#__PURE__*/ B.createElement("button", {
			type: "button",
			"aria-label": h || "remove",
			tabIndex: 0,
			className: o(`${O}-menu-item-remove`, b?.remove),
			style: x?.remove,
			onClick: (e) => {
				e.stopPropagation(), j(e, a);
			}
		}, i || f.removeIcon || "×"));
	}));
	function N(e) {
		let t = i.filter((e) => !e.disabled), n = t.findIndex((e) => e.key === w) || 0, r = t.length;
		for (let i = 0; i < r; i += 1) {
			n = (n + e + r) % r;
			let i = t[n];
			if (!i.disabled) {
				T(i.key);
				return;
			}
		}
	}
	function P(e) {
		let { which: t } = e;
		if (!S) {
			[
				a.DOWN,
				a.SPACE,
				a.ENTER
			].includes(t) && (C(!0), e.preventDefault());
			return;
		}
		switch (t) {
			case a.UP:
				N(-1), e.preventDefault();
				break;
			case a.DOWN:
				N(1), e.preventDefault();
				break;
			case a.ESC:
				C(!1);
				break;
			case a.SPACE:
			case a.ENTER:
				w !== null && g(w, e);
				break;
		}
	}
	(0, B.useEffect)(() => {
		let e = document.getElementById(k);
		e?.scrollIntoView && e.scrollIntoView(!1);
	}, [k, w]), (0, B.useEffect)(() => {
		S || T(null);
	}, [S]);
	let F = { marginInlineStart: p };
	i.length || (F.visibility = "hidden", F.order = 1);
	let I = o(v, { [`${O}-rtl`]: m }), L = c ? null : /*#__PURE__*/ B.createElement(ne, Y({
		prefixCls: O,
		overlay: M,
		visible: i.length ? S : !1,
		onVisibleChange: C,
		overlayClassName: I,
		overlayStyle: y,
		mouseEnterDelay: .1,
		mouseLeaveDelay: .1,
		getPopupContainer: _
	}, l), /*#__PURE__*/ B.createElement("button", {
		type: "button",
		className: `${n}-nav-more`,
		style: F,
		"aria-haspopup": "listbox",
		"aria-controls": D,
		id: `${r}-more`,
		"aria-expanded": S,
		onKeyDown: P
	}, E));
	return /*#__PURE__*/ B.createElement("div", {
		className: o(`${n}-nav-operations`, d),
		style: u,
		ref: t
	}, L, /*#__PURE__*/ B.createElement(pe, {
		prefixCls: n,
		locale: s,
		editable: f
	}));
}), ge = /*#__PURE__*/ B.memo(he, (e, t) => t.tabMoving), _e = (e) => {
	let { prefixCls: t, id: n, active: r, focus: i, tab: { key: a, label: s, disabled: c, closeIcon: l, icon: u }, closable: d, renderWrapper: f, removeAriaLabel: p, editable: m, onClick: h, onFocus: g, onBlur: _, onKeyDown: v, onMouseDown: y, onMouseUp: b, styles: x, classNames: S, tabCount: C, currentPosition: w } = e, T = `${t}-tab`, E = fe(d, l, m, c);
	function D(e) {
		c || h(e);
	}
	function O(e) {
		e.preventDefault(), e.stopPropagation(), m.onEdit("remove", {
			key: a,
			event: e
		});
	}
	let k = B.useMemo(() => u && typeof s == "string" ? /*#__PURE__*/ B.createElement("span", null, s) : s, [s, u]), A = B.useRef(null);
	B.useEffect(() => {
		i && A.current && A.current.focus();
	}, [i]);
	let j = /*#__PURE__*/ B.createElement("div", {
		key: a,
		"data-node-key": de(a),
		className: o(T, S?.item, {
			[`${T}-with-remove`]: E,
			[`${T}-active`]: r,
			[`${T}-disabled`]: c,
			[`${T}-focus`]: i
		}),
		style: x?.item,
		onClick: D
	}, /*#__PURE__*/ B.createElement("div", {
		ref: A,
		role: "tab",
		"aria-selected": r,
		id: n && `${n}-tab-${a}`,
		className: `${T}-btn`,
		"aria-controls": n && `${n}-panel-${a}`,
		"aria-disabled": c,
		tabIndex: c ? null : r ? 0 : -1,
		onClick: (e) => {
			e.stopPropagation(), D(e);
		},
		onKeyDown: v,
		onMouseDown: y,
		onMouseUp: b,
		onFocus: g,
		onBlur: _
	}, i && /*#__PURE__*/ B.createElement("div", {
		"aria-live": "polite",
		style: {
			width: 0,
			height: 0,
			position: "absolute",
			overflow: "hidden",
			opacity: 0
		}
	}, `Tab ${w} of ${C}`), u && /*#__PURE__*/ B.createElement("span", { className: `${T}-icon` }, u), s && k), E && /*#__PURE__*/ B.createElement("button", {
		type: "button",
		"aria-label": p || "remove",
		tabIndex: r ? 0 : -1,
		className: o(`${T}-remove`, S?.remove),
		style: x?.remove,
		onClick: (e) => {
			e.stopPropagation(), O(e);
		}
	}, l || m.removeIcon || "×"));
	return f ? f(j) : j;
};
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/TabNavList/index.js
function ve() {
	return ve = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ve.apply(this, arguments);
}
var ye = (e, t) => {
	let { offsetWidth: n, offsetHeight: r, offsetTop: i, offsetLeft: a } = e, { width: o, height: s, left: c, top: l } = e.getBoundingClientRect();
	return Math.abs(o - n) < 1 ? [
		o,
		s,
		c - t.left,
		l - t.top
	] : [
		n,
		r,
		a,
		i
	];
}, be = (e) => {
	let { offsetWidth: t = 0, offsetHeight: n = 0 } = e.current || {};
	if (e.current) {
		let { width: n, height: r } = e.current.getBoundingClientRect();
		if (Math.abs(n - t) < 1) return [n, r];
	}
	return [t, n];
}, xe = (e, t) => e[+!t], Se = /*#__PURE__*/ B.forwardRef((e, t) => {
	let { className: n, style: r, id: i, animated: a, activeKey: s, rtl: c, extra: l, editable: d, locale: f, tabPosition: p, tabBarGutter: m, children: g, onTabClick: _, onTabScroll: v, indicator: y, classNames: b, styles: x } = e, { prefixCls: S, tabs: C } = B.useContext(re), w = (0, B.useRef)(null), T = (0, B.useRef)(null), E = (0, B.useRef)(null), D = (0, B.useRef)(null), O = (0, B.useRef)(null), k = (0, B.useRef)(null), A = (0, B.useRef)(null), j = p === "top" || p === "bottom", [M, N] = U(0, (e, t) => {
		j && v && v({ direction: e > t ? "left" : "right" });
	}), [P, F] = U(0, (e, t) => {
		!j && v && v({ direction: e > t ? "top" : "bottom" });
	}), [I, R] = (0, B.useState)([0, 0]), [ee, te] = (0, B.useState)([0, 0]), [ne, z] = (0, B.useState)([0, 0]), [H, ae] = (0, B.useState)([0, 0]), [W, G] = ce(/* @__PURE__ */ new Map()), K = ie(C, W, ee[0]), q = xe(I, j), J = xe(ee, j), Y = xe(ne, j), he = xe(H, j), Se = Math.floor(q) < Math.floor(J + Y), X = Se ? q - he : q - Y, Ce = `${S}-nav-operations-hidden`, Z = 0, we = 0;
	j && c ? (Z = 0, we = Math.max(0, J - X)) : (Z = Math.min(0, X - J), we = 0);
	function Te(e) {
		return e < Z ? Z : e > we ? we : e;
	}
	let Q = (0, B.useRef)(null), [Ee, De] = (0, B.useState)();
	function Oe() {
		De(Date.now());
	}
	function ke() {
		Q.current && clearTimeout(Q.current);
	}
	oe(D, (e, t) => {
		function n(e, t) {
			e((e) => Te(e + t));
		}
		return Se ? (j ? n(N, e) : n(F, t), ke(), Oe(), !0) : !1;
	}), (0, B.useEffect)(() => (ke(), Ee && (Q.current = setTimeout(() => {
		De(0);
	}, 100)), ke), [Ee]);
	let [Ae, je] = le(K, X, j ? M : P, J, Y, he, {
		...e,
		tabs: C
	}), Me = u((e = s) => {
		let t = K.get(e) || {
			width: 0,
			height: 0,
			left: 0,
			right: 0,
			top: 0
		};
		if (j) {
			let e = M;
			c ? t.right < M ? e = t.right : t.right + t.width > M + X && (e = t.right + t.width - X) : t.left < -M ? e = -t.left : t.left + t.width > -M + X && (e = -(t.left + t.width - X)), F(0), N(Te(e));
		} else {
			let e = P;
			t.top < -P ? e = -t.top : t.top + t.height > -P + X && (e = -(t.top + t.height - X)), N(0), F(Te(e));
		}
	}), [Ne, Pe] = (0, B.useState)(), [Fe, Ie] = (0, B.useState)(!1), $ = C.filter((e) => !e.disabled).map((e) => e.key), Le = (e) => {
		let t = $.indexOf(Ne || s), n = $.length, r = $[(t + e + n) % n];
		Pe(r);
	}, Re = (e, t) => {
		let n = $.indexOf(e), r = C.find((t) => t.key === e);
		fe(r?.closable, r?.closeIcon, d, r?.disabled) && (t.preventDefault(), t.stopPropagation(), d.onEdit("remove", {
			key: e,
			event: t
		}), n === $.length - 1 ? Le(-1) : Le(1));
	}, ze = (e, t) => {
		Ie(!0), t.button === 1 && Re(e, t);
	}, Be = (e) => {
		let { code: t } = e, n = c && j, r = $[0], i = $[$.length - 1];
		switch (t) {
			case "ArrowLeft":
				j && Le(n ? 1 : -1);
				break;
			case "ArrowRight":
				j && Le(n ? -1 : 1);
				break;
			case "ArrowUp":
				e.preventDefault(), j || Le(-1);
				break;
			case "ArrowDown":
				e.preventDefault(), j || Le(1);
				break;
			case "Home":
				e.preventDefault(), Pe(r);
				break;
			case "End":
				e.preventDefault(), Pe(i);
				break;
			case "Enter":
			case "Space":
				e.preventDefault(), _(Ne ?? s, e);
				break;
			case "Backspace":
			case "Delete":
				Re(Ne, e);
				break;
		}
	}, Ve = {};
	j ? Ve.marginInlineStart = m : Ve.marginTop = m;
	let He = C.map((e, t) => {
		let { key: n } = e;
		return /*#__PURE__*/ B.createElement(_e, {
			id: i,
			prefixCls: S,
			key: n,
			tab: e,
			classNames: {
				item: b?.item,
				remove: b?.remove
			},
			styles: {
				item: t === 0 ? x?.item : {
					...Ve,
					...x?.item
				},
				remove: x?.remove
			},
			closable: e.closable,
			editable: d,
			active: n === s,
			focus: n === Ne,
			renderWrapper: g,
			removeAriaLabel: f?.removeAriaLabel,
			tabCount: $.length,
			currentPosition: t + 1,
			onClick: (e) => {
				_(n, e);
			},
			onKeyDown: Be,
			onFocus: () => {
				Fe || Pe(n), Me(n), Oe(), D.current && (c || (D.current.scrollLeft = 0), D.current.scrollTop = 0);
			},
			onBlur: () => {
				Pe(void 0);
			},
			onMouseDown: (e) => ze(n, e),
			onMouseUp: () => {
				Ie(!1);
			}
		});
	}), Ue = () => G(() => {
		let e = /* @__PURE__ */ new Map(), t = O.current?.getBoundingClientRect();
		return C.forEach(({ key: n }) => {
			let r = O.current?.querySelector(`[data-node-key="${de(n)}"]`);
			if (r) {
				let [i, a, o, s] = ye(r, t);
				e.set(n, {
					width: i,
					height: a,
					left: o,
					top: s
				});
			}
		}), e;
	});
	(0, B.useEffect)(() => {
		Ue();
	}, [C.map((e) => e.key).join("_")]);
	let We = se(() => {
		let e = be(w), t = be(T), n = be(E);
		R([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
		let r = be(A);
		z(r), ae(be(k));
		let i = be(O);
		te([i[0] - r[0], i[1] - r[1]]), Ue();
	}), Ge = C.slice(0, Ae), Ke = C.slice(je + 1), qe = [...Ge, ...Ke], Je = K.get(s), { style: Ye } = V({
		activeTabOffset: Je,
		horizontal: j,
		indicator: y,
		rtl: c
	});
	(0, B.useEffect)(() => {
		Me();
	}, [
		s,
		Z,
		we,
		ue(Je),
		ue(K),
		j
	]), (0, B.useEffect)(() => {
		We();
	}, [c]);
	let Xe = !!qe.length, Ze = `${S}-nav-wrap`, Qe, $e, et, tt;
	return j ? c ? ($e = M > 0, Qe = M !== we) : (Qe = M < 0, $e = M !== Z) : (et = P < 0, tt = P !== Z), /*#__PURE__*/ B.createElement(L, { onResize: We }, /*#__PURE__*/ B.createElement("div", {
		ref: h(t, w),
		role: "tablist",
		"aria-orientation": j ? "horizontal" : "vertical",
		className: o(`${S}-nav`, n, b?.header),
		style: {
			...x?.header,
			...r
		},
		onKeyDown: () => {
			Oe();
		}
	}, /*#__PURE__*/ B.createElement(me, {
		ref: T,
		position: "left",
		extra: l,
		prefixCls: S
	}), /*#__PURE__*/ B.createElement(L, { onResize: We }, /*#__PURE__*/ B.createElement("div", {
		className: o(Ze, {
			[`${Ze}-ping-left`]: Qe,
			[`${Ze}-ping-right`]: $e,
			[`${Ze}-ping-top`]: et,
			[`${Ze}-ping-bottom`]: tt
		}),
		ref: D
	}, /*#__PURE__*/ B.createElement(L, { onResize: We }, /*#__PURE__*/ B.createElement("div", {
		ref: O,
		className: `${S}-nav-list`,
		style: {
			transform: `translate(${M}px, ${P}px)`,
			transition: Ee ? "none" : void 0
		}
	}, He, /*#__PURE__*/ B.createElement(pe, {
		ref: A,
		prefixCls: S,
		locale: f,
		editable: d,
		style: {
			...He.length === 0 ? void 0 : Ve,
			visibility: Xe ? "hidden" : null
		}
	}), /*#__PURE__*/ B.createElement("div", {
		className: o(`${S}-ink-bar`, b?.indicator, { [`${S}-ink-bar-animated`]: a.inkBar }),
		style: {
			...Ye,
			...x?.indicator
		}
	}))))), /*#__PURE__*/ B.createElement(ge, ve({}, e, {
		removeAriaLabel: f?.removeAriaLabel,
		ref: k,
		prefixCls: S,
		tabs: qe,
		className: !Xe && Ce,
		popupStyle: x?.popup,
		tabMoving: !!Ee
	})), /*#__PURE__*/ B.createElement(me, {
		ref: E,
		position: "right",
		extra: l,
		prefixCls: S
	})));
}), X = ({ renderTabBar: e, ...t }) => e ? e(t, Se) : /*#__PURE__*/ B.createElement(Se, t), Ce = /*#__PURE__*/ B.forwardRef((e, t) => {
	let { prefixCls: n, className: r, style: i, id: a, active: s, tabKey: c, children: l } = e, u = B.Children.count(l) > 0;
	return /*#__PURE__*/ B.createElement("div", {
		id: a && `${a}-panel-${c}`,
		role: "tabpanel",
		tabIndex: s && u ? 0 : -1,
		"aria-labelledby": a && `${a}-tab-${c}`,
		"aria-hidden": !s,
		style: i,
		className: o(n, s && `${n}-active`, r),
		ref: t
	}, l);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/TabPanelList/index.js
function Z() {
	return Z = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Z.apply(this, arguments);
}
var we = (e) => {
	let { id: t, activeKey: n, animated: r, tabPosition: i, destroyOnHidden: a, contentStyle: s, contentClassName: c } = e, { prefixCls: l, tabs: u } = B.useContext(re), d = r.tabPane, f = `${l}-tabpane`;
	return /*#__PURE__*/ B.createElement("div", { className: o(`${l}-content-holder`) }, /*#__PURE__*/ B.createElement("div", { className: o(`${l}-content`, `${l}-content-${i}`, { [`${l}-content-animated`]: d }) }, u.map((e) => {
		let { key: i, forceRender: l, style: u, className: p, destroyOnHidden: m, ...h } = e, g = i === n;
		return /*#__PURE__*/ B.createElement(j, Z({
			key: i,
			visible: g,
			forceRender: l,
			removeOnLeave: !!(a ?? m),
			leavedClassName: `${f}-hidden`
		}, r.tabPaneMotion), ({ style: e, className: n }, r) => /*#__PURE__*/ B.createElement(Ce, Z({}, h, {
			prefixCls: f,
			id: t,
			tabKey: i,
			animated: d,
			active: g,
			style: {
				...s,
				...u,
				...e
			},
			className: o(c, p, n),
			ref: r
		})));
	})));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/hooks/useAnimateConfig.js
function Te(e = {
	inkBar: !0,
	tabPane: !1
}) {
	let t;
	return t = e === !1 ? {
		inkBar: !1,
		tabPane: !1
	} : e === !0 ? {
		inkBar: !0,
		tabPane: !1
	} : {
		inkBar: !0,
		...typeof e == "object" ? e : {}
	}, t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (t.tabPane = !1), t;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tabs@1.9.1_re_1a9d52bab4f3d078d50a5e00a34d7aca/node_modules/@rc-component/tabs/es/Tabs.js
function Q() {
	return Q = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Q.apply(this, arguments);
}
var Ee = 0, De = /* @__PURE__ */ B.forwardRef((e, t) => {
	let { id: n, prefixCls: r = "rc-tabs", className: i, items: a, direction: s, activeKey: l, defaultActiveKey: u, editable: d, animated: f, tabPosition: m = "top", tabBarGutter: h, tabBarStyle: g, tabBarExtraContent: _, locale: v, more: y, destroyOnHidden: b, renderTabBar: x, onChange: S, onTabClick: C, onTabScroll: w, getPopupContainer: T, popupClassName: E, indicator: D, classNames: O, styles: k, ...A } = e, j = B.useMemo(() => (a || []).filter((e) => e && typeof e == "object" && "key" in e), [a]), M = s === "rtl", N = Te(f), [P, F] = (0, B.useState)(!1);
	(0, B.useEffect)(() => {
		F(c());
	}, []);
	let [I, L] = p(u ?? j[0]?.key, l), [R, ee] = (0, B.useState)(() => j.findIndex((e) => e.key === I));
	(0, B.useEffect)(() => {
		let e = j.findIndex((e) => e.key === I);
		e === -1 && (e = Math.max(0, Math.min(R, j.length - 1)), L(j[e]?.key)), ee(e);
	}, [
		j.map((e) => e.key).join("_"),
		I,
		R
	]);
	let [te, ne] = p(null, n);
	(0, B.useEffect)(() => {
		n || (ne(`rc-tabs-${Ee}`), Ee += 1);
	}, []);
	function z(e, t) {
		C?.(e, t);
		let n = e !== I;
		L(e), n && S?.(e);
	}
	let V = {
		id: te,
		activeKey: I,
		animated: N,
		tabPosition: m,
		rtl: M,
		mobile: P
	}, H = {
		...V,
		editable: d,
		locale: v,
		more: y,
		tabBarGutter: h,
		onTabClick: z,
		onTabScroll: w,
		extra: _,
		style: g,
		getPopupContainer: T,
		popupClassName: o(E, O?.popup),
		indicator: D,
		styles: k,
		classNames: O
	}, ie = B.useMemo(() => ({
		tabs: j,
		prefixCls: r
	}), [j, r]);
	return /*#__PURE__*/ B.createElement(re.Provider, { value: ie }, /*#__PURE__*/ B.createElement("div", Q({
		ref: t,
		id: n,
		className: o(r, `${r}-${m}`, {
			[`${r}-mobile`]: P,
			[`${r}-editable`]: d,
			[`${r}-rtl`]: M
		}, i)
	}, A), /*#__PURE__*/ B.createElement(X, Q({}, H, { renderTabBar: x })), /*#__PURE__*/ B.createElement(we, Q({ destroyOnHidden: b }, V, {
		contentStyle: k?.content,
		contentClassName: O?.content,
		animated: N
	}))));
}), Oe = {
	motionAppear: !1,
	motionEnter: !0,
	motionLeave: !0
};
function ke(e, t = {
	inkBar: !0,
	tabPane: !1
}) {
	let n;
	return n = t === !1 ? {
		inkBar: !1,
		tabPane: !1
	} : t === !0 ? {
		inkBar: !0,
		tabPane: !0
	} : {
		inkBar: !0,
		...x(t) ? t : {}
	}, n.tabPane && (n.tabPaneMotion = {
		...Oe,
		motionName: N(e, "switch")
	}), n;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/tabs/hooks/useLegacyItems.js
function Ae(e) {
	return e.filter((e) => e);
}
function je(e, t) {
	return e ? e.map((e) => ({
		...e,
		destroyOnHidden: e.destroyOnHidden ?? e.destroyInactiveTabPane
	})) : Ae(g(t).map((e) => {
		if (/*#__PURE__*/ B.isValidElement(e)) {
			let { key: t, props: n } = e, { tab: r, ...i } = n || {};
			return {
				key: String(t),
				...i,
				label: r
			};
		}
		return null;
	}));
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/tabs/style/motion.js
var Me = (e) => {
	let { componentCls: t, motionDurationSlow: n } = e;
	return [{ [t]: { [`${t}-switch`]: {
		"&-appear, &-enter": {
			transition: "none",
			"&-start": { opacity: 0 },
			"&-active": {
				opacity: 1,
				transition: `opacity ${n}`
			}
		},
		"&-leave": {
			position: "absolute",
			transition: "none",
			inset: 0,
			"&-start": { opacity: 1 },
			"&-active": {
				opacity: 0,
				transition: `opacity ${n}`
			}
		}
	} } }, [S(e, "slide-up"), S(e, "slide-down")]];
}, Ne = (e) => {
	let { componentCls: t, tabsCardPadding: n, cardBg: r, cardGutter: i, colorBorderSecondary: a, itemSelectedColor: o } = e;
	return { [`${t}-card`]: {
		[`> ${t}-nav, > div > ${t}-nav`]: {
			[`${t}-tab`]: {
				margin: 0,
				padding: n,
				background: r,
				border: `${f(e.lineWidth)} ${e.lineType} ${a}`,
				transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
			},
			[`${t}-tab-active`]: {
				color: o,
				background: e.colorBgContainer
			},
			[`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]: I(e, -3),
			[`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]: { outline: "none" },
			[`${t}-ink-bar`]: { visibility: "hidden" }
		},
		[`&${t}-top, &${t}-bottom`]: { [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-tab + ${t}-tab`]: { marginLeft: {
			_skip_check_: !0,
			value: f(i)
		} } } },
		[`&${t}-top`]: { [`> ${t}-nav, > div > ${t}-nav`]: {
			[`${t}-tab`]: { borderRadius: `${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)} 0 0` },
			[`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer }
		} },
		[`&${t}-bottom`]: { [`> ${t}-nav, > div > ${t}-nav`]: {
			[`${t}-tab`]: { borderRadius: `0 0 ${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)}` },
			[`${t}-tab-active`]: { borderTopColor: e.colorBgContainer }
		} },
		[`&${t}-left, &${t}-right`]: { [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-tab + ${t}-tab`]: { marginTop: f(i) } } },
		[`&${t}-left`]: { [`> ${t}-nav, > div > ${t}-nav`]: {
			[`${t}-tab`]: { borderRadius: {
				_skip_check_: !0,
				value: `${f(e.borderRadiusLG)} 0 0 ${f(e.borderRadiusLG)}`
			} },
			[`${t}-tab-active`]: { borderRightColor: {
				_skip_check_: !0,
				value: e.colorBgContainer
			} }
		} },
		[`&${t}-right`]: { [`> ${t}-nav, > div > ${t}-nav`]: {
			[`${t}-tab`]: { borderRadius: {
				_skip_check_: !0,
				value: `0 ${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)} 0`
			} },
			[`${t}-tab-active`]: { borderLeftColor: {
				_skip_check_: !0,
				value: e.colorBgContainer
			} }
		} }
	} };
}, Pe = (e) => {
	let { antCls: t, componentCls: n, itemHoverColor: r, dropdownEdgeChildVerticalPadding: i } = e;
	return { [`${n}-dropdown`]: {
		...M(e),
		position: "absolute",
		top: -9999,
		left: {
			_skip_check_: !0,
			value: -9999
		},
		zIndex: e.zIndexPopup,
		display: "block",
		"&-hidden": { display: "none" },
		[`&${t}-slide-down-enter${t}-slide-down-enter-active${n}-dropdown-placement-bottomLeft,
        &${t}-slide-down-appear${t}-slide-down-appear-active${n}-dropdown-placement-bottomLeft,
        &${t}-slide-down-enter${t}-slide-down-enter-active${n}-dropdown-placement-bottom,
        &${t}-slide-down-appear${t}-slide-down-appear-active${n}-dropdown-placement-bottom,
        &${t}-slide-down-enter${t}-slide-down-enter-active${n}-dropdown-placement-bottomRight,
        &${t}-slide-down-appear${t}-slide-down-appear-active${n}-dropdown-placement-bottomRight`]: { animationName: w },
		[`&${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
        &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft,
        &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-top,
        &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-top,
        &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topRight,
        &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topRight`]: { animationName: R },
		[`&${t}-slide-down-leave${t}-slide-down-leave-active${n}-dropdown-placement-bottomLeft,
        &${t}-slide-down-leave${t}-slide-down-leave-active${n}-dropdown-placement-bottom,
        &${t}-slide-down-leave${t}-slide-down-leave-active${n}-dropdown-placement-bottomRight`]: { animationName: y },
		[`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft,
        &${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-top,
        &${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topRight`]: { animationName: v },
		[`${n}-dropdown-menu`]: {
			maxHeight: e.tabsDropdownHeight,
			margin: 0,
			padding: `${f(i)} 0`,
			overflowX: "hidden",
			overflowY: "auto",
			textAlign: {
				_skip_check_: !0,
				value: "left"
			},
			listStyleType: "none",
			backgroundColor: e.colorBgContainer,
			backgroundClip: "padding-box",
			borderRadius: e.borderRadiusLG,
			outline: "none",
			boxShadow: e.boxShadowSecondary,
			"&-item": {
				...k,
				display: "flex",
				alignItems: "center",
				minWidth: e.tabsDropdownWidth,
				margin: 0,
				padding: `${f(e.paddingXXS)} ${f(e.paddingSM)}`,
				color: e.colorText,
				fontWeight: "normal",
				fontSize: e.fontSize,
				lineHeight: e.lineHeight,
				cursor: "pointer",
				transition: `all ${e.motionDurationSlow}`,
				"> span": {
					flex: 1,
					whiteSpace: "nowrap"
				},
				"&-remove": {
					flex: "none",
					marginLeft: {
						_skip_check_: !0,
						value: e.marginSM
					},
					color: e.colorIcon,
					fontSize: e.fontSizeSM,
					background: "transparent",
					border: 0,
					cursor: "pointer",
					"&:hover": { color: r }
				},
				"&:hover": { background: e.controlItemBgHover },
				"&-disabled": { "&, &:hover": {
					color: e.colorTextDisabled,
					background: "transparent",
					cursor: "not-allowed"
				} }
			}
		}
	} };
}, Fe = (e) => {
	let { componentCls: t, margin: n, colorBorderSecondary: r, horizontalMargin: i, verticalItemPadding: a, verticalItemMargin: o, motionDurationSlow: s, calc: c } = e;
	return {
		[`${t}-top, ${t}-bottom`]: {
			flexDirection: "column",
			[`> ${t}-nav, > div > ${t}-nav`]: {
				margin: i,
				"&::before": {
					position: "absolute",
					right: {
						_skip_check_: !0,
						value: 0
					},
					left: {
						_skip_check_: !0,
						value: 0
					},
					borderBottom: `${f(e.lineWidth)} ${e.lineType} ${r}`,
					content: "''"
				},
				[`${t}-ink-bar`]: {
					height: e.lineWidthBold,
					"&-animated": { transition: [
						"width",
						"left",
						"right"
					].map((e) => `${e} ${s}`).join(", ") }
				},
				[`${t}-nav-wrap`]: {
					"&::before, &::after": {
						top: 0,
						bottom: 0,
						width: e.controlHeight
					},
					"&::before": {
						left: {
							_skip_check_: !0,
							value: 0
						},
						boxShadow: e.boxShadowTabsOverflowLeft
					},
					"&::after": {
						right: {
							_skip_check_: !0,
							value: 0
						},
						boxShadow: e.boxShadowTabsOverflowRight
					},
					[`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
					[`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 }
				}
			}
		},
		[`${t}-top`]: { [`> ${t}-nav,
        > div > ${t}-nav`]: {
			"&::before": { bottom: 0 },
			[`${t}-ink-bar`]: { bottom: 0 }
		} },
		[`${t}-bottom`]: {
			[`> ${t}-nav, > div > ${t}-nav`]: {
				order: 1,
				marginTop: n,
				marginBottom: 0,
				"&::before": { top: 0 },
				[`${t}-ink-bar`]: { top: 0 }
			},
			[`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 }
		},
		[`${t}-left, ${t}-right`]: { [`> ${t}-nav, > div > ${t}-nav`]: {
			flexDirection: "column",
			minWidth: c(e.controlHeight).mul(1.25).equal(),
			[`${t}-tab`]: {
				padding: a,
				textAlign: "center"
			},
			[`${t}-tab + ${t}-tab`]: { margin: o },
			[`${t}-nav-wrap`]: {
				flexDirection: "column",
				"&::before, &::after": {
					right: {
						_skip_check_: !0,
						value: 0
					},
					left: {
						_skip_check_: !0,
						value: 0
					},
					height: e.controlHeight
				},
				"&::before": {
					top: 0,
					boxShadow: e.boxShadowTabsOverflowTop
				},
				"&::after": {
					bottom: 0,
					boxShadow: e.boxShadowTabsOverflowBottom
				},
				[`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
				[`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 }
			},
			[`${t}-ink-bar`]: {
				width: e.lineWidthBold,
				"&-animated": { transition: ["height", "top"].map((e) => `${e} ${s}`).join(", ") }
			},
			[`${t}-nav-list, ${t}-nav-operations`]: {
				flex: "1 0 auto",
				flexDirection: "column"
			}
		} },
		[`${t}-left`]: {
			[`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-ink-bar`]: { right: {
				_skip_check_: !0,
				value: 0
			} } },
			[`> ${t}-content-holder, > div > ${t}-content-holder`]: {
				marginLeft: {
					_skip_check_: !0,
					value: f(c(e.lineWidth).mul(-1).equal())
				},
				borderLeft: {
					_skip_check_: !0,
					value: `${f(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
				},
				[`> ${t}-content > ${t}-tabpane`]: { paddingLeft: {
					_skip_check_: !0,
					value: e.paddingLG
				} }
			}
		},
		[`${t}-right`]: {
			[`> ${t}-nav, > div > ${t}-nav`]: {
				order: 1,
				[`${t}-ink-bar`]: { left: {
					_skip_check_: !0,
					value: 0
				} }
			},
			[`> ${t}-content-holder, > div > ${t}-content-holder`]: {
				order: 0,
				marginRight: {
					_skip_check_: !0,
					value: c(e.lineWidth).mul(-1).equal()
				},
				borderRight: {
					_skip_check_: !0,
					value: `${f(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
				},
				[`> ${t}-content > ${t}-tabpane`]: { paddingRight: {
					_skip_check_: !0,
					value: e.paddingLG
				} }
			}
		}
	};
}, Ie = (e) => {
	let { componentCls: t, cardPaddingSM: n, cardPaddingLG: r, cardHeightSM: i, cardHeightLG: a, horizontalItemPaddingSM: o, horizontalItemPaddingLG: s } = e;
	return {
		[t]: {
			"&-small": { [`> ${t}-nav`]: { [`${t}-tab`]: {
				padding: o,
				fontSize: e.titleFontSizeSM
			} } },
			"&-large": { [`> ${t}-nav`]: { [`${t}-tab`]: {
				padding: s,
				fontSize: e.titleFontSizeLG,
				lineHeight: e.lineHeightLG
			} } }
		},
		[`${t}-card`]: {
			[`&${t}-small`]: {
				[`> ${t}-nav`]: {
					[`${t}-tab`]: { padding: n },
					[`${t}-nav-add`]: {
						minWidth: i,
						minHeight: i
					}
				},
				[`&${t}-bottom`]: { [`> ${t}-nav ${t}-tab`]: { borderRadius: `0 0 ${f(e.borderRadius)} ${f(e.borderRadius)}` } },
				[`&${t}-top`]: { [`> ${t}-nav ${t}-tab`]: { borderRadius: `${f(e.borderRadius)} ${f(e.borderRadius)} 0 0` } },
				[`&${t}-right`]: { [`> ${t}-nav ${t}-tab`]: { borderRadius: {
					_skip_check_: !0,
					value: `0 ${f(e.borderRadius)} ${f(e.borderRadius)} 0`
				} } },
				[`&${t}-left`]: { [`> ${t}-nav ${t}-tab`]: { borderRadius: {
					_skip_check_: !0,
					value: `${f(e.borderRadius)} 0 0 ${f(e.borderRadius)}`
				} } }
			},
			[`&${t}-large`]: { [`> ${t}-nav`]: {
				[`${t}-tab`]: { padding: r },
				[`${t}-nav-add`]: {
					minWidth: a,
					minHeight: a
				}
			} }
		}
	};
}, $ = (e) => {
	let { componentCls: t, itemActiveColor: n, itemHoverColor: r, iconCls: i, tabsHorizontalItemMargin: a, horizontalItemPadding: o, itemSelectedColor: s, itemColor: c } = e, l = `${t}-tab`;
	return {
		[l]: {
			position: "relative",
			WebkitTouchCallout: "none",
			WebkitTapHighlightColor: "transparent",
			display: "inline-flex",
			alignItems: "center",
			padding: o,
			fontSize: e.titleFontSize,
			background: "transparent",
			border: 0,
			outline: "none",
			cursor: "pointer",
			color: c,
			"&-btn, &-remove": { "&:focus:not(:focus-visible), &:active": { color: n } },
			"&-btn": {
				outline: "none",
				transition: `all ${e.motionDurationSlow}`,
				[`${l}-icon:not(:last-child)`]: { marginInlineEnd: e.marginSM }
			},
			"&-remove": {
				flex: "none",
				lineHeight: 1,
				marginRight: {
					_skip_check_: !0,
					value: e.calc(e.marginXXS).mul(-1).equal()
				},
				marginLeft: {
					_skip_check_: !0,
					value: e.marginXS
				},
				color: e.colorIcon,
				fontSize: e.fontSizeSM,
				background: "transparent",
				border: "none",
				outline: "none",
				cursor: "pointer",
				transition: `all ${e.motionDurationSlow}`,
				"&:hover": { color: e.colorTextHeading },
				...D(e)
			},
			"&:hover": { color: r },
			[`&${l}-active ${l}-btn`]: { color: s },
			[`&${l}-focus ${l}-btn:focus-visible`]: I(e),
			[`&${l}-disabled`]: {
				color: e.colorTextDisabled,
				cursor: "not-allowed"
			},
			[`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]: { "&:focus, &:active": { color: e.colorTextDisabled } },
			[`& ${l}-remove ${i}`]: {
				margin: 0,
				verticalAlign: "middle"
			},
			[`${i}:not(:last-child)`]: { marginRight: {
				_skip_check_: !0,
				value: e.marginSM
			} }
		},
		[`${l} + ${l}`]: { margin: {
			_skip_check_: !0,
			value: a
		} }
	};
}, Le = (e) => {
	let { componentCls: t, tabsHorizontalItemMarginRTL: n, iconCls: r, cardGutter: i, calc: a } = e;
	return {
		[`${t}-rtl`]: {
			direction: "rtl",
			[`${t}-nav`]: { [`${t}-tab`]: {
				margin: {
					_skip_check_: !0,
					value: n
				},
				[`${t}-tab:last-of-type`]: { marginLeft: {
					_skip_check_: !0,
					value: 0
				} },
				[r]: {
					marginRight: {
						_skip_check_: !0,
						value: 0
					},
					marginLeft: {
						_skip_check_: !0,
						value: e.marginSM
					}
				},
				[`${t}-tab-remove`]: {
					marginRight: {
						_skip_check_: !0,
						value: e.marginXS
					},
					marginLeft: {
						_skip_check_: !0,
						value: a(e.marginXXS).mul(-1).equal()
					},
					[r]: { margin: 0 }
				}
			} },
			[`&${t}-left`]: {
				[`> ${t}-nav`]: { order: 1 },
				[`> ${t}-content-holder`]: { order: 0 }
			},
			[`&${t}-right`]: {
				[`> ${t}-nav`]: { order: 0 },
				[`> ${t}-content-holder`]: { order: 1 }
			},
			[`&${t}-card${t}-top, &${t}-card${t}-bottom`]: { [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-tab + ${t}-tab`]: {
				marginRight: {
					_skip_check_: !0,
					value: i
				},
				marginLeft: {
					_skip_check_: !0,
					value: 0
				}
			} } }
		},
		[`${t}-dropdown-rtl`]: { direction: "rtl" },
		[`${t}-menu-item`]: { [`${t}-dropdown-rtl`]: { textAlign: {
			_skip_check_: !0,
			value: "right"
		} } }
	};
}, Re = (e) => {
	let { componentCls: t, tabsCardPadding: n, cardHeight: r, cardGutter: i, itemHoverColor: a, itemActiveColor: o, colorBorderSecondary: s } = e;
	return {
		[t]: {
			...M(e),
			display: "flex",
			[`> ${t}-nav, > div > ${t}-nav`]: {
				position: "relative",
				display: "flex",
				flex: "none",
				alignItems: "center",
				[`${t}-nav-wrap`]: {
					position: "relative",
					display: "flex",
					flex: "auto",
					alignSelf: "stretch",
					overflow: "hidden",
					whiteSpace: "nowrap",
					transform: "translate(0)",
					"&::before, &::after": {
						position: "absolute",
						zIndex: 1,
						opacity: 0,
						transition: `opacity ${e.motionDurationSlow}`,
						content: "''",
						pointerEvents: "none"
					}
				},
				[`${t}-nav-list`]: {
					position: "relative",
					display: "flex",
					transition: `opacity ${e.motionDurationSlow}`
				},
				[`${t}-nav-operations`]: {
					display: "flex",
					alignSelf: "stretch"
				},
				[`${t}-nav-operations-hidden`]: {
					position: "absolute",
					visibility: "hidden",
					pointerEvents: "none"
				},
				[`${t}-nav-more`]: {
					position: "relative",
					padding: n,
					background: "transparent",
					border: 0,
					color: e.colorText,
					"&::after": {
						position: "absolute",
						right: {
							_skip_check_: !0,
							value: 0
						},
						bottom: 0,
						left: {
							_skip_check_: !0,
							value: 0
						},
						height: e.calc(e.controlHeightLG).div(8).equal(),
						transform: "translateY(100%)",
						content: "''"
					}
				},
				[`${t}-nav-add`]: {
					minWidth: r,
					minHeight: r,
					marginLeft: {
						_skip_check_: !0,
						value: i
					},
					background: "transparent",
					border: `${f(e.lineWidth)} ${e.lineType} ${s}`,
					borderRadius: `${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)} 0 0`,
					outline: "none",
					cursor: "pointer",
					color: e.colorText,
					transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
					"&:hover": { color: a },
					"&:active, &:focus:not(:focus-visible)": { color: o },
					...D(e, -3)
				}
			},
			[`${t}-extra-content`]: { flex: "none" },
			[`${t}-ink-bar`]: {
				position: "absolute",
				background: e.inkBarColor,
				pointerEvents: "none"
			},
			...$(e),
			[`${t}-content`]: {
				position: "relative",
				width: "100%"
			},
			[`${t}-content-holder`]: {
				flex: "auto",
				minWidth: 0,
				minHeight: 0
			},
			[`${t}-tabpane`]: {
				...D(e),
				"&-hidden": { display: "none" }
			}
		},
		[`${t}-centered`]: { [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-nav-wrap`]: { [`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]: { margin: "auto" } } } }
	};
}, ze = P("Tabs", (e) => {
	let t = _(e, {
		tabsCardPadding: e.cardPadding,
		dropdownEdgeChildVerticalPadding: e.paddingXXS,
		tabsDropdownHeight: 200,
		tabsDropdownWidth: 120,
		tabsHorizontalItemMargin: `0 0 0 ${f(e.horizontalItemGutter)}`,
		tabsHorizontalItemMarginRTL: `0 0 0 ${f(e.horizontalItemGutter)}`
	});
	return [
		Ie(t),
		Le(t),
		Fe(t),
		Pe(t),
		Ne(t),
		Re(t),
		Me(t)
	];
}, (e) => {
	let { cardHeight: t, cardHeightSM: n, cardHeightLG: r, controlHeight: i, controlHeightLG: a } = e, o = t || a, s = n || i, c = r || a + 8;
	return {
		zIndexPopup: e.zIndexPopupBase + 50,
		cardBg: e.colorFillAlter,
		cardHeight: o,
		cardHeightSM: s,
		cardHeightLG: c,
		cardPadding: `${(o - e.fontHeight) / 2 - e.lineWidth}px ${e.padding}px`,
		cardPaddingSM: `${(s - e.fontHeight) / 2 - e.lineWidth}px ${e.paddingXS}px`,
		cardPaddingLG: `${(c - e.fontHeightLG) / 2 - e.lineWidth}px ${e.padding}px`,
		titleFontSize: e.fontSize,
		titleFontSizeLG: e.fontSizeLG,
		titleFontSizeSM: e.fontSize,
		inkBarColor: e.colorPrimary,
		horizontalMargin: `0 0 ${e.margin}px 0`,
		horizontalItemGutter: 32,
		horizontalItemMargin: "",
		horizontalItemMarginRTL: "",
		horizontalItemPadding: `${e.paddingSM}px 0`,
		horizontalItemPaddingSM: `${e.paddingXS}px 0`,
		horizontalItemPaddingLG: `${e.padding}px 0`,
		verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
		verticalItemMargin: `${e.margin}px 0 0 0`,
		itemColor: e.colorText,
		itemSelectedColor: e.colorPrimary,
		itemHoverColor: e.colorPrimaryHover,
		itemActiveColor: e.colorPrimaryActive,
		cardGutter: e.marginXXS / 2
	};
}), Be = () => null, Ve = /* @__PURE__ */ e({ default: () => He }), He = /* @__PURE__ */ B.forwardRef((e, t) => {
	let { type: r, className: a, rootClassName: s, size: c, onEdit: u, hideAdd: d, centered: f, addIcon: p, removeIcon: m, moreIcon: h, more: g, popupClassName: _, children: v, items: y, animated: x, style: S, indicatorSize: w, indicator: D, classNames: k, styles: A, destroyInactiveTabPane: j, destroyOnHidden: M, tabPlacement: N, tabPosition: P, ...F } = e, { prefixCls: I } = F, { getPrefixCls: L, direction: R, getPopupContainer: ee, className: te, style: ne, classNames: z, styles: re } = C("tabs"), { tabs: V } = B.useContext(E), H = L("tabs", I), ie = T(H), [U, ae] = ze(H, ie), W = B.useRef(null);
	B.useImperativeHandle(t, () => ({ nativeElement: W.current }));
	let G;
	r === "editable-card" && (G = {
		onEdit: (e, { key: t, event: n }) => {
			u?.(e === "add" ? n : t, e);
		},
		removeIcon: m ?? V?.removeIcon ?? /*#__PURE__*/ B.createElement(l, null),
		addIcon: (p ?? V?.addIcon) || /*#__PURE__*/ B.createElement(n, null),
		showAdd: d !== !0
	});
	let K = L(), oe = O(c), se = je(y, v), ce = ke(H, x), q = {
		align: D?.align ?? V?.indicator?.align,
		size: D?.size ?? w ?? V?.indicator?.size ?? V?.indicatorSize
	}, le = B.useMemo(() => {
		let e = N ?? P ?? void 0, t = R === "rtl";
		switch (e) {
			case "start": return t ? "right" : "left";
			case "end": return t ? "left" : "right";
			default: return e;
		}
	}, [
		N,
		P,
		R
	]), ue = {
		...e,
		size: oe,
		tabPlacement: le,
		items: se
	}, [J, de] = b([z, k], [re, A], { props: ue }, { popup: { _default: "root" } });
	return /*#__PURE__*/ B.createElement(De, {
		ref: W,
		direction: R,
		getPopupContainer: ee,
		...F,
		items: se,
		className: o({
			[`${H}-large`]: oe === "large",
			[`${H}-small`]: oe === "small",
			[`${H}-card`]: ["card", "editable-card"].includes(r),
			[`${H}-editable-card`]: r === "editable-card",
			[`${H}-centered`]: f
		}, te, a, s, J.root, U, ae, ie),
		classNames: {
			...J,
			popup: o(_, U, ae, ie, J.popup?.root)
		},
		styles: de,
		style: {
			...de.root,
			...ne,
			...S
		},
		editable: G,
		more: {
			icon: V?.more?.icon ?? V?.moreIcon ?? h ?? /*#__PURE__*/ B.createElement(i, null),
			transitionName: `${K}-slide-up`,
			...g
		},
		prefixCls: H,
		animated: ce,
		indicator: q,
		destroyOnHidden: M ?? j,
		tabPosition: le
	});
});
He.TabPane = Be;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/card/CardGrid.js
var Ue = ({ prefixCls: e, className: t, hoverable: n = !0, ...r }) => {
	let { getPrefixCls: i } = B.useContext(E), a = i("card", e), s = o(`${a}-grid`, t, { [`${a}-grid-hoverable`]: n });
	return /*#__PURE__*/ B.createElement("div", {
		...r,
		className: s
	});
}, We = (e) => {
	let { antCls: t, componentCls: n, headerHeight: r, headerPadding: i, tabsMarginBottom: a } = e;
	return {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		minHeight: r,
		marginBottom: -1,
		padding: `0 ${f(i)}`,
		color: e.colorTextHeading,
		fontWeight: e.fontWeightStrong,
		fontSize: e.headerFontSize,
		background: e.headerBg,
		borderBottom: `${f(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
		borderRadius: `${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)} 0 0`,
		...A(),
		"&-wrapper": {
			width: "100%",
			display: "flex",
			alignItems: "center"
		},
		"&-title": {
			display: "inline-block",
			flex: 1,
			...k,
			[`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]: {
				insetInlineStart: 0,
				marginTop: 0,
				marginBottom: 0
			}
		},
		[`${t}-tabs-top`]: {
			clear: "both",
			marginBottom: a,
			color: e.colorText,
			fontWeight: "normal",
			fontSize: e.fontSize,
			"&-bar": { borderBottom: `${f(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}` }
		}
	};
}, Ge = (e) => {
	let { cardPaddingBase: t, colorBorderSecondary: n, cardShadow: r, lineWidth: i } = e;
	return {
		width: "33.33%",
		padding: t,
		border: 0,
		borderRadius: 0,
		boxShadow: `
      ${f(i)} 0 0 0 ${n},
      0 ${f(i)} 0 0 ${n},
      ${f(i)} ${f(i)} 0 0 ${n},
      ${f(i)} 0 0 0 ${n} inset,
      0 ${f(i)} 0 0 ${n} inset;
    `,
		transition: `all ${e.motionDurationMid}`,
		"&-hoverable:hover": {
			position: "relative",
			zIndex: 1,
			boxShadow: r
		}
	};
}, Ke = (e) => {
	let { componentCls: t, iconCls: n, actionsLiMargin: r, cardActionsIconSize: i, colorBorderSecondary: a, actionsBg: o } = e;
	return {
		margin: 0,
		padding: 0,
		listStyle: "none",
		background: o,
		borderTop: `${f(e.lineWidth)} ${e.lineType} ${a}`,
		display: "flex",
		borderRadius: `0 0 ${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)}`,
		...A(),
		"& > li": {
			margin: r,
			color: e.colorTextDescription,
			textAlign: "center",
			"> span": {
				position: "relative",
				display: "block",
				minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
				fontSize: e.fontSize,
				lineHeight: e.lineHeight,
				cursor: "pointer",
				"&:hover": {
					color: e.colorPrimary,
					transition: `color ${e.motionDurationMid}`
				},
				[`a:not(${t}-btn), > ${n}`]: {
					display: "inline-block",
					width: "100%",
					color: e.colorIcon,
					lineHeight: f(e.fontHeight),
					transition: `color ${e.motionDurationMid}`,
					"&:hover": { color: e.colorPrimary }
				},
				[`> ${n}`]: {
					fontSize: i,
					lineHeight: f(e.calc(i).mul(e.lineHeight).equal())
				}
			},
			"&:not(:last-child)": { borderInlineEnd: `${f(e.lineWidth)} ${e.lineType} ${a}` }
		}
	};
}, qe = (e) => ({
	margin: `${f(e.calc(e.marginXXS).mul(-1).equal())} 0`,
	display: "flex",
	...A(),
	"&-avatar": { paddingInlineEnd: e.padding },
	"&-section": {
		overflow: "hidden",
		flex: 1,
		"> div:not(:last-child)": { marginBottom: e.marginXS }
	},
	"&-title": {
		color: e.colorTextHeading,
		fontWeight: e.fontWeightStrong,
		fontSize: e.fontSizeLG,
		...k
	},
	"&-description": { color: e.colorTextDescription }
}), Je = (e) => {
	let { componentCls: t, colorFillAlter: n, headerPadding: r, bodyPadding: i } = e;
	return {
		[`${t}-head`]: {
			padding: `0 ${f(r)}`,
			background: n,
			"&-title": { fontSize: e.fontSize }
		},
		[`${t}-body`]: { padding: `${f(e.padding)} ${f(i)}` }
	};
}, Ye = (e) => {
	let { componentCls: t } = e;
	return {
		overflow: "hidden",
		[`${t}-body`]: { userSelect: "none" }
	};
}, Xe = (e) => {
	let { componentCls: t, cardShadow: n, cardHeadPadding: r, colorBorderSecondary: i, boxShadowTertiary: a, bodyPadding: o, extraColor: s, motionDurationMid: c } = e;
	return {
		[t]: {
			...M(e),
			position: "relative",
			background: e.colorBgContainer,
			borderRadius: e.borderRadiusLG,
			[`&:not(${t}-bordered)`]: { boxShadow: a },
			[`${t}-head`]: We(e),
			[`${t}-extra`]: {
				marginInlineStart: "auto",
				color: s,
				fontWeight: "normal",
				fontSize: e.fontSize
			},
			[`${t}-body`]: {
				padding: o,
				borderRadius: `0 0 ${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)}`,
				"&:first-child": {
					borderStartStartRadius: e.borderRadiusLG,
					borderStartEndRadius: e.borderRadiusLG
				},
				"&:not(:last-child)": {
					borderEndStartRadius: 0,
					borderEndEndRadius: 0
				}
			},
			[`${t}-grid`]: Ge(e),
			[`${t}-cover`]: { "> *": {
				display: "block",
				width: "100%",
				borderRadius: `${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)} 0 0`
			} },
			[`${t}-actions`]: Ke(e),
			[`${t}-meta`]: qe(e)
		},
		[`${t}-bordered`]: {
			border: `${f(e.lineWidth)} ${e.lineType} ${i}`,
			[`${t}-cover`]: {
				marginTop: -1,
				marginInlineStart: -1,
				marginInlineEnd: -1
			}
		},
		[`${t}-hoverable`]: {
			cursor: "pointer",
			transition: ["box-shadow", "border-color"].map((e) => `${e} ${c}`).join(", "),
			"&:hover": {
				borderColor: "transparent",
				boxShadow: n
			}
		},
		[`${t}-contain-grid`]: {
			borderRadius: `${f(e.borderRadiusLG)} ${f(e.borderRadiusLG)} 0 0 `,
			[`&:not(:has(> ${t}-head))`]: { borderRadius: 0 },
			[`${t}-body`]: {
				display: "flex",
				flexWrap: "wrap"
			},
			[`&:not(${t}-loading) ${t}-body`]: {
				marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
				marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
				padding: 0
			}
		},
		[`${t}-contain-tabs`]: { [`> div${t}-head`]: {
			minHeight: 0,
			[`${t}-head-title, ${t}-extra`]: { paddingTop: r }
		} },
		[`${t}-type-inner`]: Je(e),
		[`${t}-loading`]: Ye(e),
		[`${t}-rtl`]: { direction: "rtl" }
	};
}, Ze = (e) => {
	let { componentCls: t, bodyPaddingSM: n, headerPaddingSM: r, headerHeightSM: i, headerFontSizeSM: a } = e;
	return {
		[`${t}-small`]: {
			[`> ${t}-head`]: {
				minHeight: i,
				padding: `0 ${f(r)}`,
				fontSize: a,
				[`> ${t}-head-wrapper`]: { [`> ${t}-extra`]: { fontSize: e.fontSize } }
			},
			[`> ${t}-body`]: { padding: n }
		},
		[`${t}-small${t}-contain-tabs`]: { [`> ${t}-head`]: { [`${t}-head-title, ${t}-extra`]: {
			paddingTop: 0,
			display: "flex",
			alignItems: "center"
		} } }
	};
}, Qe = P("Card", (e) => {
	let t = _(e, {
		cardShadow: e.boxShadowCard,
		cardHeadPadding: e.padding,
		cardPaddingBase: e.paddingLG,
		cardActionsIconSize: e.fontSize
	});
	return [Xe(t), Ze(t)];
}, (e) => ({
	headerBg: "transparent",
	headerFontSize: e.fontSizeLG,
	headerFontSizeSM: e.fontSize,
	headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
	headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
	actionsBg: e.colorBgContainer,
	actionsLiMargin: `${e.paddingSM}px 0`,
	tabsMarginBottom: -e.padding - e.lineWidth,
	extraColor: e.colorText,
	bodyPaddingSM: 12,
	headerPaddingSM: 12,
	bodyPadding: e.bodyPadding ?? e.paddingLG,
	headerPadding: e.headerPadding ?? e.paddingLG
})), $e = (e) => {
	let { actionClasses: t, actions: n = [], actionStyle: r } = e;
	return /*#__PURE__*/ B.createElement("ul", {
		className: t,
		style: r
	}, n.map((e, t) => {
		let r = `action-${t}`;
		return /*#__PURE__*/ B.createElement("li", {
			style: { width: `${100 / n.length}%` },
			key: r
		}, /*#__PURE__*/ B.createElement("span", null, e));
	}));
}, et = /*#__PURE__*/ B.forwardRef((e, t) => {
	let { prefixCls: n, className: r, rootClassName: i, style: a, extra: c, headStyle: l = {}, bodyStyle: u = {}, title: d, loading: f, bordered: p, variant: m, size: h, type: _, cover: v, actions: y, tabList: x, children: S, activeTabKey: w, defaultActiveTabKey: T, tabBarExtraContent: E, hoverable: D, tabProps: k = {}, classNames: A, styles: j, ...M } = e, { getPrefixCls: N, direction: P, className: I, style: L, classNames: R, styles: te } = C("card"), [ne] = ee("card", m, p), z = O(h), re = {
		...e,
		size: z,
		variant: ne
	}, [V, H] = b([R, A], [te, j], { props: re }), ie = (t) => {
		e.onTabChange?.(t);
	}, U = B.useMemo(() => g(S), [S]), ae = B.useMemo(() => U.some((e) => /*#__PURE__*/ B.isValidElement(e) && e.type === Ue), [U]), W = N("card", n), [G, K] = Qe(W), oe = /*#__PURE__*/ B.createElement(F, {
		loading: !0,
		active: !0,
		paragraph: { rows: 4 },
		title: !1
	}, S), se = w !== void 0, ce = {
		...k,
		[se ? "activeKey" : "defaultActiveKey"]: se ? w : T,
		tabBarExtraContent: E
	}, q, le = z === "small" ? z : "large", ue = x ? /*#__PURE__*/ B.createElement(He, {
		size: le,
		...ce,
		className: `${W}-head-tabs`,
		onChange: ie,
		items: x.map(({ tab: e, ...t }) => ({
			label: e,
			...t
		}))
	}) : null;
	if (d || c || ue) {
		let e = o(`${W}-head`, V.header), t = o(`${W}-head-title`, V.title), n = o(`${W}-extra`, V.extra), r = {
			...l,
			...H.header
		};
		q = /*#__PURE__*/ B.createElement("div", {
			className: e,
			style: r
		}, /*#__PURE__*/ B.createElement("div", { className: `${W}-head-wrapper` }, d && /*#__PURE__*/ B.createElement("div", {
			className: t,
			style: H.title
		}, d), c && /*#__PURE__*/ B.createElement("div", {
			className: n,
			style: H.extra
		}, c)), ue);
	}
	let J = o(`${W}-cover`, V.cover), de = v ? /*#__PURE__*/ B.createElement("div", {
		className: J,
		style: H.cover
	}, v) : null, fe = o(`${W}-body`, V.body), pe = {
		...u,
		...H.body
	}, me = f || U.length ? /*#__PURE__*/ B.createElement("div", {
		className: fe,
		style: pe
	}, f ? oe : S) : null, Y = o(`${W}-actions`, V.actions), he = y?.length ? /*#__PURE__*/ B.createElement($e, {
		actionClasses: Y,
		actionStyle: H.actions,
		actions: y
	}) : null, ge = s(M, ["onTabChange"]), _e = o(W, I, {
		[`${W}-loading`]: f,
		[`${W}-bordered`]: ne !== "borderless",
		[`${W}-hoverable`]: D,
		[`${W}-contain-grid`]: ae,
		[`${W}-contain-tabs`]: x?.length,
		[`${W}-small`]: z === "small",
		[`${W}-type-${_}`]: !!_,
		[`${W}-rtl`]: P === "rtl"
	}, r, i, G, K, V.root), ve = {
		...H.root,
		...L,
		...a
	};
	return /*#__PURE__*/ B.createElement("div", {
		ref: t,
		...ge,
		className: _e,
		style: ve
	}, q, de, me, he);
}), tt = (e) => {
	let { prefixCls: t, className: n, avatar: r, title: i, description: a, style: s, classNames: c, styles: l, ...u } = e, { getPrefixCls: d, className: f, style: p, classNames: m, styles: h } = C("cardMeta"), g = `${d("card", t)}-meta`, [_, v] = b([m, c], [h, l], { props: e }), y = o(g, n, f, _.root), x = {
		...p,
		...v.root,
		...s
	}, S = o(`${g}-avatar`, _.avatar), w = o(`${g}-title`, _.title), T = o(`${g}-description`, _.description), E = o(`${g}-section`, _.section), D = r ? /*#__PURE__*/ B.createElement("div", {
		className: S,
		style: v.avatar
	}, r) : null, O = i ? /*#__PURE__*/ B.createElement("div", {
		className: w,
		style: v.title
	}, i) : null, k = a ? /*#__PURE__*/ B.createElement("div", {
		className: T,
		style: v.description
	}, a) : null, A = O || k ? /*#__PURE__*/ B.createElement("div", {
		className: E,
		style: v.section
	}, O, k) : null;
	return /*#__PURE__*/ B.createElement("div", {
		...u,
		className: y,
		style: x
	}, D, A);
}, nt = /* @__PURE__ */ e({ default: () => rt }), rt = et;
rt.Grid = Ue, rt.Meta = tt;
//#endregion
export { Ve as n, nt as t };
