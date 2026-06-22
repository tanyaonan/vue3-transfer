globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { M as n, Nt as r, Ut as i, Z as a, ct as o, fn as s, kn as c, kt as l, pn as u, sn as d, yt as f } from "../shared/core.js";
import { Cr as p, Gn as m, Jn as h, Kn as g, Sr as _, Wn as ee, Wt as v, br as y, fn as te, nr as b, or as x, pr as S, s as C, sr as w, xt as T } from "../shared/antd-core.js";
import { o as E } from "./avatar.js";
import { t as ne } from "./badge.js";
import { r as D } from "./dropdown.js";
import { t as O } from "./flex.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/float-button/context.js
var k = /* @__PURE__ */ t(c()), A = /*#__PURE__*/ k.createContext(null), j = (e) => {
	let { componentCls: t, floatButtonSize: n, iconCls: r, antCls: i, floatButtonIconSize: a } = e, [o, s] = x(i, "float-btn"), c = `${t}-badge`, u = Math.SQRT2, d = (u - 1) / u, f = e.calc(e.borderRadius).mul(d).equal(), p = e.calc(e.controlHeight).div(2).mul(d).equal();
	return { [t]: [{ [o("size")]: l(n) }, {
		flexDirection: "column",
		margin: 0,
		padding: `${l(e.paddingXXS)} 0`,
		width: s("size"),
		minHeight: s("size"),
		height: "auto",
		wordBreak: "break-word",
		whiteSpace: "normal",
		gap: e.calc(e.paddingXXS).div(2).equal(),
		"&-rtl": { direction: "rtl" },
		[`&${t}-individual`]: {
			position: "fixed",
			zIndex: e.zIndexPopupBase,
			insetInlineEnd: e.floatButtonInsetInlineEnd,
			bottom: e.floatButtonInsetBlockEnd,
			boxShadow: e.boxShadowSecondary
		},
		[`&${t}-pure`]: {
			position: "relative",
			inset: "auto"
		},
		"&:empty": { display: "none" },
		[`${t}-icon`]: { lineHeight: 1 },
		[`&${t}-icon-only`]: { [r]: { fontSize: a } },
		[`${t}-content`]: { fontSize: e.fontSizeSM },
		[c]: {
			position: "absolute",
			top: 0,
			insetInlineEnd: 0,
			[`&:not(${c}-dot)`]: { transform: "translate(50%, -50%)" }
		},
		[`&-rtl ${c}:not(${c}-dot)`]: { transform: "translate(-50%, -50%)" },
		"&-square": { [`${c}-dot`]: {
			marginTop: f,
			marginInlineEnd: f
		} },
		"&-circle": { [c]: {
			marginTop: p,
			marginInlineEnd: p
		} }
	}] };
}, M = (e) => {
	let { componentCls: t, antCls: n, floatButtonSize: r, padding: i } = e, a = `${t}-group`, o = `${a}-list`, [s, c] = x(n, "float-btn");
	return { [a]: [
		{
			[s("list-transform-start")]: `translate(0,${l(r)})`,
			[s("list-trigger-offset")]: `calc(${l(r)} + ${l(i)})`
		},
		{
			...S(e),
			position: "fixed",
			zIndex: e.zIndexPopupBase,
			insetInlineEnd: e.floatButtonInsetInlineEnd,
			bottom: e.floatButtonInsetBlockEnd,
			gap: i,
			"&-rtl": { direction: "rtl" },
			[`&${t}-pure`]: {
				position: "relative",
				inset: "auto"
			},
			[t]: {
				position: "relative",
				inset: "auto"
			}
		},
		{
			[`&:not(${a}-individual) ${o}`]: { boxShadow: e.boxShadowSecondary },
			[`&${a}-individual ${o}`]: { gap: i },
			[`&-menu-mode ${o}`]: { position: "absolute" },
			[o]: {
				borderRadius: e.borderRadiusLG,
				"&-motion": {
					transition: `all ${e.motionDurationSlow}`,
					"&-enter, &-appear": {
						opacity: 0,
						transform: c("list-transform-start"),
						"&-active": {
							opacity: 1,
							transform: "translate(0, 0)"
						}
					},
					"&-leave": { "&-active": {
						opacity: 0,
						transform: c("list-transform-start")
					} }
				}
			},
			"&-top": { [o]: { bottom: c("list-trigger-offset") } },
			"&-bottom": { [o]: {
				[s("list-transform-start")]: `translate(0, calc(${l(r)} * -1))`,
				top: c("list-trigger-offset")
			} },
			"&-left": { [o]: {
				[s("list-transform-start")]: `translate(${l(r)}, 0)`,
				right: c("list-trigger-offset")
			} },
			"&-right": { [o]: {
				[s("list-transform-start")]: `translate(calc(${l(r)} * -1), 0)`,
				left: c("list-trigger-offset")
			} }
		}
	] };
}, re = w("FloatButton", (e) => {
	let { controlHeightLG: t, marginXXL: n, marginLG: r, fontSizeIcon: i, calc: a } = e, o = f(e, {
		floatButtonIconSize: a(i).mul(1.5).equal(),
		floatButtonSize: t,
		floatButtonInsetBlockEnd: n,
		floatButtonInsetInlineEnd: r
	});
	return [
		j(o),
		M(o),
		v(e)
	];
}, () => ({}), { order: -998 }), N = "float-btn", P = /* @__PURE__ */ k.forwardRef((e, t) => {
	let { prefixCls: a, className: o, rootClassName: s, style: c, type: l = "default", shape: u = "circle", icon: d, description: f, content: p, tooltip: m, badge: g = {}, classNames: _, styles: v, ...b } = e, { getPrefixCls: x, direction: S } = k.useContext(y), w = k.useContext(A), D = x(N, a), O = ee(D), { shape: j, individual: M, classNames: P, styles: F } = w || {}, I = j || u, L = M ?? !0, R = p ?? f, z = {
		...e,
		type: l,
		shape: I
	}, [B, V] = re(D, O), [ie, H] = h([
		k.useMemo(() => ({
			icon: `${D}-icon`,
			content: `${D}-content`
		}), [D]),
		P,
		_
	], [F, v], { props: z }), U = !R && !d ? /*#__PURE__*/ k.createElement(n, null) : d, [ae] = te("FloatButton", c?.zIndex), W = {
		...c,
		zIndex: ae
	}, G = i(g, [
		"title",
		"children",
		"status",
		"text"
	]), K = "badge" in e && /*#__PURE__*/ k.createElement(ne, {
		...G,
		className: r(G.className, `${D}-badge`, { [`${D}-badge-dot`]: G.dot })
	}), q = C(m), J = /*#__PURE__*/ k.createElement(T, {
		...b,
		ref: t,
		className: r(B, V, O, D, o, s, `${D}-${l}`, `${D}-${I}`, {
			[`${D}-rtl`]: S === "rtl",
			[`${D}-individual`]: L,
			[`${D}-icon-only`]: !R
		}),
		classNames: ie,
		styles: H,
		style: W,
		shape: I,
		type: l,
		size: "large",
		icon: U,
		_skipSemantic: !0
	}, R, K);
	return q && (J = /*#__PURE__*/ k.createElement(E, { ...q }, J)), J;
}), F = /*#__PURE__*/ k.createElement(a, null), I = /*#__PURE__*/ k.forwardRef((e, t) => {
	let { backTopIcon: n } = _("floatButton"), { prefixCls: i, className: a, type: o = "default", shape: s = "circle", visibilityHeight: c = 400, icon: l, target: d, onClick: f, duration: h = 450, ...ee } = e, v = l ?? n ?? F, [te, x] = (0, k.useState)(c === 0), S = k.useRef(null);
	k.useImperativeHandle(t, () => ({ nativeElement: S.current }));
	let C = () => S.current?.ownerDocument || window, w = p((e) => {
		x(g(e.target) >= c);
	});
	(0, k.useEffect)(() => {
		let e = (d || C)();
		return w({ target: e }), e?.addEventListener("scroll", w), () => {
			w.cancel(), e?.removeEventListener("scroll", w);
		};
	}, [d]);
	let T = (e) => {
		m(0, {
			getContainer: d || C,
			duration: h
		}), f?.(e);
	}, { getPrefixCls: E } = (0, k.useContext)(y), ne = E(N, i), D = E(), O = {
		prefixCls: ne,
		icon: v,
		type: o,
		shape: (0, k.useContext)(A)?.shape || s,
		...ee
	};
	return /*#__PURE__*/ k.createElement(b, {
		visible: te,
		motionName: `${D}-fade`
	}, ({ className: e }, t) => /*#__PURE__*/ k.createElement(P, {
		ref: u(S, t),
		...O,
		onClick: T,
		className: r(a, e)
	}));
}), L = (e) => {
	let { prefixCls: t, className: i, style: a, classNames: c, styles: l, rootClassName: u, shape: f = "circle", type: p = "default", placement: m, icon: g = /*#__PURE__*/ k.createElement(n, null), closeIcon: v, trigger: y, children: x, onOpenChange: S, open: C, onClick: w, ...T } = e, { direction: E, getPrefixCls: ne, closeIcon: j, classNames: M, styles: F, className: I, style: L } = _("floatButtonGroup"), R = v ?? j ?? /*#__PURE__*/ k.createElement(o, null), z = ne(N, t), B = ee(z), [V, ie] = re(z, B), H = `${z}-group`, U = y && ["click", "hover"].includes(y), [ae] = te("FloatButton", a?.zIndex), W = k.useRef(null), G = [
		"top",
		"left",
		"right",
		"bottom"
	].includes(m) ? m : "top", [K, q] = d(!1, C), J = y === "hover", Y = y === "click", X = s((e) => {
		K !== e && (q(e), S?.(e));
	}), oe = () => {
		J && X(!0);
	}, se = () => {
		J && X(!1);
	}, ce = (e) => {
		Y && X(!K), w?.(e);
	};
	k.useEffect(() => {
		if (Y) {
			let e = (e) => {
				W.current?.contains(e.target) || X(!1);
			};
			return document.addEventListener("click", e, { capture: !0 }), () => document.removeEventListener("click", e, { capture: !0 });
		}
	}, [Y]);
	let Z = f === "circle", le = {
		...e,
		shape: f,
		type: p,
		placement: G
	}, [Q, $] = h([M, c], [F, l], { props: le }), ue = k.useMemo(() => ({
		shape: f,
		individual: Z,
		classNames: {
			root: Q.item,
			icon: Q.itemIcon,
			content: Q.itemContent
		},
		styles: {
			root: $.item,
			icon: $.itemIcon,
			content: $.itemContent
		}
	}), [
		f,
		Z,
		Q,
		$
	]), de = k.useMemo(() => ({
		...ue,
		individual: !0,
		classNames: {
			root: Q.trigger,
			icon: Q.triggerIcon,
			content: Q.triggerContent
		},
		styles: {
			root: $.trigger,
			icon: $.triggerIcon,
			content: $.triggerContent
		}
	}), [
		ue,
		Q,
		$
	]), fe, pe = `${H}-list`, me = (e) => {
		let t = G === "top" || G === "bottom", n = {
			className: r(pe, Q.list, e),
			style: $.list
		};
		return fe = Z ? /*#__PURE__*/ k.createElement(O, {
			vertical: t,
			...n
		}, x) : /*#__PURE__*/ k.createElement(D.Compact, {
			vertical: t,
			...n
		}, x), fe;
	};
	return /*#__PURE__*/ k.createElement(A.Provider, { value: ue }, /*#__PURE__*/ k.createElement("div", {
		className: r(H, V, ie, B, I, Q.root, i, u, {
			[`${H}-rtl`]: E === "rtl",
			[`${H}-individual`]: Z,
			[`${H}-${G}`]: U,
			[`${H}-menu-mode`]: U
		}),
		style: {
			...L,
			zIndex: ae,
			...$.root,
			...a
		},
		ref: W,
		onMouseEnter: oe,
		onMouseLeave: se
	}, U ? /*#__PURE__*/ k.createElement(b, {
		visible: K,
		motionName: `${pe}-motion`
	}, ({ className: e }) => me(e)) : me(), U && /*#__PURE__*/ k.createElement(A.Provider, { value: de }, /*#__PURE__*/ k.createElement(P, {
		type: p,
		icon: K ? R : g,
		"aria-label": e["aria-label"],
		className: `${H}-trigger`,
		onClick: ce,
		...T
	}))));
}, R = ({ backTop: e, ...t }) => e ? /*#__PURE__*/ k.createElement(I, {
	...t,
	visibilityHeight: 0
}) : /*#__PURE__*/ k.createElement(P, { ...t }), z = ({ className: e, items: t, classNames: n, styles: i, prefixCls: a, ...o }) => {
	let { getPrefixCls: s } = k.useContext(y), c = `${s(N, a)}-pure`;
	return t ? /*#__PURE__*/ k.createElement(L, {
		className: r(e, c),
		classNames: n,
		styles: i,
		...o
	}, t.map((e, t) => /*#__PURE__*/ k.createElement(R, {
		key: t,
		...e
	}))) : /*#__PURE__*/ k.createElement(R, {
		className: r(e, c),
		classNames: n,
		styles: i,
		...o
	});
}, B = /* @__PURE__ */ e({ default: () => V });
P.BackTop = I, P.Group = L, P._InternalPanelDoNotUseOrYouWillBeFired = z;
var V = P;
//#endregion
export { B as t };
