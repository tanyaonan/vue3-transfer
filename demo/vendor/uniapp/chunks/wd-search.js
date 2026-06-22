globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, F as i, H as a, L as o, N as s, T as c, U as l, c as u, d, g as f, h as p, l as m, r as h, s as g, u as _, z as v } from "./vue.runtime.js";
import { P as y, j as b } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as x, r as S, s as C, t as w } from "./shared/wot-ui/common/props.ts.js";
import { t as T } from "./wd-icon.js";
import { t as E } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-search/types.ts
var D = {
	...w,
	customInputClass: C(""),
	modelValue: C(""),
	placeholder: String,
	cancelTxt: String,
	variant: C("plain"),
	hideCancel: S(!1),
	disabled: S(!1),
	maxlength: x(-1),
	placeholderLeft: S(!1),
	focus: S(!1),
	focusWhenClear: S(!1),
	placeholderStyle: String,
	placeholderClass: C("")
}, O = { class: "wd-search__field" }, k = [
	"placeholder",
	"placeholder-class",
	"placeholder-style",
	"disabled",
	"maxlength",
	"focus"
], A = /*@__PURE__*/ f({
	name: "wd-search",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: D,
	emits: [
		"update:modelValue",
		"change",
		"clear",
		"search",
		"focus",
		"blur",
		"cancel",
		"click"
	],
	setup(e, { emit: f }) {
		let x = e, S = f, { translate: C } = E("search"), w = o(!1), D = o(!1), A = o(""), j = o(!0), M = o(!1);
		s(() => x.modelValue, (e) => {
			A.value = e, e && (D.value = !0);
		}, { immediate: !0 }), s(() => x.focus, (e) => {
			if (e) {
				if (x.disabled) return;
				I();
			}
		}), c(() => {
			x.focus && I();
		});
		let N = g(() => {
			let e = x.variant === "light", t = x.variant === "plain";
			return `wd-search ${e ? "is-light" : ""} ${t ? "is-plain" : ""} ${x.hideCancel ? "is-without-cancel" : ""} ${x.customClass}`;
		}), P = g(() => b({ display: A.value === "" && j.value ? "flex" : "none" }));
		async function F(e) {
			D.value = e, await y(), w.value = e;
		}
		async function I() {
			x.disabled || (await y(100), j.value = !1, F(!0));
		}
		function L(e) {
			A.value = e.detail.value, S("update:modelValue", e.detail.value), S("change", { value: e.detail.value });
		}
		async function R() {
			A.value = "", x.focusWhenClear && (M.value = !0, w.value = !1), await y(), x.focusWhenClear ? (j.value = !1, F(!0)) : (j.value = !0, F(!1)), S("change", { value: "" }), S("update:modelValue", ""), S("clear");
		}
		function z({ detail: { value: e } }) {
			S("search", { value: e });
		}
		function B() {
			j.value = !1, S("focus", { value: A.value });
		}
		async function V() {
			if (await y(150), M.value) {
				M.value = !1;
				return;
			}
			j.value = !A.value, D.value = !j.value, w.value = !1, S("blur", { value: A.value });
		}
		function H() {
			S("cancel", { value: A.value });
		}
		function U() {
			x.disabled && S("click");
		}
		return (e, o) => (r(), d("div", {
			class: n(N.value),
			style: a(e.customStyle)
		}, [u("div", {
			class: "wd-search__block",
			onClick: U
		}, [t(e.$slots, "prefix"), u("div", O, [
			e.placeholderLeft ? _("", !0) : (r(), d("div", {
				key: 0,
				style: a(P.value),
				class: "wd-search__cover",
				onClick: I
			}, [p(T, {
				name: "search-line",
				"custom-class": "wd-search__search-icon"
			}), u("span", { class: n(`wd-search__placeholder-txt ${e.placeholderClass}`) }, l(e.placeholder || v(C)("search")), 3)], 4)),
			D.value || A.value || e.placeholderLeft ? (r(), m(T, {
				key: 1,
				name: "search-line",
				"custom-class": "wd-search__search-left-icon"
			})) : _("", !0),
			D.value || A.value || e.placeholderLeft ? i((r(), d("input", {
				key: 2,
				placeholder: e.placeholder || v(C)("search"),
				"placeholder-class": `wd-search__placeholder-txt ${e.placeholderClass}`,
				"placeholder-style": e.placeholderStyle,
				"confirm-type": "search",
				"onUpdate:modelValue": o[0] ||= (e) => A.value = e,
				class: n(["wd-search__input", e.customInputClass]),
				onFocus: B,
				onInput: L,
				onBlur: V,
				onConfirm: z,
				disabled: e.disabled,
				maxlength: e.maxlength,
				focus: w.value
			}, null, 42, k)), [[h, A.value]]) : _("", !0),
			A.value ? (r(), m(T, {
				key: 3,
				"custom-class": "wd-search__clear-icon",
				name: "close-circle-fill",
				onClick: R
			})) : _("", !0),
			t(e.$slots, "input-suffix")
		])]), e.hideCancel ? _("", !0) : t(e.$slots, "suffix", { key: 0 }, () => [u("div", {
			class: "wd-search__cancel",
			onClick: H
		}, l(e.cancelTxt || v(C)("cancel")), 1)])], 6));
	}
}), j = /* @__PURE__ */ e({ default: () => M }), M = A;
//#endregion
export { j as n, M as t };
