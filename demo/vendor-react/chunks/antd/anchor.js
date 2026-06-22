globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Mt as n, Nt as r, fn as i, it as a, kn as o, kt as s, yt as c } from "../shared/core.js";
import { Gn as l, Jn as u, Kn as d, Qn as f, Sr as p, Wn as m, Yn as h, Zn as g, br as _, gr as v, pr as y, sr as b } from "../shared/antd-core.js";
import { t as x } from "./affix.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/anchor/context.js
var S = /* @__PURE__ */ t(o()), C = /*#__PURE__*/ S.createContext(void 0), w = (e) => {
	let { href: t, title: n, prefixCls: i, children: a, className: o, target: s, replace: c, targetOffset: l } = e, { registerLink: u, unregisterLink: d, scrollTo: f, onClick: p, activeLink: m, direction: h, classNames: g, styles: v } = S.useContext(C) || {};
	S.useEffect(() => (u?.(t, l), () => {
		d?.(t);
	}), [t, l]);
	let y = (e) => {
		if (p?.(e, {
			title: n,
			href: t
		}), f?.(t, l), e.defaultPrevented) return;
		if (t.startsWith("http://") || t.startsWith("https://")) {
			c && (e.preventDefault(), window.location.replace(t));
			return;
		}
		e.preventDefault();
		let r = c ? "replaceState" : "pushState";
		window.history[r](null, "", t);
	}, { getPrefixCls: b } = S.useContext(_), x = b("anchor", i), w = m === t, T = r(`${x}-link`, o, g?.item, { [`${x}-link-active`]: w }), E = r(`${x}-link-title`, g?.itemTitle, { [`${x}-link-title-active`]: w });
	return /*#__PURE__*/ S.createElement("div", {
		className: T,
		style: v?.item
	}, /*#__PURE__*/ S.createElement("a", {
		className: E,
		style: v?.itemTitle,
		href: t,
		title: typeof n == "string" ? n : void 0,
		target: s,
		onClick: y
	}, n), h === "horizontal" ? null : a);
}, T = (e) => {
	let { componentCls: t, holderOffsetBlock: n, motionDurationSlow: r, lineWidthBold: i, colorPrimary: a, lineType: o, colorSplit: c, calc: l } = e;
	return { [`${t}-wrapper`]: {
		marginBlockStart: l(n).mul(-1).equal(),
		paddingBlockStart: n,
		[t]: {
			...y(e),
			position: "relative",
			paddingInlineStart: i,
			[`${t}-link`]: {
				paddingBlock: e.linkPaddingBlock,
				paddingInline: `${s(e.linkPaddingInlineStart)} 0`,
				"&-title": {
					...v,
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
}, E = (e) => {
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
}, ee = b("Anchor", (e) => {
	let { fontSize: t, fontSizeLG: n, paddingXXS: r, calc: i } = e, a = c(e, {
		holderOffsetBlock: r,
		anchorPaddingBlockSecondary: i(r).div(2).equal(),
		anchorTitleBlock: i(t).div(14).mul(3).equal(),
		anchorBallSize: i(n).div(2).equal()
	});
	return [T(a), E(a)];
}, (e) => ({
	linkPaddingBlock: e.paddingXXS,
	linkPaddingInlineStart: e.padding
}));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/anchor/Anchor.js
function te() {
	return window;
}
function D(e, t) {
	if (!e.getClientRects().length) return 0;
	let n = e.getBoundingClientRect();
	return n.width || n.height ? t === window ? n.top - e.ownerDocument.documentElement.clientTop : n.top - t.getBoundingClientRect().top : n.top;
}
var O = /#([\S ]+)$/, k = (e) => {
	let { rootClassName: t, prefixCls: o, className: s, style: c, offsetTop: v, affix: y = !0, showInkInFixed: b = !1, children: T, items: E, direction: k = "vertical", bounds: A, targetOffset: j, onClick: M, onChange: ne, getContainer: re, getCurrentAnchor: N, replace: ie, classNames: ae, styles: oe } = e, [P, F] = S.useState([]), [I, se] = S.useState(null), L = S.useRef(I), R = S.useRef(null), z = S.useRef(null), B = S.useRef(!1), V = S.useRef(null), H = S.useRef({}), { direction: ce, getPrefixCls: le, className: ue, style: de, classNames: fe, styles: pe } = p("anchor"), { getTargetContainer: me } = S.useContext(_), U = le("anchor", o), W = m(U), [he, ge] = ee(U, W), G = re ?? me ?? te, K = JSON.stringify(P), _e = (e, t) => {
		F((t) => t.includes(e) ? t : [].concat(n(t), [e])), t !== void 0 && (H.current[e] = t);
	}, ve = (e) => {
		F((t) => t.filter((t) => t !== e)), delete H.current[e];
	}, ye = () => {
		let e = R.current?.querySelector(`.${U}-link-title-active`);
		if (e && z.current) {
			let { style: t } = z.current, n = k === "horizontal";
			t.top = n ? "" : `${e.offsetTop + e.clientHeight / 2}px`, t.height = n ? "" : `${e.clientHeight}px`, t.left = n ? `${e.offsetLeft}px` : "", t.width = n ? `${e.clientWidth}px` : "", n && a(e, {
				scrollMode: "if-needed",
				block: "nearest"
			});
		}
	}, be = (e, t, n = 5, r) => {
		let i = [], a = G();
		return e.forEach((e) => {
			let o = O.exec(e?.toString());
			if (!o) return;
			let s = document.getElementById(o[1]);
			if (s) {
				let o = r?.[e] ?? t, c = D(s, a);
				c <= o + n && i.push({
					link: e,
					top: c
				});
			}
		}), i.length ? i.reduce((e, t) => t.top > e.top ? t : e).link : "";
	}, q = i((e) => {
		if (L.current === e) return;
		let t = h(N) ? N(e) : e;
		se(t), L.current = t, ne?.(e);
	}), J = S.useCallback(() => {
		B.current || q(be(P, g(j) ? j : v || 0, A, H.current));
	}, [
		P,
		j,
		v,
		A
	]), Y = S.useCallback((e, t) => {
		let n = L.current;
		q(e);
		let r = O.exec(e);
		if (!r) return;
		let i = document.getElementById(r[1]);
		if (!i) return;
		if (B.current) {
			if (n === e) return;
			V.current?.();
		}
		let a = G(), o = d(a) + D(i, a);
		o -= t ?? j ?? v ?? 0, B.current = !0, V.current = l(o, {
			getContainer: G,
			callback() {
				B.current = !1;
			}
		});
	}, [j, v]), xe = {
		...e,
		direction: k
	}, [X, Z] = u([fe, ae], [pe, oe], { props: xe }), Se = r(he, ge, W, t, `${U}-wrapper`, {
		[`${U}-wrapper-horizontal`]: k === "horizontal",
		[`${U}-rtl`]: ce === "rtl"
	}, s, ue, X.root), Ce = r(U, { [`${U}-fixed`]: !y && !b }), we = r(`${U}-ink`, X.indicator, { [`${U}-ink-visible`]: I }), Te = {
		maxHeight: v ? `calc(100vh - ${v}px)` : "100vh",
		...Z.root,
		...de,
		...c
	}, Q = (e) => Array.isArray(e) ? e.map((e) => /*#__PURE__*/ S.createElement(w, {
		replace: ie,
		...e,
		key: e.key
	}, k === "vertical" && Q(e.children))) : null, $ = /*#__PURE__*/ S.createElement("div", {
		ref: R,
		className: Se,
		style: Te
	}, /*#__PURE__*/ S.createElement("div", { className: Ce }, /*#__PURE__*/ S.createElement("span", {
		className: we,
		ref: z,
		style: Z.indicator
	}), "items" in e ? Q(E) : T));
	S.useEffect(() => {
		let e = G();
		return J(), e?.addEventListener("scroll", J), () => {
			e?.removeEventListener("scroll", J);
		};
	}, [K]), S.useEffect(() => {
		h(N) && q(N(L.current || ""));
	}, [N]), S.useEffect(() => {
		ye();
	}, [
		k,
		N,
		K,
		I
	]);
	let Ee = S.useMemo(() => ({
		registerLink: _e,
		unregisterLink: ve,
		scrollTo: Y,
		activeLink: I,
		onClick: M,
		direction: k,
		classNames: X,
		styles: Z
	}), [
		I,
		M,
		Y,
		k,
		Z,
		X
	]), De = f(y) ? y : void 0;
	return /*#__PURE__*/ S.createElement(C.Provider, { value: Ee }, y ? /*#__PURE__*/ S.createElement(x, {
		offsetTop: v,
		target: G,
		...De
	}, $) : $);
}, A = /* @__PURE__ */ e({ default: () => j }), j = k;
j.Link = w;
//#endregion
export { A as t };
