globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Cn as n, Jt as r, Nt as i, Ut as a, fn as o, kn as s, kt as c, on as l, sn as u, wn as d, yn as f, yt as p } from "../shared/core.js";
import { $t as ee, E as te, Jn as m, O as ne, S as re, Sr as ie, T as ae, Wn as h, _r as g, br as oe, en as _, fn as se, kn as ce, ot as v, rn as y, sr as b } from "../shared/antd-core.js";
import { a as x, c as le, d as ue, i as de, l as fe, o as pe, p as me, s as he } from "./auto-complete.js";
import { a as ge, i as _e, n as ve, p as ye, u as be } from "./cascader.js";
import { a as S, i as xe, r as Se } from "./table.js";
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/hooks/useCache.js
var C = /* @__PURE__ */ t(s()), Ce = ((e) => {
	let t = C.useRef({ valueLabels: /* @__PURE__ */ new Map() });
	return C.useMemo(() => {
		let { valueLabels: n } = t.current, r = /* @__PURE__ */ new Map(), i = e.map((e) => {
			let { value: t, label: i } = e, a = i ?? n.get(t);
			return r.set(t, a), {
				...e,
				label: a
			};
		});
		return t.current.valueLabels = r, [i];
	}, [e]);
}), w = (e, t, n, r) => C.useMemo(() => {
	let i = (e) => e.map(({ value: e }) => e), a = i(e), o = i(t), s = a.filter((e) => !r[e]), c = a, l = o;
	if (n) {
		let e = ge(a, !0, r);
		c = e.checkedKeys, l = e.halfCheckedKeys;
	}
	return [Array.from(new Set([...s, ...c])), l];
}, [
	e,
	t,
	n,
	r
]), we = (e) => Array.isArray(e) ? e : e === void 0 ? [] : [e], Te = (e) => {
	let { label: t, value: n, children: r } = e || {};
	return {
		_title: t ? [t] : ["title", "label"],
		value: n || "value",
		key: n || "value",
		children: r || "children"
	};
}, T = (e) => !e || e.disabled || e.disableCheckbox || e.checkable === !1, Ee = (e, t) => {
	let n = [], r = (e) => {
		e.forEach((e) => {
			let i = e[t.children];
			i && (n.push(e[t.value]), r(i));
		});
	};
	return r(e), n;
}, De = (e) => e == null, Oe = ((e, t) => C.useMemo(() => be(e, {
	fieldNames: t,
	initWrapper: (e) => ({
		...e,
		valueEntities: /* @__PURE__ */ new Map()
	}),
	processEntity: (e, n) => {
		let r = e.node[t.value];
		n.valueEntities.set(r, e);
	}
}), [e, t])), E = () => null;
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/utils/legacyUtil.js
function D(e) {
	return d(e).map((e) => {
		if (!/*#__PURE__*/ C.isValidElement(e) || !e.type) return null;
		let { key: t, props: { children: n, value: r, ...i } } = e, a = {
			key: t,
			value: r,
			...i
		}, o = D(n);
		return o.length && (a.children = o), a;
	}).filter((e) => e);
}
function O(e) {
	if (!e) return e;
	let t = { ...e };
	return "props" in t || Object.defineProperty(t, "props", { get() {
		return n(!1, "New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."), t;
	} }), t;
}
function ke(e, t, r, i, a, o) {
	let s = null, c = null;
	function l() {
		function e(n, i = "0", a = !1) {
			return n.map((n, l) => {
				let u = `${i}-${l}`, d = n[o.value], f = r.includes(d), p = e(n[o.children] || [], u, f), ee = /*#__PURE__*/ C.createElement(E, n, p.map((e) => e.node));
				if (t === d && (s = ee), f) {
					let e = {
						pos: u,
						node: ee,
						children: p
					};
					return a || c.push(e), e;
				}
				return null;
			}).filter((e) => e);
		}
		c || (c = [], e(i), c.sort(({ node: { props: { value: e } } }, { node: { props: { value: t } } }) => r.indexOf(e) - r.indexOf(t)));
	}
	Object.defineProperty(e, "triggerNode", { get() {
		return n(!1, "`triggerNode` is deprecated. Please consider decoupling data with node."), l(), s;
	} }), Object.defineProperty(e, "allCheckedNodes", { get() {
		return n(!1, "`allCheckedNodes` is deprecated. Please consider decoupling data with node."), l(), a ? c : c.map(({ node: e }) => e);
	} });
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/hooks/useFilterTreeData.js
var Ae = (e, t, n) => {
	let { fieldNames: r, treeNodeFilterProp: i, filterTreeNode: a } = n, { children: o } = r;
	return C.useMemo(() => {
		if (!t || a === !1) return e;
		let n = typeof a == "function" ? a : (e, n) => String(n[i]).toUpperCase().includes(t.toUpperCase()), r = (e, i = !1) => e.reduce((e, a) => {
			let s = a[o], c = i || n(t, O(a)), l = r(s || [], c);
			return (c || l.length) && e.push({
				...a,
				isLeaf: void 0,
				[o]: l
			}), e;
		}, []);
		return r(e);
	}, [
		e,
		t,
		o,
		i,
		a
	]);
};
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/hooks/useRefFunc.js
function k(e) {
	let t = C.useRef();
	return t.current = e, C.useCallback((...e) => t.current(...e), []);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/hooks/useTreeData.js
function A(e, t) {
	let { id: n, pId: r, rootPId: i } = t, a = /* @__PURE__ */ new Map(), o = [];
	return e.forEach((e) => {
		let t = e[n], r = {
			...e,
			key: e.key || t
		};
		a.set(t, r);
	}), a.forEach((e) => {
		let t = e[r], n = a.get(t);
		n ? (n.children = n.children || [], n.children.push(e)) : (t === i || i === null) && o.push(e);
	}), o;
}
function j(e, t, n) {
	return C.useMemo(() => e ? n ? A(e, {
		id: "id",
		pId: "pId",
		rootPId: null,
		...typeof n == "object" ? n : {}
	}) : e : D(t), [
		t,
		n,
		e
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/LegacyContext.js
var je = /*#__PURE__*/ C.createContext(null), Me = /*#__PURE__*/ C.createContext(null);
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/OptionList.js
function M() {
	return M = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, M.apply(this, arguments);
}
var N = {
	width: 0,
	height: 0,
	display: "flex",
	overflow: "hidden",
	opacity: 0,
	border: 0,
	padding: 0,
	margin: 0
}, P = /*#__PURE__*/ C.forwardRef((e, t) => {
	let { prefixCls: n, multiple: i, searchValue: a, toggleOpen: s, open: c, notFoundContent: l } = me(), { virtual: u, listHeight: d, listItemHeight: p, listItemScrollOffset: ee, treeData: te, fieldNames: m, onSelect: ne, popupMatchSelectWidth: re, treeExpandAction: ie, treeTitleRender: ae, onPopupScroll: h, leftMaxCount: g, leafCountOnly: oe, valueEntities: _, classNames: se, styles: ce } = C.useContext(Me), { checkable: v, checkedKeys: y, halfCheckedKeys: b, treeExpandedKeys: x, treeDefaultExpandAll: le, treeDefaultExpandedKeys: ue, onTreeExpand: de, treeIcon: fe, showTreeIcon: pe, switcherIcon: he, treeLine: ge, treeNodeFilterProp: ve, loadData: be, treeLoadedKeys: S, treeMotion: xe, onTreeLoad: Se, keyEntities: Ce } = C.useContext(je), w = C.useRef(), we = f(() => te, [c, te], (e, t) => t[0] && e[1] !== t[1]), Te = C.useMemo(() => v ? {
		checked: y,
		halfChecked: b
	} : null, [
		v,
		y,
		b
	]);
	C.useEffect(() => {
		c && !i && y.length && w.current?.scrollTo({ key: y[0] });
	}, [c]);
	let De = (e) => {
		e.preventDefault();
	}, Oe = (e, t) => {
		let { node: n } = t;
		v && T(n) || (ne(n.key, { selected: !y.includes(n.key) }), i || s(!1));
	}, [E, D] = C.useState(ue), [O, ke] = C.useState(null), Ae = C.useMemo(() => x ? [...x] : a ? O : E, [
		E,
		O,
		x,
		a
	]), k = (e) => {
		D(e), ke(e), de && de(e);
	}, A = String(a).toLowerCase(), j = (e) => A ? String(e[ve]).toLowerCase().includes(A) : !1;
	C.useEffect(() => {
		a && ke(Ee(te, m));
	}, [a]);
	let [P, F] = C.useState(() => /* @__PURE__ */ new Map());
	C.useEffect(() => {
		g && F(/* @__PURE__ */ new Map());
	}, [g]);
	function I(e) {
		let t = e[m.value];
		if (!P.has(t)) {
			let e = _.get(t);
			if ((e.children || []).length !== 0) {
				let n = e.children.filter((e) => !e.node.disabled && !e.node.disableCheckbox && !y.includes(e.node[m.value])).length;
				P.set(t, n > g);
			} else P.set(t, !1);
		}
		return P.get(t);
	}
	let L = o((e) => {
		let t = e[m.value];
		return y.includes(t) || g === null ? !1 : g <= 0 ? !0 : oe && g ? I(e) : !1;
	}), Ne = (e) => {
		for (let t of e) if (!(t.disabled || t.selectable === !1)) {
			if (a) {
				if (j(t)) return t;
			} else return t;
			if (t[m.children]) {
				let e = Ne(t[m.children]);
				if (e) return e;
			}
		}
		return null;
	}, [Pe, Fe] = C.useState(null), R = Ce[Pe];
	C.useEffect(() => {
		if (!c) return;
		let e = null;
		e = !i && y.length && !a ? y[0] : (() => {
			let e = Ne(we);
			return e ? e[m.value] : null;
		})(), Fe(e);
	}, [c, a]), C.useImperativeHandle(t, () => ({
		scrollTo: w.current?.scrollTo,
		onKeyDown: (e) => {
			let { which: t } = e;
			switch (t) {
				case r.UP:
				case r.DOWN:
				case r.LEFT:
				case r.RIGHT:
					w.current?.onKeyDown(e);
					break;
				case r.ENTER:
					if (R) {
						let e = L(R.node), { selectable: t, value: n, disabled: r } = R?.node || {};
						t !== !1 && !r && !e && Oe(null, {
							node: { key: Pe },
							selected: !y.includes(n)
						});
					}
					break;
				case r.ESC: s(!1);
			}
		},
		onKeyUp: () => {}
	}));
	let z = f(() => !a, [a, x || E], ([e], [t, n]) => e !== t && !!(t || n)) ? be : null;
	if (we.length === 0) return /*#__PURE__*/ C.createElement("div", {
		role: "listbox",
		className: `${n}-empty`,
		onMouseDown: De
	}, l);
	let B = { fieldNames: m };
	return S && (B.loadedKeys = S), Ae && (B.expandedKeys = Ae), /*#__PURE__*/ C.createElement("div", { onMouseDown: De }, R && c && /*#__PURE__*/ C.createElement("span", {
		style: N,
		"aria-live": "assertive"
	}, R.node.value), /*#__PURE__*/ C.createElement(ye.Provider, { value: { nodeDisabled: L } }, /*#__PURE__*/ C.createElement(_e, M({
		classNames: se?.popup,
		styles: ce?.popup,
		ref: w,
		focusable: !1,
		prefixCls: `${n}-tree`,
		treeData: we,
		height: d,
		itemHeight: p,
		itemScrollOffset: ee,
		virtual: u !== !1 && re !== !1,
		multiple: i,
		icon: fe,
		showIcon: pe,
		switcherIcon: he,
		showLine: ge,
		loadData: z,
		motion: xe,
		activeKey: Pe,
		checkable: v,
		checkStrictly: !0,
		checkedKeys: Te,
		selectedKeys: v ? [] : y,
		defaultExpandAll: le,
		titleRender: ae
	}, B, {
		onActiveChange: Fe,
		onSelect: Oe,
		onCheck: Oe,
		onExpand: k,
		onLoad: Se,
		filterTreeNode: j,
		expandAction: ie,
		onScroll: h
	}))));
}), F = "SHOW_ALL", I = "SHOW_PARENT", L = "SHOW_CHILD";
function Ne(e, t, n, r) {
	let i = new Set(e);
	return t === "SHOW_CHILD" ? e.filter((e) => {
		let t = n[e];
		return !t || !t.children || !t.children.some(({ node: e }) => i.has(e[r.value])) || !t.children.every(({ node: e }) => T(e) || i.has(e[r.value]));
	}) : t === "SHOW_PARENT" ? e.filter((e) => {
		let t = n[e], r = t ? t.parent : null;
		return !r || T(r.node) || !i.has(r.key);
	}) : e;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/hooks/useSearchConfig.js
function Pe(e, t) {
	let { searchValue: n, inputValue: r, onSearch: i, autoClearSearchValue: a, filterTreeNode: o, treeNodeFilterProp: s } = t;
	return C.useMemo(() => {
		let t = typeof e == "object", c = {
			searchValue: n ?? r,
			onSearch: i,
			autoClearSearchValue: a,
			filterTreeNode: o,
			treeNodeFilterProp: s,
			...t ? e : {}
		};
		return [t ? !0 : e, c];
	}, [
		e,
		n,
		r,
		i,
		a,
		o,
		s
	]);
}
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/TreeSelect.js
function Fe() {
	return Fe = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Fe.apply(this, arguments);
}
function R(e) {
	return !e || typeof e != "object";
}
var z = /* @__PURE__ */ C.forwardRef((e, t) => {
	let { id: n, prefixCls: r = "rc-tree-select", value: i, defaultValue: a, onChange: o, onSelect: s, onDeselect: c, showSearch: d, searchValue: f, inputValue: p, onSearch: ee, autoClearSearchValue: te, filterTreeNode: m, treeNodeFilterProp: ne, showCheckedStrategy: re, treeNodeLabelProp: ie, multiple: ae, treeCheckable: h, treeCheckStrictly: g, labelInValue: oe, maxCount: _, fieldNames: se, treeDataSimpleMode: ce, treeData: v, children: y, loadData: b, treeLoadedKeys: x, onTreeLoad: le, treeDefaultExpandAll: de, treeExpandedKeys: fe, treeDefaultExpandedKeys: pe, onTreeExpand: me, treeExpandAction: he, virtual: _e, listHeight: ve = 200, listItemHeight: ye = 20, listItemScrollOffset: be = 0, onPopupVisibleChange: S, popupMatchSelectWidth: xe = !0, treeLine: Se, treeIcon: T, showTreeIcon: Ee, switcherIcon: E, treeMotion: D, treeTitleRender: A, onPopupScroll: M, classNames: N, styles: I, ...L } = e, z = l(n), B = h && !g, V = h || g, Ie = g || oe, H = V || ae, [U, W] = Pe(d, {
		searchValue: f,
		inputValue: p,
		onSearch: ee,
		autoClearSearchValue: te,
		filterTreeNode: m,
		treeNodeFilterProp: ne
	}), { searchValue: Le, onSearch: Re, autoClearSearchValue: ze = !0, filterTreeNode: Be, treeNodeFilterProp: Ve = "value" } = W, [G, He] = u(a, i), K = C.useMemo(() => h ? re || "SHOW_CHILD" : F, [re, h]), q = C.useMemo(() => Te(se), [JSON.stringify(se)]), [Ue, We] = u("", Le), Ge = Ue || "", Ke = (e) => {
		We(e), Re?.(e);
	}, qe = j(v, y, ce), { keyEntities: J, valueEntities: Y } = Oe(qe, q), Je = C.useCallback((e) => {
		let t = [], n = [];
		return e.forEach((e) => {
			Y.has(e) ? n.push(e) : t.push(e);
		}), {
			missingRawValues: t,
			existRawValues: n
		};
	}, [Y]), Ye = Ae(qe, Ge, {
		fieldNames: q,
		treeNodeFilterProp: Ve,
		filterTreeNode: Be
	}), Xe = C.useCallback((e) => {
		if (e) {
			if (ie) return e[ie];
			let { _title: t } = q;
			for (let n = 0; n < t.length; n += 1) {
				let r = e[t[n]];
				if (r !== void 0) return r;
			}
		}
	}, [q, ie]), X = C.useCallback((e) => we(e).map((e) => R(e) ? { value: e } : e), []), Z = C.useCallback((e) => X(e).map((e) => {
		let { label: t } = e, { value: n, halfChecked: r } = e, i, a = Y.get(n);
		return a ? (t = A ? A(a.node) : t ?? Xe(a.node), i = a.node.disabled) : t === void 0 && (t = X(G).find((e) => e.value === n).label), {
			label: t,
			value: n,
			halfChecked: r,
			disabled: i
		};
	}), [
		Y,
		Xe,
		X,
		G
	]), Ze = C.useMemo(() => X(G === null ? [] : G), [X, G]), [Q, Qe] = C.useMemo(() => {
		let e = [], t = [];
		return Ze.forEach((n) => {
			n.halfChecked ? t.push(n) : e.push(n);
		}), [e, t];
	}, [Ze]), $e = C.useMemo(() => Q.map((e) => e.value), [Q]), [$, et] = w(Q, Qe, B, J), [tt] = Ce(C.useMemo(() => {
		let e = Z(Ne($, K, J, q).map((e) => J[e]?.node?.[q.value] ?? e).map((e) => {
			let t = Q.find((t) => t.value === e);
			return {
				value: e,
				label: oe ? t?.label : A?.(t)
			};
		})), t = e[0];
		return !H && t && De(t.value) && De(t.label) ? [] : e.map((e) => ({
			...e,
			label: e.label ?? e.value
		}));
	}, [
		q,
		H,
		$,
		Q,
		Z,
		K,
		J
	])), nt = C.useMemo(() => H && (K === "SHOW_CHILD" || g || !h) ? _ : null, [
		_,
		H,
		g,
		K,
		h
	]), rt = k((e, t, n) => {
		let r = Ne(e, K, J, q);
		if (!(nt && r.length > nt) && (He(Z(e)), ze && We(""), o)) {
			let i = e;
			B && (i = r.map((e) => {
				let t = Y.get(e);
				return t ? t.node[q.value] : e;
			}));
			let { triggerValue: a, selected: s } = t || {
				triggerValue: void 0,
				selected: void 0
			}, c = i;
			if (g) {
				let e = Qe.filter((e) => !i.includes(e.value));
				c = [...c, ...e];
			}
			let l = Z(c), u = {
				preValue: Q,
				triggerValue: a
			}, d = !0;
			(g || n === "selection" && !s) && (d = !1), ke(u, a, e, qe, d, q), V ? u.checked = s : u.selected = s;
			let f = Ie ? l : l.map((e) => e.value);
			o(H ? f : f[0], Ie ? null : l.map((e) => e.label), u);
		}
	}), it = C.useCallback((e, { selected: t, source: n }) => {
		let r = J[e]?.node, i = r?.[q.value] ?? e;
		if (!H) rt([i], {
			selected: !0,
			triggerValue: i
		}, "option");
		else {
			let e = t ? [...$e, i] : $.filter((e) => e !== i);
			if (B) {
				let { missingRawValues: n, existRawValues: r } = Je(e), i = r.map((e) => Y.get(e).key), a;
				t ? {checkedKeys: a} = ge(i, !0, J) : {checkedKeys: a} = ge(i, {
					checked: !1,
					halfCheckedKeys: et
				}, J), e = [...n, ...a.map((e) => J[e].node[q.value])];
			}
			rt(e, {
				selected: t,
				triggerValue: i
			}, n || "option");
		}
		t || !H ? s?.(i, O(r)) : c?.(i, O(r));
	}, [
		Je,
		Y,
		J,
		q,
		H,
		$e,
		rt,
		B,
		s,
		c,
		$,
		et,
		_
	]), at = C.useCallback((e) => {
		S && S(e);
	}, [S]), ot = k((e, t) => {
		let n = e.map((e) => e.value);
		if (t.type === "clear") {
			rt(n, {}, "selection");
			return;
		}
		t.values.length && it(t.values[0].value, {
			selected: !1,
			source: "selection"
		});
	}), st = C.useMemo(() => ({
		virtual: _e,
		popupMatchSelectWidth: xe,
		listHeight: ve,
		listItemHeight: ye,
		listItemScrollOffset: be,
		treeData: Ye,
		fieldNames: q,
		onSelect: it,
		treeExpandAction: he,
		treeTitleRender: A,
		onPopupScroll: M,
		leftMaxCount: _ === void 0 ? null : _ - tt.length,
		leafCountOnly: K === "SHOW_CHILD" && !g && !!h,
		valueEntities: Y,
		classNames: N,
		styles: I
	}), [
		_e,
		xe,
		ve,
		ye,
		be,
		Ye,
		q,
		it,
		he,
		A,
		M,
		_,
		tt.length,
		K,
		g,
		h,
		Y,
		N,
		I
	]), ct = C.useMemo(() => ({
		checkable: V,
		loadData: b,
		treeLoadedKeys: x,
		onTreeLoad: le,
		checkedKeys: $,
		halfCheckedKeys: et,
		treeDefaultExpandAll: de,
		treeExpandedKeys: fe,
		treeDefaultExpandedKeys: pe,
		onTreeExpand: me,
		treeIcon: T,
		treeMotion: D,
		showTreeIcon: Ee,
		switcherIcon: E,
		treeLine: Se,
		treeNodeFilterProp: Ve,
		keyEntities: J
	}), [
		V,
		b,
		x,
		le,
		$,
		et,
		de,
		fe,
		pe,
		me,
		T,
		D,
		Ee,
		E,
		Se,
		Ve,
		J
	]);
	return /*#__PURE__*/ C.createElement(Me.Provider, { value: st }, /*#__PURE__*/ C.createElement(je.Provider, { value: ct }, /*#__PURE__*/ C.createElement(ue, Fe({ ref: t }, L, {
		classNames: N,
		styles: I,
		id: z,
		prefixCls: r,
		mode: H ? "multiple" : void 0,
		displayValues: tt,
		onDisplayValuesChange: ot,
		autoClearSearchValue: ze,
		showSearch: U,
		searchValue: Ge,
		onSearch: Ke,
		OptionList: P,
		emptyOptions: !qe.length,
		onPopupVisibleChange: at,
		popupMatchSelectWidth: xe
	}))));
});
z.TreeNode = E, z.SHOW_ALL = F, z.SHOW_PARENT = I, z.SHOW_CHILD = L;
//#endregion
//#region node_modules/.pnpm/@rc-component+tree-select@1_56f31f7a12b2da4d0149613f3f869709/node_modules/@rc-component/tree-select/es/index.js
var B = z, V = (e) => {
	let { componentCls: t, treePrefixCls: n, colorBgElevated: r } = e, i = `.${n}`;
	return [{ [`${t}-dropdown`]: [
		{ padding: `${c(e.paddingXS)} ${c(e.calc(e.paddingXS).div(2).equal())}` },
		xe(n, p(e, { colorBgContainer: r }), !1),
		{ [i]: {
			borderRadius: 0,
			[`${i}-list-holder-inner`]: {
				alignItems: "stretch",
				[`${i}-treenode`]: { [`${i}-node-content-wrapper`]: { flex: "auto" } }
			}
		} },
		ve(`${n}-checkbox`, e),
		{ "&-rtl": {
			direction: "rtl",
			[`${i}-switcher${i}-switcher_close`]: { [`${i}-switcher-icon svg`]: { transform: "rotate(90deg)" } }
		} }
	] }];
};
function Ie(e, t, n) {
	return b("TreeSelect", (e) => V(p(e, { treePrefixCls: t })), S, { resetFont: !1 })(e, n);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/tree-select/index.js
var H = /* @__PURE__ */ e({
	TreeNode: () => E,
	default: () => U
}), U = /* @__PURE__ */ C.forwardRef((e, t) => {
	let { prefixCls: n, size: r, disabled: o, bordered: s = !0, style: c, className: l, rootClassName: u, treeCheckable: d, multiple: f, listHeight: p = 256, listItemHeight: ne, placement: b, notFoundContent: ue, switcherIcon: me, treeLine: ge, getPopupContainer: _e, popupClassName: ve, dropdownClassName: ye, treeIcon: be = !1, transitionName: S, choiceTransitionName: xe = "", status: Ce, treeExpandAction: w, builtinPlacements: we, dropdownMatchSelectWidth: Te, popupMatchSelectWidth: T, allowClear: Ee, variant: De, dropdownStyle: Oe, dropdownRender: E, popupRender: D, onDropdownVisibleChange: O, onOpenChange: ke, tagRender: Ae, maxCount: k, showCheckedStrategy: A, treeCheckStrictly: j, styles: je, classNames: Me, ...M } = e, { getPrefixCls: N, getPopupContainer: P, direction: F, styles: I, classNames: L, switcherIcon: Ne } = ie("treeSelect"), { renderEmpty: Pe, virtual: Fe, popupMatchSelectWidth: R, popupOverflow: z } = C.useContext(oe), [, V] = g(), H = ne ?? V?.controlHeightSM + V?.paddingXXS, U = N(), W = N("select", n), Le = N("select-tree", n), Re = N("tree-select", n), { compactSize: ze, compactItemClassnames: Be } = ee(W, F), Ve = h(W), G = h(Re), [He, K] = he(W, Ve);
	Ie(Re, Le, G);
	let [q, Ue] = fe("treeSelect", De, s), We = _((e) => r ?? ze ?? e), Ge = C.useContext(ce), Ke = o ?? Ge, { status: qe, hasFeedback: J, isFormItemInput: Y, feedbackIcon: Je } = C.useContext(v), Ye = ae(qe, Ce), Xe = {
		...e,
		size: We,
		disabled: Ke,
		status: Ye,
		variant: q
	}, [X, Z] = m([L, Me], [I, je], { props: Xe }, { popup: { _default: "root" } }), Ze = i(ve || ye, `${Re}-dropdown`, { [`${Re}-dropdown-rtl`]: F === "rtl" }, u, X.root, X.popup?.root, K, Ve, G, He), Q = x(D || E), Qe = ke || O, $e = !!(d || f), $ = C.useMemo(() => {
		if (!(k && (A === "SHOW_ALL" && !j || A === "SHOW_PARENT"))) return k;
	}, [
		k,
		A,
		j
	]), et = de(e.suffixIcon, e.showArrow), tt = T ?? Te ?? R, { suffixIcon: nt, removeIcon: rt, clearIcon: it } = pe({
		...M,
		multiple: $e,
		showSuffixIcon: et,
		hasFeedback: J,
		feedbackIcon: Je,
		prefixCls: W,
		componentName: "TreeSelect"
	}), at = Ee === !0 ? { clearIcon: it } : Ee, ot;
	ot = ue === void 0 ? Pe?.("Select") || /*#__PURE__*/ C.createElement(re, { componentName: "Select" }) : ue;
	let st = a(M, [
		"suffixIcon",
		"removeIcon",
		"clearIcon"
	]), ct = C.useMemo(() => b === void 0 ? F === "rtl" ? "bottomRight" : "bottomLeft" : b, [b, F]), lt = i(!n && Re, {
		[`${W}-lg`]: We === "large",
		[`${W}-sm`]: We === "small",
		[`${W}-rtl`]: F === "rtl",
		[`${W}-${q}`]: Ue,
		[`${W}-in-form-item`]: Y
	}, te(W, Ye, J), Be, l, u, X?.root, K, Ve, G, He), ut = me ?? Ne, dt = (e) => /*#__PURE__*/ C.createElement(Se, {
		prefixCls: Le,
		switcherIcon: ut,
		treeNodeProps: e,
		showLine: ge
	}), [ft] = se("SelectLike", Z.popup?.root?.zIndex);
	return /*#__PURE__*/ C.createElement(B, {
		classNames: X,
		styles: Z,
		virtual: Fe,
		disabled: Ke,
		...st,
		popupMatchSelectWidth: tt,
		builtinPlacements: le(we, z),
		ref: t,
		prefixCls: W,
		className: lt,
		style: {
			...Z?.root,
			...c
		},
		listHeight: p,
		listItemHeight: H,
		treeCheckable: d && /*#__PURE__*/ C.createElement("span", { className: `${W}-tree-checkbox-inner` }),
		treeLine: !!ge,
		suffixIcon: nt,
		multiple: $e,
		placement: ct,
		removeIcon: rt,
		allowClear: at,
		switcherIcon: dt,
		showTreeIcon: be,
		notFoundContent: ot,
		getPopupContainer: _e || P,
		treeMotion: null,
		popupClassName: Ze,
		popupStyle: {
			...Z.root,
			...Z.popup?.root,
			zIndex: ft
		},
		popupRender: Q,
		onPopupVisibleChange: Qe,
		choiceTransitionName: y(U, "", xe),
		transitionName: y(U, "slide-up", S),
		treeExpandAction: w,
		tagRender: $e ? Ae : void 0,
		maxCount: $,
		showCheckedStrategy: A,
		treeCheckStrictly: j
	});
}), W = ne(U, "popupAlign", (e) => a(e, ["visible"]));
U.TreeNode = E, U.SHOW_ALL = F, U.SHOW_PARENT = I, U.SHOW_CHILD = L, U._InternalPanelDoNotUseOrYouWillBeFired = W;
//#endregion
export { H as t };
