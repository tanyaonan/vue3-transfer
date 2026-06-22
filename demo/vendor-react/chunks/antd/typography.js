globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Jt as n, Mt as r, Nt as i, On as a, Ut as o, Yt as s, a as c, et as l, fn as u, kt as d, ln as f, o as p, pn as m, pt as h, rt as g, s as _, sn as v, wn as y } from "../shared/core.js";
import { Jn as b, Mn as x, Qn as S, Rn as ee, Sr as C, Yn as w, er as T, fr as E, gr as D, o as O, sr as k, t as A, wr as te } from "../shared/antd-core.js";
import { o as j } from "./avatar.js";
import { n as M } from "./input.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/typography/style/mixins.js
var N = /* @__PURE__ */ t(a()), P = (e, t, n, r) => {
	let { titleMarginBottom: i, fontWeightStrong: a } = r;
	return {
		marginBottom: i,
		color: n,
		fontWeight: a,
		fontSize: e,
		lineHeight: t
	};
}, ne = (e) => {
	let t = [
		1,
		2,
		3,
		4,
		5
	], n = {};
	return t.forEach((t) => {
		n[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `] = P(e[`fontSizeHeading${t}`], e[`lineHeightHeading${t}`], e.colorTextHeading, e);
	}), n;
}, F = (e) => {
	let { componentCls: t } = e;
	return { [`&${`${t}-link`}`]: {
		...E(e),
		userSelect: "text",
		[`&[disabled], &${t}-disabled`]: {
			color: e.colorTextDisabled,
			cursor: "not-allowed",
			"&:active, &:hover": { color: e.colorTextDisabled },
			"&:active": {
				pointerEvents: "none",
				[`${t}-actions`]: { pointerEvents: "auto" }
			}
		}
	} };
}, I = (e) => ({
	code: {
		margin: "0 0.2em",
		paddingInline: "0.4em",
		paddingBlock: "0.2em 0.1em",
		fontSize: "85%",
		fontFamily: e.fontFamilyCode,
		background: "rgba(150, 150, 150, 0.1)",
		border: "1px solid rgba(100, 100, 100, 0.2)",
		borderRadius: 3
	},
	kbd: {
		margin: "0 0.2em",
		paddingInline: "0.4em",
		paddingBlock: "0.15em 0.1em",
		fontSize: "90%",
		fontFamily: e.fontFamilyCode,
		background: "rgba(150, 150, 150, 0.06)",
		border: "1px solid rgba(100, 100, 100, 0.2)",
		borderBottomWidth: 2,
		borderRadius: 3
	},
	mark: {
		padding: 0,
		backgroundColor: h[2]
	},
	"u, ins": {
		textDecoration: "underline",
		textDecorationSkipInk: "auto"
	},
	"s, del": { textDecoration: "line-through" },
	strong: { fontWeight: e.fontWeightStrong },
	"ul, ol": {
		marginInline: 0,
		marginBlock: "0 1em",
		padding: 0,
		li: {
			marginInline: "20px 0",
			marginBlock: 0,
			paddingInline: "4px 0",
			paddingBlock: 0
		}
	},
	ul: {
		listStyleType: "circle",
		ul: { listStyleType: "disc" }
	},
	ol: { listStyleType: "decimal" },
	"pre, blockquote": { margin: "1em 0" },
	pre: {
		padding: "0.4em 0.6em",
		whiteSpace: "pre-wrap",
		wordWrap: "break-word",
		background: "rgba(150, 150, 150, 0.1)",
		border: "1px solid rgba(100, 100, 100, 0.2)",
		borderRadius: 3,
		fontFamily: e.fontFamilyCode,
		code: {
			display: "inline",
			margin: 0,
			padding: 0,
			fontSize: "inherit",
			fontFamily: "inherit",
			background: "transparent",
			border: 0
		}
	},
	blockquote: {
		paddingInline: "0.6em 0",
		paddingBlock: 0,
		borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
		opacity: .85
	},
	table: {
		width: "100%",
		textAlign: "start",
		borderCollapse: "separate",
		borderSpacing: 0,
		marginBlock: "1em",
		"th, td": {
			padding: d(e.padding),
			overflowWrap: "break-word",
			borderBottom: `${d(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
		},
		"thead > tr:first-child > th:first-child": { borderStartStartRadius: e.borderRadiusLG },
		"thead > tr:first-child > th:last-child": { borderStartEndRadius: e.borderRadiusLG },
		"thead > tr > th": {
			textAlign: "start",
			position: "relative",
			color: e.colorTextHeading,
			fontWeight: e.fontWeightStrong,
			backgroundColor: e.colorFillAlter,
			transition: `background-color ${e.motionDurationMid} ease`,
			"&:not(:last-child)::before": {
				position: "absolute",
				top: "50%",
				insetInlineEnd: 0,
				width: 1,
				height: "1.6em",
				backgroundColor: e.colorSplit,
				transform: "translateY(-50%)",
				content: "\"\""
			}
		},
		"tbody > tr": {
			"> th, > td": { transition: `background-color ${e.motionDurationMid} ease` },
			"&:hover > th, &:hover > td": { backgroundColor: e.colorFillAlter }
		}
	}
}), L = (e) => {
	let { componentCls: t, paddingSM: n } = e, r = n;
	return { "&-edit-content": {
		position: "relative",
		"div&": {
			insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
			insetBlockStart: e.calc(r).div(-2).add(1).equal(),
			marginBottom: e.calc(r).div(2).sub(2).equal()
		},
		[`${t}-edit-content-confirm`]: {
			position: "absolute",
			insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
			insetBlockEnd: e.marginXS,
			color: e.colorIcon,
			fontWeight: "normal",
			fontSize: e.fontSize,
			fontStyle: "normal",
			pointerEvents: "none"
		},
		textarea: {
			margin: "0!important",
			MozTransition: "none",
			height: "1em"
		}
	} };
}, re = (e) => ({
	[`${e.componentCls}-copy-success`]: { "&, &:hover, &:focus": { color: e.colorSuccess } },
	[`${e.componentCls}-copy-icon-only`]: { marginInlineStart: 0 }
}), ie = () => ({
	"a&-ellipsis, span&-ellipsis": {
		display: "inline-block",
		maxWidth: "100%"
	},
	"&-ellipsis-single-line": {
		...D,
		"a&, span&": { verticalAlign: "bottom" },
		"> code": {
			paddingBlock: 0,
			maxWidth: "calc(100% - 1.2em)",
			display: "inline-block",
			overflow: "hidden",
			textOverflow: "ellipsis",
			verticalAlign: "bottom",
			boxSizing: "content-box"
		}
	},
	"&-ellipsis-multiple-line": {
		display: "-webkit-box",
		overflow: "hidden",
		WebkitLineClamp: 3,
		WebkitBoxOrient: "vertical"
	}
}), R = k("Typography", (e) => {
	let { componentCls: t, titleMarginTop: n } = e;
	return { [t]: {
		color: e.colorText,
		wordBreak: "break-word",
		lineHeight: e.lineHeight,
		[`&${t}-secondary, &${t}-link${t}-secondary`]: { color: e.colorTextDescription },
		[`&${t}-success, &${t}-link${t}-success`]: { color: e.colorSuccessText },
		[`&${t}-warning, &${t}-link${t}-warning`]: { color: e.colorWarningText },
		[`&${t}-danger, &${t}-link${t}-danger`]: {
			color: e.colorErrorText,
			[`&${t}-link:active, &${t}-link:focus`]: { color: e.colorErrorTextActive },
			[`&${t}-link:hover`]: { color: e.colorErrorTextHover }
		},
		[`&${t}-disabled`]: {
			color: e.colorTextDisabled,
			cursor: "not-allowed",
			userSelect: "none"
		},
		"div&, p": { marginBottom: "1em" },
		...ne(e),
		[`& + h1${t}, & + h2${t}, & + h3${t}, & + h4${t}, & + h5${t}`]: { marginTop: n },
		"div, ul, li, p, h1, h2, h3, h4, h5": { "+ h1, + h2, + h3, + h4, + h5": { marginTop: n } },
		...I(e),
		...F(e),
		[`${t}-actions`]: { display: "inline" },
		[`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: {
			...E(e),
			marginInlineStart: e.marginXXS
		},
		[`${t}-actions-start`]: { [`
          ${t}-expand,
          ${t}-collapse,
          ${t}-edit,
          ${t}-copy:not(${t}-copy-icon-only)
        `]: {
			marginInlineStart: 0,
			marginInlineEnd: e.marginXXS
		} },
		...L(e),
		...re(e),
		...ie(),
		"&-rtl": { direction: "rtl" }
	} };
}, () => ({
	titleMarginTop: "1.2em",
	titleMarginBottom: "0.5em"
})), ae = (e) => {
	let { prefixCls: t, "aria-label": r, className: a, style: o, classNames: s, styles: c, direction: l, maxLength: u, autoSize: d = !0, value: f, onSave: m, onCancel: h, onEnd: g, component: _, enterIcon: v = /*#__PURE__*/ N.createElement(p, null) } = e, y = N.useRef(null), b = N.useRef(!1), S = N.useRef(null), [ee, C] = N.useState(f);
	N.useEffect(() => {
		C(f);
	}, [f]), N.useEffect(() => {
		if (y.current?.resizableTextArea) {
			let { textArea: e } = y.current.resizableTextArea;
			e.focus();
			let { length: t } = e.value;
			e.setSelectionRange(t, t);
		}
	}, []);
	let w = ({ target: e }) => {
		C(e.value.replace(/[\n\r]/g, ""));
	}, T = () => {
		b.current = !0;
	}, E = () => {
		b.current = !1;
	}, D = ({ keyCode: e }) => {
		b.current || (S.current = e);
	}, O = () => {
		m(ee.trim());
	}, k = ({ keyCode: e, ctrlKey: t, altKey: r, metaKey: i, shiftKey: a }) => {
		S.current !== e || b.current || t || r || i || a || (e === n.ENTER ? (O(), g?.()) : e === n.ESC && h());
	}, A = () => {
		O();
	}, [te, j] = R(t), P = i(t, `${t}-edit-content`, {
		[`${t}-rtl`]: l === "rtl",
		[`${t}-${_}`]: !!_
	}, a, s.root, te, j);
	return /*#__PURE__*/ N.createElement("div", {
		className: P,
		style: {
			...c.root,
			...o
		}
	}, /*#__PURE__*/ N.createElement(M, {
		ref: y,
		maxLength: u,
		value: ee,
		onChange: w,
		onKeyDown: D,
		onKeyUp: k,
		onCompositionStart: T,
		onCompositionEnd: E,
		onBlur: A,
		"aria-label": r,
		rows: 1,
		autoSize: d,
		className: s.textarea,
		style: c.textarea
	}), v === null ? null : x(v, { className: `${t}-edit-content-confirm` }));
}, oe = ({ copyConfig: e, children: t }) => {
	let [n, r] = N.useState(!1), [i, a] = N.useState(!1), o = N.useRef(null), s = () => {
		o.current && clearTimeout(o.current);
	}, c = {};
	return e.format && (c.format = e.format), N.useEffect(() => s, []), {
		copied: n,
		copyLoading: i,
		onClick: u(async (n) => {
			n?.preventDefault(), n?.stopPropagation(), a(!0);
			try {
				await A((w(e.text) ? await e.text() : e.text) || O(t, { skipEmpty: !0 }).join("") || "", c), a(!1), r(!0), s(), o.current = setTimeout(() => {
					r(!1);
				}, 3e3), e.onCopy?.(n);
			} catch (e) {
				throw a(!1), e;
			}
		})
	};
}, se = (e, t) => {
	let n = !!e;
	return N.useMemo(() => [n, {
		...t,
		...n && S(e) ? e : null
	}], [
		n,
		e,
		t
	]);
}, ce = (e) => {
	let t = (0, N.useRef)(void 0);
	return (0, N.useEffect)(() => {
		t.current = e;
	}), t.current;
}, le = (e, t, n) => (0, N.useMemo)(() => e === !0 ? { title: t ?? n } : /*#__PURE__*/ (0, N.isValidElement)(e) ? { title: e } : S(e) ? {
	title: t ?? n,
	...e
} : { title: e }, [
	e,
	t,
	n
]), ue = (e, t, n, r, i) => {
	let { getPrefixCls: a, direction: o, className: s, style: c, classNames: l, styles: u } = C("typography"), d = r ?? o, f = a("typography", e), p = {
		...i,
		prefixCls: f,
		direction: d
	}, m = (0, N.useMemo)(() => ({ root: s }), [s]), h = (0, N.useMemo)(() => ({ root: c }), [c]), [g, _] = b([
		m,
		l,
		t
	], [
		h,
		u,
		n
	], { props: p });
	return [
		g,
		_,
		f,
		d
	];
}, de = /*#__PURE__*/ N.forwardRef((e, t) => {
	let { component: n = "article", className: r, rootClassName: a, children: o, direction: s, style: c, classNames: l, styles: u, prefixCls: d, ...f } = e, [p, m] = R(d), h = i(d, { [`${d}-rtl`]: s === "rtl" }, r, a, p, m, l?.root), g = {
		...u?.root,
		...c
	};
	return /*#__PURE__*/ N.createElement(n, {
		...f,
		className: h,
		style: g,
		ref: t
	}, o);
}), z = /*#__PURE__*/ N.forwardRef((e, t) => {
	let { prefixCls: n, className: r, rootClassName: a, direction: o, classNames: s, styles: c, ...l } = e, [u, d, f, p] = ue(n, s, c, o, e);
	return /*#__PURE__*/ N.createElement(de, {
		ref: t,
		className: i(r, a),
		direction: p,
		classNames: u,
		styles: d,
		prefixCls: f,
		...l
	});
}), B = (e) => e === !1 ? [!1, !1] : O(e);
function fe(e, t, n) {
	return e === !0 || e === void 0 ? t : e || n && t;
}
function pe(e) {
	let t = document.createElement("em");
	e.appendChild(t);
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
	return e.removeChild(t), n.left > r.left || r.right > n.right || n.top > r.top || r.bottom > n.bottom;
}
var me = (e) => ["string", "number"].includes(typeof e), he = (e) => {
	let { prefixCls: t, copied: n, locale: r, iconOnly: a, tooltips: o, icon: s, tabIndex: u, onCopy: d, loading: f, className: p, style: m } = e, h = B(o), _ = B(s), { copied: v, copy: y } = r ?? {}, b = n ? v : y, x = fe(h[+!!n], b), S = typeof x == "string" ? x : b;
	return /*#__PURE__*/ N.createElement(j, { title: x }, /*#__PURE__*/ N.createElement("button", {
		type: "button",
		className: i(`${t}-copy`, p, {
			[`${t}-copy-success`]: n,
			[`${t}-copy-icon-only`]: a
		}),
		style: m,
		onClick: d,
		"aria-label": S,
		tabIndex: u
	}, n ? fe(_[1], /*#__PURE__*/ N.createElement(l, null), !0) : fe(_[0], f ? /*#__PURE__*/ N.createElement(g, null) : /*#__PURE__*/ N.createElement(c, null), !0)));
}, V = /*#__PURE__*/ N.forwardRef(({ style: e, children: t }, n) => {
	let r = N.useRef(null);
	return N.useImperativeHandle(n, () => ({
		isExceed: () => {
			let e = r.current;
			return e.scrollHeight > e.clientHeight;
		},
		getHeight: () => r.current.clientHeight
	})), /*#__PURE__*/ N.createElement("span", {
		"aria-hidden": !0,
		ref: r,
		style: {
			position: "fixed",
			display: "block",
			left: 0,
			top: 0,
			pointerEvents: "none",
			backgroundColor: "rgba(255, 0, 0, 0.65)",
			...e
		}
	}, t);
}), ge = (e) => e.reduce((e, t) => e + (me(t) ? String(t).length : 1), 0);
function _e(e, t) {
	let n = 0, r = [];
	for (let i = 0; i < e.length; i += 1) {
		if (n === t) return r;
		let a = e[i], o = me(a) ? String(a).length : 1, s = n + o;
		if (s > t) {
			let e = t - n;
			return r.push(String(a).slice(0, e)), r;
		}
		r.push(a), n = s;
	}
	return e;
}
var H = 0, ve = 1, ye = 2, U = 3, be = 4, W = {
	display: "-webkit-box",
	overflow: "hidden",
	WebkitBoxOrient: "vertical"
};
function xe(e) {
	let { enableMeasure: t, width: n, text: i, children: a, rows: o, expanded: s, measureDeps: c, miscDeps: l, onEllipsis: u } = e, d = N.useMemo(() => y(i), [i]), p = N.useMemo(() => ge(d), [i]), m = N.useMemo(() => a(d, !1), [i].concat(r(c))), [h, g] = N.useState(null), _ = N.useRef(null), v = N.useRef(null), b = N.useRef(null), x = N.useRef(null), S = N.useRef(null), [ee, C] = N.useState(!1), [w, T] = N.useState(H), [E, D] = N.useState(0), [O, k] = N.useState(null);
	f(() => {
		T(t && n && p ? ve : H);
	}, [
		n,
		i,
		o,
		t,
		d
	].concat(r(c))), f(() => {
		if (w === ve) T(ye), k(v.current && getComputedStyle(v.current).whiteSpace);
		else if (w === ye) {
			let e = !!b.current?.isExceed();
			T(e ? U : be), g(e ? [0, p] : null), C(e);
			let t = b.current?.getHeight() || 0, n = o === 1 ? 0 : x.current?.getHeight() || 0, r = S.current?.getHeight() || 0;
			D(Math.max(t, n + r) + 1), u(e);
		}
	}, [w]);
	let A = h ? Math.ceil((h[0] + h[1]) / 2) : 0;
	f(() => {
		let [e, t] = h || [0, 0];
		if (e !== t) {
			let n = (_.current?.getHeight() || 0) > E, r = A;
			t - e === 1 && (r = n ? e : t), g(n ? [e, r] : [r, t]);
		}
	}, [h, A]);
	let te = N.useMemo(() => {
		if (!t) return a(d, !1);
		if (w !== U || !h || h[0] !== h[1]) {
			let e = a(d, !1);
			return [be, H].includes(w) ? e : /*#__PURE__*/ N.createElement("span", { style: {
				...W,
				WebkitLineClamp: o
			} }, e);
		}
		return a(s ? d : _e(d, h[0]), ee);
	}, [
		s,
		w,
		h,
		d
	].concat(r(l))), j = {
		width: n,
		margin: 0,
		padding: 0,
		whiteSpace: O === "nowrap" ? "normal" : "inherit"
	};
	return /*#__PURE__*/ N.createElement(N.Fragment, null, te, w === ye && /*#__PURE__*/ N.createElement(N.Fragment, null, /*#__PURE__*/ N.createElement(V, {
		style: {
			...j,
			...W,
			WebkitLineClamp: o
		},
		ref: b
	}, m), /*#__PURE__*/ N.createElement(V, {
		style: {
			...j,
			...W,
			WebkitLineClamp: o - 1
		},
		ref: x
	}, m), /*#__PURE__*/ N.createElement(V, {
		style: {
			...j,
			...W,
			WebkitLineClamp: 1
		},
		ref: S
	}, a([], !0))), w === U && h && h[0] !== h[1] && /*#__PURE__*/ N.createElement(V, {
		style: {
			...j,
			top: 400
		},
		ref: _
	}, a(_e(d, A), !0)), w === ve && /*#__PURE__*/ N.createElement("span", {
		style: { whiteSpace: "inherit" },
		ref: v
	}));
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/typography/Base/EllipsisTooltip.js
var Se = ({ enableEllipsis: e, isEllipsis: t, open: n, children: r, tooltipProps: i }) => {
	if (!i?.title || !e) return r;
	let a = n && t;
	return /*#__PURE__*/ N.createElement(j, {
		open: a,
		...i
	}, r);
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/typography/Base/index.js
function Ce({ mark: e, code: t, underline: n, delete: r, strong: i, keyboard: a, italic: o }, s) {
	let c = s;
	function l(e, t) {
		t && (c = /*#__PURE__*/ N.createElement(e, {}, c));
	}
	return l("strong", i), l("u", n), l("del", r), l("code", t), l("mark", e), l("kbd", a), l("i", o), c;
}
var we = "...", Te = [
	"delete",
	"mark",
	"code",
	"underline",
	"strong",
	"keyboard",
	"italic"
], G = /*#__PURE__*/ N.forwardRef((e, t) => {
	let { prefixCls: n, className: a, style: c, classNames: l, styles: u, direction: d, type: p, disabled: h, children: g, ellipsis: b, editable: x, copyable: S, actions: C, component: E, title: D, onMouseEnter: O, onMouseLeave: k, ...A } = e, [M] = ee("Text"), P = N.useRef(null), ne = N.useRef(null), [F, I, L, re] = ue(n, l, u, d, e), ie = o(A, Te), [R, z] = se(x), [B, fe] = v(!1, z.editing), { triggerType: V = ["icon"] } = z, ge = (e) => {
		e && z.onStart?.(), fe(e);
	}, _e = ce(B);
	f(() => {
		!B && _e && ne.current?.focus();
	}, [B]);
	let H = (e) => {
		e?.preventDefault(), ge(!0);
	}, ve = (e) => {
		z.onChange?.(e), ge(!1);
	}, ye = () => {
		z.onCancel?.(), ge(!1);
	}, [U, be] = se(S), { placement: W = "end" } = C ?? {}, { copied: G, copyLoading: Ee, onClick: De } = oe({
		copyConfig: be,
		children: g
	}), [Oe, ke] = N.useState(!1), [Ae, je] = N.useState(!1), [K, Me] = N.useState(!1), [Ne, Pe] = N.useState(!1), [Fe, Ie] = N.useState(!0), [q, J] = se(b, {
		expandable: !1,
		symbol: (e) => e ? M?.collapse : M?.expand
	}), [Y, Le] = v(J.defaultExpanded || !1, J.expanded), X = q && (!Y || J.expandable === "collapsible"), { rows: Z = 1 } = J, Re = N.useMemo(() => X && (J.suffix !== void 0 || J.onEllipsis || J.expandable || R || U), [
		X,
		J,
		R,
		U
	]);
	f(() => {
		q && !Re && (ke(s("webkitLineClamp")), je(s("textOverflow")));
	}, [Re, q]);
	let [Q, ze] = N.useState(X), Be = N.useMemo(() => Re ? !1 : Z === 1 ? Ae : Oe, [
		Re,
		Ae,
		Oe
	]);
	f(() => {
		ze(Be && X);
	}, [Be, X]);
	let Ve = le(J.tooltip, z.text, g), $ = Q && !!Ve.title, He = X && (Q ? $ && Ne : K), Ue = X && Z === 1 && Q, We = X && Z > 1 && Q, Ge = (e, t) => {
		Le(t.expanded), J.onExpand?.(e, t);
	}, [Ke, qe] = N.useState(0), [Je, Ye] = N.useState(!1), [Xe, Ze] = N.useState(!1), Qe = ({ offsetWidth: e }) => {
		qe(e);
	}, $e = (e) => {
		Me(e), K !== e && J.onEllipsis?.(e);
	};
	N.useEffect(() => {
		let e = P.current;
		if (q && $ && e) {
			let t = pe(e);
			Ne !== t && Pe(t);
		}
	}, [
		q,
		$,
		g,
		We,
		Fe,
		Ke
	]), N.useEffect(() => {
		let e = P.current;
		if (typeof IntersectionObserver > "u" || !e || !$ || !X) return;
		let t = new IntersectionObserver(() => {
			Ie(!!e.offsetParent);
		});
		return t.observe(e), () => {
			t.disconnect();
		};
	}, [$, X]);
	let et = N.useMemo(() => {
		if (!(!q || Q)) return [
			z.text,
			g,
			D,
			Ve.title
		].find(me);
	}, [
		q,
		Q,
		D,
		Ve.title,
		He
	]);
	if (B) return /*#__PURE__*/ N.createElement(ae, {
		value: z.text ?? (typeof g == "string" ? g : ""),
		onSave: ve,
		onCancel: ye,
		onEnd: z.onEnd,
		prefixCls: L,
		className: a,
		style: c,
		direction: re,
		component: E,
		maxLength: z.maxLength,
		autoSize: z.autoSize,
		enterIcon: z.enterIcon,
		classNames: F,
		styles: I
	});
	let tt = () => {
		let { expandable: e, symbol: t } = J;
		return e ? /*#__PURE__*/ N.createElement("button", {
			type: "button",
			key: "expand",
			className: i(`${L}-${Y ? "collapse" : "expand"}`, F.action),
			style: I.action,
			onClick: (e) => Ge(e, { expanded: !Y }),
			"aria-label": Y ? M.collapse : M?.expand
		}, w(t) ? t(Y) : t) : null;
	}, nt = () => {
		if (!R) return;
		let { icon: e, tooltip: t, tabIndex: n } = z, r = y(t)[0] || M?.edit, a = typeof r == "string" ? r : "";
		return V.includes("icon") ? /*#__PURE__*/ N.createElement(j, {
			key: "edit",
			title: t === !1 ? "" : r
		}, /*#__PURE__*/ N.createElement("button", {
			type: "button",
			ref: ne,
			className: i(`${L}-edit`, F.action),
			style: I.action,
			onClick: H,
			"aria-label": a,
			tabIndex: n
		}, e || /*#__PURE__*/ N.createElement(_, { role: "button" }))) : null;
	}, rt = () => U ? /*#__PURE__*/ N.createElement(he, {
		key: "copy",
		...be,
		prefixCls: L,
		copied: G,
		locale: M,
		onCopy: De,
		loading: Ee,
		iconOnly: !T(g),
		className: F.action,
		style: I.action
	}) : null, it = (e) => {
		let t = e && tt(), n = nt(), r = rt();
		return !t && !n && !r ? null : /*#__PURE__*/ N.createElement("span", {
			key: "operations",
			className: i(`${L}-actions`, F.actions, { [`${L}-actions-start`]: W === "start" }),
			style: I.actions,
			onMouseEnter: () => Ye(!0),
			onMouseLeave: () => Ye(!1)
		}, t, n, r);
	}, at = (e) => [e && !Y && /*#__PURE__*/ N.createElement("span", {
		"aria-hidden": !0,
		key: "ellipsis"
	}, we), J.suffix];
	return /*#__PURE__*/ N.createElement(te, {
		onResize: Qe,
		disabled: !X
	}, (n) => /*#__PURE__*/ N.createElement(Se, {
		tooltipProps: Ve,
		enableEllipsis: X,
		isEllipsis: He,
		open: Xe && !Je
	}, /*#__PURE__*/ N.createElement(de, {
		onMouseEnter: (e) => {
			Ze(!0), O?.(e);
		},
		onMouseLeave: (e) => {
			Ze(!1), k?.(e);
		},
		className: i({
			[`${L}-${p}`]: p,
			[`${L}-disabled`]: h,
			[`${L}-ellipsis`]: q,
			[`${L}-ellipsis-single-line`]: Ue,
			[`${L}-ellipsis-multiple-line`]: We,
			[`${L}-link`]: E === "a"
		}, a),
		classNames: F,
		styles: I,
		prefixCls: L,
		style: {
			...c,
			WebkitLineClamp: We ? Z : void 0
		},
		component: E,
		ref: m(n, P, t),
		direction: re,
		onClick: V.includes("text") ? H : void 0,
		"aria-label": et?.toString(),
		title: D,
		...ie
	}, /*#__PURE__*/ N.createElement(xe, {
		enableMeasure: X && !Q,
		text: g,
		rows: Z,
		width: Ke,
		onEllipsis: $e,
		expanded: Y,
		measureDeps: [W],
		miscDeps: [
			G,
			Y,
			Ee,
			R,
			U,
			W,
			M
		].concat(r(Te.map((t) => e[t])))
	}, (t, n) => Ce(e, /*#__PURE__*/ N.createElement(N.Fragment, null, W === "start" ? it(n) : null, t.length > 0 && n && !Y && et ? /*#__PURE__*/ N.createElement("span", {
		key: "show-content",
		"aria-hidden": !0
	}, t) : t, at(n), W === "start" ? null : it(n)))))));
}), Ee = /*#__PURE__*/ N.forwardRef((e, t) => {
	let { ellipsis: n, rel: r, children: i, navigate: a, ...o } = e, s = {
		...o,
		rel: r === void 0 && o.target === "_blank" ? "noopener noreferrer" : r
	};
	return /*#__PURE__*/ N.createElement(G, {
		...s,
		ref: t,
		ellipsis: !!n,
		component: "a"
	}, i);
}), De = /*#__PURE__*/ N.forwardRef((e, t) => {
	let { children: n, ...r } = e;
	return /*#__PURE__*/ N.createElement(G, {
		ref: t,
		...r,
		component: "div"
	}, n);
}), Oe = /*#__PURE__*/ N.forwardRef((e, t) => {
	let { ellipsis: n, children: r, ...i } = e, a = N.useMemo(() => S(n) ? o(n, ["expandable", "rows"]) : n, [n]);
	return /*#__PURE__*/ N.createElement(G, {
		ref: t,
		...i,
		ellipsis: a,
		component: "span"
	}, r);
}), ke = [
	1,
	2,
	3,
	4,
	5
], Ae = /*#__PURE__*/ N.forwardRef((e, t) => {
	let { level: n = 1, children: r, ...i } = e, a = ke.includes(n) ? `h${n}` : "h1";
	return /*#__PURE__*/ N.createElement(G, {
		ref: t,
		...i,
		component: a
	}, r);
}), je = /* @__PURE__ */ e({ default: () => K }), K = z;
K.Text = Oe, K.Link = Ee, K.Title = Ae, K.Paragraph = De;
//#endregion
export { je as t };
