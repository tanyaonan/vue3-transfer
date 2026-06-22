globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $ as n, I as r, Mt as i, Nt as a, X as o, fn as s, kn as c, ln as l, nt as u, wn as d } from "../shared/core.js";
import { Jn as f, Lt as p, Qn as m, Sr as h, Wn as g, Xn as _, Zn as v, gn as y, or as b, pr as x, sr as S, wr as C } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/splitter/Panel.js
var w = /* @__PURE__ */ t(c()), ee = /*#__PURE__*/ (0, w.forwardRef)((e, t) => {
	let { prefixCls: n, className: r, children: i, destroyOnHidden: o = !1, size: s, style: c, supportMotion: l } = e, u = s === 0 || typeof s == "string" && Number.parseFloat(s) === 0, d = a(`${n}-panel`, {
		[`${n}-panel-hidden`]: u,
		[`${n}-panel-transition`]: l
	}, r), f = s !== void 0;
	return /*#__PURE__*/ w.createElement("div", {
		ref: t,
		className: d,
		style: {
			...c,
			flexBasis: f ? s : "auto",
			flexGrow: +!f
		}
	}, !(o && u) && i);
}), T = () => null;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/splitter/hooks/useItems.js
function E(e) {
	if (m(e)) return {
		...e,
		showCollapsibleIcon: e.showCollapsibleIcon === void 0 ? "auto" : e.showCollapsibleIcon
	};
	let t = !!e;
	return {
		start: t,
		end: t,
		showCollapsibleIcon: "auto"
	};
}
function D(e) {
	return w.useMemo(() => d(e).filter((e) => /*#__PURE__*/ w.isValidElement(e)).map((e) => {
		let { props: t } = e, { collapsible: n, ...r } = t;
		return {
			...r,
			collapsible: E(n)
		};
	}), [e]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/splitter/hooks/useResizable.js
function O(e, t) {
	return e.collapsible && t.collapsible ? e.showCollapsibleIcon === !0 || t.showCollapsibleIcon === !0 ? !0 : e.showCollapsibleIcon === "auto" || t.showCollapsibleIcon === "auto" ? "auto" : !1 : e.collapsible ? e.showCollapsibleIcon : t.collapsible ? t.showCollapsibleIcon : !1;
}
function k(e, t, n) {
	return w.useMemo(() => {
		let r = [];
		for (let i = 0; i < e.length - 1; i += 1) {
			let a = e[i], o = e[i + 1], s = t[i], c = t[i + 1], { resizable: l = !0, min: u, collapsible: d } = a, { resizable: f = !0, min: p, collapsible: m } = o, h = l && f && (s !== 0 || !u) && (c !== 0 || !p), g = !!d.end && s > 0, _ = !!m.start && c === 0 && s > 0, v = g || _, y = !!m.start && c > 0, b = !!d.end && s === 0 && c > 0, x = y || b, S = O({
				collapsible: g,
				showCollapsibleIcon: d.showCollapsibleIcon
			}, {
				collapsible: _,
				showCollapsibleIcon: m.showCollapsibleIcon
			}), C = O({
				collapsible: y,
				showCollapsibleIcon: m.showCollapsibleIcon
			}, {
				collapsible: b,
				showCollapsibleIcon: d.showCollapsibleIcon
			});
			r[i] = {
				resizable: h,
				startCollapsible: !!(n ? x : v),
				endCollapsible: !!(n ? v : x),
				showStartCollapsibleIcon: n ? C : S,
				showEndCollapsibleIcon: n ? S : C
			};
		}
		return r;
	}, [
		t,
		e,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/splitter/hooks/sizeUtil.js
function A(e, t, n) {
	let r = 0, a = [];
	e.forEach((e, t) => {
		e === void 0 ? a.push(t) : r += e;
	});
	let o = 1 - r, s = a.length;
	if (e.length && !a.length && r !== 1) {
		if (r === 0) {
			let t = 1 / e.length;
			return e.map(() => t);
		}
		let t = 1 / r;
		return e.map((e) => e * t);
	}
	if (o < 0) {
		let t = 1 / r;
		return e.map((e) => e === void 0 ? 0 : e * t);
	}
	let c = 0, l = 0, u = 0, d = 1;
	for (let e of a) {
		let r = t[e] || 0, i = n[e] || 1;
		c += r, l += i, u = Math.max(u, r), d = Math.min(d, i);
	}
	if (c > 1 && l < 1) {
		let t = 1 / s;
		return e.map((e) => e === void 0 ? t : e);
	}
	let f = o / s;
	if (u <= f && f <= d) return e.map((e) => e === void 0 ? f : e);
	let p = i(e), m = o - c;
	for (let e = 0; e < s; e += 1) {
		let r = a[e], i = t[r] || 0, o = n[r] || 1;
		p[r] = i;
		let s = o - i, c = Math.min(s, m);
		p[r] += c, m -= c;
	}
	return p;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/splitter/hooks/useSizes.js
function j(e) {
	return Number(e.slice(0, -1)) / 100;
}
function M(e) {
	return typeof e == "string" && e.endsWith("%");
}
function N(e, t) {
	let n = e.map((e) => e.size), r = e.length, i = t || 0, a = (e) => e * i, [o, s] = w.useState(() => e.map((e) => e.defaultSize)), c = w.useMemo(() => n.some(_) ? n : o, [
		r,
		o,
		n
	]), l = w.useMemo(() => e.map((e) => M(e.min) ? j(e.min) : (e.min || 0) / i), [e, i]), u = w.useMemo(() => e.map((e) => M(e.max) ? j(e.max) : (e.max || i) / i), [e, i]), d = w.useMemo(() => {
		let e = [];
		for (let t = 0; t < r; t += 1) {
			let n = c[t];
			if (M(n)) e[t] = j(n);
			else if (n || n === 0) {
				let r = Number(n);
				Number.isNaN(r) || (e[t] = r / i);
			} else e[t] = void 0;
		}
		return A(e, l, u);
	}, [
		r,
		c,
		i,
		l,
		u
	]), f = w.useMemo(() => d.map(a), [d, i]);
	return [
		w.useMemo(() => t ? f : c, [
			f,
			c,
			t
		]),
		f,
		d,
		l,
		u,
		s
	];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/splitter/hooks/useResize.js
function P(e, t, n, r, a, o) {
	let s = e.map((e) => [e.min, e.max]), c = r || 0, l = (e) => e * c;
	function u(e, t) {
		return typeof e == "string" ? l(j(e)) : e ?? t;
	}
	let [d, f] = w.useState([]), p = w.useRef([]), [m, h] = w.useState(null), g = () => n.map(l);
	return [
		(e) => {
			f(g()), h({
				index: e,
				confirmed: !1
			});
		},
		(e, n) => {
			let r = null;
			if ((!m || !m.confirmed) && n !== 0) {
				if (n > 0) r = e, h({
					index: e,
					confirmed: !0
				});
				else for (let n = e; n >= 0; --n) if (d[n] > 0 && t[n].resizable) {
					r = n, h({
						index: n,
						confirmed: !0
					});
					break;
				}
			}
			let o = r ?? m?.index ?? e, l = i(d), f = o + 1, p = u(s[o][0], 0), g = u(s[f][0], 0), _ = u(s[o][1], c), v = u(s[f][1], c), y = n;
			return l[o] + y < p && (y = p - l[o]), l[f] - y < g && (y = l[f] - g), l[o] + y > _ && (y = _ - l[o]), l[f] - y > v && (y = l[f] - v), l[o] += y, l[f] -= y, a(l), l;
		},
		() => {
			h(null);
		},
		(e, t) => {
			let n = g(), r = o ? t === "start" ? "end" : "start" : t, i = r === "start" ? e : e + 1, l = r === "start" ? e + 1 : e, d = n[i], f = n[l];
			if (d !== 0 && f !== 0) n[i] = 0, n[l] += d, p.current[e] = d;
			else {
				let t = d + f, r = u(s[i][0], 0), a = u(s[i][1], c), o = u(s[l][0], 0), m = u(s[l][1], c), h = Math.max(r, t - m), g = Math.min(a, t - o), _ = o || (g - h) / 2, v = p.current[e], y = t - v;
				v && v <= m && v >= o && y <= a && y >= r ? (n[l] = v, n[i] = y) : (n[i] -= _, n[l] += _);
			}
			return a(n), n;
		},
		m?.index
	];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/splitter/SplitBar.js
var F = (e) => v(e) && Number.isFinite(e) ? Math.round(e) : 0, te = 300, ne = (e) => {
	let { prefixCls: t, rootPrefixCls: i, vertical: c, index: d, active: f, ariaNow: p, ariaMin: m, ariaMax: h, resizable: g, draggerIcon: _, draggerStyle: v, draggerClassName: y, collapsibleIcon: x, startCollapsible: S, endCollapsible: C, onDraggerDoubleClick: ee, onOffsetStart: T, onOffsetUpdate: E, onOffsetEnd: D, onCollapse: O, lazy: k, containerSize: A, showStartCollapsibleIcon: j, showEndCollapsibleIcon: M } = e, N = `${t}-bar`, P = (0, w.useRef)(0), [ne] = b(i, "splitter"), [I, L] = (0, w.useState)(null), [R, z] = (0, w.useState)(0), B = c ? 0 : R, V = c ? R : 0, re = (e) => {
		e.stopPropagation();
		let t = Date.now(), n = t - P.current;
		n > 0 && n < te || (P.current = t, g && e.currentTarget && (L([e.pageX, e.pageY]), T(d)));
	}, ie = (e) => {
		if (g && e.touches.length === 1) {
			let t = e.touches[0];
			L([t.pageX, t.pageY]), T(d);
		}
	}, H = (e) => {
		let t = A * p / 100, n = t + e, r = Math.max(0, A * m / 100), i = Math.min(A, A * h / 100);
		return Math.max(r, Math.min(i, n)) - t;
	}, U = s((e, t) => {
		z(H(c ? t : e));
	}), W = s(() => {
		E(d, B, V, !0), z(0), D(!0);
	}), G = (e, t) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), O(d, t));
	}, K = (e) => {
		switch (e) {
			case !0: return `${N}-collapse-bar-always-visible`;
			case !1: return `${N}-collapse-bar-always-hidden`;
			case "auto": return `${N}-collapse-bar-hover-only`;
		}
	};
	l(() => {
		if (!I) return;
		let e = {
			mousemove: (e) => {
				let { pageX: t, pageY: n } = e, r = t - I[0], i = n - I[1];
				k ? U(r, i) : E(d, r, i);
			},
			mouseup: () => {
				k ? W() : D(), L(null);
			},
			touchmove: (e) => {
				if (e.touches.length === 1) {
					let t = e.touches[0], n = t.pageX - I[0], r = t.pageY - I[1];
					k ? U(n, r) : E(d, n, r);
				}
			},
			touchend: () => {
				k ? W() : D(), L(null);
			}
		};
		for (let [t, n] of Object.entries(e)) window.addEventListener(t, n);
		return () => {
			for (let [t, n] of Object.entries(e)) window.removeEventListener(t, n);
		};
	}, [
		I,
		d,
		k
	]);
	let q = { [ne("bar-preview-offset")]: `${R}px` }, [ae, oe, se, J] = w.useMemo(() => {
		let e = null, t = null, i = x?.start !== void 0, a = x?.end !== void 0;
		return c ? (e = i ? x.start : /*#__PURE__*/ w.createElement(r, null), t = a ? x.end : /*#__PURE__*/ w.createElement(n, null)) : (e = i ? x.start : /*#__PURE__*/ w.createElement(o, null), t = a ? x.end : /*#__PURE__*/ w.createElement(u, null)), [
			e,
			t,
			i,
			a
		];
	}, [x, c]);
	return /*#__PURE__*/ w.createElement("div", { className: N }, k && /*#__PURE__*/ w.createElement("div", {
		className: a(`${N}-preview`, { [`${N}-preview-active`]: !!R }),
		style: q
	}), /*#__PURE__*/ w.createElement("div", {
		style: v?.default,
		className: a(`${N}-dragger`, {
			[`${N}-dragger-disabled`]: !g,
			[`${N}-dragger-active`]: f,
			[`${N}-dragger-customize`]: _ !== void 0
		}, y?.default, f && y?.active),
		onMouseDown: re,
		onTouchStart: ie,
		onDoubleClick: () => ee?.(d),
		role: "separator",
		"aria-disabled": !g,
		"aria-orientation": c ? "horizontal" : "vertical",
		"aria-valuenow": F(p),
		"aria-valuemin": F(m),
		"aria-valuemax": F(h)
	}, _ === void 0 ? null : /*#__PURE__*/ w.createElement("div", { className: a(`${N}-dragger-icon`) }, _)), S && /*#__PURE__*/ w.createElement("div", {
		className: a(`${N}-collapse-bar`, `${N}-collapse-bar-start`, { [`${N}-collapse-bar-customize`]: se }, K(j)),
		role: "button",
		tabIndex: 0,
		"aria-label": "Toggle start panel",
		onClick: () => O(d, "start"),
		onKeyDown: (e) => G(e, "start")
	}, /*#__PURE__*/ w.createElement("span", { className: a(`${N}-collapse-icon`, `${N}-collapse-start`) }, ae)), C && /*#__PURE__*/ w.createElement("div", {
		className: a(`${N}-collapse-bar`, `${N}-collapse-bar-end`, { [`${N}-collapse-bar-customize`]: J }, K(M)),
		role: "button",
		tabIndex: 0,
		"aria-label": "Toggle end panel",
		onClick: () => O(d, "end"),
		onKeyDown: (e) => G(e, "end")
	}, /*#__PURE__*/ w.createElement("span", { className: a(`${N}-collapse-icon`, `${N}-collapse-end`) }, oe)));
}, I = {
	position: "absolute",
	top: "50%",
	left: {
		_skip_check_: !0,
		value: "50%"
	},
	transform: "translate(-50%, -50%)"
}, L = S("Splitter", (e) => {
	let { componentCls: t, colorFill: n, splitBarDraggableSize: r, splitBarSize: i, splitTriggerSize: a, controlItemBgHover: o, controlItemBgActive: s, controlItemBgActiveHover: c, colorPrimary: l, antCls: u, calc: d } = e, [, f] = b(u, "splitter"), m = `${t}-bar`, h = `${t}-mask`, g = `${t}-panel`, _ = d(a).div(2).equal(), v = {
		position: "absolute",
		background: e.colorPrimary,
		opacity: .2,
		pointerEvents: "none",
		transition: "none",
		zIndex: 1,
		display: "none"
	};
	return { [t]: {
		...x(e),
		display: "flex",
		width: "100%",
		height: "100%",
		alignItems: "stretch",
		[`> ${m}`]: {
			flex: "none",
			position: "relative",
			userSelect: "none",
			[`${m}-dragger`]: {
				...I,
				zIndex: 1,
				"&::before": {
					content: "\"\"",
					background: o,
					...I
				},
				"&::after": {
					content: "\"\"",
					background: n,
					...I
				},
				[`&:hover:not(${m}-dragger-active)`]: { "&::before": { background: s } },
				"&-active": {
					zIndex: 2,
					"&::before": { background: c }
				},
				[`&-active${m}-dragger-customize`]: { [`${m}-dragger-icon`]: { color: l } },
				[`&-disabled${m}-dragger`]: {
					zIndex: 0,
					"&, &:hover, &-active": {
						cursor: "default",
						"&::before": { background: o }
					},
					"&::after": { display: "none" },
					[`${m}-dragger-icon`]: { display: "none" }
				},
				"&-customize": {
					[`${m}-dragger-icon`]: {
						...I,
						display: "flex",
						alignItems: "center",
						color: n
					},
					"&::after": { display: "none" }
				}
			},
			[`${m}-collapse-bar`]: {
				...I,
				zIndex: e.zIndexPopupBase,
				background: o,
				fontSize: e.fontSizeSM,
				borderRadius: e.borderRadiusXS,
				color: e.colorText,
				cursor: "pointer",
				opacity: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				[`&:hover:not(${m}-collapse-bar-customize)`]: { background: s },
				[`&:active:not(${m}-collapse-bar-customize)`]: { background: c },
				[`${m}-collapse-icon`]: {
					display: "flex",
					alignItems: "center"
				}
			},
			[`${m}-collapse-bar-customize`]: { background: "transparent" },
			"&:hover, &:active, &:focus-within": { [`${m}-collapse-bar-hover-only`]: { opacity: 1 } },
			[`${m}-collapse-bar-hover-only`]: { "@media(hover:none)": { opacity: 1 } },
			[`${m}-collapse-bar-always-hidden`]: { display: "none" },
			[`${m}-collapse-bar-always-visible`]: { opacity: 1 }
		},
		[h]: {
			position: "fixed",
			zIndex: e.zIndexPopupBase,
			inset: 0,
			"&-horizontal": { cursor: "col-resize" },
			"&-vertical": { cursor: "row-resize" }
		},
		"&-horizontal": {
			flexDirection: "row",
			[`> ${m}`]: {
				width: 0,
				[`${m}-preview`]: {
					height: "100%",
					width: i,
					...v,
					[`&${m}-preview-active`]: {
						display: "block",
						transform: `translate3d(${f("bar-preview-offset")}, 0, 0)`
					}
				},
				[`${m}-dragger`]: {
					cursor: "col-resize",
					height: "100%",
					width: a,
					"&::before": {
						height: "100%",
						width: i
					},
					"&::after": {
						height: r,
						width: i
					}
				},
				[`${m}-collapse-bar`]: {
					width: e.fontSizeSM,
					height: e.controlHeightSM,
					"&-start": {
						left: {
							_skip_check_: !0,
							value: "auto"
						},
						right: {
							_skip_check_: !0,
							value: _
						},
						transform: "translateY(-50%)"
					},
					"&-end": {
						left: {
							_skip_check_: !0,
							value: _
						},
						right: {
							_skip_check_: !0,
							value: "auto"
						},
						transform: "translateY(-50%)"
					}
				}
			}
		},
		"&-vertical": {
			flexDirection: "column",
			[`> ${m}`]: {
				height: 0,
				[`${m}-preview`]: {
					height: i,
					width: "100%",
					...v,
					[`&${m}-preview-active`]: {
						display: "block",
						transform: `translate3d(0, ${f("bar-preview-offset")}, 0)`
					}
				},
				[`${m}-dragger`]: {
					cursor: "row-resize",
					width: "100%",
					height: a,
					"&::before": {
						width: "100%",
						height: i
					},
					"&::after": {
						width: r,
						height: i
					}
				},
				[`${m}-collapse-bar`]: {
					height: e.fontSizeSM,
					width: e.controlHeightSM,
					"&-start": {
						top: "auto",
						bottom: _,
						transform: "translateX(-50%)"
					},
					"&-end": {
						top: _,
						bottom: "auto",
						transform: "translateX(-50%)"
					}
				}
			}
		},
		[g]: {
			overflow: "auto",
			scrollbarWidth: "thin",
			boxSizing: "border-box",
			"&-hidden": { overflow: "hidden" },
			[`&:has(${t}:only-child)`]: { overflow: "hidden" },
			"&-transition": {
				transition: `flex-basis ${e.motionDurationSlow} ${e.motionEaseInOut}`,
				...p()
			}
		}
	} };
}, (e) => {
	let t = e.splitBarSize || 2, n = e.splitTriggerSize || 6, r = e.resizeSpinnerSize || 20;
	return {
		splitBarSize: t,
		splitTriggerSize: n,
		splitBarDraggableSize: e.splitBarDraggableSize ?? r,
		resizeSpinnerSize: r
	};
}), R = (e) => {
	let { prefixCls: t, className: n, classNames: r, collapsible: i, style: o, styles: c, layout: l, orientation: u, vertical: d, children: p, destroyOnHidden: m, draggerIcon: _, collapsibleIcon: b, rootClassName: x, onDraggerDoubleClick: S, onResizeStart: T, onResize: E, onResizeEnd: O, lazy: A } = e, { getPrefixCls: j, direction: M, className: F, style: te, classNames: I, styles: R } = h("splitter"), z = j("splitter", t), B = j(), V = g(z), [re, ie] = L(z, V), [H, U] = y(u, d, l), W = M === "rtl", G = !U && W, K = D(p), [q, ae] = (0, w.useState)(), oe = (e) => {
		let { offsetWidth: t, offsetHeight: n } = e, r = U ? n : t;
		r !== 0 && ae(r);
	}, [se, J, Y, ce, le, ue] = N(K, q), de = k(K, J, G), [fe, pe, me, he, X] = P(K, de, Y, q, ue, G), ge = s((e) => {
		fe(e), T?.(J);
	}), _e = s((e, t, n) => {
		let r = pe(e, t);
		n ? O?.(r) : E?.(r);
	}), ve = s((e) => {
		me(), e || O?.(J);
	}), ye = s((t, n) => {
		let r = he(t, n);
		E?.(r), O?.(r);
		let i = r.map((e) => Math.abs(e) < 2 ** -52);
		e.onCollapse?.(i, r);
	}), be = {
		...e,
		vertical: U,
		orientation: H
	}, [Z, Q] = f([I, r], [R, c], { props: be }, { dragger: { _default: "default" } }), xe = a(z, n, `${z}-${H}`, { [`${z}-rtl`]: W }, x, Z.root, F, ie, V, re), Se = `${z}-mask`, $ = w.useMemo(() => {
		let e = [], t = 0, n = K.length;
		for (let r = 0; r < n; r += 1) t += Y[r], e.push(t);
		return e;
	}, [Y, K.length]), Ce = {
		...Q.root,
		...te,
		...o
	};
	return /*#__PURE__*/ w.createElement(C, { onResize: oe }, /*#__PURE__*/ w.createElement("div", {
		style: Ce,
		className: xe
	}, K.map((e, t) => {
		let n = {
			...e,
			className: a(Z.panel, e.className),
			style: {
				...Q.panel,
				...e.style
			}
		}, r = /*#__PURE__*/ w.createElement(ee, {
			...n,
			prefixCls: z,
			size: se[t],
			supportMotion: i?.motion && X === void 0,
			destroyOnHidden: e.destroyOnHidden ?? m
		}), o = null, s = de[t];
		if (s) {
			let e = ($[t - 1] || 0) + ce[t], n = ($[t + 1] || 100) - le[t + 1], r = ($[t - 1] || 0) + le[t], a = ($[t + 1] || 100) - ce[t + 1];
			o = /*#__PURE__*/ w.createElement(ne, {
				lazy: A,
				index: t,
				active: X === t,
				prefixCls: z,
				rootPrefixCls: B,
				vertical: U,
				resizable: s.resizable,
				draggerStyle: Q.dragger,
				draggerClassName: Z.dragger,
				draggerIcon: _,
				collapsibleIcon: i?.icon || b,
				ariaNow: $[t] * 100,
				ariaMin: Math.max(e, n) * 100,
				ariaMax: Math.min(r, a) * 100,
				startCollapsible: s.startCollapsible,
				endCollapsible: s.endCollapsible,
				showStartCollapsibleIcon: s.showStartCollapsibleIcon,
				showEndCollapsibleIcon: s.showEndCollapsibleIcon,
				onDraggerDoubleClick: S,
				onOffsetStart: ge,
				onOffsetUpdate: (e, t, n, r) => {
					let i = U ? n : t;
					G && (i = -i), _e(e, i, r);
				},
				onOffsetEnd: ve,
				onCollapse: ye,
				containerSize: q || 0
			});
		}
		return /*#__PURE__*/ w.createElement(w.Fragment, { key: `split-panel-${t}` }, r, o);
	}), v(X) && /*#__PURE__*/ w.createElement("div", {
		"aria-hidden": !0,
		className: a(Se, `${Se}-${H}`)
	})));
}, z = /* @__PURE__ */ e({ default: () => B }), B = R;
B.Panel = T;
//#endregion
export { z as t };
