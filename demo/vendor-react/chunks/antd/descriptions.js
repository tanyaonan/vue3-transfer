globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, On as r, kt as i, wn as a, yt as o } from "../shared/core.js";
import { Jn as s, Sr as c, Zn as l, en as u, er as d, gr as f, pr as p, sr as m, v as h } from "../shared/antd-core.js";
import { u as g } from "./avatar.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/descriptions/constant.js
var _ = /* @__PURE__ */ t(r()), v = {
	xxxl: 4,
	xxl: 3,
	xl: 3,
	lg: 3,
	md: 3,
	sm: 2,
	xs: 1
}, y = /*#__PURE__*/ _.createContext(null), b = (e) => a(e).map((e) => ({
	...e?.props,
	key: e.key
}));
function x(e, t, n) {
	let r = _.useMemo(() => t || b(n), [t, n]);
	return _.useMemo(() => r.map(({ span: t, ...n }) => t === "filled" ? {
		...n,
		filled: !0
	} : {
		...n,
		span: l(t) ? t : h(e, t)
	}), [r, e]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/descriptions/hooks/useRow.js
function S(e, t) {
	let n = [], r = [], i = !1, a = 0;
	return e.filter((e) => e).forEach((e) => {
		let { filled: o, ...s } = e;
		if (o) {
			r.push(s), n.push(r), r = [], a = 0;
			return;
		}
		let c = t - a;
		a += e.span || 1, a >= t ? (a > t ? (i = !0, r.push({
			...s,
			span: c
		})) : r.push(s), n.push(r), r = [], a = 0) : r.push(s);
	}), r.length > 0 && n.push(r), n = n.map((e) => {
		let n = e.reduce((e, t) => e + (t.span || 1), 0);
		if (n < t) {
			let r = e[e.length - 1];
			return r.span = t - (n - (r.span || 1)), e;
		}
		return e;
	}), [n, i];
}
var C = (e, t) => {
	let [n, r] = (0, _.useMemo)(() => S(t, e), [t, e]);
	return n;
}, w = (e) => e.children, T = (e) => {
	let { itemPrefixCls: t, component: r, span: i, className: a, style: o, labelStyle: c, contentStyle: l, bordered: u, label: f, content: p, colon: m, type: h, styles: g, classNames: v } = e, b = r, { classNames: x, styles: S } = _.useContext(y), [C, w] = s([x, v], [S, g], { props: e }), T = {
		...c,
		...w.label
	}, E = {
		...l,
		...w.content
	};
	return u ? /*#__PURE__*/ _.createElement(b, {
		colSpan: i,
		style: o,
		className: n(a, {
			[`${t}-item-${h}`]: h === "label" || h === "content",
			[C.label]: C.label && h === "label",
			[C.content]: C.content && h === "content"
		})
	}, d(f) && /*#__PURE__*/ _.createElement("span", { style: T }, f), d(p) && /*#__PURE__*/ _.createElement("span", { style: E }, p)) : /*#__PURE__*/ _.createElement(b, {
		className: n(`${t}-item`, a),
		style: o,
		colSpan: i
	}, /*#__PURE__*/ _.createElement("div", { className: `${t}-item-container` }, d(f) && /*#__PURE__*/ _.createElement("span", {
		style: T,
		className: n(`${t}-item-label`, C.label, { [`${t}-item-no-colon`]: !m })
	}, f), d(p) && /*#__PURE__*/ _.createElement("span", {
		style: E,
		className: n(`${t}-item-content`, C.content)
	}, p)));
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/descriptions/Row.js
function E(e, { colon: t, prefixCls: n, bordered: r }, { component: i, type: a, showLabel: o, showContent: s, labelStyle: c, contentStyle: l, styles: u }) {
	return e.map(({ label: e, children: d, prefixCls: f = n, className: p, style: m, labelStyle: h, contentStyle: g, span: v = 1, key: y, styles: b, classNames: x }, S) => typeof i == "string" ? /*#__PURE__*/ _.createElement(T, {
		key: `${a}-${y || S}`,
		className: p,
		style: m,
		classNames: x,
		styles: {
			label: {
				...c,
				...u?.label,
				...h,
				...b?.label
			},
			content: {
				...l,
				...u?.content,
				...g,
				...b?.content
			}
		},
		span: v,
		colon: t,
		component: i,
		itemPrefixCls: f,
		bordered: r,
		label: o ? e : null,
		content: s ? d : null,
		type: a
	}) : [/*#__PURE__*/ _.createElement(T, {
		key: `label-${y || S}`,
		className: p,
		style: {
			...c,
			...u?.label,
			...m,
			...h,
			...b?.label
		},
		span: 1,
		colon: t,
		component: i[0],
		itemPrefixCls: f,
		bordered: r,
		label: e,
		type: "label"
	}), /*#__PURE__*/ _.createElement(T, {
		key: `content-${y || S}`,
		className: p,
		style: {
			...l,
			...u?.content,
			...m,
			...g,
			...b?.content
		},
		span: v * 2 - 1,
		component: i[1],
		itemPrefixCls: f,
		bordered: r,
		content: d,
		type: "content"
	})]);
}
var D = (e) => {
	let t = _.useContext(y), { prefixCls: n, vertical: r, row: i, index: a, bordered: o } = e;
	return r ? /*#__PURE__*/ _.createElement(_.Fragment, null, /*#__PURE__*/ _.createElement("tr", {
		key: `label-${a}`,
		className: `${n}-row`
	}, E(i, e, {
		component: "th",
		type: "label",
		showLabel: !0,
		...t
	})), /*#__PURE__*/ _.createElement("tr", {
		key: `content-${a}`,
		className: `${n}-row`
	}, E(i, e, {
		component: "td",
		type: "content",
		showContent: !0,
		...t
	}))) : /*#__PURE__*/ _.createElement("tr", {
		key: a,
		className: `${n}-row`
	}, E(i, e, {
		component: o ? ["th", "td"] : "td",
		type: "item",
		showLabel: !0,
		showContent: !0,
		...t
	}));
}, O = (e) => {
	let { componentCls: t, labelBg: n } = e;
	return { [`&${t}-bordered`]: {
		[`> ${t}-view`]: {
			border: `${i(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
			"> table": { tableLayout: "auto" },
			[`${t}-row`]: {
				borderBottom: `${i(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
				"&:first-child": { "> th:first-child, > td:first-child": { borderStartStartRadius: e.borderRadiusLG } },
				"&:last-child": {
					borderBottom: "none",
					"> th:first-child, > td:first-child": { borderEndStartRadius: e.borderRadiusLG }
				},
				[`> ${t}-item-label, > ${t}-item-content`]: {
					padding: `${i(e.padding)} ${i(e.paddingLG)}`,
					borderInlineEnd: `${i(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
					"&:last-child": { borderInlineEnd: "none" }
				},
				[`> ${t}-item-label`]: {
					color: e.colorTextSecondary,
					backgroundColor: n,
					"&::after": { display: "none" }
				}
			}
		},
		[`&${t}-medium`]: { [`${t}-row`]: { [`> ${t}-item-label, > ${t}-item-content`]: { padding: `${i(e.paddingSM)} ${i(e.paddingLG)}` } } },
		[`&${t}-small`]: { [`${t}-row`]: { [`> ${t}-item-label, > ${t}-item-content`]: { padding: `${i(e.paddingXS)} ${i(e.padding)}` } } }
	} };
}, k = (e) => {
	let { componentCls: t, extraColor: n, itemPaddingBottom: r, itemPaddingEnd: a, colonMarginRight: o, colonMarginLeft: s, titleMarginBottom: c } = e;
	return { [t]: {
		...p(e),
		...O(e),
		"&-rtl": { direction: "rtl" },
		[`${t}-header`]: {
			display: "flex",
			alignItems: "center",
			marginBottom: c
		},
		[`${t}-title`]: {
			...f,
			flex: "auto",
			color: e.titleColor,
			fontWeight: e.fontWeightStrong,
			fontSize: e.fontSizeLG,
			lineHeight: e.lineHeightLG
		},
		[`${t}-extra`]: {
			marginInlineStart: "auto",
			color: n,
			fontSize: e.fontSize
		},
		[`${t}-view`]: {
			width: 0,
			minWidth: "100%",
			borderRadius: e.borderRadiusLG,
			table: {
				width: "100%",
				tableLayout: "fixed",
				borderCollapse: "collapse"
			}
		},
		[`${t}-row`]: {
			"> th, > td": {
				paddingBottom: r,
				paddingInlineEnd: a
			},
			"> th:last-child, > td:last-child": { paddingInlineEnd: 0 },
			"&:last-child": {
				borderBottom: "none",
				"> th, > td": { paddingBottom: 0 }
			}
		},
		[`${t}-item-label`]: {
			color: e.labelColor,
			fontWeight: "normal",
			fontSize: e.fontSize,
			lineHeight: e.lineHeight,
			textAlign: "start",
			"&::after": {
				content: "\":\"",
				position: "relative",
				top: -.5,
				marginInline: `${i(s)} ${i(o)}`
			},
			[`&${t}-item-no-colon::after`]: { content: "\"\"" }
		},
		[`${t}-item-no-label`]: { "&::after": {
			margin: 0,
			content: "\"\""
		} },
		[`${t}-item-content`]: {
			display: "table-cell",
			flex: 1,
			color: e.contentColor,
			fontSize: e.fontSize,
			lineHeight: e.lineHeight,
			wordBreak: "break-word",
			overflowWrap: "break-word"
		},
		[`${t}-item`]: {
			paddingBottom: 0,
			verticalAlign: "top",
			"&-container": {
				display: "flex",
				[`${t}-item-label`]: {
					display: "inline-flex",
					alignItems: "baseline"
				},
				[`${t}-item-content`]: {
					display: "inline-flex",
					alignItems: "baseline",
					minWidth: "1em"
				}
			}
		},
		"&-medium": { [`${t}-row`]: { "> th, > td": { paddingBottom: e.paddingSM } } },
		"&-small": { [`${t}-row`]: { "> th, > td": { paddingBottom: e.paddingXS } } }
	} };
}, A = m("Descriptions", (e) => k(o(e, {})), (e) => ({
	labelBg: e.colorFillAlter,
	labelColor: e.colorTextTertiary,
	titleColor: e.colorText,
	titleMarginBottom: e.fontSizeSM * e.lineHeightSM,
	itemPaddingBottom: e.padding,
	itemPaddingEnd: e.padding,
	colonMarginRight: e.marginXS,
	colonMarginLeft: e.marginXXS / 2,
	contentColor: e.colorText,
	extraColor: e.colorText
})), j = /* @__PURE__ */ e({
	DescriptionsContext: () => y,
	default: () => M
}), M = (e) => {
	let { prefixCls: t, title: r, extra: i, column: a, colon: o = !0, bordered: d, layout: f, children: p, className: m, rootClassName: b, style: S, size: w, labelStyle: T, contentStyle: E, styles: O, items: k, classNames: j, ...M } = e, { getPrefixCls: N, direction: P, className: F, style: I, classNames: L, styles: R } = c("descriptions"), z = N("descriptions", t), B = g(), V = _.useMemo(() => l(a) ? a : h(B, a) ?? h(B, v) ?? 3, [B, a]), H = x(B, k, p), U = u(w), W = C(V, H), [G, K] = A(z), q = {
		...e,
		column: V,
		items: H,
		size: U
	}, [J, Y] = s([L, j], [R, O], { props: q }), X = _.useMemo(() => ({
		labelStyle: T,
		contentStyle: E,
		styles: {
			label: Y.label,
			content: Y.content
		},
		classNames: {
			label: J.label,
			content: J.content
		}
	}), [
		T,
		E,
		Y.label,
		Y.content,
		J.label,
		J.content
	]);
	return /*#__PURE__*/ _.createElement(y.Provider, { value: X }, /*#__PURE__*/ _.createElement("div", {
		className: n(z, F, J.root, {
			[`${z}-medium`]: U === "medium" || U === "middle",
			[`${z}-small`]: U === "small",
			[`${z}-bordered`]: !!d,
			[`${z}-rtl`]: P === "rtl"
		}, m, b, G, K),
		style: {
			...I,
			...Y.root,
			...S
		},
		...M
	}, (r || i) && /*#__PURE__*/ _.createElement("div", {
		className: n(`${z}-header`, J.header),
		style: Y.header
	}, r && /*#__PURE__*/ _.createElement("div", {
		className: n(`${z}-title`, J.title),
		style: Y.title
	}, r), i && /*#__PURE__*/ _.createElement("div", {
		className: n(`${z}-extra`, J.extra),
		style: Y.extra
	}, i)), /*#__PURE__*/ _.createElement("div", { className: `${z}-view` }, /*#__PURE__*/ _.createElement("table", null, /*#__PURE__*/ _.createElement("tbody", null, W.map((e, t) => /*#__PURE__*/ _.createElement(D, {
		key: t,
		index: t,
		colon: o,
		prefixCls: z,
		vertical: f === "vertical",
		bordered: d,
		row: e
	})))))));
};
M.Item = w;
//#endregion
export { j as t };
