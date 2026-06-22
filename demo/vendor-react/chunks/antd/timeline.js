globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Mt as n, Nt as r, On as i, kt as a, rt as o, wn as s, yt as c } from "../shared/core.js";
import { Jn as l, Sr as u, Xn as d, Zn as f, or as p, pr as m, sr as h } from "../shared/antd-core.js";
import { i as g, r as _, t as v } from "./steps.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/timeline/style/horizontal.js
var y = /* @__PURE__ */ t(i()), b = (e) => {
	let { componentCls: t, fontHeight: n, antCls: r, paddingXS: i } = e, [o, s] = p(r, "cmp-steps"), [c, l] = p(r, "timeline"), u = `${t}-item`;
	return { [`${t}-horizontal`]: {
		[o("title-vertical-row-gap")]: i,
		[c("content-height")]: a(n),
		alignItems: "stretch",
		[`&${t}-layout-alternate`]: { [u]: {
			[`${u}-wrapper`]: {
				[c("alternate-content-offset")]: `calc(${l("content-height")} + ${s("title-vertical-row-gap")} * 2 + ${s("icon-size-max")})`,
				height: `calc(${l("content-height")} * 2 + ${s("title-vertical-row-gap")} * 2 + ${s("icon-size-max")})`
			},
			[`${u}-icon`]: { position: "absolute" },
			[`${u}-icon, ${u}-rail`]: {
				position: "absolute",
				top: "50%",
				transform: "translateY(-50%)",
				margin: 0
			},
			[`${u}-title, ${u}-subtitle, ${u}-content`]: {
				whiteSpace: "nowrap",
				maxWidth: "unset"
			},
			[`${u}-title`]: {
				position: "absolute",
				left: {
					_skip_check_: !0,
					value: "50%"
				},
				transform: "translateX(-50%)"
			},
			[`${u}-content`]: {
				position: "absolute",
				left: {
					_skip_check_: !0,
					value: "50%"
				},
				transform: "translateX(-50%)"
			},
			"&-placement-start": {
				[`${u}-title`]: { bottom: l("alternate-content-offset") },
				[`${u}-content`]: { top: l("alternate-content-offset") }
			},
			"&-placement-end": {
				[`${u}-title`]: { top: l("alternate-content-offset") },
				[`${u}-content`]: { bottom: l("alternate-content-offset") }
			}
		} },
		[`&:not(${t}-layout-alternate)`]: { [`${u}-placement-end`]: {
			display: "flex",
			alignItems: "flex-end",
			[`${u}-wrapper`]: {
				flex: "auto",
				flexDirection: "column-reverse"
			},
			[`${u}-rail`]: {
				top: "auto",
				bottom: s("horizontal-rail-margin"),
				transform: "translateY(50%)"
			}
		} }
	} };
}, x = (e) => {
	let { componentCls: t, tailColor: n, fontHeight: r, dotSize: i, dotBg: a, dotBorderWidth: o, fontSize: s, lineHeight: c, colorText: l, tailWidth: u, colorPrimary: d, colorError: f, colorSuccess: h, colorTextDisabled: g, antCls: _ } = e, v = `${t}-item`, [y, b] = p(_, "cmp-steps");
	return { [t]: [{
		...m(e),
		[v]: {
			[y("title-horizontal-title-height")]: r,
			[y("vertical-rail-margin")]: "0px",
			[y("title-horizontal-rail-gap")]: "0px",
			[y("icon-dot-size-origin")]: b("icon-size-active"),
			[y("icon-dot-size-custom")]: i,
			[y("item-icon-dot-bg-color-origin")]: b("item-icon-dot-bg-color"),
			[y("item-icon-dot-bg-color-custom")]: a,
			[y("icon-size")]: b("icon-dot-size-custom", b("icon-dot-size-origin")),
			[`${v}-icon`]: {
				[y("dot-icon-border-width")]: o,
				[y("dot-icon-size")]: b("icon-size"),
				[y("item-icon-dot-bg-color")]: b("item-icon-dot-bg-color-custom", b("item-icon-dot-bg-color-origin"))
			},
			[`${v}-title`]: {
				fontSize: s,
				lineHeight: c
			},
			[`${v}-content`]: { color: l },
			[`${v}-rail`]: {
				[y("item-solid-line-color")]: n,
				[y("rail-size")]: u
			}
		}
	}, {
		[v]: { [y("item-process-rail-line-style")]: "dotted" },
		[`${v}${v}${v}-color`]: {
			"&-blue": { [y("item-icon-dot-color")]: d },
			"&-red": { [y("item-icon-dot-color")]: f },
			"&-green": { [y("item-icon-dot-color")]: h },
			"&-gray": { [y("item-icon-dot-color")]: g }
		}
	}] };
}, S = (e) => {
	let { calc: t, componentCls: n, itemPaddingBottom: r, margin: i, antCls: a } = e, o = `${n}-item`, [, s] = p(a, "cmp-steps"), [c, l] = p(a, "timeline");
	return { [`${n}:not(${n}-horizontal)`]: {
		[c("head-span")]: "12",
		[c("head-span-ptg")]: `calc(${l("head-span")} / 24 * 100%)`,
		[`&${n}-layout-alternate`]: { [o]: {
			[c("alternate-gap")]: t(i).mul(2).add(s("dot-icon-size")).equal(),
			minHeight: "auto",
			paddingBottom: r,
			[`${o}-icon, ${o}-rail`]: {
				position: "absolute",
				insetInlineStart: l("head-span-ptg")
			},
			[`${o}-icon`]: { marginInlineStart: `calc(${s("icon-size")} / -2)` },
			[`${o}-section`]: {
				display: "flex",
				flexWrap: "nowrap",
				gap: l("alternate-gap")
			},
			[`${o}-header`]: {
				textAlign: "end",
				flexDirection: "column",
				alignItems: "stretch",
				flex: `1 1 calc(${l("head-span-ptg")} - ${l("alternate-gap")} / 2)`
			},
			[`${o}-content`]: {
				textAlign: "start",
				flex: `1 1 calc(100% - ${l("head-span-ptg")} - ${l("alternate-gap")} / 2)`
			},
			"&-placement-end": {
				[`${o}-header`]: {
					textAlign: "start",
					order: 1
				},
				[`${o}-content`]: { textAlign: "end" },
				[`${o}-icon, ${o}-rail`]: { insetInlineStart: `calc(100% - ${l("head-span-ptg")})` }
			}
		} },
		[`&:not(${n}-layout-alternate)`]: { [`${o}-placement-end`]: {
			textAlign: "end",
			[`${o}-icon`]: { order: 1 },
			[`${o}-rail`]: {
				insetInlineStart: "auto",
				insetInlineEnd: `calc(${s("icon-size")} / 2)`,
				marginInlineEnd: `calc(${s("rail-size")} / -2)`
			}
		} }
	} };
}, C = h("Timeline", (e) => {
	let t = c(e, {
		itemHeadSize: 10,
		customHeadPaddingVertical: e.paddingXXS,
		paddingInlineEnd: 2
	});
	return [
		x(t),
		S(t),
		b(t)
	];
}, (e) => ({
	tailColor: e.colorSplit,
	tailWidth: e.lineWidthBold,
	dotBorderWidth: e.lineWidthBold,
	dotBg: void 0,
	dotSize: void 0,
	itemPaddingBottom: e.padding * 1.25
})), w = (e, t, n, i, a, c, l) => {
	let u = `${t}-item`, [d] = p(e, "cmp-steps"), f = y.useMemo(() => Array.isArray(i) ? i : s(a).map((e) => ({ ...e.props })), [i, a]);
	return y.useMemo(() => {
		let e = f.map((e, t) => {
			let { label: i, children: a, title: s, content: c, color: l, className: f, style: p, icon: m, dot: h, placement: g, position: _, loading: v, ...b } = e, x = p, S = f;
			l && ([
				"blue",
				"red",
				"green",
				"gray"
			].includes(l) ? S = r(f, `${u}-color-${l}`) : x = {
				[d("item-icon-dot-color")]: l,
				...p
			});
			let C = g ?? _ ?? (n === "alternate" ? t % 2 == 0 ? "start" : "end" : n);
			S = r(S, `${u}-placement-${C}`);
			let w = m ?? h;
			return !w && v && (w = /*#__PURE__*/ y.createElement(o, null)), {
				...b,
				title: s ?? i,
				content: c ?? a,
				style: x,
				className: S,
				icon: w,
				status: v ? "process" : "finish"
			};
		});
		return c && e.push({
			icon: l ?? /*#__PURE__*/ y.createElement(o, null),
			content: c,
			status: "process"
		}), e;
	}, [
		f,
		c,
		n,
		u,
		d,
		l
	]);
}, T = {
	rootComponent: "ol",
	itemComponent: "li"
}, E = (e) => {
	let { getPrefixCls: t, direction: i, className: a, style: o, classNames: s, styles: c } = u("timeline"), { prefixCls: m, className: h, style: b, classNames: x, styles: S, variant: E = "outlined", mode: D, orientation: O = "vertical", titleSpan: k, items: A, children: j, reverse: M, pending: N, pendingDot: P, ...F } = e, I = t(), L = t("timeline", m), [R, z] = C(L), [B] = p(I, "timeline"), V = y.useMemo(() => ({
		item: `${L}-item`,
		itemTitle: `${L}-item-title`,
		itemIcon: `${L}-item-icon`,
		itemContent: `${L}-item-content`,
		itemRail: `${L}-item-rail`,
		itemWrapper: `${L}-item-wrapper`,
		itemSection: `${L}-item-section`,
		itemHeader: `${L}-item-header`
	}), [L]), H = y.useMemo(() => D === "left" ? "start" : D === "right" ? "end" : [
		"alternate",
		"start",
		"end"
	].includes(D) ? D : "start", [D]), U = w(I, L, H, A, j, N, P), W = y.useMemo(() => M ? n(U).reverse() : U, [M, U]), G = {
		...e,
		variant: E,
		mode: H,
		orientation: O,
		items: W
	}, [K, q] = l([
		V,
		s,
		x
	], [c, S], { props: G }), J = y.useMemo(() => ({ railFollowPrevStatus: M }), [M]), Y = y.useMemo(() => H === "alternate" || O === "vertical" && W.some((e) => e.title), [
		W,
		H,
		O
	]), X = {
		...o,
		...b
	};
	return d(k) && H !== "alternate" && (f(k) ? X[B("head-span")] = k : X[B("head-span-ptg")] = k), /*#__PURE__*/ y.createElement(_.Provider, { value: T }, /*#__PURE__*/ y.createElement(g.Provider, { value: J }, /*#__PURE__*/ y.createElement(v, {
		...F,
		className: r(L, a, h, R, z, {
			[`${L}-${O}`]: O === "horizontal",
			[`${L}-layout-alternate`]: Y,
			[`${L}-rtl`]: i === "rtl"
		}),
		style: X,
		classNames: K,
		styles: q,
		variant: E,
		orientation: O,
		type: "dot",
		items: W,
		current: W.length - 1
	})));
};
E.Item = () => {};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/timeline/index.js
var D = /* @__PURE__ */ e({ default: () => O }), O = E;
//#endregion
export { D as t };
