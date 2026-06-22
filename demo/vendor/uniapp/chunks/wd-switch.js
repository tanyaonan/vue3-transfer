globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, S as r, U as i, V as a, b as o, c as s, d as c, g as l, l as u, s as d, u as f } from "./vue.runtime.js";
import { M as p, j as m, k as h, t as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as v, r as y, s as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./wd-icon.js";
import { t as C } from "./wd-loading.js";
import { t as w } from "./shared/wot-ui/common/interceptor.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-switch/types.ts
var T = {
	...x,
	modelValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: !1
	},
	disabled: y(!1),
	inactiveActionIcon: String,
	activeActionIcon: String,
	activeIcon: String,
	inactiveIcon: String,
	classPrefix: b("wd-icon"),
	inactiveActionCssIcon: {
		type: [Boolean, String],
		default: !1
	},
	activeActionCssIcon: {
		type: [Boolean, String],
		default: !1
	},
	activeCssIcon: {
		type: [Boolean, String],
		default: !1
	},
	inactiveCssIcon: {
		type: [Boolean, String],
		default: !1
	},
	activeText: b(""),
	inactiveText: b(""),
	activeValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: !0
	},
	inactiveValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: !1
	},
	activeColor: String,
	inactiveColor: String,
	size: v,
	shape: b("round"),
	loading: Boolean,
	loadingProps: Object,
	beforeChange: Function
}, E = {
	key: 1,
	class: "wd-switch__inner-text"
}, D = { class: "wd-switch__action" }, O = /* @__PURE__ */ l({
	name: "wd-switch",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: T,
	emits: ["change", "update:modelValue"],
	setup(l, { emit: v }) {
		let y = l, b = v, x = d(() => y.modelValue === y.activeValue), T = d(() => `wd-switch ${y.customClass} ${y.disabled ? "is-disabled" : ""} ${y.loading ? "is-loading" : ""} wd-switch--${y.shape} is-${x.value ? "active" : "inactive"}`), O = d(() => {
			let e = {};
			return y.size && (e["font-size"] = g(y.size)), `${m(e)}${y.customStyle}`;
		}), k = d(() => `${m({ background: x.value ? y.activeColor : y.inactiveColor })}$`), A = d(() => x.value ? y.activeIcon : y.inactiveIcon), j = d(() => x.value ? y.activeCssIcon : y.inactiveCssIcon), M = d(() => x.value ? y.activeActionIcon : y.inactiveActionIcon), N = d(() => x.value ? y.activeActionCssIcon : y.inactiveActionCssIcon), P = d(() => {
			let e = _(y.loadingProps) ? p(y.loadingProps, h) : {}, t = [_(e.customSpinnerClass) ? e.customSpinnerClass : "", "wd-switch__action-loading"].filter(Boolean).join(" "), n = _(e.type) ? e.type : "spinner";
			return {
				...e,
				customSpinnerClass: t,
				type: n
			};
		});
		function F() {
			if (y.disabled || y.loading) return;
			let e = x.value ? y.inactiveValue : y.activeValue;
			w(y.beforeChange, {
				args: [e],
				done: () => {
					b("update:modelValue", e), b("change", { value: e });
				}
			});
		}
		return r(() => {
			[y.activeValue, y.inactiveValue].indexOf(y.modelValue) === -1 && (b("update:modelValue", y.inactiveValue), b("change", { value: y.inactiveValue }));
		}), (r, l) => (t(), c("div", {
			class: e(T.value),
			style: n(O.value),
			onClick: F
		}, [s("div", {
			class: "wd-switch__inner",
			style: n(k.value)
		}, [A.value || j.value ? (t(), u(S, {
			key: 0,
			"custom-class": "wd-switch__inner-icon",
			name: A.value,
			"class-prefix": r.classPrefix,
			"css-icon": j.value
		}, null, 8, [
			"name",
			"class-prefix",
			"css-icon"
		])) : (t(), c("span", E, i(x.value ? r.activeText : r.inactiveText), 1))], 4), s("div", D, [r.loading ? (t(), u(C, a(o({ key: 0 }, P.value)), null, 16)) : M.value || N.value ? (t(), u(S, {
			key: 1,
			"custom-class": "wd-switch__action-icon",
			name: M.value,
			"class-prefix": r.classPrefix,
			"css-icon": N.value
		}, null, 8, [
			"name",
			"class-prefix",
			"css-icon"
		])) : f("", !0)])], 6));
	}
});
//#endregion
export { O as default };
