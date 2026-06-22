globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, kn as r } from "../shared/core.js";
import { B as i, G as a, H as o, J as s, Jn as c, K as l, L as u, Q as d, R as f, Sr as p, U as m, V as h, W as g, Wn as _, Z as v, br as y, k as b, q as x, yt as S, z as C } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/modal/PurePanel.js
var w = /* @__PURE__ */ t(r()), T = b((e) => {
	let { prefixCls: t, className: r, closeIcon: i, closable: a, type: o, title: u, children: f, footer: m, classNames: h, styles: g, ...b } = e, { getPrefixCls: x } = w.useContext(y), { className: C, style: T, classNames: E, styles: D } = p("modal"), O = x(), k = t || x("modal"), A = _(O), [j, M] = s(k, A), [N, P] = c([E, h], [D, g], { props: e }), F = `${k}-confirm`, I = {};
	return I = o ? {
		closable: a ?? !1,
		title: "",
		footer: "",
		children: /*#__PURE__*/ w.createElement(l, {
			...e,
			prefixCls: k,
			confirmPrefixCls: F,
			rootPrefixCls: O,
			content: f
		})
	} : {
		closable: a ?? !0,
		title: u,
		footer: m !== null && /*#__PURE__*/ w.createElement(v, { ...e }),
		children: f
	}, /*#__PURE__*/ w.createElement(S, {
		prefixCls: k,
		className: n(j, `${k}-pure-panel`, o && F, o && `${F}-${o}`, r, C, M, A, N.root),
		style: {
			...T,
			...P.root
		},
		...b,
		closeIcon: d(k, i),
		closable: a,
		classNames: N,
		styles: P,
		...I
	});
}), E = /* @__PURE__ */ e({ default: () => O });
function D(e) {
	return f(g(e));
}
var O = x;
O.useModal = u, O.info = function(e) {
	return f(o(e));
}, O.success = function(e) {
	return f(m(e));
}, O.error = function(e) {
	return f(h(e));
}, O.warning = D, O.warn = D, O.confirm = function(e) {
	return f(i(e));
}, O.destroyAll = function() {
	for (; a.length;) {
		let e = a.pop();
		e && e();
	}
}, O.config = C, O._InternalPanelDoNotUseOrYouWillBeFired = T;
//#endregion
export { E as t };
