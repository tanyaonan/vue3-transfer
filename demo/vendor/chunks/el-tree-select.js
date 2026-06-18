globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, Dt as n, E as r, N as i, O as a, T as o, Tt as s, _ as c, ct as l, gt as u, ut as d, z as f } from "./vue.runtime.js";
import { t as p } from "./shared/element-plus/utils/vue/install.js";
import { t as m } from "./shared/lodash/isEqual.js";
import { n as h } from "./shared/element-plus/hooks/use-aria.js";
import { l as g, r as _ } from "./shared/element-plus/utils/types.js";
import { r as v, t as y } from "./shared/element-plus/constants/event.js";
import { _ as b, c as x } from "./shared/vueuse.js";
import { n as S } from "./shared/element-plus/utils/strings.js";
import { r as C } from "./shared/element-plus/hooks/use-namespace.js";
import { a as w, n as T } from "./shared/element-plus/constants/aria.js";
import { a as E, i as D, n as O, t as k } from "./el-select.js";
import { r as A, t as j } from "./el-tree.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree-select/src/select.mjs
var M = (t, { attrs: n, emit: r }, { select: a, tree: o, key: s }) => {
	let l = C("tree-select");
	e(() => t.data, () => {
		t.filterable && i(() => {
			o.value?.filter(a.value?.states.inputValue);
		});
	}, { flush: "post" });
	let d = (e) => {
		let t = e.at(-1);
		if (t.expanded && t.childNodes.at(-1)) d([t.childNodes.at(-1)]);
		else {
			(o.value.el$?.querySelector(`[data-key="${e.at(-1).key}"]`))?.focus({ preventScroll: !0 });
			return;
		}
	};
	return f(() => {
		x(() => a.value?.$el, "keydown", async (e) => {
			let t = T(e), { dropdownMenuVisible: n } = a.value;
			[w.down, w.up].includes(t) && n && (await i(), setTimeout(() => {
				if (w.up === t) {
					let e = o.value.store.root.childNodes;
					d(e);
					return;
				}
				a.value.optionsArray[a.value.states.hoveringIndex].$el?.parentNode?.parentNode?.focus({ preventScroll: !0 });
			}));
		}, { capture: !0 });
	}), {
		...h(u(t), Object.keys(O.props)),
		...n,
		class: c(() => n.class),
		style: c(() => n.style),
		"onUpdate:modelValue": (e) => r(v, e),
		valueKey: s,
		popperClass: c(() => {
			let e = [l.e("popper")];
			return t.popperClass && e.push(t.popperClass), e.join(" ");
		}),
		filterMethod: (e = "") => {
			t.filterMethod ? t.filterMethod(e) : t.remoteMethod ? t.remoteMethod(e) : o.value?.filter(e);
		}
	};
}, N = o({
	extends: k,
	setup(t, n) {
		let a = k.setup(t, n);
		delete a.selectOptionClick;
		let o = r().proxy;
		return i(() => {
			a.select.states.cachedOptions.get(o.value) || a.select.onOptionCreate(o);
		}), e(() => n.attrs.visible, (e) => {
			i(() => {
				a.states.visible = e;
			});
		}, { immediate: !0 }), a;
	},
	methods: { selectOptionClick() {
		this.$el.parentElement.click();
	} }
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree-select/src/utils.mjs
function P(e) {
	return e || e === 0;
}
function F(e) {
	return s(e) && e.length;
}
function I(e) {
	return s(e) ? e : P(e) ? [e] : [];
}
function L(e, t, n, r, i) {
	for (let a = 0; a < e.length; a++) {
		let o = e[a];
		if (t(o, a, e, i)) return r ? r(o, a, e, i) : o;
		{
			let e = n(o);
			if (F(e)) {
				let i = L(e, t, n, r, o);
				if (i) return i;
			}
		}
	}
}
function R(e, t, n, r) {
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		t(a, i, e, r);
		let o = n(a);
		F(o) && R(o, t, n, a);
	}
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tree-select/src/tree.mjs
var z = (t, { attrs: r, slots: a, emit: o }, { select: s, tree: l, key: d }) => {
	e([() => t.modelValue, l], () => {
		t.showCheckbox && i(() => {
			let e = l.value;
			e && !m(e.getCheckedKeys(), I(t.modelValue)) && e.setCheckedKeys(I(t.modelValue));
		});
	}, {
		immediate: !0,
		deep: !0
	});
	let f = c(() => ({
		value: d.value,
		label: "label",
		children: "children",
		disabled: "disabled",
		isLeaf: "isLeaf",
		...t.props
	})), p = (e, t) => {
		let r = f.value[e];
		return n(r) ? r(t, l.value?.getNode(p("value", t))) : t[r];
	}, b = I(t.modelValue).map((e) => L(t.data || [], (t) => p("value", t) === e, (e) => p("children", e), (e, t, n, r) => r && p("value", r))).filter((e) => P(e)), x = c(() => {
		if (!t.renderAfterExpand && !t.lazy) return [];
		let e = [];
		return R(t.data.concat(t.cacheData), (t) => {
			let n = p("value", t);
			e.push({
				value: n,
				currentLabel: p("label", t),
				isDisabled: p("disabled", t)
			});
		}, (e) => p("children", e)), e;
	}), C = () => l.value?.getCheckedKeys().filter((e) => {
		let t = l.value?.getNode(e);
		return !g(t) && _(t.childNodes);
	}), w = (e) => {
		m(t.modelValue, e) || o(y, e);
	};
	function T(e) {
		o(v, e), w(e);
	}
	return {
		...h(u(t), Object.keys(j.props)),
		...r,
		nodeKey: d,
		expandOnClickNode: c(() => !t.checkStrictly && t.expandOnClickNode),
		defaultExpandedKeys: c(() => t.defaultExpandedKeys ? t.defaultExpandedKeys.concat(b) : b),
		renderContent: (e, { node: n, data: r, store: i }) => e(N, {
			value: p("value", r),
			label: p("label", r),
			disabled: p("disabled", r),
			visible: n.visible
		}, t.renderContent ? () => t.renderContent(e, {
			node: n,
			data: r,
			store: i
		}) : a.default ? () => a.default({
			node: n,
			data: r,
			store: i
		}) : void 0),
		filterNodeMethod: (e, n, r) => t.filterNodeMethod ? t.filterNodeMethod(e, n, r) : e ? new RegExp(S(e), "i").test(p("label", n) || "") : !0,
		onNodeClick: (e, n, i) => {
			if (r.onNodeClick?.(e, n, i), !(t.showCheckbox && t.checkOnClickNode)) if (!t.showCheckbox && (t.checkStrictly || n.isLeaf)) {
				if (!p("disabled", e)) {
					let t = s.value?.states.options.get(p("value", e));
					s.value?.handleOptionSelect(t);
				}
			} else t.expandOnClickNode && i.proxy.handleExpandIconClick();
		},
		onCheck: (e, n) => {
			if (!t.showCheckbox) return;
			let a = p("value", e), o = {};
			R([l.value.store.root], (e) => o[e.key] = e, (e) => e.childNodes);
			let c = n.checkedKeys, u = t.multiple ? I(t.modelValue).filter((e) => !(e in o) && !c.includes(e)) : [], d = u.concat(c);
			if (t.checkStrictly) T(t.multiple ? d : d.includes(a) ? a : void 0);
			else if (t.multiple) {
				let e = C();
				T(u.concat(e));
			} else {
				let n = L([e], (e) => !F(p("children", e)) && !p("disabled", e), (e) => p("children", e)), r = n ? p("value", n) : void 0, i = P(t.modelValue) && !!L([e], (e) => p("value", e) === t.modelValue, (e) => p("children", e));
				T(r === t.modelValue || i ? void 0 : r);
			}
			i(() => {
				let n = I(t.modelValue);
				l.value.setCheckedKeys(n), r.onCheck?.(e, {
					checkedKeys: l.value.getCheckedKeys(),
					checkedNodes: l.value.getCheckedNodes(),
					halfCheckedKeys: l.value.getHalfCheckedKeys(),
					halfCheckedNodes: l.value.getHalfCheckedNodes()
				});
			}), s.value?.focus();
		},
		onNodeExpand: (e, n, a) => {
			r.onNodeExpand?.(e, n, a), i(() => {
				if (!t.checkStrictly && t.lazy && t.multiple && n.checked) {
					let e = {}, n = l.value.getCheckedKeys();
					R([l.value.store.root], (t) => e[t.key] = t, (e) => e.childNodes);
					let r = I(t.modelValue).filter((t) => !(t in e) && !n.includes(t)), i = C();
					T(r.concat(i));
				}
			});
		},
		cacheOptions: x
	};
}, B = o({
	props: { data: {
		type: Array,
		default: () => []
	} },
	setup(n) {
		let r = t(E);
		return e(() => n.data, () => {
			n.data.forEach((e) => {
				r.states.cachedOptions.has(e.value) || r.states.cachedOptions.set(e.value, e);
			});
			let e = r.selectRef?.querySelectorAll("input") || [];
			b && !Array.from(e).includes(document.activeElement) && r.setSelected();
		}, {
			flush: "post",
			immediate: !0
		}), () => void 0;
	}
}), V = p(o({
	name: "ElTreeSelect",
	inheritAttrs: !1,
	props: {
		...D,
		...A,
		cacheData: {
			type: Array,
			default: () => []
		}
	},
	setup(e, t) {
		let { slots: n, expose: r, emit: i, attrs: o } = t, s = {
			...o,
			onChange: void 0
		}, u = d(), p = d(), m = c(() => e.nodeKey || e.valueKey || "value"), g = M(e, {
			attrs: o,
			emit: i
		}, {
			select: u,
			tree: p,
			key: m
		}), { cacheOptions: _, ...v } = z(e, {
			attrs: s,
			slots: n,
			emit: i
		}, {
			select: u,
			tree: p,
			key: m
		}), y = l({});
		return r(y), f(() => {
			Object.assign(y, {
				...h(p.value, [
					"filter",
					"updateKeyChildren",
					"getCheckedNodes",
					"setCheckedNodes",
					"getCheckedKeys",
					"setCheckedKeys",
					"setChecked",
					"getHalfCheckedNodes",
					"getHalfCheckedKeys",
					"getCurrentKey",
					"getCurrentNode",
					"setCurrentKey",
					"setCurrentNode",
					"getNode",
					"remove",
					"append",
					"insertBefore",
					"insertAfter"
				]),
				...h(u.value, [
					"focus",
					"blur",
					"selectedLabel"
				]),
				treeRef: p.value,
				selectRef: u.value
			});
		}), () => a(O, l({
			...g,
			ref: (e) => u.value = e
		}), {
			...n,
			default: () => [a(B, { data: _.value }), a(j, l({
				...v,
				ref: (e) => p.value = e
			}))]
		});
	}
}));
//#endregion
export { V as ElTreeSelect, V as default };
