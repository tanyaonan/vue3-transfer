globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $ as n, Bt as r, Cn as i, Dn as a, Gt as o, Ht as s, J as c, Jt as l, Nt as u, On as d, Ut as f, X as p, Y as m, Zt as h, _n as g, _t as _, fn as v, gn as y, hn as b, kt as x, nt as S, on as C, pn as w, sn as T, vn as E, wn as D, yn as O, yt as k } from "../shared/core.js";
import { $n as A, Bt as j, Fn as M, Ft as N, Gt as P, Ht as F, Jn as ee, Mn as I, O as L, Qn as R, Rt as z, Sr as te, Ut as B, Vt as V, Wn as H, Xn as U, Yn as ne, _r as re, br as ie, dr as W, er as G, f as ae, fn as oe, g as se, gr as K, in as ce, it as q, lr as le, m as ue, mr as de, nr as fe, p as pe, pn as me, pr as J, qn as he, sr as Y, ur as ge, zt as _e } from "../shared/antd-core.js";
import { f as ve } from "./auto-complete.js";
import { o as ye } from "./avatar.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/breadcrumb/BreadcrumbContext.js
var X = /* @__PURE__ */ t(d()), be = /*#__PURE__*/ X.createContext({}), { ESC: xe, TAB: Z } = l;
function Se({ visible: e, triggerRef: t, onVisibleChange: n, autoFocus: i, overlayRef: a }) {
	let o = X.useRef(!1), s = () => {
		e && (t.current?.focus?.(), n?.(!1));
	}, c = () => a.current?.focus ? (a.current.focus(), o.current = !0, !0) : !1, l = (e) => {
		switch (e.keyCode) {
			case xe:
				s();
				break;
			case Z: {
				let t = !1;
				o.current || (t = c()), t ? e.preventDefault() : s();
				break;
			}
		}
	};
	X.useEffect(() => e ? (window.addEventListener("keydown", l), i && r(c, 3), () => {
		window.removeEventListener("keydown", l), o.current = !1;
	}) : () => {
		o.current = !1;
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+dropdown@1.0._10a31a0bc65d94f368a74c6c42119dd8/node_modules/@rc-component/dropdown/es/Overlay.js
var Ce = /*#__PURE__*/ (0, X.forwardRef)((e, t) => {
	let { overlay: n, arrow: r, prefixCls: i } = e, a = (0, X.useMemo)(() => {
		let e;
		return e = typeof n == "function" ? n() : n, e;
	}, [n]), o = w(t, b(a));
	return /*#__PURE__*/ X.createElement(X.Fragment, null, r && /*#__PURE__*/ X.createElement("div", { className: `${i}-arrow` }), /*#__PURE__*/ X.cloneElement(a, { ref: g(a) ? o : void 0 }));
}), we = {
	adjustX: 1,
	adjustY: 1
}, Te = [0, 0], Ee = {
	topLeft: {
		points: ["bl", "tl"],
		overflow: we,
		offset: [0, -4],
		targetOffset: Te
	},
	top: {
		points: ["bc", "tc"],
		overflow: we,
		offset: [0, -4],
		targetOffset: Te
	},
	topRight: {
		points: ["br", "tr"],
		overflow: we,
		offset: [0, -4],
		targetOffset: Te
	},
	bottomLeft: {
		points: ["tl", "bl"],
		overflow: we,
		offset: [0, 4],
		targetOffset: Te
	},
	bottom: {
		points: ["tc", "bc"],
		overflow: we,
		offset: [0, 4],
		targetOffset: Te
	},
	bottomRight: {
		points: ["tr", "br"],
		overflow: we,
		offset: [0, 4],
		targetOffset: Te
	}
};
//#endregion
//#region node_modules/.pnpm/@rc-component+dropdown@1.0._10a31a0bc65d94f368a74c6c42119dd8/node_modules/@rc-component/dropdown/es/Dropdown.js
function De() {
	return De = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, De.apply(this, arguments);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+dropdown@1.0._10a31a0bc65d94f368a74c6c42119dd8/node_modules/@rc-component/dropdown/es/index.js
var Oe = /* @__PURE__ */ X.forwardRef((e, t) => {
	let { arrow: n = !1, prefixCls: r = "rc-dropdown", transitionName: i, animation: a, align: o, placement: s = "bottomLeft", placements: c = Ee, getPopupContainer: l, showAction: d, hideAction: f, overlayClassName: p, overlayStyle: m, visible: h, trigger: _ = ["hover"], autoFocus: v, overlay: y, children: x, onVisibleChange: S, ...C } = e, [T, E] = X.useState(), D = "visible" in e ? h : T, O = a ? `${r}-${a}` : i, k = X.useRef(null), A = X.useRef(null), j = X.useRef(null);
	X.useImperativeHandle(t, () => k.current);
	let N = (e) => {
		E(e), S?.(e);
	};
	Se({
		visible: D,
		triggerRef: j,
		onVisibleChange: N,
		autoFocus: v,
		overlayRef: A
	});
	let P = (t) => {
		let { onOverlayClick: n } = e;
		E(!1), n && n(t);
	}, F = () => /*#__PURE__*/ X.createElement(Ce, {
		ref: A,
		overlay: y,
		prefixCls: r,
		arrow: n
	}), ee = () => typeof y == "function" ? F : F(), I = () => {
		let { minOverlayWidthMatchTrigger: t, alignPoint: n } = e;
		return "minOverlayWidthMatchTrigger" in e ? t : !n;
	}, L = /*#__PURE__*/ X.cloneElement(x, {
		className: u(x.props?.className, D && (() => {
			let { openClassName: t } = e;
			return t === void 0 ? `${r}-open` : t;
		})()),
		ref: g(x) ? w(j, b(x)) : void 0
	}), R = f;
	return !R && _.indexOf("contextMenu") !== -1 && (R = ["click"]), /*#__PURE__*/ X.createElement(M, De({ builtinPlacements: c }, C, {
		prefixCls: r,
		ref: k,
		popupClassName: u(p, { [`${r}-show-arrow`]: n }),
		popupStyle: m,
		action: _,
		showAction: d,
		hideAction: R,
		popupPlacement: s,
		popupAlign: o,
		popupMotion: { motionName: O },
		popupVisible: D,
		stretch: I() ? "minWidth" : "",
		popup: ee(),
		onOpenChange: N,
		onPopupClick: P,
		getPopupContainer: l
	}), L);
}), ke = /* @__PURE__ */ t(a()), Ae = /*#__PURE__*/ X.createContext(null);
function je(e, t) {
	return `${e}-${t}`;
}
function Me(e) {
	return je(X.useContext(Ae), e);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/context/MenuContext.js
var Q = /*#__PURE__*/ X.createContext(null);
function Ne(e, t) {
	let n = { ...e };
	return Object.keys(t).forEach((e) => {
		let r = t[e];
		r !== void 0 && (n[e] = r);
	}), n;
}
function Pe({ children: e, locked: t, ...n }) {
	let r = X.useContext(Q), i = O(() => Ne(r, n), [r, n], (e, n) => !t && (e[0] !== n[0] || !o(e[1], n[1], !0)));
	return /*#__PURE__*/ X.createElement(Q.Provider, { value: i }, e);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/context/PathContext.js
var Fe = [], Ie = /*#__PURE__*/ X.createContext(null);
function Le() {
	return X.useContext(Ie);
}
var Re = /*#__PURE__*/ X.createContext(Fe);
function ze(e) {
	let t = X.useContext(Re);
	return X.useMemo(() => e === void 0 ? t : [...t, e], [t, e]);
}
var Be = /*#__PURE__*/ X.createContext(null), Ve = /*#__PURE__*/ X.createContext({}), { LEFT: He, RIGHT: Ue, UP: We, DOWN: Ge, ENTER: Ke, ESC: qe, HOME: Je, END: Ye } = l, Xe = [
	We,
	Ge,
	He,
	Ue
];
function Ze(e, t, n, r) {
	let i = "prev", a = "next", o = "children", s = "parent";
	if (e === "inline" && r === Ke) return { inlineTrigger: !0 };
	let c = {
		[We]: i,
		[Ge]: a
	}, l = {
		[He]: n ? a : i,
		[Ue]: n ? i : a,
		[Ge]: o,
		[Ke]: o
	}, u = {
		[We]: i,
		[Ge]: a,
		[Ke]: o,
		[qe]: s,
		[He]: n ? o : s,
		[Ue]: n ? s : o
	};
	switch ({
		inline: c,
		horizontal: l,
		vertical: u,
		inlineSub: c,
		horizontalSub: u,
		verticalSub: u
	}[`${e}${t ? "" : "Sub"}`]?.[r]) {
		case i: return {
			offset: -1,
			sibling: !0
		};
		case a: return {
			offset: 1,
			sibling: !0
		};
		case s: return {
			offset: -1,
			sibling: !1
		};
		case o: return {
			offset: 1,
			sibling: !1
		};
		default: return null;
	}
}
function Qe(e) {
	let t = e;
	for (; t;) {
		if (t.getAttribute("data-menu-list")) return t;
		t = t.parentElement;
	}
	/* istanbul ignore next */
	return null;
}
function $e(e, t) {
	let n = e || document.activeElement;
	for (; n;) {
		if (t.has(n)) return n;
		n = n.parentElement;
	}
	return null;
}
function et(e, t) {
	return h(e, !0).filter((e) => t.has(e));
}
function tt(e, t, n, r = 1) {
	if (!e) return null;
	let i = et(e, t), a = i.length, o = i.findIndex((e) => n === e);
	return r < 0 ? o === -1 ? o = a - 1 : --o : r > 0 && (o += 1), o = (o + a) % a, i[o];
}
var nt = (e, t) => {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		let a = document.querySelector(`[data-menu-id='${je(t, e)}']`);
		a && (n.add(a), i.set(a, e), r.set(e, a));
	}), {
		elements: n,
		key2element: r,
		element2key: i
	};
};
function rt(e, t, n, i, a, o, s, c, l, u) {
	let d = X.useRef(), f = X.useRef();
	f.current = t;
	let p = () => {
		r.cancel(d.current);
	};
	return X.useEffect(() => () => {
		p();
	}, []), (m) => {
		let { which: h } = m;
		if ([
			...Xe,
			Ke,
			qe,
			Je,
			Ye
		].includes(h)) {
			let u = o(), g = nt(u, i), { elements: _, key2element: v, element2key: y } = g, b = $e(v.get(t), _), x = y.get(b), S = Ze(e, s(x, !0).length === 1, n, h);
			if (!S && h !== Je && h !== Ye) return;
			(Xe.includes(h) || [Je, Ye].includes(h)) && m.preventDefault();
			let C = (e) => {
				if (e) {
					let t = e, n = e.querySelector("a");
					n?.getAttribute("href") && (t = n);
					let i = y.get(e);
					c(i), p(), d.current = r(() => {
						f.current === i && t.focus();
					});
				}
			};
			if ([Je, Ye].includes(h) || S.sibling || !b) {
				let t;
				t = !b || e === "inline" ? a.current : Qe(b);
				let n, r = et(t, _);
				n = h === Je ? r[0] : h === Ye ? r[r.length - 1] : tt(t, _, b, S.offset), C(n);
			} else if (S.inlineTrigger) l(x);
			else if (S.offset > 0) l(x, !0), p(), d.current = r(() => {
				g = nt(u, i);
				let e = b.getAttribute("aria-controls");
				C(tt(document.getElementById(e), g.elements));
			}, 5);
			else if (S.offset < 0) {
				let e = s(x, !0), t = e[e.length - 2], n = v.get(t);
				l(t, !1), C(n);
			}
		}
		u?.(m);
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/utils/timeUtil.js
function it(e) {
	/* istanbul ignore next */
	Promise.resolve().then(e);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/hooks/useKeyRecords.js
var at = "__RC_UTIL_PATH_SPLIT__", ot = (e) => e.join(at), st = (e) => e.split(at), ct = "rc-menu-more";
function lt() {
	let [, e] = X.useState({}), t = (0, X.useRef)(/* @__PURE__ */ new Map()), n = (0, X.useRef)(/* @__PURE__ */ new Map()), [r, i] = X.useState([]), a = (0, X.useRef)(0), o = (0, X.useRef)(!1), s = () => {
		o.current || e({});
	}, c = (0, X.useCallback)((e, r) => {
		let i = ot(r);
		n.current.set(i, e), t.current.set(e, i), a.current += 1;
		let o = a.current;
		it(() => {
			o === a.current && s();
		});
	}, []), l = (0, X.useCallback)((e, r) => {
		let i = ot(r);
		n.current.delete(i), t.current.delete(e);
	}, []), u = (0, X.useCallback)((e) => {
		i(e);
	}, []), d = (0, X.useCallback)((e, n) => {
		let i = st(t.current.get(e) || "");
		return n && r.includes(i[0]) && i.unshift(ct), i;
	}, [r]), f = (0, X.useCallback)((e, t) => e.filter((e) => e !== void 0).some((e) => d(e, !0).includes(t)), [d]), p = () => {
		let e = [...t.current.keys()];
		return r.length && e.push(ct), e;
	}, m = (0, X.useCallback)((e) => {
		let r = `${t.current.get(e)}${at}`, i = /* @__PURE__ */ new Set();
		return [...n.current.keys()].forEach((e) => {
			e.startsWith(r) && i.add(n.current.get(e));
		}), i;
	}, []);
	return X.useEffect(() => () => {
		o.current = !0;
	}, []), {
		registerPath: c,
		unregisterPath: l,
		refreshOverflowKeys: u,
		isSubPathKey: f,
		getKeyPath: d,
		getKeys: p,
		getSubPathKeys: m
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/hooks/useMemoCallback.js
function ut(e) {
	let t = X.useRef(e);
	t.current = e;
	let n = X.useCallback((...e) => t.current?.(...e), []);
	return e ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/hooks/useActive.js
function dt(e, t, n, r) {
	let { activeKey: i, onActive: a, onInactive: o } = X.useContext(Q), s = { active: i === e };
	return t || (s.onMouseEnter = (t) => {
		n?.({
			key: e,
			domEvent: t
		}), a(e);
	}, s.onMouseLeave = (t) => {
		r?.({
			key: e,
			domEvent: t
		}), o(e);
	}), s;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/hooks/useDirectionStyle.js
function ft(e) {
	let { mode: t, rtl: n, inlineIndent: r } = X.useContext(Q);
	if (t !== "inline") return null;
	let i = e;
	return n ? { paddingRight: i * r } : { paddingLeft: i * r };
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/Icon.js
function pt({ icon: e, props: t, children: n }) {
	let r;
	return e === null || e === !1 ? null : (typeof e == "function" ? r = /*#__PURE__*/ X.createElement(e, { ...t }) : typeof e != "boolean" && (r = e), r || n || null);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/utils/warnUtil.js
function mt({ item: e, ...t }) {
	return Object.defineProperty(t, "item", { get: () => (i(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), e) }), t;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/MenuItem.js
function ht() {
	return ht = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ht.apply(this, arguments);
}
var gt = class extends X.Component {
	render() {
		let { title: e, attribute: t, elementRef: n, ...r } = this.props, a = f(r, [
			"eventKey",
			"popupClassName",
			"popupOffset",
			"onTitleClick"
		]);
		return i(!t, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /*#__PURE__*/ X.createElement(ve.Item, ht({}, t, { title: typeof e == "string" ? e : void 0 }, a, { ref: n }));
	}
}, _t = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { style: n, className: r, eventKey: i, warnKey: a, disabled: o, itemIcon: s, children: c, role: d, onMouseEnter: p, onMouseLeave: m, onClick: h, onKeyDown: g, onFocus: _, ...v } = e, y = Me(i), { prefixCls: b, onItemClick: x, disabled: S, overflowDisabled: C, itemIcon: w, selectedKeys: T, onActive: D } = X.useContext(Q), { _internalRenderMenuItem: O } = X.useContext(Ve), k = `${b}-item`, A = X.useRef(), j = X.useRef(), M = S || o, N = E(t, j), P = ze(i), F = (e) => ({
		key: i,
		keyPath: [...P].reverse(),
		item: A.current,
		domEvent: e
	}), ee = s || w, { active: I, ...L } = dt(i, M, p, m), R = T.includes(i), z = ft(P.length), te = (e) => {
		if (M) return;
		let t = F(e);
		h?.(mt(t)), x(t);
	}, B = (e) => {
		if (g?.(e), e.which === l.ENTER) {
			let t = F(e);
			h?.(mt(t)), x(t);
		}
	}, V = (e) => {
		D(i), _?.(e);
	}, H = {};
	e.role === "option" && (H["aria-selected"] = R);
	let U = /*#__PURE__*/ X.createElement(gt, ht({
		ref: A,
		elementRef: N,
		role: d === null ? "none" : d || "menuitem",
		tabIndex: o ? null : -1,
		"data-menu-id": C && y ? null : y
	}, f(v, ["extra"]), L, H, {
		component: "li",
		"aria-disabled": o,
		style: {
			...z,
			...n
		},
		className: u(k, {
			[`${k}-active`]: I,
			[`${k}-selected`]: R,
			[`${k}-disabled`]: M
		}, r),
		onClick: te,
		onKeyDown: B,
		onFocus: V
	}), c, /*#__PURE__*/ X.createElement(pt, {
		props: {
			...e,
			isSelected: R
		},
		icon: ee
	}));
	return O && (U = O(U, e, { selected: R })), U;
});
function vt(e, t) {
	let { eventKey: n } = e, r = Le(), i = ze(n);
	return X.useEffect(() => {
		if (r) return r.registerPath(n, i), () => {
			r.unregisterPath(n, i);
		};
	}, [i]), r ? null : /*#__PURE__*/ X.createElement(_t, ht({}, e, { ref: t }));
}
var yt = /*#__PURE__*/ X.forwardRef(vt);
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/SubMenu/SubMenuList.js
function bt() {
	return bt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, bt.apply(this, arguments);
}
var xt = /*#__PURE__*/ X.forwardRef(({ className: e, children: t, ...n }, r) => {
	let { prefixCls: i, mode: a, rtl: o } = X.useContext(Q);
	return /*#__PURE__*/ X.createElement("ul", bt({
		className: u(i, o && `${i}-rtl`, `${i}-sub`, `${i}-${a === "inline" ? "inline" : "vertical"}`, e),
		role: "menu"
	}, n, {
		"data-menu-list": !0,
		ref: r
	}), t);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/utils/commonUtil.js
function St(e, t) {
	return D(e).map((e, n) => {
		if (/*#__PURE__*/ X.isValidElement(e)) {
			let { key: r } = e, i = e.props?.eventKey ?? r;
			i ??= `tmp_key-${[...t, n].join("-")}`;
			let a = {
				key: i,
				eventKey: i
			};
			return /*#__PURE__*/ X.cloneElement(e, a);
		}
		return e;
	});
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/placements.js
var $ = {
	adjustX: 1,
	adjustY: 1
}, Ct = {
	topLeft: {
		points: ["bl", "tl"],
		overflow: $
	},
	topRight: {
		points: ["br", "tr"],
		overflow: $
	},
	bottomLeft: {
		points: ["tl", "bl"],
		overflow: $
	},
	bottomRight: {
		points: ["tr", "br"],
		overflow: $
	},
	leftTop: {
		points: ["tr", "tl"],
		overflow: $
	},
	leftBottom: {
		points: ["br", "bl"],
		overflow: $
	},
	rightTop: {
		points: ["tl", "tr"],
		overflow: $
	},
	rightBottom: {
		points: ["bl", "br"],
		overflow: $
	}
}, wt = {
	topLeft: {
		points: ["bl", "tl"],
		overflow: $
	},
	topRight: {
		points: ["br", "tr"],
		overflow: $
	},
	bottomLeft: {
		points: ["tl", "bl"],
		overflow: $
	},
	bottomRight: {
		points: ["tr", "br"],
		overflow: $
	},
	rightTop: {
		points: ["tr", "tl"],
		overflow: $
	},
	rightBottom: {
		points: ["br", "bl"],
		overflow: $
	},
	leftTop: {
		points: ["tl", "tr"],
		overflow: $
	},
	leftBottom: {
		points: ["bl", "br"],
		overflow: $
	}
};
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/utils/motionUtil.js
function Tt(e, t, n) {
	if (t) return t;
	if (n) return n[e] || n.other;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/SubMenu/PopupTrigger.js
var Et = {
	horizontal: "bottomLeft",
	vertical: "rightTop",
	"vertical-left": "rightTop",
	"vertical-right": "leftTop"
};
function Dt({ prefixCls: e, visible: t, children: n, popup: i, popupStyle: a, popupClassName: o, popupOffset: s, disabled: c, mode: l, onVisibleChange: d }) {
	let { getPopupContainer: f, rtl: p, subMenuOpenDelay: m, subMenuCloseDelay: h, builtinPlacements: g, triggerSubMenuAction: _, forceSubMenuRender: v, rootClassName: y, motion: b, defaultMotions: x } = X.useContext(Q), [S, C] = X.useState(!1), w = p ? {
		...wt,
		...g
	} : {
		...Ct,
		...g
	}, T = Et[l], E = Tt(l, b, x), D = X.useRef(E);
	l !== "inline" && (D.current = E);
	let O = {
		...D.current,
		leavedClassName: `${e}-hidden`,
		removeOnLeave: !1,
		motionAppear: !0
	}, k = X.useRef();
	return X.useEffect(() => (k.current = r(() => {
		C(t);
	}), () => {
		r.cancel(k.current);
	}), [t]), /*#__PURE__*/ X.createElement(M, {
		prefixCls: e,
		popupClassName: u(`${e}-popup`, { [`${e}-rtl`]: p }, o, y),
		stretch: l === "horizontal" ? "minWidth" : null,
		getPopupContainer: f,
		builtinPlacements: w,
		popupPlacement: T,
		popupVisible: S,
		popup: i,
		popupStyle: a,
		popupAlign: s && { offset: s },
		action: c ? [] : [_],
		mouseEnterDelay: m,
		mouseLeaveDelay: h,
		onPopupVisibleChange: d,
		forceRender: v,
		popupMotion: O,
		fresh: !0
	}, n);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/SubMenu/InlineSubMenuList.js
function Ot() {
	return Ot = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ot.apply(this, arguments);
}
function kt({ id: e, open: t, keyPath: n, children: r }) {
	let i = "inline", { prefixCls: a, forceSubMenuRender: o, motion: s, defaultMotions: c, mode: l } = X.useContext(Q), u = X.useRef(!1);
	u.current = l === i;
	let [d, f] = X.useState(!u.current), p = u.current ? t : !1;
	X.useEffect(() => {
		u.current && f(!1);
	}, [l]);
	let m = { ...Tt(i, s, c) };
	n.length > 1 && (m.motionAppear = !1);
	let h = m.onVisibleChanged;
	return m.onVisibleChanged = (e) => (!u.current && !e && f(!0), h?.(e)), d ? null : /*#__PURE__*/ X.createElement(Pe, {
		mode: i,
		locked: !u.current
	}, /*#__PURE__*/ X.createElement(fe, Ot({ visible: p }, m, {
		forceRender: o,
		removeOnLeave: !1,
		leavedClassName: `${a}-hidden`
	}), ({ className: t, style: n }) => /*#__PURE__*/ X.createElement(xt, {
		id: e,
		className: t,
		style: n
	}, r)));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/SubMenu/index.js
function At() {
	return At = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, At.apply(this, arguments);
}
var jt = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { style: n, className: r, styles: i, classNames: a, title: o, eventKey: s, warnKey: c, disabled: l, internalPopupClose: d, children: f, itemIcon: p, expandIcon: m, popupClassName: h, popupOffset: g, popupStyle: _, onClick: v, onMouseEnter: y, onMouseLeave: b, onTitleClick: x, onTitleMouseEnter: S, onTitleMouseLeave: C, popupRender: w, ...T } = e, E = Me(s), { prefixCls: D, mode: O, openKeys: k, disabled: A, overflowDisabled: j, activeKey: M, selectedKeys: N, itemIcon: P, expandIcon: F, onItemClick: ee, onOpenChange: I, onActive: L, popupRender: R } = X.useContext(Q), { _internalRenderSubMenuItem: z } = X.useContext(Ve), { isSubPathKey: te } = X.useContext(Be), B = ze(), V = `${D}-submenu`, H = A || l, U = X.useRef(), ne = X.useRef(), re = p ?? P, ie = m ?? F, W = k.includes(s), G = !j && W, ae = te(N, s), { active: oe, ...se } = dt(s, H, S, C), [K, ce] = X.useState(!1), q = (e) => {
		H || ce(e);
	}, le = (e) => {
		q(!0), y?.({
			key: s,
			domEvent: e
		});
	}, ue = (e) => {
		q(!1), b?.({
			key: s,
			domEvent: e
		});
	}, de = X.useMemo(() => oe || (O === "inline" ? !1 : K || te([M], s)), [
		O,
		oe,
		M,
		K,
		s,
		te
	]), fe = ft(B.length), pe = (e) => {
		H || (x?.({
			key: s,
			domEvent: e
		}), O === "inline" && I(s, !W));
	}, me = ut((e) => {
		v?.(mt(e)), ee(e);
	}), J = (e) => {
		O !== "inline" && I(s, e);
	}, he = () => {
		L(s);
	}, Y = E && `${E}-popup`, ge = X.useMemo(() => /*#__PURE__*/ X.createElement(pt, {
		icon: O === "horizontal" ? void 0 : ie,
		props: {
			...e,
			isOpen: G,
			isSubMenu: !0
		}
	}, /*#__PURE__*/ X.createElement("i", { className: `${V}-arrow` })), [
		O,
		ie,
		e,
		G,
		V
	]), _e = /*#__PURE__*/ X.createElement("div", At({
		role: "menuitem",
		style: fe,
		className: `${V}-title`,
		tabIndex: H ? null : -1,
		ref: U,
		title: typeof o == "string" ? o : null,
		"data-menu-id": j && E ? null : E,
		"aria-expanded": G,
		"aria-haspopup": !0,
		"aria-controls": Y,
		"aria-disabled": H,
		onClick: pe,
		onFocus: he
	}, se), o, ge), ye = X.useRef(O);
	O !== "inline" && B.length > 1 ? ye.current = "vertical" : ye.current = O;
	let be = ye.current, xe = X.useMemo(() => {
		let t = /*#__PURE__*/ X.createElement(Pe, {
			classNames: a,
			styles: i,
			mode: be === "horizontal" ? "vertical" : be
		}, /*#__PURE__*/ X.createElement(xt, {
			id: Y,
			ref: ne
		}, f)), n = w || R;
		return n ? n(t, {
			item: e,
			keys: B
		}) : t;
	}, [
		w,
		R,
		B,
		Y,
		f,
		e,
		be
	]);
	if (!j) {
		let e = ye.current;
		_e = /*#__PURE__*/ X.createElement(Dt, {
			mode: e,
			prefixCls: V,
			visible: !d && G && O !== "inline",
			popupClassName: h,
			popupOffset: g,
			popupStyle: _,
			popup: xe,
			disabled: H,
			onVisibleChange: J
		}, _e);
	}
	let Z = /*#__PURE__*/ X.createElement(ve.Item, At({
		ref: t,
		role: "none"
	}, T, {
		component: "li",
		style: n,
		className: u(V, `${V}-${O}`, r, {
			[`${V}-open`]: G,
			[`${V}-active`]: de,
			[`${V}-selected`]: ae,
			[`${V}-disabled`]: H
		}),
		onMouseEnter: le,
		onMouseLeave: ue
	}), _e, !j && /*#__PURE__*/ X.createElement(kt, {
		id: Y,
		open: G,
		keyPath: B
	}, f));
	return z && (Z = z(Z, e, {
		selected: ae,
		active: de,
		open: G,
		disabled: H
	})), /*#__PURE__*/ X.createElement(Pe, {
		classNames: a,
		styles: i,
		onItemClick: me,
		mode: O === "horizontal" ? "vertical" : O,
		itemIcon: re,
		expandIcon: ie
	}, Z);
}), Mt = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { eventKey: n, children: r } = e, i = ze(n), a = St(r, i), o = Le();
	X.useEffect(() => {
		if (o) return o.registerPath(n, i), () => {
			o.unregisterPath(n, i);
		};
	}, [i]);
	let s;
	return s = o ? a : /*#__PURE__*/ X.createElement(jt, At({ ref: t }, e), a), /*#__PURE__*/ X.createElement(Re.Provider, { value: i }, s);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/Divider.js
function Nt({ className: e, style: t }) {
	let { prefixCls: n } = X.useContext(Q);
	return Le() ? null : /*#__PURE__*/ X.createElement("li", {
		role: "separator",
		className: u(`${n}-item-divider`, e),
		style: t
	});
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/MenuItemGroup.js
function Pt() {
	return Pt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Pt.apply(this, arguments);
}
var Ft = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { className: n, title: r, eventKey: i, children: a, ...o } = e, { prefixCls: s, classNames: c, styles: l } = X.useContext(Q), d = `${s}-item-group`;
	return /*#__PURE__*/ X.createElement("li", Pt({
		ref: t,
		role: "presentation"
	}, o, {
		onClick: (e) => e.stopPropagation(),
		className: u(d, n)
	}), /*#__PURE__*/ X.createElement("div", {
		role: "presentation",
		className: u(`${d}-title`, c?.listTitle),
		style: l?.listTitle,
		title: typeof r == "string" ? r : void 0
	}, r), /*#__PURE__*/ X.createElement("ul", {
		role: "group",
		className: u(`${d}-list`, c?.list),
		style: l?.list
	}, a));
}), It = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { eventKey: n, children: r } = e, i = St(r, ze(n));
	return Le() ? i : /*#__PURE__*/ X.createElement(Ft, Pt({ ref: t }, f(e, ["warnKey"])), i);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/utils/nodeUtil.js
function Lt() {
	return Lt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Lt.apply(this, arguments);
}
function Rt(e, t, n) {
	let { item: r, group: i, submenu: a, divider: o } = t;
	return (e || []).map((e, s) => {
		if (e && typeof e == "object") {
			let { label: c, children: l, key: u, type: d, extra: f, ...p } = e, m = u ?? `tmp-${s}`;
			if (l || d === "group") return d === "group" ? /*#__PURE__*/ X.createElement(i, Lt({ key: m }, p, { title: c }), Rt(l, t, n)) : /*#__PURE__*/ X.createElement(a, Lt({ key: m }, p, { title: c }), Rt(l, t, n));
			if (d === "divider") return /*#__PURE__*/ X.createElement(o, Lt({ key: m }, p));
			let h = !!f || f === 0;
			return /*#__PURE__*/ X.createElement(r, Lt({ key: m }, p, { extra: f }), h ? /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("span", { className: `${n}-item-label` }, c), /*#__PURE__*/ X.createElement("span", { className: `${n}-item-extra` }, f)) : c);
		}
		return null;
	}).filter((e) => e);
}
function zt(e, t, n, r, i) {
	let a = e, o = {
		divider: Nt,
		item: yt,
		group: It,
		submenu: Mt,
		...r
	};
	return t && (a = Rt(t, o, i)), St(a, n);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+menu@1.3.1_re_a393575b937801b51ab86f309f4c125e/node_modules/@rc-component/menu/es/Menu.js
function Bt() {
	return Bt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Bt.apply(this, arguments);
}
var Vt = [], Ht = /* @__PURE__ */ X.forwardRef((e, t) => {
	let { prefixCls: n = "rc-menu", rootClassName: r, style: i, className: a, styles: s, classNames: c, tabIndex: l = 0, items: d, children: f, direction: p, id: m, mode: h = "vertical", inlineCollapsed: g, disabled: _, disabledOverflow: v, subMenuOpenDelay: y = .1, subMenuCloseDelay: b = .1, forceSubMenuRender: x, defaultOpenKeys: S, openKeys: w, activeKey: E, defaultActiveFirst: D, selectable: O = !0, multiple: k = !1, defaultSelectedKeys: A, selectedKeys: j, onSelect: M, onDeselect: N, inlineIndent: P = 24, motion: F, defaultMotions: ee, triggerSubMenuAction: I = "hover", builtinPlacements: L, itemIcon: R, expandIcon: z, overflowedIndicator: te = "...", overflowedIndicatorPopupClassName: B, getPopupContainer: V, onClick: H, onOpenChange: U, onKeyDown: ne, openAnimation: re, openTransitionName: ie, _internalRenderMenuItem: W, _internalRenderSubMenuItem: G, _internalComponents: ae, popupRender: oe, ...se } = e, [K, ce] = X.useMemo(() => [zt(f, d, Vt, ae, n), zt(f, d, Vt, {}, n)], [
		f,
		d,
		ae
	]), [q, le] = X.useState(!1), ue = X.useRef(), de = C(m ? `rc-menu-uuid-${m}` : "rc-menu-uuid"), fe = p === "rtl", [pe, me] = T(S, w), J = pe || Vt, he = (e, t = !1) => {
		function n() {
			me(e), U?.(e);
		}
		t ? (0, ke.flushSync)(n) : n();
	}, [Y, ge] = X.useState(J), _e = X.useRef(!1), [ye, be] = X.useMemo(() => (h === "inline" || h === "vertical") && g ? ["vertical", g] : [h, !1], [h, g]), xe = ye === "inline", [Z, Se] = X.useState(ye), [Ce, we] = X.useState(be);
	X.useEffect(() => {
		Se(ye), we(be), _e.current && (xe ? me(Y) : he(Vt));
	}, [ye, be]);
	let [Te, Ee] = X.useState(0), De = Te >= K.length - 1 || Z !== "horizontal" || v;
	X.useEffect(() => {
		xe && ge(J);
	}, [J]), X.useEffect(() => (_e.current = !0, () => {
		_e.current = !1;
	}), []);
	let { registerPath: Oe, unregisterPath: je, refreshOverflowKeys: Me, isSubPathKey: Q, getKeyPath: Ne, getKeys: Fe, getSubPathKeys: Le } = lt(), Re = X.useMemo(() => ({
		registerPath: Oe,
		unregisterPath: je
	}), [Oe, je]), ze = X.useMemo(() => ({ isSubPathKey: Q }), [Q]);
	X.useEffect(() => {
		Me(De ? Vt : K.slice(Te + 1).map((e) => e.key));
	}, [Te, De]);
	let [He, Ue] = T(E || D && K[0]?.key, E), We = ut((e) => {
		Ue(e);
	}), Ge = ut(() => {
		Ue(void 0);
	});
	(0, X.useImperativeHandle)(t, () => ({
		list: ue.current,
		focus: (e) => {
			let t = Fe(), { elements: n, key2element: r, element2key: i } = nt(t, de), a = et(ue.current, n), o;
			o = He && t.includes(He) ? He : a[0] ? i.get(a[0]) : K.find((e) => !e.props.disabled)?.key;
			let s = r.get(o);
			o && s && s?.focus?.(e);
		},
		findItem: ({ key: e }) => {
			let { key2element: t } = nt(Fe(), de);
			return t.get(e) || null;
		}
	}));
	let [Ke, qe] = T(A || [], j), Je = X.useMemo(() => Array.isArray(Ke) ? Ke : Ke == null ? Vt : [Ke], [Ke]), Ye = (e) => {
		if (O) {
			let { key: t } = e, n = Je.includes(t), r;
			r = k ? n ? Je.filter((e) => e !== t) : [...Je, t] : [t], qe(r);
			let i = {
				...e,
				selectedKeys: r
			};
			n ? N?.(i) : M?.(i);
		}
		!k && J.length && Z !== "inline" && he(Vt);
	}, Xe = ut((e) => {
		H?.(mt(e)), Ye(e);
	}), Ze = ut((e, t) => {
		let n = J.filter((t) => t !== e);
		if (t) n.push(e);
		else if (Z !== "inline") {
			let t = Le(e);
			n = n.filter((e) => !t.has(e));
		}
		o(J, n, !0) || he(n, !0);
	}), Qe = rt(Z, He, fe, de, ue, Fe, Ne, Ue, (e, t) => {
		Ze(e, t ?? !J.includes(e));
	}, ne);
	X.useEffect(() => {
		le(!0);
	}, []);
	let $e = X.useMemo(() => ({
		_internalRenderMenuItem: W,
		_internalRenderSubMenuItem: G
	}), [W, G]), tt = Z !== "horizontal" || v ? K : K.map((e, t) => /*#__PURE__*/ X.createElement(Pe, {
		key: e.key,
		overflowDisabled: t > Te,
		classNames: c,
		styles: s
	}, e)), it = /*#__PURE__*/ X.createElement(ve, Bt({
		id: m,
		ref: ue,
		prefixCls: `${n}-overflow`,
		component: "ul",
		itemComponent: yt,
		className: u(n, `${n}-root`, `${n}-${Z}`, a, {
			[`${n}-inline-collapsed`]: Ce,
			[`${n}-rtl`]: fe
		}, r),
		dir: p,
		style: i,
		role: "menu",
		tabIndex: l,
		data: tt,
		renderRawItem: (e) => e,
		renderRawRest: (e) => {
			let t = e.length, n = t ? K.slice(-t) : null;
			return /*#__PURE__*/ X.createElement(Mt, {
				eventKey: ct,
				title: te,
				disabled: De,
				internalPopupClose: t === 0,
				popupClassName: B
			}, n);
		},
		maxCount: Z !== "horizontal" || v ? ve.INVALIDATE : ve.RESPONSIVE,
		ssr: "full",
		"data-menu-list": !0,
		onVisibleChange: (e) => {
			Ee(e);
		},
		onKeyDown: Qe
	}, se));
	return /*#__PURE__*/ X.createElement(Ve.Provider, { value: $e }, /*#__PURE__*/ X.createElement(Ae.Provider, { value: de }, /*#__PURE__*/ X.createElement(Pe, {
		prefixCls: n,
		rootClassName: r,
		classNames: c,
		styles: s,
		mode: Z,
		openKeys: J,
		rtl: fe,
		disabled: _,
		motion: q ? F : null,
		defaultMotions: q ? ee : null,
		activeKey: He,
		onActive: We,
		onInactive: Ge,
		selectedKeys: Je,
		inlineIndent: P,
		subMenuOpenDelay: y,
		subMenuCloseDelay: b,
		forceSubMenuRender: x,
		builtinPlacements: L,
		triggerSubMenuAction: I,
		getPopupContainer: V,
		itemIcon: R,
		expandIcon: z,
		onItemClick: Xe,
		onOpenChange: Ze,
		popupRender: oe
	}, /*#__PURE__*/ X.createElement(Be.Provider, { value: ze }, it), /*#__PURE__*/ X.createElement("div", {
		style: { display: "none" },
		"aria-hidden": !0
	}, /*#__PURE__*/ X.createElement(Ie.Provider, { value: Re }, ce)))));
});
Ht.Item = yt, Ht.SubMenu = Mt, Ht.ItemGroup = It, Ht.Divider = Nt;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/layout/context.js
var Ut = /*#__PURE__*/ X.createContext({ siderHook: {
	addSider: () => null,
	removeSider: () => null
} }), Wt = (e) => {
	let { antCls: t, componentCls: n, colorText: r, footerBg: i, headerHeight: a, headerPadding: o, headerColor: s, footerPadding: c, fontSize: l, bodyBg: u, headerBg: d } = e;
	return {
		[n]: {
			display: "flex",
			flex: "auto",
			flexDirection: "column",
			minHeight: 0,
			background: u,
			"&, *": { boxSizing: "border-box" },
			[`&${n}-has-sider`]: {
				flexDirection: "row",
				[`> ${n}, > ${n}-content`]: { width: 0 }
			},
			[`${n}-header, &${n}-footer`]: { flex: "0 0 auto" },
			"&-rtl": { direction: "rtl" }
		},
		[`${n}-header`]: {
			height: a,
			padding: o,
			color: s,
			lineHeight: x(a),
			background: d,
			[`${t}-menu`]: { lineHeight: "inherit" }
		},
		[`${n}-footer`]: {
			padding: c,
			color: r,
			fontSize: l,
			background: i
		},
		[`${n}-content`]: {
			flex: "auto",
			color: r,
			minHeight: 0
		}
	};
}, Gt = (e) => {
	let { colorBgLayout: t, controlHeight: n, controlHeightLG: r, colorText: i, controlHeightSM: a, marginXXS: o, colorTextLightSolid: s, colorBgContainer: c } = e, l = r * 1.25;
	return {
		colorBgHeader: "#001529",
		colorBgBody: t,
		colorBgTrigger: "#002140",
		bodyBg: t,
		headerBg: "#001529",
		headerHeight: n * 2,
		headerPadding: `0 ${l}px`,
		headerColor: i,
		footerPadding: `${a}px ${l}px`,
		footerBg: t,
		siderBg: "#001529",
		triggerHeight: r + o * 2,
		triggerBg: "#002140",
		triggerColor: s,
		zeroTriggerWidth: r,
		zeroTriggerHeight: r,
		lightSiderBg: c,
		lightTriggerBg: c,
		lightTriggerColor: i
	};
}, Kt = [
	["colorBgBody", "bodyBg"],
	["colorBgHeader", "headerBg"],
	["colorBgTrigger", "triggerBg"]
], qt = Y("Layout", Wt, Gt, { deprecatedTokens: Kt }), Jt = Y(["Layout", "Sider"], (e) => {
	let { componentCls: t, siderBg: n, motionDurationMid: r, motionDurationSlow: i, antCls: a, triggerHeight: o, triggerColor: s, triggerBg: c, headerHeight: l, zeroTriggerWidth: u, zeroTriggerHeight: d, borderRadiusLG: f, lightSiderBg: p, lightTriggerColor: m, lightTriggerBg: h, bodyBg: g } = e;
	return { [t]: {
		position: "relative",
		minWidth: 0,
		background: n,
		transition: `all ${r}, background 0s`,
		"&-has-trigger": { paddingBottom: o },
		"&-right": { order: 1 },
		[`${t}-children`]: {
			height: "100%",
			marginTop: -.1,
			paddingTop: .1,
			[`${a}-menu${a}-menu-inline-collapsed`]: { width: "auto" }
		},
		[`&-zero-width ${t}-children`]: { overflow: "hidden" },
		[`${t}-trigger`]: {
			position: "fixed",
			bottom: 0,
			zIndex: 1,
			height: o,
			color: s,
			lineHeight: x(o),
			textAlign: "center",
			background: c,
			cursor: "pointer",
			transition: `all ${r}`
		},
		[`${t}-zero-width-trigger`]: {
			position: "absolute",
			top: l,
			insetInlineEnd: e.calc(u).mul(-1).equal(),
			zIndex: 1,
			width: u,
			height: d,
			color: s,
			fontSize: e.fontSizeXL,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: n,
			borderRadius: `0 ${x(f)} ${x(f)} 0`,
			cursor: "pointer",
			transition: `background-color ${i} ease`,
			"&::after": {
				position: "absolute",
				inset: 0,
				background: "transparent",
				transition: `all ${i}`,
				content: "\"\""
			},
			"&:hover::after": { background: "rgba(255, 255, 255, 0.2)" },
			"&-right": {
				insetInlineStart: e.calc(u).mul(-1).equal(),
				borderRadius: `${x(f)} 0 0 ${x(f)}`
			}
		},
		"&-light": {
			background: p,
			[`${t}-trigger`]: {
				color: m,
				background: h
			},
			[`${t}-zero-width-trigger`]: {
				color: m,
				background: h,
				border: `1px solid ${g}`,
				borderInlineStart: 0
			}
		}
	} };
}, Gt, { deprecatedTokens: Kt }), Yt = {
	xs: "479.98px",
	sm: "575.98px",
	md: "767.98px",
	lg: "991.98px",
	xl: "1199.98px",
	xxl: "1599.98px",
	xxxl: "1839.98px"
}, Xt = (e) => !Number.isNaN(Number.parseFloat(e)) && Number.isFinite(Number(e)), Zt = /*#__PURE__*/ X.createContext({}), Qt = (() => {
	let e = 0;
	return (t = "") => (e += 1, `${t}${e}`);
})(), $t = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { prefixCls: n, className: r, trigger: i, children: a, defaultCollapsed: o = !1, theme: s = "dark", style: c = {}, collapsible: l = !1, reverseArrow: d = !1, width: h = 200, collapsedWidth: g = 80, zeroWidthTriggerStyle: _, breakpoint: v, onCollapse: y, onBreakpoint: b, ...x } = e, { siderHook: C } = (0, X.useContext)(Ut), [w, T] = (0, X.useState)("collapsed" in e ? e.collapsed : o), [E, D] = (0, X.useState)(!1);
	(0, X.useEffect)(() => {
		"collapsed" in e && T(e.collapsed);
	}, [e.collapsed]);
	let O = (t, n) => {
		"collapsed" in e || T(t), y?.(t, n);
	}, { getPrefixCls: k, direction: A } = (0, X.useContext)(ie), j = k("layout-sider", n), [M, N] = Jt(j), P = (0, X.useRef)(null);
	P.current = (e) => {
		D(e.matches), b?.(e.matches), w !== e.matches && O(e.matches, "responsive");
	}, (0, X.useEffect)(() => {
		function e(e) {
			return P.current?.(e);
		}
		let t;
		return window?.matchMedia !== void 0 && v && v in Yt && (t = window.matchMedia(`screen and (max-width: ${Yt[v]})`), ne(t?.addEventListener) && t.addEventListener("change", e), e(t)), () => {
			ne(t?.removeEventListener) && t.removeEventListener("change", e);
		};
	}, [v]), (0, X.useEffect)(() => {
		let e = Qt("ant-sider-");
		return C.addSider(e), () => C.removeSider(e);
	}, []);
	let F = () => {
		O(!w, "clickTrigger");
	}, ee = f(x, ["collapsed"]), I = w ? g : h, L = Xt(I) ? `${I}px` : String(I), R = Number.parseFloat(String(g || 0)) === 0 ? /*#__PURE__*/ X.createElement("span", {
		onClick: F,
		className: u(`${j}-zero-width-trigger`, `${j}-zero-width-trigger-${d ? "right" : "left"}`),
		style: _
	}, i || /*#__PURE__*/ X.createElement(m, null)) : null, z = A === "rtl" == !d, te = {
		expanded: z ? /*#__PURE__*/ X.createElement(S, null) : /*#__PURE__*/ X.createElement(p, null),
		collapsed: z ? /*#__PURE__*/ X.createElement(p, null) : /*#__PURE__*/ X.createElement(S, null)
	}[w ? "collapsed" : "expanded"], B = i === null ? null : R || /*#__PURE__*/ X.createElement("div", {
		className: `${j}-trigger`,
		onClick: F,
		style: { width: L }
	}, i || te), V = {
		...c,
		flex: `0 0 ${L}`,
		maxWidth: L,
		minWidth: L,
		width: L
	}, H = u(j, `${j}-${s}`, {
		[`${j}-collapsed`]: !!w,
		[`${j}-has-trigger`]: l && i !== null && !R,
		[`${j}-below`]: !!E,
		[`${j}-zero-width`]: Number.parseFloat(L) === 0
	}, r, M, N), U = X.useMemo(() => ({ siderCollapsed: w }), [w]);
	return /*#__PURE__*/ X.createElement(Zt.Provider, { value: U }, /*#__PURE__*/ X.createElement("aside", {
		className: H,
		...ee,
		style: V,
		ref: t
	}, /*#__PURE__*/ X.createElement("div", { className: `${j}-children` }, a), l || E && R ? B : null));
}), en = /*#__PURE__*/ (0, X.createContext)({
	prefixCls: "",
	firstLevel: !0,
	inlineCollapsed: !1,
	styles: null,
	classNames: null
}), tn = (e) => {
	let { prefixCls: t, className: n, dashed: r, ...i } = e, { getPrefixCls: a } = X.useContext(ie), o = u({ [`${a("menu", t)}-item-divider-dashed`]: !!r }, n);
	return /*#__PURE__*/ X.createElement(Nt, {
		className: o,
		...i
	});
}, nn = (e) => {
	let { className: t, children: n, icon: r, title: i, danger: a, extra: o } = e, { prefixCls: s, firstLevel: c, direction: l, disableMenuItemTitleTooltip: d, tooltip: p, inlineCollapsed: m, styles: h, classNames: g } = X.useContext(en), _ = (e) => {
		let t = n?.[0], i = /*#__PURE__*/ X.createElement("span", {
			className: u(`${s}-title-content`, c ? g?.itemContent : g?.subMenu?.itemContent, { [`${s}-title-content-with-extra`]: !!o || o === 0 }),
			style: c ? h?.itemContent : h?.subMenu?.itemContent
		}, n);
		return (!r || /*#__PURE__*/ X.isValidElement(n) && n.type === "span") && n && e && c && typeof t == "string" ? /*#__PURE__*/ X.createElement("div", { className: `${s}-inline-collapsed-noicon` }, t.charAt(0)) : i;
	}, { siderCollapsed: v } = X.useContext(Zt), y = i;
	i === void 0 ? y = c ? n : "" : i === !1 && (y = "");
	let b = p === !1 ? void 0 : p, x = b && b.title !== void 0 ? b.title : y, S = {
		...b ?? null,
		title: x
	};
	!v && !m && (S.title = null, S.open = !1);
	let C = D(n).length, w = /*#__PURE__*/ X.createElement(yt, {
		...f(e, [
			"title",
			"icon",
			"danger"
		]),
		className: u(c ? g?.item : g?.subMenu?.item, {
			[`${s}-item-danger`]: a,
			[`${s}-item-only-child`]: (r ? C + 1 : C) === 1
		}, t),
		style: {
			...c ? h?.item : h?.subMenu?.item,
			...e.style
		},
		title: typeof i == "string" ? i : void 0
	}, I(r, (e) => ({
		className: u(`${s}-item-icon`, c ? g?.itemIcon : g?.subMenu?.itemIcon, e.className),
		style: {
			...c ? h?.itemIcon : h?.subMenu?.itemIcon,
			...e.style
		}
	})), _(m));
	if (!d && p !== !1) {
		let e = b && b.placement ? b.placement : l === "rtl" ? "left" : "right", t = `${s}-inline-collapsed-tooltip`, n = (e) => ({
			...e,
			root: u(t, e?.root)
		}), r = ne(b?.classNames) ? (e) => n(b.classNames(e)) : n(b?.classNames);
		w = /*#__PURE__*/ X.createElement(ye, {
			...S,
			placement: e,
			classNames: r
		}, w);
	}
	return w;
}, rn = /*#__PURE__*/ X.createContext(null), an = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { children: n, ...r } = e, i = X.useContext(rn), a = X.useMemo(() => ({
		...i,
		...r
	}), [
		i,
		r.prefixCls,
		r.mode,
		r.selectable,
		r.rootClassName
	]), o = y(n), s = E(t, o ? b(n) : null);
	return /*#__PURE__*/ X.createElement(rn.Provider, { value: a }, /*#__PURE__*/ X.createElement(q, { space: !0 }, o ? /*#__PURE__*/ X.cloneElement(n, { ref: s }) : n));
}), on = (e) => {
	let { componentCls: t, motionDurationSlow: n, horizontalLineHeight: r, colorSplit: i, lineWidth: a, lineType: o, itemPaddingInline: s } = e;
	return { [`${t}-horizontal`]: {
		lineHeight: r,
		border: 0,
		borderBottom: `${x(a)} ${o} ${i}`,
		boxShadow: "none",
		"&::after": {
			display: "block",
			clear: "both",
			height: 0,
			content: "\"\\20\""
		},
		[`${t}-item, ${t}-submenu`]: {
			position: "relative",
			display: "inline-block",
			verticalAlign: "bottom",
			paddingInline: s
		},
		[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: { backgroundColor: "transparent" },
		[`${t}-item, ${t}-submenu-title`]: { transition: ["border-color", "background-color"].map((e) => `${e} ${n}`).join(",") },
		[`${t}-submenu-arrow`]: { display: "none" }
	} };
}, sn = ({ componentCls: e, menuArrowOffset: t, calc: n }) => ({
	[`${e}-rtl`]: { direction: "rtl" },
	[`${e}-submenu-rtl`]: { transformOrigin: "100% 0" },
	[`${e}-rtl${e}-vertical,
    ${e}-submenu-rtl ${e}-vertical`]: { [`${e}-submenu-arrow`]: {
		"&::before": { transform: `rotate(-45deg) translateY(${x(n(t).mul(-1).equal())})` },
		"&::after": { transform: `rotate(45deg) translateY(${x(t)})` }
	} }
}), cn = (e) => ge(e), ln = (e, t) => {
	let { componentCls: n, itemColor: r, itemSelectedColor: i, subMenuItemSelectedColor: a, groupTitleColor: o, itemBg: s, subMenuItemBg: c, itemSelectedBg: l, activeBarHeight: u, activeBarWidth: d, activeBarBorderWidth: f, motionDurationSlow: p, motionEaseInOut: m, motionEaseOut: h, itemPaddingInline: g, motionDurationMid: _, itemHoverColor: v, lineType: y, colorSplit: b, itemDisabledColor: S, dangerItemColor: C, dangerItemHoverColor: w, dangerItemSelectedColor: T, dangerItemActiveBg: E, dangerItemSelectedBg: D, popupBg: O, itemHoverBg: k, itemActiveBg: A, menuSubMenuBg: j, horizontalItemSelectedColor: M, horizontalItemSelectedBg: N, horizontalItemBorderRadius: P, horizontalItemHoverBg: F } = e;
	return { [`${n}-${t}, ${n}-${t} > ${n}`]: {
		color: r,
		background: s,
		[`&${n}-root:focus-visible`]: { ...cn(e) },
		[`${n}-item`]: { "&-group-title, &-extra": { color: o } },
		[`${n}-submenu-selected > ${n}-submenu-title`]: { color: a },
		[`${n}-item, ${n}-submenu-title`]: {
			color: r,
			[`&:not(${n}-item-disabled):focus-visible`]: { ...cn(e) }
		},
		[`${n}-item-disabled, ${n}-submenu-disabled`]: { color: `${S} !important` },
		[`${n}-item:not(${n}-item-selected):not(${n}-submenu-selected)`]: { [`&:hover, > ${n}-submenu-title:hover`]: { color: v } },
		[`${n}-submenu:not(${n}-submenu-selected)`]: { [`> ${n}-submenu-title:hover`]: { color: v } },
		[`&:not(${n}-horizontal)`]: {
			[`${n}-item:not(${n}-item-selected)`]: {
				"&:hover": { backgroundColor: k },
				"&:active": { backgroundColor: A }
			},
			[`${n}-submenu-title`]: {
				"&:hover": { backgroundColor: k },
				"&:active": { backgroundColor: A }
			}
		},
		[`${n}-item-danger`]: {
			color: C,
			[`&${n}-item:hover`]: { [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: { color: w } },
			[`&${n}-item:active`]: { background: E }
		},
		[`${n}-item a`]: { "&, &:hover": { color: "inherit" } },
		[`${n}-item-selected`]: {
			color: i,
			[`&${n}-item-danger`]: { color: T },
			"a, a:hover": { color: "inherit" }
		},
		[`& ${n}-item-selected`]: {
			backgroundColor: l,
			[`&${n}-item-danger`]: { backgroundColor: D }
		},
		[`&${n}-submenu > ${n}`]: { backgroundColor: j },
		[`&${n}-popup > ${n}`]: { backgroundColor: O },
		[`&${n}-submenu-popup > ${n}`]: { backgroundColor: O },
		[`&${n}-horizontal`]: {
			...t === "dark" ? { borderBottom: 0 } : {},
			[`> ${n}-item, > ${n}-submenu`]: {
				top: f,
				marginTop: e.calc(f).mul(-1).equal(),
				marginBottom: 0,
				borderRadius: P,
				"&::after": {
					position: "absolute",
					insetInline: g,
					bottom: 0,
					borderBottom: `${x(u)} solid transparent`,
					transition: `border-color ${p} ${m}`,
					content: "\"\""
				},
				"&:hover, &-active, &-open": {
					background: F,
					"&::after": {
						borderBottomWidth: u,
						borderBottomColor: M
					}
				},
				"&-selected": {
					color: M,
					backgroundColor: N,
					"&:hover": { backgroundColor: N },
					"&::after": {
						borderBottomWidth: u,
						borderBottomColor: M
					}
				}
			}
		},
		[`&${n}-root`]: { [`&${n}-inline, &${n}-vertical`]: { borderInlineEnd: `${x(f)} ${y} ${b}` } },
		[`&${n}-inline`]: {
			[`${n}-sub${n}-inline`]: { background: c },
			[`${n}-item`]: {
				position: "relative",
				"&::after": {
					position: "absolute",
					insetBlock: 0,
					insetInlineEnd: 0,
					borderInlineEnd: `${x(d)} solid ${i}`,
					transform: "scaleY(0.0001)",
					opacity: 0,
					transition: ["transform", "opacity"].map((e) => `${e} ${_} ${h}`).join(","),
					content: "\"\""
				},
				[`&${n}-item-danger`]: { "&::after": { borderInlineEndColor: T } }
			},
			[`${n}-selected, ${n}-item-selected`]: { "&::after": {
				transform: "scaleY(1)",
				opacity: 1,
				transition: ["transform", "opacity"].map((e) => `${e} ${_} ${m}`).join(",")
			} }
		}
	} };
}, un = (e) => {
	let { componentCls: t, itemHeight: n, itemMarginInline: r, padding: i, menuArrowSize: a, marginXS: o, itemMarginBlock: s, itemWidth: c, itemPaddingInline: l } = e, u = e.calc(a).add(i).add(o).equal();
	return {
		[`${t}-item`]: {
			position: "relative",
			overflow: "hidden"
		},
		[`${t}-item, ${t}-submenu-title`]: {
			height: n,
			lineHeight: x(n),
			paddingInline: l,
			overflow: "hidden",
			textOverflow: "ellipsis",
			marginInline: r,
			marginBlock: s,
			width: c
		},
		[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
			height: n,
			lineHeight: x(n)
		},
		[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: { paddingInlineEnd: u }
	};
}, dn = (e) => {
	let { componentCls: t, iconCls: n, itemHeight: r, colorTextLightSolid: i, dropdownWidth: a, controlHeightLG: o, motionEaseOut: s, padding: c, paddingXL: l, itemMarginInline: u, fontSizeLG: d, motionDurationFast: f, motionDurationSlow: p, paddingXS: m, boxShadowSecondary: h, collapsedWidth: g, collapsedIconSize: _ } = e, v = {
		height: r,
		lineHeight: x(r),
		listStylePosition: "inside",
		listStyleType: "disc"
	};
	return [
		{
			[t]: { "&-inline, &-vertical": {
				[`&${t}-root`]: { boxShadow: "none" },
				...un(e)
			} },
			[`${t}-submenu-popup`]: { [`${t}-vertical`]: {
				...un(e),
				boxShadow: h
			} }
		},
		{ [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
			minWidth: a,
			maxHeight: `calc(100vh - ${x(e.calc(o).mul(2.5).equal())})`,
			padding: "0",
			overflow: "hidden",
			borderInlineEnd: 0,
			"&:not([class*='-active'])": {
				overflowX: "hidden",
				overflowY: "auto"
			}
		} },
		{ [`${t}-inline`]: {
			width: "100%",
			[`&${t}-root`]: { [`${t}-item, ${t}-submenu-title`]: {
				display: "flex",
				alignItems: "center",
				transition: [
					`border-color ${p}`,
					`background-color ${p}`,
					`padding ${f} ${s}`
				].join(","),
				[`> ${t}-title-content`]: {
					flex: "auto",
					minWidth: 0,
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				"> *": { flex: "none" }
			} },
			[`${t}-sub${t}-inline`]: {
				padding: 0,
				border: 0,
				borderRadius: 0,
				boxShadow: "none",
				[`& > ${t}-submenu > ${t}-submenu-title`]: v,
				[`& ${t}-item-group-title`]: { paddingInlineStart: l }
			},
			[`${t}-item`]: v
		} },
		{ [`${t}-inline-collapsed`]: {
			width: g,
			[`&${t}-root`]: { [`${t}-item, ${t}-submenu ${t}-submenu-title`]: { [`> ${t}-inline-collapsed-noicon`]: {
				fontSize: d,
				textAlign: "center",
				width: "100%"
			} } },
			[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				insetInlineStart: 0,
				paddingInline: `calc(50% - ${x(e.calc(_).div(2).equal())} - ${x(u)})`,
				textOverflow: "clip",
				[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: { opacity: 0 },
				[`> ${t}-title-content`]: {
					width: 0,
					opacity: 0,
					overflow: "hidden"
				},
				[`${t}-item-icon, ${n}`]: {
					margin: 0,
					fontSize: _,
					lineHeight: x(r),
					"+ span": {
						display: "inline-block",
						width: 0,
						opacity: 0,
						overflow: "hidden",
						marginInlineStart: 0
					}
				}
			},
			[`${t}-item-icon, ${n}`]: { display: "inline-block" },
			"&-tooltip": {
				pointerEvents: "none",
				[`${t}-item-icon, ${n}`]: { display: "none" },
				[`${t}-item-extra`]: { paddingInlineStart: c },
				"a, a:hover": { color: i }
			},
			[`${t}-item-group-title`]: {
				...K,
				paddingInline: m
			}
		} }
	];
}, fn = (e) => {
	let { componentCls: t, motionDurationSlow: n, motionDurationMid: r, motionEaseInOut: i, motionEaseOut: a, iconCls: o, iconSize: s, iconMarginInlineEnd: c } = e;
	return {
		[`${t}-item, ${t}-submenu-title`]: {
			position: "relative",
			display: "block",
			margin: 0,
			whiteSpace: "nowrap",
			cursor: "pointer",
			transition: [
				`border-color ${n}`,
				`background-color ${n}`,
				`padding calc(${n} + 0.1s) ${i}`
			].join(","),
			[`${t}-item-icon, ${o}`]: {
				minWidth: s,
				fontSize: s,
				transition: [
					`font-size ${r} ${a}`,
					`margin ${n} ${i}`,
					`color ${n}`
				].join(","),
				"+ span": {
					marginInlineStart: c,
					opacity: 1,
					transition: [
						`opacity ${n} ${i}`,
						`margin ${n}`,
						`color ${n}`
					].join(",")
				}
			},
			[`${t}-item-icon`]: { ...de() },
			[`&${t}-item-only-child`]: { [`> ${o}, > ${t}-item-icon`]: { marginInlineEnd: 0 } }
		},
		[`${t}-item-disabled, ${t}-submenu-disabled`]: {
			background: "none !important",
			cursor: "not-allowed",
			"&::after": { borderColor: "transparent !important" },
			a: {
				color: "inherit !important",
				cursor: "not-allowed",
				pointerEvents: "none"
			},
			[`> ${t}-submenu-title`]: {
				color: "inherit !important",
				cursor: "not-allowed"
			}
		}
	};
}, pn = (e) => {
	let { componentCls: t, motionDurationSlow: n, motionEaseInOut: r, borderRadius: i, menuArrowSize: a, menuArrowOffset: o } = e;
	return { [`${t}-submenu`]: {
		"&-expand-icon, &-arrow": {
			position: "absolute",
			top: "50%",
			insetInlineEnd: e.margin,
			width: a,
			color: "currentcolor",
			transform: "translateY(-50%)",
			transition: ["transform", "opacity"].map((e) => `${e} ${n}`).join(",")
		},
		"&-arrow": {
			"&::before, &::after": {
				position: "absolute",
				width: e.calc(a).mul(.6).equal(),
				height: e.calc(a).mul(.15).equal(),
				backgroundColor: "currentcolor",
				borderRadius: i,
				transition: [
					"background-color",
					"transform",
					"top",
					"color"
				].map((e) => `${e} ${n} ${r}`).join(","),
				content: "\"\""
			},
			"&::before": { transform: `rotate(45deg) translateY(${x(e.calc(o).mul(-1).equal())})` },
			"&::after": { transform: `rotate(-45deg) translateY(${x(o)})` }
		}
	} };
}, mn = (e) => {
	let { antCls: t, componentCls: n, fontSize: r, motionDurationSlow: i, motionDurationMid: a, motionEaseInOut: o, paddingXS: s, padding: c, colorSplit: l, lineWidth: u, zIndexPopup: d, borderRadiusLG: f, subMenuItemBorderRadius: p, menuArrowSize: m, menuArrowOffset: h, lineType: g, groupTitleLineHeight: _, groupTitleFontSize: v, iconSize: y, iconMarginInlineEnd: b } = e, S = [`> ${t}-typography-ellipsis-single-line`, `> ${n}-item-label > ${t}-typography-ellipsis-single-line`].join(",");
	return [
		{
			"": { [n]: {
				...le(),
				"&-hidden": { display: "none" }
			} },
			[`${n}-submenu-hidden`]: { display: "none" }
		},
		{ [n]: {
			...J(e),
			...le(),
			marginBottom: 0,
			paddingInlineStart: 0,
			fontSize: r,
			lineHeight: 0,
			listStyle: "none",
			outline: "none",
			transition: `width ${i} cubic-bezier(0.2, 0, 0, 1) 0s`,
			"ul, ol": {
				margin: 0,
				padding: 0,
				listStyle: "none"
			},
			"&-overflow": {
				display: "flex",
				[`${n}-item`]: { flex: "none" }
			},
			[`${n}-item, ${n}-submenu, ${n}-submenu-title`]: { borderRadius: e.itemBorderRadius },
			[`${n}-item-group-title`]: {
				padding: `${x(s)} ${x(c)}`,
				fontSize: v,
				lineHeight: _,
				transition: `all ${i}`
			},
			[`&-horizontal ${n}-submenu`]: { transition: ["border-color", "background-color"].map((e) => `${e} ${i} ${o}`).join(",") },
			[`${n}-submenu, ${n}-submenu-inline`]: { transition: [
				`border-color ${i}`,
				`background-color ${i}`,
				`padding ${a}`
			].map((e) => `${e} ${o}`).join(",") },
			[`${n}-submenu ${n}-sub`]: {
				cursor: "initial",
				transition: ["background-color", "padding"].map((e) => `${e} ${i} ${o}`).join(",")
			},
			[`${n}-title-content`]: {
				transition: `color ${i}`,
				"&-with-extra": {
					display: "inline-flex",
					alignItems: "center",
					width: "100%",
					minWidth: 0
				},
				[`${n}-item-label`]: {
					flex: "auto",
					minWidth: 0,
					...K
				},
				[S]: {
					display: "inline",
					verticalAlign: "unset"
				},
				[`${n}-item-extra`]: {
					flex: "none",
					marginInlineStart: "auto",
					paddingInlineStart: e.padding
				}
			},
			[`${n}-item-icon + ${n}-title-content-with-extra`]: { width: `calc(100% - ${x(e.calc(y).add(b ?? 0).equal())})` },
			[`${n}-item a`]: { "&::before": {
				position: "absolute",
				inset: 0,
				backgroundColor: "transparent",
				content: "\"\""
			} },
			[`${n}-item-divider`]: {
				overflow: "hidden",
				lineHeight: 0,
				borderColor: l,
				borderStyle: g,
				borderWidth: 0,
				borderTopWidth: u,
				marginBlock: u,
				padding: 0,
				"&-dashed": { borderStyle: "dashed" }
			},
			...fn(e),
			[`${n}-item-group`]: { [`${n}-item-group-list`]: {
				margin: 0,
				padding: 0,
				[`${n}-item, ${n}-submenu-title`]: { paddingInline: `${x(e.calc(r).mul(2).equal())} ${x(c)}` }
			} },
			"&-submenu": {
				"&-popup": {
					position: "absolute",
					zIndex: d,
					borderRadius: f,
					boxShadow: "none",
					transformOrigin: "0 0",
					[`&${n}-submenu`]: { background: "transparent" },
					"&::before": {
						position: "absolute",
						inset: 0,
						zIndex: -1,
						width: "100%",
						height: "100%",
						opacity: 0,
						content: "\"\""
					},
					[`> ${n}`]: {
						borderRadius: f,
						...fn(e),
						...pn(e),
						[`${n}-item, ${n}-submenu > ${n}-submenu-title`]: { borderRadius: p },
						[`${n}-submenu-title::after`]: { transition: `transform ${i} ${o}` }
					}
				},
				"&-placement-leftTop, &-placement-bottomRight": { transformOrigin: "100% 0" },
				"&-placement-leftBottom, &-placement-topRight": { transformOrigin: "100% 100%" },
				"&-placement-rightBottom, &-placement-topLeft": { transformOrigin: "0 100%" },
				"&-placement-bottomLeft, &-placement-rightTop": { transformOrigin: "0 0" },
				"&-placement-leftTop, &-placement-leftBottom": { paddingInlineEnd: e.paddingXS },
				"&-placement-rightTop, &-placement-rightBottom": { paddingInlineStart: e.paddingXS },
				"&-placement-topRight, &-placement-topLeft": { paddingBottom: e.paddingXS },
				"&-placement-bottomRight, &-placement-bottomLeft": { paddingTop: e.paddingXS }
			},
			...pn(e),
			[`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
				"&::before": { transform: `rotate(-45deg) translateX(${x(h)})` },
				"&::after": { transform: `rotate(45deg) translateX(${x(e.calc(h).mul(-1).equal())})` }
			},
			[`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]: {
				transform: `translateY(${x(e.calc(m).mul(.2).mul(-1).equal())})`,
				"&::after": { transform: `rotate(-45deg) translateX(${x(e.calc(h).mul(-1).equal())})` },
				"&::before": { transform: `rotate(45deg) translateX(${x(h)})` }
			}
		} },
		{ [`${t}-layout-header`]: { [n]: { lineHeight: "inherit" } } }
	];
}, hn = (e) => {
	let { colorPrimary: t, colorError: n, colorTextDisabled: r, colorErrorBg: i, colorText: a, colorTextDescription: o, colorBgContainer: s, colorFillAlter: c, colorFillContent: l, lineWidth: u, lineWidthBold: d, controlItemBgActive: f, colorBgTextHover: p, controlHeightLG: m, lineHeight: h, colorBgElevated: g, marginXXS: v, padding: y, fontSize: b, controlHeightSM: x, fontSizeLG: S, colorTextLightSolid: C, colorErrorHover: w } = e, T = e.activeBarWidth ?? 0, E = e.activeBarBorderWidth ?? u, D = e.itemMarginInline ?? e.marginXXS, O = new _(C).setA(.65).toRgbString();
	return {
		dropdownWidth: 160,
		zIndexPopup: e.zIndexPopupBase + 50,
		radiusItem: e.borderRadiusLG,
		itemBorderRadius: e.borderRadiusLG,
		radiusSubMenuItem: e.borderRadiusSM,
		subMenuItemBorderRadius: e.borderRadiusSM,
		colorItemText: a,
		itemColor: a,
		colorItemTextHover: a,
		itemHoverColor: a,
		colorItemTextHoverHorizontal: t,
		horizontalItemHoverColor: t,
		colorGroupTitle: o,
		groupTitleColor: o,
		colorItemTextSelected: t,
		itemSelectedColor: t,
		subMenuItemSelectedColor: t,
		colorItemTextSelectedHorizontal: t,
		horizontalItemSelectedColor: t,
		colorItemBg: s,
		itemBg: s,
		colorItemBgHover: p,
		itemHoverBg: p,
		colorItemBgActive: l,
		itemActiveBg: f,
		colorSubItemBg: c,
		subMenuItemBg: c,
		colorItemBgSelected: f,
		itemSelectedBg: f,
		colorItemBgSelectedHorizontal: "transparent",
		horizontalItemSelectedBg: "transparent",
		colorActiveBarWidth: 0,
		activeBarWidth: T,
		colorActiveBarHeight: d,
		activeBarHeight: d,
		colorActiveBarBorderSize: u,
		activeBarBorderWidth: E,
		colorItemTextDisabled: r,
		itemDisabledColor: r,
		colorDangerItemText: n,
		dangerItemColor: n,
		colorDangerItemTextHover: n,
		dangerItemHoverColor: n,
		colorDangerItemTextSelected: n,
		dangerItemSelectedColor: n,
		colorDangerItemBgActive: i,
		dangerItemActiveBg: i,
		colorDangerItemBgSelected: i,
		dangerItemSelectedBg: i,
		itemMarginInline: D,
		horizontalItemBorderRadius: 0,
		horizontalItemHoverBg: "transparent",
		itemHeight: m,
		groupTitleLineHeight: h,
		collapsedWidth: m * 2,
		popupBg: g,
		itemMarginBlock: v,
		itemPaddingInline: y,
		horizontalLineHeight: `${m * 1.15}px`,
		iconSize: b,
		iconMarginInlineEnd: x - b,
		collapsedIconSize: S,
		groupTitleFontSize: b,
		darkItemDisabledColor: new _(C).setA(.25).toRgbString(),
		darkItemColor: O,
		darkDangerItemColor: n,
		darkItemBg: "#001529",
		darkPopupBg: "#001529",
		darkSubMenuItemBg: "#000c17",
		darkItemSelectedColor: C,
		darkItemSelectedBg: t,
		darkDangerItemSelectedBg: n,
		darkItemHoverBg: "transparent",
		darkGroupTitleColor: O,
		darkItemHoverColor: C,
		darkDangerItemHoverColor: w,
		darkDangerItemSelectedColor: C,
		darkDangerItemActiveBg: n,
		itemWidth: T ? `calc(100% + ${E}px)` : `calc(100% - ${D * 2}px)`
	};
}, gn = (e, t = e, n = !0) => Y("Menu", (e) => {
	let { colorBgElevated: t, controlHeightLG: n, fontSize: r, darkItemColor: i, darkDangerItemColor: a, darkItemBg: o, darkSubMenuItemBg: s, darkItemSelectedColor: c, darkItemSelectedBg: l, darkDangerItemSelectedBg: u, darkItemHoverBg: d, darkGroupTitleColor: f, darkItemHoverColor: p, darkItemDisabledColor: m, darkDangerItemHoverColor: h, darkDangerItemSelectedColor: g, darkDangerItemActiveBg: _, popupBg: v, darkPopupBg: y } = e, b = e.calc(r).div(7).mul(5).equal(), x = k(e, {
		menuArrowSize: b,
		menuHorizontalHeight: e.calc(n).mul(1.15).equal(),
		menuArrowOffset: e.calc(b).mul(.25).equal(),
		menuSubMenuBg: t,
		calc: e.calc,
		popupBg: v
	}), S = k(x, {
		itemColor: i,
		itemHoverColor: p,
		groupTitleColor: f,
		itemSelectedColor: c,
		subMenuItemSelectedColor: c,
		itemBg: o,
		popupBg: y,
		subMenuItemBg: s,
		itemActiveBg: "transparent",
		itemSelectedBg: l,
		activeBarHeight: 0,
		activeBarBorderWidth: 0,
		itemHoverBg: d,
		itemDisabledColor: m,
		dangerItemColor: a,
		dangerItemHoverColor: h,
		dangerItemSelectedColor: g,
		dangerItemActiveBg: _,
		dangerItemSelectedBg: u,
		menuSubMenuBg: s,
		horizontalItemSelectedColor: c,
		horizontalItemSelectedBg: l
	});
	return [
		mn(x),
		on(x),
		dn(x),
		ln(x, "light"),
		ln(S, "dark"),
		sn(x),
		P(x),
		z(x, "slide-up"),
		z(x, "slide-down"),
		N(x, "zoom-big")
	];
}, hn, {
	deprecatedTokens: [
		["colorGroupTitle", "groupTitleColor"],
		["radiusItem", "itemBorderRadius"],
		["radiusSubMenuItem", "subMenuItemBorderRadius"],
		["colorItemText", "itemColor"],
		["colorItemTextHover", "itemHoverColor"],
		["colorItemTextHoverHorizontal", "horizontalItemHoverColor"],
		["colorItemTextSelected", "itemSelectedColor"],
		["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"],
		["colorItemTextDisabled", "itemDisabledColor"],
		["colorDangerItemText", "dangerItemColor"],
		["colorDangerItemTextHover", "dangerItemHoverColor"],
		["colorDangerItemTextSelected", "dangerItemSelectedColor"],
		["colorDangerItemBgActive", "dangerItemActiveBg"],
		["colorDangerItemBgSelected", "dangerItemSelectedBg"],
		["colorItemBg", "itemBg"],
		["colorItemBgHover", "itemHoverBg"],
		["colorSubItemBg", "subMenuItemBg"],
		["colorItemBgActive", "itemActiveBg"],
		["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"],
		["colorActiveBarWidth", "activeBarWidth"],
		["colorActiveBarHeight", "activeBarHeight"],
		["colorActiveBarBorderSize", "activeBarBorderWidth"],
		["colorItemBgSelected", "itemSelectedBg"]
	],
	injectStyle: n,
	unitless: { groupTitleLineHeight: !0 }
})(e, t), _n = (e) => {
	let { popupClassName: t, icon: n, title: r, theme: i } = e, a = X.useContext(en), { prefixCls: o, inlineCollapsed: s, theme: c, classNames: l, styles: d } = a, p = ze(), m;
	if (!n) m = s && !p.length && r && typeof r == "string" ? /*#__PURE__*/ X.createElement("div", { className: `${o}-inline-collapsed-noicon` }, r.charAt(0)) : /*#__PURE__*/ X.createElement("span", { className: `${o}-title-content` }, r);
	else {
		let e = /*#__PURE__*/ X.isValidElement(r) && r.type === "span";
		m = /*#__PURE__*/ X.createElement(X.Fragment, null, I(n, (e) => ({
			className: u(e.className, `${o}-item-icon`, l?.itemIcon),
			style: {
				...e.style,
				...d?.itemIcon
			}
		})), e ? r : /*#__PURE__*/ X.createElement("span", { className: `${o}-title-content` }, r));
	}
	let h = X.useMemo(() => ({
		...a,
		firstLevel: !1
	}), [a]), [g] = oe("Menu");
	return /*#__PURE__*/ X.createElement(en.Provider, { value: h }, /*#__PURE__*/ X.createElement(Mt, {
		...f(e, ["icon"]),
		title: m,
		classNames: {
			list: l?.subMenu?.list,
			listTitle: l?.subMenu?.itemTitle
		},
		styles: {
			list: d?.subMenu?.list,
			listTitle: d?.subMenu?.itemTitle
		},
		popupClassName: u(o, t, l?.popup?.root, `${o}-${i || c}`),
		popupStyle: {
			zIndex: g,
			...e.popupStyle,
			...d?.popup?.root
		}
	}));
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/menu/menu.js
function vn(e) {
	return e === null || e === !1;
}
var yn = {
	item: nn,
	submenu: _n,
	divider: tn
}, bn = /*#__PURE__*/ (0, X.forwardRef)((e, t) => {
	let n = X.useContext(rn), r = n || {}, { prefixCls: i, className: a, style: o, theme: s = "light", expandIcon: l, _internalDisableMenuItemTitleTooltip: d, tooltip: p, inlineCollapsed: m, siderCollapsed: h, rootClassName: g, mode: _, selectable: y, onClick: b, overflowedIndicatorPopupClassName: x, classNames: S, styles: C, ...w } = e, { menu: T } = X.useContext(ie), { getPrefixCls: E, getPopupContainer: D, direction: O, className: k, style: A, classNames: j, styles: M } = te("menu"), N = E(), P = f(w, ["collapsedWidth"]);
	r.validator?.({ mode: _ });
	let F = v((...e) => {
		b?.(...e), r.onClick?.();
	}), L = r.mode || _, R = y ?? r.selectable, z = m ?? h, B = {
		...e,
		mode: L,
		inlineCollapsed: z,
		selectable: R,
		theme: s
	}, [V, U] = ee([j, S], [M, C], { props: B }, {
		popup: { _default: "root" },
		subMenu: { _default: "item" }
	}), re = {
		horizontal: { motionName: `${N}-slide-up` },
		inline: ce(N),
		other: { motionName: `${N}-zoom-big` }
	}, W = E("menu", i || r.prefixCls), G = H(W), [ae, oe] = gn(W, G, !n), se = u(`${W}-${s}`, k, a), K = X.useMemo(() => {
		if (ne(l) || vn(l)) return l || null;
		if (ne(r.expandIcon) || vn(r.expandIcon)) return r.expandIcon || null;
		if (ne(T?.expandIcon) || vn(T?.expandIcon)) return T?.expandIcon || null;
		let e = l ?? r?.expandIcon ?? T?.expandIcon;
		return I(e, { className: u(`${W}-submenu-expand-icon`, /*#__PURE__*/ X.isValidElement(e) ? e.props?.className : void 0) });
	}, [
		l,
		r?.expandIcon,
		T?.expandIcon,
		W
	]), q = X.useMemo(() => ({
		prefixCls: W,
		inlineCollapsed: z || !1,
		direction: O,
		firstLevel: !0,
		theme: s,
		mode: L,
		disableMenuItemTitleTooltip: d,
		tooltip: p,
		classNames: V,
		styles: U
	}), [
		W,
		z,
		O,
		d,
		s,
		L,
		V,
		U,
		p
	]);
	return /*#__PURE__*/ X.createElement(rn.Provider, { value: null }, /*#__PURE__*/ X.createElement(en.Provider, { value: q }, /*#__PURE__*/ X.createElement(Ht, {
		getPopupContainer: D,
		overflowedIndicator: /*#__PURE__*/ X.createElement(c, null),
		overflowedIndicatorPopupClassName: u(W, `${W}-${s}`, x),
		classNames: {
			list: V.list,
			listTitle: V.itemTitle
		},
		styles: {
			list: U.list,
			listTitle: U.itemTitle
		},
		mode: L,
		selectable: R,
		onClick: F,
		...P,
		inlineCollapsed: z,
		style: {
			...U.root,
			...A,
			...o
		},
		className: se,
		prefixCls: W,
		direction: O,
		defaultMotions: re,
		expandIcon: K,
		ref: t,
		rootClassName: u(g, ae, r.rootClassName, oe, G, V.root),
		_internalComponents: yn
	})));
}), xn = /* @__PURE__ */ e({ default: () => Sn }), Sn = /*#__PURE__*/ (0, X.forwardRef)((e, t) => {
	let n = (0, X.useRef)(null), r = X.useContext(Zt);
	return (0, X.useImperativeHandle)(t, () => ({
		menu: n.current,
		focus: (e) => {
			n.current?.focus(e);
		}
	})), /*#__PURE__*/ X.createElement(bn, {
		ref: n,
		...e,
		...r
	});
});
Sn.Item = nn, Sn.SubMenu = _n, Sn.Divider = tn, Sn.ItemGroup = It;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/dropdown/style/status.js
var Cn = (e) => {
	let { componentCls: t, menuCls: n, colorError: r, colorTextLightSolid: i } = e, a = `${n}-item`;
	return { [`${t}, ${t}-menu-submenu`]: { [`${n} ${a}`]: { [`&${a}-danger:not(${a}-disabled)`]: {
		color: r,
		"&:hover": {
			color: i,
			backgroundColor: r
		}
	} } } };
}, wn = (e) => {
	let { componentCls: t, menuCls: n, zIndexPopup: r, dropdownArrowDistance: i, sizePopupArrow: a, antCls: o, iconCls: s, motionDurationMid: c, paddingBlock: l, fontSize: u, dropdownEdgeChildPadding: d, colorTextDisabled: f, fontSizeIcon: p, controlPaddingHorizontal: m, colorBgElevated: h } = e;
	return [
		{ [t]: {
			position: "absolute",
			top: -9999,
			left: {
				_skip_check_: !0,
				value: -9999
			},
			zIndex: r,
			display: "block",
			"&::before": {
				position: "absolute",
				insetBlock: e.calc(a).div(2).sub(i).equal(),
				zIndex: -9999,
				opacity: 1e-4,
				content: "\"\""
			},
			"&-menu-vertical": {
				maxHeight: "100vh",
				overflowY: "auto"
			},
			[`&-trigger${o}-btn`]: { [`& > ${s}-down, & > ${o}-btn-icon > ${s}-down`]: { fontSize: p } },
			[`${t}-wrap`]: {
				position: "relative",
				[`${o}-btn > ${s}-down`]: { fontSize: p },
				[`${s}-down::before`]: { transition: `transform ${c}` }
			},
			[`${t}-wrap-open`]: { [`${s}-down::before`]: { transform: "rotate(180deg)" } },
			"&-hidden, &-menu-hidden, &-menu-submenu-hidden": { display: "none" },
			[`&${o}-slide-down-enter${o}-slide-down-enter-active${t}-placement-bottomLeft,
          &${o}-slide-down-appear${o}-slide-down-appear-active${t}-placement-bottomLeft,
          &${o}-slide-down-enter${o}-slide-down-enter-active${t}-placement-bottom,
          &${o}-slide-down-appear${o}-slide-down-appear-active${t}-placement-bottom,
          &${o}-slide-down-enter${o}-slide-down-enter-active${t}-placement-bottomRight,
          &${o}-slide-down-appear${o}-slide-down-appear-active${t}-placement-bottomRight`]: { animationName: V },
			[`&${o}-slide-up-enter${o}-slide-up-enter-active${t}-placement-topLeft,
          &${o}-slide-up-appear${o}-slide-up-appear-active${t}-placement-topLeft,
          &${o}-slide-up-enter${o}-slide-up-enter-active${t}-placement-top,
          &${o}-slide-up-appear${o}-slide-up-appear-active${t}-placement-top,
          &${o}-slide-up-enter${o}-slide-up-enter-active${t}-placement-topRight,
          &${o}-slide-up-appear${o}-slide-up-appear-active${t}-placement-topRight`]: { animationName: _e },
			[`&${o}-slide-down-leave${o}-slide-down-leave-active${t}-placement-bottomLeft,
          &${o}-slide-down-leave${o}-slide-down-leave-active${t}-placement-bottom,
          &${o}-slide-down-leave${o}-slide-down-leave-active${t}-placement-bottomRight`]: { animationName: F },
			[`&${o}-slide-up-leave${o}-slide-up-leave-active${t}-placement-topLeft,
          &${o}-slide-up-leave${o}-slide-up-leave-active${t}-placement-top,
          &${o}-slide-up-leave${o}-slide-up-leave-active${t}-placement-topRight`]: { animationName: j }
		} },
		ue(e, h, { arrowPlacement: {
			top: !0,
			bottom: !0
		} }),
		{
			[`${t} ${n}`]: {
				position: "relative",
				margin: 0
			},
			[`${n}-submenu-popup`]: {
				position: "absolute",
				zIndex: r,
				background: "transparent",
				boxShadow: "none",
				transformOrigin: "0 0",
				"ul, li": {
					listStyle: "none",
					margin: 0
				}
			},
			[`${t}, ${t}-menu-submenu`]: {
				...J(e),
				[n]: {
					padding: d,
					listStyleType: "none",
					backgroundColor: h,
					backgroundClip: "padding-box",
					borderRadius: e.borderRadiusLG,
					outline: "none",
					boxShadow: e.boxShadowSecondary,
					...W(e),
					"&:empty": {
						padding: 0,
						boxShadow: "none"
					},
					[`${n}-item-group-title`]: {
						padding: `${x(l)} ${x(m)}`,
						color: e.colorTextDescription,
						transition: `all ${c}`
					},
					[`${n}-item`]: {
						position: "relative",
						display: "flex",
						alignItems: "center"
					},
					[`${n}-item-icon`]: {
						minWidth: u,
						marginInlineEnd: e.marginXS,
						fontSize: e.fontSizeSM
					},
					[`${n}-title-content`]: {
						flex: "auto",
						"&-with-extra": {
							display: "inline-flex",
							alignItems: "center",
							width: "100%"
						},
						[`> a, > ${n}-item-label > a`]: {
							color: "inherit",
							transition: `all ${c}`,
							"&:hover": { color: "inherit" },
							"&::after": {
								position: "absolute",
								inset: 0,
								content: "\"\""
							}
						},
						[`${n}-item-extra`]: {
							paddingInlineStart: e.padding,
							marginInlineStart: "auto",
							fontSize: e.fontSizeSM,
							color: e.colorTextDescription
						}
					},
					[`${n}-item, ${n}-submenu-title`]: {
						display: "flex",
						margin: 0,
						padding: `${x(l)} ${x(m)}`,
						color: e.colorText,
						fontWeight: "normal",
						fontSize: u,
						lineHeight: e.lineHeight,
						cursor: "pointer",
						transition: `all ${c}`,
						borderRadius: e.borderRadiusSM,
						"&:hover, &-active": { backgroundColor: e.controlItemBgHover },
						...W(e),
						"&-selected": {
							color: e.colorPrimary,
							backgroundColor: e.controlItemBgActive,
							"&:hover, &-active": { backgroundColor: e.controlItemBgActiveHover }
						},
						"&-disabled": {
							color: f,
							cursor: "not-allowed",
							"&:hover": {
								color: f,
								backgroundColor: h,
								cursor: "not-allowed"
							},
							a: { pointerEvents: "none" }
						},
						"&-divider": {
							height: 1,
							margin: `${x(e.marginXXS)} 0`,
							overflow: "hidden",
							lineHeight: 0,
							backgroundColor: e.colorSplit
						},
						[`${t}-menu-submenu-expand-icon`]: {
							position: "absolute",
							insetInlineEnd: e.paddingXS,
							[`${t}-menu-submenu-arrow-icon`]: {
								marginInlineEnd: "0 !important",
								color: e.colorIcon,
								fontSize: p,
								fontStyle: "normal"
							}
						}
					},
					[`${n}-item-group-list`]: {
						margin: `0 ${x(e.marginXS)}`,
						padding: 0,
						listStyle: "none"
					},
					[`${n}-submenu-title`]: { paddingInlineEnd: e.calc(m).add(e.fontSizeSM).equal() },
					[`${n}-submenu-vertical`]: { position: "relative" },
					[`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: { [`&, ${t}-menu-submenu-arrow-icon`]: {
						color: f,
						backgroundColor: h,
						cursor: "not-allowed"
					} },
					[`${n}-submenu-selected ${t}-menu-submenu-title`]: { color: e.colorPrimary }
				}
			}
		},
		[
			z(e, "slide-up"),
			z(e, "slide-down"),
			B(e, "move-up"),
			B(e, "move-down"),
			N(e, "zoom-big")
		]
	];
}, Tn = Y("Dropdown", (e) => {
	let { marginXXS: t, sizePopupArrow: n, paddingXXS: r, componentCls: i } = e, a = k(e, {
		menuCls: `${i}-menu`,
		dropdownArrowDistance: e.calc(n).div(2).add(t).equal(),
		dropdownEdgeChildPadding: r
	});
	return [wn(a), Cn(a)];
}, (e) => ({
	zIndexPopup: e.zIndexPopupBase + 50,
	paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2,
	...pe({
		contentRadius: e.borderRadiusLG,
		limitVerticalRadius: !0
	}),
	...se(e)
}), { resetStyle: !1 }), En = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { menu: n, arrow: r, prefixCls: i, children: a, trigger: o, disabled: s, dropdownRender: c, popupRender: l, getPopupContainer: d, overlayClassName: m, rootClassName: h, overlayStyle: g, open: _, onOpenChange: y, mouseEnterDelay: x = .15, mouseLeaveDelay: C = .1, autoAdjustOverflow: w = !0, placement: D = "", transitionName: O, classNames: k, styles: j, destroyPopupOnHide: M, destroyOnHidden: N } = e, { getPrefixCls: P, direction: F, getPopupContainer: L, className: z, style: B, classNames: V, styles: U } = te("dropdown"), ne = {
		...e,
		mouseEnterDelay: x,
		mouseLeaveDelay: C,
		autoAdjustOverflow: w
	}, [ie, W] = ee([V, k], [U, j], { props: ne }), G = {
		...B,
		...g,
		...W.root
	}, se = l || c;
	he("Dropdown");
	let K = X.useMemo(() => {
		let e = P();
		return O === void 0 ? D.includes("top") ? `${e}-slide-down` : `${e}-slide-up` : O;
	}, [
		P,
		D,
		O
	]), ce = X.useMemo(() => D ? D.includes("Center") ? D.slice(0, D.indexOf("Center")) : D : F === "rtl" ? "bottomRight" : "bottomLeft", [D, F]), q = P("dropdown", i), le = H(q), [ue, de] = Tn(q, le), [, fe] = re(), pe = X.Children.only(A(a) ? /*#__PURE__*/ X.createElement("span", null, a) : a), J = E(t, b(pe)), Y = I(pe, {
		className: u(`${q}-trigger`, { [`${q}-rtl`]: F === "rtl" }, pe.props.className),
		disabled: pe.props.disabled ?? s,
		ref: J
	}), ge = s ? [] : o, _e = !!ge?.includes("contextMenu"), [ve, ye] = T(!1, _), be = v((e) => {
		y?.(e, { source: "trigger" }), ye(e);
	}), xe = u(m, h, ue, de, le, z, ie.root, { [`${q}-rtl`]: F === "rtl" }), Z = ae({
		arrowPointAtCenter: R(r) && r.pointAtCenter,
		autoAdjustOverflow: w,
		offset: fe.marginXXS,
		arrowWidth: r ? fe.sizePopupArrow : 0,
		borderRadius: fe.borderRadius
	}), Se = v(() => {
		n?.selectable && n?.multiple || (y?.(!1, { source: "menu" }), ye(!1));
	}), Ce = () => {
		let e = f(ie, ["root"]), t = f(W, ["root"]), r;
		return n?.items && (r = /*#__PURE__*/ X.createElement(Sn, {
			...n,
			classNames: {
				...e,
				subMenu: { ...e }
			},
			styles: {
				...t,
				subMenu: { ...t }
			}
		})), se && (r = se(r)), r = X.Children.only(typeof r == "string" ? /*#__PURE__*/ X.createElement("span", null, r) : r), /*#__PURE__*/ X.createElement(an, {
			prefixCls: `${q}-menu`,
			rootClassName: u(de, le),
			expandIcon: /*#__PURE__*/ X.createElement("span", { className: `${q}-menu-submenu-arrow` }, F === "rtl" ? /*#__PURE__*/ X.createElement(p, { className: `${q}-menu-submenu-arrow-icon` }) : /*#__PURE__*/ X.createElement(S, { className: `${q}-menu-submenu-arrow-icon` })),
			mode: "vertical",
			selectable: !1,
			onClick: Se,
			validator: ({ mode: e }) => {}
		}, r);
	}, [we, Te] = oe("Dropdown", G.zIndex), Ee = /*#__PURE__*/ X.createElement(Oe, {
		alignPoint: _e,
		...f(e, ["rootClassName", "onOpenChange"]),
		mouseEnterDelay: x,
		mouseLeaveDelay: C,
		visible: ve,
		builtinPlacements: Z,
		arrow: !!r,
		overlayClassName: xe,
		prefixCls: q,
		getPopupContainer: d || L,
		transitionName: K,
		trigger: ge,
		overlay: Ce,
		placement: ce,
		onVisibleChange: be,
		overlayStyle: {
			...G,
			zIndex: we
		},
		autoDestroy: N ?? M
	}, Y);
	return we && (Ee = /*#__PURE__*/ X.createElement(me.Provider, { value: Te }, Ee)), Ee;
}), Dn = L(En, "align", void 0, "dropdown", (e) => e);
En._InternalPanelDoNotUseOrYouWillBeFired = (e) => /*#__PURE__*/ X.createElement(Dn, { ...e }, /*#__PURE__*/ X.createElement("span", null));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/breadcrumb/BreadcrumbSeparator.js
var On = ({ children: e }) => {
	let { getPrefixCls: t } = X.useContext(ie), n = t("breadcrumb"), { classNames: r, styles: i } = X.useContext(be);
	return /*#__PURE__*/ X.createElement("li", {
		className: u(`${n}-separator`, r?.separator),
		style: i?.separator,
		"aria-hidden": "true"
	}, e === "" ? e : e || "/");
};
On.__ANT_BREADCRUMB_SEPARATOR = !0;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/breadcrumb/useItemRender.js
function kn(e, t) {
	if (!G(e.title)) return null;
	let n = Object.keys(t).join("|");
	return R(e.title) ? e.title : String(e.title).replace(RegExp(`:(${n})`, "g"), (e, n) => t[n] || e);
}
function An(e, t, n, r) {
	if (!G(n)) return null;
	let { className: i, onClick: a, ...o } = t, c = {
		...s(o, {
			data: !0,
			aria: !0
		}),
		onClick: a
	};
	return r === void 0 ? /*#__PURE__*/ X.createElement("span", {
		...c,
		className: u(`${e}-link`, i)
	}, n) : /*#__PURE__*/ X.createElement("a", {
		...c,
		className: u(`${e}-link`, i),
		href: r
	}, n);
}
function jn(e, t) {
	return (n, r, i, a, o) => t ? t(n, r, i, a) : An(e, n, kn(n, r), o);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/breadcrumb/BreadcrumbItem.js
var Mn = (e) => {
	let { prefixCls: t, separator: n = "/", children: r, menu: i, dropdownProps: a, href: o, dropdownIcon: s } = e, { classNames: c, styles: l } = X.useContext(be), d = ((e) => {
		if (i) {
			let n = { ...a };
			if (i) {
				let { items: e, ...t } = i || {};
				n.menu = {
					...t,
					items: e?.map(({ key: e, title: t, label: n, path: r, ...i }, a) => {
						let s = n ?? t;
						return r && (s = /*#__PURE__*/ X.createElement("a", { href: `${o}${r}` }, s)), {
							...i,
							key: e ?? a,
							label: s
						};
					})
				};
			}
			return /*#__PURE__*/ X.createElement(En, {
				placement: "bottom",
				...n
			}, /*#__PURE__*/ X.createElement("span", { className: `${t}-overlay-link` }, e, s));
		}
		return e;
	})(r);
	return U(d) ? /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("li", {
		className: u(`${t}-item`, c?.item),
		style: l?.item
	}, d), n && /*#__PURE__*/ X.createElement(On, null, n)) : null;
}, Nn = (e) => {
	let { prefixCls: t, children: n, href: r, ...i } = e, { getPrefixCls: a } = X.useContext(ie), o = a("breadcrumb", t);
	return /*#__PURE__*/ X.createElement(Mn, {
		...i,
		prefixCls: o
	}, An(o, i, n, r));
};
Nn.__ANT_BREADCRUMB_ITEM = !0;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/breadcrumb/style/index.js
var Pn = (e) => {
	let { componentCls: t, iconCls: n, calc: r } = e;
	return { [t]: {
		...J(e),
		color: e.itemColor,
		fontSize: e.fontSize,
		[n]: { fontSize: e.iconFontSize },
		ol: {
			display: "flex",
			flexWrap: "wrap",
			margin: 0,
			padding: 0,
			listStyle: "none"
		},
		[`${t}-item a`]: {
			color: e.linkColor,
			transition: `color ${e.motionDurationMid}`,
			padding: `0 ${x(e.paddingXXS)}`,
			borderRadius: e.borderRadiusSM,
			height: e.fontHeight,
			display: "inline-block",
			marginInline: r(e.marginXXS).mul(-1).equal(),
			"&:hover": {
				color: e.linkHoverColor,
				backgroundColor: e.colorBgTextHover
			},
			...W(e)
		},
		[`${t}-item:last-child`]: { color: e.lastItemColor },
		[`${t}-separator`]: {
			marginInline: e.separatorMargin,
			color: e.separatorColor
		},
		[`${t}-link`]: { [`
          > ${n} + span,
          > ${n} + a
        `]: { marginInlineStart: e.marginXXS } },
		[`${t}-overlay-link`]: {
			borderRadius: e.borderRadiusSM,
			height: e.fontHeight,
			display: "inline-block",
			padding: `0 ${x(e.paddingXXS)}`,
			marginInline: r(e.marginXXS).mul(-1).equal(),
			[`> ${n}`]: {
				marginInlineStart: e.marginXXS,
				fontSize: e.fontSizeIcon
			},
			"&:hover": {
				color: e.linkHoverColor,
				backgroundColor: e.colorBgTextHover,
				a: { color: e.linkHoverColor }
			},
			a: { "&:hover": { backgroundColor: "transparent" } }
		},
		[`&${e.componentCls}-rtl`]: { direction: "rtl" }
	} };
}, Fn = Y("Breadcrumb", (e) => Pn(k(e, {})), (e) => ({
	itemColor: e.colorTextDescription,
	lastItemColor: e.colorText,
	iconFontSize: e.fontSize,
	linkColor: e.colorTextDescription,
	linkHoverColor: e.colorText,
	separatorColor: e.colorTextDescription,
	separatorMargin: e.marginXS
}));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/breadcrumb/useItems.js
function In(e) {
	let { breadcrumbName: t, children: n, ...r } = e, i = {
		title: t,
		...r
	};
	return n && (i.menu = { items: n.map(({ breadcrumbName: e, ...t }) => ({
		...t,
		title: e
	})) }), i;
}
function Ln(e, t) {
	return (0, X.useMemo)(() => e || (t ? t.map(In) : null), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/breadcrumb/Breadcrumb.js
var Rn = (e, t) => {
	if (t === void 0) return t;
	let n = (t || "").replace(/^\//, "");
	return Object.keys(e).forEach((t) => {
		n = n.replace(`:${t}`, e[t]);
	}), n;
}, zn = (e) => {
	let { prefixCls: t, separator: r, style: i, className: a, rootClassName: o, routes: c, items: l, children: d, itemRender: f, params: p = {}, classNames: m, styles: h, dropdownIcon: g, ..._ } = e, { getPrefixCls: v, direction: y, className: b, style: x, classNames: S, styles: C, separator: w, dropdownIcon: T } = te("breadcrumb"), E = r ?? w ?? "/", O = g ?? T ?? /*#__PURE__*/ X.createElement(n, null), k, A = v("breadcrumb", t), [j, M] = Fn(A), N = Ln(l, c), P = X.useMemo(() => ({
		...e,
		separator: E
	}), [e, E]), [F, L] = ee([S, m], [C, h], { props: P }), R = jn(A, f);
	if (N && N.length > 0) {
		let e = [], t = l || c;
		k = N.map((n, r) => {
			let { path: i, key: a, type: o, menu: c, onClick: l, className: u, style: d, separator: f, dropdownProps: m } = n, h = Rn(p, i);
			h !== void 0 && e.push(h);
			let g = a ?? r;
			if (o === "separator") return /*#__PURE__*/ X.createElement(On, { key: g }, f);
			let _ = {}, v = r === N.length - 1;
			c && (_.menu = c);
			let { href: y } = n;
			return e.length && h !== void 0 && (y = `#/${e.join("/")}`), /*#__PURE__*/ X.createElement(Mn, {
				key: g,
				..._,
				...s(n, {
					data: !0,
					aria: !0
				}),
				className: u,
				style: d,
				dropdownProps: m,
				dropdownIcon: O,
				href: y,
				separator: v ? "" : E,
				onClick: l,
				prefixCls: A
			}, R(n, p, t, e, y));
		});
	} else if (d) {
		let e = D(d).length;
		k = D(d).map((t, n) => t && I(t, {
			separator: n === e - 1 ? "" : E,
			key: n
		}));
	}
	let z = u(A, b, { [`${A}-rtl`]: y === "rtl" }, a, o, F.root, j, M), B = {
		...L.root,
		...x,
		...i
	}, V = X.useMemo(() => ({
		classNames: F,
		styles: L
	}), [F, L]);
	return /*#__PURE__*/ X.createElement(be.Provider, { value: V }, /*#__PURE__*/ X.createElement("nav", {
		className: z,
		style: B,
		..._
	}, /*#__PURE__*/ X.createElement("ol", null, k)));
}, Bn = /* @__PURE__ */ e({ default: () => Vn }), Vn = zn;
Vn.Item = Nn, Vn.Separator = On;
//#endregion
export { an as a, qt as c, yt as d, Oe as f, xn as i, Ut as l, En as n, $t as o, Sn as r, Zt as s, Bn as t, Ht as u };
