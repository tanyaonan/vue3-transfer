globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $t as n, At as r, Bt as i, Cn as a, Dt as o, Et as s, Ft as c, Gt as l, Ht as u, It as d, Jt as f, Lt as p, Mt as m, Nt as h, On as g, Ot as _, Pt as v, Rt as y, St as b, Tt as x, Ut as S, Xt as C, _n as w, _t as T, bn as E, cn as D, ct as O, dn as k, dt as A, en as j, fn as M, gn as N, gt as P, hn as F, ht as I, in as ee, jt as te, kn as ne, kt as L, ln as re, lt as R, mt as ie, nn as z, nt as ae, on as oe, ot as se, pn as ce, qt as le, rn as B, rt as V, sn as H, st as ue, tn as de, tt as U, ut as fe, vn as pe, vt as me, wn as W, xn as he, xt as ge, yn as _e, yt as ve, zt as G } from "./core.js";
//#region node_modules/.pnpm/@rc-component+resize-observ_bb3affc154b7e00871829432c356cea3/node_modules/@rc-component/resize-observer/es/Collection.js
var K = /* @__PURE__ */ t(g()), q = /* @__PURE__ */ t(ne()), ye = /*#__PURE__*/ q.createContext(null);
function J({ children: e, onBatchResize: t }) {
	let n = q.useRef(0), r = q.useRef([]), i = q.useContext(ye), a = q.useCallback((e, a, o) => {
		n.current += 1;
		let s = n.current;
		r.current.push({
			size: e,
			element: a,
			data: o
		}), Promise.resolve().then(() => {
			s === n.current && (t?.(r.current), r.current = []);
		}), i?.(e, a, o);
	}, [t, i]);
	return /*#__PURE__*/ q.createElement(ye.Provider, { value: a }, e);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+resize-observ_bb3affc154b7e00871829432c356cea3/node_modules/@rc-component/resize-observer/es/utils/observerUtil.js
var be = /* @__PURE__ */ new Map();
function xe(e) {
	e.forEach((e) => {
		let { target: t } = e;
		be.get(t)?.forEach((e) => e(t));
	});
}
var Se;
function Ce() {
	return Se ||= new ResizeObserver(xe), Se;
}
function we(e, t) {
	be.has(e) || (be.set(e, /* @__PURE__ */ new Set()), Ce().observe(e)), be.get(e).add(t);
}
function Te(e, t) {
	be.has(e) && (be.get(e).delete(t), be.get(e).size || (Ce().unobserve(e), be.delete(e)));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+resize-observ_bb3affc154b7e00871829432c356cea3/node_modules/@rc-component/resize-observer/es/useResizeObserver.js
function Ee(e, t, n, r) {
	let i = q.useRef({
		width: -1,
		height: -1,
		offsetWidth: -1,
		offsetHeight: -1
	}), a = M((e) => {
		let { width: t, height: a } = e.getBoundingClientRect(), { offsetWidth: o, offsetHeight: s } = e, c = Math.floor(t), l = Math.floor(a);
		if (i.current.width !== c || i.current.height !== l || i.current.offsetWidth !== o || i.current.offsetHeight !== s) {
			let u = {
				width: c,
				height: l,
				offsetWidth: o,
				offsetHeight: s
			};
			i.current = u;
			let d = o === Math.round(t) ? t : o, f = s === Math.round(a) ? a : s, p = {
				...u,
				offsetWidth: d,
				offsetHeight: f
			};
			r?.(p, e), Promise.resolve().then(() => {
				n?.(p, e);
			});
		}
	}), o = typeof t == "function", s = q.useRef(0);
	q.useEffect(() => {
		let n = o ? t() : t;
		return n && e ? we(n, a) : e && o && (s.current += 1), () => {
			n && Te(n, a);
		};
	}, [e, o ? s.current : t]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+resize-observ_bb3affc154b7e00871829432c356cea3/node_modules/@rc-component/resize-observer/es/SingleObserver/index.js
function De(e, t) {
	let { children: n, disabled: r, onResize: i, data: a } = e, o = q.useRef(null), s = q.useContext(ye), c = typeof n == "function", l = c ? n(o) : n, u = !c && /*#__PURE__*/ q.isValidElement(l) && w(l), d = pe(u ? F(l) : null, o), f = () => E(o.current);
	return q.useImperativeHandle(t, () => f()), Ee(!r, f, i, (e, t) => {
		s?.(e, t, a);
	}), u ? /*#__PURE__*/ q.cloneElement(l, { ref: d }) : l;
}
var Oe = /*#__PURE__*/ q.forwardRef(De);
//#endregion
//#region node_modules/.pnpm/@rc-component+resize-observ_bb3affc154b7e00871829432c356cea3/node_modules/@rc-component/resize-observer/es/index.js
function Y() {
	return Y = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Y.apply(this, arguments);
}
var ke = "rc-observer-key";
function Ae(e, t) {
	let { children: n } = e;
	return (typeof n == "function" ? [n] : W(n)).map((n, r) => {
		let i = n?.key || `${ke}-${r}`;
		return /*#__PURE__*/ q.createElement(Oe, Y({}, e, {
			key: i,
			ref: r === 0 ? t : void 0
		}), n);
	});
}
var je = /*#__PURE__*/ q.forwardRef(Ae);
je.Collection = J;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/throttleByAnimationFrame.js
function Me(e) {
	let t = null, n = (n) => () => {
		t = null, e.apply(void 0, m(n));
	}, r = (...e) => {
		t === null && (t = i(n(e)));
	};
	return r.cancel = () => {
		i.cancel(t), t = null;
	}, r;
}
var Ne = "anticon", Pe = [
	"outlined",
	"borderless",
	"filled",
	"underlined"
], X = /*#__PURE__*/ q.createContext({
	getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
	iconPrefixCls: Ne
}), { Consumer: Fe } = X, Ie = {};
function Le(e) {
	let t = q.useContext(X), { getPrefixCls: n, direction: r, getPopupContainer: i, renderEmpty: a } = t;
	return {
		classNames: Ie,
		styles: Ie,
		...t[e],
		getPrefixCls: n,
		direction: r,
		getPopupContainer: i,
		renderEmpty: a
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/interface/presetColors.js
var Re = [
	"blue",
	"purple",
	"cyan",
	"green",
	"magenta",
	"pink",
	"red",
	"orange",
	"yellow",
	"volcano",
	"geekblue",
	"lime",
	"gold"
];
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/shared/genFontSizes.js
function ze(e) {
	return (e + 8) / e;
}
function Be(e) {
	let t = Array.from({ length: 10 }).map((t, n) => {
		let r = n - 1, i = e * Math.E ** (r / 5);
		return Math.floor((n > 1 ? Math.floor(i) : Math.ceil(i)) / 2) * 2;
	});
	return t[1] = e, t.map((e) => ({
		size: e,
		lineHeight: ze(e)
	}));
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/version/version.js
var Ve = "6.4.4", He = /* @__PURE__ */ e({ default: () => Ue }), Ue = Ve, We = {
	blue: "#1677FF",
	purple: "#722ED1",
	cyan: "#13C2C2",
	green: "#52C41A",
	magenta: "#EB2F96",
	pink: "#EB2F96",
	red: "#F5222D",
	orange: "#FA8C16",
	yellow: "#FADB14",
	volcano: "#FA541C",
	geekblue: "#2F54EB",
	gold: "#FAAD14",
	lime: "#A0D911"
}, Ge = {
	...We,
	colorPrimary: "#1677ff",
	colorSuccess: "#52c41a",
	colorWarning: "#faad14",
	colorError: "#ff4d4f",
	colorInfo: "#1677ff",
	colorLink: "",
	colorTextBase: "",
	colorBgBase: "",
	fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
	fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
	fontSize: 14,
	lineWidth: 1,
	lineType: "solid",
	motionUnit: .1,
	motionBase: 0,
	motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
	motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
	motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
	motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
	motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
	motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
	motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
	motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
	borderRadius: 6,
	sizeUnit: 4,
	sizeStep: 4,
	sizePopupArrow: 16,
	controlHeight: 32,
	zIndexBase: 0,
	zIndexPopupBase: 1e3,
	opacityImage: 1,
	wireframe: !1,
	motion: !0
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/shared/genColorMapToken.js
function Ke(e, { generateColorPalettes: t, generateNeutralColorPalettes: n }) {
	let { colorSuccess: r, colorWarning: i, colorError: a, colorInfo: o, colorPrimary: s, colorBgBase: c, colorTextBase: l } = e, u = t(s), d = t(r), f = t(i), p = t(a), m = t(o), h = n(c, l), g = t(e.colorLink || e.colorInfo), _ = new T(p[1]).mix(new T(p[3]), 50).toHexString(), v = {};
	return Re.forEach((n) => {
		let r = e[n];
		if (r) {
			let e = t(r);
			v[`${n}Hover`] = e[5], v[`${n}Active`] = e[7];
		}
	}), {
		...h,
		colorPrimaryBg: u[1],
		colorPrimaryBgHover: u[2],
		colorPrimaryBorder: u[3],
		colorPrimaryBorderHover: u[4],
		colorPrimaryHover: u[5],
		colorPrimary: u[6],
		colorPrimaryActive: u[7],
		colorPrimaryTextHover: u[8],
		colorPrimaryText: u[9],
		colorPrimaryTextActive: u[10],
		colorSuccessBg: d[1],
		colorSuccessBgHover: d[2],
		colorSuccessBorder: d[3],
		colorSuccessBorderHover: d[4],
		colorSuccessHover: d[4],
		colorSuccess: d[6],
		colorSuccessActive: d[7],
		colorSuccessTextHover: d[8],
		colorSuccessText: d[9],
		colorSuccessTextActive: d[10],
		colorErrorBg: p[1],
		colorErrorBgHover: p[2],
		colorErrorBgFilledHover: _,
		colorErrorBgActive: p[3],
		colorErrorBorder: p[3],
		colorErrorBorderHover: p[4],
		colorErrorHover: p[5],
		colorError: p[6],
		colorErrorActive: p[7],
		colorErrorTextHover: p[8],
		colorErrorText: p[9],
		colorErrorTextActive: p[10],
		colorWarningBg: f[1],
		colorWarningBgHover: f[2],
		colorWarningBorder: f[3],
		colorWarningBorderHover: f[4],
		colorWarningHover: f[4],
		colorWarning: f[6],
		colorWarningActive: f[7],
		colorWarningTextHover: f[8],
		colorWarningText: f[9],
		colorWarningTextActive: f[10],
		colorInfoBg: m[1],
		colorInfoBgHover: m[2],
		colorInfoBorder: m[3],
		colorInfoBorderHover: m[4],
		colorInfoHover: m[4],
		colorInfo: m[6],
		colorInfoActive: m[7],
		colorInfoTextHover: m[8],
		colorInfoText: m[9],
		colorInfoTextActive: m[10],
		colorLinkHover: g[4],
		colorLink: g[6],
		colorLinkActive: g[7],
		...v,
		colorBgMask: new T("#000").setA(.45).toRgbString(),
		colorWhite: "#fff"
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/shared/genRadius.js
var qe = (e) => {
	let t = e, n = e, r = e, i = e;
	return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? i = 4 : e >= 8 && (i = 6), {
		borderRadius: e,
		borderRadiusXS: r,
		borderRadiusSM: n,
		borderRadiusLG: t,
		borderRadiusOuter: i
	};
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js
function Je(e) {
	let { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e;
	return {
		motionDurationFast: `${(n + t).toFixed(1)}s`,
		motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
		motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
		lineWidthBold: i + 1,
		...qe(r)
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/shared/genControlHeight.js
var Ye = (e) => {
	let { controlHeight: t } = e;
	return {
		controlHeightSM: t * .75,
		controlHeightXS: t * .5,
		controlHeightLG: t * 1.25
	};
}, Xe = (e) => {
	let t = Be(e), n = t.map((e) => e.size), r = t.map((e) => e.lineHeight), i = n[1], a = n[0], o = n[2], s = r[1], c = r[0], l = r[2];
	return {
		fontSizeSM: a,
		fontSize: i,
		fontSizeLG: o,
		fontSizeXL: n[3],
		fontSizeHeading1: n[6],
		fontSizeHeading2: n[5],
		fontSizeHeading3: n[4],
		fontSizeHeading4: n[3],
		fontSizeHeading5: n[2],
		lineHeight: s,
		lineHeightLG: l,
		lineHeightSM: c,
		fontHeight: Math.round(s * i),
		fontHeightLG: Math.round(l * o),
		fontHeightSM: Math.round(c * a),
		lineHeightHeading1: r[6],
		lineHeightHeading2: r[5],
		lineHeightHeading3: r[4],
		lineHeightHeading4: r[3],
		lineHeightHeading5: r[2]
	};
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js
function Ze(e) {
	let { sizeUnit: t, sizeStep: n } = e;
	return {
		sizeXXL: t * (n + 8),
		sizeXL: t * (n + 4),
		sizeLG: t * (n + 2),
		sizeMD: t * (n + 1),
		sizeMS: t * n,
		size: t * n,
		sizeSM: t * (n - 1),
		sizeXS: t * (n - 2),
		sizeXXS: t * (n - 3)
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/default/colorAlgorithm.js
var Qe = (e, t) => new T(e).setA(t).toRgbString(), $e = (e, t) => new T(e).darken(t).toHexString(), et = (e) => {
	let t = P(e);
	return {
		1: t[0],
		2: t[1],
		3: t[2],
		4: t[3],
		5: t[4],
		6: t[5],
		7: t[6],
		8: t[4],
		9: t[5],
		10: t[6]
	};
}, tt = (e, t, n) => {
	let r = e || "#fff", i = t || "#000";
	return {
		colorBgBase: r,
		colorTextBase: i,
		colorShadow: n || "#000",
		colorText: Qe(i, .88),
		colorTextSecondary: Qe(i, .65),
		colorTextTertiary: Qe(i, .45),
		colorTextQuaternary: Qe(i, .25),
		colorFill: Qe(i, .15),
		colorFillSecondary: Qe(i, .06),
		colorFillTertiary: Qe(i, .04),
		colorFillQuaternary: Qe(i, .02),
		colorBgSolid: Qe(i, 1),
		colorBgSolidHover: Qe(i, .75),
		colorBgSolidActive: Qe(i, .95),
		colorBgLayout: $e(r, 4),
		colorBgContainer: $e(r, 0),
		colorBgElevated: $e(r, 0),
		colorBgSpotlight: Qe(i, .85),
		colorBgBlur: "transparent",
		colorBorder: $e(r, 15),
		colorBorderDisabled: $e(r, 15),
		colorBorderSecondary: $e(r, 6)
	};
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/default/index.js
function nt(e) {
	I.pink = I.magenta, ie.pink = ie.magenta;
	let t = Object.keys(We).map((t) => {
		let n = e[t] === I[t] ? ie[t] : P(e[t]);
		return Array.from({ length: 10 }, () => 1).reduce((e, r, i) => (e[`${t}-${i + 1}`] = n[i], e[`${t}${i + 1}`] = n[i], e), {});
	}).reduce((e, t) => (e = {
		...e,
		...t
	}, e), {});
	return {
		...e,
		...t,
		...Ke(e, {
			generateColorPalettes: et,
			generateNeutralColorPalettes: tt
		}),
		...Xe(e.fontSize),
		...Ze(e),
		...Ye(e),
		...Je(e)
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/default/theme.js
var rt = r(nt), it = {
	token: Ge,
	override: { override: Ge },
	hashed: !0
}, at = /*#__PURE__*/ q.createContext(it);
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/util/getAlphaColor.js
function ot(e) {
	return e >= 0 && e <= 255;
}
function Z(e, t) {
	let { r: n, g: r, b: i, a } = new T(e).toRgb();
	if (a < 1) return e;
	let { r: o, g: s, b: c } = new T(t).toRgb();
	for (let e = .01; e <= 1; e += .01) {
		let t = Math.round((n - o * (1 - e)) / e), a = Math.round((r - s * (1 - e)) / e), l = Math.round((i - c * (1 - e)) / e);
		if (ot(t) && ot(a) && ot(l)) return new T({
			r: t,
			g: a,
			b: l,
			a: Math.round(e * 100) / 100
		}).toRgbString();
	}
	/* istanbul ignore next */
	return new T({
		r: n,
		g: r,
		b: i,
		a: 1
	}).toRgbString();
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/util/alias.js
function st(e) {
	let { override: t, ...n } = e, r = { ...t };
	Object.keys(Ge).forEach((e) => {
		delete r[e];
	});
	let i = {
		...n,
		...r
	}, a = new T(i.colorShadow), o = a.a, s = (e) => a.clone().setA(o * e).toRgbString(), c = 1200, l = 1600, u = 1920;
	return i.motion === !1 && (i.motionDurationFast = "0s", i.motionDurationMid = "0s", i.motionDurationSlow = "0s"), {
		...i,
		colorFillContent: i.colorFillSecondary,
		colorFillContentHover: i.colorFill,
		colorFillAlter: i.colorFillQuaternary,
		colorBgContainerDisabled: i.colorFillTertiary,
		colorBorderBg: i.colorBgContainer,
		colorSplit: Z(i.colorBorderSecondary, i.colorBgContainer),
		colorTextPlaceholder: i.colorTextQuaternary,
		colorTextDisabled: i.colorTextQuaternary,
		colorTextHeading: i.colorText,
		colorTextLabel: i.colorTextSecondary,
		colorTextDescription: i.colorTextTertiary,
		colorTextLightSolid: i.colorWhite,
		colorHighlight: i.colorError,
		colorBgTextHover: i.colorFillSecondary,
		colorBgTextActive: i.colorFill,
		colorIcon: i.colorTextTertiary,
		colorIconHover: i.colorText,
		colorErrorOutline: Z(i.colorErrorBg, i.colorBgContainer),
		colorWarningOutline: Z(i.colorWarningBg, i.colorBgContainer),
		colorErrorAffix: i.colorError,
		colorWarningAffix: i.colorWarning,
		fontSizeIcon: i.fontSizeSM,
		lineWidthFocus: i.lineWidth * 3,
		lineWidth: i.lineWidth,
		controlOutlineWidth: i.lineWidth * 2,
		controlInteractiveSize: i.controlHeight / 2,
		controlItemBgHover: i.colorFillTertiary,
		controlItemBgActive: i.colorPrimaryBg,
		controlItemBgActiveHover: i.colorPrimaryBgHover,
		controlItemBgActiveDisabled: i.colorFill,
		controlTmpOutline: i.colorFillQuaternary,
		controlOutline: Z(i.colorPrimaryBg, i.colorBgContainer),
		lineType: i.lineType,
		borderRadius: i.borderRadius,
		borderRadiusXS: i.borderRadiusXS,
		borderRadiusSM: i.borderRadiusSM,
		borderRadiusLG: i.borderRadiusLG,
		fontWeightStrong: 600,
		opacityLoading: .65,
		linkDecoration: "none",
		linkHoverDecoration: "none",
		linkFocusDecoration: "none",
		controlPaddingHorizontal: 12,
		controlPaddingHorizontalSM: 8,
		paddingXXS: i.sizeXXS,
		paddingXS: i.sizeXS,
		paddingSM: i.sizeSM,
		padding: i.size,
		paddingMD: i.sizeMD,
		paddingLG: i.sizeLG,
		paddingXL: i.sizeXL,
		paddingContentHorizontalLG: i.sizeLG,
		paddingContentVerticalLG: i.sizeMS,
		paddingContentHorizontal: i.sizeMS,
		paddingContentVertical: i.sizeSM,
		paddingContentHorizontalSM: i.size,
		paddingContentVerticalSM: i.sizeXS,
		marginXXS: i.sizeXXS,
		marginXS: i.sizeXS,
		marginSM: i.sizeSM,
		margin: i.size,
		marginMD: i.sizeMD,
		marginLG: i.sizeLG,
		marginXL: i.sizeXL,
		marginXXL: i.sizeXXL,
		boxShadow: `
      0 6px 16px 0 ${s(.08)},
      0 3px 6px -4px ${s(.12)},
      0 9px 28px 8px ${s(.05)}
    `,
		boxShadowSecondary: `
      0 6px 16px 0 ${s(.08)},
      0 3px 6px -4px ${s(.12)},
      0 9px 28px 8px ${s(.05)}
    `,
		boxShadowTertiary: `
      0 1px 2px 0 ${s(.05)},
      0 1px 6px -1px ${s(.03)},
      0 2px 4px 0 ${s(.03)}
    `,
		screenXS: 480,
		screenXSMin: 480,
		screenXSMax: 575,
		screenSM: 576,
		screenSMMin: 576,
		screenSMMax: 767,
		screenMD: 768,
		screenMDMin: 768,
		screenMDMax: 991,
		screenLG: 992,
		screenLGMin: 992,
		screenLGMax: c - 1,
		screenXL: c,
		screenXLMin: c,
		screenXLMax: l - 1,
		screenXXL: l,
		screenXXLMin: l,
		screenXXLMax: u - 1,
		screenXXXL: u,
		screenXXXLMin: u,
		boxShadowPopoverArrow: `2px 2px 5px ${s(.05)}`,
		dropShadowPopover: `drop-shadow(0 6px 16px ${s(.08)}) drop-shadow(0 3px 6px ${s(.12)}) drop-shadow(0 9px 28px ${s(.05)})`,
		boxShadowCard: `
      0 1px 2px -2px ${s(.16)},
      0 3px 6px 0 ${s(.12)},
      0 5px 12px 4px ${s(.09)}
    `,
		boxShadowDrawerRight: `
      -6px 0 16px 0 ${s(.08)},
      -3px 0 6px -4px ${s(.12)},
      -9px 0 28px 8px ${s(.05)}
    `,
		boxShadowDrawerLeft: `
      6px 0 16px 0 ${s(.08)},
      3px 0 6px -4px ${s(.12)},
      9px 0 28px 8px ${s(.05)}
    `,
		boxShadowDrawerUp: `
      0 6px 16px 0 ${s(.08)},
      0 3px 6px -4px ${s(.12)},
      0 9px 28px 8px ${s(.05)}
    `,
		boxShadowDrawerDown: `
      0 -6px 16px 0 ${s(.08)},
      0 -3px 6px -4px ${s(.12)},
      0 -9px 28px 8px ${s(.05)}
    `,
		boxShadowTabsOverflowLeft: `inset 10px 0 8px -8px ${s(.08)}`,
		boxShadowTabsOverflowRight: `inset -10px 0 8px -8px ${s(.08)}`,
		boxShadowTabsOverflowTop: `inset 0 10px 8px -8px ${s(.08)}`,
		boxShadowTabsOverflowBottom: `inset 0 -10px 8px -8px ${s(.08)}`,
		...r
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/useToken.js
var ct = {
	lineHeight: !0,
	lineHeightSM: !0,
	lineHeightLG: !0,
	lineHeightHeading1: !0,
	lineHeightHeading2: !0,
	lineHeightHeading3: !0,
	lineHeightHeading4: !0,
	lineHeightHeading5: !0,
	opacityLoading: !0,
	fontWeightStrong: !0,
	zIndexPopupBase: !0,
	zIndexBase: !0,
	opacityImage: !0
}, lt = {
	motionBase: !0,
	motionUnit: !0
}, ut = {
	screenXS: !0,
	screenXSMin: !0,
	screenXSMax: !0,
	screenSM: !0,
	screenSMMin: !0,
	screenSMMax: !0,
	screenMD: !0,
	screenMDMin: !0,
	screenMDMax: !0,
	screenLG: !0,
	screenLGMin: !0,
	screenLGMax: !0,
	screenXL: !0,
	screenXLMin: !0,
	screenXLMax: !0,
	screenXXL: !0,
	screenXXLMin: !0,
	screenXXLMax: !0,
	screenXXXL: !0,
	screenXXXLMin: !0
}, dt = (e, t, n) => {
	let r = n.getDerivativeToken(e), { override: i, ...a } = t, o = {
		...r,
		override: i
	};
	return o = st(o), a && Object.entries(a).forEach(([e, t]) => {
		let { theme: n, ...r } = t, i = r;
		n && (i = dt({
			...o,
			...r
		}, { override: r }, n)), o[e] = i;
	}), o;
};
function ft() {
	let { token: e, hashed: t, theme: n, override: r, cssVar: i, zeroRuntime: a } = q.useContext(at), { csp: o, getPrefixCls: s } = q.useContext(X), c = {
		prefix: i?.prefix ?? s(),
		key: i?.key ?? "css-var-root"
	}, l = `${Ue}-${t || ""}`, u = n || rt, [d, f, p] = _(u, [Ge, e], {
		salt: l,
		override: r,
		getComputedToken: dt,
		cssVar: {
			...c,
			unitless: ct,
			ignore: lt,
			preserve: ut
		},
		nonce: o?.nonce
	});
	return [
		u,
		p,
		t ? f : "",
		d,
		c,
		!!a
	];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/style/index.js
var pt = /* @__PURE__ */ e({
	clearFix: () => vt,
	genCommonStyle: () => St,
	genFocusOutline: () => yt,
	genFocusStyle: () => bt,
	genIconStyle: () => Ct,
	genLinkStyle: () => xt,
	operationUnit: () => wt,
	resetComponent: () => ht,
	resetIcon: () => gt,
	textEllipsis: () => mt
}), mt = {
	overflow: "hidden",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis"
}, ht = (e, t = !1) => ({
	boxSizing: "border-box",
	margin: 0,
	padding: 0,
	color: e.colorText,
	fontSize: e.fontSize,
	lineHeight: e.lineHeight,
	listStyle: "none",
	fontFamily: t ? "inherit" : e.fontFamily
}), gt = () => ({
	display: "inline-flex",
	alignItems: "center",
	color: "inherit",
	fontStyle: "normal",
	lineHeight: 0,
	textAlign: "center",
	textTransform: "none",
	verticalAlign: "-0.125em",
	textRendering: "optimizeLegibility",
	"-webkit-font-smoothing": "antialiased",
	"-moz-osx-font-smoothing": "grayscale",
	"> *": { lineHeight: 1 },
	svg: { display: "inline-block" }
}), _t = new x("loadingCircle", { "100%": { transform: "rotate(360deg)" } }), vt = () => ({
	"&::before": {
		display: "table",
		content: "\"\""
	},
	"&::after": {
		display: "table",
		clear: "both",
		content: "\"\""
	}
}), yt = (e, t) => ({
	outline: `${L(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
	outlineOffset: t ?? 1,
	transition: ["outline-offset", "outline"].map((e) => `${e} 0s`).join(", ")
}), bt = (e, t) => ({ "&:focus-visible": yt(e, t) }), xt = (e) => ({ a: {
	color: e.colorLink,
	textDecoration: e.linkDecoration,
	backgroundColor: "transparent",
	outline: "none",
	cursor: "pointer",
	transition: `color ${e.motionDurationSlow}`,
	"-webkit-text-decoration-skip": "objects",
	"&:hover": { color: e.colorLinkHover },
	"&:active": { color: e.colorLinkActive },
	"&:active, &:hover": {
		textDecoration: e.linkHoverDecoration,
		outline: 0
	},
	"&:focus": {
		textDecoration: e.linkFocusDecoration,
		outline: 0
	},
	...bt(e),
	"&[disabled]": {
		color: e.colorTextDisabled,
		cursor: "not-allowed"
	}
} }), St = (e, t, n, r) => {
	let i = `[class^="${t}"], [class*=" ${t}"]`, a = n ? `.${n}` : i, o = {
		boxSizing: "border-box",
		"&::before, &::after": { boxSizing: "border-box" }
	}, s = {};
	return r !== !1 && (s = {
		fontFamily: e.fontFamily,
		fontSize: e.fontSize
	}), { [a]: {
		...s,
		...o,
		[i]: o
	} };
}, Ct = (e) => ({
	[`.${e}`]: {
		...gt(),
		[`.${e} .${e}-icon`]: { display: "block" }
	},
	[`.${e}-spin`]: {
		animationName: _t,
		animationDuration: "1s",
		animationIterationCount: "infinite",
		animationTimingFunction: "linear"
	}
}), wt = (e) => ({
	color: e.colorLink,
	textDecoration: e.linkDecoration,
	outline: "none",
	cursor: "pointer",
	transition: `all ${e.motionDurationSlow}`,
	border: 0,
	padding: 0,
	background: "none",
	userSelect: "none",
	...bt(e),
	"&:hover": {
		color: e.colorLinkHover,
		textDecoration: e.linkHoverDecoration
	},
	"&:focus": {
		color: e.colorLinkHover,
		textDecoration: e.linkFocusDecoration
	},
	"&:active": {
		color: e.colorLinkActive,
		textDecoration: e.linkHoverDecoration
	}
}), { genStyleHooks: Tt, genComponentStyleHook: Et, genSubStyleComponent: Dt } = me({
	usePrefix: () => {
		let { getPrefixCls: e, iconPrefixCls: t } = (0, q.useContext)(X);
		return {
			rootPrefixCls: e(),
			iconPrefixCls: t
		};
	},
	useToken: () => {
		let [e, t, n, r, i, a] = ft();
		return {
			theme: e,
			realToken: t,
			hashId: n,
			token: r,
			cssVar: i,
			zeroRuntime: a
		};
	},
	useCSP: () => {
		let { csp: e } = (0, q.useContext)(X);
		return e ?? {};
	},
	getResetStyles: (e, t) => {
		let n = xt(e);
		return [
			n,
			{ "&": n },
			Ct(t?.prefix.iconPrefixCls ?? "anticon")
		];
	},
	getCommonStyle: St,
	getCompUnitless: () => ct
}), Ot = (e, t) => {
	let n = `--${e.replace(/\./g, "")}-${t}-`;
	return [(e) => `${n}${e}`, (e, t) => t ? `var(${n}${e}, ${t})` : `var(${n}${e})`];
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/util/genPresetColor.js
function kt(e, t) {
	return Re.reduce((n, r) => {
		let i = e[`${r}1`], a = e[`${r}3`], o = e[`${r}6`], s = e[`${r}7`];
		return {
			...n,
			...t(r, {
				lightColor: i,
				lightBorderColor: a,
				darkColor: o,
				textColor: s
			})
		};
	}, {});
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/util/useResetIconStyle.js
var At = (e, t) => {
	let [n, r] = ft();
	return s({
		theme: n,
		token: r,
		hashId: "",
		path: ["ant-design-icons", e],
		nonce: () => t?.nonce,
		layer: { name: "antd" }
	}, () => Ct(e));
}, jt = /*#__PURE__*/ q.createContext({}), Mt = (e) => {
	let { children: t, ...n } = e, r = q.useMemo(() => ({ motion: n.motion }), [n.motion]);
	return /*#__PURE__*/ q.createElement(jt.Provider, { value: r }, t);
}, Nt = "none", Pt = "appear", Ft = "enter", It = "leave", Lt = "none", Rt = "prepare", zt = "start", Bt = "active", Vt = "prepared";
//#endregion
//#region node_modules/.pnpm/@rc-component+motion@1.3.3__5cb28bd61bb270bbfeae2def527d6530/node_modules/@rc-component/motion/es/util/motion.js
function Ht(e, t) {
	let n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit${e}`] = `webkit${t}`, n[`Moz${e}`] = `moz${t}`, n[`ms${e}`] = `MS${t}`, n[`O${e}`] = `o${t.toLowerCase()}`, n;
}
function Ut(e, t) {
	let n = {
		animationend: Ht("Animation", "AnimationEnd"),
		transitionend: Ht("Transition", "TransitionEnd")
	};
	return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Wt = Ut(k(), typeof window < "u" ? window : {}), Gt = {};
k() && ({style: Gt} = document.createElement("div"));
var Kt = {};
function qt(e) {
	if (Kt[e]) return Kt[e];
	let t = Wt[e];
	if (t) {
		let n = Object.keys(t), r = n.length;
		for (let i = 0; i < r; i += 1) {
			let r = n[i];
			if (Object.prototype.hasOwnProperty.call(t, r) && r in Gt) return Kt[e] = t[r], Kt[e];
		}
	}
	return "";
}
var Jt = qt("animationend"), Yt = qt("transitionend"), Xt = !!(Jt && Yt), Zt = Jt || "animationend", Qt = Yt || "transitionend";
function $t(e, t) {
	return e ? typeof e == "object" ? e[t.replace(/-\w/g, (e) => e[1].toUpperCase())] : `${e}-${t}` : null;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+motion@1.3.3__5cb28bd61bb270bbfeae2def527d6530/node_modules/@rc-component/motion/es/hooks/useDomMotionEvents.js
var en = ((e) => {
	let t = (0, q.useRef)();
	function n(t) {
		t && (t.removeEventListener(Qt, e), t.removeEventListener(Zt, e));
	}
	function r(r) {
		t.current && t.current !== r && n(t.current), r && r !== t.current && (r.addEventListener(Qt, e), r.addEventListener(Zt, e), t.current = r);
	}
	return q.useEffect(() => () => {
		n(t.current), t.current = null;
	}, []), [r, n];
}), tn = k() ? q.useLayoutEffect : q.useEffect, nn = (() => {
	let e = q.useRef(null);
	function t() {
		i.cancel(e.current);
	}
	function n(r, a = 2) {
		t();
		let o = i(() => {
			a <= 1 ? r({ isCanceled: () => o !== e.current }) : n(r, a - 1);
		});
		e.current = o;
	}
	return q.useEffect(() => () => {
		t();
	}, []), [n, t];
}), rn = [
	Rt,
	zt,
	Bt,
	"end"
], an = [Rt, Vt];
function on(e) {
	return e === "active" || e === "end";
}
var sn = ((e, t, n) => {
	let [r, i] = D(Lt), [a, o] = nn();
	function s() {
		i(Rt, !0);
	}
	let c = t ? an : rn;
	return tn(() => {
		if (r !== "none" && r !== "end") {
			let e = c[c.indexOf(r) + 1], t = n(r);
			t === !1 ? i(e, !0) : e && a((n) => {
				function r() {
					n.isCanceled() || i(e, !0);
				}
				t === !0 ? r() : Promise.resolve(t).then(r);
			});
		}
	}, [e, r]), q.useEffect(() => () => {
		o();
	}, []), [s, r];
});
//#endregion
//#region node_modules/.pnpm/@rc-component+motion@1.3.3__5cb28bd61bb270bbfeae2def527d6530/node_modules/@rc-component/motion/es/hooks/useStatus.js
function cn(e, t, n, { motionEnter: r = !0, motionAppear: i = !0, motionLeave: a = !0, motionDeadline: o, motionLeaveImmediately: s, onAppearPrepare: c, onEnterPrepare: l, onLeavePrepare: u, onAppearStart: d, onEnterStart: f, onLeaveStart: p, onAppearActive: m, onEnterActive: h, onLeaveActive: g, onAppearEnd: _, onEnterEnd: v, onLeaveEnd: y, onVisibleChanged: b }) {
	let [x, S] = q.useState(), [C, w] = ee(Nt), [T, E] = q.useState([null, null]), D = C(), O = (0, q.useRef)(!1), k = (0, q.useRef)(null);
	function A() {
		return n();
	}
	let j = (0, q.useRef)(!1);
	function N() {
		w(Nt), E([null, null]);
	}
	let P = M((e) => {
		let t = C();
		if (t === "none") return;
		let n = A();
		if (e && !e.deadline && e.target !== n) return;
		let r = j.current, i;
		t === "appear" && r ? i = _?.(n, e) : t === "enter" && r ? i = v?.(n, e) : t === "leave" && r && (i = y?.(n, e)), r && i !== !1 && N();
	}), [F] = en(P), I = (e) => {
		switch (e) {
			case Pt: return {
				[Rt]: c,
				[zt]: d,
				[Bt]: m
			};
			case Ft: return {
				[Rt]: l,
				[zt]: f,
				[Bt]: h
			};
			case It: return {
				[Rt]: u,
				[zt]: p,
				[Bt]: g
			};
			default: return {};
		}
	}, te = q.useMemo(() => I(D), [D]), [ne, L] = sn(D, !e, (e) => {
		if (e === "prepare") {
			let e = te[Rt];
			return e ? e(A()) : !1;
		}
		return e in te && E([te[e]?.(A(), null) || null, e]), e === "active" && D !== "none" && (F(A()), o > 0 && (clearTimeout(k.current), k.current = setTimeout(() => {
			P({ deadline: !0 });
		}, o))), e === "prepared" && N(), !0;
	});
	j.current = on(L);
	let re = (0, q.useRef)(null);
	tn(() => {
		if (O.current && re.current === t) return;
		S(t);
		let n = O.current;
		O.current = !0;
		let o;
		!n && t && i && (o = Pt), n && t && r && (o = Ft), (n && !t && a || !n && s && !t && a) && (o = It);
		let c = I(o);
		o && (e || c.prepare) ? (w(o), ne()) : w(Nt), re.current = t;
	}, [t]), (0, q.useEffect)(() => {
		(D === "appear" && !i || D === "enter" && !r || D === "leave" && !a) && w(Nt);
	}, [
		i,
		r,
		a
	]), (0, q.useEffect)(() => () => {
		O.current = !1, clearTimeout(k.current);
	}, []);
	let R = q.useRef(!1);
	(0, q.useEffect)(() => {
		x && (R.current = !0), x !== void 0 && D === "none" && ((R.current || x) && b?.(x), R.current = !0);
	}, [x, D]);
	let ie = T[0];
	te.prepare && L === "start" && (ie = {
		transition: "none",
		...ie
	});
	let z = T[1];
	return [
		C,
		L,
		ie,
		x ?? t,
		!O.current && D === "none" && e && i ? "NONE" : L === "start" || L === "active" ? z === L : !0
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+motion@1.3.3__5cb28bd61bb270bbfeae2def527d6530/node_modules/@rc-component/motion/es/CSSMotion.js
function ln(e) {
	return e?.length < 2;
}
function un(e) {
	let t = e;
	typeof e == "object" && ({transitionSupport: t} = e);
	function n(e, n) {
		return !!(e.motionName && t && n !== !1);
	}
	let r = /*#__PURE__*/ q.forwardRef((e, t) => {
		let { visible: r = !0, removeOnLeave: i = !0, forceRender: a, children: o, motionName: s, leavedClassName: c, eventProps: l } = e, { motion: u } = q.useContext(jt), d = n(e, u), f = (0, q.useRef)();
		function p() {
			return E(f.current);
		}
		let [m, g, _, v, y] = cn(d, r, p, e), b = m(), x = q.useRef(v);
		v && (x.current = !0);
		let S = q.useMemo(() => {
			let e = {};
			return Object.defineProperties(e, {
				nativeElement: {
					enumerable: !0,
					get: p
				},
				inMotion: {
					enumerable: !0,
					get: () => () => m() !== Nt
				},
				enableMotion: {
					enumerable: !0,
					get: () => () => d
				}
			}), e;
		}, []);
		q.useImperativeHandle(t, () => S, []);
		let C = q.useRef(0);
		y && (C.current += 1);
		let w = q.useMemo(() => {
			if (y === "NONE") return null;
			let e, t = {
				...l,
				visible: r
			};
			if (!o) e = null;
			else if (b === "none") e = v ? o({ ...t }, f) : !i && x.current && c ? o({
				...t,
				className: c
			}, f) : a || !i && !c ? o({
				...t,
				style: { display: "none" }
			}, f) : null;
			else {
				let n;
				g === "prepare" ? n = "prepare" : on(g) ? n = "active" : g === "start" && (n = "start");
				let r = $t(s, `${b}-${n}`);
				e = o({
					...t,
					className: h($t(s, b), {
						[r]: r && n,
						[s]: typeof s == "string"
					}),
					style: _
				}, f);
			}
			return e;
		}, [C.current]);
		if (ln(o) && N(w)) {
			let e = F(w);
			if (e !== f) return /*#__PURE__*/ q.cloneElement(w, { ref: ce(e, f) });
		}
		return w;
	});
	return r.displayName = "CSSMotion", r;
}
var dn = un(Xt), fn = "keep", pn = "remove", mn = "removed";
function hn(e) {
	let t;
	return t = e && typeof e == "object" && "key" in e ? e : { key: e }, {
		...t,
		key: String(t.key)
	};
}
function gn(e = []) {
	return e.map(hn);
}
function _n(e = [], t = []) {
	let n = [], r = 0, i = t.length, a = gn(e), o = gn(t);
	a.forEach((e) => {
		let t = !1;
		for (let a = r; a < i; a += 1) {
			let i = o[a];
			if (i.key === e.key) {
				r < a && (n = n.concat(o.slice(r, a).map((e) => ({
					...e,
					status: "add"
				}))), r = a), n.push({
					...i,
					status: fn
				}), r += 1, t = !0;
				break;
			}
		}
		t || n.push({
			...e,
			status: pn
		});
	}), r < i && (n = n.concat(o.slice(r).map((e) => ({
		...e,
		status: "add"
	}))));
	let s = {};
	return n.forEach(({ key: e }) => {
		s[e] = (s[e] || 0) + 1;
	}), Object.keys(s).filter((e) => s[e] > 1).forEach((e) => {
		n = n.filter(({ key: t, status: n }) => t !== e || n !== "remove"), n.forEach((t) => {
			t.key === e && (t.status = fn);
		});
	}), n;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+motion@1.3.3__5cb28bd61bb270bbfeae2def527d6530/node_modules/@rc-component/motion/es/CSSMotionList.js
function vn() {
	return vn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, vn.apply(this, arguments);
}
var yn = [
	"eventProps",
	"visible",
	"children",
	"motionName",
	"motionAppear",
	"motionEnter",
	"motionLeave",
	"motionLeaveImmediately",
	"motionDeadline",
	"removeOnLeave",
	"leavedClassName",
	"onAppearPrepare",
	"onAppearStart",
	"onAppearActive",
	"onAppearEnd",
	"onEnterStart",
	"onEnterActive",
	"onEnterEnd",
	"onLeaveStart",
	"onLeaveActive",
	"onLeaveEnd"
];
function bn(e, t = dn) {
	class n extends q.Component {
		static defaultProps = { component: "div" };
		state = { keyEntities: [] };
		static getDerivedStateFromProps({ keys: e }, { keyEntities: t }) {
			return { keyEntities: _n(t, gn(e)).filter((e) => {
				let n = t.find(({ key: t }) => e.key === t);
				return !(n && n.status === "removed" && e.status === "remove");
			}) };
		}
		removeKey = (e) => {
			this.setState((t) => ({ keyEntities: t.keyEntities.map((t) => t.key === e ? {
				...t,
				status: mn
			} : t) }), () => {
				let { keyEntities: e } = this.state;
				e.filter(({ status: e }) => e !== "removed").length === 0 && this.props.onAllRemoved && this.props.onAllRemoved();
			});
		};
		render() {
			let { keyEntities: e } = this.state, { component: n, children: r, onVisibleChanged: i, onAllRemoved: a, ...o } = this.props, s = n || q.Fragment, c = {};
			return yn.forEach((e) => {
				c[e] = o[e], delete o[e];
			}), delete o.keys, /*#__PURE__*/ q.createElement(s, o, e.map(({ status: e, ...n }, a) => {
				let o = e === "add" || e === "keep";
				return /*#__PURE__*/ q.createElement(t, vn({}, c, {
					key: n.key,
					visible: o,
					eventProps: n,
					onVisibleChanged: (e) => {
						i?.(e, { key: n.key }), e || this.removeKey(n.key);
					}
				}), ln(r) ? (e) => r({
					...e,
					index: a
				}) : (e, t) => r({
					...e,
					index: a
				}, t));
			}));
		}
	}
	return n;
}
var xn = bn(Xt), Sn = dn, Cn = (e) => e != null, wn = (e) => Cn(e) && e !== !1 && e !== "", Tn = (e) => typeof e == "number" && !Number.isNaN(e), En = (e) => typeof e == "string", Dn = (e) => typeof e == "object" && !!e, On = (e) => typeof e == "function", kn = (e) => Cn(e) && On(e.then), An = (e) => typeof e != "object" && !On(e) || e === null, jn = (e) => Dn(e) && "propertyName" in e && En(e.propertyName), Mn = (e, t) => {
	let n = { ...e };
	return Object.keys(t).forEach((e) => {
		t[e]._default ? n[e] || (n[e] = {}) : n[e] = Mn(n[e], t[e]);
	}), n;
}, Nn = (e = {}, ...t) => t.filter((e) => !!e).reduce((t, n) => (Object.keys(n).forEach((r) => {
	let i = e[r], a = n[r];
	if (i) if (Dn(a)) t[r] = Nn(i, t[r], a);
	else {
		let { _default: e } = i;
		e && (t[r] = t[r] || {}, t[r][e] = h(t[r][e], a));
	}
	else t[r] = h(t[r], a);
}), t), {}), Pn = (e, ...t) => q.useMemo(() => Nn.apply(void 0, [e].concat(t)), [e].concat(t)), Fn = (...e) => e.filter((e) => !!e).reduce((e, t = {}) => (Object.keys(t).forEach((n) => {
	e[n] = {
		...e[n],
		...t[n]
	};
}), e), {}), In = (...e) => q.useMemo(() => Fn.apply(void 0, e), [].concat(e)), Ln = (e, t) => On(e) ? e(t) : e, Rn = (e, t, n, r) => {
	let i = e.map((e) => e ? Ln(e, n) : void 0), a = t.map((e) => e ? Ln(e, n) : void 0), o = Pn.apply(void 0, [r].concat(m(i))), s = In.apply(void 0, m(a));
	return q.useMemo(() => r ? [Mn(o, r), Mn(s, r)] : [o, s], [
		o,
		s,
		r
	]);
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/warning.js
function zn() {}
var { resetWarned: Bn } = a, Vn = /*#__PURE__*/ q.createContext({}), Hn = () => {
	let e = () => {};
	return e.deprecated = zn, e;
}, Un = (e) => Cn(e) && e === e.window, Wn = (e) => {
	if (typeof window > "u")
 /* istanbul ignore next */
	return 0;
	let t = 0;
	return Un(e) ? t = e.pageYOffset : e instanceof Document ? t = e.documentElement.scrollTop : (e instanceof HTMLElement || e) && (t = e.scrollTop), e && !Un(e) && !Tn(t) && (t = (e.ownerDocument ?? e).documentElement?.scrollTop), t;
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/easings.js
function Gn(e, t, n, r) {
	let i = n - t;
	return e /= r / 2, e < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/scrollTo.js
function Kn(e, t = {}) {
	let { getContainer: n = () => window, callback: r, duration: a = 450 } = t, o = n(), s = Wn(o), c = Date.now(), l, u = () => {
		let t = Date.now() - c, n = Gn(t > a ? a : t, s, e, a);
		Un(o) ? o.scrollTo(window.pageXOffset, n) : o instanceof Document || o.constructor.name === "HTMLDocument" ? o.documentElement.scrollTop = n : o.scrollTop = n, t < a ? l = i(u) : On(r) && r();
	};
	return l = i(u), () => {
		i.cancel(l);
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var qn = (e) => `${e}-css-var`, Jn = /*#__PURE__*/ (0, q.createContext)(void 0), Yn = {
	items_per_page: "/ page",
	jump_to: "Go to",
	jump_to_confirm: "confirm",
	page: "Page",
	prev_page: "Previous Page",
	next_page: "Next Page",
	prev_5: "Previous 5 Pages",
	next_5: "Next 5 Pages",
	prev_3: "Previous 3 Pages",
	next_3: "Next 3 Pages",
	page_size: "Page Size"
}, Xn = {
	yearFormat: "YYYY",
	dayFormat: "D",
	cellMeridiemFormat: "A",
	monthBeforeYear: !0
};
//#endregion
//#region node_modules/.pnpm/@rc-component+picker@1.10.0_050fda0969e69d52b9b0b2fb217a1bc9/node_modules/@rc-component/picker/es/locale/en_US.js
function Zn(e) {
	"@babel/helpers - typeof";
	return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Zn(e);
}
function Qn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $n(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qn(Object(n), !0).forEach(function(t) {
			er(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function er(e, t, n) {
	return t = tr(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function tr(e) {
	var t = nr(e, "string");
	return Zn(t) == "symbol" ? t : String(t);
}
function nr(e, t) {
	if (Zn(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Zn(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var rr = $n($n({}, Xn), {}, {
	locale: "en_US",
	today: "Today",
	now: "Now",
	backToToday: "Back to today",
	ok: "OK",
	clear: "Clear",
	week: "Week",
	month: "Month",
	year: "Year",
	timeSelect: "select time",
	dateSelect: "select date",
	weekSelect: "Choose a week",
	monthSelect: "Choose a month",
	yearSelect: "Choose a year",
	decadeSelect: "Choose a decade",
	previousMonth: "Previous month (PageUp)",
	nextMonth: "Next month (PageDown)",
	previousYear: "Last year (Control + left)",
	nextYear: "Next year (Control + right)",
	previousDecade: "Last decade",
	nextDecade: "Next decade",
	previousCentury: "Last century",
	nextCentury: "Next century"
}), ir = {
	placeholder: "Select time",
	rangePlaceholder: ["Start time", "End time"]
}, ar = {
	lang: {
		placeholder: "Select date",
		yearPlaceholder: "Select year",
		quarterPlaceholder: "Select quarter",
		monthPlaceholder: "Select month",
		weekPlaceholder: "Select week",
		rangePlaceholder: ["Start date", "End date"],
		rangeYearPlaceholder: ["Start year", "End year"],
		rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
		rangeMonthPlaceholder: ["Start month", "End month"],
		rangeWeekPlaceholder: ["Start week", "End week"],
		...rr
	},
	timePickerLocale: { ...ir }
}, or = ar, sr = "${label} is not a valid ${type}", cr = {
	locale: "en",
	Pagination: Yn,
	DatePicker: ar,
	TimePicker: ir,
	Calendar: or,
	global: {
		placeholder: "Please select",
		close: "Close",
		sortable: "sortable",
		show: "Show",
		hide: "Hide"
	},
	Table: {
		filterTitle: "Filter menu",
		filterConfirm: "OK",
		filterReset: "Reset",
		filterEmptyText: "No filters",
		filterCheckAll: "Select all items",
		filterSearchPlaceholder: "Search in filters",
		emptyText: "No data",
		selectAll: "Select current page",
		selectInvert: "Invert current page",
		selectNone: "Clear all data",
		selectionAll: "Select all data",
		sortTitle: "Sort",
		expand: "Expand row",
		collapse: "Collapse row",
		triggerDesc: "Click to sort descending",
		triggerAsc: "Click to sort ascending",
		cancelSort: "Click to cancel sorting"
	},
	Tour: {
		Next: "Next",
		Previous: "Previous",
		Finish: "Finish"
	},
	Modal: {
		okText: "OK",
		cancelText: "Cancel",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Cancel"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Search here",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "Remove",
		selectCurrent: "Select current page",
		removeCurrent: "Remove current page",
		selectAll: "Select all data",
		deselectAll: "Deselect all data",
		removeAll: "Remove all data",
		selectInvert: "Invert current page"
	},
	Upload: {
		uploading: "Uploading...",
		removeFile: "Remove file",
		uploadError: "Upload error",
		previewFile: "Preview file",
		downloadFile: "Download file"
	},
	Empty: { description: "No data" },
	Icon: { icon: "icon" },
	Text: {
		edit: "Edit",
		copy: "Copy",
		copied: "Copied",
		expand: "Expand",
		collapse: "Collapse"
	},
	Form: {
		optional: "(optional)",
		defaultValidateMessages: {
			default: "Field validation error for ${label}",
			required: "Please enter ${label}",
			enum: "${label} must be one of [${enum}]",
			whitespace: "${label} cannot be a blank character",
			date: {
				format: "${label} date format is invalid",
				parse: "${label} cannot be converted to a date",
				invalid: "${label} is an invalid date"
			},
			types: {
				string: sr,
				method: sr,
				array: sr,
				object: sr,
				number: sr,
				date: sr,
				boolean: sr,
				integer: sr,
				float: sr,
				regexp: sr,
				email: sr,
				url: sr,
				hex: sr
			},
			string: {
				len: "${label} must be ${len} characters",
				min: "${label} must be at least ${min} characters",
				max: "${label} must be up to ${max} characters",
				range: "${label} must be between ${min}-${max} characters"
			},
			number: {
				len: "${label} must be equal to ${len}",
				min: "${label} must be minimum ${min}",
				max: "${label} must be maximum ${max}",
				range: "${label} must be between ${min}-${max}"
			},
			array: {
				len: "Must be ${len} ${label}",
				min: "At least ${min} ${label}",
				max: "At most ${max} ${label}",
				range: "The amount of ${label} must be between ${min}-${max}"
			},
			pattern: { mismatch: "${label} does not match the pattern ${pattern}" }
		}
	},
	QRCode: {
		expired: "QR code expired",
		refresh: "Refresh",
		scanned: "Scanned"
	},
	ColorPicker: {
		presetEmpty: "Empty",
		transparent: "Transparent",
		singleColor: "Single",
		gradientColor: "Gradient"
	}
}, lr = { ...cr.Modal }, ur = [], dr = () => ur.reduce((e, t) => ({
	...e,
	...t
}), cr.Modal);
function fr(e) {
	if (e) {
		let t = { ...e };
		return ur.push(t), lr = dr(), () => {
			ur = ur.filter((e) => e !== t), lr = dr();
		};
	}
	lr = { ...cr.Modal };
}
function pr() {
	return lr;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/locale/context.js
var mr = /*#__PURE__*/ (0, q.createContext)(void 0), hr = (e, t) => {
	let n = q.useContext(mr);
	return [q.useMemo(() => {
		let r = t || cr[e], i = n?.[e] ?? {};
		return {
			...On(r) ? r() : r,
			...i || {}
		};
	}, [
		e,
		t,
		n
	]), q.useMemo(() => {
		let e = n?.locale;
		return n?.exist && !e ? cr.locale : e;
	}, [n])];
}, gr = /* @__PURE__ */ e({
	ANT_MARK: () => _r,
	default: () => vr,
	useLocale: () => hr
}), _r = "internalMark", vr = (e) => {
	let { locale: t = {}, children: n, _ANT_MARK__: r } = e;
	q.useEffect(() => fr(t?.Modal), [t]);
	let i = q.useMemo(() => ({
		...t,
		exist: !0
	}), [t]);
	return /*#__PURE__*/ q.createElement(mr.Provider, { value: i }, n);
}, yr = /*#__PURE__*/ q.createContext(null), br = !1;
function xr(e) {
	return typeof e == "boolean" && (br = e), br;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+portal@2.2.1__b821f7c07cf0b85c056a8c917cc4f2e8/node_modules/@rc-component/portal/es/useDom.js
var Sr = [];
function Cr(e, t) {
	let [n] = q.useState(() => k() ? document.createElement("div") : null), r = q.useRef(!1), i = q.useContext(yr), [a, o] = q.useState(Sr), s = i || (r.current ? void 0 : (e) => {
		o((t) => [e, ...t]);
	});
	function c() {
		n.parentElement || document.body.appendChild(n), r.current = !0;
	}
	function l() {
		n.parentElement?.removeChild(n), r.current = !1;
	}
	return re(() => (e ? i ? i(c) : c() : l(), l), [e]), re(() => {
		a.length && (a.forEach((e) => e()), o(Sr));
	}, [a]), [n, s];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+portal@2.2.1__b821f7c07cf0b85c056a8c917cc4f2e8/node_modules/@rc-component/portal/es/util.js
function wr() {
	return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+portal@2.2.1__b821f7c07cf0b85c056a8c917cc4f2e8/node_modules/@rc-component/portal/es/useScrollLocker.js
var Tr = `rc-util-locker-${Date.now()}`, Er = 0;
function Dr(e) {
	let t = !!e, [n] = q.useState(() => (Er += 1, `${Tr}_${Er}`));
	re(() => {
		if (t) {
			let e = le(document.body).width;
			z(`
html body {
  overflow-y: hidden;
  ${wr() ? `width: calc(100% - ${e}px);` : ""}
}`, n);
		} else de(n);
		return () => {
			de(n);
		};
	}, [t, n]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+portal@2.2.1__b821f7c07cf0b85c056a8c917cc4f2e8/node_modules/@rc-component/portal/es/useEscKeyDown.js
var Or = [], kr = 200, Ar = 0, jr = (e) => {
	if (e.key === "Escape" && !e.isComposing) {
		if (Date.now() - Ar < kr) return;
		let t = Or.length;
		for (let n = t - 1; n >= 0; --n) Or[n].onEsc({
			top: n === t - 1,
			event: e
		});
	}
}, Mr = () => {
	Ar = Date.now();
};
function Nr() {
	window.addEventListener("keydown", jr), window.addEventListener("compositionend", Mr);
}
function Pr() {
	Or.length === 0 && (window.removeEventListener("keydown", jr), window.removeEventListener("compositionend", Mr));
}
function Fr(e, t) {
	let n = oe(), r = M(t), i = () => {
		Or.find((e) => e.id === n) || Or.push({
			id: n,
			onEsc: r
		});
	}, a = () => {
		Or = Or.filter((e) => e.id !== n);
	};
	(0, q.useMemo)(() => {
		e ? i() : e || a();
	}, [e]), (0, q.useEffect)(() => {
		if (e) return i(), Nr(), () => {
			a(), Pr();
		};
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+portal@2.2.1__b821f7c07cf0b85c056a8c917cc4f2e8/node_modules/@rc-component/portal/es/Portal.js
var Ir = (e) => e === !1 ? !1 : !k() || !e ? null : typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() : e, Lr = /* @__PURE__ */ q.forwardRef((e, t) => {
	let { open: n, autoLock: r, getContainer: i, debug: a, autoDestroy: o = !0, children: s, onEsc: c } = e, [l, u] = q.useState(n), d = l || n;
	q.useEffect(() => {
		(o || n) && u(n);
	}, [n, o]);
	let [f, p] = q.useState(() => Ir(i));
	q.useEffect(() => {
		let e = Ir(i);
		p(() => e ?? null);
	});
	let [m, h] = Cr(d && !f, a), g = f ?? m;
	Dr(r && n && k() && (g === m || g === document.body)), Fr(n, c);
	let _ = null;
	s && w(s) && t && (_ = F(s));
	let v = pe(_, t);
	if (!d || !k() || f === void 0) return null;
	let y = g === !1 || xr(), b = s;
	return t && (b = /*#__PURE__*/ q.cloneElement(s, { ref: v })), /*#__PURE__*/ q.createElement(yr.Provider, { value: h }, y ? b : /*#__PURE__*/ (0, K.createPortal)(b, g));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/Popup/Arrow.js
function Rr(e) {
	let { prefixCls: t, align: n, arrow: r, arrowPos: i } = e, { className: a, content: o, style: s } = r || {}, { x: c = 0, y: l = 0 } = i, u = q.useRef(null);
	if (!n || !n.points) return null;
	let d = { position: "absolute" };
	if (n.autoArrow !== !1) {
		let e = n.points[0], t = n.points[1], r = e[0], i = e[1], a = t[0], o = t[1];
		r === a || !["t", "b"].includes(r) ? d.top = l : r === "t" ? d.top = 0 : d.bottom = 0, i === o || !["l", "r"].includes(i) ? d.left = c : i === "l" ? d.left = 0 : d.right = 0;
	}
	return /*#__PURE__*/ q.createElement("div", {
		ref: u,
		className: h(`${t}-arrow`, a),
		style: {
			...d,
			...s
		}
	}, o);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/Popup/Mask.js
function zr() {
	return zr = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, zr.apply(this, arguments);
}
function Br(e) {
	let { prefixCls: t, open: n, zIndex: r, mask: i, motion: a, mobile: o } = e;
	return i ? /*#__PURE__*/ q.createElement(Sn, zr({}, a, {
		motionAppear: !0,
		visible: n,
		removeOnLeave: !0
	}), ({ className: e }) => /*#__PURE__*/ q.createElement("div", {
		style: { zIndex: r },
		className: h(`${t}-mask`, o && `${t}-mobile-mask`, e)
	})) : null;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/Popup/PopupContent.js
var Vr = /*#__PURE__*/ q.memo(({ children: e }) => e, (e, t) => t.cache);
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/hooks/useOffsetStyle.js
function Hr(e, t, n, r, i, a, o, s) {
	let c = "auto", l = e ? {} : {
		left: "-1000vw",
		top: "-1000vh",
		right: c,
		bottom: c
	};
	if (!e && (t || !n)) {
		let { points: e } = r, t = r.dynamicInset || r._experimental?.dynamicInset, n = t && e[0][1] === "r", u = t && e[0][0] === "b";
		n ? (l.right = i, l.left = c) : (l.left = o, l.right = c), u ? (l.bottom = a, l.top = c) : (l.top = s, l.bottom = c);
	}
	return l;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/Popup/index.js
function Ur() {
	return Ur = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ur.apply(this, arguments);
}
var Wr = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { onEsc: n, popup: r, className: i, prefixCls: a, style: o, target: s, onVisibleChanged: c, open: l, keepDom: u, fresh: d, onClick: f, mask: p, arrow: m, arrowPos: g, align: _, motion: v, maskMotion: y, mobile: b, forceRender: x, getPopupContainer: S, autoDestroy: C, portal: w, children: T, zIndex: E, onMouseEnter: D, onMouseLeave: O, onPointerEnter: k, onPointerDownCapture: A, ready: j, offsetX: N, offsetY: P, offsetR: F, offsetB: I, onAlign: ee, onPrepare: te, onResize: ne, stretch: L, targetWidth: R, targetHeight: ie } = e, z = typeof r == "function" ? r() : r, ae = l || u, oe = !!b, [se, le, B] = q.useMemo(() => b ? [
		b.mask,
		b.maskMotion,
		b.motion
	] : [
		p,
		y,
		v
	], [
		b,
		p,
		y,
		v
	]), V = S?.length > 0, [H, ue] = q.useState(!S || !V);
	re(() => {
		!H && V && s && ue(!0);
	}, [
		H,
		V,
		s
	]);
	let de = M((e, t) => {
		ne?.(e, t), ee();
	}), U = Hr(oe, j, l, _, F, I, N, P);
	if (!H) return null;
	let fe = {};
	return L && (L.includes("height") && ie ? fe.height = ie : L.includes("minHeight") && ie && (fe.minHeight = ie), L.includes("width") && R ? fe.width = R : L.includes("minWidth") && R && (fe.minWidth = R)), l || (fe.pointerEvents = "none"), /*#__PURE__*/ q.createElement(w, {
		open: x || ae,
		getContainer: S && (() => S(s)),
		autoDestroy: C,
		onEsc: n
	}, /*#__PURE__*/ q.createElement(Br, {
		prefixCls: a,
		open: l,
		zIndex: E,
		mask: se,
		motion: le,
		mobile: oe
	}), /*#__PURE__*/ q.createElement(je, {
		onResize: de,
		disabled: !l
	}, (e) => /*#__PURE__*/ q.createElement(Sn, Ur({
		motionAppear: !0,
		motionEnter: !0,
		motionLeave: !0,
		removeOnLeave: !1,
		forceRender: x,
		leavedClassName: `${a}-hidden`
	}, B, {
		onAppearPrepare: te,
		onEnterPrepare: te,
		visible: l,
		onVisibleChanged: (e) => {
			v?.onVisibleChanged?.(e), c(e);
		}
	}), ({ className: n, style: r }, s) => {
		let c = h(a, n, i, { [`${a}-mobile`]: oe });
		return /*#__PURE__*/ q.createElement("div", {
			ref: ce(e, t, s),
			className: c,
			style: {
				"--arrow-x": `${g.x || 0}px`,
				"--arrow-y": `${g.y || 0}px`,
				...U,
				...fe,
				...r,
				boxSizing: "border-box",
				zIndex: E,
				...o
			},
			onMouseEnter: D,
			onMouseLeave: O,
			onPointerEnter: k,
			onClick: f,
			onPointerDownCapture: A
		}, m && /*#__PURE__*/ q.createElement(Rr, {
			prefixCls: a,
			arrow: m,
			arrowPos: g,
			align: _
		}), /*#__PURE__*/ q.createElement(Vr, { cache: !l && !d }, z));
	})), T);
}), Gr = /*#__PURE__*/ q.createContext(null), Kr = /*#__PURE__*/ q.createContext(null);
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/hooks/useAction.js
function qr(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function Jr(e, t, n) {
	return q.useMemo(() => {
		let r = qr(t ?? e), i = qr(n ?? e), a = new Set(r), o = new Set(i);
		return a.has("hover") && !a.has("click") && a.add("touch"), o.has("hover") && !o.has("click") && o.add("touch"), [a, o];
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/util.js
function Yr(e = [], t = [], n) {
	let r = (e, t) => e[t] || "";
	return n ? r(e, 0) === r(t, 0) : r(e, 0) === r(t, 0) && r(e, 1) === r(t, 1);
}
function Xr(e, t, n, r) {
	let { points: i } = n, a = Object.keys(e);
	for (let n = 0; n < a.length; n += 1) {
		let o = a[n];
		if (Yr(e[o]?.points, i, r)) return `${t}-placement-${o}`;
	}
	return "";
}
function Zr(e) {
	return e.ownerDocument.defaultView;
}
function Qr(e) {
	let t = [], n = e?.parentElement, r = [
		"hidden",
		"scroll",
		"clip",
		"auto"
	];
	for (; n;) {
		let { overflowX: e, overflowY: i, overflow: a } = Zr(n).getComputedStyle(n);
		[
			e,
			i,
			a
		].some((e) => r.includes(e)) && t.push(n), n = n.parentElement;
	}
	return t;
}
function $r(e, t = 1) {
	return Number.isNaN(e) ? t : e;
}
function ei(e) {
	return $r(parseFloat(e), 0);
}
function ti(e, t) {
	let n = { ...e };
	return (t || []).forEach((e) => {
		if (e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement) return;
		let { overflow: t, overflowClipMargin: r, borderTopWidth: i, borderBottomWidth: a, borderLeftWidth: o, borderRightWidth: s } = Zr(e).getComputedStyle(e), c = e.getBoundingClientRect(), { offsetHeight: l, clientHeight: u, offsetWidth: d, clientWidth: f } = e, p = ei(i), m = ei(a), h = ei(o), g = ei(s), _ = $r(Math.round(c.width / d * 1e3) / 1e3), v = $r(Math.round(c.height / l * 1e3) / 1e3), y = (d - f - h - g) * _, b = (l - u - p - m) * v, x = p * v, S = m * v, C = h * _, w = g * _, T = 0, E = 0;
		if (t === "clip") {
			let e = ei(r);
			T = e * _, E = e * v;
		}
		let D = c.x + C - T, O = c.y + x - E, k = D + c.width + 2 * T - C - w - y, A = O + c.height + 2 * E - x - S - b;
		n.left = Math.max(n.left, D), n.top = Math.max(n.top, O), n.right = Math.min(n.right, k), n.bottom = Math.min(n.bottom, A);
	}), n;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/hooks/useAlign.js
function ni(e, t = 0) {
	let n = `${t}`, r = n.match(/^(.*)\%$/);
	return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function ri(e, t) {
	let [n, r] = t || [];
	return [ni(e.width, n), ni(e.height, r)];
}
function ii(e = "") {
	return [e[0], e[1]];
}
function ai(e, t) {
	let n = t[0], r = t[1], i, a;
	return a = n === "t" ? e.y : n === "b" ? e.y + e.height : e.y + e.height / 2, i = r === "l" ? e.x : r === "r" ? e.x + e.width : e.x + e.width / 2, {
		x: i,
		y: a
	};
}
function oi(e, t) {
	let n = {
		t: "b",
		b: "t",
		l: "r",
		r: "l"
	}, r = [...e];
	return r[t] = n[e[t]] || "c", r;
}
function si(e) {
	return e.join("");
}
function ci(e, t, n, r, i, a, o, s) {
	let [c, l] = q.useState({
		ready: !1,
		offsetX: 0,
		offsetY: 0,
		offsetR: 0,
		offsetB: 0,
		arrowX: 0,
		arrowY: 0,
		scaleX: 1,
		scaleY: 1,
		align: i[r] || {}
	}), u = q.useRef(0), d = q.useMemo(() => !t || s ? [] : Qr(t), [t]), f = q.useRef({});
	e || (f.current = {});
	let p = M(() => {
		if (t && n && e && !s) {
			let e = t, s = e.ownerDocument, c = Zr(e), { position: u } = c.getComputedStyle(e), p = e.style.left, m = e.style.top, h = e.style.right, g = e.style.bottom, _ = e.style.overflow, v = e.style.overflowX, y = e.style.overflowY, b = {
				...i[r],
				...a
			}, x = s.createElement("div");
			e.parentElement?.appendChild(x), x.style.left = `${e.offsetLeft}px`, x.style.top = `${e.offsetTop}px`, x.style.position = u, x.style.height = `${e.offsetHeight}px`, x.style.width = `${e.offsetWidth}px`, e.style.left = "0", e.style.top = "0", e.style.right = "auto", e.style.bottom = "auto", e.style.overflow = "hidden";
			let S;
			if (Array.isArray(n)) S = {
				x: n[0],
				y: n[1],
				width: 0,
				height: 0
			};
			else {
				let e = n.getBoundingClientRect();
				e.x = e.x ?? e.left, e.y = e.y ?? e.top, S = {
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height
				};
			}
			let C = e.getBoundingClientRect(), { height: w, width: T } = c.getComputedStyle(e);
			C.x = C.x ?? C.left, C.y = C.y ?? C.top;
			let { clientWidth: E, clientHeight: D, scrollWidth: O, scrollHeight: k, scrollTop: A, scrollLeft: M } = s.documentElement, N = C.height, P = C.width, F = S.height, I = S.width, ee = {
				left: 0,
				top: 0,
				right: E,
				bottom: D
			}, te = {
				left: -M,
				top: -A,
				right: O - M,
				bottom: k - A
			}, { htmlRegion: ne } = b, L = "visible", re = "visibleFirst";
			ne !== "scroll" && ne !== re && (ne = L);
			let R = ne === re, ie = ti(te, d), z = ti(ee, d), ae = ne === L ? z : ie, oe = R ? z : ae;
			e.style.left = "auto", e.style.top = "auto", e.style.right = "0", e.style.bottom = "0";
			let se = e.getBoundingClientRect();
			e.style.left = p, e.style.top = m, e.style.right = h, e.style.bottom = g, e.style.overflow = _, e.style.overflowX = v, e.style.overflowY = y, e.parentElement?.removeChild(x);
			let ce = $r(Math.round(P / parseFloat(T) * 1e3) / 1e3), le = $r(Math.round(N / parseFloat(w) * 1e3) / 1e3);
			if (ce === 0 || le === 0 || he(n) && !j(n)) return;
			let { offset: B, targetOffset: V } = b, [H, ue] = ri(C, B), [de, U] = ri(S, V);
			S.x -= de, S.y -= U;
			let [fe, pe] = b.points || [], me = ii(pe), W = ii(fe), ge = ai(S, me), _e = ai(C, W), ve = { ...b }, G = [W, me], K = ge.x - _e.x + H, q = ge.y - _e.y + ue;
			function ye(e, t, n = ae) {
				let r = C.x + e, i = C.y + t, a = r + P, o = i + N, s = Math.max(r, n.left), c = Math.max(i, n.top), l = Math.min(a, n.right), u = Math.min(o, n.bottom);
				return Math.max(0, (l - s) * (u - c));
			}
			let J = ye(K, q), be = ye(K, q, z), xe = ai(S, ["t", "l"]), Se = ai(C, ["t", "l"]), Ce = ai(S, ["b", "r"]), we = ai(C, ["b", "r"]), { adjustX: Te, adjustY: Ee, shiftX: De, shiftY: Oe } = b.overflow || {}, Y = (e) => typeof e == "boolean" ? e : e >= 0, ke, Ae, je, Me;
			function Ne() {
				ke = C.y + q, Ae = ke + N, je = C.x + K, Me = je + P;
			}
			Ne();
			let Pe = Y(Ee), X = W[0] === me[0];
			if (Pe && W[0] === "t" && (Ae > oe.bottom || f.current.bt)) {
				let e = q;
				X ? e -= N - F : e = xe.y - we.y - ue;
				let t = ye(K, e), n = ye(K, e, z);
				t > J || t === J && (!R || n >= be) ? (f.current.bt = !0, q = e, ue = -ue, G = [oi(G[0], 0), oi(G[1], 0)]) : f.current.bt = !1;
			}
			if (Pe && W[0] === "b" && (ke < oe.top || f.current.tb)) {
				let e = q;
				X ? e += N - F : e = Ce.y - Se.y - ue;
				let t = ye(K, e), n = ye(K, e, z);
				t > J || t === J && (!R || n >= be) ? (f.current.tb = !0, q = e, ue = -ue, G = [oi(G[0], 0), oi(G[1], 0)]) : f.current.tb = !1;
			}
			let Fe = Y(Te), Ie = W[1] === me[1];
			if (Fe && W[1] === "l" && (Me > oe.right || f.current.rl)) {
				let e = K;
				Ie ? e -= P - I : e = xe.x - we.x - H;
				let t = ye(e, q), n = ye(e, q, z);
				t > J || t === J && (!R || n >= be) ? (f.current.rl = !0, K = e, H = -H, G = [oi(G[0], 1), oi(G[1], 1)]) : f.current.rl = !1;
			}
			if (Fe && W[1] === "r" && (je < oe.left || f.current.lr)) {
				let e = K;
				Ie ? e += P - I : e = Ce.x - Se.x - H;
				let t = ye(e, q), n = ye(e, q, z);
				t > J || t === J && (!R || n >= be) ? (f.current.lr = !0, K = e, H = -H, G = [oi(G[0], 1), oi(G[1], 1)]) : f.current.lr = !1;
			}
			ve.points = [si(G[0]), si(G[1])], Ne();
			let Le = De === !0 ? 0 : De;
			typeof Le == "number" && (je < z.left && (K -= je - z.left - H, S.x + I < z.left + Le && (K += S.x - z.left + I - Le)), Me > z.right && (K -= Me - z.right - H, S.x > z.right - Le && (K += S.x - z.right + Le)));
			let Re = Oe === !0 ? 0 : Oe;
			typeof Re == "number" && (ke < z.top && (q -= ke - z.top - ue, S.y + F < z.top + Re && (q += S.y - z.top + F - Re)), Ae > z.bottom && (q -= Ae - z.bottom - ue, S.y > z.bottom - Re && (q += S.y - z.bottom + Re)));
			let ze = C.x + K, Be = ze + P, Ve = C.y + q, He = Ve + N, Ue = S.x, We = Ue + I, Ge = S.y, Ke = Ge + F, qe = (Math.max(ze, Ue) + Math.min(Be, We)) / 2 - ze, Je = (Math.max(Ve, Ge) + Math.min(He, Ke)) / 2 - Ve;
			o?.(t, ve);
			let Ye = se.right - C.x - (K + C.width), Xe = se.bottom - C.y - (q + C.height);
			ce === 1 && (K = Math.floor(K), Ye = Math.floor(Ye)), le === 1 && (q = Math.floor(q), Xe = Math.floor(Xe)), l({
				ready: !0,
				offsetX: K / ce,
				offsetY: q / le,
				offsetR: Ye / ce,
				offsetB: Xe / le,
				arrowX: qe / ce,
				arrowY: Je / le,
				scaleX: ce,
				scaleY: le,
				align: ve
			});
		}
	}), m = () => {
		u.current += 1;
		let e = u.current;
		Promise.resolve().then(() => {
			u.current === e && p();
		});
	}, h = () => {
		l((e) => ({
			...e,
			ready: !1
		}));
	};
	return re(h, [r]), re(() => {
		e || h();
	}, [e]), [
		c.ready,
		c.offsetX,
		c.offsetY,
		c.offsetR,
		c.offsetB,
		c.arrowX,
		c.arrowY,
		c.scaleX,
		c.scaleY,
		c.align,
		m
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/hooks/useDelay.js
function li() {
	let e = q.useRef(null), t = () => {
		e.current &&= (clearTimeout(e.current), null);
	};
	return q.useEffect(() => () => {
		t();
	}, []), (n, r) => {
		t(), r === 0 ? n() : e.current = setTimeout(() => {
			n();
		}, r * 1e3);
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/hooks/useWatch.js
function ui(e, t, n, r, i) {
	re(() => {
		if (e && t && n) {
			let e = t, a = n, o = Qr(e), s = Qr(a), c = Zr(a), l = new Set([
				c,
				...o,
				...s
			]);
			function u() {
				r(), i();
			}
			return l.forEach((e) => {
				e.addEventListener("scroll", u, { passive: !0 });
			}), c.addEventListener("resize", u, { passive: !0 }), r(), () => {
				l.forEach((e) => {
					e.removeEventListener("scroll", u), c.removeEventListener("resize", u);
				});
			};
		}
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/hooks/useWinClick.js
function di(e, t, n, r, i, a, o, s) {
	let c = q.useRef(e);
	c.current = e;
	let l = q.useRef(!1);
	q.useEffect(() => {
		if (t && r && (!i || a)) {
			let e = () => {
				l.current = !1;
			}, t = (e) => {
				c.current && !o(e.composedPath?.()?.[0] || e.target) && !l.current && s(!1);
			}, i = Zr(r);
			i.addEventListener("pointerdown", e, !0), i.addEventListener("mousedown", t, !0), i.addEventListener("contextmenu", t, !0);
			let a = C(n);
			return a && (a.addEventListener("mousedown", t, !0), a.addEventListener("contextmenu", t, !0)), () => {
				i.removeEventListener("pointerdown", e, !0), i.removeEventListener("mousedown", t, !0), i.removeEventListener("contextmenu", t, !0), a && (a.removeEventListener("mousedown", t, !0), a.removeEventListener("contextmenu", t, !0));
			};
		}
	}, [
		t,
		n,
		r,
		i,
		a
	]);
	function u() {
		l.current = !0;
	}
	return u;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/UniqueProvider/useTargetState.js
function fi() {
	let [e, t] = q.useState(null), [n, r] = q.useState(!1), [i, a] = q.useState(!1), o = q.useRef(null);
	return [
		M((e) => {
			e === !1 ? (o.current = null, r(!1)) : i && n ? o.current = e : (r(!0), t(e), o.current = null, n || a(!0));
		}),
		n,
		e,
		M((e) => {
			e ? (a(!1), o.current &&= (t(o.current), null)) : (a(!1), o.current = null);
		})
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/UniqueProvider/UniqueContainer.js
function pi() {
	return pi = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, pi.apply(this, arguments);
}
var mi = (e) => {
	let { prefixCls: t, isMobile: n, ready: r, open: i, align: a, offsetR: o, offsetB: s, offsetX: c, offsetY: l, arrowPos: u, popupSize: d, motion: f, uniqueContainerClassName: p, uniqueContainerStyle: m } = e, g = `${t}-unique-container`, [_, v] = q.useState(!1), y = Hr(n, r, i, a, o, s, c, l), b = q.useRef(y);
	r && (b.current = y);
	let x = {};
	return d && (x.width = d.width, x.height = d.height), /*#__PURE__*/ q.createElement(Sn, pi({
		motionAppear: !0,
		motionEnter: !0,
		motionLeave: !0,
		removeOnLeave: !1,
		leavedClassName: `${g}-hidden`
	}, f, {
		visible: i,
		onVisibleChanged: (e) => {
			v(e);
		}
	}), ({ className: e, style: t }) => {
		let n = h(g, e, p, { [`${g}-visible`]: _ });
		return /*#__PURE__*/ q.createElement("div", {
			className: n,
			style: {
				"--arrow-x": `${u?.x || 0}px`,
				"--arrow-y": `${u?.y || 0}px`,
				...b.current,
				...x,
				...t,
				...m
			}
		});
	});
}, hi = ({ children: e, postTriggerProps: t }) => {
	let [n, r, i, a] = fi(), o = q.useMemo(() => !i || !t ? i : t(i), [i, t]), [s, c] = q.useState(null), [l, u] = q.useState(null), d = q.useRef(null), f = M((e) => {
		d.current = e, he(e) && s !== e && c(e);
	}), p = q.useRef(null), m = li(), g = M((e, t) => {
		p.current = t, m(() => {
			n(e);
		}, e.delay);
	}), _ = (e) => {
		m(() => {
			p.current?.() || n(!1);
		}, e);
	}, v = M((e) => {
		a(e);
	}), [y, b, x, S, C, w, T, , , E, D] = ci(r, s, o?.target, o?.popupPlacement, o?.builtinPlacements || {}, o?.popupAlign, void 0, !1), O = q.useMemo(() => o ? h(Xr(o.builtinPlacements || {}, o.prefixCls || "", E, !1), o.getPopupClassNameFromAlign?.(E)) : "", [
		E,
		o?.getPopupClassNameFromAlign,
		o?.builtinPlacements,
		o?.prefixCls
	]), k = q.useMemo(() => ({
		show: g,
		hide: _
	}), []);
	q.useEffect(() => {
		D();
	}, [o?.target]);
	let A = M(() => (D(), Promise.resolve())), j = q.useRef({}), N = q.useContext(Gr), P = q.useMemo(() => ({ registerSubPopup: (e, t) => {
		j.current[e] = t, N?.registerSubPopup(e, t);
	} }), [N]), F = o?.prefixCls;
	return /*#__PURE__*/ q.createElement(Kr.Provider, { value: k }, e, o && /*#__PURE__*/ q.createElement(Gr.Provider, { value: P }, /*#__PURE__*/ q.createElement(Wr, {
		ref: f,
		portal: Lr,
		onEsc: o.onEsc,
		prefixCls: F,
		popup: o.popup,
		className: h(o.popupClassName, O, `${F}-unique-controlled`),
		style: o.popupStyle,
		target: o.target,
		open: r,
		keepDom: !0,
		fresh: !0,
		autoDestroy: !1,
		onVisibleChanged: v,
		ready: y,
		offsetX: b,
		offsetY: x,
		offsetR: S,
		offsetB: C,
		onAlign: D,
		onPrepare: A,
		onResize: (e) => u({
			width: e.offsetWidth,
			height: e.offsetHeight
		}),
		arrowPos: {
			x: w,
			y: T
		},
		align: E,
		zIndex: o.zIndex,
		mask: o.mask,
		arrow: o.arrow,
		motion: o.popupMotion,
		maskMotion: o.maskMotion,
		getPopupContainer: o.getPopupContainer
	}, /*#__PURE__*/ q.createElement(mi, {
		prefixCls: F,
		isMobile: !1,
		ready: y,
		open: r,
		align: E,
		offsetR: S,
		offsetB: C,
		offsetX: b,
		offsetY: x,
		arrowPos: {
			x: w,
			y: T
		},
		popupSize: l,
		motion: o.popupMotion,
		uniqueContainerClassName: h(o.uniqueContainerClassName, O),
		uniqueContainerStyle: o.uniqueContainerStyle
	}))));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+trigger@3.9.1_766f604215423df1100d912c9c357147/node_modules/@rc-component/trigger/es/index.js
function gi(e = Lr) {
	return /* @__PURE__ */ q.forwardRef((t, n) => {
		let { prefixCls: r = "rc-trigger-popup", children: i, action: a = "hover", showAction: o, hideAction: s, popupVisible: c, defaultPopupVisible: l, onOpenChange: u, afterOpenChange: d, onPopupVisibleChange: f, afterPopupVisibleChange: p, mouseEnterDelay: m, mouseLeaveDelay: g = .1, focusDelay: _, blurDelay: v, mask: y, maskClosable: b = !0, getPopupContainer: x, forceRender: S, autoDestroy: w, popup: T, popupClassName: D, uniqueContainerClassName: O, uniqueContainerStyle: k, popupStyle: A, popupPlacement: j, builtinPlacements: N = {}, popupAlign: P, zIndex: I, stretch: ee, getPopupClassNameFromAlign: te, fresh: ne, unique: L, alignPoint: R, onPopupClick: ie, onPopupAlign: z, arrow: ae, popupMotion: se, maskMotion: ce, mobile: le, ...B } = t, V = w || !1, ue = c === void 0, de = !!le, U = q.useRef({}), fe = q.useContext(Gr), me = q.useMemo(() => ({ registerSubPopup: (e, t) => {
			U.current[e] = t, fe?.registerSubPopup(e, t);
		} }), [fe]), W = q.useContext(Kr), ge = oe(), [_e, ve] = q.useState(null), G = q.useRef(null), ye = M((e) => {
			G.current = e, he(e) && _e !== e && ve(e), fe?.registerSubPopup(ge, e);
		}), [J, be] = q.useState(null), xe = q.useRef(null), Se = M((e) => {
			let t = E(e);
			he(t) && J !== t && (be(t), xe.current = t);
		}), Ce = {}, we = M((e) => {
			let t = J;
			return t?.contains(e) || C(t)?.host === e || e === t || _e?.contains(e) || C(_e)?.host === e || e === _e || Object.values(U.current).some((t) => t?.contains(e) || e === t);
		}), Te = ae ? { ...ae === !0 ? {} : ae } : null, [De, Oe] = H(l || !1, c), Y = De || !1, ke = q.useMemo(() => {
			let e = typeof i == "function" ? i({ open: Y }) : i;
			return q.Children.only(e);
		}, [i, Y]), Ae = ke?.props || {}, je = M(() => Y), Me = M((e = 0) => ({
			popup: T,
			target: J,
			delay: e,
			prefixCls: r,
			popupClassName: D,
			uniqueContainerClassName: O,
			uniqueContainerStyle: k,
			popupStyle: A,
			popupPlacement: j,
			builtinPlacements: N,
			popupAlign: P,
			zIndex: I,
			mask: y,
			maskClosable: b,
			popupMotion: se,
			maskMotion: ce,
			arrow: Te,
			getPopupContainer: x,
			getPopupClassNameFromAlign: te,
			id: ge,
			onEsc: Ie
		}));
		re(() => {
			W && L && J && !ue && !fe && (Y ? W.show(Me(m), je) : W.hide(g));
		}, [Y, J]);
		let Ne = q.useRef(Y);
		Ne.current = Y;
		let Pe = M((e) => {
			(0, K.flushSync)(() => {
				Y !== e && (Oe(e), u?.(e), f?.(e));
			});
		}), X = li(), Fe = (e, t = 0) => {
			if (c !== void 0) {
				X(() => {
					Pe(e);
				}, t);
				return;
			}
			if (W && L && ue && !fe) {
				e ? W.show(Me(t), je) : W.hide(t);
				return;
			}
			X(() => {
				Pe(e);
			}, t);
		};
		function Ie({ top: e }) {
			e && Fe(!1);
		}
		let [Le, Re] = q.useState(!1);
		re((e) => {
			(!e || Y) && Re(!0);
		}, [Y]);
		let [ze, Be] = q.useState(null), [Ve, He] = q.useState(null), Ue = (e) => {
			He([e.clientX, e.clientY]);
		}, [We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et] = ci(Y, _e, R && Ve !== null ? Ve : J, j, N, P, z, de), [tt, nt] = Jr(a, o, s), rt = tt.has("click"), it = nt.has("click") || nt.has("contextMenu"), at = M(() => {
			Le || et();
		});
		ui(Y, J, _e, at, () => {
			Ne.current && R && it && Fe(!1);
		}), re(() => {
			at();
		}, [Ve, j]), re(() => {
			Y && !N?.[j] && at();
		}, [JSON.stringify(P)]);
		let ot = q.useMemo(() => h(Xr(N, r, $e, R), te?.($e)), [
			$e,
			te,
			N,
			r,
			R
		]);
		q.useImperativeHandle(n, () => ({
			nativeElement: xe.current,
			popupElement: G.current,
			forceAlign: at
		}));
		let [Z, st] = q.useState(0), [ct, lt] = q.useState(0), ut = () => {
			if (ee && J) {
				let e = J.getBoundingClientRect();
				st(e.width), lt(e.height);
			}
		}, dt = () => {
			ut(), at();
		}, ft = (e) => {
			Re(!1), et(), d?.(e), p?.(e);
		}, pt = () => new Promise((e) => {
			ut(), Be(() => e);
		});
		re(() => {
			ze && (et(), ze(), Be(null));
		}, [ze]);
		function mt(e, t, n, r, i) {
			Ce[e] = (a, ...o) => {
				(!i || !i()) && (r?.(a), Fe(t, n)), Ae[e]?.(a, ...o);
			};
		}
		let ht = tt.has("touch"), gt = nt.has("touch"), _t = q.useRef(!1);
		(ht || gt) && (Ce.onTouchStart = (...e) => {
			_t.current = !0, Ne.current && gt ? Fe(!1) : !Ne.current && ht && Fe(!0), Ae.onTouchStart?.(...e);
		}), (rt || it) && (Ce.onClick = (e, ...t) => {
			Ne.current && it ? Fe(!1) : !Ne.current && rt && (Ue(e), Fe(!0)), Ae.onClick?.(e, ...t), _t.current = !1;
		});
		let vt = di(Y, it || gt, J, _e, y, b, we, Fe), yt = tt.has("hover"), bt = nt.has("hover"), xt, St, Ct = () => _t.current;
		if (yt) {
			let e = (e) => {
				Ue(e);
			};
			mt("onMouseEnter", !0, m, e, Ct), mt("onPointerEnter", !0, m, e, Ct), xt = (e) => {
				(Y || Le) && _e?.contains(e.target) && Fe(!0, m);
			}, R && (Ce.onMouseMove = (e) => {
				Ae.onMouseMove?.(e);
			});
		}
		bt && (mt("onMouseLeave", !1, g, void 0, Ct), mt("onPointerLeave", !1, g, void 0, Ct), St = () => {
			Fe(!1, g);
		}), tt.has("focus") && mt("onFocus", !0, _), nt.has("focus") && mt("onBlur", !1, v), tt.has("contextMenu") && (Ce.onContextMenu = (e, ...t) => {
			Ne.current && nt.has("contextMenu") ? Fe(!1) : (Ue(e), Fe(!0)), e.preventDefault(), Ae.onContextMenu?.(e, ...t);
		});
		let wt = q.useRef(!1);
		wt.current ||= S || Y || Le;
		let Tt = {
			...Ae,
			...Ce
		}, Et = {};
		[
			"onContextMenu",
			"onClick",
			"onMouseDown",
			"onTouchStart",
			"onMouseEnter",
			"onMouseLeave",
			"onFocus",
			"onBlur"
		].forEach((e) => {
			B[e] && (Et[e] = (...t) => {
				Tt[e]?.(...t), B[e](...t);
			});
		});
		let Dt = {
			x: Ye,
			y: Xe
		};
		Ee(Y, J, dt);
		let Ot = pe(Se, F(ke)), kt = /*#__PURE__*/ q.cloneElement(ke, {
			...Tt,
			...Et,
			ref: Ot
		});
		return /*#__PURE__*/ q.createElement(q.Fragment, null, kt, wt.current && (!W || !L) && /*#__PURE__*/ q.createElement(Gr.Provider, { value: me }, /*#__PURE__*/ q.createElement(Wr, {
			portal: e,
			ref: ye,
			prefixCls: r,
			popup: T,
			className: h(D, !de && ot),
			style: A,
			target: J,
			onMouseEnter: xt,
			onMouseLeave: St,
			onPointerEnter: xt,
			zIndex: I,
			open: Y,
			keepDom: Le,
			fresh: ne,
			onClick: ie,
			onPointerDownCapture: vt,
			mask: y,
			motion: se,
			maskMotion: ce,
			onVisibleChanged: ft,
			onPrepare: pt,
			forceRender: S,
			autoDestroy: V,
			getPopupContainer: x,
			onEsc: Ie,
			align: $e,
			arrow: Te,
			arrowPos: Dt,
			ready: We,
			offsetX: Ge,
			offsetY: Ke,
			offsetR: qe,
			offsetB: Je,
			onAlign: at,
			stretch: ee,
			targetWidth: Z / Ze,
			targetHeight: ct / Qe,
			mobile: le
		})));
	});
}
var _i = gi(Lr);
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/reactNode.js
function vi(e) {
	return e && /*#__PURE__*/ q.isValidElement(e) && e.type === q.Fragment;
}
var yi = (e, t, n) => /*#__PURE__*/ q.isValidElement(e) ? /*#__PURE__*/ q.cloneElement(e, On(n) ? n(e.props || {}) : n) : t;
function bi(e, t) {
	return yi(e, e, t);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js
var xi = ({ children: e }) => {
	let { getPrefixCls: t } = q.useContext(X), n = t();
	return /*#__PURE__*/ q.isValidElement(e) ? /*#__PURE__*/ q.createElement(Sn, {
		visible: !0,
		motionName: `${n}-fade`,
		motionAppear: !0,
		motionEnter: !0,
		motionLeave: !1,
		removeOnLeave: !1
	}, ({ style: t, className: n }) => bi(e, (e) => ({
		className: h(e.className, n),
		style: {
			...e.style,
			...t
		}
	}))) : e;
}, Si = [null, null];
function Ci(e) {
	if (Si[0] !== e) {
		let t = {};
		Object.keys(e).forEach((n) => {
			t[n] = {
				...e[n],
				dynamicInset: !1
			};
		}), Si[0] = e, Si[1] = t;
	}
	return Si[1];
}
var wi = ({ children: e }) => /*#__PURE__*/ q.createElement(hi, { postTriggerProps: (e) => {
	let { id: t, builtinPlacements: n, popup: r } = e, i = On(r) ? r() : r, a = Ci(n);
	return {
		...e,
		getPopupContainer: null,
		arrow: !1,
		popup: /*#__PURE__*/ q.createElement(xi, { key: t }, i),
		builtinPlacements: a
	};
} }, e), Ti = /*#__PURE__*/ q.createContext(!1), Ei = ({ children: e, disabled: t }) => {
	let n = q.useContext(Ti);
	return /*#__PURE__*/ q.createElement(Ti.Provider, { value: t ?? n }, e);
}, Di = /*#__PURE__*/ q.createContext(void 0), Oi = ({ children: e, size: t }) => {
	let n = q.useContext(Di);
	return /*#__PURE__*/ q.createElement(Di.Provider, { value: t || n }, e);
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/config-provider/hooks/useConfig.js
function ki() {
	return {
		componentDisabled: (0, q.useContext)(Ti),
		componentSize: (0, q.useContext)(Di)
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/config-provider/hooks/useTheme.js
function Ai(e, t, n) {
	Hn("ConfigProvider");
	let r = e || {}, i = r.inherit === !1 || !t ? {
		...it,
		hashed: t?.hashed ?? it.hashed,
		cssVar: t?.cssVar
	} : t, a = (0, q.useId)();
	return _e(() => {
		if (!e) return t;
		let o = { ...i.components };
		Object.keys(e.components || {}).forEach((t) => {
			o[t] = {
				...o[t],
				...e.components[t]
			};
		});
		let s = `css-var-${a.replace(/:/g, "")}`, c = {
			prefix: n?.prefixCls,
			...i.cssVar,
			...r.cssVar,
			key: r.cssVar?.key || s
		};
		return {
			...i,
			...r,
			token: {
				...i.token,
				...r.token
			},
			components: o,
			cssVar: c
		};
	}, [r, i], (e, t) => e.some((e, n) => {
		let r = t[n];
		return !l(e, r, !0);
	}));
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/config-provider/MotionWrapper.js
var ji = /*#__PURE__*/ q.createContext(!0);
function Mi(e) {
	let t = q.useContext(ji), { children: n } = e, [, r] = ft(), { motion: i } = r, a = q.useRef(!1);
	return a.current ||= t !== i, a.current ? /*#__PURE__*/ q.createElement(ji.Provider, { value: i }, /*#__PURE__*/ q.createElement(Mt, { motion: i }, n)) : n;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/config-provider/PropWarning.js
var Ni = () => null, Pi = /* @__PURE__ */ e({
	ConfigConsumer: () => Fe,
	ConfigContext: () => X,
	Variants: () => Pe,
	configConsumerProps: () => Ii,
	default: () => qi,
	defaultIconPrefixCls: () => Ne,
	defaultPrefixCls: () => "ant",
	globalConfig: () => Gi,
	warnContext: () => null
}), Fi = ({ iconPrefixCls: e, csp: t }) => (At(e, t), null), Ii = [
	"getTargetContainer",
	"getPopupContainer",
	"rootPrefixCls",
	"getPrefixCls",
	"renderEmpty",
	"csp",
	"autoInsertSpaceInButton",
	"locale"
], Li = [
	"getTargetContainer",
	"getPopupContainer",
	"renderEmpty",
	"input",
	"pagination",
	"form",
	"select",
	"button"
], Ri, zi, Bi, Vi;
function Hi() {
	return Ri || "ant";
}
function Ui() {
	return zi || "anticon";
}
var Wi = (e) => {
	let { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: i } = e;
	t !== void 0 && (Ri = t), n !== void 0 && (zi = n), "holderRender" in e && (Vi = i), r && (Bi = r);
}, Gi = () => ({
	getPrefixCls: (e, t) => t || (e ? `${Hi()}-${e}` : Hi()),
	getIconPrefixCls: Ui,
	getRootPrefixCls: () => Ri || Hi(),
	getTheme: () => Bi,
	holderRender: Vi
}), Ki = (e) => {
	let { children: t, csp: n, autoInsertSpaceInButton: i, alert: a, affix: o, anchor: s, app: c, form: l, locale: u, componentSize: f, direction: p, space: m, splitter: h, virtual: g, dropdownMatchSelectWidth: _, popupMatchSelectWidth: v, popupOverflow: y, legacyLocale: b, parentContext: x, iconPrefixCls: S, theme: C, componentDisabled: w, segmented: T, statistic: E, spin: D, calendar: O, carousel: k, cascader: j, collapse: M, typography: N, checkbox: P, descriptions: F, divider: I, drawer: ee, skeleton: ne, steps: L, image: re, layout: R, list: ie, mentions: z, modal: ae, progress: oe, result: se, slider: ce, breadcrumb: le, masonry: B, menu: V, pagination: H, input: ue, inputPassword: de, inputSearch: U, textArea: fe, otp: pe, empty: me, badge: W, borderBeam: he, radio: ge, rate: ve, ribbon: G, switch: K, transfer: ye, avatar: J, message: be, tag: xe, table: Se, card: Ce, cardMeta: we, tabs: Te, timeline: Ee, timePicker: De, upload: Oe, notification: Y, tree: ke, colorPicker: Ae, datePicker: je, rangePicker: Me, flex: Ne, wave: Pe, dropdown: Fe, warning: Ie, tour: Le, tooltip: Re, popover: ze, popconfirm: Be, qrcode: Ve, floatButton: He, floatButtonGroup: Ue, variant: We, inputNumber: Ke, treeSelect: qe, watermark: Je } = e, Ye = q.useMemo(() => Dn(u) && Object.prototype.hasOwnProperty.call(u, "default") && u.default?.locale ? u.default : u, [u]), Xe = q.useCallback((t, n) => {
		let { prefixCls: r } = e;
		if (n) return n;
		let i = r || x.getPrefixCls("");
		return t ? `${i}-${t}` : i;
	}, [x.getPrefixCls, e.prefixCls]), Ze = S || x.iconPrefixCls || "anticon", Qe = n || x.csp, $e = Ai(C, x.theme, { prefixCls: Xe("") }), et = {
		csp: Qe,
		autoInsertSpaceInButton: i,
		alert: a,
		affix: o,
		anchor: s,
		app: c,
		locale: Ye || b,
		direction: p,
		space: m,
		splitter: h,
		virtual: g,
		popupMatchSelectWidth: v ?? _,
		popupOverflow: y,
		getPrefixCls: Xe,
		iconPrefixCls: Ze,
		theme: $e,
		segmented: T,
		statistic: E,
		spin: D,
		calendar: O,
		carousel: k,
		cascader: j,
		collapse: M,
		typography: N,
		checkbox: P,
		descriptions: F,
		divider: I,
		drawer: ee,
		skeleton: ne,
		steps: L,
		image: re,
		input: ue,
		inputPassword: de,
		inputSearch: U,
		textArea: fe,
		otp: pe,
		layout: R,
		list: ie,
		mentions: z,
		modal: ae,
		progress: oe,
		result: se,
		slider: ce,
		breadcrumb: le,
		masonry: B,
		menu: V,
		pagination: H,
		empty: me,
		badge: W,
		borderBeam: he,
		radio: ge,
		rate: ve,
		ribbon: G,
		switch: K,
		transfer: ye,
		avatar: J,
		message: be,
		tag: xe,
		table: Se,
		card: Ce,
		cardMeta: we,
		tabs: Te,
		timeline: Ee,
		timePicker: De,
		upload: Oe,
		notification: Y,
		tree: ke,
		colorPicker: Ae,
		datePicker: je,
		rangePicker: Me,
		flex: Ne,
		wave: Pe,
		dropdown: Fe,
		warning: Ie,
		tour: Le,
		tooltip: Re,
		popover: ze,
		popconfirm: Be,
		qrcode: Ve,
		floatButton: He,
		floatButtonGroup: Ue,
		variant: We,
		inputNumber: Ke,
		treeSelect: qe,
		watermark: Je
	}, tt = { ...x };
	Object.keys(et).forEach((e) => {
		et[e] !== void 0 && (tt[e] = et[e]);
	}), Li.forEach((t) => {
		let n = e[t];
		n && (tt[t] = n);
	}), i !== void 0 && (tt.button = {
		autoInsertSpace: i,
		...tt.button
	});
	let nt = _e(() => tt, tt, (e, t) => {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length !== r.length || n.some((n) => e[n] !== t[n]);
	}), { layer: it } = q.useContext(te), ot = q.useMemo(() => ({
		prefixCls: Ze,
		csp: Qe,
		layer: it ? "antd" : void 0
	}), [
		Ze,
		Qe,
		it
	]), Z = /*#__PURE__*/ q.createElement(q.Fragment, null, /*#__PURE__*/ q.createElement(Fi, {
		iconPrefixCls: Ze,
		csp: Qe
	}), /*#__PURE__*/ q.createElement(Ni, { dropdownMatchSelectWidth: _ }), t), st = q.useMemo(() => d(cr.Form?.defaultValidateMessages || {}, nt.locale?.Form?.defaultValidateMessages || {}, nt.form?.validateMessages || {}, l?.validateMessages || {}), [nt, l?.validateMessages]);
	Object.keys(st).length > 0 && (Z = /*#__PURE__*/ q.createElement(Jn.Provider, { value: st }, Z)), Ye && (Z = /*#__PURE__*/ q.createElement(vr, {
		locale: Ye,
		_ANT_MARK__: _r
	}, Z)), (Ze || Qe) && (Z = /*#__PURE__*/ q.createElement(A.Provider, { value: ot }, Z)), f && (Z = /*#__PURE__*/ q.createElement(Oi, { size: f }, Z)), Z = /*#__PURE__*/ q.createElement(Mi, null, Z), Re?.unique && (Z = /*#__PURE__*/ q.createElement(wi, null, Z));
	let ct = q.useMemo(() => {
		let { algorithm: e, token: t, components: n, cssVar: i, ...a } = $e || {}, o = e && (!Array.isArray(e) || e.length > 0) ? r(e) : rt, s = {};
		Object.entries(n || {}).forEach(([e, t]) => {
			let n = { ...t };
			"algorithm" in n && (n.algorithm === !0 ? n.theme = o : (Array.isArray(n.algorithm) || On(n.algorithm)) && (n.theme = r(n.algorithm)), delete n.algorithm), s[e] = n;
		});
		let c = {
			...Ge,
			...t
		};
		return {
			...a,
			theme: o,
			token: c,
			components: s,
			override: {
				override: c,
				...s
			},
			cssVar: i
		};
	}, [$e]);
	return C && (Z = /*#__PURE__*/ q.createElement(at.Provider, { value: ct }, Z)), nt.warning && (Z = /*#__PURE__*/ q.createElement(Vn.Provider, { value: nt.warning }, Z)), w !== void 0 && (Z = /*#__PURE__*/ q.createElement(Ei, { disabled: w }, Z)), /*#__PURE__*/ q.createElement(X.Provider, { value: nt }, Z);
}, qi = (e) => {
	let t = q.useContext(X), n = q.useContext(mr);
	return /*#__PURE__*/ q.createElement(Ki, {
		parentContext: t,
		legacyLocale: n,
		...e
	});
};
qi.ConfigContext = X, qi.SizeContext = Di, qi.config = Wi, qi.useConfig = ki, Object.defineProperty(qi, "SizeContext", { get: () => Di });
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/hooks/useListPosition/useSizes.js
function Ji() {
	let [e, t] = q.useState({});
	return [e, q.useCallback((e, n) => {
		if (!n) {
			t((t) => {
				if (!(e in t)) return t;
				let n = { ...t };
				return delete n[e], n;
			});
			return;
		}
		let r = {
			width: n.offsetWidth,
			height: n.offsetHeight
		};
		t((t) => {
			let n = t[e];
			return n && n.width === r.width && n.height === r.height ? t : {
				...t,
				[e]: r
			};
		});
	}, [])];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/hooks/useListPosition/index.js
function Yi(e, t, n = 0) {
	let [r, i] = Ji(), [a, o, s, c] = q.useMemo(() => {
		let i = 0, a = 0, o = t?.threshold ?? 0, s = /* @__PURE__ */ new Map(), c, l;
		return e.slice().reverse().forEach((e, u) => {
			let d = String(e.key), f = r[d]?.height ?? 0, p = t && u > 0 ? i + (t.offset ?? 0) - f : i;
			s.set(d, p), u === 0 && (c = f, l = r[d]?.width ?? 0), (!t || u < o) && (a = Math.max(a, p + f)), t ? i = p + f : i += f + n;
		}), [
			s,
			a,
			c,
			l
		];
	}, [
		e,
		n,
		r,
		t
	]);
	return [
		a,
		i,
		o,
		s,
		c
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/hooks/useStack.js
var Xi = 8, Zi = 3, Qi = (e) => {
	let t = {
		offset: Xi,
		threshold: Zi
	};
	return e && typeof e == "object" && (t.offset = e.offset ?? Xi, t.threshold = e.threshold ?? Zi), [!!e, t];
};
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/hooks/useNoticeTimer.js
function $i(e, t, n) {
	let r = Math.max(typeof e == "number" ? e : 0, 0) * 1e3, a = M(t), o = M(n), [s, c] = q.useState(r > 0), l = q.useRef(0), u = q.useRef(null);
	function d() {
		let e = Date.now(), t = u.current;
		t !== null && (l.current += e - t), u.current = e;
	}
	let f = q.useCallback(() => {
		d(), c(!1);
	}, []), p = q.useCallback(() => {
		r > 0 ? (u.current = Date.now(), c(!0)) : o(0);
	}, [r]);
	return q.useEffect(() => {
		l.current = 0, c(r > 0);
	}, [r]), q.useEffect(() => {
		if (!s) return;
		let e = null;
		function t() {
			d(), l.current >= r ? (o(1), a()) : (o(Math.min(l.current / r, 1)), e = i(t));
		}
		return t(), () => {
			i.cancel(e);
		};
	}, [r, s]), [p, f];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/hooks/useClosable.js
function ea(e) {
	let t = q.useMemo(() => e === !1 ? {
		closeIcon: null,
		disabled: !0
	} : typeof e == "object" && e ? e : {}, [e]), n = q.useMemo(() => ({
		...t,
		closeIcon: "closeIcon" in t ? t.closeIcon : "×",
		disabled: t.disabled ?? !1
	}), [t]), r = q.useMemo(() => u(n, !0), [n]);
	return [
		!!e,
		n,
		r
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/Progress.js
var ta = ({ className: e, style: t, percent: n }) => /*#__PURE__*/ q.createElement("progress", {
	className: e,
	max: "100",
	value: n,
	style: t
});
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/Notification.js
function na() {
	return na = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, na.apply(this, arguments);
}
var ra = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { prefixCls: n, className: r, style: i, classNames: a, styles: o, components: s, title: c, description: l, icon: u, actions: d, role: f, closable: p, offset: m, notificationIndex: g, stackInThreshold: _, props: v, duration: y = 4.5, showProgress: b, hovering: x, pauseOnHover: S = !0, onClick: C, onMouseEnter: w, onMouseLeave: T, onClose: E } = e, [D, O] = q.useState(0), k = `${n}-notice`, [A, j, N] = ea(p), P = M(() => {
		j.onClose?.(), E?.();
	}), [F, I] = q.useState(!1), [ee, te] = $i(y, P, O), ne = 100 - Math.min(Math.max(D * 100, 0), 100), L = s?.progress || ta;
	q.useEffect(() => {
		S && (x ? te() : F || ee());
	}, [
		x,
		F,
		te,
		ee,
		S
	]);
	function re(e) {
		I(!0), S && te(), w?.(e);
	}
	function R(e) {
		I(!1), S && !x && ee(), T?.(e);
	}
	function ie(e) {
		e.preventDefault(), e.stopPropagation(), P();
	}
	let z = q.useRef(m);
	m !== void 0 && (z.current = m);
	let ae = q.useRef(g);
	g !== void 0 && (ae.current = g);
	let oe = m ?? z.current, se = g ?? ae.current ?? 0, ce = c == null ? null : /*#__PURE__*/ q.createElement("div", {
		className: h(`${k}-title`, a?.title),
		style: o?.title
	}, c), le = l == null ? null : /*#__PURE__*/ q.createElement("div", {
		className: h(`${k}-description`, a?.description),
		style: o?.description
	}, l), B = ce !== null, V = le !== null, H = null;
	H = B && V ? /*#__PURE__*/ q.createElement("div", {
		className: h(`${k}-section`, a?.section),
		style: o?.section
	}, ce, le) : ce || le, u != null && (H = /*#__PURE__*/ q.createElement("div", {
		className: h(`${k}-wrapper`, a?.wrapper),
		style: o?.wrapper
	}, /*#__PURE__*/ q.createElement("div", {
		className: h(`${k}-icon`, a?.icon),
		style: o?.icon
	}, u), H));
	let ue = d ? /*#__PURE__*/ q.createElement("div", {
		className: h(`${k}-actions`, a?.actions),
		style: o?.actions
	}, d) : null, de = {
		"--notification-index": se,
		...o?.root,
		...i
	};
	oe !== void 0 && (de["--notification-y"] = `${oe}px`);
	let U = f ?? v?.role ?? "alert";
	return /*#__PURE__*/ q.createElement("div", na({}, v, {
		ref: t,
		role: U,
		"data-notification-index": se,
		className: h(k, r, a?.root, {
			[`${k}-closable`]: A,
			[`${k}-stack-in-threshold`]: _
		}),
		style: de,
		onClick: C,
		onMouseEnter: re,
		onMouseLeave: R
	}), H, ue, A && /*#__PURE__*/ q.createElement("button", na({
		className: h(`${k}-close`, a?.close),
		"aria-label": "Close"
	}, N, {
		style: o?.close,
		onClick: ie
	}), j.closeIcon), b && typeof y == "number" && y > 0 && /*#__PURE__*/ q.createElement(L, {
		className: h(`${k}-progress`, a?.progress),
		percent: ne,
		style: o?.progress
	}));
}), ia = /*#__PURE__*/ q.createContext({}), aa = ({ children: e, classNames: t }) => {
	let n = q.useMemo(() => ({ classNames: t }), [t]);
	return /*#__PURE__*/ q.createElement(ia.Provider, { value: n }, e);
};
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/NotificationList/Content.js
function oa() {
	return oa = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, oa.apply(this, arguments);
}
var sa = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { listPrefixCls: n, height: r, topNoticeHeight: i = 0, topNoticeWidth: a = 0, className: o, style: s, ...c } = e, l = `${n}-content`, u = q.useRef(r), d = r < u.current ? "decrease" : "increase";
	u.current = r;
	let f = {
		...s,
		height: r,
		"--top-notificiation-height": `${i}px`,
		"--top-notificiation-width": `${a}px`
	};
	return /*#__PURE__*/ q.createElement("div", oa({}, c, {
		className: h(l, `${l}-${d}`, o),
		style: f,
		ref: t
	}));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+notification@_1cdc218814e15e072466cf500683ac4c/node_modules/@rc-component/notification/es/NotificationList/index.js
function ca() {
	return ca = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ca.apply(this, arguments);
}
var la = [
	"wrapper",
	"root",
	"icon",
	"section",
	"title",
	"description",
	"actions",
	"close",
	"progress"
];
function ua(e) {
	return la.reduce((t, n) => (t[n] = h(...e.map((e) => e?.[n])), t), {});
}
function da(e) {
	return la.reduce((t, n) => (t[n] = Object.assign({}, ...e.map((e) => e?.[n])), t), {});
}
function fa(e, t) {
	let n = String(t), r = e.findIndex((e) => e.key === n);
	if (r !== -1) return e.length - r - 1;
}
var pa = (e) => {
	let { config: t, components: n, contextClassNames: r, classNames: i, styles: a, className: o, style: s, nodeRef: c, listHovering: l, stackEnabled: u, pauseOnHover: d, setNodeSize: f, onNoticeClose: p, ...m } = e, { key: g, placement: _, ...v } = t, y = String(g), b = pe(c, q.useCallback((e) => {
		f(y, e);
	}, [f, y]));
	return /*#__PURE__*/ q.createElement(ra, ca({}, v, m, {
		ref: b,
		className: h(r?.notice, t.className, o),
		style: {
			...s,
			...t.style
		},
		classNames: ua([i, t.classNames]),
		styles: da([a, t.styles]),
		components: {
			...n,
			...t.components
		},
		hovering: u && l,
		pauseOnHover: t.pauseOnHover ?? d,
		onClose: () => {
			t.onClose?.(), p?.(g);
		}
	}));
}, ma = (e) => {
	let { configList: t = [], prefixCls: n = "rc-notification", pauseOnHover: r, classNames: i, styles: a, components: o, stack: s, motion: c, placement: l, className: u, style: d, onNoticeClose: f, onAllRemoved: p } = e, { classNames: m } = q.useContext(ia), g = q.useMemo(() => t.map((e) => ({
		config: e,
		key: String(e.key)
	})), [t]), _ = typeof c == "function" ? c(l) : c, [v, { offset: y, threshold: b }] = Qi(s), [x, S] = q.useState(!1), C = v && (x || g.length <= b), w = q.useMemo(() => {
		if (!(!v || C)) return {
			offset: y,
			threshold: b
		};
	}, [
		C,
		y,
		v,
		b
	]), [T, E] = q.useState(0), D = q.useRef(null), [O, k, A, j, M] = Yi(t, w, T), N = !!t.length;
	q.useEffect(() => {
		let e = D.current;
		if (!e) return;
		let { gap: t, rowGap: n } = window.getComputedStyle(e), r = parseFloat(n || t) || 0;
		E((e) => e === r ? e : r);
	}, [N]);
	let P = `${n}-list`;
	return /*#__PURE__*/ q.createElement("div", {
		className: h(n, P, `${n}-${l}`, m?.list, u, i?.list, {
			[`${n}-stack`]: v,
			[`${n}-stack-expanded`]: C,
			[`${P}-hovered`]: x
		}),
		onMouseEnter: () => {
			S(!0);
		},
		onMouseLeave: () => {
			S(!1);
		},
		style: {
			...a?.list,
			...d
		}
	}, /*#__PURE__*/ q.createElement(sa, {
		listPrefixCls: P,
		height: A,
		topNoticeHeight: j,
		topNoticeWidth: M,
		className: i?.listContent,
		style: a?.listContent,
		ref: D
	}, /*#__PURE__*/ q.createElement(xn, ca({
		component: !1,
		keys: g,
		motionAppear: !0
	}, _, { onAllRemoved: () => {
		l && p?.(l);
	} }), ({ config: e, className: t, style: s }, c) => {
		let { key: l } = e, u = String(l), d = fa(g, l), p = v && d !== void 0 && d < b;
		return /*#__PURE__*/ q.createElement(pa, {
			key: l,
			config: e,
			components: o,
			contextClassNames: m,
			classNames: i,
			styles: a,
			className: t,
			style: s,
			nodeRef: c,
			prefixCls: n,
			offset: O.get(u),
			notificationIndex: d,
			stackInThreshold: p,
			listHovering: x,
			stackEnabled: v,
			pauseOnHover: r,
			setNodeSize: k,
			onNoticeClose: f
		});
	})));
}, ha = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { prefixCls: n = "rc-notification", container: r, motion: i, maxCount: a, pauseOnHover: o, classNames: s, styles: c, components: l, className: u, style: d, onAllRemoved: f, stack: p, renderNotifications: m } = e, [h, g] = q.useState([]), [_, v] = q.useState({}), y = q.useRef(!1);
	q.useImperativeHandle(t, () => ({
		open: (e) => {
			g((t) => {
				let n = [...t], r = n.findIndex((t) => t.key === e.key), i = { ...e };
				return r >= 0 ? (i.times = (t[r]?.times ?? 0) + 1, n[r] = i) : (i.times = 0, n.push(i)), a && a > 0 && n.length > a && (n = n.slice(-a)), n;
			});
		},
		close: (e) => {
			g((t) => t.filter((t) => t.key !== e));
		},
		destroy: () => {
			g([]);
		}
	})), q.useEffect(() => {
		let e = {};
		h.forEach((t) => {
			let n = t.placement ?? "topRight";
			e[n] = e[n] || [], e[n].push(t);
		}), Object.keys(_).forEach((t) => {
			e[t] = e[t] || [];
		}), v(e);
	}, [h]);
	let b = M((e) => {
		v((t) => {
			let n = { ...t };
			return (n[e] || []).length || delete n[e], n;
		});
	});
	if (q.useEffect(() => {
		Object.keys(_).length > 0 ? y.current = !0 : y.current &&= (f?.(), !1);
	}, [_, f]), !r) return null;
	let x = Object.keys(_);
	return /*#__PURE__*/ (0, K.createPortal)(/*#__PURE__*/ q.createElement(q.Fragment, null, x.map((e) => {
		let t = /*#__PURE__*/ q.createElement(ma, {
			key: e,
			configList: _[e],
			placement: e,
			prefixCls: n,
			pauseOnHover: o,
			classNames: s,
			styles: c,
			components: l,
			className: u?.(e),
			style: d?.(e),
			motion: i,
			stack: p,
			onNoticeClose: (e) => {
				g((t) => t.filter((t) => t.key !== e));
			},
			onAllRemoved: b
		});
		return m ? /*#__PURE__*/ q.cloneElement(m(t, {
			prefixCls: n,
			key: e
		}), { key: e }) : t;
	})), r);
}), ga = () => document.body, _a = 0;
function va(...e) {
	let t = {};
	return e.forEach((e) => {
		e && Object.keys(e).forEach((n) => {
			let r = e[n];
			r !== void 0 && (t[n] = r);
		});
	}), t;
}
function ya(e = {}) {
	let { getContainer: t = ga, motion: n, prefixCls: r, placement: i, closable: a, duration: o, showProgress: s, pauseOnHover: c, classNames: l, styles: u, components: d, maxCount: f, className: p, style: m, onAllRemoved: h, stack: g, renderNotifications: _ } = e, v = {
		placement: i,
		closable: a,
		duration: o,
		showProgress: s
	}, [y, b] = q.useState(), x = q.useRef(null), [S, C] = q.useState([]), w = /*#__PURE__*/ q.createElement(ha, {
		container: y,
		ref: x,
		prefixCls: r,
		motion: n,
		maxCount: f,
		pauseOnHover: c,
		classNames: l,
		styles: u,
		components: d,
		className: p,
		style: m,
		onAllRemoved: h,
		stack: g,
		renderNotifications: _
	}), T = M((e) => {
		let t = va(v, e);
		(t.key === null || t.key === void 0) && (t.key = `rc-notification-${_a}`, _a += 1), C((e) => [...e, {
			type: "open",
			config: t
		}]);
	}), E = q.useMemo(() => ({
		open: T,
		close: (e) => {
			C((t) => [...t, {
				type: "close",
				key: e
			}]);
		},
		destroy: () => {
			C((e) => [...e, { type: "destroy" }]);
		}
	}), []);
	return q.useEffect(() => {
		b(t());
	}), q.useEffect(() => {
		x.current && S.length && (S.forEach((e) => {
			switch (e.type) {
				case "open":
					x.current?.open(e.config);
					break;
				case "close":
					x.current?.close(e.key);
					break;
				case "destroy":
					x.current?.destroy();
					break;
			}
		}), C((e) => {
			let t = e.filter((e) => !S.includes(e));
			return t.length === e.length ? e : t;
		}));
	}, [S]), [E, w];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/notification/hooks/useStackConfig.js
var ba = (e, t) => q.useMemo(() => {
	let n = e ?? t;
	return n ? {
		...Dn(t) ? t : {},
		...Dn(n) ? n : {}
	} : !1;
}, [e, t]);
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/notification/util.js
function xa(e, t) {
	return {
		...Cn(e) && { "--notification-top": L(e) },
		...Cn(t) && { "--notification-bottom": L(t) }
	};
}
function Sa(e) {
	return { motionName: `${e}-fade` };
}
function Ca(e, t, n) {
	return e === void 0 ? t?.closeIcon === void 0 ? n?.closeIcon : t.closeIcon : e;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/fallbackProp.js
function wa(...e) {
	return e.find((e) => e !== void 0);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/hooks/useAllowClear.js
var Ta = (e) => {
	let { allowClear: t, clearIcon: n, contextAllowClear: r, contextClearIcon: i, defaultAllowClear: a, componentName: o } = e;
	return (0, q.useMemo)(() => t ?? r ?? a ? {
		clearIcon: wa(Dn(t) ? t?.clearIcon : n, Dn(r) ? r?.clearIcon : i, /*#__PURE__*/ q.createElement(R, null)),
		disabled: (Dn(t) ? t?.disabled : void 0) ?? (Dn(r) ? r?.disabled : void 0)
	} : !1, [
		t,
		n,
		r,
		i,
		a
	]);
}, Ea = (e) => {
	if (!e) return;
	let { closable: t, closeIcon: n } = e;
	return {
		closable: t,
		closeIcon: n
	};
}, Da = {}, Oa = (e, t) => {
	if (!e && (e === !1 || t === !1 || t === null)) return !1;
	if (!Cn(e) && !Cn(t)) return null;
	let n = { closeIcon: typeof t != "boolean" && Cn(t) ? t : void 0 };
	return Dn(e) && (n = {
		...n,
		...e
	}), n;
}, ka = (e, t, n) => e === !1 ? !1 : e ? G(n, t, e) : t === !1 ? !1 : t ? G(n, t) : n.closable ? n : !1, Aa = (e, t, n) => {
	let { closeIconRender: r } = t, { closeIcon: i, ...a } = e, o = i, s = u(a, !0);
	return Cn(o) && (r && (o = r(o)), o = /*#__PURE__*/ q.isValidElement(o) ? /*#__PURE__*/ q.cloneElement(o, {
		"aria-label": n,
		...o.props,
		...s
	}) : /*#__PURE__*/ q.createElement("span", {
		"aria-label": n,
		...s
	}, o)), [o, s];
}, ja = (e, t, n = Da, r = "Close") => {
	let i = Oa(e?.closable, e?.closeIcon), a = Oa(t?.closable, t?.closeIcon), o = {
		closeIcon: /*#__PURE__*/ q.createElement(O, null),
		...n
	}, s = ka(i, a, o), c = typeof s == "boolean" ? !1 : !!s?.disabled;
	if (s === !1) return [
		!1,
		null,
		c,
		{}
	];
	let [l, u] = Aa(s, o, r);
	return [
		!0,
		l,
		c,
		u
	];
}, Ma = (e, t, n = Da) => {
	let [r] = hr("global", cr.global);
	return q.useMemo(() => ja(e, t, {
		closeIcon: /*#__PURE__*/ q.createElement(O, null),
		...n
	}, r.close), [
		e,
		t,
		n,
		r.close
	]);
}, Na = () => q.useReducer((e) => e + 1, 0), Pa = (e, t) => {
	let n = {};
	return Dn(e) && (n = e), typeof e == "boolean" && (n = { enabled: e }), n.closable === void 0 && t !== void 0 && (n.closable = t), n;
}, Fa = (e, t, n, r) => (0, q.useMemo)(() => {
	let i = Pa(e, r), a = Pa(t), o = {
		blur: !1,
		...a,
		...i,
		closable: i.closable ?? r ?? a.closable ?? !0
	}, s = o.blur ? `${n}-mask-blur` : void 0;
	return [
		o.enabled !== !1,
		{ mask: s },
		!!o.closable
	];
}, [
	e,
	t,
	n,
	r
]), Ia = (e) => {
	let [t, n] = (0, q.useState)(null);
	return [(0, q.useCallback)((r, i, a) => {
		let o = t ?? r, s = Math.min(o || 0, r), c = Math.max(o || 0, r), l = i.slice(s, c + 1).map(e), u = l.some((e) => !a.has(e)), d = [];
		return l.forEach((e) => {
			u ? (a.has(e) || d.push(e), a.add(e)) : (a.delete(e), d.push(e));
		}), n(u ? c : null), d;
	}, [t]), n];
}, La = (e) => e === "horizontal" || e === "vertical", Ra = (e, t, n) => (0, q.useMemo)(() => {
	let r = La(e), i;
	return i = r ? e : typeof t == "boolean" ? t ? "vertical" : "horizontal" : La(n) ? n : "horizontal", [i, i === "vertical"];
}, [
	n,
	e,
	t
]), za = () => {
	let [e, t] = q.useState([]);
	return [e, q.useCallback((e) => (t((t) => [].concat(m(t), [e])), () => {
		t((t) => t.filter((t) => t !== e));
	}), [])];
}, Ba = (e, t) => (e._antProxy = e._antProxy || {}, Object.keys(t).forEach((n) => {
	if (!(n in e._antProxy)) {
		let r = e[n];
		e._antProxy[n] = r, e[n] = t[n];
	}
}), e), Va = (e, t) => (0, q.useImperativeHandle)(e, () => {
	let e = t(), { nativeElement: n } = e;
	return typeof Proxy < "u" ? new Proxy(n, { get(t, n) {
		return e[n] ? e[n] : Reflect.get(t, n);
	} }) : Ba(n, e);
}), Ha = (e) => {
	let t = q.useRef(e), [, n] = Na();
	return [() => t.current, (e) => {
		t.current = e, n();
	}];
}, Ua = /*#__PURE__*/ q.createContext(void 0), Wa = 100, Ga = Wa * 10, Ka = {
	Modal: Wa,
	Drawer: Wa,
	Popover: Wa,
	Popconfirm: Wa,
	Tooltip: Wa,
	Tour: Wa,
	FloatButton: Wa
}, qa = {
	SelectLike: 50,
	Dropdown: 50,
	DatePicker: 50,
	Menu: 50,
	ImagePreview: 1
}, Ja = (e) => e in Ka, Ya = (e, t) => {
	let [, n] = ft(), r = q.useContext(Ua), i = Ja(e), a;
	if (t !== void 0) a = [t, t];
	else {
		let o = r ?? 0;
		i ? o += (r ? 0 : n.zIndexPopupBase) + Ka[e] : o += qa[e], a = [r === void 0 ? t : o, o];
	}
	return a;
}, Xa = (e) => {
	let { motionDurationMid: t, motionEaseInOut: n } = e, r = `${t} ${n}`;
	return {
		transform: "scale(var(--notification-scale, 1))",
		transition: [
			"transform",
			"inset",
			"clip-path",
			"opacity"
		].map((e) => `${e} ${r}`).join(", ")
	};
}, Za = (e, t) => {
	let { componentCls: n, antCls: r, colorSuccess: i, colorInfo: a, colorWarning: o, colorError: s, colorTextHeading: c, colorText: l, boxShadow: u, borderRadiusLG: d, fontSize: f, lineHeight: p, notificationBg: m, notificationPadding: h, notificationMarginEdge: g, margin: _, calc: v } = e, y = `${n}-notice`, [b, x] = Ot(r, "notification");
	return {
		[y]: {
			position: "absolute",
			width: t.width,
			maxWidth: `calc(100vw - ${L(v(g).mul(2).equal())})`,
			padding: h,
			pointerEvents: "auto",
			[b("icon-font-size")]: t.iconFontSize,
			[b("title-font-size")]: t.titleFontSize,
			[b("title-line-height")]: t.titleLineHeight,
			boxSizing: "border-box",
			color: l,
			background: m,
			borderRadius: d,
			boxShadow: u,
			fontSize: f,
			lineHeight: p,
			wordWrap: "break-word",
			overflow: "visible",
			...Xa(e),
			...t.noticeStyle,
			"&::after": {
				position: "absolute",
				insetInline: 0,
				top: v(_).mul(-1).equal(),
				height: _,
				content: "\"\""
			},
			...t.typeStyle && {
				"&-success": { background: x("color-success-bg", m) },
				"&-error": { background: x("color-error-bg", m) },
				"&-info": { background: x("color-info-bg", m) },
				"&-warning": { background: x("color-warning-bg", m) }
			}
		},
		[`${y}-wrapper`]: {
			display: "flex",
			...t.contentStyle
		},
		[`${y}-title`]: {
			color: c,
			fontSize: x("title-font-size"),
			lineHeight: x("title-line-height")
		},
		[`${y}-icon`]: {
			flex: "none",
			fontSize: x("icon-font-size"),
			lineHeight: 1,
			[`&${y}-icon-success`]: { color: i },
			[`&${y}-icon-info, &${y}-icon-loading`]: { color: a },
			[`&${y}-icon-warning`]: { color: o },
			[`&${y}-icon-error`]: { color: s }
		}
	};
}, Qa = (e) => {
	let { componentCls: t, progressBg: n, notificationProgressHeight: r, fontSize: i, borderRadiusLG: a, width: o, notificationIconSize: s, colorText: c, motionDurationMid: l, fontSizeLG: u, lineHeightLG: d, marginSM: f, marginXS: p, paddingLG: m, notificationPaddingVertical: h, notificationPaddingHorizontal: g, notificationCloseButtonSize: _, colorIcon: v, borderRadiusSM: y, colorIconHover: b, colorBgTextHover: x, colorBgTextActive: S } = e, C = `${t}-notice`;
	return {
		...Za(e, {
			width: o,
			iconFontSize: s,
			titleFontSize: u,
			titleLineHeight: d,
			contentStyle: {
				alignItems: "flex-start",
				gap: f
			},
			typeStyle: !0
		}),
		[`${C}-section`]: {
			display: "flex",
			flexDirection: "column",
			flex: "auto",
			gap: p,
			minWidth: 0
		},
		[`${C}-description`]: {
			color: c,
			fontSize: i
		},
		[`${C}-closable`]: {
			[`${C}-title, ${C}-description`]: { paddingInlineEnd: m },
			[`${C}-title + ${C}-description`]: { paddingInlineEnd: 0 }
		},
		[`${C}-close`]: {
			position: "absolute",
			top: h,
			insetInlineEnd: g,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: _,
			height: _,
			color: v,
			background: "none",
			border: "none",
			borderRadius: y,
			outline: "none",
			transition: ["color", "background-color"].map((e) => `${e} ${l}`).join(", "),
			"&:hover": {
				color: b,
				backgroundColor: x
			},
			"&:active": { backgroundColor: S },
			...bt(e)
		},
		[`${C}-progress`]: {
			position: "absolute",
			bottom: 0,
			display: "block",
			appearance: "none",
			inlineSize: `calc(100% - ${L(a)} * 2)`,
			blockSize: r,
			border: 0,
			left: {
				_skip_check_: !0,
				value: a
			},
			right: {
				_skip_check_: !0,
				value: a
			},
			"&, &::-webkit-progress-bar": {
				borderRadius: a,
				backgroundColor: "rgba(0, 0, 0, 0.04)"
			},
			"&::-moz-progress-bar": { background: n },
			"&::-webkit-progress-value": {
				borderRadius: a,
				background: n
			}
		},
		[`${C}-actions`]: {
			float: "right",
			marginTop: f
		}
	};
}, $a = (e) => {
	let { componentCls: t, width: n } = e, r = `${t}-notice`, i = `${r}-actions`, a = Qa(e);
	return { [`${r}-pure-panel`]: {
		width: n,
		maxWidth: "100%",
		...a,
		[r]: {
			...a[r],
			position: "relative",
			width: "100%",
			maxWidth: "100%"
		},
		[i]: {
			...a[i],
			float: "none",
			textAlign: "end"
		}
	} };
}, eo = (e) => {
	let { componentCls: t } = e;
	return { [t]: Qa(e) };
}, to = [
	"top",
	"topLeft",
	"topRight",
	"bottom",
	"bottomLeft",
	"bottomRight"
], no = "--notification-margin-edge", ro = (e, t) => ({
	blockEnd: e === "top" ? "bottom" : "top",
	inlineEnd: t === "left" ? "right" : "left"
}), io = (e) => `translate3d(${e?.x ?? "0"}, ${e?.y ?? "0"}, 0) scale(var(--notification-scale, 1))`, ao = (e, t) => {
	let n = e.startsWith("bottom") ? "bottom" : "top", r = e.endsWith("Right") ? "right" : "left", { blockEnd: i, inlineEnd: a } = ro(n, r), o = e === "top" || e === "bottom", s = e === "top" || e.endsWith("Left") ? `-${t}` : t;
	return {
		placement: e,
		vertical: n,
		blockEnd: i,
		horizontal: r,
		inlineEnd: a,
		motionOffset: o ? {
			x: "-50%",
			y: s
		} : { x: s },
		baseMotionOffset: o ? { x: "-50%" } : void 0,
		isCenterPlacement: o
	};
}, oo = (e) => e === "bottom" ? "column-reverse" : "column", so = (e) => {
	let t = `var(${no}, 0px)`;
	return `calc(var(--notification-${e}, ${t}) - ${t})`;
}, co = (e) => e === "bottom" ? "center top" : "center bottom", lo = (e) => L(e.calc(e.marginXXL).mul(-1).equal()), uo = (e) => {
	let t = lo(e);
	return `inset(${t} ${t} ${t} ${t})`;
}, fo = (e, t) => {
	let n = lo(e);
	return t === "bottom" ? `inset(${n} ${n} 50% ${n})` : `inset(50% ${n} ${n} ${n})`;
}, po = (e, t) => {
	let { componentCls: n } = e, { placement: r, vertical: i, blockEnd: a, horizontal: o, inlineEnd: s, isCenterPlacement: c } = t, l = `${n}-notice`, u = `${l}${n}-fade`, d = io(t.motionOffset), f = io(t.baseMotionOffset), p = co(i);
	return { [`&${n}-${r}`]: {
		[i]: so(i),
		[a]: "auto",
		display: "flex",
		flexDirection: oo(i),
		...c ? {
			marginInline: 0,
			left: "50%",
			right: "auto",
			transform: "translateX(-50%)"
		} : {
			[o]: 0,
			[s]: "auto"
		},
		[l]: {
			[i]: "var(--notification-y, 0)",
			...c ? {
				left: "50%",
				transform: f
			} : { [o]: "var(--notification-x, 0)" },
			transformOrigin: p
		},
		[`${u}-appear-prepare, ${u}-enter-prepare`]: {
			opacity: 0,
			transform: d,
			transition: "none"
		},
		[`${u}-appear-start, ${u}-enter-start`]: {
			opacity: 0,
			transform: d
		},
		[`${u}-appear-active, ${u}-enter-active`]: {
			opacity: 1,
			transform: f
		},
		[`${u}-leave-start`]: {
			opacity: 1,
			transform: f
		},
		[`${u}-leave-active`]: {
			opacity: 0,
			transform: d
		},
		[`&${n}-stack:not(${n}-stack-expanded)`]: {
			[l]: { clipPath: fo(e, i) },
			[`${l}[data-notification-index='0']`]: { clipPath: uo(e) }
		}
	} };
}, mo = (e, t = to) => {
	let { notificationMotionOffset: n } = e, r = L(n);
	return { ...t.reduce((t, n) => ({
		...t,
		...po(e, ao(n, r))
	}), {}) };
}, ho = (e) => {
	let { componentCls: t } = e;
	return { [t]: mo(e) };
}, go = 3, _o = (e) => ({
	zIndexPopup: e.zIndexPopupBase + Ga + 50,
	width: 384,
	progressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`,
	colorSuccessBg: void 0,
	colorErrorBg: void 0,
	colorInfoBg: void 0,
	colorWarningBg: void 0
}), vo = (e) => {
	let t = e.paddingMD, n = e.paddingLG;
	return ve(e, {
		notificationBg: e.colorBgElevated,
		notificationPaddingVertical: t,
		notificationPaddingHorizontal: n,
		notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
		notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(.55).equal(),
		notificationMarginBottom: e.margin,
		notificationPadding: `${L(e.paddingMD)} ${L(e.paddingContentHorizontalLG)}`,
		notificationMarginEdge: e.marginLG,
		notificationProgressHeight: 2,
		notificationMotionOffset: 64
	});
}, yo = (e) => `inset(${e} ${e} ${e} ${e})`, bo = (e) => {
	let { componentCls: t, motionDurationMid: n, motionDurationSlow: r, motionEaseInOut: i } = e, a = `${`${t}-list`}-content`;
	return {
		[a]: {
			position: "relative",
			display: "flex",
			flexShrink: 0,
			flexDirection: "column",
			gap: e.notificationMarginBottom,
			width: "100%",
			willChange: "height, transform",
			transition: "none",
			[`&${a}-decrease`]: { transition: `height calc(${r} * 2) ${i} ${n}` }
		},
		[`${t}-fade`]: {
			backfaceVisibility: "hidden",
			willChange: "transform, opacity"
		}
	};
}, xo = (e, t) => {
	let { componentCls: n, notificationMarginEdge: r } = e, i = "--notification-margin-edge", a = `${n}-notice`, o = `${n}-list`, s = t.listWidthKey ? e.calc(e[t.listWidthKey]).add(e.calc(r).mul(2)).equal() : "100%", c = `${a}:nth-last-child(n + ${(t.stackVisibleCount ?? go) + 1})`, l = yo(L(e.calc(e.marginXXL).mul(-1).equal()));
	return { [n]: {
		...ht(e),
		[i]: L(r),
		position: "fixed",
		zIndex: e.zIndexPopup,
		width: s,
		maxWidth: "100vw",
		height: "100vh",
		overflow: "hidden",
		overscrollBehavior: "contain",
		[`${n}-hook-holder`]: { position: "relative" },
		[`&${o}`]: {
			maxHeight: "100vh",
			padding: `var(${i})`,
			overflowX: "hidden",
			overflowY: "auto",
			overscrollBehavior: "contain",
			scrollbarWidth: "none",
			msOverflowStyle: "none",
			pointerEvents: "none",
			"&::-webkit-scrollbar": {
				display: "none",
				width: 0,
				height: 0
			}
		},
		...bo(e),
		[`&${n}-stack`]: {
			[a]: { clipPath: l },
			[`&:not(${n}-stack-expanded)`]: {
				[a]: { "--notification-scale": "calc(1 - min(var(--notification-index, 0), 2) * 0.06)" },
				[`${a}:not(${a}-stack-in-threshold)`]: {
					opacity: 0,
					pointerEvents: "none"
				},
				[c]: {
					opacity: 0,
					pointerEvents: "none"
				}
			}
		},
		"&-rtl": {
			direction: "rtl",
			[`${a}-actions`]: { float: "left" }
		}
	} };
}, So = Dt(["Notification", "PurePanel"], (e) => $a(vo(e)), _o), Co = (e, t) => {
	let n = t.itemStyle ?? eo;
	return [
		xo(e, t),
		n(e),
		ho(e)
	];
}, wo = Tt("Notification", (e) => Co(vo(e), { listWidthKey: "width" }), _o), To = (e) => {
	let t = e.calc(e.controlHeightLG).sub(e.calc(e.fontSize).mul(e.lineHeight)).div(2).equal(), n = e.paddingSM;
	return ve(vo(e), {
		notificationBg: e.contentBg,
		notificationPadding: e.contentPadding,
		notificationPaddingVertical: t,
		notificationPaddingHorizontal: n
	});
}, Eo = (e) => ({
	zIndexPopup: e.zIndexPopupBase + Ga + 10,
	contentBg: e.colorBgElevated,
	contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), Do = (e) => {
	let { fontSize: t, fontSizeLG: n, lineHeight: r } = e;
	return Za(e, {
		width: "max-content",
		iconFontSize: n,
		titleFontSize: t,
		titleLineHeight: r,
		contentStyle: {
			alignItems: "center",
			gap: e.marginXS
		},
		noticeStyle: { zIndex: 1 }
	});
}, Oo = (e) => {
	let { componentCls: t } = e, n = `${t}-notice`, r = `${t}-list-content`, { "&::after": i, ...a } = Do(e)[n], o = {
		...a,
		position: "absolute",
		zIndex: -1,
		left: "50%",
		height: e.calc(e.marginXS).mul(2).equal(),
		padding: 0,
		boxShadow: e.boxShadowTertiary,
		opacity: 0,
		pointerEvents: "none",
		transform: "translateX(-50%) translateY(100%)",
		transition: [
			`opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,
			`transform ${e.motionDurationFast} ${e.motionEaseInOut}`,
			`width ${e.motionDurationSlow} ${e.motionEaseInOut}`
		].join(", "),
		content: "\"\""
	};
	return { [t]: { [`&${t}-stack`]: {
		[r]: {
			isolation: "isolate",
			"&::before": {
				...o,
				top: `calc(var(--top-notificiation-height) - ${L(e.marginXS)})`,
				width: `calc(var(--top-notificiation-width) - ${L(e.margin)})`
			},
			"&::after": {
				...o,
				zIndex: -2,
				top: "var(--top-notificiation-height)",
				width: `calc(var(--top-notificiation-width) - ${L(e.calc(e.margin).mul(2).equal())})`
			}
		},
		[`&:not(${t}-stack-expanded)`]: { [r]: { "&::before, &::after": {
			opacity: 1,
			transform: "translateX(-50%) translateY(0)"
		} } }
	} } };
}, ko = (e) => {
	let { componentCls: t } = e, n = `${t}-notice`, r = Do(e);
	return { [`${n}-pure-panel`]: {
		width: "max-content",
		maxWidth: "100%",
		...r,
		[n]: {
			...r[n],
			position: "relative",
			width: "max-content",
			maxWidth: "100%"
		}
	} };
}, Ao = Dt(["Message", "PurePanel"], (e) => ko(To(e)), Eo), jo = (e) => ({ [e.componentCls]: Do(e) }), Mo = Tt("Message", (e) => {
	let t = To(e);
	return [Co(t, {
		stackVisibleCount: 1,
		itemStyle: jo
	}), Oo(t)];
}, Eo), No = {
	info: /*#__PURE__*/ q.createElement(se, null),
	success: /*#__PURE__*/ q.createElement(fe, null),
	error: /*#__PURE__*/ q.createElement(R, null),
	warning: /*#__PURE__*/ q.createElement(ue, null),
	loading: /*#__PURE__*/ q.createElement(V, null)
}, Po = (e, t) => t || e && No[e] || null, Fo = (e) => {
	let { prefixCls: t, className: n, style: r, type: i, icon: a, content: o, classNames: s, styles: c, ...l } = e, { getPrefixCls: u, className: d, style: f, classNames: p, styles: m } = Le("message"), g = t || u("message"), _ = `${g}-notice`, v = qn(g), [y, b] = Mo(g, v), [x, S] = Rn([p, s], [m, c], { props: e }), C = Po(i, a), w = i ? `${_}-icon-${i}` : void 0, T = {
		wrapper: h(i && `${g}-${i}`, x.wrapper),
		icon: h(w, x.icon),
		title: x.title
	}, E = {
		wrapper: S.wrapper,
		icon: S.icon,
		title: S.title
	};
	return /*#__PURE__*/ q.createElement("div", {
		className: h(`${_}-pure-panel`, y, n, b, v, x.root),
		style: S.root
	}, /*#__PURE__*/ q.createElement(Ao, { prefixCls: g }), /*#__PURE__*/ q.createElement(ra, {
		...l,
		prefixCls: g,
		className: d,
		style: {
			...f,
			...r
		},
		duration: null,
		icon: C,
		title: o,
		classNames: T,
		styles: E
	}));
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/message/util.js
function Io(e, t) {
	return { motionName: t ?? `${e}-fade` };
}
function Lo(e) {
	let t, n = new Promise((n) => {
		t = e(() => {
			n(!0);
		});
	}), r = () => {
		t?.();
	};
	return r.then = (e, t) => n.then(e, t), r.promise = n, r;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/message/useMessage.js
var Ro = 8, zo = 3, Bo = !1, Vo = ({ children: e, prefixCls: t }) => {
	let n = qn(t), [r, i] = Mo(t, n);
	return /*#__PURE__*/ q.createElement(aa, { classNames: { list: h(r, i, n) } }, e);
}, Ho = (e, { prefixCls: t, key: n }) => /*#__PURE__*/ q.createElement(Vo, {
	prefixCls: t,
	key: n
}, e), Uo = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { top: n, prefixCls: r, getContainer: i, maxCount: a, duration: o = zo, rtl: s, classNames: c, styles: l, transitionName: u, pauseOnHover: d = !0, stack: f, onAllRemoved: p } = e, { getPrefixCls: m, direction: g, getPopupContainer: _ } = Le("message"), { message: v } = q.useContext(X), y = r || m("message"), [b, x] = Rn([v?.classNames, c], [v?.styles, l], { props: e }), [S, C] = ya({
		prefixCls: y,
		style: () => xa(n ?? Ro),
		className: () => h({ [`${y}-rtl`]: s ?? g === "rtl" }),
		motion: () => Io(y, u),
		closable: !1,
		duration: o,
		getContainer: () => i?.() || _?.() || document.body,
		maxCount: a,
		onAllRemoved: p,
		classNames: b,
		styles: x,
		renderNotifications: Ho,
		pauseOnHover: d,
		stack: ba(f, Bo)
	});
	return q.useImperativeHandle(t, () => ({
		...S,
		prefixCls: y,
		message: v
	})), C;
}), Wo = 0;
function Go(e) {
	let t = q.useRef(null);
	return Hn("Message"), [q.useMemo(() => {
		let n = (e) => {
			t.current?.close(e);
		}, r = (r) => {
			if (!t.current) {
				let e = () => {};
				return e.then = () => {}, e;
			}
			let { open: i, prefixCls: a, message: o } = t.current, s = o?.className || {}, c = o?.style || {}, l = `${a}-notice`, { content: u, icon: d, type: f, key: p, className: m, style: g, onClose: _, classNames: v = {}, styles: y = {}, ...b } = r, x = p;
			Cn(x) || (Wo += 1, x = `antd-message-${Wo}`);
			let S = {
				...e,
				...r
			}, C = Ln(v, { props: S }), w = Ln(y, { props: S }), T = Po(f, d), E = f ? `${l}-icon-${f}` : void 0;
			return Lo((e) => (i({
				...b,
				key: x,
				icon: T,
				title: u,
				classNames: {
					...C,
					wrapper: h(f && `${a}-${f}`, C.wrapper),
					icon: h(E, C.icon)
				},
				styles: w,
				placement: "top",
				className: h({ [`${l}-${f}`]: f }, m, s),
				style: {
					...c,
					...g
				},
				onClose: () => {
					_?.(), e();
				}
			}), () => {
				n(x);
			}));
		}, i = {
			open: r,
			destroy: (e) => {
				e === void 0 ? t.current?.destroy() : n(e);
			}
		};
		return [
			"info",
			"success",
			"warning",
			"error",
			"loading"
		].forEach((e) => {
			i[e] = (t, n, i) => {
				let a;
				a = Dn(t) && "content" in t ? t : { content: t };
				let o, s;
				return On(n) ? s = n : (o = n, s = i), r({
					onClose: s,
					duration: o,
					...a,
					type: e
				});
			};
		}), i;
	}, []), /*#__PURE__*/ q.createElement(Uo, {
		key: "message-holder",
		...e,
		ref: t
	})];
}
function Ko(e) {
	return Go(e);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/motion.js
var qo = () => ({
	height: 0,
	opacity: 0
}), Jo = (e) => ({
	height: e?.scrollHeight ?? 0,
	opacity: +!!e
}), Yo = (e) => ({ height: e?.offsetHeight ?? 0 }), Xo = (e, t) => t?.deadline === !0 || jn(t) && t.propertyName === "height", Zo = (e = "ant") => ({
	motionName: `${e}-motion-collapse`,
	onAppearStart: qo,
	onEnterStart: qo,
	onAppearActive: Jo,
	onEnterActive: Jo,
	onLeaveStart: Yo,
	onLeaveActive: qo,
	onAppearEnd: Xo,
	onEnterEnd: Xo,
	onLeaveEnd: Xo,
	motionDeadline: 500
}), Qo = (e, t, n) => n === void 0 ? `${e}-${t}` : n, $o = Et("Wave", (e) => {
	let { componentCls: t, colorPrimary: n, motionDurationSlow: r, motionEaseInOut: i, motionEaseOutCirc: a, antCls: o } = e, [, s] = Ot(o, "wave");
	return { [t]: {
		position: "absolute",
		background: "transparent",
		pointerEvents: "none",
		boxSizing: "border-box",
		color: s("color", n),
		boxShadow: "0 0 0 0 currentcolor",
		opacity: .2,
		"&.wave-motion-appear": {
			transition: ["box-shadow 0.4s", "opacity 2s"].map((e) => `${e} ${a}`).join(","),
			"&-active": {
				boxShadow: "0 0 0 6px currentcolor",
				opacity: 0
			},
			"&.wave-quick": { transition: ["box-shadow", "opacity"].map((e) => `${e} ${r} ${i}`).join(",") }
		}
	} };
}), es = "ant-wave-target", ts = (e) => e ? En(e) && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/i.test(e) && !/^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i.test(e) && e !== "transparent" && e !== "canvastext" : !1;
function ns(e, t = null) {
	let n = getComputedStyle(e), { borderTopColor: r, borderColor: i, backgroundColor: a } = n;
	return t && ts(n[t]) ? n[t] : [
		r,
		i,
		a
	].find(ts) ?? null;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/wave/WaveEffect.js
function rs(e) {
	return Number.isNaN(e) ? 0 : e;
}
var is = (e) => {
	let { className: t, target: n, component: r, colorSource: a } = e, o = q.useRef(null), { getPrefixCls: s } = q.useContext(X), [l] = Ot(s(), "wave"), [u, d] = q.useState(null), [f, p] = q.useState([]), [m, g] = q.useState(0), [_, v] = q.useState(0), [y, b] = q.useState(0), [x, S] = q.useState(0), [C, w] = q.useState(!1), T = {
		left: m,
		top: _,
		width: y,
		height: x,
		borderRadius: f.map((e) => `${e}px`).join(" ")
	};
	u && (T[l("color")] = u);
	function E() {
		let e = getComputedStyle(n);
		d(ns(n, a));
		let t = e.position === "static", { borderLeftWidth: r, borderTopWidth: i } = e;
		g(t ? n.offsetLeft : rs(-Number.parseFloat(r))), v(t ? n.offsetTop : rs(-Number.parseFloat(i))), b(n.offsetWidth), S(n.offsetHeight);
		let { borderTopLeftRadius: o, borderTopRightRadius: s, borderBottomLeftRadius: c, borderBottomRightRadius: l } = e;
		p([
			o,
			s,
			l,
			c
		].map((e) => rs(Number.parseFloat(e))));
	}
	if (q.useEffect(() => {
		if (n) {
			let e = i(() => {
				E(), w(!0);
			}), t;
			return typeof ResizeObserver < "u" && (t = new ResizeObserver(E), t.observe(n)), () => {
				i.cancel(e), t?.disconnect();
			};
		}
	}, [n]), !C) return null;
	let D = (r === "Checkbox" || r === "Radio") && n?.classList.contains(es);
	return /*#__PURE__*/ q.createElement(Sn, {
		visible: !0,
		motionAppear: !0,
		motionName: "wave-motion",
		motionDeadline: 5e3,
		onAppearEnd: (e, t) => {
			if (t.deadline || jn(t) && t.propertyName === "opacity") {
				let e = o.current?.parentElement;
				c(e).then(() => {
					e?.remove();
				});
			}
			return !1;
		}
	}, ({ className: e }, n) => /*#__PURE__*/ q.createElement("div", {
		ref: ce(o, n),
		className: h(t, e, { "wave-quick": D }),
		style: T
	}));
}, as = (e, t) => {
	let { component: n } = t;
	if (n === "Checkbox" && !e.querySelector("input")?.checked) return;
	let r = document.createElement("div");
	r.style.position = "absolute", r.style.left = "0px", r.style.top = "0px", e?.insertBefore(r, e?.firstChild), v(/*#__PURE__*/ q.createElement(is, {
		...t,
		target: e
	}), r);
}, os = (e, t, n, r) => {
	let { wave: a } = q.useContext(X), [, o, s] = ft(), c = M((i) => {
		let c = e.current;
		if (a?.disabled || !c) return;
		let l = c.querySelector(`.${es}`) || c, { showEffect: u } = a || {};
		(u || as)(l, {
			className: t,
			token: o,
			component: n,
			event: i,
			hashId: s,
			colorSource: r
		});
	}), l = q.useRef(null);
	return q.useEffect(() => () => {
		i.cancel(l.current);
	}, []), (e) => {
		i.cancel(l.current), l.current = i(() => {
			c(e);
		});
	};
}, ss = {
	click: "click",
	mousedown: "mousedown",
	mouseup: "mouseup",
	pointerdown: "pointerdown",
	pointerup: "pointerup"
}, cs = (e) => {
	let { children: t, disabled: n, component: r, colorSource: i } = e, { getPrefixCls: a, wave: o } = (0, q.useContext)(X), s = (0, q.useRef)(null), c = a("wave"), l = os(s, h(c, $o(c)), r, i);
	return q.useEffect(() => {
		let e = s.current;
		if (!e || e.nodeType !== window.Node.ELEMENT_NODE || n) return;
		let t = (t) => {
			!j(t.target) || !e.getAttribute || e.getAttribute("disabled") || e.disabled || e.className.includes("disabled") && !e.className.includes("disabled:") || e.getAttribute("aria-disabled") === "true" || e.className.includes("-leave") || l(t);
		}, r = o?.triggerType, i = r && r in ss ? ss[r] : "click";
		return e.addEventListener(i, t, !0), () => {
			e.removeEventListener(i, t, !0);
		};
	}, [n, o?.triggerType]), /*#__PURE__*/ q.isValidElement(t) ? bi(t, { ref: w(t) ? ce(F(t), s) : s }) : t ?? null;
}, ls = (e) => {
	let t = q.useContext(Di);
	return q.useMemo(() => e ? En(e) ? e ?? t : On(e) ? e(t) : t : t, [e, t]);
}, us = Tt(["Space", "Compact"], (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		display: "inline-flex",
		"&-block": {
			display: "flex",
			width: "100%"
		},
		"&-vertical": { flexDirection: "column" },
		"&-rtl": { direction: "rtl" }
	} };
}, () => ({}), { resetStyle: !1 }), ds = /*#__PURE__*/ q.createContext(null), fs = (e, t) => {
	let n = q.useContext(ds), r = q.useMemo(() => {
		if (!n) return "";
		let { compactDirection: r, isFirstItem: i, isLastItem: a } = n, o = r === "vertical" ? "-vertical-" : "-";
		return h(`${e}-compact${o}item`, {
			[`${e}-compact${o}first-item`]: i,
			[`${e}-compact${o}last-item`]: a,
			[`${e}-compact${o}item-rtl`]: t === "rtl"
		});
	}, [
		e,
		t,
		n
	]);
	return {
		compactSize: n?.compactSize,
		compactDirection: n?.compactDirection,
		compactItemClassnames: r
	};
}, ps = (e) => {
	let { children: t } = e;
	return /*#__PURE__*/ q.createElement(ds.Provider, { value: null }, t);
}, ms = (e) => {
	let { children: t, ...n } = e;
	return /*#__PURE__*/ q.createElement(ds.Provider, { value: q.useMemo(() => n, [n]) }, t);
}, hs = (e) => {
	let { getPrefixCls: t, direction: n } = q.useContext(X), { size: r, direction: i, orientation: a, block: o, prefixCls: s, className: c, rootClassName: l, children: u, vertical: d, ...f } = e, [p, m] = Ra(a, d, i), g = ls((e) => r ?? e), _ = t("space-compact", s), [v] = us(_), y = h(_, v, {
		[`${_}-rtl`]: n === "rtl",
		[`${_}-block`]: o,
		[`${_}-vertical`]: m
	}, c, l), b = q.useContext(ds), x = W(u), S = q.useMemo(() => x.map((e, t) => {
		let n = e?.key || `${_}-item-${t}`;
		return /*#__PURE__*/ q.createElement(ms, {
			key: n,
			compactSize: g,
			compactDirection: p,
			isFirstItem: t === 0 && (!b || b?.isFirstItem),
			isLastItem: t === x.length - 1 && (!b || b?.isLastItem)
		}, e);
	}), [
		x,
		b,
		p,
		g,
		_
	]);
	return x.length === 0 ? null : /*#__PURE__*/ q.createElement("div", {
		className: y,
		...f
	}, S);
}, gs = /*#__PURE__*/ q.createContext(void 0), _s = (e) => {
	let { getPrefixCls: t, direction: n } = q.useContext(X), { prefixCls: r, size: i, className: a, ...o } = e, s = t("btn-group", r), [, , c] = ft(), l = q.useMemo(() => {
		switch (i) {
			case "large": return "lg";
			case "small": return "sm";
			default: return "";
		}
	}, [i]), u = h(s, {
		[`${s}-${l}`]: l,
		[`${s}-rtl`]: n === "rtl"
	}, a, c);
	return /*#__PURE__*/ q.createElement(gs.Provider, { value: i }, /*#__PURE__*/ q.createElement("div", {
		...o,
		className: u
	}));
}, vs = /^[\u4E00-\u9FA5]{2}$/, ys = vs.test.bind(vs);
function bs(e) {
	return e === "danger" ? { danger: !0 } : { type: e };
}
function xs(e) {
	return e === "text" || e === "link";
}
function Ss(e, t, n, r) {
	if (!wn(e)) return;
	let i = t ? " " : "";
	return !En(e) && !Tn(e) && En(e.type) && ys(e.props.children) ? bi(e, (e) => {
		let t = h(e.className, r) || void 0, a = {
			...n,
			...e.style
		};
		return {
			...e,
			children: e.children.split("").join(i),
			className: t,
			style: a
		};
	}) : En(e) ? /*#__PURE__*/ q.createElement("span", {
		className: r,
		style: n
	}, ys(e) ? e.split("").join(i) : e) : vi(e) ? /*#__PURE__*/ q.createElement("span", {
		className: r,
		style: n
	}, e) : bi(e, (e) => ({
		...e,
		className: h(e.className, r) || void 0,
		style: {
			...e.style,
			...n
		}
	}));
}
function Cs(e, t, n, r) {
	let i = !1, a = [];
	return q.Children.forEach(e, (e) => {
		let t = En(e) || Tn(e);
		if (i && t) {
			let t = a.length - 1;
			a[t] = `${a[t]}${e}`;
		} else a.push(e);
		i = t;
	}), q.Children.map(a, (e) => Ss(e, t, n, r));
}
var ws = [
	"outlined",
	"dashed",
	"solid",
	"filled",
	"text",
	"link"
], Ts = [
	"default",
	"primary",
	"danger"
].concat(m(Re)), Es = /*#__PURE__*/ (0, q.forwardRef)((e, t) => {
	let { className: n, style: r, children: i, prefixCls: a } = e, o = h(`${a}-icon`, n);
	return /*#__PURE__*/ q.createElement("span", {
		ref: t,
		className: o,
		style: r
	}, i);
}), Ds = /*#__PURE__*/ (0, q.forwardRef)((e, t) => {
	let { prefixCls: n, className: r, style: i, iconClassName: a } = e, o = h(`${n}-loading-icon`, r);
	return /*#__PURE__*/ q.createElement(Es, {
		prefixCls: n,
		className: o,
		style: i,
		ref: t
	}, /*#__PURE__*/ q.createElement(V, { className: a }));
}), Os = () => ({
	width: 0,
	opacity: 0,
	transform: "scale(0)"
}), ks = (e) => ({
	width: e.scrollWidth,
	opacity: 1,
	transform: "scale(1)"
}), As = (e) => {
	let { prefixCls: t, loading: n, existIcon: r, className: i, style: a, mount: o } = e, s = !!n;
	return r ? /*#__PURE__*/ q.createElement(Ds, {
		prefixCls: t,
		className: i,
		style: a
	}) : /*#__PURE__*/ q.createElement(Sn, {
		visible: s,
		motionName: `${t}-loading-icon-motion`,
		motionAppear: !o,
		motionEnter: !o,
		motionLeave: !o,
		removeOnLeave: !0,
		onAppearStart: Os,
		onAppearActive: ks,
		onEnterStart: Os,
		onEnterActive: ks,
		onLeaveStart: ks,
		onLeaveActive: Os
	}, ({ className: e, style: n }, r) => {
		let o = {
			...a,
			...n
		};
		return /*#__PURE__*/ q.createElement(Ds, {
			prefixCls: t,
			className: h(i, e),
			style: o,
			ref: r
		});
	});
}, js = (e) => {
	let { componentCls: t, antCls: n, motionDurationMid: r, motionEaseInOut: i } = e;
	return { [t]: {
		[`${n}-motion-collapse-legacy`]: {
			overflow: "hidden",
			"&-active": { transition: `${["height", "opacity"].map((e) => `${e} ${r} ${i}`).join(", ")} !important` }
		},
		[`${n}-motion-collapse`]: {
			overflow: "hidden",
			transition: `${["height", "opacity"].map((e) => `${e} ${r} ${i}`).join(", ")} !important`
		}
	} };
}, Ms = (e) => ({
	animationDuration: e,
	animationFillMode: "both"
}), Ns = (e, t, n, r, i = !1) => {
	let a = i ? "&" : "";
	return {
		[`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: {
			...Ms(r),
			animationPlayState: "paused"
		},
		[`${a}${e}-leave`]: {
			...Ms(r),
			animationPlayState: "paused"
		},
		[`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
			animationName: t,
			animationPlayState: "running"
		},
		[`${a}${e}-leave${e}-leave-active`]: {
			animationName: n,
			animationPlayState: "running",
			pointerEvents: "none"
		}
	};
}, Ps = new x("antFadeIn", {
	"0%": { opacity: 0 },
	"100%": { opacity: 1 }
}), Fs = new x("antFadeOut", {
	"0%": { opacity: 1 },
	"100%": { opacity: 0 }
}), Is = (e, t = !1) => {
	let { antCls: n } = e, r = `${n}-fade`, i = t ? "&" : "";
	return [Ns(r, Ps, Fs, e.motionDurationMid, t), {
		[`
        ${i}${r}-enter,
        ${i}${r}-appear
      `]: {
			opacity: 0,
			animationTimingFunction: "linear"
		},
		[`${i}${r}-leave`]: { animationTimingFunction: "linear" }
	}];
}, Ls = new x("antMoveDownIn", {
	"0%": {
		transform: "translate3d(0, 100%, 0)",
		transformOrigin: "0 0",
		opacity: 0
	},
	"100%": {
		transform: "translate3d(0, 0, 0)",
		transformOrigin: "0 0",
		opacity: 1
	}
}), Rs = new x("antMoveDownOut", {
	"0%": {
		transform: "translate3d(0, 0, 0)",
		transformOrigin: "0 0",
		opacity: 1
	},
	"100%": {
		transform: "translate3d(0, 100%, 0)",
		transformOrigin: "0 0",
		opacity: 0
	}
}), zs = new x("antMoveLeftIn", {
	"0%": {
		transform: "translate3d(-100%, 0, 0)",
		transformOrigin: "0 0",
		opacity: 0
	},
	"100%": {
		transform: "translate3d(0, 0, 0)",
		transformOrigin: "0 0",
		opacity: 1
	}
}), Bs = new x("antMoveLeftOut", {
	"0%": {
		transform: "translate3d(0, 0, 0)",
		transformOrigin: "0 0",
		opacity: 1
	},
	"100%": {
		transform: "translate3d(-100%, 0, 0)",
		transformOrigin: "0 0",
		opacity: 0
	}
}), Vs = new x("antMoveRightIn", {
	"0%": {
		transform: "translate3d(100%, 0, 0)",
		transformOrigin: "0 0",
		opacity: 0
	},
	"100%": {
		transform: "translate3d(0, 0, 0)",
		transformOrigin: "0 0",
		opacity: 1
	}
}), Hs = new x("antMoveRightOut", {
	"0%": {
		transform: "translate3d(0, 0, 0)",
		transformOrigin: "0 0",
		opacity: 1
	},
	"100%": {
		transform: "translate3d(100%, 0, 0)",
		transformOrigin: "0 0",
		opacity: 0
	}
}), Us = {
	"move-up": {
		inKeyframes: new x("antMoveUpIn", {
			"0%": {
				transform: "translate3d(0, -100%, 0)",
				transformOrigin: "0 0",
				opacity: 0
			},
			"100%": {
				transform: "translate3d(0, 0, 0)",
				transformOrigin: "0 0",
				opacity: 1
			}
		}),
		outKeyframes: new x("antMoveUpOut", {
			"0%": {
				transform: "translate3d(0, 0, 0)",
				transformOrigin: "0 0",
				opacity: 1
			},
			"100%": {
				transform: "translate3d(0, -100%, 0)",
				transformOrigin: "0 0",
				opacity: 0
			}
		})
	},
	"move-down": {
		inKeyframes: Ls,
		outKeyframes: Rs
	},
	"move-left": {
		inKeyframes: zs,
		outKeyframes: Bs
	},
	"move-right": {
		inKeyframes: Vs,
		outKeyframes: Hs
	}
}, Ws = (e, t) => {
	let { antCls: n } = e, r = `${n}-${t}`, { inKeyframes: i, outKeyframes: a } = Us[t];
	return [Ns(r, i, a, e.motionDurationMid), {
		[`
        ${r}-enter,
        ${r}-appear
      `]: {
			opacity: 0,
			animationTimingFunction: e.motionEaseOutCirc
		},
		[`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc }
	}];
}, Gs = new x("antSlideUpIn", {
	"0%": {
		transform: "scaleY(0.8)",
		transformOrigin: "0% 0%",
		opacity: 0
	},
	"100%": {
		transform: "scaleY(1)",
		transformOrigin: "0% 0%",
		opacity: 1
	}
}), Ks = new x("antSlideUpOut", {
	"0%": {
		transform: "scaleY(1)",
		transformOrigin: "0% 0%",
		opacity: 1
	},
	"100%": {
		transform: "scaleY(0.8)",
		transformOrigin: "0% 0%",
		opacity: 0
	}
}), qs = new x("antSlideDownIn", {
	"0%": {
		transform: "scaleY(0.8)",
		transformOrigin: "100% 100%",
		opacity: 0
	},
	"100%": {
		transform: "scaleY(1)",
		transformOrigin: "100% 100%",
		opacity: 1
	}
}), Js = new x("antSlideDownOut", {
	"0%": {
		transform: "scaleY(1)",
		transformOrigin: "100% 100%",
		opacity: 1
	},
	"100%": {
		transform: "scaleY(0.8)",
		transformOrigin: "100% 100%",
		opacity: 0
	}
}), Ys = new x("antSlideLeftIn", {
	"0%": {
		transform: "scaleX(0.8)",
		transformOrigin: "0% 0%",
		opacity: 0
	},
	"100%": {
		transform: "scaleX(1)",
		transformOrigin: "0% 0%",
		opacity: 1
	}
}), Xs = new x("antSlideLeftOut", {
	"0%": {
		transform: "scaleX(1)",
		transformOrigin: "0% 0%",
		opacity: 1
	},
	"100%": {
		transform: "scaleX(0.8)",
		transformOrigin: "0% 0%",
		opacity: 0
	}
}), Zs = new x("antSlideRightIn", {
	"0%": {
		transform: "scaleX(0.8)",
		transformOrigin: "100% 0%",
		opacity: 0
	},
	"100%": {
		transform: "scaleX(1)",
		transformOrigin: "100% 0%",
		opacity: 1
	}
}), Qs = new x("antSlideRightOut", {
	"0%": {
		transform: "scaleX(1)",
		transformOrigin: "100% 0%",
		opacity: 1
	},
	"100%": {
		transform: "scaleX(0.8)",
		transformOrigin: "100% 0%",
		opacity: 0
	}
}), $s = {
	"slide-up": {
		inKeyframes: Gs,
		outKeyframes: Ks
	},
	"slide-down": {
		inKeyframes: qs,
		outKeyframes: Js
	},
	"slide-left": {
		inKeyframes: Ys,
		outKeyframes: Xs
	},
	"slide-right": {
		inKeyframes: Zs,
		outKeyframes: Qs
	}
}, ec = (e, t) => {
	let { antCls: n } = e, r = `${n}-${t}`, { inKeyframes: i, outKeyframes: a } = $s[t];
	return [Ns(r, i, a, e.motionDurationMid), {
		[`
      ${r}-enter,
      ${r}-appear
    `]: {
			transform: "scale(0)",
			transformOrigin: "0% 0%",
			opacity: 0,
			animationTimingFunction: e.motionEaseOutQuint,
			"&-prepare": { transform: "scale(1)" }
		},
		[`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint }
	}];
}, tc = () => ({ "@media (prefers-reduced-motion: reduce)": {
	transition: "none",
	animation: "none"
} }), nc = new x("antZoomIn", {
	"0%": {
		transform: "scale(0.2)",
		opacity: 0
	},
	"100%": {
		transform: "scale(1)",
		opacity: 1
	}
}), rc = new x("antZoomOut", {
	"0%": { transform: "scale(1)" },
	"100%": {
		transform: "scale(0.2)",
		opacity: 0
	}
}), ic = new x("antZoomBigIn", {
	"0%": {
		transform: "scale(0.8)",
		opacity: 0
	},
	"100%": {
		transform: "scale(1)",
		opacity: 1
	}
}), ac = new x("antZoomBigOut", {
	"0%": { transform: "scale(1)" },
	"100%": {
		transform: "scale(0.8)",
		opacity: 0
	}
}), oc = new x("antZoomUpIn", {
	"0%": {
		transform: "scale(0.8)",
		transformOrigin: "50% 0%",
		opacity: 0
	},
	"100%": {
		transform: "scale(1)",
		transformOrigin: "50% 0%"
	}
}), sc = new x("antZoomUpOut", {
	"0%": {
		transform: "scale(1)",
		transformOrigin: "50% 0%"
	},
	"100%": {
		transform: "scale(0.8)",
		transformOrigin: "50% 0%",
		opacity: 0
	}
}), cc = new x("antZoomLeftIn", {
	"0%": {
		transform: "scale(0.8)",
		transformOrigin: "0% 50%",
		opacity: 0
	},
	"100%": {
		transform: "scale(1)",
		transformOrigin: "0% 50%"
	}
}), lc = new x("antZoomLeftOut", {
	"0%": {
		transform: "scale(1)",
		transformOrigin: "0% 50%"
	},
	"100%": {
		transform: "scale(0.8)",
		transformOrigin: "0% 50%",
		opacity: 0
	}
}), uc = new x("antZoomRightIn", {
	"0%": {
		transform: "scale(0.8)",
		transformOrigin: "100% 50%",
		opacity: 0
	},
	"100%": {
		transform: "scale(1)",
		transformOrigin: "100% 50%"
	}
}), dc = new x("antZoomRightOut", {
	"0%": {
		transform: "scale(1)",
		transformOrigin: "100% 50%"
	},
	"100%": {
		transform: "scale(0.8)",
		transformOrigin: "100% 50%",
		opacity: 0
	}
}), fc = new x("antZoomDownIn", {
	"0%": {
		transform: "scale(0.8)",
		transformOrigin: "50% 100%",
		opacity: 0
	},
	"100%": {
		transform: "scale(1)",
		transformOrigin: "50% 100%"
	}
}), pc = new x("antZoomDownOut", {
	"0%": {
		transform: "scale(1)",
		transformOrigin: "50% 100%"
	},
	"100%": {
		transform: "scale(0.8)",
		transformOrigin: "50% 100%",
		opacity: 0
	}
}), mc = {
	zoom: {
		inKeyframes: nc,
		outKeyframes: rc
	},
	"zoom-big": {
		inKeyframes: ic,
		outKeyframes: ac
	},
	"zoom-big-fast": {
		inKeyframes: ic,
		outKeyframes: ac
	},
	"zoom-left": {
		inKeyframes: cc,
		outKeyframes: lc
	},
	"zoom-right": {
		inKeyframes: uc,
		outKeyframes: dc
	},
	"zoom-up": {
		inKeyframes: oc,
		outKeyframes: sc
	},
	"zoom-down": {
		inKeyframes: fc,
		outKeyframes: pc
	}
}, hc = (e, t) => {
	let { antCls: n } = e, r = `${n}-${t}`, { inKeyframes: i, outKeyframes: a } = mc[t];
	return [Ns(r, i, a, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
		[`
        ${r}-enter,
        ${r}-appear
      `]: {
			transform: "scale(0)",
			opacity: 0,
			animationTimingFunction: e.motionEaseOutCirc,
			"&-prepare": { transform: "none" }
		},
		[`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc }
	}];
}, gc = (e, t) => ({ [`> span, > ${e}`]: {
	"&:not(:last-child)": { [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineEndColor: t } } },
	"&:not(:first-child)": { [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineStartColor: t } } }
} }), _c = (e) => {
	let { componentCls: t, fontSize: n, lineWidth: r, groupBorderColor: i, colorErrorHover: a } = e;
	return { [`${t}-group`]: [
		{
			position: "relative",
			display: "inline-flex",
			[`> span, > ${t}`]: {
				"&:not(:last-child)": { [`&, & > ${t}`]: {
					borderStartEndRadius: 0,
					borderEndEndRadius: 0
				} },
				"&:not(:first-child)": {
					marginInlineStart: e.calc(r).mul(-1).equal(),
					[`&, & > ${t}`]: {
						borderStartStartRadius: 0,
						borderEndStartRadius: 0
					}
				}
			},
			[t]: {
				position: "relative",
				zIndex: 1,
				"&:hover, &:focus, &:active": { zIndex: 2 },
				"&[disabled]": { zIndex: 0 }
			},
			[`${t}-icon-only`]: { fontSize: n }
		},
		gc(`${t}-primary`, i),
		gc(`${t}-danger`, a)
	] };
}, vc = (e) => Math.round(Number(e || 0)), yc = (e) => {
	if (e instanceof T) return e;
	if (e && typeof e == "object" && "h" in e && "b" in e) {
		let { b: t, ...n } = e;
		return {
			...n,
			v: t
		};
	}
	return typeof e == "string" && /hsb/.test(e) ? e.replace(/hsb/, "hsv") : e;
}, bc = class extends T {
	constructor(e) {
		super(yc(e));
	}
	toHsbString() {
		let e = this.toHsb(), t = vc(e.s * 100), n = vc(e.b * 100), r = vc(e.h), i = e.a, a = `hsb(${r}, ${t}%, ${n}%)`, o = `hsba(${r}, ${t}%, ${n}%, ${i.toFixed(i === 0 ? 0 : 2)})`;
		return i === 1 ? a : o;
	}
	toHsb() {
		let { v: e, ...t } = this.toHsv();
		return {
			...t,
			b: e,
			a: this.a
		};
	}
}, xc = "rc-color-picker", Sc = (e) => e instanceof bc ? e : new bc(e), Cc = Sc("#1677ff"), wc = (e) => {
	let { offset: t, targetRef: n, containerRef: r, color: i, type: a } = e, { width: o, height: s } = r.current.getBoundingClientRect(), { width: c, height: l } = n.current.getBoundingClientRect(), u = c / 2, d = l / 2, f = (t.x + u) / o, p = 1 - (t.y + d) / s, m = i.toHsb(), h = f, g = (t.x + u) / o * 360;
	if (a) switch (a) {
		case "hue": return Sc({
			...m,
			h: g <= 0 ? 0 : g
		});
		case "alpha": return Sc({
			...m,
			a: h <= 0 ? 0 : h
		});
	}
	return Sc({
		h: m.h,
		s: f <= 0 ? 0 : f,
		b: p >= 1 ? 1 : p,
		a: m.a
	});
}, Tc = (e, t) => {
	let n = e.toHsb();
	switch (t) {
		case "hue": return {
			x: n.h / 360 * 100,
			y: 50
		};
		case "alpha": return {
			x: e.a * 100,
			y: 50
		};
		default: return {
			x: n.s * 100,
			y: (1 - n.b) * 100
		};
	}
}, Ec = ({ color: e, prefixCls: t, className: n, style: r, innerClassName: i, innerStyle: a, onClick: o }) => {
	let s = `${t}-color-block`;
	return /*#__PURE__*/ q.createElement("div", {
		className: h(s, n),
		style: r,
		onClick: o
	}, /*#__PURE__*/ q.createElement("div", {
		className: h(`${s}-inner`, i),
		style: {
			background: e,
			...a
		}
	}));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+color-picker@_11e6c9cd4b14751b4926abbd56d68616/node_modules/@rc-component/color-picker/es/hooks/useColorDrag.js
function Dc(e) {
	let t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
	return {
		pageX: t.pageX - n,
		pageY: t.pageY - r
	};
}
function Oc(e) {
	let { targetRef: t, containerRef: n, direction: r, onDragChange: i, onDragChangeComplete: a, calculate: o, color: s, disabledDrag: c } = e, [l, u] = (0, q.useState)({
		x: 0,
		y: 0
	}), d = (0, q.useRef)(null), f = (0, q.useRef)(null);
	(0, q.useEffect)(() => {
		u(o());
	}, [s]), (0, q.useEffect)(() => () => {
		document.removeEventListener("mousemove", d.current), document.removeEventListener("mouseup", f.current), document.removeEventListener("touchmove", d.current), document.removeEventListener("touchend", f.current), d.current = null, f.current = null;
	}, []);
	let p = (e) => {
		let { pageX: a, pageY: o } = Dc(e), { x: s, y: c, width: u, height: d } = n.current.getBoundingClientRect(), { width: f, height: p } = t.current.getBoundingClientRect(), m = f / 2, h = p / 2, g = Math.max(0, Math.min(a - s, u)) - m, _ = Math.max(0, Math.min(o - c, d)) - h, v = {
			x: g,
			y: r === "x" ? l.y : _
		};
		if (f === 0 && p === 0 || f !== p) return !1;
		i?.(v);
	}, m = (e) => {
		e.preventDefault(), p(e);
	}, h = (e) => {
		e.preventDefault(), document.removeEventListener("mousemove", d.current), document.removeEventListener("mouseup", f.current), document.removeEventListener("touchmove", d.current), document.removeEventListener("touchend", f.current), d.current = null, f.current = null, a?.();
	};
	return [l, (e) => {
		document.removeEventListener("mousemove", d.current), document.removeEventListener("mouseup", f.current), !c && (p(e), document.addEventListener("mousemove", m), document.addEventListener("mouseup", h), document.addEventListener("touchmove", m), document.addEventListener("touchend", h), d.current = m, f.current = h);
	}];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+color-picker@_11e6c9cd4b14751b4926abbd56d68616/node_modules/@rc-component/color-picker/es/components/Handler.js
var kc = ({ size: e = "default", color: t, prefixCls: n }) => /*#__PURE__*/ q.createElement("div", {
	className: h(`${n}-handler`, { [`${n}-handler-sm`]: e === "small" }),
	style: { backgroundColor: t }
}), Ac = ({ children: e, style: t, prefixCls: n }) => /*#__PURE__*/ q.createElement("div", {
	className: `${n}-palette`,
	style: {
		position: "relative",
		...t
	}
}, e), jc = /*#__PURE__*/ (0, q.forwardRef)((e, t) => {
	let { children: n, x: r, y: i } = e;
	return /*#__PURE__*/ q.createElement("div", {
		ref: t,
		style: {
			position: "absolute",
			left: `${r}%`,
			top: `${i}%`,
			zIndex: 1,
			transform: "translate(-50%, -50%)"
		}
	}, n);
}), Mc = ({ color: e, onChange: t, prefixCls: n, onChangeComplete: r, disabled: i }) => {
	let a = (0, q.useRef)(), o = (0, q.useRef)(), s = (0, q.useRef)(e), [c, l] = Oc({
		color: e,
		containerRef: a,
		targetRef: o,
		calculate: () => Tc(e),
		onDragChange: M((n) => {
			let r = wc({
				offset: n,
				targetRef: o,
				containerRef: a,
				color: e
			});
			s.current = r, t(r);
		}),
		onDragChangeComplete: () => r?.(s.current),
		disabledDrag: i
	});
	return /*#__PURE__*/ q.createElement("div", {
		ref: a,
		className: `${n}-select`,
		onMouseDown: l,
		onTouchStart: l
	}, /*#__PURE__*/ q.createElement(Ac, { prefixCls: n }, /*#__PURE__*/ q.createElement(jc, {
		x: c.x,
		y: c.y,
		ref: o
	}, /*#__PURE__*/ q.createElement(kc, {
		color: e.toRgbString(),
		prefixCls: n
	})), /*#__PURE__*/ q.createElement("div", {
		className: `${n}-saturation`,
		style: {
			backgroundColor: `hsl(${e.toHsb().h},100%, 50%)`,
			backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
		}
	})));
}, Nc = (e, t) => {
	let [n, r] = H(e, t);
	return [(0, q.useMemo)(() => Sc(n), [n]), r];
}, Pc = ({ colors: e, children: t, direction: n = "to right", type: r, prefixCls: i }) => {
	let a = (0, q.useMemo)(() => e.map((t, n) => {
		let i = Sc(t);
		return r === "alpha" && n === e.length - 1 && (i = new bc(i.setA(1))), i.toRgbString();
	}).join(","), [e, r]);
	return /*#__PURE__*/ q.createElement("div", {
		className: `${i}-gradient`,
		style: {
			position: "absolute",
			inset: 0,
			background: `linear-gradient(${n}, ${a})`
		}
	}, t);
}, Fc = (e) => {
	let { prefixCls: t, colors: n, disabled: r, onChange: i, onChangeComplete: a, color: o, type: s } = e, c = (0, q.useRef)(null), l = (0, q.useRef)(null), u = (0, q.useRef)(o), d = (e) => s === "hue" ? e.getHue() : e.a * 100, [f, p] = Oc({
		color: o,
		targetRef: l,
		containerRef: c,
		calculate: () => Tc(o, s),
		onDragChange: M((e) => {
			let t = wc({
				offset: e,
				targetRef: l,
				containerRef: c,
				color: o,
				type: s
			});
			u.current = t, i(d(t));
		}),
		onDragChangeComplete() {
			a(d(u.current));
		},
		direction: "x",
		disabledDrag: r
	}), m = q.useMemo(() => {
		if (s === "hue") {
			let e = o.toHsb();
			return e.s = 1, e.b = 1, e.a = 1, new bc(e);
		}
		return o;
	}, [o, s]), g = q.useMemo(() => n.map((e) => `${e.color} ${e.percent}%`), [n]);
	return /*#__PURE__*/ q.createElement("div", {
		ref: c,
		className: h(`${t}-slider`, `${t}-slider-${s}`),
		onMouseDown: p,
		onTouchStart: p
	}, /*#__PURE__*/ q.createElement(Ac, { prefixCls: t }, /*#__PURE__*/ q.createElement(jc, {
		x: f.x,
		y: f.y,
		ref: l
	}, /*#__PURE__*/ q.createElement(kc, {
		size: "small",
		color: m.toHexString(),
		prefixCls: t
	})), /*#__PURE__*/ q.createElement(Pc, {
		colors: g,
		type: s,
		prefixCls: t
	})));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+color-picker@_11e6c9cd4b14751b4926abbd56d68616/node_modules/@rc-component/color-picker/es/hooks/useComponent.js
function Ic(e) {
	return q.useMemo(() => {
		let { slider: t } = e || {};
		return [t || Fc];
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+color-picker@_11e6c9cd4b14751b4926abbd56d68616/node_modules/@rc-component/color-picker/es/ColorPicker.js
function Lc() {
	return Lc = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Lc.apply(this, arguments);
}
var Rc = [
	{
		color: "rgb(255, 0, 0)",
		percent: 0
	},
	{
		color: "rgb(255, 255, 0)",
		percent: 17
	},
	{
		color: "rgb(0, 255, 0)",
		percent: 33
	},
	{
		color: "rgb(0, 255, 255)",
		percent: 50
	},
	{
		color: "rgb(0, 0, 255)",
		percent: 67
	},
	{
		color: "rgb(255, 0, 255)",
		percent: 83
	},
	{
		color: "rgb(255, 0, 0)",
		percent: 100
	}
], zc = /* @__PURE__ */ (0, q.forwardRef)((e, t) => {
	let { value: n, defaultValue: r, prefixCls: i = xc, onChange: a, onChangeComplete: o, className: s, style: c, panelRender: l, disabledAlpha: u = !1, disabled: d = !1, components: f } = e, [p] = Ic(f), [m, g] = Nc(r || Cc, n), _ = (0, q.useMemo)(() => m.setA(1).toRgbString(), [m]), v = (e, t) => {
		n || g(e), a?.(e, t);
	}, y = (e) => new bc(m.setHue(e)), b = (e) => new bc(m.setA(e / 100)), x = (e) => {
		v(y(e), {
			type: "hue",
			value: e
		});
	}, S = (e) => {
		v(b(e), {
			type: "alpha",
			value: e
		});
	}, C = (e) => {
		o && o(y(e));
	}, w = (e) => {
		o && o(b(e));
	}, T = h(`${i}-panel`, s, { [`${i}-panel-disabled`]: d }), E = {
		prefixCls: i,
		disabled: d,
		color: m
	}, D = /*#__PURE__*/ q.createElement(q.Fragment, null, /*#__PURE__*/ q.createElement(Mc, Lc({ onChange: v }, E, { onChangeComplete: o })), /*#__PURE__*/ q.createElement("div", { className: `${i}-slider-container` }, /*#__PURE__*/ q.createElement("div", { className: h(`${i}-slider-group`, { [`${i}-slider-group-disabled-alpha`]: u }) }, /*#__PURE__*/ q.createElement(p, Lc({}, E, {
		type: "hue",
		colors: Rc,
		min: 0,
		max: 359,
		value: m.getHue(),
		onChange: x,
		onChangeComplete: C
	})), !u && /*#__PURE__*/ q.createElement(p, Lc({}, E, {
		type: "alpha",
		colors: [{
			percent: 0,
			color: "rgba(255, 0, 4, 0)"
		}, {
			percent: 100,
			color: _
		}],
		min: 0,
		max: 100,
		value: m.a * 100,
		onChange: S,
		onChangeComplete: w
	}))), /*#__PURE__*/ q.createElement(Ec, {
		color: m.toRgbString(),
		prefixCls: i
	})));
	return /*#__PURE__*/ q.createElement("div", {
		className: T,
		style: c,
		ref: t
	}, typeof l == "function" ? l(D) : D);
}), Bc = (e, t) => e?.replace(/[^0-9a-f]/gi, "").slice(0, t ? 8 : 6) || "", Vc = (e, t) => e ? Bc(e, t) : "", Hc = /*#__PURE__*/ function() {
	function e(t) {
		if (b(this, e), this.cleared = !1, t instanceof e) {
			this.metaColor = t.metaColor.clone(), this.colors = t.colors?.map((t) => ({
				color: new e(t.color),
				percent: t.percent
			})), this.cleared = t.cleared;
			return;
		}
		let n = Array.isArray(t);
		n && t.length ? (this.colors = t.map(({ color: t, percent: n }) => ({
			color: new e(t),
			percent: n
		})), this.metaColor = new bc(this.colors[0].color.metaColor)) : this.metaColor = new bc(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
	}
	return ge(e, [
		{
			key: "toHsb",
			value: function() {
				return this.metaColor.toHsb();
			}
		},
		{
			key: "toHsbString",
			value: function() {
				return this.metaColor.toHsbString();
			}
		},
		{
			key: "toHex",
			value: function() {
				return Vc(this.toHexString(), this.metaColor.a < 1);
			}
		},
		{
			key: "toHexString",
			value: function() {
				return this.metaColor.toHexString();
			}
		},
		{
			key: "toRgb",
			value: function() {
				return this.metaColor.toRgb();
			}
		},
		{
			key: "toRgbString",
			value: function() {
				return this.metaColor.toRgbString();
			}
		},
		{
			key: "isGradient",
			value: function() {
				return !!this.colors && !this.cleared;
			}
		},
		{
			key: "getColors",
			value: function() {
				return this.colors || [{
					color: this,
					percent: 0
				}];
			}
		},
		{
			key: "toCssString",
			value: function() {
				let { colors: e } = this;
				return e ? `linear-gradient(90deg, ${e.map((e) => `${e.color.toRgbString()} ${e.percent}%`).join(", ")})` : this.metaColor.toRgbString();
			}
		},
		{
			key: "equals",
			value: function(e) {
				return !e || this.isGradient() !== e.isGradient() ? !1 : this.isGradient() ? this.colors.length === e.colors.length && this.colors.every((t, n) => {
					let r = e.colors[n];
					return t.percent === r.percent && t.color.equals(r.color);
				}) : this.toHexString() === e.toHexString();
			}
		}
	]);
}(), Uc = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { prefixCls: n, forceRender: r, className: i, style: a, children: o, isActive: s, role: c, classNames: l, styles: u } = e, [d, f] = q.useState(s || r);
	return q.useEffect(() => {
		(r || s) && f(!0);
	}, [r, s]), d ? /*#__PURE__*/ q.createElement("div", {
		ref: t,
		className: h(`${n}-panel`, {
			[`${n}-panel-active`]: s,
			[`${n}-panel-inactive`]: !s
		}, i),
		style: a,
		role: c
	}, /*#__PURE__*/ q.createElement("div", {
		className: h(`${n}-body`, l?.body),
		style: u?.body
	}, o)) : null;
}), Wc = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { showArrow: n = !0, headerClass: r, isActive: i, onItemClick: a, forceRender: o, className: s, classNames: c = {}, styles: l = {}, prefixCls: u, collapsible: d, accordion: p, panelKey: m, extra: g, header: _, expandIcon: v, openMotion: y, destroyOnHidden: b, children: x, ...S } = e, C = d === "disabled", w = g != null && typeof g != "boolean", T = {
		onClick: () => {
			a?.(m);
		},
		onKeyDown: (e) => {
			(e.key === "Enter" || e.keyCode === f.ENTER || e.which === f.ENTER) && a?.(m);
		},
		role: p ? "tab" : "button",
		"aria-expanded": i,
		"aria-disabled": C,
		tabIndex: C ? -1 : 0
	}, E = typeof v == "function" ? v(e) : /*#__PURE__*/ q.createElement("i", { className: "arrow" }), D = E && /*#__PURE__*/ q.createElement("div", U({
		className: h(`${u}-expand-icon`, c?.icon),
		style: l?.icon
	}, ["header", "icon"].includes(d) ? T : {}), E), O = h(`${u}-item`, {
		[`${u}-item-active`]: i,
		[`${u}-item-disabled`]: C
	}, s), k = {
		className: h(r, `${u}-header`, { [`${u}-collapsible-${d}`]: !!d }, c?.header),
		style: l?.header,
		...["header", "icon"].includes(d) ? {} : T
	};
	return /*#__PURE__*/ q.createElement("div", U({}, S, {
		ref: t,
		className: O
	}), /*#__PURE__*/ q.createElement("div", k, n && D, /*#__PURE__*/ q.createElement("span", U({
		className: h(`${u}-title`, c?.title),
		style: l?.title
	}, d === "header" ? T : {}), _), w && /*#__PURE__*/ q.createElement("div", { className: `${u}-extra` }, g)), /*#__PURE__*/ q.createElement(Sn, U({
		visible: i,
		leavedClassName: `${u}-panel-hidden`
	}, y, {
		forceRender: o,
		removeOnLeave: b
	}), ({ className: e, style: t }, n) => /*#__PURE__*/ q.createElement(Uc, {
		ref: n,
		prefixCls: u,
		className: e,
		classNames: c,
		style: t,
		styles: l,
		isActive: i,
		forceRender: o,
		role: p ? "tabpanel" : void 0
	}, x)));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+collapse@1.2._2ff1d2bfdc161ad158aa4b5bc1e2c835/node_modules/@rc-component/collapse/es/hooks/useItems.js
function Gc(e, t, n) {
	if (!e || !t) return e || t;
	let r = Array.from(new Set([...Object.keys(e), ...Object.keys(t)])), i = {};
	return r.forEach((r) => {
		i[r] = n(e[r], t[r]);
	}), i;
}
function Kc(e, t) {
	return Gc(e, t, (e, t) => h(e, t));
}
function qc(e, t) {
	return Gc(e, t, (e, t) => ({
		...e,
		...t
	}));
}
var Jc = (e, t) => {
	let { prefixCls: n, accordion: r, collapsible: i, destroyOnHidden: a, onItemClick: o, activeKey: s, openMotion: c, expandIcon: l, classNames: u, styles: d } = t;
	return e.map((e, t) => {
		let { children: f, label: p, key: m, collapsible: h, onItemClick: g, destroyOnHidden: _, classNames: v, styles: y, ...b } = e, x = String(m ?? t), S = h ?? i, C = _ ?? a, w = (e) => {
			S !== "disabled" && (o(e), g?.(e));
		}, T = !1;
		return T = r ? s[0] === x : s.indexOf(x) > -1, /*#__PURE__*/ q.createElement(Wc, U({}, b, {
			classNames: Kc(u, v),
			styles: qc(d, y),
			prefixCls: n,
			key: x,
			panelKey: x,
			isActive: T,
			accordion: r,
			openMotion: c,
			expandIcon: l,
			header: p,
			collapsible: S,
			onItemClick: w,
			destroyOnHidden: C
		}), f);
	});
}, Yc = (e, t, n) => {
	if (!e) return null;
	let { prefixCls: r, accordion: i, collapsible: a, destroyOnHidden: o, onItemClick: s, activeKey: c, openMotion: l, expandIcon: u, classNames: d, styles: f } = n, p = e.key || String(t), { header: m, headerClass: h, destroyOnHidden: g, collapsible: _, onItemClick: v } = e.props, y = !1;
	y = i ? c[0] === p : c.indexOf(p) > -1;
	let b = _ ?? a, x = {
		key: p,
		panelKey: p,
		header: m,
		headerClass: h,
		classNames: d,
		styles: f,
		isActive: y,
		prefixCls: r,
		destroyOnHidden: g ?? o,
		openMotion: l,
		accordion: i,
		children: e.props.children,
		onItemClick: (e) => {
			b !== "disabled" && (s(e), v?.(e));
		},
		expandIcon: u,
		collapsible: b
	};
	return typeof e.type == "string" ? e : (Object.keys(x).forEach((e) => {
		x[e] === void 0 && delete x[e];
	}), /*#__PURE__*/ q.cloneElement(e, x));
};
function Xc(e, t, n) {
	return Array.isArray(e) ? Jc(e, n) : W(t).map((e, t) => Yc(e, t, n));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+collapse@1.2._2ff1d2bfdc161ad158aa4b5bc1e2c835/node_modules/@rc-component/collapse/es/Collapse.js
function Zc(e) {
	let t = e;
	if (!Array.isArray(t)) {
		let e = typeof t;
		t = e === "number" || e === "string" ? [t] : [];
	}
	return t.map((e) => String(e));
}
var Qc = Object.assign(/* @__PURE__ */ q.forwardRef((e, t) => {
	let { prefixCls: n = "rc-collapse", destroyOnHidden: r = !1, style: i, accordion: o, className: s, children: c, collapsible: l, openMotion: d, expandIcon: f, activeKey: p, defaultActiveKey: m, onChange: g, items: _, classNames: v, styles: y } = e, b = h(n, s), [x, S] = H(m, p), C = Zc(x), w = M((e) => {
		let t = Zc(e);
		S(t), g?.(t);
	}), T = (e) => {
		w(o ? C[0] === e ? [] : [e] : C.includes(e) ? C.filter((t) => t !== e) : [...C, e]);
	};
	a(!c, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
	let E = Xc(_, c, {
		prefixCls: n,
		accordion: o,
		openMotion: d,
		expandIcon: f,
		collapsible: l,
		destroyOnHidden: r,
		onItemClick: T,
		activeKey: C,
		classNames: v,
		styles: y
	});
	return /*#__PURE__*/ q.createElement("div", U({
		ref: t,
		className: b,
		style: i,
		role: o ? "tablist" : void 0
	}, u(e, {
		aria: !0,
		data: !0
	})), E);
}), { Panel: Wc }), $c = Qc, { Panel: el } = Qc, tl = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { getPrefixCls: n } = q.useContext(X), { prefixCls: r, className: i, showArrow: a = !0 } = e, o = n("collapse", r), s = h({ [`${o}-no-arrow`]: !a }, i);
	return /*#__PURE__*/ q.createElement($c.Panel, {
		ref: t,
		...e,
		prefixCls: o,
		className: s
	});
}), nl = (e) => {
	let { componentCls: t, contentBg: n, padding: r, headerBg: i, headerPadding: a, collapseHeaderPaddingSM: o, collapseHeaderPaddingLG: s, collapsePanelBorderRadius: c, lineWidth: l, lineType: u, colorBorder: d, colorText: f, colorTextHeading: p, colorTextDisabled: m, fontSizeLG: h, lineHeight: g, lineHeightLG: _, marginSM: v, paddingSM: y, paddingLG: b, paddingXS: x, motionDurationSlow: S, fontSizeIcon: C, contentPadding: w, fontHeight: T, fontHeightLG: E } = e, D = `${L(l)} ${u} ${d}`;
	return { [t]: {
		...ht(e),
		backgroundColor: i,
		border: D,
		borderRadius: c,
		"&-rtl": { direction: "rtl" },
		[`& > ${t}-item`]: {
			borderBottom: D,
			"&:first-child": { [`
            &,
            & > ${t}-header`]: { borderRadius: `${L(c)} ${L(c)} 0 0` } },
			"&:last-child": { [`
            &,
            & > ${t}-header`]: { borderRadius: `0 0 ${L(c)} ${L(c)}` } },
			[`> ${t}-header`]: {
				position: "relative",
				display: "flex",
				flexWrap: "nowrap",
				alignItems: "flex-start",
				padding: a,
				color: p,
				lineHeight: g,
				cursor: "pointer",
				transition: `all ${S}, visibility 0s`,
				...bt(e),
				[`> ${t}-title`]: { flex: "auto" },
				[`${t}-expand-icon`]: {
					height: T,
					display: "flex",
					alignItems: "center",
					marginInlineEnd: v
				},
				[`${t}-arrow`]: {
					...gt(),
					fontSize: C,
					transition: `transform ${S}`,
					svg: { transition: `transform ${S}` }
				},
				[`${t}-title`]: { marginInlineEnd: "auto" }
			},
			[`${t}-collapsible-header`]: {
				cursor: "default",
				[`${t}-title`]: {
					flex: "none",
					cursor: "pointer"
				},
				[`${t}-expand-icon`]: { cursor: "pointer" }
			},
			[`${t}-collapsible-icon`]: {
				cursor: "unset",
				[`${t}-expand-icon`]: { cursor: "pointer" }
			}
		},
		[`${t}-panel`]: {
			color: f,
			backgroundColor: n,
			borderTop: D,
			[`& > ${t}-body`]: { padding: w },
			"&-hidden": { display: "none" }
		},
		"&-small": { [`> ${t}-item`]: {
			[`> ${t}-header`]: {
				padding: o,
				paddingInlineStart: x,
				[`> ${t}-expand-icon`]: { marginInlineStart: e.calc(y).sub(x).equal() }
			},
			[`> ${t}-panel > ${t}-body`]: { padding: y }
		} },
		"&-large": { [`> ${t}-item`]: {
			fontSize: h,
			lineHeight: _,
			[`> ${t}-header`]: {
				padding: s,
				paddingInlineStart: r,
				[`> ${t}-expand-icon`]: {
					height: E,
					marginInlineStart: e.calc(b).sub(r).equal()
				}
			},
			[`> ${t}-panel > ${t}-body`]: { padding: b }
		} },
		[`${t}-item:last-child`]: {
			borderBottom: 0,
			[`> ${t}-panel`]: { borderRadius: `0 0 ${L(c)} ${L(c)}` }
		},
		[`& ${t}-item-disabled > ${t}-header`]: { "&, & > .arrow": {
			color: m,
			cursor: "not-allowed"
		} },
		[`&${t}-icon-placement-end`]: { [`& > ${t}-item`]: { [`> ${t}-header`]: { [`${t}-expand-icon`]: {
			order: 1,
			marginInlineEnd: 0,
			marginInlineStart: v
		} } } }
	} };
}, rl = (e) => {
	let { componentCls: t } = e, n = `> ${t}-item > ${t}-header ${t}-arrow`;
	return { [`${t}-rtl`]: { [n]: { transform: "rotate(180deg)" } } };
}, il = (e) => {
	let { componentCls: t, headerBg: n, borderlessContentPadding: r, borderlessContentBg: i, colorBorder: a } = e;
	return { [`${t}-borderless`]: {
		backgroundColor: n,
		border: 0,
		[`> ${t}-item`]: { borderBottom: `1px solid ${a}` },
		[`
        > ${t}-item:last-child,
        > ${t}-item:last-child ${t}-header
      `]: { borderRadius: 0 },
		[`> ${t}-item:last-child`]: { borderBottom: 0 },
		[`> ${t}-item > ${t}-panel`]: {
			backgroundColor: i,
			borderTop: 0
		},
		[`> ${t}-item > ${t}-panel > ${t}-body`]: { padding: r }
	} };
}, al = (e) => {
	let { componentCls: t, paddingSM: n } = e;
	return { [`${t}-ghost`]: {
		backgroundColor: "transparent",
		border: 0,
		[`> ${t}-item`]: {
			borderBottom: 0,
			[`> ${t}-panel`]: {
				backgroundColor: "transparent",
				border: 0,
				[`> ${t}-body`]: { paddingBlock: n }
			}
		}
	} };
}, ol = Tt("Collapse", (e) => {
	let t = ve(e, {
		collapseHeaderPaddingSM: `${L(e.paddingXS)} ${L(e.paddingSM)}`,
		collapseHeaderPaddingLG: `${L(e.padding)} ${L(e.paddingLG)}`,
		collapsePanelBorderRadius: e.borderRadiusLG
	});
	return [
		nl(t),
		il(t),
		al(t),
		rl(t),
		js(t)
	];
}, (e) => ({
	headerPadding: `${e.paddingSM}px ${e.padding}px`,
	headerBg: e.colorFillAlter,
	contentPadding: `${e.padding}px 16px`,
	contentBg: e.colorBgContainer,
	borderlessContentPadding: `${e.paddingXXS}px 16px ${e.padding}px`,
	borderlessContentBg: "transparent"
})), sl = Object.assign(/* @__PURE__ */ q.forwardRef((e, t) => {
	let { getPrefixCls: n, direction: r, expandIcon: i, className: a, style: o, classNames: s, styles: c } = Le("collapse"), { prefixCls: l, className: u, rootClassName: d, style: f, bordered: p = !0, ghost: m, size: g, expandIconPlacement: _, expandIconPosition: v, children: y, destroyInactivePanel: b, destroyOnHidden: x, expandIcon: C, classNames: w, styles: T } = e, E = ls((e) => g ?? e ?? "middle"), D = n("collapse", l), O = n(), [k, A] = ol(D), j = _ ?? v ?? "start", M = {
		...e,
		size: E,
		bordered: p,
		expandIconPlacement: j
	}, [N, P] = Rn([s, w], [c, T], { props: M }), F = C ?? i, I = q.useCallback((e = {}) => bi(On(F) ? F(e) : /*#__PURE__*/ q.createElement(ae, {
		rotate: e.isActive ? r === "rtl" ? -90 : 90 : void 0,
		"aria-label": e.isActive ? "expanded" : "collapsed"
	}), (e) => ({ className: h(e.className, `${D}-arrow`) })), [
		F,
		D,
		r
	]), ee = h(`${D}-icon-placement-${j}`, {
		[`${D}-borderless`]: !p,
		[`${D}-rtl`]: r === "rtl",
		[`${D}-ghost`]: !!m,
		[`${D}-large`]: E === "large",
		[`${D}-small`]: E === "small"
	}, a, u, d, k, A, N.root), te = q.useMemo(() => ({
		...Zo(O),
		motionAppear: !1,
		leavedClassName: `${D}-panel-hidden`
	}), [O, D]), ne = q.useMemo(() => y ? W(y).map((e) => e) : null, [y]);
	return /*#__PURE__*/ q.createElement($c, {
		ref: t,
		openMotion: te,
		...S(e, ["rootClassName"]),
		expandIcon: I,
		prefixCls: D,
		className: ee,
		style: {
			...P.root,
			...o,
			...f
		},
		classNames: N,
		styles: P,
		destroyOnHidden: x ?? b
	}, ne);
}), { Panel: tl }), cl = /* @__PURE__ */ e({ default: () => ll }), ll = sl, ul = (e) => e instanceof Hc ? e : new Hc(e), dl = (e) => Math.round(Number(e || 0)), fl = (e) => dl(e.toHsb().a * 100), pl = (e, t) => {
	let n = e.toRgb();
	if (!n.r && !n.g && !n.b) {
		let n = e.toHsb();
		return n.a = t || 1, ul(n);
	}
	return n.a = t || 1, ul(n);
}, ml = (e, t) => {
	let n = [{
		percent: 0,
		color: e[0].color
	}].concat(m(e), [{
		percent: 100,
		color: e[e.length - 1].color
	}]);
	for (let e = 0; e < n.length - 1; e += 1) {
		let r = n[e].percent, i = n[e + 1].percent, a = n[e].color, o = n[e + 1].color;
		if (r <= t && t <= i) {
			let e = i - r;
			if (e === 0) return a;
			let n = (t - r) / e * 100, s = new bc(a), c = new bc(o);
			return s.mix(c, n).toRgbString();
		}
	}
	/* istanbul ignore next */
	return "";
}, hl = (e) => e.map((e) => (e.colors = e.colors.map(ul), e)), gl = (e, t) => {
	let { r: n, g: r, b: i, a } = e.toRgb(), o = new bc(e.toRgbString()).onBackground(t).toHsv();
	return a <= .5 ? o.v > .5 : n * .299 + r * .587 + i * .114 > 192;
}, _l = (e, t) => `panel-${e.key ?? t}`, vl = ({ prefixCls: e, presets: t, value: n, onChange: r }) => {
	let [i] = hr("ColorPicker"), [, a] = ft(), o = (0, q.useMemo)(() => hl(t), [t]), s = `${e}-presets`, c = (0, q.useMemo)(() => o.reduce((e, t, n) => {
		let { defaultOpen: r = !0 } = t;
		return r && e.push(_l(t, n)), e;
	}, []), [o]), l = (e) => {
		r?.(e);
	}, u = o.map((t, r) => ({
		key: _l(t, r),
		label: /*#__PURE__*/ q.createElement("div", { className: `${s}-label` }, t?.label),
		children: /*#__PURE__*/ q.createElement("div", { className: `${s}-items` }, Array.isArray(t?.colors) && t.colors?.length > 0 ? t.colors.map((t, r) => {
			let i = ul(t);
			return /*#__PURE__*/ q.createElement(Ec, {
				key: `preset-${r}-${t.toHexString()}`,
				color: i.toCssString(),
				prefixCls: e,
				className: h(`${s}-color`, {
					[`${s}-color-checked`]: t.toCssString() === n?.toCssString(),
					[`${s}-color-bright`]: gl(t, a.colorBgElevated)
				}),
				onClick: () => l(t)
			});
		}) : /*#__PURE__*/ q.createElement("span", { className: `${s}-empty` }, i.presetEmpty))
	}));
	return /*#__PURE__*/ q.createElement("div", { className: s }, /*#__PURE__*/ q.createElement(ll, {
		defaultActiveKey: c,
		ghost: !0,
		items: u
	}));
}, yl = (e) => {
	let { paddingInline: t, onlyIconSize: n, borderColorDisabled: r } = e;
	return ve(e, {
		buttonPaddingHorizontal: t,
		buttonPaddingVertical: 0,
		buttonIconOnlyFontSize: n,
		colorBorderDisabled: r
	});
}, bl = (e) => {
	let t = e.contentFontSize ?? e.fontSize, n = e.contentFontSizeSM ?? e.fontSize, r = e.contentFontSizeLG ?? e.fontSizeLG, i = e.contentLineHeight ?? ze(t), a = e.contentLineHeightSM ?? ze(n), o = e.contentLineHeightLG ?? ze(r), s = gl(new Hc(e.colorBgSolid), "#fff") ? "#000" : "#fff", c = Re.reduce((t, n) => ({
		...t,
		[`${n}ShadowColor`]: `0 ${L(e.controlOutlineWidth)} 0 ${Z(e[`${n}1`], e.colorBgContainer)}`
	}), {}), l = e.colorBgContainerDisabled, u = e.colorBgContainerDisabled;
	return {
		...c,
		fontWeight: 400,
		iconGap: e.marginXS,
		defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
		primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
		dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
		primaryColor: e.colorTextLightSolid,
		dangerColor: e.colorTextLightSolid,
		borderColorDisabled: e.colorBorderDisabled,
		defaultGhostColor: e.colorBgContainer,
		ghostBg: "transparent",
		defaultGhostBorderColor: e.colorBgContainer,
		paddingInline: e.paddingContentHorizontal - e.lineWidth,
		paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
		paddingInlineSM: 8 - e.lineWidth,
		onlyIconSize: "inherit",
		onlyIconSizeSM: "inherit",
		onlyIconSizeLG: "inherit",
		groupBorderColor: e.colorPrimaryHover,
		linkHoverBg: "transparent",
		textTextColor: e.colorText,
		textTextHoverColor: e.colorText,
		textTextActiveColor: e.colorText,
		textHoverBg: e.colorFillTertiary,
		defaultColor: e.colorText,
		defaultBg: e.colorBgContainer,
		defaultBorderColor: e.colorBorder,
		defaultBorderColorDisabled: e.colorBorder,
		defaultHoverBg: e.colorBgContainer,
		defaultHoverColor: e.colorPrimaryHover,
		defaultHoverBorderColor: e.colorPrimaryHover,
		defaultActiveBg: e.colorBgContainer,
		defaultActiveColor: e.colorPrimaryActive,
		defaultActiveBorderColor: e.colorPrimaryActive,
		solidTextColor: s,
		contentFontSize: t,
		contentFontSizeSM: n,
		contentFontSizeLG: r,
		contentLineHeight: i,
		contentLineHeightSM: a,
		contentLineHeightLG: o,
		paddingBlock: Math.max((e.controlHeight - t * i) / 2 - e.lineWidth, 0),
		paddingBlockSM: Math.max((e.controlHeightSM - n * a) / 2 - e.lineWidth, 0),
		paddingBlockLG: Math.max((e.controlHeightLG - r * o) / 2 - e.lineWidth, 0),
		defaultBgDisabled: l,
		dashedBgDisabled: u
	};
}, xl = (e) => {
	let { componentCls: t, antCls: n, lineWidth: r } = e, [i, a] = Ot(n, "btn");
	return { [t]: [
		{
			[i("border-width")]: r,
			[i("border-color")]: "#000",
			[i("border-color-hover")]: a("border-color"),
			[i("border-color-active")]: a("border-color"),
			[i("border-color-disabled")]: a("border-color"),
			[i("border-style")]: "solid",
			[i("text-color")]: "#000",
			[i("text-color-hover")]: a("text-color"),
			[i("text-color-active")]: a("text-color"),
			[i("text-color-disabled")]: a("text-color"),
			[i("bg-color")]: "#ddd",
			[i("bg-color-hover")]: a("bg-color"),
			[i("bg-color-active")]: a("bg-color"),
			[i("bg-color-disabled")]: e.colorBgContainerDisabled,
			[i("bg-color-container")]: e.colorBgContainer,
			[i("shadow")]: "none"
		},
		{
			border: [
				a("border-width"),
				a("border-style"),
				a("border-color")
			].join(" "),
			color: a("text-color"),
			backgroundColor: a("bg-color"),
			[`&:not(:disabled):not(${t}-disabled)`]: {
				"&:hover": {
					border: [
						a("border-width"),
						a("border-style"),
						a("border-color-hover")
					].join(" "),
					color: a("text-color-hover"),
					backgroundColor: a("bg-color-hover")
				},
				"&:active": {
					border: [
						a("border-width"),
						a("border-style"),
						a("border-color-active")
					].join(" "),
					color: a("text-color-active"),
					backgroundColor: a("bg-color-active")
				}
			}
		},
		{
			[`&${t}-variant-solid`]: {
				[i("solid-bg-color")]: a("color-base"),
				[i("solid-bg-color-hover")]: a("color-hover"),
				[i("solid-bg-color-active")]: a("color-active"),
				[i("border-color")]: "transparent",
				[i("text-color")]: e.colorTextLightSolid,
				[i("bg-color")]: a("solid-bg-color"),
				[i("bg-color-hover")]: a("solid-bg-color-hover"),
				[i("bg-color-active")]: a("solid-bg-color-active"),
				boxShadow: a("shadow")
			},
			[`&${t}-variant-outlined, &${t}-variant-dashed`]: {
				[i("border-color")]: a("color-base"),
				[i("border-color-hover")]: a("color-hover"),
				[i("border-color-active")]: a("color-active"),
				[i("bg-color")]: a("bg-color-container"),
				[i("text-color")]: a("color-base"),
				[i("text-color-hover")]: a("color-hover"),
				[i("text-color-active")]: a("color-active"),
				boxShadow: a("shadow")
			},
			[`&${t}-variant-dashed`]: {
				[i("border-style")]: "dashed",
				[i("bg-color-disabled")]: e.dashedBgDisabled
			},
			[`&${t}-variant-filled`]: {
				[i("border-color")]: "transparent",
				[i("text-color")]: a("color-base"),
				[i("bg-color")]: a("color-light"),
				[i("bg-color-hover")]: a("color-light-hover"),
				[i("bg-color-active")]: a("color-light-active")
			},
			[`&${t}-variant-text, &${t}-variant-link`]: {
				[i("border-color")]: "transparent",
				[i("text-color")]: a("color-base"),
				[i("text-color-hover")]: a("color-hover"),
				[i("text-color-active")]: a("color-active"),
				[i("bg-color")]: "transparent",
				[i("bg-color-hover")]: "transparent",
				[i("bg-color-active")]: "transparent",
				[`&:disabled, &${e.componentCls}-disabled`]: {
					background: "transparent",
					borderColor: "transparent"
				}
			},
			[`&${t}-variant-text`]: {
				[i("bg-color-hover")]: a("color-light"),
				[i("bg-color-active")]: a("color-light-active")
			}
		},
		{
			[`&${t}-variant-link`]: {
				[i("color-base")]: e.colorLink,
				[i("color-hover")]: e.colorLinkHover,
				[i("color-active")]: e.colorLinkActive,
				[i("bg-color-hover")]: e.linkHoverBg
			},
			[`&${t}-color-primary`]: {
				[i("color-base")]: e.colorPrimary,
				[i("color-hover")]: e.colorPrimaryHover,
				[i("color-active")]: e.colorPrimaryActive,
				[i("color-light")]: e.colorPrimaryBg,
				[i("color-light-hover")]: e.colorPrimaryBgHover,
				[i("color-light-active")]: e.colorPrimaryBorder,
				[i("shadow")]: e.primaryShadow,
				[`&${t}-variant-solid`]: {
					[i("text-color")]: e.primaryColor,
					[i("text-color-hover")]: a("text-color"),
					[i("text-color-active")]: a("text-color")
				}
			},
			[`&${t}-color-dangerous`]: {
				[i("color-base")]: e.colorError,
				[i("color-hover")]: e.colorErrorHover,
				[i("color-active")]: e.colorErrorActive,
				[i("color-light")]: e.colorErrorBg,
				[i("color-light-hover")]: e.colorErrorBgFilledHover,
				[i("color-light-active")]: e.colorErrorBgActive,
				[i("shadow")]: e.dangerShadow,
				[`&${t}-variant-solid`]: {
					[i("text-color")]: e.dangerColor,
					[i("text-color-hover")]: a("text-color"),
					[i("text-color-active")]: a("text-color")
				}
			},
			[`&${t}-color-default`]: {
				[i("solid-bg-color")]: e.colorBgSolid,
				[i("solid-bg-color-hover")]: e.colorBgSolidHover,
				[i("solid-bg-color-active")]: e.colorBgSolidActive,
				[i("color-base")]: e.defaultBorderColor,
				[i("color-hover")]: e.defaultHoverBorderColor,
				[i("color-active")]: e.defaultActiveBorderColor,
				[i("color-light")]: e.colorFillTertiary,
				[i("color-light-hover")]: e.colorFillSecondary,
				[i("color-light-active")]: e.colorFill,
				[i("text-color")]: e.defaultColor,
				[i("text-color-hover")]: e.defaultHoverColor,
				[i("text-color-active")]: e.defaultActiveColor,
				[i("shadow")]: e.defaultShadow,
				[`&${t}-variant-outlined`]: { [i("bg-color-disabled")]: e.defaultBgDisabled },
				[`&${t}-variant-solid`]: {
					[i("text-color")]: e.solidTextColor,
					[i("text-color-hover")]: a("text-color"),
					[i("text-color-active")]: a("text-color")
				},
				[`&${t}-variant-filled, &${t}-variant-text`]: {
					[i("text-color-hover")]: a("text-color"),
					[i("text-color-active")]: a("text-color")
				},
				[`&${t}-variant-outlined, &${t}-variant-dashed`]: {
					[i("text-color")]: e.defaultColor,
					[i("text-color-hover")]: e.defaultHoverColor,
					[i("text-color-active")]: e.defaultActiveColor,
					[i("bg-color-container")]: e.defaultBg,
					[i("bg-color-hover")]: e.defaultHoverBg,
					[i("bg-color-active")]: e.defaultActiveBg
				},
				[`&${t}-variant-text`]: {
					[i("text-color")]: e.textTextColor,
					[i("text-color-hover")]: e.textTextHoverColor,
					[i("text-color-active")]: e.textTextActiveColor,
					[i("bg-color-hover")]: e.textHoverBg
				},
				[`&${t}-background-ghost`]: { [`&${t}-variant-outlined, &${t}-variant-dashed`]: {
					[i("text-color")]: e.defaultGhostColor,
					[i("border-color")]: e.defaultGhostBorderColor
				} }
			}
		},
		Re.map((n) => {
			let r = e[`${n}6`], a = e[`${n}1`], o = e[`${n}Hover`], s = e[`${n}2`], c = e[`${n}3`], l = e[`${n}Active`], u = e[`${n}ShadowColor`];
			return { [`&${t}-color-${n}`]: {
				[i("color-base")]: r,
				[i("color-hover")]: o,
				[i("color-active")]: l,
				[i("color-light")]: a,
				[i("color-light-hover")]: s,
				[i("color-light-active")]: c,
				[i("shadow")]: u
			} };
		}),
		{ [`&:disabled, &${e.componentCls}-disabled`]: {
			cursor: "not-allowed",
			borderColor: e.colorBorderDisabled,
			background: a("bg-color-disabled"),
			color: e.colorTextDisabled,
			boxShadow: "none"
		} },
		{ [`&${t}-background-ghost`]: {
			[i("bg-color")]: e.ghostBg,
			[i("bg-color-hover")]: e.ghostBg,
			[i("bg-color-active")]: e.ghostBg,
			[i("shadow")]: "none",
			[`&${t}-variant-outlined, &${t}-variant-dashed`]: {
				[i("bg-color-hover")]: e.ghostBg,
				[i("bg-color-active")]: e.ghostBg
			}
		} }
	] };
}, Sl = (e) => {
	let { componentCls: t, iconCls: n, fontWeight: r, opacityLoading: i, motionDurationSlow: a, motionEaseInOut: o, iconGap: s, calc: c } = e;
	return { [t]: {
		outline: "none",
		position: "relative",
		display: "inline-flex",
		gap: s,
		alignItems: "center",
		justifyContent: "center",
		fontWeight: r,
		whiteSpace: "nowrap",
		textAlign: "center",
		backgroundImage: "none",
		cursor: "pointer",
		transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
		userSelect: "none",
		touchAction: "manipulation",
		...tc(),
		"&:disabled > *": { pointerEvents: "none" },
		[`${t}-icon > svg`]: gt(),
		[`${t}-icon`]: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center"
		},
		"> a": { color: "currentColor" },
		"&:not(:disabled)": bt(e),
		[`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" },
		[`&${t}-two-chinese-chars > *:not(${n})`]: {
			marginInlineEnd: "-0.34em",
			letterSpacing: "0.34em"
		},
		[`&${t}-icon-only`]: {
			paddingInline: 0,
			[`&${t}-compact-item`]: { flex: "none" }
		},
		[`&${t}-loading`]: {
			opacity: i,
			cursor: "default"
		},
		[`${t}-loading-icon`]: { transition: [
			"width",
			"opacity",
			"margin"
		].map((e) => `${e} ${a} ${o}`).join(",") },
		[`&:not(${t}-icon-end)`]: { [`${t}-loading-icon-motion`]: {
			"&-appear-start, &-enter-start": { marginInlineEnd: c(s).mul(-1).equal() },
			"&-appear-active, &-enter-active": { marginInlineEnd: 0 },
			"&-leave-start": { marginInlineEnd: 0 },
			"&-leave-active": { marginInlineEnd: c(s).mul(-1).equal() }
		} },
		"&-icon-end": {
			flexDirection: "row-reverse",
			[`${t}-loading-icon-motion`]: {
				"&-appear-start, &-enter-start": { marginInlineStart: c(s).mul(-1).equal() },
				"&-appear-active, &-enter-active": { marginInlineStart: 0 },
				"&-leave-start": { marginInlineStart: 0 },
				"&-leave-active": { marginInlineStart: c(s).mul(-1).equal() }
			}
		}
	} };
}, Cl = (e) => ({
	minWidth: e.controlHeight,
	paddingInline: 0,
	borderRadius: "50%"
}), wl = (e, t = "") => {
	let { componentCls: n, controlHeight: r, fontSize: i, borderRadius: a, buttonPaddingHorizontal: o, iconCls: s, buttonPaddingVertical: c, buttonIconOnlyFontSize: l } = e;
	return [
		{ [t]: {
			fontSize: i,
			height: r,
			padding: `${L(c)} ${L(o)}`,
			borderRadius: a,
			[`&${n}-icon-only`]: {
				width: r,
				[s]: { fontSize: l }
			}
		} },
		{ [`${n}${n}-circle${t}`]: Cl(e) },
		{ [`${n}${n}-round${t}`]: {
			borderRadius: e.controlHeight,
			[`&:not(${n}-icon-only)`]: { paddingInline: e.buttonPaddingHorizontal }
		} }
	];
}, Tl = (e) => wl(ve(e, { fontSize: e.contentFontSize }), e.componentCls), El = (e) => wl(ve(e, {
	controlHeight: e.controlHeightSM,
	fontSize: e.contentFontSizeSM,
	padding: e.paddingXS,
	buttonPaddingHorizontal: e.paddingInlineSM,
	buttonPaddingVertical: 0,
	borderRadius: e.borderRadiusSM,
	buttonIconOnlyFontSize: e.onlyIconSizeSM
}), `${e.componentCls}-sm`), Dl = (e) => wl(ve(e, {
	controlHeight: e.controlHeightLG,
	fontSize: e.contentFontSizeLG,
	buttonPaddingHorizontal: e.paddingInlineLG,
	buttonPaddingVertical: 0,
	borderRadius: e.borderRadiusLG,
	buttonIconOnlyFontSize: e.onlyIconSizeLG
}), `${e.componentCls}-lg`), Ol = (e) => {
	let { componentCls: t } = e;
	return { [t]: { [`&${t}-block`]: { width: "100%" } } };
}, kl = Tt("Button", (e) => {
	let t = yl(e);
	return [
		Sl(t),
		Tl(t),
		El(t),
		Dl(t),
		Ol(t),
		xl(t),
		_c(t)
	];
}, bl, { unitless: {
	fontWeight: !0,
	contentLineHeight: !0,
	contentLineHeightSM: !0,
	contentLineHeightLG: !0
} });
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/style/compact-item.js
function Al(e, t, n, r) {
	let { focusElCls: i, focus: a, borderElCls: o } = n, s = o ? "> *" : "", c = s ? ` ${s}` : "", l = (e) => e.filter(Boolean).map((e) => `&:${e}${c}`).join(","), u = l(["hover", i ? `hover${i}` : null]), d = l([a ? "focus" : null, "active"]);
	return {
		[`&-item:not(${t}-last-item)`]: { marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal() },
		[`&-item:not(${r}-status-success)`]: { zIndex: 2 },
		"&-item": {
			[d]: { zIndex: 3 },
			[u]: { zIndex: 4 },
			...i ? { [`&${i}`]: { zIndex: 3 } } : {},
			[`&[disabled] ${s}`]: { zIndex: 0 }
		}
	};
}
function jl(e, t, n) {
	let { borderElCls: r } = n, i = r ? `> ${r}` : "";
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item) ${i}`]: { borderRadius: 0 },
		[`&-item:not(${t}-last-item)${t}-first-item`]: { [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
			borderStartEndRadius: 0,
			borderEndEndRadius: 0
		} },
		[`&-item:not(${t}-first-item)${t}-last-item`]: { [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
			borderStartStartRadius: 0,
			borderEndStartRadius: 0
		} }
	};
}
function Ml(e, t = { focus: !0 }) {
	let { componentCls: n } = e, { componentCls: r } = t, i = r || n, a = `${i}-compact`;
	return { [a]: {
		...Al(e, a, t, i),
		...jl(i, a, t)
	} };
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/style/compact-item-vertical.js
function Nl(e, t, n) {
	return {
		[`&-item:not(${t}-last-item)`]: { marginBottom: e.calc(e.lineWidth).mul(-1).equal() },
		[`&-item:not(${n}-status-success)`]: { zIndex: 2 },
		"&-item": {
			"&:focus,&:active": { zIndex: 3 },
			"&:hover": { zIndex: 4 },
			"&[disabled]": { zIndex: 0 }
		}
	};
}
function Pl(e, t) {
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
		[`&-item${t}-first-item:not(${t}-last-item)`]: { [`&, &${e}-sm, &${e}-lg`]: {
			borderEndEndRadius: 0,
			borderEndStartRadius: 0
		} },
		[`&-item${t}-last-item:not(${t}-first-item)`]: { [`&, &${e}-sm, &${e}-lg`]: {
			borderStartStartRadius: 0,
			borderStartEndRadius: 0
		} }
	};
}
function Fl(e) {
	let t = `${e.componentCls}-compact-vertical`;
	return { [t]: {
		...Nl(e, t, e.componentCls),
		...Pl(e.componentCls, t)
	} };
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/button/style/compact.js
var Il = (e) => {
	let { antCls: t, componentCls: n, lineWidth: r, calc: i, colorBgContainer: a } = e, o = `${n}-variant-solid:not([disabled])`, s = i(r).mul(-1).equal(), [c, l] = Ot(t, "btn"), u = (e) => ({ [`${n}-compact${e ? "-vertical" : ""}-item`]: {
		[c("compact-connect-border-color")]: l("bg-color-hover"),
		[`&${o}`]: {
			transition: "none",
			[`& + ${o}:before`]: [{
				position: "absolute",
				backgroundColor: l("compact-connect-border-color"),
				content: "\"\""
			}, e ? {
				top: s,
				insetInline: s,
				height: r
			} : {
				insetBlock: s,
				insetInlineStart: s,
				width: r
			}],
			"&:hover:before": { display: "none" }
		}
	} });
	return [
		u(),
		u(!0),
		{ [`${o}${n}-color-default`]: { [c("compact-connect-border-color")]: `color-mix(in srgb, ${l("bg-color-hover")} 75%, ${a})` } }
	];
}, Ll = Dt(["Button", "compact"], (e) => {
	let t = yl(e);
	return [
		Ml(t),
		Fl(t),
		Il(t)
	];
}, bl);
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/button/Button.js
function Rl(e) {
	if (Dn(e)) {
		let t = e?.delay;
		return t = Tn(t) ? t : 0, {
			loading: t <= 0,
			delay: t
		};
	}
	return {
		loading: !!e,
		delay: 0
	};
}
var zl = {
	default: ["default", "outlined"],
	primary: ["primary", "solid"],
	dashed: ["default", "dashed"],
	link: ["link", "link"],
	text: ["default", "text"]
}, Bl = /* @__PURE__ */ q.forwardRef((e, t) => {
	let { _skipSemantic: n, loading: r = !1, prefixCls: i, color: a, variant: o, type: s, danger: c = !1, shape: l, size: u, disabled: d, className: f, rootClassName: p, children: m, icon: g, iconPosition: _, iconPlacement: v, ghost: y = !1, block: b = !1, htmlType: x = "button", classNames: C, styles: w, style: T, autoInsertSpace: E, autoFocus: D, ...O } = e, k = W(m), A = s || "default", { getPrefixCls: j, direction: M, autoInsertSpace: N, className: P, style: F, classNames: I, styles: ee, loadingIcon: te, shape: ne, color: L, variant: R } = Le("button"), ie = l || ne || "default", [z, ae] = (0, q.useMemo)(() => {
		if (a && o) return [a, o];
		if (s || c) {
			let e = zl[A] || [];
			return c ? ["danger", e[1]] : e;
		}
		return o === "solid" ? ["primary", o] : L && R ? [L, R] : R === "solid" ? ["primary", R] : ["default", "outlined"];
	}, [
		a,
		o,
		s,
		c,
		L,
		R,
		A
	]), [oe, se] = (0, q.useMemo)(() => y && ae === "solid" ? [z, "outlined"] : [z, ae], [
		z,
		ae,
		y
	]), ce = oe === "danger", le = ce ? "dangerous" : oe, B = E ?? N ?? !0, V = j("btn", i), [H, ue] = kl(V), de = (0, q.useContext)(Ti), U = d ?? de, fe = (0, q.useContext)(gs), me = (0, q.useMemo)(() => Rl(r), [r]), [he, ge] = (0, q.useState)(me.loading), [_e, ve] = (0, q.useState)(!1), G = (0, q.useRef)(null), K = pe(t, G), ye = k.length === 1 && !g && !xs(se), J = (0, q.useRef)(!0);
	q.useEffect(() => (J.current = !1, () => {
		J.current = !0;
	}), []), re(() => {
		let e = null;
		me.delay > 0 ? e = setTimeout(() => {
			e = null, ge(!0);
		}, me.delay) : ge(me.loading);
		function t() {
			e &&= (clearTimeout(e), null);
		}
		return t;
	}, [me.delay, me.loading]), (0, q.useEffect)(() => {
		if (!G.current || !B) return;
		let e = G.current.textContent || "";
		ye && ys(e) ? _e || ve(!0) : _e && ve(!1);
	}), (0, q.useEffect)(() => {
		D && G.current && G.current.focus();
	}, []);
	let be = q.useCallback((t) => {
		if (he || U) {
			t.preventDefault();
			return;
		}
		e.onClick?.(("href" in e, t));
	}, [
		e.onClick,
		he,
		U
	]), { compactSize: xe, compactItemClassnames: Se } = fs(V, M), Ce = ls((e) => u ?? xe ?? fe ?? e), we = he ? "loading" : g, Te = v ?? _ ?? "start", Ee = S(O, ["navigate"]), De = {
		...e,
		type: A,
		color: oe,
		variant: se,
		danger: ce,
		shape: ie,
		size: Ce,
		disabled: U,
		loading: he,
		iconPlacement: Te
	}, [Oe, Y] = Rn([n ? void 0 : I, C], [n ? void 0 : ee, w], { props: De }), ke = h(V, H, ue, {
		[`${V}-${ie}`]: ie !== "default" && ie !== "square" && ie,
		[`${V}-${A}`]: A,
		[`${V}-dangerous`]: c,
		[`${V}-color-${le}`]: le,
		[`${V}-variant-${se}`]: se,
		[`${V}-lg`]: Ce === "large",
		[`${V}-sm`]: Ce === "small",
		[`${V}-icon-only`]: !m && m !== 0 && !!we,
		[`${V}-background-ghost`]: y && !xs(se),
		[`${V}-loading`]: he,
		[`${V}-two-chinese-chars`]: _e && B && !he,
		[`${V}-block`]: b,
		[`${V}-rtl`]: M === "rtl",
		[`${V}-icon-end`]: Te === "end"
	}, Se, f, p, P, Oe.root), Ae = {
		...Y.root,
		...F,
		...T
	}, je = {
		className: Oe.icon,
		style: Y.icon
	}, Me = (e) => /*#__PURE__*/ q.createElement(Es, {
		prefixCls: V,
		...je
	}, e), Ne = /*#__PURE__*/ q.createElement(As, {
		existIcon: !!g,
		prefixCls: V,
		loading: he,
		mount: J.current,
		...je
	}), Pe = Dn(r) && r.icon || te, X;
	X = g && !he ? Me(g) : r && Pe ? Me(Pe) : Ne;
	let Fe = wn(m) ? Cs(m, ye && B, Y.content, Oe.content) : null;
	if (Ee.href !== void 0) return /*#__PURE__*/ q.createElement("a", {
		...Ee,
		className: h(ke, { [`${V}-disabled`]: U }),
		href: U ? void 0 : Ee.href,
		style: Ae,
		onClick: be,
		ref: K,
		tabIndex: U ? -1 : 0,
		"aria-disabled": U
	}, X, Fe);
	let Ie = /*#__PURE__*/ q.createElement("button", {
		...O,
		type: x,
		className: ke,
		style: Ae,
		onClick: be,
		disabled: U,
		ref: K
	}, X, Fe, Se && /*#__PURE__*/ q.createElement(Ll, { prefixCls: V }));
	return xs(se) || (Ie = /*#__PURE__*/ q.createElement(cs, {
		component: "Button",
		disabled: he
	}, Ie)), Ie;
});
Bl.Group = _s, Bl.__ANT_BUTTON = !0;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/ActionButton.js
var Vl = (e) => {
	let { type: t, children: n, prefixCls: r, buttonProps: i, close: a, autoFocus: o, emitEvent: s, isSilent: c, quitOnNullishReturnValue: l, actionFn: u } = e, d = q.useRef(!1), f = q.useRef(null), [p, m] = D(!1), h = (...e) => {
		a?.(...e);
	};
	q.useEffect(() => {
		let e = null;
		return o && (e = setTimeout(() => {
			f.current?.focus({ preventScroll: !0 });
		})), () => {
			e && clearTimeout(e);
		};
	}, [o]);
	let g = (e) => {
		kn(e) && (m(!0), e.then((...e) => {
			m(!1, !0), h.apply(void 0, e), d.current = !1;
		}, (e) => {
			if (m(!1, !0), d.current = !1, !c?.()) return Promise.reject(e);
		}));
	}, _ = (e) => {
		if (d.current) return;
		if (d.current = !0, !u) {
			h();
			return;
		}
		let t;
		if (s) {
			if (t = u(e), l && !kn(t)) {
				d.current = !1, h(e);
				return;
			}
		} else if (u.length) t = u(a), d.current = !1;
		else if (t = u(), !kn(t)) {
			h();
			return;
		}
		g(t);
	};
	return /*#__PURE__*/ q.createElement(Bl, {
		...bs(t),
		onClick: _,
		loading: p,
		prefixCls: r,
		...i,
		ref: f
	}, n);
}, Hl = /*#__PURE__*/ q.createContext({}), { Provider: Ul } = Hl, Wl = () => {
	let { autoFocusButton: e, cancelButtonProps: t, cancelTextLocale: n, isSilent: r, mergedOkCancel: i, rootPrefixCls: a, close: o, onCancel: s, onConfirm: c, onClose: l } = (0, q.useContext)(Hl);
	return i ? /*#__PURE__*/ q.createElement(Vl, {
		isSilent: r,
		actionFn: s,
		close: (...e) => {
			o?.(...e), c?.(!1), l?.();
		},
		autoFocus: e === "cancel",
		buttonProps: t,
		prefixCls: `${a}-btn`
	}, n) : null;
}, Gl = () => {
	let { autoFocusButton: e, close: t, isSilent: n, okButtonProps: r, rootPrefixCls: i, okTextLocale: a, okType: o, onConfirm: s, onOk: c, onClose: l } = (0, q.useContext)(Hl);
	return /*#__PURE__*/ q.createElement(Vl, {
		isSilent: n,
		type: o || "primary",
		actionFn: c,
		close: (...e) => {
			t?.(...e), s?.(!0), l?.();
		},
		autoFocus: e === "ok",
		buttonProps: r,
		prefixCls: `${i}-btn`
	}, a);
}, Kl = /*#__PURE__*/ q.createContext({});
//#endregion
//#region node_modules/.pnpm/@rc-component+dialog@1.9.0__c328fc58fafb6e8e99300926d36a7edd/node_modules/@rc-component/dialog/es/util.js
function ql(e, t, n) {
	let r = t;
	return !r && n && (r = `${e}-${n}`), r;
}
function Jl(e, t) {
	let n = e[`page${t ? "Y" : "X"}Offset`], r = `scroll${t ? "Top" : "Left"}`;
	if (typeof n != "number") {
		let t = e.document;
		n = t.documentElement[r], typeof n != "number" && (n = t.body[r]);
	}
	return n;
}
function Yl(e) {
	let t = e.getBoundingClientRect(), n = {
		left: t.left,
		top: t.top
	}, r = e.ownerDocument, i = r.defaultView || r.parentWindow;
	return n.left += Jl(i), n.top += Jl(i, !0), n;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+dialog@1.9.0__c328fc58fafb6e8e99300926d36a7edd/node_modules/@rc-component/dialog/es/Dialog/Content/MemoChildren.js
var Xl = /*#__PURE__*/ q.memo(({ children: e }) => e, (e, { shouldUpdate: t }) => !t);
//#endregion
//#region node_modules/.pnpm/@rc-component+dialog@1.9.0__c328fc58fafb6e8e99300926d36a7edd/node_modules/@rc-component/dialog/es/Dialog/Content/Panel.js
function Zl() {
	return Zl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Zl.apply(this, arguments);
}
var Ql = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { prefixCls: r, className: i, style: a, title: o, ariaId: s, footer: c, closable: l, closeIcon: d, onClose: f, children: p, bodyStyle: m, bodyProps: g, modalRender: _, onMouseDown: v, onMouseUp: y, holderRef: b, visible: x, forceRender: S, width: C, height: w, classNames: T, styles: E, isFixedPos: D, focusTrap: O } = e, { panel: k } = q.useContext(Kl), A = (0, q.useRef)(null), j = pe(b, k, A), [M] = n(x && D && O !== !1, () => A.current);
	q.useImperativeHandle(t, () => ({ focus: () => {
		A.current?.focus({ preventScroll: !0 });
	} }));
	let N = {};
	C !== void 0 && (N.width = C), w !== void 0 && (N.height = w);
	let P = c ? /*#__PURE__*/ q.createElement("div", {
		className: h(`${r}-footer`, T?.footer),
		style: { ...E?.footer }
	}, c) : null, F = o ? /*#__PURE__*/ q.createElement("div", {
		className: h(`${r}-header`, T?.header),
		style: { ...E?.header }
	}, /*#__PURE__*/ q.createElement("div", {
		className: h(`${r}-title`, T?.title),
		id: s,
		style: { ...E?.title }
	}, o)) : null, I = (0, q.useMemo)(() => typeof l == "object" && l ? l : l ? { closeIcon: d ?? /*#__PURE__*/ q.createElement("span", { className: `${r}-close-x` }) } : {}, [
		l,
		d,
		r
	]), ee = u(I, !0), te = typeof l == "object" && l.disabled, ne = l ? /*#__PURE__*/ q.createElement("button", Zl({
		type: "button",
		onClick: f,
		"aria-label": "Close"
	}, ee, {
		className: h(`${r}-close`, T?.close),
		disabled: te,
		style: E?.close
	}), I.closeIcon) : null, L = /*#__PURE__*/ q.createElement("div", {
		className: h(`${r}-container`, T?.container),
		style: E?.container
	}, ne, F, /*#__PURE__*/ q.createElement("div", Zl({
		className: h(`${r}-body`, T?.body),
		style: {
			...m,
			...E?.body
		}
	}, g), p), P);
	return /*#__PURE__*/ q.createElement("div", {
		key: "dialog-element",
		role: "dialog",
		"aria-labelledby": o ? s : null,
		"aria-modal": "true",
		ref: j,
		style: {
			...a,
			...N
		},
		className: h(r, i),
		onMouseDown: v,
		onMouseUp: y,
		tabIndex: -1,
		onFocus: (e) => {
			M(e.target);
		}
	}, /*#__PURE__*/ q.createElement(Xl, { shouldUpdate: x || S }, _ ? _(L) : L));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+dialog@1.9.0__c328fc58fafb6e8e99300926d36a7edd/node_modules/@rc-component/dialog/es/Dialog/Content/index.js
function $l() {
	return $l = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, $l.apply(this, arguments);
}
var eu = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { prefixCls: n, title: r, style: i, className: a, visible: o, forceRender: s, destroyOnHidden: c, motionName: l, ariaId: u, onVisibleChanged: d, mousePosition: f } = e, p = (0, q.useRef)(null), m = (0, q.useRef)(null);
	q.useImperativeHandle(t, () => ({
		...m.current,
		inMotion: p.current.inMotion,
		enableMotion: p.current.enableMotion
	}));
	let [g, _] = q.useState(), v = {};
	g && (v.transformOrigin = g);
	function y() {
		if (!p.current?.nativeElement) return;
		let e = Yl(p.current.nativeElement);
		_(f && (f.x || f.y) ? `${f.x - e.left}px ${f.y - e.top}px` : "");
	}
	return /*#__PURE__*/ q.createElement(Sn, {
		visible: o,
		onVisibleChanged: d,
		onAppearPrepare: y,
		onEnterPrepare: y,
		forceRender: s,
		motionName: l,
		removeOnLeave: c,
		ref: p
	}, ({ className: t, style: o }, s) => /*#__PURE__*/ q.createElement(Ql, $l({}, e, {
		ref: m,
		title: r,
		ariaId: u,
		prefixCls: n,
		holderRef: s,
		style: {
			...o,
			...i,
			...v
		},
		className: h(a, t)
	})));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+dialog@1.9.0__c328fc58fafb6e8e99300926d36a7edd/node_modules/@rc-component/dialog/es/Dialog/Mask.js
function tu() {
	return tu = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, tu.apply(this, arguments);
}
var nu = (e) => {
	let { prefixCls: t, style: n, visible: r, maskProps: i, motionName: a, className: o } = e;
	return /*#__PURE__*/ q.createElement(Sn, {
		key: "mask",
		visible: r,
		motionName: a,
		leavedClassName: `${t}-mask-hidden`
	}, ({ className: e, style: r }, a) => /*#__PURE__*/ q.createElement("div", tu({
		ref: a,
		style: {
			...r,
			...n
		},
		className: h(`${t}-mask`, e, o)
	}, i)));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+dialog@1.9.0__c328fc58fafb6e8e99300926d36a7edd/node_modules/@rc-component/dialog/es/Dialog/index.js
function ru() {
	return ru = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ru.apply(this, arguments);
}
var iu = (e) => {
	let { prefixCls: t = "rc-dialog", zIndex: n, visible: r = !1, focusTriggerAfterClose: i = !0, wrapStyle: a, wrapClassName: o, wrapProps: s, onClose: c, afterOpenChange: l, afterClose: d, transitionName: f, animation: p, closable: m = !0, mask: g = !0, maskTransitionName: _, maskAnimation: v, maskClosable: y = !0, maskStyle: b, maskProps: x, rootClassName: S, rootStyle: C, classNames: w, styles: T } = e, E = (0, q.useRef)(null), D = (0, q.useRef)(null), O = (0, q.useRef)(null), [k, A] = q.useState(r), [j, M] = q.useState(!1), N = oe();
	function P() {
		B(D.current, document.activeElement) || (E.current = document.activeElement);
	}
	function F() {
		B(D.current, document.activeElement) || O.current?.focus();
	}
	function I() {
		if (A(!1), g && E.current && i) {
			try {
				E.current.focus({ preventScroll: !0 });
			} catch {}
			E.current = null;
		}
		k && d?.();
	}
	function ee(e) {
		e ? F() : I(), l?.(e);
	}
	function te(e) {
		c?.(e);
	}
	let ne = (0, q.useRef)(!1), L = null;
	y && (L = (e) => {
		D.current === e.target && ne.current && te(e);
	});
	function re(e) {
		ne.current = e.target === D.current;
	}
	(0, q.useEffect)(() => {
		r ? (ne.current = !1, A(!0), P(), D.current && M(getComputedStyle(D.current).position === "fixed")) : k && O.current.enableMotion() && !O.current.inMotion() && I();
	}, [r]);
	let R = {
		zIndex: n,
		...a,
		...T?.wrapper,
		display: k ? null : "none"
	};
	return /*#__PURE__*/ q.createElement("div", ru({
		className: h(`${t}-root`, S),
		style: C
	}, u(e, { data: !0 })), /*#__PURE__*/ q.createElement(nu, {
		prefixCls: t,
		visible: g && r,
		motionName: ql(t, _, v),
		style: {
			zIndex: n,
			...b,
			...T?.mask
		},
		maskProps: x,
		className: w?.mask
	}), /*#__PURE__*/ q.createElement("div", ru({
		className: h(`${t}-wrap`, o, w?.wrapper),
		ref: D,
		onClick: L,
		onMouseDown: re,
		style: R
	}, s), /*#__PURE__*/ q.createElement(eu, ru({}, e, {
		isFixedPos: j,
		ref: O,
		closable: m,
		ariaId: N,
		prefixCls: t,
		visible: r && k,
		onClose: te,
		onVisibleChanged: ee,
		motionName: ql(t, f, p)
	}))));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+dialog@1.9.0__c328fc58fafb6e8e99300926d36a7edd/node_modules/@rc-component/dialog/es/DialogWrap.js
function au() {
	return au = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, au.apply(this, arguments);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+dialog@1.9.0__c328fc58fafb6e8e99300926d36a7edd/node_modules/@rc-component/dialog/es/index.js
var ou = (e) => {
	let { visible: t, getContainer: n, forceRender: r, destroyOnHidden: i = !1, afterClose: a, closable: o, panelRef: s, keyboard: c = !0, onClose: l } = e, [u, d] = q.useState(t), f = q.useMemo(() => ({ panel: s }), [s]);
	return q.useEffect(() => {
		t && d(!0);
	}, [t]), !r && i && !u ? null : /*#__PURE__*/ q.createElement(Kl.Provider, { value: f }, /*#__PURE__*/ q.createElement(Lr, {
		open: t || r || u,
		onEsc: ({ top: e, event: t }) => {
			if (e && c) {
				t.stopPropagation(), l?.(t);
				return;
			}
		},
		autoDestroy: !1,
		getContainer: n,
		autoLock: t || u
	}, /*#__PURE__*/ q.createElement(iu, au({}, e, {
		destroyOnHidden: i,
		afterClose: () => {
			let { afterClose: e } = (o && typeof o == "object" ? o : {}) || {};
			e?.(), a?.(), d(!1);
		}
	}))));
}, su = "RC_FORM_INTERNAL_HOOKS", Q = () => {
	a(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, cu = /*#__PURE__*/ q.createContext({
	getFieldValue: Q,
	getFieldsValue: Q,
	getFieldError: Q,
	getFieldWarning: Q,
	getFieldsError: Q,
	isFieldsTouched: Q,
	isFieldTouched: Q,
	isFieldValidating: Q,
	isFieldsValidating: Q,
	resetFields: Q,
	setFields: Q,
	setFieldValue: Q,
	setFieldsValue: Q,
	validateFields: Q,
	submit: Q,
	getInternalHooks: () => (Q(), {
		dispatch: Q,
		initEntityValue: Q,
		registerField: Q,
		useSubscribe: Q,
		setInitialValues: Q,
		destroyForm: Q,
		setCallbacks: Q,
		registerWatch: Q,
		getFields: Q,
		setValidateMessages: Q,
		setPreserve: Q,
		getInitialValue: Q
	})
}), lu = /*#__PURE__*/ q.createContext(null);
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/utils/typeUtil.js
function uu(e) {
	return e == null ? [] : Array.isArray(e) ? e : [e];
}
function du(e) {
	return e && !!e._init;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/messages.js
function fu() {
	return {
		default: "Validation error on field %s",
		required: "%s is required",
		enum: "%s must be one of %s",
		whitespace: "%s cannot be empty",
		date: {
			format: "%s date %s is invalid for format %s",
			parse: "%s date could not be parsed, %s is invalid ",
			invalid: "%s date %s is invalid"
		},
		types: {
			string: "%s is not a %s",
			method: "%s is not a %s (function)",
			array: "%s is not an %s",
			object: "%s is not an %s",
			number: "%s is not a %s",
			date: "%s is not a %s",
			boolean: "%s is not a %s",
			integer: "%s is not an %s",
			float: "%s is not a %s",
			regexp: "%s is not a valid %s",
			email: "%s is not a valid %s",
			tel: "%s is not a valid %s",
			url: "%s is not a valid %s",
			hex: "%s is not a valid %s"
		},
		string: {
			len: "%s must be exactly %s characters",
			min: "%s must be at least %s characters",
			max: "%s cannot be longer than %s characters",
			range: "%s must be between %s and %s characters"
		},
		number: {
			len: "%s must equal %s",
			min: "%s cannot be less than %s",
			max: "%s cannot be greater than %s",
			range: "%s must be between %s and %s"
		},
		array: {
			len: "%s must be exactly %s in length",
			min: "%s cannot be less than %s in length",
			max: "%s cannot be greater than %s in length",
			range: "%s must be between %s and %s in length"
		},
		pattern: { mismatch: "%s value %s does not match pattern %s" },
		clone() {
			let e = JSON.parse(JSON.stringify(this));
			return e.clone = this.clone, e;
		}
	};
}
var pu = fu(), mu = /%[sdj%]/g, hu = () => {};
typeof process < "u" && process.env;
function gu(e) {
	if (!e || !e.length) return null;
	let t = {};
	return e.forEach((e) => {
		let n = e.field;
		t[n] = t[n] || [], t[n].push(e);
	}), t;
}
function _u(e, ...t) {
	let n = 0, r = t.length;
	return typeof e == "function" ? e.apply(null, t) : typeof e == "string" ? e.replace(mu, (e) => {
		if (e === "%%") return "%";
		if (n >= r) return e;
		switch (e) {
			case "%s": return String(t[n++]);
			case "%d": return Number(t[n++]);
			case "%j":
				try {
					return JSON.stringify(t[n++]);
				} catch {
					return "[Circular]";
				}
				break;
			default: return e;
		}
	}) : e;
}
function vu(e) {
	return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern" || e === "tel";
}
function yu(e, t) {
	return !!(e == null || t === "array" && Array.isArray(e) && !e.length || vu(t) && typeof e == "string" && !e);
}
function bu(e, t, n) {
	let r = [], i = 0, a = e.length;
	function o(e) {
		r.push(...e || []), i++, i === a && n(r);
	}
	e.forEach((e) => {
		t(e, o);
	});
}
function xu(e, t, n) {
	let r = 0, i = e.length;
	function a(o) {
		if (o && o.length) {
			n(o);
			return;
		}
		let s = r;
		r += 1, s < i ? t(e[s], a) : n([]);
	}
	a([]);
}
function Su(e) {
	let t = [];
	return Object.keys(e).forEach((n) => {
		t.push(...e[n] || []);
	}), t;
}
var Cu = class extends Error {
	errors;
	fields;
	constructor(e, t) {
		super("Async Validation Error"), this.errors = e, this.fields = t;
	}
};
function wu(e, t, n, r, i) {
	if (t.first) {
		let t = new Promise((t, a) => {
			xu(Su(e), n, (e) => (r(e), e.length ? a(new Cu(e, gu(e))) : t(i)));
		});
		return t.catch((e) => e), t;
	}
	let a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], o = Object.keys(e), s = o.length, c = 0, l = [], u = new Promise((t, u) => {
		let d = (e) => {
			if (l.push.apply(l, e), c++, c === s) return r(l), l.length ? u(new Cu(l, gu(l))) : t(i);
		};
		o.length || (r(l), t(i)), o.forEach((t) => {
			let r = e[t];
			a.indexOf(t) === -1 ? bu(r, n, d) : xu(r, n, d);
		});
	});
	return u.catch((e) => e), u;
}
function Tu(e) {
	return !!(e && e.message !== void 0);
}
function Eu(e, t) {
	let n = e;
	for (let e = 0; e < t.length; e++) {
		if (n == null) return n;
		n = n[t[e]];
	}
	return n;
}
function Du(e, t) {
	return (n) => {
		let r;
		return r = e.fullFields ? Eu(t, e.fullFields) : t[n.field || e.fullField], Tu(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
			message: typeof n == "function" ? n() : n,
			fieldValue: r,
			field: n.field || e.fullField
		};
	};
}
function Ou(e, t) {
	if (t) {
		for (let n in t) if (t.hasOwnProperty(n)) {
			let r = t[n];
			typeof r == "object" && typeof e[n] == "object" ? e[n] = {
				...e[n],
				...r
			} : e[n] = r;
		}
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/enum.js
var ku = "enum", Au = (e, t, n, r, i) => {
	e[ku] = Array.isArray(e[ku]) ? e[ku] : [], e[ku].indexOf(t) === -1 && r.push(_u(i.messages[ku], e.fullField, e[ku].join(", ")));
}, ju = (e, t, n, r, i) => {
	e.pattern && (e.pattern instanceof RegExp ? (e.pattern.lastIndex = 0, e.pattern.test(t) || r.push(_u(i.messages.pattern.mismatch, e.fullField, t, e.pattern))) : typeof e.pattern == "string" && (new RegExp(e.pattern).test(t) || r.push(_u(i.messages.pattern.mismatch, e.fullField, t, e.pattern))));
}, Mu = (e, t, n, r, i) => {
	let a = typeof e.len == "number", o = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = t, u = null, d = typeof t == "number", f = typeof t == "string", p = Array.isArray(t);
	if (d ? u = "number" : f ? u = "string" : p && (u = "array"), !u) return !1;
	p && (l = t.length), f && (l = t.replace(c, "_").length), a ? l !== e.len && r.push(_u(i.messages[u].len, e.fullField, e.len)) : o && !s && l < e.min ? r.push(_u(i.messages[u].min, e.fullField, e.min)) : s && !o && l > e.max ? r.push(_u(i.messages[u].max, e.fullField, e.max)) : o && s && (l < e.min || l > e.max) && r.push(_u(i.messages[u].range, e.fullField, e.min, e.max));
}, Nu = (e, t, n, r, i, a) => {
	e.required && (!n.hasOwnProperty(e.field) || yu(t, a || e.type)) && r.push(_u(i.messages.required, e.fullField));
}, Pu, Fu = (() => {
	if (Pu) return Pu;
	let e = "[a-fA-F\\d:]", t = (t) => t && t.includeBoundaries ? `(?:(?<=\\s|^)(?=${e})|(?<=${e})(?=\\s|$))` : "", n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = `(?:${[
		`(?:${r}:){7}(?:${r}|:)`,
		`(?:${r}:){6}(?:${n}|:${r}|:)`,
		`(?:${r}:){5}(?::${n}|(?::${r}){1,2}|:)`,
		`(?:${r}:){4}(?:(?::${r}){0,1}:${n}|(?::${r}){1,3}|:)`,
		`(?:${r}:){3}(?:(?::${r}){0,2}:${n}|(?::${r}){1,4}|:)`,
		`(?:${r}:){2}(?:(?::${r}){0,3}:${n}|(?::${r}){1,5}|:)`,
		`(?:${r}:){1}(?:(?::${r}){0,4}:${n}|(?::${r}){1,6}|:)`,
		`(?::(?:(?::${r}){0,5}:${n}|(?::${r}){1,7}|:))`
	].join("|")})(?:%[0-9a-zA-Z]{1,})?`, a = RegExp(`(?:^${n}$)|(?:^${i}$)`), o = RegExp(`^${n}$`), s = RegExp(`^${i}$`), c = (e) => e && e.exact ? a : RegExp(`(?:${t(e)}${n}${t(e)})|(?:${t(e)}${i}${t(e)})`, "g");
	c.v4 = (e) => e && e.exact ? o : RegExp(`${t(e)}${n}${t(e)}`, "g"), c.v6 = (e) => e && e.exact ? s : RegExp(`${t(e)}${i}${t(e)}`, "g");
	let l = `(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|${c.v4().source}|${c.v6().source}|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?`;
	return Pu = RegExp(`(?:^${l}$)`, "i"), Pu;
}), Iu = {
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
	tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
	hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Lu = {
	integer(e) {
		return Lu.number(e) && parseInt(e, 10) === e;
	},
	float(e) {
		return Lu.number(e) && !Lu.integer(e);
	},
	array(e) {
		return Array.isArray(e);
	},
	regexp(e) {
		if (e instanceof RegExp) return !0;
		try {
			return !!new RegExp(e);
		} catch {
			return !1;
		}
	},
	date(e) {
		return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
	},
	number(e) {
		return isNaN(e) ? !1 : typeof e == "number";
	},
	object(e) {
		return typeof e == "object" && !Lu.array(e);
	},
	method(e) {
		return typeof e == "function";
	},
	email(e) {
		return typeof e == "string" && e.length <= 320 && !!e.match(Iu.email);
	},
	tel(e) {
		return typeof e == "string" && e.length <= 32 && !!e.match(Iu.tel);
	},
	url(e) {
		return typeof e == "string" && e.length <= 2048 && !!e.match(Fu());
	},
	hex(e) {
		return typeof e == "string" && !!e.match(Iu.hex);
	}
}, $ = {
	required: Nu,
	whitespace: (e, t, n, r, i) => {
		(/^\s+$/.test(t) || t === "") && r.push(_u(i.messages.whitespace, e.fullField));
	},
	type: (e, t, n, r, i) => {
		if (e.required && t === void 0) {
			Nu(e, t, n, r, i);
			return;
		}
		let a = [
			"integer",
			"float",
			"array",
			"regexp",
			"object",
			"method",
			"email",
			"tel",
			"number",
			"date",
			"url",
			"hex"
		], o = e.type;
		a.indexOf(o) > -1 ? Lu[o](t) || r.push(_u(i.messages.types[o], e.fullField, e.type)) : o && typeof t !== e.type && r.push(_u(i.messages.types[o], e.fullField, e.type));
	},
	range: Mu,
	enum: Au,
	pattern: ju
}, Ru = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t) && !e.required) return n();
		$.required(e, t, r, a, i);
	}
	n(a);
}, zu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (t == null && !e.required) return n();
		$.required(e, t, r, a, i, "array"), t != null && ($.type(e, t, r, a, i), $.range(e, t, r, a, i));
	}
	n(a);
}, Bu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t) && !e.required) return n();
		$.required(e, t, r, a, i), t !== void 0 && $.type(e, t, r, a, i);
	}
	n(a);
}, Vu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t, "date") && !e.required) return n();
		if ($.required(e, t, r, a, i), !yu(t, "date")) {
			let n;
			n = t instanceof Date ? t : new Date(t), $.type(e, n, r, a, i), n && $.range(e, n.getTime(), r, a, i);
		}
	}
	n(a);
}, Hu = "enum", Uu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t) && !e.required) return n();
		$.required(e, t, r, a, i), t !== void 0 && $[Hu](e, t, r, a, i);
	}
	n(a);
}, Wu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t) && !e.required) return n();
		$.required(e, t, r, a, i), t !== void 0 && ($.type(e, t, r, a, i), $.range(e, t, r, a, i));
	}
	n(a);
}, Gu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t) && !e.required) return n();
		$.required(e, t, r, a, i), t !== void 0 && ($.type(e, t, r, a, i), $.range(e, t, r, a, i));
	}
	n(a);
}, Ku = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t) && !e.required) return n();
		$.required(e, t, r, a, i), t !== void 0 && $.type(e, t, r, a, i);
	}
	n(a);
}, qu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (t === "" && (t = void 0), yu(t) && !e.required) return n();
		$.required(e, t, r, a, i), t !== void 0 && ($.type(e, t, r, a, i), $.range(e, t, r, a, i));
	}
	n(a);
}, Ju = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t) && !e.required) return n();
		$.required(e, t, r, a, i), t !== void 0 && $.type(e, t, r, a, i);
	}
	n(a);
}, Yu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t, "string") && !e.required) return n();
		$.required(e, t, r, a, i), yu(t, "string") || $.pattern(e, t, r, a, i);
	}
	n(a);
}, Xu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t) && !e.required) return n();
		$.required(e, t, r, a, i), yu(t) || $.type(e, t, r, a, i);
	}
	n(a);
}, Zu = (e, t, n, r, i) => {
	let a = [], o = Array.isArray(t) ? "array" : typeof t;
	$.required(e, t, r, a, i, o), n(a);
}, Qu = (e, t, n, r, i) => {
	let a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t, "string") && !e.required) return n();
		$.required(e, t, r, a, i, "string"), yu(t, "string") || ($.type(e, t, r, a, i), $.range(e, t, r, a, i), $.pattern(e, t, r, a, i), e.whitespace === !0 && $.whitespace(e, t, r, a, i));
	}
	n(a);
}, $u = (e, t, n, r, i) => {
	let a = e.type, o = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (yu(t, a) && !e.required) return n();
		$.required(e, t, r, o, i, a), yu(t, a) || $.type(e, t, r, o, i);
	}
	n(o);
}, ed = {
	string: Qu,
	method: Ku,
	number: qu,
	boolean: Bu,
	regexp: Xu,
	integer: Gu,
	float: Wu,
	array: zu,
	object: Ju,
	enum: Uu,
	pattern: Yu,
	date: Vu,
	url: $u,
	hex: $u,
	email: $u,
	tel: $u,
	required: Zu,
	any: Ru
}, td = class e {
	static register = function(e, t) {
		if (typeof t != "function") throw Error("Cannot register a validator by type, validator is not a function");
		ed[e] = t;
	};
	static warning = hu;
	static messages = pu;
	static validators = ed;
	rules = null;
	_messages = pu;
	constructor(e) {
		this.define(e);
	}
	define(e) {
		if (!e) throw Error("Cannot configure a schema with no rules");
		if (typeof e != "object" || Array.isArray(e)) throw Error("Rules must be an object");
		this.rules = {}, Object.keys(e).forEach((t) => {
			let n = e[t];
			this.rules[t] = Array.isArray(n) ? n : [n];
		});
	}
	messages(e) {
		return e && (this._messages = Ou(fu(), e)), this._messages;
	}
	validate(t, n = {}, r = () => {}) {
		let i = t, a = n, o = r;
		if (typeof a == "function" && (o = a, a = {}), !this.rules || Object.keys(this.rules).length === 0) return o && o(null, i), Promise.resolve(i);
		function s(e) {
			let t = [], n = {};
			function r(e) {
				Array.isArray(e) ? t = t.concat(...e) : t.push(e);
			}
			for (let t = 0; t < e.length; t++) r(e[t]);
			t.length ? (n = gu(t), o(t, n)) : o(null, i);
		}
		if (a.messages) {
			let e = this.messages();
			e === pu && (e = fu()), Ou(e, a.messages), a.messages = e;
		} else a.messages = this.messages();
		let c = {};
		(a.keys || Object.keys(this.rules)).forEach((e) => {
			let n = this.rules[e], r = i[e];
			n.forEach((n) => {
				let a = n;
				typeof a.transform == "function" && (i === t && (i = { ...i }), r = i[e] = a.transform(r), r != null && (a.type = a.type || (Array.isArray(r) ? "array" : typeof r))), a = typeof a == "function" ? { validator: a } : { ...a }, a.validator = this.getValidationMethod(a), a.validator && (a.field = e, a.fullField = a.fullField || e, a.type = this.getType(a), c[e] = c[e] || [], c[e].push({
					rule: a,
					value: r,
					source: i,
					field: e
				}));
			});
		});
		let l = {};
		return wu(c, a, (t, n) => {
			let r = t.rule, o = (r.type === "object" || r.type === "array") && (typeof r.fields == "object" || typeof r.defaultField == "object");
			o &&= r.required || !r.required && t.value, r.field = t.field;
			function s(e, t) {
				return {
					...t,
					fullField: `${r.fullField}.${e}`,
					fullFields: r.fullFields ? [...r.fullFields, e] : [e]
				};
			}
			function c(c = []) {
				let u = Array.isArray(c) ? c : [c];
				!a.suppressWarning && u.length && e.warning("async-validator:", u), u.length && r.message !== void 0 && r.message !== null && (u = [].concat(r.message));
				let d = u.map(Du(r, i));
				if (a.first && d.length) return l[r.field] = 1, n(d);
				if (!o) n(d);
				else {
					if (r.required && !t.value) return r.message === void 0 ? a.error && (d = [a.error(r, _u(a.messages.required, r.field))]) : d = [].concat(r.message).map(Du(r, i)), n(d);
					let o = {};
					r.defaultField && Object.keys(t.value).map((e) => {
						o[e] = r.defaultField;
					}), o = {
						...o,
						...t.rule.fields
					};
					let c = {};
					Object.keys(o).forEach((e) => {
						let t = o[e];
						c[e] = (Array.isArray(t) ? t : [t]).map(s.bind(null, e));
					});
					let l = new e(c);
					l.messages(a.messages), t.rule.options && (t.rule.options.messages = a.messages, t.rule.options.error = a.error), l.validate(t.value, t.rule.options || a, (e) => {
						let t = [];
						d && d.length && t.push(...d), e && e.length && t.push(...e), n(t.length ? t : null);
					});
				}
			}
			let u;
			if (r.asyncValidator) u = r.asyncValidator(r, t.value, c, t.source, a);
			else if (r.validator) {
				try {
					u = r.validator(r, t.value, c, t.source, a);
				} catch (e) {
					console.error?.(e), a.suppressValidatorError || setTimeout(() => {
						throw e;
					}, 0), c(e.message);
				}
				u === !0 ? c() : u === !1 ? c(typeof r.message == "function" ? r.message(r.fullField || r.field) : r.message || `${r.fullField || r.field} fails`) : u instanceof Array ? c(u) : u instanceof Error && c(u.message);
			}
			u && u.then && u.then(() => c(), (e) => c(e));
		}, (e) => {
			s(e);
		}, i);
	}
	getType(e) {
		if (e.type === void 0 && e.pattern instanceof RegExp && (e.type = "pattern"), typeof e.validator != "function" && e.type && !ed.hasOwnProperty(e.type)) throw Error(_u("Unknown rule type %s", e.type));
		return e.type || "string";
	}
	getValidationMethod(e) {
		if (typeof e.validator == "function") return e.validator;
		let t = Object.keys(e), n = t.indexOf("message");
		return n !== -1 && t.splice(n, 1), t.length === 1 && t[0] === "required" ? ed.required : ed[this.getType(e)] || void 0;
	}
}, nd = "'${name}' is not a valid ${type}", rd = {
	default: "Validation error on field '${name}'",
	required: "'${name}' is required",
	enum: "'${name}' must be one of [${enum}]",
	whitespace: "'${name}' cannot be empty",
	date: {
		format: "'${name}' is invalid for format date",
		parse: "'${name}' could not be parsed as date",
		invalid: "'${name}' is invalid date"
	},
	types: {
		string: nd,
		method: nd,
		array: nd,
		object: nd,
		number: nd,
		date: nd,
		boolean: nd,
		integer: nd,
		float: nd,
		regexp: nd,
		email: nd,
		tel: nd,
		url: nd,
		hex: nd
	},
	string: {
		len: "'${name}' must be exactly ${len} characters",
		min: "'${name}' must be at least ${min} characters",
		max: "'${name}' cannot be longer than ${max} characters",
		range: "'${name}' must be between ${min} and ${max} characters"
	},
	number: {
		len: "'${name}' must equal ${len}",
		min: "'${name}' cannot be less than ${min}",
		max: "'${name}' cannot be greater than ${max}",
		range: "'${name}' must be between ${min} and ${max}"
	},
	array: {
		len: "'${name}' must be exactly ${len} in length",
		min: "'${name}' cannot be less than ${min} in length",
		max: "'${name}' cannot be greater than ${max} in length",
		range: "'${name}' must be between ${min} and ${max} in length"
	},
	pattern: { mismatch: "'${name}' does not match pattern ${pattern}" }
}, id = td;
function ad(e, t) {
	return e.replace(/\\?\$\{\w+\}/g, (e) => e.startsWith("\\") ? e.slice(1) : t[e.slice(2, -1)]);
}
var od = "CODE_LOGIC_ERROR";
async function sd(e, t, n, r, i) {
	let a = { ...n };
	if (delete a.ruleIndex, id.warning = () => void 0, a.validator) {
		let e = a.validator;
		a.validator = (...t) => {
			try {
				return e(...t);
			} catch (e) {
				return console.error(e), Promise.reject(od);
			}
		};
	}
	let o = null;
	a && a.type === "array" && a.defaultField && (o = a.defaultField, delete a.defaultField);
	let s = new id({ [e]: [a] }), c = d(rd, r.validateMessages);
	s.messages(c);
	let l = [];
	try {
		await Promise.resolve(s.validate({ [e]: t }, { ...r }));
	} catch (e) {
		e.errors && (l = e.errors.map(({ message: e }, t) => {
			let n = e === od ? c.default : e;
			return /*#__PURE__*/ q.isValidElement(n) ? /*#__PURE__*/ q.cloneElement(n, { key: `error_${t}` }) : n;
		}));
	}
	if (!l.length && o && Array.isArray(t) && t.length > 0) return (await Promise.all(t.map((t, n) => sd(`${e}.${n}`, t, o, r, i)))).reduce((e, t) => [...e, ...t], []);
	let u = {
		...n,
		name: e,
		enum: (n.enum || []).join(", "),
		...i
	};
	return l.map((e) => typeof e == "string" ? ad(e, u) : e);
}
function cd(e, t, n, r, i, o) {
	let s = e.join("."), c = n.map((e, t) => {
		let n = e.validator, r = {
			...e,
			ruleIndex: t
		};
		return n && (r.validator = (e, t, r) => {
			let i = !1, o = n(e, t, (...e) => {
				Promise.resolve().then(() => {
					a(!i, "Your validator function has already return a promise. `callback` will be ignored."), i || r(...e);
				});
			});
			i = o && typeof o.then == "function" && typeof o.catch == "function", a(i, "`callback` is deprecated. Please return a promise instead."), i && o.then(() => {
				r();
			}).catch((e) => {
				r(e || " ");
			});
		}), r;
	}).sort(({ warningOnly: e, ruleIndex: t }, { warningOnly: n, ruleIndex: r }) => !!e == !!n ? t - r : e ? 1 : -1), l;
	if (i === !0) l = new Promise(async (e, n) => {
		for (let e = 0; e < c.length; e += 1) {
			let i = c[e], a = await sd(s, t, i, r, o);
			if (a.length) {
				n([{
					errors: a,
					rule: i
				}]);
				return;
			}
		}
		e([]);
	});
	else {
		let e = c.map((e) => sd(s, t, e, r, o).then((t) => ({
			errors: t,
			rule: e
		})));
		l = (i ? ud(e) : ld(e)).then((e) => Promise.reject(e));
	}
	return l.catch((e) => e), l;
}
async function ld(e) {
	return Promise.all(e).then((e) => [].concat(...e));
}
async function ud(e) {
	let t = 0;
	return new Promise((n) => {
		e.forEach((r) => {
			r.then((r) => {
				r.errors.length && n([r]), t += 1, t === e.length && n([]);
			});
		});
	});
}
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/utils/valueUtil.js
function dd(e) {
	return uu(e);
}
function fd(e, t) {
	let n = {};
	return t.forEach((t) => {
		let r = y(e, t);
		n = p(n, t, r);
	}), n;
}
function pd(e, t, n = !1) {
	return e && e.some((e) => md(t, e, n));
}
function md(e, t, n = !1) {
	return !e || !t || !n && e.length !== t.length ? !1 : t.every((t, n) => e[n] === t);
}
function hd(e, t) {
	if (e === t) return !0;
	if (!e && t || e && !t || !e || !t || typeof e != "object" || typeof t != "object") return !1;
	let n = Object.keys(e), r = Object.keys(t);
	return [...new Set([...n, ...r])].every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" && typeof i == "function" ? !0 : r === i;
	});
}
function gd(e, ...t) {
	let n = t[0];
	return n && n.target && typeof n.target == "object" && e in n.target ? n.target[e] : n;
}
function _d(e, t, n) {
	let { length: r } = e;
	if (t < 0 || t >= r || n < 0 || n >= r) return e;
	let i = e[t], a = t - n;
	return a > 0 ? [
		...e.slice(0, n),
		i,
		...e.slice(n, t),
		...e.slice(t + 1, r)
	] : a < 0 ? [
		...e.slice(0, t),
		...e.slice(t + 1, n + 1),
		i,
		...e.slice(n + 1, r)
	] : e;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/hooks/useNotifyWatch.js
var vd = (e) => {
	let t = new MessageChannel();
	t.port1.onmessage = e, t.port2.postMessage(null);
}, yd = class {
	namePathList = [];
	taskId = 0;
	watcherList = /* @__PURE__ */ new Set();
	form;
	constructor(e) {
		this.form = e;
	}
	register(e) {
		return this.watcherList.add(e), () => {
			this.watcherList.delete(e);
		};
	}
	notify(e) {
		e.forEach((e) => {
			this.namePathList.every((t) => !md(t, e)) && this.namePathList.push(e);
		}), this.doBatch();
	}
	doBatch() {
		this.taskId += 1;
		let e = this.taskId;
		vd(() => {
			if (e === this.taskId && this.watcherList.size) {
				let e = this.form.getForm(), t = e.getFieldsValue(), n = e.getFieldsValue(!0);
				this.watcherList.forEach((e) => {
					e(t, n, this.namePathList);
				}), this.namePathList = [];
			}
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/utils/delayUtil.js
async function bd() {
	return new Promise((e) => {
		vd(() => {
			i(() => {
				e();
			});
		});
	});
}
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/Field.js
function xd() {
	return xd = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, xd.apply(this, arguments);
}
var Sd = [], Cd = [];
function wd(e, t, n, r, i, a) {
	return typeof e == "function" ? e(t, n, "source" in a ? { source: a.source } : {}) : r !== i;
}
var Td = class extends q.PureComponent {
	static contextType = cu;
	state = { resetCount: 0 };
	cancelRegisterFunc = null;
	mounted = !1;
	touched = !1;
	dirty = !1;
	validatePromise;
	prevValidating;
	errors = Sd;
	warnings = Cd;
	constructor(e) {
		if (super(e), e.fieldContext) {
			let { getInternalHooks: t } = e.fieldContext, { initEntityValue: n } = t(su);
			n(this);
		}
	}
	componentDidMount() {
		let { shouldUpdate: e, fieldContext: t } = this.props;
		if (this.mounted = !0, t) {
			let { getInternalHooks: e } = t, { registerField: n } = e(su);
			this.cancelRegisterFunc = n(this);
		}
		e === !0 && this.reRender();
	}
	componentWillUnmount() {
		this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
	}
	cancelRegister = () => {
		let { preserve: e, isListField: t, name: n } = this.props;
		this.cancelRegisterFunc && this.cancelRegisterFunc(t, e, dd(n)), this.cancelRegisterFunc = null;
	};
	getNamePath = () => {
		let { name: e, fieldContext: t } = this.props, { prefixName: n = [] } = t;
		return e === void 0 ? [] : [...n, ...e];
	};
	getRules = () => {
		let { rules: e = [], fieldContext: t } = this.props;
		return e.map((e) => typeof e == "function" ? e(t) : e);
	};
	reRender() {
		this.mounted && this.forceUpdate();
	}
	refresh = () => {
		this.mounted && this.setState(({ resetCount: e }) => ({ resetCount: e + 1 }));
	};
	metaCache = null;
	triggerMetaEvent = (e) => {
		let { onMetaChange: t } = this.props;
		if (t) {
			let n = {
				...this.getMeta(),
				destroy: e
			};
			l(this.metaCache, n) || t(n), this.metaCache = n;
		} else this.metaCache = null;
	};
	onStoreChange = (e, t, n) => {
		let { shouldUpdate: r, dependencies: i = [], onReset: a } = this.props, { store: o } = n, s = this.getNamePath(), c = this.getValue(e), u = this.getValue(o), d = t && pd(t, s);
		switch (n.type === "valueUpdate" && n.source === "external" && !l(c, u) && (this.touched = !0, this.dirty = !0, this.validatePromise = null, this.errors = Sd, this.warnings = Cd, this.triggerMetaEvent()), n.type) {
			case "reset":
				if (!t || d) {
					this.touched = !1, this.dirty = !1, this.validatePromise = void 0, this.errors = Sd, this.warnings = Cd, this.triggerMetaEvent(), a?.(), this.refresh();
					return;
				}
				break;
			case "remove":
				if (r && wd(r, e, o, c, u, n)) {
					this.reRender();
					return;
				}
				break;
			case "setField": {
				let { data: i } = n;
				if (d) {
					"touched" in i && (this.touched = i.touched), "validating" in i && !("originRCField" in i) && (this.validatePromise = i.validating ? Promise.resolve([]) : null), "errors" in i && (this.errors = i.errors || Sd), "warnings" in i && (this.warnings = i.warnings || Cd), this.dirty = !0, this.triggerMetaEvent(), this.reRender();
					return;
				} else if ("value" in i && pd(t, s, !0)) {
					this.reRender();
					return;
				}
				if (r && !s.length && wd(r, e, o, c, u, n)) {
					this.reRender();
					return;
				}
				break;
			}
			case "dependenciesUpdate":
				if (i.map(dd).some((e) => pd(n.relatedFields, e))) {
					this.reRender();
					return;
				}
				break;
			default:
				if (d || (!i.length || s.length || r) && wd(r, e, o, c, u, n)) {
					this.reRender();
					return;
				}
				break;
		}
		r === !0 && this.reRender();
	};
	validateRules = (e) => {
		let t = this.getNamePath(), n = this.getValue(), { triggerName: r, validateOnly: i = !1, delayFrame: a } = e || {}, o = Promise.resolve().then(async () => {
			if (!this.mounted) return [];
			let { validateFirst: i = !1, messageVariables: s, validateDebounce: c } = this.props;
			a && await bd();
			let l = this.getRules();
			if (r && (l = l.filter((e) => e).filter((e) => {
				let { validateTrigger: t } = e;
				return t ? uu(t).includes(r) : !0;
			})), c && r && (await new Promise((e) => {
				setTimeout(e, c);
			}), this.validatePromise !== o)) return [];
			let u = cd(t, n, l, e, i, s);
			return u.catch((e) => e).then((e = Sd) => {
				if (this.validatePromise === o) {
					this.validatePromise = null;
					let t = [], n = [];
					e.forEach?.(({ rule: { warningOnly: e }, errors: r = Sd }) => {
						e ? n.push(...r) : t.push(...r);
					}), this.errors = t, this.warnings = n, this.triggerMetaEvent(), this.reRender();
				}
			}), u;
		});
		return i ? o : (this.validatePromise = o, this.dirty = !0, this.errors = Sd, this.warnings = Cd, this.triggerMetaEvent(), this.reRender(), o);
	};
	isFieldValidating = () => !!this.validatePromise;
	isFieldTouched = () => this.touched;
	isFieldDirty = () => {
		if (this.dirty || this.props.initialValue !== void 0) return !0;
		let { fieldContext: e } = this.props, { getInitialValue: t } = e.getInternalHooks(su);
		return t(this.getNamePath()) !== void 0;
	};
	getErrors = () => this.errors;
	getWarnings = () => this.warnings;
	isListField = () => this.props.isListField;
	isList = () => this.props.isList;
	isPreserve = () => this.props.preserve;
	getMeta = () => (this.prevValidating = this.isFieldValidating(), {
		touched: this.isFieldTouched(),
		validating: this.prevValidating,
		errors: this.errors,
		warnings: this.warnings,
		name: this.getNamePath(),
		validated: this.validatePromise === null
	});
	getOnlyChild = (e) => {
		if (typeof e == "function") {
			let t = this.getMeta();
			return {
				...this.getOnlyChild(e(this.getControlled(), t, this.props.fieldContext)),
				isFunction: !0
			};
		}
		let t = W(e);
		return t.length !== 1 || !/*#__PURE__*/ q.isValidElement(t[0]) ? {
			child: t,
			isFunction: !1
		} : {
			child: t[0],
			isFunction: !1
		};
	};
	getValue = (e) => {
		let { getFieldsValue: t } = this.props.fieldContext, n = this.getNamePath();
		return y(e || t(!0), n);
	};
	getControlled = (e = {}) => {
		let { name: t, trigger: n = "onChange", validateTrigger: r, getValueFromEvent: i, normalize: a, valuePropName: o = "value", getValueProps: s, fieldContext: c } = this.props, l = r === void 0 ? c.validateTrigger : r, u = this.getNamePath(), { getInternalHooks: d, getFieldsValue: f } = c, { dispatch: p } = d(su), m = this.getValue(), h = s || ((e) => ({ [o]: e })), g = e[n], _ = t === void 0 ? {} : h(m), v = {
			...e,
			..._
		};
		return v[n] = (...e) => {
			this.touched = !0, this.dirty = !0, this.triggerMetaEvent();
			let t;
			t = i ? i(...e) : gd(o, ...e), a && (t = a(t, m, f(!0))), t !== m && p({
				type: "updateValue",
				namePath: u,
				value: t
			}), g && g(...e);
		}, uu(l || []).forEach((e) => {
			let t = v[e];
			v[e] = (...n) => {
				t && t(...n);
				let { rules: r } = this.props;
				r && r.length && p({
					type: "validateField",
					namePath: u,
					triggerName: e
				});
			};
		}), v;
	};
	render() {
		let { resetCount: e } = this.state, { children: t } = this.props, { child: n, isFunction: r } = this.getOnlyChild(t), i;
		return r ? i = n : /*#__PURE__*/ q.isValidElement(n) ? i = /*#__PURE__*/ q.cloneElement(n, this.getControlled(n.props)) : (a(!n, "`children` of Field is not validate ReactElement."), i = n), /*#__PURE__*/ q.createElement(q.Fragment, { key: e }, i);
	}
};
function Ed({ name: e, ...t }) {
	let n = q.useContext(cu), r = q.useContext(lu), i = e === void 0 ? void 0 : dd(e), a = t.isListField ?? !!r, o = "keep";
	return a || (o = `_${(i || []).join("_")}`), /*#__PURE__*/ q.createElement(Td, xd({
		key: o,
		name: i,
		isListField: a
	}, t, { fieldContext: n }));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/List.js
function Dd({ name: e, initialValue: t, children: n, rules: r, validateTrigger: i, isListField: o }) {
	let s = q.useContext(cu), c = q.useContext(lu), l = q.useRef({
		keys: [],
		id: 0
	}).current, u = q.useMemo(() => [...dd(s.prefixName) || [], ...dd(e)], [s.prefixName, e]), d = q.useMemo(() => ({
		...s,
		prefixName: u
	}), [s, u]), f = q.useMemo(() => ({ getKey: (e) => {
		let t = u.length, n = e[t];
		return [l.keys[n], e.slice(t + 1)];
	} }), [l, u]);
	return typeof n == "function" ? /*#__PURE__*/ q.createElement(lu.Provider, { value: f }, /*#__PURE__*/ q.createElement(cu.Provider, { value: d }, /*#__PURE__*/ q.createElement(Ed, {
		name: [],
		shouldUpdate: (e, t, { source: n }) => n === "internal" ? !1 : e !== t,
		rules: r,
		validateTrigger: i,
		initialValue: t,
		isList: !0,
		isListField: o ?? !!c
	}, ({ value: e = [], onChange: t }, r) => {
		let { getFieldValue: i } = s, a = () => i(u || []) || [], o = {
			add: (e, n) => {
				let r = a();
				n >= 0 && n <= r.length ? (l.keys = [
					...l.keys.slice(0, n),
					l.id,
					...l.keys.slice(n)
				], t([
					...r.slice(0, n),
					e,
					...r.slice(n)
				])) : (l.keys = [...l.keys, l.id], t([...r, e])), l.id += 1;
			},
			remove: (e) => {
				let n = a(), r = new Set(Array.isArray(e) ? e : [e]);
				r.size <= 0 || (l.keys = l.keys.filter((e, t) => !r.has(t)), t(n.filter((e, t) => !r.has(t))));
			},
			move(e, n) {
				if (e === n) return;
				let r = a();
				e < 0 || e >= r.length || n < 0 || n >= r.length || (l.keys = _d(l.keys, e, n), t(_d(r, e, n)));
			}
		}, c = e || [];
		return Array.isArray(c) || (c = []), n(c.map((e, t) => {
			let n = l.keys[t];
			return n === void 0 && (l.keys[t] = l.id, n = l.keys[t], l.id += 1), {
				name: t,
				key: n,
				isListField: !0
			};
		}), o, r);
	}))) : (a(!1, "Form.List only accepts function as children."), null);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/utils/asyncUtil.js
function Od(e) {
	let t = !1, n = e.length, r = [];
	return e.length ? new Promise((i, a) => {
		e.forEach((e, o) => {
			e.catch((e) => (t = !0, e)).then((e) => {
				--n, r[o] = e, !(n > 0) && (t && a(r), i(r));
			});
		});
	}) : Promise.resolve([]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/utils/NameMap.js
var kd = "__@field_split__";
function Ad(e) {
	return e.map((e) => `${typeof e}:${e}`).join(kd);
}
var jd = class {
	kvs = /* @__PURE__ */ new Map();
	set(e, t) {
		this.kvs.set(Ad(e), t);
	}
	get(e) {
		return this.kvs.get(Ad(e));
	}
	getAsPrefix(e) {
		let t = Ad(e), n = t + kd, r = [], i = this.kvs.get(t);
		return i !== void 0 && r.push(i), this.kvs.forEach((e, t) => {
			t.startsWith(n) && r.push(e);
		}), r;
	}
	update(e, t) {
		let n = t(this.get(e));
		n ? this.set(e, n) : this.delete(e);
	}
	delete(e) {
		this.kvs.delete(Ad(e));
	}
	map(e) {
		return [...this.kvs.entries()].map(([t, n]) => e({
			key: t.split(kd).map((e) => {
				let [, t, n] = e.match(/^([^:]*):(.*)$/);
				return t === "number" ? Number(n) : n;
			}),
			value: n
		}));
	}
	toJSON() {
		let e = {};
		return this.map(({ key: t, value: n }) => (e[t.join(".")] = n, null)), e;
	}
}, Md = class {
	formHooked = !1;
	forceRootUpdate;
	subscribable = !0;
	store = {};
	fieldEntities = [];
	initialValues = {};
	callbacks = {};
	validateMessages = null;
	preserve = null;
	lastValidatePromise = null;
	watcherCenter = new yd(this);
	constructor(e) {
		this.forceRootUpdate = e;
	}
	getForm = () => ({
		getFieldValue: this.getFieldValue,
		getFieldsValue: this.getFieldsValue,
		getFieldError: this.getFieldError,
		getFieldWarning: this.getFieldWarning,
		getFieldsError: this.getFieldsError,
		isFieldsTouched: this.isFieldsTouched,
		isFieldTouched: this.isFieldTouched,
		isFieldValidating: this.isFieldValidating,
		isFieldsValidating: this.isFieldsValidating,
		resetFields: this.resetFields,
		setFields: this.setFields,
		setFieldValue: this.setFieldValue,
		setFieldsValue: this.setFieldsValue,
		validateFields: this.validateFields,
		submit: this.submit,
		_init: !0,
		getInternalHooks: this.getInternalHooks
	});
	getInternalHooks = (e) => e === "RC_FORM_INTERNAL_HOOKS" ? (this.formHooked = !0, {
		dispatch: this.dispatch,
		initEntityValue: this.initEntityValue,
		registerField: this.registerField,
		useSubscribe: this.useSubscribe,
		setInitialValues: this.setInitialValues,
		destroyForm: this.destroyForm,
		setCallbacks: this.setCallbacks,
		setValidateMessages: this.setValidateMessages,
		getFields: this.getFields,
		setPreserve: this.setPreserve,
		getInitialValue: this.getInitialValue,
		registerWatch: this.registerWatch
	}) : (a(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
	useSubscribe = (e) => {
		this.subscribable = e;
	};
	prevWithoutPreserves = null;
	setInitialValues = (e, t) => {
		if (this.initialValues = e || {}, t) {
			let t = d(e, this.store);
			this.prevWithoutPreserves?.map(({ key: n }) => {
				t = p(t, n, y(e, n));
			}), this.prevWithoutPreserves = null, this.updateStore(t);
		}
	};
	destroyForm = (e) => {
		if (e) this.updateStore({});
		else {
			let e = new jd();
			this.getFieldEntities(!0).forEach((t) => {
				this.isMergedPreserve(t.isPreserve()) || e.set(t.getNamePath(), !0);
			}), this.prevWithoutPreserves = e;
		}
	};
	getInitialValue = (e) => {
		let t = y(this.initialValues, e);
		return e.length ? d(t) : t;
	};
	setCallbacks = (e) => {
		this.callbacks = e;
	};
	setValidateMessages = (e) => {
		this.validateMessages = e;
	};
	setPreserve = (e) => {
		this.preserve = e;
	};
	registerWatch = (e) => this.watcherCenter.register(e);
	notifyWatch = (e = []) => {
		this.watcherCenter.notify(e);
	};
	timeoutId = null;
	warningUnhooked = () => {};
	updateStore = (e) => {
		this.store = e;
	};
	getFieldEntities = (e = !1) => e ? this.fieldEntities.filter((e) => e.getNamePath().length) : this.fieldEntities;
	getFieldsMap = (e = !1) => {
		let t = new jd();
		return this.getFieldEntities(e).forEach((e) => {
			let n = e.getNamePath();
			t.set(n, e);
		}), t;
	};
	getFieldEntitiesForNamePathList = (e, t = !1) => {
		if (!e) return this.getFieldEntities(!0);
		let n = this.getFieldsMap(!0);
		return t ? e.flatMap((e) => {
			let t = dd(e), r = n.getAsPrefix(t);
			return r.length ? r : [{ INVALIDATE_NAME_PATH: t }];
		}) : e.map((e) => {
			let t = dd(e);
			return n.get(t) || { INVALIDATE_NAME_PATH: dd(e) };
		});
	};
	getFieldsValue = (e, t) => {
		this.warningUnhooked();
		let n, r;
		if (e === !0 || Array.isArray(e) ? (n = e, r = t) : e && typeof e == "object" && (r = e.filter), n === !0 && !r) return this.store;
		let i = this.getFieldEntitiesForNamePathList(Array.isArray(n) ? n : null, !0), a = [], o = [];
		i.forEach((e) => {
			let t = e.INVALIDATE_NAME_PATH || e.getNamePath();
			if (e.isList?.()) {
				o.push(t);
				return;
			}
			if (!r) a.push(t);
			else {
				let n = "getMeta" in e ? e.getMeta() : null;
				r(n) && a.push(t);
			}
		});
		let s = fd(this.store, a.map(dd));
		return o.forEach((e) => {
			y(s, e) || (s = p(s, e, []));
		}), s;
	};
	getFieldValue = (e) => {
		this.warningUnhooked();
		let t = dd(e);
		return y(this.store, t);
	};
	getFieldsError = (e) => (this.warningUnhooked(), this.getFieldEntitiesForNamePathList(e).map((t, n) => t && !t.INVALIDATE_NAME_PATH ? {
		name: t.getNamePath(),
		errors: t.getErrors(),
		warnings: t.getWarnings()
	} : {
		name: dd(e[n]),
		errors: [],
		warnings: []
	}));
	getFieldError = (e) => {
		this.warningUnhooked();
		let t = dd(e);
		return this.getFieldsError([t])[0].errors;
	};
	getFieldWarning = (e) => {
		this.warningUnhooked();
		let t = dd(e);
		return this.getFieldsError([t])[0].warnings;
	};
	isFieldsTouched = (...e) => {
		this.warningUnhooked();
		let [t, n] = e, r, i = !1;
		e.length === 0 ? r = null : e.length === 1 ? Array.isArray(t) ? (r = t.map(dd), i = !1) : (r = null, i = t) : (r = t.map(dd), i = n);
		let a = this.getFieldEntities(!0), o = (e) => e.isFieldTouched();
		if (!r) return i ? a.every((e) => o(e) || e.isList()) : a.some(o);
		let s = new jd();
		r.forEach((e) => {
			s.set(e, []);
		}), a.forEach((e) => {
			let t = e.getNamePath();
			r.forEach((n) => {
				n.every((e, n) => t[n] === e) && s.update(n, (t) => [...t, e]);
			});
		});
		let c = (e) => e.some(o), l = s.map(({ value: e }) => e);
		return i ? l.every(c) : l.some(c);
	};
	isFieldTouched = (e) => (this.warningUnhooked(), this.isFieldsTouched([e]));
	isFieldsValidating = (e) => {
		this.warningUnhooked();
		let t = this.getFieldEntities();
		if (!e) return t.some((e) => e.isFieldValidating());
		let n = e.map(dd);
		return t.some((e) => pd(n, e.getNamePath()) && e.isFieldValidating());
	};
	isFieldValidating = (e) => (this.warningUnhooked(), this.isFieldsValidating([e]));
	resetWithFieldInitialValue = (e = {}) => {
		let t = new jd(), n = this.getFieldEntities(!0);
		n.forEach((e) => {
			let { initialValue: n } = e.props, r = e.getNamePath();
			if (n !== void 0) {
				let i = t.get(r) || /* @__PURE__ */ new Set();
				i.add({
					entity: e,
					value: n
				}), t.set(r, i);
			}
		});
		let r = (n) => {
			n.forEach((n) => {
				let { initialValue: r } = n.props;
				if (r !== void 0) {
					let r = n.getNamePath();
					if (this.getInitialValue(r) !== void 0) a(!1, `Form already set 'initialValues' with path '${r.join(".")}'. Field can not overwrite it.`);
					else {
						let i = t.get(r);
						if (i && i.size > 1) a(!1, `Multiple Field with path '${r.join(".")}' set 'initialValue'. Can not decide which one to pick.`);
						else if (i) {
							let t = this.getFieldValue(r);
							!n.isListField() && (!e.skipExist || t === void 0) && this.updateStore(p(this.store, r, [...i][0].value));
						}
					}
				}
			});
		}, i;
		e.entities ? i = e.entities : e.namePathList ? (i = [], e.namePathList.forEach((e) => {
			let n = t.get(e);
			n && i.push(...[...n].map((e) => e.entity));
		})) : i = n, r(i);
	};
	resetFields = (e) => {
		this.warningUnhooked();
		let t = this.store;
		if (!e) {
			this.updateStore(d(this.initialValues)), this.resetWithFieldInitialValue(), this.notifyObservers(t, null, { type: "reset" }), this.notifyWatch();
			return;
		}
		let n = e.map(dd);
		n.forEach((e) => {
			let t = this.getInitialValue(e);
			this.updateStore(p(this.store, e, t));
		}), this.resetWithFieldInitialValue({ namePathList: n }), this.notifyObservers(t, n, { type: "reset" }), this.notifyWatch(n);
	};
	setFields = (e) => {
		this.warningUnhooked();
		let t = this.store, n = [];
		e.forEach((e) => {
			let { name: r, ...i } = e, a = dd(r);
			n.push(a), "value" in i && this.updateStore(p(this.store, a, i.value)), this.notifyObservers(t, [a], {
				type: "setField",
				data: e
			});
		}), this.notifyWatch(n);
	};
	getFields = () => this.getFieldEntities(!0).map((e) => {
		let t = e.getNamePath(), n = {
			...e.getMeta(),
			name: t,
			value: this.getFieldValue(t)
		};
		return Object.defineProperty(n, "originRCField", { value: !0 }), n;
	});
	initEntityValue = (e) => {
		let { initialValue: t } = e.props;
		if (t !== void 0) {
			let n = e.getNamePath();
			y(this.store, n) === void 0 && this.updateStore(p(this.store, n, t));
		}
	};
	isMergedPreserve = (e) => (e === void 0 ? this.preserve : e) ?? !0;
	registerField = (e) => {
		this.fieldEntities.push(e);
		let t = e.getNamePath();
		if (this.notifyWatch([t]), e.props.initialValue !== void 0) {
			let t = this.store;
			this.resetWithFieldInitialValue({
				entities: [e],
				skipExist: !0
			}), this.notifyObservers(t, [e.getNamePath()], {
				type: "valueUpdate",
				source: "internal"
			});
		}
		return (n, r, i = []) => {
			if (this.fieldEntities = this.fieldEntities.filter((t) => t !== e), !this.isMergedPreserve(r) && (!n || i.length > 1)) {
				let e = n ? void 0 : this.getInitialValue(t);
				if (t.length && this.getFieldValue(t) !== e && this.fieldEntities.every((e) => !md(e.getNamePath(), t))) {
					let n = this.store;
					this.updateStore(p(n, t, e, !0)), this.notifyObservers(n, [t], { type: "remove" }), this.triggerDependenciesUpdate(n, t);
				}
			}
			this.notifyWatch([t]);
		};
	};
	dispatch = (e) => {
		switch (e.type) {
			case "updateValue": {
				let { namePath: t, value: n } = e;
				this.updateValue(t, n);
				break;
			}
			case "validateField": {
				let { namePath: t, triggerName: n } = e;
				this.validateFields([t], { triggerName: n });
				break;
			}
			default:
		}
	};
	notifyObservers = (e, t, n) => {
		if (this.subscribable) {
			let r = {
				...n,
				store: this.getFieldsValue(!0)
			};
			this.getFieldEntities().forEach(({ onStoreChange: n }) => {
				n(e, t, r);
			});
		} else this.forceRootUpdate();
	};
	triggerDependenciesUpdate = (e, t) => {
		let n = this.getDependencyChildrenFields(t);
		return n.length && this.validateFields(n, { delayFrame: !0 }), this.notifyObservers(e, n, {
			type: "dependenciesUpdate",
			relatedFields: [t, ...n]
		}), n;
	};
	updateValue = (e, t) => {
		let n = dd(e), r = this.store;
		this.updateStore(p(this.store, n, t)), this.notifyObservers(r, [n], {
			type: "valueUpdate",
			source: "internal"
		}), this.notifyWatch([n]);
		let i = this.triggerDependenciesUpdate(r, n), { onValuesChange: a } = this.callbacks;
		if (a) {
			let e = fd(this.store, [n]);
			a(e, p(this.getFieldsValue(), n, y(e, n)));
		}
		this.triggerOnFieldsChange([n, ...i]);
	};
	setFieldsValue = (e) => {
		this.warningUnhooked();
		let t = this.store;
		if (e) {
			let t = d(this.store, e);
			this.updateStore(t);
		}
		this.notifyObservers(t, null, {
			type: "valueUpdate",
			source: "external"
		}), this.notifyWatch();
	};
	setFieldValue = (e, t) => {
		this.setFields([{
			name: e,
			value: t,
			errors: [],
			warnings: [],
			touched: !0
		}]);
	};
	getDependencyChildrenFields = (e) => {
		let t = /* @__PURE__ */ new Set(), n = [], r = new jd();
		this.getFieldEntities().forEach((e) => {
			let { dependencies: t } = e.props;
			(t || []).forEach((t) => {
				let n = dd(t);
				r.update(n, (t = /* @__PURE__ */ new Set()) => (t.add(e), t));
			});
		});
		let i = (e) => {
			(r.get(e) || /* @__PURE__ */ new Set()).forEach((e) => {
				if (!t.has(e)) {
					t.add(e);
					let r = e.getNamePath();
					e.isFieldDirty() && r.length && (n.push(r), i(r));
				}
			});
		};
		return i(e), n;
	};
	triggerOnFieldsChange = (e, t) => {
		let { onFieldsChange: n } = this.callbacks;
		if (n) {
			let r = this.getFields();
			if (t) {
				let e = new jd();
				t.forEach(({ name: t, errors: n }) => {
					e.set(t, n);
				}), r.forEach((t) => {
					t.errors = e.get(t.name) || t.errors;
				});
			}
			let i = r.filter(({ name: t }) => pd(e, t));
			i.length && n(i, r);
		}
	};
	validateFields = (e, t) => {
		this.warningUnhooked();
		let n, r;
		Array.isArray(e) || typeof e == "string" || typeof t == "string" ? (n = e, r = t) : r = e;
		let i = !!n, a = i ? n.map(dd) : [], o = [...a], s = [], c = String(Date.now()), l = /* @__PURE__ */ new Set(), { recursive: u, dirty: d } = r || {};
		this.getFieldEntities(!0).forEach((e) => {
			let t = e.getNamePath();
			if (i || ((!e.isList() || !a.some((e) => md(e, t, !0))) && o.push(t), a.push(t)), !(!e.props.rules || !e.props.rules.length) && !(d && !e.isFieldDirty()) && (l.add(t.join(c)), !i || pd(a, t, u))) {
				let n = e.validateRules({
					validateMessages: {
						...rd,
						...this.validateMessages
					},
					...r
				});
				s.push(n.then(() => ({
					name: t,
					errors: [],
					warnings: []
				})).catch((e) => {
					let n = [], r = [];
					return e.forEach?.(({ rule: { warningOnly: e }, errors: t }) => {
						e ? r.push(...t) : n.push(...t);
					}), n.length ? Promise.reject({
						name: t,
						errors: n,
						warnings: r
					}) : {
						name: t,
						errors: n,
						warnings: r
					};
				}));
			}
		});
		let f = Od(s);
		this.lastValidatePromise = f, f.catch((e) => e).then((e) => {
			let t = e.map(({ name: e }) => e);
			this.notifyObservers(this.store, t, { type: "validateFinish" }), this.triggerOnFieldsChange(t, e);
		});
		let p = f.then(() => this.lastValidatePromise === f ? Promise.resolve(this.getFieldsValue(o)) : Promise.reject([])).catch((e) => {
			let t = e.filter((e) => e && e.errors.length), n = t[0]?.errors?.[0];
			return Promise.reject({
				message: n,
				values: this.getFieldsValue(a),
				errorFields: t,
				outOfDate: this.lastValidatePromise !== f
			});
		});
		p.catch((e) => e);
		let m = a.filter((e) => l.has(e.join(c)));
		return this.triggerOnFieldsChange(m), p;
	};
	submit = () => {
		this.warningUnhooked(), this.validateFields().then((e) => {
			let { onFinish: t } = this.callbacks;
			if (t) try {
				t(e);
			} catch (e) {
				console.error(e);
			}
		}).catch((e) => {
			let { onFinishFailed: t } = this.callbacks;
			t && t(e);
		});
	};
};
function Nd(e) {
	let t = q.useRef(null), [, n] = q.useState({});
	return t.current || (e ? t.current = e : t.current = new Md(() => {
		n({});
	}).getForm()), [t.current];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/FormContext.js
var Pd = /*#__PURE__*/ q.createContext({
	triggerFormChange: () => {},
	triggerFormFinish: () => {},
	registerForm: () => {},
	unregisterForm: () => {}
}), Fd = ({ validateMessages: e, onFormChange: t, onFormFinish: n, children: r }) => {
	let i = q.useContext(Pd), a = q.useRef({});
	return /*#__PURE__*/ q.createElement(Pd.Provider, { value: {
		...i,
		validateMessages: {
			...i.validateMessages,
			...e
		},
		triggerFormChange: (e, n) => {
			t && t(e, {
				changedFields: n,
				forms: a.current
			}), i.triggerFormChange(e, n);
		},
		triggerFormFinish: (e, t) => {
			n && n(e, {
				values: t,
				forms: a.current
			}), i.triggerFormFinish(e, t);
		},
		registerForm: (e, t) => {
			e && (a.current = {
				...a.current,
				[e]: t
			}), i.registerForm(e, t);
		},
		unregisterForm: (e) => {
			let t = { ...a.current };
			delete t[e], a.current = t, i.unregisterForm(e);
		}
	} }, r);
};
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/Form.js
function Id() {
	return Id = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Id.apply(this, arguments);
}
var Ld = (e, t) => {
	let { name: n, initialValues: r, fields: i, form: a, preserve: o, children: s, component: c = "form", validateMessages: l, validateTrigger: u = "onChange", onValuesChange: d, onFieldsChange: f, onFinish: p, onFinishFailed: m, clearOnDestroy: h, ...g } = e, _ = q.useRef(null), v = q.useContext(Pd), [y] = Nd(a), { useSubscribe: b, setInitialValues: x, setCallbacks: S, setValidateMessages: C, setPreserve: w, destroyForm: T } = y.getInternalHooks(su);
	q.useImperativeHandle(t, () => ({
		...y,
		nativeElement: _.current
	})), q.useEffect(() => (v.registerForm(n, y), () => {
		v.unregisterForm(n);
	}), [
		v,
		y,
		n
	]), C({
		...v.validateMessages,
		...l
	}), S({
		onValuesChange: d,
		onFieldsChange: (e, ...t) => {
			v.triggerFormChange(n, e), f && f(e, ...t);
		},
		onFinish: (e) => {
			v.triggerFormFinish(n, e), p && p(e);
		},
		onFinishFailed: m
	}), w(o);
	let E = q.useRef(null);
	x(r, !E.current), E.current ||= !0, q.useEffect(() => () => T(h), []);
	let D, O = typeof s == "function";
	D = O ? s(y.getFieldsValue(!0), y) : s, b(!O);
	let k = q.useRef(null);
	q.useEffect(() => {
		hd(k.current || [], i || []) || y.setFields(i || []), k.current = i;
	}, [i, y]);
	let A = q.useMemo(() => ({
		...y,
		validateTrigger: u
	}), [y, u]), j = /*#__PURE__*/ q.createElement(lu.Provider, { value: null }, /*#__PURE__*/ q.createElement(cu.Provider, { value: A }, D));
	return c === !1 ? j : /*#__PURE__*/ q.createElement(c, Id({}, g, {
		ref: _,
		onSubmit: (e) => {
			e.preventDefault(), e.stopPropagation(), y.submit();
		},
		onReset: (e) => {
			e.preventDefault(), y.resetFields(), g.onReset?.(e);
		}
	}), j);
};
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/hooks/useWatch.js
function Rd(e) {
	try {
		return JSON.stringify(e);
	} catch {
		return Math.random();
	}
}
function zd(...e) {
	let [t, n = {}] = e, r = du(n) ? { form: n } : n, i = r.form, [a, o] = (0, q.useState)(() => typeof t == "function" ? t({}) : void 0), s = (0, q.useMemo)(() => Rd(a), [a]), c = (0, q.useRef)(s);
	c.current = s;
	let l = (0, q.useContext)(cu), u = i || l, d = u && u._init, { getFieldsValue: f, getInternalHooks: p } = u, { registerWatch: m } = p(su), h = M((e, n) => {
		let i = r.preserve ? n ?? f(!0) : e ?? f(), s = typeof t == "function" ? t(i) : y(i, dd(t));
		Rd(a) !== Rd(s) && o(s);
	});
	return (0, q.useEffect)(() => {
		d && h();
	}, [d, typeof t == "function" ? t : JSON.stringify(t)]), (0, q.useEffect)(() => {
		if (d) return m((e, t) => {
			h(e, t);
		});
	}, [d]), a;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+form@1.8.5_re_99638a67d88a6c1ef9d9e4df0ea2bad3/node_modules/@rc-component/form/es/index.js
var Bd = /* @__PURE__ */ q.forwardRef(Ld);
Bd.FormProvider = Fd, Bd.Field = Ed, Bd.List = Dd, Bd.useForm = Nd, Bd.useWatch = zd;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/context.js
var Vd = /*#__PURE__*/ q.createContext({
	labelAlign: "right",
	layout: "horizontal",
	itemRef: () => {}
}), Hd = /*#__PURE__*/ q.createContext(null), Ud = (e) => {
	let t = S(e, ["prefixCls"]);
	return /*#__PURE__*/ q.createElement(Fd, { ...t });
}, Wd = /*#__PURE__*/ q.createContext({ prefixCls: "" }), Gd = /*#__PURE__*/ q.createContext({}), Kd = ({ children: e, status: t, override: n }) => {
	let r = q.useContext(Gd), i = q.useMemo(() => {
		let e = { ...r };
		return n && delete e.isFormItemInput, t && (delete e.status, delete e.hasFeedback, delete e.feedbackIcon), e;
	}, [
		t,
		n,
		r
	]);
	return /*#__PURE__*/ q.createElement(Gd.Provider, { value: i }, e);
}, qd = /*#__PURE__*/ q.createContext(void 0), Jd = (e) => {
	let { space: t, form: n, children: r } = e;
	if (!wn(r)) return null;
	let i = r;
	return n && (i = /*#__PURE__*/ q.createElement(Kd, {
		override: !0,
		status: !0
	}, i)), t && (i = /*#__PURE__*/ q.createElement(ps, null, i)), i;
}, Yd = () => k() && window.document.documentElement;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/drawer/useFocusable.js
function Xd(e, t, n) {
	return (0, q.useMemo)(() => ({
		trap: t ?? !0,
		focusTriggerAfterClose: n ?? !0,
		...e
	}), [
		e,
		t,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/skeleton/Element.js
var Zd = (e) => {
	let { prefixCls: t, className: n, style: r, size: i, shape: a } = e, o = h({
		[`${t}-lg`]: i === "large",
		[`${t}-sm`]: i === "small"
	}), s = h({
		[`${t}-circle`]: a === "circle",
		[`${t}-square`]: a === "square",
		[`${t}-round`]: a === "round"
	}), c = q.useMemo(() => Tn(i) ? {
		width: i,
		height: i,
		lineHeight: `${i}px`
	} : {}, [i]);
	return /*#__PURE__*/ q.createElement("span", {
		className: h(t, o, s, n),
		style: {
			...c,
			...r
		}
	});
}, Qd = new x("ant-skeleton-loading", {
	"0%": { backgroundPosition: "100% 50%" },
	"100%": { backgroundPosition: "0 50%" }
}), $d = (e) => ({
	height: e,
	lineHeight: L(e)
}), ef = (e) => ({
	width: e,
	...$d(e)
}), tf = (e) => ({
	background: e.skeletonLoadingBackground,
	backgroundSize: "400% 100%",
	animationName: Qd,
	animationDuration: e.skeletonLoadingMotionDuration,
	animationTimingFunction: "ease",
	animationIterationCount: "infinite"
}), nf = (e, t) => ({
	width: t(e).mul(5).equal(),
	minWidth: t(e).mul(5).equal(),
	...$d(e)
}), rf = (e) => {
	let { skeletonAvatarCls: t, gradientFromColor: n, controlHeight: r, controlHeightLG: i, controlHeightSM: a } = e;
	return {
		[t]: {
			display: "inline-block",
			verticalAlign: "top",
			background: n,
			...ef(r)
		},
		[`${t}${t}-circle`]: { borderRadius: "50%" },
		[`${t}${t}-lg`]: { ...ef(i) },
		[`${t}${t}-sm`]: { ...ef(a) }
	};
}, af = (e) => {
	let { controlHeight: t, borderRadiusSM: n, skeletonInputCls: r, controlHeightLG: i, controlHeightSM: a, gradientFromColor: o, calc: s } = e;
	return {
		[r]: {
			display: "inline-block",
			verticalAlign: "top",
			background: o,
			borderRadius: n,
			...nf(t, s)
		},
		[`${r}-lg`]: { ...nf(i, s) },
		[`${r}-sm`]: { ...nf(a, s) }
	};
}, of = (e) => {
	let { gradientFromColor: t, borderRadiusSM: n, imageSizeBase: r, calc: i } = e;
	return {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		verticalAlign: "middle",
		background: t,
		borderRadius: n,
		...ef(i(r).mul(2).equal())
	};
}, sf = (e) => ({ [e.skeletonNodeCls]: { ...of(e) } }), cf = (e) => {
	let { skeletonImageCls: t, imageSizeBase: n, calc: r } = e;
	return {
		[t]: {
			...of(e),
			[`${t}-path`]: { fill: "#bfbfbf" },
			[`${t}-svg`]: {
				...ef(n),
				maxWidth: r(n).mul(4).equal(),
				maxHeight: r(n).mul(4).equal()
			},
			[`${t}-svg${t}-svg-circle`]: { borderRadius: "50%" }
		},
		[`${t}${t}-circle`]: { borderRadius: "50%" }
	};
}, lf = (e, t, n) => {
	let { skeletonButtonCls: r } = e;
	return {
		[`${n}${r}-circle`]: {
			width: t,
			minWidth: t,
			borderRadius: "50%"
		},
		[`${n}${r}-round`]: { borderRadius: t }
	};
}, uf = (e, t) => ({
	width: t(e).mul(2).equal(),
	minWidth: t(e).mul(2).equal(),
	...$d(e)
}), df = (e) => {
	let { borderRadiusSM: t, skeletonButtonCls: n, controlHeight: r, controlHeightLG: i, controlHeightSM: a, gradientFromColor: o, calc: s } = e;
	return {
		[n]: {
			display: "inline-block",
			verticalAlign: "top",
			background: o,
			borderRadius: t,
			width: s(r).mul(2).equal(),
			minWidth: s(r).mul(2).equal(),
			...uf(r, s)
		},
		...lf(e, r, n),
		[`${n}-lg`]: { ...uf(i, s) },
		...lf(e, i, `${n}-lg`),
		[`${n}-sm`]: { ...uf(a, s) },
		...lf(e, a, `${n}-sm`)
	};
}, ff = (e) => {
	let { componentCls: t, skeletonAvatarCls: n, skeletonTitleCls: r, skeletonParagraphCls: i, skeletonButtonCls: a, skeletonInputCls: o, skeletonNodeCls: s, skeletonImageCls: c, controlHeight: l, controlHeightLG: u, controlHeightSM: d, gradientFromColor: f, padding: p, marginSM: m, borderRadius: h, titleHeight: g, blockRadius: _, paragraphLiHeight: v, controlHeightXS: y, paragraphMarginTop: b } = e;
	return {
		[t]: {
			display: "table",
			width: "100%",
			[`${t}-header`]: {
				display: "table-cell",
				paddingInlineEnd: p,
				verticalAlign: "top",
				[n]: {
					display: "inline-block",
					verticalAlign: "top",
					background: f,
					...ef(l)
				},
				[`${n}-circle`]: { borderRadius: "50%" },
				[`${n}-lg`]: { ...ef(u) },
				[`${n}-sm`]: { ...ef(d) }
			},
			[`${t}-section`]: {
				display: "table-cell",
				width: "100%",
				verticalAlign: "top",
				[r]: {
					width: "100%",
					height: g,
					background: f,
					borderRadius: _,
					[`+ ${i}`]: { marginBlockStart: d }
				},
				[i]: {
					padding: 0,
					"> li": {
						width: "100%",
						height: v,
						listStyle: "none",
						background: f,
						borderRadius: _,
						"+ li": { marginBlockStart: y }
					}
				},
				[`${i}> li:last-child:not(:first-child):not(:nth-child(2))`]: { width: "61%" }
			},
			[`&-round ${t}-section`]: { [`${r}, ${i} > li`]: { borderRadius: h } }
		},
		[`${t}-with-avatar ${t}-section`]: { [r]: {
			marginBlockStart: m,
			[`+ ${i}`]: { marginBlockStart: b }
		} },
		[`${t}${t}-element`]: {
			display: "inline-block",
			width: "auto",
			...df(e),
			...rf(e),
			...af(e),
			...sf(e),
			...cf(e)
		},
		[`${t}${t}-block`]: {
			width: "100%",
			[a]: { width: "100%" },
			[o]: { width: "100%" }
		},
		[`${t}${t}-active`]: { [`
        ${r},
        ${i} > li,
        ${n},
        ${a},
        ${o},
        ${s},
        ${c}
      `]: { ...tf(e) } }
	};
}, pf = Tt("Skeleton", (e) => {
	let { componentCls: t, calc: n } = e;
	return ff(ve(e, {
		skeletonAvatarCls: `${t}-avatar`,
		skeletonTitleCls: `${t}-title`,
		skeletonParagraphCls: `${t}-paragraph`,
		skeletonButtonCls: `${t}-button`,
		skeletonInputCls: `${t}-input`,
		skeletonNodeCls: `${t}-node`,
		skeletonImageCls: `${t}-image`,
		imageSizeBase: n(e.controlHeight).mul(1.5).equal(),
		borderRadius: 100,
		skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
		skeletonLoadingMotionDuration: "1.4s"
	}));
}, (e) => {
	let { colorFillContent: t, colorFill: n } = e, r = t, i = n;
	return {
		color: r,
		colorGradientEnd: i,
		gradientFromColor: r,
		gradientToColor: i,
		titleHeight: e.controlHeight / 2,
		blockRadius: e.borderRadiusSM,
		paragraphMarginTop: e.marginLG + e.marginXXS,
		paragraphLiHeight: e.controlHeight / 2
	};
}, { deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]] }), mf = (e) => {
	let { prefixCls: t, className: n, classNames: r, rootClassName: i, active: a, style: o, styles: s, shape: c = "circle", size: l, ...u } = e, { getPrefixCls: d } = q.useContext(X), f = d("skeleton", t), [p, m] = pf(f), g = ls((e) => l ?? e), _ = h(f, `${f}-element`, { [`${f}-active`]: a }, r?.root, n, i, p, m);
	return /*#__PURE__*/ q.createElement("div", {
		className: _,
		style: s?.root
	}, /*#__PURE__*/ q.createElement(Zd, {
		prefixCls: `${f}-avatar`,
		className: r?.content,
		style: {
			...s?.content,
			...o
		},
		shape: c,
		size: g,
		...u
	}));
}, hf = (e) => {
	let { prefixCls: t, className: n, rootClassName: r, classNames: i, active: a, style: o, styles: s, block: c = !1, size: l, ...u } = e, { getPrefixCls: d } = q.useContext(X), f = d("skeleton", t), [p, m] = pf(f), g = ls((e) => l ?? e), _ = h(f, `${f}-element`, {
		[`${f}-active`]: a,
		[`${f}-block`]: c
	}, i?.root, n, r, p, m);
	return /*#__PURE__*/ q.createElement("div", {
		className: _,
		style: s?.root
	}, /*#__PURE__*/ q.createElement(Zd, {
		prefixCls: `${f}-button`,
		className: i?.content,
		style: {
			...s?.content,
			...o
		},
		size: g,
		...u
	}));
}, gf = (e) => {
	let { prefixCls: t, className: n, classNames: r, rootClassName: i, internalClassName: a, style: o, styles: s, active: c, children: l } = e, { getPrefixCls: u } = q.useContext(X), d = u("skeleton", t), [f, p] = pf(d), m = h(d, `${d}-element`, { [`${d}-active`]: c }, f, r?.root, n, i, p);
	return /*#__PURE__*/ q.createElement("div", {
		className: m,
		style: s?.root
	}, /*#__PURE__*/ q.createElement("div", {
		className: h(r?.content, a || `${d}-node`),
		style: {
			...s?.content,
			...o
		}
	}, l));
}, _f = (e) => {
	let { getPrefixCls: t } = q.useContext(X), n = t("skeleton", e.prefixCls);
	return /*#__PURE__*/ q.createElement(gf, {
		...e,
		internalClassName: `${n}-image`
	}, /*#__PURE__*/ q.createElement("svg", {
		viewBox: "0 0 1098 1024",
		xmlns: "http://www.w3.org/2000/svg",
		className: `${n}-image-svg`
	}, /*#__PURE__*/ q.createElement("title", null, "Image placeholder"), /*#__PURE__*/ q.createElement("path", {
		d: "M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",
		className: `${n}-image-path`
	})));
}, vf = (e) => {
	let { prefixCls: t, className: n, classNames: r, rootClassName: i, active: a, block: o, style: s, styles: c, size: l, ...u } = e, { getPrefixCls: d } = q.useContext(X), f = d("skeleton", t), [p, m] = pf(f), g = ls((e) => l ?? e), _ = h(f, `${f}-element`, {
		[`${f}-active`]: a,
		[`${f}-block`]: o
	}, r?.root, n, i, p, m);
	return /*#__PURE__*/ q.createElement("div", {
		className: _,
		style: c?.root
	}, /*#__PURE__*/ q.createElement(Zd, {
		prefixCls: `${f}-input`,
		className: r?.content,
		style: {
			...c?.content,
			...s
		},
		size: g,
		...u
	}));
}, yf = (e, t) => {
	let { width: n, rows: r = 2 } = t;
	if (Array.isArray(n)) return n[e];
	if (r - 1 === e) return n;
}, bf = (e) => {
	let { prefixCls: t, className: n, style: r, rows: i = 0 } = e, a = Array.from({ length: i }).map((t, n) => /*#__PURE__*/ q.createElement("li", {
		key: n,
		style: { width: yf(n, e) }
	}));
	return /*#__PURE__*/ q.createElement("ul", {
		className: h(t, n),
		style: r
	}, a);
}, xf = ({ prefixCls: e, className: t, width: n, style: r }) => /*#__PURE__*/ q.createElement("h3", {
	className: h(e, t),
	style: {
		width: n,
		...r
	}
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/skeleton/Skeleton.js
function Sf(e) {
	return Dn(e) ? e : {};
}
function Cf(e, t) {
	return e && !t ? {
		size: "large",
		shape: "square"
	} : {
		size: "large",
		shape: "circle"
	};
}
function wf(e, t) {
	return !e && t ? { width: "38%" } : e && t ? { width: "50%" } : {};
}
function Tf(e, t) {
	let n = {};
	return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n;
}
var Ef = (e) => {
	let { prefixCls: t, loading: n, className: r, rootClassName: i, classNames: a, style: o, styles: s, children: c, avatar: l = !1, title: u = !0, paragraph: d = !0, active: f, round: p } = e, { getPrefixCls: m, direction: g, className: _, style: v, classNames: y, styles: b } = Le("skeleton"), x = m("skeleton", t), [S, C] = pf(x), w = {
		...e,
		avatar: l,
		title: u,
		paragraph: d
	}, [T, E] = Rn([y, a], [b, s], { props: w });
	if (n || !("loading" in e)) {
		let e = !!l, t = !!u, n = !!d, a;
		if (e) {
			let e = {
				className: T.avatar,
				prefixCls: `${x}-avatar`,
				...Cf(t, n),
				...Sf(l),
				style: E.avatar
			};
			a = /*#__PURE__*/ q.createElement("div", {
				className: h(T.header, `${x}-header`),
				style: E.header
			}, /*#__PURE__*/ q.createElement(Zd, { ...e }));
		}
		let s;
		if (t || n) {
			let r;
			if (t) {
				let t = {
					className: T.title,
					prefixCls: `${x}-title`,
					...wf(e, n),
					...Sf(u),
					style: E.title
				};
				r = /*#__PURE__*/ q.createElement(xf, { ...t });
			}
			let i;
			if (n) {
				let n = {
					className: T.paragraph,
					prefixCls: `${x}-paragraph`,
					...Tf(e, t),
					...Sf(d),
					style: E.paragraph
				};
				i = /*#__PURE__*/ q.createElement(bf, { ...n });
			}
			s = /*#__PURE__*/ q.createElement("div", {
				className: h(T.section, `${x}-section`),
				style: E.section
			}, r, i);
		}
		let c = h(x, {
			[`${x}-with-avatar`]: e,
			[`${x}-active`]: f,
			[`${x}-rtl`]: g === "rtl",
			[`${x}-round`]: p
		}, T.root, _, r, i, S, C);
		return /*#__PURE__*/ q.createElement("div", {
			className: c,
			style: {
				...E.root,
				...v,
				...o
			}
		}, a, s);
	}
	return c ?? null;
};
Ef.Button = hf, Ef.Avatar = mf, Ef.Input = vf, Ef.Image = _f, Ef.Node = gf;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/skeleton/index.js
var Df = /* @__PURE__ */ e({ default: () => Of }), Of = Ef;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/watermark/context.js
function kf() {}
var Af = /*#__PURE__*/ q.createContext({
	add: kf,
	remove: kf
});
function jf(e) {
	let t = q.useContext(Af), n = q.useRef(null);
	return M((r) => {
		if (r) {
			let i = e ? r.querySelector(e) : r;
			i && (t.add(i), n.current = i);
		} else t.remove(n.current);
	});
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/modal/components/NormalCancelBtn.js
var Mf = () => {
	let { cancelButtonProps: e, cancelTextLocale: t, onCancel: n } = (0, q.useContext)(Hl);
	return /*#__PURE__*/ q.createElement(Bl, {
		onClick: n,
		...e
	}, t);
}, Nf = () => {
	let { confirmLoading: e, okButtonProps: t, okType: n, okTextLocale: r, onOk: i } = (0, q.useContext)(Hl);
	return /*#__PURE__*/ q.createElement(Bl, {
		...bs(n),
		loading: e,
		onClick: i,
		...t
	}, r);
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/modal/shared.js
function Pf(e, t) {
	return /*#__PURE__*/ q.createElement("span", { className: `${e}-close-x` }, t || /*#__PURE__*/ q.createElement(O, { className: `${e}-close-icon` }));
}
var Ff = (e) => {
	let { okText: t, okType: n = "primary", cancelText: r, confirmLoading: i, onOk: a, onCancel: o, okButtonProps: s, cancelButtonProps: c, footer: l } = e, [u] = hr("Modal", pr()), d = t || u?.okText, f = r || u?.cancelText, p = q.useMemo(() => ({
		confirmLoading: i,
		okButtonProps: s,
		cancelButtonProps: c,
		okTextLocale: d,
		cancelTextLocale: f,
		okType: n,
		onOk: a,
		onCancel: o
	}), [
		i,
		s,
		c,
		d,
		f,
		n,
		a,
		o
	]), m;
	return On(l) || l === void 0 ? (m = /*#__PURE__*/ q.createElement(q.Fragment, null, /*#__PURE__*/ q.createElement(Mf, null), /*#__PURE__*/ q.createElement(Nf, null)), On(l) && (m = l(m, {
		OkBtn: Nf,
		CancelBtn: Mf
	})), m = /*#__PURE__*/ q.createElement(Ul, { value: p }, m)) : m = l, /*#__PURE__*/ q.createElement(Ei, { disabled: !1 }, m);
}, If = (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		display: "flex",
		flexFlow: "row wrap",
		minWidth: 0,
		"&::before, &::after": { display: "flex" },
		"&-no-wrap": { flexWrap: "nowrap" },
		"&-start": { justifyContent: "flex-start" },
		"&-center": { justifyContent: "center" },
		"&-end": { justifyContent: "flex-end" },
		"&-space-between": { justifyContent: "space-between" },
		"&-space-around": { justifyContent: "space-around" },
		"&-space-evenly": { justifyContent: "space-evenly" },
		"&-top": { alignItems: "flex-start" },
		"&-middle": { alignItems: "center" },
		"&-bottom": { alignItems: "flex-end" }
	} };
}, Lf = (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		position: "relative",
		maxWidth: "100%",
		minHeight: 1
	} };
}, Rf = (e, t) => {
	let { componentCls: n, gridColumns: r, antCls: i } = e, [a, o] = Ot(i, "grid"), [, s] = Ot(i, "col"), c = {};
	for (let e = r; e >= 0; e--) e === 0 ? (c[`${n}${t}-${e}`] = { display: "none" }, c[`${n}-push-${e}`] = { insetInlineStart: "auto" }, c[`${n}-pull-${e}`] = { insetInlineEnd: "auto" }, c[`${n}${t}-push-${e}`] = { insetInlineStart: "auto" }, c[`${n}${t}-pull-${e}`] = { insetInlineEnd: "auto" }, c[`${n}${t}-offset-${e}`] = { marginInlineStart: 0 }, c[`${n}${t}-order-${e}`] = { order: 0 }) : (c[`${n}${t}-${e}`] = [{
		[a("display")]: "block",
		display: "block"
	}, {
		display: o("display"),
		flex: `0 0 ${e / r * 100}%`,
		maxWidth: `${e / r * 100}%`
	}], c[`${n}${t}-push-${e}`] = { insetInlineStart: `${e / r * 100}%` }, c[`${n}${t}-pull-${e}`] = { insetInlineEnd: `${e / r * 100}%` }, c[`${n}${t}-offset-${e}`] = { marginInlineStart: `${e / r * 100}%` }, c[`${n}${t}-order-${e}`] = { order: e });
	return c[`${n}${t}-flex`] = { flex: s(`${t.replace(/-/, "")}-flex`) }, c;
}, zf = (e, t) => Rf(e, t), Bf = (e, t, n) => ({ [`@media (min-width: ${L(t)})`]: { ...zf(e, n) } }), Vf = () => ({}), Hf = () => ({}), Uf = Tt("Grid", If, Vf), Wf = (e) => ({
	xs: e.screenXSMin,
	sm: e.screenSMMin,
	md: e.screenMDMin,
	lg: e.screenLGMin,
	xl: e.screenXLMin,
	xxl: e.screenXXLMin,
	xxxl: e.screenXXXLMin
}), Gf = Tt("Grid", (e) => {
	let t = ve(e, { gridColumns: 24 }), n = Wf(t);
	return delete n.xs, [
		Lf(t),
		zf(t, ""),
		zf(t, "-xs"),
		Object.keys(n).map((e) => Bf(t, n[e], `-${e}`)).reduce((e, t) => ({
			...e,
			...t
		}), {})
	];
}, Hf);
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/modal/style/index.js
function Kf(e) {
	return {
		position: e,
		inset: 0
	};
}
var qf = (e) => {
	let { componentCls: t, antCls: n } = e;
	return [{ [`${t}-root`]: {
		[`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
			transform: "none",
			opacity: 0,
			animationDuration: e.motionDurationSlow,
			userSelect: "none"
		},
		[`${t}${n}-zoom-leave ${t}-container`]: { pointerEvents: "none" },
		[`${t}-mask`]: {
			...Kf("fixed"),
			zIndex: e.zIndexPopupBase,
			height: "100%",
			backgroundColor: e.colorBgMask,
			pointerEvents: "none",
			[`&${t}-mask-blur`]: { backdropFilter: "blur(4px)" },
			[`${t}-hidden`]: { display: "none" }
		},
		[`${t}-wrap`]: {
			...Kf("fixed"),
			zIndex: e.zIndexPopupBase,
			overflow: "auto",
			outline: 0,
			WebkitOverflowScrolling: "touch"
		}
	} }, { [`${t}-root`]: Is(e) }];
}, Jf = (e) => {
	let { componentCls: t, motionDurationMid: n } = e;
	return [
		{ [`${t}-root`]: {
			[`${t}-wrap-rtl`]: { direction: "rtl" },
			[`${t}-centered`]: {
				textAlign: "center",
				"&::before": {
					display: "inline-block",
					width: 0,
					height: "100%",
					verticalAlign: "middle",
					content: "\"\""
				},
				[t]: {
					top: 0,
					display: "inline-block",
					paddingBottom: 0,
					textAlign: "start",
					verticalAlign: "middle"
				}
			},
			[`@media (max-width: ${e.screenSMMax}px)`]: {
				[t]: {
					maxWidth: "calc(100vw - 16px)",
					margin: `${L(e.marginXS)} auto`
				},
				[`${t}-centered`]: { [t]: { flex: 1 } }
			}
		} },
		{ [t]: {
			...ht(e),
			pointerEvents: "none",
			position: "relative",
			top: 100,
			width: "auto",
			maxWidth: `calc(100vw - ${L(e.calc(e.margin).mul(2).equal())})`,
			margin: "0 auto",
			"&:focus-visible": {
				borderRadius: e.borderRadiusLG,
				...yt(e)
			},
			[`${t}-title`]: {
				margin: 0,
				color: e.titleColor,
				fontWeight: e.fontWeightStrong,
				fontSize: e.titleFontSize,
				lineHeight: e.titleLineHeight,
				wordWrap: "break-word"
			},
			[`${t}-container`]: {
				position: "relative",
				backgroundColor: e.contentBg,
				backgroundClip: "padding-box",
				border: 0,
				borderRadius: e.borderRadiusLG,
				boxShadow: e.boxShadow,
				pointerEvents: "auto",
				padding: e.contentPadding
			},
			[`${t}-close`]: {
				position: "absolute",
				top: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
				insetInlineEnd: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
				zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
				padding: 0,
				color: e.modalCloseIconColor,
				fontWeight: e.fontWeightStrong,
				lineHeight: 1,
				textDecoration: "none",
				background: "transparent",
				borderRadius: e.borderRadiusSM,
				width: e.modalCloseBtnSize,
				height: e.modalCloseBtnSize,
				border: 0,
				outline: 0,
				cursor: "pointer",
				transition: ["color", "background-color"].map((e) => `${e} ${n}`).join(", "),
				"&-x": {
					display: "flex",
					fontSize: e.fontSizeLG,
					fontStyle: "normal",
					lineHeight: L(e.modalCloseBtnSize),
					justifyContent: "center",
					textTransform: "none",
					textRendering: "auto"
				},
				"&:disabled": { pointerEvents: "none" },
				"&:hover": {
					color: e.modalCloseIconHoverColor,
					backgroundColor: e.colorBgTextHover,
					textDecoration: "none"
				},
				"&:active": { backgroundColor: e.colorBgTextActive },
				...bt(e)
			},
			[`${t}-header`]: {
				color: e.colorText,
				background: e.headerBg,
				borderRadius: `${L(e.borderRadiusLG)} ${L(e.borderRadiusLG)} 0 0`,
				marginBottom: e.headerMarginBottom,
				padding: e.headerPadding,
				borderBottom: e.headerBorderBottom
			},
			[`${t}-body`]: {
				fontSize: e.fontSize,
				lineHeight: e.lineHeight,
				wordWrap: "break-word",
				padding: e.bodyPadding,
				[`${t}-body-skeleton`]: {
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: `${L(e.margin)} auto`
				}
			},
			[`${t}-footer`]: {
				display: "flex",
				justifyContent: "end",
				alignItems: "center",
				textAlign: "end",
				background: e.footerBg,
				marginTop: e.footerMarginTop,
				padding: e.footerPadding,
				borderTop: e.footerBorderTop,
				borderRadius: e.footerBorderRadius,
				[`> ${e.antCls}-btn + ${e.antCls}-btn`]: { marginInlineStart: e.marginXS }
			},
			[`${t}-open`]: { overflow: "hidden" }
		} },
		{ [`${t}-pure-panel`]: {
			top: "auto",
			padding: 0,
			display: "flex",
			flexDirection: "column",
			[`${t}-container,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
				display: "flex",
				flexDirection: "column",
				flex: "auto"
			},
			[`${t}-confirm-body`]: { marginBottom: "auto" }
		} }
	];
}, Yf = (e) => {
	let { componentCls: t } = e;
	return { [`${t}-root`]: { [`${t}-wrap-rtl`]: {
		direction: "rtl",
		[`${t}-confirm-body`]: { direction: "rtl" }
	} } };
}, Xf = (e) => {
	let { componentCls: t } = e, n = Wf(e), r = { ...n };
	delete r.xs;
	let i = `--${t.replace(".", "")}-`, a = Object.keys(r).map((e) => ({ [`@media (min-width: ${L(r[e])})`]: { width: `var(${i}${e}-width)` } }));
	return { [`${t}-root`]: { [t]: [].concat(m(Object.keys(n).map((e, t) => {
		let r = Object.keys(n)[t - 1];
		return r ? { [`${i}${e}-width`]: `var(${i}${r}-width)` } : null;
	})), [{ width: `var(${i}xs-width)` }], m(a)) } };
}, Zf = (e) => {
	let t = e.padding, n = e.fontSizeHeading5, r = e.lineHeightHeading5;
	return ve(e, {
		modalHeaderHeight: e.calc(e.calc(r).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),
		modalFooterBorderColorSplit: e.colorSplit,
		modalFooterBorderStyle: e.lineType,
		modalFooterBorderWidth: e.lineWidth,
		modalCloseIconColor: e.colorIcon,
		modalCloseIconHoverColor: e.colorIconHover,
		modalCloseBtnSize: e.controlHeight,
		modalConfirmIconSize: e.fontHeight,
		modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()
	});
}, Qf = (e) => ({
	footerBg: "transparent",
	headerBg: "transparent",
	titleLineHeight: e.lineHeightHeading5,
	titleFontSize: e.fontSizeHeading5,
	contentBg: e.colorBgElevated,
	titleColor: e.colorTextHeading,
	contentPadding: e.wireframe ? 0 : `${L(e.paddingMD)} ${L(e.paddingContentHorizontalLG)}`,
	headerPadding: e.wireframe ? `${L(e.padding)} ${L(e.paddingLG)}` : 0,
	headerBorderBottom: e.wireframe ? `${L(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
	headerMarginBottom: e.wireframe ? 0 : e.marginXS,
	bodyPadding: e.wireframe ? e.paddingLG : 0,
	footerPadding: e.wireframe ? `${L(e.paddingXS)} ${L(e.padding)}` : 0,
	footerBorderTop: e.wireframe ? `${L(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
	footerBorderRadius: e.wireframe ? `0 0 ${L(e.borderRadiusLG)} ${L(e.borderRadiusLG)}` : 0,
	footerMarginTop: e.wireframe ? 0 : e.marginSM,
	confirmBodyPadding: e.wireframe ? `${L(e.padding * 2)} ${L(e.padding * 2)} ${L(e.paddingLG)}` : 0,
	confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
	confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM,
	mask: !0
}), $f = Tt("Modal", (e) => {
	let t = Zf(e);
	return [
		Jf(t),
		Yf(t),
		qf(t),
		hc(t, "zoom"),
		Xf(t)
	];
}, Qf, { unitless: { titleLineHeight: !0 } }), ep;
Yd() && document.documentElement.addEventListener("click", (e) => {
	ep = {
		x: e.pageX,
		y: e.pageY
	}, setTimeout(() => {
		ep = null;
	}, 100);
}, !0);
var tp = (e) => {
	let { prefixCls: t, className: n, rootClassName: r, open: i, wrapClassName: a, centered: o, getContainer: s, style: c, width: l = 520, footer: u, classNames: d, styles: f, children: p, loading: m, confirmLoading: g, zIndex: _, mousePosition: v, onOk: y, onCancel: b, okButtonProps: x, cancelButtonProps: S, destroyOnHidden: C, destroyOnClose: w, panelRef: T = null, closable: E, mask: D, modalRender: k, maskClosable: A, focusTriggerAfterClose: j, focusable: M, ...N } = e, { getPopupContainer: P, getPrefixCls: F, direction: I, className: ee, style: te, classNames: ne, styles: L, centered: re, cancelButtonProps: R, okButtonProps: ie, mask: z, focusable: ae } = Le("modal"), { modal: oe } = q.useContext(X), [se, le] = q.useMemo(() => typeof E == "boolean" ? [void 0, void 0] : [E?.afterClose, E?.onClose], [E]), B = F("modal", t), V = F(), [H, ue, de] = Fa(D, z, B, A), U = Xd({
		...ae,
		...M
	}, H, j), fe = (e) => {
		g || (b?.(e), le?.());
	}, pe = (e) => {
		y?.(e), le?.();
	}, me = qn(B), [W, he] = $f(B, me), ge = h(a, {
		[`${B}-centered`]: o ?? re,
		[`${B}-wrap-rtl`]: I === "rtl"
	}), _e = u !== null && !m ? /*#__PURE__*/ q.createElement(Ff, {
		...e,
		okButtonProps: {
			...ie,
			...x
		},
		onOk: pe,
		cancelButtonProps: {
			...R,
			...S
		},
		onCancel: fe
	}) : null, [ve, G, K, ye] = Ma(Ea(e), Ea(oe), {
		closable: !0,
		closeIcon: /*#__PURE__*/ q.createElement(O, { className: `${B}-close-icon` }),
		closeIconRender: (e) => Pf(B, e)
	}), J = ve ? {
		disabled: K,
		closeIcon: G,
		afterClose: se,
		...ye
	} : !1, be = k ? (e) => /*#__PURE__*/ q.createElement("div", { className: `${B}-render` }, k(e)) : void 0, xe = ce(T, jf(`.${B}-${k ? "render" : "container"}`)), [Se, Ce] = Ya("Modal", _), we = {
		...e,
		width: l,
		panelRef: T,
		focusTriggerAfterClose: U.focusTriggerAfterClose,
		focusable: U,
		mask: H,
		maskClosable: de,
		zIndex: Se
	}, [Te, Ee] = Rn([
		ne,
		d,
		ue
	], [L, f], { props: we }), [De, Oe] = q.useMemo(() => Dn(l) ? [void 0, l] : [l, void 0], [l]), Y = q.useMemo(() => {
		let e = {};
		return Oe && Object.keys(Oe).forEach((t) => {
			let n = Oe[t];
			Cn(n) && (e[`--${B}-${t}-width`] = Tn(n) ? `${n}px` : n);
		}), e;
	}, [B, Oe]);
	return /*#__PURE__*/ q.createElement(Jd, {
		form: !0,
		space: !0
	}, /*#__PURE__*/ q.createElement(Ua.Provider, { value: Ce }, /*#__PURE__*/ q.createElement(ou, {
		width: De,
		...N,
		zIndex: Se,
		getContainer: s === void 0 ? P : s,
		prefixCls: B,
		rootClassName: h(W, r, he, me, Te.root),
		rootStyle: Ee.root,
		footer: _e,
		visible: i,
		mousePosition: v ?? ep,
		onClose: fe,
		closable: J,
		closeIcon: G,
		transitionName: Qo(V, "zoom", e.transitionName),
		maskTransitionName: Qo(V, "fade", e.maskTransitionName),
		mask: H,
		maskClosable: de,
		className: h(W, n, ee),
		style: {
			...te,
			...c,
			...Y
		},
		classNames: {
			...Te,
			wrapper: h(Te.wrapper, ge)
		},
		styles: Ee,
		panelRef: xe,
		destroyOnHidden: C ?? w,
		modalRender: be,
		focusTriggerAfterClose: U.focusTriggerAfterClose,
		focusTrap: U.trap
	}, m ? /*#__PURE__*/ q.createElement(Of, {
		active: !0,
		title: !1,
		paragraph: { rows: 4 },
		className: `${B}-body-skeleton`
	}) : p)));
}, np = (e) => {
	let { componentCls: t, titleFontSize: n, titleLineHeight: r, modalConfirmIconSize: i, fontSize: a, lineHeight: o, modalTitleHeight: s, fontHeight: c, confirmBodyPadding: l } = e, u = `${t}-confirm`;
	return {
		[u]: {
			"&-rtl": { direction: "rtl" },
			[`${e.antCls}-modal-header`]: { display: "none" },
			[`${u}-body-wrapper`]: { ...vt() },
			[`&${t} ${t}-body`]: { padding: l },
			[`${u}-body`]: {
				display: "flex",
				flexWrap: "nowrap",
				alignItems: "start",
				[`> ${e.iconCls}`]: {
					flex: "none",
					fontSize: i,
					marginInlineEnd: e.confirmIconMarginInlineEnd,
					marginTop: e.calc(e.calc(c).sub(i).equal()).div(2).equal()
				},
				[`&-has-title > ${e.iconCls}`]: { marginTop: e.calc(e.calc(s).sub(i).equal()).div(2).equal() }
			},
			[`${u}-paragraph`]: {
				display: "flex",
				flexDirection: "column",
				flex: "auto",
				rowGap: e.marginXS,
				maxWidth: `calc(100% - ${L(e.marginSM)})`
			},
			[`${u}-body-no-icon ${u}-paragraph`]: { maxWidth: "100%" },
			[`${e.iconCls} + ${u}-paragraph`]: { maxWidth: `calc(100% - ${L(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})` },
			[`${u}-title`]: {
				color: e.colorTextHeading,
				fontWeight: e.fontWeightStrong,
				fontSize: n,
				lineHeight: r
			},
			[`${u}-container`]: {
				color: e.colorText,
				fontSize: a,
				lineHeight: o
			},
			[`${u}-btns`]: {
				textAlign: "end",
				marginTop: e.confirmBtnsMarginTop,
				[`${e.antCls}-btn + ${e.antCls}-btn`]: {
					marginBottom: 0,
					marginInlineStart: e.marginXS
				}
			}
		},
		[`${u}-error ${u}-body > ${e.iconCls}`]: { color: e.colorError },
		[`${u}-warning ${u}-body > ${e.iconCls},
        ${u}-confirm ${u}-body > ${e.iconCls}`]: { color: e.colorWarning },
		[`${u}-info ${u}-body > ${e.iconCls}`]: { color: e.colorInfo },
		[`${u}-success ${u}-body > ${e.iconCls}`]: { color: e.colorSuccess }
	};
}, rp = Dt(["Modal", "confirm"], (e) => np(Zf(e)), Qf, { order: -1e3 }), ip = (e) => {
	let { prefixCls: t, icon: n, okText: r, cancelText: i, confirmPrefixCls: a, type: o, okCancel: s, footer: c, locale: l, autoFocusButton: u, focusable: d, ...f } = e, { infoIcon: p, successIcon: m, errorIcon: g, warningIcon: _ } = Le("modal"), v = n;
	if (n === void 0) switch (o) {
		case "info":
			v = wa(p, /*#__PURE__*/ q.createElement(se, null));
			break;
		case "success":
			v = wa(m, /*#__PURE__*/ q.createElement(fe, null));
			break;
		case "error":
			v = wa(g, /*#__PURE__*/ q.createElement(R, null));
			break;
		default: v = wa(_, /*#__PURE__*/ q.createElement(ue, null));
	}
	let y = s ?? o === "confirm", b = q.useMemo(() => {
		let e = d?.autoFocusButton || u;
		return e || e === null ? e : "ok";
	}, [u, d?.autoFocusButton]), [x] = hr("Modal"), S = l || x, C = r || (y ? S?.okText : S?.justOkText), w = i || S?.cancelText, { closable: T } = f, { onClose: E } = Dn(T) ? T : {}, D = q.useMemo(() => ({
		autoFocusButton: b,
		cancelTextLocale: w,
		okTextLocale: C,
		mergedOkCancel: y,
		onClose: E,
		...f
	}), [
		b,
		w,
		C,
		y,
		E,
		f
	]), O = /*#__PURE__*/ q.createElement(q.Fragment, null, /*#__PURE__*/ q.createElement(Wl, null), /*#__PURE__*/ q.createElement(Gl, null)), k = wn(e.title), A = wn(v), j = `${a}-body`;
	return /*#__PURE__*/ q.createElement("div", { className: `${a}-body-wrapper` }, /*#__PURE__*/ q.createElement("div", { className: h(j, {
		[`${j}-has-title`]: k,
		[`${j}-no-icon`]: !A
	}) }, v, /*#__PURE__*/ q.createElement("div", { className: `${a}-paragraph` }, k && /*#__PURE__*/ q.createElement("span", { className: `${a}-title` }, e.title), /*#__PURE__*/ q.createElement("div", { className: `${a}-content` }, e.content))), c === void 0 || On(c) ? /*#__PURE__*/ q.createElement(Ul, { value: D }, /*#__PURE__*/ q.createElement("div", { className: `${a}-btns` }, On(c) ? c(O, {
		OkBtn: Gl,
		CancelBtn: Wl
	}) : O)) : c, /*#__PURE__*/ q.createElement(rp, { prefixCls: t }));
}, ap = (e) => {
	let { close: t, zIndex: n, maskStyle: r, direction: i, prefixCls: a, wrapClassName: o, rootPrefixCls: s, bodyStyle: c, closable: l = !1, onConfirm: u, styles: d, title: f, mask: p, maskClosable: m, okButtonProps: g, cancelButtonProps: _ } = e, { cancelButtonProps: v, okButtonProps: y } = Le("modal"), b = `${a}-confirm`, x = e.width || 416, S = e.style || {}, C = h(b, `${b}-${e.type}`, { [`${b}-rtl`]: i === "rtl" }, e.className), w = q.useMemo(() => {
		let e = Pa(p, m);
		return e.closable ??= !1, e;
	}, [p, m]), [, T] = ft(), E = q.useMemo(() => n === void 0 ? T.zIndexPopupBase + Ga : n, [n, T]);
	return /*#__PURE__*/ q.createElement(tp, {
		...e,
		className: C,
		wrapClassName: h({ [`${b}-centered`]: !!e.centered }, o),
		onCancel: () => {
			t?.({ triggerCancel: !0 }), u?.(!1);
		},
		title: f,
		footer: null,
		transitionName: Qo(s || "", "zoom", e.transitionName),
		maskTransitionName: Qo(s || "", "fade", e.maskTransitionName),
		mask: w,
		style: S,
		styles: {
			body: c,
			mask: r,
			...d
		},
		width: x,
		zIndex: E,
		closable: l
	}, /*#__PURE__*/ q.createElement(ip, {
		...e,
		confirmPrefixCls: b,
		okButtonProps: {
			...y,
			...g
		},
		cancelButtonProps: {
			...v,
			..._
		}
	}));
}, op = (e) => {
	let { rootPrefixCls: t, iconPrefixCls: n, direction: r, theme: i } = e;
	return /*#__PURE__*/ q.createElement(qi, {
		prefixCls: t,
		iconPrefixCls: n,
		direction: r,
		theme: i
	}, /*#__PURE__*/ q.createElement(ap, { ...e }));
}, sp = [], cp = "";
function lp() {
	return cp;
}
var up = (e) => {
	let { prefixCls: t, getContainer: n, direction: r } = e, i = pr(), a = (0, q.useContext)(X), o = lp() || a.getPrefixCls(), s = t || `${o}-modal`, c = n;
	return c === !1 && (c = void 0), /*#__PURE__*/ q.createElement(op, {
		...e,
		rootPrefixCls: o,
		prefixCls: s,
		iconPrefixCls: a.iconPrefixCls,
		theme: a.theme,
		direction: r ?? a.direction,
		locale: a.locale?.Modal ?? i,
		getContainer: c
	});
};
function dp(e) {
	let t = Gi(), n = document.createDocumentFragment(), r = {
		...e,
		close: s,
		open: !0
	}, i;
	function a(...t) {
		t.some((e) => e?.triggerCancel) && e.onCancel?.(() => {}, ...t.slice(1));
		for (let e = 0; e < sp.length; e++) if (sp[e] === s) {
			sp.splice(e, 1);
			break;
		}
		c(n).then(() => {});
	}
	let o = (e) => {
		clearTimeout(i), i = setTimeout(() => {
			let r = t.getPrefixCls(void 0, lp()), i = t.getIconPrefixCls(), a = t.getTheme(), o = /*#__PURE__*/ q.createElement(up, { ...e });
			v(/*#__PURE__*/ q.createElement(qi, {
				prefixCls: r,
				iconPrefixCls: i,
				theme: a
			}, On(t.holderRender) ? t.holderRender(o) : o), n);
		});
	};
	function s(...t) {
		r = {
			...r,
			open: !1,
			afterClose: () => {
				On(e.afterClose) && e.afterClose(), a.apply(this, t);
			}
		}, o(r);
	}
	function l(e) {
		r = On(e) ? e(r) : {
			...r,
			...e
		}, o(r);
	}
	return o(r), sp.push(s), {
		destroy: s,
		update: l
	};
}
function fp(e) {
	return {
		...e,
		type: "warning"
	};
}
function pp(e) {
	return {
		...e,
		type: "info"
	};
}
function mp(e) {
	return {
		...e,
		type: "success"
	};
}
function hp(e) {
	return {
		...e,
		type: "error"
	};
}
function gp(e) {
	return {
		...e,
		type: "confirm"
	};
}
function _p({ rootPrefixCls: e }) {
	cp = e;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/modal/useModal/HookModal.js
var vp = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { afterClose: n, config: r, ...i } = e, [a, o] = q.useState(!0), [s, c] = q.useState(r), { direction: l, getPrefixCls: u } = q.useContext(X), d = u("modal"), f = u(), p = () => {
		n(), s.afterClose?.();
	}, m = (...e) => {
		o(!1), e.some((e) => e?.triggerCancel) && s.onCancel?.(() => {}, ...e.slice(1));
	};
	q.useImperativeHandle(t, () => ({
		destroy: m,
		update: (e) => {
			c((t) => {
				let n = On(e) ? e(t) : e;
				return {
					...t,
					...n
				};
			});
		}
	}));
	let h = s.okCancel ?? s.type === "confirm", [g] = hr("Modal", cr.Modal);
	return /*#__PURE__*/ q.createElement(op, {
		prefixCls: d,
		rootPrefixCls: f,
		...s,
		close: m,
		open: a,
		afterClose: p,
		okText: s.okText || (h ? g?.okText : g?.justOkText),
		direction: s.direction || l,
		cancelText: s.cancelText || g?.cancelText,
		...i
	});
}), yp = 0, bp = /*#__PURE__*/ q.memo(/*#__PURE__*/ q.forwardRef((e, t) => {
	let [n, r] = za();
	return q.useImperativeHandle(t, () => ({ patchElement: r }), [r]), /*#__PURE__*/ q.createElement(q.Fragment, null, n);
}));
function xp() {
	let e = q.useRef(null), [t, n] = q.useState([]);
	q.useEffect(() => {
		t.length && (m(t).forEach((e) => {
			e();
		}), n([]));
	}, [t]);
	let r = q.useCallback((t) => function(r) {
		yp += 1;
		let i = /*#__PURE__*/ q.createRef(), a, o = new Promise((e) => {
			a = e;
		}), s = !1, c, l = /*#__PURE__*/ q.createElement(vp, {
			key: `modal-${yp}`,
			config: t(r),
			ref: i,
			afterClose: () => {
				c?.();
			},
			isSilent: () => s,
			onConfirm: (e) => {
				a(e);
			}
		});
		return c = e.current?.patchElement(l), c && sp.push(c), {
			destroy: () => {
				function e() {
					i.current?.destroy();
				}
				i.current ? e() : n((t) => [].concat(m(t), [e]));
			},
			update: (e) => {
				function t() {
					i.current?.update(e);
				}
				i.current ? t() : n((e) => [].concat(m(e), [t]));
			},
			then: (e) => (s = !0, o.then(e))
		};
	}, []);
	return [q.useMemo(() => ({
		info: r(pp),
		success: r(mp),
		error: r(hp),
		warning: r(fp),
		confirm: r(gp)
	}), [r]), /*#__PURE__*/ q.createElement(bp, {
		key: "modal-holder",
		ref: e
	})];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/notification/PurePanel.js
var Sp = {
	info: /*#__PURE__*/ q.createElement(se, null),
	success: /*#__PURE__*/ q.createElement(fe, null),
	error: /*#__PURE__*/ q.createElement(R, null),
	warning: /*#__PURE__*/ q.createElement(ue, null),
	loading: /*#__PURE__*/ q.createElement(V, null)
};
function Cp(e, t) {
	return t === null || t === !1 ? null : t || /*#__PURE__*/ q.createElement(O, { className: `${e}-close-icon` });
}
var wp = (e) => {
	let { prefixCls: t, icon: n, type: r, message: i, title: a, description: o, btn: s, actions: c, closeIcon: l, className: u, style: d, styles: f, classNames: p, closable: m, role: g, ..._ } = e, { getPrefixCls: v, className: y, style: b, classNames: x, styles: S } = Le("notification"), [C, w] = Rn([x, p], [S, f], { props: e }), { notification: T } = q.useContext(X), E = c ?? s, D = a ?? i, k = wn(D), A = t || v("notification"), j = `${A}-notice`, M = n || (r ? Sp[r] : null), N = !n && r ? `${j}-icon-${r}` : void 0, { root: P, ...F } = C, { root: I, ...ee } = w, te = qn(A), [ne, L] = wo(A, te), [re, R, , ie] = Ma(Ea(e), Ea(T), {
		closable: !0,
		closeIcon: /*#__PURE__*/ q.createElement(O, { className: `${A}-close-icon` }),
		closeIconRender: (e) => Cp(A, e)
	}), z = re ? {
		onClose: Dn(m) ? m?.onClose : void 0,
		closeIcon: R,
		...ie
	} : !1;
	return /*#__PURE__*/ q.createElement("div", {
		className: h(`${j}-pure-panel`, ne, u, L, te, P),
		style: I
	}, /*#__PURE__*/ q.createElement(So, { prefixCls: A }), /*#__PURE__*/ q.createElement(ra, {
		style: {
			...b,
			...d
		},
		..._,
		prefixCls: A,
		duration: null,
		closable: z,
		className: y,
		title: k ? D : null,
		description: o,
		icon: M,
		actions: E,
		role: g,
		classNames: {
			...F,
			icon: h(N, F.icon)
		},
		styles: ee
	}));
}, Tp = 4.5, Ep = "topRight", Dp = { offset: 8 }, Op = ({ children: e, prefixCls: t }) => {
	let n = qn(t), [r, i] = wo(t, n);
	return /*#__PURE__*/ q.createElement(aa, { classNames: { list: h(r, i, n) } }, e);
}, kp = (e, { prefixCls: t, key: n }) => /*#__PURE__*/ q.createElement(Op, {
	prefixCls: t,
	key: n
}, e), Ap = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { top: n, bottom: r, prefixCls: i, getContainer: a, maxCount: o, rtl: s, onAllRemoved: c, stack: l, duration: u = Tp, pauseOnHover: d = !0, showProgress: f } = e, { getPrefixCls: p, getPopupContainer: m, direction: g } = Le("notification"), { notification: _ } = (0, q.useContext)(X), v = i || p("notification"), y = (0, q.useMemo)(() => Tn(u) && u > 0 ? u : !1, [u]), [b, x] = Rn([_?.classNames, e?.classNames], [_?.styles, e?.styles], { props: e }), S = () => xa(n, r), C = () => h({ [`${v}-rtl`]: s ?? g === "rtl" }), w = () => Sa(v), T = ba(l, Dp), [E, D] = ya({
		prefixCls: v,
		style: S,
		className: C,
		motion: w,
		closable: { closeIcon: Cp(v) },
		duration: y,
		getContainer: () => a?.() || m?.() || document.body,
		maxCount: o,
		pauseOnHover: d,
		showProgress: f,
		classNames: b,
		styles: x,
		onAllRemoved: c,
		renderNotifications: kp,
		stack: T
	});
	return q.useImperativeHandle(t, () => ({
		...E,
		prefixCls: v,
		notification: _
	})), D;
});
function jp(e) {
	let t = q.useRef(null);
	Hn("Notification");
	let { notification: n } = q.useContext(X);
	return [q.useMemo(() => {
		let r = (r) => {
			if (!t.current) return;
			let { open: i, prefixCls: a, notification: o } = t.current, s = o?.className || {}, c = o?.style || {}, l = `${a}-notice`, { title: u, message: d, description: f, icon: p, type: m, btn: g, actions: _, className: v, style: y, role: b = "alert", closeIcon: x, closable: S, classNames: C = {}, styles: w = {}, ...T } = r, E = u ?? d, D = wn(E), O = _ ?? g, k = Cp(l, Ca(x, e, o)), [A, j, , M] = ja(Ea({
				...e || {},
				...r
			}), Ea(n), {
				closable: !0,
				closeIcon: k
			}), N = A ? {
				onClose: Dn(S) ? S.onClose : void 0,
				closeIcon: j,
				...M
			} : !1, P = Ln(C, { props: r }), F = Ln(w, { props: r }), I = p || (m ? Sp[m] : null), ee = !p && m ? `${l}-icon-${m}` : void 0;
			return i({
				placement: e?.placement ?? Ep,
				...T,
				title: D ? E : null,
				description: f,
				icon: I,
				actions: O,
				role: b,
				classNames: {
					...P,
					icon: h(ee, P.icon)
				},
				styles: {
					...F,
					root: {
						...c,
						...F.root
					}
				},
				className: h({ [`${l}-${m}`]: m }, v, s),
				style: y,
				closable: N
			});
		}, i = {
			open: r,
			destroy: (e) => {
				e === void 0 ? t.current?.destroy() : t.current?.close(e);
			}
		};
		return [
			"success",
			"info",
			"warning",
			"error"
		].forEach((e) => {
			i[e] = (t) => r({
				...t,
				type: e
			});
		}), i;
	}, [e, n]), /*#__PURE__*/ q.createElement(Ap, {
		key: "notification-holder",
		...e,
		ref: t
	})];
}
function Mp(e) {
	return jp(e);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/app/context.js
var Np = /*#__PURE__*/ q.createContext({}), Pp = /*#__PURE__*/ q.createContext({
	message: {},
	notification: {},
	modal: {}
}), Fp = Tt("App", (e) => {
	let { componentCls: t, colorText: n, fontSize: r, lineHeight: i, fontFamily: a } = e;
	return { [t]: {
		color: n,
		fontSize: r,
		lineHeight: i,
		fontFamily: a,
		[`&${t}-rtl`]: { direction: "rtl" }
	} };
}, () => ({})), Ip = /*#__PURE__*/ q.forwardRef((e, t) => {
	let { prefixCls: n, children: r, className: i, rootClassName: a, message: o, notification: s, style: c, component: l = "div" } = e, { direction: u, getPrefixCls: d, className: f, style: p } = Le("app"), m = d("app", n), [g, _] = Fp(m), v = h(g, m, i, a, _, { [`${m}-rtl`]: u === "rtl" }), y = (0, q.useContext)(Np), b = q.useMemo(() => ({
		message: {
			...y.message,
			...o
		},
		notification: {
			...y.notification,
			...s
		}
	}), [
		o,
		s,
		y.message,
		y.notification
	]), [x, S] = Ko(b.message), [C, w] = Mp(b.notification), [T, E] = xp(), D = q.useMemo(() => ({
		message: x,
		notification: C,
		modal: T
	}), [
		x,
		C,
		T
	]);
	Hn("App")(!(_ && l === !1), "usage", "When using cssVar, ensure `component` is assigned a valid React component string."), Hn("App")(!t || l !== !1, "usage", "`ref` is not supported when `component` is `false`. Please provide a valid `component` instead.");
	let O = l === !1 ? q.Fragment : l, k = {
		className: h(f, v),
		style: {
			...p,
			...c
		}
	};
	return /*#__PURE__*/ q.createElement(Pp.Provider, { value: D }, /*#__PURE__*/ q.createElement(Np.Provider, { value: b }, /*#__PURE__*/ q.createElement(O, { ...l === !1 ? void 0 : {
		...k,
		ref: t
	} }, E, S, w, r)));
}), Lp = () => q.useContext(Pp), Rp = /* @__PURE__ */ e({ default: () => zp }), zp = Ip;
zp.useApp = Lp;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/PurePanel.js
function Bp(e) {
	return (t) => /*#__PURE__*/ q.createElement(qi, { theme: { token: {
		motion: !1,
		zIndexPopupBase: 0
	} } }, /*#__PURE__*/ q.createElement(e, { ...t }));
}
/* istanbul ignore next */
var Vp = (e, t, n, r, i) => Bp((a) => {
	let { prefixCls: o, style: s } = a, c = q.useRef(null), [l, u] = q.useState(0), [d, f] = q.useState(0), [p, m] = H(!1, a.open), { getPrefixCls: h } = q.useContext(X), g = h(r || "select", o);
	q.useEffect(() => {
		if (m(!0), typeof ResizeObserver < "u") {
			let e = new ResizeObserver((e) => {
				let t = e[0].target;
				u(t.offsetHeight + 8), f(t.offsetWidth);
			}), t = setInterval(() => {
				let n = i ? `.${i(g)}` : `.${g}-dropdown`, r = c.current?.querySelector(n);
				r && (clearInterval(t), e.observe(r));
			}, 10);
			return () => {
				clearInterval(t), e.disconnect();
			};
		}
	}, [g]);
	let _ = {
		...a,
		style: {
			...s,
			margin: 0
		},
		open: p,
		getPopupContainer: () => c.current
	};
	n && (_ = n(_)), t && (_ = {
		..._,
		[t]: { overflow: {
			adjustX: !1,
			adjustY: !1
		} }
	});
	let v = {
		paddingBottom: l,
		position: "relative",
		minWidth: d
	};
	return /*#__PURE__*/ q.createElement("div", {
		ref: c,
		style: v
	}, /*#__PURE__*/ q.createElement(e, { ..._ }));
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/normalizeIcon.js
function Hp(e, t, n) {
	return e === !1 ? null : e === !0 ? n : e && e[t] !== void 0 ? e[t] : n;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/statusUtils.js
var Up = (e, t, n) => h({
	[`${e}-status-success`]: t === "success",
	[`${e}-status-warning`]: t === "warning",
	[`${e}-status-error`]: t === "error",
	[`${e}-status-validating`]: t === "validating",
	[`${e}-has-feedback`]: n
}), Wp = (e, t) => t || e, Gp = (e, t) => e?.startsWith("var(") || t?.startsWith("var(") ? e : new T(e).onBackground(t).toHexString(), Kp = () => {
	let [, e] = ft(), [t] = hr("Empty"), { colorBgContainer: n, colorFill: r, colorFillSecondary: i, colorFillTertiary: a, colorTextQuaternary: o } = e, { panelBgColor: s, borderColor: c, detailColor: l, shadowColor: u, iconColor: d } = (0, q.useMemo)(() => ({
		panelBgColor: Gp(a, n),
		borderColor: Gp(o, n),
		detailColor: Gp(r, n),
		shadowColor: Gp(i, n),
		iconColor: n
	}), [
		n,
		r,
		i,
		a,
		o
	]);
	return /*#__PURE__*/ q.createElement("svg", {
		width: "184",
		height: "152",
		viewBox: "0 0 184 152",
		xmlns: "http://www.w3.org/2000/svg"
	}, /*#__PURE__*/ q.createElement("title", null, t?.description || "Empty"), /*#__PURE__*/ q.createElement("g", {
		fill: "none",
		fillRule: "evenodd"
	}, /*#__PURE__*/ q.createElement("g", { transform: "translate(24 31.7)" }, /*#__PURE__*/ q.createElement("ellipse", {
		fillOpacity: ".8",
		fill: u,
		cx: "67.8",
		cy: "106.9",
		rx: "67.8",
		ry: "12.7"
	}), /*#__PURE__*/ q.createElement("path", {
		fill: c,
		d: "M122 69.7 98.1 40.2a6 6 0 0 0-4.6-2.2H42.1a6 6 0 0 0-4.6 2.2l-24 29.5V85H122z"
	}), /*#__PURE__*/ q.createElement("path", {
		fill: s,
		d: "M33.8 0h68a4 4 0 0 1 4 4v93.3a4 4 0 0 1-4 4h-68a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"
	}), /*#__PURE__*/ q.createElement("path", {
		fill: l,
		d: "M42.7 10h50.2a2 2 0 0 1 2 2v25a2 2 0 0 1-2 2H42.7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2m.2 39.8h49.8a2.3 2.3 0 1 1 0 4.5H42.9a2.3 2.3 0 0 1 0-4.5m0 11.7h49.8a2.3 2.3 0 1 1 0 4.6H42.9a2.3 2.3 0 0 1 0-4.6m79 43.5a7 7 0 0 1-6.8 5.4H20.5a7 7 0 0 1-6.7-5.4l-.2-1.8V69.7h26.3c2.9 0 5.2 2.4 5.2 5.4s2.4 5.4 5.3 5.4h34.8c2.9 0 5.3-2.4 5.3-5.4s2.3-5.4 5.2-5.4H122v33.5q0 1-.2 1.8"
	})), /*#__PURE__*/ q.createElement("path", {
		fill: l,
		d: "m149.1 33.3-6.8 2.6a1 1 0 0 1-1.3-1.2l2-6.2q-4.1-4.5-4.2-10.4c0-10 10.1-18.1 22.6-18.1S184 8.1 184 18.1s-10.1 18-22.6 18q-6.8 0-12.3-2.8"
	}), /*#__PURE__*/ q.createElement("g", {
		fill: d,
		transform: "translate(149.7 15.4)"
	}, /*#__PURE__*/ q.createElement("circle", {
		cx: "20.7",
		cy: "3.2",
		r: "2.8"
	}), /*#__PURE__*/ q.createElement("path", { d: "M5.7 5.6H0L2.9.7zM9.3.7h5v5h-5z" }))));
}, qp = () => {
	let [, e] = ft(), [t] = hr("Empty"), { colorFill: n, colorFillTertiary: r, colorFillQuaternary: i, colorBgContainer: a } = e, { borderColor: o, shadowColor: s, contentColor: c } = (0, q.useMemo)(() => ({
		borderColor: Gp(n, a),
		shadowColor: Gp(r, a),
		contentColor: Gp(i, a)
	}), [
		n,
		r,
		i,
		a
	]);
	return /*#__PURE__*/ q.createElement("svg", {
		width: "64",
		height: "41",
		viewBox: "0 0 64 41",
		xmlns: "http://www.w3.org/2000/svg"
	}, /*#__PURE__*/ q.createElement("title", null, t?.description || "Empty"), /*#__PURE__*/ q.createElement("g", {
		transform: "translate(0 1)",
		fill: "none",
		fillRule: "evenodd"
	}, /*#__PURE__*/ q.createElement("ellipse", {
		fill: s,
		cx: "32",
		cy: "33",
		rx: "32",
		ry: "7"
	}), /*#__PURE__*/ q.createElement("g", {
		fillRule: "nonzero",
		stroke: o
	}, /*#__PURE__*/ q.createElement("path", { d: "M55 12.8 44.9 1.3Q44 0 42.9 0H21.1q-1.2 0-2 1.3L9 12.8V22h46z" }), /*#__PURE__*/ q.createElement("path", {
		d: "M41.6 16c0-1.7 1-3 2.2-3H55v18.1c0 2.2-1.3 3.9-3 3.9H12c-1.7 0-3-1.7-3-3.9V13h11.2c1.2 0 2.2 1.3 2.2 3s1 2.9 2.2 2.9h14.8c1.2 0 2.2-1.4 2.2-3",
		fill: c
	}))));
}, Jp = (e) => {
	let { componentCls: t, margin: n, marginXS: r, marginXL: i, fontSize: a, lineHeight: o } = e;
	return { [t]: {
		marginInline: r,
		fontSize: a,
		lineHeight: o,
		textAlign: "center",
		[`${t}-image`]: {
			height: e.emptyImgHeight,
			marginBottom: r,
			opacity: e.opacityImage,
			img: { height: "100%" },
			svg: {
				maxWidth: "100%",
				height: "100%",
				margin: "auto"
			}
		},
		[`${t}-description`]: { color: e.colorTextDescription },
		[`${t}-footer`]: { marginTop: n },
		"&-normal": {
			marginBlock: i,
			color: e.colorTextDescription,
			[`${t}-description`]: { color: e.colorTextDescription },
			[`${t}-image`]: { height: e.emptyImgHeightMD }
		},
		"&-small": {
			marginBlock: r,
			color: e.colorTextDescription,
			[`${t}-image`]: { height: e.emptyImgHeightSM }
		}
	} };
}, Yp = Tt("Empty", (e) => {
	let { componentCls: t, controlHeightLG: n, calc: r } = e;
	return Jp(ve(e, {
		emptyImgCls: `${t}-img`,
		emptyImgHeight: r(n).mul(2.5).equal(),
		emptyImgHeightMD: n,
		emptyImgHeightSM: r(n).mul(.875).equal()
	}));
}), Xp = /* @__PURE__ */ e({ default: () => $p }), Zp = /*#__PURE__*/ q.createElement(Kp, null), Qp = /*#__PURE__*/ q.createElement(qp, null), $p = (e) => {
	let { className: t, rootClassName: n, prefixCls: r, image: i, description: a, children: o, imageStyle: s, style: c, classNames: l, styles: u, ...d } = e, { getPrefixCls: f, direction: p, className: m, style: g, classNames: _, styles: v, image: y } = Le("empty"), b = f("empty", r), [x, S] = Yp(b), [C, w] = Rn([_, l], [v, u], { props: e }), [T] = hr("Empty"), E = a === void 0 ? T?.description : a, D = typeof E == "string" ? E : "empty", O = i ?? y ?? Zp, k = null;
	return k = typeof O == "string" ? /*#__PURE__*/ q.createElement("img", {
		draggable: !1,
		alt: D,
		src: O
	}) : O, /*#__PURE__*/ q.createElement("div", {
		className: h(x, S, b, m, {
			[`${b}-normal`]: O === Qp,
			[`${b}-rtl`]: p === "rtl"
		}, t, n, C.root),
		style: {
			...w.root,
			...g,
			...c
		},
		...d
	}, /*#__PURE__*/ q.createElement("div", {
		className: h(`${b}-image`, C.image),
		style: {
			...s,
			...w.image
		}
	}, k), E && /*#__PURE__*/ q.createElement("div", {
		className: h(`${b}-description`, C.description),
		style: w.description
	}, E), o && /*#__PURE__*/ q.createElement("div", {
		className: h(`${b}-footer`, C.footer),
		style: w.footer
	}, o));
};
$p.PRESENTED_IMAGE_DEFAULT = Zp, $p.PRESENTED_IMAGE_SIMPLE = Qp;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/config-provider/defaultRenderEmpty.js
var em = (e) => {
	let { componentName: t } = e, { getPrefixCls: n } = (0, q.useContext)(X), r = n("empty");
	switch (t) {
		case "Table":
		case "List": return /*#__PURE__*/ q.createElement($p, { image: $p.PRESENTED_IMAGE_SIMPLE });
		case "Select":
		case "TreeSelect":
		case "Cascader":
		case "Transfer":
		case "Mentions": return /*#__PURE__*/ q.createElement($p, {
			image: $p.PRESENTED_IMAGE_SIMPLE,
			className: `${r}-small`
		});
		case "Table.filter": return null;
		default: return /*#__PURE__*/ q.createElement($p, null);
	}
}, tm = [
	"xxxl",
	"xxl",
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], nm = [].concat(tm).reverse(), rm = (e) => ({
	xs: `(max-width: ${e.screenXSMax}px)`,
	sm: `(min-width: ${e.screenSM}px)`,
	md: `(min-width: ${e.screenMD}px)`,
	lg: `(min-width: ${e.screenLG}px)`,
	xl: `(min-width: ${e.screenXL}px)`,
	xxl: `(min-width: ${e.screenXXL}px)`,
	xxxl: `(min-width: ${e.screenXXXL}px)`
}), im = (e) => {
	let t = e, n = [].concat(tm).reverse();
	return n.forEach((e, r) => {
		let i = e.toUpperCase(), a = `screen${i}Min`, o = `screen${i}`;
		if (!(t[a] <= t[o])) throw Error(`${a}<=${o} fails : !(${t[a]}<=${t[o]})`);
		if (r < n.length - 1) {
			let e = `screen${i}Max`;
			if (!(t[o] <= t[e])) throw Error(`${o}<=${e} fails : !(${t[o]}<=${t[e]})`);
			let a = `screen${n[r + 1].toUpperCase()}Min`;
			if (!(t[e] <= t[a])) throw Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`);
		}
	}), e;
}, am = (e, t) => {
	if (t) {
		for (let n of tm) if (e[n] && t?.[n] !== void 0) return t[n];
	}
}, om = () => {
	let [, e] = ft(), t = rm(im(e));
	return q.useMemo(() => {
		let e = /* @__PURE__ */ new Map(), n = -1, r = {};
		return {
			responsiveMap: t,
			matchHandlers: {},
			dispatch(t) {
				return r = t, e.forEach((e) => {
					e(r);
				}), e.size >= 1;
			},
			subscribe(t) {
				return e.size || this.register(), n += 1, e.set(n, t), t(r), n;
			},
			unsubscribe(t) {
				e.delete(t), e.size || this.unregister();
			},
			register() {
				Object.entries(t).forEach(([e, t]) => {
					let n = ({ matches: t }) => {
						this.dispatch({
							...r,
							[e]: t
						});
					}, i = window.matchMedia(t);
					On(i.addEventListener) && i.addEventListener("change", n), this.matchHandlers[t] = {
						mql: i,
						listener: n
					}, n(i);
				});
			},
			unregister() {
				Object.values(t).forEach((e) => {
					let t = this.matchHandlers[e];
					On(t?.mql.removeEventListener) && t.mql.removeEventListener("change", t?.listener);
				}), e.clear();
			}
		};
	}, [t]);
}, sm = (e) => wn(e) ? On(e) ? e() : e : null;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/style/roundedArrow.js
function cm(e) {
	let { sizePopupArrow: t, borderRadiusXS: n, borderRadiusOuter: r } = e, i = t / 2, a = i, o = r * 1 / Math.sqrt(2), s = i - r * (1 - 1 / Math.sqrt(2)), c = i - 1 / Math.sqrt(2) * n, l = r * (Math.sqrt(2) - 1) + 1 / Math.sqrt(2) * n, u = 2 * i - c, d = l, f = 2 * i - o, p = s, m = 2 * i - 0, h = a, g = i * Math.sqrt(2) + r * (Math.sqrt(2) - 2), _ = r * (Math.sqrt(2) - 1), v = `polygon(${_}px 100%, 50% ${_}px, ${2 * i - _}px 100%, ${_}px 100%)`;
	return {
		arrowShadowWidth: g,
		arrowPath: `path('M 0 ${a} A ${r} ${r} 0 0 0 ${o} ${s} L ${c} ${l} A ${n} ${n} 0 0 1 ${u} ${d} L ${f} ${p} A ${r} ${r} 0 0 0 ${m} ${h} Z')`,
		arrowPolygon: v
	};
}
var lm = (e, t, n) => {
	let { sizePopupArrow: r, arrowPolygon: i, arrowPath: a, arrowShadowWidth: o, borderRadiusXS: s, calc: c } = e, l = {
		content: "\"\"",
		position: "absolute",
		width: o,
		height: o,
		bottom: 0,
		insetInline: 0,
		margin: "auto",
		borderRadius: {
			_skip_check_: !0,
			value: `0 0 ${L(s)} 0`
		},
		transform: "translateY(50%) rotate(-135deg)",
		zIndex: 0,
		background: "transparent"
	};
	return n && (l.boxShadow = n), {
		pointerEvents: "none",
		width: r,
		height: r,
		overflow: "hidden",
		"&::before": {
			position: "absolute",
			bottom: 0,
			insetInlineStart: 0,
			width: r,
			height: c(r).div(2).equal(),
			background: t,
			clipPath: {
				_multi_value_: !0,
				value: [i, a]
			},
			content: "\"\""
		},
		"&::after": l
	};
};
function um(e) {
	let { contentRadius: t, limitVerticalRadius: n } = e, r = t > 12 ? t + 2 : 12;
	return {
		arrowOffsetHorizontal: r,
		arrowOffsetVertical: n ? 8 : r
	};
}
function dm(e, t) {
	return e ? t : {};
}
var fm = (e, t, n) => {
	let { componentCls: r, boxShadowPopoverArrow: i, arrowOffsetVertical: a, arrowOffsetHorizontal: o, antCls: s } = e, [c] = Ot(s, "tooltip"), { arrowDistance: l = 0, arrowPlacement: u = {
		left: !0,
		right: !0,
		top: !0,
		bottom: !0
	}, arrowShadow: d = !0 } = n || {};
	return { [r]: {
		[`${r}-arrow`]: [{
			position: "absolute",
			zIndex: 1,
			display: "block",
			...lm(e, t, d ? i : !1),
			"&:before": { background: t }
		}],
		...dm(!!u.top, {
			[[
				`&-placement-top > ${r}-arrow`,
				`&-placement-topLeft > ${r}-arrow`,
				`&-placement-topRight > ${r}-arrow`
			].join(",")]: {
				bottom: l,
				transform: "translateY(100%) rotate(180deg)"
			},
			[`&-placement-top > ${r}-arrow`]: {
				left: {
					_skip_check_: !0,
					value: "50%"
				},
				transform: "translateX(-50%) translateY(100%) rotate(180deg)"
			},
			"&-placement-topLeft": {
				[c("arrow-offset-x")]: o,
				[`> ${r}-arrow`]: { left: {
					_skip_check_: !0,
					value: o
				} }
			},
			"&-placement-topRight": {
				[c("arrow-offset-x")]: `calc(100% - ${L(o)})`,
				[`> ${r}-arrow`]: { right: {
					_skip_check_: !0,
					value: o
				} }
			}
		}),
		...dm(!!u.bottom, {
			[[
				`&-placement-bottom > ${r}-arrow`,
				`&-placement-bottomLeft > ${r}-arrow`,
				`&-placement-bottomRight > ${r}-arrow`
			].join(",")]: {
				top: l,
				transform: "translateY(-100%)"
			},
			[`&-placement-bottom > ${r}-arrow`]: {
				left: {
					_skip_check_: !0,
					value: "50%"
				},
				transform: "translateX(-50%) translateY(-100%)"
			},
			"&-placement-bottomLeft": {
				[c("arrow-offset-x")]: o,
				[`> ${r}-arrow`]: { left: {
					_skip_check_: !0,
					value: o
				} }
			},
			"&-placement-bottomRight": {
				[c("arrow-offset-x")]: `calc(100% - ${L(o)})`,
				[`> ${r}-arrow`]: { right: {
					_skip_check_: !0,
					value: o
				} }
			}
		}),
		...dm(!!u.left, {
			[[
				`&-placement-left > ${r}-arrow`,
				`&-placement-leftTop > ${r}-arrow`,
				`&-placement-leftBottom > ${r}-arrow`
			].join(",")]: {
				right: {
					_skip_check_: !0,
					value: l
				},
				transform: "translateX(100%) rotate(90deg)"
			},
			[`&-placement-left > ${r}-arrow`]: {
				top: {
					_skip_check_: !0,
					value: "50%"
				},
				transform: "translateY(-50%) translateX(100%) rotate(90deg)"
			},
			[`&-placement-leftTop > ${r}-arrow`]: { top: a },
			[`&-placement-leftBottom > ${r}-arrow`]: { bottom: a }
		}),
		...dm(!!u.right, {
			[[
				`&-placement-right > ${r}-arrow`,
				`&-placement-rightTop > ${r}-arrow`,
				`&-placement-rightBottom > ${r}-arrow`
			].join(",")]: {
				left: {
					_skip_check_: !0,
					value: l
				},
				transform: "translateX(-100%) rotate(-90deg)"
			},
			[`&-placement-right > ${r}-arrow`]: {
				top: {
					_skip_check_: !0,
					value: "50%"
				},
				transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
			},
			[`&-placement-rightTop > ${r}-arrow`]: { top: a },
			[`&-placement-rightBottom > ${r}-arrow`]: { bottom: a }
		})
	} };
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/placements.js
function pm(e, t, n, r) {
	if (r === !1) return {
		adjustX: !1,
		adjustY: !1
	};
	let i = Dn(r) ? r : {}, a = {};
	switch (e) {
		case "top":
		case "bottom":
			a.shiftX = t.arrowOffsetHorizontal * 2 + n, a.shiftY = !0, a.adjustY = !0;
			break;
		case "left":
		case "right":
			a.shiftY = t.arrowOffsetVertical * 2 + n, a.shiftX = !0, a.adjustX = !0;
			break;
	}
	let o = {
		...a,
		...i
	};
	return o.shiftX || (o.adjustX = !0), o.shiftY || (o.adjustY = !0), o;
}
var mm = {
	left: { points: ["cr", "cl"] },
	right: { points: ["cl", "cr"] },
	top: { points: ["bc", "tc"] },
	bottom: { points: ["tc", "bc"] },
	topLeft: { points: ["bl", "tl"] },
	leftTop: { points: ["tr", "tl"] },
	topRight: { points: ["br", "tr"] },
	rightTop: { points: ["tl", "tr"] },
	bottomRight: { points: ["tr", "br"] },
	rightBottom: { points: ["bl", "br"] },
	bottomLeft: { points: ["tl", "bl"] },
	leftBottom: { points: ["br", "bl"] }
}, hm = {
	topLeft: { points: ["bl", "tc"] },
	leftTop: { points: ["tr", "cl"] },
	topRight: { points: ["br", "tc"] },
	rightTop: { points: ["tl", "cr"] },
	bottomRight: { points: ["tr", "bc"] },
	rightBottom: { points: ["bl", "cr"] },
	bottomLeft: { points: ["tl", "bc"] },
	leftBottom: { points: ["br", "cl"] }
}, gm = new Set([
	"topLeft",
	"topRight",
	"bottomLeft",
	"bottomRight",
	"leftTop",
	"leftBottom",
	"rightTop",
	"rightBottom"
]);
function _m(e) {
	let { arrowWidth: t, autoAdjustOverflow: n, arrowPointAtCenter: r, offset: i, borderRadius: a, visibleFirst: o } = e, s = t / 2, c = {}, l = um({
		contentRadius: a,
		limitVerticalRadius: !0
	});
	return Object.keys(mm).forEach((e) => {
		let a = {
			...r && hm[e] || mm[e],
			offset: [0, 0],
			dynamicInset: !0
		};
		switch (c[e] = a, gm.has(e) && (a.autoArrow = !1), e) {
			case "top":
			case "topLeft":
			case "topRight":
				a.offset[1] = -s - i;
				break;
			case "bottom":
			case "bottomLeft":
			case "bottomRight":
				a.offset[1] = s + i;
				break;
			case "left":
			case "leftTop":
			case "leftBottom":
				a.offset[0] = -s - i;
				break;
			case "right":
			case "rightTop":
			case "rightBottom":
				a.offset[0] = s + i;
				break;
		}
		if (r) switch (e) {
			case "topLeft":
			case "bottomLeft":
				a.offset[0] = -l.arrowOffsetHorizontal - s;
				break;
			case "topRight":
			case "bottomRight":
				a.offset[0] = l.arrowOffsetHorizontal + s;
				break;
			case "leftTop":
			case "rightTop":
				a.offset[1] = -l.arrowOffsetHorizontal * 2 + s;
				break;
			case "leftBottom":
			case "rightBottom":
				a.offset[1] = l.arrowOffsetHorizontal * 2 - s;
				break;
		}
		a.overflow = pm(e, l, t, n), o && (a.htmlRegion = "visibleFirst");
	}), c;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/colors.js
var vm = Re.map((e) => `${e}-inverse`), ym = [
	"success",
	"processing",
	"error",
	"default",
	"warning"
];
function bm(e, t = !0) {
	return t ? [].concat(m(vm), m(Re)).includes(e) : Re.includes(e);
}
function xm(e) {
	return ym.includes(e);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/gapSize.js
function Sm(e) {
	return [
		"small",
		"middle",
		"medium",
		"large"
	].includes(e);
}
function Cm(e) {
	return e ? Tn(e) : !1;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/convertToTooltipProps.js
var wm = (e, t) => wn(e) ? Dn(e) && !/*#__PURE__*/ (0, q.isValidElement)(e) ? {
	...t,
	...e
} : {
	...t,
	title: e
} : null, Tm = (e, t = {}) => !Cn(e) && t?.skipEmpty ? [] : Array.isArray(e) ? e : [e];
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/_util/capitalize.js
function Em(e) {
	return typeof e == "string" ? e.charAt(0).toUpperCase() + e.slice(1) : e;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/getDesignToken.js
var Dm = (e) => {
	let t = e?.algorithm ? r(e.algorithm) : rt;
	return o({
		...Ge,
		...e?.token
	}, { override: e?.token }, t, st);
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/compact/genCompactSizeMapToken.js
function Om(e) {
	let { sizeUnit: t, sizeStep: n } = e, r = n - 2;
	return {
		sizeXXL: t * (r + 10),
		sizeXL: t * (r + 6),
		sizeLG: t * (r + 2),
		sizeMD: t * (r + 2),
		sizeMS: t * (r + 1),
		size: t * r,
		sizeSM: t * r,
		sizeXS: t * (r - 1),
		sizeXXS: t * (r - 1)
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/theme/themes/compact/index.js
var km = (e, t) => {
	let n = t ?? nt(e), r = n.fontSizeSM, i = n.controlHeight - 4;
	return {
		...n,
		...Om(t ?? e),
		...Xe(r),
		controlHeight: i,
		...Ye({
			...n,
			controlHeight: i
		})
	};
}, Am = (e, t) => new T(e).setA(t).toRgbString(), jm = (e, t) => new T(e).lighten(t).toHexString(), Mm = (e) => {
	let t = P(e, { theme: "dark" });
	return {
		1: t[0],
		2: t[1],
		3: t[2],
		4: t[3],
		5: t[6],
		6: t[5],
		7: t[4],
		8: t[6],
		9: t[5],
		10: t[4]
	};
}, Nm = (e, t, n) => {
	let r = e || "#000", i = t || "#fff";
	return {
		colorBgBase: r,
		colorTextBase: i,
		colorShadow: n || "rgba(255, 255, 255, 0.2)",
		colorText: Am(i, .85),
		colorTextSecondary: Am(i, .65),
		colorTextTertiary: Am(i, .45),
		colorTextQuaternary: Am(i, .25),
		colorFill: Am(i, .18),
		colorFillSecondary: Am(i, .12),
		colorFillTertiary: Am(i, .08),
		colorFillQuaternary: Am(i, .04),
		colorBgSolid: Am(i, .95),
		colorBgSolidHover: Am(i, 1),
		colorBgSolidActive: Am(i, .9),
		colorBgElevated: jm(r, 12),
		colorBgContainer: jm(r, 8),
		colorBgLayout: jm(r, 0),
		colorBgSpotlight: jm(r, 26),
		colorBgBlur: Am(i, .04),
		colorBorder: jm(r, 26),
		colorBorderDisabled: jm(r, 26),
		colorBorderSecondary: jm(r, 19)
	};
}, Pm = (e, t) => {
	let n = Object.keys(We).map((t) => {
		let n = P(e[t], { theme: "dark" });
		return Array.from({ length: 10 }, () => 1).reduce((e, r, i) => (e[`${t}-${i + 1}`] = n[i], e[`${t}${i + 1}`] = n[i], e), {});
	}).reduce((e, t) => (e = {
		...e,
		...t
	}, e), {}), r = t ?? nt(e), i = Ke(e, {
		generateColorPalettes: Mm,
		generateNeutralColorPalettes: Nm
	}), a = Re.reduce((t, n) => {
		let r = e[n];
		if (r) {
			let e = Mm(r);
			t[`${n}Hover`] = e[7], t[`${n}Active`] = e[5];
		}
		return t;
	}, {});
	return {
		...r,
		...n,
		...i,
		...a,
		colorPrimaryBg: i.colorPrimaryBorder,
		colorPrimaryBgHover: i.colorPrimaryBorderHover
	};
}, Fm = /* @__PURE__ */ e({ default: () => Lm });
function Im() {
	let [e, t, n, r] = ft();
	return {
		theme: e,
		token: t,
		hashId: n,
		cssVar: r
	};
}
var Lm = {
	defaultSeed: it.token,
	useToken: Im,
	defaultAlgorithm: nt,
	darkAlgorithm: Pm,
	compactAlgorithm: km,
	getDesignToken: Dm,
	defaultConfig: it,
	_internalContext: at
}, Rm = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e, n) => {
		t.set(e, n);
	}), t;
}, zm = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach(({ disabled: e, key: n }, r) => {
		e && t.set(n, r);
	}), t;
}, Bm = (e, t) => {
	let n = !1, r = (r) => {
		r.stopPropagation(), r.preventDefault(), r.clipboardData?.clearData(), r.clipboardData?.setData("text/plain", e), t && r.clipboardData?.setData("text/html", e), n = !0;
	};
	try {
		return document.addEventListener("copy", r, { capture: !0 }), document.execCommand("copy"), n;
	} catch {
		return !1;
	} finally {
		document.removeEventListener("copy", r, { capture: !0 });
	}
}, Vm = async (e, t) => {
	try {
		return t ? await navigator.clipboard.write([new ClipboardItem({
			"text/html": new Blob([e], { type: "text/html" }),
			"text/plain": new Blob([e], { type: "text/plain" })
		})]) : await navigator.clipboard.writeText(e), !0;
	} catch {
		return !1;
	}
};
async function Hm(e, t) {
	if (typeof e != "string") return !1;
	let n = t?.format === "text/html";
	return !!(await Vm(e, n) || Bm(e, n));
}
//#endregion
export { Af as $, An as $n, fs as $t, Rp as A, Ei as An, cl as At, gp as B, or as Bn, Js as Bt, $p as C, wa as Cn, Me as Cr, vl as Ct, Hp as D, Gi as Dn, fl as Dt, Up as E, Pi as En, ul as Et, Sp as F, _i as Fn, hc as Ft, sp as G, Kn as Gn, js as Gt, pp as H, Yn as Hn, Ks as Ht, Cp as I, Lr as In, nc as It, $f as J, Rn as Jn, bs as Jt, ip as K, Wn as Kn, Ts as Kt, xp as L, gr as Ln, tc as Lt, jp as M, bi as Mn, Bc as Mt, Mp as N, vi as Nn, zc as Nt, Vp as O, Di as On, ml as Ot, wp as P, yi as Pn, Ec as Pt, Pf as Q, Dn as Qn, hs as Qt, dp as R, hr as Rn, ec as Rt, em as S, Ta as Sn, Le as Sr, Ml as St, Wp as T, qi as Tn, pl as Tt, mp as U, Jn as Un, Ws as Ut, hp as V, ar as Vn, Gs as Vt, fp as W, qn as Wn, Is as Wt, Uf as X, Cn as Xn, xs as Xt, Gf as Y, On as Yn, ys as Yt, Ff as Z, Tn as Zn, Cs as Zt, sm as _, Ia as _n, ft as _r, lu as _t, Em as a, Go as an, Et as ar, Vd as at, nm as b, Ea as bn, X as br, Vl as bt, Sm as c, Fo as cn, Dt as cr, Ud as ct, xm as d, wo as dn, bt as dr, qd as dt, ls as en, wn as er, jf as et, _m as f, Ya as fn, wt as fr, Bd as ft, cm as g, Ra as gn, mt as gr, Ed as gt, lm as h, Va as hn, pt as hr, Dd as ht, Fm as i, Zo as in, kt as ir, Jd as it, Np as j, wi as jn, Hc as jt, Bp as k, Ti as kn, dl as kt, Cm as l, Po as ln, vt as lr, Kd as lt, fm as m, Ha as mn, gt as mr, Nd as mt, zm as n, es as nn, Sn as nr, Df as nt, Tm as o, Ko as on, Ot as or, Gd as ot, um as p, Ua as pn, ht as pr, zd as pt, tp as q, Hn as qn, ws as qt, Rm as r, Qo as rn, xn as rr, Xd as rt, wm as s, Lo as sn, Tt as sr, Wd as st, Hm as t, cs as tn, En as tr, Of as tt, bm as u, Mo as un, yt as ur, Hd as ut, am as v, Fa as vn, He as vr, cu as vt, Xp as w, ma as wn, je as wr, gl as wt, om as x, Ma as xn, Pe as xr, Bl as xt, tm as y, Na as yn, Re as yr, Ql as yt, _p as z, cr as zn, qs as zt };
