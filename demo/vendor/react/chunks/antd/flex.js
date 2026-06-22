globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, Ut as r, kn as i, yt as a } from "../shared/core.js";
import { Xn as o, br as s, c, gn as l, sr as u } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/flex/utils.js
var d = /* @__PURE__ */ t(i()), f = [
	"wrap",
	"nowrap",
	"wrap-reverse"
], p = [
	"flex-start",
	"flex-end",
	"start",
	"end",
	"center",
	"space-between",
	"space-around",
	"space-evenly",
	"stretch",
	"normal",
	"left",
	"right"
], m = [
	"center",
	"start",
	"end",
	"flex-start",
	"flex-end",
	"self-start",
	"self-end",
	"baseline",
	"normal",
	"stretch"
], h = (e, t) => {
	let n = t.wrap === !0 ? "wrap" : t.wrap;
	return { [`${e}-wrap-${n}`]: n && f.includes(n) };
}, g = (e, t) => {
	let n = {};
	return m.forEach((r) => {
		n[`${e}-align-${r}`] = t.align === r;
	}), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, _ = (e, t) => {
	let n = {};
	return p.forEach((r) => {
		n[`${e}-justify-${r}`] = t.justify === r;
	}), n;
}, v = (e, t) => n({
	...h(e, t),
	...g(e, t),
	..._(e, t)
}), y = (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		display: "flex",
		margin: 0,
		padding: 0,
		"&-vertical": { flexDirection: "column" },
		"&-rtl": { direction: "rtl" },
		"&:empty": { display: "none" }
	} };
}, b = (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		"&-gap-small": { gap: e.flexGapSM },
		"&-gap-medium, &-gap-middle": { gap: e.flexGap },
		"&-gap-large": { gap: e.flexGapLG }
	} };
}, x = (e) => {
	let { componentCls: t } = e, n = {};
	return f.forEach((e) => {
		n[`${t}-wrap-${e}`] = { flexWrap: e };
	}), n;
}, S = (e) => {
	let { componentCls: t } = e, n = {};
	return m.forEach((e) => {
		n[`${t}-align-${e}`] = { alignItems: e };
	}), n;
}, C = (e) => {
	let { componentCls: t } = e, n = {};
	return p.forEach((e) => {
		n[`${t}-justify-${e}`] = { justifyContent: e };
	}), n;
}, w = u("Flex", (e) => {
	let { paddingXS: t, padding: n, paddingLG: r } = e, i = a(e, {
		flexGapSM: t,
		flexGap: n,
		flexGapLG: r
	});
	return [
		y(i),
		b(i),
		x(i),
		S(i),
		C(i)
	];
}, () => ({}), { resetStyle: !1 }), T = /* @__PURE__ */ e({ default: () => E }), E = /*#__PURE__*/ d.forwardRef((e, t) => {
	let { prefixCls: i, rootClassName: a, className: u, style: f, flex: p, gap: m, vertical: h, orientation: g, component: _ = "div", children: y, ...b } = e, { flex: x, direction: S, getPrefixCls: C } = d.useContext(s), T = C("flex", i), [E, D] = w(T), [, O] = l(g, h ?? x?.vertical), k = n(u, a, x?.className, T, E, D, v(T, {
		...e,
		vertical: O
	}), {
		[`${T}-rtl`]: S === "rtl",
		[`${T}-gap-${m}`]: c(m),
		[`${T}-vertical`]: O
	}), A = {
		...x?.style,
		...f
	};
	return o(p) && (A.flex = p), o(m) && !c(m) && (A.gap = m), /*#__PURE__*/ d.createElement(_, {
		ref: t,
		className: k,
		style: A,
		...r(b, [
			"justify",
			"wrap",
			"align"
		])
	}, y);
});
//#endregion
export { T as n, E as t };
