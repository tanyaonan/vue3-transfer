globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, At as t, Ft as n, G as r, H as i, J as a, Mt as o, N as ee, Pt as s, T as c, _ as l, b as u, bt as d, d as f, jt as p, pt as m, tt as h, u as g, ut as _, v, w as te, x as y, y as b, yt as x, z as ne } from "./vue.runtime.js";
import { t as S } from "./shared/element-plus/utils/vue/install.js";
import { t as C } from "./shared/element-plus/hooks/use-aria.js";
import { i as w, t as T } from "./shared/element-plus/utils/types.js";
import { n as E, r as D, t as O } from "./shared/element-plus/constants/event.js";
import { n as k, r as A } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as j, t as M } from "./shared/element-plus/utils/error.js";
import { n as re } from "./shared/element-plus/utils/dom/style.js";
import { r as ie } from "./shared/element-plus/hooks/use-namespace.js";
import { C as ae } from "./shared/element-plus-icons.js";
import { a as N } from "./shared/element-plus/utils/vue/icon.js";
import { t as P } from "./el-icon.js";
import { n as F, r as I } from "./el-form/hooks/use-form-common-props.js";
import { n as L, t as R } from "./el-form/hooks/use-form-item.js";
import { t as z } from "./shared/element-plus/utils/vue/validator.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/switch/src/switch.mjs
var B = k({
	modelValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: !1
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	loading: Boolean,
	size: {
		type: String,
		validator: z
	},
	width: {
		type: [String, Number],
		default: ""
	},
	inlinePrompt: Boolean,
	inactiveActionIcon: { type: N },
	activeActionIcon: { type: N },
	activeIcon: { type: N },
	inactiveIcon: { type: N },
	activeText: {
		type: String,
		default: ""
	},
	inactiveText: {
		type: String,
		default: ""
	},
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
	name: {
		type: String,
		default: ""
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	beforeChange: { type: A(Function) },
	id: String,
	tabindex: { type: [String, Number] },
	...C(["ariaLabel"])
}), V = {
	[D]: (e) => T(e) || p(e) || w(e),
	[O]: (e) => T(e) || p(e) || w(e),
	[E]: (e) => T(e) || p(e) || w(e)
}, H = [
	"id",
	"aria-checked",
	"aria-disabled",
	"aria-label",
	"name",
	"true-value",
	"false-value",
	"disabled",
	"tabindex"
], U = ["aria-hidden"], W = { key: 1 }, G = { key: 1 }, K = ["aria-hidden"], q = "ElSwitch", J = S(/* @__PURE__ */ c({
	name: q,
	__name: "switch",
	props: B,
	emits: V,
	setup(c, { expose: p, emit: S }) {
		let C = c, w = S, { formItem: k } = R(), A = I(), N = ie("switch"), { inputId: z } = L(C, { formItemContext: k }), B = F(l(() => {
			if (C.loading) return !0;
		})), V = _(C.modelValue !== !1), J = m(), oe = l(() => [
			N.b(),
			N.m(A.value),
			N.is("disabled", B.value),
			N.is("checked", Z.value)
		]), Y = l(() => [
			N.e("label"),
			N.em("label", "left"),
			N.is("active", !Z.value)
		]), se = l(() => [
			N.e("label"),
			N.em("label", "right"),
			N.is("active", Z.value)
		]), ce = l(() => ({ width: re(C.width) }));
		e(() => C.modelValue, () => {
			V.value = !0;
		});
		let X = l(() => V.value ? C.modelValue : !1), Z = l(() => X.value === C.activeValue);
		[C.activeValue, C.inactiveValue].includes(X.value) || (M(q, "model-value must be active-value or inactive-value"), w(D, C.inactiveValue), w(O, C.inactiveValue), w(E, C.inactiveValue)), e(Z, (e) => {
			J.value.checked = e, C.validateEvent && k?.validate?.("change").catch(d);
		});
		let Q = () => {
			let e = Z.value ? C.inactiveValue : C.activeValue;
			w(D, e), w(O, e), w(E, e), ee(() => {
				J.value.checked = Z.value;
			});
		}, $ = () => {
			if (B.value) return;
			let { beforeChange: e } = C;
			if (!e) {
				Q();
				return;
			}
			let n = e();
			[t(n), T(n)].includes(!0) || j(q, "beforeChange must return type `Promise<boolean>` or `boolean`"), t(n) ? n.then((e) => {
				e && Q();
			}).catch((e) => {
				M(q, `some error occurred: ${e}`);
			}) : n && Q();
		};
		return ne(() => {
			J.value.checked = Z.value;
		}), p({
			focus: () => {
				J.value?.focus?.();
			},
			checked: Z
		}), (e, t) => (i(), y("div", {
			class: o(oe.value),
			onClick: f($, ["prevent"])
		}, [
			v("input", {
				id: x(z),
				ref_key: "input",
				ref: J,
				class: o(x(N).e("input")),
				type: "checkbox",
				role: "switch",
				"aria-checked": Z.value,
				"aria-disabled": x(B),
				"aria-label": c.ariaLabel,
				name: c.name,
				"true-value": c.activeValue,
				"false-value": c.inactiveValue,
				disabled: x(B),
				tabindex: c.tabindex,
				onChange: Q,
				onKeydown: g($, ["enter"])
			}, null, 42, H),
			!c.inlinePrompt && (c.inactiveIcon || c.inactiveText || e.$slots.inactive) ? (i(), y("span", {
				key: 0,
				class: o(Y.value)
			}, [r(e.$slots, "inactive", {}, () => [c.inactiveIcon ? (i(), b(x(P), { key: 0 }, {
				default: h(() => [(i(), b(a(c.inactiveIcon)))]),
				_: 1
			})) : u("v-if", !0), !c.inactiveIcon && c.inactiveText ? (i(), y("span", {
				key: 1,
				"aria-hidden": Z.value
			}, n(c.inactiveText), 9, U)) : u("v-if", !0)])], 2)) : u("v-if", !0),
			v("span", {
				class: o(x(N).e("core")),
				style: s(ce.value)
			}, [c.inlinePrompt ? (i(), y("div", {
				key: 0,
				class: o(x(N).e("inner"))
			}, [Z.value ? (i(), y("div", {
				key: 1,
				class: o(x(N).e("inner-wrapper"))
			}, [r(e.$slots, "active", {}, () => [c.activeIcon ? (i(), b(x(P), { key: 0 }, {
				default: h(() => [(i(), b(a(c.activeIcon)))]),
				_: 1
			})) : u("v-if", !0), !c.activeIcon && c.activeText ? (i(), y("span", G, n(c.activeText), 1)) : u("v-if", !0)])], 2)) : (i(), y("div", {
				key: 0,
				class: o(x(N).e("inner-wrapper"))
			}, [r(e.$slots, "inactive", {}, () => [c.inactiveIcon ? (i(), b(x(P), { key: 0 }, {
				default: h(() => [(i(), b(a(c.inactiveIcon)))]),
				_: 1
			})) : u("v-if", !0), !c.inactiveIcon && c.inactiveText ? (i(), y("span", W, n(c.inactiveText), 1)) : u("v-if", !0)])], 2))], 2)) : u("v-if", !0), v("div", { class: o(x(N).e("action")) }, [c.loading ? (i(), b(x(P), {
				key: 0,
				class: o(x(N).is("loading"))
			}, {
				default: h(() => [te(x(ae))]),
				_: 1
			}, 8, ["class"])) : Z.value ? r(e.$slots, "active-action", { key: 1 }, () => [c.activeActionIcon ? (i(), b(x(P), { key: 0 }, {
				default: h(() => [(i(), b(a(c.activeActionIcon)))]),
				_: 1
			})) : u("v-if", !0)]) : Z.value ? u("v-if", !0) : r(e.$slots, "inactive-action", { key: 2 }, () => [c.inactiveActionIcon ? (i(), b(x(P), { key: 0 }, {
				default: h(() => [(i(), b(a(c.inactiveActionIcon)))]),
				_: 1
			})) : u("v-if", !0)])], 2)], 6),
			!c.inlinePrompt && (c.activeIcon || c.activeText || e.$slots.active) ? (i(), y("span", {
				key: 1,
				class: o(se.value)
			}, [r(e.$slots, "active", {}, () => [c.activeIcon ? (i(), b(x(P), { key: 0 }, {
				default: h(() => [(i(), b(a(c.activeIcon)))]),
				_: 1
			})) : u("v-if", !0), !c.activeIcon && c.activeText ? (i(), y("span", {
				key: 1,
				"aria-hidden": !Z.value
			}, n(c.activeText), 9, K)) : u("v-if", !0)])], 2)) : u("v-if", !0)
		], 2));
	}
}));
//#endregion
export { J as ElSwitch, J as default, V as switchEmits, B as switchProps };
