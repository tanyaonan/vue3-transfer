globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $t as n, A as r, Bt as i, D as a, E as o, Gt as s, Jt as c, Nt as l, O as u, On as d, Tt as f, X as p, _t as m, ct as h, fn as g, k as _, kt as v, ln as y, nt as b, sn as x, yt as S } from "../shared/core.js";
import { In as C, Jn as w, Qn as T, Sr as E, Wn as D, Zn as O, dr as k, fn as A, nr as j, rn as M, sr as N, ur as P, vn as F } from "../shared/antd-core.js";
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/context.js
var I = /* @__PURE__ */ t(d()), L = /*#__PURE__*/ I.createContext(null);
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/util.js
function R(e) {
	return new Promise((t) => {
		if (!e) {
			t(!1);
			return;
		}
		let n = document.createElement("img");
		n.onerror = () => t(!1), n.onload = () => t(!0), n.src = e;
	});
}
function z() {
	return {
		width: document.documentElement.clientWidth,
		height: window.innerHeight || document.documentElement.clientHeight
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/hooks/useImageTransform.js
var B = {
	x: 0,
	y: 0,
	rotate: 0,
	scale: 1,
	flipX: !1,
	flipY: !1
};
function ee(e, t, n, r) {
	let a = (0, I.useRef)(null), o = (0, I.useRef)([]), [c, l] = (0, I.useState)(B), u = (e) => {
		l(B), s(B, c) || r?.({
			transform: B,
			action: e
		});
	}, d = (e, t) => {
		a.current === null && (o.current = [], a.current = i(() => {
			l((e) => {
				let n = e;
				return o.current.forEach((e) => {
					n = {
						...n,
						...e
					};
				}), a.current = null, r?.({
					transform: n,
					action: t
				}), n;
			});
		})), o.current.push({
			...c,
			...e
		});
	};
	return {
		transform: c,
		resetTransform: u,
		updateTransform: d,
		dispatchZoomChange: (r, i, a, o, s) => {
			let { width: l, height: u, offsetWidth: f, offsetHeight: p, offsetLeft: m, offsetTop: h } = e.current, g = r, _ = c.scale * r;
			_ > n ? (_ = n, g = n / c.scale) : _ < t && (_ = s ? _ : t, g = _ / c.scale);
			let v = a ?? innerWidth / 2, y = o ?? innerHeight / 2, b = g - 1, x = b * l * .5, S = b * u * .5, C = b * (v - c.x - m), w = b * (y - c.y - h), T = c.x - (C - x), E = c.y - (w - S);
			if (r < 1 && _ === 1) {
				let e = f * _, t = p * _, { width: n, height: r } = z();
				e <= n && t <= r && (T = 0, E = 0);
			}
			d({
				x: T,
				y: E,
				scale: _
			}, i);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/getFixScaleEleTransPosition.js
function V(e, t, n, r) {
	let i = t + n, a = (n - r) / 2;
	if (n > r) {
		if (t > 0) return { [e]: a };
		if (t < 0 && i < r) return { [e]: -a };
	} else if (t < 0 || i > r) return { [e]: t < 0 ? a : -a };
	return {};
}
function H(e, t, n, r) {
	let { width: i, height: a } = z(), o = null;
	return e <= i && t <= a ? o = {
		x: 0,
		y: 0
	} : (e > i || t > a) && (o = {
		...V("x", n, e, i),
		...V("y", r, t, a)
	}), o;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/hooks/useMouseEvent.js
function U(e, t, n, r, i, a, o) {
	let { rotate: s, scale: c, x: l, y: u } = i, [d, f] = (0, I.useState)(!1), p = (0, I.useRef)({
		diffX: 0,
		diffY: 0,
		transformX: 0,
		transformY: 0
	}), m = (e) => {
		!t || e.button !== 0 || (e.preventDefault(), e.stopPropagation(), p.current = {
			diffX: e.pageX - l,
			diffY: e.pageY - u,
			transformX: l,
			transformY: u
		}, f(!0));
	}, h = (e) => {
		n && d && a({
			x: e.pageX - p.current.diffX,
			y: e.pageY - p.current.diffY
		}, "move");
	}, g = () => {
		if (n && d) {
			f(!1);
			let { transformX: t, transformY: n } = p.current;
			if (!(l !== t && u !== n)) return;
			let r = e.current.offsetWidth * c, i = e.current.offsetHeight * c, { left: o, top: d } = e.current.getBoundingClientRect(), m = s % 180 != 0, h = H(m ? i : r, m ? r : i, o, d);
			h && a({ ...h }, "dragRebound");
		}
	};
	return (0, I.useEffect)(() => {
		if (t) {
			window.addEventListener("mouseup", g, !1), window.addEventListener("mousemove", h, !1);
			try {
				/* istanbul ignore next */
				window.top !== window.self && (window.top.addEventListener("mouseup", g, !1), window.top.addEventListener("mousemove", h, !1));
			} catch (e) {
				/* istanbul ignore next */
				`${e}`;
			}
		}
		return () => {
			window.removeEventListener("mouseup", g), window.removeEventListener("mousemove", h);
			/* istanbul ignore next */
			try {
				window.top?.removeEventListener("mouseup", g), window.top?.removeEventListener("mousemove", h);
			} catch {}
		};
	}, [
		n,
		d,
		l,
		u,
		s,
		t
	]), {
		isMoving: d,
		onMouseDown: m,
		onMouseMove: h,
		onMouseUp: g,
		onWheel: (e) => {
			if (!n || e.deltaY == 0) return;
			let t = Math.abs(e.deltaY / 100), i = 1 + Math.min(t, 1) * r;
			e.deltaY > 0 && (i = 1 / i), o(i, "wheel", e.clientX, e.clientY);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/hooks/useStatus.js
function W({ src: e, isCustomPlaceholder: t, fallback: n }) {
	let [r, i] = (0, I.useState)(t ? "loading" : "normal"), a = (0, I.useRef)(!1), o = r === "error";
	(0, I.useEffect)(() => {
		let t = !0;
		return R(e).then((e) => {
			!e && t && i("error");
		}), () => {
			t = !1;
		};
	}, [e]), (0, I.useEffect)(() => {
		t && !a.current ? i("loading") : o && i("normal");
	}, [e]);
	let s = () => {
		i("normal");
	};
	return [
		(e) => {
			a.current = !1, r === "loading" && e?.complete && (e.naturalWidth || e.naturalHeight) && (a.current = !0, s());
		},
		o && n ? { src: n } : {
			onLoad: s,
			src: e
		},
		r
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/hooks/useTouchEvent.js
function G(e, t) {
	let n = e.x - t.x, r = e.y - t.y;
	return Math.hypot(n, r);
}
function K(e, t, n, r) {
	let i = G(e, n), a = G(t, r);
	if (i === 0 && a === 0) return [e.x, e.y];
	let o = i / (i + a);
	return [e.x + o * (t.x - e.x), e.y + o * (t.y - e.y)];
}
function te(e, t, n, r, i, a, o) {
	let { rotate: s, scale: c, x: l, y: u } = i, [d, f] = (0, I.useState)(!1), p = (0, I.useRef)({
		point1: {
			x: 0,
			y: 0
		},
		point2: {
			x: 0,
			y: 0
		},
		eventType: "none"
	}), m = (e) => {
		p.current = {
			...p.current,
			...e
		};
	};
	return (0, I.useEffect)(() => {
		let e = (e) => {
			e.preventDefault();
		};
		return n && t && window.addEventListener("touchmove", e, { passive: !1 }), () => {
			window.removeEventListener("touchmove", e);
		};
	}, [n, t]), {
		isTouching: d,
		onTouchStart: (e) => {
			if (!t) return;
			e.stopPropagation(), f(!0);
			let { touches: n = [] } = e;
			n.length > 1 ? m({
				point1: {
					x: n[0].clientX,
					y: n[0].clientY
				},
				point2: {
					x: n[1].clientX,
					y: n[1].clientY
				},
				eventType: "touchZoom"
			}) : m({
				point1: {
					x: n[0].clientX - l,
					y: n[0].clientY - u
				},
				eventType: "move"
			});
		},
		onTouchMove: (e) => {
			let { touches: t = [] } = e, { point1: n, point2: r, eventType: i } = p.current;
			if (t.length > 1 && i === "touchZoom") {
				let e = {
					x: t[0].clientX,
					y: t[0].clientY
				}, i = {
					x: t[1].clientX,
					y: t[1].clientY
				}, [a, s] = K(n, r, e, i);
				o(G(e, i) / G(n, r), "touchZoom", a, s, !0), m({
					point1: e,
					point2: i,
					eventType: "touchZoom"
				});
			} else i === "move" && (a({
				x: t[0].clientX - n.x,
				y: t[0].clientY - n.y
			}, "move"), m({ eventType: "move" }));
		},
		onTouchEnd: () => {
			if (!n) return;
			if (d && f(!1), m({ eventType: "none" }), r > c) return a({
				x: 0,
				y: 0,
				scale: r
			}, "touchZoom");
			let t = e.current.offsetWidth * c, i = e.current.offsetHeight * c, { left: o, top: l } = e.current.getBoundingClientRect(), u = s % 180 != 0, p = H(u ? i : t, u ? t : i, o, l);
			p && a({ ...p }, "dragRebound");
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/Preview/CloseBtn.js
function ne(e) {
	let { prefixCls: t, icon: n, onClick: r, className: i, style: a } = e;
	return /*#__PURE__*/ I.createElement("button", {
		className: l(`${t}-close`, i),
		style: a,
		onClick: r
	}, n);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/Preview/Footer.js
function re(e) {
	let { prefixCls: t, showProgress: n, current: r, count: i, showSwitch: a, classNames: o, styles: s, icons: c, image: u, transform: d, countRender: f, actionsRender: p, scale: m, minScale: h, maxScale: g, onActive: _, onFlipY: v, onFlipX: y, onRotateLeft: b, onRotateRight: x, onZoomOut: S, onZoomIn: C, onClose: w, onReset: T } = e, { left: E, right: D, prev: O, next: k, flipY: A, flipX: j, rotateLeft: M, rotateRight: N, zoomOut: P, zoomIn: F } = c, L = n && /*#__PURE__*/ I.createElement("div", { className: `${t}-progress` }, f ? f(r + 1, i) : /*#__PURE__*/ I.createElement("bdi", null, `${r + 1} / ${i}`)), R = `${t}-actions-action`, z = ({ type: e, disabled: t, onClick: n, icon: r }) => /*#__PURE__*/ I.createElement("button", {
		type: "button",
		key: e,
		className: l(R, `${R}-${e}`, { [`${R}-disabled`]: !!t }),
		onClick: n,
		disabled: !!t,
		"aria-label": e
	}, r), B = a ? z({
		icon: O ?? E,
		onClick: () => _(-1),
		type: "prev",
		disabled: r === 0
	}) : void 0, ee = a ? z({
		icon: k ?? D,
		onClick: () => _(1),
		type: "next",
		disabled: r === i - 1
	}) : void 0, V = z({
		icon: A,
		onClick: v,
		type: "flipY"
	}), H = z({
		icon: j,
		onClick: y,
		type: "flipX"
	}), U = z({
		icon: M,
		onClick: b,
		type: "rotateLeft"
	}), W = z({
		icon: N,
		onClick: x,
		type: "rotateRight"
	}), G = z({
		icon: P,
		onClick: S,
		type: "zoomOut",
		disabled: m <= h
	}), K = z({
		icon: F,
		onClick: C,
		type: "zoomIn",
		disabled: m === g
	}), te = /*#__PURE__*/ I.createElement("div", {
		className: l(`${t}-actions`, o.actions),
		style: s.actions
	}, V, H, U, W, G, K);
	return /*#__PURE__*/ I.createElement("div", {
		className: l(`${t}-footer`, o.footer),
		style: s.footer
	}, L, p ? p(te, {
		icons: {
			prevIcon: B,
			nextIcon: ee,
			flipYIcon: V,
			flipXIcon: H,
			rotateLeftIcon: U,
			rotateRightIcon: W,
			zoomOutIcon: G,
			zoomInIcon: K
		},
		actions: {
			onActive: _,
			onFlipY: v,
			onFlipX: y,
			onRotateLeft: b,
			onRotateRight: x,
			onZoomOut: S,
			onZoomIn: C,
			onReset: T,
			onClose: w
		},
		transform: d,
		current: r,
		total: i,
		image: u
	}) : te);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/Preview/PrevNext.js
function ie(e) {
	let { prefixCls: t, onActive: n, current: r, count: i, icons: { left: a, right: o, prev: s, next: c } } = e, u = `${t}-switch`, d = r === 0, f = r === i - 1;
	return /*#__PURE__*/ I.createElement(I.Fragment, null, /*#__PURE__*/ I.createElement("button", {
		className: l(u, `${u}-prev`, { [`${u}-disabled`]: d }),
		onClick: () => n(-1),
		disabled: d
	}, s ?? a), /*#__PURE__*/ I.createElement("button", {
		type: "button",
		className: l(u, `${u}-next`, { [`${u}-disabled`]: f }),
		onClick: () => n(1),
		disabled: f
	}, c ?? o));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/Preview/index.js
function ae() {
	return ae = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ae.apply(this, arguments);
}
var oe = ({ fallback: e, src: t, imgRef: n, ...r }) => {
	let [i, a] = W({
		src: t,
		fallback: e
	});
	return /*#__PURE__*/ I.createElement("img", ae({ ref: (e) => {
		n.current = e, i(e);
	} }, r, a));
}, se = (e) => {
	let { prefixCls: t, rootClassName: r, src: i, alt: a, imageInfo: o, fallback: s, movable: u = !0, onClose: d, open: f, afterOpenChange: p, maskClosable: m = !0, icons: h = {}, closeIcon: _, getContainer: v, current: b = 0, count: x = 1, countRender: S, scaleStep: w = .5, minScale: T = 1, maxScale: E = 50, motionName: D = "fade", imageRender: O, imgCommonProps: k, actionsRender: A, onTransform: M, onChange: N, classNames: P = {}, styles: F = {}, mousePosition: R, zIndex: z, focusTrap: B = !0 } = e, V = (0, I.useRef)(), H = (0, I.useRef)(null), W = (0, I.useRef)(null), G = (0, I.useContext)(L), K = G && x > 1, se = G && x >= 1, [q, ce] = (0, I.useState)(!0), { transform: J, resetTransform: Y, updateTransform: X, dispatchZoomChange: Z } = ee(V, T, E, M), { isMoving: Q, onMouseDown: le, onWheel: ue } = U(V, u, f, w, J, X, Z), { isTouching: de, onTouchStart: fe, onTouchMove: pe, onTouchEnd: me } = te(V, u, f, T, J, X, Z), { rotate: $, scale: he } = J;
	(0, I.useEffect)(() => {
		q || ce(!0);
	}, [q]), (0, I.useEffect)(() => {
		f || Y("close");
	}, [f]);
	let ge = /*#__PURE__*/ I.createElement(oe, ae({}, k, {
		width: e.width,
		height: e.height,
		imgRef: V,
		className: `${t}-img`,
		alt: a,
		style: {
			transform: `translate3d(${J.x}px, ${J.y}px, 0) scale3d(${J.flipX ? "-" : ""}${he}, ${J.flipY ? "-" : ""}${he}, 1) rotate(${$}deg)`,
			transitionDuration: (!q || de) && "0s"
		},
		fallback: s,
		src: i,
		onWheel: ue,
		onMouseDown: le,
		onDoubleClick: (e) => {
			f && (he === 1 ? Z(1 + w, "doubleClick", e.clientX, e.clientY) : X({
				x: 0,
				y: 0,
				scale: 1
			}, "doubleClick"));
		},
		onTouchStart: fe,
		onTouchMove: pe,
		onTouchEnd: me,
		onTouchCancel: me
	})), _e = {
		url: i,
		alt: a,
		...o
	}, ve = () => {
		Z(1 + w, "zoomIn");
	}, ye = () => {
		Z(1 / (1 + w), "zoomOut");
	}, be = () => {
		X({ rotate: $ + 90 }, "rotateRight");
	}, xe = () => {
		X({ rotate: $ - 90 }, "rotateLeft");
	}, Se = () => {
		X({ flipX: !J.flipX }, "flipX");
	}, Ce = () => {
		X({ flipY: !J.flipY }, "flipY");
	}, we = () => {
		Y("reset");
	}, Te = (e) => {
		let t = b + e;
		t >= 0 && t <= x - 1 && (ce(!1), Y(e < 0 ? "prev" : "next"), N?.(t, b));
	}, Ee = g((e) => {
		if (f) {
			let { keyCode: t } = e;
			K && (t === c.LEFT ? Te(-1) : t === c.RIGHT && Te(1));
		}
	});
	(0, I.useEffect)(() => {
		if (f) return window.addEventListener("keydown", Ee), () => {
			window.removeEventListener("keydown", Ee);
		};
	}, [f]);
	let [De, Oe] = (0, I.useState)(!1);
	I.useEffect(() => {
		f && Oe(!0);
	}, [f]);
	let ke = (e) => {
		e || (Oe(!1), W.current?.focus?.(), W.current = null), p?.(e);
	}, [Ae, je] = (0, I.useState)(!1);
	y(() => {
		f && je(!0);
	}, [f]);
	let Me = ({ top: e }) => {
		e && d?.();
	};
	y(() => {
		f && (W.current = document.activeElement);
	}, [f]), n(B && f && Ae, () => H.current);
	let Ne = { ...F.body };
	return R && (Ne.transformOrigin = `${R.x}px ${R.y}px`), /*#__PURE__*/ I.createElement(C, {
		open: Ae && f,
		autoDestroy: !1,
		getContainer: v,
		autoLock: De,
		onEsc: Me
	}, /*#__PURE__*/ I.createElement(j, {
		motionName: D,
		visible: Ae && f,
		motionAppear: !0,
		motionEnter: !0,
		motionLeave: !0,
		onVisibleChanged: ke
	}, ({ className: e, style: n }) => {
		let i = {
			...F.root,
			...n
		};
		return z && (i.zIndex = z), /*#__PURE__*/ I.createElement("div", {
			ref: H,
			className: l(t, r, P.root, e, {
				[`${t}-movable`]: u,
				[`${t}-moving`]: Q
			}),
			style: i,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": a,
			tabIndex: -1
		}, /*#__PURE__*/ I.createElement("div", {
			className: l(`${t}-mask`, P.mask),
			style: F.mask,
			onClick: m ? d : void 0
		}), /*#__PURE__*/ I.createElement("div", {
			className: l(`${t}-body`, P.body),
			style: Ne
		}, O ? O(ge, {
			transform: J,
			image: _e,
			...G ? { current: b } : {}
		}) : ge), _ !== !1 && _ !== null && /*#__PURE__*/ I.createElement(ne, {
			prefixCls: t,
			icon: _ === !0 ? h.close : _ || h.close,
			onClick: d,
			className: P.close,
			style: F.close
		}), K && /*#__PURE__*/ I.createElement(ie, {
			prefixCls: t,
			current: b,
			count: x,
			icons: h,
			onActive: Te
		}), /*#__PURE__*/ I.createElement(re, {
			prefixCls: t,
			showProgress: se,
			current: b,
			count: x,
			showSwitch: K,
			classNames: P,
			styles: F,
			image: _e,
			transform: J,
			icons: h,
			countRender: S,
			actionsRender: A,
			scale: he,
			minScale: T,
			maxScale: E,
			onActive: Te,
			onFlipY: Ce,
			onFlipX: Se,
			onRotateLeft: xe,
			onRotateRight: be,
			onZoomOut: ye,
			onZoomIn: ve,
			onClose: d,
			onReset: we
		}));
	}));
}, q = [
	"crossOrigin",
	"decoding",
	"draggable",
	"loading",
	"referrerPolicy",
	"sizes",
	"srcSet",
	"useMap",
	"alt",
	"fetchPriority"
];
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/hooks/usePreviewItems.js
function ce(e) {
	let [t, n] = I.useState({}), r = I.useCallback((e, t) => (n((n) => ({
		...n,
		[e]: t
	})), () => {
		n((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}), []);
	return [
		I.useMemo(() => e ? e.map((e) => {
			if (typeof e == "string") return { data: { src: e } };
			let t = {};
			return Object.keys(e).forEach((n) => {
				["src", ...q].includes(n) && (t[n] = e[n]);
			}), { data: t };
		}) : Object.keys(t).reduce((e, n) => {
			let { canPreview: r, data: i } = t[n];
			return r && e.push({
				data: i,
				id: n
			}), e;
		}, []), [e, t]),
		r,
		!!e
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/PreviewGroup.js
function J() {
	return J = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, J.apply(this, arguments);
}
var Y = ({ previewPrefixCls: e = "rc-image-preview", classNames: t, styles: n, children: r, icons: i = {}, items: a, preview: o, fallback: s }) => {
	let { open: c, onOpenChange: l, current: u, onChange: d, ...f } = o && typeof o == "object" ? o : {}, [p, m, h] = ce(a), [_, v] = x(0, u), [y, b] = (0, I.useState)(!1), { src: S, ...C } = p[_]?.data || {}, [w, T] = x(!!c, c), E = g((e) => {
		T(e), e !== w && l?.(e, { current: _ });
	}), [D, O] = (0, I.useState)(null), k = I.useCallback((e, t, n, r) => {
		let i = h ? p.findIndex((e) => e.data.src === t) : p.findIndex((t) => t.id === e);
		v(i < 0 ? 0 : i), E(!0), O({
			x: n,
			y: r
		}), b(!0);
	}, [p, h]);
	I.useEffect(() => {
		w ? y || v(0) : b(!1);
	}, [w]);
	let A = (e, t) => {
		v(e), d?.(e, t);
	}, j = () => {
		E(!1), O(null);
	}, M = I.useMemo(() => ({
		register: m,
		onPreview: k
	}), [m, k]);
	return /*#__PURE__*/ I.createElement(L.Provider, { value: M }, r, /*#__PURE__*/ I.createElement(se, J({
		"aria-hidden": !w,
		open: w,
		prefixCls: e,
		onClose: j,
		mousePosition: D,
		imgCommonProps: C,
		src: S,
		fallback: s,
		icons: i,
		current: _,
		count: p.length,
		onChange: A
	}, f, {
		classNames: t?.popup,
		styles: n?.popup
	})));
}, X = 0;
function Z(e, t) {
	let [n] = I.useState(() => (X += 1, String(X))), r = I.useContext(L), i = {
		data: t,
		canPreview: e
	};
	return I.useEffect(() => {
		if (r) return r.register(n, i);
	}, []), I.useEffect(() => {
		r && r.register(n, i);
	}, [e, t]), n;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/Image.js
function Q() {
	return Q = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Q.apply(this, arguments);
}
var le = (e) => {
	let { prefixCls: t = "rc-image", previewPrefixCls: n = `${t}-preview`, rootClassName: r, className: i, style: a, classNames: o = {}, styles: s = {}, width: c, height: u, src: d, alt: f, placeholder: p, fallback: m, preview: h = !0, onClick: g, onError: _, onKeyDown: v, ...y } = e, b = (0, I.useContext)(L), S = !!h, { src: C, open: w, onOpenChange: T, cover: E, rootClassName: D, ...O } = h && typeof h == "object" ? h : {}, k = typeof E == "object" && E.placement && E.placement || "center", A = typeof E == "object" && E.coverNode ? E.coverNode : E, [j, M] = x(!!w, w), [N, P] = (0, I.useState)(null), F = (e) => {
		M(e), T?.(e);
	}, R = () => {
		F(!1);
	}, z = p && p !== !0, B = C ?? d, [ee, V, H] = W({
		src: d,
		isCustomPlaceholder: z,
		fallback: m
	}), U = (0, I.useMemo)(() => {
		let t = {};
		return q.forEach((n) => {
			e[n] !== void 0 && (t[n] = e[n]);
		}), t;
	}, q.map((t) => e[t])), G = Z(S, (0, I.useMemo)(() => ({
		...U,
		src: B
	}), [B, U])), K = (e) => {
		let t = e.target.getBoundingClientRect(), n = t.x + t.width / 2, r = t.y + t.height / 2;
		b ? b.onPreview(G, B, n, r) : (P({
			x: n,
			y: r
		}), F(!0)), g?.(e);
	}, te = (e) => {
		if (v?.(e), S && (e.key === "Enter" || e.key === " ")) {
			e.preventDefault();
			let t = e.target.getBoundingClientRect(), n = t.x + t.width / 2, r = t.y + t.height / 2;
			b ? b.onPreview(G, B, n, r) : (P({
				x: n,
				y: r
			}), F(!0));
		}
	};
	return /*#__PURE__*/ I.createElement(I.Fragment, null, /*#__PURE__*/ I.createElement("div", Q({}, y, {
		className: l(t, r, o.root, { [`${t}-error`]: H === "error" }),
		onClick: S ? K : g,
		role: S ? "button" : y.role,
		tabIndex: S && y.tabIndex == null ? 0 : y.tabIndex,
		"aria-label": S ? y["aria-label"] ?? f : y["aria-label"],
		onKeyDown: te,
		style: {
			width: c,
			height: u,
			...s.root
		}
	}), /*#__PURE__*/ I.createElement("img", Q({}, U, {
		className: l(`${t}-img`, { [`${t}-img-placeholder`]: p === !0 }, o.image, i),
		style: {
			height: u,
			...s.image,
			...a
		},
		ref: ee
	}, V, {
		width: c,
		height: u,
		onError: _
	})), H === "loading" && /*#__PURE__*/ I.createElement("div", {
		"aria-hidden": "true",
		className: `${t}-placeholder`
	}, p), E !== !1 && S && /*#__PURE__*/ I.createElement("div", {
		className: l(`${t}-cover`, o.cover, `${t}-cover-${k}`),
		style: {
			display: a?.display === "none" ? "none" : void 0,
			...s.cover
		}
	}, A)), !b && S && /*#__PURE__*/ I.createElement(se, Q({
		"aria-hidden": !j,
		open: j,
		prefixCls: n,
		onClose: R,
		mousePosition: N,
		src: B,
		alt: f,
		imageInfo: {
			width: c,
			height: u
		},
		fallback: m,
		imgCommonProps: U
	}, O, {
		classNames: o?.popup,
		styles: s?.popup,
		rootClassName: l(D, r)
	})));
};
le.PreviewGroup = Y;
//#endregion
//#region node_modules/.pnpm/@rc-component+image@1.9.0_r_b47fcbdea030226382d74cd46d04efe4/node_modules/@rc-component/image/es/index.js
var ue = le, de = (e, t, n, r, i, a, o) => {
	let [s] = A("ImagePreview", e?.zIndex), [c, u, d] = F(e?.mask, t?.mask, `${n}-preview`);
	return I.useMemo(() => {
		if (!e) return e;
		let { cover: f, getContainer: p, closeIcon: m, rootClassName: h } = e, { closeIcon: g } = t ?? {};
		return {
			motionName: M(`${n}-preview`, "fade"),
			...e,
			...o ? { cover: f ?? o } : {},
			icons: a,
			getContainer: p ?? i,
			zIndex: s,
			closeIcon: m ?? g,
			rootClassName: l(r, h),
			mask: c,
			maskClosable: d,
			blurClassName: u.mask
		};
	}, [
		e,
		t,
		n,
		r,
		i,
		o,
		a,
		s,
		c,
		d,
		u
	]);
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/image/hooks/usePlaceholderConfig.js
function fe(e) {
	return T(e) && !/*#__PURE__*/ (0, I.isValidElement)(e);
}
function pe(e) {
	return (0, I.useMemo)(() => !e || !fe(e) ? {} : typeof e.progress == "boolean" ? { progressConfig: e.progress ? {} : void 0 } : { progressConfig: e.progress }, [e]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/image/hooks/usePreviewConfig.js
function me(e) {
	return /*#__PURE__*/ (0, I.isValidElement)(e) ? [e, void 0] : typeof e == "boolean" || T(e) ? [void 0, e] : [void 0, void 0];
}
function $(e) {
	let t = (0, I.useMemo)(() => typeof e == "boolean" ? e ? {} : null : T(e) ? e : {}, [e]);
	return (0, I.useMemo)(() => {
		if (!t) return [
			t,
			"",
			""
		];
		let { open: e, onOpenChange: n, cover: r, actionsRender: i, visible: a, onVisibleChange: o, rootClassName: s, maskClassName: c, mask: l, forceRender: u, destroyOnClose: d, toolbarRender: f, ...p } = t, m;
		n ? m = n : o && (m = (e, t) => {
			let { current: n } = t || {};
			n === void 0 ? o(e, !e) : o(e, !e, n);
		});
		let [h, g] = me(l);
		return [
			{
				...p,
				open: e ?? a,
				onOpenChange: m,
				cover: r ?? h,
				mask: g,
				actionsRender: i ?? f
			},
			s,
			c
		];
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/image/style/progressAnimation.js
var he = new f("antImageProgressActive", {
	"0%": { backgroundPosition: "200% 0" },
	"100%": { backgroundPosition: "-200% 0" }
}), ge = (e, t, n, r = "translate(0%, 0%)", i = .8) => new f(e, {
	"0%": {
		transform: r,
		opacity: i
	},
	"50%": {
		transform: t,
		opacity: n
	},
	"100%": {
		transform: r,
		opacity: i
	}
}), _e = ge("antImageInkFlow1", "translate(15%, -20%) scale(1.25)", .5), ve = ge("antImageInkFlow2", "translate(-18%, 15%) scale(0.85)", .9, "translate(0%, 0%) scale(1.1)", .7), ye = ge("antImageInkFlow3", "translate(8%, 10%) scale(1.15)", .8, "translate(0%, 0%) scale(0.85)", .65), be = (e) => ({
	position: e || "absolute",
	inset: 0
}), xe = (e) => {
	let { componentCls: t, motionDurationSlow: n, colorTextLightSolid: r } = e;
	return { [t]: {
		[`${t}-cover`]: {
			position: "absolute",
			inset: 0,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: r,
			background: new m("#000").setA(.3).toRgbString(),
			cursor: "pointer",
			opacity: 0,
			transition: `opacity ${n}`
		},
		"&:hover, &:focus-visible": { [`${t}-cover`]: { opacity: 1 } },
		[`${t}-cover-top`]: {
			inset: "0 0 auto 0",
			justifyContent: "center"
		},
		[`${t}-cover-bottom`]: {
			inset: "auto 0 0 0",
			justifyContent: "center"
		}
	} };
}, Se = (e) => {
	let { componentCls: t, motionDurationMid: n, motionEaseInOut: r, progressAnimationDuration: i } = e, a = {
		position: "absolute",
		width: "150%",
		height: "150%",
		left: "-25%",
		top: "-25%",
		animationTimingFunction: r,
		animationIterationCount: "infinite",
		pointerEvents: "none",
		willChange: "transform, opacity"
	};
	return { [`${t}-progress-wrapper`]: {
		position: "relative",
		display: "inline-block",
		overflow: "hidden",
		borderRadius: "inherit",
		backgroundColor: e.colorBgBase,
		backdropFilter: "blur(8px)",
		[`${t}-progress-ink-1`]: {
			...a,
			background: "radial-gradient(ellipse 65% 55% at 25% 30%, rgba(100, 180, 255, 0.98) 0%, transparent 55%)",
			animationName: _e,
			animationDuration: i,
			filter: "blur(40px)",
			"&::before": {
				content: "\"\"",
				...a,
				background: "radial-gradient(ellipse 60% 65% at 75% 45%, rgba(180, 140, 255, 0.95) 0%, transparent 50%)",
				animationName: ve,
				animationDuration: `calc(${i} + 2s)`,
				animationDelay: "-1s",
				filter: "blur(45px)"
			},
			"&::after": {
				content: "\"\"",
				...a,
				background: "radial-gradient(ellipse 55% 50% at 50% 70%, rgba(100, 220, 220, 0.9) 0%, transparent 45%)",
				animationName: ye,
				animationDuration: `calc(${i} + 0.5s)`,
				animationDelay: "-2s",
				filter: "blur(38px)"
			}
		},
		[`${t}-progress-ink-2`]: {
			...a,
			background: "radial-gradient(ellipse 45% 40% at 60% 20%, rgba(255, 150, 200, 0.88) 0%, transparent 45%)",
			animationName: ye,
			animationDuration: `calc(${i} + 1.5s)`,
			animationDelay: "-3s",
			filter: "blur(42px)",
			"&::before": {
				content: "\"\"",
				...a,
				background: "radial-gradient(ellipse 50% 55% at 20% 75%, rgba(160, 190, 255, 0.88) 0%, transparent 50%)",
				animationName: _e,
				animationDuration: `calc(${i} + 2.5s)`,
				animationDelay: "-2.5s",
				filter: "blur(35px)"
			}
		},
		[`${t}-progress-content`]: {
			position: "absolute",
			top: "50%",
			left: 0,
			transform: "translateY(-50%)",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			width: "100%",
			paddingInline: e.paddingLG,
			textAlign: "center",
			fontSize: e.fontSize,
			color: e.colorTextSecondary,
			zIndex: 1
		},
		[`${t}-progress-rail`]: {
			width: "100%",
			height: 6,
			marginTop: e.marginSM,
			backgroundColor: "rgba(255, 255, 255, 0.5)",
			borderRadius: e.borderRadiusXS,
			overflow: "hidden",
			backdropFilter: "blur(4px)",
			"&::before": {
				content: "\"\"",
				display: "block",
				height: "100%",
				width: "var(--progress-percent, 0%)",
				background: "linear-gradient(90deg, rgba(120, 170, 255, 0.85) 0%, rgba(160, 150, 245, 0.85) 40%, rgba(130, 200, 220, 0.85) 60%, rgba(120, 170, 255, 0.85) 100%)",
				backgroundSize: "200% 100%",
				borderRadius: e.borderRadiusXS / 2,
				transition: `width ${n} ease`,
				animationName: he,
				animationDuration: i,
				animationTimingFunction: "linear",
				animationIterationCount: "infinite"
			}
		},
		[`${t}-progress-indicator`]: { marginTop: e.marginXS }
	} };
}, Ce = (e) => {
	let { motionEaseOut: t, previewCls: n, motionDurationSlow: r, componentCls: i, colorBgMask: a, marginXL: o, marginSM: s, margin: c, colorTextLightSolid: l, paddingSM: u, paddingLG: d, previewOperationHoverColor: f, previewOperationColorDisabled: p, previewOperationSize: h, zIndexPopup: g } = e, _ = new m(a).setA(.1), y = _.clone().setA(.2), b = {
		position: "absolute",
		color: l,
		backgroundColor: _.toRgbString(),
		borderRadius: "50%",
		padding: u,
		outline: 0,
		border: 0,
		cursor: "pointer",
		transition: `all ${r}`,
		display: "flex",
		fontSize: h,
		"&:hover": { backgroundColor: y.toRgbString() },
		"&:active": { backgroundColor: _.toRgbString() },
		"&:focus-visible": P(e)
	};
	return { [`${i}-preview`]: {
		textAlign: "center",
		inset: 0,
		position: "fixed",
		userSelect: "none",
		zIndex: g,
		[`${n}-mask`]: {
			inset: 0,
			position: "absolute",
			background: a,
			backdropFilter: "blur(0px)",
			transition: `backdrop-filter ${r}`,
			[`&${i}-preview-mask-blur`]: { backdropFilter: "blur(4px)" },
			[`&${i}-preview-mask-hidden`]: { display: "none" }
		},
		[`${n}-body`]: {
			...be(),
			"pointer-events": "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			"> *": { pointerEvents: "auto" }
		},
		[`${n}-img`]: {
			maxWidth: "100%",
			maxHeight: "70%",
			verticalAlign: "middle",
			transform: "scale3d(1, 1, 1)",
			transition: `transform ${r} ${t} 0s`
		},
		[`&-movable ${n}-img`]: { cursor: "grab" },
		[`&-moving ${n}-img`]: { cursor: "grabbing" },
		[`${n}-close`]: {
			...b,
			top: s,
			insetInlineEnd: s
		},
		[`${n}-switch`]: {
			...b,
			top: "50%",
			transform: "translateY(-50%)",
			"&-disabled": { "&, &:hover, &:active": {
				color: p,
				background: "transparent",
				cursor: "not-allowed"
			} },
			"&-prev": { insetInlineStart: s },
			"&-next": { insetInlineEnd: s }
		},
		[`${n}-footer`]: {
			position: "absolute",
			bottom: o,
			left: {
				_skip_check_: !0,
				value: "50%"
			},
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			color: e.previewOperationColor,
			transform: "translateX(-50%)",
			gap: c
		},
		[`${n}-actions`]: {
			display: "flex",
			gap: u,
			padding: `0 ${v(d)}`,
			backgroundColor: _.toRgbString(),
			borderRadius: 100,
			fontSize: h,
			"&-action": {
				color: "inherit",
				background: "transparent",
				border: 0,
				font: "inherit",
				padding: u,
				cursor: "pointer",
				transition: `all ${r}`,
				display: "flex",
				[`&:not(${n}-actions-action-disabled):hover`]: { color: f },
				"&:focus-visible": P(e),
				"&-disabled": {
					color: p,
					cursor: "not-allowed"
				}
			}
		}
	} };
}, we = (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		position: "relative",
		display: "inline-block",
		...k(e),
		[`${t}-img`]: {
			width: "100%",
			height: "auto",
			verticalAlign: "middle"
		},
		[`${t}-img-placeholder`]: {
			backgroundColor: e.colorBgContainerDisabled,
			backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "30%"
		},
		[`${t}-placeholder`]: { ...be() }
	} };
}, Te = (e) => {
	let { previewCls: t, motionDurationSlow: n } = e;
	return { [t]: { "&-fade": {
		transition: `opacity ${n}`,
		"&-enter, &-appear": {
			opacity: 0,
			[`${t}-body`]: { transform: "scale(0)" },
			"&-active": {
				opacity: 1,
				[`${t}-body`]: {
					transform: "scale(1)",
					transition: `transform ${n}`
				}
			}
		},
		"&-leave": {
			opacity: 1,
			"&-active": {
				opacity: 0,
				[`${t}-body`]: {
					transform: "scale(0)",
					transition: `transform ${n}`
				}
			}
		}
	} } };
}, Ee = N("Image", (e) => {
	let t = S(e, {
		previewCls: `${e.componentCls}-preview`,
		imagePreviewSwitchSize: e.controlHeightLG
	});
	return [
		we(t),
		xe(t),
		Se(t),
		Ce(t),
		Te(t)
	];
}, (e) => ({
	zIndexPopup: e.zIndexPopupBase + 80,
	previewOperationColor: new m(e.colorTextLightSolid).setA(.65).toRgbString(),
	previewOperationHoverColor: new m(e.colorTextLightSolid).setA(.85).toRgbString(),
	previewOperationColorDisabled: new m(e.colorTextLightSolid).setA(.25).toRgbString(),
	previewOperationSize: e.fontSizeIcon * 1.5,
	progressAnimationDuration: "3s"
})), De = {
	rotateLeft: /*#__PURE__*/ I.createElement(r, null),
	rotateRight: /*#__PURE__*/ I.createElement(_, null),
	zoomIn: /*#__PURE__*/ I.createElement(a, null),
	zoomOut: /*#__PURE__*/ I.createElement(o, null),
	close: /*#__PURE__*/ I.createElement(h, null),
	left: /*#__PURE__*/ I.createElement(p, null),
	right: /*#__PURE__*/ I.createElement(b, null),
	flipX: /*#__PURE__*/ I.createElement(u, null),
	flipY: /*#__PURE__*/ I.createElement(u, { rotate: 90 })
}, Oe = ({ previewPrefixCls: e, preview: t, classNames: n, styles: r, ...i }) => {
	let { getPrefixCls: a, getPopupContainer: o, direction: s, preview: c, classNames: u, styles: d } = E("image"), f = a("image", e), m = `${f}-preview`, h = D(f), [g, _] = Ee(f, h), v = l(g, _, h), [y, x, S] = $(t), [C, T, O] = $(c), k = I.useMemo(() => ({
		...De,
		left: s === "rtl" ? /*#__PURE__*/ I.createElement(b, null) : /*#__PURE__*/ I.createElement(p, null),
		right: s === "rtl" ? /*#__PURE__*/ I.createElement(p, null) : /*#__PURE__*/ I.createElement(b, null)
	}), [s]), A = de(y, C, f, v, o, De), { mask: j, blurClassName: M } = A ?? {}, N = {
		...i,
		classNames: n,
		styles: r
	}, [P, F] = w([
		u,
		n,
		{
			cover: l(O, S),
			popup: {
				root: l(T, x),
				mask: l({ [`${f}-preview-mask-hidden`]: !j }, M)
			}
		}
	], [d, r], { props: N }, { popup: { _default: "root" } });
	return /*#__PURE__*/ I.createElement(ue.PreviewGroup, {
		preview: A,
		previewPrefixCls: m,
		icons: k,
		...i,
		classNames: P,
		styles: F
	});
}, ke = {
	position: "absolute",
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0
}, Ae = (e) => {
	let { prefixCls: t, percent: n, render: r, classNames: i, styles: a, rootClassName: o, rootStyle: s, width: c, height: u } = e, d = O(n) && Number.isFinite(n), f = d ? Math.max(0, Math.min(100, Math.round(n))) : 0, p = d ? {
		role: "progressbar",
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": f,
		"aria-label": `${f}%`
	} : { "aria-busy": !0 }, m = d ? /*#__PURE__*/ I.createElement("div", {
		className: l(`${t}-progress-rail`, i?.rail),
		style: {
			...a?.rail,
			"--progress-percent": `${f}%`
		}
	}) : null, h = r ? r(m, f) : /*#__PURE__*/ I.createElement(I.Fragment, null, m, d && /*#__PURE__*/ I.createElement("div", {
		className: l(`${t}-progress-indicator`, i?.indicator),
		style: a?.indicator
	}, `${f}%`));
	return /*#__PURE__*/ I.createElement("div", {
		className: l(t, `${t}-progress-wrapper`, i?.root, o),
		style: {
			width: c,
			height: u,
			...s,
			...a?.root
		},
		...p
	}, !d && /*#__PURE__*/ I.createElement("span", {
		role: "status",
		"aria-live": "polite",
		style: ke
	}, "Loading"), /*#__PURE__*/ I.createElement("div", { className: `${t}-progress-ink-1` }), /*#__PURE__*/ I.createElement("div", { className: `${t}-progress-ink-2` }), /*#__PURE__*/ I.createElement("div", {
		className: l(`${t}-progress-content`, i?.content),
		style: a?.content
	}, h));
}, je = /* @__PURE__ */ e({ default: () => Me }), Me = (e) => {
	let { prefixCls: t, preview: n, className: r, rootClassName: i, style: a, styles: o, classNames: s, wrapperStyle: c, fallback: u, placeholder: d, ...f } = e, { getPrefixCls: p, getPopupContainer: m, className: h, style: g, preview: _, styles: v, classNames: y, fallback: b } = E("image"), x = p("image", t), S = D(x), [C, T] = Ee(x, S), O = l(i, C, T, S), k = l(r, C, h), [A, j, M] = $(n), [N, P, F] = $(_), L = de(A, N, x, O, m, De, !0), R = {
		...e,
		preview: L
	}, z = I.useMemo(() => ({
		cover: l(F, M),
		popup: { root: l(P, j) }
	}), [
		j,
		M,
		P,
		F
	]), { mask: B, blurClassName: ee } = L ?? {}, V = I.useMemo(() => ({ mask: l({ [`${x}-preview-mask-hidden`]: !B }, ee) }), [
		B,
		x,
		ee
	]), [H, U] = w(I.useMemo(() => [
		y,
		s,
		z,
		{ popup: V }
	], [
		y,
		s,
		z,
		V
	]), [
		v,
		{ root: c },
		o
	], { props: R }, {
		popup: { _default: "root" },
		placeholder: {}
	}), W = {
		...g,
		...a
	}, G = u ?? b, { progressConfig: K } = pe(d), te = K !== void 0, { percent: ne, render: re } = K || {}, ie = H?.placeholder?.progress, ae = U?.placeholder?.progress, { width: oe, height: se, src: q, ...ce } = f, J = fe(d) ? void 0 : d, Y = J && !q, X = Y ? (e) => J : re;
	return te || Y ? /*#__PURE__*/ I.createElement(Ae, {
		prefixCls: x,
		percent: ne,
		render: X,
		classNames: ie,
		styles: ae,
		rootClassName: l(O, k),
		rootStyle: {
			...W,
			...U?.root
		},
		width: oe,
		height: se
	}) : /*#__PURE__*/ I.createElement(ue, {
		prefixCls: x,
		preview: L || !1,
		rootClassName: O,
		className: k,
		style: W,
		fallback: G,
		placeholder: J,
		width: oe,
		height: se,
		src: q,
		...ce,
		classNames: H,
		styles: U
	});
};
Me.PreviewGroup = Oe;
//#endregion
export { je as t };
