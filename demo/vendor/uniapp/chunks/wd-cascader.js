globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, P as a, U as o, a as s, c, d as l, f as u, g as d, h as f, k as p, l as m, s as h, u as g, x as _, z as v } from "./vue.runtime.js";
import { g as y, y as b } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as x, i as S, n as C, r as w, s as T, t as E } from "./shared/wot-ui/common/props.ts.js";
import { t as ee } from "./wd-icon.js";
import { t as te } from "./wd-loading.js";
import { t as ne } from "./wd-action-sheet.js";
import { t as re } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as D } from "./wd-tabs.js";
import { t as O } from "./wd-tab.js";
import { t as k } from "./shared/wot-ui/common/interceptor.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-cascader/types.ts
var A = {
	...E,
	modelValue: [
		String,
		Number,
		Array
	],
	options: C(),
	title: String,
	beforeConfirm: Function,
	checkStrictly: w(!1),
	confirmText: T(""),
	valueKey: T("value"),
	textKey: T("text"),
	childrenKey: T("children"),
	tipKey: T("tip"),
	closeOnClickModal: w(!0),
	zIndex: S(15),
	safeAreaInsetBottom: w(!0),
	lineWidth: x,
	lineHeight: x,
	lineTheme: T("normal"),
	rootPortal: w(!1),
	visible: w(!1),
	lazyLoad: Function,
	isLeafKey: T("isLeaf")
}, j = { class: "wd-cascader__action" }, M = ["scroll-y"], N = ["onClick"], ie = { class: "wd-cascader__list-item-content" }, ae = { class: "wd-cascader__list-item-label" }, oe = {
	key: 0,
	class: "wd-cascader__list-item-tip"
}, se = {
	key: 0,
	class: "wd-cascader__loading"
}, P = /* @__PURE__ */ d({
	name: "wd-cascader",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: A,
	emits: [
		"close",
		"update:modelValue",
		"confirm",
		"update:visible"
	],
	setup(d, { expose: x, emit: S }) {
		let { translate: C } = re("cascader"), w = d, T = S, E = r(), A = r(!1), P = r([]), F = r(0), I = r(!1), L = r([]), R = r(w.options), z = r(!1);
		function B() {
			let { modelValue: e } = w;
			return y(e) ? e.length > 0 ? e[e.length - 1] : "" : b(e) ? e : "";
		}
		function V() {
			let { modelValue: e } = w;
			return y(e) ? e : b(e) && e !== "" ? [e] : [];
		}
		function H(e) {
			let { valueKey: t, childrenKey: n } = w;
			function r(i) {
				for (let a of i) {
					if (a[t] === e) {
						let e = a[n];
						return y(e) ? e : null;
					}
					if (a[n] && a[n].length > 0) {
						let e = r(a[n]);
						if (e) return e;
					}
				}
				return null;
			}
			return R.value.length > 0 ? r(R.value) : null;
		}
		function U(e, t) {
			let { valueKey: n, childrenKey: r } = w;
			function i(a) {
				for (let o of a) {
					if (o[n] === e) return o[r] = t, !0;
					if (o[r] && o[r].length > 0 && i(o[r])) return !0;
				}
				return !1;
			}
			i(R.value);
		}
		function W() {
			let { childrenKey: e } = w;
			if (!R.value.length) {
				P.value = [];
				return;
			}
			let t = B(), n = t === "" ? [] : q(R.value, t) || [], r = [];
			for (let t = R.value, i = 0; t?.length; i++) {
				let a = n[i] || null;
				r.push({
					options: t,
					selectedOption: a
				}), t = a?.[e]?.length ? a[e] : void 0;
			}
			P.value = r, F.value = Math.max(r.length - 1, 0);
		}
		function G(e) {
			let { lazyLoad: t, valueKey: n } = w;
			if (!t || e.length === 0) return;
			z.value = !0;
			let r = [];
			function i(a, o) {
				let s = e[a], c = a === e.length - 1, l = null;
				if (a === 0 ? l = R.value.length > 0 ? R.value : null : o && (l = H(o[n])), l) {
					let e = l.find((e) => e[n] === s);
					if (r.push({
						options: l,
						selectedOption: e || null
					}), P.value = [...r], F.value = r.length - 1, !e || c) {
						z.value = !1;
						return;
					}
					i(a + 1, e);
				} else {
					let e = a;
					r.push({
						options: [],
						selectedOption: null
					}), P.value = [...r], L.value = [...L.value, e], t(o, e, (t) => {
						if (L.value = L.value.filter((t) => t !== e), a === 0 ? R.value = t : o && U(o[n], t), t.length === 0) {
							P.value = r.slice(0, a), z.value = !1;
							return;
						}
						let l = t.find((e) => e[n] === s);
						if (r[e] = {
							options: t,
							selectedOption: l || null
						}, P.value = [...r], F.value = r.length - 1, !l || c) {
							z.value = !1;
							return;
						}
						i(a + 1, l);
					});
				}
			}
			i(0, null);
		}
		function K() {
			let { lazyLoad: e } = w;
			if (e) {
				let e = B();
				if (e !== "" && R.value.length > 0 && q(R.value, e)) {
					W();
					return;
				}
				let t = V();
				t.length > 0 && G(t);
				return;
			}
			W();
		}
		function q(e, t) {
			let { valueKey: n, childrenKey: r } = w;
			for (let i of e) {
				if (i[n] === t) return [i];
				if (i[r] && i[r].length > 0) {
					let e = q(i[r], t);
					if (e) return [i, ...e];
				}
			}
			return null;
		}
		let ce = h(() => P.value.map((e) => e.selectedOption ? e.selectedOption[w.valueKey] : void 0).filter(b)), le = h(() => P.value.map((e) => e.selectedOption).filter(Boolean)), J = h(() => !z.value), ue = h(() => w.confirmText || C("confirm"));
		i(() => w.options, (e) => {
			R.value = e, w.lazyLoad || K();
		}, { deep: !0 }), i(() => w.modelValue, () => {
			w.lazyLoad ? V().length > 0 && K() : K();
		}, { immediate: !0 }), i(() => w.visible, (e) => {
			e ? X() : Y();
		}, { immediate: !0 }), i(A, (e) => {
			T("update:visible", e);
		});
		function Y() {
			A.value = !1, Z();
		}
		function X() {
			A.value = !0, w.lazyLoad && !P.value.length && (R.value.length > 0 ? W() : (P.value = [{
				options: [],
				selectedOption: null
			}], L.value = [0], w.lazyLoad(null, 0, (e) => {
				R.value = e, P.value = [{
					options: e,
					selectedOption: null
				}], L.value = L.value.filter((e) => e !== 0);
			})));
		}
		function de() {
			E.value?.updateLineStyle();
		}
		function fe() {
			E.value?.updateLineStyle();
		}
		function pe() {
			I.value = !0, E.value?.updateLineStyle();
		}
		function Z() {
			T("close");
		}
		function me() {
			K();
		}
		function Q() {
			J.value && $();
		}
		function he(e, t) {
			let n = P.value[e], r = n.options[t];
			if (r.disabled) return;
			let { childrenKey: i, lazyLoad: a, isLeafKey: o, valueKey: s, checkStrictly: c } = w;
			if (c && n.selectedOption?.[s] === r[s]) {
				n.selectedOption = null, P.value = P.value.slice(0, e + 1);
				return;
			}
			if (n.selectedOption = r, r[o] === !0) {
				P.value = P.value.slice(0, e + 1), $();
				return;
			}
			if (a) {
				let t = H(r[s]);
				if (t !== null) if (t.length === 0) P.value = P.value.slice(0, e + 1), $();
				else {
					let n = P.value.slice(0, e + 1);
					n.push({
						options: t,
						selectedOption: null
					}), P.value = n, _(() => {
						F.value = e + 1;
					});
				}
				else {
					let t = e + 1, n = P.value.slice(0, e + 1);
					n.push({
						options: [],
						selectedOption: null
					}), P.value = n, L.value = [...L.value, t], _(() => {
						F.value = t;
					}), a(r, t, (n) => {
						L.value = L.value.filter((e) => e !== t), U(r[s], n), n.length === 0 ? (P.value = P.value.slice(0, e + 1), $()) : P.value[t] && (P.value[t].options = n);
					});
				}
				return;
			}
			if (r[i] && r[i].length > 0) {
				let t = P.value.slice(0, e + 1);
				t.push({
					options: r[i],
					selectedOption: null
				}), P.value = t, _(() => {
					F.value = e + 1;
				});
			} else P.value = P.value.slice(0, e + 1), $();
		}
		function $() {
			let { beforeConfirm: e } = w, t = ce.value, n = le.value;
			k(e, {
				args: [t.length > 0 ? t[t.length - 1] : "", n],
				done: () => ge(t, n)
			});
		}
		function ge(e, t) {
			if (A.value = !1, E.value?.updateLineStyle(), w.lazyLoad) T("update:modelValue", e), T("confirm", {
				value: e,
				selectedOptions: t
			});
			else {
				let n = e.length > 0 ? e[e.length - 1] : "";
				T("update:modelValue", n), T("confirm", {
					value: n,
					selectedOptions: t
				});
			}
		}
		function _e({ name: e }) {
			F.value = e;
		}
		return x({
			close: Y,
			open: X
		}), (r, i) => (t(), l("div", {
			class: e(["wd-cascader", r.customClass]),
			style: n(r.customStyle)
		}, [f(ne, {
			modelValue: A.value,
			"onUpdate:modelValue": i[0] ||= (e) => A.value = e,
			title: r.title || v(C)("title"),
			"close-on-click-modal": r.closeOnClickModal,
			"z-index": r.zIndex,
			"safe-area-inset-bottom": r.safeAreaInsetBottom,
			"root-portal": r.rootPortal,
			"custom-class": "wd-cascader__popup",
			onEnter: de,
			onAfterEnter: pe,
			onLeave: fe,
			onClose: Z,
			onAfterLeave: me
		}, u({
			default: a(() => [f(D, {
				ref_key: "tabsRef",
				ref: E,
				"model-value": F.value,
				slidable: "always",
				animated: I.value,
				onClick: _e,
				"line-width": r.lineWidth,
				"line-height": r.lineHeight,
				"line-theme": r.lineTheme
			}, {
				default: a(() => [(t(!0), l(s, null, p(P.value, (n, i) => (t(), m(O, {
					key: i,
					title: n.selectedOption ? n.selectedOption[r.textKey] : v(C)("select"),
					name: i,
					lazy: !1
				}, {
					default: a(() => [c("div", { class: e(["wd-cascader__panel", { "is-loading": L.value.includes(i) }]) }, [c("div", {
						"scroll-y": !L.value.includes(i),
						class: "wd-cascader__list"
					}, [(t(!0), l(s, null, p(n.options, (a, s) => (t(), l("div", {
						key: s,
						class: e([
							"wd-cascader__list-item",
							{ "wd-cascader__list-item--selected": n.selectedOption && a[r.valueKey] === n.selectedOption[r.valueKey] },
							{ "wd-cascader__list-item--disabled": a.disabled }
						]),
						onClick: (e) => he(i, s)
					}, [c("div", ie, [c("div", ae, o(a[r.textKey]), 1), a[r.tipKey] ? (t(), l("div", oe, o(a[r.tipKey]), 1)) : g("", !0)]), n.selectedOption && a[r.valueKey] === n.selectedOption[r.valueKey] ? (t(), m(ee, {
						key: 0,
						"custom-class": "wd-cascader__checked",
						name: "check"
					})) : g("", !0)], 10, N))), 128))], 8, M), L.value.includes(i) ? (t(), l("div", se, [f(te, { "custom-class": "wd-cascader__loading-icon" })])) : g("", !0)], 2)]),
					_: 2
				}, 1032, ["title", "name"]))), 128))]),
				_: 1
			}, 8, [
				"model-value",
				"animated",
				"line-width",
				"line-height",
				"line-theme"
			])]),
			_: 2
		}, [w.checkStrictly ? {
			name: "close",
			fn: a(() => [c("div", j, [c("div", {
				class: e(`wd-cascader__action-confirm ${J.value ? "" : "wd-cascader__action-confirm--disabled"}`),
				onClick: Q
			}, o(ue.value), 3)])]),
			key: "0"
		} : void 0]), 1032, [
			"modelValue",
			"title",
			"close-on-click-modal",
			"z-index",
			"safe-area-inset-bottom",
			"root-portal"
		])], 6));
	}
});
//#endregion
export { P as default };
