globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { J as n, Nt as r, On as i, wn as a, yt as o } from "../shared/core.js";
import { $t as s, Jn as c, Qt as l, Sr as u, br as d, c as f, er as p, gn as m, l as h, sr as g } from "../shared/antd-core.js";
import { n as _ } from "./breadcrumb.js";
import { t as v } from "./button.js";
import { c as y } from "./color-picker.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/space/context.js
var b = /* @__PURE__ */ t(i()), x = /*#__PURE__*/ b.createContext({ latestIndex: 0 }), S = x.Provider, C = (e) => {
	let { className: t, prefix: n, index: i, children: a, separator: o, style: s, classNames: c, styles: l } = e, { latestIndex: u } = b.useContext(x);
	return p(a) ? /*#__PURE__*/ b.createElement(b.Fragment, null, /*#__PURE__*/ b.createElement("div", {
		className: t,
		style: s
	}, a), i < u && o && /*#__PURE__*/ b.createElement("span", {
		className: r(`${n}-item-separator`, c?.separator),
		style: l?.separator
	}, o)) : null;
}, w = (e) => {
	let { componentCls: t, antCls: n } = e;
	return { [t]: {
		display: "inline-flex",
		"&-rtl": { direction: "rtl" },
		"&-vertical": { flexDirection: "column" },
		"&-align": {
			flexDirection: "column",
			"&-center": { alignItems: "center" },
			"&-start": { alignItems: "flex-start" },
			"&-end": { alignItems: "flex-end" },
			"&-baseline": { alignItems: "baseline" }
		},
		[`${t}-item:empty`]: { display: "none" },
		[`${t}-item > ${n}-badge-not-a-wrapper:only-child`]: { display: "block" }
	} };
}, T = (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		"&-gap-row-small": { rowGap: e.spaceGapSmallSize },
		"&-gap-row-medium, &-gap-row-middle": { rowGap: e.spaceGapMiddleSize },
		"&-gap-row-large": { rowGap: e.spaceGapLargeSize },
		"&-gap-col-small": { columnGap: e.spaceGapSmallSize },
		"&-gap-col-medium, &-gap-col-middle": { columnGap: e.spaceGapMiddleSize },
		"&-gap-col-large": { columnGap: e.spaceGapLargeSize }
	} };
}, E = g("Space", (e) => {
	let t = o(e, {
		spaceGapSmallSize: e.paddingXS,
		spaceGapMiddleSize: e.padding,
		spaceGapLargeSize: e.paddingLG
	});
	return [w(t), T(t)];
}, () => ({}), { resetStyle: !1 }), D = /* @__PURE__ */ e({
	SpaceContext: () => x,
	default: () => O
}), O = /* @__PURE__ */ b.forwardRef((e, t) => {
	let { getPrefixCls: n, direction: i, size: o, className: s, style: l, classNames: d, styles: g } = u("space"), { size: _ = o ?? "small", align: v, className: y, rootClassName: x, children: w, direction: T, orientation: D, prefixCls: O, split: k, separator: A, style: j, vertical: M, wrap: N = !1, classNames: ee, styles: P, ...F } = e, [I, L] = Array.isArray(_) ? _ : [_, _], R = f(L), z = f(I), B = h(L), V = h(I), H = a(w, { keepEmpty: !0 }), [U, W] = m(D, M, T), G = v === void 0 && !W ? "center" : v, K = A ?? k, q = n("space", O), [J, Y] = E(q), te = {
		...e,
		size: _,
		orientation: U,
		align: G
	}, [X, Z] = c([d, ee], [g, P], { props: te }), ne = r(q, s, J, `${q}-${U}`, {
		[`${q}-rtl`]: i === "rtl",
		[`${q}-align-${G}`]: G,
		[`${q}-gap-row-${L}`]: R,
		[`${q}-gap-col-${I}`]: z
	}, y, x, Y, X.root), Q = r(`${q}-item`, X.item), re = H.map((e, t) => {
		let n = e?.key || `${Q}-${t}`;
		return /*#__PURE__*/ b.createElement(C, {
			prefix: q,
			classNames: X,
			styles: Z,
			className: Q,
			key: n,
			index: t,
			separator: K,
			style: Z.item
		}, e);
	}), ie = b.useMemo(() => ({ latestIndex: H.reduce((e, t, n) => p(t) ? n : e, 0) }), [H]);
	if (H.length === 0) return null;
	let $ = {};
	return N && ($.flexWrap = "wrap"), !z && V && ($.columnGap = I), !R && B && ($.rowGap = L), /*#__PURE__*/ b.createElement("div", {
		ref: t,
		className: ne,
		style: {
			...$,
			...Z.root,
			...l,
			...j
		},
		...F
	}, /*#__PURE__*/ b.createElement(S, { value: ie }, re));
});
O.Compact = l, O.Addon = y;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/dropdown/dropdown-button.js
var k = (e) => {
	let { getPopupContainer: t, getPrefixCls: i, direction: a } = b.useContext(d), { prefixCls: o, type: c = "default", danger: l, disabled: u, loading: f, onClick: p, htmlType: m, children: h, className: g, menu: y, arrow: x, autoFocus: S, trigger: C, align: w, open: T, onOpenChange: E, placement: D, getPopupContainer: k, href: A, icon: j = /*#__PURE__*/ b.createElement(n, null), title: M, buttonsRender: N = (e) => e, mouseEnterDelay: ee, mouseLeaveDelay: P, overlayClassName: F, overlayStyle: I, destroyOnHidden: L, destroyPopupOnHide: R, dropdownRender: z, popupRender: B, ...V } = e, H = i("dropdown", o), U = `${H}-button`, W = {
		menu: y,
		arrow: x,
		autoFocus: S,
		align: w,
		disabled: u,
		trigger: u ? [] : C,
		onOpenChange: E,
		getPopupContainer: k || t,
		mouseEnterDelay: ee,
		mouseLeaveDelay: P,
		classNames: { root: F },
		styles: { root: I },
		destroyOnHidden: L,
		popupRender: B || z
	}, { compactSize: G, compactItemClassnames: K } = s(H, a), q = r(U, K, g);
	"destroyPopupOnHide" in e && (W.destroyPopupOnHide = R), "open" in e && (W.open = T), "placement" in e ? W.placement = D : W.placement = a === "rtl" ? "bottomLeft" : "bottomRight";
	let [J, Y] = N([/* @__PURE__ */ b.createElement(v, {
		type: c,
		danger: l,
		disabled: u,
		loading: f,
		onClick: p,
		htmlType: m,
		href: A,
		title: M
	}, h), /* @__PURE__ */ b.createElement(v, {
		type: c,
		danger: l,
		icon: j
	})]);
	return /*#__PURE__*/ b.createElement(O.Compact, {
		className: q,
		size: G,
		block: !0,
		...V
	}, J, /*#__PURE__*/ b.createElement(_, { ...W }, Y));
};
k.__ANT_BUTTON = !0;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/dropdown/index.js
var A = /* @__PURE__ */ e({ default: () => j }), j = _;
j.Button = k;
//#endregion
export { D as i, A as n, O as r, j as t };
