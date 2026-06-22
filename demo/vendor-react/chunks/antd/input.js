globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Bt as n, Ht as r, Mt as i, Nt as a, On as o, Q as s, Qt as c, T as l, Ut as u, fn as d, pn as f, w as p, yt as m } from "../shared/core.js";
import { $t as h, Cn as g, E as _, Jn as v, Mn as y, Qn as b, Qt as ee, Rn as x, Sn as te, Sr as ne, T as re, Wn as ie, Yn as S, br as C, en as ae, kn as oe, ot as w, sr as T, xt as E } from "../shared/antd-core.js";
import { l as D } from "./auto-complete.js";
import { c as O, g as k, h as A, s as j } from "./calendar.js";
import { a as se, i as M, r as N } from "./color-picker.js";
import { r as P } from "./dropdown.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/input/Group.js
var F = /* @__PURE__ */ t(o()), I = (e) => {
	let { getPrefixCls: t, direction: n } = (0, F.useContext)(C), { prefixCls: r, className: i } = e, o = t("input-group", r), [s, c] = j(t("input")), l = a(o, c, {
		[`${o}-lg`]: e.size === "large",
		[`${o}-sm`]: e.size === "small",
		[`${o}-compact`]: e.compact,
		[`${o}-rtl`]: n === "rtl"
	}, s, i), u = (0, F.useContext)(w), d = (0, F.useMemo)(() => ({
		...u,
		isFormItemInput: !1
	}), [u]);
	return /*#__PURE__*/ F.createElement(w.Provider, { value: d }, /*#__PURE__*/ F.createElement(P.Compact, {
		className: l,
		style: e.style,
		onMouseEnter: e.onMouseEnter,
		onMouseLeave: e.onMouseLeave,
		onFocus: e.onFocus,
		onBlur: e.onBlur
	}, e.children));
}, L = (e) => {
	let { componentCls: t, paddingXS: n } = e;
	return { [t]: {
		display: "inline-flex",
		alignItems: "center",
		flexWrap: "nowrap",
		columnGap: n,
		[`${t}-input-wrapper`]: {
			position: "relative",
			[`${t}-mask-icon`]: {
				position: "absolute",
				zIndex: "1",
				top: "50%",
				right: "50%",
				transform: "translate(50%, -50%)",
				pointerEvents: "none"
			},
			[`${t}-mask-input`]: {
				color: "transparent",
				caretColor: e.colorText,
				"&::selection": { color: "transparent" }
			},
			[`${t}-mask-input[type=number]::-webkit-inner-spin-button`]: {
				"-webkit-appearance": "none",
				margin: 0
			},
			[`${t}-mask-input[type=number]`]: { "-moz-appearance": "textfield" }
		},
		"&-rtl": { direction: "rtl" },
		[`${t}-input`]: {
			textAlign: "center",
			paddingInline: e.paddingXXS
		},
		[`&${t}-sm ${t}-input`]: { paddingInline: e.calc(e.paddingXXS).div(2).equal() },
		[`&${t}-lg ${t}-input`]: { paddingInline: e.paddingXS }
	} };
}, R = T(["Input", "OTP"], (e) => L(m(e, k(e))), A), ce = /*#__PURE__*/ F.forwardRef((e, t) => {
	let { className: r, value: i, onChange: o, onActiveChange: s, index: c, mask: l, onFocus: u, ...d } = e, { getPrefixCls: f } = F.useContext(C), p = f("otp"), m = typeof l == "string" ? l : i, h = F.useRef(null);
	F.useImperativeHandle(t, () => h.current);
	let g = (e) => {
		o(c, e.target.value);
	}, _ = () => {
		n(() => {
			let e = h.current?.input;
			document.activeElement === e && e && e.select();
		});
	}, v = (e) => {
		u?.(e), _();
	}, y = (e) => {
		let { key: t, ctrlKey: n, metaKey: r } = e;
		t === "ArrowLeft" ? s(c - 1) : t === "ArrowRight" ? s(c + 1) : t === "z" && (n || r) ? e.preventDefault() : t === "Backspace" && !i && s(c - 1), _();
	};
	return /*#__PURE__*/ F.createElement("span", {
		className: `${p}-input-wrapper`,
		role: "presentation"
	}, l && i !== "" && i !== void 0 && /*#__PURE__*/ F.createElement("span", {
		className: `${p}-mask-icon`,
		"aria-hidden": "true"
	}, m), /*#__PURE__*/ F.createElement(N, {
		"aria-label": `OTP Input ${c + 1}`,
		type: l === !0 ? "password" : "text",
		...d,
		ref: h,
		value: i,
		onInput: g,
		onFocus: v,
		onKeyDown: y,
		onMouseDown: _,
		onMouseUp: _,
		className: a(r, { [`${p}-mask-input`]: l })
	}));
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/input/OTP/index.js
function z(e) {
	return (e || "").split("");
}
var B = (e) => {
	let { index: t, prefixCls: n, separator: r, className: i, style: o } = e, s = S(r) ? r(t) : r;
	return s ? /*#__PURE__*/ F.createElement("span", {
		className: a(`${n}-separator`, i),
		style: o
	}, s) : null;
}, V = /*#__PURE__*/ F.forwardRef((e, t) => {
	let { prefixCls: n, length: o = 6, size: s, defaultValue: c, value: l, onChange: u, formatter: f, separator: p, variant: m, disabled: h, status: g, autoFocus: _, mask: y, type: b, autoComplete: ee, onInput: x, onFocus: te, inputMode: ie, classNames: S, styles: C, className: oe, style: T, ...E } = e, { classNames: D, styles: O, getPrefixCls: k, direction: A, style: j, className: se } = ne("otp"), M = k("otp", n), N = {
		...e,
		length: o
	}, [P, I] = v([D, S], [O, C], { props: N }), L = r(E, {
		aria: !0,
		data: !0,
		attr: !0
	}), [V, H] = R(M), U = ae((e) => s ?? e), W = F.useContext(w), G = re(W.status, g), K = F.useMemo(() => ({
		...W,
		status: G,
		hasFeedback: !1,
		feedbackIcon: null
	}), [W, G]), q = F.useRef(null), J = F.useRef({});
	F.useImperativeHandle(t, () => ({
		focus: () => {
			J.current[0]?.focus();
		},
		blur: () => {
			for (let e = 0; e < o; e += 1) J.current[e]?.blur();
		},
		nativeElement: q.current
	}));
	let Y = (e) => f ? f(e) : e, [X, Z] = F.useState(() => z(Y(c || "")));
	F.useEffect(() => {
		l !== void 0 && Z(z(l));
	}, [l]);
	let Q = d((e) => {
		Z(e), x && x(e), u && e.length === o && e.every((e) => e) && e.some((e, t) => X[t] !== e) && u(e.join(""));
	}), $ = d((e, t) => {
		let n = i(X);
		for (let t = 0; t < e; t += 1) n[t] || (n[t] = "");
		t.length <= 1 ? n[e] = t : n = n.slice(0, e).concat(z(t)), n = n.slice(0, o);
		for (let e = n.length - 1; e >= 0 && !n[e]; --e) n.pop();
		return n = z(Y(n.map((e) => e || " ").join(""))).map((e, t) => e === " " && !n[t] ? n[t] : e), n;
	}), le = (e, t) => {
		let n = $(e, t), r = Math.min(e + t.length, o - 1);
		r !== e && n[e] !== void 0 && J.current[r]?.focus(), Q(n);
	}, ue = (e) => {
		J.current[e]?.focus();
	}, de = (e, t) => {
		for (let e = 0; e < t; e += 1) if (!J.current[e]?.input?.value) {
			J.current[e]?.focus();
			break;
		}
		te?.(e);
	}, fe = {
		variant: m,
		disabled: h,
		status: G,
		mask: y,
		type: b,
		inputMode: ie,
		autoComplete: ee
	};
	return /*#__PURE__*/ F.createElement("div", {
		...L,
		ref: q,
		className: a(oe, M, {
			[`${M}-sm`]: U === "small",
			[`${M}-lg`]: U === "large",
			[`${M}-rtl`]: A === "rtl"
		}, H, V, se, P.root),
		style: {
			...I.root,
			...j,
			...T
		},
		role: "group"
	}, /*#__PURE__*/ F.createElement(w.Provider, { value: K }, Array.from({ length: o }).map((e, t) => {
		let n = `otp-${t}`, r = X[t] || "";
		return /*#__PURE__*/ F.createElement(F.Fragment, { key: n }, /*#__PURE__*/ F.createElement(ce, {
			ref: (e) => {
				J.current[t] = e;
			},
			index: t,
			size: U,
			htmlSize: 1,
			className: a(P.input, `${M}-input`),
			style: I.input,
			onChange: le,
			value: r,
			onActiveChange: ue,
			autoFocus: t === 0 && _,
			onFocus: (e) => de(e, t),
			...fe
		}), t < o - 1 && /*#__PURE__*/ F.createElement(B, {
			separator: p,
			index: t,
			prefixCls: M,
			className: a(P.separator),
			style: I.separator
		}));
	})));
}), H = (e) => e ? /*#__PURE__*/ F.createElement(p, null) : /*#__PURE__*/ F.createElement(l, null), U = {
	click: "onClick",
	hover: "onMouseOver"
}, W = /*#__PURE__*/ F.forwardRef((e, t) => {
	let { disabled: n, action: r = "click", visibilityToggle: i = !0, iconRender: o, prefixCls: s, inputPrefixCls: c, suffix: l, className: u, style: d, classNames: p, styles: m, ...h } = e, { getPrefixCls: g, className: _, style: y, classNames: ee, styles: te, iconRender: re } = ne("inputPassword"), [ie] = x("global"), S = F.useContext(oe), C = n ?? S, ae = {
		...e,
		disabled: C
	}, [w, T] = v([ee, p], [te, m], { props: ae }), E = b(i) && i.visible !== void 0, [D, O] = (0, F.useState)(() => E ? i.visible : !1), k = (0, F.useRef)(null);
	F.useEffect(() => {
		E && O(i.visible);
	}, [E, i]);
	let A = M(k), j = () => {
		if (C) return;
		D && A();
		let e = !D;
		O(e), b(i) && i.onVisibleChange?.(e);
	}, se = (e) => {
		let t = U[r] || "", n = (o || re || H)(D);
		return /*#__PURE__*/ F.createElement("span", {
			key: "passwordIcon",
			role: "button",
			tabIndex: C ? -1 : 0,
			className: `${e}-icon`,
			"aria-disabled": C,
			"aria-pressed": D,
			"aria-label": D ? ie.hide : ie.show,
			onMouseDown: (e) => {
				e.preventDefault();
			},
			onMouseUp: (e) => {
				e.preventDefault();
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && (e.preventDefault(), j());
			},
			[t]: j
		}, n);
	}, P = g("input", c), I = g("input-password", s), L = i && se(I), R = a(I, _, u, { [`${I}-${e.size}`]: !!e.size }), ce = {
		...h,
		type: D ? "text" : "password",
		prefixCls: P,
		suffix: /*#__PURE__*/ F.createElement(F.Fragment, null, L, l),
		disabled: C,
		className: R,
		style: {
			...y,
			...d
		},
		classNames: w,
		styles: T
	};
	return /*#__PURE__*/ F.createElement(N, {
		ref: f(t, k),
		...ce
	});
}), G = T(["Input", "Search"], (e) => {
	let { componentCls: t } = e, n = `${t}-btn`;
	return { [t]: {
		width: "100%",
		[n]: { "&-filled": {
			background: e.colorFillTertiary,
			"&:not(:disabled)": {
				"&:hover": { background: e.colorFillSecondary },
				"&:active": { background: e.colorFill }
			}
		} }
	} };
}), K = /*#__PURE__*/ F.forwardRef((e, t) => {
	let { prefixCls: n, inputPrefixCls: i, className: o, size: c, style: l, enterButton: d = !1, searchIcon: p, addonAfter: m, loading: _, disabled: b, onSearch: x, onChange: te, onCompositionStart: re, onCompositionEnd: ie, variant: S, onPressEnter: C, classNames: oe, styles: w, hidden: T, ...D } = e, { direction: O, getPrefixCls: k, classNames: A, styles: j, searchIcon: se } = ne("inputSearch"), M = {
		...e,
		enterButton: d
	}, [P, I] = v([A, oe], [j, w], { props: M }, { button: { _default: "root" } }), L = F.useRef(!1), R = k("input-search", n), ce = k("input", i), [z, B] = G(R), { compactSize: V } = h(R, O), H = ae((e) => c ?? V ?? e), U = F.useRef(null), W = (e) => {
		e?.target && e.type === "click" && x && x(e.target.value, e, { source: "clear" }), te?.(e);
	}, K = (e) => {
		document.activeElement === U.current?.input && e.preventDefault();
	}, q = (e) => {
		x && x(U.current?.input?.value, e, { source: "input" });
	}, J = (e) => {
		L.current || _ || (C?.(e), q(e));
	}, Y = typeof d == "boolean" ? g(p, se, /*#__PURE__*/ F.createElement(s, null)) : null, X = `${R}-btn`, Z = a(X, { [`${X}-${S}`]: S }), Q, $ = d || {}, le = $.type && $.type.__ANT_BUTTON === !0;
	Q = le || $.type === "button" ? y($, {
		onMouseDown: K,
		onClick: (e) => {
			$?.props?.onClick?.(e), q(e);
		},
		key: "enterButton",
		...le ? {
			className: Z,
			size: H
		} : {}
	}) : /*#__PURE__*/ F.createElement(E, {
		classNames: P.button,
		styles: I.button,
		className: Z,
		color: d ? "primary" : "default",
		size: H,
		disabled: b,
		key: "enterButton",
		onMouseDown: K,
		onClick: q,
		loading: _,
		icon: Y,
		variant: S === "borderless" || S === "filled" || S === "underlined" ? "text" : d ? "solid" : void 0
	}, d), m && (Q = [Q, y(m, { key: "addonAfter" })]);
	let ue = a(R, B, {
		[`${R}-rtl`]: O === "rtl",
		[`${R}-${H}`]: !!H,
		[`${R}-with-button`]: !!d
	}, o, z, P.root), de = (e) => {
		L.current = !0, re?.(e);
	}, fe = (e) => {
		L.current = !1, ie?.(e);
	}, pe = r(D, { data: !0 }), me = u({
		...D,
		classNames: u(P, ["button", "root"]),
		styles: u(I, ["button", "root"]),
		prefixCls: ce,
		type: "search",
		size: H,
		variant: S,
		onPressEnter: J,
		onCompositionStart: de,
		onCompositionEnd: fe,
		onChange: W,
		disabled: b
	}, Object.keys(pe));
	return /*#__PURE__*/ F.createElement(ee, {
		className: ue,
		style: {
			...l,
			...I.root
		},
		...pe,
		hidden: T
	}, /*#__PURE__*/ F.createElement(N, {
		ref: f(U, t),
		...me
	}), Q);
}), q = (e) => {
	let { componentCls: t, paddingLG: n } = e, r = `${t}-textarea`;
	return {
		[`textarea${t}`]: {
			maxWidth: "100%",
			height: "auto",
			minHeight: e.controlHeight,
			lineHeight: e.lineHeight,
			verticalAlign: "bottom",
			transition: `all ${e.motionDurationSlow}`,
			resize: "vertical",
			[`&${t}-mouse-active`]: { transition: `all ${e.motionDurationSlow}, height 0s, width 0s` }
		},
		[`${t}-textarea-affix-wrapper-resize-dirty`]: { width: "auto" },
		[r]: {
			position: "relative",
			"&-show-count": { [`${t}-data-count`]: {
				position: "absolute",
				bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
				insetInlineEnd: 0,
				color: e.colorTextDescription,
				whiteSpace: "nowrap",
				pointerEvents: "none"
			} },
			[`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: { paddingInlineEnd: n },
			[`&-affix-wrapper${t}-affix-wrapper`]: {
				padding: 0,
				[`> textarea${t}`]: {
					fontSize: "inherit",
					border: "none",
					outline: "none",
					background: "transparent",
					minHeight: e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
					"&:focus": { boxShadow: "none !important" }
				},
				[`${t}-suffix`]: {
					margin: 0,
					"> *:not(:last-child)": { marginInline: 0 },
					[`${t}-clear-icon`]: {
						position: "absolute",
						insetInlineEnd: e.paddingInline,
						insetBlockStart: e.paddingXS
					},
					[`${r}-suffix`]: {
						position: "absolute",
						top: 0,
						insetInlineEnd: e.paddingInline,
						bottom: 0,
						zIndex: 1,
						display: "inline-flex",
						alignItems: "center",
						margin: "auto",
						pointerEvents: "none"
					}
				}
			},
			[`&-affix-wrapper${t}-affix-wrapper-rtl`]: { [`${t}-suffix`]: { [`${t}-data-count`]: {
				direction: "ltr",
				insetInlineStart: 0
			} } },
			[`&-affix-wrapper${t}-affix-wrapper-sm`]: { [`${t}-suffix`]: { [`${t}-clear-icon`]: { insetInlineEnd: e.paddingInlineSM } } }
		}
	};
}, J = T(["Input", "TextArea"], (e) => q(m(e, k(e))), A, { resetFont: !1 }), Y = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	let { prefixCls: n, bordered: r = !0, size: i, disabled: o, status: s, allowClear: l, classNames: u, rootClassName: d, className: f, style: p, styles: m, variant: g, showCount: y, onMouseDown: b, onResize: ee, ...x } = e, { getPrefixCls: C, direction: T, allowClear: E, autoComplete: k, className: A, style: j, classNames: M, styles: N } = ne("textArea"), P = F.useContext(oe), I = o ?? P, { status: L, hasFeedback: R, feedbackIcon: ce } = F.useContext(w), z = re(L, s), [B, V] = v([M, u], [N, m], { props: e }), H = F.useRef(null);
	F.useImperativeHandle(t, () => ({
		resizableTextArea: H.current?.resizableTextArea,
		focus: (e) => {
			c(H.current?.resizableTextArea?.textArea, e);
		},
		blur: () => H.current?.blur(),
		nativeElement: H.current?.nativeElement || null
	}));
	let U = C("input", n), W = ie(U), [G, K] = O(U, d);
	J(U, W);
	let { compactSize: q, compactItemClassnames: Y } = h(U, T), X = ae((e) => i ?? q ?? e), [Z, Q] = D("textArea", g, r), $ = te({
		allowClear: l,
		contextAllowClear: E,
		componentName: "TextArea"
	}), [le, ue] = F.useState(!1), [de, fe] = F.useState(!1), pe = (e) => {
		ue(!0), b?.(e);
		let t = () => {
			ue(!1), document.removeEventListener("mouseup", t);
		};
		document.addEventListener("mouseup", t);
	}, me = (e) => {
		if (ee?.(e), le && S(getComputedStyle)) {
			let e = H.current?.nativeElement?.querySelector("textarea");
			e && getComputedStyle(e).resize === "both" && fe(!0);
		}
	};
	return /*#__PURE__*/ F.createElement(se, {
		autoComplete: k,
		...x,
		style: {
			...V.root,
			...j,
			...p
		},
		styles: V,
		disabled: I,
		allowClear: $,
		className: a(K, W, f, d, Y, A, B.root, { [`${U}-textarea-affix-wrapper-resize-dirty`]: de }),
		classNames: {
			...B,
			textarea: a({
				[`${U}-sm`]: X === "small",
				[`${U}-lg`]: X === "large"
			}, G, B.textarea, le && `${U}-mouse-active`),
			variant: a({ [`${U}-${Z}`]: Q }, _(U, z)),
			affixWrapper: a(`${U}-textarea-affix-wrapper`, {
				[`${U}-affix-wrapper-rtl`]: T === "rtl",
				[`${U}-affix-wrapper-sm`]: X === "small",
				[`${U}-affix-wrapper-lg`]: X === "large",
				[`${U}-textarea-show-count`]: y || e.count?.show
			}, G)
		},
		prefixCls: U,
		suffix: R && /*#__PURE__*/ F.createElement("span", { className: `${U}-textarea-suffix` }, ce),
		showCount: y,
		ref: H,
		onResize: me,
		onMouseDown: pe
	});
}), X = /* @__PURE__ */ e({ default: () => Z }), Z = N;
Z.Group = I, Z.Search = K, Z.TextArea = Y, Z.Password = W, Z.OTP = V;
//#endregion
export { Y as n, X as t };
