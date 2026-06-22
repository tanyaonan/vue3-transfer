globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Bt as n, Lt as r, Mt as i, Nt as a, On as o, Rt as s, Ut as c, _n as l, cn as u, en as d, hn as f, j as p, kt as m, ln as h, lt as g, pn as _, rt as v, st as y, ut as b, wn as x, yt as S } from "../shared/core.js";
import { An as C, Gt as w, It as T, Jn as E, Mn as D, On as O, Qn as k, Rn as A, Sr as j, Un as M, Wn as N, Xn as P, Yn as F, _t as I, at as L, b as R, br as z, cr as B, ct as ee, dt as te, en as ne, ft as re, gt as ie, ht as V, in as ae, kn as oe, lt as se, nr as H, or as ce, ot as U, pr as W, pt as G, qn as le, rr as ue, s as de, sr as K, st as q, ut as fe, vt as pe, zn as me } from "../shared/antd-core.js";
import { o as he } from "./avatar.js";
import { C as J, S as ge, w as Y, x as _e } from "./calendar.js";
import { a as ve, r as ye } from "./col.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/hooks/useDebounce.js
var X = /* @__PURE__ */ t(o());
function Z(e) {
	let [t, n] = X.useState(e);
	return X.useEffect(() => {
		let t = setTimeout(() => {
			n(e);
		}, e.length ? 0 : 10);
		return () => {
			clearTimeout(t);
		};
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/style/explain.js
var be = (e) => {
	let { componentCls: t, motionDurationFast: n, motionEaseInOut: r } = e, i = `${t}-show-help`, a = `${t}-show-help-item`;
	return { [i]: {
		transition: `opacity ${n} ${r}`,
		"&-appear, &-enter": {
			opacity: 0,
			"&-active": { opacity: 1 }
		},
		"&-leave": {
			opacity: 1,
			"&-active": { opacity: 0 }
		},
		[a]: {
			overflow: "hidden",
			transition: `${[
				"height",
				"opacity",
				"transform"
			].map((e) => `${e} ${n} ${r}`).join(", ")} !important`,
			[`&${a}-appear, &${a}-enter`]: {
				transform: "translateY(-5px)",
				opacity: 0,
				"&-active": {
					transform: "translateY(0)",
					opacity: 1
				}
			},
			[`&${a}-leave-active`]: { transform: "translateY(-5px)" }
		}
	} };
}, xe = (e) => ({
	legend: {
		display: "block",
		width: "100%",
		marginBottom: e.marginLG,
		padding: 0,
		color: e.colorTextDescription,
		fontSize: e.fontSizeLG,
		lineHeight: "inherit",
		border: 0,
		borderBottom: `${m(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
	},
	"input[type=\"search\"]": { boxSizing: "border-box" },
	"input[type=\"radio\"], input[type=\"checkbox\"]": { lineHeight: "normal" },
	"input[type=\"file\"]": { display: "block" },
	"input[type=\"range\"]": {
		display: "block",
		width: "100%"
	},
	"select[multiple], select[size]": { height: "auto" },
	"input[type='file']:focus, input[type='radio']:focus, input[type='checkbox']:focus": {
		outline: 0,
		boxShadow: `0 0 0 ${m(e.controlOutlineWidth)} ${e.controlOutline}`
	},
	output: {
		display: "block",
		paddingTop: 15,
		color: e.colorText,
		fontSize: e.fontSize,
		lineHeight: e.lineHeight
	}
}), Se = (e, t) => {
	let { formItemCls: n } = e;
	return { [n]: {
		[`${n}-label > label`]: { height: t },
		[`${n}-control-input`]: { minHeight: t }
	} };
}, Ce = (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		...W(e),
		...xe(e),
		[`${t}-text`]: {
			display: "inline-block",
			paddingInlineEnd: e.paddingSM
		},
		"&-small": { ...Se(e, e.controlHeightSM) },
		"&-large": { ...Se(e, e.controlHeightLG) }
	} };
}, we = (e) => {
	let { formItemCls: t, iconCls: n, rootPrefixCls: r, antCls: i, labelRequiredMarkColor: a, labelColor: o, labelFontSize: s, labelHeight: c, labelColonMarginInlineStart: l, labelColonMarginInlineEnd: u, itemMarginBottom: d } = e, [f] = ce(i, "grid");
	return { [t]: {
		...W(e),
		marginBottom: d,
		verticalAlign: "top",
		"&-with-help": { transition: "none" },
		[`&-hidden,
        &-hidden${i}-row`]: { display: "none" },
		"&-has-warning": { [`${t}-split`]: { color: e.colorError } },
		"&-has-error": { [`${t}-split`]: { color: e.colorWarning } },
		[`${t}-label`]: {
			flexGrow: 0,
			overflow: "hidden",
			whiteSpace: "nowrap",
			textAlign: "end",
			verticalAlign: "middle",
			"&-left": { textAlign: "start" },
			"&-wrap": {
				overflow: "unset",
				lineHeight: e.lineHeight,
				whiteSpace: "unset",
				"> label": {
					verticalAlign: "middle",
					textWrap: "balance"
				}
			},
			"> label": {
				position: "relative",
				display: "inline-flex",
				alignItems: "center",
				maxWidth: "100%",
				height: c,
				color: o,
				fontSize: s,
				[`> ${n}`]: {
					fontSize: e.fontSize,
					verticalAlign: "top"
				},
				[`&${t}-required`]: {
					"&::before": {
						display: "inline-block",
						marginInlineEnd: e.marginXXS,
						color: a,
						fontSize: e.fontSize,
						fontFamily: "sans-serif",
						lineHeight: 1,
						content: "\"*\""
					},
					[`&${t}-required-mark-hidden, &${t}-required-mark-optional`]: { "&::before": { display: "none" } }
				},
				[`${t}-optional`]: {
					display: "inline-block",
					marginInlineStart: e.marginXXS,
					color: e.colorTextDescription,
					[`&${t}-required-mark-hidden`]: { display: "none" }
				},
				[`${t}-tooltip`]: {
					color: e.colorTextDescription,
					cursor: "help",
					writingMode: "horizontal-tb",
					marginInlineStart: e.marginXXS
				},
				"&::after": {
					content: "\":\"",
					position: "relative",
					marginBlock: 0,
					marginInlineStart: l,
					marginInlineEnd: u
				},
				[`&${t}-no-colon::after`]: { content: "\"\\a0\"" }
			}
		},
		[`${t}-control`]: {
			[f("display")]: "flex",
			flexDirection: "column",
			flexGrow: 1,
			[`&:first-child:not([class^="'${r}-col-'"]):not([class*="' ${r}-col-'"])`]: { width: "100%" },
			"&-input": {
				position: "relative",
				display: "flex",
				alignItems: "center",
				minHeight: e.controlHeight,
				"&-content": {
					flex: "auto",
					maxWidth: "100%",
					[`&:has(> ${i}-switch:only-child, > ${i}-rate:only-child)`]: {
						display: "flex",
						alignItems: "center"
					}
				}
			}
		},
		[t]: {
			"&-additional": {
				display: "flex",
				flexDirection: "column"
			},
			"&-explain, &-extra": {
				clear: "both",
				color: e.colorTextDescription,
				fontSize: e.fontSize,
				lineHeight: e.lineHeight
			},
			"&-explain-connected": { width: "100%" },
			"&-extra": {
				minHeight: e.controlHeightSM,
				transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`
			},
			"&-explain": {
				"&-error": { color: e.colorError },
				"&-warning": { color: e.colorWarning }
			}
		},
		[`&-with-help ${t}-explain`]: {
			height: "auto",
			opacity: 1
		},
		[`${t}-feedback-icon`]: {
			fontSize: e.fontSize,
			textAlign: "center",
			visibility: "visible",
			animationName: T,
			animationDuration: e.motionDurationMid,
			animationTimingFunction: e.motionEaseOutBack,
			pointerEvents: "none",
			"&-success": { color: e.colorSuccess },
			"&-error": { color: e.colorError },
			"&-warning": { color: e.colorWarning },
			"&-validating": { color: e.colorPrimary }
		}
	} };
}, Q = (e) => ({
	padding: e.verticalLabelPadding,
	margin: e.verticalLabelMargin,
	whiteSpace: "initial",
	textAlign: "start",
	"> label": {
		margin: 0,
		"&::after": { visibility: "hidden" }
	}
}), Te = (e) => {
	let { antCls: t, formItemCls: n } = e;
	return { [`${n}-horizontal`]: {
		[`${n}-label`]: { flexGrow: 0 },
		[`${n}-control`]: {
			flex: "1 1 0",
			minWidth: 0
		},
		[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]: { [`& + ${n}-control`]: { minWidth: "unset" } },
		[`${t}-col-24${n}-label,
        ${t}-col-xl-24${n}-label`]: Q(e)
	} };
}, Ee = (e) => {
	let { componentCls: t, formItemCls: n, inlineItemMarginBottom: r } = e;
	return { [`${t}-inline`]: {
		display: "flex",
		flexWrap: "wrap",
		[`${n}-inline`]: {
			flex: "none",
			marginInlineEnd: e.margin,
			marginBottom: r,
			"&-row": { flexWrap: "nowrap" },
			[`> ${n}-label,
        > ${n}-control`]: {
				display: "inline-block",
				verticalAlign: "top"
			},
			[`> ${n}-label`]: { flex: "none" },
			[`${t}-text`]: { display: "inline-block" },
			[`${n}-has-feedback`]: { display: "inline-block" }
		}
	} };
}, De = (e) => {
	let { componentCls: t, formItemCls: n, rootPrefixCls: r } = e;
	return {
		[`${n} ${n}-label`]: Q(e),
		[`${t}:not(${t}-inline)`]: { [n]: {
			flexWrap: "wrap",
			[`${n}-label, ${n}-control`]: { [`&:not([class*=" ${r}-col-xs"])`]: {
				flex: "0 0 100%",
				maxWidth: "100%"
			} }
		} }
	};
}, Oe = (e) => {
	let { componentCls: t, formItemCls: n, antCls: r } = e;
	return {
		[`${n}-vertical`]: {
			[`${n}-row`]: { flexDirection: "column" },
			[`${n}-label > label`]: { height: "auto" },
			[`${n}-control`]: { width: "100%" },
			[`${n}-label,
        ${r}-col-24${n}-label,
        ${r}-col-xl-24${n}-label`]: Q(e)
		},
		[`@media (max-width: ${m(e.screenXSMax)})`]: [De(e), { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${r}-col-xs-24${n}-label`]: Q(e) } } }],
		[`@media (max-width: ${m(e.screenSMMax)})`]: { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${r}-col-sm-24${n}-label`]: Q(e) } } },
		[`@media (max-width: ${m(e.screenMDMax)})`]: { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${r}-col-md-24${n}-label`]: Q(e) } } },
		[`@media (max-width: ${m(e.screenLGMax)})`]: { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${r}-col-lg-24${n}-label`]: Q(e) } } }
	};
}, ke = (e) => ({
	labelRequiredMarkColor: e.colorError,
	labelColor: e.colorTextHeading,
	labelFontSize: e.fontSize,
	labelHeight: e.controlHeight,
	labelColonMarginInlineStart: e.marginXXS / 2,
	labelColonMarginInlineEnd: e.marginXS,
	itemMarginBottom: e.marginLG,
	verticalLabelPadding: `0 0 ${e.paddingXS}px`,
	verticalLabelMargin: 0,
	inlineItemMarginBottom: 0
}), Ae = (e, t) => S(e, {
	formItemCls: `${e.componentCls}-item`,
	rootPrefixCls: t
}), je = K("Form", (e, { rootPrefixCls: t }) => {
	let n = Ae(e, t);
	return [
		Ce(n),
		we(n),
		be(n),
		Te(n),
		Ee(n),
		Oe(n),
		w(n),
		T
	];
}, ke, { order: -1e3 }), Me = [];
function Ne(e, t, n, r = 0) {
	return {
		key: typeof e == "string" ? e : `${t}-${r}`,
		error: e,
		errorStatus: n
	};
}
var Pe = ({ help: e, helpStatus: t, errors: n = Me, warnings: r = Me, className: o, fieldId: s, onVisibleChanged: c }) => {
	let { prefixCls: l } = X.useContext(q), { classNames: u, styles: d } = X.useContext(L), f = `${l}-item-explain`, p = N(l), [m, h] = je(l, p), g = X.useMemo(() => ae(l), [l]), _ = Z(n), v = Z(r), y = P(e) && e !== !1, b = X.useMemo(() => y ? [Ne(e, "help", t)] : [].concat(i(_.map((e, t) => Ne(e, "error", "error", t))), i(v.map((e, t) => Ne(e, "warning", "warning", t)))), [
		e,
		t,
		y,
		_,
		v
	]), x = X.useMemo(() => {
		let e = {};
		return b.forEach(({ key: t }) => {
			e[t] = (e[t] || 0) + 1;
		}), b.map((t, n) => ({
			...t,
			key: e[t.key] > 1 ? `${t.key}-fallback-${n}` : t.key
		}));
	}, [b]), S = {};
	return s && (S.id = `${s}_help`), /*#__PURE__*/ X.createElement(H, {
		motionDeadline: g.motionDeadline,
		motionName: `${l}-show-help`,
		visible: !!x.length,
		onVisibleChanged: c
	}, (e) => {
		let { className: t, style: n } = e;
		return /*#__PURE__*/ X.createElement("div", {
			...S,
			className: a(f, t, u?.help, h, p, o, m),
			style: {
				...d?.help,
				...n
			}
		}, /*#__PURE__*/ X.createElement(ue, {
			keys: x,
			...ae(l),
			motionName: `${l}-show-help-item`,
			component: !1
		}, (e) => {
			let { key: t, error: n, errorStatus: r, className: i, style: o } = e;
			return /*#__PURE__*/ X.createElement("div", {
				key: t,
				className: a(i, u?.helpItem, { [`${f}-${r}`]: r }),
				style: {
					...d?.helpItem,
					...o
				}
			}, n);
		}));
	});
}, Fe = /*#__PURE__*/ X.forwardRef((e, t) => {
	let n = X.useContext(oe), { getPrefixCls: r, direction: i, requiredMark: o, colon: s, scrollToFirstError: c, className: l, style: u, styles: d, classNames: f, tooltip: p, labelAlign: m } = j("form"), { prefixCls: h, className: g, rootClassName: _, size: v, disabled: y = n, form: b, colon: x, labelAlign: S, labelWrap: w, labelCol: T, wrapperCol: D, layout: A = "horizontal", scrollToFirstError: P, requiredMark: F, onFinishFailed: I, name: R, style: z, feedbackIcons: B, variant: ie, classNames: V, styles: ae, tooltip: H, ...ce } = e, U = ne(v), W = X.useContext(M), G = X.useMemo(() => F === void 0 ? o === void 0 ? !0 : o : F, [F, o]), le = x ?? s, ue = S ?? m, de = {
		...p,
		...H
	}, K = r("form", h), q = N(K), [fe, pe] = je(K, q), me = {
		...e,
		size: U,
		disabled: y,
		layout: A,
		colon: le,
		requiredMark: G
	}, [he, J] = E([f, V], [d, ae], { props: me }), ge = a(K, `${K}-${A}`, {
		[`${K}-hide-required-mark`]: G === !1,
		[`${K}-rtl`]: i === "rtl",
		[`${K}-large`]: U === "large",
		[`${K}-small`]: U === "small"
	}, pe, q, fe, l, g, _, he.root), [Y] = _e(b), { __INTERNAL__: ve } = Y;
	ve.name = R;
	let ye = X.useMemo(() => ({
		name: R,
		labelAlign: ue,
		labelCol: T,
		labelWrap: w,
		wrapperCol: D,
		layout: A,
		colon: le,
		requiredMark: G,
		itemRef: ve.itemRef,
		form: Y,
		feedbackIcons: B,
		tooltip: de,
		classNames: he,
		styles: J
	}), [
		R,
		ue,
		T,
		D,
		A,
		le,
		G,
		Y,
		B,
		he,
		J,
		de
	]), Z = X.useRef(null);
	X.useImperativeHandle(t, () => ({
		...Y,
		nativeElement: Z.current?.nativeElement
	}));
	let be = (e, t) => {
		if (e) {
			let n = { block: "nearest" };
			k(e) && (n = {
				...n,
				...e
			}), Y.scrollToField(t, n);
		}
	}, xe = (e) => {
		if (I?.(e), e.errorFields.length) {
			let t = e.errorFields[0].name;
			if (P !== void 0) {
				be(P, t);
				return;
			}
			c !== void 0 && be(c, t);
		}
	};
	return /*#__PURE__*/ X.createElement(te.Provider, { value: ie }, /*#__PURE__*/ X.createElement(C, { disabled: y }, /*#__PURE__*/ X.createElement(O.Provider, { value: U }, /*#__PURE__*/ X.createElement(ee, { validateMessages: W }, /*#__PURE__*/ X.createElement(L.Provider, { value: ye }, /*#__PURE__*/ X.createElement(se, { status: !0 }, /*#__PURE__*/ X.createElement(re, {
		id: R,
		...ce,
		name: R,
		onFinishFailed: xe,
		form: Y,
		ref: Z,
		style: {
			...J?.root,
			...u,
			...z
		},
		className: ge
	})))))));
}), Ie = (e) => {
	if (F(e)) return e;
	let t = x(e);
	return t.length <= 1 ? t[0] : t;
}, Le = () => {
	let { status: e, errors: t = [], warnings: n = [] } = X.useContext(U);
	return {
		status: e,
		errors: t,
		warnings: n
	};
};
Le.Context = U;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/hooks/useFrameState.js
function Re(e) {
	let [t, r] = X.useState(e), i = X.useRef(null), a = X.useRef([]), o = X.useRef(!1);
	X.useEffect(() => (o.current = !1, () => {
		o.current = !0, n.cancel(i.current), i.current = null;
	}), []);
	function s(e) {
		o.current || (i.current === null && (a.current = [], i.current = n(() => {
			i.current = null, r((e) => {
				let t = e;
				return a.current.forEach((e) => {
					t = e(t);
				}), t;
			});
		})), a.current.push(e));
	}
	return [t, s];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/hooks/useItemRef.js
var ze = () => {
	let { itemRef: e } = X.useContext(L), t = X.useRef({});
	return (n, r) => {
		let i = r && k(r) && f(r), a = n.join("_");
		return (t.current.name !== a || t.current.originRef !== i) && (t.current.name = a, t.current.originRef = i, t.current.ref = _(e(n), i)), t.current.ref;
	};
}, Be = (e) => {
	let { formItemCls: t } = e;
	return { "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": { [`${t}-control`]: { display: "flex" } } };
}, Ve = B(["Form", "item-item"], (e, { rootPrefixCls: t }) => Be(Ae(e, t))), He = 24, Ue = (e) => {
	let { prefixCls: t, status: n, labelCol: o, wrapperCol: c, children: l, errors: u, warnings: d, _internalItemRender: f, extra: p, help: m, fieldId: g, marginBottom: _, onErrorVisibleChanged: v, label: y } = e, b = `${t}-item`, x = X.useContext(L), { classNames: S, styles: C } = x, w = X.useMemo(() => {
		let e = { ...c || x.wrapperCol || {} };
		return y === null && !o && !c && x.labelCol && [void 0].concat(i(R)).forEach((t) => {
			let n = t ? [t] : [], i = s(x.labelCol, n), a = k(i) ? i : {}, o = s(e, n), c = k(o) ? o : {};
			"span" in a && !("offset" in c) && a.span < He && (e = r(e, [].concat(n, ["offset"]), a.span));
		}), e;
	}, [
		c,
		x.wrapperCol,
		x.labelCol,
		y,
		o
	]), T = a(`${b}-control`, w.className), E = X.useMemo(() => {
		let { labelCol: e, wrapperCol: t, ...n } = x;
		return n;
	}, [x]), D = X.useRef(null), [O, A] = X.useState(0);
	h(() => {
		p && D.current ? A(D.current.clientHeight) : A(0);
	}, [p]);
	let j = /*#__PURE__*/ X.createElement("div", { className: `${b}-control-input` }, /*#__PURE__*/ X.createElement("div", {
		className: a(`${b}-control-input-content`, S?.content),
		style: C?.content
	}, l)), M = X.useMemo(() => ({
		prefixCls: t,
		status: n
	}), [t, n]), N = _ !== null || u.length || d.length ? /*#__PURE__*/ X.createElement(q.Provider, { value: M }, /*#__PURE__*/ X.createElement(Pe, {
		fieldId: g,
		errors: u,
		warnings: d,
		help: m,
		helpStatus: n,
		className: `${b}-explain-connected`,
		onVisibleChanged: v
	})) : null, P = {};
	g && (P.id = `${g}_extra`);
	let F = p ? /*#__PURE__*/ X.createElement("div", {
		...P,
		className: a(`${b}-extra`, S?.extra),
		style: C?.extra,
		ref: D
	}, p) : null, I = N || F ? /*#__PURE__*/ X.createElement("div", {
		className: `${b}-additional`,
		style: _ ? { minHeight: _ + O } : {}
	}, N, F) : null, z = f && f.mark === "pro_table_render" && f.render ? f.render(e, {
		input: j,
		errorList: N,
		extra: F
	}) : /*#__PURE__*/ X.createElement(X.Fragment, null, j, I);
	return /*#__PURE__*/ X.createElement(L.Provider, { value: E }, /*#__PURE__*/ X.createElement(ve, {
		...w,
		className: T
	}, z), /*#__PURE__*/ X.createElement(Ve, { prefixCls: t }));
}, We = ({ prefixCls: e, label: t, htmlFor: n, labelCol: r, labelAlign: i, colon: o, required: s, requiredMark: c, tooltip: l, vertical: u }) => {
	let [d] = A("Form"), { labelAlign: f, labelCol: m, labelWrap: h, colon: g, classNames: _, styles: v, tooltip: y } = X.useContext(L);
	if (!t) return null;
	let b = r || m || {}, x = i || f, S = `${e}-item-label`, C = a(S, x === "left" && `${S}-left`, b.className, { [`${S}-wrap`]: !!h }), w = t, T = o === !0 || g !== !1 && o !== !1;
	T && !u && typeof t == "string" && t.trim() && (w = t.replace(/[:|：]\s*$/, ""));
	let E = de(l, y);
	if (E) {
		let t = /*#__PURE__*/ X.createElement(he, { ...E }, /*#__PURE__*/ X.createElement("span", {
			className: `${e}-item-tooltip`,
			onClick: (e) => {
				e.preventDefault();
			},
			tabIndex: -1
		}, E.icon || E.children || /*#__PURE__*/ X.createElement(p, null)));
		w = /*#__PURE__*/ X.createElement(X.Fragment, null, w, t);
	}
	let D = c === "optional", O = F(c), k = c === !1;
	O ? w = c(w, { required: !!s }) : D && !s && (w = /*#__PURE__*/ X.createElement(X.Fragment, null, w, /*#__PURE__*/ X.createElement("span", { className: `${e}-item-optional` }, d?.optional || me.Form?.optional)));
	let j;
	k ? j = "hidden" : (D || O) && (j = "optional");
	let M = a(_?.label, {
		[`${e}-item-required`]: s,
		[`${e}-item-required-mark-${j}`]: j,
		[`${e}-item-no-colon`]: !T
	});
	return /*#__PURE__*/ X.createElement(ve, {
		...b,
		className: C
	}, /*#__PURE__*/ X.createElement("label", {
		htmlFor: n,
		className: M,
		style: v?.label,
		title: typeof t == "string" ? t : void 0
	}, w));
}, Ge = {
	success: b,
	warning: y,
	error: g,
	validating: v
};
function Ke({ children: e, errors: t, warnings: n, hasFeedback: r, validateStatus: i, prefixCls: o, meta: s, noStyle: c, name: l }) {
	let u = `${o}-item`, { feedbackIcons: d } = X.useContext(L), f = J(t, n, s, null, !!r, i), { isFormItemInput: p, status: m, hasFeedback: h, feedbackIcon: g, name: _ } = X.useContext(U), v = X.useMemo(() => {
		let e;
		if (r) {
			let i = r !== !0 && r.icons || d, o = f && i?.({
				status: f,
				errors: t,
				warnings: n
			})?.[f], s = f ? Ge[f] : null;
			e = o !== !1 && s ? /*#__PURE__*/ X.createElement("span", { className: a(`${u}-feedback-icon`, `${u}-feedback-icon-${f}`) }, o || /*#__PURE__*/ X.createElement(s, null)) : null;
		}
		let i = {
			status: f || "",
			errors: t,
			warnings: n,
			hasFeedback: !!r,
			feedbackIcon: e,
			isFormItemInput: !0,
			name: l
		};
		return c && (i.status = (f ?? m) || "", i.isFormItemInput = p, i.hasFeedback = !!(r ?? h), i.feedbackIcon = r === void 0 ? g : i.feedbackIcon, i.name = l ?? _), i;
	}, [
		f,
		r,
		c,
		p,
		m
	]);
	return /*#__PURE__*/ X.createElement(U.Provider, { value: v }, e);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/FormItem/ItemHolder.js
function qe(e) {
	let { prefixCls: t, className: n, rootClassName: r, style: i, help: o, errors: s, warnings: l, validateStatus: u, meta: f, hasFeedback: p, hidden: m, children: g, fieldId: _, required: v, isRequired: y, onSubItemMetaChange: b, layout: x, name: S, ...C } = e, w = `${t}-item`, { requiredMark: T, layout: E } = X.useContext(L), D = x || E, O = D === "vertical", k = X.useRef(null), A = Z(s), j = Z(l), M = P(o) && o !== !1, N = !!(M || s.length || l.length), F = !!k.current && d(k.current), [I, R] = X.useState(null);
	h(() => {
		if (N && k.current) {
			let e = getComputedStyle(k.current);
			R(Number.parseInt(e.marginBottom, 10));
		}
	}, [N, F]);
	let z = (e) => {
		e || R(null);
	}, B = ((e = !1) => J(e ? A : f.errors, e ? j : f.warnings, f, "", !!p, u))(), ee = a(w, n, r, {
		[`${w}-with-help`]: M || A.length || j.length,
		[`${w}-has-feedback`]: B && p,
		[`${w}-has-success`]: B === "success",
		[`${w}-has-warning`]: B === "warning",
		[`${w}-has-error`]: B === "error",
		[`${w}-is-validating`]: B === "validating",
		[`${w}-hidden`]: m,
		[`${w}-${D}`]: D
	});
	return /*#__PURE__*/ X.createElement("div", {
		className: ee,
		style: i,
		ref: k
	}, /*#__PURE__*/ X.createElement(ye, {
		className: `${w}-row`,
		...c(C, /* @__PURE__ */ "_internalItemRender.colon.dependencies.extra.fieldKey.getValueFromEvent.getValueProps.htmlFor.id.initialValue.isListField.label.labelAlign.labelCol.labelWrap.messageVariables.name.normalize.noStyle.preserve.requiredMark.rules.shouldUpdate.trigger.tooltip.validateFirst.validateTrigger.valuePropName.wrapperCol.validateDebounce".split("."))
	}, /*#__PURE__*/ X.createElement(We, {
		htmlFor: _,
		...e,
		requiredMark: T,
		required: v ?? y,
		prefixCls: t,
		vertical: O
	}), /*#__PURE__*/ X.createElement(Ue, {
		...e,
		...f,
		errors: A,
		warnings: j,
		prefixCls: t,
		status: B,
		help: o,
		marginBottom: I,
		onErrorVisibleChanged: z
	}, /*#__PURE__*/ X.createElement(fe.Provider, { value: b }, /*#__PURE__*/ X.createElement(Ke, {
		prefixCls: t,
		meta: f,
		errors: f.errors,
		warnings: f.warnings,
		hasFeedback: p,
		validateStatus: B,
		name: S
	}, g)))), !!I && /*#__PURE__*/ X.createElement("div", {
		className: `${w}-margin-offset`,
		style: { marginBottom: -I }
	}));
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/FormItem/index.js
var Je = "__SPLIT__";
function Ye(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length === r.length && n.every((n) => {
		let r = e[n], i = t[n];
		return r === i || F(r) || F(i);
	});
}
var Xe = /*#__PURE__*/ X.memo((e) => e.children, (e, t) => Ye(e.control, t.control) && e.update === t.update && e.childProps.length === t.childProps.length && e.childProps.every((e, n) => e === t.childProps[n]));
function Ze() {
	return {
		errors: [],
		warnings: [],
		touched: !1,
		validating: !1,
		name: [],
		validated: !1
	};
}
function Qe(e) {
	let { name: t, noStyle: n, className: r, dependencies: o, prefixCls: s, shouldUpdate: c, rules: d, children: f, required: p, label: m, messageVariables: h, trigger: g = "onChange", validateTrigger: _, hidden: v, help: y, layout: b } = e, { getPrefixCls: x } = X.useContext(z), { name: S } = X.useContext(L), C = Ie(f), w = F(C), T = X.useContext(fe), { validateTrigger: E } = X.useContext(pe), O = P(_) ? _ : E, A = P(t), j = x("form", s), M = N(j), [R, B] = je(j, M);
	le("Form.Item");
	let ee = X.useContext(I), te = X.useRef(null), [ne, re] = Re({}), [V, ae] = u(() => Ze()), oe = (e) => {
		let t = ee?.getKey(e.name);
		if (ae(e.destroy ? Ze() : e, !0), n && y !== !1 && T) {
			let n = e.name;
			if (e.destroy) n = te.current || n;
			else if (t !== void 0) {
				let [e, r] = t;
				n = [e].concat(i(r)), te.current = n;
			}
			T(e, n);
		}
	}, se = (e, t) => {
		re((n) => {
			let r = { ...n }, a = [].concat(i(e.name.slice(0, -1)), i(t)).join(Je);
			return e.destroy ? delete r[a] : r[a] = e, r;
		});
	}, [H, ce] = X.useMemo(() => {
		let e = i(V.errors), t = i(V.warnings);
		return Object.values(ne).forEach((n) => {
			e.push.apply(e, i(n.errors || [])), t.push.apply(t, i(n.warnings || []));
		}), [e, t];
	}, [
		ne,
		V.errors,
		V.warnings
	]), U = ze();
	function W(i, o, s) {
		return n && !v ? /*#__PURE__*/ X.createElement(Ke, {
			prefixCls: j,
			hasFeedback: e.hasFeedback,
			validateStatus: e.validateStatus,
			meta: V,
			errors: H,
			warnings: ce,
			noStyle: !0,
			name: t
		}, i) : /*#__PURE__*/ X.createElement(qe, {
			key: "row",
			...e,
			className: a(r, B, M, R),
			prefixCls: j,
			fieldId: o,
			isRequired: s,
			errors: H,
			warnings: ce,
			meta: V,
			onSubItemMetaChange: se,
			layout: b,
			name: t
		}, i);
	}
	if (!A && !w && !o) return W(C);
	let G = {};
	return typeof m == "string" ? G.label = m : t && (G.label = String(t)), h && (G = {
		...G,
		...h
	}), /*#__PURE__*/ X.createElement(ie, {
		...e,
		messageVariables: G,
		trigger: g,
		validateTrigger: O,
		onMetaChange: oe
	}, (n, r, a) => {
		let s = Y(t).length && r ? r.name : [], u = ge(s, S), f = p === void 0 ? d?.some((e) => {
			if (k(e) && e.required && !e.warningOnly) return !0;
			if (F(e)) {
				let t = e(a);
				return t?.required && !t?.warningOnly;
			}
			return !1;
		}) : p, m = { ...n }, h = null;
		if (Array.isArray(C) && A) h = C;
		else if (!(w && (!(c || o) || A)) && !(o && !w && !A)) if (/*#__PURE__*/ X.isValidElement(C)) {
			let t = {
				...C.props,
				...m
			};
			if (t.id ||= u, y || H.length > 0 || ce.length > 0 || e.extra) {
				let n = [];
				(y || H.length > 0) && n.push(`${u}_help`), e.extra && n.push(`${u}_extra`), t["aria-describedby"] = n.join(" ");
			}
			H.length > 0 && (t["aria-invalid"] = "true"), f && (t["aria-required"] = "true"), l(C) && (t.ref = U(s, C)), new Set([].concat(i(Y(g)), i(Y(O)))).forEach((e) => {
				t[e] = (...t) => {
					m[e]?.(...t), C.props[e]?.(...t);
				};
			});
			let n = [
				t["aria-required"],
				t["aria-invalid"],
				t["aria-describedby"]
			];
			h = /*#__PURE__*/ X.createElement(Xe, {
				control: m,
				update: C,
				childProps: n
			}, D(C, t));
		} else h = w && (c || o) && !A ? C(a) : C;
		return W(h, u, f);
	});
}
var $e = Qe;
$e.useStatus = Le;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/FormList.js
var et = ({ prefixCls: e, children: t, ...n }) => {
	let { getPrefixCls: r } = X.useContext(z), i = r("form", e), a = X.useMemo(() => ({
		prefixCls: i,
		status: "error"
	}), [i]);
	return /*#__PURE__*/ X.createElement(V, { ...n }, (e, n, r) => /*#__PURE__*/ X.createElement(q.Provider, { value: a }, t(e.map((e) => ({
		...e,
		fieldKey: e.key
	})), n, {
		errors: r.errors,
		warnings: r.warnings
	})));
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/hooks/useFormInstance.js
function tt() {
	let { form: e } = X.useContext(L);
	return e;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/form/index.js
var nt = /* @__PURE__ */ e({ default: () => $ }), $ = Fe;
$.Item = $e, $.List = et, $.ErrorList = Pe, $.useForm = _e, $.useFormInstance = tt, $.useWatch = G, $.Provider = ee;
//#endregion
export { nt as t };
