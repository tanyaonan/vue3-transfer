globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, C as t, Ft as n, H as r, M as i, Mt as a, N as o, Pt as ee, T as s, U as te, _ as c, b as ne, bt as l, jt as u, l as d, nt as f, tt as p, u as re, ut as m, v as h, w as g, y as _, yt as v } from "./vue.runtime.js";
import { t as y } from "./shared/element-plus/utils/vue/install.js";
import { n as ie, t as b } from "./shared/element-plus/hooks/use-aria.js";
import { t as ae } from "./shared/lodash/debounce.js";
import { l as x } from "./shared/element-plus/utils/types.js";
import { r as S, t as C } from "./shared/element-plus/constants/event.js";
import { n as w, r as T } from "./shared/element-plus/utils/vue/props/runtime.js";
import { y as oe } from "./shared/vueuse.js";
import { r as se } from "./shared/element-plus/hooks/use-namespace.js";
import { h as ce, t as le } from "./shared/element-plus-icons.js";
import { t as E } from "./el-icon.js";
import { i as D, t as ue } from "./el-tooltip.js";
import { r as O } from "./shared/element-plus/hooks/use-size.js";
import { a as k, n as de } from "./shared/element-plus/constants/aria.js";
import { n as fe, r as pe } from "./el-form/hooks/use-form-common-props.js";
import { n as me } from "./shared/element-plus/hooks/use-focus-controller.js";
import { n as he, t as ge } from "./el-form/hooks/use-form-item.js";
import { n as _e } from "./shared/element-plus/hooks/use-locale.js";
import { t as A } from "./el-button.js";
import { n as ve, r as j } from "./shared/element-plus/hooks/use-empty-values.js";
import { t as ye } from "./shared/element-plus/directives/click-outside.js";
import { a as be, i as xe, o as Se, r as Ce, t as we } from "./el-color-picker-panel.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/color-picker/src/color-picker.mjs
var M = w({
	persistent: {
		type: Boolean,
		default: !0
	},
	modelValue: {
		type: T(String),
		default: void 0
	},
	id: String,
	showAlpha: Boolean,
	colorFormat: { type: T(String) },
	disabled: {
		type: Boolean,
		default: void 0
	},
	clearable: {
		type: Boolean,
		default: !0
	},
	size: O,
	popperClass: D.popperClass,
	popperStyle: D.popperStyle,
	tabindex: {
		type: [String, Number],
		default: 0
	},
	teleported: D.teleported,
	appendTo: D.appendTo,
	predefine: { type: T(Array) },
	validateEvent: {
		type: Boolean,
		default: !0
	},
	...j,
	...b(["ariaLabel"])
}), N = {
	[S]: (e) => u(e) || x(e),
	[C]: (e) => u(e) || x(e),
	activeChange: (e) => u(e) || x(e),
	focus: (e) => e instanceof FocusEvent,
	blur: (e) => e instanceof FocusEvent,
	clear: () => !0
}, P = {
	persistent: !0,
	modelValue: void 0,
	disabled: void 0,
	clearable: !0,
	popperStyle: void 0,
	tabindex: 0,
	teleported: !0,
	validateEvent: !0,
	valueOnClear: void 0
}, Te = [
	"id",
	"aria-label",
	"aria-labelledby",
	"aria-description",
	"aria-disabled",
	"tabindex"
], F = y(/* @__PURE__ */ s({
	name: "ElColorPicker",
	__name: "color-picker",
	props: M,
	emits: N,
	setup(s, { expose: u, emit: y }) {
		let b = s, x = y, { t: w } = _e(), T = se("color"), { formItem: D } = ge(), O = pe(), j = fe(), { valueOnClear: M, isEmptyValue: N } = ve(b, null), P = Ce(b, x), { inputId: F, isLabeledByFormItem: I } = he(b, { formItemContext: D }), L = m(), R = m(), z = m(), B = m(!1), V = m(!1), H = !0, { isFocused: U, handleFocus: W, handleBlur: G } = me(R, {
			disabled: j,
			beforeBlur(e) {
				return L.value?.isFocusInsideContent(e);
			},
			afterBlur() {
				q(!1), Z(), b.validateEvent && D?.validate?.("blur").catch(l);
			}
		}), K = oe(() => z.value?.color ?? P.color), Ee = c(() => ie(b, Object.keys(Se))), De = c(() => !b.modelValue && !V.value ? "transparent" : Me(K, b.showAlpha)), Oe = c(() => !b.modelValue && !V.value ? "" : K.value), ke = c(() => I.value ? void 0 : b.ariaLabel || w("el.colorpicker.defaultLabel")), Ae = c(() => I.value ? D?.labelId : void 0), je = c(() => [
			T.b("picker"),
			T.is("disabled", j.value),
			T.bm("picker", O.value),
			T.is("focused", U.value)
		]);
		function Me(e, t) {
			let { r: n, g: r, b: i, a } = e.toRgb();
			return t ? `rgba(${n}, ${r}, ${i}, ${a})` : `rgb(${n}, ${r}, ${i})`;
		}
		function q(e) {
			B.value = e;
		}
		let J = ae(q, 100, { leading: !0 });
		function Y() {
			j.value || q(!0);
		}
		function X() {
			J(!1), Z();
		}
		function Z() {
			o(() => {
				b.modelValue ? K.fromString(b.modelValue) : (K.value = "", o(() => {
					V.value = !1;
				}));
			});
		}
		function Ne() {
			j.value || (B.value && Z(), J(!B.value));
		}
		function Pe() {
			let e = N(K.value) ? M.value : K.value;
			x(S, e), x(C, e), b.validateEvent && D?.validate("change").catch(l), J(!1), o(() => {
				let e = new xe({
					enableAlpha: b.showAlpha,
					format: b.colorFormat || "",
					value: b.modelValue
				});
				K.compare(e) || Z();
			});
		}
		function Fe() {
			J(!1), x(S, M.value), x(C, M.value), b.modelValue !== M.value && b.validateEvent && D?.validate("change").catch(l), Z(), x("clear");
		}
		function Ie() {
			z?.value?.inputRef?.focus();
		}
		function Le() {
			B.value && (X(), U.value && $());
		}
		function Q(e) {
			e.preventDefault(), e.stopPropagation(), q(!1), Z();
		}
		function Re(e) {
			switch (de(e)) {
				case k.enter:
				case k.numpadEnter:
				case k.space:
					e.preventDefault(), e.stopPropagation(), Y();
					break;
				case k.esc:
					Q(e);
					break;
			}
		}
		function $() {
			R.value.focus();
		}
		function ze() {
			R.value.blur();
		}
		return e(() => Oe.value, (e) => {
			H && x("activeChange", e), H = !0;
		}), e(() => K.value, () => {
			!b.modelValue && !V.value && (V.value = !0);
		}), e(() => b.modelValue, (e) => {
			e ? e && e !== K.value && (H = !1, K.fromString(e)) : V.value = !1;
		}), e(() => B.value, () => {
			z.value && o(z.value.update);
		}), te(be, P), u({
			color: K,
			show: Y,
			hide: X,
			focus: $,
			blur: ze
		}), (e, o) => (r(), _(v(ue), {
			ref_key: "popper",
			ref: L,
			visible: B.value,
			"show-arrow": !1,
			"fallback-placements": [
				"bottom",
				"top",
				"right",
				"left"
			],
			offset: 0,
			"gpu-acceleration": !1,
			"popper-class": [v(T).be("picker", "panel"), s.popperClass],
			"popper-style": s.popperStyle,
			"stop-popper-mouse-event": !1,
			pure: "",
			loop: "",
			role: "dialog",
			effect: "light",
			trigger: "click",
			teleported: s.teleported,
			transition: `${v(T).namespace.value}-zoom-in-top`,
			persistent: s.persistent,
			"append-to": s.appendTo,
			onShow: Ie,
			onHide: o[2] ||= (e) => q(!1)
		}, {
			content: p(() => [f((r(), _(v(we), i({
				ref_key: "pickerPanelRef",
				ref: z
			}, Ee.value, {
				border: !1,
				"validate-event": !1,
				onKeydown: re(Q, ["esc"])
			}), {
				footer: p(() => [h("div", null, [s.clearable ? (r(), _(v(A), {
					key: 0,
					class: a(v(T).be("footer", "link-btn")),
					text: "",
					size: "small",
					onClick: Fe
				}, {
					default: p(() => [t(n(v(w)("el.colorpicker.clear")), 1)]),
					_: 1
				}, 8, ["class"])) : ne("v-if", !0), g(v(A), {
					plain: "",
					size: "small",
					class: a(v(T).be("footer", "btn")),
					onClick: Pe
				}, {
					default: p(() => [t(n(v(w)("el.colorpicker.confirm")), 1)]),
					_: 1
				}, 8, ["class"])])]),
				_: 1
			}, 16)), [[
				v(ye),
				Le,
				R.value
			]])]),
			default: p(() => [h("div", i({
				id: v(F),
				ref_key: "triggerRef",
				ref: R
			}, e.$attrs, {
				class: je.value,
				role: "button",
				"aria-label": ke.value,
				"aria-labelledby": Ae.value,
				"aria-description": v(w)("el.colorpicker.description", { color: s.modelValue || "" }),
				"aria-disabled": v(j),
				tabindex: v(j) ? void 0 : s.tabindex,
				onKeydown: Re,
				onFocus: o[0] ||= (...e) => v(W) && v(W)(...e),
				onBlur: o[1] ||= (...e) => v(G) && v(G)(...e)
			}), [h("div", {
				class: a(v(T).be("picker", "trigger")),
				onClick: Ne
			}, [h("span", { class: a([v(T).be("picker", "color"), v(T).is("alpha", s.showAlpha)]) }, [h("span", {
				class: a(v(T).be("picker", "color-inner")),
				style: ee({ backgroundColor: De.value })
			}, [f(g(v(E), { class: a([v(T).be("picker", "icon"), v(T).is("icon-arrow-down")]) }, {
				default: p(() => [g(v(le))]),
				_: 1
			}, 8, ["class"]), [[d, s.modelValue || V.value]]), f(g(v(E), { class: a([v(T).be("picker", "empty"), v(T).is("icon-close")]) }, {
				default: p(() => [g(v(ce))]),
				_: 1
			}, 8, ["class"]), [[d, !s.modelValue && !V.value]])], 6)], 2)], 2)], 16, Te)]),
			_: 1
		}, 8, [
			"visible",
			"popper-class",
			"popper-style",
			"teleported",
			"transition",
			"persistent",
			"append-to"
		]));
	}
}));
//#endregion
export { F as ElColorPicker, F as default, N as colorPickerEmits, M as colorPickerProps, P as colorPickerPropsDefaults };
