globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $ as n, Bt as r, Dn as i, Gt as a, Ht as o, Jt as s, Kt as c, Mt as l, Nt as u, On as d, Q as f, Rt as p, Tt as m, Ut as h, _ as g, _n as _, _t as v, bn as y, d as b, dn as x, en as S, f as C, fn as w, g as T, h as E, kt as D, l as O, ln as k, m as A, mn as j, p as M, qt as ee, rt as te, sn as N, u as P, v as F, wn as I, yn as ne, yt as L, zt as R } from "../shared/core.js";
import { C as z, Gn as B, Gt as V, Jn as re, Mn as ie, Qn as H, Rn as ae, S as oe, Sr as U, Tn as W, Wn as se, Xn as ce, Yn as le, Zn as ue, _n as de, _r as fe, br as pe, en as me, fr as G, gr as he, hn as ge, in as _e, kn as ve, lr as ye, mn as K, pr as be, qn as xe, sr as Se, ur as Ce, wr as q, xt as we, zn as Te } from "../shared/antd-core.js";
import { u as Ee } from "./auto-complete.js";
import { l as De, o as Oe, u as ke } from "./avatar.js";
import { a as Ae, r as je } from "./breadcrumb.js";
import { _ as J } from "./calendar.js";
import { a as Y, c as Me, d as Ne, f as Pe, i as Fe, l as Ie, n as Le, o as Re, s as ze, u as Be } from "./cascader.js";
import { t as Ve } from "./checkbox.js";
import { r as He } from "./color-picker.js";
import { t as Ue } from "./dropdown.js";
import { i as We, n as Ge } from "./list.js";
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/constant.js
var X = /* @__PURE__ */ t(d()), Ke = {}, qe = "rc-table-internal-hook", Je = /* @__PURE__ */ t(i());
function Ye(e) {
	let t = /*#__PURE__*/ X.createContext(void 0);
	return {
		Context: t,
		Provider: ({ value: e, children: n }) => {
			let r = X.useRef(e);
			r.current = e;
			let [i] = X.useState(() => ({
				getValue: () => r.current,
				listeners: /* @__PURE__ */ new Set()
			}));
			return k(() => {
				(0, Je.unstable_batchedUpdates)(() => {
					i.listeners.forEach((t) => {
						t(e);
					});
				});
			}, [e]), /*#__PURE__*/ X.createElement(t.Provider, { value: i }, n);
		},
		defaultValue: e
	};
}
function Z(e, t) {
	let n = w(typeof t == "function" ? t : (e) => {
		if (t === void 0) return e;
		if (!Array.isArray(t)) return e[t];
		let n = {};
		return t.forEach((t) => {
			n[t] = e[t];
		}), n;
	}), r = X.useContext(e?.Context), { listeners: i, getValue: o } = r || {}, s = X.useRef();
	s.current = n(r ? o() : e?.defaultValue);
	let [, c] = X.useState({});
	return k(() => {
		if (!r) return;
		function e(e) {
			let t = n(e);
			a(s.current, t, !0) || c({});
		}
		return i.add(e), () => {
			i.delete(e);
		};
	}, [r]), s.current;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+context@2.0.2_0f5b05d270b3b0729358ad8eaffe5789/node_modules/@rc-component/context/es/Immutable.js
function Xe() {
	return Xe = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Xe.apply(this, arguments);
}
function Ze() {
	let e = /*#__PURE__*/ X.createContext(null);
	function t() {
		return X.useContext(e);
	}
	function n(n, r) {
		let i = _(n), a = (a, o) => {
			let s = i ? { ref: o } : {}, c = X.useRef(0), l = X.useRef(a);
			return t() === null ? ((!r || r(l.current, a)) && (c.current += 1), l.current = a, /*#__PURE__*/ X.createElement(e.Provider, { value: c.current }, /*#__PURE__*/ X.createElement(n, Xe({}, a, s)))) : /*#__PURE__*/ X.createElement(n, Xe({}, a, s));
		};
		return i ? /*#__PURE__*/ X.forwardRef(a) : a;
	}
	function r(e, n) {
		let r = _(e), i = (n, i) => {
			let a = r ? { ref: i } : {};
			return t(), /*#__PURE__*/ X.createElement(e, Xe({}, n, a));
		};
		return /*#__PURE__*/ X.memo(r ? /*#__PURE__*/ X.forwardRef(i) : i, n);
	}
	return {
		makeImmutable: n,
		responseImmutable: r,
		useImmutableMark: t
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+context@2.0.2_0f5b05d270b3b0729358ad8eaffe5789/node_modules/@rc-component/context/es/index.js
var { makeImmutable: Qe, responseImmutable: $e, useImmutableMark: et } = Ze(), { makeImmutable: tt, responseImmutable: Q, useImmutableMark: nt } = Ze(), $ = Ye(), rt = /*#__PURE__*/ X.createContext({ renderWithProps: !1 }), it = "RC_TABLE_KEY";
function at(e) {
	return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ot(e) {
	let t = [], n = {};
	return e.forEach((e) => {
		let { key: r, dataIndex: i } = e || {}, a = r || at(i).join("-") || it;
		for (; n[a];) a = `${a}_next`;
		n[a] = !0, t.push(a);
	}), t;
}
function st(e) {
	return e != null;
}
function ct(e) {
	return typeof e == "number" && !Number.isNaN(e);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Cell/useCellRender.js
function lt(e) {
	return e && typeof e == "object" && !Array.isArray(e) && !/*#__PURE__*/ X.isValidElement(e);
}
function ut(e, t, n, r, i, o) {
	let s = X.useContext(rt);
	return ne(() => {
		if (st(r)) return [r];
		let a = p(e, t == null || t === "" ? [] : Array.isArray(t) ? t : [t]), o = a, c;
		if (i) {
			let t = i(a, e, n);
			lt(t) ? (o = t.children, c = t.props, s.renderWithProps = !0) : o = t;
		}
		return [o, c];
	}, [
		nt(),
		e,
		r,
		t,
		i,
		n
	], (e, t) => {
		if (o) {
			let [, n] = e, [, r] = t;
			return o(r, n);
		}
		return s.renderWithProps ? !0 : !a(e, t, !0);
	});
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Cell/useHoverState.js
function dt(e, t, n, r) {
	let i = e + t - 1;
	return e <= r && i >= n;
}
function ft(e, t) {
	return Z($, (n) => [dt(e, t || 1, n.hoverStartRow, n.hoverEndRow), n.onHover]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Cell/index.js
function pt() {
	return pt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, pt.apply(this, arguments);
}
var mt = ({ ellipsis: e, rowType: t, children: n }) => {
	let r, i = e === !0 ? { showTitle: !0 } : e;
	return i && (i.showTitle || t === "header") && (typeof n == "string" || typeof n == "number" ? r = n.toString() : /*#__PURE__*/ X.isValidElement(n) && typeof n.props?.children == "string" && (r = n.props?.children)), r;
}, ht = /*#__PURE__*/ X.memo((e) => {
	let { component: t, children: n, ellipsis: r, scope: i, prefixCls: a, className: o, style: s, align: c, record: l, render: d, dataIndex: f, renderIndex: p, shouldCellUpdate: m, index: h, rowType: g, colSpan: _, rowSpan: v, fixStart: y, fixEnd: b, fixedStartShadow: x, fixedEndShadow: S, offsetFixedStartShadow: C, offsetFixedEndShadow: T, zIndex: E, zIndexReverse: D, appendNode: O, additionalProps: k = {}, isSticky: A } = e, j = `${a}-cell`, { allColumnsFixedLeft: M, rowHoverable: ee } = Z($, ["allColumnsFixedLeft", "rowHoverable"]), [te, N] = ut(l, f, p, n, d, m), P = {}, F = typeof y == "number" && !M, I = typeof b == "number" && !M, [ne, L] = Z($, ({ scrollInfo: e }) => {
		if (!F && !I) return [!1, !1];
		let [t, n] = e;
		return [(F && x && t) - C >= 1, (I && S && n - t) - T > 1];
	});
	F && (P.insetInlineStart = y, P["--z-offset"] = E, P["--z-offset-reverse"] = D), I && (P.insetInlineEnd = b, P["--z-offset"] = E, P["--z-offset-reverse"] = D);
	let R = N?.colSpan ?? k.colSpan ?? _ ?? 1, z = N?.rowSpan ?? k.rowSpan ?? v ?? 1, [B, V] = ft(h, z), re = w((e) => {
		l && V(h, h + z - 1), k?.onMouseEnter?.(e);
	}), ie = w((e) => {
		l && V(-1, -1), k?.onMouseLeave?.(e);
	});
	if (R === 0 || z === 0) return null;
	let H = k.title ?? mt({
		rowType: g,
		ellipsis: r,
		children: te
	}), ae = u(j, o, {
		[`${j}-fix`]: F || I,
		[`${j}-fix-start`]: F,
		[`${j}-fix-end`]: I,
		[`${j}-fix-start-shadow`]: x,
		[`${j}-fix-start-shadow-show`]: x && ne,
		[`${j}-fix-end-shadow`]: S,
		[`${j}-fix-end-shadow-show`]: S && L,
		[`${j}-ellipsis`]: r,
		[`${j}-with-append`]: O,
		[`${j}-fix-sticky`]: (F || I) && A,
		[`${j}-row-hover`]: !N && B
	}, k.className, N?.className), oe = {};
	c && (oe.textAlign = c);
	let U = {
		...N?.style,
		...P,
		...oe,
		...k.style,
		...s
	}, W = te;
	return typeof W == "object" && !Array.isArray(W) && !/*#__PURE__*/ X.isValidElement(W) && (W = null), r && (x || S) && (W = /*#__PURE__*/ X.createElement("span", { className: `${j}-content` }, W)), /*#__PURE__*/ X.createElement(t, pt({}, N, k, {
		className: ae,
		style: U,
		title: H,
		scope: i,
		onMouseEnter: ee ? re : void 0,
		onMouseLeave: ee ? ie : void 0,
		colSpan: R === 1 ? null : R,
		rowSpan: z === 1 ? null : z
	}), O, W);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/utils/fixUtil.js
function gt(e) {
	return e.fixed === "start";
}
function _t(e) {
	return e.fixed === "end";
}
function vt(e, t, n, r) {
	let i = n[e] || {}, a = n[t] || {}, o = null, s = null;
	gt(i) && gt(a) ? o = r.start[e] : _t(a) && _t(i) && (s = r.end[t]);
	let c = !1, l = !1, u = 0, d = 0;
	o !== null && (c = !n[t + 1] || !gt(n[t + 1]), u = n.length * 2 - e, d = n.length + e), s !== null && (l = !n[e - 1] || !_t(n[e - 1]), u = t, d = n.length - t);
	let f = 0, p = 0;
	if (c) for (let t = 0; t < e; t += 1) gt(n[t]) || (f += r.widths[t] || 0);
	if (l) for (let e = n.length - 1; e > t; --e) _t(n[e]) || (p += r.widths[e] || 0);
	return {
		fixStart: o,
		fixEnd: s,
		fixedStartShadow: c,
		fixedEndShadow: l,
		offsetFixedStartShadow: f,
		offsetFixedEndShadow: p,
		isSticky: r.isSticky,
		zIndex: u,
		zIndexReverse: d
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Footer/SummaryContext.js
var yt = /*#__PURE__*/ X.createContext({});
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Footer/Cell.js
function bt() {
	return bt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, bt.apply(this, arguments);
}
var xt = (e) => {
	let { className: t, index: n, children: r, colSpan: i = 1, rowSpan: a, align: o } = e, { prefixCls: s } = Z($, ["prefixCls"]), { scrollColumnIndex: c, stickyOffsets: l, flattenColumns: u } = X.useContext(yt), d = n + i - 1 + 1 === c ? i + 1 : i, f = X.useMemo(() => vt(n, n + d - 1, u, l), [
		n,
		d,
		u,
		l
	]);
	return /*#__PURE__*/ X.createElement(ht, bt({
		className: t,
		index: n,
		component: "td",
		prefixCls: s,
		record: null,
		dataIndex: null,
		align: o,
		colSpan: d,
		rowSpan: a,
		render: () => r
	}, f));
}, St = (e) => {
	let { children: t, ...n } = e;
	return /*#__PURE__*/ X.createElement("tr", n, t);
}, Ct = (e) => {
	let { children: t } = e;
	return t;
};
Ct.Row = St, Ct.Cell = xt;
var wt = Q((e) => {
	let { children: t, stickyOffsets: n, flattenColumns: r } = e, i = Z($, "prefixCls"), a = r.length - 1, o = r[a], s = X.useMemo(() => ({
		stickyOffsets: n,
		flattenColumns: r,
		scrollColumnIndex: o?.scrollbar ? a : null
	}), [
		o,
		r,
		a,
		n
	]);
	return /*#__PURE__*/ X.createElement(yt.Provider, { value: s }, /*#__PURE__*/ X.createElement("tfoot", { className: `${i}-summary` }, t));
}), Tt = Ct;
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/sugar/Column.js
/* istanbul ignore next */
function Et(e) {
	return null;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/sugar/ColumnGroup.js
/* istanbul ignore next */
function Dt(e) {
	return null;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useFlattenRecords.js
function Ot(e, t, n, r, i, a, o) {
	let s = a(t, o);
	e.push({
		record: t,
		indent: n,
		index: o,
		rowKey: s
	});
	let c = i?.has(s);
	if (t && Array.isArray(t[r]) && c) for (let o = 0; o < t[r].length; o += 1) Ot(e, t[r][o], n + 1, r, i, a, o);
}
function kt(e, t, n, r) {
	return X.useMemo(() => {
		if (n?.size) {
			let i = [];
			for (let a = 0; a < e?.length; a += 1) {
				let o = e[a];
				Ot(i, o, 0, t, n, r, a);
			}
			return i;
		}
		return e?.map((e, t) => ({
			record: e,
			indent: 0,
			index: t,
			rowKey: r(e, t)
		}));
	}, [
		e,
		t,
		n,
		r
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useRowInfo.js
function At(e, t, n, r) {
	let i = Z($, [
		"prefixCls",
		"fixedInfoList",
		"flattenColumns",
		"expandableType",
		"expandRowByClick",
		"onTriggerExpand",
		"rowClassName",
		"expandedRowClassName",
		"indentSize",
		"expandIcon",
		"expandedRowRender",
		"expandIconColumnIndex",
		"expandedKeys",
		"childrenColumnName",
		"rowExpandable",
		"onRow"
	]), { flattenColumns: a, expandableType: o, expandedKeys: s, childrenColumnName: c, onTriggerExpand: l, rowExpandable: d, onRow: f, expandRowByClick: p, rowClassName: m } = i, h = o === "nest", g = o === "row" && (!d || d(e)), _ = g || h, v = s && s.has(t), y = c && e && e[c], b = w(l), x = f?.(e, n), S = x?.onClick, C = (t, ...n) => {
		p && _ && l(e, t), S?.(t, ...n);
	}, T;
	typeof m == "string" ? T = m : typeof m == "function" && (T = m(e, n, r));
	let E = ot(a);
	return {
		...i,
		columnsKey: E,
		nestExpandable: h,
		expanded: v,
		hasNestChildren: y,
		record: e,
		onTriggerExpand: b,
		rowSupportExpand: g,
		expandable: _,
		rowProps: {
			...x,
			className: u(T, x?.className),
			onClick: C
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Body/ExpandedRow.js
var jt = (e) => {
	let { prefixCls: t, children: n, component: r, cellComponent: i, className: a, expanded: o, colSpan: s, isEmpty: c, stickyOffset: l = 0 } = e, { scrollbarSize: u, fixHeader: d, fixColumn: f, componentWidth: p, horizonScroll: m } = Z($, [
		"scrollbarSize",
		"fixHeader",
		"fixColumn",
		"componentWidth",
		"horizonScroll"
	]), h = n;
	return (c ? m && p : f) && (h = /*#__PURE__*/ X.createElement("div", {
		style: {
			width: p - l - (d && !c ? u : 0),
			position: "sticky",
			left: l,
			overflow: "hidden"
		},
		className: `${t}-expanded-row-fixed`
	}, h)), /*#__PURE__*/ X.createElement(r, {
		className: a,
		style: { display: o ? null : "none" }
	}, /*#__PURE__*/ X.createElement(ht, {
		component: i,
		prefixCls: t,
		colSpan: s
	}, h));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/utils/expandUtil.js
function Mt({ prefixCls: e, record: t, onExpand: n, expanded: r, expandable: i }) {
	let a = `${e}-row-expand-icon`;
	if (!i) return /*#__PURE__*/ X.createElement("span", { className: u(a, `${e}-row-spaced`) });
	let o = (e) => {
		n(t, e), e.stopPropagation();
	};
	return /*#__PURE__*/ X.createElement("span", {
		className: u(a, {
			[`${e}-row-expanded`]: r,
			[`${e}-row-collapsed`]: !r
		}),
		onClick: o
	});
}
function Nt(e, t, n) {
	let r = [];
	function i(e) {
		(e || []).forEach((e, a) => {
			r.push(t(e, a)), i(e[n]);
		});
	}
	return i(e), r;
}
function Pt(e, t, n, r) {
	return typeof e == "string" ? e : typeof e == "function" ? e(t, n, r) : "";
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Body/BodyRow.js
function Ft() {
	return Ft = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ft.apply(this, arguments);
}
function It(e, t, n, r, i, a = [], o = 0) {
	let { record: s, prefixCls: c, columnsKey: l, fixedInfoList: u, expandIconColumnIndex: d, nestExpandable: f, indentSize: p, expandIcon: m, expanded: h, hasNestChildren: g, onTriggerExpand: _, expandable: v, expandedKeys: y } = e, b = l[n], x = u[n], S;
	n === (d || 0) && f && (S = /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("span", {
		style: { paddingLeft: `${p * r}px` },
		className: `${c}-row-indent indent-level-${r}`
	}), m({
		prefixCls: c,
		expanded: h,
		expandable: g,
		record: s,
		onExpand: _
	})));
	let C = t.onCell?.(s, i) || {};
	if (o) {
		let { rowSpan: e = 1 } = C;
		if (v && e && n < o) {
			let t = e;
			for (let n = i; n < i + e; n += 1) {
				let e = a[n];
				y.has(e) && (t += 1);
			}
			C.rowSpan = t;
		}
	}
	return {
		key: b,
		fixedInfo: x,
		appendCellNode: S,
		additionalCellProps: C
	};
}
var Lt = Q((e) => {
	let { className: t, style: n, classNames: r, styles: i, record: a, index: o, renderIndex: s, rowKey: c, rowKeys: l, indent: d = 0, rowComponent: f, cellComponent: p, scopeCellComponent: m, expandedRowInfo: h } = e, g = At(a, c, o, d), { prefixCls: _, flattenColumns: v, expandedRowClassName: y, expandedRowRender: b, rowProps: x, expanded: S, rowSupportExpand: C } = g, w = X.useRef(!1);
	w.current ||= S;
	let T = Pt(y, a, o, d), E = /*#__PURE__*/ X.createElement(f, Ft({}, x, {
		"data-row-key": c,
		className: u(t, `${_}-row`, `${_}-row-level-${d}`, x?.className, r.row, { [T]: d >= 1 }),
		style: {
			...n,
			...x?.style,
			...i.row
		}
	}), v.map((e, t) => {
		let { render: n, dataIndex: c, className: f } = e, { key: v, fixedInfo: y, appendCellNode: b, additionalCellProps: x } = It(g, e, t, d, o, l, h?.offset);
		return /*#__PURE__*/ X.createElement(ht, Ft({
			className: u(f, r.cell),
			style: i.cell,
			ellipsis: e.ellipsis,
			align: e.align,
			scope: e.rowScope,
			component: e.rowScope ? m : p,
			prefixCls: _,
			key: v,
			record: a,
			index: o,
			renderIndex: s,
			dataIndex: c,
			render: n,
			shouldCellUpdate: e.shouldCellUpdate
		}, y, {
			appendNode: b,
			additionalProps: x
		}));
	})), D;
	if (C && (w.current || S)) {
		let e = b(a, o, d + 1, S);
		D = /*#__PURE__*/ X.createElement(jt, {
			expanded: S,
			className: u(`${_}-expanded-row`, `${_}-expanded-row-level-${d + 1}`, T),
			prefixCls: _,
			component: f,
			cellComponent: p,
			colSpan: h ? h.colSpan : v.length,
			isEmpty: !1,
			stickyOffset: h?.sticky
		}, e);
	}
	return /*#__PURE__*/ X.createElement(X.Fragment, null, E, D);
}), Rt = (e) => {
	let { columnKey: t, onColumnResize: n, title: r } = e, i = X.useRef(null);
	return k(() => {
		i.current && n(t, i.current.offsetWidth);
	}, []), /*#__PURE__*/ X.createElement(q, { data: t }, /*#__PURE__*/ X.createElement("td", {
		ref: i,
		style: {
			paddingTop: 0,
			paddingBottom: 0,
			borderTop: 0,
			borderBottom: 0,
			height: 0
		}
	}, /*#__PURE__*/ X.createElement("div", { style: {
		height: 0,
		overflow: "hidden",
		fontWeight: "bold"
	} }, r || "\xA0")));
}, zt = ({ prefixCls: e, columnsKey: t, onColumnResize: n, columns: r }) => {
	let i = X.useRef(null), { measureRowRender: a } = Z($, ["measureRowRender"]), o = /*#__PURE__*/ X.createElement("tr", {
		"aria-hidden": "true",
		className: `${e}-measure-row`,
		style: { height: 0 },
		ref: i
	}, /*#__PURE__*/ X.createElement(q.Collection, { onBatchResize: (e) => {
		S(i.current) && e.forEach(({ data: e, size: t }) => {
			n(e, t.offsetWidth);
		});
	} }, t.map((e) => {
		let t = r.find((t) => t.key === e)?.title, i = /*#__PURE__*/ X.isValidElement(t) ? /*#__PURE__*/ X.cloneElement(t, { ref: null }) : t;
		return /*#__PURE__*/ X.createElement(Rt, {
			key: e,
			columnKey: e,
			onColumnResize: n,
			title: i
		});
	})));
	return typeof a == "function" ? a(o) : o;
}, Bt = Q((e) => {
	let { data: t, measureColumnWidth: n } = e, { prefixCls: r, getComponent: i, onColumnResize: a, flattenColumns: o, getRowKey: s, expandedKeys: c, childrenColumnName: l, emptyNode: d, classNames: f, styles: p, expandedRowOffset: m = 0, colWidths: h } = Z($, [
		"prefixCls",
		"getComponent",
		"onColumnResize",
		"flattenColumns",
		"getRowKey",
		"expandedKeys",
		"childrenColumnName",
		"emptyNode",
		"classNames",
		"styles",
		"expandedRowOffset",
		"fixedInfoList",
		"colWidths"
	]), { body: g = {} } = f || {}, { body: _ = {} } = p || {}, v = kt(t, l, c, s), y = X.useMemo(() => v.map((e) => e.rowKey), [v]), b = X.useRef({ renderWithProps: !1 }), x = X.useMemo(() => {
		let e = o.length - m, t = 0;
		for (let e = 0; e < m; e += 1) t += h[e] || 0;
		return {
			offset: m,
			colSpan: e,
			sticky: t
		};
	}, [
		o.length,
		m,
		h
	]), S = i(["body", "wrapper"], "tbody"), C = i(["body", "row"], "tr"), w = i(["body", "cell"], "td"), T = i(["body", "cell"], "th"), E;
	E = t.length ? v.map((e, t) => {
		let { record: n, indent: r, index: i, rowKey: a } = e;
		return /*#__PURE__*/ X.createElement(Lt, {
			classNames: g,
			styles: _,
			key: a,
			rowKey: a,
			rowKeys: y,
			record: n,
			index: t,
			renderIndex: i,
			rowComponent: C,
			cellComponent: w,
			scopeCellComponent: T,
			indent: r,
			expandedRowInfo: x
		});
	}) : /*#__PURE__*/ X.createElement(jt, {
		expanded: !0,
		className: `${r}-placeholder`,
		prefixCls: r,
		component: C,
		cellComponent: w,
		colSpan: o.length,
		isEmpty: !0
	}, d);
	let D = ot(o);
	return /*#__PURE__*/ X.createElement(rt.Provider, { value: b.current }, /*#__PURE__*/ X.createElement(S, {
		style: _.wrapper,
		className: u(`${r}-tbody`, g.wrapper)
	}, n && /*#__PURE__*/ X.createElement(zt, {
		prefixCls: r,
		columnsKey: D,
		onColumnResize: a,
		columns: o
	}), E));
}), Vt = "RC_TABLE_INTERNAL_COL_DEFINE";
function Ht(e) {
	let { expandable: t, ...n } = e, r;
	return r = "expandable" in e ? {
		...n,
		...t
	} : n, r.showExpandColumn === !1 && (r.expandIconColumnIndex = -1), r;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/ColGroup.js
function Ut() {
	return Ut = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ut.apply(this, arguments);
}
var Wt = (e) => {
	let { colWidths: t, columns: n, columCount: r } = e, { tableLayout: i } = Z($, ["tableLayout"]), a = [], o = r || n.length, s = !1;
	for (let e = o - 1; e >= 0; --e) {
		let r = t[e], o = n && n[e], c, l;
		if (o && (c = o[Vt], i === "auto" && (l = o.minWidth)), r || l || c || s) {
			let { columnType: t, ...n } = c || {};
			a.unshift(/*#__PURE__*/ X.createElement("col", Ut({
				key: e,
				style: {
					width: r,
					minWidth: l
				}
			}, n))), s = !0;
		}
	}
	return a.length > 0 ? /*#__PURE__*/ X.createElement("colgroup", null, a) : null;
};
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/FixedHolder/index.js
function Gt(e, t) {
	return (0, X.useMemo)(() => {
		let n = [];
		for (let r = 0; r < t; r += 1) {
			let t = e[r];
			if (t !== void 0) n[r] = t;
			else return null;
		}
		return n;
	}, [e.join("_"), t]);
}
var Kt = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { className: n, style: r, noData: i, columns: a, flattenColumns: o, colWidths: s, colGroup: c, columCount: l, stickyOffsets: d, direction: f, fixHeader: p, stickyTopOffset: m, stickyBottomOffset: h, stickyClassName: g, scrollX: _, tableLayout: v = "fixed", onScroll: y, maxContentScroll: b, children: x, ...S } = e, { prefixCls: C, scrollbarSize: w, isSticky: T, getComponent: E } = Z($, [
		"prefixCls",
		"scrollbarSize",
		"isSticky",
		"getComponent"
	]), D = E(["header", "table"], "table"), O = T && !p ? 0 : w, k = X.useRef(null), A = X.useCallback((e) => {
		j(t, e), j(k, e);
	}, []);
	X.useEffect(() => {
		function e(e) {
			let { currentTarget: t, deltaX: n } = e;
			if (n) {
				let { scrollLeft: r, scrollWidth: i, clientWidth: a } = t, o = i - a, s = r + n;
				f === "rtl" ? (s = Math.max(-o, s), s = Math.min(0, s)) : (s = Math.min(o, s), s = Math.max(0, s)), y({
					currentTarget: t,
					scrollLeft: s
				}), e.preventDefault();
			}
		}
		let t = k.current;
		return t?.addEventListener("wheel", e, { passive: !1 }), () => {
			t?.removeEventListener("wheel", e);
		};
	}, []);
	let M = o[o.length - 1], ee = {
		fixed: M ? M.fixed : null,
		scrollbar: !0,
		onHeaderCell: () => ({ className: `${C}-cell-scrollbar` })
	}, te = (0, X.useMemo)(() => O ? [...a, ee] : a, [O, a]), N = (0, X.useMemo)(() => O ? [...o, ee] : o, [O, o]), P = (0, X.useMemo)(() => {
		let { start: e, end: t } = d;
		return {
			...d,
			start: e,
			end: [...t.map((e) => e + O), 0],
			isSticky: T
		};
	}, [
		O,
		d,
		T
	]), F = Gt(s, l), I = (0, X.useMemo)(() => {
		let e = !F || !F.length || F.every((e) => !e);
		return i || e;
	}, [i, F]);
	return /*#__PURE__*/ X.createElement("div", {
		style: {
			overflow: "hidden",
			...T ? {
				top: m,
				bottom: h
			} : {},
			...r
		},
		ref: A,
		className: u(n, { [g]: !!g })
	}, /*#__PURE__*/ X.createElement(D, { style: {
		tableLayout: v,
		minWidth: "100%",
		width: _
	} }, I ? c : /*#__PURE__*/ X.createElement(Wt, {
		colWidths: [...F, O],
		columCount: l + 1,
		columns: N
	}), x({
		...S,
		stickyOffsets: P,
		columns: te,
		flattenColumns: N
	})));
}), qt = /*#__PURE__*/ X.memo(Kt);
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Header/HeaderRow.js
function Jt() {
	return Jt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Jt.apply(this, arguments);
}
var Yt = (e) => {
	let { cells: t, stickyOffsets: n, flattenColumns: r, rowComponent: i, cellComponent: a, onHeaderRow: o, index: s, classNames: c, styles: l } = e, { prefixCls: u } = Z($, ["prefixCls"]), d;
	o && (d = o(t.map((e) => e.column), s));
	let f = ot(t.map((e) => e.column));
	return /*#__PURE__*/ X.createElement(i, Jt({}, d, {
		className: c.row,
		style: l.row
	}), t.map((e, t) => {
		let { column: i, colStart: o, colEnd: s, colSpan: c } = e, l = vt(o, s, r, n), d = i?.onHeaderCell?.(i) || {};
		return /*#__PURE__*/ X.createElement(ht, Jt({}, e, {
			scope: i.title ? c > 1 ? "colgroup" : "col" : null,
			ellipsis: i.ellipsis,
			align: i.align,
			component: a,
			prefixCls: u,
			key: f[t]
		}, l, {
			additionalProps: d,
			rowType: "header"
		}));
	}));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Header/Header.js
function Xt(e, t, n) {
	let r = [];
	function i(e, a, o = 0) {
		r[o] = r[o] || [];
		let s = a;
		return e.filter(Boolean).map((e) => {
			let a = {
				key: e.key,
				className: u(e.className, t.cell) || "",
				style: n.cell,
				children: e.title,
				column: e,
				colStart: s
			}, c = 1, l = e.children;
			return l && l.length > 0 && (c = i(l, s, o + 1).reduce((e, t) => e + t, 0), a.hasSubColumns = !0), "colSpan" in e && ({colSpan: c} = e), "rowSpan" in e && (a.rowSpan = e.rowSpan), a.colSpan = c, a.colEnd = a.colStart + c - 1, r[o].push(a), s += c, c;
		});
	}
	i(e, 0);
	let a = r.length;
	for (let e = 0; e < a; e += 1) r[e].forEach((t) => {
		!("rowSpan" in t) && !t.hasSubColumns && (t.rowSpan = a - e);
	});
	return r;
}
var Zt = Q((e) => {
	let { stickyOffsets: t, columns: n, flattenColumns: r, onHeaderRow: i } = e, { prefixCls: a, getComponent: o, classNames: s, styles: c } = Z($, [
		"prefixCls",
		"getComponent",
		"classNames",
		"styles"
	]), { header: l = {} } = s || {}, { header: d = {} } = c || {}, f = X.useMemo(() => Xt(n, l, d), [
		n,
		l,
		d
	]), p = o(["header", "wrapper"], "thead"), m = o(["header", "row"], "tr"), h = o(["header", "cell"], "th");
	return /*#__PURE__*/ X.createElement(p, {
		className: u(`${a}-thead`, l.wrapper),
		style: d.wrapper
	}, f.map((e, n) => /* @__PURE__ */ X.createElement(Yt, {
		classNames: l,
		styles: d,
		key: n,
		flattenColumns: r,
		cells: e,
		stickyOffsets: t,
		rowComponent: m,
		cellComponent: h,
		onHeaderRow: i,
		index: n
	})));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useColumns/useWidthColumns.js
function Qt(e, t = "") {
	return typeof t == "number" ? t : t.endsWith("%") ? e * parseFloat(t) / 100 : null;
}
function $t(e, t, n) {
	return X.useMemo(() => {
		if (t && t > 0) {
			let r = 0, i = 0;
			e.forEach((e) => {
				let n = Qt(t, e.width);
				n ? r += n : i += 1;
			});
			let a = Math.max(t, n), o = Math.max(a - r, i), s = i, c = o / i, l = 0, u = e.map((e) => {
				let n = { ...e }, r = Qt(t, n.width);
				if (r) n.width = r;
				else {
					let e = Math.floor(c);
					n.width = s === 1 ? o : e, o -= e, --s;
				}
				return l += n.width, n;
			});
			if (l < a) {
				let e = a / l;
				o = a, u.forEach((t, n) => {
					let r = Math.floor(t.width * e);
					t.width = n === u.length - 1 ? o : r, o -= r;
				});
			}
			return [u, Math.max(l, a)];
		}
		return [e, t];
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useColumns/index.js
function en(e) {
	return I(e).filter((e) => /*#__PURE__*/ X.isValidElement(e)).map((e) => {
		let { key: t, props: n } = e, { children: r, ...i } = n, a = {
			key: t,
			...i
		};
		return r && (a.children = en(r)), a;
	});
}
function tn(e) {
	return e.filter((e) => e && typeof e == "object" && !e.hidden).map((e) => {
		let t = e.children;
		return t && t.length > 0 ? {
			...e,
			children: tn(t)
		} : e;
	});
}
function nn(e, t = "key") {
	return e.filter((e) => e && typeof e == "object").reduce((e, n, r) => {
		let { fixed: i } = n, a = i === !0 || i === "left" ? "start" : i === "right" ? "end" : i, o = `${t}-${r}`, s = n.children;
		return s && s.length > 0 ? [...e, ...nn(s, o).map((e) => ({
			...e,
			fixed: e.fixed ?? a
		}))] : [...e, {
			key: o,
			...n,
			fixed: a
		}];
	}, []);
}
function rn({ prefixCls: e, columns: t, children: n, expandable: r, expandedKeys: i, columnTitle: a, getRowKey: o, onTriggerExpand: s, expandIcon: c, rowExpandable: l, expandIconColumnIndex: u, expandedRowOffset: d = 0, direction: f, expandRowByClick: p, columnWidth: m, fixed: h, scrollWidth: g, clientWidth: _ }, v) {
	let y = X.useMemo(() => tn((t || en(n) || []).slice()), [t, n]), b = X.useMemo(() => {
		if (r) {
			let t = y.slice();
			if (!t.includes(Ke)) {
				let e = u || 0, n = e === 0 && (h === "right" || h === "end") ? y.length : e;
				n >= 0 && t.splice(n, 0, Ke);
			}
			let n = t.indexOf(Ke);
			t = t.filter((e, t) => e !== Ke || t === n);
			let r = y[n], f;
			f = h || (r ? r.fixed : null);
			let g = {
				[Vt]: {
					className: `${e}-expand-icon-col`,
					columnType: "EXPAND_COLUMN"
				},
				title: a,
				fixed: f,
				className: `${e}-row-expand-icon-cell`,
				width: m,
				render: (t, n, r) => {
					let a = o(n, r), u = c({
						prefixCls: e,
						expanded: i.has(a),
						expandable: l ? l(n) : !0,
						record: n,
						onExpand: s
					});
					return p ? /*#__PURE__*/ X.createElement("span", { onClick: (e) => e.stopPropagation() }, u) : u;
				}
			};
			return t.map((e, t) => {
				let n = e === Ke ? g : e;
				return t < d ? {
					...n,
					fixed: n.fixed || "start"
				} : n;
			});
		}
		return y.filter((e) => e !== Ke);
	}, [
		r,
		y,
		o,
		i,
		c,
		f,
		d
	]), x = X.useMemo(() => {
		let e = b;
		return v && (e = v(e)), e.length || (e = [{ render: () => null }]), e;
	}, [
		v,
		b,
		f
	]), [S, C] = $t(X.useMemo(() => nn(x), [
		x,
		f,
		g
	]), g, _);
	return [
		x,
		S,
		C
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useExpand.js
function an(e, t, n) {
	let r = Ht(e), { expandIcon: i, expandedRowKeys: a, defaultExpandedRowKeys: o, defaultExpandAllRows: s, expandedRowRender: c, onExpand: l, onExpandedRowsChange: u, childrenColumnName: d } = r, f = i || Mt, p = d || "children", m = X.useMemo(() => c ? "row" : e.expandable && e.internalHooks === "rc-table-internal-hook" && e.expandable.__PARENT_RENDER_ICON__ || t.some((e) => e && typeof e == "object" && e[p]) ? "nest" : !1, [!!c, t]), [h, g] = X.useState(() => o || (s ? Nt(t, n, p) : [])), _ = X.useMemo(() => new Set(a || h || []), [a, h]);
	return [
		r,
		m,
		_,
		f,
		p,
		X.useCallback((e) => {
			let r = n(e, t.indexOf(e)), i, a = _.has(r);
			a ? (_.delete(r), i = [..._]) : i = [..._, r], g(i), l && l(!a, e), u && u(i);
		}, [
			n,
			_,
			t,
			l,
			u
		])
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useFixedInfo.js
function on(e, t) {
	let n = X.useMemo(() => e.map((n, r) => vt(r, r, e, t)), [e, t]);
	return ne(() => n, [n], (e, t) => !a(e, t));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useFrame.js
function sn(e) {
	let t = (0, X.useRef)(e), [, n] = (0, X.useState)({}), r = (0, X.useRef)(null), i = (0, X.useRef)([]);
	function a(e) {
		i.current.push(e);
		let a = Promise.resolve();
		r.current = a, a.then(() => {
			if (r.current === a) {
				let e = i.current, a = t.current;
				i.current = [], e.forEach((e) => {
					t.current = e(t.current);
				}), r.current = null, a !== t.current && n({});
			}
		});
	}
	return (0, X.useEffect)(() => () => {
		r.current = null;
	}, []), [t.current, a];
}
function cn(e) {
	let t = (0, X.useRef)(e || null), n = (0, X.useRef)(null);
	function r() {
		clearTimeout(n.current);
	}
	function i(e) {
		t.current = e, r(), n.current = setTimeout(() => {
			t.current = null, n.current = void 0;
		}, 100);
	}
	function a() {
		return t.current;
	}
	return (0, X.useEffect)(() => r, []), [i, a];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useHover.js
function ln() {
	let [e, t] = X.useState(-1), [n, r] = X.useState(-1);
	return [
		e,
		n,
		X.useCallback((e, n) => {
			t(e), r(n);
		}, [])
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useSticky.js
var un = x() ? window : null;
function dn(e, t) {
	let { offsetHeader: n = 0, offsetSummary: r = 0, offsetScroll: i = 0, getContainer: a = () => un } = typeof e == "object" ? e : {}, o = a() || un, s = !!e;
	return X.useMemo(() => ({
		isSticky: s,
		stickyClassName: s ? `${t}-sticky-holder` : "",
		offsetHeader: n,
		offsetSummary: r,
		offsetScroll: i,
		container: o
	}), [
		s,
		i,
		n,
		r,
		t,
		o
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/hooks/useStickyOffsets.js
function fn(e, t) {
	return (0, X.useMemo)(() => {
		let n = t.length, r = (n, r, i) => {
			let a = [], o = 0;
			for (let s = n; s !== r; s += i) a.push(o), t[s].fixed && (o += e[s] || 0);
			return a;
		};
		return {
			start: r(0, n, 1),
			end: r(n - 1, -1, -1).reverse(),
			widths: e
		};
	}, [e, t]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Panel/index.js
var pn = (e) => {
	let { children: t, className: n, style: r } = e;
	return /*#__PURE__*/ X.createElement("div", {
		className: n,
		style: r
	}, t);
};
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/utils/offsetUtil.js
function mn(e) {
	let t = y(e).getBoundingClientRect(), n = document.documentElement;
	return {
		left: t.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
		top: t.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/stickyScrollBar.js
var hn = "mouseup", gn = "mousemove", _n = "scroll", vn = "resize", yn = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { scrollBodyRef: n, onScroll: i, offsetScroll: a, container: o, direction: s } = e, l = Z($, "prefixCls"), d = n.current?.scrollWidth || 0, f = n.current?.clientWidth || 0, p = d && f / d * f, m = X.useRef(null), [h, g] = sn({
		scrollLeft: 0,
		isHiddenScrollBar: !0
	}), _ = X.useRef({
		delta: 0,
		x: 0
	}), [v, b] = X.useState(!1), x = X.useRef(null);
	X.useEffect(() => () => {
		r.cancel(x.current);
	}, []);
	let S = () => {
		b(!1);
	}, C = (e) => {
		e.persist(), _.current.delta = e.pageX - h.scrollLeft, _.current.x = 0, b(!0), e.preventDefault();
	}, w = (e) => {
		let { buttons: t } = e || window?.event;
		if (!v || t === 0) {
			v && b(!1);
			return;
		}
		let n = _.current.x + e.pageX - _.current.x - _.current.delta, r = s === "rtl";
		n = Math.max(r ? p - f : 0, Math.min(r ? 0 : f - p, n)), (!r || Math.abs(n) + Math.abs(p) < f) && (i({ scrollLeft: n / f * (d + 2) }), _.current.x = e.pageX);
	}, T = () => {
		r.cancel(x.current), x.current = r(() => {
			if (!n.current) return;
			let e = mn(n.current).top, t = e + n.current.offsetHeight, r = o === window ? document.documentElement.scrollTop + window.innerHeight : mn(o).top + o.clientHeight;
			t - c() <= r || e >= r - a ? g((e) => ({
				...e,
				isHiddenScrollBar: !0
			})) : g((e) => ({
				...e,
				isHiddenScrollBar: !1
			}));
		});
	}, E = (e) => {
		g((t) => ({
			...t,
			scrollLeft: e / d * f || 0
		}));
	};
	return X.useImperativeHandle(t, () => ({
		setScrollLeft: E,
		checkScrollBarVisible: T
	})), X.useEffect(() => (document.body.addEventListener(hn, S, !1), document.body.addEventListener(gn, w, !1), T(), () => {
		document.body.removeEventListener(hn, S), document.body.removeEventListener(gn, w);
	}), [p, v]), X.useEffect(() => {
		if (n.current) {
			let e = [], t = y(n.current);
			for (; t;) e.push(t), t = t.parentElement;
			return e.forEach((e) => {
				e.addEventListener(_n, T, !1);
			}), window.addEventListener(vn, T, !1), window.addEventListener(_n, T, !1), o.addEventListener(_n, T, !1), () => {
				e.forEach((e) => {
					e.removeEventListener(_n, T);
				}), window.removeEventListener(vn, T), window.removeEventListener(_n, T), o.removeEventListener(_n, T);
			};
		}
	}, [o]), X.useEffect(() => {
		h.isHiddenScrollBar || g((e) => {
			let t = n.current;
			return t ? {
				...e,
				scrollLeft: t.scrollLeft / t.scrollWidth * t.clientWidth
			} : e;
		});
	}, [h.isHiddenScrollBar]), d <= f || !p || h.isHiddenScrollBar ? null : /*#__PURE__*/ X.createElement("div", {
		style: {
			height: c(),
			width: f,
			bottom: a
		},
		className: `${l}-sticky-scroll`
	}, /*#__PURE__*/ X.createElement("div", {
		onMouseDown: C,
		ref: m,
		className: u(`${l}-sticky-scroll-bar`, { [`${l}-sticky-scroll-bar-active`]: v }),
		style: {
			width: `${p}px`,
			transform: `translate3d(${h.scrollLeft}px, 0, 0)`
		}
	}));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/Table.js
function bn() {
	return bn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, bn.apply(this, arguments);
}
var xn = "rc-table", Sn = [], Cn = {};
function wn() {
	return "No Data";
}
var Tn = /*#__PURE__*/ X.forwardRef((e, t) => {
	let n = {
		rowKey: "key",
		prefixCls: xn,
		emptyText: wn,
		...e
	}, { prefixCls: r, className: i, rowClassName: s, style: c, classNames: l, styles: d, data: f, rowKey: m, scroll: h, tableLayout: g, direction: _, title: v, footer: b, summary: x, caption: S, id: C, showHeader: T, components: E, emptyText: D, onRow: O, onHeaderRow: A, measureRowRender: j, onScroll: M, internalHooks: te, transformColumns: N, internalRefs: P, tailor: F, getContainerWidth: I, sticky: ne, rowHoverable: L = !0 } = n, R = f || Sn, z = !!R.length, B = te === qe, V = X.useCallback((e, t) => p(E, e) || t, [E]), re = X.useMemo(() => typeof m == "function" ? m : (e) => e && e[m], [m]), ie = V(["body"]), [H, ae, oe] = ln(), [U, W, se, ce, le, ue] = an(n, R, re), de = h?.x, [fe, pe] = X.useState(0), [me, G, he] = rn({
		...n,
		...U,
		expandable: !!U.expandedRowRender,
		columnTitle: U.columnTitle,
		expandedKeys: se,
		getRowKey: re,
		onTriggerExpand: ue,
		expandIcon: ce,
		expandIconColumnIndex: U.expandIconColumnIndex,
		direction: _,
		scrollWidth: B && F && typeof de == "number" ? de : null,
		clientWidth: fe
	}, B ? N : null), ge = he ?? de, _e = X.useMemo(() => ({
		columns: me,
		flattenColumns: G
	}), [me, G]), ve = X.useRef(null), ye = X.useRef(null), K = X.useRef(null), be = X.useRef(null);
	X.useImperativeHandle(t, () => ({
		nativeElement: ve.current,
		scrollTo: (e) => {
			if (K.current instanceof HTMLElement) {
				let { index: t, top: n, key: r, offset: i, align: a = "nearest" } = e;
				if (ct(n)) K.current?.scrollTo({ top: n });
				else {
					let e = r ?? re(R[t]), n = K.current.querySelector(`[data-row-key="${e}"]`);
					if (n && (n.scrollIntoView({ block: a }), i)) {
						let e = K.current;
						e.scrollTo({ top: e.scrollTop + i });
					}
				}
			} else K.current?.scrollTo && K.current.scrollTo(e);
		}
	}));
	let xe = X.useRef(null), [Se, Ce] = X.useState(!1), [we, Te] = X.useState(!1), [Ee, De] = X.useState(/* @__PURE__ */ new Map()), Oe = ot(G).map((e) => Ee.get(e)), ke = X.useMemo(() => Oe, [Oe.join("_")]), Ae = fn(ke, G), je = h && st(h.y), J = h && st(ge) || !!U.fixed, Y = J && G.some(({ fixed: e }) => e), Me = X.useRef(null), { isSticky: Ne, offsetHeader: Pe, offsetSummary: Fe, offsetScroll: Ie, stickyClassName: Le, container: Re } = dn(ne, r), ze = X.useMemo(() => x?.(R), [x, R]), Be = (je || Ne) && /*#__PURE__*/ X.isValidElement(ze) && ze.type === Ct && ze.props.fixed, Ve, He, Ue;
	je && (He = {
		overflowY: z ? "scroll" : "auto",
		maxHeight: h.y
	}), J && (Ve = { overflowX: "auto" }, je || (He = { overflowY: "hidden" }), Ue = {
		width: ge === !0 ? "auto" : ge,
		minWidth: "100%"
	});
	let We = X.useCallback((e, t) => {
		De((n) => {
			if (n.get(e) !== t) {
				let r = new Map(n);
				return r.set(e, t), r;
			}
			return n;
		});
	}, []), [Ge, Ke] = cn(null);
	function Je(e, t) {
		t && (typeof t == "function" ? t(e) : t.scrollLeft !== e && (t.scrollLeft = e, t.scrollLeft !== e && setTimeout(() => {
			t.scrollLeft = e;
		}, 0)));
	}
	let [Ye, Z] = X.useState([0, 0]), Xe = w(({ currentTarget: e, scrollLeft: t }) => {
		let n = typeof t == "number" ? t : e.scrollLeft, r = e || Cn;
		(!Ke() || Ke() === r) && (Ge(r), Je(n, ye.current), Je(n, K.current), Je(n, xe.current), Je(n, Me.current?.setScrollLeft));
		let i = e || ye.current;
		if (i) {
			let e = B && F && typeof ge == "number" ? ge : i.scrollWidth, t = i.clientWidth, r = Math.abs(n);
			if (Z((n) => {
				let i = [r, e - t];
				return a(n, i) ? n : i;
			}), e === t) {
				Ce(!1), Te(!1);
				return;
			}
			Ce(r > 0), Te(r < e - t - 1);
		}
	}), Ze = w((e) => {
		Xe(e), M?.(e);
	}), Qe = () => {
		J && K.current ? Xe({
			currentTarget: y(K.current),
			scrollLeft: K.current?.scrollLeft
		}) : (Ce(!1), Te(!1));
	}, $e = (e) => {
		Me.current?.checkScrollBarVisible();
		let t = e ?? ve.current?.offsetWidth ?? 0;
		B && I && ve.current && (t = I(ve.current, t) || t), t !== fe && (Qe(), pe(t));
	};
	k(() => {
		J && $e();
	}, [J]);
	let et = X.useRef(!1);
	X.useEffect(() => {
		et.current && Qe();
	}, [
		J,
		f,
		me.length
	]), X.useEffect(() => {
		et.current = !0;
	}, []);
	let [tt, Q] = X.useState(0);
	k(() => {
		(!F || !B) && (K.current instanceof Element ? Q(ee(K.current).width) : Q(ee(be.current).width));
	}, []), X.useEffect(() => {
		B && P && (P.body.current = K.current);
	});
	let nt = X.useCallback((e) => /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Zt, e), Be === "top" && /*#__PURE__*/ X.createElement(wt, e, ze)), [Be, ze]), rt = X.useCallback((e) => /*#__PURE__*/ X.createElement(wt, e, ze), [ze]), it = V(["table"], "table"), at = X.useMemo(() => g || (Y ? ge === "max-content" ? "auto" : "fixed" : je || Ne || G.some(({ ellipsis: e }) => e) ? "fixed" : "auto"), [
		je,
		Y,
		G,
		g,
		Ne
	]), lt, ut = {
		colWidths: ke,
		columCount: G.length,
		stickyOffsets: Ae,
		onHeaderRow: A,
		fixHeader: je,
		scroll: h
	}, dt = X.useMemo(() => z ? null : typeof D == "function" ? D() : D, [z, D]), ft = /*#__PURE__*/ X.createElement(Bt, {
		data: R,
		measureColumnWidth: je || J || Ne
	}), pt = /*#__PURE__*/ X.createElement(Wt, {
		colWidths: G.map(({ width: e }) => e),
		columns: G
	}), mt = S == null ? void 0 : /*#__PURE__*/ X.createElement("caption", { className: `${r}-caption` }, S), ht = o(n, { data: !0 }), gt = o(n, { aria: !0 });
	if (je || Ne) {
		let e;
		typeof ie == "function" ? (e = ie(R, {
			scrollbarSize: tt,
			ref: K,
			onScroll: Xe
		}), ut.colWidths = G.map(({ width: e }, t) => {
			let n = t === G.length - 1 ? e - tt : e;
			return typeof n == "number" && !Number.isNaN(n) ? n : 0;
		})) : e = /*#__PURE__*/ X.createElement("div", {
			style: {
				...Ve,
				...He
			},
			onScroll: Ze,
			ref: K,
			className: `${r}-body`
		}, /*#__PURE__*/ X.createElement(it, bn({ style: {
			...Ue,
			tableLayout: at
		} }, gt), mt, pt, ft, !Be && ze && /*#__PURE__*/ X.createElement(wt, {
			stickyOffsets: Ae,
			flattenColumns: G
		}, ze)));
		let t = {
			noData: !R.length,
			maxContentScroll: J && ge === "max-content",
			...ut,
			..._e,
			direction: _,
			stickyClassName: Le,
			scrollX: ge,
			tableLayout: at,
			onScroll: Xe
		};
		lt = /*#__PURE__*/ X.createElement(X.Fragment, null, T !== !1 && /*#__PURE__*/ X.createElement(qt, bn({}, t, {
			stickyTopOffset: Pe,
			className: `${r}-header`,
			ref: ye,
			colGroup: pt
		}), nt), e, Be && Be !== "top" && /*#__PURE__*/ X.createElement(qt, bn({}, t, {
			stickyBottomOffset: Fe,
			className: `${r}-summary`,
			ref: xe,
			colGroup: pt
		}), rt), Ne && K.current && K.current instanceof Element && /*#__PURE__*/ X.createElement(yn, {
			ref: Me,
			offsetScroll: Ie,
			scrollBodyRef: K,
			onScroll: Xe,
			container: Re,
			direction: _
		}));
	} else lt = /*#__PURE__*/ X.createElement("div", {
		style: {
			...Ve,
			...He,
			...d?.content
		},
		className: u(`${r}-content`, l?.content),
		onScroll: Xe,
		ref: K
	}, /*#__PURE__*/ X.createElement(it, bn({ style: {
		...Ue,
		tableLayout: at
	} }, gt), mt, pt, T !== !1 && /*#__PURE__*/ X.createElement(Zt, bn({}, ut, _e)), ft, ze && /*#__PURE__*/ X.createElement(wt, {
		stickyOffsets: Ae,
		flattenColumns: G
	}, ze)));
	let _t = { ...c };
	Ne && (_t["--columns-count"] = G.length);
	let vt = /*#__PURE__*/ X.createElement("div", bn({
		className: u(r, i, {
			[`${r}-rtl`]: _ === "rtl",
			[`${r}-fix-start-shadow`]: J,
			[`${r}-fix-end-shadow`]: J,
			[`${r}-fix-start-shadow-show`]: J && Se,
			[`${r}-fix-end-shadow-show`]: J && we,
			[`${r}-layout-fixed`]: g === "fixed",
			[`${r}-fixed-header`]: je,
			[`${r}-fixed-column`]: Y,
			[`${r}-scroll-horizontal`]: J,
			[`${r}-has-fix-start`]: G[0]?.fixed,
			[`${r}-has-fix-end`]: G[G.length - 1]?.fixed === "end"
		}),
		style: _t,
		id: C,
		ref: ve
	}, ht), v && /*#__PURE__*/ X.createElement(pn, {
		className: u(`${r}-title`, l?.title),
		style: d?.title
	}, v(R)), /*#__PURE__*/ X.createElement("div", {
		ref: be,
		className: u(`${r}-container`, l?.section),
		style: d?.section
	}, lt), b && /*#__PURE__*/ X.createElement(pn, {
		className: u(`${r}-footer`, l?.footer),
		style: d?.footer
	}, b(R)));
	J && (vt = /*#__PURE__*/ X.createElement(q, { onResize: ({ offsetWidth: e }) => $e(e) }, vt));
	let yt = on(G, Ae), bt = X.useMemo(() => ({
		scrollX: ge,
		scrollInfo: Ye,
		classNames: l,
		styles: d,
		prefixCls: r,
		getComponent: V,
		scrollbarSize: tt,
		direction: _,
		fixedInfoList: yt,
		isSticky: Ne,
		componentWidth: fe,
		fixHeader: je,
		fixColumn: Y,
		horizonScroll: J,
		tableLayout: at,
		rowClassName: s,
		expandedRowClassName: U.expandedRowClassName,
		expandIcon: ce,
		expandableType: W,
		expandRowByClick: U.expandRowByClick,
		expandedRowRender: U.expandedRowRender,
		expandedRowOffset: U.expandedRowOffset,
		onTriggerExpand: ue,
		expandIconColumnIndex: U.expandIconColumnIndex,
		indentSize: U.indentSize,
		allColumnsFixedLeft: G.every((e) => e.fixed === "start"),
		emptyNode: dt,
		columns: me,
		flattenColumns: G,
		onColumnResize: We,
		colWidths: ke,
		hoverStartRow: H,
		hoverEndRow: ae,
		onHover: oe,
		rowExpandable: U.rowExpandable,
		onRow: O,
		getRowKey: re,
		expandedKeys: se,
		childrenColumnName: le,
		rowHoverable: L,
		measureRowRender: j
	}), [
		ge,
		Ye,
		l,
		d,
		r,
		V,
		tt,
		_,
		yt,
		Ne,
		fe,
		je,
		Y,
		J,
		at,
		s,
		U.expandedRowClassName,
		ce,
		W,
		U.expandRowByClick,
		U.expandedRowRender,
		U.expandedRowOffset,
		ue,
		U.expandIconColumnIndex,
		U.indentSize,
		dt,
		me,
		G,
		We,
		ke,
		H,
		ae,
		oe,
		U.rowExpandable,
		O,
		re,
		se,
		le,
		L,
		j
	]);
	return /*#__PURE__*/ X.createElement($.Provider, { value: bt }, vt);
}), En = (e) => tt(Tn, e), Dn = En();
Dn.EXPAND_COLUMN = Ke, Dn.INTERNAL_HOOKS = qe, Dn.Column = Et, Dn.ColumnGroup = Dt, Dn.Summary = Tt;
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/VirtualTable/context.js
var On = Ye(null), kn = Ye(null);
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/VirtualTable/VirtualCell.js
function An() {
	return An = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, An.apply(this, arguments);
}
function jn(e, t, n) {
	return n[e + (t || 1)] - (n[e] || 0);
}
var Mn = (e) => {
	let { rowInfo: t, column: n, colIndex: r, indent: i, index: a, component: o, renderIndex: s, record: c, style: l, className: d, inverse: f, getHeight: p } = e, { render: m, dataIndex: h, className: g, width: _ } = n, { columnsOffset: v } = Z(kn, ["columnsOffset"]), { key: y, fixedInfo: b, appendCellNode: x, additionalCellProps: S } = It(t, n, r, i, a), { style: C, colSpan: w = 1, rowSpan: T = 1 } = S, E = jn(r - 1, w, v), D = w > 1 ? _ - E : 0, O = {
		...C,
		...l,
		flex: `0 0 ${E}px`,
		width: `${E}px`,
		marginRight: D,
		pointerEvents: "auto"
	}, k = X.useMemo(() => f ? T <= 1 : w === 0 || T === 0 || T > 1, [
		T,
		w,
		f
	]);
	k ? O.visibility = "hidden" : f && (O.height = p?.(T));
	let A = k ? () => null : m, j = {};
	return (T === 0 || w === 0) && (j.rowSpan = 1, j.colSpan = 1), /*#__PURE__*/ X.createElement(ht, An({
		className: u(g, d),
		ellipsis: n.ellipsis,
		align: n.align,
		scope: n.rowScope,
		component: o,
		prefixCls: t.prefixCls,
		key: y,
		record: c,
		index: a,
		renderIndex: s,
		dataIndex: h,
		render: A,
		shouldCellUpdate: n.shouldCellUpdate
	}, b, {
		appendNode: x,
		additionalProps: {
			...S,
			style: O,
			...j
		}
	}));
};
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/VirtualTable/BodyLine.js
function Nn() {
	return Nn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Nn.apply(this, arguments);
}
var Pn = Q(/* @__PURE__ */ X.forwardRef((e, t) => {
	let { data: n, index: r, className: i, rowKey: a, style: o, extra: s, getHeight: c, ...l } = e, { record: d, indent: f, index: p } = n, { scrollX: m, flattenColumns: h, prefixCls: g, fixColumn: _, componentWidth: v, classNames: y, styles: b } = Z($, [
		"prefixCls",
		"flattenColumns",
		"fixColumn",
		"componentWidth",
		"scrollX",
		"classNames",
		"styles"
	]), { getComponent: x } = Z(On, ["getComponent"]), S = At(d, a, r, f), C = x(["body", "row"], "div"), w = x(["body", "cell"], "div"), { rowSupportExpand: T, expanded: E, rowProps: D, expandedRowRender: O, expandedRowClassName: k } = S, A = Pt(k, d, r, f), j;
	if (T && E) {
		let e = O(d, r, f + 1, E), t = {};
		_ && (t = { style: { "--virtual-width": `${v}px` } });
		let n = `${g}-expanded-row-cell`;
		j = /*#__PURE__*/ X.createElement(C, { className: u(`${g}-expanded-row`, `${g}-expanded-row-level-${f + 1}`, A) }, /*#__PURE__*/ X.createElement(ht, {
			component: w,
			prefixCls: g,
			className: u(n, { [`${n}-fixed`]: _ }),
			additionalProps: t
		}, e));
	}
	let M = {
		...o,
		width: m
	};
	s && (M.position = "absolute", M.pointerEvents = "none");
	let ee = /*#__PURE__*/ X.createElement(C, Nn({}, D, l, {
		"data-row-key": a,
		ref: T ? null : t,
		className: u(i, `${g}-row`, D?.className, y?.body?.row, {
			[A]: f >= 1,
			[`${g}-row-extra`]: s
		}),
		style: {
			...M,
			...D?.style,
			...b?.body?.row
		}
	}), h.map((e, t) => /*#__PURE__*/ X.createElement(Mn, {
		key: t,
		className: y?.body?.cell,
		style: b?.body?.cell,
		component: w,
		rowInfo: S,
		column: e,
		colIndex: t,
		indent: f,
		index: r,
		renderIndex: p,
		record: d,
		inverse: s,
		getHeight: c
	})));
	return T ? /*#__PURE__*/ X.createElement("div", { ref: t }, ee, j) : ee;
})), Fn = {
	start: "top",
	end: "bottom",
	nearest: "auto"
}, In = Q(/* @__PURE__ */ X.forwardRef((e, t) => {
	let { data: n, onScroll: r } = e, { flattenColumns: i, onColumnResize: a, getRowKey: o, expandedKeys: s, prefixCls: c, childrenColumnName: l, scrollX: u, direction: d } = Z($, [
		"flattenColumns",
		"onColumnResize",
		"getRowKey",
		"prefixCls",
		"expandedKeys",
		"childrenColumnName",
		"scrollX",
		"direction"
	]), { sticky: f, scrollY: p, listItemHeight: m, getComponent: h, onScroll: g } = Z(On), _ = X.useRef(null), v = kt(n, l, s, o), y = X.useMemo(() => {
		let e = 0;
		return i.map(({ width: t, minWidth: n, key: r }) => {
			let i = Math.max(t || 0, n || 0);
			return e += i, [
				r,
				i,
				e
			];
		});
	}, [i]), b = X.useMemo(() => y.map((e) => e[2]), [y]);
	X.useEffect(() => {
		y.forEach(([e, t]) => {
			a(e, t);
		});
	}, [y]), X.useImperativeHandle(t, () => {
		let e = {
			scrollTo: (e) => {
				let { align: t, offset: n, ...r } = e, i = Fn[t] ?? (n ? "top" : "auto");
				_.current?.scrollTo({
					...r,
					offset: n,
					align: i
				});
			},
			nativeElement: _.current?.nativeElement
		};
		return Object.defineProperty(e, "scrollLeft", {
			get: () => _.current?.getScrollInfo().x || 0,
			set: (e) => {
				_.current?.scrollTo({ left: e });
			}
		}), Object.defineProperty(e, "scrollTop", {
			get: () => _.current?.getScrollInfo().y || 0,
			set: (e) => {
				_.current?.scrollTo({ top: e });
			}
		}), e;
	});
	let x = (e, t) => {
		let n = v[t]?.record, { onCell: r } = e;
		return r ? r(n, t)?.rowSpan ?? 1 : 1;
	}, S = (e) => {
		let { start: t, end: n, getSize: r, offsetY: a } = e;
		if (n < 0) return null;
		let s = i.filter((e) => x(e, t) === 0), c = t;
		for (let e = t; e >= 0; --e) if (s = s.filter((t) => x(t, e) === 0), !s.length) {
			c = e;
			break;
		}
		let l = i.filter((e) => x(e, n) !== 1), u = n;
		for (let e = n; e < v.length; e += 1) if (l = l.filter((t) => x(t, e) !== 1), !l.length) {
			u = Math.max(e - 1, n);
			break;
		}
		let d = [];
		for (let e = c; e <= u; e += 1) v[e] && i.some((t) => x(t, e) > 1) && d.push(e);
		return d.map((e) => {
			let t = v[e], n = o(t.record, e), i = (t) => {
				let i = e + t - 1, a = v[i];
				if (!a || !a.record) {
					let e = Math.min(i, v.length - 1), t = v[e], a = r(n, o(t.record, e));
					return a.bottom - a.top;
				}
				let s = r(n, o(a.record, i));
				return s.bottom - s.top;
			}, s = r(n);
			return /*#__PURE__*/ X.createElement(Pn, {
				key: e,
				data: t,
				rowKey: n,
				index: e,
				style: { top: -a + s.top },
				extra: !0,
				getHeight: i
			});
		});
	}, C = X.useMemo(() => ({ columnsOffset: b }), [b]), w = `${c}-tbody`, T = h(["body", "wrapper"]), E = {};
	return f && (E.position = "sticky", E.bottom = 0, typeof f == "object" && f.offsetScroll && (E.bottom = f.offsetScroll)), /*#__PURE__*/ X.createElement(kn.Provider, { value: C }, /*#__PURE__*/ X.createElement(Ee, {
		fullHeight: !1,
		ref: _,
		prefixCls: `${w}-virtual`,
		styles: { horizontalScrollBar: E },
		className: w,
		height: p,
		itemHeight: m || 24,
		data: v,
		itemKey: (e) => o(e.record),
		component: T,
		scrollWidth: u,
		direction: d,
		onVirtualScroll: ({ x: e }) => {
			r({
				currentTarget: _.current?.nativeElement,
				scrollLeft: e
			});
		},
		onScroll: g,
		extraRender: S
	}, (e, t, n) => {
		let r = o(e.record, t);
		return /*#__PURE__*/ X.createElement(Pn, {
			data: e,
			rowKey: r,
			index: t,
			style: n.style
		});
	}));
}));
//#endregion
//#region node_modules/.pnpm/@rc-component+table@1.10.2__5ed06d265599b1c93676808b1b611f55/node_modules/@rc-component/table/es/VirtualTable/index.js
function Ln() {
	return Ln = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ln.apply(this, arguments);
}
var Rn = (e, t) => {
	let { ref: n, onScroll: r } = t;
	return /*#__PURE__*/ X.createElement(In, {
		ref: n,
		data: e,
		onScroll: r
	});
}, zn = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { data: n, columns: r, scroll: i, sticky: a, prefixCls: o = xn, className: s, listItemHeight: c, components: l, onScroll: d } = e, { x: f, y: m } = i || {};
	typeof f != "number" && (f = 1), typeof m != "number" && (m = 500);
	let h = w((e, t) => p(l, e) || t), g = w(d), _ = X.useMemo(() => ({
		sticky: a,
		scrollY: m,
		listItemHeight: c,
		getComponent: h,
		onScroll: g
	}), [
		a,
		m,
		c,
		h,
		g
	]);
	return /*#__PURE__*/ X.createElement(On.Provider, { value: _ }, /*#__PURE__*/ X.createElement(Dn, Ln({}, e, {
		className: u(s, `${o}-virtual`),
		scroll: {
			...i,
			x: f
		},
		components: {
			...l,
			body: n?.length ? Rn : void 0
		},
		columns: r,
		internalHooks: qe,
		tailor: !0,
		ref: t
	})));
}), Bn = (e) => tt(zn, e);
Bn();
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/Column.js
/* istanbul ignore next */
var Vn = (e) => null, Hn = (e) => null, Un = {}, Wn = "SELECT_ALL", Gn = "SELECT_INVERT", Kn = "SELECT_NONE", qn = [], Jn = (e, t, n = []) => ((t || []).forEach((t) => {
	n.push(t), H(t) && e in t && Jn(e, t[e], n);
}), n), Yn = (e, t) => {
	let { preserveSelectedRowKeys: r, selectedRowKeys: i, defaultSelectedRowKeys: a, getCheckboxProps: o, getTitleCheckboxProps: s, onChange: c, onSelect: d, onSelectAll: f, onSelectInvert: p, onSelectNone: m, onSelectMultiple: h, columnWidth: g, type: _, selections: v, fixed: y, renderCell: b, hideSelectAll: x, checkStrictly: S = !0 } = t || {}, { prefixCls: C, data: w, pageData: T, getRecordByKey: E, getRowKey: D, expandType: O, childrenColumnName: k, locale: A, getPopupContainer: j } = e, M = xe("Table"), [ee, te] = de((e) => e), [P, F] = N(a || qn, i), I = P ?? qn, ne = X.useRef(/* @__PURE__ */ new Map()), L = (0, X.useCallback)((e) => {
		if (r) {
			let t = /* @__PURE__ */ new Map();
			e.forEach((e) => {
				let n = E(e);
				!n && ne.current.has(e) && (n = ne.current.get(e)), t.set(e, n);
			}), ne.current = t;
		}
	}, [E, r]);
	X.useEffect(() => {
		L(I);
	}, [I, L]);
	let R = (0, X.useMemo)(() => Jn(k, T), [k, T]), { keyEntities: z } = (0, X.useMemo)(() => {
		if (S) return { keyEntities: null };
		let e = w;
		if (r) {
			let t = new Set(R.map(D)), n = Array.from(ne.current).reduce((e, [n, r]) => t.has(n) ? e : e.concat(r), []);
			e = [].concat(l(e), l(n));
		}
		return Be(e, {
			externalGetKey: D,
			childrenPropName: k
		});
	}, [
		w,
		D,
		S,
		k,
		r,
		R
	]), B = (0, X.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		return R.forEach((t, n) => {
			let r = D(t, n), i = (o ? o(t) : null) || {};
			e.set(r, i);
		}), e;
	}, [
		R,
		D,
		o
	]), V = (0, X.useCallback)((e) => {
		let t = D(e), n;
		return n = B.has(t) ? B.get(D(e)) : o ? o(e) : void 0, !!n?.disabled;
	}, [B, D]), [re, ie] = (0, X.useMemo)(() => {
		if (S) return [I, []];
		let { checkedKeys: e, halfCheckedKeys: t } = Y(I, !0, z, V);
		return [e || [], t];
	}, [
		I,
		S,
		z,
		V
	]), H = (0, X.useMemo)(() => {
		let e = _ === "radio" ? re.slice(0, 1) : re;
		return new Set(e);
	}, [re, _]), ae = (0, X.useMemo)(() => _ === "radio" ? /* @__PURE__ */ new Set() : new Set(ie), [ie, _]);
	X.useEffect(() => {
		t || F(qn);
	}, [!!t]);
	let oe = (0, X.useCallback)((e, t) => {
		let n, i;
		L(e), r ? (n = e, i = e.map((e) => ne.current.get(e))) : (n = [], i = [], e.forEach((e) => {
			let t = E(e);
			t !== void 0 && (n.push(e), i.push(t));
		})), F(n), c?.(n, i, { type: t });
	}, [
		F,
		E,
		c,
		r
	]), U = (0, X.useCallback)((e, t, n, r) => {
		if (d) {
			let i = n.map(E);
			d(E(e), t, i, r);
		}
		oe(n, "single");
	}, [
		d,
		E,
		oe
	]), W = (0, X.useMemo)(() => !v || x ? null : (v === !0 ? [
		Wn,
		Gn,
		Kn
	] : v).map((e) => {
		let t;
		return t = e === "SELECT_ALL" ? {
			key: "all",
			text: A.selectionAll,
			onSelect() {
				oe(w.reduce((e, t, n) => {
					let r = D(t, n);
					return (!B.get(r)?.disabled || H.has(r)) && e.push(r), e;
				}, []), "all");
			}
		} : e === "SELECT_INVERT" ? {
			key: "invert",
			text: A.selectInvert,
			onSelect() {
				let e = new Set(H);
				T.forEach((t, n) => {
					let r = D(t, n);
					B.get(r)?.disabled || (e.has(r) ? e.delete(r) : e.add(r));
				});
				let t = Array.from(e);
				p && (M.deprecated(!1, "onSelectInvert", "onChange"), p(t)), oe(t, "invert");
			}
		} : e === "SELECT_NONE" ? {
			key: "none",
			text: A.selectNone,
			onSelect() {
				m?.(), oe(Array.from(H).filter((e) => B.get(e)?.disabled), "none");
			}
		} : e, {
			...t,
			onSelect: (e) => {
				t.onSelect?.(e), te(null);
			}
		};
	}), [
		v,
		x,
		A.selectionAll,
		A.selectInvert,
		A.selectNone,
		B,
		H,
		w,
		T,
		D,
		p,
		oe
	]);
	return [(0, X.useCallback)((e) => {
		if (!t) return e.filter((e) => e !== Un);
		let r = l(e), i = new Set(H), a = R.reduce((e, t, n) => {
			let r = D(t, n);
			return B.get(r).disabled || e.push(r), e;
		}, []), o = a.every((e) => i.has(e)), c = a.some((e) => i.has(e)), d = () => {
			let e = [];
			o ? a.forEach((t) => {
				i.delete(t), e.push(t);
			}) : a.forEach((t) => {
				i.has(t) || (i.add(t), e.push(t));
			});
			let t = Array.from(i);
			f?.(!o, t.map(E), e.map(E)), oe(t, "all"), te(null);
		}, p, m;
		if (_ !== "radio") {
			let e;
			if (W) {
				let t = {
					getPopupContainer: j,
					items: W.map((e, t) => {
						let { key: n, text: r, onSelect: i } = e;
						return {
							key: n ?? t,
							onClick: () => {
								i?.(a);
							},
							label: r
						};
					})
				};
				e = /*#__PURE__*/ X.createElement("div", { className: `${C}-selection-extra` }, /*#__PURE__*/ X.createElement(Ue, {
					menu: t,
					getPopupContainer: j
				}, /*#__PURE__*/ X.createElement("span", null, /*#__PURE__*/ X.createElement(n, null))));
			}
			let t = R.reduce((e, t, n) => {
				let r = D(t, n), a = B.get(r) || {}, o = {
					checked: i.has(r),
					...a
				};
				return o.disabled && e.push(o), e;
			}, []), r = !!t.length && t.length === R.length, l = r && t.every(({ checked: e }) => e), u = r && t.some(({ checked: e }) => e), f = s?.() || {}, { onChange: h, disabled: g } = f;
			m = /*#__PURE__*/ X.createElement(Ve, {
				"aria-label": e ? "Custom selection" : "Select all",
				...f,
				checked: r ? l : !!R.length && o,
				indeterminate: r ? !l && u : !o && c,
				onChange: (e) => {
					d(), h?.(e);
				},
				disabled: g ?? (R.length === 0 || r),
				skipGroup: !0
			}), p = !x && /*#__PURE__*/ X.createElement("div", { className: `${C}-selection` }, m, e);
		}
		let w;
		w = _ === "radio" ? (e, t, n) => {
			let r = D(t, n), a = i.has(r), o = B.get(r);
			return {
				node: /*#__PURE__*/ X.createElement(J, {
					...o,
					checked: a,
					onClick: (e) => {
						e.stopPropagation(), o?.onClick?.(e);
					},
					onChange: (e) => {
						i.has(r) || U(r, !0, [r], e.nativeEvent), o?.onChange?.(e);
					}
				}),
				checked: a
			};
		} : (e, t, n) => {
			let r = D(t, n), o = i.has(r), s = ae.has(r), c = B.get(r), u;
			return u = O === "nest" ? s : c?.indeterminate ?? s, {
				node: /*#__PURE__*/ X.createElement(Ve, {
					...c,
					indeterminate: u,
					checked: o,
					skipGroup: !0,
					onClick: (e) => {
						e.stopPropagation(), c?.onClick?.(e);
					},
					onChange: (e) => {
						let { nativeEvent: t } = e, { shiftKey: n } = t, s = a.indexOf(r), u = H.size > 0 && a.some((e) => H.has(e));
						if (n && S && u) {
							let e = ee(s, a, i), t = Array.from(i);
							h?.(!o, t.map(E), e.map(E)), oe(t, "multiple");
						} else {
							let e = re;
							if (S) {
								let n = o ? ze(e, r) : Re(e, r);
								U(r, !o, n, t);
							} else {
								let { checkedKeys: n, halfCheckedKeys: i } = Y([].concat(l(e), [r]), !0, z, V), a = n;
								if (o) {
									let e = new Set(n);
									e.delete(r), a = Y(Array.from(e), {
										checked: !1,
										halfCheckedKeys: i
									}, z, V).checkedKeys;
								}
								U(r, !o, a, t);
							}
						}
						te(o ? null : s), c?.onChange?.(e);
					}
				}),
				checked: o
			};
		};
		let T = (e, t, n) => {
			let { node: r, checked: i } = w(e, t, n);
			return b ? b(i, t, n, r) : r;
		};
		if (!r.includes(Un)) if (r.findIndex((e) => e.RC_TABLE_INTERNAL_COL_DEFINE?.columnType === "EXPAND_COLUMN") === 0) {
			let [e, ...t] = r;
			r = [e, Un].concat(l(t));
		} else r = [Un].concat(l(r));
		let k = r.indexOf(Un);
		r = r.filter((e, t) => e !== Un || t === k);
		let A = r[k - 1], M = r[k + 1], N = y;
		N === void 0 && (M?.fixed === void 0 ? A?.fixed !== void 0 && (N = A.fixed) : N = M.fixed), N && A && A.RC_TABLE_INTERNAL_COL_DEFINE?.columnType === "EXPAND_COLUMN" && A.fixed === void 0 && (A.fixed = N);
		let P = u(`${C}-selection-col`, { [`${C}-selection-col-with-dropdown`]: v && _ === "checkbox" }), F = {
			fixed: N,
			width: g,
			className: `${C}-selection-column`,
			title: t?.columnTitle ? le(t.columnTitle) ? t.columnTitle(m) : t.columnTitle : p,
			render: T,
			onCell: t.onCell,
			align: t.align,
			[Vt]: { className: P }
		};
		return r.map((e) => e === Un ? F : e);
	}, [
		D,
		R,
		t,
		re,
		H,
		ae,
		g,
		W,
		O,
		B,
		h,
		U,
		V
	]), H];
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/ExpandIcon.js
function Xn(e) {
	return (t) => {
		let { prefixCls: n, onExpand: r, record: i, expanded: a, expandable: o } = t, s = `${n}-row-expand-icon`;
		return /*#__PURE__*/ X.createElement("button", {
			type: "button",
			onClick: (e) => {
				r(i, e), e.stopPropagation();
			},
			className: u(s, {
				[`${s}-spaced`]: !o,
				[`${s}-expanded`]: o && a,
				[`${s}-collapsed`]: o && !a
			}),
			"aria-label": a ? e.collapse : e.expand,
			"aria-expanded": a
		});
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/hooks/useContainerWidth.js
function Zn(e) {
	return (t, n) => {
		let r = t.querySelector(`.${e}-container`), i = n;
		if (r) {
			let e = getComputedStyle(r), t = Number.parseInt(e.borderLeftWidth, 10), a = Number.parseInt(e.borderRightWidth, 10);
			i = n - t - a;
		}
		return i;
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/hooks/useFilledColumns.js
var Qn = (e, t) => X.useMemo(() => {
	if (!t) return e;
	let n = (e) => e.map((e) => e === Un || e === Ke ? e : "children" in e && Array.isArray(e.children) ? {
		...R(t, e),
		children: n(e.children)
	} : R(h(t, ["children"]), e));
	return n(e);
}, [e, t]), $n = (e, t) => "key" in e && ce(e.key) ? e.key : e.dataIndex ? Array.isArray(e.dataIndex) ? e.dataIndex.join(".") : e.dataIndex : t;
function er(e, t) {
	return t ? `${t}-${e}` : `${e}`;
}
var tr = (e, t) => le(e) ? e(t) : e, nr = (e, t) => {
	let n = tr(e, t);
	return H(n) || Array.isArray(n) ? "" : n;
}, rr = ({ treeCls: e, treeNodeCls: t, directoryNodeSelectedBg: n, directoryNodeSelectedColor: r, motionDurationMid: i, borderRadius: a, controlItemBgHover: o }) => ({ [`${e}${e}-directory ${t}`]: {
	[`${e}-node-content-wrapper`]: {
		position: "static",
		[`&:has(${e}-drop-indicator)`]: { position: "relative" },
		[`> *:not(${e}-drop-indicator)`]: { position: "relative" },
		"&:hover": { background: "transparent" },
		"&:before": {
			position: "absolute",
			inset: 0,
			transition: `background-color ${i}`,
			content: "\"\"",
			borderRadius: a
		},
		"&:hover:before": { background: o }
	},
	[`${e}-switcher, ${e}-checkbox, ${e}-draggable-icon`]: { zIndex: 1 },
	"&-selected": {
		background: n,
		borderRadius: a,
		[`${e}-switcher, ${e}-draggable-icon`]: { color: r },
		[`${e}-node-content-wrapper`]: {
			color: r,
			background: "transparent",
			"&, &:hover": { color: r },
			"&:before, &:hover:before": { background: n }
		}
	}
} }), ir = new m("ant-tree-node-fx-do-not-use", {
	"0%": { opacity: 0 },
	"100%": { opacity: 1 }
}), ar = (e, t) => ({ [`.${e}-switcher-icon`]: {
	display: "inline-block",
	fontSize: 10,
	verticalAlign: "baseline",
	svg: { transition: `transform ${t.motionDurationSlow}` }
} }), or = (e, t) => ({ [`.${e}-drop-indicator`]: {
	position: "absolute",
	zIndex: 1,
	height: 2,
	backgroundColor: t.colorPrimary,
	borderRadius: 1,
	pointerEvents: "none",
	"&:after": {
		position: "absolute",
		top: -3,
		insetInlineStart: -6,
		width: 8,
		height: 8,
		backgroundColor: "transparent",
		border: `${D(t.lineWidthBold)} solid ${t.colorPrimary}`,
		borderRadius: "50%",
		content: "\"\""
	}
} }), sr = (e, t) => {
	let { treeCls: n, treeNodeCls: r, treeNodePadding: i, titleHeight: a, indentSize: o, switcherSize: s, motionDurationMid: c, nodeSelectedBg: l, nodeHoverBg: u, colorTextQuaternary: d, controlItemBgActiveDisabled: f } = t;
	return { [n]: {
		...be(t),
		"--rc-virtual-list-scrollbar-bg": t.colorSplit,
		background: t.colorBgContainer,
		borderRadius: t.borderRadius,
		transition: `background-color ${t.motionDurationSlow}`,
		"&-rtl": { direction: "rtl" },
		[`&${n}-rtl ${n}-switcher_close ${n}-switcher-icon svg`]: { transform: "rotate(90deg)" },
		[`${n}-list`]: { "&:focus-visible": {
			outline: "none",
			[`${r}-active ${n}-node-content-wrapper`]: { ...Ce(t) }
		} },
		[`${n}-list-holder-inner`]: { alignItems: "flex-start" },
		[`&${n}-block-node`]: { [`${n}-list-holder-inner`]: {
			alignItems: "stretch",
			[`${n}-node-content-wrapper`]: { flex: "auto" },
			[`${r}.dragging:after`]: {
				position: "absolute",
				inset: 0,
				border: `1px solid ${t.colorPrimary}`,
				opacity: 0,
				animationName: ir,
				animationDuration: t.motionDurationSlow,
				animationPlayState: "running",
				animationFillMode: "forwards",
				content: "\"\"",
				pointerEvents: "none",
				borderRadius: t.borderRadius
			}
		} },
		[r]: {
			display: "flex",
			alignItems: "flex-start",
			marginBottom: i,
			lineHeight: D(a),
			position: "relative",
			"&:before": {
				content: "\"\"",
				position: "absolute",
				zIndex: 1,
				insetInlineStart: 0,
				width: "100%",
				top: "100%",
				height: i
			},
			[`&-disabled ${n}-node-content-wrapper`]: {
				color: t.colorTextDisabled,
				cursor: "not-allowed",
				"&:hover": { background: "transparent" }
			},
			[`${n}-checkbox-disabled + ${n}-node-selected,&${r}-disabled${r}-selected ${n}-node-content-wrapper`]: { backgroundColor: f },
			[`${n}-checkbox-disabled`]: { pointerEvents: "unset" },
			[`&:not(${r}-disabled)`]: { [`${n}-node-content-wrapper`]: { "&:hover": { color: t.nodeHoverColor } } },
			[`&-active ${n}-node-content-wrapper`]: { background: t.controlItemBgHover },
			[`&:not(${r}-disabled).filter-node ${n}-title`]: {
				color: t.colorPrimary,
				fontWeight: t.fontWeightStrong
			},
			"&-draggable": {
				cursor: "grab",
				[`${n}-draggable-icon`]: {
					flexShrink: 0,
					width: s,
					textAlign: "center",
					visibility: "visible",
					color: d
				},
				[`&${r}-disabled ${n}-draggable-icon`]: { visibility: "hidden" }
			}
		},
		[`${n}-indent`]: {
			alignSelf: "stretch",
			whiteSpace: "nowrap",
			userSelect: "none",
			"&-unit": {
				display: "inline-block",
				width: o
			}
		},
		[`${n}-draggable-icon`]: { visibility: "hidden" },
		[`${n}-switcher, ${n}-checkbox`]: { marginInlineEnd: t.calc(t.calc(s).sub(t.controlInteractiveSize)).div(2).equal() },
		[`${n}-checkbox`]: {
			flexShrink: 0,
			alignSelf: "flex-start",
			marginBlockStart: t.calc(t.calc(a).sub(t.controlInteractiveSize)).div(2).equal()
		},
		[`${n}-switcher`]: {
			...ar(e, t),
			position: "relative",
			flex: "none",
			alignSelf: "stretch",
			width: s,
			textAlign: "center",
			cursor: "pointer",
			userSelect: "none",
			transition: `all ${t.motionDurationSlow}`,
			"&-noop": { cursor: "unset" },
			"&:before": {
				pointerEvents: "none",
				content: "\"\"",
				width: s,
				height: a,
				position: "absolute",
				left: {
					_skip_check_: !0,
					value: 0
				},
				top: 0,
				borderRadius: t.borderRadius,
				transition: `all ${t.motionDurationSlow}`
			},
			[`&:not(${n}-switcher-noop):hover:before`]: { backgroundColor: t.colorBgTextHover },
			[`&_close ${n}-switcher-icon svg`]: { transform: "rotate(-90deg)" },
			"&-loading-icon": { color: t.colorPrimary },
			"&-leaf-line": {
				position: "relative",
				zIndex: 1,
				display: "inline-block",
				width: "100%",
				height: "100%",
				"&:before": {
					position: "absolute",
					top: 0,
					insetInlineEnd: t.calc(s).div(2).equal(),
					bottom: t.calc(i).mul(-1).equal(),
					marginInlineStart: -1,
					borderInlineEnd: `1px solid ${t.colorBorder}`,
					content: "\"\""
				},
				"&:after": {
					position: "absolute",
					width: t.calc(t.calc(s).div(2).equal()).mul(.8).equal(),
					height: t.calc(a).div(2).equal(),
					borderBottom: `1px solid ${t.colorBorder}`,
					content: "\"\""
				}
			}
		},
		[`${n}-node-content-wrapper`]: {
			position: "relative",
			minHeight: a,
			paddingBlock: 0,
			paddingInline: t.paddingXS,
			background: "transparent",
			borderRadius: t.borderRadius,
			cursor: "pointer",
			transition: [
				`all ${c}`,
				"border 0s",
				"line-height 0s",
				"box-shadow 0s"
			].join(", "),
			...or(e, t),
			"&:hover": { backgroundColor: u },
			[`&${n}-node-selected`]: {
				color: t.nodeSelectedColor,
				backgroundColor: l
			},
			[`${n}-iconEle`]: {
				display: "inline-block",
				width: s,
				height: a,
				textAlign: "center",
				verticalAlign: "top",
				"&:empty": { display: "none" }
			}
		},
		[`${n}-unselectable ${n}-node-content-wrapper:hover`]: { backgroundColor: "transparent" },
		[`${r}.drop-container > [draggable]`]: { boxShadow: `0 0 0 2px ${t.colorPrimary}` },
		"&-show-line": {
			[`${n}-indent-unit`]: {
				position: "relative",
				height: "100%",
				"&:before": {
					position: "absolute",
					top: 0,
					insetInlineEnd: t.calc(s).div(2).equal(),
					bottom: t.calc(i).mul(-1).equal(),
					borderInlineEnd: `1px solid ${t.colorBorder}`,
					content: "\"\""
				},
				"&-end:before": { display: "none" }
			},
			[`${n}-switcher`]: {
				background: "transparent",
				"&-line-icon": { verticalAlign: "-0.15em" }
			}
		},
		[`${r}-leaf-last ${n}-switcher-leaf-line:before`]: {
			top: "auto !important",
			bottom: "auto !important",
			height: `${D(t.calc(a).div(2).equal())} !important`
		}
	} };
}, cr = (e, t, n = !0) => {
	let r = `.${e}`, i = L(t, {
		treeCls: r,
		treeNodeCls: `${r}-treenode`,
		treeNodePadding: t.calc(t.paddingXS).div(2).equal()
	});
	return [sr(e, i), n && rr(i)].filter(Boolean);
}, lr = (e) => {
	let { controlHeightSM: t, controlItemBgHover: n, controlItemBgActive: r } = e, i = t;
	return {
		titleHeight: i,
		switcherSize: i,
		indentSize: i,
		nodeHoverBg: n,
		nodeHoverColor: e.colorText,
		nodeSelectedBg: r,
		nodeSelectedColor: e.colorText
	};
}, ur = Se("Tree", (e, { prefixCls: t }) => [
	{ [e.componentCls]: Le(`${t}-checkbox`, e) },
	cr(t, e),
	V(e)
], (e) => {
	let { colorTextLightSolid: t, colorPrimary: n } = e;
	return {
		...lr(e),
		directoryNodeSelectedColor: t,
		directoryNodeSelectedBg: n
	};
}), dr = (e) => {
	let { dropPosition: t, dropLevelOffset: n, prefixCls: r, indent: i, direction: a = "ltr" } = e, o = a === "ltr" ? "left" : "right", s = a === "ltr" ? "right" : "left", c = {
		[o]: -n * i + 4,
		[s]: 0
	};
	switch (t) {
		case -1:
			c.top = -3;
			break;
		case 1:
			c.bottom = -3;
			break;
		default:
			c.bottom = -3, c[o] = i + 4;
			break;
	}
	return /*#__PURE__*/ X.createElement("div", {
		style: c,
		className: `${r}-drop-indicator`
	});
}, fr = (e) => {
	let { prefixCls: t, switcherIcon: n, treeNodeProps: r, showLine: i, switcherLoadingIcon: a } = e, { isLeaf: o, expanded: s, loading: c } = r;
	if (c) return /*#__PURE__*/ X.isValidElement(a) ? a : /*#__PURE__*/ X.createElement(te, { className: `${t}-switcher-loading-icon` });
	let l;
	if (H(i) && (l = i.showLeafIcon), o) {
		if (!i) return null;
		if (typeof l != "boolean" && l) {
			let e = le(l) ? l(r) : l, n = `${t}-switcher-line-custom-icon`;
			return /*#__PURE__*/ X.isValidElement(e) ? ie(e, { className: u(e.props?.className, n) }) : e;
		}
		return l ? /*#__PURE__*/ X.createElement(g, { className: `${t}-switcher-line-icon` }) : /*#__PURE__*/ X.createElement("span", { className: `${t}-switcher-leaf-line` });
	}
	let d = `${t}-switcher-icon`, f = le(n) ? n(r) : n;
	return /*#__PURE__*/ X.isValidElement(f) ? ie(f, { className: u(f.props?.className, i ? `${t}-switcher-line-icon` : d) }) : f === void 0 ? i ? s ? /*#__PURE__*/ X.createElement(C, { className: `${t}-switcher-line-icon` }) : /*#__PURE__*/ X.createElement(b, { className: `${t}-switcher-line-icon` }) : /*#__PURE__*/ X.createElement(M, { className: d }) : f;
}, pr = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { getPrefixCls: n, direction: r, className: i, style: a, classNames: o, styles: s } = U("tree"), { virtual: c } = X.useContext(pe), { prefixCls: l, className: d, showIcon: f = !1, showLine: p, switcherIcon: m, switcherLoadingIcon: h, blockNode: g = !1, children: _, checkable: v = !1, selectable: y = !0, draggable: b, disabled: x, motion: S, style: C, rootClassName: w, classNames: T, styles: E, icon: D } = e, O = X.useContext(ve), k = x ?? O, j = n("tree", l), M = n(), ee = S ?? {
		..._e(M),
		motionAppear: !1
	}, te = {
		...e,
		showIcon: f,
		blockNode: g,
		checkable: v,
		selectable: y,
		disabled: k,
		motion: ee
	}, [N, P] = re([o, T], [s, E], { props: te }), F = {
		...te,
		showLine: !!p,
		icon: D,
		dropIndicatorRender: dr
	}, [I, ne] = ur(j), [, L] = fe(), R = L.paddingXS / 2 + (L.Tree?.titleHeight || L.controlHeightSM), z = X.useMemo(() => {
		if (!b) return !1;
		let e = {};
		switch (typeof b) {
			case "function":
				e.nodeDraggable = b;
				break;
			case "object":
				e = { ...b };
				break;
			default: break;
		}
		return e.icon !== !1 && (e.icon = e.icon || /*#__PURE__*/ X.createElement(A, null)), e;
	}, [b]), B = (e) => /*#__PURE__*/ X.createElement(fr, {
		prefixCls: j,
		switcherIcon: m,
		switcherLoadingIcon: h,
		treeNodeProps: e,
		showLine: p
	});
	return /*#__PURE__*/ X.createElement(Fe, {
		itemHeight: R,
		ref: t,
		virtual: c,
		...F,
		prefixCls: j,
		className: u({
			[`${j}-icon-hide`]: !f,
			[`${j}-block-node`]: g,
			[`${j}-unselectable`]: !y,
			[`${j}-rtl`]: r === "rtl",
			[`${j}-disabled`]: k
		}, i, d, I, ne),
		style: {
			...a,
			...C
		},
		rootClassName: u(N.root, w),
		rootStyle: P.root,
		classNames: N,
		styles: P,
		direction: r,
		checkable: v && /*#__PURE__*/ X.createElement("span", { className: `${j}-checkbox-inner` }),
		selectable: y,
		switcherIcon: B,
		draggable: z
	}, _);
}), mr = 0, hr = 1, gr = 2;
function _r(e, t, n) {
	let { key: r, children: i } = n;
	function a(e) {
		let a = e[r], o = e[i];
		t(a, e) !== !1 && _r(o || [], t, n);
	}
	e.forEach(a);
}
function vr({ treeData: e, expandedKeys: t, startKey: n, endKey: r, fieldNames: i }) {
	let a = [], o = mr;
	if (n && n === r) return [n];
	if (!n || !r) return [];
	function s(e) {
		return e === n || e === r;
	}
	return _r(e, (e) => {
		if (o === gr) return !1;
		if (s(e)) {
			if (a.push(e), o === mr) o = hr;
			else if (o === hr) return o = gr, !1;
		} else o === hr && a.push(e);
		return t.includes(e);
	}, Pe(i)), a;
}
function yr(e, t, n) {
	let r = l(t), i = [];
	return _r(e, (e, t) => {
		let n = r.indexOf(e);
		return n !== -1 && (i.push(t), r.splice(n, 1)), !!r.length;
	}, Pe(n)), i;
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/tree/DirectoryTree.js
function br(e) {
	let { isLeaf: t, expanded: n } = e;
	return t ? /*#__PURE__*/ X.createElement(g, null) : n ? /*#__PURE__*/ X.createElement(T, null) : /*#__PURE__*/ X.createElement(E, null);
}
function xr({ treeData: e, children: t }) {
	return e || Ne(t);
}
var Sr = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { defaultExpandAll: n, defaultExpandParent: r = !0, defaultExpandedKeys: i, ...a } = e, o = X.useRef(null), s = X.useRef(null), c = () => {
		let { keyEntities: e } = Be(xr(a), { fieldNames: a.fieldNames }), t, o = a.expandedKeys || i || [];
		return t = n ? Object.keys(e) : r ? Me(o, e) : o, t;
	}, [d, f] = X.useState(a.selectedKeys || a.defaultSelectedKeys || []), [p, m] = X.useState(() => c());
	X.useEffect(() => {
		"selectedKeys" in a && f(a.selectedKeys);
	}, [a.selectedKeys]), X.useEffect(() => {
		"expandedKeys" in a && m(a.expandedKeys);
	}, [a.expandedKeys]);
	let h = (e, t) => ("expandedKeys" in a || m(e), a.onExpand?.(e, t)), g = (e, t) => {
		let { multiple: n, fieldNames: r } = a, { node: i, nativeEvent: c } = t, { key: u = "" } = i, d = xr(a), m = {
			...t,
			selected: !0
		}, h = c?.ctrlKey || c?.metaKey, g = c?.shiftKey, _;
		n && h ? (_ = e, o.current = u, s.current = _, m.selectedNodes = yr(d, _, r)) : n && g ? (_ = Array.from(new Set([].concat(l(s.current || []), l(vr({
			treeData: d,
			expandedKeys: p,
			startKey: u,
			endKey: o.current,
			fieldNames: r
		}))))), m.selectedNodes = yr(d, _, r)) : (_ = [u], o.current = u, s.current = _, m.selectedNodes = yr(d, _, r)), a.onSelect?.(_, m), "selectedKeys" in a || f(_);
	}, { getPrefixCls: _, direction: v } = X.useContext(pe), { prefixCls: y, className: b, showIcon: x = !0, expandAction: S = "click", ...C } = a, w = _("tree", y), T = u(`${w}-directory`, { [`${w}-directory-rtl`]: v === "rtl" }, b);
	return /*#__PURE__*/ X.createElement(pr, {
		icon: br,
		ref: t,
		blockNode: !0,
		...C,
		showIcon: x,
		expandAction: S,
		prefixCls: w,
		className: T,
		defaultExpandParent: r,
		expandedKeys: p,
		selectedKeys: d,
		onSelect: g,
		onExpand: h
	});
}), Cr = /* @__PURE__ */ e({ default: () => wr }), wr = pr;
wr.DirectoryTree = Sr, wr.TreeNode = Ie;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/hooks/useFilter/FilterSearch.js
var Tr = (e) => {
	let { value: t, filterSearch: n, tablePrefixCls: r, locale: i, onChange: a } = e;
	return n ? /*#__PURE__*/ X.createElement("div", { className: `${r}-filter-dropdown-search` }, /*#__PURE__*/ X.createElement(He, {
		prefix: /*#__PURE__*/ X.createElement(f, null),
		placeholder: i.filterSearchPlaceholder,
		onChange: a,
		value: t,
		htmlSize: 1,
		className: `${r}-filter-dropdown-search-input`
	})) : null;
}, Er = (e) => {
	let { keyCode: t } = e;
	t === s.ENTER && e.stopPropagation();
}, Dr = /*#__PURE__*/ X.forwardRef((e, t) => /*#__PURE__*/ X.createElement("div", {
	className: e.className,
	onClick: (e) => e.stopPropagation(),
	onKeyDown: Er,
	ref: t,
	role: "presentation"
}, e.children));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/hooks/useFilter/FilterDropdown.js
function Or(e) {
	let t = [];
	return (e || []).forEach(({ value: e, children: n }) => {
		t.push(e), n && (t = [].concat(l(t), l(Or(n))));
	}), t;
}
function kr(e) {
	return e.some(({ children: e }) => e);
}
var Ar = (e, t) => typeof t == "string" || ue(t) ? t.toString().toLowerCase().includes(e) : !1, jr = (e) => {
	let { filters: t, prefixCls: n, filteredKeys: r, filterMultiple: i, searchValue: a, normalizedSearchValue: o, filterSearch: s } = e;
	return t.map((e, t) => {
		let c = String(e.value);
		if (e.children) return {
			key: c || t,
			label: e.text,
			popupClassName: `${n}-dropdown-submenu`,
			children: jr({
				filters: e.children,
				prefixCls: n,
				filteredKeys: r,
				filterMultiple: i,
				searchValue: a,
				normalizedSearchValue: o,
				filterSearch: s
			})
		};
		let l = i ? Ve : J, u = {
			key: e.value === void 0 ? t : c,
			label: /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(l, { checked: r.includes(c) }), /*#__PURE__*/ X.createElement("span", null, e.text))
		};
		return o ? le(s) ? s(o, e) ? u : null : Ar(o, e.text) ? u : null : u;
	});
};
function Mr(e) {
	return e || [];
}
var Nr = (e) => {
	let { tablePrefixCls: t, prefixCls: n, column: r, dropdownPrefixCls: i, columnKey: o, filterOnClose: s, filterMultiple: c, filterMode: l = "menu", filterSearch: d = !1, filterState: f, triggerFilter: p, locale: m, children: h, getPopupContainer: g, rootClassName: _ } = e, { filterResetToDefaultFilteredValue: v, defaultFilteredValue: y, filterDropdownProps: b = {}, filterDropdownOpen: x, onFilterDropdownOpenChange: S } = r, [C, w] = X.useState(!1), T = X.useContext(De), E = !!(f && (f.filteredKeys?.length || f.forceFiltered)), D = (e) => {
		w(e), b.onOpenChange?.(e), S?.(e);
	}, O = b.open ?? x ?? C, k = f?.filteredKeys, [A, j] = K(Mr(k)), M = ({ selectedKeys: e }) => {
		j(e);
	}, ee = (e, { node: t, checked: n }) => {
		M(c ? { selectedKeys: e } : { selectedKeys: n && t.key ? [t.key] : [] });
	};
	X.useEffect(() => {
		C && M({ selectedKeys: Mr(k) });
	}, [k]);
	let [te, N] = X.useState([]), P = (e) => {
		N(e);
	}, [I, ne] = X.useState(""), L = X.useMemo(() => I.trim().toLowerCase(), [I]), B = (e) => {
		let { value: t } = e.target;
		ne(t);
	};
	X.useEffect(() => {
		C || ne("");
	}, [C]);
	let V = (e) => {
		let t = e?.length ? e : null;
		if (t === null && (!f || !f.filteredKeys) || a(t, f?.filteredKeys, !0)) return null;
		p({
			column: r,
			key: o,
			filteredKeys: t
		});
	}, re = () => {
		D(!1), V(A());
	}, ie = ({ confirm: e, closeDropdown: t } = {
		confirm: !1,
		closeDropdown: !1
	}) => {
		e && V([]), t && D(!1), ne(""), j(v ? (y || []).map(String) : []);
	}, H = ({ closeDropdown: e } = { closeDropdown: !0 }) => {
		e && D(!1), V(A());
	}, ae = (e, t) => {
		t.source === "trigger" && (e && k !== void 0 && j(Mr(k)), D(e), !e && !r.filterDropdown && s && re());
	}, oe = u({ [`${i}-menu-without-submenu`]: !kr(r.filters || []) }), U = (e) => {
		e.target.checked ? j(Or(r?.filters).map(String)) : j([]);
	}, W = ({ filters: e }) => (e || []).map((e, t) => {
		let n = String(e.value), r = {
			title: e.text,
			key: e.value === void 0 ? String(t) : n
		};
		return e.children && (r.children = W({ filters: e.children })), r;
	}), se = (e) => ({
		...e,
		text: e.title,
		value: e.key,
		children: e.children?.map(se) || []
	}), ce, { direction: ue, renderEmpty: de } = X.useContext(pe);
	if (le(r.filterDropdown)) ce = r.filterDropdown({
		prefixCls: `${i}-custom`,
		setSelectedKeys: (e) => M({ selectedKeys: e }),
		selectedKeys: A(),
		confirm: H,
		clearFilters: ie,
		filters: r.filters,
		visible: O,
		close: () => {
			D(!1);
		}
	});
	else if (r.filterDropdown) ce = r.filterDropdown;
	else {
		let e = A() || [];
		ce = /*#__PURE__*/ X.createElement(X.Fragment, null, (() => {
			let a = de?.("Table.filter") ?? /*#__PURE__*/ X.createElement(z, {
				image: z.PRESENTED_IMAGE_SIMPLE,
				description: m.filterEmptyText,
				styles: { image: { height: 24 } },
				style: {
					margin: 0,
					padding: "16px 0"
				}
			});
			if ((r.filters || []).length === 0) return a;
			if (l === "tree") return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Tr, {
				filterSearch: d,
				value: I,
				onChange: B,
				tablePrefixCls: t,
				locale: m
			}), /*#__PURE__*/ X.createElement("div", { className: `${t}-filter-dropdown-tree` }, c ? /*#__PURE__*/ X.createElement(Ve, {
				checked: e.length === Or(r.filters).length,
				indeterminate: e.length > 0 && e.length < Or(r.filters).length,
				className: `${t}-filter-dropdown-checkall`,
				onChange: U
			}, m?.filterCheckall ?? m?.filterCheckAll) : null, /*#__PURE__*/ X.createElement(wr, {
				checkable: !0,
				selectable: !1,
				blockNode: !0,
				multiple: c,
				checkStrictly: !c,
				className: `${i}-menu`,
				onCheck: ee,
				checkedKeys: e,
				selectedKeys: e,
				showIcon: !1,
				treeData: W({ filters: r.filters }),
				autoExpandParent: !0,
				defaultExpandAll: !0,
				filterTreeNode: L ? (e) => le(d) ? d(I, se(e)) : Ar(L, e.title) : void 0
			})));
			let o = jr({
				filters: r.filters || [],
				filterSearch: d,
				prefixCls: n,
				filteredKeys: A(),
				filterMultiple: c,
				searchValue: I,
				normalizedSearchValue: L
			}), s = o.every((e) => e === null);
			return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Tr, {
				filterSearch: d,
				value: I,
				onChange: B,
				tablePrefixCls: t,
				locale: m
			}), s ? a : /*#__PURE__*/ X.createElement(je, {
				selectable: !0,
				multiple: c,
				prefixCls: `${i}-menu`,
				className: oe,
				onSelect: M,
				onDeselect: M,
				selectedKeys: e,
				getPopupContainer: g,
				openKeys: te,
				onOpenChange: P,
				items: o
			}));
		})(), /*#__PURE__*/ X.createElement("div", { className: `${n}-dropdown-btns` }, /*#__PURE__*/ X.createElement(we, {
			type: "link",
			size: "small",
			disabled: v ? a((y || []).map(String), e, !0) : e.length === 0,
			onClick: () => ie()
		}, m.filterReset), /*#__PURE__*/ X.createElement(we, {
			type: "primary",
			size: "small",
			onClick: re
		}, m.filterConfirm)));
	}
	r.filterDropdown && (ce = /*#__PURE__*/ X.createElement(Ae, { selectable: void 0 }, ce)), ce = /*#__PURE__*/ X.createElement(Dr, { className: `${n}-dropdown` }, ce);
	let fe = (() => {
		let e;
		return e = le(r.filterIcon) ? r.filterIcon(E) : r.filterIcon ? r.filterIcon : /*#__PURE__*/ X.createElement(F, null), /*#__PURE__*/ X.createElement("span", {
			role: "button",
			tabIndex: -1,
			className: u(`${n}-trigger`, { active: E }),
			onClick: (e) => {
				e.stopPropagation();
			}
		}, e);
	})();
	if (T) return /*#__PURE__*/ X.createElement("div", { className: `${n}-column` }, /*#__PURE__*/ X.createElement("span", { className: `${t}-column-title` }, h), fe);
	let me = R({
		trigger: ["click"],
		placement: ue === "rtl" ? "bottomLeft" : "bottomRight",
		children: fe,
		getPopupContainer: g
	}, {
		...b,
		rootClassName: u(_, b.rootClassName),
		open: O,
		onOpenChange: ae,
		popupRender: () => le(b?.dropdownRender) ? b.dropdownRender(ce) : ce
	});
	return /*#__PURE__*/ X.createElement("div", { className: `${n}-column` }, /*#__PURE__*/ X.createElement("span", { className: `${t}-column-title` }, h), /*#__PURE__*/ X.createElement(Ue, { ...me }));
}, Pr = (e, t, n) => {
	let r = [];
	return (e || []).forEach((e, i) => {
		let a = er(i, n), o = e.filterDropdown !== void 0;
		if (e.filters || o || "onFilter" in e) if ("filteredValue" in e) {
			let t = e.filteredValue;
			o || (t = t?.map(String) ?? t), r.push({
				column: e,
				key: $n(e, a),
				filteredKeys: t,
				forceFiltered: e.filtered
			});
		} else r.push({
			column: e,
			key: $n(e, a),
			filteredKeys: t && e.defaultFilteredValue ? e.defaultFilteredValue : void 0,
			forceFiltered: e.filtered
		});
		"children" in e && (r = [].concat(l(r), l(Pr(e.children, t, a))));
	}), r;
};
function Fr(e, t, n, r, i, a, o, s, c) {
	return n.map((n, l) => {
		let u = er(l, s), { filterOnClose: d = !0, filterMultiple: f = !0, filterMode: p, filterSearch: m } = n, h = n;
		if (h.filters || h.filterDropdown) {
			let s = $n(h, u), l = r.find(({ key: e }) => s === e);
			h = {
				...h,
				title: (r) => /*#__PURE__*/ X.createElement(Nr, {
					tablePrefixCls: e,
					prefixCls: `${e}-filter`,
					dropdownPrefixCls: t,
					column: h,
					columnKey: s,
					filterState: l,
					filterOnClose: d,
					filterMultiple: f,
					filterMode: p,
					filterSearch: m,
					triggerFilter: a,
					locale: i,
					getPopupContainer: o,
					rootClassName: c
				}, tr(n.title, r))
			};
		}
		return "children" in h && (h = {
			...h,
			children: Fr(e, t, h.children, r, i, a, o, u, c)
		}), h;
	});
}
var Ir = (e) => {
	let t = {};
	return e.forEach(({ key: e, filteredKeys: n, column: r }) => {
		let i = e, { filters: a, filterDropdown: o } = r;
		o ? t[i] = n || null : Array.isArray(n) ? t[i] = Or(a).filter((e) => n.includes(String(e))) : t[i] = null;
	}), t;
}, Lr = (e, t, n) => t.reduce((e, r) => {
	let { column: { onFilter: i, filters: a }, filteredKeys: o } = r;
	if (i && o && o.length) {
		let r = Or(a), s = /* @__PURE__ */ new Map();
		r.forEach((e) => {
			let t = String(e);
			s.has(t) || s.set(t, e);
		});
		let c = o.map((e) => {
			let t = String(e);
			return s.get(t) ?? e;
		});
		return ((e) => e.reduce((e, r) => {
			let a = { ...r };
			return a[n] && (a[n] = Lr(a[n], t, n)), c.some((e) => i(e, a)) && e.push(a), e;
		}, []))(e);
	}
	return e;
}, e), Rr = (e) => e.flatMap((e) => "children" in e ? [e].concat(l(Rr(e.children || []))) : [e]), zr = (e) => {
	let { prefixCls: t, dropdownPrefixCls: n, mergedColumns: r, onFilterChange: i, getPopupContainer: a, locale: o, rootClassName: s } = e;
	xe("Table");
	let c = X.useMemo(() => Rr(r || []), [r]), [l, u] = X.useState(() => Pr(c, !0)), d = X.useMemo(() => {
		let e = Pr(c, !1);
		if (e.length === 0) return e;
		let t = !0;
		if (e.forEach(({ filteredKeys: e }) => {
			e !== void 0 && (t = !1);
		}), t) {
			let e = (c || []).map((e, t) => $n(e, er(t)));
			return l.reduce((t, n) => {
				let r = e.indexOf(n.key);
				if (r !== -1) {
					let e = c[r];
					t.push({
						...n,
						column: {
							...n.column,
							...e
						},
						forceFiltered: e.filtered
					});
				}
				return t;
			}, []);
		}
		return e;
	}, [c, l]), f = X.useMemo(() => Ir(d), [d]), p = (e) => {
		let t = d.filter(({ key: t }) => t !== e.key);
		t.push(e), u(t), i(Ir(t), t);
	};
	return [
		(e) => Fr(t, n, e, d, o, p, a, void 0, s),
		d,
		f
	];
}, Br = (e, t, n) => {
	let r = X.useRef({});
	function i(i) {
		if (!r.current || r.current.data !== e || r.current.childrenColumnName !== t || r.current.getRowKey !== n) {
			let i = /* @__PURE__ */ new Map();
			function a(e) {
				e.forEach((e, r) => {
					let o = n(e, r);
					i.set(o, e), H(e) && t in e && a(e[t] || []);
				});
			}
			a(e), r.current = {
				data: e,
				childrenColumnName: t,
				kvMap: i,
				getRowKey: n
			};
		}
		return r.current.kvMap?.get(i);
	}
	return [i];
};
function Vr(e, t) {
	let n = {
		current: e.current,
		pageSize: e.pageSize
	}, r = H(t) ? t : {};
	return Object.keys(r).forEach((t) => {
		let r = e[t];
		le(r) || (n[t] = r);
	}), n;
}
function Hr(e, t, n) {
	let { total: r = 0, ...i } = H(n) ? n : {}, [a, o] = (0, X.useState)(() => ({
		current: "defaultCurrent" in i ? i.defaultCurrent : 1,
		pageSize: "defaultPageSize" in i ? i.defaultPageSize : 10
	})), s = R(a, i, { total: r > 0 ? r : e }), c = Math.ceil((r || e) / s.pageSize);
	s.current > c && (s.current = c || 1);
	let l = (e, t) => {
		o({
			current: e ?? 1,
			pageSize: t || s.pageSize
		});
	}, u = (e, r) => {
		n && n.onChange?.(e, r), l(e, r), t(e, r || s?.pageSize);
	};
	return n === !1 ? [{}, () => {}] : [{
		...s,
		onChange: u
	}, l];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/hooks/useSorter.js
var Ur = "ascend", Wr = "descend", Gr = (e) => H(e.sorter) && ue(e.sorter.multiple) ? e.sorter.multiple : !1, Kr = (e) => le(e) ? e : H(e) && e.compare ? e.compare : !1, qr = (e, t) => t ? e[e.indexOf(t) + 1] : e[0], Jr = (e, t, n) => {
	let r = [], i = (e, t) => {
		r.push({
			column: e,
			key: $n(e, t),
			multiplePriority: Gr(e),
			sortOrder: e.sortOrder
		});
	};
	return (e || []).forEach((e, a) => {
		let o = er(a, n);
		e.children ? ("sortOrder" in e && i(e, o), r = [].concat(l(r), l(Jr(e.children, t, o)))) : e.sorter && ("sortOrder" in e ? i(e, o) : t && e.defaultSortOrder && r.push({
			column: e,
			key: $n(e, o),
			multiplePriority: Gr(e),
			sortOrder: e.defaultSortOrder
		}));
	}), r;
}, Yr = (e, t, n, r, i, a, o, c, l) => (t || []).map((t, d) => {
	let f = er(d, c), p = t;
	if (p.sorter) {
		let c = p.sortDirections || i, d = p.showSorterTooltip === void 0 ? o : p.showSorterTooltip, m = $n(p, f), h = n.find(({ key: e }) => e === m), g = h ? h.sortOrder : null, _ = qr(c, g), v;
		if (t.sortIcon) v = t.sortIcon({ sortOrder: g });
		else {
			let t = c.includes(Ur) && /*#__PURE__*/ X.createElement(O, { className: u(`${e}-column-sorter-up`, { active: g === Ur }) }), n = c.includes(Wr) && /*#__PURE__*/ X.createElement(P, { className: u(`${e}-column-sorter-down`, { active: g === Wr }) });
			v = /*#__PURE__*/ X.createElement("span", { className: u(`${e}-column-sorter`, { [`${e}-column-sorter-full`]: !!(t && n) }) }, /*#__PURE__*/ X.createElement("span", {
				className: `${e}-column-sorter-inner`,
				"aria-hidden": "true"
			}, t, n));
		}
		let { cancelSort: y, triggerAsc: b, triggerDesc: x } = a || {}, S = y;
		_ === Wr ? S = x : _ === Ur && (S = b);
		let C = H(d) ? {
			title: S,
			...d
		} : { title: S };
		p = {
			...p,
			className: u(p.className, { [`${e}-column-sort`]: g }),
			title: (n) => {
				let r = `${e}-column-sorters`, i = /*#__PURE__*/ X.createElement("span", { className: `${e}-column-title` }, tr(t.title, n)), a = /*#__PURE__*/ X.createElement("div", { className: r }, i, v);
				return d ? typeof d != "boolean" && d?.target === "sorter-icon" ? /*#__PURE__*/ X.createElement("div", { className: u(r, `${r}-tooltip-target-sorter`) }, i, /*#__PURE__*/ X.createElement(Oe, { ...C }, v)) : /*#__PURE__*/ X.createElement(Oe, { ...C }, a) : a;
			},
			onHeaderCell: (n) => {
				let i = t.onHeaderCell?.(n) || {}, a = i.onClick, o = i.onKeyDown;
				i.onClick = (e) => {
					r({
						column: t,
						key: m,
						sortOrder: _,
						multiplePriority: Gr(t)
					}), a?.(e);
				}, i.onKeyDown = (e) => {
					e.keyCode === s.ENTER && (r({
						column: t,
						key: m,
						sortOrder: _,
						multiplePriority: Gr(t)
					}), o?.(e));
				};
				let c = nr(t.title, {}), d = c?.toString();
				return g && (i["aria-sort"] = g === "ascend" ? "ascending" : "descending"), i["aria-description"] = l?.sortable, i["aria-label"] = d || "", i.className = u(i.className, `${e}-column-has-sorters`), i.tabIndex = 0, t.ellipsis && (i.title = (c ?? "").toString()), i;
			}
		};
	}
	return "children" in p && (p = {
		...p,
		children: Yr(e, p.children, n, r, i, a, o, f, l)
	}), p;
}), Xr = (e) => {
	let { column: t, sortOrder: n } = e;
	return {
		column: t,
		order: n,
		field: t.dataIndex,
		columnKey: t.key
	};
}, Zr = (e) => {
	let t = e.reduce((e, t) => (t.sortOrder && e.push(Xr(t)), e), []);
	return t.length === 0 && e.length ? {
		...Xr(e[e.length - 1]),
		column: void 0,
		order: void 0,
		field: void 0,
		columnKey: void 0
	} : t.length <= 1 ? t[0] || {} : t;
}, Qr = (e, t, n) => {
	let r = t.slice().sort((e, t) => t.multiplePriority - e.multiplePriority), i = e.slice(), a = r.filter(({ column: { sorter: e }, sortOrder: t }) => Kr(e) && t);
	return a.length ? i.sort((e, t) => {
		for (let n = 0; n < a.length; n += 1) {
			let { column: { sorter: r }, sortOrder: i } = a[n], o = Kr(r);
			if (o && i) {
				let n = o(e, t, i);
				if (n !== 0) return i === Ur ? n : -n;
			}
		}
		return 0;
	}).map((e) => {
		let r = e[n];
		return r ? {
			...e,
			[n]: Qr(r, t, n)
		} : e;
	}) : i;
}, $r = (e) => {
	let { prefixCls: t, mergedColumns: n, sortDirections: r, tableLocale: i, showSorterTooltip: a, onSorterChange: o, globalLocale: s } = e, [c, u] = X.useState(() => Jr(n, !0)), d = (e, t) => {
		let n = [];
		return e.forEach((e, r) => {
			let i = er(r, t);
			if (n.push($n(e, i)), Array.isArray(e.children)) {
				let t = d(e.children, i);
				n.push.apply(n, l(t));
			}
		}), n;
	}, f = X.useMemo(() => {
		let e = !0, t = Jr(n, !1);
		if (!t.length) {
			let e = d(n);
			return c.filter(({ key: t }) => e.includes(t));
		}
		let r = [];
		function i(t) {
			e ? r.push(t) : r.push({
				...t,
				sortOrder: null
			});
		}
		let a = null;
		return t.forEach((t) => {
			a === null ? (i(t), t.sortOrder && (t.multiplePriority === !1 ? e = !1 : a = !0)) : (a && t.multiplePriority !== !1 || (e = !1), i(t));
		}), r;
	}, [n, c]), p = X.useMemo(() => {
		let e = f.map(({ column: e, sortOrder: t }) => ({
			column: e,
			order: t
		}));
		return {
			sortColumns: e,
			sortColumn: e[0]?.column,
			sortOrder: e[0]?.order
		};
	}, [f]), m = (e) => {
		let t;
		t = e.multiplePriority === !1 || !f.length || f[0].multiplePriority === !1 ? [e] : [].concat(l(f.filter(({ key: t }) => t !== e.key)), [e]), u(t), o(Zr(t), t);
	};
	return [
		(e) => Yr(t, e, f, m, r, i, a, void 0, s),
		f,
		p,
		() => Zr(f)
	];
}, ei = (e, t) => e.map((e) => {
	let n = { ...e };
	return n.title = tr(e.title, t), "children" in n && (n.children = ei(n.children, t)), n;
}), ti = (e) => [X.useCallback((t) => ei(t, e), [e])], ni = En((e, t) => {
	let { _renderTimes: n } = e, { _renderTimes: r } = t;
	return n !== r;
}), ri = Bn((e, t) => {
	let { _renderTimes: n } = e, { _renderTimes: r } = t;
	return n !== r;
}), ii = (e) => {
	let { componentCls: t, lineWidth: n, lineType: r, tableBorderColor: i, tableHeaderBg: a, tablePaddingVertical: o, tablePaddingHorizontal: s, calc: c } = e, l = `${D(n)} ${r} ${i}`, u = (e, r, i) => ({ [`&${t}-${e}`]: { [`> ${t}-container`]: { [`> ${t}-content, > ${t}-body`]: { "> table > tbody > tr > th, > table > tbody > tr > td": { [`> ${t}-expanded-row-fixed`]: { margin: `${D(c(r).mul(-1).equal())}
              ${D(c(c(i).add(n)).mul(-1).equal())}` } } } } } });
	return { [`${t}-wrapper`]: {
		[`${t}${t}-bordered`]: {
			[`> ${t}-title`]: {
				border: l,
				borderBottom: 0
			},
			[`> ${t}-container`]: {
				borderInlineStart: l,
				borderTop: l,
				[`> ${t}-content, > ${t}-header, > ${t}-body, > ${t}-summary`]: { "> table": {
					"> thead > tr > th, > thead > tr > td, > tbody > tr > th, > tbody > tr > td, > tfoot > tr > th, > tfoot > tr > td": { borderInlineEnd: l },
					"> thead": {
						"> tr:not(:last-child) > th": { borderBottom: l },
						"> tr > th::before": { backgroundColor: "transparent !important" }
					},
					"> thead > tr, > tbody > tr, > tfoot > tr": { [`> ${t}-cell-fix-right-first::after`]: { borderInlineEnd: l } },
					"> tbody > tr > th, > tbody > tr > td": { [`> ${t}-expanded-row-fixed`]: {
						margin: `${D(c(o).mul(-1).equal())} ${D(c(c(s).add(n)).mul(-1).equal())}`,
						"&::after": {
							position: "absolute",
							top: 0,
							insetInlineEnd: n,
							bottom: 0,
							borderInlineEnd: l,
							content: "\"\""
						}
					} }
				} }
			},
			[`&${t}-scroll-horizontal`]: { [`> ${t}-container > ${t}-body`]: { "> table > tbody": { [`
                > tr${t}-expanded-row,
                > tr${t}-placeholder
              `]: { "> th, > td": { borderInlineEnd: 0 } } } } },
			...u("medium", e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle),
			...u("small", e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall),
			[`> ${t}-footer`]: {
				border: l,
				borderTop: 0
			}
		},
		[`${t}-cell`]: {
			[`${t}-container:first-child`]: { borderTop: 0 },
			"&-scrollbar:not([rowspan])": { boxShadow: `0 ${D(n)} 0 ${D(n)} ${a}` }
		},
		[`${t}-bordered ${t}-cell-scrollbar`]: { borderInlineEnd: l }
	} };
}, ai = (e) => {
	let { componentCls: t } = e;
	return { [`${t}-wrapper`]: { [`${t}-cell-ellipsis`]: {
		...he,
		wordBreak: "keep-all",
		[`
          &${t}-cell-fix-start-shadow,
          &${t}-cell-fix-end-shadow
        `]: {
			overflow: "visible",
			[`${t}-cell-content`]: {
				...he,
				display: "block"
			}
		},
		[`${t}-column-title`]: {
			...he,
			wordBreak: "keep-all"
		}
	} } };
}, oi = (e) => {
	let { componentCls: t } = e;
	return { [`${t}-wrapper`]: { [`${t}-tbody > tr${t}-placeholder`]: {
		textAlign: "center",
		color: e.colorTextDisabled,
		"&:hover > th, &:hover > td": { background: e.colorBgContainer }
	} } };
}, si = (e) => {
	let { componentCls: t, antCls: n, motionDurationSlow: r, lineWidth: i, paddingXS: a, lineType: o, tableBorderColor: s, tableExpandIconBg: c, tableExpandColumnWidth: l, borderRadius: u, tablePaddingVertical: d, tablePaddingHorizontal: f, tableExpandedRowBg: p, paddingXXS: m, expandIconMarginTop: h, expandIconSize: g, expandIconHalfInner: _, expandIconScale: v, calc: y } = e, b = `${D(i)} ${o} ${s}`, x = y(m).sub(i).equal();
	return { [`${t}-wrapper`]: {
		[`${t}-expand-icon-col`]: { width: l },
		[`${t}-row-expand-icon-cell`]: {
			textAlign: "center",
			[`${t}-row-expand-icon`]: {
				display: "inline-flex",
				float: "none",
				verticalAlign: "sub"
			}
		},
		[`${t}-row-indent`]: {
			height: 1,
			float: "left"
		},
		[`${t}-row-expand-icon`]: {
			...G(e),
			position: "relative",
			float: "left",
			width: g,
			height: g,
			color: "inherit",
			lineHeight: D(g),
			background: c,
			border: b,
			borderRadius: u,
			transform: `scale(${v})`,
			"&:focus, &:hover, &:active": { borderColor: "currentcolor" },
			"&::before, &::after": {
				position: "absolute",
				background: "currentcolor",
				transition: `transform ${r} ease-out`,
				content: "\"\""
			},
			"&::before": {
				top: _,
				insetInlineEnd: x,
				insetInlineStart: x,
				height: i
			},
			"&::after": {
				top: x,
				bottom: x,
				insetInlineStart: _,
				width: i,
				transform: "rotate(90deg)"
			},
			"&-collapsed::before": { transform: "rotate(-180deg)" },
			"&-collapsed::after": { transform: "rotate(0deg)" },
			"&-spaced": {
				"&::before, &::after": {
					display: "none",
					content: "none"
				},
				background: "transparent",
				border: 0,
				visibility: "hidden"
			}
		},
		[`${t}-row-indent + ${t}-row-expand-icon`]: {
			marginTop: h,
			marginInlineEnd: a
		},
		[`tr${t}-expanded-row`]: {
			"&, &:hover": { "> th, > td": { background: p } },
			[`${n}-descriptions-view`]: {
				display: "flex",
				table: {
					flex: "auto",
					width: "100%"
				}
			}
		},
		[`${t}-expanded-row-fixed`]: {
			position: "relative",
			margin: `${D(y(d).mul(-1).equal())} ${D(y(f).mul(-1).equal())}`,
			padding: `${D(d)} ${D(f)}`
		}
	} };
}, ci = (e) => {
	let { componentCls: t, antCls: n, iconCls: r, tableFilterDropdownWidth: i, tableFilterDropdownSearchWidth: a, paddingXXS: o, paddingXS: s, colorText: c, lineWidth: l, lineType: u, tableBorderColor: d, headerIconColor: f, fontSizeSM: p, tablePaddingHorizontal: m, borderRadius: h, motionDurationSlow: g, colorIcon: _, colorPrimary: v, tableHeaderFilterActiveBg: y, colorTextDisabled: b, tableFilterDropdownBg: x, tableFilterDropdownHeight: S, controlItemBgHover: C, controlItemBgActive: w, boxShadowSecondary: T, filterDropdownMenuBg: E, calc: O } = e, k = `${n}-dropdown`, A = `${t}-filter-dropdown`, j = `${n}-tree`, M = `${D(l)} ${u} ${d}`;
	return [
		{ [`${t}-wrapper`]: {
			[`${t}-filter-column`]: {
				display: "flex",
				justifyContent: "space-between"
			},
			[`${t}-filter-trigger`]: {
				position: "relative",
				display: "flex",
				alignItems: "center",
				marginBlock: O(o).mul(-1).equal(),
				marginInline: `${D(o)} ${D(O(m).div(2).mul(-1).equal())}`,
				padding: `0 ${D(o)}`,
				color: f,
				fontSize: p,
				borderRadius: h,
				cursor: "pointer",
				transition: `all ${g}`,
				"&:hover": {
					color: _,
					background: y
				},
				"&.active": { color: v }
			}
		} },
		{ [`${n}-dropdown`]: { [A]: {
			...be(e),
			minWidth: i,
			backgroundColor: x,
			borderRadius: h,
			boxShadow: T,
			overflow: "hidden",
			[`${k}-menu`]: {
				maxHeight: S,
				overflowX: "hidden",
				border: 0,
				boxShadow: "none",
				borderRadius: "unset",
				backgroundColor: E,
				"&:empty::after": {
					display: "block",
					padding: `${D(s)} 0`,
					color: b,
					fontSize: p,
					textAlign: "center",
					content: "\"Not Found\""
				}
			},
			[`${A}-tree`]: {
				paddingBlock: `${D(s)} 0`,
				paddingInline: s,
				[j]: { padding: 0 },
				[`${j}-treenode ${j}-node-content-wrapper:hover`]: { backgroundColor: C },
				[`${j}-treenode-checkbox-checked ${j}-node-content-wrapper`]: { "&, &:hover": { backgroundColor: w } }
			},
			[`${A}-search`]: {
				padding: s,
				borderBottom: M,
				"&-input": {
					input: { minWidth: a },
					[r]: { color: b }
				}
			},
			[`${A}-checkall`]: {
				width: "100%",
				marginBottom: o,
				marginInlineStart: o
			},
			[`${A}-btns`]: {
				display: "flex",
				justifyContent: "space-between",
				padding: `${D(O(s).sub(l).equal())} ${D(s)}`,
				overflow: "hidden",
				borderTop: M
			}
		} } },
		{ [`${n}-dropdown ${A}, ${A}-submenu`]: {
			[`${n}-checkbox-wrapper + span`]: {
				paddingInlineStart: s,
				color: c
			},
			"> ul": {
				maxHeight: "calc(100vh - 130px)",
				overflowX: "hidden",
				overflowY: "auto"
			}
		} }
	];
};
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/style/fixed.js
function li({ colorSplit: e }) {
	return [{ boxShadow: `inset 10px 0 8px -8px ${e}` }, { boxShadow: `inset -10px 0 8px -8px ${e}` }];
}
var ui = (e) => {
	let { componentCls: t, lineWidth: n, motionDurationSlow: r, zIndexTableFixed: i, tableBg: a, calc: o } = e, s = `${t}-cell`, c = `${s}-fix`, l = {
		position: "absolute",
		top: 0,
		bottom: o(n).mul(-1).equal(),
		width: 30,
		transition: `box-shadow ${r}`,
		content: "\"\"",
		pointerEvents: "none"
	}, [u, d] = li(e);
	return { [`${t}-wrapper`]: {
		[`${s}${c}`]: { position: "sticky" },
		[c]: {
			zIndex: `calc(var(--z-offset-reverse) + ${i})`,
			background: a,
			"&:after": l,
			"&-start:after": { insetInlineStart: "100%" },
			"&-end:after": { insetInlineEnd: "100%" },
			"&-start-shadow-show:after": u,
			"&-end-shadow-show:after": d
		},
		[`${t}-container`]: {
			position: "relative",
			"&:before, &:after": {
				...l,
				zIndex: `calc(var(--columns-count) * 2 + ${i} + 1)`
			},
			"&:before": { insetInlineStart: 0 },
			"&:after": { insetInlineEnd: 0 }
		},
		[`${t}-has-fix-start ${t}-container:before`]: { display: "none" },
		[`${t}-has-fix-end ${t}-container:after`]: { display: "none" },
		[`${t}-fix-start-shadow-show ${t}-container:before`]: u,
		[`${t}-fix-end-shadow-show ${t}-container:after`]: d
	} };
}, di = (e) => {
	let { componentCls: t, antCls: n, margin: r } = e;
	return { [`${t}-wrapper`]: {
		[`${t}-pagination${n}-pagination`]: { margin: `${D(r)} 0` },
		[`${t}-pagination`]: {
			display: "flex",
			flexWrap: "wrap",
			rowGap: e.paddingXS,
			"> *": { flex: "none" },
			"&-start": { justifyContent: "flex-start" },
			"&-center": { justifyContent: "center" },
			"&-end": { justifyContent: "flex-end" }
		}
	} };
}, fi = (e) => {
	let { componentCls: t, tableRadius: n } = e;
	return { [`${t}-wrapper`]: { [t]: {
		[`${t}-title, ${t}-header`]: { borderRadius: `${D(n)} ${D(n)} 0 0` },
		[`${t}-title + ${t}-container`]: {
			borderStartStartRadius: 0,
			borderStartEndRadius: 0,
			[`${t}-header, table`]: { borderRadius: 0 },
			"table > thead > tr:first-child": { "th:first-child, th:last-child, td:first-child, td:last-child": { borderRadius: 0 } }
		},
		"&-container": {
			borderStartStartRadius: n,
			borderStartEndRadius: n,
			"&::before": { borderStartStartRadius: n },
			"&::after": { borderStartEndRadius: n },
			[`> ${t}-content`]: {
				borderStartStartRadius: n,
				borderStartEndRadius: n
			},
			"table > thead > tr:first-child": {
				"> *:first-child": { borderStartStartRadius: n },
				"> *:last-child": { borderStartEndRadius: n }
			}
		},
		"&-footer": { borderRadius: `0 0 ${D(n)} ${D(n)}` }
	} } };
}, pi = (e) => {
	let { componentCls: t } = e, [n, r] = li(e);
	return { [`${t}-wrapper-rtl`]: {
		direction: "rtl",
		table: { direction: "rtl" },
		[`${t}-row-expand-icon`]: {
			float: "right",
			"&::after": { transform: "rotate(-90deg)" },
			"&-collapsed::before": { transform: "rotate(180deg)" },
			"&-collapsed::after": { transform: "rotate(0deg)" }
		},
		[`${t}-cell-fix`]: {
			"&-start-shadow-show:after": r,
			"&-end-shadow-show:after": n
		},
		[`${t}-container`]: { [`${t}-row-indent`]: { float: "right" } },
		[`${t}-fix-start-shadow-show ${t}-container:before`]: r,
		[`${t}-fix-end-shadow-show ${t}-container:after`]: n
	} };
}, mi = (e) => {
	let { componentCls: t, antCls: n, iconCls: r, fontSizeIcon: i, padding: a, paddingXS: o, headerIconColor: s, headerIconHoverColor: c, tableSelectionColumnWidth: l, tableSelectedRowBg: u, tableSelectedRowHoverBg: d, tableRowHoverBg: f, tablePaddingHorizontal: p, calc: m } = e;
	return { [`${t}-wrapper`]: {
		[`${t}-selection-col`]: {
			width: l,
			[`&${t}-selection-col-with-dropdown`]: { width: m(l).add(i).add(m(a).div(4)).equal() }
		},
		[`${t}-bordered ${t}-selection-col`]: {
			width: m(l).add(m(o).mul(2)).equal(),
			[`&${t}-selection-col-with-dropdown`]: { width: m(l).add(i).add(m(a).div(4)).add(m(o).mul(2)).equal() }
		},
		[`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column,
        ${t}-selection-column
      `]: {
			paddingInlineEnd: e.paddingXS,
			paddingInlineStart: e.paddingXS,
			textAlign: "center",
			[`${n}-radio-wrapper`]: { marginInlineEnd: 0 }
		},
		[`table tr th${t}-selection-column${t}-cell-fix-left`]: { zIndex: m(e.zIndexTableFixed).add(1).equal({ unit: !1 }) },
		[`table tr th${t}-selection-column::after`]: { backgroundColor: "transparent !important" },
		[`${t}-selection`]: {
			position: "relative",
			display: "inline-flex",
			flexDirection: "column"
		},
		[`${t}-selection-extra`]: {
			position: "absolute",
			top: 0,
			zIndex: 1,
			cursor: "pointer",
			transition: `all ${e.motionDurationSlow}`,
			marginInlineStart: "100%",
			paddingInlineStart: D(m(p).div(4).equal()),
			[r]: {
				color: s,
				fontSize: i,
				verticalAlign: "baseline",
				"&:hover": { color: c }
			}
		},
		[`${t}-tbody`]: { [`${t}-row`]: {
			[`&${t}-row-selected`]: { [`> ${t}-cell`]: {
				background: u,
				"&-row-hover": { background: d }
			} },
			[`> ${t}-cell-row-hover`]: { background: f }
		} }
	} };
}, hi = (e) => {
	let { componentCls: t, tableExpandColumnWidth: n, calc: r } = e, i = (e, i, a, o) => ({ [`${t}${t}-${e}`]: {
		fontSize: o,
		[`
        ${t}-title,
        ${t}-footer,
        ${t}-cell,
        ${t}-thead > tr > th,
        ${t}-tbody > tr > th,
        ${t}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: { padding: `${D(i)} ${D(a)}` },
		[`${t}-filter-trigger`]: { marginInlineEnd: D(r(a).div(2).mul(-1).equal()) },
		[`${t}-expanded-row-fixed`]: { margin: `${D(r(i).mul(-1).equal())} ${D(r(a).mul(-1).equal())}` },
		[`${t}-tbody`]: { [`${t}-wrapper:only-child ${t}`]: {
			marginBlock: D(r(i).mul(-1).equal()),
			marginInline: `${D(r(n).sub(a).equal())} ${D(r(a).mul(-1).equal())}`
		} },
		[`${t}-selection-extra`]: { paddingInlineStart: D(r(a).div(4).equal()) }
	} });
	return { [`${t}-wrapper`]: {
		...i("medium", e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle, e.tableFontSizeMiddle),
		...i("small", e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall, e.tableFontSizeSmall)
	} };
}, gi = (e) => {
	let { componentCls: t, marginXXS: n, fontSizeIcon: r, headerIconColor: i, headerIconHoverColor: a } = e;
	return { [`${t}-wrapper`]: {
		[`${t}-thead th${t}-column-has-sorters`]: {
			outline: "none",
			cursor: "pointer",
			transition: `all ${e.motionDurationSlow}, left 0s`,
			"&:hover": {
				background: e.tableHeaderSortHoverBg,
				"&::before": { backgroundColor: "transparent !important" }
			},
			"&:focus-visible": { color: e.colorPrimary },
			[`
          &${t}-cell-fix-left:hover,
          &${t}-cell-fix-right:hover
        `]: { background: e.tableFixedHeaderSortActiveBg }
		},
		[`${t}-thead th${t}-column-sort`]: {
			background: e.tableHeaderSortBg,
			"&::before": { backgroundColor: "transparent !important" }
		},
		[`td${t}-column-sort`]: { background: e.tableBodySortBg },
		[`${t}-column-title`]: {
			position: "relative",
			zIndex: 1,
			flex: 1,
			minWidth: 0
		},
		[`${t}-column-sorters`]: {
			display: "flex",
			flex: "auto",
			alignItems: "center",
			justifyContent: "space-between",
			"&::after": {
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				content: "\"\""
			}
		},
		[`${t}-column-sorters-tooltip-target-sorter`]: { "&::after": { content: "none" } },
		[`${t}-column-sorter`]: {
			marginInlineStart: n,
			color: i,
			fontSize: 0,
			transition: `color ${e.motionDurationSlow}`,
			"&-inner": {
				display: "inline-flex",
				flexDirection: "column",
				alignItems: "center"
			},
			"&-up, &-down": {
				fontSize: r,
				"&.active": { color: e.colorPrimary }
			},
			[`${t}-column-sorter-up + ${t}-column-sorter-down`]: { marginTop: "-0.3em" }
		},
		[`${t}-column-sorters:hover ${t}-column-sorter`]: { color: a }
	} };
}, _i = (e) => {
	let { componentCls: t, opacityLoading: n, tableScrollThumbBg: r, tableScrollThumbBgHover: i, tableScrollThumbSize: a, tableScrollBg: o, stickyScrollBarBorderRadius: s, lineWidth: c, lineType: l, tableBorderColor: u, zIndexTableFixed: d } = e, f = `${D(c)} ${l} ${u}`;
	return { [`${t}-wrapper`]: { [`${t}-sticky`]: {
		"&-holder": {
			position: "sticky",
			zIndex: `calc(var(--columns-count) * 2 + ${d} + 1)`,
			background: e.colorBgContainer
		},
		"&-scroll": {
			position: "sticky",
			bottom: 0,
			height: `${D(a)} !important`,
			zIndex: `calc(var(--columns-count) * 2 + ${d} + 1)`,
			display: "flex",
			alignItems: "center",
			background: o,
			borderTop: f,
			opacity: n,
			"&:hover": { transformOrigin: "center bottom" },
			"&-bar": {
				height: a,
				backgroundColor: r,
				borderRadius: s,
				transition: `all ${e.motionDurationSlow}, transform 0s`,
				position: "absolute",
				bottom: 0,
				"&:hover, &-active": { backgroundColor: i }
			}
		}
	} } };
}, vi = (e) => {
	let { componentCls: t, lineWidth: n, tableBorderColor: r, calc: i } = e, a = `${D(n)} ${e.lineType} ${r}`;
	return { [`${t}-wrapper`]: {
		[`${t}-summary`]: {
			position: "relative",
			zIndex: e.zIndexTableFixed,
			background: e.tableBg,
			"> tr": { "> th, > td": { borderBottom: a } }
		},
		[`div${t}-summary`]: { boxShadow: `0 ${D(i(n).mul(-1).equal())} 0 ${r}` }
	} };
}, yi = (e) => {
	let { componentCls: t, motionDurationMid: n, lineWidth: r, lineType: i, tableBorderColor: a, calc: o } = e, s = `${D(r)} ${i} ${a}`, c = `${t}-expanded-row-cell`;
	return { [`${t}-wrapper`]: {
		[`${t}-tbody-virtual`]: {
			[`${t}-tbody-virtual-holder-inner`]: { [`
            & > ${t}-row,
            & > div:not(${t}-row) > ${t}-row
          `]: {
				display: "flex",
				boxSizing: "border-box",
				width: "100%"
			} },
			[`${t}-cell`]: {
				borderBottom: s,
				transition: `background-color ${n}`
			},
			[`${t}-expanded-row`]: { [`${c}${c}-fixed`]: {
				position: "sticky",
				insetInlineStart: 0,
				overflow: "hidden",
				width: `calc(var(--virtual-width) - ${D(r)})`,
				borderInlineEnd: "none"
			} }
		},
		[`${t}-bordered`]: {
			[`${t}-tbody-virtual`]: {
				"&:after": {
					content: "\"\"",
					insetInline: 0,
					bottom: 0,
					borderBottom: s,
					position: "absolute"
				},
				[`${t}-cell`]: {
					borderInlineEnd: s,
					[`&${t}-cell-fix-right-first:before`]: {
						content: "\"\"",
						position: "absolute",
						insetBlock: 0,
						insetInlineStart: o(r).mul(-1).equal(),
						borderInlineStart: s
					}
				}
			},
			[`&${t}-virtual`]: { [`${t}-placeholder ${t}-cell`]: {
				borderInlineEnd: s,
				borderBottom: s
			} }
		}
	} };
}, bi = (e) => {
	let { componentCls: t, fontWeightStrong: n, tablePaddingVertical: r, tablePaddingHorizontal: i, tableExpandColumnWidth: a, lineWidth: o, lineType: s, tableBorderColor: c, tableFontSize: l, tableBg: u, tableRadius: d, tableHeaderTextColor: f, motionDurationMid: p, tableHeaderBg: m, tableHeaderCellSplitColor: h, tableFooterTextColor: g, tableFooterBg: _, calc: v } = e, y = `${D(o)} ${s} ${c}`;
	return { [`${t}-wrapper`]: {
		clear: "both",
		maxWidth: "100%",
		"--rc-virtual-list-scrollbar-bg": e.tableScrollBg,
		...ye(),
		[t]: {
			...be(e),
			fontSize: l,
			background: u,
			borderRadius: `${D(d)} ${D(d)} 0 0`,
			scrollbarColor: `${e.tableScrollThumbBg} ${e.tableScrollBg}`
		},
		table: {
			width: "100%",
			textAlign: "start",
			borderRadius: `${D(d)} ${D(d)} 0 0`,
			borderCollapse: "separate",
			borderSpacing: 0
		},
		[`
          ${t}-cell,
          ${t}-thead > tr > th,
          ${t}-tbody > tr > th,
          ${t}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
			position: "relative",
			padding: `${D(r)} ${D(i)}`,
			overflowWrap: "break-word"
		},
		[`${t}-title`]: { padding: `${D(r)} ${D(i)}` },
		[`${t}-thead`]: {
			"> tr > th, > tr > td": {
				position: "relative",
				color: f,
				fontWeight: n,
				textAlign: "start",
				background: m,
				borderBottom: y,
				transition: `background-color ${p} ease`,
				"&[colspan]:not([colspan='1'])": { textAlign: "center" },
				[`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]: {
					position: "absolute",
					top: "50%",
					insetInlineEnd: 0,
					width: 1,
					height: "1.6em",
					backgroundColor: h,
					transform: "translateY(-50%)",
					transition: `background-color ${p}`,
					content: "\"\""
				}
			},
			"> tr:not(:last-child) > th[colspan]": { borderBottom: 0 }
		},
		[`${t}-tbody`]: { "> tr": {
			"> th, > td": {
				borderBottom: y,
				transition: ["background-color", "border-color"].map((e) => `${e} ${p}`).join(", "),
				[`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: { [t]: {
					marginBlock: D(v(r).mul(-1).equal()),
					marginInline: `${D(v(a).sub(i).equal())}
                ${D(v(i).mul(-1).equal())}`,
					[`${t}-tbody > tr:last-child > td`]: {
						borderBottomWidth: 0,
						"&:first-child, &:last-child": { borderRadius: 0 }
					}
				} }
			},
			"> th": {
				position: "relative",
				color: f,
				fontWeight: n,
				textAlign: "start",
				background: m,
				borderBottom: y,
				transition: `background-color ${p} ease`
			},
			[`& > ${t}-measure-cell`]: {
				paddingBlock: "0 !important",
				borderBlock: "0 !important",
				[`${t}-measure-cell-content`]: {
					height: 0,
					overflow: "hidden",
					pointerEvents: "none"
				}
			}
		} },
		[`${t}-footer`]: {
			padding: `${D(r)} ${D(i)}`,
			color: g,
			background: _
		}
	} };
}, xi = (e) => {
	let { colorFillAlter: t, colorBgContainer: n, colorTextHeading: r, colorFillSecondary: i, colorFillContent: a, controlItemBgActive: o, controlItemBgActiveHover: s, padding: c, paddingSM: l, paddingXS: u, colorBorderSecondary: d, borderRadiusLG: f, controlHeight: p, colorTextPlaceholder: m, fontSize: h, fontSizeSM: g, lineHeight: _, lineWidth: y, colorIcon: b, colorIconHover: x, opacityLoading: S, controlInteractiveSize: C } = e, w = new v(i).onBackground(n).toHexString(), T = new v(a).onBackground(n).toHexString(), E = new v(t).onBackground(n).toHexString(), D = new v(b), O = new v(x), k = C / 2 - y, A = k * 2 + y * 3;
	return {
		headerBg: E,
		headerColor: r,
		headerSortActiveBg: w,
		headerSortHoverBg: T,
		bodySortBg: E,
		rowHoverBg: E,
		rowSelectedBg: o,
		rowSelectedHoverBg: s,
		rowExpandedBg: t,
		cellPaddingBlock: c,
		cellPaddingInline: c,
		cellPaddingBlockMD: l,
		cellPaddingInlineMD: u,
		cellPaddingBlockSM: u,
		cellPaddingInlineSM: u,
		borderColor: d,
		headerBorderRadius: f,
		footerBg: E,
		footerColor: r,
		cellFontSize: h,
		cellFontSizeMD: h,
		cellFontSizeSM: h,
		headerSplitColor: d,
		fixedHeaderSortActiveBg: w,
		headerFilterHoverBg: a,
		filterDropdownMenuBg: n,
		filterDropdownBg: n,
		expandIconBg: n,
		selectionColumnWidth: p,
		stickyScrollBarBg: m,
		stickyScrollBarBorderRadius: 100,
		expandIconMarginTop: (h * _ - y * 3) / 2 - Math.ceil((g * 1.4 - y * 3) / 2),
		headerIconColor: D.clone().setA(D.a * S).toRgbString(),
		headerIconHoverColor: O.clone().setA(O.a * S).toRgbString(),
		expandIconHalfInner: k,
		expandIconSize: A,
		expandIconScale: C / A
	};
}, Si = 2, Ci = Se("Table", (e) => {
	let { colorTextHeading: t, colorSplit: n, colorBgContainer: r, controlInteractiveSize: i, headerBg: a, headerColor: o, headerSortActiveBg: s, headerSortHoverBg: c, bodySortBg: l, rowHoverBg: u, rowSelectedBg: d, rowSelectedHoverBg: f, rowExpandedBg: p, cellPaddingBlock: m, cellPaddingInline: h, cellPaddingBlockMD: g, cellPaddingInlineMD: _, cellPaddingBlockSM: v, cellPaddingInlineSM: y, borderColor: b, footerBg: x, footerColor: S, headerBorderRadius: C, cellFontSize: w, cellFontSizeMD: T, cellFontSizeSM: E, headerSplitColor: D, fixedHeaderSortActiveBg: O, headerFilterHoverBg: k, filterDropdownBg: A, expandIconBg: j, selectionColumnWidth: M, stickyScrollBarBg: ee, calc: te } = e, N = L(e, {
		tableFontSize: w,
		tableBg: r,
		tableRadius: C,
		tablePaddingVertical: m,
		tablePaddingHorizontal: h,
		tablePaddingVerticalMiddle: g,
		tablePaddingHorizontalMiddle: _,
		tablePaddingVerticalSmall: v,
		tablePaddingHorizontalSmall: y,
		tableBorderColor: b,
		tableHeaderTextColor: o,
		tableHeaderBg: a,
		tableFooterTextColor: S,
		tableFooterBg: x,
		tableHeaderCellSplitColor: D,
		tableHeaderSortBg: s,
		tableHeaderSortHoverBg: c,
		tableBodySortBg: l,
		tableFixedHeaderSortActiveBg: O,
		tableHeaderFilterActiveBg: k,
		tableFilterDropdownBg: A,
		tableRowHoverBg: u,
		tableSelectedRowBg: d,
		tableSelectedRowHoverBg: f,
		zIndexTableFixed: Si,
		tableFontSizeMiddle: T,
		tableFontSizeSmall: E,
		tableSelectionColumnWidth: M,
		tableExpandIconBg: j,
		tableExpandColumnWidth: te(i).add(te(e.padding).mul(2)).equal(),
		tableExpandedRowBg: p,
		tableFilterDropdownWidth: 120,
		tableFilterDropdownHeight: 264,
		tableFilterDropdownSearchWidth: 140,
		tableScrollThumbSize: 8,
		tableScrollThumbBg: ee,
		tableScrollThumbBgHover: t,
		tableScrollBg: n
	});
	return [
		bi(N),
		di(N),
		vi(N),
		gi(N),
		ci(N),
		ii(N),
		fi(N),
		si(N),
		vi(N),
		oi(N),
		mi(N),
		ui(N),
		_i(N),
		ai(N),
		hi(N),
		pi(N),
		yi(N)
	];
}, xi, {
	resetFont: !1,
	unitless: { expandIconScale: !0 }
}), wi = [], Ti = /*#__PURE__*/ X.forwardRef((e, t) => {
	let { prefixCls: n, className: r, rootClassName: i, style: a, classNames: o, styles: s, size: c, bordered: l, dropdownPrefixCls: d, dataSource: f, pagination: p, rowSelection: m, rowKey: g, rowClassName: _, column: v, columns: y, children: b, childrenColumnName: x, onChange: S, getPopupContainer: C, loading: w, expandIcon: T, expandable: E, expandedRowRender: D, expandIconColumnIndex: O, indentSize: k, scroll: A, sortDirections: j, locale: M, showSorterTooltip: ee = { target: "full-header" }, virtual: te } = e;
	xe("Table");
	let N = Qn(X.useMemo(() => y || en(b), [y, b]), v), P = ke(X.useMemo(() => N.some((e) => e.responsive), [N])), F = X.useMemo(() => {
		let e = new Set(Object.keys(P).filter((e) => P[e]));
		return N.filter((t) => !t.responsive || t.responsive.some((t) => e.has(t)));
	}, [N, P]), I = h(e, [
		"className",
		"style",
		"column",
		"columns"
	]), { locale: ne = Te, table: L } = X.useContext(pe), { getPrefixCls: R, direction: z, renderEmpty: V, getPopupContainer: ie, className: ce, style: de, classNames: G, styles: he } = U("table"), _e = me((e) => c === "middle" ? "medium" : c ?? e), ve = {
		...e,
		size: _e,
		bordered: l
	}, [ye, K] = re([G, o], [he, s], { props: ve }, {
		pagination: { _default: "root" },
		header: { _default: "wrapper" },
		body: { _default: "wrapper" }
	}), be = {
		...ne.Table,
		...M
	}, [Se] = ae("global", Te.global), Ce = f || wi, q = R("table", n), we = R("dropdown", d), [, Ee] = fe(), Oe = X.useMemo(() => H(m) ? {
		columnWidth: Ee.Table?.selectionColumnWidth,
		...m
	} : m, [m, Ee.Table?.selectionColumnWidth]), Ae = se(q), [je, J] = Ci(q, Ae), Y = {
		childrenColumnName: x,
		expandIconColumnIndex: O,
		...E,
		expandIcon: E?.expandIcon ?? L?.expandable?.expandIcon
	}, { childrenColumnName: Me = "children" } = Y, Ne = X.useMemo(() => Ce.some((e) => e?.[Me]) ? "nest" : D || E?.expandedRowRender ? "row" : null, [Me, Ce]), Pe = { body: X.useRef(null) }, Fe = Zn(q), Ie = X.useRef(null), Le = X.useRef(null);
	ge(t, () => ({
		...Le.current,
		nativeElement: Ie.current
	}));
	let Re = g || L?.rowKey || "key", ze = A ?? L?.scroll, Be = X.useMemo(() => le(Re) ? Re : (e) => e?.[Re], [Re]), [Ve] = Br(Ce, Me, Be), He = {}, Ue = (e, t, n = !1) => {
		let r = {
			...He,
			...e
		};
		n && (He.resetPagination?.(), r.pagination?.current && (r.pagination.current = 1), p && p.onChange?.(1, r.pagination?.pageSize)), A && A.scrollToFirstRowOnChange !== !1 && Pe.body.current && B(0, { getContainer: () => Pe.body.current }), S?.(r.pagination, r.filters, r.sorter, {
			currentDataSource: Lr(Qr(Ce, r.sorterStates, Me), r.filterStates, Me),
			action: t
		});
	}, [Ke, Je, Ye, Z] = $r({
		prefixCls: q,
		mergedColumns: F,
		onSorterChange: (e, t) => {
			Ue({
				sorter: e,
				sorterStates: t
			}, "sort", !1);
		},
		sortDirections: j || ["ascend", "descend"],
		tableLocale: be,
		showSorterTooltip: ee,
		globalLocale: Se
	}), Xe = X.useMemo(() => Qr(Ce, Je, Me), [
		Me,
		Ce,
		Je
	]);
	He.sorter = Z(), He.sorterStates = Je;
	let [Ze, Qe, $e] = zr({
		prefixCls: q,
		locale: be,
		dropdownPrefixCls: we,
		mergedColumns: F,
		onFilterChange: (e, t) => {
			Ue({
				filters: e,
				filterStates: t
			}, "filter", !0);
		},
		getPopupContainer: C || ie,
		rootClassName: u(i, Ae)
	}), et = Lr(Xe, Qe, Me);
	He.filters = $e, He.filterStates = Qe;
	let [tt] = ti(X.useMemo(() => {
		let e = {};
		return Object.keys($e).forEach((t) => {
			$e[t] !== null && (e[t] = $e[t]);
		}), {
			...Ye,
			filters: e
		};
	}, [Ye, $e])), [Q, nt] = Hr(et.length, (e, t) => {
		Ue({ pagination: {
			...He.pagination,
			current: e,
			pageSize: t
		} }, "paginate");
	}, p);
	He.pagination = p === !1 ? {} : Vr(Q, p), He.resetPagination = nt;
	let $ = X.useMemo(() => {
		if (p === !1 || !Q.pageSize) return et;
		let { current: e = 1, total: t, pageSize: n = 10 } = Q;
		return et.length < t ? et.length > n ? et.slice((e - 1) * n, e * n) : et : et.slice((e - 1) * n, e * n);
	}, [
		!!p,
		et,
		Q?.current,
		Q?.pageSize,
		Q?.total
	]), [rt, it] = Yn({
		prefixCls: q,
		data: et,
		pageData: $,
		getRowKey: Be,
		getRecordByKey: Ve,
		expandType: Ne,
		childrenColumnName: Me,
		locale: be,
		getPopupContainer: C || ie
	}, Oe), at = (e, t, n) => u({ [`${q}-row-selected`]: it.has(Be(e, t)) }, le(_) ? _(e, t, n) : _);
	Y.__PARENT_RENDER_ICON__ = Y.expandIcon, Y.expandIcon = Y.expandIcon || T || Xn(be), Ne === "nest" && Y.expandIconColumnIndex === void 0 ? Y.expandIconColumnIndex = +!!Oe : Y.expandIconColumnIndex > 0 && Oe && --Y.expandIconColumnIndex, ue(Y.indentSize) || (Y.indentSize = ue(k) ? k : 15);
	let ot = X.useCallback((e) => tt(rt(Ze(Ke(e)))), [
		Ke,
		Ze,
		rt
	]), st, ct;
	if (p !== !1 && Q?.total) {
		let e;
		e = Q.size ? Q.size : _e === "small" || _e === "medium" ? "small" : void 0;
		let t = (t = "end") => /*#__PURE__*/ X.createElement(We, {
			...Q,
			classNames: ye.pagination,
			styles: K.pagination,
			className: u(`${q}-pagination ${q}-pagination-${t}`, Q.className),
			size: e
		}), { placement: n, position: r } = Q, i = n ?? r, a = (e) => {
			let t = e.toLowerCase();
			return t.includes("center") ? "center" : t.includes("left") || t.includes("start") ? "start" : "end";
		};
		if (Array.isArray(i)) {
			let [e, n] = ["top", "bottom"].map((e) => i.find((t) => t.includes(e))), r = i.every((e) => `${e}` == "none");
			!e && !n && !r && (ct = t()), e && (st = t(a(e))), n && (ct = t(a(n)));
		} else ct = t();
	}
	let lt = X.useMemo(() => {
		if (typeof w == "boolean") return { spinning: w };
		if (H(w)) return {
			spinning: !0,
			...w
		};
	}, [w]), ut = u(J, Ae, `${q}-wrapper`, ce, { [`${q}-wrapper-rtl`]: z === "rtl" }, r, i, ye.root, je), dt = {
		...K.root,
		...de,
		...a
	}, ft = X.useMemo(() => lt?.spinning && Ce === wi ? null : M?.emptyText === void 0 ? V?.("Table") || /*#__PURE__*/ X.createElement(oe, { componentName: "Table" }) : M.emptyText, [
		lt?.spinning,
		Ce,
		M?.emptyText,
		V
	]), pt = te ? ri : ni, mt = {}, ht = X.useMemo(() => {
		let { fontSize: e, lineHeight: t, lineWidth: n, padding: r, paddingXS: i, paddingSM: a } = Ee, o = Math.floor(e * t);
		switch (_e) {
			case "medium": return a * 2 + o + n;
			case "small": return i * 2 + o + n;
			default: return r * 2 + o + n;
		}
	}, [Ee, _e]);
	return te && (mt.listItemHeight = ht), /*#__PURE__*/ X.createElement("div", {
		ref: Ie,
		className: ut,
		style: dt
	}, /*#__PURE__*/ X.createElement(Ge, {
		spinning: !1,
		...lt
	}, st, /*#__PURE__*/ X.createElement(pt, {
		...mt,
		...I,
		scroll: ze,
		classNames: ye,
		styles: K,
		ref: Le,
		columns: F,
		direction: z,
		expandable: Y,
		prefixCls: q,
		className: u({
			[`${q}-medium`]: _e === "medium",
			[`${q}-small`]: _e === "small",
			[`${q}-bordered`]: l,
			[`${q}-empty`]: Ce.length === 0
		}, J, Ae, je),
		data: $,
		rowKey: Be,
		rowClassName: at,
		emptyText: ft,
		internalHooks: qe,
		internalRefs: Pe,
		transformColumns: ot,
		getContainerWidth: Fe,
		measureRowRender: (e) => /*#__PURE__*/ X.createElement(De.Provider, { value: !0 }, /*#__PURE__*/ X.createElement(W, { getPopupContainer: (e) => e }, e))
	}), ct));
}), Ei = /*#__PURE__*/ X.forwardRef((e, t) => {
	let n = X.useRef(0);
	return n.current += 1, /*#__PURE__*/ X.createElement(Ti, {
		...e,
		ref: t,
		_renderTimes: n.current
	});
});
Ei.SELECTION_COLUMN = Un, Ei.EXPAND_COLUMN = Ke, Ei.SELECTION_ALL = Wn, Ei.SELECTION_INVERT = Gn, Ei.SELECTION_NONE = Kn, Ei.Column = Vn, Ei.ColumnGroup = Hn, Ei.Summary = Tt;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/table/index.js
var Di = /* @__PURE__ */ e({ default: () => Oi }), Oi = Ei;
//#endregion
export { lr as a, cr as i, Cr as n, fr as r, Di as t };
