globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Ht as n, Mt as r, Nt as i, On as a, Ut as o, _t as s, kt as c, sn as l, yt as u } from "../shared/core.js";
import { Jn as d, Mn as f, Pn as p, Qn as m, Sr as h, Wn as g, Yn as _, a as v, bn as y, br as b, cr as x, d as S, ir as C, jt as w, kn as T, pr as E, sr as D, tn as O, u as k, wt as A, xn as j } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/tag/style/index.js
var M = /* @__PURE__ */ t(a()), N = (e) => {
	let { paddingXXS: t, lineWidth: n, tagPaddingHorizontal: r, componentCls: i, calc: a } = e, o = a(r).sub(n).equal(), s = a(t).sub(n).equal();
	return {
		[i]: {
			...E(e),
			display: "inline-block",
			height: "auto",
			paddingInline: o,
			fontSize: e.tagFontSize,
			lineHeight: e.tagLineHeight,
			whiteSpace: "nowrap",
			backgroundColor: e.defaultBg,
			border: `${c(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
			borderRadius: e.borderRadiusSM,
			opacity: 1,
			transition: `all ${e.motionDurationMid}`,
			textAlign: "start",
			position: "relative",
			[`&${i}-rtl`]: { direction: "rtl" },
			"&, a, a:hover": { color: e.defaultColor },
			[`${i}-close-icon`]: {
				marginInlineStart: s,
				fontSize: e.tagIconSize,
				color: e.colorIcon,
				cursor: "pointer",
				transition: `all ${e.motionDurationMid}`,
				"&:hover": { color: e.colorTextHeading }
			},
			"&-checkable": {
				backgroundColor: "transparent",
				borderColor: "transparent",
				cursor: "pointer",
				[`&:not(${i}-checkable-checked):hover`]: {
					color: e.colorPrimary,
					backgroundColor: e.colorFillSecondary
				},
				"&:active, &-checked": { color: e.colorTextLightSolid },
				"&-checked": {
					backgroundColor: e.colorPrimary,
					"&:hover": { backgroundColor: e.colorPrimaryHover }
				},
				"&:active": { backgroundColor: e.colorPrimaryActive },
				"&-disabled": {
					cursor: "not-allowed",
					[`&:not(${i}-checkable-checked)`]: {
						color: e.colorTextDisabled,
						"&:hover": { backgroundColor: "transparent" }
					},
					[`&${i}-checkable-checked`]: {
						color: e.colorTextDisabled,
						backgroundColor: e.colorBgContainerDisabled
					},
					"&:hover, &:active": {
						backgroundColor: e.colorBgContainerDisabled,
						color: e.colorTextDisabled
					},
					[`&:not(${i}-checkable-checked):hover`]: { color: e.colorTextDisabled }
				},
				"&-group": {
					display: "flex",
					flexWrap: "wrap",
					gap: e.paddingXS
				}
			},
			"&-hidden": { display: "none" },
			[`> ${e.iconCls} + span, > span + ${e.iconCls}`]: { marginInlineStart: o }
		},
		[`&${e.componentCls}-solid`]: {
			borderColor: "transparent",
			color: e.colorTextLightSolid,
			backgroundColor: e.colorBgSolid,
			[`&${i}-default`]: { color: e.solidTextColor }
		},
		[`${i}-filled`]: {
			borderColor: "transparent",
			backgroundColor: e.tagBorderlessBg
		},
		[`&${i}-disabled`]: {
			color: e.colorTextDisabled,
			cursor: "not-allowed",
			backgroundColor: e.colorBgContainerDisabled,
			a: {
				cursor: "not-allowed",
				pointerEvents: "none",
				color: e.colorTextDisabled,
				"&:hover": { color: e.colorTextDisabled }
			},
			"a&": { "&:hover, &:active": { color: e.colorTextDisabled } },
			[`&${i}-outlined`]: { borderColor: e.colorBorderDisabled },
			[`&${i}-solid, &${i}-filled`]: {
				color: e.colorTextDisabled,
				[`${i}-close-icon`]: { color: e.colorTextDisabled }
			},
			[`${i}-close-icon`]: {
				cursor: "not-allowed",
				color: e.colorTextDisabled,
				"&:hover": { color: e.colorTextDisabled }
			}
		}
	};
}, P = (e) => {
	let { lineWidth: t, fontSizeIcon: n, calc: r } = e, i = e.fontSizeSM;
	return u(e, {
		tagFontSize: i,
		tagLineHeight: c(r(e.lineHeightSM).mul(i).equal()),
		tagIconSize: r(n).sub(r(t).mul(2)).equal(),
		tagPaddingHorizontal: 8,
		tagBorderlessBg: e.defaultBg
	});
}, F = (e) => {
	let t = A(new w(e.colorBgSolid), "#fff") ? "#000" : "#fff";
	return {
		defaultBg: new s(e.colorFillTertiary).onBackground(e.colorBgContainer).toHexString(),
		defaultColor: e.colorText,
		solidTextColor: t
	};
}, I = D("Tag", (e) => N(P(e)), F), L = /*#__PURE__*/ M.forwardRef((e, t) => {
	let { prefixCls: n, style: r, className: a, checked: o, children: s, icon: c, onChange: l, onClick: u, onKeyDown: d, disabled: f, ...p } = e, { getPrefixCls: m, tag: h } = M.useContext(b), g = M.useContext(T), _ = f ?? g, v = (e) => {
		_ || (l?.(!o), u?.(e));
	}, y = (e) => {
		d?.(e), !(e.defaultPrevented || _) && e.key === " " && (e.preventDefault(), l?.(!o));
	}, x = m("tag", n), [S, C] = I(x), w = i(x, `${x}-checkable`, {
		[`${x}-checkable-checked`]: o,
		[`${x}-checkable-disabled`]: _
	}, h?.className, a, S, C);
	return /*#__PURE__*/ M.createElement("span", {
		...p,
		ref: t,
		role: "checkbox",
		"aria-checked": o,
		"aria-disabled": _ || void 0,
		tabIndex: _ ? -1 : 0,
		style: {
			...r,
			...h?.style
		},
		className: w,
		onClick: v,
		onKeyDown: y
	}, c, /*#__PURE__*/ M.createElement("span", null, s));
}), R = /*#__PURE__*/ M.forwardRef((e, t) => {
	let { id: a, prefixCls: o, rootClassName: s, className: c, style: u, classNames: f, styles: p, disabled: _, options: v, value: y, defaultValue: b, onChange: x, multiple: S, ...C } = e, { getPrefixCls: w, direction: T, className: E, style: D, classNames: O, styles: k } = h("tag"), A = w("tag", o), j = `${A}-checkable-group`, [N, P] = I(A, g(A)), [F, R] = d([O, f], [k, p], { props: e }), z = (0, M.useMemo)(() => Array.isArray(v) ? v.map((e) => m(e) ? e : {
		value: e,
		label: e
	}) : [], [v]), [B, V] = l(b, y), H = (e, t) => {
		let n = null;
		if (S) {
			let i = B || [];
			n = e ? [].concat(r(i), [t.value]) : i.filter((e) => e !== t.value);
		} else n = e ? t.value : null;
		V(n), x?.(n);
	}, U = M.useRef(null);
	(0, M.useImperativeHandle)(t, () => ({ nativeElement: U.current }));
	let W = n(C, {
		aria: !0,
		data: !0
	});
	return /*#__PURE__*/ M.createElement("div", {
		...W,
		className: i(j, E, s, {
			[`${j}-disabled`]: _,
			[`${j}-rtl`]: T === "rtl"
		}, N, P, c, F.root),
		style: {
			...D,
			...R.root,
			...u
		},
		id: a,
		ref: U
	}, z.map((e) => /*#__PURE__*/ M.createElement(L, {
		key: e.value,
		className: i(`${j}-item`, F.item, e.className),
		style: {
			...R.item,
			...e.style
		},
		checked: S ? (B || []).includes(e.value) : B === e.value,
		onChange: (t) => H(t, e),
		disabled: _
	}, e.label)));
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/tag/hooks/useColor.js
function z(e, t) {
	let { color: n, variant: r, bordered: i } = e;
	return M.useMemo(() => {
		let e = n?.endsWith("-inverse"), a;
		a = r || (e ? "solid" : i === !1 ? "filled" : t || "filled");
		let o = e ? n?.replace("-inverse", "") : n;
		o === void 0 && a === "solid" && (o = "default");
		let c = k(o), l = S(o), u = {};
		if (!c && !l && o) if (a === "solid") u.backgroundColor = n;
		else {
			let e = new s(o).toHsl();
			e.l = .95, u.backgroundColor = new s(e).toHexString(), u.color = n, a === "outlined" && (u.borderColor = n);
		}
		return [
			a,
			o,
			c,
			l,
			u
		];
	}, [
		n,
		r,
		i,
		t
	]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/tag/style/presetCmp.js
var B = (e) => C(e, (t, { textColor: n, lightBorderColor: r, lightColor: i, darkColor: a }) => ({ [`${e.componentCls}${e.componentCls}-${t}:not(${e.componentCls}-disabled)`]: {
	[`&${e.componentCls}-outlined`]: {
		backgroundColor: i,
		borderColor: r,
		color: n
	},
	[`&${e.componentCls}-solid`]: {
		backgroundColor: a,
		borderColor: a,
		color: e.colorTextLightSolid
	},
	[`&${e.componentCls}-filled`]: {
		backgroundColor: i,
		color: n
	}
} })), V = x(["Tag", "preset"], (e) => B(P(e)), F), H = (e, t, n) => {
	let r = v(n);
	return { [`${e.componentCls}${e.componentCls}-${t}:not(${e.componentCls}-disabled)`]: {
		[`&${e.componentCls}-outlined`]: {
			backgroundColor: e[`color${r}Bg`],
			borderColor: e[`color${r}Border`],
			color: e[`color${n}`]
		},
		[`&${e.componentCls}-solid`]: {
			backgroundColor: e[`color${n}`],
			borderColor: e[`color${n}`]
		},
		[`&${e.componentCls}-filled`]: {
			backgroundColor: e[`color${r}Bg`],
			color: e[`color${n}`]
		}
	} };
}, U = x(["Tag", "status"], (e) => {
	let t = P(e);
	return [
		H(t, "success", "Success"),
		H(t, "processing", "Info"),
		H(t, "error", "Error"),
		H(t, "warning", "Warning")
	];
}, F), W = /* @__PURE__ */ e({ default: () => G }), G = /* @__PURE__ */ M.forwardRef((e, t) => {
	let { prefixCls: n, className: r, rootClassName: a, style: s, children: c, icon: l, color: u, variant: m, onClose: g, bordered: v, disabled: x, href: S, target: C, styles: w, classNames: E, ...D } = e, { getPrefixCls: k, direction: A, className: N, variant: P, style: F, classNames: L, styles: R } = h("tag"), [B, H, W, G, K] = z(e, P), ee = W || G, te = M.useContext(T), q = x ?? te, { tag: ne } = M.useContext(b), [re, ie] = M.useState(!0), J = o(D, ["closeIcon", "closable"]), ae = {
		...e,
		color: H,
		variant: B,
		disabled: q
	}, [Y, X] = d([L, E], [R, w], { props: ae }), oe = M.useMemo(() => {
		let e = {
			...X.root,
			...F,
			...s
		};
		return q || (e = {
			...K,
			...e
		}), e;
	}, [
		X.root,
		F,
		s,
		K,
		q
	]), Z = k("tag", n), [se, ce] = I(Z), le = i(Z, N, Y.root, `${Z}-${B}`, {
		[`${Z}-${H}`]: ee,
		[`${Z}-hidden`]: !re,
		[`${Z}-rtl`]: A === "rtl",
		[`${Z}-disabled`]: q
	}, r, a, se, ce), Q = (e) => {
		q || (e.stopPropagation(), g?.(e), !e.defaultPrevented && ie(!1));
	}, $ = (e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), e.currentTarget.click());
	}, [, ue] = j(y(e), y(ne), {
		closable: !1,
		closeIconRender: (e) => p(e, /* @__PURE__ */ M.createElement("span", {
			role: "button",
			tabIndex: q ? -1 : 0,
			"aria-disabled": q || void 0,
			className: i(`${Z}-close-icon`, Y.close),
			onClick: Q,
			onKeyDown: $,
			style: X.close
		}, e), (e) => ({
			onClick: (t) => {
				e?.onClick?.(t), Q(t);
			},
			onKeyDown: (t) => {
				e?.onKeyDown?.(t), t.defaultPrevented || $(t);
			},
			role: "button",
			tabIndex: q ? -1 : 0,
			"aria-disabled": q || void 0,
			className: i(e?.className, `${Z}-close-icon`, Y.close),
			style: {
				...X.close,
				...e?.style
			}
		}))
	}), de = _(D.onClick) || c && c.type === "a", fe = f(l, {
		className: i(/*#__PURE__*/ M.isValidElement(l) ? l.props?.className : void 0, Y.icon),
		style: X.icon
	}), pe = fe ? /*#__PURE__*/ M.createElement(M.Fragment, null, fe, c && /*#__PURE__*/ M.createElement("span", {
		className: Y.content,
		style: X.content
	}, c)) : c, me = S ? "a" : "span", he = /*#__PURE__*/ M.createElement(me, {
		...J,
		ref: t,
		className: le,
		style: oe,
		href: q ? void 0 : S,
		target: C,
		onClick: q ? void 0 : J.onClick,
		...S && q ? { "aria-disabled": !0 } : {}
	}, pe, ue, W && /*#__PURE__*/ M.createElement(V, {
		key: "preset",
		prefixCls: Z
	}), G && /*#__PURE__*/ M.createElement(U, {
		key: "status",
		prefixCls: Z
	}));
	return de ? /*#__PURE__*/ M.createElement(O, { component: "Tag" }, he) : he;
});
G.CheckableTag = L, G.CheckableTagGroup = R;
//#endregion
export { W as t };
