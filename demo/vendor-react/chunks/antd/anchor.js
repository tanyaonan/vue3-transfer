globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Mt as n, Nt as r, On as i, fn as a, it as o, kt as s, yt as c } from "../shared/core.js";
import { Cr as l, Gn as u, Jn as d, Kn as ee, Qn as te, Sr as ne, Wn as f, Yn as p, Zn as m, br as h, gr as g, pr as _, sr as v, wr as y } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/affix/style/index.js
var b = /* @__PURE__ */ t(i()), x = v("Affix", (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		position: "fixed",
		zIndex: e.zIndexPopup
	} };
}, (e) => ({ zIndexPopup: e.zIndexBase + 10 }));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/affix/utils.js
function S(e) {
	return e === window ? {
		top: 0,
		bottom: window.innerHeight
	} : e.getBoundingClientRect();
}
function C(e, t, n) {
	if (n !== void 0 && Math.round(t.top) > Math.round(e.top) - n) return n + t.top;
}
function w(e, t, n) {
	if (n !== void 0 && Math.round(t.bottom) < Math.round(e.bottom) + n) return n + (window.innerHeight - t.bottom);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/affix/index.js
var T = /* @__PURE__ */ e({ default: () => A }), E = [
	"resize",
	"scroll",
	"touchstart",
	"touchmove",
	"touchend",
	"pageshow",
	"load"
], D = () => typeof window < "u" ? window : null, O = 0, k = 1, A = /*#__PURE__*/ b.forwardRef((e, t) => {
	let { style: n, offsetTop: i, offsetBottom: a, prefixCls: o, className: s, rootClassName: c, children: u, target: d, onChange: ee, onTestUpdatePosition: te, ...f } = e, { getPrefixCls: p, className: m, style: g } = ne("affix"), { getTargetContainer: _ } = b.useContext(h), v = p("affix", o), [T, A] = b.useState(!1), [j, M] = b.useState(), [N, P] = b.useState(), F = b.useRef(O), I = b.useRef(null), L = b.useRef(null), R = b.useRef(null), z = b.useRef(null), B = b.useRef(null), V = d ?? _ ?? D, H = a === void 0 && i === void 0 ? 0 : i, U = () => {
		if (F.current !== k || !z.current || !R.current || !V) return;
		let e = V();
		if (e) {
			let t = { status: O }, n = S(R.current);
			if (n.top === 0 && n.left === 0 && n.width === 0 && n.height === 0) return;
			let r = S(e), i = C(n, r, H), o = w(n, r, a);
			i === void 0 ? o !== void 0 && (t.affixStyle = {
				position: "fixed",
				bottom: o,
				width: n.width,
				height: n.height
			}, t.placeholderStyle = {
				width: n.width,
				height: n.height
			}) : (t.affixStyle = {
				position: "fixed",
				top: i,
				width: n.width,
				height: n.height
			}, t.placeholderStyle = {
				width: n.width,
				height: n.height
			}), t.lastAffix = !!t.affixStyle, T !== t.lastAffix && ee?.(t.lastAffix), F.current = t.status, M(t.affixStyle), P(t.placeholderStyle), A(t.lastAffix);
		}
	}, W = () => {
		F.current = k, U();
	}, G = l(() => {
		W();
	}), K = l(() => {
		if (V && j) {
			let e = V();
			if (e && R.current) {
				let t = S(e), n = S(R.current), r = C(n, t, H), i = w(n, t, a);
				if (r !== void 0 && j.top === r || i !== void 0 && j.bottom === i) return;
			}
		}
		W();
	}), q = () => {
		let e = V?.();
		e && (E.forEach((t) => {
			L.current && I.current?.removeEventListener(t, L.current), e?.addEventListener(t, K);
		}), I.current = e, L.current = K);
	}, J = () => {
		let e = V?.();
		E.forEach((t) => {
			e?.removeEventListener(t, K), L.current && I.current?.removeEventListener(t, L.current);
		}), G.cancel(), K.cancel();
	};
	b.useImperativeHandle(t, () => ({ updatePosition: G })), b.useEffect(() => (B.current = setTimeout(q), () => {
		B.current &&= (clearTimeout(B.current), null), J();
	}), []), b.useEffect(() => (q(), () => J()), [
		d,
		j,
		T,
		i,
		a
	]), b.useEffect(() => {
		G();
	}, [
		d,
		i,
		a
	]);
	let [re, ie] = x(v), ae = r({ [r(c, re, v, ie)]: j });
	return /*#__PURE__*/ b.createElement(y, { onResize: G }, /*#__PURE__*/ b.createElement("div", {
		style: {
			...g,
			...n
		},
		className: r(s, m),
		ref: R,
		...f
	}, j && /*#__PURE__*/ b.createElement("div", {
		style: N,
		"aria-hidden": "true"
	}), /*#__PURE__*/ b.createElement("div", {
		className: ae,
		ref: z,
		style: j
	}, /*#__PURE__*/ b.createElement(y, { onResize: G }, u))));
}), j = /*#__PURE__*/ b.createContext(void 0), M = (e) => {
	let { href: t, title: n, prefixCls: i, children: a, className: o, target: s, replace: c, targetOffset: l } = e, { registerLink: u, unregisterLink: d, scrollTo: ee, onClick: te, activeLink: ne, direction: f, classNames: p, styles: m } = b.useContext(j) || {};
	b.useEffect(() => (u?.(t, l), () => {
		d?.(t);
	}), [t, l]);
	let g = (e) => {
		if (te?.(e, {
			title: n,
			href: t
		}), ee?.(t, l), e.defaultPrevented) return;
		if (t.startsWith("http://") || t.startsWith("https://")) {
			c && (e.preventDefault(), window.location.replace(t));
			return;
		}
		e.preventDefault();
		let r = c ? "replaceState" : "pushState";
		window.history[r](null, "", t);
	}, { getPrefixCls: _ } = b.useContext(h), v = _("anchor", i), y = ne === t, x = r(`${v}-link`, o, p?.item, { [`${v}-link-active`]: y }), S = r(`${v}-link-title`, p?.itemTitle, { [`${v}-link-title-active`]: y });
	return /*#__PURE__*/ b.createElement("div", {
		className: x,
		style: m?.item
	}, /*#__PURE__*/ b.createElement("a", {
		className: S,
		style: m?.itemTitle,
		href: t,
		title: typeof n == "string" ? n : void 0,
		target: s,
		onClick: g
	}, n), f === "horizontal" ? null : a);
}, N = (e) => {
	let { componentCls: t, holderOffsetBlock: n, motionDurationSlow: r, lineWidthBold: i, colorPrimary: a, lineType: o, colorSplit: c, calc: l } = e;
	return { [`${t}-wrapper`]: {
		marginBlockStart: l(n).mul(-1).equal(),
		paddingBlockStart: n,
		[t]: {
			..._(e),
			position: "relative",
			paddingInlineStart: i,
			[`${t}-link`]: {
				paddingBlock: e.linkPaddingBlock,
				paddingInline: `${s(e.linkPaddingInlineStart)} 0`,
				"&-title": {
					...g,
					position: "relative",
					display: "block",
					marginBlockEnd: e.anchorTitleBlock,
					color: e.colorText,
					transition: `all ${e.motionDurationSlow}`,
					"&:only-child": { marginBlockEnd: 0 }
				},
				[`&-active > ${t}-link-title`]: { color: e.colorPrimary },
				[`${t}-link`]: { paddingBlock: e.anchorPaddingBlockSecondary }
			}
		},
		[`&:not(${t}-wrapper-horizontal)`]: { [t]: {
			"&::before": {
				position: "absolute",
				insetInlineStart: 0,
				top: 0,
				height: "100%",
				borderInlineStart: `${s(i)} ${o} ${c}`,
				content: "\" \""
			},
			[`${t}-ink`]: {
				position: "absolute",
				insetInlineStart: 0,
				display: "none",
				transform: "translateY(-50%)",
				transition: `top ${r} ease-in-out`,
				width: i,
				backgroundColor: a,
				[`&${t}-ink-visible`]: { display: "inline-block" }
			}
		} },
		[`${t}-fixed ${t}-ink ${t}-ink`]: { display: "none" }
	} };
}, P = (e) => {
	let { componentCls: t, motionDurationSlow: n, lineWidthBold: r, colorPrimary: i } = e;
	return { [`${t}-wrapper-horizontal`]: {
		position: "relative",
		"&::before": {
			position: "absolute",
			left: {
				_skip_check_: !0,
				value: 0
			},
			right: {
				_skip_check_: !0,
				value: 0
			},
			bottom: 0,
			borderBottom: `${s(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
			content: "\" \""
		},
		[t]: {
			overflowX: "scroll",
			position: "relative",
			display: "flex",
			scrollbarWidth: "none",
			"&::-webkit-scrollbar": { display: "none" },
			[`${t}-link:first-of-type`]: { paddingInline: 0 },
			[`${t}-ink`]: {
				position: "absolute",
				bottom: 0,
				transition: ["left", "width"].map((e) => `${e} ${n} ease-in-out`).join(", "),
				height: r,
				backgroundColor: i
			}
		}
	} };
}, F = v("Anchor", (e) => {
	let { fontSize: t, fontSizeLG: n, paddingXXS: r, calc: i } = e, a = c(e, {
		holderOffsetBlock: r,
		anchorPaddingBlockSecondary: i(r).div(2).equal(),
		anchorTitleBlock: i(t).div(14).mul(3).equal(),
		anchorBallSize: i(n).div(2).equal()
	});
	return [N(a), P(a)];
}, (e) => ({
	linkPaddingBlock: e.paddingXXS,
	linkPaddingInlineStart: e.padding
}));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/anchor/Anchor.js
function I() {
	return window;
}
function L(e, t) {
	if (!e.getClientRects().length) return 0;
	let n = e.getBoundingClientRect();
	return n.width || n.height ? t === window ? n.top - e.ownerDocument.documentElement.clientTop : n.top - t.getBoundingClientRect().top : n.top;
}
var R = /#([\S ]+)$/, z = (e) => {
	let { rootClassName: t, prefixCls: i, className: s, style: c, offsetTop: l, affix: g = !0, showInkInFixed: _ = !1, children: v, items: y, direction: x = "vertical", bounds: S, targetOffset: C, onClick: w, onChange: T, getContainer: E, getCurrentAnchor: D, replace: O, classNames: k, styles: N } = e, [P, z] = b.useState([]), [B, V] = b.useState(null), H = b.useRef(B), U = b.useRef(null), W = b.useRef(null), G = b.useRef(!1), K = b.useRef(null), q = b.useRef({}), { direction: J, getPrefixCls: re, className: ie, style: ae, classNames: oe, styles: se } = ne("anchor"), { getTargetContainer: ce } = b.useContext(h), Y = re("anchor", i), le = f(Y), [ue, de] = F(Y, le), X = E ?? ce ?? I, fe = JSON.stringify(P), pe = (e, t) => {
		z((t) => t.includes(e) ? t : [].concat(n(t), [e])), t !== void 0 && (q.current[e] = t);
	}, me = (e) => {
		z((t) => t.filter((t) => t !== e)), delete q.current[e];
	}, he = () => {
		let e = U.current?.querySelector(`.${Y}-link-title-active`);
		if (e && W.current) {
			let { style: t } = W.current, n = x === "horizontal";
			t.top = n ? "" : `${e.offsetTop + e.clientHeight / 2}px`, t.height = n ? "" : `${e.clientHeight}px`, t.left = n ? `${e.offsetLeft}px` : "", t.width = n ? `${e.clientWidth}px` : "", n && o(e, {
				scrollMode: "if-needed",
				block: "nearest"
			});
		}
	}, ge = (e, t, n = 5, r) => {
		let i = [], a = X();
		return e.forEach((e) => {
			let o = R.exec(e?.toString());
			if (!o) return;
			let s = document.getElementById(o[1]);
			if (s) {
				let o = r?.[e] ?? t, c = L(s, a);
				c <= o + n && i.push({
					link: e,
					top: c
				});
			}
		}), i.length ? i.reduce((e, t) => t.top > e.top ? t : e).link : "";
	}, _e = a((e) => {
		if (H.current === e) return;
		let t = p(D) ? D(e) : e;
		V(t), H.current = t, T?.(e);
	}), Z = b.useCallback(() => {
		G.current || _e(ge(P, m(C) ? C : l || 0, S, q.current));
	}, [
		P,
		C,
		l,
		S
	]), ve = b.useCallback((e, t) => {
		let n = H.current;
		_e(e);
		let r = R.exec(e);
		if (!r) return;
		let i = document.getElementById(r[1]);
		if (!i) return;
		if (G.current) {
			if (n === e) return;
			K.current?.();
		}
		let a = X(), o = ee(a) + L(i, a);
		o -= t ?? C ?? l ?? 0, G.current = !0, K.current = u(o, {
			getContainer: X,
			callback() {
				G.current = !1;
			}
		});
	}, [C, l]), ye = {
		...e,
		direction: x
	}, [Q, $] = d([oe, k], [se, N], { props: ye }), be = r(ue, de, le, t, `${Y}-wrapper`, {
		[`${Y}-wrapper-horizontal`]: x === "horizontal",
		[`${Y}-rtl`]: J === "rtl"
	}, s, ie, Q.root), xe = r(Y, { [`${Y}-fixed`]: !g && !_ }), Se = r(`${Y}-ink`, Q.indicator, { [`${Y}-ink-visible`]: B }), Ce = {
		maxHeight: l ? `calc(100vh - ${l}px)` : "100vh",
		...$.root,
		...ae,
		...c
	}, we = (e) => Array.isArray(e) ? e.map((e) => /*#__PURE__*/ b.createElement(M, {
		replace: O,
		...e,
		key: e.key
	}, x === "vertical" && we(e.children))) : null, Te = /*#__PURE__*/ b.createElement("div", {
		ref: U,
		className: be,
		style: Ce
	}, /*#__PURE__*/ b.createElement("div", { className: xe }, /*#__PURE__*/ b.createElement("span", {
		className: Se,
		ref: W,
		style: $.indicator
	}), "items" in e ? we(y) : v));
	b.useEffect(() => {
		let e = X();
		return Z(), e?.addEventListener("scroll", Z), () => {
			e?.removeEventListener("scroll", Z);
		};
	}, [fe]), b.useEffect(() => {
		p(D) && _e(D(H.current || ""));
	}, [D]), b.useEffect(() => {
		he();
	}, [
		x,
		D,
		fe,
		B
	]);
	let Ee = b.useMemo(() => ({
		registerLink: pe,
		unregisterLink: me,
		scrollTo: ve,
		activeLink: B,
		onClick: w,
		direction: x,
		classNames: Q,
		styles: $
	}), [
		B,
		w,
		ve,
		x,
		$,
		Q
	]), De = te(g) ? g : void 0;
	return /*#__PURE__*/ b.createElement(j.Provider, { value: Ee }, g ? /*#__PURE__*/ b.createElement(A, {
		offsetTop: l,
		target: X,
		...De
	}, Te) : Te);
}, B = /* @__PURE__ */ e({ default: () => V }), V = z;
V.Link = M;
//#endregion
export { T as n, B as t };
