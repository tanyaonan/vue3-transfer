globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Ht as n, Jt as r, Nt as i, b as a, kn as o, kt as s, sn as c, yt as l } from "../shared/core.js";
import { Qn as u, Sr as d, en as f, kn as p, pr as m, sr as h } from "../shared/antd-core.js";
import { o as g } from "./avatar.js";
//#region node_modules/.pnpm/@rc-component+rate@1.0.1_re_67b3dda043bc45b68686eba2801e3125/node_modules/@rc-component/rate/es/Star.js
var _ = /* @__PURE__ */ t(o());
function v(e, t) {
	let { disabled: n, prefixCls: a, character: o, characterRender: s, index: c, count: l, value: u, allowHalf: d, focused: f, onHover: p, onClick: m } = e, h = (e) => {
		p(e, c);
	}, g = (e) => {
		m(e, c);
	}, v = (e) => {
		e.keyCode === r.ENTER && m(e, c);
	}, y = c + 1, b = new Set([a]);
	u === 0 && c === 0 && f ? b.add(`${a}-focused`) : d && u + .5 >= y && u < y ? (b.add(`${a}-half`), b.add(`${a}-active`), f && b.add(`${a}-focused`)) : (y <= u ? b.add(`${a}-full`) : b.add(`${a}-zero`), y === u && f && b.add(`${a}-focused`));
	let x = typeof o == "function" ? o(e) : o, S = /*#__PURE__*/ _.createElement("li", {
		className: i(Array.from(b)),
		ref: t
	}, /*#__PURE__*/ _.createElement("div", {
		onClick: n ? null : g,
		onKeyDown: n ? null : v,
		onMouseMove: n ? null : h,
		role: "radio",
		"aria-checked": u > c ? "true" : "false",
		"aria-posinset": c + 1,
		"aria-setsize": l,
		tabIndex: n ? -1 : 0
	}, /*#__PURE__*/ _.createElement("div", { className: `${a}-first` }, x), /*#__PURE__*/ _.createElement("div", { className: `${a}-second` }, x)));
	return s && (S = s(S, e)), S;
}
var y = /*#__PURE__*/ _.forwardRef(v);
//#endregion
//#region node_modules/.pnpm/@rc-component+rate@1.0.1_re_67b3dda043bc45b68686eba2801e3125/node_modules/@rc-component/rate/es/useRefs.js
function b() {
	let e = _.useRef({});
	function t(t) {
		return e.current[t];
	}
	function n(t) {
		return (n) => {
			e.current[t] = n;
		};
	}
	return [t, n];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+rate@1.0.1_re_67b3dda043bc45b68686eba2801e3125/node_modules/@rc-component/rate/es/util.js
function x(e) {
	let t = e.pageXOffset, n = "scrollLeft";
	if (typeof t != "number") {
		let r = e.document;
		t = r.documentElement[n], typeof t != "number" && (t = r.body[n]);
	}
	return t;
}
function S(e) {
	let t, n, r = e.ownerDocument, { body: i } = r, a = r && r.documentElement, o = e.getBoundingClientRect();
	return t = o.left, n = o.top, t -= a.clientLeft || i.clientLeft || 0, n -= a.clientTop || i.clientTop || 0, {
		left: t,
		top: n
	};
}
function C(e) {
	let t = S(e), n = e.ownerDocument, r = n.defaultView || n.parentWindow;
	return t.left += x(r), t.left;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+rate@1.0.1_re_67b3dda043bc45b68686eba2801e3125/node_modules/@rc-component/rate/es/Rate.js
function w() {
	return w = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, w.apply(this, arguments);
}
function T(e, t) {
	let { prefixCls: a = "rc-rate", className: o, defaultValue: s, value: l, count: u = 5, allowHalf: d = !1, allowClear: f = !0, keyboard: p = !0, character: m = "★", characterRender: h, disabled: g, direction: v = "ltr", tabIndex: x = 0, autoFocus: S, onHoverChange: T, onChange: E, onFocus: D, onBlur: O, onKeyDown: k, onMouseLeave: A, ...j } = e, [M, N] = b(), P = _.useRef(null), F = () => {
		g || P.current?.focus();
	};
	_.useImperativeHandle(t, () => ({
		focus: F,
		blur: () => {
			g || P.current?.blur();
		}
	}));
	let [I, L] = c(s || 0, l), [R, z] = c(null), B = (e, t) => {
		let n = v === "rtl", r = e + 1;
		if (d) {
			let i = M(e), a = C(i), o = i.clientWidth;
			(n && t - a > o / 2 || !n && t - a < o / 2) && (r -= .5);
		}
		return r;
	}, V = (e) => {
		L(e), E?.(e);
	}, [H, U] = _.useState(!1), W = () => {
		U(!0), D?.();
	}, G = () => {
		U(!1), O?.();
	}, [K, q] = _.useState(null), J = (e, t) => {
		let n = B(t, e.pageX);
		n !== R && (q(n), z(null)), T?.(n);
	}, Y = (e) => {
		g || (q(null), z(null), T?.(void 0)), e && A?.(e);
	}, X = (e, t) => {
		let n = B(t, e.pageX), r = !1;
		f && (r = n === I), Y(), V(r ? 0 : n), z(r ? n : null);
	}, Z = (e) => {
		let { keyCode: t } = e, n = v === "rtl", i = d ? .5 : 1;
		p && (t === r.RIGHT && I < u && !n ? (V(I + i), e.preventDefault()) : t === r.LEFT && I > 0 && !n || t === r.RIGHT && I > 0 && n ? (V(I - i), e.preventDefault()) : t === r.LEFT && I < u && n && (V(I + i), e.preventDefault())), k?.(e);
	};
	_.useEffect(() => {
		S && !g && F();
	}, []);
	let Q = Array(u).fill(0).map((e, t) => /*#__PURE__*/ _.createElement(y, {
		ref: N(t),
		index: t,
		count: u,
		disabled: g,
		prefixCls: `${a}-star`,
		allowHalf: d,
		value: K === null ? I : K,
		onClick: X,
		onHover: J,
		key: e || t,
		character: m,
		characterRender: h,
		focused: H
	})), $ = i(a, o, {
		[`${a}-disabled`]: g,
		[`${a}-rtl`]: v === "rtl"
	});
	return /*#__PURE__*/ _.createElement("ul", w({
		className: $,
		onMouseLeave: Y,
		tabIndex: g ? -1 : x,
		onFocus: g ? null : W,
		onBlur: g ? null : G,
		onKeyDown: g ? null : Z,
		ref: P
	}, n(j, {
		aria: !0,
		data: !0,
		attr: !0
	})), Q);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+rate@1.0.1_re_67b3dda043bc45b68686eba2801e3125/node_modules/@rc-component/rate/es/index.js
var E = /* @__PURE__ */ _.forwardRef(T), D = (e) => {
	let { componentCls: t } = e;
	return { [`${t}-star`]: {
		position: "relative",
		display: "inline-block",
		color: "inherit",
		cursor: "pointer",
		"&:not(:last-child)": { marginInlineEnd: e.marginXS },
		"> div": {
			transition: `all ${e.motionDurationMid}, outline 0s`,
			"&:hover": { transform: e.starHoverScale },
			"&:focus": { outline: 0 },
			"&:focus-visible": {
				outline: `${s(e.lineWidth)} dashed ${e.starColor}`,
				transform: e.starHoverScale
			}
		},
		"&-first, &-second": {
			color: e.starBg,
			transition: `all ${e.motionDurationMid}`,
			userSelect: "none"
		},
		"&-first": {
			position: "absolute",
			top: 0,
			insetInlineStart: 0,
			width: "50%",
			height: "100%",
			overflow: "hidden",
			opacity: 0
		},
		[`&-half ${t}-star-first, &-half ${t}-star-second`]: { opacity: 1 },
		[`&-half ${t}-star-first, &-full ${t}-star-second`]: { color: "inherit" }
	} };
}, O = (e) => ({ [`&-rtl${e.componentCls}`]: { direction: "rtl" } }), k = (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		...m(e),
		display: "inline-block",
		margin: 0,
		padding: 0,
		color: e.starColor,
		fontSize: e.starSize,
		lineHeight: 1,
		listStyle: "none",
		outline: "none",
		"&-small": { fontSize: e.starSizeSM },
		"&-large": { fontSize: e.starSizeLG },
		[`&-disabled${t} ${t}-star`]: {
			cursor: "default",
			"> div:hover": { transform: "scale(1)" }
		},
		...D(e),
		...O(e)
	} };
}, A = h("Rate", (e) => k(l(e, {})), (e) => ({
	starColor: e.yellow6,
	starSize: e.controlHeight * .625,
	starSizeSM: e.controlHeightSM * .625,
	starSizeLG: e.controlHeightLG * .625,
	starHoverScale: "scale(1.1)",
	starBg: e.colorFillContent
})), j = /* @__PURE__ */ e({ default: () => M }), M = /*#__PURE__*/ _.forwardRef((e, t) => {
	let { prefixCls: n, className: r, rootClassName: o, style: s, tooltips: c, character: l = /*#__PURE__*/ _.createElement(a, null), disabled: m, size: h, ...v } = e, y = (e, { index: t }) => {
		if (!c) return e;
		let n = c[t];
		return u(n) ? /*#__PURE__*/ _.createElement(g, { ...n }, e) : /*#__PURE__*/ _.createElement(g, { title: n }, e);
	}, { getPrefixCls: b, direction: x, className: S, style: C } = d("rate"), w = b("rate", n), [T, D] = A(w), O = {
		...C,
		...s
	}, k = _.useContext(p), j = m ?? k, M = f((e) => h ?? e);
	return /*#__PURE__*/ _.createElement(E, {
		ref: t,
		character: l,
		characterRender: y,
		disabled: j,
		...v,
		className: i({
			[`${w}-large`]: M === "large",
			[`${w}-small`]: M === "small"
		}, r, o, T, D, S),
		style: O,
		prefixCls: w,
		direction: x
	});
});
//#endregion
export { j as t };
