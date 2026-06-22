globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, kn as r } from "../shared/core.js";
import { Qn as i, X as a, Xn as o, Y as s, Zn as c, b as l, br as u, or as d, tr as f, y as p } from "../shared/antd-core.js";
import { u as m } from "./avatar.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/grid/RowContext.js
var h = /* @__PURE__ */ t(r()), g = /*#__PURE__*/ (0, h.createContext)({});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/grid/col.js
function _(e) {
	return e === "auto" ? "1 1 auto" : c(e) ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
var v = /*#__PURE__*/ h.forwardRef((e, t) => {
	let { getPrefixCls: r, direction: a } = h.useContext(u), { gutter: f, wrap: p } = h.useContext(g), { prefixCls: m, span: v, order: y, offset: b, push: x, pull: S, className: C, children: w, flex: T, style: E, ...D } = e, O = r("col", m), k = r(), [A, j] = s(O), [M] = d(k, "col"), N = {}, P = {};
	l.forEach((t) => {
		let n = {}, r = e[t];
		c(r) ? n.span = r : i(r) && (n = r || {}), delete D[t], P = {
			...P,
			[`${O}-${t}-${n.span}`]: o(n.span),
			[`${O}-${t}-order-${n.order}`]: n.order || n.order === 0,
			[`${O}-${t}-offset-${n.offset}`]: n.offset || n.offset === 0,
			[`${O}-${t}-push-${n.push}`]: n.push || n.push === 0,
			[`${O}-${t}-pull-${n.pull}`]: n.pull || n.pull === 0,
			[`${O}-rtl`]: a === "rtl"
		}, n.flex && (P[`${O}-${t}-flex`] = !0, N[M(`${t}-flex`)] = _(n.flex));
	});
	let F = n(O, {
		[`${O}-${v}`]: v !== void 0,
		[`${O}-order-${y}`]: y,
		[`${O}-offset-${b}`]: b,
		[`${O}-push-${x}`]: x,
		[`${O}-pull-${S}`]: S
	}, C, P, A, j), I = {};
	return f?.[0] && (I.paddingInline = c(f[0]) ? `${f[0] / 2}px` : `calc(${f[0]} / 2)`), T && (I.flex = _(T), p === !1 && !I.minWidth && (I.minWidth = 0)), /*#__PURE__*/ h.createElement("div", {
		...D,
		style: {
			...I,
			...E,
			...N
		},
		className: F,
		ref: t
	}, w);
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/grid/hooks/useGutter.js
function y(e, t) {
	let n = [void 0, void 0], r = Array.isArray(e) ? e : [e, void 0], a = t || {
		xs: !0,
		sm: !0,
		md: !0,
		lg: !0,
		xl: !0,
		xxl: !0,
		xxxl: !0
	};
	return r.forEach((e, t) => {
		if (i(e)) for (let r = 0; r < p.length; r++) {
			let i = p[r];
			if (a[i] && e[i] !== void 0) {
				n[t] = e[i];
				break;
			}
		}
		else n[t] = e;
	}), n;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/grid/row.js
var b = (e, t) => {
	let [n, r] = h.useState(() => f(e) ? e : ""), a = () => {
		if (f(e) && r(e), i(e)) for (let n = 0; n < p.length; n++) {
			let i = p[n];
			if (!t || !t[i]) continue;
			let a = e[i];
			if (a !== void 0) {
				r(a);
				return;
			}
		}
	};
	return h.useEffect(() => {
		a();
	}, [JSON.stringify(e), t]), n;
}, x = /*#__PURE__*/ h.forwardRef((e, t) => {
	let { prefixCls: r, justify: i, align: o, className: s, style: l, children: d, gutter: f = 0, wrap: p, ..._ } = e, { getPrefixCls: v, direction: x } = h.useContext(u), S = m(!0, null), C = b(o, S), w = b(i, S), T = v("row", r), [E, D] = a(T), O = y(f, S), k = n(T, {
		[`${T}-no-wrap`]: p === !1,
		[`${T}-${w}`]: w,
		[`${T}-${C}`]: C,
		[`${T}-rtl`]: x === "rtl"
	}, s, E, D), A = {};
	O?.[0] && (A.marginInline = c(O[0]) ? `${O[0] / -2}px` : `calc(${O[0]} / -2)`);
	let [j, M] = O;
	A.rowGap = M;
	let N = h.useMemo(() => ({
		gutter: [j, M],
		wrap: p
	}), [
		j,
		M,
		p
	]);
	return /*#__PURE__*/ h.createElement(g.Provider, { value: N }, /*#__PURE__*/ h.createElement("div", {
		..._,
		className: k,
		style: {
			...A,
			...l
		},
		ref: t
	}, d));
}), S = /* @__PURE__ */ e({
	Col: () => v,
	Row: () => x,
	default: () => w
});
function C() {
	return m();
}
var w = { useBreakpoint: C }, T = /* @__PURE__ */ e({ default: () => E }), E = v;
//#endregion
export { v as a, y as i, S as n, x as r, T as t };
