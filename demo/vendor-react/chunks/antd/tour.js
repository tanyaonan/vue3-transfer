globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Ht as n, Jt as r, Mt as i, Nt as a, On as o, _t as s, ct as c, fn as l, kt as u, ln as d, on as f, sn as p, yt as m } from "../shared/core.js";
import { Fn as h, In as g, Jn as _, Mn as v, Rn as y, Sr as b, _r as x, br as S, dr as C, er as w, f as T, fn as E, g as D, k as O, m as k, or as A, p as j, pn as M, pr as N, sr as P, xn as F, xt as I, zn as L } from "../shared/antd-core.js";
import { a as R } from "./avatar.js";
//#region node_modules/.pnpm/@rc-component+tour@2.4.0_re_6755d380d209376a5ac86ce806ff2361/node_modules/@rc-component/tour/es/hooks/useClosable.js
var z = /* @__PURE__ */ t(o());
function B(e) {
	return typeof e == "object" && !!e;
}
function V(e, t, n) {
	if (e === !1 || t === !1 && (!B(e) || !e.closeIcon)) return null;
	let r = typeof t == "boolean" ? void 0 : t;
	return B(e) ? {
		...e,
		closeIcon: e.closeIcon ?? r
	} : n || e || t ? { closeIcon: r } : "empty";
}
function H(e, t, n, r) {
	return z.useMemo(() => {
		let i = V(e, t, !1), a = V(n, r, !0);
		return i === "empty" ? a : i;
	}, [
		n,
		r,
		e,
		t
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tour@2.4.0_re_6755d380d209376a5ac86ce806ff2361/node_modules/@rc-component/tour/es/util.js
function U(e) {
	let t = window.innerWidth || document.documentElement.clientWidth, n = window.innerHeight || document.documentElement.clientHeight, { top: r, right: i, bottom: a, left: o } = e.getBoundingClientRect();
	return r >= 0 && o >= 0 && i <= t && a <= n;
}
function ee(e, t, n) {
	return n ?? t ?? (e === null ? "center" : "bottom");
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tour@2.4.0_re_6755d380d209376a5ac86ce806ff2361/node_modules/@rc-component/tour/es/hooks/useTarget.js
function te(e) {
	return typeof e == "number" && !Number.isNaN(e);
}
function ne(e, t, n, r, i, a) {
	let [o, s] = (0, z.useState)(void 0);
	d(() => {
		s((typeof e == "function" ? e() : e) || null);
	});
	let [c, u] = (0, z.useState)(null), f = l(() => {
		if (o) {
			!i && !U(o) && t && o.scrollIntoView(r);
			let { left: e, top: n, width: s, height: c } = o.getBoundingClientRect(), l = {
				left: e,
				top: n,
				width: s,
				height: c,
				radius: 0
			};
			if (i) {
				let e = a.current?.parentElement?.getBoundingClientRect();
				e && (l.left -= e.left, l.top -= e.top);
			}
			u((e) => JSON.stringify(e) === JSON.stringify(l) ? e : l);
		} else u(null);
	}), p = (e) => (Array.isArray(n?.offset) ? n?.offset[e] : n?.offset) ?? 6;
	return d(() => (f(), window.addEventListener("resize", f), window.addEventListener("scroll", f), () => {
		window.removeEventListener("resize", f), window.removeEventListener("scroll", f);
	}), [
		o,
		t,
		f
	]), [(0, z.useMemo)(() => {
		if (!c) return c;
		let e = p(0), t = p(1), r = te(n?.radius) ? n?.radius : 2;
		return {
			left: c.left - e,
			top: c.top - t,
			width: c.width + e * 2,
			height: c.height + t * 2,
			radius: r
		};
	}, [c, n]), o];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tour@2.4.0_re_6755d380d209376a5ac86ce806ff2361/node_modules/@rc-component/tour/es/Mask.js
function W() {
	return W = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, W.apply(this, arguments);
}
var G = {
	fill: "transparent",
	pointerEvents: "auto"
}, re = (e) => {
	let { prefixCls: t, rootClassName: n, pos: r, showMask: i, style: o = {}, fill: s = "rgba(0,0,0,0.5)", open: c, animated: l, zIndex: u, disabledInteraction: d, styles: p, classNames: m, getPopupContainer: h, onEsc: _ } = e, v = `${t}-mask-${f()}`, y = typeof l == "object" ? l?.placeholder : l, b = typeof navigator < "u" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? {
		width: "100%",
		height: "100%"
	} : {
		width: "100vw",
		height: "100vh"
	}, x = h === !1;
	return /*#__PURE__*/ z.createElement(g, {
		open: c,
		autoLock: !x,
		getContainer: h,
		onEsc: _
	}, /*#__PURE__*/ z.createElement("div", {
		className: a(`${t}-mask`, n, m?.mask),
		style: {
			position: x ? "absolute" : "fixed",
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			zIndex: u,
			pointerEvents: r && !d ? "none" : "auto",
			...o,
			...p?.mask
		}
	}, i ? /*#__PURE__*/ z.createElement("svg", { style: {
		width: "100%",
		height: "100%"
	} }, /*#__PURE__*/ z.createElement("defs", null, /*#__PURE__*/ z.createElement("mask", { id: v }, /*#__PURE__*/ z.createElement("rect", W({
		x: "0",
		y: "0"
	}, b, { fill: "white" })), r && /*#__PURE__*/ z.createElement("rect", {
		x: r.left,
		y: r.top,
		rx: r.radius,
		width: r.width,
		height: r.height,
		fill: "black",
		className: y ? `${t}-placeholder-animated` : ""
	}))), /*#__PURE__*/ z.createElement("rect", {
		x: "0",
		y: "0",
		width: "100%",
		height: "100%",
		fill: s,
		mask: `url(#${v})`
	}), r && /*#__PURE__*/ z.createElement(z.Fragment, null, /*#__PURE__*/ z.createElement("rect", W({}, G, {
		x: "0",
		y: "0",
		width: "100%",
		height: Math.max(r.top, 0)
	})), /*#__PURE__*/ z.createElement("rect", W({}, G, {
		x: "0",
		y: "0",
		width: Math.max(r.left, 0),
		height: "100%"
	})), /*#__PURE__*/ z.createElement("rect", W({}, G, {
		x: "0",
		y: r.top + r.height,
		width: "100%",
		height: `calc(100% - ${r.top + r.height}px)`
	})), /*#__PURE__*/ z.createElement("rect", W({}, G, {
		x: r.left + r.width,
		y: "0",
		width: `calc(100% - ${r.left + r.width}px)`,
		height: "100%"
	})))) : null));
}, ie = [0, 0], ae = {
	left: {
		points: ["cr", "cl"],
		offset: [-8, 0]
	},
	right: {
		points: ["cl", "cr"],
		offset: [8, 0]
	},
	top: {
		points: ["bc", "tc"],
		offset: [0, -8]
	},
	bottom: {
		points: ["tc", "bc"],
		offset: [0, 8]
	},
	topLeft: {
		points: ["bl", "tl"],
		offset: [0, -8]
	},
	leftTop: {
		points: ["tr", "tl"],
		offset: [-8, 0]
	},
	topRight: {
		points: ["br", "tr"],
		offset: [0, -8]
	},
	rightTop: {
		points: ["tl", "tr"],
		offset: [8, 0]
	},
	bottomRight: {
		points: ["tr", "br"],
		offset: [0, 8]
	},
	rightBottom: {
		points: ["bl", "br"],
		offset: [8, 0]
	},
	bottomLeft: {
		points: ["tl", "bl"],
		offset: [0, 8]
	},
	leftBottom: {
		points: ["br", "bl"],
		offset: [-8, 0]
	}
};
function oe(e = !1) {
	let t = {};
	return Object.keys(ae).forEach((n) => {
		t[n] = {
			...ae[n],
			autoArrow: e,
			targetOffset: ie
		};
	}), t;
}
oe();
//#endregion
//#region node_modules/.pnpm/@rc-component+tour@2.4.0_re_6755d380d209376a5ac86ce806ff2361/node_modules/@rc-component/tour/es/TourStep/DefaultPanel.js
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(this, arguments);
}
function q(e) {
	let { prefixCls: t, current: r, total: i, title: o, description: s, onClose: c, onPrev: l, onNext: u, onFinish: d, className: f, closable: p, classNames: m, styles: h } = e, g = n(p || {}, !0), _ = p?.closeIcon ?? /*#__PURE__*/ z.createElement("span", { className: `${t}-close-x` }, "×"), v = !!p;
	return /*#__PURE__*/ z.createElement("div", { className: a(`${t}-panel`, f) }, /*#__PURE__*/ z.createElement("div", {
		className: a(`${t}-section`, m?.section),
		style: h?.section
	}, v && /*#__PURE__*/ z.createElement("button", K({
		type: "button",
		onClick: c,
		"aria-label": "Close"
	}, g, {
		className: a(`${t}-close`, m?.close),
		style: h?.close
	}), _), /*#__PURE__*/ z.createElement("div", {
		className: a(`${t}-header`, m?.header),
		style: h?.header
	}, /*#__PURE__*/ z.createElement("div", {
		className: a(`${t}-title`, m?.title),
		style: h?.title
	}, o)), /*#__PURE__*/ z.createElement("div", {
		className: a(`${t}-description`, m?.description),
		style: h?.description
	}, s), /*#__PURE__*/ z.createElement("div", {
		className: a(`${t}-footer`, m?.footer),
		style: h?.footer
	}, /*#__PURE__*/ z.createElement("div", { className: `${t}-sliders` }, i > 1 ? [...Array.from({ length: i }).keys()].map((e, t) => /*#__PURE__*/ z.createElement("span", {
		key: e,
		className: t === r ? "active" : ""
	})) : null), /*#__PURE__*/ z.createElement("div", {
		className: a(`${t}-actions`, m?.actions),
		style: h?.actions
	}, r === 0 ? null : /*#__PURE__*/ z.createElement("button", {
		className: `${t}-prev-btn`,
		onClick: l
	}, "Prev"), r === i - 1 ? /*#__PURE__*/ z.createElement("button", {
		className: `${t}-finish-btn`,
		onClick: d
	}, "Finish") : /*#__PURE__*/ z.createElement("button", {
		className: `${t}-next-btn`,
		onClick: u
	}, "Next")))));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tour@2.4.0_re_6755d380d209376a5ac86ce806ff2361/node_modules/@rc-component/tour/es/TourStep/index.js
var se = (e) => {
	let { current: t, renderPanel: n } = e;
	return /*#__PURE__*/ z.createElement(z.Fragment, null, typeof n == "function" ? n(e, t) : /*#__PURE__*/ z.createElement(q, e));
}, ce = /*#__PURE__*/ z.forwardRef((e, t) => {
	let { open: n, autoLock: r, getContainer: i, domRef: a, className: o, style: s, fallbackDOM: c } = e;
	return z.useImperativeHandle(t, () => a.current || c()), /*#__PURE__*/ z.createElement(g, {
		open: n,
		autoLock: r,
		getContainer: i
	}, /*#__PURE__*/ z.createElement("div", {
		ref: a,
		className: o,
		style: s
	}));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+tour@2.4.0_re_6755d380d209376a5ac86ce806ff2361/node_modules/@rc-component/tour/es/Tour.js
function J() {
	return J = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, J.apply(this, arguments);
}
var le = {
	left: "50%",
	top: "50%",
	width: 1,
	height: 1
}, ue = {
	block: "center",
	inline: "center"
}, de = (e) => {
	let { prefixCls: t = "rc-tour", steps: n = [], defaultCurrent: i, current: o, keyboard: s = !0, onChange: c, onClose: u, onFinish: f, open: m, defaultOpen: g, mask: _ = !0, arrow: v = !0, rootClassName: y, placement: b, renderPanel: x, gap: S, animated: C, scrollIntoViewOptions: w = ue, zIndex: T = 1001, closeIcon: E, closable: D, builtinPlacements: O, disabledInteraction: k, styles: A, classNames: j, className: M, style: N, getPopupContainer: P, ...F } = e, I = z.useRef(), [L, R] = p(i || 0, o), [B, V] = p(g, m), U = L < 0 || L >= n.length ? !1 : B ?? !0, [te, W] = z.useState(U), G = z.useRef(U);
	d(() => {
		U && (G.current || R(0), W(!0)), G.current = U;
	}, [U, R]);
	let { target: ie, placement: ae, style: K, arrow: q, className: de, mask: fe, scrollIntoViewOptions: pe = ue, closeIcon: me, closable: he } = n[L] || {}, ge = H(he, me, D, E), Y = U && (fe ?? _), _e = pe ?? w, ve = z.useRef(null), ye = P === !1, [be, X] = ne(ie, m, S, _e, ye, ve), xe = ee(X, b, ae), Z = X ? q === void 0 ? v : q : !1, Q = typeof Z == "object" ? Z.pointAtCenter : !1;
	d(() => {
		I.current?.forceAlign();
	}, [Q, L]);
	let $ = (e) => {
		R(e), c?.(e);
	}, Se = (0, z.useMemo)(() => O ? typeof O == "function" ? O({ arrowPointAtCenter: Q }) : O : oe(Q), [O, Q]), Ce = () => {
		V(!1), u?.(L);
	}, we = l(({ event: e }) => {
		s && ge !== null && (e.preventDefault(), Ce());
	}), Te = l((e) => {
		if (!r.isEditableTarget(e)) {
			if (s && e.key === "ArrowLeft") {
				L > 0 && (e.preventDefault(), $(L - 1));
				return;
			}
			if (s && e.key === "ArrowRight") {
				L < n.length - 1 && (e.preventDefault(), $(L + 1));
				return;
			}
		}
	});
	if (d(() => {
		if (U) return window.addEventListener("keydown", Te), () => {
			window.removeEventListener("keydown", Te);
		};
	}, [U, Te]), X === void 0 || !te) return null;
	let Ee = () => /*#__PURE__*/ z.createElement(se, J({
		styles: A,
		classNames: j,
		arrow: Z,
		key: "content",
		prefixCls: t,
		total: n.length,
		renderPanel: x,
		onPrev: () => {
			$(L - 1);
		},
		onNext: () => {
			$(L + 1);
		},
		onClose: Ce,
		current: L,
		onFinish: () => {
			Ce(), f?.();
		}
	}, n[L], { closable: ge })), De = typeof Y == "boolean" ? Y : !!Y, Oe = typeof Y == "boolean" ? void 0 : Y;
	return /*#__PURE__*/ z.createElement(z.Fragment, null, /*#__PURE__*/ z.createElement(re, {
		getPopupContainer: P,
		styles: A,
		classNames: j,
		zIndex: T,
		prefixCls: t,
		pos: be,
		showMask: De,
		style: Oe?.style,
		fill: Oe?.color,
		open: U,
		animated: C,
		rootClassName: y,
		disabledInteraction: k,
		onEsc: we
	}), /*#__PURE__*/ z.createElement(h, J({}, F, {
		getPopupContainer: P,
		builtinPlacements: Se,
		ref: I,
		popupStyle: K,
		popupPlacement: xe,
		popupVisible: U,
		popupClassName: a(y, de),
		prefixCls: t,
		popup: Ee,
		forceRender: !1,
		autoDestroy: !0,
		zIndex: T,
		arrow: !!Z
	}), /*#__PURE__*/ z.createElement(ce, {
		open: U,
		autoLock: !ye,
		getContainer: P,
		domRef: ve,
		fallbackDOM: () => X || document.body,
		className: a(M, y, `${t}-target-placeholder`),
		style: {
			...be || le,
			position: ye ? "absolute" : "fixed",
			pointerEvents: "none",
			...N
		}
	})));
}, fe = (e) => {
	let { stepProps: t, current: r, type: o, indicatorsRender: s, actionsRender: l } = e, { prefixCls: u, total: d = 1, title: f, onClose: p, onPrev: m, onNext: h, onFinish: g, cover: _, description: v, nextButtonProps: b, prevButtonProps: x, type: S, closable: C, classNames: T = {}, styles: E = {} } = t, D = S ?? o, O = n(C ?? {}, !0), [k] = y("global", L.global), [A] = y("Tour", L.Tour), j = /*#__PURE__*/ z.createElement("button", {
		type: "button",
		onClick: p,
		className: a(`${u}-close`, T.close),
		style: E.close,
		"aria-label": k?.close,
		...O
	}, C?.closeIcon || /*#__PURE__*/ z.createElement(c, { className: `${u}-close-icon` })), M = r === d - 1, N = () => {
		m?.(), x?.onClick?.();
	}, P = () => {
		M ? g?.() : h?.(), b?.onClick?.();
	}, F = w(f) ? /*#__PURE__*/ z.createElement("div", {
		className: a(`${u}-header`, T.header),
		style: E.header
	}, /*#__PURE__*/ z.createElement("div", {
		className: a(`${u}-title`, T.title),
		style: E.title
	}, f)) : null, R = w(v) ? /*#__PURE__*/ z.createElement("div", {
		className: a(`${u}-description`, T.description),
		style: E.description
	}, v) : null, B = w(_) ? /*#__PURE__*/ z.createElement("div", {
		className: a(`${u}-cover`, T.cover),
		style: E.cover
	}, _) : null, V;
	V = s ? s(r, d) : i(Array.from({ length: d }).keys()).map((e, t) => /*#__PURE__*/ z.createElement("span", {
		key: e,
		className: a(t === r && `${u}-indicator-active`, `${u}-indicator`, T.indicator),
		style: E.indicator
	}));
	let H = D === "primary" ? "default" : "primary", U = {
		type: "default",
		ghost: D === "primary"
	}, ee = /*#__PURE__*/ z.createElement(z.Fragment, null, r === 0 ? null : /*#__PURE__*/ z.createElement(I, {
		size: "small",
		...U,
		...x,
		onClick: N,
		className: a(`${u}-prev-btn`, x?.className)
	}, x?.children ?? A?.Previous), /*#__PURE__*/ z.createElement(I, {
		size: "small",
		type: H,
		...b,
		onClick: P,
		className: a(`${u}-next-btn`, b?.className)
	}, b?.children ?? (M ? A?.Finish : A?.Next)));
	return /*#__PURE__*/ z.createElement("div", { className: `${u}-panel` }, /*#__PURE__*/ z.createElement("div", {
		className: a(`${u}-section`, T.section),
		style: E.section
	}, C && j, B, F, R, /*#__PURE__*/ z.createElement("div", {
		className: a(`${u}-footer`, T.footer),
		style: E.footer
	}, d > 1 && /*#__PURE__*/ z.createElement("div", {
		className: a(`${u}-indicators`, T.indicators),
		style: E.indicators
	}, V), /*#__PURE__*/ z.createElement("div", {
		className: a(`${u}-actions`, T.actions),
		style: E.actions
	}, l ? l(ee, {
		current: r,
		total: d
	}) : ee))));
}, pe = (e) => {
	let { componentCls: t, padding: n, paddingXS: r, borderRadius: i, borderRadiusXS: a, colorPrimary: o, colorFill: s, indicatorHeight: c, indicatorWidth: l, boxShadowTertiary: d, zIndexPopup: f, colorBgElevated: p, fontWeightStrong: m, marginXS: h, colorTextLightSolid: g, tourBorderRadius: _, colorWhite: v, primaryNextBtnHoverBg: y, closeBtnSize: b, motionDurationSlow: x, antCls: S, primaryPrevBtnBg: w, motionDurationMid: T } = e, [E, D] = A(S, "tooltip");
	return [{
		[t]: {
			...N(e),
			position: "absolute",
			zIndex: f,
			maxWidth: "fit-content",
			visibility: "visible",
			width: 520,
			[E("arrow-background-color")]: p,
			"&-pure": {
				maxWidth: "100%",
				position: "relative"
			},
			[`&${t}-hidden`]: { display: "none" },
			[`${t}-panel`]: { position: "relative" },
			[`${t}-section`]: {
				textAlign: "start",
				textDecoration: "none",
				borderRadius: _,
				boxShadow: d,
				position: "relative",
				backgroundColor: p,
				border: "none",
				backgroundClip: "padding-box",
				[`${t}-close`]: {
					position: "absolute",
					top: n,
					insetInlineEnd: n,
					color: e.colorIcon,
					background: "none",
					border: "none",
					width: b,
					height: b,
					borderRadius: e.borderRadiusSM,
					transition: ["color", "background-color"].map((e) => `${e} ${T}`).join(", "),
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					"&:hover": {
						color: e.colorIconHover,
						backgroundColor: e.colorBgTextHover
					},
					"&:active": { backgroundColor: e.colorBgTextActive },
					...C(e)
				},
				[`${t}-cover`]: {
					textAlign: "center",
					padding: `${u(e.calc(n).add(b).add(r).equal())} ${u(n)} 0`,
					img: { width: "100%" }
				},
				[`${t}-header`]: {
					padding: `${u(n)} ${u(n)} ${u(r)}`,
					width: `calc(100% - ${u(b)})`,
					wordBreak: "break-word",
					[`${t}-title`]: { fontWeight: m }
				},
				[`${t}-description`]: {
					padding: `0 ${u(n)}`,
					wordWrap: "break-word"
				},
				[`${t}-footer`]: {
					padding: `${u(r)} ${u(n)} ${u(n)}`,
					textAlign: "end",
					borderRadius: `0 0 ${u(a)} ${u(a)}`,
					display: "flex",
					[`${t}-indicators`]: {
						display: "inline-block",
						[`${t}-indicator`]: {
							width: l,
							height: c,
							display: "inline-block",
							borderRadius: "50%",
							background: s,
							"&:not(:last-child)": { marginInlineEnd: c },
							"&-active": { background: o }
						}
					},
					[`${t}-actions`]: {
						marginInlineStart: "auto",
						[`${S}-btn`]: { marginInlineStart: h }
					}
				}
			},
			[`${t}-primary, &${t}-primary`]: {
				[E("arrow-background-color")]: o,
				[`${t}-section`]: {
					color: g,
					textAlign: "start",
					textDecoration: "none",
					backgroundColor: o,
					borderRadius: i,
					boxShadow: d,
					[`${t}-close`]: { color: g },
					[`${t}-indicators`]: { [`${t}-indicator`]: {
						background: w,
						"&-active": { background: g }
					} },
					[`${t}-prev-btn`]: {
						color: g,
						borderColor: w,
						backgroundColor: o,
						"&:hover": {
							color: g,
							backgroundColor: w,
							borderColor: "transparent"
						}
					},
					[`${t}-next-btn`]: {
						color: o,
						borderColor: "transparent",
						background: v,
						"&:hover": { background: y }
					}
				}
			}
		},
		[`${t}-mask`]: { [`${t}-placeholder-animated`]: { transition: `all ${x}` } },
		[[
			"&-placement-left",
			"&-placement-leftTop",
			"&-placement-leftBottom",
			"&-placement-right",
			"&-placement-rightTop",
			"&-placement-rightBottom"
		].join(",")]: { [`${t}-section`]: { borderRadius: e.min(_, 8) } }
	}, k(e, D("arrow-background-color"))];
}, me = P("Tour", (e) => {
	let { borderRadiusLG: t } = e;
	return pe(m(e, {
		indicatorWidth: 6,
		indicatorHeight: 6,
		tourBorderRadius: t
	}));
}, (e) => ({
	zIndexPopup: e.zIndexPopupBase + 70,
	closeBtnSize: e.fontSize * e.lineHeight,
	primaryPrevBtnBg: new s(e.colorTextLightSolid).setA(.15).toRgbString(),
	primaryNextBtnHoverBg: new s(e.colorBgTextHover).onBackground(e.colorWhite).toRgbString(),
	...j({
		contentRadius: e.borderRadiusLG,
		limitVerticalRadius: !0
	}),
	...D(e)
})), he = O((e) => {
	let { prefixCls: t, current: n = 0, total: r = 6, className: i, style: o, type: s, closable: c, closeIcon: l, ...u } = e, { getPrefixCls: d } = z.useContext(S), f = d("tour", t), [p, m] = me(f), [h, g] = F({
		closable: c,
		closeIcon: l
	}, null, {
		closable: !0,
		closeIconRender: (e) => /*#__PURE__*/ z.isValidElement(e) ? v(e, { className: a(e.props?.className, `${f}-close-icon`) }) : e
	});
	return /*#__PURE__*/ z.createElement(R, {
		prefixCls: f,
		hashId: p,
		className: a(i, `${f}-pure`, s && `${f}-${s}`, m),
		style: o
	}, /*#__PURE__*/ z.createElement(fe, {
		stepProps: {
			...u,
			prefixCls: f,
			total: r,
			closable: h ? { closeIcon: g } : void 0
		},
		current: n,
		type: s
	}));
}), ge = /* @__PURE__ */ e({ default: () => Y }), Y = (e) => {
	let { prefixCls: t, type: n, rootClassName: r, indicatorsRender: i, actionsRender: o, steps: s, closeIcon: c, keyboard: l = !0, classNames: u, styles: d, className: f, style: p, ...m } = e, { getPrefixCls: h, direction: g, closeIcon: v, className: y, style: S, classNames: C, styles: w } = b("tour"), D = h("tour", t), [O, k] = me(D), [, A] = x(), j = z.useMemo(() => s?.map((e) => ({
		...e,
		className: a(e.className, { [`${D}-primary`]: (e.type ?? n) === "primary" })
	})), [
		D,
		s,
		n
	]), N = {
		...e,
		steps: j
	}, [P, F] = _([C, u], [w, d], { props: N }), I = (e) => T({
		arrowPointAtCenter: e?.arrowPointAtCenter ?? !0,
		autoAdjustOverflow: !0,
		offset: A.marginXXS,
		arrowWidth: A.sizePopupArrow,
		borderRadius: A.borderRadius
	}), L = a({ [`${D}-rtl`]: g === "rtl" }, O, k, r, y, P.root, f), R = {
		...F,
		mask: {
			...F.root,
			...F.mask,
			...S,
			...p
		}
	}, B = (e, t) => /*#__PURE__*/ z.createElement(fe, {
		styles: R,
		classNames: P,
		type: n,
		stepProps: e,
		current: t,
		indicatorsRender: i,
		actionsRender: o
	}), [V, H] = E("Tour", m.zIndex);
	return /*#__PURE__*/ z.createElement(M.Provider, { value: H }, /*#__PURE__*/ z.createElement(de, {
		...m,
		styles: R,
		classNames: P,
		closeIcon: c ?? v,
		keyboard: l,
		zIndex: V,
		rootClassName: L,
		prefixCls: D,
		animated: !0,
		renderPanel: B,
		builtinPlacements: I,
		steps: j
	}));
};
Y._InternalPanelDoNotUseOrYouWillBeFired = he;
//#endregion
export { ge as t };
