globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, C as t, Dt as n, Ft as r, G as i, H as a, Mt as o, O as s, T as c, Tt as l, W as u, Z as d, _ as f, at as p, b as m, bt as h, ct as g, f as _, gt as v, l as y, nt as b, p as x, tt as S, ut as C, v as w, w as T, x as E, y as D, yt as O } from "./vue.runtime.js";
import { t as k } from "./shared/element-plus/utils/vue/install.js";
import { l as A, r as j, s as M } from "./shared/element-plus/utils/types.js";
import { r as N, t as P } from "./shared/element-plus/constants/event.js";
import { n as F, r as I } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as ee } from "./shared/element-plus/hooks/use-namespace.js";
import { N as L, n as R, r as z } from "./shared/element-plus-icons.js";
import { t as B } from "./el-icon.js";
import { t as V } from "./shared/element-plus/utils/typescript.js";
import { t as H } from "./el-input.js";
import { t as U } from "./el-form/hooks/use-form-item.js";
import { n as W } from "./shared/element-plus/hooks/use-locale.js";
import { t as te } from "./el-button.js";
import { n as G, t as K } from "./el-checkbox.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/transfer/src/transfer.mjs
var q = "left-check-change", J = "right-check-change", Y = F({
	data: {
		type: I(Array),
		default: () => []
	},
	titles: {
		type: I(Array),
		default: () => []
	},
	buttonTexts: {
		type: I(Array),
		default: () => []
	},
	filterPlaceholder: String,
	filterMethod: { type: I(Function) },
	leftDefaultChecked: {
		type: I(Array),
		default: () => []
	},
	rightDefaultChecked: {
		type: I(Array),
		default: () => []
	},
	renderContent: { type: I(Function) },
	modelValue: {
		type: I(Array),
		default: () => []
	},
	format: {
		type: I(Object),
		default: () => ({})
	},
	filterable: Boolean,
	props: {
		type: I(Object),
		default: () => V({
			label: "label",
			key: "key",
			disabled: "disabled"
		})
	},
	targetOrder: {
		type: String,
		values: [
			"original",
			"push",
			"unshift"
		],
		default: "original"
	},
	validateEvent: {
		type: Boolean,
		default: !0
	}
}), X = (e, t) => [e, t].every(l) || l(e) && A(t), Z = {
	[P]: (e, t, n) => [e, n].every(l) && ["left", "right"].includes(t),
	[N]: (e) => l(e),
	[q]: X,
	[J]: X
}, Q = (e) => {
	let t = {
		label: "label",
		key: "key",
		disabled: "disabled"
	};
	return f(() => ({
		...t,
		...e.props
	}));
}, ne = (e, t) => ({
	onSourceCheckedChange: (n, r) => {
		e.leftChecked = n, r && t(q, n, r);
	},
	onTargetCheckedChange: (n, r) => {
		e.rightChecked = n, r && t(J, n, r);
	}
}), re = (e) => {
	let t = Q(e), n = f(() => e.data.reduce((e, n) => (e[n[t.value.key]] = n, e), {}));
	return {
		sourceData: f(() => e.data.filter((n) => !e.modelValue.includes(n[t.value.key]))),
		targetData: f(() => e.targetOrder === "original" ? e.data.filter((n) => e.modelValue.includes(n[t.value.key])) : e.modelValue.reduce((e, t) => {
			let r = n.value[t];
			return r && e.push(r), e;
		}, []))
	};
}, ie = (e, t, n) => {
	let r = Q(e), i = (e, t, r) => {
		n(N, e), n(P, e, t, r);
	};
	return {
		addToLeft: () => {
			let n = e.modelValue.slice();
			t.rightChecked.forEach((e) => {
				let t = n.indexOf(e);
				t > -1 && n.splice(t, 1);
			}), i(n, "left", t.rightChecked);
		},
		addToRight: () => {
			let n = e.modelValue.slice(), a = e.data.filter((n) => {
				let i = n[r.value.key];
				return t.leftChecked.includes(i) && !e.modelValue.includes(i);
			}).map((e) => e[r.value.key]);
			n = e.targetOrder === "unshift" ? a.concat(n) : n.concat(a), e.targetOrder === "original" && (n = e.data.filter((e) => n.includes(e[r.value.key])).map((e) => e[r.value.key])), i(n, "right", t.leftChecked);
		}
	};
}, $ = "checked-change", ae = F({
	data: Y.data,
	optionRender: { type: I(Function) },
	placeholder: String,
	title: String,
	filterable: Boolean,
	format: Y.format,
	filterMethod: Y.filterMethod,
	defaultChecked: Y.leftDefaultChecked,
	props: Y.props
}), oe = { [$]: X }, se = (t, r, i) => {
	let a = Q(t), o = f(() => t.data.filter((e) => n(t.filterMethod) ? t.filterMethod(r.query, e) : String(e[a.value.label] || e[a.value.key]).toLowerCase().includes(r.query.toLowerCase()))), s = f(() => o.value.filter((e) => !e[a.value.disabled])), c = f(() => {
		let e = r.checked.length, n = t.data.length, { noChecked: i, hasChecked: a } = t.format;
		return i && a ? e > 0 ? a.replace(/\${checked}/g, e.toString()).replace(/\${total}/g, n.toString()) : i.replace(/\${total}/g, n.toString()) : `${e}/${n}`;
	}), l = f(() => {
		let e = r.checked.length;
		return e > 0 && e < s.value.length;
	}), u = () => {
		let e = s.value.map((e) => e[a.value.key]);
		r.allChecked = e.length > 0 && e.every((e) => r.checked.includes(e));
	};
	return e(() => r.checked, (e, t) => {
		u(), r.checkChangeByUser ? i($, e, e.concat(t).filter((n) => !e.includes(n) || !t.includes(n))) : (i($, e), r.checkChangeByUser = !0);
	}), e(s, () => {
		u();
	}), e(() => t.data, () => {
		let e = [], t = o.value.map((e) => e[a.value.key]);
		r.checked.forEach((n) => {
			t.includes(n) && e.push(n);
		}), r.checkChangeByUser = !1, r.checked = e;
	}), e(() => t.defaultChecked, (e, t) => {
		if (t && e.length === t.length && e.every((e) => t.includes(e))) return;
		let n = [], i = s.value.map((e) => e[a.value.key]);
		e.forEach((e) => {
			i.includes(e) && n.push(e);
		}), r.checkChangeByUser = !1, r.checked = n;
	}, { immediate: !0 }), {
		filteredData: o,
		checkableData: s,
		checkedSummary: c,
		isIndeterminate: l,
		updateAllChecked: u,
		handleAllCheckedChange: (e) => {
			r.checked = e ? s.value.map((e) => e[a.value.key]) : [];
		}
	};
}, ce = /* @__PURE__ */ c({
	name: "ElTransferPanel",
	__name: "transfer-panel",
	props: ae,
	emits: oe,
	setup(e, { expose: n, emit: s }) {
		let c = e, l = s, h = d(), _ = ({ option: e }) => e, { t: C } = W(), k = ee("transfer"), A = g({
			checked: [],
			allChecked: !1,
			query: "",
			checkChangeByUser: !0
		}), M = Q(c), { filteredData: N, checkedSummary: P, isIndeterminate: F, handleAllCheckedChange: I } = se(c, A, l), R = f(() => !j(A.query) && j(N.value)), z = f(() => !j(h.default()[0].children)), { checked: B, allChecked: V, query: U } = v(A);
		return n({ query: U }), (n, s) => (a(), E("div", { class: o(O(k).b("panel")) }, [
			w("p", { class: o(O(k).be("panel", "header")) }, [T(O(K), {
				modelValue: O(V),
				"onUpdate:modelValue": s[0] ||= (e) => p(V) ? V.value = e : null,
				indeterminate: O(F),
				"validate-event": !1,
				onChange: O(I)
			}, {
				default: S(() => [w("span", { class: o(O(k).be("panel", "header-title")) }, r(e.title), 3), w("span", { class: o(O(k).be("panel", "header-count")) }, r(O(P)), 3)]),
				_: 1
			}, 8, [
				"modelValue",
				"indeterminate",
				"onChange"
			])], 2),
			w("div", { class: o([O(k).be("panel", "body"), O(k).is("with-footer", z.value)]) }, [
				e.filterable ? (a(), D(O(H), {
					key: 0,
					modelValue: O(U),
					"onUpdate:modelValue": s[1] ||= (e) => p(U) ? U.value = e : null,
					class: o(O(k).be("panel", "filter")),
					size: "default",
					placeholder: e.placeholder,
					"prefix-icon": O(L),
					clearable: "",
					"validate-event": !1
				}, null, 8, [
					"modelValue",
					"class",
					"placeholder",
					"prefix-icon"
				])) : m("v-if", !0),
				b(T(O(G), {
					modelValue: O(B),
					"onUpdate:modelValue": s[2] ||= (e) => p(B) ? B.value = e : null,
					"validate-event": !1,
					class: o([O(k).is("filterable", e.filterable), O(k).be("panel", "list")])
				}, {
					default: S(() => [(a(!0), E(x, null, u(O(N), (t) => (a(), D(O(K), {
						key: t[O(M).key],
						class: o(O(k).be("panel", "item")),
						value: t[O(M).key],
						disabled: t[O(M).disabled],
						"validate-event": !1
					}, {
						default: S(() => [T(_, { option: e.optionRender?.(t) }, null, 8, ["option"])]),
						_: 2
					}, 1032, [
						"class",
						"value",
						"disabled"
					]))), 128))]),
					_: 1
				}, 8, ["modelValue", "class"]), [[y, !R.value && !O(j)(e.data)]]),
				b(w("div", { class: o(O(k).be("panel", "empty")) }, [i(n.$slots, "empty", {}, () => [t(r(R.value ? O(C)("el.transfer.noMatch") : O(C)("el.transfer.noData")), 1)])], 2), [[y, R.value || O(j)(e.data)]])
			], 2),
			z.value ? (a(), E("p", {
				key: 0,
				class: o(O(k).be("panel", "footer"))
			}, [i(n.$slots, "default")], 2)) : m("v-if", !0)
		], 2));
	}
}), le = { key: 0 }, ue = { key: 0 }, de = k(/* @__PURE__ */ c({
	name: "ElTransfer",
	__name: "transfer",
	props: Y,
	emits: Z,
	setup(t, { expose: n, emit: c }) {
		let l = t, u = c, p = d(), { t: v } = W(), y = ee("transfer"), { formItem: b } = U(), x = g({
			leftChecked: [],
			rightChecked: []
		}), D = Q(l), { sourceData: k, targetData: A } = re(l), { onSourceCheckedChange: N, onTargetCheckedChange: P } = ne(x, u), { addToLeft: F, addToRight: I } = ie(l, x, u), L = C(), V = C(), H = (e) => {
			switch (e) {
				case "left":
					L.value.query = "";
					break;
				case "right":
					V.value.query = "";
					break;
			}
		}, G = f(() => l.buttonTexts.length === 2), K = f(() => l.titles[0] || v("el.transfer.titles.0")), q = f(() => l.titles[1] || v("el.transfer.titles.1")), J = f(() => l.filterPlaceholder || v("el.transfer.filterPlaceholder"));
		e(() => l.modelValue, () => {
			l.validateEvent && b?.validate?.("change").catch(h);
		});
		let Y = f(() => (e) => {
			if (l.renderContent) return l.renderContent(s, e);
			let t = (p.default?.({ option: e }) || []).filter((e) => e.type !== _);
			return t.length ? t : s("span", e[D.value.label] || e[D.value.key]);
		});
		return n({
			clearQuery: H,
			leftPanel: L,
			rightPanel: V
		}), (e, n) => (a(), E("div", { class: o(O(y).b()) }, [
			T(ce, {
				ref_key: "leftPanel",
				ref: L,
				data: O(k),
				"option-render": Y.value,
				placeholder: J.value,
				title: K.value,
				filterable: t.filterable,
				format: t.format,
				"filter-method": t.filterMethod,
				"default-checked": t.leftDefaultChecked,
				props: l.props,
				onCheckedChange: O(N)
			}, {
				empty: S(() => [i(e.$slots, "left-empty")]),
				default: S(() => [i(e.$slots, "left-footer")]),
				_: 3
			}, 8, [
				"data",
				"option-render",
				"placeholder",
				"title",
				"filterable",
				"format",
				"filter-method",
				"default-checked",
				"props",
				"onCheckedChange"
			]),
			w("div", { class: o(O(y).e("buttons")) }, [T(O(te), {
				type: "primary",
				class: o([O(y).e("button"), O(y).is("with-texts", G.value)]),
				disabled: O(j)(x.rightChecked),
				onClick: O(F)
			}, {
				default: S(() => [T(O(B), null, {
					default: S(() => [T(O(R))]),
					_: 1
				}), O(M)(t.buttonTexts[0]) ? m("v-if", !0) : (a(), E("span", le, r(t.buttonTexts[0]), 1))]),
				_: 1
			}, 8, [
				"class",
				"disabled",
				"onClick"
			]), T(O(te), {
				type: "primary",
				class: o([O(y).e("button"), O(y).is("with-texts", G.value)]),
				disabled: O(j)(x.leftChecked),
				onClick: O(I)
			}, {
				default: S(() => [O(M)(t.buttonTexts[1]) ? m("v-if", !0) : (a(), E("span", ue, r(t.buttonTexts[1]), 1)), T(O(B), null, {
					default: S(() => [T(O(z))]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"class",
				"disabled",
				"onClick"
			])], 2),
			T(ce, {
				ref_key: "rightPanel",
				ref: V,
				data: O(A),
				"option-render": Y.value,
				placeholder: J.value,
				filterable: t.filterable,
				format: t.format,
				"filter-method": t.filterMethod,
				title: q.value,
				"default-checked": t.rightDefaultChecked,
				props: l.props,
				onCheckedChange: O(P)
			}, {
				empty: S(() => [i(e.$slots, "right-empty")]),
				default: S(() => [i(e.$slots, "right-footer")]),
				_: 3
			}, 8, [
				"data",
				"option-render",
				"placeholder",
				"filterable",
				"format",
				"filter-method",
				"title",
				"default-checked",
				"props",
				"onCheckedChange"
			])
		], 2));
	}
}));
//#endregion
export { de as ElTransfer, de as default, q as LEFT_CHECK_CHANGE_EVENT, J as RIGHT_CHECK_CHANGE_EVENT, X as transferCheckedChangeFn, Z as transferEmits, Y as transferProps };
