globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, Tt as r, kn as i, kt as a, yt as o } from "../shared/core.js";
import { Jn as s, Mn as c, Qn as l, Sr as u, Xn as d, Zn as f, br as p, er as m, ir as h, nr as g, pr as _, sr as v, u as y } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/badge/SingleNumber.js
var b = /* @__PURE__ */ t(i()), x = (e) => {
	let { prefixCls: t, value: r, current: i, offset: a = 0 } = e, o;
	return a && (o = {
		position: "absolute",
		top: `${a}00%`,
		left: 0
	}), /*#__PURE__*/ b.createElement("span", {
		style: o,
		className: n(`${t}-only-unit`, { current: i })
	}, r);
};
function S(e, t, n) {
	let r = e, i = 0;
	for (; (r + 10) % 10 !== t;) r += n, i += n;
	return i;
}
var C = (e) => {
	let { prefixCls: t, count: n, value: r } = e, i = Number(r), a = Math.abs(n), [o, s] = b.useState(i), [c, l] = b.useState(a), u = () => {
		s(i), l(a);
	};
	b.useEffect(() => {
		let e = setTimeout(u, 1e3);
		return () => clearTimeout(e);
	}, [i]);
	let d, f;
	if (o === i || Number.isNaN(i) || Number.isNaN(o)) d = [/*#__PURE__*/ b.createElement(x, {
		...e,
		key: i,
		current: !0
	})], f = { transition: "none" };
	else {
		d = [];
		let t = i + 10, n = [];
		for (let e = i; e <= t; e += 1) n.push(e);
		let r = c < a ? 1 : -1, s = n.findIndex((e) => e % 10 === o);
		d = (r < 0 ? n.slice(0, s + 1) : n.slice(s)).map((t, n) => {
			let i = t % 10;
			return /*#__PURE__*/ b.createElement(x, {
				...e,
				key: t,
				value: i,
				offset: r < 0 ? n - s : n,
				current: n === s
			});
		}), f = { transform: `translateY(${-S(o, i, r)}00%)` };
	}
	return /*#__PURE__*/ b.createElement("span", {
		className: `${t}-only`,
		style: f,
		onTransitionEnd: u
	}, d);
}, w = /*#__PURE__*/ b.forwardRef((e, t) => {
	let { prefixCls: r, count: i, className: a, motionClassName: o, style: s, title: l, show: u, component: d = "sup", children: f, ...m } = e, { getPrefixCls: h } = b.useContext(p), g = h("scroll-number", r), _ = {
		...m,
		"data-show": u,
		style: s,
		className: n(g, a, o),
		title: l
	}, v = i;
	if (i && Number(i) % 1 == 0) {
		let e = String(i).split("");
		v = /*#__PURE__*/ b.createElement("bdi", null, e.map((t, n) => /*#__PURE__*/ b.createElement(C, {
			prefixCls: g,
			count: Number(i),
			value: t,
			key: e.length - n
		})));
	}
	return s?.borderColor && (_.style = {
		...s,
		boxShadow: `0 0 0 1px ${s.borderColor} inset`
	}), f ? c(f, (e) => ({ className: n(`${g}-custom-component`, e?.className, o) })) : /*#__PURE__*/ b.createElement(d, {
		..._,
		ref: t
	}, v);
}), T = new r("antStatusProcessing", {
	"0%": {
		transform: "scale(0.8)",
		opacity: .5
	},
	"100%": {
		transform: "scale(2.4)",
		opacity: 0
	}
}), E = new r("antZoomBadgeIn", {
	"0%": {
		transform: "scale(0) translate(50%, -50%)",
		opacity: 0
	},
	"100%": { transform: "scale(1) translate(50%, -50%)" }
}), D = new r("antZoomBadgeOut", {
	"0%": { transform: "scale(1) translate(50%, -50%)" },
	"100%": {
		transform: "scale(0) translate(50%, -50%)",
		opacity: 0
	}
}), O = new r("antNoWrapperZoomBadgeIn", {
	"0%": {
		transform: "scale(0)",
		opacity: 0
	},
	"100%": { transform: "scale(1)" }
}), k = new r("antNoWrapperZoomBadgeOut", {
	"0%": { transform: "scale(1)" },
	"100%": {
		transform: "scale(0)",
		opacity: 0
	}
}), A = new r("antBadgeLoadingCircle", {
	"0%": { transformOrigin: "50%" },
	"100%": {
		transform: "translate(50%, -50%) rotate(360deg)",
		transformOrigin: "50%"
	}
}), j = (e) => {
	let { componentCls: t, iconCls: n, antCls: r, badgeShadowSize: i, textFontSize: o, textFontSizeSM: s, statusSize: c, dotSize: l, textFontWeight: u, indicatorHeight: d, indicatorHeightSM: f, marginXS: p, calc: m } = e, g = `${r}-scroll-number`, v = h(e, (e, { darkColor: n }) => ({ [`&${t} ${t}-color-${e}`]: {
		background: n,
		[`&:not(${t}-count)`]: { color: n },
		"a:hover &": { background: n }
	} }));
	return { [t]: {
		..._(e),
		position: "relative",
		display: "inline-block",
		width: "fit-content",
		lineHeight: 1,
		[`${t}-count`]: {
			display: "inline-flex",
			justifyContent: "center",
			zIndex: e.indicatorZIndex,
			minWidth: d,
			height: d,
			color: e.badgeTextColor,
			fontWeight: u,
			fontSize: o,
			lineHeight: a(d),
			whiteSpace: "nowrap",
			textAlign: "center",
			background: e.badgeColor,
			borderRadius: m(d).div(2).equal(),
			boxShadow: `0 0 0 ${a(i)} ${e.badgeShadowColor}`,
			transition: `background-color ${e.motionDurationMid}`,
			a: { color: e.badgeTextColor },
			"a:hover": { color: e.badgeTextColor },
			"a:hover &": { background: e.badgeColorHover }
		},
		[`${t}-count-sm`]: {
			minWidth: f,
			height: f,
			fontSize: s,
			lineHeight: a(f),
			borderRadius: m(f).div(2).equal()
		},
		[`${t}-multiple-words`]: {
			paddingInline: e.paddingInline,
			bdi: { unicodeBidi: "plaintext" }
		},
		[`${t}-dot`]: {
			zIndex: e.indicatorZIndex,
			width: l,
			minWidth: l,
			height: l,
			background: e.badgeColor,
			borderRadius: "100%",
			boxShadow: `0 0 0 ${a(i)} ${e.badgeShadowColor}`
		},
		[`${t}-count, ${t}-dot, ${g}-custom-component`]: {
			position: "absolute",
			top: 0,
			insetInlineEnd: 0,
			transform: "translate(50%, -50%)",
			transformOrigin: "100% 0%",
			[`&${n}-spin`]: {
				animationName: A,
				animationDuration: "1s",
				animationIterationCount: "infinite",
				animationTimingFunction: "linear"
			}
		},
		[`&${t}-status`]: {
			lineHeight: "inherit",
			verticalAlign: "baseline",
			[`${t}-status-dot`]: {
				position: "relative",
				top: -1,
				display: "inline-block",
				width: c,
				height: c,
				verticalAlign: "middle",
				borderRadius: "50%"
			},
			[`${t}-status-success`]: { backgroundColor: e.colorSuccess },
			[`${t}-status-processing`]: {
				overflow: "visible",
				color: e.colorInfo,
				backgroundColor: e.colorInfo,
				borderColor: "currentcolor",
				"&::after": {
					position: "absolute",
					top: 0,
					insetInlineStart: 0,
					width: "100%",
					height: "100%",
					borderWidth: i,
					borderStyle: "solid",
					borderColor: "inherit",
					borderRadius: "50%",
					animationName: T,
					animationDuration: e.badgeProcessingDuration,
					animationIterationCount: "infinite",
					animationTimingFunction: "ease-in-out",
					content: "\"\""
				}
			},
			[`${t}-status-default`]: { backgroundColor: e.colorTextPlaceholder },
			[`${t}-status-error`]: { backgroundColor: e.colorError },
			[`${t}-status-warning`]: { backgroundColor: e.colorWarning },
			[`${t}-status-text`]: {
				marginInlineStart: p,
				color: e.colorText,
				fontSize: e.fontSize
			}
		},
		...v,
		[`${t}-zoom-appear, ${t}-zoom-enter`]: {
			animationName: E,
			animationDuration: e.motionDurationSlow,
			animationTimingFunction: e.motionEaseOutBack,
			animationFillMode: "both"
		},
		[`${t}-zoom-leave`]: {
			animationName: D,
			animationDuration: e.motionDurationSlow,
			animationTimingFunction: e.motionEaseOutBack,
			animationFillMode: "both"
		},
		[`&${t}-not-a-wrapper`]: {
			[`${t}-zoom-appear, ${t}-zoom-enter`]: {
				animationName: O,
				animationDuration: e.motionDurationSlow,
				animationTimingFunction: e.motionEaseOutBack
			},
			[`${t}-zoom-leave`]: {
				animationName: k,
				animationDuration: e.motionDurationSlow,
				animationTimingFunction: e.motionEaseOutBack
			},
			[`&:not(${t}-status)`]: { verticalAlign: "middle" },
			[`${g}-custom-component, ${t}-count`]: { transform: "none" },
			[`${g}-custom-component, ${g}`]: {
				position: "relative",
				top: "auto",
				display: "block",
				transformOrigin: "50% 50%"
			}
		},
		[g]: {
			overflow: "hidden",
			transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack}`,
			[`${g}-only`]: {
				position: "relative",
				display: "inline-block",
				height: d,
				transition: `all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,
				WebkitTransformStyle: "preserve-3d",
				WebkitBackfaceVisibility: "hidden",
				[`> p${g}-only-unit`]: {
					height: d,
					margin: 0,
					WebkitTransformStyle: "preserve-3d",
					WebkitBackfaceVisibility: "hidden"
				}
			},
			[`${g}-symbol`]: { verticalAlign: "top" }
		},
		"&-rtl": {
			direction: "rtl",
			[`${t}-count, ${t}-dot, ${g}-custom-component`]: { transform: "translate(-50%, -50%)" }
		}
	} };
}, M = (e) => {
	let { fontHeight: t, lineWidth: n, marginXS: r, colorBorderBg: i } = e, a = t, s = n, c = e.colorTextLightSolid, l = e.colorError, u = e.colorErrorHover;
	return o(e, {
		badgeFontHeight: a,
		badgeShadowSize: s,
		badgeTextColor: c,
		badgeColor: l,
		badgeColorHover: u,
		badgeShadowColor: i,
		badgeProcessingDuration: "1.2s",
		badgeRibbonOffset: r,
		badgeRibbonCornerTransform: "scaleY(0.75)",
		badgeRibbonCornerFilter: "brightness(75%)"
	});
}, N = (e) => {
	let { fontSize: t, lineHeight: n, fontSizeSM: r, lineWidth: i, paddingXS: a } = e;
	return {
		indicatorZIndex: "auto",
		indicatorHeight: Math.round(t * n) - 2 * i,
		indicatorHeightSM: t,
		dotSize: r / 2,
		textFontSize: r,
		textFontSizeSM: r,
		textFontWeight: "normal",
		statusSize: r / 2,
		paddingInline: a
	};
}, ee = v("Badge", (e) => j(M(e)), N), P = /*#__PURE__*/ b.forwardRef((e, t) => {
	let { prefixCls: r, scrollNumberPrefixCls: i, children: a, status: o, text: p, color: h, count: _ = null, overflowCount: v = 99, dot: x = !1, size: S = "medium", title: C, offset: T, style: E, className: D, rootClassName: O, classNames: k, styles: A, showZero: j = !1, ...M } = e, { getPrefixCls: N, direction: P, className: F, style: I, classNames: te, styles: L } = u("badge"), R = N("badge", r), [ne, re] = ee(R), ie = {
		...e,
		overflowCount: v,
		size: S,
		dot: x,
		showZero: j
	}, [z, B] = s([te, k], [L, A], { props: ie }), V = _ > v ? `${v}+` : _, H = V === "0" || V === 0 || p === "0" || p === 0, ae = _ === null || H && !j, U = (d(o) || d(h)) && ae, oe = d(o) || !H, W = x && !H, G = W ? "" : V, K = (0, b.useMemo)(() => (!m(G) && !m(p) || H && !j) && !W, [
		G,
		H,
		j,
		W,
		p
	]), q = (0, b.useRef)(_);
	K || (q.current = _);
	let J = q.current, Y = (0, b.useRef)(G);
	K || (Y.current = G);
	let X = Y.current, se = (0, b.useRef)(W);
	K || (se.current = W);
	let Z = (0, b.useMemo)(() => {
		if (!T) return {
			...I,
			...E
		};
		let e = Number.parseInt(T[0], 10);
		return {
			marginTop: T[1],
			insetInlineEnd: -e,
			...I,
			...E
		};
	}, [
		T,
		E,
		I
	]), ce = C ?? (typeof J == "string" || f(J) ? J : void 0), le = !K && (p === 0 ? j : !!p && p !== !0), ue = le ? /*#__PURE__*/ b.createElement("span", { className: `${R}-status-text` }, p) : null, de = l(J) ? c(J, (e) => ({ style: {
		...Z,
		...e.style
	} })) : void 0, Q = y(h, !1), fe = n(z.indicator, {
		[`${R}-status-dot`]: U,
		[`${R}-status-${o}`]: !!o,
		[`${R}-color-${h}`]: Q
	}), $ = {};
	h && !Q && ($.color = h, $.background = h);
	let pe = n(R, {
		[`${R}-status`]: U,
		[`${R}-not-a-wrapper`]: !a,
		[`${R}-rtl`]: P === "rtl"
	}, D, O, F, z.root, ne, re);
	if (!a && U && (p || oe || !ae)) {
		let e = Z.color;
		return /*#__PURE__*/ b.createElement("span", {
			ref: t,
			...M,
			className: pe,
			style: {
				...B.root,
				...Z
			}
		}, /*#__PURE__*/ b.createElement("span", {
			className: fe,
			style: {
				...B.indicator,
				...$
			}
		}), le && /*#__PURE__*/ b.createElement("span", {
			style: { color: e },
			className: `${R}-status-text`
		}, p));
	}
	return /*#__PURE__*/ b.createElement("span", {
		ref: t,
		...M,
		className: pe,
		style: B.root
	}, a, /*#__PURE__*/ b.createElement(g, {
		visible: !K,
		motionName: `${R}-zoom`,
		motionAppear: !1,
		motionDeadline: 1e3
	}, ({ className: e }) => {
		let t = N("scroll-number", i), r = se.current, a = n(z.indicator, {
			[`${R}-dot`]: r,
			[`${R}-count`]: !r,
			[`${R}-count-sm`]: S === "small",
			[`${R}-multiple-words`]: !r && X && X.toString().length > 1,
			[`${R}-status-${o}`]: !!o,
			[`${R}-color-${h}`]: Q
		}), s = {
			...B.indicator,
			...Z
		};
		return h && !Q && (s ||= {}, s.background = h), /*#__PURE__*/ b.createElement(w, {
			prefixCls: t,
			show: !K,
			motionClassName: e,
			className: a,
			count: X,
			title: ce,
			style: s,
			key: "scrollNumber"
		}, de);
	}), ue);
}), F = (e) => {
	let { antCls: t, badgeFontHeight: n, marginXS: r, badgeRibbonOffset: i, calc: o } = e, s = `${t}-ribbon`, c = `${t}-ribbon-wrapper`, l = h(e, (e, { darkColor: t }) => ({ [`&${s}-color-${e}`]: {
		background: t,
		color: t
	} }));
	return {
		[c]: { position: "relative" },
		[s]: {
			..._(e),
			position: "absolute",
			top: r,
			padding: `0 ${a(e.paddingXS)}`,
			color: e.colorPrimary,
			lineHeight: a(n),
			whiteSpace: "nowrap",
			backgroundColor: e.colorPrimary,
			borderRadius: e.borderRadiusSM,
			[`${s}-content`]: { color: e.badgeTextColor },
			[`${s}-corner`]: {
				position: "absolute",
				top: "100%",
				width: i,
				height: i,
				color: "currentcolor",
				border: `${a(o(i).div(2).equal())} solid`,
				transform: e.badgeRibbonCornerTransform,
				transformOrigin: "top",
				filter: e.badgeRibbonCornerFilter
			},
			...l,
			[`&${s}-placement-end`]: {
				insetInlineEnd: o(i).mul(-1).equal(),
				borderEndEndRadius: 0,
				[`${s}-corner`]: {
					insetInlineEnd: 0,
					borderInlineEndColor: "transparent",
					borderBlockEndColor: "transparent"
				}
			},
			[`&${s}-placement-start`]: {
				insetInlineStart: o(i).mul(-1).equal(),
				borderEndStartRadius: 0,
				[`${s}-corner`]: {
					insetInlineStart: 0,
					borderBlockEndColor: "transparent",
					borderInlineStartColor: "transparent"
				}
			},
			"&-rtl": { direction: "rtl" }
		}
	};
}, I = v(["Badge", "Ribbon"], (e) => F(M(e)), N), te = (e) => {
	let { className: t, prefixCls: r, style: i, color: a, children: o, text: c, placement: l = "end", rootClassName: d, styles: f, classNames: p } = e, { getPrefixCls: m, direction: h, className: g, style: _, classNames: v, styles: x } = u("ribbon"), S = m("ribbon", r), C = `${S}-wrapper`, [w, T] = I(S, C), E = {
		...e,
		placement: l
	}, [D, O] = s([v, p], [x, f], { props: E }), k = y(a, !1), A = n(S, `${S}-placement-${l}`, {
		[`${S}-rtl`]: h === "rtl",
		[`${S}-color-${a}`]: k
	}, t, g, D.indicator), j = {}, M = {};
	return a && !k && (j.background = a, M.color = a), /*#__PURE__*/ b.createElement("div", {
		className: n(C, d, w, T, D.root),
		style: O.root
	}, o, /*#__PURE__*/ b.createElement("div", {
		className: n(A, w),
		style: {
			...j,
			...O.indicator,
			..._,
			...i
		}
	}, /*#__PURE__*/ b.createElement("span", {
		className: n(`${S}-content`, D.content),
		style: O.content
	}, c), /*#__PURE__*/ b.createElement("div", {
		className: `${S}-corner`,
		style: M
	})));
}, L = /* @__PURE__ */ e({ default: () => R }), R = P;
R.Ribbon = te;
//#endregion
export { L as n, R as t };
