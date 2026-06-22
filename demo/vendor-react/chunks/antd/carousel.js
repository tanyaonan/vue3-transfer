globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, On as r, R as i, Tt as a, kt as o, wn as s } from "../shared/core.js";
import { Qn as c, Sr as l, pr as u, sr as d } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/carousel/style/index.js
var f = /* @__PURE__ */ t(r()), p = "--dot-duration", m = (e) => {
	let { componentCls: t, antCls: n } = e;
	return { [t]: {
		...u(e),
		".slick-slider": {
			position: "relative",
			display: "block",
			boxSizing: "border-box",
			touchAction: "pan-y",
			WebkitTouchCallout: "none",
			WebkitTapHighlightColor: "transparent",
			".slick-track, .slick-list": {
				transform: "translate3d(0, 0, 0)",
				touchAction: "pan-y"
			}
		},
		".slick-list": {
			position: "relative",
			display: "block",
			margin: 0,
			padding: 0,
			overflow: "hidden",
			"&:focus": { outline: "none" },
			"&.dragging": { cursor: "pointer" },
			".slick-slide": {
				pointerEvents: "none",
				[`input${n}-radio-input, input${n}-checkbox-input`]: { visibility: "hidden" },
				"&.slick-active": {
					pointerEvents: "auto",
					[`input${n}-radio-input, input${n}-checkbox-input`]: { visibility: "visible" }
				},
				"> div > div": { verticalAlign: "bottom" }
			}
		},
		".slick-track": {
			position: "relative",
			top: 0,
			insetInlineStart: 0,
			display: "block",
			"&::before, &::after": {
				display: "table",
				content: "\"\""
			},
			"&::after": { clear: "both" }
		},
		".slick-slide": {
			display: "none",
			float: "left",
			height: "100%",
			minHeight: 1,
			img: { display: "block" },
			"&.dragging img": { pointerEvents: "none" }
		},
		".slick-initialized .slick-slide": { display: "block" },
		".slick-vertical .slick-slide": {
			display: "block",
			height: "auto"
		}
	} };
}, h = (e) => {
	let { componentCls: t, motionDurationSlow: n, arrowSize: r, arrowOffset: i } = e, a = e.calc(r).div(Math.SQRT2).equal();
	return { [t]: {
		".slick-prev, .slick-next": {
			position: "absolute",
			top: "50%",
			width: r,
			height: r,
			transform: "translateY(-50%)",
			color: "#fff",
			opacity: .4,
			background: "transparent",
			padding: 0,
			lineHeight: 0,
			border: 0,
			outline: "none",
			cursor: "pointer",
			zIndex: 1,
			transition: `opacity ${n}`,
			"&:hover, &:focus": { opacity: 1 },
			"&.slick-disabled": {
				pointerEvents: "none",
				opacity: 0
			},
			"&::after": {
				boxSizing: "border-box",
				position: "absolute",
				top: e.calc(r).sub(a).div(2).equal(),
				insetInlineStart: e.calc(r).sub(a).div(2).equal(),
				display: "inline-block",
				width: a,
				height: a,
				border: "0 solid currentcolor",
				borderInlineStartWidth: 2,
				borderBlockStartWidth: 2,
				borderRadius: 1,
				content: "\"\""
			}
		},
		".slick-prev": {
			insetInlineStart: i,
			"&::after": { transform: "rotate(-45deg)" }
		},
		".slick-next": {
			insetInlineEnd: i,
			"&::after": { transform: "rotate(135deg)" }
		}
	} };
}, g = (e) => {
	let { componentCls: t, dotOffset: n, dotWidth: r, dotHeight: i, dotGap: o, colorBgContainer: s, motionDurationSlow: c } = e, l = new a(`${e.prefixCls}-dot-animation`, {
		from: { width: 0 },
		to: { width: e.dotActiveWidth }
	});
	return { [t]: { ".slick-dots": {
		position: "absolute",
		insetInlineEnd: 0,
		bottom: 0,
		insetInlineStart: 0,
		zIndex: 15,
		display: "flex !important",
		justifyContent: "center",
		paddingInlineStart: 0,
		margin: 0,
		listStyle: "none",
		"&-bottom": { bottom: n },
		"&-top": {
			top: n,
			bottom: "auto"
		},
		li: {
			position: "relative",
			display: "inline-block",
			flex: "0 1 auto",
			boxSizing: "content-box",
			width: r,
			height: i,
			marginInline: o,
			padding: 0,
			textAlign: "center",
			textIndent: -999,
			verticalAlign: "top",
			transition: `all ${c}`,
			borderRadius: i,
			overflow: "hidden",
			"&::after": {
				display: "block",
				position: "absolute",
				top: 0,
				insetInlineStart: 0,
				width: 0,
				height: i,
				content: "\"\"",
				background: "transparent",
				borderRadius: i,
				opacity: 1,
				outline: "none",
				cursor: "pointer",
				overflow: "hidden"
			},
			button: {
				position: "relative",
				display: "block",
				width: "100%",
				height: i,
				padding: 0,
				color: "transparent",
				fontSize: 0,
				background: s,
				border: 0,
				borderRadius: i,
				outline: "none",
				cursor: "pointer",
				opacity: .2,
				transition: `all ${c}`,
				overflow: "hidden",
				"&:hover": { opacity: .75 },
				"&::after": {
					position: "absolute",
					inset: e.calc(o).mul(-1).equal(),
					content: "\"\""
				}
			},
			"&.slick-active": {
				width: e.dotActiveWidth,
				position: "relative",
				"&:hover": { opacity: 1 },
				"&::after": {
					background: s,
					animationName: l,
					animationDuration: `var(${p})`,
					animationTimingFunction: "ease-out",
					animationFillMode: "forwards"
				}
			}
		}
	} } };
}, _ = (e) => {
	let { componentCls: t, dotOffset: n, arrowOffset: r, marginXXS: i } = e, s = new a(`${e.prefixCls}-dot-vertical-animation`, {
		from: { height: 0 },
		to: { height: e.dotActiveWidth }
	}), c = {
		width: e.dotHeight,
		height: e.dotWidth
	};
	return { [`${t}-vertical`]: {
		".slick-prev, .slick-next": {
			insetInlineStart: "50%",
			marginBlockStart: "unset",
			transform: "translateX(-50%)"
		},
		".slick-prev": {
			insetBlockStart: r,
			insetInlineStart: "50%",
			"&::after": { transform: "rotate(45deg)" }
		},
		".slick-next": {
			insetBlockStart: "auto",
			insetBlockEnd: r,
			"&::after": { transform: "rotate(-135deg)" }
		},
		".slick-dots": {
			top: "50%",
			bottom: "auto",
			flexDirection: "column",
			width: e.dotHeight,
			height: "auto",
			margin: 0,
			transform: "translateY(-50%)",
			"&-start": {
				insetInlineEnd: "auto",
				insetInlineStart: n
			},
			"&-end": {
				insetInlineEnd: n,
				insetInlineStart: "auto"
			},
			li: {
				...c,
				margin: `${o(i)} 0`,
				verticalAlign: "baseline",
				button: c,
				"&::after": {
					...c,
					height: 0
				},
				"&.slick-active": {
					...c,
					height: e.dotActiveWidth,
					button: {
						...c,
						height: e.dotActiveWidth
					},
					"&::after": {
						...c,
						animationName: s,
						animationDuration: `var(${p})`,
						animationTimingFunction: "ease-out",
						animationFillMode: "forwards"
					}
				}
			}
		}
	} };
}, v = (e) => {
	let { componentCls: t } = e;
	return [{ [`${t}-rtl`]: { direction: "rtl" } }, { [`${t}-vertical`]: { ".slick-dots": { [`${t}-rtl&`]: { flexDirection: "column" } } } }];
}, y = d("Carousel", (e) => [
	m(e),
	h(e),
	g(e),
	_(e),
	v(e)
], (e) => ({
	arrowSize: 16,
	arrowOffset: e.marginXS,
	dotWidth: 16,
	dotHeight: 3,
	dotGap: e.marginXXS,
	dotOffset: 12,
	dotWidthActive: 24,
	dotActiveWidth: 24
}), { deprecatedTokens: [["dotWidthActive", "dotActiveWidth"]] }), b = /* @__PURE__ */ e({ default: () => C }), x = "slick-dots", S = ({ currentSlide: e, slideCount: t, ...n }) => /*#__PURE__*/ f.createElement("button", {
	type: "button",
	...n
}), C = /*#__PURE__*/ f.forwardRef((e, t) => {
	let { dots: r = !0, arrows: a = !1, prevArrow: o, nextArrow: u, draggable: d = !1, waitForAnimate: m = !1, dotPosition: h, dotPlacement: g, vertical: _, rootClassName: v, className: b, style: C, id: w, autoplay: T = !1, autoplaySpeed: E = 3e3, rtl: D, ...O } = e, k = f.useMemo(() => {
		let e = g ?? h ?? "bottom";
		switch (e) {
			case "left": return "start";
			case "right": return "end";
			default: return e;
		}
	}, [h, g]), A = _ ?? (k === "start" || k === "end"), { getPrefixCls: j, direction: M, className: N, style: P } = l("carousel"), F = f.useRef(null), I = (e, t = !1) => {
		F.current.slickGoTo(e, t);
	};
	f.useImperativeHandle(t, () => ({
		goTo: I,
		autoPlay: F.current.innerSlider.autoPlay,
		innerSlider: F.current.innerSlider,
		prev: F.current.slickPrev,
		next: F.current.slickNext
	}), [F.current]);
	let { children: L, initialSlide: R = 0 } = e, z = s(L).length, B = (D ?? M === "rtl") && !_;
	f.useEffect(() => {
		z > 0 && I(B ? z - R - 1 : R, !1);
	}, [
		z,
		R,
		B
	]);
	let V = {
		vertical: A,
		className: n(b, N),
		style: {
			...P,
			...C
		},
		autoplay: !!T,
		...O
	};
	V.effect === "fade" && (V.fade = !0);
	let H = j("carousel", V.prefixCls), U = !!r, W = n(x, `${x}-${k}`, typeof r == "boolean" ? !1 : r?.className), [G, K] = y(H), q = n(H, {
		[`${H}-rtl`]: B,
		[`${H}-vertical`]: V.vertical
	}, G, K, v), J = T && c(T) && T.dotDuration ? { [p]: `${E}ms` } : {};
	return /*#__PURE__*/ f.createElement("div", {
		className: q,
		id: w,
		style: J
	}, /*#__PURE__*/ f.createElement(i, {
		ref: F,
		...V,
		dots: U,
		dotsClass: W,
		arrows: a,
		prevArrow: o ?? /*#__PURE__*/ f.createElement(S, { "aria-label": B ? "next" : "prev" }),
		nextArrow: u ?? /*#__PURE__*/ f.createElement(S, { "aria-label": B ? "prev" : "next" }),
		draggable: d,
		verticalSwiping: A,
		autoplaySpeed: E,
		waitForAnimate: m,
		rtl: B
	}));
});
//#endregion
export { b as t };
