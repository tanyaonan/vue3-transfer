globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { B as t, D as n, F as r, H as i, L as a, N as o, S as s, U as c, c as l, d as u, g as d, l as f, r as p, s as m, u as h } from "./vue.runtime.js";
import { P as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as v, i as y, r as b, s as x, t as S } from "./shared/wot-ui/common/props.ts.js";
import { t as C } from "./wd-icon.js";
import { t as w } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as T } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as E } from "./shared/wot-ui/components/wd-form-item/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-textarea/types.ts
var D = {
	...S,
	customTextareaContainerClass: x(""),
	customTextareaClass: x(""),
	modelValue: v(""),
	placeholder: String,
	placeholderStyle: String,
	placeholderClass: x(""),
	disabled: b(!1),
	maxlength: y(-1),
	autoFocus: b(!1),
	focus: b(!1),
	autoHeight: b(!1),
	fixed: b(!1),
	cursorSpacing: y(0),
	cursor: y(-1),
	confirmType: String,
	confirmHold: b(!1),
	showConfirmBar: b(!0),
	selectionStart: y(-1),
	selectionEnd: y(-1),
	adjustPosition: b(!0),
	disableDefaultPadding: b(!1),
	holdKeyboard: b(!1),
	showPassword: b(!1),
	clearable: b(!1),
	readonly: b(!1),
	prefixIcon: String,
	showWordLimit: b(!1),
	error: b(!1),
	clearTrigger: x("always"),
	focusWhenClear: b(!0),
	ignoreCompositionEvent: b(!0),
	inputmode: x("text"),
	enableNative: b(!0),
	compact: b(void 0)
}, O = { class: "wd-textarea__body" }, k = [
	"placeholder",
	"disabled",
	"enable-native",
	"maxlength",
	"focus",
	"auto-focus",
	"placeholder-style",
	"placeholder-class",
	"auto-height",
	"cursor-spacing",
	"fixed",
	"cursor",
	"show-confirm-bar",
	"selection-start",
	"selection-end",
	"adjust-position",
	"hold-keyboard",
	"confirm-type",
	"confirm-hold",
	"disable-default-padding",
	"ignoreCompositionEvent",
	"inputmode"
], A = {
	key: 0,
	class: "wd-textarea__readonly-mask"
}, j = {
	key: 0,
	class: "wd-textarea__count"
}, M = /*@__PURE__*/ d({
	name: "wd-textarea",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: D,
	emits: [
		"update:modelValue",
		"clear",
		"blur",
		"focus",
		"input",
		"keyboardheightchange",
		"confirm",
		"linechange",
		"click"
	],
	setup(e, { emit: d }) {
		let { translate: v } = T("textarea"), y = e, b = d, { parent: x } = w(E), S = m(() => _(y.placeholder) ? y.placeholder : v("placeholder")), D = a(!1), M = a(!1), N = a(!1), P = a("");
		o(() => y.focus, (e) => {
			M.value = e;
		}, {
			immediate: !0,
			deep: !0
		}), o(() => y.modelValue, (e) => {
			P.value = _(e) ? String(e) : "";
		}, {
			immediate: !0,
			deep: !0
		});
		let F = m(() => {
			let { disabled: e, readonly: t, clearable: n, clearTrigger: r } = y;
			return !!(n && !t && !e && P.value && (r === "always" || y.clearTrigger === "focus" && N.value));
		}), I = m(() => {
			let { disabled: e, readonly: t, maxlength: n, showWordLimit: r } = y;
			return !!(!e && !t && _(n) && n > -1 && r);
		}), L = m(() => Array.from(String(H(y.modelValue))).length), R = m(() => `wd-textarea ${y.error ? "is-error" : ""} ${y.disabled ? "is-disabled" : ""} ${y.autoHeight ? "is-auto-height" : ""} ${z.value ? "is-compact" : ""} ${y.customClass}`), z = m(() => _(y.compact) ? y.compact : _(x.value)), B = m(() => `wd-textarea__placeholder  ${y.placeholderClass}`);
		s(() => {
			V();
		});
		function V() {
			P.value = H(P.value), b("update:modelValue", P.value);
		}
		function H(e) {
			if (e == null) return "";
			let { maxlength: t, showWordLimit: n } = y;
			return n && t !== -1 && String(e).length > t ? e.toString().substring(0, t) : `${e}`;
		}
		async function U() {
			N.value = !1, P.value = "", y.focusWhenClear && (D.value = !0, M.value = !1), await g(), y.focusWhenClear && (M.value = !0, N.value = !0), b("update:modelValue", P.value), b("clear");
		}
		async function W({ detail: e }) {
			if (await g(150), D.value) {
				D.value = !1;
				return;
			}
			N.value = !1, b("blur", {
				value: P.value,
				cursor: e.cursor ? e.cursor : null
			}), await x.value?.validateByTrigger("blur");
		}
		function G({ detail: e }) {
			N.value = !0, b("focus", e);
		}
		function K({ detail: e }) {
			P.value = H(P.value), b("update:modelValue", P.value), b("input", e);
		}
		function q({ detail: e }) {
			b("keyboardheightchange", e);
		}
		function J({ detail: e }) {
			b("confirm", e);
		}
		function Y({ detail: e }) {
			b("linechange", e);
		}
		return (e, a) => (n(), u("div", {
			class: t(R.value),
			style: i(e.customStyle)
		}, [l("div", O, [
			r(l("textarea", {
				class: t(`wd-textarea__inner ${e.customTextareaClass}`),
				"onUpdate:modelValue": a[0] ||= (e) => P.value = e,
				"show-count": !1,
				placeholder: S.value,
				disabled: e.disabled || e.readonly,
				"enable-native": e.enableNative,
				maxlength: e.maxlength,
				focus: M.value,
				"auto-focus": e.autoFocus,
				"placeholder-style": e.placeholderStyle,
				"placeholder-class": B.value,
				"auto-height": e.autoHeight,
				"cursor-spacing": e.cursorSpacing,
				fixed: e.fixed,
				cursor: e.cursor,
				"show-confirm-bar": e.showConfirmBar,
				"selection-start": e.selectionStart,
				"selection-end": e.selectionEnd,
				"adjust-position": e.adjustPosition,
				"hold-keyboard": e.holdKeyboard,
				"confirm-type": e.confirmType,
				"confirm-hold": e.confirmHold,
				"disable-default-padding": e.disableDefaultPadding,
				ignoreCompositionEvent: e.ignoreCompositionEvent,
				inputmode: e.inputmode,
				onInput: K,
				onFocus: G,
				onBlur: W,
				onConfirm: J,
				onLinechange: Y,
				onKeyboardheightchange: q
			}, null, 42, k), [[p, P.value]]),
			y.readonly ? (n(), u("div", A)) : h("", !0),
			F.value ? (n(), f(C, {
				key: 1,
				"custom-class": "wd-textarea__clear",
				name: "close-circle",
				onClick: U
			})) : h("", !0)
		]), I.value ? (n(), u("div", j, c(L.value) + "/" + c(e.maxlength), 1)) : h("", !0)], 6));
	}
}), N = /* @__PURE__ */ e({ default: () => P }), P = M;
//#endregion
export { N as n, P as t };
