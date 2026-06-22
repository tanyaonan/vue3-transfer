globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $ as n, B as r, Bt as i, Cn as a, Ct as o, Gt as s, Ht as c, I as l, Jt as u, L as d, Mt as f, Nt as p, On as m, Qt as h, St as g, Ut as _, Vt as v, _t as y, fn as b, kn as x, kt as S, ln as C, on as w, pn as T, sn as E, tt as D, un as O, wt as k, xt as A, yt as j } from "../shared/core.js";
import { $t as M, Ct as N, Dt as P, E as F, Et as I, Jn as ee, Mt as L, Nt as R, O as z, Ot as B, Pt as te, Qn as ne, Qt as re, Rn as V, Sn as ie, Sr as H, St as U, T as ae, Tn as W, Tt as G, Wn as K, Yn as q, Zn as J, br as oe, dr as se, en as ce, gn as Y, gr as X, it as le, jt as Z, kn as ue, kt as de, mr as fe, nr as pe, or as me, ot as Q, pr as he, sr as ge, ur as _e, wr as ve, yn as ye } from "../shared/antd-core.js";
import { l as be, n as xe } from "./auto-complete.js";
import { c as Se, n as Ce, o as we } from "./avatar.js";
import { c as Te, f as Ee, g as De, h as Oe, m as ke, o as Ae, p as je, r as Me, s as Ne, u as Pe } from "./calendar.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/divider/style/index.js
var $ = /* @__PURE__ */ t(x()), Fe = (e) => {
	let { componentCls: t } = e;
	return { [t]: { "&-horizontal": { [`&${t}`]: {
		"&-sm": { marginBlock: e.marginXS },
		"&-md": { marginBlock: e.margin }
	} } } };
}, Ie = (e) => {
	let { componentCls: t, sizePaddingEdgeHorizontal: n, colorSplit: r, lineWidth: i, textPaddingInline: a, orientationMargin: o, verticalMarginInline: s } = e, c = `${t}-rail`;
	return { [t]: {
		...he(e),
		borderBlockStart: `${S(i)} solid ${r}`,
		[c]: { borderBlockStart: `${S(i)} solid ${r}` },
		"&-vertical": {
			position: "relative",
			top: "-0.06em",
			display: "inline-block",
			height: "0.9em",
			marginInline: s,
			marginBlock: 0,
			verticalAlign: "middle",
			borderTop: 0,
			borderInlineStart: `${S(i)} solid ${r}`
		},
		"&-horizontal": {
			display: "flex",
			clear: "both",
			width: "100%",
			minWidth: "100%",
			margin: `${S(e.marginLG)} 0`
		},
		[`&-horizontal${t}-with-text`]: {
			display: "flex",
			alignItems: "center",
			margin: `${S(e.dividerHorizontalWithTextGutterMargin)} 0`,
			color: e.colorTextHeading,
			fontWeight: 500,
			fontSize: e.fontSizeLG,
			whiteSpace: "nowrap",
			textAlign: "center",
			borderBlockStart: `0 ${r}`,
			[`${c}-start, ${c}-end`]: {
				width: "50%",
				borderBlockStartColor: "inherit",
				borderBlockEnd: 0,
				content: "''"
			}
		},
		[`&-horizontal${t}-with-text-start`]: {
			[`${c}-start`]: { width: `calc(${o} * 100%)` },
			[`${c}-end`]: { width: `calc(100% - ${o} * 100%)` }
		},
		[`&-horizontal${t}-with-text-end`]: {
			[`${c}-start`]: { width: `calc(100% - ${o} * 100%)` },
			[`${c}-end`]: { width: `calc(${o} * 100%)` }
		},
		[`${t}-inner-text`]: {
			display: "inline-block",
			paddingBlock: 0,
			paddingInline: a
		},
		"&-dashed": {
			background: "none",
			borderColor: r,
			borderStyle: "dashed",
			borderWidth: `${S(i)} 0 0`,
			[c]: { borderBlockStart: `${S(i)} dashed ${r}` }
		},
		[`&-horizontal${t}-with-text${t}-dashed`]: { [`${c}-start, ${c}-end`]: { borderStyle: "dashed none none" } },
		[`&-vertical${t}-dashed`]: {
			borderInlineStartWidth: i,
			borderInlineEnd: 0,
			borderBlockStart: 0,
			borderBlockEnd: 0
		},
		"&-dotted": {
			background: "none",
			borderColor: r,
			borderStyle: "dotted",
			borderWidth: `${S(i)} 0 0`,
			[c]: { borderBlockStart: `${S(i)} dotted ${r}` }
		},
		[`&-horizontal${t}-with-text${t}-dotted`]: { "&::before, &::after": { borderStyle: "dotted none none" } },
		[`&-vertical${t}-dotted`]: {
			borderInlineStartWidth: i,
			borderInlineEnd: 0,
			borderBlockStart: 0,
			borderBlockEnd: 0
		},
		[`&-plain${t}-with-text`]: {
			color: e.colorText,
			fontWeight: "normal",
			fontSize: e.fontSize
		},
		[`&-horizontal${t}-with-text-start${t}-no-default-orientation-margin-start`]: {
			[`${c}-start`]: { width: 0 },
			[`${c}-end`]: { width: "100%" },
			[`${t}-inner-text`]: { paddingInlineStart: n }
		},
		[`&-horizontal${t}-with-text-end${t}-no-default-orientation-margin-end`]: {
			[`${c}-start`]: { width: "100%" },
			[`${c}-end`]: { width: 0 },
			[`${t}-inner-text`]: { paddingInlineEnd: n }
		}
	} };
}, Le = ge("Divider", (e) => {
	let t = j(e, {
		dividerHorizontalWithTextGutterMargin: e.margin,
		sizePaddingEdgeHorizontal: 0
	});
	return [Ie(t), Fe(t)];
}, (e) => ({
	textPaddingInline: "1em",
	orientationMargin: .05,
	verticalMarginInline: e.marginXS
}), { unitless: { orientationMargin: !0 } }), Re = /* @__PURE__ */ e({ default: () => Be }), ze = [
	"left",
	"right",
	"center",
	"start",
	"end"
], Be = (e) => {
	let { getPrefixCls: t, direction: n, className: r, style: i, classNames: a, styles: o } = H("divider"), { prefixCls: s, type: c, orientation: l, vertical: u, titlePlacement: d, orientationMargin: f, className: m, rootClassName: h, children: g, dashed: _, variant: v = "solid", plain: y, style: b, size: x, classNames: S, styles: C, ...w } = e, T = t("divider", s), E = `${T}-rail`, [D, O] = Le(T), k = ce(x), A = !!g, j = ze.includes(l || ""), M = $.useMemo(() => {
		let e = d ?? (j ? l : "center");
		return e === "left" ? n === "rtl" ? "end" : "start" : e === "right" ? n === "rtl" ? "start" : "end" : e;
	}, [
		n,
		l,
		d,
		j
	]), N = M === "start" && f != null, P = M === "end" && f != null, [F, I] = Y(l, u, c), L = {
		...e,
		orientation: F,
		titlePlacement: M,
		size: k
	}, [R, z] = ee([a, S], [o, C], { props: L }), B = p(T, r, D, O, `${T}-${F}`, {
		[`${T}-with-text`]: A,
		[`${T}-with-text-${M}`]: A,
		[`${T}-dashed`]: !!_,
		[`${T}-${v}`]: v !== "solid",
		[`${T}-plain`]: !!y,
		[`${T}-rtl`]: n === "rtl",
		[`${T}-no-default-orientation-margin-start`]: N,
		[`${T}-no-default-orientation-margin-end`]: P,
		[`${T}-md`]: k === "medium" || k === "middle",
		[`${T}-sm`]: k === "small",
		[E]: !g,
		[R.rail]: R.rail && !g
	}, m, h, R.root), te = $.useMemo(() => J(f) ? f : /^\d+$/.test(f) ? Number(f) : f, [f]), ne = {
		marginInlineStart: N ? te : void 0,
		marginInlineEnd: P ? te : void 0
	};
	return /*#__PURE__*/ $.createElement("div", {
		className: B,
		style: {
			...i,
			...z.root,
			...g ? {} : z.rail,
			...b
		},
		...w,
		role: "separator"
	}, g && !I && /*#__PURE__*/ $.createElement($.Fragment, null, /*#__PURE__*/ $.createElement("div", {
		className: p(E, `${E}-start`, R.rail),
		style: z.rail
	}), /*#__PURE__*/ $.createElement("span", {
		className: p(`${T}-inner-text`, R.content),
		style: {
			...ne,
			...z.content
		}
	}, g), /*#__PURE__*/ $.createElement("div", {
		className: p(E, `${E}-end`, R.rail),
		style: z.rail
	})));
}, Ve = (e, t) => {
	if (!e) return null;
	let n = {
		left: e.offsetLeft,
		right: e.parentElement.clientWidth - e.clientWidth - e.offsetLeft,
		width: e.clientWidth,
		top: e.offsetTop,
		bottom: e.parentElement.clientHeight - e.clientHeight - e.offsetTop,
		height: e.clientHeight
	};
	return t ? {
		left: 0,
		right: 0,
		width: 0,
		top: n.top,
		bottom: n.bottom,
		height: n.height
	} : {
		left: n.left,
		right: n.right,
		width: n.width,
		top: 0,
		bottom: 0,
		height: 0
	};
}, He = (e) => e === void 0 ? void 0 : `${e}px`;
function Ue(e) {
	let { prefixCls: t, containerRef: n, value: r, getValueIndex: i, motionName: a, onMotionStart: o, onMotionEnd: s, direction: c, vertical: l = !1 } = e, u = $.useRef(null), [d, f] = $.useState(r), m = (e) => {
		let r = i(e), a = n.current?.querySelectorAll(`.${t}-item`)[r];
		return a?.offsetParent && a;
	}, [h, g] = $.useState(null), [_, v] = $.useState(null);
	C(() => {
		if (d !== r) {
			let e = m(d), t = m(r), n = Ve(e, l), i = Ve(t, l);
			f(r), g(n), v(i), e && t ? o() : s();
		}
	}, [r]);
	let y = $.useMemo(() => He(l ? h?.top ?? 0 : c === "rtl" ? -h?.right : h?.left), [
		l,
		c,
		h
	]), b = $.useMemo(() => He(l ? _?.top ?? 0 : c === "rtl" ? -_?.right : _?.left), [
		l,
		c,
		_
	]);
	return !h || !_ ? null : /*#__PURE__*/ $.createElement(pe, {
		visible: !0,
		motionName: a,
		motionAppear: !0,
		onAppearStart: () => l ? {
			transform: "translateY(var(--thumb-start-top))",
			height: "var(--thumb-start-height)"
		} : {
			transform: "translateX(var(--thumb-start-left))",
			width: "var(--thumb-start-width)"
		},
		onAppearActive: () => l ? {
			transform: "translateY(var(--thumb-active-top))",
			height: "var(--thumb-active-height)"
		} : {
			transform: "translateX(var(--thumb-active-left))",
			width: "var(--thumb-active-width)"
		},
		onVisibleChanged: () => {
			g(null), v(null), s();
		}
	}, ({ className: e, style: n }, r) => {
		let i = {
			...n,
			"--thumb-start-left": y,
			"--thumb-start-width": He(h?.width),
			"--thumb-active-left": b,
			"--thumb-active-width": He(_?.width),
			"--thumb-start-top": y,
			"--thumb-start-height": He(h?.height),
			"--thumb-active-top": b,
			"--thumb-active-height": He(_?.height)
		}, a = {
			ref: T(u, r),
			style: i,
			className: p(`${t}-thumb`, e)
		};
		return /*#__PURE__*/ $.createElement("div", a);
	});
}
//#endregion
//#region node_modules/.pnpm/@rc-component+segmented@1.3_27a72cdc31ca14c130ad9aced2e33c8e/node_modules/@rc-component/segmented/es/index.js
function We(e) {
	if (e.title !== void 0) return e.title;
	if (typeof e.label != "object") return e.label?.toString();
}
function Ge(e) {
	return e.map((e) => {
		if (typeof e == "object" && e) {
			let t = We(e);
			return {
				...e,
				title: t
			};
		}
		return {
			label: e?.toString(),
			title: e?.toString(),
			value: e
		};
	});
}
var Ke = ({ prefixCls: e, className: t, style: n, styles: r, classNames: i, data: a, disabled: o, checked: s, label: c, title: l, value: u, name: d, onChange: f, onFocus: m, onBlur: h, onKeyDown: g, onKeyUp: _, onMouseDown: v, itemRender: y = (e) => e }) => {
	let b = (e) => {
		o || f(e, u);
	};
	return y(/* @__PURE__ */ $.createElement("label", {
		className: p(t, { [`${e}-item-disabled`]: o }),
		style: n,
		onMouseDown: v
	}, /*#__PURE__*/ $.createElement("input", {
		name: d,
		className: `${e}-item-input`,
		type: "radio",
		disabled: o,
		checked: s,
		onChange: b,
		onFocus: m,
		onBlur: h,
		onKeyDown: g,
		onKeyUp: _
	}), /*#__PURE__*/ $.createElement("div", {
		className: p(`${e}-item-label`, i?.label),
		title: l,
		style: r?.label
	}, c)), { item: a });
}, qe = /* @__PURE__ */ $.forwardRef((e, t) => {
	let { prefixCls: n = "rc-segmented", direction: r, vertical: i, options: a = [], disabled: o, defaultValue: s, value: c, name: l, onChange: u, className: d = "", style: f, styles: m, classNames: h, motionName: g = "thumb-motion", itemRender: v, ...y } = e, b = $.useRef(null), x = $.useMemo(() => T(b, t), [b, t]), S = $.useMemo(() => Ge(a), [a]), [C, w] = E(s ?? S[0]?.value, c), [O, k] = $.useState(!1), A = (e, t) => {
		w(t), u?.(t);
	}, j = _(y, ["children"]), [M, N] = $.useState(!1), [P, F] = $.useState(!1), I = () => {
		F(!0);
	}, ee = () => {
		F(!1);
	}, L = () => {
		N(!1);
	}, R = (e) => {
		e.key === "Tab" && N(!0);
	}, z = (e) => {
		let t = S.findIndex((e) => e.value === C), n = S.length, r = S[(t + e + n) % n];
		r && (w(r.value), u?.(r.value));
	}, B = (e) => {
		switch (e.key) {
			case "ArrowLeft":
			case "ArrowUp":
				z(-1);
				break;
			case "ArrowRight":
			case "ArrowDown":
				z(1);
				break;
		}
	}, te = (e) => {
		let { value: t, disabled: r } = e;
		return /*#__PURE__*/ $.createElement(Ke, D({}, e, {
			name: l,
			data: e,
			itemRender: v,
			key: t,
			prefixCls: n,
			className: p(e.className, `${n}-item`, h?.item, {
				[`${n}-item-selected`]: t === C && !O,
				[`${n}-item-focused`]: P && M && t === C
			}),
			style: m?.item,
			classNames: h,
			styles: m,
			checked: t === C,
			onChange: A,
			onFocus: I,
			onBlur: ee,
			onKeyDown: B,
			onKeyUp: R,
			onMouseDown: L,
			disabled: !!o || !!r
		}));
	};
	return /*#__PURE__*/ $.createElement("div", D({
		role: "radiogroup",
		"aria-label": "segmented control",
		tabIndex: o ? void 0 : 0,
		"aria-orientation": i ? "vertical" : "horizontal",
		style: f
	}, j, {
		className: p(n, {
			[`${n}-rtl`]: r === "rtl",
			[`${n}-disabled`]: o,
			[`${n}-vertical`]: i
		}, d),
		ref: x
	}), /*#__PURE__*/ $.createElement("div", { className: `${n}-group` }, /*#__PURE__*/ $.createElement(Ue, {
		vertical: i,
		prefixCls: n,
		value: C,
		containerRef: b,
		motionName: `${n}-${g}`,
		direction: r,
		getValueIndex: (e) => S.findIndex((t) => t.value === e),
		onMotionStart: () => {
			k(!0);
		},
		onMotionEnd: () => {
			k(!1);
		}
	}), S.map(te)));
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/segmented/style/index.js
function Je(e, t) {
	return { [`${e}, ${e}:hover, ${e}:focus`]: {
		color: t.colorTextDisabled,
		cursor: "not-allowed"
	} };
}
var Ye = (e) => ({
	background: e.itemSelectedBg,
	boxShadow: e.boxShadowTertiary
}), Xe = {
	overflow: "hidden",
	...X
}, Ze = (e) => {
	let { componentCls: t, motionDurationSlow: n, motionEaseInOut: r, motionDurationMid: i } = e, a = e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(), o = e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(), s = e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();
	return { [t]: {
		...he(e),
		display: "inline-block",
		padding: e.trackPadding,
		color: e.itemColor,
		background: e.trackBg,
		borderRadius: e.borderRadius,
		transition: `all ${i}`,
		...se(e),
		[`${t}-group`]: {
			position: "relative",
			display: "flex",
			alignItems: "stretch",
			justifyItems: "flex-start",
			flexDirection: "row",
			width: "100%"
		},
		[`&${t}-rtl`]: { direction: "rtl" },
		[`&${t}-vertical`]: {
			[`${t}-group`]: { flexDirection: "column" },
			[`${t}-thumb`]: {
				width: "100%",
				height: 0,
				padding: `0 ${S(e.paddingXXS)}`
			}
		},
		[`&${t}-block`]: { display: "flex" },
		[`&${t}-block ${t}-item`]: {
			flex: 1,
			minWidth: 0
		},
		[`${t}-item`]: {
			position: "relative",
			textAlign: "center",
			cursor: "pointer",
			transition: `color ${i}`,
			borderRadius: e.borderRadiusSM,
			transform: "translateZ(0)",
			"&-selected": {
				...Ye(e),
				color: e.itemSelectedColor
			},
			"&-focused": _e(e),
			"&::after": {
				content: "\"\"",
				position: "absolute",
				zIndex: -1,
				width: "100%",
				height: "100%",
				top: 0,
				insetInlineStart: 0,
				borderRadius: "inherit",
				opacity: 0,
				pointerEvents: "none",
				transition: ["opacity", "background-color"].map((e) => `${e} ${i}`).join(", ")
			},
			[`&:not(${t}-item-selected):not(${t}-item-disabled)`]: {
				"&:hover, &:active": { color: e.itemHoverColor },
				"&:hover::after": {
					opacity: 1,
					backgroundColor: e.itemHoverBg
				},
				"&:active::after": {
					opacity: 1,
					backgroundColor: e.itemActiveBg
				}
			},
			"&-label": {
				minHeight: a,
				lineHeight: S(a),
				padding: `0 ${S(e.segmentedPaddingHorizontal)}`,
				...Xe
			},
			"&-icon + *": { marginInlineStart: e.calc(e.marginSM).div(2).equal() },
			"&-input": {
				position: "absolute",
				insetBlockStart: 0,
				insetInlineStart: 0,
				width: 0,
				height: 0,
				opacity: 0,
				pointerEvents: "none"
			}
		},
		[`${t}-thumb`]: {
			...Ye(e),
			position: "absolute",
			insetBlockStart: 0,
			insetInlineStart: 0,
			width: 0,
			height: "100%",
			padding: `${S(e.paddingXXS)} 0`,
			borderRadius: e.borderRadiusSM,
			[`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]: { backgroundColor: "transparent" }
		},
		[`&${t}-lg`]: {
			borderRadius: e.borderRadiusLG,
			[`${t}-item-label`]: {
				minHeight: o,
				lineHeight: S(o),
				padding: `0 ${S(e.segmentedPaddingHorizontal)}`,
				fontSize: e.fontSizeLG
			},
			[`${t}-item, ${t}-thumb`]: { borderRadius: e.borderRadius }
		},
		[`&${t}-sm`]: {
			borderRadius: e.borderRadiusSM,
			[`${t}-item-label`]: {
				minHeight: s,
				lineHeight: S(s),
				padding: `0 ${S(e.segmentedPaddingHorizontalSM)}`
			},
			[`${t}-item, ${t}-thumb`]: { borderRadius: e.borderRadiusXS }
		},
		...Je(`&-disabled ${t}-item`, e),
		...Je(`${t}-item-disabled`, e),
		[`${t}-thumb-motion-appear-active`]: {
			willChange: "transform, width",
			transition: ["transform", "width"].map((e) => `${e} ${n} ${r}`).join(", ")
		},
		[`&${t}-shape-round`]: {
			borderRadius: 9999,
			[`${t}-item, ${t}-thumb`]: { borderRadius: 9999 }
		}
	} };
}, Qe = ge("Segmented", (e) => {
	let { lineWidth: t, calc: n } = e;
	return Ze(j(e, {
		segmentedPaddingHorizontal: n(e.controlPaddingHorizontal).sub(t).equal(),
		segmentedPaddingHorizontalSM: n(e.controlPaddingHorizontalSM).sub(t).equal()
	}));
}, (e) => {
	let { colorTextLabel: t, colorText: n, colorFillSecondary: r, colorBgElevated: i, colorFill: a, lineWidthBold: o, colorBgLayout: s } = e;
	return {
		trackPadding: o,
		trackBg: s,
		itemColor: t,
		itemHoverColor: n,
		itemHoverBg: r,
		itemSelectedBg: i,
		itemActiveBg: a,
		itemSelectedColor: n
	};
}), $e = /* @__PURE__ */ e({ default: () => tt });
function et(e) {
	return ne(e) && !!e?.icon;
}
var tt = /* @__PURE__ */ $.forwardRef((e, t) => {
	let n = w(), { prefixCls: r, className: i, rootClassName: a, block: o, options: s = [], size: c, style: l, vertical: u, orientation: d, shape: f = "default", name: m = n, styles: h, classNames: g, ..._ } = e, { getPrefixCls: v, direction: y, className: b, style: x, classNames: S, styles: C } = H("segmented"), T = {
		...e,
		options: s,
		size: c,
		shape: f
	}, [E, D] = ee([S, g], [C, h], { props: T }), O = v("segmented", r), [k, A] = Qe(O), j = ce(c), M = $.useMemo(() => s.map((e) => {
		if (et(e)) {
			let { icon: t, label: n, ...r } = e;
			return {
				...r,
				label: /*#__PURE__*/ $.createElement($.Fragment, null, /*#__PURE__*/ $.createElement("span", {
					className: p(`${O}-item-icon`, E.icon),
					style: D.icon
				}, t), n && /*#__PURE__*/ $.createElement("span", null, n))
			};
		}
		return e;
	}), [
		s,
		O,
		E.icon,
		D.icon
	]), [, N] = Y(d, u), P = p(i, a, b, E.root, {
		[`${O}-block`]: o,
		[`${O}-sm`]: j === "small",
		[`${O}-lg`]: j === "large",
		[`${O}-vertical`]: N,
		[`${O}-shape-${f}`]: f === "round"
	}, k, A), F = {
		...D.root,
		...x,
		...l
	}, I = (e, { item: t }) => {
		if (!t.tooltip) return e;
		let n = ne(t.tooltip) ? t.tooltip : { title: t.tooltip };
		return /*#__PURE__*/ $.createElement(we, { ...n }, e);
	};
	return /*#__PURE__*/ $.createElement(qe, {
		..._,
		name: m,
		className: P,
		style: F,
		classNames: E,
		styles: D,
		itemRender: I,
		options: M,
		ref: t,
		prefixCls: O,
		direction: y,
		vertical: N
	});
}), nt = /*#__PURE__*/ $.createContext({}), rt = /*#__PURE__*/ $.createContext({}), it = ({ prefixCls: e, value: t, onChange: n, className: r, style: i }) => {
	let a = () => {
		if (n && t && !t.cleared) {
			let e = t.toHsb();
			e.a = 0;
			let r = I(e);
			r.cleared = !0, n(r);
		}
	};
	return /*#__PURE__*/ $.createElement("div", {
		role: "button",
		"aria-label": "Clear color",
		tabIndex: 0,
		className: p(`${e}-clear`, r),
		style: i,
		onClick: a,
		onKeyDown: (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), a());
		}
	});
};
//#endregion
//#region node_modules/.pnpm/@rc-component+mini-decimal@1.1.4/node_modules/@rc-component/mini-decimal/es/supportUtil.js
function at() {
	return typeof BigInt == "function";
}
//#endregion
//#region node_modules/.pnpm/@rc-component+mini-decimal@1.1.4/node_modules/@rc-component/mini-decimal/es/numberUtil.js
function ot(e) {
	return !e && e !== 0 && !Number.isNaN(e) || !String(e).trim();
}
function st(e) {
	var t = e.trim(), n = t.startsWith("-");
	n && (t = t.slice(1)), t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), t.startsWith(".") && (t = `0${t}`);
	var r = t || "0", i = r.split("."), a = i[0] || "0", o = i[1] || "0";
	a === "0" && o === "0" && (n = !1);
	var s = n ? "-" : "";
	return {
		negative: n,
		negativeStr: s,
		trimStr: r,
		integerStr: a,
		decimalStr: o,
		fullStr: `${s}${r}`
	};
}
function ct(e) {
	var t = String(e);
	return !Number.isNaN(Number(t)) && t.includes("e");
}
function lt(e) {
	var t = k(e.toLowerCase().split("e"), 2), n = t[0], r = t[1], i = r === void 0 ? "0" : r, a = n.startsWith("-"), o = k((a ? n.slice(1) : n).split("."), 2), s = o[0], c = s === void 0 ? "0" : s, l = o[1], u = l === void 0 ? "" : l;
	return {
		decimal: u,
		digits: `${c}${u}`.replace(/^0+/, "") || "0",
		exponent: Number(i),
		integer: c,
		negative: a
	};
}
function ut(e) {
	var t = e.decimal, n = e.digits, r = e.exponent, i = e.integer, a = e.negative;
	if (n === "0") return "0";
	var o = i.replace(/^0+/, "").length, s = (t.match(/^0*/) || [""])[0].length, c = (o || -s) + r, l = "";
	return l = c <= 0 ? `0.${"0".repeat(-c)}${n}` : c >= n.length ? `${n}${"0".repeat(c - n.length)}` : `${n.slice(0, c)}.${n.slice(c)}`, `${a ? "-" : ""}${l}`;
}
function dt(e) {
	return e.exponent >= 0 ? Math.max(0, e.decimal.length - e.exponent) : Math.abs(e.exponent) + e.decimal.length;
}
function ft(e) {
	var t = String(e);
	return ct(e) ? dt(lt(t)) : t.includes(".") && mt(t) ? t.length - t.indexOf(".") - 1 : 0;
}
function pt(e) {
	var t = String(e);
	if (ct(e)) {
		if (e > 2 ** 53 - 1) return String(at() ? BigInt(e).toString() : 2 ** 53 - 1);
		if (e < -(2 ** 53 - 1)) return String(at() ? BigInt(e).toString() : -(2 ** 53 - 1));
		var n = lt(t), r = dt(n);
		t = r > 100 ? ut(n) : e.toFixed(r);
	}
	return st(t).fullStr;
}
function mt(e) {
	return typeof e == "number" ? !Number.isNaN(e) : e ? /^\s*-?\d+(\.\d+)?\s*$/.test(e) || /^\s*-?\d+\.\s*$/.test(e) || /^\s*-?\.\d+\s*$/.test(e) : !1;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+mini-decimal@1.1.4/node_modules/@rc-component/mini-decimal/es/BigIntDecimal.js
var ht = /*#__PURE__*/ function() {
	function e(t) {
		if (g(this, e), o(this, "origin", ""), o(this, "negative", void 0), o(this, "integer", void 0), o(this, "decimal", void 0), o(this, "decimalLen", void 0), o(this, "empty", void 0), o(this, "nan", void 0), ot(t)) {
			this.empty = !0;
			return;
		}
		if (this.origin = String(t), t === "-" || Number.isNaN(t)) {
			this.nan = !0;
			return;
		}
		var n = t;
		if (ct(n) && (n = Number(n)), n = typeof n == "string" ? n : pt(n), mt(n)) {
			var r = st(n);
			this.negative = r.negative;
			var i = r.trimStr.split(".");
			this.integer = BigInt(i[0]);
			var a = i[1] || "0";
			this.decimal = BigInt(a), this.decimalLen = a.length;
		} else this.nan = !0;
	}
	return A(e, [
		{
			key: "getMark",
			value: function() {
				return this.negative ? "-" : "";
			}
		},
		{
			key: "getIntegerStr",
			value: function() {
				return this.integer.toString();
			}
		},
		{
			key: "getDecimalStr",
			value: function() {
				return this.decimal.toString().padStart(this.decimalLen, "0");
			}
		},
		{
			key: "alignDecimal",
			value: function(e) {
				var t = `${this.getMark()}${this.getIntegerStr()}${this.getDecimalStr().padEnd(e, "0")}`;
				return BigInt(t);
			}
		},
		{
			key: "negate",
			value: function() {
				var t = new e(this.toString());
				return t.negative = !t.negative, t;
			}
		},
		{
			key: "cal",
			value: function(t, n, r) {
				var i = Math.max(this.getDecimalStr().length, t.getDecimalStr().length), a = n(this.alignDecimal(i), t.alignDecimal(i)).toString(), o = r(i), s = st(a), c = `${s.negativeStr}${s.trimStr.padStart(o + 1, "0")}`;
				return new e(`${c.slice(0, -o)}.${c.slice(-o)}`);
			}
		},
		{
			key: "add",
			value: function(t) {
				if (this.isInvalidate()) return new e(t);
				var n = new e(t);
				return n.isInvalidate() ? this : this.cal(n, function(e, t) {
					return e + t;
				}, function(e) {
					return e;
				});
			}
		},
		{
			key: "multi",
			value: function(t) {
				var n = new e(t);
				return this.isInvalidate() || n.isInvalidate() ? new e(NaN) : this.cal(n, function(e, t) {
					return e * t;
				}, function(e) {
					return e * 2;
				});
			}
		},
		{
			key: "isEmpty",
			value: function() {
				return this.empty;
			}
		},
		{
			key: "isNaN",
			value: function() {
				return this.nan;
			}
		},
		{
			key: "isInvalidate",
			value: function() {
				return this.isEmpty() || this.isNaN();
			}
		},
		{
			key: "equals",
			value: function(e) {
				return this.toString() === e?.toString();
			}
		},
		{
			key: "lessEquals",
			value: function(e) {
				return this.add(e.negate().toString()).toNumber() <= 0;
			}
		},
		{
			key: "toNumber",
			value: function() {
				return this.isNaN() ? NaN : Number(this.toString());
			}
		},
		{
			key: "toString",
			value: function() {
				return !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0] ? this.isInvalidate() ? "" : st(`${this.getMark()}${this.getIntegerStr()}.${this.getDecimalStr()}`).fullStr : this.origin;
			}
		}
	]), e;
}(), gt = /*#__PURE__*/ function() {
	function e(t) {
		if (g(this, e), o(this, "origin", ""), o(this, "number", void 0), o(this, "empty", void 0), ot(t)) {
			this.empty = !0;
			return;
		}
		this.origin = String(t), this.number = Number(t);
	}
	return A(e, [
		{
			key: "negate",
			value: function() {
				return new e(-this.toNumber());
			}
		},
		{
			key: "add",
			value: function(t) {
				if (this.isInvalidate()) return new e(t);
				var n = Number(t);
				if (Number.isNaN(n)) return this;
				var r = this.number + n;
				if (r > 2 ** 53 - 1) return new e(2 ** 53 - 1);
				if (r < -(2 ** 53 - 1)) return new e(-(2 ** 53 - 1));
				var i = Math.max(ft(this.number), ft(n));
				return new e(r.toFixed(i));
			}
		},
		{
			key: "multi",
			value: function(t) {
				var n = Number(t);
				if (this.isInvalidate() || Number.isNaN(n)) return new e(NaN);
				var r = this.number * n;
				if (r > 2 ** 53 - 1) return new e(2 ** 53 - 1);
				if (r < -(2 ** 53 - 1)) return new e(-(2 ** 53 - 1));
				var i = Math.max(ft(this.number), ft(n));
				return new e(r.toFixed(i));
			}
		},
		{
			key: "isEmpty",
			value: function() {
				return this.empty;
			}
		},
		{
			key: "isNaN",
			value: function() {
				return Number.isNaN(this.number);
			}
		},
		{
			key: "isInvalidate",
			value: function() {
				return this.isEmpty() || this.isNaN();
			}
		},
		{
			key: "equals",
			value: function(e) {
				return this.toNumber() === e?.toNumber();
			}
		},
		{
			key: "lessEquals",
			value: function(e) {
				return this.add(e.negate().toString()).toNumber() <= 0;
			}
		},
		{
			key: "toNumber",
			value: function() {
				return this.number;
			}
		},
		{
			key: "toString",
			value: function() {
				return !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0] ? this.isInvalidate() ? "" : ct(this.number) && ft(this.number) > 100 ? String(this.number) : pt(this.number) : this.origin;
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/.pnpm/@rc-component+mini-decimal@1.1.4/node_modules/@rc-component/mini-decimal/es/MiniDecimal.js
function _t(e) {
	return at() ? new ht(e) : new gt(e);
}
function vt(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
	if (e === "") return "";
	var i = st(e), a = i.negativeStr, o = i.integerStr, s = i.decimalStr, c = `${t}${s}`, l = `${a}${o}`;
	if (n >= 0) {
		var u = Number(s[n]);
		return u >= 5 && !r ? vt(_t(e).add(`${a}0.${"0".repeat(n)}${10 - u}`).toString(), t, n, r) : n === 0 ? l : `${l}${t}${s.padEnd(n, "0").slice(0, n)}`;
	}
	return c === ".0" ? l : `${l}${c}`;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+mini-decimal@1.1.4/node_modules/@rc-component/mini-decimal/es/index.js
var yt = _t;
//#endregion
//#region node_modules/.pnpm/@rc-component+input-number@_c4572a45d6cd7b5737790c711dd453b9/node_modules/@rc-component/input-number/es/hooks/useCursor.js
function bt(e, t) {
	let n = (0, $.useRef)(null);
	function r() {
		try {
			let { selectionStart: t, selectionEnd: r, value: i } = e;
			n.current = {
				start: t,
				end: r,
				value: i,
				beforeTxt: i.substring(0, t),
				afterTxt: i.substring(r)
			};
		} catch {}
	}
	function i() {
		if (e && n.current && t) try {
			let { value: t } = e, { beforeTxt: r, afterTxt: i, start: a } = n.current, o = t.length;
			if (t.startsWith(r)) o = r.length;
			else if (t.endsWith(i)) o = t.length - n.current.afterTxt.length;
			else {
				let e = r[a - 1], n = t.indexOf(e, a - 1);
				n !== -1 && (o = n + 1);
			}
			e.setSelectionRange(o, o);
		} catch (e) {
			a(!1, `Something warning of cursor restore. Please fire issue about this: ${e.message}`);
		}
	}
	return [r, i];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input-number@_c4572a45d6cd7b5737790c711dd453b9/node_modules/@rc-component/input-number/es/StepHandler.js
var xt = 200, St = 600;
function Ct({ prefixCls: e, action: t, children: n, disabled: r, className: a, style: o, onStep: s }) {
	let c = t === "up", l = $.useRef(), u = $.useRef([]), d = () => {
		clearTimeout(l.current);
	}, f = (e) => {
		e.preventDefault(), d(), s(c, "handler");
		function t() {
			s(c, "handler"), l.current = setTimeout(t, xt);
		}
		l.current = setTimeout(t, St);
	};
	$.useEffect(() => () => {
		d(), u.current.forEach((e) => {
			i.cancel(e);
		});
	}, []);
	let m = `${e}-action`, h = p(m, `${m}-${t}`, { [`${m}-${t}-disabled`]: r }, a), g = () => u.current.push(i(d));
	return /*#__PURE__*/ $.createElement("span", {
		unselectable: "on",
		role: "button",
		onMouseUp: g,
		onMouseLeave: g,
		onMouseDown: (e) => {
			f(e);
		},
		"aria-label": c ? "Increase Value" : "Decrease Value",
		"aria-disabled": r,
		className: h,
		style: o
	}, n || /*#__PURE__*/ $.createElement("span", {
		unselectable: "on",
		className: `${e}-action-${t}-inner`
	}));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input-number@_c4572a45d6cd7b5737790c711dd453b9/node_modules/@rc-component/input-number/es/utils/numberUtil.js
function wt(e) {
	let t = typeof e == "number" ? pt(e) : st(e).fullStr;
	return t.includes(".") ? st(t.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr : e + "0";
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input-number@_c4572a45d6cd7b5737790c711dd453b9/node_modules/@rc-component/input-number/es/hooks/useFrame.js
var Tt = (() => {
	let e = (0, $.useRef)(0), t = () => {
		i.cancel(e.current);
	};
	return (0, $.useEffect)(() => t, []), (n) => {
		t(), e.current = i(() => {
			n();
		});
	};
});
//#endregion
//#region node_modules/.pnpm/@rc-component+input-number@_c4572a45d6cd7b5737790c711dd453b9/node_modules/@rc-component/input-number/es/InputNumber.js
function Et() {
	return Et = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Et.apply(this, arguments);
}
var Dt = (e, t) => e || t.isEmpty() ? t.toString() : t.toNumber(), Ot = (e) => {
	let t = yt(e);
	return t.isInvalidate() ? null : t;
}, kt = /* @__PURE__ */ $.forwardRef((e, t) => {
	let { mode: n = "input", prefixCls: r = "rc-input-number", className: i, style: a, classNames: o, styles: s, min: c, max: l, step: u = 1, defaultValue: d, value: f, disabled: m, readOnly: g, upHandler: _, downHandler: y, keyboard: x, changeOnWheel: S = !1, controls: C = !0, prefix: w, suffix: T, stringMode: E, parser: D, formatter: k, precision: A, decimalSeparator: j, onChange: M, onInput: N, onPressEnter: P, onStep: F, onMouseDown: I, onClick: ee, onMouseUp: L, onMouseLeave: R, onMouseMove: z, onMouseEnter: B, onMouseOut: te, changeOnBlur: ne = !0, ...re } = e, [V, ie] = $.useState(!1), H = $.useRef(!1), U = $.useRef(!1), ae = $.useRef(!1), W = $.useRef(null), G = $.useRef(null);
	$.useImperativeHandle(t, () => v(G.current, {
		focus: (e) => {
			h(G.current, e);
		},
		blur: () => {
			G.current?.blur();
		},
		nativeElement: W.current
	}));
	let [K, q] = $.useState(() => yt(f ?? d));
	function J(e) {
		f === void 0 && q(e);
	}
	let oe = $.useCallback((e, t) => {
		if (!t) return A >= 0 ? A : Math.max(ft(e), ft(u));
	}, [A, u]), se = $.useCallback((e) => {
		let t = String(e);
		if (D) return D(t);
		let n = t;
		return j && (n = n.replace(j, ".")), n.replace(/[^\w.-]+/g, "");
	}, [D, j]), ce = $.useRef(""), Y = $.useCallback((e, t) => {
		if (k) return k(e, {
			userTyping: t,
			input: String(ce.current)
		});
		let n = typeof e == "number" ? pt(e) : e;
		if (!t) {
			let e = oe(n, t);
			mt(n) && (j || e >= 0) && (n = vt(n, j || ".", e));
		}
		return n;
	}, [
		k,
		oe,
		j
	]), [X, le] = $.useState(() => {
		let e = d ?? f;
		return K.isInvalidate() && ["string", "number"].includes(typeof e) ? Number.isNaN(e) ? "" : e : Y(K.toString(), !1);
	});
	ce.current = X;
	function Z(e, t) {
		le(Y(e.isInvalidate() ? e.toString(!1) : e.toString(!t), t));
	}
	let ue = $.useMemo(() => Ot(l), [l, A]), de = $.useMemo(() => Ot(c), [c, A]), fe = $.useMemo(() => !ue || !K || K.isInvalidate() ? !1 : ue.lessEquals(K), [ue, K]), pe = $.useMemo(() => !de || !K || K.isInvalidate() ? !1 : K.lessEquals(de), [de, K]), [me, Q] = bt(G.current, V), he = (e) => ue && !e.lessEquals(ue) ? ue : de && !de.lessEquals(e) ? de : null, ge = (e) => !he(e), _e = (e, t) => {
		let n = e, r = ge(n) || n.isEmpty();
		if (!n.isEmpty() && !t && (n = he(n) || n, r = !0), !g && !m && r) {
			let e = n.toString(), r = oe(e, t);
			return r >= 0 && (n = yt(vt(e, ".", r)), ge(n) || (n = yt(vt(e, ".", r, !0)))), n.equals(K) || (J(n), M?.(n.isEmpty() ? null : Dt(E, n)), f === void 0 && Z(n, t)), n;
		}
		return K;
	}, ve = Tt(), ye = (e) => {
		if (me(), ce.current = e, le(e), !U.current) {
			let t = yt(se(e));
			t.isNaN() || _e(t, !0);
		}
		N?.(e), ve(() => {
			let t = e;
			D || (t = e.replace(/。/g, ".")), t !== e && ye(t);
		});
	}, be = () => {
		U.current = !0;
	}, xe = () => {
		U.current = !1, ye(G.current.value);
	}, Se = (e) => {
		ye(e.target.value);
	}, Ce = b((e, t) => {
		if (e && fe || !e && pe) return;
		H.current = !1;
		let n = yt(ae.current ? wt(u) : u);
		e || (n = n.negate());
		let r = _e((K || yt(0)).add(n.toString()), !1);
		F?.(Dt(E, r), {
			offset: ae.current ? wt(u) : u,
			type: e ? "up" : "down",
			emitter: t
		}), G.current?.focus();
	}), we = (e) => {
		let t = yt(se(X)), n;
		n = t.isNaN() ? _e(K, e) : _e(t, e), f === void 0 ? n.isNaN() || Z(n, !1) : Z(K, !1);
	}, Te = () => {
		H.current = !0;
	}, Ee = (e) => {
		let { key: t, shiftKey: n } = e;
		H.current = !0, ae.current = n, t === "Enter" && (U.current || (H.current = !1), we(!1), P?.(e)), x !== !1 && !U.current && [
			"Up",
			"ArrowUp",
			"Down",
			"ArrowDown"
		].includes(t) && (Ce(t === "Up" || t === "ArrowUp", "keyboard"), e.preventDefault());
	}, De = () => {
		H.current = !1, ae.current = !1;
	};
	$.useEffect(() => {
		if (S && V) {
			let e = (e) => {
				Ce(e.deltaY < 0, "wheel"), e.preventDefault();
			}, t = G.current;
			if (t) return t.addEventListener("wheel", e, { passive: !1 }), () => t.removeEventListener("wheel", e);
		}
	});
	let Oe = () => {
		ne && we(!1), ie(!1), H.current = !1;
	}, ke = (e) => {
		G.current && e.target !== G.current && (G.current.focus(), e.preventDefault()), I?.(e);
	};
	O(() => {
		K.isInvalidate() || Z(K, !1);
	}, [A, k]), O(() => {
		let e = yt(f);
		q(e);
		let t = yt(se(X));
		(!e.equals(t) || !H.current || k) && Z(e, H.current);
	}, [f]), O(() => {
		k && Q();
	}, [X]);
	let Ae = {
		prefixCls: r,
		onStep: Ce,
		className: o?.action,
		style: s?.action
	}, je = /*#__PURE__*/ $.createElement(Ct, Et({}, Ae, {
		action: "up",
		disabled: fe
	}), _), Me = /*#__PURE__*/ $.createElement(Ct, Et({}, Ae, {
		action: "down",
		disabled: pe
	}), y);
	return /*#__PURE__*/ $.createElement("div", {
		ref: W,
		className: p(r, `${r}-mode-${n}`, i, o?.root, {
			[`${r}-focused`]: V,
			[`${r}-disabled`]: m,
			[`${r}-readonly`]: g,
			[`${r}-not-a-number`]: K.isNaN(),
			[`${r}-out-of-range`]: !K.isInvalidate() && !ge(K)
		}),
		style: {
			...s?.root,
			...a
		},
		onMouseDown: ke,
		onMouseUp: L,
		onMouseLeave: R,
		onMouseMove: z,
		onMouseEnter: B,
		onMouseOut: te,
		onClick: ee,
		onFocus: () => {
			ie(!0);
		},
		onBlur: Oe,
		onKeyDown: Ee,
		onKeyUp: De,
		onCompositionStart: be,
		onCompositionEnd: xe,
		onBeforeInput: Te
	}, n === "spinner" && C && Me, w !== void 0 && /*#__PURE__*/ $.createElement("div", {
		className: p(`${r}-prefix`, o?.prefix),
		style: s?.prefix
	}, w), /*#__PURE__*/ $.createElement("input", Et({
		autoComplete: "off",
		role: "spinbutton",
		"aria-valuemin": c,
		"aria-valuemax": l,
		"aria-valuenow": K.isInvalidate() ? null : K.toString(),
		step: u,
		ref: G,
		className: p(`${r}-input`, o?.input),
		style: s?.input,
		value: X,
		onChange: Se,
		disabled: m,
		readOnly: g
	}, re)), T !== void 0 && /*#__PURE__*/ $.createElement("div", {
		className: p(`${r}-suffix`, o?.suffix),
		style: s?.suffix
	}, T), n === "spinner" && C && je, n === "input" && C && /*#__PURE__*/ $.createElement("div", {
		className: p(`${r}-actions`, o?.actions),
		style: s?.actions
	}, je, Me));
}), At = (e) => {
	let { componentCls: t, borderRadius: n, paddingSM: r, colorBorder: i, paddingXS: a, fontSizeLG: o, fontSizeSM: s, borderRadiusLG: c, borderRadiusSM: l, colorBgContainerDisabled: u, lineWidth: d, antCls: f } = e, [p, m] = me(f, "space-addon");
	return { [t]: [
		{
			...he(e),
			display: "inline-flex",
			alignItems: "center",
			gap: 0,
			whiteSpace: "nowrap",
			paddingInline: r,
			margin: 0,
			borderWidth: d,
			borderStyle: "solid",
			borderRadius: n,
			"&:hover": { zIndex: 0 },
			[`&${t}-disabled`]: { color: e.colorTextDisabled },
			"&-large": {
				fontSize: o,
				borderRadius: c
			},
			"&-small": {
				paddingInline: a,
				borderRadius: l,
				fontSize: s
			},
			"&-compact-last-item": {
				borderEndStartRadius: 0,
				borderStartStartRadius: 0
			},
			"&-compact-first-item": {
				borderEndEndRadius: 0,
				borderStartEndRadius: 0
			},
			"&-compact-item:not(:first-child):not(:last-child)": { borderRadius: 0 },
			"&-compact-item:not(:last-child)": { borderInlineEndWidth: 0 },
			"&-compact-item:not(:first-child)": { borderInlineStartWidth: 0 }
		},
		{
			[p("addon-border-color")]: i,
			[p("addon-background")]: u,
			[p("addon-border-color-outlined")]: i,
			[p("addon-background-filled")]: u,
			borderColor: m("addon-border-color"),
			background: m("addon-background"),
			"&-variant-outlined": { [p("addon-border-color")]: m("addon-border-color-outlined") },
			"&-variant-filled": {
				[p("addon-border-color")]: "transparent",
				[p("addon-background")]: m("addon-background-filled"),
				[`&${t}-disabled`]: {
					[p("addon-border-color")]: i,
					[p("addon-background")]: u
				}
			},
			"&-variant-borderless": {
				border: "none",
				background: "transparent"
			},
			"&-variant-underlined": {
				border: "none",
				background: "transparent"
			}
		},
		{
			"&-status-error": {
				[p("addon-border-color-outlined")]: e.colorError,
				[p("addon-background-filled")]: e.colorErrorBg,
				color: e.colorError
			},
			"&-status-warning": {
				[p("addon-border-color-outlined")]: e.colorWarning,
				[p("addon-background-filled")]: e.colorWarningBg,
				color: e.colorWarning
			}
		}
	] };
}, jt = ge("Addon", (e) => [At(e), U(e, { focus: !1 })]), Mt = /*#__PURE__*/ $.forwardRef((e, t) => {
	let { className: n, children: r, style: i, prefixCls: a, variant: o = "outlined", disabled: s, status: c, ...l } = e, { getPrefixCls: u, direction: d } = $.useContext(oe), f = u("space-addon", a), [m, h] = jt(f), { compactItemClassnames: g, compactSize: _ } = M(f, d), v = F(f, c), y = p(f, m, g, h, `${f}-variant-${o}`, v, {
		[`${f}-${_}`]: _,
		[`${f}-disabled`]: s
	}, n);
	return /*#__PURE__*/ $.createElement("div", {
		ref: t,
		className: y,
		style: i,
		...l
	}, r);
}), Nt = (e) => {
	let t = e.handleVisible ?? "auto", n = e.controlHeightSM - e.lineWidth * 2;
	return {
		...Oe(e),
		controlWidth: 90,
		handleWidth: n,
		handleFontSize: e.fontSize / 2,
		handleVisible: t,
		handleActiveBg: e.colorFillAlter,
		handleBg: e.colorBgContainer,
		filledHandleBg: new y(e.colorFillSecondary).onBackground(e.colorBgContainer).toHexString(),
		handleHoverColor: e.colorPrimary,
		handleBorderColor: e.colorBorder,
		handleOpacity: +(t === !0),
		handleVisibleWidth: t === !0 ? n : 0
	};
}, Pt = (e) => {
	let { componentCls: t, lineWidth: n, lineType: r, borderRadius: i, inputFontSizeSM: a, inputFontSizeLG: o, colorError: s, paddingInlineSM: c, paddingBlockSM: l, paddingBlockLG: u, paddingInlineLG: d, colorIcon: f, colorTextDisabled: p, motionDurationMid: m, handleHoverColor: h, handleOpacity: g, paddingInline: _, paddingBlock: v, handleBg: y, handleActiveBg: b, inputAffixPadding: x, borderRadiusSM: C, controlWidth: w, handleBorderColor: T, filledHandleBg: E, lineHeightLG: D, antCls: O } = e, k = `${S(n)} ${r} ${T}`, [A, j] = me(O, "input-number");
	return [
		{ [t]: {
			...he(e),
			...Me(e),
			[A("input-padding-block")]: S(v),
			[A("input-padding-inline")]: S(_),
			display: "inline-flex",
			width: w,
			margin: 0,
			paddingBlock: 0,
			borderRadius: i,
			...je(e, { [`${t}-actions`]: {
				background: y,
				[`${t}-action-down`]: { borderBlockStart: k }
			} }),
			...Ee(e, {
				[`${t}-actions`]: {
					background: E,
					[`${t}-action-down`]: { borderBlockStart: k }
				},
				"&:focus-within": { [`${t}-actions`]: { background: y } }
			}),
			...ke(e, { [`${t}-actions`]: {
				background: y,
				[`${t}-action-down`]: { borderBlockStart: k }
			} }),
			...Pe(e),
			[`&${t}-borderless`]: {
				paddingBlock: 0,
				[A("input-padding-block")]: S(e.calc(v).add(n).equal())
			},
			[`&${t}-borderless${t}-sm`]: {
				paddingBlock: 0,
				[A("input-padding-block")]: S(e.calc(l).add(n).equal())
			},
			[`&${t}-borderless${t}-lg`]: {
				paddingBlock: 0,
				[A("input-padding-block")]: S(e.calc(u).add(n).equal())
			},
			"&-rtl": {
				direction: "rtl",
				[`${t}-input`]: { direction: "rtl" }
			},
			[`&${t}-out-of-range`]: { [`${t}-input`]: { color: s } },
			[`${t}-input`]: {
				...he(e),
				width: "100%",
				paddingBlock: j("input-padding-block"),
				textAlign: "start",
				backgroundColor: "transparent",
				border: 0,
				borderRadius: 0,
				outline: 0,
				transition: `all ${m} linear`,
				appearance: "textfield",
				fontSize: "inherit",
				lineHeight: "inherit",
				...Ae(e.colorTextPlaceholder),
				"&[type=\"number\"]::-webkit-inner-spin-button, &[type=\"number\"]::-webkit-outer-spin-button": {
					margin: 0,
					appearance: "none"
				}
			},
			[`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: {
				width: e.handleWidth,
				opacity: 1
			},
			[`&-disabled ${t}-input`]: {
				cursor: "not-allowed",
				color: e.colorTextDisabled
			}
		} },
		{ [t]: {
			[`${t}-action`]: {
				...fe(),
				userSelect: "none",
				overflow: "hidden",
				fontWeight: "bold",
				lineHeight: 0,
				textAlign: "center",
				cursor: "pointer",
				transition: `all ${m} linear`,
				[`&:active:not(${t}-action-up-disabled):not(${t}-action-down-disabled)`]: { background: b },
				[`&:hover:not(${t}-action-up-disabled):not(${t}-action-down-disabled)`]: { color: h },
				[`&${t}-action-up-disabled, &${t}-action-down-disabled`]: {
					cursor: "not-allowed",
					color: p
				}
			},
			"&-mode-input": {
				overflow: "hidden",
				[`${t}-actions`]: {
					position: "absolute",
					insetBlockStart: 0,
					insetInlineEnd: 0,
					width: e.handleVisibleWidth,
					opacity: g,
					height: "100%",
					borderRadius: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					transition: `all ${m}`,
					overflow: "hidden",
					[`${t}-action`]: {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flex: "auto",
						height: "40%",
						marginInlineEnd: 0,
						fontSize: e.handleFontSize
					}
				},
				[`&:hover ${t}-actions, &-focused ${t}-actions`]: {
					width: e.handleWidth,
					opacity: 1
				},
				[`${t}-action`]: {
					color: f,
					height: "50%",
					borderInlineStart: k,
					[`&:hover:not(${t}-action-up-disabled):not(${t}-action-down-disabled)`]: { height: "60%" }
				},
				[`&${t}-disabled, &${t}-readonly`]: { [`${t}-actions`]: { display: "none" } }
			},
			[`&${t}-mode-spinner`]: {
				padding: 0,
				width: "auto",
				[`${t}-action`]: {
					flex: "none",
					paddingInline: j("input-padding-inline"),
					"&-up": { borderInlineStart: k },
					"&-down": { borderInlineEnd: k }
				},
				[`${t}-input`]: {
					textAlign: "center",
					paddingInline: j("input-padding-inline")
				}
			}
		} },
		{ [t]: {
			"&-lg": {
				[A("input-padding-block")]: S(u),
				[A("input-padding-inline")]: S(d),
				paddingBlock: 0,
				fontSize: o,
				lineHeight: D
			},
			"&-sm": {
				[A("input-padding-block")]: S(l),
				[A("input-padding-inline")]: S(c),
				paddingBlock: 0,
				fontSize: a,
				borderRadius: C
			}
		} },
		{ [t]: {
			[`${t}-prefix, ${t}-suffix`]: {
				display: "flex",
				flex: "none",
				alignItems: "center",
				alignSelf: "center",
				pointerEvents: "none"
			},
			[`${t}-prefix`]: { marginInlineEnd: x },
			[`${t}-suffix`]: {
				height: "100%",
				marginInlineStart: x,
				transition: `margin ${m}`
			},
			[`&:hover:not(${t}-without-controls)`]: { [`${t}-suffix`]: { marginInlineEnd: e.handleWidth } }
		} }
	];
}, Ft = (e) => {
	let { componentCls: t, antCls: n } = e;
	return { [`${t}-addon`]: { [`&:has(${n}-select)`]: {
		border: 0,
		padding: 0
	} } };
}, It = ge("InputNumber", (e) => {
	let t = j(e, De(e));
	return [
		Pt(t),
		Ft(t),
		U(t)
	];
}, Nt, {
	unitless: { handleOpacity: !0 },
	resetFont: !1
}), Lt = /* @__PURE__ */ e({ default: () => Bt }), Rt = /*#__PURE__*/ $.forwardRef((e, t) => {
	let i = $.useRef(null);
	$.useImperativeHandle(t, () => i.current);
	let { rootClassName: a, size: o, disabled: s, prefixCls: c, addonBefore: u, addonAfter: f, prefix: m, suffix: h, bordered: g, readOnly: _, status: v, controls: y = !0, variant: b, className: x, style: S, classNames: C, styles: w, mode: T, ...E } = e, { direction: D, className: O, style: k, styles: A, classNames: j } = H("inputNumber"), N = $.useContext(ue), P = s ?? N, I = $.useMemo(() => !y || P || _ ? !1 : y, [
		y,
		P,
		_
	]), { compactSize: L, compactItemClassnames: R } = M(c, D), z = T === "spinner" ? /*#__PURE__*/ $.createElement(r, null) : /*#__PURE__*/ $.createElement(l, null), B = T === "spinner" ? /*#__PURE__*/ $.createElement(d, null) : /*#__PURE__*/ $.createElement(n, null), te = typeof I == "boolean" ? I : void 0;
	ne(I) && (z = I.upIcon || z, B = I.downIcon || B);
	let { hasFeedback: re, isFormItemInput: V, feedbackIcon: ie } = $.useContext(Q), U = ce((e) => o ?? L ?? e), [ae, W] = be("inputNumber", b, g), G = re && /*#__PURE__*/ $.createElement($.Fragment, null, ie), K = {
		...e,
		size: U,
		disabled: P,
		controls: I
	}, [q, J] = ee([j, C], [A, w], { props: K });
	return /*#__PURE__*/ $.createElement(kt, {
		ref: i,
		mode: T,
		disabled: P,
		className: p(x, a, q.root, O, R, F(c, v, re), {
			[`${c}-${ae}`]: W,
			[`${c}-lg`]: U === "large",
			[`${c}-sm`]: U === "small",
			[`${c}-rtl`]: D === "rtl",
			[`${c}-in-form-item`]: V,
			[`${c}-without-controls`]: !I
		}),
		style: {
			...J.root,
			...k,
			...S
		},
		upHandler: z,
		downHandler: B,
		prefixCls: c,
		readOnly: _,
		controls: te,
		prefix: m,
		suffix: G || h,
		classNames: q,
		styles: J,
		...E
	});
}), zt = /*#__PURE__*/ $.forwardRef((e, t) => {
	let { addonBefore: n, addonAfter: r, prefixCls: i, className: a, status: o, rootClassName: s, ...c } = e, { getPrefixCls: l } = H("inputNumber"), u = l("input-number", i), { status: d } = $.useContext(Q), f = ae(d, o), m = K(u), [h, g] = It(u, m), _ = n || r, v = /*#__PURE__*/ $.createElement(Rt, {
		ref: t,
		...c,
		prefixCls: u,
		status: f,
		className: p(g, m, h, a),
		rootClassName: _ ? void 0 : s
	});
	if (_) {
		let t = (t) => t ? /*#__PURE__*/ $.createElement(Mt, {
			className: p(`${u}-addon`, g, h),
			variant: e.variant,
			disabled: e.disabled,
			status: f
		}, /*#__PURE__*/ $.createElement(le, { form: !0 }, t)) : null, i = t(n), a = t(r);
		return /*#__PURE__*/ $.createElement(re, { rootClassName: s }, i, v, a);
	}
	return v;
}), Bt = zt;
Bt._InternalPanelDoNotUseOrYouWillBeFired = (e) => /*#__PURE__*/ $.createElement(W, { theme: { components: { InputNumber: { handleVisible: !0 } } } }, /*#__PURE__*/ $.createElement(zt, { ...e }));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/color-picker/components/ColorSteppers.js
var Vt = ({ prefixCls: e, min: t = 0, max: n = 100, value: r, onChange: i, className: a, formatter: o }) => {
	let s = `${e}-steppers`, [c, l] = (0, $.useState)(0), u = Number.isNaN(r) ? c : r;
	return /*#__PURE__*/ $.createElement(Bt, {
		className: p(s, a),
		min: t,
		max: n,
		value: u,
		formatter: o,
		size: "small",
		onChange: (e) => {
			l(e || 0), i?.(e);
		}
	});
}, Ht = ({ prefixCls: e, value: t, onChange: n }) => {
	let r = `${e}-alpha-input`, [i, a] = (0, $.useState)(() => I(t || "#000")), o = t || i;
	return /*#__PURE__*/ $.createElement(Vt, {
		value: P(o),
		prefixCls: e,
		formatter: (e) => `${e}%`,
		className: r,
		onChange: (e) => {
			let t = o.toHsb();
			t.a = (e || 0) / 100;
			let r = I(t);
			a(r), n?.(r);
		}
	});
};
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/utils/commonUtils.js
function Ut(e) {
	return !!(e.addonBefore || e.addonAfter);
}
function Wt(e) {
	return !!(e.prefix || e.suffix || e.allowClear);
}
function Gt(e, t, n) {
	let r = t.cloneNode(!0), i = Object.create(e, {
		target: { value: r },
		currentTarget: { value: r }
	});
	return r.value = n, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (r.selectionStart = t.selectionStart, r.selectionEnd = t.selectionEnd), r.setSelectionRange = (...e) => {
		t.setSelectionRange(...e);
	}, i;
}
function Kt(e, t, n, r) {
	if (!n) return;
	let i = t;
	if (t.type === "click") {
		i = Gt(t, e, ""), n(i);
		return;
	}
	if (e.type !== "file" && r !== void 0) {
		i = Gt(t, e, r), n(i);
		return;
	}
	n(i);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/BaseInput.js
function qt() {
	return qt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, qt.apply(this, arguments);
}
var Jt = /*#__PURE__*/ $.forwardRef((e, t) => {
	let { inputElement: n, children: r, prefixCls: i, prefix: a, suffix: o, addonBefore: s, addonAfter: c, className: l, style: u, disabled: d, readOnly: f, focused: m, triggerFocus: h, allowClear: g, value: _, handleReset: v, hidden: y, classes: b, classNames: x, dataAttrs: S, styles: C, components: w, onClear: T } = e, E = r ?? n, D = w?.affixWrapper || "span", O = w?.groupWrapper || "span", k = w?.wrapper || "span", A = w?.groupAddon || "span", j = (0, $.useRef)(null), M = (e) => {
		j.current?.contains(e.target) && h?.();
	}, N = Wt(e), P = /*#__PURE__*/ (0, $.cloneElement)(E, {
		value: _,
		className: p(E.props?.className, !N && x?.variant) || null
	}), F = (0, $.useRef)(null);
	if ($.useImperativeHandle(t, () => ({ nativeElement: F.current || j.current })), N) {
		let e = null;
		if (g) {
			let t = !d && !f && _ && !(typeof g == "object" && g.disabled), n = `${i}-clear-icon`, r = typeof g == "object" && g?.clearIcon ? g.clearIcon : "✖";
			e = /*#__PURE__*/ $.createElement("button", {
				type: "button",
				onClick: (e) => {
					v?.(e), T?.();
				},
				onMouseDown: (e) => e.preventDefault(),
				className: p(n, {
					[`${n}-hidden`]: !t,
					[`${n}-has-suffix`]: !!o
				}, x?.clear),
				style: C?.clear
			}, r);
		}
		let t = `${i}-affix-wrapper`, n = p(t, {
			[`${i}-disabled`]: d,
			[`${t}-disabled`]: d,
			[`${t}-focused`]: m,
			[`${t}-readonly`]: f,
			[`${t}-input-with-clear-btn`]: o && g && _
		}, b?.affixWrapper, x?.affixWrapper, x?.variant), r = (o || g) && /*#__PURE__*/ $.createElement("span", {
			className: p(`${i}-suffix`, x?.suffix),
			style: C?.suffix
		}, e, o);
		P = /*#__PURE__*/ $.createElement(D, qt({
			className: n,
			style: C?.affixWrapper,
			onClick: M
		}, S?.affixWrapper, { ref: j }), a && /*#__PURE__*/ $.createElement("span", {
			className: p(`${i}-prefix`, x?.prefix),
			style: C?.prefix
		}, a), P, r);
	}
	if (Ut(e)) {
		let e = `${i}-group`, t = `${e}-addon`, n = `${e}-wrapper`, r = p(`${i}-wrapper`, e, b?.wrapper, x?.wrapper), a = p(n, { [`${n}-disabled`]: d }, b?.group, x?.groupWrapper);
		P = /*#__PURE__*/ $.createElement(O, {
			className: a,
			ref: F
		}, /*#__PURE__*/ $.createElement(k, { className: r }, s && /*#__PURE__*/ $.createElement(A, { className: t }, s), P, c && /*#__PURE__*/ $.createElement(A, { className: t }, c)));
	}
	return /*#__PURE__*/ $.cloneElement(P, {
		className: p(P.props?.className, l) || null,
		style: {
			...P.props?.style,
			...u
		},
		hidden: y
	});
});
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/hooks/useCount.js
function Yt(e, t) {
	return $.useMemo(() => {
		let n = {};
		t && (n.show = typeof t == "object" && t.formatter ? t.formatter : !!t), n = {
			...n,
			...e
		};
		let { show: r, ...i } = n;
		return {
			...i,
			show: !!r,
			showFormatter: typeof r == "function" ? r : void 0,
			strategy: i.strategy || ((e) => e.length)
		};
	}, [e, t]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/hooks/useCountDisplay.js
function Xt({ countConfig: e, value: t, maxLength: n }) {
	return $.useMemo(() => {
		let r = e.max ?? n, i = e.strategy(t), a = !!r && i > r, o = Number(r) > 0;
		return {
			mergedMax: r,
			isOutOfRange: a,
			dataCount: e.show ? e.showFormatter ? e.showFormatter({
				value: t,
				count: i,
				maxLength: r
			}) : `${i}${o ? ` / ${r}` : ""}` : void 0
		};
	}, [
		e,
		n,
		t
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/hooks/useCountExceed.js
function Zt({ countConfig: e, getTarget: t }) {
	let [n, r] = $.useState(null), i = $.useRef(t);
	return $.useEffect(() => {
		i.current = t;
	}, [t]), $.useEffect(() => {
		n && (i.current()?.setSelectionRange(...n), r(null));
	}, [n]), $.useCallback((t, n) => {
		let a = t;
		return !n && e.exceedFormatter && e.max && e.strategy(t) > e.max && (a = e.exceedFormatter(t, { max: e.max }), t !== a && r([i.current()?.selectionStart || 0, i.current()?.selectionEnd || 0])), a;
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/hooks/useMergedValue.js
function Qt(e, t) {
	let [n, r] = E(e, t);
	return {
		value: n,
		setValue: r,
		formatValue: n == null ? "" : String(n)
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/Input.js
function $t() {
	return $t = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, $t.apply(this, arguments);
}
var en = /*#__PURE__*/ (0, $.forwardRef)((e, t) => {
	let { autoComplete: n, onChange: r, onFocus: i, onBlur: a, onPressEnter: o, onKeyDown: s, onKeyUp: c, prefixCls: l = "rc-input", disabled: u, htmlSize: d, className: f, maxLength: m, suffix: g, showCount: v, count: y, type: b = "text", classes: x, classNames: S, styles: C, onCompositionStart: w, onCompositionEnd: T, ...E } = e, [D, O] = (0, $.useState)(!1), k = (0, $.useRef)(!1), A = (0, $.useRef)(!1), j = (0, $.useRef)(null), M = (0, $.useRef)(null), N = (e) => {
		j.current && h(j.current, e);
	}, { setValue: P, formatValue: F } = Qt(e.defaultValue, e.value), I = Yt(y, v), { isOutOfRange: ee, dataCount: L } = Xt({
		countConfig: I,
		value: F,
		maxLength: m
	}), R = Zt({
		countConfig: I,
		getTarget: () => j.current
	});
	(0, $.useImperativeHandle)(t, () => ({
		focus: N,
		blur: () => {
			j.current?.blur();
		},
		setSelectionRange: (e, t, n) => {
			j.current?.setSelectionRange(e, t, n);
		},
		select: () => {
			j.current?.select();
		},
		input: j.current,
		nativeElement: M.current?.nativeElement || j.current
	})), (0, $.useEffect)(() => {
		A.current &&= !1, O((e) => e && u ? !1 : e);
	}, [u]);
	let z = (e, t, n) => {
		let i = R(t, k.current);
		n.source === "compositionEnd" && t === i || (P(i), j.current && Kt(j.current, e, r, i));
	}, B = (e) => {
		z(e, e.target.value, { source: "change" });
	}, te = (e) => {
		k.current = !1, z(e, e.currentTarget.value, { source: "compositionEnd" }), T?.(e);
	}, ne = (e) => {
		o && e.key === "Enter" && !A.current && !e.nativeEvent.isComposing && (A.current = !0, o(e)), s?.(e);
	}, re = (e) => {
		e.key === "Enter" && (A.current = !1), c?.(e);
	}, V = (e) => {
		O(!0), i?.(e);
	}, ie = (e) => {
		A.current &&= !1, O(!1), a?.(e);
	}, H = (e) => {
		P(""), N(), j.current && Kt(j.current, e, r);
	}, U = ee && `${l}-out-of-range`;
	return /*#__PURE__*/ $.createElement(Jt, $t({}, E, {
		prefixCls: l,
		className: p(f, U),
		handleReset: H,
		value: F,
		focused: D,
		triggerFocus: N,
		suffix: g || I.show ? /*#__PURE__*/ $.createElement($.Fragment, null, I.show && /*#__PURE__*/ $.createElement("span", {
			className: p(`${l}-show-count-suffix`, { [`${l}-show-count-has-suffix`]: !!g }, S?.count),
			style: { ...C?.count }
		}, L), g) : null,
		disabled: u,
		classes: x,
		classNames: S,
		styles: C,
		ref: M
	}), (() => {
		let t = _(e, [
			"prefixCls",
			"onPressEnter",
			"addonBefore",
			"addonAfter",
			"prefix",
			"suffix",
			"allowClear",
			"defaultValue",
			"showCount",
			"count",
			"classes",
			"htmlSize",
			"styles",
			"classNames",
			"onClear"
		]);
		return /*#__PURE__*/ $.createElement("input", $t({ autoComplete: n }, t, {
			onChange: B,
			onFocus: V,
			onBlur: ie,
			onKeyDown: ne,
			onKeyUp: re,
			className: p(l, { [`${l}-disabled`]: u }, S?.input),
			style: C?.input,
			ref: j,
			size: d,
			type: b,
			onCompositionStart: (e) => {
				k.current = !0, w?.(e);
			},
			onCompositionEnd: te
		}));
	})());
}), tn = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n", nn = [
	"letter-spacing",
	"line-height",
	"padding-top",
	"padding-bottom",
	"font-family",
	"font-weight",
	"font-size",
	"font-variant",
	"text-rendering",
	"text-transform",
	"width",
	"text-indent",
	"padding-left",
	"padding-right",
	"border-width",
	"box-sizing",
	"word-break",
	"white-space"
], rn = {}, an;
function on(e, t = !1) {
	let n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
	if (t && rn[n]) return rn[n];
	let r = window.getComputedStyle(e), i = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), a = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), o = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), s = {
		sizingStyle: nn.map((e) => `${e}:${r.getPropertyValue(e)}`).join(";"),
		paddingSize: a,
		borderSize: o,
		boxSizing: i
	};
	return t && n && (rn[n] = s), s;
}
function sn(e, t = !1, n = null, r = null) {
	an || (an = document.createElement("textarea"), an.setAttribute("tab-index", "-1"), an.setAttribute("aria-hidden", "true"), an.setAttribute("name", "hiddenTextarea"), document.body.appendChild(an)), e.getAttribute("wrap") ? an.setAttribute("wrap", e.getAttribute("wrap")) : an.removeAttribute("wrap");
	let { paddingSize: i, borderSize: a, boxSizing: o, sizingStyle: s } = on(e, t);
	an.setAttribute("style", `${s};${tn}`), an.value = e.value || e.placeholder || "";
	let c, l, u, d = an.scrollHeight;
	if (o === "border-box" ? d += a : o === "content-box" && (d -= i), n !== null || r !== null) {
		an.value = " ";
		let e = an.scrollHeight - i;
		n !== null && (c = e * n, o === "border-box" && (c = c + i + a), d = Math.max(c, d)), r !== null && (l = e * r, o === "border-box" && (l = l + i + a), u = d > l ? void 0 : "hidden", d = Math.min(l, d));
	}
	let f = {
		height: d,
		overflowY: u,
		resize: "none"
	};
	return c && (f.minHeight = c), l && (f.maxHeight = l), f;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/ResizableTextArea.js
function cn() {
	return cn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, cn.apply(this, arguments);
}
var ln = 0, un = 1, dn = 2, fn = /*#__PURE__*/ $.forwardRef((e, t) => {
	let { prefixCls: n, defaultValue: r, value: a, autoSize: o, onResize: s, className: c, style: l, disabled: u, onChange: d, onInternalAutoSize: f, ...m } = e, [h, g] = E(r, a), _ = h ?? "", v = (e) => {
		g(e.target.value), d?.(e);
	}, y = $.useRef(null);
	$.useImperativeHandle(t, () => ({ textArea: y.current }));
	let [b, x] = $.useMemo(() => o && typeof o == "object" ? [o.minRows, o.maxRows] : [], [o]), S = !!o, [w, T] = $.useState(dn), [D, O] = $.useState(), k = () => {
		T(ln);
	};
	C(() => {
		S && k();
	}, [
		a,
		b,
		x,
		S
	]), C(() => {
		if (w === ln) T(un);
		else if (w === un) {
			let e = sn(y.current, !1, b, x);
			T(dn), O(e);
		}
	}, [w]);
	let A = $.useRef(void 0), j = () => {
		A.current !== void 0 && i.cancel(A.current);
	}, M = (e) => {
		w === dn && (s?.(e), o && (j(), A.current = i(() => {
			k();
		})));
	};
	$.useEffect(() => j, []);
	let N = S ? D : null, P = {
		...l,
		...N
	};
	return (w === ln || w === un) && (P.overflowY = "hidden", P.overflowX = "hidden"), /*#__PURE__*/ $.createElement(ve, {
		onResize: M,
		disabled: !(o || s)
	}, /*#__PURE__*/ $.createElement("textarea", cn({}, m, {
		ref: y,
		style: P,
		className: p(n, c, { [`${n}-disabled`]: u }),
		disabled: u,
		value: _,
		onChange: v
	})));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+input@1.3.1_r_6c401e8817d81830183337bec7ddd219/node_modules/@rc-component/input/es/TextArea.js
function pn() {
	return pn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, pn.apply(this, arguments);
}
var mn = /*#__PURE__*/ $.forwardRef(({ defaultValue: e, value: t, onFocus: n, onBlur: r, onChange: i, allowClear: a, maxLength: o, onCompositionStart: s, onCompositionEnd: c, suffix: l, prefixCls: u = "rc-textarea", showCount: d, count: f, className: m, style: h, disabled: g, hidden: _, classNames: v, styles: y, onResize: b, onClear: x, onPressEnter: S, readOnly: C, autoSize: w, onKeyDown: T, ...E }, D) => {
	let [O, k] = $.useState(!1), A = $.useRef(!1), [j, M] = $.useState(null), N = (0, $.useRef)(null), P = (0, $.useRef)(null), F = () => P.current?.textArea || null, { setValue: I, formatValue: ee } = Qt(e, t), L = Yt(f, d), { isOutOfRange: R, dataCount: z } = Xt({
		countConfig: L,
		value: ee,
		maxLength: o
	}), B = Zt({
		countConfig: L,
		getTarget: () => P.current?.textArea || null
	}), te = () => {
		F()?.focus();
	};
	(0, $.useImperativeHandle)(D, () => ({
		resizableTextArea: P.current,
		focus: te,
		blur: () => {
			F()?.blur();
		},
		nativeElement: N.current?.nativeElement || F()
	})), (0, $.useEffect)(() => {
		k((e) => !g && e);
	}, [g]);
	let ne = (e, t) => {
		let n = B(t, A.current);
		I(n), Kt(e.currentTarget, e, i, n);
	}, re = (e) => {
		A.current = !0, s?.(e);
	}, V = (e) => {
		A.current = !1, ne(e, e.currentTarget.value), c?.(e);
	}, ie = (e) => {
		ne(e, e.target.value);
	}, H = (e) => {
		e.key === "Enter" && S && !e.nativeEvent.isComposing && S(e), T?.(e);
	}, U = (e) => {
		k(!0), n?.(e);
	}, ae = (e) => {
		k(!1), r?.(e);
	}, W = (e) => {
		I(""), te();
		let t = F();
		t && Kt(t, e, i);
	}, G = l;
	L.show && (G = /*#__PURE__*/ $.createElement($.Fragment, null, G, /*#__PURE__*/ $.createElement("span", {
		className: p(`${u}-data-count`, v?.count),
		style: y?.count
	}, z)));
	let K = (e) => {
		b?.(e), F()?.style.height && M(!0);
	}, q = !w && !d && !a;
	return /*#__PURE__*/ $.createElement(Jt, {
		ref: N,
		value: ee,
		allowClear: a,
		handleReset: W,
		suffix: G,
		prefixCls: u,
		classNames: {
			...v,
			affixWrapper: p(v?.affixWrapper, {
				[`${u}-show-count`]: d,
				[`${u}-textarea-allow-clear`]: a
			})
		},
		disabled: g,
		focused: O,
		className: p(m, R && `${u}-out-of-range`),
		style: {
			...h,
			...j && !q ? { height: "auto" } : {}
		},
		dataAttrs: typeof z == "string" ? { affixWrapper: { "data-count": z } } : void 0,
		styles: y,
		hidden: _,
		readOnly: C,
		onClear: x
	}, /*#__PURE__*/ $.createElement(fn, pn({}, E, {
		autoSize: w,
		maxLength: o,
		onKeyDown: H,
		onChange: ie,
		onFocus: U,
		onBlur: ae,
		onCompositionStart: re,
		onCompositionEnd: V,
		className: p(v?.textarea),
		style: {
			resize: h?.resize,
			...y?.textarea
		},
		disabled: g,
		prefixCls: u,
		onResize: K,
		ref: P,
		readOnly: C
	})));
}), hn = en;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js
function gn(e, t) {
	let n = (0, $.useRef)([]), r = () => {
		n.current.push(setTimeout(() => {
			e.current?.input && e.current?.input.getAttribute("type") === "password" && e.current?.input.hasAttribute("value") && e.current?.input.removeAttribute("value");
		}));
	};
	return (0, $.useEffect)(() => (t && r(), () => n.current.forEach((e) => {
		e && clearTimeout(e);
	})), []), r;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/input/utils.js
function _n(e) {
	return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/input/Input.js
var vn = /*#__PURE__*/ (0, $.forwardRef)((e, t) => {
	let { prefixCls: n, bordered: r = !0, status: i, size: a, disabled: o, onBlur: s, onFocus: c, suffix: l, allowClear: u, addonAfter: d, addonBefore: f, className: m, style: h, styles: g, rootClassName: _, onChange: v, classNames: y, variant: b, ...x } = e, { getPrefixCls: S, direction: C, allowClear: w, autoComplete: E, className: D, style: O, classNames: k, styles: A } = H("input"), j = S("input", n), N = (0, $.useRef)(null), P = K(j), [I, L] = Te(j, _);
	Ne(j, P);
	let { compactSize: R, compactItemClassnames: z } = M(j, C), B = ce((e) => a ?? R ?? e), te = $.useContext(ue), ne = o ?? te, re = {
		...e,
		size: B,
		disabled: ne
	}, [V, U] = ee([k, y], [A, g], { props: re }), { status: W, hasFeedback: G, feedbackIcon: q } = (0, $.useContext)(Q), J = ae(W, i);
	(0, $.useRef)(_n(e) || !!G);
	let oe = gn(N, !0), se = (e) => {
		oe(), s?.(e);
	}, Y = (e) => {
		oe(), c?.(e);
	}, X = (e) => {
		oe(), v?.(e);
	}, Z = (G || l) && /*#__PURE__*/ $.createElement($.Fragment, null, l, G && q), de = ie({
		allowClear: u,
		contextAllowClear: w,
		componentName: "Input"
	}), [fe, pe] = be("input", b, r);
	return /*#__PURE__*/ $.createElement(hn, {
		ref: T(t, N),
		prefixCls: j,
		autoComplete: E,
		...x,
		disabled: ne,
		onBlur: se,
		onFocus: Y,
		style: {
			...U.root,
			...O,
			...h
		},
		styles: U,
		suffix: Z,
		allowClear: de,
		className: p(m, _, L, P, z, D, V.root),
		onChange: X,
		addonBefore: f && /*#__PURE__*/ $.createElement(le, {
			form: !0,
			space: !0
		}, f),
		addonAfter: d && /*#__PURE__*/ $.createElement(le, {
			form: !0,
			space: !0
		}, d),
		classNames: {
			...V,
			input: p({
				[`${j}-sm`]: B === "small",
				[`${j}-lg`]: B === "large",
				[`${j}-rtl`]: C === "rtl"
			}, V.input, I),
			variant: p({ [`${j}-${fe}`]: pe }, F(j, J)),
			affixWrapper: p({
				[`${j}-affix-wrapper-sm`]: B === "small",
				[`${j}-affix-wrapper-lg`]: B === "large",
				[`${j}-affix-wrapper-rtl`]: C === "rtl"
			}, I),
			wrapper: p({ [`${j}-group-rtl`]: C === "rtl" }, I),
			groupWrapper: p({
				[`${j}-group-wrapper-sm`]: B === "small",
				[`${j}-group-wrapper-lg`]: B === "large",
				[`${j}-group-wrapper-rtl`]: C === "rtl",
				[`${j}-group-wrapper-${fe}`]: pe
			}, F(`${j}-group-wrapper`, J, G), I)
		}
	});
}), yn = /(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i, bn = (e) => yn.test(`#${e}`), xn = ({ prefixCls: e, value: t, onChange: n }) => {
	let r = `${e}-hex-input`, [i, a] = (0, $.useState)(() => t ? L(t.toHexString()) : void 0);
	return (0, $.useEffect)(() => {
		t && a(L(t.toHexString()));
	}, [t]), /*#__PURE__*/ $.createElement(vn, {
		className: r,
		value: i,
		prefix: "#",
		onChange: (e) => {
			let t = e.target.value;
			a(L(t)), bn(L(t, !0)) && n?.(I(t));
		},
		size: "small"
	});
}, Sn = ({ prefixCls: e, value: t, onChange: n }) => {
	let r = `${e}-hsb-input`, [i, a] = (0, $.useState)(() => I(t || "#000")), o = t || i, s = (e, t) => {
		let r = o.toHsb();
		r[t] = t === "h" ? e : (e || 0) / 100;
		let i = I(r);
		a(i), n?.(i);
	};
	return /*#__PURE__*/ $.createElement("div", { className: r }, /*#__PURE__*/ $.createElement(Vt, {
		max: 360,
		min: 0,
		value: Number(o.toHsb().h),
		prefixCls: e,
		className: r,
		formatter: (e) => de(e || 0).toString(),
		onChange: (e) => s(Number(e), "h")
	}), /*#__PURE__*/ $.createElement(Vt, {
		max: 100,
		min: 0,
		value: Number(o.toHsb().s) * 100,
		prefixCls: e,
		className: r,
		formatter: (e) => `${de(e || 0)}%`,
		onChange: (e) => s(Number(e), "s")
	}), /*#__PURE__*/ $.createElement(Vt, {
		max: 100,
		min: 0,
		value: Number(o.toHsb().b) * 100,
		prefixCls: e,
		className: r,
		formatter: (e) => `${de(e || 0)}%`,
		onChange: (e) => s(Number(e), "b")
	}));
}, Cn = ({ prefixCls: e, value: t, onChange: n }) => {
	let r = `${e}-rgb-input`, [i, a] = (0, $.useState)(() => I(t || "#000")), o = t || i, s = (e, t) => {
		let r = o.toRgb();
		r[t] = e || 0;
		let i = I(r);
		a(i), n?.(i);
	};
	return /*#__PURE__*/ $.createElement("div", { className: r }, /*#__PURE__*/ $.createElement(Vt, {
		max: 255,
		min: 0,
		value: Number(o.toRgb().r),
		prefixCls: e,
		className: r,
		onChange: (e) => s(Number(e), "r")
	}), /*#__PURE__*/ $.createElement(Vt, {
		max: 255,
		min: 0,
		value: Number(o.toRgb().g),
		prefixCls: e,
		className: r,
		onChange: (e) => s(Number(e), "g")
	}), /*#__PURE__*/ $.createElement(Vt, {
		max: 255,
		min: 0,
		value: Number(o.toRgb().b),
		prefixCls: e,
		className: r,
		onChange: (e) => s(Number(e), "b")
	}));
}, wn = [
	"hex",
	"hsb",
	"rgb"
].map((e) => ({
	value: e,
	label: e.toUpperCase()
})), Tn = (e) => {
	let { prefixCls: t, format: n, value: r, disabledAlpha: i, onFormatChange: a, onChange: o, disabledFormat: s } = e, [c, l] = E("hex", n), u = `${t}-input`, d = (e) => {
		l(e), a?.(e);
	}, f = (0, $.useMemo)(() => {
		let e = {
			value: r,
			prefixCls: t,
			onChange: o
		};
		switch (c) {
			case "hsb": return /*#__PURE__*/ $.createElement(Sn, { ...e });
			case "rgb": return /*#__PURE__*/ $.createElement(Cn, { ...e });
			default: return /*#__PURE__*/ $.createElement(xn, { ...e });
		}
	}, [
		c,
		t,
		r,
		o
	]);
	return /*#__PURE__*/ $.createElement("div", { className: `${u}-container` }, !s && /*#__PURE__*/ $.createElement(xe, {
		value: c,
		variant: "borderless",
		getPopupContainer: (e) => e,
		popupMatchSelectWidth: 68,
		placement: "bottomRight",
		onChange: d,
		className: `${t}-format-select`,
		size: "small",
		options: wn
	}), /*#__PURE__*/ $.createElement("div", { className: u }, f), !i && /*#__PURE__*/ $.createElement(Ht, {
		prefixCls: t,
		value: r,
		onChange: o
	}));
}, En = /* @__PURE__ */ t(m());
function Dn(e, t, n) {
	return (e - t) / (n - t);
}
function On(e, t, n, r) {
	let i = Dn(t, n, r), a = {};
	switch (e) {
		case "rtl":
			a.right = `${i * 100}%`, a.transform = "translateX(50%)";
			break;
		case "btt":
			a.bottom = `${i * 100}%`, a.transform = "translateY(50%)";
			break;
		case "ttb":
			a.top = `${i * 100}%`, a.transform = "translateY(-50%)";
			break;
		default:
			a.left = `${i * 100}%`, a.transform = "translateX(-50%)";
			break;
	}
	return a;
}
function kn(e, t) {
	return Array.isArray(e) ? e[t] : e;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+slider@1.0.1__98bbe8bd1766e13d4163bf50daa0c491/node_modules/@rc-component/slider/es/context.js
var An = /*#__PURE__*/ $.createContext({
	min: 0,
	max: 0,
	direction: "ltr",
	step: 1,
	includedStart: 0,
	includedEnd: 0,
	tabIndex: 0,
	keyboard: !0,
	styles: {},
	classNames: {}
}), jn = /*#__PURE__*/ $.createContext({});
//#endregion
//#region node_modules/.pnpm/@rc-component+slider@1.0.1__98bbe8bd1766e13d4163bf50daa0c491/node_modules/@rc-component/slider/es/Handles/Handle.js
function Mn() {
	return Mn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Mn.apply(this, arguments);
}
var Nn = /*#__PURE__*/ $.forwardRef((e, t) => {
	let { prefixCls: n, value: r, valueIndex: i, onStartMove: a, onDelete: o, style: s, render: c, dragging: l, draggingDelete: d, onOffsetChange: f, onChangeComplete: m, onFocus: h, onMouseEnter: g, ..._ } = e, { min: v, max: y, direction: b, disabled: x, keyboard: S, range: C, tabIndex: w, ariaLabelForHandle: T, ariaLabelledByForHandle: E, ariaRequired: D, ariaValueTextFormatterForHandle: O, styles: k, classNames: A } = $.useContext(An), j = `${n}-handle`, M = (e) => {
		x || a(e, i);
	}, N = (e) => {
		h?.(e, i);
	}, P = (e) => {
		g(e, i);
	}, F = (e) => {
		if (!x && S) {
			let t = null;
			switch (e.which || e.keyCode) {
				case u.LEFT:
					t = b === "ltr" || b === "btt" ? -1 : 1;
					break;
				case u.RIGHT:
					t = b === "ltr" || b === "btt" ? 1 : -1;
					break;
				case u.UP:
					t = b === "ttb" ? -1 : 1;
					break;
				case u.DOWN:
					t = b === "ttb" ? 1 : -1;
					break;
				case u.HOME:
					t = "min";
					break;
				case u.END:
					t = "max";
					break;
				case u.PAGE_UP:
					t = 2;
					break;
				case u.PAGE_DOWN:
					t = -2;
					break;
				case u.BACKSPACE:
				case u.DELETE:
					o?.(i);
					break;
			}
			t !== null && (e.preventDefault(), f(t, i));
		}
	}, I = (e) => {
		switch (e.which || e.keyCode) {
			case u.LEFT:
			case u.RIGHT:
			case u.UP:
			case u.DOWN:
			case u.HOME:
			case u.END:
			case u.PAGE_UP:
			case u.PAGE_DOWN:
				m?.();
				break;
		}
	}, ee = On(b, r, v, y), L = {};
	i !== null && (L = {
		tabIndex: x ? null : kn(w, i),
		role: "slider",
		"aria-valuemin": v,
		"aria-valuemax": y,
		"aria-valuenow": r,
		"aria-disabled": x,
		"aria-label": kn(T, i),
		"aria-labelledby": kn(E, i),
		"aria-required": kn(D, i),
		"aria-valuetext": kn(O, i)?.(r),
		"aria-orientation": b === "ltr" || b === "rtl" ? "horizontal" : "vertical",
		onMouseDown: M,
		onTouchStart: M,
		onFocus: N,
		onMouseEnter: P,
		onKeyDown: F,
		onKeyUp: I
	});
	let R = /*#__PURE__*/ $.createElement("div", Mn({
		ref: t,
		className: p(j, {
			[`${j}-${i + 1}`]: i !== null && C,
			[`${j}-dragging`]: l,
			[`${j}-dragging-delete`]: d
		}, A.handle),
		style: {
			...ee,
			...s,
			...k.handle
		}
	}, L, _));
	return c && (R = c(R, {
		index: i,
		prefixCls: n,
		value: r,
		dragging: l,
		draggingDelete: d
	})), R;
});
//#endregion
//#region node_modules/.pnpm/@rc-component+slider@1.0.1__98bbe8bd1766e13d4163bf50daa0c491/node_modules/@rc-component/slider/es/Handles/index.js
function Pn() {
	return Pn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Pn.apply(this, arguments);
}
var Fn = /*#__PURE__*/ $.forwardRef((e, t) => {
	let { prefixCls: n, style: r, onStartMove: i, onOffsetChange: a, values: o, handleRender: s, activeHandleRender: c, draggingIndex: l, draggingDelete: u, onFocus: d, ...f } = e, p = $.useRef({}), [m, h] = $.useState(!1), [g, _] = $.useState(-1), v = (e) => {
		_(e), h(!0);
	}, y = (e, t) => {
		v(t), d?.(e);
	}, b = (e, t) => {
		v(t);
	};
	$.useImperativeHandle(t, () => ({
		focus: (e) => {
			p.current[e]?.focus();
		},
		hideHelp: () => {
			(0, En.flushSync)(() => {
				h(!1);
			});
		}
	}));
	let x = {
		prefixCls: n,
		onStartMove: i,
		onOffsetChange: a,
		render: s,
		onFocus: y,
		onMouseEnter: b,
		...f
	};
	return /*#__PURE__*/ $.createElement($.Fragment, null, o.map((e, t) => {
		let n = l === t;
		return /*#__PURE__*/ $.createElement(Nn, Pn({
			ref: (e) => {
				e ? p.current[t] = e : delete p.current[t];
			},
			dragging: n,
			draggingDelete: n && u,
			style: kn(r, t),
			key: t,
			value: e,
			valueIndex: t
		}, x));
	}), c && m && /*#__PURE__*/ $.createElement(Nn, Pn({ key: "a11y" }, x, {
		value: o[g],
		valueIndex: null,
		dragging: l !== -1,
		draggingDelete: u,
		render: c,
		style: { pointerEvents: "none" },
		tabIndex: null,
		"aria-hidden": !0
	})));
}), In = (e) => {
	let { prefixCls: t, style: n, children: r, value: i, onClick: a } = e, { min: o, max: s, direction: c, includedStart: l, includedEnd: u, included: d } = $.useContext(An), f = `${t}-text`, m = On(c, i, o, s);
	return /*#__PURE__*/ $.createElement("span", {
		className: p(f, { [`${f}-active`]: d && l <= i && i <= u }),
		style: {
			...m,
			...n
		},
		onMouseDown: (e) => {
			e.stopPropagation();
		},
		onClick: () => {
			a(i);
		}
	}, r);
}, Ln = (e) => {
	let { prefixCls: t, marks: n, onClick: r } = e, i = `${t}-mark`;
	return n.length ? /*#__PURE__*/ $.createElement("div", { className: i }, n.map(({ value: e, style: t, label: n }) => /*#__PURE__*/ $.createElement(In, {
		key: e,
		prefixCls: i,
		style: t,
		value: e,
		onClick: r
	}, n))) : null;
}, Rn = (e) => {
	let { prefixCls: t, value: n, style: r, activeStyle: i } = e, { min: a, max: o, direction: s, included: c, includedStart: l, includedEnd: u } = $.useContext(An), d = `${t}-dot`, f = c && l <= n && n <= u, m = {
		...On(s, n, a, o),
		...typeof r == "function" ? r(n) : r
	};
	return f && (m = {
		...m,
		...typeof i == "function" ? i(n) : i
	}), /*#__PURE__*/ $.createElement("span", {
		className: p(d, { [`${d}-active`]: f }),
		style: m
	});
}, zn = (e) => {
	let { prefixCls: t, marks: n, dots: r, style: i, activeStyle: a } = e, { min: o, max: s, step: c } = $.useContext(An), l = $.useMemo(() => {
		let e = /* @__PURE__ */ new Set();
		if (n.forEach((t) => {
			e.add(t.value);
		}), r && c !== null) {
			let t = o;
			for (; t <= s;) e.add(t), t += c;
		}
		return Array.from(e);
	}, [
		o,
		s,
		c,
		r,
		n
	]);
	return /*#__PURE__*/ $.createElement("div", { className: `${t}-step` }, l.map((e) => /*#__PURE__*/ $.createElement(Rn, {
		prefixCls: t,
		key: e,
		value: e,
		style: i,
		activeStyle: a
	})));
}, Bn = (e) => {
	let { prefixCls: t, style: n, start: r, end: i, index: a, onStartMove: o, replaceCls: s } = e, { direction: c, min: l, max: u, disabled: d, range: f, classNames: m } = $.useContext(An), h = `${t}-track`, g = Dn(r, l, u), _ = Dn(i, l, u), v = (e) => {
		!d && o && o(e, -1);
	}, y = {};
	switch (c) {
		case "rtl":
			y.right = `${g * 100}%`, y.width = `${_ * 100 - g * 100}%`;
			break;
		case "btt":
			y.bottom = `${g * 100}%`, y.height = `${_ * 100 - g * 100}%`;
			break;
		case "ttb":
			y.top = `${g * 100}%`, y.height = `${_ * 100 - g * 100}%`;
			break;
		default: y.left = `${g * 100}%`, y.width = `${_ * 100 - g * 100}%`;
	}
	let b = s || p(h, {
		[`${h}-${a + 1}`]: a !== null && f,
		[`${t}-track-draggable`]: o
	}, m.track);
	return /*#__PURE__*/ $.createElement("div", {
		className: b,
		style: {
			...y,
			...n
		},
		onMouseDown: v,
		onTouchStart: v
	});
}, Vn = (e) => {
	let { prefixCls: t, style: n, values: r, startPoint: i, onStartMove: a } = e, { included: o, range: s, min: c, styles: l, classNames: u } = $.useContext(An), d = $.useMemo(() => {
		if (!s) {
			if (r.length === 0) return [];
			let e = i ?? c, t = r[0];
			return [{
				start: Math.min(e, t),
				end: Math.max(e, t)
			}];
		}
		let e = [];
		for (let t = 0; t < r.length - 1; t += 1) e.push({
			start: r[t],
			end: r[t + 1]
		});
		return e;
	}, [
		r,
		s,
		i,
		c
	]);
	if (!o) return null;
	let f = d?.length && (u.tracks || l.tracks) ? /*#__PURE__*/ $.createElement(Bn, {
		index: null,
		prefixCls: t,
		start: d[0].start,
		end: d[d.length - 1].end,
		replaceCls: p(u.tracks, `${t}-tracks`),
		style: l.tracks
	}) : null;
	return /*#__PURE__*/ $.createElement($.Fragment, null, f, d.map(({ start: e, end: r }, i) => /*#__PURE__*/ $.createElement(Bn, {
		index: i,
		prefixCls: t,
		style: {
			...kn(n, i),
			...l.track
		},
		start: e,
		end: r,
		key: i,
		onStartMove: a
	})));
}, Hn = 130;
function Un(e) {
	let t = "targetTouches" in e ? e.targetTouches[0] : e;
	return {
		pageX: t.pageX,
		pageY: t.pageY
	};
}
function Wn(e, t, n, r, i, a, o, s, c, l, u) {
	let [d, f] = $.useState(null), [p, m] = $.useState(-1), [h, g] = $.useState(!1), [_, v] = $.useState(n), [y, x] = $.useState(n), S = $.useRef(null), w = $.useRef(null), T = $.useRef(null), { onDragStart: E, onDragChange: D } = $.useContext(jn);
	C(() => {
		p === -1 && v(n);
	}, [n, p]), $.useEffect(() => () => {
		document.removeEventListener("mousemove", S.current), document.removeEventListener("mouseup", w.current), T.current && (T.current.removeEventListener("touchmove", S.current), T.current.removeEventListener("touchend", w.current));
	}, []);
	let O = (e, t, n) => {
		t !== void 0 && f(t), v(e);
		let r = e;
		n && (r = e.filter((e, t) => t !== p)), o(r), D && D({
			rawValues: e,
			deleteIndex: n ? p : -1,
			draggingIndex: p,
			draggingValue: t
		});
	}, k = b((e, t, n) => {
		if (e === -1) {
			let e = y[0], n = y[y.length - 1], o = r - e, s = i - n, c = t * (i - r);
			c = Math.max(c, o), c = Math.min(c, s), c = a(e + c) - e, O(y.map((e) => e + c));
		} else {
			let a = (i - r) * t, o = [..._];
			o[e] = y[e];
			let s = c(o, a, e, "dist");
			O(s.values, s.value, n);
		}
	});
	return [
		p,
		d,
		h,
		$.useMemo(() => {
			let e = [...n].sort((e, t) => e - t), t = [..._].sort((e, t) => e - t), r = {};
			t.forEach((e) => {
				r[e] = (r[e] || 0) + 1;
			}), e.forEach((e) => {
				r[e] = (r[e] || 0) - 1;
			});
			let i = +!!l;
			return Object.values(r).reduce((e, t) => e + Math.abs(t), 0) <= i ? _ : n;
		}, [
			n,
			_,
			l
		]),
		(r, i, a) => {
			r.stopPropagation();
			let o = a || n, c = o[i];
			m(i), f(c), x(o), v(o), g(!1);
			let { pageX: d, pageY: p } = Un(r), h = !1;
			E && E({
				rawValues: o,
				draggingIndex: i,
				draggingValue: c
			});
			let y = (n) => {
				n.preventDefault();
				let { pageX: r, pageY: a } = Un(n), o = r - d, s = a - p, { width: c, height: f } = e.current.getBoundingClientRect(), m, v;
				switch (t) {
					case "btt":
						m = -s / f, v = o;
						break;
					case "ttb":
						m = s / f, v = o;
						break;
					case "rtl":
						m = -o / c, v = s;
						break;
					default: m = o / c, v = s;
				}
				h = l ? Math.abs(v) > Hn && u < _.length : !1, g(h), k(i, m, h);
			}, b = (e) => {
				e.preventDefault(), document.removeEventListener("mouseup", b), document.removeEventListener("mousemove", y), T.current && (T.current.removeEventListener("touchmove", S.current), T.current.removeEventListener("touchend", w.current)), S.current = null, w.current = null, T.current = null, s(h), m(-1), g(!1);
			};
			document.addEventListener("mouseup", b), document.addEventListener("mousemove", y), r.currentTarget.addEventListener("touchend", b), r.currentTarget.addEventListener("touchmove", y), S.current = y, w.current = b, T.current = r.currentTarget;
		}
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+slider@1.0.1__98bbe8bd1766e13d4163bf50daa0c491/node_modules/@rc-component/slider/es/hooks/useOffset.js
function Gn(e, t, n, r, i, a) {
	let o = $.useCallback((n) => Math.max(e, Math.min(t, n)), [e, t]), s = $.useCallback((r) => {
		if (n !== null) {
			let i = e + Math.round((o(r) - e) / n) * n, a = (e) => (String(e).split(".")[1] || "").length, s = Math.max(a(n), a(t), a(e)), c = Number(i.toFixed(s));
			return e <= c && c <= t ? c : null;
		}
		return null;
	}, [
		n,
		e,
		t,
		o
	]), c = $.useCallback((i) => {
		let a = o(i), c = r.map((e) => e.value);
		n !== null && c.push(s(i)), c.push(e, t);
		let l = c[0], u = t - e;
		return c.forEach((e) => {
			let t = Math.abs(a - e);
			t <= u && (l = e, u = t);
		}), l;
	}, [
		e,
		t,
		r,
		n,
		o,
		s
	]), l = (i, a, o, c = "unit") => {
		if (typeof a == "number") {
			let u, d = i[o], f = d + a, p = [];
			r.forEach((e) => {
				p.push(e.value);
			}), p.push(e, t), p.push(s(d));
			let m = a > 0 ? 1 : -1;
			c === "unit" ? p.push(s(d + m * n)) : p.push(s(f)), p = p.filter((e) => e !== null).filter((e) => a < 0 ? e <= d : e >= d), c === "unit" && (p = p.filter((e) => e !== d));
			let h = c === "unit" ? d : f;
			u = p[0];
			let g = Math.abs(u - h);
			if (p.forEach((e) => {
				let t = Math.abs(e - h);
				t < g && (u = e, g = t);
			}), u === void 0) return a < 0 ? e : t;
			if (c === "dist") return u;
			if (Math.abs(a) > 1) {
				let e = [...i];
				return e[o] = u, l(e, a - m, o, c);
			}
			return u;
		} else if (a === "min") return e;
		else if (a === "max") return t;
	}, u = (e, t, n, r = "unit") => {
		let i = e[n], a = l(e, t, n, r);
		return {
			value: a,
			changed: a !== i
		};
	}, d = (e) => a === null && e === 0 || typeof a == "number" && e < a;
	return [c, (e, t, n, r = "unit") => {
		let o = e.map(c), s = o[n];
		if (o[n] = l(o, t, n, r), i === !1) {
			let e = a || 0;
			n > 0 && o[n - 1] !== s && (o[n] = Math.max(o[n], o[n - 1] + e)), n < o.length - 1 && o[n + 1] !== s && (o[n] = Math.min(o[n], o[n + 1] - e));
		} else if (typeof a == "number" || a === null) {
			for (let e = n + 1; e < o.length; e += 1) {
				let t = !0;
				for (; d(o[e] - o[e - 1]) && t;) ({value: o[e], changed: t} = u(o, 1, e));
			}
			for (let e = n; e > 0; --e) {
				let t = !0;
				for (; d(o[e] - o[e - 1]) && t;) ({value: o[e - 1], changed: t} = u(o, -1, e - 1));
			}
			for (let e = o.length - 1; e > 0; --e) {
				let t = !0;
				for (; d(o[e] - o[e - 1]) && t;) ({value: o[e - 1], changed: t} = u(o, -1, e - 1));
			}
			for (let e = 0; e < o.length - 1; e += 1) {
				let t = !0;
				for (; d(o[e + 1] - o[e]) && t;) ({value: o[e + 1], changed: t} = u(o, 1, e + 1));
			}
		}
		return {
			value: o[n],
			values: o
		};
	}];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+slider@1.0.1__98bbe8bd1766e13d4163bf50daa0c491/node_modules/@rc-component/slider/es/hooks/useRange.js
function Kn(e) {
	return (0, $.useMemo)(() => {
		if (e === !0 || !e) return [
			!!e,
			!1,
			!1,
			0
		];
		let { editable: t, draggableTrack: n, minCount: r, maxCount: i } = e;
		return [
			!0,
			t,
			!t && n,
			r || 0,
			i
		];
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+slider@1.0.1__98bbe8bd1766e13d4163bf50daa0c491/node_modules/@rc-component/slider/es/index.js
var qn = /* @__PURE__ */ $.forwardRef((e, t) => {
	let { prefixCls: n = "rc-slider", className: r, style: i, classNames: o, styles: c, id: l, disabled: u = !1, keyboard: d = !0, autoFocus: f, onFocus: m, onBlur: h, min: g = 0, max: _ = 100, step: v = 1, value: y, defaultValue: x, range: S, count: C, onChange: w, onBeforeChange: T, onAfterChange: D, onChangeComplete: O, allowCross: k = !0, pushable: A = !1, reverse: j, vertical: M, included: N = !0, startPoint: P, trackStyle: F, handleStyle: I, railStyle: ee, dotStyle: L, activeDotStyle: R, marks: z, dots: B, handleRender: te, activeHandleRender: ne, track: re, tabIndex: V = 0, ariaLabelForHandle: ie, ariaLabelledByForHandle: H, ariaRequired: U, ariaValueTextFormatterForHandle: ae } = e, W = $.useRef(null), G = $.useRef(null), K = $.useMemo(() => M ? j ? "ttb" : "btt" : j ? "rtl" : "ltr", [j, M]), [q, J, oe, se, ce] = Kn(S), Y = $.useMemo(() => isFinite(g) ? g : 0, [g]), X = $.useMemo(() => isFinite(_) ? _ : 100, [_]), le = $.useMemo(() => v !== null && v <= 0 ? 1 : v, [v]), Z = $.useMemo(() => typeof A == "boolean" ? A ? le : !1 : A >= 0 ? A : !1, [A, le]), ue = $.useMemo(() => Object.keys(z || {}).map((e) => {
		let t = z[e], n = { value: Number(e) };
		return t && typeof t == "object" && !/*#__PURE__*/ $.isValidElement(t) && ("label" in t || "style" in t) ? (n.style = t.style, n.label = t.label) : n.label = t, n;
	}).filter(({ label: e }) => e || typeof e == "number").sort((e, t) => e.value - t.value), [z]), [de, fe] = Gn(Y, X, le, ue, k, Z), [pe, me] = E(x, y), Q = $.useMemo(() => {
		let e = pe == null ? [] : Array.isArray(pe) ? pe : [pe], [t = Y] = e, n = pe === null ? [] : [t];
		if (q) {
			if (n = [...e], C || pe === void 0) {
				let e = C >= 0 ? C + 1 : 2;
				for (n = n.slice(0, e); n.length < e;) n.push(n[n.length - 1] ?? Y);
			}
			n.sort((e, t) => e - t);
		}
		return n.forEach((e, t) => {
			n[t] = de(e);
		}), n;
	}, [
		pe,
		q,
		Y,
		C,
		de
	]), he = (e) => q ? e : e[0], ge = b((e) => {
		let t = [...e].sort((e, t) => e - t);
		w && !s(t, Q, !0) && w(he(t)), me(t);
	}), _e = b((e) => {
		e && W.current.hideHelp();
		let t = he(Q);
		D?.(t), a(!D, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), O?.(t);
	}), ve = (e) => {
		if (u || !J || Q.length <= se) return;
		let t = [...Q];
		t.splice(e, 1), T?.(he(t)), ge(t);
		let n = Math.max(0, e - 1);
		W.current.hideHelp(), W.current.focus(n);
	}, [ye, be, xe, Se, Ce] = Wn(G, K, Q, Y, X, de, ge, _e, fe, J, se), we = (e, t) => {
		if (!u) {
			let n = [...Q], r = 0, i = 0, o = X - Y;
			Q.forEach((t, n) => {
				let a = Math.abs(e - t);
				a <= o && (o = a, r = n), t < e && (i = n);
			});
			let s = r;
			J && o !== 0 && (!ce || Q.length < ce) ? (n.splice(i + 1, 0, e), s = i + 1) : n[r] = e, q && !Q.length && C === void 0 && n.push(e);
			let c = he(n);
			T?.(c), ge(n), t ? (document.activeElement?.blur?.(), W.current.focus(s), Ce(t, s, n)) : (D?.(c), a(!D, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), O?.(c));
		}
	}, Te = (e) => {
		e.preventDefault();
		let { width: t, height: n, left: r, top: i, bottom: a, right: o } = G.current.getBoundingClientRect(), { clientX: s, clientY: c } = e, l;
		switch (K) {
			case "btt":
				l = (a - c) / n;
				break;
			case "ttb":
				l = (c - i) / n;
				break;
			case "rtl":
				l = (o - s) / t;
				break;
			default: l = (s - r) / t;
		}
		we(de(Y + l * (X - Y)), e);
	}, [Ee, De] = $.useState(null), Oe = (e, t) => {
		if (!u) {
			let n = fe(Q, e, t);
			T?.(he(Q)), ge(n.values), De(n.value);
		}
	};
	$.useEffect(() => {
		if (Ee !== null) {
			let e = Q.indexOf(Ee);
			e >= 0 && W.current.focus(e);
		}
		De(null);
	}, [Ee]);
	let ke = $.useMemo(() => oe && le === null ? !1 : oe, [oe, le]), Ae = b((e, t) => {
		Ce(e, t), T?.(he(Q));
	}), je = ye !== -1;
	$.useEffect(() => {
		if (!je) {
			let e = Q.lastIndexOf(be);
			W.current.focus(e);
		}
	}, [je]);
	let Me = $.useMemo(() => [...Se].sort((e, t) => e - t), [Se]), [Ne, Pe] = $.useMemo(() => q ? [Me[0], Me[Me.length - 1]] : [Y, Me[0]], [
		Me,
		q,
		Y
	]);
	$.useImperativeHandle(t, () => ({
		focus: () => {
			W.current.focus(0);
		},
		blur: () => {
			let { activeElement: e } = document;
			G.current?.contains(e) && e?.blur();
		}
	})), $.useEffect(() => {
		f && W.current.focus(0);
	}, []);
	let Fe = $.useMemo(() => ({
		min: Y,
		max: X,
		direction: K,
		disabled: u,
		keyboard: d,
		step: le,
		included: N,
		includedStart: Ne,
		includedEnd: Pe,
		range: q,
		tabIndex: V,
		ariaLabelForHandle: ie,
		ariaLabelledByForHandle: H,
		ariaRequired: U,
		ariaValueTextFormatterForHandle: ae,
		styles: c || {},
		classNames: o || {}
	}), [
		Y,
		X,
		K,
		u,
		d,
		le,
		N,
		Ne,
		Pe,
		q,
		V,
		ie,
		H,
		U,
		ae,
		c,
		o
	]);
	return /*#__PURE__*/ $.createElement(An.Provider, { value: Fe }, /*#__PURE__*/ $.createElement("div", {
		ref: G,
		className: p(n, r, {
			[`${n}-disabled`]: u,
			[`${n}-vertical`]: M,
			[`${n}-horizontal`]: !M,
			[`${n}-with-marks`]: ue.length
		}),
		style: i,
		onMouseDown: Te,
		id: l
	}, /*#__PURE__*/ $.createElement("div", {
		className: p(`${n}-rail`, o?.rail),
		style: {
			...ee,
			...c?.rail
		}
	}), re !== !1 && /*#__PURE__*/ $.createElement(Vn, {
		prefixCls: n,
		style: F,
		values: Q,
		startPoint: P,
		onStartMove: ke ? Ae : void 0
	}), /*#__PURE__*/ $.createElement(zn, {
		prefixCls: n,
		marks: ue,
		dots: B,
		style: L,
		activeStyle: R
	}), /*#__PURE__*/ $.createElement(Fn, {
		ref: W,
		prefixCls: n,
		style: I,
		values: Se,
		draggingIndex: ye,
		draggingDelete: xe,
		onStartMove: Ae,
		onOffsetChange: Oe,
		onFocus: m,
		onBlur: h,
		handleRender: te,
		activeHandleRender: ne,
		onChangeComplete: _e,
		onDelete: J ? ve : void 0
	}), /*#__PURE__*/ $.createElement(Ln, {
		prefixCls: n,
		marks: ue,
		onClick: we
	})));
}), Jn = /*#__PURE__*/ (0, $.createContext)({}), Yn = /*#__PURE__*/ $.forwardRef((e, t) => {
	let { open: n, draggingDelete: r, value: a } = e, o = (0, $.useRef)(null), s = n && !r, c = (0, $.useRef)(null);
	function l() {
		i.cancel(c.current), c.current = null;
	}
	function u() {
		c.current = i(() => {
			o.current?.forceAlign(), c.current = null;
		});
	}
	return $.useEffect(() => (s ? u() : l(), l), [
		s,
		e.title,
		a
	]), /*#__PURE__*/ $.createElement(we, {
		ref: T(o, t),
		...e,
		open: s
	});
}), Xn = (e) => {
	let { componentCls: t, antCls: n, controlSize: r, dotSize: i, marginFull: a, marginPart: o, colorFillContentHover: s, handleColorDisabled: c, calc: l, handleSize: u, handleSizeHover: d, handleActiveColor: f, handleActiveOutlineColor: p, handleLineWidth: m, handleLineWidthHover: h, motionDurationMid: g } = e;
	return { [t]: {
		...he(e),
		position: "relative",
		height: r,
		margin: `${S(o)} ${S(a)}`,
		padding: 0,
		cursor: "pointer",
		touchAction: "none",
		userSelect: "none",
		"&-vertical": { margin: `${S(a)} ${S(o)}` },
		[`${t}-rail`]: {
			position: "absolute",
			backgroundColor: e.railBg,
			borderRadius: e.borderRadiusXS,
			transition: `background-color ${g}`
		},
		[`${t}-track,${t}-tracks`]: {
			position: "absolute",
			transition: `background-color ${g}`
		},
		[`${t}-track`]: {
			backgroundColor: e.trackBg,
			borderRadius: e.borderRadiusXS
		},
		[`${t}-track-draggable`]: {
			boxSizing: "content-box",
			backgroundClip: "content-box",
			border: "solid rgba(0,0,0,0)"
		},
		"&:hover": {
			[`${t}-rail`]: { backgroundColor: e.railHoverBg },
			[`${t}-track`]: { backgroundColor: e.trackHoverBg },
			[`${t}-dot`]: { borderColor: s },
			[`${t}-handle::after`]: { boxShadow: `0 0 0 ${S(m)} ${e.colorPrimaryBorderHover}` },
			[`${t}-dot-active`]: { borderColor: e.dotActiveBorderColor }
		},
		[`${t}-handle`]: {
			position: "absolute",
			width: u,
			height: u,
			outline: "none",
			userSelect: "none",
			"&-dragging-delete": { opacity: 0 },
			"&::before": {
				content: "\"\"",
				position: "absolute",
				insetInlineStart: l(m).mul(-1).equal(),
				insetBlockStart: l(m).mul(-1).equal(),
				width: l(u).add(l(m).mul(2)).equal(),
				height: l(u).add(l(m).mul(2)).equal(),
				backgroundColor: "transparent"
			},
			"&::after": {
				content: "\"\"",
				position: "absolute",
				insetBlockStart: 0,
				insetInlineStart: 0,
				width: u,
				height: u,
				backgroundColor: e.colorBgElevated,
				boxShadow: `0 0 0 ${S(m)} ${e.handleColor}`,
				outline: "0px solid transparent",
				borderRadius: "50%",
				cursor: "pointer",
				transition: [
					"inset-inline-start",
					"inset-block-start",
					"width",
					"height",
					"box-shadow",
					"outline"
				].map((e) => `${e} ${g}`).join(", ")
			},
			"&:hover, &:active, &:focus": {
				"&::before": {
					insetInlineStart: l(d).sub(u).div(2).add(h).mul(-1).equal(),
					insetBlockStart: l(d).sub(u).div(2).add(h).mul(-1).equal(),
					width: l(d).add(l(h).mul(2)).equal(),
					height: l(d).add(l(h).mul(2)).equal()
				},
				"&::after": {
					boxShadow: `0 0 0 ${S(h)} ${f}`,
					outline: `6px solid ${p}`,
					width: d,
					height: d,
					insetInlineStart: e.calc(u).sub(d).div(2).equal(),
					insetBlockStart: e.calc(u).sub(d).div(2).equal()
				}
			}
		},
		[`&-lock ${t}-handle`]: { "&::before, &::after": { transition: "none" } },
		[`${t}-mark`]: {
			position: "absolute",
			fontSize: e.fontSize
		},
		[`${t}-mark-text`]: {
			position: "absolute",
			display: "inline-block",
			color: e.colorTextDescription,
			textAlign: "center",
			wordBreak: "keep-all",
			cursor: "pointer",
			userSelect: "none",
			"&-active": { color: e.colorText }
		},
		[`${t}-step`]: {
			position: "absolute",
			background: "transparent",
			pointerEvents: "none"
		},
		[`${t}-dot`]: {
			position: "absolute",
			width: i,
			height: i,
			backgroundColor: e.colorBgElevated,
			border: `${S(m)} solid ${e.dotBorderColor}`,
			borderRadius: "50%",
			cursor: "pointer",
			transition: `border-color ${e.motionDurationSlow}`,
			pointerEvents: "auto",
			"&-active": { borderColor: e.dotActiveBorderColor }
		},
		[`&${t}-disabled`]: {
			cursor: "not-allowed",
			[`${t}-rail`]: { backgroundColor: `${e.railBg} !important` },
			[`${t}-track`]: { backgroundColor: `${e.trackBgDisabled} !important` },
			[`
          ${t}-dot
        `]: {
				backgroundColor: e.colorBgElevated,
				borderColor: e.trackBgDisabled,
				boxShadow: "none",
				cursor: "not-allowed"
			},
			[`${t}-handle::after`]: {
				backgroundColor: e.colorBgElevated,
				cursor: "not-allowed",
				width: u,
				height: u,
				boxShadow: `0 0 0 ${S(m)} ${c}`,
				insetInlineStart: 0,
				insetBlockStart: 0
			},
			[`
          ${t}-mark-text,
          ${t}-dot
        `]: { cursor: "not-allowed !important" }
		},
		[`&-tooltip ${n}-tooltip-container`]: { minWidth: "unset" }
	} };
}, Zn = (e, t) => {
	let { componentCls: n, railSize: r, handleSize: i, dotSize: a, marginFull: o, calc: s } = e, c = t ? "paddingBlock" : "paddingInline", l = t ? "width" : "height", u = t ? "height" : "width", d = t ? "insetBlockStart" : "insetInlineStart", f = t ? "top" : "insetInlineStart", p = s(r).mul(3).sub(i).div(2).equal(), m = s(i).sub(r).div(2).equal(), h = t ? {
		borderWidth: `${S(m)} 0`,
		transform: `translateY(${S(s(m).mul(-1).equal())})`
	} : {
		borderWidth: `0 ${S(m)}`,
		transform: `translateX(${S(e.calc(m).mul(-1).equal())})`
	};
	return {
		[c]: r,
		[u]: s(r).mul(3).equal(),
		[`${n}-rail`]: {
			[l]: "100%",
			[u]: r
		},
		[`${n}-track,${n}-tracks`]: { [u]: r },
		[`${n}-track-draggable`]: { ...h },
		[`${n}-handle`]: { [d]: p },
		[`${n}-mark`]: {
			insetInlineStart: 0,
			top: 0,
			[f]: s(r).mul(3).add(t ? 0 : o).equal(),
			[l]: "100%"
		},
		[`${n}-step`]: {
			insetInlineStart: 0,
			top: 0,
			[f]: r,
			[l]: "100%",
			[u]: r
		},
		[`${n}-dot`]: {
			position: "absolute",
			[d]: s(r).sub(a).div(2).equal()
		}
	};
}, Qn = (e) => {
	let { componentCls: t, marginPartWithMark: n } = e;
	return { [`${t}-horizontal`]: {
		...Zn(e, !0),
		[`&${t}-with-marks`]: { marginBottom: n }
	} };
}, $n = (e) => {
	let { componentCls: t } = e;
	return { [`${t}-vertical`]: {
		...Zn(e, !1),
		height: "100%"
	} };
}, er = ge("Slider", (e) => {
	let t = j(e, {
		marginPart: e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),
		marginFull: e.calc(e.controlSize).div(2).equal(),
		marginPartWithMark: e.calc(e.controlHeightLG).sub(e.controlSize).equal()
	});
	return [
		Xn(t),
		Qn(t),
		$n(t)
	];
}, (e) => {
	let t = e.controlHeightLG / 4, n = e.controlHeightSM / 2, r = e.lineWidth + 1, i = e.lineWidth + 1 * 1.5, a = e.colorPrimary, o = new y(a).setA(.2).toRgbString();
	return {
		controlSize: t,
		railSize: 4,
		handleSize: t,
		handleSizeHover: n,
		dotSize: 8,
		handleLineWidth: r,
		handleLineWidthHover: i,
		railBg: e.colorFillTertiary,
		railHoverBg: e.colorFillSecondary,
		trackBg: e.colorPrimaryBorder,
		trackHoverBg: e.colorPrimaryBorderHover,
		handleColor: e.colorPrimaryBorder,
		handleActiveColor: a,
		handleActiveOutlineColor: o,
		handleColorDisabled: new y(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString(),
		dotBorderColor: e.colorBorderSecondary,
		dotActiveBorderColor: e.colorPrimaryBorder,
		trackBgDisabled: e.colorBgContainerDisabled
	};
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/slider/useRafLock.js
function tr() {
	let [e, t] = $.useState(!1), n = $.useRef(null), r = () => {
		i.cancel(n.current);
	};
	return $.useEffect(() => r, []), [e, (e) => {
		r(), e ? t(e) : n.current = i(() => {
			t(e);
		});
	}];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/slider/index.js
var nr = /* @__PURE__ */ e({ default: () => ir });
function rr(e) {
	return e || e === null ? e : (e) => J(e) ? e.toString() : "";
}
var ir = /*#__PURE__*/ $.forwardRef((e, t) => {
	let { prefixCls: n, range: r, className: a, rootClassName: o, style: s, disabled: c, tooltip: l = {}, onChangeComplete: u, classNames: d, styles: f, vertical: m, orientation: h, ...g } = e, [, _] = Y(h, m), { getPrefixCls: v, direction: y, className: b, style: x, classNames: S, styles: C, getPopupContainer: w } = H("slider"), T = $.useContext(ue), E = c ?? T, D = {
		...e,
		disabled: E,
		vertical: _
	}, [O, k] = ee([S, d], [C, f], { props: D }), { handleRender: A, direction: j } = $.useContext(Jn), M = (j || y) === "rtl", [N, P] = tr(), [F, I] = tr(), L = { ...l }, { open: R, placement: z, getPopupContainer: B, prefixCls: te, formatter: ne } = L, re = R, V = (N || F) && re !== !1, ie = rr(ne), [U, ae] = tr(), W = (e) => {
		u?.(e), ae(!1);
	}, G = (e, t) => e || (t ? M ? "left" : "right" : "top"), K = v("slider", n), [q, J] = er(K), oe = p(a, b, O.root, o, {
		[`${K}-rtl`]: M,
		[`${K}-lock`]: U
	}, q, J);
	M && !_ && (g.reverse = !g.reverse), $.useEffect(() => {
		let e = () => {
			i(() => {
				I(!1);
			}, 1);
		};
		return document.addEventListener("mouseup", e), () => {
			document.removeEventListener("mouseup", e);
		};
	}, []);
	let se = r && !re, ce = A || ((e, t) => {
		let { index: n } = t, r = e.props;
		function i(e, t, n) {
			n && g[e]?.(t), r[e]?.(t);
		}
		let a = {
			...r,
			onMouseEnter: (e) => {
				P(!0), i("onMouseEnter", e);
			},
			onMouseLeave: (e) => {
				P(!1), i("onMouseLeave", e);
			},
			onMouseDown: (e) => {
				I(!0), ae(!0), i("onMouseDown", e);
			},
			onFocus: (e) => {
				I(!0), g.onFocus?.(e), i("onFocus", e, !0);
			},
			onBlur: (e) => {
				I(!1), g.onBlur?.(e), i("onBlur", e, !0);
			}
		}, o = /*#__PURE__*/ $.cloneElement(e, a), s = (!!re || V) && ie !== null;
		return se ? o : /*#__PURE__*/ $.createElement(Yn, {
			...L,
			prefixCls: v("tooltip", te),
			title: ie ? ie(t.value) : void 0,
			value: t.value,
			open: s,
			placement: G(z, _),
			key: n,
			classNames: { root: `${K}-tooltip` },
			getPopupContainer: B || w
		}, o);
	}), X = se ? (e, t) => {
		let n = /*#__PURE__*/ $.cloneElement(e, { style: {
			...e.props.style,
			visibility: "hidden"
		} });
		return /*#__PURE__*/ $.createElement(Yn, {
			...L,
			prefixCls: v("tooltip", te),
			title: ie ? ie(t.value) : void 0,
			open: ie !== null && V,
			placement: G(z, _),
			key: "tooltip",
			classNames: { root: `${K}-tooltip` },
			getPopupContainer: B || w,
			draggingDelete: t.draggingDelete
		}, n);
	} : void 0, le = {
		...k.root,
		...x,
		...s
	};
	return /*#__PURE__*/ $.createElement(qn, {
		...g,
		classNames: O,
		styles: k,
		step: g.step,
		range: r,
		className: oe,
		style: le,
		disabled: E,
		vertical: _,
		ref: t,
		prefixCls: K,
		handleRender: ce,
		activeHandleRender: X,
		onChangeComplete: W
	});
}), ar = (e) => {
	let { prefixCls: t, colors: n, type: r, color: i, range: a = !1, className: o, activeIndex: s, onActive: c, onDragStart: l, onDragChange: u, onKeyDelete: d, ...f } = e, m = {
		...f,
		track: !1
	}, h = $.useMemo(() => `linear-gradient(90deg, ${n.map((e) => `${e.color} ${e.percent}%`).join(", ")})`, [n]), g = $.useMemo(() => !i || !r ? null : r === "alpha" ? i.toRgbString() : `hsl(${i.toHsb().h}, 100%, 50%)`, [i, r]), _ = b(l), v = b(u), y = $.useMemo(() => ({
		onDragStart: _,
		onDragChange: v
	}), []), x = b((e, i) => {
		let { onFocus: a, style: o, className: l, onKeyDown: u } = e.props, f = { ...o };
		return r === "gradient" && (f.background = B(n, i.value)), /*#__PURE__*/ $.cloneElement(e, {
			onFocus: (e) => {
				c?.(i.index), a?.(e);
			},
			style: f,
			className: p(l, { [`${t}-slider-handle-active`]: s === i.index }),
			onKeyDown: (e) => {
				(e.key === "Delete" || e.key === "Backspace") && d && d(i.index), u?.(e);
			}
		});
	}), S = $.useMemo(() => ({
		direction: "ltr",
		handleRender: x
	}), []);
	return /*#__PURE__*/ $.createElement(Jn.Provider, { value: S }, /*#__PURE__*/ $.createElement(jn.Provider, { value: y }, /*#__PURE__*/ $.createElement(ir, {
		...m,
		className: p(o, `${t}-slider`),
		tooltip: { open: !1 },
		range: {
			editable: a,
			minCount: 2
		},
		styles: {
			rail: { background: h },
			handle: g ? { background: g } : {}
		},
		classNames: {
			rail: `${t}-slider-rail`,
			handle: `${t}-slider-handle`
		}
	})));
}, or = (e) => {
	let { value: t, onChange: n, onChangeComplete: r } = e, i = (e) => n(e[0]), a = (e) => r(e[0]);
	return /*#__PURE__*/ $.createElement(ar, {
		...e,
		value: [t],
		onChange: i,
		onChangeComplete: a
	});
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/color-picker/components/PanelPicker/GradientColorBar.js
function sr(e) {
	return f(e).sort((e, t) => e.percent - t.percent);
}
var cr = /*#__PURE__*/ $.memo((e) => {
	let { prefixCls: t, mode: n, onChange: r, onChangeComplete: i, onActive: a, activeIndex: o, onGradientDragging: s, colors: c } = e, l = n === "gradient", u = $.useMemo(() => c.map((e) => ({
		percent: e.percent,
		color: e.color.toRgbString()
	})), [c]), d = $.useMemo(() => u.map((e) => e.percent), [u]), p = $.useRef(u);
	return l ? /*#__PURE__*/ $.createElement(ar, {
		min: 0,
		max: 100,
		prefixCls: t,
		className: `${t}-gradient-slider`,
		colors: u,
		color: null,
		value: d,
		range: !0,
		onChangeComplete: (e) => {
			i(new Z(u)), o >= e.length && a(e.length - 1), s(!1);
		},
		disabled: !1,
		type: "gradient",
		activeIndex: o,
		onActive: a,
		onDragStart: ({ rawValues: e, draggingIndex: t, draggingValue: n }) => {
			if (e.length > u.length) {
				let e = B(u, n), r = f(u);
				r.splice(t, 0, {
					percent: n,
					color: e
				}), p.current = r;
			} else p.current = u;
			s(!0), r(new Z(sr(p.current)), !0);
		},
		onDragChange: ({ deleteIndex: e, draggingIndex: t, draggingValue: n }) => {
			let i = f(p.current);
			e === -1 ? (i[t] = {
				...i[t],
				percent: n
			}, i = sr(i)) : i.splice(e, 1), r(new Z(i), !0);
		},
		onKeyDelete: (e) => {
			let t = f(u);
			t.splice(e, 1);
			let n = new Z(t);
			r(n), i(n);
		}
	}) : null;
}), lr = { slider: or }, ur = () => {
	let e = (0, $.useContext)(nt), { mode: t, onModeChange: n, modeOptions: r, prefixCls: i, allowClear: a, value: o, disabledAlpha: s, onChange: c, onClear: l, onChangeComplete: u, activeIndex: d, gradientDragging: p, ...m } = e, h = $.useMemo(() => o.cleared ? [{
		percent: 0,
		color: new Z("")
	}, {
		percent: 100,
		color: new Z("")
	}] : o.getColors(), [o]), g = !o.isGradient(), [_, v] = $.useState(o);
	C(() => {
		g || v(h[d]?.color);
	}, [
		g,
		h,
		p,
		d
	]);
	let y = $.useMemo(() => g ? o : p ? _ : h[d]?.color, [
		h,
		o,
		d,
		g,
		_,
		p
	]), [b, x] = $.useState(y), [S, w] = ye(), T = b?.equals(y) ? y : b;
	C(() => {
		x(y);
	}, [S, y?.toHexString()]);
	let E = (e, n) => {
		let r = I(e);
		if (o.cleared) {
			let e = r.toRgb();
			if (!e.r && !e.g && !e.b && n) {
				let { type: e, value: t = 0 } = n;
				r = new Z({
					h: e === "hue" ? t : 0,
					s: 1,
					b: 1,
					a: e === "alpha" ? t / 100 : 1
				});
			} else r = G(r);
		}
		if (t === "single") return r;
		let i = f(h);
		return i[d] = {
			...i[d],
			color: r
		}, new Z(i);
	}, D = (e, t, n) => {
		let r = E(e, n);
		x(r.isGradient() ? r.getColors()[d].color : r), c(r, t);
	}, O = (e, t) => {
		u(E(e, t)), w();
	}, k = (e) => {
		c(E(e));
	}, A = null, j = r.length > 1;
	return (a || j) && (A = /*#__PURE__*/ $.createElement("div", { className: `${i}-operation` }, j && /*#__PURE__*/ $.createElement(tt, {
		size: "small",
		options: r,
		value: t,
		onChange: n
	}), /*#__PURE__*/ $.createElement(it, {
		prefixCls: i,
		value: o,
		onChange: (e) => {
			c(e), l?.();
		},
		...m
	}))), /*#__PURE__*/ $.createElement($.Fragment, null, A, /*#__PURE__*/ $.createElement(cr, {
		...e,
		colors: h
	}), /*#__PURE__*/ $.createElement(R, {
		prefixCls: i,
		value: T?.toHsb(),
		disabledAlpha: s,
		onChange: (e, t) => {
			D(e, !0, t);
		},
		onChangeComplete: (e, t) => {
			O(e, t);
		},
		components: lr
	}), /*#__PURE__*/ $.createElement(Tn, {
		value: y,
		onChange: k,
		prefixCls: i,
		disabledAlpha: s,
		...m
	}));
}, dr = () => {
	let { prefixCls: e, value: t, presets: n, onChange: r } = (0, $.useContext)(rt);
	return Array.isArray(n) ? /*#__PURE__*/ $.createElement(N, {
		value: t,
		presets: n,
		prefixCls: e,
		onChange: r
	}) : null;
}, fr = (e) => {
	let { prefixCls: t, presets: n, panelRender: r, value: i, onChange: a, onClear: o, allowClear: s, disabledAlpha: c, mode: l, onModeChange: u, modeOptions: d, onChangeComplete: f, activeIndex: p, onActive: m, format: h, onFormatChange: g, gradientDragging: _, onGradientDragging: v, disabledFormat: y } = e, b = `${t}-inner`, x = $.useMemo(() => ({
		prefixCls: t,
		value: i,
		onChange: a,
		onClear: o,
		allowClear: s,
		disabledAlpha: c,
		mode: l,
		onModeChange: u,
		modeOptions: d,
		onChangeComplete: f,
		activeIndex: p,
		onActive: m,
		format: h,
		onFormatChange: g,
		gradientDragging: _,
		onGradientDragging: v,
		disabledFormat: y
	}), [
		t,
		i,
		a,
		o,
		s,
		c,
		l,
		u,
		d,
		f,
		p,
		m,
		h,
		g,
		_,
		v,
		y
	]), S = $.useMemo(() => ({
		prefixCls: t,
		value: i,
		presets: n,
		onChange: a
	}), [
		t,
		i,
		n,
		a
	]), C = /*#__PURE__*/ $.createElement("div", { className: `${b}-content` }, /*#__PURE__*/ $.createElement(ur, null), Array.isArray(n) && /*#__PURE__*/ $.createElement(Be, null), /*#__PURE__*/ $.createElement(dr, null));
	return /*#__PURE__*/ $.createElement(nt.Provider, { value: x }, /*#__PURE__*/ $.createElement(rt.Provider, { value: S }, /*#__PURE__*/ $.createElement("div", { className: b }, q(r) ? r(C, { components: {
		Picker: ur,
		Presets: dr
	} }) : C)));
}, pr = /*#__PURE__*/ (0, $.forwardRef)((e, t) => {
	let { color: n, prefixCls: r, open: i, disabled: a, format: o, className: s, style: l, classNames: u, styles: d, showText: f, activeIndex: m, ...h } = e, g = `${r}-trigger`, _ = `${g}-text`, v = `${_}-cell`, [y] = V("ColorPicker"), b = $.useMemo(() => {
		if (!f) return "";
		if (q(f)) return f(n);
		if (n.cleared) return y.transparent;
		if (n.isGradient()) return n.getColors().map((e, t) => {
			let n = m !== -1 && m !== t;
			return /*#__PURE__*/ $.createElement("span", {
				key: t,
				className: p(v, n && `${v}-inactive`)
			}, e.color.toRgbString(), " ", e.percent, "%");
		});
		let e = n.toHexString().toUpperCase(), t = P(n);
		switch (o) {
			case "rgb": return n.toRgbString();
			case "hsb": return n.toHsbString();
			default: return t < 100 ? `${e.slice(0, 7)},${t}%` : e;
		}
	}, [
		n,
		o,
		f,
		m,
		y.transparent,
		v
	]), x = (0, $.useMemo)(() => n.cleared ? /*#__PURE__*/ $.createElement(it, {
		prefixCls: r,
		className: u.body,
		style: d.body
	}) : /*#__PURE__*/ $.createElement(te, {
		prefixCls: r,
		color: n.toCssString(),
		className: u.body,
		innerClassName: u.content,
		style: d.body,
		innerStyle: d.content
	}), [
		n,
		r,
		u.body,
		u.content,
		d.body,
		d.content
	]);
	return /*#__PURE__*/ $.createElement("div", {
		ref: t,
		className: p(g, s, u.root, {
			[`${g}-active`]: i,
			[`${g}-disabled`]: a
		}),
		style: {
			...d.root,
			...l
		},
		...c(h)
	}, x, f && /*#__PURE__*/ $.createElement("div", {
		className: p(_, u.description),
		style: d.description
	}, b));
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/color-picker/hooks/useModeColor.js
function mr(e, t, n) {
	let [r] = V("ColorPicker"), [i, a] = E(e, t), [o, s] = $.useState("single"), [c, l] = $.useMemo(() => {
		let e = (Array.isArray(n) ? n : [n]).filter((e) => e);
		e.length || e.push("single");
		let t = new Set(e), i = [], a = (e, n) => {
			t.has(e) && i.push({
				label: n,
				value: e
			});
		};
		return a("single", r.singleColor), a("gradient", r.gradientColor), [i, t];
	}, [
		n,
		r.singleColor,
		r.gradientColor
	]), [u, d] = $.useState(null), f = b((e) => {
		d(e), a(e);
	}), p = $.useMemo(() => {
		let e = I(i || "");
		return e.equals(u) ? u : e;
	}, [i, u]), m = $.useMemo(() => l.has(o) ? o : c[0]?.value, [
		l,
		o,
		c
	]);
	return $.useEffect(() => {
		s(p.isGradient() ? "gradient" : "single");
	}, [p]), [
		p,
		f,
		m,
		s,
		c
	];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/color-picker/style/color-block.js
var hr = (e, t) => ({
	backgroundImage: `conic-gradient(${t} 25%, transparent 25% 50%, ${t} 50% 75%, transparent 75% 100%)`,
	backgroundSize: `${e} ${e}`
}), gr = (e, t) => {
	let { componentCls: n, borderRadiusSM: r, colorPickerInsetShadow: i, lineWidth: a, colorFillSecondary: o } = e;
	return { [`${n}-color-block`]: {
		position: "relative",
		borderRadius: r,
		width: t,
		height: t,
		boxShadow: i,
		flex: "none",
		...hr("50%", e.colorFillSecondary),
		[`${n}-color-block-inner`]: {
			width: "100%",
			height: "100%",
			boxShadow: `inset 0 0 0 ${S(a)} ${o}`,
			borderRadius: "inherit"
		}
	} };
}, _r = (e) => {
	let { componentCls: t, antCls: n, fontSizeSM: r, lineHeightSM: i, colorPickerAlphaInputWidth: a, marginXXS: o, paddingXXS: s, controlHeightSM: c, marginXS: l, fontSizeIcon: u, paddingXS: d, colorTextPlaceholder: f, colorPickerInputNumberHandleWidth: p, lineWidth: m } = e;
	return { [`${t}-input-container`]: {
		display: "flex",
		[`${t}-steppers${n}-input-number`]: {
			fontSize: r,
			lineHeight: i,
			padding: 0,
			[`${n}-input-number-input`]: {
				paddingInlineStart: s,
				paddingInlineEnd: 0
			},
			[`${n}-input-number-handler-wrap`]: { width: p }
		},
		[`${t}-steppers${t}-alpha-input`]: {
			flex: `0 0 ${S(a)}`,
			marginInlineStart: o
		},
		[`${t}-format-select${n}-select`]: {
			marginInlineEnd: l,
			width: "auto",
			"&-single": {
				[`${n}-select-selector`]: {
					padding: 0,
					border: 0
				},
				[`${n}-select-arrow`]: { insetInlineEnd: 0 },
				[`${n}-select-selection-item`]: {
					paddingInlineEnd: e.calc(u).add(o).equal(),
					fontSize: r,
					lineHeight: S(c)
				},
				[`${n}-select-item-option-content`]: {
					fontSize: r,
					lineHeight: i
				},
				[`${n}-select-dropdown`]: { [`${n}-select-item`]: { minHeight: "auto" } }
			}
		},
		[`${t}-input`]: {
			gap: o,
			alignItems: "center",
			flex: 1,
			width: 0,
			[`${t}-hsb-input,${t}-rgb-input`]: {
				height: c,
				display: "flex",
				gap: o,
				alignItems: "center"
			},
			[`${t}-steppers`]: { flex: 1 },
			[`${t}-hex-input${n}-input-affix-wrapper`]: {
				flex: 1,
				padding: `0 ${S(d)}`,
				[`${n}-input`]: {
					fontSize: r,
					textTransform: "uppercase",
					lineHeight: S(e.calc(c).sub(e.calc(m).mul(2)).equal())
				},
				[`${n}-input-prefix`]: { color: f }
			}
		}
	} };
}, vr = (e) => {
	let { componentCls: t, controlHeightLG: n, borderRadiusSM: r, colorPickerInsetShadow: i, marginSM: a, colorBgElevated: o, colorFillSecondary: s, lineWidthBold: c, colorPickerHandlerSize: l } = e;
	return {
		userSelect: "none",
		[`${t}-select`]: {
			[`${t}-palette`]: {
				minHeight: e.calc(n).mul(4).equal(),
				overflow: "hidden",
				borderRadius: r
			},
			[`${t}-saturation`]: {
				position: "absolute",
				borderRadius: "inherit",
				boxShadow: i,
				inset: 0
			},
			marginBottom: a
		},
		[`${t}-handler`]: {
			width: l,
			height: l,
			border: `${S(c)} solid ${o}`,
			position: "relative",
			borderRadius: "50%",
			cursor: "pointer",
			boxShadow: `${i}, 0 0 0 1px ${s}`
		}
	};
}, yr = (e) => {
	let { componentCls: t, antCls: n, colorTextQuaternary: r, paddingXXS: i, colorPickerPresetColorSize: a, fontSizeSM: o, colorText: s, lineHeightSM: c, lineWidth: l, borderRadius: u, colorFill: d, colorWhite: f, marginXXS: p, paddingXS: m, fontHeightSM: h } = e;
	return { [`${t}-presets`]: {
		[`${n}-collapse-item > ${n}-collapse-header`]: {
			padding: 0,
			[`${n}-collapse-expand-icon`]: {
				height: h,
				color: r,
				paddingInlineEnd: i
			}
		},
		[`${n}-collapse`]: {
			display: "flex",
			flexDirection: "column",
			gap: p
		},
		[`${n}-collapse-item > ${n}-collapse-panel > ${n}-collapse-body`]: { padding: `${S(m)} 0` },
		"&-label": {
			fontSize: o,
			color: s,
			lineHeight: c
		},
		"&-items": {
			display: "flex",
			flexWrap: "wrap",
			gap: e.calc(p).mul(1.5).equal(),
			[`${t}-presets-color`]: {
				position: "relative",
				cursor: "pointer",
				width: a,
				height: a,
				"&::before": {
					content: "\"\"",
					pointerEvents: "none",
					width: e.calc(a).add(e.calc(l).mul(4)).equal(),
					height: e.calc(a).add(e.calc(l).mul(4)).equal(),
					position: "absolute",
					top: e.calc(l).mul(-2).equal(),
					insetInlineStart: e.calc(l).mul(-2).equal(),
					borderRadius: u,
					border: `${S(l)} solid transparent`,
					transition: `border-color ${e.motionDurationMid} ${e.motionEaseInBack}`
				},
				"&:hover::before": { borderColor: d },
				"&::after": {
					boxSizing: "border-box",
					position: "absolute",
					top: "50%",
					insetInlineStart: "21.5%",
					display: "table",
					width: e.calc(a).div(13).mul(5).equal(),
					height: e.calc(a).div(13).mul(8).equal(),
					border: `${S(e.lineWidthBold)} solid ${e.colorWhite}`,
					borderTop: 0,
					borderInlineStart: 0,
					transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
					opacity: 0,
					content: "\"\"",
					transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
				},
				[`&${t}-presets-color-checked`]: {
					"&::after": {
						opacity: 1,
						borderColor: f,
						transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
						transition: `transform ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
					},
					[`&${t}-presets-color-bright`]: { "&::after": { borderColor: "rgba(0, 0, 0, 0.45)" } }
				}
			}
		},
		"&-empty": {
			fontSize: o,
			color: r
		}
	} };
}, br = (e) => {
	let { componentCls: t, colorPickerInsetShadow: n, colorBgElevated: r, colorFillSecondary: i, lineWidthBold: a, colorPickerHandlerSizeSM: o, colorPickerSliderHeight: s, marginSM: c, marginXS: l } = e, u = e.calc(o).sub(e.calc(a).mul(2).equal()).equal(), d = e.calc(o).add(e.calc(a).mul(2).equal()).equal(), f = { "&:after": {
		transform: "scale(1)",
		boxShadow: `${n}, 0 0 0 1px ${e.colorPrimaryActive}`
	} };
	return {
		[`${t}-slider`]: [hr(S(s), e.colorFillSecondary), {
			margin: 0,
			padding: 0,
			height: s,
			borderRadius: e.calc(s).div(2).equal(),
			"&-rail": {
				height: s,
				borderRadius: e.calc(s).div(2).equal(),
				boxShadow: n
			},
			[`& ${t}-slider-handle`]: {
				width: u,
				height: u,
				top: 0,
				borderRadius: "100%",
				"&:before": {
					display: "block",
					position: "absolute",
					background: "transparent",
					left: {
						_skip_check_: !0,
						value: "50%"
					},
					top: "50%",
					transform: "translate(-50%, -50%)",
					width: d,
					height: d,
					borderRadius: "100%"
				},
				"&:after": {
					width: o,
					height: o,
					border: `${S(a)} solid ${r}`,
					boxShadow: `${n}, 0 0 0 1px ${i}`,
					outline: "none",
					insetInlineStart: e.calc(a).mul(-1).equal(),
					top: e.calc(a).mul(-1).equal(),
					background: "transparent",
					transition: "none"
				},
				"&:focus": f
			}
		}],
		[`${t}-slider-container`]: {
			display: "flex",
			gap: c,
			marginBottom: c,
			[`${t}-slider-group`]: {
				flex: 1,
				flexDirection: "column",
				justifyContent: "space-between",
				display: "flex",
				"&-disabled-alpha": { justifyContent: "center" }
			}
		},
		[`${t}-gradient-slider`]: {
			marginBottom: l,
			[`& ${t}-slider-handle`]: {
				"&:after": { transform: "scale(0.8)" },
				"&-active, &:focus": f
			}
		}
	};
}, xr = (e, t, n) => ({
	borderInlineEndWidth: e.lineWidth,
	borderColor: t,
	boxShadow: `0 0 0 ${S(e.controlOutlineWidth)} ${n}`,
	outline: 0
}), Sr = (e) => {
	let { componentCls: t } = e;
	return { "&-rtl": {
		[`${t}-presets-color`]: { "&::after": { direction: "ltr" } },
		[`${t}-clear`]: { "&::after": { direction: "ltr" } }
	} };
}, Cr = (e, t, n) => {
	let { componentCls: r, borderRadiusSM: i, lineWidth: a, colorSplit: o, colorBorder: s, red6: c } = e;
	return { [`${r}-clear`]: {
		width: t,
		height: t,
		borderRadius: i,
		border: `${S(a)} solid ${o}`,
		position: "relative",
		overflow: "hidden",
		cursor: "inherit",
		transition: `all ${e.motionDurationFast}`,
		...n,
		"&::after": {
			content: "\"\"",
			position: "absolute",
			insetInlineEnd: e.calc(a).mul(-1).equal(),
			top: e.calc(a).mul(-1).equal(),
			display: "block",
			width: 40,
			height: 2,
			transformOrigin: "calc(100% - 1px) 1px",
			transform: "rotate(-45deg)",
			backgroundColor: c
		},
		"&:hover": { borderColor: s }
	} };
}, wr = (e) => {
	let { componentCls: t, colorError: n, colorWarning: r, colorErrorHover: i, colorWarningHover: a, colorErrorOutline: o, colorWarningOutline: s } = e;
	return {
		[`&${t}-status-error`]: {
			borderColor: n,
			"&:hover": { borderColor: i },
			[`&${t}-trigger-active`]: { ...xr(e, n, o) }
		},
		[`&${t}-status-warning`]: {
			borderColor: r,
			"&:hover": { borderColor: a },
			[`&${t}-trigger-active`]: { ...xr(e, r, s) }
		}
	};
}, Tr = (e) => {
	let { componentCls: t, controlHeightLG: n, controlHeightSM: r, controlHeight: i, controlHeightXS: a, borderRadius: o, borderRadiusSM: s, borderRadiusXS: c, borderRadiusLG: l, fontSizeLG: u } = e;
	return {
		[`&${t}-lg`]: {
			minWidth: n,
			minHeight: n,
			borderRadius: l,
			[`${t}-color-block, ${t}-clear`]: {
				width: i,
				height: i,
				borderRadius: o
			},
			[`${t}-trigger-text`]: { fontSize: u }
		},
		[`&${t}-sm`]: {
			minWidth: r,
			minHeight: r,
			borderRadius: s,
			[`${t}-color-block, ${t}-clear`]: {
				width: a,
				height: a,
				borderRadius: c
			},
			[`${t}-trigger-text`]: { lineHeight: S(a) }
		}
	};
}, Er = (e) => {
	let { antCls: t, componentCls: n, colorPickerWidth: r, colorPrimary: i, motionDurationMid: a, colorBgElevated: o, colorTextDisabled: s, colorText: c, colorBgContainerDisabled: l, borderRadius: u, marginXS: d, marginSM: f, controlHeight: p, controlHeightSM: m, colorBgTextActive: h, colorPickerPresetColorSize: g, colorPickerPreviewSize: _, lineWidth: v, colorBorder: y, paddingXXS: b, fontSize: x, colorPrimaryHover: C, controlOutline: w } = e;
	return [{ [n]: {
		[`${n}-inner`]: {
			"&-content": {
				display: "flex",
				flexDirection: "column",
				width: r,
				[`& > ${t}-divider`]: { margin: `${S(f)} 0 ${S(d)}` }
			},
			[`${n}-panel`]: { ...vr(e) },
			...br(e),
			...gr(e, _),
			..._r(e),
			...yr(e),
			...Cr(e, g, { marginInlineStart: "auto" }),
			[`${n}-operation`]: {
				display: "flex",
				justifyContent: "space-between",
				marginBottom: d
			}
		},
		"&-trigger": {
			minWidth: p,
			minHeight: p,
			borderRadius: u,
			border: `${S(v)} solid ${y}`,
			cursor: "pointer",
			display: "inline-flex",
			alignItems: "flex-start",
			justifyContent: "center",
			transition: `all ${a}`,
			background: o,
			padding: e.calc(b).sub(v).equal(),
			[`${n}-trigger-text`]: {
				marginInlineStart: d,
				marginInlineEnd: e.calc(d).sub(e.calc(b).sub(v)).equal(),
				fontSize: x,
				color: c,
				alignSelf: "center",
				"&-cell": {
					"&:not(:last-child):after": { content: "\", \"" },
					"&-inactive": { color: s }
				}
			},
			"&:hover": { borderColor: C },
			[`&${n}-trigger-active`]: { ...xr(e, i, w) },
			"&-disabled": {
				color: s,
				background: l,
				cursor: "not-allowed",
				"&:hover": { borderColor: h },
				[`${n}-trigger-text`]: { color: s }
			},
			...Cr(e, m),
			...gr(e, m),
			...wr(e),
			...Tr(e)
		},
		...Sr(e)
	} }, U(e, { focusElCls: `${n}-trigger-active` })];
}, Dr = ge("ColorPicker", (e) => {
	let { colorTextQuaternary: t, marginSM: n } = e;
	return Er(j(e, {
		colorPickerWidth: 234,
		colorPickerHandlerSize: 16,
		colorPickerHandlerSizeSM: 12,
		colorPickerAlphaInputWidth: 44,
		colorPickerInputNumberHandleWidth: 16,
		colorPickerPresetColorSize: 24,
		colorPickerInsetShadow: `inset 0 0 1px 0 ${t}`,
		colorPickerSliderHeight: 8,
		colorPickerPreviewSize: e.calc(8).mul(2).add(n).equal()
	}));
}), Or = (e) => {
	let { mode: t, value: n, defaultValue: r, format: i, defaultFormat: a, allowClear: o = !1, presets: s, children: c, trigger: l = "click", open: u, disabled: d, placement: f = "bottomLeft", arrow: m, panelRender: h, showText: g, style: _, className: v, size: y, rootClassName: b, prefixCls: x, styles: S, classNames: C, disabledAlpha: w = !1, onFormatChange: T, onChange: D, onClear: O, onOpenChange: k, onChangeComplete: A, getPopupContainer: j, autoAdjustOverflow: N = !0, destroyTooltipOnHide: L, destroyOnHidden: R, disabledFormat: z, ...B } = e, { getPrefixCls: te, direction: ne, className: re, style: V, classNames: ie, styles: U, arrow: ae } = H("colorPicker"), W = (0, $.useContext)(ue), q = d ?? W, J = te("color-picker", x), oe = Se(m, ae), { compactSize: se, compactItemClassnames: Y } = M(J, ne), X = ce((e) => y ?? se ?? e), de = {
		...e,
		trigger: l,
		allowClear: o,
		autoAdjustOverflow: N,
		disabledAlpha: w,
		arrow: oe,
		placement: f,
		disabled: q,
		size: X
	}, [fe, pe] = ee([ie, C], [U, S], { props: de }, { popup: { _default: "root" } }), [me, he] = E(!1, u), ge = !q && me, [_e, ve] = E(a, i), ye = (e) => {
		ve(e), _e !== e && T?.(e);
	}, be = (e) => {
		(!e || !q) && (he(e), k?.(e));
	}, [xe, we, Te, Ee, De] = mr(r, n, t), Oe = (0, $.useMemo)(() => P(xe) < 100, [xe]), [ke, Ae] = $.useState(null), je = (e) => {
		if (A) {
			let t = I(e);
			w && Oe && (t = G(e)), A(t);
		}
	}, Me = (e, t) => {
		let n = I(e);
		w && Oe && (n = G(n)), we(n), Ae(null), D && D(n, n.toCssString()), t || je(n);
	}, [Ne, Pe] = $.useState(0), [Fe, Ie] = $.useState(!1), Le = (e) => {
		if (Ee(e), e === "single" && xe.isGradient()) Pe(0), Me(new Z(xe.getColors()[0].color)), Ae(xe);
		else if (e === "gradient" && !xe.isGradient()) {
			let e = Oe ? G(xe) : xe;
			Me(new Z(ke || [{
				percent: 0,
				color: e
			}, {
				percent: 100,
				color: e
			}]));
		}
	}, { status: Re } = $.useContext(Q), ze = K(J), [Be, Ve] = Dr(J, ze), He = p(b, Ve, ze, { [`${J}-rtl`]: ne }), Ue = p(F(J, Re), {
		[`${J}-sm`]: X === "small",
		[`${J}-lg`]: X === "large"
	}, Y, re, He, v, Be), We = p(J, He, fe.popup?.root), Ge = {
		open: ge,
		trigger: l,
		placement: f,
		arrow: oe,
		rootClassName: b,
		getPopupContainer: j,
		autoAdjustOverflow: N,
		destroyOnHidden: R ?? !!L
	}, Ke = {
		...V,
		..._
	};
	return /*#__PURE__*/ $.createElement(Ce, {
		classNames: { root: We },
		styles: {
			root: pe.popup?.root,
			container: S?.popupOverlayInner
		},
		onOpenChange: be,
		content: /*#__PURE__*/ $.createElement(le, { form: !0 }, /*#__PURE__*/ $.createElement(fr, {
			mode: Te,
			onModeChange: Le,
			modeOptions: De,
			prefixCls: J,
			value: xe,
			allowClear: o,
			disabled: q,
			disabledAlpha: w,
			presets: s,
			panelRender: h,
			format: _e,
			onFormatChange: ye,
			onChange: Me,
			onChangeComplete: je,
			onClear: O,
			activeIndex: Ne,
			onActive: Pe,
			gradientDragging: Fe,
			onGradientDragging: Ie,
			disabledFormat: z
		})),
		...Ge
	}, c || /*#__PURE__*/ $.createElement(pr, {
		activeIndex: ge ? Ne : -1,
		open: ge,
		className: Ue,
		style: Ke,
		classNames: fe,
		styles: pe,
		prefixCls: J,
		disabled: q,
		showText: g,
		format: _e,
		...B,
		color: xe
	}));
};
Or._InternalPanelDoNotUseOrYouWillBeFired = z(Or, void 0, (e) => ({
	...e,
	placement: "bottom",
	autoAdjustOverflow: !1
}), "color-picker", (e) => e);
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/color-picker/index.js
var kr = /* @__PURE__ */ e({ default: () => Ar }), Ar = Or;
//#endregion
export { mn as a, Mt as c, gn as i, $e as l, nr as n, Jt as o, vn as r, Lt as s, kr as t, Re as u };
