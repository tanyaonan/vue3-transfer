globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, C as r, E as i, Ft as a, G as o, H as s, J as c, M as l, Mt as u, N as d, Ot as f, Pt as p, T as m, Tt as h, U as g, W as _, Z as v, _ as y, at as b, b as x, bt as S, d as C, gt as w, jt as T, mt as E, nt as ee, o as te, p as ne, tt as re, ut as D, v as O, x as k, y as A, yt as j } from "./vue.runtime.js";
import { i as M, t as ie } from "./shared/element-plus/utils/vue/install.js";
import { t as ae } from "./shared/lodash/omit.js";
import { t as N } from "./shared/lodash/isEqual.js";
import { n as oe, t as se } from "./shared/element-plus/hooks/use-aria.js";
import { a as P, i as F, s as I, t as L } from "./shared/element-plus/utils/types.js";
import { r as R, t as z } from "./shared/element-plus/constants/event.js";
import { n as ce, r as B } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as V } from "./shared/element-plus/hooks/use-namespace.js";
import { r as H } from "./shared/element-plus/hooks/use-size.js";
import { n as U, r as W } from "./el-form/hooks/use-form-common-props.js";
import { t as le } from "./el-form/constants.js";
import { n as G, t as K } from "./el-form/hooks/use-form-item.js";
import { t as q } from "./shared/element-plus/hooks/use-deprecated.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/checkbox/src/checkbox.mjs
var J = {
	modelValue: {
		type: [
			Number,
			String,
			Boolean
		],
		default: void 0
	},
	label: {
		type: [
			String,
			Boolean,
			Number,
			Object
		],
		default: void 0
	},
	value: {
		type: [
			String,
			Boolean,
			Number,
			Object
		],
		default: void 0
	},
	indeterminate: Boolean,
	disabled: {
		type: Boolean,
		default: void 0
	},
	checked: Boolean,
	name: {
		type: String,
		default: void 0
	},
	trueValue: {
		type: [String, Number],
		default: void 0
	},
	falseValue: {
		type: [String, Number],
		default: void 0
	},
	trueLabel: {
		type: [String, Number],
		default: void 0
	},
	falseLabel: {
		type: [String, Number],
		default: void 0
	},
	id: {
		type: String,
		default: void 0
	},
	border: Boolean,
	size: H,
	tabindex: [String, Number],
	validateEvent: {
		type: Boolean,
		default: !0
	},
	ariaLabel: String,
	...se(["ariaControls"])
}, Y = {
	[R]: (e) => T(e) || F(e) || L(e),
	change: (e) => T(e) || F(e) || L(e)
}, ue = {
	modelValue: void 0,
	label: void 0,
	value: void 0,
	disabled: void 0,
	name: void 0,
	trueValue: void 0,
	falseValue: void 0,
	trueLabel: void 0,
	falseLabel: void 0,
	id: void 0,
	validateEvent: !0
}, X = Symbol("checkboxGroupContextKey"), de = ({ model: e, isChecked: t }) => {
	let r = n(X, void 0), i = n(le, void 0), a = y(() => {
		let n = r?.max?.value, i = r?.min?.value;
		return !I(n) && e.value.length >= n && !t.value || !I(i) && e.value.length <= i && t.value;
	});
	return {
		isDisabled: U(y(() => r === void 0 ? i?.disabled ?? a.value : r.disabled?.value || a.value)),
		isLimitDisabled: a
	};
}, fe = (e, { model: r, isLimitExceeded: a, hasOwnLabel: o, isDisabled: s, isLabeledByFormItem: c }) => {
	let l = n(X, void 0), { formItem: u } = K(), { emit: f } = i();
	function p(t) {
		return [
			!0,
			e.trueValue,
			e.trueLabel
		].includes(t) ? e.trueValue ?? e.trueLabel ?? !0 : e.falseValue ?? e.falseLabel ?? !1;
	}
	function m(e, t) {
		f(z, p(e), t);
	}
	function h(e) {
		if (a.value) return;
		let t = e.target;
		f(z, p(t.checked), e);
	}
	async function g(t) {
		a.value || !o.value && !s.value && c.value && (t.composedPath().some((e) => e.tagName === "LABEL") || (r.value = p([
			!1,
			e.falseValue,
			e.falseLabel
		].includes(r.value)), await d(), m(r.value, t)));
	}
	let _ = y(() => l?.validateEvent || e.validateEvent);
	return t(() => e.modelValue, () => {
		_.value && u?.validate("change").catch(S);
	}), {
		handleChange: h,
		onClickRoot: g
	};
}, pe = (e) => {
	let t = D(!1), { emit: r, vnode: a } = i(), o = n(X, void 0), s = y(() => I(o) === !1), c = D(!1), l = y(() => {
		let e = a.props ?? {};
		return "modelValue" in e || "model-value" in e;
	}), u = y({
		get() {
			return s.value ? o?.modelValue?.value : l.value ? e.modelValue : t.value;
		},
		set(e) {
			s.value && h(e) ? (c.value = o?.max?.value !== void 0 && e.length > o?.max.value && e.length > u.value.length, c.value === !1 && o?.changeEvent?.(e)) : (r(R, e), t.value = e);
		}
	});
	return {
		model: u,
		isGroup: s,
		isLimitExceeded: c
	};
}, me = (e, t, { model: r }) => {
	let i = n(X, void 0), a = D(!1), o = y(() => P(e.value) ? e.label : e.value), s = y(() => {
		let t = r.value;
		return L(t) ? t : h(t) ? f(o.value) ? t.map(E).some((e) => N(e, o.value)) : t.map(E).includes(o.value) : t == null ? !!t : t === e.trueValue || t === e.trueLabel;
	});
	return {
		checkboxButtonSize: W(y(() => i?.size?.value), { prop: !0 }),
		isChecked: s,
		isFocused: a,
		checkboxSize: W(y(() => i?.size?.value)),
		hasOwnLabel: y(() => !!t.default || !P(o.value)),
		actualValue: o
	};
}, he = (e, t) => {
	let { formItem: n } = K(), { model: r, isGroup: i, isLimitExceeded: a } = pe(e), { isFocused: o, isChecked: s, checkboxButtonSize: c, checkboxSize: l, hasOwnLabel: u, actualValue: d } = me(e, t, { model: r }), { isDisabled: f } = de({
		model: r,
		isChecked: s
	}), { inputId: p, isLabeledByFormItem: m } = G(e, {
		formItemContext: n,
		disableIdGeneration: u,
		disableIdManagement: i
	}), { handleChange: g, onClickRoot: _ } = fe(e, {
		model: r,
		isLimitExceeded: a,
		hasOwnLabel: u,
		isDisabled: f,
		isLabeledByFormItem: m
	});
	return (() => {
		function t() {
			h(r.value) && !r.value.includes(d.value) ? r.value.push(d.value) : r.value = e.trueValue ?? e.trueLabel ?? !0;
		}
		e.checked && t();
	})(), q({
		from: "label act as value",
		replacement: "value",
		version: "3.0.0",
		scope: "el-checkbox",
		ref: "https://element-plus.org/en-US/component/checkbox.html"
	}, y(() => i.value && P(e.value))), q({
		from: "true-label",
		replacement: "true-value",
		version: "3.0.0",
		scope: "el-checkbox",
		ref: "https://element-plus.org/en-US/component/checkbox.html"
	}, y(() => !!e.trueLabel)), q({
		from: "false-label",
		replacement: "false-value",
		version: "3.0.0",
		scope: "el-checkbox",
		ref: "https://element-plus.org/en-US/component/checkbox.html"
	}, y(() => !!e.falseLabel)), {
		inputId: p,
		isLabeledByFormItem: m,
		isChecked: s,
		isDisabled: f,
		isFocused: o,
		checkboxButtonSize: c,
		checkboxSize: l,
		hasOwnLabel: u,
		model: r,
		actualValue: d,
		handleChange: g,
		onClickRoot: _
	};
}, ge = [
	"id",
	"indeterminate",
	"name",
	"tabindex",
	"disabled"
], _e = /* @__PURE__ */ m({
	name: "ElCheckbox",
	__name: "checkbox",
	props: J,
	emits: Y,
	setup(e) {
		let t = e, { inputId: n, isLabeledByFormItem: i, isChecked: d, isDisabled: f, isFocused: p, checkboxSize: m, hasOwnLabel: h, model: g, actualValue: _, handleChange: S, onClickRoot: w } = he(t, v()), T = y(() => t.trueValue || t.falseValue || t.trueLabel || t.falseLabel ? {
			"true-value": t.trueValue ?? t.trueLabel ?? !0,
			"false-value": t.falseValue ?? t.falseLabel ?? !1
		} : { value: _.value }), E = V("checkbox"), D = y(() => [
			E.b(),
			E.m(m.value),
			E.is("disabled", f.value),
			E.is("bordered", t.border),
			E.is("checked", d.value)
		]), M = y(() => [
			E.e("input"),
			E.is("disabled", f.value),
			E.is("checked", d.value),
			E.is("indeterminate", t.indeterminate),
			E.is("focus", p.value)
		]);
		return (t, d) => (s(), A(c(!j(h) && j(i) ? "span" : "label"), {
			for: !j(h) && j(i) ? null : j(n),
			class: u(D.value),
			"aria-controls": e.indeterminate ? e.ariaControls : null,
			"aria-checked": e.indeterminate ? "mixed" : void 0,
			"aria-label": e.ariaLabel,
			onClick: j(w)
		}, {
			default: re(() => [O("span", { class: u(M.value) }, [ee(O("input", l({
				id: j(n),
				"onUpdate:modelValue": d[0] ||= (e) => b(g) ? g.value = e : null,
				class: j(E).e("original"),
				type: "checkbox",
				indeterminate: e.indeterminate,
				name: e.name,
				tabindex: e.tabindex,
				disabled: j(f)
			}, T.value, {
				onChange: d[1] ||= (...e) => j(S) && j(S)(...e),
				onFocus: d[2] ||= (e) => p.value = !0,
				onBlur: d[3] ||= (e) => p.value = !1,
				onClick: d[4] ||= C(() => {}, ["stop"])
			}), null, 16, ge), [[te, j(g)]]), O("span", { class: u(j(E).e("inner")) }, null, 2)], 2), j(h) ? (s(), k("span", {
				key: 0,
				class: u(j(E).e("label"))
			}, [o(t.$slots, "default"), t.$slots.default ? x("v-if", !0) : (s(), k(ne, { key: 0 }, [r(a(e.label), 1)], 64))], 2)) : x("v-if", !0)]),
			_: 3
		}, 8, [
			"for",
			"class",
			"aria-controls",
			"aria-checked",
			"aria-label",
			"onClick"
		]));
	}
}), ve = [
	"name",
	"tabindex",
	"disabled"
], Z = /* @__PURE__ */ m({
	name: "ElCheckboxButton",
	__name: "checkbox-button",
	props: J,
	emits: Y,
	setup(e) {
		let t = e, { isFocused: i, isChecked: c, isDisabled: d, checkboxButtonSize: f, model: m, actualValue: h, handleChange: g } = he(t, v()), _ = y(() => t.trueValue || t.falseValue || t.trueLabel || t.falseLabel ? {
			"true-value": t.trueValue ?? t.trueLabel ?? !0,
			"false-value": t.falseValue ?? t.falseLabel ?? !1
		} : { value: h.value }), S = n(X, void 0), w = V("checkbox"), T = y(() => {
			let e = S?.fill?.value ?? "";
			return {
				backgroundColor: e,
				borderColor: e,
				color: S?.textColor?.value ?? "",
				boxShadow: e ? `-1px 0 0 0 ${e}` : void 0
			};
		}), E = y(() => [
			w.b("button"),
			w.bm("button", f.value),
			w.is("disabled", d.value),
			w.is("checked", c.value),
			w.is("focus", i.value)
		]);
		return (t, n) => (s(), k("label", { class: u(E.value) }, [ee(O("input", l({
			"onUpdate:modelValue": n[0] ||= (e) => b(m) ? m.value = e : null,
			class: j(w).be("button", "original"),
			type: "checkbox",
			name: e.name,
			tabindex: e.tabindex,
			disabled: j(d)
		}, _.value, {
			onChange: n[1] ||= (...e) => j(g) && j(g)(...e),
			onFocus: n[2] ||= (e) => i.value = !0,
			onBlur: n[3] ||= (e) => i.value = !1,
			onClick: n[4] ||= C(() => {}, ["stop"])
		}), null, 16, ve), [[te, j(m)]]), t.$slots.default || e.label ? (s(), k("span", {
			key: 0,
			class: u(j(w).be("button", "inner")),
			style: p(j(c) ? T.value : void 0)
		}, [o(t.$slots, "default", {}, () => [r(a(e.label), 1)])], 6)) : x("v-if", !0)], 2));
	}
}), ye = ce({
	modelValue: {
		type: B(Array),
		default: () => []
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	min: Number,
	max: Number,
	size: H,
	fill: String,
	textColor: String,
	tag: {
		type: String,
		default: "div"
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	options: { type: B(Array) },
	props: {
		type: B(Object),
		default: () => Q
	},
	type: {
		type: String,
		values: ["checkbox", "button"],
		default: "checkbox"
	},
	...se(["ariaLabel"])
}), be = {
	[R]: (e) => h(e),
	change: (e) => h(e)
}, Q = {
	label: "label",
	value: "value",
	disabled: "disabled"
}, xe = /* @__PURE__ */ m({
	name: "ElCheckboxGroup",
	__name: "checkbox-group",
	props: ye,
	emits: be,
	setup(e, { emit: n }) {
		let r = e, i = n, a = V("checkbox"), f = U(), { formItem: p } = K(), { inputId: m, isLabeledByFormItem: h } = G(r, { formItemContext: p }), v = async (e) => {
			i(R, e), await d(), i(z, e);
		}, b = y({
			get() {
				return r.modelValue;
			},
			set(e) {
				v(e);
			}
		}), x = y(() => ({
			...Q,
			...r.props
		})), C = (e) => {
			let { label: t, value: n, disabled: r } = x.value, i = {
				label: e[t],
				value: e[n],
				disabled: e[r]
			};
			return {
				...ae(e, [
					t,
					n,
					r
				]),
				...i
			};
		}, T = y(() => r.type === "button" ? Z : _e);
		return g(X, {
			...oe(w(r), [
				"size",
				"min",
				"max",
				"validateEvent",
				"fill",
				"textColor"
			]),
			disabled: f,
			modelValue: b,
			changeEvent: v
		}), t(() => r.modelValue, (e, t) => {
			r.validateEvent && !N(e, t) && p?.validate("change").catch(S);
		}), (t, n) => (s(), A(c(e.tag), {
			id: j(m),
			class: u(j(a).b("group")),
			role: "group",
			"aria-label": j(h) ? void 0 : e.ariaLabel || "checkbox-group",
			"aria-labelledby": j(h) ? j(p)?.labelId : void 0
		}, {
			default: re(() => [o(t.$slots, "default", {}, () => [(s(!0), k(ne, null, _(e.options, (e, t) => (s(), A(c(T.value), l({ key: t }, { ref_for: !0 }, C(e)), null, 16))), 128))])]),
			_: 3
		}, 8, [
			"id",
			"class",
			"aria-label",
			"aria-labelledby"
		]));
	}
}), Se = /* @__PURE__ */ e({
	ElCheckbox: () => $,
	ElCheckboxButton: () => Ce,
	ElCheckboxGroup: () => we,
	checkboxDefaultProps: () => Q,
	checkboxEmits: () => Y,
	checkboxGroupContextKey: () => X,
	checkboxGroupEmits: () => be,
	checkboxGroupProps: () => ye,
	checkboxProps: () => J,
	checkboxPropsDefaults: () => ue,
	default: () => $
}), $ = ie(_e, {
	CheckboxButton: Z,
	CheckboxGroup: xe
}), Ce = M(Z), we = M(xe);
//#endregion
export { we as n, Se as r, $ as t };
