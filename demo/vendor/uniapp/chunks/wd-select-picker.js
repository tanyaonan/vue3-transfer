globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, P as a, S as o, U as s, _ as c, a as l, c as u, d, g as f, h as p, k as m, l as h, m as g, s as _, u as v, x as y, z as b } from "./vue.runtime.js";
import { P as x, g as S, p as C, y as w } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as T, n as E, o as D, r as O, s as k, t as A } from "./shared/wot-ui/common/props.ts.js";
import { t as ee } from "./wd-loading.js";
import { t as te } from "./wd-action-sheet.js";
import { t as ne } from "./wd-button.js";
import { t as re } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as ie } from "./shared/wot-ui/common/interceptor.ts.js";
import { t as ae } from "./wd-checkbox-group.js";
import { t as oe } from "./wd-checkbox.js";
import { t as se } from "./wd-radio-group.js";
import { t as ce } from "./wd-radio.js";
import { t as le } from "./wd-search.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-select-picker/types.ts
var j = {
	...A,
	title: String,
	checkedColor: String,
	min: T(0),
	max: T(0),
	selectSize: String,
	loading: O(!1),
	loadingColor: k("#4D80F0"),
	closeOnClickModal: O(!0),
	modelValue: D([
		String,
		Number,
		Boolean,
		Array
	]),
	columns: E(),
	type: k("checkbox"),
	valueKey: k("value"),
	labelKey: k("label"),
	confirmButtonText: String,
	beforeConfirm: Function,
	zIndex: T(15),
	safeAreaInsetBottom: O(!0),
	filterable: O(!1),
	filterPlaceholder: String,
	scrollIntoView: O(!0),
	customContentClass: k(""),
	showConfirm: O(!0),
	rootPortal: O(!1),
	visible: O(!1)
}, M = ["scroll-y", "scroll-top"], N = {
	key: 0,
	class: "wd-select-picker__checkbox",
	id: "wd-checkbox-group"
}, P = ["id"], F = {
	key: 0,
	class: "wd-select-picker__text-active"
}, I = {
	key: 1,
	class: "wd-select-picker__radio",
	id: "wd-radio-group"
}, L = ["id"], R = {
	key: 1,
	class: "wd-select-picker__footer"
}, z = /* @__PURE__ */ f({
	name: "wd-select-picker",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: j,
	emits: [
		"change",
		"cancel",
		"confirm",
		"update:modelValue",
		"open",
		"close",
		"update:visible"
	],
	setup(f, { expose: T, emit: E }) {
		let { translate: D } = re("select-picker"), O = f, k = E, A = r(!1), j = r([]), z = r(!1), B = r([]), V = r(""), H = r([]), U = r(0), W = _(() => {
			let e = /* @__PURE__ */ new Map(), { columns: t, valueKey: n } = O;
			return t.forEach((t) => {
				e.set(t[n], t);
			}), e;
		}), G = _(() => O.filterable && !!V.value);
		function ue(e) {
			return O.type === "checkbox" ? S(e) ? e.join("|") : "" : w(e) ? String(e) : "";
		}
		function de(e) {
			let { valueKey: t, labelKey: n } = O;
			return e.map((e) => `${w(e[t]) ? String(e[t]) : ""}|${w(e[n]) ? String(e[n]) : ""}|${e.disabled ? "1" : "0"}`).join("||");
		}
		i(() => ue(O.modelValue), () => {
			let e = O.modelValue;
			e !== j.value && (j.value = J(e), B.value = J(e));
		}, { immediate: !0 }), i(() => de(O.columns), () => {
			let e = O.columns;
			O.filterable && V.value ? $(e, V.value) : H.value = e;
		}, { immediate: !0 }), i(() => O.visible, (e) => {
			A.value = e;
		}, { immediate: !0 }), o(() => {
			j.value = J(O.modelValue), H.value = O.columns;
		});
		let { proxy: K } = c();
		async function fe() {
			let e = "", t = "";
			if (w(j.value) && j.value !== "" && !S(j.value) ? (e = "#wd-radio-group", t = `#radio${j.value}`) : S(j.value) && j.value.length > 0 && (e = "#wd-checkbox-group", t = `#check${j.value[0]}`), e && t) {
				await x(2e3 / 30);
				let [n, r, i] = await Promise.all([
					C(".wd-select-picker__wrapper", !1, K),
					C(e, !1, K),
					C(t, !1, K)
				]);
				w(r) && w(n) && w(i) && (i.bottom > n.top && i.top < n.bottom || (U.value = -1, y(() => {
					U.value = Math.max(0, i.top - r.top - n.height / 2);
				})));
			}
		}
		function pe() {}
		function q(e) {
			let { valueKey: t, labelKey: n } = O;
			return W.value.get(e) || {
				[t]: e,
				[n]: ""
			};
		}
		function J(e) {
			return O.type === "checkbox" ? S(e) ? e : [] : e;
		}
		function Y({ value: e }) {
			j.value = e, k("change", { value: e }), O.type === "radio" && !O.showConfirm && Z();
		}
		function X() {
			A.value = !1, k("update:visible", !1), z.value || (j.value = J(B.value)), k("cancel"), k("close");
		}
		function me() {
			j.value = J(O.modelValue), A.value = !0, k("update:visible", !0), z.value = !1, k("open");
		}
		function Z() {
			if (O.loading) {
				A.value = !1, k("update:visible", !1), k("confirm"), k("close");
				return;
			}
			ie(O.beforeConfirm, {
				args: [j.value],
				done: () => {
					he();
				}
			});
		}
		function he() {
			z.value = !0, A.value = !1, k("update:visible", !1), B.value = J(j.value);
			let e = {};
			e = O.type === "checkbox" ? (S(B.value) ? B.value : []).map((e) => q(e)) : q(B.value), k("update:modelValue", B.value), k("confirm", {
				value: B.value,
				selectedItems: e
			}), k("close");
		}
		function ge(e) {
			return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
		function _e(e, t) {
			let n = RegExp(`(${ge(t)})`, "g");
			return e.split(n).map((e) => ({
				type: e === t ? "active" : "normal",
				label: e
			}));
		}
		function Q({ value: e }) {
			V.value = e, e === "" ? H.value = O.columns : $(O.columns, e);
		}
		function $(e, t) {
			H.value = e.filter((e) => e[O.labelKey].indexOf(t) > -1).map((e) => ({
				...e,
				[O.labelKey]: _e(e[O.labelKey], t)
			}));
		}
		let ve = _(() => O.type === "radio" && O.showConfirm || O.type === "checkbox");
		return T({
			close: X,
			open: me
		}), (r, i) => (t(), d("div", {
			class: e(`wd-select-picker ${r.customClass}`),
			style: n(r.customStyle)
		}, [p(te, {
			modelValue: A.value,
			"onUpdate:modelValue": i[3] ||= (e) => A.value = e,
			title: r.title || b(D)("title"),
			"close-on-click-modal": r.closeOnClickModal,
			"z-index": r.zIndex,
			"safe-area-inset-bottom": r.safeAreaInsetBottom,
			"root-portal": r.rootPortal,
			onClose: X,
			onAfterEnter: i[4] ||= (e) => r.scrollIntoView ? fe() : "",
			"custom-class": "wd-select-picker__popup"
		}, {
			default: a(() => [
				r.filterable ? (t(), h(le, {
					key: 0,
					modelValue: V.value,
					"onUpdate:modelValue": i[0] ||= (e) => V.value = e,
					placeholder: r.filterPlaceholder || b(D)("filterPlaceholder"),
					"hide-cancel": "",
					"placeholder-left": "",
					onChange: Q
				}, null, 8, ["modelValue", "placeholder"])) : v("", !0),
				u("div", {
					class: e(`wd-select-picker__wrapper ${r.loading ? "is-loading" : ""} ${r.customContentClass}`),
					"scroll-y": !r.loading,
					"scroll-top": U.value,
					"scroll-with-animation": !0
				}, [
					r.type === "checkbox" && b(S)(j.value) ? (t(), d("div", N, [p(ae, {
						modelValue: j.value,
						"onUpdate:modelValue": i[1] ||= (e) => j.value = e,
						size: r.selectSize,
						"checked-color": r.checkedColor,
						min: r.min,
						max: r.max,
						type: "square",
						placement: "right",
						onChange: Y
					}, {
						default: a(() => [(t(!0), d(l, null, m(H.value, (e) => (t(), d("div", {
							key: e[r.valueKey],
							id: "check" + e[r.valueKey],
							class: "wd-select-picker__checkbox-item"
						}, [p(oe, {
							name: e[r.valueKey],
							disabled: e.disabled,
							"custom-label-class": "wd-select-picker__checkbox-label"
						}, {
							default: a(() => [G.value ? (t(!0), d(l, { key: 0 }, m(e[r.labelKey], (e) => (t(), d(l, { key: e.label }, [e.type === "active" ? (t(), d("span", F, s(e.label), 1)) : (t(), d(l, { key: 1 }, [g(s(e.label), 1)], 64))], 64))), 128)) : (t(), d(l, { key: 1 }, [g(s(e[r.labelKey]), 1)], 64))]),
							_: 2
						}, 1032, ["name", "disabled"])], 8, P))), 128))]),
						_: 1
					}, 8, [
						"modelValue",
						"size",
						"checked-color",
						"min",
						"max"
					])])) : v("", !0),
					r.type === "radio" && !b(S)(j.value) ? (t(), d("div", I, [p(se, {
						modelValue: j.value,
						"onUpdate:modelValue": i[2] ||= (e) => j.value = e,
						cell: "",
						size: r.selectSize,
						"checked-color": r.checkedColor,
						placement: "right",
						type: "dot",
						onChange: Y
					}, {
						default: a(() => [(t(!0), d(l, null, m(H.value, (n, i) => (t(), d("div", {
							key: i,
							id: "radio" + n[r.valueKey],
							class: "wd-select-picker__radio-item"
						}, [p(ce, {
							value: n[r.valueKey],
							disabled: n.disabled,
							"custom-label-class": "wd-select-picker__radio-label"
						}, {
							default: a(() => [G.value ? (t(!0), d(l, { key: 0 }, m(n[r.labelKey], (n) => (t(), d("span", {
								key: n.label,
								class: e(`${n.type === "active" ? "wd-select-picker__text-active" : ""}`)
							}, s(n.label), 3))), 128)) : (t(), d(l, { key: 1 }, [g(s(n[r.labelKey]), 1)], 64))]),
							_: 2
						}, 1032, ["value", "disabled"])], 8, L))), 128))]),
						_: 1
					}, 8, [
						"modelValue",
						"size",
						"checked-color"
					])])) : v("", !0),
					r.loading ? (t(), d("div", {
						key: 2,
						class: "wd-select-picker__loading",
						onTouchmove: pe
					}, [p(ee, {
						color: r.loadingColor,
						"custom-class": "wd-select-picker__loading-icon"
					}, null, 8, ["color"])], 32)) : v("", !0)
				], 10, M),
				ve.value ? (t(), d("div", R, [p(ne, {
					block: "",
					size: "large",
					onClick: Z,
					disabled: r.loading
				}, {
					default: a(() => [g(s(r.confirmButtonText || b(D)("confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])])) : v("", !0)
			]),
			_: 1
		}, 8, [
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
export { z as default };
