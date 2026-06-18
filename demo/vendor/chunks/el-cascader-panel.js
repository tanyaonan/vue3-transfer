globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, C as r, Dt as i, E as a, Ft as o, G as s, H as c, L as l, Mt as u, N as d, Pt as f, T as p, Tt as m, U as h, W as g, Z as _, _ as v, b as y, bt as b, ct as x, d as S, f as C, p as w, tt as T, ut as E, v as D, w as O, x as k, y as A, yt as j, z as M } from "./vue.runtime.js";
import { n as N } from "./shared/lodash/flatten.js";
import { t as P } from "./shared/element-plus/utils/vue/install.js";
import { t as F } from "./shared/lodash/clamp.js";
import { t as I } from "./shared/lodash/cloneDeep.js";
import { t as L } from "./shared/lodash/isEqual.js";
import { a as ee, r as R, s as z } from "./shared/element-plus/utils/types.js";
import { r as B, t as V } from "./shared/element-plus/constants/event.js";
import { n as H, r as U } from "./shared/element-plus/utils/vue/props/runtime.js";
import { a as W, n as G, r as te } from "./shared/element-plus/utils/dom/aria.js";
import { _ as ne } from "./shared/vueuse.js";
import { o as re } from "./shared/element-plus/utils/easings.js";
import { r as K } from "./shared/element-plus/hooks/use-namespace.js";
import { C as q, l as J, r as ie } from "./shared/element-plus-icons.js";
import { t as Y } from "./el-icon.js";
import { a as X, n as ae } from "./shared/element-plus/constants/aria.js";
import { t as oe } from "./shared/element-plus/hooks/use-id.js";
import { r as se, t as ce } from "./shared/element-plus/utils/arrays.js";
import { t as le } from "./el-scrollbar.js";
import { n as ue } from "./shared/element-plus/hooks/use-locale.js";
import { t as de } from "./el-virtual-list/builders/build-list.js";
import { t as Z } from "./el-checkbox.js";
import { t as fe } from "./el-radio.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flattenDeep.js
var pe = Infinity;
function me(e) {
	return e != null && e.length ? N(e, pe) : [];
}
var Q = H({
	modelValue: { type: U([
		Number,
		String,
		Array,
		Object
	]) },
	options: {
		type: U(Array),
		default: () => []
	},
	props: {
		type: U(Object),
		default: () => ({})
	},
	virtualScroll: Boolean,
	itemSize: {
		type: Number,
		default: 34
	},
	height: {
		type: Number,
		default: 204
	}
}), he = {
	expandTrigger: "click",
	multiple: !1,
	checkStrictly: !1,
	emitPath: !0,
	lazy: !1,
	lazyLoad: b,
	value: "value",
	label: "label",
	children: "children",
	leaf: "leaf",
	disabled: "disabled",
	hoverThreshold: 500,
	checkOnClickNode: !1,
	checkOnClickLeaf: !0,
	showPrefix: !0
}, ge = H({
	...Q,
	border: {
		type: Boolean,
		default: !0
	},
	renderLabel: { type: Function }
}), _e = (e) => !0, ve = {
	[B]: _e,
	[V]: _e,
	close: () => !0,
	"expand-change": (e) => e
}, ye = (e) => v(() => ({
	...he,
	...e.props
})), $ = Symbol();
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/cascader-panel/src/node-content.mjs
function be(e) {
	return !!(m(e) ? e.every(({ type: e }) => e === C) : e?.type === C);
}
var xe = /* @__PURE__ */ p({
	name: "NodeContent",
	props: { node: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = K("cascader-node"), { renderLabelFn: r } = n($), { node: i } = e, { data: a, label: o } = i, s = () => {
			let e = r?.({
				node: i,
				data: a
			});
			return be(e) ? o : e ?? o;
		};
		return () => O("span", { class: t.e("label") }, [s()]);
	}
}), Se = [
	"id",
	"aria-haspopup",
	"aria-owns",
	"aria-expanded",
	"tabindex"
], Ce = /* @__PURE__ */ p({
	name: "ElCascaderNode",
	__name: "node",
	props: {
		node: {
			type: Object,
			required: !0
		},
		menuId: {
			type: String,
			required: !1
		}
	},
	emits: ["expand"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = n($), o = K("cascader-node"), s = v(() => a.isHoverMenu), l = v(() => a.config.multiple), d = v(() => a.config.checkStrictly), f = v(() => a.config.showPrefix), p = v(() => a.checkedNodes[0]?.uid), m = v(() => r.node.isDisabled), h = v(() => r.node.isLeaf), g = v(() => d.value && !h.value || !m.value), _ = v(() => x(a.expandingNode)), b = v(() => d.value && a.checkedNodes.some(x)), x = (e) => {
			let { level: t, uid: n } = r.node;
			return e?.pathNodes[t - 1]?.uid === n;
		}, C = () => {
			_.value || a.expandNode(r.node);
		}, E = (e) => {
			let { node: t } = r;
			e !== t.checked && a.handleCheckChange(t, e);
		}, M = () => {
			a.lazyLoad(r.node, () => {
				h.value || C();
			});
		}, N = (e) => {
			s.value && (P(), !h.value && i("expand", e));
		}, P = () => {
			let { node: e } = r;
			!g.value || e.loading || (e.loaded ? C() : M());
		}, F = () => {
			h.value && !m.value && !d.value && !l.value ? L(!0) : (a.config.checkOnClickNode && (l.value || d.value) || h.value && a.config.checkOnClickLeaf) && !m.value ? I(!r.node.checked) : s.value || P();
		}, I = (e) => {
			d.value ? (E(e), r.node.loaded && C()) : L(e);
		}, L = (e) => {
			r.node.loaded ? (E(e), !d.value && C()) : M();
		};
		return (t, n) => (c(), k("li", {
			id: `${e.menuId}-${e.node.uid}`,
			role: "menuitem",
			"aria-haspopup": !h.value,
			"aria-owns": h.value ? void 0 : e.menuId,
			"aria-expanded": _.value,
			tabindex: g.value ? -1 : void 0,
			class: u([
				j(o).b(),
				j(o).is("selectable", d.value),
				j(o).is("active", e.node.checked),
				j(o).is("disabled", !g.value),
				_.value && "in-active-path",
				b.value && "in-checked-path"
			]),
			onMouseenter: N,
			onFocus: N,
			onClick: F
		}, [
			y(" prefix "),
			l.value && f.value ? (c(), A(j(Z), {
				key: 0,
				"model-value": e.node.checked,
				indeterminate: e.node.indeterminate,
				disabled: m.value,
				onClick: n[0] ||= S(() => {}, ["stop"]),
				"onUpdate:modelValue": I
			}, null, 8, [
				"model-value",
				"indeterminate",
				"disabled"
			])) : d.value && f.value ? (c(), A(j(fe), {
				key: 1,
				"model-value": p.value,
				label: e.node.uid,
				disabled: m.value,
				"onUpdate:modelValue": I,
				onClick: n[1] ||= S(() => {}, ["stop"])
			}, {
				default: T(() => [y("\n        Add an empty element to avoid render label,\n        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485\n      "), n[2] ||= D("span", null, null, -1)]),
				_: 1
			}, 8, [
				"model-value",
				"label",
				"disabled"
			])) : h.value && e.node.checked ? (c(), A(j(Y), {
				key: 2,
				class: u(j(o).e("prefix"))
			}, {
				default: T(() => [O(j(J))]),
				_: 1
			}, 8, ["class"])) : y("v-if", !0),
			y(" content "),
			O(j(xe), { node: e.node }, null, 8, ["node"]),
			y(" postfix "),
			h.value ? y("v-if", !0) : (c(), k(w, { key: 3 }, [e.node.loading ? (c(), A(j(Y), {
				key: 0,
				class: u([j(o).is("loading"), j(o).e("postfix")])
			}, {
				default: T(() => [O(j(q))]),
				_: 1
			}, 8, ["class"])) : (c(), A(j(Y), {
				key: 1,
				class: u(["arrow-right", j(o).e("postfix")])
			}, {
				default: T(() => [O(j(ie))]),
				_: 1
			}, 8, ["class"]))], 64))
		], 42, Se));
	}
}), we = /* @__PURE__ */ p({
	name: "ElCascaderMenu",
	__name: "menu",
	props: {
		nodes: {
			type: Array,
			required: !0
		},
		index: {
			type: Number,
			required: !0
		},
		virtualScroll: {
			type: Boolean,
			required: !1,
			default: !1
		},
		itemSize: {
			type: Number,
			required: !1,
			default: 34
		},
		height: {
			type: Number,
			required: !1,
			default: 204
		}
	},
	setup(e, { expose: t }) {
		let i = e, l = a(), p = K("cascader-menu"), { t: m } = ue(), h = oe(), _, b, x = n($), S = E(), C = E(), D = v(() => !i.nodes.length), M = v(() => !x.initialLoaded), N = v(() => `${h.value}-${i.index}`), P = () => {
			let e;
			if (x.expandingNode) {
				let { level: t, pathNodes: n } = x.expandingNode;
				i.index < t ? e = n[i.index]?.uid : i.index === t && x.checkedNodes.length > 0 && (e = x.checkedNodes[0]?.pathNodes[i.index]?.uid);
			} else x.checkedNodes.length > 0 && i.index < x.checkedNodes[0].pathNodes.length && (e = x.checkedNodes[0].pathNodes[i.index]?.uid);
			return e === void 0 ? -1 : i.nodes.findIndex((t) => t.uid === e);
		}, I = (e) => e ? i.nodes.findIndex((t) => `${N.value}-${t.uid}` === e) : -1, L = (e) => {
			let t = F(e, 0, i.nodes.length - 1);
			C.value?.scrollToItem(t);
		}, ee = (e) => {
			if (!i.nodes.length) return;
			let t = F(e, 0, i.nodes.length - 1);
			L(t), d(() => {
				let e = l.vnode.el?.querySelector(`#${N.value}-${i.nodes[t].uid}`);
				e && G(e);
			});
		}, R = (e) => {
			_ = e.target;
		}, z = (e) => {
			if (!(!x.isHoverMenu || !_ || !S.value)) if (_.contains(e.target)) {
				B();
				let t = l.vnode.el, { left: n } = t.getBoundingClientRect(), { offsetWidth: r, offsetHeight: a } = t, o = e.clientX - n, s = _.offsetTop, c = s + _.offsetHeight, u = i.virtualScroll ? C.value?.states?.scrollOffset || 0 : t.querySelector(`.${p.e("wrap")}`)?.scrollTop || 0;
				S.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${o} ${s} L${r} ${u} V${s} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${o} ${c} L${r} ${a + u} V${c} Z" />
        `;
			} else b ||= window.setTimeout(V, x.config.hoverThreshold);
		}, B = () => {
			b &&= (clearTimeout(b), void 0);
		}, V = () => {
			S.value && (S.value.innerHTML = "", B());
		};
		return t({
			getActiveNodeIndex: P,
			getNodeIndexById: I,
			scrollToItem: L,
			focusNodeAt: ee,
			virtualListRef: C,
			get $el() {
				return l.vnode.el;
			}
		}), (t, n) => e.virtualScroll ? (c(), k("div", {
			key: N.value,
			class: u(j(p).b()),
			onMousemove: z,
			onMouseleave: V
		}, [
			O(j(de), {
				ref_key: "virtualListRef",
				ref: C,
				height: e.height,
				"item-size": e.itemSize,
				data: e.nodes,
				total: e.nodes.length,
				"class-name": j(p).e("list"),
				"inner-element": "ul",
				"inner-props": {
					role: "menu",
					class: j(p).is("empty", D.value)
				}
			}, {
				default: T(({ data: e, index: t, style: n }) => [(c(), A(Ce, {
					key: e[t].uid,
					node: e[t],
					"menu-id": N.value,
					style: f(n),
					onExpand: R
				}, null, 8, [
					"node",
					"menu-id",
					"style"
				]))]),
				_: 1
			}, 8, [
				"height",
				"item-size",
				"data",
				"total",
				"class-name",
				"inner-props"
			]),
			M.value ? (c(), k("div", {
				key: 0,
				class: u(j(p).e("empty-text"))
			}, [O(j(Y), {
				size: 14,
				class: u(j(p).is("loading"))
			}, {
				default: T(() => [O(j(q))]),
				_: 1
			}, 8, ["class"]), r(" " + o(j(m)("el.cascader.loading")), 1)], 2)) : D.value ? (c(), k("div", {
				key: 1,
				class: u(j(p).e("empty-text"))
			}, [s(t.$slots, "empty", {}, () => [r(o(j(m)("el.cascader.noData")), 1)])], 2)) : j(x)?.isHoverMenu ? (c(), k(w, { key: 2 }, [y(" eslint-disable vue/html-self-closing "), (c(), k("svg", {
				ref_key: "hoverZone",
				ref: S,
				class: u(j(p).e("hover-zone"))
			}, null, 2))], 2112)) : y("v-if", !0),
			y(" eslint-enable vue/html-self-closing ")
		], 34)) : (c(), A(j(le), {
			key: N.value,
			tag: "ul",
			role: "menu",
			class: u(j(p).b()),
			"wrap-class": j(p).e("wrap"),
			"view-class": [j(p).e("list"), j(p).is("empty", D.value)],
			onMousemove: z,
			onMouseleave: V
		}, {
			default: T(() => [
				(c(!0), k(w, null, g(e.nodes, (e) => (c(), A(Ce, {
					key: e.uid,
					node: e,
					"menu-id": N.value,
					onExpand: R
				}, null, 8, ["node", "menu-id"]))), 128)),
				M.value ? (c(), k("div", {
					key: 0,
					class: u(j(p).e("empty-text"))
				}, [O(j(Y), {
					size: 14,
					class: u(j(p).is("loading"))
				}, {
					default: T(() => [O(j(q))]),
					_: 1
				}, 8, ["class"]), r(" " + o(j(m)("el.cascader.loading")), 1)], 2)) : D.value ? (c(), k("div", {
					key: 1,
					class: u(j(p).e("empty-text"))
				}, [s(t.$slots, "empty", {}, () => [r(o(j(m)("el.cascader.noData")), 1)])], 2)) : j(x)?.isHoverMenu ? (c(), k(w, { key: 2 }, [y(" eslint-disable vue/html-self-closing "), (c(), k("svg", {
					ref_key: "hoverZone",
					ref: S,
					class: u(j(p).e("hover-zone"))
				}, null, 2))], 2112)) : y("v-if", !0),
				y(" eslint-enable vue/html-self-closing ")
			]),
			_: 3
		}, 8, [
			"class",
			"wrap-class",
			"view-class"
		]));
	}
}), Te = 0, Ee = (e) => {
	let t = [e], { parent: n } = e;
	for (; n;) t.unshift(n), n = n.parent;
	return t;
}, De = class e {
	constructor(t, n, r, i = !1) {
		this.data = t, this.config = n, this.parent = r, this.root = i, this.uid = Te++, this.checked = !1, this.indeterminate = !1, this.loading = !1;
		let { value: a, label: o, children: s } = n, c = t[s], l = Ee(this);
		this.level = i ? 0 : r ? r.level + 1 : 1, this.value = t[a], this.label = t[o], this.pathNodes = l, this.pathValues = l.map((e) => e.value), this.pathLabels = l.map((e) => e.label), this.childrenData = c, this.children = (c || []).map((t) => new e(t, n, this)), this.loaded = !n.lazy || this.isLeaf || !R(c), this.text = "";
	}
	get isDisabled() {
		let { data: e, parent: t, config: n } = this, { disabled: r, checkStrictly: a } = n;
		return (i(r) ? r(e, this) : !!e[r]) || !a && !!t?.isDisabled;
	}
	get isLeaf() {
		let { data: e, config: t, childrenData: n, loaded: r } = this, { lazy: a, leaf: o } = t, s = i(o) ? o(e, this) : e[o];
		return z(s) ? a && !r ? !1 : !(m(n) && n.length) : !!s;
	}
	get valueByOption() {
		return this.config.emitPath ? this.pathValues : this.value;
	}
	appendChild(t) {
		let { childrenData: n, children: r } = this, i = new e(t, this.config, this);
		return m(n) ? n.push(t) : this.childrenData = [t], r.push(i), i;
	}
	calcText(e, t) {
		let n = e ? this.pathLabels.join(t) : this.label;
		return this.text = n, n;
	}
	broadcast(e) {
		this.children.forEach((t) => {
			t && (t.broadcast(e), t.onParentCheck?.(e));
		});
	}
	emit() {
		let { parent: e } = this;
		e && (e.onChildCheck?.(), e.emit());
	}
	onParentCheck(e) {
		this.isDisabled || this.setCheckState(e);
	}
	onChildCheck() {
		let { children: e } = this, t = e.filter((e) => !e.isDisabled), n = t.length ? t.every((e) => e.checked) : !1;
		this.setCheckState(n);
	}
	setCheckState(e) {
		let t = this.children.length, n = this.children.reduce((e, t) => e + (t.checked ? 1 : t.indeterminate ? .5 : 0), 0);
		this.checked = this.loaded && this.children.filter((e) => !e.isDisabled).every((e) => e.loaded && e.checked) && e, this.indeterminate = this.loaded && n !== t && n > 0;
	}
	doCheck(e) {
		if (this.checked === e) return;
		let { checkStrictly: t, multiple: n } = this.config;
		t || !n ? this.checked = e : (this.broadcast(e), this.setCheckState(e), this.emit());
	}
}, Oe = (e, t) => e.reduce((e, n) => (n.isLeaf ? e.push(n) : (!t && e.push(n), e = e.concat(Oe(n.children, t))), e), []), ke = class {
	constructor(e, t) {
		this.config = t;
		let n = (e || []).map((e) => new De(e, this.config));
		this.nodes = n, this.allNodes = Oe(n, !1), this.leafNodes = Oe(n, !0);
	}
	getNodes() {
		return this.nodes;
	}
	getFlattedNodes(e) {
		return e ? this.leafNodes : this.allNodes;
	}
	appendNode(e, t) {
		let n = t ? t.appendChild(e) : new De(e, this.config);
		t || this.nodes.push(n), this.appendAllNodesAndLeafNodes(n);
	}
	appendNodes(e, t) {
		e.length > 0 ? e.forEach((e) => this.appendNode(e, t)) : t && t.isLeaf && this.leafNodes.push(t);
	}
	appendAllNodesAndLeafNodes(e) {
		this.allNodes.push(e), e.isLeaf && this.leafNodes.push(e), e.children && e.children.forEach((e) => {
			this.appendAllNodesAndLeafNodes(e);
		});
	}
	getNodeByValue(e, t = !1) {
		return ee(e) ? null : this.getFlattedNodes(t).find((t) => L(t.value, e) || L(t.pathValues, e)) || null;
	}
	getSameNode(e) {
		return e && this.getFlattedNodes(!1).find(({ value: t, level: n }) => L(e.value, t) && e.level === n) || null;
	}
}, Ae = (e) => {
	if (!e) return 0;
	let t = e.id.split("-");
	return Number(t[t.length - 2]);
}, je = (e) => {
	if (!e) return;
	let t = e.querySelector("input");
	t ? t.click() : W(e) && e.click();
}, Me = (e, t) => {
	let n = t.slice(0), r = n.map((e) => e.uid), i = e.reduce((e, t) => {
		let i = r.indexOf(t.uid);
		return i > -1 && (e.push(t), n.splice(i, 1), r.splice(i, 1)), e;
	}, []);
	return i.push(...n), i;
}, Ne = /* @__PURE__ */ p({
	name: "ElCascaderPanel",
	__name: "index",
	props: ge,
	emits: ve,
	setup(e, { expose: n, emit: r }) {
		let i = e, a = r, o = !1, f = K("cascader"), p = ye(i), m = _(), y, b = E(!0), S = E(!1), C = E([]), D = E(), O = E([]), N = E(), P = E([]), F = v(() => p.value.expandTrigger === "hover"), ee = v(() => i.renderLabel || m.default), z = v(() => i.virtualScroll), H = v(() => i.itemSize), U = v(() => i.height), W = () => {
			let { options: e } = i, t = p.value;
			o = !1, y = new ke(e, t), O.value = [y.getNodes()], t.lazy && R(i.options) ? (b.value = !1, q(void 0, (e) => {
				e && (y = new ke(e, t), O.value = [y.getNodes()]), b.value = !0, Z(!1, !0);
			})) : Z(!1, !0);
		}, q = (e, t) => {
			let n = p.value;
			e ||= new De({}, n, void 0, !0), e.loading = !0, n.lazyLoad(e, (n) => {
				let r = e, i = r.root ? null : r;
				r.loading = !1, r.loaded = !0, r.childrenData = r.childrenData || [], n && y?.appendNodes(n, i), n && t?.(n), e.level === 0 && (S.value = !0);
			}, () => {
				e.loading = !1, e.loaded = !1, e.level === 0 && (b.value = !0);
			});
		}, J = (e, t) => {
			let { level: n } = e, r = O.value.slice(0, n), i;
			e.isLeaf ? i = e.pathNodes[n - 2] : (i = e, r.push(e.children)), N.value?.uid !== i?.uid && (N.value = e, O.value = r, !t && a("expand-change", e?.pathValues || []));
		}, ie = (e, t, n = !0) => {
			let { checkStrictly: r, multiple: i } = p.value, s = P.value[0];
			o = !0, !i && s?.doCheck(!1), e.doCheck(t), de(), n && !i && !r && a("close"), !n && !i && Y(e);
		}, Y = (e) => {
			e && (e = e.parent, Y(e), e && J(e));
		}, oe = (e) => y?.getFlattedNodes(e), le = (e) => oe(e)?.filter(({ checked: e }) => e !== !1), ue = () => {
			P.value.forEach((e) => e.doCheck(!1)), de(), O.value = O.value.slice(0, 1), N.value = void 0, a("expand-change", []);
		}, de = () => {
			let { checkStrictly: e, multiple: t } = p.value, n = P.value, r = Me(n, le(!e)), i = r.map((e) => e.valueByOption);
			P.value = r, D.value = t ? i : i[0] ?? null;
		}, Z = (e = !1, t = !1) => {
			let { modelValue: n } = i, { lazy: r, multiple: a, checkStrictly: s } = p.value, c = !s;
			if (!(!b.value || o || !t && L(n, D.value))) if (r && !e) {
				let e = se(me(ce(n))).map((e) => y?.getNodeByValue(e)).filter((e) => !!e && !e.loaded && !e.loading);
				e.length ? e.forEach((e) => {
					q(e, () => Z(!1, t));
				}) : Z(!0, t);
			} else fe(se((a ? ce(n) : [n]).map((e) => y?.getNodeByValue(e, c))), t), D.value = I(n ?? void 0);
		}, fe = (e, t = !0) => {
			let { checkStrictly: n } = p.value, r = P.value, i = e.filter((e) => !!e && (n || e.isLeaf)), a = y?.getSameNode(N.value), o = t && a || i[0];
			o ? o.pathNodes.forEach((e) => J(e, !0)) : N.value = void 0, r.forEach((e) => e.doCheck(!1)), x(i).forEach((e) => e.doCheck(!0)), P.value = i, d(pe);
		}, pe = () => {
			ne && C.value.forEach((e) => {
				let t = e?.$el;
				if (t) if (z.value) {
					let t = e?.getActiveNodeIndex?.();
					t !== void 0 && t >= 0 && e?.scrollToItem?.(t);
				} else {
					let e = t.querySelector(`.${f.namespace.value}-scrollbar__wrap`), n = t.querySelector(`.${f.b("node")}.in-active-path`);
					if (!n) {
						let e = t.querySelectorAll(`.${f.b("node")}.${f.is("active")}`);
						n = e[e.length - 1];
					}
					re(e, n);
				}
			});
		}, Q = (e) => {
			let t = e.target, n = ae(e);
			switch (n) {
				case X.up:
				case X.down: {
					e.preventDefault();
					let r = n === X.up ? -1 : 1;
					if (z.value) {
						let e = Ae(t), n = C.value[e];
						if (n) {
							let i = n.getNodeIndexById(t.id);
							if (i >= 0) {
								let t = O.value[e] ?? [], a = t.length, o = i + r;
								for (; o >= 0 && o < a;) {
									if (!t[o].isDisabled) {
										n.focusNodeAt(o);
										return;
									}
									o += r;
								}
							}
						}
					}
					G(te(t, r, `.${f.b("node")}[tabindex="-1"]`));
					break;
				}
				case X.left: {
					e.preventDefault();
					let n = C.value[Ae(t) - 1]?.$el.querySelector(`.${f.b("node")}[aria-expanded="true"]`);
					G(n);
					break;
				}
				case X.right: {
					e.preventDefault();
					let n = C.value[Ae(t) + 1]?.$el.querySelector(`.${f.b("node")}[tabindex="-1"]`);
					G(n);
					break;
				}
				case X.enter:
				case X.numpadEnter:
					je(t);
					break;
			}
		};
		return h($, x({
			config: p,
			expandingNode: N,
			checkedNodes: P,
			isHoverMenu: F,
			initialLoaded: b,
			renderLabelFn: ee,
			virtualScroll: z,
			itemSize: H,
			height: U,
			lazyLoad: q,
			expandNode: J,
			handleCheckChange: ie
		})), t(p, (e, t) => {
			L(e, t) || W();
		}, { immediate: !0 }), t(() => i.options, W, { deep: !0 }), t(() => i.modelValue, () => {
			o = !1, Z();
		}, { deep: !0 }), t(() => D.value, (e) => {
			L(e, i.modelValue) || (a(B, e), a(V, e));
		}), l(() => C.value = []), M(() => !R(i.modelValue) && Z()), n({
			menuList: C,
			menus: O,
			checkedNodes: P,
			handleKeyDown: Q,
			handleCheckChange: ie,
			getFlattedNodes: oe,
			getCheckedNodes: le,
			clearCheckedNodes: ue,
			calculateCheckedValue: de,
			scrollToExpandingNode: pe,
			loadLazyRootNodes: () => {
				S.value || !b.value || W();
			}
		}), (t, n) => (c(), k("div", {
			class: u([j(f).b("panel"), j(f).is("bordered", e.border)]),
			onKeydown: Q
		}, [(c(!0), k(w, null, g(O.value, (e, n) => (c(), A(we, {
			key: n,
			ref_for: !0,
			ref: (e) => C.value[n] = e,
			index: n,
			nodes: [...e],
			"virtual-scroll": z.value,
			"item-size": H.value,
			height: U.value
		}, {
			empty: T(() => [s(t.$slots, "empty")]),
			_: 3
		}, 8, [
			"index",
			"nodes",
			"virtual-scroll",
			"item-size",
			"height"
		]))), 128))], 34));
	}
}), Pe = /* @__PURE__ */ e({
	CASCADER_PANEL_HEIGHT: () => 204,
	CASCADER_PANEL_INJECTION_KEY: () => $,
	CASCADER_PANEL_ITEM_SIZE: () => 34,
	CommonProps: () => Q,
	DefaultProps: () => he,
	ElCascaderPanel: () => Fe,
	cascaderPanelEmits: () => ve,
	cascaderPanelProps: () => ge,
	default: () => Fe,
	useCascaderConfig: () => ye
}), Fe = P(Ne);
//#endregion
export { Pe as n, Q as r, Fe as t };
