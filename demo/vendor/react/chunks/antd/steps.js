globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Ht as n, Jt as r, Nt as i, ct as a, et as o, kn as s, kt as c, yt as l } from "../shared/core.js";
import { Jn as u, Sr as d, Yn as f, en as p, gr as m, nn as h, or as g, pr as _, sr as v, tn as y } from "../shared/antd-core.js";
import { o as b, u as x } from "./avatar.js";
//#region node_modules/.pnpm/@rc-component+steps@1.2.2_r_f330360365f5c144a953a2e7cc8f5758/node_modules/@rc-component/steps/es/Rail.js
var S = /* @__PURE__ */ t(s());
function C(e) {
	let { prefixCls: t, className: n, style: r, status: a } = e, o = `${t}-rail`;
	return /*#__PURE__*/ S.createElement("div", {
		className: i(o, `${o}-${a}`, n),
		style: r
	});
}
//#endregion
//#region node_modules/.pnpm/@rc-component+steps@1.2.2_r_f330360365f5c144a953a2e7cc8f5758/node_modules/@rc-component/steps/es/UnstableContext.js
var w = /*#__PURE__*/ S.createContext({}), T = /*#__PURE__*/ S.createContext(null);
//#endregion
//#region node_modules/.pnpm/@rc-component+steps@1.2.2_r_f330360365f5c144a953a2e7cc8f5758/node_modules/@rc-component/steps/es/StepIcon.js
function E() {
	return E = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, E.apply(this, arguments);
}
var D = /*#__PURE__*/ S.createContext({}), O = /*#__PURE__*/ S.forwardRef((e, t) => {
	let { className: r, style: a, children: o, ...s } = e, { prefixCls: c, classNames: l, styles: u } = S.useContext(T), { className: d, style: f } = S.useContext(D), p = `${c}-item`;
	return /*#__PURE__*/ S.createElement("div", E({}, n(s, !1), {
		ref: t,
		className: i(`${p}-icon`, l.itemIcon, d, r),
		style: {
			...u.itemIcon,
			...f,
			...a
		}
	}), o);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+steps@1.2.2_r_f330360365f5c144a953a2e7cc8f5758/node_modules/@rc-component/steps/es/Step.js
function k() {
	return k = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, k.apply(this, arguments);
}
function A(e) {
	return e != null;
}
function j(e) {
	let { prefixCls: t, classNames: n, styles: a, data: o, last: s, nextStatus: c, active: l, index: u, itemRender: d, iconRender: f, itemWrapperRender: p, onClick: m } = e, h = `${t}-item`, { railFollowPrevStatus: g } = S.useContext(w), { ItemComponent: _ } = S.useContext(T), { onClick: v, title: y, subTitle: b, content: x, description: E, disabled: j, icon: M, status: N, className: ee, style: te, classNames: P = {}, styles: F = {}, ...ne } = o, I = x ?? E, L = {
		item: {
			...o,
			content: I
		},
		index: u,
		active: l
	}, R = !!(m || v) && !j, z = {};
	R && (z.role = "button", z.tabIndex = 0, z.onClick = (e) => {
		v?.(e), m(u);
	}, z.onKeyDown = (e) => {
		let { which: t } = e;
		(t === r.ENTER || t === r.SPACE) && m(u);
	});
	let B = N || "wait", V = A(y), H = A(b), U = i(h, `${h}-${B}`, {
		[`${h}-custom`]: M,
		[`${h}-active`]: l,
		[`${h}-disabled`]: j === !0,
		[`${h}-empty-header`]: !V && !H
	}, ee, n.item, P.root), W = /*#__PURE__*/ S.createElement(O, null);
	f && (W = f(W, {
		...L,
		components: { Icon: O }
	}));
	let G = /*#__PURE__*/ S.createElement("div", {
		className: i(`${h}-wrapper`, n.itemWrapper, P.wrapper),
		style: {
			...a.itemWrapper,
			...F.wrapper
		}
	}, /*#__PURE__*/ S.createElement(D.Provider, { value: {
		className: P.icon,
		style: F.icon
	} }, W), /*#__PURE__*/ S.createElement("div", {
		className: i(`${h}-section`, n.itemSection, P.section),
		style: {
			...a.itemSection,
			...F.section
		}
	}, /*#__PURE__*/ S.createElement("div", {
		className: i(`${h}-header`, n.itemHeader, P.header),
		style: {
			...a.itemHeader,
			...F.header
		}
	}, V && /*#__PURE__*/ S.createElement("div", {
		className: i(`${h}-title`, n.itemTitle, P.title),
		style: {
			...a.itemTitle,
			...F.title
		}
	}, y), H && /*#__PURE__*/ S.createElement("div", {
		title: typeof b == "string" ? b : void 0,
		className: i(`${h}-subtitle`, n.itemSubtitle, P.subtitle),
		style: {
			...a.itemSubtitle,
			...F.subtitle
		}
	}, b), !s && /*#__PURE__*/ S.createElement(C, {
		prefixCls: h,
		className: i(n.itemRail, P.rail),
		style: {
			...a.itemRail,
			...F.rail
		},
		status: g ? N : c
	})), A(I) && /*#__PURE__*/ S.createElement("div", {
		className: i(`${h}-content`, n.itemContent, P.content),
		style: {
			...a.itemContent,
			...F.content
		}
	}, I))), K = /*#__PURE__*/ S.createElement(_, k({}, ne, z, {
		className: U,
		style: {
			...a.item,
			...F.root,
			...te
		}
	}), p ? p(G) : G);
	return d && (K = d(K, L) || null), K;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+steps@1.2.2_r_f330360365f5c144a953a2e7cc8f5758/node_modules/@rc-component/steps/es/Steps.js
function M() {
	return M = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, M.apply(this, arguments);
}
var N = {};
function ee(e) {
	let { prefixCls: t = "rc-steps", style: n, className: r, classNames: a = N, styles: o = N, rootClassName: s, orientation: c, titlePlacement: l, components: u, status: d = "process", current: f = 0, initial: p = 0, onChange: m, items: h, iconRender: g, itemRender: _, itemWrapperRender: v, ...y } = e, b = c === "vertical", x = b ? "vertical" : "horizontal", C = !b && l === "vertical" ? "vertical" : "horizontal", w = i(t, `${t}-${x}`, `${t}-title-${C}`, s, r, a.root), E = S.useMemo(() => (h || []).filter(Boolean), [h]), D = S.useMemo(() => E.map(({ status: e }, t) => {
		let n = p + t;
		return e || (n === f ? d : n < f ? "finish" : "wait");
	}), [
		E,
		d,
		f,
		p
	]), O = (e) => {
		m && f !== e && m(e);
	}, { root: k = "div", item: A = "div" } = u || {}, ee = S.useMemo(() => ({
		prefixCls: t,
		classNames: a,
		styles: o,
		ItemComponent: A
	}), [
		t,
		a,
		o,
		A
	]), te = (e, n) => {
		let r = p + n, i = D[n], s = D[n + 1], c = {
			...e,
			status: i
		};
		return /*#__PURE__*/ S.createElement(j, {
			key: r,
			prefixCls: t,
			classNames: a,
			styles: o,
			data: c,
			nextStatus: s,
			active: r === f,
			index: r,
			last: E.length - 1 === n,
			iconRender: g,
			itemRender: _,
			itemWrapperRender: v,
			onClick: m && O
		});
	};
	return /*#__PURE__*/ S.createElement(k, M({
		className: w,
		style: {
			...n,
			...o?.root
		}
	}, y), /*#__PURE__*/ S.createElement(T.Provider, { value: ee }, E.map(te)));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+steps@1.2.2_r_f330360365f5c144a953a2e7cc8f5758/node_modules/@rc-component/steps/es/index.js
var te = ee, P = /*#__PURE__*/ S.createContext(null), F = (e) => {
	let { prefixCls: t } = e;
	return /*#__PURE__*/ S.createElement("svg", {
		className: `${t}-panel-arrow`,
		viewBox: "0 0 100 100",
		xmlns: "http://www.w3.org/2000/svg",
		preserveAspectRatio: "none"
	}, /*#__PURE__*/ S.createElement("title", null, "Arrow"), /*#__PURE__*/ S.createElement("path", { d: "M 0 0 L 100 50 L 0 100" }));
}, ne = (e) => {
	let { prefixCls: t, rootPrefixCls: n, children: r, percent: a } = e, o = `${t}-item-progress-icon`, s = `${o}-circle`, [, c] = g(n, "cmp-steps"), l = `calc(${c("progress-radius")} * 2 * ${Math.PI * a / 100}) 9999`;
	return /*#__PURE__*/ S.createElement(S.Fragment, null, /*#__PURE__*/ S.createElement("svg", {
		className: `${o}-svg`,
		viewBox: "0 0 100 100",
		width: "100%",
		height: "100%",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-valuemax": 100,
		"aria-valuemin": 0,
		"aria-valuenow": a
	}, /*#__PURE__*/ S.createElement("title", null, "Progress"), /*#__PURE__*/ S.createElement("circle", { className: i(s, `${s}-rail`) }), /*#__PURE__*/ S.createElement("circle", {
		className: i(s, `${s}-ptg`),
		strokeDasharray: l,
		transform: "rotate(-90 50 50)"
	})), r);
}, I = (e) => {
	let { componentCls: t, antCls: n } = e, r = `${t}-item`, [i, a] = g(n, "cmp-steps");
	return { [`${t}-horizontal`]: { [`> ${r}`]: {
		flex: "1 1 auto",
		minWidth: e.iconSize,
		[`${r}-rail`]: {
			[i("horizontal-rail-margin")]: `calc(${a("icon-size-max")} / 2 + ${a("item-wrapper-padding-top")})`,
			position: "static",
			marginTop: a("horizontal-rail-margin"),
			width: "auto",
			borderBlockStartWidth: a("rail-size"),
			flex: 1,
			minWidth: 0,
			alignSelf: "flex-start",
			transform: "translateY(-50%)"
		}
	} } };
}, L = (e) => {
	let { componentCls: t, customIconFontSize: n, motionDurationSlow: r, iconSize: i, lineWidth: a, lineType: o, antCls: s } = e, c = `${t}-item`, [l, u] = g(s, "cmp-steps");
	return { [t]: {
		[l("icon-size")]: i,
		[l("icon-border-width")]: a,
		[`${c}-icon`]: {
			width: u("icon-size"),
			height: u("icon-size"),
			margin: 0,
			flex: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: e.iconFontSize,
			fontFamily: e.fontFamily,
			lineHeight: u("icon-size"),
			textAlign: "center",
			borderRadius: u("icon-size"),
			border: `${u("icon-border-width")} ${o} transparent`,
			transition: [
				"background-color",
				"border",
				"color",
				"inset",
				"transform"
			].map((e) => `${e} ${r}`).join(", "),
			zIndex: 1
		},
		[`${c}-custom ${c}-icon`]: {
			background: "none",
			border: 0,
			fontSize: n
		}
	} };
}, R = (e) => {
	let { componentCls: t, inlineDotSize: n, paddingXS: r, lineWidth: i, antCls: a, calc: o } = e, s = o(r).add(i).equal(), c = `${t}-item`, [l, u] = g(a, "cmp-steps");
	return { [`${t}-inline`]: {
		[l("items-offset")]: "0",
		[l("item-wrapper-padding-top")]: s,
		display: "inline-flex",
		"&:before": {
			content: "\"\"",
			flex: u("items-offset")
		},
		[c]: {
			[l("title-vertical-row-gap")]: r,
			[l("icon-size")]: n,
			[l("icon-size-active")]: n,
			[l("title-font-size")]: e.fontSizeSM,
			[l("title-line-height")]: e.lineHeightSM,
			[l("item-title-color")]: e.colorTextSecondary,
			[l("subtitle-font-size")]: e.fontSizeSM,
			[l("subtitle-line-height")]: e.lineHeightSM,
			[l("item-subtitle-color")]: e.colorTextQuaternary,
			[l("rail-size")]: e.lineWidth,
			[l("title-horizontal-rail-gap")]: "0px",
			flex: 1,
			"&-wrapper": {
				paddingInline: e.paddingXXS,
				marginInline: e.calc(e.marginXXS).div(2).equal(),
				borderRadius: e.borderRadiusSM,
				cursor: "pointer",
				transition: `background-color ${e.motionDurationMid}`,
				"&:hover": { background: e.controlItemBgHover }
			},
			"&-icon": { [`${c}-icon-dot`]: { "&:after": { display: "none" } } },
			"&-title": {
				fontWeight: "normal",
				whiteSpace: "nowrap"
			},
			"&-content": { display: "none" }
		}
	} };
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/steps/style/util.js
function z(e) {
	return (e || "--ant-not-exist").replace(/var\((.*)\)/, "$1");
}
var B = (e, t, n) => {
	let { calc: r, componentCls: i, descriptionMaxWidth: a, antCls: o } = e, s = `${i}-item`, [, c] = g(o, "cmp-steps");
	return { [`@container style(${z(a)})`]: [{
		[`${s}-icon`]: { marginInlineStart: r(a).sub(c("icon-size")).div(2).equal() },
		[`${s}-rail`]: {
			width: "auto",
			insetInlineStart: r(a).add(c("icon-size")).div(2).add(t).equal(),
			insetInlineEnd: r(a).sub(c("icon-size")).div(2).sub(t).mul(-1).equal()
		}
	}, n] };
}, V = (e) => {
	let { componentCls: t, descriptionMaxWidth: n, marginXS: r, fontHeightLG: i, margin: a, paddingSM: o, marginXXS: s, antCls: c, calc: l } = e, u = `${t}-item`, [d, f] = g(c, "cmp-steps");
	return {
		[t]: {
			[d("icon-size-max")]: `max(${f("icon-size")}, ${f("icon-size-active", f("icon-size"))})`,
			[`${u}-icon`]: { marginBlockStart: `calc((${f("heading-height")} - ${f("icon-size")}) / 2)` }
		},
		[`${t}-title-horizontal`]: {
			[d("title-horizontal-item-margin")]: a,
			[d("title-horizontal-rail-margin")]: a,
			[d("title-horizontal-title-height")]: i,
			[d("heading-height")]: `max(${f("icon-size")}, ${f("title-horizontal-title-height")})`,
			[`&${t}-horizontal, &${t}-horizontal-alternate`]: {
				[`${u}:not(:first-child)`]: { marginInlineStart: f("title-horizontal-item-margin") },
				[`${u}:last-child`]: { flex: "0 1 auto" },
				[`${u}-wrapper`]: { columnGap: e.marginXS }
			},
			[`&${t}-vertical`]: {
				[`${u}-wrapper`]: { columnGap: e.margin },
				[`${u}-empty-header`]: {
					[`${u}-header`]: { minHeight: "auto" },
					[`${u}-content`]: { marginTop: l(f("heading-height")).sub(e.fontHeight).div(2).equal() }
				}
			},
			[`${u}-section`]: {
				flex: 1,
				minWidth: 0
			},
			[`${u}-header`]: { minHeight: f("heading-height") },
			[`${u}-title`]: { flex: "0 1 auto" },
			[`${u}-content`]: { maxWidth: n },
			[`${u}-subtitle`]: { flex: "0 9999 auto" },
			[`&${t}-horizontal ${u}-rail`]: {
				[d("item-wrapper-padding-top")]: "0px",
				flex: "1 1 0%",
				marginInlineStart: f("title-horizontal-rail-margin")
			}
		},
		[`${t}-title-vertical`]: {
			[d("title-vertical-row-gap")]: o,
			[d("title-horizontal-rail-gap")]: s,
			[d("heading-height")]: f("icon-size-max"),
			[`> ${u}`]: {
				flex: "1 1 0%",
				[`${u}-wrapper`]: {
					flexDirection: "column",
					rowGap: f("title-vertical-row-gap"),
					alignItems: "center"
				},
				[`${u}-section`]: { alignSelf: "stretch" },
				[`${u}-header`]: {
					flexDirection: "column",
					alignItems: "center"
				},
				[`${u}-title, ${u}-subtitle, ${u}-content`]: {
					textAlign: "center",
					maxWidth: "100%"
				},
				[`${u}-subtitle`]: { margin: 0 },
				[`${u}-rail`]: {
					position: "absolute",
					top: 0,
					width: `calc(100% - ${f("icon-size")} - ${f("title-horizontal-rail-gap")} * 2)`,
					insetInlineStart: `calc(50% + ${f("icon-size")} / 2 + ${f("title-horizontal-rail-gap")})`
				}
			},
			...B(e, r, {
				[`${u}:last-child`]: { flex: "none" },
				[`${u}-icon`]: { alignSelf: "flex-start" },
				[`${u}-section`]: { width: n }
			})
		}
	};
}, H = (e) => {
	let { componentCls: t, fontSizeIcon: n, navContentMaxWidth: r, navArrowColor: i, colorPrimary: a, motionDurationSlow: o, antCls: s, calc: l } = e, u = `${t}-item`, d = a, [f, p] = g(s, "cmp-steps");
	return { [`${t}${t}-navigation`]: {
		[u.repeat(4)]: {
			display: "flex",
			justifyContent: "center",
			position: "relative",
			flex: 1,
			marginInlineStart: 0,
			[`${u}-wrapper`]: { paddingBlock: e.paddingSM },
			[`${u}-section`]: { maxWidth: r },
			[`${u}-rail`]: { display: "none" },
			"&:before": {
				position: "absolute",
				display: "block",
				backgroundColor: d,
				transition: `all ${o}`,
				transitionTimingFunction: "ease-out",
				content: "\"\""
			},
			"&:not(:last-child):after": {
				position: "absolute",
				display: "block",
				borderTop: `${c(e.lineWidth)} ${e.lineType} ${i}`,
				borderBottom: "none",
				borderInlineStart: "none",
				borderInlineEnd: `${c(e.lineWidth)} ${e.lineType} ${i}`,
				content: "\"\""
			},
			[`&${u}-active`]: {
				[f("item-content-active-color")]: p("item-content-color"),
				[f("item-icon-active-bg-color")]: p("item-icon-bg-color"),
				[f("item-icon-active-border-color")]: p("item-icon-border-color"),
				[f("item-icon-active-text-color")]: p("item-icon-text-color")
			}
		},
		[`&${t}-horizontal`]: { [u]: {
			"&:before": {
				bottom: 0,
				insetInlineStart: "50%",
				width: 0,
				height: e.lineWidthBold
			},
			[`&${u}-active:before`]: {
				insetInlineStart: 0,
				width: "100%"
			},
			"&:not(:last-child):after": {
				top: "50%",
				insetInlineStart: l(n).div(2).mul(-1).add("100%").equal(),
				width: n,
				height: n,
				transform: "translateY(-50%) rotate(45deg)"
			}
		} },
		[`&${t}-vertical`]: { [u.repeat(4)]: {
			[`${u}-content`]: { padding: 0 },
			"&:before": {
				insetInlineEnd: 0,
				top: "50%",
				width: e.lineWidthBold,
				height: 0
			},
			[`&${u}-active::before`]: {
				top: 0,
				height: "100%"
			},
			"&:not(:last-child):after": {
				left: {
					_skip_check_: !0,
					value: "50%"
				},
				top: "100%",
				width: l(n).div(3).mul(2).equal(),
				height: l(n).div(3).mul(2).equal(),
				transform: "translateY(-50%) translateX(-50%) rotate(135deg)"
			}
		} }
	} };
}, U = (e) => {
	let { componentCls: t, lineWidthBold: n, borderRadius: r, borderRadiusSM: i, motionDurationMid: a, paddingXS: o, lineType: s, paddingSM: l, antCls: u, calc: d } = e, f = `${t}-item`, [p, m] = g(u, "cmp-steps"), h = `${c(n)} ${s} ${m("panel-border-color")}`;
	return { [`${t}${t}-panel`]: [
		{
			[`${f}-rail`]: { display: "none" },
			[`&${t}-horizontal`]: {
				alignItems: "stretch",
				[f]: {
					flex: 1,
					margin: 0
				}
			}
		},
		{
			"&": {
				[p("panel-padding")]: l,
				[p("item-border-radius")]: r,
				[f]: {
					[p("panel-bg-color")]: m("item-icon-bg-color"),
					[p("panel-border-color")]: m("item-icon-border-color"),
					[p("panel-active-bg-color")]: m("item-icon-active-bg-color"),
					[p("panel-active-border-color")]: m("item-icon-active-border-color"),
					[p("panel-title-height")]: `calc(${m("title-font-size")} * ${m("title-line-height")})`,
					[p("item-base-height")]: d(m("panel-padding")).mul(2).add(m("icon-size")).add(m("panel-title-height")).equal(),
					[p("item-base-width")]: `calc(${m("item-base-height")} * 0.7071)`,
					transition: `background-color ${a}`
				}
			},
			[`${f}-icon`]: { display: "none" },
			[`${f}-header`]: { minHeight: "auto" },
			[`${t}-panel-arrow`]: {
				position: "absolute",
				top: d(n).mul(-1).equal(),
				insetInlineStart: "100%",
				zIndex: 1,
				height: d(n).mul(2).add("100%").equal(),
				width: m("item-base-width"),
				overflow: "visible",
				strokeLinecap: "round",
				path: {
					fill: m("panel-bg-color"),
					stroke: m("panel-border-color"),
					strokeWidth: n,
					vectorEffect: "non-scaling-stroke",
					transition: `fill ${a}`
				}
			},
			[`${f}:last-child ${t}-panel-arrow`]: { display: "none" },
			[f]: {
				padding: m("panel-padding"),
				background: m("panel-bg-color"),
				position: "relative",
				borderBlock: h,
				"&:not(:first-child)": { paddingInlineStart: `calc(${m("panel-padding")} + ${m("item-base-width")})` },
				"&:first-child": {
					borderInlineStart: h,
					borderStartStartRadius: m("item-border-radius"),
					borderEndStartRadius: m("item-border-radius")
				},
				"&:last-child": {
					borderInlineEnd: h,
					borderStartEndRadius: m("item-border-radius"),
					borderEndEndRadius: m("item-border-radius")
				},
				"&-active": {
					background: m("panel-active-bg-color"),
					borderColor: m("panel-active-border-color"),
					[`${t}-panel-arrow`]: { path: {
						fill: m("panel-active-bg-color"),
						stroke: m("panel-active-border-color")
					} },
					[`${f}-title, ${f}-subtitle, ${f}-content`]: { color: m("item-icon-active-text-color") }
				}
			}
		},
		{ [`&${t}-small`]: {
			[p("panel-padding")]: o,
			[p("item-border-radius")]: i
		} },
		{ [`&${t}-filled`]: { [f]: { "&:not(:first-child)": { clipPath: `polygon(${[
			`${c(n)} 0`,
			`calc(100% + ${m("item-base-width")}) 0`,
			`calc(100% + ${m("item-base-width")}) 100%`,
			`${c(n)} 100%`,
			`calc(${m("item-base-width")} + ${c(n)}) 50%`
		].join(",")})` } } } },
		{ [`&${t}-outlined`]: { [`${t}-panel-arrow`]: {
			top: d(n).div(2).mul(-1).equal(),
			height: d(n).add("100%").equal()
		} } }
	] };
}, W = (e) => {
	let { calc: t, antCls: n, componentCls: r, lineWidthBold: i, motionDurationSlow: a } = e, o = `${r}-item`, [s, c] = g(n, "cmp-steps"), l = t(i).add(i).equal();
	return { [`${r}${r}-with-progress`]: {
		[s("item-wrapper-padding-top")]: l,
		[`${o}${o}-process`]: { [`${o}-icon`]: { position: "relative" } },
		[`${o}-progress-icon`]: {
			"&-svg": {
				[s("svg-size")]: t(l).mul(2).add(c("icon-size")).equal(),
				[s("icon-size-ptg-unitless")]: `calc(100 / tan(atan2(${c("svg-size")}, 1px)))`,
				fontSize: c("svg-size"),
				lineHeight: c("icon-size-ptg-unitless"),
				position: "absolute",
				inset: t(l).mul(-1).equal(),
				width: "auto",
				height: "auto"
			},
			"&-circle": {
				lineHeight: c("icon-size-ptg-unitless"),
				strokeWidth: t(c("icon-size-ptg-unitless")).mul(i).equal(),
				[s("progress-radius")]: t(c("svg-size")).sub(i).mul(c("icon-size-ptg-unitless")).div(2).equal(),
				r: c("progress-radius"),
				fill: "none",
				cx: 50,
				cy: 50,
				transition: `all ${a} ease-in-out`,
				"&-rail": { stroke: e.colorSplit },
				"&-ptg": { stroke: e.colorPrimary }
			}
		}
	} };
}, G = (e) => {
	let { componentCls: t, iconSize: n, dotSize: r, dotCurrentSize: i, marginXXS: a, lineWidthBold: o, fontSizeSM: s, antCls: c } = e, l = `${t}-item`, [u, d] = g(c, "cmp-steps");
	return { [`${t}${t}-dot`]: {
		[u("icon-size-active")]: i,
		[u("icon-size")]: r,
		[u("dot-icon-size")]: r,
		[u("dot-icon-border-width")]: o,
		[u("rail-size")]: o,
		[u("icon-border-width")]: o,
		[`${l}-custom ${l}-icon`]: { fontSize: s },
		[`${l}-icon`]: {
			position: "relative",
			"&:after": {
				content: "\"\"",
				width: n,
				height: n,
				display: "block",
				position: "absolute",
				top: "50%",
				left: {
					_skip_check_: !0,
					value: "50%"
				},
				transform: "translate(-50%, -50%)"
			}
		},
		[`${l}-active ${l}-icon`]: { [u("icon-size")]: d("icon-size-active") },
		[`&${t}-horizontal`]: { [`&, &${t}-small`]: B(e, a) }
	} };
}, K = (e) => {
	let { componentCls: t, lineWidthBold: n, antCls: r } = e, i = `${t}-item`, [, a] = g(r, "cmp-steps");
	return { [`${t}${t}-rtl`]: {
		direction: "rtl",
		[`&${t}-navigation${t}-horizontal`]: { [`${i}:after`]: { transform: "translateY(-50%) rotate(-45deg)" } },
		[`&${t}-panel`]: {
			[`${t}-panel-arrow`]: { transform: "scaleX(-1)" },
			[`&${t}-filled`]: { [i]: { "&:not(:first-child)": { clipPath: `polygon(${[
				`calc(0px - ${a("item-base-width")}) 0px`,
				`calc(100% - ${c(n)}) 0px`,
				`calc(100% - ${a("item-base-width")} - ${c(n)}) 50%`,
				`calc(100% - ${c(n)}) 100%`,
				`calc(0px - ${a("item-base-width")}) 100%`
			].join(",")})` } } }
		}
	} };
}, re = (e) => {
	let { componentCls: t, iconSizeSM: n, fontSize: r, lineHeight: i, marginXS: a, fontHeight: o, marginSM: s, paddingXS: c, antCls: l } = e, [u] = g(l, "cmp-steps");
	return { [`${t}${t}-small`]: {
		[u("icon-size")]: n,
		[u("title-horizontal-item-margin")]: s,
		[u("title-vertical-row-gap")]: c,
		[u("title-font-size")]: r,
		[u("title-line-height")]: i,
		[u("title-horizontal-rail-margin")]: a,
		[u("title-horizontal-title-height")]: o,
		[`&${t}-horizontal${t}-title-vertical`]: B(e, a)
	} };
}, q = "wait", J = "process", Y = "finish", X = "error", ie = (e) => {
	let { componentCls: t, colorTextDisabled: n, colorTextLightSolid: r, colorPrimary: i, colorTextLabel: a, colorError: o, colorErrorHover: s, colorErrorBgFilledHover: c, colorFillTertiary: l, colorErrorBg: u, colorPrimaryBgHover: d, colorPrimaryBg: f, colorText: p, colorTextDescription: m, colorBgContainer: h, colorPrimaryHover: _, lineType: v, antCls: y } = e, b = `${t}-item`, [x, S] = g(y, "cmp-steps");
	return { [t]: [
		{
			[b]: {
				[x("item-solid-line-color")]: "#000",
				[x("item-title-color")]: "#000",
				[x("item-content-color")]: "#000",
				[x("item-subtitle-color")]: S("item-content-color"),
				[x("item-icon-custom-color")]: "#000",
				[x("item-icon-bg-color")]: "#000",
				[x("item-icon-border-color")]: "#000",
				[x("item-icon-text-color")]: "#fff",
				[x("item-icon-dot-color")]: "#000",
				[x("item-icon-dot-bg-color")]: S("item-icon-dot-color"),
				[x("item-icon-dot-border-color")]: S("item-icon-dot-color"),
				[x("item-text-hover-color")]: "#000",
				[x("item-icon-bg-hover-color")]: S("item-icon-bg-color"),
				[x("item-icon-border-hover-color")]: S("item-icon-border-color"),
				[x("item-icon-text-hover-color")]: S("item-icon-text-color"),
				[x("item-content-active-color")]: S("item-content-color"),
				[x("item-icon-active-bg-color")]: S("item-icon-bg-color"),
				[x("item-icon-active-border-color")]: S("item-icon-border-color"),
				[x("item-icon-active-text-color")]: S("item-icon-text-color"),
				[x("item-process-rail-line-style")]: v
			},
			[`${b}-rail`]: { borderColor: S("item-solid-line-color") },
			[`${b}-custom ${b}-icon`]: { color: S("item-icon-custom-color") },
			[`${b}-title`]: { color: S("item-title-color") },
			[`${b}-subtitle`]: { color: S("item-subtitle-color") },
			[`${b}-content`]: { color: S("item-content-color") },
			[`${b}-active ${b}-icon`]: {},
			[`${b}-active ${b}-content`]: { color: S("item-content-active-color") },
			[`${b}[role='button']:not(${b}-active):hover`]: { [`${b}-title, ${b}-content`]: { color: S("item-text-hover-color") } },
			[`&:not(${t}-dot)`]: { [`${b}:not(${b}-custom)`]: {
				[`${b}-icon`]: {
					background: S("item-icon-bg-color"),
					borderColor: S("item-icon-border-color"),
					color: S("item-icon-text-color")
				},
				[`&[role='button']:not(${b}-active):hover`]: { [`${b}-icon`]: {
					background: S("item-icon-bg-hover-color"),
					borderColor: S("item-icon-border-hover-color"),
					color: S("item-icon-text-hover-color")
				} },
				[`&${b}-active`]: { [`${b}-icon`]: {
					background: S("item-icon-active-bg-color"),
					borderColor: S("item-icon-active-border-color"),
					color: S("item-icon-active-text-color")
				} }
			} },
			[`&${t}-dot`]: { [`${b}-icon`]: {
				background: S("item-icon-dot-bg-color"),
				borderColor: S("item-icon-dot-border-color"),
				color: S("item-icon-dot-color"),
				[`&${b}-icon-dot-custom`]: {
					background: "transparent",
					border: "none"
				}
			} }
		},
		{
			[`${b}-${q}`]: {
				[x("item-icon-custom-color")]: n,
				[x("item-title-color")]: m,
				[x("item-content-color")]: m,
				[x("item-content-active-color")]: p,
				[x("item-text-hover-color")]: _
			},
			[`${b}-rail-${q}`]: { [x("item-solid-line-color")]: n },
			[`${b}-${J}`]: {
				[x("item-icon-custom-color")]: i,
				[x("item-title-color")]: p,
				[x("item-content-color")]: m,
				[x("item-content-active-color")]: p,
				[x("item-text-hover-color")]: _
			},
			[`${b}-rail-${J}`]: {
				[x("item-solid-line-color")]: i,
				[x("rail-line-style")]: S("item-process-rail-line-style")
			},
			[`${b}-${Y}`]: {
				[x("item-icon-custom-color")]: i,
				[x("item-title-color")]: p,
				[x("item-content-color")]: m,
				[x("item-content-active-color")]: p,
				[x("item-text-hover-color")]: _
			},
			[`${b}-rail-${Y}`]: { [x("item-solid-line-color")]: i },
			[`${b}-${X}`]: {
				[x("item-icon-custom-color")]: o,
				[x("item-title-color")]: o,
				[x("item-content-color")]: o,
				[x("item-content-active-color")]: o,
				[x("item-text-hover-color")]: s
			},
			[`${b}-rail-${X}`]: { [x("item-solid-line-color")]: o }
		},
		{ [`&${t}-filled`]: {
			[b]: { [x("item-icon-dot-border-color")]: "transparent" },
			[`${b}-${q}`]: {
				[x("item-icon-bg-color")]: l,
				[x("item-icon-border-color")]: "transparent",
				[x("item-icon-text-color")]: a,
				[x("item-icon-dot-bg-color")]: n,
				[x("item-icon-bg-hover-color")]: d,
				[x("item-icon-border-hover-color")]: "transparent",
				[x("item-icon-text-hover-color")]: i,
				[x("item-icon-active-bg-color")]: i,
				[x("item-icon-active-border-color")]: "transparent",
				[x("item-icon-active-text-color")]: r
			},
			[`${b}-${J}, ${b}-${Y}`]: {
				[x("item-icon-bg-color")]: f,
				[x("item-icon-border-color")]: "transparent",
				[x("item-icon-text-color")]: i,
				[x("item-icon-dot-bg-color")]: i,
				[x("item-icon-bg-hover-color")]: d,
				[x("item-icon-border-hover-color")]: "transparent",
				[x("item-icon-text-hover-color")]: i,
				[x("item-icon-active-bg-color")]: i,
				[x("item-icon-active-border-color")]: "transparent",
				[x("item-icon-active-text-color")]: r
			},
			[`${b}-${X}`]: {
				[x("item-icon-bg-color")]: u,
				[x("item-icon-border-color")]: "transparent",
				[x("item-icon-text-color")]: o,
				[x("item-icon-dot-bg-color")]: o,
				[x("item-icon-bg-hover-color")]: c,
				[x("item-icon-border-hover-color")]: "transparent",
				[x("item-icon-text-hover-color")]: o,
				[x("item-icon-active-bg-color")]: o,
				[x("item-icon-active-border-color")]: "transparent",
				[x("item-icon-active-text-color")]: r
			}
		} },
		{ [`&${t}-outlined`]: {
			[b]: { [x("item-icon-dot-bg-color")]: "transparent" },
			[`${b}-${q}`]: {
				[x("item-icon-bg-color")]: h,
				[x("item-icon-border-color")]: n,
				[x("item-icon-text-color")]: n,
				[x("item-icon-dot-color")]: n,
				[x("item-icon-bg-hover-color")]: "transparent",
				[x("item-icon-border-hover-color")]: _,
				[x("item-icon-text-hover-color")]: _,
				[x("item-icon-active-bg-color")]: l
			},
			[`${b}-${J}, ${b}-${Y}`]: {
				[x("item-icon-bg-color")]: h,
				[x("item-icon-border-color")]: i,
				[x("item-icon-text-color")]: i,
				[x("item-icon-dot-color")]: i,
				[x("item-icon-bg-hover-color")]: "transparent",
				[x("item-icon-border-hover-color")]: _,
				[x("item-icon-text-hover-color")]: _,
				[x("item-icon-active-bg-color")]: f
			},
			[`${b}-${X}`]: {
				[x("item-icon-bg-color")]: h,
				[x("item-icon-border-color")]: o,
				[x("item-icon-text-color")]: o,
				[x("item-icon-dot-color")]: o,
				[x("item-icon-bg-hover-color")]: "transparent",
				[x("item-icon-border-hover-color")]: s,
				[x("item-icon-text-hover-color")]: s,
				[x("item-icon-active-bg-color")]: u
			}
		} }
	] };
}, ae = (e) => {
	let { componentCls: t, marginXXS: n, paddingSM: r, controlHeight: i, antCls: a, calc: o } = e, s = `${t}-item`, [c, l] = g(a, "cmp-steps");
	return { [`${t}-vertical`]: {
		[c("vertical-rail-margin")]: o(n).mul(1.5).equal(),
		flexDirection: "column",
		alignItems: "stretch",
		[`> ${s}`]: {
			minHeight: o(i).mul(1.5).equal(),
			paddingBottom: r,
			"&:last-child": { paddingBottom: 0 },
			[`${s}-icon`]: { marginInlineStart: `calc((${l("icon-size-max")} - ${l("icon-size")}) / 2)` },
			[`${s}-rail`]: {
				[c("rail-offset")]: o(l("heading-height")).sub(l("icon-size")).div(2).equal(),
				borderInlineStartWidth: l("rail-size"),
				position: "absolute",
				top: o(l("icon-size")).add(l("item-wrapper-padding-top")).add(l("rail-offset")).add(l("vertical-rail-margin")).equal(),
				insetInlineStart: o(l("icon-size-max")).div(2).equal(),
				bottom: o(l("vertical-rail-margin")).sub(l("rail-offset")).equal(),
				marginInlineStart: `calc(${l("rail-size")} / -2)`
			}
		}
	} };
}, Z = (e) => {
	let { componentCls: t, antCls: n } = e, r = `${t}-item`, [i, a] = g(n, "cmp-steps");
	return { [t]: {
		[i("title-font-size")]: e.fontSizeLG,
		[i("title-line-height")]: e.lineHeightLG,
		[i("subtitle-font-size")]: e.fontSize,
		[i("subtitle-line-height")]: e.lineHeight,
		[i("item-wrapper-padding-top")]: "0px",
		[i("rail-size")]: e.lineWidth,
		[i("rail-line-style")]: e.lineType,
		..._(e),
		display: "flex",
		flexWrap: "nowrap",
		alignItems: "flex-start",
		[r]: {
			flex: "none",
			position: "relative"
		},
		[`${r}-wrapper`]: {
			display: "flex",
			flexWrap: "nowrap",
			paddingTop: a("item-wrapper-padding-top")
		},
		[`${r}-header`]: {
			display: "flex",
			flexWrap: "nowrap",
			alignItems: "center"
		},
		[`${r}-title`]: {
			color: e.colorText,
			fontSize: a("title-font-size"),
			lineHeight: a("title-line-height"),
			wordBreak: "break-word"
		},
		[`${r}-subtitle`]: {
			color: e.colorTextDescription,
			fontWeight: "normal",
			fontSize: a("subtitle-font-size"),
			lineHeight: a("subtitle-line-height"),
			marginInlineStart: e.marginXS,
			wordBreak: "break-word"
		},
		[`${r}-content`]: {
			color: e.colorTextDescription,
			fontSize: e.fontSize,
			lineHeight: e.lineHeight,
			wordBreak: "break-word"
		},
		[`${r}-rail`]: {
			borderStyle: a("rail-line-style"),
			borderWidth: 0
		},
		[`${r}-title, ${r}-subtitle, ${r}-content, ${r}-rail`]: { transition: `all ${e.motionDurationSlow}` },
		[`&${t}-ellipsis`]: { [`${r}-title, ${r}-subtitle, ${r}-content`]: m },
		[`${r}[role='button']:not(${r}-active):hover`]: { cursor: "pointer" }
	} };
}, oe = v("Steps", (e) => {
	let t = l(e, { inlineDotSize: 6 });
	return [
		Z(t),
		L(t),
		ae(t),
		I(t),
		V(t),
		re(t),
		G(t),
		ie(t),
		H(t),
		U(t),
		R(t),
		W(t),
		K(t)
	];
}, (e) => ({
	titleLineHeight: e.controlHeight,
	customIconSize: e.controlHeight,
	customIconTop: 0,
	customIconFontSize: e.controlHeightSM,
	iconSize: e.controlHeight,
	iconTop: -.5,
	iconFontSize: e.fontSize,
	iconSizeSM: e.fontSizeHeading3,
	dotSize: e.controlHeight / 4,
	dotCurrentSize: e.controlHeightLG / 4,
	navArrowColor: e.colorTextDisabled,
	navContentMaxWidth: "unset",
	descriptionMaxWidth: void 0,
	waitIconColor: e.wireframe ? e.colorTextDisabled : e.colorTextLabel,
	waitIconBgColor: e.wireframe ? e.colorBgContainer : e.colorFillContent,
	waitIconBorderColor: e.wireframe ? e.colorTextDisabled : "transparent",
	finishIconBgColor: e.wireframe ? e.colorBgContainer : e.controlItemBgActive,
	finishIconBorderColor: e.wireframe ? e.colorPrimary : e.controlItemBgActive
})), se = /* @__PURE__ */ e({ default: () => Q }), ce = { itemIcon: h }, Q = (e) => {
	let { size: t, className: n, rootClassName: r, style: s, variant: c = "filled", type: l, classNames: m, styles: h, direction: _, orientation: v, responsive: C = !0, progressDot: w, labelPlacement: T, titlePlacement: E, ellipsis: D, offset: O = 0, items: k, percent: A, current: j = 0, onChange: M, iconRender: N, ...ee } = e, I = S.useContext(P), L = d("steps"), { getPrefixCls: R, direction: z, className: B, style: V } = L, H, U, W = {};
	I ? W = {
		root: I.rootComponent,
		item: I.itemComponent
	} : {classNames: H, styles: U} = L;
	let G = R(), K = R("steps", e.prefixCls), re = `${K}-item-icon`, [q, J] = oe(K), [Y] = g(G, "cmp-steps"), X = p(t), ie = S.useMemo(() => (k || []).filter(Boolean), [k]), { xs: ae } = x(C), Z = S.useMemo(() => l && l !== "default" ? l : w ? "dot" : l, [w, l]), se = Z === "inline", Q = Z === "dot" || Z === "inline", le = S.useMemo(() => Z === "dot" && f(w) ? w : void 0, [Z, w]), $ = S.useMemo(() => Z === "panel" ? "horizontal" : C && ae || (v || _) === "vertical" ? "vertical" : "horizontal", [
		v,
		_,
		Z,
		C,
		ae
	]), ue = S.useMemo(() => Q || $ === "vertical" ? $ === "vertical" ? "horizontal" : "vertical" : l === "navigation" ? "horizontal" : E || T || "horizontal", [
		Q,
		T,
		$,
		E,
		l
	]), de = se ? void 0 : A, fe = {
		...e,
		variant: c,
		size: X,
		type: Z,
		orientation: $,
		titlePlacement: ue,
		current: j,
		percent: de,
		responsive: C,
		offset: O
	}, [pe, me] = u([
		ce,
		H,
		m
	], [U, h], { props: fe }), he = (e, t) => {
		let { item: n, index: r, active: i, components: { Icon: s } } = t, { status: c, icon: l } = n, u = null;
		if (Q || l) u = l;
		else switch (c) {
			case "finish":
				u = /*#__PURE__*/ S.createElement(o, { className: `${re}-finish` });
				break;
			case "error":
				u = /*#__PURE__*/ S.createElement(a, { className: `${re}-error` });
				break;
			default: {
				let e = /*#__PURE__*/ S.createElement("span", { className: `${re}-number` }, t.index + 1);
				c === "process" && de !== void 0 && (e = /*#__PURE__*/ S.createElement(ne, {
					prefixCls: K,
					rootPrefixCls: G,
					percent: de
				}, e)), u = e;
			}
		}
		let d = /*#__PURE__*/ S.createElement(s, null, u);
		return N ? d = N(d, {
			index: r,
			active: i,
			item: n,
			components: { Icon: s }
		}) : f(le) && (d = le(d, {
			index: r,
			...n
		})), d;
	}, ge = (e, t) => {
		let n = e;
		return se && t.item.content && (n = /*#__PURE__*/ S.createElement(b, {
			destroyOnHidden: !0,
			title: t.item.content
		}, e)), /*#__PURE__*/ S.createElement(y, {
			component: "Steps",
			disabled: t.item.disabled || !M,
			colorSource: c === "filled" ? "color" : null
		}, n);
	}, _e = Z === "panel" ? (e) => /*#__PURE__*/ S.createElement(S.Fragment, null, e, /*#__PURE__*/ S.createElement(F, { prefixCls: K })) : void 0, ve = {
		[Y("items-offset")]: `${O}`,
		...V,
		...s
	}, ye = i(B, `${K}-${c}`, {
		[`${K}-${Z}`]: Z === "dot" ? !1 : Z,
		[`${K}-rtl`]: z === "rtl",
		[`${K}-dot`]: Q,
		[`${K}-ellipsis`]: D,
		[`${K}-with-progress`]: de !== void 0,
		[`${K}-small`]: X === "small"
	}, n, r, q, J);
	return /*#__PURE__*/ S.createElement(te, {
		...ee,
		prefixCls: K,
		className: ye,
		style: ve,
		classNames: pe,
		styles: me,
		orientation: $,
		titlePlacement: ue,
		components: W,
		current: j,
		items: ie,
		onChange: M,
		iconRender: he,
		itemRender: ge,
		itemWrapperRender: _e
	});
};
//#endregion
export { w as i, se as n, P as r, Q as t };
