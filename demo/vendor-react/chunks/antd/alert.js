globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Ht as n, Nt as r, St as i, at as a, bt as o, ct as s, kn as c, kt as l, lt as u, ot as d, pn as f, st as p, ut as m, xt as h } from "../shared/core.js";
import { Jn as g, Qn as _, Sr as v, Xn as y, dr as b, nr as x, pr as S, sr as C } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/alert/style/index.js
var w = /* @__PURE__ */ t(c()), T = (e, t, n) => ({
	background: e,
	[`${n}-icon`]: { color: t }
}), E = (e) => {
	let { componentCls: t, motionDurationSlow: n, marginXS: r, marginSM: i, fontSize: a, fontSizeLG: o, lineHeight: s, borderRadiusLG: c, motionEaseInOutCirc: u, withDescriptionIconSize: d, colorText: f, colorTextHeading: p, withDescriptionPadding: m, defaultPadding: h, lineWidth: g, lineType: _, colorSuccessBorder: v, colorWarningBorder: y, colorErrorBorder: b, colorInfoBorder: x } = e;
	return {
		[t]: {
			...S(e),
			position: "relative",
			display: "flex",
			alignItems: "center",
			padding: h,
			wordWrap: "break-word",
			borderRadius: c,
			borderWidth: l(g),
			borderStyle: _,
			[`&${t}-success`]: { borderColor: v },
			[`&${t}-info`]: { borderColor: x },
			[`&${t}-warning`]: { borderColor: y },
			[`&${t}-error`]: { borderColor: b },
			[`&${t}-filled`]: { borderColor: "transparent" },
			[`&${t}-rtl`]: { direction: "rtl" },
			[`${t}-section`]: {
				flex: 1,
				minWidth: 0
			},
			[`${t}-icon`]: {
				marginInlineEnd: r,
				lineHeight: 0
			},
			"&-description": {
				display: "none",
				fontSize: a,
				lineHeight: s
			},
			"&-title": { color: p },
			[`&${t}-motion-leave`]: {
				overflow: "hidden",
				opacity: 1,
				transition: [
					"max-height",
					"opacity",
					"padding-top",
					"padding-bottom",
					"margin-bottom"
				].map((e) => `${e} ${n} ${u}`).join(", ")
			},
			[`&${t}-motion-leave-active`]: {
				maxHeight: 0,
				marginBottom: "0 !important",
				paddingTop: 0,
				paddingBottom: 0,
				opacity: 0
			}
		},
		[`${t}-with-description`]: {
			alignItems: "flex-start",
			padding: m,
			[`${t}-icon`]: {
				marginInlineEnd: i,
				fontSize: d,
				lineHeight: 0
			},
			[`${t}-title`]: {
				display: "block",
				marginBottom: r,
				color: p,
				fontSize: o
			},
			[`${t}-description`]: {
				display: "block",
				color: f
			}
		},
		[`${t}-banner`]: {
			marginBottom: 0,
			border: "0 !important",
			borderRadius: 0
		}
	};
}, D = (e) => {
	let { componentCls: t, colorSuccess: n, colorSuccessBg: r, colorWarning: i, colorWarningBg: a, colorError: o, colorErrorBg: s, colorInfo: c, colorInfoBg: l } = e;
	return { [t]: {
		"&-success": T(r, n, t),
		"&-info": T(l, c, t),
		"&-warning": T(a, i, t),
		"&-error": {
			...T(s, o, t),
			[`${t}-description > pre`]: {
				margin: 0,
				padding: 0
			}
		}
	} };
}, O = (e) => {
	let { componentCls: t, iconCls: n, motionDurationMid: r, marginXS: i, fontSizeIcon: a, colorIcon: o, colorIconHover: s } = e;
	return { [t]: {
		"&-actions": { marginInlineStart: i },
		[`${t}-close-icon`]: {
			marginInlineStart: i,
			padding: 0,
			overflow: "hidden",
			fontSize: a,
			lineHeight: l(a),
			backgroundColor: "transparent",
			border: "none",
			cursor: "pointer",
			...b(e),
			[`${n}-close`]: {
				color: o,
				transition: `color ${r}`,
				"&:hover": { color: s }
			}
		},
		"&-close-text": {
			color: o,
			transition: `color ${r}`,
			"&:hover": { color: s }
		}
	} };
}, ee = C("Alert", (e) => [
	E(e),
	D(e),
	O(e)
], (e) => ({
	withDescriptionIconSize: e.fontSizeHeading3,
	defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
	withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
})), k = (e) => {
	let { icon: t, type: n, className: r, style: i, successIcon: a, infoIcon: o, warningIcon: s, errorIcon: c } = e, l = {
		success: a ?? /*#__PURE__*/ w.createElement(m, null),
		info: o ?? /*#__PURE__*/ w.createElement(d, null),
		error: c ?? /*#__PURE__*/ w.createElement(u, null),
		warning: s ?? /*#__PURE__*/ w.createElement(p, null)
	};
	return /*#__PURE__*/ w.createElement("span", {
		className: r,
		style: i
	}, t ?? l[n]);
}, te = (e) => {
	let { isClosable: t, prefixCls: n, closeIcon: i, handleClose: a, ariaProps: o, className: c, style: l } = e, u = i === !0 || i === void 0 ? /*#__PURE__*/ w.createElement(s, null) : i;
	return t ? /*#__PURE__*/ w.createElement("button", {
		type: "button",
		onClick: a,
		className: r(`${n}-close-icon`, c),
		tabIndex: 0,
		style: l,
		...o
	}, u) : null;
}, A = /*#__PURE__*/ w.forwardRef((e, t) => {
	let { description: i, prefixCls: a, message: o, title: s, banner: c, className: l, rootClassName: u, style: d, onMouseEnter: p, onMouseLeave: m, onClick: h, afterClose: b, showIcon: S, closable: C, closeText: T, closeIcon: E, action: D, id: O, styles: A, classNames: j, ...M } = e, N = s ?? o, [P, ne] = w.useState(!1), F = w.useRef(null);
	w.useImperativeHandle(t, () => ({ nativeElement: F.current }));
	let { getPrefixCls: re, direction: I, variant: ie, closable: L, closeIcon: R, className: ae, style: z, classNames: B, styles: V, successIcon: H, infoIcon: U, warningIcon: W, errorIcon: G } = v("alert"), K = re("alert", a), [q, oe] = ee(K), { onClose: se, afterClose: ce } = _(C) ? C : {}, le = (t) => {
		ne(!0), (se ?? e.onClose)?.(t);
	}, J = w.useMemo(() => e.type === void 0 ? c ? "warning" : "info" : e.type, [e.type, c]), Y = e.variant ?? ie ?? "outlined", X = w.useMemo(() => _(C) && C.closeIcon || T ? !0 : typeof C == "boolean" ? C : E !== !1 && y(E) ? !0 : !!L, [
		T,
		E,
		C,
		L
	]), Z = c && S === void 0 ? !0 : S, ue = {
		...e,
		prefixCls: K,
		variant: Y,
		type: J,
		showIcon: Z,
		closable: X
	}, [Q, $] = g([B, j], [V, A], { props: ue }), de = r(K, `${K}-${J}`, `${K}-${Y}`, {
		[`${K}-with-description`]: !!i,
		[`${K}-no-icon`]: !Z,
		[`${K}-banner`]: !!c,
		[`${K}-rtl`]: I === "rtl"
	}, ae, l, u, Q.root, oe, q), fe = n(M, {
		aria: !0,
		data: !0
	}), pe = w.useMemo(() => _(C) && C.closeIcon ? C.closeIcon : T || (E === void 0 ? _(L) && L.closeIcon ? L.closeIcon : R : E), [
		E,
		C,
		L,
		T,
		R
	]), me = w.useMemo(() => {
		let e = C ?? L;
		return _(e) ? n(e, {
			data: !0,
			aria: !0
		}) : {};
	}, [C, L]);
	return /*#__PURE__*/ w.createElement(x, {
		visible: !P,
		motionName: `${K}-motion`,
		motionAppear: !1,
		motionEnter: !1,
		onLeaveStart: (e) => ({ maxHeight: e.offsetHeight }),
		onLeaveEnd: ce ?? b
	}, ({ className: t, style: n }, a) => /*#__PURE__*/ w.createElement("div", {
		id: O,
		ref: f(F, a),
		"data-show": !P,
		className: r(de, t),
		style: {
			...$.root,
			...z,
			...d,
			...n
		},
		onMouseEnter: p,
		onMouseLeave: m,
		onClick: h,
		role: "alert",
		...fe
	}, Z ? /*#__PURE__*/ w.createElement(k, {
		className: r(`${K}-icon`, Q.icon),
		style: $.icon,
		description: i,
		icon: e.icon,
		prefixCls: K,
		type: J,
		successIcon: H,
		infoIcon: U,
		warningIcon: W,
		errorIcon: G
	}) : null, /*#__PURE__*/ w.createElement("div", {
		className: r(`${K}-section`, Q.section),
		style: $.section
	}, N ? /*#__PURE__*/ w.createElement("div", {
		className: r(`${K}-title`, Q.title),
		style: $.title
	}, N) : null, i ? /*#__PURE__*/ w.createElement("div", {
		className: r(`${K}-description`, Q.description),
		style: $.description
	}, i) : null), D ? /*#__PURE__*/ w.createElement("div", {
		className: r(`${K}-actions`, Q.actions),
		style: $.actions
	}, D) : null, /*#__PURE__*/ w.createElement(te, {
		className: Q.close,
		style: $.close,
		isClosable: X,
		prefixCls: K,
		closeIcon: pe,
		handleClose: le,
		ariaProps: me
	})));
}), j = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		return i(this, t), e = a(this, t, arguments), e.state = {
			error: void 0,
			info: {}
		}, e;
	}
	return o(t, e), h(t, [{
		key: "componentDidCatch",
		value: function(e, t) {
			this.setState({
				error: e,
				info: t
			});
		}
	}, {
		key: "render",
		value: function() {
			let { message: e, title: t, description: n, id: r, children: i } = this.props, { error: a, info: o } = this.state, s = t ?? e, c = o?.componentStack || null, l = y(s) ? s : a?.toString(), u = y(n) ? n : c;
			return a ? /*#__PURE__*/ w.createElement(A, {
				id: r,
				type: "error",
				title: l,
				description: /*#__PURE__*/ w.createElement("pre", { style: {
					fontSize: "0.9em",
					overflowX: "auto"
				} }, u)
			}) : i;
		}
	}]);
}(w.PureComponent), M = /* @__PURE__ */ e({ default: () => N }), N = A;
N.ErrorBoundary = j;
//#endregion
export { M as t };
