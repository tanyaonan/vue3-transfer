globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Jt as n, Nt as r, On as i, kt as a, on as o, pn as s, sn as c, wn as l, yt as u } from "../shared/core.js";
import { E as d, Fn as f, Jn as p, O as m, S as h, Sn as g, Sr as _, T as v, Wn as ee, br as te, en as y, fn as ne, gr as b, kn as re, o as ie, or as ae, ot as oe, pr as x, sr as S } from "../shared/antd-core.js";
import { l as se } from "./auto-complete.js";
import { d as C, u as ce } from "./breadcrumb.js";
import { d as le, f as w, g as ue, h as T, m as de, o as fe, p as pe, r as E, u as D } from "./calendar.js";
import { a as me, o as O } from "./color-picker.js";
import { n as k } from "./list.js";
//#region node_modules/.pnpm/@rc-component+mentions@1.9._abfc54c9f7d99c302b34e88b3741b629/node_modules/@rc-component/mentions/es/hooks/useEffectState.js
var A = /* @__PURE__ */ t(i());
function he() {
	let [e, t] = (0, A.useState)({
		id: 0,
		callback: null
	}), n = (0, A.useCallback)((e) => {
		t(({ id: t }) => ({
			id: t + 1,
			callback: e
		}));
	}, []);
	return (0, A.useEffect)(() => {
		e.callback?.();
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+mentions@1.9._abfc54c9f7d99c302b34e88b3741b629/node_modules/@rc-component/mentions/es/MentionsContext.js
var ge = /*#__PURE__*/ A.createContext(null);
//#endregion
//#region node_modules/.pnpm/@rc-component+mentions@1.9._abfc54c9f7d99c302b34e88b3741b629/node_modules/@rc-component/mentions/es/DropdownMenu.js
function j(e) {
	let { notFoundContent: t, activeIndex: n, setActiveIndex: r, selectOption: i, onFocus: a, onBlur: o, onScroll: s } = A.useContext(ge), { prefixCls: c, options: l, opened: u } = e, d = l[n] || {}, f = (0, A.useRef)(null);
	return (0, A.useEffect)(() => {
		if (n === -1 || !f.current || !u) return;
		let e = f.current?.findItem?.({ key: d.key });
		e && e.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	}, [
		n,
		d.key,
		u
	]), /*#__PURE__*/ A.createElement(ce, {
		ref: f,
		prefixCls: `${c}-menu`,
		activeKey: d.key,
		onSelect: ({ key: e }) => {
			i(l.find(({ key: t }) => t === e));
		},
		onFocus: a,
		onBlur: o,
		onScroll: s
	}, l.map((e, t) => {
		let { key: n, disabled: i, className: a, style: o, label: s } = e;
		return /*#__PURE__*/ A.createElement(C, {
			key: n,
			disabled: i,
			className: a,
			style: o,
			onMouseEnter: () => {
				i || r(t);
			}
		}, s);
	}), !l.length && /*#__PURE__*/ A.createElement(C, { disabled: !0 }, t));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+mentions@1.9._abfc54c9f7d99c302b34e88b3741b629/node_modules/@rc-component/mentions/es/KeywordTrigger.js
var M = {
	bottomRight: {
		points: ["tl", "br"],
		offset: [0, 4],
		overflow: {
			adjustX: 1,
			adjustY: 1
		}
	},
	bottomLeft: {
		points: ["tr", "bl"],
		offset: [0, 4],
		overflow: {
			adjustX: 1,
			adjustY: 1
		}
	},
	topRight: {
		points: ["bl", "tr"],
		offset: [0, -4],
		overflow: {
			adjustX: 1,
			adjustY: 1
		}
	},
	topLeft: {
		points: ["br", "tl"],
		offset: [0, -4],
		overflow: {
			adjustX: 1,
			adjustY: 1
		}
	}
}, _e = (e) => {
	let { prefixCls: t, options: n, children: r, visible: i, transitionName: a, getPopupContainer: o, popupClassName: s, popupStyle: c, direction: l, placement: u } = e, d = `${t}-dropdown`, [p, m] = A.useState(!1), h = /*#__PURE__*/ A.createElement(j, {
		prefixCls: d,
		options: n,
		opened: p
	}), g = (0, A.useMemo)(() => {
		let e;
		return e = l === "rtl" ? u === "top" ? "topLeft" : "bottomLeft" : u === "top" ? "topRight" : "bottomRight", e;
	}, [l, u]);
	return /*#__PURE__*/ A.createElement(f, {
		prefixCls: d,
		popupVisible: i,
		popup: h,
		popupPlacement: g,
		popupMotion: { motionName: a },
		builtinPlacements: M,
		getPopupContainer: o,
		popupClassName: s,
		popupStyle: c,
		afterOpenChange: m
	}, r);
}, N = () => null;
//#endregion
//#region node_modules/.pnpm/@rc-component+mentions@1.9._abfc54c9f7d99c302b34e88b3741b629/node_modules/@rc-component/mentions/es/util.js
function ve(e) {
	let { selectionStart: t } = e;
	return e.value.slice(0, t);
}
function ye(e, t) {
	return t.reduce((t, n) => {
		let r = e.lastIndexOf(n);
		return r > t.location ? {
			location: r,
			prefix: n
		} : t;
	}, {
		location: -1,
		prefix: ""
	});
}
function P(e) {
	return (e || "").toLowerCase();
}
function F(e, t, n) {
	let r = e[0];
	if (!r || r === n) return e;
	let i = e, a = t.length;
	for (let e = 0; e < a; e += 1) if (P(i[e]) !== P(t[e])) {
		i = i.slice(e);
		break;
	} else e === a - 1 && (i = i.slice(a));
	return i;
}
function be(e, t) {
	let { measureLocation: n, prefix: r, targetText: i, selectionStart: a, split: o } = t, s = e.slice(0, n);
	s[s.length - o.length] === o && (s = s.slice(0, s.length - o.length)), s &&= `${s}${o}`;
	let c = F(e.slice(a), i.slice(a - n - r.length), o);
	c.slice(0, o.length) === o && (c = c.slice(o.length));
	let l = `${s}${r}${i}${o}`;
	return {
		text: `${l}${c}`,
		selectionLocation: l.length
	};
}
function I(e, t) {
	e.setSelectionRange(t, t), e.blur(), e.focus();
}
function L(e, t) {
	return !t || e.indexOf(t) === -1;
}
function xe(e, { value: t = "" }) {
	let n = e.toLowerCase();
	return t.toLowerCase().indexOf(n) !== -1;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+mentions@1.9._abfc54c9f7d99c302b34e88b3741b629/node_modules/@rc-component/mentions/es/context.js
var Se = /*#__PURE__*/ A.createContext({});
//#endregion
//#region node_modules/.pnpm/@rc-component+mentions@1.9._abfc54c9f7d99c302b34e88b3741b629/node_modules/@rc-component/mentions/es/Mentions.js
function R() {
	return R = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, R.apply(this, arguments);
}
var z = /*#__PURE__*/ (0, A.forwardRef)((e, t) => {
	let { prefixCls: i, className: a, style: s, classNames: u, styles: d, prefix: f = "@", split: p = " ", notFoundContent: m = "Not Found", value: h, defaultValue: g, children: _, options: v, allowClear: ee, hasWrapper: te, silent: y, validateSearch: ne = L, filterOption: b = xe, onChange: re, onKeyDown: ie, onKeyUp: ae, onPressEnter: oe, onSearch: x, onSelect: S, onFocus: se, onBlur: C, transitionName: ce, placement: le, direction: w, getPopupContainer: ue, popupClassName: T, rows: de = 1, visible: fe, onPopupScroll: pe, ...E } = e, D = (0, A.useMemo)(() => Array.isArray(f) ? f : [f], [f]), O = (0, A.useRef)(null), k = (0, A.useRef)(null), j = (0, A.useRef)(null), M = () => k.current?.resizableTextArea?.textArea;
	A.useImperativeHandle(t, () => ({
		focus: () => k.current?.focus(),
		blur: () => k.current?.blur(),
		textarea: k.current?.resizableTextArea?.textArea,
		nativeElement: O.current
	}));
	let [N, P] = (0, A.useState)(!1), [F, z] = (0, A.useState)(""), [B, Ce] = (0, A.useState)(""), [V, H] = (0, A.useState)(0), [U, W] = (0, A.useState)(0), [G, we] = (0, A.useState)(!1), K = o(e.id), [q, Te] = c(g || "", h), { open: Ee } = (0, A.useContext)(Se);
	(0, A.useEffect)(() => {
		N && j.current && (j.current.scrollTop = M().scrollTop);
	}, [N]);
	let [J, Y, X, De] = A.useMemo(() => {
		if (Ee) for (let e = 0; e < D.length; e += 1) {
			let t = D[e], n = q.lastIndexOf(t);
			if (n >= 0) return [
				!0,
				"",
				t,
				n
			];
		}
		return [
			N,
			F,
			B,
			V
		];
	}, [
		Ee,
		N,
		D,
		q,
		F,
		B,
		V
	]), Oe = A.useCallback((e) => {
		let t;
		return t = v && v.length > 0 ? v.map((e) => ({
			...e,
			key: `${e?.key ?? e.value}-${K}`
		})) : l(_).map(({ props: e, key: t }) => ({
			...e,
			label: e.children,
			key: `${t || e.value}-${K}`
		})), t.filter((t) => b === !1 ? !0 : b(e, t));
	}, [
		v,
		K,
		_,
		b
	]), Z = A.useMemo(() => Oe(Y), [Oe, Y]), Q = A.useCallback((e, t = 1) => {
		let n = Z.length;
		if (!n) return -1;
		for (let r = 0; r < n; r += 1) {
			let i = (e + r * t + n) % n;
			if (!Z[i]?.disabled) return i;
		}
		return -1;
	}, [Z]);
	(0, A.useEffect)(() => {
		if (!J) return;
		let e = Z[U];
		(!e || e.disabled) && W(Q(0));
	}, [
		J,
		Z,
		U,
		Q,
		W
	]);
	let ke = he(), Ae = (e, t, n) => {
		P(!0), z(e), Ce(t), H(n), W(Q(0));
	}, $ = (e) => {
		P(!1), H(0), z(""), ke(e);
	}, je = (e) => {
		Te(e), re?.(e);
	}, Me = ({ target: { value: e } }) => {
		je(e);
	}, Ne = (e) => {
		if (!e || e.disabled) return;
		let { value: t = "" } = e, { text: n, selectionLocation: r } = be(q, {
			measureLocation: De,
			targetText: t,
			prefix: X,
			selectionStart: M()?.selectionStart,
			split: p
		});
		je(n), $(() => {
			I(M(), r);
		}), S?.(e, X);
	}, Pe = (e) => {
		let { which: t } = e;
		if (ie?.(e), J) {
			if (t === n.UP || t === n.DOWN) {
				if (!Z.length) return;
				let r = t === n.UP ? -1 : 1, i = Q(U + r, r);
				i !== -1 && W(i), e.preventDefault();
			} else if (t === n.ESC) $();
			else if (t === n.ENTER) {
				if (e.preventDefault(), y) return;
				if (!Z.length) {
					$();
					return;
				}
				let t = U;
				if ((!Z[t] || Z[t].disabled) && (t = Q(0)), t === -1) {
					$();
					return;
				}
				W(t), Ne(Z[t]);
			}
		}
	}, Fe = (e) => {
		let { key: t, which: r } = e, i = e.target, a = ve(i), { location: o, prefix: s } = ye(a, D);
		if (ae?.(e), [
			n.ESC,
			n.UP,
			n.DOWN,
			n.ENTER
		].indexOf(r) === -1) if (o !== -1) {
			let e = a.slice(o + s.length), i = ne(e, p), c = !!Oe(e).length;
			i ? (t === s || t === "Shift" || r === n.ALT || t === "AltGraph" || J || e !== Y && c) && Ae(e, s, o) : J && $(), x && i && x(e, s);
		} else J && $();
	}, Ie = (e) => {
		!J && oe && oe(e);
	}, Le = (0, A.useRef)(), Re = (e) => {
		window.clearTimeout(Le.current), !G && e && se && se(e), we(!0);
	}, ze = (e) => {
		Le.current = window.setTimeout(() => {
			we(!1), $(), C?.(e);
		}, 0);
	}, Be = () => {
		Re();
	}, Ve = () => {
		ze();
	}, He = (e) => {
		pe?.(e);
	}, Ue = A.useMemo(() => {
		let e = d?.textarea?.resize ?? s?.resize, t = { ...d?.textarea };
		return e !== void 0 && (t.resize = e), {
			...d,
			textarea: t
		};
	}, [s, d]), We = /*#__PURE__*/ A.createElement(A.Fragment, null, /*#__PURE__*/ A.createElement(me, R({
		classNames: { textarea: u?.textarea },
		styles: Ue,
		ref: k,
		value: q
	}, E, {
		rows: de,
		onChange: Me,
		onKeyDown: Pe,
		onKeyUp: Fe,
		onPressEnter: Ie,
		onFocus: Re,
		onBlur: ze
	})), J && /*#__PURE__*/ A.createElement("div", {
		ref: j,
		className: `${i}-measure`
	}, q.slice(0, De), /*#__PURE__*/ A.createElement(ge.Provider, { value: {
		notFoundContent: m,
		activeIndex: U,
		setActiveIndex: W,
		selectOption: Ne,
		onFocus: Be,
		onBlur: Ve,
		onScroll: He
	} }, /*#__PURE__*/ A.createElement(_e, {
		prefixCls: i,
		transitionName: ce,
		placement: le,
		direction: w,
		options: Z,
		visible: !0,
		getPopupContainer: ue,
		popupClassName: r(T, u?.popup),
		popupStyle: d?.popup
	}, /*#__PURE__*/ A.createElement("span", null, X))), q.slice(De + X.length)));
	return te ? We : /*#__PURE__*/ A.createElement("div", {
		className: r(i, a),
		style: s,
		ref: O
	}, We);
}), B = /*#__PURE__*/ (0, A.forwardRef)(({ suffix: e, prefixCls: t = "rc-mentions", defaultValue: n, value: i, id: a, allowClear: o, onChange: s, classNames: l, styles: u, className: d, disabled: f, onClear: p, ...m }, h) => {
	let g = !!(e || o), _ = (0, A.useRef)(null), v = (0, A.useRef)(null);
	(0, A.useImperativeHandle)(h, () => ({
		...v.current,
		nativeElement: _.current?.nativeElement || v.current?.nativeElement
	}));
	let [ee, te] = c(n || "", i), y = (e) => {
		te(e), s?.(e);
	};
	return /*#__PURE__*/ A.createElement(O, {
		suffix: e,
		prefixCls: t,
		value: ee,
		allowClear: o,
		handleReset: () => {
			y("");
		},
		className: r(t, d, { [`${t}-has-suffix`]: g }),
		classNames: l,
		disabled: f,
		ref: _,
		onClear: p
	}, /*#__PURE__*/ A.createElement(z, R({
		className: l?.mentions,
		styles: u,
		classNames: l,
		prefixCls: t,
		id: a,
		ref: v,
		onChange: y,
		disabled: f,
		hasWrapper: g
	}, m)));
});
B.Option = N;
//#endregion
//#region node_modules/.pnpm/@rc-component+mentions@1.9._abfc54c9f7d99c302b34e88b3741b629/node_modules/@rc-component/mentions/es/index.js
var Ce = B, V = (e) => {
	let { componentCls: t, fontSize: n, paddingXXS: r, colorBgElevated: i, borderRadiusLG: o, boxShadowSecondary: s, itemPaddingVertical: c, controlPaddingHorizontal: l, colorText: u, borderRadius: d, lineHeight: f, colorTextDisabled: p, controlItemBgHover: m, motionDurationSlow: h } = e;
	return { [t]: { "&-dropdown": {
		...x(e),
		position: "absolute",
		top: -9999,
		insetInlineStart: -9999,
		zIndex: e.zIndexPopup,
		boxSizing: "border-box",
		fontSize: n,
		fontVariant: "initial",
		padding: r,
		backgroundColor: i,
		borderRadius: o,
		outline: "none",
		boxShadow: s,
		"&-hidden": { display: "none" },
		[`${t}-dropdown-menu`]: {
			maxHeight: e.dropdownHeight,
			margin: 0,
			paddingInlineStart: 0,
			overflow: "auto",
			listStyle: "none",
			outline: "none",
			"&-item": {
				...b,
				position: "relative",
				display: "block",
				minWidth: e.controlItemWidth,
				padding: `${a(c)} ${a(l)}`,
				color: u,
				borderRadius: d,
				fontWeight: "normal",
				lineHeight: f,
				cursor: "pointer",
				transition: `background-color ${h} ease`,
				"&:hover": { backgroundColor: m },
				"&-disabled": {
					color: p,
					cursor: "not-allowed",
					"&:hover": {
						color: p,
						backgroundColor: m,
						cursor: "not-allowed"
					}
				},
				"&-selected": {
					color: u,
					fontWeight: e.fontWeightStrong,
					backgroundColor: m
				},
				"&-active": { backgroundColor: m }
			}
		}
	} } };
}, H = (e) => {
	let { componentCls: t, colorText: n, antCls: r, colorTextDisabled: i, calc: a } = e, [o, s] = ae(r, "cmp-mentions");
	return { [t]: [
		x(e),
		E(e, {
			largeStyle: { padding: 0 },
			smallStyle: { padding: 0 }
		}),
		pe(e),
		w(e),
		D(e),
		de(e),
		{
			[o("padding-inline")]: e.paddingInline,
			[o("padding-block")]: e.paddingBlock,
			[o("control-height")]: e.controlHeight,
			display: "flex",
			padding: 0,
			whiteSpace: "pre-wrap",
			"> textarea": [
				x(e),
				fe(e.colorTextPlaceholder),
				{
					background: "transparent",
					border: "none",
					borderRadius: "inherit",
					outline: "none",
					flex: "auto",
					minWidth: 0,
					resize: "none",
					"&:disabled": { color: i }
				}
			],
			[`> textarea, ${t}-measure`]: {
				color: n,
				boxSizing: "border-box",
				margin: 0,
				minHeight: a(s("control-height")).sub(a(e.lineWidth).mul(2).equal()).equal(),
				paddingInline: s("padding-inline"),
				paddingBlock: s("padding-block"),
				overflow: "inherit",
				overflowX: "hidden",
				overflowY: "auto",
				fontWeight: "inherit",
				fontSize: "inherit",
				fontFamily: "inherit",
				fontStyle: "inherit",
				fontVariant: "inherit",
				fontSizeAdjust: "inherit",
				fontStretch: "inherit",
				lineHeight: "inherit",
				direction: "inherit",
				letterSpacing: "inherit",
				whiteSpace: "inherit",
				textAlign: "inherit",
				verticalAlign: "top",
				wordWrap: "break-word",
				wordBreak: "inherit",
				tabSize: "inherit"
			},
			[`${t}-measure`]: {
				position: "absolute",
				inset: 0,
				zIndex: -1,
				color: "transparent",
				pointerEvents: "none",
				"> span": {
					display: "inline-block",
					minHeight: "1em"
				}
			},
			[`${t}-suffix`]: {
				display: "inline-flex",
				alignItems: "center",
				flex: "none",
				color: e.colorTextQuaternary,
				fontSize: e.fontSizeIcon,
				lineHeight: 1,
				position: "absolute",
				top: "50%",
				transform: "translateY(-50%)",
				insetInlineEnd: s("padding-inline"),
				columnGap: e.marginXS,
				[`${t}-clear-icon`]: {
					cursor: "pointer",
					border: 0,
					background: "transparent",
					"&:hover": { color: e.colorIcon },
					"&:active": { color: e.colorText },
					"&-hidden": { visibility: "hidden" }
				},
				[`${r}-form-item-feedback-icon`]: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center"
				}
			}
		},
		{ "&-has-suffix": { "> textarea": { paddingInlineEnd: a(e.paddingXXS).mul(1.5).add(e.fontSizeIcon).add(s("padding-inline")).equal() } } },
		{ "&-disabled": { "> textarea": { ...le(e) } } },
		{
			"&-lg": {
				[o("padding-inline")]: e.paddingInlineLG,
				[o("padding-block")]: e.paddingBlockLG,
				[o("control-height")]: e.controlHeightLG
			},
			"&-sm": {
				[o("padding-inline")]: e.paddingInlineSM,
				[o("padding-block")]: e.paddingBlockSM,
				[o("control-height")]: e.controlHeightSM
			}
		}
	] };
}, U = S("Mentions", (e) => {
	let t = u(e, ue(e));
	return [H(t), V(t)];
}, (e) => ({
	...T(e),
	dropdownHeight: 250,
	controlItemWidth: 100,
	zIndexPopup: e.zIndexPopupBase + 50,
	itemPaddingVertical: (e.controlHeight - e.fontHeight) / 2
})), W = /* @__PURE__ */ e({
	Option: () => G,
	default: () => K
}), { Option: G } = Ce;
function we() {
	return !0;
}
var K = /* @__PURE__ */ A.forwardRef((e, t) => {
	let { prefixCls: n, className: i, rootClassName: a, disabled: o, loading: c, filterOption: l, children: u, notFoundContent: f, options: m, status: b, allowClear: ie, popupClassName: ae, style: x, variant: S, classNames: C, styles: ce, size: le, ...w } = e, [ue, T] = A.useState(!1), de = s(t, A.useRef(null)), fe = y((e) => le ?? e), { getPrefixCls: pe, direction: E, allowClear: D, className: me, style: O, classNames: he, styles: ge } = _("mentions"), { renderEmpty: j } = A.useContext(te), { status: M, hasFeedback: _e, feedbackIcon: N } = A.useContext(oe), ve = v(M, b), ye = A.useContext(re), P = o ?? ye, F = pe("mentions", n), be = {
		...e,
		disabled: P,
		status: ve,
		variant: S
	}, [I, L] = p([he, C], [ge, ce], { props: be }), xe = (...e) => {
		w.onFocus && w.onFocus.apply(w, e), T(!0);
	}, Se = (...e) => {
		w.onBlur && w.onBlur.apply(w, e), T(!1);
	}, R = A.useMemo(() => f === void 0 ? j?.("Select") || /*#__PURE__*/ A.createElement(h, { componentName: "Select" }) : f, [f, j]), z = A.useMemo(() => c ? /*#__PURE__*/ A.createElement(G, {
		value: "ANTD_SEARCHING",
		disabled: !0
	}, /*#__PURE__*/ A.createElement(k, { size: "small" })) : u, [c, u]), B = c ? [{
		value: "ANTD_SEARCHING",
		disabled: !0,
		label: /*#__PURE__*/ A.createElement(k, { size: "small" })
	}] : m, V = c ? we : l, H = g({
		allowClear: ie,
		contextAllowClear: D,
		defaultAllowClear: !1,
		componentName: "Mentions"
	}), W = ee(F), [K, q] = U(F, W), [Te, Ee] = se("mentions", S), [J] = ne("SelectLike", L.popup?.zIndex), Y = _e && /*#__PURE__*/ A.createElement(A.Fragment, null, N), X = r(me, i, a, q, W, I.root, {
		[`${F}-sm`]: fe === "small",
		[`${F}-lg`]: fe === "large"
	});
	return /*#__PURE__*/ A.createElement(Ce, {
		silent: c,
		prefixCls: F,
		notFoundContent: R,
		className: X,
		disabled: P,
		allowClear: H,
		direction: E,
		style: {
			...L.root,
			...O,
			...x
		},
		...w,
		filterOption: V,
		onFocus: xe,
		onBlur: Se,
		ref: de,
		options: B,
		suffix: Y,
		styles: {
			textarea: L.textarea,
			popup: {
				...L.popup,
				zIndex: J
			},
			suffix: L.suffix
		},
		classNames: {
			textarea: r(I.textarea),
			popup: r(I.popup, ae, a, K, q, W),
			suffix: I.suffix,
			mentions: r({
				[`${F}-disabled`]: P,
				[`${F}-focused`]: ue,
				[`${F}-rtl`]: E === "rtl"
			}, K),
			variant: r({ [`${F}-${Te}`]: Ee }, d(F, ve)),
			affixWrapper: K
		}
	}, z);
});
K.Option = G, K._InternalPanelDoNotUseOrYouWillBeFired = m(K, void 0, void 0, "mentions"), K.getMentions = (e = "", t = {}) => {
	let { prefix: n = "@", split: r = " " } = t, i = ie(n);
	return e.split(r).reduce((e, t = "") => {
		let n = null;
		if (i.some((e) => t.slice(0, e.length) === e ? (n = e, !0) : !1), n !== null) {
			let r = {
				prefix: n,
				value: t.slice(n.length)
			};
			r.value && e.push(r);
		}
		return e;
	}, []);
};
//#endregion
export { W as t };
