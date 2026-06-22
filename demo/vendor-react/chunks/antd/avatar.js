globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, kn as r, kt as i, ln as a, on as o, pn as s, sn as c, wn as l, yt as u } from "../shared/core.js";
import { Et as d, Fn as f, Ft as p, Jn as m, Mn as h, Nn as g, Qn as _, Sr as v, Wn as y, Wt as b, Yn as x, Zn as S, _ as C, _r as w, br as T, en as E, er as D, f as O, fn as ee, g as k, ir as A, it as j, jn as te, m as M, or as N, p as P, pn as ne, pr as F, qn as I, rn as L, sr as R, u as re, wr as ie, x as z, y as B, yn as V, yr as ae } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/grid/hooks/useBreakpoint.js
var H = /* @__PURE__ */ t(r());
function oe(e = !0, t = {}) {
	let n = (0, H.useRef)(t), [, r] = V(), i = z();
	return a(() => {
		let t = i.subscribe((t) => {
			n.current = t, e && r();
		});
		return () => i.unsubscribe(t);
	}, []), n.current;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/avatar/AvatarContext.js
var se = /*#__PURE__*/ H.createContext({}), ce = (e) => {
	let { antCls: t, componentCls: n, iconCls: r, avatarBg: a, avatarColor: o, containerSize: s, containerSizeLG: c, containerSizeSM: l, textFontSize: u, textFontSizeLG: d, textFontSizeSM: f, iconFontSize: p, iconFontSizeLG: m, iconFontSizeSM: h, borderRadius: g, borderRadiusLG: _, borderRadiusSM: v, lineWidth: y, lineType: b } = e, x = (e, t, i, a) => ({
		width: e,
		height: e,
		borderRadius: "50%",
		fontSize: t,
		[`&${n}-square`]: { borderRadius: a },
		[`&${n}-icon`]: {
			fontSize: i,
			[`> ${r}`]: { margin: 0 }
		}
	});
	return { [n]: {
		...F(e),
		position: "relative",
		display: "inline-flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		color: o,
		whiteSpace: "nowrap",
		textAlign: "center",
		verticalAlign: "middle",
		background: a,
		border: `${i(y)} ${b} transparent`,
		"&-image": { background: "transparent" },
		[`${t}-image-img`]: { display: "block" },
		...x(s, u, p, g),
		"&-lg": { ...x(c, d, m, _) },
		"&-sm": { ...x(l, f, h, v) },
		"> img": {
			display: "block",
			width: "100%",
			height: "100%",
			objectFit: "cover"
		}
	} };
}, le = (e) => {
	let { componentCls: t, groupBorderColor: n, groupOverlapping: r, groupSpace: i } = e;
	return {
		[`${t}-group`]: {
			display: "inline-flex",
			[t]: { borderColor: n },
			"> *:not(:first-child)": { marginInlineStart: r }
		},
		[`${t}-group-popover`]: { [`${t} + ${t}`]: { marginInlineStart: i } }
	};
}, ue = R("Avatar", (e) => {
	let { colorTextLightSolid: t, colorTextPlaceholder: n } = e, r = u(e, {
		avatarBg: n,
		avatarColor: t
	});
	return [ce(r), le(r)];
}, (e) => {
	let { controlHeight: t, controlHeightLG: n, controlHeightSM: r, fontSize: i, fontSizeLG: a, fontSizeXL: o, fontSizeHeading3: s, marginXS: c, marginXXS: l, colorBorderBg: u } = e;
	return {
		containerSize: t,
		containerSizeLG: n,
		containerSizeSM: r,
		textFontSize: i,
		textFontSizeLG: i,
		textFontSizeSM: i,
		iconFontSize: Math.round((a + o) / 2),
		iconFontSizeLG: s,
		iconFontSizeSM: i,
		groupSpace: l,
		groupOverlapping: -c,
		groupBorderColor: u
	};
}), U = /*#__PURE__*/ H.forwardRef((e, t) => {
	let { prefixCls: r, shape: i, size: a, src: o, srcSet: c, icon: l, className: u, rootClassName: d, style: f, alt: p, draggable: m, children: h, crossOrigin: g, gap: b = 4, onError: x, ...C } = e, [w, T] = H.useState(1), [D, O] = H.useState(!1), [ee, k] = H.useState(!0), A = H.useRef(null), j = H.useRef(null), te = s(t, A), { getPrefixCls: M, className: N, style: P } = v("avatar"), ne = H.useContext(se), F = () => {
		if (!j.current || !A.current) return;
		let e = j.current.offsetWidth, t = A.current.offsetWidth;
		e !== 0 && t !== 0 && b * 2 < t && T(t - b * 2 < e ? (t - b * 2) / e : 1);
	};
	H.useEffect(() => {
		O(!0);
	}, []), H.useEffect(() => {
		k(!0), T(1);
	}, [o]), H.useEffect(F, [b]);
	let I = () => {
		x?.() !== !1 && k(!1);
	}, L = E((e) => a ?? ne?.size ?? e ?? "medium"), R = oe(Object.keys(_(L) && L || {}).some((e) => B.includes(e))), re = H.useMemo(() => {
		if (!_(L)) return {};
		let e = L[B.find((e) => R[e])];
		return e ? {
			width: e,
			height: e,
			fontSize: e && (l || h) ? e / 2 : 18
		} : {};
	}, [
		R,
		L,
		l,
		h
	]), z = M("avatar", r), V = y(z), [ae, ce] = ue(z, V), le = n({
		[`${z}-lg`]: L === "large",
		[`${z}-sm`]: L === "small"
	}), U = /*#__PURE__*/ H.isValidElement(o), W = n(z, le, N, `${z}-${i || ne?.shape || "circle"}`, {
		[`${z}-image`]: U || o && ee,
		[`${z}-icon`]: !!l
	}, ce, V, u, d, ae), G = S(L) ? {
		width: L,
		height: L,
		fontSize: l ? L / 2 : 18
	} : {}, K;
	if (typeof o == "string" && ee) K = /*#__PURE__*/ H.createElement("img", {
		src: o,
		draggable: m,
		srcSet: c,
		onError: I,
		alt: p,
		crossOrigin: g
	});
	else if (U) K = o;
	else if (l) K = l;
	else if (D || w !== 1) {
		let e = `scale(${w})`, t = {
			msTransform: e,
			WebkitTransform: e,
			transform: e
		};
		K = /*#__PURE__*/ H.createElement(ie, { onResize: F }, /*#__PURE__*/ H.createElement("span", {
			className: `${z}-string`,
			ref: j,
			style: t
		}, h));
	} else K = /*#__PURE__*/ H.createElement("span", {
		className: `${z}-string`,
		style: { opacity: 0 },
		ref: j
	}, h);
	return /*#__PURE__*/ H.createElement("span", {
		...C,
		style: {
			...G,
			...re,
			...P,
			...f
		},
		className: W,
		ref: te
	}, K);
}), W = (e) => {
	let { children: t, prefixCls: r, id: i, classNames: a, styles: o, className: s, style: c } = e;
	return /*#__PURE__*/ H.createElement("div", {
		id: i,
		className: n(`${r}-container`, a?.container, s),
		style: {
			...o?.container,
			...c
		},
		role: "tooltip"
	}, typeof t == "function" ? t() : t);
}, G = {
	shiftX: 64,
	adjustY: 1
}, K = {
	adjustX: 1,
	shiftY: !0
}, q = [0, 0], de = {
	left: {
		points: ["cr", "cl"],
		overflow: K,
		offset: [-4, 0],
		targetOffset: q
	},
	right: {
		points: ["cl", "cr"],
		overflow: K,
		offset: [4, 0],
		targetOffset: q
	},
	top: {
		points: ["bc", "tc"],
		overflow: G,
		offset: [0, -4],
		targetOffset: q
	},
	bottom: {
		points: ["tc", "bc"],
		overflow: G,
		offset: [0, 4],
		targetOffset: q
	},
	topLeft: {
		points: ["bl", "tl"],
		overflow: G,
		offset: [0, -4],
		targetOffset: q
	},
	leftTop: {
		points: ["tr", "tl"],
		overflow: K,
		offset: [-4, 0],
		targetOffset: q
	},
	topRight: {
		points: ["br", "tr"],
		overflow: G,
		offset: [0, -4],
		targetOffset: q
	},
	rightTop: {
		points: ["tl", "tr"],
		overflow: K,
		offset: [4, 0],
		targetOffset: q
	},
	bottomRight: {
		points: ["tr", "br"],
		overflow: G,
		offset: [0, 4],
		targetOffset: q
	},
	rightBottom: {
		points: ["bl", "br"],
		overflow: K,
		offset: [4, 0],
		targetOffset: q
	},
	bottomLeft: {
		points: ["tl", "bl"],
		overflow: G,
		offset: [0, 4],
		targetOffset: q
	},
	leftBottom: {
		points: ["br", "bl"],
		overflow: K,
		offset: [-4, 0],
		targetOffset: q
	}
};
//#endregion
//#region node_modules/.pnpm/@rc-component+tooltip@1.4.0_ae4a888d1621c4506800a097a75a46f1/node_modules/@rc-component/tooltip/es/Tooltip.js
function J() {
	return J = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, J.apply(this, arguments);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tooltip@1.4.0_ae4a888d1621c4506800a097a75a46f1/node_modules/@rc-component/tooltip/es/index.js
var fe = /* @__PURE__ */ H.forwardRef((e, t) => {
	let { trigger: r = ["hover"], mouseEnterDelay: i = 0, mouseLeaveDelay: a = .1, prefixCls: s = "rc-tooltip", children: c, onVisibleChange: l, afterVisibleChange: u, motion: d, placement: p = "right", align: m = {}, destroyOnHidden: h = !1, defaultVisible: g, getTooltipContainer: _, arrowContent: v, overlay: y, id: b, showArrow: x = !0, classNames: S, styles: C, ...w } = e, T = o(b), E = (0, H.useRef)(null);
	(0, H.useImperativeHandle)(t, () => E.current);
	let D = { ...w };
	"visible" in e && (D.popupVisible = e.visible);
	let O = H.useMemo(() => {
		if (!x) return !1;
		let e = x === !0 ? {} : x;
		return {
			...e,
			className: n(e.className, S?.arrow),
			style: {
				...e.style,
				...C?.arrow
			},
			content: e.content ?? v
		};
	}, [
		x,
		S?.arrow,
		C?.arrow,
		v
	]);
	return /*#__PURE__*/ H.createElement(f, J({
		popupClassName: S?.root,
		prefixCls: s,
		popup: /*#__PURE__*/ H.createElement(W, {
			key: "content",
			prefixCls: s,
			id: T,
			classNames: S,
			styles: C
		}, y),
		action: r,
		builtinPlacements: de,
		popupPlacement: p,
		ref: E,
		popupAlign: m,
		getPopupContainer: _,
		onOpenChange: l,
		afterOpenChange: u,
		popupMotion: d,
		defaultPopupVisible: g,
		autoDestroy: h,
		mouseLeaveDelay: a,
		popupStyle: C?.root,
		mouseEnterDelay: i,
		arrow: O,
		uniqueContainerClassName: S?.uniqueContainer,
		uniqueContainerStyle: C?.uniqueContainer
	}, D), ({ open: e }) => {
		let t = H.Children.only(c), n = { "aria-describedby": y && e ? T : void 0 };
		return /*#__PURE__*/ H.cloneElement(t, n);
	});
}), pe = /*#__PURE__*/ H.createContext(!1), me = (e, t) => {
	let n = (e) => typeof e == "boolean" ? { show: e } : e || {};
	return H.useMemo(() => {
		let r = n(e), i = n(t);
		return {
			...i,
			...r,
			show: r.show ?? i.show ?? !0
		};
	}, [e, t]);
}, he = "50%", ge = (e) => {
	let { calc: t, componentCls: n, tooltipMaxWidth: r, tooltipColor: a, tooltipBg: o, tooltipBorderRadius: s, zIndexPopup: c, controlHeight: l, dropShadowPopover: u, paddingSM: d, paddingXS: f, arrowOffsetHorizontal: p, sizePopupArrow: m, antCls: h } = e, [g, _] = N(h, "tooltip"), v = t(s).add(m).add(p).equal(), y = {
		minWidth: t(s).mul(2).add(m).equal(),
		minHeight: l,
		padding: `${i(e.calc(d).div(2).equal())} ${i(f)}`,
		color: _("overlay-color", a),
		textAlign: "start",
		textDecoration: "none",
		wordWrap: "break-word",
		backgroundColor: o,
		borderRadius: s,
		boxSizing: "border-box"
	}, x = {
		[g("valid-offset-x")]: _("arrow-offset-x", "var(--arrow-x)"),
		transformOrigin: [_("valid-offset-x", he), `var(--arrow-y, ${he})`].join(" ")
	};
	return [
		{ [n]: {
			...F(e),
			position: "absolute",
			zIndex: c,
			display: "block",
			width: "max-content",
			maxWidth: r,
			visibility: "visible",
			filter: u,
			...x,
			"&-hidden": { display: "none" },
			[g("arrow-background-color")]: o,
			[`${n}-container`]: [y, b(e, !0)],
			[`&:has(~ ${n}-unique-container)`]: { [`${n}-container`]: {
				border: "none",
				background: "transparent"
			} },
			[[
				"&-placement-topLeft",
				"&-placement-topRight",
				"&-placement-bottomLeft",
				"&-placement-bottomRight"
			].join(",")]: { minWidth: v },
			[[
				"&-placement-left",
				"&-placement-leftTop",
				"&-placement-leftBottom",
				"&-placement-right",
				"&-placement-rightTop",
				"&-placement-rightBottom"
			].join(",")]: { [`${n}-inner`]: { borderRadius: e.min(s, 8) } },
			[`${n}-content`]: { position: "relative" },
			...A(e, (e, { darkColor: t }) => ({ [`&${n}-${e}`]: {
				[`${n}-container`]: { backgroundColor: t },
				[`${n}-arrow`]: { [g("arrow-background-color")]: t }
			} })),
			"&-rtl": { direction: "rtl" }
		} },
		M(e, _("arrow-background-color"), { arrowShadow: !1 }),
		{ [`${n}-pure`]: {
			position: "relative",
			maxWidth: "none",
			margin: e.sizePopupArrow
		} },
		{ [`${n}-unique-container`]: {
			...y,
			...x,
			position: "absolute",
			zIndex: t(c).sub(1).equal(),
			filter: u,
			"&-hidden": { display: "none" },
			"&-visible": { transition: `all ${e.motionDurationSlow}` }
		} }
	];
}, Y = (e) => ({
	zIndexPopup: e.zIndexPopupBase + 70,
	maxWidth: 250,
	...P({
		contentRadius: e.borderRadius,
		limitVerticalRadius: !0
	}),
	...k(u(e, { borderRadiusOuter: Math.min(e.borderRadiusOuter, 4) }))
}), _e = (e, t, n = !0) => R("Tooltip", (e) => {
	let { borderRadius: t, colorTextLightSolid: n, colorBgSpotlight: r, maxWidth: i } = e;
	return [ge(u(e, {
		tooltipMaxWidth: i,
		tooltipColor: n,
		tooltipBorderRadius: t,
		tooltipBg: r
	})), p(e, "zoom-big-fast")];
}, Y, {
	resetStyle: !1,
	injectStyle: n
})(e, t), ve = (e, t, r) => {
	let i = re(r), [a] = N(e, "tooltip"), o = n({ [`${t}-${r}`]: r && i }), s = {}, c = {}, l = d(r).toRgb(), u = (.299 * l.r + .587 * l.g + .114 * l.b) / 255 < .5 ? "#FFF" : "#000";
	return r && !i && (s.background = r, s[a("overlay-color")] = u, c[a("arrow-background-color")] = r), {
		className: o,
		overlayStyle: s,
		arrowStyle: c
	};
}, ye = (e) => {
	let { prefixCls: t, className: r, placement: i = "top", title: a, color: o, overlayInnerStyle: s, classNames: c, styles: l } = e, { getPrefixCls: u } = H.useContext(T), d = u("tooltip", t), f = u(), p = y(d), [h, g] = _e(d, p), _ = ve(f, d, o), v = _.arrowStyle, b = H.useMemo(() => ({ container: {
		...s,
		..._.overlayStyle
	} }), [s, _.overlayStyle]), x = {
		...e,
		placement: i
	}, [S, C] = m([c], [b, l], { props: x }), w = n(p, h, g, d, `${d}-pure`, `${d}-placement-${i}`, r, _.className);
	return /*#__PURE__*/ H.createElement("div", {
		className: w,
		style: v
	}, /*#__PURE__*/ H.createElement("div", { className: `${d}-arrow` }), /*#__PURE__*/ H.createElement(W, {
		...e,
		className: h,
		prefixCls: d,
		classNames: S,
		styles: C
	}, a));
}, be = /* @__PURE__ */ e({ default: () => X }), X = /* @__PURE__ */ H.forwardRef((e, t) => {
	let { prefixCls: r, openClassName: i, getTooltipContainer: a, color: o, children: s, afterOpenChange: l, arrow: u, destroyTooltipOnHide: d, destroyOnHidden: f, title: p, overlay: _, trigger: b, builtinPlacements: S, autoAdjustOverflow: C = !0, motion: T, getPopupContainer: E, placement: D = "top", mouseEnterDelay: k = .1, mouseLeaveDelay: A = .1, rootClassName: te, styles: M, classNames: N, onOpenChange: P, overlayInnerStyle: F, overlayStyle: R, overlayClassName: re, ...ie } = e, [, z] = w(), B = e["data-popover-inject"], { getPopupContainer: V, getPrefixCls: ae, direction: oe, ...se } = v("tooltip"), { className: ce, style: le, classNames: ue, styles: U, arrow: W, trigger: G } = B ? {} : se, K = me(u, W), q = K.show, de = b || G || "hover", J = E || V, he = f ?? !!d, ge = H.useContext(pe);
	I("Tooltip");
	let Y = H.useRef(null), ye = () => {
		Y.current?.forceAlign();
	};
	H.useImperativeHandle(t, () => ({
		forceAlign: ye,
		nativeElement: Y.current?.nativeElement,
		popupElement: Y.current?.popupElement
	}));
	let [be, X] = c(e.defaultOpen ?? !1, e.open), xe = !p && !_ && p !== 0, Se = (e) => {
		X(xe ? !1 : e), !xe && P && P(e);
	}, Ce = H.useMemo(() => S || O({
		arrowPointAtCenter: K?.pointAtCenter ?? !1,
		autoAdjustOverflow: C,
		arrowWidth: q ? z.sizePopupArrow : 0,
		borderRadius: z.borderRadius,
		offset: z.marginXXS,
		visibleFirst: !0
	}), [
		K,
		S,
		z,
		q,
		C
	]), we = H.useMemo(() => p === 0 ? p : _ || p || "", [_, p]), Te = /*#__PURE__*/ H.createElement(j, {
		space: !0,
		form: !0
	}, x(we) ? we() : we), Ee = {
		...e,
		trigger: de,
		builtinPlacements: Ce,
		getPopupContainer: J,
		destroyOnHidden: he
	}, [Z, De] = m([ue, N], [U, M], { props: Ee }), Q = ae("tooltip", r), Oe = ae(), ke = be;
	(!("open" in e) && xe || ge) && (ke = !1);
	let Ae = /*#__PURE__*/ H.isValidElement(s) && !g(s) ? s : /*#__PURE__*/ H.createElement("span", null, s), $ = Ae.props, je = !$.className || typeof $.className == "string" ? n($.className, i || `${Q}-open`) : $.className, Me = y(Q), [Ne, Pe] = _e(Q, Me, !B), Fe = ve(Oe, Q, o), Ie = Fe.arrowStyle, Le = n(Me, Ne, Pe), Re = n(re, { [`${Q}-rtl`]: oe === "rtl" }, Fe.className, te, Le, ce, Z.root), [ze, Be] = ee("Tooltip", ie.zIndex), Ve = {
		...De.container,
		...F,
		...Fe.overlayStyle
	}, He = /*#__PURE__*/ H.createElement(fe, {
		unique: !0,
		...ie,
		zIndex: ze,
		showArrow: q,
		placement: D,
		mouseEnterDelay: k,
		mouseLeaveDelay: A,
		prefixCls: Q,
		classNames: {
			root: Re,
			container: Z.container,
			arrow: Z.arrow,
			uniqueContainer: n(Le, Z.container)
		},
		styles: {
			root: {
				...Ie,
				...De.root,
				...le,
				...R
			},
			container: Ve,
			uniqueContainer: Ve,
			arrow: De.arrow
		},
		ref: Y,
		overlay: Te,
		visible: ke,
		onVisibleChange: Se,
		afterVisibleChange: l,
		arrowContent: /*#__PURE__*/ H.createElement("span", { className: `${Q}-arrow-content` }),
		motion: {
			motionName: L(Oe, "zoom-big-fast", typeof T?.motionName == "string" ? T?.motionName : void 0),
			motionDeadline: 1e3
		},
		trigger: de,
		builtinPlacements: Ce,
		getTooltipContainer: J,
		destroyOnHidden: he
	}, ke ? h(Ae, { className: je }) : Ae);
	return /*#__PURE__*/ H.createElement(ne.Provider, { value: Be }, He);
});
X._InternalPanelDoNotUseOrYouWillBeFired = ye, X.UniqueProvider = te;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/popover/style/index.js
var xe = "50%", Se = (e) => {
	let { componentCls: t, popoverColor: n, titleMinWidth: r, fontWeightStrong: i, innerPadding: a, dropShadowPopover: o, colorTextHeading: s, borderRadiusLG: c, zIndexPopup: l, titleMarginBottom: u, colorBgElevated: d, popoverBg: f, titleBorderBottom: p, innerContentPadding: m, titlePadding: h, antCls: g } = e, [_, v] = N(g, "tooltip");
	return [
		{ [t]: {
			...F(e),
			position: "absolute",
			top: 0,
			left: {
				_skip_check_: !0,
				value: 0
			},
			zIndex: l,
			fontWeight: "normal",
			whiteSpace: "normal",
			textAlign: "start",
			cursor: "auto",
			userSelect: "text",
			filter: o,
			[_("valid-offset-x")]: v("arrow-offset-x", "var(--arrow-x)"),
			transformOrigin: [v("valid-offset-x", xe), `var(--arrow-y, ${xe})`].join(" "),
			[_("arrow-background-color")]: d,
			width: "max-content",
			maxWidth: "100vw",
			"&-rtl": { direction: "rtl" },
			"&-hidden": { display: "none" },
			[`${t}-content`]: { position: "relative" },
			[`${t}-container`]: {
				backgroundColor: f,
				backgroundClip: "padding-box",
				borderRadius: c,
				padding: a
			},
			[`${t}-title`]: {
				minWidth: r,
				marginBottom: u,
				color: s,
				fontWeight: i,
				borderBottom: p,
				padding: h
			},
			[`${t}-content`]: {
				color: n,
				padding: m
			}
		} },
		M(e, v("arrow-background-color"), { arrowShadow: !1 }),
		{ [`${t}-pure`]: {
			position: "relative",
			maxWidth: "none",
			margin: e.sizePopupArrow,
			display: "inline-block"
		} }
	];
}, Ce = (e) => {
	let { componentCls: t, antCls: n } = e, [r] = N(n, "tooltip");
	return { [t]: ae.map((n) => {
		let i = e[`${n}6`];
		return { [`&${t}-${n}`]: {
			[r("arrow-background-color")]: i,
			[`${t}-inner`]: { backgroundColor: i },
			[`${t}-arrow`]: { background: "transparent" }
		} };
	}) };
}, we = R("Popover", (e) => {
	let { colorBgElevated: t, colorText: n } = e, r = u(e, {
		popoverBg: t,
		popoverColor: n
	});
	return [
		Se(r),
		Ce(r),
		p(r, "zoom-big")
	];
}, (e) => {
	let { lineWidth: t, controlHeight: n, fontHeight: r, padding: i, wireframe: a, zIndexPopupBase: o, borderRadiusLG: s, marginXS: c, lineType: l, colorSplit: u, paddingSM: d } = e, f = n - r, p = f / 2, m = f / 2 - t, h = i;
	return {
		titleMinWidth: 177,
		zIndexPopup: o + 30,
		...k(e),
		...P({
			contentRadius: s,
			limitVerticalRadius: !0
		}),
		innerPadding: a ? 0 : 12,
		titleMarginBottom: a ? 0 : c,
		titlePadding: a ? `${p}px ${h}px ${m}px` : 0,
		titleBorderBottom: a ? `${t}px ${l} ${u}` : "none",
		innerContentPadding: a ? `${d}px ${h}px` : 0
	};
}, {
	resetStyle: !1,
	deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
}), Te = (e) => {
	let { title: t, content: r, prefixCls: i, classNames: a, styles: o } = e;
	return !D(t) && !D(r) ? null : /*#__PURE__*/ H.createElement(H.Fragment, null, D(t) && /*#__PURE__*/ H.createElement("div", {
		className: n(`${i}-title`, a?.title),
		style: o?.title
	}, t), D(r) && /*#__PURE__*/ H.createElement("div", {
		className: n(`${i}-content`, a?.content),
		style: o?.content
	}, r));
}, Ee = (e) => {
	let { hashId: t, prefixCls: r, className: i, style: a, placement: o = "top", title: s, content: c, children: l, classNames: u, styles: d } = e, f = C(s), p = C(c), h = {
		...e,
		placement: o
	}, [g, _] = m([u], [d], { props: h }), v = n(t, r, `${r}-pure`, `${r}-placement-${o}`, i);
	return /*#__PURE__*/ H.createElement("div", {
		className: v,
		style: a
	}, /*#__PURE__*/ H.createElement("div", { className: `${r}-arrow` }), /*#__PURE__*/ H.createElement(W, {
		...e,
		className: t,
		prefixCls: r,
		classNames: g,
		styles: _
	}, l || /*#__PURE__*/ H.createElement(Te, {
		prefixCls: r,
		title: f,
		content: p,
		classNames: g,
		styles: _
	})));
}, Z = (e) => {
	let { prefixCls: t, className: r, ...i } = e, { getPrefixCls: a } = H.useContext(T), o = a("popover", t), [s, c] = we(o);
	return /*#__PURE__*/ H.createElement(Ee, {
		...i,
		prefixCls: o,
		hashId: s,
		className: n(r, c)
	});
}, De = /* @__PURE__ */ e({ default: () => Q }), Q = /* @__PURE__ */ H.forwardRef((e, t) => {
	let { prefixCls: r, title: i, content: a, overlayClassName: o, placement: s = "top", trigger: l, children: u, mouseEnterDelay: d = .1, mouseLeaveDelay: f = .1, onOpenChange: p, overlayStyle: h = {}, styles: g, classNames: _, motion: y, arrow: b, ...x } = e, { getPrefixCls: S, className: w, style: T, classNames: E, styles: O, arrow: ee, trigger: k } = v("popover"), A = S("popover", r), [j, te] = we(A), M = S(), N = me(b, ee), P = l || k || "hover", ne = {
		...e,
		placement: s,
		trigger: P,
		mouseEnterDelay: d,
		mouseLeaveDelay: f,
		overlayStyle: h,
		styles: g,
		classNames: _
	}, [F, I] = m([E, _], [O, g], { props: ne }), R = n(o, j, te, w, F.root), [re, ie] = c(e.defaultOpen ?? !1, e.open), z = (e) => {
		ie(e), p?.(e);
	}, B = C(i), V = C(a);
	return /*#__PURE__*/ H.createElement(X, {
		unique: !1,
		arrow: N,
		placement: s,
		trigger: P,
		mouseEnterDelay: d,
		mouseLeaveDelay: f,
		...x,
		prefixCls: A,
		classNames: {
			root: R,
			container: F.container,
			arrow: F.arrow
		},
		styles: {
			root: {
				...I.root,
				...T,
				...h
			},
			container: I.container,
			arrow: I.arrow
		},
		ref: t,
		open: re,
		onOpenChange: z,
		overlay: D(B) || D(V) ? /*#__PURE__*/ H.createElement(Te, {
			prefixCls: A,
			title: B,
			content: V,
			classNames: F,
			styles: I
		}) : null,
		motion: { motionName: L(M, "zoom-big", typeof y?.motionName == "string" ? y?.motionName : void 0) },
		"data-popover-inject": !0
	}, u);
});
Q._InternalPanelDoNotUseOrYouWillBeFired = Z;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/avatar/AvatarGroup.js
var Oe = (e) => {
	let { size: t, shape: n } = H.useContext(se), r = H.useMemo(() => ({
		size: e.size || t,
		shape: e.shape || n
	}), [
		e.size,
		e.shape,
		t,
		n
	]);
	return /*#__PURE__*/ H.createElement(se.Provider, { value: r }, e.children);
}, ke = (e) => {
	let { getPrefixCls: t, direction: r } = H.useContext(T), { prefixCls: i, className: a, rootClassName: o, style: s, maxCount: c, maxStyle: u, size: d, shape: f, maxPopoverPlacement: p, maxPopoverTrigger: m, children: g, max: _ } = e, v = t("avatar", i), b = `${v}-group`, x = y(v), [S, C] = ue(v, x), w = n(b, { [`${b}-rtl`]: r === "rtl" }, C, x, a, o, S), E = l(g).map((e, t) => h(e, { key: `avatar-key-${t}` })), D = _?.count || c, O = E.length;
	if (D && D < O) {
		let e = E.slice(0, D), t = E.slice(D, O), r = _?.style || u, i = _?.popover?.trigger || m || "hover", a = _?.popover?.placement || p || "top", o = {
			content: t,
			..._?.popover,
			placement: a,
			trigger: i,
			rootClassName: n(`${b}-popover`, _?.popover?.rootClassName)
		};
		return e.push(/*#__PURE__*/ H.createElement(Q, {
			key: "avatar-popover-key",
			destroyOnHidden: !0,
			...o
		}, /*#__PURE__*/ H.createElement(U, { style: r }, `+${O - D}`))), /*#__PURE__*/ H.createElement(Oe, {
			shape: f,
			size: d
		}, /*#__PURE__*/ H.createElement("div", {
			className: w,
			style: s
		}, e));
	}
	return /*#__PURE__*/ H.createElement(Oe, {
		shape: f,
		size: d
	}, /*#__PURE__*/ H.createElement("div", {
		className: w,
		style: s
	}, E));
}, Ae = /* @__PURE__ */ e({ default: () => $ }), $ = U;
$.Group = ke;
//#endregion
export { Ee as a, me as c, Z as i, pe as l, Q as n, X as o, De as r, be as s, Ae as t, oe as u };
