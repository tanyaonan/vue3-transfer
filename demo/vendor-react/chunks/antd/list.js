globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { C as n, Ht as r, Jt as i, Mt as a, Nt as o, S as s, Tt as c, X as l, kn as u, kt as d, ln as f, nt as p, sn as m, wn as h, yt as g, z as _, zt as v } from "../shared/core.js";
import { Hn as y, Jn as b, Mn as x, Qn as S, Rn as C, S as w, Sr as T, Yn as E, _r as D, br as O, cr as k, dr as ee, en as te, or as A, pr as j, sr as M, tr as ne, ur as N, y as P } from "../shared/antd-core.js";
import { n as F } from "./auto-complete.js";
import { u as I } from "./avatar.js";
import { a as L, d as re, g as R, h as z, i as B, l as ie, r as ae } from "./calendar.js";
import { a as oe, r as se } from "./col.js";
//#region node_modules/.pnpm/@rc-component+pagination@1._e3ab09bb8bb884e2b9ec23bf7fc2e19c/node_modules/@rc-component/pagination/es/locale/zh_CN.js
var V = /* @__PURE__ */ t(u()), ce = {
	items_per_page: "条/页",
	jump_to: "跳至",
	jump_to_confirm: "确定",
	page: "页",
	prev_page: "上一页",
	next_page: "下一页",
	prev_5: "向前 5 页",
	next_5: "向后 5 页",
	prev_3: "向前 3 页",
	next_3: "向后 3 页",
	page_size: "页码"
}, H = [
	10,
	20,
	50,
	100
], le = (e) => {
	let { pageSizeOptions: t = H, locale: n, changeSize: r, pageSize: a, goButton: o, quickGo: s, rootPrefixCls: c, disabled: l, buildOptionText: u, showSizeChanger: d, sizeChangerRender: f } = e, [p, m] = V.useState(""), h = V.useMemo(() => !p || Number.isNaN(p) ? void 0 : Number(p), [p]), g = typeof u == "function" ? u : (e) => `${e} ${n.items_per_page}`, _ = (e) => {
		let t = e.target.value;
		/^\d*$/.test(t) && m(t);
	}, v = (e) => {
		o || p === "" || (m(""), !(e.relatedTarget && (e.relatedTarget.className.includes(`${c}-item-link`) || e.relatedTarget.className.includes(`${c}-item`))) && s?.(h));
	}, y = (e) => {
		p !== "" && (e.keyCode === i.ENTER || e.type === "click") && (m(""), s?.(h));
	}, b = () => t.some((e) => e.toString() === a.toString()) ? t : t.concat([a]).sort((e, t) => (Number.isNaN(Number(e)) ? 0 : Number(e)) - (Number.isNaN(Number(t)) ? 0 : Number(t))), x = `${c}-options`;
	if (!d && !s) return null;
	let S = null, C = null, w = null;
	return d && f && (S = f({
		disabled: l,
		size: a,
		onSizeChange: (e) => {
			r?.(Number(e));
		},
		"aria-label": n.page_size,
		className: `${x}-size-changer`,
		options: b().map((e) => ({
			label: g(e),
			value: e
		}))
	})), s && (o && (w = typeof o == "boolean" ? /*#__PURE__*/ V.createElement("button", {
		type: "button",
		onClick: y,
		onKeyUp: y,
		disabled: l,
		className: `${x}-quick-jumper-button`
	}, n.jump_to_confirm) : /*#__PURE__*/ V.createElement("span", {
		onClick: y,
		onKeyUp: y
	}, o)), C = /*#__PURE__*/ V.createElement("div", { className: `${x}-quick-jumper` }, n.jump_to, /*#__PURE__*/ V.createElement("input", {
		disabled: l,
		type: "text",
		value: p,
		onChange: _,
		onKeyUp: y,
		onBlur: v,
		"aria-label": n.page
	}), n.page, w)), /*#__PURE__*/ V.createElement("li", { className: x }, S, C);
}, U = (e) => {
	let { rootPrefixCls: t, page: n, active: r, className: i, style: a, showTitle: s, onClick: c, onKeyPress: l, itemRender: u } = e, d = `${t}-item`, f = o(d, `${d}-${n}`, {
		[`${d}-active`]: r,
		[`${d}-disabled`]: !n
	}, i), p = () => {
		c(n);
	}, m = (e) => {
		l(e, c, n);
	}, h = u(n, "page", /*#__PURE__*/ V.createElement("a", { rel: "nofollow" }, n));
	return h ? /*#__PURE__*/ V.createElement("li", {
		title: s ? String(n) : null,
		className: f,
		style: a,
		onClick: p,
		onKeyDown: m,
		tabIndex: 0
	}, h) : null;
};
//#endregion
//#region node_modules/.pnpm/@rc-component+pagination@1._e3ab09bb8bb884e2b9ec23bf7fc2e19c/node_modules/@rc-component/pagination/es/Pagination.js
function W() {
	return W = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, W.apply(this, arguments);
}
var ue = (e, t, n) => n;
function de() {}
function G(e) {
	let t = Number(e);
	return typeof t == "number" && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t;
}
function K(e, t, n) {
	let r = e === void 0 ? t : e;
	return Math.floor((n - 1) / r) + 1;
}
var fe = (e) => {
	let { prefixCls: t = "rc-pagination", selectPrefixCls: n = "rc-select", className: a, classNames: s, styles: c, current: l, defaultCurrent: u = 1, total: d = 0, pageSize: f, defaultPageSize: p = 10, onChange: h = de, hideOnSinglePage: g, align: _, showPrevNextJumpers: v = !0, showQuickJumper: y, showLessItems: b, showTitle: x = !0, onShowSizeChange: S = de, locale: C = ce, style: w, totalBoundaryShowSizeChanger: T = 50, disabled: E, simple: D, showTotal: O, showSizeChanger: k = d > T, sizeChangerRender: ee, pageSizeOptions: te, itemRender: A = ue, jumpPrevIcon: j, jumpNextIcon: M, prevIcon: ne, nextIcon: N } = e, P = V.useRef(null), [F, I] = m(p, f), [L, re] = m(u, l), R = Math.max(1, Math.min(L, K(void 0, F, d))), [z, B] = V.useState(R);
	(0, V.useEffect)(() => {
		B(R);
	}, [R]), "current" in e;
	let ie = Math.max(1, R - (b ? 3 : 5)), ae = Math.min(K(void 0, F, d), R + (b ? 3 : 5));
	function oe(n, r) {
		let i = n || /*#__PURE__*/ V.createElement("button", {
			type: "button",
			"aria-label": r,
			className: `${t}-item-link`
		});
		return typeof n == "function" && (i = /*#__PURE__*/ V.createElement(n, e)), i;
	}
	function se(e) {
		let t = e.target.value, n = K(void 0, F, d), r;
		return r = t === "" ? t : Number.isNaN(Number(t)) ? z : t >= n ? n : Number(t), r;
	}
	function H(e) {
		return G(e) && e !== R && G(d) && d > 0;
	}
	let fe = d > F ? y : !1;
	function q(e) {
		(e.keyCode === i.UP || e.keyCode === i.DOWN) && e.preventDefault();
	}
	function pe(e) {
		let t = se(e);
		switch (t !== z && B(t), e.keyCode) {
			case i.ENTER:
				J(t);
				break;
			case i.UP:
				J(t - 1);
				break;
			case i.DOWN:
				J(t + 1);
				break;
			default: break;
		}
	}
	function me(e) {
		J(se(e));
	}
	function he(e) {
		let t = K(e, F, d), n = R > t && t !== 0 ? t : R;
		I(e), B(n), S?.(R, e), re(n), h?.(n, e);
	}
	function J(e) {
		if (H(e) && !E) {
			let t = K(void 0, F, d), n = e;
			return e > t ? n = t : e < 1 && (n = 1), n !== z && B(n), re(n), h?.(n, F), n;
		}
		return R;
	}
	let Y = R > 1, ge = R < K(void 0, F, d);
	function _e() {
		Y && J(R - 1);
	}
	function X() {
		ge && J(R + 1);
	}
	function ve() {
		J(ie);
	}
	function ye() {
		J(ae);
	}
	function be(e, t, ...n) {
		(e.key === "Enter" || e.charCode === i.ENTER || e.keyCode === i.ENTER) && t(...n);
	}
	function xe(e) {
		be(e, _e);
	}
	function Se(e) {
		be(e, X);
	}
	function Ce(e) {
		be(e, ve);
	}
	function we(e) {
		be(e, ye);
	}
	function Te(e) {
		let t = A(e, "prev", oe(ne, "prev page"));
		return /*#__PURE__*/ V.isValidElement(t) ? /*#__PURE__*/ V.cloneElement(t, { disabled: !Y }) : t;
	}
	function Ee(e) {
		let t = A(e, "next", oe(N, "next page"));
		return /*#__PURE__*/ V.isValidElement(t) ? /*#__PURE__*/ V.cloneElement(t, { disabled: !ge }) : t;
	}
	function De(e) {
		(e.type === "click" || e.keyCode === i.ENTER) && J(z);
	}
	let Oe = null, ke = r(e, {
		aria: !0,
		data: !0
	}), Ae = O && /*#__PURE__*/ V.createElement("li", { className: `${t}-total-text` }, O(d, [d === 0 ? 0 : (R - 1) * F + 1, R * F > d ? d : R * F])), je = null, Z = K(void 0, F, d);
	if (g && d <= F) return null;
	let Q = [], Me = {
		rootPrefixCls: t,
		onClick: J,
		onKeyPress: be,
		showTitle: x,
		itemRender: A,
		page: -1,
		className: s?.item,
		style: c?.item
	}, Ne = R - 1 > 0 ? R - 1 : 0, Pe = R + 1 < Z ? R + 1 : Z, Fe = y && y.goButton, Ie = typeof D == "object" ? D.readOnly : !D, Le = Fe, Re = null;
	D && (Fe && (Le = typeof Fe == "boolean" ? /*#__PURE__*/ V.createElement("button", {
		type: "button",
		onClick: De,
		onKeyUp: De
	}, C.jump_to_confirm) : /*#__PURE__*/ V.createElement("span", {
		onClick: De,
		onKeyUp: De
	}, Fe), Le = /*#__PURE__*/ V.createElement("li", {
		title: x ? `${C.jump_to}${R}/${Z}` : null,
		className: `${t}-simple-pager`
	}, Le)), Re = /*#__PURE__*/ V.createElement("li", {
		title: x ? `${R}/${Z}` : null,
		className: o(`${t}-simple-pager`, s?.item),
		style: c?.item
	}, Ie ? z : /*#__PURE__*/ V.createElement("input", {
		type: "text",
		"aria-label": C.jump_to,
		value: z,
		disabled: E,
		onKeyDown: q,
		onKeyUp: pe,
		onChange: pe,
		onBlur: me,
		size: 3
	}), /*#__PURE__*/ V.createElement("span", { className: `${t}-slash` }, "/"), Z));
	let $ = b ? 1 : 2;
	if (Z <= 3 + $ * 2) {
		Z || Q.push(/*#__PURE__*/ V.createElement(U, W({}, Me, {
			key: "noPager",
			page: 1,
			className: `${t}-item-disabled`
		})));
		for (let e = 1; e <= Z; e += 1) Q.push(/*#__PURE__*/ V.createElement(U, W({}, Me, {
			key: e,
			page: e,
			active: R === e
		})));
	} else {
		let e = b ? C.prev_3 : C.prev_5, n = b ? C.next_3 : C.next_5, r = A(ie, "jump-prev", oe(j, "prev page")), i = A(ae, "jump-next", oe(M, "next page"));
		v && (Oe = r ? /*#__PURE__*/ V.createElement("li", {
			title: x ? e : null,
			key: "prev",
			onClick: ve,
			tabIndex: 0,
			onKeyDown: Ce,
			className: o(`${t}-jump-prev`, { [`${t}-jump-prev-custom-icon`]: !!j })
		}, r) : null, je = i ? /*#__PURE__*/ V.createElement("li", {
			title: x ? n : null,
			key: "next",
			onClick: ye,
			tabIndex: 0,
			onKeyDown: we,
			className: o(`${t}-jump-next`, { [`${t}-jump-next-custom-icon`]: !!M })
		}, i) : null);
		let a = Math.max(1, R - $), s = Math.min(R + $, Z);
		R - 1 <= $ && (s = 1 + $ * 2), Z - R <= $ && (a = Z - $ * 2);
		for (let e = a; e <= s; e += 1) Q.push(/*#__PURE__*/ V.createElement(U, W({}, Me, {
			key: e,
			page: e,
			active: R === e
		})));
		if (R - 1 >= $ * 2 && R !== 3 && (Q[0] = /*#__PURE__*/ V.cloneElement(Q[0], { className: o(`${t}-item-after-jump-prev`, Q[0].props.className) }), Q.unshift(Oe)), Z - R >= $ * 2 && R !== Z - 2) {
			let e = Q[Q.length - 1];
			Q[Q.length - 1] = /*#__PURE__*/ V.cloneElement(e, { className: o(`${t}-item-before-jump-next`, e.props.className) }), Q.push(je);
		}
		a !== 1 && Q.unshift(/*#__PURE__*/ V.createElement(U, W({}, Me, {
			key: 1,
			page: 1
		}))), s !== Z && Q.push(/*#__PURE__*/ V.createElement(U, W({}, Me, {
			key: Z,
			page: Z
		})));
	}
	let ze = Te(Ne);
	if (ze) {
		let e = !Y || !Z;
		ze = /*#__PURE__*/ V.createElement("li", {
			title: x ? C.prev_page : null,
			onClick: _e,
			tabIndex: e ? null : 0,
			onKeyDown: xe,
			className: o(`${t}-prev`, s?.item, { [`${t}-disabled`]: e }),
			style: c?.item,
			"aria-disabled": e
		}, ze);
	}
	let Be = Ee(Pe);
	if (Be) {
		let e, n;
		D ? (e = !ge, n = Y ? 0 : null) : (e = !ge || !Z, n = e ? null : 0), Be = /*#__PURE__*/ V.createElement("li", {
			title: x ? C.next_page : null,
			onClick: X,
			tabIndex: n,
			onKeyDown: Se,
			className: o(`${t}-next`, s?.item, { [`${t}-disabled`]: e }),
			style: c?.item,
			"aria-disabled": e
		}, Be);
	}
	let Ve = o(t, a, {
		[`${t}-start`]: _ === "start",
		[`${t}-center`]: _ === "center",
		[`${t}-end`]: _ === "end",
		[`${t}-simple`]: D,
		[`${t}-disabled`]: E
	});
	return /*#__PURE__*/ V.createElement("ul", W({
		className: Ve,
		style: w,
		ref: P
	}, ke), Ae, ze, D ? Re : Q, Be, /*#__PURE__*/ V.createElement(le, {
		locale: C,
		rootPrefixCls: t,
		disabled: E,
		selectPrefixCls: n,
		changeSize: he,
		pageSize: F,
		pageSizeOptions: te,
		quickGo: fe ? J : null,
		goButton: Le,
		showSizeChanger: k,
		sizeChangerRender: ee
	}));
}, q = (e) => {
	let { componentCls: t } = e;
	return {
		[`${t}-disabled`]: {
			"&, &:hover": {
				cursor: "not-allowed",
				[`${t}-item-link`]: {
					color: e.colorTextDisabled,
					cursor: "not-allowed"
				}
			},
			"&:focus-visible": {
				cursor: "not-allowed",
				[`${t}-item-link`]: {
					color: e.colorTextDisabled,
					cursor: "not-allowed"
				}
			}
		},
		[`&${t}-disabled`]: {
			cursor: "not-allowed",
			[`${t}-item`]: {
				cursor: "not-allowed",
				backgroundColor: "transparent",
				"&:hover, &:active": { backgroundColor: "transparent" },
				a: {
					color: e.colorTextDisabled,
					backgroundColor: "transparent",
					border: "none",
					cursor: "not-allowed"
				},
				"&-active": {
					borderColor: e.colorBorder,
					backgroundColor: e.itemActiveBgDisabled,
					"&:hover, &:active": { backgroundColor: e.itemActiveBgDisabled },
					a: { color: e.itemActiveColorDisabled }
				}
			},
			[`${t}-item-link`]: {
				color: e.colorTextDisabled,
				cursor: "not-allowed",
				"&:hover, &:active": { backgroundColor: "transparent" },
				[`${t}-simple&`]: {
					backgroundColor: "transparent",
					"&:hover, &:active": { backgroundColor: "transparent" }
				}
			},
			[`${t}-simple-pager`]: { color: e.colorTextDisabled },
			[`${t}-jump-prev, ${t}-jump-next`]: {
				[`${t}-item-link-icon`]: { opacity: 0 },
				[`${t}-item-ellipsis`]: { opacity: 1 }
			}
		}
	};
}, pe = (e) => {
	let { componentCls: t } = e;
	return { [`&${t}-small ${t}-options`]: {
		marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
		"&-quick-jumper": { input: {
			...L(e),
			width: e.paginationMiniQuickJumperInputWidth
		} }
	} };
}, me = (e) => {
	let { componentCls: t } = e;
	return { [`&${t}-large ${t}-options`]: { "&-quick-jumper": { input: { ...B(e) } } } };
}, he = (e) => {
	let { componentCls: t, antCls: n } = e, [, r] = A(n, "pagination");
	return { [`&${t}-simple`]: {
		[`${t}-prev, ${t}-next`]: {
			height: r("item-size-actual"),
			lineHeight: r("item-size-actual"),
			verticalAlign: "top",
			[`${t}-item-link`]: {
				height: r("item-size-actual"),
				backgroundColor: "transparent",
				border: 0,
				"&:hover": { backgroundColor: e.colorBgTextHover },
				"&:active": { backgroundColor: e.colorBgTextActive },
				"&::after": {
					height: r("item-size-actual"),
					lineHeight: r("item-size-actual")
				}
			}
		},
		[`${t}-simple-pager`]: {
			display: "inline-flex",
			alignItems: "center",
			height: r("item-size-actual"),
			marginInlineEnd: r("item-spacing-actual"),
			input: {
				boxSizing: "border-box",
				height: "100%",
				width: e.quickJumperInputWidth,
				padding: `0 ${d(e.paginationItemPaddingInline)}`,
				textAlign: "center",
				backgroundColor: e.itemInputBg,
				border: `${d(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
				borderRadius: e.borderRadius,
				outline: "none",
				transition: `border-color ${e.motionDurationMid}`,
				color: "inherit",
				"&:hover": { borderColor: e.colorPrimary },
				"&:focus": {
					borderColor: e.colorPrimaryHover,
					boxShadow: `${d(e.inputOutlineOffset)} 0 ${d(e.controlOutlineWidth)} ${e.controlOutline}`
				},
				"&[disabled]": {
					color: e.colorTextDisabled,
					backgroundColor: e.colorBgContainerDisabled,
					borderColor: e.colorBorder,
					cursor: "not-allowed"
				}
			}
		},
		[`&${t}-disabled`]: { [`${t}-prev, ${t}-next`]: { [`${t}-item-link`]: { "&:hover, &:active": { backgroundColor: "transparent" } } } },
		[`&${t}-small`]: { [`${t}-simple-pager`]: { input: { width: e.paginationMiniQuickJumperInputWidth } } }
	} };
}, J = (e) => {
	let { componentCls: t, antCls: n } = e, [, r] = A(n, "pagination");
	return {
		[`${t}-jump-prev, ${t}-jump-next`]: {
			outline: 0,
			[`${t}-item-container`]: {
				position: "relative",
				[`${t}-item-link-icon`]: {
					color: e.colorPrimary,
					fontSize: e.fontSizeSM,
					opacity: 0,
					transition: `all ${e.motionDurationMid}`,
					"&-svg": {
						top: 0,
						insetInlineEnd: 0,
						bottom: 0,
						insetInlineStart: 0,
						margin: "auto"
					}
				},
				[`${t}-item-ellipsis`]: {
					position: "absolute",
					top: 0,
					insetInlineEnd: 0,
					bottom: 0,
					insetInlineStart: 0,
					display: "block",
					margin: "auto",
					color: e.colorTextDisabled,
					letterSpacing: e.paginationEllipsisLetterSpacing,
					textAlign: "center",
					textIndent: e.paginationEllipsisTextIndent,
					opacity: 1,
					transition: `all ${e.motionDurationMid}`
				}
			},
			"&:hover": {
				[`${t}-item-link-icon`]: { opacity: 1 },
				[`${t}-item-ellipsis`]: { opacity: 0 }
			}
		},
		[`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: { marginInlineEnd: r("item-spacing-actual") },
		[`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
			display: "inline-block",
			minWidth: r("item-size-actual"),
			height: r("item-size-actual"),
			color: e.colorText,
			fontFamily: e.fontFamily,
			lineHeight: r("item-size-actual"),
			textAlign: "center",
			verticalAlign: "middle",
			listStyle: "none",
			borderRadius: e.borderRadius,
			cursor: "pointer",
			transition: `all ${e.motionDurationMid}`
		},
		[`${t}-prev, ${t}-next`]: {
			outline: 0,
			button: {
				color: e.colorText,
				cursor: "pointer",
				userSelect: "none"
			},
			[`${t}-item-link`]: {
				display: "block",
				width: "100%",
				height: "100%",
				padding: 0,
				fontSize: e.fontSizeSM,
				textAlign: "center",
				backgroundColor: "transparent",
				border: `${d(e.lineWidth)} ${e.lineType} transparent`,
				borderRadius: e.borderRadius,
				outline: "none",
				transition: `all ${e.motionDurationMid}`
			},
			[`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
			[`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
			[`&${t}-disabled:hover`]: { [`${t}-item-link`]: { backgroundColor: "transparent" } }
		},
		[`${t}-slash`]: {
			marginInlineEnd: e.paginationSlashMarginInlineEnd,
			marginInlineStart: e.paginationSlashMarginInlineStart
		},
		[`${t}-options`]: {
			display: "inline-block",
			marginInlineStart: e.margin,
			verticalAlign: "middle",
			"&-size-changer": { width: "auto" },
			"&-quick-jumper": {
				display: "inline-block",
				height: r("item-size-actual"),
				marginInlineStart: e.marginXS,
				lineHeight: r("item-size-actual"),
				verticalAlign: "baseline",
				input: {
					...ae(e),
					...ie(e, {
						borderColor: e.colorBorder,
						hoverBorderColor: e.colorPrimaryHover,
						activeBorderColor: e.colorPrimary,
						activeShadow: e.activeShadow
					}),
					"&[disabled]": { ...re(e) },
					width: e.quickJumperInputWidth,
					height: r("item-size-actual"),
					boxSizing: "border-box",
					margin: 0,
					marginInlineStart: r("item-spacing-actual"),
					marginInlineEnd: r("item-spacing-actual")
				}
			}
		}
	};
}, Y = (e) => {
	let { componentCls: t, antCls: n } = e, [, r] = A(n, "pagination");
	return { [`${t}-item`]: {
		display: "inline-block",
		minWidth: r("item-size-actual"),
		height: r("item-size-actual"),
		marginInlineEnd: r("item-spacing-actual"),
		fontFamily: e.fontFamily,
		lineHeight: d(e.calc(r("item-size-actual")).sub(2).equal()),
		textAlign: "center",
		verticalAlign: "middle",
		listStyle: "none",
		backgroundColor: e.itemBg,
		border: `${d(e.lineWidth)} ${e.lineType} transparent`,
		borderRadius: e.borderRadius,
		outline: 0,
		cursor: "pointer",
		userSelect: "none",
		a: {
			display: "block",
			padding: `0 ${d(e.paginationItemPaddingInline)}`,
			color: e.colorText,
			"&:hover": { textDecoration: "none" }
		},
		[`&:not(${t}-item-active)`]: {
			"&:hover": {
				transition: `all ${e.motionDurationMid}`,
				backgroundColor: e.colorBgTextHover
			},
			"&:active": { backgroundColor: e.colorBgTextActive }
		},
		"&-active": {
			fontWeight: e.fontWeightStrong,
			backgroundColor: e.itemActiveBg,
			borderColor: e.colorPrimary,
			a: { color: e.itemActiveColor },
			"&:hover": { borderColor: e.colorPrimaryHover },
			"&:hover a": { color: e.itemActiveColorHover }
		}
	} };
}, ge = (e) => {
	let { componentCls: t, antCls: n } = e, [r, i] = A(n, "pagination");
	return {
		[t]: {
			[r("item-size-actual")]: d(e.itemSize),
			[r("item-spacing-actual")]: d(e.marginXS),
			"&-small": {
				[r("item-size-actual")]: d(e.itemSizeSM),
				[r("item-spacing-actual")]: d(e.marginXXS)
			},
			"&-large": {
				[r("item-size-actual")]: d(e.itemSizeLG),
				[r("item-spacing-actual")]: d(e.marginSM)
			},
			...j(e),
			display: "flex",
			alignItems: "center",
			"&-start": { justifyContent: "start" },
			"&-center": { justifyContent: "center" },
			"&-end": { justifyContent: "end" },
			"ul, ol": {
				margin: 0,
				padding: 0,
				listStyle: "none"
			},
			"&::after": {
				display: "block",
				clear: "both",
				height: 0,
				overflow: "hidden",
				visibility: "hidden",
				content: "\"\""
			},
			[`${t}-total-text`]: {
				display: "inline-block",
				height: i("item-size-actual"),
				marginInlineEnd: i("item-spacing-actual"),
				lineHeight: d(e.calc(i("item-size-actual")).sub(2).equal()),
				verticalAlign: "middle"
			},
			...Y(e),
			...J(e),
			...he(e),
			...pe(e),
			...me(e),
			...q(e),
			[`@media only screen and (max-width: ${e.screenLG}px)`]: { [`${t}-item`]: { "&-after-jump-prev, &-before-jump-next": { display: "none" } } },
			[`@media only screen and (max-width: ${e.screenSM}px)`]: { [`${t}-options`]: { display: "none" } }
		},
		[`&${e.componentCls}-rtl`]: { direction: "rtl" }
	};
}, _e = (e) => {
	let { componentCls: t } = e;
	return { [`${t}:not(${t}-disabled)`]: {
		[`${t}-item`]: { ...ee(e) },
		[`${t}-jump-prev, ${t}-jump-next`]: { "&:focus-visible": {
			[`${t}-item-link-icon`]: { opacity: 1 },
			[`${t}-item-ellipsis`]: { opacity: 0 },
			...N(e)
		} },
		[`${t}-prev, ${t}-next`]: { [`&:focus-visible ${t}-item-link`]: N(e) }
	} };
}, X = (e) => ({
	itemBg: e.colorBgContainer,
	itemSize: e.controlHeight,
	itemSizeSM: e.controlHeightSM,
	itemSizeLG: e.controlHeightLG,
	itemActiveBg: e.colorBgContainer,
	itemActiveColor: e.colorPrimary,
	itemActiveColorHover: e.colorPrimaryHover,
	itemLinkBg: e.colorBgContainer,
	itemActiveColorDisabled: e.colorTextDisabled,
	itemActiveBgDisabled: e.controlItemBgActiveDisabled,
	itemInputBg: e.colorBgContainer,
	miniOptionsSizeChangerTop: 0,
	...z(e)
}), ve = (e) => g(e, {
	inputOutlineOffset: 0,
	quickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.25).equal(),
	paginationMiniOptionsMarginInlineStart: e.calc(e.marginXXS).div(2).equal(),
	paginationMiniQuickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.1).equal(),
	paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
	paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
	paginationSlashMarginInlineStart: e.marginSM,
	paginationSlashMarginInlineEnd: e.marginSM,
	paginationEllipsisTextIndent: "0.13em"
}, R(e)), ye = M("Pagination", (e) => {
	let t = ve(e);
	return [ge(t), _e(t)];
}, X), be = (e) => {
	let { componentCls: t } = e;
	return {
		[`${t}${t}-bordered${t}-disabled`]: {
			"&, &:hover": { [`${t}-item-link`]: { borderColor: e.colorBorder } },
			"&:focus-visible": { [`${t}-item-link`]: { borderColor: e.colorBorder } },
			[`${t}-item, ${t}-item-link`]: {
				backgroundColor: e.colorBgContainerDisabled,
				borderColor: e.colorBorder,
				[`&:hover:not(${t}-item-active)`]: {
					backgroundColor: e.colorBgContainerDisabled,
					borderColor: e.colorBorder,
					a: { color: e.colorTextDisabled }
				},
				[`&${t}-item-active`]: { backgroundColor: e.itemActiveBgDisabled }
			},
			[`${t}-prev, ${t}-next`]: {
				"&:hover button": {
					backgroundColor: e.colorBgContainerDisabled,
					borderColor: e.colorBorder,
					color: e.colorTextDisabled
				},
				[`${t}-item-link`]: {
					backgroundColor: e.colorBgContainerDisabled,
					borderColor: e.colorBorder
				}
			}
		},
		[`${t}${t}-bordered`]: {
			[`${t}-prev, ${t}-next`]: {
				"&:hover button": {
					borderColor: e.colorPrimaryHover,
					backgroundColor: e.itemBg
				},
				[`${t}-item-link`]: {
					backgroundColor: e.itemLinkBg,
					borderColor: e.colorBorder
				},
				[`&:hover ${t}-item-link`]: {
					borderColor: e.colorPrimary,
					backgroundColor: e.itemBg,
					color: e.colorPrimary
				},
				[`&${t}-disabled`]: { [`${t}-item-link`]: {
					borderColor: e.colorBorder,
					color: e.colorTextDisabled
				} }
			},
			[`${t}-item`]: {
				backgroundColor: e.itemBg,
				border: `${d(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
				[`&:hover:not(${t}-item-active)`]: {
					borderColor: e.colorPrimary,
					backgroundColor: e.itemBg,
					a: { color: e.colorPrimary }
				},
				"&-active": { borderColor: e.colorPrimary }
			}
		}
	};
}, xe = k(["Pagination", "bordered"], (e) => be(ve(e)), X);
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/pagination/useShowSizeChanger.js
function Se(e) {
	return (0, V.useMemo)(() => typeof e == "boolean" ? [e, {}] : S(e) ? [!0, e] : [void 0, void 0], [e]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/pagination/Pagination.js
var Ce = (e) => {
	let { align: t, prefixCls: r, selectPrefixCls: i, className: a, rootClassName: c, style: u, size: d, locale: f, responsive: m, showSizeChanger: h, selectComponentClass: g, pageSizeOptions: _, styles: v, classNames: x, ...S } = e, { xs: w } = I(m), [, E] = D(), { getPrefixCls: O, direction: k, showSizeChanger: ee, className: A, style: j, classNames: M, styles: ne, totalBoundaryShowSizeChanger: N } = T("pagination"), P = O("pagination", r), [L, re] = ye(P), R = te(d), z = R === "small" || !!(w && !R && m), B = {
		...e,
		size: R
	}, [ie, ae] = b([M, x], [ne, v], { props: B }), [oe] = C("Pagination", y), se = {
		...oe,
		...f
	}, [ce, H] = Se(h), [le, U] = Se(ee), W = ce ?? le, ue = H ?? U, de = g || F, G = V.useMemo(() => _ ? _.map(Number) : void 0, [_]), K = (e) => {
		let { disabled: t, size: n, onSizeChange: r, "aria-label": i, className: a, options: s } = e, { className: c, onChange: l } = ue || {}, u = s.find((e) => String(e.value) === String(n))?.value;
		return /*#__PURE__*/ V.createElement(de, {
			disabled: t,
			showSearch: !0,
			popupMatchSelectWidth: !1,
			getPopupContainer: (e) => e.parentNode,
			"aria-label": i,
			options: s,
			...ue,
			value: u,
			onChange: (e, t) => {
				r?.(e), l?.(e, t);
			},
			size: R,
			className: o(a, c)
		});
	}, q = V.useMemo(() => {
		let e = /*#__PURE__*/ V.createElement("span", { className: `${P}-item-ellipsis` }, "•••");
		return {
			prevIcon: /* @__PURE__ */ V.createElement("button", {
				className: `${P}-item-link`,
				type: "button",
				tabIndex: -1
			}, k === "rtl" ? /*#__PURE__*/ V.createElement(p, null) : /*#__PURE__*/ V.createElement(l, null)),
			nextIcon: /* @__PURE__ */ V.createElement("button", {
				className: `${P}-item-link`,
				type: "button",
				tabIndex: -1
			}, k === "rtl" ? /*#__PURE__*/ V.createElement(l, null) : /*#__PURE__*/ V.createElement(p, null)),
			jumpPrevIcon: /* @__PURE__ */ V.createElement("a", { className: `${P}-item-link` }, /*#__PURE__*/ V.createElement("div", { className: `${P}-item-container` }, k === "rtl" ? /*#__PURE__*/ V.createElement(s, { className: `${P}-item-link-icon` }) : /*#__PURE__*/ V.createElement(n, { className: `${P}-item-link-icon` }), e)),
			jumpNextIcon: /* @__PURE__ */ V.createElement("a", { className: `${P}-item-link` }, /*#__PURE__*/ V.createElement("div", { className: `${P}-item-container` }, k === "rtl" ? /*#__PURE__*/ V.createElement(n, { className: `${P}-item-link-icon` }) : /*#__PURE__*/ V.createElement(s, { className: `${P}-item-link-icon` }), e))
		};
	}, [k, P]), pe = O("select", i), me = o({
		[`${P}-${t}`]: !!t,
		[`${P}-${R}`]: R,
		[`${P}-mini`]: z,
		[`${P}-rtl`]: k === "rtl",
		[`${P}-bordered`]: E.wireframe
	}, A, a, c, ie.root, L, re), he = {
		...ae.root,
		...j,
		...u
	};
	return /*#__PURE__*/ V.createElement(V.Fragment, null, E.wireframe && /*#__PURE__*/ V.createElement(xe, { prefixCls: P }), /*#__PURE__*/ V.createElement(fe, {
		...q,
		...S,
		styles: ae,
		classNames: ie,
		style: he,
		prefixCls: P,
		selectPrefixCls: pe,
		className: me,
		locale: se,
		pageSizeOptions: G,
		showSizeChanger: W,
		totalBoundaryShowSizeChanger: S.totalBoundaryShowSizeChanger ?? N,
		sizeChangerRender: K
	}));
}, we = /* @__PURE__ */ e({ default: () => Te }), Te = Ce, Ee = 100, De = Ee / 5, Oe = Ee / 2 - De / 2, ke = Oe * 2 * Math.PI, Ae = 50, je = (e) => {
	let { dotClassName: t, style: n, hasCircleCls: r } = e;
	return /*#__PURE__*/ V.createElement("circle", {
		className: o(`${t}-circle`, { [`${t}-circle-bg`]: r }),
		r: Oe,
		cx: Ae,
		cy: Ae,
		strokeWidth: De,
		style: n
	});
}, Z = ({ percent: e, prefixCls: t }) => {
	let n = `${t}-dot`, r = `${n}-holder`, i = `${r}-hidden`, [a, s] = V.useState(!1);
	f(() => {
		e !== 0 && s(!0);
	}, [e !== 0]);
	let c = Math.max(Math.min(e, 100), 0);
	if (!a) return null;
	let l = {
		strokeDashoffset: `${ke / 4}`,
		strokeDasharray: `${ke * c / 100} ${ke * (100 - c) / 100}`
	};
	return /*#__PURE__*/ V.createElement("span", { className: o(r, `${n}-progress`, { [i]: c <= 0 }) }, /*#__PURE__*/ V.createElement("svg", {
		viewBox: `0 0 ${Ee} ${Ee}`,
		role: "progressbar",
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": c
	}, /*#__PURE__*/ V.createElement(je, {
		dotClassName: n,
		hasCircleCls: !0
	}), /*#__PURE__*/ V.createElement(je, {
		dotClassName: n,
		style: l
	})));
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/spin/Indicator/Looper.js
function Q(e) {
	let { prefixCls: t, percent: n = 0, className: r, style: i } = e, a = `${t}-dot`, s = `${a}-holder`, c = `${s}-hidden`;
	return /*#__PURE__*/ V.createElement(V.Fragment, null, /*#__PURE__*/ V.createElement("span", {
		className: o(s, r, n > 0 && c),
		style: i
	}, /*#__PURE__*/ V.createElement("span", { className: o(a, `${t}-dot-spin`) }, [
		1,
		2,
		3,
		4
	].map((e) => /*#__PURE__*/ V.createElement("i", {
		className: `${t}-dot-item`,
		key: e
	})))), /*#__PURE__*/ V.createElement(Z, {
		prefixCls: t,
		percent: n
	}));
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/spin/Indicator/index.js
function Me(e) {
	let { prefixCls: t, indicator: n, percent: r, className: i, style: a } = e, s = `${t}-dot`;
	return n && /*#__PURE__*/ V.isValidElement(n) ? x(n, (e) => ({
		className: o(e.className, s, i),
		style: {
			...e.style,
			...a
		},
		percent: r
	})) : /*#__PURE__*/ V.createElement(Q, {
		prefixCls: t,
		percent: r,
		className: i,
		style: a
	});
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/spin/style/index.js
var Ne = new c("antSpinMove", { to: { opacity: 1 } }), Pe = new c("antRotate", { to: { transform: "rotate(405deg)" } }), Fe = (e) => {
	let { componentCls: t } = e, n = `${t}-section`;
	return { [t]: {
		...j(e),
		position: "relative",
		"&-rtl": { direction: "rtl" },
		[`&${n}, ${n}`]: {
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
			gap: e.paddingSM,
			color: e.colorPrimary
		},
		[`&${n}`]: { display: "inline-flex" },
		[n]: {
			position: "absolute",
			top: "50%",
			left: {
				_skip_check_: !0,
				value: "50%"
			},
			transform: "translate(-50%, -50%)",
			zIndex: 1
		},
		[`${t}-description`]: {
			fontSize: e.fontSize,
			lineHeight: 1
		},
		[`${t}-container`]: {
			position: "relative",
			transition: `opacity ${e.motionDurationSlow}`,
			"&::after": {
				position: "absolute",
				top: 0,
				insetInlineEnd: 0,
				bottom: 0,
				insetInlineStart: 0,
				zIndex: 10,
				width: "100%",
				height: "100%",
				background: e.colorBgContainer,
				opacity: 0,
				transition: `all ${e.motionDurationSlow}`,
				content: "\"\"",
				pointerEvents: "none"
			}
		},
		"&-spinning": {
			[`${t}-description`]: { textShadow: `0 0px 5px ${e.colorBgContainer}` },
			[`${t}-container`]: {
				clear: "both",
				opacity: .5,
				userSelect: "none",
				pointerEvents: "none",
				"&::after": {
					opacity: .4,
					pointerEvents: "auto"
				}
			}
		},
		"&-fullscreen": {
			position: "fixed",
			inset: 0,
			backgroundColor: e.colorBgMask,
			zIndex: e.zIndexPopupBase,
			opacity: 0,
			pointerEvents: "none",
			transition: `all ${e.motionDurationMid}`,
			[`&${t}-spinning`]: {
				opacity: 1,
				pointerEvents: "auto"
			},
			[n]: {
				color: e.colorWhite,
				[`${t}-description`]: { color: e.colorTextLightSolid }
			}
		}
	} };
}, Ie = (e) => {
	let { componentCls: t, antCls: n, motionDurationSlow: r } = e, [i, a] = A(n, "spin");
	return { [t]: {
		[i("dot-holder-size")]: e.dotSize,
		[i("dot-item-size")]: `calc((${a("dot-holder-size")} - ${e.marginXXS} / 2) / 2)`,
		[`${t}-dot`]: {
			"&-holder": {
				width: "1em",
				height: "1em",
				fontSize: a("dot-holder-size"),
				display: "inline-block",
				transition: ["transform", "opacity"].map((e) => `${e} ${r} ease`).join(", "),
				transformOrigin: "50% 50%",
				lineHeight: 1,
				"&-hidden": {
					transform: "scale(0.3)",
					opacity: 0
				}
			},
			position: "relative",
			display: "inline-block",
			fontSize: a("dot-holder-size"),
			width: "1em",
			height: "1em",
			"&-spin": {
				transform: "rotate(45deg)",
				animationName: Pe,
				animationDuration: "1.2s",
				animationIterationCount: "infinite",
				animationTimingFunction: "linear"
			},
			"&-item": {
				position: "absolute",
				display: "block",
				width: a("dot-item-size"),
				height: a("dot-item-size"),
				background: "currentColor",
				borderRadius: "100%",
				transform: "scale(0.75)",
				transformOrigin: "50% 50%",
				opacity: .3,
				animationName: Ne,
				animationDuration: "1s",
				animationIterationCount: "infinite",
				animationTimingFunction: "linear",
				animationDirection: "alternate",
				"&:nth-child(1)": {
					top: 0,
					insetInlineStart: 0,
					animationDelay: "0s"
				},
				"&:nth-child(2)": {
					top: 0,
					insetInlineEnd: 0,
					animationDelay: "0.4s"
				},
				"&:nth-child(3)": {
					insetInlineEnd: 0,
					bottom: 0,
					animationDelay: "0.8s"
				},
				"&:nth-child(4)": {
					bottom: 0,
					insetInlineStart: 0,
					animationDelay: "1.2s"
				}
			},
			"&-progress": {
				position: "absolute",
				left: "50%",
				top: 0,
				transform: "translateX(-50%)"
			},
			"&-circle": {
				strokeLinecap: "round",
				transition: [
					"stroke-dashoffset",
					"stroke-dasharray",
					"stroke",
					"stroke-width",
					"opacity"
				].map((e) => `${e} ${r} ease`).join(","),
				fillOpacity: 0,
				stroke: "currentcolor"
			},
			"&-circle-bg": { stroke: e.colorFillSecondary }
		}
	} };
}, Le = (e) => {
	let { componentCls: t } = e, [n] = A(e.antCls, "spin");
	return { [t]: {
		"&-sm": { [n("dot-holder-size")]: e.dotSizeSM },
		"&-lg": { [n("dot-holder-size")]: e.dotSizeLG }
	} };
}, Re = M("Spin", (e) => {
	let t = g(e, { spinDotDefault: e.colorTextDescription });
	return [
		Fe(t),
		Ie(t),
		Le(t)
	];
}, (e) => {
	let { controlHeightLG: t, controlHeight: n } = e;
	return {
		contentHeight: 400,
		dotSize: t / 2,
		dotSizeSM: t * .35,
		dotSizeLG: n
	};
}), $ = 200, ze = [
	[30, .05],
	[70, .03],
	[96, .01]
];
function Be(e, t) {
	let [n, r] = V.useState(0), i = V.useRef(null), a = t === "auto";
	return V.useEffect(() => (a && e && (r(0), i.current = setInterval(() => {
		r((e) => {
			let t = 100 - e;
			for (let n = 0; n < ze.length; n += 1) {
				let [r, i] = ze[n];
				if (e <= r) return e + t * i;
			}
			return e;
		});
	}, $)), () => {
		i.current &&= (clearInterval(i.current), null);
	}), [a, e]), a ? n : t;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/spin/index.js
var Ve = /* @__PURE__ */ e({ default: () => We }), He;
function Ue(e, t) {
	return !!e && !!t && !Number.isNaN(Number(t));
}
var We = (e) => {
	let { prefixCls: t, spinning: n = !0, delay: r = 0, className: i, rootClassName: a, size: s, tip: c, description: l, wrapperClassName: u, style: d, children: f, fullscreen: p = !1, indicator: m, percent: h, classNames: g, styles: v, ...y } = e, { getPrefixCls: x, direction: S, indicator: C, className: w, style: E, classNames: D, styles: O } = T("spin"), k = x("spin", t), [ee, A] = Re(k), [j, M] = V.useState(() => n && !Ue(n, r)), ne = Be(j, h);
	V.useEffect(() => {
		if (n) {
			let e = _(r, () => {
				M(!0);
			});
			return e(), () => {
				e?.cancel?.();
			};
		}
		M(!1);
	}, [r, n]);
	let N = te((e) => s ?? e), P = l ?? c, F = {
		...e,
		size: N,
		spinning: j,
		tip: P,
		description: P,
		fullscreen: p,
		children: f,
		percent: ne
	}, [I, L] = b([D, g], [O, v], { props: F }), re = m ?? C ?? He, R = f !== void 0, z = R || p, B = /*#__PURE__*/ V.createElement(V.Fragment, null, /*#__PURE__*/ V.createElement(Me, {
		className: o(I.indicator),
		style: L.indicator,
		prefixCls: k,
		indicator: re,
		percent: ne
	}), P && /*#__PURE__*/ V.createElement("div", {
		className: o(`${k}-description`, I.tip, I.description),
		style: {
			...L.tip,
			...L.description
		}
	}, P));
	return /*#__PURE__*/ V.createElement("div", {
		className: o(k, {
			[`${k}-sm`]: N === "small",
			[`${k}-lg`]: N === "large",
			[`${k}-spinning`]: j,
			[`${k}-rtl`]: S === "rtl",
			[`${k}-fullscreen`]: p
		}, a, I.root, p && I.mask, z ? u : [`${k}-section`, I.section], w, i, ee, A),
		style: {
			...L.root,
			...z ? {} : L.section,
			...p ? L.mask : {},
			...E,
			...d
		},
		"aria-live": "polite",
		"aria-busy": j,
		...y
	}, j && (z ? /*#__PURE__*/ V.createElement("div", {
		className: o(`${k}-section`, I.section),
		style: L.section
	}, B) : B), R && /*#__PURE__*/ V.createElement("div", {
		className: o(`${k}-container`, I.container),
		style: L.container
	}, f));
};
We.setDefaultIndicator = (e) => {
	He = e;
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/list/context.js
var Ge = /*#__PURE__*/ V.createContext({});
Ge.Consumer;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/list/Item.js
var Ke = ({ prefixCls: e, className: t, avatar: n, title: r, description: i, ...a }) => {
	let { getPrefixCls: s } = (0, V.useContext)(O), c = s("list", e), l = o(`${c}-item-meta`, t), u = /*#__PURE__*/ V.createElement("div", { className: `${c}-item-meta-content` }, r && /*#__PURE__*/ V.createElement("h4", { className: `${c}-item-meta-title` }, r), i && /*#__PURE__*/ V.createElement("div", { className: `${c}-item-meta-description` }, i));
	return /*#__PURE__*/ V.createElement("div", {
		...a,
		className: l
	}, n && /*#__PURE__*/ V.createElement("div", { className: `${c}-item-meta-avatar` }, n), (r || i) && u);
}, qe = /* @__PURE__ */ V.forwardRef((e, t) => {
	let { prefixCls: n, children: r, actions: i, extra: a, styles: s, className: c, classNames: l, colStyle: u, ...d } = e, { grid: f, itemLayout: p } = (0, V.useContext)(Ge), { getPrefixCls: m, list: g } = (0, V.useContext)(O), _ = (e) => o(g?.item?.classNames?.[e], l?.[e]), v = (e) => ({
		...g?.item?.styles?.[e],
		...s?.[e]
	}), y = () => {
		let e = h(r);
		return e.some(ne) && e.length > 1;
	}, b = () => p === "vertical" ? !!a : !y(), S = m("list", n), C = i && i.length > 0 && /*#__PURE__*/ V.createElement("ul", {
		className: o(`${S}-item-action`, _("actions")),
		key: "actions",
		style: v("actions")
	}, i.map((e, t) => /*#__PURE__*/ V.createElement("li", { key: `${S}-item-action-${t}` }, e, t !== i.length - 1 && /*#__PURE__*/ V.createElement("em", { className: `${S}-item-action-split` })))), w = f ? "div" : "li", T = /*#__PURE__*/ V.createElement(w, {
		...d,
		...f ? {} : { ref: t },
		className: o(`${S}-item`, { [`${S}-item-no-flex`]: !b() }, c)
	}, p === "vertical" && a ? [/*#__PURE__*/ V.createElement("div", {
		className: `${S}-item-main`,
		key: "content"
	}, r, C), /*#__PURE__*/ V.createElement("div", {
		className: o(`${S}-item-extra`, _("extra")),
		key: "extra",
		style: v("extra")
	}, a)] : [
		r,
		C,
		x(a, { key: "extra" })
	]);
	return f ? /*#__PURE__*/ V.createElement(oe, {
		ref: t,
		flex: 1,
		style: u
	}, T) : T;
});
qe.Meta = Ke;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/list/style/index.js
var Je = (e) => {
	let { listBorderedCls: t, componentCls: n, paddingLG: r, margin: i, itemPaddingSM: a, itemPaddingLG: o, marginLG: s, borderRadiusLG: c } = e, l = d(e.calc(c).sub(e.lineWidth).equal());
	return {
		[t]: {
			border: `${d(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
			borderRadius: c,
			[`${n}-header`]: { borderRadius: `${l} ${l} 0 0` },
			[`${n}-footer`]: { borderRadius: `0 0 ${l} ${l}` },
			[`${n}-header,${n}-footer,${n}-item`]: { paddingInline: r },
			[`${n}-pagination`]: { margin: `${d(i)} ${d(s)}` }
		},
		[`${t}${n}-sm`]: { [`${n}-item,${n}-header,${n}-footer`]: { padding: a } },
		[`${t}${n}-lg`]: { [`${n}-item,${n}-header,${n}-footer`]: { padding: o } }
	};
}, Ye = (e) => {
	let { componentCls: t, screenSM: n, screenMD: r, marginLG: i, marginSM: a, margin: o } = e;
	return {
		[`@media screen and (max-width:${r}px)`]: {
			[t]: { [`${t}-item`]: { [`${t}-item-action`]: { marginInlineStart: i } } },
			[`${t}-vertical`]: { [`${t}-item`]: { [`${t}-item-extra`]: { marginInlineStart: i } } }
		},
		[`@media screen and (max-width: ${n}px)`]: {
			[t]: { [`${t}-item`]: {
				flexWrap: "wrap",
				[`${t}-action`]: { marginInlineStart: a }
			} },
			[`${t}-vertical`]: { [`${t}-item`]: {
				flexWrap: "wrap-reverse",
				[`${t}-item-main`]: { minWidth: e.contentWidth },
				[`${t}-item-extra`]: { margin: `auto auto ${d(o)}` }
			} }
		}
	};
}, Xe = (e) => {
	let { componentCls: t, antCls: n, controlHeight: r, minHeight: i, paddingSM: a, marginLG: o, padding: s, itemPadding: c, colorPrimary: l, itemPaddingSM: u, itemPaddingLG: f, paddingXS: p, margin: m, colorText: h, colorTextDescription: g, motionDurationSlow: _, lineWidth: v, headerBg: y, footerBg: b, emptyTextPadding: x, metaMarginBottom: S, avatarMarginRight: C, titleMarginBottom: w, descriptionFontSize: T } = e;
	return {
		[t]: {
			...j(e),
			position: "relative",
			"--rc-virtual-list-scrollbar-bg": e.colorSplit,
			"*": { outline: "none" },
			[`${t}-header`]: { background: y },
			[`${t}-footer`]: { background: b },
			[`${t}-header, ${t}-footer`]: { paddingBlock: a },
			[`${t}-pagination`]: {
				marginBlockStart: o,
				[`${n}-pagination-options`]: { textAlign: "start" }
			},
			[`${t}-spin`]: {
				minHeight: i,
				textAlign: "center"
			},
			[`${t}-items`]: {
				margin: 0,
				padding: 0,
				listStyle: "none"
			},
			[`${t}-item`]: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: c,
				color: h,
				[`${t}-item-meta`]: {
					display: "flex",
					flex: 1,
					alignItems: "flex-start",
					maxWidth: "100%",
					[`${t}-item-meta-avatar`]: { marginInlineEnd: C },
					[`${t}-item-meta-content`]: {
						flex: "1 0",
						width: 0,
						color: h
					},
					[`${t}-item-meta-title`]: {
						margin: `0 0 ${d(e.marginXXS)} 0`,
						color: h,
						fontSize: e.fontSize,
						lineHeight: e.lineHeight,
						"> a": {
							color: h,
							transition: `all ${_}`,
							"&:hover": { color: l }
						}
					},
					[`${t}-item-meta-description`]: {
						color: g,
						fontSize: T,
						lineHeight: e.lineHeight
					}
				},
				[`${t}-item-action`]: {
					flex: "0 0 auto",
					marginInlineStart: e.marginXXL,
					padding: 0,
					fontSize: 0,
					listStyle: "none",
					"& > li": {
						position: "relative",
						display: "inline-block",
						padding: `0 ${d(p)}`,
						color: g,
						fontSize: e.fontSize,
						lineHeight: e.lineHeight,
						textAlign: "center",
						"&:first-child": { paddingInlineStart: 0 }
					},
					[`${t}-item-action-split`]: {
						position: "absolute",
						insetBlockStart: "50%",
						insetInlineEnd: 0,
						width: v,
						height: e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),
						transform: "translateY(-50%)",
						backgroundColor: e.colorSplit
					}
				}
			},
			[`${t}-empty`]: {
				padding: `${d(s)} 0`,
				color: g,
				fontSize: e.fontSizeSM,
				textAlign: "center"
			},
			[`${t}-empty-text`]: {
				padding: x,
				color: e.colorTextDisabled,
				fontSize: e.fontSize,
				textAlign: "center"
			},
			[`${t}-item-no-flex`]: { display: "block" }
		},
		[`${t}-grid ${n}-col > ${t}-item`]: {
			display: "block",
			maxWidth: "100%",
			marginBlockEnd: m,
			paddingBlock: 0,
			borderBlockEnd: "none"
		},
		[`${t}-vertical ${t}-item`]: {
			alignItems: "initial",
			[`${t}-item-main`]: {
				display: "block",
				flex: 1
			},
			[`${t}-item-extra`]: { marginInlineStart: o },
			[`${t}-item-meta`]: {
				marginBlockEnd: S,
				[`${t}-item-meta-title`]: {
					marginBlockStart: 0,
					marginBlockEnd: w,
					color: h,
					fontSize: e.fontSizeLG,
					lineHeight: e.lineHeightLG
				}
			},
			[`${t}-item-action`]: {
				marginBlockStart: s,
				marginInlineStart: "auto",
				"> li": {
					padding: `0 ${d(s)}`,
					"&:first-child": { paddingInlineStart: 0 }
				}
			}
		},
		[`${t}-split ${t}-item`]: {
			borderBlockEnd: `${d(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
			"&:last-child": { borderBlockEnd: "none" }
		},
		[`${t}-split ${t}-header`]: { borderBlockEnd: `${d(e.lineWidth)} ${e.lineType} ${e.colorSplit}` },
		[`${t}-split${t}-empty ${t}-footer`]: { borderTop: `${d(e.lineWidth)} ${e.lineType} ${e.colorSplit}` },
		[`${t}-loading ${t}-spin-nested-loading`]: { minHeight: r },
		[`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]: { borderBlockEnd: `${d(e.lineWidth)} ${e.lineType} ${e.colorSplit}` },
		[`${t}-lg ${t}-item`]: { padding: f },
		[`${t}-sm ${t}-item`]: { padding: u },
		[`${t}:not(${t}-vertical)`]: { [`${t}-item-no-flex`]: { [`${t}-item-action`]: { float: "right" } } }
	};
}, Ze = M("List", (e) => {
	let t = g(e, {
		listBorderedCls: `${e.componentCls}-bordered`,
		minHeight: e.controlHeightLG
	});
	return [
		Xe(t),
		Je(t),
		Ye(t)
	];
}, (e) => ({
	contentWidth: 220,
	itemPadding: `${d(e.paddingContentVertical)} 0`,
	itemPaddingSM: `${d(e.paddingContentVerticalSM)} ${d(e.paddingContentHorizontal)}`,
	itemPaddingLG: `${d(e.paddingContentVerticalLG)} ${d(e.paddingContentHorizontalLG)}`,
	headerBg: "transparent",
	footerBg: "transparent",
	emptyTextPadding: e.padding,
	metaMarginBottom: e.padding,
	avatarMarginRight: e.padding,
	titleMarginBottom: e.paddingSM,
	descriptionFontSize: e.fontSize
}), { extraCssVarPrefixCls: ({ prefixCls: e }) => [`${e}-container`] }), Qe = /* @__PURE__ */ e({ default: () => $e }), $e = /* @__PURE__ */ V.forwardRef((e, t) => {
	let { pagination: n = !1, prefixCls: r, bordered: i = !1, split: s = !0, className: c, rootClassName: l, style: u, children: d, itemLayout: f, loadMore: p, grid: m, dataSource: h = [], size: g, header: _, footer: y, loading: b = !1, rowKey: x, renderItem: C, locale: D, ...k } = e, ee = S(n) ? n : {}, [A, j] = V.useState(ee.defaultCurrent || 1), [M, ne] = V.useState(ee.defaultPageSize || 10), { getPrefixCls: N, direction: F, className: L, style: re } = T("list"), { renderEmpty: R } = V.useContext(O), z = {
		current: 1,
		total: 0,
		position: "bottom"
	}, B = (e) => (t, r) => {
		j(t), ne(r), n && n?.[e]?.(t, r);
	}, ie = B("onChange"), ae = B("onShowSizeChange"), oe = (e, t) => {
		if (!C) return null;
		let n;
		return n = E(x) ? x(e) : x ? e[x] : e.key, n ||= `list-item-${t}`, /*#__PURE__*/ V.createElement(V.Fragment, { key: n }, C(e, t));
	}, ce = !!(p || n || y), H = N("list", r), [le, U] = Ze(H), W = b;
	typeof W == "boolean" && (W = { spinning: W });
	let ue = !!W?.spinning, de = te(g), G = "";
	switch (de) {
		case "large":
			G = "lg";
			break;
		case "small":
			G = "sm";
			break;
		default: break;
	}
	let K = o(H, {
		[`${H}-vertical`]: f === "vertical",
		[`${H}-${G}`]: G,
		[`${H}-split`]: s,
		[`${H}-bordered`]: i,
		[`${H}-loading`]: ue,
		[`${H}-grid`]: !!m,
		[`${H}-something-after-last-item`]: ce,
		[`${H}-rtl`]: F === "rtl"
	}, L, c, l, le, U), fe = `${H}-container`, q = v(z, {
		total: h.length,
		current: A,
		pageSize: M
	}, n || {}), pe = Math.ceil(q.total / q.pageSize);
	q.current = Math.min(q.current, pe);
	let me = n && /*#__PURE__*/ V.createElement("div", { className: o(`${H}-pagination`) }, /*#__PURE__*/ V.createElement(Te, {
		align: "end",
		...q,
		onChange: ie,
		onShowSizeChange: ae
	})), he = a(h);
	n && h.length > (q.current - 1) * q.pageSize && (he = a(h).splice((q.current - 1) * q.pageSize, q.pageSize));
	let J = I(Object.keys(m || {}).some((e) => P.includes(e))), Y = V.useMemo(() => {
		for (let e = 0; e < P.length; e += 1) {
			let t = P[e];
			if (J[t]) return t;
		}
	}, [J]), ge = V.useMemo(() => {
		if (!m) return;
		let e = Y && m[Y] ? m[Y] : m.column;
		if (e) return {
			width: `${100 / e}%`,
			maxWidth: `${100 / e}%`
		};
	}, [JSON.stringify(m), Y]), _e = ue && /*#__PURE__*/ V.createElement("div", { style: { minHeight: 53 } });
	if (he.length > 0) {
		let e = he.map(oe);
		_e = m ? /*#__PURE__*/ V.createElement(se, {
			className: o(fe, U),
			gutter: m.gutter
		}, V.Children.map(e, (e) => /*#__PURE__*/ V.createElement("div", {
			key: e?.key,
			style: ge
		}, e))) : /*#__PURE__*/ V.createElement("ul", { className: o(`${H}-items`, fe, U) }, e);
	} else !d && !ue && (_e = /*#__PURE__*/ V.createElement("div", { className: `${H}-empty-text` }, D?.emptyText || R?.("List") || /*#__PURE__*/ V.createElement(w, { componentName: "List" })));
	let X = q.position, ve = V.useMemo(() => ({
		grid: m,
		itemLayout: f
	}), [JSON.stringify(m), f]);
	return /*#__PURE__*/ V.createElement(Ge.Provider, { value: ve }, /*#__PURE__*/ V.createElement("div", {
		ref: t,
		style: {
			...re,
			...u
		},
		className: K,
		...k
	}, (X === "top" || X === "both") && me, _ && /*#__PURE__*/ V.createElement("div", { className: `${H}-header` }, _), /*#__PURE__*/ V.createElement(We, { ...W }, _e, d), y && /*#__PURE__*/ V.createElement("div", { className: `${H}-footer` }, y), p || (X === "bottom" || X === "both") && me));
});
$e.Item = qe;
//#endregion
export { we as a, Te as i, We as n, Ve as r, Qe as t };
