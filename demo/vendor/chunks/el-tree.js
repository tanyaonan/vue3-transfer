globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, Ct as r, Dt as i, E as a, Ft as o, G as s, H as c, I as l, J as u, K as d, Mt as f, N as p, O as m, Ot as h, Pt as g, T as _, Tt as v, U as y, V as b, W as x, _ as S, b as C, bt as w, ct as T, d as E, jt as ee, l as D, nt as O, p as k, tt as A, ut as j, v as M, w as N, x as P, y as F, z as te } from "./vue.runtime.js";
import { t as ne } from "./shared/element-plus/utils/vue/install.js";
import { t as re } from "./shared/lodash/isEqual.js";
import { a as ie, l as I, s as L, t as R } from "./shared/element-plus/utils/types.js";
import { n as ae, r as z } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as oe } from "./shared/element-plus/utils/error.js";
import { c as se } from "./shared/vueuse.js";
import { a as B, t as ce } from "./shared/element-plus/utils/dom/style.js";
import { r as V } from "./shared/element-plus/hooks/use-namespace.js";
import { C as le, s as ue } from "./shared/element-plus-icons.js";
import { a as de } from "./shared/element-plus/utils/vue/icon.js";
import { t as fe } from "./el-icon.js";
import { a as H, n as pe } from "./shared/element-plus/constants/aria.js";
import { n as me } from "./el-form/constants.js";
import { t as he } from "./shared/element-plus/virtual/_plugin-vue_export-helper.js";
import { n as ge } from "./shared/element-plus/hooks/use-locale.js";
import { t as _e } from "./el-checkbox.js";
import { t as ve } from "./el-collapse-transition.js";
import { t as ye } from "./el-text.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree/src/tree.mjs
var U = ae({
	data: {
		type: z(Array),
		default: () => []
	},
	emptyText: { type: String },
	renderAfterExpand: {
		type: Boolean,
		default: !0
	},
	nodeKey: String,
	checkStrictly: Boolean,
	defaultExpandAll: Boolean,
	expandOnClickNode: {
		type: Boolean,
		default: !0
	},
	checkOnClickNode: Boolean,
	checkOnClickLeaf: {
		type: Boolean,
		default: !0
	},
	checkDescendants: Boolean,
	autoExpandParent: {
		type: Boolean,
		default: !0
	},
	defaultCheckedKeys: { type: Array },
	defaultExpandedKeys: { type: Array },
	currentNodeKey: { type: [String, Number] },
	renderContent: { type: z(Function) },
	showCheckbox: Boolean,
	draggable: Boolean,
	allowDrag: { type: z(Function) },
	allowDrop: { type: z(Function) },
	props: {
		type: Object,
		default: () => ({
			children: "children",
			label: "label",
			disabled: "disabled"
		})
	},
	lazy: Boolean,
	highlightCurrent: Boolean,
	load: { type: Function },
	filterNodeMethod: { type: Function },
	accordion: Boolean,
	indent: {
		type: Number,
		default: 18
	},
	icon: { type: de }
}), be = {
	"check-change": (e, t, n) => e && R(t) && R(n),
	"current-change": (e, t) => !0,
	"node-click": (e, t, n, r) => e && t && r instanceof Event,
	"node-contextmenu": (e, t, n, r) => e instanceof Event && t && n,
	"node-collapse": (e, t, n) => e && t,
	"node-expand": (e, t, n) => e && t,
	check: (e, t) => e && t,
	"node-drag-start": (e, t) => e && t,
	"node-drag-end": (e, t, n, r) => e && r,
	"node-drop": (e, t, n, r) => e && t && r,
	"node-drag-leave": (e, t, n) => e && t && n,
	"node-drag-enter": (e, t, n) => e && t && n,
	"node-drag-over": (e, t, n) => e && t && n
}, W = "RootTree", G = "NodeInstance", K = "TreeNodeMap", xe = "$treeNodeId", Se = function(e, t) {
	!t || t.$treeNodeId || Object.defineProperty(t, xe, {
		value: e.id,
		enumerable: !1,
		configurable: !1,
		writable: !1
	});
}, q = (e, t) => t?.[e || "$treeNodeId"], J = (e, t, n) => {
	let r = e.value.currentNode;
	n();
	let i = e.value.currentNode;
	r !== i && t("current-change", i ? i.data : null, i);
}, Ce = (e) => {
	let t = !0, n = !0, r = !0, i = !0;
	for (let a = 0, o = e.length; a < o; a++) {
		let o = e[a];
		(o.checked !== !0 || o.indeterminate) && (t = !1, o.disabled || (r = !1)), (o.checked !== !1 || o.indeterminate) && (n = !1), o.isEffectivelyChecked || (i = !1);
	}
	return {
		all: t,
		none: n,
		allWithoutDisable: r,
		half: !t && !n,
		isEffectivelyChecked: i
	};
}, Y = function(e) {
	if (e.childNodes.length === 0 || e.loading) {
		e.isEffectivelyChecked = e.disabled || e.checked;
		return;
	}
	let { all: t, none: n, half: r, isEffectivelyChecked: i } = Ce(e.childNodes);
	e.isEffectivelyChecked = i, t ? (e.checked = !0, e.indeterminate = !1) : r ? (e.checked = !1, e.indeterminate = !0) : n && (e.checked = !1, e.indeterminate = !1);
	let a = e.parent;
	!a || a.level === 0 || e.store.checkStrictly || Y(a);
}, X = function(e, t) {
	let n = e.store.props, r = e.data || {}, a = n[t];
	if (i(a)) return a(r, e);
	if (ee(a)) return r[a];
	if (L(a)) {
		let e = r[t];
		return L(e) ? "" : e;
	}
}, Z = function(e, t) {
	e.forEach((e) => {
		e.canFocus = t, Z(e.childNodes, t);
	});
}, we = 0, Q = class e {
	constructor(e) {
		this.isLeafByUser = void 0, this.isLeaf = void 0, this.isEffectivelyChecked = !1, this.id = we++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
		for (let t in e) r(e, t) && (this[t] = e[t]);
		this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
	}
	initialize() {
		let e = this.store;
		if (!e) throw Error("[Node]store is required!");
		e.registerNode(this);
		let t = e.props;
		if (t && t.isLeaf !== void 0) {
			let e = X(this, "isLeaf");
			R(e) && (this.isLeafByUser = e);
		}
		if (e.lazy !== !0 && this.data ? (this.setData(this.data), e.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && e.lazy && e.defaultExpandAll && !this.isLeafByUser && this.expand(), v(this.data) || Se(this, this.data), !this.data) return;
		let n = e.defaultExpandedKeys, r = e.key;
		r && !I(this.key) && n && n.includes(this.key) && this.expand(null, e.autoExpandParent), r && e.currentNodeKey !== void 0 && this.key === e.currentNodeKey && (e.currentNode && (e.currentNode.isCurrent = !1), e.currentNode = this, e.currentNode.isCurrent = !0), e.lazy && e._initDefaultCheckedNode(this), this.updateLeafState(), (this.level === 1 || this.parent?.expanded === !0) && (this.canFocus = !0);
	}
	setData(e) {
		v(e) || Se(this, e), this.data = e, this.childNodes = [];
		let t;
		t = this.level === 0 && v(this.data) ? this.data : X(this, "children") || [];
		for (let e = 0, n = t.length; e < n; e++) this.insertChild({ data: t[e] });
	}
	get label() {
		return X(this, "label");
	}
	get key() {
		let e = this.store.key;
		return this.data ? this.data[e] : null;
	}
	get disabled() {
		return X(this, "disabled");
	}
	get nextSibling() {
		let e = this.parent;
		if (e) {
			let t = e.childNodes.indexOf(this);
			if (t > -1) return e.childNodes[t + 1];
		}
		return null;
	}
	get previousSibling() {
		let e = this.parent;
		if (e) {
			let t = e.childNodes.indexOf(this);
			if (t > -1) return t > 0 ? e.childNodes[t - 1] : null;
		}
		return null;
	}
	contains(e, t = !0) {
		return (this.childNodes || []).some((n) => n === e || t && n.contains(e));
	}
	remove() {
		let e = this.parent;
		e && e.removeChild(this);
	}
	insertChild(t, n, r) {
		if (!t) throw Error("InsertChild error: child is required.");
		if (!(t instanceof e)) {
			if (!r) {
				let e = this.getChildren(!0);
				e?.includes(t.data) || (L(n) || n < 0 ? e?.push(t.data) : e?.splice(n, 0, t.data));
			}
			Object.assign(t, {
				parent: this,
				store: this.store
			}), t = T(new e(t)), t instanceof e && t.initialize();
		}
		t.level = this.level + 1, L(n) || n < 0 ? this.childNodes.push(t) : this.childNodes.splice(n, 0, t), this.updateLeafState();
	}
	insertBefore(e, t) {
		let n;
		t && (n = this.childNodes.indexOf(t)), this.insertChild(e, n);
	}
	insertAfter(e, t) {
		let n;
		t && (n = this.childNodes.indexOf(t), n !== -1 && (n += 1)), this.insertChild(e, n);
	}
	removeChild(e) {
		let t = this.getChildren() || [], n = t.indexOf(e.data);
		n > -1 && t.splice(n, 1);
		let r = this.childNodes.indexOf(e);
		r > -1 && (this.store && this.store.deregisterNode(e), e.parent = null, this.childNodes.splice(r, 1)), this.updateLeafState();
	}
	removeChildByData(e) {
		let t = this.childNodes.find((t) => t.data === e);
		t && this.removeChild(t);
	}
	expand(e, t) {
		let n = () => {
			if (t) {
				let e = this.parent;
				for (; e && e.level > 0;) e.expanded = !0, e = e.parent;
			}
			this.expanded = !0, e && e(), Z(this.childNodes, !0);
		};
		this.shouldLoadData() ? this.loadData((e) => {
			v(e) && (this.store.checkStrictly || (this.checked ? this.setChecked(!0, !0) : Y(this)), n());
		}) : n();
	}
	doCreateChildren(e, t = {}) {
		e.forEach((e) => {
			this.insertChild(Object.assign({ data: e }, t), void 0, !0);
		});
	}
	collapse() {
		this.expanded = !1, Z(this.childNodes, !1);
	}
	shouldLoadData() {
		return !!(this.store.lazy === !0 && this.store.load && !this.loaded);
	}
	updateLeafState() {
		if (this.store.lazy === !0 && this.loaded !== !0 && this.isLeafByUser !== void 0) {
			this.isLeaf = this.isLeafByUser, this.isEffectivelyChecked = this.isLeaf && this.disabled;
			return;
		}
		let e = this.childNodes;
		if (!this.store.lazy || this.store.lazy === !0 && this.loaded === !0) {
			this.isLeaf = !e || e.length === 0, this.isEffectivelyChecked = this.isLeaf && this.disabled;
			return;
		}
		this.isLeaf = !1;
	}
	setChecked(e, t, n, r) {
		if (this.indeterminate = e === "half", this.checked = e === !0, this.isEffectivelyChecked = !this.childNodes.length && (this.disabled || this.checked), this.store.checkStrictly && !t) return;
		if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
			let n = () => {
				if (t) {
					let n = this.childNodes;
					for (let i = 0, a = n.length; i < a; i++) {
						let a = n[i];
						r ||= e !== !1;
						let o = a.disabled && a.isLeaf ? a.checked : r;
						a.setChecked(o, t, !0, r);
					}
					let { half: i, all: a, isEffectivelyChecked: o } = Ce(n);
					a || (this.checked = a, this.indeterminate = i), this.isEffectivelyChecked = this.childNodes.length ? o : this.disabled || this.checked;
				}
			};
			if (this.shouldLoadData()) {
				this.loadData(() => {
					n(), Y(this);
				}, { checked: e !== !1 });
				return;
			} else n();
		}
		let i = this.parent;
		!i || i.level === 0 || !n && !this.store.checkStrictly && Y(i);
	}
	getChildren(e = !1) {
		if (this.level === 0) return this.data;
		let t = this.data;
		if (!t) return null;
		let n = this.store.props, r = "children";
		return n && (r = n.children || "children"), L(t[r]) && (t[r] = null), e && !t[r] && (t[r] = []), t[r];
	}
	updateChildren() {
		let e = this.getChildren() || [], t = this.childNodes.map((e) => e.data), n = {}, r = [];
		e.forEach((e, i) => {
			let a = e[xe];
			a && t.some((e) => e?.$treeNodeId === a) ? n[a] = {
				index: i,
				data: e
			} : r.push({
				index: i,
				data: e
			});
		}), this.store.lazy || t.forEach((e) => {
			n[e?.$treeNodeId] || this.removeChildByData(e);
		}), r.forEach(({ index: e, data: t }) => {
			this.insertChild({ data: t }, e);
		}), this.updateLeafState();
	}
	loadData(e, t = {}) {
		this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(t).length) ? (this.loading = !0, this.store.load(this, (n) => {
			this.childNodes = [], this.doCreateChildren(n, t), this.loaded = !0, this.loading = !1, this.updateLeafState(), e && e.call(this, n);
		}, () => {
			this.loading = !1;
		})) : e && e.call(this);
	}
	eachNode(e) {
		let t = [this];
		for (; t.length;) {
			let n = t.shift();
			t.unshift(...n.childNodes), e(n);
		}
	}
	reInitChecked() {
		this.store.checkStrictly || Y(this);
	}
}, Te = class {
	constructor(e) {
		this.lazy = !1, this.checkStrictly = !1, this.autoExpandParent = !1, this.defaultExpandAll = !1, this.checkDescendants = !1, this.currentNode = null, this.currentNodeKey = null;
		for (let t in e) r(e, t) && (this[t] = e[t]);
		this.nodesMap = {};
	}
	initialize() {
		if (this.root = new Q({
			data: this.data,
			store: this
		}), this.root.initialize(), this.lazy && this.load) {
			let e = this.load;
			e(this.root, (e) => {
				this.root.doCreateChildren(e), this._initDefaultCheckedNodes();
			}, w);
		} else this._initDefaultCheckedNodes();
	}
	filter(e) {
		let t = this.filterNodeMethod, n = this.lazy, r = async function(i) {
			let a = i.root ? i.root.childNodes : i.childNodes;
			for (let [n, i] of a.entries()) i.visible = !!t?.call(i, e, i.data, i), n % 80 == 0 && n > 0 && await p(), await r(i);
			if (!i.visible && a.length) {
				let e = !0;
				e = !a.some((e) => e.visible), i.root ? i.root.visible = e === !1 : i.visible = e === !1;
			}
			e && i.visible && !i.isLeaf && (!n || i.loaded) && i.expand();
		};
		r(this);
	}
	setData(e) {
		e === this.root.data ? this.root.updateChildren() : (this.nodesMap = {}, this.root.setData(e), this._initDefaultCheckedNodes(), this.setCurrentNodeKey(this.currentNodeKey));
	}
	getNode(e) {
		if (e instanceof Q) return e;
		let t = h(e) ? q(this.key, e) : e;
		return this.nodesMap[t] || null;
	}
	insertBefore(e, t) {
		let n = this.getNode(t);
		n.parent?.insertBefore({ data: e }, n);
	}
	insertAfter(e, t) {
		let n = this.getNode(t);
		n.parent?.insertAfter({ data: e }, n);
	}
	remove(e) {
		let t = this.getNode(e);
		t && t.parent && (t === this.currentNode && (this.currentNode = null), t.parent.removeChild(t));
	}
	append(e, t) {
		let n = ie(t) ? this.root : this.getNode(t);
		n && n.insertChild({ data: e });
	}
	_initDefaultCheckedNodes() {
		let e = this.defaultCheckedKeys || [], t = this.nodesMap;
		e.forEach((e) => {
			let n = t[e];
			n && n.setChecked(!0, !this.checkStrictly);
		});
	}
	_initDefaultCheckedNode(e) {
		let t = this.defaultCheckedKeys || [];
		!I(e.key) && t.includes(e.key) && e.setChecked(!0, !this.checkStrictly);
	}
	setDefaultCheckedKey(e) {
		e !== this.defaultCheckedKeys && (this.defaultCheckedKeys = e, this._initDefaultCheckedNodes());
	}
	registerNode(e) {
		let t = this.key;
		if (!(!e || !e.data)) if (!t) this.nodesMap[e.id] = e;
		else {
			let t = e.key;
			I(t) || (this.nodesMap[t] = e);
		}
	}
	deregisterNode(e) {
		!this.key || !e || !e.data || (e.childNodes.forEach((e) => {
			this.deregisterNode(e);
		}), delete this.nodesMap[e.key]);
	}
	getCheckedNodes(e = !1, t = !1) {
		let n = [], r = function(i) {
			(i.root ? i.root.childNodes : i.childNodes).forEach((i) => {
				(i.checked || t && i.indeterminate) && (!e || e && i.isLeaf) && n.push(i.data), r(i);
			});
		};
		return r(this), n;
	}
	getCheckedKeys(e = !1) {
		return this.getCheckedNodes(e).map((e) => (e || {})[this.key]);
	}
	getHalfCheckedNodes() {
		let e = [], t = function(n) {
			(n.root ? n.root.childNodes : n.childNodes).forEach((n) => {
				n.indeterminate && e.push(n.data), t(n);
			});
		};
		return t(this), e;
	}
	getHalfCheckedKeys() {
		return this.getHalfCheckedNodes().map((e) => (e || {})[this.key]);
	}
	_getAllNodes() {
		let e = [], t = this.nodesMap;
		for (let n in t) r(t, n) && e.push(t[n]);
		return e;
	}
	updateChildren(e, t) {
		let n = this.nodesMap[e];
		if (!n) return;
		let r = n.childNodes;
		for (let e = r.length - 1; e >= 0; e--) {
			let t = r[e];
			this.remove(t.data);
		}
		for (let e = 0, r = t.length; e < r; e++) {
			let r = t[e];
			this.append(r, n.data);
		}
	}
	_setCheckedKeys(e, t = !1, n) {
		let r = this._getAllNodes().sort((e, t) => e.level - t.level), i = Object.create(null), a = Object.keys(n);
		r.forEach((e) => e.setChecked(!1, !1));
		let o = (t) => {
			t.childNodes.forEach((t) => {
				i[t.data[e]] = !0, t.childNodes?.length && o(t);
			});
		};
		for (let n = 0, s = r.length; n < s; n++) {
			let s = r[n], c = s.data[e].toString();
			if (!a.includes(c)) {
				s.checked && !i[c] && s.setChecked(!1, !1);
				continue;
			}
			if (s.childNodes.length && o(s), s.isLeaf || this.checkStrictly) {
				s.setChecked(!0, !1);
				continue;
			}
			if (s.setChecked(!0, !0), t) {
				s.setChecked(!1, !1, !0);
				let e = function(t) {
					t.childNodes.forEach((t) => {
						t.isLeaf || t.setChecked(!1, !1, !0), e(t);
					}), t.reInitChecked();
				};
				e(s);
			}
		}
	}
	setCheckedNodes(e, t = !1) {
		let n = this.key, r = {};
		e.forEach((e) => {
			r[(e || {})[n]] = !0;
		}), this._setCheckedKeys(n, t, r);
	}
	setCheckedKeys(e, t = !1) {
		this.defaultCheckedKeys = e;
		let n = this.key, r = {};
		e.forEach((e) => {
			r[e] = !0;
		}), this._setCheckedKeys(n, t, r);
	}
	setDefaultExpandedKeys(e) {
		e ||= [], this.defaultExpandedKeys = e, e.forEach((e) => {
			let t = this.getNode(e);
			t && t.expand(null, this.autoExpandParent);
		});
	}
	setChecked(e, t, n) {
		let r = this.getNode(e);
		r && r.setChecked(!!t, n);
	}
	getCurrentNode() {
		return this.currentNode;
	}
	setCurrentNode(e) {
		let t = this.currentNode;
		t && (t.isCurrent = !1), this.currentNode = e, this.currentNode.isCurrent = !0;
	}
	setUserCurrentNode(e, t = !0) {
		let n = e[this.key], r = this.nodesMap[n];
		this.setCurrentNode(r), t && this.currentNode && this.currentNode.level > 1 && this.currentNode.parent?.expand(null, !0);
	}
	setCurrentNodeKey(e, t = !0) {
		if (this.currentNodeKey = e, ie(e)) {
			this.currentNode && (this.currentNode.isCurrent = !1), this.currentNode = null;
			return;
		}
		let n = this.getNode(e);
		n && (this.setCurrentNode(n), t && this.currentNode && this.currentNode.level > 1 && this.currentNode.parent?.expand(null, !0));
	}
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree/src/model/useNodeExpandEventBroadcast.mjs
function Ee(e) {
	let t = n(K, null), r = {
		treeNodeExpand: (t) => {
			e.node !== t && e.node?.collapse();
		},
		children: /* @__PURE__ */ new Set()
	};
	return t && t.children.add(r), l(() => {
		t && t.children.delete(r), r = null;
	}), y(K, r), { broadcastExpanded: (t) => {
		if (e.accordion) for (let e of r.children) e.treeNodeExpand(t);
	} };
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree/src/model/useDragNode.mjs
var De = Symbol("dragEvents");
function Oe({ props: e, ctx: t, el$: n, dropIndicator$: r, store: a }) {
	let o = V("tree"), s = j({
		showDropIndicator: !1,
		draggingNode: null,
		dropNode: null,
		allowDrop: !0,
		dropType: null
	});
	return y(De, {
		treeNodeDragStart: ({ event: n, treeNode: r }) => {
			if (n.dataTransfer) {
				if (i(e.allowDrag) && !e.allowDrag(r.node)) return n.preventDefault(), !1;
				n.dataTransfer.effectAllowed = "move";
				try {
					n.dataTransfer.setData("text/plain", "");
				} catch {}
				s.value.draggingNode = r, t.emit("node-drag-start", r.node, n);
			}
		},
		treeNodeDragOver: ({ event: a, treeNode: c }) => {
			if (!a.dataTransfer) return;
			let l = c, u = s.value.dropNode;
			u && u.node.id !== l.node.id && B(u.$el, o.is("drop-inner"));
			let d = s.value.draggingNode;
			if (!d || !l) return;
			let f = !0, p = !0, m = !0, h = !0;
			i(e.allowDrop) && (f = e.allowDrop(d.node, l.node, "prev"), h = p = e.allowDrop(d.node, l.node, "inner"), m = e.allowDrop(d.node, l.node, "next")), a.dataTransfer.dropEffect = p || f || m ? "move" : "none", (f || p || m) && u?.node.id !== l.node.id && (u && t.emit("node-drag-leave", d.node, u.node, a), t.emit("node-drag-enter", d.node, l.node, a)), f || p || m ? s.value.dropNode = l : s.value.dropNode = null, l.node.nextSibling === d.node && (m = !1), l.node.previousSibling === d.node && (f = !1), l.node.contains(d.node, !1) && (p = !1), (d.node === l.node || d.node.contains(l.node)) && (f = !1, p = !1, m = !1);
			let g = l.$el, _ = g.querySelector(`.${o.be("node", "content")}`).getBoundingClientRect(), v = n.value.getBoundingClientRect(), y = n.value.scrollTop, b, x = f ? p ? .25 : m ? .45 : 1 : -Infinity, S = m ? p ? .75 : f ? .55 : 0 : Infinity, C = -9999, w = a.clientY - _.top;
			b = w < _.height * x ? "before" : w > _.height * S ? "after" : p ? "inner" : "none";
			let T = g.querySelector(`.${o.be("node", "expand-icon")}`).getBoundingClientRect(), E = r.value;
			b === "before" ? C = T.top - v.top + y : b === "after" && (C = T.bottom - v.top + y), E.style.top = `${C}px`, E.style.left = `${T.right - v.left}px`, b === "inner" ? ce(g, o.is("drop-inner")) : B(g, o.is("drop-inner")), s.value.showDropIndicator = b === "before" || b === "after", s.value.allowDrop = s.value.showDropIndicator || h, s.value.dropType = b, t.emit("node-drag-over", d.node, l.node, a);
		},
		treeNodeDragEnd: (e) => {
			let { draggingNode: n, dropType: r, dropNode: i } = s.value;
			if (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move"), n?.node.data && i) {
				let s = { data: n.node.data };
				r !== "none" && n.node.remove(), r === "before" ? i.node.parent?.insertBefore(s, i.node) : r === "after" ? i.node.parent?.insertAfter(s, i.node) : r === "inner" && i.node.insertChild(s), r !== "none" && (a.value.registerNode(s), a.value.key && n.node.eachNode((e) => {
					a.value.nodesMap[e.data[a.value.key]]?.setChecked(e.checked, !a.value.checkStrictly);
				})), B(i.$el, o.is("drop-inner")), t.emit("node-drag-end", n.node, i.node, r, e), r !== "none" && t.emit("node-drop", n.node, i.node, r, e);
			}
			n && !i && t.emit("node-drag-end", n.node, null, r, e), s.value.showDropIndicator = !1, s.value.draggingNode = null, s.value.dropNode = null, s.value.allowDrop = !0;
		}
	}), { dragState: s };
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree/src/tree-node.vue_vue_type_script_lang.mjs
var ke = _({
	name: "ElTreeNode",
	components: {
		ElCollapseTransition: ve,
		ElCheckbox: _e,
		NodeContent: _({
			name: "ElTreeNodeContent",
			props: {
				node: {
					type: Object,
					required: !0
				},
				renderContent: Function
			},
			setup(e) {
				let t = V("tree"), r = n(G), i = n(W);
				return () => {
					let n = e.node, { data: a, store: o } = n;
					return e.renderContent ? e.renderContent(m, {
						_self: r,
						node: n,
						data: a,
						store: o
					}) : s(i.ctx.slots, "default", {
						node: n,
						data: a
					}, () => [m(ye, {
						tag: "span",
						truncated: !0,
						class: t.be("node", "label")
					}, () => [n.label])]);
				};
			}
		}),
		ElIcon: fe,
		Loading: le
	},
	props: {
		node: {
			type: Q,
			default: () => ({})
		},
		props: {
			type: Object,
			default: () => ({})
		},
		accordion: Boolean,
		renderContent: Function,
		renderAfterExpand: Boolean,
		showCheckbox: Boolean
	},
	emits: ["node-expand"],
	setup(e, r) {
		let o = V("tree"), { broadcastExpanded: s } = Ee(e), c = n(W), l = j(!1), u = j(!1), d = j(), f = j(), m = j(), h = n(De), g = a();
		y(G, g), c || oe("Tree", "Can not find node's tree."), e.node.expanded && (l.value = !0, u.value = !0);
		let _ = c.props.props.children || "children";
		t(() => {
			let t = e.node.data?.[_];
			return t && [...t];
		}, () => {
			e.node.updateChildren();
		}), t(() => e.node.indeterminate, (t) => {
			x(e.node.checked, t);
		}), t(() => e.node.checked, (t) => {
			x(t, e.node.indeterminate);
		}), t(() => e.node.childNodes.length, () => e.node.reInitChecked()), t(() => e.node.expanded, (e) => {
			p(() => l.value = e), e && (u.value = !0);
		});
		let v = (e) => c.props.nodeKey ? q(c.props.nodeKey, e.data) : e.id, b = (t) => {
			let n = e.props.class;
			if (!n) return {};
			let r;
			if (i(n)) {
				let { data: e } = t;
				r = n(e, t);
			} else r = n;
			return ee(r) ? { [r]: !0 } : r;
		}, x = (t, n) => {
			(d.value !== t || f.value !== n) && c.ctx.emit("check-change", e.node.data, t, n), d.value = t, f.value = n;
		}, S = (t) => {
			J(c.store, c.ctx.emit, () => {
				if (c?.props?.nodeKey) {
					let t = v(e.node);
					c.store.value.setCurrentNodeKey(t);
				} else c.store.value.setCurrentNode(e.node);
			}), c.currentNode.value = e.node, c.props.expandOnClickNode && w(), (c.props.checkOnClickNode || e.node.isLeaf && c.props.checkOnClickLeaf && e.showCheckbox) && !e.node.disabled && T(!e.node.checked), c.ctx.emit("node-click", e.node.data, e.node, g, t);
		}, C = (t) => {
			c.instance.vnode.props?.onNodeContextmenu && (t.stopPropagation(), t.preventDefault()), c.ctx.emit("node-contextmenu", t, e.node.data, e.node, g);
		}, w = () => {
			e.node.isLeaf || (l.value ? (c.ctx.emit("node-collapse", e.node.data, e.node, g), e.node.collapse()) : e.node.expand(() => {
				r.emit("node-expand", e.node.data, e.node, g);
			}));
		}, T = (t) => {
			let n = c?.props.checkStrictly, r = e.node.childNodes;
			!n && r.length && (t = r.some((e) => !e.isEffectivelyChecked)), e.node.setChecked(t, !n), p(() => {
				let t = c.store.value;
				c.ctx.emit("check", e.node.data, {
					checkedNodes: t.getCheckedNodes(),
					checkedKeys: t.getCheckedKeys(),
					halfCheckedNodes: t.getHalfCheckedNodes(),
					halfCheckedKeys: t.getHalfCheckedKeys()
				});
			});
		};
		return {
			ns: o,
			node$: m,
			tree: c,
			expanded: l,
			childNodeRendered: u,
			oldChecked: d,
			oldIndeterminate: f,
			getNodeKey: v,
			getNodeClass: b,
			handleSelectChange: x,
			handleClick: S,
			handleContextMenu: C,
			handleExpandIconClick: w,
			handleCheckChange: T,
			handleChildNodeExpand: (e, t, n) => {
				s(t), c.ctx.emit("node-expand", e, t, n);
			},
			handleDragStart: (t) => {
				c.props.draggable && h.treeNodeDragStart({
					event: t,
					treeNode: e
				});
			},
			handleDragOver: (t) => {
				t.preventDefault(), c.props.draggable && h.treeNodeDragOver({
					event: t,
					treeNode: {
						$el: m.value,
						node: e.node
					}
				});
			},
			handleDrop: (e) => {
				e.preventDefault();
			},
			handleDragEnd: (e) => {
				c.props.draggable && h.treeNodeDragEnd(e);
			},
			CaretRight: ue
		};
	}
}), Ae = [
	"aria-expanded",
	"aria-disabled",
	"aria-checked",
	"draggable",
	"data-key"
], je = ["aria-expanded"];
function Me(e, t, n, r, i, a) {
	let o = d("el-icon"), s = d("el-checkbox"), l = d("loading"), p = d("node-content"), m = d("el-tree-node"), h = d("el-collapse-transition");
	return O((c(), P("div", {
		ref: "node$",
		class: f([
			e.ns.b("node"),
			e.ns.is("expanded", e.expanded),
			e.ns.is("current", e.node.isCurrent),
			e.ns.is("hidden", !e.node.visible),
			e.ns.is("focusable", !e.node.disabled),
			e.ns.is("checked", !e.node.disabled && e.node.checked),
			e.getNodeClass(e.node)
		]),
		role: "treeitem",
		tabindex: "-1",
		"aria-expanded": e.expanded,
		"aria-disabled": e.node.disabled,
		"aria-checked": e.node.checked,
		draggable: e.tree.props.draggable,
		"data-key": e.getNodeKey(e.node),
		onClick: t[2] ||= E((...t) => e.handleClick && e.handleClick(...t), ["stop"]),
		onContextmenu: t[3] ||= (...t) => e.handleContextMenu && e.handleContextMenu(...t),
		onDragstart: t[4] ||= E((...t) => e.handleDragStart && e.handleDragStart(...t), ["stop"]),
		onDragover: t[5] ||= E((...t) => e.handleDragOver && e.handleDragOver(...t), ["stop"]),
		onDragend: t[6] ||= E((...t) => e.handleDragEnd && e.handleDragEnd(...t), ["stop"]),
		onDrop: t[7] ||= E((...t) => e.handleDrop && e.handleDrop(...t), ["stop"])
	}, [M("div", {
		class: f(e.ns.be("node", "content")),
		style: g({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" })
	}, [
		e.tree.props.icon || e.CaretRight ? (c(), F(o, {
			key: 0,
			class: f([
				e.ns.be("node", "expand-icon"),
				e.ns.is("leaf", e.node.isLeaf),
				{ expanded: !e.node.isLeaf && e.expanded }
			]),
			onClick: E(e.handleExpandIconClick, ["stop"])
		}, {
			default: A(() => [(c(), F(u(e.tree.props.icon || e.CaretRight)))]),
			_: 1
		}, 8, ["class", "onClick"])) : C("v-if", !0),
		e.showCheckbox ? (c(), F(s, {
			key: 1,
			"model-value": e.node.checked,
			indeterminate: e.node.indeterminate,
			disabled: !!e.node.disabled,
			onClick: t[0] ||= E(() => {}, ["stop"]),
			onChange: e.handleCheckChange
		}, null, 8, [
			"model-value",
			"indeterminate",
			"disabled",
			"onChange"
		])) : C("v-if", !0),
		e.node.loading ? (c(), F(o, {
			key: 2,
			class: f([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
		}, {
			default: A(() => [N(l)]),
			_: 1
		}, 8, ["class"])) : C("v-if", !0),
		N(p, {
			node: e.node,
			"render-content": e.renderContent
		}, null, 8, ["node", "render-content"])
	], 6), N(h, null, {
		default: A(() => [!e.renderAfterExpand || e.childNodeRendered ? O((c(), P("div", {
			key: 0,
			class: f(e.ns.be("node", "children")),
			role: "group",
			"aria-expanded": e.expanded,
			onClick: t[1] ||= E(() => {}, ["stop"])
		}, [(c(!0), P(k, null, x(e.node.childNodes, (t) => (c(), F(m, {
			key: e.getNodeKey(t),
			"render-content": e.renderContent,
			"render-after-expand": e.renderAfterExpand,
			"show-checkbox": e.showCheckbox,
			node: t,
			accordion: e.accordion,
			props: e.props,
			onNodeExpand: e.handleChildNodeExpand
		}, null, 8, [
			"render-content",
			"render-after-expand",
			"show-checkbox",
			"node",
			"accordion",
			"props",
			"onNodeExpand"
		]))), 128))], 10, je)), [[D, e.expanded]]) : C("v-if", !0)]),
		_: 1
	})], 42, Ae)), [[D, e.node.visible]]);
}
var Ne = /* @__PURE__ */ he(ke, [["render", Me]]);
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree/src/model/useKeydown.mjs
function Pe({ el$: e }, t) {
	let n = V("tree");
	te(() => {
		i();
	}), b(() => {
		e.value?.querySelectorAll("input[type=checkbox]").forEach((e) => {
			e.setAttribute("tabindex", "-1");
		});
	});
	function r(e, n) {
		let r = t.value.getNode(e[n].dataset.key);
		return r.canFocus && r.visible && (r.parent?.expanded || r.parent?.level === 0);
	}
	se(e, "keydown", (t) => {
		let i = t.target;
		if (!i.className.includes(n.b("node"))) return;
		let a = pe(t), o = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)), s = o.indexOf(i), c;
		if ([H.up, H.down].includes(a)) {
			if (t.preventDefault(), a === H.up) {
				c = s === -1 ? 0 : s === 0 ? o.length - 1 : s - 1;
				let e = c;
				for (; !r(o, c);) {
					if (c--, c === e) {
						c = -1;
						break;
					}
					c < 0 && (c = o.length - 1);
				}
			} else {
				c = s === -1 ? 0 : s < o.length - 1 ? s + 1 : 0;
				let e = c;
				for (; !r(o, c);) {
					if (c++, c === e) {
						c = -1;
						break;
					}
					c >= o.length && (c = 0);
				}
			}
			c !== -1 && o[c].focus();
		}
		[H.left, H.right].includes(a) && (t.preventDefault(), i.click());
		let l = i.querySelector("[type=\"checkbox\"]");
		[
			H.enter,
			H.numpadEnter,
			H.space
		].includes(a) && l && (t.preventDefault(), l.click());
	});
	let i = () => {
		if (!e.value) return;
		let t = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
		Array.from(e.value.querySelectorAll("input[type=checkbox]")).forEach((e) => {
			e.setAttribute("tabindex", "-1");
		});
		let r = e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);
		if (r.length) {
			r[0].setAttribute("tabindex", "0");
			return;
		}
		t[0]?.setAttribute("tabindex", "0");
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree/src/tree.vue_vue_type_script_lang.mjs
var Fe = _({
	name: "ElTree",
	components: { ElTreeNode: Ne },
	props: U,
	emits: be,
	setup(e, n) {
		let { t: r } = ge(), i = V("tree"), o = j(new Te({
			key: e.nodeKey,
			data: e.data,
			lazy: e.lazy,
			props: e.props,
			load: e.load,
			currentNodeKey: e.currentNodeKey,
			checkStrictly: e.checkStrictly,
			checkDescendants: e.checkDescendants,
			defaultCheckedKeys: e.defaultCheckedKeys,
			defaultExpandedKeys: e.defaultExpandedKeys,
			autoExpandParent: e.autoExpandParent,
			defaultExpandAll: e.defaultExpandAll,
			filterNodeMethod: e.filterNodeMethod
		}));
		o.value.initialize();
		let s = j(o.value.root), c = j(null), l = j(null), u = j(null), { broadcastExpanded: d } = Ee(e), { dragState: f } = Oe({
			props: e,
			ctx: n,
			el$: l,
			dropIndicator$: u,
			store: o
		});
		Pe({ el$: l }, o);
		let p = a(), m = S(() => {
			let e = p?.parent;
			for (; e;) {
				if (e.type.name === "ElTreeSelect") return !0;
				e = e.parent;
			}
			return !1;
		}), h = S(() => {
			let { childNodes: e } = s.value;
			return (!e || e.length === 0 || e.every(({ visible: e }) => !e)) && !m.value;
		});
		t(() => e.currentNodeKey, (e) => {
			o.value.setCurrentNodeKey(e ?? null);
		}), t(() => e.defaultCheckedKeys, (e, t) => {
			re(e, t) || o.value.setDefaultCheckedKey(e ?? []);
		}), t(() => e.defaultExpandedKeys, (e) => {
			o.value.setDefaultExpandedKeys(e ?? []);
		}), t(() => e.data, (e) => {
			o.value.setData(e);
		}, { deep: !0 }), t(() => e.checkStrictly, (e) => {
			o.value.checkStrictly = e;
		});
		let g = (t) => {
			if (!e.filterNodeMethod) throw Error("[Tree] filterNodeMethod is required when filter");
			o.value.filter(t);
		}, _ = (t) => e.nodeKey ? q(e.nodeKey, t.data) : t.id, v = (t) => {
			if (!e.nodeKey) throw Error(`[Tree] nodeKey is required in ${t}`);
		}, b = (e) => {
			v("getNodePath");
			let t = o.value.getNode(e);
			if (!t) return [];
			let n = [t.data], r = t.parent;
			for (; r && r !== s.value;) n.push(r.data), r = r.parent;
			return n.reverse();
		}, x = (e, t) => o.value.getCheckedNodes(e, t), C = (e) => o.value.getCheckedKeys(e), w = () => {
			let e = o.value.getCurrentNode();
			return e ? e.data : null;
		};
		return y(W, {
			ctx: n,
			props: e,
			store: o,
			root: s,
			currentNode: c,
			instance: p
		}), y(me, void 0), {
			ns: i,
			store: o,
			root: s,
			currentNode: c,
			dragState: f,
			el$: l,
			dropIndicator$: u,
			isEmpty: h,
			filter: g,
			getNodeKey: _,
			getNodePath: b,
			getCheckedNodes: x,
			getCheckedKeys: C,
			getCurrentNode: w,
			getCurrentKey: () => {
				v("getCurrentKey");
				let t = w();
				return t ? t[e.nodeKey] : null;
			},
			setCheckedNodes: (e, t) => {
				v("setCheckedNodes"), o.value.setCheckedNodes(e, t);
			},
			setCheckedKeys: (e, t) => {
				v("setCheckedKeys"), o.value.setCheckedKeys(e, t);
			},
			setChecked: (e, t, n = !1) => {
				o.value.setChecked(e, t, n);
			},
			getHalfCheckedNodes: () => o.value.getHalfCheckedNodes(),
			getHalfCheckedKeys: () => o.value.getHalfCheckedKeys(),
			setCurrentNode: (e, t = !0) => {
				v("setCurrentNode"), J(o, n.emit, () => {
					d(e), o.value.setUserCurrentNode(e, t);
				});
			},
			setCurrentKey: (e = null, t = !0) => {
				v("setCurrentKey"), J(o, n.emit, () => {
					d(), o.value.setCurrentNodeKey(e, t);
				});
			},
			t: r,
			getNode: (e) => o.value.getNode(e),
			remove: (e) => {
				o.value.remove(e);
			},
			append: (e, t) => {
				o.value.append(e, t);
			},
			insertBefore: (e, t) => {
				o.value.insertBefore(e, t);
			},
			insertAfter: (e, t) => {
				o.value.insertAfter(e, t);
			},
			handleNodeExpand: (e, t, r) => {
				d(t), n.emit("node-expand", e, t, r);
			},
			updateKeyChildren: (e, t) => {
				v("updateKeyChildren"), o.value.updateChildren(e, t);
			}
		};
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree/src/tree2.mjs
function Ie(e, t, n, r, i, a) {
	let l = d("el-tree-node");
	return c(), P("div", {
		ref: "el$",
		class: f([
			e.ns.b(),
			e.ns.is("dragging", !!e.dragState.draggingNode),
			e.ns.is("drop-not-allow", !e.dragState.allowDrop),
			e.ns.is("drop-inner", e.dragState.dropType === "inner"),
			{ [e.ns.m("highlight-current")]: e.highlightCurrent }
		]),
		role: "tree"
	}, [
		(c(!0), P(k, null, x(e.root.childNodes, (t) => (c(), F(l, {
			key: e.getNodeKey(t),
			node: t,
			props: e.props,
			accordion: e.accordion,
			"render-after-expand": e.renderAfterExpand,
			"show-checkbox": e.showCheckbox,
			"render-content": e.renderContent,
			onNodeExpand: e.handleNodeExpand
		}, null, 8, [
			"node",
			"props",
			"accordion",
			"render-after-expand",
			"show-checkbox",
			"render-content",
			"onNodeExpand"
		]))), 128)),
		e.isEmpty ? (c(), P("div", {
			key: 0,
			class: f(e.ns.e("empty-block"))
		}, [s(e.$slots, "empty", {}, () => [M("span", { class: f(e.ns.e("empty-text")) }, o(e.emptyText ?? e.t("el.tree.emptyText")), 3)])], 2)) : C("v-if", !0),
		O(M("div", {
			ref: "dropIndicator$",
			class: f(e.ns.e("drop-indicator"))
		}, null, 2), [[D, e.dragState.showDropIndicator]])
	], 2);
}
var Le = /* @__PURE__ */ he(Fe, [["render", Ie]]), Re = /* @__PURE__ */ e({
	ElTree: () => $,
	NODE_INSTANCE_INJECTION_KEY: () => G,
	ROOT_TREE_INJECTION_KEY: () => W,
	TREE_NODE_MAP_INJECTION_KEY: () => K,
	default: () => $,
	treeEmits: () => be,
	treeProps: () => U
}), $ = ne(Le);
//#endregion
export { Re as n, U as r, $ as t };
