globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $ as n, Bt as r, Cn as i, Dn as a, Ht as o, Jt as s, Nt as c, On as l, Q as u, Ut as d, bn as f, ct as p, et as m, fn as h, kt as g, ln as _, lt as v, on as y, pn as b, rt as x, sn as S, tt as C, wn as w, yn as T, yt as E } from "../shared/core.js";
import { $t as D, Bt as O, Cn as k, D as A, E as j, Fn as M, Ht as N, Jn as P, O as F, Rt as I, S as L, Sr as R, St as ee, T as z, Ut as B, Vt as te, Wn as V, _r as H, br as ne, dt as re, en as ie, fn as U, gr as W, it as G, kn as ae, mr as K, or as oe, ot as se, pr as q, rn as ce, sr as le, wr as ue, xr as de, zt as fe } from "../shared/antd-core.js";
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useAllowClear.js
var J = /* @__PURE__ */ t(l()), pe = (e, t, n, r, i = !1, a, o) => {
	let s = (0, J.useMemo)(() => typeof n == "boolean" ? { allowClear: n } : n && typeof n == "object" ? n : { allowClear: !1 }, [n]);
	return (0, J.useMemo)(() => {
		let e = !i && s.allowClear !== !1 && (t.length || a) && !(o === "combobox" && a === "");
		return {
			allowClear: e,
			clearIcon: e ? s.clearIcon || r || "×" : null
		};
	}, [
		s,
		r,
		i,
		t.length,
		a,
		o
	]);
}, me = /*#__PURE__*/ J.createContext(null);
function Y() {
	return J.useContext(me);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useLock.js
function he(e = 250) {
	let t = J.useRef(null), n = J.useRef(null);
	J.useEffect(() => () => {
		window.clearTimeout(n.current);
	}, []);
	function r(r) {
		(r || t.current === null) && (t.current = r), window.clearTimeout(n.current), n.current = window.setTimeout(() => {
			t.current = null;
		}, e);
	}
	return [() => t.current, r];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useSelectTriggerControl.js
function ge(e, t) {
	return e.filter((e) => e).some((e) => e.contains(t) || e === t);
}
function _e(e, t, n, r) {
	let i = h((i) => {
		if (r) return;
		let a = i.target;
		a.shadowRoot && i.composed && (a = i.composedPath()[0] || a), i._ori_target && (a = i._ori_target), t && !ge(e(), a) && n(!1);
	});
	J.useEffect(() => (window.addEventListener("mousedown", i), () => window.removeEventListener("mousedown", i)), [i]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectTrigger.js
function X() {
	return X = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, X.apply(this, arguments);
}
var ve = (e) => {
	let t = e === !0 ? 0 : 1;
	return {
		bottomLeft: {
			points: ["tl", "bl"],
			offset: [0, 4],
			overflow: {
				adjustX: t,
				adjustY: 1
			},
			htmlRegion: "scroll"
		},
		bottomRight: {
			points: ["tr", "br"],
			offset: [0, 4],
			overflow: {
				adjustX: t,
				adjustY: 1
			},
			htmlRegion: "scroll"
		},
		topLeft: {
			points: ["bl", "tl"],
			offset: [0, -4],
			overflow: {
				adjustX: t,
				adjustY: 1
			},
			htmlRegion: "scroll"
		},
		topRight: {
			points: ["br", "tr"],
			offset: [0, -4],
			overflow: {
				adjustX: t,
				adjustY: 1
			},
			htmlRegion: "scroll"
		}
	};
}, ye = /*#__PURE__*/ J.forwardRef((e, t) => {
	let { prefixCls: n, disabled: r, visible: i, children: a, popupElement: o, animation: s, transitionName: l, popupStyle: u, popupClassName: d, direction: f = "ltr", placement: p, builtinPlacements: m, popupMatchSelectWidth: h, popupRender: g, popupAlign: _, getPopupContainer: v, empty: y, onPopupVisibleChange: b, onPopupMouseEnter: x, onPopupMouseDown: S, onPopupBlur: C, ...w } = e, T = `${n}-dropdown`, E = o;
	g && (E = g(o));
	let D = J.useMemo(() => m || ve(h), [m, h]), O = s ? `${T}-${s}` : l, k = typeof h == "number", A = J.useMemo(() => k ? null : h === !1 ? "minWidth" : "width", [h, k]), j = u;
	k && (j = {
		...u,
		width: h
	});
	let N = J.useRef(null);
	return J.useImperativeHandle(t, () => ({ getPopupElement: () => N.current?.popupElement })), /*#__PURE__*/ J.createElement(M, X({}, w, {
		showAction: b ? ["click"] : [],
		hideAction: b ? ["click"] : [],
		popupPlacement: p || (f === "rtl" ? "bottomRight" : "bottomLeft"),
		builtinPlacements: D,
		prefixCls: T,
		popupMotion: { motionName: O },
		popup: /*#__PURE__*/ J.createElement("div", {
			onMouseEnter: x,
			onMouseDown: S,
			onBlur: C
		}, E),
		ref: N,
		stretch: A,
		popupAlign: _,
		popupVisible: i,
		getPopupContainer: v,
		popupClassName: c(d, { [`${T}-empty`]: y }),
		popupStyle: j,
		onPopupVisibleChange: b
	}), a);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/utils/valueUtil.js
function be(e, t) {
	let { key: n } = e, r;
	return "value" in e && ({value: r} = e), n ?? (r === void 0 ? `rc-index-key-${t}` : r);
}
function xe(e) {
	return e !== void 0 && !Number.isNaN(e);
}
function Se(e, t) {
	let { label: n, value: r, options: i, groupLabel: a } = e || {}, o = n || (t ? "children" : "label");
	return {
		label: o,
		value: r || "value",
		options: i || "options",
		groupLabel: a || o
	};
}
function Ce(e, { fieldNames: t, childrenAsData: n } = {}) {
	let r = [], { label: i, value: a, options: o, groupLabel: s } = Se(t, !1);
	function c(e, t) {
		Array.isArray(e) && e.forEach((e) => {
			if (t || !(o in e)) {
				let n = e[a];
				r.push({
					key: be(e, r.length),
					groupOption: t,
					data: e,
					label: e[i],
					value: n
				});
			} else {
				let t = e[s];
				t === void 0 && n && (t = e.label), r.push({
					key: be(e, r.length),
					group: !0,
					data: e,
					label: t
				}), c(e[o], !0);
			}
		});
	}
	return c(e, !1), r;
}
function we(e) {
	let t = { ...e };
	return "props" in t || Object.defineProperty(t, "props", { get() {
		return i(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
	} }), t;
}
var Z = (e, t, n) => {
	if (!t || !t.length) return null;
	let r = !1, i = (e, [t, ...n]) => {
		if (!t) return [e];
		let a = e.split(t);
		return r ||= a.length > 1, a.reduce((e, t) => [...e, ...i(t, n)], []).filter(Boolean);
	}, a = i(e, t);
	return r ? n === void 0 ? a : a.slice(0, n) : null;
};
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/BaseSelect/Polite.js
function Te(e) {
	let { visible: t, values: n } = e;
	return t ? /*#__PURE__*/ J.createElement("span", {
		"aria-live": "polite",
		style: {
			width: 0,
			height: 0,
			position: "absolute",
			overflow: "hidden",
			opacity: 0
		}
	}, `${n.slice(0, 50).map(({ label: e, value: t }) => ["number", "string"].includes(typeof e) ? e : t).join(", ")}`, n.length > 50 ? ", ..." : null) : null;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useOpen.js
var Ee = (e) => {
	let t = new MessageChannel();
	t.port1.onmessage = e, t.port2.postMessage(null);
}, De = (e, t = 1) => {
	if (t <= 0) {
		e();
		return;
	}
	Ee(() => {
		De(e, t - 1);
	});
};
function Oe(e, t, n, r) {
	let [i, a] = (0, J.useState)(!1);
	(0, J.useEffect)(() => {
		a(!0);
	}, []);
	let [o, s] = S(e, t), [c, l] = (0, J.useState)(!1), u = i ? o : !1, d = r(u), f = (0, J.useRef)(0), p = h((e) => {
		n && d !== e && n(e), s(e);
	});
	return [
		u,
		d,
		h((e, t = {}) => {
			let { cancelFun: n } = t;
			f.current += 1;
			let r = f.current, i = typeof e == "boolean" ? e : !d;
			l(!i);
			function a() {
				r === f.current && !n?.() && (p(i), l(!1));
			}
			i ? a() : De(() => {
				a();
			});
		}),
		c
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectInput/Affix.js
function ke(e) {
	let { children: t, ...n } = e;
	return t ? /*#__PURE__*/ J.createElement("div", n, t) : null;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectInput/context.js
var Ae = /*#__PURE__*/ J.createContext(null);
function je() {
	return J.useContext(Ae);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectInput/Input.js
var Me = /*#__PURE__*/ J.forwardRef((e, t) => {
	let { onChange: n, onKeyDown: r, onBlur: i, style: a, syncWidth: o, value: s, className: l, autoComplete: u, ...d } = e, { prefixCls: f, mode: p, onSearch: m, onSearchSubmit: h, onInputBlur: g, autoFocus: v, tokenWithEnter: y, placeholder: x, components: { input: S = "input" } } = je(), { id: C, classNames: w, styles: T, open: E, activeDescendantId: D, role: O, disabled: k } = Y() || {}, A = c(`${f}-input`, w?.input, l), j = J.useRef(!1), M = J.useRef(null), N = J.useRef(null);
	J.useImperativeHandle(t, () => N.current);
	let P = (e) => {
		let { value: t } = e.target;
		if (y && M.current && /[\r\n]/.test(M.current)) {
			let e = M.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
			t = t.replace(e, M.current);
		}
		M.current = null, m && m(t, !0, j.current), n?.(e);
	}, F = (e) => {
		let { key: t } = e, { value: n } = e.currentTarget;
		t === "Enter" && p === "tags" && !E && !j.current && h && h(n), r?.(e);
	}, I = (e) => {
		g?.(), i?.(e);
	}, L = () => {
		j.current = !0;
	}, R = (e) => {
		if (j.current = !1, p !== "combobox") {
			let { value: t } = e.currentTarget;
			m?.(t, !0, !1);
		}
	}, ee = (e) => {
		let { clipboardData: t } = e;
		M.current = t?.getData("text") || "";
	}, [z, B] = J.useState(void 0);
	_(() => {
		let e = N.current;
		if (o && e) {
			e.style.width = "0px";
			let t = e.scrollWidth;
			B(t), e.style.width = "";
		}
	}, [o, s]);
	let te = {
		id: C,
		type: p === "combobox" ? "text" : "search",
		...d,
		ref: N,
		style: {
			...T?.input,
			...a,
			"--select-input-width": z
		},
		autoFocus: v,
		autoComplete: u || "off",
		className: A,
		disabled: k,
		value: s || "",
		onChange: P,
		onKeyDown: F,
		onBlur: I,
		onPaste: ee,
		onCompositionStart: L,
		onCompositionEnd: R,
		role: O || "combobox",
		"aria-expanded": E || !1,
		"aria-haspopup": "listbox",
		"aria-owns": E ? `${C}_list` : void 0,
		"aria-autocomplete": "list",
		"aria-controls": E ? `${C}_list` : void 0,
		"aria-activedescendant": E ? D : void 0
	};
	if (/*#__PURE__*/ J.isValidElement(S)) {
		let t = S.props || {}, n = {
			placeholder: e.placeholder || x,
			...te,
			...t
		};
		return Object.keys(t).forEach((e) => {
			let r = t[e];
			typeof r == "function" && (n[e] = (...t) => {
				r(...t), te[e]?.(...t);
			});
		}), n.ref = b(S.ref, te.ref), /*#__PURE__*/ J.cloneElement(S, n);
	}
	let V = S;
	return /*#__PURE__*/ J.createElement(V, te);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectInput/Content/Placeholder.js
function Q(e) {
	let { prefixCls: t, placeholder: n, displayValues: r } = je(), { classNames: i, styles: a } = Y(), { show: o = !0 } = e;
	return r.length ? null : /*#__PURE__*/ J.createElement("div", {
		className: c(`${t}-placeholder`, i?.placeholder),
		style: {
			visibility: o ? "visible" : "hidden",
			...a?.placeholder
		}
	}, n);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectContext.js
var $ = /*#__PURE__*/ J.createContext(null);
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/utils/commonUtil.js
function Ne(e) {
	return Array.isArray(e) ? e : e === void 0 ? [] : [e];
}
typeof window < "u" && window.document && window.document.documentElement;
function Pe(e) {
	return e != null;
}
function Fe(e) {
	return !e && e !== 0;
}
function Ie(e) {
	return ["string", "number"].includes(typeof e);
}
function Le(e) {
	let t;
	return e && (Ie(e.title) ? t = e.title.toString() : Ie(e.label) && (t = e.label.toString())), t;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectInput/Content/SingleContent.js
function Re() {
	return Re = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Re.apply(this, arguments);
}
var ze = /*#__PURE__*/ J.forwardRef(({ inputProps: e }, t) => {
	let { prefixCls: n, searchValue: r, activeValue: i, displayValues: a, maxLength: o, mode: s, components: l } = je(), { triggerOpen: u, title: d, showSearch: f, classNames: p, styles: m } = Y(), h = J.useContext($), [g, _] = J.useState(!1), v = s === "combobox", y = a[0], b = J.useMemo(() => v && i && !g && u ? i : f ? r : "", [
		v,
		i,
		g,
		u,
		r,
		f
	]), [x, S, C, w] = J.useMemo(() => {
		let e, t, n;
		if (y && h?.flattenOptions) {
			let r = h.flattenOptions.find((e) => e.value === y.value);
			r?.data && (e = r.data.className, t = r.data.style, n = Le(r.data));
		}
		return y && !n && (n = Le(y)), d !== void 0 && (n = d), [
			e,
			t,
			n,
			!!e || !!t
		];
	}, [
		y,
		h?.flattenOptions,
		d
	]);
	J.useEffect(() => {
		v && _(!1);
	}, [v, i]);
	let T = y && y.label !== null && y.label !== void 0 && String(y.label).trim() !== "", E = v && l?.input ? null : y ? w ? /*#__PURE__*/ J.createElement("div", {
		className: c(`${n}-content-value`, x),
		style: {
			...b ? { visibility: "hidden" } : {},
			...S
		},
		title: C
	}, y.label) : y.label : /*#__PURE__*/ J.createElement(Q, { show: !b });
	return /*#__PURE__*/ J.createElement("div", {
		className: c(`${n}-content`, T && `${n}-content-has-value`, b && `${n}-content-has-search-value`, w && `${n}-content-has-option-style`, p?.content),
		style: m?.content,
		title: w ? void 0 : C
	}, E, /*#__PURE__*/ J.createElement(Me, Re({ ref: t }, e, {
		value: b,
		maxLength: s === "combobox" ? o : void 0,
		onChange: (t) => {
			_(!0), e.onChange?.(t);
		}
	})));
}), Be = void 0;
function Ve(e, t) {
	let { prefixCls: n, invalidate: r, item: i, renderItem: a, responsive: o, responsiveDisabled: s, registerSize: l, itemKey: u, className: d, style: f, children: p, display: m, order: h, component: g = "div", ..._ } = e, v = o && !m;
	function y(e) {
		l(u, e);
	}
	J.useEffect(() => () => {
		y(null);
	}, []);
	let b = a && i !== Be ? a(i, { index: h }) : p, x;
	r || (x = {
		opacity: +!v,
		height: v ? 0 : Be,
		overflowY: v ? "hidden" : Be,
		order: o ? h : Be,
		pointerEvents: v ? "none" : Be,
		position: v ? "absolute" : Be
	});
	let S = {};
	v && (S["aria-hidden"] = !0);
	let w = /*#__PURE__*/ J.createElement(g, C({
		className: c(!r && n, d),
		style: {
			...x,
			...f
		}
	}, S, _, { ref: t }), b);
	return o && (w = /*#__PURE__*/ J.createElement(ue, {
		onResize: ({ offsetWidth: e }) => {
			y(e);
		},
		disabled: s
	}, w)), w;
}
var He = /*#__PURE__*/ J.forwardRef(Ve), Ue = /* @__PURE__ */ t(a());
function We(e) {
	if (typeof MessageChannel > "u") r(e);
	else {
		let t = new MessageChannel();
		t.port1.onmessage = () => e(), t.port2.postMessage(void 0);
	}
}
//#endregion
//#region node_modules/.pnpm/@rc-component+overflow@1.0._3f6e261be6347cd44469d22cc0aaf666/node_modules/@rc-component/overflow/es/hooks/useEffectState.js
function Ge() {
	let e = J.useRef(null);
	return (t) => {
		e.current || (e.current = [], We(() => {
			(0, Ue.unstable_batchedUpdates)(() => {
				e.current.forEach((e) => {
					e();
				}), e.current = null;
			});
		})), e.current.push(t);
	};
}
function Ke(e, t) {
	let [n, r] = J.useState(t);
	return [n, h((t) => {
		e(() => {
			r(t);
		});
	})];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+overflow@1.0._3f6e261be6347cd44469d22cc0aaf666/node_modules/@rc-component/overflow/es/context.js
var qe = /*#__PURE__*/ J.createContext(null), Je = /*#__PURE__*/ J.forwardRef((e, t) => {
	let n = J.useContext(qe);
	if (!n) {
		let { component: n = "div", ...r } = e;
		return /*#__PURE__*/ J.createElement(n, C({}, r, { ref: t }));
	}
	let { className: r, ...i } = n, { className: a, ...o } = e;
	return /*#__PURE__*/ J.createElement(qe.Provider, { value: null }, /*#__PURE__*/ J.createElement(He, C({
		ref: t,
		className: c(r, a)
	}, i, o)));
}), Ye = "responsive", Xe = "invalidate";
function Ze(e) {
	return `+ ${e.length} ...`;
}
function Qe(e, t) {
	let { prefixCls: n = "rc-overflow", data: r = [], renderItem: i, renderRawItem: a, itemKey: o, itemWidth: s = 10, ssr: l, style: u, className: d, maxCount: f, renderRest: p, renderRawRest: m, prefix: h, suffix: g, component: v = "div", itemComponent: y, onVisibleChange: b, ...x } = e, S = l === "full", w = Ge(), [T, E] = Ke(w, null), D = T || 0, [O, k] = Ke(w, /* @__PURE__ */ new Map()), [A, j] = Ke(w, 0), [M, N] = Ke(w, 0), [P, F] = Ke(w, 0), [I, L] = Ke(w, 0), [R, ee] = (0, J.useState)(null), [z, B] = (0, J.useState)(null), te = J.useMemo(() => z === null && S ? 2 ** 53 - 1 : z || 0, [z, T]), [V, H] = (0, J.useState)(!1), ne = `${n}-item`, re = Math.max(A, M), ie = f === Ye, U = r.length && ie, W = f === Xe, G = U || typeof f == "number" && r.length > f, ae = (0, J.useMemo)(() => {
		let e = r;
		return U ? e = T === null && S ? r : r.slice(0, Math.min(r.length, D / s)) : typeof f == "number" && (e = r.slice(0, f)), e;
	}, [
		r,
		s,
		T,
		f,
		U
	]), K = (0, J.useMemo)(() => U ? r.slice(te + 1) : r.slice(ae.length), [
		r,
		ae,
		U,
		te
	]), oe = (0, J.useCallback)((e, t) => typeof o == "function" ? o(e) : (o && e?.[o]) ?? t, [o]), se = (0, J.useCallback)(i || ((e) => e), [i]);
	function q(e, t, n) {
		z === e && (t === void 0 || t === R) || (B(e), n || (H(e < r.length - 1), b?.(e)), t !== void 0 && ee(t));
	}
	function ce(e, t) {
		E(t.clientWidth);
	}
	function le(e, t) {
		k((n) => {
			let r = new Map(n);
			return t === null ? r.delete(e) : r.set(e, t), r;
		});
	}
	function de(e, t) {
		N(t), j(M);
	}
	function fe(e, t) {
		F(t);
	}
	function pe(e, t) {
		L(t);
	}
	function me(e) {
		return O.get(oe(ae[e], e));
	}
	_(() => {
		if (D && typeof re == "number" && ae) {
			let e = P + I, t = ae.length, n = t - 1;
			if (!t) {
				q(0, null);
				return;
			}
			for (let r = 0; r < t; r += 1) {
				let t = me(r);
				if (S && (t ||= 0), t === void 0) {
					q(r - 1, void 0, !0);
					break;
				}
				if (e += t, n === 0 && e <= D || r === n - 1 && e + me(n) <= D) {
					q(n, null);
					break;
				} else if (e + re > D) {
					q(r - 1, e - t - I + M);
					break;
				}
			}
			g && me(0) + I > D && ee(null);
		}
	}, [
		D,
		O,
		M,
		P,
		I,
		oe,
		ae
	]);
	let Y = V && !!K.length, he = {};
	R !== null && U && (he = {
		position: "absolute",
		top: 0,
		insetInlineStart: R
	});
	let ge = {
		prefixCls: ne,
		responsive: U,
		component: y,
		invalidate: W
	}, _e = a ? (e, t) => {
		let n = oe(e, t);
		return /*#__PURE__*/ J.createElement(qe.Provider, {
			key: n,
			value: {
				...ge,
				order: t,
				item: e,
				itemKey: n,
				registerSize: le,
				display: t <= te
			}
		}, a(e, t));
	} : (e, t) => {
		let n = oe(e, t);
		return /*#__PURE__*/ J.createElement(He, C({}, ge, {
			order: t,
			key: n,
			item: e,
			renderItem: se,
			itemKey: n,
			registerSize: le,
			display: t <= te
		}));
	}, X = {
		order: Y ? te : 2 ** 53 - 1,
		className: `${ne}-rest`,
		registerSize: de,
		display: Y
	}, ve = p || Ze, ye = m ? /*#__PURE__*/ J.createElement(qe.Provider, { value: {
		...ge,
		...X
	} }, m(K)) : /*#__PURE__*/ J.createElement(He, C({}, ge, X), typeof ve == "function" ? ve(K) : ve), be = /*#__PURE__*/ J.createElement(v, C({
		className: c(!W && n, d),
		style: u,
		ref: t
	}, x), h && /*#__PURE__*/ J.createElement(He, C({}, ge, {
		responsive: ie,
		responsiveDisabled: !U,
		order: -1,
		className: `${ne}-prefix`,
		registerSize: fe,
		display: !0
	}), h), ae.map(_e), G ? ye : null, g && /*#__PURE__*/ J.createElement(He, C({}, ge, {
		responsive: ie,
		responsiveDisabled: !U,
		order: te,
		className: `${ne}-suffix`,
		registerSize: pe,
		display: !0,
		style: he
	}), g));
	return ie ? /*#__PURE__*/ J.createElement(ue, {
		onResize: ce,
		disabled: !U
	}, be) : be;
}
var $e = /*#__PURE__*/ J.forwardRef(Qe);
$e.Item = Je, $e.RESPONSIVE = Ye, $e.INVALIDATE = Xe;
//#endregion
//#region node_modules/.pnpm/@rc-component+overflow@1.0._3f6e261be6347cd44469d22cc0aaf666/node_modules/@rc-component/overflow/es/index.js
var et = $e, tt = (e) => {
	let { className: t, style: n, customizeIcon: r, customizeIconProps: i, children: a, onMouseDown: o, onClick: s } = e, l = typeof r == "function" ? r(i) : r;
	return /*#__PURE__*/ J.createElement("span", {
		className: t,
		onMouseDown: (e) => {
			e.preventDefault(), o?.(e);
		},
		style: {
			userSelect: "none",
			WebkitUserSelect: "none",
			...n
		},
		unselectable: "on",
		onClick: s,
		"aria-hidden": !0
	}, l === void 0 ? /*#__PURE__*/ J.createElement("span", { className: c(t.split(/\s+/).map((e) => `${e}-icon`)) }, a) : l);
};
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectInput/Content/MultipleContent.js
function nt() {
	return nt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, nt.apply(this, arguments);
}
function rt(e) {
	return e.key ?? e.value;
}
var it = (e) => {
	e.preventDefault(), e.stopPropagation();
}, at = /*#__PURE__*/ J.forwardRef(function({ inputProps: e }, t) {
	let { prefixCls: n, displayValues: r, searchValue: i, mode: a, onSelectorRemove: o, removeIcon: s } = je(), { disabled: l, showSearch: u, triggerOpen: d, rawOpen: f, toggleOpen: p, autoClearSearchValue: m, tagRender: h, maxTagPlaceholder: g, maxTagTextLength: _, maxTagCount: v, classNames: y, styles: b } = Y(), x = `${n}-selection-item`, S = i;
	!f && a === "multiple" && m !== !1 && (S = "");
	let C = u && S || "", w = u && !l, T = s ?? "×", E = g ?? ((e) => `+ ${e.length} ...`), D = h, O = (e) => {
		p(e);
	}, k = (e) => {
		o?.(e);
	}, A = (e, t, n, r, i) => /*#__PURE__*/ J.createElement("span", {
		title: Le(e),
		className: c(x, { [`${x}-disabled`]: n }, y?.item),
		style: b?.item
	}, /*#__PURE__*/ J.createElement("span", {
		className: c(`${x}-content`, y?.itemContent),
		style: b?.itemContent
	}, t), r && /*#__PURE__*/ J.createElement(tt, {
		className: c(`${x}-remove`, y?.itemRemove),
		style: b?.itemRemove,
		onMouseDown: it,
		onClick: i,
		customizeIcon: T
	}, "×")), j = (e, t, n, r, i, a, o) => /*#__PURE__*/ J.createElement("span", { onMouseDown: (e) => {
		it(e), O(!d);
	} }, D({
		label: t,
		value: e,
		index: o?.index,
		disabled: n,
		closable: r,
		onClose: i,
		isMaxTag: !!a
	}));
	return /*#__PURE__*/ J.createElement(et, {
		prefixCls: `${n}-content`,
		className: y?.content,
		style: b?.content,
		prefix: !r.length && !C && /*#__PURE__*/ J.createElement(Q, null),
		data: r,
		renderItem: (e, t) => {
			let { disabled: n, label: r, value: i } = e, a = !l && !n, o = r;
			if (typeof _ == "number" && (typeof r == "string" || typeof r == "number")) {
				let e = String(o);
				e.length > _ && (o = `${e.slice(0, _)}...`);
			}
			let s = (t) => {
				t && t.stopPropagation(), k(e);
			};
			return typeof D == "function" ? j(i, o, n, a, s, void 0, t) : A(e, o, n, a, s);
		},
		renderRest: (e) => {
			if (!r.length) return null;
			let t = typeof E == "function" ? E(e) : E;
			return typeof D == "function" ? j(void 0, t, !1, !1, void 0, !0) : A({ title: t }, t, !1);
		},
		suffix: /*#__PURE__*/ J.createElement(Me, nt({
			ref: t,
			disabled: l,
			readOnly: !w
		}, e, {
			value: C || "",
			syncWidth: !0
		})),
		itemKey: rt,
		maxCount: v
	});
}), ot = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { multiple: n, onInputKeyDown: r, tabIndex: i } = je(), a = Y(), { showSearch: s } = a, c = {
		...o(a, { aria: !0 }),
		onKeyDown: r,
		readOnly: !s,
		tabIndex: i
	};
	return n ? /*#__PURE__*/ J.createElement(at, {
		ref: t,
		inputProps: c
	}) : /*#__PURE__*/ J.createElement(ze, {
		ref: t,
		inputProps: c
	});
});
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/utils/keyUtil.js
function st(e) {
	return e && ![
		s.ESC,
		s.SHIFT,
		s.BACKSPACE,
		s.TAB,
		s.WIN_KEY,
		s.ALT,
		s.META,
		s.WIN_KEY_RIGHT,
		s.CTRL,
		s.SEMICOLON,
		s.EQUALS,
		s.CAPS_LOCK,
		s.CONTEXT_MENU,
		s.UP,
		s.LEFT,
		s.RIGHT,
		s.F1,
		s.F2,
		s.F3,
		s.F4,
		s.F5,
		s.F6,
		s.F7,
		s.F8,
		s.F9,
		s.F10,
		s.F11,
		s.F12
	].includes(e);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/SelectInput/index.js
function ct() {
	return ct = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ct.apply(this, arguments);
}
var lt = [
	"value",
	"onChange",
	"removeIcon",
	"placeholder",
	"maxTagCount",
	"maxTagTextLength",
	"maxTagPlaceholder",
	"choiceTransitionName",
	"onInputKeyDown",
	"onPopupScroll",
	"tabIndex",
	"activeValue",
	"onSelectorRemove",
	"focused"
], ut = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { prefixCls: n, className: r, style: i, prefix: a, suffix: l, clearIcon: u, children: p, multiple: m, displayValues: g, placeholder: _, mode: v, searchValue: y, onSearch: x, onSearchSubmit: S, onInputBlur: C, maxLength: w, autoFocus: T, onMouseDown: E, onClearMouseDown: D, onInputKeyDown: O, onSelectorRemove: k, tokenWithEnter: A, components: j, ...M } = e, { triggerOpen: N, toggleOpen: P, showSearch: F, disabled: I, loading: L, classNames: R, styles: ee } = Y(), z = J.useRef(null), B = J.useRef(null), te = h((e) => {
		let { which: t } = e, n = B.current instanceof HTMLTextAreaElement;
		!n && N && (t === s.UP || t === s.DOWN) && e.preventDefault(), O && O(e), !(n && !N && ~[
			s.UP,
			s.DOWN,
			s.LEFT,
			s.RIGHT
		].indexOf(t)) && !(e.ctrlKey || e.altKey || e.metaKey) && st(t) && P(!0);
	});
	J.useImperativeHandle(t, () => ({
		focus: (e) => {
			(B.current || z.current).focus?.(e);
		},
		blur: () => {
			(B.current || z.current).blur?.();
		},
		nativeElement: f(z.current)
	}));
	let V = h((e) => {
		if (!I) {
			let t = f(B.current);
			e.nativeEvent._ori_target = t;
			let n = t === e.target || t?.contains(e.target);
			t && !n && e.preventDefault();
			let r = N && !m && (v === "combobox" || F) || N && m && n;
			e.nativeEvent._select_lazy ? N && P(!1) : (B.current?.focus(), r || P());
		}
		E?.(e);
	}), { root: H } = j, ne = d(M, lt), re = o(ne, { aria: !0 }), ie = Object.keys(re), U = {
		...e,
		onInputKeyDown: te
	};
	if (H) {
		let e = H.props || {}, t = {
			...e,
			...ne
		};
		return Object.keys(e).forEach((n) => {
			let r = e[n], i = ne[n];
			typeof r == "function" && typeof i == "function" && (t[n] = (...e) => {
				i(...e), r(...e);
			});
		}), /*#__PURE__*/ J.isValidElement(H) ? /*#__PURE__*/ J.cloneElement(H, {
			...t,
			ref: b(H.ref, z)
		}) : /*#__PURE__*/ J.createElement(H, ct({}, t, { ref: z }));
	}
	return /*#__PURE__*/ J.createElement(Ae.Provider, { value: U }, /*#__PURE__*/ J.createElement("div", ct({}, d(ne, ie), {
		ref: z,
		className: r,
		style: i,
		onMouseDown: V
	}), /*#__PURE__*/ J.createElement(ke, {
		className: c(`${n}-prefix`, R?.prefix),
		style: ee?.prefix
	}, a), /*#__PURE__*/ J.createElement(ot, { ref: B }), /*#__PURE__*/ J.createElement(ke, {
		className: c(`${n}-suffix`, { [`${n}-suffix-loading`]: L }, R?.suffix),
		style: ee?.suffix
	}, l), u && /*#__PURE__*/ J.createElement(ke, {
		className: c(`${n}-clear`, R?.clear),
		style: ee?.clear,
		onMouseDown: (e) => {
			e.nativeEvent._select_lazy = !0, D?.(e);
		}
	}, u), p));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useComponents.js
function dt(e, t, n) {
	return J.useMemo(() => {
		let { root: r, input: i } = e || {};
		return n && (r = n()), t && (i = t()), {
			root: r,
			input: i
		};
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/BaseSelect/index.js
function ft() {
	return ft = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ft.apply(this, arguments);
}
var pt = (e) => e === "tags" || e === "multiple", mt = /*#__PURE__*/ J.forwardRef((e, t) => {
	let { id: n, prefixCls: r, className: i, styles: a, classNames: o, showSearch: s, tagRender: l, showScrollBar: u = "optional", direction: d, omitDomProps: p, displayValues: m, onDisplayValuesChange: g, emptyOptions: _, notFoundContent: v = "Not Found", onClear: y, maxCount: b, placeholder: x, mode: S, disabled: C, loading: w, getInputElement: T, getRawInputElement: E, open: D, defaultOpen: O, onPopupVisibleChange: k, activeValue: A, onActiveValueChange: j, activeDescendantId: M, searchValue: N, autoClearSearchValue: P, onSearch: F, onSearchSplit: I, tokenSeparators: L, allowClear: R, prefix: ee, suffix: z, suffixIcon: B, clearIcon: te, OptionList: V, animation: H, transitionName: ne, popupStyle: re, popupClassName: ie, popupMatchSelectWidth: U, popupRender: W, popupAlign: G, placement: ae, builtinPlacements: K, getPopupContainer: oe, showAction: se = [], onFocus: q, onBlur: ce, onKeyUp: le, onKeyDown: ue, onMouseDown: de, components: fe, ...Y } = e, X = pt(S), ve = J.useRef(null), be = J.useRef(null), Se = J.useRef(null), [Ce, we] = J.useState(!1);
	J.useImperativeHandle(t, () => ({
		focus: ve.current?.focus,
		blur: ve.current?.blur,
		scrollTo: (e) => Se.current?.scrollTo(e),
		nativeElement: f(ve.current)
	}));
	let Ee = dt(fe, T, E), ke = J.useMemo(() => {
		if (S !== "combobox") return N;
		let e = m[0]?.value;
		return typeof e == "string" || typeof e == "number" ? String(e) : "";
	}, [
		N,
		S,
		m
	]), Ae = S === "combobox" && typeof T == "function" && T() || null, je = !v && _, [Me, Q, $, Ne] = Oe(O || !1, D, k, (e) => C || je ? !1 : e), Pe = J.useMemo(() => typeof L == "function" || (L || []).some((e) => ["\n", "\r\n"].includes(e)), [L]), Fe = J.useMemo(() => typeof L == "function" ? (e, t) => {
		let n = L(e), r = Array.isArray(n) && n.length === 1 && n[0] === e;
		return !Array.isArray(n) || !n.length || r ? null : t === void 0 ? n : n.slice(0, t);
	} : (e, t) => Z(e, L, t), [L]), Ie = (e, t, n) => {
		if (X && xe(b) && m.length >= b) return;
		let r = !0, i = e;
		j?.(null);
		let a = xe(b) ? b - m.length : void 0, o = n ? null : Fe(e, a);
		return S !== "combobox" && o && (i = "", I?.(o), $(!1), r = !1), F && ke !== i && F(i, { source: t ? "typing" : "effect" }), e && t && r && $(!0), r;
	}, Le = (e) => {
		!e || !e.trim() || F(e, { source: "submit" });
	};
	J.useEffect(() => {
		!Me && !X && S !== "combobox" && Ie("", !1, !1);
	}, [Me]), J.useEffect(() => {
		C && ($(!1), we(!1));
	}, [C, Q]);
	let [Re, ze] = he(), Be = J.useRef(!1), Ve = (e) => {
		let t = Re(), { key: n } = e, r = n === "Enter", i = n === " ";
		if (r || i) {
			let t = S === "combobox";
			(i && !(t || s) || r && !t) && e.preventDefault(), Q || $(!0);
		}
		if (ze(!!ke), n === "Backspace" && !t && X && !ke && m.length) {
			let e = [...m], t = null;
			for (let n = e.length - 1; n >= 0; --n) {
				let r = e[n];
				if (!r.disabled) {
					e.splice(n, 1), t = r;
					break;
				}
			}
			t && g(e, {
				type: "remove",
				values: [t]
			});
		}
		Q && (!r || !Be.current) && !i && (r && (Be.current = !0), Se.current?.onKeyDown(e)), ue?.(e);
	}, He = (e, ...t) => {
		Q && Se.current?.onKeyUp(e, ...t), e.key === "Enter" && (Be.current = !1), le?.(e, ...t);
	}, Ue = h((e) => {
		g(m.filter((t) => t !== e), {
			type: "remove",
			values: [e]
		});
	}), We = () => {
		Be.current = !1;
	}, Ge = () => [f(ve.current), be.current?.getPopupElement()];
	_e(Ge, Q, $, !!Ee.root);
	let Ke = J.useRef(!1), qe = (e) => {
		we(!0), C || (se.includes("focus") && $(!0), q?.(e));
	}, Je = () => {
		Q && !Ke.current && $(!1, { cancelFun: () => ge(Ge(), document.activeElement) });
	}, Ye = (e) => {
		we(!1), ke && (S === "tags" ? F(ke, { source: "submit" }) : S === "multiple" && F("", { source: "blur" })), Je(), C || ce?.(e);
	}, Xe = (e, ...t) => {
		let { target: n } = e;
		(be.current?.getPopupElement())?.contains(n) && $ && $(!0), de?.(e, ...t), Ke.current = !0, De(() => {
			Ke.current = !1;
		});
	}, [, Ze] = J.useState({});
	function Qe() {
		Ze({});
	}
	let $e;
	Ee.root && ($e = (e) => {
		$(e);
	});
	let et = J.useMemo(() => ({
		...e,
		notFoundContent: v,
		open: Q,
		triggerOpen: Q,
		rawOpen: Me,
		id: n,
		showSearch: s,
		multiple: X,
		toggleOpen: $,
		showScrollBar: u,
		styles: a,
		classNames: o,
		lockOptions: Ne
	}), [
		e,
		v,
		$,
		n,
		s,
		X,
		Q,
		Me,
		u,
		a,
		o,
		Ne
	]), tt = J.useMemo(() => {
		let e = z ?? B;
		return typeof e == "function" ? e({
			searchValue: ke,
			open: Q,
			focused: Ce,
			showSearch: s,
			loading: w
		}) : e;
	}, [
		z,
		B,
		ke,
		Q,
		Ce,
		s,
		w
	]), nt = () => {
		y?.(), ve.current?.focus(), g([], {
			type: "clear",
			values: m
		}), Ie("", !1, !1);
	}, { allowClear: rt, clearIcon: it } = pe(r, m, R, te, C, ke, S), at = /*#__PURE__*/ J.createElement(V, { ref: Se }), ot = c(r, i, {
		[`${r}-focused`]: Ce,
		[`${r}-multiple`]: X,
		[`${r}-single`]: !X,
		[`${r}-allow-clear`]: rt,
		[`${r}-show-arrow`]: tt != null,
		[`${r}-disabled`]: C,
		[`${r}-loading`]: w,
		[`${r}-open`]: Q,
		[`${r}-customize-input`]: Ae,
		[`${r}-show-search`]: s
	}), st = /*#__PURE__*/ J.createElement(ut, ft({}, Y, {
		ref: ve,
		prefixCls: r,
		className: ot,
		focused: Ce,
		prefix: ee,
		suffix: tt,
		clearIcon: it,
		multiple: X,
		mode: S,
		displayValues: m,
		placeholder: x,
		searchValue: ke,
		activeValue: A,
		onSearch: Ie,
		onSearchSubmit: Le,
		onInputBlur: We,
		onFocus: qe,
		onBlur: Ye,
		onClearMouseDown: nt,
		onKeyDown: Ve,
		onKeyUp: He,
		onSelectorRemove: Ue,
		tokenWithEnter: Pe,
		onMouseDown: Xe,
		components: Ee
	}));
	return st = /*#__PURE__*/ J.createElement(ye, {
		ref: be,
		disabled: C,
		prefixCls: r,
		visible: Q,
		popupElement: at,
		animation: H,
		transitionName: ne,
		popupStyle: re,
		popupClassName: ie,
		direction: d,
		popupMatchSelectWidth: U,
		popupRender: W,
		popupAlign: G,
		placement: ae,
		builtinPlacements: K,
		getPopupContainer: oe,
		empty: _,
		onPopupVisibleChange: $e,
		onPopupMouseEnter: Qe,
		onPopupMouseDown: Xe,
		onPopupBlur: Je
	}, st), /*#__PURE__*/ J.createElement(me.Provider, { value: et }, /*#__PURE__*/ J.createElement(Te, {
		visible: Ce && !Q,
		values: m
	}), st);
}), ht = () => null;
ht.isSelectOptGroup = !0;
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/Option.js
/* istanbul ignore file */
var gt = () => null;
gt.isSelectOption = !0;
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/Filler.js
var _t = /*#__PURE__*/ J.forwardRef(({ height: e, offsetY: t, offsetX: n, children: r, prefixCls: i, onInnerResize: a, innerProps: o, rtl: s, extra: l }, u) => {
	let d = {}, f = {
		display: "flex",
		flexDirection: "column"
	};
	return t !== void 0 && (d = {
		height: e,
		position: "relative",
		overflow: "hidden"
	}, f = {
		...f,
		transform: `translateY(${t}px)`,
		[s ? "marginRight" : "marginLeft"]: -n,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0
	}), /*#__PURE__*/ J.createElement("div", { style: d }, /*#__PURE__*/ J.createElement(ue, { onResize: ({ offsetHeight: e }) => {
		e && a && a();
	} }, /*#__PURE__*/ J.createElement("div", C({
		style: f,
		className: c({ [`${i}-holder-inner`]: i }),
		ref: u
	}, o), r, l)));
});
_t.displayName = "Filler";
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/Item.js
function vt({ children: e, setRef: t }) {
	let n = J.useCallback((e) => {
		t(e);
	}, []);
	return /*#__PURE__*/ J.cloneElement(e, { ref: n });
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/hooks/useChildren.js
function yt(e, t, n, r, i, a, o, { getKey: s }) {
	return e.slice(t, n + 1).map((e, n) => {
		let c = o(e, t + n, {
			style: { width: r },
			offsetX: i
		}), l = s(e);
		return /*#__PURE__*/ J.createElement(vt, {
			key: l,
			setRef: (t) => a(e, t)
		}, c);
	});
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/utils/algorithmUtil.js
function bt(e, t, n) {
	let r = e.length, i = t.length, a, o;
	if (r === 0 && i === 0) return null;
	r < i ? (a = e, o = t) : (a = t, o = e);
	let s = { __EMPTY_ITEM__: !0 };
	function c(e) {
		return e === void 0 ? s : n(e);
	}
	let l = null, u = Math.abs(r - i) !== 1;
	for (let e = 0; e < o.length; e += 1) {
		let t = c(a[e]);
		if (t !== c(o[e])) {
			l = e, u ||= t !== c(o[e + 1]);
			break;
		}
	}
	return l === null ? null : {
		index: l,
		multiple: u
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/hooks/useDiffItem.js
function xt(e, t, n) {
	let [r, i] = J.useState(e), [a, o] = J.useState(null);
	return J.useEffect(() => {
		let a = bt(r || [], e || [], t);
		a?.index !== void 0 && (n?.(a.index), o(e[a.index])), i(e);
	}, [e]), [a];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/utils/isFirefox.js
var St = typeof navigator == "object" && /Firefox/i.test(navigator.userAgent), Ct = ((e, t, n, r) => {
	let i = (0, J.useRef)(!1), a = (0, J.useRef)(null);
	function o() {
		clearTimeout(a.current), i.current = !0, a.current = setTimeout(() => {
			i.current = !1;
		}, 50);
	}
	let s = (0, J.useRef)({
		top: e,
		bottom: t,
		left: n,
		right: r
	});
	return s.current.top = e, s.current.bottom = t, s.current.left = n, s.current.right = r, (e, t, n = !1) => {
		let r = e ? t < 0 && s.current.left || t > 0 && s.current.right : t < 0 && s.current.top || t > 0 && s.current.bottom;
		return n && r ? (clearTimeout(a.current), i.current = !1) : (!r || i.current) && o(), !i.current && r;
	};
});
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/hooks/useFrameWheel.js
function wt(e, t, n, i, a, o, s) {
	let c = (0, J.useRef)(0), l = (0, J.useRef)(null), u = (0, J.useRef)(null), d = (0, J.useRef)(!1), f = Ct(t, n, i, a);
	function p(e, t) {
		if (r.cancel(l.current), f(!1, t)) return;
		let n = e;
		if (!n._virtualHandled) n._virtualHandled = !0;
		else return;
		c.current += t, u.current = t, St || n.preventDefault(), l.current = r(() => {
			let e = d.current ? 10 : 1;
			s(c.current * e, !1), c.current = 0;
		});
	}
	function m(e, t) {
		s(t, !0), St || e.preventDefault();
	}
	let h = (0, J.useRef)(null), g = (0, J.useRef)(null);
	function _(t) {
		if (!e) return;
		r.cancel(g.current), g.current = r(() => {
			h.current = null;
		}, 2);
		let { deltaX: n, deltaY: i, shiftKey: a } = t, s = n, c = i;
		(h.current === "sx" || !h.current && a && i && !n) && (s = i, c = 0, h.current = "sx");
		let l = Math.abs(s), u = Math.abs(c);
		h.current === null && (h.current = o && l > u ? "x" : "y"), h.current === "y" ? p(t, c) : m(t, s);
	}
	function v(t) {
		e && (d.current = t.detail === u.current);
	}
	return [_, v];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/hooks/useGetSize.js
function Tt(e, t, n, r) {
	let [i, a] = J.useMemo(() => [/* @__PURE__ */ new Map(), []], [
		e,
		n.id,
		r
	]);
	return (o, s = o) => {
		let c = i.get(o), l = i.get(s);
		if (c === void 0 || l === void 0) {
			let u = e.length;
			for (let d = a.length; d < u; d += 1) {
				let u = e[d], f = t(u);
				i.set(f, d);
				let p = n.get(f) ?? r;
				if (a[d] = (a[d - 1] || 0) + p, f === o && (c = d), f === s && (l = d), c !== void 0 && l !== void 0) break;
			}
		}
		return {
			top: a[c - 1] || 0,
			bottom: a[l]
		};
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/utils/CacheMap.js
var Et = class {
	maps;
	id = 0;
	diffRecords = /* @__PURE__ */ new Map();
	constructor() {
		this.maps = Object.create(null);
	}
	set(e, t) {
		this.diffRecords.set(e, this.maps[e]), this.maps[e] = t, this.id += 1;
	}
	get(e) {
		return this.maps[e];
	}
	resetRecord() {
		this.diffRecords.clear();
	}
	getRecord() {
		return this.diffRecords;
	}
};
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/hooks/useHeights.js
function Dt(e) {
	let t = parseFloat(e);
	return isNaN(t) ? 0 : t;
}
function Ot(e, t, n) {
	let [r, i] = J.useState(0), a = (0, J.useRef)(/* @__PURE__ */ new Map()), o = (0, J.useRef)(new Et()), s = (0, J.useRef)(0);
	function c() {
		s.current += 1;
	}
	function l(e = !1) {
		c();
		let t = () => {
			let e = !1;
			a.current.forEach((t, n) => {
				if (t && t.offsetParent) {
					let { offsetHeight: r } = t, { marginTop: i, marginBottom: a } = getComputedStyle(t), s = Dt(i), c = Dt(a), l = r + s + c;
					o.current.get(n) !== l && (o.current.set(n, l), e = !0);
				}
			}), e && i((e) => e + 1);
		};
		if (e) t();
		else {
			s.current += 1;
			let e = s.current;
			Promise.resolve().then(() => {
				e === s.current && t();
			});
		}
	}
	function u(r, i) {
		let o = e(r), s = a.current.get(o);
		i ? (a.current.set(o, i), l()) : a.current.delete(o), !s != !i && (i ? t?.(r) : n?.(r));
	}
	return (0, J.useEffect)(() => c, []), [
		u,
		l,
		o.current,
		r
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/hooks/useMobileTouchMove.js
var kt = 14 / 15;
function At(e, t, n) {
	let r = (0, J.useRef)(!1), i = (0, J.useRef)(0), a = (0, J.useRef)(0), o = (0, J.useRef)(null), s = (0, J.useRef)(null), c, l = (e) => {
		if (r.current) {
			let t = Math.ceil(e.touches[0].pageX), r = Math.ceil(e.touches[0].pageY), o = i.current - t, c = a.current - r, l = Math.abs(o) > Math.abs(c);
			l ? i.current = t : a.current = r;
			let u = n(l, l ? o : c, !1, e);
			u && e.preventDefault(), clearInterval(s.current), u && (s.current = setInterval(() => {
				l ? o *= kt : c *= kt;
				let e = Math.floor(l ? o : c);
				(!n(l, e, !0) || Math.abs(e) <= .1) && clearInterval(s.current);
			}, 16));
		}
	}, u = () => {
		r.current = !1, c();
	}, d = (e) => {
		c(), e.touches.length === 1 && !r.current && (r.current = !0, i.current = Math.ceil(e.touches[0].pageX), a.current = Math.ceil(e.touches[0].pageY), o.current = e.target, o.current.addEventListener("touchmove", l, { passive: !1 }), o.current.addEventListener("touchend", u, { passive: !0 }));
	};
	c = () => {
		o.current && (o.current.removeEventListener("touchmove", l), o.current.removeEventListener("touchend", u));
	}, _(() => (e && t.current.addEventListener("touchstart", d, { passive: !0 }), () => {
		t.current?.removeEventListener("touchstart", d), c(), clearInterval(s.current);
	}), [e]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/hooks/useScrollDrag.js
function jt(e) {
	return Math.floor(e ** .5);
}
function Mt(e, t) {
	return ("touches" in e ? e.touches[0] : e)[t ? "pageX" : "pageY"] - window[t ? "scrollX" : "scrollY"];
}
function Nt(e, t, n) {
	J.useEffect(() => {
		let i = t.current;
		if (e && i) {
			let e = !1, t, a, o = () => {
				r.cancel(t);
			}, s = () => {
				o(), t = r(() => {
					n(a), s();
				});
			}, c = () => {
				e = !1, o();
			}, l = (t) => {
				if (t.target.draggable || t.button !== 0) return;
				let n = t;
				n._virtualHandled || (n._virtualHandled = !0, e = !0);
			}, u = (t) => {
				if (e) {
					let e = Mt(t, !1), { top: n, bottom: r } = i.getBoundingClientRect();
					e <= n ? (a = -jt(n - e), s()) : e >= r ? (a = jt(e - r), s()) : o();
				}
			};
			return i.addEventListener("mousedown", l), i.ownerDocument.addEventListener("mouseup", c), i.ownerDocument.addEventListener("mousemove", u), i.ownerDocument.addEventListener("dragend", c), () => {
				i.removeEventListener("mousedown", l), i.ownerDocument.removeEventListener("mouseup", c), i.ownerDocument.removeEventListener("mousemove", u), i.ownerDocument.removeEventListener("dragend", c), o();
			};
		}
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/hooks/useScrollTo.js
var Pt = 10;
function Ft(e, t) {
	let n = typeof e == "function" ? e(t) : e;
	return Number.isFinite(n) ? n : 0;
}
function It(e, t, n, i, a, o, s, c, l) {
	let u = J.useRef(), [d, f] = J.useState(null);
	return _(() => {
		if (d && d.times < Pt) {
			if (!e.current) {
				f((e) => ({ ...e }));
				return;
			}
			s();
			let { targetAlign: r, originAlign: l, index: u, offset: p } = d, m = Ft(p, { getSize: o }), h = e.current.clientHeight, g = !1, _ = r, v = null;
			if (h) {
				let o = r || l, s = 0, f = 0, p = 0, y = Math.min(t.length - 1, u);
				for (let e = 0; e <= y; e += 1) {
					let r = a(t[e]);
					f = s;
					let o = n.get(r);
					p = f + (o === void 0 ? i : o), s = p;
				}
				let b = o === "top" ? m : h - m;
				for (let e = y; e >= 0; --e) {
					let r = a(t[e]), i = n.get(r);
					if (i === void 0) {
						g = !0;
						break;
					}
					if (b -= i, b <= 0) break;
				}
				switch (o) {
					case "top":
						v = f - m;
						break;
					case "bottom":
						v = p - h + m;
						break;
					default: {
						let { scrollTop: t } = e.current, n = t + h;
						f < t ? _ = "top" : p > n && (_ = "bottom");
					}
				}
				v !== null && c(v), v !== d.lastTop && (g = !0);
			}
			g && f({
				...d,
				times: d.times + 1,
				targetAlign: _,
				lastTop: v
			});
		}
	}, [d, e.current]), (e) => {
		if (e == null) {
			l();
			return;
		}
		if (r.cancel(u.current), typeof e == "number") c(e);
		else if (e && typeof e == "object") {
			let n, { align: r } = e;
			"index" in e ? {index: n} = e : n = t.findIndex((t) => a(t) === e.key);
			let { offset: i = 0 } = e;
			f({
				times: 0,
				index: n,
				offset: i,
				originAlign: r
			});
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/ScrollBar.js
var Lt = /*#__PURE__*/ J.forwardRef((e, t) => {
	let { prefixCls: n, rtl: i, scrollOffset: a, scrollRange: o, onStartMove: s, onStopMove: l, onScroll: u, horizontal: d, spinSize: f, containerSize: p, style: m, thumbStyle: h, showScrollBar: g } = e, [_, v] = J.useState(!1), [y, b] = J.useState(null), [x, S] = J.useState(null), C = !i, w = J.useRef(), T = J.useRef(), [E, D] = J.useState(g), O = J.useRef(), k = () => {
		g === !0 || g === !1 || (clearTimeout(O.current), D(!0), O.current = setTimeout(() => {
			D(!1);
		}, 3e3));
	}, A = o - p || 0, j = p - f || 0, M = J.useMemo(() => a === 0 || A === 0 ? 0 : a / A * j, [
		a,
		A,
		j
	]), N = (e) => {
		e.stopPropagation(), e.preventDefault();
	}, P = J.useRef({
		top: M,
		dragging: _,
		pageY: y,
		startTop: x
	});
	P.current = {
		top: M,
		dragging: _,
		pageY: y,
		startTop: x
	};
	let F = (e) => {
		v(!0), b(Mt(e, d)), S(P.current.top), s(), e.stopPropagation(), e.preventDefault();
	};
	J.useEffect(() => {
		let e = (e) => {
			e.preventDefault();
		}, t = w.current, n = T.current;
		return t.addEventListener("touchstart", e, { passive: !1 }), n.addEventListener("touchstart", F, { passive: !1 }), () => {
			t.removeEventListener("touchstart", e), n.removeEventListener("touchstart", F);
		};
	}, []);
	let I = J.useRef();
	I.current = A;
	let L = J.useRef();
	L.current = j, J.useEffect(() => {
		if (_) {
			let e, t = (t) => {
				let { dragging: n, pageY: i, startTop: a } = P.current;
				r.cancel(e);
				let o = w.current.getBoundingClientRect(), s = p / (d ? o.width : o.height);
				if (n) {
					let n = (Mt(t, d) - i) * s, o = a;
					!C && d ? o -= n : o += n;
					let c = I.current, l = L.current, f = l ? o / l : 0, p = Math.ceil(f * c);
					p = Math.max(p, 0), p = Math.min(p, c), e = r(() => {
						u(p, d);
					});
				}
			}, n = () => {
				v(!1), l();
			};
			return window.addEventListener("mousemove", t, { passive: !0 }), window.addEventListener("touchmove", t, { passive: !0 }), window.addEventListener("mouseup", n, { passive: !0 }), window.addEventListener("touchend", n, { passive: !0 }), () => {
				window.removeEventListener("mousemove", t), window.removeEventListener("touchmove", t), window.removeEventListener("mouseup", n), window.removeEventListener("touchend", n), r.cancel(e);
			};
		}
	}, [_]), J.useEffect(() => (k(), () => {
		clearTimeout(O.current);
	}), [a]), J.useImperativeHandle(t, () => ({ delayHidden: k }));
	let R = `${n}-scrollbar`, ee = {
		position: "absolute",
		visibility: E ? null : "hidden"
	}, z = {
		position: "absolute",
		borderRadius: 99,
		background: "var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))",
		cursor: "pointer",
		userSelect: "none"
	};
	return d ? (Object.assign(ee, {
		height: 8,
		left: 0,
		right: 0,
		bottom: 0
	}), Object.assign(z, {
		height: "100%",
		width: f,
		[C ? "left" : "right"]: M
	})) : (Object.assign(ee, {
		width: 8,
		top: 0,
		bottom: 0,
		[C ? "right" : "left"]: 0
	}), Object.assign(z, {
		width: "100%",
		height: f,
		top: M
	})), /*#__PURE__*/ J.createElement("div", {
		ref: w,
		className: c(R, {
			[`${R}-horizontal`]: d,
			[`${R}-vertical`]: !d,
			[`${R}-visible`]: E
		}),
		style: {
			...ee,
			...m
		},
		onMouseDown: N,
		onMouseMove: k
	}, /*#__PURE__*/ J.createElement("div", {
		ref: T,
		className: c(`${R}-thumb`, { [`${R}-thumb-moving`]: _ }),
		style: {
			...z,
			...h
		},
		onMouseDown: F
	}));
}), Rt = 20;
function zt(e = 0, t = 0) {
	let n = e / t * e;
	return isNaN(n) && (n = 0), n = Math.max(n, Rt), Math.floor(n);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/List.js
var Bt = [], Vt = {
	overflowY: "auto",
	overflowAnchor: "none"
};
function Ht(e, t) {
	let { prefixCls: n = "rc-virtual-list", className: r, height: i, itemHeight: a, fullHeight: o = !0, style: s, data: l, children: u, itemKey: d, virtual: f, direction: p, scrollWidth: m, component: g = "div", onScroll: v, onVirtualScroll: y, onVisibleChange: b, innerProps: x, extraRender: S, styles: w, showScrollBar: T = "optional", ...E } = e, D = J.useCallback((e) => typeof d == "function" ? d(e) : e?.[d], [d]), [O, k, A, j] = Ot(D, null, null), M = !!(f !== !1 && i && a), N = J.useMemo(() => Object.values(A.maps).reduce((e, t) => e + t, 0), [A.id, A.maps]), P = M && l && (Math.max(a * l.length, N) > i || !!m), F = p === "rtl", I = c(n, { [`${n}-rtl`]: F }, r), L = l || Bt, R = (0, J.useRef)(), ee = (0, J.useRef)(), z = (0, J.useRef)(), [B, te] = (0, J.useState)(0), [V, H] = (0, J.useState)(0), [ne, re] = (0, J.useState)(!1), ie = () => {
		re(!0);
	}, U = () => {
		re(!1);
	}, W = { getKey: D };
	function G(e) {
		te((t) => {
			let n;
			n = typeof e == "function" ? e(t) : e;
			let r = ve(n);
			return R.current.scrollTop = r, r;
		});
	}
	let ae = (0, J.useRef)({
		start: 0,
		end: L.length
	}), K = (0, J.useRef)(), [oe] = xt(L, D);
	K.current = oe;
	let { scrollHeight: se, start: q, end: ce, offset: le } = J.useMemo(() => {
		if (!M) return {
			scrollHeight: void 0,
			start: 0,
			end: L.length - 1,
			offset: void 0
		};
		if (!P) return {
			scrollHeight: ee.current?.offsetHeight || 0,
			start: 0,
			end: L.length - 1,
			offset: void 0
		};
		let e = 0, t, n, r, o = L.length;
		for (let s = 0; s < o; s += 1) {
			let o = L[s], c = D(o), l = A.get(c), u = e + (l === void 0 ? a : l);
			u >= B && t === void 0 && (t = s, n = e), u > B + i && r === void 0 && (r = s), e = u;
		}
		return t === void 0 && (t = 0, n = 0, r = Math.ceil(i / a)), r === void 0 && (r = L.length - 1), r = Math.min(r + 1, L.length - 1), {
			scrollHeight: e,
			start: t,
			end: r,
			offset: n
		};
	}, [
		P,
		M,
		B,
		L,
		j,
		i
	]);
	ae.current.start = q, ae.current.end = ce, J.useLayoutEffect(() => {
		let e = A.getRecord();
		if (e.size === 1) {
			let t = Array.from(e.keys())[0], n = e.get(t), r = L[q];
			if (r && n === void 0 && D(r) === t) {
				let e = A.get(t) - a;
				G((t) => t + e);
			}
		}
		A.resetRecord();
	}, [se]);
	let [de, fe] = J.useState({
		width: 0,
		height: i
	}), pe = (e) => {
		fe({
			width: e.offsetWidth,
			height: e.offsetHeight
		});
	}, me = (0, J.useRef)(), Y = (0, J.useRef)(), he = J.useMemo(() => zt(de.width, m), [de.width, m]), ge = J.useMemo(() => zt(de.height, se), [de.height, se]), _e = se - i, X = (0, J.useRef)(_e);
	X.current = _e;
	function ve(e) {
		let t = e;
		return Number.isNaN(X.current) || (t = Math.min(t, X.current)), t = Math.max(t, 0), t;
	}
	let ye = B <= 0, be = B >= _e, xe = V <= 0, Se = V >= m, Ce = Ct(ye, be, xe, Se), we = () => ({
		x: F ? -V : V,
		y: B
	}), Z = (0, J.useRef)(we()), Te = h((e) => {
		if (y) {
			let t = {
				...we(),
				...e
			};
			(Z.current.x !== t.x || Z.current.y !== t.y) && (y(t), Z.current = t);
		}
	});
	function Ee(e, t) {
		let n = e;
		t ? ((0, Ue.flushSync)(() => {
			H(n);
		}), Te()) : G(n);
	}
	function De(e) {
		let { scrollTop: t } = e.currentTarget;
		t !== B && G(t), v?.(e), Te();
	}
	let Oe = (e) => {
		let t = e, n = m ? m - de.width : 0;
		return t = Math.max(t, 0), t = Math.min(t, n), t;
	}, ke = h((e, t) => {
		t ? ((0, Ue.flushSync)(() => {
			H((t) => Oe(t + (F ? -e : e)));
		}), Te()) : G((t) => t + e);
	}), [Ae, je] = wt(M, ye, be, xe, Se, !!m, ke);
	At(M, R, (e, t, n, r) => {
		let i = r;
		return Ce(e, t, n) ? !1 : !i || !i._virtualHandled ? (i && (i._virtualHandled = !0), Ae({
			preventDefault() {},
			deltaX: e ? t : 0,
			deltaY: e ? 0 : t
		}), !0) : !1;
	}), Nt(P, R, (e) => {
		G((t) => t + e);
	}), _(() => {
		function e(e) {
			let t = ye && e.detail < 0, n = be && e.detail > 0;
			M && !t && !n && e.preventDefault();
		}
		let t = R.current;
		return t.addEventListener("wheel", Ae, { passive: !1 }), t.addEventListener("DOMMouseScroll", je, { passive: !0 }), t.addEventListener("MozMousePixelScroll", e, { passive: !1 }), () => {
			t.removeEventListener("wheel", Ae), t.removeEventListener("DOMMouseScroll", je), t.removeEventListener("MozMousePixelScroll", e);
		};
	}, [
		M,
		ye,
		be
	]), _(() => {
		if (m) {
			let e = Oe(V);
			H(e), Te({ x: e });
		}
	}, [de.width, m]);
	let Me = () => {
		me.current?.delayHidden(), Y.current?.delayHidden();
	}, Q = Tt(L, D, A, a), $ = It(R, L, A, a, D, Q, () => k(!0), G, Me);
	J.useImperativeHandle(t, () => ({
		nativeElement: z.current,
		getScrollInfo: we,
		scrollTo: (e) => {
			function t(e) {
				return e && typeof e == "object" && ("left" in e || "top" in e);
			}
			t(e) ? (e.left !== void 0 && H(Oe(e.left)), $(e.top)) : $(e);
		}
	})), _(() => {
		b && b(L.slice(q, ce + 1), L);
	}, [
		q,
		ce,
		L
	]);
	let Ne = S?.({
		start: q,
		end: ce,
		virtual: P,
		offsetX: V,
		scrollTop: B,
		offsetY: le,
		rtl: F,
		getSize: Q
	}), Pe = yt(L, q, ce, m, V, O, u, W), Fe = null;
	i && (Fe = {
		[o ? "height" : "maxHeight"]: i,
		...Vt
	}, M && (Fe.overflowY = "hidden", m && (Fe.overflowX = "hidden"), ne && (Fe.pointerEvents = "none")));
	let Ie = {};
	return F && (Ie.dir = "rtl"), /*#__PURE__*/ J.createElement("div", C({
		ref: z,
		style: {
			...s,
			position: "relative"
		},
		className: I
	}, Ie, E), /*#__PURE__*/ J.createElement(ue, { onResize: pe }, /*#__PURE__*/ J.createElement(g, {
		className: `${n}-holder`,
		style: Fe,
		ref: R,
		onScroll: De,
		onMouseEnter: Me
	}, /*#__PURE__*/ J.createElement(_t, {
		prefixCls: n,
		height: se,
		offsetX: V,
		offsetY: le,
		scrollWidth: m,
		onInnerResize: k,
		ref: ee,
		innerProps: x,
		rtl: F,
		extra: Ne
	}, Pe))), P && se > i && /*#__PURE__*/ J.createElement(Lt, {
		ref: me,
		prefixCls: n,
		scrollOffset: B,
		scrollRange: se,
		rtl: F,
		onScroll: Ee,
		onStartMove: ie,
		onStopMove: U,
		spinSize: ge,
		containerSize: de.height,
		style: w?.verticalScrollBar,
		thumbStyle: w?.verticalScrollBarThumb,
		showScrollBar: T
	}), P && m > de.width && /*#__PURE__*/ J.createElement(Lt, {
		ref: Y,
		prefixCls: n,
		scrollOffset: V,
		scrollRange: m,
		rtl: F,
		onScroll: Ee,
		onStartMove: ie,
		onStopMove: U,
		spinSize: he,
		containerSize: de.width,
		horizontal: !0,
		style: w?.horizontalScrollBar,
		thumbStyle: w?.horizontalScrollBarThumb,
		showScrollBar: T
	}));
}
var Ut = /*#__PURE__*/ J.forwardRef(Ht);
Ut.displayName = "List";
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/mock.js
var Wt = /*#__PURE__*/ J.forwardRef((e, t) => Ht({
	...e,
	virtual: !1
}, t));
Wt.displayName = "List";
//#endregion
//#region node_modules/.pnpm/@rc-component+virtual-list@_bdae2fd72dd7d934a19b848e7baa2dc4/node_modules/@rc-component/virtual-list/es/index.js
var Gt = Ut;
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/utils/platformUtil.js
/* istanbul ignore file */
function Kt() {
	return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/OptionList.js
function qt() {
	return qt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, qt.apply(this, arguments);
}
function Jt(e) {
	return typeof e == "string" || typeof e == "number";
}
var Yt = /*#__PURE__*/ J.forwardRef((e, t) => {
	let { prefixCls: n, id: r, open: i, multiple: a, mode: l, searchValue: u, toggleOpen: f, notFoundContent: p, onPopupScroll: m, showScrollBar: h, lockOptions: g } = Y(), { maxCount: _, flattenOptions: v, onActiveValue: y, defaultActiveFirstOption: b, onSelect: x, menuItemSelectedIcon: S, rawValues: C, fieldNames: w, virtual: E, direction: D, listHeight: O, listItemHeight: k, optionRender: A, classNames: j, styles: M } = J.useContext($), N = `${n}-item`, P = T(() => v, [i, g], (e, t) => t[0] && !t[1]), F = J.useRef(null), I = J.useMemo(() => a && xe(_) && C?.size >= _, [
		a,
		_,
		C?.size
	]), L = (e) => {
		e.preventDefault();
	}, R = (e) => {
		F.current?.scrollTo(typeof e == "number" ? { index: e } : e);
	}, ee = J.useCallback((e) => l === "combobox" ? !1 : C.has(e), [
		l,
		[...C].toString(),
		C.size
	]), z = (e, t = 1) => {
		let n = P.length;
		for (let r = 0; r < n; r += 1) {
			let i = (e + r * t + n) % n, { group: a, data: o } = P[i] || {};
			if (!a && !o?.disabled && (ee(o.value) || !I)) return i;
		}
		return -1;
	}, [B, te] = J.useState(() => z(0)), V = (e, t = !1) => {
		te(e);
		let n = { source: t ? "keyboard" : "mouse" }, r = P[e];
		if (!r) {
			y(null, -1, n);
			return;
		}
		y(r.value, e, n);
	};
	(0, J.useEffect)(() => {
		V(b === !1 ? -1 : z(0));
	}, [P.length, u]);
	let H = J.useCallback((e) => l === "combobox" ? String(e).toLowerCase() === u.toLowerCase() : C.has(e), [
		l,
		u,
		[...C].toString(),
		C.size
	]);
	(0, J.useEffect)(() => {
		let e;
		if (!a && i && C.size === 1) {
			let t = Array.from(C)[0], n = P.findIndex(({ data: e }) => u ? String(e.value).startsWith(u) : e.value === t);
			n !== -1 && (V(n), e = setTimeout(() => {
				R(n);
			}));
		}
		return i && F.current?.scrollTo(void 0), () => clearTimeout(e);
	}, [i, u]);
	let ne = (e) => {
		e !== void 0 && x(e, { selected: !C.has(e) }), a || f(!1);
	};
	if (J.useImperativeHandle(t, () => ({
		onKeyDown: (e) => {
			let { which: t, ctrlKey: n } = e;
			switch (t) {
				case s.N:
				case s.P:
				case s.UP:
				case s.DOWN: {
					let e = 0;
					if (t === s.UP ? e = -1 : t === s.DOWN ? e = 1 : Kt() && n && (t === s.N ? e = 1 : t === s.P && (e = -1)), e !== 0) {
						let t = z(B + e, e);
						R(t), V(t, !0);
					}
					break;
				}
				case s.TAB:
				case s.ENTER: {
					let t = P[B];
					if (!t || t.data.disabled) return ne(void 0);
					!I || C.has(t.value) ? ne(t.value) : ne(void 0), i && e.preventDefault();
					break;
				}
				case s.ESC: f(!1), i && e.stopPropagation();
			}
		},
		onKeyUp: () => {},
		scrollTo: (e) => {
			R(e);
		}
	})), P.length === 0) return /*#__PURE__*/ J.createElement("div", {
		role: "listbox",
		id: `${r}_list`,
		className: `${N}-empty`,
		onMouseDown: L
	}, p);
	let re = Object.keys(w).map((e) => w[e]), ie = (e) => e.label;
	function U(e, t) {
		let { group: n } = e;
		return {
			role: n ? "presentation" : "option",
			id: `${r}_list_${t}`
		};
	}
	let W = (e) => {
		let t = P[e];
		if (!t) return null;
		let n = t.data || {}, { value: r, disabled: i } = n, { group: a } = t, s = o(n, !0), c = ie(t);
		return t ? /*#__PURE__*/ J.createElement("div", qt({ "aria-label": typeof c == "string" && !a ? c : null }, s, { key: e }, U(t, e), {
			"aria-selected": H(r),
			"aria-disabled": i
		}), r) : null;
	}, G = {
		role: "listbox",
		id: `${r}_list`
	};
	return /*#__PURE__*/ J.createElement(J.Fragment, null, E && /*#__PURE__*/ J.createElement("div", qt({}, G, { style: {
		height: 0,
		width: 0,
		overflow: "hidden"
	} }), W(B - 1), W(B), W(B + 1)), /*#__PURE__*/ J.createElement(Gt, {
		itemKey: "key",
		ref: F,
		data: P,
		height: O,
		itemHeight: k,
		fullHeight: !1,
		onMouseDown: L,
		onScroll: m,
		virtual: E,
		direction: D,
		innerProps: E ? null : G,
		showScrollBar: h,
		className: j?.popup?.list,
		style: M?.popup?.list
	}, (e, t) => {
		let { group: n, groupOption: r, data: i, label: a, value: s } = e, { key: l } = i;
		if (n) {
			let e = i.title ?? (Jt(a) ? a.toString() : void 0);
			return /*#__PURE__*/ J.createElement("div", {
				className: c(N, `${N}-group`, i.className),
				title: e
			}, a === void 0 ? l : a);
		}
		let { disabled: u, title: f, children: p, style: m, className: h, ...g } = i, _ = d(g, re), v = ee(s), y = u || !v && I, b = `${N}-option`, x = c(N, b, h, j?.popup?.listItem, {
			[`${b}-grouped`]: r,
			[`${b}-active`]: B === t && !y,
			[`${b}-disabled`]: y,
			[`${b}-selected`]: v
		}), C = ie(e), w = !S || typeof S == "function" || v, T = typeof C == "number" ? C : C || s, D = Jt(T) ? T.toString() : void 0;
		return f !== void 0 && (D = f), /*#__PURE__*/ J.createElement("div", qt({}, o(_), E ? {} : U(e, t), {
			"aria-selected": E ? void 0 : H(s),
			"aria-disabled": y,
			className: x,
			title: D,
			onMouseMove: () => {
				B === t || y || V(t);
			},
			onClick: () => {
				y || ne(s);
			},
			style: {
				...M?.popup?.listItem,
				...m
			}
		}), /*#__PURE__*/ J.createElement("div", { className: `${b}-content` }, typeof A == "function" ? A(e, { index: t }) : T), /*#__PURE__*/ J.isValidElement(S) || v, w && /*#__PURE__*/ J.createElement(tt, {
			className: `${N}-option-state`,
			customizeIcon: S,
			customizeIconProps: {
				value: s,
				disabled: y,
				isSelected: v
			}
		}, v ? "✓" : null));
	}));
}), Xt = ((e, t) => {
	let n = J.useRef({
		values: /* @__PURE__ */ new Map(),
		options: /* @__PURE__ */ new Map()
	});
	return [J.useMemo(() => {
		let { values: r, options: i } = n.current, a = e.map((e) => e.label === void 0 ? {
			...e,
			label: r.get(e.value)?.label
		} : e), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
		return a.forEach((e) => {
			o.set(e.value, e), s.set(e.value, t.get(e.value) || i.get(e.value));
		}), n.current.values = o, n.current.options = s, a;
	}, [e, t]), J.useCallback((e) => t.get(e) || n.current.options.get(e), [t])];
});
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useFilterOptions.js
function Zt(e, t) {
	return Ne(e).join("").toUpperCase().includes(t);
}
var Qt = ((e, t, n, r, i) => J.useMemo(() => {
	if (!n || r === !1) return e;
	let { options: a, label: o, value: s } = t, c = [], l = typeof r == "function", u = n.toUpperCase(), d = l ? r : (e, t) => i && i.length ? i.some((e) => Zt(t[e], u)) : t[a] ? Zt(t[o === "children" ? "label" : o], u) : Zt(t[s], u), f = l ? (e) => we(e) : (e) => e;
	return e.forEach((e) => {
		if (e[a]) {
			if (d(n, f(e))) c.push(e);
			else {
				let t = e[a].filter((e) => d(n, f(e)));
				t.length && c.push({
					...e,
					[a]: t
				});
			}
			return;
		}
		d(n, f(e)) && c.push(e);
	}), c;
}, [
	e,
	r,
	i,
	n,
	t
]));
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/utils/legacyUtil.js
function $t(e) {
	let { key: t, props: { children: n, value: r, ...i } } = e;
	return {
		key: t,
		value: r === void 0 ? t : r,
		children: n,
		...i
	};
}
function en(e, t = !1) {
	return w(e).map((e, n) => {
		if (!/*#__PURE__*/ J.isValidElement(e) || !e.type) return null;
		let { type: { isSelectOptGroup: r }, key: i, props: { children: a, ...o } } = e;
		return t || !r ? $t(e) : {
			key: `__RC_SELECT_GRP__${i === null ? n : i}__`,
			label: i,
			...o,
			options: en(a)
		};
	}).filter((e) => e);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useOptions.js
var tn = (e, t, n, r, i) => J.useMemo(() => {
	let a = e;
	e || (a = en(t));
	let o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = (e, t, n) => {
		n && typeof n == "string" && e.set(t[n], t);
	}, l = (e, t = !1) => {
		for (let a = 0; a < e.length; a += 1) {
			let u = e[a];
			!u[n.options] || t ? (o.set(u[n.value], u), c(s, u, n.label), r.forEach((e) => {
				c(s, u, e);
			}), c(s, u, i)) : l(u[n.options], !0);
		}
	};
	return l(a), {
		options: a,
		valueOptions: o,
		labelOptions: s
	};
}, [
	e,
	t,
	n,
	r,
	i
]);
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useRefFunc.js
function nn(e) {
	let t = J.useRef();
	return t.current = e, J.useCallback((...e) => t.current(...e), []);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/hooks/useSearchConfig.js
function rn(e, t, n) {
	let { filterOption: r, searchValue: i, optionFilterProp: a, filterSort: o, onSearch: s, autoClearSearchValue: c } = t;
	return J.useMemo(() => {
		let t = typeof e == "object", l = {
			filterOption: r,
			searchValue: i,
			optionFilterProp: a,
			filterSort: o,
			onSearch: s,
			autoClearSearchValue: c,
			...t ? e : {}
		};
		return [t || n === "combobox" || n === "tags" || n === "multiple" && e === void 0 ? !0 : e, l];
	}, [
		n,
		e,
		r,
		i,
		a,
		o,
		s,
		c
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/Select.js
function an() {
	return an = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, an.apply(this, arguments);
}
var on = ["inputValue"];
function sn(e) {
	return !e || typeof e != "object";
}
var cn = /* @__PURE__ */ J.forwardRef((e, t) => {
	let { id: n, mode: r, prefixCls: i = "rc-select", backfill: a, fieldNames: o, showSearch: s, searchValue: c, onSearch: l, autoClearSearchValue: u, filterOption: d, optionFilterProp: f, filterSort: p, onSelect: m, onDeselect: h, onActive: g, popupMatchSelectWidth: _ = !0, optionLabelProp: v, options: b, optionRender: x, children: C, defaultActiveFirstOption: w, menuItemSelectedIcon: T, virtual: E, direction: D, listHeight: O = 200, listItemHeight: k = 20, labelRender: A, value: j, defaultValue: M, labelInValue: N, onChange: P, maxCount: F, classNames: I, styles: L, ...R } = e, [ee, z] = rn(s, {
		searchValue: c,
		onSearch: l,
		autoClearSearchValue: u,
		filterOption: d,
		optionFilterProp: f,
		filterSort: p
	}, r), { filterOption: B, searchValue: te, optionFilterProp: V, filterSort: H, onSearch: ne, autoClearSearchValue: re = !0 } = z, ie = J.useMemo(() => V ? Array.isArray(V) ? V : [V] : [], [V]), U = y(n), W = pt(r), G = !!(!b && C), ae = J.useMemo(() => B === void 0 && r === "combobox" ? !1 : B, [B, r]), K = J.useMemo(() => Se(o, G), [JSON.stringify(o), G]), [oe, se] = S("", te), q = oe || "", ce = tn(b, C, K, ie, v), { valueOptions: le, labelOptions: ue, options: de } = ce, fe = J.useCallback((e) => Ne(e).map((e) => {
		let t, n, r, i;
		sn(e) ? t = e : (n = e.label, t = e.value);
		let a = le.get(t);
		return a && (n === void 0 && (n = a?.[v || K.label]), r = a?.disabled, i = a?.title), {
			label: n,
			value: t,
			key: t,
			disabled: r,
			title: i
		};
	}), [
		K,
		v,
		le
	]), [pe, me] = S(M, j), [Y, he] = Xt(J.useMemo(() => {
		let e = fe(W && pe === null ? [] : pe);
		return r === "combobox" && Fe(e[0]?.value) ? [] : e;
	}, [
		pe,
		fe,
		r,
		W
	]), le), ge = J.useMemo(() => {
		if (!r && Y.length === 1) {
			let e = Y[0];
			if (e.value === null && (e.label === null || e.label === void 0)) return [];
		}
		return Y.map((e) => ({
			...e,
			label: (typeof A == "function" ? A(e) : e.label) ?? e.value
		}));
	}, [
		r,
		Y,
		A
	]), _e = J.useMemo(() => new Set(Y.map((e) => e.value)), [Y]);
	J.useEffect(() => {
		if (r === "combobox") {
			let e = Y[0]?.value;
			se(Pe(e) ? String(e) : "");
		}
	}, [Y]);
	let X = nn((e, t) => {
		let n = t ?? e;
		return {
			[K.value]: e,
			[K.label]: n
		};
	}), ve = Qt(J.useMemo(() => {
		if (r !== "tags") return de;
		let e = [...de], t = (e) => le.has(e);
		return [...Y].sort((e, t) => e.value < t.value ? -1 : 1).forEach((n) => {
			let r = n.value;
			t(r) || e.push(X(r, n.label));
		}), e;
	}, [
		X,
		de,
		le,
		Y,
		r
	]), K, q, ae, ie), ye = J.useMemo(() => {
		let e = (e) => ie.length ? ie.some((t) => e?.[t] === q) : e?.value === q;
		return r !== "tags" || !q || ve.some((t) => e(t)) || ve.some((e) => e[K.value] === q) ? ve : [X(q), ...ve];
	}, [
		X,
		ie,
		r,
		ve,
		q,
		K
	]), be = (e) => [...e].sort((e, t) => H(e, t, { searchValue: q })).map((e) => Array.isArray(e.options) ? {
		...e,
		options: e.options.length > 0 ? be(e.options) : e.options
	} : e), xe = J.useMemo(() => H ? be(ye) : ye, [
		ye,
		H,
		q
	]), Z = J.useMemo(() => Ce(xe, {
		fieldNames: K,
		childrenAsData: G
	}), [
		xe,
		K,
		G
	]), Te = (e) => {
		let t = fe(e);
		if (me(t), P && (t.length !== Y.length || t.some((e, t) => Y[t]?.value !== e?.value))) {
			let e = N ? t.map(({ label: e, value: t }) => ({
				label: e,
				value: t
			})) : t.map((e) => e.value), n = t.map((e) => we(he(e.value)));
			P(W ? e : e[0], W ? n : n[0]);
		}
	}, [Ee, De] = J.useState(null), [Oe, ke] = J.useState(0), Ae = w === void 0 ? r !== "combobox" : w, je = J.useRef(), Me = J.useCallback((e, t, { source: n = "keyboard" } = {}) => {
		ke(t), a && r === "combobox" && e !== null && n === "keyboard" && De(String(e));
		let i = Promise.resolve().then(() => {
			je.current === i && g?.(e);
		});
		je.current = i;
	}, [
		a,
		r,
		g
	]), Q = (e, t, n) => {
		let r = () => {
			let t = he(e);
			return [N ? {
				label: t?.[K.label],
				value: e
			} : e, we(t)];
		};
		if (t && m) {
			let [e, t] = r();
			m(e, t);
		} else if (!t && h && n !== "clear") {
			let [e, t] = r();
			h(e, t);
		}
	}, Ie = nn((e, t) => {
		let n, i = W ? t.selected : !0;
		n = i ? W ? [...Y, e] : [e] : Y.filter((t) => t.value !== e), Te(n), Q(e, i), r === "combobox" ? De("") : (!pt || re) && (se(""), De(""));
	}), Le = (e, t) => {
		Te(e);
		let { type: n, values: r } = t;
		(n === "remove" || n === "clear") && r.forEach((e) => {
			Q(e.value, !1, n);
		});
	}, Re = (e, t) => {
		if (se(e), De(null), t.source === "submit") {
			let t = (e || "").trim();
			t && (Te(Array.from(new Set([..._e, t]))), Q(t, !0), se(""));
			return;
		}
		t.source !== "blur" && (r === "combobox" && Te(e), ne?.(e));
	}, ze = (e) => {
		let t = e;
		r !== "tags" && (t = e.map((e) => ue.get(e)?.value).filter((e) => e !== void 0));
		let n = Array.from(new Set([..._e, ...t]));
		Te(n), n.forEach((e) => {
			Q(e, !0);
		});
	}, Be = J.useMemo(() => {
		let e = E !== !1 && _ !== !1;
		return {
			...ce,
			flattenOptions: Z,
			onActiveValue: Me,
			defaultActiveFirstOption: Ae,
			onSelect: Ie,
			menuItemSelectedIcon: T,
			rawValues: _e,
			fieldNames: K,
			virtual: e,
			direction: D,
			listHeight: O,
			listItemHeight: k,
			childrenAsData: G,
			maxCount: F,
			optionRender: x,
			classNames: I,
			styles: L
		};
	}, [
		F,
		ce,
		Z,
		Me,
		Ae,
		Ie,
		T,
		_e,
		K,
		E,
		_,
		D,
		O,
		k,
		G,
		x,
		I,
		L
	]);
	return /*#__PURE__*/ J.createElement($.Provider, { value: Be }, /*#__PURE__*/ J.createElement(mt, an({}, R, {
		id: U,
		prefixCls: i,
		ref: t,
		omitDomProps: on,
		mode: r,
		classNames: I,
		styles: L,
		displayValues: ge,
		onDisplayValuesChange: Le,
		maxCount: F,
		direction: D,
		showSearch: ee,
		searchValue: q,
		onSearch: Re,
		autoClearSearchValue: re,
		onSearchSplit: ze,
		popupMatchSelectWidth: _,
		OptionList: Yt,
		emptyOptions: !Z.length,
		activeValue: Ee,
		activeDescendantId: `${U}_list_${Oe}`
	})));
});
cn.Option = gt, cn.OptGroup = ht;
//#endregion
//#region node_modules/.pnpm/@rc-component+select@1.7.1__f2ba413934ab4c8e9d5b3d1aee9f01bb/node_modules/@rc-component/select/es/index.js
var ln = cn, un = (e, t, n) => {
	let { variant: r, [e]: i } = J.useContext(ne), a = J.useContext(re), o = i?.variant, s;
	s = t === void 0 ? n === !1 ? "borderless" : a ?? o ?? r ?? "outlined" : t;
	let c = de.includes(s);
	return [s, c];
}, dn = (e) => {
	let t = {
		overflow: {
			adjustX: !0,
			adjustY: !0,
			shiftY: !0
		},
		htmlRegion: e === "scroll" ? "scroll" : "visible",
		dynamicInset: !0
	};
	return {
		bottomLeft: {
			...t,
			points: ["tl", "bl"],
			offset: [0, 4]
		},
		bottomRight: {
			...t,
			points: ["tr", "br"],
			offset: [0, 4]
		},
		topLeft: {
			...t,
			points: ["bl", "tl"],
			offset: [0, -4]
		},
		topRight: {
			...t,
			points: ["br", "tr"],
			offset: [0, -4]
		}
	};
};
function fn(e, t) {
	return e || dn(t);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/select/style/dropdown.js
var pn = (e) => {
	let { optionHeight: t, optionFontSize: n, optionLineHeight: r, optionPadding: i } = e;
	return {
		position: "relative",
		display: "block",
		minHeight: t,
		padding: i,
		color: e.colorText,
		fontWeight: "normal",
		fontSize: n,
		lineHeight: r,
		boxSizing: "border-box"
	};
}, mn = (e) => {
	let { antCls: t, componentCls: n } = e, r = `${n}-item`, i = `&${t}-slide-up-enter${t}-slide-up-enter-active`, a = `&${t}-slide-up-appear${t}-slide-up-appear-active`, o = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${n}-dropdown-placement-`, c = `${r}-option-selected`;
	return [
		{ [`${n}-dropdown`]: {
			...q(e),
			position: "absolute",
			top: -9999,
			zIndex: e.zIndexPopup,
			boxSizing: "border-box",
			padding: e.paddingXXS,
			overflow: "hidden",
			fontSize: e.fontSize,
			fontVariant: "initial",
			backgroundColor: e.colorBgElevated,
			borderRadius: e.borderRadiusLG,
			outline: "none",
			boxShadow: e.boxShadowSecondary,
			[`
          ${i}${s}bottomLeft,
          ${a}${s}bottomLeft
        `]: { animationName: te },
			[`
          ${i}${s}topLeft,
          ${a}${s}topLeft,
          ${i}${s}topRight,
          ${a}${s}topRight
        `]: { animationName: fe },
			[`${o}${s}bottomLeft`]: { animationName: N },
			[`
          ${o}${s}topLeft,
          ${o}${s}topRight
        `]: { animationName: O },
			"&-hidden": { display: "none" },
			[r]: {
				...pn(e),
				cursor: "pointer",
				transition: `background-color ${e.motionDurationSlow} ease`,
				borderRadius: e.borderRadiusSM,
				"&-group": {
					color: e.colorTextDescription,
					fontSize: e.fontSizeSM,
					cursor: "default"
				},
				"&-option": {
					display: "flex",
					"&-content": {
						flex: "auto",
						...W
					},
					"&-state": {
						flex: "none",
						display: "flex",
						alignItems: "center"
					},
					[`&-selected:not(${r}-option-disabled)`]: {
						color: e.optionSelectedColor,
						fontWeight: e.optionSelectedFontWeight,
						backgroundColor: e.optionSelectedBg,
						[`${r}-option-state`]: { color: e.colorPrimary }
					},
					[`&-active:not(${r}-option-disabled)`]: { backgroundColor: e.optionActiveBg },
					[`&-selected${r}-option-active:not(${r}-option-disabled)`]: { backgroundColor: e.controlItemBgActiveHover },
					"&-disabled": {
						[`&${r}-option-selected`]: { backgroundColor: e.colorBgContainerDisabled },
						color: e.colorTextDisabled,
						cursor: "not-allowed"
					},
					"&-grouped": { paddingInlineStart: e.calc(e.controlPaddingHorizontal).mul(2).equal() }
				},
				"&-empty": {
					...pn(e),
					color: e.colorTextDisabled
				}
			},
			[`${c}:has(+ ${c})`]: {
				borderEndStartRadius: 0,
				borderEndEndRadius: 0,
				[`& + ${c}`]: {
					borderStartStartRadius: 0,
					borderStartEndRadius: 0
				}
			},
			"&-rtl": { direction: "rtl" }
		} },
		I(e, "slide-up"),
		I(e, "slide-down"),
		B(e, "move-up"),
		B(e, "move-down")
	];
}, hn = (e) => {
	let { antCls: t, componentCls: n } = e, r = { background: "transparent" }, i = [
		"> input[disabled]",
		"> textarea[disabled]",
		`> ${n}-input`,
		`> ${t}-input-affix-wrapper-disabled`,
		`> ${t}-input-search`
	].join(", ");
	return { [`&${n}-customize`]: {
		border: 0,
		padding: 0,
		fontSize: "inherit",
		lineHeight: "inherit",
		[`${n}-placeholder`]: { display: "none" },
		[`${n}-content`]: {
			margin: 0,
			padding: 0,
			"&-value": { display: "none" }
		},
		[`&${n}-disabled ${n}-content`]: {
			[i]: r,
			"input[disabled], textarea[disabled]": r
		}
	} };
}, gn = 4, _n = (e) => {
	let { componentCls: t, calc: n, iconCls: r, paddingXS: i, paddingXXS: a, INTERNAL_FIXED_ITEM_MARGIN: o, lineWidth: s, colorIcon: c, colorIconHover: l, inputPaddingHorizontalBase: u, antCls: d } = e, [f, p] = oe(d, "select");
	return { "&-multiple": {
		[f("multi-item-background")]: e.multipleItemBg,
		[f("multi-item-border-color")]: "transparent",
		[f("multi-item-border-radius")]: e.borderRadiusSM,
		[f("multi-item-height")]: e.multipleItemHeight,
		[f("multi-padding-base")]: `calc((${p("height")} - ${p("multi-item-height")}) / 2)`,
		[f("multi-padding-vertical")]: `calc(${p("multi-padding-base")} - ${o} - ${s})`,
		[f("multi-item-padding-horizontal")]: `calc(${u} - ${p("multi-padding-vertical")} - ${s} * 2)`,
		paddingBlock: p("multi-padding-vertical"),
		paddingInlineStart: `calc(${p("multi-padding-base")} - ${s})`,
		[`${t}-prefix`]: { marginInlineStart: p("multi-item-padding-horizontal") },
		[`${t}-prefix + ${t}-content`]: {
			[`${t}-placeholder`]: { insetInlineStart: 0 },
			[`${t}-content-item${t}-content-item-suffix`]: { marginInlineStart: 0 }
		},
		[`${t}-placeholder`]: {
			position: "absolute",
			lineHeight: p("line-height"),
			insetInlineStart: p("multi-item-padding-horizontal"),
			width: `calc(100% - ${p("multi-item-padding-horizontal")})`,
			top: "50%",
			transform: "translateY(-50%)"
		},
		[`${t}-content`]: {
			flexWrap: "wrap",
			alignItems: "center",
			lineHeight: 1,
			"&-item-prefix": { height: p("font-size") },
			"&-item": {
				lineHeight: 1,
				maxWidth: `calc(100% - ${gn}px)`
			},
			[`${t}-content-item-prefix + ${t}-content-item-suffix,
          ${t}-content-item-suffix:first-child`]: { marginInlineStart: p("multi-item-padding-horizontal") },
			[`${t}-selection-item`]: {
				lineHeight: `calc(${p("multi-item-height")} - ${s} * 2)`,
				border: `${s} solid ${p("multi-item-border-color")}`,
				display: "flex",
				marginBlock: o,
				marginInlineEnd: n(o).mul(2).equal(),
				background: p("multi-item-background"),
				borderRadius: p("multi-item-border-radius"),
				paddingInlineStart: i,
				paddingInlineEnd: a,
				transition: [
					"height",
					"line-height",
					"padding"
				].map((t) => `${t} ${e.motionDurationSlow}`).join(","),
				"&-content": {
					...W,
					marginInlineEnd: a
				},
				"&-remove": {
					...K(),
					display: "inline-flex",
					alignItems: "center",
					color: c,
					fontWeight: "bold",
					fontSize: 10,
					lineHeight: "inherit",
					cursor: "pointer",
					[`> ${r}`]: { verticalAlign: "-0.2em" },
					"&:hover": { color: l }
				}
			},
			[`${t}-input`]: {
				lineHeight: n(o).mul(2).add(p("multi-item-height")).equal(),
				width: "calc(var(--select-input-width, 0) * 1px)",
				minWidth: gn,
				maxWidth: "100%",
				transition: `line-height ${e.motionDurationSlow}`
			}
		},
		[`&${t}-sm`]: {
			[f("multi-item-height")]: e.multipleItemHeightSM,
			[f("multi-item-border-radius")]: e.borderRadiusXS
		},
		[`&${t}-lg`]: {
			[f("multi-item-height")]: e.multipleItemHeightLG,
			[f("multi-item-border-radius")]: e.borderRadius
		},
		[`&${t}-filled`]: {
			[f("multi-item-border-color")]: e.colorSplit,
			[f("multi-item-background")]: e.colorBgContainer,
			[`&${t}-disabled`]: { [f("multi-item-border-color")]: "transparent" }
		}
	} };
}, vn = (e, t) => {
	let { componentCls: n, antCls: r } = e, [i] = oe(r, "select"), { border: a, borderHover: o, borderActive: s, borderOutline: c } = t, l = t.background || e.selectorBg || e.colorBgContainer;
	return {
		[i("border-color")]: a,
		[i("background-color")]: l,
		[i("affix-color")]: t.affixColor,
		[`&:not(${n}-disabled)`]: {
			"&:hover": {
				[i("border-color")]: o,
				[i("background-color")]: t.backgroundHover || l
			},
			[`&${n}-focused`]: {
				[i("border-color")]: s,
				[i("background-color")]: t.backgroundActive || l,
				boxShadow: `0 0 0 ${g(e.controlOutlineWidth)} ${c}`
			}
		},
		[`&${n}-disabled`]: {
			[i("border-color")]: t.borderDisabled || t.border,
			[i("background-color")]: t.backgroundDisabled || t.background
		}
	};
}, yn = (e, t, n, r = {}, i = {}, a) => {
	let { componentCls: o } = e;
	return { [`&${o}-${t}`]: [
		vn(e, n),
		{
			[`&${o}-status-error`]: vn(e, {
				...n,
				...r
			}),
			[`&${o}-status-warning`]: vn(e, {
				...n,
				...i
			})
		},
		a
	] };
}, bn = (e) => {
	let { componentCls: t, fontHeight: n, controlHeight: r, fontSizeIcon: i, showArrowPaddingInlineEnd: a, iconCls: o, antCls: s, max: c, calc: l } = e, [u, d] = oe(s, "select"), f = c(l(a).sub(i).equal(), 0);
	return { [t]: [
		{
			[u("border-radius")]: e.borderRadius,
			[u("border-color")]: "#000",
			[u("border-size")]: e.lineWidth,
			[u("background-color")]: e.colorBgContainer,
			[u("font-size")]: e.fontSize,
			[u("line-height")]: e.lineHeight,
			[u("font-height")]: n,
			[u("color")]: e.colorText,
			[u("affix-color")]: e.colorText,
			[u("height")]: r,
			[u("padding-horizontal")]: l(e.paddingSM).sub(e.lineWidth).equal(),
			[u("padding-vertical")]: `calc((${d("height")} - ${d("font-height")}) / 2 - ${d("border-size")})`,
			...q(e),
			display: "inline-flex",
			flexWrap: "nowrap",
			position: "relative",
			transition: `all ${e.motionDurationSlow}`,
			alignItems: "flex-start",
			outline: 0,
			cursor: "pointer",
			borderRadius: d("border-radius"),
			borderWidth: d("border-size"),
			borderStyle: e.lineType,
			borderColor: d("border-color"),
			background: d("background-color"),
			fontSize: d("font-size"),
			lineHeight: d("line-height"),
			color: d("color"),
			paddingInline: d("padding-horizontal"),
			paddingBlock: d("padding-vertical"),
			[`${t}-prefix`]: {
				color: d("affix-color"),
				flex: "none",
				lineHeight: 1
			},
			[`${t}-placeholder`]: {
				...W,
				color: e.colorTextPlaceholder,
				pointerEvents: "none",
				zIndex: 1
			},
			[`${t}-content`]: {
				flex: "auto",
				minWidth: 0,
				position: "relative",
				display: "flex",
				marginInlineEnd: f,
				"&:before": {
					content: "\"\\a0\"",
					width: 0,
					overflow: "hidden"
				},
				"&-value": { visibility: "inherit" },
				"input[readonly]": {
					cursor: "inherit",
					caretColor: "transparent"
				}
			},
			[`${t}-suffix`]: {
				flex: "none",
				color: e.colorTextQuaternary,
				fontSize: e.fontSizeIcon,
				lineHeight: 1,
				"> :not(:last-child)": { marginInlineEnd: e.marginXS }
			},
			[`${t}-prefix, ${t}-suffix`]: {
				alignSelf: "center",
				[o]: { verticalAlign: "top" }
			},
			"&-disabled": {
				background: e.colorBgContainerDisabled,
				color: e.colorTextDisabled,
				cursor: "not-allowed",
				input: { cursor: "not-allowed" }
			},
			"&-sm": {
				[u("height")]: e.controlHeightSM,
				[u("padding-horizontal")]: l(e.paddingXS).sub(e.lineWidth).equal(),
				[u("border-radius")]: e.borderRadiusSM,
				[`${t}-clear`]: { insetInlineEnd: d("padding-horizontal") }
			},
			"&-lg": {
				[u("height")]: e.controlHeightLG,
				[u("font-size")]: e.fontSizeLG,
				[u("line-height")]: e.lineHeightLG,
				[u("font-height")]: e.fontHeightLG,
				[u("border-radius")]: e.borderRadiusLG
			}
		},
		{ [`&:not(${t}-customize)`]: { [`${t}-input`]: {
			outline: "none",
			background: "transparent",
			appearance: "none",
			border: 0,
			margin: 0,
			padding: 0,
			color: d("color"),
			fontFamily: "inherit",
			fontSize: "inherit",
			"&::-webkit-search-cancel-button": {
				display: "none",
				appearance: "none"
			}
		} } },
		{ [`&-single:not(${t}-customize)`]: {
			[`${t}-input`]: {
				position: "absolute",
				inset: 0,
				lineHeight: "inherit"
			},
			[`${t}-content`]: {
				...W,
				alignSelf: "center",
				"&-has-value": {
					display: "block",
					"&:before": { display: "none" }
				},
				"&-has-search-value": {
					color: "transparent",
					[`> :not(${t}-input)`]: { opacity: 0 }
				},
				"&-value": {
					transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
					zIndex: 1
				}
			},
			[`&${t}-open ${t}-content`]: {
				color: e.colorTextPlaceholder,
				"&-has-search-value": { color: "transparent" }
			}
		} },
		{ [`&-show-search:not(${t}-customize-input):not(${t}-disabled)`]: { cursor: "text" } },
		_n(e),
		yn(e, "outlined", {
			border: e.colorBorder,
			borderHover: e.hoverBorderColor,
			borderActive: e.activeBorderColor,
			borderOutline: e.activeOutlineColor,
			borderDisabled: e.colorBorderDisabled
		}, {
			border: e.colorError,
			borderHover: e.colorErrorBorderHover,
			borderActive: e.colorError,
			borderOutline: e.colorErrorOutline,
			affixColor: e.colorErrorAffix
		}, {
			border: e.colorWarning,
			borderHover: e.colorWarningHover,
			borderActive: e.colorWarning,
			borderOutline: e.colorWarningOutline,
			affixColor: e.colorWarningAffix
		}),
		yn(e, "filled", {
			border: "transparent",
			borderHover: "transparent",
			borderActive: e.activeBorderColor,
			borderOutline: "transparent",
			borderDisabled: e.colorBorderDisabled,
			background: e.colorFillTertiary,
			backgroundHover: e.colorFillSecondary,
			backgroundActive: e.colorBgContainer
		}, {
			color: e.colorErrorText,
			background: e.colorErrorBg,
			backgroundHover: e.colorErrorBgHover,
			borderActive: e.colorError
		}, {
			background: e.colorWarningBg,
			backgroundHover: e.colorWarningBgHover,
			borderActive: e.colorWarning
		}),
		yn(e, "borderless", {
			border: "transparent",
			borderHover: "transparent",
			borderActive: "transparent",
			borderOutline: "transparent",
			background: "transparent"
		}),
		yn(e, "underlined", {
			border: e.colorBorder,
			borderHover: e.hoverBorderColor,
			borderActive: e.activeBorderColor,
			borderOutline: "transparent"
		}, {
			border: e.colorError,
			borderHover: e.colorErrorBorderHover,
			borderActive: e.colorError
		}, {
			border: e.colorWarning,
			borderHover: e.colorWarningHover,
			borderActive: e.colorWarning
		}, {
			borderRadius: 0,
			borderTopColor: "transparent",
			borderInlineColor: "transparent"
		}),
		hn(e)
	] };
}, xn = (e) => {
	let { fontSize: t, lineHeight: n, lineWidth: r, controlHeight: i, controlHeightSM: a, controlHeightLG: o, paddingXXS: s, controlPaddingHorizontal: c, zIndexPopupBase: l, colorText: u, fontWeightStrong: d, controlItemBgActive: f, controlItemBgHover: p, colorBgContainer: m, colorFillSecondary: h, colorBgContainerDisabled: g, colorTextDisabled: _, colorPrimaryHover: v, colorPrimary: y, controlOutline: b } = e, x = s * 2, S = r * 2, C = Math.min(i - x, i - S), w = Math.min(a - x, a - S), T = Math.min(o - x, o - S);
	return {
		INTERNAL_FIXED_ITEM_MARGIN: Math.floor(s / 2),
		zIndexPopup: l + 50,
		optionSelectedColor: u,
		optionSelectedFontWeight: d,
		optionSelectedBg: f,
		optionActiveBg: p,
		optionPadding: `${(i - t * n) / 2}px ${c}px`,
		optionFontSize: t,
		optionLineHeight: n,
		optionHeight: i,
		selectorBg: m,
		clearBg: m,
		singleItemHeightLG: o,
		multipleItemBg: h,
		multipleItemBorderColor: "transparent",
		multipleItemHeight: C,
		multipleItemHeightSM: w,
		multipleItemHeightLG: T,
		multipleSelectorBgDisabled: g,
		multipleItemColorDisabled: _,
		multipleItemBorderColorDisabled: "transparent",
		showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25),
		hoverBorderColor: v,
		activeBorderColor: y,
		activeOutlineColor: b,
		selectAffixPadding: s
	};
}, Sn = (e) => {
	let { antCls: t, componentCls: n, motionDurationMid: r, inputPaddingHorizontalBase: i } = e, a = { [`${n}-clear`]: {
		opacity: 1,
		background: e.colorBgBase,
		borderRadius: "50%"
	} };
	return {
		[n]: {
			...q(e),
			[`${n}-selection-item`]: {
				flex: 1,
				fontWeight: "normal",
				position: "relative",
				userSelect: "none",
				...W,
				[`> ${t}-typography`]: { display: "inline" }
			},
			[`${n}-prefix`]: {
				flex: "none",
				marginInlineEnd: e.selectAffixPadding
			},
			[`${n}-clear`]: {
				position: "absolute",
				top: "50%",
				insetInlineStart: "auto",
				insetInlineEnd: i,
				zIndex: 1,
				display: "inline-block",
				width: e.fontSizeIcon,
				height: e.fontSizeIcon,
				marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
				color: e.colorTextQuaternary,
				fontSize: e.fontSizeIcon,
				fontStyle: "normal",
				lineHeight: 1,
				textAlign: "center",
				textTransform: "none",
				cursor: "pointer",
				opacity: 0,
				transition: ["color", "opacity"].map((e) => `${e} ${r} ease`).join(", "),
				textRendering: "auto",
				transform: "translateZ(0)",
				"&:before": { display: "block" },
				"&:hover": { color: e.colorIcon }
			},
			"@media(hover:none)": a,
			"&:hover": a
		},
		[`${n}-status`]: { "&-error, &-warning, &-success, &-validating": { [`&${n}-has-feedback`]: { [`${n}-clear`]: { insetInlineEnd: e.calc(i).add(e.fontSize).add(e.paddingXS).equal() } } } }
	};
}, Cn = (e) => {
	let { componentCls: t } = e;
	return [
		{ [t]: { [`&${t}-in-form-item`]: { width: "100%" } } },
		Sn(e),
		mn(e),
		{ [`${t}-rtl`]: { direction: "rtl" } },
		ee(e, { focusElCls: `${t}-focused` })
	];
}, wn = le("Select", (e, { rootPrefixCls: t }) => {
	let n = E(e, {
		rootPrefixCls: t,
		inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(e.lineWidth).equal(),
		multipleSelectItemHeight: e.multipleItemHeight,
		selectHeight: e.controlHeight
	});
	return [Cn(n), bn(n)];
}, xn, { unitless: {
	optionLineHeight: !0,
	optionSelectedFontWeight: !0
} });
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/select/useIcons.js
function Tn({ suffixIcon: e, contextSuffixIcon: t, clearIcon: r, contextClearIcon: i, menuItemSelectedIcon: a, contextMenuItemSelectedIcon: o, removeIcon: s, contextRemoveIcon: c, loading: l, loadingIcon: d, contextLoadingIcon: f, searchIcon: h, contextSearchIcon: g, multiple: _, hasFeedback: y, showSuffixIcon: b, feedbackIcon: S, showArrow: C, componentName: w }) {
	return J.useMemo(() => {
		let w = k(r, i, /*#__PURE__*/ J.createElement(v, null)), T = (t) => e === null && !y && !C ? null : /*#__PURE__*/ J.createElement(J.Fragment, null, b !== !1 && t, y && S), E = null;
		E = e === void 0 ? l ? T(k(d, f, /*#__PURE__*/ J.createElement(x, { spin: !0 }))) : ({ open: e, showSearch: r }) => T(e && r ? k(h, g, /*#__PURE__*/ J.createElement(u, null)) : k(t, /*#__PURE__*/ J.createElement(n, null))) : T(e);
		let D = k(a, o, _ ? /*#__PURE__*/ J.createElement(m, null) : null), O = k(s, c, /*#__PURE__*/ J.createElement(p, null));
		return {
			clearIcon: w,
			suffixIcon: E,
			itemIcon: D,
			removeIcon: O
		};
	}, [
		e,
		t,
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		d,
		f,
		h,
		g,
		_,
		y,
		b,
		S,
		C
	]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/select/usePopupRender.js
function En(e) {
	return J.useMemo(() => {
		if (e) return (...t) => /*#__PURE__*/ J.createElement(G, { space: !0 }, e.apply(void 0, t));
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/select/useShowArrow.js
function Dn(e, t) {
	return t === void 0 ? e !== null : t;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/select/index.js
var On = /* @__PURE__ */ e({ default: () => An }), kn = "SECRET_COMBOBOX_MODE_DO_NOT_USE", An = /*#__PURE__*/ J.forwardRef((e, t) => {
	let { prefixCls: n, bordered: r, className: i, rootClassName: a, getPopupContainer: o, popupClassName: s, dropdownClassName: l, listHeight: u = 256, placement: f, listItemHeight: p, size: m, disabled: h, notFoundContent: g, status: _, builtinPlacements: v, dropdownMatchSelectWidth: y, popupMatchSelectWidth: b, direction: x, style: S, allowClear: C, variant: w, popupStyle: T, dropdownStyle: E, transitionName: O, tagRender: k, maxCount: M, prefix: N, dropdownRender: F, popupRender: I, onDropdownVisibleChange: ee, onOpenChange: B, styles: te, classNames: re, clearIcon: W, showSearch: G, ...K } = e, { getPopupContainer: oe, getPrefixCls: q, renderEmpty: le, direction: ue, virtual: de, popupMatchSelectWidth: fe, popupOverflow: pe } = J.useContext(ne), { showSearch: me, allowClear: Y, style: he, styles: ge, className: _e, classNames: X, clearIcon: ve, loadingIcon: ye, menuItemSelectedIcon: be, removeIcon: xe, suffixIcon: Se } = R("select"), [, Ce] = H(), we = p ?? Ce?.controlHeight, Z = q("select", n), Te = q(), Ee = x ?? ue, { compactSize: De, compactItemClassnames: Oe } = D(Z, Ee), [ke, Ae] = un("select", w, r), je = V(Z), [Me, Q] = wn(Z, je), $ = J.useMemo(() => {
		let { mode: t } = e;
		if (t !== "combobox") return t === kn ? "combobox" : t;
	}, [e.mode]), Ne = $ === "multiple" || $ === "tags", Pe = Dn(e.suffixIcon, e.showArrow), Fe = b ?? y ?? fe, Ie = En(I || F), Le = B || ee, { status: Re, hasFeedback: ze, isFormItemInput: Be, feedbackIcon: Ve } = J.useContext(se), He = z(Re, _), Ue;
	Ue = g === void 0 ? $ === "combobox" ? null : le?.("Select") || /*#__PURE__*/ J.createElement(L, { componentName: "Select" }) : g;
	let { suffixIcon: We, itemIcon: Ge, removeIcon: Ke, clearIcon: qe } = Tn({
		...K,
		multiple: Ne,
		hasFeedback: ze,
		feedbackIcon: Ve,
		showSuffixIcon: Pe,
		prefixCls: Z,
		componentName: "Select",
		clearIcon: W,
		searchIcon: A(G, "searchIcon"),
		contextClearIcon: ve,
		contextLoadingIcon: ye,
		contextMenuItemSelectedIcon: be,
		contextRemoveIcon: xe,
		contextSearchIcon: A(me, "searchIcon"),
		contextSuffixIcon: Se
	}), Je = C ?? Y, Ye = Je === !0 ? { clearIcon: qe } : Je, Xe = G ?? me, Ze = d(K, ["suffixIcon", "itemIcon"]), Qe = ie((e) => m ?? De ?? e), $e = J.useContext(ae), et = h ?? $e, tt = {
		...e,
		variant: ke,
		status: He,
		disabled: et,
		size: Qe
	}, [nt, rt] = P([X, re], [ge, te], { props: tt }, { popup: { _default: "root" } }), it = c(nt.popup.root, s, l, { [`${Z}-dropdown-${Ee}`]: Ee === "rtl" }, a, Q, je, Me), at = {
		...rt.popup?.root,
		...T ?? E
	}, ot = c({
		[`${Z}-lg`]: Qe === "large",
		[`${Z}-sm`]: Qe === "small",
		[`${Z}-rtl`]: Ee === "rtl",
		[`${Z}-${ke}`]: Ae,
		[`${Z}-in-form-item`]: Be
	}, j(Z, He, ze), Oe, _e, i, nt.root, a, Q, je, Me), st = J.useMemo(() => f === void 0 ? Ee === "rtl" ? "bottomRight" : "bottomLeft" : f, [f, Ee]), [ct] = U("SelectLike", rt.popup.root?.zIndex ?? at.zIndex);
	return /*#__PURE__*/ J.createElement(ln, {
		ref: t,
		virtual: de,
		classNames: nt,
		styles: rt,
		showSearch: Xe,
		...Ze,
		style: {
			...rt.root,
			...he,
			...S
		},
		popupMatchSelectWidth: Fe,
		transitionName: ce(Te, "slide-up", O),
		builtinPlacements: fn(v, pe),
		listHeight: u,
		listItemHeight: we,
		mode: $,
		prefixCls: Z,
		placement: st,
		direction: Ee,
		prefix: N,
		suffixIcon: We,
		menuItemSelectedIcon: Ge,
		removeIcon: Ke,
		allowClear: Ye,
		notFoundContent: Ue,
		className: ot,
		getPopupContainer: o || oe,
		popupClassName: it,
		disabled: et,
		popupStyle: {
			...rt.popup.root,
			...at,
			zIndex: ct
		},
		maxCount: Ne ? M : void 0,
		tagRender: Ne ? k : void 0,
		popupRender: Ie,
		onPopupVisibleChange: Le
	});
}), jn = F(An, "popupAlign");
An.SECRET_COMBOBOX_MODE_DO_NOT_USE = kn, An.Option = gt, An.OptGroup = ht, An._InternalPanelDoNotUseOrYouWillBeFired = jn;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/auto-complete/AutoComplete.js
var { Option: Mn } = An;
function Nn(e) {
	return e?.type && (e.type.isSelectOption || e.type.isSelectOptGroup);
}
var Pn = /*#__PURE__*/ J.forwardRef((e, t) => {
	let { prefixCls: n, className: r, style: i, popupClassName: a, dropdownClassName: o, children: s, dataSource: l, rootClassName: u, dropdownStyle: f, dropdownRender: p, popupRender: m, onDropdownVisibleChange: h, onOpenChange: g, styles: _, classNames: v, popupMatchSelectWidth: y, dropdownMatchSelectWidth: b } = e, x = w(s), S = m || p, C = g || h, T = y ?? b, E;
	x.length === 1 && /*#__PURE__*/ J.isValidElement(x[0]) && !Nn(x[0]) && ([E] = x);
	let D = E ? () => E : void 0, O;
	O = x.length && Nn(x[0]) ? s : l ? l.map((e) => {
		if (/*#__PURE__*/ J.isValidElement(e)) return e;
		switch (typeof e) {
			case "string": return /*#__PURE__*/ J.createElement(Mn, {
				key: e,
				value: e
			}, e);
			case "object": {
				let { value: t } = e;
				return /*#__PURE__*/ J.createElement(Mn, {
					key: t,
					value: t
				}, e.text);
			}
			default: return;
		}
	}) : [];
	let { getPrefixCls: k } = J.useContext(ne), A = k("select", n), j = {
		...e,
		popupRender: S,
		onOpenChange: C,
		popupMatchSelectWidth: T
	}, [M, N] = P([v], [_], { props: j }, { popup: { _default: "root" } }), F = J.useMemo(() => ({
		root: c(`${A}-auto-complete`, r, u, M.root, { [`${A}-customize`]: E }),
		prefix: M.prefix,
		input: M.input,
		placeholder: M.placeholder,
		content: M.content,
		popup: {
			root: c(a, o, M.popup.root),
			list: M.popup.list,
			listItem: M.popup.listItem
		}
	}), [
		A,
		r,
		u,
		M,
		a,
		o
	]), I = J.useMemo(() => ({
		root: {
			...N.root,
			...i
		},
		input: N.input,
		prefix: N.prefix,
		placeholder: N.placeholder,
		content: N.content,
		popup: {
			root: {
				...f,
				...N.popup.root
			},
			list: N.popup.list,
			listItem: N.popup.listItem
		}
	}), [
		N,
		i,
		f
	]);
	return /*#__PURE__*/ J.createElement(An, {
		ref: t,
		suffixIcon: null,
		...d(e, [
			"dataSource",
			"dropdownClassName",
			"popupClassName"
		]),
		prefixCls: A,
		classNames: F,
		styles: I,
		mode: An.SECRET_COMBOBOX_MODE_DO_NOT_USE,
		popupRender: S,
		onPopupVisibleChange: C,
		popupMatchSelectWidth: T,
		getInputElement: D
	}, O);
}), Fn = /* @__PURE__ */ e({ default: () => Rn }), { Option: In } = An, Ln = F(Pn, "popupAlign", (e) => d(e, ["visible"])), Rn = Pn;
Rn.Option = In, Rn._InternalPanelDoNotUseOrYouWillBeFired = Ln;
//#endregion
export { En as a, fn as c, mt as d, et as f, Dn as i, un as l, An as n, Tn as o, Y as p, On as r, wn as s, Fn as t, Gt as u };
