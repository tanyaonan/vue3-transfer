globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, On as r, Tt as i, Ut as a, _t as o, ct as s, et as c, ht as l, lt as u, on as d, ut as f, yt as p } from "../shared/core.js";
import { Jn as m, Qn as h, Sr as g, Zn as _, pr as v, sr as y } from "../shared/antd-core.js";
import { o as b } from "./avatar.js";
//#region node_modules/.pnpm/@rc-component+progress@1.0._b67ece7bdc4415d5734b021cf3c645bb/node_modules/@rc-component/progress/es/common.js
var x = /* @__PURE__ */ t(r()), S = {
	percent: 0,
	prefixCls: "rc-progress",
	strokeColor: "#2db7f5",
	strokeLinecap: "round",
	strokeWidth: 1,
	railColor: "#D9D9D9",
	railWidth: 1,
	gapPosition: "bottom",
	loading: !1
}, C = () => {
	let e = (0, x.useRef)([]), t = (0, x.useRef)(null);
	return (0, x.useEffect)(() => {
		let n = Date.now(), r = !1;
		e.current.forEach((e) => {
			if (!e) return;
			r = !0;
			let i = e.style;
			i.transitionDuration = ".3s, .3s, .3s, .06s", t.current && n - t.current < 100 && (i.transitionDuration = "0s, 0s");
		}), r && (t.current = Date.now());
	}), e.current;
}, w = ({ bg: e, children: t }) => /*#__PURE__*/ x.createElement("div", { style: {
	width: "100%",
	height: "100%",
	background: e
} }, t);
function T(e, t) {
	return Object.keys(e).map((n) => {
		let r = `${Math.floor(parseFloat(n) * t)}%`;
		return `${e[n]} ${r}`;
	});
}
var E = /*#__PURE__*/ x.forwardRef((e, t) => {
	let { prefixCls: r, color: i, gradientId: a, radius: o, className: s, style: c, ptg: l, strokeLinecap: u, strokeWidth: d, size: f, gapDegree: p } = e, m = i && typeof i == "object", h = m ? "#FFF" : void 0, g = f / 2, _ = /*#__PURE__*/ x.createElement("circle", {
		className: n(`${r}-circle-path`, s),
		r: o,
		cx: g,
		cy: g,
		stroke: h,
		strokeLinecap: u,
		strokeWidth: d,
		opacity: l === 0 ? 0 : 1,
		style: c,
		ref: t
	});
	if (!m) return _;
	let v = `${a}-conic`, y = p ? `${180 + p / 2}deg` : "0deg", b = T(i, (360 - p) / 360), S = T(i, 1), C = `conic-gradient(from ${y}, ${b.join(", ")})`, E = `linear-gradient(to ${p ? "bottom" : "top"}, ${S.join(", ")})`;
	return /*#__PURE__*/ x.createElement(x.Fragment, null, /*#__PURE__*/ x.createElement("mask", { id: v }, _), /*#__PURE__*/ x.createElement("foreignObject", {
		x: 0,
		y: 0,
		width: f,
		height: f,
		mask: `url(#${v})`
	}, /*#__PURE__*/ x.createElement(w, { bg: E }, /*#__PURE__*/ x.createElement(w, { bg: C }))));
}), D = (e, t, n, r, i, a, o, s, c, l, u = 0) => {
	let d = n / 100 * 360 * ((360 - a) / 360), f = a === 0 ? 0 : {
		bottom: 0,
		top: 180,
		left: 90,
		right: -90
	}[o], p = (100 - r) / 100 * t;
	return c === "round" && r !== 100 && (p += l / 2, p >= t && (p = t - .01)), {
		stroke: typeof s == "string" ? s : void 0,
		strokeDasharray: `${t}px ${e}`,
		strokeDashoffset: p + u,
		transform: `rotate(${i + d + f}deg)`,
		transformOrigin: "50px 50px",
		transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
		fillOpacity: 0
	};
}, O = (({ id: e, loading: t }) => {
	if (!t) return {
		indeterminateStyleProps: {},
		indeterminateStyleAnimation: null
	};
	let n = `${e}-indeterminate-animate`;
	return {
		indeterminateStyleProps: {
			transform: "rotate(0deg)",
			animation: `${n} 1s linear infinite`
		},
		indeterminateStyleAnimation: /*#__PURE__*/ x.createElement("style", null, `@keyframes ${n} {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }`)
	};
});
//#endregion
//#region node_modules/.pnpm/@rc-component+progress@1.0._b67ece7bdc4415d5734b021cf3c645bb/node_modules/@rc-component/progress/es/Circle/index.js
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
	let t = e ?? [];
	return Array.isArray(t) ? t : [t];
}
var j = (e) => {
	let { id: t, prefixCls: r, classNames: i = {}, styles: a = {}, steps: o, strokeWidth: s, railWidth: c, gapDegree: l = 0, gapPosition: u, railColor: f, strokeLinecap: p, style: m, className: h, strokeColor: g, percent: _, loading: v, ...y } = {
		...S,
		...e
	}, b = d(t), w = `${b}-gradient`, T = 50 - s / 2, j = Math.PI * 2 * T, M = l > 0 ? 90 + l / 2 : -90, N = j * ((360 - l) / 360), { count: P, gap: F } = typeof o == "object" ? o : {
		count: o,
		gap: 2
	}, I = A(_), L = A(g), R = L.find((e) => e && typeof e == "object"), z = R && typeof R == "object" ? "butt" : p, { indeterminateStyleProps: B, indeterminateStyleAnimation: V } = O({
		id: b,
		loading: v
	}), H = D(j, N, 0, 100, M, l, u, f, z, s), U = C(), W = () => {
		let e = 0;
		return I.map((t, n) => {
			let o = L[n] || L[L.length - 1], c = D(j, N, e, t, M, l, u, o, z, s);
			return e += t, /*#__PURE__*/ x.createElement(E, {
				key: n,
				color: o,
				ptg: t,
				radius: T,
				prefixCls: r,
				gradientId: w,
				className: i.track,
				style: {
					...c,
					...B,
					...a.track
				},
				strokeLinecap: z,
				strokeWidth: s,
				gapDegree: l,
				ref: (e) => {
					U[n] = e;
				},
				size: 100
			});
		}).reverse();
	}, G = () => {
		let e = Math.round(P * (I[0] / 100)), t = 100 / P, o = 0;
		return Array(P).fill(null).map((c, d) => {
			let p = d <= e - 1 ? L[0] : f, m = p && typeof p == "object" ? `url(#${w})` : void 0, h = D(j, N, o, t, M, l, u, p, "butt", s, F);
			return o += (N - h.strokeDashoffset + F) * 100 / N, /*#__PURE__*/ x.createElement("circle", {
				key: d,
				className: n(`${r}-circle-path`, i.track),
				r: T,
				cx: 50,
				cy: 50,
				stroke: m,
				strokeWidth: s,
				opacity: 1,
				style: {
					...h,
					...a.track
				},
				ref: (e) => {
					U[d] = e;
				}
			});
		});
	};
	return /*#__PURE__*/ x.createElement("svg", k({
		className: n(`${r}-circle`, i.root, h),
		viewBox: "0 0 100 100",
		style: {
			...a.root,
			...m
		},
		id: t,
		role: "presentation"
	}, y), !P && /*#__PURE__*/ x.createElement("circle", {
		className: n(`${r}-circle-rail`, i.rail),
		r: T,
		cx: 50,
		cy: 50,
		stroke: f,
		strokeLinecap: z,
		strokeWidth: c || s,
		style: {
			...H,
			...a.rail
		}
	}), P ? G() : W(), V);
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/progress/utils.js
function M(e) {
	return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function N({ success: e }) {
	let t;
	return e && "percent" in e && (t = e.percent), t;
}
var P = ({ percent: e, success: t }) => {
	let n = M(N({ success: t }));
	return [n, M(M(e) - n)];
}, F = ({ success: e = {}, strokeColor: t }) => {
	let { strokeColor: n } = e;
	return [n || l.green, t || null];
}, I = (e, t, n) => {
	let r = -1, i = -1;
	if (t === "step") {
		let t = n.steps, a = n.strokeWidth;
		typeof e == "string" || e === void 0 ? (r = e === "small" ? 2 : 14, i = a ?? 8) : _(e) ? [r, i] = [e, e] : [r = 14, i = 8] = Array.isArray(e) ? e : [e.width, e.height], r *= t;
	} else if (t === "line") {
		let t = n?.strokeWidth;
		typeof e == "string" || e === void 0 ? i = t || (e === "small" ? 6 : 8) : _(e) ? [r, i] = [e, e] : [r = -1, i = 8] = Array.isArray(e) ? e : [e.width, e.height];
	} else (t === "circle" || t === "dashboard") && (typeof e == "string" || e === void 0 ? [r, i] = e === "small" ? [60, 60] : [120, 120] : _(e) ? [r, i] = [e, e] : Array.isArray(e) && (r = e[0] ?? e[1] ?? 120, i = e[0] ?? e[1] ?? 120));
	return [r, i];
}, L = 3, R = (e) => L / e * 100, z = [
	"root",
	"body",
	"indicator"
], B = (e) => {
	let { prefixCls: t, classNames: r, styles: i, railColor: o, trailColor: s, strokeLinecap: c = "round", gapPosition: l, gapPlacement: u, gapDegree: d, width: f = 120, type: p, children: m, success: _, size: v = f, steps: y } = e, { direction: S } = g("progress"), C = o ?? s, [w, T] = I(v, "circle"), { strokeWidth: E } = e;
	E === void 0 && (E = Math.max(R(w), 6));
	let D = {
		width: w,
		height: T,
		fontSize: w * .15 + 6
	}, O = x.useMemo(() => {
		if (d || d === 0) return d;
		if (p === "dashboard") return 75;
	}, [d, p]), k = P(e), A = x.useMemo(() => {
		let e = (u ?? l) || p === "dashboard" && "bottom" || void 0, t = S === "rtl";
		switch (e) {
			case "start": return t ? "right" : "left";
			case "end": return t ? "left" : "right";
			default: return e;
		}
	}, [
		S,
		u,
		l,
		p
	]), M = h(e.strokeColor), N = F({
		success: _,
		strokeColor: e.strokeColor
	}), L = n(`${t}-body`, { [`${t}-circle-gradient`]: M }, r.body), B = /*#__PURE__*/ x.createElement(j, {
		steps: y,
		percent: y ? k[1] : k,
		strokeWidth: E,
		railWidth: E,
		strokeColor: y ? N[1] : N,
		strokeLinecap: c,
		railColor: C,
		prefixCls: t,
		gapDegree: O,
		gapPosition: A,
		classNames: a(r, z),
		styles: a(i, z)
	}), V = w <= 20, H = /*#__PURE__*/ x.createElement("div", {
		className: L,
		style: {
			...D,
			...i.body
		}
	}, B, !V && m);
	return V ? /*#__PURE__*/ x.createElement(b, { title: m }, H) : H;
}, V = "--progress-line-stroke-color", H = (e) => {
	let t = e ? "100%" : "-100%";
	return new i(`antProgress${e ? "RTL" : "LTR"}Active`, {
		"0%": {
			transform: `translateX(${t}) scaleX(0)`,
			opacity: .1
		},
		"20%": {
			transform: `translateX(${t}) scaleX(0)`,
			opacity: .5
		},
		to: {
			transform: "translateX(0) scaleX(1)",
			opacity: 0
		}
	});
}, U = (e) => {
	let { componentCls: t, iconCls: n } = e;
	return { [t]: {
		...v(e),
		display: "inline-flex",
		"&-rtl": { direction: "rtl" },
		[`${t}-indicator`]: {
			color: e.colorText,
			lineHeight: 1,
			whiteSpace: "nowrap",
			verticalAlign: "middle",
			wordBreak: "normal",
			[n]: { fontSize: e.fontSize }
		},
		[`&${t}-status-exception`]: { [`${t}-indicator`]: { color: e.colorError } },
		[`&${t}-status-success`]: { [`${t}-indicator`]: { color: e.colorSuccess } }
	} };
}, W = (e) => {
	let { componentCls: t } = e;
	return { [`${t}-line`]: {
		position: "relative",
		width: "100%",
		fontSize: e.fontSize,
		[`${t}-body`]: {
			display: "inline-flex",
			alignItems: "center",
			width: "100%",
			gap: e.marginXS
		},
		[`${t}-rail`]: {
			flex: "auto",
			background: e.remainingColor,
			borderRadius: e.lineBorderRadius,
			position: "relative",
			width: "100%",
			overflow: "hidden"
		},
		[`&${t}-status-active`]: { [`${t}-track:after`]: {
			content: "\"\"",
			position: "absolute",
			inset: 0,
			backgroundColor: e.colorBgContainer,
			borderRadius: "inherit",
			opacity: 0,
			animationName: H(),
			animationDuration: e.progressActiveMotionDuration,
			animationTimingFunction: e.motionEaseOutQuint,
			animationIterationCount: "infinite"
		} },
		[`${t}-track`]: {
			position: "absolute",
			insetInlineStart: 0,
			insetBlock: 0,
			borderRadius: "inherit",
			background: e.defaultColor,
			transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
			minWidth: "max-content",
			display: "flex",
			alignItems: "center",
			"&-success": { background: e.colorSuccess }
		},
		[`&${t}-status-exception`]: { [`${t}-track`]: { background: e.colorError } },
		[`&${t}-status-success`]: { [`${t}-track`]: { background: e.colorSuccess } },
		[`${t}-indicator-outer`]: { [`&${t}-indicator-start`]: { order: -1 } },
		[`${t}-body-layout-bottom`]: {
			flexDirection: "column",
			alignItems: "center",
			gap: e.marginXXS
		},
		[`${t}-indicator${t}-indicator-inner`]: {
			color: e.colorWhite,
			paddingInline: e.paddingXXS,
			width: "100%",
			display: "flex",
			justifyContent: "center",
			[`&${t}-indicator-end`]: { justifyContent: "end" },
			[`&${t}-indicator-start`]: { justifyContent: "start" },
			[`&${t}-indicator-bright`]: { color: "rgba(0, 0, 0, 0.45)" }
		}
	} };
}, G = (e) => {
	let { componentCls: t, iconCls: n } = e;
	return {
		[`${t}-circle`]: {
			[`${t}-circle-rail`]: { stroke: e.remainingColor },
			[`${t}-body:not(${t}-circle-gradient)`]: { [`${t}-circle-path`]: { stroke: e.defaultColor } },
			[`${t}-body`]: {
				position: "relative",
				lineHeight: 1,
				backgroundColor: "transparent"
			},
			[`${t}-indicator`]: {
				position: "absolute",
				insetBlockStart: "50%",
				insetInlineStart: 0,
				width: "100%",
				margin: 0,
				padding: 0,
				color: e.circleTextColor,
				fontSize: e.circleTextFontSize,
				lineHeight: 1,
				whiteSpace: "normal",
				textAlign: "center",
				transform: "translateY(-50%)",
				[n]: { fontSize: e.circleIconFontSize }
			},
			[`&${t}-status-exception`]: { [`${t}-body:not(${t}-circle-gradient)`]: { [`${t}-circle-path`]: { stroke: e.colorError } } },
			[`&${t}-status-success`]: { [`${t}-body:not(${t}-circle-gradient)`]: { [`${t}-circle-path`]: { stroke: e.colorSuccess } } }
		},
		[`${t}-inline-circle`]: {
			lineHeight: 1,
			[`${t}-inner`]: { verticalAlign: "bottom" }
		}
	};
}, K = (e) => {
	let { componentCls: t } = e;
	return { [t]: { [`${t}-steps`]: {
		display: "inline-block",
		"&-body": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			gap: e.progressStepMarginInlineEnd,
			[`${t}-indicator`]: { marginInlineStart: e.marginXS }
		},
		"&-item": {
			flexShrink: 0,
			minWidth: e.progressStepMinWidth,
			backgroundColor: e.remainingColor,
			transition: `all ${e.motionDurationSlow}`,
			"&-active": { backgroundColor: e.defaultColor }
		}
	} } };
}, ee = (e) => {
	let { componentCls: t, iconCls: n } = e;
	return { [t]: { [`${t}-small&-line, ${t}-small&-line ${t}-indicator ${n}`]: { fontSize: e.fontSizeSM } } };
}, te = y("Progress", (e) => {
	let t = e.calc(e.marginXXS).div(2).equal(), n = p(e, {
		progressStepMarginInlineEnd: t,
		progressStepMinWidth: t,
		progressActiveMotionDuration: "2.4s"
	});
	return [
		U(n),
		W(n),
		G(n),
		K(n),
		ee(n)
	];
}, (e) => ({
	circleTextColor: e.colorText,
	defaultColor: e.colorInfo,
	remainingColor: e.colorFillSecondary,
	lineBorderRadius: 100,
	circleTextFontSize: "1em",
	circleIconFontSize: `${e.fontSize / e.fontSizeSM}em`
})), ne = (e) => {
	let t = [];
	return Object.keys(e).forEach((n) => {
		let r = Number.parseFloat(n.replace(/%/g, ""));
		Number.isNaN(r) || t.push({
			key: r,
			value: e[n]
		});
	}), t = t.sort((e, t) => e.key - t.key), t.map(({ key: e, value: t }) => `${t} ${e}%`).join(", ");
}, re = (e, t) => {
	let { from: n = l.blue, to: r = l.blue, direction: i = t === "rtl" ? "to left" : "to right", ...a } = e;
	if (Object.keys(a).length !== 0) {
		let e = `linear-gradient(${i}, ${ne(a)})`;
		return {
			background: e,
			[V]: e
		};
	}
	let o = `linear-gradient(${i}, ${n}, ${r})`;
	return {
		background: o,
		[V]: o
	};
}, ie = (e) => {
	let { prefixCls: t, classNames: r, styles: i, direction: a, percent: o, size: s, strokeWidth: c, strokeColor: l, strokeLinecap: u = "round", children: d, railColor: f, trailColor: p, percentPosition: m, success: h } = e, { align: g, type: _ } = m, v = f ?? p, y = u === "square" || u === "butt" ? 0 : void 0, [b, S] = I(s ?? [-1, c || (s === "small" ? 6 : 8)], "line", { strokeWidth: c }), C = {
		backgroundColor: v || void 0,
		borderRadius: y,
		height: S
	}, w = `${t}-track`, T = l && typeof l != "string" ? re(l, a) : {
		[V]: l,
		background: l
	}, E = {
		width: `${M(o)}%`,
		height: S,
		borderRadius: y,
		...T
	}, D = N(e), O = {
		width: `${M(D)}%`,
		height: S,
		borderRadius: y,
		backgroundColor: h?.strokeColor
	};
	return /*#__PURE__*/ x.createElement("div", {
		className: n(`${t}-body`, r.body, { [`${t}-body-layout-bottom`]: g === "center" && _ === "outer" }),
		style: {
			width: b > 0 ? b : "100%",
			...i.body
		}
	}, /*#__PURE__*/ x.createElement("div", {
		className: n(`${t}-rail`, r.rail),
		style: {
			...C,
			...i.rail
		}
	}, /*#__PURE__*/ x.createElement("div", {
		className: n(w, r.track),
		style: {
			...E,
			...i.track
		}
	}, _ === "inner" && d), D !== void 0 && /*#__PURE__*/ x.createElement("div", {
		className: n(w, `${w}-success`, r.track),
		style: {
			...O,
			...i.track
		}
	})), _ === "outer" && d);
}, ae = (e) => {
	let { classNames: t, styles: r, size: i, steps: a, rounding: o = Math.round, percent: s = 0, strokeWidth: c = 8, strokeColor: l, railColor: u, trailColor: d, prefixCls: f, children: p } = e, m = o(s / 100 * a), [h, g] = I(i ?? [i === "small" ? 2 : 14, c], "step", {
		steps: a,
		strokeWidth: c
	}), _ = h / a, v = Array.from({ length: a }), y = u ?? d;
	for (let e = 0; e < a; e++) {
		let i = Array.isArray(l) ? l[e] : l;
		v[e] = /*#__PURE__*/ x.createElement("div", {
			key: e,
			className: n(`${f}-steps-item`, { [`${f}-steps-item-active`]: e <= m - 1 }, t.track),
			style: {
				backgroundColor: e <= m - 1 ? i : y,
				width: _,
				height: g,
				...r.track
			}
		});
	}
	return /*#__PURE__*/ x.createElement("div", {
		className: n(`${f}-steps-body`, t.body),
		style: r.body
	}, v, p);
}, oe = [
	"normal",
	"exception",
	"active",
	"success"
], q = /*#__PURE__*/ x.forwardRef((e, t) => {
	let { prefixCls: r, className: i, rootClassName: l, classNames: d, styles: p, steps: _, strokeColor: v, percent: y = 0, size: b = "medium", showInfo: S = !0, type: C = "line", status: w, format: T, style: E, percentPosition: D = {}, ...O } = e, { align: k = "end", type: A = "outer" } = D, j = Array.isArray(v) ? v[0] : v, P = typeof v == "string" || Array.isArray(v) ? v : void 0, F = x.useMemo(() => j ? new o(typeof j == "string" ? j : Object.values(j)[0]).isLight() : !1, [v]), L = x.useMemo(() => {
		let t = N(e);
		return Number.parseInt(t === void 0 ? (y ?? 0)?.toString() : (t ?? 0)?.toString(), 10);
	}, [y, e.success]), R = x.useMemo(() => !oe.includes(w) && L >= 100 ? "success" : w || "normal", [w, L]), { getPrefixCls: z, direction: V, className: H, style: U, classNames: W, styles: G } = g("progress"), K = z("progress", r), [ee, ne] = te(K), re = {
		...e,
		percent: y,
		type: C,
		size: b,
		showInfo: S,
		percentPosition: D
	}, [q, J] = m([W, d], [G, p], { props: re }), Y = C === "line", X = Y && !_, Z = x.useMemo(() => {
		if (!S) return null;
		let t = N(e), r, i = T || ((e) => `${e}%`), a = Y && F && A === "inner";
		return A === "inner" || T || R !== "exception" && R !== "success" ? r = i(M(y), M(t)) : R === "exception" ? r = Y ? /*#__PURE__*/ x.createElement(u, null) : /*#__PURE__*/ x.createElement(s, null) : R === "success" && (r = Y ? /*#__PURE__*/ x.createElement(f, null) : /*#__PURE__*/ x.createElement(c, null)), /*#__PURE__*/ x.createElement("span", {
			className: n(`${K}-indicator`, {
				[`${K}-indicator-bright`]: a,
				[`${K}-indicator-${k}`]: X,
				[`${K}-indicator-${A}`]: X
			}, q.indicator),
			style: J.indicator,
			title: typeof r == "string" ? r : void 0
		}, r);
	}, [
		S,
		y,
		L,
		R,
		C,
		K,
		T,
		Y,
		F,
		A,
		k,
		X,
		q.indicator,
		J.indicator
	]), Q = {
		...e,
		classNames: q,
		styles: J
	}, $;
	C === "line" ? $ = _ ? /*#__PURE__*/ x.createElement(ae, {
		...Q,
		strokeColor: P,
		prefixCls: K,
		steps: h(_) ? _.count : _
	}, Z) : /*#__PURE__*/ x.createElement(ie, {
		...Q,
		strokeColor: j,
		prefixCls: K,
		direction: V,
		percentPosition: {
			align: k,
			type: A
		}
	}, Z) : (C === "circle" || C === "dashboard") && ($ = /*#__PURE__*/ x.createElement(B, {
		...Q,
		strokeColor: j,
		prefixCls: K,
		progressStatus: R
	}, Z));
	let se = n(K, `${K}-status-${R}`, {
		[`${K}-${C === "dashboard" && "circle" || C}`]: C !== "line",
		[`${K}-inline-circle`]: C === "circle" && I(b, "circle")[0] <= 20,
		[`${K}-line`]: X,
		[`${K}-line-align-${k}`]: X,
		[`${K}-line-position-${A}`]: X,
		[`${K}-steps`]: _,
		[`${K}-show-info`]: S,
		[`${K}-small`]: b === "small",
		[`${K}-rtl`]: V === "rtl"
	}, H, i, l, q.root, ee, ne);
	return /*#__PURE__*/ x.createElement("div", {
		ref: t,
		style: {
			...U,
			...J.root,
			...E
		},
		className: se,
		role: "progressbar",
		"aria-valuenow": L,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		...a(O, [
			"railColor",
			"trailColor",
			"strokeWidth",
			"width",
			"gapDegree",
			"gapPosition",
			"gapPlacement",
			"strokeLinecap",
			"success"
		])
	}, $);
}), J = /* @__PURE__ */ e({ default: () => Y }), Y = q;
//#endregion
export { J as n, Y as t };
