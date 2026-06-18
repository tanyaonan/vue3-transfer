globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, Dt as n, E as r, Ft as i, G as a, H as o, J as s, Mt as c, N as l, O as u, Ot as d, Pt as f, T as p, U as m, Z as h, _ as g, b as _, d as v, jt as y, pt as b, tt as x, ut as S, v as C, w, x as T, y as E, yt as D } from "./vue.runtime.js";
import { t as O } from "./shared/element-plus/utils/vue/install.js";
import { t as k } from "./shared/element-plus/utils/types.js";
import { n as A, r as j } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as M } from "./shared/element-plus/hooks/use-namespace.js";
import { s as N } from "./shared/element-plus-icons.js";
import { a as P } from "./shared/element-plus/utils/vue/icon.js";
import { t as F } from "./el-icon.js";
import { t as I } from "./shared/element-plus/utils/typescript.js";
import { n as ee } from "./el-form/constants.js";
import { n as te } from "./shared/element-plus/hooks/use-locale.js";
import { t as ne } from "./el-virtual-list/builders/build-list.js";
import { t as L } from "./el-checkbox.js";
import { t as R } from "./el-text.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree-v2/src/virtual-tree.mjs
var z = Symbol(), B = {
	key: -1,
	level: -1,
	data: {}
}, V = {
	type: Number,
	default: 26
}, H = A({
	data: {
		type: j(Array),
		default: () => I([])
	},
	emptyText: { type: String },
	height: {
		type: Number,
		default: 200
	},
	props: {
		type: j(Object),
		default: () => I({
			children: "children",
			label: "label",
			disabled: "disabled",
			value: "id",
			class: ""
		})
	},
	highlightCurrent: Boolean,
	showCheckbox: Boolean,
	defaultCheckedKeys: {
		type: j(Array),
		default: () => I([])
	},
	checkStrictly: Boolean,
	defaultExpandedKeys: {
		type: j(Array),
		default: () => I([])
	},
	indent: {
		type: Number,
		default: 16
	},
	itemSize: V,
	icon: { type: P },
	expandOnClickNode: {
		type: Boolean,
		default: !0
	},
	checkOnClickNode: Boolean,
	checkOnClickLeaf: {
		type: Boolean,
		default: !0
	},
	currentNodeKey: { type: j([String, Number]) },
	accordion: Boolean,
	filterMethod: { type: j(Function) },
	perfMode: {
		type: Boolean,
		default: !0
	},
	scrollbarAlwaysOn: Boolean
}), U = A({
	node: {
		type: j(Object),
		default: () => I(B)
	},
	expanded: Boolean,
	checked: Boolean,
	indeterminate: Boolean,
	showCheckbox: Boolean,
	disabled: Boolean,
	current: Boolean,
	hiddenExpandIcon: Boolean,
	itemSize: V
}), W = A({ node: {
	type: j(Object),
	required: !0
} }), G = "node-click", K = "node-drop", q = "node-expand", J = "node-collapse", Y = "current-change", X = "check", Z = "check-change", Q = "node-contextmenu", $ = {
	[G]: (e, t, n) => e && t && n,
	[K]: (e, t, n) => e && t && n,
	[q]: (e, t) => e && t,
	[J]: (e, t) => e && t,
	[Y]: (e, t) => e && t,
	[X]: (e, t) => e && t,
	[Z]: (e, t) => e && k(t),
	[Q]: (e, t, n) => e && t && n
}, re = {
	click: (e, t) => !!(e && t),
	drop: (e, t) => !!(e && t),
	toggle: (e) => !!e,
	check: (e, t) => e && k(t)
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree-v2/src/composables/useCheck.mjs
function ie(t, n) {
	let i = S(/* @__PURE__ */ new Set()), a = S(/* @__PURE__ */ new Set()), { emit: o } = r();
	e([() => n.value, () => t.defaultCheckedKeys], () => l(() => {
		x(t.defaultCheckedKeys);
	}), { immediate: !0 });
	let s = (e = !1) => {
		if (!n.value || !t.showCheckbox || t.checkStrictly && !e) return;
		let { levelTreeNodeMap: r, maxLevel: o } = n.value, s = i.value, c = /* @__PURE__ */ new Set();
		for (let e = o; e >= 1; --e) {
			let t = r.get(e);
			t && t.forEach((e) => {
				let t = e.children, n = !e.isLeaf || e.disabled || s.has(e.key);
				if (t) {
					let r = !0, i = !1;
					for (let e of t) {
						let t = e.key;
						if (e.isEffectivelyChecked || (n = !1), s.has(t)) i = !0;
						else if (c.has(t)) {
							r = !1, i = !0;
							break;
						} else r = !1;
					}
					r ? s.add(e.key) : i ? (c.add(e.key), s.delete(e.key)) : (s.delete(e.key), c.delete(e.key));
				}
				e.isEffectivelyChecked = n;
			});
		}
		a.value = c;
	}, c = (e) => i.value.has(e.key), u = (e) => a.value.has(e.key), d = (e, n, r = !0, a = !0, o = !1) => {
		let c = i.value, l = e.children;
		(!t.checkStrictly || o) && r && l?.length && (n = l.some((e) => !e.isEffectivelyChecked));
		let u = (e, n) => {
			c[n ? "add" : "delete"](e.key);
			let r = e.children;
			(!t.checkStrictly || o) && r && r.forEach((e) => {
				(!e.disabled || e.children) && u(e, n);
			});
		};
		u(e, n), a && s(), r && f(e, n);
	}, f = (e, t) => {
		let { checkedNodes: n, checkedKeys: r } = _(), { halfCheckedNodes: i, halfCheckedKeys: a } = v();
		o(X, e.data, {
			checkedKeys: r,
			checkedNodes: n,
			halfCheckedKeys: a,
			halfCheckedNodes: i
		}), o(Z, e.data, t);
	};
	function p(e = !1) {
		return _(e).checkedKeys;
	}
	function m(e = !1) {
		return _(e).checkedNodes;
	}
	function h() {
		return v().halfCheckedKeys;
	}
	function g() {
		return v().halfCheckedNodes;
	}
	function _(e = !1) {
		let r = [], a = [];
		if (n?.value && t.showCheckbox) {
			let { treeNodeMap: t } = n.value;
			i.value.forEach((n) => {
				let i = t.get(n);
				i && (!e || e && i.isLeaf) && (a.push(n), r.push(i.data));
			});
		}
		return {
			checkedKeys: a,
			checkedNodes: r
		};
	}
	function v() {
		let e = [], r = [];
		if (n?.value && t.showCheckbox) {
			let { treeNodeMap: t } = n.value;
			a.value.forEach((n) => {
				let i = t.get(n);
				i && (r.push(n), e.push(i.data));
			});
		}
		return {
			halfCheckedNodes: e,
			halfCheckedKeys: r
		};
	}
	function y(e) {
		i.value.clear(), a.value.clear(), l(() => {
			x(e);
		});
	}
	function b(e, r, i) {
		if (n?.value && t.showCheckbox) {
			let t = n.value.treeNodeMap.get(e);
			t && d(t, r, !1, void 0, i);
		}
	}
	function x(e) {
		if (n?.value) {
			let { treeNodeMap: r } = n.value;
			if (t.showCheckbox && r && e?.length > 0) {
				for (let t of e) {
					let e = r.get(t);
					e && !c(e) && d(e, !0, !1, !1);
				}
				s();
			}
		}
	}
	return {
		updateCheckedKeys: s,
		toggleCheckbox: d,
		isChecked: c,
		isIndeterminate: u,
		getCheckedKeys: p,
		getCheckedNodes: m,
		getHalfCheckedKeys: h,
		getHalfCheckedNodes: g,
		setChecked: b,
		setCheckedKeys: y
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree-v2/src/composables/useFilter.mjs
function ae(e, t) {
	let r = S(/* @__PURE__ */ new Set([])), i = S(/* @__PURE__ */ new Set([])), a = g(() => n(e.filterMethod));
	function o(n) {
		if (!a.value) return;
		let o = /* @__PURE__ */ new Set(), s = i.value, c = r.value, l = [], u = t.value?.treeNodes || [], d = e.filterMethod;
		c.clear();
		function f(e) {
			e.forEach((e) => {
				l.push(e), d?.(n, e.data, e) ? l.forEach((e) => {
					o.add(e.key), e.expanded = !0;
				}) : (e.expanded = !1, e.isLeaf && c.add(e.key));
				let t = e.children;
				if (t && f(t), !e.isLeaf) {
					if (!o.has(e.key)) c.add(e.key);
					else if (t) {
						let n = !0;
						for (let e of t) if (!c.has(e.key)) {
							n = !1;
							break;
						}
						n ? s.add(e.key) : s.delete(e.key);
					}
				}
				l.pop();
			});
		}
		return f(u), o;
	}
	function s(e) {
		return i.value.has(e.key);
	}
	return {
		hiddenExpandIconKeySet: i,
		hiddenNodeKeySet: r,
		doFilter: o,
		isForceHiddenExpandIcon: s
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree-v2/src/composables/useTree.mjs
function oe(t, n) {
	let r = S(/* @__PURE__ */ new Set()), i = S(), a = b(), o = S(), { isIndeterminate: s, isChecked: c, toggleCheckbox: l, getCheckedKeys: u, getCheckedNodes: f, getHalfCheckedKeys: p, getHalfCheckedNodes: m, setChecked: h, setCheckedKeys: _ } = ie(t, a), { doFilter: v, hiddenNodeKeySet: y, isForceHiddenExpandIcon: x } = ae(t, a), C = g(() => t.props?.value || "id"), w = g(() => t.props?.children || "children"), T = g(() => t.props?.disabled || "disabled"), E = g(() => t.props?.label || "label"), D = g(() => {
		let e = r.value, t = y.value, n = [], i = a.value?.treeNodes || [], o = [];
		for (let e = i.length - 1; e >= 0; --e) o.push(i[e]);
		for (; o.length;) {
			let r = o.pop();
			if (!t.has(r.key) && (n.push(r), r.children && e.has(r.key))) for (let e = r.children.length - 1; e >= 0; --e) o.push(r.children[e]);
		}
		return n;
	}), O = g(() => D.value.length > 0);
	function k(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = 1;
		function a(e, o = 1, s = void 0) {
			let c = [];
			for (let i of e) {
				let e = M(i), l = {
					level: o,
					key: e,
					data: i
				};
				l.label = P(i), l.parent = s;
				let u = j(i);
				l.disabled = N(i), l.isLeaf = !u || u.length === 0, l.expanded = r.value.has(e), u && u.length && (l.children = a(u, o + 1, l)), c.push(l), t.set(e, l), n.has(o) || n.set(o, []), n.get(o)?.push(l);
			}
			return o > i && (i = o), c;
		}
		let o = a(e);
		return {
			treeNodeMap: t,
			levelTreeNodeMap: n,
			maxLevel: i,
			treeNodes: o
		};
	}
	function A(e) {
		let t = v(e);
		t && (r.value = t);
	}
	function j(e) {
		return e[w.value];
	}
	function M(e) {
		return e ? e[C.value] : "";
	}
	function N(e) {
		return e[T.value];
	}
	function P(e) {
		return e[E.value];
	}
	function F(e) {
		r.value.has(e.key) ? z(e) : R(e);
	}
	function I(e) {
		let t = /* @__PURE__ */ new Set(), n = a.value.treeNodeMap;
		r.value.forEach((e) => {
			let t = n.get(e);
			t && (t.expanded = !1);
		}), e.forEach((e) => {
			let r = n.get(e);
			for (; r && !t.has(r.key);) t.add(r.key), r.expanded = !0, r = r.parent;
		}), r.value = t;
	}
	function ee(e, r) {
		ne(e), n(G, e.data, e, r), t.expandOnClickNode && F(e), t.showCheckbox && (t.checkOnClickNode || e.isLeaf && t.checkOnClickLeaf) && !e.disabled && l(e, !c(e), !0);
	}
	function te(e, t) {
		n(K, e.data, e, t);
	}
	function ne(e) {
		V(e) || (i.value = e.key, n(Y, e.data, e));
	}
	function L(e, t) {
		l(e, t);
	}
	function R(e) {
		let i = r.value;
		if (a.value && t.accordion) {
			let { treeNodeMap: t } = a.value;
			i.forEach((n) => {
				let r = t.get(n);
				e && e.level === r?.level && (i.delete(n), r.expanded = !1);
			});
		}
		i.add(e.key);
		let o = Z(e.key);
		o && (o.expanded = !0, n(q, o.data, o));
	}
	function z(e) {
		r.value.delete(e.key);
		let t = Z(e.key);
		t && (t.expanded = !1, n(J, t.data, t));
	}
	function B(e) {
		return !!e.disabled;
	}
	function V(e) {
		let t = i.value;
		return t !== void 0 && t === e.key;
	}
	function H() {
		if (i.value !== void 0) return a.value?.treeNodeMap.get(i.value)?.data;
	}
	function U() {
		return i.value;
	}
	function W(e) {
		i.value = e;
	}
	function X(e) {
		a.value = k(e);
	}
	function Z(e) {
		let t = d(e) ? M(e) : e;
		return a.value?.treeNodeMap.get(t);
	}
	function Q(e, t = "auto") {
		let n = Z(e);
		n && o.value && o.value.scrollToItem(D.value.indexOf(n), t);
	}
	function $(e) {
		o.value?.scrollTo(e);
	}
	return e(() => t.currentNodeKey, (e) => {
		i.value = e;
	}, { immediate: !0 }), e(() => t.defaultExpandedKeys, (e) => {
		I(e || []);
	}), e(() => t.data, (e) => {
		X(e), I(t.defaultExpandedKeys || []);
	}, { immediate: !0 }), {
		tree: a,
		flattenTree: D,
		isNotEmpty: O,
		listRef: o,
		getKey: M,
		getChildren: j,
		toggleExpand: F,
		toggleCheckbox: l,
		isChecked: c,
		isIndeterminate: s,
		isDisabled: B,
		isCurrent: V,
		isForceHiddenExpandIcon: x,
		handleNodeClick: ee,
		handleNodeDrop: te,
		handleNodeCheck: L,
		getCurrentNode: H,
		getCurrentKey: U,
		setCurrentKey: W,
		getCheckedKeys: u,
		getCheckedNodes: f,
		getHalfCheckedKeys: p,
		getHalfCheckedNodes: m,
		setChecked: h,
		setCheckedKeys: _,
		filter: A,
		setData: X,
		getNode: Z,
		expandNode: R,
		collapseNode: z,
		setExpandedKeys: I,
		scrollToNode: Q,
		scrollTo: $
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree-v2/src/tree-node-content.mjs
var se = p({
	name: "ElTreeNodeContent",
	props: W,
	setup(e) {
		let n = t(z), r = M("tree");
		return () => {
			let t = e.node, { data: i } = t;
			return n?.ctx.slots.default ? n.ctx.slots.default({
				node: t,
				data: i
			}) : u(R, {
				tag: "span",
				truncated: !0,
				class: r.be("node", "label")
			}, () => [t?.label]);
		};
	}
}), ce = [
	"aria-expanded",
	"aria-disabled",
	"aria-checked",
	"data-key"
], le = /* @__PURE__ */ p({
	name: "ElTreeNode",
	__name: "tree-node",
	props: U,
	emits: re,
	setup(e, { emit: r }) {
		let i = e, a = r, l = t(z), u = M("tree"), d = g(() => l?.props.indent ?? 16), p = g(() => l?.props.icon ?? N), m = (e) => {
			let t = l?.props.props?.class;
			if (!t) return {};
			let r;
			if (n(t)) {
				let { data: n } = e;
				r = t(n, e);
			} else r = t;
			return y(r) ? { [r]: !0 } : r;
		}, h = (e) => {
			a("click", i.node, e);
		}, b = (e) => {
			a("drop", i.node, e);
		}, S = () => {
			a("toggle", i.node);
		}, O = (e) => {
			a("check", i.node, e);
		}, k = (e) => {
			l?.instance?.vnode?.props?.onNodeContextmenu && (e.stopPropagation(), e.preventDefault()), l?.ctx.emit(Q, e, i.node?.data, i.node);
		};
		return (t, n) => (o(), T("div", {
			ref: "node$",
			class: c([
				D(u).b("node"),
				D(u).is("expanded", e.expanded),
				D(u).is("current", e.current),
				D(u).is("focusable", !e.disabled),
				D(u).is("checked", !e.disabled && e.checked),
				m(e.node)
			]),
			role: "treeitem",
			tabindex: "-1",
			"aria-expanded": e.expanded,
			"aria-disabled": e.disabled,
			"aria-checked": e.checked,
			"data-key": e.node?.key,
			onClick: v(h, ["stop"]),
			onContextmenu: k,
			onDragover: n[1] ||= v(() => {}, ["prevent"]),
			onDragenter: n[2] ||= v(() => {}, ["prevent"]),
			onDrop: v(b, ["stop"])
		}, [C("div", {
			class: c(D(u).be("node", "content")),
			style: f({
				paddingLeft: `${(e.node.level - 1) * d.value}px`,
				height: e.itemSize + "px"
			})
		}, [
			p.value ? (o(), E(D(F), {
				key: 0,
				class: c([
					D(u).is("leaf", !!e.node?.isLeaf),
					D(u).is("hidden", e.hiddenExpandIcon),
					{ expanded: !e.node?.isLeaf && e.expanded },
					D(u).be("node", "expand-icon")
				]),
				onClick: v(S, ["stop"])
			}, {
				default: x(() => [(o(), E(s(p.value)))]),
				_: 1
			}, 8, ["class"])) : _("v-if", !0),
			e.showCheckbox ? (o(), E(D(L), {
				key: 1,
				"model-value": e.checked,
				indeterminate: e.indeterminate,
				disabled: e.disabled,
				onChange: O,
				onClick: n[0] ||= v(() => {}, ["stop"])
			}, null, 8, [
				"model-value",
				"indeterminate",
				"disabled"
			])) : _("v-if", !0),
			w(D(se), { node: {
				...e.node,
				expanded: e.expanded
			} }, null, 8, ["node"])
		], 6)], 42, ce));
	}
}), ue = O(/* @__PURE__ */ p({
	name: "ElTreeV2",
	__name: "tree",
	props: H,
	emits: $,
	setup(e, { expose: t, emit: n }) {
		let s = e, l = n, u = h(), d = g(() => s.itemSize);
		m(z, {
			ctx: {
				emit: l,
				slots: u
			},
			props: s,
			instance: r()
		}), m(ee, void 0);
		let { t: p } = te(), _ = M("tree"), { flattenTree: v, isNotEmpty: y, listRef: b, toggleExpand: S, isIndeterminate: w, isChecked: O, isDisabled: k, isCurrent: A, isForceHiddenExpandIcon: j, handleNodeClick: N, handleNodeDrop: P, handleNodeCheck: F, toggleCheckbox: I, getCurrentNode: L, getCurrentKey: R, setCurrentKey: B, getCheckedKeys: V, getCheckedNodes: H, getHalfCheckedKeys: U, getHalfCheckedNodes: W, setChecked: G, setCheckedKeys: K, filter: q, setData: J, getNode: Y, expandNode: X, collapseNode: Z, setExpandedKeys: Q, scrollToNode: $, scrollTo: re } = oe(s, l);
		return t({
			toggleCheckbox: I,
			getCurrentNode: L,
			getCurrentKey: R,
			setCurrentKey: B,
			getCheckedKeys: V,
			getCheckedNodes: H,
			getHalfCheckedKeys: U,
			getHalfCheckedNodes: W,
			setChecked: G,
			setCheckedKeys: K,
			filter: q,
			setData: J,
			getNode: Y,
			expandNode: X,
			collapseNode: Z,
			setExpandedKeys: Q,
			scrollToNode: $,
			scrollTo: re
		}), (t, n) => (o(), T("div", {
			class: c([D(_).b(), { [D(_).m("highlight-current")]: e.highlightCurrent }]),
			role: "tree"
		}, [D(y) ? (o(), E(D(ne), {
			key: 0,
			ref_key: "listRef",
			ref: b,
			"class-name": D(_).b("virtual-list"),
			data: D(v),
			total: D(v).length,
			height: e.height,
			"item-size": d.value,
			"perf-mode": e.perfMode,
			"scrollbar-always-on": e.scrollbarAlwaysOn
		}, {
			default: x(({ data: t, index: n, style: r }) => [(o(), E(le, {
				key: t[n].key,
				style: f(r),
				node: t[n],
				expanded: t[n].expanded,
				"show-checkbox": e.showCheckbox,
				checked: D(O)(t[n]),
				indeterminate: D(w)(t[n]),
				"item-size": d.value,
				disabled: D(k)(t[n]),
				current: D(A)(t[n]),
				"hidden-expand-icon": D(j)(t[n]),
				onClick: D(N),
				onToggle: D(S),
				onCheck: D(F),
				onDrop: D(P)
			}, null, 8, [
				"style",
				"node",
				"expanded",
				"show-checkbox",
				"checked",
				"indeterminate",
				"item-size",
				"disabled",
				"current",
				"hidden-expand-icon",
				"onClick",
				"onToggle",
				"onCheck",
				"onDrop"
			]))]),
			_: 1
		}, 8, [
			"class-name",
			"data",
			"total",
			"height",
			"item-size",
			"perf-mode",
			"scrollbar-always-on"
		])) : (o(), T("div", {
			key: 1,
			class: c(D(_).e("empty-block"))
		}, [a(t.$slots, "empty", {}, () => [C("span", { class: c(D(_).e("empty-text")) }, i(e.emptyText ?? D(p)("el.tree.emptyText")), 3)])], 2))], 2));
	}
}));
//#endregion
export { ue as ElTreeV2, ue as default };
