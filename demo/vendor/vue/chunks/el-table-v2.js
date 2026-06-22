globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, Dt as n, E as r, G as i, I as a, M as o, N as s, O as c, Ot as l, P as u, T as d, Tt as f, U as p, V as m, _ as h, ht as g, j as _, pt as v, ut as y, w as b, yt as x, z as S } from "./vue.runtime.js";
import { a as C } from "./shared/element-plus/utils/objects.js";
import { t as w } from "./shared/element-plus/utils/vue/install.js";
import { t as T } from "./shared/lodash/castArray.js";
import { t as E } from "./shared/lodash/debounce.js";
import { i as D } from "./shared/element-plus/utils/types.js";
import { n as O, r as k } from "./shared/element-plus/utils/vue/props/runtime.js";
import { d as A } from "./shared/vueuse.js";
import { n as j } from "./shared/element-plus/utils/dom/style.js";
import { r as M } from "./shared/element-plus/hooks/use-namespace.js";
import { F as N, P, r as F } from "./shared/element-plus-icons.js";
import { t as I } from "./el-icon.js";
import { t as L } from "./shared/element-plus/utils/typescript.js";
import { n as ee } from "./shared/element-plus/hooks/use-locale.js";
import { a as te, n as R, r as ne } from "./el-virtual-list/utils.js";
import { t as z } from "./el-empty.js";
import { n as re, t as ie } from "./el-virtual-list/hooks/use-grid-wheel.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/constants.mjs
var ae = /* @__PURE__ */ function(e) {
	return e.ASC = "asc", e.DESC = "desc", e;
}({}), oe = /* @__PURE__ */ function(e) {
	return e.LEFT = "left", e.CENTER = "center", e.RIGHT = "right", e;
}({}), B = /* @__PURE__ */ function(e) {
	return e.LEFT = "left", e.RIGHT = "right", e;
}({}), se = {
	asc: "desc",
	desc: "asc"
}, V = Symbol("placeholder"), H = String, U = {
	type: k(Array),
	required: !0
};
k(Object);
var W = { type: k(Array) }, ce = {
	...W,
	required: !0
}, le = String, G = {
	type: k(Array),
	default: () => L([])
}, K = {
	type: Number,
	required: !0
}, ue = {
	type: k([
		String,
		Number,
		Symbol
	]),
	default: "id"
}, q = { type: k(Object) }, J = O({
	class: String,
	columns: U,
	columnsStyles: {
		type: k(Object),
		required: !0
	},
	depth: Number,
	expandColumnKey: le,
	estimatedRowHeight: {
		...R.estimatedRowHeight,
		default: void 0
	},
	isScrolling: Boolean,
	onRowExpand: { type: k(Function) },
	onRowHover: { type: k(Function) },
	onRowHeightChange: { type: k(Function) },
	rowData: {
		type: k(Object),
		required: !0
	},
	rowEventHandlers: { type: k(Object) },
	rowIndex: {
		type: Number,
		required: !0
	},
	rowKey: ue,
	style: { type: k(Object) }
}), Y = {
	type: Number,
	required: !0
}, de = O({
	class: String,
	columns: U,
	fixedHeaderData: { type: k(Array) },
	headerData: {
		type: k(Array),
		required: !0
	},
	headerHeight: {
		type: k([Number, Array]),
		default: 50
	},
	rowWidth: Y,
	rowHeight: {
		type: Number,
		default: 50
	},
	height: Y,
	width: Y
}), fe = O({
	columns: U,
	data: ce,
	fixedData: W,
	estimatedRowHeight: J.estimatedRowHeight,
	width: K,
	height: K,
	headerWidth: K,
	headerHeight: de.headerHeight,
	bodyWidth: K,
	rowHeight: K,
	cache: ne.cache,
	useIsScrolling: Boolean,
	scrollbarAlwaysOn: R.scrollbarAlwaysOn,
	scrollbarStartGap: R.scrollbarStartGap,
	scrollbarEndGap: R.scrollbarEndGap,
	class: H,
	style: q,
	containerStyle: q,
	getRowHeight: {
		type: k(Function),
		required: !0
	},
	rowKey: J.rowKey,
	onRowsRendered: { type: k(Function) },
	onScroll: { type: k(Function) }
}), pe = O({
	cache: fe.cache,
	estimatedRowHeight: J.estimatedRowHeight,
	rowKey: ue,
	headerClass: { type: k([String, Function]) },
	headerProps: { type: k([Object, Function]) },
	headerCellProps: { type: k([Object, Function]) },
	headerHeight: de.headerHeight,
	footerHeight: {
		type: Number,
		default: 0
	},
	rowClass: { type: k([String, Function]) },
	rowProps: { type: k([Object, Function]) },
	rowHeight: {
		type: Number,
		default: 50
	},
	cellProps: { type: k([Object, Function]) },
	columns: U,
	data: ce,
	dataGetter: { type: k(Function) },
	fixedData: W,
	expandColumnKey: J.expandColumnKey,
	expandedRowKeys: G,
	defaultExpandedRowKeys: G,
	class: H,
	fixed: Boolean,
	style: { type: k(Object) },
	width: K,
	height: K,
	maxHeight: Number,
	useIsScrolling: Boolean,
	indentSize: {
		type: Number,
		default: 12
	},
	iconSize: {
		type: Number,
		default: 12
	},
	hScrollbarSize: R.hScrollbarSize,
	vScrollbarSize: R.vScrollbarSize,
	scrollbarAlwaysOn: te.alwaysOn,
	sortBy: {
		type: k(Object),
		default: () => ({})
	},
	sortState: {
		type: k(Object),
		default: void 0
	},
	onColumnSort: { type: k(Function) },
	onExpandedRowsChange: { type: k(Function) },
	onEndReached: { type: k(Function) },
	onRowExpand: J.onRowExpand,
	onScroll: fe.onScroll,
	onRowsRendered: fe.onRowsRendered,
	rowEventHandlers: J.rowEventHandlers
}), me = (e, t, n) => {
	let r = {
		flexGrow: 0,
		flexShrink: 0,
		...n ? {} : {
			flexGrow: e.flexGrow ?? 0,
			flexShrink: e.flexShrink ?? 1
		}
	}, i = {
		...e.style ?? {},
		...r,
		flexBasis: "auto",
		width: e.width
	};
	return t || (e.maxWidth && (i.maxWidth = e.maxWidth), e.minWidth && (i.minWidth = e.minWidth)), i;
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/composables/use-columns.mjs
function X(e, t, n) {
	let r = h(() => x(t).map((e, t) => ({
		...e,
		key: e.key ?? e.dataKey ?? t
	}))), i = h(() => x(r).filter((e) => !e.hidden)), a = h(() => x(i).filter((e) => e.fixed === "left" || e.fixed === !0)), o = h(() => x(i).filter((e) => e.fixed === "right")), s = h(() => x(i).filter((e) => !e.fixed)), c = h(() => {
		let e = [];
		return x(a).forEach((t) => {
			e.push({
				...t,
				placeholderSign: V
			});
		}), x(s).forEach((t) => {
			e.push(t);
		}), x(o).forEach((t) => {
			e.push({
				...t,
				placeholderSign: V
			});
		}), e;
	}), u = h(() => x(a).length || x(o).length), d = h(() => x(r).reduce((t, r) => (t[r.key] = me(r, x(n), e.fixed), t), {})), f = h(() => x(i).reduce((e, t) => e + t.width, 0)), p = (e) => x(r).find((t) => t.key === e), m = (e) => x(d)[e], g = (e, t) => {
		e.width = t;
	};
	function _(t) {
		let { key: n } = t.currentTarget.dataset;
		if (!n) return;
		let { sortState: r, sortBy: i } = e, a = "asc";
		a = l(r) ? se[r[n]] : se[i.order], e.onColumnSort?.({
			column: p(n),
			key: n,
			order: a
		});
	}
	return {
		columns: r,
		columnsStyles: d,
		columnsTotalWidth: f,
		fixedColumnsOnLeft: a,
		fixedColumnsOnRight: o,
		hasFixedColumns: u,
		mainColumns: c,
		normalColumns: s,
		visibleColumns: i,
		getColumn: p,
		getColumnStyle: m,
		updateColumnWidth: g,
		onColumnSorted: _
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/composables/use-scrollbar.mjs
var he = (t, { mainTableRef: n, leftTableRef: r, rightTableRef: i, onMaybeEndReached: a }) => {
	let o = y({
		scrollLeft: 0,
		scrollTop: 0
	});
	function s(e) {
		let { scrollTop: t } = e;
		n.value?.scrollTo(e), r.value?.scrollToTop(t), i.value?.scrollToTop(t);
	}
	function c(e) {
		o.value = e, s(e);
	}
	function l(e) {
		o.value.scrollTop = e, s(x(o));
	}
	function u(e) {
		o.value.scrollLeft = e, n.value?.scrollTo?.(x(o));
	}
	function d(e) {
		c(e), t.onScroll?.(e);
	}
	function f({ scrollTop: e }) {
		let { scrollTop: t } = x(o);
		e !== t && l(e);
	}
	function p(e, t = "auto") {
		n.value?.scrollToRow(e, t);
	}
	return e(() => x(o).scrollTop, (e, t) => {
		e > t && a();
	}), {
		scrollPos: o,
		scrollTo: c,
		scrollToLeft: u,
		scrollToTop: l,
		scrollToRow: p,
		onScroll: d,
		onVerticalScroll: f
	};
}, ge = (e, { mainTableRef: t, leftTableRef: n, rightTableRef: i, tableInstance: a, ns: o, isScrolling: c }) => {
	let l = r(), { emit: u } = l, d = v(!1), f = y(e.defaultExpandedRowKeys || []), p = y(-1), m = v(null), g = y({}), _ = y({}), b = v({}), S = v({}), C = v({}), w = h(() => D(e.estimatedRowHeight));
	function T(t) {
		e.onRowsRendered?.(t), t.rowCacheEnd > x(p) && (p.value = t.rowCacheEnd);
	}
	function O({ hovered: e, rowKey: t }) {
		c.value || a.vnode.el.querySelectorAll(`[rowkey="${String(t)}"]`).forEach((t) => {
			e ? t.classList.add(o.is("hovered")) : t.classList.remove(o.is("hovered"));
		});
	}
	function k({ expanded: t, rowData: n, rowIndex: r, rowKey: i }) {
		let c = [...x(f)], l = c.indexOf(i);
		t ? l === -1 && c.push(i) : l > -1 && c.splice(l, 1), f.value = c, u("update:expandedRowKeys", c), e.onRowExpand?.({
			expanded: t,
			rowData: n,
			rowIndex: r,
			rowKey: i
		}), e.onExpandedRowsChange?.(c), a.vnode.el.querySelector(`.${o.is("hovered")}[rowkey="${String(i)}"]`) && s(() => O({
			hovered: !0,
			rowKey: i
		}));
	}
	let A = E(() => {
		d.value = !0, g.value = {
			...x(g),
			...x(_)
		}, j(x(m), !1), _.value = {}, m.value = null, t.value?.forceUpdate(), n.value?.forceUpdate(), i.value?.forceUpdate(), l.proxy?.$forceUpdate(), d.value = !1;
	}, 0);
	function j(e, r = !1) {
		x(w) && [
			t,
			n,
			i
		].forEach((t) => {
			let n = x(t);
			n && n.resetAfterRowIndex(e, r);
		});
	}
	function M(e, t, n) {
		let r = x(m);
		(r === null || r > n) && (m.value = n), _.value[e] = t;
	}
	function N({ rowKey: e, height: t, rowIndex: n }, r) {
		r ? r === "right" ? C.value[e] = t : b.value[e] = t : S.value[e] = t;
		let i = Math.max(...[
			b,
			C,
			S
		].map((t) => t.value[e] || 0));
		x(g)[e] !== i && (M(e, i, n), A());
	}
	return {
		expandedRowKeys: f,
		lastRenderedRowIndex: p,
		isDynamic: w,
		isResetting: d,
		rowHeights: g,
		resetAfterIndex: j,
		onRowExpanded: k,
		onRowHovered: O,
		onRowsRendered: T,
		onRowHeightChange: N
	};
}, _e = (t, { expandedRowKeys: n, lastRenderedRowIndex: r, resetAfterIndex: i }) => {
	let a = y({}), o = h(() => {
		let e = {}, { data: r, rowKey: i } = t, o = x(n);
		if (!o || !o.length) return r;
		let s = [], c = /* @__PURE__ */ new Set();
		o.forEach((e) => c.add(e));
		let l = r.slice();
		for (l.forEach((t) => e[t[i]] = 0); l.length > 0;) {
			let t = l.shift();
			s.push(t), c.has(t[i]) && f(t.children) && t.children.length > 0 && (l = [...t.children, ...l], t.children.forEach((n) => e[n[i]] = e[t[i]] + 1));
		}
		return a.value = e, s;
	}), s = h(() => {
		let { data: e, expandColumnKey: n } = t;
		return n ? x(o) : e;
	});
	return e(s, (e, t) => {
		e !== t && (r.value = -1, i(0, !0));
	}), {
		data: s,
		depthMap: a
	};
}, ve = (e, t) => e + t, Z = (e) => f(e) ? e.reduce(ve, 0) : e, Q = (e, t, r = {}) => n(e) ? e(t) : e ?? r, $ = (e) => ([
	"width",
	"maxWidth",
	"minWidth",
	"height"
].forEach((t) => {
	e[t] = j(e[t]);
}), e), ye = (e) => _(e) ? (t) => c(e, t) : e, be = (e, { columnsTotalWidth: t, rowsHeight: n, fixedColumnsOnLeft: r, fixedColumnsOnRight: i }) => {
	let a = h(() => {
		let { fixed: n, width: r, vScrollbarSize: i } = e, a = r - i;
		return n ? Math.max(Math.round(x(t)), a) : a;
	}), o = h(() => {
		let { height: t = 0, maxHeight: r = 0, footerHeight: i, hScrollbarSize: a } = e;
		if (r > 0) {
			let e = x(f), t = x(n), o = x(d) + e + t + a;
			return Math.min(o, r - i);
		}
		return t - i;
	}), s = h(() => {
		let { maxHeight: t } = e, r = x(o);
		if (D(t) && t > 0) return r;
		let i = x(n) + x(d) + x(f);
		return Math.min(r, i);
	}), c = (e) => e.width, l = h(() => Z(x(r).map(c))), u = h(() => Z(x(i).map(c))), d = h(() => Z(e.headerHeight)), f = h(() => (e.fixedData?.length || 0) * e.rowHeight), p = h(() => x(o) - x(d) - x(f)), m = h(() => {
		let { style: t = {}, height: n, width: r } = e;
		return $({
			...t,
			height: n,
			width: r
		});
	});
	return {
		bodyWidth: a,
		fixedTableHeight: s,
		mainTableHeight: o,
		leftTableWidth: l,
		rightTableWidth: u,
		windowHeight: p,
		footerHeight: h(() => $({ height: e.footerHeight })),
		emptyStyle: h(() => ({
			top: j(x(d)),
			bottom: j(e.footerHeight),
			width: j(e.width)
		})),
		rootStyle: m,
		headerHeight: d
	};
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/use-table.mjs
function xe(t) {
	let n = y(), i = y(), a = y(), { columns: o, columnsStyles: s, columnsTotalWidth: c, fixedColumnsOnLeft: l, fixedColumnsOnRight: u, hasFixedColumns: d, mainColumns: p, onColumnSorted: m } = X(t, g(t, "columns"), g(t, "fixed")), { scrollTo: _, scrollToLeft: b, scrollToTop: S, scrollToRow: C, onScroll: w, onVerticalScroll: T, scrollPos: E } = he(t, {
		mainTableRef: n,
		leftTableRef: i,
		rightTableRef: a,
		onMaybeEndReached: J
	}), O = M("table-v2"), k = r(), A = v(!1), { expandedRowKeys: j, lastRenderedRowIndex: N, isDynamic: P, isResetting: F, rowHeights: I, resetAfterIndex: L, onRowExpanded: ee, onRowHeightChange: te, onRowHovered: R, onRowsRendered: ne } = ge(t, {
		mainTableRef: n,
		leftTableRef: i,
		rightTableRef: a,
		tableInstance: k,
		ns: O,
		isScrolling: A
	}), { data: z, depthMap: re } = _e(t, {
		expandedRowKeys: j,
		lastRenderedRowIndex: N,
		resetAfterIndex: L
	}), ie = h(() => {
		let { estimatedRowHeight: e, rowHeight: n } = t, r = x(z);
		return D(e) ? Object.values(x(I)).reduce((e, t) => e + t, 0) : r.length * n;
	}), { bodyWidth: ae, fixedTableHeight: oe, mainTableHeight: B, leftTableWidth: se, rightTableWidth: V, windowHeight: H, footerHeight: U, emptyStyle: W, rootStyle: ce, headerHeight: le } = be(t, {
		columnsTotalWidth: c,
		fixedColumnsOnLeft: l,
		fixedColumnsOnRight: u,
		rowsHeight: ie
	}), G = y(), K = h(() => {
		let e = x(z).length === 0;
		return f(t.fixedData) ? t.fixedData.length === 0 && e : e;
	});
	function ue(e) {
		let { estimatedRowHeight: n, rowHeight: r, rowKey: i } = t;
		return n ? x(I)[x(z)[e][i]] || n : r;
	}
	let q = y(!1);
	function J() {
		let { onEndReached: e } = t;
		if (!e) return;
		let { scrollTop: n } = x(E), r = x(ie), i = r - (n + x(H)) + t.hScrollbarSize;
		!q.value && x(N) >= 0 && r <= n + x(B) - x(le) ? (q.value = !0, e(i)) : q.value = !1;
	}
	return e(() => x(ie), () => q.value = !1), e(() => t.expandedRowKeys, (e) => j.value = e, { deep: !0 }), {
		columns: o,
		containerRef: G,
		mainTableRef: n,
		leftTableRef: i,
		rightTableRef: a,
		isDynamic: P,
		isResetting: F,
		isScrolling: A,
		hasFixedColumns: d,
		columnsStyles: s,
		columnsTotalWidth: c,
		data: z,
		expandedRowKeys: j,
		depthMap: re,
		fixedColumnsOnLeft: l,
		fixedColumnsOnRight: u,
		mainColumns: p,
		bodyWidth: ae,
		emptyStyle: W,
		rootStyle: ce,
		footerHeight: U,
		mainTableHeight: B,
		fixedTableHeight: oe,
		leftTableWidth: se,
		rightTableWidth: V,
		showEmpty: K,
		getRowHeight: ue,
		onColumnSorted: m,
		onRowHovered: R,
		onRowExpanded: ee,
		onRowsRendered: ne,
		onRowHeightChange: te,
		scrollTo: _,
		scrollToLeft: b,
		scrollToTop: S,
		scrollToRow: C,
		onScroll: w,
		onVerticalScroll: T
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/tokens.mjs
var Se = Symbol("tableV2"), Ce = "tableV2GridScrollLeft", we = /* @__PURE__ */ d({
	name: "ElTableV2Header",
	props: de,
	setup(e, { slots: n, expose: r }) {
		let i = M("table-v2"), a = t(Ce), o = y(), c = h(() => $({
			width: e.width,
			height: e.height
		})), l = h(() => $({
			width: e.rowWidth,
			height: e.height
		})), u = h(() => T(x(e.headerHeight))), d = (e) => {
			let t = x(o);
			s(() => {
				t?.scroll && t.scroll({ left: e });
			});
		}, f = () => {
			let t = i.e("fixed-header-row"), { columns: r, fixedHeaderData: a, rowHeight: o } = e;
			return a?.map((e, i) => {
				let a = $({
					height: o,
					width: "100%"
				});
				return n.fixed?.({
					class: t,
					columns: r,
					rowData: e,
					rowIndex: -(i + 1),
					style: a
				});
			});
		}, p = () => {
			let t = i.e("dynamic-header-row"), { columns: r } = e;
			return x(u).map((e, i) => {
				let a = $({
					width: "100%",
					height: e
				});
				return n.dynamic?.({
					class: t,
					columns: r,
					headerIndex: i,
					style: a
				});
			});
		};
		return m(() => {
			a?.value && d(a.value);
		}), r({ scrollToLeft: d }), () => {
			if (!(e.height <= 0)) return b("div", {
				ref: o,
				class: e.class,
				style: x(c),
				role: "rowgroup"
			}, [b("div", {
				style: x(l),
				class: i.e("header")
			}, [p(), f()])]);
		};
	}
}), Te = "ElTableV2Grid", Ee = (t) => {
	let n = y(), r = y(), i = y(0), a = h(() => {
		let { data: e, rowHeight: n, estimatedRowHeight: r } = t;
		if (!r) return e.length * n;
	}), o = h(() => {
		let { fixedData: e, rowHeight: n } = t;
		return (e?.length || 0) * n;
	}), s = h(() => Z(t.headerHeight)), c = h(() => {
		let { height: e } = t;
		return Math.max(0, e - x(s) - x(o));
	}), u = h(() => x(s) + x(o) > 0), d = ({ data: e, rowIndex: n }) => e[n][t.rowKey];
	function f({ rowCacheStart: e, rowCacheEnd: n, rowVisibleStart: r, rowVisibleEnd: i }) {
		t.onRowsRendered?.({
			rowCacheStart: e,
			rowCacheEnd: n,
			rowVisibleStart: r,
			rowVisibleEnd: i
		});
	}
	function p(e, t) {
		r.value?.resetAfterRowIndex(e, t);
	}
	function m(e, t) {
		let a = x(n), o = x(r);
		l(e) ? (a?.scrollToLeft(e.scrollLeft), i.value = e.scrollLeft, o?.scrollTo(e)) : (a?.scrollToLeft(e), i.value = e, o?.scrollTo({
			scrollLeft: e,
			scrollTop: t
		}));
	}
	function g(e) {
		x(r)?.scrollTo({ scrollTop: e });
	}
	function _(e, t) {
		let n = x(r);
		if (!n) return;
		let a = i.value;
		n.scrollToItem(e, 0, t), a && m({ scrollLeft: a });
	}
	function v() {
		x(r)?.$forceUpdate(), x(n)?.$forceUpdate();
	}
	return e(() => t.bodyWidth, () => {
		D(t.estimatedRowHeight) && r.value?.resetAfter({ columnIndex: 0 }, !1);
	}), {
		bodyRef: r,
		forceUpdate: v,
		fixedRowHeight: o,
		gridHeight: c,
		hasHeader: u,
		headerHeight: s,
		headerRef: n,
		totalHeight: a,
		itemKey: d,
		onItemRendered: f,
		resetAfterRowIndex: p,
		scrollTo: m,
		scrollToTop: g,
		scrollToRow: _,
		scrollLeft: i
	};
}, De = /* @__PURE__ */ d({
	name: Te,
	props: fe,
	setup(e, { slots: n, expose: r }) {
		let { ns: i } = t(Se), { bodyRef: a, fixedRowHeight: o, gridHeight: c, hasHeader: l, headerRef: d, headerHeight: f, totalHeight: m, forceUpdate: h, itemKey: g, onItemRendered: _, resetAfterRowIndex: v, scrollTo: y, scrollToTop: S, scrollToRow: C, scrollLeft: w } = Ee(e);
		p(Ce, w), u(async () => {
			await s();
			let e = a.value?.states.scrollTop;
			e && S(Math.round(e) + 1);
		}), r({
			forceUpdate: h,
			totalHeight: m,
			scrollTo: y,
			scrollToTop: S,
			scrollToRow: C,
			resetAfterRowIndex: v
		});
		let T = () => e.bodyWidth;
		return () => {
			let { cache: t, columns: r, data: s, fixedData: u, useIsScrolling: p, scrollbarAlwaysOn: m, scrollbarEndGap: h, scrollbarStartGap: v, style: y, rowHeight: S, bodyWidth: C, estimatedRowHeight: w, headerWidth: E, height: O, width: k, getRowHeight: A, onScroll: j } = e, M = D(w), N = M ? ie : re, P = x(f);
			return b("div", {
				role: "table",
				class: [i.e("table"), e.class],
				style: y
			}, [b(N, {
				ref: a,
				data: s,
				useIsScrolling: p,
				itemKey: g,
				columnCache: 0,
				columnWidth: M ? T : C,
				totalColumn: 1,
				totalRow: s.length,
				rowCache: t,
				rowHeight: M ? A : S,
				width: k,
				height: x(c),
				class: i.e("body"),
				role: "rowgroup",
				scrollbarStartGap: v,
				scrollbarEndGap: h,
				scrollbarAlwaysOn: m,
				onScroll: j,
				onItemRendered: _,
				perfMode: !1
			}, { default: (e) => {
				let t = s[e.rowIndex];
				return n.row?.({
					...e,
					columns: r,
					rowData: t
				});
			} }), x(l) && b(we, {
				ref: d,
				class: i.e("header-wrapper"),
				columns: r,
				headerData: s,
				headerHeight: e.headerHeight,
				fixedHeaderData: u,
				rowWidth: E,
				rowHeight: S,
				width: k,
				height: Math.min(P + x(o), O)
			}, {
				dynamic: n.header,
				fixed: n.row
			})]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/renderers/main-table.mjs
function Oe(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_(e);
}
var ke = (e, { slots: t }) => {
	let { mainTableRef: n, ...r } = e;
	return b(De, o({ ref: n }, r), Oe(t) ? t : { default: () => [t] });
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/renderers/left-table.mjs
function Ae(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_(e);
}
var je = (e, { slots: t }) => {
	if (!e.columns.length) return;
	let { leftTableRef: n, ...r } = e;
	return b(De, o({ ref: n }, r), Ae(t) ? t : { default: () => [t] });
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/renderers/right-table.mjs
function Me(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_(e);
}
var Ne = (e, { slots: t }) => {
	if (!e.columns.length) return;
	let { rightTableRef: n, ...r } = e;
	return b(De, o({ ref: n }, r), Me(t) ? t : { default: () => [t] });
}, Pe = (e) => {
	let { isScrolling: r } = t(Se), i = y(!1), a = y(), o = h(() => D(e.estimatedRowHeight) && e.rowIndex >= 0), c = (t = !1) => {
		let n = x(a);
		if (!n) return;
		let { columns: r, onRowHeightChange: o, rowKey: c, rowIndex: l, style: u } = e, { height: d } = n.getBoundingClientRect();
		i.value = !0, s(() => {
			if (t || d !== Number.parseInt(u.height)) {
				let e = r[0], t = e?.placeholderSign === V;
				o?.({
					rowKey: c,
					height: d,
					rowIndex: l
				}, e && !t && e.fixed);
			}
		});
	}, l = h(() => {
		let { rowData: t, rowIndex: r, rowKey: i, onRowHover: a } = e, o = e.rowEventHandlers || {}, s = {};
		return Object.entries(o).forEach(([e, a]) => {
			n(a) && (s[e] = (e) => {
				a({
					event: e,
					rowData: t,
					rowIndex: r,
					rowKey: i
				});
			});
		}), a && [{
			name: "onMouseleave",
			hovered: !1
		}, {
			name: "onMouseenter",
			hovered: !0
		}].forEach(({ name: e, hovered: n }) => {
			let o = s[e];
			s[e] = (e) => {
				a({
					event: e,
					hovered: n,
					rowData: t,
					rowIndex: r,
					rowKey: i
				}), o?.(e);
			};
		}), s;
	});
	return S(() => {
		x(o) && c(!0);
	}), {
		isScrolling: r,
		measurable: o,
		measured: i,
		rowRef: a,
		eventHandlers: l,
		onExpand: (t) => {
			let { onRowExpand: n, rowData: r, rowIndex: i, rowKey: a } = e;
			n?.({
				expanded: t,
				rowData: r,
				rowIndex: i,
				rowKey: a
			});
		}
	};
}, Fe = /* @__PURE__ */ d({
	name: "ElTableV2TableRow",
	props: J,
	setup(e, { expose: t, slots: n, attrs: r }) {
		let { eventHandlers: i, isScrolling: a, measurable: s, measured: c, rowRef: l, onExpand: u } = Pe(e);
		return t({ onExpand: u }), () => {
			let { columns: t, columnsStyles: d, expandColumnKey: p, depth: m, rowData: h, rowIndex: g, style: _ } = e, v = t.map((e, r) => {
				let i = f(h.children) && h.children.length > 0 && e.key === p;
				return n.cell({
					column: e,
					columns: t,
					columnIndex: r,
					depth: m,
					style: d[e.key],
					rowData: h,
					rowIndex: g,
					isScrolling: x(a),
					expandIconProps: i ? {
						rowData: h,
						rowIndex: g,
						onExpand: u
					} : void 0
				});
			});
			if (n.row && (v = n.row({
				cells: v.map((e) => f(e) && e.length === 1 ? e[0] : e),
				style: _,
				columns: t,
				depth: m,
				rowData: h,
				rowIndex: g,
				isScrolling: x(a)
			})), x(s)) {
				let { height: t, ...n } = _ || {}, a = x(c);
				return b("div", o({
					ref: l,
					class: e.class,
					style: a ? _ : n,
					role: "row"
				}, r, x(i)), [v]);
			}
			return b("div", o(r, {
				ref: l,
				class: e.class,
				style: _,
				role: "row"
			}, x(i)), [v]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/renderers/row.mjs
function Ie(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_(e);
}
var Le = (e, { slots: t }) => {
	let { columns: n, columnsStyles: r, depthMap: i, expandColumnKey: a, expandedRowKeys: s, estimatedRowHeight: c, hasFixedColumns: l, rowData: u, rowIndex: d, style: f, isScrolling: p, rowProps: m, rowClass: h, rowKey: g, rowEventHandlers: _, ns: v, onRowHovered: y, onRowExpanded: x } = e, S = Q(h, {
		columns: n,
		rowData: u,
		rowIndex: d
	}, ""), C = Q(m, {
		columns: n,
		rowData: u,
		rowIndex: d
	}), w = u[g], T = i[w] || 0, E = !!a, D = d < 0, O = [
		v.e("row"),
		S,
		v.is("expanded", E && s.includes(w)),
		v.is("fixed", !T && D),
		v.is("customized", !!t.row),
		{ [v.e(`row-depth-${T}`)]: E && d >= 0 }
	], k = l ? y : void 0;
	return b(Fe, o({
		...C,
		columns: n,
		columnsStyles: r,
		class: O,
		depth: T,
		expandColumnKey: a,
		estimatedRowHeight: D ? void 0 : c,
		isScrolling: p,
		rowIndex: d,
		rowData: u,
		rowKey: w,
		rowEventHandlers: _,
		style: f
	}, {
		onRowExpand: x,
		onMouseenter: (e) => {
			k?.({
				hovered: !0,
				rowKey: w,
				event: e,
				rowData: u,
				rowIndex: d
			});
		},
		onMouseleave: (e) => {
			k?.({
				hovered: !1,
				rowKey: w,
				event: e,
				rowData: u,
				rowIndex: d
			});
		},
		rowkey: w
	}), Ie(t) ? t : { default: () => [t] });
}, Re = (e, { slots: t }) => {
	let { cellData: n, style: r } = e, a = n?.toString?.() || "", o = i(t, "default", e, () => [a]);
	return b("div", {
		class: e.class,
		title: a,
		style: r
	}, [o]);
};
Re.displayName = "ElTableV2Cell", Re.inheritAttrs = !1;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/components/expand-icon.mjs
var ze = (e) => {
	let { expanded: t, expandable: n, onExpand: r, style: i, size: a, ariaLabel: s } = e;
	return b("button", o({
		onClick: n ? () => r(!t) : void 0,
		ariaLabel: s,
		ariaExpanded: t,
		class: e.class
	}, { type: "button" }), [b(I, {
		size: a,
		style: i
	}, { default: () => [b(F, null, null)] })]);
};
ze.inheritAttrs = !1;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/renderers/cell.mjs
var Be = ({ columns: e, column: t, columnIndex: r, depth: a, expandIconProps: s, isScrolling: c, rowData: u, rowIndex: d, style: f, expandedRowKeys: p, ns: m, t: h, cellProps: g, expandColumnKey: _, indentSize: v, iconSize: y, rowKey: x }, { slots: S }) => {
	let w = $(f);
	if (t.placeholderSign === V) return b("div", {
		class: m.em("row-cell", "placeholder"),
		style: w
	}, null);
	let { cellRenderer: T, dataKey: E, dataGetter: D } = t, O = n(D) ? D({
		columns: e,
		column: t,
		columnIndex: r,
		rowData: u,
		rowIndex: d
	}) : C(u, E ?? ""), k = Q(g, {
		cellData: O,
		columns: e,
		column: t,
		columnIndex: r,
		rowIndex: d,
		rowData: u
	}), A = {
		class: m.e("cell-text"),
		columns: e,
		column: t,
		columnIndex: r,
		cellData: O,
		isScrolling: c,
		rowData: u,
		rowIndex: d
	}, j = ye(T), M = j ? j(A) : i(S, "default", A, () => [b(Re, A, null)]), N = [
		m.e("row-cell"),
		t.class,
		t.align === "center" && m.is("align-center"),
		t.align === "right" && m.is("align-right")
	], P = d >= 0 && _ && t.key === _, F = d >= 0 && p.includes(u[x]), I, L = `margin-inline-start: ${a * v}px;`;
	return P && (I = l(s) ? b(ze, o(s, {
		class: [m.e("expand-icon"), m.is("expanded", F)],
		size: y,
		expanded: F,
		ariaLabel: h(F ? "el.table.collapseRowLabel" : "el.table.expandRowLabel"),
		style: L,
		expandable: !0
	}), null) : b("div", { style: [L, `width: ${y}px; height: ${y}px;`].join(" ") }, null)), b("div", o({
		class: N,
		style: w
	}, k, { role: "cell" }), [I, M]);
};
Be.inheritAttrs = !1;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/components/header-row.mjs
var Ve = /* @__PURE__ */ d({
	name: "ElTableV2HeaderRow",
	props: O({
		class: String,
		columns: U,
		columnsStyles: {
			type: k(Object),
			required: !0
		},
		headerIndex: Number,
		style: { type: k(Object) }
	}),
	setup(e, { slots: t }) {
		return () => {
			let { columns: n, columnsStyles: r, headerIndex: i, style: a } = e, o = n.map((e, a) => t.cell({
				columns: n,
				column: e,
				columnIndex: a,
				headerIndex: i,
				style: r[e.key]
			}));
			return t.header && (o = t.header({
				cells: o.map((e) => f(e) && e.length === 1 ? e[0] : e),
				columns: n,
				headerIndex: i
			})), b("div", {
				class: e.class,
				style: a,
				role: "row"
			}, [o]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/renderers/header.mjs
function He(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_(e);
}
var Ue = ({ columns: e, columnsStyles: t, headerIndex: n, style: r, headerClass: i, headerProps: a, ns: o }, { slots: s }) => {
	let c = {
		columns: e,
		headerIndex: n
	}, l = [
		o.e("header-row"),
		Q(i, c, ""),
		o.is("customized", !!s.header)
	];
	return b(Ve, {
		...Q(a, c),
		columnsStyles: t,
		class: l,
		columns: e,
		headerIndex: n,
		style: r
	}, He(s) ? s : { default: () => [s] });
}, We = (e, { slots: t }) => i(t, "default", e, () => [b("div", {
	class: e.class,
	title: e.column?.title
}, [e.column?.title])]);
We.displayName = "ElTableV2HeaderCell", We.inheritAttrs = !1;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/components/sort-icon.mjs
var Ge = (e) => {
	let { sortOrder: t } = e;
	return b("button", {
		type: "button",
		"aria-label": e.ariaLabel,
		class: e.class
	}, [b(I, { size: 14 }, { default: () => [b(t === "asc" ? N : P, null, null)] })]);
}, Ke = (e, { slots: t }) => {
	let { column: n, ns: r, t: a, style: s, onColumnSorted: c } = e, l = $(s);
	if (n.placeholderSign === V) return b("div", {
		class: r.em("header-row-cell", "placeholder"),
		style: l
	}, null);
	let { headerCellRenderer: u, headerClass: d, sortable: f } = n, p = {
		...e,
		class: r.e("header-cell-text")
	}, m = ye(u), h = m ? m(p) : i(t, "default", p, () => [b(We, p, null)]), { sortBy: g, sortState: _, headerCellProps: v } = e, y, x, S;
	if (_) {
		let e = _[n.key];
		y = !!se[e], x = y ? e : "asc";
	} else y = n.key === g.key, x = y ? g.order : "asc";
	S = x === "asc" ? "ascending" : x === "desc" ? "descending" : void 0;
	let C = [
		r.e("header-cell"),
		Q(d, e, ""),
		n.align === "center" && r.is("align-center"),
		n.align === "right" && r.is("align-right"),
		f && r.is("sortable")
	];
	return b("div", o({
		...Q(v, e),
		onClick: n.sortable ? c : void 0,
		ariaSort: f ? S : void 0,
		class: C,
		style: l,
		"data-key": n.key
	}, { role: "columnheader" }), [h, f && b(Ge, {
		class: [r.e("sort-icon"), y && r.is("sorting")],
		sortOrder: x,
		ariaLabel: a("el.table.sortLabel", { column: n.title || "" })
	}, null)]);
}, qe = (e, { slots: t }) => b("div", {
	class: e.class,
	style: e.style
}, [t.default?.()]);
qe.displayName = "ElTableV2Footer";
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/renderers/empty.mjs
var Je = (e, { slots: t }) => {
	let n = i(t, "default", {}, () => [b(z, null, null)]);
	return b("div", {
		class: e.class,
		style: e.style
	}, [n]);
};
Je.displayName = "ElTableV2Empty";
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/renderers/overlay.mjs
var Ye = (e, { slots: t }) => b("div", {
	class: e.class,
	style: e.style
}, [t.default?.()]);
Ye.displayName = "ElTableV2Overlay";
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table-v2/src/table-v2.mjs
function Xe(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_(e);
}
var Ze = /* @__PURE__ */ d({
	name: "ElTableV2",
	props: pe,
	slots: Object,
	setup(e, { slots: t, expose: n }) {
		let r = M("table-v2"), { t: i } = ee(), { columnsStyles: a, fixedColumnsOnLeft: s, fixedColumnsOnRight: c, mainColumns: l, mainTableHeight: u, fixedTableHeight: d, leftTableWidth: f, rightTableWidth: m, data: h, depthMap: g, expandedRowKeys: _, hasFixedColumns: v, mainTableRef: y, leftTableRef: S, rightTableRef: C, isDynamic: w, isResetting: T, isScrolling: E, bodyWidth: D, emptyStyle: O, rootStyle: k, footerHeight: A, showEmpty: j, scrollTo: N, scrollToLeft: P, scrollToTop: F, scrollToRow: I, getRowHeight: L, onColumnSorted: te, onRowHeightChange: R, onRowHovered: ne, onRowExpanded: z, onRowsRendered: re, onScroll: ie, onVerticalScroll: ae } = xe(e);
		return n({
			scrollTo: N,
			scrollToLeft: P,
			scrollToTop: F,
			scrollToRow: I
		}), p(Se, {
			ns: r,
			isResetting: T,
			isScrolling: E
		}), () => {
			let { cache: n, cellProps: p, estimatedRowHeight: T, expandColumnKey: E, fixedData: M, headerHeight: N, headerClass: P, headerProps: F, headerCellProps: I, sortBy: ee, sortState: oe, rowHeight: B, rowClass: se, rowEventHandlers: V, rowKey: H, rowProps: U, scrollbarAlwaysOn: W, indentSize: ce, iconSize: le, useIsScrolling: G, vScrollbarSize: K, width: ue } = e, q = x(h), J = {
				cache: n,
				class: r.e("main"),
				columns: x(l),
				data: q,
				fixedData: M,
				estimatedRowHeight: T,
				bodyWidth: x(D),
				headerHeight: N,
				headerWidth: x(D),
				height: x(u),
				mainTableRef: y,
				rowKey: H,
				rowHeight: B,
				scrollbarAlwaysOn: W,
				scrollbarStartGap: 2,
				scrollbarEndGap: K,
				useIsScrolling: G,
				width: ue,
				getRowHeight: L,
				onRowsRendered: re,
				onScroll: ie
			}, Y = x(f), de = x(d), fe = {
				cache: n,
				class: r.e("left"),
				columns: x(s),
				data: q,
				fixedData: M,
				estimatedRowHeight: T,
				leftTableRef: S,
				rowHeight: B,
				bodyWidth: Y,
				headerWidth: Y,
				headerHeight: N,
				height: de,
				rowKey: H,
				scrollbarAlwaysOn: W,
				scrollbarStartGap: 2,
				scrollbarEndGap: K,
				useIsScrolling: G,
				width: Y,
				getRowHeight: L,
				onScroll: ae
			}, pe = x(m), me = {
				cache: n,
				class: r.e("right"),
				columns: x(c),
				data: q,
				fixedData: M,
				estimatedRowHeight: T,
				rightTableRef: C,
				rowHeight: B,
				bodyWidth: pe,
				headerWidth: pe,
				headerHeight: N,
				height: de,
				rowKey: H,
				scrollbarAlwaysOn: W,
				scrollbarStartGap: 2,
				scrollbarEndGap: K,
				width: pe,
				style: `${r.cssVarName("table-scrollbar-size")}: ${K}px`,
				useIsScrolling: G,
				getRowHeight: L,
				onScroll: ae
			}, X = x(a), he = {
				ns: r,
				depthMap: x(g),
				columnsStyles: X,
				expandColumnKey: E,
				expandedRowKeys: x(_),
				estimatedRowHeight: T,
				hasFixedColumns: x(v),
				rowProps: U,
				rowClass: se,
				rowKey: H,
				rowEventHandlers: V,
				onRowHovered: ne,
				onRowExpanded: z,
				onRowHeightChange: R
			}, ge = {
				cellProps: p,
				expandColumnKey: E,
				indentSize: ce,
				iconSize: le,
				rowKey: H,
				expandedRowKeys: x(_),
				ns: r,
				t: i
			}, _e = {
				ns: r,
				headerClass: P,
				headerProps: F,
				columnsStyles: X
			}, ve = {
				ns: r,
				t: i,
				sortBy: ee,
				sortState: oe,
				headerCellProps: I,
				onColumnSorted: te
			}, Z = {
				row: (e) => b(Le, o(e, he), {
					row: t.row,
					cell: (e) => {
						let n;
						return t.cell ? b(Be, o(e, ge, { style: X[e.column.key] }), Xe(n = t.cell(e)) ? n : { default: () => [n] }) : b(Be, o(e, ge, { style: X[e.column.key] }), null);
					}
				}),
				header: (e) => b(Ue, o(e, _e), {
					header: t.header,
					cell: (e) => {
						let n;
						return t["header-cell"] ? b(Ke, o(e, ve, { style: X[e.column.key] }), Xe(n = t["header-cell"](e)) ? n : { default: () => [n] }) : b(Ke, o(e, ve, { style: X[e.column.key] }), null);
					}
				})
			}, Q = [
				e.class,
				r.b(),
				r.e("root"),
				r.is("dynamic", x(w))
			], $ = {
				class: r.e("footer"),
				style: x(A)
			};
			return b("div", {
				class: Q,
				style: x(k)
			}, [
				b(ke, J, Xe(Z) ? Z : { default: () => [Z] }),
				b(je, fe, Xe(Z) ? Z : { default: () => [Z] }),
				b(Ne, me, Xe(Z) ? Z : { default: () => [Z] }),
				t.footer && b(qe, $, { default: t.footer }),
				x(j) && b(Je, {
					class: r.e("empty"),
					style: x(O)
				}, { default: t.empty }),
				t.overlay && b(Ye, { class: r.e("overlay") }, { default: t.overlay })
			]);
		};
	}
}), Qe = O({
	disableWidth: Boolean,
	disableHeight: Boolean,
	onResize: { type: k(Function) }
}), $e = (t) => {
	let n = y(), r = y(0), i = y(0), o;
	return S(() => {
		o = A(n, ([e]) => {
			let { width: t, height: n } = e.contentRect, { paddingLeft: a, paddingRight: o, paddingTop: s, paddingBottom: c } = getComputedStyle(e.target), l = Number.parseInt(a) || 0, u = Number.parseInt(o) || 0, d = Number.parseInt(s) || 0, f = Number.parseInt(c) || 0;
			r.value = t - l - u, i.value = n - d - f;
		}).stop;
	}), a(() => {
		o?.();
	}), e([r, i], ([e, n]) => {
		t.onResize?.({
			width: e,
			height: n
		});
	}), {
		sizer: n,
		width: r,
		height: i
	};
}, et = /* @__PURE__ */ d({
	name: "ElAutoResizer",
	props: Qe,
	setup(e, { slots: t }) {
		let n = M("auto-resizer"), { height: r, width: i, sizer: a } = $e(e), o = {
			width: "100%",
			height: "100%"
		};
		return () => b("div", {
			ref: a,
			class: n.b(),
			style: o
		}, [t.default?.({
			height: r.value,
			width: i.value
		})]);
	}
}), tt = w(Ze), nt = w(et);
//#endregion
export { nt as ElAutoResizer, tt as ElTableV2, Ze as TableV2, oe as TableV2Alignment, B as TableV2FixedDir, V as TableV2Placeholder, ae as TableV2SortOrder, Qe as autoResizerProps, pe as tableV2Props, J as tableV2RowProps };
