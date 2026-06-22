globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Cn as n, Ht as r, Jt as i, Mt as a, Nt as o, Ut as s, X as c, an as l, fn as u, kn as d, kt as f, ln as p, nt as m, on as h, rt as g, sn as _, wn as v, yn as y, yt as b } from "../shared/core.js";
import { $t as x, E as S, Jn as C, Lt as w, O as T, Qn as E, S as D, Sr as O, St as k, T as ee, Wn as A, Zn as j, ar as M, br as N, en as P, fn as F, gr as I, kn as L, nr as R, ot as z, pr as B, rn as V, sr as H, tr as U, ur as te } from "../shared/antd-core.js";
import { a as ne, c as re, d as ie, i as ae, l as oe, o as se, p as W, s as ce, u as le } from "./auto-complete.js";
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/context.js
var G = /* @__PURE__ */ t(d()), ue = /*#__PURE__*/ G.createContext({}), K = "__rc_cascader_search_mark__", de = (e, t, { label: n = "" }) => t.some((t) => String(t[n]).toLowerCase().includes(e.toLowerCase())), fe = (e, t, n, r) => t.map((e) => e[r.label]).join(" / "), pe = (e, t, n, r, i, a) => {
	let { filter: o = de, render: s = fe, limit: c = 50, sort: l } = i;
	return G.useMemo(() => {
		let i = [];
		if (!e) return [];
		function u(t, d, f = !1) {
			t.forEach((t) => {
				if (!l && c !== !1 && c > 0 && i.length >= c) return;
				let p = [...d, t], m = t[n.children], h = f || t.disabled;
				(!m || m.length === 0 || a) && o(e, p, { label: n.label }) && i.push({
					...t,
					disabled: h,
					[n.label]: s(e, p, r, n),
					[K]: p,
					[n.children]: void 0
				}), m && u(t[n.children], p, h);
			});
		}
		return u(t, []), l && i.sort((t, r) => l(t[K], r[K], e, n)), c !== !1 && c > 0 ? i.slice(0, c) : i;
	}, [
		e,
		t,
		n,
		r,
		s,
		a,
		o,
		l,
		c
	]);
}, me = "__RC_CASCADER_SPLIT__", he = "SHOW_PARENT", ge = "SHOW_CHILD";
function q(e) {
	return e.join(me);
}
function _e(e) {
	return e.map(q);
}
function ve(e) {
	return e.split(me);
}
function ye(e) {
	let { label: t, value: n, children: r } = e || {}, i = n || "value";
	return {
		label: t || "label",
		value: i,
		key: i,
		children: r || "children"
	};
}
function be(e, t) {
	return e.isLeaf ?? !e[t.children]?.length;
}
function xe(e) {
	let t = e.parentElement;
	if (!t) return;
	let n = e.offsetTop - t.offsetTop;
	n - t.scrollTop < 0 ? t.scrollTo({ top: n }) : n + e.offsetHeight - t.scrollTop > t.offsetHeight && t.scrollTo({ top: n + e.offsetHeight - t.offsetHeight });
}
function Se(e, t) {
	return e.map((e) => e[K]?.map((e) => e[t.value]));
}
function Ce(e) {
	return Array.isArray(e) && Array.isArray(e[0]);
}
function we(e) {
	return e ? Ce(e) ? e : (e.length === 0 ? [] : [e]).map((e) => Array.isArray(e) ? e : [e]) : [];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/utils/treeUtil.js
function Te(e, t, n) {
	let r = new Set(e), i = t();
	return e.filter((e) => {
		let t = i[e], a = t ? t.parent : null, o = t ? t.children : null;
		return t && t.node.disabled ? !0 : n === "SHOW_CHILD" ? !(o && o.some((e) => e.key && r.has(e.key))) : !(a && !a.node.disabled && r.has(a.key));
	});
}
function Ee(e, t, n, r = !1) {
	let i = t, a = [];
	for (let t = 0; t < e.length; t += 1) {
		let o = e[t], s = i?.findIndex((e) => {
			let t = e[n.value];
			return r ? String(t) === String(o) : t === o;
		}), c = s === -1 ? null : i?.[s];
		a.push({
			value: c?.[n.value] ?? o,
			index: s,
			option: c
		}), i = c?.[n.children];
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/hooks/useDisplayValues.js
var De = ((e, t, n, r, i) => G.useMemo(() => {
	let a = i || ((e) => {
		let t = r ? e.slice(-1) : e;
		return t.every((e) => ["string", "number"].includes(typeof e)) ? t.join(" / ") : t.reduce((e, t, n) => {
			let r = /*#__PURE__*/ G.isValidElement(t) ? /*#__PURE__*/ G.cloneElement(t, { key: n }) : t;
			return n === 0 ? [r] : [
				...e,
				" / ",
				r
			];
		}, []);
	});
	return e.map((e) => {
		let r = Ee(e, t, n), i = a(r.map(({ option: e, value: t }) => e?.[n.label] ?? t), r.map(({ option: e }) => e)), o = q(e);
		return {
			label: i,
			value: o,
			key: o,
			valueCells: e,
			disabled: r[r.length - 1]?.option?.disabled
		};
	});
}, [
	e,
	t,
	n,
	i,
	r
]));
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/hooks/useMissingValues.js
function Oe(e, t) {
	return G.useCallback((n) => {
		let r = [], i = [];
		return n.forEach((n) => {
			Ee(n, e, t).every((e) => e.option) ? i.push(n) : r.push(n);
		}), [i, r];
	}, [e, t]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/contextTypes.js
var ke = /*#__PURE__*/ G.createContext(null), Ae = /*#__PURE__*/ G.createContext({}), je = (e) => {
	let { dropPosition: t, dropLevelOffset: n, indent: r } = e, i = {
		pointerEvents: "none",
		position: "absolute",
		right: 0,
		backgroundColor: "red",
		height: 2
	};
	switch (t) {
		case -1:
			i.top = 0, i.left = -n * r;
			break;
		case 1:
			i.bottom = 0, i.left = -n * r;
			break;
		case 0:
			i.bottom = 0, i.left = r;
			break;
	}
	return /*#__PURE__*/ G.createElement("div", { style: i });
}, J = /*#__PURE__*/ G.memo(({ prefixCls: e, level: t, isStart: n, isEnd: r }) => {
	let i = `${e}-indent-unit`, a = [];
	for (let e = 0; e < t; e += 1) a.push(/*#__PURE__*/ G.createElement("span", {
		key: e,
		className: o(i, {
			[`${i}-start`]: n[e],
			[`${i}-end`]: r[e]
		})
	}));
	return /*#__PURE__*/ G.createElement("span", {
		"aria-hidden": "true",
		className: `${e}-indent`
	}, a);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/utils/keyUtil.js
function Y(e, t) {
	return e[t];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/utils/treeUtil.js
function Me(e, t) {
	return `${e}-${t}`;
}
function Ne(e) {
	return e && e.type && e.type.isTreeNode;
}
function X(e, t) {
	return e ?? t;
}
function Pe(e) {
	let { title: t, _title: n, key: r, children: i } = e || {}, a = t || "title";
	return {
		title: a,
		_title: n || [a],
		key: r || "key",
		children: i || "children"
	};
}
function Fe(e) {
	function t(e) {
		return v(e).map((e) => {
			if (!Ne(e)) return n(!e, "Tree/TreeNode can only accept TreeNode as children."), null;
			let { key: r } = e, { children: i, ...a } = e.props, o = {
				key: r,
				...a
			}, s = t(i);
			return s.length && (o.children = s), o;
		}).filter((e) => e);
	}
	return t(e);
}
function Ie(e, t, n) {
	let { _title: r, key: i, children: a } = Pe(n), o = new Set(t === !0 ? [] : t), c = [];
	function l(e, n = null) {
		return e.map((u, d) => {
			let f = Me(n ? n.pos : "0", d), p = X(u[i], f), m;
			for (let e = 0; e < r.length; e += 1) {
				let t = r[e];
				if (u[t] !== void 0) {
					m = u[t];
					break;
				}
			}
			let h = Object.assign(s(u, [
				...r,
				i,
				a
			]), {
				title: m,
				key: p,
				parent: n,
				pos: f,
				children: null,
				data: u,
				isStart: [...n ? n.isStart : [], d === 0],
				isEnd: [...n ? n.isEnd : [], d === e.length - 1]
			});
			return c.push(h), t === !0 || o.has(p) ? h.children = l(u[a] || [], h) : h.children = [], h;
		});
	}
	return l(e), c;
}
function Le(e, t, n) {
	let r = {};
	r = typeof n == "object" ? n : { externalGetKey: n }, r ||= {};
	let { childrenPropName: i, externalGetKey: a, fieldNames: o } = r, { key: s, children: c } = Pe(o), l = i || c, u;
	a ? typeof a == "string" ? u = (e) => e[a] : typeof a == "function" && (u = (e) => a(e)) : u = (e, t) => X(e[s], t);
	function d(n, r, i, a) {
		let o = n ? n[l] : e, s = n ? Me(i.pos, r) : "0", c = n ? [...a, n] : [];
		n && t({
			node: n,
			index: r,
			pos: s,
			key: u(n, s),
			parentPos: i.node ? i.pos : null,
			level: i.level + 1,
			nodes: c
		}), o && o.forEach((e, t) => {
			d(e, t, {
				node: n,
				pos: s,
				level: i ? i.level + 1 : -1
			}, c);
		});
	}
	d(null);
}
function Re(e, { initWrapper: t, processEntity: n, onProcessFinished: r, externalGetKey: i, childrenPropName: a, fieldNames: o } = {}, s) {
	let c = i || s, l = {}, u = {}, d = {
		posEntities: l,
		keyEntities: u
	};
	return t && (d = t(d) || d), Le(e, (e) => {
		let { node: t, index: r, pos: i, key: a, parentPos: o, level: s, nodes: c } = e, f = {
			node: t,
			nodes: c,
			index: r,
			key: a,
			pos: i,
			level: s
		}, p = X(a, i);
		l[i] = f, u[p] = f, f.parent = l[o], f.parent && (f.parent.children = f.parent.children || [], f.parent.children.push(f)), n && n(f, d);
	}, {
		externalGetKey: c,
		childrenPropName: a,
		fieldNames: o
	}), r && r(d), d;
}
function ze(e, t, n, r) {
	return e === !1 ? !1 : e || !t && !n || t && r && !n;
}
function Be(e, { expandedKeys: t, selectedKeys: n, loadedKeys: r, loadingKeys: i, checkedKeys: a, halfCheckedKeys: o, dragOverNodeKey: s, dropPosition: c, keyEntities: l }) {
	let u = Y(l, e);
	return {
		eventKey: e,
		expanded: t.indexOf(e) !== -1,
		selected: n.indexOf(e) !== -1,
		loaded: r.indexOf(e) !== -1,
		loading: i.indexOf(e) !== -1,
		checked: a.indexOf(e) !== -1,
		halfChecked: o.indexOf(e) !== -1,
		pos: String(u ? u.pos : ""),
		dragOver: s === e && c === 0,
		dragOverGapTop: s === e && c === -1,
		dragOverGapBottom: s === e && c === 1
	};
}
function Z(e) {
	let { data: t, expanded: r, selected: i, checked: a, loaded: o, loading: s, halfChecked: c, dragOver: l, dragOverGapTop: u, dragOverGapBottom: d, pos: f, active: p, eventKey: m } = e, h = {
		...t,
		expanded: r,
		selected: i,
		checked: a,
		loaded: o,
		loading: s,
		halfChecked: c,
		dragOver: l,
		dragOverGapTop: u,
		dragOverGapBottom: d,
		pos: f,
		active: p,
		key: m
	};
	return "props" in h || Object.defineProperty(h, "props", { get() {
		return n(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), e;
	} }), h;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/TreeNode.js
function Ve() {
	return Ve = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ve.apply(this, arguments);
}
var He = "open", Ue = "close", We = "---", Ge = (e) => {
	let { eventKey: t, className: n, style: i, dragOver: a, dragOverGapTop: s, dragOverGapBottom: c, isLeaf: u, isStart: d, isEnd: f, expanded: p, selected: m, checked: h, halfChecked: g, loading: _, domRef: v, active: y, data: b, onMouseMove: x, selectable: S, treeId: C, ...w } = e, T = l(C, t), E = G.useContext(ke), { classNames: D, styles: O } = E || {}, k = G.useContext(Ae), ee = G.useRef(null), [A, j] = G.useState(!1), M = !!(E.disabled || e.disabled || k.nodeDisabled?.(b)), N = G.useMemo(() => !E.checkable || e.checkable === !1 ? !1 : E.checkable, [E.checkable, e.checkable]), P = (t) => {
		M || E.onNodeSelect(t, Z(e));
	}, F = (t) => {
		M || !N || e.disableCheckbox || E.onNodeCheck(t, Z(e), !h);
	}, I = G.useMemo(() => typeof S == "boolean" ? S : E.selectable, [S, E.selectable]), L = (t) => {
		E.onNodeClick(t, Z(e)), I ? P(t) : F(t);
	}, R = (t) => {
		E.onNodeDoubleClick(t, Z(e));
	}, z = (t) => {
		E.onNodeMouseEnter(t, Z(e));
	}, B = (t) => {
		E.onNodeMouseLeave(t, Z(e));
	}, V = (t) => {
		E.onNodeContextMenu(t, Z(e));
	}, H = G.useMemo(() => !!(E.draggable && (!E.draggable.nodeDraggable || E.draggable.nodeDraggable(b))), [E.draggable, b]), U = (t) => {
		t.stopPropagation(), j(!0), E.onNodeDragStart(t, e);
		try {
			t.dataTransfer.setData("text/plain", "");
		} catch {}
	}, te = (t) => {
		t.preventDefault(), t.stopPropagation(), E.onNodeDragEnter(t, e);
	}, ne = (t) => {
		t.preventDefault(), t.stopPropagation(), E.onNodeDragOver(t, e);
	}, re = (t) => {
		t.stopPropagation(), E.onNodeDragLeave(t, e);
	}, ie = (t) => {
		t.stopPropagation(), j(!1), E.onNodeDragEnd(t, e);
	}, ae = (t) => {
		t.preventDefault(), t.stopPropagation(), j(!1), E.onNodeDrop(t, e);
	}, oe = (t) => {
		_ || E.onNodeExpand(t, Z(e));
	}, se = G.useMemo(() => {
		let { children: e } = Y(E.keyEntities, t) || {};
		return !!(e || []).length;
	}, [E.keyEntities, t]), W = G.useMemo(() => ze(u, E.loadData, se, e.loaded), [
		u,
		E.loadData,
		se,
		e.loaded
	]);
	G.useEffect(() => {
		_ || typeof E.loadData == "function" && p && !W && !e.loaded && E.onNodeLoad(Z(e));
	}, [
		_,
		E.loadData,
		E.onNodeLoad,
		p,
		W,
		e
	]);
	let ce = G.useMemo(() => E.draggable?.icon ? /*#__PURE__*/ G.createElement("span", { className: `${E.prefixCls}-draggable-icon` }, E.draggable.icon) : null, [E.draggable]), le = (t) => {
		let n = e.switcherIcon || E.switcherIcon;
		return typeof n == "function" ? n({
			...e,
			isLeaf: t
		}) : n;
	}, ue = () => {
		if (W) {
			let e = le(!0);
			return e === !1 ? null : /*#__PURE__*/ G.createElement("span", {
				className: o(`${E.prefixCls}-switcher`, `${E.prefixCls}-switcher-noop`, D?.itemSwitcher),
				style: O?.itemSwitcher
			}, e);
		}
		let e = le(!1);
		return e === !1 ? null : /*#__PURE__*/ G.createElement("span", {
			onClick: oe,
			className: o(`${E.prefixCls}-switcher`, `${E.prefixCls}-switcher_${p ? He : Ue}`, D?.itemSwitcher),
			style: O?.itemSwitcher
		}, e);
	}, K = G.useMemo(() => {
		if (!N) return null;
		let t = typeof N == "boolean" ? null : N;
		return /*#__PURE__*/ G.createElement("span", {
			className: o(`${E.prefixCls}-checkbox`, {
				[`${E.prefixCls}-checkbox-checked`]: h,
				[`${E.prefixCls}-checkbox-indeterminate`]: !h && g,
				[`${E.prefixCls}-checkbox-disabled`]: M || e.disableCheckbox
			}),
			onClick: F,
			role: "checkbox",
			"aria-checked": g ? "mixed" : h,
			"aria-disabled": M || e.disableCheckbox,
			"aria-labelledby": T
		}, t);
	}, [
		N,
		h,
		g,
		M,
		e.disableCheckbox,
		T
	]), de = G.useMemo(() => W ? null : p ? He : Ue, [W, p]), fe = G.useMemo(() => /*#__PURE__*/ G.createElement("span", {
		className: o(D?.itemIcon, `${E.prefixCls}-iconEle`, `${E.prefixCls}-icon__${de || "docu"}`, { [`${E.prefixCls}-icon_loading`]: _ }),
		style: O?.itemIcon
	}), [
		E.prefixCls,
		de,
		_
	]), pe = G.useMemo(() => {
		let n = !!E.draggable;
		return !e.disabled && n && E.dragOverNodeKey === t ? E.dropIndicatorRender({
			dropPosition: E.dropPosition,
			dropLevelOffset: E.dropLevelOffset,
			indent: E.indent,
			prefixCls: E.prefixCls,
			direction: E.direction
		}) : null;
	}, [
		E.dropPosition,
		E.dropLevelOffset,
		E.indent,
		E.prefixCls,
		E.direction,
		E.draggable,
		E.dragOverNodeKey,
		E.dropIndicatorRender
	]), me = G.useMemo(() => {
		let { title: t = We } = e, n = `${E.prefixCls}-node-content-wrapper`, r;
		if (E.showIcon) {
			let t = e.icon || E.icon;
			r = t ? /*#__PURE__*/ G.createElement("span", {
				className: o(D?.itemIcon, `${E.prefixCls}-iconEle`, `${E.prefixCls}-icon__customize`),
				style: O?.itemIcon
			}, typeof t == "function" ? t(e) : t) : fe;
		} else E.loadData && _ && (r = fe);
		let i;
		return i = typeof t == "function" ? t(b) : E.titleRender ? E.titleRender(b) : t, /*#__PURE__*/ G.createElement("span", {
			ref: ee,
			title: typeof t == "string" ? t : "",
			className: o(n, `${n}-${de || "normal"}`, { [`${E.prefixCls}-node-selected`]: !M && (m || A) }),
			onMouseEnter: z,
			onMouseLeave: B,
			onContextMenu: V,
			onClick: L,
			onDoubleClick: R
		}, r, /*#__PURE__*/ G.createElement("span", {
			className: o(`${E.prefixCls}-title`, D?.itemTitle),
			style: O?.itemTitle
		}, i), pe);
	}, [
		E.prefixCls,
		E.showIcon,
		e,
		E.icon,
		fe,
		E.titleRender,
		b,
		de,
		z,
		B,
		V,
		L,
		R
	]), he = r(w, {
		aria: !0,
		data: !0
	}), { level: ge } = Y(E.keyEntities, t) || {}, q = f[f.length - 1], _e = !M && H, ve = E.draggingNodeKey === t;
	return /*#__PURE__*/ G.createElement("div", Ve({
		ref: v,
		role: "treeitem",
		id: T,
		"aria-expanded": W ? void 0 : p,
		"aria-selected": I && !M ? m : void 0,
		"aria-checked": N && !M ? g ? "mixed" : h : void 0,
		"aria-disabled": M,
		className: o(n, `${E.prefixCls}-treenode`, D?.item, {
			[`${E.prefixCls}-treenode-disabled`]: M,
			[`${E.prefixCls}-treenode-switcher-${p ? "open" : "close"}`]: !u,
			[`${E.prefixCls}-treenode-checkbox-checked`]: h,
			[`${E.prefixCls}-treenode-checkbox-indeterminate`]: g,
			[`${E.prefixCls}-treenode-selected`]: m,
			[`${E.prefixCls}-treenode-loading`]: _,
			[`${E.prefixCls}-treenode-active`]: y,
			[`${E.prefixCls}-treenode-leaf-last`]: q,
			[`${E.prefixCls}-treenode-draggable`]: H,
			dragging: ve,
			"drop-target": E.dropTargetKey === t,
			"drop-container": E.dropContainerKey === t,
			"drag-over": !M && a,
			"drag-over-gap-top": !M && s,
			"drag-over-gap-bottom": !M && c,
			"filter-node": E.filterTreeNode?.(Z(e)),
			[`${E.prefixCls}-treenode-leaf`]: W
		}),
		style: {
			...i,
			...O?.item
		},
		draggable: _e,
		onDragStart: _e ? U : void 0,
		onDragEnter: H ? te : void 0,
		onDragOver: H ? ne : void 0,
		onDragLeave: H ? re : void 0,
		onDrop: H ? ae : void 0,
		onDragEnd: H ? ie : void 0,
		onMouseMove: x
	}, he), /*#__PURE__*/ G.createElement(J, {
		prefixCls: E.prefixCls,
		level: ge,
		isStart: d,
		isEnd: f
	}), ce, ue(), K, me);
};
Ge.isTreeNode = 1;
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/useUnmount.js
function Ke(e, t) {
	let [n, r] = G.useState(!1);
	p(() => {
		if (n) return e(), () => {
			t();
		};
	}, [n]), p(() => (r(!0), () => {
		r(!1);
	}), []);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/MotionTreeNode.js
function qe() {
	return qe = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, qe.apply(this, arguments);
}
var Je = /*#__PURE__*/ G.forwardRef((e, t) => {
	let { className: n, style: r, motion: i, motionNodes: a, motionType: s, onMotionStart: c, onMotionEnd: l, active: u, treeNodeRequiredProps: d, ...f } = e, [m, h] = G.useState(!0), { prefixCls: g } = G.useContext(ke), _ = a && s !== "hide";
	p(() => {
		a && _ !== m && h(_);
	}, [a]);
	let v = () => {
		a && c();
	}, y = G.useRef(!1), b = () => {
		a && !y.current && (y.current = !0, l());
	};
	return Ke(v, b), a ? /*#__PURE__*/ G.createElement(R, qe({
		ref: t,
		visible: m
	}, i, {
		motionAppear: s === "show",
		onVisibleChanged: (e) => {
			_ === e && b();
		}
	}), ({ className: e, style: t }, n) => /*#__PURE__*/ G.createElement("div", {
		ref: n,
		className: o(`${g}-treenode-motion`, e),
		style: t
	}, a.map((e) => {
		let { data: { ...t }, title: n, key: r, isStart: i, isEnd: a } = e;
		delete t.children;
		let o = Be(r, d);
		return /*#__PURE__*/ G.createElement(Ge, qe({}, t, o, {
			title: n,
			active: u,
			data: e.data,
			key: r,
			isStart: i,
			isEnd: a
		}));
	}))) : /*#__PURE__*/ G.createElement(Ge, qe({
		domRef: t,
		className: n,
		style: r
	}, f, { active: u }));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/utils/diffUtil.js
function Ye(e = [], t = []) {
	let n = e.length, r = t.length;
	if (Math.abs(n - r) !== 1) return {
		add: !1,
		key: null
	};
	function i(e, t) {
		let n = /* @__PURE__ */ new Map();
		e.forEach((e) => {
			n.set(e, !0);
		});
		let r = t.filter((e) => !n.has(e));
		return r.length === 1 ? r[0] : null;
	}
	return n < r ? {
		add: !0,
		key: i(e, t)
	} : {
		add: !1,
		key: i(t, e)
	};
}
function Xe(e, t, n) {
	let r = e[e.findIndex((e) => e.key === n) + 1], i = t.findIndex((e) => e.key === n);
	if (r) {
		let e = t.findIndex((e) => e.key === r.key);
		return t.slice(i + 1, e);
	}
	return t.slice(i + 1);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/NodeList.js
function Ze() {
	return Ze = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ze.apply(this, arguments);
}
var Qe = `RC_TREE_MOTION_${Math.random()}`, $e = { key: Qe }, et = {
	key: Qe,
	level: 0,
	index: 0,
	pos: "0",
	node: $e,
	nodes: [$e]
}, tt = {
	parent: null,
	children: [],
	pos: et.pos,
	data: $e,
	title: null,
	key: Qe,
	isStart: [],
	isEnd: []
};
function nt(e, t, n, r) {
	return t === !1 || !n ? e : e.slice(0, Math.ceil(n / r) + 1);
}
function rt(e) {
	let { key: t, pos: n } = e;
	return X(t, n);
}
var it = /*#__PURE__*/ G.forwardRef((e, t) => {
	let { prefixCls: n, data: r, selectable: i, checkable: a, expandedKeys: o, selectedKeys: s, checkedKeys: c, loadedKeys: u, loadingKeys: d, halfCheckedKeys: f, keyEntities: m, disabled: g, dragging: _, dragOverNodeKey: v, dropPosition: y, motion: b, height: x, itemHeight: S, virtual: C, scrollWidth: w, focusable: T, activeItem: E, tabIndex: D, onKeyDown: O, onFocus: k, onBlur: ee, onMouseDown: A, onActiveChange: j, onListChangeStart: M, onListChangeEnd: N, ...P } = e, F = h(), I = G.useRef(null), L = G.useRef(null);
	G.useImperativeHandle(t, () => ({
		scrollTo: (e) => {
			I.current.scrollTo(e);
		},
		getIndentWidth: () => L.current.offsetWidth
	}));
	let [R, z] = G.useState(o), [B, V] = G.useState(r), [H, U] = G.useState(r), [te, ne] = G.useState([]), [re, ie] = G.useState(null), ae = G.useRef(r);
	ae.current = r;
	function oe() {
		let e = ae.current;
		V(e), U(e), ne([]), ie(null), N();
	}
	p(() => {
		z(o);
		let e = Ye(R, o);
		if (e.key !== null) if (e.add) {
			let t = B.findIndex(({ key: t }) => t === e.key), n = nt(Xe(B, r, e.key), C, x, S), i = B.slice();
			i.splice(t + 1, 0, tt), U(i), ne(n), ie("show");
		} else {
			let t = r.findIndex(({ key: t }) => t === e.key), n = nt(Xe(r, B, e.key), C, x, S), i = r.slice();
			i.splice(t + 1, 0, tt), U(i), ne(n), ie("hide");
		}
		else B !== r && (V(r), U(r));
	}, [o, r]), G.useEffect(() => {
		_ || oe();
	}, [_]);
	let se = b ? H : r, W = {
		expandedKeys: o,
		selectedKeys: s,
		loadedKeys: u,
		loadingKeys: d,
		checkedKeys: c,
		halfCheckedKeys: f,
		dragOverNodeKey: v,
		dropPosition: y,
		keyEntities: m
	};
	return /*#__PURE__*/ G.createElement(G.Fragment, null, /*#__PURE__*/ G.createElement("div", {
		className: `${n}-treenode`,
		"aria-hidden": !0,
		style: {
			position: "absolute",
			pointerEvents: "none",
			visibility: "hidden",
			height: 0,
			overflow: "hidden",
			border: 0,
			padding: 0
		}
	}, /*#__PURE__*/ G.createElement("div", { className: `${n}-indent` }, /*#__PURE__*/ G.createElement("div", {
		ref: L,
		className: `${n}-indent-unit`
	}))), /*#__PURE__*/ G.createElement(le, Ze({}, P, {
		data: se,
		itemKey: rt,
		height: x,
		fullHeight: !1,
		virtual: C,
		itemHeight: S,
		scrollWidth: w,
		prefixCls: `${n}-list`,
		ref: I,
		role: "tree",
		tabIndex: T !== !1 && !g ? D : void 0,
		"aria-activedescendant": E ? l(F, E.key) : void 0,
		onKeyDown: O,
		onFocus: k,
		onBlur: ee,
		onMouseDown: A,
		onVisibleChange: (e) => {
			e.every((e) => rt(e) !== Qe) && oe();
		}
	}), (e) => {
		let { pos: t, data: { ...n }, title: r, key: i, isStart: a, isEnd: o } = e, s = X(i, t);
		delete n.key, delete n.children;
		let c = Be(s, W);
		return /*#__PURE__*/ G.createElement(Je, Ze({}, n, c, {
			title: r,
			active: !!E && i === E.key,
			pos: t,
			data: e.data,
			isStart: a,
			isEnd: o,
			motion: b,
			motionNodes: i === Qe ? te : null,
			motionType: re,
			onMotionStart: M,
			onMotionEnd: oe,
			treeNodeRequiredProps: W,
			treeId: F,
			onMouseMove: () => {
				j(null);
			}
		}));
	}));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/util.js
function Q(e, t) {
	if (!e) return [];
	let n = e.slice(), r = n.indexOf(t);
	return r >= 0 && n.splice(r, 1), n;
}
function $(e, t) {
	let n = (e || []).slice();
	return n.indexOf(t) === -1 && n.push(t), n;
}
function at(e) {
	return e.split("-");
}
function ot(e, t) {
	let n = [], r = Y(t, e);
	function i(e = []) {
		e.forEach(({ key: e, children: t }) => {
			n.push(e), i(t);
		});
	}
	return i(r.children), n;
}
function st(e) {
	if (e.parent) {
		let t = at(e.pos);
		return Number(t[t.length - 1]) === e.parent.children.length - 1;
	}
	return !1;
}
function ct(e) {
	let t = at(e.pos);
	return Number(t[t.length - 1]) === 0;
}
function lt(e, t, n, r, i, a, o, s, c, l) {
	let { clientX: u, clientY: d } = e, { top: f, height: p } = e.target.getBoundingClientRect(), m = ((l === "rtl" ? -1 : 1) * ((i?.x || 0) - u) - 12) / r, h = c.filter((e) => s[e]?.children?.length), g = Y(s, n.eventKey);
	if (d < f + p / 2) {
		let e = o.findIndex((e) => e.key === g.key), t = o[e <= 0 ? 0 : e - 1].key;
		g = Y(s, t);
	}
	let _ = g.key, v = g, y = g.key, b = 0, x = 0;
	if (!h.includes(_)) for (let e = 0; e < m && st(g); e += 1) g = g.parent, x += 1;
	let S = t.data, C = g.node, w = !0;
	return ct(g) && g.level === 0 && d < f + p / 2 && a({
		dragNode: S,
		dropNode: C,
		dropPosition: -1
	}) && g.key === n.eventKey ? b = -1 : (v.children || []).length && h.includes(y) ? a({
		dragNode: S,
		dropNode: C,
		dropPosition: 0
	}) ? b = 0 : w = !1 : x === 0 ? m > -1.5 ? a({
		dragNode: S,
		dropNode: C,
		dropPosition: 1
	}) ? b = 1 : w = !1 : a({
		dragNode: S,
		dropNode: C,
		dropPosition: 0
	}) ? b = 0 : a({
		dragNode: S,
		dropNode: C,
		dropPosition: 1
	}) ? b = 1 : w = !1 : a({
		dragNode: S,
		dropNode: C,
		dropPosition: 1
	}) ? b = 1 : w = !1, {
		dropPosition: b,
		dropLevelOffset: x,
		dropTargetKey: g.key,
		dropTargetPos: g.pos,
		dragOverNodeKey: y,
		dropContainerKey: b === 0 ? null : g.parent?.key || null,
		dropAllowed: w
	};
}
function ut(e, t) {
	if (!e) return;
	let { multiple: n } = t;
	return n ? e.slice() : e.length ? [e[0]] : e;
}
function dt(e) {
	if (!e) return null;
	let t;
	if (Array.isArray(e)) t = {
		checkedKeys: e,
		halfCheckedKeys: void 0
	};
	else if (typeof e == "object") t = {
		checkedKeys: e.checked || void 0,
		halfCheckedKeys: e.halfChecked || void 0
	};
	else return n(!1, "`checkedKeys` is not an array or an object"), null;
	return t;
}
function ft(e, t) {
	let n = /* @__PURE__ */ new Set();
	function r(e) {
		if (n.has(e)) return;
		let i = Y(t, e);
		if (!i) return;
		n.add(e);
		let { parent: a, node: o } = i;
		o.disabled || a && r(a.key);
	}
	return (e || []).forEach((e) => {
		r(e);
	}), [...n];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/utils/conductUtil.js
function pt(e, t) {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		t.has(e) || n.add(e);
	}), n;
}
function mt(e) {
	let { disabled: t, disableCheckbox: n, checkable: r } = e || {};
	return !!(t || n) || r === !1;
}
function ht(e, t, n, r) {
	let i = new Set(e), a = /* @__PURE__ */ new Set();
	for (let e = 0; e <= n; e += 1) (t.get(e) || /* @__PURE__ */ new Set()).forEach((e) => {
		let { key: t, node: n, children: a = [] } = e;
		i.has(t) && !r(n) && a.filter((e) => !r(e.node)).forEach((e) => {
			i.add(e.key);
		});
	});
	let o = /* @__PURE__ */ new Set();
	for (let e = n; e >= 0; --e) (t.get(e) || /* @__PURE__ */ new Set()).forEach((e) => {
		let { parent: t, node: n } = e;
		if (r(n) || !e.parent || o.has(e.parent.key)) return;
		if (r(e.parent.node)) {
			o.add(t.key);
			return;
		}
		let s = !0, c = !1;
		(t.children || []).filter((e) => !r(e.node)).forEach(({ key: e }) => {
			let t = i.has(e);
			s && !t && (s = !1), !c && (t || a.has(e)) && (c = !0);
		}), s && i.add(t.key), c && a.add(t.key), o.add(t.key);
	});
	return {
		checkedKeys: Array.from(i),
		halfCheckedKeys: Array.from(pt(a, i))
	};
}
function gt(e, t, n, r, i) {
	let a = new Set(e), o = new Set(t);
	for (let e = 0; e <= r; e += 1) (n.get(e) || /* @__PURE__ */ new Set()).forEach((e) => {
		let { key: t, node: n, children: r = [] } = e;
		!a.has(t) && !o.has(t) && !i(n) && r.filter((e) => !i(e.node)).forEach((e) => {
			a.delete(e.key);
		});
	});
	o = /* @__PURE__ */ new Set();
	let s = /* @__PURE__ */ new Set();
	for (let e = r; e >= 0; --e) (n.get(e) || /* @__PURE__ */ new Set()).forEach((e) => {
		let { parent: t, node: n } = e;
		if (i(n) || !e.parent || s.has(e.parent.key)) return;
		if (i(e.parent.node)) {
			s.add(t.key);
			return;
		}
		let r = !0, c = !1;
		(t.children || []).filter((e) => !i(e.node)).forEach(({ key: e }) => {
			let t = a.has(e);
			r && !t && (r = !1), !c && (t || o.has(e)) && (c = !0);
		}), r || a.delete(t.key), c && o.add(t.key), s.add(t.key);
	});
	return {
		checkedKeys: Array.from(a),
		halfCheckedKeys: Array.from(pt(o, a))
	};
}
function _t(e, t, r, i) {
	let a = [], o;
	o = i || mt;
	let s = new Set(e.filter((e) => {
		let t = !!Y(r, e);
		return t || a.push(e), t;
	})), c = /* @__PURE__ */ new Map(), l = 0;
	Object.keys(r).forEach((e) => {
		let t = r[e], { level: n } = t, i = c.get(n);
		i || (i = /* @__PURE__ */ new Set(), c.set(n, i)), i.add(t), l = Math.max(l, n);
	}), n(!a.length, `Tree missing follow keys: ${a.slice(0, 100).map((e) => `'${e}'`).join(", ")}`);
	let u;
	return u = t === !0 ? ht(s, c, l, o) : gt(s, t.halfCheckedKeys, c, l, o), u;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree@1.3.2_re_a19807b2bed2d6eb7f97ef78daa2ea7f/node_modules/@rc-component/tree/es/Tree.js
function vt() {
	return vt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, vt.apply(this, arguments);
}
var yt = 10, bt = class extends G.Component {
	static defaultProps = {
		prefixCls: "rc-tree",
		showLine: !1,
		showIcon: !0,
		selectable: !0,
		multiple: !1,
		checkable: !1,
		disabled: !1,
		checkStrictly: !1,
		draggable: !1,
		defaultExpandParent: !0,
		autoExpandParent: !1,
		defaultExpandAll: !1,
		defaultExpandedKeys: [],
		defaultCheckedKeys: [],
		defaultSelectedKeys: [],
		dropIndicatorRender: je,
		allowDrop: () => !0,
		expandAction: !1
	};
	static TreeNode = Ge;
	destroyed = !1;
	delayedDragEnterLogic;
	loadingRetryTimes = {};
	state = {
		keyEntities: {},
		indent: null,
		selectedKeys: [],
		checkedKeys: [],
		halfCheckedKeys: [],
		loadedKeys: [],
		loadingKeys: [],
		expandedKeys: [],
		draggingNodeKey: null,
		dragChildrenKeys: [],
		dropTargetKey: null,
		dropPosition: null,
		dropContainerKey: null,
		dropLevelOffset: null,
		dropTargetPos: null,
		dropAllowed: !0,
		dragOverNodeKey: null,
		treeData: [],
		flattenNodes: [],
		activeKey: null,
		listChanging: !1,
		prevProps: null,
		fieldNames: Pe()
	};
	dragStartMousePosition = null;
	dragNodeProps = null;
	currentMouseOverDroppableNodeKey = null;
	focusedByMouse = !1;
	listRef = /*#__PURE__*/ G.createRef();
	componentDidMount() {
		this.destroyed = !1, this.onUpdated(), window.addEventListener("mouseup", this.onGlobalMouseUp);
	}
	componentDidUpdate() {
		this.onUpdated();
	}
	onUpdated() {
		let { activeKey: e, itemScrollOffset: t = 0 } = this.props;
		e !== void 0 && e !== this.state.activeKey && (this.setState({ activeKey: e }), e !== null && this.scrollTo({
			key: e,
			offset: t
		}));
	}
	componentWillUnmount() {
		window.removeEventListener("dragend", this.onWindowDragEnd), window.removeEventListener("mouseup", this.onGlobalMouseUp), this.destroyed = !0;
	}
	static getDerivedStateFromProps(e, t) {
		let { prevProps: r } = t, i = { prevProps: e };
		function a(t) {
			return !r && e.hasOwnProperty(t) || r && r[t] !== e[t];
		}
		let o, { fieldNames: s } = t;
		if (a("fieldNames") && (s = Pe(e.fieldNames), i.fieldNames = s), a("treeData") ? {treeData: o} = e : a("children") && (n(!1, "`children` of Tree is deprecated. Please use `treeData` instead."), o = Fe(e.children)), o) {
			i.treeData = o;
			let e = Re(o, { fieldNames: s });
			i.keyEntities = {
				[Qe]: et,
				...e.keyEntities
			};
		}
		let c = i.keyEntities || t.keyEntities;
		if (a("expandedKeys") || r && a("autoExpandParent")) i.expandedKeys = e.autoExpandParent || !r && e.defaultExpandParent ? ft(e.expandedKeys, c) : e.expandedKeys;
		else if (!r && e.defaultExpandAll) {
			let e = { ...c };
			delete e[Qe];
			let t = [];
			Object.keys(e).forEach((n) => {
				let r = e[n];
				r.children && r.children.length && t.push(r.key);
			}), i.expandedKeys = t;
		} else !r && e.defaultExpandedKeys && (i.expandedKeys = e.autoExpandParent || e.defaultExpandParent ? ft(e.defaultExpandedKeys, c) : e.defaultExpandedKeys);
		if (i.expandedKeys || delete i.expandedKeys, (o || i.expandedKeys) && (i.flattenNodes = Ie(o || t.treeData, i.expandedKeys || t.expandedKeys, s)), e.selectable && (a("selectedKeys") ? i.selectedKeys = ut(e.selectedKeys, e) : !r && e.defaultSelectedKeys && (i.selectedKeys = ut(e.defaultSelectedKeys, e))), e.checkable) {
			let n;
			if (a("checkedKeys") ? n = dt(e.checkedKeys) || {} : !r && e.defaultCheckedKeys ? n = dt(e.defaultCheckedKeys) || {} : o && (n = dt(e.checkedKeys) || {
				checkedKeys: t.checkedKeys,
				halfCheckedKeys: t.halfCheckedKeys
			}), n) {
				let { checkedKeys: t = [], halfCheckedKeys: r = [] } = n;
				if (!e.checkStrictly) {
					let e = _t(t, !0, c);
					({checkedKeys: t, halfCheckedKeys: r} = e);
				}
				i.checkedKeys = t, i.halfCheckedKeys = r;
			}
		}
		return a("loadedKeys") && (i.loadedKeys = e.loadedKeys), i;
	}
	onNodeDragStart = (e, t) => {
		let { expandedKeys: n, keyEntities: r } = this.state, { onDragStart: i } = this.props, { eventKey: a } = t;
		this.dragNodeProps = t, this.dragStartMousePosition = {
			x: e.clientX,
			y: e.clientY
		};
		let o = Q(n, a);
		this.setState({
			draggingNodeKey: a,
			dragChildrenKeys: ot(a, r),
			indent: this.listRef.current.getIndentWidth()
		}), this.setExpandedKeys(o), window.addEventListener("dragend", this.onWindowDragEnd), i?.({
			event: e,
			node: Z(t)
		});
	};
	onNodeDragEnter = (e, t) => {
		let { expandedKeys: n, keyEntities: r, dragChildrenKeys: i, flattenNodes: a, indent: o } = this.state, { onDragEnter: s, onExpand: c, allowDrop: l, direction: u } = this.props, { pos: d, eventKey: f } = t;
		if (this.currentMouseOverDroppableNodeKey !== f && (this.currentMouseOverDroppableNodeKey = f), !this.dragNodeProps) {
			this.resetDragState();
			return;
		}
		let { dropPosition: p, dropLevelOffset: m, dropTargetKey: h, dropContainerKey: g, dropTargetPos: _, dropAllowed: v, dragOverNodeKey: y } = lt(e, this.dragNodeProps, t, o, this.dragStartMousePosition, l, a, r, n, u);
		if (i.includes(h) || !v) {
			this.resetDragState();
			return;
		}
		if (this.delayedDragEnterLogic ||= {}, Object.keys(this.delayedDragEnterLogic).forEach((e) => {
			clearTimeout(this.delayedDragEnterLogic[e]);
		}), this.dragNodeProps.eventKey !== t.eventKey && (e.persist(), this.delayedDragEnterLogic[d] = window.setTimeout(() => {
			if (this.state.draggingNodeKey === null) return;
			let i = [...n], a = Y(r, t.eventKey);
			a && (a.children || []).length && (i = $(n, t.eventKey)), this.props.hasOwnProperty("expandedKeys") || this.setExpandedKeys(i), c?.(i, {
				node: Z(t),
				expanded: !0,
				nativeEvent: e.nativeEvent
			});
		}, 800)), this.dragNodeProps.eventKey === h && m === 0) {
			this.resetDragState();
			return;
		}
		this.setState({
			dragOverNodeKey: y,
			dropPosition: p,
			dropLevelOffset: m,
			dropTargetKey: h,
			dropContainerKey: g,
			dropTargetPos: _,
			dropAllowed: v
		}), s?.({
			event: e,
			node: Z(t),
			expandedKeys: n
		});
	};
	onNodeDragOver = (e, t) => {
		let { dragChildrenKeys: n, flattenNodes: r, keyEntities: i, expandedKeys: a, indent: o } = this.state, { onDragOver: s, allowDrop: c, direction: l } = this.props;
		if (!this.dragNodeProps) return;
		let { dropPosition: u, dropLevelOffset: d, dropTargetKey: f, dropContainerKey: p, dropTargetPos: m, dropAllowed: h, dragOverNodeKey: g } = lt(e, this.dragNodeProps, t, o, this.dragStartMousePosition, c, r, i, a, l);
		n.includes(f) || !h || (this.dragNodeProps.eventKey === f && d === 0 ? this.state.dropPosition === null && this.state.dropLevelOffset === null && this.state.dropTargetKey === null && this.state.dropContainerKey === null && this.state.dropTargetPos === null && this.state.dropAllowed === !1 && this.state.dragOverNodeKey === null || this.resetDragState() : u === this.state.dropPosition && d === this.state.dropLevelOffset && f === this.state.dropTargetKey && p === this.state.dropContainerKey && m === this.state.dropTargetPos && h === this.state.dropAllowed && g === this.state.dragOverNodeKey || this.setState({
			dropPosition: u,
			dropLevelOffset: d,
			dropTargetKey: f,
			dropContainerKey: p,
			dropTargetPos: m,
			dropAllowed: h,
			dragOverNodeKey: g
		}), s?.({
			event: e,
			node: Z(t)
		}));
	};
	onNodeDragLeave = (e, t) => {
		this.currentMouseOverDroppableNodeKey === t.eventKey && !e.currentTarget.contains(e.relatedTarget) && (this.resetDragState(), this.currentMouseOverDroppableNodeKey = null);
		let { onDragLeave: n } = this.props;
		n?.({
			event: e,
			node: Z(t)
		});
	};
	onWindowDragEnd = (e) => {
		this.onNodeDragEnd(e, null, !0), window.removeEventListener("dragend", this.onWindowDragEnd);
	};
	onNodeDragEnd = (e, t) => {
		let { onDragEnd: n } = this.props;
		this.setState({ dragOverNodeKey: null }), this.cleanDragState(), n?.({
			event: e,
			node: Z(t)
		}), this.dragNodeProps = null, window.removeEventListener("dragend", this.onWindowDragEnd);
	};
	onNodeDrop = (e, t, r = !1) => {
		let { dragChildrenKeys: i, dropPosition: a, dropTargetKey: o, dropTargetPos: s, dropAllowed: c } = this.state;
		if (!c) return;
		let { onDrop: l } = this.props;
		if (this.setState({ dragOverNodeKey: null }), this.cleanDragState(), o === null) return;
		let u = {
			...Be(o, this.getTreeNodeRequiredProps()),
			active: this.getActiveItem()?.key === o,
			data: Y(this.state.keyEntities, o).node
		};
		n(!i.includes(o), "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
		let d = at(s), f = {
			event: e,
			node: Z(u),
			dragNode: this.dragNodeProps ? Z(this.dragNodeProps) : null,
			dragNodesKeys: [this.dragNodeProps.eventKey].concat(i),
			dropToGap: a !== 0,
			dropPosition: a + Number(d[d.length - 1])
		};
		r || l?.(f), this.dragNodeProps = null;
	};
	resetDragState() {
		this.setState({
			dragOverNodeKey: null,
			dropPosition: null,
			dropLevelOffset: null,
			dropTargetKey: null,
			dropContainerKey: null,
			dropTargetPos: null,
			dropAllowed: !1
		});
	}
	cleanDragState = () => {
		let { draggingNodeKey: e } = this.state;
		e !== null && this.setState({
			draggingNodeKey: null,
			dropPosition: null,
			dropContainerKey: null,
			dropTargetKey: null,
			dropLevelOffset: null,
			dropAllowed: !0,
			dragOverNodeKey: null
		}), this.dragStartMousePosition = null, this.currentMouseOverDroppableNodeKey = null;
	};
	triggerExpandActionExpand = (e, t) => {
		let { expandedKeys: n, flattenNodes: r } = this.state, { expanded: i, key: a, isLeaf: o } = t;
		if (o || e.shiftKey || e.metaKey || e.ctrlKey) return;
		let s = r.filter((e) => e.key === a)[0], c = Z({
			...Be(a, this.getTreeNodeRequiredProps()),
			data: s.data
		});
		this.setExpandedKeys(i ? Q(n, a) : $(n, a)), this.onNodeExpand(e, c);
	};
	onNodeClick = (e, t) => {
		let { onClick: n, expandAction: r } = this.props;
		r === "click" && this.triggerExpandActionExpand(e, t), n?.(e, t);
	};
	onNodeDoubleClick = (e, t) => {
		let { onDoubleClick: n, expandAction: r } = this.props;
		r === "doubleClick" && this.triggerExpandActionExpand(e, t), n?.(e, t);
	};
	onNodeSelect = (e, t) => {
		let { selectedKeys: n } = this.state, { keyEntities: r, fieldNames: i } = this.state, { onSelect: a, multiple: o } = this.props, { selected: s } = t, c = t[i.key], l = !s;
		n = l ? o ? $(n, c) : [c] : Q(n, c);
		let u = n.map((e) => {
			let t = Y(r, e);
			return t ? t.node : null;
		}).filter(Boolean);
		this.setUncontrolledState({ selectedKeys: n }), a?.(n, {
			event: "select",
			selected: l,
			node: t,
			selectedNodes: u,
			nativeEvent: e.nativeEvent
		});
	};
	onNodeCheck = (e, t, n) => {
		let { keyEntities: r, checkedKeys: i, halfCheckedKeys: a } = this.state, { checkStrictly: o, onCheck: s } = this.props, { key: c } = t, l, u = {
			event: "check",
			node: t,
			checked: n,
			nativeEvent: e.nativeEvent
		};
		if (o) {
			let e = n ? $(i, c) : Q(i, c);
			l = {
				checked: e,
				halfChecked: Q(a, c)
			}, u.checkedNodes = e.map((e) => Y(r, e)).filter(Boolean).map((e) => e.node), this.setUncontrolledState({ checkedKeys: e });
		} else {
			let { checkedKeys: e, halfCheckedKeys: t } = _t([...i, c], !0, r);
			if (!n) {
				let n = new Set(e);
				n.delete(c), {checkedKeys: e, halfCheckedKeys: t} = _t(Array.from(n), {
					checked: !1,
					halfCheckedKeys: t
				}, r);
			}
			l = e, u.checkedNodes = [], u.checkedNodesPositions = [], u.halfCheckedKeys = t, e.forEach((e) => {
				let t = Y(r, e);
				if (!t) return;
				let { node: n, pos: i } = t;
				u.checkedNodes.push(n), u.checkedNodesPositions.push({
					node: n,
					pos: i
				});
			}), this.setUncontrolledState({ checkedKeys: e }, !1, { halfCheckedKeys: t });
		}
		s?.(l, u);
	};
	onNodeLoad = (e) => {
		let { key: t } = e, { keyEntities: r } = this.state;
		if (Y(r, t)?.children?.length) return;
		let i = new Promise((r, i) => {
			this.setState(({ loadedKeys: a = [], loadingKeys: o = [] }) => {
				let { loadData: s, onLoad: c } = this.props;
				return !s || a.includes(t) || o.includes(t) ? null : (s(e).then(() => {
					let { loadedKeys: n } = this.state, i = $(n, t);
					c?.(i, {
						event: "load",
						node: e
					}), this.setUncontrolledState({ loadedKeys: i }), this.setState((e) => ({ loadingKeys: Q(e.loadingKeys, t) })), r();
				}).catch((e) => {
					if (this.setState((e) => ({ loadingKeys: Q(e.loadingKeys, t) })), this.loadingRetryTimes[t] = (this.loadingRetryTimes[t] || 0) + 1, this.loadingRetryTimes[t] >= yt) {
						let { loadedKeys: e } = this.state;
						n(!1, "Retry for `loadData` many times but still failed. No more retry."), this.setUncontrolledState({ loadedKeys: $(e, t) }), r();
					}
					i(e);
				}), { loadingKeys: $(o, t) });
			});
		});
		return i.catch(() => {}), i;
	};
	onNodeMouseEnter = (e, t) => {
		let { onMouseEnter: n } = this.props;
		n?.({
			event: e,
			node: t
		});
	};
	onNodeMouseLeave = (e, t) => {
		let { onMouseLeave: n } = this.props;
		n?.({
			event: e,
			node: t
		});
	};
	onNodeContextMenu = (e, t) => {
		let { onRightClick: n } = this.props;
		n && (e.preventDefault(), n({
			event: e,
			node: t
		}));
	};
	onMouseDown = (e) => {
		this.focusedByMouse = !0;
		let { onMouseDown: t } = this.props;
		t?.(e);
	};
	onGlobalMouseUp = () => {
		this.focusedByMouse = !1;
	};
	onFocus = (...e) => {
		let { onFocus: t, disabled: n } = this.props, { activeKey: r, selectedKeys: i, flattenNodes: a } = this.state;
		if (!this.focusedByMouse && !n && r === null) {
			let e = i.find((e) => a.some((t) => t.key === e));
			e === void 0 ? this.onActiveChange(a?.[0]?.key || null) : this.onActiveChange(e);
		}
		t?.(...e);
	};
	onBlur = (...e) => {
		let { onBlur: t } = this.props;
		this.onActiveChange(null), t?.(...e);
	};
	getTreeNodeRequiredProps = () => {
		let { expandedKeys: e, selectedKeys: t, loadedKeys: n, loadingKeys: r, checkedKeys: i, halfCheckedKeys: a, dragOverNodeKey: o, dropPosition: s, keyEntities: c } = this.state;
		return {
			expandedKeys: e || [],
			selectedKeys: t || [],
			loadedKeys: n || [],
			loadingKeys: r || [],
			checkedKeys: i || [],
			halfCheckedKeys: a || [],
			dragOverNodeKey: o,
			dropPosition: s,
			keyEntities: c
		};
	};
	setExpandedKeys = (e) => {
		let { treeData: t, fieldNames: n } = this.state, r = Ie(t, e, n);
		this.setUncontrolledState({
			expandedKeys: e,
			flattenNodes: r
		}, !0);
	};
	onNodeExpand = (e, t) => {
		let { expandedKeys: r } = this.state, { listChanging: i, fieldNames: a } = this.state, { onExpand: o, loadData: s } = this.props, { expanded: c } = t, l = t[a.key];
		if (i) return;
		let u = r.includes(l), d = !c;
		if (n(c && u || !c && !u, "Expand state not sync with index check"), r = d ? $(r, l) : Q(r, l), this.setExpandedKeys(r), o?.(r, {
			node: t,
			expanded: d,
			nativeEvent: e.nativeEvent
		}), d && s) {
			let e = this.onNodeLoad(t);
			e && e.then(() => {
				let e = Ie(this.state.treeData, r, a);
				this.setUncontrolledState({ flattenNodes: e });
			}).catch(() => {
				let { expandedKeys: e } = this.state, t = Q(e, l);
				this.setExpandedKeys(t);
			});
		}
	};
	onListChangeStart = () => {
		this.setUncontrolledState({ listChanging: !0 });
	};
	onListChangeEnd = () => {
		setTimeout(() => {
			this.setUncontrolledState({ listChanging: !1 });
		});
	};
	onActiveChange = (e) => {
		let { activeKey: t } = this.state, { onActiveChange: n, itemScrollOffset: r = 0 } = this.props;
		t !== e && (this.setState({ activeKey: e }), e !== null && this.scrollTo({
			key: e,
			offset: r
		}), n?.(e));
	};
	getActiveItem = () => {
		let { activeKey: e, flattenNodes: t } = this.state;
		return e === null ? null : t.find(({ key: t }) => t === e) || null;
	};
	offsetActiveKey = (e) => {
		let { flattenNodes: t, activeKey: n } = this.state, r = t.findIndex(({ key: e }) => e === n);
		r === -1 && e < 0 && (r = t.length), r = (r + e + t.length) % t.length;
		let i = t[r];
		if (i) {
			let { key: e } = i;
			this.onActiveChange(e);
		} else this.onActiveChange(null);
	};
	onKeyDown = (e) => {
		let { activeKey: t, expandedKeys: n, checkedKeys: r, flattenNodes: i, keyEntities: a } = this.state, { onKeyDown: o, checkable: s, selectable: c, disabled: l, loadData: u } = this.props;
		if (l) return;
		switch (e.key) {
			case "ArrowUp":
				this.offsetActiveKey(-1), e.preventDefault();
				break;
			case "ArrowDown":
				this.offsetActiveKey(1), e.preventDefault();
				break;
			case "Home":
				this.onActiveChange(i?.[0]?.key), e.preventDefault();
				break;
			case "End":
				this.onActiveChange(i?.[i.length - 1]?.key), e.preventDefault();
				break;
		}
		let d = this.getActiveItem();
		if (d && d.data) {
			let i = Z({
				...Be(t, this.getTreeNodeRequiredProps()),
				data: d.data,
				active: !0
			}), o = !!Y(a, t)?.children?.length, l = !ze(d.data.isLeaf, u, o, i.loaded), f = s && !i.disabled && i.checkable !== !1 && !i.disableCheckbox, p = !s && c && !i.disabled && i.selectable !== !1;
			switch (e.key) {
				case "ArrowLeft":
					l && n.includes(t) ? this.onNodeExpand({}, i) : d.parent && this.onActiveChange(d.parent.key), e.preventDefault();
					break;
				case "ArrowRight":
					l && !n.includes(t) ? this.onNodeExpand({}, i) : d.children && d.children.length && this.onActiveChange(d.children[0].key), e.preventDefault();
					break;
				case "Enter":
					l ? (e.preventDefault(), this.onNodeExpand({}, i)) : f ? r.includes(t) || (e.preventDefault(), this.onNodeCheck({}, i, !0)) : p && !i.selected && (e.preventDefault(), this.onNodeSelect({}, i));
					break;
				case " ":
					f ? (e.preventDefault(), this.onNodeCheck({}, i, !r.includes(t))) : p && (e.preventDefault(), this.onNodeSelect({}, i));
					break;
			}
		}
		o?.(e);
	};
	setUncontrolledState = (e, t = !1, n = null) => {
		if (!this.destroyed) {
			let r = !1, i = !0, a = {};
			Object.keys(e).forEach((t) => {
				if (this.props.hasOwnProperty(t)) {
					i = !1;
					return;
				}
				r = !0, a[t] = e[t];
			}), r && (!t || i) && this.setState({
				...a,
				...n
			});
		}
	};
	scrollTo = (e) => {
		this.listRef.current.scrollTo(e);
	};
	render() {
		let { flattenNodes: e, keyEntities: t, draggingNodeKey: n, dropLevelOffset: i, dropContainerKey: a, dropTargetKey: s, dropPosition: c, dragOverNodeKey: l, indent: u } = this.state, { prefixCls: d, className: f, style: p, styles: m, classNames: h, showLine: g, focusable: _, tabIndex: v = 0, selectable: y, showIcon: b, icon: x, switcherIcon: S, draggable: C, checkable: w, checkStrictly: T, disabled: E, motion: D, loadData: O, filterTreeNode: k, height: ee, itemHeight: A, scrollWidth: j, virtual: M, titleRender: N, dropIndicatorRender: P, onContextMenu: F, onScroll: I, direction: L, rootClassName: R, rootStyle: z } = this.props, B = r(this.props, {
			aria: !0,
			data: !0
		}), V;
		C && (V = typeof C == "object" ? C : typeof C == "function" ? { nodeDraggable: C } : {});
		let H = {
			styles: m,
			classNames: h,
			prefixCls: d,
			selectable: y,
			showIcon: b,
			icon: x,
			switcherIcon: S,
			draggable: V,
			draggingNodeKey: n,
			checkable: w,
			checkStrictly: T,
			disabled: E,
			keyEntities: t,
			dropLevelOffset: i,
			dropContainerKey: a,
			dropTargetKey: s,
			dropPosition: c,
			dragOverNodeKey: l,
			indent: u,
			direction: L,
			dropIndicatorRender: P,
			loadData: O,
			filterTreeNode: k,
			titleRender: N,
			onNodeClick: this.onNodeClick,
			onNodeDoubleClick: this.onNodeDoubleClick,
			onNodeExpand: this.onNodeExpand,
			onNodeSelect: this.onNodeSelect,
			onNodeCheck: this.onNodeCheck,
			onNodeLoad: this.onNodeLoad,
			onNodeMouseEnter: this.onNodeMouseEnter,
			onNodeMouseLeave: this.onNodeMouseLeave,
			onNodeContextMenu: this.onNodeContextMenu,
			onNodeDragStart: this.onNodeDragStart,
			onNodeDragEnter: this.onNodeDragEnter,
			onNodeDragOver: this.onNodeDragOver,
			onNodeDragLeave: this.onNodeDragLeave,
			onNodeDragEnd: this.onNodeDragEnd,
			onNodeDrop: this.onNodeDrop
		};
		return /*#__PURE__*/ G.createElement(ke.Provider, { value: H }, /*#__PURE__*/ G.createElement("div", {
			className: o(d, f, R, { [`${d}-show-line`]: g }),
			style: z
		}, /*#__PURE__*/ G.createElement(it, vt({
			ref: this.listRef,
			prefixCls: d,
			style: p,
			data: e,
			disabled: E,
			selectable: y,
			checkable: !!w,
			motion: D,
			dragging: n !== null,
			height: ee,
			itemHeight: A,
			virtual: M,
			focusable: _,
			tabIndex: v,
			activeItem: this.getActiveItem(),
			onFocus: this.onFocus,
			onMouseDown: this.onMouseDown,
			onBlur: this.onBlur,
			onKeyDown: this.onKeyDown,
			onActiveChange: this.onActiveChange,
			onListChangeStart: this.onListChangeStart,
			onListChangeEnd: this.onListChangeEnd,
			onContextMenu: F,
			onScroll: I,
			scrollWidth: j
		}, this.getTreeNodeRequiredProps(), B))));
	}
}, xt = ((e, t) => {
	let n = G.useRef({
		options: [],
		info: {
			keyEntities: {},
			pathKeyEntities: {}
		}
	});
	return G.useCallback(() => (n.current.options !== e && (n.current.options = e, n.current.info = Re(e, {
		fieldNames: t,
		initWrapper: (e) => ({
			...e,
			pathKeyEntities: {}
		}),
		processEntity: (e, n) => {
			let r = e.nodes.map((e) => e[t.value]).join(me);
			n.pathKeyEntities[r] = e, e.key = r;
		}
	})), n.current.info.pathKeyEntities), [t, e]);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/hooks/useOptions.js
function St(e, t) {
	let n = G.useMemo(() => t || [], [t]), r = xt(n, e);
	return [
		n,
		r,
		G.useCallback((t) => {
			let n = r();
			return t.map((t) => {
				let { nodes: r } = n[t];
				return r.map((t) => t[e.value]);
			});
		}, [r, e])
	];
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/hooks/useSearchConfig.js
function Ct(e, t) {
	let { autoClearSearchValue: n, searchValue: r, onSearch: i } = t;
	return G.useMemo(() => {
		if (!e) return [!1, {}];
		let t = {
			matchInputWidth: !0,
			limit: 50,
			autoClearSearchValue: n,
			searchValue: r,
			onSearch: i
		};
		return e && typeof e == "object" && (t = {
			...t,
			...e
		}), t.limit <= 0 && (t.limit = !1), [!0, t];
	}, [
		e,
		n,
		r,
		i
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/hooks/useSelect.js
function wt(e, t, n, r, i, a, o, s) {
	return (c) => {
		if (!e) t(c);
		else {
			let e = q(c), l = _e(n), u = _e(r), d = l.includes(e), f = i.some((t) => q(t) === e), p = n, m = i;
			if (f && !d) m = i.filter((t) => q(t) !== e);
			else {
				let t = d ? l.filter((t) => t !== e) : [...l, e], n = a(), r;
				d ? {checkedKeys: r} = _t(t, {
					checked: !1,
					halfCheckedKeys: u
				}, n) : {checkedKeys: r} = _t(t, !0, n), p = o(Te(r, a, s));
			}
			t([...m, ...p]);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/hooks/useValues.js
function Tt(e, t, n, r, i) {
	return G.useMemo(() => {
		let [a, o] = i(t);
		if (!e || !t.length) return [
			a,
			[],
			o
		];
		let { checkedKeys: s, halfCheckedKeys: c } = _t(_e(a), !0, n());
		return [
			r(s),
			r(c),
			o
		];
	}, [
		e,
		t,
		n,
		r,
		i
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/OptionList/Checkbox.js
function Et({ prefixCls: e, checked: t, halfChecked: n, disabled: r, onClick: i, disableCheckbox: a }) {
	let { checkable: s } = G.useContext(ue), c = typeof s == "boolean" ? null : s;
	return /*#__PURE__*/ G.createElement("span", {
		className: o(`${e}`, {
			[`${e}-checked`]: t,
			[`${e}-indeterminate`]: !t && n,
			[`${e}-disabled`]: r || a
		}),
		onClick: i
	}, c);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/OptionList/Column.js
function Dt() {
	return Dt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Dt.apply(this, arguments);
}
var Ot = "__cascader_fix_label__";
function kt({ prefixCls: e, multiple: t, options: n, activeValue: i, prevValuePath: a, onToggleOpen: s, onSelect: c, onActive: l, checkedSet: u, halfCheckedSet: d, loadingKeys: f, isSelectable: p, disabled: m }) {
	let h = `${e}-menu`, g = `${e}-menu-item`, _ = G.useRef(null), { fieldNames: v, changeOnSelect: y, expandTrigger: b, expandIcon: x, loadingIcon: S, popupMenuColumnStyle: C, optionRender: w, classNames: T, styles: E } = G.useContext(ue), D = b === "hover", O = (e) => m || e, k = G.useMemo(() => n.map((e) => {
		let { disabled: t, disableCheckbox: n } = e, r = e[K], i = e.__cascader_fix_label__ ?? e[v.label], o = e[v.value], s = be(e, v), c = r ? r.map((e) => e[v.value]) : [...a, o], l = q(c);
		return {
			disabled: t,
			label: i,
			value: o,
			isLeaf: s,
			isLoading: f.includes(l),
			checked: u.has(l),
			halfChecked: d.has(l),
			option: e,
			disableCheckbox: n,
			fullPath: c,
			fullPathKey: l
		};
	}), [
		n,
		u,
		v,
		d,
		f,
		a
	]);
	return G.useEffect(() => {
		if (_.current) {
			let e = `.${g}-active`, t = _.current.querySelector(e);
			t && xe(t);
		}
	}, [i, g]), /*#__PURE__*/ G.createElement("ul", {
		className: o(h, T?.popup?.list),
		style: E?.popup?.list,
		ref: _,
		role: "menu"
	}, k.map(({ disabled: n, label: a, value: u, isLeaf: d, isLoading: f, checked: m, halfChecked: h, option: _, fullPath: v, fullPathKey: b, disableCheckbox: k }) => {
		let ee = r(_, {
			aria: !0,
			data: !0
		}), A = () => {
			if (O(n)) return;
			let e = [...v];
			D && d && e.pop(), l(e);
		}, j = () => {
			p(_) && !O(n) && c(v, d);
		}, M;
		return typeof _.title == "string" ? M = _.title : typeof a == "string" && (M = a), /*#__PURE__*/ G.createElement("li", Dt({ key: b }, ee, {
			className: o(g, T?.popup?.listItem, {
				[`${g}-expand`]: !d,
				[`${g}-active`]: i === u || i === b,
				[`${g}-disabled`]: O(n),
				[`${g}-loading`]: f
			}),
			style: {
				...C,
				...E?.popup?.listItem
			},
			role: "menuitemcheckbox",
			title: M,
			"aria-checked": m,
			"data-path-key": b,
			onClick: () => {
				A(), !k && (!t || d) && j();
			},
			onDoubleClick: () => {
				y && s(!1);
			},
			onMouseEnter: () => {
				D && A();
			},
			onMouseDown: (e) => {
				e.preventDefault();
			}
		}), t && /*#__PURE__*/ G.createElement(Et, {
			prefixCls: `${e}-checkbox`,
			checked: m,
			halfChecked: h,
			disabled: O(n) || k,
			disableCheckbox: k,
			onClick: (e) => {
				k || (e.stopPropagation(), j());
			}
		}), /*#__PURE__*/ G.createElement("div", { className: `${g}-content` }, w && u !== "__EMPTY__" ? w(_) : a), !f && x && !d && /*#__PURE__*/ G.createElement("div", { className: `${g}-expand-icon` }, x), f && S && /*#__PURE__*/ G.createElement("div", { className: `${g}-loading-icon` }, S));
	}));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/OptionList/useActive.js
var At = (e, t) => {
	let { values: n } = G.useContext(ue), r = n[0], [i, a] = G.useState([]);
	return G.useEffect(() => {
		e || a(r || []);
	}, [t, r]), [i, a];
}, jt = ((e, t, n, r, a, o, s) => {
	let { direction: c, searchValue: l, toggleOpen: u, open: d } = s, f = c === "rtl", [p, m, h, g] = G.useMemo(() => {
		let e = -1, i = t, a = [], o = [], s = r.length, c = Se(t, n);
		for (let t = 0; t < s && i; t += 1) {
			let s = i.findIndex((e, i) => (c[i] ? q(c[i]) : e[n.value]) === r[t]);
			if (s === -1) break;
			e = s, a.push(e), o.push(r[t]), i = i[e][n.children];
		}
		let l = t;
		for (let e = 0; e < a.length - 1; e += 1) l = l[a[e]][n.children];
		return [
			o,
			e,
			l,
			c
		];
	}, [
		r,
		n,
		t
	]), _ = (e) => {
		a(e);
	}, v = (e) => {
		let t = h.length, r = m;
		r === -1 && e < 0 && (r = t);
		for (let i = 0; i < t; i += 1) {
			r = (r + e + t) % t;
			let i = h[r];
			if (i && !i.disabled) {
				_(p.slice(0, -1).concat(g[r] ? q(g[r]) : i[n.value]));
				return;
			}
		}
	}, y = () => {
		p.length > 1 ? _(p.slice(0, -1)) : u(!1);
	}, b = () => {
		let e = (h[m]?.[n.children] || []).find((e) => !e.disabled);
		e && _([...p, e[n.value]]);
	};
	G.useImperativeHandle(e, () => ({
		onKeyDown: (e) => {
			let { which: t } = e;
			switch (t) {
				case i.UP:
				case i.DOWN: {
					let e = 0;
					t === i.UP ? e = -1 : t === i.DOWN && (e = 1), e !== 0 && v(e);
					break;
				}
				case i.LEFT:
					if (l) break;
					f ? b() : y();
					break;
				case i.RIGHT:
					if (l) break;
					f ? y() : b();
					break;
				case i.BACKSPACE:
					l || y();
					break;
				case i.ENTER:
					if (p.length) {
						let e = h[m]?.__rc_cascader_search_mark__ || [];
						e.length ? o(e.map((e) => e[n.value]), e[e.length - 1]) : o(p, h[m]);
					}
					break;
				case i.ESC: u(!1), d && e.stopPropagation();
			}
		},
		onKeyUp: () => {}
	}));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/OptionList/List.js
function Mt() {
	return Mt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Mt.apply(this, arguments);
}
var Nt = /*#__PURE__*/ G.forwardRef((e, t) => {
	let { prefixCls: n, multiple: r, searchValue: i, toggleOpen: a, notFoundContent: s, direction: c, open: l, disabled: u, lockOptions: d = !1 } = e, f = G.useRef(null), p = c === "rtl", { options: m, values: h, halfValues: g, fieldNames: _, changeOnSelect: v, onSelect: b, searchOptions: x, popupPrefixCls: S, loadData: C, expandTrigger: w } = G.useContext(ue), T = S || n, [E, D] = G.useState([]), O = (e) => {
		if (!C || i) return;
		let t = Ee(e, m, _).map(({ option: e }) => e), n = t[t.length - 1];
		if (n && !be(n, _)) {
			let n = q(e);
			D((e) => [...e, n]), C(t);
		}
	};
	G.useEffect(() => {
		E.length && E.forEach((e) => {
			let t = Ee(ve(e), m, _, !0).map(({ option: e }) => e), n = t[t.length - 1];
			(!n || n[_.children] || be(n, _)) && D((t) => t.filter((t) => t !== e));
		});
	}, [
		m,
		E,
		_
	]);
	let k = G.useMemo(() => new Set(_e(h)), [h]), ee = G.useMemo(() => new Set(_e(g)), [g]), [A, j] = At(r, l), M = (e) => {
		j(e), O(e);
	}, N = (e) => {
		if (u) return !1;
		let { disabled: t } = e, n = be(e, _);
		return !t && (n || v || r);
	}, P = (e, t, n = !1) => {
		b(e), !r && (t || v && (w === "hover" || n)) && a(!1);
	}, F = G.useMemo(() => i ? x : m, [
		i,
		x,
		m
	]), I = y(() => F, [l, d], (e, t) => !!t[0] && !t[1]), L = G.useMemo(() => {
		let e = [{ options: I }], t = I, n = Se(t, _);
		for (let r = 0; r < A.length; r += 1) {
			let i = A[r], a = t.find((e, t) => (n[t] ? q(n[t]) : e[_.value]) === i)?.[_.children];
			if (!a?.length) break;
			t = a, e.push({ options: a });
		}
		return e;
	}, [
		I,
		A,
		_
	]);
	jt(t, I, _, A, M, (e, t) => {
		N(t) && P(e, be(t, _), !0);
	}, {
		direction: c,
		searchValue: i,
		toggleOpen: a,
		open: l
	}), G.useEffect(() => {
		if (!i) for (let e = 0; e < A.length; e += 1) {
			let t = q(A.slice(0, e + 1)), n = f.current?.querySelector(`li[data-path-key="${t.replace(/\\{0,2}"/g, "\\\"")}"]`);
			n && xe(n);
		}
	}, [A, i]);
	let R = !L[0]?.options?.length, z = [{
		[_.value]: "__EMPTY__",
		[Ot]: s,
		disabled: !0
	}], B = {
		...e,
		multiple: !R && r,
		onSelect: P,
		onActive: M,
		onToggleOpen: a,
		checkedSet: k,
		halfCheckedSet: ee,
		loadingKeys: E,
		isSelectable: N
	}, V = (R ? [{ options: z }] : L).map((e, t) => {
		let n = A.slice(0, t), r = A[t];
		return /*#__PURE__*/ G.createElement(kt, Mt({ key: t }, B, {
			prefixCls: T,
			options: e.options,
			prevValuePath: n,
			activeValue: r
		}));
	});
	return /*#__PURE__*/ G.createElement("div", {
		className: o(`${T}-menus`, {
			[`${T}-menu-empty`]: R,
			[`${T}-rtl`]: p
		}),
		ref: f
	}, V);
});
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/OptionList/index.js
function Pt() {
	return Pt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Pt.apply(this, arguments);
}
var Ft = /*#__PURE__*/ G.forwardRef((e, t) => {
	let { lockOptions: n, ...r } = W();
	return /*#__PURE__*/ G.createElement(Nt, Pt({}, e, r, {
		lockOptions: n,
		ref: t
	}));
});
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/Panel.js
function It() {}
function Lt(e) {
	let { prefixCls: t = "rc-cascader", style: n, className: r, options: i, checkable: a, defaultValue: s, value: c, fieldNames: l, changeOnSelect: d, onChange: f, showCheckedStrategy: p, loadData: m, expandTrigger: h, expandIcon: g = ">", loadingIcon: v, direction: y, notFoundContent: b = "Not Found", disabled: x, optionRender: S } = e, C = !!a, [w, T] = _(s, c), E = we(w), D = G.useMemo(() => ye(l), [JSON.stringify(l)]), [O, k, ee] = St(D, i), [A, j, M] = Tt(C, E, k, ee, Oe(O, D)), N = wt(C, u((e) => {
		if (T(e), f) {
			let t = we(e), n = t.map((e) => Ee(e, O, D).map((e) => e.option));
			f(C ? t : t[0], C ? n : n[0]);
		}
	}), A, j, M, k, ee, p), P = u((e) => {
		N(e);
	}), F = G.useMemo(() => ({
		options: O,
		fieldNames: D,
		values: A,
		halfValues: j,
		changeOnSelect: d,
		onSelect: P,
		checkable: a,
		searchOptions: [],
		popupPrefixCls: void 0,
		loadData: m,
		expandTrigger: h,
		expandIcon: g,
		loadingIcon: v,
		popupMenuColumnStyle: void 0,
		optionRender: S
	}), [
		O,
		D,
		A,
		j,
		d,
		P,
		a,
		m,
		h,
		g,
		v,
		S
	]), I = `${t}-panel`, L = !O.length;
	return /*#__PURE__*/ G.createElement(ue.Provider, { value: F }, /*#__PURE__*/ G.createElement("div", {
		className: o(I, {
			[`${I}-rtl`]: y === "rtl",
			[`${I}-empty`]: L
		}, r),
		style: n
	}, L ? b : /*#__PURE__*/ G.createElement(Nt, {
		prefixCls: t,
		searchValue: "",
		multiple: C,
		toggleOpen: It,
		open: !0,
		direction: y,
		disabled: x
	})));
}
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/Cascader.js
function Rt() {
	return Rt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Rt.apply(this, arguments);
}
var zt = /*#__PURE__*/ G.forwardRef((e, t) => {
	let { id: n, prefixCls: r = "rc-cascader", fieldNames: i, defaultValue: a, value: o, changeOnSelect: s, onChange: c, displayRender: l, checkable: d, showSearch: f, expandTrigger: p, options: m, popupPrefixCls: g, loadData: v, open: y, popupClassName: b, popupMenuColumnStyle: x, popupStyle: S, classNames: C, styles: w, placement: T, onPopupVisibleChange: E, expandIcon: D = ">", loadingIcon: O, children: k, popupMatchSelectWidth: ee = !1, showCheckedStrategy: A = he, optionRender: j, ...M } = e, N = h(n), P = !!d, [F, I] = _(a, o), L = we(F), R = G.useMemo(() => ye(i), [JSON.stringify(i)]), [z, B, V] = St(R, m), [H, U] = Ct(f, e), { autoClearSearchValue: te = !0, searchValue: ne, onSearch: re } = U, [ae, oe] = _("", ne), se = ae || "", W = (e, t) => {
		oe(e), t.source !== "blur" && re && re(e);
	}, ce = pe(se, z, R, g || r, U, s || P), [le, K, de] = Tt(P, L, B, V, Oe(z, R)), fe = De(G.useMemo(() => {
		let e = Te(_e(le), B, A);
		return [...de, ...V(e)];
	}, [
		le,
		B,
		V,
		de,
		A
	]), z, R, P, l), me = u((e) => {
		if (I(e), c) {
			let t = we(e), n = t.map((e) => Ee(e, z, R).map((e) => e.option));
			c(P ? t : t[0], P ? n : n[0]);
		}
	}), ge = wt(P, me, le, K, de, B, V, A), q = u((e) => {
		(!P || te) && oe(""), ge(e);
	}), ve = (e, t) => {
		if (t.type === "clear") {
			me([]);
			return;
		}
		let { valueCells: n } = t.values[0];
		q(n);
	}, be = (e) => {
		E?.(e);
	}, xe = G.useMemo(() => ({
		classNames: C,
		styles: w,
		options: z,
		fieldNames: R,
		values: le,
		halfValues: K,
		changeOnSelect: s,
		onSelect: q,
		checkable: d,
		searchOptions: ce,
		popupPrefixCls: g,
		loadData: v,
		expandTrigger: p,
		expandIcon: D,
		loadingIcon: O,
		popupMenuColumnStyle: x,
		optionRender: j
	}), [
		C,
		w,
		z,
		R,
		le,
		K,
		s,
		q,
		d,
		ce,
		g,
		v,
		p,
		D,
		O,
		x,
		j
	]), Se = !(se ? ce : z).length, Ce = se && U.matchInputWidth || Se ? {} : { minWidth: "auto" };
	return /*#__PURE__*/ G.createElement(ue.Provider, { value: xe }, /*#__PURE__*/ G.createElement(ie, Rt({}, M, {
		ref: t,
		id: N,
		prefixCls: r,
		autoClearSearchValue: te,
		popupMatchSelectWidth: ee,
		classNames: C,
		styles: w,
		popupStyle: {
			...Ce,
			...S
		},
		displayValues: fe,
		onDisplayValuesChange: ve,
		mode: P ? "multiple" : void 0,
		searchValue: se,
		onSearch: W,
		showSearch: H,
		OptionList: Ft,
		emptyOptions: Se,
		open: y,
		popupClassName: b,
		placement: T,
		onPopupVisibleChange: be,
		getRawInputElement: () => k
	})));
});
zt.SHOW_PARENT = he, zt.SHOW_CHILD = ge, zt.Panel = Lt;
//#endregion
//#region node_modules/.pnpm/@rc-component+cascader@1.16_7b4b2ec2fd285e2781090a8c03770b58/node_modules/@rc-component/cascader/es/index.js
var Bt = zt;
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/cascader/hooks/useBase.js
function Vt(e, t) {
	let { getPrefixCls: n, direction: r, renderEmpty: i } = G.useContext(N), a = t || r;
	return [
		n("select", e),
		n("cascader", e),
		a,
		i
	];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/cascader/hooks/useCheckable.js
function Ht(e, t) {
	return G.useMemo(() => t ? /*#__PURE__*/ G.createElement("span", { className: `${e}-checkbox-inner` }) : !1, [e, t]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/cascader/hooks/useIcons.js
var Ut = /*#__PURE__*/ G.createElement(g, { spin: !0 }), Wt = /*#__PURE__*/ G.createElement(m, null), Gt = /*#__PURE__*/ G.createElement(c, null);
function Kt({ contextExpandIcon: e, contextLoadingIcon: t, expandIcon: n, loadingIcon: r, isRtl: i }) {
	return G.useMemo(() => ({
		expandIcon: n ?? e ?? (i ? Gt : Wt),
		loadingIcon: r ?? t ?? Ut
	}), [
		e,
		t,
		n,
		i,
		r
	]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/checkbox/style/index.js
var qt = (e) => {
	let { checkboxCls: t, checkboxSize: n, lineWidth: r } = e, i = `${t}-wrapper`, a = "@media (hover: hover) and (pointer: fine)";
	return [
		{
			[`${t}-group`]: {
				...B(e),
				display: "inline-flex",
				flexWrap: "wrap",
				columnGap: e.marginXS,
				[`> ${e.antCls}-row`]: { flex: 1 }
			},
			[i]: {
				...B(e),
				display: "inline-flex",
				alignItems: "baseline",
				cursor: "pointer",
				"&:after": {
					display: "inline-block",
					width: 0,
					overflow: "hidden",
					content: "'\\a0'"
				},
				[`& + ${i}`]: { marginInlineStart: 0 }
			},
			[t]: {
				...B(e),
				position: "relative",
				whiteSpace: "nowrap",
				lineHeight: 1,
				cursor: "pointer",
				alignSelf: "center",
				boxSizing: "border-box",
				display: "block",
				width: n,
				height: n,
				direction: "ltr",
				backgroundColor: e.colorBgContainer,
				border: `${f(r)} ${e.lineType} ${e.colorBorder}`,
				borderRadius: e.borderRadiusSM,
				borderCollapse: "separate",
				transition: `all ${e.motionDurationSlow}`,
				flex: "none",
				...w(),
				"&:after": {
					boxSizing: "border-box",
					position: "absolute",
					top: `calc(${n} / 2 - ${r})`,
					insetInlineStart: `calc(${n} / 4 - ${r})`,
					display: "table",
					width: e.calc(n).div(14).mul(5).equal(),
					height: e.calc(n).div(14).mul(8).equal(),
					border: `${f(e.lineWidthBold)} solid ${e.colorWhite}`,
					borderTop: 0,
					borderInlineStart: 0,
					transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
					opacity: 0,
					content: "\"\"",
					transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`,
					...w()
				},
				[`${t}-input`]: {
					position: "absolute",
					inset: `calc(-1 * (${r}))`,
					zIndex: 1,
					cursor: "pointer",
					opacity: 0,
					margin: 0
				},
				[`&:has(${t}-input:focus-visible)`]: te(e),
				"& + span": {
					paddingInlineStart: e.paddingXS,
					paddingInlineEnd: e.paddingXS
				}
			}
		},
		{ [a]: {
			[`
          ${i}:not(${i}-disabled),
          ${t}:not(${t}-disabled)
        `]: { [`&:hover ${t}`]: { borderColor: e.colorPrimary } },
			[`${i}:not(${i}-disabled)`]: { [`&:hover ${t}-checked:not(${t}-disabled)`]: {
				backgroundColor: e.colorPrimaryHover,
				borderColor: "transparent"
			} }
		} },
		{ [`${t}-checked`]: {
			backgroundColor: e.colorPrimary,
			borderColor: e.colorPrimary,
			"&:after": {
				opacity: 1,
				transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
				transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`,
				...w()
			},
			[a]: { [`&:not(${t}-disabled):hover`]: {
				backgroundColor: e.colorPrimaryHover,
				borderColor: "transparent"
			} }
		} },
		{ [t]: { "&-indeterminate": {
			backgroundColor: e.colorBgContainer,
			borderColor: e.colorBorder,
			"&:after": {
				top: "50%",
				insetInlineStart: "50%",
				width: e.calc(e.fontSizeLG).div(2).equal(),
				height: e.calc(e.fontSizeLG).div(2).equal(),
				backgroundColor: e.colorPrimary,
				border: 0,
				transform: "translate(-50%, -50%) scale(1)",
				opacity: 1,
				content: "\"\""
			},
			[a]: { [`&:not(${t}-disabled):hover`]: {
				backgroundColor: e.colorBgContainer,
				borderColor: e.colorPrimary
			} }
		} } },
		{
			[`${i}-disabled`]: { cursor: "not-allowed" },
			[`${t}-disabled`]: {
				[`&, ${t}-input`]: {
					cursor: "not-allowed",
					pointerEvents: "none"
				},
				background: e.colorBgContainerDisabled,
				borderColor: e.colorBorder,
				"&:after": { borderColor: e.colorTextDisabled },
				"& + span": { color: e.colorTextDisabled },
				[`&${t}-indeterminate::after`]: { background: e.colorTextDisabled }
			}
		}
	];
};
function Jt(e, t) {
	return qt(b(t, {
		checkboxCls: `.${e}`,
		checkboxSize: t.controlInteractiveSize
	}));
}
var Yt = H("Checkbox", (e, { prefixCls: t }) => [Jt(t, e)]), Xt = (e) => {
	let { prefixCls: t, componentCls: n } = e, r = `${n}-menu-item`, i = `
  &${r}-expand ${r}-expand-icon,
  ${r}-loading-icon
`;
	return [Jt(`${t}-checkbox`, e), { [n]: {
		"&-checkbox": {
			top: 0,
			marginInlineEnd: e.paddingXS,
			pointerEvents: "unset"
		},
		"&-menus": {
			display: "flex",
			flexWrap: "nowrap",
			alignItems: "flex-start",
			[`&${n}-menu-empty`]: { [`${n}-menu`]: {
				width: "100%",
				height: "auto",
				[r]: { color: e.colorTextDisabled }
			} }
		},
		"&-menu": {
			flexGrow: 1,
			flexShrink: 0,
			minWidth: e.controlItemWidth,
			height: e.dropdownHeight,
			margin: 0,
			padding: e.menuPadding,
			overflow: "auto",
			verticalAlign: "top",
			listStyle: "none",
			"-ms-overflow-style": "-ms-autohiding-scrollbar",
			"&:not(:last-child)": { borderInlineEnd: `${f(e.lineWidth)} ${e.lineType} ${e.colorSplit}` },
			"&-item": {
				display: "flex",
				maxWidth: 400,
				flexWrap: "nowrap",
				alignItems: "center",
				padding: e.optionPadding,
				lineHeight: e.lineHeight,
				cursor: "pointer",
				transition: `all ${e.motionDurationMid}`,
				borderRadius: e.borderRadiusSM,
				"&:hover": { background: e.controlItemBgHover },
				"&-disabled": {
					color: e.colorTextDisabled,
					cursor: "not-allowed",
					"&:hover": { background: "transparent" },
					[i]: { color: e.colorTextDisabled }
				},
				[`&-active:not(${r}-disabled)`]: { "&, &:hover": {
					color: e.optionSelectedColor,
					fontWeight: e.optionSelectedFontWeight,
					backgroundColor: e.optionSelectedBg
				} },
				"&-content": {
					flex: "auto",
					minWidth: 0,
					...I
				},
				[i]: {
					marginInlineStart: e.paddingXXS,
					color: e.colorIcon,
					fontSize: e.fontSizeIcon
				},
				"&-keyword": { color: e.colorHighlight }
			}
		}
	} }];
}, Zt = (e) => {
	let { componentCls: t, antCls: n } = e;
	return [
		{ [t]: { width: e.controlWidth } },
		{ [`${t}-dropdown`]: [{ [`&${n}-select-dropdown`]: { padding: 0 } }, Xt(e)] },
		{ [`${t}-dropdown-rtl`]: { direction: "rtl" } },
		k(e)
	];
}, Qt = (e) => {
	let t = Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2);
	return {
		controlWidth: 184,
		controlItemWidth: 111,
		dropdownHeight: 180,
		optionSelectedBg: e.controlItemBgActive,
		optionSelectedFontWeight: e.fontWeightStrong,
		optionPadding: `${t}px ${e.paddingSM}px`,
		menuPadding: e.paddingXXS,
		optionSelectedColor: e.colorText
	};
}, $t = H("Cascader", Zt, Qt, {
	resetFont: !1,
	unitless: { optionSelectedFontWeight: !0 }
}), en = M(["Cascader", "Panel"], (e) => {
	let { componentCls: t } = e;
	return { [`${t}-panel`]: [Xt(e), {
		display: "inline-flex",
		border: `${f(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
		borderRadius: e.borderRadiusLG,
		overflowX: "auto",
		maxWidth: "100%",
		[`${t}-menus`]: { alignItems: "stretch" },
		[`${t}-menu`]: { height: "auto" },
		"&-empty": { padding: e.paddingXXS }
	}] };
}, Qt, { resetFont: !1 });
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/cascader/Panel.js
function tn(e) {
	let { prefixCls: t, className: n, multiple: r, rootClassName: i, notFoundContent: a, direction: s, expandIcon: c, loadingIcon: l, disabled: u } = e, { expandIcon: d, loadingIcon: f } = O("cascader"), p = G.useContext(L), m = u ?? p, [h, g, _, v] = Vt(t, s), y = A(g), [b, x] = $t(g, y);
	en(g);
	let { expandIcon: S, loadingIcon: C } = Kt({
		contextExpandIcon: d,
		contextLoadingIcon: f,
		expandIcon: c,
		loadingIcon: l,
		isRtl: _ === "rtl"
	}), w = a || v?.("Cascader") || /*#__PURE__*/ G.createElement(D, { componentName: "Cascader" }), T = Ht(g, r);
	return /*#__PURE__*/ G.createElement(Lt, {
		...e,
		checkable: T,
		prefixCls: g,
		className: o(n, b, i, x, y),
		notFoundContent: w,
		direction: _,
		expandIcon: S,
		loadingIcon: C,
		disabled: m
	});
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/cascader/index.js
var nn = /* @__PURE__ */ e({ default: () => cn }), { SHOW_CHILD: rn, SHOW_PARENT: an } = Bt, on = (e, t, n) => {
	let r = e.toLowerCase().split(t).reduce((e, n, r) => r === 0 ? [n] : [].concat(a(e), [t, n]), []), i = [], o = 0;
	return r.forEach((t, r) => {
		let a = o + t.length, s = e.slice(o, a);
		o = a, r % 2 == 1 && (s = /*#__PURE__*/ G.createElement("span", {
			className: `${n}-menu-item-keyword`,
			key: `separator-${r}`
		}, s)), i.push(s);
	}), i;
}, sn = (e, t, n, r) => {
	let i = [], a = e.toLowerCase();
	return t.forEach((e, t) => {
		t !== 0 && i.push(" / ");
		let o = e[r.label];
		(U(o) || j(o)) && (o = on(String(o), a, n)), i.push(o);
	}), i;
}, cn = /*#__PURE__*/ G.forwardRef((e, t) => {
	let { prefixCls: n, size: r, disabled: i, className: a, rootClassName: s, multiple: c, bordered: l = !0, transitionName: u, choiceTransitionName: d = "", popupClassName: f, expandIcon: p, placement: m, showSearch: h, allowClear: g = !0, notFoundContent: _, direction: v, getPopupContainer: y, status: b, showArrow: w, builtinPlacements: T, style: k, variant: j, dropdownClassName: M, dropdownRender: I, onDropdownVisibleChange: R, onPopupVisibleChange: B, dropdownMenuColumnStyle: H, popupRender: U, dropdownStyle: te, popupMenuColumnStyle: ie, onOpenChange: W, styles: le, classNames: ue, loadingIcon: K, clearIcon: de, removeIcon: fe, suffixIcon: pe, ...me } = e, { getPrefixCls: he, getPopupContainer: ge, className: q, style: _e, classNames: ve, styles: ye, expandIcon: be, loadingIcon: xe, clearIcon: Se, removeIcon: Ce, suffixIcon: we, searchIcon: Te } = O("cascader"), { popupOverflow: Ee } = G.useContext(N), { status: De, hasFeedback: Oe, isFormItemInput: ke, feedbackIcon: Ae } = G.useContext(z), je = ee(De, b), [J, Y, Me, Ne] = Vt(n, v), X = Me === "rtl", Pe = he(), Fe = A(J), [Ie, Le] = ce(J, Fe), Re = A(Y);
	$t(Y, Re);
	let { compactSize: ze, compactItemClassnames: Be } = x(J, v), [Z, Ve] = oe("cascader", j, l), He = _ || Ne?.("Cascader") || /*#__PURE__*/ G.createElement(D, { componentName: "Cascader" }), Ue = ne(U || I), We = ie || H, Ge = W || B || R, Ke = G.useMemo(() => {
		if (!h) return h;
		let e = { render: sn };
		return E(h) && (e = {
			...e,
			...h
		}), e;
	}, [h]), qe = P((e) => r ?? ze ?? e), Je = G.useContext(L), Ye = i ?? Je, { expandIcon: Xe, loadingIcon: Ze } = Kt({
		contextExpandIcon: be,
		contextLoadingIcon: xe,
		expandIcon: p,
		loadingIcon: K,
		isRtl: X
	}), Qe = Ht(Y, c), $e = ae(e.suffixIcon, w), { suffixIcon: et, removeIcon: tt, clearIcon: nt } = se({
		...e,
		clearIcon: de,
		contextClearIcon: Se,
		removeIcon: fe,
		contextRemoveIcon: Ce,
		loadingIcon: Ze,
		suffixIcon: pe,
		contextSuffixIcon: we,
		searchIcon: E(h) ? h.searchIcon : void 0,
		contextSearchIcon: Te,
		hasFeedback: Oe,
		feedbackIcon: Ae,
		showSuffixIcon: $e,
		multiple: c,
		prefixCls: J,
		componentName: "Cascader"
	}), rt = G.useMemo(() => m === void 0 ? X ? "bottomRight" : "bottomLeft" : m, [m, X]), it = g === !0 ? { clearIcon: nt } : g, Q = {
		...e,
		variant: Z,
		size: qe,
		status: je,
		disabled: Ye
	}, [$, at] = C([ve, ue], [ye, le], { props: Q }, { popup: { _default: "root" } }), ot = {
		...at.popup.root,
		...te
	}, [st] = F("SelectLike", ot?.zIndex), ct = o(f || M, `${Y}-dropdown`, { [`${Y}-dropdown-rtl`]: Me === "rtl" }, s, Fe, $.popup.root, Re, Ie, Le);
	return /*#__PURE__*/ G.createElement(Bt, {
		prefixCls: J,
		className: o(!n && Y, {
			[`${J}-lg`]: qe === "large",
			[`${J}-sm`]: qe === "small",
			[`${J}-rtl`]: X,
			[`${J}-${Z}`]: Ve,
			[`${J}-in-form-item`]: ke
		}, S(J, je, Oe), Be, q, a, s, $.root, Fe, Re, Ie, Le),
		disabled: Ye,
		style: {
			...at.root,
			..._e,
			...k
		},
		classNames: $,
		styles: at,
		...me,
		builtinPlacements: re(T, Ee),
		direction: Me,
		placement: rt,
		notFoundContent: He,
		allowClear: it,
		showSearch: Ke,
		expandIcon: Xe,
		suffixIcon: et,
		removeIcon: tt,
		loadingIcon: Ze,
		checkable: Qe,
		popupClassName: ct,
		popupPrefixCls: n || Y,
		popupStyle: {
			...ot,
			zIndex: st
		},
		popupRender: Ue,
		popupMenuColumnStyle: We,
		onPopupVisibleChange: Ge,
		choiceTransitionName: V(Pe, "", d),
		transitionName: V(Pe, "slide-up", u),
		getPopupContainer: y || ge,
		ref: t
	});
}), ln = T(cn, "popupAlign", (e) => s(e, ["visible"]));
cn.SHOW_PARENT = an, cn.SHOW_CHILD = rn, cn.Panel = tn, cn._InternalPanelDoNotUseOrYouWillBeFired = ln;
//#endregion
export { _t as a, ft as c, Fe as d, Pe as f, bt as i, Ge as l, Jt as n, $ as o, Ae as p, Yt as r, Q as s, nn as t, Re as u };
