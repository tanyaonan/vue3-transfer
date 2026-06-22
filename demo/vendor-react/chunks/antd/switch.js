globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Jt as n, Nt as r, On as i, _t as a, kt as o, rt as s, sn as c, yt as l } from "../shared/core.js";
import { Jn as u, Lt as d, Sr as f, dr as p, en as m, kn as h, pr as g, sr as _, tn as v } from "../shared/antd-core.js";
//#region node_modules/.pnpm/@rc-component+switch@1.0.3__4beb483a1cbb03260b996eed5cbfeade/node_modules/@rc-component/switch/es/index.js
var y = /* @__PURE__ */ t(i());
function b() {
	return b = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, b.apply(this, arguments);
}
var x = /*#__PURE__*/ y.forwardRef(({ prefixCls: e = "rc-switch", className: t, checked: i, defaultChecked: a, disabled: o, loadingIcon: s, checkedChildren: l, unCheckedChildren: u, onClick: d, onChange: f, onKeyDown: p, styles: m, classNames: h, ...g }, _) => {
	let [v, x] = c(a ?? !1, i);
	function S(e, t) {
		let n = v;
		return o || (n = e, x(n), f?.(n, t)), n;
	}
	function C(e) {
		e.which === n.LEFT ? S(!1, e) : e.which === n.RIGHT && S(!0, e), p?.(e);
	}
	function w(e) {
		let t = S(!v, e);
		d?.(t, e);
	}
	let T = r(e, t, {
		[`${e}-checked`]: v,
		[`${e}-disabled`]: o
	});
	return /*#__PURE__*/ y.createElement("button", b({}, g, {
		type: "button",
		role: "switch",
		"aria-checked": v,
		disabled: o,
		className: T,
		ref: _,
		onKeyDown: C,
		onClick: w
	}), s, /*#__PURE__*/ y.createElement("span", { className: `${e}-inner` }, /*#__PURE__*/ y.createElement("span", {
		className: r(`${e}-inner-checked`, h?.content),
		style: m?.content
	}, l), /*#__PURE__*/ y.createElement("span", {
		className: r(`${e}-inner-unchecked`, h?.content),
		style: m?.content
	}, u)));
});
x.displayName = "Switch";
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/switch/style/index.js
var S = (e) => {
	let { componentCls: t, trackHeightSM: n, trackPadding: r, trackMinWidthSM: i, innerMinMarginSM: a, innerMaxMarginSM: s, handleSizeSM: c, calc: l } = e, u = `${t}-inner`, d = o(l(c).add(l(r).mul(2)).equal()), f = o(l(s).mul(2).equal());
	return { [t]: { [`&${t}-small`]: {
		minWidth: i,
		height: n,
		lineHeight: o(n),
		[`${t}-inner`]: {
			paddingInlineStart: s,
			paddingInlineEnd: a,
			[`${u}-checked, ${u}-unchecked`]: { minHeight: n },
			[`${u}-checked`]: {
				marginInlineStart: `calc(-100% + ${d} - ${f})`,
				marginInlineEnd: `calc(100% - ${d} + ${f})`
			},
			[`${u}-unchecked`]: {
				marginTop: l(n).mul(-1).equal(),
				marginInlineStart: 0,
				marginInlineEnd: 0
			}
		},
		[`${t}-handle`]: {
			width: c,
			height: c
		},
		[`${t}-loading-icon`]: {
			top: l(l(c).sub(e.switchLoadingIconSize)).div(2).equal(),
			fontSize: e.switchLoadingIconSize
		},
		[`&${t}-checked`]: {
			[`${t}-inner`]: {
				paddingInlineStart: a,
				paddingInlineEnd: s,
				[`${u}-checked`]: {
					marginInlineStart: 0,
					marginInlineEnd: 0
				},
				[`${u}-unchecked`]: {
					marginInlineStart: `calc(100% - ${d} + ${f})`,
					marginInlineEnd: `calc(-100% + ${d} - ${f})`
				}
			},
			[`${t}-handle`]: { insetInlineStart: `calc(100% - ${o(l(c).add(r).equal())})` }
		},
		[`&:not(${t}-disabled):active`]: {
			[`&:not(${t}-checked) ${u}`]: { [`${u}-unchecked`]: {
				marginInlineStart: l(e.marginXXS).div(2).equal(),
				marginInlineEnd: l(e.marginXXS).mul(-1).div(2).equal()
			} },
			[`&${t}-checked ${u}`]: { [`${u}-checked`]: {
				marginInlineStart: l(e.marginXXS).mul(-1).div(2).equal(),
				marginInlineEnd: l(e.marginXXS).div(2).equal()
			} }
		}
	} } };
}, C = (e) => {
	let { componentCls: t, handleSize: n, calc: r } = e;
	return { [t]: {
		[`${t}-loading-icon${e.iconCls}`]: {
			position: "relative",
			top: r(r(n).sub(e.fontSize)).div(2).equal(),
			color: e.switchLoadingIconColor,
			verticalAlign: "top"
		},
		[`&${t}-checked ${t}-loading-icon`]: { color: e.switchColor }
	} };
}, w = (e) => {
	let { componentCls: t, trackPadding: n, handleBg: r, handleShadow: i, handleSize: a, calc: s } = e, c = `${t}-handle`;
	return { [t]: {
		[c]: {
			position: "absolute",
			top: n,
			insetInlineStart: n,
			width: a,
			height: a,
			transition: `all ${e.switchDuration} ease-in-out`,
			...d(),
			"&::before": {
				position: "absolute",
				top: 0,
				insetInlineEnd: 0,
				bottom: 0,
				insetInlineStart: 0,
				backgroundColor: r,
				borderRadius: s(a).div(2).equal(),
				boxShadow: i,
				transition: `all ${e.switchDuration} ease-in-out`,
				content: "\"\"",
				...d()
			}
		},
		[`&${t}-checked ${c}`]: { insetInlineStart: `calc(100% - ${o(s(a).add(n).equal())})` },
		[`&:not(${t}-disabled):active`]: {
			[`${c}::before`]: {
				insetInlineEnd: e.switchHandleActiveInset,
				insetInlineStart: 0
			},
			[`&${t}-checked ${c}::before`]: {
				insetInlineEnd: 0,
				insetInlineStart: e.switchHandleActiveInset
			}
		}
	} };
}, T = (e) => {
	let { componentCls: t, trackHeight: n, trackPadding: r, innerMinMargin: i, innerMaxMargin: a, handleSize: s, switchDuration: c, calc: l } = e, u = `${t}-inner`, f = o(l(s).add(l(r).mul(2)).equal()), p = o(l(a).mul(2).equal());
	return { [t]: {
		[u]: {
			display: "block",
			overflow: "hidden",
			borderRadius: 100,
			height: "100%",
			paddingInlineStart: a,
			paddingInlineEnd: i,
			transition: ["padding-inline-start", "padding-inline-end"].map((e) => `${e} ${c} ease-in-out`).join(", "),
			...d(),
			[`${u}-checked, ${u}-unchecked`]: {
				display: "block",
				color: e.colorTextLightSolid,
				fontSize: e.fontSizeSM,
				pointerEvents: "none",
				minHeight: n,
				transition: ["margin-inline-start", "margin-inline-end"].map((e) => `${e} ${c} ease-in-out`).join(", "),
				...d()
			},
			[`${u}-checked`]: {
				marginInlineStart: `calc(-100% + ${f} - ${p})`,
				marginInlineEnd: `calc(100% - ${f} + ${p})`
			},
			[`${u}-unchecked`]: {
				marginTop: l(n).mul(-1).equal(),
				marginInlineStart: 0,
				marginInlineEnd: 0
			}
		},
		[`&${t}-checked ${u}`]: {
			paddingInlineStart: i,
			paddingInlineEnd: a,
			[`${u}-checked`]: {
				marginInlineStart: 0,
				marginInlineEnd: 0
			},
			[`${u}-unchecked`]: {
				marginInlineStart: `calc(100% - ${f} + ${p})`,
				marginInlineEnd: `calc(-100% + ${f} - ${p})`
			}
		},
		[`&:not(${t}-disabled):active`]: {
			[`&:not(${t}-checked) ${u}`]: { [`${u}-unchecked`]: {
				marginInlineStart: l(r).mul(2).equal(),
				marginInlineEnd: l(r).mul(-1).mul(2).equal()
			} },
			[`&${t}-checked ${u}`]: { [`${u}-checked`]: {
				marginInlineStart: l(r).mul(-1).mul(2).equal(),
				marginInlineEnd: l(r).mul(2).equal()
			} }
		}
	} };
}, E = (e) => {
	let { componentCls: t, trackHeight: n, trackMinWidth: r } = e;
	return { [t]: {
		...g(e),
		position: "relative",
		display: "inline-block",
		boxSizing: "border-box",
		minWidth: r,
		height: n,
		lineHeight: o(n),
		verticalAlign: "middle",
		background: e.colorTextQuaternary,
		border: "0",
		borderRadius: 100,
		cursor: "pointer",
		transition: `all ${e.motionDurationMid}`,
		userSelect: "none",
		...d(),
		[`&:hover:not(${t}-disabled)`]: { background: e.colorTextTertiary },
		...p(e),
		[`&${t}-checked`]: {
			background: e.switchColor,
			[`&:hover:not(${t}-disabled)`]: { background: e.colorPrimaryHover }
		},
		[`&${t}-loading, &${t}-disabled`]: {
			cursor: "not-allowed",
			opacity: e.switchDisabledOpacity,
			"*": {
				boxShadow: "none",
				cursor: "not-allowed"
			}
		},
		[`&${t}-rtl`]: { direction: "rtl" }
	} };
}, D = _("Switch", (e) => {
	let t = l(e, {
		switchDuration: e.motionDurationMid,
		switchColor: e.colorPrimary,
		switchDisabledOpacity: e.opacityLoading,
		switchLoadingIconSize: e.calc(e.fontSizeIcon).mul(.75).equal(),
		switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
		switchHandleActiveInset: "-30%"
	});
	return [
		E(t),
		T(t),
		w(t),
		C(t),
		S(t)
	];
}, (e) => {
	let { fontSize: t, lineHeight: n, controlHeight: r, colorWhite: i } = e, o = t * n, s = r / 2, c = o - 4, l = s - 4;
	return {
		trackHeight: o,
		trackHeightSM: s,
		trackMinWidth: c * 2 + 8,
		trackMinWidthSM: l * 2 + 4,
		trackPadding: 2,
		handleBg: i,
		handleSize: c,
		handleSizeSM: l,
		handleShadow: `0 2px 4px 0 ${new a("#00230b").setA(.2).toRgbString()}`,
		innerMinMargin: c / 2,
		innerMaxMargin: c + 2 + 4,
		innerMinMarginSM: l / 2,
		innerMaxMarginSM: l + 2 + 4
	};
}), O = /* @__PURE__ */ e({ default: () => k }), k = /* @__PURE__ */ y.forwardRef((e, t) => {
	let { prefixCls: n, size: i, disabled: a, loading: o, className: l, rootClassName: d, style: p, checked: g, value: _, defaultChecked: b, defaultValue: S, onChange: C, styles: w, classNames: T, ...E } = e, [O, k] = c(b ?? S ?? !1, g ?? _), { getPrefixCls: A, direction: j, className: M, style: N, classNames: P, styles: F } = f("switch"), I = y.useContext(h), L = (a ?? I) || o, R = A("switch", n), [z, B] = D(R), V = m(i), H = {
		...e,
		size: V,
		disabled: L
	}, [U, W] = u([P, T], [F, w], { props: H }), G = /*#__PURE__*/ y.createElement("div", {
		className: r(`${R}-handle`, U.indicator),
		style: W.indicator
	}, o && /*#__PURE__*/ y.createElement(s, { className: `${R}-loading-icon` })), K = r(M, {
		[`${R}-small`]: V === "small",
		[`${R}-loading`]: o,
		[`${R}-rtl`]: j === "rtl"
	}, l, d, U.root, z, B), q = {
		...W.root,
		...N,
		...p
	}, J = (...e) => {
		k(e[0]), C?.(...e);
	};
	return /*#__PURE__*/ y.createElement(v, {
		component: "Switch",
		disabled: L
	}, /*#__PURE__*/ y.createElement(x, {
		...E,
		classNames: U,
		styles: W,
		checked: O,
		onChange: J,
		prefixCls: R,
		className: K,
		style: q,
		disabled: L,
		ref: t,
		loadingIcon: G
	}));
});
k.__ANT_SWITCH = !0;
//#endregion
export { O as t };
