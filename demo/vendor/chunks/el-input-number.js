globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, G as n, H as r, Mt as i, S as a, T as o, V as s, _ as c, b as l, bt as u, ct as ee, d as te, jt as d, nt as f, tt as p, u as m, ut as ne, w as h, x as g, y as _, yt as v, z as y } from "./vue.runtime.js";
import { t as b } from "./shared/element-plus/utils/vue/install.js";
import { t as x } from "./shared/element-plus/hooks/use-aria.js";
import { i as S, l as C, s as w } from "./shared/element-plus/utils/types.js";
import { n as T, r as E, t as D } from "./shared/element-plus/constants/event.js";
import { n as O, r as k } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as re, t as A } from "./shared/element-plus/utils/error.js";
import { r as ie } from "./shared/element-plus/hooks/use-namespace.js";
import { O as ae, i as oe, t as se, w as ce } from "./shared/element-plus-icons.js";
import { t as j } from "./el-icon.js";
import { r as M } from "./shared/element-plus/hooks/use-size.js";
import { t as le } from "./el-input.js";
import { a as N, n as ue, r as de } from "./shared/element-plus/constants/aria.js";
import { n as fe, r as pe } from "./el-form/hooks/use-form-common-props.js";
import { t as me } from "./el-form/hooks/use-form-item.js";
import { n as he } from "./shared/element-plus/hooks/use-locale.js";
import { t as P } from "./shared/element-plus/directives/repeat-click.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input-number/src/input-number.mjs
var F = O({
	id: {
		type: String,
		default: void 0
	},
	step: {
		type: Number,
		default: 1
	},
	stepStrictly: Boolean,
	max: {
		type: Number,
		default: 2 ** 53 - 1
	},
	min: {
		type: Number,
		default: -(2 ** 53 - 1)
	},
	modelValue: { type: [Number, null] },
	readonly: Boolean,
	disabled: {
		type: Boolean,
		default: void 0
	},
	size: M,
	controls: {
		type: Boolean,
		default: !0
	},
	controlsPosition: {
		type: String,
		default: "",
		values: ["", "right"]
	},
	valueOnClear: {
		type: k([
			String,
			Number,
			null
		]),
		validator: (e) => e === null || S(e) || ["min", "max"].includes(e),
		default: null
	},
	name: String,
	placeholder: String,
	precision: {
		type: Number,
		validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10)
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	...x(["ariaLabel"]),
	inputmode: {
		type: k(String),
		default: void 0
	},
	align: {
		type: k(String),
		default: "center"
	},
	disabledScientific: Boolean,
	formatter: { type: Function },
	parser: { type: Function },
	tabindex: {
		type: [String, Number],
		default: 0
	}
}), I = {
	[D]: (e, t) => t !== e,
	blur: (e) => e instanceof FocusEvent,
	focus: (e) => e instanceof FocusEvent,
	[T]: (e) => S(e) || C(e),
	[E]: (e) => S(e) || C(e)
}, L = ["aria-label"], ge = ["aria-label"], R = /* @__PURE__ */ o({
	name: "ElInputNumber",
	__name: "input-number",
	props: F,
	emits: I,
	setup(e, { expose: o, emit: b }) {
		let x = e, O = b, { t: k } = he(), M = ie("input-number"), F = ne(), I = ee({
			currentValue: x.modelValue,
			userInput: null
		}), { formItem: R } = me(), z = c(() => S(x.modelValue) && x.modelValue <= x.min), B = c(() => S(x.modelValue) && x.modelValue >= x.max), _e = c(() => {
			let e = K(x.step);
			return w(x.precision) ? Math.max(K(x.modelValue), e) : (e > x.precision && A("InputNumber", "precision should not be less than the decimal places of step"), x.precision);
		}), V = c(() => x.controls && x.controlsPosition === "right"), H = pe(), U = fe(), W = c(() => {
			if (I.userInput !== null) return I.userInput;
			let e = I.currentValue;
			if (C(e)) return "";
			if (S(e)) {
				if (Number.isNaN(e)) return "";
				w(x.precision) || (e = e.toFixed(x.precision));
			}
			return e;
		}), G = (e, t) => {
			if (w(t) && (t = _e.value), t === 0) return Math.round(e);
			let n = String(e), r = n.indexOf(".");
			if (r === -1 || !n.replace(".", "").split("")[r + t]) return e;
			let i = n.length;
			return n.charAt(i - 1) === "5" && (n = `${n.slice(0, Math.max(0, i - 1))}6`), Number.parseFloat(Number(n).toFixed(t));
		}, K = (e) => {
			if (C(e)) return 0;
			let t = e.toString(), n = t.indexOf("."), r = 0;
			return n !== -1 && (r = t.length - n - 1), r;
		}, q = (e, t = 1) => S(e) ? e >= 2 ** 53 - 1 && t === 1 ? (A("InputNumber", "The value has reached the maximum safe integer limit."), e) : e <= -(2 ** 53 - 1) && t === -1 ? (A("InputNumber", "The value has reached the minimum safe integer limit."), e) : G(e + x.step * t) : I.currentValue, ve = (e) => {
			let t = ue(e), n = de(e);
			if (x.disabledScientific && ["e", "E"].includes(n)) {
				e.preventDefault();
				return;
			}
			switch (t) {
				case N.up:
					e.preventDefault(), J();
					break;
				case N.down:
					e.preventDefault(), Y();
					break;
			}
		}, J = () => {
			x.readonly || U.value || B.value || (Z(q(Number(W.value) || 0)), O(T, I.currentValue), $());
		}, Y = () => {
			x.readonly || U.value || z.value || (Z(q(Number(W.value) || 0, -1)), O(T, I.currentValue), $());
		}, X = (e, t) => {
			let { max: n, min: r, step: i, precision: a, stepStrictly: o, valueOnClear: s } = x;
			n < r && re("InputNumber", "min should not be greater than max.");
			let c = e ? Number.parseFloat(String(e)) : Number(e);
			if (C(e) || Number.isNaN(c)) return null;
			if (e === "") {
				if (s === null) return null;
				c = d(s) ? {
					min: r,
					max: n
				}[s] : s;
			}
			return o && (c = G(Math.round(G(c / i)) * i, a), c !== e && t && O("update:modelValue", c)), w(a) || (c = G(c, a)), (c > n || c < r) && (c = c > n ? n : r, t && O("update:modelValue", c)), c;
		}, Z = (e, t = !0) => {
			let n = I.currentValue, r = X(e);
			if (!t) {
				O(E, r);
				return;
			}
			I.userInput = null, !(n === r && e) && (O(E, r), n !== r && O(D, r, n), x.validateEvent && R?.validate?.("change").catch(u), I.currentValue = r);
		}, ye = (e) => {
			I.userInput = e;
			let t = e === "" ? null : Number.parseFloat(e);
			Number.isNaN(t) && (t = null), O(T, t), Z(t, !1);
		}, be = (e) => {
			let t = e === "" ? "" : Number.parseFloat(e);
			(S(t) && !Number.isNaN(t) || x.formatter && Number.isNaN(t) || t === "") && Z(t), $(), I.userInput = null;
		}, xe = () => {
			F.value?.focus?.();
		}, Q = () => {
			F.value?.blur?.();
		}, Se = (e) => {
			O("focus", e);
		}, Ce = (e) => {
			I.userInput = null, I.currentValue === null && F.value?.input && (F.value.input.value = x.formatter?.("") ?? ""), O("blur", e), x.validateEvent && R?.validate?.("blur").catch(u);
		}, $ = () => {
			I.currentValue !== x.modelValue && (I.currentValue = x.modelValue);
		}, we = (e) => {
			document.activeElement === e.target && e.preventDefault();
		};
		return t(() => x.modelValue, (e, t) => {
			let n = X(e, !0);
			I.userInput === null && n !== t && (I.currentValue = n);
		}, { immediate: !0 }), t(() => x.precision, () => {
			I.currentValue = X(x.modelValue);
		}), y(() => {
			let { min: e, max: t, modelValue: n } = x, r = F.value?.input;
			if (r.setAttribute("role", "spinbutton"), Number.isFinite(t) ? r.setAttribute("aria-valuemax", String(t)) : r.removeAttribute("aria-valuemax"), Number.isFinite(e) ? r.setAttribute("aria-valuemin", String(e)) : r.removeAttribute("aria-valuemin"), r.setAttribute("aria-valuenow", I.currentValue || I.currentValue === 0 ? String(I.currentValue) : ""), r.setAttribute("aria-disabled", String(U.value)), !S(n) && n != null) {
				let e = Number(n);
				Number.isNaN(e) && (e = null), O(E, e);
			}
			r.addEventListener("wheel", we, { passive: !1 });
		}), s(() => {
			(F.value?.input)?.setAttribute("aria-valuenow", `${I.currentValue ?? ""}`);
		}), o({
			focus: xe,
			blur: Q
		}), (t, o) => (r(), g("div", {
			class: i([
				v(M).b(),
				v(M).m(v(H)),
				v(M).is("disabled", v(U)),
				v(M).is("without-controls", !e.controls),
				v(M).is("controls-right", V.value),
				v(M).is(e.align, !!e.align)
			]),
			onDragstart: o[0] ||= te(() => {}, ["prevent"])
		}, [
			e.controls ? f((r(), g("span", {
				key: 0,
				role: "button",
				"aria-label": v(k)("el.inputNumber.decrease"),
				class: i([v(M).e("decrease"), v(M).is("disabled", z.value)]),
				onKeydown: m(Y, ["enter"])
			}, [n(t.$slots, "decrease-icon", {}, () => [h(v(j), null, {
				default: p(() => [V.value ? (r(), _(v(se), { key: 0 })) : (r(), _(v(ce), { key: 1 }))]),
				_: 1
			})])], 42, L)), [[v(P), Y]]) : l("v-if", !0),
			e.controls ? f((r(), g("span", {
				key: 1,
				role: "button",
				"aria-label": v(k)("el.inputNumber.increase"),
				class: i([v(M).e("increase"), v(M).is("disabled", B.value)]),
				onKeydown: m(J, ["enter"])
			}, [n(t.$slots, "increase-icon", {}, () => [h(v(j), null, {
				default: p(() => [V.value ? (r(), _(v(oe), { key: 0 })) : (r(), _(v(ae), { key: 1 }))]),
				_: 1
			})])], 42, ge)), [[v(P), J]]) : l("v-if", !0),
			h(v(le), {
				id: e.id,
				ref_key: "input",
				ref: F,
				type: e.formatter ? "text" : "number",
				step: e.step,
				"model-value": W.value,
				placeholder: e.placeholder,
				readonly: e.readonly,
				disabled: v(U),
				size: v(H),
				max: e.max,
				min: e.min,
				name: e.name,
				"aria-label": e.ariaLabel,
				"validate-event": !1,
				inputmode: e.inputmode,
				formatter: e.formatter,
				parser: e.parser,
				tabindex: e.tabindex,
				onKeydown: ve,
				onBlur: Ce,
				onFocus: Se,
				onInput: ye,
				onChange: be
			}, a({ _: 2 }, [t.$slots.prefix ? {
				name: "prefix",
				fn: p(() => [n(t.$slots, "prefix")]),
				key: "0"
			} : void 0, t.$slots.suffix ? {
				name: "suffix",
				fn: p(() => [n(t.$slots, "suffix")]),
				key: "1"
			} : void 0]), 1032, [
				"id",
				"type",
				"step",
				"model-value",
				"placeholder",
				"readonly",
				"disabled",
				"size",
				"max",
				"min",
				"name",
				"aria-label",
				"inputmode",
				"formatter",
				"parser",
				"tabindex"
			])
		], 34));
	}
}), z = /* @__PURE__ */ e({
	ElInputNumber: () => B,
	default: () => B,
	inputNumberEmits: () => I,
	inputNumberProps: () => F
}), B = b(R);
//#endregion
export { z as n, B as t };
