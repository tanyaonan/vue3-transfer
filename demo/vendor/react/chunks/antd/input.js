globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Bt as n, Ht as r, Mt as i, Nt as a, Q as o, Qt as s, T as c, Ut as l, fn as u, kn as d, pn as f, w as p, yt as m } from "../shared/core.js";
import { $t as h, Cn as g, E as _, Jn as v, Mn as y, Qn as b, Qt as ee, Rn as x, Sn as te, Sr as ne, T as re, Wn as S, Yn as C, br as w, en as ie, kn as ae, ot as T, sr as E, xt as D } from "../shared/antd-core.js";
import { l as O } from "./auto-complete.js";
import { c as k, g as A, h as j, s as M } from "./calendar.js";
import { a as oe, i as N, r as P } from "./color-picker.js";
import { r as F } from "./dropdown.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/input/Group.js
var I = /* @__PURE__ */ t(d()), L = (e) => {
	let { getPrefixCls: t, direction: n } = (0, I.useContext)(w), { prefixCls: r, className: i } = e, o = t("input-group", r), [s, c] = M(t("input")), l = a(o, c, {
		[`${o}-lg`]: e.size === "large",
		[`${o}-sm`]: e.size === "small",
		[`${o}-compact`]: e.compact,
		[`${o}-rtl`]: n === "rtl"
	}, s, i), u = (0, I.useContext)(T), d = (0, I.useMemo)(() => ({
		...u,
		isFormItemInput: !1
	}), [u]);
	return /*#__PURE__*/ I.createElement(T.Provider, { value: d }, /*#__PURE__*/ I.createElement(F.Compact, {
		className: l,
		style: e.style,
		onMouseEnter: e.onMouseEnter,
		onMouseLeave: e.onMouseLeave,
		onFocus: e.onFocus,
		onBlur: e.onBlur
	}, e.children));
}, R = (e) => {
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
}, z = E(["Input", "OTP"], (e) => R(m(e, A(e))), j), se = /*#__PURE__*/ I.forwardRef((e, t) => {
	let { className: r, value: i, onChange: o, onActiveChange: s, index: c, mask: l, onFocus: u, ...d } = e, { getPrefixCls: f } = I.useContext(w), p = f("otp"), m = typeof l == "string" ? l : i, h = I.useRef(null);
	I.useImperativeHandle(t, () => h.current);
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
	return /*#__PURE__*/ I.createElement("span", {
		className: `${p}-input-wrapper`,
		role: "presentation"
	}, l && i !== "" && i !== void 0 && /*#__PURE__*/ I.createElement("span", {
		className: `${p}-mask-icon`,
		"aria-hidden": "true"
	}, m), /*#__PURE__*/ I.createElement(P, {
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
function B(e) {
	return (e || "").split("");
}
var V = (e) => {
	let { index: t, prefixCls: n, separator: r, className: i, style: o } = e, s = C(r) ? r(t) : r;
	return s ? /*#__PURE__*/ I.createElement("span", {
		className: a(`${n}-separator`, i),
		style: o
	}, s) : null;
}, H = /*#__PURE__*/ I.forwardRef((e, t) => {
	let { prefixCls: n, length: o = 6, size: s, defaultValue: c, value: l, onChange: d, formatter: f, separator: p, variant: m, disabled: h, status: g, autoFocus: _, mask: y, type: b, autoComplete: ee, onInput: x, onFocus: te, inputMode: S, classNames: C, styles: w, className: ae, style: E, ...D } = e, { classNames: O, styles: k, getPrefixCls: A, direction: j, style: M, className: oe } = ne("otp"), N = A("otp", n), P = {
		...e,
		length: o
	}, [F, L] = v([O, C], [k, w], { props: P }), R = r(D, {
		aria: !0,
		data: !0,
		attr: !0
	}), [H, U] = z(N), W = ie((e) => s ?? e), G = I.useContext(T), K = re(G.status, g), ce = I.useMemo(() => ({
		...G,
		status: K,
		hasFeedback: !1,
		feedbackIcon: null
	}), [G, K]), q = I.useRef(null), J = I.useRef({});
	I.useImperativeHandle(t, () => ({
		focus: () => {
			J.current[0]?.focus();
		},
		blur: () => {
			for (let e = 0; e < o; e += 1) J.current[e]?.blur();
		},
		nativeElement: q.current
	}));
	let Y = (e) => f ? f(e) : e, [X, Z] = I.useState(() => B(Y(c || "")));
	I.useEffect(() => {
		l !== void 0 && Z(B(l));
	}, [l]);
	let Q = u((e) => {
		Z(e), x && x(e), d && e.length === o && e.every((e) => e) && e.some((e, t) => X[t] !== e) && d(e.join(""));
	}), $ = u((e, t) => {
		let n = i(X);
		for (let t = 0; t < e; t += 1) n[t] || (n[t] = "");
		t.length <= 1 ? n[e] = t : n = n.slice(0, e).concat(B(t)), n = n.slice(0, o);
		for (let e = n.length - 1; e >= 0 && !n[e]; --e) n.pop();
		return n = B(Y(n.map((e) => e || " ").join(""))).map((e, t) => e === " " && !n[t] ? n[t] : e), n;
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
		status: K,
		mask: y,
		type: b,
		inputMode: S,
		autoComplete: ee
	};
	return /*#__PURE__*/ I.createElement("div", {
		...R,
		ref: q,
		className: a(ae, N, {
			[`${N}-sm`]: W === "small",
			[`${N}-lg`]: W === "large",
			[`${N}-rtl`]: j === "rtl"
		}, U, H, oe, F.root),
		style: {
			...L.root,
			...M,
			...E
		},
		role: "group"
	}, /*#__PURE__*/ I.createElement(T.Provider, { value: ce }, Array.from({ length: o }).map((e, t) => {
		let n = `otp-${t}`, r = X[t] || "";
		return /*#__PURE__*/ I.createElement(I.Fragment, { key: n }, /*#__PURE__*/ I.createElement(se, {
			ref: (e) => {
				J.current[t] = e;
			},
			index: t,
			size: W,
			htmlSize: 1,
			className: a(F.input, `${N}-input`),
			style: L.input,
			onChange: le,
			value: r,
			onActiveChange: ue,
			autoFocus: t === 0 && _,
			onFocus: (e) => de(e, t),
			...fe
		}), t < o - 1 && /*#__PURE__*/ I.createElement(V, {
			separator: p,
			index: t,
			prefixCls: N,
			className: a(F.separator),
			style: L.separator
		}));
	})));
}), U = (e) => e ? /*#__PURE__*/ I.createElement(p, null) : /*#__PURE__*/ I.createElement(c, null), W = {
	click: "onClick",
	hover: "onMouseOver"
}, G = /*#__PURE__*/ I.forwardRef((e, t) => {
	let { disabled: n, action: r = "click", visibilityToggle: i = !0, iconRender: o, prefixCls: s, inputPrefixCls: c, suffix: l, className: u, style: d, classNames: p, styles: m, ...h } = e, { getPrefixCls: g, className: _, style: y, classNames: ee, styles: te, iconRender: re } = ne("inputPassword"), [S] = x("global"), C = I.useContext(ae), w = n ?? C, ie = {
		...e,
		disabled: w
	}, [T, E] = v([ee, p], [te, m], { props: ie }), D = b(i) && i.visible !== void 0, [O, k] = (0, I.useState)(() => D ? i.visible : !1), A = (0, I.useRef)(null);
	I.useEffect(() => {
		D && k(i.visible);
	}, [D, i]);
	let j = N(A), M = () => {
		if (w) return;
		O && j();
		let e = !O;
		k(e), b(i) && i.onVisibleChange?.(e);
	}, oe = (e) => {
		let t = W[r] || "", n = (o || re || U)(O);
		return /*#__PURE__*/ I.createElement("span", {
			key: "passwordIcon",
			role: "button",
			tabIndex: w ? -1 : 0,
			className: `${e}-icon`,
			"aria-disabled": w,
			"aria-pressed": O,
			"aria-label": O ? S.hide : S.show,
			onMouseDown: (e) => {
				e.preventDefault();
			},
			onMouseUp: (e) => {
				e.preventDefault();
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && (e.preventDefault(), M());
			},
			[t]: M
		}, n);
	}, F = g("input", c), L = g("input-password", s), R = i && oe(L), z = a(L, _, u, { [`${L}-${e.size}`]: !!e.size }), se = {
		...h,
		type: O ? "text" : "password",
		prefixCls: F,
		suffix: /*#__PURE__*/ I.createElement(I.Fragment, null, R, l),
		disabled: w,
		className: z,
		style: {
			...y,
			...d
		},
		classNames: T,
		styles: E
	};
	return /*#__PURE__*/ I.createElement(P, {
		ref: f(t, A),
		...se
	});
}), K = E(["Input", "Search"], (e) => {
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
}), ce = /*#__PURE__*/ I.forwardRef((e, t) => {
	let { prefixCls: n, inputPrefixCls: i, className: s, size: c, style: u, enterButton: d = !1, searchIcon: p, addonAfter: m, loading: _, disabled: b, onSearch: x, onChange: te, onCompositionStart: re, onCompositionEnd: S, variant: C, onPressEnter: w, classNames: ae, styles: T, hidden: E, ...O } = e, { direction: k, getPrefixCls: A, classNames: j, styles: M, searchIcon: oe } = ne("inputSearch"), N = {
		...e,
		enterButton: d
	}, [F, L] = v([j, ae], [M, T], { props: N }, { button: { _default: "root" } }), R = I.useRef(!1), z = A("input-search", n), se = A("input", i), [B, V] = K(z), { compactSize: H } = h(z, k), U = ie((e) => c ?? H ?? e), W = I.useRef(null), G = (e) => {
		e?.target && e.type === "click" && x && x(e.target.value, e, { source: "clear" }), te?.(e);
	}, ce = (e) => {
		document.activeElement === W.current?.input && e.preventDefault();
	}, q = (e) => {
		x && x(W.current?.input?.value, e, { source: "input" });
	}, J = (e) => {
		R.current || _ || (w?.(e), q(e));
	}, Y = typeof d == "boolean" ? g(p, oe, /*#__PURE__*/ I.createElement(o, null)) : null, X = `${z}-btn`, Z = a(X, { [`${X}-${C}`]: C }), Q, $ = d || {}, le = $.type && $.type.__ANT_BUTTON === !0;
	Q = le || $.type === "button" ? y($, {
		onMouseDown: ce,
		onClick: (e) => {
			$?.props?.onClick?.(e), q(e);
		},
		key: "enterButton",
		...le ? {
			className: Z,
			size: U
		} : {}
	}) : /*#__PURE__*/ I.createElement(D, {
		classNames: F.button,
		styles: L.button,
		className: Z,
		color: d ? "primary" : "default",
		size: U,
		disabled: b,
		key: "enterButton",
		onMouseDown: ce,
		onClick: q,
		loading: _,
		icon: Y,
		variant: C === "borderless" || C === "filled" || C === "underlined" ? "text" : d ? "solid" : void 0
	}, d), m && (Q = [Q, y(m, { key: "addonAfter" })]);
	let ue = a(z, V, {
		[`${z}-rtl`]: k === "rtl",
		[`${z}-${U}`]: !!U,
		[`${z}-with-button`]: !!d
	}, s, B, F.root), de = (e) => {
		R.current = !0, re?.(e);
	}, fe = (e) => {
		R.current = !1, S?.(e);
	}, pe = r(O, { data: !0 }), me = l({
		...O,
		classNames: l(F, ["button", "root"]),
		styles: l(L, ["button", "root"]),
		prefixCls: se,
		type: "search",
		size: U,
		variant: C,
		onPressEnter: J,
		onCompositionStart: de,
		onCompositionEnd: fe,
		onChange: G,
		disabled: b
	}, Object.keys(pe));
	return /*#__PURE__*/ I.createElement(ee, {
		className: ue,
		style: {
			...u,
			...L.root
		},
		...pe,
		hidden: E
	}, /*#__PURE__*/ I.createElement(P, {
		ref: f(W, t),
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
}, J = E(["Input", "TextArea"], (e) => q(m(e, A(e))), j, { resetFont: !1 }), Y = /*#__PURE__*/ (0, I.forwardRef)((e, t) => {
	let { prefixCls: n, bordered: r = !0, size: i, disabled: o, status: c, allowClear: l, classNames: u, rootClassName: d, className: f, style: p, styles: m, variant: g, showCount: y, onMouseDown: b, onResize: ee, ...x } = e, { getPrefixCls: w, direction: E, allowClear: D, autoComplete: A, className: j, style: M, classNames: N, styles: P } = ne("textArea"), F = I.useContext(ae), L = o ?? F, { status: R, hasFeedback: z, feedbackIcon: se } = I.useContext(T), B = re(R, c), [V, H] = v([N, u], [P, m], { props: e }), U = I.useRef(null);
	I.useImperativeHandle(t, () => ({
		resizableTextArea: U.current?.resizableTextArea,
		focus: (e) => {
			s(U.current?.resizableTextArea?.textArea, e);
		},
		blur: () => U.current?.blur(),
		nativeElement: U.current?.nativeElement || null
	}));
	let W = w("input", n), G = S(W), [K, ce] = k(W, d);
	J(W, G);
	let { compactSize: q, compactItemClassnames: Y } = h(W, E), X = ie((e) => i ?? q ?? e), [Z, Q] = O("textArea", g, r), $ = te({
		allowClear: l,
		contextAllowClear: D,
		componentName: "TextArea"
	}), [le, ue] = I.useState(!1), [de, fe] = I.useState(!1), pe = (e) => {
		ue(!0), b?.(e);
		let t = () => {
			ue(!1), document.removeEventListener("mouseup", t);
		};
		document.addEventListener("mouseup", t);
	}, me = (e) => {
		if (ee?.(e), le && C(getComputedStyle)) {
			let e = U.current?.nativeElement?.querySelector("textarea");
			e && getComputedStyle(e).resize === "both" && fe(!0);
		}
	};
	return /*#__PURE__*/ I.createElement(oe, {
		autoComplete: A,
		...x,
		style: {
			...H.root,
			...M,
			...p
		},
		styles: H,
		disabled: L,
		allowClear: $,
		className: a(ce, G, f, d, Y, j, V.root, { [`${W}-textarea-affix-wrapper-resize-dirty`]: de }),
		classNames: {
			...V,
			textarea: a({
				[`${W}-sm`]: X === "small",
				[`${W}-lg`]: X === "large"
			}, K, V.textarea, le && `${W}-mouse-active`),
			variant: a({ [`${W}-${Z}`]: Q }, _(W, B)),
			affixWrapper: a(`${W}-textarea-affix-wrapper`, {
				[`${W}-affix-wrapper-rtl`]: E === "rtl",
				[`${W}-affix-wrapper-sm`]: X === "small",
				[`${W}-affix-wrapper-lg`]: X === "large",
				[`${W}-textarea-show-count`]: y || e.count?.show
			}, K)
		},
		prefixCls: W,
		suffix: z && /*#__PURE__*/ I.createElement("span", { className: `${W}-textarea-suffix` }, se),
		showCount: y,
		ref: U,
		onResize: me,
		onMouseDown: pe
	});
}), X = /* @__PURE__ */ e({ default: () => Z }), Z = P;
Z.Group = L, Z.Search = ce, Z.TextArea = Y, Z.Password = G, Z.OTP = H;
//#endregion
export { Y as n, X as t };
