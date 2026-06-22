globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Mt as n, Nt as r, On as i, Tt as a, _n as o, bn as s, hn as c, kn as l, vn as u } from "../shared/core.js";
import { Lt as d, Mn as f, Sr as p, Xn as m, or as h, sr as g, tr as _ } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/border-beam/BorderBeamEffect.js
var v = /* @__PURE__ */ t(l()), y = /* @__PURE__ */ t(i()), b = (e) => typeof HTMLElement < "u" && e instanceof HTMLElement, x = (e) => {
	let { prefixCls: t, className: n, ...i } = e;
	return /*#__PURE__*/ v.createElement("div", {
		"aria-hidden": "true",
		className: r(t, n),
		...i
	});
}, S = (e) => {
	let { prefixCls: t, hostDom: n, ...r } = e;
	return !n || !b(n) ? null : /*#__PURE__*/ (0, y.createPortal)(/*#__PURE__*/ v.createElement(x, {
		prefixCls: t,
		...r
	}), n);
}, C = {
	borderWidth: [
		0,
		0,
		0,
		0
	],
	borderRadius: "0px"
}, w = (e) => {
	let t = Number.parseFloat(e);
	return Number.isFinite(t) ? t : 0;
}, T = (e) => {
	let [t, n] = v.useState(C);
	return v.useEffect(() => {
		if (!e) {
			n(C);
			return;
		}
		let { borderTopWidth: t, borderRightWidth: r, borderBottomWidth: i, borderLeftWidth: a, borderRadius: o } = getComputedStyle(e);
		n({
			borderWidth: [
				w(t),
				w(r),
				w(i),
				w(a)
			],
			borderRadius: o
		});
	}, [e]), t;
}, E = (e) => {
	let [t, n] = v.useState(null), r = /*#__PURE__*/ v.isValidElement(e) ? e : null, i = v.useCallback((e) => {
		let t = s(e);
		n((e) => e === t ? e : t);
	}, []), a = u(r ? c(r) : null, i);
	return !r || !o(r) ? [e, t] : [f(r, { ref: a }), t];
}, D = (...e) => `linear-gradient(to left, ${e.join(", ")}, transparent)`, O = (e) => _(e) ? [{
	color: e,
	percent: 0
}] : e ?? [], k = (e) => {
	let t = e[e.length - 1];
	return !t || t.percent === 100 ? e : [].concat(n(e), [{
		...t,
		percent: 100
	}]);
}, A = (e) => Number((Math.min(Math.max(e, 0), 100) / 100 * 70).toFixed(2)), j = (e) => k(e).map((e) => ({
	...e,
	percent: A(e.percent)
})), M = (e) => {
	let t = j(O(e));
	return t.length ? D.apply(void 0, n(t.map((e) => `${e.color} ${e.percent}%`))) : void 0;
}, N = g("BorderBeam", (e) => {
	let { componentCls: t, antCls: n } = e, [, r] = h(n, "border-beam"), i = `linear-gradient(to left, ${e.colorPrimary} 0%, ${e.colorPrimaryHover} 70%, transparent)`, o = new a("antBorderBeamMove", {
		from: { offsetDistance: "0%" },
		to: { offsetDistance: "100%" }
	});
	return { [t]: {
		display: "none",
		position: "absolute",
		inset: r("inset-offset", "0px"),
		borderRadius: r("border-radius", "0px"),
		zIndex: 1,
		overflow: "hidden",
		pointerEvents: "none",
		padding: e.lineWidth,
		"@supports ((mask-composite: exclude) or (-webkit-mask-composite: xor))": {
			WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
			WebkitMaskComposite: "xor",
			mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
			maskComposite: "exclude",
			"@supports (offset-path: rect(0 auto auto 0 round 1px))": {
				display: "block",
				"&::before": {
					...d(),
					content: "\"\"",
					position: "absolute",
					top: 0,
					left: 0,
					width: 100,
					aspectRatio: "1 / 1",
					opacity: .95,
					backgroundImage: r("beam-gradient", i),
					offsetAnchor: "90% 50%",
					offsetDistance: "0%",
					offsetPath: "rect(0 auto auto 0 round 100px)",
					offsetRotate: "auto",
					animationName: o,
					animationDuration: "6s",
					animationTimingFunction: "linear",
					animationIterationCount: "infinite",
					willChange: "offset-distance"
				}
			}
		},
		"@media (prefers-reduced-motion: reduce)": { "&::before": { display: "none" } }
	} };
}), P = (e) => _(e) ? `calc(-1 * ${e})` : `-${e}px`, F = (e) => {
	let { prefixCls: t, className: n, style: i, children: a, color: o, outset: s } = e, { className: c, style: l, getPrefixCls: u } = p("borderBeam"), d = u("border-beam", t), [f, g] = N(d), [_] = h(u(), "border-beam"), [y, b] = E(a), { borderWidth: x, borderRadius: C } = T(b), w = (0, v.useMemo)(() => M(o), [o]), D = (0, v.useMemo)(() => m(s) ? P(s) : x.map(P).join(" "), [x, s]);
	return /*#__PURE__*/ v.createElement(v.Fragment, null, y, /*#__PURE__*/ v.createElement(S, {
		prefixCls: d,
		hostDom: b,
		className: r(c, n, f, g),
		style: {
			...l,
			...i,
			...w && { [_("beam-gradient")]: w },
			[_("inset-offset")]: D,
			[_("border-radius")]: C
		}
	}));
}, I = /* @__PURE__ */ e({ default: () => L }), L = F;
//#endregion
export { I as t };
