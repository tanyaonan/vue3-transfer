globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $t as n, Cn as r, Ht as i, Nt as a, On as o, fn as s, kt as c, ln as l, on as u, pn as d, vn as f, yt as p } from "../shared/core.js";
import { In as m, Jn as h, Qn as g, Sr as _, Zn as v, bn as y, br as b, dr as x, et as S, fn as C, it as w, nr as T, pn as E, rn as D, rt as O, sr as k, tt as A, vn as ee, xn as j } from "../shared/antd-core.js";
//#region node_modules/.pnpm/@rc-component+drawer@1.4.2__bea39f7b0b5107ed333fdcc578f0c4d0/node_modules/@rc-component/drawer/es/context.js
var M = /* @__PURE__ */ t(o()), N = /*#__PURE__*/ M.createContext(null), te = /*#__PURE__*/ M.createContext({});
//#endregion
//#region node_modules/.pnpm/@rc-component+drawer@1.4.2__bea39f7b0b5107ed333fdcc578f0c4d0/node_modules/@rc-component/drawer/es/DrawerPanel.js
function P() {
	return P = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, P.apply(this, arguments);
}
var F = (e) => {
	let { prefixCls: t, className: n, containerRef: r, ...o } = e, { panel: s } = M.useContext(te), c = f(s, r);
	return /*#__PURE__*/ M.createElement("div", P({
		className: a(`${t}-section`, n),
		role: "dialog",
		ref: c
	}, i(e, { aria: !0 }), { "aria-modal": "true" }, o));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+drawer@1.4.2__bea39f7b0b5107ed333fdcc578f0c4d0/node_modules/@rc-component/drawer/es/hooks/useDrag.js
function ne(e) {
	let { prefixCls: t, direction: n, className: r, style: i, maxSize: o, containerRef: c, currentSize: l, onResize: u, onResizeEnd: d, onResizeStart: f } = e, [p, m] = M.useState(!1), [h, g] = M.useState(0), [_, v] = M.useState(0), y = n === "left" || n === "right", b = s((e) => {
		e.preventDefault(), e.stopPropagation(), m(!0), g(y ? e.clientX : e.clientY);
		let t;
		if (typeof l == "number") t = l;
		else if (c?.current) {
			let e = c.current.getBoundingClientRect();
			t = y ? e.width : e.height;
		}
		v(t), f?.(t);
	}), x = s((e) => {
		if (!p) return;
		let t = (y ? e.clientX : e.clientY) - h;
		(n === "right" || n === "bottom") && (t = -t);
		let r = _ + t;
		r < 0 && (r = 0), o && r > o && (r = o), u?.(r);
	}), S = M.useCallback(() => {
		if (p && (m(!1), c?.current)) {
			let e = c.current.getBoundingClientRect(), t = y ? e.width : e.height;
			d?.(t);
		}
	}, [
		p,
		c,
		d,
		y
	]);
	return M.useEffect(() => {
		if (p) return document.addEventListener("mousemove", x), document.addEventListener("mouseup", S), () => {
			document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", S);
		};
	}, [
		p,
		x,
		S
	]), {
		dragElementProps: {
			className: a(`${t}-dragger`, `${t}-dragger-${n}`, {
				[`${t}-dragger-dragging`]: p,
				[`${t}-dragger-horizontal`]: y,
				[`${t}-dragger-vertical`]: !y
			}, r),
			style: i,
			onMouseDown: b
		},
		isDragging: p
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+drawer@1.4.2__bea39f7b0b5107ed333fdcc578f0c4d0/node_modules/@rc-component/drawer/es/util.js
function I(e) {
	if (typeof e == "string") {
		let t = Number(e.replace(/px$/i, ""));
		if (parseFloat(e) === t && r(!1, "Invalid value type of `width` or `height` which should be number type instead."), !Number.isNaN(t)) return t;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+drawer@1.4.2__bea39f7b0b5107ed333fdcc578f0c4d0/node_modules/@rc-component/drawer/es/hooks/useFocusable.js
function L(e, t, r, i, a) {
	let [o] = n(t && (i ?? a !== !1), e);
	return M.useEffect(() => {
		t && r === !0 && e()?.focus({ preventScroll: !0 });
	}, [t]), o;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+drawer@1.4.2__bea39f7b0b5107ed333fdcc578f0c4d0/node_modules/@rc-component/drawer/es/DrawerPopup.js
function R() {
	return R = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, R.apply(this, arguments);
}
var z = /*#__PURE__*/ M.forwardRef((e, t) => {
	let { prefixCls: n, open: r, placement: o, inline: c, push: l, forceRender: u, autoFocus: d, focusTrap: f, classNames: p, rootClassName: m, rootStyle: h, zIndex: g, className: _, id: v, style: y, motion: b, width: x, height: S, size: C, maxSize: w, children: E, mask: D, maskClosable: O, maskMotion: k, maskClassName: A, maskStyle: ee, afterOpenChange: j, onClose: te, onMouseEnter: P, onMouseOver: z, onMouseLeave: re, onClick: ie, onKeyDown: B, onKeyUp: V, styles: H, drawerRender: ae, resizable: U, defaultSize: oe } = e, W = M.useRef(null);
	M.useImperativeHandle(t, () => W.current);
	let se = L(() => W.current, r, d, f, D), [ce, le] = M.useState(!1), G = M.useContext(N), ue;
	ue = typeof l == "boolean" ? l ? {} : { distance: 0 } : l || {};
	let K = ue?.distance ?? G?.pushDistance ?? 180, q = M.useMemo(() => ({
		pushDistance: K,
		push: () => {
			le(!0);
		},
		pull: () => {
			le(!1);
		}
	}), [K]);
	M.useEffect(() => {
		r ? G?.push?.() : G?.pull?.();
	}, [r]), M.useEffect(() => () => {
		G?.pull?.();
	}, []);
	let de = /*#__PURE__*/ M.createElement(T, R({ key: "mask" }, k, { visible: D && r }), ({ className: e, style: t }, i) => /*#__PURE__*/ M.createElement("div", {
		className: a(`${n}-mask`, e, p?.mask, A),
		style: {
			...t,
			...ee,
			...H?.mask
		},
		onClick: O && r ? te : void 0,
		ref: i
	})), fe = typeof b == "function" ? b(o) : b, [pe, me] = M.useState(), J = o === "left" || o === "right", Y = M.useMemo(() => I(C ?? (J ? x : S) ?? pe ?? oe ?? (J ? 378 : void 0)), [
		C,
		x,
		S,
		oe,
		J,
		pe
	]), he = M.useMemo(() => {
		let e = {};
		if (ce && K) switch (o) {
			case "top":
				e.transform = `translateY(${K}px)`;
				break;
			case "bottom":
				e.transform = `translateY(${-K}px)`;
				break;
			case "left":
				e.transform = `translateX(${K}px)`;
				break;
			default:
				e.transform = `translateX(${-K}px)`;
				break;
		}
		return J ? e.width = I(Y) : e.height = I(Y), e;
	}, [
		ce,
		K,
		o,
		J,
		Y
	]), ge = M.useRef(null), _e = !!U, X = typeof U == "object" && U || {}, ve = s((e) => {
		me(e), X.onResize?.(e);
	}), { dragElementProps: ye, isDragging: Z } = ne({
		prefixCls: `${n}-resizable`,
		direction: o,
		className: p?.dragger,
		style: H?.dragger,
		maxSize: w,
		containerRef: ge,
		currentSize: Y,
		onResize: ve,
		onResizeStart: X.onResizeStart,
		onResizeEnd: X.onResizeEnd
	}), be = {
		onMouseEnter: P,
		onMouseOver: z,
		onMouseLeave: re,
		onClick: ie,
		onKeyDown: B,
		onKeyUp: V,
		onFocus: (e) => {
			se(e.target);
		}
	}, xe = /*#__PURE__*/ M.createElement(T, R({ key: "panel" }, fe, {
		visible: r,
		forceRender: u,
		onVisibleChanged: j,
		removeOnLeave: !1,
		leavedClassName: `${n}-content-wrapper-hidden`
	}), ({ className: t, style: r }, o) => {
		let s = /*#__PURE__*/ M.createElement(F, R({
			id: v,
			containerRef: o,
			prefixCls: n,
			className: a(_, p?.section),
			style: {
				...y,
				...H?.section
			}
		}, i(e, { aria: !0 }), be), E);
		return /*#__PURE__*/ M.createElement("div", R({
			ref: ge,
			className: a(`${n}-content-wrapper`, Z && `${n}-content-wrapper-dragging`, p?.wrapper, !Z && t),
			style: {
				...r,
				...he,
				...H?.wrapper
			}
		}, i(e, { data: !0 })), _e && /*#__PURE__*/ M.createElement("div", ye), ae ? ae(s) : s);
	}), Se = { ...h };
	return g && (Se.zIndex = g), /*#__PURE__*/ M.createElement(N.Provider, { value: q }, /*#__PURE__*/ M.createElement("div", {
		className: a(n, `${n}-${o}`, m, {
			[`${n}-open`]: r,
			[`${n}-inline`]: c
		}),
		style: Se,
		tabIndex: -1,
		ref: W
	}, de, xe));
}), re = (e) => {
	let { open: t = !1, prefixCls: n = "rc-drawer", placement: r = "right", autoFocus: i = !0, keyboard: a = !0, width: o, height: s, size: c, maxSize: u, mask: d = !0, maskClosable: f = !0, getContainer: p, forceRender: h, afterOpenChange: g, destroyOnHidden: _, onMouseEnter: v, onMouseOver: y, onMouseLeave: b, onClick: x, onKeyDown: S, onKeyUp: C, onClose: w, resizable: T, defaultSize: E, focusTriggerAfterClose: D, panelRef: O } = e, [k, A] = M.useState(!1), [ee, j] = M.useState(!1);
	l(() => {
		j(!0);
	}, []);
	let N = ee ? t : !1, P = M.useRef(null), F = M.useRef(null);
	l(() => {
		N && (F.current = document.activeElement);
	}, [N]);
	let ne = (e) => {
		A(e), g?.(e), !e && D !== !1 && F.current && !P.current?.contains(F.current) && F.current?.focus({ preventScroll: !0 });
	}, I = M.useMemo(() => ({ panel: O }), [O]);
	if (!h && !k && !N && _) return null;
	let L = {
		onMouseEnter: v,
		onMouseOver: y,
		onMouseLeave: b,
		onClick: x,
		onKeyDown: S,
		onKeyUp: C
	}, R = {
		...e,
		open: N,
		prefixCls: n,
		placement: r,
		autoFocus: i,
		keyboard: a,
		width: o,
		height: s,
		size: c,
		maxSize: u,
		defaultSize: E,
		mask: d,
		maskClosable: f,
		inline: p === !1,
		afterOpenChange: ne,
		ref: P,
		resizable: T,
		...L
	};
	return /*#__PURE__*/ M.createElement(te.Provider, { value: I }, /*#__PURE__*/ M.createElement(m, {
		open: N || h || k,
		autoDestroy: !1,
		getContainer: p,
		autoLock: d && (N || k),
		onEsc: ({ top: e, event: t }) => {
			e && a && (t.stopPropagation(), w?.(t));
		}
	}, /*#__PURE__*/ M.createElement(z, R)));
}, ie = (e) => {
	let { prefixCls: t, ariaId: n, title: r, footer: i, extra: o, closable: s, loading: c, onClose: l, headerStyle: u, bodyStyle: d, footerStyle: f, children: p, classNames: m, styles: v } = e, b = _("drawer"), { classNames: x, styles: S, closable: C } = b, [w, T] = h([x, m], [S, v], { props: {
		...e,
		closable: s ?? C
	} }), E = M.useMemo(() => {
		let e = s ?? C;
		if (e !== !1) return g(e) && e?.placement === "end" ? "end" : "start";
	}, [s, C]), D = M.useCallback((e) => /*#__PURE__*/ M.createElement("button", {
		type: "button",
		onClick: l,
		className: a(`${t}-close`, { [`${t}-close-${E}`]: E === "end" }, w.close),
		style: T.close
	}, e), [
		l,
		t,
		E,
		w.close,
		T.close
	]), [O, k] = j(y(e), y(b), {
		closable: !0,
		closeIconRender: D
	}), ee = () => !r && !O ? null : /*#__PURE__*/ M.createElement("div", {
		style: {
			...T.header,
			...u
		},
		className: a(`${t}-header`, w.header, { [`${t}-header-close-only`]: O && !r && !o })
	}, /*#__PURE__*/ M.createElement("div", { className: `${t}-header-title` }, E === "start" && k, r && /*#__PURE__*/ M.createElement("div", {
		className: a(`${t}-title`, w.title),
		style: T.title,
		id: n
	}, r)), o && /*#__PURE__*/ M.createElement("div", {
		className: a(`${t}-extra`, w.extra),
		style: T.extra
	}, o), E === "end" && k), N = () => i ? /*#__PURE__*/ M.createElement("div", {
		className: a(`${t}-footer`, w.footer),
		style: {
			...T.footer,
			...f
		}
	}, i) : null;
	return /*#__PURE__*/ M.createElement(M.Fragment, null, ee(), /*#__PURE__*/ M.createElement("div", {
		className: a(`${t}-body`, w.body),
		style: {
			...T.body,
			...d
		}
	}, c ? /*#__PURE__*/ M.createElement(A, {
		active: !0,
		title: !1,
		paragraph: { rows: 5 },
		className: `${t}-body-skeleton`
	}) : p), N());
}, B = (e) => {
	let t = "100%";
	return {
		left: `translateX(-${t})`,
		right: `translateX(${t})`,
		top: `translateY(-${t})`,
		bottom: `translateY(${t})`
	}[e];
}, V = (e, t) => ({
	"&-enter, &-appear": {
		...e,
		"&-active": t
	},
	"&-leave": {
		...t,
		"&-active": e
	}
}), H = (e, t) => ({
	"&-enter, &-appear, &-leave": {
		"&-start": { transition: "none" },
		"&-active": { transition: `all ${t}` }
	},
	...V({ opacity: e }, { opacity: 1 })
}), ae = (e, t) => [H(.7, t), V({ transform: B(e) }, { transform: "none" })], U = (e) => {
	let { componentCls: t, motionDurationSlow: n } = e;
	return { [t]: {
		[`${t}-mask-motion`]: H(0, n),
		[`${t}-panel-motion`]: [
			"left",
			"right",
			"top",
			"bottom"
		].reduce((e, t) => ({
			...e,
			[`&-${t}`]: ae(t, n)
		}), {})
	} };
}, oe = (e) => {
	let { borderRadiusSM: t, componentCls: n, zIndexPopup: r, colorBgMask: i, colorBgElevated: a, motionDurationSlow: o, motionDurationMid: s, paddingXS: l, padding: u, paddingLG: d, fontSizeLG: f, lineHeightLG: p, lineWidth: m, lineType: h, colorSplit: g, marginXS: _, colorIcon: v, colorIconHover: y, colorBgTextHover: b, colorBgTextActive: S, colorText: C, fontWeightStrong: w, footerPaddingBlock: T, footerPaddingInline: E, draggerSize: D, calc: O } = e, k = `${n}-content-wrapper`, A = `${n}-resizable-dragger`;
	return { [n]: {
		position: "fixed",
		inset: 0,
		zIndex: r,
		pointerEvents: "none",
		color: C,
		"&-pure": {
			position: "relative",
			background: a,
			display: "flex",
			flexDirection: "column",
			pointerEvents: "auto",
			[`&${n}-left`]: { boxShadow: e.boxShadowDrawerLeft },
			[`&${n}-right`]: { boxShadow: e.boxShadowDrawerRight },
			[`&${n}-top`]: { boxShadow: e.boxShadowDrawerUp },
			[`&${n}-bottom`]: { boxShadow: e.boxShadowDrawerDown }
		},
		"&-inline": { position: "absolute" },
		[`${n}-mask`]: {
			position: "absolute",
			inset: 0,
			zIndex: r,
			background: i,
			pointerEvents: "auto",
			[`&${n}-mask-blur`]: { backdropFilter: "blur(4px)" }
		},
		[k]: {
			position: "absolute",
			zIndex: r,
			maxWidth: "100vw",
			transition: `all ${o}`,
			"&-hidden": { display: "none" }
		},
		[`&-left > ${k}`]: {
			top: 0,
			bottom: 0,
			left: {
				_skip_check_: !0,
				value: 0
			},
			boxShadow: e.boxShadowDrawerLeft
		},
		[`&-right > ${k}`]: {
			top: 0,
			right: {
				_skip_check_: !0,
				value: 0
			},
			bottom: 0,
			boxShadow: e.boxShadowDrawerRight
		},
		[`&-top > ${k}`]: {
			top: 0,
			insetInline: 0,
			boxShadow: e.boxShadowDrawerUp
		},
		[`&-bottom > ${k}`]: {
			bottom: 0,
			insetInline: 0,
			boxShadow: e.boxShadowDrawerDown
		},
		[`${n}-section`]: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			height: "100%",
			overflow: "auto",
			background: a,
			pointerEvents: "auto"
		},
		[`${n}-header`]: {
			display: "flex",
			flex: 0,
			alignItems: "center",
			padding: `${c(u)} ${c(d)}`,
			fontSize: f,
			lineHeight: p,
			borderBottom: `${c(m)} ${h} ${g}`,
			"&-title": {
				display: "flex",
				flex: 1,
				alignItems: "center",
				minWidth: 0,
				minHeight: 0
			}
		},
		[`${n}-extra`]: { flex: "none" },
		[`${n}-close`]: {
			display: "inline-flex",
			width: O(f).add(l).equal(),
			height: O(f).add(l).equal(),
			borderRadius: t,
			justifyContent: "center",
			alignItems: "center",
			color: v,
			fontWeight: w,
			fontSize: f,
			fontStyle: "normal",
			lineHeight: 1,
			textAlign: "center",
			textTransform: "none",
			textDecoration: "none",
			background: "transparent",
			border: 0,
			cursor: "pointer",
			transition: `all ${s}`,
			textRendering: "auto",
			[`&${n}-close-end`]: { marginInlineStart: _ },
			[`&:not(${n}-close-end)`]: { marginInlineEnd: _ },
			"&:hover": {
				color: y,
				backgroundColor: b,
				textDecoration: "none"
			},
			"&:active": { backgroundColor: S },
			...x(e)
		},
		[`${n}-title`]: {
			flex: 1,
			margin: 0,
			fontWeight: e.fontWeightStrong,
			fontSize: f,
			lineHeight: p
		},
		[`${n}-body`]: {
			flex: 1,
			minWidth: 0,
			minHeight: 0,
			padding: d,
			overflow: "auto",
			[`${n}-body-skeleton`]: {
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center"
			}
		},
		[`${n}-footer`]: {
			flexShrink: 0,
			padding: `${c(T)} ${c(E)}`,
			borderTop: `${c(m)} ${h} ${g}`
		},
		[A]: {
			position: "absolute",
			zIndex: 1,
			backgroundColor: "transparent",
			userSelect: "none",
			pointerEvents: "auto",
			"&:hover": {
				backgroundColor: e.colorPrimary,
				opacity: .2
			},
			"&-dragging": {
				backgroundColor: e.colorPrimary,
				opacity: .3
			}
		},
		[`${A}-left`]: {
			top: 0,
			bottom: 0,
			right: {
				_skip_check_: !0,
				value: 0
			},
			width: D,
			cursor: "col-resize"
		},
		[`${A}-right`]: {
			top: 0,
			bottom: 0,
			left: {
				_skip_check_: !0,
				value: 0
			},
			width: D,
			cursor: "col-resize"
		},
		[`${A}-top`]: {
			insetInline: 0,
			bottom: 0,
			height: D,
			cursor: "row-resize"
		},
		[`${A}-bottom`]: {
			insetInline: 0,
			top: 0,
			height: D,
			cursor: "row-resize"
		},
		[`${k}-dragging`]: {
			userSelect: "none",
			transition: "none",
			willChange: "width, height",
			[`${n}-content`]: { pointerEvents: "none" },
			[`${n}-section`]: { pointerEvents: "none" }
		},
		"&-rtl": { direction: "rtl" }
	} };
}, W = k("Drawer", (e) => {
	let t = p(e, {});
	return [oe(t), U(t)];
}, (e) => ({
	zIndexPopup: e.zIndexPopupBase,
	footerPaddingBlock: e.paddingXS,
	footerPaddingInline: e.padding,
	draggerSize: 4
})), se = { distance: 180 }, ce = 378, le = {
	motionAppear: !0,
	motionEnter: !0,
	motionLeave: !0,
	motionDeadline: 500
}, G = (e) => {
	let { rootClassName: t, size: n, defaultSize: r = ce, height: i, width: o, mask: s, push: c = se, open: l, afterOpenChange: f, onClose: p, prefixCls: m, getContainer: g, panelRef: y = null, style: b, className: x, resizable: T, "aria-labelledby": k, focusable: A, maskClosable: j, maskStyle: N, drawerStyle: te, contentWrapperStyle: P, destroyOnClose: F, destroyOnHidden: ne, ...I } = e, { placement: L } = I, R = u(), z = I.title ? R : void 0, { getPopupContainer: B, getPrefixCls: V, direction: H, className: ae, style: U, classNames: oe, styles: G, mask: ue, focusable: K } = _("drawer"), q = V("drawer", m), [de, fe] = W(q), pe = g === void 0 && B ? () => B(document.body) : g, me = M.useMemo(() => v(n) ? n : n === "large" ? 736 : n === "default" ? ce : typeof n == "string" ? /^\d+(\.\d+)?$/.test(n) ? Number(n) : n : !L || L === "left" || L === "right" ? o : i, [
		n,
		L,
		o,
		i
	]), J = {
		motionName: D(q, "mask-motion"),
		...le
	}, Y = (e) => ({
		motionName: D(q, `panel-motion-${e}`),
		...le
	}), he = d(y, S()), [ge, _e] = C("Drawer", I.zIndex), [X, ve, ye] = ee(s, ue, q, j), Z = O({
		...K,
		...A
	}, pe !== !1 && X), { classNames: be, styles: xe, rootStyle: Se } = I, Ce = {
		...e,
		zIndex: ge,
		panelRef: y,
		mask: X,
		maskClosable: ye,
		defaultSize: r,
		push: c,
		focusable: Z
	}, [Q, $] = h([oe, be], [G, xe], { props: Ce }), we = a({
		"no-mask": !X,
		[`${q}-rtl`]: H === "rtl"
	}, t, de, fe, Q.root);
	return /*#__PURE__*/ M.createElement(w, {
		form: !0,
		space: !0
	}, /*#__PURE__*/ M.createElement(E.Provider, { value: _e }, /*#__PURE__*/ M.createElement(re, {
		prefixCls: q,
		onClose: p,
		maskMotion: J,
		motion: Y,
		...I,
		classNames: {
			mask: a(Q.mask, ve.mask),
			section: Q.section,
			wrapper: Q.wrapper,
			dragger: Q.dragger
		},
		styles: {
			mask: {
				...$.mask,
				...N
			},
			section: {
				...$.section,
				...te
			},
			wrapper: {
				...$.wrapper,
				...P
			},
			dragger: $.dragger
		},
		open: l,
		mask: X,
		maskClosable: ye,
		push: c,
		size: me,
		defaultSize: r,
		style: {
			...U,
			...b
		},
		rootStyle: {
			...Se,
			...$.root
		},
		className: a(ae, x),
		rootClassName: we,
		getContainer: pe,
		afterOpenChange: f,
		panelRef: he,
		zIndex: ge,
		...T ? { resizable: T } : {},
		"aria-labelledby": k ?? z,
		destroyOnHidden: ne ?? F,
		focusTriggerAfterClose: Z.focusTriggerAfterClose,
		focusTrap: Z.trap
	}, /*#__PURE__*/ M.createElement(ie, {
		prefixCls: q,
		size: n,
		...I,
		ariaId: z,
		onClose: p
	}))));
};
G._InternalPanelDoNotUseOrYouWillBeFired = (e) => {
	let { prefixCls: t, style: n, className: r, placement: i = "right", ...o } = e, { getPrefixCls: s } = M.useContext(b), c = s("drawer", t), [l, u] = W(c), d = a(c, `${c}-pure`, `${c}-${i}`, l, u, r);
	return /*#__PURE__*/ M.createElement("div", {
		className: d,
		style: n
	}, /*#__PURE__*/ M.createElement(ie, {
		prefixCls: c,
		...o
	}));
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/drawer/index.js
var ue = /* @__PURE__ */ e({ default: () => K }), K = G;
//#endregion
export { ue as t };
