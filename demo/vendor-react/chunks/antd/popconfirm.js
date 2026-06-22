globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, Ut as r, kn as i, sn as a, st as o } from "../shared/core.js";
import { Jn as s, Jt as c, Rn as l, Sr as u, _ as d, br as f, bt as p, er as m, sr as h, xt as g, zn as _ } from "../shared/antd-core.js";
import { c as v, i as y, n as b } from "./avatar.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/popconfirm/style/index.js
var x = /* @__PURE__ */ t(i()), S = h("Popconfirm", (e) => {
	let { componentCls: t, iconCls: n, antCls: r, zIndexPopup: i, colorText: a, colorWarning: o, marginXXS: s, marginXS: c, fontSize: l, fontWeightStrong: u, colorTextHeading: d } = e;
	return { [t]: {
		zIndex: i,
		[`&${r}-popover`]: { fontSize: l },
		[`${t}-message`]: {
			marginBottom: c,
			display: "flex",
			flexWrap: "nowrap",
			alignItems: "start",
			[`> ${t}-message-icon`]: { color: o },
			[`> ${t}-message-icon ${n}`]: {
				fontSize: l,
				lineHeight: 1,
				marginInlineEnd: c
			},
			[`${t}-title`]: {
				fontWeight: u,
				color: d,
				"&:only-child": { fontWeight: "normal" }
			},
			[`${t}-description`]: {
				marginTop: s,
				color: a
			}
		},
		[`${t}-buttons`]: {
			textAlign: "end",
			whiteSpace: "nowrap",
			button: { marginInlineStart: c }
		}
	} };
}, (e) => {
	let { zIndexPopupBase: t } = e;
	return { zIndexPopup: t + 60 };
}, { resetStyle: !1 }), C = (e) => {
	let { prefixCls: t, okButtonProps: r, cancelButtonProps: i, title: a, description: s, cancelText: u, okText: h, okType: v = "primary", icon: y = /*#__PURE__*/ x.createElement(o, null), showCancel: b = !0, close: S, onConfirm: C, onCancel: w, onPopupClick: T, classNames: E, styles: D } = e, { getPrefixCls: O } = x.useContext(f), [k] = l("Popconfirm", _.Popconfirm), A = d(a), j = d(s);
	return /*#__PURE__*/ x.createElement("div", {
		className: `${t}-inner-content`,
		onClick: T
	}, /*#__PURE__*/ x.createElement("div", { className: `${t}-message` }, y && /*#__PURE__*/ x.createElement("span", {
		className: n(`${t}-message-icon`, E?.icon),
		style: D?.icon
	}, y), /*#__PURE__*/ x.createElement("div", { className: `${t}-message-text` }, m(A) && /*#__PURE__*/ x.createElement("div", {
		className: n(`${t}-title`, E?.title),
		style: D?.title
	}, A), m(j) && /*#__PURE__*/ x.createElement("div", {
		className: n(`${t}-description`, E?.content),
		style: D?.content
	}, j))), /*#__PURE__*/ x.createElement("div", { className: `${t}-buttons` }, b && /*#__PURE__*/ x.createElement(g, {
		onClick: w,
		size: "small",
		...i
	}, u || k?.cancelText), /*#__PURE__*/ x.createElement(p, {
		buttonProps: {
			size: "small",
			...c(v),
			...r
		},
		actionFn: C,
		close: S,
		prefixCls: O("btn"),
		quitOnNullishReturnValue: !0,
		emitEvent: !0
	}, h || k?.okText)));
}, w = (e) => {
	let { prefixCls: t, placement: r, className: i, style: a, ...o } = e, { getPrefixCls: s } = x.useContext(f), c = s("popconfirm", t);
	return S(c), /*#__PURE__*/ x.createElement(y, {
		placement: r,
		className: n(c, i),
		style: a,
		content: /*#__PURE__*/ x.createElement(C, {
			prefixCls: c,
			...o
		})
	});
}, T = /* @__PURE__ */ e({ default: () => E }), E = /* @__PURE__ */ x.forwardRef((e, t) => {
	let { prefixCls: i, placement: c = "top", trigger: l, okType: d = "primary", icon: f = /*#__PURE__*/ x.createElement(o, null), children: p, overlayClassName: m, onOpenChange: h, overlayStyle: g, styles: _, arrow: y, classNames: w, ...T } = e, { getPrefixCls: E, className: D, style: O, classNames: k, styles: A, arrow: j, trigger: M } = u("popconfirm"), [N, P] = a(e.defaultOpen ?? !1, e.open), F = v(y, j), I = l || M || "click", L = (e) => {
		P(e), h?.(e);
	}, R = () => {
		L(!1);
	}, z = (t) => e.onConfirm?.call(void 0, t), B = (t) => {
		L(!1), e.onCancel?.call(void 0, t);
	}, V = (t) => {
		let { disabled: n = !1 } = e;
		n || L(t);
	}, H = E("popconfirm", i), U = {
		...e,
		placement: c,
		trigger: I,
		okType: d,
		overlayStyle: g,
		styles: _,
		classNames: w
	}, [W, G] = s([k, w], [A, _], { props: U }), K = n(H, D, m, W.root);
	return S(H), /*#__PURE__*/ x.createElement(b, {
		arrow: F,
		...r(T, ["title"]),
		trigger: I,
		placement: c,
		onOpenChange: V,
		open: N,
		ref: t,
		classNames: {
			root: K,
			container: W.container,
			arrow: W.arrow
		},
		styles: {
			root: {
				...O,
				...G.root,
				...g
			},
			container: G.container,
			arrow: G.arrow
		},
		content: /*#__PURE__*/ x.createElement(C, {
			okType: d,
			icon: f,
			...e,
			prefixCls: H,
			close: R,
			onConfirm: z,
			onCancel: B,
			classNames: W,
			styles: G
		}),
		"data-popover-inject": !0
	}, p);
});
/* istanbul ignore next */
E._InternalPanelDoNotUseOrYouWillBeFired = w;
//#endregion
export { T as t };
