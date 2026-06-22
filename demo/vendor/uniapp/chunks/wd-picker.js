globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, P as a, S as o, T as s, U as c, _ as l, c as u, d, g as f, h as p, u as m, z as h } from "./vue.runtime.js";
import { l as g } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as _, n as v, r as y, s as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./wd-popup.js";
import { t as C } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as w } from "./wd-picker-view.js";
import { t as T } from "./shared/wot-ui/common/interceptor.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-picker/types.ts
var E = {
	...x,
	customViewClass: b(""),
	title: String,
	cancelButtonText: String,
	confirmButtonText: String,
	beforeConfirm: Function,
	closeOnClickModal: y(!0),
	safeAreaInsetBottom: y(!0),
	itemHeight: _(44),
	visibleItemCount: _(6),
	valueKey: b("value"),
	labelKey: b("label"),
	cascade: y(!1),
	childrenKey: b("children"),
	modelValue: v(),
	columns: v(),
	zIndex: _(15),
	immediateChange: y(!1),
	rootPortal: y(!1),
	visible: y(!1)
}, D = { class: "wd-picker__wraper" }, O = {
	key: 0,
	class: "wd-picker__title"
}, k = /* @__PURE__ */ f({
	name: "wd-picker",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: E,
	emits: [
		"confirm",
		"open",
		"cancel",
		"update:modelValue",
		"update:visible"
	],
	setup(f, { expose: _, emit: v }) {
		let { translate: y } = C("picker"), b = f, x = v, E = r(!1), k = r([]), A = r([]), j = r(), M = r([]), N = r(!1), P = r(!1);
		i(() => b.modelValue, (e) => {
			k.value = e;
		}, {
			deep: !0,
			immediate: !0
		}), i(() => b.columns, (e) => {
			M.value = g(e), e.length === 0 && (k.value = []);
		}, {
			deep: !0,
			immediate: !0
		}), i(() => b.visible, (e) => {
			e ? R() : E.value = !1;
		}), i(E, (e) => {
			x("update:visible", e);
		});
		let { proxy: F } = l();
		s(() => {
			b.visible && R();
		}), o(() => {
			M.value = g(b.columns);
		});
		function I() {
			R();
		}
		function L() {
			z();
		}
		function R() {
			x("open"), E.value = !0, k.value = b.modelValue, M.value = g(b.columns);
		}
		function z() {
			E.value = !1, x("cancel");
		}
		function B() {
			if (N.value) {
				P.value = !0;
				return;
			}
			let { beforeConfirm: e } = b;
			T(e, {
				args: [k.value],
				done: () => {
					V();
				}
			});
		}
		function V() {
			let e = j.value?.getSelectedValues() || k.value, t = j.value?.getSelectedOptions() || A.value;
			E.value = !1, x("update:modelValue", e), x("confirm", {
				value: e,
				selectedItems: t
			});
		}
		function H({ selectedValues: e, selectedOptions: t }) {
			k.value = e, A.value = t;
		}
		function U() {}
		function W() {
			N.value = !0;
		}
		function G() {
			N.value = !1, P.value && (P.value = !1, B());
		}
		return _({
			close: L,
			open: I
		}), (r, i) => (t(), d("div", {
			class: e(`wd-picker ${r.customClass}`),
			style: n(r.customStyle)
		}, [p(S, {
			modelValue: E.value,
			"onUpdate:modelValue": i[1] ||= (e) => E.value = e,
			position: "bottom",
			"hide-when-close": !1,
			"close-on-click-modal": r.closeOnClickModal,
			"z-index": r.zIndex,
			"safe-area-inset-bottom": r.safeAreaInsetBottom,
			"root-portal": r.rootPortal,
			onClose: z,
			"custom-class": "wd-picker__popup"
		}, {
			default: a(() => [u("div", D, [u("div", {
				class: "wd-picker__toolbar",
				onTouchmove: U
			}, [
				u("div", {
					class: "wd-picker__action wd-picker__action--cancel",
					onClick: z
				}, c(r.cancelButtonText || h(y)("cancel")), 1),
				r.title ? (t(), d("div", O, c(r.title), 1)) : m("", !0),
				u("div", {
					class: "wd-picker__action wd-picker__action--confirm",
					onClick: B
				}, c(r.confirmButtonText || h(y)("done")), 1)
			], 32), p(w, {
				ref_key: "pickerViewRef",
				ref: j,
				"custom-class": r.customViewClass,
				modelValue: k.value,
				"onUpdate:modelValue": i[0] ||= (e) => k.value = e,
				columns: M.value,
				"item-height": r.itemHeight,
				"visible-item-count": r.visibleItemCount,
				"value-key": r.valueKey,
				"label-key": r.labelKey,
				cascade: r.cascade,
				"children-key": r.childrenKey,
				"immediate-change": r.immediateChange,
				onChange: H,
				onPickstart: W,
				onPickend: G
			}, null, 8, [
				"custom-class",
				"modelValue",
				"columns",
				"item-height",
				"visible-item-count",
				"value-key",
				"label-key",
				"cascade",
				"children-key",
				"immediate-change"
			])])]),
			_: 1
		}, 8, [
			"modelValue",
			"close-on-click-modal",
			"z-index",
			"safe-area-inset-bottom",
			"root-portal"
		])], 6));
	}
});
//#endregion
export { k as default };
