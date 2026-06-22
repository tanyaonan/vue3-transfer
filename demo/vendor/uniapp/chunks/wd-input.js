globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, F as i, H as a, L as o, N as s, U as c, c as l, d as u, g as d, l as f, n as p, s as m, u as h } from "./vue.runtime.js";
import { P as g, b as _, y as v } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as y, i as b, r as x, s as S, t as C } from "./shared/wot-ui/common/props.ts.js";
import { t as w } from "./wd-icon.js";
import { t as T } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as E } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as D } from "./shared/wot-ui/components/wd-form-item/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-input/types.ts
var O = {
	...C,
	customInputClass: S(""),
	placeholder: String,
	placeholderStyle: String,
	placeholderClass: S(""),
	cursorSpacing: b(0),
	cursor: b(-1),
	selectionStart: b(-1),
	selectionEnd: b(-1),
	adjustPosition: x(!0),
	holdKeyboard: x(!1),
	confirmType: S("done"),
	confirmHold: x(!1),
	focus: x(!1),
	type: S("text"),
	maxlength: {
		type: Number,
		default: -1
	},
	disabled: x(!1),
	alwaysEmbed: x(!1),
	alignRight: x(!1),
	modelValue: y(""),
	showPassword: x(!1),
	clearable: x(!1),
	readonly: x(!1),
	prefixIcon: String,
	suffixIcon: String,
	showWordLimit: x(!1),
	error: x(!1),
	clearTrigger: S("always"),
	focusWhenClear: x(!0),
	ignoreCompositionEvent: x(!0),
	inputmode: S("text"),
	enableNative: x(!0),
	compact: x(void 0)
}, k = {
	key: 0,
	class: "wd-input__prefix"
}, A = [
	"type",
	"password",
	"placeholder",
	"disabled",
	"maxlength",
	"focus",
	"confirm-type",
	"confirm-hold",
	"cursor",
	"cursor-spacing",
	"placeholder-style",
	"selection-start",
	"selection-end",
	"adjust-position",
	"hold-keyboard",
	"always-embed",
	"placeholder-class",
	"ignoreCompositionEvent",
	"inputmode",
	"enable-native"
], j = {
	key: 1,
	class: "wd-input__readonly-mask"
}, M = {
	key: 2,
	class: "wd-input__suffix"
}, N = {
	key: 2,
	class: "wd-input__count"
}, P = /*@__PURE__*/ d({
	name: "wd-input",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: O,
	emits: [
		"update:modelValue",
		"clear",
		"blur",
		"focus",
		"input",
		"keyboardheightchange",
		"confirm",
		"clicksuffixicon",
		"clickprefixicon",
		"click"
	],
	setup(e, { emit: d, slots: y }) {
		let b = e, x = d, { translate: S } = E("input"), { parent: C } = T(D), O = o(!1), P = o(!1), F = o(!1), I = o(!1), L = o(G());
		s(() => b.focus, (e) => {
			F.value = e;
		}, {
			immediate: !0,
			deep: !0
		}), s(() => b.modelValue, (e) => {
			L.value = v(e) ? String(e) : "";
		});
		let R = m(() => v(b.placeholder) ? b.placeholder : S("placeholder")), z = m(() => {
			let { disabled: e, readonly: t, clearable: n, clearTrigger: r } = b;
			return !!(n && !t && !e && L.value && (r === "always" || b.clearTrigger === "focus" && I.value));
		}), B = m(() => {
			let { disabled: e, readonly: t, maxlength: n, showWordLimit: r } = b;
			return !!(!e && !t && v(n) && n > -1 && r);
		}), V = m(() => Array.from(String(K(b.modelValue))).length), H = m(() => `wd-input ${b.error ? "is-error" : ""} ${b.disabled ? "is-disabled" : ""}  ${W.value ? "is-compact" : ""} ${b.customClass}`), U = m(() => `wd-input__placeholder  ${b.placeholderClass}`), W = m(() => v(b.compact) ? b.compact : v(C.value));
		function G() {
			let e = K(b.modelValue);
			return re(e, b.modelValue) || x("update:modelValue", e), e;
		}
		function K(e) {
			let { maxlength: t } = b;
			return v(t) && t !== -1 && String(e).length > t ? e.toString().slice(0, t) : e;
		}
		function q() {
			O.value = !O.value;
		}
		async function J() {
			I.value = !1, L.value = "", b.focusWhenClear && (P.value = !0, F.value = !1), await g(), b.focusWhenClear && (F.value = !0, I.value = !0), x("update:modelValue", L.value), x("clear");
		}
		async function Y() {
			if (await g(150), P.value) {
				P.value = !1;
				return;
			}
			I.value = !1, x("blur", { value: L.value }), await C.value?.validateByTrigger("blur");
		}
		function X({ detail: e }) {
			I.value = !0, x("focus", e);
		}
		function Z({ detail: e }) {
			x("update:modelValue", L.value), x("input", e);
		}
		function Q({ detail: e }) {
			x("keyboardheightchange", e);
		}
		function $({ detail: e }) {
			x("confirm", e);
		}
		function ee() {
			x("clicksuffixicon");
		}
		function te() {
			x("clickprefixicon");
		}
		function ne(e) {
			x("click", e);
		}
		function re(e, t) {
			return _(String(e), String(t));
		}
		return (e, o) => (r(), u("div", {
			class: n(H.value),
			style: a(e.customStyle),
			onClick: ne
		}, [
			e.prefixIcon || y.prefix ? (r(), u("div", k, [e.prefixIcon && !y.prefix ? (r(), f(w, {
				key: 0,
				"custom-class": "wd-input__icon",
				name: e.prefixIcon,
				onClick: te
			}, null, 8, ["name"])) : t(e.$slots, "prefix", { key: 1 })])) : h("", !0),
			i(l("input", {
				class: n([
					"wd-input__inner",
					e.prefixIcon ? "wd-input__inner--prefix" : "",
					B.value ? "wd-input__inner--count" : "",
					e.alignRight ? "is-align-right" : "",
					e.customInputClass
				]),
				type: e.type,
				password: e.showPassword && !O.value,
				"onUpdate:modelValue": o[0] ||= (e) => L.value = e,
				placeholder: R.value,
				disabled: e.disabled || e.readonly,
				maxlength: e.maxlength,
				focus: F.value,
				"confirm-type": e.confirmType,
				"confirm-hold": e.confirmHold,
				cursor: e.cursor,
				"cursor-spacing": e.cursorSpacing,
				"placeholder-style": e.placeholderStyle,
				"selection-start": e.selectionStart,
				"selection-end": e.selectionEnd,
				"adjust-position": e.adjustPosition,
				"hold-keyboard": e.holdKeyboard,
				"always-embed": e.alwaysEmbed,
				"placeholder-class": U.value,
				ignoreCompositionEvent: e.ignoreCompositionEvent,
				inputmode: e.inputmode,
				"enable-native": e.enableNative,
				onInput: Z,
				onFocus: X,
				onBlur: Y,
				onConfirm: $,
				onKeyboardheightchange: Q
			}, null, 42, A), [[p, L.value]]),
			b.readonly ? (r(), u("div", j)) : h("", !0),
			z.value || e.showPassword || e.suffixIcon || B.value || y.suffix ? (r(), u("div", M, [
				z.value ? (r(), f(w, {
					key: 0,
					"custom-class": "wd-input__clear",
					name: "close-circle",
					onClick: J
				})) : h("", !0),
				e.showPassword ? (r(), f(w, {
					key: 1,
					"custom-class": "wd-input__icon",
					name: O.value ? "eye" : "eye-invisible",
					onClick: q
				}, null, 8, ["name"])) : h("", !0),
				B.value ? (r(), u("div", N, c(V.value) + "/" + c(e.maxlength), 1)) : h("", !0),
				e.suffixIcon && !y.suffix ? (r(), f(w, {
					key: 3,
					"custom-class": "wd-input__icon",
					name: e.suffixIcon,
					onClick: ee
				}, null, 8, ["name"])) : t(e.$slots, "suffix", { key: 4 })
			])) : h("", !0)
		], 6));
	}
}), F = /* @__PURE__ */ e({ default: () => I }), I = P;
//#endregion
export { F as n, I as t };
