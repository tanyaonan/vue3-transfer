globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Mt as n, Nt as r, On as i, Ut as a, wn as o } from "../shared/core.js";
import { Sr as s, br as c } from "../shared/antd-core.js";
import { c as l, l as u, o as d, s as f } from "./breadcrumb.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/layout/hooks/useHasSider.js
var p = /* @__PURE__ */ t(i());
function m(e, t, n) {
	return typeof n == "boolean" ? n : e.length ? !0 : o(t).some((e) => e.type === d);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/layout/layout.js
var h = ({ suffixCls: e, tagName: t, displayName: n }) => (n) => /* @__PURE__ */ p.forwardRef((r, i) => /*#__PURE__*/ p.createElement(n, {
	ref: i,
	suffixCls: e,
	tagName: t,
	...r
})), g = /*#__PURE__*/ p.forwardRef((e, t) => {
	let { prefixCls: n, suffixCls: i, className: a, tagName: o, ...s } = e, { getPrefixCls: u } = p.useContext(c), d = u("layout", n), [f] = l(d), m = i ? `${d}-${i}` : d;
	return /*#__PURE__*/ p.createElement(o, {
		className: r(n || m, a, f),
		ref: t,
		...s
	});
}), _ = /*#__PURE__*/ p.forwardRef((e, t) => {
	let { direction: i } = p.useContext(c), [o, d] = p.useState([]), { prefixCls: f, className: h, rootClassName: g, children: _, hasSider: v, tagName: y, style: b, ...x } = e, S = a(x, ["suffixCls"]), { getPrefixCls: C, className: w, style: T } = s("layout"), E = C("layout", f), D = m(o, _, v), [O, k] = l(E), A = r(E, {
		[`${E}-has-sider`]: D,
		[`${E}-rtl`]: i === "rtl"
	}, w, h, g, O, k), j = p.useMemo(() => ({ siderHook: {
		addSider: (e) => {
			d((t) => [].concat(n(t), [e]));
		},
		removeSider: (e) => {
			d((t) => t.filter((t) => t !== e));
		}
	} }), []);
	return /*#__PURE__*/ p.createElement(u.Provider, { value: j }, /*#__PURE__*/ p.createElement(y, {
		ref: t,
		className: A,
		style: {
			...T,
			...b
		},
		...S
	}, _));
}), v = h({
	tagName: "div",
	displayName: "Layout"
})(_), y = h({
	suffixCls: "header",
	tagName: "header",
	displayName: "Header"
})(g), b = h({
	suffixCls: "footer",
	tagName: "footer",
	displayName: "Footer"
})(g), x = h({
	suffixCls: "content",
	tagName: "main",
	displayName: "Content"
})(g), S = /* @__PURE__ */ e({ default: () => C }), C = v;
C.Header = y, C.Footer = b, C.Content = x, C.Sider = d, C._InternalSiderContext = f;
//#endregion
export { S as t };
